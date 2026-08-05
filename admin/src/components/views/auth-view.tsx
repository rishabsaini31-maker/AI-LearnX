"use client";

import React, { useState } from "react";
import { Lock, Mail, KeyRound, ShieldAlert, CheckCircle2, Smartphone } from "lucide-react";
import { Card, Button, Input, Modal, Badge } from "@/components/ui/core";

export function AuthView() {
  const [activeTab, setActiveTab] = useState<"login" | "forgot" | "otp" | "2fa">("login");
  const [email, setEmail] = useState("admin@ailearnx.com");

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Authentication & Session Management</h1>
          <p className="text-xs text-slate-400">Enterprise auth views: Login, Forgot Password, OTP verification & 2FA.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant={activeTab === "login" ? "primary" : "outline"} onClick={() => setActiveTab("login")}>Login Page</Button>
          <Button size="sm" variant={activeTab === "forgot" ? "primary" : "outline"} onClick={() => setActiveTab("forgot")}>Forgot Password</Button>
          <Button size="sm" variant={activeTab === "otp" ? "primary" : "outline"} onClick={() => setActiveTab("otp")}>OTP Modal</Button>
          <Button size="sm" variant={activeTab === "2fa" ? "primary" : "outline"} onClick={() => setActiveTab("2fa")}>2FA Setup</Button>
        </div>
      </div>

      <div className="max-w-md mx-auto py-6">
        {activeTab === "login" && (
          <Card className="space-y-4">
            <div className="text-center pb-2">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-black text-xl flex items-center justify-center mx-auto mb-2">AI</div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">AI LearnX Admin Portal</h2>
              <p className="text-xs text-slate-400">Enter your administrator credentials</p>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Email</label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Password</label>
              <Input type="password" defaultValue="••••••••••••" />
            </div>
            <Button className="w-full">Sign In to Dashboard</Button>
          </Card>
        )}

        {activeTab === "forgot" && (
          <Card className="space-y-4">
            <div className="text-center pb-2">
              <KeyRound className="w-10 h-10 text-blue-600 mx-auto mb-2" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Reset Admin Password</h2>
              <p className="text-xs text-slate-400">We will send a password reset link to your email</p>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <Button className="w-full">Send Recovery Link</Button>
          </Card>
        )}

        {activeTab === "otp" && (
          <Card className="space-y-4 text-center">
            <Smartphone className="w-10 h-10 text-blue-600 mx-auto mb-2" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">2-Factor OTP Verification</h2>
            <p className="text-xs text-slate-400">Enter the 6-digit code sent to your registered device</p>
            <div className="flex justify-center gap-2 my-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <input key={i} maxLength={1} className="w-10 h-12 text-center text-lg font-bold bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-600 focus:outline-none" />
              ))}
            </div>
            <Button className="w-full">Verify & Continue</Button>
          </Card>
        )}

        {activeTab === "2fa" && (
          <Card className="space-y-4 text-center">
            <Badge variant="purple" className="mx-auto">Security Standard</Badge>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Two-Factor Authentication Active</h2>
            <p className="text-xs text-slate-400">Your account is secured with Google Authenticator TOTP.</p>
            <Button variant="outline" className="w-full">Regenerate Backup Codes</Button>
          </Card>
        )}
      </div>
    </div>
  );
}
