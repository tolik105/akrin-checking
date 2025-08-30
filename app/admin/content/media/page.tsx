"use client";

import React from 'react';
import {
  Shield,
  ChevronRight,
  Bell,
  Calendar,
  BarChart3,
  Search,
  TrendingUp,
  FileText,
  Image as ImageIcon,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
import { MediaLibrary } from '@/components/media/media-library';
import Link from 'next/link';

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

export default function MediaManagementPage() {
  // Generate SEO metadata
  const seoMetadata = generateDefaultSEO(
    "Media Library - AKRIN Admin",
    "Manage and organize media files with advanced upload, editing, and optimization features.",
    "/admin/content/media"
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
                <ChevronRight className="h-4 w-4" />
                <span>Media Library</span>
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
                    <h1 className="text-3xl font-bold text-gray-900">Media Library</h1>
                    <p className="text-gray-600 mt-2">
                      Manage and organize your media files with advanced upload and editing features
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right text-sm text-gray-600">
                    <div>Total Files: <span className="font-medium">0</span></div>
                    <div>Storage Used: <span className="font-medium">0 MB</span></div>
                  </div>
                </div>
              </div>

              {/* Media Library */}
              <div className="bg-white rounded-lg border p-6">
                <MediaLibrary allowUpload={true} />
              </div>

              {/* Usage Guidelines */}
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Media Guidelines</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
                  <div>
                    <h4 className="font-medium mb-1">Supported Formats</h4>
                    <ul className="space-y-1">
                      <li>• Images: JPG, PNG, WebP, GIF</li>
                      <li>• Maximum file size: 5MB</li>
                      <li>• Recommended: WebP for best compression</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">SEO Best Practices</h4>
                    <ul className="space-y-1">
                      <li>• Always add descriptive alt text</li>
                      <li>• Use meaningful file names</li>
                      <li>• Optimize images before upload</li>
                      <li>• Include focus keywords in alt text when relevant</li>
                    </ul>
                  </div>
                </div>
              </div>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </>
  );
}
