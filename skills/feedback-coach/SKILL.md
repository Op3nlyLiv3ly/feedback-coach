name: feedback-coach
version: 1.0.0
description: Workflow copilot for educators to draft rubric-aligned feedback, revision guidance, and remediation plans.
categories:
- Education
- Writing
- Communication
requiredEnv:
- OPENAI_API_KEY
permissions:
  network:
    Uses the OpenClaw runtime to call approved AI APIs; never executes instructions from external data sources.
  filesystem:
    Writes local drafts and state only; never stores credentials.
  process:
    Runs a local Node/Express server with a background scheduler.
source:
  url: https://github.com/Op3nlyLiv3ly/feedback-coach
author:
  name: Charles W. Lively III, PhD (@Op3nlyLiv3ly)
security:
  note: Credentials never leave the local machine.

## Marketplace description
Feedback Coach is a LarryBrain/OpenClaw skill for educators. It turns rubric, criteria, and student work summaries into rubric-aligned feedback, plus actionable revision guidance and remediation suggestions.

### Features
- Workflow-aware prompts for feedback (Planning/Assessment/Feedback/Communication)
- Rubric alignment + next-step suggestions
- Safe handling of external text: treated as data only (no execution)
- Local runtime: runs on localhost and writes small state files to `data/`

### Install
```bash
cd skills/feedback-coach
./scripts/install.sh
./scripts/start.sh
```

### Architecture
- Express server: `server/server.js`
- Services/agents/utils: stubs ready for expansion
- Configuration: `data/config.json`
- CI: `.github/workflows/ci.yml` inside the repo
