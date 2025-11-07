"use client";
import Image from 'next/image';
import LeaderboardCard from './LeaderboardCard';
import SiteHeader from '@/components/SiteHeader';

export default function Page() {
  return (
    <main className="relative py-0 px-0">
      <section className="relative w-full min-h-[2449px]">
        {/* Full-width background */}
        <div className="absolute inset-0 -z-10 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/assets/background-Qua.png')" }} />
        {/* Fixed-width centered stage for all positioned content */}
        <div className="relative mx-auto w-[1440px] h-full">
          <div className="absolute left-0 top-0 w-full">
            <SiteHeader />
          </div>
          {/* Trophy shine overlay (landing effect) */}
          {/* Center hero content image */}
          <img src="/assets/hero-Qua.png" alt="Qualifiers hero" className="absolute left-1/2 top-[0px] -translate-x-1/2 w-[1440px] max-w-[1440px] select-none pointer-events-none" />

          <div className="absolute left-1/2 top-[250px] -translate-x-1/2 ml-[24px] z-[2] pointer-events-none">
            <div className="trophy-shines" aria-hidden="true">
              <span className="shine shine-top"></span>
            </div>
          </div>
          <div className="absolute left-1/2 top:[869px] top-[869px] -translate-x-1/2 w-[1213px]">
            <LeaderboardCard />
          </div>
        </div>
        {/* Chickens strip anchored to section bottom (above background) */}
        <img src="/assets/chickens.png" alt="Running chickens" className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[1440px] max-w-[1440px] z-[1] select-none pointer-events-none" />
      </section>
    </main>
  );
}


