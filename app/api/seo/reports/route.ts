import { NextRequest, NextResponse } from 'next/server';
import { serankingAPI } from '@/lib/seranking-api';
import { generateSEOReport } from '@/lib/seo-report-generator';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const domain = searchParams.get('domain');
    const type = searchParams.get('type') || 'comprehensive';

    if (!domain) {
      return NextResponse.json(
        { error: 'Domain parameter is required' },
        { status: 400 }
      );
    }

    switch (type) {
      case 'comprehensive':
        // Generate comprehensive SEO report using existing functionality
        const comprehensiveReport = await generateSEOReport({
          includeDomainAnalysis: true,
          baseUrl: `https://${domain}`
        });

        return NextResponse.json({
          success: true,
          data: comprehensiveReport,
          type: 'comprehensive',
          domain,
          generatedAt: new Date().toISOString()
        });

      case 'quick':
        // Generate quick SEO report using SEranking API
        const quickReport = await serankingAPI.generateSEOReport(domain);

        return NextResponse.json({
          success: true,
          data: quickReport,
          type: 'quick',
          domain,
          generatedAt: new Date().toISOString()
        });

      case 'keyword-performance':
        // Get keyword tracking performance
        const keywordData = await serankingAPI.getKeywordTracking(domain, 100);
        
        const performanceReport = {
          domain,
          totalKeywords: keywordData.length,
          averagePosition: keywordData.length > 0 
            ? Math.round(keywordData.reduce((sum, kw) => sum + kw.currentPosition, 0) / keywordData.length)
            : 0,
          improvingKeywords: keywordData.filter(kw => kw.trend === 'up').length,
          decliningKeywords: keywordData.filter(kw => kw.trend === 'down').length,
          stableKeywords: keywordData.filter(kw => kw.trend === 'stable').length,
          topKeywords: keywordData
            .filter(kw => kw.currentPosition <= 10)
            .sort((a, b) => a.currentPosition - b.currentPosition)
            .slice(0, 10),
          keywords: keywordData
        };

        return NextResponse.json({
          success: true,
          data: performanceReport,
          type: 'keyword-performance',
          domain,
          generatedAt: new Date().toISOString()
        });

      default:
        return NextResponse.json(
          { error: 'Invalid report type. Use "comprehensive", "quick", or "keyword-performance"' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('SEO report generation error:', error);
    return NextResponse.json(
      { 
        error: 'Report generation failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, domain, settings } = body;

    if (!domain) {
      return NextResponse.json(
        { error: 'Domain is required' },
        { status: 400 }
      );
    }

    switch (action) {
      case 'schedule-report':
        // In a real implementation, this would schedule a report generation
        // For now, we'll generate it immediately
        const scheduledReport = await serankingAPI.generateSEOReport(domain);

        return NextResponse.json({
          success: true,
          data: {
            reportId: scheduledReport.id,
            domain,
            status: 'scheduled',
            estimatedCompletion: new Date(Date.now() + 5 * 60 * 1000).toISOString(), // 5 minutes
            settings
          },
          message: 'SEO report scheduled successfully'
        });

      case 'custom-report':
        const { 
          includeKeywords = true,
          includeCompetitors = false,
          includeTechnical = true,
          includeContent = true,
          competitors = []
        } = settings || {};

        const customReportData: any = {
          domain,
          generatedAt: new Date().toISOString(),
          sections: {}
        };

        // Add sections based on settings
        if (includeTechnical) {
          const auditResult = await serankingAPI.createWebsiteAudit(domain);
          customReportData.sections.technical = {
            auditId: auditResult.id,
            status: 'processing'
          };
        }

        if (includeKeywords) {
          const keywordData = await serankingAPI.getKeywordTracking(domain, 50);
          customReportData.sections.keywords = {
            totalKeywords: keywordData.length,
            data: keywordData.slice(0, 20) // Top 20 keywords
          };
        }

        if (includeCompetitors && competitors.length > 0) {
          const competitorData = await serankingAPI.getCompetitorAnalysis(domain, competitors);
          customReportData.sections.competitors = {
            totalCompetitors: competitors.length,
            data: competitorData
          };
        }

        return NextResponse.json({
          success: true,
          data: customReportData,
          type: 'custom',
          domain,
          settings,
          generatedAt: new Date().toISOString()
        });

      default:
        return NextResponse.json(
          { error: 'Invalid action. Use "schedule-report" or "custom-report"' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('SEO report POST error:', error);
    return NextResponse.json(
      { 
        error: 'Report operation failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
