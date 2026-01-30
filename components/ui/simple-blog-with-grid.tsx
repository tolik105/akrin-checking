
  // Stable description derivation to avoid hydration mismatches
  function deriveDescription(post: any): string {
    // Prefer a stable excerpt or metaDescription if available
    const src = typeof post.excerpt === 'string' && post.excerpt.trim().length > 0
      ? post.excerpt
      : (typeof post.metaDescription === 'string' && post.metaDescription.trim().length > 0
        ? post.metaDescription
        : (typeof post.htmlContent === 'string' ? post.htmlContent : (typeof post.content === 'string' ? post.content : '')))

    // Strip HTML if content chosen, normalize whitespace, and clamp length
    const plain = src
      .replace(/<[^>]*>/g, ' ') // remove tags
      .replace(/\s+/g, ' ')    // collapse whitespace including newlines
      .trim()

    const max = 200
    return plain.length > max ? plain.slice(0, max) + '...' : plain
  }

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AkrinIcon } from "@/components/akrin-logo";
import Image from "next/image";
import { preferAvif } from "@/lib/image-format";

// Blog type definition
interface Blog {
  title: string;
  description: string;
  slug: string;
  date?: string;
  readTime?: string;
  category?: string;
  featured?: boolean;
  image?: string | null;
}

// Sanity post type
interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  metaDescription?: string;
  excerpt?: string;
  mainImage?: { asset?: { url?: string }; alt?: string };
  imageUrl?: string;
  htmlContent?: string;
  author?: string;
  authorRole?: string;
  publishedAt?: string;
  readTime?: string;
  category?: string;
  tags?: string[];
}

interface SimpleBlogWithGridProps {
  language?: 'en' | 'ja';
  posts?: SanityPost[];
}

