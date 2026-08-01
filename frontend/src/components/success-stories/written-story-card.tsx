'use client';

import React from 'react';
import Image from 'next/image';
import { Star, ExternalLink, Quote } from 'lucide-react';
import { WrittenStory } from './types';

interface WrittenStoryCardProps {
  story: WrittenStory;
  onOpenModal: (story: WrittenStory) => void;
}

export function WrittenStoryCard({ story, onOpenModal }: WrittenStoryCardProps) {
  return (
    <div
      onClick={() => onOpenModal(story)}
      className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 hover:scale-[1.02] hover:border-[#2563EB] transition-all duration-200 cursor-pointer group flex flex-col justify-between"
    >
      <div>
        {/* Top Header: Quote Icon & Rating */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center">
            <Quote className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-1">
            {[...Array(story.rating)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>

        {/* Review Excerpt */}
        <p className="text-xs sm:text-sm text-[#111827] leading-relaxed line-clamp-4 font-normal mb-4">
          &ldquo;{story.review}&rdquo;
        </p>
      </div>

      <div>
        {/* Project Completed tag */}
        <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-2.5 mb-4">
          <p className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Project</p>
          <p className="text-xs font-semibold text-[#111827] truncate">{story.projectCompleted}</p>
        </div>

        {/* Student Avatar & Metadata */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-[#E5E7EB]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#2563EB]/40 shrink-0">
              <Image src={story.avatar} alt={story.name} fill sizes="36px" className="object-cover" />
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-sm text-[#111827] truncate group-hover:text-[#2563EB] transition-colors">
                {story.name}
              </h4>
              <p className="text-xs text-[#6B7280] truncate">{story.company}</p>
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-[#6B7280] group-hover:text-[#2563EB] transition-colors shrink-0" />
        </div>
      </div>
    </div>
  );
}
