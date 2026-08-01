'use client';

import React from 'react';
import Image from 'next/image';
import { MOCK_CERTIFICATES } from '@/components/intern/data';
import { Award, Download, ExternalLink, ShieldCheck } from 'lucide-react';

export default function CertificatesPage() {
  return (
    <div className="space-y-6 text-left">
      <div className="bg-[#111827] border border-[#1F2937] p-6 rounded-3xl text-white shadow-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#2563EB]/20 text-[#38BDF8] flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Certificates & Industrial Credentials</h2>
            <p className="text-xs text-[#9CA3AF]">QR-verifiable credentials issued by AI LearnX & Industry Mentors</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_CERTIFICATES.map((cert) => (
          <div
            key={cert.id}
            className="bg-[#111827] border border-[#1F2937] hover:border-[#2563EB] rounded-3xl p-5 shadow-md transition-all text-white flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-[#1F2937] mb-4 bg-slate-900">
                <Image src={cert.previewUrl} alt={cert.title} fill sizes="400px" className="object-cover opacity-80" />
                <div className="absolute top-3 right-3 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Verified
                </div>
              </div>

              <div className="mb-4">
                <span className="text-[10px] font-bold text-[#38BDF8] bg-[#2563EB]/20 border border-[#38BDF8]/30 px-2 py-0.5 rounded-md">
                  {cert.type}
                </span>
                <h3 className="font-bold text-base text-white mt-2 mb-1">{cert.title}</h3>
                <p className="text-xs text-[#9CA3AF]">ID: {cert.credentialId} • Issued: {cert.issueDate}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-[#1F2937]">
              <a
                href={cert.downloadUrl}
                className="flex-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#172033] hover:bg-[#1F2937] border border-[#1F2937] text-[#38BDF8] text-xs font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1 transition-colors cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Verify</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
