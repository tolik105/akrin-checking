import { Metadata } from "next"
import { generatePageMetadata } from '@/lib/metadata-helpers'
import ServicesClient from './services-client'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: "IT Services - Comprehensive Technology Solutions | Akrin",
  description: "Explore our IT services: managed IT, cybersecurity, cloud, consulting, and 24/7 support.",
  keywords: [
    'IT services Japan',
    'managed IT services',
    'cybersecurity solutions',
    'cloud services',
    'IT consulting'
  ],
  path: '/services',
  image: '/og-image.png'
})

const breadcrumbData = [
  { name: 'Home', url: 'https://akrin.jp' },
  { name: 'Services', url: 'https://akrin.jp/services' }
]

const servicesForSchema = [
  { name: 'Managed IT Support', url: 'https://akrin.jp/services/it-managed-services' },
  { name: 'IT Consulting & Project Management', url: 'https://akrin.jp/services/it-consulting-project-management' },
  { name: 'Cloud Infrastructure Solutions', url: 'https://akrin.jp/services/cloud-infrastructure' },
  { name: 'Cybersecurity & IT Security', url: 'https://akrin.jp/services/it-security' },
  { name: 'Network Penetration Testing', url: 'https://akrin.jp/services/network-penetration-testing' },
  { name: 'IT Security Services', url: 'https://akrin.jp/services/it-security' }
]

export default function ITServicesPage() {
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
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": servicesForSchema.map((s, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "Service",
                "name": s.name,
                "url": s.url
              }
            }))
          })
        }}
      />
      <ServicesClient />
    </>
  )
}