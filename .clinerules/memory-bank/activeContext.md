# Active Context

## Current Work Focus
- Phase 3.1: AI model loading with background load

## Recent Changes
- Phase 3.1: Added QVAC AI model loading with fire-and-forget
- Model downloads first, then loads in background
- LoadingScreen proceeds after download
- Dashboard polls status every 3 seconds
- Uptime shows simplified format (<1m, 20m, 1h, 2h)

## Next Steps
1. Integrate chat with AI model
2. RAG implementation for document analysis

## Active Decisions and Considerations
- Using QVAC SDK for AI model management
- Model file: medpsy-1.7b-q4_k_m-imat.gguf (local)
- Download from GitHub releases if missing
- Fire-and-forget loadAIModel() for non-blocking UX

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
- @qvac/sdk ^0.10.2 works with local GGUF files