'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Bookmark, Clock, Users, ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/projects-data';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarked(!bookmarked);
  };

  const getDifficultyColor = (diff: string) => {
    if (diff === 'Beginner') return 'bg-emerald-50 text-emerald-600 border-emerald-200';
    if (diff === 'Intermediate') return 'bg-amber-50 text-amber-600 border-amber-200';
    return 'bg-rose-50 text-rose-600 border-rose-200';
  };

  return (
    <div
      onClick={() => onOpenModal(project)}
      className="bg-white border border-[#E5E7EB] rounded-[18px] overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1.5 hover:scale-[1.01] hover:border-[#2563EB] transition-all duration-200 cursor-pointer group flex flex-col justify-between"
    >
      <div>
        {/* Top Image Thumbnail (16:9) */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10">
            <span className="bg-white/95 backdrop-blur-xs text-[#111827] text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
              {project.category}
            </span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${getDifficultyColor(project.difficulty)}`}>
              {project.difficulty}
            </span>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={toggleBookmark}
            className={`absolute top-3 right-3 w-7 h-7 rounded-full backdrop-blur-xs flex items-center justify-center transition-colors z-10 ${
              bookmarked
                ? 'bg-[#2563EB] text-white'
                : 'bg-black/50 text-white/80 hover:bg-black/70'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-current' : ''}`} />
          </button>

          {/* Duration Overlay */}
          <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{project.duration}</span>
          </div>
        </div>

        {/* Middle Content */}
        <div className="p-4 sm:p-5">
          <h3 className="font-bold text-sm sm:text-base text-[#111827] line-clamp-1 group-hover:text-[#2563EB] transition-colors mb-1.5">
            {project.title}
          </h3>

          <p className="text-xs text-[#6B7280] line-clamp-2 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap items-center gap-1 mb-4">
            {project.techStack.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="bg-[#F8FAFC] border border-[#E5E7EB] text-[#6B7280] text-[10px] font-medium px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-[10px] text-[#6B7280] font-medium">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>

          {/* Mentor Information */}
          <div className="flex items-center gap-2 pt-3 border-t border-[#E5E7EB]">
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-[#2563EB]/40 shrink-0">
              <Image
                src={project.mentor.avatar}
                alt={project.mentor.name}
                fill
                sizes="28px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-[#6B7280]">Guided by Mentor</p>
              <p className="text-xs font-semibold text-[#111827] truncate">{project.mentor.name}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Card Actions Bottom */}
      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 flex items-center gap-2">
        <button
          onClick={() => onOpenModal(project)}
          className="flex-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold py-2 px-3 rounded-lg flex items-center justify-center gap-1 transition-colors cursor-pointer"
        >
          <span>View Project</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => onOpenModal(project)}
          className="bg-[#F8FAFC] hover:bg-blue-50 border border-[#E5E7EB] hover:border-[#2563EB] text-[#111827] hover:text-[#2563EB] text-xs font-semibold py-2 px-3 rounded-lg flex items-center justify-center gap-1 transition-colors cursor-pointer"
        >
          <Play className="w-3 h-3 fill-current" />
          <span>Demo</span>
        </button>
      </div>
    </div>
  );
}
