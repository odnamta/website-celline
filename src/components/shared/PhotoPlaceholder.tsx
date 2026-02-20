interface PhotoPlaceholderProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'w-24 h-24',
  md: 'w-40 h-40',
  lg: 'w-64 h-64 sm:w-72 sm:h-72',
}

const textSizes = {
  sm: '24',
  md: '28',
  lg: '32',
}

export function PhotoPlaceholder({ size = 'md', className = '' }: PhotoPlaceholderProps) {
  return (
    <div
      className={`${sizeClasses[size]} rounded-3xl bg-gradient-to-br from-sage-50 via-sage-100 to-sage-200 border-2 border-sage-200 shadow-xl flex items-center justify-center ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-1/2 h-1/2 text-sage-300"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <text
          x="50"
          y="55"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="currentColor"
          stroke="none"
          fontSize={textSizes[size]}
          fontFamily="Georgia, serif"
          fontWeight="600"
          letterSpacing="2"
        >
          CW
        </text>
      </svg>
    </div>
  )
}
