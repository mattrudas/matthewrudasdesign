# matthewrudasdesign

Personal portfolio site for **Matthew Rudas** — Product & Brand Designer.

Built with [Next.js 16](https://nextjs.org) (App Router), TypeScript, and
[Tailwind CSS v4](https://tailwindcss.com). It's a fast, responsive,
single-page portfolio with light/dark theming, scroll-reveal animations, and
SEO-ready metadata.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Available scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the local dev server           |
| `npm run build` | Create an optimized production build  |
| `npm run start` | Serve the production build            |
| `npm run lint`  | Run ESLint                           |

## Editing content

Almost everything on the page is driven by a single file:

```
src/lib/content.ts
```

Update your name, role, tagline, projects, services, experience, and social
links there — no component changes required. Swap the accent color and theme
palette in `src/app/globals.css` (the `--accent`, `--background`, etc. tokens).

## Structure

```
src/
├── app/
│   ├── layout.tsx      # fonts, metadata, theme init
│   ├── page.tsx        # page composition + JSON-LD
│   ├── globals.css     # design tokens, theming, animations
│   ├── icon.svg        # favicon
│   ├── robots.ts       # robots.txt route
│   └── sitemap.ts      # sitemap.xml route
├── components/         # Header, Hero, Work, About, Services, Contact, Footer…
└── lib/
    └── content.ts      # all editable site content
```

## Design source

The visual direction is based on a Figma design. Because the Figma file
requires authenticated access, this implementation is a faithful, high-quality
starting point that mirrors a modern designer-portfolio layout. To match the
Figma exactly, share an export/access token or the specific spacing, colors,
and type from the file and the components can be tuned to spec.

## Deploy

Deploys cleanly to [Vercel](https://vercel.com) (or any Node host). Push the
repo and import it in Vercel, or run `npm run build && npm run start`.
