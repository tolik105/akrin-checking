/**
 * Individual Content Management API Endpoints
 * Handles GET, PUT, DELETE operations for specific content items
 */

import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { ContentStatus } from '@/lib/db'

// GET /api/admin/content/[id] - Get specific content
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const content = await db.content.findUnique({
      where: { id: params.id },
      include: {
        category: true,
        keywords: {
          include: { keyword: true }
        },
        media: {
          orderBy: { sortOrder: 'asc' }
        },
        analytics: {
          orderBy: { date: 'desc' },
          take: 30 // Last 30 days
        }
      }
    })

    if (!content) {
      return NextResponse.json(
        { success: false, error: 'Content not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: content
    })
  } catch (error) {
    console.error('Content fetch error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch content' },
      { status: 500 }
    )
  }
}

// PUT /api/admin/content/[id] - Update content
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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
      status,
      featuredImage,
      authorName,
      authorRole,
      readTime,
      categoryId,
      keywordIds = []
    } = body

    // Check if content exists
    const existingContent = await db.content.findUnique({
      where: { id: params.id }
    })

    if (!existingContent) {
      return NextResponse.json(
        { success: false, error: 'Content not found' },
        { status: 404 }
      )
    }

    // Check if slug is unique (excluding current content)
    if (slug && slug !== existingContent.slug) {
      const slugExists = await db.content.findFirst({
        where: {
          slug,
          id: { not: params.id }
        }
      })

      if (slugExists) {
        return NextResponse.json(
          { success: false, error: 'Slug already exists' },
          { status: 400 }
        )
      }
    }

    // Calculate SEO score if content changed
    let seoScore = existingContent.seoScore
    if (focusKeyword && contentHtml) {
      try {
        const keywordDensity = (contentHtml.toLowerCase().split(focusKeyword.toLowerCase()).length - 1) / contentHtml.split(' ').length * 100
        const hasH1 = contentHtml.includes('<h1')
        const hasH2 = contentHtml.includes('<h2')
        const hasMetaTitle = !!metaTitle
        const hasMetaDescription = !!metaDescription
        
        seoScore = Math.min(100, 
          (keywordDensity > 0.5 && keywordDensity < 3 ? 25 : 10) +
          (hasH1 ? 20 : 0) +
          (hasH2 ? 15 : 0) +
          (hasMetaTitle ? 20 : 0) +
          (hasMetaDescription ? 20 : 0)
        )
      } catch (error) {
        console.warn('SEO score calculation failed:', error)
      }
    }

    // Update content
    const updatedContent = await db.content.update({
      where: { id: params.id },
      data: {
        ...(title && { title }),
        ...(slug && { slug }),
        ...(contentHtml && { contentHtml }),
        ...(excerpt !== undefined && { excerpt }),
        ...(metaTitle !== undefined && { metaTitle }),
        ...(metaDescription !== undefined && { metaDescription }),
        ...(focusKeyword !== undefined && { focusKeyword }),
        ...(status && { status }),
        ...(featuredImage !== undefined && { featuredImage }),
        ...(authorName !== undefined && { authorName }),
        ...(authorRole !== undefined && { authorRole }),
        ...(readTime !== undefined && { readTime }),
        ...(categoryId !== undefined && { categoryId }),
        ...(seoScore !== null && { seoScore }),
        publishedAt: status === ContentStatus.PUBLISHED && !existingContent.publishedAt 
          ? new Date() 
          : existingContent.publishedAt
      },
      include: {
        category: true,
        keywords: {
          include: { keyword: true }
        }
      }
    })

    // Update keyword associations if provided
    if (keywordIds.length >= 0) {
      // Remove existing keyword associations
      await db.contentKeyword.deleteMany({
        where: { contentId: params.id }
      })

      // Add new keyword associations
      if (keywordIds.length > 0) {
        await Promise.all(
          keywordIds.map((keywordId: string, index: number) =>
            db.contentKeyword.create({
              data: {
                contentId: params.id,
                keywordId,
                isPrimary: index === 0
              }
            })
          )
        )
      }
    }

    return NextResponse.json({
      success: true,
      data: updatedContent,
      message: 'Content updated successfully'
    })
  } catch (error) {
    console.error('Content update error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update content' },
      { status: 500 }
    )
  }
}

// DELETE /api/admin/content/[id] - Delete content
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check if content exists
    const existingContent = await db.content.findUnique({
      where: { id: params.id }
    })

    if (!existingContent) {
      return NextResponse.json(
        { success: false, error: 'Content not found' },
        { status: 404 }
      )
    }

    // Delete content (cascading deletes will handle related records)
    await db.content.delete({
      where: { id: params.id }
    })

    return NextResponse.json({
      success: true,
      message: 'Content deleted successfully'
    })
  } catch (error) {
    console.error('Content deletion error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete content' },
      { status: 500 }
    )
  }
}
