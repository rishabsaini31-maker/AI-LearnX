'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Cpu, Cloud, ShieldCheck, Database, Layout } from 'lucide-react';

export function StudentProjectsHero() {
  const floatingBadges = [
    { label: 'Web Development', icon: Layout, color: 'bg-blue-50 text-[#2563EB] border-[#2563EB]/20', position: 'top-4 -left-4 sm:-left-8' },
    { label: 'AI & LLMs', icon: Cpu, color: 'bg-indigo-50 text-indigo-600 border-indigo-200', position: 'top-16 -right-4 sm:-right-8' },
    { label: 'Cloud Infrastructure', icon: Cloud, color: 'bg-[#F8FAFC] text-[#111827] border-[#E5E7EB]', position: 'bottom-20 -left-6 sm:-left-10' },
    { label: 'Cybersecurity', icon: ShieldCheck, color: 'bg-emerald-50 text-emerald-600 border-emerald-200', position: 'bottom-6 right-4 sm:right-8' },
    { label: 'Data Science', icon: Database, color: 'bg-amber-50 text-amber-600 border-amber-200', position: 'top-1/2 -right-6 sm:-right-12' },
  ];

  return (
    <section className="relative w-full bg-[#FFFFFF] py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-[#2563EB]/20 text-[#2563EB] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>1000+ Real-Time Student Projects</span>
            </div>

            {/* Large Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.15]">
              What You&apos;ll <span className="text-[#2563EB]">Build</span> at AI LearnX
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed max-w-xl font-normal">
              Explore 1000+ real-world projects across AI, Full Stack Development, Data Science, Cybersecurity, Cloud, Mobile Development, IoT and more built by AI LearnX students.
            </p>
          </motion.div>

          {/* Right Column: Code Window & Floating Tech Badges */}
          <div className="lg:col-span-6 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-md lg:max-w-lg bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Window Header */}
              <div className="bg-[#F8FAFC] px-4 py-3 border-b border-[#E5E7EB] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[11px] font-mono text-[#6B7280] flex items-center gap-1.5 bg-white px-2.5 py-0.5 rounded-md border border-[#E5E7EB]">
                  <Code2 className="w-3 h-3 text-[#2563EB]" />
                  <span>app/student-projects/builder.tsx</span>
                </div>
              </div>

              {/* Code Mock Body */}
              <div className="p-5 font-mono text-xs text-[#111827] leading-relaxed bg-white space-y-2">
                <p><span className="text-[#2563EB]">const</span> <span className="text-purple-600">project</span> = <span className="text-[#2563EB]">new</span> <span className="text-emerald-600">AIProjectBuilder</span>(&#123;</p>
                <p className="pl-4"><span className="text-[#6B7280]">domain:</span> <span className="text-amber-600">&apos;Full Stack & AI Agents&apos;</span>,</p>
                <p className="pl-4"><span className="text-[#6B7280]">mentor:</span> <span className="text-amber-600">&apos;1:1 Senior Engineer&apos;</span>,</p>
                <p className="pl-4"><span className="text-[#6B7280]">status:</span> <span className="text-emerald-600">&apos;Production Ready&apos;</span>,</p>
                <p className="pl-4"><span className="text-[#6B7280]">certificate:</span> <span className="text-[#2563EB]">true</span></p>
                <p>&#125;);</p>
                <div className="mt-4 pt-3 border-t border-[#E5E7EB] flex items-center justify-between text-[11px]">
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    ✓ Compiled with 0 errors
                  </span>
                  <span className="text-[#6B7280]">Deploying to AWS...</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Badges */}
            {floatingBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ y: 0 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3 + idx,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: idx * 0.4,
                  }}
                  className={`absolute ${badge.position} z-20 shadow-md rounded-xl border px-3 py-1.5 text-xs font-semibold inline-flex items-center gap-2 backdrop-blur-xs`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="whitespace-nowrap">{badge.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
