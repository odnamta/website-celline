'use client'

import { ExternalLink } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { featuredIn } from '@/lib/data/featured-in'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'

export function FeaturedIn() {
  const { t } = useLanguage()

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-sage-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll className="text-center mb-10">
          <p className="text-sm font-medium text-warm-gray-400 uppercase tracking-widest">
            {t.featuredIn.sectionTitle}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
            {featuredIn.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-warm-gray-400 hover:text-charcoal transition-colors duration-200"
              >
                <span className="text-sm sm:text-base font-serif font-medium">
                  {item.name}
                </span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </a>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
