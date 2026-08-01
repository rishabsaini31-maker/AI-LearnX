'use client';

import React from 'react';
import { BadgeCheck, Download, ShieldCheck, Star } from 'lucide-react';

export default function LORPage() {
  return (
    <div className="space-y-6 text-left">
      <div className="bg-[#111827] border border-[#1F2937] p-6 rounded-3xl text-white shadow-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#2563EB]/20 text-[#38BDF8] flex items-center justify-center">
            <BadgeCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Letter of Recommendation (LOR)</h2>
            <p className="text-xs text-[#9CA3AF]">Personalized LOR signed by Lead Mentors for top 10% performing interns</p>
          </div>
        </div>
      </div>

      <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6 shadow-md text-white space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#1F2937]">
          <div>
            <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold px-2.5 py-1 rounded-full inline-flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-300" /> Top Performer Eligible (Score: 96.5%)
            </span>
            <h3 className="text-lg font-bold text-white mt-2">Official Mentor Letter of Recommendation</h3>
            <p className="text-xs text-[#9CA3AF]">Signed by: Lead Mentor Girish & Program Director</p>
          </div>

          <button className="px-5 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold rounded-xl inline-flex items-center gap-2 transition-colors">
            <Download className="w-4 h-4" />
            <span>Download Signed LOR PDF</span>
          </button>
        </div>

        <div className="bg-[#172033] border border-[#1F2937] p-5 rounded-2xl space-y-3">
          <h4 className="font-bold text-sm text-white">Recommendation Summary</h4>
          <p className="text-xs text-[#9CA3AF] leading-relaxed">
            &ldquo;Rishab Saini has displayed exceptional technical maturity, problem-solving skills, and leadership during his internship at AI LearnX. He consistently delivered production-grade code ahead of deadlines.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
