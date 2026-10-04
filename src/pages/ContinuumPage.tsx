import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  RefreshCw,
  Lightbulb,
  FileText,
  Calendar,
  Film,
  Sliders,
  Megaphone,
  Send,
  Users,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  GitBranch,
} from 'lucide-react';
import { CONTINUUM_STAGES, ContinuumStage } from '../data/blueprint_data';

export function ContinuumPage() {
  const [selectedStageIdx, setSelectedStageIdx] = useState(3); // Default to 04 PRODUCTION
  const activeStage = CONTINUUM_STAGES[selectedStageIdx];

  const getStageIcon = (step: string) => {
    switch (step) {
      case '01': return <Lightbulb className="w-5 h-5 text-[#D4F838]" />;
      case '02': return <FileText className="w-5 h-5 text-[#52E3A4]" />;
      case '03': return <Calendar className="w-5 h-5 text-[#23B272]" />;
      case '04': return <Film className="w-5 h-5 text-[#52E3A4]" />;
      case '05': return <Sliders className="w-5 h-5 text-[#D4F838]" />;
      case '06': return <Megaphone className="w-5 h-5 text-[#23B272]" />;
      case '07': return <Send className="w-5 h-5 text-[#52E3A4]" />;
      case '08': return <Users className="w-5 h-5 text-[#D4F838]" />;
      case '09': return <TrendingUp className="w-5 h-5 text-[#23B272]" />;
      default: return <Film className="w-5 h-5 text-[#52E3A4]" />;
    }
  };

  return (
    <main className="bg-[#03040A] text-[#ECEEF5] selection:bg-[#23B272] selection:text-[#03040A] min-h-screen pt-36 pb-24 px-6 sm:px-8 max-w-6xl mx-auto">
      {/* ── Header ── */}
      <div className="max-w-4xl mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300 font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-[#52E3A4]" />
          <span>SECTION 5</span>
          <span className="text-zinc-600">//</span>
          <span className="text-[#52E3A4]">THE 9-STAGE ENTERTAINMENT CONTINUUM</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.03] mb-4">
          From First Spark to Living Memory.
          <span className="text-zinc-400 font-light block text-2xl sm:text-4xl mt-2">
            The 9-Stage Entertainment Continuum.
          </span>
        </h1>

        <h2 className="text-base sm:text-xl text-zinc-300 leading-relaxed font-light max-w-3xl mb-8">
          An unbroken current where no asset, schedule, or creative insight falls through the cracks — transforming fragmented project handoffs into compounding institutional memory.
        </h2>

        {/* Continuous Loop Strip */}
        <div className="p-4 rounded-xl border border-white/[0.08] bg-[#090B14] font-mono text-xs text-zinc-300 flex items-center justify-between overflow-x-auto">
          <div className="flex items-center gap-2 shrink-0">
            <RefreshCw className="w-4 h-4 text-[#52E3A4] animate-spin-slow" />
            <span className="text-[#52E3A4] font-semibold">Continuous Loop:</span>
            <span>Idea → Development → Pre-Pro → Production → Post → Marketing → Distribution → Audience → Monetization → <strong>Memory ↺</strong></span>
          </div>
          <Link to="/blueprint#section-5" className="text-zinc-400 hover:text-white shrink-0 ml-4">
            Codex Spec →
          </Link>
        </div>
      </div>

      {/* ── Timeline Bar ── */}
      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 mb-10">
        {CONTINUUM_STAGES.map((stg, sIdx) => {
          const isSelected = selectedStageIdx === sIdx;
          return (
            <button
              key={sIdx}
              onClick={() => setSelectedStageIdx(sIdx)}
              className={`p-3.5 rounded-2xl border text-center transition-all ${
                isSelected
                  ? 'bg-[#16543D] border-[#52E3A4] text-white shadow-[0_0_24px_rgba(82,227,164,0.3)] scale-105'
                  : 'bg-[#090B14] border-white/[0.06] text-zinc-400 hover:text-white hover:border-white/[0.14]'
              }`}
            >
              <div className="font-mono text-[10px] text-[#52E3A4] mb-1">{stg.step}</div>
              <div className="font-bold text-xs truncate">{stg.name}</div>
            </button>
          );
        })}
      </div>

      {/* ── Active Stage Deep-Dive Card ── */}
      <div className="p-8 sm:p-12 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl relative overflow-hidden mb-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-8 border-b border-white/[0.08]">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-black/50 border border-white/[0.08]">
              {getStageIcon(activeStage.step)}
            </div>
            <div>
              <div className="font-mono text-xs text-[#52E3A4] mb-0.5">
                STAGE {activeStage.step} OF 09 // CONTINUUM LIFECYCLE
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{activeStage.name}</h2>
            </div>
          </div>

          <div className="px-4 py-2 rounded-xl border border-white/[0.08] bg-black/40 font-mono text-xs text-zinc-300">
            Scope: {activeStage.scope}
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-10 max-w-3xl">
          {activeStage.shortDesc}
        </p>

        {/* Failure vs Synchronized Intervention Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Typical System Failure */}
          <div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/5">
            <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-semibold mb-3">
              <AlertCircle className="w-4 h-4" />
              <span>TYPICAL UNCOORDINATED BREAKDOWN</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {activeStage.typicalFailure}
            </p>
          </div>

          {/* DIGISYNQ Intervention */}
          <div className="p-6 rounded-2xl border border-[#23B272]/30 bg-[#23B272]/5">
            <div className="flex items-center gap-2 text-[#52E3A4] font-mono text-xs font-semibold mb-3">
              <CheckCircle2 className="w-4 h-4" />
              <span>DIGISYNQ SYNCHRONIZED INTERVENTION</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {activeStage.synqIntervention}
            </p>
          </div>
        </div>

        {/* Handoff & Memory Callout */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <span className="flex items-center gap-2 text-[#52E3A4]">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Feeds directly into SYSTEM MEMORY ↺ for cross-project prevention</span>
          </span>
          <Link
            to="/engines"
            className="inline-flex items-center gap-1.5 text-[#52E3A4] hover:underline font-semibold"
          >
            <span>Simulate Failure in Cascade Engine</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
