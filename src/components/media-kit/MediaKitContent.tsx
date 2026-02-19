'use client'

import { useLanguage } from '@/lib/i18n/context'
import { socialPlatforms } from '@/lib/data/social'
import { PlatformCard } from './PlatformCard'
import { AudienceStats } from './AudienceStats'
import { CollaborationCTA } from './CollaborationCTA'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { SectionHeading } from '@/components/shared/SectionHeading'

export function MediaKitContent() {
  const { t } = useLanguage()
  const platformsWithFollowers = socialPlatforms.filter((p) => p.followers)

  return (
    <div className="pt-8">
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            title={t.mediaKit.platformsTitle}
          />

          <div className="grid sm:grid-cols-3 gap-6">
            {platformsWithFollowers.map((platform, i) => (
              <AnimateOnScroll key={platform.name} delay={i * 0.1}>
                <PlatformCard platform={platform} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <AudienceStats />
      <CollaborationCTA />
    </div>
  )
}
