/**
 * Global SEO Optimizer for AKRIN Website
 * 
 * This module provides comprehensive SEO optimization functions that can be
 * applied across all pages of the AKRIN website for maximum search visibility.
 */

import { serankingAPI } from './seranking-api';
import { SEOMetadata } from './seo-utils';

interface PageSEOConfig {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  type: 'homepage' | 'service' | 'about' | 'contact' | 'blog' | 'other';
  priority: number;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  structuredDataType?: string;
  customMetadata?: Record<string, any>;
}

interface GlobalSEOOptimization {
  pages: PageSEOConfig[];
  globalKeywords: string[];
  brandKeywords: string[];
  locationKeywords: string[];
  industryKeywords: string[];
  competitorKeywords: string[];
}

/**
 * AKRIN Website Global SEO Configuration
 */
export const AKRIN_SEO_CONFIG: GlobalSEOOptimization = {
  pages: [
    {
      path: '/',
      title: 'AKRIN - Leading IT Solutions Provider in Japan | Managed Services & Support',
      description: 'Transform your business with AKRIN\'s comprehensive IT solutions. We offer managed services, cybersecurity, cloud migration, and 24/7 support for businesses in Japan and globally.',
      keywords: ['IT solutions Japan', 'managed IT services Tokyo', 'cybersecurity Japan', 'cloud migration services', 'IT support Tokyo'],
      type: 'homepage',
      priority: 1.0,
      changeFrequency: 'weekly',
      structuredDataType: 'Organization'
    },
    {
      path: '/about',
      title: 'About AKRIN - Your Trusted IT Partner Since Establishment',
      description: 'Learn about AKRIN\'s mission, values, and commitment to delivering exceptional IT solutions. We combine Japanese precision with global innovation to transform businesses.',
      keywords: ['about AKRIN', 'IT company Japan', 'Tokyo IT services', 'Japanese technology company'],
      type: 'about',
      priority: 0.8,
      changeFrequency: 'monthly',
      structuredDataType: 'AboutPage'
    },
    {
      path: '/services',
      title: 'IT Services - Comprehensive Technology Solutions | AKRIN',
      description: 'Explore our full range of IT services including managed IT, cybersecurity, cloud solutions, consulting, and 24/7 support. Professional technology solutions for businesses in Japan.',
      keywords: ['IT services Japan', 'managed IT services', 'cybersecurity solutions', 'cloud services'],
      type: 'service',
      priority: 0.9,
      changeFrequency: 'monthly',
      structuredDataType: 'Service'
    },
    {
      path: '/services/it-managed-services',
      title: 'Managed IT Services & 24/7 Support | AKRIN Japan MSP',
      description: 'Proactive monitoring, unlimited helpdesk, and on-site support. Cut IT costs 30–50% and hit 99.9% uptime with AKRIN—Japan\'s trusted MSP.',
      keywords: ['managed IT services Japan', '24/7 IT support', 'MSP Japan', 'IT monitoring', 'helpdesk support'],
      type: 'service',
      priority: 0.8,
      changeFrequency: 'monthly',
      structuredDataType: 'Service'
    },
    {
      path: '/services/it-consulting-project-management',
      title: 'IT Consulting & Project Management | AKRIN Japan',
      description: 'Strategy, PMO, and delivery for complex IT initiatives. AKRIN plans, budgets, and executes technology projects in Japan with zero day downtime.',
      keywords: ['IT consulting Japan', 'project management', 'PMO services', 'IT strategy', 'technology consulting'],
      type: 'service',
      priority: 0.8,
      changeFrequency: 'monthly',
      structuredDataType: 'Service'
    },
    {
      path: '/contact',
      title: 'Contact AKRIN - Get Expert IT Solutions Today',
      description: 'Contact AKRIN for professional IT solutions and support. Get a free consultation and discover how we can transform your business technology infrastructure.',
      keywords: ['contact AKRIN', 'IT consultation Japan', 'get IT support', 'business technology help'],
      type: 'contact',
      priority: 0.7,
      changeFrequency: 'monthly',
      structuredDataType: 'ContactPage'
    },
    {
      path: '/blog',
      title: 'AKRIN Blog - IT Insights & Technology Trends',
      description: 'Discover insightful resources and expert advice from our seasoned team. Read about cybersecurity, cloud solutions, IT infrastructure, and digital transformation.',
      keywords: ['IT blog Japan', 'technology insights', 'cybersecurity tips', 'cloud computing news'],
      type: 'blog',
      priority: 0.9,
      changeFrequency: 'daily',
      structuredDataType: 'Blog'
    },

  ],
  globalKeywords: [
    'AKRIN',
    'IT solutions',
    'technology services',
    'business IT',
    'enterprise solutions',
    'digital transformation',
    'IT consulting',
    'technology consulting'
  ],
  brandKeywords: [
    'AKRIN',
    'AKRIN Technologies',
    'AKRIN IT',
    'AKRIN Japan',
    'AKRIN solutions'
  ],
  locationKeywords: [
    'Japan',
    'Tokyo',
    'Japanese',
    'Asia Pacific',
    'international business Japan'
  ],
  industryKeywords: [
    'information technology',
    'IT services',
    'managed services',
    'cybersecurity',
    'cloud computing',
    'IT infrastructure',
    'network security',
    'data protection',
    'business continuity',
    'IT support'
  ],
  competitorKeywords: [
    'IT provider Japan',
    'managed IT services Tokyo',
    'enterprise IT solutions',
    'business technology partner',
    'IT outsourcing Japan'
  ]
};

