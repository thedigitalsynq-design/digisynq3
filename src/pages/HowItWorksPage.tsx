import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, Compass, Cpu, Zap, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const PHASES = [
  {
    step: '01',
    name: 'Diagnose',
    tag: 'Friction Telemetry',
    title: 'Auditing the structural bottleneck',
    lead: 'Before moving a single asset, DigiSynq scans for the hidden inefficiencies and dark-time holding the production back.',
    deliverable: 'Friction Diagnostic & Feasibility Dossier',
    timeframe: 'Days 01 – 05',
    actions: [
      'Audit production budget against actual technical execution gaps',
      'Detect idle regional soundstages and LED volume dark dates',
      'Identify unattached key craft guilds (Sound, Cinematography, Color)',
      'Calculate theatrical release clustering and screen cannibalization risks',
    ],
    metric: '100% Blindspot visibility',
  },
  {
    step: '02',
    name: 'Connect',
    tag: 'Node Assembly',
    title: 'Fractional matching without broker markups',
    lead: 'We coordinate the missing pieces without taking on permanent overhead, physical equipment debt, or middleman fees.',
    deliverable: 'Operational Synq Architecture & Multi-Party Covenant',
    timeframe: 'Days 06 – 14',
    actions: [
      'Bridge independent productions to fractional studio floor slots at 40% below rate card',
      'Pair vetted guild craft heads with clear milestone-based compensation',
      'Structure completion debt and territorial presale guarantees',
      'Coordinate DCI digital cinema packages with regional exhibitor circuits',
    ],
    metric: '3.4x Faster assembly',
  },
  {
    step: '03',
    name: 'Orchestrate',
    tag: 'Milestone Governance',
    title: 'Real-time pipeline synchronization',
    lead: 'DigiSynq acts as a neutral coordination layer during principal photography and post-finishing.',
    deliverable: 'Continuous Production Telemetry & Dailies Pipeline',
    timeframe: 'Principal Photography → Final Mix',
    actions: [
      'Camera-to-cloud dailies telemetry monitoring and automated ingest',
      'Milestone-locked capital tranche releases upon verified scene wrap',
      'Dynamic rescheduling when weather, location, or talent shifts occur',
      'Continuous pre-demand audience tracking to adjust marketing velocity',
    ],
    metric: 'Zero production stoppage',
  },
  {
    step: '04',
    name: 'Realize',
    tag: 'Value Capture',
    title: 'Theatrical yield and asset-light release',
    lead: 'Turning synchronized coordination into verifiable box office return and long-tail library value.',
    deliverable: 'Theatrical Yield Audit & Royalty Distribution Ledger',
    timeframe: 'Theatrical Window → Streaming Syndication',
    actions: [
      'Programmatic cinema screen allocation across high-occupancy theaters',
      'Rapid monetization of international territorial rights and ancillary IP',
      'Direct revenue attribution to all coordinated participants',
      'Catalog legacy preservation and asset re-licensing protocols',
    ],
    metric: '2.4x Box office yield',
  },
];

const OPERATIONAL_LOOP = [
  { step: '01', name: 'Problem', desc: 'Identify the exact structural bottleneck holding the project back.' },
  { step: '02', name: 'Map', desc: 'Survey existing available capacity across stages, craft guilds, and screens.' },
  { step: '03', name: 'Gap', desc: 'Pinpoint precisely where capital, time, or floor space is being lost.' },
  { step: '04', name: 'Synq', desc: 'Connect the missing nodes with verified covenants and transparent terms.' },
  { step: '05', name: 'Coordinate', desc: 'Maintain live alignment across all departments through pre-prod and shoot.' },
  { step: '06', name: 'Execute', desc: 'Support on-schedule production delivery without micromanagement.' },
  { step: '07', name: 'Measure', desc: 'Audit actual delivery times, budget variances, and seat occupancy.' },
  { step: '08', name: 'Learn', desc: 'Feed performance metrics back into future stage and crew matching.' },
];

