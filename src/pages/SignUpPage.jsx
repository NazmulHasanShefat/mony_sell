import React, { useState } from "react";
import {
  FiUser,
  FiMail,
  FiKey,
  FiEye,
  FiEyeOff,
  FiUserPlus,
  FiShield,
  FiAlertCircle,
  FiCheckCircle,
  FiX,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { authClient } from "../lib/auth-client";
import GoogleAuthButton from "../components/auth/GoogleAuthButton";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberDevice, setRememberDevice] = useState(true);

  // State to handle popup toast notifications
  const [toast, setToast] = useState({ show: false, message: "", type: "error" });

  // Helper function to trigger animated toast
  const showToast = (message, type = "error") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "error" });
    }, 4000);
  };

  // Separate Handler for Registration Form Submission
  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.rememberDevice = rememberDevice;

    // Password verification check
    if (data.password !== data.confirmPassword) {
      showToast("Passwords do not match! Please verify both fields.", "error");
      return;
    }

    console.log("REGISTER FORM SUBMISSION DATA:", data);

    try {
      // Call authClient sign up API
      const mydata = await authClient.signUp.email({
        name: data.fullName,
        email: data.email,
        password: data.password,
      });

      console.log("Sign Up Response:", mydata);

      showToast("Registration successful! Account credentials created.", "success");
    } catch (error) {
      console.error("Registration Error:", error);
      showToast(error?.message || "Registration failed. Please try again.", "error");
    }
  };

  return (
    <div className="relative w-full max-w-[440px] mx-auto mt-5 p-6 bg-[#161616] border border-[#2a2a2a] rounded-2xl shadow-2xl">
      {/* Title Section */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#d4af37]/10 text-[#d4af37] mb-3 border border-[#d4af37]/20">
          <FiShield className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold tracking-wider text-[#f3f3f3] uppercase">
          New Collector Accreditation
        </h2>
        <p className="text-xs text-[#888888] mt-1">
          Submit your details to request secure vault registration.
        </p>
      </div>

      {/* Google Auth Component */}
      <GoogleAuthButton />

      {/* Registration Form */}
      <form onSubmit={handleRegister} className="space-y-4">
        {/* Full Name Field */}
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
              placeholder="collector@heritage-archive.org"
              className="w-full bg-[#101010] border border-[#282828] focus:border-[#d4af37] text-[#f0f0f0] text-xs rounded-xl pl-10 pr-4 py-3.5 focus:outline-none transition-colors placeholder:text-[#555555]"
            />
          </div>
        </div>

        {/* Create Vault Key (Password) Field */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-[10px] font-bold tracking-widest text-[#aaaaaa]">
              CREATE VAULT KEY
            </label>
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#777777]">
              <FiKey className="w-4 h-4" />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="••••••••"
              className="w-full bg-[#101010] border border-[#282828] focus:border-[#d4af37] text-[#f0f0f0] text-xs rounded-xl pl-10 pr-10 py-3.5 focus:outline-none transition-colors placeholder:text-[#555555]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#777777] hover:text-[#cccccc] transition-colors"
            >
              {showPassword ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Confirm Vault Access Key Field */}
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
              {showConfirmPassword ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Remember Workstation Checkbox */}
        <div className="flex items-start gap-3 pt-1 pb-1">
          <div className="flex items-center h-5">
            <input
              id="remember-register"
              type="checkbox"
              checked={rememberDevice}
              onChange={(e) => setRememberDevice(e.target.checked)}
              className="w-4 h-4 accent-[#d4af37] bg-[#101010] border-[#333333] rounded cursor-pointer"
            />
          </div>
          <label
            htmlFor="remember-register"
            className="text-[11px] text-[#999999] leading-tight cursor-pointer select-none"
          >
            Retain authenticated session on this accredited workstation for 14 days
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#d4af37] to-[#e6c65c] hover:from-[#e6c65c] hover:to-[#f1d370] text-[#0f0f0f] font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-[#d4af37]/20 flex items-center justify-center gap-2 text-xs tracking-wider transition-all duration-300 mt-2 transform active:scale-[0.99]"
        >
          <FiUserPlus className="w-4 h-4" />
          REGISTER CREDENTIALS
        </button>
      </form>

      {/* Sign In Link Section */}
      <div className="text-center mt-5 pt-4 border-t border-[#222222]">
        <p className="text-xs text-[#888888]">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-[#d4af37] font-semibold hover:underline focus:outline-none"
          >
            Sign in
          </Link>
        </p>
      </div>

      {/* Bottom-Right Absolute Popup Toast Notification */}
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