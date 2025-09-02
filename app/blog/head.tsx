import { blogPostsEN } from '@/lib/blog-data'

// Preload the featured image as the LCP resource with matching imagesrcset/imagesizes
// This does not change visuals or SEO; it only accelerates image discovery.
export default function Head() {
  const featured = Object.values(blogPostsEN)[0] as any
  const rawSrc = featured?.image as string | undefined
  if (!rawSrc) return null

  // Must match next/image sizes used for the featured image
  const imageSizes = '(max-width: 1024px) 100vw, 384px'
  // Reasonable subset of deviceSizes for mobile-first selection
  const widths = [640, 750, 828, 1080]
  const q = 50

  // Construct Next.js optimizer URLs; keep href pointing to a common mobile width
  const enc = encodeURIComponent(rawSrc)
  const srcset = widths
    .map((w) => `/_next/image?url=${enc}&w=${w}&q=${q} ${w}w`)
    .join(', ')
  const href = `/_next/image?url=${enc}&w=750&q=${q}`

  return (
    <>
      <link
        rel="preload"
        as="image"
        // @ts-expect-error - imagesrcset is a valid attribute on link for image preloads
        imagesrcset={srcset}
        // @ts-expect-error - imagesizes is a valid attribute on link for image preloads
        imagesizes={imageSizes}
        href={href}
        fetchpriority="high"
      />
    </>
  )
}

