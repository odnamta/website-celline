'use client'

import { Heart, Activity, TrendingUp, Shield, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { organizations } from '@/lib/data/organizations'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Card } from '@/components/shared/Card'
import { Button } from '@/components/shared/Button'

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  heart: Heart,
  activity: Activity,
  'trending-up': TrendingUp,
  shield: Shield,
}

export function OrganizationsPreview() {
  const { t, locale } = useLanguage()

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title={t.orgsPreview.sectionTitle}
          subtitle={t.orgsPreview.sectionSubtitle}
        />

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {organizations.map((org, i) => {
            const Icon = iconMap[org.icon]
            return (
              <AnimateOnScroll key={org.id} delay={i * 0.1}>
                <Card>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${org.color}15` }}
                    >
                      {Icon && <Icon className="w-5 h-5" style={{ color: org.color }} />}
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-charcoal mb-1">
                        {org.name[locale]}
                      </h3>
                      <p className="text-xs text-sage-600 mb-2">{org.tagline[locale]}</p>
                      <p className="text-sm text-warm-gray-500 leading-relaxed line-clamp-2">
                        {org.description[locale]}
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimateOnScroll>
            )
          })}
        </div>

        <AnimateOnScroll className="text-center">
          <Button variant="secondary" href="/impact">
            {t.orgsPreview.viewAll}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
