"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { CommandPalette } from "@/components/layout/command-palette";

// Module Views
import { DashboardView } from "@/components/views/dashboard-view";
import { UserManagementView } from "@/components/views/users-view";
import { RolesPermissionsView } from "@/components/views/roles-view";
import { CoursesView } from "@/components/views/courses-view";
import { ProjectsView } from "@/components/views/projects-view";
import { MentorsView } from "@/components/views/mentors-view";
import { SuccessStoriesView } from "@/components/views/stories-view";
import { AnnouncementsView } from "@/components/views/announcements-view";
import { TasksView } from "@/components/views/tasks-view";
import { CertificatesView } from "@/components/views/certificates-view";
import { BlogsView } from "@/components/views/blogs-view";
import { LeaderboardView } from "@/components/views/leaderboard-view";
import { StipendsView } from "@/components/views/stipends-view";
import { MediaView } from "@/components/views/media-view";
import { SettingsView } from "@/components/views/settings-view";
import { WebsiteCmsView } from "@/components/views/website-cms-view";
import { AuthView } from "@/components/views/auth-view";
import { Card, Badge } from "@/components/ui/core";
import { cn } from "@/lib/utils";

export function AdminDashboardMaster() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  const renderModuleView = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardView onNavigate={(t) => setActiveTab(t)} />;
      case "users":
        return <UserManagementView />;
      case "roles":
        return <RolesPermissionsView />;
      case "courses":
        return <CoursesView />;
      case "projects":
        return <ProjectsView />;
      case "mentors":
        return <MentorsView />;
      case "stories":
        return <SuccessStoriesView />;
      case "announcements":
        return <AnnouncementsView />;
      case "tasks":
        return <TasksView />;
      case "certificates":
        return <CertificatesView />;
      case "blogs":
        return <BlogsView />;
      case "leaderboard":
        return <LeaderboardView />;
      case "stipends":
        return <StipendsView />;
      case "media":
        return <MediaView />;
      case "settings":
        return <SettingsView />;
      case "website-cms":
        return <WebsiteCmsView />;
      case "auth":
        return <AuthView />;
      default:
        return (
          <Card className="p-12 text-center space-y-3">
            <Badge variant="info">Production Ready Module</Badge>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white capitalize">{activeTab} Module</h2>
          </Card>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex font-sans">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
      <div className="flex-1 flex flex-col min-w-0">
        <Header activeTabTitle={activeTab} collapsed={sidebarCollapsed} onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />
        <main className={cn("flex-1 p-6 transition-all duration-300", sidebarCollapsed ? "pl-24" : "pl-72")}>
          <div className="max-w-7xl mx-auto">{renderModuleView()}</div>
        </main>
      </div>
      <CommandPalette isOpen={isCommandPaletteOpen} onClose={() => setIsCommandPaletteOpen(false)} onSelectTab={(tabId) => setActiveTab(tabId)} />
    </div>
  );
}
