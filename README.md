# Sachin Saha — Portfolio

A premium, editorial-style Next.js portfolio for a UI/UX designer, built with
the App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx              Root layout, fonts, metadata
  page.tsx                Homepage — assembles all sections
  globals.css              Base styles, focus states, reduced-motion handling
  case-studies/
    coming-soon/page.tsx   Placeholder page for case study / prototype links
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  Tools.tsx
  Expertise.tsx
  Process.tsx
  Collaboration.tsx
  FeaturedCaseStudy.tsx   Reads from lib/caseStudies.ts
  PhoneMockup.tsx          Reusable iPhone frame + screen content
  Philosophy.tsx
  Contact.tsx
  Footer.tsx
lib/
  caseStudies.ts           Case study data — add future projects here
```

## Adding future case studies

The homepage always renders whichever entry in `lib/caseStudies.ts` has
`featured: true`. To publish a new case study:

1. Add a new object to the `caseStudies` array in `lib/caseStudies.ts`.
2. Set `featured: true` on the new entry (and `false` on the old one) once
   the new case study's real page is ready.
3. Build a real route for it under `app/case-studies/[slug]/page.tsx` and
   point `caseStudyUrl` / `prototypeUrl` at it, replacing the current
   `coming-soon` placeholder.

This keeps the homepage's featured-project logic untouched as your archive
grows.

## Fonts

- **Headings — Cormorant Garamond**: loaded via `next/font/google` in
  `app/layout.tsx`.
- **Body — Gilroy**: Gilroy is a commercial typeface not distributed on
  Google Fonts, so **Inter** is wired up as a clean stand-in for local
  development. If you own a Gilroy license, drop the `.woff2` files into
  `/public/fonts` and swap in the commented `next/font/local` block at the
  bottom of `app/layout.tsx`.

## Replacing placeholder content

- **Portrait photo** — swap the placeholder block in `components/Hero.tsx`
  for a `next/image` pointing at a real portrait in `/public`.
- **Resume** — add your PDF at `/public/resume.pdf` (the Hero button already
  links there).
- **Phone mockup screens** — `components/PhoneMockup.tsx` renders the
  Balance Snapshot and Transaction History screens in pure CSS so no image
  assets are required. Swap in real Figma screen exports as `next/image`
  fills if you'd prefer pixel-accurate screens.
- **Social links** — update the `href` values in `components/Contact.tsx`.

## Deployment

This project deploys to Vercel with zero configuration:

```bash
npm i -g vercel
vercel
```

Or connect the GitHub repo directly at [vercel.com/new](https://vercel.com/new).

## Accessibility & performance notes

- Semantic landmarks (`header`, `main`, `footer`) and heading order are
  preserved throughout.
- All interactive elements have visible focus states (see `globals.css`).
- `prefers-reduced-motion` is respected globally.
- Fonts are loaded via `next/font` for automatic self-hosting and zero
  layout shift.
- Replace the placeholder portrait and phone-mockup illustrations with
  optimized `next/image` assets before shipping for the best Lighthouse
  score.
