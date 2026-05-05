import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container, AnimatedSection, SectionHeading, PillButton } from '../ui'

const POINTS = ['v1', 'v1.5', 'v2', 'Multi', 'v3', 'Studio', 'Scribe', 'Music']

const STRIPS = [
  { color: 'linear-gradient(135deg, #ff7a3a, #ff3a8a, #6b2cff, #00b1f0)', tag: 'V3 voice model' },
  { color: 'linear-gradient(135deg, #1f7a4a, #6bd96a, #c0f0a0)',           tag: 'Eleven Music' },
]

export default function Research() {
  const [pos, setPos] = useState(4) // index of selected point

  return (
    <AnimatedSection style={{ padding: '96px 0' }}>
      <Container>
        <div style={{ marginBottom: '48px' }}>
          <SectionHeading>Research that redefines<br />human technology interaction</SectionHeading>
          <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '15px', lineHeight: 1.5, color: '#777169', maxWidth: '460px', marginTop: '20px' }}>
            Our mission is to make communication immersive and challenging accessible. We craft cutting-edge models which power the leading voice models, voice generation engines, and the most realistic AI voice technology.
          </p>
        </div>

        {/* Timeline slider */}
        <div style={{ position: 'relative', marginBottom: '64px' }}>
          <div style={{ position: 'relative', height: '40px', display: 'flex', alignItems: 'center' }}>
            {/* base line */}
            <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: 1, background: '#e5e5e5', transform: 'translateY(-50%)' }} />

            {/* points */}
            <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {POINTS.map((p, i) => (
                <button
                  key={p}
                  onClick={() => setPos(i)}
                  style={{
                    position: 'relative',
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    background: i === pos ? '#000' : '#ffffff',
                    border: i === pos ? '3px solid #000' : '1px solid #b1b0b0',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                  aria-label={p}
                >
                  {i === pos && (
                    <motion.span
                      layoutId="research-tooltip"
                      style={{
                        position: 'absolute',
                        bottom: 'calc(100% + 8px)',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#000',
                        color: '#fdfcfc',
                        padding: '6px 10px',
                        borderRadius: '9999px',
                        fontFamily: 'Mallory, sans-serif',
                        fontSize: '11px',
                        whiteSpace: 'nowrap',
                        fontWeight: 500,
                      }}
                    >
                      Eleven Music & Agents · Now
                    </motion.span>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
            <span style={{ fontFamily: 'Mallory, sans-serif', fontSize: '12px', color: '#777169' }}>Founding</span>
            <span style={{ fontFamily: 'Mallory, sans-serif', fontSize: '12px', color: '#777169' }}>2026</span>
          </div>
        </div>

        {/* Footnote + research strips */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'start', marginBottom: '32px' }} className="research-grid">
          <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '13px', color: '#777169', maxWidth: '340px', lineHeight: 1.5 }}>
            Advancing research beyond the state-of-the-art in voice cloning, voice training, dialogue agents, and music.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {STRIPS.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                style={{
                  background: s.color,
                  borderRadius: '12px',
                  padding: '16px',
                  height: '120px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  cursor: 'pointer',
                }}
              >
                <span style={{ fontFamily: 'Mallory, sans-serif', fontWeight: 700, fontSize: '13px', color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,0.2)' }}>
                  {s.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <PillButton variant="ghost">Learn more</PillButton>
      </Container>

      <style>{`
        @media (max-width: 768px) {
          .research-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </AnimatedSection>
  )
}
