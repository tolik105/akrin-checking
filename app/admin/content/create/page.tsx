"use client";

import React, { useState, useEffect } from 'react';
import {
  Shield,
  ChevronRight,
  Bell,
  Calendar,
  BarChart3,
  Search,
  TrendingUp,
  FileText,
  Save,
  Eye,
  Globe,
  Target,
  Settings,
  Image as ImageIcon,
  ArrowLeft,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
  SidebarTrigger
} from '@/components/ui/sidebar';
import { SEOHead, generateDefaultSEO } from '@/components/seo/seo-head';
import { AIContentEditor } from '@/components/editor/ai-content-editor';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const adminMenuItems = [
  {
    title: "Dashboard",
    icon: BarChart3,
    href: "/admin",
    badge: null
  },
  {
    title: "SEO Management",
    icon: Search,
    href: "/admin/seo",
    badge: "Active"
  },
  {
    title: "Content Management",
    icon: FileText,
    href: "/admin/content",
    badge: "New"
  },
  {
    title: "Analytics",
    icon: TrendingUp,
    href: "/admin/analytics",
    badge: null
  }
];

interface Category {
  id: string;
  nameEn: string;
  nameJa?: string;
}

interface Keyword {
  id: string;
  keyword: string;
  language: 'EN' | 'JA';
  searchVolume?: number;
  difficulty?: number;
  isTarget: boolean;
}

interface ContentForm {
  title: string;
  slug: string;
  contentHtml: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  language: 'EN' | 'JA';
  status: 'DRAFT' | 'SCHEDULED' | 'PUBLISHED';
  featuredImage: string;
  authorName: string;
  authorRole: string;
  readTime: string;
  categoryId: string;
  keywordIds: string[];
  publishedAt?: string;
}

