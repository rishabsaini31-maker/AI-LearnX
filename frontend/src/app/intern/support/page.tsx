'use client';

import React from 'react';
import { HelpCircle, MessageSquare, Mail, Phone, FileText } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="space-y-6 text-left">
      <div className="bg-[#111827] border border-[#1F2937] p-6 rounded-3xl text-white shadow-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#2563EB]/20 text-[#38BDF8] flex items-center justify-center">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Internship Support & Helpdesk</h2>
            <p className="text-xs text-[#9CA3AF]">Get instant assistance with capstone submission, stipend queries, or technical blockers</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6 shadow-md text-white space-y-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-[#38BDF8] flex items-center justify-center">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-white">Live Mentor Chat Support</h3>
          <p className="text-xs text-[#9CA3AF] leading-relaxed">
            Connect directly with your assigned mentor on WhatsApp or schedule a 1:1 screen-sharing session for debugging.
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold rounded-xl transition-colors"
          >
            Open Live Support Chat
          </a>
        </div>

        <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6 shadow-md text-white space-y-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-white">Stipend & Credential Helpdesk</h3>
          <p className="text-xs text-[#9CA3AF] leading-relaxed">
            For questions regarding stipend disbursal, bank account updates, or certificate verification links.
          </p>
          <a
            href="mailto:support@ailearnx.com"
            className="inline-flex items-center justify-center w-full py-2.5 bg-[#172033] hover:bg-[#1F2937] border border-[#1F2937] text-[#38BDF8] text-xs font-semibold rounded-xl transition-colors"
          >
            Email Support Ticket
          </a>
        </div>
      </div>
    </div>
  );
}
