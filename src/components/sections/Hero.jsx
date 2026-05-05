import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container, PillButton, GradientOrb } from '../ui'

const TABS = ['Add a Character', 'Edit & Translate', 'Music', 'Speech to Text', 'Voice Design']

const ORB_SETS = {
  'Add a Character': [
    { from: '#ffe2c2', to: '#ff7e3a', accent: '#fff5ec', label: '11 Audiobooks' },
    { from: '#dab8ff', to: '#5e3cff', accent: '#f0e7ff', label: 'V3 (Latest)' },
    { from: '#ffd8b0', to: '#ff5b1a', accent: '#fff0e5', label: '11 AI' },
  ],
  'Edit & Translate': [
    { from: '#bfe1ff', to: '#0447ff', accent: '#e8f1ff', label: 'Multilingual v2' },
    { from: '#ffc6d8', to: '#ff5277', accent: '#fff0f4', label: 'Localize' },
    { from: '#ffe2c2', to: '#ff7e3a', accent: '#fff5ec', label: 'Translate' },
  ],
  Music: [
    { from: '#e0c8ff', to: '#7028ff', accent: '#f3e8ff', label: 'Eleven Music' },
    { from: '#c4f0ff', to: '#00a8d9', accent: '#e0f8ff', label: 'Stems' },
    { from: '#ffd9e3', to: '#e83e8c', accent: '#ffeef3', label: 'Composer' },
  ],
  'Speech to Text': [
    { from: '#cce4ff', to: '#1e63ff', accent: '#ebf3ff', label: 'Scribe v1' },
    { from: '#d6c8ff', to: '#5e3cff', accent: '#ece4ff', label: 'Live Caption' },
    { from: '#ffd8b0', to: '#ff5b1a', accent: '#fff0e5', label: 'Transcribe' },
  ],
  'Voice Design': [
    { from: '#fce7c8', to: '#e88a2e', accent: '#fff5e8', label: 'Voice Lab' },
    { from: '#d8d2ff', to: '#5444ff', accent: '#ece8ff', label: 'Synthesise' },
    { from: '#ffd1cf', to: '#e8412a', accent: '#ffe6e3', label: 'Variants' },
  ],
}

export default function Hero() {
  const [tab, setTab] = useState('Add a Character')
  const orbs = ORB_SETS[tab]

  return (
    <section style={{ padding: '80px 0 64px' }}>
      <Container>
        {/* Headline + body + CTAs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: '48px',
            alignItems: 'start',
            marginBottom: '64px',
          }}
          className="hero-grid"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              style={{
                fontFamily: 'Mallory, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(48px, 6.4vw, 80px)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: '#000',
              }}
            >
              Bringing<br />technology to life
            </h1>
          </motion.div>

          <motion.div
            style={{ paddingTop: '12px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <p
              style={{
                fontFamily: 'Mallory, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: 1.5,
                color: '#777169',
                marginBottom: '20px',
                maxWidth: '420px',
              }}
            >
              Powering the bold initiatives, creators, and developers, from Researchgate, to commerce experts, to Travelchecks, to content creators, to the leading AI voice generator.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <PillButton variant="filled">Sign up</PillButton>
              <PillButton variant="ghost">Contact sales</PillButton>
            </div>
          </motion.div>
        </div>

        {/* Tab pills + voice orbs card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            border: '1px solid #e5e5e5',
            padding: '24px',
            boxShadow: 'rgba(0,0,0,0.4) 0px 0px 1.143px 0px, rgba(0,0,0,0.04) 0px 4px 12px 0px',
          }}
        >
          {/* Tab row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              marginBottom: '32px',
              justifyContent: 'center',
            }}
          >
            {TABS.map((t) => {
              const active = t === tab
              return (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  style={{
                    backgroundColor: active ? '#000' : 'transparent',
                    color: active ? '#fdfcfc' : '#000',
                    border: '1px solid',
                    borderColor: active ? '#000' : '#e5e5e5',
                    borderRadius: '18px',
                    padding: '6px 12px',
                    fontFamily: 'Mallory, sans-serif',
                    fontWeight: 700,
                    fontSize: '13px',
                    letterSpacing: '0.05em',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    transition: 'all 0.18s',
                  }}
                >
                  {t}
                </button>
              )
            })}
          </div>

          {/* Three orbs */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px',
              alignItems: 'center',
              padding: '20px 12px 12px',
            }}
          >
            <AnimatePresence mode="wait">
              {orbs.map((o, i) => {
                const isCenter = i === 1
                return (
                  <motion.div
                    key={`${tab}-${i}`}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '20px',
                    }}
                  >
                    <div style={{ position: 'relative' }}>
                      <GradientOrb
                        from={o.from}
                        to={o.to}
                        accent={o.accent}
                        size={isCenter ? 220 : 180}
                      />
                      {isCenter && (
                        <button
                          aria-label="Play"
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 52,
                            height: 52,
                            borderRadius: '9999px',
                            background: '#fff',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 6px 18px rgba(0,0,0,0.18)',
                          }}
                        >
                          <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                            <path d="M0 1.5L13 8L0 14.5V1.5Z" fill="#000" />
                          </svg>
                        </button>
                      )}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <p
                        style={{
                          fontFamily: 'Mallory, sans-serif',
                          fontWeight: 500,
                          fontSize: '14px',
                          color: '#000',
                        }}
                      >
                        {o.label}
                      </p>
                      <p
                        style={{
                          fontFamily: 'Mallory, sans-serif',
                          fontWeight: 400,
                          fontSize: '12px',
                          color: '#777169',
                          marginTop: '4px',
                        }}
                      >
                        {isCenter ? 'Eleven v3 (alpha)' : 'Voice synthesis'}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Bottom action row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              justifyContent: 'center',
              padding: '16px 0 0',
              borderTop: '1px solid #e5e5e5',
              marginTop: '24px',
            }}
          >
            {['+ Voice Character', 'Get to Sound', 'Music', 'Speech to Text', 'Voice Cloning'].map((b) => (
              <button
                key={b}
                style={{
                  background: '#f5f3f1',
                  color: '#000',
                  border: '1px solid #e5e5e5',
                  borderRadius: '9999px',
                  padding: '6px 14px',
                  fontFamily: 'Mallory, sans-serif',
                  fontWeight: 400,
                  fontSize: '12px',
                  cursor: 'pointer',
                  letterSpacing: '0.01em',
                }}
              >
                {b}
              </button>
            ))}
          </div>
        </motion.div>
      </Container>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
