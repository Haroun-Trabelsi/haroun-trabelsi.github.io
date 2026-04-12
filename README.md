# haroun-trabelsi.github.io

Personal portfolio website for Haroun Trabelsi — Software Engineer based in Tunisia.

## Live Site

**[haroun-trabelsi.github.io](https://haroun-trabelsi.github.io)**

## Tech Stack

- **Framework**: Next.js 14 (App Router, Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Catppuccin Mocha theme
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Fonts**: Press Start 2P (retro pixel), Inter, Geist
- **Deployment**: GitHub Pages

## Features

- Retro pixel-art aesthetic with modern UI patterns
- Scroll direction-aware animations
- Dynamic project detail pages with media galleries
- Skills badge grid grouped by category
- Interactive contact form with spam protection
- Responsive design with mobile sheet navigation
- Sound effects (optional click/hover feedback)
- SEO optimized with Open Graph and Twitter Card meta

## Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build    # Static export to /out
npm run deploy   # Push to GitHub Pages
```

## Project Structure

```
app/              # Next.js App Router pages and API routes
components/       # React components (sections, navigation, shared, ui)
data/             # Portfolio data (projects, skills, experiences)
hooks/            # Custom React hooks (scroll, animation, mobile)
lib/              # Utility functions
public/           # Static assets (images, resume PDF)
styles/           # Global CSS
```
