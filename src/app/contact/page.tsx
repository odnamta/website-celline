import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { ContactContent } from '@/components/contact/ContactContent'

export const metadata: Metadata = {
  title: 'Kontak',
  description: 'Hubungi dr. Celline Wijaya untuk kolaborasi, speaking engagement, atau pertanyaan.',
}

export default function ContactPage() {
  return (
    <PageWrapper>
      <ContactContent />
    </PageWrapper>
  )
}
