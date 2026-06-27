# Splash Hound USA

Website for **Splash Hound USA** — a locally owned dog wash and pet supply store in Sacramento, CA.

> 1908 P St, Sacramento, CA 95811 · (916) 642-8700

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + per-page CSS |
| Font | Nunito (Google Fonts) |
| Deployment | Vercel |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the project root:

```env
YELP_API_KEY=your_yelp_api_key_here
YELP_BUSINESS_ID=your_yelp_business_id_here
```

These power the live reviews section. Without them the site still works — reviews fall back to static data in `app/data/reviews.ts`.

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, welcome copy, service cards, reviews, map & hours |
| `/prices` | Pricing for self-serve and full-serve wash, specials, add-ons |
| `/self-serve-wash` | Self-serve wash details and pricing |
| `/full-serve-wash` | Full-serve wash details and booking |
| `/pet-supply` | Pet supply store info |
| `/privacy` | Privacy policy |

---

## Project Structure

```
app/
├── components/
│   ├── Header.tsx          # Logo + sliding nav + mobile hamburger
│   ├── Footer.tsx          # Brand info, quick links, copyright
│   ├── ReviewsSection.tsx  # Auto-rotating Yelp review carousel
│   ├── LocationSection.tsx # Google Maps embed + hours table
│   ├── MapEmbed.tsx        # Cookie-gated Google Maps iframe
│   ├── CookieBanner.tsx    # Cookie consent banner
│   └── ScrollToTop.tsx     # Fixed scroll-to-top button
├── data/
│   ├── reviews.ts          # Static Yelp review data + business info
│   └── hours.ts            # Store hours + upcoming special hours
├── styles/
│   ├── shared.css          # Header, footer, wave dividers, global components
│   ├── home.css            # Home page — hero, cards, book button
│   ├── prices.css          # Prices page — cards, add-ons, specials
│   ├── self-serve.css      # Self-serve wash page
│   ├── full-serve.css      # Full-serve wash page
│   └── privacy.css         # Privacy page
├── api/
│   └── yelp/route.ts       # API route — fetches live Yelp reviews
├── globals.css             # Base styles, overscroll colors, Tailwind import
└── layout.tsx              # Root layout — metadata, font, ScrollToTop
```

---

## Features

- **Mobile navigation** — hamburger menu with animated slide-out on all screen sizes
- **Review carousel** — auto-rotates every 6 seconds through Yelp reviews; falls back to static data if the API is unavailable
- **Google Maps embed** — only loads after cookie consent to respect user privacy
- **Cookie consent banner** — persisted in `localStorage`; controls map visibility site-wide
- **Wave section dividers** — SVG waves between page sections for visual flow
- **Scroll-to-top button** — appears after scrolling 300px, smooth scrolls back to top
- **Book Appointment** — all booking buttons link to [splashhoundusa.setmore.com](https://splashhoundusa.setmore.com)

---

## Environment Variables

| Variable | Description |
|---|---|
| `YELP_API_KEY` | Yelp Fusion API bearer token |
| `YELP_BUSINESS_ID` | Yelp business ID (found in the Yelp business URL) |

The `/api/yelp` route fetches both business info and reviews in one request. If the env vars are missing it returns a 500 — the frontend gracefully falls back to the static data in `app/data/reviews.ts`.

---

## Deployment

The site is deployed on **Vercel**. Pushing to `main` triggers an automatic deploy.

Add `YELP_API_KEY` and `YELP_BUSINESS_ID` as environment variables in the Vercel project settings to enable live reviews in production.
