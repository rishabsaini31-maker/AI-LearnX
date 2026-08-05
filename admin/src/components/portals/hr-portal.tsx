"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  UserCheck,
  Briefcase,
  Calendar,
  UserPlus,
  Clock,
  TrendingUp,
  DollarSign,
  FileCheck2,
  FileText,
  Award,
  FileBadge,
  FolderArchive,
  CreditCard,
  Megaphone,
  BarChart3,
  User,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Search,
  Bell,
  Plus,
  Filter,
  Download,
  Upload,
  Eye,
  Send,
  CheckCircle2,
} from "lucide-react";
import { Card, Button, Input, Badge, Modal } from "@/components/ui/core";
import { cn } from "@/lib/utils";

// --- HR PORTAL TYPES ---
export interface Applicant {
  id: string;
  name: string;
  email: string;
  roleApplied: string;
  resumeUrl: string;
  portfolioUrl: string;
  status: "Applied" | "Interview Scheduled" | "Offered" | "Rejected";
  interviewDate: string;
  assignedHr: string;
}

export interface HRIntern {
  id: string;
  name: string;
  email: string;
  domain: string;
  mentor: string;
  performanceScore: number;
  attendancePct: number;
  stipendStatus: "Paid" | "Pending";
  onboardingStatus: "Completed" | "Pending Docs";
}

// --- HR SIDEBAR NAV ITEMS ---
export const hrNavItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "interns", label: "Interns", icon: Users },
  { id: "applicants", label: "Applicants", icon: UserCheck },
  { id: "recruitment", label: "Recruitment", icon: Briefcase },
  { id: "interviews", label: "Interview Scheduling", icon: Calendar },
  { id: "onboarding", label: "Onboarding", icon: UserPlus },
  { id: "attendance", label: "Attendance", icon: Clock },
  { id: "performance", label: "Performance", icon: TrendingUp },
  { id: "stipend", label: "Stipend", icon: DollarSign },
  { id: "certificates", label: "Certificates", icon: FileCheck2 },
  { id: "exp-letters", label: "Experience Letters", icon: FileText },
  { id: "lor", label: "LOR", icon: Award },
  { id: "offer-letters", label: "Offer Letters", icon: FileBadge },
  { id: "documents", label: "Documents", icon: FolderArchive },
  { id: "payments", label: "Payments", icon: CreditCard },
  { id: "announcements", label: "Announcements", icon: Megaphone },
  { id: "reports", label: "Reports", icon: BarChart3 },
  { id: "profile", label: "Profile", icon: User },
  { id: "settings", label: "Settings", icon: Settings },
];