export function SimpleBlogWithGrid({ language = 'en', posts }: SimpleBlogWithGridProps = {}) {
  // Convert Sanity posts to the format expected by the component
  const blogs = (posts || []).map((post: SanityPost) => ({
    title: post.title,
    description: deriveDescription(post),
    slug: post.slug?.current || '',
    date: post.publishedAt,
    readTime: post.readTime,
    category: post.category,
    featured: false,
    image: post.mainImage?.asset?.url || post.imageUrl || null
  }));

  // Guard against empty posts
  if (blogs.length === 0) {
    return (
      <div className="relative overflow-hidden bg-white">
        <section className="bg-white">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl font-bold md:text-3xl lg:text-4xl md:leading-tight text-gray-800">
                {language === 'ja' ? 'ブログ記事がありません' : 'No blog posts available'}
              </h2>
              <p className="mt-4 text-gray-600">
                {language === 'ja' ? 'まもなくコンテンツを追加します。' : 'Content coming soon.'}
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Separate featured post (first one) from the rest
  const featuredPost = blogs[0];
  const remainingPosts = blogs.slice(1);

  // Language-specific content
  const content = {
    en: {
      title: "Read our latest news",
      subtitle: "Expert insights on IT infrastructure, cybersecurity, and digital transformation",
      newsletterTitle: "Subscribe to our newsletter",
      newsletterSubtitle: "Stay up to date with the latest news and insights from AKRIN",
      emailPlaceholder: "Email",
      subscribeButton: "Subscribe",
      noSpamText: "No spam ever. Unsubscribe anytime.",
      teamName: "AKRIN Team"
    },
    ja: {
      title: "最新ニュースをお読みください",
      subtitle: "ITインフラ、サイバーセキュリティ、デジタルトランスフォーメーションに関する専門的な洞察",
      newsletterTitle: "ニュースレターに登録",
      newsletterSubtitle: "AKRINの最新ニュースと洞察をお届けします",
      emailPlaceholder: "メールアドレス",
      subscribeButton: "登録する",
      noSpamText: "スパムはありません。いつでも登録解除できます。",
      teamName: "AKRINチーム"
    }
  };

  const t = content[language];

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Hero Section - Preline Style */}
      <section className="bg-white">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
          {/* Title */}
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-xl sm:text-2xl font-bold md:text-3xl lg:text-4xl md:leading-tight text-gray-800">
              {t.title}
            </h2>
            <p className="mt-1 text-sm sm:text-base text-gray-600">
              {t.subtitle}
            </p>
          </div>

          {/* Featured Article - Preline Card Style */}
          <div className="max-w-[85rem] mx-auto">
            <Link href={`${language === 'ja' ? '/ja' : ''}/blog/${featuredPost.slug}`} className="group block">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="lg:flex">
                  <div className="flex-shrink-0 relative w-full lg:w-96 h-36 xs:h-40 lg:h-64 rounded-t-xl lg:rounded-t-none lg:rounded-l-xl overflow-hidden">
                    {featuredPost.image ? (
                      <Image
                        src={preferAvif(featuredPost.image) as string}
                        alt={featuredPost.title}
                        fill
                        className={featuredPost.slug === 'phishing-prevention-guide-2025' ? "object-contain object-center p-2 w-full h-full" : "object-cover object-center transition-transform duration-700 w-full h-full lg:group-hover:scale-105"}
                        priority
                        fetchPriority="high"
                        sizes="(max-width: 1024px) 100vw, 384px"
                        quality={50}
                        unoptimized={false}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <AkrinIcon className="w-20 h-20 text-gray-300" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col h-full p-3 sm:p-7">
                    <div className="mb-3">
                      {featuredPost.category && (
                        <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                          {featuredPost.category}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-[#21B3AA] transition-colors leading-tight">
                      {featuredPost.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-gray-600 line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
                      {featuredPost.description}
                    </p>
                    <div className="mt-5 sm:mt-auto">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <span className="font-medium text-gray-800">{t.teamName}</span>
                        </div>
                        <div className="flex items-center gap-x-2 text-sm text-gray-500 ml-auto">
                          {featuredPost.date && (
                            <>
                              <time dateTime={featuredPost.date}>
                                {new Date(featuredPost.date).toLocaleDateString(language === 'ja' ? 'ja-JP' : 'en-US', {
                                  year: 'numeric',
                                  month: language === 'ja' ? 'long' : 'short',
                                  day: 'numeric'
                                })}
                              </time>
                              <span>·</span>
                            </>
                          )}
                          {featuredPost.readTime && <span>{featuredPost.readTime}</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Secondary Articles Grid - Preline Style */}
      <section className="bg-gray-50">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingPosts.map((blog, index) => (
              <div key={blog.slug} className={index > 2 ? 'cv-auto' : undefined}>
                <BlogCard blog={blog} variant="grid" language={language} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - Preline Style */}
      <section className="bg-white">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-bold md:text-3xl md:leading-tight text-gray-800">
              {t.newsletterTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              {t.newsletterSubtitle}
            </p>
          </div>

          <form className="mt-10 max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="email"
                  className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-[#21B3AA] focus:ring-[#21B3AA] disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2"
                  placeholder={t.emailPlaceholder}
                />
                <label className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-gray-500
                  peer-[:not(:placeholder-shown)]:text-xs
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-gray-500">
                  {t.emailPlaceholder}
                </label>
              </div>
              <button
                type="submit"
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#21B3AA] text-white hover:bg-[#1ea497] disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-[#21B3AA]"
              >
                {t.subscribeButton}
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </button>
            </div>
            <p className="mt-3 text-center text-sm text-gray-500">
              {t.noSpamText}
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}



export const BlogCard = ({ blog, variant = "grid", language = "en" }: { blog: Blog; variant?: "grid" | "sidebar" | "main"; language?: "en" | "ja" }) => {
  const truncate = (text: string, length: number) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };
  const isPhishing = blog.slug === 'phishing-prevention-guide-2025'

  // Preline-style grid card
  if (variant === "grid") {
    return (
      <Link href={`${language === 'ja' ? '/ja' : ''}/blog/${blog.slug}`} className="group flex flex-col h-full bg-white border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl">
        <div className="relative w-full h-32 xs:h-36 sm:h-40 md:h-52 overflow-hidden rounded-t-xl">
          {blog.image ? (
            <Image
              src={preferAvif(blog.image) as string}
              alt={blog.title}
              fill
              className={isPhishing ? "object-contain object-center p-1 w-full h-full" : "object-cover object-center transition-transform duration-700 w-full h-full sm:group-hover:scale-105"}
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
          <div className="mb-1">
            {blog.category && (
              <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                {blog.category}
              </span>
            )}
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#21B3AA] transition-colors leading-tight">
            {truncate(blog.title, 85)}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
            {truncate(blog.description, 120)}
          </p>
          <div className="flex items-center gap-x-3 text-sm text-gray-500">
            <span className="font-medium text-gray-800">{language === 'ja' ? 'AKRINチーム' : 'AKRIN Team'}</span>
            <div className="flex items-center gap-x-2 ml-auto">
              {blog.date && (
                <>
                  <time dateTime={blog.date}>
                    {new Date(blog.date).toLocaleDateString(language === 'ja' ? 'ja-JP' : 'en-US', {
                      year: 'numeric',
                      month: language === 'ja' ? 'long' : 'short',
                      day: 'numeric'
                    })}
                  </time>
                </>
              )}
              {blog.readTime && blog.date && <span>·</span>}
              {blog.readTime && <span>{blog.readTime}</span>}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Sidebar variant - Preline style
  if (variant === "sidebar") {
    return (
      <Link href={`/blog/${blog.slug}`} className="group flex items-center gap-x-4">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-800 group-hover:text-[#21B3AA] transition-colors">
            {blog.title}
          </h3>
          <p className="text-xs text-gray-600 mt-1">
            {blog.date && new Date(blog.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </p>
        </div>
      </Link>
    );
  }

  // Main/list variant - Preline style
  return (
    <Link href={`/blog/${blog.slug}`} className="group block">
      <div className="bg-white rounded-xl border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 p-6">
        <div className="flex items-start gap-x-6">
          <div className="flex-1">
            <div className="mb-3">
              {blog.category && (
                <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                  {blog.category}
                </span>
              )}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#21B3AA] transition-colors leading-tight">
              {blog.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">
              {blog.description}
            </p>
            <div className="flex items-center gap-x-3 text-sm text-gray-500">
              <span className="font-medium text-gray-800">AKRIN Team</span>
              <div className="flex items-center gap-x-2 ml-auto">
                {blog.date && (
                  <time dateTime={blog.date}>
                    {new Date(blog.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </time>
                )}
                {blog.readTime && blog.date && <span>·</span>}
                {blog.readTime && <span>{blog.readTime}</span>}
              </div>
            </div>
          </div>
          {blog.image && (
            <div className="relative w-32 xs:w-36 sm:w-40 md:w-48 h-24 xs:h-28 sm:h-32 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={preferAvif(blog.image) as string}
                alt={blog.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 200px"
                unoptimized={false}
              />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

// (Type duplicate removed; using the Blog interface defined above)




