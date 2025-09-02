"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
  className?: string;
  language?: 'en' | 'ja';
}

export function TableOfContents({ content, className, language = 'en' }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Extract headings from content
    const headingRegex = /<h([2-4])[^>]*>(.*?)<\/h[2-4]>/gi;
    const items: TOCItem[] = [];
    const usedIds = new Set<string>();
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = parseInt(match[1]);
      const text = match[2].replace(/<[^>]*>/g, '').trim();
      let baseId = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();

      // Ensure unique IDs by adding a counter if needed
      let id = baseId;
      let counter = 1;
      while (usedIds.has(id)) {
        id = `${baseId}-${counter}`;
        counter++;
      }
      usedIds.add(id);

      items.push({ id, text, level });
    }

    setTocItems(items);
  }, [content]);

  useEffect(() => {
    // Add IDs to headings in the DOM
    let headingIndex = 0;
    tocItems.forEach(item => {
      // Find headings by level and text content
      const headings = document.querySelectorAll(`h${item.level}`);
      let matchCount = 0;

      for (const heading of headings) {
        const headingText = heading.textContent?.trim() || '';
        if (headingText === item.text) {
          // Check if this is the correct instance based on our unique ID
          const expectedIndex = item.id.includes('-') ?
            parseInt(item.id.split('-').pop() || '1') - 1 : 0;

          if (matchCount === expectedIndex && !heading.id) {
            heading.id = item.id;
            break;
          }
          matchCount++;
        }
      }
      headingIndex++;
    });

    // Set up intersection observer for active section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0% -35% 0%',
        threshold: 0
      }
    );

    // Observe all headings
    tocItems.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [tocItems]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  if (tocItems.length === 0) return null;

  return (
    <nav className={cn(
      isMobile
        ? "mb-6"
        : "sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto",
      className
    )}>
      <div className={cn(
        "bg-white rounded-lg border border-gray-200 shadow-sm",
        isMobile ? "p-4" : "p-6"
      )}>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn(
            "w-full text-left flex items-center justify-between mb-4",
            isMobile ? "text-base" : "text-lg",
            "font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#21B3AA] focus:ring-offset-2 rounded-md p-1"
          )}
          aria-expanded={!isCollapsed}
          aria-controls="toc-list"
        >
          <span className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            {language === 'ja' ? '目次' : 'Table of Contents'}
          </span>
          {isMobile && (
            <svg
              className={cn("w-4 h-4 transition-transform", isCollapsed ? "rotate-0" : "rotate-180")}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>
        <ul
          id="toc-list"
          className={cn(
            "space-y-2 transition-all duration-300",
            isMobile && isCollapsed ? "hidden" : "block"
          )}
        >
          {tocItems.map((item, index) => (
            <li key={`${item.id}-${index}`}>
              <button
                onClick={() => scrollToHeading(item.id)}
                className={cn(
                  "block w-full text-left transition-colors duration-200 hover:text-teal-600 focus:outline-none focus:text-teal-600 rounded-md p-2",
                  isMobile ? "text-sm min-h-[44px]" : "text-sm",
                  item.level === 2 && "font-medium",
                  item.level === 3 && (isMobile ? "pl-4" : "pl-4") + " text-gray-600",
                  item.level === 4 && (isMobile ? "pl-6" : "pl-8") + " text-gray-500",
                  activeId === item.id && "text-teal-600 font-medium bg-teal-50/50"
                )}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
