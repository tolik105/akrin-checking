/**
 * Hreflang Helper Utility
 * Generates consistent hreflang alternates for SEO
 * Fixes: hreflang self-reference, return links, and x-default issues
 */

export function generateHreflangAlternates(path: string) {
  // Normalize the path - remove /ja prefix if present to get base path
  const basePath = path.startsWith('/ja') ? path.replace(/^\/ja/, '') : path
  
  // Construct full paths
  const englishPath = basePath || '/'
  const japanesePath = basePath ? `/ja${basePath}` : '/ja'
  
  return {
    canonical: `https://akrin.jp${path}`,
    languages: {
      'en': `https://akrin.jp${englishPath}`,
      'ja': `https://akrin.jp${japanesePath}`,
      'x-default': `https://akrin.jp${englishPath}`
    }
  }
}

/**
 * Generate metadata with proper hreflang for a page
 */
export function generatePageMetadataWithHreflang(
  title: string,
  description: string,
  path: string,
  keywords?: string[]
) {
  return {
    title,
    description,
    keywords,
    alternates: generateHreflangAlternates(path)
  }
}
