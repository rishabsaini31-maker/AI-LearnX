'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Project } from '@/data/projects-data'
import { Users, Clock, Award, Play, ArrowRight, CheckCircle, Sparkles } from 'lucide-react'

interface ProjectCardProps {
  project: Project
  onWatchDemo?: (project: Project) => void
  onStartBuilding?: (project: Project) => void
}

export function ProjectCard({ project, onWatchDemo, onStartBuilding }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Difficulty badge colors
  const getDifficultyBadge = (diff: Project['difficulty']) => {
    switch (diff) {
      case 'Beginner':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200'
      case 'Intermediate':
        return 'bg-blue-50 text-blue-700 border-blue-200'
      case 'Advanced':
        return 'bg-purple-50 text-purple-700 border-purple-200'
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200'
    }
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
    >
      {/* CARD TOP THUMBNAIL & BADGES */}
      <div>
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          
          {/* Overlay Gradient on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
            <span className="bg-white/90 backdrop-blur-md text-gray-900 text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm border border-white/40">
              {project.category}
            </span>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border shadow-sm ${getDifficultyBadge(project.difficulty)}`}>
              {project.difficulty}
            </span>
          </div>

          {/* Optional Stipend Badge */}
          {project.stipend && (
            <div className="absolute bottom-3 left-3 bg-blue-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-md flex items-center gap-1 z-10">
              <Sparkles className="w-3 h-3 text-yellow-300" />
              Stipend: {project.stipend}
            </div>
          )}

          {/* Watch Demo Hover Trigger Button overlay */}
          <button 
            onClick={() => onWatchDemo?.(project)}
            className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-white/90 text-gray-900 shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 z-20 hover:bg-blue-600 hover:text-white"
            title="Watch Demo"
          >
            <Play className="w-5 h-5 ml-0.5 fill-current" />
          </button>
        </div>

        {/* CARD CONTENT BODY */}
        <div className="p-5 text-left space-y-4">
          
          {/* Student Count & Certificate indicator */}
          <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-blue-600" />
              <span>{project.studentsCount.toLocaleString()} Students Enrolled</span>
            </div>
            {project.hasCertificate && (
              <div className="flex items-center gap-1 text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                <Award className="w-3 h-3" />
                <span>Certificate</span>
              </div>
            )}
          </div>

          {/* Project Title & Description */}
          <div>
            <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1 leading-snug">
              {project.title}
            </h3>
            <p className="text-xs text-gray-600 line-clamp-2 mt-1.5 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.techStack.map((tech, i) => (
              <span key={i} className="text-[11px] font-medium bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md border border-gray-200">
                {tech}
              </span>
            ))}
          </div>

          {/* Enrolled Progress Bar (If applicable) */}
          {project.enrolled && typeof project.progress === 'number' && (
            <div className="pt-2 border-t border-gray-100 space-y-1">
              <div className="flex justify-between text-[11px] font-semibold text-gray-700">
                <span className="flex items-center gap-1 text-blue-600">
                  <CheckCircle className="w-3 h-3" /> Enrolled
                </span>
                <span>{project.progress}% Completed</span>
              </div>
              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-blue-600 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${project.progress}%` }} 
                />
              </div>
            </div>
          )}

          {/* Duration & Mentor Info */}
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src={project.mentor.avatar} 
                alt={project.mentor.name}
                className="w-7 h-7 rounded-full object-cover border border-gray-200"
              />
              <div className="text-left">
                <p className="text-[11px] font-bold text-gray-900 leading-none">{project.mentor.name}</p>
                <p className="text-[10px] text-gray-500 leading-none mt-0.5">{project.mentor.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-gray-600 bg-gray-50 px-2 py-1 rounded-md border border-gray-200">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              <span>{project.duration}</span>
            </div>
          </div>

        </div>
      </div>

      {/* CARD BUTTON ACTIONS (Primary & Secondary) */}
      <div className="p-5 pt-0 grid grid-cols-2 gap-2 mt-4">
        <button
          onClick={() => onWatchDemo?.(project)}
          className="w-full py-2.5 px-3 rounded-xl border border-gray-300 text-gray-700 font-semibold text-xs hover:bg-gray-50 hover:border-gray-400 transition-all flex items-center justify-center gap-1.5"
        >
          <Play className="w-3.5 h-3.5" />
          <span>Watch Demo</span>
        </button>

        <button
          onClick={() => onStartBuilding?.(project)}
          className="w-full py-2.5 px-3 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-1.5 group/btn"
        >
          <span>{project.enrolled ? 'Continue' : 'Start Building'}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
        </button>
      </div>

    </motion.div>
  )
}
