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
    <section
      id="top"
      style={{
        padding: '96px 0 112px',
        position: 'relative',
        overflow: 'hidden',
        background: '#ffffff',
      }}
    >
      {/* Dreamy gradient halo — subtle, top-right */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-25%',
          right: '-10%',
          width: '900px',
          height: '900px',
          pointerEvents: 'none',
          background: 'radial-gradient(circle, rgba(127,125,252,0.35), rgba(244,75,204,0.18) 33%, rgba(229,237,245,0) 66%)',
          filter: 'blur(20px)',
        }}
      />

      <Container>
        <div style={{ maxWidth: '820px', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SerifHeading size="xl" as="h1" maxWidth="100%">
              Write a story.<br />Reach listeners.<br />Get paid.
            </SerifHeading>
          </motion.div>

          <motion.div
            style={{ marginTop: '24px', maxWidth: '560px' }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
          >
            <Body size="lg" color="#50617a">
              Pocket Sherpa is the AI co-writer for serialized fiction. We help you write,
              we produce the audio, and we put your story on Pocket FM where listeners pay
              to hear it. You earn every time someone listens.
            </Body>
          </motion.div>

          {/* Chat input */}
          <motion.div
            style={{ marginTop: '40px', maxWidth: '660px' }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '11px',
                color: '#64748d',
                letterSpacing: '0.08em',
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
                border: '1px solid #d8d6df',
                borderRadius: '4px',
                padding: '8px 8px 8px 16px',
                boxShadow: 'rgba(23, 23, 23, 0.06) 0px 3px 6px 0px',
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
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  color: '#061b31',
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
                  whileHover={{ borderColor: '#b9b9f9', backgroundColor: '#f8fafd' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e5edf5',
                    borderRadius: '4px',
                    padding: '8px 12px',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '12px',
                    color: '#50617a',
                    cursor: 'pointer',
                    textAlign: 'left',
                    maxWidth: '380px',
                    lineHeight: 1.4,
                  }}
                >
                  <span style={{ color: '#533afd', marginRight: 6 }}>&rsaquo;</span>
                  {p}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Secondary CTAs */}
          <motion.div
            style={{ marginTop: '40px', display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <PillButton variant="filled">Start writing free</PillButton>
            <PillButton variant="ghost">
              <span style={{ display: 'inline-flex', width: 14, height: 14, alignItems: 'center', justifyContent: 'center', color: '#533afd' }}>
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
