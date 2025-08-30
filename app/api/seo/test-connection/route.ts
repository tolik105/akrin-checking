import { NextRequest, NextResponse } from 'next/server';
import { serankingAPI } from '@/lib/seranking-api';

export async function GET(request: NextRequest) {
  try {
    console.log('Testing SEranking API connection...');
    
    // Test basic API connection
    const connectionTest = await serankingAPI.testConnection();
    console.log('Connection test result:', connectionTest);

    // Test domain analysis for akrin.jp
    const domainAnalysis = await serankingAPI.getDomainAnalysis('akrin.jp', 'jp');
    console.log('Domain analysis result:', domainAnalysis);

    // Test keyword research for relevant keywords
    const keywordResearch = await serankingAPI.getKeywordResearch([
      'IT support Japan',
      'managed services Tokyo',
      'cybersecurity Japan',
      'cloud migration services',
      'IT consulting Japan'
    ], 'jp');
    console.log('Keyword research result:', keywordResearch);

    return NextResponse.json({
      success: true,
      message: 'SEranking API connection successful',
      data: {
        connection: connectionTest,
        domainAnalysis,
        keywordResearch,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('SEranking API test failed:', error);
    
    return NextResponse.json({
      success: false,
      error: 'SEranking API connection failed',
      details: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { domain = 'akrin.jp', keywords = [], source = 'jp' } = body;

    console.log(`Testing SEranking API with domain: ${domain}, source: ${source}`);

    const results: any = {};

    // Test domain analysis
    if (domain) {
      try {
        results.domainAnalysis = await serankingAPI.getDomainAnalysis(domain, source);
      } catch (error) {
        results.domainAnalysisError = error instanceof Error ? error.message : 'Unknown error';
      }
    }

    // Test keyword research
    if (keywords.length > 0) {
      try {
        results.keywordResearch = await serankingAPI.getKeywordResearch(keywords, source);
      } catch (error) {
        results.keywordResearchError = error instanceof Error ? error.message : 'Unknown error';
      }
    }

    // Test backlink summary
    if (domain) {
      try {
        results.backlinkSummary = await serankingAPI.getBacklinkSummary(domain);
      } catch (error) {
        results.backlinkSummaryError = error instanceof Error ? error.message : 'Unknown error';
      }
    }

    // Test SERP data
    if (keywords.length > 0) {
      try {
        results.serpData = await serankingAPI.getSERPData(keywords.slice(0, 3), source);
      } catch (error) {
        results.serpDataError = error instanceof Error ? error.message : 'Unknown error';
      }
    }

    return NextResponse.json({
      success: true,
      message: 'SEranking API tests completed',
      domain,
      source,
      keywords,
      results,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('SEranking API test failed:', error);
    
    return NextResponse.json({
      success: false,
      error: 'SEranking API test failed',
      details: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
