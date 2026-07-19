# Poornima — Portfolio

React + Vite + Tailwind CSS v4 + Framer Motion.

## Run it

```
npm install
npm run dev
```

Build for production:

```
npm run build
```

Output goes to `dist/` — deploy that folder anywhere static (Vercel, Netlify, GitHub Pages).

## Before you ship it

- **Email**: `src/components/Contact.jsx` currently links to `hello@example.com` — swap in your real address.
- **Resume link**: none is wired up yet — add one if you want a "Download resume" link in the hero or contact section.
- **Content**: project copy, stats, and stack lists live in `src/data/projects.js` and inline in `About.jsx` / `Stack.jsx` — update as your projects evolve.

## Structure

```
src/
  components/    Rail (desktop nav), MobileNav, Hero, Projects, About, Stack, Contact
  data/           projects.js — the three project entries
  hooks/          useActiveSection.js — scroll-spy for nav highlighting
  index.css       design tokens (colors, fonts) as CSS variables
```

## Design notes

Persistent dark rail on the left (identity + nav) against a warm paper content
pane on the right — that split carries through the whole page instead of
just the hero. The signature piece is the live "ticket" card in the hero,
a nod to NextUp's queue system, ticking up in real time. Each project gets
its own small hand-built visual (ticket rows, score bars, a locked
inventory cell) instead of a screenshot or generic icon.
