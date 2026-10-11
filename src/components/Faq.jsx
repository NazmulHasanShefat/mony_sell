import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MdExpandMore } from 'react-icons/md';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: '1. What is the historical background of the 1942 One Quarter India coin?',
      a: 'It is a vintage legal tender ¼ Anna denomination coin minted under the British Indian administration during World War II. Due to severe wartime bronze shortages for munitions, mint authorities perforated the coin with a central circular hole to drastically reduce base metal consumption while retaining face value across colonial markets.',
    },
    {
      q: '2. How is this coin’s authenticity verified?',
      a: 'Every specimen lot undergoes comprehensive physical die-match verification, XRF metallurgical density scanning, exact metric diameter verification (25.4 mm), and edge inspection under high-powered stereomicroscopy by certified Heritage Numismatics curators prior to catalog listing.',
    },
    {
      q: '3. What is the current physical condition and grade?',
      a: 'This specimen is graded Extremely Fine (XF-45). The circular leaf wreath shows crisp detail with sharp relief edges, uninterrupted perforation walls, and uniform natural bronze toning without artificial cleaning or tooling marks.',
    },
    {
      q: '4. What was the minimum starting price and what is the current highest bid?',
      a: 'The minimum starting price was established at ৳ 1,000. Currently, the highest valid accepted bid recorded is ৳ 1,500 by collector M***r K., which makes the next required minimum bid ৳ 1,600.',
    },
    {
      q: '5. What is the minimum bid increment rule?',
      a: 'To avoid negligible bidding delays, each progressive bid must exceed the current highest offer by at least ৳ 100. Bidders may also choose larger voluntary steps such as +৳ 250 or +৳ 500.',
    },
    {
      q: '6. Can international collectors participate in this auction?',
      a: 'Yes. International bidders are welcome. All bids are calculated and registered in Bangladeshi Taka (৳ BDT) with automated currency conversion available during checkout via Visa, Mastercard, AMEX, or wire transfer.',
    },
    {
      q: '7. How does the payment settlement and escrow process work?',
      a: 'When the auction ends, the winning bidder has 48 hours to fund the settlement via our secure institutional escrow facility. Funds remain safeguarded until courier delivery and unboxing verification is acknowledged.',
    },
    {
      q: '8. How will the coin be shipped and insured?',
      a: 'The artifact is encapsulated inside an ultrasonic archival numismatic slab with individual hologram security serials, packed in high-density shock-resistant armored transit containers, and delivered via 100% insured courier with signature-only release.',
    },
    {
      q: '9. What happens if I am outbid before the auction closes?',
      a: 'You will receive an instant priority notification via registered email and SMS allowing you to quickly submit a counter-offer before the gavel closes.',
    },
  ];

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-surface-container-lowest py-14 sm:py-20 border-t border-outline-variant/30 scroll-mt-20" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">
            Numismatic Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-on-surface mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-reading text-base sm:text-lg text-on-surface-variant">
            Everything you need to know regarding this specific 1942 wartime lot and our bidding mechanics.
          </p>
        </div>

        <div className="space-y-3" id="faq-list">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-surface-container-low rounded-xl border border-outline-variant/30 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-surface-container transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg text-on-surface pr-4">
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-primary text-[24px]"
                  >
                    <MdExpandMore />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-sm font-reading text-on-surface-variant leading-relaxed border-t border-outline-variant/20">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
