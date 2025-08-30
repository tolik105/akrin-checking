/**
 * Content Renderer Component
 * Renders published content with AKRIN branding and SEO optimization
 */

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Share2, 
  ArrowLeft,
  Globe,
  Eye
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ContentData {
  id: string;
  title: string;
  slug: string;
  contentHtml: string;
  excerpt?: string;
  language: 'EN' | 'JA';
  featuredImage?: string;
  authorName?: string;
  authorRole?: string;
  readTime?: string;
  viewCount: number;
  publishedAt?: string;
  updatedAt: string;
  category?: {
    nameEn: string;
    nameJa?: string;
    slugEn: string;
    color?: string;
  };
  keywords: Array<{
    keyword: {
      keyword: string;
      language: 'EN' | 'JA';
    };
    isPrimary: boolean;
  }>;
}

interface ContentRendererProps {
  content: ContentData;
  language?: 'en' | 'ja';
}

export function ContentRenderer({ content, language = 'en' }: ContentRendererProps) {
  const isJapanese = language === 'ja';
  
  // Get category name based on language
  const categoryName = isJapanese && content.category?.nameJa 
    ? content.category.nameJa 
    : content.category?.nameEn;

  // Format date based on language
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isJapanese) {
      return date.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get primary keyword
  const primaryKeyword = content.keywords.find(k => k.isPrimary)?.keyword.keyword;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href={isJapanese ? "/ja" : "/"} className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                <span className="font-medium">
                  {isJapanese ? "ホームに戻る" : "Back to Home"}
                </span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href={isJapanese ? `/${content.slug}` : `/ja/${content.slug}`}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-purple-600"
              >
                <Globe className="h-4 w-4" />
                {isJapanese ? "English" : "日本語"}
              </Link>
              <div className="text-sm text-gray-500 flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {content.viewCount.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <header className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link href={isJapanese ? "/ja" : "/"} className="hover:text-purple-600">
              {isJapanese ? "ホーム" : "Home"}
            </Link>
            <span>/</span>
            {content.category && (
              <>
                <Link 
                  href={isJapanese ? `/ja/category/${content.category.slugEn}` : `/category/${content.category.slugEn}`}
                  className="hover:text-purple-600"
                >
                  {categoryName}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-gray-400">{content.title}</span>
          </nav>

          {/* Category Badge */}
          {content.category && (
            <div className="mb-4">
              <Badge 
                variant="secondary" 
                className="text-sm"
                style={{ backgroundColor: content.category.color + '20', color: content.category.color }}
              >
                {categoryName}
              </Badge>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {content.title}
          </h1>

          {/* Excerpt */}
          {content.excerpt && (
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {content.excerpt}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
            {content.authorName && (
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>
                  {content.authorName}
                  {content.authorRole && (
                    <span className="text-gray-400 ml-1">• {content.authorRole}</span>
                  )}
                </span>
              </div>
            )}
            
            {content.publishedAt && (
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(content.publishedAt)}</span>
              </div>
            )}

            {content.readTime && (
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{content.readTime}</span>
              </div>
            )}
          </div>

          {/* Featured Image */}
          {content.featuredImage && (
            <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
              <Image
                src={content.featuredImage}
                alt={content.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Keywords */}
          {content.keywords.length > 0 && (
            <div className="flex items-center gap-2 mb-8">
              <Tag className="h-4 w-4 text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {content.keywords.map((keywordItem, index) => (
                  <Badge 
                    key={index} 
                    variant={keywordItem.isPrimary ? "default" : "outline"}
                    className="text-xs"
                  >
                    {keywordItem.keyword.keyword}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="bg-white rounded-lg shadow-sm border p-8 md:p-12">
          {/* Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-purple-200 prose-blockquote:bg-purple-50 prose-blockquote:text-gray-700 prose-code:bg-gray-100 prose-code:text-purple-600 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100"
            dangerouslySetInnerHTML={{ __html: content.contentHtml }}
          />

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                {isJapanese ? "この記事を共有する" : "Share this article"}
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                {isJapanese ? "共有" : "Share"}
              </Button>
            </div>
          </div>
        </article>

        {/* Related Content */}
        <div className="mt-12">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">
                {isJapanese ? "関連記事" : "Related Articles"}
              </h3>
              <p className="text-gray-600">
                {isJapanese 
                  ? "関連記事は近日公開予定です。" 
                  : "Related articles coming soon."
                }
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Back to Top */}
        <div className="mt-8 text-center">
          <Button 
            variant="outline" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {isJapanese ? "トップに戻る" : "Back to Top"}
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">AKRIN</h3>
            <p className="text-gray-400 mb-4">
              {isJapanese 
                ? "企業向けITソリューションとサイバーセキュリティサービス"
                : "Enterprise IT Solutions & Cybersecurity Services"
              }
            </p>
            <div className="flex justify-center gap-4">
              <Link href={isJapanese ? "/ja" : "/"} className="text-gray-400 hover:text-white">
                {isJapanese ? "ホーム" : "Home"}
              </Link>
              <Link href={isJapanese ? "/ja/services" : "/services"} className="text-gray-400 hover:text-white">
                {isJapanese ? "サービス" : "Services"}
              </Link>
              <Link href={isJapanese ? "/ja/contact" : "/contact"} className="text-gray-400 hover:text-white">
                {isJapanese ? "お問い合わせ" : "Contact"}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
