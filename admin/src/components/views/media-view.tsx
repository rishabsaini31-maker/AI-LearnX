"use client";

import React, { useState } from "react";
import { FolderArchive, UploadCloud, Search, Image as ImageIcon, Video, FileText, FolderPlus, Grid, List } from "lucide-react";
import { Card, Button, Input, Badge } from "@/components/ui/core";

export function MediaView() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const mediaItems = [
    { name: "course-thumbnail-ai.png", type: "Image", size: "2.4 MB", date: "2026-08-01", url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400" },
    { name: "demo-video-nextjs.mp4", type: "Video", size: "45.1 MB", date: "2026-07-28", url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400" },
    { name: "curriculum-syllabus-2026.pdf", type: "PDF", size: "1.2 MB", date: "2026-07-20", url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400" },
    { name: "student-project-assets.zip", type: "ZIP", size: "18.6 MB", date: "2026-07-15", url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Media Library</h1>
          <p className="text-xs text-slate-400">Manage assets, images, videos, course materials & PDFs.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline"><FolderPlus className="w-4 h-4" /> New Folder</Button>
          <Button size="sm"><UploadCloud className="w-4 h-4" /> Upload Files</Button>
        </div>
      </div>

      {/* Drag & Drop Upload Zone */}
      <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center bg-slate-50/50 dark:bg-slate-900/30 hover:border-blue-400 transition-colors">
        <UploadCloud className="w-10 h-10 text-slate-400 mx-auto mb-2" />
        <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Drag and drop images, videos or documents here</p>
        <p className="text-[11px] text-slate-400 mt-1">Supports PNG, JPG, MP4, PDF, ZIP up to 100MB</p>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {mediaItems.map((item, idx) => (
          <Card key={idx} className="p-3 group hover:border-blue-400">
            <div className="h-32 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden mb-2 relative">
              <img src={item.url} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute top-2 right-2">
                <Badge variant="purple">{item.type}</Badge>
              </div>
            </div>
            <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{item.name}</p>
            <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1">
              <span>{item.size}</span>
              <span>{item.date}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
