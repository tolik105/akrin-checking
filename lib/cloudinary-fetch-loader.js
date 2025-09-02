export default function cloudinaryFetchLoader({ src, width, quality }) {
  // Keep dev and special cases unchanged to avoid surprises
  if (
    process.env.NODE_ENV !== 'production' ||
    !src ||
    src.startsWith('data:') ||
    src.includes('res.cloudinary.com')
  ) {
    return src
  }

  // Ensure absolute URL for Cloudinary fetch
  const absoluteUrl = src.startsWith('http') ? src : `https://akrin.jp${src}`

  // Build transformation params
  const params = [
    'f_auto',                     // Best format (AVIF/WebP, etc.)
    quality ? `q_${quality}` : 'q_auto', // Explicit q if provided, else auto
    'dpr_auto',                   // Device pixel ratio variants
    'c_limit',                    // Respect original dimensions
    `w_${width || 0}`             // Width provided by Next.js for srcset entries
  ]
    .filter(Boolean)
    .join(',')

  // Encode the URL for Cloudinary fetch
  const encoded = encodeURIComponent(absoluteUrl)
  return `https://res.cloudinary.com/dtmdovevn/image/fetch/${params}/${encoded}`
}