export default function CreateContentPage() {
  const router = useRouter();
  const [form, setForm] = useState<ContentForm>({
    title: '',
    slug: '',
    contentHtml: '',
    excerpt: '',
    metaTitle: '',
    metaDescription: '',
    focusKeyword: '',
    language: 'EN',
    status: 'DRAFT',
    featuredImage: '',
    authorName: 'AKRIN Team',
    authorRole: 'IT Specialists',
    readTime: '',
    categoryId: '',
    keywordIds: []
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [keywords, setKeywords] = useState<Keyword[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [seoAnalysis, setSeoAnalysis] = useState<any>(null);

  // Generate SEO metadata
  const seoMetadata = generateDefaultSEO(
    "Create Content - AKRIN Admin",
    "Create new SEO-optimized content with advanced editing tools and real-time analysis.",
    "/admin/content/create"
  );

  useEffect(() => {
    loadCategories();
    loadKeywords();
  }, []);

  useEffect(() => {
    // Auto-generate slug from title
    if (form.title && !form.slug) {
      const slug = form.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      setForm(prev => ({ ...prev, slug }));
    }

    // Auto-generate meta title if not set
    if (form.title && !form.metaTitle) {
      setForm(prev => ({ 
        ...prev, 
        metaTitle: form.title.length > 60 ? form.title.substring(0, 57) + '...' : form.title 
      }));
    }
  }, [form.title]);

  useEffect(() => {
    // Estimate read time based on content
    if (form.contentHtml) {
      const textContent = form.contentHtml.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
      const wordCount = textContent.split(' ').length;
      const readTimeMinutes = Math.ceil(wordCount / 200); // Average reading speed
      setForm(prev => ({ ...prev, readTime: `${readTimeMinutes} min read` }));
    }
  }, [form.contentHtml]);

  const loadCategories = async () => {
    try {
      const response = await fetch('/api/admin/categories');
      if (response.ok) {
        const data = await response.json();
        setCategories(data.data || []);
      }
    } catch (error) {
      console.error('Failed to load categories:', error);
    }
  };

  const loadKeywords = async () => {
    try {
      const response = await fetch(`/api/admin/keywords?language=${form.language}&isTarget=true`);
      if (response.ok) {
        const data = await response.json();
        setKeywords(data.data || []);
      }
    } catch (error) {
      console.error('Failed to load keywords:', error);
    }
  };

  const handleSave = async (status: 'DRAFT' | 'SCHEDULED' | 'PUBLISHED') => {
    setSaving(true);
    try {
      const payload = {
        ...form,
        status,
        publishedAt: status === 'PUBLISHED' ? new Date().toISOString() : undefined
      };

      const response = await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const data = await response.json();
        router.push(`/admin/content/edit/${data.data.id}`);
      } else {
        const error = await response.json();
        alert(`Failed to save content: ${error.error}`);
      }
    } catch (error) {
      console.error('Save failed:', error);
      alert('Failed to save content. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleFormChange = (field: keyof ContentForm, value: any) => {
    console.log('Form change:', field, '=', value);
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const getLanguageKeywords = () => {
    return keywords.filter(k => k.language === form.language);
  };

  return (
    <>
      <SEOHead metadata={seoMetadata} noindex={true} nofollow={true} />
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-gray-50">
          <Sidebar variant="inset">
            <SidebarHeader>
              <div className="flex items-center gap-2 px-4 py-2">
                <Shield className="h-6 w-6 text-purple-600" />
                <span className="font-bold text-lg">AKRIN Admin</span>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Management</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {adminMenuItems.map((item) => (
                      <SidebarMenuItem key={item.href}>
                        <SidebarMenuButton asChild isActive={item.href === "/admin/content"}>
                          <Link href={item.href} className="flex items-center gap-2">
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                            {item.badge && (
                              <Badge variant="secondary" className="ml-auto text-xs">
                                {item.badge}
                              </Badge>
                            )}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-white px-4">
              <SidebarTrigger className="-ml-1" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>AKRIN Admin</span>
                <ChevronRight className="h-4 w-4" />
                <span>Content Management</span>
                <ChevronRight className="h-4 w-4" />
                <span>Create Content</span>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => handleSave('DRAFT')} disabled={saving}>
                  <Save className="h-4 w-4 mr-2" />
                  {saving ? 'Saving...' : 'Save Draft'}
                </Button>
                <Button size="sm" onClick={() => handleSave('PUBLISHED')} disabled={saving}>
                  <Globe className="h-4 w-4 mr-2" />
                  Publish
                </Button>
              </div>
            </header>

            <main className="flex-1 p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <Button variant="outline" asChild>
                    <Link href="/admin/content">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Content
                    </Link>
                  </Button>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">Create New Content</h1>
                    <p className="text-gray-600 mt-2">
                      Create SEO-optimized content with real-time analysis and recommendations
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
                {/* Main Content Area */}
                <div className="xl:col-span-3 space-y-6">
                  {/* Basic Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Basic Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <Label htmlFor="title">Title *</Label>
                          <Input
                            id="title"
                            value={form.title}
                            onChange={(e) => handleFormChange('title', e.target.value)}
                            placeholder="Enter content title..."
                            className="text-lg"
                          />
                        </div>
                        <div>
                          <Label htmlFor="slug">URL Slug *</Label>
                          <Input
                            id="slug"
                            value={form.slug}
                            onChange={(e) => handleFormChange('slug', e.target.value)}
                            placeholder="url-friendly-slug"
                          />
                        </div>
                        <div>
                          <Label htmlFor="language">Language</Label>
                          <Select value={form.language} onValueChange={(value) => handleFormChange('language', value)}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="EN">English</SelectItem>
                              <SelectItem value="JA">Japanese</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="category">Category</Label>
                          <Select value={form.categoryId} onValueChange={(value) => handleFormChange('categoryId', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {categories.map((category) => (
                                <SelectItem key={category.id} value={category.id}>
                                  {form.language === 'JA' && category.nameJa ? category.nameJa : category.nameEn}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="focusKeyword">Focus Keyword</Label>
                          <Input
                            id="focusKeyword"
                            value={form.focusKeyword}
                            onChange={(e) => handleFormChange('focusKeyword', e.target.value)}
                            placeholder="Enter focus keyword (e.g., cybersecurity, network security)"
                          />
                          <div className="text-xs text-gray-500 mt-1">
                            Enter the main keyword you want to target for SEO
                          </div>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="excerpt">Excerpt</Label>
                        <Textarea
                          id="excerpt"
                          value={form.excerpt}
                          onChange={(e) => handleFormChange('excerpt', e.target.value)}
                          placeholder="Brief description of the content..."
                          rows={3}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* AI Content Editor */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-blue-500" />
                        AI Content Editor
                      </CardTitle>
                      <p className="text-sm text-gray-600">
                        {!form.title || !form.focusKeyword ? (
                          <span className="text-amber-600">
                            ⚠️ Please fill in the <strong>Title</strong> and <strong>Focus Keyword</strong> above to enable AI features
                          </span>
                        ) : (
                          <span className="text-green-600">
                            ✅ Ready to generate content with AI! Use the buttons below to create, optimize, or enhance your content.
                          </span>
                        )}
                      </p>
                    </CardHeader>
                    <CardContent>
                      {/* Debug form values */}
                      <div className="mb-4 p-3 bg-red-100 border border-red-300 rounded text-sm">
                        <strong>Parent Debug:</strong> Title: "{form.title}" | Keyword: "{form.focusKeyword}" |
                        Title Length: {form.title.length} | Keyword Length: {form.focusKeyword.length}
                      </div>

                      <AIContentEditor
                        value={form.contentHtml}
                        onChange={(content) => handleFormChange('contentHtml', content)}
                        focusKeyword={form.focusKeyword}
                        topic={form.title}
                        language={form.language}
                        onAnalysis={(analysis) => {
                          setSeoAnalysis(analysis);
                          // Auto-fill meta tags if generated
                          if (analysis.generatedMetaTags) {
                            handleFormChange('metaTitle', analysis.generatedMetaTags.title);
                            handleFormChange('metaDescription', analysis.generatedMetaTags.description);
                          }
                        }}
                      />
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Publishing Options */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Publishing</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="status">Status</Label>
                        <Select value={form.status} onValueChange={(value) => handleFormChange('status', value)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="DRAFT">Draft</SelectItem>
                            <SelectItem value="SCHEDULED">Scheduled</SelectItem>
                            <SelectItem value="PUBLISHED">Published</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="authorName">Author Name</Label>
                        <Input
                          id="authorName"
                          value={form.authorName}
                          onChange={(e) => handleFormChange('authorName', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="authorRole">Author Role</Label>
                        <Input
                          id="authorRole"
                          value={form.authorRole}
                          onChange={(e) => handleFormChange('authorRole', e.target.value)}
                        />
                      </div>
                      {form.readTime && (
                        <div>
                          <Label>Estimated Read Time</Label>
                          <div className="text-sm text-gray-600">{form.readTime}</div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* SEO Settings */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        SEO Settings
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="metaTitle">Meta Title</Label>
                        <Input
                          id="metaTitle"
                          value={form.metaTitle}
                          onChange={(e) => handleFormChange('metaTitle', e.target.value)}
                          placeholder="SEO title (50-60 characters)"
                          maxLength={60}
                        />
                        <div className="text-xs text-gray-500 mt-1">
                          {form.metaTitle.length}/60 characters
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="metaDescription">Meta Description</Label>
                        <Textarea
                          id="metaDescription"
                          value={form.metaDescription}
                          onChange={(e) => handleFormChange('metaDescription', e.target.value)}
                          placeholder="SEO description (120-160 characters)"
                          rows={3}
                          maxLength={160}
                        />
                        <div className="text-xs text-gray-500 mt-1">
                          {form.metaDescription.length}/160 characters
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Featured Image */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm flex items-center gap-2">
                        <ImageIcon className="h-4 w-4" />
                        Featured Image
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <ImageIcon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2">Upload featured image</p>
                        <Button variant="outline" size="sm">
                          Choose Image
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Settings className="h-4 w-4 mr-2" />
                        Advanced Settings
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </>
  );
}
