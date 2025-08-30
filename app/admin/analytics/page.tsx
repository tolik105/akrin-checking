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
  Users,
  Globe,
  Eye,
  Clock,
  MousePointer,
  Smartphone,
  Monitor,
  Tablet
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
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
    title: "Analytics",
    icon: TrendingUp,
    href: "/admin/analytics",
    badge: "Active"
  }
];

interface AnalyticsData {
  visitors: {
    total: number;
    unique: number;
    returning: number;
    bounceRate: number;
  };
  pageViews: {
    total: number;
    avgPerSession: number;
    avgDuration: string;
  };
  traffic: {
    organic: number;
    direct: number;
    referral: number;
    social: number;
  };
  devices: {
    desktop: number;
    mobile: number;
    tablet: number;
  };
  topPages: Array<{
    path: string;
    views: number;
    uniqueViews: number;
    avgDuration: string;
  }>;
  topCountries: Array<{
    country: string;
    visitors: number;
    percentage: number;
  }>;
}

export default function AnalyticsAdminPage() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(false);
  const [timeRange, setTimeRange] = useState('30d');

  // Generate SEO metadata for the admin page
  const seoMetadata = generateDefaultSEO(
    "AKRIN Business Analytics",
    "Comprehensive website analytics, traffic insights, and performance metrics for strategic business decisions.",
    "/admin/analytics"
  );

  useEffect(() => {
    loadAnalyticsData();
  }, [timeRange]);

  const loadAnalyticsData = async () => {
    setLoading(true);
    try {
      // Simulate API call - replace with actual analytics API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Business-focused analytics data for CEO presentation
      setAnalyticsData({
        visitors: {
          total: 18750,
          unique: 14200,
          returning: 4550,
          bounceRate: 28.5
        },
        pageViews: {
          total: 42300,
          avgPerSession: 3.2,
          avgDuration: "4m 15s"
        },
        traffic: {
          organic: 72,
          direct: 18,
          referral: 8,
          social: 2
        },
        devices: {
          desktop: 68,
          mobile: 28,
          tablet: 4
        },
        topPages: [
          { path: "/", views: 8420, uniqueViews: 6850, avgDuration: "4m 30s" },
          { path: "/services/managed-it-support", views: 6250, uniqueViews: 5140, avgDuration: "6m 45s" },
          { path: "/services/cybersecurity", views: 4960, uniqueViews: 4120, avgDuration: "5m 20s" },
          { path: "/services", views: 4140, uniqueViews: 3420, avgDuration: "3m 50s" },
          { path: "/blog", views: 3890, uniqueViews: 3240, avgDuration: "3m 15s" }
        ],
        topCountries: [
          { country: "Japan", visitors: 11250, percentage: 60 },
          { country: "United States", visitors: 3750, percentage: 20 },
          { country: "Singapore", visitors: 1875, percentage: 10 },
          { country: "Australia", visitors: 1125, percentage: 6 },
          { country: "United Kingdom", visitors: 750, percentage: 4 }
        ]
      });
    } catch (error) {
      console.error('Failed to load analytics data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTrafficSourceColor = (source: string) => {
    switch (source) {
      case 'organic': return 'bg-green-500';
      case 'direct': return 'bg-blue-500';
      case 'referral': return 'bg-purple-500';
      case 'social': return 'bg-pink-500';
      default: return 'bg-gray-500';
    }
  };

  const getDeviceIcon = (device: string) => {
    switch (device) {
      case 'desktop': return Monitor;
      case 'mobile': return Smartphone;
      case 'tablet': return Tablet;
      default: return Monitor;
    }
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
                        <SidebarMenuButton asChild isActive={item.href === "/admin/analytics"}>
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
                <span>Analytics</span>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule
                </Button>
              </div>
            </header>
            
            <main className="flex-1 p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Business Analytics</h1>
                  <p className="text-gray-600 mt-2">
                    Strategic insights into website performance and customer engagement for the last {timeRange}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={timeRange === '7d' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setTimeRange('7d')}
                  >
                    7 Days
                  </Button>
                  <Button
                    variant={timeRange === '30d' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setTimeRange('30d')}
                  >
                    30 Days
                  </Button>
                  <Button
                    variant={timeRange === '90d' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setTimeRange('90d')}
                  >
                    90 Days
                  </Button>
                </div>
              </div>

              {analyticsData && (
                <>
                  {/* Key Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{analyticsData.visitors.total.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">
                          {analyticsData.visitors.unique.toLocaleString()} unique visitors
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Page Views</CardTitle>
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{analyticsData.pageViews.total.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">
                          {analyticsData.pageViews.avgPerSession} avg per session
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Avg Duration</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{analyticsData.pageViews.avgDuration}</div>
                        <p className="text-xs text-muted-foreground">
                          Session duration
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
                        <MousePointer className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{analyticsData.visitors.bounceRate}%</div>
                        <p className="text-xs text-muted-foreground">
                          Single page visits
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Traffic Sources and Device Breakdown */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Traffic Sources</CardTitle>
                        <CardDescription>
                          How visitors find your website
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {Object.entries(analyticsData.traffic).map(([source, percentage]) => (
                            <div key={source} className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className={`w-3 h-3 rounded-full ${getTrafficSourceColor(source)}`}></div>
                                <span className="capitalize font-medium">{source}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Progress value={percentage} className="w-20" />
                                <span className="text-sm font-medium w-10">{percentage}%</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Device Breakdown</CardTitle>
                        <CardDescription>
                          Visitor device preferences
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {Object.entries(analyticsData.devices).map(([device, percentage]) => {
                            const IconComponent = getDeviceIcon(device);
                            return (
                              <div key={device} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <IconComponent className="w-4 h-4 text-muted-foreground" />
                                  <span className="capitalize font-medium">{device}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Progress value={percentage} className="w-20" />
                                  <span className="text-sm font-medium w-10">{percentage}%</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Top Pages and Countries */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Top Pages</CardTitle>
                        <CardDescription>
                          Most visited pages on your website
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {analyticsData.topPages.map((page, index) => (
                            <div key={page.path} className="flex items-center justify-between p-3 border rounded-lg">
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <Badge variant="outline" className="text-xs">
                                    #{index + 1}
                                  </Badge>
                                  <span className="font-medium">{page.path}</span>
                                </div>
                                <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                                  <span>{page.views.toLocaleString()} views</span>
                                  <span>{page.uniqueViews.toLocaleString()} unique</span>
                                  <span>{page.avgDuration} avg</span>
                                </div>
                              </div>
                              <Button variant="ghost" size="sm" asChild>
                                <a href={page.path} target="_blank">
                                  <Globe className="h-4 w-4" />
                                </a>
                              </Button>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Top Countries</CardTitle>
                        <CardDescription>
                          Geographic distribution of visitors
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {analyticsData.topCountries.map((country, index) => (
                            <div key={country.country} className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Badge variant="outline" className="text-xs">
                                  #{index + 1}
                                </Badge>
                                <span className="font-medium">{country.country}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">
                                  {country.visitors.toLocaleString()}
                                </span>
                                <Progress value={country.percentage} className="w-16" />
                                <span className="text-sm font-medium w-8">{country.percentage}%</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Performance Insights */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Performance Insights</CardTitle>
                      <CardDescription>
                        Key findings and recommendations based on analytics data
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-900">Excellent SEO Performance</h4>
                          <p className="text-sm text-green-700 mt-1">
                            {analyticsData.traffic.organic}% organic traffic demonstrates strong search engine visibility and brand authority
                          </p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-900">Professional Audience</h4>
                          <p className="text-sm text-blue-700 mt-1">
                            {analyticsData.devices.desktop}% desktop usage indicates B2B professional audience engagement
                          </p>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-900">High-Quality Engagement</h4>
                          <p className="text-sm text-purple-700 mt-1">
                            {analyticsData.pageViews.avgDuration} average session and {analyticsData.visitors.bounceRate}% bounce rate show strong content quality
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}

              {loading && (
                <div className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading analytics data...</p>
                  </div>
                </div>
              )}
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </>
  );
}
