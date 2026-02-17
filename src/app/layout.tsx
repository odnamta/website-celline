import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'dr. Celline Wijaya, M.Sc. — Doctor, Creator, Runner',
  description: 'Medical doctor, Harvard Global Health alumna, content creator with 250K+ followers, founder of Empower & Dokter Pelari.',
  openGraph: {
    title: 'dr. Celline Wijaya, M.Sc.',
    description: 'Doctor. Creator. Runner. Harvard Global Health alumna.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}
