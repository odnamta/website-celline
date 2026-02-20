'use client'

import { Button } from '@/components/shared/Button'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-4">
        <h1 className="text-6xl font-serif font-bold text-sage-200 mb-4">Oops</h1>
        <h2 className="text-xl font-serif font-semibold text-charcoal mb-3">
          Something went wrong
        </h2>
        <p className="text-warm-gray-500 mb-8 max-w-md mx-auto">
          An unexpected error occurred. Please try again.
        </p>
        <Button onClick={reset}>Try Again</Button>
      </div>
    </div>
  )
}
