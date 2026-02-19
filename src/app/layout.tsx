import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
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
    'Dokter, Harvard Global Health alumna, content creator 300K+ followers, pendiri Empower Indonesia & Dokter Pelari.',
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
  openGraph: {
    title: 'dr. Celline Wijaya, MMSc',
    description: 'Dokter. Kreator. Pelari. Harvard Global Health alumna.',
    type: 'website',
    locale: 'id_ID',
    alternateLocale: 'en_US',
    siteName: 'Celline Wijaya',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'dr. Celline Wijaya, MMSc',
    description: 'Dokter. Kreator. Pelari. Harvard Global Health alumna.',
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
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
