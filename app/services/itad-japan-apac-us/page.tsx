import { generatePageMetadata } from "@/lib/metadata-helpers"
import { generateBreadcrumbSchema } from "@/lib/seo"
import ITADPageClient from "./client"

export const metadata = generatePageMetadata({
  title: "Secure ITAD Services in Japan & APAC | Akrin",
  description:
    "Enterprise-grade IT asset disposition: secure data destruction, certified e-waste recycling, and compliant remarketing services across Japan, APAC & US. Full chain of custody.",
  keywords: [
    "secure data destruction Japan",
    "enterprise ITAD services APAC",
    "IT asset disposition Japan",
    "certified e-waste recycling",
    "data sanitization services",
    "hard drive destruction Japan",
    "NIST 800-88 compliant",
    "R2 certified ITAD",
    "corporate IT disposal",
    "asset remarketing Japan"
  ],
  path: "/services/itad-japan-apac-us",
  image: "/og-image.png"
})

const breadcrumbData = [
  { name: "Home", url: "https://akrin.jp" },
  { name: "Services", url: "https://akrin.jp/services" },
  { name: "ITAD Services", url: "https://akrin.jp/services/itad-japan-apac-us" }
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://akrin.jp/services/itad-japan-apac-us#service",
  "name": "IT Asset Disposition (ITAD) Services",
  "description": "Enterprise-grade IT asset disposition including secure data destruction, certified e-waste recycling, and compliant remarketing services across Japan, APAC, and US regions.",
  "provider": {
    "@type": "Organization",
    "@id": "https://akrin.jp/#organization",
    "name": "AKRIN K.K."
  },
  "serviceType": "IT Asset Disposition",
  "areaServed": [
    { "@type": "Country", "name": "Japan" },
    { "@type": "Continent", "name": "Asia" },
    { "@type": "Country", "name": "United States" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "ITAD Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Secure Data Destruction",
          "description": "On-site and off-site data destruction with certified sanitization and physical destruction options"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "E-Waste Recycling",
          "description": "Environmentally compliant IT equipment recycling with full chain of custody documentation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Asset Remarketing",
          "description": "Maximize value recovery through certified refurbishment and remarketing programs"
        }
      }
    ]
  },
  "additionalType": "https://schema.org/ProfessionalService"
}

export default function ITADPage() {
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
      <ITADPageClient />
    </>
  )
}




