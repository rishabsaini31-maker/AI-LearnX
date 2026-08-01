'use client';

import React from 'react';
import Image from 'next/image';
import { Play, Maximize2, ExternalLink } from 'lucide-react';
import { VideoStory } from './types';

interface VideoStoryCardProps {
  story: VideoStory;
  onOpenModal: (story: VideoStory) => void;
}

export function VideoStoryCard({ story, onOpenModal }: VideoStoryCardProps) {
  return (
    <div
      onClick={() => onOpenModal(story)}
      className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 hover:scale-[1.02] hover:border-[#2563EB] transition-all duration-200 cursor-pointer group flex flex-col justify-between"
    >
      {/* Video Thumbnail Header */}
      <div>
        <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
          <Image
            src={story.thumbnail}
            alt={story.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

          {/* Controls Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/95 text-[#2563EB] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </div>
          </div>

          {/* Duration Badge */}
          <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
            {story.duration}
          </div>

          {/* Expand Icon */}
          <div className="absolute top-3 right-3 bg-black/50 text-white/80 p-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#2563EB]/40 shrink-0">
                <Image
                  src={story.avatar}
                  alt={story.name}
                  fill
                  sizes="36px"
                  className="object-cover"
                />
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

          <p className="text-xs text-[#6B7280] line-clamp-2 leading-relaxed mb-4">
            {story.summary}
          </p>
        </div>
      </div>

      {/* Domain Badge Footer */}
      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
        <span className="inline-block bg-blue-50 text-[#2563EB] border border-[#2563EB]/20 text-[11px] font-semibold px-2.5 py-1 rounded-full">
          {story.domain}
        </span>
      </div>
    </div>
  );
}
