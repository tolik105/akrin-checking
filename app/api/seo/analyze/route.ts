import { NextRequest, NextResponse } from 'next/server';
import { serankingAPI } from '@/lib/seranking-api';
import { analyzeBlogPostSEO } from '@/lib/seo-utils';
import { blogPostsEN } from '@/lib/blog-data';

/**
 * POST /api/seo/analyze
 * Analyze SEO for blog posts or entire domain
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, target, options = {} } = body;

    switch (type) {
      case 'domain':
        return await analyzeDomain(target, options);
      
      case 'blog-post':
        return await analyzeBlogPost(target, options);
      
      case 'all-posts':
        return await analyzeAllBlogPosts(options);

      case 'website':
        return await analyzeEntireWebsite(options);

      case 'audit':
        return await createWebsiteAudit(target, options);
      
      default:
        return NextResponse.json(
          { error: 'Invalid analysis type. Use: domain, blog-post, all-posts, or audit' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('SEO Analysis Error:', error);
    return NextResponse.json(
      { error: 'Failed to perform SEO analysis', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/seo/analyze?type=test
 * Test SEranking API connection
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    if (type === 'test') {
      const result = await serankingAPI.testConnection();
      return NextResponse.json({
        success: true,
        message: 'SEranking API connection successful',
        data: result
      });
    }

    return NextResponse.json(
      { error: 'Invalid request. Use ?type=test to test API connection' },
      { status: 400 }
    );
  } catch (error) {
    console.error('SEO API Test Error:', error);
    return NextResponse.json(
      { error: 'Failed to connect to SEranking API', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

/**
 * Analyze domain performance using SEranking API
 */
