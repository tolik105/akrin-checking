import { getServiceMetadata } from "@/lib/service-metadata"
import { generateBreadcrumbSchema } from "@/lib/seo"
import ITManagedServicesClient from "./client"
import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const baseMetadata = getServiceMetadata('it-managed-services')
  return {
    ...baseMetadata,
    alternates: {
      canonical: 'https://akrin.jp/services/it-managed-services',
      languages: {
        'en': 'https://akrin.jp/services/it-managed-services',
        'ja': 'https://akrin.jp/ja/services/it-managed-services',
        'x-default': 'https://akrin.jp/services/it-managed-services'
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
    }
  }
}

const breadcrumbData = [
  { name: "Home", url: "https://akrin.jp" },
  { name: "Services", url: "https://akrin.jp/services" },
  { name: "Managed IT Services", url: "https://akrin.jp/services/it-managed-services" }
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://akrin.jp/services/it-managed-services#service",
  "name": "Managed IT Services & 24/7 Support",
  "description": "Proactive IT monitoring, unlimited helpdesk support, and on-site services. Cut IT costs 30-50% and achieve 99.9% uptime with Japan's trusted MSP.",
  "provider": {
    "@type": "Organization",
    "@id": "https://akrin.jp/#organization",
    "name": "AKRIN K.K."
  },
  "serviceType": "Managed IT Services",
  "areaServed": [
    { "@type": "Country", "name": "Japan" },
    { "@type": "Place", "name": "Asia Pacific" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Managed IT Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "24/7 IT Monitoring",
          "description": "Proactive infrastructure monitoring with automated alerting and incident response"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Helpdesk Support",
          "description": "Unlimited bilingual helpdesk support in English and Japanese"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "On-Site Support",
          "description": "Rapid on-site technical support across Japan"
        }
      }
    ]
  },
  "additionalType": "https://schema.org/ProfessionalService"
}

export default function ITManagedServicesPage() {
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
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <ITManagedServicesClient />
    </>
  )
}
