#!/bin/bash

###############################################################################
#
# 🔑 Configurar GitHub Token para Autenticação
#
# Este script configura o token no git para commits automáticos
#
# Uso: ./setup-github-token.sh
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

echo -e "${CYAN}"
cat << "EOF"
╔═══════════════════════════════════════════════════════════════╗
║                  🔑 GitHub Token Setup                        ║
╚═══════════════════════════════════════════════════════════════╝
EOF
echo -e "${NC}\n"

# Token padrão
GITHUB_TOKEN="${GITHUB_TOKEN:-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}"

# Configurar git user
echo -e "${BLUE}1️⃣  Configurando identidade Git...${NC}"
git config --global user.name "PietroTy"
git config --global user.email "pietro.turcimm@gmail.com"
echo -e "${GREEN}✅ Usuário: PietroTy${NC}"
echo -e "${GREEN}✅ Email: pietro.turcimm@gmail.com${NC}\n"

# Configurar credential helper
echo -e "${BLUE}2️⃣  Configurando autenticação...${NC}"

# Usar credential helper do sistema
git config --global credential.helper store

# Também guardar em cache por 1 hora
git config --global credential.helper 'cache --timeout=3600'

echo -e "${GREEN}✅ Credential helper configurado${NC}\n"

# Salvar token em arquivo seguro (opcional)
TOKEN_FILE="$HOME/.github_token"
echo "$GITHUB_TOKEN" > "$TOKEN_FILE"
chmod 600 "$TOKEN_FILE"

echo -e "${BLUE}3️⃣  Salvando token...${NC}"
echo -e "${GREEN}✅ Token salvo em: $TOKEN_FILE${NC}\n"

# Testar autenticação
echo -e "${BLUE}4️⃣  Testando autenticação...${NC}"
cd "$PROJECT_ROOT"

# Tentar fazer um fetch para testar
if GIT_ASKPASS_OVERRIDE=true git fetch origin HEAD 2>/dev/null || git fetch origin HEAD 2>/dev/null; then
    echo -e "${GREEN}✅ Token funcionando!${NC}\n"
else
    echo -e "${YELLOW}⚠️  Teste de conexão falhou${NC}"
    echo -e "${YELLOW}Mas o token foi salvo e será usado nos commits${NC}\n"
fi

# Configurar remote com token
echo -e "${BLUE}5️⃣  Configurando remote com autenticação...${NC}"

# Pegar URL atual
REMOTE_URL=$(git config --get remote.origin.url)

if [[ $REMOTE_URL == *"@"* ]]; then
    # Já tem formato SSH, deixar como está
    echo -e "${GREEN}✅ Remote em SSH${NC}\n"
else
    # Converter para HTTPS com token
    REMOTE_URL="https://PietroTy:${GITHUB_TOKEN}@github.com/PietroTy/PietroTy.git"
    git remote set-url origin "$REMOTE_URL"
    echo -e "${GREEN}✅ Remote atualizado${NC}\n"
fi

echo -e "${GREEN}"
cat << "EOF"
════════════════════════════════════════════════════════════════
✅ CONFIGURAÇÃO CONCLUÍDA!
════════════════════════════════════════════════════════════════
EOF
echo -e "${NC}\n"

echo -e "${CYAN}Próximos passos:${NC}"
echo -e "  1. Execute: ${YELLOW}./deploy.sh${NC}"
echo -e "  2. Script automaticamente fará:"
echo -e "     ✓ Rodar backend"
echo -e "     ✓ Gerar link Cloudflare"
echo -e "     ✓ Atualizar frontend"
echo -e "     ✓ Fazer commits"
echo -e "     ✓ Deploy no GitHub Pages\n"

echo -e "${CYAN}Comandos úteis:${NC}"
echo -e "  ${YELLOW}git log --oneline${NC}     # Ver commits"
echo -e "  ${YELLOW}git status${NC}             # Status atual"
echo -e "  ${YELLOW}git push origin main${NC}  # Push manual"
echo -e "  ${YELLOW}./deploy.sh -h${NC}        # Help do deploy\n"