async function analyzeDomain(domain: string, options: any) {
  try {
    console.log(`Analyzing domain: ${domain} with real SEranking API data`);

    // Get real domain analysis
    const domainAnalysis = await serankingAPI.getDomainAnalysis(domain, options.source || 'jp');

    // Get real backlink summary
    const backlinkSummary = await serankingAPI.getBacklinksSummary(domain);

    // Generate SEO report with real data
    const seoReport = await serankingAPI.generateSEOReport(domain);

    // Calculate overall health score based on real data
    const healthScore = Math.min(100, Math.max(50,
      (domainAnalysis.backlinks || 0) * 2 +
      (domainAnalysis.referringDomains || 0) * 5 +
      50 // Base score
    ));

    return NextResponse.json({
      success: true,
      type: 'domain',
      domain,
      data: {
        domainAnalysis,
        backlinkSummary,
        seoReport,
        healthScore,
        realDataUsed: true,
        analyzedAt: new Date().toISOString(),
        recommendations: [
          domainAnalysis.backlinks === 0 ? 'Build quality backlinks to improve domain authority' : null,
          domainAnalysis.referringDomains < 5 ? 'Increase referring domains through content marketing' : null,
          healthScore < 80 ? 'Focus on technical SEO improvements' : null,
          'Monitor keyword rankings regularly',
          'Optimize content for target keywords'
        ].filter(Boolean)
      }
    });
  } catch (error) {
    console.error('Domain analysis failed:', error);
    throw new Error(`Domain analysis failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Analyze individual blog post SEO
 */
async function analyzeBlogPost(slug: string, options: any) {
  try {
    const post = blogPostsEN[slug as keyof typeof blogPostsEN];
    
    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Perform local SEO analysis
    const seoAnalysis = analyzeBlogPostSEO(
      post.title,
      post.content,
      post.slug,
      post.category,
      post.tags,
      options.baseUrl || 'https://akrin.jp',
      (post as any).metaDescription
    );

    // Extract keywords for further analysis
    const keywords = [post.title, ...post.tags].slice(0, 5);
    
    // Get keyword research data if available
    let keywordData = null;
    try {
      keywordData = await serankingAPI.getKeywordResearch(keywords, options.source || 'us');
    } catch (error) {
      console.warn('Keyword research failed:', error);
    }

    return NextResponse.json({
      success: true,
      type: 'blog-post',
      slug,
      data: {
        post: {
          title: post.title,
          slug: post.slug,
          category: post.category,
          tags: post.tags,
          readTime: post.readTime
        },
        seoAnalysis,
        keywordData,
        analyzedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    throw new Error(`Blog post analysis failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Analyze all blog posts
 */
async function analyzeAllBlogPosts(options: any) {
  try {
    const posts = Object.values(blogPostsEN);
    const analyses = [];

    for (const post of posts) {
      const seoAnalysis = analyzeBlogPostSEO(
        post.title,
        post.content,
        post.slug,
        post.category,
        post.tags,
        options.baseUrl || 'https://akrin.jp',
        (post as any).metaDescription
      );

      analyses.push({
        slug: post.slug,
        title: post.title,
        score: seoAnalysis.score,
        issues: seoAnalysis.issues.length,
        errorCount: seoAnalysis.issues.filter(i => i.type === 'error').length,
        warningCount: seoAnalysis.issues.filter(i => i.type === 'warning').length,
        recommendations: seoAnalysis.recommendations.length
      });
    }

    // Calculate overall statistics
    const totalPosts = analyses.length;
    const averageScore = analyses.reduce((sum, a) => sum + a.score, 0) / totalPosts;
    const totalIssues = analyses.reduce((sum, a) => sum + a.issues, 0);
    const totalErrors = analyses.reduce((sum, a) => sum + a.errorCount, 0);
    const totalWarnings = analyses.reduce((sum, a) => sum + a.warningCount, 0);

    return NextResponse.json({
      success: true,
      type: 'all-posts',
      data: {
        summary: {
          totalPosts,
          averageScore: Math.round(averageScore),
          totalIssues,
          totalErrors,
          totalWarnings
        },
        posts: analyses,
        analyzedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    throw new Error(`All posts analysis failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Analyze entire website SEO
 */
async function analyzeEntireWebsite(options: any) {
  try {
    const baseUrl = options.baseUrl || 'https://akrin.jp';

    // Define all main pages to analyze
    const pages = [
      { path: '/', title: 'AKRIN - Leading IT Solutions Provider in Japan', type: 'homepage' },
      { path: '/about', title: 'About Us', type: 'about' },
      { path: '/services', title: 'Services', type: 'services' },
      { path: '/contact', title: 'Contact', type: 'contact' },
      { path: '/blog', title: 'Blog', type: 'blog' },
      { path: '/services/it-managed-services', title: 'Managed IT Services', type: 'service' },
      { path: '/services/it-consulting-project-management', title: 'IT Consulting & Project Management', type: 'service' },
      { path: '/itsm', title: 'ITSM Dashboard', type: 'itsm' }
    ];

    const analyses = [];
    let totalScore = 0;
    let totalIssues = 0;
    let totalErrors = 0;
    let totalWarnings = 0;

    for (const page of pages) {
      // Simulate page analysis (in real implementation, you'd fetch and analyze actual page content)
      const pageAnalysis = analyzePageSEO(page, baseUrl);

      analyses.push({
        path: page.path,
        title: page.title,
        type: page.type,
        score: pageAnalysis.score,
        issues: pageAnalysis.issues.length,
        errorCount: pageAnalysis.issues.filter(i => i.type === 'error').length,
        warningCount: pageAnalysis.issues.filter(i => i.type === 'warning').length,
        recommendations: pageAnalysis.recommendations.length,
        metadata: pageAnalysis.metadata
      });

      totalScore += pageAnalysis.score;
      totalIssues += pageAnalysis.issues.length;
      totalErrors += pageAnalysis.issues.filter(i => i.type === 'error').length;
      totalWarnings += pageAnalysis.issues.filter(i => i.type === 'warning').length;
    }

    const averageScore = Math.round(totalScore / pages.length);

    return NextResponse.json({
      success: true,
      type: 'website',
      data: {
        summary: {
          totalPages: pages.length,
          averageScore,
          totalIssues,
          totalErrors,
          totalWarnings
        },
        pages: analyses,
        analyzedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    throw new Error(`Website analysis failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Analyze individual page SEO
 */
function analyzePageSEO(page: any, baseUrl: string) {
  const issues = [];
  const recommendations = [];
  let score = 100;

  // Basic SEO checks based on page type
  switch (page.type) {
    case 'homepage':
      // Homepage should have strong SEO
      if (!page.title.includes('AKRIN')) {
        issues.push({
          type: 'warning',
          category: 'title',
          message: 'Homepage title should include brand name',
          recommendation: 'Include "AKRIN" in the homepage title'
        });
        score -= 10;
      }
      break;

    case 'service':
      // Service pages should have specific keywords
      if (!page.title.toLowerCase().includes('service')) {
        issues.push({
          type: 'notice',
          category: 'title',
          message: 'Service page could include "service" keyword',
          recommendation: 'Consider including "service" or "services" in the title'
        });
        score -= 5;
      }
      break;
  }

  // Generate metadata
  const metadata = {
    title: `${page.title} | AKRIN`,
    description: `Professional ${page.title.toLowerCase()} services from AKRIN - Leading IT solutions provider in Japan.`,
    canonicalUrl: `${baseUrl}${page.path}`,
    keywords: ['AKRIN', 'IT solutions', page.title.toLowerCase(), 'Japan']
  };

  // Add general recommendations
  recommendations.push(
    'Ensure page loads quickly (under 3 seconds)',
    'Optimize images with proper alt text',
    'Include internal links to related pages',
    'Add structured data markup',
    'Optimize for mobile devices'
  );

  return {
    score: Math.max(0, score),
    issues,
    recommendations,
    metadata
  };
}

/**
 * Create website audit using SEranking API
 */
async function createWebsiteAudit(domain: string, options: any) {
  try {
    // Create audit
    const auditResult = await serankingAPI.createWebsiteAudit(domain, options.settings);

    return NextResponse.json({
      success: true,
      type: 'audit',
      domain,
      data: {
        auditId: auditResult.id,
        message: 'Website audit created successfully. Use the audit ID to check status.',
        checkStatusUrl: `/api/seo/audit/${auditResult.id}`,
        analyzedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    throw new Error(`Website audit creation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
