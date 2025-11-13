"use client";
import { clsx } from 'clsx';

type Props = {
  page: number;
  pageCount: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function Pagination({ page, pageCount, onPrev, onNext }: Props) {
  const atStart = page <= 1;
  const atEnd = page >= pageCount;
  if (!pageCount || pageCount <= 1) {
    // Still show disabled arrows to indicate pagination when only one page
  }
  return (
    <div className="w-full flex items-center justify-center gap-6">
      <button
        aria-label="Previous page"
        onClick={onPrev}
        disabled={atStart}
        className={`w-9 h-9 rounded-full grid place-items-center shadow-leaderboardSm ${atStart ? 'bg-black/20 text-white/40 cursor-not-allowed' : 'bg-actionPrimary text-white active:scale-95'}`}
      >
        <span className="sr-only">Prev</span>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button
        aria-label="Next page"
        onClick={onNext}
        disabled={atEnd}
        className={`w-9 h-9 rounded-full grid place-items-center shadow-leaderboardSm ${atEnd ? 'bg-black/20 text-white/40 cursor-not-allowed' : 'bg-actionPrimary text-white active:scale-95'}`}
      >
        <span className="sr-only">Next</span>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    </div>
  );
}


