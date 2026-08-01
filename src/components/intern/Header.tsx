'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Menu, 
  Search, 
  Bell, 
  Moon, 
  Sun,
  User, 
  Settings, 
  HelpCircle, 
  LogOut, 
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { MOCK_INTERN_PROFILE } from './data';
import { NotificationPanel } from './NotificationPanel';

interface HeaderProps {
  onMobileMenuToggle: () => void;
}

export function Header({ onMobileMenuToggle }: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <header className="sticky top-0 z-30 w-full bg-[#111827]/90 backdrop-blur-md border-b border-[#1F2937] px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left Side: Mobile Menu Button & Search */}
          <div className="flex items-center gap-3 flex-1">
            <button
              onClick={onMobileMenuToggle}
              className="lg:hidden w-9 h-9 rounded-xl bg-[#1F2937] text-[#9CA3AF] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Command Search Bar */}
            <div className="relative w-full max-w-md hidden sm:block">
              <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects, tasks, mentors, guidelines (Press ⌘K)..."
                className="w-full bg-[#172033] border border-[#1F2937] text-white text-xs placeholder-[#9CA3AF] rounded-xl pl-10 pr-12 py-2 focus:outline-none focus:border-[#2563EB] transition-colors"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-[#1F2937] px-1.5 py-0.5 rounded text-[10px] font-mono text-[#9CA3AF]">
                <span>⌘K</span>
              </div>
            </div>
          </div>

          {/* Right Side Tools */}
          <div className="flex items-center gap-3">
            {/* Interactive Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="w-9 h-9 rounded-xl bg-[#172033] border border-[#1F2937] text-[#38BDF8] hover:text-white flex items-center justify-center shadow-xs transition-all cursor-pointer"
            >
              {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            {/* Notifications Button */}
            <button
              onClick={() => setShowNotifications(true)}
              className="relative w-9 h-9 rounded-xl bg-[#172033] border border-[#1F2937] text-[#9CA3AF] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2.5 p-1 rounded-xl hover:bg-[#172033] transition-colors cursor-pointer"
              >
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#2563EB] shadow-xs shrink-0">
                  <Image
                    src={MOCK_INTERN_PROFILE.avatar}
                    alt={MOCK_INTERN_PROFILE.name}
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-xs font-bold text-white leading-tight">{MOCK_INTERN_PROFILE.name}</p>
                  <p className="text-[10px] text-[#38BDF8] font-semibold">{MOCK_INTERN_PROFILE.level}</p>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-[#9CA3AF] hidden md:block" />
              </button>

              {/* Profile Dropdown Menu */}
              {showProfileMenu && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-[#111827] border border-[#1F2937] rounded-2xl shadow-xl py-2 z-50 text-xs">
                  <div className="px-4 py-2 border-b border-[#1F2937]">
                    <p className="font-bold text-white">{MOCK_INTERN_PROFILE.name}</p>
                    <p className="text-[10px] text-[#9CA3AF] truncate">{MOCK_INTERN_PROFILE.email}</p>
                  </div>

                  <Link
                    href="/intern/profile"
                    onClick={() => setShowProfileMenu(false)}
                    className="flex items-center gap-2.5 px-4 py-2 text-[#9CA3AF] hover:text-white hover:bg-[#172033] transition-colors"
                  >
                    <User className="w-4 h-4 text-[#38BDF8]" />
                    <span>My Profile</span>
                  </Link>

                  <Link
                    href="/intern/settings"
                    onClick={() => setShowProfileMenu(false)}
                    className="flex items-center gap-2.5 px-4 py-2 text-[#9CA3AF] hover:text-white hover:bg-[#172033] transition-colors"
                  >
                    <Settings className="w-4 h-4 text-[#38BDF8]" />
                    <span>Settings</span>
                  </Link>

                  <Link
                    href="/intern/support"
                    onClick={() => setShowProfileMenu(false)}
                    className="flex items-center gap-2.5 px-4 py-2 text-[#9CA3AF] hover:text-white hover:bg-[#172033] transition-colors"
                  >
                    <HelpCircle className="w-4 h-4 text-[#38BDF8]" />
                    <span>Help & Support</span>
                  </Link>

                  <div className="my-1 border-t border-[#1F2937]" />

                  <Link
                    href="/"
                    onClick={() => setShowProfileMenu(false)}
                    className="flex items-center gap-2.5 px-4 py-2 text-rose-400 hover:bg-rose-500/10 transition-colors font-semibold"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Exit Portal</span>
                  </Link>
                </div>
              )}
            </div>

          </div>

        </div>
      </header>

      {/* Slide-over Notifications */}
      <NotificationPanel
        isOpen={showNotifications}
        onClose={() => setShowNotifications(false)}
      />
    </>
  );
}
