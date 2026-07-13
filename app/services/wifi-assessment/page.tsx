import { generatePageMetadata } from "@/lib/metadata-helpers"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo"
import WifiAssessmentClient from "./client"

export const metadata = generatePageMetadata({
  title: 'Professional WiFi Assessment & Site Survey Japan | AKRIN',
  description: 'Ekahau-certified WiFi assessment, wireless site survey & testing services across Japan. Heatmap & spectrum analysis with a clear plan to fix dead zones.',
  keywords: ['WiFi assessment Japan', 'Wi-Fi site survey Japan', 'professional WiFi assessment services', 'WiFi testing services', 'wireless assessment', 'Ekahau certified', 'spectrum analysis', 'wireless network optimization', 'dead zone elimination', 'Wi-Fi performance'],
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

const faqSchema = generateFAQSchema([
  {
    question: "How long does a WiFi assessment take?",
    answer: "Assessment duration varies based on facility size and complexity, typically ranging from 1-3 days for standard offices to 1-2 weeks for large enterprise environments."
  },
  {
    question: "What equipment do you use for assessments?",
    answer: "We use professional-grade spectrum analyzers, wireless survey tools, and enterprise testing equipment to provide accurate and comprehensive assessments."
  },
  {
    question: "Do you provide detailed reports?",
    answer: "Yes, we provide comprehensive reports including heat maps, coverage analysis, performance metrics, and detailed recommendations for improvements."
  },
  {
    question: "Can you assess existing wireless networks?",
    answer: "Yes, we assess both existing wireless networks for optimization and new environments for wireless network planning and design."
  },
  {
    question: "What types of facilities do you assess?",
    answer: "We assess all types of facilities including offices, warehouses, manufacturing plants, retail spaces, healthcare facilities, and educational institutions."
  },
  {
    question: "Do you identify security vulnerabilities?",
    answer: "Yes, our assessments include wireless security evaluation, rogue access point detection, and identification of potential security risks."
  }
])

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <WifiAssessmentClient />
    </>
  )
}
