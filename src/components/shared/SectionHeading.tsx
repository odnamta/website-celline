import { AnimateOnScroll } from './AnimateOnScroll'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  as?: 'h1' | 'h2'
}

export function SectionHeading({ title, subtitle, centered = true, light = false, as: Tag = 'h2' }: SectionHeadingProps) {
  return (
    <AnimateOnScroll className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <Tag className={`text-3xl sm:text-4xl font-serif font-bold mb-4 ${light ? 'text-white' : 'text-charcoal'}`}>
        {title}
      </Tag>
      {subtitle && (
        <p className={`text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-warm-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </AnimateOnScroll>
  )
}
