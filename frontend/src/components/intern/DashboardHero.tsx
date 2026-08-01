'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trophy, CheckSquare, Wallet, ArrowUpRight } from 'lucide-react';
import { MOCK_INTERN_PROFILE, MOCK_CURRENT_PROJECT } from './data';

export function DashboardHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full bg-gradient-to-r from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] border border-blue-500/30 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg"
    >
      {/* Glow Overlay */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        
        {/* Left Welcome Info */}
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Active Internship • Summer 2026</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Good Afternoon,<br />
            <span className="text-cyan-300">{MOCK_INTERN_PROFILE.name}</span>
          </h2>

          <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed font-normal">
            Welcome back to your internship. You are currently on track for full performance stipend disbursement & verified LOR.
          </p>
        </div>

        {/* Right Stats Quick Grid */}
        <div className="w-full lg:w-auto grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 lg:pt-0">
          {/* Stat 1: Level */}
          <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-2xl p-4 text-left">
            <p className="text-[10px] text-blue-200 uppercase font-semibold">Current Level</p>
            <p className="text-sm font-extrabold text-white mt-1 leading-snug">Level 3</p>
            <span className="text-[10px] text-cyan-300 font-bold block mt-0.5">Senior Intern</span>
          </div>

          {/* Stat 2: Performance */}
          <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-2xl p-4 text-left">
            <p className="text-[10px] text-blue-200 uppercase font-semibold">Performance</p>
            <p className="text-lg font-extrabold text-emerald-300 mt-1">{MOCK_INTERN_PROFILE.performanceScore}%</p>
            <span className="text-[10px] text-emerald-300 font-bold block mt-0.5">Top 5% Rank</span>
          </div>

          {/* Stat 3: Tasks */}
          <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-2xl p-4 text-left">
            <p className="text-[10px] text-blue-200 uppercase font-semibold">Tasks Available</p>
            <p className="text-lg font-extrabold text-white mt-1">{MOCK_INTERN_PROFILE.tasksAvailable}</p>
            <span className="text-[10px] text-blue-200 font-medium block mt-0.5">2 Pending</span>
          </div>

          {/* Stat 4: Stipend */}
          <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-2xl p-4 text-left">
            <p className="text-[10px] text-blue-200 uppercase font-semibold">Current Stipend</p>
            <p className="text-base font-extrabold text-amber-300 mt-1">{MOCK_INTERN_PROFILE.currentStipend}</p>
            <span className="text-[10px] text-amber-300 font-bold block mt-0.5">Verified Active</span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
