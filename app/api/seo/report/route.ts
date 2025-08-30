import { NextRequest, NextResponse } from 'next/server';
import { generateSEOReport, exportReportAsJSON, exportReportAsMarkdown } from '@/lib/seo-report-generator';

/**
 * POST /api/seo/report
 * Generate comprehensive SEO report
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      format = 'json', 
      includeDomainAnalysis = true,
      baseUrl = 'https://akrin.jp'
    } = body;

    console.log('Generating SEO report...');
    
    // Generate comprehensive SEO report
    const report = await generateSEOReport({
      includeDomainAnalysis,
      baseUrl
    });

    // Format response based on requested format
    switch (format) {
      case 'markdown':
        const markdownReport = exportReportAsMarkdown(report);
        return new NextResponse(markdownReport, {
          headers: {
            'Content-Type': 'text/markdown',
            'Content-Disposition': `attachment; filename="akrin-seo-report-${new Date().toISOString().split('T')[0]}.md"`
          }
        });

      case 'json':
      default:
        return NextResponse.json({
          success: true,
          report,
          generatedAt: report.generatedAt
        });
    }
  } catch (error) {
    console.error('SEO Report Generation Error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to generate SEO report', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/seo/report?format=json|markdown
 * Generate and download SEO report
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const format = searchParams.get('format') || 'json';
    const includeDomainAnalysis = searchParams.get('includeDomainAnalysis') !== 'false';
    const baseUrl = searchParams.get('baseUrl') || 'https://akrin.jp';

    console.log('Generating SEO report for download...');
    
    // Generate comprehensive SEO report
    const report = await generateSEOReport({
      includeDomainAnalysis,
      baseUrl
    });

    const timestamp = new Date().toISOString().split('T')[0];

    // Format response based on requested format
    switch (format) {
      case 'markdown':
        const markdownReport = exportReportAsMarkdown(report);
        return new NextResponse(markdownReport, {
          headers: {
            'Content-Type': 'text/markdown',
            'Content-Disposition': `attachment; filename="akrin-seo-report-${timestamp}.md"`,
            'Cache-Control': 'no-cache'
          }
        });

      case 'json':
        const jsonReport = exportReportAsJSON(report);
        return new NextResponse(jsonReport, {
          headers: {
            'Content-Type': 'application/json',
            'Content-Disposition': `attachment; filename="akrin-seo-report-${timestamp}.json"`,
            'Cache-Control': 'no-cache'
          }
        });

      default:
        return NextResponse.json(
          { error: 'Invalid format. Use json or markdown' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('SEO Report Download Error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to generate SEO report', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}
