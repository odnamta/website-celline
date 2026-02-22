# CLAUDE.md — Celline Wijaya Personal Website

## Project Overview

Personal website for **dr. Celline Wijaya, MMSc** — medical doctor, Harvard Global Health alumna, health educator, lecturer, and social entrepreneur.

**Purpose:** Professional portfolio + brand hub for speaking/collaboration inquiries.

**Secondary purpose:** Practice project for eventually building gama-group.co corporate website.

## About Celline

### Professional
- Medical Doctor (dr.) — born in Jember, studied at FK Universitas Airlangga (entered at age 15)
- MMSc in Global Health Delivery — Harvard Medical School (LPDP scholarship)
- Research Assistant — Harvard T.H. Chan School of Public Health, Health Systems Group (1 year)
- Medical Lecturer — FK Universitas Ciputra, Surabaya (April 2025–present)
- Entering OBGYN residency — May 2026

### Content Creator
- Instagram: ~237K followers — @cellinewijaya.md (health, education, lifestyle)
- TikTok: ~100K followers — @cellinewijaya.md (health tips, Harvard life, running)
- YouTube: ~37K subscribers — @cellinewijaya
- Total: 370K+ followers across platforms
- Focus: medical education, healthy lifestyle, academic journey

### Social Entrepreneur
- **Empower Indonesia** — Founder. Scholarships for women's educational access
- **DokterPelari** — Founder. Evidence-based running education platform

### Contact
- **Manager:** Adella Izdiharnada — adellaizdhiharnada@gmail.com / +62 821-2393-0563
- **IMPORTANT:** No private email (celline1130@gmail.com) on website. All contact via WhatsApp Business through manager.

### Personal
- Wife of Dio Atmando
- Mother of Alma and Sofia
- Half-marathon runner

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
