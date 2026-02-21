'use client'

import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'

export function CollaborationCTA() {
  const { t } = useLanguage()

  return (
    <section className="py-24 sm:py-28 bg-sage-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            {t.mediaKit.collaborationTitle}
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            {t.mediaKit.collaborationSubtitle}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10 text-left">
            {t.mediaKit.collaborationTypes.map((type) => (
              <div key={type} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-sage-200 shrink-0" />
                <span className="text-sm text-white/90">{type}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 bg-white text-sage-700 hover:bg-sage-50 active:scale-[0.97] shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-sage-600"
          >
            {t.mediaKit.ctaButton}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
