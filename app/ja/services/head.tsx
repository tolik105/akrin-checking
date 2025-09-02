// Preload the LCP hero image for JA Services to improve LCP
// Matches the next/image sizes/quality used in ServicesClient hero
export default function Head() {
  const rawSrc = 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  const imageSizes = '(max-width: 1024px) 100vw, 640px'
  const widths = [640, 750, 828, 1080]
  const q = 50
  const enc = encodeURIComponent(rawSrc)
  const srcset = widths
    .map((w) => `/_next/image?url=${enc}&w=${w}&q=${q} ${w}w`)
    .join(', ')
  // Bias mobile candidate to 640w for smaller bytes on first request
  const href = `/_next/image?url=${enc}&w=640&q=${q}`

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

