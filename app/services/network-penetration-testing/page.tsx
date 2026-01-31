import { getServiceMetadata } from "@/lib/service-metadata"
import { generateBreadcrumbSchema } from "@/lib/seo"
import NetworkPenetrationTestingClient from "./client"

export const metadata = getServiceMetadata('network-penetration-testing')

const breadcrumbData = [
  { name: "Home", url: "https://akrin.jp" },
  { name: "Services", url: "https://akrin.jp/services" },
  { name: "Network Penetration Testing", url: "https://akrin.jp/services/network-penetration-testing" }
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://akrin.jp/services/network-penetration-testing#service",
  "name": "Network Penetration Testing & Ethical Hacking",
  "description": "Identify security vulnerabilities before attackers do. OSCP-certified testers deliver actionable penetration test reports with remediation guidance.",
  "provider": {
    "@type": "Organization",
    "@id": "https://akrin.jp/#organization",
    "name": "AKRIN K.K."
  },
  "serviceType": "Security Testing",
  "areaServed": [
    { "@type": "Country", "name": "Japan" },
    { "@type": "Place", "name": "Asia Pacific" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Penetration Testing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Network Penetration Testing",
          "description": "Comprehensive internal and external network security assessments"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Application Testing",
          "description": "OWASP-aligned web application security testing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Vulnerability Assessment",
          "description": "Systematic vulnerability scanning and risk prioritization"
        }
      }
    ]
  },
  "additionalType": "https://schema.org/ProfessionalService"
}

export default function NetworkPenetrationTestingPage() {
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
      <NetworkPenetrationTestingClient />
    </>
  )
}