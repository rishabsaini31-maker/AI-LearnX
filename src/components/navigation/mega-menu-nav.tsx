'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Award, Video, TrendingUp, FolderGit2, Star, 
  MessageSquare, BookOpen, Code2, MonitorPlay, 
  Trophy, Briefcase, GraduationCap 
} from 'lucide-react'

// Content Data
const RESOURCES_MENU = [
  { title: "Certificates", description: "Access and download your earned course, project, and internship certificates with QR verification.", icon: Award, href: "#" },
  { title: "Live Sessions", description: "Join interactive mentor sessions, participate in coding workshops, and stay ahead.", icon: Video, href: "#" },
  { title: "Stipend Wall", description: "Meet our top-performing interns who secured stipend-based internship opportunities.", icon: TrendingUp, href: "#" },
  { title: "Student Projects", description: "Explore real-world projects built by AI LearnX students with live demos.", icon: FolderGit2, href: "/projects" },
  { title: "Success Stories", description: "Discover inspiring student journeys, career transformations, and industry placements.", icon: Star, href: "#" },
  { title: "Testimonials", description: "Read authentic reviews and experiences shared by students, interns, and mentors.", icon: MessageSquare, href: "#" },
  { title: "Mentor Chat", description: "Connect directly with experienced mentors for personalized guidance and support.", icon: GraduationCap, href: "#" },
  { title: "Blogs", description: "Read AI tutorials, interview tips, technology updates, and software engineering articles.", icon: BookOpen, href: "#" },
]

const EVENTS_MENU = [
  { title: "Hackathons", description: "Participate in real-world hackathons, build innovative products, and win exciting prizes.", icon: Code2, href: "#" },
  { title: "Webinars", description: "Attend live expert sessions, industry talks, and career guidance events.", icon: MonitorPlay, href: "#" },
  { title: "Coding Challenges", description: "Weekly coding contests. Leaderboard. Rewards. Badges.", icon: Trophy, href: "#" },
  { title: "Live Workshops", description: "Hands-on coding sessions. Real project implementation. Mentor guidance.", icon: Video, href: "#" },
  { title: "Career Events", description: "Resume reviews, interview preparation, hiring events, and networking.", icon: Briefcase, href: "#" },
]

