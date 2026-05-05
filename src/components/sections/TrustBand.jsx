import { Container, AnimatedSection, Body } from '../ui'

const STATS = [
  { value: '4,200',    label: 'writers in beta' },
  { value: '2.1M',     label: 'chapters written' },
  { value: '38M',      label: 'hours listened' },
  { value: '₹2.4 Cr',  label: 'paid out to writers' },
]

export default function TrustBand() {
  return (
    <AnimatedSection style={{ padding: '72px 0', borderTop: '1px solid #e8dfd0', borderBottom: '1px solid #e8dfd0' }}>
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
                borderLeft: i === 0 ? 'none' : '1px solid #e8dfd0',
              }}
              className="trust-item"
            >
              <p
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  fontWeight: 600,
                  fontSize: 'clamp(36px, 4.5vw, 56px)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  color: '#1c1814',
                  marginBottom: '8px',
                }}
              >
                {s.value}
              </p>
              <Body size="sm" color="#6b5e52">
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
