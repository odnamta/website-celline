import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { OrgGrid } from '@/components/impact/OrgGrid'
import { ResearchSection } from '@/components/impact/ResearchSection'

export const metadata: Metadata = {
  title: 'Dampak & Organisasi',
  description: '3 organisasi yang didirikan Celline Wijaya untuk memberdayakan, mengedukasi, dan menginspirasi.',
  alternates: { canonical: '/impact' },
  openGraph: {
    title: 'Dampak & Organisasi — dr. Celline Wijaya',
    description: '3 organisasi: Empower Indonesia, Dokter Pelari, Celline Runs.',
  },
}

export default function ImpactPage() {
  return (
    <PageWrapper>
      <div className="pt-8">
        <OrgGrid />
        <ResearchSection />
      </div>
    </PageWrapper>
  )
}
