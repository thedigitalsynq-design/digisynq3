import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, Compass, Cpu, Zap, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const PHASES = [
  {
    step: '01',
    name: 'Diagnose',
    tag: 'Requirement Analysis',
    title: 'Understanding project requirements and constraints',
    lead: 'Before moving a single asset, DigiSynq audits the creative vision, department dependencies, and operational constraints holding the project back.',
    deliverable: 'Project Requirement & Constraint Dossier',
    timeframe: 'Initial Assessment',
    actions: [
      'Audit production scope, department dependencies, and timeline requirements',
      'Identify capacity gaps across available soundstages, volumes, and specialized equipment',
      'Survey availability of required key creative talent and technical department heads',
      'Assess release or delivery timeline against current market and platform windows',
    ],
    metric: 'Complete visibility into operational constraints',
  },
  {
    step: '02',
    name: 'Connect',
    tag: 'Capacity Matching',
    title: 'Identifying relevant talent, infrastructure, and capacity',
    lead: 'We identify and match available resources across partner facilities, vetted craft talent, and commercial capital without broker markups or equipment debt.',
    deliverable: 'Multi-Party Coordination Covenant',
    timeframe: 'Assembly Phase',
    actions: [
      'Match projects to available stage slots and volume dates across partner facilities',
      'Connect verified creative and technical talent with transparent milestone terms',
      'Coordinate finishing capital, production debt, and completion guarantees',
      'Align technical packaging requirements with target distribution and audience platforms',
    ],
    metric: 'Rapid assembly from verified network capacity',
  },
  {
    step: '03',
    name: 'Orchestrate',
    tag: 'Workflow Governance',
    title: 'Coordinating people, facilities, workflows, and milestones',
    lead: 'DigiSynq provides neutral oversight during active production and post-finishing, keeping dependencies synchronized and stakeholders aligned.',
    deliverable: 'Milestone Telemetry & Workflow Protocol',
    timeframe: 'Production → Final Mix',
    actions: [
      'Standardize dailies and asset turnovers with continuous ingest telemetry',
      'Coordinate milestone-tied funding releases upon verified deliverable approvals',
      'Manage dynamic rescheduling when location, weather, or timeline shifts occur',
      'Maintain live communication across producers, facilities, and post-production units',
    ],
    metric: 'Neutral milestone oversight and workflow alignment',
  },
  {
    step: '04',
    name: 'Realize',
    tag: 'Output & Delivery',
    title: 'Turning distributed resources into an executable outcome',
    lead: 'Converting coordinated capacity into on-schedule delivery masters, targeted release windows, and long-tail library value.',
    deliverable: 'Delivery Master Audit & Release Ledger',
    timeframe: 'Final Delivery → Distribution',
    actions: [
      'Programmatic release and delivery coordination across theatrical, streaming, and digital channels',
      'Structured territorial delivery across international, broadcast, and ancillary windows',
      'Transparent revenue and compensation attribution to participating network partners',
      'Long-term asset archiving and catalog licensing coordination',
    ],
    metric: 'On-schedule delivery and defensible audience reach',
  },
];

const ASSET_LIGHT_BENEFITS = [
  {
    title: 'Lower Fixed Requirements',
    desc: 'No heavy real estate or equipment depreciation on our books, keeping capital intensity low.',
  },
  {
    title: 'Greater Flexibility',
    desc: 'Access the ideal stage, camera package, or crew for each project rather than whatever sits in an owned warehouse.',
  },
  {
    title: 'Distributed Capacity',
    desc: 'Leverage available floor time and talent across a broad regional network of facilities and guilds.',
  },
  {
    title: 'Better Resource Utilization',
    desc: 'Activate unused stage days and unbooked technician windows, turning idle time into productive output.',
  },
];

export function HowItWorksPage() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const activePhase = PHASES[activePhaseIndex];

  return (
    <main className="bg-[#07080b] text-[#ECEEF5] selection:bg-white/20 selection:text-white min-h-screen">

      {/* ── 01. Hero Section ── */}
      <section className="pt-40 sm:pt-48 pb-20 sm:pb-28 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-zinc-300 mb-8 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono text-zinc-400">PROTOCOL</span>
            <span className="text-zinc-600">//</span>
            <span className="text-white font-medium">Four-Phase Coordination Engine</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] [letter-spacing:-0.035em] mb-8">
            How DigiSynq orchestrates<br />
            <span className="text-zinc-400 font-light">entertainment production.</span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-3xl mb-12">
            DigiSynq routes demand to existing industry capacity rather than requiring fixed physical asset ownership. We execute a disciplined four-stage protocol engineered to ingest project constraints, match pre-verified partner stages and guild talent, and synchronize milestones through to final audience release.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/start"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#06080d] hover:bg-zinc-200 font-medium text-sm tracking-wide transition-all duration-200 active:scale-95 shadow-sm"
            >
              <span>Initiate a Synq</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#protocol"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] text-zinc-300 font-medium text-sm transition-all duration-200"
            >
              <span>Inspect 4 Phases</span>
            </a>
            <Link
              to="/runbook"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-emerald-500/25 hover:border-emerald-500/40 bg-emerald-500/[0.03] text-emerald-300 font-medium text-sm transition-all duration-200"
            >
              <span>Business Runbook</span>
            </Link>
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
                  <div className="text-xl font-bold text-emerald-400 tracking-tight">
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
                    Zero physical infrastructure debt
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── 03. Benefits of the Asset-Light Model ── */}
      <section className="py-24 sm:py-32 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
              Model Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Why coordinate existing capacity?
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              An asset-light coordination layer offers distinct structural advantages over heavy physical ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ASSET_LIGHT_BENEFITS.map((b, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.015] border border-white/[0.06] hover:border-white/15 transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 04. Execution Covenants & Runbook Reference ── */}
      <section className="py-24 sm:py-32 border-t border-white/[0.06] bg-[#050608]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-[#090b10] border border-white/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block">
                Standardized Governance
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Detailed execution protocols & commercial playbooks
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                For producers, studio operators, and financiers requiring complete operational specifications, inspect our institutional runbook covering 6 commercial revenue models, multi-party covenants, and phase-by-phase delivery milestones.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <Link
                to="/runbook"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-medium text-xs hover:bg-zinc-200 transition-all shadow-lg"
              >
                <span>Read the business runbook</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/start"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] text-zinc-300 font-medium text-xs transition-all"
              >
                <span>Start project intake</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05. Call to Action ── */}
      <section className="py-24 sm:py-32 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Ready to synchronize your next project?
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed max-w-xl mx-auto mb-10">
            Have an entertainment project, resource requirement, or capacity opportunity? Start a Synq and tell us what needs to be connected.
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
