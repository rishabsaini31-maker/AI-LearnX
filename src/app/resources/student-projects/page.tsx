import React from 'react';
import type { Metadata } from 'next';
import { MegaMenuNav } from '@/components/navigation/mega-menu-nav';
import { Footer } from '@/components/layout/footer';
import { StudentProjectsView } from '@/components/projects/student-projects-view';

export const metadata: Metadata = {
  title: 'Real-Time Student Projects | AI LearnX',
  description: 'Explore 1000+ real-world projects across AI, Full Stack Development, Data Science, Cybersecurity, Cloud, and Mobile Development with 1:1 mentor support.',
};

export default function StudentProjectsPage() {
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen flex flex-col antialiased">
      <MegaMenuNav />
      <div className="flex-1 pt-24">
        <StudentProjectsView />
      </div>
      <Footer />
    </div>
  );
}
