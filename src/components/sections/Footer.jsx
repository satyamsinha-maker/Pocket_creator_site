import { Container } from '../ui'

const COLS = [
  { heading: 'Product',  links: ['How it works', 'Pricing', 'Roadmap', 'Beta access'] },
  { heading: 'Writers',  links: ['Writer stories', 'Earnings', 'Sample series', 'Submission rules'] },
  { heading: 'Resources',links: ['Help center', 'Blog', 'Genre guides', 'Style guide', 'Status'] },
  { heading: 'Company',  links: ['About', 'Pocket FM', 'Careers', 'Press', 'Contact'] },
]

export default function Footer() {
  return (
    <footer
      style={{
        padding: '72px 0 48px',
        borderTop: '1px solid #e8dfd0',
        background: '#f3ecdc',
      }}
    >
      <Container>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M2 20 L9 8 L13 14 L17 6 L22 20 Z" stroke="#1c1814" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
            <circle cx="17" cy="6" r="1.4" fill="#b85c3a" />
          </svg>
          <span
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontWeight: 600,
              fontSize: '17px',
              letterSpacing: '-0.01em',
              color: '#1c1814',
            }}
          >
            Pocket Sherpa
          </span>
          <span style={{ fontFamily: 'Mallory, sans-serif', fontSize: '12px', color: '#6b5e52', marginLeft: '6px' }}>
            A Pocket FM company
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', marginBottom: '48px' }} className="footer-grid">
          {COLS.map((c) => (
            <div key={c.heading}>
              <p style={{ fontFamily: 'Mallory, sans-serif', fontWeight: 700, fontSize: '12px', color: '#1c1814', marginBottom: '14px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {c.heading}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      style={{
                        fontFamily: 'Mallory, sans-serif',
                        fontSize: '14px',
                        color: '#6b5e52',
                        textDecoration: 'none',
                        transition: 'color 0.18s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#1c1814')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#6b5e52')}
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
            borderTop: '1px solid #e8dfd0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: 'italic', fontSize: '13px', color: '#6b5e52', maxWidth: '480px' }}>
            Idea to audio series to listeners to royalty cheque, all in one product.
          </p>
          <span style={{ fontFamily: 'Mallory, sans-serif', fontSize: '12px', color: '#908474' }}>
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
