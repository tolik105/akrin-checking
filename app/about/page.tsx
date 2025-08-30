import { generatePageMetadata } from '@/lib/metadata-helpers'
import AboutClient from './about-client'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'About AKRIN - Enterprise Reliability, Startup Agility',
  description: 'Founded in Tokyo in 2025 by veteran infrastructure engineers, AKRIN blends 15 years of large‑scale IT experience with a lean, automation‑first mindset for high‑growth companies in Japan.',
  keywords: [
    'about AKRIN',
    'IT company Japan',
    'Tokyo IT services',
    'enterprise reliability',
    'startup agility',
    'automation first',
    'infrastructure engineers',
    'managed IT cloud',
    'network engineering',
    'cybersecurity compliance'
  ],
  path: '/about',
  image: '/og-image.png'
})

const breadcrumbData = [
  { name: 'Home', url: 'https://akrin.jp' },
  { name: 'About', url: 'https://akrin.jp/about' }
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbData))
        }}
      />
      <AboutClient />
    </>
  )
}

