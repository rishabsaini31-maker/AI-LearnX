'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MegaMenuNav } from '@/components/navigation/mega-menu-nav';
import { Footer } from '@/components/layout/footer';

const STUDENTS = [
  {
    name: "Harsh Agarwal",
    company: "Tata Consultancy Services (TCS)",
    role: "Backend Engineer (ASE)",
    category: "Web Development",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Ankit Singh",
    company: "Infosys",
    role: "Frontend Web Developer",
    category: "Front-End Web Development",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Abinaya B",
    company: "Zoho",
    role: "Web Developer",
    category: "Web Development",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Dhruvi Patel",
    company: "Indeed",
    role: "Front-end Web Developer",
    category: "Front-End Web Development",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Chandala Devi Sri Prasad",
    company: "Tech Mahindra",
    role: "Operations Lead",
    category: "Web Development",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Saurabh Kumar",
    company: "JS Systech",
    role: "Backend Developer",
    category: "Web Development",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Sagar Torit Bera",
    company: "Fornsec Solutions",
    role: "VAPT",
    category: "Cybersecurity",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Pallavi Pokala",
    company: "Code Byter",
    role: "Software Tester",
    category: "Software Testing",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Aryan Hooda",
    company: "Isha Immigration",
    role: "Web Developer",
    category: "Web Development",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80",
  },
];

const COMPANIES = [
  "Tata Consultancy Services (TCS)",
  "Infosys",
  "Zoho",
  "Indeed",
  "Tech Mahindra",
  "Fornsec Solutions",
  "Nexthub Technology",
  "JS Systech",
  "Isha Immigration",
  "Code Byter",
];

const CATEGORIES = ["All", "Web Development", "Front-End Web Development", "Cybersecurity", "Software Testing"];

export default function SuccessStoriesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStudents = activeCategory === "All" 
    ? STUDENTS 
    : STUDENTS.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-surface">
      <MegaMenuNav />
      <div className="h-20"></div>
      {/* Hero Section */}
      <section className="py-16 px-gutter">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-on-background mb-4">
              Transform Your Career Today
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Success Stories That Inspire
            </h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto mb-12">
              Discover how our students transformed their careers through our comprehensive training program and landed dream jobs at top companies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/30">
                <p className="text-4xl font-bold text-primary mb-2">8,000+</p>
                <p className="text-on-surface-variant font-body-md">Students Trained</p>
              </div>
              <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/30">
                <p className="text-4xl font-bold text-primary mb-2">50+</p>
                <p className="text-on-surface-variant font-body-md">Students Earned Stipend</p>
              </div>
              <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/30">
                <p className="text-4xl font-bold text-primary mb-2">98%</p>
                <p className="text-on-surface-variant font-body-md">Completion Rate</p>
              </div>
            </div>

            {/* Our Placed Students */}
            <div className="mb-16 mt-16">
              <h3 className="text-2xl font-bold text-on-background mb-2 text-center">Our Placed Students</h3>
              <p className="text-on-surface-variant text-center font-body-md mb-8 max-w-2xl mx-auto">
                AI LearnX has empowered learners to transform their careers. Meet the talented individuals who have successfully transitioned into top roles at leading companies.
              </p>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-full font-label-md font-bold transition-all cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-surface border border-outline-variant text-on-surface hover:border-primary/50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Students Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStudents.map((student, idx) => (
                  <div key={idx} className="bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/30 hover:border-primary/30 transition-all hover:shadow-lg group text-left">
                    <div className="relative h-48 bg-surface-container overflow-hidden">
                      <Image 
                        src={student.img} 
                        alt={student.name} 
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full font-label-sm font-bold text-xs shadow-md">
                        Successfully Placed
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-label-lg font-bold text-on-background mb-1">{student.name}</h4>
                      <p className="text-primary font-bold text-sm mb-1">{student.company}</p>
                      <p className="text-on-surface-variant text-sm mb-3">{student.role}</p>
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full font-label-sm font-bold text-xs">
                        {student.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Students Work At */}
            <div className="text-center mb-16">
              <h3 className="text-2xl font-bold text-on-background mb-2">Our Students Work At</h3>
              <p className="text-on-surface-variant font-body-md mb-8">
                Leading companies trust our training program and hire our talented students.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {COMPANIES.map((company, idx) => (
                  <div 
                    key={idx} 
                    className="bg-surface-container-low px-6 py-3 rounded-xl border border-outline-variant/30 font-label-md font-bold text-on-surface hover:border-primary/30 transition-colors"
                  >
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-gutter">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#2a4ce0] to-[#4568f5] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden text-white shadow-xl">
            <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="relative z-10 text-left">
              <h3 className="text-2xl md:text-3xl font-extrabold mb-3">Ready to Write Your Success Story?</h3>
              <p className="font-body-md text-white/80 max-w-lg">
                Join our program today and take the first step towards landing your dream job at a top company.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
              <Link href="/signup" className="bg-white text-primary px-8 py-3.5 rounded-xl font-label-md font-bold hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap">
                Enroll Now
              </Link>
              <Link href="/projects" className="border-2 border-white/40 text-white px-8 py-3.5 rounded-xl font-label-md font-bold hover:bg-white/10 transition-all whitespace-nowrap">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
