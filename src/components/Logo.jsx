/* ── Pocket Sherpa Logo ───────────────────────────────────────────────────
 * Recreates Figma node 6071:218 — "P" mark, "Pocket" wordmark glyphs,
 * and "Sherpa" wordmark. Coordinates verified against Figma metadata:
 *   group     = 191.336 × 32  at (212, 32)
 *   subtract  = 27.765  × 32  at (212, 32)            → relative (0, 0)
 *   Sherpa    = 77.964  × 22.613 at (325.372, 40.19)  → relative (113.372, 8.19)
 *
 * Pass `scale` to resize while preserving spacing.
 * ───────────────────────────────────────────────────────────────────── */
export default function Logo({ scale = 1 }) {
  // [src, leftPx, topPx, widthPx, heightPx]
  const PARTS = [
    ['/figma/pocket-mark.svg',     0,       0,      27.765, 32     ],
    ['/figma/pocket-4.svg',        32.36,   7.57,   13.089, 18.204 ], // P
    ['/figma/pocket-3.svg',        45.43,   12.12,  14.082, 14.017 ], // o
    ['/figma/pocket-2.svg',        60.22,   12.18,  11.459, 13.913 ], // c
    ['/figma/pocket-5.svg',        72.68,   6.14,   13.267, 19.634 ], // k
    ['/figma/pocket-1.svg',        84.83,   12.12,  12.783, 13.939 ], // e
    ['/figma/pocket-6.svg',        97.64,   7.49,   10.364, 19.927 ], // t
    ['/figma/sherpa-wordmark.svg', 113.372, 8.19,   77.964, 22.613 ], // Sherpa
  ]

  return (
    <div
      style={{
        position: 'relative',
        width:  191.336 * scale,
        height: 32      * scale,
        flexShrink: 0,
      }}
      role="img"
      aria-label="Pocket Sherpa"
    >
      {PARTS.map(([src, x, y, w, h]) => (
        <img
          key={src}
          src={src}
          alt=""
          style={{
            position: 'absolute',
            left:    x * scale,
            top:     y * scale,
            width:   w * scale,
            height:  h * scale,
            display: 'block',
          }}
        />
      ))}
    </div>
  )
}
