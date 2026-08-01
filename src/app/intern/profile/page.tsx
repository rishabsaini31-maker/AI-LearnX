'use client';

import React from 'react';
import Image from 'next/image';
import { MOCK_INTERN_PROFILE } from '@/components/intern/data';
import { User, Mail, Phone, GraduationCap, Globe, FileText, Upload } from 'lucide-react';

export default function ProfilePage() {
  const profile = MOCK_INTERN_PROFILE;

  return (
    <div className="space-y-6 text-left">
      <div className="bg-[#111827] border border-[#1F2937] p-6 rounded-3xl text-white shadow-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#2563EB]/20 text-[#38BDF8] flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Intern Profile</h2>
            <p className="text-xs text-[#9CA3AF]">Manage your personal information, college credentials, and technical skills</p>
          </div>
        </div>
      </div>

      <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6 shadow-md text-white space-y-6">
        {/* Profile Card Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-6 border-b border-[#1F2937]">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#2563EB] shadow-md shrink-0">
            <Image src={profile.avatar} alt={profile.name} fill sizes="80px" className="object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
            <p className="text-sm font-semibold text-[#38BDF8]">{profile.role}</p>
            <p className="text-xs text-[#9CA3AF] mt-1">{profile.college}</p>
          </div>
          <button className="px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer inline-flex items-center gap-2">
            <Upload className="w-4 h-4" />
            <span>Upload Resume PDF</span>
          </button>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#172033] border border-[#1F2937] p-4 rounded-2xl space-y-1">
            <p className="text-xs text-[#9CA3AF]">Email Address</p>
            <p className="text-sm font-semibold text-white">{profile.email}</p>
          </div>
          <div className="bg-[#172033] border border-[#1F2937] p-4 rounded-2xl space-y-1">
            <p className="text-xs text-[#9CA3AF]">Phone Number</p>
            <p className="text-sm font-semibold text-white">{profile.phone}</p>
          </div>
          <div className="bg-[#172033] border border-[#1F2937] p-4 rounded-2xl space-y-1">
            <p className="text-xs text-[#9CA3AF]">Internship Batch</p>
            <p className="text-sm font-semibold text-white">{profile.batch}</p>
          </div>
          <div className="bg-[#172033] border border-[#1F2937] p-4 rounded-2xl space-y-1">
            <p className="text-xs text-[#9CA3AF]">Domain Track</p>
            <p className="text-sm font-semibold text-white">{profile.domain}</p>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h4 className="font-bold text-sm text-white mb-3">Technical Skills</h4>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill, i) => (
              <span key={i} className="bg-[#172033] border border-[#1F2937] text-[#38BDF8] text-xs font-semibold px-3 py-1.5 rounded-xl">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
