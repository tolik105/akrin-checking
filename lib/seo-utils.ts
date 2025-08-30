/**
 * SEO Utilities for AKRIN Blog Optimization
 * 
 * This module provides utility functions for SEO analysis and optimization
 * of blog posts and website content.
 */

interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: any;
}

interface SEOAnalysis {
  score: number;
  issues: SEOIssue[];
  recommendations: string[];
  metadata: SEOMetadata;
}

interface SEOIssue {
  type: 'error' | 'warning' | 'notice';
  category: 'title' | 'description' | 'headers' | 'content' | 'images' | 'links' | 'technical';
  message: string;
  element?: string;
  recommendation: string;
}

/**
 * Analyze blog post content for SEO issues
 */
export function analyzeBlogPostSEO(
  title: string,
  content: string,
  slug: string,
  category: string,
  tags: string[],
  baseUrl: string = 'https://akrin.jp',
  customMetaDescription?: string
): SEOAnalysis {
  const issues: SEOIssue[] = [];
  const recommendations: string[] = [];

  // Analyze title
  const titleAnalysis = analyzeTitle(title);
  issues.push(...titleAnalysis.issues);

  // Analyze content
  const contentAnalysis = analyzeContent(content);
  issues.push(...contentAnalysis.issues);

  // Analyze meta description (use custom if available, otherwise generate)
  const description = customMetaDescription || generateMetaDescription(content);
  const descriptionAnalysis = analyzeDescription(description);
  issues.push(...descriptionAnalysis.issues);

  // Generate SEO metadata
  const metadata = generateSEOMetadata(title, content, slug, category, tags, baseUrl, customMetaDescription);

  // Calculate overall score
  const score = calculateSEOScore(issues);

  // Generate recommendations
  recommendations.push(...generateRecommendations(issues, title, content));

  return {
    score,
    issues,
    recommendations,
    metadata
  };
}

/**
 * Analyze title for SEO best practices
 */
function analyzeTitle(title: string): { issues: SEOIssue[] } {
  const issues: SEOIssue[] = [];
  
  if (title.length < 30) {
    issues.push({
      type: 'warning',
      category: 'title',
      message: 'Title is too short',
      recommendation: 'Consider expanding the title to 30-60 characters for better SEO'
    });
  }
  
  if (title.length > 60) {
    issues.push({
      type: 'error',
      category: 'title',
      message: 'Title is too long',
      recommendation: 'Shorten the title to under 60 characters to prevent truncation in search results'
    });
  }
  
  if (!title.includes('AKRIN') && !title.includes('IT')) {
    issues.push({
      type: 'notice',
      category: 'title',
      message: 'Title could include brand or industry keywords',
      recommendation: 'Consider including "AKRIN" or relevant IT keywords in the title'
    });
  }
  
  return { issues };
}

/**
 * Analyze content for SEO best practices
 */
function analyzeContent(content: string): { issues: SEOIssue[] } {
  const issues: SEOIssue[] = [];
  const textContent = content.replace(/<[^>]*>/g, '');
  const wordCount = textContent.split(/\s+/).length;
  
  if (wordCount < 300) {
    issues.push({
      type: 'warning',
      category: 'content',
      message: 'Content is too short',
      recommendation: 'Expand content to at least 300 words for better SEO performance'
    });
  }
  
  // Check for H1 tags
  const h1Count = (content.match(/<h1[^>]*>/gi) || []).length;
  if (h1Count === 0) {
    issues.push({
      type: 'error',
      category: 'headers',
      message: 'Missing H1 tag',
      recommendation: 'Add an H1 tag to clearly define the main topic of the page'
    });
  } else if (h1Count > 1) {
    issues.push({
      type: 'warning',
      category: 'headers',
      message: 'Multiple H1 tags found',
      recommendation: 'Use only one H1 tag per page and use H2-H6 for subheadings'
    });
  }
  
  // Check for H2 tags
  const h2Count = (content.match(/<h2[^>]*>/gi) || []).length;
  if (h2Count === 0 && wordCount > 500) {
    issues.push({
      type: 'notice',
      category: 'headers',
      message: 'No H2 tags found',
      recommendation: 'Add H2 tags to structure longer content and improve readability'
    });
  }
  
  // Check for images without alt text
  const imgTags = content.match(/<img[^>]*>/gi) || [];
  const imagesWithoutAlt = imgTags.filter(img => !img.includes('alt='));
  if (imagesWithoutAlt.length > 0) {
    issues.push({
      type: 'error',
      category: 'images',
      message: `${imagesWithoutAlt.length} images missing alt text`,
      recommendation: 'Add descriptive alt text to all images for accessibility and SEO'
    });
  }
  
  return { issues };
}

/**
 * Analyze meta description
 */
function analyzeDescription(description: string): { issues: SEOIssue[] } {
  const issues: SEOIssue[] = [];
  
  if (description.length < 120) {
    issues.push({
      type: 'warning',
      category: 'description',
      message: 'Meta description is too short',
      recommendation: 'Expand meta description to 120-160 characters for better search result display'
    });
  }
  
  if (description.length > 160) {
    issues.push({
      type: 'error',
      category: 'description',
      message: 'Meta description is too long',
      recommendation: 'Shorten meta description to under 160 characters to prevent truncation'
    });
  }
  
  return { issues };
}

