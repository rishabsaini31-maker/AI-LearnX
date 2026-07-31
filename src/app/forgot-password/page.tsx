import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ForgotPassword() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-12 px-6 bg-[#030712] overflow-hidden text-white">
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
          <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 leading-tight tracking-tight mb-2">
            Reset Password
          </h1>
          <p className="text-white/60 leading-relaxed font-body-md text-sm">
            Enter your email to receive a secure recovery link.
          </p>
        </div>

        {/* Premium Reset Password Form Area */}
        <div className="bg-white/[0.03] backdrop-blur-2xl rounded-3xl p-8 transition-all duration-300 shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/[0.08] relative overflow-hidden group">
          {/* Subtle hover glow effect */}
          <div className="absolute -inset-px bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          
          <form className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-white/70 uppercase tracking-widest" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-[20px]">mail</span>
                <input 
                  className="w-full pl-12 pr-4 py-3.5 bg-black/40 border border-white/10 rounded-xl focus:border-primary/60 focus:ring-1 focus:ring-primary/60 focus:bg-black/60 transition-all outline-none text-white placeholder:text-white/30 text-sm font-medium shadow-inner" 
                  id="email" 
                  name="email" 
                  placeholder="name@example.com" 
                  required 
                  type="email"
                />
              </div>
            </div>

            {/* Reset Button */}
            <button 
              className="relative w-full py-3.5 rounded-xl text-white font-bold text-sm bg-gradient-to-r from-primary to-primary-container hover:from-primary-container hover:to-primary shadow-[0_0_20px_rgba(0,69,143,0.4)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4 overflow-hidden" 
              type="submit"
            >
              <div className="absolute inset-0 bg-white/20 hover:opacity-0 transition-opacity"></div>
              <span className="relative z-10 flex items-center gap-2">
                Send Reset Link
                <span className="material-symbols-outlined text-lg">mark_email_read</span>
              </span>
            </button>
          </form>
        </div>

        {/* Secondary Action */}
        <div className="text-center mt-2">
          <p className="text-white/60 font-medium text-sm">
            Remember your password?{' '}
            <Link href="/login" className="text-white hover:text-primary font-bold hover:underline underline-offset-4 transition-all">
              Sign In
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
