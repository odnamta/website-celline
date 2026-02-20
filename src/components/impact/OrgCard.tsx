'use client'

import { Heart, Activity, TrendingUp, Shield, ExternalLink } from 'lucide-react'
import type { Organization } from '@/lib/data/organizations'
import type { Locale } from '@/lib/i18n/types'

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  heart: Heart,
  activity: Activity,
  'trending-up': TrendingUp,
  shield: Shield,
}

interface OrgCardProps {
  org: Organization
  locale: Locale
}

export function OrgCard({ org, locale }: OrgCardProps) {
  const Icon = iconMap[org.icon]

  return (
    <div className="p-6 rounded-2xl border border-sage-100 bg-white hover:border-sage-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${org.color}15` }}
        >
          {Icon && <Icon className="w-6 h-6" style={{ color: org.color }} />}
        </div>
        {org.url && (
          <a
            href={org.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-gray-400 hover:text-sage-600 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      <h3 className="font-serif text-lg font-semibold text-charcoal mb-1">
        {org.name[locale]}
      </h3>
      <p className="text-sm text-sage-600 mb-3">{org.tagline[locale]}</p>
      <p className="text-sm text-warm-gray-500 leading-relaxed">
        {org.description[locale]}
      </p>
    </div>
  )
}
