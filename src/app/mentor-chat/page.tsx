'use client';

import React from 'react';
import { MegaMenuNav } from '@/components/navigation/mega-menu-nav';
import { Footer } from '@/components/layout/footer';
import { MeetYourMentorSection } from '@/components/mentor/meet-your-mentor';

export default function MentorChatPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] flex flex-col font-sans">
      <MegaMenuNav />
      <main className="flex-grow pt-28 pb-16">
        <MeetYourMentorSection />
      </main>
      <Footer />
    </div>
  );
}
