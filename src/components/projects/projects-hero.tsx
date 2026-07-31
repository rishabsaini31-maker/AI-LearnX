'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, GraduationCap, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react'

export function ProjectsHero() {
  const features = [
    { title: '1:1 Mentor Support', desc: 'Direct code reviews & live sessions', icon: GraduationCap },
    { title: 'Internship Opportunity', desc: 'Guaranteed pipeline for top builders', icon: Users },
    { title: 'Performance Stipend', desc: 'Earn up to ₹10,000/mo on completion', icon: Sparkles },
    { title: 'Verified Certificate & LOR', desc: 'Industry recognized credentials', icon: ShieldCheck },
  ]

  return (
    <section className="relative w-full bg-white border-b border-gray-200 overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24">
      {/* Subtle Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(to right, #e5e7eb 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE (5 Columns) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Small Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-semibold text-xs tracking-wider uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              REAL-TIME PROJECTS
            </motion.div>

            {/* Large Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-gray-900 leading-[1.15] tracking-tight font-sans"
            >
              Build Real Projects.<br />
              <span className="text-blue-600">Gain Real Experience.</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal"
            >
              Work on production-grade software engineered with industry standards. Master full-stack apps, AI systems, and microservices with expert 1-on-1 mentorship.
            </motion.p>

            {/* 4 Feature Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
            >
              {features.map((feat, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-gray-300 transition-all flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <feat.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 leading-tight">{feat.title}</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* CENTER - 3D Laptop Mockup & Desk Accessories (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative my-4 lg:my-0">
            {/* Ambient Backlight */}
            <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-3xl -z-10" />

            {/* Laptop Mockup Wrapper */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full max-w-[380px] sm:max-w-[420px]"
            >
              {/* Plant Accessory (Left) */}
              <div className="absolute -left-6 bottom-4 z-20 hidden sm:flex flex-col items-center">
                <div className="w-7 h-9 bg-amber-800 rounded-b-lg shadow-md flex items-center justify-center">
                  <div className="w-6 h-1 bg-amber-700 rounded-full -mt-7" />
                </div>
                <div className="absolute -top-5 flex gap-1">
                  <div className="w-3 h-5 bg-emerald-500 rounded-full rotate-[-20deg] shadow-sm" />
                  <div className="w-4 h-6 bg-emerald-600 rounded-full rotate-[10deg] shadow-sm" />
                  <div className="w-3 h-4 bg-emerald-400 rounded-full rotate-[35deg] shadow-sm" />
                </div>
              </div>

              {/* Coffee Mug Accessory (Right) */}
              <div className="absolute -right-5 bottom-3 z-20 hidden sm:flex items-center">
                <div className="w-7 h-8 bg-white border border-gray-300 rounded-b-md shadow-md flex items-center justify-center relative">
                  <div className="w-3 h-4 border-2 border-gray-300 rounded-r-full absolute -right-3" />
                  <div className="w-5 h-1 bg-amber-900 rounded-full top-1 absolute opacity-80" />
                </div>
              </div>

              {/* Notebook Accessory (Bottom Right) */}
              <div className="absolute -right-10 -bottom-2 z-10 hidden sm:block w-16 h-12 bg-slate-800 rounded-sm border-l-4 border-blue-500 shadow-lg transform rotate-12" />

              {/* Laptop Display Shell */}
              <div className="w-full bg-slate-900 p-2.5 rounded-t-2xl shadow-2xl border border-slate-700 relative">
                {/* Screen Camera Dot */}
                <div className="w-1.5 h-1.5 bg-slate-700 rounded-full mx-auto mb-2" />

                {/* Dashboard Screen Content */}
                <div className="w-full bg-white rounded-lg p-3 text-left overflow-hidden border border-slate-200 aspect-[16/10] flex flex-col justify-between">
                  {/* Top Header Bar */}
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      <span className="text-[10px] font-bold text-gray-800 ml-1">AI LearnX Workspace</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[9px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-mono font-medium">v2.4 Live</span>
                    </div>
                  </div>

                  {/* Mock Dashboard Body */}
                  <div className="grid grid-cols-3 gap-2 py-2">
                    <div className="col-span-2 bg-gray-50 p-2 rounded border border-gray-100 space-y-1.5">
                      <div className="h-2 w-2/3 bg-blue-600 rounded" />
                      <div className="h-1.5 w-full bg-gray-200 rounded" />
                      <div className="h-1.5 w-4/5 bg-gray-200 rounded" />
                      <div className="mt-2 pt-1 border-t border-gray-200 flex items-center justify-between">
                        <span className="text-[8px] text-gray-500 font-semibold">Sprint Progress</span>
                        <span className="text-[8px] text-blue-600 font-bold">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
                        <div className="bg-blue-600 h-full w-[85%]" />
                      </div>
                    </div>

                    <div className="col-span-1 bg-blue-50/60 p-2 rounded border border-blue-100 flex flex-col justify-between">
                      <div className="space-y-1">
                        <span className="text-[8px] font-bold text-blue-900 block">Mentor Active</span>
                        <div className="w-5 h-5 rounded-full bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center">AT</div>
                      </div>
                      <span className="text-[8px] bg-blue-600 text-white px-1 py-0.5 rounded text-center font-bold">Sync Code</span>
                    </div>
                  </div>

                  {/* Bottom Terminal Bar */}
                  <div className="bg-slate-900 text-emerald-400 rounded p-1.5 font-mono text-[9px] flex items-center justify-between">
                    <span>$ pnpm test:all --coverage</span>
                    <span className="text-white bg-emerald-600 px-1 rounded text-[8px]">PASS 100%</span>
                  </div>
                </div>
              </div>

              {/* Laptop Base Stand */}
              <div className="w-[110%] -ml-[5%] h-3 bg-slate-300 rounded-b-xl shadow-md border-t border-slate-400 relative flex items-start justify-center">
                <div className="w-16 h-1 bg-slate-400 rounded-b" />
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE - 3 Floating Stat Cards (3 Columns) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl shrink-0">
                12k+
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Students Built Projects</h4>
                <p className="text-xs text-gray-500">Across 16+ tech domains</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xl shrink-0">
                4.8k
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Internship Completions</h4>
                <p className="text-xs text-gray-500">Hired by hiring partners</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xl shrink-0">
                1.2k+
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Active Mentor Sessions</h4>
                <p className="text-xs text-gray-500">Daily 1-on-1 code reviews</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
