import { Container } from '../ui'

const SANS = "'Mallory', sans-serif"

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
            <path d="M2 20 L9 8 L13 14 L17 6 L22 20 Z" stroke="#061b31" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
            <circle cx="17" cy="6" r="1.4" fill="#533afd" />
          </svg>
          <span
            style={{
              fontFamily: SANS,
              fontWeight: 400,
              fontSize: '16px',
              letterSpacing: '-0.009em',
              color: '#061b31',
            }}
          >
            Pocket Sherpa
          </span>
          <span style={{ fontFamily: SANS, fontSize: '12px', color: '#64748d', marginLeft: '8px' }}>
            A Pocket FM company
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', marginBottom: '48px' }} className="footer-grid">
          {COLS.map((c) => (
            <div key={c.heading}>
              <p style={{ fontFamily: SANS, fontWeight: 400, fontSize: '11px', color: '#061b31', marginBottom: '14px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {c.heading}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      style={{
                        fontFamily: SANS,
                        fontSize: '14px',
                        color: '#50617a',
                        textDecoration: 'none',
                        transition: 'color 0.18s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#533afd')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#50617a')}
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
          <p style={{ fontFamily: SANS, fontSize: '13px', color: '#64748d', maxWidth: '480px' }}>
            Idea to audio series to listeners to royalty cheque, all in one product.
          </p>
          <span style={{ fontFamily: SANS, fontSize: '12px', color: '#64748d' }}>
            © 2026 Pocket Sherpa · A Pocket FM product
          </span>
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
