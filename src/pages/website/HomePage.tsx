import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ChevronDown, Play, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProblemEngine } from '../../components/website/ProblemEngine';
import { EcosystemMap } from '../../components/website/EcosystemMap';
import { SynqFlowDiagram } from '../../components/website/SynqFlowDiagram';
import { OPERATING_PRINCIPLES, FILMMAKING_STAGES, REVENUE_STREAMS, WORKSHOP_PROGRAMS } from '../../data/website/core_data';

// ── Animation helpers ─────────────────────────────────────
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7 },
};

// ── Section wrapper ───────────────────────────────────────
function Section({
  id, children, className = ''
}: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`section-padding relative ${className}`}>
      {children}
    </section>
  );
}

// ── Divider ───────────────────────────────────────────────
function SectionDivider() {
  return <div className="border-t border-white/[0.04]" />;
}

// ── Fragment/Gap visual animation ────────────────────────
const FRAGMENTS = [
  { label: 'Technician', delay: 0 },
  { label: 'Studio', delay: 0.3 },
  { label: 'Producer', delay: 0.6 },
  { label: 'Creator', delay: 0.9 },
  { label: 'Distributor', delay: 1.2 },
  { label: 'Audience', delay: 1.5 },
];

function FragmentVisual() {
  const [synced, setSynced] = useState(false);

  return (
    <div className="relative w-full max-w-2xl mx-auto my-10">
      <div className="flex items-center justify-center flex-wrap gap-3">
        {FRAGMENTS.map((f, i) => (
          <motion.div
            key={f.label}
            animate={synced
              ? { opacity: 1, scale: 1, x: 0, y: 0 }
              : { opacity: 0.6, scale: 0.9, x: (i % 2 === 0 ? -1 : 1) * (10 + i * 4), y: (i % 3 === 0 ? -1 : 1) * (8 + i * 3) }
            }
            transition={{ duration: 0.6, delay: synced ? i * 0.05 : 0 }}
            className={`px-4 py-2 rounded-xl border text-xs font-mono font-bold transition-all ${
              synced
                ? 'border-[#5CE1E6]/40 bg-[#5CE1E6]/08 text-[#5CE1E6]'
                : 'border-white/10 bg-white/[0.04] text-white/50'
            }`}
          >
            {f.label}
          </motion.div>
        ))}
      </div>

      {synced && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="font-mono text-xs text-[#5CE1E6]/50 tracking-[0.2em]">SYNCHRONIZED</div>
        </motion.div>
      )}

      <div className="flex justify-center mt-6">
        <button
          onClick={() => setSynced(!synced)}
          className={`btn-ghost text-[10px] ${synced ? 'text-[#5CE1E6]' : ''}`}
          aria-label={synced ? 'Show fragmented state' : 'Show synchronized state'}
        >
          {synced ? '← Show Fragmented' : 'SYNQ the system →'}
        </button>
      </div>
    </div>
  );
}

