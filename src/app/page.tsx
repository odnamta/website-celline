import { PageWrapper } from '@/components/layout/PageWrapper'
import { Hero } from '@/components/home/Hero'
import { Highlights } from '@/components/home/Highlights'
import { OrganizationsPreview } from '@/components/home/Organizations'
import { FeaturedIn } from '@/components/home/FeaturedIn'
import { FeaturedStats } from '@/components/home/FeaturedStats'

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <Highlights />
      <OrganizationsPreview />
      <FeaturedIn />
      <FeaturedStats />
    </PageWrapper>
  )
}
