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
    <main className="bg-[#03040A] text-[#ECEEF5] selection:bg-[#23B272] selection:text-[#03040A] min-h-screen pt-36 pb-24 px-6 sm:px-8 max-w-6xl mx-auto relative overflow-hidden">
      <TopographicBackground className="opacity-20 pointer-events-none -z-10 fixed inset-0" />

      {/* ── Header ── */}
      <div className="max-w-4xl mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300 font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-[#52E3A4] animate-pulse" />
          <span>SECTION 5</span>
          <span className="text-zinc-600">//</span>
          <span className="text-[#52E3A4]">THE 9-STAGE ENTERTAINMENT CONTINUUM</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.03] mb-4">
          From First Spark to Living Memory.
          <span className="text-zinc-400 font-light block text-2xl sm:text-4xl mt-2">
            The Unbroken Entertainment Continuum.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-zinc-300 leading-relaxed font-light max-w-3xl mb-8">
          Filmmaking is not nine siloed events. It is a single, uninterrupted current where an unhedged compromise in Development silently triggers a catastrophe in Post-Production.
        </p>

        {/* Continuous Loop Strip */}
        <div className="p-4 rounded-xl border border-white/[0.08] bg-[#090B14] font-mono text-xs text-zinc-300 flex items-center justify-between overflow-x-auto">
          <div className="flex items-center gap-2 shrink-0">
            <RefreshCw className="w-4 h-4 text-[#52E3A4]" />
            <span className="text-[#52E3A4] font-semibold">Continuous Loop:</span>
            <span>Idea → Development → Pre-Pro → Production → Post → Marketing → Distribution → Audience → Monetization → <strong>Memory ↺</strong></span>
          </div>
          <Link to="/how-it-works" className="text-xs text-[#52E3A4] hover:underline shrink-0 ml-4">
            Resolution Workflow →
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
                    ? 'bg-[#16543D] border-[#52E3A4] text-white shadow-[0_0_24px_rgba(82,227,164,0.3)] scale-105 font-bold'
                    : 'bg-[#090B14] border-white/[0.06] text-zinc-400 hover:text-white hover:border-white/[0.14]'
                }`}
              >
                <div className="font-mono text-[10px] text-[#52E3A4] mb-1">{stg.step}</div>
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
                  ? 'bg-[#16543D] border-[#52E3A4] text-white font-bold'
                  : 'bg-[#090B14] border-white/[0.06] text-zinc-400'
              }`}
            >
              <div className="font-mono text-[10px] text-[#52E3A4]">{stg.step}</div>
              <div className="text-[11px] truncate">{stg.name}</div>
            </button>
          );
        })}
      </div>

      {/* ── Active Stage Complete Architecture Card ── */}
      <div className="p-8 sm:p-12 rounded-3xl border border-white/[0.1] bg-gradient-to-br from-[#06130E] via-[#090B14] to-[#03040A] shadow-2xl relative overflow-hidden mb-16">
        {/* Stage Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-8 border-b border-white/[0.08]">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-black/50 border border-white/[0.08]">
              {getStageIcon(activeStage.step)}
            </div>
            <div>
              <div className="font-mono text-xs text-[#52E3A4] mb-1">
                STAGE {activeStage.step} OF 09 // CONTINUUM PHASE
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

        {/* 01 & 02: INPUTS vs OUTPUTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 font-mono text-xs">
          <div className="p-5 rounded-2xl border border-white/[0.06] bg-[#090B14]">
            <div className="text-[#52E3A4] uppercase font-semibold mb-2 flex items-center gap-1.5 text-[11px]">
              <CheckCircle2 className="w-4 h-4 text-[#52E3A4]" />
              <span>STAGE INPUTS</span>
            </div>
            <ul className="space-y-1.5 text-zinc-300">
              {activeStage.inputs.map((inp, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#52E3A4]">←</span> {inp}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl border border-white/[0.06] bg-[#090B14]">
            <div className="text-[#52E3A4] uppercase font-semibold mb-2 flex items-center gap-1.5 text-[11px]">
              <Cpu className="w-4 h-4 text-[#52E3A4]" />
              <span>STAGE DELIVERABLE OUTPUTS</span>
            </div>
            <ul className="space-y-1.5 text-zinc-300">
              {activeStage.outputs.map((outp, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#23B272]">→</span> {outp}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 03 & 04: COMMON FAILURES vs ROOT CAUSES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-xs">
          <div className="p-5 rounded-2xl border border-red-500/20 bg-red-500/5">
            <div className="text-red-400 font-mono font-semibold mb-2 flex items-center gap-1.5 text-[11px]">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span>COMMON UNCOORDINATED FAILURES</span>
            </div>
            <ul className="space-y-1.5 text-red-200">
              {activeStage.commonFailures.map((fail, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-red-400">⚠️</span> {fail}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl border border-amber-500/20 bg-amber-500/5">
            <div className="text-amber-400 font-mono font-semibold mb-2 flex items-center gap-1.5 text-[11px]">
              <GitBranch className="w-4 h-4 text-amber-400" />
              <span>SYSTEMIC ROOT CAUSES</span>
            </div>
            <ul className="space-y-1.5 text-amber-200">
              {activeStage.rootCauses.map((rc, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-amber-400">●</span> {rc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 05: INTERVENTIONS & GOVERNANCE */}
        <div className="p-6 rounded-2xl border border-[#23B272]/30 bg-[#16543D]/20 mb-8">
          <div className="text-xs font-mono text-[#52E3A4] uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#52E3A4]" />
            <span>DIGISYNQ INTERVENTION PLAYBOOK</span>
          </div>
          <p className="text-sm text-emerald-100 leading-relaxed mb-3">
            {activeStage.synqIntervention}
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {activeStage.interventions.map((intv, i) => (
              <span key={i} className="px-2.5 py-1 rounded bg-black/40 text-emerald-200 border border-[#23B272]/30">
                ✓ {intv}
              </span>
            ))}
          </div>
        </div>

        {/* 06: SYSTEM RELATIONSHIPS (Stakeholders, Mechanisms, Dependencies) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/[0.08] mb-8 text-xs font-mono">
          <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
            <span className="text-zinc-500 uppercase block mb-2 text-[10px]">AFFECTED STAKEHOLDERS</span>
            <div className="flex flex-wrap gap-1.5">
              {activeStage.stakeholders.map((stk, i) => (
                <Link key={i} to="/stakeholders" className="text-[#52E3A4] hover:underline">
                  {stk}{i < activeStage.stakeholders.length - 1 ? ',' : ''}
                </Link>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
            <span className="text-zinc-500 uppercase block mb-2 text-[10px]">ACTIVE MECHANISMS</span>
            <div className="flex flex-wrap gap-1.5">
              {activeStage.mechanisms.map((mech, i) => (
                <Link key={i} to="/mechanisms" className="px-2 py-0.5 rounded bg-[#23B272]/20 text-[#52E3A4] hover:bg-[#23B272]/30">
                  {mech}
                </Link>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
            <span className="text-zinc-500 uppercase block mb-2 text-[10px]">SYSTEM DEPENDENCIES</span>
            <div className="space-y-1 text-zinc-300">
              {activeStage.dependencies.map((dep, i) => (
                <div key={i}>• {dep}</div>
              ))}
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#23B272] text-[#03040A] hover:bg-[#52E3A4] font-bold text-xs tracking-wide transition-all shadow-md"
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
