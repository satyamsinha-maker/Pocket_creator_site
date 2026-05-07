# Pocket Sherpa — Design System

> Living document. Single source of truth for all design tokens used across the marketing site.
>
> Anything you change here should also be reflected in:
> - `src/index.css` — `@theme { ... }` block (Tailwind v4 tokens)
> - `src/components/ui.jsx` — `SCALE`, `SANS`, `DISPLAY` exports

**Last updated:** 2026-05-07
**Scope of this revision:** Typography · Colors · Semantic tokens · Spacing & Grid
**Planned additions:** Radii · Shadows · Motion

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

The brand palette is built on **three core families**. Each family ships with the base colour plus seven progressively-lighter **tints** and seven progressively-darker **shades** — fifteen stops in total, generated from the base hex.

| Family | Base hex | Role |
|---|---|---|
| **Ink** | `#1C1C1C` | Primary text, dark surfaces, high-contrast UI |
| **Vellum** | `#FAF9F1` | Page surface, warm paper ground for everything to sit on |
| **Scarlet** | `#F51D00` | Brand red — primary action, accents, links, signatures |

The names reflect the warm-literary brand voice: **Ink** for the writing it captures, **Vellum** for the page it sits on, **Scarlet** for the spark that drives a writer to publish.

---

### Naming convention

Within each family, the eight tints (lightest → base) and seven shades (base → darkest) are named with a consistent suffix pattern:

- **`{family}-tint-7`** — lightest tint
- **`{family}-tint-6, …, tint-1`** — progressively closer to base
- **`{family}`** — base (no suffix)
- **`{family}-shade-1, …, shade-6`** — progressively darker
- **`{family}-shade-7`** — darkest shade

So `ink-tint-7` is the lightest grey in the Ink family, `ink` is the base `#1C1C1C`, and `ink-shade-7` is the deepest near-black.

---

### Ink — `#1C1C1C`

Used for primary text, dark UI elements, and the Sign-up / "Start writing" CTA fill.

| Token | Hex | Preview |
|---|---|---|
| `ink-tint-7` | `#E2E2E2` | ▮ lightest |
| `ink-tint-6` | `#C6C6C6` | ▮ |
| `ink-tint-5` | `#A9A9A9` | ▮ |
| `ink-tint-4` | `#8D8D8D` | ▮ |
| `ink-tint-3` | `#717171` | ▮ |
| `ink-tint-2` | `#545454` | ▮ |
| `ink-tint-1` | `#383838` | ▮ |
| **`ink`** | **`#1C1C1C`** | ▮ **base** |
| `ink-shade-1` | `#181818` | ▮ |
| `ink-shade-2` | `#151515` | ▮ |
| `ink-shade-3` | `#111111` | ▮ |
| `ink-shade-4` | `#0E0E0E` | ▮ |
| `ink-shade-5` | `#0A0A0A` | ▮ |
| `ink-shade-6` | `#070707` | ▮ |
| `ink-shade-7` | `#030303` | ▮ darkest |

---

### Vellum — `#FAF9F1`

Page surface and warm paper ground. The base sits at the **light end** of its family — its "tints" are barely-there nudges toward white, while its "shades" walk all the way down toward charcoal as a complementary warm-grey scale.

| Token | Hex | Preview |
|---|---|---|
| `vellum-tint-7` | `#FEFEFD` | ▮ lightest |
| `vellum-tint-6` | `#FDFDFB` | ▮ |
| `vellum-tint-5` | `#FDFCF9` | ▮ |
| `vellum-tint-4` | `#FCFCF8` | ▮ |
| `vellum-tint-3` | `#FBFBF6` | ▮ |
| `vellum-tint-2` | `#FBFAF4` | ▮ |
| `vellum-tint-1` | `#FAF9F2` | ▮ |
| **`vellum`** | **`#FAF9F1`** | ▮ **base** |
| `vellum-shade-1` | `#DAD9D2` | ▮ |
| `vellum-shade-2` | `#BBBAB4` | ▮ |
| `vellum-shade-3` | `#9C9B96` | ▮ |
| `vellum-shade-4` | `#7D7C78` | ▮ |
| `vellum-shade-5` | `#5D5D5A` | ▮ |
| `vellum-shade-6` | `#3E3E3C` | ▮ |
| `vellum-shade-7` | `#1F1F1E` | ▮ darkest |

