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
  ArrowLeft,
  Eye,
  Users,
  Clock,
  Target,
  TrendingDown,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
import Link from 'next/link';

const adminMenuItems = [
  {
    title: "Dashboard",
    icon: BarChart3,
    href: "/admin",
    badge: null
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

interface AnalyticsData {
  overview: {
    totalContent: number;
    totalViews: number;
    avgSeoScore: number;
    publishedThisMonth: number;
  };
  topContent: Array<{
    id: string;
    title: string;
    slug: string;
    views: number;
    seoScore: number;
    language: 'EN' | 'JA';
    publishedAt: string;
  }>;
  keywordPerformance: Array<{
    keyword: string;
    contentCount: number;
    avgRanking: number;
    searchVolume: number;
    difficulty: number;
  }>;
  trafficTrends: Array<{
    date: string;
    views: number;
    uniqueViews: number;
  }>;
}

export default function ContentAnalyticsPage() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('30d');
  const [activeTab, setActiveTab] = useState('overview');

  // Generate SEO metadata
  const seoMetadata = generateDefaultSEO(
    "Content Analytics - AKRIN Admin",
    "Comprehensive analytics dashboard for content performance, SEO rankings, and engagement metrics.",
    "/admin/content/analytics"
  );

  useEffect(() => {
    loadAnalytics();
  }, [timeRange]);

  const loadAnalytics = async () => {
    try {
      setLoading(true);
      // For now, use mock data since we don't have real analytics yet
      const mockData: AnalyticsData = {
        overview: {
          totalContent: 0,
          totalViews: 0,
          avgSeoScore: 0,
          publishedThisMonth: 0
        },
        topContent: [],
        keywordPerformance: [
          {
            keyword: "nexpose",
            contentCount: 0,
            avgRanking: 0,
            searchVolume: 320,
            difficulty: 4
          },
          {
            keyword: "guest wifi",
            contentCount: 0,
            avgRanking: 0,
            searchVolume: 170,
            difficulty: 6
          },
          {
            keyword: "systems",
            contentCount: 0,
            avgRanking: 0,
            searchVolume: 9900,
            difficulty: 60
          }
        ],
        trafficTrends: []
      };

      // Try to fetch real data from API
      try {
        const response = await fetch(`/api/admin/content/analytics?timeRange=${timeRange}`);
        if (response.ok) {
          const data = await response.json();
          setAnalytics(data.data || mockData);
        } else {
          setAnalytics(mockData);
        }
      } catch (error) {
        console.error('Failed to load analytics:', error);
        setAnalytics(mockData);
      }
    } finally {
      setLoading(false);
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBadgeVariant = (score: number) => {
    if (score >= 80) return 'default';
    if (score >= 60) return 'secondary';
    return 'destructive';
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
                <span>Analytics</span>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <Select value={timeRange} onValueChange={setTimeRange}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7d">Last 7 days</SelectItem>
                    <SelectItem value="30d">Last 30 days</SelectItem>
                    <SelectItem value="90d">Last 90 days</SelectItem>
                    <SelectItem value="1y">Last year</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
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
                    <h1 className="text-3xl font-bold text-gray-900">Content Analytics</h1>
                    <p className="text-gray-600 mt-2">
                      Track content performance, SEO rankings, and engagement metrics
                    </p>
                  </div>
                </div>
              </div>

              {loading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading analytics...</p>
                </div>
              ) : (
                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="content">Content Performance</TabsTrigger>
                    <TabsTrigger value="keywords">Keywords</TabsTrigger>
                    <TabsTrigger value="seo">SEO Metrics</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-6">
                    {/* Overview Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Total Content</CardTitle>
                          <FileText className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">{analytics?.overview.totalContent || 0}</div>
                          <p className="text-xs text-muted-foreground">
                            +{analytics?.overview.publishedThisMonth || 0} this month
                          </p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">
                            {formatNumber(analytics?.overview.totalViews || 0)}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            <ArrowUp className="h-3 w-3 inline mr-1" />
                            +12% from last month
                          </p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Avg SEO Score</CardTitle>
                          <Target className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className={`text-2xl font-bold ${getScoreColor(analytics?.overview.avgSeoScore || 0)}`}>
                            {Math.round(analytics?.overview.avgSeoScore || 0)}%
                          </div>
                          <p className="text-xs text-muted-foreground">
                            <ArrowUp className="h-3 w-3 inline mr-1" />
                            +5% improvement
                          </p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Published This Month</CardTitle>
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">{analytics?.overview.publishedThisMonth || 0}</div>
                          <p className="text-xs text-muted-foreground">
                            Target: 10 articles/month
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Getting Started */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Getting Started with Content Analytics</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-sm font-medium">
                              1
                            </div>
                            <div>
                              <h4 className="font-medium">Create Your First Content</h4>
                              <p className="text-sm text-gray-600">
                                Start by creating SEO-optimized content targeting your focus keywords.
                              </p>
                              <Button size="sm" className="mt-2" asChild>
                                <Link href="/admin/content/create">Create Content</Link>
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-sm font-medium">
                              2
                            </div>
                            <div>
                              <h4 className="font-medium">Publish and Track Performance</h4>
                              <p className="text-sm text-gray-600">
                                Once published, your content analytics will appear here automatically.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-sm font-medium">
                              3
                            </div>
                            <div>
                              <h4 className="font-medium">Optimize Based on Data</h4>
                              <p className="text-sm text-gray-600">
                                Use the insights to improve your content strategy and SEO performance.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="content">
                    <Card>
                      <CardHeader>
                        <CardTitle>Top Performing Content</CardTitle>
                      </CardHeader>
                      <CardContent>
                        {analytics?.topContent.length === 0 ? (
                          <div className="text-center py-8">
                            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">No Content Data Yet</h3>
                            <p className="text-gray-600 mb-4">
                              Create and publish content to see performance analytics here.
                            </p>
                            <Button asChild>
                              <Link href="/admin/content/create">Create Your First Content</Link>
                            </Button>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            {analytics?.topContent.map((content) => (
                              <div key={content.id} className="flex items-center justify-between p-4 border rounded-lg">
                                <div className="flex-1">
                                  <h4 className="font-medium">{content.title}</h4>
                                  <p className="text-sm text-gray-600">/{content.slug}</p>
                                </div>
                                <div className="flex items-center gap-4 text-sm">
                                  <div className="text-center">
                                    <div className="font-medium">{formatNumber(content.views)}</div>
                                    <div className="text-gray-500">Views</div>
                                  </div>
                                  <Badge variant={getScoreBadgeVariant(content.seoScore)}>
                                    SEO: {content.seoScore}%
                                  </Badge>
                                  <Badge variant="outline">
                                    {content.language}
                                  </Badge>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="keywords">
                    <Card>
                      <CardHeader>
                        <CardTitle>Keyword Performance</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {analytics?.keywordPerformance.map((keyword, index) => (
                            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                              <div className="flex-1">
                                <h4 className="font-medium">{keyword.keyword}</h4>
                                <p className="text-sm text-gray-600">
                                  {keyword.contentCount} content pieces targeting this keyword
                                </p>
                              </div>
                              <div className="flex items-center gap-4 text-sm">
                                <div className="text-center">
                                  <div className="font-medium">{formatNumber(keyword.searchVolume)}</div>
                                  <div className="text-gray-500">Volume</div>
                                </div>
                                <div className="text-center">
                                  <div className="font-medium">{keyword.difficulty}/100</div>
                                  <div className="text-gray-500">Difficulty</div>
                                </div>
                                <div className="text-center">
                                  <div className="font-medium">
                                    {keyword.avgRanking > 0 ? `#${keyword.avgRanking}` : 'N/A'}
                                  </div>
                                  <div className="text-gray-500">Avg Rank</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="seo">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>SEO Score Distribution</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center py-8">
                            <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-600">
                              SEO score distribution will appear here once you have published content.
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Content Optimization Opportunities</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                              <span>0 articles need meta description optimization</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              <span>0 articles missing focus keywords</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span>0 articles need heading structure improvement</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              )}
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </>
  );
}
