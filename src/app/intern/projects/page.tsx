'use client';

import React from 'react';
import { CurrentProjectCard } from '@/components/intern/CurrentProjectCard';
import { FolderGit2, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';

export default function InternProjectsPage() {
  return (
    <div className="space-y-6 text-left">
      <div className="bg-[#111827] border border-[#1F2937] p-6 rounded-3xl text-white shadow-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#2563EB]/20 text-[#38BDF8] flex items-center justify-center">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">My Internship Projects</h2>
            <p className="text-xs text-[#9CA3AF]">Manage active capstone repositories and milestone progress</p>
          </div>
        </div>
      </div>

      <CurrentProjectCard />

      {/* Completed Previous Projects */}
      <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6 shadow-md text-white space-y-4">
        <h3 className="font-bold text-sm text-white pb-3 border-b border-[#1F2937]">Completed Projects</h3>
        <div className="bg-[#172033] border border-[#1F2937] rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-md">
              Evaluated 100% • Verified
            </span>
            <h4 className="font-bold text-sm text-white">Full Stack E-Commerce Microservices Engine</h4>
            <p className="text-xs text-[#9CA3AF]">Built Node.js API Gateway, Redis caching, and Stripe payment webhooks.</p>
          </div>
          <a
            href="https://github.com/ai-learnx"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#1F2937] hover:bg-[#374151] text-[#38BDF8] text-xs font-semibold rounded-xl inline-flex items-center gap-1.5 transition-colors shrink-0"
          >
            <span>View Verified Code</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
