import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SignUp() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-12 px-6 bg-white overflow-hidden text-gray-900">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px] mix-blend-screen"></div>
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
            Create an Account
          </h1>
          <p className="text-gray-600 leading-relaxed font-body-md text-sm">
            Join us to master the future of AI.
          </p>
        </div>

        {/* Premium Sign Up Form Area */}
        <div className="bg-white rounded-3xl p-8 transition-all duration-300 shadow-xl border border-gray-100 relative overflow-hidden group">
          {/* Subtle hover glow effect */}
          <div className="absolute -inset-px bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          
          <form className="space-y-6">
            {/* Full Name Field */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-widest" htmlFor="name">
                Full Name
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">person</span>
                <input 
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary/60 focus:ring-1 focus:ring-primary/60 focus:bg-white transition-all outline-none text-gray-900 placeholder:text-gray-400 text-sm font-medium" 
                  id="name" 
                  name="name" 
                  placeholder="Jane Doe" 
                  required 
                  type="text"
                />
              </div>
            </div>

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
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-widest" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">lock</span>
                <input 
                  className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary/60 focus:ring-1 focus:ring-primary/60 focus:bg-white transition-all outline-none text-gray-900 placeholder:text-gray-400 text-sm font-medium" 
                  id="password" 
                  name="password" 
                  placeholder="••••••••" 
                  required 
                  type="password"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 transition-colors" type="button">
                  <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                </button>
              </div>
            </div>

            {/* Sign Up Button */}
            <button 
              className="relative w-full py-3.5 rounded-xl text-white font-bold text-sm bg-black hover:bg-gray-900 shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4 overflow-hidden" 
              type="submit"
            >
              <div className="absolute inset-0 bg-white/20 hover:opacity-0 transition-opacity"></div>
              <span className="relative z-10 flex items-center gap-2">
                Create Account
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </span>
            </button>
          </form>
        </div>

        {/* Secondary Action */}
        <div className="text-center mt-2">
          <p className="text-gray-600 font-medium text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-gray-900 hover:text-primary font-bold hover:underline underline-offset-4 transition-all">
              Sign In
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
