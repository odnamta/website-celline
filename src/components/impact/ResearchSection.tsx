'use client'

import { BookOpen, GraduationCap, FlaskConical, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Card } from '@/components/shared/Card'
import { thesisUrl } from '@/lib/data/social'

export function ResearchSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 sm:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title={t.impact.researchTitle}
          subtitle={t.impact.researchSubtitle}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimateOnScroll>
            <Card className="h-full">
              <BookOpen className="w-8 h-8 text-sage mb-4" />
              <h3 className="font-serif font-semibold text-charcoal text-lg mb-2">
                {t.impact.thesisTitle}
              </h3>
              <p className="text-sm text-warm-gray-500 leading-relaxed mb-4">
                {t.impact.thesisDescription}
              </p>
              <a
                href={thesisUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-sage-600 hover:text-sage-dark transition-colors"
              >
                {t.impact.thesisLinkLabel}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </Card>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <Card className="h-full">
              <FlaskConical className="w-8 h-8 text-sage mb-4" />
              <h3 className="font-serif font-semibold text-charcoal text-lg mb-2">
                {t.impact.researchAssistantTitle}
              </h3>
              <p className="text-sm text-warm-gray-500 leading-relaxed">
                {t.impact.researchAssistantDescription}
              </p>
            </Card>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <Card className="h-full">
              <GraduationCap className="w-8 h-8 text-sage mb-4" />
              <h3 className="font-serif font-semibold text-charcoal text-lg mb-2">
                {t.impact.teachingTitle}
              </h3>
              <p className="text-sm text-warm-gray-500 leading-relaxed">
                {t.impact.teachingDescription}
              </p>
            </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
