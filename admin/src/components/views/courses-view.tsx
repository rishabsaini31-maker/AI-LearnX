"use client";

import React, { useState } from "react";
import { Plus, Search, BookOpen, Clock, BarChart, CheckCircle2, Globe, Eye, Edit3, Trash2, Video, Link as LinkIcon, Upload } from "lucide-react";
import { Card, Button, Input, Badge, Modal } from "@/components/ui/core";
import { Course } from "@/types";

export function CoursesView() {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: "CRS-101",
      title: "AI Agent Development Masterclass",
      slug: "ai-agent-development",
      category: "Artificial Intelligence",
      instructor: "Dr. Vikram Seth",
      price: 14999,
      discountPrice: 9999,
      duration: "8 Weeks",
      difficulty: "Advanced",
      status: "Published",
      studentsCount: 1420,
      thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: "CRS-102",
      title: "Fullstack Next.js 16 Enterprise Architecture",
      slug: "fullstack-nextjs-enterprise",
      category: "Web Development",
      instructor: "Rohan Verma",
      price: 12999,
      discountPrice: 7999,
      duration: "6 Weeks",
      difficulty: "Intermediate",
      status: "Published",
      studentsCount: 2150,
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    category: "AI & Software",
    instructor: "Dr. Vikram Seth",
    price: "9999",
    discountPrice: "4999",
    duration: "4 Weeks",
    videoOption: "url" as "url" | "file",
    videoUrl: "",
    thumbnailUrl: "",
  });

  const handleAddCourse = () => {
    if (!form.title) return;
    const item: Course = {
      id: `CRS-10${courses.length + 1}`,
      title: form.title,
      slug: form.title.toLowerCase().replace(/\s+/g, "-"),
      category: form.category,
      instructor: form.instructor,
      price: Number(form.price) || 9999,
      discountPrice: Number(form.discountPrice) || 4999,
      duration: form.duration,
      difficulty: "Intermediate",
      status: "Published",
      studentsCount: 0,
      thumbnail: form.thumbnailUrl || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60",
    };
    setCourses([item, ...courses]);
    setForm({ title: "", category: "AI & Software", instructor: "Dr. Vikram Seth", price: "9999", discountPrice: "4999", duration: "4 Weeks", videoOption: "url", videoUrl: "", thumbnailUrl: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Course Management</h1>
          <p className="text-xs text-slate-400">Curriculum builder, promo videos (URL / Upload), pricing & publishing.</p>
        </div>
        <Button size="sm" onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4" /> Create Course
        </Button>
      </div>

      {/* Grid of Courses */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="p-0 overflow-hidden group flex flex-col justify-between hover:border-blue-400">
            <div>
              <div className="relative h-40 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-3 right-3">
                  <Badge variant={course.status === "Published" ? "success" : "warning"}>{course.status}</Badge>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{course.category}</span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">{course.title}</h3>
                <p className="text-xs text-slate-400">Instructor: {course.instructor}</p>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100 dark:border-slate-800 text-slate-500">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {course.duration}</span>
                  <span className="font-bold text-slate-900 dark:text-white">{course.studentsCount} Students</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-sm font-extrabold text-slate-900 dark:text-white">₹{course.discountPrice}</span>
                <span className="text-xs text-slate-400 line-through ml-1.5">₹{course.price}</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setCourses(courses.filter((c) => c.id !== course.id))}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal with Video Upload or Video URL option */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create Course & Upload Media">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Course Title</label>
            <Input
              placeholder="e.g. LLM Fine-Tuning & Multi-Agent Architecture"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Category</label>
              <Input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Instructor</label>
              <Input value={form.instructor} onChange={(e) => setForm({ ...form, instructor: e.target.value })} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Original Price (₹)</label>
              <Input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Discount Price (₹)</label>
              <Input value={form.discountPrice} onChange={(e) => setForm({ ...form, discountPrice: e.target.value })} />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Thumbnail Image URL</label>
            <Input
              placeholder="https://images.unsplash.com/..."
              value={form.thumbnailUrl}
              onChange={(e) => setForm({ ...form, thumbnailUrl: e.target.value })}
            />
          </div>

          {/* Video Promo Option */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Promo Video Option</label>
            <div className="flex items-center gap-4 mb-2 text-xs">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="videoOpt"
                  checked={form.videoOption === "url"}
                  onChange={() => setForm({ ...form, videoOption: "url" })}
                />
                <LinkIcon className="w-3.5 h-3.5 text-blue-600" /> Video URL (YouTube / Vimeo / S3)
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="videoOpt"
                  checked={form.videoOption === "file"}
                  onChange={() => setForm({ ...form, videoOption: "file" })}
                />
                <Upload className="w-3.5 h-3.5 text-blue-600" /> Upload Video File (.mp4)
              </label>
            </div>

            {form.videoOption === "url" ? (
              <Input
                placeholder="https://youtube.com/watch?v=..."
                value={form.videoUrl}
                onChange={(e) => setForm({ ...form, videoUrl: e.target.value })}
              />
            ) : (
              <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-4 text-center bg-slate-50 dark:bg-slate-900">
                <Video className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Click to upload .MP4 promo video</p>
                <p className="text-[10px] text-slate-400">Max size 200MB</p>
              </div>
            )}
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button onClick={handleAddCourse}>Publish Course</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
