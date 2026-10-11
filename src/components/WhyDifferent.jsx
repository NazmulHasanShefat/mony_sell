import { motion } from 'motion/react';
import { MdVisibility, MdStars, MdRule } from 'react-icons/md';
import { HiCheck } from 'react-icons/hi2';

export default function WhyDifferent() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">
          The Heritage Standard
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-on-surface mt-2 mb-4">
          Why This Auction Is Different
        </h2>
        <p className="font-reading text-base sm:text-lg text-on-surface-variant">
          We reject automated high-volume bidding chaos in favor of quiet, single-item integrity designed for true collectors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {/* Feature 1: Transparent Bidding */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-6 sm:p-8 hover:border-primary/50 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-surface-container-high border border-primary/30 flex items-center justify-center text-primary mb-6">
              <MdVisibility className="text-[26px] sm:text-[28px]" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-on-surface mb-3">
              Transparent Bidding
            </h3>
            <p className="font-reading text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Every bid offer is instantly updated in public real-time records with full audit timestamps. No hidden reserves, no shill bots, and no artificial floor inflation.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-xs uppercase tracking-wider text-primary font-semibold">
            <HiCheck className="text-[16px]" />
            <span>Real-Time Synchronized</span>
          </div>
        </motion.div>

        {/* Feature 2: One Exclusive Collectible */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="bg-surface-container border border-primary/40 rounded-2xl p-6 sm:p-8 hover:border-primary transition-all flex flex-col justify-between relative shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-widest text-primary px-2.5 py-1 rounded bg-primary/10 border border-primary/30">
            SOLITARY FOCUS
          </div>
          <div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary text-on-primary flex items-center justify-center mb-6">
              <MdStars className="text-[26px] sm:text-[28px]" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-on-surface mb-3">
              One Exclusive Collectible
            </h3>
            <p className="font-reading text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Our attention is dedicated exclusively to this single specimen lot. No hundreds of confusing catalog items—just complete, deep historical provenance on this 1942 coin.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-primary/20 flex items-center gap-2 text-xs uppercase tracking-wider text-primary font-semibold">
            <HiCheck className="text-[16px]" />
            <span>Curated Singularity</span>
          </div>
        </motion.div>

        {/* Feature 3: Clear Bid Requirements */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-6 sm:p-8 hover:border-primary/50 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-surface-container-high border border-primary/30 flex items-center justify-center text-primary mb-6">
              <MdRule className="text-[26px] sm:text-[28px]" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-on-surface mb-3">
              Clear Bid Requirements
            </h3>
            <p className="font-reading text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Transparent bid steps of minimum ৳ 100 increments ensure respectful, structured bidding. All participants undergo identity screening to guarantee authentic gavel settlement.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-xs uppercase tracking-wider text-primary font-semibold">
            <HiCheck className="text-[16px]" />
            <span>Strict Increment Policy</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
