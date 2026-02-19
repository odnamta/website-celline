'use client'

import { motion } from 'motion/react'
import { Instagram, Youtube, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { Button } from '@/components/shared/Button'
import { PhotoPlaceholder } from '@/components/shared/PhotoPlaceholder'
import { SocialLinks } from '@/components/shared/SocialLinks'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sage-50 via-cream to-cream" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sage-600 font-medium text-sm uppercase tracking-wider mb-4"
            >
              {t.hero.tagline}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-charcoal mb-6 leading-tight"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-warm-gray-500 max-w-lg mb-8 leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <Button href="https://instagram.com/cellinewijaya.md" external>
                <Instagram className="w-4 h-4" />
                {t.hero.cta.instagram}
              </Button>
              <Button variant="secondary" href="https://youtube.com/@cellinewijaya" external>
                <Youtube className="w-4 h-4" />
                YouTube — 37K
              </Button>
              <Button variant="ghost" href="/contact">
                {t.hero.cta.collaborate}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <SocialLinks className="mb-0" />
            </motion.div>
          </div>

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <PhotoPlaceholder size="lg" />
          </motion.div>
        </div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16 pt-12 border-t border-sage-100"
        >
          {[
            { value: '300K+', label: t.hero.stats.followers },
            { value: t.hero.stats.harvard, label: t.hero.stats.harvardSub },
            { value: t.hero.stats.organizations, label: t.hero.stats.organizationsSub },
            { value: '21K+', label: t.hero.stats.halfMarathon },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-serif font-bold text-sage-600">
                {stat.value}
              </div>
              <div className="text-xs text-warm-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
