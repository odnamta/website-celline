import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { Bio } from '@/components/about/Bio'
import { Timeline } from '@/components/about/Timeline'
import { PersonalSection } from '@/components/about/PersonalSection'

export const metadata: Metadata = {
  title: 'Tentang',
  description: 'Perjalanan dr. Celline Wijaya — dari Surabaya ke Harvard, dari kedokteran ke content creation.',
}

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="pt-8">
        <Bio />
        <Timeline />
        <PersonalSection />
      </div>
    </PageWrapper>
  )
}
