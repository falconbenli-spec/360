# Open Duet — local run notes

[Open Duet](https://github.com/Anil-matcha/open-duet) is an open-source,
self-hosted alternative to Claude Duet: named AI agents with instructions,
memory, routines, isolated computers, and approvals before they act.

The clone lives in `open-duet/` and is git-ignored: it is a third-party
repository run locally, not vendored into this project.

## Setup that was verified

```bash
git clone --depth 1 https://github.com/Anil-matcha/open-duet.git open-duet

# backend: SQLite + local Claude Code CLI as the engine
cd open-duet/backend
cp .env.example .env
#   DATABASE_BACKEND=sqlite
#   LOCAL_EXECUTION_ENABLED=true
#   LOCAL_CLAUDE_CLI_PATH=<path to claude>
uv sync
eval "$(uv run --no-sync python ../scripts/dev-env.py .env)"   # generates TOKEN_ENCRYPTION_KEYS / HOOK_TOKEN
uv run --no-sync alembic upgrade head
uv run --no-sync fastapi run app/main.py --host 127.0.0.1 --port 8000

# frontend
cd ../frontend
cp .env.example .env.local        # NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api/v1
npm install && npm run dev        # http://localhost:3000
```

First launch asks for an owner passphrase (10+ chars), then the onboarding
wizard checks engines, creates a starter agent, and sends a first request.
Verified end to end with the Claude engine: the agent replied successfully.

Requirements: Node.js 22+, uv, and at least one engine (Claude Code CLI,
Codex CLI, Gemini CLI, Cursor, OpenRouter key, or an OpenAI-compatible API).
Docker is only needed for optional isolated agent computers.
