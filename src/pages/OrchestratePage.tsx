import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GitBranch, ArrowRight, ArrowUpRight, ShieldCheck, 
  Layers, Clock, Sliders, CheckCircle2, AlertTriangle, Zap 
} from 'lucide-react';
import { TopographicBackground } from '../components/TopographicBackground';
import { ORCHESTRATE_STAGES, OrchestrateStage } from '../data/system_architecture_data';

export function OrchestratePage() {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const activeStage = ORCHESTRATE_STAGES[activeStageIndex];

  return (
    <div className="relative min-h-screen bg-[#03040A] text-[#ECEEF5] pt-24 sm:pt-28 pb-20 px-4 sm:px-6">
      <TopographicBackground />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 bg-white/[0.05] border border-white/[0.08] px-2.5 py-1">
              09 — ORCHESTRATION ENGINE
            </span>
            <span className="font-mono text-xs text-zinc-500">•</span>
            <span className="font-mono text-xs text-zinc-400">HOW THE WORK ACTUALLY MOVES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Beyond a marketplace: living multi-party execution governance.
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
            A marketplace introduces parties and walks away. But entertainment projects break *after* the contract is signed — when an actor falls ill, rain washes out a location, or an edit turnover slips by 48 hours. DIGISYNQ actively coordinates schedules, dependencies, handoffs, and variance resolution across all 8 execution stages.
          </p>
        </div>

        {/* The 8 Stages of Orchestration Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
            <h2 className="text-xl font-extrabold tracking-tight text-white">
              The 8 orchestration milestones
            </h2>
            <span className="text-xs font-mono text-zinc-500">Continuous Dynamic Governance</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {ORCHESTRATE_STAGES.map((stg, idx) => {
              const isSelected = idx === activeStageIndex;
              return (
                <button
                  key={stg.step}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-3 text-left border transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white text-black border-white shadow-xl'
                      : 'bg-[#080B12] text-zinc-400 border-white/[0.06] hover:border-zinc-600 hover:text-white'
                  }`}
                >
                  <div>
                    <span className={`font-mono text-[10px] block mb-1 uppercase ${isSelected ? 'text-zinc-600' : 'text-zinc-500'}`}>
                      {stg.step}
                    </span>
                    <div className={`font-extrabold text-xs tracking-tight leading-tight ${isSelected ? 'text-black' : 'text-white'}`}>
                      {stg.name}
                    </div>
                  </div>
                  <div className={`text-[9px] font-mono mt-3 ${isSelected ? 'text-zinc-800' : 'text-zinc-500'}`}>
                    Active Step →
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Deep Detail Panel */}
        <div className="p-6 sm:p-8 bg-[#090C15] border border-white/[0.08] space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
            <div>
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                MILESTONE {activeStage.step} OF 08: {activeStage.name}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                {activeStage.role}
              </h3>
            </div>
            <div className="font-mono text-xs bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 px-3 py-1.5 self-start md:self-auto">
              Dynamic Synchronization Active
            </div>
          </div>

          <div className="text-sm text-zinc-300 leading-relaxed bg-black/40 p-4 border border-white/[0.04]">
            <span className="text-xs font-mono uppercase text-zinc-500 block mb-1">Operational Activity:</span>
            {activeStage.whatHappens}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-white/[0.02] border border-white/[0.06] space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block">
                Continuous Dependency Check:
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-mono">
                {activeStage.dependencyChecked}
              </p>
            </div>

            <div className="p-5 bg-emerald-950/20 border border-emerald-500/20 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block">
                Catastrophic Friction Prevented:
              </span>
              <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-semibold">
                {activeStage.frictionPrevented}
              </p>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-white/[0.08]">
            <button
              onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
              disabled={activeStageIndex === 0}
              className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none px-3 py-2 border border-zinc-800 hover:border-zinc-600 transition-colors"
            >
              ← PREVIOUS STAGE
            </button>
            <button
              onClick={() => setActiveStageIndex((prev) => Math.min(ORCHESTRATE_STAGES.length - 1, prev + 1))}
              disabled={activeStageIndex === ORCHESTRATE_STAGES.length - 1}
              className="text-xs font-mono uppercase tracking-wider bg-white text-black hover:bg-zinc-200 disabled:opacity-30 disabled:pointer-events-none px-4 py-2 font-bold transition-colors"
            >
              NEXT STAGE →
            </button>
          </div>
        </div>

        {/* Narrative Link to Measure & Monetize */}
        <div className="p-8 bg-[#090C15] border border-white/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">NEXT IN THE SYSTEM</span>
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              Every orchestrated project generates decision intelligence.
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              We do not let operational data vanish into deleted spreadsheets. See how our measurement layer converts real execution telemetry into predictive intelligence.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/measure"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-zinc-200 px-5 py-3 text-xs font-mono uppercase font-bold tracking-wider transition-colors"
            >
              <span>SEE DECISION TELEMETRY</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/monetize"
              className="inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] px-5 py-3 text-xs font-mono uppercase font-semibold tracking-wider transition-colors"
            >
              <span>EXPLORE BUSINESS MODEL</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
