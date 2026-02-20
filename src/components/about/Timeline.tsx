'use client'

import { useLanguage } from '@/lib/i18n/context'
import { timelineEvents } from '@/lib/data/timeline'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { SectionHeading } from '@/components/shared/SectionHeading'

export function Timeline() {
  const { t, locale } = useLanguage()

  return (
    <section className="py-24 sm:py-28 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading title={t.about.timelineTitle} />

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-sage-200" />

          <div className="space-y-12">
            {timelineEvents.map((event, i) => {
              const isLeft = i % 2 === 0
              return (
                <AnimateOnScroll key={event.year} delay={i * 0.08}>
                  <div className="relative flex items-start gap-6 sm:gap-0">
                    {/* Dot */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-sage border-[3px] border-white z-10 mt-1.5 shadow-sm" />

                    {/* Content — mobile: always right; desktop: alternating */}
                    <div
                      className={`ml-12 sm:ml-0 sm:w-1/2 ${
                        isLeft ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:ml-auto'
                      }`}
                    >
                      <span className="inline-block text-sm font-semibold text-sage-600 mb-1">
                        {event.year}
                      </span>
                      <h3 className="font-serif font-semibold text-charcoal mb-1">
                        {event.title[locale]}
                      </h3>
                      <p className="text-sm text-warm-gray-500 leading-relaxed">
                        {event.description[locale]}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
