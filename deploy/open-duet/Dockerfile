# Open Duet image for 360: the upstream server image plus the GitHub CLI (gh),
# so the PR-reviewer agent can read pull requests and post review comments.
#
# Build the upstream image first (with Claude Code baked in), then this one:
#   OPEN_DOTS_ENGINES="@anthropic-ai/claude-code" docker compose build
#   docker build -t open-dots:360 -f /opt/open-duet-360/Dockerfile /opt/open-duet-360
#
# install.sh does both.
ARG BASE_IMAGE=open-dots:local
FROM ${BASE_IMAGE}

USER root
RUN apt-get update \
 && apt-get install -y --no-install-recommends curl gnupg \
 && install -d -m 0755 /etc/apt/keyrings \
 && curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg \
      -o /etc/apt/keyrings/githubcli-archive-keyring.gpg \
 && chmod go+r /etc/apt/keyrings/githubcli-archive-keyring.gpg \
 && echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" \
      > /etc/apt/sources.list.d/github-cli.list \
 && apt-get update \
 && apt-get install -y --no-install-recommends gh \
 && apt-get purge -y gnupg \
 && apt-get autoremove -y \
 && rm -rf /var/lib/apt/lists/*
USER opendots
