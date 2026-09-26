# vinodanbalagan · personal site

Astro static site, deployed on Vercel.

## Run locally

```bash
cd ~/Website
npm install
npm run dev        # http://localhost:4321
```

## Edit content

Almost everything lives in `src/data/site.ts`: links, Lab projects and their status, and the writing list.
When a Lab project ships, set its `status` to `'shipped'` and add an `href`.

| Page | File |
| --- | --- |
| Home | `src/pages/index.astro` |
| Research (Reverie, CulturalRiddles) | `src/pages/research.astro` |
| Lab | `src/pages/lab.astro` |
| Writing | `src/pages/writing.astro` |
| CV | `src/pages/cv.astro` |
| Hero animation | `src/components/OcclusionHero.astro` |
| Colours, fonts, light/dark themes | `src/styles/global.css` |

## Deploy

1. Push this folder to a GitHub repo (for example `VinodAnbalagan/website`).
2. In Vercel: Add New → Project → import the repo. Vercel detects Astro automatically. Deploy.
3. Every push to `main` redeploys.
