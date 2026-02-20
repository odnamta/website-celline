'use client'

import { useLanguage } from '@/lib/i18n/context'
import { ContactForm } from './ContactForm'
import { ContactInfo } from './ContactInfo'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'

export function ContactContent() {
  const { t } = useLanguage()

  return (
    <div className="pt-8">
      <section className="py-24 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal mb-4">
              {t.contact.pageTitle}
            </h1>
            <p className="text-warm-gray-500 text-lg max-w-2xl mx-auto">
              {t.contact.pageSubtitle}
            </p>
          </AnimateOnScroll>

          <div className="grid lg:grid-cols-5 gap-12">
            <AnimateOnScroll className="lg:col-span-3" delay={0.1}>
              <ContactForm />
            </AnimateOnScroll>

            <AnimateOnScroll className="lg:col-span-2" delay={0.2}>
              <ContactInfo />
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  )
}
