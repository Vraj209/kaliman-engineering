# UI / UX — Kali Engineering marketing site

## Design inspiration

- **Reference:** [Manufact — Industrial Manufacturing (Framer template)](https://manufact-wbs.framer.website/) — **layout, typography rhythm, and color system** (dark surfaces, warm neutrals, orange/rust CTAs), plus hero structure (eyebrow + headline + supporting line), stat bands, service blocks with feature lists, and mid-page CTAs.  
- **How we use it:** Match the **same palette and industrial feel** as the reference. Section flow can follow Manufact; omit features we do not need (e.g. blog, case-study carousel) unless scope expands.  
- **Palette source:** Colors below were sampled from the live template HTML/CSS (Framer export). Re-check in browser if the template updates.

## Brand direction

- **Tone:** Confident, precise, approachable — industrial without feeling cold (aligned with Manufact).  
- **Mood:** Warm neutrals and deep charcoal surfaces, **orange/rust accent** for primary actions — hierarchy from type, spacing, and contrast, not rainbow UI.  
- **Imagery:** Real equipment and parts when available; warm or neutral photography fits the template; avoid clichéd stock.

## Brand logo (source of truth)

- **File:** `public/logo-image.jpeg` — served at **`/logo-image.jpeg`** (Next.js `public/` root).  
- **Usage:** Primary mark in **header**; optional smaller mark in **footer**. Use **`next/image`** with explicit dimensions (or `fill` inside a sized wrapper) so layout does not shift; approximate aspect **~2:1** (width:height).  
- **Alt text:** `Kalimal Engineering` (or equivalent descriptive text).  
- **Style fit:** Sharp gear geometry aligns with **`rounded-none`** UI; do not crop the mark in a way that hides the emblem + wordmark relationship unless a separate wordmark asset is provided.

### Logo-derived palette (approximate)

Use these to keep UI aligned with the official mark (supplement the Manufact table below; **prefer logo hex for brand-critical surfaces** — header, primary CTA, key headings — and keep neutral surfaces as documented).

| Token | Hex | Role |
|-------|-----|------|
| **Brand blue (slate)** | `#2D5E7E` | Nav emphasis, headings, links on light, dark-blue UI chrome |
| **Brand orange** | `#D94125` | Primary buttons, “ENGINEERING”-line emphasis, accent hovers |

When a token conflicts with the Manufact-sampled row (e.g. accent orange), **default to logo orange (`#D94125`)** for primary CTAs and brand moments.

## Color & typography (tokens)

**Manufact-aligned palette** (use these as design tokens; map to Tailwind `theme.extend.colors` or CSS variables).

| Token | Hex | Role |
|-------|-----|------|
| **Background** | `#f6f6f6` | Default page canvas (soft off-white). |
| **Surface** | `#ffffff` | Cards, elevated panels on light sections. |
| **Surface dark** | `#151515` / `#191919` | Hero strips, footer, inverse CTA bands — near-black charcoals from the template. |
| **Text primary** | `#151515` | Body and headings on light backgrounds. |
| **Text muted** | `#5c5c5c` | Secondary copy, descriptions. |
| **Text subtle** | `#a7a3a2` | Meta, captions, de-emphasized labels (warm gray). |
| **Text on dark** | `#ffffff` | Primary text on dark sections. |
| **Border / divider** | `#d1d1d1` | Hairlines, card edges. |
| **Accent primary** | `#c8370b` | Primary buttons, key links, emphasis (rust orange — `rgb(200, 55, 11)` in template). |
| **Accent bright** | `#f66234` | Hover/focus accents, secondary highlights (coral-orange). |
| **Accent deep** | `#9e3211` | Darker rust for pressed states or borders on orange. |
| **Black** | `#000000` | Strong emphasis, optional pure-black text where template uses it. |

**Notes**

- Links and small UI chrome on Framer pages sometimes use **blue** (e.g. `#0099ff`); for **our** marketing site, prefer **accent orange** for interactive emphasis so we stay on-brand with Manufact’s CTA color, unless you intentionally mirror link blue for accessibility testing.  
- Verify **contrast**: white text on `#151515` / `#191919`; orange buttons need white or near-white label color and sufficient contrast (adjust hover to `#9e3211` + white text if needed).

**Typography:** Strong neutral sans — system stack or **Geist** / **IBM Plex Sans**. Use weight and size for hierarchy; eyebrow labels may follow Manufact-style cues (e.g. `// SINCE — YYYY //`). Scale: `text-sm` → `text-4xl`+ for hero; bump at `lg`.

## Shape & radius (strict)

- **Border radius:** **`0` everywhere** — buttons, inputs, cards, images, video embeds, badges, nav containers (sharp industrial geometry; matches the reference’s rectilinear cards).  
- **Implementation:** Tailwind `rounded-none` on custom components; set `--radius: 0` if using CSS variables / shadcn-style tokens.  
- **Exception:** None for v1 — document any later exception explicitly.

## Motion & animation (Manufact / Framer reference)

The [Manufact](https://manufact-wbs.framer.website/) template is built in **Framer**, so motion is **scroll-linked and viewport-based** (elements animate in as you scroll), with **smooth scrolling** and light **hover** feedback. Replicate the **feel**, not necessarily Framer’s proprietary runtime.

### Principles

- **Purposeful:** Motion clarifies hierarchy (hero first, sections in sequence) — no gratuitous bouncing.  
- **Consistent easing:** Prefer **ease-out** for entrances (fast start, soft landing) — e.g. `cubic-bezier(0.22, 1, 0.36, 1)` or Tailwind `ease-out`.  
- **Short durations:** **~0.35s–0.6s** for section reveals; **~0.2s–0.25s** for hovers.  
- **One-time reveals:** Scroll animations should typically run **once** when the block enters the viewport (avoid re-triggering on every scroll for long pages).

### Scroll / viewport (match template behavior)

| Pattern | Behavior | Implementation notes |
|---------|----------|----------------------|
| **Section reveal** | Blocks **fade in** and **move up slightly** (e.g. opacity `0 → 1`, `translateY(16–32px) → 0`) | `IntersectionObserver` + CSS class, or **Framer Motion** `whileInView` / `useInView` |
| **Staggered children** | Hero or list lines appear in **sequence** with small delay (e.g. **40–80ms** between items) | Framer Motion `staggerChildren` / `delayChildren`, or CSS `animation-delay` on children |
| **Parallax / depth** (optional) | Hero imagery or background moves **slower** than scroll for depth | `transform: translateY` tied to scroll (subtle); **skip** if it harms performance or `prefers-reduced-motion` |
| **Smooth anchor scroll** | In-page targets (e.g. “Scroll down”, section jumps) scroll **smoothly** | `scroll-behavior: smooth` on `html` or programmatic `scrollIntoView({ behavior: 'smooth' })` |

### Micro-interactions (hover / focus)

| Element | Pattern |
|---------|---------|
| **Primary buttons** | Background **darkens** toward accent-deep (`#9e3211`) or **brightens** slightly (`#f66234`); **~200ms** color transition; optional **icon or arrow** `translateX(4px)` on hover (Manufact-style CTAs). |
| **Ghost / outline buttons** | Border or text **shifts** to full accent; background fill optional. |
| **Cards / service tiles** | Subtle **lift**: `translateY(-2px to -4px)` and/or **shadow** increase; **~250ms** `ease-out`. |
| **Links (inline)** | Underline **width** or **opacity** transition; keep motion minimal. |

### Carousels / sliders (if added later)

- **Case-study or logo strips:** Use **smooth horizontal motion**, snap or fade between slides, arrow controls with **short** transitions — mirror the reference’s carousel feel.  
- Respect **keyboard** and **focus** (visible focus on arrows and slide content).

### Reduced motion (required)

- When `prefers-reduced-motion: reduce`: **disable** parallax, long stagger, and large `translateY`; prefer **instant** or **opacity-only** fades, or **no** animation.  
- Keep the existing accessibility rule: motion must never be the only way to understand content.

### Implementation stack (suggestion)

- **Next.js:** [**Framer Motion**](https://www.framer.com/motion/) aligns with the reference (same family as Framer sites) — use for `whileInView`, stagger, and button hovers.  
- **Lighter alternative:** CSS **`@keyframes`** + **Intersection Observer** (or a small hook) for section fades only.

Stack note: see **`architecture.md`** (Framer Motion optional vs CSS).

## Information architecture

```
Home (/)
├── Services (/services)
├── About (/about)
└── Contact (/contact)
```

Footer repeats primary nav + short company line + placeholder legal links.

**Inspired section patterns (Manufact, scoped to our pages):**

- Hero: eyebrow, headline, paragraph, primary + secondary CTAs (primary = **accent orange** fill).  
- Trust: stat row — large numerals, muted labels.  
- Services: grid/stack blocks with title, copy, bullet lists.  
- CTA band: full-width **dark** (`#151515` / `#191919`) bar, **white** text, primary button **orange**.

## Page wireframes (section order)

### Home

1. **Header** — Logo, nav, primary CTA “Request a quote” — **accent** fill, white text, `rounded-none`.  
2. **Hero** — Headline + subcopy + CTAs; imagery may sit on dark or light areas per Manufact.  
3. **Trust strip** — Stats / bullets using muted grays for supporting text.  
4. **Services preview** — Bordered or lightly shadowed cards (`#fff` on `#f6f6f6`), sharp corners.  
5. **Industries** — Compact list; color photography allowed (warm/neutral).  
6. **Footer** — Dark band (`#151515` / `#191919`) with white text, link hovers via **accent** or underline.

### Services

1. Page intro (H1 + paragraph).  
2. **Stacked sections** — H2, paragraph, bullets.  
3. CTA band — “Discuss your project” → mailto on **dark** strip + **orange** button.

### About

1. H1 + mission paragraph.  
2. **Values** — 3 columns or list.  
3. **Facility / team** — Placeholder until real content.  
4. CTA to contact.

### Contact

1. H1 + short intro.  
2. **Contact blocks** — Email, phone, address in bordered panels (`rounded-none`).  
3. **Hours** — From business doc.  
4. Optional: map embed later.

## Component inventory

| Component | Usage |
|-----------|--------|
| `SiteHeader` | Logo + nav + CTA; light or dark bar; border `#d1d1d1` optional. |
| `SiteFooter` | Dark background, white text, accent hover states. |
| `ButtonLink` | **Primary:** `bg-[#c8370b]` (or token), white text, hover `#9e3211` or `#f66234` per contrast; **secondary:** outline dark or orange border — all `rounded-none`. |
| `Hero` | Manufact-style split or full-bleed; dark/light sections per reference. |
| `ServiceCard` | White surface, `#d1d1d1` border, optional subtle shadow. |
| `Section` | Vertical rhythm + max-width container. |
| `PageHeader` | H1 + subtitle on `#f6f6f6` or white. |

## Mobile navigation

- **Below `md`:** Hamburger → panel with links + CTA.  
- **`md`+:** Horizontal nav.  
- **Focus:** Visible ring — use **accent** or **white** on dark for WCAG visibility.

## Accessibility targets

- Landmarks: `header`, `main`, `footer`, `nav` as appropriate.  
- Skip link first.  
- Contrast: AA for body; primary buttons (orange on white label) — verify large/small text thresholds.  
- Motion: See **Motion & animation** — always honor **`prefers-reduced-motion`** (disable parallax, stagger, and large transforms; prefer instant or opacity-only).

## Responsive breakpoints

- Tailwind defaults (`sm`, `md`, `lg`, `xl`).  
- Max-width `max-w-5xl` / `6xl` for prose columns.

---

*Implement with Tailwind (`rounded-none`, extended theme colors from the table), **Framer Motion** (or CSS + `IntersectionObserver`) for Manufact-style scroll/hover animation, and shared components; centralize tokens in `app/globals.css`.*
