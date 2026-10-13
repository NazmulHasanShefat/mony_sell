import React from "react";
import { authClient } from "../../lib/auth-client";

export default function GoogleAuthButton() {
  const handleGoogleSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: "google", // or any other provider id
        callbackURL: "http://localhost:5173",
      });
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  };


  return (
    <div className="w-full max-w-[440px] mx-auto mt-6">
      {/* Google OAuth Button */}
      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="w-full flex items-center justify-center gap-3 bg-[#1c1c1c] hover:bg-[#242424] text-[#e0e0e0] border border-[#2e2e2e] py-3.5 px-4 rounded-xl font-medium text-xs tracking-wider transition-all duration-200 shadow-sm group"
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
      <div className="relative flex py-4 items-center">
        <div className="flex-grow border-t border-[#262626]"></div>
        <span className="flex-shrink mx-3 text-[10px] tracking-widest text-[#777777] font-semibold uppercase">
          OR CONTINUE WITH ENCRYPTED KEY
        </span>
        <div className="flex-grow border-t border-[#262626]"></div>
      </div>
    </div>
  );
}