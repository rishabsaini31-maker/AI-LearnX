import React from 'react'
import Link from 'next/link'

export default function Login() {
  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen">
      

<div className="fixed inset-0 z-[-1] overflow-hidden">
<div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
<div className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl"></div>
</div>

<main className="flex-grow flex items-center justify-center px-gutter py-16">
<div className="w-full max-w-[480px] relative">

<div className="text-center mb-10">
<h1 className="font-title-lg text-headline-md font-bold text-on-background mb-1 tracking-tight">AI LearnX</h1>
<p className="font-body-md text-on-surface-variant">Sign in to continue your AI mastery journey.</p>
</div>

<div className="glass-card rounded-xl p-10 relative overflow-hidden">
<div className="bento-glow -top-12 -right-12"></div>
<form className="space-y-6 relative z-10" onsubmit="event.preventDefault();">

<div className="space-y-1">
<label className="font-label-md text-label-md text-on-surface-variant block ml-1" for="email">Email</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[20px] transition-colors group-focus-within:text-primary">mail</span>
<input className="w-full pl-12 pr-6 py-3 bg-surface-container-low border border-outline-variant/30 rounded-lg focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none font-body-md text-on-surface" id="email" placeholder="name@example.com" type="email"/>
</div>
</div>

<div className="space-y-1">
<div className="flex justify-between items-center px-1">
<label className="font-label-md text-label-md text-on-surface-variant block" for="password">Password</label>
<a className="font-label-md text-label-md text-primary hover:text-secondary transition-colors" href="#">Forgot Password?</a>
</div>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[20px] transition-colors group-focus-within:text-primary">lock</span>
<input className="w-full pl-12 pr-6 py-3 bg-surface-container-low border border-outline-variant/30 rounded-lg focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none font-body-md text-on-surface" id="password" placeholder="••••••••" type="password"/>
</div>
</div>

<button className="w-full py-3 primary-gradient text-white font-label-md text-body-md rounded-lg shadow-md hover:shadow-lg active:scale-[0.98] transition-all duration-200 font-medium">
                        Sign In
                    </button>

<div className="relative flex items-center py-6">
<div className="flex-grow border-t border-outline-variant/30"></div>
<span className="flex-shrink mx-4 font-label-md text-caption text-outline">OR CONTINUE WITH</span>
<div className="flex-grow border-t border-outline-variant/30"></div>
</div>

<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-1 py-3 border border-outline-variant/30 rounded-lg bg-surface hover:bg-surface-container-low transition-colors active:scale-[0.98]">
<svg className="w-5 h-5" viewbox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
<span className="font-label-md text-label-md text-on-surface">Google</span>
</button>
<button className="flex items-center justify-center gap-1 py-3 border border-outline-variant/30 rounded-lg bg-surface hover:bg-surface-container-low transition-colors active:scale-[0.98]">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
</svg>
<span className="font-label-md text-label-md text-on-surface">GitHub</span>
</button>
</div>
</form>
</div>

<div className="text-center mt-6">
<p className="font-body-md text-on-surface-variant">
                    Don't have an account? 
                    <a className="text-primary font-bold hover:underline decoration-2 underline-offset-4 transition-all" href="#">Sign up</a>
</p>
</div>

<div className="mt-16 flex items-center justify-center gap-1 opacity-40">
<span className="material-symbols-outlined text-[16px]">verified_user</span>
<span className="font-caption text-caption tracking-widest uppercase">Secure Enterprise Authentication</span>
</div>
</div>
</main>

<footer className="bg-surface-container-lowest dark:bg-inverse-surface border-t border-outline-variant/30 w-full py-16 px-gutter">
<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
<div className="lg:col-span-2">
<h3 className="text-headline-md font-headline-md font-bold text-on-background dark:text-on-primary-fixed mb-1">AI LearnX</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xs">© 2024 AI LearnX. Empowering the next generation of AI leaders.</p>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-md font-bold text-on-background mb-1">Product</span>
<a className="text-on-surface-variant hover:text-primary transition-colors hover:translate-x-1 duration-200" href="#">Support</a>
<a className="text-on-surface-variant hover:text-primary transition-colors hover:translate-x-1 duration-200" href="#">Careers</a>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-md font-bold text-on-background mb-1">Legal</span>
<a className="text-on-surface-variant hover:text-primary transition-colors hover:translate-x-1 duration-200" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-primary transition-colors hover:translate-x-1 duration-200" href="#">Terms of Service</a>
<a className="text-on-surface-variant hover:text-primary transition-colors hover:translate-x-1 duration-200" href="#">Cookie Policy</a>
</div>
</div>
</footer>


    </div>
  )
}
