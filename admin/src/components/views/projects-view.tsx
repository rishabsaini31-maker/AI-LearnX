"use client";

import React, { useState } from "react";
import { FolderGit2, Plus, ExternalLink, GitBranch, Star, Filter, Link2, Image as ImageIcon, Trash2 } from "lucide-react";
import { Card, Button, Input, Badge, Modal } from "@/components/ui/core";
import { Project } from "@/types";

export interface ProjectFull extends Project {
  description: string;
  image: string;
  linkedinUrl?: string;
}

export function ProjectsView() {
  const [projects, setProjects] = useState<ProjectFull[]>([
    {
      id: "PRJ-001",
      title: "Autonomous Customer Support AI Agent",
      category: "Generative AI",
      student: "Aarav Sharma",
      mentor: "Dr. Vikram Seth",
      status: "Featured",
      techStack: ["Python", "LangChain", "OpenAI", "FastAPI"],
      description: "An end-to-end multi-agent pipeline executing automated resolution workflows.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60",
      liveUrl: "https://agent-demo.ailearnx.com",
      githubUrl: "https://github.com/ailearnx/autonomous-agent",
      linkedinUrl: "https://linkedin.com/in/aarav-sharma-ai",
      featured: true,
    },
    {
      id: "PRJ-002",
      title: "Real-time EdTech Analytics Dashboard",
      category: "Fullstack",
      student: "Priya Patel",
      mentor: "Rohan Verma",
      status: "In Progress",
      techStack: ["Next.js 16", "Tailwind CSS v4", "PostgreSQL"],
      description: "Enterprise level analytics platform tracking student progression and certificate metrics.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60",
      liveUrl: "https://dashboard-demo.ailearnx.com",
      githubUrl: "https://github.com/ailearnx/edtech-analytics",
      linkedinUrl: "https://linkedin.com/in/priya-patel-ml",
      featured: false,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    category: "Generative AI",
    student: "",
    mentor: "Dr. Vikram Seth",
    description: "",
    image: "",
    liveUrl: "",
    githubUrl: "",
    linkedinUrl: "",
    techStack: "Python, Next.js, LangChain",
  });

  const handleAddProject = () => {
    if (!form.title || !form.student) return;
    const newProject: ProjectFull = {
      id: `PRJ-00${projects.length + 1}`,
      title: form.title,
      category: form.category,
      student: form.student,
      mentor: form.mentor,
      status: "In Progress",
      techStack: form.techStack ? form.techStack.split(",").map((s) => s.trim()) : ["AI/ML"],
      description: form.description || "Student showcase project.",
      image: form.image || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60",
      liveUrl: form.liveUrl,
      githubUrl: form.githubUrl,
      linkedinUrl: form.linkedinUrl,
      featured: true,
    };
    setProjects([newProject, ...projects]);
    setForm({ title: "", category: "Generative AI", student: "", mentor: "Dr. Vikram Seth", description: "", image: "", liveUrl: "", githubUrl: "", linkedinUrl: "", techStack: "Python, Next.js, LangChain" });
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Student Projects Manager</h1>
          <p className="text-xs text-slate-400">Manage student submissions, live demos, GitHub repositories & LinkedIn profiles.</p>
        </div>
        <Button size="sm" onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4" /> Add Student Project
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="p-0 overflow-hidden flex flex-col justify-between hover:border-blue-400">
            <div>
              <div className="h-36 bg-slate-100 dark:bg-slate-800 overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2">
                  <Badge variant={project.status === "Featured" ? "purple" : "warning"}>{project.status}</Badge>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{project.category}</span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">{project.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-2">{project.description}</p>

                <div className="pt-2 text-xs text-slate-400 space-y-0.5 border-t border-slate-100 dark:border-slate-800">
                  <p>Student: <span className="font-semibold text-slate-700 dark:text-slate-200">{project.student}</span></p>
                  <p>Mentor: <span className="font-semibold text-slate-700 dark:text-slate-200">{project.mentor}</span></p>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-slate-200">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200">
                    <GitBranch className="w-4 h-4" />
                  </a>
                )}
                {project.linkedinUrl && (
                  <a href={project.linkedinUrl} target="_blank" className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-slate-200">
                    <Link2 className="w-4 h-4" />
                  </a>
                )}
              </div>
              <button
                onClick={() => setProjects(projects.filter((p) => p.id !== project.id))}
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </Card>
        ))}
      </div>

      {/* Add Project Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Student Project & Showcase">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Project Title</label>
            <Input
              placeholder="e.g. Autonomous AI Customer Support Agent"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Student Name</label>
              <Input
                placeholder="e.g. Aarav Sharma"
                value={form.student}
                onChange={(e) => setForm({ ...form, student: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Assigned Mentor</label>
              <Input
                placeholder="e.g. Dr. Vikram Seth"
                value={form.mentor}
                onChange={(e) => setForm({ ...form, mentor: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Description</label>
            <textarea
              rows={3}
              placeholder="Detailed description of the project features..."
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full p-3 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-slate-100 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Project Thumbnail / Image URL</label>
            <Input
              placeholder="https://images.unsplash.com/..."
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Live URL</label>
              <Input
                placeholder="https://demo.com"
                value={form.liveUrl}
                onChange={(e) => setForm({ ...form, liveUrl: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">GitHub Repo URL</label>
              <Input
                placeholder="https://github.com/..."
                value={form.githubUrl}
                onChange={(e) => setForm({ ...form, githubUrl: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">LinkedIn Profile Link</label>
              <Input
                placeholder="https://linkedin.com/in/..."
                value={form.linkedinUrl}
                onChange={(e) => setForm({ ...form, linkedinUrl: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Tech Stack (comma separated)</label>
            <Input
              placeholder="Python, LangChain, Next.js, FastAPI"
              value={form.techStack}
              onChange={(e) => setForm({ ...form, techStack: e.target.value })}
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button onClick={handleAddProject}>Add Project</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
