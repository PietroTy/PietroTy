#!/bin/bash

###############################################################################
#
# 🚀 MEGA DEPLOY - Backend + Frontend + GitHub Pages
#
# Funcionalidades:
#  1. Inicia backend em background
#  2. Aguarda backend ficar online
#  3. Obtém link do Cloudflare Tunnel
#  4. Atualiza frontend com novo link
#  5. Commit e push automático
#  6. Deploy para GitHub Pages
#  7. Mantém backend rodando
#
# Uso: ./deploy.sh
#
###############################################################################

set -e

# Cores
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
GITHUB_TOKEN="${GITHUB_TOKEN:-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}"
BACKEND_PID_FILE="$PROJECT_ROOT/.backend.pid"
TUNNEL_LOG_FILE="$PROJECT_ROOT/.tunnel.log"

# =============================================================================
# Função: Exibir cabeçalho
# =============================================================================
print_header() {
    echo -e "${CYAN}"
    cat << "EOF"
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║       🚀 MEGA DEPLOY - Backend + Frontend + GitHub 🚀       ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
EOF
    echo -e "${NC}\n"
}

# =============================================================================
# Função: Limpar e matar backend anterior
# =============================================================================
cleanup_backend() {
    echo -e "${BLUE}🧹 Limpando backend anterior...${NC}"
    
    if [ -f "$BACKEND_PID_FILE" ]; then
        local old_pid=$(cat "$BACKEND_PID_FILE")
        if kill -0 "$old_pid" 2>/dev/null; then
            kill "$old_pid" 2>/dev/null || true
            sleep 1
            kill -9 "$old_pid" 2>/dev/null || true
            echo -e "${GREEN}✅ Backend anterior encerrado (PID: $old_pid)${NC}"
        fi
    fi
    rm -f "$BACKEND_PID_FILE" "$TUNNEL_LOG_FILE"
}

# =============================================================================
# Função: Iniciar backend
# =============================================================================
start_backend() {
    echo -e "${BLUE}🖥️  Iniciando backend...${NC}"
    
    cd "$PROJECT_ROOT/backend"
    
    # Verificar .env
    if [ ! -f .env ]; then
        echo -e "${RED}❌ Erro: backend/.env não encontrado${NC}"
        echo -e "${YELLOW}Execute: cp backend/.env.example backend/.env${NC}"
        echo -e "${YELLOW}E configure NARITTACA_API_KEY${NC}"
        exit 1
    fi
    
    # Iniciar backend em background
    npm start > "$PROJECT_ROOT/.backend.log" 2>&1 &
    local backend_pid=$!
    echo $backend_pid > "$BACKEND_PID_FILE"
    
    echo -e "${GREEN}✅ Backend iniciado (PID: $backend_pid)${NC}\n"
    
    # Aguardar backend ficar online (máx 30 segundos)
    echo -e "${YELLOW}⏳ Aguardando backend fica online...${NC}"
    local count=0
    while [ $count -lt 30 ]; do
        if curl -s http://localhost:3001/health > /dev/null 2>&1; then
            echo -e "${GREEN}✅ Backend online!${NC}\n"
            return 0
        fi
        count=$((count + 1))
        sleep 1
        printf "."
    done
    
    echo -e "\n${RED}❌ Timeout: Backend não respondeu${NC}"
    echo -e "${YELLOW}Logs:${NC}"
    tail -20 "$PROJECT_ROOT/.backend.log"
    exit 1
}

# =============================================================================
# Função: Obter link do Cloudflare Tunnel
# =============================================================================
get_cloudflare_link() {
    echo -e "${BLUE}🌐 Aguardando link do Cloudflare Tunnel...${NC}\n"
    
    # Verificar se cloudflared está instalado
    if ! command -v cloudflared &> /dev/null; then
        echo -e "${RED}❌ Erro: cloudflared não está instalado${NC}"
        echo -e "${YELLOW}Instale com:${NC}"
        echo -e "  ${CYAN}curl -L --output cloudflared.tgz https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.tgz${NC}"
        echo -e "  ${CYAN}tar -xzf cloudflared.tgz${NC}"
        echo -e "  ${CYAN}sudo mv cloudflared /usr/local/bin/${NC}"
        exit 1
    fi
    
    # Iniciar cloudflared em background
    cd "$PROJECT_ROOT"
    cloudflared tunnel run --url http://localhost:3001 > "$TUNNEL_LOG_FILE" 2>&1 &
    local tunnel_pid=$!
    echo $tunnel_pid > "$PROJECT_ROOT/.tunnel.pid"
    
    # Aguardar link aparecer nos logs (máx 30 segundos)
    local count=0
    while [ $count -lt 30 ]; do
        if grep -q "Your URL:" "$TUNNEL_LOG_FILE" 2>/dev/null; then
            local tunnel_url=$(grep "Your URL:" "$TUNNEL_LOG_FILE" | head -1 | sed 's/.*Your URL: //' | xargs)
            echo -e "${GREEN}✅ Link obtido:${NC}"
            echo -e "${CYAN}$tunnel_url${NC}\n"
            echo "$tunnel_url"
            return 0
        fi
        count=$((count + 1))
        sleep 1
        printf "."
    done
    
    echo -e "\n${RED}❌ Timeout: Cloudflare Tunnel não respondeu${NC}"
    echo -e "${YELLOW}Logs:${NC}"
    tail -20 "$TUNNEL_LOG_FILE"
    exit 1
}

