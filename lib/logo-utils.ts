// Utility functions for logo management

export interface LogoConfig {
  name: string
  domain: string
  logo?: string
  fallbackName?: string
}

/**
 * Generate logo URL from logo.dev API
 * @param domain - Company domain (e.g., 'microsoft.com')
 * @param options - Additional options for the logo
 */
export function generateLogoUrl(
  domain: string, 
  options: {
    size?: number
    format?: 'png' | 'svg' | 'webp'
    token?: string
  } = {}
): string {
  const { size = 128, format = 'png', token } = options
  
  let url = `https://img.logo.dev/${domain}?size=${size}&format=${format}`
  
  if (token) {
    url += `&token=${token}`
  }
  
  return url
}

/**
 * Technology partners configuration - organized by priority/visibility
 */
export const TECH_PARTNERS: LogoConfig[] = [
  // Tier 1 - Most recognizable brands (displayed first)
  {
    name: "Microsoft",
    domain: "microsoft.com"
  },
  {
    name: "AWS",
    domain: "aws.amazon.com",
    fallbackName: "Amazon Web Services"
  },
  {
    name: "Google Cloud",
    domain: "cloud.google.com"
  },
  {
    name: "IBM",
    domain: "ibm.com"
  },
  {
    name: "Oracle",
    domain: "oracle.com"
  },
  {
    name: "Salesforce",
    domain: "salesforce.com"
  },
  {
    name: "Adobe",
    domain: "adobe.com"
  },
  {
    name: "VMware",
    domain: "vmware.com"
  },
  // Tier 2 - Additional partners
  {
    name: "OpenAI",
    domain: "openai.com"
  },
  {
    name: "Anthropic",
    domain: "anthropic.com"
  },
  {
    name: "HP",
    domain: "hp.com"
  },
  {
    name: "Dell",
    domain: "dell.com"
  },
  {
    name: "Cisco",
    domain: "cisco.com"
  },
  {
    name: "Red Hat",
    domain: "redhat.com"
  },
  {
    name: "Make.com",
    domain: "make.com"
  },
  {
    name: "n8n",
    domain: "n8n.io"
  }
]

/**
 * Generate logos array for carousel component
 */
export function generateLogosForCarousel(
  partners: LogoConfig[] = TECH_PARTNERS,
  options: {
    size?: number
    format?: 'png' | 'svg' | 'webp'
    token?: string
  } = {}
) {
  // Use your Logo.dev API key for high-quality HDPI logos
  const defaultOptions = {
    size: 400, // Higher resolution for crisp HDPI display
    format: 'png' as const,
    token: 'pk_UEr0qEZTRlmPOWFTe-G1XA',
    ...options
  }

  return partners.map(partner => ({
    name: partner.fallbackName || partner.name,
    logo: generateLogoUrl(partner.domain, defaultOptions)
  }))
}
