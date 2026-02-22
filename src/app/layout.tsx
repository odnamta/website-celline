import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'dr. Celline Wijaya, MMSc — Dokter, Kreator, Pelari',
    template: '%s | dr. Celline Wijaya',
  },
  description:
    'Dokter, Harvard Global Health alumna, content creator 370K+ followers, pendiri Empower Indonesia & Dokter Pelari.',
  keywords: [
    'Celline Wijaya',
    'dokter',
    'Harvard',
    'Global Health',
    'content creator',
    'Empower Indonesia',
    'Dokter Pelari',
    'LPDP',
  ],
  authors: [{ name: 'dr. Celline Wijaya, MMSc' }],
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('https://cellinewijaya.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'dr. Celline Wijaya, MMSc',
    description: 'Dokter. Kreator. Pelari. Harvard Global Health alumna.',
    type: 'website',
    locale: 'id_ID',
    alternateLocale: 'en_US',
    siteName: 'Celline Wijaya',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'dr. Celline Wijaya, MMSc — Dokter, Kreator, Pelari',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'dr. Celline Wijaya, MMSc',
    description: 'Dokter. Kreator. Pelari. Harvard Global Health alumna.',
    images: ['/og-default.jpg'],
    creator: '@cellinewijaya',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'dr. Celline Wijaya, MMSc',
              jobTitle: 'Medical Doctor & Lecturer',
              worksFor: {
                '@type': 'Organization',
                name: 'Universitas Ciputra School of Medicine',
              },
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Harvard University',
              },
              sameAs: [
                'https://instagram.com/cellinewijaya.md',
                'https://tiktok.com/@cellinewijaya.md',
                'https://youtube.com/@cellinewijaya',
                'https://linkedin.com/in/maria-cellina-wijaya',
              ],
              image: 'https://cellinewijaya.com/images/celline-hero.jpg',
              description: 'Medical doctor, Harvard Global Health alumna, content creator, founder of Empower Indonesia & Dokter Pelari.',
              email: 'celline1130@gmail.com',
              url: 'https://cellinewijaya.com',
            }),
          }}
        />
        <link rel="preconnect" href="https://formspree.io" />
        <link rel="dns-prefetch" href="https://va.vercel-analytics.com" />
      </head>
      <body className="min-h-screen antialiased font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-sage focus:text-white focus:rounded-lg focus:text-sm"
        >
          Langsung ke konten
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
