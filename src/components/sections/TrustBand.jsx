import { Container, AnimatedSection, Body } from '../ui'

const STATS = [
  { value: '4,200',    label: 'writers in beta' },
  { value: '2.1M',     label: 'chapters written' },
  { value: '38M',      label: 'hours listened' },
  { value: '₹2.4 Cr',  label: 'paid out to writers' },
]

export default function TrustBand() {
  return (
    <AnimatedSection style={{ padding: '64px 0', background: '#ffffff' }}>
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
          className="trust-grid"
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                paddingLeft: i === 0 ? 0 : '24px',
                borderLeft: i === 0 ? 'none' : '1px solid #e5edf5',
              }}
              className="trust-item"
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: 'clamp(36px, 4.5vw, 56px)',
                  lineHeight: 1.07,
                  letterSpacing: '-0.03em',
                  color: '#061b31',
                  marginBottom: '8px',
                  fontFeatureSettings: '"tnum"',
                }}
              >
                {s.value}
              </p>
              <Body size="sm" color="#50617a">
                {s.label}
              </Body>
            </div>
          ))}
        </div>
      </Container>

      <style>{`
        @media (max-width: 900px) {
          .trust-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px 24px !important; }
          .trust-item { border-left: none !important; padding-left: 0 !important; }
        }
      `}</style>
    </AnimatedSection>
  )
}
