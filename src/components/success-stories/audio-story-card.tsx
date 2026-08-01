'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Pause, Headphones, ExternalLink } from 'lucide-react';
import { AudioStory } from './types';

interface AudioStoryCardProps {
  story: AudioStory;
  onOpenModal: (story: AudioStory) => void;
}

export function AudioStoryCard({ story, onOpenModal }: AudioStoryCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      onClick={() => onOpenModal(story)}
      className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 hover:scale-[1.02] hover:border-[#2563EB] transition-all duration-200 cursor-pointer group flex flex-col justify-between"
    >
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-[#2563EB] border border-[#2563EB]/20 text-[11px] font-semibold px-2.5 py-1 rounded-full">
            <Headphones className="w-3 h-3" />
            Audio Story
          </span>
          <span className="text-xs text-[#6B7280] font-medium">{story.duration}</span>
        </div>

        {/* Audio Waveform Player Control */}
        <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-3.5 mb-4 group-hover:border-[#2563EB]/40 transition-colors">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center shadow-sm shrink-0 hover:bg-[#1D4ED8] transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>

            {/* Simulated Animated Waveform */}
            <div className="flex-1 flex items-center gap-1 h-8">
              {[40, 75, 30, 90, 60, 100, 45, 80, 55, 35, 70, 85, 40, 65, 30, 95, 50, 70].map((val, i) => (
                <div
                  key={i}
                  className={`w-1 rounded-full transition-all duration-300 ${
                    isPlaying
                      ? 'bg-[#2563EB] animate-pulse'
                      : i < 6
                      ? 'bg-[#2563EB]'
                      : 'bg-[#CBD5E1]'
                  }`}
                  style={{ height: `${val}%` }}
                />
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#E2E8F0] h-1.5 rounded-full mt-3 overflow-hidden">
            <div
              className={`bg-[#2563EB] h-full rounded-full transition-all duration-500 ${
                isPlaying ? 'w-2/3' : 'w-1/3'
              }`}
            />
          </div>
        </div>

        {/* Quote excerpt */}
        <p className="text-xs text-[#6B7280] italic leading-relaxed mb-4 line-clamp-2">
          &ldquo;{story.quote}&rdquo;
        </p>
      </div>

      {/* Student Details & Domain Badge */}
      <div>
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

        <div className="mt-3">
          <span className="inline-block bg-blue-50 text-[#2563EB] border border-[#2563EB]/20 text-[11px] font-semibold px-2.5 py-1 rounded-full">
            {story.domain}
          </span>
        </div>
      </div>
    </div>
  );
}
