import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ChevronDown, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { ProblemEngine } from '../../components/website/ProblemEngine';
import { EcosystemMap } from '../../components/website/EcosystemMap';
import { SynqFlowDiagram } from '../../components/website/SynqFlowDiagram';
import { OPERATING_PRINCIPLES, FILMMAKING_STAGES, REVENUE_STREAMS, WORKSHOP_PROGRAMS } from '../../data/website/core_data';

// ── Motion Preset ─────────────────────────────────────────
// Single Apple easing token shared by every reveal. Explicit tuple type
// keeps motion v12 types happy (number[] is not assignable to Easing).
export const EASE_APPLE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: EASE_APPLE },
};

// ── Section Component ─────────────────────────────────────
function Section({
  id, children, className = ''
}: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`py-20 sm:py-28 relative scroll-mt-24 ${className}`}>
      {children}
    </section>
  );
}

// ── Section Divider ───────────────────────────────────────
function SectionDivider() {
  return <div className="border-t border-white/[0.05]" />;
}

// ── Interactive Fragment Visual ───────────────────────────
const FRAGMENTS = [
  { label: 'Technician', role: 'Skills' },
  { label: 'Studio', role: 'Capacity' },
  { label: 'Producer', role: 'Capital' },
  { label: 'Creator', role: 'Vision' },
  { label: 'Distributor', role: 'Reach' },
  { label: 'Audience', role: 'Demand' },
];

