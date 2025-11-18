"use client";
import { useState } from 'react';
import MobileMenu from '@/components/MobileMenu';
export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <main className="relative">
      {/* Hero background */}
      <section className="relative min-h-screen">
        {/* Mobile trophy glint overlay */}
        <div className="md:hidden absolute left-1/2" style={{ top: 230, marginLeft: 40, transform: 'translateX(-50%)', width: 168, height: 154, zIndex: 10, pointerEvents: 'none' }}>
          <div className="trophy-shines" aria-hidden="true" style={{ position: 'absolute', inset: 0 }}>
            <span className="shine shine-top" />
          </div>
        </div>
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
          {/* Center hero content image removed; global background handles hero */}

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

