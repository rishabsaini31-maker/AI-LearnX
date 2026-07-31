import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MegaMenuNav } from '@/components/navigation/mega-menu-nav'
import { Footer } from '@/components/layout/footer'
import { ComparisonSection } from '@/components/home/comparison'
import { FeaturesGrid } from '@/components/home/features'

export default function Home() {
  return (
    <div className="font-body-md text-body-md bg-background text-on-background min-h-screen flex flex-col">
      <MegaMenuNav />

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center pt-32 pb-20 px-margin-mobile md:px-margin-desktop relative overflow-hidden">
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden pointer-events-none -z-10 flex items-center justify-center">
          <div className="w-[800px] h-[800px] bg-tertiary-fixed/30 blur-[120px] rounded-full absolute -top-40 -left-40"></div>
          <div className="w-[600px] h-[600px] bg-secondary-container/30 blur-[150px] rounded-full absolute bottom-0 right-0"></div>
        </div>

        <div className="max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col gap-6 animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary leading-tight font-bold">
              Get Mentored.<br/>
              Build Projects.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary-container to-primary">Get Ahead.</span>
            </h1>
            
            <p className="text-secondary font-body-lg text-body-lg leading-relaxed max-w-xl">
              ElevanceSkills is a Real-Time Project Training Platform where students gain practical experience by building industry-oriented projects with mentor support, guided implementation, and hands-on learning.
            </p>
            
            <p className="text-secondary font-body-md leading-relaxed max-w-xl">
              Build real-world projects, develop practical skills, and gain industry-relevant experience before entering the job market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="#" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-sm font-bold text-center hover:opacity-90 active:scale-[0.98] transition-all shadow-md">
                Explore Real-Time Projects
              </Link>
              <Link href="#" className="bg-surface border border-outline-variant text-primary px-8 py-4 rounded-xl font-label-sm font-bold text-center hover:bg-surface-container-low active:scale-[0.98] transition-all">
                Learn More
              </Link>
            </div>

            <div className="mt-8 p-4 bg-tertiary-fixed/30 rounded-xl border border-tertiary-fixed-dim/50">
              <p className="text-label-sm font-label-sm text-on-tertiary-container leading-relaxed">
                <span className="font-bold">Free Internship Opportunities</span> are available as an optional benefit after successful project completion.<br/>
                Risk-free start - full refund within 24 hours.
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-3 text-secondary font-label-sm text-[12px] uppercase tracking-wider">
                <span>Project-based learning</span>
                <span>•</span>
                <span>Mentor support</span>
                <span>•</span>
                <span>Optional free internship</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/50 animate-in slide-in-from-right-8 duration-700 fade-in delay-150 fill-mode-both">
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
              alt="Students collaborating on projects"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </main>

      <ComparisonSection />
      <FeaturesGrid />

      <Footer />
    </div>
  )
}
