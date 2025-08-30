"use client";

import React, { useState } from 'react';
import {
  Shield,
  ChevronRight,
  Bell,
  Calendar,
  BarChart3,
  Search,
  TrendingUp,
  FileText,
  Plus,
  List,
  Edit,
  Target,
  BarChart2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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

const contentMenuItems = [
  {
    title: "Content List",
    icon: List,
    href: "/admin/content",
    description: "View and manage all content"
  },
  {
    title: "Create New",
    icon: Plus,
    href: "/admin/content/create",
    description: "Create new SEO-optimized content"
  },
  {
    title: "Keyword Tracking",
    icon: Target,
    href: "/admin/content/keywords",
    description: "Manage target keywords"
  },
  {
    title: "Content Analytics",
    icon: BarChart2,
    href: "/admin/content/analytics",
    description: "Performance metrics and insights"
  }
];

export default function ContentManagementPage() {
  const [activeTab, setActiveTab] = useState("overview");

  // Generate SEO metadata for the admin page
  const seoMetadata = generateDefaultSEO(
    "AKRIN Content Management",
    "Comprehensive content management system for creating SEO-optimized articles and managing target keywords.",
    "/admin/content"
  );

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

            <main className="flex-1 p-6">
              {/* Content Management Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Content Management</h1>
                  <p className="text-gray-600 mt-2">
                    Create and manage SEO-optimized content for target keywords
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/admin/content/keywords">
                      <Target className="h-4 w-4 mr-2" />
                      Keywords
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href="/admin/content/create">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Content
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Content Management Navigation */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="content">Content</TabsTrigger>
                  <TabsTrigger value="keywords">Keywords</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  {/* Quick Actions Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contentMenuItems.map((item) => (
                      <div key={item.href} className="bg-white rounded-lg border p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-purple-100 rounded-lg">
                            <item.icon className="h-5 w-5 text-purple-600" />
                          </div>
                          <h3 className="font-semibold">{item.title}</h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                        <Button variant="outline" size="sm" asChild className="w-full">
                          <Link href={item.href}>
                            Access
                          </Link>
                        </Button>
                      </div>
                    ))}
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-white rounded-lg border p-6">
                    <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">Content management system initialized</span>
                        <span className="text-gray-400 ml-auto">Just now</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600">Target keywords imported from SEranking API</span>
                        <span className="text-gray-400 ml-auto">Today</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-600">Database schema created with bilingual support</span>
                        <span className="text-gray-400 ml-auto">Today</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="content">
                  <div className="bg-white rounded-lg border p-6">
                    <div className="text-center py-12">
                      <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Content List Coming Soon</h3>
                      <p className="text-gray-600 mb-4">
                        The content list interface is being developed. You'll be able to view, edit, and manage all your content here.
                      </p>
                      <Button asChild>
                        <Link href="/admin/content/create">
                          <Plus className="h-4 w-4 mr-2" />
                          Create Your First Content
                        </Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="keywords">
                  <div className="bg-white rounded-lg border p-6">
                    <div className="text-center py-12">
                      <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Keyword Management Coming Soon</h3>
                      <p className="text-gray-600 mb-4">
                        Manage your target keywords, track rankings, and analyze keyword performance with SEranking API integration.
                      </p>
                      <Button variant="outline">
                        View Keywords
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="analytics">
                  <div className="bg-white rounded-lg border p-6">
                    <div className="text-center py-12">
                      <BarChart2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Content Analytics Coming Soon</h3>
                      <p className="text-gray-600 mb-4">
                        Track content performance, SEO rankings, and engagement metrics to optimize your content strategy.
                      </p>
                      <Button variant="outline">
                        View Analytics
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </>
  );
}
