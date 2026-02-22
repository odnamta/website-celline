import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { ResearchSection } from '@/components/impact/ResearchSection'
import { SpeakerSection } from '@/components/impact/SpeakerSection'
import { OrgGrid } from '@/components/impact/OrgGrid'

export const metadata: Metadata = {
  title: 'Dampak & Organisasi',
  description: 'Riset, akademik, speaking engagement, dan organisasi yang didirikan dr. Celline Wijaya.',
  alternates: { canonical: '/impact' },
  openGraph: {
    title: 'Dampak & Organisasi — dr. Celline Wijaya',
    description: 'Riset, speaking engagement, Empower Indonesia, Dokter Pelari, Celline Runs.',
  },
}

export default function ImpactPage() {
  return (
    <PageWrapper>
      <div className="pt-8">
        <ResearchSection />
        <SpeakerSection />
        <OrgGrid />
      </div>
    </PageWrapper>
  )
}
