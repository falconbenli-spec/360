# Video-editing skills for Claude Code: install and test report

Date: 2026-10-31. Tested in a Claude Code cloud container (Ubuntu 24.04, Node 22.23, Python 3.13,
FFmpeg 6.1.1 with libx264/libx265/libass/drawtext, Chromium, no GPU). Reproduce with
`scripts/install-video-skills.sh`.

## Summary

| # | Requested | Status | Installed as | Test result |
|---|-----------|--------|--------------|-------------|
| 1 | Embedded Captions (HeyGen HyperFrames) | Retired upstream, folded into `/hyperframes` | `.claude/skills/hyperframes` (+ `hyperframes-cli`, `hyperframes-registry`, `media-use`) | Scaffold, lint, caption component install and 10 s 1080p draft render all pass |
| 2 | Talking Head Recut (HeyGen HyperFrames) | Retired upstream, folded into `/hyperframes` | same as above (`references/overlays.md`, `references/captions.md`) | same as above |
| 3 | Herk Edit Kit | Works, clone-and-use kit (not a single skill) | clone to a sibling folder, run `claude` inside it | `npm test` 11/11 pass; 8 s demo rendered via HyperFrames 0.7.109 |
| 4 | FFmpeg Skill (kajisho5) | Works | `.claude/skills/ffmpeg-skill` (v3.1.1) | doctor: 73/73 required capabilities; probe, cut, caption burn, 9:16 fit, silence, reels check, contact sheet all pass |
| 5 | Video Toolkit (Digital Samba) | Works locally; AI tools need paid cloud GPU | clone to a sibling folder, run `claude` inside it | Remotion hello-world (25 s 1080p) and moviepy quick-spot (15 s 1080p) rendered with no keys |

## Details and missing requirements

### 1 and 2. HeyGen HyperFrames skills
`npx skills add https://github.com/heygen-com/hyperframes --skill embedded-captions` finds only the
7 skills in the repo; neither requested skill exists there any more. `npx hyperframes skills update
embedded-captions talking-head-recut` reports both as retired and installs the four core skills
instead. Their content now lives in `hyperframes/references/captions.md` and `overlays.md`
("cards over a talking head"). HyperFrames is Apache-2.0.

- Needs: Node, Chrome/Chromium, FFmpeg. All present.
- Optional, missing: `whisper-cpp` (local transcription), Kokoro TTS, MusicGen. HyperFrames
  `doctor` lists the install hints.
- Registry search with `--on-device` wants a one-time 33 MB model download; the CLI asks for
  consent first. Not done.
- Paid or account-gated: HeyGen avatars, voices and cloud render (`hyperframes billing`), and the
  HyperFrames desktop app. The `/media-use` skill says which steps are free and which need HeyGen.
  Nothing paid was used.

### 3. Herk Edit Kit (MIT)
15 skills (cut-silences, cut-mistakes, short-form-edit, video-storytelling, motion-showreel,
style-library, and others) plus 406 motion-graphics cards. It is a project workspace: clone it and
start Claude Code inside the folder. `npm run setup` created `.env` with empty keys.

- Needs: Node 22+, git, FFmpeg/ffprobe, Chrome. All present; tests and demo render pass.
- Missing for real edits: a word-level transcript. Default helper calls ElevenLabs Scribe (paid,
  your key). Alternatives: OpenAI Whisper API (paid), or local Whisper / whisper.cpp (free, not
  installed; needs model download).
- Optional paid: Kie.ai for generated B-roll. Not configured.

### 4. ffmpeg-skill (MIT)
Fully local, stdlib Python only, no keys. `doctor` warns that Ubuntu's FFmpeg 6.1.1 predates the
upstream fix for CVE-2026-8461 (the distro may have backported it). Optional missing:
`faster-whisper` or parakeet for `caption.py --transcribe`. Installed copy is not auto-updated;
re-run `npx ffmpeg-skill --project` to refresh.

### 5. Claude Code Video Toolkit (MIT)
13 skills (remotion, moviepy, ffmpeg, playwright-recording, elevenlabs, runpod, ltx2, ...) and 15
slash commands (`/video`, `/setup`, `/publish`, ...). Local rendering works. `uv sync` installed the
Python side (moviepy 2.1.2).

- Paid or account-gated, not run: `/setup` deploys models to Modal (Starter plan has free monthly
  credit but requires a payment method) or RunPod; LTX-2 video generation needs an A100-80GB;
  ElevenLabs voice; Cloudflare R2 storage; YouTube OAuth for `/publish`. Ask before enabling any.

## What this machine still lacks
- Local speech-to-text (whisper.cpp / faster-whisper): blocks free transcription for herk-edit-kit,
  HyperFrames `init --video`, and `caption.py --transcribe`. Install with
  `pip install faster-whisper` (CPU works, slow) or build whisper.cpp.
- No GPU: AI generation (LTX-2, SoulX, music) must go to a paid cloud GPU.
- Docker is installed but not running (only HyperFrames' optional containerised render path).
