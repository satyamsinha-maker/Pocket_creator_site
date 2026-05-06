import { useState } from 'react'
import { Container, AnimatedSection, SerifHeading, Body, PillButton } from '../ui'

export default function FinalCTA() {
  const [v, setV] = useState('')
  return (
    <AnimatedSection className="py-40 text-center relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none blur-[20px]"
        style={{ background: 'radial-gradient(circle, rgba(127,125,252,0.28), rgba(244,75,204,0.14) 33%, rgba(229,237,245,0) 66%)' }}
      />
      <Container>
        <div className="relative z-[1]">
          <SerifHeading size="xl" maxWidth="780px" className="mx-auto">
            Your audience is waiting.
          </SerifHeading>
          <div className="mt-6 mx-auto max-w-[540px] mb-9">
            <Body size="lg" color="#50617a">
              Sign up free. Write your first chapter today. We will handle the rest.
            </Body>
          </div>

          <div className="max-w-[660px] mx-auto">
            <div className="flex items-center bg-white border border-stone rounded-input pl-4 pr-2 py-2 gap-2 shadow-input text-left">
              <input
                value={v}
                onChange={(e) => setV(e.target.value)}
                placeholder="What story do you want to tell the world?"
                className="flex-1 border-0 outline-0 bg-transparent text-body text-midnight py-2"
              />
              <PillButton variant="sienna">
                Start writing free
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7 H12 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </PillButton>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  )
}
