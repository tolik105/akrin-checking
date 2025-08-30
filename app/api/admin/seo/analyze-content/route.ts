/**
 * Enhanced SEO Content Analysis API Endpoint
 * Provides comprehensive SEO analysis using advanced optimization engine
 */

import { NextRequest, NextResponse } from 'next/server'
import { seoOptimizer } from '@/lib/seo-optimizer'
import { db } from '@/lib/db'



// POST /api/admin/seo/analyze-content - Enhanced SEO analysis
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      title,
      contentHtml,
      metaTitle,
      metaDescription,
      focusKeyword,
      slug,
      language = 'EN'
    } = body

    if (!title || !contentHtml) {
      return NextResponse.json(
        { success: false, error: 'Title and content are required' },
        { status: 400 }
      )
    }

    // Use the enhanced SEO optimizer
    const analysis = await seoOptimizer.analyzeContent({
      title,
      content: contentHtml,
      metaTitle,
      metaDescription,
      focusKeyword,
      url: slug ? `/${slug}` : undefined,
      language
    })

    return NextResponse.json({
      success: true,
      data: analysis
    })
  } catch (error) {
    console.error('Enhanced SEO analysis error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to analyze content' },
      { status: 500 }
    )
  }
}


