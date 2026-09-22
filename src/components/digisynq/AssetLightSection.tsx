import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';

interface AssetLightSectionProps {
  onOpenRunbook?: (chapterIndex?: number) => void;
}

export const AssetLightSection: React.FC<AssetLightSectionProps> = ({ onOpenRunbook }) => {
  return (
    <section
      id="asset-light"
      className="py-28 sm:py-36 bg-[#070A12] border-t border-white/10 relative overflow-hidden"
    >
      <span id="thesis" className="absolute -top-28 pointer-events-none" />
      <div className="cred-hairline absolute top-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div data-augmented-ui="tl-clip br-clip" className="aug-hud-chip inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/90 border border-[#5CE1E6]/30 text-[#5CE1E6] font-mono text-[11px] font-bold tracking-[2px] mb-6 backdrop-blur-xl shadow-[0_0_15px_rgba(92,225,230,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] shadow-[0_0_8px_#5CE1E6]" />
            Architectural philosophy.
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[0.98] font-denton-extrabold">
            We don't own the assets.<br />
            <span className="text-white/75">We synq them.</span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto font-sans [word-spacing:0.06em]">
            Rather than owning the assets that power entertainment, DigiSynq synchronizes them — reducing friction, leakage and risk while improving the utilization of existing ecosystem capacity.
          </p>

          <p className="mt-4 text-xs sm:text-sm font-sans tracking-wide text-[#5CE1E6] font-semibold">
            Own less. Connect more. Make the ecosystem work better together.
          </p>
        </div>

        {/* Two-Sided Visual Comparison Cards - CRED Ledger */}
        <div className="relative mb-16">


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative z-10">
          {/* Traditional Heavy Model */}
          <div className="rounded-xl cred-card p-6 sm:p-9 border-white/10">
            <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
              <div>
                <span className="text-[11px] font-mono tracking-[2.5px] text-[#FFC857] font-bold">
                  Legacy paradigm.
                </span>
                <h3 className="text-xl font-bold text-white mt-1 tracking-tight font-display">
                  Traditional Asset-Heavy Model
                </h3>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#FFC857]/15 border border-[#FFC857]/30 flex items-center justify-center">
                <X className="w-4 h-4 text-[#FFC857]" />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="text-xs font-mono tracking-[2px] text-white/60">
                Core mandate: <span className="text-white font-bold">Own</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-white/60">
                {['Theatres & brick-and-mortar real estate', 'Studios & heavy soundstages', 'Cameras, anamorphic lenses & grip trucks', 'Large physical production equipment & warehouses', 'Exclusive film & library balance-sheet inventory'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.08] text-xs text-[#FFC857]/80 leading-relaxed font-mono tracking-[1px]">
              Result: Crushing depreciation, massive fixed overhead, low agility during market downturns.
            </div>
          </div>

          <div className="relative">


            <div className="rounded-[20px] cred-card border-white/20 p-6 sm:p-9 shadow-2xl relative z-10">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1220]/90 border border-[#5EF2B0]/30 text-[#5EF2B0] font-mono text-[10px] font-bold tracking-[2px] backdrop-blur-xl">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5EF2B0] shadow-[0_0_8px_#5EF2B0]" />
                  Preferred architecture.
                </div>
              </div>

            <div className="flex items-center justify-between pb-5 border-b border-white/15">
              <div>
                <span className="text-[11px] font-mono tracking-[2.5px] text-[#5CE1E6] font-bold">
                  DigiSynq network model.
                </span>
                <h3 className="text-xl font-bold text-white mt-1 tracking-tight font-display">
                  Asset-Light Cinema Infrastructure
                </h3>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#5EF2B0] flex items-center justify-center shadow-[0_0_15px_rgba(94,242,176,0.5)]">
                <Check className="w-4 h-4 text-[#070A12] font-bold" />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="text-xs font-mono tracking-[2px] text-white/80">
                Core mandate: <span className="text-white font-bold">Connect</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-white/80">
                {[
                  { text: 'People (Verified cast, DPs, crew & department heads)', href: '#audience-solutions' },
                  { text: 'Assets (Idle cameras, stages & facilities peer-to-peer)', href: '#marketplace' },
                  { text: 'Projects (Packaging, script breakdowns & live stripboards)', href: '#platform-model' },
                  { text: 'Content (Territorial licensing, clean IP & screeners)', href: '#product-directory' },
                  { text: 'Audiences (Direct fan communities & crowdfunded screenings)', href: '#audience-solutions' },
                  { text: 'Opportunities (Partner-led financing & screen matching)', href: '#business-model' },
                ].map((item) => (
                  <li key={item.text}>
                    <a
                      href={item.href}
                      className="flex items-center gap-3 p-1.5 -mx-1.5 rounded-lg hover:bg-white/[0.04] transition-colors group cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] shadow-[0_0_6px_#5CE1E6] shrink-0" />
                      <span className="font-medium text-white/90 group-hover:text-white transition-colors">{item.text}</span>
                      <ArrowRight className="w-3 h-3 text-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity ml-auto shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/15 text-xs text-[#5EF2B0] leading-relaxed font-mono font-medium tracking-[1px]">
              RESULT: Infinite software leverage, compounding data network effects, zero balance-sheet liability.
            </div>
          </div>
        </div>
        </div>
        </div>

        {/* Executive Comparison Preview & Runbook Callout */}
        <div className="rounded-2xl cred-card p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/15 backdrop-blur-xl relative overflow-hidden group">
          <div className="max-w-xl text-left">
            <span className="text-[11px] font-mono tracking-[2px] text-[#5CE1E6] font-bold block mb-1">
              10-Year Run Rate Simulation
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-denton-bold">
              Software Leverage vs Hardware Depreciation
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
              Traditional studios carry $180M+ in physical equipment and debt. DigiSynq operates at 76%+ gross margin with zero hardware CapEx and compounding capital turnover.
            </p>
          </div>

          {onOpenRunbook && (
            <button
              onClick={() => onOpenRunbook(4)}
              className="px-6 py-3 rounded-full bg-[#5CE1E6]/10 hover:bg-[#5CE1E6]/20 border border-[#5CE1E6]/35 text-[#5CE1E6] hover:text-white font-mono text-xs font-bold tracking-[1.5px] transition-all flex items-center gap-2 whitespace-nowrap shadow-sm cursor-pointer flex-shrink-0 active:scale-95"
            >
              <span>Inspect 10-Year Pro-Forma (Chapter 05)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
