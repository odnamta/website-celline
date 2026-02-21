# cellinewijaya.com

Personal website for **dr. Celline Wijaya, MMSc** — medical doctor, Harvard Global Health alumna, content creator (370K+ followers), and social entrepreneur.

Live at [cellinewijaya.com](https://cellinewijaya.com)

## Tech Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS 4 (custom `@theme` tokens)
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React
- **Analytics:** Vercel Analytics
- **Contact:** Formspree
- **Deployment:** Vercel (static export)

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local with your Formspree form ID

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static files are exported to `out/`. No server required.

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, highlights, organizations preview, featured stats |
| About | `/about` | Bio, timeline, personal section |
| Impact | `/impact` | Organizations & research |
| Gallery | `/gallery` | Photography, running, and life highlights |
| Media Kit | `/media-kit` | Platform stats, audience demographics, collaboration CTA |
| Contact | `/contact` | Formspree inquiry form |

## Bilingual

Full Indonesian + English support. Language is toggled via the navbar globe icon and persisted in localStorage. URL parameter `?lang=en` or `?lang=id` overrides.

## Project Structure

```
src/
  app/           # Pages (App Router)
  components/    # Feature-grouped components
  lib/
    data/        # Static data (navigation, orgs, social, timeline)
    i18n/        # Translations and language context
public/
  images/        # Optimized images
```
