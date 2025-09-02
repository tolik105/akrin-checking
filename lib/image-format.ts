// AVIF-first helper for local blog images under public/
// Given a path like "/blog-images/foo.webp" returns the AVIF candidate first,
// falling back to the original if the browser negotiates WebP.

export function preferAvif(imagePath: string | null | undefined): string | null {
  if (!imagePath) return null;
  // Only rewrite local blog images with known webp/avif pairs
  if (typeof imagePath === 'string' && imagePath.startsWith('/blog-images/')) {
    // Switch file extension to .avif while keeping the same basename
    if (imagePath.toLowerCase().endsWith('.webp')) {
      return imagePath.slice(0, -5) + '.avif';
    }
    // If already .avif or other static format, leave as-is
    return imagePath;
  }
  return imagePath || null;
}



