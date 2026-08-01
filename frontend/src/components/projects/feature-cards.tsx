'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Layers, GraduationCap, Briefcase } from 'lucide-react';

export function FeatureCards() {
  const features = [
    {
      stat: '1000+',
      label: 'Projects',
      description: 'Production-ready codebases with live demos.',
      icon: FolderGit2,
    },
    {
      stat: '15+',
      label: 'Domains',
      description: 'From AI & Full Stack to Cybersecurity & DevOps.',
      icon: Layers,
    },
    {
      stat: 'Expert',
      label: 'Mentor Support',
      description: '1-on-1 code reviews & architecture guidance.',
      icon: GraduationCap,
    },
    {
      stat: 'Internship',
      label: 'Pathway',
      description: 'Stipend opportunities for top performing builders.',
      icon: Briefcase,
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-10 px-4 sm:px-6 lg:px-8 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#FFFFFF] rounded-[18px] p-6 border border-[#E5E7EB] shadow-sm hover:shadow-md hover:border-[#2563EB] hover:-translate-y-1 transition-all duration-200 group flex items-start justify-between gap-4"
            >
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#111827] group-hover:text-[#2563EB] transition-colors block">
                  {item.stat}
                </span>
                <span className="text-sm font-bold text-[#111827] block mt-0.5">
                  {item.label}
                </span>
                <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-100 text-[#2563EB] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-200">
                <Icon className="w-5 h-5" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
