import Link from 'next/link'
import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonBaseProps {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string
  external?: boolean
  onClick?: never
  type?: never
  disabled?: never
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never
  external?: never
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

type ButtonProps = ButtonAsLink | ButtonAsButton

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-sage text-white hover:bg-sage-dark active:scale-[0.97]',
  secondary:
    'border border-sage text-sage-dark hover:bg-sage-50 active:scale-[0.97]',
  ghost:
    'border border-warm-gray-300 text-warm-gray-500 hover:border-charcoal hover:text-charcoal active:scale-[0.97]',
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${variantClasses[variant]} ${className}`

  if ('href' in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={props.href} className={baseClasses}>
        {children}
      </Link>
    )
  }

  const { onClick, type = 'button', disabled } = props as ButtonAsButton
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  )
}
