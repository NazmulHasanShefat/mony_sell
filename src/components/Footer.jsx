import { MdAccountBalance } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 pt-12 sm:pt-16 pb-10 sm:pb-12 text-on-surface-variant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 sm:pb-14 border-b border-outline-variant/20">
          {/* Col 1: Brand Info */}
          <div className="sm:col-span-2 lg:col-span-5 flex flex-col items-start lg:pr-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-full border border-primary/40 bg-surface-container flex items-center justify-center text-primary shrink-0">
                <MdAccountBalance className="text-[20px]" />
              </span>
              <span className="font-serif text-lg sm:text-xl tracking-[0.22em] text-primary uppercase font-medium">
                HERITAGE AUCTIONS
              </span>
            </div>
            <p className="font-reading text-xs sm:text-sm text-on-surface-variant leading-relaxed max-w-sm mb-6">
              Premier curatorial house dedicated to the preservation, scientific attribution, and authenticated exchange of sovereign numismatic artifacts, war tokens, and historic memorabilia.
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs uppercase tracking-wider text-outline">
              <span>Govt. Reg. #NUM-84912</span>
              <span>•</span>
              <span>Member ANA &amp; IBNS</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-on-surface font-semibold mb-3 sm:mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans">
              <li>
                <a className="hover:text-primary transition-colors" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#coin-specs">
                  The 1942 Coin
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#live-bidding">
                  Live Bidding
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#how-it-works">
                  How It Works
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#faq">
                  Inquiries &amp; FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Collector Services */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-on-surface font-semibold mb-3 sm:mb-4">
              Curatorial
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans">
              <li>
                <a className="hover:text-primary transition-colors" href="#coin-specs">
                  Condition Grading
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#coin-specs">
                  Archival Provenance
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#make-your-offer">
                  Consignment Desk
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#how-it-works">
                  Armored Courier
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#make-your-offer">
                  Escrow Guarantee
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Escrow Desk */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-on-surface font-semibold mb-3 sm:mb-4">
              Curatorial Escrow Desk
            </h4>
            <p className="font-reading text-xs text-on-surface-variant leading-relaxed mb-4">
              Direct specialist consultation available for institutional curators and private estates.
            </p>
            <div className="p-3.5 rounded-lg bg-surface-container border border-outline-variant/30 text-xs">
              <span className="block text-primary font-medium uppercase tracking-wider mb-1">
                Direct Curatorial Concierge
              </span>
              <span className="text-on-surface font-mono break-all">
                curator@heritage-auctions.org
              </span>
            </div>
          </div>
        </div>

        {/* Legal & Disclaimer */}
        <div className="pt-6 sm:pt-8 flex flex-col gap-4 text-xs font-sans text-outline">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <a className="hover:text-primary transition-colors" href="#">
                Privacy Policy
              </a>
              <span>•</span>
              <a className="hover:text-primary transition-colors" href="#">
                Terms of Bidding &amp; Sale
              </a>
              <span>•</span>
              <a className="hover:text-primary transition-colors" href="#">
                Numismatic Grading Code
              </a>
              <span>•</span>
              <a className="hover:text-primary transition-colors" href="#">
                Anti-Money Laundering (AML) Compliance
              </a>
            </div>
            <div>
              © 2025 Heritage Auctions Numismatics International. All rights reserved.
            </div>
          </div>
          <p className="leading-relaxed text-[11px] text-outline/80">
            Disclaimer: All bids placed on the Heritage Auctions platform are legally enforceable binding commitments. Historical valuations and grades reflect independent professional numismatic appraisal. Tamper-evident archival seals protect buyer authenticity guarantees under full title indemnity.
          </p>
        </div>
      </div>
    </footer>
  );
}
