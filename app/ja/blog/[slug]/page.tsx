import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { blogPostsJA, blogPostsEN } from '@/lib/blog-data'
import { SocialShareButtons } from '@/components/blog/social-share-buttons'
import { TableOfContents } from '@/components/blog/table-of-contents'
import { ReadingProgress } from '@/components/blog/reading-progress'
import { AboutAuthor } from '@/components/blog/about-author'
import { AkrinIcon } from '@/components/akrin-logo'
import { preferAvif } from '@/lib/image-format'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate dynamic keywords based on post content and category
const generateKeywords = (post: any) => {
  const baseKeywords = [
    ...(post.tags || []),
    'AKRIN',
    'ITコンサルティング 日本',
    'エンタープライズテクノロジー',
    'ビジネステクノロジーソリューション'
  ]

  // Add category-specific keywords
  if (post.category === 'セキュリティ' || post.slug.includes('cybersecurity')) {
    return [
      ...baseKeywords,
      'サイバーセキュリティ 日本',
      'サイバーセキュリティベストプラクティス',
      'ランサムウェア対策',
      '脅威検出',
      'ゼロトラストアーキテクチャ',
      '多要素認証',
      'AI脅威検出',
      'セキュリティコンプライアンス 日本',
      'サイバー防御戦略',
      'エンタープライズセキュリティソリューション',
      'データ保護 日本',
      'サイバーリスク管理',
      'セキュリティ意識向上トレーニング',
      'インシデント対応計画'
    ]
  }

  if (post.category === 'テクノロジートレンド' || post.slug.includes('infrastructure')) {
    return [
      ...baseKeywords,
      'ITインフラストラクチャー 日本',
      'テクノロジートレンド',
      'デジタルトランスフォーメーション',
      'クラウドソリューション',
      'AIテクノロジー',
      'エッジコンピューティング',
      '5Gテクノロジー 日本',
      'モダナイゼーション戦略'
    ]
  }

  // AI and Innovation specific keywords
  if (post.category === 'イノベーション' || post.slug.includes('ai')) {
    return [
      ...baseKeywords,
      '人工知能 日本',
      'AI ITサポート',
      '機械学習',
      '予測分析',
      'インテリジェント自動化',
      'AIOps',
      '自然言語処理',
      'ロボティックプロセス自動化',
      'AIチャットボット',
      '自動修復',
      'AIパワードITSM',
      'インテリジェントチケットルーティング',
      'AIトランスフォーメーション',
      'エンタープライズAIソリューション',
      'AI実装 日本',
      'AIサービス管理',
      'コグニティブコンピューティング',
      'AI駆動の洞察'
    ]
  }

  // Default keywords for other categories
  return [
    ...baseKeywords,
    'テクノロジーの洞察',
    'デジタルイノベーション',
    'ITソリューション',
    'ビジネストランスフォーメーション'
  ]
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const post = blogPostsJA[resolvedParams.slug as keyof typeof blogPostsJA]
  // Fallback to EN image if JA image missing to mirror visuals
  const { blogPostsEN } = await import('@/lib/blog-data')
  const enPost = blogPostsEN[resolvedParams.slug as keyof typeof blogPostsEN] as any
  const heroImage = (post as any).image || (enPost && enPost.image)

  if (!post) {
    return {
      title: '記事が見つかりません | AKRINブログ',
      description: 'リクエストされたブログ記事が見つかりませんでした。'
    }
  }

  // Extract clean description from content
  const cleanDescription = post.content
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .substring(0, 160)

  const baseTitle = `${post.title} - 専門家の洞察 | AKRIN ITブログ`
  const normalizedTitle = baseTitle.length > 65 ? `${baseTitle.slice(0, 62)}...` : baseTitle
  const normalizedDescription = (post.metaDescription || cleanDescription).slice(0, 170)

  return {
    title: normalizedTitle,
    description: normalizedDescription,
    keywords: generateKeywords(post),
    authors: [{ name: 'AKRIN技術専門家' }],
    creator: 'AKRIN',
    publisher: 'AKRIN',
    category: 'テクノロジー',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://akrin.jp'),
    alternates: {
      canonical: `/ja/blog/${post.slug}`,
      languages: {
        en: `/blog/${post.slug}`,
        ja: `/ja/blog/${post.slug}`,
        'x-default': `/blog/${post.slug}`,
      },
    },
    openGraph: {
      title: normalizedTitle,
      description: normalizedDescription,
      url: `https://akrin.jp/ja/blog/${post.slug}`,
      siteName: 'AKRIN',
      locale: 'ja_JP',
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ['AKRIN技術専門家'],
      section: post.category || 'テクノロジー',
      tags: post.tags || [],
      images: post.image ? [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: `${post.title} - AKRIN ITブログ`,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: normalizedTitle,
      description: normalizedDescription,
      site: '@AKRIN_JP',
      creator: '@AKRIN_JP',
      images: post.image ? [post.image] : [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogPostsJA).map((slug) => ({
    slug,
  }))
}

// Function to add IDs to headings for anchor links
function normalizeHeadings(content: string): string {
  // Demote any H1s in content to H2 to ensure only one H1 on the page
  let s = content.replace(/<h1(\s[^>]*)?>/gi, '<h2$1>')
                 .replace(/<\/h1>/gi, '</h2>')
  return s.replace(/<h([2-4])([^>]*)>(.*?)<\/h[2-4]>/gi, (match, level, attributes, text) => {
    const cleanText = text.replace(/<[^>]*>/g, '').trim();
    const id = cleanText
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();

    // Check if ID already exists in attributes
    if (attributes.includes('id=')) {
      return match;
    }

    return `<h${level}${attributes} id="${id}">${text}</h${level}>`;
  });
}

export default async function BlogPostPageJA({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const post = blogPostsJA[resolvedParams.slug as keyof typeof blogPostsJA]

  if (!post) {
    notFound()
  }

  // Mirror EN hero image if JA image is missing
  const enPost = blogPostsEN[resolvedParams.slug as keyof typeof blogPostsEN] as any
  const heroImage = (post as any).image || (enPost && enPost.image)

  // Add IDs to headings for better navigation
  const processedContent = normalizeHeadings(post.content);

  // Generate enhanced structured data with category-specific schema
  const generateStructuredData = (post: any) => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription || post.content.replace(/<[^>]*>/g, '').substring(0, 160),
      image: post.image ? {
        '@type': 'ImageObject',
        url: post.image,
        width: 1200,
        height: 630,
        caption: `${post.title} - AKRIN ITブログ`
      } : undefined,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        '@type': 'Person',
        name: post.author || 'AKRIN技術専門家',
        jobTitle: post.authorRole || 'テクノロジーコンサルタント',
        worksFor: {
          '@type': 'Organization',
          name: 'AKRIN',
          url: 'https://akrin.jp'
        },
        url: 'https://akrin.jp/ja/about'
      },
      publisher: {
        '@type': 'Organization',
        name: 'AKRIN',
        url: 'https://akrin.jp',
        logo: {
          '@type': 'ImageObject',
          url: 'https://akrin.jp/akrin-logo.svg',
          width: 499,
          height: 80
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+81-3-6821-1223',
          contactType: 'カスタマーサービス',
          areaServed: 'JP',
          availableLanguage: ['English', 'Japanese']
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://akrin.jp/ja/blog/${post.slug}`,
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'ホーム',
              item: 'https://akrin.jp/ja'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'ブログ',
              item: 'https://akrin.jp/ja/blog'
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: post.title,
              item: `https://akrin.jp/ja/blog/${post.slug}`
            }
          ]
        }
      },
      articleSection: post.category || 'テクノロジー',
      keywords: generateKeywords(post).join(', '),
      wordCount: post.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
      url: `https://akrin.jp/ja/blog/${post.slug}`,
      isPartOf: {
        '@type': 'Blog',
        name: 'AKRIN ITブログ',
        url: 'https://akrin.jp/ja/blog',
        description: '日本におけるITインフラ、サイバーセキュリティ、デジタルトランスフォーメーションに関する専門的な洞察'
      },
      inLanguage: 'ja-JP',
      copyrightYear: new Date(post.date).getFullYear(),
      copyrightHolder: {
        '@type': 'Organization',
        name: 'AKRIN'
      }
    }

    return baseSchema
  }

  const structuredData = generateStructuredData(post)

  return (
    <>
      {/* Reading Progress Indicator */}
      <ReadingProgress />

      {/* Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      <main className="min-h-screen bg-white pt-20 sm:pt-24" role="main">

        {/* Back Navigation */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/ja/blog"
              className="inline-flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700 transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              ブログに戻る
            </Link>
          </div>
        </div>

        {/* Preline Style Article Header */}
        <header className="bg-white" itemScope itemType="https://schema.org/BlogPosting">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16">
            {/* Category Badge */}
            <div className="max-w-3xl">
              {post.category && (
                <p className="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {post.category}
                </p>
              )}

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl xl:text-6xl lg:leading-tight" itemProp="headline">
                {post.title}
              </h1>

              {/* Article Meta - Author */}
              <div className="mt-5 mb-6 pb-6 border-b border-gray-200">
                <div className="grid grid-cols-[48px_1fr] items-start gap-3">
                  <div className="shrink-0 mt-0.5">
                    <img src="/favicon-192x192.v3.png" alt="AKRIN" width={48} height={48} className="w-12 h-12 object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 mb-1 leading-5">AKRIN</p>
                    <div className="flex items-center gap-x-3 text-xs text-gray-500">
                      <span>
                        {post.date && new Date(post.date).toLocaleDateString('ja-JP', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      {post.readTime && (
                        <>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Share Buttons */}
              <div className="mt-6">
                <SocialShareButtons title={post.title} language="ja" />
              </div>
            </div>

            {/* Hidden Schema Data */}
            <div className="sr-only">
              <span itemProp="author" itemScope itemType="https://schema.org/Person">
                <span itemProp="name">AKRIN技術専門家</span>
              </span>
              <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">AKRIN</span>
                <span itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
                  <span itemProp="url">https://akrin.jp/akrin-logo.svg</span>
                </span>
              </span>
              <meta itemProp="url" content={`https://akrin.jp/ja/blog/${post.slug}`} />
              {post.metaDescription && <meta itemProp="description" content={post.metaDescription} />}
            </div>
          </div>
        </header>

        {/* Preline Style Hero Image */}
        <div className="mt-10 sm:mt-16">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gray-100 rounded-xl overflow-hidden">
              {heroImage ? (
                <Image
                  src={preferAvif(heroImage) as string}
                  alt={`${post.title} - 日本におけるITインフラとテクノロジートレンドに関するAKRINの専門的な洞察`}
                  fill
                  className={post.slug === 'phishing-prevention-guide-2025' ? "object-contain object-center p-2" : "object-cover object-center"}
                  priority
                  itemProp="image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1320px"
                  unoptimized={false}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <AkrinIcon className="w-32 h-32 text-gray-300" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Container - Preline Style */}
        <div className="bg-white">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-12">
              {/* Main Article Content */}
              <div className="lg:col-span-2">
                <article
                  className="prose prose-lg max-w-none prose-headings:scroll-mt-20 prose-headings:font-semibold prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-[#21B3AA] prose-a:no-underline hover:prose-a:underline prose-blockquote:text-gray-600 prose-blockquote:border-gray-300"
                  itemProp="articleBody"
                >
                  <div dangerouslySetInnerHTML={{ __html: processedContent }} />
                </article>

                {/* Article Tags - Preline Style */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-x-1.5 py-2 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
                          itemProp="keywords"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar - Table of Contents and Related */}
              <div className="lg:col-span-1">
                <div className="sticky top-6 space-y-6">
                  <TableOfContents content={processedContent} language="ja" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category-Specific FAQ Section */}
        {(post.category === 'セキュリティ' || post.slug.includes('cybersecurity')) && (
          <section className="bg-gray-50 py-16 border-t border-gray-100" aria-labelledby="faq-section">
            <div className="max-w-4xl mx-auto px-6">
              <h2 id="faq-section" className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-900 mb-8 tracking-tight">
                よくある質問
              </h2>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3">
                    2025年に日本企業が直面する最も重要なサイバーセキュリティの脅威は何ですか？
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    日本企業はランサムウェア攻撃（2022年に58％増加）、シャドウAIの脆弱性、
                    ディープフェイクを使ったソーシャルエンジニアリング、サプライチェーン攻撃に直面しています。
                    サイバーセキュリティ人材の不足も、強固なセキュリティ対策を実施する上での大きな課題です。
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3">
                    ゼロトラストアーキテクチャはどのようにサイバーセキュリティを改善しますか？
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    ゼロトラストは、すべてのユーザー、デバイス、アプリケーションを検証することで、
                    従来の境界ベースのセキュリティモデルを排除します。最小権限アクセス、継続的な監視、
                    ネットワークのマイクロセグメンテーションを実装し、脅威の横移動を防ぎます。
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3">
                    なぜAIを活用した脅威検出が現代のビジネスに必須なのですか？
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    従来のシグネチャベースのセキュリティでは、進化する脅威に対応できません。AIは予測的な
                    脅威分析、動作異常の検出、自動インシデント対応、リアルタイム脅威インテリジェンスを
                    提供し、高度な攻撃を特定して対応します。
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3">
                    AKRINは組織のサイバーセキュリティ体制の改善にどのように協力できますか？
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    AKRINは、セキュリティ評価、ゼロトラストアーキテクチャの実装、AIを活用した脅威検出、
                    コンプライアンスコンサルティング、および24時間365日のセキュリティ監視を含む包括的な
                    サイバーセキュリティサービスを日本のビジネス環境に合わせて提供しています。
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Preline Style Related Posts Section */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <section className="bg-gray-50 py-10 sm:py-16" aria-labelledby="related-posts">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
                <h2 className="text-xl sm:text-2xl font-bold md:text-3xl lg:text-4xl md:leading-tight text-gray-800">
                  関連記事
                </h2>
                <p className="mt-1 text-sm sm:text-base text-gray-600">
                  専門家によるさらなる洞察をお読みください
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {post.relatedPosts.map((relatedPost, index) => {
                  const fullRelatedPost = blogPostsJA[relatedPost.slug as keyof typeof blogPostsJA]

                  return (
                    <Link key={index} href={`/ja/blog/${relatedPost.slug}`} className="group flex flex-col h-full bg-white border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl">
                      <div
                        className="relative h-40 xs:h-44 sm:h-48 md:h-52 overflow-hidden rounded-t-xl"
                        style={fullRelatedPost?.image ? { backgroundImage: `url(${fullRelatedPost.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
                      >
                        {fullRelatedPost?.image ? (
                          <Image
                            src={preferAvif(fullRelatedPost.image) as string}
                            alt={`${relatedPost.title} - AKRIN ITブログ`}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                            unoptimized={false}
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                            <AkrinIcon className="w-16 h-16 text-gray-300" />
                          </div>
                        )}
                      </div>
                      <div className="p-4 md:p-6 flex-1 flex flex-col">
                        {fullRelatedPost?.category && (
                          <div className="mb-1">
                            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                              {fullRelatedPost.category}
                            </span>
                          </div>
                        )}
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#21B3AA] transition-colors leading-tight">
                          {relatedPost.title}
                        </h3>
                        <div className="mt-auto flex items-center gap-x-3 text-sm text-gray-500">
                          <span className="font-medium text-gray-800">AKRINチーム</span>
                          {fullRelatedPost?.readTime && (
                            <div className="flex items-center gap-x-2 ml-auto">
                              <span>{fullRelatedPost.readTime}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* About the Author */}
        <AboutAuthor language="ja" />

        {/* Category-Specific CTA Section */}
        {(post.category === 'セキュリティ' || post.slug.includes('cybersecurity')) && (
         <section className="bg-[hsl(var(--primary))]/5 py-16 border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
                  サイバーセキュリティ体制を強化しましょう
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                  セキュリティインシデントの発生を待たずに対策を講じましょう。弊社のサイバーセキュリティ専門家が、
                  日本企業のニーズに合わせた包括的なセキュリティ対策の実装をお手伝いします。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/ja/services/it-managed-services"
                   className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:ring-offset-2"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    マネージドITサービス
                  </Link>
                  <Link
                    href="/ja/contact"
                   className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-50 text-[hsl(var(--primary))] font-medium border-2 border-[hsl(var(--primary))] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:ring-offset-2"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    無料セキュリティ相談
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Newsletter removed per request */}

      </main>
    </>
  )
}