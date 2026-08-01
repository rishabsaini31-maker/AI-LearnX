'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FolderGit2, Clock, CheckCircle2, Play, ExternalLink, ArrowRight } from 'lucide-react';
import { MOCK_CURRENT_PROJECT } from './data';

export function CurrentProjectCard() {
  const project = MOCK_CURRENT_PROJECT;

  return (
    <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6 shadow-md text-white">
      <div className="flex items-center justify-between pb-4 border-b border-[#1F2937] mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#2563EB]/20 text-[#38BDF8] flex items-center justify-center">
            <FolderGit2 className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-white">Active Capstone Project</h3>
            <p className="text-xs text-[#9CA3AF]">{project.category}</p>
          </div>
        </div>

        <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2.5 py-1 rounded-full">
          In Progress
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left 16:9 Thumbnail */}
        <div className="lg:col-span-5 relative aspect-video rounded-2xl overflow-hidden border border-[#1F2937]">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white text-[#2563EB] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Info */}
        <div className="lg:col-span-7 space-y-4 text-left">
          <div>
            <h4 className="font-bold text-lg text-white mb-1.5 leading-snug">{project.title}</h4>
            <p className="text-xs text-[#9CA3AF] line-clamp-2 leading-relaxed">{project.description}</p>
          </div>

          {/* Progress Circular Bar & Current Stage */}
          <div className="bg-[#172033] border border-[#1F2937] rounded-2xl p-3.5 flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] text-[#9CA3AF] uppercase font-semibold">Current Stage</p>
              <p className="text-xs font-bold text-white mt-0.5">{project.stage}</p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <div className="text-right">
                <span className="text-xs font-extrabold text-[#38BDF8]">{project.progress}%</span>
                <span className="text-[9px] text-[#9CA3AF] block">Completed</span>
              </div>
              <div className="w-9 h-9 rounded-full border-2 border-[#2563EB] border-t-transparent animate-spin-slow flex items-center justify-center text-[10px] font-bold text-[#38BDF8]">
                {project.progress}
              </div>
            </div>
          </div>

          {/* Mentor & Next Deadline Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-1">
            <div className="flex items-center gap-2">
              <div className="relative w-7 h-7 rounded-full overflow-hidden border border-[#2563EB] shrink-0">
                <Image src={project.mentor.avatar} alt={project.mentor.name} fill sizes="28px" className="object-cover" />
              </div>
              <div>
                <p className="text-[10px] text-[#9CA3AF]">Guided by</p>
                <p className="text-xs font-bold text-white">{project.mentor.name}</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-lg">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-[11px] font-semibold">Deadline: {project.nextDeadline}</span>
            </div>
          </div>

          {/* Card Actions */}
          <div className="flex items-center gap-3 pt-2">
            <Link
              href="/intern/projects"
              className="flex-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
            >
              <span>Continue Working</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#172033] hover:bg-[#1F2937] border border-[#1F2937] text-[#38BDF8] text-xs font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
