import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata-helpers'
import React from "react"
import { SimpleBlogWithGrid } from "@/components/ui/simple-blog-with-grid"
import { blogPostsJA } from "@/lib/blog-data"

// Enhanced SEO metadata for Japanese blog listing page
export const metadata: Metadata = generatePageMetadata({
  title: 'ITブログ＆リソース | AKRIN - 専門的な技術の洞察',
  description: '日本におけるITインフラ・サイバーセキュリティ・クラウド・DXの専門的な洞察。',
  keywords: [
    'ITブログ 日本',
    'テクノロジーの洞察',
    'サイバーセキュリティ',
    'クラウド',
    'ITインフラ',
    'デジタルトランスフォーメーション'
  ],
  path: '/ja/blog',
  image: '/og-image.png'
})

// Generate structured data for Japanese blog listing
function generateBlogStructuredData() {
  const posts = Object.values(blogPostsJA)

  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'AKRIN ITブログ',
    description: '日本におけるITインフラストラクチャー、サイバーセキュリティ、クラウドソリューション、デジタルトランスフォーメーションに関する専門的な洞察',
    url: 'https://akrin.jp/ja/blog',
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
      url: `https://akrin.jp/ja/blog/${post.slug}`,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        '@type': 'Person',
        name: post.author || 'AKRIN専門家'
      },
      publisher: {
        '@type': 'Organization',
        name: 'AKRIN',
        logo: {
          '@type': 'ImageObject',
          url: 'https://akrin.jp/akrin-logo.svg'
        }
      },
      image: post.image ? {
        '@type': 'ImageObject',
        url: post.image,
        width: 1200,
        height: 630
      } : undefined,
      articleSection: post.category || 'テクノロジー',
      keywords: post.tags?.join(', ') || 'IT, テクノロジー, 日本'
    }))
  }
}

export default function BlogPageJA() {
  const structuredData = generateBlogStructuredData()

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
            AKRIN ITブログ - 日本企業のための専門的な技術の洞察とリソース
          </h1>

          {/* Blog content with semantic structure */}
          <section aria-label="ブログ記事">
            <SimpleBlogWithGrid language="ja" />
          </section>
        </div>
      </main>
    </>
  )
}