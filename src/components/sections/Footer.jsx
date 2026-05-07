import { Container, Body, Caption, Eyebrow, SCALE } from '../ui'

const COLS = [
  { heading: 'Product',   links: ['How it works', 'Pricing', 'Roadmap', 'Beta access'] },
  { heading: 'Writers',   links: ['Writer stories', 'Earnings', 'Sample series', 'Submission rules'] },
  { heading: 'Resources', links: ['Help center', 'Blog', 'Genre guides', 'Style guide', 'Status'] },
  { heading: 'Company',   links: ['About', 'Pocket FM', 'Careers', 'Press', 'Contact'] },
]

export default function Footer() {
  return (
    <footer
      style={{
        padding: '72px 0 48px',
        borderTop: '1px solid #e5edf5',
        background: '#f8fafd',
      }}
    >
      <Container>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M2 20 L9 8 L13 14 L17 6 L22 20 Z" stroke="#1C1C1C" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
            <circle cx="17" cy="6" r="1.4" fill="#F51D00" />
          </svg>
          {/* Wordmark — body 16 px */}
          <span
            style={{
              fontFamily:    SCALE.body.family,
              fontWeight:    SCALE.body.weight,
              fontSize:      SCALE.body.fontSize,
              lineHeight:    SCALE.body.lineHeight,
              letterSpacing: SCALE.body.letterSpacing,
              color: '#1C1C1C',
            }}
          >
            Pocket Sherpa
          </span>
          <span style={{ marginLeft: '8px' }}>
            <Caption color="#8D8D8D">A Pocket FM company</Caption>
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', marginBottom: '48px' }} className="footer-grid">
          {COLS.map((c) => (
            <div key={c.heading}>
              {/* Column heading — uses Eyebrow primitive (Mallory 700, 12 px, 0.08em uppercase) */}
              <div style={{ marginBottom: '14px' }}>
                <Eyebrow color="#1C1C1C">{c.heading}</Eyebrow>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      style={{
                        fontFamily:    SCALE.bodySm.family,
                        fontWeight:    SCALE.bodySm.weight,
                        fontSize:      SCALE.bodySm.fontSize,
                        lineHeight:    SCALE.bodySm.lineHeight,
                        letterSpacing: SCALE.bodySm.letterSpacing,
                        color: '#717171',
                        textDecoration: 'none',
                        transition: 'color 0.18s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#F51D00')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#717171')}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid #e5edf5',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <Body size="sm" color="#8D8D8D" maxWidth="480px">
            Idea to audio series to listeners to royalty cheque, all in one product.
          </Body>
          <Caption color="#8D8D8D">
            © 2026 Pocket Sherpa · A Pocket FM product
          </Caption>
        </div>
      </Container>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </footer>
  )
}
