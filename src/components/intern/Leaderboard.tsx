'use client';

import React from 'react';
import Image from 'next/image';
import { Trophy, Award, Medal, Sparkles } from 'lucide-react';
import { MOCK_LEADERBOARD } from './data';

export function Leaderboard() {
  return (
    <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6 shadow-md text-white">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#1F2937] mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <Trophy className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-white">Internship Leaderboard</h3>
            <p className="text-xs text-[#9CA3AF]">Top 10 High-Performing Interns • July 2026</p>
          </div>
        </div>

        <span className="bg-[#2563EB]/20 text-[#38BDF8] border border-[#38BDF8]/30 text-[10px] font-bold px-2.5 py-1 rounded-full">
          Monthly Reset
        </span>
      </div>

      {/* Leaderboard Table / List */}
      <div className="space-y-3">
        {MOCK_LEADERBOARD.map((entry) => (
          <div
            key={entry.rank}
            className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
              entry.name.includes('You')
                ? 'bg-[#2563EB]/15 border-[#2563EB] text-white shadow-sm'
                : 'bg-[#172033] border-[#1F2937] text-white hover:border-[#2563EB]/50'
            }`}
          >
            {/* Rank & Avatar & Details */}
            <div className="flex items-center gap-3.5 min-w-0 flex-1">
              {/* Rank Number / Icon */}
              <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 font-extrabold text-xs">
                {entry.rank === 1 && <span className="text-amber-400 text-base">🥇</span>}
                {entry.rank === 2 && <span className="text-slate-300 text-base">🥈</span>}
                {entry.rank === 3 && <span className="text-amber-600 text-base">🥉</span>}
                {entry.rank > 3 && <span className="text-[#9CA3AF]">#{entry.rank}</span>}
              </div>

              {/* Avatar */}
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#2563EB]/40 shrink-0">
                <Image src={entry.avatar} alt={entry.name} fill sizes="36px" className="object-cover" />
              </div>

              {/* Name & College */}
              <div className="min-w-0 text-left">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-xs text-white truncate">{entry.name}</h4>
                  {entry.badge && (
                    <span className="hidden sm:inline-block bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[9px] font-bold px-2 py-0.5 rounded-md">
                      {entry.badge}
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-[#9CA3AF] truncate">{entry.college}</p>
              </div>
            </div>

            {/* Progress Bar & Points */}
            <div className="flex items-center gap-4 shrink-0 text-right">
              <div className="hidden sm:block w-28">
                <div className="flex justify-between text-[10px] font-bold text-[#9CA3AF] mb-1">
                  <span>Score</span>
                  <span className="text-[#38BDF8]">{entry.points} pts</span>
                </div>
                <div className="w-full bg-[#1F2937] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#2563EB] h-full rounded-full transition-all duration-500"
                    style={{ width: `${entry.progress}%` }}
                  />
                </div>
              </div>

              <div className="text-right min-w-[70px]">
                <span className="text-xs font-extrabold text-amber-300 block">{entry.stipend}</span>
                <span className="text-[9px] text-[#9CA3AF]">Stipend</span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