function FragmentVisual() {
  const [synced, setSynced] = useState(false);

  return (
    <div className="relative w-full max-w-3xl mx-auto my-8 p-6 bento-card bento-card-subtle">
      <div className="text-center mb-6">
        <span className="apple-eyebrow text-[#5CE1E6] mb-1">Interactive demonstration</span>
        <div className="text-sm text-[#86868b]">
          {synced ? 'System synchronized: seamless resource coordination' : 'System fragmented: isolated resources and missed opportunities'}
        </div>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-3">
        {FRAGMENTS.map((f, i) => (
          <motion.div
            key={f.label}
            animate={synced
              ? { opacity: 1, scale: 1, x: 0, y: 0 }
              : { opacity: 0.7, scale: 0.95, x: (i % 2 === 0 ? -1 : 1) * (8 + i * 3), y: (i % 3 === 0 ? -1 : 1) * (6 + i * 2) }
            }
            transition={{ duration: 0.5, delay: synced ? i * 0.04 : 0, ease: EASE_APPLE }}
            className={`px-4 py-3 rounded-2xl border text-xs ${
              synced
                ? 'border-[#5CE1E6]/40 bg-[#5CE1E6]/10 text-[#5CE1E6] shadow-[0_0_20px_rgba(92,225,230,0.15)]'
                : 'border-white/10 bg-white/[0.03] text-white/70'
            }`}
          >
            <div className="font-semibold text-white">{f.label}</div>
            <div className="text-[10px] text-[#86868b]">{f.role}</div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => setSynced(!synced)}
          className={`apple-pill cursor-pointer ${synced ? 'border-[#5CE1E6]/40 text-[#5CE1E6]' : ''}`}
          aria-label={synced ? 'Show fragmented state' : 'Synchronize the system'}
        >
          {synced ? 'Show fragmented state' : 'Synchronize the system'}
        </button>
      </div>
    </div>
  );
}

// ── Main HomePage Component ───────────────────────────────
export function HomePage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [showScrollCue, setShowScrollCue] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    const onScroll = () => { if (window.scrollY > 80) setShowScrollCue(false); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { clearTimeout(t); window.removeEventListener('scroll', onScroll); };
  }, []);

  return (
    <main className="bg-[#05060D] text-[#ECEEF5] selection:bg-[#5CE1E6]/20 selection:text-[#5CE1E6]">

      {/* ══════════════════════════════════════════════════════
          01 — HERO (Apple Bento Showcase)
         ══════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16"
        aria-labelledby="hero-headline"
      >
        {/* Apple radial ambient glow */}
        <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(92,225,230,0.06)_0%,rgba(59,130,246,0.02)_50%,transparent_75%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="apple-pill border-[#5CE1E6]/25 bg-[#5CE1E6]/05 text-[#5CE1E6]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] animate-pulse" />
              <span>A new category in filmmaking</span>
            </div>
          </motion.div>

          {/* Dual-tone headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center max-w-4xl mx-auto mb-6"
          >
            <h1
              id="hero-headline"
              className="text-[clamp(2.6rem,7vw,5.5rem)] font-bold tracking-tight text-white leading-[1.02]"
            >
              Cinema has a lot of moving parts.<br />
              <span className="text-[#5CE1E6]">We synq them.</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-base sm:text-lg text-[#86868b] max-w-2xl mx-auto leading-relaxed mb-10"
          >
            An asset-light cinema problem-solving company building a synchronization layer across the filmmaking ecosystem. We find the gaps, connect what fits, and coordinate the system.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
          >
            <Link
              to="/start"
              className="px-6 py-3 rounded-full bg-[#5CE1E6] text-[#05060D] font-medium text-sm hover:bg-[#72e6ea] transition-all flex items-center gap-2 shadow-[0_4px_24px_rgba(92,225,230,0.25)]"
              id="hero-start-synq-cta"
            >
              Start a synq
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/the-synq"
              className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/10 transition-all"
            >
              Understand the idea
            </Link>
            <Link
              to="/how-it-works"
              className="px-5 py-3 rounded-full text-[#86868b] hover:text-white text-sm transition-colors flex items-center gap-1.5"
            >
              How it works
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          {/* Hero Bento Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="bento-grid max-w-6xl mx-auto"
          >
            {/* Feature card (8 cols on lg) */}
            <div className="col-span-12 lg:col-span-7 bento-card bento-cyan p-7 sm:p-9 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="apple-eyebrow text-[#5CE1E6]">Category definition</span>
                  <span className="apple-pill text-[10px] py-0.5 px-2">Asset-light</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Cinema synchronization
                </h3>
                <p className="text-sm text-[#86868b] leading-relaxed mb-6">
                  A system for discovering, connecting, and coordinating fragmented resources across filmmaking — talent, technical crews, studios, equipment, intellectual property, distribution, and audiences.
                </p>
              </div>

              <div className="flex items-center gap-2 flex-wrap pt-4 border-t border-white/[0.08]">
                {['Talent & crew', 'Studios & stages', 'Rights & IP', 'Audience synchronization'].map((pill) => (
                  <span key={pill} className="apple-pill text-xs text-white/80">
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stat card 1: Coordination Model (5 cols on lg) */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-5 bento-card p-7 sm:p-9 flex flex-col justify-between">
              <div>
                <span className="apple-eyebrow mb-2">Coordination vs ownership</span>
                <div className="bento-num text-[#5CE1E6] mb-2">0</div>
                <div className="text-sm font-semibold text-white mb-1">Heavy assets owned</div>
                <p className="text-xs text-[#86868b] leading-relaxed">
                  DigiSynq does not buy cameras, build studios, or sign exclusive rosters. We orchestrate what already exists across the ecosystem.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#86868b]">
                <span>Asset-light advantage</span>
                <span className="text-[#5CE1E6] font-medium">Infinite flexibility</span>
              </div>
            </div>

            {/* Stat card 2: Ecosystem Reach (6 cols on sm/lg) */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-6 bento-card bento-gold p-7 sm:p-9 flex flex-col justify-between">
              <div>
                <span className="apple-eyebrow text-[#E8B84B] mb-2">System coverage</span>
                <div className="bento-num text-[#E8B84B] mb-2">9</div>
                <div className="text-sm font-semibold text-white mb-1">Filmmaking stages synchronized</div>
                <p className="text-xs text-[#86868b] leading-relaxed">
                  From ideation and packaging to production, post-finishing, distribution, and monetization.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center gap-2">
                <span className="apple-pill text-xs text-[#E8B84B]/90 border-[#E8B84B]/20">
                  Full lifecycle
                </span>
                <span className="text-xs text-[#86868b]">Non-linear network dependencies</span>
              </div>
            </div>

            {/* Live Problem Engine Quick Card (6 cols on sm/lg) */}
            <div className="col-span-12 lg:col-span-6 bento-card bento-emerald p-7 sm:p-9 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="apple-eyebrow text-[#34C759]">Problem-first engine</span>
                  <span className="apple-pill text-[10px] text-[#34C759] border-[#34C759]/20">Active</span>
                </div>
                <div className="text-lg font-bold text-white mb-2">Have a challenge in cinema?</div>
                <p className="text-xs text-[#86868b] leading-relaxed mb-4">
                  Select your constraint — whether missing technical skills, unbooked studio capacity, or distribution friction — and map an active synq path.
                </p>
              </div>

              <a
                href="#problem-engine"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#34C759] hover:underline"
              >
                Launch problem engine below
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Scroll cue */}
        {showScrollCue && (
          <div className="absolute bottom-6 left-1/2 flex flex-col items-center gap-2 text-white/30 animate-apple-drift" aria-hidden="true">
            <ChevronDown className="w-4 h-4" />
          </div>
        )}
      </section>

      {/* ══════════════════════════════════════════════════════
          02 — THE PROBLEM ENGINE (Primary Experience)
         ══════════════════════════════════════════════════════ */}
      <SectionDivider />
      <Section id="problem-engine" className="bg-[#03040A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="apple-eyebrow text-[#5CE1E6] mb-2">The problem engine</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
              Start with your problem.
            </h2>
            <p className="text-[#86868b] text-sm sm:text-base max-w-xl mx-auto">
              The website is designed problem-first. Select your challenge and we will map a tailored synq path.
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="bento-card p-6 sm:p-10 border border-white/10">
              <ProblemEngine compact />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          03 — THE CATEGORY: CINEMA SYNCHRONIZATION
         ══════════════════════════════════════════════════════ */}
      <SectionDivider />
      <Section id="category" className="bg-[#05060D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
            <span className="apple-eyebrow text-[#5CE1E6] mb-2">Building a new category</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Cinema synchronization.
            </h2>
            <p className="text-base text-[#86868b] leading-relaxed">
              We are defining a new discipline in the entertainment industry. Not another production house, agency, or software tool — an asset-light coordination layer.
            </p>
          </motion.div>

          <div className="bento-grid">
            {/* What DigiSynq is NOT card */}
            <motion.div
              {...fadeUp}
              className="col-span-12 lg:col-span-6 bento-card p-8 sm:p-10 flex flex-col justify-between"
            >
              <div>
                <span className="apple-eyebrow text-[#FF453A] mb-4">What we are not</span>
                <h3 className="text-xl font-bold text-white mb-6">
                  Clear boundaries on our identity
                </h3>

                <div className="space-y-3">
                  {[
                    { title: 'Not an agency', desc: 'We do not sell packaged creative services or represent talent rosters.' },
                    { title: 'Not a production house', desc: 'We do not own soundstages, trucks, cameras, or hire full crew payrolls.' },
                    { title: 'Not a marketplace', desc: 'We do not run an uncurated directory or open freelancer bidding portal.' },
                    { title: 'Not a SaaS tool', desc: 'We solve real industry coordination bottlenecks, not sell monthly seat licenses.' },
                  ].map((item) => (
                    <div key={item.title} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="text-xs font-semibold text-white/90 line-through decoration-[#FF453A]/70 mb-0.5">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-[#86868b]">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] text-xs text-[#86868b]">
                Avoiding industry confusion through rigorous category positioning.
              </div>
            </motion.div>

            {/* What DigiSynq IS card */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-12 lg:col-span-6 bento-card bento-cyan p-8 sm:p-10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="apple-eyebrow text-[#5CE1E6]">What DigiSynq is</span>
                  <span className="apple-pill text-[10px] text-[#5CE1E6] border-[#5CE1E6]/25">Core thesis</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  An asset-light cinema problem-solving business
                </h3>

                <p className="text-sm text-[#86868b] leading-relaxed mb-6">
                  A high-conviction coordination layer that maps what already exists, identifies missing connections, and synchronizes fragmented resources.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    { step: 'Identify', text: 'Locate underutilized capacity, missing talent, or siloed IP.' },
                    { step: 'Connect', text: 'Bridge filmmakers, technicians, studios, and distributors.' },
                    { step: 'Coordinate', text: 'Manage the workflow with lean, accountable execution.' },
                    { step: 'Create value', text: 'Share in upside generated through saved time and expanded revenue.' },
                  ].map((s) => (
                    <div key={s.step} className="flex items-start gap-3">
                      <span className="apple-pill text-[10px] text-[#5CE1E6] shrink-0">{s.step}</span>
                      <span className="text-xs text-white/80">{s.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <Link to="/the-synq" className="apple-pill text-xs text-white hover:text-[#5CE1E6]">
                  Read the category manifesto
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          04 — THE 6 FRAGMENTATION GAPS (Bento Grid)
         ══════════════════════════════════════════════════════ */}
      <SectionDivider />
      <Section id="fragmentation" className="bg-[#03040A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12 max-w-3xl mx-auto">
            <span className="apple-eyebrow text-[#5CE1E6] mb-2">The systemic friction</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Cinema has resources.<br />
              <span className="text-[#86868b]">They remain fragmented.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#86868b] leading-relaxed">
              Skills exist without projects. Studios sit empty between bookings. Films are completed without distribution clarity. The resources exist — the synchronization is missing.
            </p>
          </motion.div>

          {/* Interactive visual */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <FragmentVisual />
          </motion.div>

          {/* 6 Gap Bento Cards */}
          <div className="bento-grid mt-12">
            {[
              {
                gap: 'Technician ↔ Project',
                sub: 'Skills exist, discovery fails',
                desc: 'Specialized technicians remain invisible outside small circles, while productions scramble to fill crucial technical seats.',
                pill: 'Verified skill profiles',
                color: 'bento-gold',
                accent: 'text-[#E8B84B]',
              },
              {
                gap: 'Studio ↔ Production',
                sub: 'Idle floors vs peak congestion',
                desc: 'Soundstages sit dark during lulls, yet productions struggle to find shooting floors during sudden industry waves.',
                pill: 'Capacity balancing',
                color: 'bento-cyan',
                accent: 'text-[#5CE1E6]',
              },
              {
                gap: 'Creator ↔ Distribution',
                sub: 'Content made without path to audience',
                desc: 'Independent creators invest capital without early theatrical or digital windowing strategy, losing negotiation power.',
                pill: 'Distribution modeling',
                color: 'bento-emerald',
                accent: 'text-[#34C759]',
              },
              {
                gap: 'Information ↔ Decision',
                sub: 'Opaque data, high risk',
                desc: 'Filmmakers make multi-million decisions based on intuition while critical audience and vendor performance data remains siloed.',
                pill: 'Decision synchronization',
                color: 'bento-coral',
                accent: 'text-[#FF453A]',
              },
              {
                gap: 'Skills ↔ Opportunity',
                sub: 'Static careers in a shifting craft',
                desc: 'Technicians rarely have structured paths to learn emerging virtual production, volume setups, or generative workflows.',
                pill: 'Continuous development',
                color: 'bento-cyan',
                accent: 'text-[#5CE1E6]',
              },
              {
                gap: 'Content ↔ Rights',
                sub: 'Trapped ancillary value',
                desc: 'Intellectual property is produced without capitalizing on cross-medium adaptation, merchandising, or digital licensing.',
                pill: 'Rights optimization',
                color: 'bento-gold',
                accent: 'text-[#E8B84B]',
              },
            ].map((item, i) => (
              <motion.div
                key={item.gap}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`col-span-12 sm:col-span-6 lg:col-span-4 bento-card ${item.color} p-6 sm:p-7 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="apple-eyebrow">Gap 0{i + 1}</span>
                    <span className={`apple-pill text-[10px] ${item.accent}`}>{item.pill}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{item.gap}</h3>
                  <div className="text-xs font-medium text-white/60 mb-3">{item.sub}</div>
                  <p className="text-xs text-[#86868b] leading-relaxed">{item.desc}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#86868b]">
                  <span>Active synq pathway</span>
                  <Link to="/the-synq" className="text-white hover:text-[#5CE1E6] flex items-center gap-1">
                    Explore
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/the-synq" className="apple-pill text-xs px-5 py-2.5 text-white hover:text-[#5CE1E6]">
              Explore the complete 6-gap matrix
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          05 — THE SYNQ OPERATING LOOP (9 Stages)
         ══════════════════════════════════════════════════════ */}
      <SectionDivider />
      <Section id="how-it-works-preview" className="bg-[#05060D]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="apple-eyebrow text-[#5CE1E6] mb-2">Operating architecture</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              How the system works.
            </h2>
            <p className="text-[#86868b] text-sm max-w-lg mx-auto">
              Every synq engagement executes through a verified loop — from problem discovery to continuous feedback.
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="bento-card p-6 sm:p-8 border border-white/10">
              <SynqFlowDiagram compact />
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <Link to="/how-it-works" className="apple-pill text-xs px-5 py-2.5 text-white hover:text-[#5CE1E6]">
              Full 9-stage operating model
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          06 — THE 8-NODE ECOSYSTEM MAP
         ══════════════════════════════════════════════════════ */}
      <SectionDivider />
      <Section id="ecosystem-preview" className="bg-[#03040A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="apple-eyebrow text-[#5CE1E6] mb-2">Ecosystem participants</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Who DigiSynq connects.
            </h2>
            <p className="text-[#86868b] text-sm max-w-lg mx-auto">
              Select any participant node to understand their core friction and how our synchronization layer unlocks value.
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="bento-card p-6 sm:p-8 border border-white/10">
              <EcosystemMap size="full" />
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <Link to="/ecosystem" className="apple-pill text-xs px-5 py-2.5 text-white hover:text-[#5CE1E6]">
              Explore the interactive ecosystem
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          07 — ASSET-LIGHT CINEMA MODEL
         ══════════════════════════════════════════════════════ */}
      <SectionDivider />
      <Section id="asset-light" className="bg-[#05060D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <motion.div {...fadeUp} className="lg:col-span-6 space-y-6">
              <span className="apple-eyebrow text-[#5CE1E6]">Operating philosophy</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Own the coordination.<br />
                <span className="text-[#86868b]">Not the assets.</span>
              </h2>
              <p className="text-sm text-[#86868b] leading-relaxed">
                Traditional cinema businesses attempt to own and finance massive physical machinery. DigiSynq operates as an orchestration network, turning fragmentation into synchronized efficiency.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  { action: 'Map', detail: 'catalog existing ecosystem talent, infrastructure, and rights' },
                  { action: 'Detect', detail: 'identify idle capacity, mismatched schedules, and gaps' },
                  { action: 'Align', detail: 'connect high-trust collaborators with exact requirements' },
                  { action: 'Orchestrate', detail: 'guide the production workflow through active coordination' },
                  { action: 'Share value', detail: 'capture value through performance, accuracy, and upside' },
                ].map((item) => (
                  <div key={item.action} className="flex items-center gap-3">
                    <span className="apple-pill text-[11px] text-[#5CE1E6] shrink-0 w-24 justify-center">
                      {item.action}
                    </span>
                    <span className="text-xs text-white/70">{item.detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Apple Bento Comparison Cards */}
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="lg:col-span-6 space-y-4">
              <div className="bento-grid">
                
                {/* Traditional card */}
                <div className="col-span-12 sm:col-span-6 bento-card bento-card-subtle p-6 space-y-4">
                  <div className="apple-eyebrow text-white/40">Traditional asset-heavy</div>
                  <div className="space-y-2">
                    {['Buy expensive equipment', 'Maintain high overhead', 'Absorb idle facility cost', 'Compete with vendors'].map((line) => (
                      <div key={line} className="text-xs text-[#86868b] line-through decoration-white/30">
                        {line}
                      </div>
                    ))}
                  </div>
                </div>

                {/* DigiSynq card */}
                <div className="col-span-12 sm:col-span-6 bento-card bento-cyan p-6 space-y-4 border-[#5CE1E6]/30">
                  <div className="apple-eyebrow text-[#5CE1E6]">DigiSynq asset-light</div>
                  <div className="space-y-2">
                    {['Discover and verify', 'Orchestrate on-demand', 'Balance idle capacity', 'Unite the ecosystem'].map((line) => (
                      <div key={line} className="text-xs font-medium text-white">
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Strategic Assets card */}
              <div className="bento-card p-6 border-white/10">
                <span className="apple-eyebrow text-[#5CE1E6] mb-3">Our long-term enduring assets</span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['Network graph', 'Execution workflows', 'Verified relationships', 'Ecosystem data', 'Domain trust', 'Proprietary IP'].map((a) => (
                    <span key={a} className="apple-pill text-xs text-white/80">
                      {a}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          08 — FILMMAKING STAGES (Cinema as a System)
         ══════════════════════════════════════════════════════ */}
      <SectionDivider />
      <Section id="filmmaking-system" className="bg-[#03040A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="apple-eyebrow text-[#5CE1E6] mb-2">Cinema as a system</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Synchronization across every stage.
            </h2>
            <p className="text-[#86868b] text-sm max-w-lg mx-auto">
              Filmmaking is not an isolated pipeline — decisions in distribution impact early packaging.
            </p>
          </motion.div>

          {/* Stage Bento Horizontal Scroll / Rail */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="overflow-x-auto pb-4">
            <div className="flex items-center gap-3 min-w-max mx-auto justify-center">
              {FILMMAKING_STAGES.map((stage) => (
                <div
                  key={stage.id}
                  className="bento-card p-4 w-36 text-center space-y-2 hover:border-[#5CE1E6]/40 transition-colors"
                >
                  <div className="w-10 h-10 mx-auto rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg">
                    {stage.icon}
                  </div>
                  <div className="text-xs font-semibold text-white">{stage.label}</div>
                  <div className="text-[10px] text-[#86868b] leading-tight">{stage.description}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <p className="text-xs text-[#86868b]">
              Every stage has non-linear dependencies. DigiSynq aligns them before bottlenecks materialize.
            </p>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          09 — BUSINESS MODEL (Honest Status Labels)
         ══════════════════════════════════════════════════════ */}
      <SectionDivider />
      <Section id="business-model" className="bg-[#05060D]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="apple-eyebrow text-[#5CE1E6] mb-2">Revenue architecture</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Multiple revenue layers. Honest status.
            </h2>
            <p className="text-[#86868b] text-sm max-w-xl mx-auto">
              We transparently distinguish what is live, in pilot, planned, or experimental.
            </p>
          </motion.div>

          <div className="bento-grid">
            {REVENUE_STREAMS.map((stream, i) => {
              const statusPillClass =
                stream.status === 'PILOT'
                  ? 'border-[#34C759]/30 text-[#34C759] bg-[#34C759]/05'
                  : stream.status === 'LIVE'
                  ? 'border-[#5CE1E6]/30 text-[#5CE1E6] bg-[#5CE1E6]/05'
                  : 'border-white/10 text-[#86868b] bg-white/[0.02]';

              return (
                <motion.div
                  key={stream.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="col-span-12 sm:col-span-6 bento-card p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-bold text-white">{stream.name}</h3>
                      <span className={`apple-pill text-[10px] ${statusPillClass}`}>
                        {stream.status}
                      </span>
                    </div>
                    <p className="text-xs text-[#86868b] leading-relaxed mb-4">
                      {stream.description}
                    </p>
                  </div>
                  <div className="text-[11px] text-white/40 pt-3 border-t border-white/[0.05]">
                    Stream 0{i + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          10 — OPERATING PRINCIPLES
         ══════════════════════════════════════════════════════ */}
      <SectionDivider />
      <Section id="principles" className="bg-[#03040A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="apple-eyebrow text-[#5CE1E6] mb-2">Our standards</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Operating principles.
            </h2>
            <p className="text-[#86868b] text-sm max-w-md mx-auto">
              How we work, make decisions, and preserve trust across the entertainment industry.
            </p>
          </motion.div>

          <div className="bento-grid">
            {OPERATING_PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="col-span-12 sm:col-span-6 lg:col-span-3 bento-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] font-mono text-[#5CE1E6] mb-2">0{i + 1}</div>
                  <h3 className="text-sm font-bold text-white mb-2">{p.label}</h3>
                  <p className="text-xs text-[#86868b] leading-relaxed">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          11 — FINAL CALL TO ACTION (Heroic Bento Card)
         ══════════════════════════════════════════════════════ */}
      <SectionDivider />
      <Section id="cta" className="bg-[#05060D]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="bento-card bento-cyan p-10 sm:p-14 text-center">
            <span className="apple-eyebrow text-[#5CE1E6] mb-3">Begin synchronization</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
              Find the gap. Synq the system.<br />
              <span className="text-[#5CE1E6]">Create value.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#86868b] max-w-xl mx-auto leading-relaxed mb-8">
              Whether you are facing production bottlenecks, underutilized studio facilities, or distribution friction — let us build your synq path.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/start"
                className="px-7 py-3.5 rounded-full bg-[#5CE1E6] text-[#05060D] font-medium text-sm hover:bg-[#72e6ea] transition-all flex items-center gap-2 shadow-[0_4px_24px_rgba(92,225,230,0.25)]"
                id="homepage-final-cta"
              >
                Start a synq
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/10 transition-all"
              >
                About DigiSynq
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

    </main>
  );
}
