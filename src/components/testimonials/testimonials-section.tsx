'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CategoryTabs } from '../success-stories/category-tabs';
import { SearchAndFilters } from '../success-stories/search-and-filters';
import { VideoStoryCard } from '../success-stories/video-story-card';
import { AudioStoryCard } from '../success-stories/audio-story-card';
import { WrittenStoryCard } from '../success-stories/written-story-card';
import { StoryModal } from '../success-stories/story-modal';
import { SUCCESS_STORIES } from '../success-stories/data';
import { StoryCategory, Story, VideoStory, AudioStory, WrittenStory } from '../success-stories/types';
import { Sparkles, MessageSquare } from 'lucide-react';

export function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState<StoryCategory>('video');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All Domains');
  const [selectedYear, setSelectedYear] = useState('All Years');
  const [selectedSort, setSelectedSort] = useState('newest');
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  // Counts per category
  const counts = useMemo(() => {
    const video = SUCCESS_STORIES.filter((s) => s.category === 'video').length;
    const audio = SUCCESS_STORIES.filter((s) => s.category === 'audio').length;
    const written = SUCCESS_STORIES.filter((s) => s.category === 'written').length;
    return { video, audio, written };
  }, []);

  // Filtered testimonials list
  const filteredStories = useMemo(() => {
    return SUCCESS_STORIES.filter((story) => {
      // Category match
      if (story.category !== activeCategory) return false;

      // Domain match
      if (selectedDomain !== 'All Domains' && story.domain !== selectedDomain) return false;

      // Year match
      if (selectedYear !== 'All Years' && story.completionYear !== selectedYear) return false;

      // Search match
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchName = story.name.toLowerCase().includes(q);
        const matchCompany = story.company.toLowerCase().includes(q);
        const matchRole = story.role.toLowerCase().includes(q);
        const matchProject = story.projectCompleted.toLowerCase().includes(q);
        if (!matchName && !matchCompany && !matchRole && !matchProject) return false;
      }

      return true;
    }).sort((a, b) => {
      if (selectedSort === 'newest') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      if (selectedSort === 'highest-rated') {
        return b.rating - a.rating;
      }
      return 0;
    });
  }, [activeCategory, searchQuery, selectedDomain, selectedYear, selectedSort]);

  return (
    <section className="w-full bg-[#FFFFFF] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-[#2563EB]/20 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Authentic Feedback</span>
          </div>

          {/* Large Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight mb-6">
            AI LearnX Student <span className="text-[#2563EB]">Testimonials</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
            Read and listen to authentic reviews and experiences shared by students, interns, and mentors who transformed their careers.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="mb-10">
          <CategoryTabs
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            counts={counts}
          />
        </div>

        {/* Search & Secondary Filters Bar */}
        <div className="mb-8">
          <SearchAndFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedDomain={selectedDomain}
            onDomainChange={setSelectedDomain}
            selectedYear={selectedYear}
            onYearChange={setSelectedYear}
            selectedSort={selectedSort}
            onSortChange={setSelectedSort}
          />
        </div>

        {/* Category Title & Item Count Header */}
        <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4 mb-8">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#2563EB]" />
            <h2 className="text-lg font-bold text-[#111827] uppercase tracking-wide">
              {activeCategory === 'video' && 'Video Testimonials'}
              {activeCategory === 'audio' && 'Audio Testimonials'}
              {activeCategory === 'written' && 'Written Testimonials'}
            </h2>
          </div>
          <span className="text-sm font-semibold text-[#6B7280]">
            {filteredStories.length} {filteredStories.length === 1 ? 'Testimonial' : 'Testimonials'}
          </span>
        </div>

        {/* Story Grid Container */}
        {filteredStories.length > 0 ? (
          <motion.div
            key={activeCategory + selectedDomain + selectedYear}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredStories.map((story) => {
              if (story.category === 'video') {
                return (
                  <VideoStoryCard
                    key={story.id}
                    story={story as VideoStory}
                    onOpenModal={setSelectedStory}
                  />
                );
              }
              if (story.category === 'audio') {
                return (
                  <AudioStoryCard
                    key={story.id}
                    story={story as AudioStory}
                    onOpenModal={setSelectedStory}
                  />
                );
              }
              return (
                <WrittenStoryCard
                  key={story.id}
                  story={story as WrittenStory}
                  onOpenModal={setSelectedStory}
                />
              );
            })}
          </motion.div>
        ) : (
          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-12 text-center my-8">
            <p className="text-base font-semibold text-[#111827] mb-2">No testimonials match your filter</p>
            <p className="text-sm text-[#6B7280] mb-6">Try clearing your search query or choosing another domain.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDomain('All Domains');
                setSelectedYear('All Years');
              }}
              className="px-5 py-2.5 bg-[#2563EB] text-white text-sm font-semibold rounded-xl hover:bg-[#1D4ED8] transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Modal Overlay Component */}
        <StoryModal story={selectedStory} onClose={() => setSelectedStory(null)} />
      </div>
    </section>
  );
}
