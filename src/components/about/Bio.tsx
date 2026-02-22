'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'

export function Bio() {
  const { t } = useLanguage()

  return (
    <section className="py-24 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Photo */}
          <AnimateOnScroll className="lg:col-span-2 flex justify-center">
            <div className="w-72 sm:w-80 lg:w-96 aspect-[3/4] rounded-3xl overflow-hidden border-2 border-sage-200 shadow-xl">
              <Image
                src="/images/celline-about.jpg"
                alt="dr. Celline Wijaya, MMSc"
                width={900}
                height={1200}
                className="w-full h-full object-cover"
              />
            </div>
          </AnimateOnScroll>

          {/* Bio text */}
          <div className="lg:col-span-3">
            <AnimateOnScroll>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal mb-8">
                {t.about.bioTitle}
              </h1>
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
