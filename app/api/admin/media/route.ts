/**
 * Media Management API Endpoints
 * Handles file uploads and media management for content
 */

import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { db } from '@/lib/db'

// GET /api/admin/media - List media files
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const contentId = searchParams.get('contentId')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')

    const skip = (page - 1) * limit

    const where = contentId ? { contentId } : {}

    const [media, total] = await Promise.all([
      db.contentMedia.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          content: {
            select: { id: true, title: true, slug: true }
          }
        }
      }),
      db.contentMedia.count({ where })
    ])

    return NextResponse.json({
      success: true,
      data: media,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Media fetch error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch media' },
      { status: 500 }
    )
  }
}

// POST /api/admin/media - Upload media file
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const contentId = formData.get('contentId') as string
    const altText = formData.get('altText') as string
    const caption = formData.get('caption') as string

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file provided' },
        { status: 400 }
      )
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { success: false, error: 'Invalid file type. Only images are allowed.' },
        { status: 400 }
      )
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024 // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { success: false, error: 'File too large. Maximum size is 5MB.' },
        { status: 400 }
      )
    }

    // Generate unique filename
    const timestamp = Date.now()
    const extension = path.extname(file.name)
    const filename = `${timestamp}-${Math.random().toString(36).substring(2)}${extension}`
    
    // Create upload directory if it doesn't exist
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'content')
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true })
    }

    // Save file
    const filePath = path.join(uploadDir, filename)
    const bytes = await file.arrayBuffer()
    await writeFile(filePath, Buffer.from(bytes))

    // Create media record in database
    const url = `/uploads/content/${filename}`
    const mediaRecord = await db.contentMedia.create({
      data: {
        contentId: contentId || '', // Will be updated when associated with content
        filename,
        originalName: file.name,
        mimeType: file.type,
        size: file.size,
        url,
        altText: altText || '',
        caption: caption || ''
      }
    })

    return NextResponse.json({
      success: true,
      data: mediaRecord,
      message: 'File uploaded successfully'
    })
  } catch (error) {
    console.error('Media upload error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to upload file' },
      { status: 500 }
    )
  }
}

// DELETE /api/admin/media - Delete media file
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const mediaId = searchParams.get('id')

    if (!mediaId) {
      return NextResponse.json(
        { success: false, error: 'Media ID is required' },
        { status: 400 }
      )
    }

    // Get media record
    const media = await db.contentMedia.findUnique({
      where: { id: mediaId }
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
      const fs = await import('fs/promises')
      await fs.unlink(filePath)
    } catch (fileError) {
      console.warn('Failed to delete file from filesystem:', fileError)
      // Continue with database deletion even if file deletion fails
    }

    // Delete media record from database
    await db.contentMedia.delete({
      where: { id: mediaId }
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
