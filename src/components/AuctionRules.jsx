import { MdCheckCircle } from 'react-icons/md';

export default function AuctionRules() {
  const safeguards = [
    {
      title: 'Anti-Sniping Rule',
      desc: 'Any bid submitted in the final 5 minutes auto-extends the auction clock by 5 additional minutes.',
    },
    {
      title: 'Binding Commitments',
      desc: 'All submitted bids constitute legally binding contractual offers to buy at the stated hammer amount.',
    },
    {
      title: 'Escrow Protection',
      desc: 'Payment is held in sovereign trust until the physical lot is received and authenticated by the buyer.',
    },
    {
      title: 'Vaulted Delivery',
      desc: 'Shipped via fully insured armored courier with museum-grade tamper-evident archival casing.',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <div className="bg-surface-container rounded-2xl border border-outline-variant/40 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left text column */}
        <div className="lg:col-span-5 lg:pr-4">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            Integrity Protocol
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-on-surface mt-2 mb-4">
            Auction Rules &amp; Safeguards
          </h2>
          <p className="font-reading text-sm sm:text-base text-on-surface-variant leading-relaxed mb-6">
            Heritage Auctions numismatic protocols strictly protect all registered buyers and sellers with legally binding settlement commitments and transparent gavel conditions.
          </p>
          <a
            href="#make-your-offer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-primary font-semibold hover:underline"
          >
            <span>Read full collector terms</span> →
          </a>
        </div>

        {/* Right safeguards grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {safeguards.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 bg-surface-container-low p-4 rounded-xl border border-outline-variant/20"
            >
              <MdCheckCircle className="text-primary text-[22px] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-on-surface uppercase tracking-wide">
                  {item.title}
                </h4>
                <p className="text-xs font-reading text-on-surface-variant mt-1 leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
