"use client";

import React, { useState } from "react";
import { ShieldCheck, Check, X, Save, Lock, Plus, UserPlus, Mail, Key } from "lucide-react";
import { Card, Button, Badge, Modal, Input } from "@/components/ui/core";

export function RolesPermissionsView() {
  const [roles, setRoles] = useState(["Super Admin", "Admin", "Mentor", "HR", "Finance", "Student", "Intern"]);

  const [adminUsers, setAdminUsers] = useState([
    { id: "ADM-01", name: "Rohan Verma", email: "rohan@ailearnx.com", role: "Admin" },
    { id: "ADM-02", name: "Dr. Vikram Seth", email: "vikram@ailearnx.com", role: "Mentor" },
    { id: "ADM-03", name: "Pooja Sharma", email: "pooja@ailearnx.com", role: "HR" },
    { id: "ADM-04", name: "Siddharth Rao", email: "finance@ailearnx.com", role: "Finance" },
  ]);

  const permissionModules = [
    { module: "User Management", actions: ["View Users", "Create User", "Edit User", "Delete User", "Suspend User"] },
    { module: "Course CMS", actions: ["View Courses", "Create Course", "Publish Course", "Delete Course"] },
    { module: "Certificates & LOR", actions: ["View Certificates", "Issue Certificate", "Revoke Certificate", "Download PDF"] },
    { module: "Stipend & Finance", actions: ["View Stipends", "Approve Stipends", "Export Financial Audit"] },
    { module: "System Settings", actions: ["Manage SMTP & Email", "API Keys Access", "View Audit Logs"] },
  ];

  // Matrix state mock
  const [matrix, setMatrix] = useState<Record<string, boolean>>({
    "Super Admin-View Users": true,
    "Super Admin-Create User": true,
    "Super Admin-Issue Certificate": true,
    "Admin-View Users": true,
    "Admin-Create User": true,
    "Admin-Issue Certificate": true,
    "Mentor-View Users": true,
    "Mentor-Issue Certificate": false,
    "HR-View Users": true,
    "Finance-View Stipends": true,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "Admin",
  });

  const togglePermission = (role: string, action: string) => {
    const key = `${role}-${action}`;
    setMatrix((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAddAdminAccount = () => {
    if (!form.name || !form.email || !form.password) return;
    const newAccount = {
      id: `ADM-0${adminUsers.length + 1}`,
      name: form.name,
      email: form.email,
      role: form.role,
    };
    setAdminUsers([newAccount, ...adminUsers]);
    setForm({ name: "", email: "", password: "", role: "Admin" });
    setIsModalOpen(false);
    setSuccessMsg(`New ${form.role} account created for ${form.name}! Login credentials dispatched.`);
    setTimeout(() => setSuccessMsg(""), 4000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Role & Permission Management</h1>
          <p className="text-xs text-slate-400">Add Admin/Mentor/HR accounts & configure enterprise access matrix.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" onClick={() => setIsModalOpen(true)}>
            <UserPlus className="w-4 h-4" /> Add Administrative User
          </Button>
          <Button size="sm" variant="outline">
            <Save className="w-4 h-4" /> Save Permission Matrix
          </Button>
        </div>
      </div>

      {successMsg && (
        <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 text-emerald-700 dark:text-emerald-300 rounded-xl text-xs font-bold">
          {successMsg}
        </div>
      )}

      {/* Active Administrative Accounts Panel */}
      <Card className="space-y-3">
        <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Active Staff & Admin Credentials</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {adminUsers.map((user) => (
            <div key={user.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-slate-900 dark:text-white">{user.name}</span>
                <Badge variant={user.role === "Admin" ? "purple" : "info"}>{user.role}</Badge>
              </div>
              <p className="text-[11px] text-slate-400">{user.email}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Permission Matrix */}
      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <th className="p-4 w-64">Permission Capability</th>
                {roles.map((r) => (
                  <th key={r} className="p-4 text-center">
                    <Badge variant={r === "Super Admin" ? "purple" : "info"}>{r}</Badge>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
              {permissionModules.map((mod) => (
                <React.Fragment key={mod.module}>
                  <tr className="bg-slate-100/60 dark:bg-slate-800/30">
                    <td colSpan={roles.length + 1} className="px-4 py-2 font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider text-[10px]">
                      {mod.module}
                    </td>
                  </tr>
                  {mod.actions.map((act) => (
                    <tr key={act} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="p-4 font-semibold text-slate-800 dark:text-slate-200">{act}</td>
                      {roles.map((role) => {
                        const key = `${role}-${act}`;
                        const isChecked = role === "Super Admin" || !!matrix[key];
                        return (
                          <td key={role} className="p-4 text-center">
                            <button
                              disabled={role === "Super Admin"}
                              onClick={() => togglePermission(role, act)}
                              className={`w-6 h-6 rounded-lg inline-flex items-center justify-center transition-colors ${
                                isChecked
                                  ? "bg-emerald-500 text-white"
                                  : "bg-slate-100 dark:bg-slate-800 text-slate-300 dark:text-slate-600"
                              }`}
                            >
                              {isChecked ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <X className="w-3.5 h-3.5" />}
                            </button>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Modal to Add Admin / Mentor / HR / Finance User Account */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create Staff / Admin Credentials">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
            <Input
              placeholder="e.g. Pooja Sharma"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Email (Login ID)</label>
              <Input
                type="email"
                placeholder="pooja@ailearnx.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Password</label>
              <Input
                type="password"
                placeholder="••••••••••••"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Assign Role</label>
            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl"
            >
              <option value="Admin">Admin</option>
              <option value="Mentor">Mentor</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Super Admin">Super Admin</option>
            </select>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button onClick={handleAddAdminAccount}>Create Account</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
