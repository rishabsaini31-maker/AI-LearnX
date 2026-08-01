'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, className = '' }: FeatureCardProps) {
  return (
    <div 
      className={`
        bg-white border border-gray-200/80 rounded-2xl py-3.5 px-4 
        flex items-center gap-3 shadow-sm hover:shadow-md hover:border-[#2DD4FF] 
        transition-all duration-300 hover:-translate-y-0.5 cursor-pointer group
        ${className}
      `}
    >
      <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#2DD4FF] flex items-center justify-center shrink-0 group-hover:bg-[#2DD4FF] group-hover:text-white transition-colors duration-300">
        <Icon className="w-4 h-4" />
      </div>
      <span className="text-xs font-bold text-gray-900 whitespace-nowrap leading-tight">
        {title}
      </span>
    </div>
  );
}
