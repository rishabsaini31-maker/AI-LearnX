'use client';

import React from 'react';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

interface SearchAndFiltersProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedDomain: string;
  onDomainChange: (domain: string) => void;
  selectedYear: string;
  onYearChange: (year: string) => void;
  selectedSort: string;
  onSortChange: (sort: string) => void;
}

const DOMAINS = ['All Domains', 'Full Stack', 'Cybersecurity', 'Data Science', 'AI', 'Cloud', 'Mobile'];
const YEARS = ['All Years', '2026', '2025'];
const SORT_OPTIONS = [
  { id: 'newest', label: 'Newest First' },
  { id: 'popular', label: 'Most Popular' },
  { id: 'highest-rated', label: 'Highest Rated' }
];

export function SearchAndFilters({
  searchQuery,
  onSearchChange,
  selectedDomain,
  onDomainChange,
  selectedYear,
  onYearChange,
  selectedSort,
  onSortChange
}: SearchAndFiltersProps) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 sm:p-5 shadow-sm space-y-4 md:space-y-0 md:flex md:items-center md:justify-between md:gap-4">
      {/* Search Input */}
      <div className="relative flex-1 min-w-[240px]">
        <Search className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by student name, company, role, or project..."
          className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#111827] placeholder-[#6B7280] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
        />
      </div>

      {/* Filter Dropdowns */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Domain Filter */}
        <div className="relative">
          <select
            value={selectedDomain}
            onChange={(e) => onDomainChange(e.target.value)}
            className="appearance-none bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl pl-3.5 pr-8 py-2.5 text-xs sm:text-sm font-medium text-[#111827] hover:border-[#2563EB] focus:outline-none focus:border-[#2563EB] transition-colors cursor-pointer"
          >
            {DOMAINS.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#6B7280] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Year Filter */}
        <div className="relative">
          <select
            value={selectedYear}
            onChange={(e) => onYearChange(e.target.value)}
            className="appearance-none bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl pl-3.5 pr-8 py-2.5 text-xs sm:text-sm font-medium text-[#111827] hover:border-[#2563EB] focus:outline-none focus:border-[#2563EB] transition-colors cursor-pointer"
          >
            {YEARS.map((y) => (
              <option key={y} value={y}>
                {y}
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
            className="appearance-none bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl pl-3.5 pr-8 py-2.5 text-xs sm:text-sm font-medium text-[#111827] hover:border-[#2563EB] focus:outline-none focus:border-[#2563EB] transition-colors cursor-pointer"
          >
            {SORT_OPTIONS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
          <ArrowUpDown className="w-3.5 h-3.5 text-[#6B7280] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
