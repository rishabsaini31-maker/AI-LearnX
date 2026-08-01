'use client';

import React, { useState } from 'react';
import { TaskCard } from '@/components/intern/TaskCard';
import { MOCK_TASKS } from '@/components/intern/data';
import { TaskStatus, InternTask } from '@/components/intern/types';
import { CheckSquare, Plus, Filter, Sparkles } from 'lucide-react';

export default function TasksPage() {
  const [tasks, setTasks] = useState<InternTask[]>(MOCK_TASKS);

  const columns: { id: TaskStatus; label: string; color: string }[] = [
    { id: 'todo', label: 'To Do', color: 'border-slate-500/30 bg-slate-500/10 text-slate-300' },
    { id: 'in_progress', label: 'In Progress', color: 'border-[#2563EB]/30 bg-[#2563EB]/10 text-[#38BDF8]' },
    { id: 'submitted', label: 'Submitted', color: 'border-amber-500/30 bg-amber-500/10 text-amber-300' },
    { id: 'approved', label: 'Approved', color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' },
    { id: 'rejected', label: 'Needs Revision', color: 'border-rose-500/30 bg-rose-500/10 text-rose-400' },
  ];

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#111827] border border-[#1F2937] p-6 rounded-3xl text-white shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#2563EB]/20 text-[#38BDF8] flex items-center justify-center">
            <CheckSquare className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Tasks & Milestone Kanban Board</h2>
            <p className="text-xs text-[#9CA3AF]">Manage and track your assigned coding tasks & PR reviews</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-[#38BDF8] bg-[#172033] border border-[#1F2937] px-3 py-1.5 rounded-xl">
            Total Score: 740 pts
          </span>
        </div>
      </div>

      {/* Kanban Board Columns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {columns.map((col) => {
          const colTasks = tasks.filter((t) => t.status === col.id);

          return (
            <div
              key={col.id}
              className="bg-[#111827] border border-[#1F2937] rounded-3xl p-4 flex flex-col justify-between min-h-[500px]"
            >
              <div>
                {/* Column Header */}
                <div className={`p-2.5 rounded-xl border font-bold text-xs flex items-center justify-between mb-4 ${col.color}`}>
                  <span>{col.label}</span>
                  <span className="w-5 h-5 rounded-full bg-black/40 flex items-center justify-center text-[10px]">
                    {colTasks.length}
                  </span>
                </div>

                {/* Tasks Stack */}
                <div className="space-y-3">
                  {colTasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}

                  {colTasks.length === 0 && (
                    <div className="py-8 text-center border border-dashed border-[#1F2937] rounded-2xl text-[11px] text-[#9CA3AF]">
                      No tasks in this stage
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-[#1F2937] text-[10px] text-[#9CA3AF] text-center">
                <span>Drag & drop enabled</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
