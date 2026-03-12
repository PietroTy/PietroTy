# 🎯 Cheat Sheet - Comandos Essenciais

## 🚀 DEPLOY (100% Automático)

```bash
# Faz TUDO em um comando:
./deploy.sh

# ✅ Inicia backend
# ✅ Gera link Cloudflare
# ✅ Atualiza frontend
# ✅ Commits automáticos
# ✅ Deploy GitHub Pages
# ✅ Push no GitHub
# ✅ Mantém backend rodando
```

## 🔑 Setup Token (Primeira Vez)

```bash
# Configura autenticação GitHub
./setup-github-token.sh

# Ou manualmente:
git config --global user.name "PietroTy"
git config --global user.email "pietro.turcimm@gmail.com"
```

## 📦 Desenvolvimento Local

```bash
# Terminal 1 - Backend
cd backend && npm start
# http://localhost:3001

# Terminal 2 - Frontend
npm start
# http://localhost:3000
```

## 🛠️ Configuração

```bash
# Preparar backend
cd backend
cp .env.example .env
nano .env  # Adicione NARITTACA_API_KEY

# Instalar Cloudflare CLI
curl -L --output cloudflared.tgz https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.tgz
tar -xzf cloudflared.tgz
sudo mv cloudflared /usr/local/bin/
```

## 🔗 Links Úteis

```bash
# Teste backend local
curl http://localhost:3001/health

# Teste backend produção
curl https://seu-link-cloudflare.com/health

# Ver logs backend
tail -f .backend.log

# Ver logs tunnel
tail -f .tunnel.log
```

## 🐛 Troubleshooting

```bash
# Backend não inicia?
tail -50 .backend.log
cat backend/.env | grep NARITTACA

# Cloudflare não funciona?
which cloudflared
tail -50 .tunnel.log

# Git não faz push?
git status
git push origin main -v

# GitHub Pages não atualiza?
git log --oneline -5
npm run build
```

## 🎮 Controle de Processos

```bash
# Ver backend rodando
ps aux | grep node

# Matar backend
kill $(cat .backend.pid)

# Matar tunnel
kill $(cat .tunnel.pid)

# Limpar PIDs
rm -f .backend.pid .tunnel.pid
```

## 📊 Ver Status

```bash
# Status git
git status

# Ver commits
git log --oneline -10

# Ver branches
git branch -a

# Ver remotes
git remote -v

# Ver tags
git tag
```

## 📝 Git Básico

```bash
# Ver mudanças
git diff
git diff --staged

# Adicionar tudo
git add .

# Commit
git commit -m "seu mensagem"

# Push
git push origin main

# Pull
git pull origin main

# Ver histórico
git log --oneline -20
```

## 🚀 Deploy Manual

```bash
# Apenas build
npm run build

# Apenas deploy GH Pages
npm run deploy

# Apenas push GitHub
git push origin main

# Apenas atualizar link
./update-backend-link.sh https://novo-link.com
```

## 💾 Backup & Restauração

```bash
# Backup local
tar -czf backup-$(date +%s).tar.gz . --exclude=node_modules --exclude=build --exclude=.git

# Clone
git clone https://github.com/PietroTy/PietroTy.git

# Atualizar local
git pull origin main
```

## 🔐 Segurança

```bash
# Ver token
cat ~/.github_token

# Mudar token
./setup-github-token.sh

# Verificar .gitignore
cat .gitignore

# Ver arquivos ignorados
git status --ignored
```

## 📚 Documenação

```bash
# Quick start
./01-COMECE_AQUI.sh

# Guia deploy
cat DEPLOY_GUIDE.md

# Setup backend
cat SETUP_BACKEND.md

# Estrutura projeto
cat ESTRUTURA.md

# Backend local
cat backend/README_LOCAL.md
```

## ⌚ Monitoramento

```bash
# Verificar saúde backend
watch -n 2 'curl -s http://localhost:3001/health'

# Ver logs em tempo real
tail -f .backend.log

# Monitorar pasta
watch -n 1 'ls -la | head -20'

# Monitorar git
watch -n 3 'git log --oneline -5'
```

## 🎓 Sequence Típica

```bash
# 1. Desenvolvimento
npm start  # Frontend

# 2. Testar chat
# Abrir http://localhost:3000

# 3. Comitar mudanças
git add .
git commit -m "feat: nova funcionalidade"

# 4. Deploy completo
./deploy.sh

# 5. Verificar
# Frontend: https://pietroty.github.io/PietroTy
# Backend: https://seu-link-cloudflare.com
```

## 🏃 Ultra-Quick Commands

```bash
# Deploy em uma linha
cd /home/pit/Programas/Sites/PietroTy && ./deploy.sh

# Reset tudo
rm -rf node_modules build .backend.pid .tunnel.pid && npm install

# Ver tudo
git status && git log --oneline -5 && ps aux | grep node

# Limpar logs
rm -f .backend.log .tunnel.log
```

---

**Lembre-se:** `./deploy.sh` faz praticamente tudo! 🚀

Qualquer dúvida, consulte `DEPLOY_GUIDE.md`
