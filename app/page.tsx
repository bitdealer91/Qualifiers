export default function Page() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero background */}
      <section className="relative md:h-[1053px] min-h-[720px]">
        <div
          className="absolute inset-0 -z-10 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/assets/hero-QuaEnt.png')" }}
        />

        {/* Centered stage prevents content drifting while bg stays full-width */}
        <div className="relative mx-auto max-w-[1440px] h-full">
          {/* Join button (positioned similar to Figma/landing) */}
          <div
            className="hidden md:block"
            style={{ position: 'absolute', left: '50%', top: '900px', transform: 'translateX(-50%)', zIndex: 10 }}
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

          {/* Mobile centered button */}
          <div className="md:hidden absolute left-1/2 bottom-16 -translate-x-1/2 z-10">
            <a href="/staking-cup/qualifiers" className="btn-surface btn-shine-only btn-press-in" style={{ width: 220, borderRadius: 98 }} aria-label="Join the cup">
              <span className="btn-shine-clip"><span className="btn-shine-line" /></span>
              <img src="/assets/joini_butt.png" alt="Join" />
            </a>
          </div>

          {/* Trophy glint overlay (centered) */}
          <div className="absolute left-1/2" style={{ top: 180, marginLeft: 24, transform: 'translateX(-50%)', width: 300, height: 360, zIndex: 1, pointerEvents: 'none' }}>
            <div className="trophy-shines" aria-hidden="true" style={{ position: 'absolute', inset: 0 }}>
              <span className="shine shine-top" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

