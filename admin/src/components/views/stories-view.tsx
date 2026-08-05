"use client";

import React, { useState } from "react";
import { Award, Plus, ExternalLink, Star, Building, User, Trash2 } from "lucide-react";
import { Card, Button, Input, Modal, Badge } from "@/components/ui/core";

export interface Story {
  id: string;
  studentName: string;
  company: string;
  designation: string;
  package: string;
  topic: string;
  testimonial: string;
  link: string;
  photo: string;
  featured: boolean;
}

export function SuccessStoriesView() {
  const [stories, setStories] = useState<Story[]>([
    {
      id: "STR-01",
      studentName: "Aarav Sharma",
      company: "Google Cloud AI",
      designation: "AI Engineer",
      package: "₹24 LPA",
      topic: "Generative AI & LLMOps Training",
      testimonial: "AI LearnX project-based mentorship gave me real-world edge to crack Google AI interview.",
      link: "https://linkedin.com/in/aarav-sharma-ai",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60",
      featured: true,
    },
    {
      id: "STR-02",
      studentName: "Priya Patel",
      company: "Microsoft Azure",
      designation: "ML Systems Architect",
      package: "₹28 LPA",
      topic: "Enterprise MLOps & Next.js",
      testimonial: "The internship letter and verified project portfolio directly showcased my architecture capabilities.",
      link: "https://linkedin.com/in/priya-patel-ml",
      photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=60",
      featured: true,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    studentName: "",
    company: "",
    designation: "",
    package: "",
    topic: "",
    testimonial: "",
    link: "",
    photo: "",
  });

  const handleCreateStory = () => {
    if (!form.studentName || !form.company) return;
    const newStory: Story = {
      id: `STR-0${stories.length + 1}`,
      studentName: form.studentName,
      company: form.company,
      designation: form.designation || "AI Software Engineer",
      package: form.package || "₹18 LPA",
      topic: form.topic || "AI Training & Internship",
      testimonial: form.testimonial || "Great experience working on AI LearnX live projects.",
      link: form.link || "https://linkedin.com",
      photo: form.photo || "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=60",
      featured: true,
    };
    setStories([newStory, ...stories]);
    setForm({ studentName: "", company: "", designation: "", package: "", topic: "", testimonial: "", link: "", photo: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Success Stories & Placements</h1>
          <p className="text-xs text-slate-400">Upload testimonials, career placement links, photos & package details.</p>
        </div>
        <Button size="sm" onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4" /> Upload Success Story
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map((s) => (
          <Card key={s.id} className="p-4 flex flex-col justify-between hover:border-blue-400">
            <div className="flex gap-4">
              <img src={s.photo} alt={s.studentName} className="w-16 h-16 rounded-2xl object-cover shrink-0" />
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">{s.studentName}</h3>
                  <Badge variant="purple">{s.package}</Badge>
                </div>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                  <Building className="w-3.5 h-3.5" /> {s.designation} at {s.company}
                </p>
                <p className="text-[11px] font-medium text-slate-500">Topic: {s.topic}</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 italic mt-2">"{s.testimonial}"</p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <a href={s.link} target="_blank" className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-semibold">
                LinkedIn Profile <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setStories(stories.filter((item) => item.id !== s.id))}
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </Card>
        ))}
      </div>

      {/* Upload Success Story Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Upload Success Story">
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Student Name</label>
              <Input
                placeholder="e.g. Rahul Sharma"
                value={form.studentName}
                onChange={(e) => setForm({ ...form, studentName: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Company Name</label>
              <Input
                placeholder="e.g. Google / Microsoft"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Designation</label>
              <Input
                placeholder="e.g. AI Engineer"
                value={form.designation}
                onChange={(e) => setForm({ ...form, designation: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Salary Package</label>
              <Input
                placeholder="e.g. ₹22 LPA"
                value={form.package}
                onChange={(e) => setForm({ ...form, package: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Topic / Specialized Domain</label>
            <Input
              placeholder="e.g. LLM Fine-Tuning & Multi-Agent Architecture"
              value={form.topic}
              onChange={(e) => setForm({ ...form, topic: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">LinkedIn / Media Link</label>
            <Input
              placeholder="https://linkedin.com/in/username"
              value={form.link}
              onChange={(e) => setForm({ ...form, link: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Photo Image URL</label>
            <Input
              placeholder="https://images.unsplash.com/..."
              value={form.photo}
              onChange={(e) => setForm({ ...form, photo: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Student Testimonial</label>
            <textarea
              rows={3}
              placeholder="Write the student's review..."
              value={form.testimonial}
              onChange={(e) => setForm({ ...form, testimonial: e.target.value })}
              className="w-full p-3 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-slate-100 focus:outline-none"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button onClick={handleCreateStory}>Upload Story</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
