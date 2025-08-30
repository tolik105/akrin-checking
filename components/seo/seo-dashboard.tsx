"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Search,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  BarChart3,
  Globe,
  FileText,
  Zap,
  RefreshCw
} from 'lucide-react';
import { KeywordTrackingDashboard } from './keyword-tracking-dashboard';
import { CompetitorAnalysis } from './competitor-analysis';

interface SEODashboardProps {
  className?: string;
}

interface SEOAnalysisData {
  summary: {
    totalPosts: number;
    averageScore: number;
    totalIssues: number;
    totalErrors: number;
    totalWarnings: number;
  };
  posts: Array<{
    slug: string;
    title: string;
    score: number;
    issues: number;
    errorCount: number;
    warningCount: number;
    recommendations: number;
  }>;
  analyzedAt: string;
}

interface DomainAnalysisData {
  domainAnalysis: {
    domain: string;
    backlinks: number;
    referringDomains: number;
    organicKeywords: number;
    organicTraffic: number;
    domainRank: number;
  };
  analyzedAt: string;
  realDataUsed?: boolean;
}

interface WebsiteAnalysisData {
  summary: {
    totalPages: number;
    averageScore: number;
    totalIssues: number;
    totalErrors: number;
    totalWarnings: number;
  };
  pages: Array<{
    path: string;
    title: string;
    type: string;
    score: number;
    issues: number;
    errorCount: number;
    warningCount: number;
    recommendations: number;
  }>;
  analyzedAt: string;
}

