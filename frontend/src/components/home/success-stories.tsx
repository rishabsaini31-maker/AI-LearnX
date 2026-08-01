import React from 'react';

const STORIES = [
  {
    name: "Sowjanya Shankari",
    track: "Cybersecurity",
    project: "Penetration Testing Tool",
    duration: "2 Months",
    stipend: "₹10,000",
    month: "May 2026",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTEHfc35j0o-lz9f2TT4azGR4hQG7-m2QRtByiP5xyfFjKGCWVJookiWlFIlbZRW4-NrfSvOZg4vF3RA-1cPD0Sc3TRyF3oAVMKgnYPHID3OeWVy8vR2-NiiOLo2RC0i30xLmSEDMyBn_WQOOe5sE_GBVgpuHI4b5Nw9ifcqo_zkBkN7A7Sf8aqNv8PNaOqA6tJmqX6byhOPkFSxyUTcCRXeVeJU1Z5m8gLyV539Cdn0fIBBqaPwtr"
  },
  {
    name: "Soham Madhav Salunke",
    track: "Data Science",
    project: "ML Prediction Model",
    duration: "3 Months",
    stipend: "₹10,000",
    month: "April 2026",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuDwlKkja83_8zc69F1J3mtrlzpd4jwrZvUNKya7ROM_Nf3sDVAGYhJKyBXQ-MHzCEKKwOnYu8vNCeGPwt_mvbfvrnKC9pRnfMsG-XJPAFilMtbfkZlbaw2FQsLQ1ar55F4pyoyzZ_x84kou_0nrHg2tykgJ1BgNXjXcM0ew_PsaI_h1HtMokZn298xW95PtrjZv3xx7eSYRw2rNnjYT8SM_RlMPXyBTEV4bAep6Usx1wFF-Cvkcjg"
  },
  {
    name: "Kirandeep Kaur",
    track: "Data Science",
    project: "Data Analytics Dashboard",
    duration: "2 Months",
    stipend: "₹10,000",
    month: "May 2026",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXE3vJiHbHUr0dhTXRhOS_48xdrHOud0c-r_7Nn7tEQBq99y4yEADs6x5D6KLd8DBTMbhUALf_DPSP7yC5EyLG33LneYhCFs1vQ1I1USpDC9sdvccPhyxRcIIHTYd4Lc34Im-W1dCWVQrpe6IiHxmbZZ9W4cs774IZFUv8SZ7Z2qDPtsk5OtoZdVD3QGAQLKefqj-kVkngxtwiy8wf1gWja3eglSSy8hWdePAVrcxyzXyVNjXjllj0"
  },
  {
    name: "Adithya Raj",
    track: "Cybersecurity",
    project: "Network Security Audit",
    duration: "2 Months",
    stipend: "₹10,000",
    month: "April 2026",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBA3_PXJn-qZGG4KWiLsLQZql-oSsytYhXq0wnDJuNeWM4cpBQyUl-ZoFpe5o1TwWxsyVWVNCnq8me_RgzW862KTBP2aUMh_EN-gnHITLafPCl9YaAyBOpKNfW11ZhwsKdtW3oD6tK75NiI3W1oXHGesBV0ET0OIPcQafD77Zu4IUBM2bZWtO-nXIqb4K61PANYbKE8KP9PSA011IHRg-7q-zffOVBQrcl-TN71pF1h8GCQg1ItbILu"
  }
];

