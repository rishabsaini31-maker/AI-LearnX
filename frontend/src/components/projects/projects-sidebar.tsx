'use client'

import React, { useState } from 'react'
import { CATEGORIES_DATA, CategoryFilter } from '@/data/projects-data'
import { ChevronDown, ChevronRight, Check, Layers, BookmarkCheck, Search } from 'lucide-react'

interface ProjectsSidebarProps {
  selectedCategories: string[]
  onCategoryToggle: (categoryId: string) => void
  selectedSubCategories: string[]
  onSubCategoryToggle: (subCatId: string) => void
  activeTab: 'all' | 'my'
  setActiveTab: (tab: 'all' | 'my') => void
  onClearFilters: () => void
}

export function ProjectsSidebar({
  selectedCategories,
  onCategoryToggle,
  selectedSubCategories,
  onSubCategoryToggle,
  activeTab,
  setActiveTab,
  onClearFilters
}: ProjectsSidebarProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('ai-ml')
  const [filterSearch, setFilterSearch] = useState('')

  const toggleExpand = (catId: string) => {
    setExpandedCategory(expandedCategory === catId ? null : catId)
  }

  // Filter categories by search string
  const filteredCategories = CATEGORIES_DATA.filter(cat =>
    cat.name.toLowerCase().includes(filterSearch.toLowerCase()) ||
    cat.subcategories.some(sub => sub.name.toLowerCase().includes(filterSearch.toLowerCase()))
  )

  const activeFiltersCount = selectedCategories.length + selectedSubCategories.length

  return (
    <aside className="w-full lg:w-72 shrink-0 space-y-6 text-left">
      
      {/* Sticky Container */}
      <div className="lg:sticky lg:top-28 space-y-6">

        {/* Top Action Buttons (Browse Projects vs My Projects) */}
        <div className="bg-white p-2 rounded-2xl border border-gray-200 shadow-sm flex flex-col gap-1.5">
          <button
            onClick={() => setActiveTab('all')}
            className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-between transition-all ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Browse Projects</span>
            </div>
            <span className={`text-[10px] px-2 py-0.5 rounded-full ${activeTab === 'all' ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-600'}`}>
              All
            </span>
          </button>

          <button
            onClick={() => setActiveTab('my')}
            className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-between transition-all ${
              activeTab === 'my'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-2">
              <BookmarkCheck className="w-4 h-4" />
              <span>My Projects</span>
            </div>
            <span className={`text-[10px] px-2 py-0.5 rounded-full ${activeTab === 'my' ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-600'}`}>
              Enrolled
            </span>
          </button>
        </div>

        {/* Filter Section Container */}
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-4">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm text-gray-900">Categories</h3>
              {activeFiltersCount > 0 && (
                <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {activeFiltersCount}
                </span>
              )}
            </div>
            {activeFiltersCount > 0 && (
              <button 
                onClick={onClearFilters}
                className="text-[11px] font-semibold text-blue-600 hover:underline"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Quick Filter Search */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search category..."
              value={filterSearch}
              onChange={(e) => setFilterSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Category List with Expandable Subcategories */}
          <div className="space-y-1 max-h-[520px] overflow-y-auto pr-1 scrollbar-thin">
            {filteredCategories.map((cat) => {
              const isCatSelected = selectedCategories.includes(cat.id)
              const isExpanded = expandedCategory === cat.id

              return (
                <div key={cat.id} className="rounded-xl transition-colors">
                  
                  {/* Category Main Item */}
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 group">
                    <label className="flex items-center gap-2.5 cursor-pointer flex-1 select-none">
                      <input
                        type="checkbox"
                        checked={isCatSelected}
                        onChange={() => onCategoryToggle(cat.id)}
                        className="w-4 h-4 rounded text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
                      />
                      <span className={`text-xs font-medium ${isCatSelected ? 'text-blue-600 font-bold' : 'text-gray-700 group-hover:text-gray-900'}`}>
                        {cat.name}
                      </span>
                    </label>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-gray-400 font-mono">({cat.count})</span>
                      {cat.subcategories.length > 0 && (
                        <button
                          onClick={() => toggleExpand(cat.id)}
                          className="p-1 rounded text-gray-400 hover:text-gray-700 hover:bg-gray-200/60 transition-colors"
                        >
                          {isExpanded ? (
                            <ChevronDown className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Subcategories (Expandable) */}
                  {isExpanded && cat.subcategories.length > 0 && (
                    <div className="ml-6 pl-2 border-l border-gray-200 my-1 space-y-1">
                      {cat.subcategories.map((sub) => {
                        const isSubSelected = selectedSubCategories.includes(sub.id)
                        return (
                          <label
                            key={sub.id}
                            className="flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-gray-50 cursor-pointer select-none"
                          >
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                checked={isSubSelected}
                                onChange={() => onSubCategoryToggle(sub.id)}
                                className="w-3.5 h-3.5 rounded text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
                              />
                              <span className={`text-[11px] ${isSubSelected ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>
                                {sub.name}
                              </span>
                            </div>
                            <span className="text-[9px] text-gray-400">({sub.count})</span>
                          </label>
                        )
                      })}
                    </div>
                  )}

                </div>
              )
            })}
          </div>

        </div>

      </div>

    </aside>
  )
}
