'use client'

import React from 'react'
import Link from 'next/link'
import { ScrollVideoScrub } from '@/components/home/scroll-video-scrub'
import { MegaMenuNav } from '@/components/navigation/mega-menu-nav'
import { Footer } from '@/components/layout/footer'
import { SuccessStories } from '@/components/home/success-stories'
import { Comparison } from '@/components/home/comparison'
import { WhatYouGet } from '@/components/home/what-you-get'
import { SlideSection } from '@/components/home/slide-section'

export function HomeContent() {
  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen">
      <MegaMenuNav />

      {/* Hero Video Section */}
      <ScrollVideoScrub src="/hero-video.mp4" />

      {/* ===== SECTION 1: Hero Main Section - negative margin-top to overlap sticky container end seamlessly ===== */}
      <SlideSection variant="slide-up" className="relative pt-8 pb-16 px-gutter overflow-hidden flex flex-col justify-center -mt-[60vh] z-20 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <SlideSection variant="slide-left" delay={150}>
            <div className="space-y-6">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full font-label-md text-label-md">Next-Gen Education Platform</span>
              <h1 className="font-display-lg text-display-lg text-on-background">Master AI <span className="gradient-text">Vibe Coding</span> &amp; Build Real Projects</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Learn practical software development by building real-world applications with mentor guidance, AI-powered workflows, and project-based learning.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="primary-btn text-white px-10 py-6 rounded-xl font-label-md text-label-md font-bold shadow-lg">Start Learning</button>
                <button className="bg-surface border border-outline-variant/30 text-on-surface px-10 py-6 rounded-xl font-label-md text-label-md font-bold hover:bg-surface-container-low transition-all">Explore Programs</button>
              </div>
            </div>
          </SlideSection>

          <SlideSection variant="slide-right" delay={300}>
            <div className="relative hidden lg:block">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="glass-card rounded-2xl p-6 floating relative z-10">
                <div className="flex items-center gap-3 border-b border-outline-variant/20 pb-3 mb-3">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-caption font-caption opacity-50">app.py — main_feature</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed text-on-surface-variant overflow-x-auto">
                  <span className="text-secondary">def</span> <span className="text-primary">optimize_workflow</span>(ai_agent, tasks):{"\n"}
                  {"    "}<span className="text-on-surface-variant/60"># AI LearnX Vibe Coding Pattern</span>{"\n"}
                  {"    "}results = []{"\n"}
                  {"    "}<span className="text-secondary">for</span> task <span className="text-secondary">in</span> tasks:{"\n"}
                  {"        "}insight = ai_agent.analyze(task){"\n"}
                  {"        "}results.append(insight.code){"\n"}
                  {"    "}<span className="text-secondary">return</span> results
                </pre>
              </div>
              <div className="absolute -bottom-10 right-0 glass-card rounded-2xl p-5 floating [animation-delay:2s] w-60 z-20 shadow-xl border border-white/60">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">rocket_launch</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md font-bold">Project Live</p>
                    <p className="text-caption font-caption text-on-surface-variant">SaaS Dashboard v1.2</p>
                  </div>
                </div>
                <div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[85%]"></div>
                </div>
              </div>
            </div>
          </SlideSection>
        </div>
      </SlideSection>

      {/* ===== SECTION 2: Stats Bar ===== */}
      <SlideSection variant="fade-scale" className="bg-surface-container-lowest border-y border-outline-variant/20 py-10">
        <div className="max-w-7xl mx-auto px-gutter grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <SlideSection variant="slide-up" delay={0}>
            <div>
              <p className="font-headline-md text-headline-md text-primary font-bold">10K+</p>
              <p className="font-label-md text-label-md text-on-surface-variant">Global Students</p>
            </div>
          </SlideSection>
          <SlideSection variant="slide-up" delay={100}>
            <div>
              <p className="font-headline-md text-headline-md text-primary font-bold">200+</p>
              <p className="font-label-md text-label-md text-on-surface-variant">Industry Projects</p>
            </div>
          </SlideSection>
          <SlideSection variant="slide-up" delay={200}>
            <div>
              <p className="font-headline-md text-headline-md text-primary font-bold">50+</p>
              <p className="font-label-md text-label-md text-on-surface-variant">Expert Mentors</p>
            </div>
          </SlideSection>
          <SlideSection variant="slide-up" delay={300}>
            <div>
              <p className="font-headline-md text-headline-md text-primary font-bold">95%</p>
              <p className="font-label-md text-label-md text-on-surface-variant">Completion Rate</p>
            </div>
          </SlideSection>
        </div>
      </SlideSection>

      {/* ===== SECTION 3: Engineered for Success ===== */}
      <SlideSection variant="flip-up" className="py-16 px-gutter max-w-7xl mx-auto">
        <SlideSection variant="fade-scale" delay={0}>
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-background mb-6">Engineered for Success</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Our ecosystem combines cutting-edge AI tools with human mentorship to accelerate your development career.</p>
          </div>
        </SlideSection>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <SlideSection variant="slide-left" delay={100}>
            <div className="md:col-span-2 lg:row-span-2 glass-card rounded-[32px] p-10 flex flex-col justify-between overflow-hidden relative group h-full">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
                </div>
                <h3 className="font-title-lg text-title-lg mb-3">AI Vibe Coding</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Master the future of programming. Learn how to steer LLMs, prompt engineering for complex architectures, and maintain code quality with AI assistance.</p>
              </div>
              <div className="mt-16 relative z-10">
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-surface-dim" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXE3vJiHbHUr0dhTXRhOS_48xdrHOud0c-r_7Nn7tEQBq99y4yEADs6x5D6KLd8DBTMbhUALf_DPSP7yC5EyLG33LneYhCFs1vQ1I1USpDC9sdvccPhyxRcIIHTYd4Lc34Im-W1dCWVQrpe6IiHxmbZZ9W4cs774IZFUv8SZ7Z2qDPtsk5OtoZdVD3QGAQLKefqj-kVkngxtwiy8wf1gWja3eglSSy8hWdePAVrcxyzXyVNjXjllj0')` }}></div>
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-surface-dim" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBA3_PXJn-qZGG4KWiLsLQZql-oSsytYhXq0wnDJuNeWM4cpBQyUl-ZoFpe5o1TwWxsyVWVNCnq8me_RgzW862KTBP2aUMh_EN-gnHITLafPCl9YaAyBOpKNfW11ZhwsKdtW3oD6tK75NiI3W1oXHGesBV0ET0OIPcQafD77Zu4IUBM2bZWtO-nXIqb4K61PANYbKE8KP9PSA011IHRg-7q-zffOVBQrcl-TN71pF1h8GCQg1ItbILu')` }}></div>
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-surface-dim" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBwCNBE96D63csLJDeYRxrDbEHsLJGuTf4FQOhrpLu1NroPlE3zcNfm7n68TDX-FJ071nI21_5tphsJM26lKuO05rrvRa4RYDqL_62-R-yVEsxSroMJ9vyJAA6y9LBqXMDPHFzJSjrE78weNnpscEdqWPw9kd5JcyPXhgFLE5L4GHlmy2WOQMXkw3rrFCYGjeQuOamhIeHTq0b9QDEvKuuK1wFTCDGo1wTHSspE_qUehEaVHcbOgf52')` }}></div>
                </div>
                <p className="text-caption font-caption mt-3 text-on-surface-variant">Join 5,000+ developers mastering AI tools.</p>
              </div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            </div>
          </SlideSection>

          <SlideSection variant="slide-up" delay={150}>
            <div className="glass-card rounded-[32px] p-6 bento-shadow hover:translate-y-[-4px] transition-transform duration-300">
              <span className="material-symbols-outlined text-secondary mb-3">rocket</span>
              <h4 className="font-label-md text-label-md font-bold mb-1">Real Projects</h4>
              <p className="text-caption font-caption text-on-surface-variant">Build production-ready apps from day one.</p>
            </div>
          </SlideSection>

          <SlideSection variant="slide-up" delay={250}>
            <div className="glass-card rounded-[32px] p-6 bento-shadow hover:translate-y-[-4px] transition-transform duration-300">
              <span className="material-symbols-outlined text-tertiary mb-3">person_search</span>
              <h4 className="font-label-md text-label-md font-bold mb-1">Mentor Reviews</h4>
              <p className="text-caption font-caption text-on-surface-variant">1-on-1 code reviews from industry experts.</p>
            </div>
          </SlideSection>

          <SlideSection variant="slide-up" delay={350}>
            <div className="glass-card rounded-[32px] p-6 bento-shadow hover:translate-y-[-4px] transition-transform duration-300">
              <span className="material-symbols-outlined text-primary mb-3">work</span>
              <h4 className="font-label-md text-label-md font-bold mb-1">Interview Prep</h4>
              <p className="text-caption font-caption text-on-surface-variant">Master system design and DSA with AI.</p>
            </div>
          </SlideSection>

          <SlideSection variant="slide-up" delay={450}>
            <div className="glass-card rounded-[32px] p-6 bento-shadow hover:translate-y-[-4px] transition-transform duration-300">
              <span className="material-symbols-outlined text-secondary mb-3">school</span>
              <h4 className="font-label-md text-label-md font-bold mb-1">Certificates</h4>
              <p className="text-caption font-caption text-on-surface-variant">Verifiable proof of your tech expertise.</p>
            </div>
          </SlideSection>

          <SlideSection variant="slide-right" delay={300}>
            <div className="md:col-span-2 glass-card rounded-[32px] p-10 flex items-center gap-10">
              <div className="hidden sm:block">
                <img className="w-32 h-32 rounded-2xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuDwlKkja83_8zc69F1J3mtrlzpd4jwrZvUNKya7ROM_Nf3sDVAGYhJKyBXQ-MHzCEKKwOnYu8vNCeGPwt_mvbfvrnKC9pRnfMsG-XJPAFilMtbfkZlbaw2FQsLQ1ar55F4pyoyzZ_x84kou_0nrHg2tykgJ1BgNXjXcM0ew_PsaI_h1HtMokZn298xW95PtrjZv3xx7eSYRw2rNnjYT8SM_RlMPXyBTEV4bAep6Usx1wFF-Cvkcjg"/>
              </div>
              <div>
                <h3 className="font-title-lg text-title-lg mb-3">Internship Pipeline</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">Top performers get direct access to our 50+ hiring partners and internal startup lab.</p>
                <button className="text-primary font-bold hover:underline">See how it works →</button>
              </div>
            </div>
          </SlideSection>
        </div>
      </SlideSection>

      {/* ===== SECTION 4: Road to Industry Ready ===== */}
      <SlideSection variant="slide-up" className="py-16 bg-surface-container-low px-gutter overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SlideSection variant="fade-scale" delay={0}>
            <h2 className="font-headline-lg text-headline-lg text-center mb-16">Your Road to <span className="text-primary">Industry Ready</span></h2>
          </SlideSection>
          <div className="relative py-6">
            <div className="hidden lg:flex justify-between relative">
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-outline-variant/30 -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-0 h-[2px] timeline-line -translate-y-1/2 transition-all duration-1000 w-[75%]"></div>
              {['Enroll', 'Learn', 'Build', 'Submit', 'Review', 'Deploy'].map((step, idx) => (
                <SlideSection key={idx} variant="slide-up" delay={idx * 120}>
                  <div className="relative flex flex-col items-center gap-6 z-10 w-32">
                    <div className={`w-12 h-12 rounded-full ${idx === 5 ? 'bg-surface text-primary border-2 border-primary' : 'bg-primary text-white'} flex items-center justify-center font-bold`}>{idx + 1}</div>
                    <p className="font-label-md text-label-md font-bold text-center">{step}</p>
                  </div>
                </SlideSection>
              ))}
            </div>
          </div>
        </div>
      </SlideSection>

      {/* ===== SECTION 5: Explore Our Programs ===== */}
      <SlideSection variant="zoom-in" className="py-16 px-gutter max-w-7xl mx-auto">
        <SlideSection variant="slide-up" delay={0}>
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-background">Explore Our Programs</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Deep-dive cohorts starting every week.</p>
            </div>
            <button className="hidden md:flex items-center gap-3 text-primary font-bold group">
              View all courses <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </SlideSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <SlideSection variant="slide-left" delay={100}>
            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden bento-shadow group border border-transparent hover:border-primary/20 transition-all h-full">
              <div className="h-56 relative overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAooK2IPIDmuR-slW5d9ot5W8YgiKrG1RjdYgHPzqw7E-ViTLCAVTC_gl1UEa88_DeuRRo19xwjTzxYkzOh2l5KnzgjQLywAaxUTYskxiBZc03FltzFzWnH-tino6HXcfFs7l5eV6yT55QVi9ah-2s4evGFslU9ZvJxLRr-k6IM3NljmK5THsqm0QPtU7Hwbq87QLUyDXD7c9VRlrDz-5w8aX-gBh6KoQxhpBRdvJI4WkChsQtx0hls"/>
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-lg text-caption font-bold">Bestseller</div>
              </div>
              <div className="p-10">
                <span className="text-caption font-caption text-secondary font-bold uppercase tracking-wider">AI Engineering</span>
                <h3 className="font-title-lg text-title-lg my-3">Mastering Vibe Coding with GPT-4o</h3>
                <p className="text-caption font-caption text-on-surface-variant mb-6">Build 5 production apps including a custom SaaS and a real-time AI agent.</p>
                <button className="bg-primary/5 text-primary px-6 py-3 rounded-xl font-bold w-full hover:bg-primary hover:text-white transition-colors">Enroll Now — ₹499</button>
              </div>
            </div>
          </SlideSection>

          <SlideSection variant="slide-up" delay={200}>
            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden bento-shadow group border border-transparent hover:border-primary/20 transition-all h-full">
              <div className="h-56 relative overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuvhcXAodMQGEPawUqweSanD-SSKv6wqYsiLxLxqIxEiiKXG5EbdYJclbS8i94Fe5WBAQPX6RtJi5EqaxkT4iGoymm5WrA3bSS_BBZAdPj2kzWQbNcIlcHot3FE_rIOJKEW4iac93g4u2PZRWHmvSophfabxOXAyldS0LCZTyS8qviWMklIZlMPnNU8_ZsuXSKkf5HvZ2O8XB1yDo3zdn1dF187cH1x4o7DQGYJCD0VdK-9FNJFOCR"/>
                <div className="absolute top-4 left-4 bg-tertiary text-white px-3 py-1 rounded-lg text-caption font-bold">Advanced</div>
              </div>
              <div className="p-10">
                <span className="text-caption font-caption text-tertiary font-bold uppercase tracking-wider">Fullstack Dev</span>
                <h3 className="font-title-lg text-title-lg my-3">The Modern T3 Stack: AI-First Approach</h3>
                <p className="text-caption font-caption text-on-surface-variant mb-6">Leverage Next.js, TypeScript, Tailwind and AI tools to build scalable web architectures.</p>
                <button className="bg-primary/5 text-primary px-6 py-3 rounded-xl font-bold w-full hover:bg-primary hover:text-white transition-colors">Enroll Now — ₹649</button>
              </div>
            </div>
          </SlideSection>

          <SlideSection variant="slide-right" delay={300}>
            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden bento-shadow group border border-transparent hover:border-primary/20 transition-all h-full">
              <div className="h-56 relative overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTEHfc35j0o-lz9f2TT4azGR4hQG7-m2QRtByiP5xyfFjKGCWVJookiWlFIlbZRW4-NrfSvOZg4vF3RA-1cPD0Sc3TRyF3oAVMKgnYPHID3OeWVy8vR2-NiiOLo2RC0i30xLmSEDMyBn_WQOOe5sE_GBVgpuHI4b5Nw9ifcqo_zkBkN7A7Sf8aqNv8PNaOqA6tJmqX6byhOPkFSxyUTcCRXeVeJU1Z5m8gLyV539Cdn0fIBBqaPwtr"/>
                <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-lg text-caption font-bold">Foundation</div>
              </div>
              <div className="p-10">
                <span className="text-caption font-caption text-secondary font-bold uppercase tracking-wider">Python + AI</span>
                <h3 className="font-title-lg text-title-lg my-3">Backend Mastery &amp; AI Orchestration</h3>
                <p className="text-caption font-caption text-on-surface-variant mb-6">Build APIs and chain LLMs using LangChain and FastAPI.</p>
                <button className="bg-primary/5 text-primary px-6 py-3 rounded-xl font-bold w-full hover:bg-primary hover:text-white transition-colors">Enroll Now — ₹599</button>
              </div>
            </div>
          </SlideSection>
        </div>
      </SlideSection>

      {/* ===== SECTION 6: Built by Graduates ===== */}
      <SlideSection variant="slide-right" className="py-16 bg-on-background text-surface px-gutter">
        <div className="max-w-7xl mx-auto">
          <SlideSection variant="fade-scale" delay={0}>
            <h2 className="font-headline-lg text-headline-lg mb-16 text-center">Built by our <span className="gradient-text">Graduates</span></h2>
          </SlideSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <SlideSection variant="slide-left" delay={100}>
              <div className="relative group rounded-[32px] overflow-hidden">
                <img className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9TGAFj2kxw-aNNAx7o4GIYnkAl8sYQYHwzFQmuUrRlk9aBlexIq7sP2cIa-5jxrecBUrI70jjuqgqHAemNtMavFSwSQsKv-JZuvRGhO7LIye0jlKtuA18nRnkAKKXzE1NfWL_yqkzqYzAq_gOdMhybfE73m_qUN8cCnpHSnFLwKHliKEM4F8P1zYitnpSvnei9JL-NGi7I7K8dAgglQ4ERfULhP-cJWmG9r_UY558E7hk91cP0T9s"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
                  <h4 className="font-headline-md text-headline-md">TradeMind AI</h4>
                  <p className="font-body-md text-body-md text-surface/70 mt-3">A predictive trading dashboard that uses sentiment analysis on social media to forecast stock trends.</p>
                </div>
              </div>
            </SlideSection>

            <SlideSection variant="slide-right" delay={250}>
              <div className="relative group rounded-[32px] overflow-hidden">
                <img className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOHjz47v-zwRrlFyynYdJEdHJJTBGfhBtnjJs4RvMgd4YCDnOlt1RIVJKPs29H4ujx04tu4VhrZss7sp5Kn_aQx32ByRPqw24TOjuSBhasV_iO9k07mQiAfBO0UoKWxw5VdoXP5uvgRiPeTdjhGySFPWzcY1OA579Ildun8FdP-q4MW2LJJzLW1zRZaYlzU5EbF5GA1rfJZghp_NHKs1bntop9ws9y2TtMwLLoIf7vPrZbpBsaZieO"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
                  <h4 className="font-headline-md text-headline-md">FlowState</h4>
                  <p className="font-body-md text-body-md text-surface/70 mt-3">An AI-powered productivity tool that automatically categorizes tasks based on user behavior.</p>
                </div>
              </div>
            </SlideSection>
          </div>
        </div>
      </SlideSection>

      {/* ===== SECTION 7, 8, 9: Success Stories, Comparison, What You Get ===== */}
      <SlideSection variant="slide-up">
        <SuccessStories />
      </SlideSection>

      <SlideSection variant="flip-up">
        <Comparison />
      </SlideSection>

      <SlideSection variant="zoom-in">
        <WhatYouGet />
      </SlideSection>

      {/* ===== SECTION 10: Pricing ===== */}
      <SlideSection variant="flip-up" className="py-16 px-gutter max-w-7xl mx-auto">
        <SlideSection variant="fade-scale" delay={0}>
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg mb-6">Simple, Value-Driven Pricing</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Choose the path that fits your career goals.</p>
          </div>
        </SlideSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <SlideSection variant="slide-left" delay={100}>
            <div className="p-10 rounded-[32px] border border-outline-variant/30 flex flex-col h-full">
              <h3 className="font-title-lg text-title-lg mb-1">Starter</h3>
              <p className="text-caption text-on-surface-variant mb-6">For curious beginners</p>
              <span className="text-4xl font-bold mb-6">₹199</span>
              <button className="w-full border border-primary text-primary py-6 rounded-xl font-bold hover:bg-primary/5 mt-auto">Get Started</button>
            </div>
          </SlideSection>

          <SlideSection variant="fade-scale" delay={200}>
            <div className="p-10 rounded-[32px] border-2 border-primary bg-primary/5 flex flex-col relative scale-105 z-10 shadow-xl h-full">
              <h3 className="font-title-lg text-title-lg mb-1">Career Launch</h3>
              <p className="text-caption text-on-surface-variant mb-6">Complete bootcamp experience</p>
              <span className="text-4xl font-bold mb-6">₹1,499</span>
              <button className="w-full primary-btn text-white py-6 rounded-xl font-bold mt-auto">Enroll Now</button>
            </div>
          </SlideSection>

          <SlideSection variant="slide-right" delay={300}>
            <div className="p-10 rounded-[32px] border border-outline-variant/30 flex flex-col h-full">
              <h3 className="font-title-lg text-title-lg mb-1">Pro Membership</h3>
              <p className="text-caption text-on-surface-variant mb-6">Ongoing skill growth</p>
              <span className="text-4xl font-bold mb-6">₹49/mo</span>
              <button className="w-full border border-primary text-primary py-6 rounded-xl font-bold hover:bg-primary/5 mt-auto">Join Pro</button>
            </div>
          </SlideSection>
        </div>
      </SlideSection>

      <Footer />
    </div>
  )
}
