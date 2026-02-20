'use client'

import { Activity, Heart, GraduationCap } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Card } from '@/components/shared/Card'

const items = [
  { key: 'running' as const, icon: Activity },
  { key: 'family' as const, icon: Heart },
  { key: 'teaching' as const, icon: GraduationCap },
]

export function PersonalSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title={t.about.personalTitle}
          subtitle={t.about.personalSubtitle}
        />

        <div className="grid sm:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <AnimateOnScroll key={item.key} delay={i * 0.1}>
              <Card className="text-center">
                <item.icon className="w-8 h-8 text-sage mx-auto mb-4" />
                <h3 className="font-serif font-semibold text-charcoal mb-2">
                  {t.about[item.key].title}
                </h3>
                <p className="text-sm text-warm-gray-500 leading-relaxed">
                  {t.about[item.key].description}
                </p>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
