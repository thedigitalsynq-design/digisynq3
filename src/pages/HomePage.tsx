import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ChevronDown, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { ProblemEngine } from '../components/ProblemEngine';
import { EcosystemMap } from '../components/EcosystemMap';
import { SynqFlowDiagram } from '../components/SynqFlowDiagram';
import { TopographicBackground } from '../components/TopographicBackground';
import { CinematicSynqDeck } from '../components/CinematicSynqDeck';

import { OPERATING_PRINCIPLES, FILMMAKING_STAGES, REVENUE_STREAMS, WORKSHOP_PROGRAMS } from '../data/core_data';

// ── Motion Preset ─────────────────────────────────────────
// Single Apple easing token shared by every reveal. Explicit tuple type
// keeps motion v12 types happy (number[] is not assignable to Easing).
const EASE_APPLE: [number, number, number, number] = [0.16, 1, 0.3, 1];

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
        <span className="apple-eyebrow text-[#23B272] mb-1">Interactive demonstration</span>
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
                ? 'border-[#23B272]/40 bg-[#23B272]/10 text-[#23B272] shadow-[0_0_20px_rgba(35, 178, 114,0.15)]'
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
          className={`apple-pill cursor-pointer ${synced ? 'border-[#23B272]/40 text-[#23B272]' : ''}`}
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
    <main className="bg-[#050608] text-[#ECEEF5] selection:bg-[#B6F02A]/20 selection:text-[#B6F02A] relative">

      {/* Global subtle topographic texture */}
      <TopographicBackground intensity="subtle" />

      {/* ══════════════════════════════════════════════════════
          01 — HERO (Elevate Labs High-Impact Poster + Cinema Synq Deck)
         ══════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16"
        aria-labelledby="hero-headline"
      >
        {/* Hero Topographic Isoline Contour Layer */}
        <TopographicBackground intensity="high" />

        {/* ── Ambient mesh gradient orbs ── */}
        <div aria-hidden="true" className="pointer-events-none">
          {/* Neon lime orb — top center */}
          <div className="ambient-orb w-[900px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(182,240,42,0.07)_0%,transparent_70%)] top-[-100px] left-1/2 -translate-x-1/2" />
          {/* Emerald orb — top left */}
          <div className="ambient-orb ambient-orb-reverse w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(35,178,114,0.06)_0%,transparent_70%)] top-[80px] left-[-120px]" />
          {/* Subtle gold orb — bottom right */}
          <div className="ambient-orb w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(212,248,56,0.04)_0%,transparent_70%)] bottom-[60px] right-[-80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">



          {/* Eyebrow: Horizontal Lime Accent Bar + "Who We Are" (Elevate Labs signature) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={heroVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3.5 mb-5"
          >
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
              ACT 01
            </span>
            <span className="text-xs sm:text-sm font-bold font-mono tracking-widest uppercase text-white/90">
              Who We Are // Cinema Intelligence Network
            </span>
          </motion.div>

          {/* High-Impact Headline & Action Bar (No Overlap) */}
          <div className="max-w-5xl mb-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h1
                id="hero-headline"
                className="text-[clamp(2.75rem,7vw,5.75rem)] font-black tracking-tight leading-[0.9] uppercase select-none text-white [letter-spacing:-0.03em] mb-6"
              >
                BEYOND<br />
                <span className="text-[#B6F02A] drop-shadow-[0_0_35px_rgba(182,240,42,0.25)]">DIGITAL</span><br />
                LIMITS.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pt-2"
            >
              {/* Vertical Lime Bar Quote (Elevate Labs signature) */}
              <div className="border-l-3 sm:border-l-4 border-[#B6F02A] pl-5 sm:pl-6 py-1 max-w-2xl">
                <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed">
                  A creative & cinema intelligence network that fuses data-driven precision with cinematic storytelling built to make brands and productions impossible to ignore.
                </p>
                <div className="text-[11px] font-mono text-[#52E3A4] mt-2">
                  // Asset-Light Cinema Coordination • Zero Physical Overhead
                </div>
              </div>

              <div className="flex items-center flex-wrap gap-2.5 shrink-0">
                <Link
                  to="/start"
                  className="btn-primary text-xs px-5 py-3 shadow-[0_0_20px_rgba(182,240,42,0.35)]"
                  id="hero-start-synq-cta"
                >
                  Start a synq
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/the-synq"
                  className="btn-secondary text-xs px-4 py-3"
                >
                  The Synq Idea
                </Link>
                <a
                  href="#problem-engine"
                  className="text-xs font-mono text-white/60 hover:text-[#B6F02A] py-2 px-2 transition-colors flex items-center gap-1"
                >
                  <span>Problem Engine</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>

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
                  <span className="apple-eyebrow text-[#23B272]">Category definition</span>
                  <span className="apple-pill text-[10px] py-0.5 px-2">Asset-light</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 leading-tight tracking-tight">
                  Cinema synchronization.<br />
                  <span className="text-white/50 font-bold">The new coordination layer.</span>
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
                <div className="bento-num text-[#23B272] mb-2">0</div>
                <div className="text-sm font-semibold text-white mb-1">Heavy assets owned</div>
                <p className="text-xs text-[#86868b] leading-relaxed">
                  DigiSynq does not buy cameras, build studios, or sign exclusive rosters. We orchestrate what already exists across the ecosystem.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#86868b]">
                <span>Asset-light advantage</span>
                <span className="text-[#23B272] font-medium">Infinite flexibility</span>
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
                <div className="text-lg font-extrabold text-white mb-2 leading-tight tracking-tight">
                  Have a challenge<br />
                  <span className="text-[#34C759]">in cinema?</span>
                </div>
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

        {/* Pulse scroll cue */}
        {showScrollCue && (
          <div className="scroll-cue" aria-hidden="true" />
        )}
      </section>

      {/* ── Cinema Telemetry Streamer Bar ── */}
      <div className="w-full bg-[#030605] border-y border-[#23B272]/20 py-3 px-4 overflow-hidden relative z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 text-[11px] font-mono text-white/70 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#23B272] animate-pulse shadow-[0_0_8px_#23B272]" />
            <span className="text-[#D4F838] font-bold">SYSTEM STATUS:</span>
            <span className="text-white">OPTIMAL SYNQ</span>
          </div>
          <div className="flex items-center gap-2 shrink-0 border-l border-white/10 pl-4">
            <span className="text-white/40">ORBITAL NODES:</span>
            <span className="text-[#52E3A4] font-semibold">6 SECTORS MESHED</span>
          </div>
          <div className="flex items-center gap-2 shrink-0 border-l border-white/10 pl-4">
            <span className="text-white/40">FLOOR LIQUIDITY:</span>
            <span className="text-white font-semibold">+41% IDLE RECOVERED</span>
          </div>
          <div className="flex items-center gap-2 shrink-0 border-l border-white/10 pl-4">
            <span className="text-white/40">LOCK TIME:</span>
            <span className="text-[#D4F838] font-semibold">&lt; 48H SPEED</span>
          </div>
          <div className="flex items-center gap-2 shrink-0 border-l border-white/10 pl-4">
            <span className="text-white/40">CAPITAL DRAG:</span>
            <span className="text-[#23B272] font-semibold">-28.4% WASTE CUT</span>
          </div>
          <div className="flex items-center gap-2 shrink-0 border-l border-white/10 pl-4">
            <span className="text-white/40">OVERHEAD:</span>
            <span className="text-[#52E3A4] font-semibold">0KG HEAVY ASSETS</span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          02 — THE PROBLEM ENGINE (Primary Experience)
         ══════════════════════════════════════════════════════ */}
      <SectionDivider />
      <Section id="problem-engine" className="bg-[#050608]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
                ACT 02
              </span>
              <span className="text-xs sm:text-sm font-bold font-mono tracking-widest uppercase text-white/90">
                The Problem Engine // Map A Synq Path
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-3 uppercase">
              START WITH YOUR FRICTION.<br />
              <span className="text-[#B6F02A]">MAP A SYNQ PATH.</span>
            </h2>
            <p className="text-[#9299A8] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Designed problem-first. Select your specific filmmaking constraint and our diagnostic will assemble a tailored resolution pathway.
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="p-6 sm:p-10 rounded-3xl bg-[#090B10] border border-white/10 shadow-2xl">
              <ProblemEngine compact />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          03 — THE CATEGORY: CINEMA SYNCHRONIZATION
         ══════════════════════════════════════════════════════ */}
      <SectionDivider />
      <Section id="category" className="bg-[#050608]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
                ACT 03
              </span>
              <span className="text-xs sm:text-sm font-bold font-mono tracking-widest uppercase text-white/90">
                Category Definition // Cinema Synchronization
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 uppercase">
              CINEMA SYNCHRONIZATION.<br />
              <span className="text-[#86868b]">A NEW CATEGORY, NOT A SAAS TOOL.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#9299A8] leading-relaxed">
              We are defining a new discipline in the entertainment industry. Not another production house, agency, or software tool — an asset-light coordination layer.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* What DigiSynq is NOT card */}
            <motion.div
              {...fadeUp}
              className="col-span-12 lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-[#090B10] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold text-zinc-400">
                  <span className="w-2 h-2 rounded-full bg-zinc-500" />
                  <span>WHAT WE ARE NOT</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-6 uppercase tracking-tight">
                  Clear On What We Do Not Do.<br />
                  <span className="text-[#86868b]">Precision Matters.</span>
                </h3>

                <div className="space-y-3">
                  {[
                    { title: 'Not an agency', desc: 'We do not sell packaged creative services or represent talent rosters with commission markups.' },
                    { title: 'Not a production house', desc: 'We do not own soundstages, trucks, cameras, or carry payroll burdens.' },
                    { title: 'Not a marketplace', desc: 'We do not run an uncurated directory or open freelancer bidding board.' },
                    { title: 'Not a SaaS tool', desc: 'We solve real industry coordination bottlenecks, not sell monthly software seats.' },
                  ].map((item) => (
                    <div key={item.title} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-xs font-bold text-white/90 line-through decoration-white/40 mb-0.5 uppercase font-mono">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-[#9299A8]">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] text-xs font-mono text-[#86868b]">
                Avoiding industry confusion through rigorous category positioning.
              </div>
            </motion.div>

            {/* What DigiSynq IS card */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-12 lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-[#090B10] border border-[#B6F02A]/30 flex flex-col justify-between shadow-[0_0_40px_rgba(182,240,42,0.06)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#B6F02A]">
                    <span className="w-2 h-2 rounded-full bg-[#B6F02A]" />
                    <span>WHAT DIGISYNQ IS</span>
                  </div>
                  <span className="badge-lime text-[9px] px-2 py-0.5 rounded font-bold">CORE THESIS</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white mb-4 uppercase tracking-tight">
                  Asset-Light Cinema<br />
                  <span className="text-[#B6F02A]">Problem-Solving Engine.</span>
                </h3>

                <p className="text-sm text-[#9299A8] leading-relaxed mb-6">
                  A high-conviction coordination layer that maps what already exists, identifies missing connections, and synchronizes fragmented resources.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    { step: 'Identify', text: 'Locate underutilized floor capacity, missing craft heads, or unmonetized IP.' },
                    { step: 'Connect', text: 'Bridge filmmakers, craft guilds, volume stages, and theatrical circuits.' },
                    { step: 'Coordinate', text: 'Govern the production workflow with lean, accountable execution.' },
                    { step: 'Create value', text: 'Share in upside generated through eliminated waste and accelerated release.' },
                  ].map((s) => (
                    <div key={s.step} className="flex items-start gap-3 p-2 rounded-lg bg-[#050608]">
                      <span className="badge-lime text-[9px] px-2 py-0.5 rounded font-bold uppercase shrink-0 mt-0.5">{s.step}</span>
                      <span className="text-xs text-white/90 leading-relaxed">{s.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <Link to="/the-synq" className="btn-secondary text-xs px-4 py-2 flex items-center gap-1.5">
                  <span>Read The Codex</span>
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
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
                ACT 04
              </span>
              <span className="text-xs sm:text-sm font-bold font-mono tracking-widest uppercase text-white/90">
                Systemic Gaps // 6 Industry Disconnects
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight [letter-spacing:-0.025em] [text-wrap:balance]">
              Cinema has resources.<br />
              <span className="text-[#86868b] font-bold">They remain fragmented.</span>
            </h2>
            <p className="text-[1.0625rem] text-[#9299A8] leading-[1.72] [text-wrap:pretty]">
              Skills exist without projects. Studios sit empty between bookings. Films are completed without distribution clarity. The resources exist — the synchronization is missing.
            </p>
          </motion.div>

          {/* Cinematic Interactive Orbital Viewfinder Deck */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <CinematicSynqDeck />
          </motion.div>

          {/* 6 Gap Bento Cards */}
          <div className="bento-grid mt-12">
            {[
              {
                gap: 'Technician ↔ Project',
                sub: 'Skills exist, discovery fails',
                desc: 'Specialized technicians remain invisible outside small circles, while productions scramble to fill crucial technical seats.',
                pill: 'Verified skill profiles',
                color: 'bento-emerald',
                accent: 'text-[#23B272]',
              },
              {
                gap: 'Studio ↔ Production',
                sub: 'Idle floors vs peak congestion',
                desc: 'Soundstages sit dark during lulls, yet productions struggle to find shooting floors during sudden industry waves.',
                pill: 'Capacity balancing',
                color: 'bento-cyan',
                accent: 'text-[#52E3A4]',
              },
              {
                gap: 'Creator ↔ Distribution',
                sub: 'Content made without path to audience',
                desc: 'Independent creators invest capital without early theatrical or digital windowing strategy, losing negotiation power.',
                pill: 'Distribution modeling',
                color: 'bento-emerald',
                accent: 'text-[#23B272]',
              },
              {
                gap: 'Information ↔ Decision',
                sub: 'Opaque data, high risk',
                desc: 'Filmmakers make multi-million decisions based on intuition while critical audience and vendor performance data remains siloed.',
                pill: 'Decision synchronization',
                color: 'bento-cyan',
                accent: 'text-[#D4F838]',
              },
              {
                gap: 'Skills ↔ Opportunity',
                sub: 'Static careers in a shifting craft',
                desc: 'Technicians rarely have structured paths to learn emerging virtual production, volume setups, or generative workflows.',
                pill: 'Continuous development',
                color: 'bento-emerald',
                accent: 'text-[#23B272]',
              },
              {
                gap: 'Content ↔ Rights',
                sub: 'Trapped ancillary value',
                desc: 'Intellectual property is produced without capitalizing on cross-medium adaptation, merchandising, or digital licensing.',
                pill: 'Rights optimization',
                color: 'bento-cyan',
                accent: 'text-[#52E3A4]',
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
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-wider">
                      GAP // 0{i + 1}
                    </span>
                    <span className={`apple-pill text-[10px] ${item.accent}`}>{item.pill}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{item.gap}</h3>
                  <div className="text-xs font-medium text-white/60 mb-3">{item.sub}</div>
                  <p className="text-xs text-[#86868b] leading-relaxed">{item.desc}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#86868b]">
                  <span>Active synq pathway</span>
                  <Link to="/the-synq" className="text-white hover:text-[#23B272] flex items-center gap-1">
                    Explore
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/the-synq" className="apple-pill text-xs px-5 py-2.5 text-white hover:text-[#23B272]">
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
      <Section id="how-it-works-preview" className="bg-[#06130E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
                ACT 05
              </span>
              <span className="text-xs sm:text-sm font-bold font-mono tracking-widest uppercase text-white/90">
                Operating Architecture // 9-Stage Loop
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight [letter-spacing:-0.025em] [text-wrap:balance]">
              How the system works.<br />
              <span className="text-[#86868b] font-bold">Nine stages, one loop.</span>
            </h2>
            <p className="text-[1.0625rem] text-[#9299A8] max-w-lg mx-auto leading-[1.72]">
              Every synq engagement executes through a verified loop — from problem discovery to continuous feedback.
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="bento-card p-6 sm:p-8 border border-white/10">
              <SynqFlowDiagram compact />
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <Link to="/how-it-works" className="apple-pill text-xs px-5 py-2.5 text-white hover:text-[#23B272]">
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
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
                ACT 06
              </span>
              <span className="text-xs sm:text-sm font-bold font-mono tracking-widest uppercase text-white/90">
                Ecosystem Participants // 8-Node Map
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight [letter-spacing:-0.025em] [text-wrap:balance]">
              Who DigiSynq connects.<br />
              <span className="text-[#86868b] font-bold">Eight participant nodes.</span>
            </h2>
            <p className="text-[1.0625rem] text-[#9299A8] max-w-lg mx-auto leading-[1.72]">
              Select any participant node to understand their core friction and how our synchronization layer unlocks value.
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="bento-card p-6 sm:p-8 border border-white/10">
              <EcosystemMap size="full" />
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <Link to="/ecosystem" className="apple-pill text-xs px-5 py-2.5 text-white hover:text-[#23B272]">
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
      <Section id="asset-light" className="bg-[#06130E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <motion.div {...fadeUp} className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
                  ACT 07
                </span>
                <span className="text-xs sm:text-sm font-bold font-mono tracking-widest uppercase text-white/90">
                  Operating Philosophy // Coordination Layer
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight [letter-spacing:-0.025em] [text-wrap:balance]">
                Own the coordination.<br />
                <span className="text-[#86868b] font-bold">Not the assets.</span>
              </h2>
              <p className="text-[1.0625rem] text-[#9299A8] leading-[1.72] [text-wrap:pretty]">
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
                    <span className="apple-pill text-[11px] text-[#23B272] shrink-0 w-24 justify-center">
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
                <div className="col-span-12 sm:col-span-6 bento-card bento-cyan p-6 space-y-4 border-[#23B272]/30">
                  <div className="apple-eyebrow text-[#23B272]">DigiSynq asset-light</div>
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
                <span className="apple-eyebrow text-[#23B272] mb-3">Our long-term enduring assets</span>
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
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
                ACT 08
              </span>
              <span className="text-xs sm:text-sm font-bold font-mono tracking-widest uppercase text-white/90">
                Filmmaking System // Full-Cycle Stages
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight [letter-spacing:-0.025em] [text-wrap:balance]">
              Synchronization across every stage.<br />
              <span className="text-[#86868b] font-bold">From development to distribution.</span>
            </h2>
            <p className="text-[1.0625rem] text-[#9299A8] max-w-lg mx-auto leading-[1.72]">
              Filmmaking is not an isolated pipeline — decisions in distribution impact early packaging.
            </p>
          </motion.div>

          {/* Stage Bento Horizontal Scroll / Rail */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="overflow-x-auto pb-4">
            <div className="flex items-center gap-3 min-w-max mx-auto justify-center">
              {FILMMAKING_STAGES.map((stage, idx) => (
                <div
                  key={stage.id}
                  className="bento-card p-4 w-36 text-center space-y-2 hover:border-[#23B272]/40 transition-colors"
                >
                  <span className="text-[9px] font-mono font-bold text-[#D4F838] tracking-widest block">
                    STAGE // 0{idx + 1}
                  </span>
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
      <Section id="business-model" className="bg-[#06130E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
                ACT 09
              </span>
              <span className="text-xs sm:text-sm font-bold font-mono tracking-widest uppercase text-white/90">
                Revenue Architecture // 4 Stream Layers
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight [letter-spacing:-0.025em] [text-wrap:balance]">
              Multiple revenue layers.<br />
              <span className="text-[#86868b] font-bold">Honest status on every stream.</span>
            </h2>
            <p className="text-[1.0625rem] text-[#9299A8] max-w-xl mx-auto leading-[1.72]">
              We transparently distinguish what is live, in pilot, planned, or experimental.
            </p>
          </motion.div>

          <div className="bento-grid">
            {REVENUE_STREAMS.map((stream, i) => {
              const statusPillClass =
                stream.status === 'PILOT'
                  ? 'border-[#34C759]/30 text-[#34C759] bg-[#34C759]/05'
                  : stream.status === 'LIVE'
                  ? 'border-[#23B272]/30 text-[#23B272] bg-[#23B272]/05'
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
                  <div className="text-[11px] text-white/40 pt-3 border-t border-white/[0.05] flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-white/[0.06] border border-white/10 text-[#D4F838] tracking-wider">
                      STREAM // 0{i + 1}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">TIER VERIFIED</span>
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
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
                ACT 10
              </span>
              <span className="text-xs sm:text-sm font-bold font-mono tracking-widest uppercase text-white/90">
                Standards // 4 Operating Principles
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight [letter-spacing:-0.025em] [text-wrap:balance]">
              Operating principles.<br />
              <span className="text-[#86868b] font-bold">How we think and decide.</span>
            </h2>
            <p className="text-[1.0625rem] text-[#9299A8] max-w-md mx-auto leading-[1.72]">
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
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-wider mb-2.5 inline-block">
                    PRINCIPLE // 0{i + 1}
                  </span>
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
      <Section id="cta" className="bg-[#06130E]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="bento-card bento-cyan p-12 sm:p-16 text-center relative overflow-hidden">
            {/* Inner ambient orb */}
            <div className="ambient-orb w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(35, 178, 114,0.15)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
            <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-6 mx-auto">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
                ACT 11
              </span>
              <span className="text-xs sm:text-sm font-bold font-mono tracking-widest uppercase text-white/90">
                Deployment // Begin Synchronization
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight [letter-spacing:-0.03em] [text-wrap:balance]">
              Find the gap. Synq the system.<br />
              <span className="text-[#23B272]">Create value.</span>
            </h2>
            <p className="text-[1.125rem] text-[#9299A8] max-w-xl mx-auto leading-[1.72] mb-10 [text-wrap:pretty]">
              Whether you are facing production bottlenecks, underutilized studio facilities, or distribution friction — let us build your synq path.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/start"
                className="btn-primary"
                id="homepage-final-cta"
              >
                Start a synq
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="btn-secondary"
              >
                About DigiSynq
              </Link>
            </div>
            </div>
          </motion.div>
        </div>
      </Section>

    </main>
  );
}
