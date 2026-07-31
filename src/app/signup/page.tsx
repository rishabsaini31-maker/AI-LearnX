import React from 'react'
import Link from 'next/link'

export default function SignUp() {
  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen">
      


<main className="flex-grow flex items-center justify-center relative overflow-hidden px-gutter py-16">

<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 blur-[120px] rounded-full"></div>

<div className="relative z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-base lg:gap-0 overflow-hidden rounded-xl border border-outline-variant/30 bento-shadow bg-surface-container-lowest">

<div className="lg:col-span-5 bg-primary p-10 flex flex-col justify-between relative overflow-hidden min-h-[300px] lg:min-h-[600px]">

<div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-16">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-headline-md" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
</div>
<span className="font-title-lg text-title-lg text-white font-bold tracking-tight">AI LearnX</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-white mb-6 leading-tight">Master the Future of Intelligence.</h1>
<p className="font-body-lg text-body-lg text-on-primary-container opacity-90 max-w-sm">Join 50,000+ developers and leaders building the next generation of AI-driven applications.</p>
</div>
<div className="relative z-10 mt-16">
<div className="flex flex-col gap-6">
<div className="flex items-start gap-6 group">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 transition-all group-hover:bg-white/20">
<span className="material-symbols-outlined text-white text-body-md">verified_user</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-white">Verified Curriculum</h3>
<p className="text-caption text-white/70">Industry-standard certifications recognized by top tech giants.</p>
</div>
</div>
<div className="flex items-start gap-6 group">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 transition-all group-hover:bg-white/20">
<span className="material-symbols-outlined text-white text-body-md">psychology</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-white">Adaptive Learning</h3>
<p className="text-caption text-white/70">AI-driven paths tailored to your skill level and pace.</p>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/30 blur-[60px] rounded-full animate-subtle-float"></div>
</div>

<div className="lg:col-span-7 p-6 lg:p-16 bg-surface-container-lowest flex flex-col justify-center">
<div className="max-w-md mx-auto w-full">
<header className="mb-16 text-center lg:text-left">
<h2 className="font-headline-md text-headline-md text-on-background mb-1">Create Account</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Get started with your AI journey today.</p>
</header>
<form className="space-y-6" onsubmit="event.preventDefault();">

<div className="space-y-1">
<label className="font-label-md text-label-md text-on-surface" for="name">Full Name</label>
<div className="relative">
<input className="w-full px-6 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-on-surface placeholder:text-outline/50 font-body-md" id="name" placeholder="John Doe" type="text"/>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline/40">person</span>
</div>
</div>

<div className="space-y-1">
<label className="font-label-md text-label-md text-on-surface" for="email">Email Address</label>
<div className="relative">
<input className="w-full px-6 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-on-surface placeholder:text-outline/50 font-body-md" id="email" placeholder="name@company.com" type="email"/>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline/40">mail</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="font-label-md text-label-md text-on-surface" for="password">Password</label>
<div className="relative">
<input className="w-full px-6 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-on-surface placeholder:text-outline/50 font-body-md" id="password" placeholder="••••••••" type="password"/>
</div>
</div>
<div className="space-y-1">
<label className="font-label-md text-label-md text-on-surface" for="confirm-password">Confirm Password</label>
<div className="relative">
<input className="w-full px-6 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-on-surface placeholder:text-outline/50 font-body-md" id="confirm-password" placeholder="••••••••" type="password"/>
</div>
</div>
</div>

<div className="flex items-start gap-3 pt-1">
<div className="flex items-center h-5">
<input className="w-4 h-4 text-primary bg-surface-container-low border-outline-variant rounded focus:ring-primary focus:ring-2" id="terms" type="checkbox"/>
</div>
<label className="text-caption text-on-surface-variant leading-tight" for="terms">
                                I agree to the <a className="text-primary hover:underline font-medium" href="#">Terms of Service</a> and <a className="text-primary hover:underline font-medium" href="#">Privacy Policy</a>.
                            </label>
</div>

<div className="pt-6 flex flex-col gap-6">
<button className="cta-gradient text-white py-3 px-16 rounded-lg font-label-md text-label-md font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                                Create Account
                                <span className="material-symbols-outlined text-body-md">arrow_forward</span>
</button>
<div className="relative flex items-center py-1">
<div className="flex-grow border-t border-outline-variant/30"></div>
<span className="flex-shrink mx-4 text-caption text-outline">Or register with</span>
<div className="flex-grow border-t border-outline-variant/30"></div>
</div>
<div className="grid grid-cols-2 gap-6">
<button className="flex items-center justify-center gap-3 py-3 border border-outline-variant/30 rounded-lg bg-surface hover:bg-surface-container-low transition-colors font-label-md text-label-md">
<img alt="Google Logo" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPahqpkWyYNgjHS3SR4DFGSFoljbGmeohGKr_PjjoFi-9DoiHrPErJA-DOZSmaquPQ3aI5ZmZejouOZNHKa0NbL2dvWie-1XQ2E_fuxiQ9T-_nRZ9AMVDherzXNWziG0HJCEKGKWQ43eN7RCOEBEJjzOSsjTEf2wD7Q32PcJdiQ3tUH6BbHs8FPRShphilN1y8qpPowfDUT2YKxQWmujZUaj6QKB8fHYcM7j7VFwHFXZfp2xkGzB68"/>
                                    Google
                                </button>
<button className="flex items-center justify-center gap-3 py-3 border border-outline-variant/30 rounded-lg bg-surface hover:bg-surface-container-low transition-colors font-label-md text-label-md">
<span className="material-symbols-outlined text-body-md" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                                    GitHub
                                </button>
</div>
</div>
</form>
<footer className="mt-16 text-center">
<p className="font-body-md text-body-md text-on-surface-variant">
                            Already have an account? 
                            <a className="text-primary font-bold hover:underline ml-1" href="#">Login</a>
</p>
</footer>
</div>
</div>
</div>
</main>

<footer className="w-full py-16 px-gutter bg-surface-container-lowest border-t border-outline-variant/30">
<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
<div className="md:col-span-2 lg:col-span-2">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary text-title-lg">terminal</span>
<span className="text-headline-md font-headline-md font-bold text-on-background">AI LearnX</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 opacity-80">
                    Empowering the next generation of AI leaders through curriculum built by industry practitioners.
                </p>
<p className="font-body-md text-body-md text-on-surface-variant/60">
                    © 2024 AI LearnX. All rights reserved.
                </p>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-background font-bold mb-6">Product</h4>
<ul className="space-y-3">
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Courses</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Projects</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-background font-bold mb-6">Legal</h4>
<ul className="space-y-3">
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Privacy Policy</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Terms of Service</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Cookie Policy</a></li>
</ul>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-background font-bold mb-6">Support</h4>
<ul className="space-y-3">
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Help Center</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-background font-bold mb-6">Social</h4>
<div className="flex gap-6">
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
</div>
</div>
</div>
</footer>


    </div>
  )
}