/**
 * Generate optimized SEO metadata for any page
 */
export function generateOptimizedSEOMetadata(
  path: string,
  customTitle?: string,
  customDescription?: string,
  customKeywords?: string[]
): SEOMetadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://akrin.jp';
  const pageConfig = AKRIN_SEO_CONFIG.pages.find(p => p.path === path);
  
  if (!pageConfig) {
    // Fallback for pages not in config
    return {
      title: customTitle || 'AKRIN - IT Solutions & Services',
      description: customDescription || 'Professional IT solutions and services from AKRIN.',
      keywords: customKeywords || AKRIN_SEO_CONFIG.globalKeywords,
      canonicalUrl: `${baseUrl}${path}`,
      ogTitle: customTitle || 'AKRIN - IT Solutions & Services',
      ogDescription: customDescription || 'Professional IT solutions and services from AKRIN.',
      ogImage: `${baseUrl}/og-image.png`,
      twitterTitle: customTitle || 'AKRIN - IT Solutions & Services',
      twitterDescription: customDescription || 'Professional IT solutions and services from AKRIN.',
      twitterImage: `${baseUrl}/og-image.png`,
      structuredData: generateBasicStructuredData(customTitle || 'AKRIN', customDescription || '', `${baseUrl}${path}`)
    };
  }

  const title = customTitle || pageConfig.title;
  const description = customDescription || pageConfig.description;
  const keywords = customKeywords || [
    ...pageConfig.keywords,
    ...AKRIN_SEO_CONFIG.globalKeywords,
    ...AKRIN_SEO_CONFIG.brandKeywords
  ];

  return {
    title,
    description,
    keywords,
    canonicalUrl: `${baseUrl}${path}`,
    ogTitle: title,
    ogDescription: description,
    ogImage: `${baseUrl}/og-image.png`,
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: `${baseUrl}/og-image.png`,
    structuredData: generateStructuredDataByType(pageConfig.structuredDataType || 'WebPage', title, description, `${baseUrl}${path}`)
  };
}

/**
 * Generate structured data based on page type
 */
