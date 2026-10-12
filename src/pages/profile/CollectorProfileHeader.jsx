import React from "react";
import {
  FiShield,
  FiCheckCircle,
  FiUserCheck,
  FiDownload,
  FiUserCheck as FiUserCog,
  FiKey,
} from "react-icons/fi";
import { Link } from "react-router";

const dossier = [
  ["Numismatic Society", "ANA Fellow #8492-HK"],
  ["Institutional Vault ID", "VLT-7704-IND"],
  ["Escrow Custody Class", "Lloyd’s Syndicated Tier A"],
  ["Attestation Authority", "Royal Numismatic Seal 1978"],
];

export default function CollectorProfileHeader() {
  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-6">
      {/* Top Breadcrumb & Status Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-[#262626] py-3 text-[#a3a3a3]">
        <div className="flex flex-wrap items-center gap-1.5 text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-[0.18em]">
          <a href="#home" className="hover:text-[#d4af37] transition-colors">
            Heritage Salon
          </a>
          <span>/</span>
          <a href="#vault" className="hover:text-[#d4af37] transition-colors">
            Escrow Vaults
          </a>
          <span>/</span>
          <span className="font-semibold text-[#d4af37]">
            Folio #8492-HK
          </span>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3 text-[9px] sm:text-[10px] uppercase tracking-wider">
          <span className="flex items-center gap-1.5 text-[#e5e5e5]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shrink-0" />
            <span className="truncate">Node Synced: ANA-8492</span>
          </span>
          <span className="text-[#404040]">•</span>
          <span className="text-[#737373]">256-Bit Ledger v4.2</span>
        </div>
      </div>

      {/* Main Profile Header Card */}
      <section className="relative mt-4 sm:mt-6 overflow-hidden rounded-2xl bg-[#161616] border border-[#262626] p-4 sm:p-8 shadow-2xl">
        {/* Ambient Glow Background Effect */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 sm:h-96 sm:w-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/15 via-transparent to-transparent blur-3xl" />

        <div className="relative z-10 grid grid-cols-12 items-center gap-6 sm:gap-8">
          {/* Column 1: Avatar & User Info */}
          <div className="col-span-12 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left min-w-0 gap-4 sm:gap-5 lg:col-span-5">
            {/* Avatar Container */}
            <div className="relative shrink-0">
              <div className="h-20 w-20 sm:h-28 sm:w-28 rounded-full bg-gradient-to-br from-[#d4af37] via-[#404040] to-[#171717] p-1 shadow-xl">
                <img
                  alt="Arthur Sterling-Vane portrait"
                  className="h-full w-full rounded-full object-cover contrast-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoj5TFDART4jrR5IsMfJICEKNxCMT7K2n6xcuVsDMuWqzqm9cnyB2NWqkX78CtcKBAE9lHDfSUqgsnGbo2mnWPQW-esKMlOuZOZ-hxP9De83qorMY9u8n8Ur6aAu4UOw7bVSZkldcPTia2t-FNl-hEkmtPmWanN9k4aTIwfkYznnmyPz9-rqsb3y9Wdp9O6qBck5q2In8AxP_ZBs63EHDqdSJtjz0VuZJmDErgu_77u0nT2yA7CdmStw"
                />
              </div>
              <span
                className="absolute bottom-0 right-0 sm:bottom-1 sm:right-1 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border-2 border-[#161616] bg-[#0a0a0a] text-emerald-400 shadow-md"
                title="Verified"
              >
                <FiCheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </span>
            </div>

            {/* Profile Meta Details */}
            <div className="min-w-0 w-full">
              <span className="mb-1.5 inline-block rounded bg-[#d4af37]/10 border border-[#d4af37]/20 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[8px] sm:text-[9px] font-semibold uppercase tracking-[0.14em] text-[#d4af37]">
                Tier I Sovereign Patron
              </span>
              <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-[#f5f5f5]">
                Arthur Sterling-Vane, <span className="text-[#d4af37]">FRNS</span>
              </h1>
              <p className="mt-1 text-[11px] sm:text-xs text-[#a3a3a3] leading-relaxed">
                Accredited Senior Numismatist &amp; Private Collector
              </p>
              
              <div className="mt-2.5 flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] text-[#737373]">
                <span className="inline-flex items-center gap-1 max-w-full truncate">
                  <FiShield className="w-3 h-3 text-[#d4af37] shrink-0" />
                  <span className="truncate font-mono">
                    a.sterling-vane@heritage-archive.org
                  </span>
                </span>
                <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 uppercase tracking-wider text-emerald-400 font-medium shrink-0">
                  <FiUserCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Verified ID
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Dossier Metadata Grid */}
          <div className="col-span-12 flex flex-col justify-center space-y-2.5 sm:space-y-3.5 border-t border-[#262626] pt-4 sm:pt-6 lg:col-span-4 lg:border-t-0 lg:border-x lg:border-[#262626] lg:px-6 lg:pt-0">
            {dossier.map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between gap-2 text-[11px] sm:text-xs"
              >
                <span className="uppercase tracking-wider text-[9px] sm:text-[10px] font-medium text-[#737373] shrink-0">
                  {label}
                </span>
                <span
                  className={
                    label === "Institutional Vault ID"
                      ? "font-mono font-semibold tracking-wider text-[#d4af37] text-right truncate"
                      : "text-[#d4d4d4] font-medium text-right truncate"
                  }
                >
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Column 3: Action Buttons */}
          <div className="col-span-12 flex flex-col justify-center gap-2.5 border-t border-[#262626] pt-4 sm:pt-6 lg:col-span-3 lg:border-t-0 lg:pt-0">
            <button
              type="button"
              onClick={() =>
                window.alert(
                  "Exporting sealed Provenance Ledger PDF with cryptographic attestation..."
                )
              }
              className="inline-flex h-10 sm:h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e6c65c] hover:from-[#e6c65c] hover:to-[#f1d370] px-4 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0f0f0f] shadow-lg shadow-[#d4af37]/15 transition-all duration-200 active:scale-[0.99]"
            >
              <FiDownload className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Export Ledger (PDF)
            </button>

            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/profile/edit"
                className="inline-flex h-9 sm:h-10 items-center justify-center gap-1.5 rounded-xl bg-[#212121] border border-[#2e2e2e] px-2.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-wider text-[#d4d4d4] transition hover:bg-[#2a2a2a] hover:text-white"
              >
                <FiUserCog className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#d4af37]" /> Edit Profile
              </Link>
              <button
                type="button"
                onClick={() =>
                  window.alert(
                    "Viewing Hardware Security Keys & Multisig Vault Credentials..."
                  )
                }
                className="inline-flex h-9 sm:h-10 items-center justify-center gap-1.5 rounded-xl bg-[#212121] border border-[#2e2e2e] px-2.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-wider text-[#d4d4d4] transition hover:bg-[#2a2a2a] hover:text-white"
              >
                <FiKey className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#d4af37]" /> Security
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}