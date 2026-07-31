import React from 'react'

export function Footer() {
  return (
    <footer className="bg-background text-on-background w-full py-20 mt-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter px-margin-desktop max-w-container-max mx-auto">
        {/* Brand Column */}
        <div className="col-span-2 lg:col-span-2 mb-8 lg:mb-0 pr-8">
          <a className="font-headline-md text-headline-md font-bold text-on-background block mb-6" href="/">AI LearnX</a>
          <p className="text-on-background/70 font-body-md leading-relaxed mb-6">
            ElevanceSkills is redefining industrial training for the next generation of learners and professionals. Innovating, empowering, and transforming the way skills are built.
          </p>
          <div className="text-on-background/70 font-body-md">
            <p className="mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">call</span>
              +91 91347 72858
            </p>
            <p className="mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">mail</span>
              training@elevanceskills.com
            </p>
            <p className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[18px] mt-1">location_on</span>
              <span>No.2/180, Barur, Dharmapuri, Tamil Nadu 635201, India</span>
            </p>
          </div>
        </div>

        {/* Link Columns */}
        <div>
          <h4 className="font-label-sm text-on-background mb-6 font-bold uppercase tracking-widest">Company</h4>
          <ul className="space-y-4">
            <li><a className="text-on-background/70 font-body-md hover:text-on-background transition-colors" href="/">Home</a></li>
            <li><a className="text-on-background/70 font-body-md hover:text-on-background transition-colors" href="#">About Us</a></li>
            <li><a className="text-on-background/70 font-body-md hover:text-on-background transition-colors" href="#">Partner With Us</a></li>
            <li><a className="text-on-background/70 font-body-md hover:text-on-background transition-colors" href="#">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-label-sm text-on-background mb-6 font-bold uppercase tracking-widest">Resources</h4>
          <ul className="space-y-4">
            <li><a className="text-on-background/70 font-body-md hover:text-on-background transition-colors" href="#">FAQ</a></li>
            <li><a className="text-on-background/70 font-body-md hover:text-on-background transition-colors" href="#">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-label-sm text-on-background mb-6 font-bold uppercase tracking-widest">Legal</h4>
          <ul className="space-y-4">
            <li><a className="text-on-background/70 font-body-md hover:text-on-background transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="text-on-background/70 font-body-md hover:text-on-background transition-colors" href="#">Terms of Use</a></li>
            <li><a className="text-on-background/70 font-body-md hover:text-on-background transition-colors" href="#">Refund Policy</a></li>
            <li><a className="text-on-background/70 font-body-md hover:text-on-background transition-colors" href="#">Internship Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-label-sm text-on-background mb-6 font-bold uppercase tracking-widest">Connect</h4>
          <ul className="space-y-4">
            <li><a className="text-on-background/70 font-body-md hover:text-on-background transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-[18px]">open_in_new</span> LinkedIn</a></li>
            <li><a className="text-on-background/70 font-body-md hover:text-on-background transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-[18px]">play_circle</span> Youtube</a></li>
            <li><a className="text-on-background/70 font-body-md hover:text-on-background transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-[18px]">photo_camera</span> Instagram</a></li>
            <li><a className="text-on-background/70 font-body-md hover:text-on-background transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-[18px]">chat</span> Whatsapp</a></li>
            <li><a className="text-on-background/70 font-body-md hover:text-on-background transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-[18px]">alternate_email</span> Twitter</a></li>
          </ul>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-on-background/10 px-margin-desktop max-w-container-max mx-auto text-center">
        <p className="text-on-background/50 font-body-md text-sm">
          © 2026 ElevanceSkills Technology Private Limited. All Rights Reserved. Empowering students with real-world skills and experience.
        </p>
      </div>
    </footer>
  )
}
