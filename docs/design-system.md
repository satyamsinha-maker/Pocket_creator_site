# Pocket Sherpa — Design System

> Living document. Single source of truth for all design tokens used across the marketing site.
>
> Anything you change here should also be reflected in:
> - `src/index.css` — `@theme { ... }` block (Tailwind v4 tokens)
> - `src/components/ui.jsx` — `SCALE`, `SANS`, `DISPLAY` exports

**Last updated:** 2026-05-07
**Scope of this revision:** Typography
**Planned additions:** Colors · Spacing · Grids · Radii · Shadows · Motion

---

## Typography

### Two typefaces, one rule

| Typeface | Family name in code | Weights | Use |
|---|---|---|---|
| **Season Mix** Regular | `'Season Mix'` | 400 | **Headings only** — `display`, `h1`, `h2`, `h3`, `h4` |
| **Mallory MP Narrow** | `'Mallory'` *(aliased)* | 400 (Book), 700 (Bold) | Everything else — body, labels, eyebrows, captions, UI text |

**The rule:** any text that reads as a heading uses **Season Mix**. Everything else uses **Mallory MP Narrow**. There are no exceptions.

> Why "Mallory" and not "Mallory MP Narrow" in code? — The `@font-face` declarations alias the MP Narrow files under family name `'Mallory'` for backwards compatibility with existing call sites. The narrower glyphs render automatically.

Both typefaces are self-hosted from `public/fonts/`:
- `Mallory-MP-Narrow-Book.ttf` — 400
- `Mallory-MP-Narrow-Bold.ttf` — 700
- `SeasonMix-Regular.ttf` — 400

---

### Type scale

The full scale lives in **two places**:

1. **`src/index.css`** — Tailwind v4 `@theme` tokens (`--text-*`, `--leading-*`, `--tracking-*`)
2. **`src/components/ui.jsx`** — `SCALE` lookup object, mirrors the same values for JS-side composition

| Token | Family | Size | Line height | Tracking | Use cases |
|---|---|---|---|---|---|
| **`display`** | Season Mix 400 | `clamp(40px, 5.4vw, 56px)` | `1.07` | `-0.03em` | Hero h1 · trust-band stat numbers |
| **`h1`** | Season Mix 400 | `clamp(36px, 4.5vw, 48px)` | `1.10` | `-0.025em` | Reserved — page titles |
| **`h2`** | Season Mix 400 | `clamp(28px, 3.4vw, 36px)` | `1.15` | `-0.02em` | Every section title · dashboard stats |
| **`h3`** | Season Mix 400 | `clamp(22px, 2.4vw, 28px)` | `1.20` | `-0.015em` | Block titles · step titles · card titles |
| **`h4`** | Season Mix 400 | `20px` | `1.25` | `-0.01em` | Writer names · cover-art titles |
| **`subheading`** | Mallory 400 | `18px` | `1.5` | `0` | Lead paragraph · hero body · pull-quotes |
| **`body`** | Mallory 400 | `16px` | `1.55` | `0` | Default paragraph · nav links · CTA text |
| **`bodySm`** | Mallory 400 | `14px` | `1.45` | `0.003em` | Dense body · footer links · stub UI body |
| **`label`** | Mallory 400 | `13px` | `1.4` | `0.005em` | UI labels · button text · genre chips · stats |
| **`eyebrow`** | Mallory **700** | `12px` | `1.4` | `0.08em` UPPER | Section eyebrows · footer column heads · stamp labels |
| **`caption`** | Mallory 400 | `11px` | `1.4` | `0.02em` | Meta info · timestamps · footnotes · axis labels |

---

### Hierarchy at a glance

```
display     ┃ ████████████████████████████████████████████████████████  56 px Season Mix
h1          ┃ ███████████████████████████████████████████████████        48 px
h2          ┃ ███████████████████████████████████                        36 px
h3          ┃ ██████████████████████████                                 28 px
h4          ┃ ████████████████████                                       20 px
subheading  ┃ ██████████████████                                         18 px Mallory
body        ┃ ████████████████                                           16 px
bodySm      ┃ ██████████████                                             14 px
label       ┃ █████████████                                              13 px
eyebrow     ┃ ████████████                                               12 px Mallory 700 UPPER
caption     ┃ ███████████                                                11 px
```

---

### How to use it

#### Option A — React primitives *(preferred for common patterns)*

Import from `src/components/ui.jsx`:

```jsx
import {
  SerifHeading,    // size: 'display' | 'h1' | 'h2' | 'h3' | 'h4'
  Subheading,      // 18 px lead
  Body,            // size: 'lg' | 'md' | 'sm'  — 18 / 16 / 14 px
  Label,           // 13 px UI text
  Eyebrow,         // 12 px uppercase, 0.08em tracking
  Caption,         // 11 px meta
} from './components/ui'

<Eyebrow>Act 1 · Write with Sherpa</Eyebrow>
<SerifHeading size="h2">Write with a partner that remembers everything.</SerifHeading>
<Subheading>Sherpa is not a blank chat box. It is a co-writer…</Subheading>
<Body size="md">Lock in your title, genre, characters…</Body>
<Body size="sm">Plot arc: rivalry → reckoning.</Body>
<Label color="#061b31">47 episodes</Label>
<Caption>© 2026 Pocket Sherpa</Caption>
```

##### Legacy size aliases on `<SerifHeading>`

For backwards compatibility, the `xl|lg|md|sm` aliases are kept:

| Alias | Maps to |
|---|---|
| `xl` | `display` |
| `lg` | `h2` |
| `md` | `h3` |
| `sm` | `h4` |

