# Mandal Group — Residential Construction Website

Project root: `D:\CF\Codes\Client code\Mandal Group pvt ltd`

When calling the claude-code MCP tool, always pass absolute paths under this project root — the tool's working directory is Antigravity's install folder, not this project.

## Stack
React 19 + Vite 8, Tailwind CSS v4 (`@tailwindcss/vite`, theme in `src/index.css`), React Router DOM, lucide-react. No backend.

## Commands
- `npm run dev` — dev server
- `npm run build` — production build to `dist/`
- `npm run lint` — oxlint

## Rules
- Client budget is small (₹3,000): keep it simple, no new dependencies, minimal animation.
- 5 pages: Home, About, Services, Projects, Contact (`src/pages/`). Services are the client's real list (skills training, labour placements, rural & urban development, water purify & supply) — do not add others.
- All client content (name, phone, email, address, WhatsApp, map URL, services, projects, images) lives in `src/data/site.js`. Edit there, not in pages.
- Do not invent company history, years, certifications or project counts.
- Map embed renders only when `site.mapEmbedUrl` is set.
- Custom classes (`btn-gold`, `container-x`, `section`, …) are Tailwind `@utility` blocks in `src/index.css`.
- **Dark theme only — client forbids white backgrounds anywhere.** Use the brand tokens in `src/index.css`: `night` / `coal` / `umber` backgrounds, `copper` borders and icons, `gold` accent text, `soft` / `muted` body text.
- Buttons on copper/gold use dark text (`text-night`); white on copper fails WCAG AA.
- Logo: `src/assets/logo.webp` (transparent, cut from the client's logo photo). Replace with an official PNG/SVG when the client sends one.