The vellum-shade scale provides an entire **warm-neutral text + border palette**, so a single hue family can carry surface, text, and dividers with consistent temperature. Use `vellum-shade-4` through `vellum-shade-6` for secondary / tertiary text on the cream ground, and `vellum-shade-1`/`-2` for hairline dividers.

---

### Scarlet — `#F51D00`

Brand red. Reserved for primary actions, link accents, eyebrow labels, and any signal that needs to read as "Pocket Sherpa." Use sparingly — its job is contrast, not coverage.

| Token | Hex | Preview |
|---|---|---|
| `scarlet-tint-7` | `#FDE2DF` | ▮ lightest |
| `scarlet-tint-6` | `#FCC6BF` | ▮ |
| `scarlet-tint-5` | `#FBAA9F` | ▮ |
| `scarlet-tint-4` | `#FA8E7F` | ▮ |
| `scarlet-tint-3` | `#F8715F` | ▮ |
| `scarlet-tint-2` | `#F7553F` | ▮ |
| `scarlet-tint-1` | `#F6391F` | ▮ |
| **`scarlet`** | **`#F51D00`** | ▮ **base** |
| `scarlet-shade-1` | `#D61900` | ▮ hover |
| `scarlet-shade-2` | `#B71500` | ▮ |
| `scarlet-shade-3` | `#991200` | ▮ |
| `scarlet-shade-4` | `#7A0E00` | ▮ |
| `scarlet-shade-5` | `#5B0A00` | ▮ |
| `scarlet-shade-6` | `#3D0700` | ▮ |
| `scarlet-shade-7` | `#1E0300` | ▮ darkest |

`scarlet-shade-1` (`#D61900`) is the natural **hover state** for the brand-filled button. The current implementation uses `#c81700` from the previous palette — slightly cooler — and should be migrated to `scarlet-shade-1` once the palette is wired into `@theme`.

`scarlet-tint-7` (`#FDE2DF`) is a soft pink wash suitable for highlight backgrounds, error chips, or "draft saved" toasts.

---

### Suggested `@theme` block *(not yet wired)*

When ready to migrate the live tokens, paste this into `src/index.css` inside the `@theme { ... }` block:

```css
/* ── Ink (text + dark surfaces) ─────────────────────────── */
--color-ink-tint-7:  #E2E2E2;
--color-ink-tint-6:  #C6C6C6;
--color-ink-tint-5:  #A9A9A9;
--color-ink-tint-4:  #8D8D8D;
--color-ink-tint-3:  #717171;
--color-ink-tint-2:  #545454;
--color-ink-tint-1:  #383838;
--color-ink:         #1C1C1C;
--color-ink-shade-1: #181818;
--color-ink-shade-2: #151515;
--color-ink-shade-3: #111111;
--color-ink-shade-4: #0E0E0E;
--color-ink-shade-5: #0A0A0A;
--color-ink-shade-6: #070707;
--color-ink-shade-7: #030303;

/* ── Vellum (surface + warm-grey scale) ─────────────────── */
--color-vellum-tint-7:  #FEFEFD;
--color-vellum-tint-6:  #FDFDFB;
--color-vellum-tint-5:  #FDFCF9;
--color-vellum-tint-4:  #FCFCF8;
--color-vellum-tint-3:  #FBFBF6;
--color-vellum-tint-2:  #FBFAF4;
--color-vellum-tint-1:  #FAF9F2;
--color-vellum:         #FAF9F1;
--color-vellum-shade-1: #DAD9D2;
--color-vellum-shade-2: #BBBAB4;
--color-vellum-shade-3: #9C9B96;
--color-vellum-shade-4: #7D7C78;
--color-vellum-shade-5: #5D5D5A;
--color-vellum-shade-6: #3E3E3C;
--color-vellum-shade-7: #1F1F1E;

/* ── Scarlet (brand red) ──────────────────────────────────── */
--color-scarlet-tint-7:  #FDE2DF;
--color-scarlet-tint-6:  #FCC6BF;
--color-scarlet-tint-5:  #FBAA9F;
--color-scarlet-tint-4:  #FA8E7F;
--color-scarlet-tint-3:  #F8715F;
--color-scarlet-tint-2:  #F7553F;
--color-scarlet-tint-1:  #F6391F;
--color-scarlet:         #F51D00;
--color-scarlet-shade-1: #D61900;
--color-scarlet-shade-2: #B71500;
--color-scarlet-shade-3: #991200;
--color-scarlet-shade-4: #7A0E00;
--color-scarlet-shade-5: #5B0A00;
--color-scarlet-shade-6: #3D0700;
--color-scarlet-shade-7: #1E0300;
```

