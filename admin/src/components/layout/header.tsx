"use client";

import React, { useState } from "react";
import { Search, Bell, Command, Plus, ChevronRight, User, Settings, LogOut, CheckCircle2, AlertTriangle } from "lucide-react";
import { Button, Modal, Input } from "@/components/ui/core";
import { cn } from "@/lib/utils";

interface HeaderProps {
  activeTabTitle: string;
  collapsed: boolean;
  onOpenCommandPalette: () => void;
}

export function Header({ activeTabTitle, collapsed, onOpenCommandPalette }: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const mockNotifications = [
    { id: 1, title: "New Certificate Issued", desc: "Certificate #VER-9482 generated for Rahul Sharma", time: "2 min ago", type: "success" },
    { id: 2, title: "Stipend Approval Required", desc: "Internship stipend batch #STP-0826 pending approval", time: "15 min ago", type: "warning" },
    { id: 3, title: "New Blog Drafted", desc: "Getting Started with AI Agents by Tech Lead", time: "1 hour ago", type: "info" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-all duration-300 h-16 px-6 flex items-center justify-between",
        collapsed ? "pl-24" : "pl-72"
      )}
    >
      {/* Breadcrumb & Title */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-slate-400">Admin</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
        <h2 className="text-sm font-bold text-slate-900 dark:text-white capitalize">{activeTabTitle}</h2>
      </div>

      {/* Center Global Search Trigger (Command + K) */}
      <div className="flex-1 max-w-md mx-6 hidden md:block">
        <button
          onClick={onOpenCommandPalette}
          className="w-full flex items-center justify-between px-3.5 py-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-400 hover:border-blue-400 text-xs transition-colors cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <Search className="w-4 h-4 text-slate-400" />
            Search students, courses, certificates...
          </span>
          <kbd className="inline-flex items-center gap-0.5 px-2 py-0.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded text-[10px] font-mono text-slate-500 shadow-2xs">
            <Command className="w-3 h-3" /> K
          </kbd>
        </button>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        {/* Quick Action Button */}
        <Button size="sm" className="hidden sm:inline-flex">
          <Plus className="w-4 h-4" /> Quick Action
        </Button>

        {/* Notifications Popover Trigger */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowUserDropdown(false);
            }}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 relative transition-colors"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-600 rounded-full ring-2 ring-white dark:ring-slate-900" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-4 z-50 animate-in fade-in zoom-in-95">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Notifications</h4>
                <button className="text-[11px] font-semibold text-blue-600 hover:underline">Mark all read</button>
              </div>
              <div className="space-y-3">
                {mockNotifications.map((n) => (
                  <div key={n.id} className="flex gap-2.5 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors">
                    {n.type === "success" ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{n.title}</p>
                      <p className="text-[11px] text-slate-500 leading-tight mt-0.5">{n.desc}</p>
                      <span className="text-[10px] text-slate-400 mt-1 block">{n.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setShowUserDropdown(!showUserDropdown);
              setShowNotifications(false);
            }}
            className="flex items-center gap-2 p-1 pl-1.5 pr-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
              AD
            </div>
            <div className="text-left hidden lg:block">
              <p className="text-xs font-bold text-slate-900 dark:text-white leading-none">Super Admin</p>
              <p className="text-[10px] text-slate-400 leading-none mt-0.5">admin@ailearnx.com</p>
            </div>
          </button>

          {showUserDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-2 z-50">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
                <User className="w-4 h-4 text-slate-400" /> Account Profile
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
                <Settings className="w-4 h-4 text-slate-400" /> System Preferences
              </button>
              <div className="my-1 border-t border-slate-100 dark:border-slate-800" />
              <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-xl transition-colors font-medium">
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
