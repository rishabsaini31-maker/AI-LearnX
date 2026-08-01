'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ icon: Icon, value, label, className = '' }: StatCardProps) {
  return (
    <div 
      className={`
        bg-white border border-gray-100 rounded-2xl p-4 shadow-sm 
        hover:shadow-md hover:border-[#2DD4FF] transition-all duration-300 
        flex items-center gap-3.5 cursor-pointer group
        ${className}
      `}
    >
      <div className="w-10 h-10 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
        <Icon className="w-5 h-5" />
      </div>
      <div className="text-left min-w-0">
        <span className="text-xl font-extrabold text-gray-900 block leading-none mb-1">
          {value}
        </span>
        <span className="text-xs text-gray-500 font-medium block leading-tight">
          {label}
        </span>
      </div>
    </div>
  );
}
