import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MdVerifiedUser, MdLock, MdInfoOutline, MdCheckCircle, MdErrorOutline, MdTaskAlt, MdLockClock } from 'react-icons/md';
import { FaGavel } from 'react-icons/fa6';

export default function BiddingSection({
  coinImage,
  highestBid,
  bidsList,
  
}) {
  const minValidBid = highestBid + 100;
  const [customBid, setCustomBid] = useState(null);
  const [bidderName, setBidderName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [toastMessage, setToastMessage] = useState(null);
  const [validationError, setValidationError] = useState('');

  const currentBidValue = customBid !== null ? customBid : minValidBid;

  const handleInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    setCustomBid(isNaN(val) ? '' : val);

    if (isNaN(val) || val < minValidBid) {
      setValidationError(`Your bid must be at least ৳ ${minValidBid.toLocaleString()} (Current highest + ৳ 100 min increment).`);
    } else {
      setValidationError('');
    }
  };

  const addIncrement = (amount) => {
    const base = typeof currentBidValue === 'number' && currentBidValue >= minValidBid ? currentBidValue : minValidBid;
    const nextVal = base + amount;
    setCustomBid(nextVal);
    setValidationError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Extract all form values using FormData and Object.fromEntries
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    console.log('Form Entries:', formValues);

    const numericBid = parseInt(currentBidValue, 10);

    if (isNaN(numericBid) || numericBid < minValidBid) {
      setValidationError(`The minimum valid bid offer is ৳ ${minValidBid.toLocaleString()}.`);
      return;
    }

    const maskedName = bidderName.trim()
      ? bidderName.trim().slice(0, 1).toUpperCase() + '***' + bidderName.trim().slice(-1).toUpperCase() + ' (You)'
      : 'Y***u (You)';

  

    setToastMessage(`Congratulations! Your bid of ৳ ${numericBid.toLocaleString()} has been placed as the highest offer.`);
    setCustomBid(numericBid + 100);
    setBidderName('');
    setContactNumber('');
    setValidationError('');

    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 scroll-mt-20" id="make-your-offer">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* SECTION: Interactive Bidding Form Card (Left Column) */}
        <div className="lg:col-span-12 bg-surface-container rounded-2xl border border-primary/30 p-6 sm:p-8 shadow-2xl relative">
          {/* Ambient gold shimmer */}
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-outline-variant/30 mb-6 gap-4">
            <div className="flex items-center gap-3.5 sm:gap-4">
              {/* Coin Thumbnail */}
              <img
                alt="One Quarter India coin thumb"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-contain bg-surface-container-lowest border border-primary/40 p-1 drop-shadow-md shrink-0"
                src={coinImage}
              />
              <div>
                <span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
                  Make Your Offer
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-on-surface">
                  One Quarter India – 1942
                </h3>
                <span className="text-xs text-on-surface-variant font-sans">
                  Single Wartime Numismatic Lot
                </span>
              </div>
            </div>

            <div className="sm:text-right bg-surface-container-low sm:bg-transparent p-2.5 sm:p-0 rounded-lg sm:rounded-none w-full sm:w-auto">
              <span className="text-[11px] uppercase tracking-wider text-on-surface-variant block">
                Next Valid Bid
              </span>
              <span className="font-serif text-xl font-medium text-primary">
                ≥ ৳ {minValidBid.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Bidding Form UI */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Minimum Permitted Next Bid Pill */}
            <div className="p-3 sm:p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MdInfoOutline className="text-primary text-[18px] shrink-0" />
                <span className="text-xs text-on-surface">Minimum permitted next bid:</span>
              </div>
              <span className="font-serif text-base sm:text-lg text-primary font-semibold">
                ৳ {minValidBid.toLocaleString()}
              </span>
            </div>

            {/* Optional Collector Alias */}
            <div>
              <label
                className="block text-xs uppercase tracking-[0.16em] text-on-surface-variant font-medium mb-1.5"
                htmlFor="bidderAlias"
              >
                Collector Name / Alias (Optional)
              </label>
              <input
                id="bidderAlias"
                name="bidderAlias"
                type="text"
                value={bidderName}
                onChange={(e) => setBidderName(e.target.value)}
                placeholder="e.g. Tariq Khan (will be masked as T***n)"
                className="w-full h-11 px-4 bg-surface-container-lowest border border-outline focus:border-primary focus:ring-1 focus:ring-primary rounded-lg text-sm text-on-surface placeholder:text-on-surface-variant/40 outline-none transition-all"
              />
            </div>

            {/* Contact Number Field */}
            <div>
              <label
                className="block text-xs uppercase tracking-[0.16em] text-on-surface-variant font-medium mb-1.5"
                htmlFor="contactNumber"
              >
                Contact Number (Required)
              </label>
              <input
                id="contactNumber"
                name="contactNumber"
                type="tel"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="e.g. +8801700000000"
                required
                className="w-full h-11 px-4 bg-surface-container-lowest border border-outline focus:border-primary focus:ring-1 focus:ring-primary rounded-lg text-sm text-on-surface placeholder:text-on-surface-variant/40 outline-none transition-all"
              />
            </div>

            {/* Currency Input Field */}
            <div>
              <label
                className="block text-xs uppercase tracking-[0.16em] text-on-surface-variant font-medium mb-2"
                htmlFor="bidAmount"
              >
                Your Bid Offer (BDT)
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-4 font-serif text-2xl text-primary font-semibold select-none pointer-events-none">
                  ৳
                </span>
                <input
                  id="bidAmount"
                  type="number"
                  name="bidAmount"
                  value={currentBidValue}
                  onChange={handleInputChange}
                  min={minValidBid}
                  step="50"
                  required
                  className="w-full h-14 pl-12 pr-4 bg-surface-container-lowest border border-outline focus:border-primary focus:ring-1 focus:ring-primary rounded-lg font-serif text-xl sm:text-2xl text-on-surface font-semibold tracking-wide transition-all outline-none"
                />
              </div>

              {validationError ? (
                <p className="mt-2 text-xs text-error flex items-center gap-1.5">
                  <MdErrorOutline className="text-[16px] text-error shrink-0" />
                  <span>{validationError}</span>
                </p>
              ) : (
                <p className="mt-2 text-xs text-on-surface-variant flex items-center gap-1.5">
                  <MdCheckCircle className="text-[15px] text-primary shrink-0" />
                  <span>Your bid must be at least ৳ {minValidBid.toLocaleString()} (Current highest + ৳ 100 min increment).</span>
                </p>
              )}
            </div>

            {/* Quick Increment Buttons */}
            <div>
              <span className="block text-[11px] uppercase tracking-wider text-on-surface-variant mb-2">
                Quick Increments:
              </span>
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => addIncrement(100)}
                  className="h-10 rounded border border-outline-variant hover:border-primary bg-surface-container-low hover:bg-surface-container-high text-xs uppercase tracking-wider text-on-surface font-medium transition-colors"
                >
                  + ৳ 100
                </button>
                <button
                  type="button"
                  onClick={() => addIncrement(250)}
                  className="h-10 rounded border border-outline-variant hover:border-primary bg-surface-container-low hover:bg-surface-container-high text-xs uppercase tracking-wider text-on-surface font-medium transition-colors"
                >
                  + ৳ 250
                </button>
                <button
                  type="button"
                  onClick={() => addIncrement(500)}
                  className="h-10 rounded border border-outline-variant hover:border-primary bg-surface-container-low hover:bg-surface-container-high text-xs uppercase tracking-wider text-on-surface font-medium transition-colors"
                >
                  + ৳ 500
                </button>
              </div>
            </div>

            {/* Primary Submission Button */}
            <button
              type="submit"
              className="w-full h-14 bg-primary hover:bg-[#d8af65] text-on-primary font-semibold text-xs sm:text-sm uppercase tracking-[0.18em] rounded-lg shadow-[0_8px_24px_rgba(233,193,120,0.25)] hover:shadow-[0_12px_32px_rgba(233,193,120,0.4)] transition-all flex items-center justify-center gap-2.5 sm:gap-3 active:scale-[0.99] cursor-pointer"
            >
              <FaGavel className="text-[18px] sm:text-[20px]" />
              <span>Submit Your Bid</span>
            </button>

            {/* Verified Authentication Note & Security Seal */}
            <div className="pt-4 border-t border-outline-variant/30 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-on-surface-variant gap-2 sm:gap-0">
              <div className="flex items-center gap-2">
                <MdVerifiedUser className="text-primary text-[18px]" />
                <span>Encrypted 256-bit ID verification</span>
              </div>
              <div className="flex items-center gap-1.5 text-primary">
                <MdLock className="text-[16px]" />
                <span className="font-medium uppercase tracking-wider text-[10px]">
                  Official Consignment Seal
                </span>
              </div>
            </div>
          </form>

          {/* Toast Notification for bid submission */}
          <AnimatePresence>
            {toastMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-3.5 bg-primary/10 border border-primary text-primary rounded-lg text-xs flex items-center gap-2.5 shadow-lg"
              >
                <MdTaskAlt className="text-[20px] shrink-0" />
                <span>{toastMessage}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}