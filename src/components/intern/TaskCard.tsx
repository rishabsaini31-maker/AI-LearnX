'use client';

import React from 'react';
import { Clock, User, Award, CheckCircle, AlertCircle } from 'lucide-react';
import { InternTask } from './types';

interface TaskCardProps {
  task: InternTask;
  onStatusChange?: (taskId: string, newStatus: InternTask['status']) => void;
}

export function TaskCard({ task, onStatusChange }: TaskCardProps) {
  const getPriorityBadge = (p: string) => {
    if (p === 'High') return 'bg-rose-500/20 text-rose-400 border-rose-500/30';
    if (p === 'Medium') return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
    return 'bg-[#2563EB]/20 text-[#38BDF8] border-[#38BDF8]/30';
  };

  return (
    <div className="bg-[#172033] border border-[#1F2937] hover:border-[#2563EB] rounded-2xl p-4 shadow-sm hover:shadow-md transition-all space-y-3 text-left">
      <div className="flex items-center justify-between gap-2">
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${getPriorityBadge(task.priority)}`}>
          {task.priority} Priority
        </span>
        <span className="text-[10px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md">
          +{task.points} pts
        </span>
      </div>

      <div>
        <h4 className="font-bold text-xs sm:text-sm text-white leading-snug mb-1">{task.title}</h4>
        <p className="text-[11px] text-[#9CA3AF] line-clamp-2 leading-relaxed">{task.description}</p>
      </div>

      <div className="flex items-center justify-between text-[10px] text-[#9CA3AF] pt-2 border-t border-[#1F2937]">
        <div className="flex items-center gap-1 text-slate-300 font-medium">
          <User className="w-3 h-3 text-[#38BDF8]" />
          <span>{task.assignedMentor}</span>
        </div>
        <div className="flex items-center gap-1 text-amber-400 font-medium">
          <Clock className="w-3 h-3" />
          <span>{task.dueDate}</span>
        </div>
      </div>
    </div>
  );
}
