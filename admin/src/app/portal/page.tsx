"use client";

import React, { useState } from "react";
import { Lock, Mail, KeyRound, Shield, LogOut, Sparkles } from "lucide-react";
import { Card, Button, Input, Badge } from "@/components/ui/core";
import AdminDashboardPage from "@/app/page";
import { HrPortal } from "@/components/portals/hr-portal";
import { MentorPortal } from "@/components/portals/mentor-portal";

export default function RootPortalSwitcher() {
  const [currentRole, setCurrentRole] = useState<"guest" | "superadmin" | "hr" | "mentor">("guest");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRoleOption, setSelectedRoleOption] = useState<"superadmin" | "hr" | "mentor">("superadmin");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentRole(selectedRoleOption);
  };

  if (currentRole === "superadmin") {
    return (
      <div>
        {/* Top Portal Switcher Bar */}
        <div className="bg-slate-900 text-white text-xs px-4 py-1.5 flex items-center justify-between z-50 relative border-b border-slate-800">
          <span className="font-bold flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-blue-400" /> AI LearnX Enterprise — Super Admin Mode</span>
          <div className="flex items-center gap-2">
            <button onClick={() => setCurrentRole("hr")} className="hover:text-blue-400 transition-colors">Switch to HR Portal</button>
            <span>•</span>
            <button onClick={() => setCurrentRole("mentor")} className="hover:text-purple-400 transition-colors">Switch to Mentor Portal</button>
            <span>•</span>
            <button onClick={() => setCurrentRole("guest")} className="text-rose-400 hover:underline flex items-center gap-1"><LogOut className="w-3 h-3" /> Logout</button>
          </div>
        </div>
        <AdminDashboardPage />
      </div>
    );
  }

  if (currentRole === "hr") {
    return (
      <div>
        <div className="bg-slate-900 text-white text-xs px-4 py-1.5 flex items-center justify-between z-50 relative border-b border-slate-800">
          <span className="font-bold flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-blue-400" /> AI LearnX Enterprise — HR Lead Portal</span>
          <div className="flex items-center gap-2">
            <button onClick={() => setCurrentRole("superadmin")} className="hover:text-blue-400 transition-colors">Switch to Admin Panel</button>
            <span>•</span>
            <button onClick={() => setCurrentRole("mentor")} className="hover:text-purple-400 transition-colors">Switch to Mentor Portal</button>
            <span>•</span>
            <button onClick={() => setCurrentRole("guest")} className="text-rose-400 hover:underline flex items-center gap-1"><LogOut className="w-3 h-3" /> Logout</button>
          </div>
        </div>
        <HrPortal />
      </div>
    );
  }

  if (currentRole === "mentor") {
    return (
      <div>
        <div className="bg-slate-900 text-white text-xs px-4 py-1.5 flex items-center justify-between z-50 relative border-b border-slate-800">
          <span className="font-bold flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-purple-400" /> AI LearnX Enterprise — Faculty Mentor Portal</span>
          <div className="flex items-center gap-2">
            <button onClick={() => setCurrentRole("superadmin")} className="hover:text-blue-400 transition-colors">Switch to Admin Panel</button>
            <span>•</span>
            <button onClick={() => setCurrentRole("hr")} className="hover:text-blue-400 transition-colors">Switch to HR Portal</button>
            <span>•</span>
            <button onClick={() => setCurrentRole("guest")} className="text-rose-400 hover:underline flex items-center gap-1"><LogOut className="w-3 h-3" /> Logout</button>
          </div>
        </div>
        <MentorPortal />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 text-slate-100">
      <Card className="max-w-md w-full p-8 space-y-6 bg-slate-900 border-slate-800 shadow-2xl">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-black text-xl flex items-center justify-center mx-auto shadow-md">
            AI
          </div>
          <h1 className="text-2xl font-black tracking-tight text-white flex items-center justify-center gap-1.5">
            AI LearnX <Sparkles className="w-4 h-4 text-blue-500 fill-blue-500" />
          </h1>
          <p className="text-xs text-slate-400">Enterprise Unified Authentication Portal</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">Select Portal Credentials</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setSelectedRoleOption("superadmin")}
                className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                  selectedRoleOption === "superadmin"
                    ? "bg-blue-600 border-blue-500 text-white shadow-xs"
                    : "bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700"
                }`}
              >
                Super Admin
              </button>
              <button
                type="button"
                onClick={() => setSelectedRoleOption("hr")}
                className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                  selectedRoleOption === "hr"
                    ? "bg-blue-600 border-blue-500 text-white shadow-xs"
                    : "bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700"
                }`}
              >
                HR Portal
              </button>
              <button
                type="button"
                onClick={() => setSelectedRoleOption("mentor")}
                className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                  selectedRoleOption === "mentor"
                    ? "bg-purple-600 border-purple-500 text-white shadow-xs"
                    : "bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700"
                }`}
              >
                Mentor Portal
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">Email Address</label>
            <Input
              type="email"
              placeholder={
                selectedRoleOption === "superadmin"
                  ? "admin@ailearnx.com"
                  : selectedRoleOption === "hr"
                  ? "hr@ailearnx.com"
                  : "mentor@ailearnx.com"
              }
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">Password</label>
            <Input
              type="password"
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
            />
          </div>

          <Button type="submit" className="w-full font-bold py-2.5">
            Sign In to {selectedRoleOption === "superadmin" ? "Super Admin" : selectedRoleOption === "hr" ? "HR Lead Portal" : "Mentor Portal"}
          </Button>
        </form>

        <div className="pt-2 border-t border-slate-800 text-center">
          <p className="text-[11px] text-slate-500">From Fresher to Industry Ready • Secured by AI LearnX Auth</p>
        </div>
      </Card>
    </div>
  );
}
