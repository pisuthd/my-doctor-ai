import { useState } from 'react'
import { motion } from 'framer-motion'

const BLUE = '#1A1AE8'
const TEAL = '#3EC4C0'
const NAVY = '#0a0a5c'
const MUTED = '#9999bb'
const LIGHT_BLUE = '#f7f7fc'

const monoFont = "'Space Mono', monospace"
const sansFont = "'DM Sans', sans-serif"

interface Message {
  id: string
  type: 'user' | 'ai'
  content: string
  time: string
}

interface Session {
  id: string
  name: string
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: monoFont, fontSize: 11, letterSpacing: '0.14em', color: MUTED, textTransform: 'uppercase', marginBottom: 8 }}>
      {children}
    </p>
  )
}

function SessionDropdown({ sessions, currentSession, onSelect }: { 
  sessions: Session[]; 
  currentSession: string; 
  onSelect: (id: string) => void 
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '8px 12px',
          background: LIGHT_BLUE,
          border: '1px solid #e0e0f0',
          borderRadius: 6,
          cursor: 'pointer',
          fontFamily: monoFont,
          fontSize: 11,
          color: NAVY,
        }}
      >
        <span style={{ fontFamily: monoFont, fontSize: 10, color: MUTED }}>SESSION:</span>
        <span>{currentSession}</span>
        <span style={{ color: MUTED, fontSize: 12 }}>{isOpen ? '▲' : '▼'}</span>
      </button>
      
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: 4,
            background: '#fff',
            border: '1px solid #e0e0f0',
            borderRadius: 6,
            minWidth: 160,
            zIndex: 200,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          {sessions.map((session) => (
            <button
              key={session.id}
              onClick={() => {
                onSelect(session.id)
                setIsOpen(false)
              }}
              style={{
                display: 'block',
                width: '100%',
                padding: '10px 14px',
                background: session.id === currentSession ? BLUE : 'transparent',
                color: session.id === currentSession ? '#fff' : NAVY,
                border: 'none',
                textAlign: 'left',
                cursor: 'pointer',
                fontFamily: monoFont,
                fontSize: 11,
                letterSpacing: '0.06em',
              }}
              onMouseEnter={(e) => {
                if (session.id !== currentSession) {
                  e.currentTarget.style.background = LIGHT_BLUE
                }
              }}
              onMouseLeave={(e) => {
                if (session.id !== currentSession) {
                  e.currentTarget.style.background = 'transparent'
                }
              }}
            >
              {session.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [currentSession, setCurrentSession] = useState('Main')
  const [sessions] = useState<Session[]>([
    { id: 'main', name: 'Main' },
    { id: 's1', name: 'Headache & Fatigue' },
    { id: 's2', name: 'Chest Pain' },
    { id: 's3', name: 'Medication Review' },
  ])

  const handleSend = () => {
    if (!input.trim()) return
    
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
    
    setMessages((prev) => [...prev, userMessage])
    setInput('')
  }

  const handleSessionSelect = (sessionId: string) => {
    const session = sessions.find(s => s.id === sessionId)
    if (session) {
      setCurrentSession(session.name)
      setMessages([]) // Clear messages when switching sessions
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', fontFamily: sansFont }}>
      {/* Header */}
      <div style={{ padding: '24px 32px', borderBottom: '1px solid #e0e0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <SectionLabel>Chat</SectionLabel>
          <h1 style={{ fontFamily: sansFont, fontSize: 24, fontWeight: 300, color: NAVY, margin: 0, lineHeight: 1.2 }}>
            <strong style={{ fontWeight: 500 }}>New</strong> conversation
          </h1>
        </div>
        <SessionDropdown sessions={sessions} currentSession={currentSession} onSelect={handleSessionSelect} />
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflow: 'auto', padding: '24px 32px', background: '#f7f7fc' }}>
        {messages.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '48px 0' }}>
            <p style={{ fontFamily: sansFont, fontSize: 14, color: MUTED }}>
              Start a conversation by typing below
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  display: 'flex',
                  justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '70%',
                    padding: '12px 16px',
                    background: msg.type === 'user' ? BLUE : '#fff',
                    border: msg.type === 'user' ? 'none' : '1px solid #e0e0f0',
                    borderRadius: 8,
                    color: msg.type === 'user' ? '#fff' : NAVY,
                    fontFamily: sansFont,
                    fontSize: 14,
                  }}
                >
                  <p style={{ margin: 0 }}>{msg.content}</p>
                  <p
                    style={{
                      fontFamily: monoFont,
                      fontSize: 10,
                      color: msg.type === 'user' ? 'rgba(255,255,255,0.7)' : MUTED,
                      marginTop: 4,
                      textAlign: 'right',
                    }}
                  >
                    {msg.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Input */}
      <div style={{ padding: '24px 32px', borderTop: '1px solid #e0e0f0', background: '#fff' }}>
        <div style={{ display: 'flex', gap: 12 }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            style={{
              flex: 1,
              padding: '12px 16px',
              border: '1px solid #e0e0f0',
              borderRadius: 8,
              fontFamily: sansFont,
              fontSize: 14,
              color: NAVY,
              outline: 'none',
            }}
          />
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={handleSend}
            style={{
              padding: '12px 24px',
              background: BLUE,
              border: 'none',
              borderRadius: 8,
              color: '#fff',
              fontFamily: monoFont,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.1em',
              cursor: 'pointer',
            }}
          >
            SEND
          </motion.button>
        </div>
      </div>
    </div>
  )
}