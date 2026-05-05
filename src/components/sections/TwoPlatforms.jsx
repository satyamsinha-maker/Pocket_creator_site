import { Container, AnimatedSection, SectionHeading, Eyebrow } from '../ui'

// Stub UI panel — mimics a product screenshot using nested rectangles
function StubUI({ tone = 'blue' }) {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: 'rgba(0,0,0,0.4) 0px 0px 1.143px 0px, rgba(0,0,0,0.04) 0px 4px 12px 0px',
        overflow: 'hidden',
        border: '1px solid #e5e5e5',
      }}
    >
      {/* fake browser chrome */}
      <div style={{ padding: '12px 14px', display: 'flex', gap: '6px', borderBottom: '1px solid #e5e5e5', backgroundColor: '#fafaf9' }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#e5e5e5' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#e5e5e5' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#e5e5e5' }} />
      </div>

      {/* fake content */}
      <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', minHeight: 280 }}>
        {/* sidebar */}
        <div style={{ padding: '14px 12px', borderRight: '1px solid #e5e5e5', backgroundColor: '#fafaf9', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={{ height: 8, backgroundColor: i === 1 ? '#000' : '#e5e5e5', borderRadius: 4, width: i === 0 ? '70%' : '100%' }} />
          ))}
        </div>
        {/* main */}
        <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ height: 12, width: '50%', backgroundColor: '#000', borderRadius: 4 }} />
          <div style={{ height: 8, width: '80%', backgroundColor: '#e5e5e5', borderRadius: 4 }} />
          <div style={{ height: 8, width: '65%', backgroundColor: '#e5e5e5', borderRadius: 4 }} />
          <div
            style={{
              height: 80,
              borderRadius: 8,
              marginTop: 8,
              background:
                tone === 'blue'
                  ? 'linear-gradient(135deg, #cfe0ff, #97b8ff)'
                  : 'linear-gradient(135deg, #ffd6c2, #ff8a4a)',
            }}
          />
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ height: 30, width: 90, backgroundColor: '#000', borderRadius: '9999px' }} />
            <div style={{ height: 30, width: 70, backgroundColor: '#fff', border: '1px solid #e5e5e5', borderRadius: '9999px' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TwoPlatforms() {
  return (
    <AnimatedSection style={{ padding: '96px 0' }}>
      <Container>
        <div style={{ marginBottom: '48px' }}>
          <SectionHeading>Two platforms built on the<br />same research foundation</SectionHeading>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
          }}
          className="two-platforms-grid"
        >
          {/* ElevenStudios */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff4704' }} />
              <p style={{ fontFamily: 'Mallory, sans-serif', fontWeight: 700, fontSize: '14px', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#000' }}>
                ElevenStudios
              </p>
            </div>
            <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '14px', color: '#777169', marginBottom: '24px' }}>
              Generate audio content, music, voice, and more dubbing.
            </p>
            <StubUI tone="orange" />
          </div>

          {/* ElevenAgents */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#0447ff' }} />
              <p style={{ fontFamily: 'Mallory, sans-serif', fontWeight: 700, fontSize: '14px', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#000' }}>
                ElevenAgents
              </p>
            </div>
            <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '14px', color: '#777169', marginBottom: '24px' }}>
              Configure, deploy, and monitor agents.
            </p>
            <StubUI tone="blue" />
          </div>
        </div>
      </Container>

      <style>{`
        @media (max-width: 768px) {
          .two-platforms-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </AnimatedSection>
  )
}
