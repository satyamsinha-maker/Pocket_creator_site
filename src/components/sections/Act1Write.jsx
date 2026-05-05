import { motion } from 'framer-motion'
import { Container, AnimatedSection, SerifHeading, Body, Eyebrow } from '../ui'

/* ── Stub UIs (no images) ─────────────────────────────────────────────── */

function StoryboardStub() {
  return (
    <div style={{ background: '#faf6ed', borderRadius: '10px', border: '1px solid #e8dfd0', padding: '16px' }}>
      <p style={{ fontFamily: "'Lora', Georgia, serif", fontWeight: 600, fontSize: '15px', color: '#1c1814', marginBottom: '8px' }}>The Boss’s Forbidden Love</p>
      <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '11px', color: '#b85c3a', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>Romance · Slow burn · Hindi</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '12px' }}>
        {[
          { name: 'Aarav Mehra',  role: 'CEO, the rival' },
          { name: 'Mira Kapoor',  role: 'Father’s daughter' },
          { name: 'Vikram Singh', role: 'The patriarch' },
          { name: 'Riya',         role: 'Best friend' },
        ].map((c) => (
          <div key={c.name} style={{ background: '#fff', border: '1px solid #e8dfd0', borderRadius: '6px', padding: '8px 10px' }}>
            <p style={{ fontFamily: 'Mallory, sans-serif', fontWeight: 700, fontSize: '11px', color: '#1c1814' }}>{c.name}</p>
            <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '10px', color: '#6b5e52' }}>{c.role}</p>
          </div>
        ))}
      </div>

      <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '11px', color: '#3d3530', lineHeight: 1.5, fontStyle: 'italic' }}>
        Plot arc: rivalry &rarr; misunderstanding &rarr; reluctant alliance &rarr; betrayal &rarr; reckoning.
      </p>
    </div>
  )
}

function DraftStub() {
  return (
    <div style={{ background: '#faf6ed', borderRadius: '10px', border: '1px solid #e8dfd0', padding: '16px' }}>
      <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '11px', color: '#b85c3a', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Episode 7 · Draft</p>
      <p style={{ fontFamily: "'Lora', Georgia, serif", fontWeight: 500, fontSize: '14px', color: '#1c1814', lineHeight: 1.55, marginBottom: '8px' }}>
        Mira’s heels echoed across the marble lobby, each step a measured breath. She had not expected to see him here. Not tonight. Not after what he had said in the boardroom.
      </p>
      <p style={{ fontFamily: "'Lora', Georgia, serif", fontWeight: 500, fontSize: '14px', color: '#1c1814', lineHeight: 1.55 }}>
        Aarav looked up. Their eyes met. The room <span style={{ background: '#fff5e8', borderBottom: '1px dashed #b85c3a' }}>seemed to hold its breath</span>.
      </p>
    </div>
  )
}

function ReviewStub() {
  return (
    <div style={{ background: '#faf6ed', borderRadius: '10px', border: '1px solid #e8dfd0', padding: '16px' }}>
      <p style={{ fontFamily: "'Lora', Georgia, serif", fontWeight: 500, fontSize: '13px', color: '#1c1814', lineHeight: 1.55, marginBottom: '12px' }}>
        “Mira’s heels echoed across the marble lobby...”
      </p>
      {[
        { tag: 'Pacing',         note: 'Strong opening hook — consider shortening line 3 for tension.' },
        { tag: 'Character voice',note: 'Aarav feels guarded. Aligns with Ep 4 rivalry beat.' },
        { tag: 'Continuity',     note: 'Boardroom scene: cross-checks with Ep 6 ending.' },
      ].map((r) => (
        <div key={r.tag} style={{ display: 'flex', gap: '10px', marginBottom: '8px' }}>
          <span style={{ flex: 'none', background: '#b85c3a', color: '#faf6ed', borderRadius: '4px', padding: '2px 6px', fontFamily: 'Mallory, sans-serif', fontSize: '10px', fontWeight: 700, height: 'fit-content' }}>{r.tag}</span>
          <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '12px', color: '#3d3530', lineHeight: 1.4 }}>{r.note}</p>
        </div>
      ))}
    </div>
  )
}

