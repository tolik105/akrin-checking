export const runtime = 'edge'

const content = `# AKRIN Website

## Overview
AKRIN K.K. provides IT solutions in Japan, including managed services, cybersecurity, cloud migration, and 24/7 support.

## Primary URLs
- https://akrin.jp/
- https://akrin.jp/services
- https://akrin.jp/case-studies
- https://akrin.jp/blog
- https://akrin.jp/contact

## Supported Languages
- English: https://akrin.jp/
- Japanese: https://akrin.jp/ja

## Contact
- https://akrin.jp/contact
`

export function GET() {
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
