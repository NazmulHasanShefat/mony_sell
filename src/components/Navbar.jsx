import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MdAccountBalance, MdMenu, MdClose, MdPerson } from 'react-icons/md';
import { FaGavel } from 'react-icons/fa6';
import { Link, NavLink, useLocation } from 'react-router';
import { authClient } from '../lib/auth-client';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const {
    data: session,
    isPending,
    error,
  } = authClient.useSession();

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'The Coin', to: '/section/coin-specs' },
    { name: 'Live Bidding', to: '/section/live-bidding' },
    { name: 'How It Works', to: '/section/how-it-works' },
    { name: 'FAQ', to: '/section/faq' },
  ];

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const sectionId = location.pathname.startsWith('/section/')
        ? location.pathname.slice('/section/'.length)
        : location.pathname === '/'
          ? 'hero'
          : null;

      if (sectionId) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      } else if (location.pathname !== '/') {
        window.scrollTo({ top: 0 });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = '/signin';
        },
      },
    });
  };

  const getNavLinkClassName = (baseClassName, inactiveTextClassName) => ({ isActive }) =>
    `${baseClassName} ${isActive ? 'text-primary' : inactiveTextClassName}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#131313]/90 backdrop-blur-xl border-b border-outline-variant/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo / Wordmark */}
        <NavLink to="/" end className="flex items-center gap-3 group">
          <span className="w-10 h-10 rounded-full border border-primary/40 bg-surface-container flex items-center justify-center text-primary group-hover:border-primary transition-colors shrink-0">
            <MdAccountBalance className="text-[22px]" />
          </span>
          <div className="sm:flex flex-col hidden">
            <span className="font-serif text-lg sm:text-xl tracking-[0.2em] text-primary uppercase font-medium leading-none">
              HERITAGE AUCTIONS
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.22em] text-on-surface-variant/80 uppercase mt-1">
              Numismatics &amp; Fine Antiquities
            </span>
          </div>
        </NavLink>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              end
              className={getNavLinkClassName(
                'text-sm uppercase tracking-[0.14em] hover:text-primary transition-colors font-medium',
                'text-on-surface-variant',
              )}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Right CTAs */}
        <div className="hidden sm:flex items-center gap-4 lg:gap-6">
          {!isPending && (
            <>
              {session ? (
                <>
                  <Link
                    to="/profile"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-on-surface-variant hover:text-primary transition-colors font-medium"
                  >
                    <MdPerson className="text-base" />
                    <span>Profile</span>
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="inline-flex items-center h-11 px-5 border border-primary/40 hover:border-primary text-primary font-semibold text-xs uppercase tracking-[0.15em] rounded transition-all"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/signin"
                    end
                    onClick={handleLinkClick}
                    className="text-xs uppercase tracking-[0.14em] text-on-surface-variant hover:text-primary transition-colors font-medium hidden md:inline-block"
                  >
                    Sign In
                  </NavLink>
                  <Link
                    to="/signup"
                    className="inline-flex items-center gap-2 h-11 px-5 lg:px-6 bg-primary hover:bg-[#d8af65] text-on-primary font-semibold text-xs uppercase tracking-[0.15em] rounded transition-all shadow-[0_4px_16px_rgba(233,193,120,0.2)] hover:shadow-[0_6px_24px_rgba(233,193,120,0.35)] active:scale-[0.98]"
                  >
                    <FaGavel className="text-[14px]" />
                    <span>Sign up</span>
                  </Link>
                </>
              )}
            </>
          )}
        </div>

        {/* Mobile / Tablet Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          {!isPending && (
            <>
              {session ? (
                <Link
                  to="/profile"
                  className="sm:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-surface-container border border-outline-variant/40 text-primary hover:border-primary transition-colors shrink-0"
                  title="Profile"
                >
                  <MdPerson className="text-xl" />
                </Link>
              ) : (
                <Link
                  to="/signup"
                  className="sm:hidden inline-flex items-center h-10 px-3 bg-primary text-on-primary text-xs font-semibold uppercase tracking-[0.1em] rounded shrink-0"
                >
                  Sign Up
                </Link>
              )}
            </>
          )}

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
                <NavLink
                  key={link.name}
                  to={link.to}
                  end
                  onClick={handleLinkClick}
                  className={getNavLinkClassName(
                    'text-sm uppercase tracking-[0.16em] hover:text-primary py-2 border-b border-outline-variant/20 transition-colors font-medium',
                    'text-on-surface',
                  )}
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <NavLink
                  to="/section/make-your-offer"
                  end
                  onClick={handleLinkClick}
                  className="w-full h-12 inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#d8af65] text-on-primary font-semibold text-xs uppercase tracking-[0.16em] rounded shadow-[0_4px_16px_rgba(233,193,120,0.2)]"
                >
                  <FaGavel className="text-[15px]" />
                  <span>Place a Bid (৳ 1,600)</span>
                </NavLink>

                {!isPending && (
                  <>
                    {session ? (
                      <>
                        <Link
                          to="/profile"
                          onClick={handleLinkClick}
                          className="w-full h-11 inline-flex items-center justify-center gap-2 border border-outline-variant/40 text-on-surface font-semibold text-xs uppercase tracking-[0.16em] rounded"
                        >
                          <MdPerson className="text-base" />
                          <span>Profile</span>
                        </Link>
                        <button
                          onClick={() => {
                            handleLinkClick();
                            handleSignOut();
                          }}
                          className="w-full h-11 inline-flex items-center justify-center bg-primary/20 hover:bg-primary/30 text-primary font-semibold text-xs uppercase tracking-[0.16em] rounded transition-colors"
                        >
                          Sign Out
                        </button>
                      </>
                    ) : (
                      <div className="flex gap-3 pt-2">
                        <Link
                          to="/signin"
                          onClick={handleLinkClick}
                          className="flex-1 h-11 inline-flex items-center justify-center border border-outline-variant/40 text-on-surface font-semibold text-xs uppercase tracking-[0.16em] rounded"
                        >
                          Sign In
                        </Link>
                        <Link
                          to="/signup"
                          onClick={handleLinkClick}
                          className="flex-1 h-11 inline-flex items-center justify-center bg-primary text-on-primary font-semibold text-xs uppercase tracking-[0.16em] rounded"
                        >
                          Sign Up
                        </Link>
                      </div>
                    )}
                  </>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}