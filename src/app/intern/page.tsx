'use client';

import React from 'react';
import Link from 'next/link';
import { DashboardHero } from '@/components/intern/DashboardHero';
import { CurrentProjectCard } from '@/components/intern/CurrentProjectCard';
import { Leaderboard } from '@/components/intern/Leaderboard';
import { MOCK_ANNOUNCEMENTS } from '@/components/intern/data';
import { Bell, ArrowRight, CheckCircle2, Clock, Calendar, ShieldCheck, AlertCircle } from 'lucide-react';

export default function InternDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Hero Card */}
      <DashboardHero />

      {/* Grid Row 1: Active Project & Announcements */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Active Capstone Project (8 cols) */}
        <div className="lg:col-span-7">
          <CurrentProjectCard />
        </div>

        {/* Announcements & Urgent Notices (5 cols) */}
        <div className="lg:col-span-5 bg-[#111827] border border-[#1F2937] rounded-3xl p-6 shadow-md text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#1F2937] mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#2563EB]/20 text-[#38BDF8] flex items-center justify-center">
                  <Bell className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">Announcements</h3>
                  <p className="text-xs text-[#9CA3AF]">Program Notices & Guidelines</p>
                </div>
              </div>

              <Link
                href="/intern/announcements"
                className="text-xs text-[#38BDF8] font-semibold hover:underline flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-3">
              {MOCK_ANNOUNCEMENTS.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#172033] border border-[#1F2937] hover:border-[#2563EB]/40 rounded-2xl p-4 transition-all text-left"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="bg-[#2563EB]/20 text-[#38BDF8] border border-[#38BDF8]/30 text-[10px] font-bold px-2 py-0.5 rounded-md">
                      {item.category}
                    </span>
                    <span className="text-[10px] text-[#9CA3AF]">{item.date}</span>
                  </div>

                  <h4 className="font-bold text-xs text-white leading-snug mb-1">{item.title}</h4>
                  <p className="text-[11px] text-[#9CA3AF] line-clamp-2 leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#1F2937] mt-4 flex items-center justify-between text-xs text-[#9CA3AF]">
            <span className="flex items-center gap-1 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" /> 100% Verified Guidelines
            </span>
            <span>AI LearnX Intern Portal</span>
          </div>
        </div>
      </div>

      {/* Grid Row 2: Leaderboard Section */}
      <div>
        <Leaderboard />
      </div>
    </div>
  );
}
