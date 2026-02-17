# CLAUDE.md — Celline Wijaya Personal Website

## Project Overview

Personal website for **dr. Celline Wijaya, M.Sc.** — medical doctor, Harvard Global Health alumna, content creator, and social entrepreneur.

**Purpose:** Professional portfolio + influencer landing page + brand hub for speaking/collaboration inquiries.

**Secondary purpose:** Practice project for eventually building gama-group.co corporate website.

## About Celline

### Professional
- Medical Doctor (dr.) — practicing in Surabaya, Indonesia
- Master of Science in Global Health — Harvard University (LPDP scholarship recipient)
- Entering OBGYN residency — May 2026

### Content Creator
- Instagram: ~157K followers — @cellinewijaya (health, education, lifestyle)
- TikTok: ~105K followers — health tips, Harvard life, running
- Focus: medical education, healthy lifestyle, motherhood

### Social Entrepreneur
- **Empower Organization** — Founder. Scholarships for economically challenged but talented individuals
- **Dokter Pelari** — Founder. Promoting health & fitness from a doctor's perspective

### Personal
- Wife of Dio Atmando
- Mother of Alma (4yo) and Sofia (7mo)
- Half-marathon runner
- Amateur photographer and writer

## Tech Stack
- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS 4 + custom design system (elegant, clean, modern)
- **Animations:** Framer Motion (subtle, tasteful)
- **Deployment:** Vercel
- **CMS:** MDX for blog posts (if needed), or just static for now
- **SEO:** next/metadata, structured data (JSON-LD), OG images

## Design Direction
- **Tone:** Elegant, warm, professional — NOT corporate, NOT flashy
- **Color palette:** Soft neutrals (warm white, soft gray) with accent (sage green or dusty rose)
- **Typography:** Clean serif for headings (like Playfair Display), sans-serif for body (Inter)
- **Photography-forward:** Large hero images, photo galleries
- **Mobile-first:** Most visitors come from Instagram/TikTok links on phones
- **Indonesian + English:** Bilingual support (toggle or separate sections)

## Pages
1. **Home** — Hero with photo, tagline, quick intro, CTA
2. **About** — Full bio, timeline, achievements
3. **Media Kit** — For brand collaborations (follower stats, audience demographics, rates)
4. **Organizations** — Empower + Dokter Pelari
5. **Gallery** — Photography and running highlights
6. **Blog** — Articles/writings (optional, can add later)
7. **Contact** — Inquiry form (Formspree or similar — no backend needed)

## Key Files
```
src/
  app/
    page.tsx              # Home/landing
    about/page.tsx        # Full bio
    media-kit/page.tsx    # Collaboration info
    organizations/page.tsx # Empower + Dokter Pelari
    gallery/page.tsx      # Photo gallery
    contact/page.tsx      # Contact form
  components/
    layout/
      Navbar.tsx          # Clean top nav
      Footer.tsx          # Social links, copyright
    home/
      Hero.tsx            # Full-screen hero
      Highlights.tsx      # Quick stats/achievements
      FeaturedIn.tsx      # Media mentions
    shared/
      SocialLinks.tsx     # Instagram, TikTok, LinkedIn, YouTube
```

## Commands
```bash
npm run dev          # Dev server
npm run build        # Production build
```

## Rules
- No backend — pure static site (ISR at most)
- All images optimized (next/image, WebP)
- Lighthouse score target: 95+ across all metrics
- Fast, lightweight — no heavy JS bundles
- Must look stunning on iPhone (primary traffic source)
- Keep it simple — this is a personal brand site, not an app
