import { MdHistory } from 'react-icons/md';
import { FaGavel } from 'react-icons/fa6';

export default function CtaBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-surface-container via-surface-container-high to-surface-container p-7 sm:p-10 lg:p-14 border border-primary/40 overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-[0_24px_64px_rgba(0,0,0,0.6)]">
        {/* Decorative Glow Accents */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs uppercase tracking-widest font-semibold mb-4">
            <MdHistory className="text-[16px]" />
            <span>Final Bidding Window</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-on-surface leading-tight mb-4">
            Your Next Collectible Could Be a{' '}
            <span className="italic text-primary font-light">Piece of History.</span>
          </h2>

          <p className="font-reading text-sm sm:text-base lg:text-lg text-on-surface-variant">
            Don't let this wartime survivor pass into another collector's vault. Enter your offer now before the gavel strikes.
          </p>
        </div>

        <div className="relative z-10 flex flex-col items-start lg:items-center gap-3 w-full lg:w-auto">
          <a
            href="#make-your-offer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 h-13 sm:h-14 px-8 sm:px-10 bg-primary hover:bg-[#d8af65] text-on-primary font-bold text-xs sm:text-sm uppercase tracking-[0.2em] rounded-lg shadow-[0_8px_32px_rgba(233,193,120,0.35)] hover:shadow-[0_12px_40px_rgba(233,193,120,0.5)] transition-all active:scale-[0.98]"
          >
            <FaGavel className="text-[18px] sm:text-[20px]" />
            <span>Place Your Bid Now</span>
          </a>
          <span className="text-[11px] sm:text-xs uppercase tracking-wider text-outline text-center w-full">
            Direct Gavel Floor Authorization
          </span>
        </div>
      </div>
    </section>
  );
}
