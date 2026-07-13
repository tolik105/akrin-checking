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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is IT asset disposition (ITAD)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IT asset disposition (ITAD) is the secure, compliant process of retiring IT equipment, covering data destruction, recycling, and resale. AKRIN provides end-to-end ITAD services across Japan, APAC, and the US with full chain of custody documentation."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide on-site data destruction in Japan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. AKRIN offers both on-site and off-site data destruction in Japan, including certified data sanitization aligned with NIST 800-88 and physical destruction, with a certificate of destruction issued for every asset."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas do you serve for ITAD projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve organizations across Japan, including Tokyo, Osaka, and Kobe, as well as the wider APAC region and the United States, supporting multi-site consolidations and cross-border ITAD projects."
      }
    },
    {
      "@type": "Question",
      "name": "What documentation do we receive after disposal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You receive full chain of custody records, certificates of data destruction, and detailed asset-level reporting for audit and compliance purposes."
      }
    },
    {
      "@type": "Question",
      "name": "Can we recover value from retired IT equipment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Through certified refurbishment and remarketing programs, AKRIN helps maximize value recovery from retired IT assets, offsetting disposal costs."
      }
    }
  ]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <ITADPageClient />
    </>
  )
}




