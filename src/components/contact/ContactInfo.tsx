'use client'

import { Mail, MapPin } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { SocialLinks } from '@/components/shared/SocialLinks'
import { contactEmail } from '@/lib/data/social'

export function ContactInfo() {
  const { t } = useLanguage()

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-serif text-xl font-semibold text-charcoal mb-4">
          {t.contact.info.title}
        </h3>

        <div className="space-y-4">
          <a
            href={`mailto:${contactEmail}`}
            className="flex items-center gap-3 text-warm-gray-500 hover:text-charcoal transition-colors"
          >
            <Mail className="w-5 h-5 text-sage" />
            <span>{contactEmail}</span>
          </a>

          <div className="flex items-center gap-3 text-warm-gray-500">
            <MapPin className="w-5 h-5 text-sage" />
            <span>{t.contact.info.location}</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-charcoal mb-3 uppercase tracking-wider">
          {t.contact.info.social}
        </h4>
        <SocialLinks />
      </div>
    </div>
  )
}
