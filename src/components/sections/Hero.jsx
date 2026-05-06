import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container, PillButton, Body, SerifHeading } from '../ui'

const PROMPTS = [
  'A revenge thriller where a wronged woman builds a corporate empire to destroy the men who betrayed her.',
  'A slow-burn romance between a billionaire and his arch-rival’s daughter.',
  'An urban fantasy where a college student discovers her grandmother is a powerful witch.',
]

export default function Hero() {
  const [value, setValue] = useState('')

  return (
    <section id="top" className="relative overflow-hidden bg-white py-24 md:py-28">
      <div
        aria-hidden
        className="absolute -top-1/4 -right-[10%] w-[900px] h-[900px] pointer-events-none blur-[20px]"
        style={{ background: 'radial-gradient(circle, rgba(127,125,252,0.35), rgba(244,75,204,0.18) 33%, rgba(229,237,245,0) 66%)' }}
      />

      <Container>
        <div className="max-w-[820px] relative z-[1]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SerifHeading size="xl" as="h1">
              Write a story.<br />Reach listeners.<br />Get paid.
            </SerifHeading>
          </motion.div>

          <motion.div
            className="mt-6 max-w-[560px]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
          >
            <Body size="lg" color="#50617a">
              Pocket Sherpa is the AI co-writer for serialized fiction. We help you write,
              we produce the audio, and we put your story on Pocket FM where listeners pay
              to hear it. You earn every time someone listens.
            </Body>
          </motion.div>

          <motion.div
            className="mt-10 max-w-[660px]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          >
            <p className="font-normal text-caption text-ghost tracking-eyebrow uppercase mb-2.5">
              Tell me your story idea
            </p>

            <div className="flex items-center bg-white border border-stone rounded-input pl-4 pr-2 py-2 gap-2 shadow-input">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="A betrayed scientist returns from exile with a secret..."
                className="flex-1 border-0 outline-0 bg-transparent text-body text-midnight py-2"
              />
              <PillButton variant="sienna">
                Start writing
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7 H12 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </PillButton>
            </div>

            <div className="flex flex-wrap gap-2 mt-3.5">
              {PROMPTS.map((p, i) => (
                <motion.button
                  key={i}
                  onClick={() => setValue(p)}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white border border-powder rounded-tag px-3 py-2 text-[12px] text-slate cursor-pointer text-left max-w-[380px] leading-[1.4] hover:border-violet-washed hover:bg-porcelain transition-colors"
                >
                  <span className="text-violet mr-1.5">&rsaquo;</span>
                  {p}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-10 flex gap-3 items-center flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <PillButton variant="filled">Start writing free</PillButton>
            <PillButton variant="ghost">
              <span className="inline-flex w-3.5 h-3.5 items-center justify-center text-violet">
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                  <path d="M0 1 L10 6 L0 11 Z" fill="currentColor" />
                </svg>
              </span>
              Hear a Pocket Sherpa story
            </PillButton>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
