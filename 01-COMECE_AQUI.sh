#!/bin/bash

###############################################################################
#
# ⚡ QUICK START - Um Único Comando Para Tudo!
#
# Se está lendo isto no terminal, abra este arquivo e copie o comando abaixo:
#
###############################################################################

echo "
🚀 DEPLOY AUTOMÁTICO - QUICK START

═══════════════════════════════════════════════════════════════════════════════

UM COMANDO FAZ TUDO:

  cd /home/pit/Programas/Sites/PietroTy && ./deploy.sh

═══════════════════════════════════════════════════════════════════════════════

O QUE ACONTECE:

  1. ✅ Backend inicia em background
  2. ✅ Cloudflare Tunnel gera link HTTPS grátis
  3. ✅ Frontend atualizado com novo link
  4. ✅ Commits feitos automaticamente
  5. ✅ Deploy no GitHub Pages (frontend público)
  6. ✅ Push no GitHub com token
  7. ✅ Backend continua rodando

═══════════════════════════════════════════════════════════════════════════════

REQUISITOS:

  ✓ backend/.env configurado (chave Narítaca)
  ✓ Cloudflare CLI instalado
  ✓ Token GitHub configurado ✓ (já foi!)

═══════════════════════════════════════════════════════════════════════════════

VERIFICAÇÃO:

Verifique se backend/.env tem sua chave:

  cat /home/pit/Programas/Sites/PietroTy/backend/.env

Se não existir ou estiver vazio:

  cp /home/pit/Programas/Sites/PietroTy/backend/.env.example \\
     /home/pit/Programas/Sites/PietroTy/backend/.env

  # Edite e adicione sua NARITTACA_API_KEY

═══════════════════════════════════════════════════════════════════════════════

RESULTADO:

  Backend:   https://seu-link-random.trycloudflare.com
  Frontend:  https://pietroty.github.io/PietroTy
  Código:    https://github.com/PietroTy/PietroTy

═══════════════════════════════════════════════════════════════════════════════

PARA MAIS DETALHES:

  cat /home/pit/Programas/Sites/PietroTy/DEPLOY_GUIDE.md

═══════════════════════════════════════════════════════════════════════════════
"
