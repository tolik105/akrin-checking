"use client";

import React, { useState, useEffect, useCallback } from 'react';
import {
  Upload,
  Image as ImageIcon,
  Trash2,
  Edit,
  Search,
  Filter,
  Grid,
  List,
  Download,
  Copy,
  Check,
  X,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface MediaItem {
  id: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;
  altText?: string;
  caption?: string;
  createdAt: string;
  content?: {
    title: string;
    slug: string;
  };
}

interface MediaLibraryProps {
  onSelect?: (media: MediaItem) => void;
  multiple?: boolean;
  contentId?: string;
  allowUpload?: boolean;
}

export function MediaLibrary({ 
  onSelect, 
  multiple = false, 
  contentId,
  allowUpload = true 
}: MediaLibraryProps) {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [editingItem, setEditingItem] = useState<MediaItem | null>(null);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  useEffect(() => {
    loadMedia();
  }, [contentId]);

  const loadMedia = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (contentId) params.append('contentId', contentId);
      
      const response = await fetch(`/api/admin/media?${params}`);
      if (response.ok) {
        const data = await response.json();
        setMedia(data.data || []);
      }
    } catch (error) {
      console.error('Failed to load media:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = useCallback(async (files: FileList) => {
    if (!files.length) return;

    setUploading(true);
    const uploadPromises = Array.from(files).map(async (file) => {
      const formData = new FormData();
      formData.append('file', file);
      if (contentId) formData.append('contentId', contentId);

      try {
        const response = await fetch('/api/admin/media', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          const data = await response.json();
          return data.data;
        }
      } catch (error) {
        console.error('Upload failed:', error);
      }
      return null;
    });

    const uploadedFiles = await Promise.all(uploadPromises);
    const successfulUploads = uploadedFiles.filter(Boolean);
    
    if (successfulUploads.length > 0) {
      setMedia(prev => [...successfulUploads, ...prev]);
    }
    
    setUploading(false);
  }, [contentId]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files);
    }
  }, [handleFileUpload]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const handleSelect = (item: MediaItem) => {
    if (multiple) {
      setSelectedItems(prev => 
        prev.includes(item.id) 
          ? prev.filter(id => id !== item.id)
          : [...prev, item.id]
      );
    } else {
      onSelect?.(item);
    }
  };

  const handleDelete = async (item: MediaItem) => {
    if (!confirm('Are you sure you want to delete this media file?')) return;

    try {
      const response = await fetch(`/api/admin/media?id=${item.id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setMedia(prev => prev.filter(m => m.id !== item.id));
      }
    } catch (error) {
      console.error('Delete failed:', error);
    }
  };

  const handleEdit = async (item: MediaItem, updates: Partial<MediaItem>) => {
    try {
      const response = await fetch(`/api/admin/media/${item.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });

      if (response.ok) {
        const data = await response.json();
        setMedia(prev => prev.map(m => m.id === item.id ? data.data : m));
        setEditingItem(null);
      }
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 2000);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  const filteredMedia = media.filter(item => {
    const matchesSearch = item.originalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (item.altText || '').toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterType === 'all' || 
                         (filterType === 'images' && item.mimeType.startsWith('image/'));
    
    return matchesSearch && matchesFilter;
  });

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search media..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64"
            />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Files</SelectItem>
              <SelectItem value="images">Images</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
          >
            {viewMode === 'grid' ? <List className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
          </Button>
          {allowUpload && (
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Upload
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Upload Media</DialogTitle>
                </DialogHeader>
                <div
                  className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-medium mb-2">Drop files here or click to upload</p>
                  <p className="text-sm text-gray-600 mb-4">
                    Supports: JPG, PNG, WebP, GIF (max 5MB each)
                  </p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
                    className="hidden"
                    id="file-upload"
                  />
                  <Button asChild>
                    <label htmlFor="file-upload" className="cursor-pointer">
                      Choose Files
                    </label>
                  </Button>
                </div>
                {uploading && (
                  <div className="text-center py-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600 mx-auto mb-2"></div>
                    <p className="text-sm text-gray-600">Uploading files...</p>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>

      {/* Media Grid/List */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading media...</p>
        </div>
      ) : filteredMedia.length === 0 ? (
        <div className="text-center py-12">
          <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No Media Found</h3>
          <p className="text-gray-600 mb-4">
            {searchTerm || filterType !== 'all' 
              ? "No media matches your current filters."
              : "Upload your first media file to get started."
            }
          </p>
          {allowUpload && !searchTerm && filterType === 'all' && (
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Upload Media
            </Button>
          )}
        </div>
      ) : (
        <div className={viewMode === 'grid' 
          ? "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4" 
          : "space-y-2"
        }>
          {filteredMedia.map((item) => (
            <Card 
              key={item.id} 
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedItems.includes(item.id) ? 'ring-2 ring-purple-500' : ''
              }`}
              onClick={() => handleSelect(item)}
            >
              <CardContent className={viewMode === 'grid' ? "p-2" : "p-4"}>
                {viewMode === 'grid' ? (
                  <div className="space-y-2">
                    <div className="aspect-square bg-gray-100 rounded overflow-hidden">
                      {item.mimeType.startsWith('image/') ? (
                        <img
                          src={item.url}
                          alt={item.altText || item.originalName}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ImageIcon className="h-8 w-8 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <div className="text-xs">
                      <p className="font-medium truncate">{item.originalName}</p>
                      <p className="text-gray-500">{formatFileSize(item.size)}</p>
                    </div>
                    <div className="flex gap-1">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-6 px-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(item.url);
                        }}
                      >
                        {copiedUrl === item.url ? (
                          <Check className="h-3 w-3" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-6 px-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingItem(item);
                        }}
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-6 px-2 text-red-600 hover:text-red-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(item);
                        }}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                      {item.mimeType.startsWith('image/') ? (
                        <img
                          src={item.url}
                          alt={item.altText || item.originalName}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ImageIcon className="h-6 w-6 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{item.originalName}</p>
                      <p className="text-sm text-gray-500">{formatFileSize(item.size)}</p>
                      {item.altText && (
                        <p className="text-xs text-gray-400 truncate">{item.altText}</p>
                      )}
                    </div>
                    <div className="flex gap-1">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(item.url);
                        }}
                      >
                        {copiedUrl === item.url ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingItem(item);
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(item);
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Edit Dialog */}
      {editingItem && (
        <Dialog open={!!editingItem} onOpenChange={() => setEditingItem(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Media</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="altText">Alt Text</Label>
                <Input
                  id="altText"
                  defaultValue={editingItem.altText || ''}
                  placeholder="Describe the image for accessibility..."
                />
              </div>
              <div>
                <Label htmlFor="caption">Caption</Label>
                <Textarea
                  id="caption"
                  defaultValue={editingItem.caption || ''}
                  placeholder="Optional caption for the image..."
                  rows={3}
                />
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    const altText = (document.getElementById('altText') as HTMLInputElement)?.value;
                    const caption = (document.getElementById('caption') as HTMLTextAreaElement)?.value;
                    handleEdit(editingItem, { altText, caption });
                  }}
                >
                  Save Changes
                </Button>
                <Button variant="outline" onClick={() => setEditingItem(null)}>
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Selection Actions */}
      {multiple && selectedItems.length > 0 && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white border rounded-lg shadow-lg p-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">
              {selectedItems.length} item{selectedItems.length > 1 ? 's' : ''} selected
            </span>
            <Button
              size="sm"
              onClick={() => {
                const selectedMedia = media.filter(m => selectedItems.includes(m.id));
                if (onSelect) {
                  selectedMedia.forEach(onSelect);
                }
                setSelectedItems([]);
              }}
            >
              Insert Selected
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedItems([])}
            >
              Clear Selection
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
