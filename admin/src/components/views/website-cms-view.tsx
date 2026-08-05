"use client";

import React, { useState } from "react";
import { Globe, Save, Upload, Plus, Trash2, Eye } from "lucide-react";
import { Card, Button, Input, Badge } from "@/components/ui/core";

export function WebsiteCmsView() {
  const [heroTitle, setHeroTitle] = useState("Industry-Level AI Training, Internships & Real-world Projects");
  const [heroSubtitle, setHeroSubtitle] = useState("Empowering the next generation of AI engineers with hands-on learning.");

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Public Website CMS Manager</h1>
          <p className="text-xs text-slate-400">Edit every dynamic section of the AI LearnX public website.</p>
        </div>
        <Button size="sm">
          <Save className="w-4 h-4" /> Save Website Changes
        </Button>
      </div>

      <div className="space-y-6">
        {/* Hero Section Config */}
        <Card className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
            Hero Section Settings
          </h3>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Hero Title Heading</label>
            <Input value={heroTitle} onChange={(e) => setHeroTitle(e.target.value)} />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Hero Subtitle Paragraph</label>
            <textarea
              rows={3}
              value={heroSubtitle}
              onChange={(e) => setHeroSubtitle(e.target.value)}
              className="w-full p-3 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </Card>

        {/* Impact Statistics */}
        <Card className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
            Impact Statistics Bar
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Students Trained</label>
              <Input defaultValue="14,820+" />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Projects Built</label>
              <Input defaultValue="590+" />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Internships Granted</label>
              <Input defaultValue="3,410+" />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Certificates Issued</label>
              <Input defaultValue="2,840+" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