export function HowItWorksPage() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const activePhase = PHASES[activePhaseIndex];

  return (
    <main className="bg-[#07080b] text-[#ECEEF5] selection:bg-white/20 selection:text-white">

      {/* ── 01. Hero Section ── */}
      <section className="pt-40 sm:pt-48 pb-20 sm:pb-28 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-zinc-400 mb-8 tracking-wide">
            <span>Operational Protocol</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] [letter-spacing:-0.035em] mb-8">
            How DigiSynq coordinates cinema.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 font-normal leading-relaxed max-w-3xl mb-12">
            We do not sell generic advice. We execute a disciplined four-phase coordination protocol engineered to eliminate operational bottlenecks, preserve balance sheets, and accelerate theatrical return.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/start"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              Start a synq
              <ArrowRight size={15} />
            </Link>
            <a
              href="#protocol"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-sm text-zinc-300 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore the 4 phases
            </a>
          </div>
        </div>
      </section>

      {/* ── 02. The 4-Phase Protocol Workbench ── */}
      <section id="protocol" className="py-24 sm:py-32 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
              Execution Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              The four coordination phases
            </h2>
          </div>

          {/* Phase Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {PHASES.map((phase, idx) => {
              const isActive = idx === activePhaseIndex;
              return (
                <button
                  key={phase.step}
                  type="button"
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white/[0.05] border-white/30 text-white shadow-sm'
                      : 'bg-white/[0.015] border-white/[0.06] text-zinc-400 hover:text-white hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-zinc-500">
                      Phase {phase.step}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    )}
                  </div>
                  <div className="text-base font-semibold text-white">
                    {phase.name}
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    {phase.tag}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Phase Detail Console */}
          <div className="rounded-3xl bg-[#090b10] border border-white/[0.06] p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Scope & Action List */}
              <div className="lg:col-span-8 space-y-8">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 mb-3">
                    <span className="text-emerald-400 font-medium">Phase {activePhase.step}</span>
                    <span>•</span>
                    <span>{activePhase.timeframe}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                    {activePhase.title}
                  </h3>
                  <p className="text-base text-zinc-300 leading-relaxed">
                    {activePhase.lead}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                    Operational actions executed:
                  </span>
                  <div className="space-y-3">
                    {activePhase.actions.map((act, i) => (
                      <div key={i} className="flex items-start gap-3.5">
                        <div className="w-5 h-5 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                          <Check size={12} />
                        </div>
                        <span className="text-sm text-zinc-300 leading-relaxed">
                          {act}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Deliverable Card */}
              <div className="lg:col-span-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] p-6 sm:p-8 space-y-6">
                <div>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-2">
                    Primary Deliverable
                  </span>
                  <div className="text-base font-medium text-white leading-snug">
                    {activePhase.deliverable}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/[0.06]">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                    Systemic Impact
                  </span>
                  <div className="text-2xl font-bold text-emerald-400 tracking-tight">
                    {activePhase.metric}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/[0.06] space-y-3">
                  <Link
                    to="/start"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-black font-medium text-xs hover:bg-zinc-200 transition-all"
                  >
                    Apply Phase {activePhase.step} to project
                    <ArrowRight size={13} />
                  </Link>
                  <p className="text-center text-[11px] text-zinc-500">
                    Zero physical asset debt guarantee
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── 03. The Operational Feedback Loop ── */}
      <section className="py-24 sm:py-32 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
              Continuous Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              The continuous coordination loop
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              Cinema is not a linear waterfall. It is an evolving network where problems repeat if context is lost. DigiSynq operates in a continuous learning cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {OPERATIONAL_LOOP.map((loop) => (
              <div
                key={loop.step}
                className="p-6 rounded-2xl bg-white/[0.015] border border-white/[0.06] hover:border-white/15 transition-all flex flex-col justify-between h-44"
              >
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>Step {loop.step}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-white mb-1.5">
                    {loop.name}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {loop.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 04. Call to Action ── */}
      <section className="py-24 sm:py-32 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Ready to synchronize your next production?
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed max-w-xl mx-auto mb-10">
            Tell us about your project, current stage, and where friction is occurring. We will map a resolution within 48 hours.
          </p>
          <Link
            to="/start"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            Start a synq
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  );
}
