import { NextRequest, NextResponse } from 'next/server';
import { serankingAPI } from '@/lib/seranking-api';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const domain = searchParams.get('domain');
    const action = searchParams.get('action');
    const limit = parseInt(searchParams.get('limit') || '50');

    if (!domain) {
      return NextResponse.json(
        { error: 'Domain parameter is required' },
        { status: 400 }
      );
    }

    switch (action) {
      case 'tracking':
        try {
          const trackingData = await serankingAPI.getKeywordTracking(domain, limit);
          return NextResponse.json({
            success: true,
            data: trackingData,
            domain,
            realData: true,
            analyzedAt: new Date().toISOString()
          });
        } catch (error) {
          console.error('Keyword tracking failed, providing research-based data:', error);

          // If tracking isn't available, provide keyword research for relevant AKRIN keywords
          const akrinKeywords = [
            'IT support Japan',
            'managed IT services Tokyo',
            'cybersecurity Japan',
            'cloud migration services',
            'IT consulting Japan',
            'network security Tokyo',
            'data backup solutions',
            'IT infrastructure Japan',
            'business continuity planning',
            'remote work security'
          ];

          try {
            const researchData = await serankingAPI.getKeywordResearch(akrinKeywords, 'jp');

            // Convert research data to tracking format
            const trackingFormat = researchData.map((item, index) => ({
              id: index + 1,
              keyword: item.keyword,
              currentPosition: item.position || 0,
              previousPosition: 0,
              bestPosition: 0,
              searchVolume: item.searchVolume,
              difficulty: item.difficulty,
              url: `https://${domain}`,
              trend: 'stable' as const,
              changeValue: 0,
              lastUpdated: new Date().toISOString()
            }));

            return NextResponse.json({
              success: true,
              data: trackingFormat,
              domain,
              realData: false,
              dataSource: 'keyword-research',
              message: 'Showing keyword research data - tracking not available in current plan',
              analyzedAt: new Date().toISOString()
            });
          } catch (researchError) {
            console.error('Keyword research also failed:', researchError);

            // Final fallback with realistic sample data
            const fallbackData = akrinKeywords.map((keyword, index) => ({
              id: index + 1,
              keyword,
              currentPosition: 0, // Not ranking yet (new domain)
              previousPosition: 0,
              bestPosition: 0,
              searchVolume: Math.floor(Math.random() * 2000) + 100,
              difficulty: Math.floor(Math.random() * 80) + 20,
              url: `https://${domain}`,
              trend: 'stable' as const,
              changeValue: 0,
              lastUpdated: new Date().toISOString()
            }));

            return NextResponse.json({
              success: true,
              data: fallbackData,
              domain,
              realData: false,
              dataSource: 'fallback',
              message: 'Using sample data - API endpoints not available',
              analyzedAt: new Date().toISOString()
            });
          }
        }

      case 'research':
        const keywords = searchParams.get('keywords')?.split(',') || [];
        const source = searchParams.get('source') || 'jp';

        if (keywords.length === 0) {
          return NextResponse.json(
            { error: 'Keywords parameter is required for research' },
            { status: 400 }
          );
        }

        try {
          const researchData = await serankingAPI.getKeywordResearch(keywords, source);
          return NextResponse.json({
            success: true,
            data: researchData,
            keywords,
            source,
            realData: true,
            analyzedAt: new Date().toISOString()
          });
        } catch (error) {
          console.error('Keyword research failed, using fallback data:', error);

          // Generate realistic fallback data for AKRIN keywords
          const fallbackData = keywords.map(keyword => ({
            keyword,
            position: 0, // Not ranking yet
            searchVolume: Math.floor(Math.random() * 2000) + 100,
            difficulty: Math.floor(Math.random() * 80) + 20,
            cpc: Math.random() * 5 + 0.5,
            competition: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)]
          }));

          return NextResponse.json({
            success: true,
            data: fallbackData,
            keywords,
            source,
            realData: false,
            fallbackReason: 'API endpoint not available in current plan',
            analyzedAt: new Date().toISOString()
          });
        }

      default:
        return NextResponse.json(
          { error: 'Invalid action. Use "tracking" or "research"' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Keyword API error:', error);
    return NextResponse.json(
      { 
        error: 'Keyword analysis failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, domain, keywords, source = 'us', competitors } = body;

    if (!domain) {
      return NextResponse.json(
        { error: 'Domain is required' },
        { status: 400 }
      );
    }

    switch (action) {
      case 'add-tracking':
        if (!keywords || !Array.isArray(keywords)) {
          return NextResponse.json(
            { error: 'Keywords array is required for tracking' },
            { status: 400 }
          );
        }

        const trackingResult = await serankingAPI.addKeywordTracking(domain, keywords, source);
        return NextResponse.json({
          success: trackingResult.success,
          data: {
            trackingIds: trackingResult.trackingIds,
            domain,
            keywords,
            source
          },
          message: trackingResult.success 
            ? 'Keyword tracking added successfully' 
            : 'Failed to add keyword tracking'
        });

      case 'competitor-analysis':
        if (!competitors || !Array.isArray(competitors)) {
          return NextResponse.json(
            { error: 'Competitors array is required for analysis' },
            { status: 400 }
          );
        }

        const competitorData = await serankingAPI.getCompetitorAnalysis(domain, competitors, source);
        return NextResponse.json({
          success: true,
          data: competitorData,
          domain,
          competitors,
          analyzedAt: new Date().toISOString()
        });

      case 'common-keywords':
        const { competitor } = body;
        if (!competitor) {
          return NextResponse.json(
            { error: 'Competitor domain is required' },
            { status: 400 }
          );
        }

        const commonKeywords = await serankingAPI.getCommonKeywords(domain, competitor, source);
        return NextResponse.json({
          success: true,
          data: commonKeywords,
          domain,
          competitor,
          source,
          analyzedAt: new Date().toISOString()
        });

      default:
        return NextResponse.json(
          { error: 'Invalid action. Use "add-tracking", "competitor-analysis", or "common-keywords"' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Keyword API POST error:', error);
    return NextResponse.json(
      { 
        error: 'Keyword operation failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
