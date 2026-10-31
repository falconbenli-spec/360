#!/usr/bin/env bash
# Installs the video-editing skills that were verified to work for Claude Code
# (see docs/video-skills-report.md). Safe to re-run. macOS and Linux.
#
#   scripts/install-video-skills.sh            # project-level (.claude/skills in this repo)
#   scripts/install-video-skills.sh --global   # user-level (~/.claude/skills)
#   KITS_DIR=~/video-kits scripts/install-video-skills.sh --kits   # also clone the two kits
set -euo pipefail

SCOPE="project"; KITS=0
for a in "$@"; do
  case "$a" in
    --global) SCOPE="global" ;;
    --kits) KITS=1 ;;
    -h|--help) sed -n 2,8p "$0"; exit 0 ;;
    *) echo "unknown flag: $a" >&2; exit 2 ;;
  esac
done

need() { command -v "$1" >/dev/null 2>&1 || { echo "MISSING: $1 — $2" >&2; MISSING=1; }; }
MISSING=0
need node    "install Node.js 22+ (https://nodejs.org)"
need npx     "comes with Node.js"
need git     "install git"
need ffmpeg  "macOS: brew install ffmpeg | Ubuntu: sudo apt install ffmpeg"
need ffprobe "ships with ffmpeg"
need python3 "Python 3.10+ (used by ffmpeg-skill)"
[ "$MISSING" = 0 ] || { echo "Install the missing tools above, then re-run." >&2; exit 1; }
NODE_MAJOR=$(node -p 'process.versions.node.split(".")[0]')
[ "$NODE_MAJOR" -ge 22 ] || echo "WARN: Node $NODE_MAJOR found; herk-edit-kit needs Node >= 22" >&2

ROOT=$(cd "$(dirname "$0")/.." && pwd)

echo "== 1/3 ffmpeg-skill (42 local FFmpeg tools, no keys) =="
if [ "$SCOPE" = project ]; then (cd "$ROOT" && npx --yes ffmpeg-skill --project); else npx --yes ffmpeg-skill; fi
npx --yes ffmpeg-skill doctor || true

echo "== 2/3 HyperFrames core skills (hyperframes, hyperframes-cli, hyperframes-registry, media-use) =="
# 'embedded-captions' and 'talking-head-recut' were retired upstream; the CLI
# folds their content into the /hyperframes skill and installs the core set.
npx --yes hyperframes skills update embedded-captions talking-head-recut
if [ "$SCOPE" = project ]; then
  mkdir -p "$ROOT/.claude/skills"
  for s in hyperframes hyperframes-cli hyperframes-registry media-use; do
    rm -rf "$ROOT/.claude/skills/$s" && cp -R "$HOME/.claude/skills/$s" "$ROOT/.claude/skills/$s"
  done
fi
npx --yes hyperframes doctor || true

if [ "$KITS" = 1 ]; then
  KITS_DIR=${KITS_DIR:-"$ROOT/../video-kits"}; mkdir -p "$KITS_DIR"
  echo "== 3/3 kits -> $KITS_DIR =="
  [ -d "$KITS_DIR/herk-edit-kit" ] || git clone --depth 1 https://github.com/nateherkai/herk-edit-kit.git "$KITS_DIR/herk-edit-kit"
  (cd "$KITS_DIR/herk-edit-kit" && npm ci && npm run setup && npm test)
  [ -d "$KITS_DIR/claude-code-video-toolkit" ] || git clone --depth 1 https://github.com/digitalsamba/claude-code-video-toolkit.git "$KITS_DIR/claude-code-video-toolkit"
  (cd "$KITS_DIR/claude-code-video-toolkit" && command -v uv >/dev/null && uv sync || echo "uv not found: skip Python extras (pip install uv)")
  echo "Run 'claude' inside each kit folder to use its skills and slash commands."
else
  echo "== 3/3 kits skipped (pass --kits to clone herk-edit-kit and claude-code-video-toolkit) =="
fi
echo "Done. Installed skills:"; ls "$([ "$SCOPE" = project ] && echo "$ROOT/.claude/skills" || echo "$HOME/.claude/skills")"
