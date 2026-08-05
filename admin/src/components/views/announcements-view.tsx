"use client";

import React, { useState } from "react";
import { Megaphone, Plus, Bell, Users, Clock, AlertCircle, Trash2, Send } from "lucide-react";
import { Card, Button, Input, Modal, Badge } from "@/components/ui/core";
import { Announcement } from "@/types";

export function AnnouncementsView() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([
    {
      id: "ANC-01",
      title: "New AI Internship Batch Commencing",
      description: "Orientation for Batch #08 begins next Monday at 10:00 AM IST. All enrolled interns must join.",
      priority: "High",
      audience: "Interns",
      publishDate: "2026-08-04",
      expiryDate: "2026-08-15",
    },
    {
      id: "ANC-02",
      title: "Platform Maintenance & Next.js 16 Upgrade",
      description: "Scheduled database maintenance this Sunday between 02:00 AM to 04:00 AM IST.",
      priority: "Medium",
      audience: "Everyone",
      publishDate: "2026-08-03",
      expiryDate: "2026-08-10",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Medium" as Announcement["priority"],
    audience: "Everyone" as Announcement["audience"],
  });

  const handleCreateAnnouncement = () => {
    if (!form.title || !form.description) return;
    const newAnc: Announcement = {
      id: `ANC-0${announcements.length + 1}`,
      title: form.title,
      description: form.description,
      priority: form.priority,
      audience: form.audience,
      publishDate: new Date().toISOString().split("T")[0],
      expiryDate: "2026-08-30",
    };
    setAnnouncements([newAnc, ...announcements]);
    setForm({ title: "", description: "", priority: "Medium", audience: "Everyone" });
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Announcement Management</h1>
          <p className="text-xs text-slate-400">Broadcast notifications to Everyone, Students, Mentors or Interns.</p>
        </div>
        <Button size="sm" onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4" /> Create Announcement
        </Button>
      </div>

      <div className="space-y-4">
        {announcements.map((anc) => (
          <Card key={anc.id} className="p-4 hover:border-blue-400">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <Megaphone className="w-5 h-5 text-blue-600 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">{anc.title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={anc.priority === "High" ? "danger" : "warning"}>{anc.priority} Priority</Badge>
                <Badge variant="purple">Audience: {anc.audience}</Badge>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 ml-7">{anc.description}</p>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between ml-7 text-xs text-slate-400">
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Published: {anc.publishDate}</span>
              <button
                onClick={() => setAnnouncements(announcements.filter((a) => a.id !== anc.id))}
                className="p-1 rounded-lg text-slate-400 hover:text-rose-600"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Broadcast Announcement">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Title</label>
            <Input
              placeholder="e.g. New AI Workshop Schedule"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Target Audience</label>
              <select
                value={form.audience}
                onChange={(e) => setForm({ ...form, audience: e.target.value as Announcement["audience"] })}
                className="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl"
              >
                <option value="Everyone">Everyone</option>
                <option value="Students">Students</option>
                <option value="Mentors">Mentors</option>
                <option value="Interns">Interns</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Priority Level</label>
              <select
                value={form.priority}
                onChange={(e) => setForm({ ...form, priority: e.target.value as Announcement["priority"] })}
                className="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Description</label>
            <textarea
              rows={4}
              placeholder="Announcement details..."
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full p-3 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-slate-100 focus:outline-none"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button onClick={handleCreateAnnouncement}><Send className="w-4 h-4" /> Publish Announcement</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
