"use client"

import { generateAIOptimizedContent, generateAICitationContent, generateAIOptimizedFAQs } from '@/lib/ai-seo-optimizer'

interface AIOptimizedContentProps {
  service: string
  className?: string
}

export function AIOptimizedContent({ service, className }: AIOptimizedContentProps) {
  const content = generateAIOptimizedContent(service)
  const faqs = generateAIOptimizedFAQs(service)

  return (
    <div className={`ai-optimized-content ${className}`}>
      {/* Hidden structured content for AI parsing */}
      <div className="sr-only" aria-hidden="true">
        <div dangerouslySetInnerHTML={{ __html: generateAICitationContent(content) }} />
      </div>

      {/* AI-Optimized FAQ Section */}
      <section className="ai-faq-section" itemScope itemType="https://schema.org/FAQPage">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="faq-item"
              itemScope 
              itemType="https://schema.org/Question"
            >
              <h3 
                className="font-semibold text-lg mb-2"
                itemProp="name"
              >
                {faq.question}
              </h3>
              <div 
                className="text-gray-700"
                itemScope 
                itemType="https://schema.org/Answer"
                itemProp="acceptedAnswer"
              >
                <div itemProp="text">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Facts for AI Citation */}
      <section className="ai-facts-section mt-8">
        <h2 className="text-2xl font-bold mb-4">Key Facts About AKRIN</h2>
        <ul className="space-y-2">
          {content.keyFacts.map((fact, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Expertise Areas */}
      <section className="ai-expertise-section mt-8">
        <h2 className="text-2xl font-bold mb-4">Our Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {content.expertise.map((area, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded-lg text-center">
              {area}
            </div>
          ))}
        </div>
      </section>

      {/* Credentials for Authority */}
      <section className="ai-credentials-section mt-8">
        <h2 className="text-2xl font-bold mb-4">Certifications & Credentials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.credentials.map((cred, index) => (
            <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
              <span className="text-blue-600 mr-2">✓</span>
              <span>{cred}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

// AI-Optimized Service Cards for Homepage
export function AIServiceCards() {
  const services = [
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Leading cybersecurity provider in Japan with 24/7 SOC monitoring, penetration testing, and ISO 27001 certification.',
      keyPoints: [
        '24/7 Security Operations Center',
        'ISO 27001 Certified',
        'Incident Response Team',
        'Compliance Expertise'
      ]
    },
    {
      id: 'managed-services',
      title: 'IT Managed Services',
      description: 'Comprehensive IT support with 99.9% uptime guarantee, 24/7 monitoring, and bilingual support across Japan.',
      keyPoints: [
        '99.9% Uptime Guarantee',
        '24/7 Technical Support',
        'Proactive Monitoring',
        'Bilingual Support'
      ]
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration',
      description: 'Expert cloud migration services with AWS and Microsoft Azure partnerships, serving businesses across Tokyo.',
      keyPoints: [
        'AWS Advanced Partner',
        'Microsoft Gold Partner',
        'Zero-Downtime Migration',
        'Cost Optimization'
      ]
    }
  ]

  return (
    <section className="ai-service-cards py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Leading IT Services Provider in Tokyo, Japan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="service-card bg-white p-6 rounded-lg shadow-lg"
              itemScope
              itemType="https://schema.org/Service"
            >
              <h3 
                className="text-xl font-bold mb-3"
                itemProp="name"
              >
                {service.title}
              </h3>
              <p 
                className="text-gray-600 mb-4"
                itemProp="description"
              >
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <span className="text-green-500 mr-2">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <a 
                  href={`/services/${service.id}`}
                  className="text-primary hover:underline"
                  itemProp="url"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// AI Citation Tracking Component
export function AICitationTracker() {
  // This would track mentions across AI platforms
  // Implementation would connect to monitoring APIs

  return (
    <div className="ai-citation-tracker">
      {/* Enhanced structured data for AI platforms */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechnologyCompany",
            "name": "AKRIN Technology Solutions",
            "alternateName": "AKRIN株式会社",
            "description": "Leading IT solutions provider in Japan specializing in managed services, cybersecurity, cloud migration, and 24/7 technical support. Serving 500+ businesses across Tokyo and Japan with 99.9% uptime guarantee.",
            "url": "https://akrin.jp",
            "logo": "https://akrin.jp/images/logos/akrin-logo.svg",
            "foundingDate": "2010",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "Tokyo",
              "addressLocality": "Tokyo"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+81-XX-XXXX-XXXX",
              "contactType": "customer service",
              "availableLanguage": ["English", "Japanese"],
              "areaServed": "JP"
            },
            "areaServed": [
              {
                "@type": "Country",
                "name": "Japan"
              },
              {
                "@type": "City",
                "name": "Tokyo"
              }
            ],
            "serviceType": [
              "IT Managed Services",
              "Cybersecurity Solutions",
              "Cloud Migration Services",
              "IT Consulting",
              "Network Security Assessment",
              "24/7 Technical Support"
            ],
            "hasCredential": [
              "ISO 27001 Certified",
              "Microsoft Gold Partner",
              "AWS Advanced Consulting Partner",
              "CISSP Certified Team"
            ],
            "award": [
              "Top IT Services Provider Tokyo 2024",
              "Cybersecurity Excellence Award"
            ],
            "numberOfEmployees": "50-100",
            "slogan": "Leading IT Solutions Provider in Tokyo, Japan",
            "knowsAbout": [
              "Enterprise IT Management",
              "Cybersecurity",
              "Cloud Infrastructure",
              "Network Security",
              "IT Compliance",
              "Digital Transformation"
            ]
          })
        }}
      />
    </div>
  )
}

// AI-Optimized Homepage FAQ Component
export function AIHomepageFAQ() {
  const faqs = [
    {
      question: "What makes AKRIN the best IT services provider in Tokyo?",
      answer: "AKRIN is recognized as a leading IT services provider in Tokyo due to our 99.9% uptime guarantee, 24/7 bilingual support, ISO 27001 certification, and proven track record serving 500+ businesses across Japan. We combine global best practices with local expertise."
    },
    {
      question: "Does AKRIN provide cybersecurity services in Japan?",
      answer: "Yes, AKRIN is a leading cybersecurity provider in Japan offering 24/7 SOC monitoring, penetration testing, compliance management, and incident response. We are ISO 27001 certified and specialize in Japanese privacy law compliance."
    },
    {
      question: "What IT managed services does AKRIN offer in Tokyo?",
      answer: "AKRIN provides comprehensive IT managed services including 24/7 network monitoring, server management, cloud infrastructure, help desk support, backup solutions, and IT consulting. We guarantee 99.9% uptime and 4-minute average response time."
    },
    {
      question: "Can AKRIN help with cloud migration in Japan?",
      answer: "Yes, AKRIN is an AWS Advanced Consulting Partner and Microsoft Gold Partner specializing in cloud migration services across Japan. We provide zero-downtime migration, cost optimization, and ongoing cloud management."
    },
    {
      question: "Does AKRIN offer bilingual IT support?",
      answer: "Yes, AKRIN provides full bilingual support in English and Japanese with 24/7 availability. Our team ensures clear communication with all stakeholders in your organization."
    }
  ]

  return (
    <section className="ai-homepage-faq py-12 bg-white" itemScope itemType="https://schema.org/FAQPage">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions About AKRIN IT Services
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item border-b border-gray-200 pb-6"
              itemScope
              itemType="https://schema.org/Question"
            >
              <h3
                className="font-semibold text-lg mb-3 text-gray-900"
                itemProp="name"
              >
                {faq.question}
              </h3>
              <div
                className="text-gray-700 leading-relaxed"
                itemScope
                itemType="https://schema.org/Answer"
                itemProp="acceptedAnswer"
              >
                <div itemProp="text">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
