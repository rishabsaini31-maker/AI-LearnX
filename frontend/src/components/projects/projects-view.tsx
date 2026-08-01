'use client'

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MOCK_PROJECTS, Project } from '@/data/projects-data'
import { ProjectsHero } from '@/components/projects/Hero'
import { ProjectsSidebar } from '@/components/projects/projects-sidebar'
import { ProjectCard } from '@/components/projects/project-card'
import { Search, X, SlidersHorizontal, ArrowUpDown, Sparkles, Play, CheckCircle2 } from 'lucide-react'

export function ProjectsView() {
  // State management
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState<'all' | 'my'>('all')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([])
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<string>('latest')
  
  // Modal / Drawer state for Watching Demo
  const [activeDemoProject, setActiveDemoProject] = useState<Project | null>(null)
  const [startBuildingSuccess, setStartBuildingSuccess] = useState<Project | null>(null)

  // Toggle helpers
  const handleCategoryToggle = (catId: string) => {
    setSelectedCategories(prev =>
      prev.includes(catId) ? prev.filter(c => c !== catId) : [...prev, catId]
    )
  }

  const handleSubCategoryToggle = (subId: string) => {
    setSelectedSubCategories(prev =>
      prev.includes(subId) ? prev.filter(s => s !== subId) : [...prev, subId]
    )
  }

  const handleDifficultyToggle = (diff: string) => {
    setSelectedDifficulties(prev =>
      prev.includes(diff) ? prev.filter(d => d !== diff) : [...prev, diff]
    )
  }

  const handleClearFilters = () => {
    setSearchQuery('')
    setSelectedCategories([])
    setSelectedSubCategories([])
    setSelectedDifficulties([])
    setSortBy('latest')
  }

  // Filter & Sort Pipeline
  const filteredProjects = useMemo(() => {
    return MOCK_PROJECTS.filter(project => {
      // Tab filter
      if (activeTab === 'my' && !project.enrolled) return false

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase()
        const matchTitle = project.title.toLowerCase().includes(query)
        const matchDesc = project.description.toLowerCase().includes(query)
        const matchTech = project.techStack.some(t => t.toLowerCase().includes(query))
        const matchCat = project.category.toLowerCase().includes(query)
        if (!matchTitle && !matchDesc && !matchTech && !matchCat) return false
      }

      // Difficulty filter
      if (selectedDifficulties.length > 0) {
        if (!selectedDifficulties.includes(project.difficulty)) return false
      }

      return true
    }).sort((a, b) => {
      if (sortBy === 'popular') return b.studentsCount - a.studentsCount
      if (sortBy === 'beginner') return a.difficulty === 'Beginner' ? -1 : 1
      if (sortBy === 'advanced') return a.difficulty === 'Advanced' ? -1 : 1
      if (sortBy === 'duration') return parseInt(a.duration) - parseInt(b.duration)
      // Default: Latest
      return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
    })
  }, [activeTab, searchQuery, selectedDifficulties, sortBy])

  return (
    <div className="w-full bg-white text-gray-900 min-h-screen">
      
      {/* 1. HERO BANNER */}
      <ProjectsHero />

      {/* 2. MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT SIDEBAR (Sticky) */}
          <ProjectsSidebar
            selectedCategories={selectedCategories}
            onCategoryToggle={handleCategoryToggle}
            selectedSubCategories={selectedSubCategories}
            onSubCategoryToggle={handleSubCategoryToggle}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onClearFilters={handleClearFilters}
          />

          {/* RIGHT MAIN CONTENT AREA */}
          <main className="flex-1 w-full space-y-6 text-left">
            
            {/* TOP TOOLBAR */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              
              {/* Row 1: Tabs, Search Bar, Sort Dropdown */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
                
                {/* Tabs */}
                <div className="inline-flex p-1 bg-gray-100 rounded-xl border border-gray-200 self-start sm:self-auto">
                  <button
                    onClick={() => setActiveTab('all')}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeTab === 'all'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    All Projects
                  </button>
                  <button
                    onClick={() => setActiveTab('my')}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeTab === 'my'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    My Projects
                  </button>
                </div>

                {/* Search & Sort Controls */}
                <div className="flex flex-1 max-w-md items-center gap-3">
                  {/* Search Bar */}
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search title, tech stack..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Sort Dropdown */}
                  <div className="relative shrink-0">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold py-2 pl-3 pr-8 rounded-xl focus:outline-none focus:border-blue-500 cursor-pointer"
                    >
                      <option value="latest">Sort: Latest</option>
                      <option value="popular">Sort: Popular</option>
                      <option value="beginner">Difficulty: Beginner</option>
                      <option value="advanced">Difficulty: Advanced</option>
                      <option value="duration">Sort: Duration</option>
                    </select>
                    <ArrowUpDown className="w-3 h-3 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

              </div>

              {/* Row 2: Difficulty Filter Pills */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                    <SlidersHorizontal className="w-3 h-3" /> Difficulty:
                  </span>
                  {['Beginner', 'Intermediate', 'Advanced'].map((diff) => {
                    const isSelected = selectedDifficulties.includes(diff)
                    return (
                      <button
                        key={diff}
                        onClick={() => handleDifficultyToggle(diff)}
                        className={`text-xs font-semibold px-3 py-1 rounded-lg border transition-all ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                            : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        {diff}
                      </button>
                    )
                  })}
                </div>

                <div className="text-xs font-medium text-gray-500">
                  Showing <span className="font-bold text-gray-900">{filteredProjects.length}</span> projects
                </div>
              </div>

            </div>

            {/* PROJECT GRID */}
            {filteredProjects.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <AnimatePresence>
                  {filteredProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onWatchDemo={(p) => setActiveDemoProject(p)}
                      onStartBuilding={(p) => setStartBuildingSuccess(p)}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              /* EMPTY STATE */
              <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 mx-auto flex items-center justify-center font-bold text-xl">
                  🔍
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">No Projects Found</h3>
                  <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
                    We couldn't find any projects matching your current filters or search terms.
                  </p>
                </div>
                <button
                  onClick={handleClearFilters}
                  className="px-4 py-2 bg-blue-600 text-white font-bold text-xs rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}

          </main>

        </div>
      </div>

      {/* WATCH DEMO MODAL */}
      <AnimatePresence>
        {activeDemoProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveDemoProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full p-6 space-y-4 shadow-2xl relative text-left"
            >
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{activeDemoProject.category}</span>
                  <h3 className="text-lg font-bold text-gray-900">{activeDemoProject.title}</h3>
                </div>
                <button
                  onClick={() => setActiveDemoProject(null)}
                  className="p-1 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Demo Video Frame */}
              <div className="relative aspect-video w-full bg-slate-900 rounded-xl overflow-hidden flex items-center justify-center group">
                <img 
                  src={activeDemoProject.thumbnail} 
                  alt={activeDemoProject.title}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-3">
                  <div className="w-16 h-16 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 ml-1 fill-current" />
                  </div>
                  <span className="text-xs font-semibold bg-black/50 px-3 py-1 rounded-full backdrop-blur-md">Interactive Project Architecture Demo</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-gray-900">Project Overview</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{activeDemoProject.description}</p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex justify-end gap-3">
                <button
                  onClick={() => setActiveDemoProject(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold border border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Close Preview
                </button>
                <button
                  onClick={() => {
                    const p = activeDemoProject
                    setActiveDemoProject(null)
                    setStartBuildingSuccess(p)
                  }}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                >
                  Start Building Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* START BUILDING SUCCESS NOTIFICATION MODAL */}
      <AnimatePresence>
        {startBuildingSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setStartBuildingSuccess(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-md w-full p-6 text-center space-y-4 shadow-2xl relative"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">Workspace Ready!</h3>
                <p className="text-xs text-gray-600 mt-1">
                  You have joined <span className="font-bold text-gray-900">{startBuildingSuccess.title}</span>. Your mentor <span className="font-semibold text-blue-600">{startBuildingSuccess.mentor.name}</span> will review your commits.
                </p>
              </div>

              <div className="bg-gray-50 p-3 rounded-xl border border-gray-200 text-left text-xs space-y-1">
                <div className="flex justify-between font-semibold">
                  <span className="text-gray-500">Domain:</span>
                  <span className="text-gray-900">{startBuildingSuccess.category}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span className="text-gray-500">Duration:</span>
                  <span className="text-gray-900">{startBuildingSuccess.duration}</span>
                </div>
                {startBuildingSuccess.stipend && (
                  <div className="flex justify-between font-semibold text-blue-600">
                    <span>Stipend:</span>
                    <span>{startBuildingSuccess.stipend}</span>
                  </div>
                )}
              </div>

              <button
                onClick={() => setStartBuildingSuccess(null)}
                className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors shadow-sm"
              >
                Go to Workspace Dashboard
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
