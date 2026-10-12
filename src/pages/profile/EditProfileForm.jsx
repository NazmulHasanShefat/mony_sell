import React, { useState } from "react";
import {
  FiUser,
  FiMail,
  FiShield,
  FiCheckCircle,
  FiX,
  FiSave,
  FiAlertCircle,
  FiCamera,
  FiUploadCloud,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function EditProfileForm({ isOpen = true, onClose }) {
  // State for avatar image preview
  const [avatarPreview, setAvatarPreview] = useState(
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDoj5TFDART4jrR5IsMfJICEKNxCMT7K2n6xcuVsDMuWqzqm9cnyB2NWqkX78CtcKBAE9lHDfSUqgsnGbo2mnWPQW-esKMlOuZOZ-hxP9De83qorMY9u8n8Ur6aAu4UOw7bVSZkldcPTia2t-FNl-hEkmtPmWanN9k4aTIwfkYznnmyPz9-rqsb3y9Wdp9O6qBck5q2In8AxP_ZBs63EHDqdSJtjz0VuZJmDErgu_77u0nT2yA7CdmStw"
  );

  // State to manage toast popup
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  // Handle avatar file selection preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        showToast("Image size must be less than 5MB.", "error");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Trigger bottom-right animated toast notification
  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "success" });
    }, 4000);
  };

  // Form Submission Handler using Object.fromEntries(new FormData(...))
  const handleProfileSubmit = (e) => {
    e.preventDefault();

    // Capture form data using FormData & Object.fromEntries
    const formData = new FormData(e.currentTarget);
    const profileData = Object.fromEntries(formData.entries());

    // Log submitted profile data (including File object) to console
    console.log("UPDATED PROFILE DATA:", profileData);

    // Show animated feedback toast
    showToast("Profile credentials updated successfully!", "success");

    // Close modal after delay if onClose handler exists
    if (onClose) {
      setTimeout(() => {
        onClose();
      }, 1500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="relative w-full max-w-[540px] mx-auto my-5 p-4 sm:p-6 bg-[#161616] border border-[#2a2a2a] rounded-2xl shadow-2xl font-sans">
      {/* Header Section */}
      <div className="flex items-center justify-between border-b border-[#262626] pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20">
            <FiShield className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold tracking-wider text-[#f3f3f3] uppercase">
              Edit Collector Dossier
            </h2>
            <p className="text-[11px] text-[#888888]">
              Update accredited patron info & institutional references
            </p>
          </div>
        </div>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="text-[#777777] hover:text-[#ffffff] p-1.5 rounded-lg transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Edit Profile Form */}
      <form onSubmit={handleProfileSubmit} className="space-y-4">
        {/* Avatar Image Upload Field */}
        <div>
          <label className="block text-[10px] font-bold tracking-widest text-[#aaaaaa] uppercase mb-2">
            Collector Portrait
          </label>
          <div className="flex items-center gap-4 p-3 bg-[#101010] border border-[#262626] rounded-xl">
            {/* Avatar Preview Circle */}
            <div className="relative shrink-0 group">
              <img
                src={avatarPreview}
                alt="Collector Avatar Preview"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-[#d4af37]/40 shadow-md transition-opacity group-hover:opacity-80"
              />
              <label
                htmlFor="avatar-upload"
                className="absolute inset-0 flex items-center justify-center rounded-full bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-[#d4af37]"
              >
                <FiCamera className="w-5 h-5" />
              </label>
            </div>

            {/* Upload Area / Dropzone */}
            <div className="flex-1">
              <label
                htmlFor="avatar-upload"
                className="flex flex-col items-center justify-center border border-dashed border-[#333333] hover:border-[#d4af37] bg-[#141414] hover:bg-[#1a1a1a] rounded-xl p-3 cursor-pointer transition-all text-center group"
              >
                <FiUploadCloud className="w-5 h-5 text-[#d4af37] mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-[#e0e0e0]">
                  Click to upload new portrait
                </span>
                <span className="text-[10px] text-[#777777] mt-0.5">
                  PNG, JPG or WEBP (Max 5MB)
                </span>
                <input
                  id="avatar-upload"
                  type="file"
                  name="avatar"
                  accept="image/png, image/jpeg, image/webp"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-[10px] font-bold tracking-widest text-[#aaaaaa] uppercase mb-1.5">
            Full Collector Name
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#777777]">
              <FiUser className="w-4 h-4" />
            </span>
            <input
              type="text"
              name="fullName"
              required
              defaultValue="Arthur Sterling-Vane"
              placeholder="e.g. Arthur Sterling-Vane"
              className="w-full bg-[#101010] border border-[#282828] focus:border-[#d4af37] text-[#f0f0f0] text-xs rounded-xl pl-10 pr-4 py-3 focus:outline-none transition-colors placeholder:text-[#555555]"
            />
          </div>
        </div>

        {/* Email Address */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-[10px] font-bold tracking-widest text-[#aaaaaa] uppercase">
              Collector Email Address
            </label>
            <span className="text-[9px] font-mono tracking-widest text-[#d4af37]/80 uppercase">
              Encrypted ID
            </span>
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#777777]">
              <FiMail className="w-4 h-4" />
            </span>
            <input
              type="email"
              name="email"
              required
              defaultValue="a.sterling-vane@heritage-archive.org"
              placeholder="collector@heritage-archive.org"
              className="w-full bg-[#101010] border border-[#282828] focus:border-[#d4af37] text-[#f0f0f0] text-xs rounded-xl pl-10 pr-4 py-3 focus:outline-none transition-colors placeholder:text-[#555555]"
            />
          </div>
        </div>

        {/* Professional Title / Honorific */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[10px] font-bold tracking-widest text-[#aaaaaa] uppercase mb-1.5">
              Honorific Designation
            </label>
            <input
              type="text"
              name="title"
              defaultValue="FRNS"
              placeholder="e.g. FRNS / ANA Fellow"
              className="w-full bg-[#101010] border border-[#282828] focus:border-[#d4af37] text-[#f0f0f0] text-xs rounded-xl px-3.5 py-3 focus:outline-none transition-colors placeholder:text-[#555555]"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold tracking-widest text-[#aaaaaa] uppercase mb-1.5">
              Patron Tier Class
            </label>
            <select
              name="tier"
              defaultValue="Tier I Sovereign Patron"
              className="w-full bg-[#101010] border border-[#282828] focus:border-[#d4af37] text-[#f0f0f0] text-xs rounded-xl px-3.5 py-3 focus:outline-none transition-colors cursor-pointer"
            >
              <option value="Tier I Sovereign Patron">Tier I Sovereign Patron</option>
              <option value="Tier II Institutional Fellow">Tier II Institutional Fellow</option>
              <option value="Tier III Accredited Collector">Tier III Accredited Collector</option>
            </select>
          </div>
        </div>

        {/* Numismatic Society & Vault Reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[10px] font-bold tracking-widest text-[#aaaaaa] uppercase mb-1.5">
              Numismatic Society
            </label>
            <input
              type="text"
              name="numismaticSociety"
              defaultValue="ANA Fellow #8492-HK"
              placeholder="ANA Fellow ID"
              className="w-full bg-[#101010] border border-[#282828] focus:border-[#d4af37] text-[#f0f0f0] text-xs rounded-xl px-3.5 py-3 focus:outline-none transition-colors placeholder:text-[#555555]"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold tracking-widest text-[#aaaaaa] uppercase mb-1.5">
              Institutional Vault ID
            </label>
            <input
              type="text"
              name="vaultId"
              defaultValue="VLT-7704-IND"
              placeholder="Vault ID"
              className="w-full bg-[#101010] border border-[#282828] focus:border-[#d4af37] text-[#f0f0f0] text-xs rounded-xl px-3.5 py-3 focus:outline-none transition-colors font-mono placeholder:text-[#555555]"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#222222]">
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-[#2e2e2e] bg-[#1c1c1c] text-[#cccccc] hover:bg-[#242424] text-xs font-semibold uppercase tracking-wider transition-all"
            >
              Cancel
            </button>
          )}

          <button
            type="submit"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e6c65c] hover:from-[#e6c65c] hover:to-[#f1d370] text-[#0f0f0f] text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#d4af37]/15 transition-all duration-200 active:scale-[0.99]"
          >
            <FiSave className="w-4 h-4" /> Save Dossier
          </button>
        </div>
      </form>

      {/* Absolute Bottom-Right Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`fixed bottom-5 right-5 z-50 max-w-sm p-4 rounded-xl border flex items-center justify-between gap-3 shadow-2xl backdrop-blur-md ${
              toast.type === "success"
                ? "bg-[#102417]/95 border-[#22c55e]/40 text-[#4ade80] shadow-[#22c55e]/10"
                : "bg-[#281010]/95 border-[#ef4444]/40 text-[#f87171] shadow-[#ef4444]/10"
            }`}
          >
            <div className="flex items-center gap-3 text-xs font-medium">
              {toast.type === "success" ? (
                <FiCheckCircle className="w-5 h-5 flex-shrink-0 text-[#22c55e]" />
              ) : (
                <FiAlertCircle className="w-5 h-5 flex-shrink-0 text-[#ef4444]" />
              )}
              <span>{toast.message}</span>
            </div>
            <button
              type="button"
              onClick={() => setToast({ ...toast, show: false })}
              className="text-neutral-400 hover:text-white transition-colors p-1"
            >
              <FiX className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}