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
    <main className="bg-[#03040A] text-[#ECEEF5] selection:bg-[#23B272] selection:text-[#03040A] min-h-screen relative overflow-hidden">
      <TopographicBackground className="opacity-25 pointer-events-none -z-10 fixed inset-0" />

      {/* ── 01. Header Hero ── */}
      <section className="pt-36 sm:pt-48 pb-16 sm:pb-24 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] text-xs text-zinc-300 font-mono mb-8">
            <span className="w-2 h-2 rounded-full bg-[#52E3A4] animate-pulse" />
            <span className="text-[#52E3A4] font-semibold">THE SYNQ OPERATING MODEL</span>
            <span className="text-zinc-600">//</span>
            <span>ENTERTAINMENT SYNCHRONIZATION INFRASTRUCTURE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.03] mb-6">
            The Anatomy of a <span className="text-[#52E3A4]">SYNQ</span>.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-3xl font-light mb-8">
            A <strong>SYNQ</strong> is a structured intervention that connects a specific system problem to the people, resources, capabilities, and decisions required to resolve it.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/diagnose"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#23B272] text-[#03040A] hover:bg-[#52E3A4] font-bold text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(35,178,114,0.35)] active:scale-95"
            >
              <span>Diagnose a Problem</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/14 hover:border-white/25 bg-white/[0.03] text-white font-medium text-sm transition-all"
            >
              <span>Explore Resolution Runbook</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          02. PUBLIC EXPLANATION: 5 CORE STAGES
         ══════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 sm:px-8 border-t border-white/[0.06] bg-[#06080D]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono text-[#52E3A4] mb-2 uppercase">PUBLIC EXPLANATION FRAMEWORK</div>
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
                      ? 'bg-[#23B272] text-[#03040A] border-[#52E3A4] font-bold shadow-lg scale-[1.02]'
                      : 'bg-[#090B14] border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs">{stg.step}</span>
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
                Next: <span className="text-[#52E3A4] font-bold">{selectedPublic.next}</span>
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
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          03. CORE SYSTEM: 11-STAGE CAUSAL CHAIN
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-[#52E3A4] mb-2 uppercase">CORE SYSTEM OPERATING MODEL</div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            The 11-Stage Causal Chain.
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            DigiSynq traverses from surface emergency down to structural immunity without skipping causal layers:
            <span className="text-[#52E3A4] font-mono text-xs block mt-2">
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

        {/* Selected Chain Stage Deep Inspector */}
        <div className="p-8 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#23B272]/20 border border-[#23B272]/40 text-[#52E3A4] font-bold">
                STAGE {currentCore.step} // {currentCore.category}
              </span>
              <h3 className="text-2xl font-black text-white">{currentCore.name}</h3>
            </div>
            <span className="text-xs font-mono text-zinc-400 italic">
              "{currentCore.interrogation}"
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06]">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2">SYSTEM DEFINITION</div>
              <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">{currentCore.definition}</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#16543D]/20 border border-[#23B272]/30">
              <div className="text-[10px] font-mono text-[#52E3A4] uppercase tracking-wider mb-2">OPERATIONAL BENCHMARK EXAMPLE</div>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-mono">{currentCore.example}</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-mono pt-4 border-t border-white/[0.06]">
            <span className="text-zinc-500">Continuous causal flow: Node {currentCore.step} of 11</span>
            <Link
              to="/engines/root-map"
              className="text-[#52E3A4] hover:text-white font-bold transition-colors inline-flex items-center gap-1"
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
            <div className="text-xs font-mono text-[#52E3A4] mb-2 uppercase">STRUCTURAL CAPACITY FRACTURES</div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              Where Cinema Leaks Velocity.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              The assets and expertise exist. What has been absent is the neutral synchronization layer.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {CAPACITY_GAPS.map((gap, idx) => (
              <button
                key={gap.id}
                onClick={() => setActiveGapIdx(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeGapIdx === idx
                    ? 'bg-[#23B272] text-[#03040A] shadow-md'
                    : 'bg-white/[0.04] text-zinc-400 hover:text-white border border-white/[0.08]'
                }`}
              >
                {gap.title}
              </button>
            ))}
          </div>

          <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] grid grid-cols-1 md:grid-cols-2 gap-8 shadow-2xl">
            <div className="space-y-4">
              <span className="text-xs font-mono text-zinc-500 uppercase">{currentGap.category} // Conventional Friction</span>
              <h3 className="text-xl font-bold text-white tracking-tight">{currentGap.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{currentGap.symptom}</p>
            </div>

            <div className="space-y-4 md:border-l md:border-white/[0.08] md:pl-8">
              <span className="text-xs font-mono text-[#52E3A4] uppercase">DigiSynq Asset-Light Resolution</span>
              <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">{currentGap.intervention}</p>
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-zinc-500 font-mono">Validated Benchmark:</span>
                <span className="text-[#52E3A4] font-mono font-bold">{currentGap.metric}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final Call to Action ── */}
      <section className="py-20 px-6 sm:px-8 border-t border-white/[0.06] bg-gradient-to-b from-[#06130E] to-[#03040A] text-center">
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
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#23B272] text-[#03040A] hover:bg-[#52E3A4] font-bold text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(35,178,114,0.35)]"
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
