import { motion } from 'motion/react';
import { MdManageSearch, MdLocalShipping } from 'react-icons/md';
import { FaGavel } from 'react-icons/fa6';

export default function HowItWorks({ minValidBid }) {
  return (
    <section className="w-full bg-surface-container-lowest py-14 sm:py-20 border-t border-outline-variant/30 scroll-mt-20" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">
            The Acquisition Flow
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-on-surface mt-2 mb-4">
            How It Works
          </h2>
          <p className="font-reading text-base sm:text-lg text-on-surface-variant">
            A frictionless, prestigious, three-phase acquisition journey designed for private collectors worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Connecting timeline line behind steps */}
          <div className="hidden lg:block absolute top-12 left-1/6 right-1/6 h-[2px] bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 pointer-events-none -z-0" />

          {/* Step 01: Explore */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-6 sm:p-8 relative z-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-3xl font-medium text-primary">01</span>
                <span className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
                  <MdManageSearch className="text-[22px]" />
                </span>
              </div>
              <h3 className="font-serif text-xl text-on-surface mb-3">
                Explore the Specimen
              </h3>
              <p className="font-reading text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Review verified historical context, metallurgical documentation, high-resolution macro dies, and condition grades in our open archive.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 text-xs text-primary font-semibold uppercase tracking-wider">
              Phase 1: Due Diligence
            </div>
          </motion.div>

          {/* Step 02: Place Your Bid */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-surface-container-high border-2 border-primary/60 rounded-2xl p-6 sm:p-8 relative z-10 flex flex-col justify-between shadow-[0_8px_24px_rgba(233,193,120,0.15)]"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-3xl font-medium text-primary">02</span>
                <span className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center">
                  <FaGavel className="text-[18px]" />
                </span>
              </div>
              <h3 className="font-serif text-xl text-on-surface mb-3">
                Place Your Bid
              </h3>
              <p className="font-reading text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Input your custom bid or select one-click increments matching or exceeding the current minimum permitted bid (৳ {minValidBid.toLocaleString()}).
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-primary/30 text-xs text-primary font-semibold uppercase tracking-wider">
              Phase 2: Formal Offer
            </div>
          </motion.div>

          {/* Step 03: Follow the Auction */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-6 sm:p-8 relative z-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-3xl font-medium text-primary">03</span>
                <span className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
                  <MdLocalShipping className="text-[20px]" />
                </span>
              </div>
              <h3 className="font-serif text-xl text-on-surface mb-3">
                Follow &amp; Win
              </h3>
              <p className="font-reading text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Receive real-time notifications if outbid. Upon final gavel closing, the highest accepted bidder receives tamper-evident insured courier shipment.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 text-xs text-primary font-semibold uppercase tracking-wider">
              Phase 3: Gavel &amp; Settlement
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
