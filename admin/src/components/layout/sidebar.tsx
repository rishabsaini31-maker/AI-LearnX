"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  BookOpen,
  FolderGit2,
  Tags,
  UserCheck,
  Award,
  FileText,
  Megaphone,
  CheckSquare,
  Trophy,
  DollarSign,
  FileCheck2,
  FolderArchive,
  BarChart3,
  Globe,
  Settings,
  Lock,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  badge?: string;
}

export const navItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "users", label: "User Management", icon: Users, badge: "New" },
  { id: "roles", label: "Roles & Permissions", icon: ShieldCheck },
  { id: "courses", label: "Course Management", icon: BookOpen },
  { id: "projects", label: "Student Projects", icon: FolderGit2 },
  { id: "categories", label: "Categories", icon: Tags },
  { id: "mentors", label: "Mentors", icon: UserCheck },
  { id: "stories", label: "Success Stories", icon: Award },
  { id: "blogs", label: "Blog CMS", icon: FileText },
  { id: "announcements", label: "Announcements", icon: Megaphone },
  { id: "tasks", label: "Internship Tasks", icon: CheckSquare, badge: "Kanban" },
  { id: "leaderboard", label: "Leaderboard", icon: Trophy },
  { id: "stipends", label: "Stipend Wall", icon: DollarSign },
  { id: "certificates", label: "Certificates & LORs", icon: FileCheck2 },
  { id: "media", label: "Media Library", icon: FolderArchive },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "website-cms", label: "Website CMS", icon: Globe },
  { id: "auth", label: "Authentication", icon: Lock },
  { id: "settings", label: "Settings", icon: Settings },
];

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
}

export function Sidebar({ activeTab, setActiveTab, collapsed, setCollapsed }: SidebarProps) {
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 bottom-0 z-40 bg-white dark:bg-slate-900 border-r border-slate-200/80 dark:border-slate-800 transition-all duration-300 flex flex-col shadow-xs",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Brand Header */}
      <div className="h-16 px-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
        {!collapsed && (
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-lg shadow-sm">
              AI
            </div>
            <div>
              <h1 className="font-extrabold text-slate-900 dark:text-white text-base leading-none flex items-center gap-1">
                AI LearnX <Sparkles className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
              </h1>
              <span className="text-[11px] font-medium text-slate-400">Enterprise Admin</span>
            </div>
          </div>
        )}

        {collapsed && (
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-lg shadow-sm mx-auto">
            AI
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors",
            collapsed && "hidden"
          )}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              title={collapsed ? item.label : undefined}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all cursor-pointer group",
                isActive
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100"
              )}
            >
              <Icon className={cn("w-4 h-4 shrink-0 transition-transform group-hover:scale-110", isActive ? "text-white" : "text-slate-500")} />
              {!collapsed && <span className="truncate flex-1 text-left">{item.label}</span>}
              {!collapsed && item.badge && (
                <span
                  className={cn(
                    "px-1.5 py-0.5 rounded-md text-[10px] font-bold uppercase",
                    isActive ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-300"
                  )}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Collapsed Toggle Footer */}
      {collapsed && (
        <div className="p-3 border-t border-slate-100 dark:border-slate-800 flex justify-center">
          <button
            onClick={() => setCollapsed(false)}
            className="p-2 rounded-xl text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </aside>
  );
}
