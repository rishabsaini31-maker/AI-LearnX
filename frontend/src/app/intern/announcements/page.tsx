'use client';

import React from 'react';
import { MOCK_ANNOUNCEMENTS } from '@/components/intern/data';
import { Bell, Sparkles } from 'lucide-react';

export default function AnnouncementsPage() {
  return (
    <div className="space-y-6 text-left">
      <div className="bg-[#111827] border border-[#1F2937] p-6 rounded-3xl text-white shadow-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#2563EB]/20 text-[#38BDF8] flex items-center justify-center">
            <Bell className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Program Announcements & Guidelines</h2>
            <p className="text-xs text-[#9CA3AF]">Official updates, evaluation windows, and workshop schedules</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {MOCK_ANNOUNCEMENTS.map((item) => (
          <div key={item.id} className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6 shadow-md text-white space-y-3">
            <div className="flex items-center justify-between gap-2">
              <span className="bg-[#2563EB]/20 text-[#38BDF8] border border-[#38BDF8]/30 text-xs font-bold px-3 py-1 rounded-full">
                {item.category}
              </span>
              <span className="text-xs text-[#9CA3AF]">{item.date} • {item.author}</span>
            </div>
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
