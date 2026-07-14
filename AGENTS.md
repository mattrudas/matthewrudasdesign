# AGENTS.md

## Cursor Cloud specific instructions

This is a single Next.js 16 (App Router) + React 19 + Tailwind CSS v4 portfolio site. There is no backend, database, or auth — it is fully static.

- Standard commands are documented in `README.md` / `package.json` scripts: `npm run dev` (dev server on port 3000), `npm run build`, `npm run start`, `npm run lint`.
- Dependencies are installed automatically by the startup update script (`npm install`); no extra setup is required.
- `npm run lint` runs ESLint flat config (`eslint.config.mjs`) directly with no arguments — that is expected, not a misconfiguration.
- Editable site content lives in `src/lib/content.ts`; color tokens live in `src/app/globals.css`.
