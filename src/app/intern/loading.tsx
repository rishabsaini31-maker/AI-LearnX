import React from 'react';
import { Sparkles } from 'lucide-react';

export default function InternLoading() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center text-white">
      <div className="w-12 h-12 rounded-2xl bg-[#2563EB] text-white flex items-center justify-center shadow-lg shadow-blue-600/30 animate-pulse mb-4">
        <Sparkles className="w-6 h-6 fill-current" />
      </div>
      <p className="text-sm font-bold text-white">Loading Intern Portal...</p>
      <p className="text-xs text-[#9CA3AF] mt-1">Fetching your active projects & tasks</p>
    </div>
  );
}
