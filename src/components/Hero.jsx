import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MdVerified,
  MdHistoryEdu,
  MdStars,
  MdVerifiedUser,
  MdLock,
  MdZoomIn,
} from "react-icons/md";
import { FaGavel, FaShield } from "react-icons/fa6";
import { HiArrowDown } from "react-icons/hi2";

export default function Hero({ coinImage, onOpenLightbox }) {
  const [face, setFace] = useState("obverse"); // 'obverse' | 'reverse'
  const [displayFace, setDisplayFace] = useState("obverse"); // Actual image being shown

  const currentCaption =
    displayFace === "obverse"
      ? "One Quarter Anna India 1942 — Obverse Specimen (Vine Wreath & Center Hole)"
      : "One Quarter Anna India 1942 — Reverse Inscription View (Wartime Stamped Die)";

  // Handle smooth face switching during 3D rotation midpoint
  const handleFaceSwitch = (targetFace) => {
    if (face === targetFace) return;
    setFace(targetFace);
  };

  return (
    <section
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:pt-8 sm:pt-12 pb-14 sm:pb-20 scroll-mt-20"
      id="hero"
    >
      {/* Ambient spotlight backdrop */}
      <div className="absolute top-1/4 right-1/4 -translate-y-1/2 w-[300px] sm:w-[450px] lg:w-[550px] h-[300px] sm:h-[450px] lg:h-[550px] bg-primary/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />
      <div className="absolute -top-12 left-4 sm:left-10 w-[250px] sm:w-[350px] lg:w-[420px] h-[250px] sm:h-[350px] lg:h-[420px] bg-primary/5 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Copy & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start lg:pr-4"
        >
          {/* Gold Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high border border-primary/30 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-primary">
              EXCLUSIVE COIN AUCTION
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.1] sm:leading-[1.08] text-on-surface mb-3 tracking-[-0.02em]">
            Own a Piece
            <br />
            <span className="italic text-primary font-serif font-light">
              of History.
            </span>
          </h1>

          {/* Sub-product Title */}
          <div className="inline-block mt-2 mb-4 px-3.5 py-1 rounded bg-surface-container-low border border-outline-variant/40">
            <h2 className="text-sm sm:text-base uppercase tracking-[0.2em] text-primary font-semibold">
              One Quarter India – 1942
            </h2>
          </div>

          {/* Short Description */}
          <p className="font-reading text-base sm:text-lg lg:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-6 sm:mb-8">
            An authentic, center-perforated wartime legal tender minted under
            British Indian sovereignty during the 1942 Pacific crisis. Preserved
            in remarkable museum-grade archival clarity.
          </p>

          {/* Metadata Chips */}
          <div className="flex items-center flex-wrap gap-2.5 sm:gap-3 mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-md bg-surface-container border border-outline-variant/30 text-[11px] sm:text-xs tracking-wider uppercase text-on-surface font-medium">
              <MdVerified className="text-primary text-[16px]" />
              <span>Historical Collectible</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-md bg-surface-container border border-outline-variant/30 text-[11px] sm:text-xs tracking-wider uppercase text-on-surface font-medium">
              <MdHistoryEdu className="text-primary text-[16px]" />
              <span>Year: 1942</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-md bg-surface-container border border-outline-variant/30 text-[11px] sm:text-xs tracking-wider uppercase text-on-surface font-medium">
              <MdStars className="text-primary text-[16px]" />
              <span>Single-Item Auction</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <a
              href="#make-your-offer"
              className="inline-flex items-center justify-center gap-2.5 h-12 sm:h-13 px-6 sm:px-8 bg-primary hover:bg-[#d8af65] text-on-primary font-semibold text-xs sm:text-sm uppercase tracking-[0.16em] rounded-lg shadow-[0_8px_24px_rgba(233,193,120,0.25)] hover:shadow-[0_10px_32px_rgba(233,193,120,0.4)] transition-all active:scale-[0.98]"
            >
              <FaGavel className="text-[16px] sm:text-[18px]" />
              <span>Place Your Bid</span>
            </a>
            <a
              href="#coin-specs"
              className="inline-flex items-center justify-center gap-2 h-12 sm:h-13 px-5 sm:px-7 border border-outline hover:border-primary text-on-surface hover:text-primary font-medium text-xs sm:text-sm uppercase tracking-[0.16em] rounded-lg bg-surface-container-low hover:bg-surface-container transition-all"
            >
              <span>Explore Coin Details</span>
              <HiArrowDown className="text-[16px] sm:text-[18px]" />
            </a>
          </div>

          {/* Assurance bullet points */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 sm:mt-10 pt-6 border-t border-outline-variant/40 text-[11px] sm:text-xs text-on-surface-variant tracking-wider uppercase">
            <span className="flex items-center gap-1.5">
              <MdVerifiedUser className="text-primary text-[16px]" />
              <span>Authenticity Guaranteed</span>
            </span>
            <span className="text-outline-variant hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <FaShield className="text-primary text-[14px]" />
              <span>Insured Global Dispatch</span>
            </span>
            <span className="text-outline-variant hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <MdLock className="text-primary text-[16px]" />
              <span>Escrow Protection</span>
            </span>
          </div>
        </motion.div>

        {/* Right Column: Museum Pedestal Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-5 row-start-1 sm:row-auto relative flex items-center justify-center sm:mt-6 lg:mt-0"
        >
          {/* Multi-tier Pedestal Card */}
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] aspect-square rounded-2xl bg-gradient-to-b from-surface-container-high/90 to-surface-container-lowest border border-outline-variant/40 p-4 sm:p-6 lg:p-7 flex flex-col items-center justify-between shadow-[0_24px_64px_rgba(0,0,0,0.85)] group">
            {/* Pedestal Background Glow */}
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_45%,rgba(233,193,120,0.18),transparent_65%)] pointer-events-none" />

            {/* Spotlight Rings */}
            <div className="absolute w-[240px] sm:w-[320px] lg:w-[360px] h-[240px] sm:h-[320px] lg:h-[360px] rounded-full border border-primary/20 pointer-events-none animate-pulse" />
            <div className="absolute w-[280px] sm:w-[380px] lg:w-[420px] h-[280px] sm:h-[380px] lg:h-[420px] rounded-full border border-primary/10 pointer-events-none" />

            {/* Obverse / Reverse Perspective Switcher */}
            <div className="relative z-10 flex items-center gap-1 p-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/30 text-[10px] sm:text-[11px] uppercase tracking-wider">
              <button
                type="button"
                onClick={() => handleFaceSwitch("obverse")}
                className={`px-3 py-1 rounded-full font-medium transition-all cursor-pointer ${
                  face === "obverse"
                    ? "bg-primary text-on-primary font-semibold shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                Obverse View
              </button>
              <button
                type="button"
                onClick={() => handleFaceSwitch("reverse")}
                className={`px-3 py-1 rounded-full font-medium transition-all cursor-pointer ${
                  face === "reverse"
                    ? "bg-primary text-on-primary font-semibold shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                Reverse View
              </button>
            </div>

            {/* Coin Image with Synced 3D Flip & Midpoint Image Swap */}
            <div
              className="relative z-10 w-[190px] sm:w-[250px] lg:w-[290px] h-[190px] sm:h-[250px] lg:h-[290px] flex items-center justify-center cursor-pointer transition-transform duration-500 ease-out group-hover:scale-105 my-auto"
              onClick={() => onOpenLightbox(coinImage, currentCaption)}
              title="Click for full 360° inspection"
            >
              <motion.div
                animate={{ rotateY: face === "reverse" ? 180 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                onUpdate={(latest) => {
                  // When the rotation crosses 90 degrees (halfway point), swap the image source smoothly
                  if (face === "reverse" && latest.rotateY >= 90) {
                    setDisplayFace("reverse");
                  } else if (face === "obverse" && latest.rotateY <= 90) {
                    setDisplayFace("obverse");
                  }
                }}
                className="w-full h-full flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.img
                  alt="One Quarter Anna India 1942 vintage wartime holed coin"
                  className="w-full h-full object-contain rounded-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)] filter contrast-105 brightness-95"
                  src={
                    displayFace === "obverse" ? "/coin-back.png" : "/coin-front.png"
                  }
                  loading="eager"
                  style={{
                    // Prevent mirror text issue by countering the rotation when showing reverse face
                    transform: displayFace === "reverse" ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                />
              </motion.div>

              {/* Tap to Zoom Tooltip */}
              <div className="absolute bottom-0 right-1 sm:right-2 inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-surface-container-highest/90 backdrop-blur-md border border-primary/30 text-primary text-[10px] sm:text-xs uppercase tracking-wider shadow-lg group-hover:border-primary transition-colors">
                <MdZoomIn className="text-[16px]" />
                <span>360° Inspection</span>
              </div>
            </div>

            {/* Pedestal Base Plate Text */}
            <div className="relative z-10 mt-2 w-full flex items-center justify-between px-3 py-2 bg-surface-container-lowest/80 backdrop-blur-md rounded-lg border border-outline-variant/30 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-on-surface-variant font-medium">
              <span className="text-primary font-semibold">Lot #1942-IND</span>
              <span>Weight: 4.88g</span>
              <span>Dia: 25.4mm</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}