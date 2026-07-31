import React from 'react'
import { CheckCircle2, XCircle } from 'lucide-react'

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
  { factor: "Internship Opportunities", elevance: "Free internship opportunities available after successful project completion", other: "Depends on company openings" },
]

export function ComparisonSection() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant/30">
      <div className="text-center mb-16">
        <h2 className="font-display-lg-mobile md:text-[48px] text-primary font-bold mb-6">
          ElevanceSkills Internship <span className="text-on-surface">vs Traditional Internships</span>
        </h2>
        <p className="text-secondary font-body-lg max-w-3xl mx-auto leading-relaxed">
          Traditional internships often provide limited hands-on exposure. ElevanceSkills helps students build real-world projects, develop practical skills, and create portfolio-ready work.
        </p>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-outline-variant shadow-2xl bg-surface-container-lowest">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr>
              <th className="p-6 md:p-8 bg-surface-container font-headline-md text-primary w-1/4 border-b border-r border-outline-variant">Factors</th>
              <th className="p-6 md:p-8 bg-primary/10 font-headline-md text-primary w-2/5 border-b border-outline-variant">
                <div className="flex items-center gap-3">
                  <span className="bg-primary text-on-primary p-2 rounded-lg"><CheckCircle2 className="w-6 h-6" /></span>
                  ElevanceSkills Internship
                </div>
              </th>
              <th className="p-6 md:p-8 bg-surface-container font-headline-md text-secondary w-2/5 border-b border-l border-outline-variant">
                <div className="flex items-center gap-3">
                  <span className="bg-surface text-secondary p-2 rounded-lg border border-outline-variant"><XCircle className="w-6 h-6" /></span>
                  Traditional Internship
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_DATA.map((row, idx) => (
              <tr key={idx} className="group">
                <td className="p-6 md:p-8 border-b border-r border-outline-variant font-bold text-on-surface bg-surface-container/30">
                  {row.factor}
                </td>
                <td className="p-6 md:p-8 border-b border-outline-variant bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-body-md text-primary font-bold">{row.elevance}</span>
                  </div>
                </td>
                <td className="p-6 md:p-8 border-b border-l border-outline-variant bg-surface-container-lowest group-hover:bg-surface-container transition-colors">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="font-body-md text-secondary">{row.other}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-16 text-center flex flex-col items-center">
        <p className="text-on-surface font-headline-md mb-8 max-w-2xl">
          Build real-world projects. Gain practical experience. Optional internship opportunities available after project completion.
        </p>
        <button className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-headline-md font-bold hover:opacity-90 active:scale-[0.98] transition-all shadow-lg flex items-center gap-3">
          Start Your Career Journey
        </button>
        <p className="text-secondary mt-4 font-body-md">Build real-world projects, gain mentorship, and become job-ready faster.</p>
      </div>
    </section>
  )
}
