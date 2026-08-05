"use client";

import React, { useState } from "react";
import { CheckSquare, Plus, Clock, AlertCircle, CheckCircle2, User, UserCheck } from "lucide-react";
import { Card, Button, Badge, Modal, Input } from "@/components/ui/core";
import { Task } from "@/types";

export function TasksView() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "TSK-01", title: "Build Vector Index for RAG Pipeline", description: "Set up Pinecone DB integration with chunking.", assignedIntern: "Priya Patel", assignedMentor: "Dr. Vikram Seth", dueDate: "2026-08-10", priority: "High", status: "In Progress", points: 150 },
    { id: "TSK-02", title: "Implement Next.js 16 Auth Middleware", description: "Secure API routes with JWT validation.", assignedIntern: "Karan Mehta", assignedMentor: "Rohan Verma", dueDate: "2026-08-08", priority: "Urgent", status: "Todo", points: 200 },
    { id: "TSK-03", title: "Write Unit Tests for Payment Gateway", description: "Cover Razorpay webhook handling.", assignedIntern: "Aarav Sharma", assignedMentor: "Dr. Vikram Seth", dueDate: "2026-08-06", priority: "Medium", status: "Review", points: 100 },
    { id: "TSK-04", title: "Design Admin Dashboard UI Components", description: "Tailwind CSS v4 token system alignment.", assignedIntern: "Neha Gupta", assignedMentor: "Rohan Verma", dueDate: "2026-08-04", priority: "Low", status: "Completed", points: 80 },
  ]);

  const statuses: Task["status"][] = ["Todo", "In Progress", "Review", "Completed", "Rejected"];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Internship Task Manager</h1>
          <p className="text-xs text-slate-400">Interactive Kanban board with points, due dates & status tracking.</p>
        </div>
        <Button size="sm">
          <Plus className="w-4 h-4" /> Create New Task
        </Button>
      </div>

      {/* Kanban Board Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto pb-4">
        {statuses.map((colStatus) => {
          const colTasks = tasks.filter((t) => t.status === colStatus);
          return (
            <div key={colStatus} className="bg-slate-100/70 dark:bg-slate-900/60 rounded-2xl p-3 flex flex-col gap-3 min-w-[240px]">
              <div className="flex items-center justify-between px-1">
                <h3 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">{colStatus}</h3>
                <span className="px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-400">
                  {colTasks.length}
                </span>
              </div>

              <div className="space-y-2.5 flex-1">
                {colTasks.map((task) => (
                  <Card key={task.id} className="p-3 shadow-2xs hover:border-blue-400">
                    <div className="flex items-center justify-between mb-1.5">
                      <Badge variant={task.priority === "Urgent" ? "danger" : task.priority === "High" ? "warning" : "default"}>
                        {task.priority}
                      </Badge>
                      <span className="text-[10px] font-extrabold text-blue-600 dark:text-blue-400">+{task.points} pts</span>
                    </div>

                    <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">{task.title}</h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">{task.description}</p>

                    <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-500">
                      <span className="flex items-center gap-1"><User className="w-3 h-3" /> {task.assignedIntern}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {task.dueDate}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