Once these are in `@theme`, every utility class works automatically — `bg-scarlet`, `text-ink-tint-3`, `border-vellum-shade-2`, etc.

---

### Legacy tokens — *retired ✅*

The site previously ran on an interim Stripe-inspired palette (`platinum`, `porcelain`, `powder`, `stone`, `ghost`, `slate`, `midnight`, `violet`, `soft-violet`, `washed-violet`, `green`, `orange`). All of those tokens have now been removed from `@theme` and every referencing hex has been migrated to the design-system token closest in role:

| Legacy hex | Migrated to | Token |
|---|---|---|
| `#061b31` (midnight) | `#1C1C1C` | `ink` |
| `#50617a` (slate) | `#717171` | `ink-tint-3` |
| `#64748d` (ghost) | `#8D8D8D` | `ink-tint-4` |
| `#828282` (legacy nav grey) | `#717171` | `ink-tint-3` |
| `#F51D00` (violet, kept hex) | `#F51D00` | `scarlet` |
| `#ff6b4d` (soft-violet) | `#F8715F` | `scarlet-tint-3` |
| `#fcb8ad` (washed-violet) | `#FCC6BF` | `scarlet-tint-6` |
| `#d8d6df` (stone) | `#BBBAB4` | `vellum-shade-2` |
| `#e5edf5` (powder, alt section) | `#DAD9D2` | `vellum-shade-1` |
| `#f8fafd` (porcelain, card) | `#FEFEFD` | `vellum-tint-7` |
| `#ececec` (legacy hairline) | `#DAD9D2` | `vellum-shade-1` |

Going forward, the only canonical color sources are the **family palette** (ink / vellum / scarlet) and **semantic tokens** that point into it. New components should never hard-code a hex outside those families.

---

## Semantic tokens

The 45 family-stop colors above are the **raw palette**. Day-to-day, components should reference **semantic tokens** that name a colour by its *purpose* rather than its hex. Semantic tokens map onto the family scale, so the visual system stays unified — but the indirection means a single edit to "primary text" propagates everywhere it's used.

### Logo

| Slot | Token | Use |
|---|---|---|
| Logo mark + wordmark | **`scarlet`** | The "P" mark and the "Sherpa" wordmark both render in `scarlet` (`#F51D00`). The SVG ships with this hex hard-coded. |

### Text

The full text hierarchy lives entirely in the **Ink** family — primary, secondary, tertiary, all the way down to disabled — and pairs naturally with the cream `vellum` page surface.

| Role | Token | Hex | When to use |
|---|---|---|---|
| **Text · Primary** | `ink` | `#1C1C1C` | Headings (display, h1–h4) · body emphasis · button labels on light fills · top-of-hierarchy UI text |
| **Text · Secondary** | `ink-tint-3` | `#717171` | Body paragraphs · subheading copy · supporting text under headings |
| **Text · Tertiary** | `ink-tint-4` | `#8D8D8D` | Captions · metadata · timestamps · placeholder text · footnotes |
| **Text · Disabled** | `ink-tint-5` | `#A9A9A9` | Disabled controls · de-emphasised labels |
| **Text · On-dark** | `vellum` | `#FAF9F1` | Text rendered on top of `ink` fills — primary CTA labels, dark-band sections |

