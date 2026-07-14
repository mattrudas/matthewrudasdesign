# matthewrudasdesign

Personal portfolio site for **Matthew Rudas** — Lead Designer at Checkmate.

Built from the Figma design with [Next.js 16](https://nextjs.org) (App Router),
TypeScript, and [Tailwind CSS v4](https://tailwindcss.com). It's a fast,
responsive, two-column portfolio: a sticky left sidebar (intro + contact) and a
scrolling column of selected work.

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

- `site` — name, role, company, email, résumé link, and the avatar path.
- `intro` — the "Hello! I am…" heading and paragraphs (use `**text**` for bold).
- `projects` — the work list (title, tags, period, description, and a `kind`
  that selects the built-in mockup visual).

Adjust the color palette (background, accent green, etc.) via the CSS tokens in
`src/app/globals.css`.

### Real images & avatar

The project thumbnails use lightweight CSS placeholders that echo the design.
To use real exports:

1. Drop an image into `public/` (e.g. `public/work/app.png`).
2. Set `image: "/work/app.png"` on that project in `content.ts`.

For the profile photo, add `public/avatar.jpg` and set `avatar: "/avatar.jpg"`
in `site`. Otherwise a gradient placeholder is shown.

## Structure

```
src/
├── app/
│   ├── layout.tsx      # fonts, metadata
│   ├── page.tsx        # two-column composition + JSON-LD
│   ├── globals.css     # design tokens & utilities
│   ├── icon.svg        # favicon
│   ├── robots.ts       # robots.txt route
│   └── sitemap.ts      # sitemap.xml route
├── components/
│   ├── Sidebar.tsx     # nav, avatar, intro, "Talk to me"
│   ├── ProjectItem.tsx # a single work entry
│   ├── ProjectMock.tsx # CSS placeholder visuals per project kind
│   ├── RichText.tsx    # renders **bold** inline
│   └── Reveal.tsx      # subtle scroll-in animation
└── lib/
    └── content.ts      # all editable site content
```

## Deploy

Deploys cleanly to [Vercel](https://vercel.com) (or any Node host). Push the
repo and import it in Vercel, or run `npm run build && npm run start`.
