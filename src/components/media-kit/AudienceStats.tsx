'use client'

import { Users, BarChart3, MapPin } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { SectionHeading } from '@/components/shared/SectionHeading'

export function AudienceStats() {
  const { t } = useLanguage()

  const stats = [
    {
      icon: BarChart3,
      value: t.mediaKit.audienceAge,
      label: t.mediaKit.audienceAgeSub,
    },
    {
      icon: Users,
      value: t.mediaKit.audienceGender,
      label: t.mediaKit.audienceGenderSub,
    },
    {
      icon: MapPin,
      value: t.mediaKit.audienceLocation,
      label: t.mediaKit.audienceLocationSub,
    },
  ]

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading title={t.mediaKit.audienceTitle} />

        <div className="grid sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 0.1}>
              <div className="p-6 rounded-2xl border border-sage-100 bg-white text-center">
                <stat.icon className="w-8 h-8 text-sage mx-auto mb-3" />
                <div className="text-xl font-serif font-bold text-charcoal mb-1">
                  {stat.value}
                </div>
                <p className="text-sm text-warm-gray-400">{stat.label}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
