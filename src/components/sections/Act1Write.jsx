import { motion } from 'framer-motion'
import { Container, AnimatedSection, SerifHeading, Body, Eyebrow } from '../ui'

/* ── Stub UIs ─────────────────────────────────────────────────────────── */

function StoryboardStub() {
  return (
    <div className="bg-porcelain rounded-card p-5 shadow-soft">
      <p className="font-normal text-[15px] text-midnight mb-1.5">The Boss’s Forbidden Love</p>
      <p className="font-normal text-caption text-violet uppercase tracking-eyebrow mb-3.5">Romance · Slow burn · Hindi</p>

      <div className="grid grid-cols-2 gap-1.5 mb-3">
        {[
          { name: 'Aarav Mehra',  role: 'CEO, the rival' },
          { name: 'Mira Kapoor',  role: 'Father’s daughter' },
          { name: 'Vikram Singh', role: 'The patriarch' },
          { name: 'Riya',         role: 'Best friend' },
        ].map((c) => (
          <div key={c.name} className="bg-white border border-powder rounded-tag px-2.5 py-2">
            <p className="font-normal text-caption text-midnight">{c.name}</p>
            <p className="font-normal text-[10px] text-ghost">{c.role}</p>
          </div>
        ))}
      </div>

      <p className="font-normal text-caption text-slate leading-[1.5]">
        Plot arc: rivalry &rarr; misunderstanding &rarr; reluctant alliance &rarr; betrayal &rarr; reckoning.
      </p>
    </div>
  )
}

function DraftStub() {
  return (
    <div className="bg-porcelain rounded-card p-5 shadow-soft">
      <p className="font-normal text-caption text-violet uppercase tracking-eyebrow mb-2">Episode 7 · Draft</p>
      <p className="font-normal text-body text-midnight leading-[1.5] mb-2">
        Mira’s heels echoed across the marble lobby, each step a measured breath. She had not expected to see him here. Not tonight. Not after what he had said in the boardroom.
      </p>
      <p className="font-normal text-body text-midnight leading-[1.5]">
        Aarav looked up. Their eyes met. The room <span className="bg-violet/10 border-b border-dashed border-violet">seemed to hold its breath</span>.
      </p>
    </div>
  )
}

function ReviewStub() {
  return (
    <div className="bg-porcelain rounded-card p-5 shadow-soft">
      <p className="font-normal text-[13px] text-midnight leading-[1.5] mb-3.5 italic">
        “Mira’s heels echoed across the marble lobby...”
      </p>
      {[
        { tag: 'Pacing',          note: 'Strong opening hook — consider shortening line 3 for tension.' },
        { tag: 'Character voice', note: 'Aarav feels guarded. Aligns with Ep 4 rivalry beat.' },
        { tag: 'Continuity',      note: 'Boardroom scene: cross-checks with Ep 6 ending.' },
      ].map((r) => (
        <div key={r.tag} className="flex gap-2.5 mb-2.5">
          <span className="flex-none bg-violet text-white rounded-tag px-1.5 py-0.5 font-normal text-[10px] h-fit">{r.tag}</span>
          <p className="font-normal text-[12px] text-slate leading-[1.4]">{r.note}</p>
        </div>
      ))}
    </div>
  )
}

function MemoryStub() {
  return (
    <div className="bg-porcelain rounded-card p-5 shadow-soft">
      <div className="flex gap-2.5 items-start mb-3.5">
        <div className="bg-midnight text-white rounded-tag w-[22px] h-[22px] flex items-center justify-center flex-none text-[10px] font-normal">
          You
        </div>
        <p className="font-normal text-[13px] text-midnight leading-[1.5]">
          What did Marcus say about his sister in episode 12?
        </p>
      </div>
      <div className="flex gap-2.5 items-start">
        <div className="bg-violet text-white rounded-tag w-[22px] h-[22px] flex items-center justify-center flex-none">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M2 20 L9 8 L13 14 L17 6 L22 20 Z" stroke="currentColor" strokeWidth="1.6" /></svg>
        </div>
        <div>
          <p className="font-normal text-caption text-violet uppercase tracking-eyebrow mb-1">Episode 12 · 03:42</p>
          <p className="font-normal text-[13px] text-midnight leading-[1.5] italic">
            “She wasn’t my sister, Aarav. She was the only person I ever trusted. And I left her in that house.”
          </p>
        </div>
      </div>
    </div>
  )
}

const BLOCKS = [
  { title: 'Storyboard before you write', body: 'Lock in your title, genre, characters, plot arcs, key relationships and tone. Sherpa asks the questions a seasoned editor would, and turns your half-formed idea into a story bible you can build on for fifty episodes.', visual: <StoryboardStub /> },
  { title: 'First drafts in minutes',     body: 'Once your storyboard is locked, Sherpa generates a first draft of every episode. You direct, Sherpa writes, you refine. The blank page is gone.', visual: <DraftStub /> },
  { title: 'Built-in editorial review',   body: 'Ask Sherpa to review your episode. Get feedback on pacing, character voice, emotional arcs and continuity. Like having an editor on call, twenty-four hours a day.', visual: <ReviewStub /> },
  { title: 'Total recall, every episode', body: 'On episode 50 and cannot remember what your antagonist confessed in episode 12? Ask Sherpa. Every line, every detail, every promise you made to your reader is held in memory and pulled forward when you need it.', visual: <MemoryStub /> },
]

export default function Act1Write() {
  return (
    <AnimatedSection className="py-[120px] bg-white">
      <Container>
        <div className="max-w-[720px] mb-16">
          <Eyebrow>Act 1 · Write with Sherpa</Eyebrow>
          <SerifHeading size="lg">
            Write with a partner that<br />remembers everything.
          </SerifHeading>
          <div className="mt-5 max-w-[520px]">
            <Body size="md">
              Sherpa is not a blank chat box. It is a co-writer that builds a complete world with you, then helps you write episodes that stay true to it, episode after episode.
            </Body>
          </div>
        </div>

        <div className="flex flex-col gap-20">
          {BLOCKS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-16 items-center ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}
            >
              <div className="[direction:ltr]">
                <p className="font-normal text-caption text-violet tracking-eyebrow uppercase mb-3">
                  Block {String(i + 1).padStart(2, '0')}
                </p>
                <SerifHeading size="md">{b.title}</SerifHeading>
                <div className="mt-3.5 max-w-[440px]">
                  <Body size="md">{b.body}</Body>
                </div>
              </div>
              <div className="[direction:ltr]">{b.visual}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  )
}
