import ContactClient from './contact-client'
import { generateBreadcrumbSchema } from '@/lib/seo'
import { generatePageMetadata } from '@/lib/metadata-helpers'

export const metadata = generatePageMetadata({
  title: 'Contact Akrin | IT Services & Consulting Japan',
  description: 'Contact AKRIN for IT consulting and managed services in Japan. Cloud migration, cybersecurity, and 24/7 support. Tokyo office with nationwide coverage.',
  keywords: [
    'contact AKRIN',
    'IT consulting Japan',
    'managed IT services Tokyo',
    'IT support Japan',
    'cloud consulting Tokyo',
    'cybersecurity services Japan',
    'digital transformation Japan',
    'enterprise IT solutions',
    'IT outsourcing Japan',
    'business technology consulting',
    'IT infrastructure management',
    'Tokyo IT company',
    'Japan IT services',
    'professional IT support',
    'managed services provider Japan'
  ],
  path: '/contact',
  openGraph: {
    title: 'Contact AKRIN – IT Consulting & Managed Services in Japan',
    description: 'Get expert IT consulting and managed services in Japan. Professional solutions for cloud, security, and digital transformation.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ja_JP'
  }
})

const breadcrumbData = [
  { name: 'Home', url: 'https://akrin.jp' },
  { name: 'Contact', url: 'https://akrin.jp/contact' }
]

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact AKRIN – IT Consulting & Managed Services in Japan',
  description: 'Contact AKRIN for expert IT consulting and managed services in Japan. Professional IT solutions, cloud migration, cybersecurity, and 24/7 support.',
  url: 'https://akrin.jp/contact',
  mainEntity: {
    '@type': 'Organization',
    '@id': 'https://akrin.jp/#organization',
    name: 'AKRIN Co., Ltd.',
    alternateName: 'AKRIN',
    url: 'https://akrin.jp',
    logo: 'https://akrin.jp/logo.png',
    description: 'Leading IT consulting and managed services provider in Japan, specializing in cloud migration, cybersecurity, and digital transformation.',
    foundingDate: '2020',
    industry: 'Information Technology',
    numberOfEmployees: '50-100',
    serviceArea: {
      '@type': 'Country',
      name: 'Japan'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+81-3-6821-1223',
        contactType: 'customer service',
        availableLanguage: ['English', 'Japanese'],
        areaServed: ['JP', 'Worldwide'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
          validFrom: '2024-01-01',
          validThrough: '2025-12-31'
        }
      },
      {
        '@type': 'ContactPoint',
        email: 'support@akrin.jp',
        contactType: 'technical support',
        availableLanguage: ['English', 'Japanese'],
        areaServed: ['JP', 'Worldwide']
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2-4-15 Minami Aoyama',
      addressLocality: 'Minato City',
      addressRegion: 'Tokyo',
      postalCode: '107-0062',
      addressCountry: 'JP'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '35.6684',
      longitude: '139.7214'
    },
    sameAs: [
      'https://www.linkedin.com/company/akrin',
      'https://twitter.com/akrin_jp'
    ]
  }
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://akrin.jp/#service',
  name: 'AKRIN IT Consulting & Managed Services',
  description: 'Professional IT consulting and managed services in Japan, including cloud migration, cybersecurity, digital transformation, and 24/7 IT support.',
  provider: {
    '@id': 'https://akrin.jp/#organization'
  },
  serviceType: [
    'IT Consulting',
    'Managed IT Services',
    'Cloud Migration',
    'Cybersecurity Services',
    'Digital Transformation',
    'IT Infrastructure Management',
    'Technical Support'
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Japan'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IT Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IT Consulting',
          description: 'Strategic IT consulting for digital transformation and technology optimization'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Managed IT Services',
          description: 'Comprehensive managed IT services including monitoring, maintenance, and support'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cloud Migration',
          description: 'Expert cloud migration services for AWS, Azure, and Google Cloud platforms'
        }
      }
    ]
  }
}

export default function ContactPage() {
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
          __html: JSON.stringify(contactSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <ContactClient />
    </>
  )
}

