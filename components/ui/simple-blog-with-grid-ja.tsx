"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { blogPostsJA } from "@/lib/blog-data";
import { AkrinIcon } from "@/components/akrin-logo";
import Image from "next/image";

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

export function SimpleBlogWithGridJA() {
  // Convert blog data to the format expected by the component
  const blogs = Object.values(blogPostsJA).map((post) => ({
    title: post.title,
    description: post.content.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
    slug: post.slug,
    date: post.date,
    readTime: post.readTime,
    category: post.category,
    featured: post.featured || false,
    image: post.image || null
  }));

  // Separate featured post (first one) from the rest
  const featuredPost = blogs[0];
  const remainingPosts = blogs.slice(1);

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Hero Section - Preline Style */}
      <section className="bg-white">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
          {/* Title */}
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-800">
              最新ニュースをお読みください
            </h2>
            <p className="mt-1 text-gray-600">
              ITインフラ、サイバーセキュリティ、デジタルトランスフォーメーションに関する専門的な洞察
            </p>
          </div>

          {/* Featured Article - Preline Card Style */}
          <div className="max-w-[85rem] mx-auto">
            <Link href={`/ja/blog/${featuredPost.slug}`} className="group block">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="sm:flex">
                  <div className="flex-shrink-0 relative w-full sm:w-96 h-60 sm:h-auto rounded-t-xl sm:rounded-t-none sm:rounded-l-xl overflow-hidden">
                    {featuredPost.image ? (
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                        unoptimized={false}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <AkrinIcon className="w-20 h-20 text-gray-300" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col h-full p-4 sm:p-7">
                    <div className="mb-3">
                      {featuredPost.category && (
                        <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {featuredPost.category}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-gray-600">
                      {featuredPost.title}
                    </h3>
                    <p className="mt-3 text-gray-600">
                      {featuredPost.description}
                    </p>
                    <div className="mt-5 sm:mt-auto">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <span className="font-medium text-gray-800">AKRINチーム</span>
                        </div>
                        <div className="flex items-center gap-x-2 text-sm text-gray-500 ml-auto">
                          {featuredPost.date && (
                            <>
                              <time dateTime={featuredPost.date}>
                                {new Date(featuredPost.date).toLocaleDateString('ja-JP', {
                                  year: 'numeric',
                                  month: 'long',
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
              <BlogCardJA blog={blog} key={blog.slug} variant="grid" />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - Preline Style */}
      <section className="bg-white">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800">
              ニュースレターに登録
            </h2>
            <p className="mt-3 text-gray-600">
              AKRINの最新ニュースと洞察をお届けします
            </p>
          </div>

          <form className="mt-10 max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="email"
                  className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2"
                  placeholder="メールアドレス"
                />
                <label className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-gray-500
                  peer-[:not(:placeholder-shown)]:text-xs
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-gray-500">
                  メールアドレス
                </label>
              </div>
              <button
                type="submit"
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                登録する
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </button>
            </div>
            <p className="mt-3 text-center text-sm text-gray-500">
              スパムはありません。いつでも登録解除できます。
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}



export const BlogCardJA = ({ blog, variant = "grid" }: { blog: Blog; variant?: "grid" | "sidebar" | "main" }) => {
  const truncate = (text: string, length: number) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };

  // Preline-style grid card
  if (variant === "grid") {
    return (
      <Link href={`/ja/blog/${blog.slug}`} className="group flex flex-col h-full bg-white border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl">
        <div className="relative h-52 overflow-hidden rounded-t-xl">
          {blog.image ? (
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
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
              <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {blog.category}
              </span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
            {truncate(blog.title, 85)}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
            {truncate(blog.description, 120)}
          </p>
          <div className="flex items-center gap-x-3 text-sm text-gray-500">
            <span className="font-medium text-gray-800">AKRINチーム</span>
            <div className="flex items-center gap-x-2 ml-auto">
              {blog.date && (
                <>
                  <time dateTime={blog.date}>
                    {new Date(blog.date).toLocaleDateString('ja-JP', {
                      year: 'numeric',
                      month: 'short',
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
      <Link href={`/ja/blog/${blog.slug}`} className="group flex items-center gap-x-4">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600">
            {blog.title}
          </h3>
          <p className="text-xs text-gray-600 mt-1">
            {blog.date && new Date(blog.date).toLocaleDateString('ja-JP', {
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
    <Link href={`/ja/blog/${blog.slug}`} className="group block">
      <div className="bg-white rounded-xl border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 p-6">
        <div className="flex items-start gap-x-6">
          <div className="flex-1">
            <div className="mb-3">
              {blog.category && (
                <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {blog.category}
                </span>
              )}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
              {blog.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {blog.description}
            </p>
            <div className="flex items-center gap-x-3 text-sm text-gray-500">
              <span className="font-medium text-gray-800">AKRINチーム</span>
              <div className="flex items-center gap-x-2 ml-auto">
                {blog.date && (
                  <time dateTime={blog.date}>
                    {new Date(blog.date).toLocaleDateString('ja-JP', {
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
            <div className="relative w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={blog.image}
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

type Blog = {
  title: string;
  description: string;
  slug: string;
  date?: string;
  readTime?: string;
  category?: string;
  featured?: boolean;
  image?: string | null;
};