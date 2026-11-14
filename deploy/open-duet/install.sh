#!/usr/bin/env bash
# Installs or updates Open Duet for 360 on an Ubuntu/Debian server with Docker Compose.
#
#   sudo bash install.sh duet.example.com
#
# What it does:
#   1. installs Docker if missing
#   2. clones (or updates) Open Duet into /opt/open-duet
#   3. builds the upstream image with Claude Code, then the 360 image with gh on top
#   4. writes /opt/open-duet/open-dots.env from this folder's example (keeps an existing one)
#   5. starts the app behind Caddy with automatic HTTPS
#   6. tells you the remaining manual steps (passphrase, Claude sign-in, GH_TOKEN)
#
# Re-running it updates the code and rebuilds; data and settings are kept.
set -euo pipefail

DOMAIN="${1:-}"
if [ -z "$DOMAIN" ]; then
  echo "usage: sudo bash install.sh <domain>   (for example duet.example.com)" >&2
  exit 1
fi
if [ "$(id -u)" -ne 0 ]; then
  echo "run as root (sudo)" >&2
  exit 1
fi

KIT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR=/opt/open-duet
KIT_COPY=/opt/open-duet-360
UPSTREAM=https://github.com/Anil-matcha/open-duet.git

echo "==> Docker"
if ! command -v docker >/dev/null 2>&1; then
  curl -fsSL https://get.docker.com | sh
fi
docker compose version >/dev/null

echo "==> Code"
if [ -d "$APP_DIR/.git" ]; then
  git -C "$APP_DIR" pull --ff-only
else
  git clone "$UPSTREAM" "$APP_DIR"
fi
install -d "$KIT_COPY"
cp "$KIT_DIR/Dockerfile" "$KIT_DIR/compose.360.yaml" "$KIT_COPY/"

echo "==> Settings"
ENV_FILE="$APP_DIR/open-dots.env"
if [ ! -f "$ENV_FILE" ]; then
  install -m 0600 "$KIT_DIR/open-dots.env.example" "$ENV_FILE"
  sed -i "s|^OPEN_DOTS_PUBLIC_URL=.*|OPEN_DOTS_PUBLIC_URL=https://$DOMAIN|" "$ENV_FILE"
fi

echo "==> Images (this takes a few minutes the first time)"
cd "$APP_DIR"
OPEN_DOTS_ENGINES="@anthropic-ai/claude-code" docker compose build            # open-dots:local, with Claude Code
export OPEN_DOTS_IMAGE=open-dots:360
export OPEN_DOTS_DOMAIN="$DOMAIN"
docker compose -f compose.yaml -f "$KIT_COPY/compose.360.yaml" build         # open-dots:360, with gh on top

if ! grep -q '^TOKEN_ENCRYPTION_KEYS=.\+' "$ENV_FILE"; then
  echo "==> Encryption key"
  KEY=$(docker run --rm --entrypoint python open-dots:360 -c "from cryptography.fernet import Fernet; print(Fernet.generate_key().decode())")
  sed -i "s|^TOKEN_ENCRYPTION_KEYS=.*|TOKEN_ENCRYPTION_KEYS=$KEY|" "$ENV_FILE"
  echo "    saved to $ENV_FILE. BACK THIS FILE UP."
fi

echo "==> Start"
docker compose -f compose.yaml -f "$KIT_COPY/compose.360.yaml" -f deploy/proxy/compose.caddy.yaml up -d

cat <<EOF

Open Duet is starting at https://$DOMAIN

Remaining steps (once):
  1. Owner passphrase (from this shell, on purpose):
       cd $APP_DIR && OPEN_DOTS_IMAGE=open-dots:360 OPEN_DOTS_DOMAIN=$DOMAIN \\
         docker compose -f compose.yaml -f /opt/open-duet-360/compose.360.yaml -f deploy/proxy/compose.caddy.yaml \\
         exec open-dots python -m app.auth.cli set-passphrase
  2. Sign in to Claude inside the container (opens a link; paste the code back):
       ... exec -it open-dots claude auth login
  3. Put your GitHub token in $ENV_FILE (GH_TOKEN=...) and restart:
       ... up -d
  4. Check everything:
       ... exec open-dots python -m app.server doctor
  5. Open https://$DOMAIN/login/ and create the PR-reviewer agent (see agents/pr-reviewer.md).

Use the same three -f files for every docker compose command.
EOF
