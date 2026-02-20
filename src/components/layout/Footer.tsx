'use client'

import Link from 'next/link'
import { Heart } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { SocialLinks } from '@/components/shared/SocialLinks'
import { navItems } from '@/lib/data/navigation'
import { contactEmail } from '@/lib/data/social'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-16 bg-charcoal text-white/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-white mb-3">
              Celline Wijaya
            </h3>
            <p className="text-sm leading-relaxed">
              {t.hero.tagline}
              <br />
              {t.footer.harvardAlumna}
            </p>
          </div>

          {/* Quick nav */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
              {t.footer.navigation}
            </h4>
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm hover:text-white transition-colors"
                >
                  {t.nav[item.labelKey]}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
              {t.contact.info.social}
            </h4>
            <SocialLinks variant="light" className="mb-4" />
            <a
              href={`mailto:${contactEmail}`}
              className="text-sm hover:text-white transition-colors"
            >
              {contactEmail}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} dr. Celline Wijaya, MMSc
          </p>
          <p className="text-sm flex items-center gap-1">
            {t.footer.madeWith} <Heart className="w-3.5 h-3.5 text-dusty-rose" />
          </p>
        </div>
      </div>
    </footer>
  )
}
