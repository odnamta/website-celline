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
      <div className="text-center px-4 max-w-md mx-auto">
        <h1 className="text-6xl font-serif font-bold text-sage-200 mb-6">Oops</h1>

        {/* Indonesian */}
        <h2 className="text-xl font-serif font-semibold text-charcoal mb-2">
          Terjadi Kesalahan
        </h2>
        <p className="text-warm-gray-500 mb-6">
          Terjadi kesalahan yang tidak terduga. Silakan coba lagi.
        </p>

        {/* English */}
        <h2 className="text-lg font-serif font-semibold text-warm-gray-400 mb-2">
          Something Went Wrong
        </h2>
        <p className="text-warm-gray-400 mb-8">
          An unexpected error occurred. Please try again.
        </p>

        <Button onClick={reset}>Coba Lagi / Try Again</Button>
      </div>
    </div>
  )
}
