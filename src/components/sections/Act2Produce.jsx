import { motion } from 'framer-motion'
import { Container, AnimatedSection, SerifHeading, Body, Eyebrow, Card } from '../ui'

/* ── Stub graphics for each card ──────────────────────────────────────── */

function VoiceStub() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '64px', padding: '12px 0' }}>
      {Array.from({ length: 36 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{ height: [10, 28 + Math.abs(Math.sin(i * 0.5) * 26), 10] }}
          transition={{ duration: 1.5 + (i % 3) * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.04 }}
          style={{ width: 3, background: '#b85c3a', borderRadius: 2, opacity: 0.55 + (i % 4) * 0.1 }}
        />
      ))}
    </div>
  )
}

function SfxStub() {
  return (
    <svg viewBox="0 0 200 64" width="100%" height="64" fill="none" stroke="#b85c3a" strokeWidth="1.5">
      <path d="M0 32 Q 20 8, 40 32 T 80 32 T 120 32 T 160 32 T 200 32" />
      <path d="M0 32 Q 14 50, 28 32 T 56 32 T 84 32 T 112 32 T 140 32 T 168 32 T 200 32" opacity="0.4" stroke="#1c1814" />
    </svg>
  )
}

function ThumbnailStub() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px' }}>
      {[
        'linear-gradient(135deg, #b85c3a, #4a1f15)',
        'linear-gradient(135deg, #c19a3e, #1c1814)',
        'linear-gradient(135deg, #6b5e52, #1c1814)',
      ].map((g, i) => (
        <div key={i} style={{ aspectRatio: '3 / 4', borderRadius: '6px', background: g, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', bottom: 6, left: 6, right: 6 }}>
            <div style={{ height: 4, background: 'rgba(255,255,255,0.7)', borderRadius: 2, marginBottom: 3, width: '70%' }} />
            <div style={{ height: 3, background: 'rgba(255,255,255,0.4)', borderRadius: 2, width: '50%' }} />
          </div>
        </div>
      ))}
    </div>
  )
}

function VideoStub() {
  return (
    <div style={{ position: 'relative', borderRadius: '8px', aspectRatio: '16 / 9', background: 'linear-gradient(135deg, #2a2520, #1c1814)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 40%, rgba(184,92,58,0.35), transparent 60%)' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none"><path d="M0 1 L10 6 L0 11 Z" fill="#1c1814" /></svg>
      </div>
      <div style={{ position: 'absolute', bottom: 8, left: 8, fontFamily: 'Mallory, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.7)' }}>0:18 / 0:30</div>
    </div>
  )
}

const CARDS = [
  { title: 'Professional voice acting', body: 'Our voice cast brings every character to life, with regional accents and emotional range matched to your script.', visual: <VoiceStub /> },
  { title: 'Sound design and music',    body: 'Custom SFX and scoring layered into every episode, so listeners feel the world you built.',                       visual: <SfxStub /> },
  { title: 'Cover thumbnails',           body: 'Eye-catching artwork that makes listeners stop scrolling and hit play, designed in your story’s tone.',           visual: <ThumbnailStub /> },
  { title: 'Generative video',           body: 'Short-form video clips generated from your episodes, ready to share on social platforms and pull in new listeners.', visual: <VideoStub /> },
]

export default function Act2Produce() {
  return (
    <AnimatedSection style={{ padding: '120px 0', background: '#1c1814', color: '#faf6ed' }}>
      <Container>
        <div style={{ maxWidth: '720px', marginBottom: '64px' }}>
          <p style={{ fontFamily: 'Mallory, sans-serif', fontWeight: 700, fontSize: '12px', color: '#c19a3e', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '14px' }}>
            Act 2 · We produce it
          </p>
          <h2 style={{ fontFamily: "'Lora', Georgia, serif", fontWeight: 500, fontSize: 'clamp(34px, 4.5vw, 52px)', lineHeight: 1.1, letterSpacing: '-0.01em', color: '#faf6ed', marginBottom: '20px' }}>
            We turn your words into<br />a cinematic audio series.
          </h2>
          <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '15px', lineHeight: 1.55, color: '#c2b8a8', maxWidth: '520px' }}>
            You have written the episode. Now Pocket FM’s production pipeline takes over. Voice acting, sound design, thumbnails and AI-generated video. All matched to your story. All done for you.
          </p>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}
          className="act2-grid"
        >
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              style={{
                background: '#252018',
                border: '1px solid #3a322a',
                borderRadius: '14px',
                padding: '28px',
              }}
            >
              <div style={{ marginBottom: '24px', minHeight: '76px' }}>{c.visual}</div>
              <p style={{ fontFamily: "'Lora', Georgia, serif", fontWeight: 600, fontSize: '20px', lineHeight: 1.2, color: '#faf6ed', marginBottom: '8px' }}>
                {c.title}
              </p>
              <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '14px', lineHeight: 1.55, color: '#a89b8a' }}>
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>

      <style>{`
        @media (max-width: 768px) { .act2-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </AnimatedSection>
  )
}
