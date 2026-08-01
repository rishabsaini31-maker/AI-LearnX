import React from 'react';

const COMPARISON_DATA = [
  { factor: "Selection Type", elevance: "Project-based enrollment", other: "Based on resume, college, competition" },
  { factor: "Learning Style", elevance: "Hands-on project execution", other: "Observation + tasks" },
  { factor: "Primary Focus", elevance: "Building Real-Time Projects", other: "Working as an Intern" },
  { factor: "Work Type", elevance: "Real-world problem solving", other: "Mixed (sometimes repetitive/admin)" },
  { factor: "Output", elevance: "Strong portfolio projects", other: "Limited (hard to showcase)" },
  { factor: "Mentorship", elevance: "Structured mentor guidance", other: "Depends on company" },
  { factor: "Flexibility", elevance: "Flexible + self-paced", other: "Fixed schedule" },
  { factor: "Skill Growth", elevance: "Fast, focused", other: "Slow, gradual" },
  { factor: "Ownership", elevance: "High (you build things)", other: "Low (support role)" },
  { factor: "Job Readiness", elevance: "High", other: "Medium" },
  { factor: "Internship Opportunities", elevance: "free internship opportunities available after successful project completion", other: "Depends on company openings" },
];

export function Comparison() {
  return (
    <section className="bg-[#030712] py-20 px-gutter">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#0a0f1c] border border-white/5 rounded-[2rem] p-4 md:p-8 shadow-2xl relative overflow-hidden">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 pb-6 border-b border-white/5 mb-6 sticky top-0 bg-[#0a0f1c]/90 backdrop-blur-xl z-10 pt-4">
            <div className="col-span-4 flex items-end">
              <span className="text-white/40 font-label-sm font-bold uppercase tracking-wider">Factors</span>
            </div>
            <div className="col-span-4 flex flex-col items-center justify-end text-center">
              <h3 className="font-label-md font-bold text-white relative">
                AI LearnX
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#3b82f6]"></div>
              </h3>
            </div>
            <div className="col-span-4 flex flex-col items-center justify-end text-center">
              <div className="px-4 py-2 bg-white/5 rounded-xl mb-3">
                <span className="text-white/40 text-xs font-bold">Others</span>
              </div>
              <h3 className="font-label-md font-bold text-white/50">Traditional Internship</h3>
            </div>
          </div>

          {/* Table Body */}
          <div className="space-y-2">
            {COMPARISON_DATA.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-4 p-4 rounded-xl hover:bg-white/[0.02] transition-colors items-center group relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                
                <div className="col-span-4">
                  <span className="text-white/70 font-label-sm font-bold">{row.factor}</span>
                </div>
                <div className="col-span-4 text-center">
                  <span className="text-white font-label-md font-bold">{row.elevance}</span>
                </div>
                <div className="col-span-4 text-center">
                  <span className="text-white/40 font-label-sm">{row.other}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-8 bg-gradient-to-r from-[#0d172e] to-[#121c36] border border-[#1e3a8a]/30 rounded-2xl p-6 flex items-center justify-center gap-4 text-center">
            <span className="material-symbols-outlined text-[#3b82f6]">rocket_launch</span>
            <p className="text-white/80 font-label-md">
              Build real-world projects with AI LearnX. Gain practical experience. Optional internship opportunities available after project completion.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
