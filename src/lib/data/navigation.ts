export interface NavItem {
  href: string
  labelKey: 'home' | 'about' | 'impact' | 'mediaKit' | 'contact'
}

export const navItems: NavItem[] = [
  { href: '/', labelKey: 'home' },
  { href: '/about', labelKey: 'about' },
  { href: '/impact', labelKey: 'impact' },
  { href: '/media-kit', labelKey: 'mediaKit' },
  { href: '/contact', labelKey: 'contact' },
]
