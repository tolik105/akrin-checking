import { Metadata } from 'next'

interface ServiceMetadata {
  slug: string
  title: string
  description: string
  keywords: string[]
}

export const serviceMetadata: Record<string, ServiceMetadata> = {
  'it-managed-services': {
    slug: 'it-managed-services',
    title: 'Managed IT Services & 24/7 Support | AKRIN Japan MSP',
    description: 'Proactive monitoring, unlimited helpdesk, and on-site support. Cut IT costs 30–50% and hit 99.9% uptime with AKRIN—Japan\'s trusted MSP.',
    keywords: ['managed IT services Japan', '24/7 IT support', 'MSP Japan', 'IT monitoring', 'helpdesk support', 'proactive IT management', 'IT cost reduction', 'bilingual IT support']
  },
  'it-consulting-project-management': {
    slug: 'it-consulting-project-management',
    title: 'IT Consulting & Project Management | AKRIN Japan',
    description: 'Strategy, PMO, and delivery for complex IT initiatives. AKRIN plans, budgets, and executes technology projects in Japan with zero day downtime.',
    keywords: ['IT consulting Japan', 'project management', 'PMO services', 'IT strategy', 'technology consulting', 'project delivery', 'IT governance', 'digital transformation']
  },
  'cloud-infrastructure': {
    slug: 'cloud-infrastructure',
    title: 'Cloud Migration & Managed Cloud Services | AKRIN Japan',
    description: 'Move to Azure, AWS, or GCP with zero‑downtime migration, 24/7 management, and cost optimization. AKRIN delivers secure, compliant cloud operations in Japan.',
    keywords: ['cloud migration Japan', 'Azure services', 'AWS migration', 'GCP services', 'cloud management', 'cloud optimization', 'FinOps', 'cloud security Japan']
  },
  'cybersecurity': {
    slug: 'cybersecurity',
    title: 'Cybersecurity Services & Managed Security Operations | AKRIN',
    description: 'Security audits, continuous monitoring, SOC, and incident response. AKRIN protects your business with proactive cybersecurity in Japan.',
    keywords: ['cybersecurity Japan', 'security operations center', 'SOC services', 'incident response', 'security monitoring', 'SIEM XDR', 'ISO 27001', 'security audit Japan']
  },
  'network-penetration-testing': {
    slug: 'network-penetration-testing',
    title: 'Network Penetration Testing & Ethical Hacking | AKRIN Japan',
    description: 'Identify vulnerabilities before attackers do. AKRIN\'s certified testers deliver actionable pen test reports and remediation guidance.',
    keywords: ['penetration testing Japan', 'pen test', 'ethical hacking', 'vulnerability assessment', 'OSCP certified', 'security testing', 'network security', 'OWASP testing']
  },
  'wifi-assessment': {
    slug: 'wifi-assessment',
    title: 'Wi‑Fi Site Survey & Performance Optimization | AKRIN Japan',
    description: 'Ekahau-certified Wi‑Fi assessments, spectrum analysis, and remediation plans. Eliminate dead zones and slow speeds across your offices.',
    keywords: ['Wi-Fi site survey Japan', 'wireless assessment', 'Ekahau certified', 'spectrum analysis', 'Wi-Fi optimization', 'wireless network design', 'heatmap analysis', 'Wi-Fi troubleshooting']
  },
  'wifi-design': {
    slug: 'wifi-design',
    title: 'Enterprise Wi‑Fi Design & Deployment Services | AKRIN',
    description: 'Scalable wireless network design for offices, warehouses, and campuses. Predictive modeling, AP placement, and turnkey deployment.',
    keywords: ['enterprise Wi-Fi design', 'wireless deployment Japan', 'Wi-Fi installation', 'predictive design', 'AP placement', 'high-density Wi-Fi', 'Meraki Cisco Aruba', 'wireless infrastructure']
  },
  'it-security': {
    slug: 'it-security',
    title: 'IT Security Services: Endpoint, Email & Data Protection | AKRIN',
    description: 'Shield endpoints, email, and data with AKRIN\'s layered IT security—EDR, M365 security, backup, and policy enforcement.',
    keywords: ['IT security Japan', 'endpoint protection', 'EDR services', 'email security', 'M365 security', 'backup disaster recovery', 'security policies', 'data protection Japan']
  }
}

export function getServiceMetadata(slug: string): Metadata {
  const service = serviceMetadata[slug]
  if (!service) {
    return {
      title: 'IT Service',
      description: 'Professional IT services by Akrin'
    }
  }

  return {
    title: service.title,
    description: service.description,
    keywords: [...service.keywords, 'Akrin', 'IT services Japan'],
    openGraph: {
      title: service.title,
      description: service.description,
      url: `https://akrin.jp/services/${slug}`,
      siteName: 'Akrin IT Solutions',
      locale: 'en_US',
      alternateLocale: 'ja_JP',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: service.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: service.description,
      images: ['/og-image.png'],
    },
    alternates: {
      canonical: `https://akrin.jp/services/${slug}`,
      languages: {
        'en': `https://akrin.jp/services/${slug}`,
        'ja': `https://akrin.jp/ja/services/${slug}`,
      }
    },
  }
}