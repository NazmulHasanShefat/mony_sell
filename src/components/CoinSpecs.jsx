import { motion } from 'motion/react';
import { MdVerifiedUser, MdOpenInFull } from 'react-icons/md';

export default function CoinSpecs({ coinImage, onOpenLightbox }) {
  const perspectives = [
    {
      id: 'obverse',
      title: '1. Obverse View',
      sub: 'Main Face',
      caption: '1. Obverse View — Intricate Vine Wreath and Center Hole',
      image: "/coin-front.png",
      imgClass: 'w-full h-full object-contain group-hover:scale-105 transition-transform duration-300',
    },
    {
      id: 'reverse',
      title: '2. Reverse Inscription',
      sub: 'Typographic Die',
      image: "/coin-back.png",
      caption: '2. Reverse Inscription View — Stamped Wartime Markings',
      imgClass: 'w-full h-full object-contain filter rotate-180 group-hover:scale-105 transition-transform duration-300',
    },

  ];

  return (
    <section className="w-full bg-surface-container-lowest py-14 sm:py-20 border-t border-outline-variant/30 scroll-mt-20" id="coin-specs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">
            Archival Dossier
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-on-surface mt-2 mb-4">
            Explore the Coin
          </h2>
          <p className="font-reading text-base sm:text-lg text-on-surface-variant">
            Examine uncompromised museum disclosure parameters and macro inspection angles captured under controlled cross-polarized lighting.
          </p>
        </div>

        {/* Two-column editorial section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Column 1: Museum Ledger Specifications Grid */}
          <div className="lg:col-span-6 bg-surface-container-low rounded-2xl p-6 sm:p-8 border border-outline-variant/30">
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30 mb-6">
              <h3 className="font-serif text-xl sm:text-2xl text-on-surface">
                Numismatic Ledger
              </h3>
              <span className="text-xs uppercase tracking-wider text-primary font-medium">
                Specimen #IND-42-01
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-6">
              <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/20">
                <span className="block text-[11px] uppercase tracking-wider text-on-surface-variant font-medium">
                  Denomination
                </span>
                <span className="font-sans text-base text-on-surface font-semibold mt-1 block">
                  ¼ Anna (Holed)
                </span>
              </div>

              <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/20">
                <span className="block text-[11px] uppercase tracking-wider text-on-surface-variant font-medium">
                  Mint Year
                </span>
                <span className="font-sans text-base text-primary font-semibold mt-1 block">
                  1942 (Wartime Struck)
                </span>
              </div>

              <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/20">
                <span className="block text-[11px] uppercase tracking-wider text-on-surface-variant font-medium">
                  Territory / Authority
                </span>
                <span className="font-sans text-base text-on-surface font-semibold mt-1 block">
                  British India
                </span>
              </div>

              <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/20">
                <span className="block text-[11px] uppercase tracking-wider text-on-surface-variant font-medium">
                  Composition
                </span>
                <span className="font-sans text-base text-on-surface font-semibold mt-1 block">
                  Phosphor Bronze
                </span>
              </div>

              <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/20">
                <span className="block text-[11px] uppercase tracking-wider text-on-surface-variant font-medium">
                  Diameter &amp; Weight
                </span>
                <span className="font-sans text-base text-on-surface font-semibold mt-1 block">
                  25.4 mm · 4.88 grams
                </span>
              </div>

              <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/20">
                <span className="block text-[11px] uppercase tracking-wider text-on-surface-variant font-medium">
                  Preserved Grade
                </span>
                <span className="font-sans text-base text-secondary font-semibold mt-1 block">
                  Extremely Fine (XF-45)
                </span>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-primary/30 flex items-start gap-3.5">
              <MdVerifiedUser className="text-primary text-[24px] shrink-0 mt-0.5" />
              <div>
                <span className="font-sans text-sm font-semibold text-on-surface block">
                  Curatorial Authenticity Guarantee
                </span>
                <p className="font-reading text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed">
                  Attributed under British Colonial Coinage cataloging norms. Features natural chocolate patina, crisp serif letterings, and undisturbed edge beading. Guaranteed authentic for lifetime ownership.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: 4-Perspective Inspection Gallery */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2">
              <h3 className="font-serif text-xl sm:text-2xl text-on-surface">
                Macro Inspection Perspectives
              </h3>
              <span className="text-xs uppercase tracking-widest text-on-surface-variant">
                Click to enlarge
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {perspectives.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => onOpenLightbox(coinImage, item.caption)}
                  className="group bg-surface-container-low border border-outline-variant/30 hover:border-primary/60 rounded-xl p-3 cursor-pointer transition-all"
                >
                  <div className="aspect-square bg-surface-container-lowest rounded-lg overflow-hidden flex items-center justify-center p-3 relative">
                    <img
                      alt={item.title}
                      className={item.imgClass}
                      src={item.image}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                    <span className="absolute bottom-2 right-2 p-1.5 rounded bg-surface-container-highest/80 text-primary">
                      <MdOpenInFull className="text-[16px]" />
                    </span>
                  </div>
                  <div className="mt-2.5 flex items-center justify-between px-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-on-surface">
                      {item.title}
                    </span>
                    <span className="text-[11px] text-primary">
                      {item.sub}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
