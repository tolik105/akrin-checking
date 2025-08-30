/**
 * Individual Media Item API Endpoints
 * Handles GET, PUT, DELETE operations for specific media items
 */

import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { unlink } from 'fs/promises'
import path from 'path'

// GET /api/admin/media/[id] - Get specific media item
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const media = await db.contentMedia.findUnique({
      where: { id: params.id },
      include: {
        content: {
          select: { id: true, title: true, slug: true }
        }
      }
    })

    if (!media) {
      return NextResponse.json(
        { success: false, error: 'Media not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: media
    })
  } catch (error) {
    console.error('Media fetch error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch media' },
      { status: 500 }
    )
  }
}

// PUT /api/admin/media/[id] - Update media item
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { altText, caption, contentId } = body

    // Check if media exists
    const existingMedia = await db.contentMedia.findUnique({
      where: { id: params.id }
    })

    if (!existingMedia) {
      return NextResponse.json(
        { success: false, error: 'Media not found' },
        { status: 404 }
      )
    }

    // Update media
    const updatedMedia = await db.contentMedia.update({
      where: { id: params.id },
      data: {
        ...(altText !== undefined && { altText }),
        ...(caption !== undefined && { caption }),
        ...(contentId !== undefined && { contentId })
      },
      include: {
        content: {
          select: { id: true, title: true, slug: true }
        }
      }
    })

    return NextResponse.json({
      success: true,
      data: updatedMedia,
      message: 'Media updated successfully'
    })
  } catch (error) {
    console.error('Media update error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update media' },
      { status: 500 }
    )
  }
}

// DELETE /api/admin/media/[id] - Delete media item
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Get media record
    const media = await db.contentMedia.findUnique({
      where: { id: params.id }
    })

    if (!media) {
      return NextResponse.json(
        { success: false, error: 'Media not found' },
        { status: 404 }
      )
    }

    // Delete file from filesystem
    try {
      const filePath = path.join(process.cwd(), 'public', media.url)
      await unlink(filePath)
    } catch (fileError) {
      console.warn('Failed to delete file from filesystem:', fileError)
      // Continue with database deletion even if file deletion fails
    }

    // Delete media record from database
    await db.contentMedia.delete({
      where: { id: params.id }
    })

    return NextResponse.json({
      success: true,
      message: 'Media deleted successfully'
    })
  } catch (error) {
    console.error('Media deletion error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete media' },
      { status: 500 }
    )
  }
}
