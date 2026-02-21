import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { GalleryGrid } from '@/components/gallery/GalleryGrid'

export const metadata: Metadata = {
  title: 'Galeri',
  description: 'Galeri foto dr. Celline Wijaya — momen dari kedokteran, lari, speaking, dan kehidupan.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Galeri — dr. Celline Wijaya',
    description: 'Momen dari kedokteran, lari, speaking, dan kehidupan.',
  },
}

export default function GalleryPage() {
  return (
    <PageWrapper>
      <div className="pt-8">
        <GalleryGrid />
      </div>
    </PageWrapper>
  )
}