#### Option B — `SCALE` lookup *(for ad-hoc styling)*

When a token doesn't fit a primitive — e.g. you need a heading inside an unusual layout, or an inline label with a custom color — pull from `SCALE` directly:

```jsx
import { SCALE } from './components/ui'

<h3 style={{
  fontFamily:    SCALE.h3.family,
  fontWeight:    SCALE.h3.weight,
  fontSize:      SCALE.h3.fontSize,
  lineHeight:    SCALE.h3.lineHeight,
  letterSpacing: SCALE.h3.letterSpacing,
  color: '#061b31',
}}>
  Step title
</h3>
```

#### Option C — Tailwind v4 utilities *(for class-based styling)*

The `@theme` block in `src/index.css` exposes every token as a Tailwind utility:

```jsx
<h2 className="text-h2 leading-h2 tracking-h2 font-display">
  Section heading
</h2>

<p className="text-body leading-body text-slate">
  Paragraph
</p>
```

The two custom font stacks are exposed as `font-sans` (Mallory) and `font-display` (Season Mix).

---

### Color tokens *(used inside text styles)*

These pair with the typography. Full color system will move into its own section below — for now, the most common text colors:

| Token | Hex | Use |
|---|---|---|
| `--color-midnight` | `#061b31` | Primary text — headings, body emphasis |
| `--color-slate` | `#50617a` | Secondary text — body, blurbs |
| `--color-ghost` | `#64748d` | Tertiary — placeholders, captions, meta |
| `--color-violet` *(brand red)* | `#F51D00` | Accent — eyebrows, links, key actions |

---

### Voice rules *(typography-adjacent)*

These were locked in when we adopted the Pocket Sherpa content plan and apply to **what** we write, not just how it looks:

- **Sherpa is a co-writer, never a generator.** "Sherpa drafts what you direct," never "AI generates your story."
- **Writer language, not tech language.** Use `chapter`, `episode`, `character`, `plot thread`, `saga`. Avoid `session`, `context window`, `tokens`, `embeddings`.
- **"Get paid" not "monetise."** "Earn", "income from your stories" all land harder for a writer audience.
- **Pocket FM is named confidently.** "Live on Pocket FM" is the shorthand for "real listeners, real money, real platform." For first appearance, clarify "Pocket FM, the audio series platform with 100M+ listeners."
- **No AI hype words.** Skip `revolutionary`, `magical`, `unleash`, `supercharge`. Lean literary, not Silicon Valley.

---

## Colors

> **Coming soon.** This section will document the full color palette, semantic tokens, surface levels, and contrast guidance. The current Stripe-inspired palette can be inspected directly in `src/index.css` `@theme` block.

Quick reference for now:

| Family | Tokens |
|---|---|
| **Surface** | `platinum` (page) · `porcelain` (secondary) · `powder` (alt section) · `stone` (border) |
| **Text** | `midnight` · `slate` · `ghost` |
| **Brand** | `violet` (`#F51D00` brand red) · `violet-dark` (`#c81700` hover) · `violet-soft` · `violet-washed` |
| **Accent** | `green` · `orange` |

---

## Spacing

> **Coming soon.** Will document the spacing scale (likely 4 px base), section gaps, container padding, and component padding patterns.

---

## Grids

> **Coming soon.** Will document the responsive grid system, the hero `var(--grid-w)` mechanism (`min(70.44vw, 1280px)`), section max-widths (`1200px` for content, full-bleed for hero), and breakpoint conventions.

---

## Radii

> **Coming soon.** Currently four named radii in `@theme`:

| Token | Value |
|---|---|
| `--radius-button` | `4px` |
| `--radius-input` | `4px` |
| `--radius-tag` | `4px` |
| `--radius-card` | `6px` |

The Sign-up CTA in the nav uses a one-off `32px` pill radius — this should probably become a `--radius-pill` token in a future revision.

---

## Shadows

> **Coming soon.** Currently:

```css
/* "Soft elevation" — used on feature cards */
.elevated { box-shadow: rgba(0, 0, 0, 0.2) 0 0 32px 8px; }

/* Hover state — used on cards */
boxShadow: rgba(50, 50, 93, 0.12) 0 16px 32px 0;

/* Input shadow */
boxShadow: rgba(23, 23, 23, 0.06) 0 3px 6px 0;
```

---

## Motion

> **Coming soon.** Patterns currently in use:

- **Fade-up on scroll** — `AnimatedSection` primitive (`y: 20 → 0`, opacity, 0.6s, easing `[0.22, 1, 0.36, 1]`)
- **Per-word blur reveal** — `BlurReveal` helper in `Hero.jsx` (heading: 14 px blur, 0.7 s/word, 0.06 s stagger)
- **Image clip+blur reveal** — Hero product image bottom→top mask reveal (1.8 s)
- **Mountain crossfade** — `5000 ms` cycle with `2000 ms` cross-fade
- **Hover lift** — cards: `y: -2`, shadow upgrade, `0.25 s`

---

## File map

| Concern | File |
|---|---|
| Typography tokens | `src/index.css` `@theme { --text-*, --leading-*, --tracking-* }` |
| Typography lookup (JS) | `src/components/ui.jsx` `SCALE` |
| React primitives | `src/components/ui.jsx` (`SerifHeading`, `Body`, `Label`, etc.) |
| Color tokens | `src/index.css` `@theme { --color-* }` |
| Font files | `public/fonts/` |
| This document | `docs/design-system.md` |

---

## Changelog

| Date | Change |
|---|---|
| 2026-05-07 | First version: typography section. Skeleton sections for colors / spacing / grids / radii / shadows / motion. |
