"use client";

import React, { useState } from "react";
import { Search, BookOpen, Users, FolderGit2, FileCheck2, FileText, ArrowRight } from "lucide-react";
import { Modal, Input } from "@/components/ui/core";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tabId: string) => void;
}

export function CommandPalette({ isOpen, onClose, onSelectTab }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  const searchItems = [
    { label: "View All Students & Interns", category: "Users", tabId: "users", icon: Users },
    { label: "Manage Tech Courses & Curriculum", category: "Courses", tabId: "courses", icon: BookOpen },
    { label: "Inspect Live Student Projects", category: "Projects", tabId: "projects", icon: FolderGit2 },
    { label: "Verify & Generate Certificates", category: "Certificates", tabId: "certificates", icon: FileCheck2 },
    { label: "Manage Blog Posts & Drafts", category: "Blog CMS", tabId: "blogs", icon: FileText },
  ];

  const filtered = searchItems.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Global Search Palette">
      <div className="space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <Input
            autoFocus
            placeholder="Type a command or search query..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        <div className="space-y-1 max-h-60 overflow-y-auto">
          {filtered.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                onClick={() => {
                  onSelectTab(item.tabId);
                  onClose();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors text-left group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-600 group-hover:text-white rounded-lg transition-colors text-slate-600 dark:text-slate-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{item.label}</p>
                    <span className="text-[10px] text-slate-400">{item.category}</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            );
          })}
          {filtered.length === 0 && (
            <p className="text-xs text-slate-400 text-center py-6">No search results match "{query}"</p>
          )}
        </div>
      </div>
    </Modal>
  );
}
