# Changelog

All notable changes to this project will be documented in this file.

## [0.2.0] — 2026-02-21

### Added
- Gallery page with category-filtered masonry grid (running, academic, family, speaking)
- Gallery navigation item and sitemap entry
- README.md and CHANGELOG.md (per project standards)
- Apple-touch-icon PNG for iOS home screen
- Page-specific OpenGraph metadata on all inner pages
- `twitter:creator` meta tag
- `aria-expanded` and `aria-controls` on mobile hamburger menu
- `aria-hidden` on custom TikTok SVG icons
- `prefers-reduced-motion` guard on smooth scrolling
- `fetchPriority="high"` on hero image
- `lastmod` dates on all sitemap URLs

### Fixed
- Missing `h1` heading on About, Impact, and Gallery pages (accessibility)
- OG image compressed from 826KB PNG to 162KB JPEG
- Removed redundant empty `X-Powered-By` header

## [0.1.0] — 2026-02-20

### Added
- Hero section with Celline's actual photo
- Featured In section with real media mentions (CNBC, Marie Claire, etc.)
- Security headers via vercel.json (HSTS, CSP, X-Frame-Options, etc.)
- Vercel Analytics integration
- Full bilingual support (Indonesian + English) with localStorage persistence
- JSON-LD structured data (Person schema)
- SEO metadata, OG images, sitemap, robots.txt
- Skip-to-content accessibility link
- Formspree contact form integration

### Fixed
- Organization URLs and OrgCard hover styling
- Mobile sizing, button depth, spacing, and accessibility
- Complete i18n coverage and correct follower data

## [0.0.1] — 2026-02-19

### Added
- Full rebuild with 5 bilingual pages: Home, About, Impact, Media Kit, Contact
- Component architecture: layout, home, about, impact, media-kit, contact, shared
- Design system: sage green + dusty rose palette, Playfair Display + Inter fonts
- Scroll animations via Motion (Framer Motion)
- Mobile-first responsive design
- Static export configuration (no server-side features)

## [0.0.0] — 2026-02-18

### Added
- Initial project scaffolding with Next.js 16, TypeScript, Tailwind CSS 4
