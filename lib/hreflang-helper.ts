/**
 * Helper function to generate consistent hreflang alternates for SEO
 * Ensures bidirectional linking between English and Japanese pages
 */
export function generateHreflangAlternates(path: string) {
  // Remove /ja prefix if present to get the base path
  const basePath = path.startsWith('/ja') ? path.replace(/^\/ja/, '') : path
  const englishPath = basePath || '/'
  const japanesePath = `/ja${basePath}`
  
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
 * Generate hreflang alternates for a specific page
 * @param englishPath - The English version path (e.g., '/services/it-managed-services')
 * @param japanesePath - The Japanese version path (e.g., '/ja/services/it-managed-services')
 */
export function generatePageHreflang(englishPath: string, japanesePath: string) {
  return {
    languages: {
      'en': `https://akrin.jp${englishPath}`,
      'ja': `https://akrin.jp${japanesePath}`,
      'x-default': `https://akrin.jp${englishPath}`
    }
  }
}
