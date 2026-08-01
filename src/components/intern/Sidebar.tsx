'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  FolderGit2, 
  CheckSquare, 
  Trophy, 
  Calendar, 
  Wallet, 
  GraduationCap, 
  Bell, 
  Settings, 
  HelpCircle, 
  LogOut, 
  ChevronLeft, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface SidebarProps {
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

export function Sidebar({ isMobileOpen = false, onMobileClose }: SidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  // Sync collapsed state from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('intern_sidebar_collapsed');
    if (saved !== null) {
      setCollapsed(saved === 'true');
    }
  }, []);

  const toggleCollapse = () => {
    const nextState = !collapsed;
    setCollapsed(nextState);
    localStorage.setItem('intern_sidebar_collapsed', String(nextState));
  };

  const navItems = [
    { label: 'Dashboard', href: '/intern', icon: LayoutDashboard },
    { label: 'My Projects', href: '/intern/projects', icon: FolderGit2, badge: '1' },
    { label: 'Tasks', href: '/intern/tasks', icon: CheckSquare, badge: '6' },
    { label: 'Leaderboard', href: '/intern/leaderboard', icon: Trophy },
    { label: 'Attendance', href: '/intern/attendance', icon: Calendar },
    { label: 'Stipend', href: '/intern/stipend', icon: Wallet, badge: '₹10k' },
    { label: 'Mentors', href: '/intern/mentors', icon: GraduationCap },
    { label: 'Announcements', href: '/intern/announcements', icon: Bell, badge: '3' },
    { label: 'Settings', href: '/intern/settings', icon: Settings },
    { label: 'Support', href: '/intern/support', icon: HelpCircle },
  ];

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isMobileOpen && (
        <div 
          onClick={onMobileClose}
          className="fixed inset-0 bg-black/70 backdrop-xs z-40 lg:hidden"
        />
      )}

      {/* Main Sidebar Wrapper */}
      <motion.aside
        animate={{ width: collapsed ? 80 : 280 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed lg:sticky top-0 left-0 h-screen bg-[#111827] border-r border-[#1F2937] text-white flex flex-col justify-between z-50 overflow-hidden ${
          isMobileOpen ? 'translate-x-0 w-[280px]' : '-translate-x-full lg:translate-x-0'
        } transition-transform lg:transition-none duration-300`}
      >
        {/* Top Logo & Header */}
        <div className="p-4 border-b border-[#1F2937] flex items-center justify-between min-h-[72px]">
          <Link href="/intern" className="flex items-center gap-3 min-w-0">
            <div className="h-10 relative flex items-center shrink-0">
              <Image 
                src="/logo1.PNG" 
                alt="AI LearnX Logo" 
                width={collapsed ? 36 : 140} 
                height={36} 
                className="object-contain" 
                priority 
              />
            </div>
            
            {!collapsed && (
              <span className="text-[10px] font-bold bg-[#2563EB]/30 text-[#38BDF8] border border-[#38BDF8]/30 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Portal
              </span>
            )}
          </Link>

          {/* Desktop Toggle Collapse Button */}
          <button
            onClick={toggleCollapse}
            className="hidden lg:flex w-7 h-7 rounded-lg bg-[#1F2937] text-[#9CA3AF] hover:text-white hover:bg-[#374151] items-center justify-center transition-colors cursor-pointer shrink-0"
            title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation Items List */}
        <div className="flex-1 overflow-y-auto no-scrollbar py-4 px-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href !== '/intern' && pathname.startsWith(item.href));

            return (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  onClick={() => onMobileClose && onMobileClose()}
                  className={`flex items-center gap-3.5 px-3 py-2.5 rounded-xl font-semibold text-xs transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#2563EB] text-white shadow-md shadow-blue-600/20'
                      : 'text-[#9CA3AF] hover:bg-[#1F2937] hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-[#9CA3AF] group-hover:text-white'}`} />
                  
                  {!collapsed && (
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="truncate flex-1 text-left"
                    >
                      {item.label}
                    </motion.span>
                  )}

                  {!collapsed && item.badge && (
                    <span 
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-[#1F2937] text-[#38BDF8] border border-[#38BDF8]/20'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>

                {/* Tooltip on Collapsed Hover */}
                {collapsed && (
                  <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-[#1F2937] border border-[#374151] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 whitespace-nowrap">
                    {item.label}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Profile / Logout Footer */}
        <div className="p-3 border-t border-[#1F2937]">
          <Link
            href="/intern/profile"
            className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#1F2937] transition-colors cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
              RS
            </div>
            {!collapsed && (
              <div className="min-w-0 flex-1 text-left">
                <p className="text-xs font-bold text-white truncate">Rishab Saini</p>
                <p className="text-[10px] text-[#9CA3AF] truncate">IIT Delhi • Intern</p>
              </div>
            )}
          </Link>

          <Link
            href="/"
            className="mt-2 w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            {!collapsed && <span>Exit Portal</span>}
          </Link>
        </div>
      </motion.aside>
    </>
  );
}
