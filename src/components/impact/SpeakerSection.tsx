'use client'

import { Mic } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { speakingEngagements } from '@/lib/data/speakers'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { SectionHeading } from '@/components/shared/SectionHeading'

export function SpeakerSection() {
  const { t, locale } = useLanguage()

  return (
    <section className="py-24 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title={t.impact.speakerTitle}
          subtitle={t.impact.speakerSubtitle}
        />

        <div className="grid sm:grid-cols-2 gap-4">
          {speakingEngagements.map((engagement, i) => (
            <AnimateOnScroll key={i} delay={i * 0.05}>
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-warm-gray-100 bg-cream/50 hover:border-sage-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-sage-50 flex items-center justify-center shrink-0">
                  <Mic className="w-5 h-5 text-sage" />
                </div>
                <div>
                  <h3 className="font-medium text-charcoal text-sm mb-1">
                    {engagement.title[locale]}
                  </h3>
                  <p className="text-xs text-warm-gray-400">
                    {engagement.venue}
                  </p>
                  <span className="inline-block mt-2 text-xs font-medium text-sage-600 bg-sage-50 px-2 py-0.5 rounded-full">
                    {engagement.type[locale]}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
