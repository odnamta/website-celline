'use client'

import { useLanguage } from '@/lib/i18n/context'
import { organizations } from '@/lib/data/organizations'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { OrgCard } from './OrgCard'

export function OrgGrid() {
  const { t, locale } = useLanguage()

  return (
    <section className="py-24 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title={t.impact.pageTitle}
          subtitle={t.impact.pageSubtitle}
          as="h1"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {organizations.map((org, i) => (
            <AnimateOnScroll key={org.id} delay={i * 0.1}>
              <OrgCard org={org} locale={locale} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
