import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { ContactContent } from '@/components/contact/ContactContent'

export const metadata: Metadata = {
  title: 'Mari Berkolaborasi',
  description: 'Hubungi tim dr. Celline Wijaya untuk kolaborasi, speaking engagement, atau partnership.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Mari Berkolaborasi — dr. Celline Wijaya',
    description: 'Untuk kolaborasi, speaking engagement, atau partnership.',
  },
}

export default function ContactPage() {
  return (
    <PageWrapper>
      <ContactContent />
    </PageWrapper>
  )
}
