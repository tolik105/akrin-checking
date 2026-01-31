import { generatePageMetadata } from "@/lib/metadata-helpers"
import { generateBreadcrumbSchema } from "@/lib/seo"
import WifiAssessmentClient from "./client"

export const metadata = generatePageMetadata({
  title: 'Professional WiFi Assessment Japan | Akrin',
  description: 'Ekahau-certified Wi‑Fi assessments, spectrum analysis, and remediation plans. Eliminate dead zones and slow speeds across your offices.',
  keywords: ['Wi-Fi site survey Japan', 'wireless optimization', 'Ekahau certified', 'Wi-Fi assessment', 'spectrum analysis', 'wireless network optimization', 'dead zone elimination', 'Wi-Fi performance'],
  path: '/services/wifi-assessment'
})

const breadcrumbData = [
  { name: "Home", url: "https://akrin.jp" },
  { name: "Services", url: "https://akrin.jp/services" },
  { name: "Wi-Fi Assessment", url: "https://akrin.jp/services/wifi-assessment" }
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://akrin.jp/services/wifi-assessment#service",
  "name": "Wi-Fi Site Survey & Performance Optimization",
  "description": "Ekahau-certified Wi-Fi assessments with spectrum analysis and remediation plans. Eliminate dead zones and optimize wireless performance across your facilities.",
  "provider": {
    "@type": "Organization",
    "@id": "https://akrin.jp/#organization",
    "name": "AKRIN K.K."
  },
  "serviceType": "Wi-Fi Assessment",
  "areaServed": [
    { "@type": "Country", "name": "Japan" },
    { "@type": "Place", "name": "Asia Pacific" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Wi-Fi Assessment Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wi-Fi Site Survey",
          "description": "Comprehensive wireless site surveys with heatmap analysis"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Spectrum Analysis",
          "description": "RF spectrum analysis to identify interference sources"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Optimization",
          "description": "Remediation plans and optimization recommendations"
        }
      }
    ]
  },
  "additionalType": "https://schema.org/ProfessionalService"
}

export default function WifiAssessmentPage() {
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
      <WifiAssessmentClient />
    </>
  )
}