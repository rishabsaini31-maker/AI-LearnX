'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell, CheckCircle2, DollarSign, BookOpen, AlertTriangle } from 'lucide-react';
import { MOCK_NOTIFICATIONS } from './data';

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-xs"
        />

        {/* Slide Over Window */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-md h-full bg-[#111827] border-l border-[#1F2937] text-white p-6 overflow-y-auto z-10 flex flex-col justify-between"
        >
          <div>
            {/* Panel Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#1F2937] mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#2563EB]/20 text-[#38BDF8] flex items-center justify-center">
                  <Bell className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">Notifications</h3>
                  <p className="text-xs text-[#9CA3AF]">You have 2 unread updates</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg bg-[#1F2937] text-[#9CA3AF] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Notifications List */}
            <div className="space-y-3">
              {MOCK_NOTIFICATIONS.map((item) => (
                <div
                  key={item.id}
                  className={`p-4 rounded-xl border transition-colors ${
                    item.read
                      ? 'bg-[#172033]/60 border-[#1F2937] text-[#9CA3AF]'
                      : 'bg-[#172033] border-[#2563EB]/40 text-white shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-bold text-xs text-white leading-snug">{item.title}</h4>
                    <span className="text-[10px] text-[#9CA3AF] shrink-0">{item.time}</span>
                  </div>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed mb-2">{item.message}</p>
                  {!item.read && (
                    <span className="inline-block bg-[#2563EB]/20 text-[#38BDF8] border border-[#38BDF8]/30 text-[10px] font-bold px-2 py-0.5 rounded-md">
                      New Update
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-[#1F2937] mt-6">
            <button
              onClick={onClose}
              className="w-full bg-[#1F2937] hover:bg-[#374151] text-white text-xs font-semibold py-2.5 rounded-xl transition-colors cursor-pointer"
            >
              Mark All As Read
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
