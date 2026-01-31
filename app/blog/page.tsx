import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata-helpers'
import React from "react"
import { SimpleBlogWithGrid } from "@/components/ui/simple-blog-with-grid"
import { client } from "@/lib/sanity.client"
import { postsQuery } from "@/lib/sanity.queries"

// Enhanced SEO metadata for blog listing page
export const metadata: Metadata = generatePageMetadata({
  title: 'Akrin IT Blog | Insights on Tech & Security in Japan',
  description: 'Expert insights on IT infrastructure, cybersecurity, cloud solutions, and digital transformation in Japan.',
  keywords: [
    'IT blog Japan',
    'technology insights',
    'cybersecurity Japan',
    'cloud solutions',
    'IT infrastructure',
    'digital transformation',
    'enterprise technology'
  ],
  path: '/blog',
  image: '/og-image.png'
})

// Route-level performance hints: ISR with hourly revalidation
export const revalidate = 3600

// Fetch posts from Sanity
async function getPosts() {
  return await client.fetch(postsQuery)
}

// Generate structured data for blog listing
function generateBlogStructuredData(posts: any[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'AKRIN IT Blog',
    description: 'Expert insights on IT infrastructure, cybersecurity, cloud solutions, and digital transformation in Japan',
    url: 'https://akrin.jp/blog',
    publisher: {
      '@type': 'Organization',
      name: 'AKRIN',
      url: 'https://akrin.jp',
      logo: {
        '@type': 'ImageObject',
        url: 'https://akrin.jp/akrin-logo.svg',
        width: 499,
        height: 80
      }
    },
    blogPost: posts.slice(0, 10).map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription,
      url: `https://akrin.jp/blog/${post.slug?.current || post.slug}`,
      datePublished: post.publishedAt || post.date,
      dateModified: post.publishedAt || post.date,
      author: {
        '@type': 'Person',
        name: post.author || 'AKRIN Expert'
      },
      publisher: {
        '@type': 'Organization',
        name: 'AKRIN',
        logo: {
          '@type': 'ImageObject',
          url: 'https://akrin.jp/akrin-logo.svg'
        }
      },
      image: post.mainImage?.asset?.url || post.image ? {
        '@type': 'ImageObject',
        url: post.mainImage?.asset?.url || post.image,
        width: 1200,
        height: 630
      } : undefined,
      articleSection: post.category || 'Technology',
      keywords: post.tags?.join(', ') || 'IT, Technology, Japan'
    }))
  }
}

export default async function BlogPage() {
  const posts = await getPosts()
  const structuredData = generateBlogStructuredData(posts)

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      {/* Enhanced semantic HTML structure */}
      <main className="flex min-h-screen flex-col bg-white" role="main">
        <div className="pt-20">
          {/* Hidden H1 for SEO */}
          <h1 className="sr-only">
            AKRIN IT Blog - Expert Technology Insights and Resources for Japanese Businesses
          </h1>

          {/* Blog content with semantic structure */}
          <section aria-label="Blog posts and articles">
            <SimpleBlogWithGrid language="en" posts={posts} />
          </section>
        </div>
      </main>
    </>
  )
}