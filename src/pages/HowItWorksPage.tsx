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
    <main className="bg-[#03040A] text-[#ECEEF5] selection:bg-[#23B272] selection:text-[#03040A] min-h-screen pt-36 pb-24 px-6 sm:px-8 max-w-6xl mx-auto relative overflow-hidden">
      <TopographicBackground className="opacity-20 pointer-events-none -z-10 fixed inset-0" />

      {/* ── Header ── */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300 font-mono mb-6">
          <span className="w-2 h-2 rounded-full bg-[#52E3A4]" />
          <span>SECTIONS 43, 44 &amp; 45</span>
          <span className="text-zinc-600">//</span>
          <span className="text-[#52E3A4] font-semibold">THE OPERATING ARCHITECTURE</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.03] mb-6">
          From Upstream Shock to Verified Harmony.
          <span className="text-zinc-400 font-light block text-2xl sm:text-4xl mt-2">
            How DigiSynq Orchestrates Resolution.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-zinc-300 leading-relaxed font-light max-w-3xl mb-8">
          DigiSynq does not operate as a generic consultancy or a passive ticketing queue. It is a closed-loop system for understanding and resolving recurring coordination and root-cause problems across the entertainment ecosystem.
        </p>

        {/* First Customer Offer Quote */}
        <div className="p-6 rounded-2xl border border-[#23B272]/30 bg-gradient-to-r from-[#06130E] via-[#090B14] to-[#06130E] backdrop-blur-xl">
          <div className="text-xs font-mono text-[#52E3A4] mb-1 uppercase font-semibold">
            First Customer Strategy // The Guarantee
          </div>
          <div className="text-base sm:text-lg font-medium text-white italic">
            "{SYSTEM_RESOLUTION_ENGAGEMENT.tagline}"
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          01. PUBLIC EXPLANATION: 5 CORE OPERATIONAL STAGES
         ══════════════════════════════════════════════════════ */}
      <section className="mb-24">
        <div className="text-xs font-mono text-[#52E3A4] mb-2 uppercase">
          01 // PUBLIC EXPLANATION FRAMEWORK
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
          Five Stages of System Control.
        </h2>
        <p className="text-zinc-400 text-sm max-w-2xl mb-8">
          The public operational loop: continuous sensing, root-cause decomposition, blast radius mapping, structured SYNQ intervention, and closed-loop control.
        </p>

        {/* 5-Stage Stepper Ribbon */}
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
                    ? 'bg-[#23B272] text-[#03040A] border-[#52E3A4] font-bold shadow-lg scale-[1.02]'
                    : 'bg-[#090B14] border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs">{stg.step}</span>
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
        <div className="p-8 sm:p-10 rounded-3xl border border-[#23B272]/30 bg-gradient-to-br from-[#090B14] to-[#04060C] shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/[0.08]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#23B272]/20 border border-[#23B272]/40 flex items-center justify-center text-[#52E3A4]">
                <CurrentIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs text-[#52E3A4] font-semibold">STAGE {selectedPublic.step} OF 05</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">{selectedPublic.name}: {selectedPublic.tagline}</h3>
              </div>
            </div>
            <div className="font-mono text-xs text-zinc-400 bg-white/[0.04] px-3.5 py-1.5 rounded-lg border border-white/[0.08]">
              Next Stage: <span className="text-[#52E3A4] font-bold">{selectedPublic.next}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06]">
              <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2">INPUT SIGNAL</div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{selectedPublic.input}</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#16543D]/25 border border-[#23B272]/30">
              <div className="text-[11px] font-mono text-[#52E3A4] uppercase tracking-wider mb-2">SYSTEM ACTION</div>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">{selectedPublic.action}</p>
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
              className="text-xs font-mono text-[#52E3A4] hover:text-white font-bold transition-colors"
            >
              Advance to Next Stage →
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          02. CORE SYSTEM: 11-STAGE CAUSAL CHAIN
         ══════════════════════════════════════════════════════ */}
      <section className="mb-24">
        <div className="text-xs font-mono text-[#52E3A4] mb-2 uppercase">
          02 // THE COMPLETE CAUSAL TAXONOMY
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
          The 11-Stage Causal Chain.
        </h2>
        <p className="text-zinc-400 text-sm max-w-3xl mb-8 leading-relaxed">
          DigiSynq isolates root causes by peeling back the layers between surface alarms, enabling conditions, missing capabilities, and automated future prevention.
        </p>

        {/* 11-Stage Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-11 gap-1.5 mb-6 overflow-x-auto">
          {CORE_OPERATING_CHAIN.map((node, idx) => {
            const isSelected = activeChainStep === idx;
            return (
              <button
                key={node.step}
                onClick={() => setActiveChainStep(idx)}
                className={`p-2.5 rounded-xl border text-center transition-all min-w-[85px] ${
                  isSelected
                    ? 'bg-[#23B272] text-[#03040A] border-[#52E3A4] font-bold shadow-md scale-105'
                    : 'bg-[#090B14] border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                <div className="text-[10px] font-mono opacity-70">{node.step}</div>
                <div className="text-xs font-mono font-bold mt-1 truncate">{node.name}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Chain Stage Inspector */}
        <div className="p-8 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#23B272]/20 border border-[#23B272]/40 text-[#52E3A4] font-bold">
                NODE {currentChainNode.step} // {currentChainNode.category}
              </span>
              <h3 className="text-2xl font-black text-white">{currentChainNode.name}</h3>
            </div>
            <span className="text-xs font-mono text-zinc-400 italic">
              "{currentChainNode.interrogation}"
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06]">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2">SYSTEM DEFINITION</div>
              <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">{currentChainNode.definition}</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#16543D]/20 border border-[#23B272]/30">
              <div className="text-[10px] font-mono text-[#52E3A4] uppercase tracking-wider mb-2">OPERATIONAL BENCHMARK EXAMPLE</div>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-mono">{currentChainNode.example}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          03. THE 10-STEP RESOLUTION ENGAGEMENT PROTOCOL
         ══════════════════════════════════════════════════════ */}
      <section className="mb-24">
        <div className="text-xs font-mono text-[#52E3A4] mb-2 uppercase">
          03 // SECTION 44 RESOLUTION RUNBOOK
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
          The 10-Step Resolution Engagement.
        </h2>
        <p className="text-zinc-400 text-sm max-w-2xl mb-8">
          The complete standardized protocol from initial triage intake to mathematical scoring, SLA execution, and permanent system memory capture.
        </p>

        {/* 10-Step Timeline Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2 mb-8">
          {SYSTEM_RESOLUTION_ENGAGEMENT.steps.map((st, sIdx) => (
            <button
              key={sIdx}
              onClick={() => setActiveResolutionStepIdx(sIdx)}
              className={`p-3 rounded-xl border text-center transition-all ${
                activeResolutionStepIdx === sIdx
                  ? 'bg-[#16543D] border-[#52E3A4] text-white shadow-lg scale-105 font-bold'
                  : 'bg-[#090B14] border-white/[0.06] text-zinc-400 hover:text-white'
              }`}
            >
              <div className="font-mono text-[10px] text-[#52E3A4] mb-1">{st.num}</div>
              <div className="text-[11px] truncate">{st.name}</div>
            </button>
          ))}
        </div>

        {/* Active Step Showcase */}
        <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.1] bg-[#090B14] shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-[#52E3A4] font-semibold">
              STEP {currentResolutionStep.num} OF 10 // RESOLUTION SPRINT
            </span>
            <span className="font-mono text-xs text-zinc-500">DIGISYNQ Standard Operating Procedure</span>
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
      <section className="mb-24 p-8 sm:p-10 rounded-3xl border border-white/[0.1] bg-gradient-to-br from-[#06080D] via-[#090B14] to-[#06130E]">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16543D]/50 border border-[#23B272]/30 text-[#52E3A4] font-mono text-xs font-semibold mb-3">
            SECTION 45 CASE WALKTHROUGH // SIMULATED SCENARIO
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Case Breakdown: Lead Actor Schedule Rupture
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed">
            How DigiSynq arrests an acute production crisis where a lead actor becomes unavailable for 6 consecutive days on an active shoot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          {[
            { phase: '01. OBSERVE', desc: 'Captures talent schedule, shooting plan, stage bookings, crew commitments, and gear holds.' },
            { phase: '02. DETECT', desc: 'Gap = 6 Days between contracted shooting calendar and actual talent availability.' },
            { phase: '03. MAP', desc: 'Actor → Scenes → Location → Crew → Equipment → Post schedule → Platform Release Window.' },
            { phase: '04. DIAGNOSE', desc: 'Root cause is schedule dependency concentration across sequential linear scenes.' },
            { phase: '05. SIMULATE', desc: 'Evaluates options: wait, reschedule, reorder scenes, substitute stage, compress post-production.' },
            { phase: '06. CONNECT', desc: 'Identifies available alternative soundstage floor and 2nd unit camera package.' },
            { phase: '07. COORDINATE', desc: 'Reconciles affected stakeholders: Director, 1st AD, Cinematographer, Stage Manager, Producer.' },
            { phase: '08. EXECUTE', desc: 'Deploys revised call sheets and shooting order with zero turnaround hour violations.' },
            { phase: '09. VERIFY', desc: 'Measures: 5.5 days saved, $84,000 overtime penalty avoided, release window 100% protected.' },
            { phase: '10. PREVENT', desc: 'Stores case in system memory; future slates with high talent concentration receive early risk alerts.' },
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-white/[0.06] bg-black/40">
              <div className="text-[#52E3A4] font-bold mb-1">{item.phase}</div>
              <div className="text-zinc-300 leading-snug">{item.desc}</div>
            </div>
          ))}
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#23B272] text-[#03040A] hover:bg-[#52E3A4] font-bold text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(35,178,114,0.35)]"
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
