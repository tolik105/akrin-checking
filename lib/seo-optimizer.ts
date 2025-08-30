/**
 * Enhanced SEO Optimization Service
 * Provides comprehensive SEO analysis and optimization recommendations
 * Integrates with SEranking API for real-time data
 */

import { serankingAPI } from './seranking-api';

export interface SEOOptimizationResult {
  overallScore: number;
  contentAnalysis: ContentAnalysis;
  keywordAnalysis: KeywordAnalysis;
  technicalSEO: TechnicalSEO;
  competitorAnalysis?: CompetitorAnalysis;
  recommendations: SEORecommendation[];
  metaOptimization: MetaOptimization;
}

export interface ContentAnalysis {
  wordCount: number;
  readabilityScore: number;
  headingStructure: HeadingStructure;
  contentQuality: number;
  duplicateContent: boolean;
  internalLinks: number;
  externalLinks: number;
}

export interface KeywordAnalysis {
  focusKeyword?: string;
  keywordDensity: number;
  keywordPlacement: KeywordPlacement;
  relatedKeywords: string[];
  keywordDifficulty?: number;
  searchVolume?: number;
  competitionLevel?: string;
}

export interface TechnicalSEO {
  titleOptimization: number;
  metaDescriptionOptimization: number;
  urlStructure: number;
  imageOptimization: number;
  schemaMarkup: boolean;
}

export interface CompetitorAnalysis {
  topCompetitors: Competitor[];
  contentGaps: string[];
  opportunityKeywords: string[];
}

export interface Competitor {
  domain: string;
  title: string;
  metaDescription: string;
  wordCount: number;
  backlinks: number;
  ranking: number;
}

export interface SEORecommendation {
  type: 'critical' | 'important' | 'suggestion';
  category: 'content' | 'technical' | 'keywords' | 'meta';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  effort: 'easy' | 'medium' | 'hard';
}

export interface HeadingStructure {
  h1Count: number;
  h2Count: number;
  h3Count: number;
  h4Count: number;
  hasProperHierarchy: boolean;
  keywordInHeadings: boolean;
}

export interface KeywordPlacement {
  inTitle: boolean;
  inMetaDescription: boolean;
  inH1: boolean;
  inH2: boolean;
  inFirstParagraph: boolean;
  inLastParagraph: boolean;
}

export interface MetaOptimization {
  title: {
    length: number;
    optimal: boolean;
    hasKeyword: boolean;
    suggestions: string[];
  };
  description: {
    length: number;
    optimal: boolean;
    hasKeyword: boolean;
    suggestions: string[];
  };
  generatedTitle?: string;
  generatedDescription?: string;
}

export class SEOOptimizer {
  /**
   * Perform comprehensive SEO analysis on content
   */
  async analyzeContent(params: {
    title: string;
    content: string;
    metaTitle?: string;
    metaDescription?: string;
    focusKeyword?: string;
    url?: string;
    language?: 'EN' | 'JA';
  }): Promise<SEOOptimizationResult> {
    const {
      title,
      content,
      metaTitle,
      metaDescription,
      focusKeyword,
      url,
      language = 'EN'
    } = params;

    // Analyze content structure
    const contentAnalysis = this.analyzeContentStructure(content);
    
    // Analyze keyword usage
    const keywordAnalysis = await this.analyzeKeywords(
      { title, content, metaTitle, metaDescription },
      focusKeyword,
      language
    );

    // Analyze technical SEO elements
    const technicalSEO = this.analyzeTechnicalSEO({
      title,
      metaTitle,
      metaDescription,
      content,
      url
    });

    // Optimize meta tags
    const metaOptimization = this.optimizeMetaTags({
      title,
      metaTitle,
      metaDescription,
      focusKeyword,
      content
    });

    // Get competitor analysis if focus keyword is provided
    let competitorAnalysis: CompetitorAnalysis | undefined;
    if (focusKeyword) {
      try {
        competitorAnalysis = await this.analyzeCompetitors(focusKeyword, language);
      } catch (error) {
        console.warn('Competitor analysis failed:', error);
      }
    }

    // Generate recommendations
    const recommendations = this.generateRecommendations({
      contentAnalysis,
      keywordAnalysis,
      technicalSEO,
      metaOptimization,
      competitorAnalysis
    });

    // Calculate overall score
    const overallScore = this.calculateOverallScore({
      contentAnalysis,
      keywordAnalysis,
      technicalSEO,
      metaOptimization
    });

    return {
      overallScore,
      contentAnalysis,
      keywordAnalysis,
      technicalSEO,
      competitorAnalysis,
      recommendations,
      metaOptimization
    };
  }

