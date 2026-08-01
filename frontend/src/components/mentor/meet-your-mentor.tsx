'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Mail, 
  Phone, 
  MessageCircle, 
  ExternalLink,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

interface MentorData {
  id: string;
  name: string;
  role: string;
  skillBadge: string;
  avatar: string;
  email: string;
  phone: string;
  whatsapp: string;
  linkedin: string;
  linkedinDisplay: string;
}

const MENTORS: MentorData[] = [
  {
    id: 'girish',
    name: 'Girish',
    role: 'Lead Mentor',
    skillBadge: 'Full Stack Web Development',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    email: 'girish.mentor@ailearnx.com',
    phone: '+91 98765 43210',
    whatsapp: '+919876543210',
    linkedin: 'https://linkedin.com/in/girish-lead-mentor',
    linkedinDisplay: 'linkedin.com/in/girish-mentor'
  },
  {
    id: 'arshad',
    name: 'Arshad N R',
    role: 'Lead Security & Cloud Mentor',
    skillBadge: 'Cyber Security & Android OS',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    email: 'arshad.mentor@ailearnx.com',
    phone: '+91 98765 43211',
    whatsapp: '+919876543211',
    linkedin: 'https://linkedin.com/in/arshad-security-mentor',
    linkedinDisplay: 'linkedin.com/in/arshad-mentor'
  }
];

export function MeetYourMentorSection() {
  const [selectedMentor, setSelectedMentor] = useState<MentorData>(MENTORS[0]);

  return (
    <section className="w-full bg-[#F8FAFC] py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            Your Learning <span className="text-[#2563EB]">Mentors</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Connect with expert mentors who guide your journey and help you master new skills.
          </p>
        </motion.div>

        {/* Mentor Selection Tabs (If multiple mentors exist) */}
        {MENTORS.length > 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex justify-center gap-3 mb-8"
          >
            {MENTORS.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedMentor(m)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedMentor.id === m.id
                    ? 'bg-[#2563EB] text-white shadow-sm'
                    : 'bg-white text-[#6B7280] border border-[#E5E7EB] hover:border-[#2563EB] hover:text-[#2563EB]'
                }`}
              >
                {m.name} ({m.role})
              </button>
            ))}
          </motion.div>
        )}

        {/* Availability Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex justify-center mb-10"
        >
          <div className="bg-white border border-[#2563EB] text-[#2563EB] rounded-full px-4 py-1.5 inline-flex items-center gap-2 text-xs sm:text-sm font-medium shadow-xs">
            <Clock className="w-4 h-4 text-[#2563EB] shrink-0" />
            <span>Available Mon–Fri, 10 AM–6 PM • 3h Response Time</span>
          </div>
        </motion.div>

        {/* Main Mentor Card */}
        <motion.div 
          key={selectedMentor.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto bg-white rounded-[20px] border border-[#E5E7EB] shadow-sm p-6 sm:p-8 md:p-10"
        >
          {/* Profile Section */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#2563EB] shadow-sm shadow-[#2563EB]/20 mb-4">
              <Image 
                src={selectedMentor.avatar} 
                alt={selectedMentor.name} 
                fill 
                sizes="(max-width: 640px) 96px, 112px"
                className="object-cover"
                priority
              />
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-[#111827]">
              {selectedMentor.name}
            </h3>
            
            <p className="text-sm font-medium text-[#6B7280] mt-0.5">
              {selectedMentor.role}
            </p>
            
            <div className="mt-3">
              <span className="inline-block border border-[#2563EB] text-[#2563EB] bg-blue-50/40 text-xs font-semibold px-4 py-1.5 rounded-full">
                {selectedMentor.skillBadge}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-[#E5E7EB]" />

          {/* Contact Information Rows */}
          <div className="space-y-3">
            {/* Email Row */}
            <a 
              href={`mailto:${selectedMentor.email}`}
              className="bg-white border border-[#E5E7EB] rounded-xl p-3.5 sm:p-4 flex items-center justify-between gap-3 hover:border-[#2563EB] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-blue-50/60 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB]/10 transition-colors">
                  <Mail className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-xs font-medium text-[#6B7280]">Email</p>
                  <p className="text-sm font-semibold text-[#111827] truncate">{selectedMentor.email}</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#6B7280] group-hover:text-[#2563EB] transition-colors shrink-0" />
            </a>

            {/* Phone Row */}
            <a 
              href={`tel:${selectedMentor.phone.replace(/\s+/g, '')}`}
              className="bg-white border border-[#E5E7EB] rounded-xl p-3.5 sm:p-4 flex items-center justify-between gap-3 hover:border-[#2563EB] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-blue-50/60 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB]/10 transition-colors">
                  <Phone className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-xs font-medium text-[#6B7280]">Phone</p>
                  <p className="text-sm font-semibold text-[#111827] truncate">{selectedMentor.phone}</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#6B7280] group-hover:text-[#2563EB] transition-colors shrink-0" />
            </a>

            {/* WhatsApp Row */}
            <a 
              href={`https://wa.me/${selectedMentor.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-[#E5E7EB] rounded-xl p-3.5 sm:p-4 flex items-center justify-between gap-3 hover:border-[#2563EB] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-blue-50/60 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB]/10 transition-colors">
                  <MessageCircle className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-xs font-medium text-[#6B7280]">WhatsApp</p>
                  <p className="text-sm font-semibold text-[#111827] truncate">{selectedMentor.phone}</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#6B7280] group-hover:text-[#2563EB] transition-colors shrink-0" />
            </a>

            {/* LinkedIn Row */}
            <a 
              href={selectedMentor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-[#E5E7EB] rounded-xl p-3.5 sm:p-4 flex items-center justify-between gap-3 hover:border-[#2563EB] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-blue-50/60 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB]/10 transition-colors">
                  <svg className="w-5 h-5 text-[#2563EB] fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z" />
                  </svg>
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-xs font-medium text-[#6B7280]">LinkedIn</p>
                  <p className="text-sm font-semibold text-[#111827] truncate">{selectedMentor.linkedinDisplay}</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#6B7280] group-hover:text-[#2563EB] transition-colors shrink-0" />
            </a>
          </div>

          {/* WhatsApp Action Button */}
          <a
            href={`https://wa.me/${selectedMentor.whatsapp}?text=Hi%20${encodeURIComponent(selectedMentor.name)},%20I%20need%20mentorship%20guidance.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer mt-6"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
