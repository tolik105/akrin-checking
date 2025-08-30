import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  path?: string
  image?: string
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  path = '',
  image = '/og-image.png'
}: SEOProps): Metadata {
  const siteUrl = 'https://akrin.jp'
  const fullUrl = `${siteUrl}${path}`
  
  return {
    title: {
      default: title,
      template: '%s | Akrin IT Solutions'
    },
    description,
    keywords: [
      'IT solutions Japan',
      'managed IT services',
      'cybersecurity Japan',
      'cloud migration',
      'IT support Tokyo',
      ...keywords
    ],
    authors: [{ name: 'Akrin Co., Ltd.' }],
    creator: 'Akrin Co., Ltd.',
    publisher: 'Akrin Co., Ltd.',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'Akrin IT Solutions',
      locale: 'en_US',
      alternateLocale: 'ja_JP',
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@akrin',
      images: [image],
    },
    alternates: {
      canonical: fullUrl,
      languages: {
        'en': fullUrl,
        'ja': `${siteUrl}/ja${path}`,
      }
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function generateArticleSchema(data: {
  title: string
  description: string
  author: string
  datePublished: string
  dateModified?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.description,
    author: {
      '@type': 'Person',
      name: data.author
    },
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    publisher: {
      '@type': 'Organization',
      name: 'Akrin Co., Ltd.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://akrin.jp/akrin-logo.svg'
      }
    },
    image: data.image || 'https://akrin.jp/og-image.png',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://akrin.jp'
    }
  }
}

export function generateServiceSchema(data: {
  name: string
  description: string
  provider?: string
  areaServed?: string[]
  serviceType?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.name,
    description: data.description,
    provider: {
      '@type': 'Organization',
      name: data.provider || 'Akrin Co., Ltd.',
      url: 'https://akrin.jp'
    },
    areaServed: data.areaServed || ['JP', 'Worldwide'],
    serviceType: data.serviceType || 'IT Services'
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Akrin Co., Ltd.',
    alternateName: 'AKRIN',
    url: 'https://akrin.jp',
    logo: 'https://akrin.jp/logo.png',
    description: 'Leading IT solutions provider in Japan offering managed services, cybersecurity, cloud migration, and 24/7 support for businesses.',
    foundingDate: '2010',
    founders: [{
      '@type': 'Person',
      name: 'Akrin Founders'
    }],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tokyo',
      addressRegion: 'Tokyo',
      addressCountry: 'JP'
    },
    contactPoint: [{
      '@type': 'ContactPoint',
      contactType: 'customer support',
      availableLanguage: ['English', 'Japanese'],
      areaServed: ['JP', 'Worldwide']
    }],
    sameAs: [
      'https://twitter.com/akrin',
      'https://www.linkedin.com/company/akrin-kk',
      'https://facebook.com/akrin'
    ],
    knowsAbout: [
      'IT Solutions',
      'Managed IT Services',
      'Cybersecurity',
      'Cloud Migration',
      'IT Support',
      'Digital Transformation',
      'AI Solutions',
      'Web Development'
    ],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '35.6762',
        longitude: '139.6503'
      },
      geoRadius: '1000000'
    }
  }
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://akrin.jp',
    name: 'Akrin IT Solutions',
    image: 'https://akrin.jp/og-image.png',
    url: 'https://akrin.jp',
    telephone: '+81-3-1234-5678',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Business District',
      addressLocality: 'Tokyo',
      addressRegion: 'Tokyo',
      postalCode: '100-0001',
      addressCountry: 'JP'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.6762,
      longitude: 139.6503
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '124'
    }
  }
}