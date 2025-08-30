/**
 * Content Management API Endpoints
 * Handles CRUD operations for content with SEO optimization
 */

import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { ContentStatus, Language } from '@/lib/db'
import { serankingAPI } from '@/lib/seranking-api'

// GET /api/admin/content - List content with filtering and pagination
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const status = searchParams.get('status') as ContentStatus | null
    const language = searchParams.get('language') as Language | null
    const categoryId = searchParams.get('categoryId')
    const search = searchParams.get('search')

    const skip = (page - 1) * limit

    // Build where clause
    const where: any = {}
    if (status) where.status = status
    if (language) where.language = language
    if (categoryId) where.categoryId = categoryId
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { excerpt: { contains: search, mode: 'insensitive' } },
        { focusKeyword: { contains: search, mode: 'insensitive' } }
      ]
    }

    // Get content with relations
    const [content, total] = await Promise.all([
      db.content.findMany({
        where,
        skip,
        take: limit,
        orderBy: { updatedAt: 'desc' },
        include: {
          category: true,
          keywords: {
            include: { keyword: true }
          },
          _count: {
            select: { media: true, analytics: true }
          }
        }
      }),
      db.content.count({ where })
    ])

    return NextResponse.json({
      success: true,
      data: content,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Content list error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch content' },
      { status: 500 }
    )
  }
}

// POST /api/admin/content - Create new content
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      title,
      slug,
      contentHtml,
      excerpt,
      metaTitle,
      metaDescription,
      focusKeyword,
      language = Language.EN,
      status = ContentStatus.DRAFT,
      featuredImage,
      authorName,
      authorRole,
      readTime,
      categoryId,
      keywordIds = []
    } = body

    // Validate required fields
    if (!title || !slug || !contentHtml) {
      return NextResponse.json(
        { success: false, error: 'Title, slug, and content are required' },
        { status: 400 }
      )
    }

    // Check if slug is unique
    const existingContent = await db.content.findUnique({
      where: { slug }
    })

    if (existingContent) {
      return NextResponse.json(
        { success: false, error: 'Slug already exists' },
        { status: 400 }
      )
    }

    // Calculate SEO score if focus keyword is provided
    let seoScore = null
    if (focusKeyword && contentHtml) {
      try {
        // Basic SEO scoring based on keyword density and content structure
        const keywordDensity = (contentHtml.toLowerCase().split(focusKeyword.toLowerCase()).length - 1) / contentHtml.split(' ').length * 100
        const hasH1 = contentHtml.includes('<h1')
        const hasH2 = contentHtml.includes('<h2')
        const hasMetaTitle = !!metaTitle
        const hasMetaDescription = !!metaDescription
        
        seoScore = Math.min(100, 
          (keywordDensity > 0.5 && keywordDensity < 3 ? 25 : 10) + // Keyword density
          (hasH1 ? 20 : 0) + // H1 tag
          (hasH2 ? 15 : 0) + // H2 tags
          (hasMetaTitle ? 20 : 0) + // Meta title
          (hasMetaDescription ? 20 : 0) // Meta description
        )
      } catch (error) {
        console.warn('SEO score calculation failed:', error)
      }
    }

    // Create content
    const content = await db.content.create({
      data: {
        title,
        slug,
        contentHtml,
        excerpt,
        metaTitle,
        metaDescription,
        focusKeyword,
        language,
        status,
        featuredImage,
        authorName,
        authorRole,
        readTime,
        categoryId,
        seoScore,
        publishedAt: status === ContentStatus.PUBLISHED ? new Date() : null
      },
      include: {
        category: true,
        keywords: {
          include: { keyword: true }
        }
      }
    })

    // Associate keywords if provided
    if (keywordIds.length > 0) {
      await Promise.all(
        keywordIds.map((keywordId: string, index: number) =>
          db.contentKeyword.create({
            data: {
              contentId: content.id,
              keywordId,
              isPrimary: index === 0 // First keyword is primary
            }
          })
        )
      )
    }

    return NextResponse.json({
      success: true,
      data: content,
      message: 'Content created successfully'
    })
  } catch (error) {
    console.error('Content creation error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create content' },
      { status: 500 }
    )
  }
}
