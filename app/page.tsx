"use client";
import { useState } from 'react';
import MobileMenu from '@/components/MobileMenu';
export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <main className="relative">
      {/* Hero background */}
      <section className="relative md:h-[1053px]">
        {/* Desktop background */}
        <div className="hidden md:block absolute inset-0 -z-10 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/assets/background-QuaEnt.png')" }} />
        {/* Mobile main image (full height, scrolls) */}
        <img src="/assets/mobile/back-mob-enter.png" alt="Somnia mobile entry" className="md:hidden block w-full h-auto select-none pointer-events-none" />
        {/* Mobile menu button pinned to image (top-right) */}
        <button
          type="button"
          aria-label="Menu"
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden absolute right-4 top-4 w-[88px] h-[88px] z-20 active:scale-95 transition-transform"
        >
          <img src="/assets/mobile/Menu.png" alt="Menu" className="w-full h-full" />
        </button>
        {/* Mobile Join button over the image, below fox area */}
        <div className="md:hidden absolute left-1/2 -translate-x-1/2 bottom-[200px] z-30">
          <a href="/staking-cup/qualifiers" className="btn-surface btn-shine-only btn-press-in" style={{ width: 260, borderRadius: 98 }} aria-label="Join the cup">
            <span className="btn-shine-clip"><span className="btn-shine-line" /></span>
            <img src="/assets/joini_butt.png" alt="Join" />
          </a>
        </div>

        {/* Centered stage prevents content drifting while bg stays full-width */}
        <div className="relative mx-auto max-w-[1440px] w-full h-full">
          {/* Center hero content image (fixed max width, does not upscale) */}
          <img src="/assets/hero-QuaEnt.png" alt="Somnia hero" className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-[1440px] select-none pointer-events-none" />
          {/* Mobile uses only the full background image; no extra hero layer */}

          {/* Join button (positioned similar to Figma/landing) */}
          <div
            className="hidden md:block"
            style={{ position: 'absolute', left: '50%', top: '950px', transform: 'translateX(-50%)', zIndex: 10 }}
          >
            <a
              href="/staking-cup/qualifiers"
              className="btn-surface btn-shine-only btn-press-in"
              style={{
                // @ts-ignore CSS var consumed in globals
                ['--base-scale' as any]: 1,
                width: 220,
                borderRadius: 98,
              }}
              aria-label="Join the cup"
            >
              <span className="btn-shine-clip"><span className="btn-shine-line" /></span>
              <img src="/assets/joini_butt.png" alt="Join" />
            </a>
          </div>

          {/* Trophy glint overlay (centered) */}
          <div className="hidden md:block absolute left-1/2" style={{ top: 250, marginLeft: 24, transform: 'translateX(-50%)', width: 300, height: 360, zIndex: 1, pointerEvents: 'none' }}>
            <div className="trophy-shines" aria-hidden="true" style={{ position: 'absolute', inset: 0 }}>
              <span className="shine shine-top" />
            </div>
          </div>
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

