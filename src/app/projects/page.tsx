import React from 'react'
import type { Metadata } from 'next'
import { MegaMenuNav } from '@/components/navigation/mega-menu-nav'
import { Footer } from '@/components/layout/footer'
import { ProjectsView } from '@/components/projects/projects-view'

export const metadata: Metadata = {
  title: 'Real-Time Projects | AI LearnX',
  description: 'Build real software projects, gain practical industry experience, get 1:1 mentor support, and earn verifiable certificates & stipends with AI LearnX.',
}

export default function ProjectsPage() {
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen flex flex-col antialiased">
      <MegaMenuNav />
      <div className="flex-1">
        <ProjectsView />
      </div>
      <Footer />
    </div>
  )
}
