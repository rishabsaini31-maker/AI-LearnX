import React from 'react'
import { 
  BadgeIndianRupee, Target, Layers, Wallet, Code2, 
  MonitorPlay, CheckCircle, ShieldCheck, Search, Users, Briefcase 
} from 'lucide-react'

const FEATURES = [
  {
    title: "Performance-Based Stipends",
    subtitle: "Earn up to ₹3,000 based on your performance",
    icon: BadgeIndianRupee,
    points: [
      "Paid for actual project contributions, not attendance",
      "No dummy certificates or recorded-only internships",
      "Stipend linked to skills, delivery & impact",
      "Direct mentor evaluation on real-world output",
      "Up to ₹3,000 based on performance milestones",
      "Top performers get hiring & referral support"
    ]
  },
  {
    title: "Who This Is For",
    subtitle: "Ideal candidates for our program",
    icon: Target,
    points: [
      "Students serious about learning by doing",
      "Freshers building a real, job-ready portfolio",
      "Career switchers proving skills through projects",
      "Self-driven learners (not passive certificate seekers)"
    ]
  },
  {
    title: "What You’ll Gain",
    subtitle: "Outcomes of the program",
    icon: Layers,
    points: [
      "Hands-on experience with real industry projects",
      "A strong portfolio you can confidently show recruiters",
      "Performance-based stipend based on real output",
      "Mentor feedback that actually improves your skills"
    ]
  },
  {
    title: "How the Stipend Works",
    subtitle: "Transparent earning structure",
    icon: Wallet,
    points: [
      "No upfront promises or fixed payouts",
      "Stipend is calculated based on task & project milestones",
      "Mentor-reviewed performance & quality of work",
      "Top performers earn higher rewards & referrals",
      "Earned, not promised"
    ]
  },
  {
    title: "Project Training + 100% Free Internship",
    subtitle: "No hidden charges or recurring fees",
    icon: Code2,
    points: [
      "LMS access & structured learning",
      "Mentor guidance & 1:1 support",
      "Real-world project onboarding",
      "Evaluation & certification",
      "Certificate issued upon completion",
      "Lifetime access to course materials",
      "Training fee only"
    ]
  },
  {
    title: "Real-World Projects",
    subtitle: "Industry-relevant work, not just assignments",
    icon: MonitorPlay,
    points: [
      "Full-stack web applications",
      "Data analytics dashboards",
      "Live project simulations",
      "Project screenshots & demos shared openly",
      "Work on actual client-level problems",
      "Build a portfolio that impresses recruiters",
      "Career-building experience"
    ]
  },
  {
    title: "Real Students. Real Results.",
    subtitle: "Verified interns with authentic outcomes",
    icon: CheckCircle,
    points: [
      "Student names & universities",
      "Public LinkedIn profiles",
      "Actual project outcomes",
      "Verify every success story yourself",
      "100% transparent"
    ]
  },
  {
    title: "Industry-Recognized Certification",
    subtitle: "Credentials that actually mean something to employers",
    icon: ShieldCheck,
    points: [
      "Certificate issued only after successful evaluation",
      "Verification link included on every certificate",
      "Skills & project-based assessment criteria",
      "Shareable on LinkedIn & resumes",
      "Accepted across internships & entry-level roles",
      "No pay-for-certificate policy",
      "Verified credentials"
    ]
  },
  {
    title: "Transparent & Verifiable Outcomes",
    subtitle: "Everything we offer can be independently verified",
    icon: Search,
    points: [
      "Project screenshots & demos shared openly",
      "Internship is free — no paid internship traps",
      "Performance-based stipend, not fake guarantees",
      "Real projects, not PDF-based training",
      "No bond or lock-in periods",
      "Every certificate is publicly verifiable",
      "Built on trust"
    ]
  },
  {
    title: "Dedicated Mentor Guidance",
    subtitle: "You're never left learning alone",
    icon: Users,
    points: [
      "1:1 mentor doubt-clearing sessions",
      "Guidance on real-world problem solving",
      "Code & project reviews by industry mentors",
      "Continuous feedback throughout the internship",
      "Direct mentorship from industry professionals",
      "Personalized learning paths based on your goals",
      "Mentor-led support"
    ]
  },
  {
    title: "Career & Hiring Support",
    subtitle: "We help you convert skills into opportunities",
    icon: Briefcase,
    points: [
      "Resume & portfolio review",
      "Interview preparation guidance",
      "Hiring & referral support for top performers",
      "Career roadmap planning with mentors",
      "Job placement assistance for qualified interns",
      "Access to exclusive job opportunities",
      "Outcome-focused"
    ]
  }
]

export function FeaturesGrid() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant/30">
      <div className="text-center mb-16">
        <h2 className="font-display-lg-mobile md:text-[48px] text-primary font-bold mb-4">
          What You Actually Get
        </h2>
        <p className="text-secondary font-body-lg max-w-3xl mx-auto leading-relaxed">
          With ElevanceSkills: A transparent, skill-first internship experience built on real projects, mentorship, and performance-based outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((feature, idx) => (
          <div key={idx} className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant shadow-sm hover:border-primary/50 transition-colors group">
            <div className="w-14 h-14 bg-surface-container rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
              <feature.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-headline-md text-on-surface font-bold mb-2">{feature.title}</h3>
            <p className="text-secondary font-label-sm uppercase tracking-wider mb-6">{feature.subtitle}</p>
            <ul className="space-y-3">
              {feature.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-tertiary-fixed-dim shrink-0 mt-0.5" />
                  <span className="font-body-md text-secondary leading-snug">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
