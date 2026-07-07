# Julian Zarges — Candidate Website

Production implementation of the candidate website designed in Claude Design
(`project/Julian Zarges - Website.dc.html` and its DE / Impressum companions).
Rebuilt as a clean **React + Vite** static site — no design-tool runtime, no
bundler splash, self-hosted fonts, pixel-identical to the prototype.

## Pages

| Route          | File             | Content                                  |
| -------------- | ---------------- | ---------------------------------------- |
| `/`            | `index.html`     | English site                             |
| `/de`          | `de.html`        | German site (EN/DE switch in the nav)    |
| `/impressum`   | `impressum.html` | Impressum & Datenschutz (German, noindex)|

## Structure

```
├─ index.html / de.html / impressum.html   # per-page shells with real <head> + OG meta
├─ vite.config.js                          # multi-page build (3 entries)
├─ vercel.json                             # cleanUrls → serves /de, /impressum without .html
├─ public/assets/                          # portrait, favicon, og-image, self-hosted fonts
└─ src/
   ├─ main-en.jsx / main-de.jsx / main-impressum.jsx
   ├─ content/{en,de}.js                   # all copy, one object per language
   ├─ components/                          # Nav, Hero, MetricStrip, Profile, Experience,
   │                                       # Expertise, Contact, CvRequestForm, Impressum, …
   ├─ lib/submitCvRequest.js               # Web3Forms POST + mailto fallback + honeypot
   ├─ lib/useSiteEffects.js                # scroll-reveal, animated counters, smooth nav
   └─ styles/global.css                    # reset, @font-face, :hover, responsive breakpoints
```

The EN and DE pages render the **same components** driven by `content/en.js` and
`content/de.js`, so a copy change is a one-line edit in one place.

## Develop / build

```bash
npm install
npm run dev       # local dev server
npm run build     # client build + SSR build + prerender → dist/
npm run preview   # serve the production build
```

`npm run build` prerenders all three pages: the SSR bundle (`dist-ssr/`) renders
the full page HTML into the shells, so search engines, AI crawlers and no-JS
visitors see the complete content; the client bundle hydrates it for
interactivity. SEO extras: `robots.txt`, `sitemap.xml`, canonical + `hreflang`
links between EN/DE, and JSON-LD `Person` markup.

> **Local note:** clean routes (`/de`, `/impressum`) are provided by Vercel's
> `cleanUrls`. Under `vite preview` locally, use `/de.html` and `/impressum.html`.
> On Vercel the clean routes work as linked.

## Deploy (Vercel)

The repo root is the Vite project. In your Vercel project settings, set the
**Framework Preset to Vite** (build `npm run build`, output `dist`) — the previous
deployment served pre-built static files with no build step, so this must be
updated once. `vercel.json` enables clean URLs. Then
connect the `zarges.pro` domain under Settings → Domains.

## Notes & things to confirm

- **CV request form** posts to **Web3Forms** (key in `src/lib/submitCvRequest.js`),
  delivering to `julian@zarges.pro` with `Reply-To` = sender; a `mailto:` fallback
  opens if the request can't be sent. The auto-reply to the sender still requires a
  paid Web3Forms plan (the `email` field is already sent, so enabling the
  Autoresponder in the dashboard needs no code change).
- **Open Graph** tags point at absolute `https://zarges.pro/...` URLs (social
  crawlers don't resolve relative paths). The preview image lives at
  `public/assets/og-image.png` → `https://zarges.pro/assets/og-image.png`.
- **EVP experience entry:** the German page carries three bullets (incl. the
  "Fit for Volume Variation" line); the English prototype had only two. This
  mirrors the source files exactly — say the word if you'd like the EN entry to
  regain the third bullet for parity.
- **Impressum** still needs the hosting provider's name/address added (marked in
  the text) and a legal review before going live — carried over from the design.
