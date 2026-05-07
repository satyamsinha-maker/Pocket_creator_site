/* ── Pocket Sherpa Logo ───────────────────────────────────────────────────
 * Single self-contained SVG sourced from public/figma/sherpa-logo.svg.
 * Natural dimensions: 192 × 32 px. Pass `scale` to resize while preserving
 * aspect ratio.
 * ───────────────────────────────────────────────────────────────────── */
export default function Logo({ scale = 1 }) {
  return (
    <img
      src="/figma/sherpa-logo.svg"
      alt="Pocket Sherpa"
      style={{
        width:  192 * scale,
        height: 32  * scale,
        display: 'block',
        flexShrink: 0,
      }}
    />
  )
}
