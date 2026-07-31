'use client'
import React from 'react'

export default function SignUpPage() {
  return (
    <div className="font-body-md bg-surface text-on-surface selection:bg-primary selection:text-white min-h-screen flex flex-col">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface-container-lowest border-b border-outline-variant h-20 flex items-center">
        <div className="flex justify-between items-center px-margin-desktop w-full max-w-container-max mx-auto h-full">
          <div className="flex items-center gap-12">
            <a className="font-headline-md text-headline-md font-bold text-primary" href="/">AI LearnX</a>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-4">
              <a className="text-secondary font-body-md hover:text-primary transition-colors duration-200" href="/login">Login</a>
              <button className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-label-sm text-label-sm active:opacity-80 transition-all">Join Now</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="flex-grow pt-32 pb-24 flex flex-col items-center relative">
        {/* Aesthetic Atmospheric element */}
        <div className="absolute top-20 left-0 w-full h-96 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-container/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-[-100px] w-[600px] h-[600px] bg-tertiary-fixed/10 blur-[150px] rounded-full"></div>
        </div>

        <section className="w-full max-w-[480px] px-margin-mobile md:px-0">
          <div className="text-center mb-12">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4 text-primary">Begin your journey</h1>
            <p className="text-secondary font-body-md max-w-md mx-auto">Access the world's most advanced AI curriculum. Master concepts with academic precision and industry-grade tools.</p>
          </div>

          <div className="bg-surface-container-lowest p-8 md:p-10 rounded-[12px] border border-outline-variant shadow-sm">
            {/* Registration Form */}
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="space-y-2">
                <label className="font-label-sm text-label-sm text-on-surface-variant block" htmlFor="name">Full Name</label>
                <input className="w-full h-12 px-4 rounded-[12px] border border-outline-variant bg-surface-container-lowest focus:ring-0 focus:border-primary transition-all font-body-md placeholder:text-outline-variant" id="name" placeholder="Enter your full name" type="text"/>
              </div>
              <div className="space-y-2">
                <label className="font-label-sm text-label-sm text-on-surface-variant block" htmlFor="email">Email Address</label>
                <input className="w-full h-12 px-4 rounded-[12px] border border-outline-variant bg-surface-container-lowest focus:ring-0 focus:border-primary transition-all font-body-md placeholder:text-outline-variant" id="email" placeholder="name@domain.com" type="email"/>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="font-label-sm text-label-sm text-on-surface-variant block" htmlFor="password">Password</label>
                  <span className="text-label-sm font-label-sm text-secondary cursor-pointer hover:text-primary">Show</span>
                </div>
                <input className="w-full h-12 px-4 rounded-[12px] border border-outline-variant bg-surface-container-lowest focus:ring-0 focus:border-primary transition-all font-body-md placeholder:text-outline-variant" id="password" placeholder="••••••••" type="password"/>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <input className="w-5 h-5 rounded-[6px] border-outline-variant text-primary focus:ring-0 cursor-pointer" id="terms" type="checkbox"/>
                </div>
                <label className="text-label-sm font-label-sm text-secondary leading-normal cursor-pointer select-none" htmlFor="terms">
                  By creating an account, I agree to the <a className="text-primary hover:underline underline-offset-4" href="#">Terms and Conditions</a> and <a className="text-primary hover:underline underline-offset-4" href="#">Privacy Policy</a>.
                </label>
              </div>
              <button className="w-full bg-primary text-on-primary h-14 rounded-[12px] font-label-sm text-label-sm font-bold tracking-wider hover:opacity-90 active:scale-[0.98] transition-all" type="submit">
                CREATE ACCOUNT
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-8 gap-4">
              <div className="h-px bg-outline-variant flex-grow"></div>
              <span className="text-label-sm font-label-sm text-outline-variant uppercase tracking-widest">or</span>
              <div className="h-px bg-outline-variant flex-grow"></div>
            </div>

            {/* Social Sign-up */}
            <button className="w-full flex items-center justify-center gap-3 h-14 rounded-[12px] border border-outline-variant bg-surface hover:bg-surface-container-low transition-all active:scale-[0.98]" type="button">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
              </svg>
              <span className="font-label-sm text-label-sm text-primary">Sign up with Google</span>
            </button>
            <p className="mt-8 text-center text-label-sm font-label-sm text-secondary">
              Already have an account? <a className="text-primary font-bold hover:underline underline-offset-4" href="/login">Login</a>
            </p>
          </div>

          {/* Security Badge */}
          <div className="mt-8 flex items-center justify-center gap-2 text-outline-variant">
            <span className="material-symbols-outlined text-[18px]">verified_user</span>
            <span className="font-label-sm text-label-sm">Enterprise-grade security and data encryption.</span>
          </div>
        </section>
      </main>
    </div>
  )
}
