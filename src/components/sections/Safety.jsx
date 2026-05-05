import { Container, AnimatedSection, SectionHeading, PillButton, Card } from '../ui'

const ICON_WAVE = (
  <svg viewBox="0 0 80 50" width="80" height="50" fill="none" stroke="#000" strokeWidth="1.5">
    <path d="M2 25 Q 12 5, 22 25 T 42 25 T 62 25 T 78 25" />
    <path d="M2 25 Q 12 45, 22 25 T 42 25 T 62 25 T 78 25" opacity="0.4" />
  </svg>
)

const ICON_CUBE = (
  <svg viewBox="0 0 60 60" width="60" height="60" fill="none" stroke="#000" strokeWidth="1.5">
    <path d="M30 6 L52 18 V42 L30 54 L8 42 V18 Z" />
    <path d="M30 6 V30 M30 30 L8 18 M30 30 L52 18" />
  </svg>
)

const ICON_RINGS = (
  <svg viewBox="0 0 60 60" width="60" height="60" fill="none" stroke="#000" strokeWidth="1.5">
    <ellipse cx={30} cy={30} rx={18} ry={11} />
    <ellipse cx={30} cy={30} rx={24} ry={14} />
    <ellipse cx={30} cy={30} rx={29} ry={18} />
  </svg>
)

const PILLARS = [
  { title: 'Watermarks',    body: 'Audible-AI watermarks and forensic markers in every output.', icon: ICON_WAVE },
  { title: 'Accessibility', body: 'Built for screen-readers, captions, and keyboard navigation.', icon: ICON_CUBE },
  { title: 'Provenance',    body: 'Verifiable C2PA content credentials baked into every file.', icon: ICON_RINGS },
]

export default function Safety() {
  return (
    <AnimatedSection style={{ padding: '96px 0' }}>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
          <SectionHeading>Safety, built in</SectionHeading>
          <PillButton variant="ghost">Learn more</PillButton>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="safety-grid">
          {PILLARS.map((p) => (
            <Card key={p.title} style={{ padding: '32px', minHeight: '240px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} hover>
              <div>{p.icon}</div>
              <div>
                <p style={{ fontFamily: 'Mallory, sans-serif', fontWeight: 700, fontSize: '15px', color: '#000', marginBottom: '6px' }}>{p.title}</p>
                <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '13px', lineHeight: 1.45, color: '#777169' }}>{p.body}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>

      <style>{`
        @media (max-width: 768px) {
          .safety-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </AnimatedSection>
  )
}
