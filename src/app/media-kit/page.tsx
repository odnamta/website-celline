import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { MediaKitContent } from '@/components/media-kit/MediaKitContent'

export const metadata: Metadata = {
  title: 'Media Kit',
  description: 'Data dan informasi untuk kolaborasi brand dan media dengan dr. Celline Wijaya.',
  alternates: { canonical: '/media-kit' },
}

export default function MediaKitPage() {
  return (
    <PageWrapper>
      <MediaKitContent />
    </PageWrapper>
  )
}
