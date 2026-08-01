'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ShieldCheck, 
  Rocket, 
  Award, 
  Monitor,
  TrendingUp,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';

export function ProjectsHero() {
  const featurePills = [
    { label: '1:1 Mentor Support', icon: Users },
    { label: 'Internship Unlock', icon: ShieldCheck },
    { label: 'Performance Stipend', icon: Rocket },
    { label: 'Certificate & LOR', icon: Award },
  ];

  const sideStats = [
    {
      stat: '3700+',
      label: 'Students Built Real Projects',
      icon: Users,
    },
    {
      stat: '2000+',
      label: 'Internship Completions',
      icon: Rocket,
    },
    {
      stat: '240+',
      label: 'Active Mentor Sessions',
      icon: Monitor,
    },
  ];

  return (
    <section className="relative w-full bg-[#FFFFFF] py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Banner Frame with Soft Grid Background */}
        <div className="relative rounded-[32px] bg-gradient-to-r from-blue-50/70 via-sky-50/80 to-blue-50/40 border border-blue-100/80 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xs">
          
          {/* Subtle Grid Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.25] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(to right, #3b82f6 1px, transparent 1px)`,
              backgroundSize: '32px 32px',
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* LEFT COLUMN (5 Cols): Title, Subtitle, 2x2 Feature Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 space-y-6 text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 text-[#00A3FF] font-bold text-[11px] tracking-wider uppercase shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00A3FF] animate-pulse" />
                <span>REAL-TIME PROJECTS</span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold text-[#111827] leading-[1.12] tracking-tight font-sans">
                Build Real Projects.<br />
                Gain Real{' '}
                <span className="text-[#00A3FF] inline-block relative">
                  Experience.
                  <span className="absolute left-0 bottom-1 w-full h-[3.5px] bg-[#00A3FF] rounded-full" />
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-lg font-normal">
                Work on industry-grade projects with 1:1 mentor support and become eligible for a{' '}
                <span className="text-[#00A3FF] font-bold">free internships opportunity</span> after successful completion.
              </p>

              {/* 2x2 Feature Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md pt-1">
                {featurePills.map((pill, idx) => {
                  const Icon = pill.icon;
                  return (
                    <div 
                      key={idx}
                      className="bg-white border border-gray-200/80 rounded-2xl py-3 px-4 flex items-center gap-3 shadow-xs hover:border-[#00A3FF] transition-all cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#00A3FF] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-[#111827] whitespace-nowrap">
                        {pill.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* CENTER COLUMN (4 Cols): High-Fidelity Laptop & Desk Props */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-4 relative flex items-center justify-center py-4"
            >
              <div className="relative w-full max-w-md flex items-center justify-center">
                
                {/* Left Desk Prop: Potted Plant */}
                <div className="absolute -left-6 bottom-1 z-20 hidden sm:flex flex-col items-center pointer-events-none">
                  {/* Leaves */}
                  <div className="relative w-10 h-14">
                    <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-3 h-10 bg-emerald-700 rounded-full" />
                    <div className="absolute left-0 bottom-2 w-6 h-10 bg-emerald-500 rounded-t-full -rotate-12" />
                    <div className="absolute right-0 bottom-2 w-6 h-10 bg-emerald-600 rounded-t-full rotate-12" />
                    <div className="absolute left-2 top-0 w-5 h-8 bg-emerald-400 rounded-t-full -rotate-6" />
                  </div>
                  {/* White Pot */}
                  <div className="w-11 h-9 bg-white border border-gray-200 rounded-b-xl shadow-md" />
                </div>

                {/* Laptop Device Center */}
                <div className="w-full relative shadow-2xl rounded-2xl overflow-hidden border-[6px] border-[#1E293B] bg-[#0F172A] aspect-[16/10.5] flex flex-col justify-between">
                  {/* Top Screen Bar */}
                  <div className="bg-[#1E293B] px-3 py-1.5 flex items-center justify-between border-b border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-white tracking-widest uppercase">
                        AI LEARNX
                      </span>
                    </div>
                    <div className="w-10" />
                  </div>

                  {/* Screen Content: Elevance Skills Dashboard */}
                  <div className="p-3 text-white flex-1 bg-[#090D16] flex flex-col justify-between text-left font-sans">
                    {/* Top Row: Welcome & Status */}
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                      <div>
                        <p className="text-[9px] text-slate-400 font-medium">Welcome back, Student 👋</p>
                        <p className="text-[11px] font-bold text-white leading-tight">Let&apos;s continue building your real-world project</p>
                      </div>
                      <span className="text-[9px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                        Active
                      </span>
                    </div>

                    {/* Middle Metrics Row */}
                    <div className="grid grid-cols-3 gap-1.5 my-1.5">
                      <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
                        <p className="text-[8px] text-slate-400">Overall Progress</p>
                        <div className="flex items-center justify-between mt-0.5">
                          <span className="text-xs font-extrabold text-[#00A3FF]">75%</span>
                          <div className="w-3.5 h-3.5 rounded-full border-2 border-[#00A3FF] border-t-transparent animate-spin-slow" />
                        </div>
                      </div>
                      <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
                        <p className="text-[8px] text-slate-400">Tasks Completed</p>
                        <p className="text-xs font-extrabold text-white mt-0.5">32/45</p>
                      </div>
                      <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
                        <p className="text-[8px] text-slate-400">Internship Status</p>
                        <p className="text-[10px] font-bold text-emerald-400 mt-0.5">Active</p>
                      </div>
                    </div>

                    {/* Chart & Recent Activity */}
                    <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800/80 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <p className="text-[8px] text-slate-400 font-mono">Progress Overview</p>
                        <p className="text-[10px] font-bold text-white">Full Stack Banking Portal</p>
                      </div>
                      <div className="flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        <TrendingUp className="w-3 h-3 text-emerald-400" />
                        <span className="text-[9px] font-bold text-emerald-400">+28%</span>
                      </div>
                    </div>
                  </div>

                  {/* Base Hinge Lip */}
                  <div className="h-2 bg-slate-800 border-t border-slate-700" />
                </div>

                {/* Right Desk Prop: Black Coffee Mug with Glow Icon */}
                <div className="absolute -right-6 bottom-1 z-20 hidden sm:flex flex-col items-center pointer-events-none">
                  <div className="w-10 h-12 bg-slate-900 border border-slate-800 rounded-lg shadow-md flex items-center justify-center relative">
                    {/* Handle */}
                    <div className="absolute -right-2 top-2.5 w-3 h-6 border-2 border-slate-800 rounded-r-md" />
                    {/* Glowing Logo */}
                    <span className="text-[#00A3FF] font-bold text-[11px] font-mono drop-shadow-[0_0_6px_rgba(0,163,255,0.6)]">
                      &lt;/&gt;
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* RIGHT COLUMN (3 Cols): Dotted Curve & 3 Stacked Stat Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3 space-y-3 relative"
            >
              {/* Dotted Curves SVG Connecting to Laptop (Desktop Only) */}
              <svg className="absolute -left-12 top-6 h-40 w-12 hidden lg:block text-[#93C5FD] pointer-events-none" fill="none" viewBox="0 0 48 160">
                <path 
                  d="M0 80 C 24 80, 24 16, 48 16 M0 80 C 24 80, 24 80, 48 80 M0 80 C 24 80, 24 144, 48 144" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 4" 
                />
              </svg>

              {sideStats.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-[#00A3FF] transition-all flex items-center gap-3.5 cursor-pointer group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-left min-w-0">
                      <span className="text-xl font-extrabold text-[#111827] block leading-none mb-1">
                        {item.stat}
                      </span>
                      <span className="text-xs text-[#6B7280] font-medium block leading-tight">
                        {item.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
