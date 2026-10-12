import React, { useState } from "react";
import {
  FiMail,
  FiKey,
  FiEye,
  FiEyeOff,
  FiShield,
  FiAlertCircle,
  FiCheckCircle,
  FiX,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { authClient } from "../lib/auth-client";
import GoogleAuthButton from "../components/auth/GoogleAuthButton";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
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

  // Separate Handler for Sign In Form Submission
  const handleSignIn = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.rememberDevice = rememberDevice;

    console.log("SIGN IN FORM SUBMISSION DATA:", data);

    try {
      // Call Better Auth sign in API (or custom auth client method)
      const response = await authClient.signIn.email({
        email: data.email,
        password: data.password,
      });

      console.log("Sign In Response:", response);

      showToast("Sign In successful! Redirecting...", "success");
    } catch (error) {
      console.error("Sign In Error:", error);
      showToast(
        error?.message || "Sign In failed. Invalid credentials or network error.",
        "error"
      );
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
          Collector Portal Access
        </h2>
        <p className="text-xs text-[#888888] mt-1">
          Enter your authorized credentials to access live floor bidding.
        </p>
      </div>

      {/* Google Auth Component */}
      <GoogleAuthButton />

      {/* Sign In Form */}
      <form onSubmit={handleSignIn} className="space-y-4">
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

        {/* Vault Access Key (Password) Field */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-[10px] font-bold tracking-widest text-[#aaaaaa]">
              VAULT ACCESS KEY
            </label>
            <a
              href="#recover"
              onClick={(e) => {
                e.preventDefault();
                showToast("Key recovery protocol initiated.", "success");
              }}
              className="text-[10px] font-bold tracking-wider text-[#d4af37] hover:underline"
            >
              RECOVER KEY?
            </a>
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

        {/* Remember Workstation Checkbox */}
        <div className="flex items-start gap-3 pt-1 pb-1">
          <div className="flex items-center h-5">
            <input
              id="remember-signin"
              type="checkbox"
              checked={rememberDevice}
              onChange={(e) => setRememberDevice(e.target.checked)}
              className="w-4 h-4 accent-[#d4af37] bg-[#101010] border-[#333333] rounded cursor-pointer"
            />
          </div>
          <label
            htmlFor="remember-signin"
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
          <FiKey className="w-4 h-4" />
          ENTER FLOOR CONSOLE
        </button>
      </form>

      {/* Sign Up Link Section */}
      <div className="text-center mt-5 pt-4 border-t border-[#222222]">
        <p className="text-xs text-[#888888]">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#d4af37] font-semibold hover:underline focus:outline-none"
          >
            Sign up
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