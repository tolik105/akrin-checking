import ContactFormClient from './contact-form-client'
import { generateBreadcrumbSchema } from '@/lib/seo'
import { generatePageMetadata } from '@/lib/metadata-helpers'

export const metadata = generatePageMetadata({
  title: 'Contact Form - Send us a Message | AKRIN IT Solutions',
  description: 'Send us a message through our contact form. Get in touch with AKRIN for professional IT services and support in Tokyo, Japan.',
  keywords: [
    'contact form',
    'send message',
    'AKRIN contact',
    'IT support inquiry',
    'Tokyo IT services',
    'business inquiry',
    'technical support',
    'get quote',
    'IT consultation'
  ],
  path: '/contact-form'
})

const breadcrumbData = [
  { name: 'Home', url: 'https://akrin.jp' },
  { name: 'Contact', url: 'https://akrin.jp/contact' },
  { name: 'Contact Form', url: 'https://akrin.jp/contact-form' }
]

export default function ContactFormPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbData))
        }}
      />
      <ContactFormClient />
    </>
  )
}
