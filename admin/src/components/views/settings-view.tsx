"use client";

import React, { useState } from "react";
import { Settings, Shield, Mail, Key, Database, Palette, Globe, Server, Bell } from "lucide-react";
import { Card, Button, Input, Badge } from "@/components/ui/core";

export function SettingsView() {
  const [activeTab, setActiveTab] = useState("company");

  const settingSections = [
    { id: "company", label: "Company Details", icon: Globe },
    { id: "brand", label: "Brand Customization", icon: Palette },
    { id: "email", label: "Email & SMTP", icon: Mail },
    { id: "security", label: "Security & 2FA", icon: Shield },
    { id: "api", label: "API Keys", icon: Key },
    { id: "storage", label: "Cloud Storage", icon: Database },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Admin Settings & Configuration</h1>
        <p className="text-xs text-slate-400">Manage enterprise branding, SMTP servers, security credentials & storage.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Settings Navigation Sub-Sidebar */}
        <Card className="p-2 space-y-1">
          {settingSections.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeTab === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveTab(sec.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{sec.label}</span>
              </button>
            );
          })}
        </Card>

        {/* Settings Detail Form Panel */}
        <Card className="md:col-span-3 space-y-4">
          {activeTab === "company" && (
            <>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
                Company & Platform Profile
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Organization Name</label>
                  <Input defaultValue="AI LearnX Technologies Ltd." />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Support Email</label>
                  <Input defaultValue="support@ailearnx.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">HQ Address</label>
                  <Input defaultValue="Level 4, Innovation Park, Tech City, Bangalore, India" />
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <Button size="sm">Save Company Info</Button>
              </div>
            </>
          )}

          {activeTab === "email" && (
            <>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
                SMTP & Transactional Mail Gateway
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">SMTP Host</label>
                  <Input defaultValue="smtp.sendgrid.net" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">SMTP Port</label>
                  <Input defaultValue="587" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Sender Email</label>
                  <Input defaultValue="notifications@ailearnx.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Encryption Protocol</label>
                  <Input defaultValue="TLS" />
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <Button size="sm">Test & Save SMTP</Button>
              </div>
            </>
          )}

          {activeTab !== "company" && activeTab !== "email" && (
            <div className="text-center py-8">
              <Badge variant="info">Enterprise Feature</Badge>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-2">Active Config Panel</h4>
              <p className="text-xs text-slate-400 mt-1">Configured with production-level security & compliance standards.</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
