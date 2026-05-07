import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container, SerifHeading, Body, Eyebrow, SCALE, COLORS, SHADOWS, RADII } from '../ui'

/* ── Four highlighted features ────────────────────────────────────────────
 *  Each tab gets a title, a paragraph, and a feature image. Image placeholder
 *  rendered for now — when assets are uploaded, swap `placeholder` → `src`.
 * ─────────────────────────────────────────────────────────────────────── */
const FEATURES = [
  {
    title: 'Storyboard before you write',
    body:  'Lock in your title, genre, characters, and plot arcs. Sherpa asks the questions a seasoned editor would, then builds a story bible you can ride for fifty episodes.',
    placeholder: 'storyboard',
  },
  {
    title: 'First drafts in minutes',
    body:  'Once your storyboard is locked, Sherpa generates a first draft of every episode. You direct, Sherpa writes, you refine. The blank page is gone.',
    placeholder: 'drafts',
  },
  {
    title: 'Built-in editorial review',
    body:  'Ask Sherpa to review your episode. Get feedback on pacing, character voice, emotional arcs and continuity — like having an editor on call.',
    placeholder: 'review',
  },
  {
    title: 'Total recall, every episode',
    body:  'On episode 50 and need a detail from episode 12? Ask Sherpa. Every line, every promise to your reader is held in memory and pulled forward when you need it.',
    placeholder: 'memory',
  },
]

/* Section is 100vh of viewable content + ((N − 1) * 80vh) of "scroll-locked"
 * range during which tabs swap. After last tab, normal page scroll resumes. */
const VIEWPORT_HEIGHT_VH    = 100
const SCROLL_PER_TAB_VH     = 80
const SECTION_HEIGHT_VH     = VIEWPORT_HEIGHT_VH + (FEATURES.length - 1) * SCROLL_PER_TAB_VH

export default function FeaturesScroll() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    let ticking = false

    const update = () => {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const sectionHeight    = section.offsetHeight
      const viewportHeight   = window.innerHeight
      const scrollableInside = sectionHeight - viewportHeight  // sticky range
      const scrolled         = -rect.top                       // px scrolled into section
      const progress         = Math.max(0, Math.min(1, scrolled / scrollableInside))
      const next             = Math.min(FEATURES.length - 1, Math.floor(progress * FEATURES.length))
      setActive((curr) => (curr === next ? curr : next))
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          update()
          ticking = false
        })
        ticking = true
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  /* Click a tab → scroll to the position where that tab becomes active */
  const goTo = (i) => {
    const section = sectionRef.current
    if (!section) return
    const sectionHeight  = section.offsetHeight
    const viewportHeight = window.innerHeight
    const scrollableInside = sectionHeight - viewportHeight
    const targetProgress = i / FEATURES.length
    const targetY = section.offsetTop + targetProgress * scrollableInside + 1
    window.scrollTo({ top: targetY, behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: `${SECTION_HEIGHT_VH}vh`,
        background: '#FAF9F1',
      }}
    >
      {/* Sticky inner — pinned for the whole scroll range */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <Container>
          {/* Heading */}
          <div style={{ marginBottom: '48px', maxWidth: '720px' }}>
            <Eyebrow>Why Sherpa</Eyebrow>
            <SerifHeading size="h2">
              Four things Sherpa does<br />better than anyone else.
            </SerifHeading>
          </div>

          {/* Tab row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${FEATURES.length}, 1fr)`,
              gap: '24px',
              marginBottom: '40px',
              borderTop: `1px solid ${COLORS.vellumShade2 || '#BBBAB4'}`,
              paddingTop: '20px',
              position: 'relative',
            }}
            className="features-tabs"
          >
            {/* Active indicator — slides under active tab */}
            <motion.div
              animate={{ x: `${active * 100}%` }}
              transition={{ type: 'spring', stiffness: 280, damping: 32 }}
              style={{
                position: 'absolute',
                top: '-1px',
                left: 0,
                width: `${100 / FEATURES.length}%`,
                height: '2px',
                background: COLORS.ink,
              }}
            />

            {FEATURES.map((f, i) => {
              const isActive = i === active
              return (
                <button
                  key={f.title}
                  onClick={() => goTo(i)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    padding: '0',
                    transition: 'opacity 200ms cubic-bezier(0.22,1,0.36,1)',
                    opacity: isActive ? 1 : 0.55,
                  }}
                >
                  <h3
                    style={{
                      fontFamily:    SCALE.h4.family,
                      fontWeight:    SCALE.h4.weight,
                      fontSize:      SCALE.h4.fontSize,
                      lineHeight:    SCALE.h4.lineHeight,
                      letterSpacing: SCALE.h4.letterSpacing,
                      color:         COLORS.textPrimary,
                      marginBottom:  '12px',
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily:    SCALE.bodySm.family,
                      fontWeight:    SCALE.bodySm.weight,
                      fontSize:      SCALE.bodySm.fontSize,
                      lineHeight:    SCALE.bodySm.lineHeight,
                      letterSpacing: SCALE.bodySm.letterSpacing,
                      color:         COLORS.textSecondary,
                      margin: 0,
                    }}
                  >
                    {f.body}
                  </p>
                </button>
              )
            })}
          </div>

          {/* Image stage — placeholder; swap to real <img> per feature once assets land */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 9',
              maxHeight: '52vh',
              borderRadius: RADII.panel,
              overflow: 'hidden',
              background: COLORS.surfaceCard,
              boxShadow: SHADOWS.elevated,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={FEATURES[active].placeholder}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  /* Subtle gradient placeholder — replace with real screenshots */
                  background:
                    `linear-gradient(135deg, ${COLORS.vellumShade1 || '#DAD9D2'} 0%, ${COLORS.vellum} 60%, ${COLORS.scarletTint7 || '#FDE2DF'} 100%)`,
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <p
                    style={{
                      fontFamily:    SCALE.eyebrow.family,
                      fontWeight:    SCALE.eyebrow.weight,
                      fontSize:      SCALE.eyebrow.fontSize,
                      letterSpacing: SCALE.eyebrow.letterSpacing,
                      textTransform: SCALE.eyebrow.textTransform,
                      color: COLORS.scarlet,
                      marginBottom: '8px',
                    }}
                  >
                    Feature 0{active + 1} · Image placeholder
                  </p>
                  <p
                    style={{
                      fontFamily:    SCALE.h3.family,
                      fontWeight:    SCALE.h3.weight,
                      fontSize:      SCALE.h3.fontSize,
                      lineHeight:    SCALE.h3.lineHeight,
                      letterSpacing: SCALE.h3.letterSpacing,
                      color: COLORS.textPrimary,
                      maxWidth: '480px',
                      margin: '0 auto',
                    }}
                  >
                    {FEATURES[active].title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Container>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .features-tabs { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .features-tabs { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
