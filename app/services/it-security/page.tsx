import { getServiceMetadata } from "@/lib/service-metadata"
import { generateBreadcrumbSchema } from "@/lib/seo"
import ITSecurityClient from "./client"

export const metadata = getServiceMetadata('it-security')

const breadcrumbData = [
  { name: "Home", url: "https://akrin.jp" },
  { name: "Services", url: "https://akrin.jp/services" },
  { name: "IT Security", url: "https://akrin.jp/services/it-security" }
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://akrin.jp/services/it-security#service",
  "name": "IT Security Services: Endpoint, Email & Data Protection",
  "description": "Comprehensive IT security with layered protection: EDR, M365 security, backup, disaster recovery, and policy enforcement for businesses in Japan.",
  "provider": {
    "@type": "Organization",
    "@id": "https://akrin.jp/#organization",
    "name": "AKRIN K.K."
  },
  "serviceType": "IT Security",
  "areaServed": [
    { "@type": "Country", "name": "Japan" },
    { "@type": "Place", "name": "Asia Pacific" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "IT Security Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Endpoint Protection",
          "description": "EDR and endpoint security solutions for comprehensive device protection"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Email Security",
          "description": "M365 and email security with anti-phishing and spam protection"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Backup & Disaster Recovery",
          "description": "Data backup solutions and disaster recovery planning"
        }
      }
    ]
  },
  "additionalType": "https://schema.org/ProfessionalService"
}

export default function ITSecurityPage() {
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
      <ITSecurityClient />
    </>
  )
}