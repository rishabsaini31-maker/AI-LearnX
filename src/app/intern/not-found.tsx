import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, ArrowLeft } from 'lucide-react';

export default function InternNotFound() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center text-white text-center p-6">
      <div className="w-16 h-16 rounded-2xl bg-[#172033] border border-[#1F2937] text-[#38BDF8] flex items-center justify-center mb-4">
        <LayoutDashboard className="w-8 h-8" />
      </div>
      <h2 className="text-2xl font-extrabold text-white mb-2">Portal Page Not Found</h2>
      <p className="text-sm text-[#9CA3AF] max-w-md mb-6">
        The intern portal section you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/intern"
        className="px-5 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold rounded-xl inline-flex items-center gap-2 transition-colors shadow-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Dashboard</span>
      </Link>
    </div>
  );
}
