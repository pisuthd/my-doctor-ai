# Active Context

## Current Work Focus
- Phase 3: AI model loading with QVAC SDK

## Recent Changes
- Phase 3: Added QVAC AI model loading with download support
- Model auto-downloads if missing from GitHub releases
- Dashboard shows real AI status and uptime
- Model stored at `{userData}/medpsy-1.7b-q4_k_m-imat.gguf`

## Next Steps
1. Integrate chat with AI model
2. RAG implementation for document analysis

## Active Decisions and Considerations
- Using QVAC SDK for AI model management
- Model downloaded on-demand if not found
- Download progress shown in Dashboard
- Model file ignored in Git (.gguf pattern)

## Important Patterns and Preferences
- Blue gradient theme (Slack-style)
- Component-based page structure
- Phase-by-phase development with Git commits
- IPC handlers for main process communication

## Learnings and Project Insights
- QVAC SDK provides loadModel/unloadModel for local GGUF models
- Electron app.getPath('userData') for persistent storage
- IPC handle for async main-renderer communication
- Preload script exposes API via contextBridge