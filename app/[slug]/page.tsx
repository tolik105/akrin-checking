/**
 * Dynamic Content Page (English)
 * Renders published content with SEO optimization and AKRIN branding
 */

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { db } from '@/lib/db';
import { ContentStatus, Language } from '@/lib/db';
import { SEOHead, generateDefaultSEO } from '@/components/seo/seo-head';
import { generateArticleSchema } from '@/lib/seo';
import { ContentRenderer } from '@/components/content/content-renderer';

interface ContentPageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ContentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = await getContent(slug);
  
  if (!content) {
    return generateDefaultSEO(
      "Page Not Found",
      "The requested page could not be found.",
      `/${slug}`
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
      canonical: `/${content.slug}`,
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
        language: 'EN',
        status: 'PUBLISHED'
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
    console.error('Failed to fetch content:', error);
    return null;
  }
}

export default async function ContentPage({ params }: ContentPageProps) {
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
    console.error('Failed to update view count:', error);
  }

  // Generate structured data
  const articleSchema = generateArticleSchema({
    title: content.title,
    description: content.metaDescription || content.excerpt || '',
    author: content.authorName || 'AKRIN Team',
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
      <ContentRenderer content={content} />
    </>
  );
}

// Generate static params for published content (optional optimization)
export async function generateStaticParams() {
  try {
    const publishedContent = await db.content.findMany({
      where: {
        status: 'PUBLISHED',
        language: 'EN'
      },
      select: { slug: true },
      take: 100 // Limit for build performance
    });

    return publishedContent.map((content) => ({
      slug: content.slug,
    }));
  } catch (error) {
    console.error('Failed to generate static params (database not available):', error);
    return [];
  }
}