export function SuccessStories() {
  return (
    <section className="py-16 px-gutter bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full font-label-md font-bold mb-6">
          <span className="material-symbols-outlined text-sm">school</span>
          STUDENT SUCCESS STORIES
        </div>
        <h2 className="text-3xl md:text-5xl font-display-lg text-center text-on-background font-extrabold mb-4 leading-tight">
          Students Who Successfully Completed<br />
          Projects & <span className="text-[#00d2ff]">Received Stipend</span>
        </h2>
        <p className="text-on-surface-variant text-center font-body-md mb-10">
          Real learners. Real projects. Real outcomes.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <div className="flex items-center gap-2 bg-surface border border-outline-variant rounded-full px-5 py-2 font-label-md text-on-surface shadow-sm hover:shadow-md transition-shadow cursor-default">
            💻 Real-Time Projects
          </div>
          <div className="flex items-center gap-2 bg-surface border border-outline-variant rounded-full px-5 py-2 font-label-md text-on-surface shadow-sm hover:shadow-md transition-shadow cursor-default">
            ✅ Mentor Guided
          </div>
          <div className="flex items-center gap-2 bg-surface border border-outline-variant rounded-full px-5 py-2 font-label-md text-on-surface shadow-sm hover:shadow-md transition-shadow cursor-default">
            👥 Skill Development
          </div>
          <div className="flex items-center gap-2 bg-surface border border-outline-variant rounded-full px-5 py-2 font-label-md text-on-surface shadow-sm hover:shadow-md transition-shadow cursor-default">
            💸 Stipend Opportunities
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 w-full">
          {STORIES.map((story, idx) => (
            <div key={idx} className="bg-surface border border-outline-variant rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300 flex flex-col group">
              <div className="relative aspect-[4/3] w-full bg-surface-container overflow-hidden">
                <img src={story.img} alt={story.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[#22c55e] px-3 py-1 rounded-full font-label-sm font-bold flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse"></span>
                  Stipend Received
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white/90">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-label-md font-bold text-on-background">{story.name}</h3>
                    <div className="flex items-center gap-1.5 mt-1 text-[#3b82f6]">
                      <span className="material-symbols-outlined text-[16px]">security</span>
                      <span className="font-label-sm font-bold">{story.track}</span>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded bg-[#0a66c2]/10 flex items-center justify-center text-[#0a66c2]">
                    <span className="font-bold text-[10px]">in</span>
                  </div>
                </div>
                
                <div className="space-y-3 mt-auto">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-on-surface-variant/60 font-bold uppercase text-[10px] tracking-wider w-20">Project</span>
                    <span className="font-bold text-on-background text-right leading-tight">{story.project}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-on-surface-variant/60 font-bold uppercase text-[10px] tracking-wider w-20">Duration</span>
                    <span className="font-bold text-on-background text-right">{story.duration}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-on-surface-variant/60 font-bold uppercase text-[10px] tracking-wider w-20">Stipend</span>
                    <span className="font-bold text-[#22c55e] text-right">{story.stipend}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-on-surface-variant/60 font-bold uppercase text-[10px] tracking-wider w-20">Month</span>
                    <span className="font-bold text-on-background text-right">{story.month}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <button className="flex items-center gap-2 border-2 border-primary/20 text-primary hover:bg-primary/5 px-8 py-3 rounded-full font-label-md font-bold transition-colors mb-12">
          View All Success Stories <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>

        {/* Disclaimer Banner */}
        <div className="w-full bg-surface border border-outline-variant/50 shadow-sm rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 justify-between mb-6">
          <div className="flex items-start gap-4 max-w-lg">
            <div className="w-10 h-10 rounded-full bg-[#f8f9fc] flex items-center justify-center text-primary flex-shrink-0">
              <span className="material-symbols-outlined text-xl">verified_user</span>
            </div>
            <p className="font-label-sm text-on-surface-variant leading-relaxed">
              Student stipend success stories are based on successful internship task completion and evaluation criteria.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 gap-y-3 font-label-sm font-bold text-on-surface-variant">
            <div className="flex items-center gap-2"><span className="text-xl">🎯</span> Performance Based Stipend</div>
            <div className="hidden md:block w-px h-6 bg-outline-variant/30"></div>
            <div className="flex items-center gap-2"><span className="text-xl">🔍</span> Transparent Process</div>
            <div className="hidden md:block w-px h-6 bg-outline-variant/30"></div>
            <div className="flex items-center gap-2"><span className="text-xl">🚀</span> Real Projects Real Impact</div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="w-full bg-gradient-to-r from-[#2a4ce0] to-[#4568f5] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden text-white shadow-xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md flex-shrink-0">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <div>
              <h3 className="font-title-lg font-bold mb-1">Want to build your own real-time project?</h3>
              <p className="font-body-md text-white/80">Gain practical skills, work on real projects and earn stipend for your performance.</p>
            </div>
          </div>
          <button className="bg-white text-primary px-8 py-3.5 rounded-xl font-label-md font-bold hover:shadow-lg hover:scale-105 transition-all relative z-10 whitespace-nowrap">
            Start Your Journey →
          </button>
        </div>

      </div>
    </section>
  );
}
