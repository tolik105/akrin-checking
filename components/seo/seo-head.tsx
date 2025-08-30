import Head from 'next/head';
import { SEOMetadata } from '@/lib/seo-utils';

interface SEOHeadProps {
  metadata: SEOMetadata;
  noindex?: boolean;
  nofollow?: boolean;
}

/**
 * SEO Head Component
 * 
 * Renders all necessary SEO meta tags, Open Graph tags, Twitter Cards,
 * and structured data for optimal search engine optimization.
 */
export function SEOHead({ metadata, noindex = false, nofollow = false }: SEOHeadProps) {
  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow'
  ].join(', ');

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords.join(', ')} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={metadata.canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={metadata.ogTitle || metadata.title} />
      <meta property="og:description" content={metadata.ogDescription || metadata.description} />
      <meta property="og:url" content={metadata.canonicalUrl} />
      <meta property="og:site_name" content="AKRIN Blog" />
      <meta property="og:locale" content="en_US" />
      {metadata.ogImage && (
        <>
          <meta property="og:image" content={metadata.ogImage} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content={metadata.title} />
        </>
      )}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@AKRIN_JP" />
      <meta name="twitter:creator" content="@AKRIN_JP" />
      <meta name="twitter:title" content={metadata.twitterTitle || metadata.title} />
      <meta name="twitter:description" content={metadata.twitterDescription || metadata.description} />
      {metadata.twitterImage && (
        <meta name="twitter:image" content={metadata.twitterImage} />
      )}

      {/* Additional Meta Tags */}
      <meta name="author" content="AKRIN" />
      <meta name="publisher" content="AKRIN" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Favicon and Icons (versioned to bust caches in dev) */}
      <link rel="icon" href="/favicon-32x32.png?v=2" sizes="32x32" type="image/png" />
      <link rel="icon" href="/favicon-16x16.png?v=2" sizes="16x16" type="image/png" />
      <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
      <link rel="manifest" href="/manifest.json" />

      {/* Structured Data */}
      {metadata.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metadata.structuredData)
          }}
        />
      )}

      {/* Preconnect to External Domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
    </Head>
  );
}

/**
 * Generate default SEO metadata for pages
 */
export function generateDefaultSEO(
  title: string,
  description: string,
  path: string = '',
  image?: string
): SEOMetadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://akrin.jp';
  const fullUrl = `${baseUrl}${path}`;
  const defaultImage = `${baseUrl}/og-image.png`;

  return {
    title: `${title} | AKRIN - IT Solutions & Services`,
    description,
    keywords: ['AKRIN', 'IT Solutions', 'Technology', 'Japan', 'Business'],
    canonicalUrl: fullUrl,
    ogTitle: title,
    ogDescription: description,
    ogImage: image || defaultImage,
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image || defaultImage,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": fullUrl,
      "publisher": {
        "@type": "Organization",
        "name": "AKRIN",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/akrin-logo.svg`
        }
      }
    }
  };
}

/**
 * Generate blog-specific SEO metadata
 */
export function generateBlogSEO(
  title: string,
  description: string,
  slug: string,
  category: string,
  tags: string[],
  publishDate: string
): SEOMetadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://akrin.jp';
  const fullUrl = `${baseUrl}/blog/${slug}`;
  const blogImage = `${baseUrl}/og-image.svg`;

  return {
    title: `${title} | AKRIN Blog`,
    description,
    keywords: [...tags, category, 'AKRIN', 'IT Solutions', 'Technology', 'Japan'],
    canonicalUrl: fullUrl,
    ogTitle: title,
    ogDescription: description,
    ogImage: blogImage,
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: blogImage,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": title,
      "description": description,
      "url": fullUrl,
      "datePublished": publishDate,
      "dateModified": publishDate,
      "author": {
        "@type": "Organization",
        "name": "AKRIN",
        "url": baseUrl
      },
      "publisher": {
        "@type": "Organization",
        "name": "AKRIN",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/akrin-logo.svg`
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": fullUrl
      },
      "articleSection": category,
      "keywords": tags.join(", "),
      "image": {
        "@type": "ImageObject",
        "url": blogImage,
        "width": 1200,
        "height": 630
      }
    }
  };
}

/**
 * Generate organization structured data
 */
export function generateOrganizationSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://akrin.jp';
  
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AKRIN",
    "alternateName": "AKRIN Technologies",
    "url": baseUrl,
    "logo": `${baseUrl}/akrin-logo.svg`,
    "description": "Leading IT solutions and services provider in Japan, specializing in cloud migration, cybersecurity, and digital transformation.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "JP",
      "addressRegion": "Tokyo"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+81-3-XXXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": ["English", "Japanese"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/akrin",
      "https://twitter.com/AKRIN_JP"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "industry": "Information Technology"
  };
}
