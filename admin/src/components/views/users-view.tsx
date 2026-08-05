"use client";

import React, { useState } from "react";
import { Search, Plus, Filter, Download, Upload, Trash2, Edit3, Shield, UserX, CheckCircle, Mail, KeyRound } from "lucide-react";
import { Card, Button, Input, Badge, Modal } from "@/components/ui/core";
import { User } from "@/types";

export function UserManagementView() {
  const [users, setUsers] = useState<User[]>([
    { id: "USR-001", name: "Aarav Sharma", email: "aarav@gmail.com", role: "Student", status: "Active", emailVerified: true, avatar: "AS", createdAt: "2026-07-12" },
    { id: "USR-002", name: "Priya Patel", email: "priya@learnx.com", role: "Intern", status: "Active", emailVerified: true, avatar: "PP", createdAt: "2026-06-20" },
    { id: "USR-003", name: "Dr. Vikram Seth", email: "vikram@ai.org", role: "Mentor", status: "Active", emailVerified: true, avatar: "VS", createdAt: "2026-05-10" },
    { id: "USR-004", name: "Rohan Verma", email: "rohan@ailearnx.com", role: "Admin", status: "Active", emailVerified: true, avatar: "RV", createdAt: "2026-01-05" },
    { id: "USR-005", name: "Ananya Roy", email: "ananya@gmail.com", role: "Student", status: "Pending", emailVerified: false, avatar: "AR", createdAt: "2026-08-01" },
    { id: "USR-006", name: "Karan Mehta", email: "karan@interns.io", role: "Intern", status: "Suspended", emailVerified: true, avatar: "KM", createdAt: "2026-04-18" },
  ]);

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "Student" as User["role"] });

  const filteredUsers = users.filter((u) => {
    const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === "All" || u.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const handleCreateUser = () => {
    if (!newUser.name || !newUser.email) return;
    const created: User = {
      id: `USR-00${users.length + 1}`,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      status: "Active",
      emailVerified: true,
      avatar: newUser.name.substring(0, 2).toUpperCase(),
      createdAt: new Date().toISOString().split("T")[0],
    };
    setUsers([created, ...users]);
    setNewUser({ name: "", email: "", role: "Student" });
    setIsModalOpen(false);
  };

  const toggleUserStatus = (id: string) => {
    setUsers(users.map((u) => (u.id === id ? { ...u, status: u.status === "Active" ? "Suspended" : "Active" } : u)));
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">User Management</h1>
          <p className="text-xs text-slate-400">Complete CRUD operations for Students, Interns, Mentors & Admins.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline">
            <Upload className="w-4 h-4" /> Import CSV
          </Button>
          <Button size="sm" variant="outline">
            <Download className="w-4 h-4" /> Export CSV
          </Button>
          <Button size="sm" onClick={() => setIsModalOpen(true)}>
            <Plus className="w-4 h-4" /> Create User
          </Button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <Input
              placeholder="Search by name, email or ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 text-xs"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-slate-400" />
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="px-3 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-700 dark:text-slate-300 focus:outline-none"
            >
              <option value="All">All Roles</option>
              <option value="Student">Student</option>
              <option value="Intern">Intern</option>
              <option value="Mentor">Mentor</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Users Data Table */}
      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="p-4">User Details</th>
                <th className="p-4">Role</th>
                <th className="p-4">Status</th>
                <th className="p-4">Email Verification</th>
                <th className="p-4">Joined Date</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                        {user.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">{user.name}</p>
                        <p className="text-[11px] text-slate-400">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <Badge variant={user.role === "Admin" ? "purple" : user.role === "Mentor" ? "info" : "default"}>
                      {user.role}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <Badge variant={user.status === "Active" ? "success" : user.status === "Suspended" ? "danger" : "warning"}>
                      {user.status}
                    </Badge>
                  </td>
                  <td className="p-4">
                    {user.emailVerified ? (
                      <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold text-[11px]">
                        <CheckCircle className="w-3.5 h-3.5" /> Verified
                      </span>
                    ) : (
                      <span className="text-amber-500 font-semibold text-[11px]">Pending</span>
                    )}
                  </td>
                  <td className="p-4 text-slate-500">{user.createdAt}</td>
                  <td className="p-4 text-right space-x-1">
                    <button
                      onClick={() => toggleUserStatus(user.id)}
                      title="Toggle Status"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <UserX className="w-4 h-4" />
                    </button>
                    <button
                      title="Send Password Reset"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800"
                    >
                      <KeyRound className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Create User Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Account">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
            <Input
              placeholder="e.g. Sameer Kapoor"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
            <Input
              type="email"
              placeholder="e.g. sameer@ailearnx.com"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Assign System Role</label>
            <select
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value as User["role"] })}
              className="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-slate-100"
            >
              <option value="Student">Student</option>
              <option value="Intern">Intern</option>
              <option value="Mentor">Mentor</option>
              <option value="Admin">Admin</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
            </select>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreateUser}>Create User</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
