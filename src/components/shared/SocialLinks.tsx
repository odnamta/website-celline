import { Instagram, Youtube, Linkedin } from 'lucide-react'
import { socialPlatforms } from '@/lib/data/social'

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z" />
    </svg>
  )
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram,
  TikTok: TikTokIcon,
  YouTube: Youtube,
  LinkedIn: Linkedin,
}

interface SocialLinksProps {
  variant?: 'light' | 'dark'
  showLabels?: boolean
  className?: string
}

export function SocialLinks({ variant = 'dark', showLabels = false, className = '' }: SocialLinksProps) {
  const colorClasses = variant === 'light'
    ? 'text-white/70 hover:text-white'
    : 'text-warm-gray-500 hover:text-charcoal'

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialPlatforms.map((platform) => {
        const Icon = iconMap[platform.name]
        if (!Icon) return null
        return (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${colorClasses} transition-colors duration-200`}
            aria-label={platform.name}
          >
            <Icon className="w-5 h-5" />
            {showLabels && (
              <span className="ml-1 text-sm">{platform.name}</span>
            )}
          </a>
        )
      })}
    </div>
  )
}
