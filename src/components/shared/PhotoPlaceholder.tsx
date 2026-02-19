interface PhotoPlaceholderProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'w-24 h-24',
  md: 'w-40 h-40',
  lg: 'w-56 h-56',
}

export function PhotoPlaceholder({ size = 'md', className = '' }: PhotoPlaceholderProps) {
  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-sage-100 to-sage-200 border-4 border-white shadow-lg flex items-center justify-center ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-3/5 h-3/5 text-sage-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <text
          x="50"
          y="55"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="currentColor"
          stroke="none"
          fontSize="28"
          fontFamily="Georgia, serif"
          fontWeight="600"
        >
          CW
        </text>
      </svg>
    </div>
  )
}
