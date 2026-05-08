# Manas Acharya — Portfolio

Personal portfolio for [Manas Raman Acharya](https://manasacharya.com),
Data Science student at the University of Colorado Boulder.
Showcases nine projects across production systems, machine learning, and
full-stack development.

## Tech stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** lucide-react
- **Deployment:** Vercel
- **Analytics:** `@vercel/analytics`, `@vercel/speed-insights`

## Routes

| Route | Description |
|---|---|
| `/` | Hero · Projects · About · Contact (single-page flow) |
| `/projects` | Filterable showcase of all 9 projects |
| `/projects/[slug]` | Per-project detail page (statically generated) |
| `/about` | Bio + tech stack |
| `/resume` | Interactive timeline + downloadable PDF |
| `/contact` | Email · LinkedIn · GitHub |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image` | Auto-generated |

## Local development

```bash
git clone https://github.com/acharyaww/manas-acharya-portfolio.git
cd manas-acharya-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript without emit |

## Project structure

```
app/
  layout.tsx              # Root layout, metadata, JSON-LD
  page.tsx                # Home (Hero → Projects → About → Contact)
  projects/[slug]/        # Dynamic detail pages
  resume/                 # Resume timeline
  about/, contact/        # Standalone routes
  sitemap.ts, robots.ts   # SEO
  opengraph-image.tsx     # Generated 1200×630 OG image
components/
  ui/                     # Button, Card, Badge, SectionHeader, ProjectCard
  sections/               # Hero, ProjectsShowcase, About, Contact, Footer, Starfield
lib/
  projects.ts             # Project data + types
  site.ts                 # Site-wide constants (URL, handles, etc.)
  utils.ts                # cn()
public/
  resume.pdf              # ⬅ replace with real PDF
  images/profile.jpg      # ⬅ replace with real headshot
  images/projects/        # ⬅ replace with real screenshots
```

## Editing project data

All project content lives in [`lib/projects.ts`](./lib/projects.ts).
Each project supports:

- `title`, `tagline`, `description`, `techStack[]`
- `category`: `production` · `ml-data` · `fullstack`
- `liveUrl?`, `githubUrl?`, `metrics?`, `status?`
- `featured?` — featured cards take wider layout in the "All" view
- `longDescription?` — `{ problem, solution, impact }` shown on detail page

Adding a new project automatically wires up its detail page route, sitemap
entry, and Next/Previous navigation. Removing one is just deleting from the
array.

## Manual content TODO before launch

- [ ] `/public/resume.pdf` — real PDF
- [ ] `/public/images/profile.jpg` — real headshot (replace `MA` placeholder)
- [ ] `/public/images/projects/{slug}-*.png` — real screenshots
- [ ] Verify all `liveUrl` / `githubUrl` values resolve
- [ ] Set the canonical domain in [`lib/site.ts`](./lib/site.ts) (currently `manasacharya.com`)

## Deployment

Auto-deploys to Vercel from `main`. Preview deploys on every PR.

```bash
# One-time setup
vercel link
# Production deploy from CLI (optional — pushes to main do this automatically)
vercel --prod
```

## License

© Manas Raman Acharya. All rights reserved.
