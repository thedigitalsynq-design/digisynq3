import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
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
  AlertTriangle,
  CheckCircle2,
  GitBranch,
  ShieldCheck,
  Cpu,
  Layers,
} from 'lucide-react';
import { CONTINUUM_STAGES, ContinuumStage } from '../data/blueprint_data';
import { TopographicBackground } from '../components/TopographicBackground';

export function ContinuumPage() {
  const [selectedStageIdx, setSelectedStageIdx] = useState(3); // Default to 04 PRODUCTION
  const activeStage = CONTINUUM_STAGES[selectedStageIdx];

  const getStageIcon = (step: string) => {
    switch (step) {
      case '01': return <Lightbulb className="w-5 h-5 text-white" />;
      case '02': return <FileText className="w-5 h-5 text-zinc-200" />;
      case '03': return <Calendar className="w-5 h-5 text-white" />;
      case '04': return <Film className="w-5 h-5 text-zinc-200" />;
      case '05': return <Sliders className="w-5 h-5 text-white" />;
      case '06': return <Megaphone className="w-5 h-5 text-zinc-200" />;
      case '07': return <Send className="w-5 h-5 text-white" />;
      case '08': return <Users className="w-5 h-5 text-zinc-200" />;
      case '09': return <TrendingUp className="w-5 h-5 text-white" />;
      default: return <Film className="w-5 h-5 text-white" />;
    }
  };

  return (
    <main className="bg-[#03040A] text-[#ECEEF5] selection:bg-white selection:text-black min-h-screen pt-36 pb-24 px-6 sm:px-8 max-w-6xl mx-auto relative overflow-hidden">
      <TopographicBackground className="opacity-20 pointer-events-none -z-10 fixed inset-0" />

      {/* ── Header ── */}
      <div className="max-w-4xl mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300 font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-white">THE ENTERTAINMENT LIFECYCLE</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.03] mb-4">
          The 9-Stage Entertainment Lifecycle.
          <span className="text-zinc-400 font-light block text-2xl sm:text-4xl mt-2">
            Where DigiSynq operates at every handoff.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-zinc-300 leading-relaxed font-light max-w-3xl mb-8">
          Filmmaking is not nine siloed events. It is a single, uninterrupted current where an unhedged compromise in Development silently triggers a catastrophe in Post-Production.
        </p>

        {/* Continuous Loop Strip */}
        <div className="p-4 rounded-xl border border-white/[0.08] bg-[#090B14] font-mono text-xs text-zinc-300 flex items-center justify-between overflow-x-auto">
          <div className="flex items-center gap-2 shrink-0">
            <RefreshCw className="w-4 h-4 text-white" />
            <span className="text-white font-semibold">Continuous Loop:</span>
            <span>Idea → Development → Pre-Pro → Production → Post → Marketing → Distribution → Audience → Monetization → <strong>Memory ↺</strong></span>
          </div>
          <Link to="/how-it-works" className="text-xs text-white hover:underline shrink-0 ml-4">
            How DigiSynq Intervenes →
          </Link>
        </div>
      </div>

      {/* ── DESKTOP: Horizontal Continuum Ribbon (hidden on small mobile) ── */}
      <div className="hidden md:block mb-10 overflow-x-auto">
        <div className="flex gap-2 min-w-max pb-2">
          {CONTINUUM_STAGES.map((stg, sIdx) => {
            const isSelected = selectedStageIdx === sIdx;
            return (
              <button
                key={sIdx}
                onClick={() => setSelectedStageIdx(sIdx)}
                className={`p-3.5 rounded-2xl border text-center transition-all min-w-[110px] cursor-pointer ${
                  isSelected
                    ? 'bg-[#090B14] border-white/20 text-white shadow-[0_0_24px_rgba(82,227,164,0.3)] scale-105 font-bold'
                    : 'bg-[#090B14] border-white/[0.06] text-zinc-400 hover:text-white hover:border-white/[0.14]'
                }`}
              >
                <div className="flex items-center justify-center mb-1">
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-white'}`} />
                </div>
                <div className="text-xs font-bold truncate">{stg.name}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── MOBILE: Vertical Timeline Strip Selector (visible only on small mobile) ── */}
      <div className="md:hidden grid grid-cols-3 gap-1.5 mb-8">
        {CONTINUUM_STAGES.map((stg, sIdx) => {
          const isSelected = selectedStageIdx === sIdx;
          return (
            <button
              key={sIdx}
              onClick={() => setSelectedStageIdx(sIdx)}
              className={`p-2.5 rounded-xl border text-center transition-all ${
                isSelected
                  ? 'bg-[#090B14] border-white/20 text-white font-bold'
                  : 'bg-[#090B14] border-white/[0.06] text-zinc-400'
              }`}
            >
              <div className="text-[11px] truncate font-bold">{stg.name}</div>
            </button>
          );
        })}
      </div>

      {/* ── Active Stage Complete Architecture Card ── */}
      <div className="p-8 sm:p-12 rounded-3xl border border-white/[0.1] bg-gradient-to-br from-[#090B14] via-[#06070B] to-[#03040A] shadow-2xl relative overflow-hidden mb-16">
        {/* Stage Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-8 border-b border-white/[0.08]">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-black/50 border border-white/[0.08]">
              {getStageIcon(activeStage.step)}
            </div>
            <div>
              <div className="font-mono text-xs text-white mb-1">
                LIFECYCLE ARCHITECTURE // CONTINUUM PHASE
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white">{activeStage.name}</h2>
              <div className="text-sm font-mono text-zinc-400 mt-1">{activeStage.shortDesc}</div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-white/[0.08] bg-black/40 text-xs font-mono text-zinc-300 max-w-sm">
            <span className="text-zinc-500 uppercase block mb-1">STAGE PURPOSE</span>
            {activeStage.purpose}
          </div>
        </div>

        {/* ── BENTO GRID: Active Stage Complete Architecture (Pure Square Geometry) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Bento Tile 1: DigiSynq Intervention Playbook (Large 2x2 Square) */}
          <div className="sm:col-span-2 sm:row-span-2 aspect-square p-6 sm:p-8 rounded-3xl border border-white/15 bg-gradient-to-br from-[#090B14] via-[#06070B] to-[#04060C] shadow-xl flex flex-col justify-between overflow-hidden relative soft-card">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.05] rounded-full blur-3xl pointer-events-none group-hover:bg-white/[0.08] transition-all duration-700" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-white uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-white" />
                  <span>INTERVENTION PLAYBOOK</span>
                </span>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/[0.08] text-white border border-white/15">
                  Closed-Loop Control
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Deterministic Handoff &amp; Arbitration Protocol
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed mb-6 font-light">
                {activeStage.synqIntervention}
              </p>
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                  Active Stage Interventions:
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {activeStage.interventions.map((intv, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-black/60 text-zinc-200 border border-white/15 flex items-center gap-1.5">
                      <span className="text-white">✓</span> {intv}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative z-10 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Execution Guarantee:</span>
              <span className="text-white font-bold">Zero Dependency Drifts</span>
            </div>
          </div>

          {/* Bento Tile 2: Stage Telemetry Inputs (1x1 Square) */}
          <div className="aspect-square p-5 sm:p-6 rounded-3xl border border-white/[0.08] bg-[#090B14] shadow-lg flex flex-col justify-between overflow-hidden soft-card">
            <div>
              <div className="text-white uppercase font-semibold mb-3 flex items-center gap-1.5 text-xs font-mono">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>TELEMETRY INPUTS</span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-zinc-300">
                {activeStage.inputs.map((inp, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-white">←</span> {inp}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-[10px] font-mono text-zinc-500">
              Ingested from upstream boundary
            </div>
          </div>

          {/* Bento Tile 3: Stage Deliverable Outputs (1x1 Square) */}
          <div className="aspect-square p-5 sm:p-6 rounded-3xl border border-white/[0.08] bg-[#090B14] shadow-lg flex flex-col justify-between overflow-hidden soft-card">
            <div>
              <div className="text-white uppercase font-semibold mb-3 flex items-center gap-1.5 text-xs font-mono">
                <Cpu className="w-4 h-4 text-white" />
                <span>DELIVERABLE OUTPUTS</span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-zinc-300">
                {activeStage.outputs.map((outp, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-zinc-200">→</span> {outp}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-[10px] font-mono text-zinc-500">
              Handed to downstream milestone
            </div>
          </div>

          {/* Bento Tile 4: Failure & Cascade Risk (1x1 Square) */}
          <div className="aspect-square p-5 sm:p-6 rounded-3xl border border-red-500/20 bg-red-500/[0.04] shadow-lg flex flex-col justify-between overflow-hidden soft-card">
            <div>
              <div className="text-red-400 font-mono font-semibold mb-2.5 flex items-center gap-1.5 text-xs">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span>CASCADE FAILURE RISK</span>
              </div>
              <ul className="space-y-2 text-xs text-red-200 mb-3">
                {activeStage.commonFailures.map((fail, i) => (
                  <li key={i} className="flex items-start gap-1.5 leading-snug">
                    <span className="text-red-400 shrink-0">⚠️</span> {fail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-2.5 border-t border-red-500/20 text-[10px] font-mono text-amber-300 truncate">
              Root: {activeStage.rootCauses[0]}
            </div>
          </div>

          {/* Bento Tile 5: Active Mechanisms & Dependencies (1x1 Square) */}
          <div className="aspect-square p-5 sm:p-6 rounded-3xl border border-white/[0.08] bg-[#090B14] shadow-lg flex flex-col justify-between overflow-hidden soft-card">
            <div>
              <span className="text-zinc-500 uppercase block mb-2 text-[10px] font-mono">ACTIVE MECHANISMS</span>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {activeStage.mechanisms.map((mech, i) => (
                  <Link
                    key={i}
                    to="/mechanisms"
                    className="px-2 py-1 rounded bg-white/[0.06] text-white border border-white/15 hover:bg-white/25 text-xs font-mono transition-colors"
                  >
                    {mech}
                  </Link>
                ))}
              </div>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-[10px] font-mono text-zinc-500">
              {activeStage.dependencies.length} Dependencies Monitored
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
          <span className="text-xs font-mono text-zinc-500">
            Unbroken Current • Continuous Systemic Hand-off Protocol
          </span>
          <div className="flex items-center gap-3">
            <Link
              to="/diagnose"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-zinc-200 font-bold text-xs tracking-wide transition-all shadow-md"
            >
              <span>Diagnose Stage {activeStage.step} Issue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to={`/start?stage=${activeStage.step}`}
              className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.03] text-zinc-300 text-xs font-mono transition-all"
            >
              <span>Start SYNQ Case</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
