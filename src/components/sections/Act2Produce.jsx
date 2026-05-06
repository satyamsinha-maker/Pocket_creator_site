import { motion } from 'framer-motion'
import { Container, AnimatedSection, SerifHeading, Body, Eyebrow } from '../ui'

const SANS = "'Mallory', sans-serif"

function VoiceStub() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '64px', padding: '12px 0' }}>
      {Array.from({ length: 36 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{ height: [10, 28 + Math.abs(Math.sin(i * 0.5) * 26), 10] }}
          transition={{ duration: 1.5 + (i % 3) * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.04 }}
          style={{ width: 3, background: '#533afd', borderRadius: 1, opacity: 0.55 + (i % 4) * 0.1 }}
        />
      ))}
    </div>
  )
}

function SfxStub() {
  return (
    <svg viewBox="0 0 200 64" width="100%" height="64" fill="none" stroke="#533afd" strokeWidth="1.5">
      <path d="M0 32 Q 20 8, 40 32 T 80 32 T 120 32 T 160 32 T 200 32" />
      <path d="M0 32 Q 14 50, 28 32 T 56 32 T 84 32 T 112 32 T 140 32 T 168 32 T 200 32" opacity="0.4" stroke="#8087ff" />
    </svg>
  )
}

function ThumbnailStub() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px' }}>
      {[
        'linear-gradient(90deg, rgb(114, 50, 241) 3.13%, rgb(251, 118, 250) 50%, rgb(255, 207, 94))',
        'radial-gradient(circle, rgb(127, 125, 252), rgb(244, 75, 204) 33%, rgb(229, 237, 245) 66%)',
        'linear-gradient(0deg, rgb(255, 46, 222), rgb(210, 152, 255))',
      ].map((g, i) => (
        <div key={i} style={{ aspectRatio: '3 / 4', borderRadius: '4px', background: g, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', bottom: 6, left: 6, right: 6 }}>
            <div style={{ height: 3, background: 'rgba(255,255,255,0.85)', borderRadius: 1, marginBottom: 3, width: '70%' }} />
            <div style={{ height: 2, background: 'rgba(255,255,255,0.6)', borderRadius: 1, width: '50%' }} />
          </div>
        </div>
      ))}
    </div>
  )
}

function VideoStub() {
  return (
    <div style={{ position: 'relative', borderRadius: '4px', aspectRatio: '16 / 9', background: 'radial-gradient(circle, rgb(127, 125, 252), rgb(244, 75, 204) 33%, rgb(229, 237, 245) 66%)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 36, height: 36, borderRadius: '4px', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'rgba(0,0,0,0.18) 0px 4px 12px 0px' }}>
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none"><path d="M0 1 L10 6 L0 11 Z" fill="#533afd" /></svg>
      </div>
      <div style={{ position: 'absolute', bottom: 8, left: 8, fontFamily: SANS, fontSize: '10px', color: '#061b31', background: 'rgba(255,255,255,0.85)', padding: '2px 6px', borderRadius: '4px' }}>0:18 / 0:30</div>
    </div>
  )
}

const CARDS = [
  { title: 'Professional voice acting', body: 'Our voice cast brings every character to life, with regional accents and emotional range matched to your script.', visual: <VoiceStub /> },
  { title: 'Sound design and music',    body: 'Custom SFX and scoring layered into every episode, so listeners feel the world you built.',                       visual: <SfxStub /> },
  { title: 'Cover thumbnails',          body: 'Eye-catching artwork that makes listeners stop scrolling and hit play, designed in your story’s tone.',           visual: <ThumbnailStub /> },
  { title: 'Generative video',          body: 'Short-form video clips generated from your episodes, ready to share on social platforms and pull in new listeners.', visual: <VideoStub /> },
]

export default function Act2Produce() {
  return (
    <AnimatedSection style={{ padding: '120px 0', background: '#e5edf5' }}>
      <Container>
        <div style={{ maxWidth: '720px', marginBottom: '64px' }}>
          <Eyebrow>Act 2 · We produce it</Eyebrow>
          <SerifHeading size="lg">
            We turn your words into<br />a cinematic audio series.
          </SerifHeading>
          <div style={{ marginTop: '20px', maxWidth: '520px' }}>
            <Body size="md">
              You have written the episode. Now Pocket FM’s production pipeline takes over. Voice acting, sound design, thumbnails and AI-generated video. All matched to your story. All done for you.
            </Body>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }} className="act2-grid">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -2, boxShadow: 'rgba(50, 50, 93, 0.12) 0px 16px 32px 0px' }}
              style={{
                background: '#ffffff',
                borderRadius: '6px',
                padding: '28px',
                boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 32px 8px',
                transition: 'box-shadow 0.25s',
              }}
            >
              <div style={{ marginBottom: '24px', minHeight: '76px' }}>{c.visual}</div>
              <p style={{ fontFamily: SANS, fontWeight: 400, fontSize: '22px', lineHeight: 1.2, letterSpacing: '-0.01em', color: '#061b31', marginBottom: '8px' }}>
                {c.title}
              </p>
              <Body size="sm" color="#50617a">
                {c.body}
              </Body>
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
