"use client";

import React, { useState } from 'react';
import {
  Wand2,
  FileText,
  Eye,
  Lightbulb,
  Target,
  BarChart3,
  Loader2,
  CheckCircle,
  AlertCircle,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface AIContentEditorProps {
  value: string;
  onChange: (content: string) => void;
  focusKeyword?: string;
  topic?: string;
  language?: 'EN' | 'JA';
  onAnalysis?: (analysis: any) => void;
}

interface GeneratedContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  contentHtml: string;
  suggestedSlug: string;
  estimatedReadTime: string;
  seoRecommendations: string[];
}

export function AIContentEditor({
  value,
  onChange,
  focusKeyword,
  topic,
  language = 'EN',
  onAnalysis
}: AIContentEditorProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [outline, setOutline] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('editor');
  const [contentType, setContentType] = useState('article');
  const [targetLength, setTargetLength] = useState('medium');
  const [tone, setTone] = useState('professional');

  // Debug logging
  console.log('AIContentEditor props:', { topic, focusKeyword, language });
  console.log('Button should be enabled:', !(!topic || !focusKeyword));

  const generateContent = async () => {
    if (!topic || !focusKeyword) {
      alert('Please provide a topic and focus keyword first');
      return;
    }

    setIsGenerating(true);
    try {
      const response = await fetch('/api/admin/content/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'generate',
          topic,
          focusKeyword,
          language,
          contentType,
          targetLength,
          tone,
          audience: 'enterprise',
          includeElements: {
            introduction: true,
            conclusion: true,
            bestPractices: true,
            implementation: contentType === 'guide'
          }
        })
      });

      if (response.ok) {
        const data = await response.json();
        setGeneratedContent(data.data);

        // Extract content from HTML if it's wrapped in HTML tags
        let content = data.data.contentHtml;
        if (content.includes('<body>')) {
          // Extract content between body tags
          const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
          if (bodyMatch) {
            content = bodyMatch[1].trim();
          }
        }

        onChange(content);
        setActiveTab('preview');

        // Show success message
        alert(`✅ Content Generated Successfully!\n\nTitle: ${data.data.title}\nLength: ${data.data.estimatedReadTime}\n\nContent has been added to the editor.`);
      } else {
        const error = await response.json();
        console.error('Content generation error:', error);

        // Show more helpful error messages
        if (error.error?.includes('API key')) {
          alert(`❌ OpenAI API Configuration Error\n\n${error.error}\n\nPlease check your .env.local file and add your OpenAI API key.`);
        } else if (error.error?.includes('quota')) {
          alert(`❌ OpenAI Quota Exceeded\n\n${error.error}\n\nPlease check your OpenAI billing settings.`);
        } else if (error.error?.includes('rate limit')) {
          alert(`❌ Rate Limit Exceeded\n\n${error.error}\n\nPlease wait a moment and try again.`);
        } else {
          alert(`❌ Content Generation Failed\n\n${error.error || 'Unknown error occurred'}\n\nPlease try again or check the console for more details.`);
        }
      }
    } catch (error) {
      console.error('Content generation failed:', error);
      alert('Failed to generate content. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const generateOutline = async () => {
    if (!topic || !focusKeyword) {
      alert('Please provide a topic and focus keyword first');
      return;
    }

    try {
      const response = await fetch('/api/admin/content/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'outline',
          topic,
          focusKeyword,
          language,
          contentType,
          audience: 'enterprise'
        })
      });

      if (response.ok) {
        const data = await response.json();
        setOutline(data.data.outline);
        setActiveTab('outline');
      } else {
        const error = await response.json();
        alert(`Failed to generate outline: ${error.error}`);
      }
    } catch (error) {
      console.error('Outline generation failed:', error);
      alert('Failed to generate outline. Please try again.');
    }
  };

  const optimizeContent = async () => {
    if (!value || !focusKeyword) {
      alert('Please provide content and focus keyword for optimization');
      return;
    }

    setIsOptimizing(true);
    try {
      const response = await fetch('/api/admin/content/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'optimize',
          existingContent: value,
          focusKeyword,
          language
        })
      });

      if (response.ok) {
        const data = await response.json();
        onChange(data.data.optimizedContent);
        // Show optimization suggestions
        alert(`Content optimized! Improvements:\n${data.data.suggestions.join('\n')}`);
      } else {
        const error = await response.json();
        console.error('Content optimization error:', error);

        if (error.error?.includes('API key')) {
          alert(`❌ OpenAI API Configuration Error\n\n${error.error}\n\nPlease check your .env.local file and add your OpenAI API key.`);
        } else {
          alert(`❌ Content Optimization Failed\n\n${error.error || 'Unknown error occurred'}\n\nPlease try again or check the console for more details.`);
        }
      }
    } catch (error) {
      console.error('Content optimization failed:', error);
      alert('Failed to optimize content. Please try again.');
    } finally {
      setIsOptimizing(false);
    }
  };

  const generateMetaTags = async () => {
    if (!value || !focusKeyword) {
      alert('Please provide content and focus keyword for meta tag generation');
      return;
    }

    try {
      const response = await fetch('/api/admin/content/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'meta-tags',
          existingContent: value,
          focusKeyword,
          language
        })
      });

      if (response.ok) {
        const data = await response.json();
        // Trigger callback to update meta fields in parent component
        if (onAnalysis) {
          onAnalysis({
            generatedMetaTags: data.data,
            suggestions: data.data.suggestions
          });
        }
        alert(`Meta tags generated!\nTitle: ${data.data.title}\nDescription: ${data.data.description}`);
      } else {
        const error = await response.json();
        console.error('Meta tag generation error:', error);

        if (error.error?.includes('API key')) {
          alert(`❌ OpenAI API Configuration Error\n\n${error.error}\n\nPlease check your .env.local file and add your OpenAI API key.`);
        } else {
          alert(`❌ Meta Tag Generation Failed\n\n${error.error || 'Unknown error occurred'}\n\nPlease try again or check the console for more details.`);
        }
      }
    } catch (error) {
      console.error('Meta tag generation failed:', error);
      alert('Failed to generate meta tags. Please try again.');
    }
  };

  const wordCount = value.replace(/<[^>]*>/g, '').split(/\s+/).filter(word => word.length > 0).length;
  const estimatedReadTime = Math.ceil(wordCount / 200);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Editor Area */}
      <div className="lg:col-span-2">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-purple-600" />
                AI Content Editor
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => setActiveTab('preview')}>
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
                {generatedContent && (
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    AI Generated
                  </Badge>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="editor">Editor</TabsTrigger>
                <TabsTrigger value="outline">Outline</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>

              <TabsContent value="editor" className="mt-4">
                <div className="space-y-4">
                  {/* AI Generation Controls */}
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-medium text-purple-900 mb-3 flex items-center gap-2">
                      <Wand2 className="h-4 w-4" />
                      AI Content Generation
                    </h4>
                    {/* Debug Info */}
                    <div className="mb-3 p-2 bg-yellow-100 border border-yellow-300 rounded text-xs">
                      <strong>Debug:</strong> Topic: "{topic}" | Keyword: "{focusKeyword}" |
                      Button Enabled: {(!topic || !focusKeyword) ? 'NO' : 'YES'}
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <Select value={contentType} onValueChange={setContentType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="article">Article</SelectItem>
                          <SelectItem value="guide">Guide</SelectItem>
                          <SelectItem value="tutorial">Tutorial</SelectItem>
                          <SelectItem value="case-study">Case Study</SelectItem>
                          <SelectItem value="blog-post">Blog Post</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select value={targetLength} onValueChange={setTargetLength}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="short">Short (500-800)</SelectItem>
                          <SelectItem value="medium">Medium (1000-1500)</SelectItem>
                          <SelectItem value="long">Long (1500-2500)</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select value={tone} onValueChange={setTone}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="professional">Professional</SelectItem>
                          <SelectItem value="technical">Technical</SelectItem>
                          <SelectItem value="educational">Educational</SelectItem>
                          <SelectItem value="conversational">Conversational</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        onClick={generateContent} 
                        disabled={isGenerating || !topic || !focusKeyword}
                        className="flex-1"
                      >
                        {isGenerating ? (
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        ) : (
                          <Wand2 className="h-4 w-4 mr-2" />
                        )}
                        Generate Content
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={generateOutline}
                        disabled={!topic || !focusKeyword}
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Outline
                      </Button>
                    </div>
                  </div>

                  {/* Content Editor */}
                  <div>
                    <Textarea
                      value={value}
                      onChange={(e) => onChange(e.target.value)}
                      placeholder={`Start writing your ${contentType} about ${topic || 'your topic'}...

Or use the AI generation tools above to create content automatically.

Tips:
- Include your focus keyword naturally throughout the content
- Use proper heading structure (H1, H2, H3)
- Write for your target audience
- Aim for comprehensive, valuable content`}
                      className="min-h-[400px] font-mono text-sm"
                    />
                  </div>

                  {/* Content Actions */}
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      onClick={optimizeContent}
                      disabled={isOptimizing || !value || !focusKeyword}
                    >
                      {isOptimizing ? (
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      ) : (
                        <RefreshCw className="h-4 w-4 mr-2" />
                      )}
                      Optimize SEO
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={generateMetaTags}
                      disabled={!value || !focusKeyword}
                    >
                      <Target className="h-4 w-4 mr-2" />
                      Generate Meta Tags
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="outline" className="mt-4">
                <div className="space-y-4">
                  {outline.length > 0 ? (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-medium text-blue-900 mb-3">Generated Outline</h4>
                      <ul className="space-y-2">
                        {outline.map((item, index) => (
                          <li key={index} className="text-sm text-blue-800">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                      <p>No outline generated yet.</p>
                      <p className="text-sm">Click "Outline" to generate a content structure.</p>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="preview" className="mt-4">
                <div className="bg-white border rounded-lg p-6">
                  {value ? (
                    <div 
                      className="prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: value }}
                    />
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Eye className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                      <p>No content to preview yet.</p>
                      <p className="text-sm">Start writing or generate content with AI.</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* AI Assistant Sidebar */}
      <div className="space-y-4">
        {/* Content Stats */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Content Stats
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>Words</span>
              <span className="font-medium">{wordCount}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Read Time</span>
              <span className="font-medium">{estimatedReadTime} min</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Language</span>
              <span className="font-medium">{language}</span>
            </div>
            {focusKeyword && (
              <div className="flex justify-between text-sm">
                <span>Focus Keyword</span>
                <span className="font-medium text-purple-600">{focusKeyword}</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* AI Recommendations */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              AI Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {generatedContent?.seoRecommendations ? (
              generatedContent.seoRecommendations.map((rec, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-green-700">{rec}</span>
                </div>
              ))
            ) : (
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-sm">
                  <AlertCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-700">Use AI generation for optimized content</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <AlertCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-700">Include focus keyword naturally</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <AlertCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-700">Use proper heading structure</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full justify-start"
              onClick={generateContent}
              disabled={isGenerating || !topic || !focusKeyword}
            >
              <Wand2 className="h-4 w-4 mr-2" />
              Generate with AI
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full justify-start"
              onClick={optimizeContent}
              disabled={isOptimizing || !value}
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Optimize SEO
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full justify-start"
              onClick={generateMetaTags}
              disabled={!value || !focusKeyword}
            >
              <Target className="h-4 w-4 mr-2" />
              Generate Meta Tags
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
