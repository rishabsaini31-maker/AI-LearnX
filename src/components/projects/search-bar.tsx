'use client';

import React from 'react';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedDifficulty: string;
  onDifficultyChange: (d: string) => void;
  selectedSort: string;
  onSortChange: (s: string) => void;
}

const DIFFICULTIES = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
const SORT_OPTIONS = [
  { id: 'newest', label: 'Newest' },
  { id: 'popular', label: 'Popular' },
  { id: 'trending', label: 'Trending' },
  { id: 'beginner', label: 'Beginner First' },
  { id: 'advanced', label: 'Advanced First' },
];

export function SearchBar({
  searchQuery,
  onSearchChange,
  selectedDifficulty,
  onDifficultyChange,
  selectedSort,
  onSortChange,
}: SearchBarProps) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
      {/* Search Input */}
      <div className="relative flex-1 min-w-[220px]">
        <Search className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search projects by name, tech stack, or mentor..."
          className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-[#111827] placeholder-[#6B7280] focus:outline-none focus:border-[#2563EB] transition-colors"
        />
      </div>

      {/* Filter & Sort Dropdowns */}
      <div className="flex flex-wrap items-center gap-2.5">
        {/* Difficulty Filter */}
        <div className="relative">
          <select
            value={selectedDifficulty}
            onChange={(e) => onDifficultyChange(e.target.value)}
            className="appearance-none bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-[#111827] hover:border-[#2563EB] focus:outline-none focus:border-[#2563EB] transition-colors cursor-pointer"
          >
            {DIFFICULTIES.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#6B7280] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Sort Filter */}
        <div className="relative">
          <select
            value={selectedSort}
            onChange={(e) => onSortChange(e.target.value)}
            className="appearance-none bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-[#111827] hover:border-[#2563EB] focus:outline-none focus:border-[#2563EB] transition-colors cursor-pointer"
          >
            {SORT_OPTIONS.map((s) => (
              <option key={s.id} value={s.id}>
                Sort: {s.label}
              </option>
            ))}
          </select>
          <ArrowUpDown className="w-3.5 h-3.5 text-[#6B7280] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
