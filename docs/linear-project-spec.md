# Kalimal Engineering — Project specification & issue backlog (BA)

This document translates repo requirements (`docs/business.md`, `docs/ui-ux.md`, `docs/architecture.md`) into a structured backlog for the Linear project **Kalimal-egineering**. It is the reference for scope, acceptance criteria, and dependencies.

---

## 1. Executive summary

**Objective:** Ship a **static marketing website** for **Kalimal Engineering** (repo shorthand: Kali Engineering) that presents **job work, CNC, VMC, lathe, and rings** services, drives **quote requests** via **mailto/tel**, and matches the **Manufact** Framer template’s **visual language and motion** without requiring a CMS in v1.

**Success criteria**

- Four routes live: `/`, `/services`, `/about`, `/contact`.
- Copy aligns with `docs/business.md` (tagline, services list, differentiators; placeholders until real contact data).
- UI follows `docs/ui-ux.md`: Manufact + **logo-derived** accents (see `ui-ux.md`), **`rounded-none`**, scroll/hover motion with **`prefers-reduced-motion`** support.
- **Brand logo** is checked in at `public/logo-image.jpeg` (`/logo-image.jpeg`); header/footer implementations must use it per `ui-ux.md`.
- SEO basics: `metadata`, `sitemap.ts`, `robots.ts`; ready for `metadataBase` when the production URL is fixed.
- Deployed (e.g. Vercel) with `npm run build` clean.

**Out of scope (v1)**

- Backend contact form, auth, CMS, blog, case-study carousel (unless explicitly added later).
- Dynamic routes beyond the four static pages.

---

## 2. Stakeholders & assumptions

| Item | Assumption |
|------|------------|
| **Brand** | Legal name Kalimal Engineering; public listing and Google entity documented in `business.md`. |
| **Contact** | Email/phone/address/hours are placeholders until verified from Google Business or internal records. |
| **Design reference** | [Manufact Framer template](https://manufact-wbs.framer.website/) — palette, layout rhythm, animation *feel* (not a pixel clone). |

---

## 3. Functional requirements

| ID | Requirement |
|----|-------------|
| FR-1 | Global header: **official logo** (`/logo-image.jpeg` from `public/logo-image.jpeg`), links to Home, Services, About, Contact, primary CTA **Request a quote** (mailto). |
| FR-2 | Global footer: nav mirror, company line, placeholder legal links. |
| FR-3 | **Home:** Hero (eyebrow, headline, subcopy, CTAs), trust/stats strip, services preview (cards to `/services`), industries strip, optional CTA band. |
| FR-4 | **Services:** H1, intro, one section per service from `business.md` (6 service lines + bullets as needed), bottom CTA (mailto). |
| FR-5 | **About:** Mission, values, facility/team placeholder, CTA to contact. |
| FR-6 | **Contact:** Email (mailto), phone (tel), address text, hours; optional map later. |
| FR-7 | **Quote mailto** subject line per `business.md`: `Quote request — Kalimal Engineering`. |
| FR-8 | Mobile: hamburger menu, CTA accessible, focus visible. |

---

## 4. Non-functional requirements

| ID | Requirement |
|----|-------------|
| NFR-1 | **Performance:** Static generation for marketing pages; `next/image` when real images exist. |
| NFR-2 | **Accessibility:** Landmarks, skip link, contrast AA; motion respects `prefers-reduced-motion`. |
| NFR-3 | **SEO:** Per-page metadata; sitemap lists all four routes; robots allows indexing. |
| NFR-4 | **Security:** No secrets in client bundle; no user-submitted data in v1. |

---

## 5. Technical stack (from architecture)

- Next.js (App Router), TypeScript, Tailwind CSS.
- Optional: Framer Motion for Manufact-style viewport animations; alternative CSS + Intersection Observer.
- `lib/site-config.ts` synced with `docs/business.md` for nav labels, company strings, mailto builders.

---

## 6. Issue list (Linear mapping)

Issues live in Linear project **[Kalimal-egineering](https://linear.app/vraj/project/kalimal-egineering-030f0fad10e2)** (team **Vraj**). Dependencies are set in Linear (`blockedBy`).

| # | Issue | Title (summary) |
|---|--------|-----------------|
| 1 | [VRA-181](https://linear.app/vraj/issue/VRA-181) | Scaffold Next.js app, Tailwind, and site-config |
| 2 | [VRA-182](https://linear.app/vraj/issue/VRA-182) | Design tokens & global styles (Manufact palette, rounded-none) — blocked by VRA-181 |
| 3 | [VRA-183](https://linear.app/vraj/issue/VRA-183) | Site shell: header, footer, mobile nav, accessibility — blocked by VRA-182 |
| 4 | [VRA-184](https://linear.app/vraj/issue/VRA-184) | Home page: hero, trust, services preview, motion — blocked by VRA-183 |
| 5 | [VRA-185](https://linear.app/vraj/issue/VRA-185) | Services, About, Contact pages + business copy — blocked by VRA-183 |
| 6 | [VRA-186](https://linear.app/vraj/issue/VRA-186) | SEO: metadata, sitemap, robots + launch polish — blocked by VRA-184, VRA-185 |
| 7 | [VRA-187](https://linear.app/vraj/issue/VRA-187) | Production deployment (Vercel) + domain / metadataBase — blocked by VRA-186 |

---

## 7. Acceptance criteria by issue

### Issue 1 — Scaffold

- [ ] Next.js App Router + TypeScript + Tailwind per `architecture.md` layout (`app/`, `components/`, `lib/`).
- [ ] Routes stubbed: `/`, `/services`, `/about`, `/contact`.
- [ ] `lib/site-config.ts` exports nav items, company name, mailto helpers (placeholder contact values OK), and a **single constant** for the logo path: **`/logo-image.jpeg`** (file: `public/logo-image.jpeg`).
- [ ] `npm run build` succeeds.

### Issue 2 — Design tokens

- [ ] Manufact neutrals + surfaces available as Tailwind extend or CSS variables; **accent primary** aligned with **logo orange** `#D94125` (and brand blue `#2D5E7E` where specified in `ui-ux.md`) — see logo-derived palette.
- [ ] Global `rounded-none` policy applied to bespoke components.
- [ ] Typography scale documented in components (system or Geist/IBM Plex optional).

### Issue 3 — Shell

- [ ] `SiteHeader` + `SiteFooter`; mobile menu with `aria-expanded`.
- [ ] **Logo:** `next/image` pointing at **`/logo-image.jpeg`** (from `site-config`), correct **alt** text per `ui-ux.md`.
- [ ] Skip to main content link.
- [ ] Primary CTA uses accent styling + mailto.

### Issue 4 — Home

- [ ] Sections: hero, trust, services preview, industries, footer CTA pattern per `ui-ux.md`.
- [ ] Scroll reveals + hovers per spec; `prefers-reduced-motion` degrades motion.

### Issue 5 — Inner pages

- [ ] Services/About/Contact content reflects `business.md` (update when real contact data exists).

### Issue 6 — SEO & polish

- [ ] `metadata` on layout/pages; `sitemap.ts`, `robots.ts`.
- [ ] Cross-page contrast and keyboard check.

### Issue 7 — Production

- [ ] Vercel (or agreed host) connected; production build green; `NEXT_PUBLIC_SITE_URL` / `metadataBase` when domain is set.

---

*Maintainer: update this doc when scope or acceptance criteria change; keep Linear issue descriptions in sync.*
