/**
 * Dynamic Content Page (Japanese)
 * Renders published Japanese content with SEO optimization and AKRIN branding
 */

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { db } from '@/lib/db';
import { ContentStatus, Language } from '@/lib/db';
import { SEOHead, generateDefaultSEO } from '@/components/seo/seo-head';
import { generateArticleSchema } from '@/lib/seo';
import { ContentRenderer } from '@/components/content/content-renderer';
import { logger } from '@/lib/logger';

interface JapaneseContentPageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: JapaneseContentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = await getContent(slug);

  if (!content) {
    return generateDefaultSEO(
      "ページが見つかりません",
      "リクエストされたページが見つかりませんでした。",
      `/ja/${slug}`
    );
  }

  return {
    title: content.metaTitle || content.title,
    description: content.metaDescription || content.excerpt || '',
    keywords: content.focusKeyword ? [content.focusKeyword] : undefined,
    authors: content.authorName ? [{ name: content.authorName }] : undefined,
    openGraph: {
      title: content.metaTitle || content.title,
      description: content.metaDescription || content.excerpt || '',
      type: 'article',
      publishedTime: content.publishedAt || undefined,
      modifiedTime: content.updatedAt,
      authors: content.authorName ? [content.authorName] : undefined,
      locale: 'ja_JP',
      images: content.featuredImage ? [
        {
          url: content.featuredImage,
          alt: content.title
        }
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: content.metaTitle || content.title,
      description: content.metaDescription || content.excerpt || '',
      images: content.featuredImage ? [content.featuredImage] : undefined,
    },
    alternates: {
      canonical: `/ja/${content.slug}`,
      languages: {
        'en': `/${content.slug}`,
        'ja': `/ja/${content.slug}`,
      }
    }
  };
}

async function getContent(slug: string) {
  try {
    const content = await db.content.findFirst({
      where: {
        slug,
        language: Language.JA,
        status: ContentStatus.PUBLISHED
      },
      include: {
        category: true,
        keywords: {
          include: { keyword: true }
        },
        media: {
          orderBy: { sortOrder: 'asc' }
        }
      }
    });

    return content;
  } catch (error) {
    logger.error('Failed to fetch Japanese content:', error);
    return null;
  }
}

export default async function JapaneseContentPage({ params }: JapaneseContentPageProps) {
  const { slug } = await params;
  const content = await getContent(slug);

  if (!content) {
    notFound();
  }

  // Update view count
  try {
    await db.content.update({
      where: { id: content.id },
      data: { viewCount: { increment: 1 } }
    });
  } catch (error) {
    logger.error('Failed to update view count:', error);
  }

  // Generate structured data for Japanese content
  const articleSchema = generateArticleSchema({
    title: content.title,
    description: content.metaDescription || content.excerpt || '',
    author: content.authorName || 'AKRIN チーム',
    datePublished: content.publishedAt || content.createdAt,
    dateModified: content.updatedAt,
    image: content.featuredImage
  });

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema)
        }}
      />

      {/* Content Renderer */}
      <ContentRenderer content={content} language="ja" />
    </>
  );
}

// Generate static params for published Japanese content
export async function generateStaticParams() {
  try {
    const publishedContent = await db.content.findMany({
      where: {
        status: ContentStatus.PUBLISHED,
        language: Language.JA
      },
      select: { slug: true },
      take: 100 // Limit for build performance
    });

    return publishedContent.map((content) => ({
      slug: content.slug,
    }));
  } catch (error) {
    logger.error('Failed to generate static params for Japanese content (database not available):', error);
    return [];
  }
}
