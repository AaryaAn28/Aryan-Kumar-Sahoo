# Aryan — Cinematic Portfolio

A premium, cinematic dark-and-gold portfolio built with Next.js, TypeScript, Tailwind CSS and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to vercel.com/new and import the repo.
3. Framework preset: **Next.js** (auto-detected). No extra config needed.
4. Click **Deploy**.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

## Customize

- **Content**: everything (name, projects, stats, socials) lives in `src/lib/data.ts` — edit that one file to update the whole site.
- **Colors**: CSS variables are defined in `src/app/globals.css` (`--gold`, `--bg-primary`, etc.).
- **Resume**: drop your PDF at `public/resume.pdf` — the "Download Resume" button already links there.
- **Real stats**: the LeetCode/GitHub numbers in `data.ts` are placeholders — replace with your real solved-count, contest rating, repo count, etc.

## Notes on scope

The build follows the brief's dark/gold cinematic direction: loading sequence, floating navbar, letter-by-letter hero reveal, scroll-triggered reveals, animated counters, self-drawing timeline and custom cursor. Two deliberate substitutions were made for a reliable, fast Vercel deploy:

- The Three.js hero object was replaced with a lightweight CSS/canvas-animated geometric shape + particle field — same visual effect, zero risk of WebGL/build issues.
- GSAP was left out of the dependency list in favor of Framer Motion + native scroll APIs for all animation, keeping the bundle smaller with identical results.
