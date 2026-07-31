'use client'

import React from 'react'
import Image from 'next/image'
import { MegaMenuNav } from '@/components/navigation/mega-menu-nav'

export function StudentDashboard() {
  return (
    <div className="font-body-md text-body-md bg-background text-on-background min-h-screen">
      <MegaMenuNav />

      <main className="pt-32 pb-20 px-margin-desktop max-w-container-max mx-auto">
        {/* Welcome Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <span className="font-label-sm text-label-sm text-on-secondary-container bg-secondary-container px-3 py-1 rounded-full uppercase tracking-wider">Student Dashboard</span>
              <h1 className="font-display-lg text-display-lg text-primary mt-4">Welcome back, Alex.</h1>
              <p className="text-secondary mt-2 max-w-2xl">You've completed 72% of your current module. Your next deadline is in 2 days.</p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-primary text-on-primary font-bold rounded-lg hover:opacity-80 transition-opacity">Continue Learning</button>
              <button className="px-6 py-3 bg-surface border border-outline-variant text-primary font-bold rounded-lg hover:bg-surface-container-low transition-colors">View Portfolio</button>
            </div>
          </div>
        </section>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Continue Learning Card */}
          <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant p-8 rounded-xl shadow-md">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="font-headline-md text-headline-md text-primary">Advanced Neural Architectures</h3>
                <p className="text-secondary text-body-md mt-1">Module 4: Transformer Models and Attention Mechanisms</p>
              </div>
              <span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full">IN PROGRESS</span>
            </div>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="flex-1">
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 w-[72%]"></div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-label-sm font-label-sm text-secondary">72% Completed</span>
                  <span className="text-label-sm font-label-sm text-secondary">8 / 11 Lessons</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-surface rounded-lg border border-outline-variant">
                <p className="text-label-sm font-label-sm text-secondary uppercase mb-1">Time Invested</p>
                <p className="font-headline-md text-headline-md text-primary">24.5 hrs</p>
              </div>
              <div className="p-4 bg-surface rounded-lg border border-outline-variant">
                <p className="text-label-sm font-label-sm text-secondary uppercase mb-1">Quiz Average</p>
                <p className="font-headline-md text-headline-md text-primary">94%</p>
              </div>
              <div className="p-4 bg-surface rounded-lg border border-outline-variant">
                <p className="text-label-sm font-label-sm text-secondary uppercase mb-1">Next Topic</p>
                <p className="font-headline-md text-headline-md text-primary">Cross-Attention</p>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            {/* Quick Actions */}
            <div className="bg-surface-container-lowest border border-outline-variant p-8 rounded-xl shadow-md flex-1">
               <div className="flex items-center gap-3 mb-6">
                 <span className="material-symbols-outlined text-primary">bolt</span>
                 <h3 className="font-headline-md text-headline-md text-primary">Quick Actions</h3>
               </div>
               <div className="flex flex-col gap-3">
                 <button className="w-full flex items-center justify-between p-4 bg-surface rounded-lg border border-outline-variant hover:bg-surface-container-low transition-colors">
                   <div className="flex items-center gap-3">
                     <span className="material-symbols-outlined text-secondary">forum</span>
                     <span className="font-body-md font-bold text-primary">Join Discussion</span>
                   </div>
                   <span className="material-symbols-outlined text-secondary">chevron_right</span>
                 </button>
                 <button className="w-full flex items-center justify-between p-4 bg-surface rounded-lg border border-outline-variant hover:bg-surface-container-low transition-colors">
                   <div className="flex items-center gap-3">
                     <span className="material-symbols-outlined text-secondary">support_agent</span>
                     <span className="font-body-md font-bold text-primary">Book Mentoring</span>
                   </div>
                   <span className="material-symbols-outlined text-secondary">chevron_right</span>
                 </button>
               </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 bg-surface-container-lowest border border-outline-variant p-8 rounded-xl shadow-md mt-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary">school</span>
              <h3 className="font-headline-md text-headline-md text-primary">Certificates</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-surface rounded-lg border border-outline-variant">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-primary/10 rounded flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">workspace_premium</span>
                  </div>
                  <div>
                    <p className="font-body-md font-bold text-primary">Python Foundations</p>
                    <p className="text-label-sm text-secondary">Issued: Oct 2023</p>
                  </div>
                </div>
                <button className="material-symbols-outlined text-secondary hover:text-primary">download</button>
              </div>
              <div className="flex items-center justify-between p-4 bg-surface rounded-lg border border-outline-variant">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-primary/10 rounded flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">workspace_premium</span>
                  </div>
                  <div>
                    <p className="font-body-md font-bold text-primary">Machine Learning Basics</p>
                    <p className="text-label-sm text-secondary">Issued: Dec 2023</p>
                  </div>
                </div>
                <button className="material-symbols-outlined text-secondary hover:text-primary">download</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
