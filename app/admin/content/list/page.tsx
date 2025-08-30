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
  Plus,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Globe,
  CheckSquare,
  Square
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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

interface ContentItem {
  id: string;
  title: string;
  slug: string;
  status: 'DRAFT' | 'SCHEDULED' | 'PUBLISHED' | 'ARCHIVED';
  language: 'EN' | 'JA';
  category?: {
    nameEn: string;
    nameJa?: string;
  };
  focusKeyword?: string;
  seoScore?: number;
  viewCount: number;
  publishedAt?: string;
  updatedAt: string;
}

export default function ContentListPage() {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    search: '',
    status: '',
    language: '',
    categoryId: ''
  });
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0
  });

  // Generate SEO metadata
  const seoMetadata = generateDefaultSEO(
    "Content List - AKRIN Admin",
    "Manage and organize all content with advanced filtering and bulk actions.",
    "/admin/content/list"
  );

  useEffect(() => {
    loadContent();
  }, [filters, pagination.page]);

  const loadContent = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
        ...Object.fromEntries(Object.entries(filters).filter(([_, v]) => v))
      });

      const response = await fetch(`/api/admin/content?${params}`);
      if (response.ok) {
        const data = await response.json();
        setContent(data.data || []);
        setPagination(prev => ({
          ...prev,
          total: data.pagination?.total || 0,
          pages: data.pagination?.pages || 0
        }));
      }
    } catch (error) {
      console.error('Failed to load content:', error);
      // For now, show empty state
      setContent([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectAll = () => {
    if (selectedItems.length === content.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(content.map(item => item.id));
    }
  };

  const handleSelectItem = (id: string) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      DRAFT: 'secondary',
      SCHEDULED: 'outline',
      PUBLISHED: 'default',
      ARCHIVED: 'destructive'
    } as const;
    
    return (
      <Badge variant={variants[status as keyof typeof variants] || 'secondary'}>
        {status}
      </Badge>
    );
  };

  const getLanguageBadge = (language: string) => {
    return (
      <Badge variant="outline" className="text-xs">
        {language}
      </Badge>
    );
  };

  const getSEOScoreColor = (score?: number) => {
    if (!score) return 'text-gray-400';
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
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
                <span>Content List</span>
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
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Content List</h1>
                  <p className="text-gray-600 mt-2">
                    Manage all your content with advanced filtering and bulk actions
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/admin/content">
                      <FileText className="h-4 w-4 mr-2" />
                      Overview
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

              {/* Filters */}
              <div className="bg-white rounded-lg border p-4 mb-6">
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex-1 min-w-[200px]">
                    <Input
                      placeholder="Search content..."
                      value={filters.search}
                      onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                      className="w-full"
                    />
                  </div>
                  <Select value={filters.status} onValueChange={(value) => setFilters(prev => ({ ...prev, status: value }))}>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Status</SelectItem>
                      <SelectItem value="DRAFT">Draft</SelectItem>
                      <SelectItem value="SCHEDULED">Scheduled</SelectItem>
                      <SelectItem value="PUBLISHED">Published</SelectItem>
                      <SelectItem value="ARCHIVED">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={filters.language} onValueChange={(value) => setFilters(prev => ({ ...prev, language: value }))}>
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Languages</SelectItem>
                      <SelectItem value="EN">English</SelectItem>
                      <SelectItem value="JA">Japanese</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    More Filters
                  </Button>
                </div>
              </div>

              {/* Bulk Actions */}
              {selectedItems.length > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-800">
                      {selectedItems.length} item{selectedItems.length > 1 ? 's' : ''} selected
                    </span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Bulk Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Change Status
                      </Button>
                      <Button variant="destructive" size="sm">
                        Delete Selected
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Content Table */}
              <div className="bg-white rounded-lg border">
                {loading ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading content...</p>
                    </div>
                  </div>
                ) : content.length === 0 ? (
                  <div className="text-center py-12">
                    <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No Content Found</h3>
                    <p className="text-gray-600 mb-4">
                      {Object.values(filters).some(v => v) 
                        ? "No content matches your current filters. Try adjusting your search criteria."
                        : "You haven't created any content yet. Start by creating your first article."
                      }
                    </p>
                    <Button asChild>
                      <Link href="/admin/content/create">
                        <Plus className="h-4 w-4 mr-2" />
                        Create Your First Content
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-12">
                            <button onClick={handleSelectAll}>
                              {selectedItems.length === content.length ? (
                                <CheckSquare className="h-4 w-4" />
                              ) : (
                                <Square className="h-4 w-4" />
                              )}
                            </button>
                          </TableHead>
                          <TableHead>Title</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Language</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>SEO Score</TableHead>
                          <TableHead>Views</TableHead>
                          <TableHead>Updated</TableHead>
                          <TableHead className="w-12"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {content.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell>
                              <button onClick={() => handleSelectItem(item.id)}>
                                {selectedItems.includes(item.id) ? (
                                  <CheckSquare className="h-4 w-4" />
                                ) : (
                                  <Square className="h-4 w-4" />
                                )}
                              </button>
                            </TableCell>
                            <TableCell>
                              <div>
                                <div className="font-medium">{item.title}</div>
                                <div className="text-sm text-gray-500">/{item.slug}</div>
                                {item.focusKeyword && (
                                  <div className="text-xs text-purple-600 mt-1">
                                    Target: {item.focusKeyword}
                                  </div>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>{getStatusBadge(item.status)}</TableCell>
                            <TableCell>{getLanguageBadge(item.language)}</TableCell>
                            <TableCell>
                              {item.category ? (
                                <span className="text-sm">
                                  {item.language === 'JA' && item.category.nameJa 
                                    ? item.category.nameJa 
                                    : item.category.nameEn}
                                </span>
                              ) : (
                                <span className="text-gray-400 text-sm">Uncategorized</span>
                              )}
                            </TableCell>
                            <TableCell>
                              <span className={`font-medium ${getSEOScoreColor(item.seoScore)}`}>
                                {item.seoScore ? `${Math.round(item.seoScore)}%` : 'N/A'}
                              </span>
                            </TableCell>
                            <TableCell>
                              <span className="text-sm">{item.viewCount.toLocaleString()}</span>
                            </TableCell>
                            <TableCell>
                              <span className="text-sm text-gray-500">
                                {new Date(item.updatedAt).toLocaleDateString()}
                              </span>
                            </TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem asChild>
                                    <Link href={`/admin/content/edit/${item.id}`}>
                                      <Edit className="h-4 w-4 mr-2" />
                                      Edit
                                    </Link>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Eye className="h-4 w-4 mr-2" />
                                    Preview
                                  </DropdownMenuItem>
                                  {item.status === 'PUBLISHED' && (
                                    <DropdownMenuItem asChild>
                                      <Link href={`/${item.slug}`} target="_blank">
                                        <Globe className="h-4 w-4 mr-2" />
                                        View Live
                                      </Link>
                                    </DropdownMenuItem>
                                  )}
                                  <DropdownMenuItem className="text-red-600">
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>

                    {/* Pagination */}
                    {pagination.pages > 1 && (
                      <div className="flex items-center justify-between px-6 py-4 border-t">
                        <div className="text-sm text-gray-600">
                          Showing {((pagination.page - 1) * pagination.limit) + 1} to{' '}
                          {Math.min(pagination.page * pagination.limit, pagination.total)} of{' '}
                          {pagination.total} results
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            disabled={pagination.page === 1}
                            onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
                          >
                            Previous
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            disabled={pagination.page === pagination.pages}
                            onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </>
  );
}
