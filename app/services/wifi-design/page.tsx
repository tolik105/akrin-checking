import { generatePageMetadata } from "@/lib/metadata-helpers"
import { generateBreadcrumbSchema } from "@/lib/seo"
import WifiDesignClient from "./client"

export const metadata = generatePageMetadata({
  title: 'Enterprise Wi‑Fi Design & Deployment Services | AKRIN',
  description: 'Scalable wireless network design for offices, warehouses, and campuses. Predictive modeling, AP placement, and turnkey deployment.',
  keywords: ['Enterprise Wi-Fi design Japan', 'wireless network deployment', 'predictive WiFi modeling', 'AP placement', 'enterprise wireless', 'WiFi architecture', 'turnkey WiFi deployment', 'wireless infrastructure'],
  path: '/services/wifi-design'
})

const breadcrumbData = [
  { name: "Home", url: "https://akrin.jp" },
  { name: "Services", url: "https://akrin.jp/services" },
  { name: "Wi-Fi Design", url: "https://akrin.jp/services/wifi-design" }
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://akrin.jp/services/wifi-design#service",
  "name": "Enterprise Wi-Fi Design & Deployment",
  "description": "Scalable wireless network design for offices, warehouses, and campuses. Predictive modeling, optimal AP placement, and turnkey deployment services.",
  "provider": {
    "@type": "Organization",
    "@id": "https://akrin.jp/#organization",
    "name": "AKRIN K.K."
  },
  "serviceType": "Wi-Fi Design & Deployment",
  "areaServed": [
    { "@type": "Country", "name": "Japan" },
    { "@type": "Place", "name": "Asia Pacific" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Wi-Fi Design Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Predictive Wi-Fi Design",
          "description": "Advanced predictive modeling for optimal wireless coverage"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AP Placement Planning",
          "description": "Strategic access point placement for maximum performance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Turnkey Deployment",
          "description": "Complete installation and configuration services"
        }
      }
    ]
  },
  "additionalType": "https://schema.org/ProfessionalService"
}

export default function WifiDesignPage() {
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
      <WifiDesignClient />
    </>
  )
}