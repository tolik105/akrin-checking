import { NextResponse } from 'next/server'
import { createReadStream, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Serve files from public/images/case-studies under /case-studies/case-assets/*
const CASE_ASSETS_DIR = path.join(process.cwd(), 'public', 'images', 'case-studies')

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path: segments } = await params
  const fileRel = segments.join('/')
  const filePath = path.join(CASE_ASSETS_DIR, fileRel)

  try {
    const stat = statSync(filePath)
    if (!stat.isFile()) return new NextResponse('Not found', { status: 404 })

    const ext = path.extname(filePath).toLowerCase()
    const mime =
      ext === '.avif' ? 'image/avif' :
      ext === '.webp' ? 'image/webp' :
      ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' :
      ext === '.png' ? 'image/png' :
      'application/octet-stream'

    const stream = createReadStream(filePath)
    return new NextResponse(stream as any, {
      headers: {
        'Content-Type': mime,
        'Cache-Control': 'public, max-age=86400, immutable',
      },
    })
  } catch {
    return new NextResponse('Not found', { status: 404 })
  }
}

