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
  Layers,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Compass,
  Sliders,
  ChevronRight,
  Play,
  RotateCcw,
} from 'lucide-react';
import {
  BRAND,
  CORE_OPERATING_CHAIN,
  PUBLIC_EXPLANATION_STAGES,
  BUSINESS_ARCHITECTURE_LAYERS,
} from '../data/blueprint_data';
import { TopographicBackground } from '../components/TopographicBackground';

const ICON_MAP: Record<string, React.ElementType> = {
  Eye,
  Search,
  GitBranch,
  Zap,
  ShieldCheck,
};

const CAPACITY_GAPS = [
  {
    id: 'talent',
    title: 'Creative Talent & Guild Specialists',
    category: 'Human Layer',
    symptom: 'Productions assemble key department heads through closed personal phone trees. Qualified cinematographers, sound designers, and virtual production leads sit on unbooked lulls, while projects experience multi-week assembly delays.',
    intervention: 'DigiSynq indexes verified availability calendars and craft specializations across guilds, matching projects directly to available talent with standardized rate parity and turnkey contracts.',
    metric: '< 48h Direct Roster Locking Target',
  },
  {
    id: 'spatial',
    title: 'Soundstages & Virtual Volumes',
    category: 'Physical Infrastructure',
    symptom: 'Soundstages, LED virtual production volumes, and scoring stages sit dark between multi-month tenant leases, while incoming productions face rigid long-term booking mandates.',
    intervention: 'DigiSynq routes active productions into dark days and turnaround slots at partner facilities, unlocking incremental revenue for stage operators and dynamic access for productions.',
    metric: '100% Incremental Dark-Floor Yield',
  },
  {
    id: 'capital',
    title: 'Finishing & Milestone Capital',
    category: 'Capital Flow',
    symptom: 'Post-production stalls during VFX, final color grading, and Dolby Atmos mixing because traditional credit tranches are decoupled from technical deliverables.',
    intervention: 'DigiSynq structures finishing capital disbursements strictly against verified delivery milestones and cloud dailies telemetry, protecting investors from speculative budget drift.',
    metric: 'Milestone-Anchored Delivery Governance',
  },
  {
    id: 'distribution',
    title: 'Release Windows & Platform Specs',
    category: 'Distribution Layer',
    symptom: 'Titles clash blindly against tentpole dates or suffer platform QC master rejections 48 hours before streaming debut due to uncoordinated delivery specs.',
    intervention: 'DigiSynq coordinates automated IMF spec verification, conform reviews, and audience density screening clusters to protect release momentum.',
    metric: '100% Automated Platform QC Compliance',
  },
];

