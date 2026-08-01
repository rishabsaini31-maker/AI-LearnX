'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Building2, Calendar, Award, BookOpen, ArrowRight, Play, Headphones, Quote } from 'lucide-react';
import { Story } from './types';

interface StoryModalProps {
  story: Story | null;
  onClose: () => void;
}

export function StoryModal({ story, onClose }: StoryModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (story) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [story, onClose]);

  if (!story) return null;

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
          className="relative bg-white border border-[#E5E7EB] rounded-3xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10 p-6 sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F8FAFC] border border-[#E5E7EB] text-[#6B7280] hover:text-[#111827] hover:border-[#2563EB] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Media Header */}
          {story.category === 'video' && (
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 mb-6 border border-[#E5E7EB]">
              <iframe
                src={`${story.videoUrl}?autoplay=1`}
                title={story.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          )}

          {story.category === 'audio' && (
            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center shadow-sm">
                  <Headphones className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#111827]">Listen to {story.name}&apos;s Experience</h4>
                  <p className="text-xs text-[#6B7280]">Duration: {story.duration}</p>
                </div>
              </div>
              <audio controls className="w-full">
                <source src={story.audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}

          {story.category === 'written' && (
            <div className="bg-blue-50/50 border border-[#2563EB]/20 rounded-2xl p-6 mb-6 relative">
              <Quote className="w-8 h-8 text-[#2563EB]/30 absolute top-4 right-4" />
              <p className="text-base sm:text-lg text-[#111827] italic leading-relaxed">
                &ldquo;{story.review}&rdquo;
              </p>
            </div>
          )}

          {/* Student Profile Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#2563EB] shadow-sm shrink-0">
                <Image src={story.avatar} alt={story.name} fill sizes="64px" className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#111827]">{story.name}</h3>
                <p className="text-sm font-semibold text-[#2563EB]">{story.role}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Building2 className="w-3.5 h-3.5 text-[#6B7280]" />
                  <span className="text-xs text-[#6B7280] font-medium">{story.company}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 bg-[#F8FAFC] border border-[#E5E7EB] px-3 py-1.5 rounded-full">
              {[...Array(story.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>

          {/* Story Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-4">
              <div className="flex items-center gap-2 text-[#6B7280] mb-1">
                <BookOpen className="w-4 h-4 text-[#2563EB]" />
                <span className="text-xs font-medium">Course Enrolled</span>
              </div>
              <p className="text-sm font-semibold text-[#111827]">{story.course}</p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-4">
              <div className="flex items-center gap-2 text-[#6B7280] mb-1">
                <Award className="w-4 h-4 text-[#2563EB]" />
                <span className="text-xs font-medium">Capstone Project</span>
              </div>
              <p className="text-sm font-semibold text-[#111827]">{story.projectCompleted}</p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-4">
              <div className="flex items-center gap-2 text-[#6B7280] mb-1">
                <Building2 className="w-4 h-4 text-[#2563EB]" />
                <span className="text-xs font-medium">Company Joined</span>
              </div>
              <p className="text-sm font-semibold text-[#111827]">{story.company}</p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-4">
              <div className="flex items-center gap-2 text-[#6B7280] mb-1">
                <Calendar className="w-4 h-4 text-[#2563EB]" />
                <span className="text-xs font-medium">Completion Year</span>
              </div>
              <p className="text-sm font-semibold text-[#111827]">{story.completionYear}</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-[#6B7280]">Ready to build your career?</p>
              <p className="text-sm font-bold text-[#111827]">Start learning with AI LearnX today.</p>
            </div>
            <Link
              href="/signup"
              onClick={onClose}
              className="w-full sm:w-auto bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-6 py-3 rounded-xl inline-flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
