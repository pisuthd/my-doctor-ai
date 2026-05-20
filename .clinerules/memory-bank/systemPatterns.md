# System Patterns

## Architecture Overview
- **Framework**: Electron with electron-vite
- **Frontend**: React 19 + TypeScript
- **Styling**: Inline styles with design system (no Tailwind on pages)
- **Animations**: Framer Motion
- **Drag & Drop**: @dnd-kit
- **Structure**: Main process / Preload / Renderer separation

## Design System

### Colors
```javascript
const BLUE = '#1A1AE8'
const TEAL = '#3EC4C0'
const NAVY = '#0a0a5c'
const MUTED = '#9999bb'
const LIGHT_BLUE = '#f7f7fc'
```

### Typography
```javascript
const monoFont = "'Space Mono', monospace"
const sansFont = "'DM Sans', sans-serif"
```

### Common Patterns
- SectionLabel component: uppercase label with monoFont
- TealBar: 3px teal accent at top of cards
- Numbered badges with monoFont
- Left-aligned content in main area

## Directory Structure
```
src/
├── main/           # Electron main process
├── preload/        # Context bridge for IPC
└── renderer/       # React frontend
    └── src/
        ├── components/
        │   ├── Sidebar/
        │   └── MainLayout/
        ├── pages/
        │   ├── LoadingScreen/
        │   ├── ProfileSelector/
        │   ├── Dashboard/
        │   ├── Sessions/
        │   ├── Chat/
        │   ├── Documents/
        │   └── Tools/
        ├── App.tsx
        └── main.tsx
```

## Page Structure
1. **LoadingScreen** - Model loading with progress
2. **ProfileSelector** - Profile selection/creation (loads profiles internally)
3. **MainLayout** - Sidebar + Content area
   - **Dashboard** - Health insights, recent chats
   - **Sessions** - Table list of conversations
   - **Chat** - Conversation interface
   - **Documents** - Upload and file list
   - **Tools** - Toggle cards for integrations

## Key Technical Decisions
- Use HashRouter for Electron (client-side routing)
- Profile loading moved to ProfileSelector component
- Inline styles for consistent design system
- App.tsx manages app state (loading → profile → main)