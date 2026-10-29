# medaurion

Monorepo for medaurion AIOS — patient intelligence for India's clinics.

| Folder | What it is | Live at |
|---|---|---|
| `apps/web` | Marketing website: home, about, solutions, compare, blog, pricing, pilot form | www.medaurion.com |
| `apps/app` | **Main software** for doctors and clinics (not started yet) | app.medaurion.com (planned) |
| `packages/db` | Shared database code (Neon Postgres) | — |
| `packages/ui` | Shared logo, buttons, icons (empty for now) | — |
| `docs` | Architecture, prototypes, SEO notes | — |

## Website folders (`apps/web/src`)

```
app/
  (marketing)/   about, blog, compare, features, pricing, specialties
  (solutions)/   chronic-care-software, emr-software, clinic-management-software, ai-for-doctors, digital-prescription
  (legal)/       privacy, terms
  api/           pilot form endpoint
  layout.tsx, page.tsx (home), sitemap.ts, robots.ts, globals.css, seo.css
components/
  layout/  Header, Footer
  home/    home-page sections
  seo/     HubPage, PageShell, JsonLd, schema
  ui/      Brand, Icon
content/   page text and data (blog, compare, features, specialties)
lib/       site settings, meta tags, email checks
```

Folders in brackets like `(marketing)` are Next.js **route groups**: they organise files but do not appear in the URL. `/about` stays `/about`.

## Commands (run in the repo root)

```bash
npm install      # install everything once
npm run dev      # website at http://localhost:3000
npm run build    # production build of the website
npm run lint
```

## Deploy

Vercel project `medaurion` → Settings → Build and Deployment → **Root Directory = `apps/web`**.
