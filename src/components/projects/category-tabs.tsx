'use client';

import React from 'react';

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
}

export function CategoryTabs({ categories, activeCategory, onSelectCategory }: CategoryTabsProps) {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-2">
      <div className="flex items-center gap-2.5 min-w-max">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-[#2563EB] text-white shadow-sm'
                  : 'bg-white border border-[#E5E7EB] text-[#6B7280] hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-blue-50/40'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
