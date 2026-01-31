import { generatePageMetadata } from "@/lib/metadata-helpers"
import { generateBreadcrumbSchema } from "@/lib/seo"
import ITConsultingProjectManagementClient from "./client"

export const metadata = generatePageMetadata({
  title: 'IT Consulting & Project Management | AKRIN Japan',
  description: 'Strategy, PMO, and delivery for complex IT initiatives. AKRIN plans, budgets, and executes technology projects in Japan with zero day downtime.',
  keywords: ['IT consulting Japan', 'project management', 'PMO services', 'IT strategy', 'technology consulting', 'project delivery', 'IT governance', 'digital transformation'],
  path: '/services/it-consulting-project-management'
})

const breadcrumbData = [
  { name: "Home", url: "https://akrin.jp" },
  { name: "Services", url: "https://akrin.jp/services" },
  { name: "IT Consulting & Project Management", url: "https://akrin.jp/services/it-consulting-project-management" }
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://akrin.jp/services/it-consulting-project-management#service",
  "name": "IT Consulting & Project Management",
  "description": "Strategic IT consulting, PMO services, and project delivery for complex technology initiatives. Zero-downtime project execution in Japan.",
  "provider": {
    "@type": "Organization",
    "@id": "https://akrin.jp/#organization",
    "name": "AKRIN K.K."
  },
  "serviceType": "IT Consulting",
  "areaServed": [
    { "@type": "Country", "name": "Japan" },
    { "@type": "Place", "name": "Asia Pacific" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "IT Consulting Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "IT Strategy Consulting",
          "description": "Strategic IT planning and digital transformation roadmaps"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "PMO Services",
          "description": "Project Management Office setup and governance frameworks"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Project Delivery",
          "description": "End-to-end technology project execution and change management"
        }
      }
    ]
  },
  "additionalType": "https://schema.org/ProfessionalService"
}

export default function ITConsultingProjectManagementPage() {
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
      <ITConsultingProjectManagementClient />
    </>
  )
}
