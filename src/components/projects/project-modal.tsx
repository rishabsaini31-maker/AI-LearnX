'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ShieldCheck, Award, Clock, Users, ArrowRight, Play, Code2, GraduationCap } from 'lucide-react';
import { Project } from '@/data/projects-data';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative bg-white border border-[#E5E7EB] rounded-3xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10 p-6 sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F8FAFC] border border-[#E5E7EB] text-[#6B7280] hover:text-[#111827] hover:border-[#2563EB] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Media Header */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 mb-6 border border-[#E5E7EB]">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <a
                href={project.demoUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white text-[#2563EB] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <Play className="w-6 h-6 fill-current ml-1" />
              </a>
            </div>
            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-md">
              Live Demo Preview
            </div>
          </div>

          {/* Title & Metadata Header */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-blue-50 text-[#2563EB] border border-[#2563EB]/20 text-xs font-bold px-3 py-1 rounded-full">
                {project.category}
              </span>
              <span className="bg-[#F8FAFC] text-[#111827] border border-[#E5E7EB] text-xs font-bold px-3 py-1 rounded-full">
                {project.difficulty}
              </span>
              <span className="bg-emerald-50 text-emerald-600 border border-emerald-200 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Clock className="w-3 h-3" /> {project.duration}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mb-2">{project.title}</h2>
            <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">{project.description}</p>
          </div>

          {/* Mentor & Outcomes Info Banner */}
          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-4 sm:p-5 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Mentor */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#2563EB] shrink-0">
                <Image src={project.mentor.avatar} alt={project.mentor.name} fill sizes="48px" className="object-cover" />
              </div>
              <div>
                <p className="text-xs text-[#6B7280] font-medium">Lead Mentor</p>
                <h4 className="font-bold text-sm text-[#111827]">{project.mentor.name}</h4>
                <p className="text-xs text-[#2563EB] font-medium">{project.mentor.role}</p>
              </div>
            </div>

            {/* Eligibilities */}
            <div className="space-y-1.5 justify-center flex flex-col">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <CheckCircle className="w-4 h-4" /> Certificate of Completion Eligible
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#2563EB]">
                <ShieldCheck className="w-4 h-4" /> Stipend & Internship Pathway Included
              </div>
            </div>
          </div>

          {/* Tech Stack List */}
          <div className="mb-6">
            <h4 className="font-bold text-sm text-[#111827] uppercase tracking-wider mb-3">Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-white border border-[#E5E7EB] text-[#111827] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Learning Outcomes */}
          <div className="mb-8">
            <h4 className="font-bold text-sm text-[#111827] uppercase tracking-wider mb-3">Learning Outcomes</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                'Design microservices architecture & RESTful APIs',
                'Implement real-time WebSocket state management',
                'Deploy to AWS cloud infrastructure with Docker',
                '1-on-1 code reviews with Senior Lead Mentors',
              ].map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#6B7280]">
                  <CheckCircle className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-[#6B7280]">Start building this project now</p>
              <p className="text-sm font-bold text-[#111827]">Get mentor support & stipend eligibility</p>
            </div>

            <Link
              href="/signup"
              onClick={onClose}
              className="w-full sm:w-auto bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-6 py-3 rounded-xl inline-flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
