'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MegaMenuNav } from '@/components/navigation/mega-menu-nav'
import { Footer } from '@/components/layout/footer'
import { CheckCircle, ShieldCheck, Download, Users, TrendingUp, BookOpen, Award, FileText } from 'lucide-react'

// Dummy data based on the plan
const TOP_PERFORMERS = [
  { rank: 1, name: "Dheeraj Kumar Saini", status: "Elite Performer 🏆", stipend: "Full Stipend", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" },
  { rank: 2, name: "Ishika", status: "Elite Performer 🏆", stipend: "Full Stipend", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" },
  { rank: 3, name: "Pughazhenthi manikandan", status: "Elite Performer 🏆", stipend: "Full Stipend", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" },
  { rank: 4, name: "Taraka Ratna", status: "Elite Performer 🏆", stipend: "Full Stipend", img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" },
  { rank: 5, name: "Vaibhav pruthi", status: "Elite Performer 🏆", stipend: "Full Stipend", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" },
]

const FEATURED_PROJECTS = [
  { title: "Learn To Build a Real Time Website Like YouTube", student: "Girish", mentor: "Girish (Lead Mentor)", status: "success" },
  { title: "Learn to Build a Real-Time Social Media Platform Like X", student: "Palak Khare", mentor: "Girish (Lead Mentor)", status: "success" },
  { title: "Learn to Build a Real-Time Social Media Platform Like X", student: "Tanmay Ghule", mentor: "Girish (Lead Mentor)", status: "success" },
  { title: "Learn to Build a Real-Time Social Media Platform Like X", student: "Krish Singh", mentor: "Girish (Lead Mentor)", status: "success" },
  { title: "Learn to Build Real Time Website Like Make My Trip - Spring Boot Java", student: "divya eepu", mentor: "Girish (Lead Mentor)", status: "success" },
  { title: "Learn to hack a real time Android OS", student: "Supreeth A", mentor: "Arshad N R (Lead Mentor)", status: "success" },
]

const DOCUMENTS = [
  { title: "GST Registration", desc: "Goods and Services Tax (GST) Registration", type: "LEGAL & REGISTRATION" },
  { title: "Certificate of Incorporation (COI)", desc: "Company Incorporation", type: "LEGAL & REGISTRATION" },
  { title: "MSME Registration", desc: "Micro, Small & Medium Enterprises (MSME)", type: "LEGAL & REGISTRATION" },
  { title: "Training Certificate (Sample)", desc: "Sample training certificate issued by elevanceskills", type: "SAMPLE DOCUMENTS" },
  { title: "Internship Certificate (Sample)", desc: "Sample internship certificate from elevanceskills", type: "SAMPLE DOCUMENTS" },
  { title: "Experience Letter (Sample)", desc: "Sample experience letter from elevanceskills", type: "SAMPLE DOCUMENTS" },
  { title: "Letter of Recommendation (Sample)", desc: "Sample letter of recommendation from elevanceskills", type: "SAMPLE DOCUMENTS" },
  { title: "Training Offer Letter (Sample)", desc: "Sample Training Offer Letter from elevanceskills", type: "SAMPLE DOCUMENTS" },
  { title: "Intern Offer letter (Sample)", desc: "Sample Intern Offer letter from elevanceskills", type: "SAMPLE DOCUMENTS" },
]

export default function OurCredibilityPage() {
  return (
    <div className="font-body-md text-body-md bg-background text-on-background min-h-screen flex flex-col">
      <MegaMenuNav />

      <main className="flex-grow pt-32 pb-20 overflow-hidden relative">
        {/* Background shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] overflow-hidden pointer-events-none -z-10">
          <div className="w-[800px] h-[800px] bg-secondary-container/20 blur-[120px] rounded-full absolute -top-40 -right-40"></div>
          <div className="w-[600px] h-[600px] bg-tertiary-fixed/20 blur-[150px] rounded-full absolute top-20 -left-20"></div>
        </div>

        {/* Hero Section */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-outline-variant text-primary font-label-sm uppercase tracking-wider mb-8 animate-in fade-in slide-in-from-bottom-4">
            <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
            From Skills to Success
          </div>
          <h1 className="font-display-lg-mobile md:font-display-lg text-primary leading-tight font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 delay-100">
            Learn. Build. Grow.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary-container to-primary">Elevate Your Skills with ElevanceSkills</span>
          </h1>
          <p className="text-secondary font-body-lg max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 delay-200">
            Redefining industrial training for the next generation — empowering students to turn learning into real-world innovation. Trusted by learners from 50,000+ Students worldwide to kickstart their careers.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-in fade-in slide-in-from-bottom-8 delay-300">
            {[
              { icon: Users, label: "Students Trained", value: "40,000+" },
              { icon: BookOpen, label: "Industry Courses", value: "50+" },
              { icon: TrendingUp, label: "Placement Success", value: "95%" },
              { icon: Award, label: "Avg. Internship Stipend", value: "₹3000" },
            ].map((stat, i) => (
              <div key={i} className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm flex flex-col items-center">
                <stat.icon className="w-8 h-8 text-primary mb-4" />
                <span className="font-display-lg-mobile text-[32px] font-bold text-primary">{stat.value}</span>
                <span className="text-secondary font-label-sm uppercase tracking-wider mt-2">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership & Stats Section */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Leadership Board */}
            <div className="lg:col-span-8 bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-md p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="font-headline-md text-primary font-bold">Leadership Board</h3>
                  <p className="text-secondary mt-1">Compete • Perform • Earn Recognition</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-label-sm text-secondary uppercase tracking-widest font-bold">June 2026</span>
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full font-label-sm">311 Active</span>
                </div>
              </div>

              <div className="space-y-4">
                {TOP_PERFORMERS.map((perf, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl hover:bg-surface-container-low border border-transparent hover:border-outline-variant transition-all cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <span className="font-headline-md text-secondary font-bold w-6">#{perf.rank}</span>
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-outline-variant">
                        <Image src={perf.img} alt={perf.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-body-md font-bold text-primary group-hover:text-primary transition-colors">{perf.name}</h4>
                        <p className="text-label-sm text-secondary mt-1 flex items-center gap-1">
                          {perf.status} <span className="opacity-50">•</span> {perf.stipend}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-4 bg-surface border border-outline-variant text-primary rounded-xl font-label-sm font-bold hover:bg-surface-container-low transition-colors">
                View All 35 Performers
              </button>
            </div>

            {/* Side Stats */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {/* How to Reach Leadership */}
              <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-md p-8">
                <h4 className="font-headline-md text-primary font-bold mb-6">How to Reach Leadership?</h4>
                <ul className="space-y-4">
                  {[
                    "Complete all assigned tasks on time",
                    "Submit high-quality work consistently",
                    "Stay active and responsive",
                    "Show initiative & leadership behavior"
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 text-secondary font-body-md">
                      <CheckCircle className="w-5 h-5 text-tertiary-fixed-dim shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-secondary-container/50 rounded-xl">
                  <p className="text-label-sm text-on-secondary-container leading-relaxed">
                    💡 Every month resets — your next opportunity starts today!
                  </p>
                </div>
              </div>

              {/* Progress Stats */}
              <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-md p-8">
                <h4 className="font-headline-md text-primary font-bold mb-6">Internship Progress</h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-body-md text-secondary">Total Students</span>
                      <span className="font-headline-md font-bold text-primary">5,927</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-primary/20 w-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-body-md text-secondary">Started</span>
                      <span className="font-headline-md font-bold text-primary">3,736</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[63%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-body-md text-secondary">In Progress</span>
                      <span className="font-headline-md font-bold text-primary">2,244</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 w-[60%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-body-md text-secondary">Completed</span>
                      <span className="font-headline-md font-bold text-primary">1,265</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-[34%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display-lg-mobile md:text-[40px] text-primary font-bold mb-4">Featured Student Projects</h2>
            <p className="text-secondary font-body-md max-w-2xl mx-auto">Explore real-world projects built by our students with mentor guidance, showcasing their technical expertise and problem-solving skills.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_PROJECTS.map((proj, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
                <div className="h-48 bg-surface-container relative w-full flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <Image src={`https://images.unsplash.com/photo-${1550000000000 + i}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`} alt="Project" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                    <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Success</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-body-md font-bold text-primary mb-4 line-clamp-2 leading-snug">{proj.title}</h4>
                  <div className="flex items-center justify-between text-label-sm text-secondary">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold text-[10px]">
                        {proj.student.charAt(0)}
                      </div>
                      <span>{proj.student}</span>
                    </div>
                    <span className="text-[12px] opacity-70 border border-outline-variant px-2 py-0.5 rounded">{proj.mentor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-10">
            <button className="px-6 py-2 border border-outline-variant rounded-lg font-label-sm hover:bg-surface-container-low transition-colors text-primary">Prev</button>
            <span className="px-4 py-2 font-body-md text-secondary">Page 1 of 130</span>
            <button className="px-6 py-2 bg-primary text-on-primary rounded-lg font-label-sm hover:opacity-90 transition-opacity">Next</button>
          </div>
        </section>

        {/* Verified Documents */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-24 bg-surface-container-low p-10 rounded-[32px] border border-outline-variant/50">
          <div className="text-center mb-12">
            <ShieldCheck className="w-12 h-12 text-tertiary-fixed-dim mx-auto mb-4" />
            <h2 className="font-display-lg-mobile md:text-[40px] text-primary font-bold mb-4">Verified & Government Recognised</h2>
            <p className="text-secondary font-body-md max-w-2xl mx-auto">Explore our comprehensive collection of verified certificates and official documents that showcase our credentials and achievements.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOCUMENTS.map((doc, i) => (
              <div key={i} className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm hover:border-primary/30 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold bg-secondary-container text-on-secondary-container px-2 py-1 rounded uppercase tracking-wider">{doc.type}</span>
                  <span className="flex items-center gap-1 text-[12px] text-green-600 font-bold bg-green-50 px-2 py-1 rounded-full border border-green-200">
                    <ShieldCheck className="w-3 h-3" /> Verified
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-body-md font-bold text-primary mb-1 leading-snug">{doc.title}</h4>
                    <p className="text-label-sm text-secondary mb-4 line-clamp-2">{doc.desc}</p>
                    <button className="flex items-center gap-1 text-primary font-label-sm hover:underline transition-all">
                      <Download className="w-4 h-4" /> View Document
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
