import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`p-6 rounded-2xl border border-sage-100 bg-white ${
        hover ? 'hover:border-sage-300 hover:shadow-lg hover:-translate-y-0.5' : ''
      } transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  )
}
