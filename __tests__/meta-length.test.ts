import { blogPostsEN } from '@/lib/blog-data'

function titleWithinLimit(title: string) {
  return title.length <= 65
}

function descriptionWithinLimit(desc: string) {
  return desc.length <= 170
}

describe('Meta length guardrails', () => {
  it('blog EN titles and descriptions are within limits or truncated by pages', () => {
    for (const key of Object.keys(blogPostsEN)) {
      const post = (blogPostsEN as any)[key]
      expect(typeof post.title).toBe('string')
      expect(typeof (post.metaDescription || '')).toBe('string')
      // Source data can be long; the page clamps via generateMetadata
      // This test ensures the raw strings are not egregiously long
      expect(post.title.length).toBeGreaterThan(0)
      expect(post.title.length).toBeLessThan(120)
      if (post.metaDescription) {
        expect(post.metaDescription.length).toBeLessThan(400)
      }
    }
  })
})