### Buttons

#### Primary CTA — "Start writing", "Sign up free", any conversion-critical action

| State | Background | Text | Border |
|---|---|---|---|
| **Default** | `ink` (`#1C1C1C`) | `vellum` (`#FAF9F1`) | none |
| **Hover** | `ink-tint-1` (`#383838`) | `vellum` | none |
| **Active / Pressed** | `ink-shade-2` (`#151515`) | `vellum` | none |
| **Focus ring** | (transparent) | `vellum` | `2px` outline `ink-tint-3` (`#717171`) at `2px` offset |
| **Disabled** | `ink-tint-5` (`#A9A9A9`) | `vellum` | none |

#### Secondary CTA — "Contact sales", "Read more", any optional action

| State | Background | Text | Border |
|---|---|---|---|
| **Default** | transparent | `ink` (`#1C1C1C`) | `1px` solid `ink` |
| **Hover** | `ink-tint-7` (`#E2E2E2`) | `ink` | `1px` solid `ink` |
| **Active / Pressed** | `ink-tint-6` (`#C6C6C6`) | `ink` | `1px` solid `ink` |
| **Focus ring** | (default fill) | `ink` | `2px` outline `ink` at `2px` offset |
| **Disabled** | transparent | `ink-tint-5` (`#A9A9A9`) | `1px` solid `ink-tint-5` |

#### Brand CTA *(use sparingly)* — moments where the brand red is the right signal

| State | Background | Text | Border |
|---|---|---|---|
| **Default** | `scarlet` (`#F51D00`) | `vellum` | none |
| **Hover** | `scarlet-shade-1` (`#D61900`) | `vellum` | none |
| **Active / Pressed** | `scarlet-shade-2` (`#B71500`) | `vellum` | none |

### Surface

| Role | Token | Hex |
|---|---|---|
| **Page** | `vellum` | `#FAF9F1` |
| **Card · raised** | `vellum-tint-7` | `#FEFEFD` (effectively white, with the warm ground beneath) |
| **Card · subtle alt** | `vellum-tint-3` | `#FBFBF6` |
| **Section · alt band** | `vellum-shade-1` | `#DAD9D2` (used to break up vertical rhythm) |
| **Hairline / divider** | `vellum-shade-2` | `#BBBAB4` |
| **Inverse / dark band** | `ink` | `#1C1C1C` |

### Hover & focus rules

A consistent interaction language across every clickable surface:

- **Hover on dark fills** → step **lighter** by one tint (`ink` → `ink-tint-1`, `scarlet` → `scarlet-shade-1`).
- **Hover on light/transparent fills** → step **darker** by one tint (transparent → `ink-tint-7`, white card → `vellum-shade-1`).
- **Active / pressed** → step one further in the same direction as hover.
- **Focus ring** → always `2px` solid outline at `2px` offset, color `ink-tint-3` (`#717171`) on light fills, `vellum` on dark fills, never the brand `scarlet`.
- **Transition** → `120ms` cubic-bezier `(0.22, 1, 0.36, 1)` for color + background changes; never animate borders.

### Suggested `@theme` semantic block

Paste this into `src/index.css` after the family tokens. The semantic tokens are simple aliases pointing into the family palette — change one mapping, the whole system shifts.