export function HrPortal() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"offer" | "cert" | "exp" | "interview">("offer");

  // Mock Applicants
  const [applicants, setApplicants] = useState<Applicant[]>([
    { id: "APP-101", name: "Rahul Sharma", email: "rahul@gmail.com", roleApplied: "AI Engineer Intern", resumeUrl: "resume.pdf", portfolioUrl: "portfolio.com", status: "Interview Scheduled", interviewDate: "2026-08-08 11:00 AM", assignedHr: "Pooja Sharma" },
    { id: "APP-102", name: "Priya Patel", email: "priya@gmail.com", roleApplied: "MLOps Intern", resumeUrl: "resume.pdf", portfolioUrl: "github.com/priya", status: "Offered", interviewDate: "2026-08-02 02:00 PM", assignedHr: "Pooja Sharma" },
    { id: "APP-103", name: "Karan Mehta", email: "karan@gmail.com", roleApplied: "Fullstack Intern", resumeUrl: "resume.pdf", portfolioUrl: "karan.dev", status: "Applied", interviewDate: "Not Scheduled", assignedHr: "Unassigned" },
  ]);

  // Mock HR Interns
  const [hrInterns, setHrInterns] = useState<HRIntern[]>([
    { id: "INT-01", name: "Aarav Sharma", email: "aarav@gmail.com", domain: "Generative AI", mentor: "Dr. Vikram Seth", performanceScore: 94, attendancePct: 98, stipendStatus: "Paid", onboardingStatus: "Completed" },
    { id: "INT-02", name: "Neha Gupta", email: "neha@gmail.com", domain: "Next.js 16 Fullstack", mentor: "Rohan Verma", performanceScore: 88, attendancePct: 92, stipendStatus: "Pending", onboardingStatus: "Completed" },
  ]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex font-sans">
      {/* Collapsible Left Sidebar */}
      <aside className={cn("fixed left-0 top-0 bottom-0 z-40 bg-white dark:bg-slate-900 border-r border-slate-200/80 dark:border-slate-800 transition-all duration-300 flex flex-col shadow-xs", collapsed ? "w-20" : "w-64")}>
        <div className="h-16 px-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
          {!collapsed && (
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-lg">HR</div>
              <div>
                <h1 className="font-extrabold text-slate-900 dark:text-white text-sm flex items-center gap-1">AI LearnX HRMS</h1>
                <span className="text-[10px] text-slate-400">From Fresher to Industry Ready</span>
              </div>
            </div>
          )}
          <button onClick={() => setCollapsed(!collapsed)} className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
            {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {hrNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn("w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer", isActive ? "bg-blue-600 text-white" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800")}
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
            <span className="text-xs text-slate-400">HR Portal</span>
            <span className="text-slate-300">/</span>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white capitalize">{activeTab}</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative w-64 hidden sm:block">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <Input placeholder="Search applicants, interns..." className="pl-9 text-xs" />
            </div>
            <button className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"><Bell className="w-4 h-4" /></button>
            <div className="flex items-center gap-2 p-1 pl-2 rounded-xl bg-slate-100 dark:bg-slate-800">
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center">PS</div>
              <span className="text-xs font-bold text-slate-900 dark:text-white hidden lg:block">Pooja Sharma (HR Lead)</span>
            </div>
          </div>
        </header>

        {/* Dynamic Views */}
        <main className="p-6 space-y-6 max-w-7xl mx-auto w-full">
          {/* DASHBOARD VIEW */}
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              {/* Quick Actions Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-sm">
                <div>
                  <h1 className="text-xl font-extrabold">Enterprise HR Operations Panel</h1>
                  <p className="text-xs text-blue-100 mt-1">Manage recruitment pipeline, intern onboarding & verified certificates.</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Button size="sm" variant="secondary" onClick={() => { setModalType("offer"); setIsModalOpen(true); }}><FileBadge className="w-4 h-4" /> Create Offer Letter</Button>
                  <Button size="sm" variant="secondary" onClick={() => { setModalType("interview"); setIsModalOpen(true); }}><Calendar className="w-4 h-4" /> Schedule Interview</Button>
                  <Button size="sm" className="bg-white text-blue-700 hover:bg-blue-50 font-bold" onClick={() => { setModalType("cert"); setIsModalOpen(true); }}>Issue Certificate</Button>
                </div>
              </div>

              {/* HR Overview Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Active Interns", val: "840", icon: Users, color: "text-blue-600" },
                  { label: "Pending Applications", val: "142", icon: UserCheck, color: "text-amber-600" },
                  { label: "Offer Letters Issued", val: "320", icon: FileBadge, color: "text-purple-600" },
                  { label: "Certificates Issued", val: "1,280", icon: FileCheck2, color: "text-emerald-600" },
                ].map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <Card key={i} className="p-4 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-slate-500">{card.label}</p>
                        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">{card.val}</h3>
                      </div>
                      <div className={`p-3 rounded-xl bg-slate-100 dark:bg-slate-800 ${card.color}`}><Icon className="w-5 h-5" /></div>
                    </Card>
                  );
                })}
              </div>

              {/* Applicants Table Preview */}
              <Card className="p-0 overflow-hidden">
                <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">Recent Internship Applicants</h3>
                  <Button size="sm" variant="outline" onClick={() => setActiveTab("applicants")}>View All Applicants</Button>
                </div>
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/50 text-[11px] font-bold text-slate-400 uppercase">
                      <th className="p-3">Applicant Name</th>
                      <th className="p-3">Role Applied</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Interview Schedule</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {applicants.map((a) => (
                      <tr key={a.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="p-3 font-bold text-slate-900 dark:text-white">{a.name}</td>
                        <td className="p-3 text-slate-500">{a.roleApplied}</td>
                        <td className="p-3"><Badge variant={a.status === "Offered" ? "success" : "info"}>{a.status}</Badge></td>
                        <td className="p-3 text-slate-400">{a.interviewDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </div>
          )}

          {/* APPLICANTS VIEW */}
          {activeTab === "applicants" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">Internship Applicants</h1>
                <Button size="sm"><Plus className="w-4 h-4" /> Add Applicant</Button>
              </div>
              <Card className="p-0 overflow-hidden">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/50 text-[11px] font-bold text-slate-400 uppercase">
                      <th className="p-4">Applicant</th>
                      <th className="p-4">Applied Role</th>
                      <th className="p-4">Resume / Portfolio</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {applicants.map((a) => (
                      <tr key={a.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="p-4 font-bold text-slate-900 dark:text-white">{a.name}<p className="text-[11px] text-slate-400">{a.email}</p></td>
                        <td className="p-4">{a.roleApplied}</td>
                        <td className="p-4 text-blue-600 font-semibold">{a.resumeUrl}</td>
                        <td className="p-4"><Badge variant="info">{a.status}</Badge></td>
                        <td className="p-4 text-right"><Button size="sm" variant="outline">Schedule Interview</Button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </div>
          )}

          {/* INTERNS VIEW */}
          {activeTab === "interns" && (
            <div className="space-y-6">
              <h1 className="text-xl font-bold text-slate-900 dark:text-white">Active Interns Directory</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hrInterns.map((i) => (
                  <Card key={i.id} className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">{i.name}</h3>
                      <Badge variant="purple">{i.domain}</Badge>
                    </div>
                    <p className="text-xs text-slate-400">Assigned Mentor: {i.mentor}</p>
                    <div className="flex justify-between text-xs font-semibold pt-2 border-t border-slate-100 dark:border-slate-800">
                      <span>Performance: {i.performanceScore}%</span>
                      <span>Attendance: {i.attendancePct}%</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* OTHER TABS FALLBACK */}
          {activeTab !== "dashboard" && activeTab !== "applicants" && activeTab !== "interns" && (
            <Card className="p-12 text-center space-y-2">
              <Badge variant="purple">HRMS Portal</Badge>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white capitalize">{activeTab} Management Module</h3>
              <p className="text-xs text-slate-400">Enterprise HR module ready for AI LearnX HR managers.</p>
            </Card>
          )}
        </main>
      </div>

      {/* Interactive HR Modals */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={`Create ${modalType.toUpperCase()}`}>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Select Candidate / Intern</label>
            <Input placeholder="Enter Candidate Name or Email" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Details / Position</label>
            <Input placeholder="AI Engineering Intern" />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button onClick={() => setIsModalOpen(false)}>Generate & Send</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
