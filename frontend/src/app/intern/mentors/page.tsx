'use client';

import React from 'react';
import Image from 'next/image';
import { GraduationCap, MessageCircle, Mail } from 'lucide-react';

const MENTORS = [
  {
    name: 'Girish',
    role: 'Lead Full Stack & Web Architecture Mentor',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    email: 'girish.mentor@ailearnx.com',
    whatsapp: '+919876543210',
    status: 'Available Mon–Fri, 10 AM–6 PM',
  },
  {
    name: 'Arshad N R',
    role: 'Lead Security & Cloud Architecture Mentor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    email: 'arshad.mentor@ailearnx.com',
    whatsapp: '+919876543211',
    status: 'Available Mon–Fri, 10 AM–6 PM',
  },
];

export default function MentorsPage() {
  return (
    <div className="space-y-6 text-left">
      <div className="bg-[#111827] border border-[#1F2937] p-6 rounded-3xl text-white shadow-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#2563EB]/20 text-[#38BDF8] flex items-center justify-center">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Assigned Mentors Directory</h2>
            <p className="text-xs text-[#9CA3AF]">Connect with lead mentors for code reviews & 1:1 project guidance</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MENTORS.map((m, i) => (
          <div key={i} className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6 shadow-md text-white space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#2563EB] shrink-0">
                <Image src={m.avatar} alt={m.name} fill sizes="64px" className="object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">{m.name}</h3>
                <p className="text-xs text-[#38BDF8] font-semibold">{m.role}</p>
                <p className="text-[11px] text-[#9CA3AF] mt-1">{m.status}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-[#1F2937]">
              <a
                href={`https://wa.me/${m.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={`mailto:${m.email}`}
                className="bg-[#172033] hover:bg-[#1F2937] border border-[#1F2937] text-[#38BDF8] text-xs font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
