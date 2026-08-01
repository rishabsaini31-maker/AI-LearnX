'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    if (email === 'rishab@gmail.com' && password === '123456') {
      window.location.href = '/';
    } else {
      alert('Invalid credentials. Use demo: rishab@gmail.com / 123456');
    }
  };

  const handleDemoLogin = () => {
    setEmail('rishab@gmail.com');
    setPassword('123456');
    setTimeout(() => {
      window.location.href = '/';
    }, 300);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-12 px-6 bg-white overflow-hidden text-gray-900">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Main Content Canvas */}
      <main className="relative z-10 flex-grow flex flex-col justify-center max-w-[440px] w-full">
        {/* Header Section with Logo */}
        <div className="flex flex-col items-center justify-center mb-8 text-center">
          <Link href="/">
            <Image src="/logo1.PNG" alt="AI LearnX Logo" width={320} height={92} className="object-contain mb-6 drop-shadow-2xl" priority />
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600 leading-relaxed font-body-md text-sm">
            Sign in to continue your AI mastery journey.
          </p>
        </div>

        {/* Premium Login Form Area */}
        <div className="bg-white rounded-3xl p-8 transition-all duration-300 shadow-xl border border-gray-100 relative overflow-hidden group">
          {/* Subtle hover glow effect */}
          <div className="absolute -inset-px bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-widest" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">mail</span>
                <input 
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary/60 focus:ring-1 focus:ring-primary/60 focus:bg-white transition-all outline-none text-gray-900 placeholder:text-gray-400 text-sm font-medium" 
                  id="email" 
                  name="email" 
                  placeholder="name@example.com" 
                  required 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-widest" htmlFor="password">
                  Password
                </label>
                <Link href="/forgot-password" className="text-primary hover:text-primary-container text-xs font-bold transition-colors">
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">lock</span>
                <input 
                  className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary/60 focus:ring-1 focus:ring-primary/60 focus:bg-white transition-all outline-none text-gray-900 placeholder:text-gray-400 text-sm font-medium" 
                  id="password" 
                  name="password" 
                  placeholder="••••••••" 
                  required 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 transition-colors" type="button">
                  <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                </button>
              </div>
            </div>

            {/* Demo Login */}
            <button 
              type="button"
              className="w-full py-3 rounded-xl text-sm font-bold bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-all flex items-center justify-center gap-2"
              onClick={handleDemoLogin}
            >
              <span className="material-symbols-outlined text-lg">person</span>
              Use Demo Credentials
            </button>

            {/* Sign In Button */}
            <button 
              className="relative w-full py-3.5 rounded-xl text-white font-bold text-sm bg-black hover:bg-gray-900 shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4 overflow-hidden" 
              type="submit"
            >
              <div className="absolute inset-0 bg-white/20 hover:opacity-0 transition-opacity"></div>
              <span className="relative z-10 flex items-center gap-2">
                Sign In
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </span>
            </button>
          </form>

          {/* Social Logins */}
          <div className="mt-8">
            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink mx-4 text-xs font-medium text-gray-400 uppercase tracking-widest">Or continue with</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 text-gray-700 transition-colors active:scale-[0.98] text-sm font-semibold">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 text-gray-700 transition-colors active:scale-[0.98] text-sm font-semibold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
                GitHub
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Action */}
        <div className="text-center mt-2">
          <p className="text-gray-600 font-medium text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/sign-up" className="text-gray-900 hover:text-primary font-bold hover:underline underline-offset-4 transition-all">
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
