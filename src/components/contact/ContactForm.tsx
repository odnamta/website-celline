'use client'

import { useState, type FormEvent } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { Button } from '@/components/shared/Button'
import { managerContact } from '@/lib/data/social'

type FormStatus = 'idle' | 'sending'

export function ContactForm() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<FormStatus>('idle')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name') as string
    const email = data.get('email') as string
    const subject = data.get('subject') as string
    const message = data.get('message') as string

    const waMessage = [
      `*${subject}*`,
      '',
      `From: ${name}`,
      `Email: ${email}`,
      '',
      message,
    ].join('\n')

    const waUrl = `${managerContact.whatsappUrl}?text=${encodeURIComponent(waMessage)}`
    window.open(waUrl, '_blank')
    setStatus('idle')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
          {t.contact.form.name} <span className="text-dusty-rose">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder={t.contact.form.name}
          className="w-full px-4 py-3 rounded-xl border border-warm-gray-200 bg-cream/50 text-charcoal placeholder:text-warm-gray-300 focus:outline-none focus:ring-2 focus:ring-sage focus:border-sage focus:bg-white transition-all"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
          {t.contact.form.email} <span className="text-dusty-rose">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="email@example.com"
          className="w-full px-4 py-3 rounded-xl border border-warm-gray-200 bg-cream/50 text-charcoal placeholder:text-warm-gray-300 focus:outline-none focus:ring-2 focus:ring-sage focus:border-sage focus:bg-white transition-all"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-1.5">
          {t.contact.form.subject} <span className="text-dusty-rose">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder={t.contact.form.subject}
          className="w-full px-4 py-3 rounded-xl border border-warm-gray-200 bg-cream/50 text-charcoal placeholder:text-warm-gray-300 focus:outline-none focus:ring-2 focus:ring-sage focus:border-sage focus:bg-white transition-all"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
          {t.contact.form.message} <span className="text-dusty-rose">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={t.contact.form.message}
          className="w-full px-4 py-3 rounded-xl border border-warm-gray-200 bg-white text-charcoal placeholder:text-warm-gray-300 focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage transition-colors resize-none"
        />
      </div>

      <Button type="submit" disabled={status === 'sending'}>
        <Send className="w-4 h-4" />
        {t.contact.form.send}
      </Button>
    </form>
  )
}
