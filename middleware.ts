import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl

  // Normalize double JA prefix: /ja/ja/* -> /ja/*
  if (url.pathname.startsWith('/ja/ja/')) {
    const to = new URL(url)
    to.pathname = url.pathname.replace(/^\/ja\/ja\//, '/ja/')
    return NextResponse.redirect(to, 301)
  }

  // Trailing slash normalization (keep root)
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    const to = new URL(url)
    to.pathname = url.pathname.slice(0, -1)
    return NextResponse.redirect(to, 301)
  }

  // Infer language by prefix for downstream usage
  const inferredLang = url.pathname.startsWith('/ja') ? 'ja' : 'en'
  const res = NextResponse.next()
  res.headers.set('x-akrin-lang', inferredLang)
  res.headers.set('x-pathname', url.pathname)
  return res
}

export const config = {
  matcher: ['/((?!api|_next|.*\\.).*)'],
}