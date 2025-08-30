/**
 * Categories Management API Endpoints
 * Handles CRUD operations for content categories
 */

import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/admin/categories - List all categories
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const includeStats = searchParams.get('includeStats') === 'true'

    const categories = await db.category.findMany({
      orderBy: { sortOrder: 'asc' },
      include: includeStats ? {
        _count: {
          select: { content: true }
        }
      } : undefined
    })

    return NextResponse.json({
      success: true,
      data: categories
    })
  } catch (error) {
    console.error('Categories fetch error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch categories' },
      { status: 500 }
    )
  }
}

// POST /api/admin/categories - Create new category
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      nameEn,
      nameJa,
      slugEn,
      slugJa,
      description,
      color,
      sortOrder = 0
    } = body

    // Validate required fields
    if (!nameEn || !slugEn) {
      return NextResponse.json(
        { success: false, error: 'English name and slug are required' },
        { status: 400 }
      )
    }

    // Check if slug is unique
    const existingCategory = await db.category.findFirst({
      where: {
        OR: [
          { slugEn },
          ...(slugJa ? [{ slugJa }] : [])
        ]
      }
    })

    if (existingCategory) {
      return NextResponse.json(
        { success: false, error: 'Slug already exists' },
        { status: 400 }
      )
    }

    const category = await db.category.create({
      data: {
        nameEn,
        nameJa,
        slugEn,
        slugJa,
        description,
        color,
        sortOrder
      }
    })

    return NextResponse.json({
      success: true,
      data: category,
      message: 'Category created successfully'
    })
  } catch (error) {
    console.error('Category creation error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create category' },
      { status: 500 }
    )
  }
}

// PUT /api/admin/categories - Bulk update category order
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { categories } = body

    if (!Array.isArray(categories)) {
      return NextResponse.json(
        { success: false, error: 'Categories array is required' },
        { status: 400 }
      )
    }

    // Update sort order for each category
    await Promise.all(
      categories.map((cat: { id: string; sortOrder: number }) =>
        db.category.update({
          where: { id: cat.id },
          data: { sortOrder: cat.sortOrder }
        })
      )
    )

    return NextResponse.json({
      success: true,
      message: 'Category order updated successfully'
    })
  } catch (error) {
    console.error('Category order update error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update category order' },
      { status: 500 }
    )
  }
}
