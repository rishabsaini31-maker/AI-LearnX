"use client";

import React from "react";
import {
  Users,
  GraduationCap,
  UserCheck,
  BookOpen,
  FolderGit2,
  Briefcase,
  DollarSign,
  Award,
  FileCheck2,
  FileText,
  Clock,
  CheckCircle2,
  Plus,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";
import { Card, Button, Badge } from "@/components/ui/core";

export function DashboardView({ onNavigate }: { onNavigate: (tabId: string) => void }) {
  const statCards = [
    { title: "Total Students", value: "14,820", change: "+12.5%", icon: Users, color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-950/40" },
    { title: "Total Interns", value: "3,410", change: "+8.2%", icon: GraduationCap, color: "text-indigo-600", bg: "bg-indigo-50 dark:bg-indigo-950/40" },
    { title: "Total Mentors", value: "128", change: "+4.1%", icon: UserCheck, color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-950/40" },
    { title: "Total Courses", value: "48", change: "+2.0%", icon: BookOpen, color: "text-purple-600", bg: "bg-purple-50 dark:bg-purple-950/40" },
    { title: "Total Projects", value: "592", change: "+18.4%", icon: FolderGit2, color: "text-amber-600", bg: "bg-amber-50 dark:bg-amber-950/40" },
    { title: "Active Internships", value: "840", change: "+9.5%", icon: Briefcase, color: "text-cyan-600", bg: "bg-cyan-50 dark:bg-cyan-950/40" },
    { title: "Revenue (MTD)", value: "₹48,20,500", change: "+24.8%", icon: DollarSign, color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-950/40" },
    { title: "Certificates Generated", value: "2,840", change: "+15.2%", icon: Award, color: "text-rose-600", bg: "bg-rose-50 dark:bg-rose-950/40" },
    { title: "Experience Letters", value: "1,450", change: "+11.0%", icon: FileCheck2, color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-950/40" },
    { title: "LOR Generated", value: "890", change: "+6.4%", icon: FileText, color: "text-slate-600", bg: "bg-slate-100 dark:bg-slate-800" },
    { title: "Pending Tasks", value: "42", change: "-5.2%", icon: Clock, color: "text-amber-600", bg: "bg-amber-50 dark:bg-amber-950/40" },
    { title: "Completed Tasks", value: "1,980", change: "+32.0%", icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-950/40" },
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner & Quick Actions */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-sm">
        <div>
          <h1 className="text-xl sm:text-2xl font-black">AI LearnX Executive Overview</h1>
          <p className="text-xs sm:text-sm text-blue-100 mt-1">Real-time metrics, analytics & operations center for platform growth.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm" variant="secondary" onClick={() => onNavigate("courses")}>
            <Plus className="w-4 h-4" /> Add Course
          </Button>
          <Button size="sm" variant="secondary" onClick={() => onNavigate("projects")}>
            <Plus className="w-4 h-4" /> Add Project
          </Button>
          <Button size="sm" className="bg-white text-blue-700 hover:bg-blue-50 font-bold" onClick={() => onNavigate("certificates")}>
            Issue Certificate
          </Button>
        </div>
      </div>

      {/* 12 Overview Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <Card key={idx} className="hover:border-blue-300 dark:hover:border-blue-700">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{card.title}</span>
                <div className={`p-2 rounded-xl ${card.bg} ${card.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <span className="text-xl font-black text-slate-900 dark:text-white">{card.value}</span>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" /> {card.change}
                </span>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Analytics Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Student Growth Chart Mock */}
        <Card>
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Student & Intern Growth</h3>
              <p className="text-xs text-slate-400">Monthly enrollment trends (2026)</p>
            </div>
            <Badge variant="info">Year-to-Date</Badge>
          </div>
          <div className="h-56 flex items-end justify-between gap-2 pt-6 px-2">
            {[45, 62, 58, 75, 82, 95, 110, 125, 140, 165, 180, 210].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div
                  style={{ height: `${height * 0.7}px` }}
                  className="w-full bg-blue-600 dark:bg-blue-500 rounded-t-lg group-hover:bg-blue-700 transition-all"
                />
                <span className="text-[10px] text-slate-400">M{i + 1}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Revenue Analytics Chart Mock */}
        <Card>
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Revenue & Stipend Disbursal</h3>
              <p className="text-xs text-slate-400">Gross revenue vs stipend payouts</p>
            </div>
            <Badge variant="success">+24.8% YoY</Badge>
          </div>
          <div className="h-56 flex items-end justify-between gap-2 pt-6 px-2">
            {[30, 42, 50, 68, 85, 78, 92, 105, 120, 135, 150, 180].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                <div
                  style={{ height: `${val * 0.8}px` }}
                  className="w-full bg-slate-900 dark:bg-slate-100 rounded-t-lg group-hover:bg-blue-600 transition-all"
                />
                <span className="text-[10px] text-slate-400">M{i + 1}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Activity Stream & Quick Actions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Recent System Activity</h3>
            <button className="text-xs font-semibold text-blue-600 hover:underline">View All</button>
          </div>
          <div className="space-y-3">
            {[
              { title: "New Student Enrolled", desc: "Aarav Sharma purchased AI Engineering Masterclass", time: "10 mins ago", badge: "Student" },
              { title: "Project Submitted for Review", desc: "AI Agentic Workflow by Neha Gupta", time: "25 mins ago", badge: "Project" },
              { title: "Blog Published", desc: "Building Enterprise LLM Systems by Lead Author", time: "1 hour ago", badge: "CMS" },
              { title: "Internship Certificate Generated", desc: "Verified ID #AI-CERT-9921 for Priya Patel", time: "2 hours ago", badge: "Certificate" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">{item.title}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                </div>
                <div className="text-right">
                  <Badge variant="info">{item.badge}</Badge>
                  <span className="text-[10px] text-slate-400 block mt-1">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Launch Panel */}
        <Card>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Operational Shortcuts</h3>
          <div className="space-y-2">
            {[
              { label: "Add New Course", tab: "courses" },
              { label: "Submit Student Project", tab: "projects" },
              { label: "Create Blog Post", tab: "blogs" },
              { label: "Issue Verified Certificate", tab: "certificates" },
              { label: "Assign Mentor to Intern", tab: "mentors" },
              { label: "Publish Announcement", tab: "announcements" },
            ].map((act, i) => (
              <button
                key={i}
                onClick={() => onNavigate(act.tab)}
                className="w-full flex items-center justify-between p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-blue-50 dark:hover:bg-slate-800 hover:border-blue-400 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-all cursor-pointer"
              >
                <span>{act.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
