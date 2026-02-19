'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { LanguageProvider, useLanguage } from '@/lib/i18n/context'
import { Button } from '@/components/shared/Button'

function NotFoundContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-4">
        <h1 className="text-8xl font-serif font-bold text-sage-200 mb-4">404</h1>
        <h2 className="text-2xl font-serif font-semibold text-charcoal mb-3">
          {t.notFound.title}
        </h2>
        <p className="text-warm-gray-500 mb-8 max-w-md mx-auto">
          {t.notFound.subtitle}
        </p>
        <Button href="/">
          <ArrowLeft className="w-4 h-4" />
          {t.notFound.backHome}
        </Button>
      </div>
    </div>
  )
}

export default function NotFound() {
  return (
    <LanguageProvider>
      <NotFoundContent />
    </LanguageProvider>
  )
}
