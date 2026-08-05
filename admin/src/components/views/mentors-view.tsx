"use client";

import React, { useState } from "react";
import { UserCheck, Plus, Mail, Key, Phone, Award, BookOpen, Trash2, Edit3 } from "lucide-react";
import { Card, Button, Input, Modal, Badge } from "@/components/ui/core";
import { Mentor } from "@/types";

export function MentorsView() {
  const [mentors, setMentors] = useState<Mentor[]>([
    {
      id: "MNT-01",
      name: "Dr. Vikram Seth",
      designation: "Senior AI Researcher",
      email: "vikram@ailearnx.com",
      phone: "+91 98765 43210",
      skills: ["Generative AI", "PyTorch", "LLMOps"],
      assignedStudentsCount: 42,
      avatar: "VS",
    },
    {
      id: "MNT-02",
      name: "Neha Gupta",
      designation: "Principal MLOps Engineer",
      email: "neha@ailearnx.com",
      phone: "+91 98765 12345",
      skills: ["Kubeflow", "Docker", "Python"],
      assignedStudentsCount: 35,
      avatar: "NG",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    designation: "",
    phone: "",
    skills: "",
  });

  const handleAddMentor = () => {
    if (!formData.name || !formData.email || !formData.password) return;
    const newMentor: Mentor = {
      id: `MNT-0${mentors.length + 1}`,
      name: formData.name,
      designation: formData.designation || "AI Mentor",
      email: formData.email,
      phone: formData.phone || "+91 90000 00000",
      skills: formData.skills ? formData.skills.split(",").map((s) => s.trim()) : ["AI/ML"],
      assignedStudentsCount: 0,
      avatar: formData.name.substring(0, 2).toUpperCase(),
    };
    setMentors([newMentor, ...mentors]);
    setFormData({ name: "", email: "", password: "", designation: "", phone: "", skills: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Mentors Management</h1>
          <p className="text-xs text-slate-400">Add mentors, configure credentials & assign students and projects.</p>
        </div>
        <Button size="sm" onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4" /> Add Mentor Credentials
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <Card key={mentor.id} className="p-4 flex flex-col justify-between hover:border-blue-400">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold text-sm flex items-center justify-center">
                  {mentor.avatar}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">{mentor.name}</h3>
                  <p className="text-xs text-slate-400">{mentor.designation}</p>
                </div>
              </div>

              <div className="space-y-1 text-xs text-slate-500 mb-3">
                <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-slate-400" /> {mentor.email}</p>
                <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-slate-400" /> {mentor.phone}</p>
              </div>

              <div className="flex flex-wrap gap-1">
                {mentor.skills.map((skill) => (
                  <Badge key={skill} variant="info">{skill}</Badge>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{mentor.assignedStudentsCount} Mentees</span>
              <div className="flex gap-1">
                <Button size="sm" variant="outline" className="text-xs py-1 px-2">Assign Student</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Add Mentor Modal with Email & Password */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create Mentor Account & Credentials">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
            <Input
              placeholder="e.g. Prof. Rajesh Kumar"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Mentor Email</label>
              <Input
                type="email"
                placeholder="mentor@ailearnx.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Account Password</label>
              <Input
                type="password"
                placeholder="••••••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Designation</label>
              <Input
                placeholder="e.g. Lead AI Architect"
                value={formData.designation}
                onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Phone Number</label>
              <Input
                placeholder="+91 98765 00000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Skills (comma separated)</label>
            <Input
              placeholder="Python, LangChain, Next.js, MLOps"
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button onClick={handleAddMentor}>Create Mentor</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