export function SEODashboard({ className }: SEODashboardProps) {
  const [loading, setLoading] = useState(false);
  const [analysisData, setAnalysisData] = useState<SEOAnalysisData | null>(null);
  const [domainData, setDomainData] = useState<DomainAnalysisData | null>(null);
  const [websiteData, setWebsiteData] = useState<WebsiteAnalysisData | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  const runBlogAnalysis = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/seo/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'all-posts',
          options: { baseUrl: window.location.origin }
        })
      });

      if (response.ok) {
        const result = await response.json();
        setAnalysisData(result.data);
      }
    } catch (error) {
      console.error('Blog analysis failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const runDomainAnalysis = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/seo/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'domain',
          target: 'akrin.jp',
          options: { source: 'jp' }
        })
      });

      if (response.ok) {
        const result = await response.json();
        setDomainData(result.data);
      }
    } catch (error) {
      console.error('Domain analysis failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const runWebsiteAnalysis = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/seo/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'website',
          options: { baseUrl: window.location.origin }
        })
      });

      if (response.ok) {
        const result = await response.json();
        setWebsiteData(result.data);
      }
    } catch (error) {
      console.error('Website analysis failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBadgeVariant = (score: number) => {
    if (score >= 90) return 'default';
    if (score >= 70) return 'secondary';
    return 'destructive';
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">SEO Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Monitor and optimize your website's search engine performance
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={runWebsiteAnalysis}
            disabled={loading}
            variant="outline"
          >
            {loading ? <RefreshCw className="h-4 w-4 animate-spin mr-2" /> : <Search className="h-4 w-4 mr-2" />}
            Analyze Website
          </Button>
          <Button
            onClick={runBlogAnalysis}
            disabled={loading}
            variant="outline"
          >
            {loading ? <RefreshCw className="h-4 w-4 animate-spin mr-2" /> : <FileText className="h-4 w-4 mr-2" />}
            Analyze Blog Posts
          </Button>
          <Button
            onClick={runDomainAnalysis}
            disabled={loading}
            variant="outline"
          >
            {loading ? <RefreshCw className="h-4 w-4 animate-spin mr-2" /> : <Globe className="h-4 w-4 mr-2" />}
            Analyze Domain
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="website">Website</TabsTrigger>
          <TabsTrigger value="blog-posts">Blog Posts</TabsTrigger>
          <TabsTrigger value="keywords">Keywords</TabsTrigger>
          <TabsTrigger value="competitors">Competitors</TabsTrigger>
          <TabsTrigger value="domain">Domain Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average SEO Score</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {analysisData ? (
                    <span className={getScoreColor(analysisData.summary.averageScore)}>
                      {analysisData.summary.averageScore}%
                    </span>
                  ) : (
                    <span className="text-gray-400">--</span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  Across all blog posts
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Issues</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {analysisData ? analysisData.summary.totalIssues : '--'}
                </div>
                <p className="text-xs text-muted-foreground">
                  {analysisData ? `${analysisData.summary.totalErrors} errors, ${analysisData.summary.totalWarnings} warnings` : 'Run analysis to see data'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {analysisData ? analysisData.summary.totalPosts : '--'}
                </div>
                <p className="text-xs text-muted-foreground">
                  Total published posts
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Domain Rank</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {domainData ? domainData.domainAnalysis.domainRank : '--'}
                </div>
                <p className="text-xs text-muted-foreground">
                  SEranking domain authority
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common SEO optimization tasks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start" asChild>
                  <a href="/sitemap.xml" target="_blank">
                    <Search className="h-4 w-4 mr-2" />
                    View Sitemap
                  </a>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <a href="/robots.txt" target="_blank">
                    <Zap className="h-4 w-4 mr-2" />
                    View Robots.txt
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="website" className="space-y-4">
          {websiteData ? (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Website SEO Analysis</CardTitle>
                  <CardDescription>
                    SEO performance analysis for all main pages of the AKRIN website
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{websiteData.summary.totalPages}</div>
                      <div className="text-sm text-gray-600">Pages Analyzed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{websiteData.summary.averageScore}%</div>
                      <div className="text-sm text-gray-600">Average Score</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{websiteData.summary.totalErrors}</div>
                      <div className="text-sm text-gray-600">Critical Issues</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {websiteData.pages.map((page) => (
                      <div key={page.path} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{page.title}</h3>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-sm text-gray-600">{page.path}</span>
                            <Badge variant={getScoreBadgeVariant(page.score)}>
                              Score: {page.score}%
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {page.type}
                            </Badge>
                            {page.errorCount > 0 && (
                              <div className="flex items-center gap-1 text-red-600">
                                <XCircle className="h-4 w-4" />
                                <span className="text-sm">{page.errorCount} errors</span>
                              </div>
                            )}
                            {page.warningCount > 0 && (
                              <div className="flex items-center gap-1 text-yellow-600">
                                <AlertTriangle className="h-4 w-4" />
                                <span className="text-sm">{page.warningCount} warnings</span>
                              </div>
                            )}
                            {page.errorCount === 0 && page.warningCount === 0 && (
                              <div className="flex items-center gap-1 text-green-600">
                                <CheckCircle className="h-4 w-4" />
                                <span className="text-sm">No issues</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Progress value={page.score} className="w-20" />
                          <Button variant="outline" size="sm" asChild>
                            <a href={page.path} target="_blank">
                              View Page
                            </a>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card>
              <CardContent className="flex items-center justify-center py-12">
                <div className="text-center">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Website Analysis Data</h3>
                  <p className="text-gray-600 mb-4">Run a website analysis to see SEO performance across all pages</p>
                  <Button onClick={runWebsiteAnalysis} disabled={loading}>
                    {loading ? <RefreshCw className="h-4 w-4 animate-spin mr-2" /> : <Search className="h-4 w-4 mr-2" />}
                    Analyze Website
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="blog-posts" className="space-y-4">
          {analysisData ? (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Blog Post SEO Analysis</CardTitle>
                  <CardDescription>
                    Individual SEO scores and issues for each blog post
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analysisData.posts.map((post) => (
                      <div key={post.slug} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{post.title}</h3>
                          <div className="flex items-center gap-4 mt-2">
                            <Badge variant={getScoreBadgeVariant(post.score)}>
                              Score: {post.score}%
                            </Badge>
                            {post.errorCount > 0 && (
                              <div className="flex items-center gap-1 text-red-600">
                                <XCircle className="h-4 w-4" />
                                <span className="text-sm">{post.errorCount} errors</span>
                              </div>
                            )}
                            {post.warningCount > 0 && (
                              <div className="flex items-center gap-1 text-yellow-600">
                                <AlertTriangle className="h-4 w-4" />
                                <span className="text-sm">{post.warningCount} warnings</span>
                              </div>
                            )}
                            {post.errorCount === 0 && post.warningCount === 0 && (
                              <div className="flex items-center gap-1 text-green-600">
                                <CheckCircle className="h-4 w-4" />
                                <span className="text-sm">No issues</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Progress value={post.score} className="w-20" />
                          <Button variant="outline" size="sm" asChild>
                            <a href={`/blog/${post.slug}`} target="_blank">
                              View Post
                            </a>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card>
              <CardContent className="flex items-center justify-center py-12">
                <div className="text-center">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Analysis Data</h3>
                  <p className="text-gray-600 mb-4">Run a blog post analysis to see detailed SEO metrics</p>
                  <Button onClick={runBlogAnalysis} disabled={loading}>
                    {loading ? <RefreshCw className="h-4 w-4 animate-spin mr-2" /> : <FileText className="h-4 w-4 mr-2" />}
                    Analyze Blog Posts
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="keywords" className="space-y-4">
          <KeywordTrackingDashboard domain="akrin.jp" />
        </TabsContent>

        <TabsContent value="competitors" className="space-y-4">
          <CompetitorAnalysis domain="akrin.jp" />
        </TabsContent>

        <TabsContent value="domain" className="space-y-4">
          {domainData ? (
            <div className="space-y-4">
              {/* Real Data Indicator */}
              {domainData.realDataUsed && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-green-800 font-medium">Real SEranking API Data</span>
                  </div>
                  <p className="text-green-700 text-sm mt-1">
                    This analysis uses live data from SEranking API. Last updated: {new Date(domainData.analyzedAt).toLocaleString()}
                  </p>
                </div>
              )}

              {/* SEO Report Summary */}
              {domainData.seoReport && (
                <Card>
                  <CardHeader>
                    <CardTitle>SEO Health Score</CardTitle>
                    <CardDescription>
                      Overall website SEO performance based on real data analysis
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-3xl font-bold text-blue-600">{domainData.healthScore}%</div>
                        <p className="text-sm text-gray-600">Overall Health Score</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{domainData.seoReport.overallScore}%</div>
                        <p className="text-sm text-gray-600">SEO Score</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-red-600">{domainData.seoReport.issues.critical}</div>
                        <p className="text-xs text-gray-600">Critical Issues</p>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-yellow-600">{domainData.seoReport.issues.warnings}</div>
                        <p className="text-xs text-gray-600">Warnings</p>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">{domainData.seoReport.issues.notices}</div>
                        <p className="text-xs text-gray-600">Good Practices</p>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">{domainData.seoReport.sections.links}%</div>
                        <p className="text-xs text-gray-600">Link Score</p>
                      </div>
                    </div>

                    {domainData.recommendations && domainData.recommendations.length > 0 && (
                      <div className="border-t pt-4">
                        <h4 className="font-medium text-gray-900 mb-2">Recommendations</h4>
                        <ul className="space-y-1">
                          {domainData.recommendations.slice(0, 3).map((rec: string, index: number) => (
                            <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                              <span className="text-blue-600 mt-1">•</span>
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Domain Metrics</CardTitle>
                    <CardDescription>
                      Real backlink and domain authority data from SEranking
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Backlinks</p>
                        <p className="text-2xl font-bold">{domainData.domainAnalysis.backlinks.toLocaleString()}</p>
                        {domainData.domainAnalysis.backlinks === 0 && (
                          <p className="text-xs text-purple-600">New domain - build backlinks</p>
                        )}
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Referring Domains</p>
                        <p className="text-2xl font-bold">{domainData.domainAnalysis.referringDomains.toLocaleString()}</p>
                        {domainData.domainAnalysis.referringDomains === 0 && (
                          <p className="text-xs text-purple-600">Focus on link building</p>
                        )}
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Organic Keywords</p>
                        <p className="text-2xl font-bold">{domainData.domainAnalysis.organicKeywords.toLocaleString()}</p>
                        {domainData.domainAnalysis.organicKeywords === 0 && (
                          <p className="text-xs text-blue-600">Optimize for keywords</p>
                        )}
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Domain Rank</p>
                        <p className="text-2xl font-bold">{domainData.domainAnalysis.domainRank}</p>
                        {domainData.domainAnalysis.domainRank === 0 && (
                          <p className="text-xs text-blue-600">New domain</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Traffic Metrics</CardTitle>
                    <CardDescription>
                      Organic and paid traffic estimates
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Organic Traffic</p>
                        <p className="text-2xl font-bold">{domainData.domainAnalysis.organicTraffic.toLocaleString()}</p>
                        {domainData.domainAnalysis.organicTraffic === 0 && (
                          <p className="text-xs text-blue-600">Pre-launch phase</p>
                        )}
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Paid Traffic</p>
                        <p className="text-2xl font-bold">{domainData.domainAnalysis.paidTraffic.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Paid Keywords</p>
                        <p className="text-2xl font-bold">{domainData.domainAnalysis.paidKeywords.toLocaleString()}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <Card>
              <CardContent className="flex items-center justify-center py-12">
                <div className="text-center">
                  <Globe className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Domain Data</h3>
                  <p className="text-gray-600 mb-4">Run a domain analysis to see performance metrics</p>
                  <Button onClick={runDomainAnalysis} disabled={loading}>
                    {loading ? <RefreshCw className="h-4 w-4 animate-spin mr-2" /> : <Globe className="h-4 w-4 mr-2" />}
                    Analyze Domain
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
