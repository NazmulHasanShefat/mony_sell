import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MdAccountBalance, MdMenu, MdClose } from 'react-icons/md';
import { FaGavel } from 'react-icons/fa6';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'The Coin', href: '#coin-specs' },
    { name: 'Live Bidding', href: '#live-bidding' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#131313]/90 backdrop-blur-xl border-b border-outline-variant/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo / Wordmark */}
        <a href="#hero" className="flex items-center gap-3 group">
          <span className="w-10 h-10 rounded-full border border-primary/40 bg-surface-container flex items-center justify-center text-primary group-hover:border-primary transition-colors shrink-0">
            <MdAccountBalance className="text-[22px]" />
          </span>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl tracking-[0.2em] text-primary uppercase font-medium leading-none">
              HERITAGE AUCTIONS
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.22em] text-on-surface-variant/80 uppercase mt-1">
              Numismatics &amp; Fine Antiquities
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-[0.14em] text-on-surface-variant hover:text-primary transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Right CTAs */}
        <div className="hidden sm:flex items-center gap-4 lg:gap-6">
          <a
            href="#make-your-offer"
            className="text-xs uppercase tracking-[0.14em] text-on-surface-variant hover:text-primary transition-colors font-medium hidden md:inline-block"
          >
            Sign In
          </a>
          <a
            href="#make-your-offer"
            className="inline-flex items-center gap-2 h-11 px-5 lg:px-6 bg-primary hover:bg-[#d8af65] text-on-primary font-semibold text-xs uppercase tracking-[0.15em] rounded transition-all shadow-[0_4px_16px_rgba(233,193,120,0.2)] hover:shadow-[0_6px_24px_rgba(233,193,120,0.35)] active:scale-[0.98]"
          >
            <FaGavel className="text-[14px]" />
            <span>Place a Bid</span>
          </a>
        </div>

        {/* Mobile / Tablet Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#make-your-offer"
            className="sm:hidden inline-flex items-center justify-center w-10 h-10 bg-primary text-on-primary rounded"
            title="Place a Bid"
          >
            <FaGavel className="text-base" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-lg bg-surface-container border border-outline-variant/40 flex items-center justify-center text-on-surface hover:text-primary hover:border-primary transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <MdClose className="text-2xl" /> : <MdMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden border-t border-outline-variant/30 bg-[#171717] px-6 py-6 overflow-hidden"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-sm uppercase tracking-[0.16em] text-on-surface hover:text-primary py-2 border-b border-outline-variant/20 transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="#make-your-offer"
                  onClick={handleLinkClick}
                  className="w-full h-12 inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#d8af65] text-on-primary font-semibold text-xs uppercase tracking-[0.16em] rounded shadow-[0_4px_16px_rgba(233,193,120,0.2)]"
                >
                  <FaGavel className="text-[15px]" />
                  <span>Place a Bid (৳ 1,600)</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