function generateStructuredDataByType(type: string, title: string, description: string, url: string): any {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://akrin.jp';
  
  const baseSchema = {
    "@context": "https://schema.org",
    "name": title,
    "description": description,
    "url": url
  };

  switch (type) {
    case 'Organization':
      return {
        ...baseSchema,
        "@type": "Organization",
        "logo": `${baseUrl}/akrin-logo.svg`,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "JP",
          "addressRegion": "Tokyo"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+81-3-XXXX-XXXX",
          "contactType": "customer service"
        },
        "sameAs": [
          "https://www.linkedin.com/company/akrin",
          "https://twitter.com/AKRIN_JP"
        ]
      };

    case 'Service':
      return {
        ...baseSchema,
        "@type": "Service",
        "provider": {
          "@type": "Organization",
          "name": "AKRIN",
          "url": baseUrl
        },
        "areaServed": {
          "@type": "Country",
          "name": "Japan"
        },
        "serviceType": "IT Services"
      };

    case 'ContactPage':
      return {
        ...baseSchema,
        "@type": "ContactPage",
        "mainEntity": {
          "@type": "Organization",
          "name": "AKRIN",
          "url": baseUrl
        }
      };

    case 'AboutPage':
      return {
        ...baseSchema,
        "@type": "AboutPage",
        "mainEntity": {
          "@type": "Organization",
          "name": "AKRIN",
          "url": baseUrl
        }
      };

    default:
      return generateBasicStructuredData(title, description, url);
  }
}

/**
 * Generate basic structured data for any page
 */
function generateBasicStructuredData(title: string, description: string, url: string): any {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": url,
    "publisher": {
      "@type": "Organization",
      "name": "AKRIN",
      "url": process.env.NEXT_PUBLIC_BASE_URL || 'https://akrin.jp'
    }
  };
}

/**
 * Get SEO recommendations for a specific page
 */
export function getPageSEORecommendations(path: string): string[] {
  const pageConfig = AKRIN_SEO_CONFIG.pages.find(p => p.path === path);
  
  const generalRecommendations = [
    'Ensure page loads in under 3 seconds',
    'Optimize images with proper alt text and compression',
    'Use proper heading hierarchy (H1 → H2 → H3)',
    'Include internal links to related pages',
    'Ensure mobile responsiveness',
    'Add structured data markup',
    'Optimize meta title and description',
    'Use semantic HTML elements'
  ];

  if (!pageConfig) {
    return generalRecommendations;
  }

  const specificRecommendations = [];

  switch (pageConfig.type) {
    case 'homepage':
      specificRecommendations.push(
        'Include primary keywords in the first 100 words',
        'Add clear value proposition above the fold',
        'Include customer testimonials or trust signals',
        'Optimize for local SEO with location information'
      );
      break;

    case 'service':
      specificRecommendations.push(
        'Include service-specific keywords naturally',
        'Add customer case studies or success stories',
        'Include clear call-to-action buttons',
        'Add FAQ section for common questions'
      );
      break;

    case 'blog':
      specificRecommendations.push(
        'Use long-tail keywords in content',
        'Include related blog post links',
        'Add social sharing buttons',
        'Optimize for featured snippets'
      );
      break;

    case 'contact':
      specificRecommendations.push(
        'Include complete contact information',
        'Add location map if applicable',
        'Include business hours',
        'Add contact form with proper labels'
      );
      break;
  }

  return [...specificRecommendations, ...generalRecommendations];
}

/**
 * Analyze page performance against SEO best practices
 */
export async function analyzePageSEOPerformance(path: string): Promise<{
  score: number;
  issues: string[];
  recommendations: string[];
}> {
  const pageConfig = AKRIN_SEO_CONFIG.pages.find(p => p.path === path);
  let score = 100;
  const issues = [];
  
  if (!pageConfig) {
    issues.push('Page not found in SEO configuration');
    score -= 20;
  } else {
    // Check title length
    if (pageConfig.title.length > 60) {
      issues.push('Title is too long (over 60 characters)');
      score -= 10;
    }
    
    // Check description length
    if (pageConfig.description.length > 160) {
      issues.push('Meta description is too long (over 160 characters)');
      score -= 10;
    }
    
    // Check keyword density
    if (pageConfig.keywords.length < 3) {
      issues.push('Not enough target keywords defined');
      score -= 5;
    }
  }

  const recommendations = getPageSEORecommendations(path);
  
  return {
    score: Math.max(0, score),
    issues,
    recommendations
  };
}

export type { PageSEOConfig, GlobalSEOOptimization };
