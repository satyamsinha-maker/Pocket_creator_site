import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container, AnimatedSection, SerifHeading, Eyebrow } from '../ui'

const GENRES = ['All', 'Romance', 'Thriller', 'Fantasy', 'Drama']

const SERIES = [
  { title: 'The Boss’s Forbidden Love', genre: 'Romance',  episodes: 47, writer: 'Priya Sharma',   gradient: 'linear-gradient(135deg, #b85c3a, #4a1f15)' },
  { title: 'Cold Currency',            genre: 'Thriller', episodes: 89, writer: 'Arjun Krishnan', gradient: 'linear-gradient(135deg, #2a2520, #1c1814)' },
  { title: 'The Witch in the Walls',   genre: 'Fantasy',  episodes: 23, writer: 'Meera Joseph',   gradient: 'linear-gradient(135deg, #6e4a8c, #2a1838)' },
  { title: 'Empire of Ashes',          genre: 'Thriller', episodes: 64, writer: 'Vikram Rao',     gradient: 'linear-gradient(135deg, #c19a3e, #5a3f12)' },
  { title: 'After Midnight',           genre: 'Romance',  episodes: 32, writer: 'Sara Iqbal',     gradient: 'linear-gradient(135deg, #d2799d, #5e1f3c)' },
  { title: 'The Cartographer’s Daughter', genre: 'Drama',  episodes: 28, writer: 'Devika Menon',  gradient: 'linear-gradient(135deg, #4a6e6c, #1d2e2c)' },
  { title: 'Ravan’s Diary',           genre: 'Fantasy',  episodes: 41, writer: 'Karthik Iyer',   gradient: 'linear-gradient(135deg, #7c2e1f, #2a1610)' },
  { title: 'Last Train to Banaras',   genre: 'Drama',    episodes: 19, writer: 'Anya Banerjee',  gradient: 'linear-gradient(135deg, #5a4634, #1f1810)' },
]

function Card({ s }) {
  const [playing, setPlaying] = useState(false)
  return (
    <motion.article
      whileHover={{ y: -3 }}
      style={{
        background: '#fff',
        border: '1px solid #e8dfd0',
        borderRadius: '12px',
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: 'rgba(28,24,20,0.4) 0px 0px 1.143px 0px, rgba(28,24,20,0.04) 0px 2px 4px 0px',
      }}
    >
      {/* Cover */}
      <div
        style={{
          aspectRatio: '4 / 5',
          background: s.gradient,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Faux series title on cover */}
        <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14 }}>
          <p style={{ fontFamily: "'Lora', Georgia, serif", fontWeight: 600, fontSize: '15px', color: '#fff', letterSpacing: '-0.01em', lineHeight: 1.15, textShadow: '0 1px 6px rgba(0,0,0,0.25)' }}>
            {s.title}
          </p>
        </div>
        {/* Play button */}
        <button
          onClick={(e) => { e.stopPropagation(); setPlaying(!playing) }}
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.92)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.18s, background 0.18s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#fff')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.92)')}
          aria-label={playing ? 'Pause sample' : 'Play 30-second sample'}
        >
          {playing ? (
            <svg width="11" height="12" viewBox="0 0 11 12" fill="#1c1814"><rect x="1" y="1" width="3" height="10" /><rect x="7" y="1" width="3" height="10" /></svg>
          ) : (
            <svg width="10" height="12" viewBox="0 0 10 12" fill="#1c1814"><path d="M0 1 L10 6 L0 11 Z" /></svg>
          )}
        </button>
      </div>

      {/* Meta */}
      <div style={{ padding: '14px 16px' }}>
        <p style={{ fontFamily: "'Lora', Georgia, serif", fontWeight: 600, fontSize: '15px', color: '#1c1814', marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {s.title}
        </p>
        <p style={{ fontFamily: 'Mallory, sans-serif', fontSize: '12px', color: '#6b5e52' }}>
          {s.genre} · {s.episodes} episodes · {s.writer}
        </p>
      </div>
    </motion.article>
  )
}

export default function SampleStories() {
  const [genre, setGenre] = useState('All')
  const filtered = genre === 'All' ? SERIES : SERIES.filter((s) => s.genre === genre)

  return (
    <AnimatedSection style={{ padding: '120px 0' }}>
      <Container>
        <div style={{ marginBottom: '40px', maxWidth: '720px' }}>
          <Eyebrow>Sample stories</Eyebrow>
          <SerifHeading size="lg">Listen to what writers are creating.</SerifHeading>
        </div>

        {/* Genre filter */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
          {GENRES.map((g) => {
            const active = g === genre
            return (
              <button
                key={g}
                onClick={() => setGenre(g)}
                style={{
                  background: active ? '#1c1814' : 'transparent',
                  color: active ? '#faf6ed' : '#1c1814',
                  border: '1px solid',
                  borderColor: active ? '#1c1814' : '#e8dfd0',
                  borderRadius: '9999px',
                  padding: '6px 14px',
                  fontFamily: 'Mallory, sans-serif',
                  fontSize: '13px',
                  fontWeight: active ? 700 : 400,
                  cursor: 'pointer',
                  letterSpacing: '0.01em',
                  transition: 'all 0.18s',
                }}
              >
                {g}
              </button>
            )
          })}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }}
          className="sample-grid"
        >
          {filtered.map((s) => <Card key={s.title} s={s} />)}
        </div>

        <p style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: 'italic', fontSize: '13px', color: '#6b5e52', textAlign: 'center', marginTop: '32px' }}>
          Tap a cover to hear a 30-second sample.
        </p>
      </Container>

      <style>{`
        @media (max-width: 900px) { .sample-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .sample-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </AnimatedSection>
  )
}
