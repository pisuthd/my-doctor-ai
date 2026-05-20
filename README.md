# My Doctor AI

A desktop application for virtual doctor consultations powered by local AI. Your health data stays private with local AI processing.

![Electron](https://img.shields.io/badge/Electron-191970?style=flat-square&logo=electron)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## Features

### 💬 AI Chat
- Chat with a local AI medical assistant
- Multiple conversation sessions
- Streaming responses with thinking display
- Context-aware responses based on your profile

### 👨‍👩‍👧‍👦 Profile System
- Support for multiple family members or community users
- Personalized context (age, gender, role)
- Separate data storage per profile

### 📄 Documents
- Upload medical documents via drag & drop
- OCR support for image files
- Quick notes for personal health records
- AI can search and reference your documents

### 🔧 Tools & Integrations
- Enable/disable AI tools from Settings
- Document search tools for AI
- Extensible tool system for future integrations

### 🔒 Privacy First
- All AI processing happens locally
- Your health data never leaves your device
- Local model: Medpsy-1.7B (medical AI)

## Tech Stack

- **Framework**: Electron + electron-vite
- **Frontend**: React 19 + TypeScript
- **AI**: QVAC SDK with local GGUF model
- **Styling**: Inline design system (blue gradient theme)
- **Animations**: Framer Motion
- **Drag & Drop**: @dnd-kit

## Getting Started

### Prerequisites

- Node.js 18+
- Windows, macOS, or Linux
- ~2GB disk space for AI model

### Installation

```bash
# Clone the repository
git clone https://github.com/pisuthd/my-doctor-ai.git
cd my-doctor-ai

# Install dependencies
npm install
```

### Development

```bash
# Start development server with hot reload
npm run dev
```

### Build

```bash
# Build for Windows
npm run build:win

# Build for macOS
npm run build:mac

# Build for Linux
npm run build:linux
```

## Project Structure

```
src/
├── main/           # Electron main process
│   ├── index.ts           # Main entry, AI chat, IPC handlers
│   ├── profileStore.ts    # Profile persistence
│   ├── sessions.ts        # Session management
│   ├── toolsStore.ts      # Tool settings
│   └── tools/
│       └── documents/     # Document tools for AI
├── preload/        # Context bridge for IPC
└── renderer/       # React frontend
    └── src/
        ├── components/
        ├── pages/
        ├── context/
        └── App.tsx
```

## AI Model

The app uses a local medical AI model:
- **Model**: Medpsy-1.7B (GGUF format)
- **Download**: Automatic on first run
- **Storage**: `{userData}/medpsy-1.7b-q4_k_m-imat.gguf`

## License

MIT License - See LICENSE file for details

## Contributing

Contributions welcome! Please feel free to submit issues and pull requests.