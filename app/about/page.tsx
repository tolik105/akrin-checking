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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://akrin.jp/#organization",
  "name": "AKRIN K.K.",
  "alternateName": ["AKRIN株式会社", "AKRIN", "アクリン"],
  "url": "https://akrin.jp",
  "logo": {
    "@type": "ImageObject",
    "url": "https://akrin.jp/akrin-logo.svg",
    "width": 512,
    "height": 512
  },
  "description": "Founded in Tokyo in 2025 by veteran infrastructure engineers, AKRIN blends 15 years of large-scale IT experience with a lean, automation-first mindset for high-growth companies in Japan.",
  "foundingDate": "2025",
  "foundingLocation": {
    "@type": "Place",
    "name": "Tokyo, Japan"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2-4-15 Minamiaoyama 4F",
    "addressLocality": "Minato City",
    "addressRegion": "Tokyo",
    "postalCode": "107-0062",
    "addressCountry": "JP"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+81-3-6821-1223",
      "contactType": "customer service",
      "availableLanguage": ["English", "Japanese"],
      "areaServed": ["JP", "Worldwide"]
    },
    {
      "@type": "ContactPoint",
      "email": "support@akrin.jp",
      "contactType": "technical support",
      "availableLanguage": ["English", "Japanese"]
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/akrin-kk"
  ],
  "knowsAbout": [
    "Managed IT Services",
    "Cybersecurity",
    "Cloud Migration",
    "IT Consulting",
    "Network Engineering",
    "Wi-Fi Design",
    "IT Asset Disposition",
    "Penetration Testing"
  ],
  "areaServed": [
    { "@type": "Country", "name": "Japan" },
    { "@type": "Place", "name": "Asia Pacific" },
    { "@type": "Place", "name": "Worldwide" }
  ],
  "slogan": "Enterprise Reliability, Startup Agility"
}

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About AKRIN - Enterprise Reliability, Startup Agility",
  "description": "Learn about AKRIN K.K., Tokyo's IT solutions provider combining enterprise-grade reliability with startup agility.",
  "url": "https://akrin.jp/about",
  "mainEntity": {
    "@id": "https://akrin.jp/#organization"
  }
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbData))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema)
        }}
      />
      <AboutClient />
    </>
  )
}

