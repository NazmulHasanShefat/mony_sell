import React, { useState } from "react";
import {
  FiLock,
  FiUserPlus,
  FiMail,
  FiKey,
  FiUser,
  FiEye,
  FiEyeOff,
  FiShield,
  FiTerminal,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { authClient } from "../lib/auth-client";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberDevice, setRememberDevice] = useState(true);
  const [submittedMessage, setSubmittedMessage] = useState("");

  // Handle form submission using Object.fromEntries
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Include checkbox state explicitly if needed since checkboxes might be omitted if unchecked
    data.rememberDevice = rememberDevice;

    if (activeTab === "register" && data.password === data.confirmPassword) {
      console.log(`${activeTab.toUpperCase()} FORM SUBMISSION DATA:`, data);
      console.log("Password and Confirm Password match.");

      const mydata = await authClient.signUp.email({
        name: data.fullName,
        email: data.email,
        password: data.password,
      });

      console.log("Sign Up Response:", mydata);
    }

    setSubmittedMessage(
      `${activeTab === "signin" ? "Sign In" : "Registration"} successful! Data logged to console.`,
    );
    setTimeout(() => setSubmittedMessage(""), 4000);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#e0e0e0] flex items-center justify-center p-4 sm:p-6 font-sans selection:bg-[#d4af37] selection:text-black">
      {/* Background ambient glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Container Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="relative w-full max-w-[440px] bg-[#161616] border border-[#2a2a2a] rounded-2xl shadow-2xl p-6 sm:p-8 backdrop-blur-md"
      >
        {/* Top Tab Switcher */}
        <div className="grid grid-cols-2 gap-2 bg-[#101010] p-1.5 rounded-xl border border-[#222222] mb-6">
          <button
            type="button"
            onClick={() => setActiveTab("signin")}
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold text-xs tracking-wider transition-all duration-300 ${
              activeTab === "signin"
                ? "bg-[#d4af37] text-[#0f0f0f] shadow-lg shadow-[#d4af37]/20 font-bold"
                : "text-[#888888] hover:text-[#cccccc] bg-transparent"
            }`}
          >
            <FiLock className="w-3.5 h-3.5" />
            SIGN IN
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("register")}
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold text-xs tracking-wider transition-all duration-300 ${
              activeTab === "register"
                ? "bg-[#d4af37] text-[#0f0f0f] shadow-lg shadow-[#d4af37]/20 font-bold"
                : "text-[#888888] hover:text-[#cccccc] bg-transparent"
            }`}
          >
            <FiUserPlus className="w-3.5 h-3.5" />
            REGISTER
          </button>
        </div>

        {/* Section Header */}
        <div className="mb-6">
          <h1 className="text-lg font-bold tracking-wide text-[#f3f3f3] mb-1">
            {activeTab === "signin"
              ? "Collector Portal Access"
              : "New Collector Accreditation"}
          </h1>
          <p className="text-xs text-[#999999] leading-relaxed">
            {activeTab === "signin"
              ? "Enter your authorized credentials to access live floor bidding."
              : "Submit your details to request secure vault registration."}
          </p>
        </div>

        {/* Google OAuth Button (Only show on Sign In or both as preferred) */}

        <>
          <button
            type="button"
            onClick={() => alert("Google authentication simulated.")}
            className="w-full flex items-center justify-center gap-3 bg-[#1c1c1c] hover:bg-[#242424] text-[#e0e0e0] border border-[#2e2e2e] py-3 px-4 rounded-xl font-medium text-xs tracking-wider transition-all duration-200 shadow-sm mb-5 group"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#EA4335"
                d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.1 8.9 5 12 5z"
              />
              <path
                fill="#4285F4"
                d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
              />
              <path
                fill="#FBBC05"
                d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.7s.2-2 .4-2.7L1.6 6.4C.6 8.4 0 10.6 0 13s.6 4.6 1.6 6.6l3.7-2.9z"
              />
              <path
                fill="#34A853"
                d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.1-6.7-5.3L1.6 16c1.9 3.8 5.8 7 10.4 7z"
              />
            </svg>
            <span className="font-semibold tracking-wider text-[11px]">
              CONTINUE WITH GOOGLE
            </span>
          </button>

          {/* Divider */}
          <div className="relative flex py-2 items-center mb-5">
            <div className="flex-grow border-t border-[#262626]"></div>
            <span className="flex-shrink mx-3 text-[10px] tracking-widest text-[#777777] font-semibold uppercase">
              OR CONTINUE WITH ENCRYPTED KEY
            </span>
            <div className="flex-grow border-t border-[#262626]"></div>
          </div>
        </>

        {/* Dynamic Forms based on activeTab */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Register-only: Name Field */}
          {activeTab === "register" && (
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-[10px] font-bold tracking-widest text-[#aaaaaa]">
                  FULL COLLECTOR NAME
                </label>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#777777]">
                  <FiUser className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Lord Archibald Sterling"
                  className="w-full bg-[#101010] border border-[#282828] focus:border-[#d4af37] text-[#f0f0f0] text-xs rounded-xl pl-10 pr-4 py-3.5 focus:outline-none transition-colors placeholder:text-[#555555]"
                />
              </div>
            </div>
          )}

          {/* Email Field */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-[10px] font-bold tracking-widest text-[#aaaaaa]">
                COLLECTOR EMAIL ADDRESS
              </label>
              <span className="text-[9px] font-mono tracking-widest text-[#d4af37]/80 uppercase">
                ENCRYPTED PORT ID
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
                defaultValue="collector@heritage-archive.org"
                placeholder="collector@heritage-archive.org"
                className="w-full bg-[#101010] border border-[#282828] focus:border-[#d4af37] text-[#f0f0f0] text-xs rounded-xl pl-10 pr-4 py-3.5 focus:outline-none transition-colors placeholder:text-[#555555]"
              />
            </div>
          </div>

          {/* Password / Vault Key Field */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-[10px] font-bold tracking-widest text-[#aaaaaa]">
                {activeTab === "signin"
                  ? "VAULT ACCESS KEY"
                  : "CREATE VAULT KEY"}
              </label>
              {activeTab === "signin" && (
                <a
                  href="#recover"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Key recovery protocol initiated.");
                  }}
                  className="text-[10px] font-bold tracking-wider text-[#d4af37] hover:underline"
                >
                  RECOVER KEY?
                </a>
              )}
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#777777]">
                <FiKey className="w-4 h-4" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                defaultValue="secretvaultkey"
                placeholder="••••••••"
                className="w-full bg-[#101010] border border-[#282828] focus:border-[#d4af37] text-[#f0f0f0] text-xs rounded-xl pl-10 pr-10 py-3.5 focus:outline-none transition-colors placeholder:text-[#555555]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#777777] hover:text-[#cccccc] transition-colors"
              >
                {showPassword ? (
                  <FiEyeOff className="w-4 h-4" />
                ) : (
                  <FiEye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Register-only: Confirm Password Field */}
          {activeTab === "register" && (
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-[10px] font-bold tracking-widest text-[#aaaaaa]">
                  CONFIRM VAULT ACCESS KEY
                </label>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#777777]">
                  <FiKey className="w-4 h-4" />
                </span>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  required
                  placeholder="••••••••"
                  className="w-full bg-[#101010] border border-[#282828] focus:border-[#d4af37] text-[#f0f0f0] text-xs rounded-xl pl-10 pr-10 py-3.5 focus:outline-none transition-colors placeholder:text-[#555555]"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#777777] hover:text-[#cccccc] transition-colors"
                >
                  {showConfirmPassword ? (
                    <FiEyeOff className="w-4 h-4" />
                  ) : (
                    <FiEye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Remember Workstation Checkbox */}
          <div className="flex items-start gap-3 pt-1 pb-1">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                checked={rememberDevice}
                onChange={(e) => setRememberDevice(e.target.checked)}
                className="w-4 h-4 accent-[#d4af37] bg-[#101010] border-[#333333] rounded cursor-pointer"
              />
            </div>
            <label
              htmlFor="remember"
              className="text-[11px] text-[#999999] leading-tight cursor-pointer select-none"
            >
              Retain authenticated session on this accredited workstation for 14
              days
            </label>
          </div>

          {/* Primary Action Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#d4af37] to-[#e6c65c] hover:from-[#e6c65c] hover:to-[#f1d370] text-[#0f0f0f] font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-[#d4af37]/20 flex items-center justify-center gap-2 text-xs tracking-wider transition-all duration-300 mt-2 transform active:scale-[0.99]"
          >
            {activeTab === "signin" ? (
              <FiKey className="w-4 h-4" />
            ) : (
              <FiUserPlus className="w-4 h-4" />
            )}
            {activeTab === "signin"
              ? "ENTER FLOOR CONSOLE"
              : "REGISTER CREDENTIALS"}
          </button>
        </form>

        {/* Success Alert Banner */}
        {submittedMessage && (
          <div className="mt-4 p-3 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-xl text-center text-[#d4af37] text-xs animate-fade-in flex items-center justify-center gap-2">
            <FiShield className="w-4 h-4" />
            <span>{submittedMessage}</span>
          </div>
        )}

        {/* Footer Info Box */}
        <div className="mt-6 bg-[#111111] border border-[#222222] rounded-xl p-3.5">
          <p className="text-[10px] text-[#777777] leading-relaxed mb-3">
            By entering the Heritage Auctions Bidding Console, you affirm
            compliance with the International Numismatic Code of Ethics, Bureau
            Safeguard Mandates, and Anti-Money Laundering (AML) identification
            protocols.
          </p>
          <div className="flex items-center justify-between pt-2 border-t border-[#1a1a1a] text-[10px]">
            <div className="flex items-center gap-1.5 text-[#d4af37] font-medium">
              <FiTerminal className="w-3.5 h-3.5" />
              <span>Curatorial Desk Concierge</span>
            </div>
            <div className="text-[#666666] font-mono tracking-wider">
              Terminal ID: 85870-HK
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