```css
/* ── Text ────────────────────────────────────────────────── */
--color-text-primary:    var(--color-ink);          /* #1C1C1C */
--color-text-secondary:  var(--color-ink-tint-3);   /* #717171 */
--color-text-tertiary:   var(--color-ink-tint-4);   /* #8D8D8D */
--color-text-disabled:   var(--color-ink-tint-5);   /* #A9A9A9 */
--color-text-on-dark:    var(--color-vellum);       /* #FAF9F1 */

/* ── Buttons ─────────────────────────────────────────────── */
--color-button-primary-bg:           var(--color-ink);
--color-button-primary-bg-hover:     var(--color-ink-tint-1);
--color-button-primary-bg-active:    var(--color-ink-shade-2);
--color-button-primary-text:         var(--color-vellum);

--color-button-secondary-border:     var(--color-ink);
--color-button-secondary-text:       var(--color-ink);
--color-button-secondary-bg-hover:   var(--color-ink-tint-7);
--color-button-secondary-bg-active:  var(--color-ink-tint-6);

--color-button-brand-bg:             var(--color-scarlet);
--color-button-brand-bg-hover:       var(--color-scarlet-shade-1);
--color-button-brand-text:           var(--color-vellum);

/* ── Surface ─────────────────────────────────────────────── */
--color-surface-page:        var(--color-vellum);
--color-surface-card:        var(--color-vellum-tint-7);
--color-surface-alt:         var(--color-vellum-shade-1);
--color-surface-divider:     var(--color-vellum-shade-2);
--color-surface-inverse:     var(--color-ink);

/* ── Focus ───────────────────────────────────────────────── */
--color-focus-ring-light:    var(--color-ink-tint-3);
--color-focus-ring-dark:     var(--color-vellum);
```

---

## Spacing & Grid

The site is built on an **8 px grid**. Every padding, margin, gap, and offset must be a multiple of 8 (or, for tight UI, a multiple of 4 — half-step). This produces a consistent vertical rhythm and predictable optical alignment.

### The base unit

```
1 unit = 8 px
```

Half-steps (4 px) are allowed for fine-grained UI elements where 8 px is too coarse — icon-to-text gaps, control internals, hairline separators.

### Spacing scale

Tokens are named by their unit count, not pixel value. So `space-2` = 2 units = 16 px.

| Token | Units | Pixels | Common use |
|---|---|---|---|
| `space-0` | 0 | `0px` | Reset |
| `space-half` | 0.5 | `4px` | Icon-to-text gap · hairline offsets · tight chip internals |
| `space-1` | 1 | `8px` | Inline gaps in controls · between paired elements |
| `space-1-5` | 1.5 | `12px` | Form-field internal padding · small button padding |
| `space-2` | 2 | `16px` | Default element gap · standard button padding · stub-UI cell padding |
| `space-3` | 3 | `24px` | Card internal padding · between related items in a list |
| `space-4` | 4 | `32px` | Card padding · gap between cards in a grid |
| `space-5` | 5 | `40px` | Section sub-block separation |
| `space-6` | 6 | `48px` | Section content padding-bottom · stat-row gaps |
| `space-8` | 8 | `64px` | Container side padding (desktop) · between major UI groups |
| `space-10` | 10 | `80px` | Section vertical padding (compact) |
| `space-12` | 12 | `96px` | Section vertical padding (default) |
| `space-15` | 15 | `120px` | Section vertical padding (tall) |
| `space-20` | 20 | `160px` | Hero / final-CTA vertical padding |

### Component-level conventions

| Component | Spacing |
|---|---|
| **Card padding** | `space-3` (24 px) for compact, `space-4` (32 px) for primary content cards |
| **Card gap** *(grid)* | `space-2` to `space-3` (16–24 px) |
| **Section padding (top + bottom)** | `space-12` (96 px) default; `space-15` (120 px) for richer sections; `space-20` (160 px) for hero / closer-CTA |
| **Container side padding** | `space-4` (32 px) mobile, `space-6`–`space-8` (48–64 px) tablet+ |
| **Inline element gap** | `space-1` (8 px) for tight, `space-2` (16 px) for comfortable |
| **Button padding** | vertical `space-1` (8 px) · horizontal `space-2-5` (20 px) for body-text buttons |
| **Form-field padding** | vertical `space-1` (8 px) · horizontal `space-2` (16 px) |
| **Eyebrow → heading gap** | `space-2` (16 px) |
| **Heading → body gap** | `space-2-5` to `space-3` (20–24 px) |
| **Body paragraph gap** | `space-2` (16 px) |

