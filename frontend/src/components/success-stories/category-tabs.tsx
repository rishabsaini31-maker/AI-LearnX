'use client';

import React from 'react';
import { Play, Headphones, FileText } from 'lucide-react';
import { StoryCategory } from './types';

interface CategoryTabsProps {
  activeCategory: StoryCategory;
  onSelectCategory: (cat: StoryCategory) => void;
  counts: {
    video: number;
    audio: number;
    written: number;
  };
}

export function CategoryTabs({ activeCategory, onSelectCategory, counts }: CategoryTabsProps) {
  const tabs = [
    {
      id: 'video' as StoryCategory,
      label: 'Videos',
      icon: Play,
      count: counts.video,
    },
    {
      id: 'audio' as StoryCategory,
      label: 'Audio',
      icon: Headphones,
      count: counts.audio,
    },
    {
      id: 'written' as StoryCategory,
      label: 'Written',
      icon: FileText,
      count: counts.written,
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeCategory === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onSelectCategory(tab.id)}
            className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-[#2563EB] text-white shadow-sm'
                : 'bg-white border border-[#E5E7EB] text-[#6B7280] hover:border-[#2563EB] hover:bg-[#EFF6FF] hover:text-[#2563EB]'
            }`}
          >
            <Icon className={`w-4 h-4 ${isActive ? 'fill-current' : ''}`} />
            <span>{tab.label}</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-bold transition-colors ${
                isActive
                  ? 'bg-white/20 text-white'
                  : 'bg-[#F1F5F9] text-[#6B7280]'
              }`}
            >
              {tab.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
