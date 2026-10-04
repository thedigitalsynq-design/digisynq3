import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Eye,
  Search,
  GitBranch,
  Zap,
  ShieldCheck,
  Cpu,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Sliders,
  ChevronRight,
  Layers,
} from 'lucide-react';
import {
  SYSTEM_RESOLUTION_ENGAGEMENT,
  CORE_OPERATING_CHAIN,
  PUBLIC_EXPLANATION_STAGES,
  BRAND,
} from '../data/blueprint_data';
import { TopographicBackground } from '../components/TopographicBackground';

const ICON_MAP: Record<string, React.ElementType> = {
  Eye,
  Search,
  GitBranch,
  Zap,
  ShieldCheck,
};

export function HowItWorksPage() {
  const [activePublicStage, setActivePublicStage] = useState(0);
  const [activeChainStep, setActiveChainStep] = useState(0);
  const [activeResolutionStepIdx, setActiveResolutionStepIdx] = useState(0);

  const selectedPublic = PUBLIC_EXPLANATION_STAGES[activePublicStage];
  const CurrentIcon = ICON_MAP[selectedPublic.iconName] || Zap;
  const currentChainNode = CORE_OPERATING_CHAIN[activeChainStep];
  const currentResolutionStep = SYSTEM_RESOLUTION_ENGAGEMENT.steps[activeResolutionStepIdx];

  return (
    <main className="bg-[#03040A] text-[#ECEEF5] selection:bg-white selection:text-black min-h-screen pt-36 pb-24 px-6 sm:px-8 max-w-6xl mx-auto relative overflow-hidden">
      <TopographicBackground className="opacity-20 pointer-events-none -z-10 fixed inset-0" />

      {/* ── Header ── */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300 font-mono mb-6">
          <span className="w-2 h-2 rounded-full bg-white" />
          <span className="text-white font-semibold">THE OPERATING ARCHITECTURE</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.03] mb-6">
          How DigiSynq Resolves a Production Breakdown.
          <span className="text-zinc-400 font-light block text-2xl sm:text-4xl mt-2">
            From variance detection to verified outcome.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-zinc-300 leading-relaxed font-light max-w-3xl mb-8">
          DigiSynq does not operate as a generic consultancy or a passive ticketing queue. It is a closed-loop system for understanding and resolving recurring coordination and root-cause problems across the entertainment ecosystem.
        </p>

        {/* First Customer Offer Quote */}
        <div className="p-6 rounded-2xl border border-white/15 bg-gradient-to-r from-[#090B14] via-[#06070B] to-[#090B14] backdrop-blur-xl">
          <div className="text-xs font-mono text-white mb-1 uppercase font-semibold">
            First Customer Strategy // The Guarantee
          </div>
          <div className="text-base sm:text-lg font-medium text-white">
            "{SYSTEM_RESOLUTION_ENGAGEMENT.tagline}"
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          PUBLIC EXPLANATION: CORE OPERATIONAL STAGES
         ══════════════════════════════════════════════════════ */}
      <section className="mb-24">
        <div className="text-xs font-mono text-white mb-2 uppercase">
          CORE PROTOCOL // THE SYNQ LOOP
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
          Core Stages a SYNQ Follows.
        </h2>
        <p className="text-zinc-400 text-sm max-w-2xl mb-8">
          Every DigiSynq intervention moves through systematic stages: continuous sensing, root-cause decomposition, blast radius mapping, structured SYNQ coordination, and closed-loop outcome verification.
        </p>

        {/* Stepper Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
          {PUBLIC_EXPLANATION_STAGES.map((stg, idx) => {
            const Icon = ICON_MAP[stg.iconName] || Zap;
            const isActive = activePublicStage === idx;
            return (
              <button
                key={stg.step}
                onClick={() => setActivePublicStage(idx)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isActive
                    ? 'bg-white text-black border-white/20 font-bold shadow-lg scale-[1.02]'
                    : 'bg-[#090B14] border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`inline-block w-2 h-2 rounded-full ${isActive ? 'bg-[#03040A]' : 'bg-white'}`} />
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#03040A]' : 'text-zinc-500'}`} />
                </div>
                <div className="text-sm font-bold font-mono tracking-tight">{stg.name}</div>
                <div className={`text-[11px] truncate mt-1 ${isActive ? 'text-[#03040A]/85' : 'text-zinc-500'}`}>
                  {stg.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep View */}
        <div className="p-8 sm:p-10 rounded-3xl border border-white/15 bg-gradient-to-br from-[#090B14] to-[#04060C] shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/[0.08]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.08] border border-white/20 flex items-center justify-center text-white">
                <CurrentIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs text-white font-semibold">STAGE // {selectedPublic.name.toUpperCase()}</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">{selectedPublic.name}: {selectedPublic.tagline}</h3>
              </div>
            </div>
            <div className="font-mono text-xs text-zinc-400 bg-white/[0.04] px-3.5 py-1.5 rounded-lg border border-white/[0.08]">
              Next Stage: <span className="text-white font-bold">{selectedPublic.next}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06]">
              <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2">INPUT SIGNAL</div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{selectedPublic.input}</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/15">
              <div className="text-[11px] font-mono text-white uppercase tracking-wider mb-2">SYSTEM ACTION</div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{selectedPublic.action}</p>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06]">
              <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2">VERIFIED OUTPUT</div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{selectedPublic.output}</p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
            <button
              onClick={() => setActivePublicStage((prev) => (prev > 0 ? prev - 1 : 4))}
              className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              ← Previous Stage
            </button>
            <button
              onClick={() => setActivePublicStage((prev) => (prev < 4 ? prev + 1 : 0))}
              className="text-xs font-mono text-white hover:text-white font-bold transition-colors"
            >
              Advance to Next Stage →
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CORE SYSTEM: CAUSAL CHAIN
         ══════════════════════════════════════════════════════ */}
      <section className="mb-24">
        <div className="text-xs font-mono text-white mb-2 uppercase">
          ZONE B // THE CAUSAL CHAIN
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
          Inside a Resolution Sprint.
        </h2>
        <p className="text-zinc-400 text-sm max-w-3xl mb-8 leading-relaxed">
          DigiSynq isolates root causes by peeling back the layers between surface alarms, enabling conditions, missing capabilities, and automated future prevention.
        </p>

        {/* Causal Chain Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-11 gap-1.5 mb-6 overflow-x-auto">
          {CORE_OPERATING_CHAIN.map((node, idx) => {
            const isSelected = activeChainStep === idx;
            return (
              <button
                key={node.step}
                onClick={() => setActiveChainStep(idx)}
                className={`p-2.5 rounded-xl border text-center transition-all min-w-[85px] ${
                  isSelected
                    ? 'bg-white text-black border-white/20 font-bold shadow-md scale-105'
                    : 'bg-[#090B14] border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                <div className="text-[10px] font-mono opacity-70">NODE</div>
                <div className="text-xs font-mono font-bold mt-1 truncate">{node.name}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Chain Stage Inspector */}
        <div className="p-8 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-white/[0.08] border border-white/20 text-white font-bold">
                {currentChainNode.category.toUpperCase()}
              </span>
              <h3 className="text-2xl font-black text-white">{currentChainNode.name}</h3>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              "{currentChainNode.interrogation}"
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06]">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2">SYSTEM DEFINITION</div>
              <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">{currentChainNode.definition}</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/15">
              <div className="text-[10px] font-mono text-white uppercase tracking-wider mb-2">OPERATIONAL BENCHMARK EXAMPLE</div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-mono">{currentChainNode.example}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          RESOLUTION ENGAGEMENT PROTOCOL
         ══════════════════════════════════════════════════════ */}
      <section className="mb-24">
        <div className="text-xs font-mono text-white mb-2 uppercase">
          ZONE C // RESOLUTION ENGAGEMENT PROTOCOL
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
          The Resolution Engagement.
        </h2>
        <p className="text-zinc-400 text-sm max-w-2xl mb-2">
          The complete standardized protocol from initial triage intake to mathematical scoring, SLA execution, and permanent system memory capture.
        </p>
        <p className="text-zinc-500 text-xs max-w-2xl mb-8 font-mono">
          Standardized resolution protocol operationalizing the SYNQ Loop into field deployment.
        </p>

        {/* Timeline Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2 mb-8">
          {SYSTEM_RESOLUTION_ENGAGEMENT.steps.map((st, sIdx) => (
            <button
              key={sIdx}
              onClick={() => setActiveResolutionStepIdx(sIdx)}
              className={`p-3 rounded-xl border text-center transition-all ${
                activeResolutionStepIdx === sIdx
                  ? 'bg-[#090B14] border-white/20 text-white shadow-lg scale-105 font-bold'
                  : 'bg-[#090B14] border-white/[0.06] text-zinc-400 hover:text-white'
              }`}
            >
              <div className="font-mono text-[10px] text-white mb-1">PHASE</div>
              <div className="text-[11px] truncate">{st.name}</div>
            </button>
          ))}
        </div>

        {/* Active Step Showcase */}
        <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.1] bg-[#090B14] shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-white font-semibold">
              RESOLUTION SPRINT // {currentResolutionStep.name.toUpperCase()}
            </span>
            <span className="font-mono text-xs text-zinc-500">DigiSynq Standard Operating Protocol</span>
          </div>

          <h3 className="text-3xl font-bold text-white mb-3">{currentResolutionStep.name}</h3>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8 max-w-3xl">
            {currentResolutionStep.desc}
          </p>

          <div className="pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-white/[0.06] bg-black/40">
              <div className="text-[11px] font-mono text-zinc-500 uppercase mb-1">Standard Outputs</div>
              <div className="text-xs text-zinc-200">
                Audited action protocols with designated owner, input, output, deadline, and verification gate.
              </div>
            </div>
            <div className="p-4 rounded-xl border border-white/[0.06] bg-black/40">
              <div className="text-[11px] font-mono text-zinc-500 uppercase mb-1">Downstream Telemetry</div>
              <div className="text-xs text-zinc-200">
                Continuous variance monitoring against planned target state to arrest subsequent cascade.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          04. CASE WALKTHROUGH: TALENT CRISIS RESOLUTION
         ══════════════════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════════════
          04. CASE WALKTHROUGH: TALENT CRISIS RESOLUTION BENTO GRID
         ══════════════════════════════════════════════════════ */}
      <section className="mb-24">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-white font-mono text-xs font-semibold mb-3">
            <span>BENTO CASE STUDY // LIVE RESOLUTION SPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Case Walkthrough: Lead Actor Schedule Rupture.
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed">
            How DigiSynq arrests an acute production crisis when a lead actor suddenly becomes unavailable for 6 consecutive shooting days.
          </p>
        </div>

        {/* Bento Grid (Pure Square Geometry) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Large 2x2 Square (The Incident & Cascade Blast Radius) */}
          <div className="sm:col-span-2 sm:row-span-2 aspect-square p-7 sm:p-9 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#06080D] via-[#090B14] to-[#04060C] shadow-xl flex flex-col justify-between overflow-hidden soft-card">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-amber-400 font-semibold uppercase flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  <span>UNMITIGATED UPSTREAM SHOCK</span>
                </span>
                <span className="text-[10px] font-mono text-zinc-500 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                  Shoot Day 14 of 40
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Lead actor unavailable for 6 consecutive days.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light mb-4">
                Without DigiSynq, an actor date shift forces an immediate stage lockout, triggering $18k/day standby penalties, VFX plate turnover delays, and an inevitable $450k cascade cost overrun.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-black/50 border border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">Projected Conventional Loss:</span>
                <span className="text-red-400 font-bold">$450,000 Overrun</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/15 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-200">DigiSynq Resolution:</span>
                <span className="text-white font-bold">Cascade Arrested in 4h</span>
              </div>
            </div>
          </div>

          {/* Card 2: 1x1 Square (Schedule Recovery) */}
          <div className="aspect-square p-6 rounded-3xl border border-white/15 bg-[#090B14] shadow-xl flex flex-col justify-between overflow-hidden soft-card">
            <div>
              <div className="font-mono text-xs text-white mb-2 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <span>SCHEDULE RECOVERY</span>
              </div>
              <div className="text-4xl font-black text-white tracking-tight mb-2">
                5.5 Days
              </div>
              <p className="text-xs text-zinc-400 font-mono leading-relaxed">
                Critical path buffer days restored through exterior scene resequencing.
              </p>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-white">
              Zero stage lease forfeiture
            </div>
          </div>

          {/* Card 3: 1x1 Square (Cost Avoidance) */}
          <div className="aspect-square p-6 rounded-3xl border border-white/[0.08] bg-[#090B14] shadow-xl flex flex-col justify-between overflow-hidden soft-card">
            <div>
              <div className="font-mono text-xs text-white mb-2 font-semibold flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-white" />
                <span>COST AVOIDANCE</span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
                $84,000+
              </div>
              <p className="text-xs text-zinc-400 font-mono leading-relaxed">
                Overtime fines and equipment standby penalties completely prevented.
              </p>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-white">
              Rest covenants protected
            </div>
          </div>

          {/* Card 4: 1x1 Square (Sensing & Mapping) */}
          <div className="aspect-square p-6 rounded-3xl border border-white/[0.08] bg-[#090B14] shadow-lg flex flex-col justify-between overflow-hidden soft-card">
            <div>
              <div className="font-mono text-xs text-white mb-2 font-semibold flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5" />
                <span>ROOT DISCOVERY // SENSING</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                Isolate Root Cause &amp; Map Blast Radius
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Raw call-sheet telemetry exposed the variance. Mapped dependencies across stage bookings and VFX plates.
              </p>
            </div>
            <div className="pt-2 border-t border-white/[0.06] text-[10px] font-mono text-zinc-500 truncate">
              Root: Sequential dependency
            </div>
          </div>

          {/* Card 5: 1x1 Square (Orchestration & Verification) */}
          <div className="aspect-square p-6 rounded-3xl border border-white/[0.08] bg-[#090B14] shadow-lg flex flex-col justify-between overflow-hidden soft-card">
            <div>
              <div className="font-mono text-xs text-zinc-200 mb-2 font-semibold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span>INTERVENTION // EXECUTE</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                Simulation, Dark-Floor Match &amp; Memory
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Matched dark-date stage floor for 2nd unit plates. Reconciled guild rest covenants. Inoculated future slates.
              </p>
            </div>
            <div className="pt-2 border-t border-white/[0.06] text-[10px] font-mono text-zinc-300 truncate">
              100% On-Time Delivery
            </div>
          </div>
        </div>
      </section>

      {/* ── Final Call to Action ── */}
      <div className="text-center pt-8 border-t border-white/[0.08]">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Have an active production crisis or bottleneck?
        </h2>
        <p className="text-sm text-zinc-400 mb-8 max-w-xl mx-auto">
          Submit your project constraints for a rapid triage and root-cause decomposition.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/diagnose"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black hover:bg-zinc-200 font-bold text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            <span>Diagnose a Problem</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
          <Link
            to="/start"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/14 hover:border-white/25 bg-white/[0.03] text-white font-medium text-sm transition-all"
          >
            <span>Start a SYNQ Case</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
