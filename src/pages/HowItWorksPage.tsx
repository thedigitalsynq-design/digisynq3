import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, 
  Cpu, Zap, Compass, Shield, Activity, Radio, Play, Film
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SynqFlowDiagram } from '../components/SynqFlowDiagram';
import { TopographicBackground } from '../components/TopographicBackground';
import { playClickSound, playHoverSound, playNodeBlip, playSuccessChime } from '../utils/audio';

const PHASES = [
  {
    step: '01',
    name: 'IDENTIFY',
    tag: 'Friction Telemetry',
    title: 'Diagnosing The Structural Gap',
    lead: 'Before moving a single asset, DigiSynq scans for the hidden bottleneck holding the film back.',
    deliverable: 'Friction Diagnostic & Feasibility Dossier',
    timeframe: 'Day 01 - 05',
    actions: [
      'Audit production budget vs. actual technical execution gaps',
      'Detect idle regional soundstages and volume dark-dates',
      'Identify unattached key craft guilds (Sound, Cinematography, Color)',
      'Calculate box office cannibalization risks against upcoming theatrical slate',
    ],
    metric: '100% Blindspot Visibility',
  },
  {
    step: '02',
    name: 'CONNECT',
    tag: 'Node Assembly',
    title: 'Fractional & Turnkey Matching',
    lead: 'We coordinate the missing pieces without taking on permanent overhead or agency markups.',
    deliverable: 'Operational Synq Architecture & Multi-Party Covenant',
    timeframe: 'Day 06 - 14',
    actions: [
      'Bridge indie productions to fractional studio floor slots at 40% below rate card',
      'Pair vetted guild craft heads with clear milestone-based compensation',
      'Structure completion debt and territorial presale guarantees',
      'Coordinate DCI digital cinema packages with regional exhibitor circuits',
    ],
    metric: '3.4x Faster Assembly',
  },
  {
    step: '03',
    name: 'SYNQ',
    tag: 'Milestone Governance',
    title: 'Real-Time Orchestration & Flow',
    lead: 'DigiSynq acts as the living nervous system during principal photography and post-finishing.',
    deliverable: 'Continuous Production Telemetry & Dailies Pipeline',
    timeframe: 'Principal Photography → Final Mix',
    actions: [
      'Camera-to-cloud dailies telemetry monitoring and automated ingest',
      'Milestone-locked capital tranche releases upon verified scene wrap',
      'Dynamic rescheduling when weather, location, or talent shifts occur',
      'Continuous pre-demand audience tracking to adjust marketing velocity',
    ],
    metric: 'Zero Production Stoppage',
  },
  {
    step: '04',
    name: 'CAPTURE',
    tag: 'Value Realization',
    title: 'Asset-Light Liquidity & Release',
    lead: 'Turning synchronized coordination into verifiable box office return and long-tail library value.',
    deliverable: 'Theatrical Yield Audit & Royalty Distribution Ledger',
    timeframe: 'Theatrical Window → Streaming Syndication',
    actions: [
      'Programmatic cinema screen allocation across high-occupancy theaters',
      'Rapid monetization of international territorial rights and ancillary IP',
      'Direct revenue attribution to all coordinated participants',
      'Catalog legacy preservation and asset re-licensing protocols',
    ],
    metric: '2.4x Box Office Yield',
  },
];

