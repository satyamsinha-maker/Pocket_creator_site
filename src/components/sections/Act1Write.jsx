import { motion } from 'framer-motion'
import { Container, AnimatedSection, SerifHeading, Body, Eyebrow } from '../ui'

const SANS = "'Mallory', sans-serif"

/* ── Stripe-style stub UIs ────────────────────────────────────────────── */

function StoryboardStub() {
  return (
    <div style={{ background: '#f8fafd', borderRadius: '6px', padding: '20px', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 32px 8px' }}>
      <p style={{ fontFamily: SANS, fontWeight: 400, fontSize: '15px', color: '#061b31', marginBottom: '6px' }}>The Boss’s Forbidden Love</p>
      <p style={{ fontFamily: SANS, fontWeight: 400, fontSize: '11px', color: '#F51D00', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>Romance · Slow burn · Hindi</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '12px' }}>
        {[
          { name: 'Aarav Mehra',  role: 'CEO, the rival' },
          { name: 'Mira Kapoor',  role: 'Father’s daughter' },
          { name: 'Vikram Singh', role: 'The patriarch' },
          { name: 'Riya',         role: 'Best friend' },
        ].map((c) => (
          <div key={c.name} style={{ background: '#ffffff', border: '1px solid #e5edf5', borderRadius: '4px', padding: '8px 10px' }}>
            <p style={{ fontFamily: SANS, fontWeight: 400, fontSize: '11px', color: '#061b31' }}>{c.name}</p>
            <p style={{ fontFamily: SANS, fontWeight: 400, fontSize: '10px', color: '#64748d' }}>{c.role}</p>
          </div>
        ))}
      </div>

      <p style={{ fontFamily: SANS, fontWeight: 400, fontSize: '11px', color: '#50617a', lineHeight: 1.5 }}>
        Plot arc: rivalry &rarr; misunderstanding &rarr; reluctant alliance &rarr; betrayal &rarr; reckoning.
      </p>
    </div>
  )
}

function DraftStub() {
  return (
    <div style={{ background: '#f8fafd', borderRadius: '6px', padding: '20px', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 32px 8px' }}>
      <p style={{ fontFamily: SANS, fontWeight: 400, fontSize: '11px', color: '#F51D00', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Episode 7 · Draft</p>
      <p style={{ fontFamily: SANS, fontWeight: 400, fontSize: '14px', color: '#061b31', lineHeight: 1.5, marginBottom: '8px' }}>
        Mira’s heels echoed across the marble lobby, each step a measured breath. She had not expected to see him here. Not tonight. Not after what he had said in the boardroom.
      </p>
      <p style={{ fontFamily: SANS, fontWeight: 400, fontSize: '14px', color: '#061b31', lineHeight: 1.5 }}>
        Aarav looked up. Their eyes met. The room <span style={{ background: 'rgba(245,29,0,0.1)', borderBottom: '1px dashed #F51D00' }}>seemed to hold its breath</span>.
      </p>
    </div>
  )
}

function ReviewStub() {
  return (
    <div style={{ background: '#f8fafd', borderRadius: '6px', padding: '20px', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 32px 8px' }}>
      <p style={{ fontFamily: SANS, fontWeight: 400, fontSize: '13px', color: '#061b31', lineHeight: 1.5, marginBottom: '14px', fontStyle: 'italic' }}>
        “Mira’s heels echoed across the marble lobby...”
      </p>
      {[
        { tag: 'Pacing',          note: 'Strong opening hook — consider shortening line 3 for tension.' },
        { tag: 'Character voice', note: 'Aarav feels guarded. Aligns with Ep 4 rivalry beat.' },
        { tag: 'Continuity',      note: 'Boardroom scene: cross-checks with Ep 6 ending.' },
      ].map((r) => (
        <div key={r.tag} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <span style={{ flex: 'none', background: '#F51D00', color: '#ffffff', borderRadius: '4px', padding: '2px 6px', fontFamily: SANS, fontWeight: 400, fontSize: '10px', height: 'fit-content' }}>{r.tag}</span>
          <p style={{ fontFamily: SANS, fontWeight: 400, fontSize: '12px', color: '#50617a', lineHeight: 1.4 }}>{r.note}</p>
        </div>
      ))}
    </div>
  )
}

function MemoryStub() {
  return (
    <div style={{ background: '#f8fafd', borderRadius: '6px', padding: '20px', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 32px 8px' }}>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '14px' }}>
        <div style={{ background: '#061b31', color: '#ffffff', borderRadius: '4px', width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', fontFamily: SANS, fontSize: '10px', fontWeight: 400 }}>
          You
        </div>
        <p style={{ fontFamily: SANS, fontWeight: 400, fontSize: '13px', color: '#061b31', lineHeight: 1.5 }}>
          What did Marcus say about his sister in episode 12?
        </p>
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
        <div style={{ background: '#F51D00', color: '#ffffff', borderRadius: '4px', width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M2 20 L9 8 L13 14 L17 6 L22 20 Z" stroke="currentColor" strokeWidth="1.6" /></svg>
        </div>
        <div>
          <p style={{ fontFamily: SANS, fontWeight: 400, fontSize: '11px', color: '#F51D00', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Episode 12 · 03:42</p>
          <p style={{ fontFamily: SANS, fontWeight: 400, fontSize: '13px', color: '#061b31', lineHeight: 1.5, fontStyle: 'italic' }}>
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
    <AnimatedSection style={{ padding: '120px 0', background: '#ffffff' }}>
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {BLOCKS.map((b, i) => {
            const reverse = i % 2 === 1
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '64px',
                  alignItems: 'center',
                  direction: reverse ? 'rtl' : 'ltr',
                }}
                className="act1-row"
              >
                <div style={{ direction: 'ltr' }}>
                  <p style={{ fontFamily: SANS, fontWeight: 400, fontSize: '11px', color: '#F51D00', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
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
          .act1-row { grid-template-columns: 1fr !important; direction: ltr !important; gap: 28px !important; }
        }
      `}</style>
    </AnimatedSection>
  )
}
