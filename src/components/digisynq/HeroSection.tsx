import { Fragment } from 'react';
import type { FC } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { NetworkVisualizer } from './NetworkVisualizer';
import { BentoGrid, BentoStat } from './bento/Bento';
import cinemaLensPrism from '../../assets/cinema-lens-prism.jpg';

interface HeroSectionProps {
  onOpenJoinModal: () => void;
  onOpenRunbook?: (chapterIndex?: number) => void;
}

export const HeroSection: FC<HeroSectionProps> = ({ onOpenJoinModal, onOpenRunbook }) => {
  const flowSteps = [
    { label: 'People', role: 'Talent & Crew' },
    { label: 'Projects', role: 'Slates & Packages' },
    { label: 'Assets', role: 'Gear & Stages' },
    { label: 'Content', role: 'Rights & Films' },
    { label: 'Audiences', role: 'Theatres & Fans' },
    { label: 'Opportunities', role: 'Global Value' },
  ];

  const trustItems = [
    'Producers', 'Distributors', 'Exhibitors', 'Talent & Crew',
    'Studios', 'Brands & Sponsors', 'Creators', 'Investors',
  ];

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-0 overflow-hidden bg-[#070A12]"
    >
      {/* Deep Midnight Void & Luminous Ambient Horizon Glow */}
      <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(92,225,230,0.07)_0%,rgba(139,124,255,0.05)_40%,transparent_70%)] blur-[110px] opacity-80" />


      {/* Subtle curved glowing horizon line */}
      <div className="pointer-events-none absolute top-64 left-1/2 -translate-x-1/2 w-[1200px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[0.5px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">


        {/* ── Hero Headline (Syne + Momo Trust Display) ── */}
        <div className="text-center max-w-5xl mx-auto mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-8xl lg:text-9xl font-extrabold text-white tracking-tight leading-[0.93] cred-headline font-denton-extrabold"
          >
            The network<br />
            <span className="text-white/75 font-denton-extrabold">between the dots.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.20, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg sm:text-2xl text-white/90 font-normal leading-relaxed max-w-3xl mx-auto font-sans tracking-[0.01em] [word-spacing:0.06em]"
          >
            DigiSynq is an asset-light coordination mechanism for the entertainment ecosystem. It operates in the space between the ecosystem's nodes — connecting producers, talent, investors, brands, distributors, exhibitors, platforms and audiences.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-xs sm:text-sm font-sans tracking-wide text-[#5CE1E6] max-w-2xl mx-auto font-semibold"
          >
            Own less. Connect more. Make the ecosystem work better together.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onOpenJoinModal}
              className="cred-btn-primary w-full sm:w-auto"
              id="hero-cta-join-network"
            >
              <span>Join the network</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#product-ecosystem"
              className="cred-btn-glass w-full sm:w-auto"
              id="hero-cta-explore-products"
            >
              <span>Explore products</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </a>
          </motion.div>
        </div>

        {/* ── Apple Bento Metrics Ledger — 4-col zero-gap dark stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="max-w-6xl mx-auto my-16"
        >
          <BentoGrid columns={4}>
            <BentoStat
              href="#product-ecosystem"
              title="Inspect 12 Ecosystem Platforms"
              label="Ecosystem Platforms"
              value="12"
              sub="Specialized products, one network"
              accent="#f5f5f7"
              tone="neutral"
              badge="+82 capabilities"
              badgeTone="blue"
            />
            <BentoStat
              href="#network-flow"
              title="Inspect 28 Full-Mesh Coordination Links"
              label="Full-Mesh Links"
              value="28"
              sub="People to opportunities"
              accent="#2997ff"
              tone="blue"
              badge="Live graph"
              badgeTone="blue"
            />
            <BentoStat
              href="#digisynq-os"
              title="Inspect 10 DigiSynq OS Stack Layers"
              label="OS Stack Layers"
              value="10"
              sub="Intelligence to settlement"
              accent="#bf5af2"
              tone="purple"
              badge="Full stack"
              badgeTone="purple"
            />
            <BentoStat
              href="#asset-light"
              title="Inspect Asset-Light Architecture"
              label="Asset-Light Network"
              value="100%"
              sub="Own less, connect more"
              accent="#30d158"
              tone="green"
              badge="Verified"
              badgeTone="green"
              valueSize={44}
              primary
            />
          </BentoGrid>
        </motion.div>

        {/* ── Trust Ticker Strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.44 }}
          className="flex items-center justify-center gap-3 flex-wrap text-xs font-mono tracking-[2.5px] text-white/40 mb-12"
        >
          <span className="text-white/70">Crafted for:</span>
          {trustItems.map((item, i) => (
            <Fragment key={item}>
              <span className="text-white/70 font-semibold">{item}</span>
              {i < trustItems.length - 1 && <span className="text-white/20">·</span>}
            </Fragment>
          ))}
        </motion.div>

        {/* ── Dynamic Interactive Network Visualizer ── */}
        <div id="hero-network-flow" className="relative my-20">

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[28px] overflow-hidden cred-card p-2 sm:p-4 viewfinder-box relative z-10"
        >
          <div className="viewfinder-corner-tl" />
          <div className="viewfinder-corner-tr" />
          <div className="viewfinder-corner-bl" />
          <div className="viewfinder-corner-br" />
          <NetworkVisualizer onOpenRunbook={onOpenRunbook} />
        </motion.div>
      </div>

        {/* ── Hero Value Statement ── */}
        <div className="relative my-14">



          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            id="hero-value-statement"
            className="relative rounded-[20px] cred-card p-8 sm:p-14 text-center overflow-hidden mb-0 viewfinder-box z-10"
          >
          <div className="viewfinder-corner-tl" />
          <div className="viewfinder-corner-tr" />
          <div className="viewfinder-corner-bl" />
          <div className="viewfinder-corner-br" />
          {/* Cinematic Anamorphic Lens Background Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden mix-blend-screen">
            <img
              src={cinemaLensPrism}
              alt="Anamorphic cinema lens flare over a production set"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          </div>

          <div className="max-w-4xl mx-auto relative z-10 pt-2">
            <div data-augmented-ui="tl-clip br-clip" className="aug-hud-chip inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/90 border border-[#5CE1E6]/30 text-[#5CE1E6] font-mono text-[11px] font-bold tracking-[2px] mb-6 backdrop-blur-xl shadow-[0_0_15px_rgba(92,225,230,0.12)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] shadow-[0_0_8px_#5CE1E6]" />
              Core thesis.
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight font-denton-extrabold mb-6">
              Rather than owning the assets,<br />
              <span className="text-white/75 font-denton-extrabold">DigiSynq synchronizes them.</span>
            </h2>

            {/* Progressive Flow Chain */}
            <div className="my-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {flowSteps.map((step, idx) => (
                <Fragment key={step.label}>
                  <div className="flex flex-col items-center px-5 py-3 rounded-lg bg-black/70 border border-white/15 hover:border-white/40 transition-all duration-200 shadow-md">
                    <span className="text-xs sm:text-sm font-mono font-bold tracking-[2px] text-white">
                      {step.label}
                    </span>
                    <span className="text-[10px] text-white/75 font-mono mt-1">
                      {step.role}
                    </span>
                  </div>
                  {idx < flowSteps.length - 1 && (
                    <span className="text-white/30 font-bold text-xs select-none">→</span>
                  )}
                </Fragment>
              ))}
            </div>

            <p className="text-base sm:text-xl text-white/90 font-normal leading-relaxed max-w-3xl mx-auto font-sans tracking-[0.01em] [word-spacing:0.06em]">
              It connects fragmented information, resources, opportunities and participants; coordinates activity across the value chain; and monitors outcomes to reduce friction, leakage and risk while improving the utilization of existing ecosystem capacity.
            </p>

            <p className="mt-5 text-xs sm:text-sm font-sans tracking-wide text-[#5CE1E6] font-semibold">
              The principle is simple: own less, connect more, and make the ecosystem work better together.
            </p>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};
