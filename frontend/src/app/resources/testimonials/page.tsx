'use client';

import React from 'react';
import { MegaMenuNav } from '@/components/navigation/mega-menu-nav';
import { Footer } from '@/components/layout/footer';
import { TestimonialsSection } from '@/components/testimonials/testimonials-section';

export default function ResourcesTestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#111827] flex flex-col font-sans">
      <MegaMenuNav />
      <main className="flex-grow pt-24 pb-16">
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
