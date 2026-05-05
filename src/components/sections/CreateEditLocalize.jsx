import { Container, AnimatedSection, SectionHeading, Eyebrow, PillButton, Card } from '../ui'

const FEATURES = [
  {
    title: 'Music',
    body: 'Generate studio-quality original music, dynamic stems, and adaptive scores in seconds.',
  },
  {
    title: 'SFX',
    body: 'Create endless library of sound effects, sound design and ambient textures from prompts.',
  },
  {
    title: 'Cloning Voice',
    body: 'Clone a voice with just 30 seconds of audio. The synthesised result captures tone and accent.',
  },
]

export default function CreateEditLocalize() {
  return (
    <AnimatedSection style={{ padding: '96px 0' }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start', marginBottom: '48px' }} className="cel-grid">
          <div>
            <Eyebrow>ElevenStudios</Eyebrow>
            <SectionHeading>Create, edit and localize<br />in one AI platform</SectionHeading>
          </div>
          <div>
            <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '15px', lineHeight: 1.5, color: '#777169', marginBottom: '20px', maxWidth: '460px' }}>
              Create voice replicas, generate music from natural prompts, design soundscapes that bend genre boundaries, transcribe and localise content, and run your audio production in one platform. The most realistic voice AI you'll find.
            </p>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '20px' }}>
              <button
                style={{
                  background: '#000',
                  color: '#fdfcfc',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '6px 14px',
                  fontFamily: 'Mallory, sans-serif',
                  fontWeight: 700,
                  fontSize: '12px',
                  cursor: 'pointer',
                  letterSpacing: '0.05em',
                }}
              >
                English
              </button>
              <button
                style={{
                  background: '#fff',
                  color: '#000',
                  border: '1px solid #e5e5e5',
                  borderRadius: '6px',
                  padding: '6px 14px',
                  fontFamily: 'Mallory, sans-serif',
                  fontWeight: 400,
                  fontSize: '12px',
                  cursor: 'pointer',
                }}
              >
                Spanish/Latin
              </button>
            </div>
            <PillButton variant="ghost">Read more</PillButton>
          </div>
        </div>

        {/* Big visual placeholder card with gradient */}
        <div
          style={{
            borderRadius: '20px',
            padding: '40px',
            background:
              'linear-gradient(135deg, #fff5e8 0%, #fde0d0 30%, #cfe0ff 60%, #f5f0ff 100%)',
            minHeight: '260px',
            display: 'flex',
            alignItems: 'flex-end',
            border: '1px solid #e5e5e5',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '64px',
          }}
        >
          {/* mock waveform */}
          <div style={{ display: 'flex', gap: '3px', alignItems: 'flex-end', height: 60 }}>
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: 4,
                  height: 8 + Math.abs(Math.sin(i * 0.45) * 50),
                  background: '#000',
                  opacity: 0.55,
                  borderRadius: 2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Feature row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}
          className="cel-features"
        >
          {FEATURES.map((f) => (
            <Card key={f.title} style={{ padding: '20px' }} hover>
              <p style={{ fontFamily: 'Mallory, sans-serif', fontWeight: 700, fontSize: '15px', color: '#000', marginBottom: '6px' }}>{f.title}</p>
              <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '13px', lineHeight: 1.45, color: '#777169' }}>{f.body}</p>
            </Card>
          ))}
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '32px' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            {['•', '•', '•'].map((_, i) => (
              <span
                key={i}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  border: '1px solid #e5e5e5',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Mallory, sans-serif',
                  fontSize: '11px',
                  color: '#777169',
                }}
              >
                {i + 1}
              </span>
            ))}
          </div>
          <PillButton variant="ghost">See demos</PillButton>
        </div>
      </Container>

      <style>{`
        @media (max-width: 768px) {
          .cel-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .cel-features { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </AnimatedSection>
  )
}
