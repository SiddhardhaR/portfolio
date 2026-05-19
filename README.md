# Siddhardha Ravi - Grand Line Developer Journey

A cinematic, recruiter-ready portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis, Three.js, and shadcn-inspired local UI primitives.

## Experience

The site presents Siddhardha Ravi as a Data Engineer and AI-integrated analytics developer through a premium anime-inspired storytelling system:

- Grand Line hero intro with ocean, particles, ship silhouette, compass, and cinematic CTAs
- Captain's Log profile section grounded in resume copy
- Grand Line Journey experience timeline with island-style company cards
- Crew Skills & Powers grid for frontend, backend, cloud, AI, DevOps, databases, analytics, and governance
- Legendary Adventures project cards with metrics, tech stacks, and professional impact
- SEO metadata and structured schema
- Static export for GitHub Pages

## Tech Stack

- Next.js 16 static export
- React 19 and TypeScript
- Tailwind CSS
- Framer Motion
- GSAP ScrollTrigger
- Lenis smooth scrolling
- Three.js particle and wave background
- lucide-react icons

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
```

The static site is emitted to `out/`.

## Deploy To GitHub Pages

```bash
npm run deploy
```

For GitHub Actions, the included workflow builds the static export and deploys `out/` to Pages. Set Pages source to GitHub Actions in repository settings.

## Content

Portfolio content lives in:

```text
data/portfolio.ts
```

Resume download asset:

```text
public/Siddhardha_Ravi_Resume.docx
```

Replace placeholder GitHub/demo links in `components/projects-section.tsx` or extend each project item in `data/portfolio.ts` when final URLs are available.