export function TheSynqPage() {
  const [activePublicStage, setActivePublicStage] = useState(0);
  const [activeCoreChainIdx, setActiveCoreChainIdx] = useState(0);
  const [activeGapIdx, setActiveGapIdx] = useState(0);

  const selectedPublic = PUBLIC_EXPLANATION_STAGES[activePublicStage];
  const CurrentIcon = ICON_MAP[selectedPublic.iconName] || Zap;
  const currentCore = CORE_OPERATING_CHAIN[activeCoreChainIdx];
  const currentGap = CAPACITY_GAPS[activeGapIdx];

  return (
    <main className="bg-[#03040A] text-[#ECEEF5] selection:bg-white selection:text-black min-h-screen relative overflow-hidden">
      <TopographicBackground className="opacity-25 pointer-events-none -z-10 fixed inset-0" />

      {/* ── 01. Header Hero ── */}
      <section className="pt-36 sm:pt-48 pb-16 sm:pb-24 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] text-xs text-zinc-300 font-mono mb-8">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white font-semibold">THE SYNQ OPERATING MODEL</span>
            <span className="text-zinc-600">//</span>
            <span>ENTERTAINMENT SYNCHRONIZATION INFRASTRUCTURE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.03] mb-6">
            A <span className="text-white">SYNQ</span> is how DigiSynq resolves a production breakdown.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-3xl font-light mb-8">
            A <strong>SYNQ</strong> is a structured intervention that connects a specific production breakdown to the people, resources, capabilities, and decisions required to resolve it — precisely, measurably, and without collateral friction.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/diagnose"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black hover:bg-zinc-200 font-bold text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] active:scale-95"
            >
              <span>Diagnose a Problem</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
            <Link
              to="/runbook"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/14 hover:border-white/25 bg-white/[0.03] text-white font-medium text-sm transition-all"
            >
              <span>See the Resolution Runbook</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── BENTO GRID: The Anatomy of a SYNQ (Pure Square Geometry) ── */}
      <section className="pb-20 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Bento Card 1: Large 2x2 Square */}
          <div className="sm:col-span-2 sm:row-span-2 aspect-square p-7 sm:p-9 rounded-3xl border border-white/15 bg-gradient-to-br from-[#090B14] via-[#06070B] to-[#04060C] shadow-2xl relative overflow-hidden flex flex-col justify-between group soft-card">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.05] rounded-full blur-3xl pointer-events-none group-hover:bg-white/[0.08] transition-all duration-700" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-white font-mono text-[11px] font-semibold mb-3">
                <Zap className="w-3.5 h-3.5" />
                <span>CORE INTERVENTION ARCHITECTURE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
                The 4-Part Structure of Every SYNQ.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light mb-4">
                A SYNQ is not a meeting or software dashboard. It is a time-bounded operational sprint governed by single-point decision authority, calibrated SLAs, and neutral multi-party covenants.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-white/[0.08] font-mono text-xs">
              <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                <span className="text-white block text-[10px] font-bold mb-0.5">TARGET PROBLEM</span>
                <span className="text-zinc-300 text-[11px] line-clamp-2">Decomposed root cause with calculated blast radius</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                <span className="text-white block text-[10px] font-bold mb-0.5">MATCHED PARTNER</span>
                <span className="text-zinc-300 text-[11px] line-clamp-2">Vetted dark-floor slots &amp; certified burst capability</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                <span className="text-white block text-[10px] font-bold mb-0.5">CLEAN-ROOM COVENANT</span>
                <span className="text-zinc-300 text-[11px] line-clamp-2">Neutral IP protection &amp; standardized rate parity</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                <span className="text-white block text-[10px] font-bold mb-0.5">DETERMINISTIC SLA</span>
                <span className="text-zinc-300 text-[11px] line-clamp-2">Audited recovery gates with verified completion</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: 1x1 Square (Schedule Recovery) */}
          <div className="aspect-square p-6 rounded-3xl border border-white/[0.08] bg-[#090B14] shadow-xl flex flex-col justify-between overflow-hidden soft-card">
            <div>
              <div className="font-mono text-xs text-white mb-2 flex items-center gap-1.5 font-semibold">
                <Activity className="w-3.5 h-3.5" />
                <span>BENCHMARK IMPACT</span>
              </div>
              <div className="text-4xl font-black text-white tracking-tight mb-2">
                5.5 Days
              </div>
              <p className="text-xs text-zinc-400 font-mono leading-relaxed">
                Average critical path schedule buffer recovered per intervention sprint.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] font-mono text-[10px] text-zinc-500">
              *Modelled simulation across 40-day shooting schedules
            </div>
          </div>

          {/* Bento Card 3: 1x1 Square (Asset Integrity) */}
          <div className="aspect-square p-6 rounded-3xl border border-white/[0.08] bg-[#090B14] shadow-xl flex flex-col justify-between overflow-hidden soft-card">
            <div>
              <div className="font-mono text-xs text-white mb-2 flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ASSET INTEGRITY</span>
              </div>
              <div className="text-2xl font-bold text-white mb-2 leading-tight">
                Zero Fixed Asset Debt
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                DigiSynq owns no physical stages or cameras. We operate purely as an unconflicted coordination layer.
              </p>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-zinc-300 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% Unconflicted</span>
            </div>
          </div>

          {/* Bento Card 4: 1x1 Square (Cost Avoidance) */}
          <div className="aspect-square p-6 rounded-3xl border border-white/[0.08] bg-[#090B14] shadow-xl flex flex-col justify-between overflow-hidden soft-card">
            <div>
              <div className="font-mono text-xs text-amber-400 mb-2 flex items-center gap-1.5 font-semibold">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>COST AVOIDANCE</span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
                $84,000+
              </div>
              <p className="text-xs text-zinc-400 font-mono leading-relaxed">
                Projected idle turnaround fines &amp; standby penalties avoided per sprint.
              </p>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-zinc-500">
              Arrests cascade before cash burn
            </div>
          </div>

          {/* Bento Card 5: 1x1 Square (System Memory) */}
          <div className="aspect-square p-6 rounded-3xl border border-white/[0.08] bg-[#090B14] shadow-xl flex flex-col justify-between overflow-hidden soft-card">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="font-mono text-xs text-white flex items-center gap-1.5 font-semibold">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>SYSTEM MEMORY</span>
                </div>
              </div>
              <h3 className="text-base font-bold text-white mb-2 leading-snug">
                Every SYNQ inoculates against recurrence.
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                De-identified signatures and resolutions are deposited into System Memory, generating predictive alerts.
              </p>
            </div>
            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-500 text-[10px]">Continuous Learning</span>
              <Link to="/engines" className="text-white hover:underline flex items-center gap-1 text-[11px]">
                <span>Engines →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          02. PUBLIC EXPLANATION: 5 CORE STAGES
         ══════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 sm:px-8 border-t border-white/[0.06] bg-[#06080D]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono text-white mb-2 uppercase">PUBLIC EXPLANATION FRAMEWORK</div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              Five Stages of System Control.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              How DigiSynq transforms acute, multi-party production chaos into verifiable, compounding stability.
            </p>
          </div>

          {/* Stepper Header Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
            {PUBLIC_EXPLANATION_STAGES.map((stg, idx) => {
              const IconComponent = ICON_MAP[stg.iconName] || Zap;
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
                    <span className="text-[10px] uppercase font-mono tracking-widest text-white">•</span>
                    <IconComponent className={`w-4 h-4 ${isActive ? 'text-[#03040A]' : 'text-zinc-500'}`} />
                  </div>
                  <div className="text-sm font-bold font-mono tracking-tight">{stg.name}</div>
                  <div className={`text-[11px] truncate mt-1 ${isActive ? 'text-[#03040A]/80' : 'text-zinc-500'}`}>
                    {stg.tagline}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Public Stage Card */}
          <div className="p-8 sm:p-10 rounded-3xl border border-white/15 bg-gradient-to-br from-[#090B14] to-[#04060C] shadow-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/[0.08]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.08] border border-white/20 flex items-center justify-center text-white">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs text-white font-semibold tracking-wider">SYSTEM CONTROL STAGE</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">{selectedPublic.name}: {selectedPublic.tagline}</h3>
                </div>
              </div>
              <div className="font-mono text-xs text-zinc-400 bg-white/[0.04] px-3.5 py-1.5 rounded-lg border border-white/[0.08]">
                Next: <span className="text-white font-bold">{selectedPublic.next}</span>
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
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CORE SYSTEM: CAUSAL CHAIN
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-white mb-2 uppercase">CORE SYSTEM OPERATING MODEL</div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            The 11-Stage Causal Chain.
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            DigiSynq traverses from surface emergency down to structural immunity without skipping causal layers:
            <span className="text-white font-mono text-xs block mt-2">
              PROBLEM → SYMPTOM → EVENT → CONDITION → DEPENDENCY → ROOT CAUSE → MISSING CAPABILITY → INTERVENTION → OUTCOME → LEARNING → PREVENTION
            </span>
          </p>
        </div>

        {/* 11-Stage Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-11 gap-1.5 mb-8 overflow-x-auto">
          {CORE_OPERATING_CHAIN.map((node, idx) => {
            const isSelected = activeCoreChainIdx === idx;
            return (
              <button
                key={node.step}
                onClick={() => setActiveCoreChainIdx(idx)}
                className={`p-2.5 rounded-xl border text-center transition-all min-w-[85px] ${
                  isSelected
                    ? 'bg-white text-black border-white/20 font-bold shadow-md scale-105'
                    : 'bg-[#090B14] border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                <div className="text-[10px] font-mono text-white opacity-70">•</div>
                <div className="text-xs font-mono font-bold mt-1 truncate">{node.name}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Chain Stage Deep Inspector */}
        <div className="p-8 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-white/[0.08] border border-white/20 text-white font-bold">
                {currentCore.category}
              </span>
              <h3 className="text-2xl font-black text-white">{currentCore.name}</h3>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              "{currentCore.interrogation}"
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06]">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2">SYSTEM DEFINITION</div>
              <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">{currentCore.definition}</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/15">
              <div className="text-[10px] font-mono text-white uppercase tracking-wider mb-2">OPERATIONAL BENCHMARK EXAMPLE</div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-mono">{currentCore.example}</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-mono pt-4 border-t border-white/[0.06]">
            <span className="text-zinc-500">Continuous causal flow: Node {currentCore.step} of 11</span>
            <Link
              to="/engines/root-map"
              className="text-white hover:text-white font-bold transition-colors inline-flex items-center gap-1"
            >
              <span>Explore Interactive 13-Step Root Map Pipeline →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          04. STRUCTURAL CAPACITY GAPS
         ══════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 sm:px-8 border-t border-white/[0.06] bg-[#06080D]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono text-white mb-2 uppercase">STRUCTURAL CAPACITY FRACTURES</div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              Where Cinema Leaks Velocity.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              The assets and expertise exist. What has been absent is the neutral synchronization layer.
            </p>
          </div>

          {/* Bento Grid: 4 Critical Capacity Fractures (Pure Square Geometry) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {CAPACITY_GAPS.map((gap, idx) => (
              <div
                key={gap.id}
                className="aspect-square p-5 sm:p-6 rounded-3xl border border-white/[0.08] bg-[#090B14] hover:border-white/20 transition-all flex flex-col justify-between shadow-xl group overflow-hidden soft-card"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="font-mono text-[10px] text-white font-semibold truncate">
                      {gap.category.toUpperCase()}
                    </span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-zinc-500 border border-white/[0.06] shrink-0">
                      Fracture
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2 leading-tight group-hover:text-white transition-colors">
                    {gap.title}
                  </h3>
                  <div className="p-2.5 rounded-xl bg-red-500/[0.06] border border-red-500/20 text-[11px] text-zinc-300 leading-relaxed mb-2">
                    <strong className="text-red-400 block font-mono text-[9px] uppercase mb-0.5">Friction:</strong>
                    <span className="line-clamp-2">{gap.symptom}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/15 text-[11px] text-zinc-300 leading-relaxed">
                    <strong className="text-white block font-mono text-[9px] uppercase mb-0.5">DigiSynq Resolution:</strong>
                    <span className="line-clamp-2">{gap.intervention}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-zinc-500 text-[10px]">Benchmark:</span>
                  <span className="text-white font-bold text-[10px] truncate">{gap.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final Call to Action ── */}
      <section className="py-20 px-6 sm:px-8 border-t border-white/[0.06] bg-gradient-to-b from-[#090B14] to-[#03040A] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Ready to stabilize your project's critical path?
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8">
            Start a structured diagnostic to isolate the root cause behind your production or delivery bottleneck.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/diagnose"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black hover:bg-zinc-200 font-bold text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              <span>Diagnose a Problem</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
            <Link
              to="/start"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/14 hover:border-white/25 bg-white/[0.03] text-white font-medium text-sm transition-all"
            >
              <span>Start a SYNQ Case</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