function MemoryStub() {
  return (
    <div style={{ background: '#faf6ed', borderRadius: '10px', border: '1px solid #e8dfd0', padding: '16px' }}>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '14px' }}>
        <div style={{ background: '#1c1814', color: '#faf6ed', borderRadius: '50%', width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', fontFamily: 'Mallory, sans-serif', fontSize: '11px', fontWeight: 700 }}>
          You
        </div>
        <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '13px', color: '#1c1814', lineHeight: 1.5 }}>
          What did Marcus say about his sister in episode 12?
        </p>
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
        <div style={{ background: '#b85c3a', color: '#faf6ed', borderRadius: '50%', width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M2 20 L9 8 L13 14 L17 6 L22 20 Z" stroke="currentColor" strokeWidth="1.6" /></svg>
        </div>
        <div>
          <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '11px', color: '#b85c3a', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Episode 12 · 03:42</p>
          <p style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: 'italic', fontSize: '13px', color: '#1c1814', lineHeight: 1.55 }}>
            “She wasn’t my sister, Aarav. She was the only person I ever trusted. And I left her in that house.”
          </p>
        </div>
      </div>
    </div>
  )
}

const BLOCKS = [
  {
    title: 'Storyboard before you write',
    body:  'Lock in your title, genre, characters, plot arcs, key relationships and tone. Sherpa asks the questions a seasoned editor would, and turns your half-formed idea into a story bible you can build on for fifty episodes.',
    visual: <StoryboardStub />,
  },
  {
    title: 'First drafts in minutes',
    body:  'Once your storyboard is locked, Sherpa generates a first draft of every episode. You direct, Sherpa writes, you refine. The blank page is gone.',
    visual: <DraftStub />,
  },
  {
    title: 'Built-in editorial review',
    body:  'Ask Sherpa to review your episode. Get feedback on pacing, character voice, emotional arcs and continuity. Like having an editor on call, twenty-four hours a day.',
    visual: <ReviewStub />,
  },
  {
    title: 'Total recall, every episode',
    body:  'On episode 50 and cannot remember what your antagonist confessed in episode 12? Ask Sherpa. Every line, every detail, every promise you made to your reader is held in memory and pulled forward when you need it.',
    visual: <MemoryStub />,
  },
]

export default function Act1Write() {
  return (
    <AnimatedSection style={{ padding: '120px 0' }}>
      <Container>
        <div style={{ maxWidth: '720px', marginBottom: '64px' }}>
          <Eyebrow>Act 1 · Write with Sherpa</Eyebrow>
          <SerifHeading size="lg">
            Write with a partner that<br />remembers everything.
          </SerifHeading>
          <div style={{ marginTop: '20px', maxWidth: '520px' }}>
            <Body size="md">
              Sherpa is not a blank chat box. It is a co-writer that builds a complete world with you, then helps you write episodes that stay true to it, episode after episode.
            </Body>
          </div>
        </div>

        {/* Four alternating blocks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {BLOCKS.map((b, i) => {
            const reverse = i % 2 === 1
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '48px',
                  alignItems: 'center',
                  direction: reverse ? 'rtl' : 'ltr',
                }}
                className="act1-row"
              >
                <div style={{ direction: 'ltr' }}>
                  <p style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: 'italic', fontSize: '14px', color: '#b85c3a', marginBottom: '10px' }}>
                    Block {String(i + 1).padStart(2, '0')}
                  </p>
                  <SerifHeading size="md" maxWidth="100%">
                    {b.title}
                  </SerifHeading>
                  <div style={{ marginTop: '14px', maxWidth: '440px' }}>
                    <Body size="md">{b.body}</Body>
                  </div>
                </div>
                <div style={{ direction: 'ltr' }}>{b.visual}</div>
              </motion.div>
            )
          })}
        </div>
      </Container>

      <style>{`
        @media (max-width: 768px) {
          .act1-row { grid-template-columns: 1fr !important; direction: ltr !important; gap: 24px !important; }
        }
      `}</style>
    </AnimatedSection>
  )
}
