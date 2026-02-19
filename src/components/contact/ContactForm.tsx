'use client'

import { useState, type FormEvent } from 'react'
import { Send, CheckCircle, XCircle } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { Button } from '@/components/shared/Button'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export function ContactForm() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/xpwzgkjq', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="p-8 rounded-2xl border border-sage-200 bg-sage-50 text-center">
        <CheckCircle className="w-12 h-12 text-sage mx-auto mb-4" />
        <p className="text-lg font-serif font-semibold text-charcoal">
          {t.contact.form.success}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
          {t.contact.form.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 rounded-xl border border-warm-gray-200 bg-white text-charcoal placeholder:text-warm-gray-300 focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
          {t.contact.form.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-xl border border-warm-gray-200 bg-white text-charcoal placeholder:text-warm-gray-300 focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage transition-colors"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-1.5">
          {t.contact.form.subject}
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="w-full px-4 py-3 rounded-xl border border-warm-gray-200 bg-white text-charcoal placeholder:text-warm-gray-300 focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
          {t.contact.form.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-xl border border-warm-gray-200 bg-white text-charcoal placeholder:text-warm-gray-300 focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage transition-colors resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-600 text-sm">
          <XCircle className="w-4 h-4" />
          {t.contact.form.error}
        </div>
      )}

      <Button type="submit" disabled={status === 'sending'}>
        <Send className="w-4 h-4" />
        {status === 'sending' ? t.contact.form.sending : t.contact.form.send}
      </Button>
    </form>
  )
}