// ── The main HomePage component ──────────────────────────
export function HomePage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [showScrollCue, setShowScrollCue] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    const onScroll = () => { if (window.scrollY > 80) setShowScrollCue(false); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { clearTimeout(t); window.removeEventListener('scroll', onScroll); };
  }, []);

  return (
    <main className="bg-[#05060D] text-[#ECEEF5]">

      {/* ══════════════════════════════════════════════════════
          01 — HERO
         ══════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16"
        aria-labelledby="hero-headline"
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(92,225,230,0.05)_0%,rgba(59,130,246,0.03)_40%,transparent_70%)]" />
        {/* Grid pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

          {/* Category label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#5CE1E6]/20 bg-[#5CE1E6]/05 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] animate-pulse" />
              <span className="label-mono text-[10px] text-[#5CE1E6]">A NEW CATEGORY IN FILMMAKING</span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1
              id="hero-headline"
              className="headline-display text-[clamp(2.8rem,9vw,7rem)] text-white leading-[0.93] mb-6"
            >
              Cinema has a lot<br />
              <span className="text-white/50">of moving parts.</span>
            </h1>
            <p className="text-[clamp(1.5rem,4vw,2.5rem)] font-denton font-black text-[#5CE1E6] mb-8 leading-tight">
              We SYNQ them.
            </p>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            An asset-light cinema problem-solving company building a synchronization layer
            across the filmmaking ecosystem. We find gaps. We connect what fits. We coordinate the system.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
          >
            <Link to="/start" className="btn-primary" id="hero-start-synq-cta">
              START A SYNQ
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/the-synq" className="btn-secondary">
              Understand the idea
            </Link>
            <Link to="/how-it-works" className="btn-ghost">
              How it works
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          {/* Brand identifiers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={heroVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex items-center justify-center gap-2 flex-wrap"
          >
            {['Asset-Light', 'Cinema-Native', 'Problem-First', 'Synchronization-Driven', 'Ecosystem-Based'].map((tag, i) => (
              <React.Fragment key={tag}>
                <span className="label-mono text-[10px] text-white/25">{tag}</span>
                {i < 4 && <span className="text-white/10">·</span>}
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        {showScrollCue && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce text-white/25">
            <ChevronDown className="w-4 h-4" />
          </div>
        )}
      </section>

      {/* ══════════════════════════════════════════════════════
          02 — THE PROBLEM ENGINE (Primary Experience)
         ══════════════════════════════════════════════════════ */}
      <SectionDivider />
      <Section id="problem-engine" className="bg-[#03040A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="section-label">THE PROBLEM ENGINE</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-denton font-black text-white mb-4">
              Start with your problem.
            </h2>
            <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto">
              The website is designed problem-first. Select your challenge and we'll map a SYNQ path.
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }}>
            <div className="synq-card p-6 sm:p-10 border border-white/[0.06]">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeUp}>
              <div className="section-label">BUILDING A NEW CATEGORY</div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-denton font-black text-white mb-6 leading-[0.95]">
                Cinema<br />
                <span className="text-white/40">Synchronization.</span>
              </h2>
              <p className="text-base text-white/60 leading-relaxed mb-6">
                DIGISYNQ is not an agency. Not a production company. Not a marketplace. Not a talent directory. Not a consultancy. Not a SaaS product.
              </p>
              <p className="text-base text-white/80 leading-relaxed mb-6">
                DIGISYNQ is an <strong className="text-white">asset-light cinema problem-solving company</strong> building a new category: <strong className="text-[#5CE1E6]">Cinema Synchronization</strong>.
              </p>
              <p className="text-sm text-white/50 leading-relaxed">
                A system for identifying, connecting, and coordinating fragmented resources across filmmaking — people, technicians, skills, studios, equipment, content, media, creators, brands, distribution, rights, data, and audiences.
              </p>
              <div className="mt-8 flex gap-3">
                <Link to="/the-synq" className="btn-secondary text-sm">
                  Understand the SYNQ idea
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.2 }}>
              {/* Category pillars */}
              <div className="grid grid-cols-1 gap-3">
                {[
                  { label: 'NOT', value: 'Another agency or production house' },
                  { label: 'NOT', value: 'Another marketplace or directory' },
                  { label: 'NOT', value: 'Another SaaS platform or tech product' },
                  { label: 'NOT', value: 'Another consultancy or advisory firm' },
                ].map((item) => (
                  <div key={item.value} className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                    <span className="label-mono text-[9px] text-[#EF4444]/60 w-8 flex-shrink-0">{item.label}</span>
                    <span className="text-sm text-white/40 line-through">{item.value}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 px-4 py-4 rounded-xl bg-[#5CE1E6]/06 border border-[#5CE1E6]/20 mt-2">
                  <span className="label-mono text-[9px] text-[#5CE1E6] w-8 flex-shrink-0">YES</span>
                  <span className="text-sm text-white font-semibold">An asset-light cinema problem-solving company</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          04 — THE PROBLEM: CINEMA'S FRAGMENTATION
         ══════════════════════════════════════════════════════ */}
      <SectionDivider />
      <Section id="fragmentation" className="bg-[#03040A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
            <div className="section-label">THE CORE PROBLEM</div>
            <h2 className="text-3xl sm:text-5xl font-denton font-black text-white mb-6">
              Cinema has resources.<br />
              <span className="text-white/40">They remain fragmented.</span>
            </h2>
            <p className="text-sm sm:text-base text-white/55 leading-relaxed">
              A technician may exist. A project may need the technician. A studio may have unused capacity. Another project may need that capacity. The resources are there — the connections are missing.
            </p>
          </motion.div>

          {/* Fragment visual */}
          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }}>
            <FragmentVisual />
          </motion.div>

          {/* Gap cards */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12"
          >
            {[
              { gap: 'Technician ↔ Project', what: 'Skills exist but projects cannot find them. Projects need skills but cannot discover them.' },
              { gap: 'Studio ↔ Production', what: 'Studio capacity sits idle. Productions scramble for space at peak times.' },
              { gap: 'Creator ↔ Distribution', what: 'Content is made. Audiences exist. But the distribution pathway is unclear.' },
              { gap: 'Information ↔ Decision', what: 'Data exists across the system. Decision-makers work on incomplete information.' },
              { gap: 'Skills ↔ Opportunity', what: 'Technicians develop skills in isolation. Cross-skill opportunities are invisible.' },
              { gap: 'Content ↔ Rights', what: 'Films are made. Rights structures are unclear. Monetization is missed.' },
            ].map((item) => (
              <div key={item.gap} className="synq-card p-5 space-y-3">
                <div className="label-mono text-[10px] text-[#5CE1E6]">GAP IDENTIFIED</div>
                <h3 className="text-sm font-denton font-black text-white">{item.gap}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{item.what}</p>
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="text-center mt-10">
            <Link to="/the-synq" className="btn-ghost">
              See the full fragmentation map
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          05 — THE SYNQ OPERATING LOOP
         ══════════════════════════════════════════════════════ */}
      <SectionDivider />
      <Section id="how-it-works-preview" className="bg-[#05060D]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="section-label">THE SYNQ OPERATING LOOP</div>
            <h2 className="text-3xl sm:text-4xl font-denton font-black text-white mb-4">
              How the system works.
            </h2>
            <p className="text-white/50 text-sm max-w-lg mx-auto">
              Every SYNQ follows the same loop — from problem identification to re-synchronization. Click any stage to learn more.
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }}>
            <SynqFlowDiagram compact />
          </motion.div>

          <div className="text-center mt-8">
            <Link to="/how-it-works" className="btn-secondary">
              Full operating model
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          06 — ECOSYSTEM MAP
         ══════════════════════════════════════════════════════ */}
      <SectionDivider />
      <Section id="ecosystem-preview" className="bg-[#03040A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="section-label">THE ECOSYSTEM</div>
            <h2 className="text-3xl sm:text-4xl font-denton font-black text-white mb-4">
              Who DIGISYNQ connects.
            </h2>
            <p className="text-white/50 text-sm max-w-lg mx-auto">
              Click any participant node to see what they need and how DigiSynq connects them.
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }}>
            <EcosystemMap size="full" />
          </motion.div>

          <div className="text-center mt-10">
            <Link to="/ecosystem" className="btn-secondary">
              Explore full ecosystem
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          07 — ASSET-LIGHT MODEL
         ══════════════════════════════════════════════════════ */}
      <SectionDivider />
      <Section id="asset-light" className="bg-[#05060D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <div className="section-label">ASSET-LIGHT OPERATING MODEL</div>
              <h2 className="text-3xl sm:text-4xl font-denton font-black text-white mb-6 leading-tight">
                Own the coordination.<br />
                <span className="text-white/40">Not the assets.</span>
              </h2>
              <p className="text-base text-white/60 leading-relaxed mb-6">
                DIGISYNQ does not attempt to own every studio, every camera, every technician, every media outlet, or every distribution channel. Instead:
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { action: 'MAP', what: 'what already exists in the ecosystem' },
                  { action: 'FIND', what: 'what is missing or underutilized' },
                  { action: 'CONNECT', what: 'what fits together' },
                  { action: 'COORDINATE', what: 'the system of participants' },
                  { action: 'CREATE', what: 'value through better outcomes' },
                ].map((step) => (
                  <div key={step.action} className="flex items-start gap-4">
                    <span className="label-mono text-[10px] text-[#5CE1E6] w-16 pt-0.5 flex-shrink-0">{step.action}</span>
                    <span className="text-sm text-white/70">{step.what}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/40 italic">
                Over time, DigiSynq's real assets become: relationships, data, knowledge, workflows, reputation, IP, and trust.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }}>
              <div className="grid grid-cols-1 gap-3">
                {/* Asset-heavy vs asset-light comparison */}
                <div className="label-mono text-white/25 mb-2">TRADITIONAL vs DIGISYNQ</div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="synq-card p-5 space-y-3 opacity-50">
                    <div className="label-mono text-[9px] text-white/40">TRADITIONAL ASSET-HEAVY</div>
                    {['BUY', 'OWN', 'MAINTAIN', 'OPERATE', 'REPLACE'].map(w => (
                      <div key={w} className="label-mono text-[10px] text-white/30">{w}</div>
                    ))}
                  </div>
                  <div className="synq-card synq-card-active p-5 space-y-3">
                    <div className="label-mono text-[9px] text-[#5CE1E6]">DIGISYNQ ASSET-LIGHT</div>
                    {['DISCOVER', 'PARTNER', 'CONNECT', 'COORDINATE', 'SHARE VALUE'].map(w => (
                      <div key={w} className="label-mono text-[10px] text-white/80">{w}</div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 synq-card p-5 border border-[#5CE1E6]/15">
                  <div className="label-mono text-[9px] text-[#5CE1E6] mb-2">LONG-TERM STRATEGIC ASSETS</div>
                  <div className="flex flex-wrap gap-2">
                    {['Data', 'Knowledge', 'IP', 'Technology', 'Network', 'Brand', 'Trust', 'Process'].map(a => (
                      <span key={a} className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-white/[0.05] border border-white/10 text-white/60">{a}</span>
                    ))}
                  </div>
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
      <Section id="filmmaking-system" className="bg-[#03040A] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="section-label">CINEMA AS A SYSTEM</div>
            <h2 className="text-3xl sm:text-4xl font-denton font-black text-white mb-4">
              DIGISYNQ syncs across every stage.
            </h2>
            <p className="text-white/50 text-sm max-w-lg mx-auto">
              Filmmaking is not a linear pipeline. It's a network where dependencies run backwards and forwards.
              Synchronization is needed everywhere.
            </p>
          </motion.div>

          {/* Stage rail */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative overflow-x-auto pb-4"
          >
            <div className="flex items-center gap-0 min-w-max mx-auto justify-center flex-wrap sm:flex-nowrap">
              {FILMMAKING_STAGES.map((stage, i) => (
                <React.Fragment key={stage.id}>
                  <div className="flex flex-col items-center gap-2 px-4 py-5 min-w-[100px] sm:min-w-[120px]">
                    <div className="w-12 h-12 rounded-xl bg-[#0E1120] border border-white/[0.07] flex items-center justify-center text-xl">
                      {stage.icon}
                    </div>
                    <div className="label-mono text-[9px] text-white/40 text-center leading-tight">{stage.label}</div>
                    <div className="text-[10px] text-white/25 text-center leading-tight hidden sm:block">{stage.description}</div>
                  </div>
                  {i < FILMMAKING_STAGES.length - 1 && (
                    <div className="flex-shrink-0 w-6 flex items-center justify-center">
                      <div className="w-4 h-px bg-[#5CE1E6]/20" />
                      <div className="w-0 h-0 border-t-[3px] border-b-[3px] border-l-[4px] border-t-transparent border-b-transparent border-l-[#5CE1E6]/20" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.25 }} className="mt-8 text-center synq-card p-5 max-w-2xl mx-auto border border-white/[0.05]">
            <p className="text-sm text-white/50 leading-relaxed">
              Cinema is a network. Dependencies move backwards and forwards across stages. A distribution decision in stage 9 affects decisions in stage 2. That is why synchronization matters.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          09 — THE TECHNICIAN ECONOMY
         ══════════════════════════════════════════════════════ */}
      <SectionDivider />
      <Section id="technician" className="bg-[#05060D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <div className="section-label">TECHNICIAN ECONOMY</div>
              <h2 className="text-3xl sm:text-4xl font-denton font-black text-white mb-6 leading-tight">
                One of the first<br />
                <span className="text-[#E8B84B]">practical applications.</span>
              </h2>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                Technical film professionals — camera operators, editors, sound recordists, lighting technicians, colorists, VFX artists — are fragmented across the ecosystem. Their skills are often invisible. Their opportunities are inconsistent. Their careers are siloed.
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                DIGISYNQ maps, profiles, develops, and connects technicians with the projects that need their specific skills — while helping them develop new ones.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }}>
              <div className="space-y-2">
                {[
                  { stage: 'DISCOVER', desc: 'Map existing technician skills across the ecosystem' },
                  { stage: 'PROFILE', desc: 'Build verified skill profiles' },
                  { stage: 'ASSESS', desc: 'Understand current level and development needs' },
                  { stage: 'DEVELOP', desc: 'Workshops and cross-skill programs' },
                  { stage: 'MATCH', desc: 'Connect with projects that need specific skills' },
                  { stage: 'DEPLOY', desc: 'Coordinate the engagement' },
                  { stage: 'LEARN', desc: 'Gather feedback, improve future matching' },
                  { stage: 'RECONNECT', desc: 'Maintain ongoing relationship through the career' },
                ].map((item, i) => (
                  <div key={item.stage} className="flex items-center gap-3 p-3 rounded-xl border border-white/[0.05] hover:border-[#E8B84B]/20 hover:bg-[#E8B84B]/02 transition-all group">
                    <span className="label-mono text-[9px] text-[#E8B84B] w-18 flex-shrink-0">{String(i + 1).padStart(2, '0')} {item.stage}</span>
                    <span className="text-xs text-white/50 group-hover:text-white/70 transition-colors">{item.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          10 — WORKSHOPS
         ══════════════════════════════════════════════════════ */}
      <SectionDivider />
      <Section id="workshops-preview" className="bg-[#03040A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="section-label">WORKSHOPS</div>
            <h2 className="text-3xl sm:text-4xl font-denton font-black text-white mb-4">
              Learning connects to opportunity.
            </h2>
            <p className="text-white/50 text-sm max-w-xl mx-auto">
              Workshops are part of the ecosystem engine — not the core product. They create a bridge between education and real industry requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WORKSHOP_PROGRAMS.slice(0, 6).map((w, i) => (
              <motion.div
                key={w.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="synq-card p-5 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="label-mono text-[9px] text-white/30">{w.category}</span>
                  <span className="label-mono text-[8px] text-[#5CE1E6]">{w.format}</span>
                </div>
                <h3 className="text-sm font-denton font-black text-white">{w.title}</h3>
                <p className="text-xs text-white/45 leading-relaxed">{w.outcome}</p>
                <div className="flex gap-1.5 pt-1 border-t border-white/[0.05]">
                  {w.flow.map((step, si) => (
                    <React.Fragment key={step}>
                      <span className="text-[9px] font-mono text-white/30">{step}</span>
                      {si < w.flow.length - 1 && <span className="text-white/10 text-[9px]">→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/workshops" className="btn-secondary">
              Explore all workshops
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          11 — BUSINESS MODEL (Honest, with status labels)
         ══════════════════════════════════════════════════════ */}
      <SectionDivider />
      <Section id="business-model" className="bg-[#05060D]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="section-label">BUSINESS MODEL</div>
            <h2 className="text-3xl sm:text-4xl font-denton font-black text-white mb-4">
              Multiple revenue layers. Honest status.
            </h2>
            <p className="text-white/50 text-sm max-w-xl mx-auto">
              We clearly distinguish what is live, what is in pilot, what is planned, and what is experimental. We do not present ideas as current revenue.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {REVENUE_STREAMS.map((stream, i) => (
              <motion.div
                key={stream.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="synq-card p-5 space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-denton font-black text-white">{stream.name}</h3>
                  <span className={`tag tag-${stream.status.toLowerCase()} flex-shrink-0`}>
                    {stream.status}
                  </span>
                </div>
                <p className="text-xs text-white/50 leading-relaxed">{stream.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          12 — THE FLYWHEEL
         ══════════════════════════════════════════════════════ */}
      <SectionDivider />
      <Section id="flywheel" className="bg-[#03040A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp} className="mb-12">
            <div className="section-label">THE INTENDED FLYWHEEL</div>
            <h2 className="text-3xl sm:text-4xl font-denton font-black text-white mb-4">
              The network gets more valuable<br />
              <span className="text-white/40">as the system learns.</span>
            </h2>
            <p className="text-xs text-white/30 font-mono italic">
              This is the intended model. Not a current claim. The flywheel builds as real problems get solved.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-3xl mx-auto"
          >
            {[
              'More Problems', 'More Solutions', 'More Participants', 'More Data',
              'Better Matching', 'Better Coordination', 'More Trust', 'More Projects',
            ].map((node, i) => (
              <div
                key={node}
                className="px-4 py-3 rounded-xl border border-white/[0.07] bg-[#0E1120]/80 text-xs font-mono text-white/60 flex items-center justify-center text-center leading-tight"
              >
                {node}
                {i < 7 && (
                  <span className="sr-only"> → </span>
                )}
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#5CE1E6]/20 bg-[#5CE1E6]/05">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] animate-pulse" />
              <span className="label-mono text-[10px] text-[#5CE1E6]">↺ THE LOOP CONTINUES</span>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          13 — OPERATING PRINCIPLES
         ══════════════════════════════════════════════════════ */}
      <SectionDivider />
      <Section id="principles" className="bg-[#05060D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="section-label">HOW WE OPERATE</div>
            <h2 className="text-3xl sm:text-4xl font-denton font-black text-white mb-4">
              Operating principles.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {OPERATING_PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="synq-card p-5 space-y-3"
              >
                <span className="label-mono text-[9px] text-white/25">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="label-mono text-[10px] text-[#5CE1E6] leading-relaxed">{p.label}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          14 — FINAL CTA
         ══════════════════════════════════════════════════════ */}
      <SectionDivider />
      <Section id="cta" className="bg-[#03040A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp} className="space-y-6">
            <div className="section-label">START HERE</div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-denton font-black text-white leading-[0.95]">
              Find the gap.<br />
              <span className="text-[#5CE1E6]">SYNQ the system.</span><br />
              <span className="text-white/40">Create value.</span>
            </h2>
            <p className="text-base text-white/50 max-w-2xl mx-auto leading-relaxed">
              If you have a problem that needs better coordination, connection, or clarity — let's map it together. Every SYNQ starts with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/start" className="btn-primary" id="homepage-final-cta">
                START A SYNQ
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/about" className="btn-secondary">
                About DIGISYNQ
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

    </main>
  );
}
