"use client";

import React, { useState } from "react";
import { Trophy, Award, Flame, Star, Edit2, RefreshCw } from "lucide-react";
import { Card, Button, Badge } from "@/components/ui/core";
import { LeaderboardUser } from "@/types";

export function LeaderboardView() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([
    { rank: 1, name: "Priya Patel", points: 4250, badgesCount: 14, streakDays: 28, avatar: "PP", isTopPerformer: true },
    { rank: 2, name: "Rahul Sharma", points: 3890, badgesCount: 12, streakDays: 21, avatar: "RS", isTopPerformer: false },
    { rank: 3, name: "Aarav Gupta", points: 3640, badgesCount: 10, streakDays: 19, avatar: "AG", isTopPerformer: false },
    { rank: 4, name: "Ananya Roy", points: 3200, badgesCount: 9, streakDays: 14, avatar: "AR", isTopPerformer: false },
    { rank: 5, name: "Karan Mehta", points: 2980, badgesCount: 8, streakDays: 11, avatar: "KM", isTopPerformer: false },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Leaderboard & Gamification</h1>
          <p className="text-xs text-slate-400">Monthly ranking, points adjustment, streak tracking & badge management.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline"><RefreshCw className="w-4 h-4" /> Reset Leaderboard</Button>
          <Button size="sm"><Edit2 className="w-4 h-4" /> Adjust Points</Button>
        </div>
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="p-4 w-16">Rank</th>
                <th className="p-4">Intern / Student</th>
                <th className="p-4">Total Points</th>
                <th className="p-4">Badges Earned</th>
                <th className="p-4">Active Streak</th>
                <th className="p-4 text-right">Top Performer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
              {leaderboard.map((user) => (
                <tr key={user.rank} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="p-4 font-black text-slate-900 dark:text-white">
                    {user.rank === 1 ? (
                      <span className="w-7 h-7 rounded-full bg-amber-400 text-slate-900 font-extrabold flex items-center justify-center text-xs shadow-xs">#1</span>
                    ) : (
                      `#${user.rank}`
                    )}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                        {user.avatar}
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white">{user.name}</span>
                    </div>
                  </td>
                  <td className="p-4 font-black text-blue-600 dark:text-blue-400">{user.points.toLocaleString()} pts</td>
                  <td className="p-4 text-slate-500 flex items-center gap-1">
                    <Award className="w-4 h-4 text-purple-500" /> {user.badgesCount} Badges
                  </td>
                  <td className="p-4 text-slate-500 font-semibold flex items-center gap-1">
                    <Flame className="w-4 h-4 text-amber-500 fill-amber-500" /> {user.streakDays} Days
                  </td>
                  <td className="p-4 text-right">
                    {user.isTopPerformer && <Badge variant="warning"><Star className="w-3 h-3 fill-amber-400" /> Top Performer</Badge>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