### Container & grid

| Token | Value | Use |
|---|---|---|
| `--container-content` | `1200px` | Default content max-width — sections, footer, nav inner |
| `--container-narrow` | `720px` | Single-column reading width (intro paragraphs, lead copy) |
| `--container-wide` | `1376px` | Wider content frame for two-column layouts |
| `--grid-w` | `min(70.44vw, 1280px)` | **Hero-specific** — locks heading + body + product-image into one shared horizontal grid |
| `--page-bleed` | `100%` | Full-bleed sections (mountain backdrop, dark bands) |

### Breakpoints

The site is **mobile-first**. Breakpoints are at standard device thresholds:

| Token | Min-width | Devices |
|---|---|---|
| `--bp-sm` | `480px` | Large phone |
| `--bp-md` | `768px` | Tablet portrait |
| `--bp-lg` | `1024px` | Tablet landscape / small laptop |
| `--bp-xl` | `1280px` | Desktop |
| `--bp-2xl` | `1536px` | Wide desktop |

Most layout transitions happen at **`md`** (768 px — column count drops from 4 → 2 or 2 → 1 in most grids) and **`lg`** (1024 px — typographic clamp ranges hit their upper bound).

### Suggested `@theme` block

```css
/* ── Spacing scale (8 px base) ───────────────────────────── */
--space-0:      0;
--space-half:   4px;
--space-1:      8px;
--space-1-5:   12px;
--space-2:     16px;
--space-2-5:   20px;
--space-3:     24px;
--space-4:     32px;
--space-5:     40px;
--space-6:     48px;
--space-8:     64px;
--space-10:    80px;
--space-12:    96px;
--space-15:   120px;
--space-20:   160px;

/* ── Container widths ───────────────────────────────────── */
--container-narrow:   720px;
--container-content: 1200px;
--container-wide:    1376px;
--grid-w-hero:       min(70.44vw, 1280px);

/* ── Breakpoints (used in clamp() and media queries) ────── */
--bp-sm:    480px;
--bp-md:    768px;
--bp-lg:   1024px;
--bp-xl:   1280px;
--bp-2xl:  1536px;
```

### Rules

1. **Never use a value that isn't on the scale.** `padding: 13px` doesn't exist — round to `space-1-5` (12 px) or `space-2` (16 px).
2. **Inside a section, vertical rhythm should be a single repeated unit.** If your section uses `space-3` (24 px) between paragraphs, every paragraph gap should be 24 px — not 24 here, 28 there.
3. **Outside-in composition.** Container provides the side padding; cards provide their own internal padding; the gap between cards comes from the grid `gap` property — never from card margin.
4. **Half-steps (`space-half` = 4 px) are an escape hatch.** Use them only when 8 px would visibly break the layout (icon nudges, hairline insets). If you use them more than once or twice in a section, the design probably needs revisiting.

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
| 2026-05-07 | Colors section filled in — three core families (`ink`, `vellum`, `scarlet`), 15-stop tint+shade scale per family, naming convention, suggested `@theme` block, and legacy token migration map. |
| 2026-05-07 | Renamed `ember` → `scarlet` (brand red `#F51D00`). Added Semantic Tokens section (text hierarchy, primary/secondary/brand button states, surface roles, hover/focus rules) and Spacing & Grid section with full 8 px scale, container widths, breakpoints, and component-level conventions. |
| 2026-05-07 | Migrated page base to `vellum` (`#FAF9F1`) — body, all section-level whites, Hero gradient, and Navigation backdrop now read as the warm cream surface. |
| 2026-05-07 | **Retired** all legacy Stripe-inspired tokens (`platinum`, `porcelain`, `powder`, `stone`, `ghost`, `slate`, `midnight`, `violet`, `soft/washed-violet`, `green`, `orange`). Removed from `@theme`; remaining inline hex refs migrated to ink/vellum/scarlet family tokens. |
