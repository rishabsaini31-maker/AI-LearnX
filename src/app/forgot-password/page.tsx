import React from 'react'
import Link from 'next/link'

export default function ForgotPassword() {
  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen">
      

<main className="flex-grow flex items-center justify-center relative px-gutter py-16">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
<div className="absolute top-1/2 -right-24 w-80 h-80 bg-secondary-container/5 rounded-full blur-[100px]"></div>
</div>

<div className="w-full max-w-[480px] bento-shadow rounded-xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden relative">

<div className="h-1.5 w-full bg-gradient-to-r from-primary to-secondary"></div>
<div className="p-10 md:p-16 glow-accent">

<div className="mb-10 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-container text-on-primary-container mb-6">
<span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>lock_reset</span>
</div>
<h1 className="font-headline-md text-headline-md text-on-surface mb-1">Forgot Password</h1>
<p className="text-on-surface-variant font-body-md">
                        Enter your email address and we'll send you a link to reset your password.
                    </p>
</div>

<form className="space-y-6" onsubmit="event.preventDefault();">
<div className="space-y-1">
<label className="font-label-md text-label-md text-on-surface ml-1" for="email">Email Address</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline group-focus-within:text-primary transition-colors">mail</span>
</div>
<input className="w-full pl-16 pr-6 py-3 rounded-lg border-outline-variant/30 bg-surface focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-body-md outline-none" id="email" name="email" placeholder="name@company.com" required="" type="email"/>
</div>
</div>

<button className="w-full py-6 px-10 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-label-md rounded-lg shadow-sm hover:shadow-md btn-hover-effect flex items-center justify-center gap-3" type="submit">
<span>Send Reset Link</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
</form>

<div className="mt-16 text-center space-y-6">
<div className="flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-primary text-[20px]">chevron_left</span>
<a className="text-primary font-label-md hover:underline transition-all" href="#">Back to Login</a>
</div>
<div className="pt-10 border-t border-outline-variant/20">
<p className="text-caption text-outline">
                            Don't have an account? 
                            <a className="text-primary font-medium hover:text-primary-container transition-colors ml-1" href="#">Get Started</a>
</p>
</div>
</div>
</div>
</div>

<div className="hidden xl:block absolute right-xl top-1/2 -translate-y-1/2 w-[400px] h-[500px] pointer-events-none">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
<div className="space-y-6 mt-10">
<div className="h-48 rounded-xl glass-panel bento-shadow flex flex-col items-center justify-center p-6 text-center opacity-60">
<span className="material-symbols-outlined text-primary-container text-[40px] mb-3" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
<span className="font-label-md text-on-surface">Secure Recovery</span>
</div>
<div className="h-32 rounded-xl glass-panel bento-shadow flex items-center justify-center opacity-40">
<div className="w-12 h-2 bg-outline-variant rounded-full"></div>
</div>
</div>
<div className="space-y-6">
<div className="h-32 rounded-xl glass-panel bento-shadow flex items-center justify-center opacity-40">
<div className="w-16 h-16 rounded-full bg-surface-variant border-4 border-white"></div>
</div>
<div className="h-64 rounded-xl glass-panel bento-shadow p-6 opacity-50 relative overflow-hidden">
<div className="absolute inset-0 w-full h-full opacity-20">

<div className="w-full h-full bg-cover bg-center" data-alt="A clean, minimalist high-tech visualization showing encrypted data nodes connecting in a bright, futuristic space. The aesthetic follows a light-mode theme with pristine white surfaces and deep indigo blue accents. Soft volumetric lighting creates a safe, trustworthy environment suitable for a secure password recovery interface. Minimalist digital art style with sharp focus." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCl3P23EadKl4q_CFlCScjmQ5IJkk9sqqEULQ34ZTF7yMJHCYngOfB6QQTqvWoI_nPQH5mU55c8bmMMQSXHJskNMJ3cI3QsxL4Oz9r7hkKu5CK4_NS29SM5rDY2dClwlxcbZ4TMIgl_F_5_8ANQP4FfX80axtFp3tUGaq4hMOWQujbigwMVd4WeGj0WZd6xBNP_QITpy_0hnvpE8NitLuU6lGfts_skPGl0qvKH7TsHjIJ1BmYNxYZp')` }}></div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="w-full py-6 px-gutter border-t border-outline-variant/10 bg-surface-container-lowest">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<span className="font-title-lg font-bold text-on-background">AI LearnX</span>
<span className="text-caption text-outline">© 2024. All rights reserved.</span>
</div>
<div className="flex gap-10">
<a className="text-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a className="text-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
<a className="text-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Support</a>
</div>
</div>
</footer>


    </div>
  )
}