export function MegaMenuNav() {
  const pathname = usePathname()
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const isLoggedIn = false // Mock state for logged out

  // Close menu on click outside or escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null)
      }
    }
    
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setActiveMenu(null)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <header 
      ref={navRef} 
      className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-xl border-b border-outline-variant/30 h-20 text-on-background"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="flex justify-between items-center px-margin-desktop h-full w-full max-w-container-max mx-auto">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center">
            <Image src="/logo1.PNG" alt="AI LearnX Logo" width={240} height={68} className="object-contain" priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-2 relative h-full items-center">
            
            {/* Resources Link */}
            <div 
              className="h-full flex items-center px-3"
              onMouseEnter={() => setActiveMenu('resources')}
            >
              <button
                className={`font-body-md transition-colors duration-200 focus:outline-none ${activeMenu === 'resources' ? 'text-on-background font-bold' : 'text-on-background/70 hover:text-on-background'}`}
                aria-expanded={activeMenu === 'resources'}
                aria-haspopup="true"
              >
                Resources
              </button>
            </div>

            {/* Events Link */}
            <div 
              className="h-full flex items-center px-3"
              onMouseEnter={() => setActiveMenu('events')}
            >
              <button
                className={`font-body-md transition-colors duration-200 focus:outline-none ${activeMenu === 'events' ? 'text-on-background font-bold' : 'text-on-background/70 hover:text-on-background'}`}
                aria-expanded={activeMenu === 'events'}
                aria-haspopup="true"
              >
                Events
              </button>
            </div>

            <Link 
              href="/our-credibility" 
              className={`px-3 font-body-md transition-colors duration-200 ${
                pathname === '/our-credibility' 
                  ? 'text-on-background font-bold border-b-2 border-on-background pb-1' 
                  : 'text-on-background/70 hover:text-on-background'
              }`} 
              onMouseEnter={() => setActiveMenu(null)}
            >
              Our Credibility
            </Link>
            <Link 
              href="/projects" 
              className={`px-3 font-body-md transition-colors duration-200 ${
                pathname === '/projects' 
                  ? 'text-on-background font-bold border-b-2 border-on-background pb-1' 
                  : 'text-on-background/70 hover:text-on-background'
              }`} 
              onMouseEnter={() => setActiveMenu(null)}
            >
              Projects
            </Link>
            <Link 
              href="/intern-portal" 
              className={`px-3 font-body-md transition-colors duration-200 ${
                pathname === '/intern-portal' 
                  ? 'text-on-background font-bold border-b-2 border-on-background pb-1' 
                  : 'text-on-background/70 hover:text-on-background'
              }`} 
              onMouseEnter={() => setActiveMenu(null)}
            >
              Intern Portal
            </Link>
          </nav>
        </div>

        {/* Right Side Tools */}
        <div className="flex items-center gap-6" onMouseEnter={() => setActiveMenu(null)}>
          <div className="flex items-center gap-4 text-on-background/70">
            <button className="material-symbols-outlined hover:text-on-background transition-colors" aria-label="Notifications">notifications</button>
            <button className="material-symbols-outlined hover:text-on-background transition-colors" aria-label="Shopping Cart">shopping_cart</button>
          </div>
          {isLoggedIn ? (
            <div className="h-10 w-10 rounded-full overflow-hidden border border-outline-variant relative cursor-pointer hover:ring-2 ring-primary/20 transition-all">
              <Image 
                className="w-full h-full object-cover" 
                alt="User Profile" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYM5jonINC_Yx3q5ZK9X-sLw07T91SJxOtEdUKOKm2qy5gWuZ085lvOHKc40undqFg0nNuF37kFvA0mzfaXEMlBc5QkZutcGXigHPnTvy7r7BVaLMJsOM4MCTKs1r5EJq3haY1vjecnTTgsRFBTNri0o4PVzwC5KHkBdDMeYbir_-PelwFsz1UGaAdIyci8zo41JnmNg8ZfBMj6J8fpNTLF1TYh7rA4Ifu-lVsYThc_YYrbAAL5Tw48w" 
                fill
              />
            </div>
          ) : (
            <Link 
              href="/login" 
              className="px-6 py-2.5 bg-black text-white rounded-xl font-label-md font-bold hover:bg-gray-900 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mega Menus Overlay */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-20 left-0 w-full bg-surface-container-lowest/90 backdrop-blur-2xl border-b border-outline-variant shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden"
          >
            <div className="max-w-container-max mx-auto px-margin-desktop py-10">
              
              {activeMenu === 'resources' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {RESOURCES_MENU.map((item, idx) => (
                    <Link key={idx} href={item.href} className="group p-4 rounded-xl hover:bg-surface-container-low transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-surface-container flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary text-primary transition-all duration-300 shadow-sm">
                          <item.icon className="w-6 h-6" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h4 className="font-body-md font-bold text-primary group-hover:text-primary transition-colors mb-1">{item.title}</h4>
                          <p className="font-label-sm text-secondary leading-relaxed line-clamp-3">{item.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {activeMenu === 'events' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {EVENTS_MENU.map((item, idx) => (
                    <Link key={idx} href={item.href} className="group p-5 rounded-2xl hover:bg-gradient-to-br from-surface-container-low to-surface-container-lowest border border-transparent hover:border-outline-variant transition-all duration-300 shadow-sm hover:shadow-md">
                      <div className="flex items-start gap-5">
                        <div className="h-14 w-14 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ease-out">
                          <item.icon className="w-7 h-7" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h4 className="font-headline-md text-[18px] font-bold text-primary mb-2">{item.title}</h4>
                          <p className="font-body-md text-secondary leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
