'use client'

import { Instagram, Youtube, Linkedin } from 'lucide-react'
import type { SocialPlatform } from '@/lib/data/social'
import { useLanguage } from '@/lib/i18n/context'

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z" />
    </svg>
  )
}

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Instagram,
  TikTok: TikTokIcon,
  YouTube: Youtube,
  LinkedIn: Linkedin,
}

interface PlatformCardProps {
  platform: SocialPlatform
}

export function PlatformCard({ platform }: PlatformCardProps) {
  const { t } = useLanguage()
  const Icon = iconMap[platform.name]
  if (!Icon) return null

  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 rounded-2xl border border-sage-100 bg-white hover:border-sage-400 hover:shadow-sm transition-all duration-200"
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${platform.color}15` }}
        >
          <Icon className="w-5 h-5" style={{ color: platform.color }} />
        </div>
        <div>
          <h3 className="font-semibold text-charcoal">{platform.name}</h3>
          <p className="text-xs text-warm-gray-400">{platform.handle}</p>
        </div>
      </div>

      {platform.followers && (
        <div className="text-3xl font-serif font-bold text-charcoal">
          {platform.followers}
        </div>
      )}
      {platform.followers && (
        <p className="text-sm text-warm-gray-400 mt-1">
          {platform.name === 'YouTube' ? t.mediaKit.subscribersLabel : t.mediaKit.followersLabel}
        </p>
      )}
    </a>
  )
}