  /**
   * Analyze content structure and quality
   */
  private analyzeContentStructure(content: string): ContentAnalysis {
    const textContent = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const wordCount = textContent.split(' ').length;

    // Count headings
    const h1Count = (content.match(/<h1[^>]*>/gi) || []).length;
    const h2Count = (content.match(/<h2[^>]*>/gi) || []).length;
    const h3Count = (content.match(/<h3[^>]*>/gi) || []).length;
    const h4Count = (content.match(/<h4[^>]*>/gi) || []).length;

    // Check heading hierarchy
    const hasProperHierarchy = h1Count === 1 && h2Count > 0;

    // Count links
    const internalLinks = (content.match(/<a[^>]*href="\/[^"]*"/gi) || []).length;
    const externalLinks = (content.match(/<a[^>]*href="https?:\/\/[^"]*"/gi) || []).length;

    // Calculate readability (simplified Flesch Reading Ease)
    const sentences = textContent.split(/[.!?]+/).length;
    const syllables = this.countSyllables(textContent);
    const readabilityScore = Math.max(0, Math.min(100,
      206.835 - (1.015 * (wordCount / sentences)) - (84.6 * (syllables / wordCount))
    ));

    // Content quality score based on various factors
    let contentQuality = 0;
    if (wordCount >= 300) contentQuality += 25;
    if (wordCount >= 600) contentQuality += 15;
    if (hasProperHierarchy) contentQuality += 20;
    if (readabilityScore >= 60) contentQuality += 20;
    if (internalLinks > 0) contentQuality += 10;
    if (externalLinks > 0) contentQuality += 10;

    return {
      wordCount,
      readabilityScore,
      headingStructure: {
        h1Count,
        h2Count,
        h3Count,
        h4Count,
        hasProperHierarchy,
        keywordInHeadings: false // Will be set in keyword analysis
      },
      contentQuality,
      duplicateContent: false, // Would need external service to check
      internalLinks,
      externalLinks
    };
  }

  /**
   * Analyze keyword usage and optimization
   */
  private async analyzeKeywords(
    content: { title: string; content: string; metaTitle?: string; metaDescription?: string },
    focusKeyword?: string,
    language: 'EN' | 'JA' = 'EN'
  ): Promise<KeywordAnalysis> {
    if (!focusKeyword) {
      return {
        keywordDensity: 0,
        keywordPlacement: {
          inTitle: false,
          inMetaDescription: false,
          inH1: false,
          inH2: false,
          inFirstParagraph: false,
          inLastParagraph: false
        },
        relatedKeywords: []
      };
    }

    const keyword = focusKeyword.toLowerCase();
    const textContent = content.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const wordCount = textContent.split(' ').length;

    // Calculate keyword density
    const keywordOccurrences = (textContent.toLowerCase().match(new RegExp(keyword, 'g')) || []).length;
    const keywordDensity = (keywordOccurrences / wordCount) * 100;

    // Check keyword placement
    const keywordPlacement: KeywordPlacement = {
      inTitle: content.title.toLowerCase().includes(keyword),
      inMetaDescription: (content.metaDescription || '').toLowerCase().includes(keyword),
      inH1: this.checkKeywordInHeadings(content.content, 'h1', keyword),
      inH2: this.checkKeywordInHeadings(content.content, 'h2', keyword),
      inFirstParagraph: this.checkKeywordInFirstParagraph(content.content, keyword),
      inLastParagraph: this.checkKeywordInLastParagraph(content.content, keyword)
    };

    // Get keyword data from SEranking API
    let keywordDifficulty: number | undefined;
    let searchVolume: number | undefined;
    let competitionLevel: string | undefined;

    try {
      const keywordData = await serankingAPI.getKeywordResearch(
        [focusKeyword],
        language === 'JA' ? 'jp' : 'us'
      );
      
      if (keywordData.length > 0) {
        const data = keywordData[0];
        keywordDifficulty = data.difficulty;
        searchVolume = data.searchVolume;
        competitionLevel = data.competition;
      }
    } catch (error) {
      console.warn('Failed to get keyword data from SEranking API:', error);
    }

    // Generate related keywords (simplified - would use API in production)
    const relatedKeywords = this.generateRelatedKeywords(focusKeyword, language);

    return {
      focusKeyword,
      keywordDensity,
      keywordPlacement,
      relatedKeywords,
      keywordDifficulty,
      searchVolume,
      competitionLevel
    };
  }

  /**
   * Analyze technical SEO elements
   */
  private analyzeTechnicalSEO(params: {
    title: string;
    metaTitle?: string;
    metaDescription?: string;
    content: string;
    url?: string;
  }): TechnicalSEO {
    const { title, metaTitle, metaDescription, content, url } = params;

    // Title optimization
    const titleToAnalyze = metaTitle || title;
    const titleLength = titleToAnalyze.length;
    const titleOptimization = titleLength >= 30 && titleLength <= 60 ? 100 : 
      titleLength < 30 ? Math.max(0, (titleLength / 30) * 100) :
      Math.max(0, 100 - ((titleLength - 60) / 60) * 100);

    // Meta description optimization
    const descLength = (metaDescription || '').length;
    const metaDescriptionOptimization = descLength >= 120 && descLength <= 160 ? 100 :
      descLength < 120 ? Math.max(0, (descLength / 120) * 100) :
      Math.max(0, 100 - ((descLength - 160) / 160) * 100);

    // URL structure (simplified analysis)
    const urlStructure = url ? this.analyzeUrlStructure(url) : 80;

    // Image optimization
    const images = content.match(/<img[^>]*>/gi) || [];
    const imagesWithAlt = content.match(/<img[^>]*alt="[^"]+"/gi) || [];
    const imageOptimization = images.length === 0 ? 100 : 
      (imagesWithAlt.length / images.length) * 100;

    // Schema markup (would need to check actual page)
    const schemaMarkup = false;

    return {
      titleOptimization,
      metaDescriptionOptimization,
      urlStructure,
      imageOptimization,
      schemaMarkup
    };
  }

  /**
   * Optimize meta tags with AI-powered suggestions
   */
  private optimizeMetaTags(params: {
    title: string;
    metaTitle?: string;
    metaDescription?: string;
    focusKeyword?: string;
    content: string;
  }): MetaOptimization {
    const { title, metaTitle, metaDescription, focusKeyword, content } = params;

    const currentTitle = metaTitle || title;
    const currentDescription = metaDescription || '';

    // Analyze current title
    const titleAnalysis = {
      length: currentTitle.length,
      optimal: currentTitle.length >= 30 && currentTitle.length <= 60,
      hasKeyword: focusKeyword ? currentTitle.toLowerCase().includes(focusKeyword.toLowerCase()) : false,
      suggestions: [] as string[]
    };

    // Analyze current description
    const descriptionAnalysis = {
      length: currentDescription.length,
      optimal: currentDescription.length >= 120 && currentDescription.length <= 160,
      hasKeyword: focusKeyword ? currentDescription.toLowerCase().includes(focusKeyword.toLowerCase()) : false,
      suggestions: [] as string[]
    };

    // Generate suggestions
    if (titleAnalysis.length < 30) {
      titleAnalysis.suggestions.push('Title is too short. Add more descriptive words.');
    }
    if (titleAnalysis.length > 60) {
      titleAnalysis.suggestions.push('Title is too long. Consider shortening to under 60 characters.');
    }
    if (focusKeyword && !titleAnalysis.hasKeyword) {
      titleAnalysis.suggestions.push(`Include the focus keyword "${focusKeyword}" in the title.`);
    }

    if (descriptionAnalysis.length < 120) {
      descriptionAnalysis.suggestions.push('Meta description is too short. Expand to 120-160 characters.');
    }
    if (descriptionAnalysis.length > 160) {
      descriptionAnalysis.suggestions.push('Meta description is too long. Shorten to under 160 characters.');
    }
    if (focusKeyword && !descriptionAnalysis.hasKeyword) {
      descriptionAnalysis.suggestions.push(`Include the focus keyword "${focusKeyword}" in the description.`);
    }

    // Generate optimized versions
    const generatedTitle = this.generateOptimizedTitle(title, focusKeyword);
    const generatedDescription = this.generateOptimizedDescription(content, focusKeyword);

    return {
      title: titleAnalysis,
      description: descriptionAnalysis,
      generatedTitle,
      generatedDescription
    };
  }

  /**
   * Analyze competitors for the focus keyword
   */
  private async analyzeCompetitors(focusKeyword: string, language: 'EN' | 'JA'): Promise<CompetitorAnalysis> {
    // This would integrate with SEranking API to get SERP data
    // For now, return mock data structure
    return {
      topCompetitors: [],
      contentGaps: [],
      opportunityKeywords: []
    };
  }

  /**
   * Generate comprehensive SEO recommendations
   */
  private generateRecommendations(data: {
    contentAnalysis: ContentAnalysis;
    keywordAnalysis: KeywordAnalysis;
    technicalSEO: TechnicalSEO;
    metaOptimization: MetaOptimization;
    competitorAnalysis?: CompetitorAnalysis;
  }): SEORecommendation[] {
    const recommendations: SEORecommendation[] = [];

    // Content recommendations
    if (data.contentAnalysis.wordCount < 300) {
      recommendations.push({
        type: 'critical',
        category: 'content',
        title: 'Increase Content Length',
        description: 'Content is too short for good SEO performance. Aim for at least 300 words.',
        impact: 'high',
        effort: 'medium'
      });
    }

    if (!data.contentAnalysis.headingStructure.hasProperHierarchy) {
      recommendations.push({
        type: 'important',
        category: 'content',
        title: 'Improve Heading Structure',
        description: 'Use proper heading hierarchy with one H1 and multiple H2 subheadings.',
        impact: 'medium',
        effort: 'easy'
      });
    }

    // Keyword recommendations
    if (data.keywordAnalysis.focusKeyword) {
      if (data.keywordAnalysis.keywordDensity < 0.5) {
        recommendations.push({
          type: 'important',
          category: 'keywords',
          title: 'Increase Keyword Density',
          description: `Use "${data.keywordAnalysis.focusKeyword}" more frequently in your content (aim for 0.5-2.5%).`,
          impact: 'medium',
          effort: 'easy'
        });
      }

      if (!data.keywordAnalysis.keywordPlacement.inTitle) {
        recommendations.push({
          type: 'critical',
          category: 'keywords',
          title: 'Add Keyword to Title',
          description: `Include "${data.keywordAnalysis.focusKeyword}" in your title for better SEO.`,
          impact: 'high',
          effort: 'easy'
        });
      }
    }

    // Technical SEO recommendations
    if (data.technicalSEO.titleOptimization < 80) {
      recommendations.push({
        type: 'important',
        category: 'technical',
        title: 'Optimize Title Length',
        description: 'Adjust title length to 30-60 characters for optimal display in search results.',
        impact: 'medium',
        effort: 'easy'
      });
    }

    if (data.technicalSEO.metaDescriptionOptimization < 80) {
      recommendations.push({
        type: 'important',
        category: 'meta',
        title: 'Optimize Meta Description',
        description: 'Write a compelling meta description of 120-160 characters.',
        impact: 'medium',
        effort: 'easy'
      });
    }

    return recommendations;
  }

  /**
   * Calculate overall SEO score
   */
  private calculateOverallScore(data: {
    contentAnalysis: ContentAnalysis;
    keywordAnalysis: KeywordAnalysis;
    technicalSEO: TechnicalSEO;
    metaOptimization: MetaOptimization;
  }): number {
    const weights = {
      content: 0.4,
      keywords: 0.3,
      technical: 0.2,
      meta: 0.1
    };

    const contentScore = data.contentAnalysis.contentQuality;
    const keywordScore = this.calculateKeywordScore(data.keywordAnalysis);
    const technicalScore = this.calculateTechnicalScore(data.technicalSEO);
    const metaScore = this.calculateMetaScore(data.metaOptimization);

    return Math.round(
      contentScore * weights.content +
      keywordScore * weights.keywords +
      technicalScore * weights.technical +
      metaScore * weights.meta
    );
  }

  // Helper methods
  private countSyllables(text: string): number {
    return text.toLowerCase().match(/[aeiouy]+/g)?.length || 1;
  }

  private checkKeywordInHeadings(content: string, tag: string, keyword: string): boolean {
    const regex = new RegExp(`<${tag}[^>]*>(.*?)<\/${tag}>`, 'gi');
    const matches = content.match(regex) || [];
    return matches.some(match => match.toLowerCase().includes(keyword));
  }

  private checkKeywordInFirstParagraph(content: string, keyword: string): boolean {
    const firstP = content.match(/<p[^>]*>(.*?)<\/p>/i);
    return firstP ? firstP[1].toLowerCase().includes(keyword) : false;
  }

  private checkKeywordInLastParagraph(content: string, keyword: string): boolean {
    const paragraphs = content.match(/<p[^>]*>(.*?)<\/p>/gi) || [];
    const lastP = paragraphs[paragraphs.length - 1];
    return lastP ? lastP.toLowerCase().includes(keyword) : false;
  }

  private generateRelatedKeywords(keyword: string, language: 'EN' | 'JA'): string[] {
    // Simplified related keyword generation
    // In production, this would use SEranking API or other keyword tools
    const baseKeywords = language === 'JA' ? 
      ['ガイド', 'とは', '方法', '手順', 'ベスト', 'プラクティス'] :
      ['guide', 'how to', 'best', 'practices', 'tips', 'tutorial'];
    
    return baseKeywords.map(base => `${keyword} ${base}`).slice(0, 5);
  }

  private analyzeUrlStructure(url: string): number {
    let score = 100;
    if (url.length > 60) score -= 20;
    if (!/^[a-z0-9-\/]+$/.test(url)) score -= 30;
    if (url.split('/').length > 5) score -= 20;
    return Math.max(0, score);
  }

  private generateOptimizedTitle(title: string, keyword?: string): string {
    if (!keyword) return title;
    
    if (title.toLowerCase().includes(keyword.toLowerCase())) {
      return title.length <= 60 ? title : title.substring(0, 57) + '...';
    }
    
    const optimized = `${keyword} - ${title}`;
    return optimized.length <= 60 ? optimized : `${keyword} ${title}`.substring(0, 57) + '...';
  }

  private generateOptimizedDescription(content: string, keyword?: string): string {
    const textContent = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const firstSentence = textContent.split('.')[0] + '.';
    
    if (!keyword) {
      return firstSentence.length <= 160 ? firstSentence : firstSentence.substring(0, 157) + '...';
    }
    
    const withKeyword = `${firstSentence} Learn about ${keyword} and best practices.`;
    return withKeyword.length <= 160 ? withKeyword : withKeyword.substring(0, 157) + '...';
  }

  private calculateKeywordScore(analysis: KeywordAnalysis): number {
    if (!analysis.focusKeyword) return 50;
    
    let score = 0;
    if (analysis.keywordDensity >= 0.5 && analysis.keywordDensity <= 2.5) score += 30;
    if (analysis.keywordPlacement.inTitle) score += 25;
    if (analysis.keywordPlacement.inMetaDescription) score += 15;
    if (analysis.keywordPlacement.inH1) score += 20;
    if (analysis.keywordPlacement.inFirstParagraph) score += 10;
    
    return score;
  }

  private calculateTechnicalScore(technical: TechnicalSEO): number {
    return Math.round(
      (technical.titleOptimization +
       technical.metaDescriptionOptimization +
       technical.urlStructure +
       technical.imageOptimization) / 4
    );
  }

  private calculateMetaScore(meta: MetaOptimization): number {
    const titleScore = meta.title.optimal ? 50 : 25;
    const descScore = meta.description.optimal ? 50 : 25;
    return titleScore + descScore;
  }
}

// Export singleton instance
export const seoOptimizer = new SEOOptimizer();
