import React from 'react';

const CARDS = [
  {
    title: "Project Training + 100% Free Internship",
    subtitle: "No hidden charges or recurring fees",
    icon: "verified",
    items: [
      "LMS access & structured learning",
      "Mentor guidance & 1:1 support",
      "Real-world project onboarding",
      "Evaluation & certification",
      "Certificate issued upon completion",
      "Lifetime access to course materials"
    ],
    tag: "Training fee only"
  },
  {
    title: "Real-World Projects",
    subtitle: "Industry-relevant work, not just assignments",
    icon: "code_blocks",
    items: [
      "Full-stack web applications",
      "Data analytics dashboards",
      "Live project simulations",
      "Project screenshots & demos shared openly",
      "Work on actual client-level problems",
      "Build a portfolio that impresses recruiters"
    ],
    tag: "Career-building experience"
  },
  {
    title: "Real Students. Real Results.",
    subtitle: "Verified interns with authentic outcomes",
    icon: "groups",
    items: [
      "Student names & universities",
      "Public LinkedIn profiles",
      "Actual project outcomes",
      "Verify every success story yourself"
    ],
    tag: "100% transparent"
  },
  {
    title: "Industry-Recognized Certification",
    subtitle: "Credentials that actually mean something to employers",
    icon: "workspace_premium",
    items: [
      "Certificate issued only after successful evaluation",
      "Verification link included on every certificate",
      "Skills & project-based assessment criteria",
      "Shareable on LinkedIn & resumes",
      "Accepted across internships & entry-level roles",
      "No pay-for-certificate policy"
    ],
    tag: "Verified credentials"
  },
  {
    title: "Transparent & Verifiable Outcomes",
    subtitle: "Everything we offer can be independently verified",
    icon: "fact_check",
    items: [
      "Project screenshots & demos shared openly",
      "Internship is free — no paid internship traps",
      "Performance-based stipend, not fake guarantees",
      "Real projects, not PDF-based training",
      "No bond or lock-in periods",
      "Every certificate is publicly verifiable"
    ],
    tag: "Built on trust"
  },
  {
    title: "Dedicated Mentor Guidance",
    subtitle: "You're never left learning alone",
    icon: "menu_book",
    items: [
      "1:1 mentor doubt-clearing sessions",
      "Guidance on real-world problem solving",
      "Code & project reviews by industry mentors",
      "Continuous feedback throughout the internship",
      "Direct mentorship from industry professionals",
      "Personalized learning paths based on your goals"
    ],
    tag: "Mentor-led support"
  },
];

