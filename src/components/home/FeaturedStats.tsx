'use client'

import { Users, Globe, Award, Youtube } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { SectionHeading } from '@/components/shared/SectionHeading'

export function FeaturedStats() {
  const { t } = useLanguage()

  const stats = [
    {
      icon: Users,
      value: '370K+',
      label: t.featuredStats.followers,
    },
    {
      icon: Youtube,
      value: '37K+',
      label: t.featuredStats.subscribers,
    },
    {
      icon: Globe,
      value: t.featuredStats.countries,
      label: t.featuredStats.countriesSub,
    },
    {
      icon: Award,
      value: t.featuredStats.scholarships,
      label: t.featuredStats.scholarshipsSub,
    },
  ]

  return (
    <section className="py-20 bg-sage-600 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title={t.featuredStats.sectionTitle}
          light
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-white/80" />
                <div className="text-3xl sm:text-4xl font-serif font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