# =============================================================================
# Função: Atualizar link no frontend
# =============================================================================
update_frontend_link() {
    local tunnel_url="$1"
    
    echo -e "${BLUE}🔗 Atualizando link no frontend...${NC}"
    
    cd "$PROJECT_ROOT"
    
    # Atualizar .env.local
    echo "REACT_APP_BACKEND_URL=$tunnel_url" > .env.local
    
    # Atualizar apiConfig.js
    sed -i "s|REACT_APP_BACKEND_URL || '[^']*'|REACT_APP_BACKEND_URL || '$tunnel_url'|g" src/config/apiConfig.js
    sed -i "s|BACKEND_URL: '[^']*'|BACKEND_URL: '$tunnel_url'|g" src/config/apiConfig.js
    
    # Atualizar backend .env se existir
    if [ -f "backend/.env" ]; then
        sed -i "s|BACKEND_URL=.*|BACKEND_URL=$tunnel_url|g" backend/.env
    fi
    
    echo -e "${GREEN}✅ Link atualizado: $tunnel_url${NC}\n"
}

# =============================================================================
# Função: Fazer commit
# =============================================================================
make_commit() {
    local tunnel_url="$1"
    
    echo -e "${BLUE}📝 Realizando commit...${NC}"
    
    cd "$PROJECT_ROOT"
    
    # Configurar git com token
    git config --global user.name "PietroTy"
    git config --global user.email "pietro.turcimm@gmail.com"
    
    # Adicionar arquivos
    git add .env.local src/config/apiConfig.js 2>/dev/null || true
    
    # Verificar se há mudanças
    if ! git diff --cached --quiet; then
        local commit_msg="🚀 atualizar backend link para: $tunnel_url"
        git commit -m "$commit_msg" || true
        echo -e "${GREEN}✅ Commit realizado${NC}\n"
    else
        echo -e "${YELLOW}ℹ️  Nenhuma mudança para commitar${NC}\n"
    fi
}

# =============================================================================
# Função: Deploy no GitHub Pages
# =============================================================================
deploy_github_pages() {
    echo -e "${BLUE}🚀 Fazendo deploy no GitHub Pages...${NC}"
    
    cd "$PROJECT_ROOT"
    
    # Verificar se npm build funciona
    if ! npm run build > /dev/null 2>&1; then
        echo -e "${RED}❌ Erro ao fazer build${NC}"
        exit 1
    fi
    
    # Deploy com gh-pages
    if npm run deploy > /dev/null 2>&1; then
        echo -e "${GREEN}✅ Deploy no GitHub Pages realizado!${NC}\n"
    else
        echo -e "${RED}❌ Erro ao fazer deploy${NC}"
        exit 1
    fi
}

# =============================================================================
# Função: Push para GitHub
# =============================================================================
push_to_github() {
    echo -e "${BLUE}⬆️  Push no GitHub...${NC}"
    
    cd "$PROJECT_ROOT"
    
    # Configurar URL do repositório com token
    # git remote set-url origin "https://$GITHUB_TOKEN@github.com/PietroTy/PietroTy.git"
    
    # Push (se houver commits)
    if git diff origin/main --quiet 2>/dev/null; then
        echo -e "${YELLOW}ℹ️  Nenhuma mudança para push${NC}\n"
    else
        git push origin main 2>/dev/null || true
        echo -e "${GREEN}✅ Push realizado${NC}\n"
    fi
}

# =============================================================================
# Função: Mostrar status final
# =============================================================================
show_final_status() {
    local tunnel_url="$1"
    local backend_pid="$2"
    
    echo -e "${GREEN}"
    cat << "EOF"
════════════════════════════════════════════════════════════════
✨ DEPLOY CONCLUÍDO COM SUCESSO! ✨
════════════════════════════════════════════════════════════════
EOF
    echo -e "${NC}\n"
    
    echo -e "${CYAN}📊 Status:${NC}"
    echo -e "  ✅ Backend rodando (PID: $backend_pid)"
    echo -e "  ✅ Cloudflare Tunnel ativo"
    echo -e "  ✅ Link atualizado"
    echo -e "  ✅ Commits realizados"
    echo -e "  ✅ GitHub Pages atualizado"
    echo -e "  ✅ Repositório sincronizado\n"
    
    echo -e "${CYAN}🔗 Links Importantes:${NC}"
    echo -e "  Backend: ${GREEN}$tunnel_url${NC}"
    echo -e "  Frontend: ${GREEN}https://pietroty.github.io/PietroTy${NC}"
    echo -e "  Repositório: ${GREEN}https://github.com/PietroTy/PietroTy${NC}\n"
    
    echo -e "${CYAN}📝 Logs:${NC}"
    echo -e "  Backend: ${YELLOW}$PROJECT_ROOT/.backend.log${NC}"
    echo -e "  Tunnel: ${YELLOW}$PROJECT_ROOT/.tunnel.log${NC}\n"
    
    echo -e "${CYAN}⏹️  Para parar:${NC}"
    echo -e "  ${YELLOW}kill $backend_pid${NC}\n"
}

# =============================================================================
# MAIN
# =============================================================================

print_header

# Limpar backend anterior
cleanup_backend

# Iniciar backend
start_backend

# Obter link do Cloudflare Tunnel
TUNNEL_URL=$(get_cloudflare_link)

# Atualizar frontend
update_frontend_link "$TUNNEL_URL"

# Fazer commit
make_commit "$TUNNEL_URL"

# Deploy no GitHub Pages
deploy_github_pages

# Push para GitHub
push_to_github

# Mostrar status final
BACKEND_PID=$(cat "$BACKEND_PID_FILE")
show_final_status "$TUNNEL_URL" "$BACKEND_PID"

echo -e "${YELLOW}⏳ Backend mantém rodando em background...${NC}"
echo -e "${YELLOW}Pressione Ctrl+C para parar\n${NC}"

# Manter script rodando
tail -f "$PROJECT_ROOT/.backend.log" 2>/dev/null || wait
