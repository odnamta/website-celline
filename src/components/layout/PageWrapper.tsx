'use client'

import type { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { LanguageProvider } from '@/lib/i18n/context'

interface PageWrapperProps {
  children: ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </LanguageProvider>
  )
}
