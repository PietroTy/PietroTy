#!/bin/bash

set -eo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BACKEND_DIR="$PROJECT_ROOT/backend"

BACKEND_PID_FILE="$PROJECT_ROOT/.backend.pid"
TUNNEL_PID_FILE="$PROJECT_ROOT/.tunnel.pid"

BACKEND_LOG="$PROJECT_ROOT/.backend.log"
TUNNEL_LOG="$PROJECT_ROOT/.tunnel.log"

TUNNEL_URL=""

cleanup() {

echo "Limpando processos antigos"

for FILE in "$BACKEND_PID_FILE" "$TUNNEL_PID_FILE"
do
  if [ -f "$FILE" ]; then
    PID=$(cat "$FILE")
    kill -0 "$PID" 2>/dev/null && kill "$PID" || true
    rm -f "$FILE"
  fi
done

rm -f "$BACKEND_LOG" "$TUNNEL_LOG"

}

check_dependencies() {

echo "Verificando dependências"

command -v node >/dev/null || { echo "Node não instalado"; exit 1; }
command -v npm >/dev/null || { echo "NPM não instalado"; exit 1; }
command -v git >/dev/null || { echo "Git não instalado"; exit 1; }
command -v cloudflared >/dev/null || { echo "cloudflared não instalado"; exit 1; }

}

check_maritaca_key() {

echo "Verificando API key"

ENV_FILE="$BACKEND_DIR/.env"

if [ ! -f "$ENV_FILE" ]; then
  echo ".env não encontrado no backend"
  exit 1
fi

KEY=$(grep MARITACA_API_KEY "$ENV_FILE" | cut -d '=' -f2 | tr -d '"')

if [ -z "$KEY" ]; then
  echo "MARITACA_API_KEY não encontrada"
  exit 1
fi

}

install_deps() {

echo "Verificando dependências do projeto"

cd "$PROJECT_ROOT"

if [ ! -d "node_modules" ]; then
  npm install
fi

cd "$BACKEND_DIR"

if [ ! -d "node_modules" ]; then
  npm install
fi

}

start_backend() {

echo "Iniciando backend"

cd "$BACKEND_DIR"

npm start > "$BACKEND_LOG" 2>&1 &

BACKEND_PID=$!
echo "$BACKEND_PID" > "$BACKEND_PID_FILE"

echo "Aguardando backend"

for i in {1..30}; do

if curl -s http://localhost:3001/health >/dev/null; then
echo "Backend ativo"
return
fi

sleep 1

done

echo "Backend não respondeu"
tail -20 "$BACKEND_LOG"
exit 1

}

start_tunnel() {

echo "Iniciando tunnel"

cloudflared tunnel --url http://localhost:3001 > "$TUNNEL_LOG" 2>&1 &

TUNNEL_PID=$!
echo "$TUNNEL_PID" > "$TUNNEL_PID_FILE"

echo "Obtendo URL pública"

for i in {1..40}; do

URL=$(grep -o 'https://[-a-z0-9]*\.trycloudflare\.com' "$TUNNEL_LOG" | head -n1 || true)

if [ -n "$URL" ]; then
TUNNEL_URL="$URL"
echo "Tunnel ativo: $TUNNEL_URL"
return
fi

sleep 1

done

echo "Não foi possível obter URL"
tail -20 "$TUNNEL_LOG"
exit 1

}

update_frontend() {

echo "Atualizando configuração do frontend"

cd "$PROJECT_ROOT"

echo "REACT_APP_BACKEND_URL=$TUNNEL_URL" > .env.local

}

deploy_pages() {

echo "Deploy frontend"

cd "$PROJECT_ROOT"

npm run deploy

}

status() {

echo
echo "Deploy finalizado"
echo

echo "Backend PID: $(cat "$BACKEND_PID_FILE")"
echo "Tunnel: $TUNNEL_URL"
echo
echo "Frontend:"
echo "https://pietroty.github.io/PietroTy"

}

cleanup
check_dependencies
check_maritaca_key
install_deps
start_backend
start_tunnel
update_frontend
deploy_pages
status

echo
echo "Backend rodando em background"

tail -f "$BACKEND_LOG" || true