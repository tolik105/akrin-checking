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

export default function ITServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbData))
        }}
      />
      <ServicesClient />
    </>
  )
}