export function HowItWorksPage() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const activePhase = PHASES[activePhaseIndex];

  return (
    <main className="bg-[#050608] text-[#ECEEF5] pt-24 pb-20 relative overflow-hidden selection:bg-[#B6F02A]/20 selection:text-[#B6F02A]">
      
      {/* Topographic Isoline Contour Layer */}
      <TopographicBackground intensity="medium" />

      {/* ── 01. Header Slate (Elevate Labs Poster Style) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative z-10">
        


        {/* Eyebrow: Horizontal Lime Accent Bar */}
        <div className="flex items-center gap-3.5 mb-5">
          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
            ACT 01
          </span>
          <span className="text-xs sm:text-sm font-bold font-mono tracking-widest uppercase text-white/90">
            Execution Loop // Operational Protocol
          </span>
        </div>

        {/* High-Impact Headline & Editorial Block (No Overlap) */}
        <div className="max-w-5xl mb-12">
          <h1 className="text-[clamp(2.75rem,6.5vw,5.25rem)] font-black tracking-tight leading-[0.92] uppercase select-none text-white [letter-spacing:-0.03em] mb-6">
            THE 4-PHASE<br />
            <span className="text-[#B6F02A] drop-shadow-[0_0_35px_rgba(182,240,42,0.25)]">COORDINATION</span><br />
            PIPELINE.
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pt-2">
            {/* Vertical Lime Bar Quote */}
            <div className="border-l-3 sm:border-l-4 border-[#B6F02A] pl-5 sm:pl-6 py-1 max-w-2xl">
              <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed">
                We do not sell generic consultancy. We execute a disciplined four-phase coordination protocol engineered to eliminate bottlenecks, preserve balance sheets, and accelerate theatrical return.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a href="#pipeline-console" className="btn-primary text-xs px-5 py-3 shadow-[0_0_20px_rgba(182,240,42,0.35)]">
                Launch Console <ArrowRight size={14} />
              </a>
              <Link to="/start" className="btn-secondary text-xs px-4 py-3">
                Start a Synq
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. The 4-Phase Pipeline Console ──────────────── */}
      <section id="pipeline-console" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24 relative z-10">
        <div className="p-6 sm:p-10 rounded-3xl bg-[#090B10] border border-[#23B272]/20 shadow-2xl relative overflow-hidden">
          
          <div className="flex items-center gap-3.5 mb-6">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
              ACT 02
            </span>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-white/90">
              4-Phase Pipeline Console // Deep Dive
            </span>
          </div>

          {/* Phase Scrubber Stepper */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 pb-6 border-b border-white/[0.08]">
            {PHASES.map((p, i) => {
              const isActive = i === activePhaseIndex;
              return (
                <button
                  key={p.step}
                  type="button"
                  onClick={() => { setActivePhaseIndex(i); playNodeBlip(i); }}
                  className={`p-4 sm:p-5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between h-32 ${
                    isActive
                      ? 'bg-[#0D281E] border-[#B6F02A] shadow-[0_0_24px_rgba(182,240,42,0.25)]'
                      : 'bg-black/50 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${isActive ? 'bg-[#B6F02A] text-[#050608]' : 'bg-white/[0.06] text-[#D4F838]'}`}>
                      PHASE // {p.step}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#B6F02A] animate-pulse' : 'bg-white/20'}`} />
                  </div>
                  <div>
                    <div className="text-base font-black text-white tracking-tight uppercase">{p.name}</div>
                    <div className="text-[10px] font-mono text-[#52E3A4]/80">{p.tag}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Phase Deep Dive Console */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Phase Overview & Actions */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="badge-lime text-[10px] font-mono px-2 py-0.5 rounded font-bold">
                    ACTIVE PROTOCOL // PHASE {activePhase.step}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">TIMEFRAME: {activePhase.timeframe}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                  {activePhase.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 mt-2 leading-relaxed">
                  {activePhase.lead}
                </p>
              </div>

              {/* Execution Checklist */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#050608] border border-white/[0.08] space-y-4">
                <div className="text-xs font-mono text-[#52E3A4] uppercase tracking-wider font-bold">
                  // Operational Protocols Executed
                </div>
                <div className="space-y-3">
                  {activePhase.actions.map((act, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-white/[0.06] text-[#D4F838] shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <span className="leading-relaxed">{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Key Deliverable & Metric HUD */}
            <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-[#0D281E]/70 border border-[#23B272]/30 space-y-6">
              <div>
                <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">
                  CORE DELIVERABLE
                </span>
                <div className="text-base font-bold text-white leading-snug">
                  {activePhase.deliverable}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">
                  PERFORMANCE IMPACT
                </span>
                <div className="text-2xl sm:text-3xl font-mono font-black text-[#B6F02A]">
                  {activePhase.metric}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <Link
                  to="/start"
                  className="w-full btn-primary text-xs py-3 justify-center shadow-[0_0_20px_rgba(182,240,42,0.3)]"
                >
                  Apply Phase {activePhase.step} to Project
                  <ArrowRight size={14} />
                </Link>
                <div className="text-center text-[10px] font-mono text-zinc-400">
                  Guaranteed 0% physical asset debt
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 03. SynqFlow Lifecycle Diagram ────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#090B10] border border-white/[0.08]">
          <div className="mb-8">
            <div className="flex items-center gap-3.5 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
                ACT 03
              </span>
              <span className="text-xs font-mono text-[#52E3A4] uppercase tracking-wider font-bold">
                Visual Architecture // End-to-End Mesh
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">
              The End-to-End Coordination Mesh
            </h2>
          </div>
          <SynqFlowDiagram />
        </div>
      </section>

    </main>
  );
}
