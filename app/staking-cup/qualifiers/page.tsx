"use client";
import Image from 'next/image';
import { useState } from 'react';
import LeaderboardCard from './LeaderboardCard';
import SiteHeader from '@/components/SiteHeader';
import MobileMenu from '@/components/MobileMenu';

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <main className="relative py-0 px-0">
      <section className="relative w-full">
        {/* Backgrounds */}
        <div className="hidden md:block absolute inset-0 -z-10 bg-top bg-no-repeat bg-cover" style={{ backgroundImage: "url('/assets/background-Qua.png')", backgroundColor: '#1a8f2f' }} />
        <div
          className="md:hidden absolute inset-0 -z-10 bg-top bg-no-repeat"
          style={{ backgroundImage: "url('/assets/mobile/back-mob.png')", backgroundSize: '100% 100%' }}
        />

        {/* Mobile hero content image */}
        <img src="/assets/mobile/Hero-section-mob.png" alt="Mobile hero" className="md:hidden block w-full h-auto select-none pointer-events-none" />
        {/* Mobile trophy glint overlay ON the hero image */}
        <div className="md:hidden absolute left-1/2 z-10 pointer-events-none" style={{ top: 210, marginLeft: 40, transform: 'translateX(-50%)', width: 168, height: 154 }}>
          <div className="trophy-shines" aria-hidden="true" style={{ position: 'absolute', inset: 0 }}>
            <span className="shine shine-top"></span>
          </div>
        </div>
        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Menu"
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden absolute right-4 top-4 w-[88px] h-[88px] z-20 active:scale-95 transition-transform"
        >
          <img src="/assets/mobile/Menu.png" alt="Menu" className="w-full h-full" />
        </button>

        {/* Fixed-width centered stage; on desktop leave space for hero */}
        <div className="relative mx-auto max-w-[1440px] w-full pt-0 md:pt-[869px] px-4 md:px-0">
          <div className="hidden md:block absolute left-0 top-0 w-full">
            <SiteHeader />
          </div>
          {/* Trophy shine overlay (landing effect) */}
          {/* Center hero content image */}
          <img src="/assets/hero-Qua.png" alt="Qualifiers hero" className="hidden md:block absolute left-1/2 top-[0px] -translate-x-1/2 w-[1440px] max-w-[1440px] select-none pointer-events-none" />

          <div className="hidden md:block absolute left-1/2 top-[250px] -translate-x-1/2 ml-[24px] z-[2] pointer-events-none">
            <div className="trophy-shines" aria-hidden="true">
              <span className="shine shine-top"></span>
            </div>
          </div>
          {/* Mobile trophy glint overlay moved to hero level */}
          <div className="mx-auto w-full max-w-[1213px] -mt-[10px] md:mt-0">
            <LeaderboardCard />
          </div>
          {/* Chickens immediately after leaderboard */}
          <div className="hidden md:flex mt-6 justify-center">
            <img src="/assets/chickens.png" alt="Running chickens" className="w-[1440px] max-w-[1440px] select-none pointer-events-none" />
          </div>
          {/* Mobile: extra space to reveal bottom part of background (chickens) */}
          <div className="md:hidden h-[310px]" />
          {/* Mobile overlay menu (pixel-perfect) */}
          <div className="md:hidden">
            <MobileMenu
              isOpen={mobileMenuOpen}
              onClose={() => setMobileMenuOpen(false)}
              variant="actions"
            />
          </div>
        </div>
      </section>
    </main>
  );
}


