# 🚀 Deploy Automático - Guia Completo

## 📋 O Que Faz

O script `deploy.sh` automatiza **100% do fluxo de publicação**:

1. ✅ **Inicia o Backend** em background
2. ✅ **Obtém link** do Cloudflare Tunnel (HTTPS grátis)
3. ✅ **Atualiza Frontend** com novo link automáticamente
4. ✅ **Faz Commits** automáticos com git
5. ✅ **Deploy GitHub Pages** (frontend público)
6. ✅ **Push GitHub** com token configurado
7. ✅ **Mantém Backend rodando** enquanto você trabalha

## 🔑 Setup Inicial (Primeira Vez)

### 1. Configurar Token GitHub

O script já vem com token pré-configurado. Para verificar:

```bash
cat ~/.github_token
```

Se precisar atualizar:

```bash
./setup-github-token.sh
```

Isto configura:
- ✅ Identidade Git (PietroTy, pietro.turcimm@gmail.com)
- ✅ Credential helper (para commits automáticos)
- ✅ Token salvo em `~/.github_token`
- ✅ Remote configurada com autenticação

### 2. Configurar Backend

```bash
cd backend
cp .env.example .env
nano .env  # ou seu editor
```

Adicione sua chave de API Narítaca:
```
NARITTACA_API_KEY=sua_chave_aqui
PORT=3001
```

### 3. Instalar Cloudflare CLI

```bash
# Linux/macOS
curl -L --output cloudflared.tgz \
  https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.tgz
tar -xzf cloudflared.tgz
sudo mv cloudflared /usr/local/bin/

# Verificar
cloudflared --version
```

## 🚀 Usar Deploy

### Primeira Execução

```bash
./deploy.sh
```

Isto vai:
1. Iniciar o backend
2. Gerar link Cloudflare (ex: `https://seu-link-random.trycloudflare.com`)
3. Atualizar `.env.local` com novo link
4. Fazer commit
5. Deploy no GitHub Pages
6. Push no GitHub
7. **Manter backend rodando** 🎯

### Ver Output

Enquanto roda, você vê em tempo real:
- Status de cada etapa
- Link gerado
- Logs do backend

### Parar Deploy

```bash
Ctrl+C  # Parar o script principal
# Backend continua rodando em background

# Ou matar o backend:
kill $(cat .backend.pid)
```

## 📊 Arquivos Gerados

Enquanto roda, os seguintes arquivos são criados:

```
.backend.pid       # ID do processo backend
.tunnel.pid        # ID do processo tunnel
.backend.log       # Logs do backend
.tunnel.log        # Logs do Cloudflare Tunnel
```

## 🔗 Links Após Deploy

Após rodar `./deploy.sh`, você terá:

- **Backend**: `https://seu-link-cloudflare.trycloudflare.com`
- **Frontend (GH Pages)**: `https://pietroty.github.io/PietroTy`
- **Repositório**: `https://github.com/PietroTy/PietroTy`

## 🎯 Workflow Típico

### Desenvolvimento Local

```bash
# Terminal 1 - Backend
cd backend && npm start

# Terminal 2 - Frontend
npm start

# Terminal 3 - Seu editor
vim src/...
```

### Deploy para Produção

```bash
# Quando pronto, execute em um terminal:
./deploy.sh

# Isso faz tudo automaticamente!
# Deixa rodando e acesse:
# - https://pietroty.github.io/PietroTy (frontend público)
# - https://seu-link.trycloudflare.com (backend público)
```

## 🆘 Troubleshooting

### "Backend não inicia"

```bash
# Verificar logs
tail -50 .backend.log

# Verificar porta
lsof -i :3001

# Verificar .env
cat backend/.env | grep NARITTACA
```

### "Cloudflare não gera link"

```bash
# Verificar se cloudflared está instalado
which cloudflared

# Verificar logs
tail -50 .tunnel.log

# Tentar manual
cloudflared tunnel run --url http://localhost:3001
```

### "Commit falha"

```bash
# Verificar status git
git status

# Testar push manual
git push origin main

# Se erro de autenticação:
./setup-github-token.sh
```

### "GitHub Pages não atualiza"

```bash
# Verificar branch
git branch -a

# Verificar online
# Settings > Pages > Source (deve ser "gh-pages")
# https://github.com/PietroTy/PietroTy/settings/pages
```

## 📝 Variáveis de Ambiente

### `.env.local` (Frontend)
```
REACT_APP_BACKEND_URL=https://seu-link-cloudflare.com
```

### `backend/.env` (Backend)
```
NARITTACA_API_KEY=sua_chave
PORT=3001
BACKEND_URL=https://seu-link-cloudflare.com
```

## 🔐 Segurança

- ✅ Token salvo em `~/.github_token` (home directory, seguro)
- ✅ `.env` files no `.gitignore` (não vai pro GitHub)
- ✅ Backend credenciais nunca no repositório
- ✅ Cloudflare Tunnel com HTTPS automático
- ✅ GitHub Pages com HTTPS automático

## 💡 Pro Tips

### Re-usar Link Anterior

Se não quiser novo link do Cloudflare:

```bash
# Parar script
Ctrl+C

# Atualizar link manualmente
./update-backend-link.sh https://seu-link-anterior.trycloudflare.com

# Apenas frontend + git, sem backend:
npm run build && npm run deploy
```

### Apenas Build sem Deploy

```bash
npm run build
# Saída em ./build/
```

### Ver Logs do Backend

Enquanto roda em background:

```bash
# Em tempo real
tail -f .backend.log

# Últimas 50 linhas
tail -50 .backend.log
```

### Verificar Backend Online

```bash
curl https://seu-link-cloudflare.com/health
# Deve retornar: { "status": "ok", "timestamp": "..." }
```

## 📚 Documentação Relacionada

- [BACKEND_README.md](BACKEND_README.md) - Overview backend
- [SETUP_BACKEND.md](SETUP_BACKEND.md) - Setup detalhado
- [PROXIMOS_PASSOS.md](PROXIMOS_PASSOS.md) - Passo a passo
- [ESTRUTURA.md](ESTRUTURA.md) - Organização de pastas

## 🎓 Resumo de Comandos

```bash
# Setup (primeira vez)
./setup-github-token.sh

# Deploy completo
./deploy.sh

# Desenvolvimento local
cd backend && npm start    # Terminal 1
npm start                  # Terminal 2

# Atualizar link manualmente
./update-backend-link.sh <novo-link>

# Push sem deploy
git push origin main

# Ver commits
git log --oneline

# Ver status
git status

# Parar backend
kill $(cat .backend.pid)
```

## ✨ Resultado Final

✅ Backend rodando em http://localhost:3001  
✅ Frontend rodando em http://localhost:3000  
✅ Backend público em https://seu-link.trycloudflare.com  
✅ Frontend público em https://pietroty.github.io/PietroTy  
✅ Repositório sincronizado em GitHub  

**Tudo automático com um único comando! 🚀**

---

**Dúvidas?** Consulte a documentação ou rode:
```bash
./deploy.sh -h  # (quando implementado help)
# Ou verifique os logs: tail -50 .backend.log
```
