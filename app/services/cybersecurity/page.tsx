import { getServiceMetadata } from "@/lib/service-metadata"
import { generateBreadcrumbSchema } from "@/lib/seo"
import CybersecurityClient from "./client"

export const metadata = getServiceMetadata('cybersecurity')

const breadcrumbData = [
  { name: "Home", url: "https://akrin.jp" },
  { name: "Services", url: "https://akrin.jp/services" },
  { name: "Cybersecurity", url: "https://akrin.jp/services/cybersecurity" }
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://akrin.jp/services/cybersecurity#service",
  "name": "Cybersecurity Services & Managed Security Operations",
  "description": "Comprehensive cybersecurity services including security audits, continuous monitoring, SOC, and incident response. Proactive protection for businesses in Japan.",
  "provider": {
    "@type": "Organization",
    "@id": "https://akrin.jp/#organization",
    "name": "AKRIN K.K."
  },
  "serviceType": "Cybersecurity Services",
  "areaServed": [
    { "@type": "Country", "name": "Japan" },
    { "@type": "Place", "name": "Asia Pacific" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cybersecurity Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security Operations Center (SOC)",
          "description": "24/7 security monitoring with SIEM and XDR technologies"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security Audits",
          "description": "Comprehensive security assessments aligned with ISO 27001 and industry standards"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Incident Response",
          "description": "Rapid incident response and forensic investigation services"
        }
      }
    ]
  },
  "additionalType": "https://schema.org/ProfessionalService"
}

export default function CybersecurityPage() {
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
      <CybersecurityClient />
    </>
  )
}