import HomeClient from './home-client'
import { generateFAQSchema, generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/seo'
import { generatePageMetadata } from '@/lib/metadata-helpers'
import { HeroStatic } from '@/components/hero-static'
import enCommon from '../public/locales/en/common.json'

export const metadata = generatePageMetadata({
  title: 'Akrin - Leading IT Solutions Provider in Japan | Managed Services & Support',
  description: 'Transform your business with Akrin\'s comprehensive IT solutions. We offer managed services, cybersecurity, cloud migration, and 24/7 support for businesses in Japan and globally.',
  keywords: [
    'IT solutions Japan',
    'managed IT services Tokyo',
    'cybersecurity Japan',
    'cloud migration services',
    'IT support Tokyo',
    'IT consulting Japan',
    'digital transformation',
    'enterprise IT solutions',
    '24/7 IT support',
    'Japanese IT company'
  ],
  path: '/'
})

// Generate FAQ schema for homepage
const faqData = [
  {
    question: "What IT services does AKRIN provide in Japan?",
    answer: "AKRIN delivers end-to-end technology solutions—managed IT services, 24/7 help-desk support, cybersecurity & compliance, cloud migration, onsite support, wireless surveys, and custom development—so you can run and scale your business without juggling multiple vendors."
  },
  {
    question: "Can AKRIN deploy onsite engineers quickly?",
    answer: "Yes. Our Tokyo-based field team can be on-site anywhere in Japan—often same-day in the Kanto region and within 24 hours nationwide—for critical incidents, project roll-outs, or scheduled maintenance."
  },
  {
    question: "Does AKRIN offer 24×7 monitoring and support?",
    answer: "Absolutely. We operate a round-the-clock service desk and network-operations centre that monitors your infrastructure, responds to alerts, and resolves tickets in real time—even on Japanese public holidays."
  },
  {
    question: "How does AKRIN keep my data secure and compliant?",
    answer: "Our security stack includes endpoint protection, zero-trust access, and SIEM monitoring aligned with ISO 27001 best practices. We help you meet Japan's APPI, GDPR, and industry-specific standards through continuous patching, vulnerability management, and audit-ready documentation."
  },
  {
    question: "Can AKRIN support bilingual (English & Japanese) environments?",
    answer: "Yes. All consultants and help-desk staff are bilingual. We provide tickets, reports, and meetings in either language—ideal for multinational teams operating in Japan."
  },
  {
    question: "What is the typical timeline for a cloud-migration project?",
    answer: "A standard mid-size migration (50–150 workloads) takes 4–8 weeks: assessment (1 wk), planning (1 wk), pilot (1 wk), phased cut-over (1–3 wks), optimisation (1 wk). Critical apps remain online thanks to AKRIN's zero-downtime methodology."
  },
  {
    question: "Do you perform wireless surveys before access-point upgrades?",
    answer: "Yes. Our Ekahau-powered wireless surveys map coverage, interference, and capacity so we can recommend the exact AP count and placement—eliminating dead zones and costly re-installs."
  }
]

export default function Home() {
  const heroCopy = enCommon.hero
  const schemas = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateFAQSchema(faqData)
  ]

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
      <HeroStatic
        title={heroCopy.title}
        subtitle={heroCopy.subtitle}
        ctaLabel={heroCopy.cta}
        ctaHref="/contact"
      />
      <HomeClient />
    </>
  )
}