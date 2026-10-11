import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MdClose } from 'react-icons/md';

export default function LightboxModal({ isOpen, imageSrc, caption, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 sm:top-8 right-4 sm:right-8 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:text-primary hover:border hover:border-primary transition-all cursor-pointer z-10"
            aria-label="Close inspection modal"
          >
            <MdClose className="text-[24px] sm:text-[26px]" />
          </button>

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative max-w-xl sm:max-w-2xl w-full aspect-square flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              alt={caption || 'High resolution zoom inspection view'}
              className="max-w-full max-h-full object-contain rounded-xl drop-shadow-[0_24px_64px_rgba(0,0,0,0.9)]"
              src={imageSrc}
            />
          </motion.div>

          {/* Caption */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mt-4 sm:mt-6 font-serif text-lg sm:text-xl text-primary tracking-wide text-center max-w-xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {caption}
          </motion.div>

          <span className="mt-2 text-[10px] sm:text-xs uppercase tracking-widest text-on-surface-variant font-sans">
            Heritage High-Resolution Archive Specimen
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
