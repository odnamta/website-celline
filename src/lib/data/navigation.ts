export interface NavItem {
  href: string
  labelKey: 'home' | 'about' | 'impact' | 'gallery' | 'mediaKit' | 'contact'
}

export const navItems: NavItem[] = [
  { href: '/', labelKey: 'home' },
  { href: '/about', labelKey: 'about' },
  { href: '/impact', labelKey: 'impact' },
  { href: '/gallery', labelKey: 'gallery' },
  { href: '/media-kit', labelKey: 'mediaKit' },
  { href: '/contact', labelKey: 'contact' },
]
