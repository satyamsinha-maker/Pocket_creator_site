import { Container } from '../ui'

const COLS = [
  {
    heading: 'Products',
    links: ['Text to Speech', 'Voice Cloning', 'Voice Library', 'Music', 'Studios', 'Agents', 'Scribe', 'Speech to Speech', 'Sound Effects', 'Mobile API'],
  },
  {
    heading: 'Solutions',
    links: ['Conversational AI', 'Audiobooks', 'Newsrooms', 'Government', 'Education', 'Customer Support', 'Marketing', 'Translation', 'Voice Acting'],
  },
  {
    heading: 'Resources',
    links: ['Blog', 'Help Center', 'Changelog', 'Status', 'Languages', 'Trust Center', 'Community', 'Feature Voices', 'Voice Lab', 'Mobile API'],
  },
  {
    heading: 'Account',
    links: ['Sign in', 'Sign up', 'Pricing', 'Enterprise', 'Affiliates', 'Partners', 'Brand kit', 'Trust & safety'],
  },
]

export default function Footer() {
  return (
    <footer
      style={{
        padding: '64px 0 48px',
        borderTop: '1px solid #e5e5e5',
        background: '#fdfcfc',
      }}
    >
      <Container>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px' }}>
          <div
            aria-hidden
            style={{
              width: 22,
              height: 22,
              borderRadius: '9999px',
              background:
                'conic-gradient(from 180deg, #3d75d8, #75bee5, #52d0e9, #1f5fcf, #2c54ca, #ade8f3, #d8f1f5, #2bbad0, #1e53b0, #2f40d2, #3d75d8)',
            }}
          />
          <span style={{ fontFamily: 'Mallory, sans-serif', fontWeight: 700, fontSize: '15px' }}>ElevenLabs</span>
          <span style={{ fontFamily: 'Mallory, sans-serif', fontSize: '12px', color: '#777169', marginLeft: '6px' }}>EN, English</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', marginBottom: '48px' }} className="footer-grid">
          {COLS.map((c) => (
            <div key={c.heading}>
              <p style={{ fontFamily: 'Mallory, sans-serif', fontWeight: 700, fontSize: '13px', color: '#000', marginBottom: '14px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                {c.heading}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      style={{
                        fontFamily: 'Mallory, sans-serif',
                        fontSize: '13px',
                        color: '#777169',
                        textDecoration: 'none',
                        transition: 'color 0.18s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#000')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#777169')}
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
            borderTop: '1px solid #e5e5e5',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <span style={{ fontFamily: 'Mallory, sans-serif', fontSize: '12px', color: '#a59f97' }}>
            © 2026 ElevenLabs. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacy', 'Terms', 'Security'].map((l) => (
              <a key={l} href="#" style={{ fontFamily: 'Mallory, sans-serif', fontSize: '12px', color: '#777169', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
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
