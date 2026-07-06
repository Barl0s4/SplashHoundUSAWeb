# Splash Hound USA

Website for **Splash Hound USA** — a locally owned dog wash and pet supply store in Sacramento, CA.

> 1908 P St, Sacramento, CA 95811 · (916) 642-8700

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + per-page CSS modules |
| Fonts | Baloo 2 (headings) · Nunito (body) via Google Fonts |
| Deployment | Vercel |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, welcome copy, service & pricing cards |
| `/services` | Self-serve and full-serve wash details |
| `/prices` | Pricing cards, optional upgrades, Manicure Monday special |
| `/visit-us` | Map, address, hours, book appointment |
| `/privacy` | Privacy policy |

---

## Project Structure

```
app/
├── components/
│   ├── Header.tsx          # Sticky nav + mobile hamburger (click-outside to close)
│   ├── Footer.tsx          # Brand, quick links, address, copyright
│   ├── MapEmbed.tsx        # Cookie-gated Google Maps iframe
│   ├── LocationSection.tsx # Map + hours (used internally)
│   └── ReviewsSection.tsx  # Yelp review data (not currently displayed)
├── data/
│   ├── hours.ts            # Store hours + upcoming special hours
│   └── reviews.ts          # Review data
├── styles/
│   ├── shared.css          # Header, footer, map placeholder
│   ├── home.css            # Hero, welcome section, cards
│   ├── services.css        # Services page (svc- prefix)
│   ├── prices.css          # Prices page (prc- prefix)
│   ├── visit.css           # Visit Us page (vis- prefix)
│   └── privacy.css         # Privacy page
├── globals.css             # Base styles + Tailwind import
└── layout.tsx              # Root layout — fonts, metadata
```

---

## Design

The site design is based on `/Users/barlos/Downloads/Splash Hound USA.html` (the source of truth for colors, spacing, and layout).

**Color tokens**
- Background: `#FFF8F0`
- Primary blue: `#2E5FD9`
- Orange CTA: `#FF8B5E`
- Dark text: `#26314A`
- Border: `#EDE6DA`

**Mobile breakpoint:** `860px`

---

## Features

- **Mobile nav** — hamburger menu with smooth slide animation; closes on outside click
- **Hero blob** — logo in an organic blob shape; image appears above text on mobile
- **Cookie-gated map** — Google Maps only loads after user accepts cookies
- **Book Appointment** — all CTA buttons link to [splashhoundusa.setmore.com](https://splashhoundusa.setmore.com)
- **Manicure Monday** — weekly special banner on the prices page links to Visit Us

---

## Deployment

The site deploys on **Vercel**. Pushing to `main` triggers an automatic deploy.
