# Architecture — Kali Engineering website

## Stack

| Layer | Choice |
|-------|--------|
| Framework | **Next.js** (App Router) |
| Language | **TypeScript** |
| Styling | **Tailwind CSS** v4 (as shipped by `create-next-app`) or v3 — match repo after scaffold |
| Motion (optional) | **Framer Motion** — scroll reveals, stagger, hovers aligned with [`docs/ui-ux.md`](ui-ux.md) / Manufact reference; lighter path: CSS + `IntersectionObserver` |
| Linting | **ESLint** (Next.js preset) |
| Package manager | **npm** (or align with lockfile in repo) |

## Repository layout (target)

```
kali-engineering/
├── app/
│   ├── layout.tsx          # Root layout: fonts, metadata, header/footer shell
│   ├── globals.css         # Tailwind imports + CSS variables (design tokens)
│   ├── page.tsx            # Home
│   ├── services/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── sitemap.ts          # Static routes
│   └── robots.ts
├── components/
│   ├── site-header.tsx
│   ├── site-footer.tsx
│   ├── hero.tsx
│   ├── section.tsx
│   ├── button-link.tsx
│   └── service-card.tsx
├── lib/
│   └── site-config.ts      # Nav, company strings, mailto builders (sync with docs/business.md)
├── docs/                   # Specs — not bundled into Next.js build
├── public/                 # Static assets; official logo: logo-image.jpeg → /logo-image.jpeg
├── package.json
├── next.config.ts
├── tsconfig.json
└── postcss.config.mjs
```

## Routing

| Path | File |
|------|------|
| `/` | `app/page.tsx` |
| `/services` | `app/services/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/contact` | `app/contact/page.tsx` |

No dynamic routes in v1.

## Content flow

- **Source of truth (business):** [`docs/business.md`](business.md).  
- **In code:** [`lib/site-config.ts`](../lib/site-config.ts) duplicates stable strings (name, email, phone, address, services array) for type-safe use in components.  
- **Process:** When marketing copy changes, update `docs/business.md` first, then `site-config.ts`, then adjust page prose if needed.  
- **Future:** Optional MDX or headless CMS — not required for launch.

## Environment variables

- **v1:** None required (mailto/tel are static).  
- **Later:** `NEXT_PUBLIC_SITE_URL` for canonical URLs in metadata/sitemap when deploying to a fixed domain.

## SEO & metadata

- Use Next.js **`metadata` export** (and `metadataBase` when production URL is known) per layout/page.  
- **`sitemap.ts`:** list `/`, `/services`, `/about`, `/contact`.  
- **`robots.ts`:** allow all for public marketing site.

## Deployment

- **Recommended:** [Vercel](https://vercel.com) — zero-config for Next.js.  
- **Build:** `npm run build`; **Start:** `npm run start`.  
- Connect Git repo; set production domain; add `metadataBase` to match.

## Performance notes

- Prefer **static generation** for all marketing pages (default App Router behavior for pages without dynamic APIs).  
- Use `next/font` if loading a custom webfont.  
- Images: `next/image` when adding real assets; provide width/height or fill + sizes.

## Security

- No secrets in client bundle.  
- No user-submitted data in v1 (no contact form backend).

---

*Keep this document updated if the stack or hosting changes.*
