# matthewrudasdesign

Personal portfolio site for **Matthew Rudas** — Lead Designer at Checkmate.

Built from the Figma design with [Next.js 16](https://nextjs.org) (App Router),
TypeScript, [Tailwind CSS v4](https://tailwindcss.com), and the
[Roboto Flex](https://fonts.google.com/specimen/Roboto+Flex) variable font. It's
a fast, responsive, two-column portfolio: a sticky left sidebar (intro + contact)
and a scrolling column of selected work.

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
- `intro` — the "Hello! I am…" heading and paragraphs. Inline markup supports
  `**bold**` and `[label](url)` links.
- `projects` — the work list (title, tags, period, description, and the `image`
  path for the project mockup).

Adjust the color palette (background, accent green, etc.) via the CSS tokens in
`src/app/globals.css`.

### Images & avatar

The mockups and avatar are exported straight from Figma and committed under
`public/`:

- Project mockups live in `public/work/` (e.g. `public/work/checkmate-app.png`)
  and are referenced via each project's `image` field in `content.ts`.
- The profile photo is `public/avatar.png`, referenced by `site.avatar`.

To swap an image, drop a replacement into `public/` and update the matching path
in `content.ts`.

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
│   ├── ProjectItem.tsx # a single work entry (mockup image + text)
│   ├── RichText.tsx    # renders **bold** and [label](url) inline
│   └── Reveal.tsx      # subtle scroll-in animation
└── lib/
    └── content.ts      # all editable site content
```

## Deploy

Deploys cleanly to [Vercel](https://vercel.com) (or any Node host). Push the
repo and import it in Vercel, or run `npm run build && npm run start`.
