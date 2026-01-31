import { getServiceMetadata } from "@/lib/service-metadata"
import { generateBreadcrumbSchema } from "@/lib/seo"
import CloudInfrastructureClient from "./client"

export const metadata = getServiceMetadata('cloud-infrastructure')

const breadcrumbData = [
  { name: "Home", url: "https://akrin.jp" },
  { name: "Services", url: "https://akrin.jp/services" },
  { name: "Cloud Infrastructure", url: "https://akrin.jp/services/cloud-infrastructure" }
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://akrin.jp/services/cloud-infrastructure#service",
  "name": "Cloud Migration & Managed Cloud Services",
  "description": "Zero-downtime cloud migration to Azure, AWS, or GCP with 24/7 management and cost optimization. Secure, compliant cloud operations in Japan.",
  "provider": {
    "@type": "Organization",
    "@id": "https://akrin.jp/#organization",
    "name": "AKRIN K.K."
  },
  "serviceType": "Cloud Services",
  "areaServed": [
    { "@type": "Country", "name": "Japan" },
    { "@type": "Place", "name": "Asia Pacific" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cloud Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud Migration",
          "description": "Zero-downtime migration to Azure, AWS, or Google Cloud Platform"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud Management",
          "description": "24/7 cloud infrastructure monitoring and management"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "FinOps & Cost Optimization",
          "description": "Cloud cost optimization and financial operations management"
        }
      }
    ]
  },
  "additionalType": "https://schema.org/ProfessionalService"
}

export default function CloudInfrastructurePage() {
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
      <CloudInfrastructureClient />
    </>
  )
}