"use client";

import React, { useState } from "react";
import { FileText, Plus, Search, Eye, Edit3, Trash2, CheckCircle2, Clock } from "lucide-react";
import { Card, Button, Input, Badge, Modal } from "@/components/ui/core";
import { Blog } from "@/types";

export function BlogsView() {
  const [blogs, setBlogs] = useState<Blog[]>([
    { id: "BLG-01", title: "Building Enterprise-Grade AI Agents with LLMs", slug: "building-enterprise-ai-agents", category: "Artificial Intelligence", author: "Dr. Vikram Seth", status: "Published", publishDate: "2026-08-02", readingTime: "6 min read", views: 4280 },
    { id: "BLG-02", title: "Why Next.js 16 App Router is the Future of Web Apps", slug: "nextjs-16-app-router-future", category: "Web Development", author: "Rohan Verma", status: "Published", publishDate: "2026-07-29", readingTime: "4 min read", views: 3120 },
    { id: "BLG-03", title: "MLOps Best Practices for High Performance Pipelines", slug: "mlops-best-practices-2026", category: "Data Science", author: "Neha Gupta", status: "Draft", publishDate: "2026-08-05", readingTime: "8 min read", views: 0 },
  ]);

  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const handlePublish = () => {
    if (!newTitle) return;
    const newBlog: Blog = {
      id: `BLG-0${blogs.length + 1}`,
      title: newTitle,
      slug: newTitle.toLowerCase().replace(/\s+/g, "-"),
      category: "Technology",
      author: "Super Admin",
      status: "Published",
      publishDate: new Date().toISOString().split("T")[0],
      readingTime: "5 min read",
      views: 0,
    };
    setBlogs([newBlog, ...blogs]);
    setNewTitle("");
    setNewContent("");
    setIsEditorOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Blog CMS & Article Editor</h1>
          <p className="text-xs text-slate-400">Rich Markdown editor, SEO fields, reading time & publishing status.</p>
        </div>
        <Button size="sm" onClick={() => setIsEditorOpen(true)}>
          <Plus className="w-4 h-4" /> Create Blog Post
        </Button>
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="p-4">Post Title</th>
                <th className="p-4">Category</th>
                <th className="p-4">Author</th>
                <th className="p-4">Reading Time</th>
                <th className="p-4">Views</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
              {blogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="p-4 font-bold text-slate-900 dark:text-white">{blog.title}</td>
                  <td className="p-4"><Badge variant="info">{blog.category}</Badge></td>
                  <td className="p-4 text-slate-500">{blog.author}</td>
                  <td className="p-4 text-slate-500">{blog.readingTime}</td>
                  <td className="p-4 font-semibold text-slate-700 dark:text-slate-300">{blog.views.toLocaleString()}</td>
                  <td className="p-4">
                    <Badge variant={blog.status === "Published" ? "success" : "warning"}>{blog.status}</Badge>
                  </td>
                  <td className="p-4 text-right space-x-1">
                    <button className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-slate-800">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Editor Modal */}
      <Modal isOpen={isEditorOpen} onClose={() => setIsEditorOpen(false)} title="Markdown Blog Post Editor">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Post Title</label>
            <Input
              placeholder="e.g. Master Machine Learning Models in 2026"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Article Content (Markdown)</label>
            <textarea
              rows={6}
              placeholder="# Introduction..."
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              className="w-full p-3 text-xs font-mono bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={() => setIsEditorOpen(false)}>Save Draft</Button>
            <Button onClick={handlePublish}>Publish Article</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
