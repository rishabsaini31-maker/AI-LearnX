'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { StudentProjectsHero } from './student-projects-hero';
import { FeatureCards } from './feature-cards';
import { CategoryTabs } from './category-tabs';
import { SearchBar } from './search-bar';
import { ProjectCard } from './project-card-new';
import { ProjectModal } from './project-modal';
import { Pagination } from './pagination';
import { VerifiedOutcomes } from './verified-outcomes';
import { MOCK_PROJECTS as PROJECTS_DATA, Project } from '@/data/projects-data';

const CATEGORIES = [
  'All',
  'Full Stack',
  'Cybersecurity',
  'AI',
  'Cloud',
  'Data Science',
  'Frontend',
  'Backend',
  'Mobile',
  'IoT',
  'Machine Learning',
  'DevOps',
];

const ITEMS_PER_PAGE = 8;

export function StudentProjectsView() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All Levels');
  const [selectedSort, setSelectedSort] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter & Sort Projects
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((proj) => {
      // Category Match
      if (activeCategory !== 'All') {
        const catLower = activeCategory.toLowerCase();
        const projCatLower = proj.category.toLowerCase();
        if (!projCatLower.includes(catLower)) return false;
      }

      // Difficulty Match
      if (selectedDifficulty !== 'All Levels' && proj.difficulty !== selectedDifficulty) {
        return false;
      }

      // Search Query Match
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = proj.title.toLowerCase().includes(q);
        const matchDesc = proj.description.toLowerCase().includes(q);
        const matchMentor = proj.mentor.name.toLowerCase().includes(q);
        const matchTech = proj.techStack.some((t) => t.toLowerCase().includes(q));
        if (!matchTitle && !matchDesc && !matchMentor && !matchTech) return false;
      }

      return true;
    }).sort((a, b) => {
      if (selectedSort === 'newest') {
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      }
      if (selectedSort === 'popular') {
        return b.studentsCount - a.studentsCount;
      }
      if (selectedSort === 'beginner') {
        const diffMap: Record<string, number> = { Beginner: 1, Intermediate: 2, Advanced: 3 };
        return diffMap[a.difficulty] - diffMap[b.difficulty];
      }
      if (selectedSort === 'advanced') {
        const diffMap: Record<string, number> = { Beginner: 1, Intermediate: 2, Advanced: 3 };
        return diffMap[b.difficulty] - diffMap[a.difficulty];
      }
      return 0;
    });
  }, [activeCategory, searchQuery, selectedDifficulty, selectedSort]);

  // Pagination slice
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  const handleCategorySelect = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="w-full bg-[#FFFFFF] min-h-screen">
      {/* Hero Section */}
      <StudentProjectsHero />

      {/* Feature Cards Section */}
      <FeatureCards />

      {/* Main Content Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Category Tabs */}
        <div className="mb-6">
          <CategoryTabs
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onSelectCategory={handleCategorySelect}
          />
        </div>

        {/* Search Bar & Filters */}
        <div className="mb-8">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={(q) => {
              setSearchQuery(q);
              setCurrentPage(1);
            }}
            selectedDifficulty={selectedDifficulty}
            onDifficultyChange={(d) => {
              setSelectedDifficulty(d);
              setCurrentPage(1);
            }}
            selectedSort={selectedSort}
            onSortChange={(s) => {
              setSelectedSort(s);
              setCurrentPage(1);
            }}
          />
        </div>

        {/* Header Results Info */}
        <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4 mb-8">
          <h2 className="text-base font-bold text-[#111827]">
            {activeCategory === 'All' ? 'All Student Projects' : `${activeCategory} Projects`}
          </h2>
          <span className="text-xs font-semibold text-[#6B7280]">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
          </span>
        </div>

        {/* Project Grid (4 desktop / 2 tablet / 1 mobile) */}
        {paginatedProjects.length > 0 ? (
          <motion.div
            key={activeCategory + currentPage + searchQuery}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {paginatedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={setSelectedProject}
              />
            ))}
          </motion.div>
        ) : (
          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-12 text-center my-8">
            <p className="text-base font-semibold text-[#111827] mb-2">No projects found</p>
            <p className="text-sm text-[#6B7280] mb-6">Try clearing your search query or selecting another category.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
                setSelectedDifficulty('All Levels');
              }}
              className="px-5 py-2.5 bg-[#2563EB] text-white text-xs font-semibold rounded-xl hover:bg-[#1D4ED8] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </section>

      {/* Verified Student Outcomes */}
      <VerifiedOutcomes />

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
