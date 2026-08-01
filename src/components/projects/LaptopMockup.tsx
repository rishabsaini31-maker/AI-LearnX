'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function LaptopMockup() {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleError = (key: string) => {
    setImgErrors(prev => ({ ...prev, [key]: true }));
  };

  if (!isLoaded) {
    return (
      <div className="relative w-full max-w-md mx-auto lg:mx-0">
        <div className="w-full aspect-[16/12.5] bg-gray-100 rounded-2xl animate-pulse" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="relative w-full max-w-md mx-auto lg:mx-0"
    >
      {/* Floating animation wrapper */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Blue glow behind laptop */}
        <div className="absolute inset-0 bg-blue-400/10 rounded-full blur-3xl -z-10 scale-110" />

        {/* Left Desk Prop: Plant */}
        <div className="absolute -left-8 bottom-2 z-20 hidden sm:block pointer-events-none">
          {!imgErrors.plant ? (
            <Image
              src="/images/plant.png"
              alt="Plant"
              width={80}
              height={100}
              className="object-contain drop-shadow-lg"
              onError={() => handleError('plant')}
            />
          ) : (
            <div className="w-10 h-14 bg-emerald-100 rounded-full flex items-end justify-center">
              <div className="w-8 h-8 bg-emerald-600 rounded-t-full" />
            </div>
          )}
        </div>

        {/* MacBook Device */}
        <div className="relative w-full" style={{ aspectRatio: '16/12.5' }}>
          {/* Screen Bezel - Silver Aluminum Frame */}
          <div className="absolute inset-x-0 top-0 bottom-8 bg-[#C0C0C0] rounded-t-xl p-2 pb-1.5 shadow-lg">
            {/* Inner black bezel */}
            <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
              {/* Camera notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rounded-full z-20 border border-gray-700" />
              
              {/* Screen Content: Dashboard */}
              <div className="relative w-full h-full bg-[#090D16] overflow-hidden">
                {!imgErrors.dashboard ? (
                  <Image
                    src="/images/dashboard.png"
                    alt="Dashboard"
                    fill
                    className="object-cover"
                    onError={() => handleError('dashboard')}
                  />
                ) : (
                  <div className="w-full h-full bg-[#090D16] flex flex-col p-3 text-white font-sans">
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                      <div>
                        <p className="text-[9px] text-slate-400 font-medium">Welcome back, Student 👋</p>
                        <p className="text-[11px] font-bold text-white leading-tight">Let&apos;s continue building your real-world project</p>
                      </div>
                      <span className="text-[9px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                        Active
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 my-1.5">
                      <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
                        <p className="text-[8px] text-slate-400">Overall Progress</p>
                        <span className="text-xs font-extrabold text-[#2DD4FF]">75%</span>
                      </div>
                      <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
                        <p className="text-[8px] text-slate-400">Tasks Completed</p>
                        <p className="text-xs font-extrabold text-white mt-0.5">32/45</p>
                      </div>
                      <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
                        <p className="text-[8px] text-slate-400">Internship Status</p>
                        <p className="text-[10px] font-bold text-emerald-400 mt-0.5">Active</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Floating code icon */}
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-4 right-4 w-8 h-8 bg-slate-900/80 border border-slate-700 rounded-lg flex items-center justify-center shadow-lg backdrop-blur-sm"
                >
                  <span className="text-[#2DD4FF] font-bold text-[10px] font-mono">&lt;/&gt;</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* MacBook Base - Thin silver keyboard deck */}
          <div className="absolute inset-x-0 bottom-0 h-8 bg-[#D0D0D0] rounded-b-xl px-4 pb-3 pt-1 shadow-md">
            {/* Keyboard area suggestion */}
            <div className="flex justify-center">
              <div className="w-3/4 h-2 bg-gray-400/40 rounded-full" />
            </div>
            {/* Trackpad */}
            <div className="flex justify-center mt-1.5">
              <div className="w-16 h-2 bg-gray-400/30 rounded-full" />
            </div>
          </div>
        </div>

        {/* Right Desk Prop: Coffee Mug */}
        <div className="absolute -right-8 bottom-6 z-20 hidden sm:block pointer-events-none">
          {!imgErrors.mug ? (
            <Image
              src="/images/mug.png"
              alt="Coffee Mug"
              width={80}
              height={100}
              className="object-contain drop-shadow-lg"
              onError={() => handleError('mug')}
            />
          ) : (
            <div className="w-10 h-12 bg-slate-900 border border-slate-800 rounded-lg shadow-md flex items-center justify-center">
              <span className="text-[#2DD4FF] font-bold text-[10px] font-mono">&lt;/&gt;</span>
            </div>
          )}
        </div>
       </motion.div>
    </motion.div>
  );
}
