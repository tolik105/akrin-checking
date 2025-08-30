/**
 * Content Analytics API Endpoint
 * Provides comprehensive analytics data for content performance
 */

import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { ContentStatus } from '@/lib/db'

// GET /api/admin/content/analytics - Get content analytics data
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const timeRange = searchParams.get('timeRange') || '30d'

    // Calculate date range
    const now = new Date()
    let startDate = new Date()
    
    switch (timeRange) {
      case '7d':
        startDate.setDate(now.getDate() - 7)
        break
      case '30d':
        startDate.setDate(now.getDate() - 30)
        break
      case '90d':
        startDate.setDate(now.getDate() - 90)
        break
      case '1y':
        startDate.setFullYear(now.getFullYear() - 1)
        break
      default:
        startDate.setDate(now.getDate() - 30)
    }

    // Get overview statistics
    const [
      totalContent,
      publishedContent,
      totalViews,
      avgSeoScore,
      publishedThisMonth
    ] = await Promise.all([
      // Total content count
      db.content.count(),
      
      // Published content count
      db.content.count({
        where: { status: ContentStatus.PUBLISHED }
      }),
      
      // Total views
      db.content.aggregate({
        _sum: { viewCount: true }
      }),
      
      // Average SEO score
      db.content.aggregate({
        _avg: { seoScore: true },
        where: { 
          status: ContentStatus.PUBLISHED,
          seoScore: { not: null }
        }
      }),
      
      // Published this month
      db.content.count({
        where: {
          status: ContentStatus.PUBLISHED,
          publishedAt: {
            gte: new Date(now.getFullYear(), now.getMonth(), 1)
          }
        }
      })
    ])

    // Get top performing content
    const topContent = await db.content.findMany({
      where: {
        status: ContentStatus.PUBLISHED,
        publishedAt: { gte: startDate }
      },
      orderBy: { viewCount: 'desc' },
      take: 10,
      select: {
        id: true,
        title: true,
        slug: true,
        viewCount: true,
        seoScore: true,
        language: true,
        publishedAt: true
      }
    })

    // Get keyword performance
    const keywordPerformance = await db.keyword.findMany({
      where: { isTarget: true },
      include: {
        content: {
          where: {
            content: { status: ContentStatus.PUBLISHED }
          }
        }
      },
      orderBy: { searchVolume: 'desc' },
      take: 10
    })

    // Transform keyword data
    const keywordStats = keywordPerformance.map(keyword => ({
      keyword: keyword.keyword,
      contentCount: keyword.content.length,
      avgRanking: keyword.currentRank || 0,
      searchVolume: keyword.searchVolume || 0,
      difficulty: keyword.difficulty || 0
    }))

    // Get traffic trends (simplified - would need real analytics integration)
    const trafficTrends = []
    for (let i = 29; i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      
      // This would be replaced with real analytics data
      trafficTrends.push({
        date: date.toISOString().split('T')[0],
        views: Math.floor(Math.random() * 100) + 50,
        uniqueViews: Math.floor(Math.random() * 80) + 30
      })
    }

    // Get content by language breakdown
    const contentByLanguage = await db.content.groupBy({
      by: ['language'],
      where: { status: ContentStatus.PUBLISHED },
      _count: { id: true }
    })

    // Get content by category breakdown
    const contentByCategory = await db.content.groupBy({
      by: ['categoryId'],
      where: { 
        status: ContentStatus.PUBLISHED,
        categoryId: { not: null }
      },
      _count: { id: true },
      include: {
        category: {
          select: { nameEn: true, nameJa: true }
        }
      }
    })

    // Calculate SEO score distribution
    const seoScoreRanges = await Promise.all([
      db.content.count({
        where: {
          status: ContentStatus.PUBLISHED,
          seoScore: { gte: 80 }
        }
      }),
      db.content.count({
        where: {
          status: ContentStatus.PUBLISHED,
          seoScore: { gte: 60, lt: 80 }
        }
      }),
      db.content.count({
        where: {
          status: ContentStatus.PUBLISHED,
          seoScore: { gte: 40, lt: 60 }
        }
      }),
      db.content.count({
        where: {
          status: ContentStatus.PUBLISHED,
          seoScore: { lt: 40 }
        }
      })
    ])

    // Get recent analytics entries
    const recentAnalytics = await db.contentAnalytics.findMany({
      where: {
        date: { gte: startDate }
      },
      include: {
        content: {
          select: { title: true, slug: true }
        }
      },
      orderBy: { date: 'desc' },
      take: 100
    })

    // Aggregate analytics data
    const analyticsAggregation = recentAnalytics.reduce((acc, entry) => {
      acc.totalViews += entry.views
      acc.totalUniqueViews += entry.uniqueViews
      acc.totalOrganicTraffic += entry.organicTraffic
      acc.totalSocialShares += entry.socialShares
      acc.totalBacklinks += entry.backlinks
      
      if (entry.avgTimeOnPage) {
        acc.avgTimeOnPage.push(entry.avgTimeOnPage)
      }
      if (entry.bounceRate) {
        acc.bounceRates.push(entry.bounceRate)
      }
      
      return acc
    }, {
      totalViews: 0,
      totalUniqueViews: 0,
      totalOrganicTraffic: 0,
      totalSocialShares: 0,
      totalBacklinks: 0,
      avgTimeOnPage: [] as number[],
      bounceRates: [] as number[]
    })

    const analytics = {
      overview: {
        totalContent: totalContent,
        publishedContent: publishedContent,
        totalViews: totalViews._sum.viewCount || 0,
        avgSeoScore: avgSeoScore._avg.seoScore || 0,
        publishedThisMonth: publishedThisMonth
      },
      topContent: topContent.map(content => ({
        ...content,
        views: content.viewCount,
        seoScore: content.seoScore || 0
      })),
      keywordPerformance: keywordStats,
      trafficTrends,
      contentBreakdown: {
        byLanguage: contentByLanguage,
        byCategory: contentByCategory
      },
      seoMetrics: {
        scoreDistribution: {
          excellent: seoScoreRanges[0], // 80+
          good: seoScoreRanges[1],      // 60-79
          fair: seoScoreRanges[2],      // 40-59
          poor: seoScoreRanges[3]       // <40
        },
        avgScore: avgSeoScore._avg.seoScore || 0
      },
      engagement: {
        totalViews: analyticsAggregation.totalViews,
        totalUniqueViews: analyticsAggregation.totalUniqueViews,
        organicTraffic: analyticsAggregation.totalOrganicTraffic,
        socialShares: analyticsAggregation.totalSocialShares,
        backlinks: analyticsAggregation.totalBacklinks,
        avgTimeOnPage: analyticsAggregation.avgTimeOnPage.length > 0 
          ? analyticsAggregation.avgTimeOnPage.reduce((a, b) => a + b, 0) / analyticsAggregation.avgTimeOnPage.length 
          : 0,
        avgBounceRate: analyticsAggregation.bounceRates.length > 0
          ? analyticsAggregation.bounceRates.reduce((a, b) => a + b, 0) / analyticsAggregation.bounceRates.length
          : 0
      },
      timeRange,
      generatedAt: new Date().toISOString()
    }

    return NextResponse.json({
      success: true,
      data: analytics
    })
  } catch (error) {
    console.error('Analytics fetch error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch analytics data' },
      { status: 500 }
    )
  }
}
