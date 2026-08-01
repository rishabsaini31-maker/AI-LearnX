'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, FileCheck, ShieldCheck, GraduationCap, FolderGit2 } from 'lucide-react';

export function VerifiedOutcomes() {
  const outcomes = [
    {
      stat: '1000+',
      title: 'Projects Completed',
      desc: 'Real-world production software built by students across 15+ tech stacks.',
      icon: FolderGit2,
    },
    {
      stat: 'Paid',
      title: 'Internship Opportunities',
      desc: 'Top project builders get fast-tracked into stipend-based internships.',
      icon: Briefcase,
    },
    {
      stat: 'Verified',
      title: 'Certificates Of Completion',
      desc: 'QR-verifiable industry credentials to showcase on LinkedIn & resume.',
      icon: Award,
    },
    {
      stat: 'Official',
      title: 'Letter of Recommendation (LOR)',
      desc: 'Personalized LOR issued by senior mentors for top performers.',
      icon: FileCheck,
    },
    {
      stat: 'Industrial',
      title: 'Experience Letter',
      desc: 'Proof of real project implementation to present in tech interviews.',
      icon: ShieldCheck,
    },
    {
      stat: '1:1',
      title: 'Dedicated Mentor Support',
      desc: 'Daily code reviews, architecture syncs, and interview prep.',
      icon: GraduationCap,
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider bg-blue-50 border border-[#2563EB]/20 px-3.5 py-1 rounded-full">
            Proven Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mt-3">
            Verified Student Outcomes
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] max-w-xl mx-auto mt-2">
            Every project completed at AI LearnX comes with verifiable credentials and tangible career milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-[18px] p-6 border border-[#E5E7EB] shadow-sm hover:shadow-md hover:border-[#2563EB] hover:-translate-y-1 transition-all duration-200 group flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-[#2563EB]/30 text-[#2563EB] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-200">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wide block">
                    {item.stat}
                  </span>
                  <h3 className="text-base font-bold text-[#111827] mt-0.5 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
