"use client";

import React, { useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  FileText, 
  Eye, 
  AlertCircle, 
  CheckCircle, 
  Target,
  BarChart3
} from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
  focusKeyword?: string;
  onAnalysis?: (analysis: ContentAnalysis) => void;
  height?: number;
}

interface ContentAnalysis {
  wordCount: number;
  readabilityScore: number;
  keywordDensity: number;
  headingStructure: {
    h1Count: number;
    h2Count: number;
    h3Count: number;
  };
  seoScore: number;
  recommendations: string[];
  warnings: string[];
}

export function RichTextEditor({ 
  value, 
  onChange, 
  focusKeyword, 
  onAnalysis,
  height = 500 
}: RichTextEditorProps) {
  const editorRef = useRef<any>(null);
  const [analysis, setAnalysis] = React.useState<ContentAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = React.useState(false);

  // TinyMCE configuration optimized for SEO content
  const editorConfig = {
    height,
    menubar: false,
    plugins: [
      'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
      'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
      'insertdatetime', 'media', 'table', 'help', 'wordcount', 'emoticons'
    ],
    toolbar: [
      'undo redo | blocks | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify',
      'bullist numlist outdent indent | removeformat | link image media table | code preview fullscreen | help'
    ].join(' | '),
    content_style: `
      body { 
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
        font-size: 16px; 
        line-height: 1.6;
        color: #374151;
      }
      h1 { font-size: 2.25rem; font-weight: 700; margin: 1.5rem 0 1rem 0; color: #111827; }
      h2 { font-size: 1.875rem; font-weight: 600; margin: 1.25rem 0 0.75rem 0; color: #1f2937; }
      h3 { font-size: 1.5rem; font-weight: 600; margin: 1rem 0 0.5rem 0; color: #374151; }
      p { margin: 0 0 1rem 0; }
      img { max-width: 100%; height: auto; }
      blockquote { 
        border-left: 4px solid #e5e7eb; 
        padding-left: 1rem; 
        margin: 1rem 0; 
        font-style: italic; 
        color: #6b7280; 
      }
    `,
    block_formats: 'Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Heading 4=h4; Preformatted=pre',
    image_advtab: true,
    image_caption: true,
    image_title: true,
    automatic_uploads: true,
    file_picker_types: 'image',
    images_upload_handler: async (blobInfo: any) => {
      // Handle image upload
      const formData = new FormData();
      formData.append('file', blobInfo.blob(), blobInfo.filename());
      
      try {
        const response = await fetch('/api/admin/media', {
          method: 'POST',
          body: formData
        });
        
        if (response.ok) {
          const data = await response.json();
          return data.data.url;
        }
      } catch (error) {
        console.error('Image upload failed:', error);
      }
      
      throw new Error('Image upload failed');
    },
    setup: (editor: any) => {
      editor.on('change', () => {
        const content = editor.getContent();
        onChange(content);
        analyzeContent(content);
      });
    }
  };

  const analyzeContent = React.useCallback(async (content: string) => {
    if (!content.trim()) {
      setAnalysis(null);
      return;
    }

    setIsAnalyzing(true);
    
    try {
      // Extract text content for analysis
      const textContent = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
      const wordCount = textContent.split(' ').length;

      // Analyze heading structure
      const h1Count = (content.match(/<h1[^>]*>/gi) || []).length;
      const h2Count = (content.match(/<h2[^>]*>/gi) || []).length;
      const h3Count = (content.match(/<h3[^>]*>/gi) || []).length;

      // Calculate keyword density
      let keywordDensity = 0;
      if (focusKeyword && textContent) {
        const keywordOccurrences = (textContent.toLowerCase().match(
          new RegExp(focusKeyword.toLowerCase(), 'g')
        ) || []).length;
        keywordDensity = (keywordOccurrences / wordCount) * 100;
      }

      // Simple readability score (Flesch Reading Ease approximation)
      const sentences = textContent.split(/[.!?]+/).length;
      const syllables = textContent.split(/[aeiouAEIOU]/).length - 1;
      const readabilityScore = Math.max(0, Math.min(100, 
        206.835 - (1.015 * (wordCount / sentences)) - (84.6 * (syllables / wordCount))
      ));

      // Generate recommendations and warnings
      const recommendations: string[] = [];
      const warnings: string[] = [];

      if (wordCount < 300) {
        warnings.push('Content is too short. Aim for at least 300 words for better SEO.');
      } else if (wordCount < 600) {
        recommendations.push('Consider expanding to 600+ words for optimal SEO performance.');
      }

      if (h1Count === 0) {
        warnings.push('Add an H1 heading for better content structure.');
      } else if (h1Count > 1) {
        warnings.push('Use only one H1 heading per article.');
      }

      if (h2Count === 0) {
        recommendations.push('Add H2 subheadings to improve content structure and readability.');
      }

      if (focusKeyword) {
        if (keywordDensity < 0.5) {
          recommendations.push(`Increase "${focusKeyword}" keyword density to 0.5-2.5%.`);
        } else if (keywordDensity > 2.5) {
          warnings.push(`Keyword density is too high (${keywordDensity.toFixed(1)}%). Reduce to avoid keyword stuffing.`);
        }

        const titleHasKeyword = content.toLowerCase().includes(focusKeyword.toLowerCase());
        if (!titleHasKeyword) {
          recommendations.push(`Include "${focusKeyword}" in your headings for better SEO.`);
        }
      }

      if (readabilityScore < 60) {
        recommendations.push('Improve readability by using shorter sentences and simpler words.');
      }

      // Calculate overall SEO score
      let seoScore = 0;
      if (wordCount >= 300) seoScore += 20;
      if (wordCount >= 600) seoScore += 10;
      if (h1Count === 1) seoScore += 15;
      if (h2Count > 0) seoScore += 15;
      if (readabilityScore >= 60) seoScore += 15;
      if (focusKeyword && keywordDensity >= 0.5 && keywordDensity <= 2.5) seoScore += 25;

      const analysisResult: ContentAnalysis = {
        wordCount,
        readabilityScore,
        keywordDensity,
        headingStructure: { h1Count, h2Count, h3Count },
        seoScore,
        recommendations,
        warnings
      };

      setAnalysis(analysisResult);
      onAnalysis?.(analysisResult);
    } catch (error) {
      console.error('Content analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  }, [focusKeyword, onAnalysis]);

  useEffect(() => {
    if (value) {
      analyzeContent(value);
    }
  }, [value, analyzeContent]);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreVariant = (score: number) => {
    if (score >= 80) return 'default';
    if (score >= 60) return 'secondary';
    return 'destructive';
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Editor */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-lg border">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Content Editor
              </h3>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
                {analysis && (
                  <Badge variant={getScoreVariant(analysis.seoScore)}>
                    SEO: {analysis.seoScore}%
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <div className="p-4">
            <Editor
              onInit={(evt, editor) => editorRef.current = editor}
              value={value}
              init={editorConfig}
            />
          </div>
        </div>
      </div>

      {/* SEO Analysis Sidebar */}
      <div className="space-y-4">
        {/* SEO Score */}
        {analysis && (
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                SEO Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Overall Score</span>
                  <span className={`text-lg font-bold ${getScoreColor(analysis.seoScore)}`}>
                    {analysis.seoScore}%
                  </span>
                </div>
                <Progress value={analysis.seoScore} className="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Words</span>
                  <div className="font-medium">{analysis.wordCount}</div>
                </div>
                <div>
                  <span className="text-gray-600">Readability</span>
                  <div className="font-medium">{Math.round(analysis.readabilityScore)}</div>
                </div>
                <div>
                  <span className="text-gray-600">H1 Tags</span>
                  <div className="font-medium">{analysis.headingStructure.h1Count}</div>
                </div>
                <div>
                  <span className="text-gray-600">H2 Tags</span>
                  <div className="font-medium">{analysis.headingStructure.h2Count}</div>
                </div>
              </div>

              {focusKeyword && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-4 w-4" />
                    <span className="text-sm font-medium">Keyword Density</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    "{focusKeyword}": {analysis.keywordDensity.toFixed(1)}%
                  </div>
                  <Progress 
                    value={Math.min(100, (analysis.keywordDensity / 2.5) * 100)} 
                    className="h-2" 
                  />
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Recommendations */}
        {analysis && (analysis.recommendations.length > 0 || analysis.warnings.length > 0) && (
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {analysis.warnings.map((warning, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-red-700">{warning}</span>
                </div>
              ))}
              {analysis.recommendations.map((rec, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-700">{rec}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {isAnalyzing && (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600 mx-auto mb-2"></div>
                <p className="text-sm text-gray-600">Analyzing content...</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
