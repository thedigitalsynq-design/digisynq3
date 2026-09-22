import React from 'react';
import { ArrowRight, ArrowUpRight, BookOpen } from 'lucide-react';
import digisynqLogo from '../../assets/digisynq-logo.png';

interface CtaFooterProps {
  onOpenJoinModal: (role?: string) => void;
  onOpenRunbook?: (chapterIndex?: number) => void;
}

export const CtaFooter: React.FC<CtaFooterProps> = ({ onOpenJoinModal, onOpenRunbook }) => {
  return (
    <div className="bg-[#070A12] text-white/70 transition-colors duration-300">
      {/* SECTION 42: PRIMARY CTA CONVERSION SECTION */}
      <section
        id="cta-section"
        className="py-24 sm:py-32 border-t border-white/[0.08] relative overflow-hidden bg-[#070A12]"
      >


        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div data-augmented-ui="tl-clip br-clip" className="aug-hud-chip inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/90 border border-[#5CE1E6]/30 text-[#5CE1E6] font-mono text-[11px] font-bold tracking-[2px] mb-6 backdrop-blur-xl shadow-[0_0_15px_rgba(92,225,230,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] shadow-[0_0_8px_#5CE1E6]" />
            Join the ecosystem.
          </div>

          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[0.93] font-denton-extrabold mb-8">
            Find your place.<br />
            <span className="text-white/75 font-denton-extrabold">In the network.</span>
          </h2>

          <p className="mt-6 text-base sm:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Whether you create, produce, distribute, exhibit, promote, invest in or simply love cinema, DigiSynq connects you with the people, resources and opportunities that matter.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenJoinModal('Join Network')}
              className="cred-btn-primary cursor-pointer active:scale-95"
              id="footer-btn-join-network"
            >
              <span>Join the network</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#product-directory"
              className="cred-btn-glass"
              id="footer-btn-explore-products"
            >
              <span>Explore directory</span>
              <ArrowUpRight className="w-4 h-4 opacity-60" />
            </a>

            {onOpenRunbook && (
              <button
                onClick={() => onOpenRunbook(0)}
                className="cred-btn-glass text-[#5CE1E6] border-[#5CE1E6]/30 hover:border-[#5CE1E6]/60 cursor-pointer active:scale-95"
              >
                <BookOpen className="w-4 h-4" />
                <span>Executive Runbook</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 55: FINAL BRAND MANIFESTO */}
      <section className="py-28 sm:py-36 border-t border-b border-white/[0.08] bg-[#070A12] text-center relative overflow-hidden viewfinder-box">

        <div className="viewfinder-corner-tl" />
        <div className="viewfinder-corner-tr" />
        <div className="viewfinder-corner-bl" />
        <div className="viewfinder-corner-br" />

        {/* Ambient Film Sprocket Strip Accent */}
        <div className="film-sprocket-bar max-w-5xl mx-auto mb-12">
          {Array.from({ length: 32 }).map((_, i) => (
            <div key={i} className="film-sprocket-hole" />
          ))}
        </div>
        <div className="cred-hairline absolute top-0 left-0" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/80 border border-[#8B7CFF]/30 text-[#8B7CFF] font-mono text-[10px] font-bold tracking-[3px] mb-8 backdrop-blur-xl shadow-[0_0_15px_rgba(139,124,255,0.12)]">
            The manifesto.
          </div>

          <h3 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[0.95] font-denton-extrabold mb-6">
            Not everyone gets it.<br />
            <span className="text-white/75 font-denton-extrabold">But the visionary do.</span>
          </h3>

          <p className="text-lg sm:text-2xl text-white/90 font-normal mb-4 tracking-wide max-w-3xl mx-auto leading-relaxed font-sans [word-spacing:0.06em]">
            DigiSynq is an asset-light coordination mechanism for the entertainment ecosystem. It operates in the space between the ecosystem's nodes — connecting producers, talent, investors, brands, distributors, exhibitors, platforms and audiences.
          </p>

          <p className="text-sm sm:text-base text-white/75 mb-8 max-w-2xl mx-auto font-sans leading-relaxed [word-spacing:0.05em]">
            Rather than owning the assets that power entertainment, DigiSynq synchronizes them. The principle is simple: <strong className="text-white font-semibold">own less, connect more, and make the ecosystem work better together.</strong>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono font-bold tracking-[2px] text-white/80 mb-12">
            {['People', 'Projects', 'Assets', 'Content', 'Audiences', 'Opportunities'].map((tag, i, arr) => (
              <React.Fragment key={tag}>
                <span className="px-3.5 py-1.5 rounded-full bg-[#0D1220]/80 border border-white/[0.12] text-white/90 backdrop-blur-xl">
                  {tag}
                </span>
                {i < arr.length - 1 && <span className="text-white/20 select-none">•</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="pt-8 border-t border-white/[0.08]">
            <div className="flex justify-center mb-6">
              <img
                src={digisynqLogo}
                alt="DigiSynq — asset-light cinema network logo"
                loading="lazy"
                decoding="async"
                className="h-16 sm:h-20 w-auto object-contain mx-auto"
              />
            </div>
            <div className="text-xs font-mono font-bold tracking-[3px] text-white/70 mb-2">
              The network between the dots.
            </div>
            <div className="text-[11px] font-mono tracking-[2px] text-white/40 mb-6">
              The asset-light operating network for cinema.
            </div>
            <div className="inline-flex items-center gap-4 text-xs font-bold font-mono tracking-[4px] text-white">
              <span>Connect</span>
              <span className="text-white/70">•</span>
              <span>Synq</span>
              <span className="text-white/70">•</span>
              <span>Scale</span>
            </div>

            {onOpenRunbook && (
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => onOpenRunbook(0)}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#5CE1E6]/10 border border-[#5CE1E6]/40 text-[#5CE1E6] hover:bg-[#5CE1E6]/20 hover:text-white text-xs font-mono font-bold tracking-[2px] transition-all duration-200 shadow-[0_0_25px_rgba(92,225,230,0.15)] group cursor-pointer active:scale-95"
                >
                  <BookOpen className="w-4 h-4 text-[#5CE1E6] group-hover:scale-110 transition-transform" />
                  <span>READ EXECUTIVE BUSINESS RUNBOOK</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="cred-hairline absolute bottom-0 left-0" />
      </section>

      {/* SECTION 43: COMPREHENSIVE FOOTER */}
      <footer className="py-16 bg-[#070A12] border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-12">
            {/* Column 1: Platform */}
            <div>
              <span className="text-xs font-mono tracking-[2px] text-white block mb-4 font-bold uppercase">
                Platform
              </span>
              <ul className="space-y-2.5 text-xs text-white/70 font-medium">
                {[
                  { label: 'Platform Overview', href: '#product-ecosystem' },
                  { label: 'Products Directory', href: '#product-directory' },
                  { label: 'Network Flow Graph', href: '#network-flow' },
                  { label: 'Capacity Marketplace', href: '#marketplace' },
                  { label: 'Intelligence Layer', href: '#intelligence' },
                  { label: 'DigiSynq OS Stack', href: '#digisynq-os' },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-white hover:underline transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Solutions */}
            <div>
              <span className="text-xs font-mono tracking-[2px] text-white block mb-4 font-bold uppercase">
                Stakeholders
              </span>
              <ul className="space-y-2.5 text-xs text-white/70 font-medium">
                {[
                  { label: 'Producers & Studios', href: '#audience-solutions' },
                  { label: 'Talent & Crew Guilds', href: '#audience-solutions' },
                  { label: 'Investors & Financiers', href: '#audience-solutions' },
                  { label: 'Brands & Sponsors', href: '#audience-solutions' },
                  { label: 'Distributors & Exhibitors', href: '#audience-solutions' },
                  { label: 'Audiences & Cinephiles', href: '#audience-solutions' },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-white hover:underline transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <span className="text-xs font-mono tracking-[2px] text-white block mb-4 font-bold uppercase">
                Company
              </span>
              <ul className="space-y-2.5 text-xs text-white/70 font-medium">
                {[
                  { label: 'About DigiSynq', href: '#about-vision' },
                  { label: 'Founding Partners', href: '#about-vision' },
                  { label: 'Operating Principles', href: '#about-vision' },
                  { label: 'Asset-Light Model', href: '#asset-light' },
                  { label: 'Network Flywheel', href: '#flywheel' },
                  { label: 'Monetization Architecture', href: '#business-model' },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-white hover:underline transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Runbook Chapters */}
            <div>
              <span className="text-xs font-mono tracking-[2px] text-white block mb-4 font-bold uppercase">
                Runbook Docs
              </span>
              <ul className="space-y-2.5 text-xs text-white/70 font-medium">
                {onOpenRunbook ? (
                  <>
                    <li>
                      <button
                        onClick={() => onOpenRunbook(0)}
                        className="text-[#5CE1E6] hover:underline flex items-center gap-1.5 font-semibold transition-colors cursor-pointer text-left"
                      >
                        <span>Ch.01: Problem Manifesto</span>
                        <ArrowUpRight className="w-3 h-3 shrink-0" />
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onOpenRunbook(1)}
                        className="hover:text-white transition-colors cursor-pointer text-left"
                      >
                        Ch.02: 8-Node Topology
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onOpenRunbook(2)}
                        className="hover:text-white transition-colors cursor-pointer text-left"
                      >
                        Ch.03: 4 Core Protocols
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onOpenRunbook(3)}
                        className="hover:text-white transition-colors cursor-pointer text-left"
                      >
                        Ch.04: Execution Engine
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onOpenRunbook(4)}
                        className="hover:text-white transition-colors cursor-pointer text-left"
                      >
                        Ch.05: Pro-Forma Economics
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onOpenRunbook(6)}
                        className="hover:text-white transition-colors cursor-pointer text-left"
                      >
                        Ch.07: SynqTrust Security
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <a href="#platform-model" className="hover:text-white transition-colors">
                      Protocol Documentation
                    </a>
                  </li>
                )}
              </ul>
            </div>

            {/* Column 5: Trust & Governance */}
            <div>
              <span className="text-xs font-mono tracking-[2px] text-white block mb-4 font-bold uppercase">
                Trust & Verification
              </span>
              <ul className="space-y-2.5 text-xs text-white/70 font-medium">
                {[
                  { label: 'SynqTrust Architecture', href: '#trust-layer' },
                  { label: 'Smart Escrow Protocols', href: '#trust-layer' },
                  { label: 'Guild Credential Proofs', href: '#trust-layer' },
                  { label: 'Data Governance Matrix', href: '#trust-layer' },
                  { label: 'Dispute Settlement Layer', href: '#trust-layer' },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-white hover:underline transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 font-mono gap-4">
            <div className="flex items-center gap-3">
              <img
                src={digisynqLogo}
                alt="DigiSynq footer logo"
                loading="lazy"
                decoding="async"
                className="h-5 sm:h-6 w-auto object-contain opacity-80"
              />
              <span>© {new Date().getFullYear()} DigiSynq Technologies Inc. All rights reserved.</span>
            </div>
            <div className="text-white/60">
              The Asset-Light Operating Network for Cinema.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
