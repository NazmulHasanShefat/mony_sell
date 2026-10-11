import { motion } from 'motion/react';
import { MdOutlinePayments, MdGroups, MdVerified, MdLockClock } from 'react-icons/md';
import { FaGavel } from 'react-icons/fa6';

export default function AuctionStatus({
  highestBid,
  highestBidder,
  totalBids,
  activeBidders,
  timeRemaining = 9840,
}) {
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
  };

  return (
    <section className="w-full bg-surface-container-lowest border-y border-outline-variant/30 py-10 sm:py-12 scroll-mt-20" id="live-bidding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Strip with Live Pill & Countdown Timer */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-outline-variant/20">
          <div className="flex items-center gap-3">
            <span className="h-6 w-1 bg-primary rounded-full" />
            <h3 className="font-serif text-xl sm:text-2xl text-on-surface font-normal">
              Current Auction Status
            </h3>
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-on-surface-variant font-sans ml-1 sm:ml-2">
              Single Lot Gavel
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Live Countdown Clock */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container border border-outline-variant/40 text-xs text-on-surface font-mono">
              <MdLockClock className="text-primary text-[17px]" />
              <span className="text-[11px] uppercase tracking-wider text-on-surface-variant font-sans">
                Closes:
              </span>
              <span className="text-primary font-bold tracking-wider">
                {formatTime(timeRemaining)}
              </span>
            </div>

            {/* Glowing Live Pill Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high border border-primary/40 shadow-[0_0_15px_rgba(233,193,120,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                LIVE AUCTION
              </span>
            </div>
          </div>
        </div>

        {/* 3 Key Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* Card A: Minimum Starting Price */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-outline-variant/60 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-[0.18em] text-on-surface-variant font-medium">
                Minimum Starting Price
              </span>
              <MdOutlinePayments className="text-outline text-[20px]" />
            </div>
            <div className="my-3">
              <span className="font-serif text-3xl sm:text-4xl text-on-surface tracking-tight">৳ 1,000</span>
            </div>
            <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between text-xs text-on-surface-variant">
              <span>The minimum permitted opening bid.</span>
              <span className="text-primary font-medium">Reserve Met</span>
            </div>
          </motion.div>

          {/* Card B: Current Highest Bid (Hero Typography) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-gradient-to-b from-surface-container-high to-surface-container border-2 border-primary/60 rounded-xl p-5 sm:p-6 flex flex-col justify-between relative shadow-[0_12px_36px_rgba(233,193,120,0.12)]"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-primary/20 text-primary text-[10px] uppercase font-bold tracking-widest">
                LEADER
              </div>
              <span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
                Current Highest Bid
              </span>
              <FaGavel className="text-primary text-[18px]" />
            </div>
            <div className="my-2 flex items-baseline gap-2">
              <span className="font-serif text-4xl sm:text-5xl font-medium text-primary tracking-tight">
                ৳ {highestBid.toLocaleString()}
              </span>
              <span className="text-xs uppercase tracking-wider text-on-surface-variant">BDT</span>
            </div>
            <div className="pt-3 border-t border-primary/30 flex items-center justify-between text-xs">
              <span className="text-on-surface font-medium">Highest valid offer so far.</span>
              <span className="text-primary font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Bidder: {highestBidder}</span>
              </span>
            </div>
          </motion.div>

          {/* Card C: Total Bids */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-outline-variant/60 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-[0.18em] text-on-surface-variant font-medium">
                Total Bids Logged
              </span>
              <MdGroups className="text-outline text-[22px]" />
            </div>
            <div className="my-3 flex items-baseline gap-2">
              <span className="font-serif text-3xl sm:text-4xl text-on-surface tracking-tight">
                {totalBids} bids
              </span>
              <span className="text-xs text-secondary font-medium">{activeBidders} active bidders</span>
            </div>
            <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between text-xs text-on-surface-variant">
              <span>Verified collector offers</span>
              <MdVerified className="text-primary text-[16px]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
