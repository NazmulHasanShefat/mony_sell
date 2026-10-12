from pathlib import Path
import zipfile, textwrap

base = Path("/mnt/data/heritage-auctions-components")
base.mkdir(exist_ok=True)

files = {
"CollectorProfileBody.jsx": r'''
import CollectorProfileHeader from "./CollectorProfileHeader";
import CollectorStats from "./CollectorStats";
import ActiveLot from "./ActiveLot";
import BiddingLedger from "./BiddingLedger";
import CollectorSidebar from "./CollectorSidebar";

export default function CollectorProfileBody() {
  return (
    <main className="w-full overflow-hidden bg-surface text-on-surface pt-8">
      <div className="flex flex-col w-full">
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="pointer-events-none absolute -top-12 left-1/2 -z-10 h-[340px] w-[720px] -translate-x-1/2 bg-gradient-to-b from-primary/10 via-primary-container/5 to-transparent blur-3xl" />

          <CollectorProfileHeader />
          <CollectorStats />

          <div className="mt-12 grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
              <ActiveLot />
              <BiddingLedger />
            </div>

            <div className="col-span-12 lg:col-span-4">
              <CollectorSidebar />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
''',
"CollectorProfileHeader.jsx": r'''
const dossier = [
  ["Numismatic Society", "ANA Fellow #8492-HK"],
  ["Institutional Vault ID", "VLT-7704-IND"],
  ["Escrow Custody Class", "Lloyd’s Syndicated Tier A"],
  ["Attestation Authority", "Royal Numismatic Seal 1978"],
];

export default function CollectorProfileHeader() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant/30 py-6 text-on-surface-variant">
        <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.18em]">
          <a href="#home" className="hover:text-primary transition-colors">Heritage Salon</a>
          <span>/</span>
          <a href="#vault" className="hover:text-primary transition-colors">Client Escrow Vaults</a>
          <span>/</span>
          <span className="font-semibold text-primary">Ledger Folio #8492-HK</span>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-wider">
          <span className="flex items-center gap-2 text-on-surface">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Direct Node Synced: ANA-8492
          </span>
          <span className="text-outline-variant">•</span>
          <span className="text-outline">256-Bit Archival Ledger v4.2</span>
        </div>
      </div>

      <section className="relative mt-8 overflow-hidden rounded-xl bg-surface-container-low/95 p-5 shadow-2xl sm:p-8">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 bg-radial from-primary/10 via-transparent to-transparent" />
        <div className="relative z-10 grid grid-cols-12 items-center gap-8">
          <div className="col-span-12 flex min-w-0 items-center gap-5 lg:col-span-4">
            <div className="relative shrink-0">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary via-outline-variant to-surface-container-highest p-1 shadow-xl sm:h-28 sm:w-28">
                <img
                  alt="Arthur Sterling-Vane portrait"
                  className="h-full w-full rounded-full object-cover contrast-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoj5TFDART4jrR5IsMfJICEKNxCMT7K2n6xcuVsDMuWqzqm9cnyB2NWqkX78CtcKBAE9lHDfSUqgsnGbo2mnWPQW-esKMlOuZOZ-hxP9De83qorMY9u8n8Ur6aAu4UOw7bVSZkldcPTia2t-FNl-hEkmtPmWanN9k4aTIwfkYznnmyPz9-rqsb3y9Wdp9O6qBck5q2In8AxP_ZBs63EHDqdSJtjz0VuZJmDErgu_77u0nT2yA7CdmStw"
                />
              </div>
              <span className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-surface-container bg-surface-container-lowest text-emerald-400" title="Verified">
                <span className="material-symbols-outlined text-base">verified</span>
              </span>
            </div>

            <div className="min-w-0">
              <span className="mb-2 inline-block rounded bg-primary/15 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-primary">
                Tier I Sovereign Patron
              </span>
              <h1 className="font-headline-md text-xl tracking-tight text-on-surface sm:text-2xl">
                Arthur Sterling-Vane, <span className="text-primary">FRNS</span>
              </h1>
              <p className="mt-1 text-sm leading-snug text-on-surface-variant">
                Accredited Senior Numismatist &amp; Private Collector
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] text-outline">
                <span className="material-symbols-outlined text-sm">verified_user</span>
                <span className="truncate font-mono">a.sterling-vane@heritage-archive.org</span>
                <span className="rounded bg-surface-container px-1.5 py-0.5 uppercase tracking-wider text-emerald-300">Verified ID</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 flex flex-col justify-center space-y-3 border-outline-variant/30 lg:col-span-4 lg:border-x lg:px-6">
            {dossier.map(([label, value]) => (
              <div key={label} className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="uppercase tracking-wider text-outline">{label}</span>
                <span className={label === "Institutional Vault ID" ? "font-mono font-semibold tracking-wider text-primary" : "text-on-surface"}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          <div className="col-span-12 flex flex-col justify-center gap-3 lg:col-span-4">
            <button
              type="button"
              onClick={() => window.alert("Exporting sealed Provenance Ledger PDF with cryptographic attestation...")}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded bg-primary px-5 text-xs font-semibold uppercase tracking-wider text-on-primary shadow-lg transition hover:bg-[#d8af65] active:scale-[0.99]"
            >
              <span className="material-symbols-outlined text-lg">download_for_offline</span>
              Export Provenance Ledger (PDF)
            </button>
            <div className="grid grid-cols-2 gap-2.5">
              <button type="button" onClick={() => window.alert("Opening Archival Profile Preferences...")} className="inline-flex h-10 items-center justify-center gap-1.5 rounded bg-surface-container-high px-3 text-[10px] uppercase tracking-wider text-on-surface transition hover:bg-surface-variant">
                <span className="material-symbols-outlined text-base text-primary">manage_accounts</span> Edit Profile
              </button>
              <button type="button" onClick={() => window.alert("Viewing Hardware Security Keys & Multisig Vault Credentials...")} className="inline-flex h-10 items-center justify-center gap-1.5 rounded bg-surface-container-high px-3 text-[10px] uppercase tracking-wider text-on-surface transition hover:bg-surface-variant">
                <span className="material-symbols-outlined text-base text-primary">key</span> Security &amp; Keys
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
''',
"CollectorStats.jsx": r'''
const stats = [
  {
    label: "Total Bids Placed",
    icon: "gavel",
    value: "14",
    suffix: "Offers",
    footer: [["1 Active Leading", "text-emerald-400"], ["2 Outbid", ""], ["11 Concluded", ""]],
    valueClass: "text-on-surface",
  },
  {
    label: "Active Floor Exposure",
    icon: "verified",
    value: "৳ 1,500",
    suffix: "BDT",
    footer: [["Leading Offer: 1942 Coin", ""], ["Active", "text-emerald-400"]],
    valueClass: "text-primary",
  },
  {
    label: "Custodial Escrow Reserve",
    icon: "account_balance_wallet",
    value: "৳ 25,000",
    suffix: "BDT",
    footer: [["● Locked in Vault", "text-outline"], ["256-BIT LEDGER", ""]],
    valueClass: "text-on-surface",
  },
  {
    label: "Clearance Success",
    icon: "auto_graph",
    value: "78.5%",
    suffix: "",
    footer: [["Hammer Acquisition Rate", ""], ["Top 5% Patron", "text-primary"]],
    valueClass: "text-secondary",
  },
];

export default function CollectorStats() {
  return (
    <section className="mt-8 grid grid-cols-12 gap-5">
      {stats.map((stat) => (
        <article key={stat.label} className="relative col-span-12 flex flex-col justify-between overflow-hidden rounded-lg bg-surface-container p-6 shadow-md transition-colors hover:bg-surface-container-high sm:col-span-6 lg:col-span-3">
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="text-[10px] uppercase tracking-[0.16em] text-outline">{stat.label}</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-highest text-primary">
              <span className="material-symbols-outlined text-lg">{stat.icon}</span>
            </span>
          </div>
          <div>
            <div className={`font-headline-lg text-3xl font-normal tracking-tight ${stat.valueClass}`}>
              {stat.value} {stat.suffix && <span className="font-sans text-xs uppercase tracking-wider text-outline">{stat.suffix}</span>}
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-outline-variant/20 pt-3 text-[10px] text-outline">
              {stat.footer.map(([text, className]) => <span key={text} className={className}>{text}</span>)}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
''',
"ActiveLot.jsx": r'''
export default function ActiveLot() {
  return (
    <section className="relative overflow-hidden rounded-xl bg-surface-container-low p-5 shadow-2xl sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant/25 pb-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded bg-primary/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">Current Live Lot</span>
          <span className="font-mono text-xs uppercase tracking-widest text-outline">LOT #1942-IND</span>
          <span className="text-outline-variant">•</span>
          <span className="text-xs text-on-surface-variant">British India George VI</span>
        </div>
        <span className="flex items-center gap-2 rounded-full bg-surface-container px-3 py-1 text-[11px] text-amber-300">
          <span className="h-2 w-2 animate-ping rounded-full bg-amber-400" />
          Anti-Sniping Active (3-Min Roll)
        </span>
      </div>

      <div className="mt-6 grid grid-cols-12 items-center gap-6">
        <div className="relative col-span-12 flex flex-col items-center justify-center overflow-hidden rounded-lg bg-surface-container-lowest/80 p-6 sm:col-span-5">
          <div className="pointer-events-none absolute inset-0 rounded-lg bg-radial from-primary/20 via-primary-container/5 to-transparent opacity-80" />
          <div className="relative flex h-52 w-52 items-center justify-center">
            <img
              alt="British India 1942 One Quarter Anna bronze coin"
              className="h-48 w-48 rounded-full object-cover shadow-[0_12px_36px_rgba(0,0,0,0.9)] ring-1 ring-primary/40 transition-transform duration-500 ease-out hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF2C_tVlWM7tk_GRgFjk93huT79UxyveuHjhgLFg2hcduVIdWyroI2JkB1ywuZO7V4mcOJGPvx30vBjcLaCleq8vhwsDeO9F79fR9OD4G0n5YBw4xk_sixnY3ObB_6Bp4I00vzOn4nYmsvgnDqFHQDMOP3nQVAQFJGHsqHwe_3zt_rb4IW1v_zkT5K_mqBWbB0uGlzGtcGQUtfMeXULyBgbAkQH5GFETM2ANtyAq2eHzVA4x8JDY3oTw"
            />
            <span className="absolute -bottom-2 -right-1 rounded bg-surface-container-highest px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-primary shadow">NGC MS-63 RB</span>
          </div>
          <div className="mt-4 text-center">
            <span className="block text-[11px] uppercase tracking-[0.2em] text-outline">Obverse Holed Planchet</span>
            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant/70">High Relief Laurel Perimeter</span>
          </div>
        </div>

        <div className="col-span-12 flex h-full flex-col justify-between sm:col-span-7 sm:pl-3">
          <div>
            <h2 className="font-headline-md text-2xl leading-tight text-on-surface">One Quarter Anna – 1942</h2>
            <p className="mt-1 font-body-md text-secondary">Wartime Struck Bronze Sovereign Issue · Calcutta Mint</p>
            <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
              Minted during the height of the Second World War featuring the distinctive center aperture designed to preserve critical copper rations. Retains lustrous chocolate-bronze patina with full leaf definition in all quadrants.
            </p>
          </div>

          <div className="mt-6 rounded-lg border-l-4 border-primary bg-gradient-to-r from-primary-container/25 via-surface-container to-surface-container p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Current Standing</span>
                <span className="text-xs font-semibold tracking-wide text-on-surface">YOU HOLD THE LEADING BID</span>
              </div>
              <span className="font-headline-md text-xl text-primary">৳ 1,500 <span className="text-[10px] text-outline">BDT</span></span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4 border-t border-outline-variant/20 pt-4">
            <div>
              <span className="mb-1 block text-[10px] uppercase tracking-widest text-outline">Closes In</span>
              <div className="flex items-baseline gap-1 font-mono text-lg font-semibold text-on-surface">04 <span className="text-xs font-normal text-outline">d</span> 18 <span className="text-xs font-normal text-outline">h</span> 22 <span className="text-xs font-normal text-outline">m</span></div>
            </div>
            <div>
              <span className="mb-1 block text-[10px] uppercase tracking-widest text-outline">Next Minimum Floor</span>
              <div className="font-mono text-lg font-semibold text-on-surface">৳ 1,600 <span className="text-xs font-normal text-outline">BDT</span></div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button type="button" onClick={() => window.alert("Increasing your proxy bid to ৳ 1,600 BDT...")} className="inline-flex h-10 items-center gap-2 rounded bg-primary px-5 text-xs font-semibold uppercase tracking-wider text-on-primary shadow transition hover:bg-[#d8af65] active:scale-95">
              <span className="material-symbols-outlined text-base">add</span> Raise Offer (+৳100)
            </button>
            <button type="button" onClick={() => window.alert("Adjusting proxy limit ceiling modal triggered...")} className="inline-flex h-10 items-center gap-2 rounded bg-surface-container px-4 text-xs uppercase tracking-wider text-on-surface transition hover:bg-surface-container-high">
              <span className="material-symbols-outlined text-base text-primary">tune</span> Modify Max Proxy
            </button>
            <a href="#the-coin" className="ml-auto inline-flex items-center gap-1 py-2 text-[10px] uppercase tracking-widest text-primary transition hover:text-secondary">
              Archival Dossier <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
''',
"BiddingLedger.jsx": r'''
import { useMemo, useState } from "react";

const bids = [
  { lot: "One Quarter India – 1942", detail: "Lot #1942-IND · Wartime Bronze", time: "8 mins ago", amount: "৳ 1,500", status: "Leading (Active)", hash: "0x8f2a...c91", type: "active" },
  { lot: "One Quarter India – 1942", detail: "Lot #1942-IND · Wartime Bronze", time: "24 mins ago", amount: "৳ 1,400", status: "Outbid", hash: "0x3c11...7a4", type: "outbid" },
  { lot: "One Quarter India – 1942", detail: "Lot #1942-IND · Wartime Bronze", time: "1 hr ago", amount: "৳ 1,200", status: "Outbid", hash: "0x7e44...9b2", type: "outbid" },
  { lot: "One Quarter India – 1942", detail: "Lot #1942-IND · Opening Bid", time: "2 hrs ago", amount: "৳ 1,000", status: "Floor Opening", hash: "0x1b90...e83", type: "active" },
  { lot: "1939 George VI Silver Rupee", detail: "Lot #1939-SIL · Grade PCGS MS-64", time: "12 Nov 2024", amount: "৳ 3,200", status: "Won & Vaulted", hash: "0x99a2...4f1", type: "won" },
  { lot: "1945 Half Rupee Burma Campaign", detail: "Lot #1945-BUR · Archival Specimen", time: "28 Oct 2024", amount: "৳ 1,850", status: "Acquired", hash: "0x44d1...620", type: "won" },
];

const tabs = [
  { label: "All Offers (14)", value: "all" },
  { label: "Active Lot (4)", value: "active" },
  { label: "Archival Won (8)", value: "won" },
  { label: "Outbid (2)", value: "outbid" },
];

function statusClass(type) {
  if (type === "active") return "bg-primary/20 text-primary";
  if (type === "outbid") return "bg-error-container/30 text-error";
  return "bg-emerald-950/60 text-emerald-300";
}

export default function BiddingLedger() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const visibleBids = useMemo(() => bids.filter((bid) => {
    const matchesFilter = filter === "all" || bid.type === filter;
    const query = search.trim().toLowerCase();
    const matchesSearch = !query || `${bid.lot} ${bid.detail} ${bid.hash}`.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  }), [filter, search]);

  return (
    <section className="flex flex-col rounded-xl bg-surface-container-low p-5 shadow-2xl sm:p-8">
      <div className="flex flex-col justify-between gap-4 border-b border-outline-variant/20 pb-6 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-xl text-primary">history_edu</span>
            <h3 className="font-headline-sm text-xl tracking-tight text-on-surface">Recent Bidding Activity &amp; Audit Ledger</h3>
          </div>
          <p className="mt-1 text-sm text-on-surface-variant">Immutable cryptographic log of floor, proxy, and sealed bids registered under Patron ID #8492.</p>
        </div>
        <div className="flex items-center gap-2 self-start text-[10px] uppercase tracking-wider md:self-center">
          <span className="text-outline">Export Format:</span>
          <button type="button" onClick={() => window.alert("Generating CSV...")} className="rounded bg-surface-container px-2.5 py-1 font-mono text-primary hover:bg-surface-container-high">CSV</button>
          <button type="button" onClick={() => window.alert("Generating JSON signature...")} className="rounded bg-surface-container px-2.5 py-1 font-mono text-primary hover:bg-surface-container-high">JSON-LD</button>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4 border-b border-outline-variant/15 py-4 xl:flex-row xl:items-center">
        <div className="flex flex-wrap items-center gap-1.5">
          {tabs.map((tab) => (
            <button key={tab.value} type="button" onClick={() => setFilter(tab.value)} className={`rounded px-3.5 py-1.5 text-[10px] uppercase tracking-wider transition-colors ${filter === tab.value ? "bg-primary font-semibold text-on-primary" : "bg-surface-container text-on-surface-variant hover:text-on-surface"}`}>
              {tab.label}
            </button>
          ))}
        </div>
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="h-9 w-full rounded border-0 bg-surface-container px-3 text-xs text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary sm:w-60"
          placeholder="Filter by lot, mint or hash..."
          type="search"
        />
      </div>

      <div className="mt-2 overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="border-b border-outline-variant/20 text-[10px] uppercase tracking-wider text-outline">
              <th className="px-3 py-3 font-semibold">Lot Specimen</th>
              <th className="px-3 py-3 font-semibold">Timestamp</th>
              <th className="px-3 py-3 font-semibold">Bid Amount</th>
              <th className="px-3 py-3 font-semibold">Attestation Status</th>
              <th className="px-3 py-3 text-right font-semibold">Verification Hash</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/10 text-sm text-on-surface">
            {visibleBids.map((bid) => (
              <tr key={bid.hash} className="group transition-colors hover:bg-surface-container/60">
                <td className="px-3 py-3.5">
                  <div className="font-headline-sm text-base transition-colors group-hover:text-primary">{bid.lot}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-outline">{bid.detail}</div>
                </td>
                <td className="whitespace-nowrap px-3 py-3.5 font-mono text-xs text-on-surface-variant">{bid.time}</td>
                <td className="whitespace-nowrap px-3 py-3.5 font-mono font-semibold text-primary">{bid.amount} <span className="text-[10px] text-outline">BDT</span></td>
                <td className="px-3 py-3.5">
                  <span className={`inline-flex whitespace-nowrap rounded px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${statusClass(bid.type)}`}>{bid.status}</span>
                </td>
                <td className="px-3 py-3.5 text-right font-mono text-[11px] text-outline">{bid.hash}</td>
              </tr>
            ))}
            {visibleBids.length === 0 && (
              <tr><td colSpan={5} className="px-3 py-8 text-center text-sm text-outline">No bidding records match your search.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-outline-variant/15 pt-4 text-[10px] text-outline">
        <span>Showing {visibleBids.length} of 14 audited numismatic ledger events</span>
        <a href="#ledger-history" className="font-semibold uppercase tracking-widest text-primary transition hover:text-secondary">View Complete Historical Ledger →</a>
      </div>
    </section>
  );
}
''',
"CollectorSidebar.jsx": r'''
const specialists = [
  {
    icon: "verified_user",
    iconStyle: "bg-primary/10 text-primary",
    eyebrow: "Institutional Protection",
    title: "Verified Escrow Guarantee",
    description: "100% of committed acquisition capital is held in a segregated third-party custodial depository regulated under ANA By-laws and insured under Swiss Re syndication.",
    footer: <div className="mt-4 flex items-center justify-between rounded bg-surface-container-low p-3 font-mono text-[11px]"><span className="uppercase text-outline">Active Escrow Cover</span><span className="font-bold text-primary">৳ 25,000.00 BDT</span></div>,
    status: "Multisig Key Ceremony Verified",
  },
  {
    icon: "local_shipping",
    iconStyle: "bg-surface-container-highest text-secondary",
    eyebrow: "Secure Transit Desk",
    title: "Diplomatic Courier Logistics",
    description: "Upon hammer closure, winning lots are encapsulated into tamper-evident nitrogen-purged hermetic cases and routed via armored bonded courier directly to your registered salon.",
    footer: <div className="mt-4 flex flex-col gap-2 border-t border-outline-variant/20 pt-3 text-xs"><div className="flex justify-between gap-2"><span className="text-outline">Designated Consignee</span><span className="text-right text-on-surface">A. Sterling-Vane (Private)</span></div><div className="flex justify-between gap-2"><span className="text-outline">Customs Exemption</span><span className="font-mono text-[10px] text-emerald-400">ANTIQ-REG-8492</span></div></div>,
  },
];

function ServiceCard({ icon, iconStyle, eyebrow, title, description, footer, status }) {
  return (
    <article className="group relative overflow-hidden rounded-xl bg-surface-container p-6 shadow-xl">
      <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${iconStyle}`}>
        <span className="material-symbols-outlined text-2xl">{icon}</span>
      </div>
      <span className="mb-1 block text-[10px] uppercase tracking-[0.2em] text-outline">{eyebrow}</span>
      <h3 className="font-headline-sm text-xl text-on-surface">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{description}</p>
      {footer}
      {status && <div className="mt-2 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-outline"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />{status}</div>}
    </article>
  );
}

export default function CollectorSidebar() {
  return (
    <aside className="flex flex-col gap-6">
      {specialists.map((card) => <ServiceCard key={card.title} {...card} />)}

      <article className="relative overflow-hidden rounded-xl bg-surface-container p-6 shadow-xl">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
          <span className="material-symbols-outlined text-2xl">support_agent</span>
        </div>
        <span className="mb-1 block text-[10px] uppercase tracking-[0.2em] text-outline">Personal Specialist</span>
        <h3 className="font-headline-sm text-xl text-on-surface">Curatorial Concierge Desk</h3>
        <div className="mt-4 flex items-center gap-3">
          <img
            alt="Auction specialist Helena Vance"
            className="h-12 w-12 shrink-0 rounded-full border border-primary/40 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL53KHBOJqNGxWasfedTnjsXetUIUf4mmsxYMDn1ToMXImcV627rdpq9sa08ZjzQAKIDLBvYUFAe9iFBfCX3bupntl6gK8SCaeTh6KhV45TiFzK7vxqScMfrlXnNQBQKtT95yLrMryNGu2BhihIEr9VoXOAcxPaXRutzMETzhxV19HNZLaBxM-SxyarIEFXEjcskmjRpMIxWbabd4Sd0xPcoQtxoDKOma2eekJs9CBOJjK4QL8aiQ2zw"
          />
          <div>
            <span className="block text-sm font-semibold text-on-surface">Helena Vance</span>
            <span className="block text-[10px] uppercase tracking-wider text-primary">Lead British Empire Numismatist</span>
            <span className="text-[10px] text-outline">Direct Extension: #882</span>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
          Direct telephone appraisal, proxy execution counsel, and slab condition verification available 24/7 during active auction windows.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <button type="button" onClick={() => window.alert("Connecting to Encrypted Curatorial Wire...")} className="inline-flex h-9 items-center justify-center gap-1.5 rounded bg-surface-container-high text-[10px] uppercase tracking-wider text-primary transition hover:bg-surface-variant">
            <span className="material-symbols-outlined text-base">call</span> Secure Wire
          </button>
          <button type="button" onClick={() => window.alert("Opening Specialist Dispatch...")} className="inline-flex h-9 items-center justify-center gap-1.5 rounded bg-surface-container-high text-[10px] uppercase tracking-wider text-on-surface transition hover:bg-surface-variant">
            <span className="material-symbols-outlined text-base">mail</span> Message
          </button>
        </div>
      </article>

      <div className="flex items-start gap-3 rounded-lg bg-surface-container-lowest/70 p-4 text-[11px] leading-relaxed text-outline">
        <span className="material-symbols-outlined shrink-0 text-2xl text-primary">lock_clock</span>
        <p>All floor activities logged to permanent ISO-27001 audited physical storage. Title transfer executed under Hague Private Numismatic Convention.</p>
      </div>
    </aside>
  );
}
''',
"README.md": r'''
# Heritage Auctions — React body components

This folder contains the body-only React JSX components extracted from the supplied design. Navbar and footer are intentionally excluded.

## Components
- `CollectorProfileBody.jsx` — main layout / composition
- `CollectorProfileHeader.jsx` — breadcrumb and collector profile card
- `CollectorStats.jsx` — four metric cards
- `ActiveLot.jsx` — current auction lot and bidding actions
- `BiddingLedger.jsx` — searchable, filterable bidding table
- `CollectorSidebar.jsx` — escrow, courier, and concierge cards

## Usage

Place these files in the same folder, then render:

```jsx
import CollectorProfileBody from "./components/CollectorProfileBody";

export default function Page() {
  return <CollectorProfileBody />;
}
```

The JSX uses Tailwind CSS utility classes and the custom color/font tokens from the original HTML. Copy the original Tailwind theme configuration into your Tailwind config, or replace those custom classes with your own theme tokens.

Add these font links to your app's global HTML/document if you want the same typography:
- Playfair Display
- Newsreader
- Hanken Grotesk
- Material Symbols Outlined

The example buttons use `window.alert()` placeholders; connect them to your actual actions.
'''
}

for name, content in files.items():
    (base / name).write_text(textwrap.dedent(content).strip() + "\n", encoding="utf-8")

zip_path = Path("/mnt/data/heritage-auctions-body-components.zip")
with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as z:
    for p in base.iterdir():
        z.write(p, arcname=f"heritage-auctions-components/{p.name}")

print(f"Created {zip_path}")
