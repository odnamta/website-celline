'use client'

import { MapPin, Phone, User, Linkedin, ExternalLink, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { SocialLinks } from '@/components/shared/SocialLinks'
import { managerContact, linkedinUrl, thesisUrl } from '@/lib/data/social'

export function ContactInfo() {
  const { t } = useLanguage()

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-serif text-xl font-semibold text-charcoal mb-4">
          {t.contact.info.title}
        </h3>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-warm-gray-500">
            <MapPin className="w-5 h-5 text-sage" />
            <span>{t.contact.info.location}</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-charcoal mb-3 uppercase tracking-wider">
          {t.contact.info.manager}
        </h4>
        <p className="text-sm text-warm-gray-400 mb-3">{t.contact.info.managerLabel}</p>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-warm-gray-500">
            <User className="w-5 h-5 text-sage" />
            <span>{managerContact.name}</span>
          </div>
          <a
            href={managerContact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-warm-gray-500 hover:text-charcoal transition-colors"
          >
            <MessageCircle className="w-5 h-5 text-sage" />
            <span>{t.contact.info.whatsapp} — {managerContact.phone}</span>
          </a>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-charcoal mb-3 uppercase tracking-wider">
          {t.contact.info.linkedin}
        </h4>
        <div className="space-y-3">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-warm-gray-500 hover:text-charcoal transition-colors"
          >
            <Linkedin className="w-5 h-5 text-sage" />
            <span>LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href={thesisUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-warm-gray-500 hover:text-charcoal transition-colors"
          >
            <ExternalLink className="w-5 h-5 text-sage" />
            <span>{t.contact.info.thesisHighlight}</span>
          </a>
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
