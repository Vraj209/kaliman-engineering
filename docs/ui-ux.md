# UI / UX — Kali Engineering marketing site

## Brand direction

- **Tone:** Confident, precise, approachable — industrial without feeling cold.  
- **Mood:** Clean shop floor meets modern SaaS clarity: plenty of whitespace, strong hierarchy, restrained accent color.  
- **Imagery:** When photos exist, prefer real equipment and parts over stock clichés. Until then, use geometric patterns or subtle gradients — no fake “workers in hard hats” placeholders.

## Color & typography (tokens)

| Token | Role | Notes |
|-------|------|--------|
| **Background** | Near-white / soft gray page bg | Reduces eye strain on long reads. |
| **Surface** | White cards on home/services | Light border or shadow for depth. |
| **Text primary** | Near-black | WCAG AA on backgrounds. |
| **Text muted** | Mid gray | Supporting copy, captions. |
| **Accent** | Deep teal or steel blue | CTAs, links, focus ring companion. |
| **Accent contrast** | White text on accent buttons | Verify 4.5:1 minimum. |

**Typography:** System UI stack for performance and familiarity; optional upgrade later to **Geist** or **IBM Plex Sans** for a technical feel. Scale: `text-sm` → `text-4xl` for hero headline on mobile; bump hero on `lg` breakpoints.

## Information architecture

```
Home (/)
├── Services (/services)
├── About (/about)
└── Contact (/contact)
```

Footer repeats primary nav + short company line + placeholder legal links.

## Page wireframes (section order)

### Home

1. **Header** — Logo wordmark, nav links, primary CTA “Request a quote” (mailto).  
2. **Hero** — Headline + subcopy + dual CTAs (Services, Contact).  
3. **Trust strip** — 3–4 bullets: quality, scheduling, partnership (from business doc).  
4. **Services preview** — 4 cards linking to `/services#anchor` or full services page.  
5. **Industries** — Compact list or logo row (text-only until assets).  
6. **Footer**

### Services

1. Page intro (H1 + paragraph).  
2. **Stacked sections** — One per service with H2, paragraph, optional bullet list.  
3. CTA band — “Discuss your project” → mailto.

### About

1. H1 + mission paragraph.  
2. **Values** — 3 columns or list.  
3. **Facility / team** — Placeholder copy until real story.  
4. CTA to contact.

### Contact

1. H1 + short intro.  
2. **Contact cards** — Email (mailto), phone (tel), address (plain text).  
3. **Hours** — From business doc.  
4. Optional: static map embed later (out of scope unless URL provided).

## Component inventory

| Component | Usage |
|-----------|--------|
| `SiteHeader` | Sticky or static top; logo + desktop nav + mobile menu button. |
| `SiteFooter` | Nav mirror, copyright, legal placeholders. |
| `ButtonLink` | Primary/secondary links styled as buttons (Next `Link` or `<a>` for mailto). |
| `Hero` | Home hero block. |
| `ServiceCard` | Home preview + optional reuse. |
| `Section` | Consistent vertical padding + max-width container. |
| `PageHeader` | H1 + optional subtitle for inner pages. |

## Mobile navigation

- **Below `md` breakpoint:** Hamburger toggles `aria-expanded` panel with vertical link list + CTA at bottom.  
- **`md` and up:** Horizontal nav in header.  
- **Focus:** Visible focus ring (ring-2 ring-offset-2) on all interactive elements; first focusable in mobile menu on open (optional enhancement: focus trap — nice-to-have).

## Accessibility targets

- Landmarks: `header`, `main`, `footer`, `nav` with `aria-label` where multiple navs exist.  
- Skip link: “Skip to main content” as first focusable element.  
- Color contrast: AA for body text; large hero text AAA where feasible.  
- Motion: Respect `prefers-reduced-motion` for any transitions (keep subtle).

## Responsive breakpoints

- Follow Tailwind defaults (`sm`, `md`, `lg`, `xl`).  
- Content max-width: `max-w-5xl` or `6xl` for text-heavy columns; `prose` optional later.

---

*Implement these choices in Tailwind classes and shared components; adjust tokens in `app/globals.css` if using CSS variables.*
