"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  FolderGit2,
  CheckSquare,
  Trophy,
  Calendar,
  MessageSquare,
  FileCheck2,
  User,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Search,
  Bell,
  Plus,
  Star,
  Clock,
  Eye,
  CheckCircle2,
} from "lucide-react";
import { Card, Button, Input, Badge, Modal } from "@/components/ui/core";
import { cn } from "@/lib/utils";

// --- MENTOR PORTAL NAV ITEMS ---
export const mentorNavItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "my-mentees", label: "My Mentees", icon: Users },
  { id: "courses", label: "Assigned Courses", icon: BookOpen },
  { id: "projects", label: "Student Projects Review", icon: FolderGit2 },
  { id: "tasks", label: "Task Reviews & Kanban", icon: CheckSquare },
  { id: "leaderboard", label: "Leaderboard Points", icon: Trophy },
  { id: "sessions", label: "1-on-1 Sessions", icon: Calendar },
  { id: "feedback", label: "Mentorship Feedback", icon: MessageSquare },
  { id: "certificates", label: "LOR Recommendations", icon: FileCheck2 },
  { id: "profile", label: "Mentor Profile", icon: User },
  { id: "settings", label: "Settings", icon: Settings },
];

export function MentorPortal() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex font-sans">
      {/* Sidebar */}
      <aside className={cn("fixed left-0 top-0 bottom-0 z-40 bg-white dark:bg-slate-900 border-r border-slate-200/80 dark:border-slate-800 transition-all duration-300 flex flex-col shadow-xs", collapsed ? "w-20" : "w-64")}>
        <div className="h-16 px-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
          {!collapsed && (
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center text-white font-black text-lg">M</div>
              <div>
                <h1 className="font-extrabold text-slate-900 dark:text-white text-sm">Mentor Portal</h1>
                <span className="text-[10px] text-slate-400">AI LearnX Faculty</span>
              </div>
            </div>
          )}
          <button onClick={() => setCollapsed(!collapsed)} className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
            {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {mentorNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn("w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer", isActive ? "bg-purple-600 text-white" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800")}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className={cn("flex-1 flex flex-col min-w-0 transition-all duration-300", collapsed ? "pl-20" : "pl-64")}>
        {/* Header */}
        <header className="h-16 px-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Mentor Hub</span>
            <span className="text-slate-300">/</span>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white capitalize">{activeTab}</h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"><Bell className="w-4 h-4" /></button>
            <div className="flex items-center gap-2 p-1 pl-2 rounded-xl bg-slate-100 dark:bg-slate-800">
              <div className="w-7 h-7 rounded-lg bg-purple-600 text-white font-bold text-xs flex items-center justify-center">VS</div>
              <span className="text-xs font-bold text-slate-900 dark:text-white hidden lg:block">Dr. Vikram Seth (Senior Mentor)</span>
            </div>
          </div>
        </header>

        {/* Dynamic Views */}
        <main className="p-6 space-y-6 max-w-7xl mx-auto w-full">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-6 text-white shadow-sm flex justify-between items-center">
            <div>
              <h1 className="text-xl font-extrabold">Welcome, Dr. Vikram Seth</h1>
              <p className="text-xs text-purple-100 mt-1">Review student projects, award gamification points & conduct 1-on-1 sessions.</p>
            </div>
            <Button size="sm" variant="secondary">Review Pending Submissions (4)</Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="p-4"><p className="text-xs text-slate-500 font-semibold">Assigned Mentees</p><h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">42 Students</h3></Card>
            <Card className="p-4"><p className="text-xs text-slate-500 font-semibold">Pending Code Reviews</p><h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">8 Submissions</h3></Card>
            <Card className="p-4"><p className="text-xs text-slate-500 font-semibold">Upcoming 1-on-1 Sessions</p><h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">3 Scheduled Today</h3></Card>
          </div>

          <Card className="p-0 overflow-hidden">
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 font-bold text-sm text-slate-900 dark:text-white">Assigned Student Projects for Review</div>
            <div className="p-4 space-y-3">
              {[
                { title: "Autonomous Customer Support AI Agent", student: "Aarav Sharma", status: "Submitted for Review", tech: "Python, LangChain" },
                { title: "Distributed Video Streaming Infrastructure", student: "Karan Mehta", status: "Submitted for Review", tech: "Go, AWS" },
              ].map((p, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">{p.title}</h4>
                    <p className="text-[11px] text-slate-400">Student: {p.student} • Tech: {p.tech}</p>
                  </div>
                  <Button size="sm" variant="outline">Review Project & Give Points</Button>
                </div>
              ))}
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}