/**
 * Generate optimized meta description from content
 */
export function generateMetaDescription(content: string, maxLength: number = 155): string {
  // Remove H1 tags and other HTML tags, then extract text
  let textContent = content.replace(/<h1[^>]*>.*?<\/h1>/gi, '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

  // If content is short enough, return as is
  if (textContent.length <= maxLength) {
    return textContent;
  }

  // Try to find the first complete paragraph or sentence
  const firstParagraph = textContent.split('.')[0];
  if (firstParagraph.length <= maxLength && firstParagraph.length > maxLength * 0.5) {
    return firstParagraph + '.';
  }

  // Find the last complete sentence within the limit
  const truncated = textContent.substring(0, maxLength);
  const lastSentence = truncated.lastIndexOf('.');

  if (lastSentence > maxLength * 0.7) {
    return textContent.substring(0, lastSentence + 1);
  }

  // If no good sentence break, truncate at word boundary
  const lastSpace = truncated.lastIndexOf(' ');
  return textContent.substring(0, lastSpace) + '...';
}

/**
 * Generate comprehensive SEO metadata
 */
export function generateSEOMetadata(
  title: string,
  content: string,
  slug: string,
  category: string,
  tags: string[],
  baseUrl: string,
  customMetaDescription?: string
): SEOMetadata {
  const description = customMetaDescription || generateMetaDescription(content);
  const canonicalUrl = `${baseUrl}/blog/${slug}`;
  const ogImage = `${baseUrl}/blog-images/${slug}-og.png`;

  // Extract keywords from title, category, and tags
  const keywords = [
    ...tags,
    category,
    'AKRIN',
    'IT Solutions',
    'Technology',
    'Japan'
  ].filter(Boolean);

  return {
    title: `${title} | AKRIN Blog`,
    description,
    keywords,
    canonicalUrl,
    ogTitle: title,
    ogDescription: description,
    ogImage,
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage,
    structuredData: generateStructuredData(title, description, canonicalUrl, category, tags)
  };
}

/**
 * Generate JSON-LD structured data for blog posts
 */
function generateStructuredData(
  title: string,
  description: string,
  url: string,
  category: string,
  tags: string[]
): any {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "AKRIN",
      "url": "https://akrin.jp"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AKRIN",
      "url": "https://akrin.jp",
      "logo": {
        "@type": "ImageObject",
        "url": "https://akrin.jp/akrin-logo.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "articleSection": category,
    "keywords": tags.join(", ")
  };
}

/**
 * Calculate overall SEO score based on issues
 */
function calculateSEOScore(issues: SEOIssue[]): number {
  let score = 100;
  
  issues.forEach(issue => {
    switch (issue.type) {
      case 'error':
        score -= 15;
        break;
      case 'warning':
        score -= 10;
        break;
      case 'notice':
        score -= 5;
        break;
    }
  });
  
  return Math.max(0, score);
}

/**
 * Generate actionable recommendations
 */
function generateRecommendations(issues: SEOIssue[], title: string, content: string): string[] {
  const recommendations: string[] = [];
  
  // Priority recommendations based on issues
  const errorIssues = issues.filter(i => i.type === 'error');
  const warningIssues = issues.filter(i => i.type === 'warning');
  
  if (errorIssues.length > 0) {
    recommendations.push('🔴 Critical: Fix all error-level SEO issues first');
  }
  
  if (warningIssues.length > 0) {
    recommendations.push('🟡 Important: Address warning-level issues to improve SEO performance');
  }
  
  // Specific recommendations
  recommendations.push('✅ Ensure all images have descriptive alt text');
  recommendations.push('✅ Use proper heading hierarchy (H1 → H2 → H3)');
  recommendations.push('✅ Include relevant keywords naturally in content');
  recommendations.push('✅ Add internal links to related blog posts');
  recommendations.push('✅ Optimize page loading speed');
  
  return recommendations;
}

/**
 * Extract keywords from content
 */
export function extractKeywords(content: string, limit: number = 10): string[] {
  const textContent = content.replace(/<[^>]*>/g, '').toLowerCase();
  const words = textContent.split(/\s+/);
  
  // Filter out common stop words
  const stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by',
    'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did',
    'will', 'would', 'could', 'should', 'may', 'might', 'can', 'this', 'that', 'these', 'those'
  ]);
  
  const wordFreq = new Map<string, number>();
  
  words.forEach(word => {
    const cleanWord = word.replace(/[^\w]/g, '');
    if (cleanWord.length > 3 && !stopWords.has(cleanWord)) {
      wordFreq.set(cleanWord, (wordFreq.get(cleanWord) || 0) + 1);
    }
  });
  
  return Array.from(wordFreq.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([word]) => word);
}

export type { SEOMetadata, SEOAnalysis, SEOIssue };
