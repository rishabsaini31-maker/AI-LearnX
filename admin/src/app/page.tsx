"use client";

import React, { useState } from "react";
import { Sparkles, Shield, Users, UserCheck, ArrowRight, CheckCircle2, Lock } from "lucide-react";
import { Card, Button, Input } from "@/components/ui/core";
import Link from "next/link";

export default function LandingAndPortalPage() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState<"admin" | "hr" | "mentor">("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole === "admin") {
      window.location.href = "/admin";
    } else if (selectedRole === "hr") {
      window.location.href = "/hr";
    } else {
      window.location.href = "/mentor";
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col justify-between">
      {/* Top Brand Header */}
      <header className="h-20 px-8 border-b border-slate-200 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-md">
            AI
          </div>
          <div>
            <h1 className="font-extrabold text-slate-900 text-lg leading-none flex items-center gap-1.5">
              AI LearnX <Sparkles className="w-4 h-4 text-blue-600 fill-blue-600" />
            </h1>
            <span className="text-xs font-semibold text-slate-500">From Fresher to Industry Ready</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button onClick={() => setShowLoginModal(true)} className="font-bold px-5 py-2.5">
            Portal Login
          </Button>
        </div>
      </header>

      {/* Hero Welcome Section */}
      <main className="max-w-7xl mx-auto px-8 py-16 w-full text-center space-y-8 flex-1 flex flex-col justify-center items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Enterprise Administrative & Management Hub
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 max-w-4xl leading-tight">
          AI-Powered EdTech Infrastructure & Portal Management
        </h1>

        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          Industry-level training, internships, real-world projects, verified certificates, and automated HR operations for AI LearnX.
        </p>

        {/* Portal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl pt-6">
          <div
            onClick={() => { setSelectedRole("admin"); setShowLoginModal(true); }}
            className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Super Admin Portal</h3>
            <p className="text-xs text-slate-500 mt-1">Full system overview, revenue analytics, RBAC permissions & courses.</p>
            <span className="text-xs font-bold text-blue-600 mt-4 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Launch Portal <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div
            onClick={() => { setSelectedRole("hr"); setShowLoginModal(true); }}
            className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-500 hover:shadow-md transition-all text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">HRMS Portal</h3>
            <p className="text-xs text-slate-500 mt-1">Recruitment pipeline, intern onboarding, attendance & offer letters.</p>
            <span className="text-xs font-bold text-indigo-600 mt-4 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Launch Portal <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div
            onClick={() => { setSelectedRole("mentor"); setShowLoginModal(true); }}
            className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-500 hover:shadow-md transition-all text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-600 transition-colors">Faculty Mentor Portal</h3>
            <p className="text-xs text-slate-500 mt-1">Mentees directory, project code reviews & 1-on-1 session management.</p>
            <span className="text-xs font-bold text-purple-600 mt-4 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Launch Portal <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-slate-200 text-center text-xs text-slate-500">
        © 2026 AI LearnX Technologies. All rights reserved. • From Fresher to Industry Ready
      </footer>

      {/* Portal Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in">
          <Card className="max-w-md w-full p-8 space-y-6 bg-white border-slate-200 shadow-2xl relative">
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 font-bold"
            >
              ✕
            </button>

            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-black text-xl flex items-center justify-center mx-auto shadow-md">
                AI
              </div>
              <h2 className="text-xl font-bold text-slate-900 capitalize">{selectedRole} Portal Login</h2>
              <p className="text-xs text-slate-500">Enter your official AI LearnX credentials</p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                <Input
                  type="email"
                  placeholder={`${selectedRole}@ailearnx.com`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Password</label>
                <Input
                  type="password"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <Button type="submit" className="w-full font-bold py-2.5">
                Sign In to {selectedRole === "admin" ? "Super Admin" : selectedRole === "hr" ? "HRMS Portal" : "Faculty Mentor Portal"}
              </Button>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
}
