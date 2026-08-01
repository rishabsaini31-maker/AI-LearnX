'use client';

import React from 'react';
import { Settings, Bell, Lock, Shield, User } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-6 text-left">
      <div className="bg-[#111827] border border-[#1F2937] p-6 rounded-3xl text-white shadow-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#2563EB]/20 text-[#38BDF8] flex items-center justify-center">
            <Settings className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Portal Settings</h2>
            <p className="text-xs text-[#9CA3AF]">Manage notifications, security credentials, and portal preferences</p>
          </div>
        </div>
      </div>

      <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6 shadow-md text-white space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-[#172033] border border-[#1F2937] rounded-2xl">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-[#38BDF8]" />
              <div>
                <h4 className="font-bold text-sm text-white">Email Notifications</h4>
                <p className="text-xs text-[#9CA3AF]">Receive alerts for milestone approvals & PR code reviews</p>
              </div>
            </div>
            <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#2563EB]" />
          </div>

          <div className="flex items-center justify-between p-4 bg-[#172033] border border-[#1F2937] rounded-2xl">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-[#38BDF8]" />
              <div>
                <h4 className="font-bold text-sm text-white">Two-Factor Authentication</h4>
                <p className="text-xs text-[#9CA3AF]">Enhance security for internship stipend disbursal logs</p>
              </div>
            </div>
            <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#2563EB]" />
          </div>
        </div>
      </div>
    </div>
  );
}
