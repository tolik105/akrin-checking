'use client'

import { useState } from 'react'

type NLang = 'en' | 'ja'

export function NewsletterForm({ language = 'en' }: { language?: NLang }) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const t = language === 'ja'
    ? {
        heading: '最新のITインサイトを受け取る',
        body:
          '最新のテクノロジー動向、サイバーセキュリティのアップデート、ITのベストプラクティスをメールでお届けします。AKRINを信頼する数千人のITプロフェッショナルに加わり、専門的なガイダンスを受け取りましょう。',
        label: 'ニュースレター購読のメールアドレス',
        placeholder: 'メールアドレスを入力',
        srDesc: 'AKRINの専門家によるITインサイトとテクノロジー最新情報を受け取るために購読する',
        btn: '購読する',
        btnLoading: '購読処理中…',
        ariaBtn: 'AKRINニュースレターを購読する',
        success: 'ご購読ありがとうございます。間もなく最新のインサイトをお届けします。',
        error: 'エラーが発生しました。もう一度お試しください。'
      }
    : {
        heading: 'Stay Updated with IT Insights',
        body:
          "Get the latest technology insights, cybersecurity updates, and IT best practices delivered to your inbox. Join thousands of IT professionals who trust AKRIN for expert guidance.",
        label: 'Email address for newsletter subscription',
        placeholder: 'Enter your email address',
        srDesc: 'Subscribe to receive IT insights and technology updates from AKRIN experts',
        btn: 'Subscribe',
        btnLoading: 'Subscribing...',
        ariaBtn: 'Subscribe to AKRIN newsletter',
        success: "Thank you for subscribing! You'll receive our latest insights soon.",
        error: 'Something went wrong. Please try again.'
      }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')
    setStatus('idle')

    try {
      // Here you would typically send the email to your newsletter service
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setMessage(t.success)
      setStatus('success')
      setEmail('')
    } catch (error) {
      setMessage(t.error)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-normal text-gray-900 mb-3 md:mb-4 tracking-tight">
        {t.heading}
      </h2>
      <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-normal">
        {t.body}
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-lg mx-auto" aria-label="Newsletter subscription">
        <label htmlFor="newsletter-email" className="sr-only">
          {t.label}
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.placeholder}
          className="newsletter-form flex-1 px-3 md:px-4 py-3 md:py-4 border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent text-base rounded-lg"
          required
          disabled={isSubmitting}
          aria-describedby="newsletter-description"
        />
        <p id="newsletter-description" className="sr-only">
          {t.srDesc}
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 md:px-8 py-3 md:py-4 bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground font-medium transition-colors whitespace-nowrap text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:ring-offset-2"
          aria-label={t.ariaBtn}
        >
          {isSubmitting ? t.btnLoading : t.btn}
        </button>
      </form>
      
      {message && (
        <p className={`mt-4 text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </div>
  )
}