export function WhatYouGet() {
  return (
    <section className="bg-[#030712] py-20 px-gutter">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display-lg text-white font-extrabold mb-4">
            What You Get<br />
            With <span className="text-[#00d2ff]">AI LearnX</span>
          </h2>
          <p className="text-white/60 font-body-md max-w-2xl mx-auto">
            Real projects, mentorship, and performance-based outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
           {/* Tall Card (Left Column) */}
           <div className="lg:col-span-1 bg-gradient-to-b from-[#0a163a] to-[#050a1a] border border-[#1e3a8a]/50 rounded-[2rem] p-8 flex flex-col relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b82f6]/10 rounded-full blur-3xl group-hover:bg-[#3b82f6]/20 transition-colors"></div>
             
             <div className="w-12 h-12 rounded-2xl bg-[#3b82f6]/20 text-[#3b82f6] flex items-center justify-center mb-6">
               <span className="material-symbols-outlined">bolt</span>
             </div>
             
             <h3 className="font-title-lg text-white font-bold mb-2">Performance-Based Stipends</h3>
              <p className="text-white/60 font-label-sm mb-8">Earn up to ₹10,000 based on your performance</p>
             
             <div className="space-y-8 flex-grow">
               <ul className="space-y-4">
                 {[
                   "Paid for actual project contributions, not attendance",
                   "No dummy certificates or recorded-only internships",
                   "Stipend linked to skills, delivery & impact",
                   "Direct mentor evaluation on real-world output",
                    "Up to ₹10,000 based on performance milestones",
                   "Top performers get hiring & referral support"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-white/80 font-label-sm">
                     <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-1.5 flex-shrink-0"></span>
                     {item}
                   </li>
                 ))}
               </ul>

               <div>
                 <div className="flex items-center gap-2 text-white font-bold mb-4">
                   <span className="material-symbols-outlined text-[#3b82f6] text-[20px]">stars</span>
                   Who This Is For
                 </div>
                 <ul className="space-y-4">
                   {[
                     "Students serious about learning by doing",
                     "Freshers building a real, job-ready portfolio",
                     "Career switchers proving skills through projects",
                     "Self-driven learners (not passive certificate seekers)"
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-3 text-white/80 font-label-sm">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-1.5 flex-shrink-0"></span>
                       {item}
                     </li>
                   ))}
                 </ul>
               </div>

               <div>
                 <div className="flex items-center gap-2 text-white font-bold mb-2">
                   <span className="material-symbols-outlined text-[#3b82f6] text-[20px]">trophy</span>
                   What You&apos;ll Gain
                 </div>
                 <ul className="space-y-2">
                   {[
                     "Hands-on experience with real industry projects",
                     "A strong portfolio you can confidently show recruiters",
                     "Performance-based stipend based on real output",
                     "Mentor feedback that actually improves your skills"
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-3 text-white/80 font-label-sm">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-1.5 flex-shrink-0"></span>
                       {item}
                     </li>
                   ))}
                 </ul>
               </div>

               <div>
                 <div className="flex items-center gap-2 text-white font-bold mb-2">
                   <span className="material-symbols-outlined text-[#3b82f6] text-[20px]">radar</span>
                   Career & Hiring Support
                 </div>
                 <p className="text-white/60 font-label-sm mb-3">We help you convert skills into opportunities</p>
                 <ul className="space-y-2">
                   {[
                     "Resume & portfolio review",
                     "Interview preparation guidance",
                     "Hiring & referral support for top performers",
                     "Career roadmap planning with mentors",
                     "Job placement assistance for qualified interns",
                     "Access to exclusive job opportunities"
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-3 text-white/80 font-label-sm">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-1.5 flex-shrink-0"></span>
                       {item}
                     </li>
                   ))}
                 </ul>
               </div>
             </div>

             <div className="pt-6 mt-6 border-t border-[#1e3a8a]/30">
               <span className="inline-block px-4 py-2 rounded-full border border-[#3b82f6] text-[#3b82f6] font-label-sm font-bold bg-[#3b82f6]/10">
                 Earned, not promised
               </span>
             </div>
           </div>

           {/* Right Columns Grid */}
           <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-max">
             {CARDS.map((card, idx) => (
               <div key={idx} className="bg-[#0a0f1c] border border-white/10 rounded-[2rem] p-8 flex flex-col hover:border-white/20 transition-colors">
                 <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-[#3b82f6] flex items-center justify-center mb-6">
                   <span className="material-symbols-outlined">{card.icon}</span>
                 </div>
                 <h3 className="font-title-lg text-white font-bold mb-2 text-lg">{card.title}</h3>
                 <p className="text-white/60 font-label-sm mb-6">{card.subtitle}</p>
                 
                 <ul className="space-y-4 flex-grow mb-8">
                   {card.items.map((item, i) => (
                     <li key={i} className="flex items-start gap-3 text-white/80 font-label-sm">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-1.5 flex-shrink-0"></span>
                       {item}
                     </li>
                   ))}
                 </ul>
                 
                 <div className="mt-auto pt-6 border-t border-white/10">
                   <span className="inline-block px-4 py-2 rounded-full border border-white/20 text-white/60 font-label-sm font-bold bg-white/5">
                     {card.tag}
                   </span>
                 </div>
               </div>
             ))}
           </div>

        </div>
      </div>
    </section>
  );
}
