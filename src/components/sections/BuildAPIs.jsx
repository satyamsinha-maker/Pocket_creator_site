import { useState } from 'react'
import { Container, AnimatedSection, SectionHeading, PillButton } from '../ui'

const APIS = [
  {
    name: 'Text to Speech API',
    desc: 'Generate ultra-lifelike voices from text in 32 languages and 10,000+ voices.',
    code: `import { ElevenLabsClient } from "@elevenlabs/client";

const elevenlabs = new ElevenLabsClient();
const audio = await elevenlabs.generate({
  voice: "Adam",
  model_id: "eleven_multilingual_v2",
  text: "Hello, world!",
});`,
  },
  {
    name: 'Voice Cloning API',
    desc: 'Clone a voice with as little as 30 seconds of source audio.',
    code: `const voice = await elevenlabs.voices.add({
  name: "MyVoice",
  files: [audioFile],
  description: "A warm narrator",
});`,
  },
  {
    name: 'Speech to Text API',
    desc: 'Real-time transcription with diarisation in 99 languages.',
    code: `const transcript = await elevenlabs.scribe.transcribe({
  audio: audioBlob,
  diarize: true,
  language: "en",
});`,
  },
  {
    name: 'Music API',
    desc: 'Studio-grade music generation with full prompt control over genre and length.',
    code: `const track = await elevenlabs.music.compose({
  prompt: "Lo-fi jazz with subtle vinyl crackle",
  duration_ms: 30000,
});`,
  },
]

export default function BuildAPIs() {
  const [active, setActive] = useState(0)
  const a = APIS[active]

  return (
    <AnimatedSection style={{ padding: '96px 0' }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start', marginBottom: '40px' }} className="apis-grid">
          <SectionHeading>Or build anything with<br />a powerful host of APIs</SectionHeading>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
            <PillButton variant="ghost">Explore docs</PillButton>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '24px', alignItems: 'start' }} className="apis-grid">
          {/* API list */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {APIS.map((api, i) => (
              <button
                key={api.name}
                onClick={() => setActive(i)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderTop: i === 0 ? '1px solid #e5e5e5' : 'none',
                  borderBottom: '1px solid #e5e5e5',
                  textAlign: 'left',
                  padding: '20px 0',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  transition: 'background 0.18s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f3f1')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <span style={{
                  fontFamily: 'Mallory, sans-serif',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: i === active ? '#000' : '#000',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  {i === active && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#000' }} />}
                  {api.name}
                </span>
                <span style={{ fontFamily: 'Mallory, sans-serif', fontSize: '13px', color: '#777169', lineHeight: 1.45 }}>
                  {api.desc}
                </span>
              </button>
            ))}
          </div>

          {/* Code panel */}
          <div
            style={{
              borderRadius: '16px',
              backgroundColor: '#0e0c14',
              border: '1px solid #1a1820',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
            }}
          >
            <div style={{ padding: '12px 16px', borderBottom: '1px solid #1a1820', display: 'flex', gap: '6px' }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#3a3540' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#3a3540' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#3a3540' }} />
              <span style={{ marginLeft: 'auto', fontFamily: 'monospace', fontSize: '11px', color: '#6b6975' }}>{a.name.toLowerCase().replace(/\s/g, '-')}.ts</span>
            </div>
            <pre
              style={{
                margin: 0,
                padding: '20px 22px',
                fontFamily: 'ui-monospace, Menlo, monospace',
                fontSize: '13px',
                lineHeight: 1.7,
                color: '#d8d2eb',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
            >
              {a.code}
            </pre>
          </div>
        </div>
      </Container>

      <style>{`
        @media (max-width: 768px) {
          .apis-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </AnimatedSection>
  )
}
