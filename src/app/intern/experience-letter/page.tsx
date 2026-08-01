'use client';

import React from 'react';
import { FileText, Download, ShieldCheck, Clock } from 'lucide-react';

export default function ExperienceLetterPage() {
  return (
    <div className="space-y-6 text-left">
      <div className="bg-[#111827] border border-[#1F2937] p-6 rounded-3xl text-white shadow-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#2563EB]/20 text-[#38BDF8] flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Industrial Experience Letter</h2>
            <p className="text-xs text-[#9CA3AF]">Official experience verification document issued upon completion of 100% capstone milestones</p>
          </div>
        </div>
      </div>

      <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6 shadow-md text-white space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#1F2937]">
          <div>
            <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2.5 py-1 rounded-full inline-flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Status: Verified Eligible
            </span>
            <h3 className="text-lg font-bold text-white mt-2">Full Stack Engineering Internship Experience Letter</h3>
            <p className="text-xs text-[#9CA3AF]">Issue Date: Target Aug 15, 2026 • Credential ID: AILX-EXP-2026-8842</p>
          </div>

          <button className="px-5 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold rounded-xl inline-flex items-center gap-2 transition-colors">
            <Download className="w-4 h-4" />
            <span>Download Draft PDF</span>
          </button>
        </div>

        <div className="bg-[#172033] border border-[#1F2937] p-5 rounded-2xl space-y-3">
          <h4 className="font-bold text-sm text-white">Verification Summary</h4>
          <p className="text-xs text-[#9CA3AF] leading-relaxed">
            This letter certifies that Rishab Saini successfully served as a Full Stack Engineering Intern at AI LearnX from June 15, 2026. The intern demonstrated technical expertise in Next.js 16, TypeScript, microservices, and AI system design.
          </p>
        </div>
      </div>
    </div>
  );
}
