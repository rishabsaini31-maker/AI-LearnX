'use client';

import React from 'react';
import { Calendar, CheckCircle2, Flame, Award } from 'lucide-react';

export default function AttendancePage() {
  return (
    <div className="space-y-6 text-left">
      <div className="bg-[#111827] border border-[#1F2937] p-6 rounded-3xl text-white shadow-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#2563EB]/20 text-[#38BDF8] flex items-center justify-center">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Daily Attendance & Check-in Tracker</h2>
            <p className="text-xs text-[#9CA3AF]">Automatic check-in logged via commit activity & daily standup responses</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6 shadow-md text-white">
          <p className="text-xs text-[#9CA3AF] uppercase font-semibold">Monthly Attendance</p>
          <p className="text-3xl font-extrabold text-emerald-400 mt-2">100%</p>
          <p className="text-xs text-[#9CA3AF] mt-1">22 of 22 Days Active</p>
        </div>

        <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6 shadow-md text-white">
          <p className="text-xs text-[#9CA3AF] uppercase font-semibold">Active Streak</p>
          <div className="flex items-center gap-2 mt-2">
            <Flame className="w-6 h-6 text-amber-400 fill-amber-400" />
            <p className="text-3xl font-extrabold text-white">18 Days</p>
          </div>
          <p className="text-xs text-amber-400 mt-1 font-semibold">Super Builder Streak 🔥</p>
        </div>

        <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6 shadow-md text-white">
          <p className="text-xs text-[#9CA3AF] uppercase font-semibold">Standup Status</p>
          <p className="text-xl font-bold text-cyan-300 mt-2">Logged Today 9:30 AM</p>
          <span className="inline-block mt-2 text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
            ✓ Verified
          </span>
        </div>
      </div>
    </div>
  );
}
