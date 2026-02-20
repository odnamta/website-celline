'use client'

import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { PhotoPlaceholder } from '@/components/shared/PhotoPlaceholder'

export function Bio() {
  const { t } = useLanguage()

  return (
    <section className="py-24 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Photo */}
          <AnimateOnScroll className="lg:col-span-2 flex justify-center">
            <PhotoPlaceholder size="lg" />
          </AnimateOnScroll>

          {/* Bio text */}
          <div className="lg:col-span-3">
            <AnimateOnScroll>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal mb-8">
                {t.about.bioTitle}
              </h2>
            </AnimateOnScroll>

            <div className="space-y-5">
              {t.about.bio.map((paragraph, i) => (
                <AnimateOnScroll key={i} delay={i * 0.1}>
                  <p className="text-warm-gray-500 leading-relaxed">{paragraph}</p>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
