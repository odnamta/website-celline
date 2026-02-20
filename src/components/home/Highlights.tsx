'use client'

import { Stethoscope, Smartphone, Heart, Activity } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Card } from '@/components/shared/Card'

const icons = [Stethoscope, Smartphone, Heart, Activity]
const keys = ['medicine', 'creator', 'organizations', 'runner'] as const

export function Highlights() {
  const { t } = useLanguage()

  return (
    <section className="py-24 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title={t.highlights.sectionTitle}
          subtitle={t.highlights.sectionSubtitle}
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {keys.map((key, i) => {
            const Icon = icons[i]
            return (
              <AnimateOnScroll key={key} delay={i * 0.1}>
                <Card>
                  <Icon className="w-8 h-8 text-sage mb-4" />
                  <h3 className="text-lg font-serif font-semibold text-charcoal mb-2">
                    {t.highlights[key].title}
                  </h3>
                  <p className="text-sm text-warm-gray-500 leading-relaxed">
                    {t.highlights[key].description}
                  </p>
                </Card>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
