import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container, PillButton, Body, SerifHeading } from '../ui'

const PROMPTS = [
  'A revenge thriller where a wronged woman builds a corporate empire to destroy the men who betrayed her.',
  'A slow-burn romance between a billionaire and his arch-rival’s daughter.',
  'An urban fantasy where a college student discovers her grandmother is a powerful witch.',
]

export default function Hero() {
  const [value, setValue] = useState('')

  return (
    <section id="top" style={{ padding: '88px 0 96px', position: 'relative', overflow: 'hidden' }}>
      {/* Faint vellum gradient — paper warmth, not a gradient orb */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 60% at 80% 0%, rgba(184,92,58,0.06) 0%, transparent 70%)',
        }}
      />

      <Container>
        <div style={{ maxWidth: '780px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <SerifHeading size="xl" as="h1" maxWidth="100%">
              Write a story.<br />Reach listeners.<br />Get paid.
            </SerifHeading>
          </motion.div>

          <motion.div
            style={{ marginTop: '28px', maxWidth: '560px' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            <Body size="lg" color="#3d3530">
              Pocket Sherpa is the AI co-writer for serialized fiction. We help you write,
              we produce the audio, and we put your story on Pocket FM where listeners pay
              to hear it. You earn every time someone listens.
            </Body>
          </motion.div>

          {/* Chat input */}
          <motion.div
            style={{ marginTop: '40px', maxWidth: '640px' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
          >
            <p
              style={{
                fontFamily: 'Mallory, sans-serif',
                fontWeight: 700,
                fontSize: '12px',
                color: '#6b5e52',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}
            >
              Tell me your story idea
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: '#ffffff',
                border: '1px solid #e8dfd0',
                borderRadius: '14px',
                padding: '10px 10px 10px 18px',
                boxShadow: 'rgba(28,24,20,0.06) 0px 1px 2px 0px, rgba(28,24,20,0.04) 0px 4px 12px 0px',
                gap: '8px',
              }}
            >
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="A betrayed scientist returns from exile with a secret..."
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  fontFamily: 'Mallory, sans-serif',
                  fontSize: '15px',
                  color: '#1c1814',
                  padding: '8px 0',
                }}
              />
              <PillButton variant="sienna">
                Start writing
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7 H12 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </PillButton>
            </div>

            {/* Genre prompt chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '14px' }}>
              {PROMPTS.map((p, i) => (
                <motion.button
                  key={i}
                  onClick={() => setValue(p)}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: '#f3ecdc',
                    border: '1px solid #e8dfd0',
                    borderRadius: '9999px',
                    padding: '8px 14px',
                    fontFamily: 'Mallory, sans-serif',
                    fontSize: '12px',
                    color: '#3d3530',
                    cursor: 'pointer',
                    textAlign: 'left',
                    maxWidth: '380px',
                    lineHeight: 1.4,
                  }}
                >
                  <span style={{ color: '#b85c3a', marginRight: 6 }}>&rsaquo;</span>
                  {p}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Secondary CTAs */}
          <motion.div
            style={{ marginTop: '40px', display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
          >
            <PillButton variant="filled">Start writing free</PillButton>
            <PillButton variant="ghost">
              <span style={{ display: 'inline-flex', width: 14, height: 14, alignItems: 'center', justifyContent: 'center' }}>
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                  <path d="M0 1 L10 6 L0 11 Z" fill="currentColor" />
                </svg>
              </span>
              Hear a Pocket Sherpa story
            </PillButton>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
