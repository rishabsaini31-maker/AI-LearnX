'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ShieldCheck, 
  Rocket, 
  Award, 
  Monitor,
} from 'lucide-react';
import { BackgroundGrid } from './BackgroundGrid';
import { FeatureCard } from './FeatureCard';
import { StatCard } from './StatCard';
import { LaptopMockup } from './LaptopMockup';

const featurePills = [
  { label: '1:1 Mentor Support', icon: Users },
  { label: 'Internship Unlock', icon: ShieldCheck },
  { label: 'Performance Stipend', icon: Rocket },
  { label: 'Certificate & LOR', icon: Award },
];

const sideStats = [
  {
    value: '3700+',
    label: 'Students Built Real Projects',
    icon: Users,
  },
  {
    value: '2000+',
    label: 'Internship Completions',
    icon: Rocket,
  },
  {
    value: '240+',
    label: 'Active Mentor Sessions',
    icon: Monitor,
  },
];

export function ProjectsHero() {
  return (
    <section className="relative w-full bg-white py-16 px-4 sm:px-6 lg:px-10 overflow-hidden">
      {/* Background Grid */}
      <BackgroundGrid />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto">
        <div className="rounded-[32px] bg-white border border-gray-200/60 p-6 sm:p-10 lg:p-16 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN (5 Cols) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-6 text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-[#2DD4FF] font-bold text-[11px] tracking-wider uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#2DD4FF] animate-pulse" />
                <span>REAL-TIME PROJECTS</span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold text-gray-900 leading-[1.12] tracking-tight">
                Build Real Projects.<br />
                Gain Real{' '}
                <span className="text-[#2DD4FF] inline-block relative">
                  Experience.
                  <span className="absolute left-0 bottom-1 w-full h-[3.5px] bg-[#2DD4FF] rounded-full" />
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-500 leading-[36px] max-w-[520px] font-normal">
                Work on industry-grade projects with 1:1 mentor support and become eligible for{' '}
                <span className="text-[#2DD4FF] font-bold">free internship opportunities</span> after successful completion.
              </p>

              {/* 2x2 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md pt-1">
                {featurePills.map((pill, idx) => (
                  <FeatureCard
                    key={idx}
                    icon={pill.icon}
                    title={pill.label}
                  />
                ))}
              </div>
            </motion.div>

            {/* CENTER COLUMN (4 Cols): Laptop Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-4 relative flex items-center justify-center py-4"
            >
              <LaptopMockup />
            </motion.div>

            {/* RIGHT COLUMN (3 Cols): Stats Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3 space-y-3 relative"
            >
              {/* Dotted curves SVG (desktop only) */}
              <svg className="absolute -left-10 top-6 h-40 w-10 hidden lg:block text-blue-300 pointer-events-none" fill="none" viewBox="0 0 48 160">
                <path 
                  d="M0 80 C 24 80, 24 16, 48 16 M0 80 C 24 80, 24 80, 48 80 M0 80 C 24 80, 24 144, 48 144" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 4" 
                />
              </svg>

              {sideStats.map((item, idx) => (
                <StatCard
                  key={idx}
                  icon={item.icon}
                  value={item.value}
                  label={item.label}
                />
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
