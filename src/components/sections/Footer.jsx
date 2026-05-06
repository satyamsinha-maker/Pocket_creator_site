import { Container } from '../ui'

const COLS = [
  { heading: 'Product',   links: ['How it works', 'Pricing', 'Roadmap', 'Beta access'] },
  { heading: 'Writers',   links: ['Writer stories', 'Earnings', 'Sample series', 'Submission rules'] },
  { heading: 'Resources', links: ['Help center', 'Blog', 'Genre guides', 'Style guide', 'Status'] },
  { heading: 'Company',   links: ['About', 'Pocket FM', 'Careers', 'Press', 'Contact'] },
]

export default function Footer() {
  return (
    <footer className="pt-[72px] pb-12 border-t border-powder bg-porcelain">
      <Container>
        <div className="flex items-center gap-2.5 mb-10">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M2 20 L9 8 L13 14 L17 6 L22 20 Z" stroke="#061b31" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
            <circle cx="17" cy="6" r="1.4" fill="#F51D00" />
          </svg>
          <span className="font-normal text-base tracking-heading-sm text-midnight">
            Pocket Sherpa
          </span>
          <span className="text-[12px] text-ghost ml-2">A Pocket FM company</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {COLS.map((c) => (
            <div key={c.heading}>
              <p className="font-normal text-caption text-midnight mb-3.5 tracking-eyebrow uppercase">
                {c.heading}
              </p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-body text-slate no-underline transition-colors duration-200 hover:text-violet"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-powder flex justify-between items-center flex-wrap gap-3">
          <p className="text-[13px] text-ghost max-w-[480px]">
            Idea to audio series to listeners to royalty cheque, all in one product.
          </p>
          <span className="text-[12px] text-ghost">
            © 2026 Pocket Sherpa · A Pocket FM product
          </span>
        </div>
      </Container>
    </footer>
  )
}
