import React, { useState } from 'react';
import { HelpCircle, ArrowDown, Sparkles, CheckCircle2, ChevronDown, GitBranch } from 'lucide-react';
import { EERG_WHY_CHAINS } from '../data/eerg_data';

export function EERGWhyDiagnostic() {
  const [selectedChainIndex, setSelectedChainIndex] = useState(0);
  const [revealedLevel, setRevealedLevel] = useState(1);

  const chain = EERG_WHY_CHAINS[selectedChainIndex] || EERG_WHY_CHAINS[0];

  const handleSelectChain = (idx: number) => {
    setSelectedChainIndex(idx);
    setRevealedLevel(1);
  };

  const advanceWhy = () => {
    if (revealedLevel < chain.steps.length) {
      setRevealedLevel((prev) => prev + 1);
    }
  };

  const resetWhy = () => {
    setRevealedLevel(1);
  };

  return (
    <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl relative overflow-hidden" id="why-chains">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-white font-mono text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>ROOT-CAUSE DECOMPOSITION</span>
            <span className="text-zinc-600">//</span>
            <span>THE 5-WHYS PROTOCOL</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            The "Why?" Experience
          </h2>
          <p className="text-sm text-zinc-300 mt-2 max-w-2xl leading-relaxed">
            Never stop at the first complaint. DigiSynq iteratively asks "Why?" through 5 operational layers to peel back surface noise and isolate the underlying systemic root cause.
          </p>
        </div>

        {/* Chain Selectors */}
        <div className="flex flex-wrap gap-2">
          {EERG_WHY_CHAINS.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => handleSelectChain(idx)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono tracking-wider transition-all text-left ${
                selectedChainIndex === idx
                  ? 'bg-white text-black font-bold shadow-md shadow-white/10'
                  : 'bg-black/60 text-zinc-400 hover:text-white border border-white/[0.08]'
              }`}
            >
              {c.title.split('(')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Active Symptom Card */}
      <div className="p-5 rounded-2xl bg-black/60 border border-white/15 mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">
            SURFACE OPERATIONAL SYMPTOM (WHAT THE TEAM SEES)
          </span>
          <span className="text-[10px] font-mono text-zinc-500">
            Chain #{selectedChainIndex + 1} of {EERG_WHY_CHAINS.length}
          </span>
        </div>
        <h3 className="text-base sm:text-lg font-bold text-white mb-1">
          {chain.title}
        </h3>
        <p className="text-xs text-zinc-300 leading-relaxed font-light">
          "{chain.symptom}"
        </p>
      </div>

      {/* The 5-Whys Interactive Ladder */}
      <div className="space-y-4 mb-8">
        {chain.steps.slice(0, revealedLevel).map((step, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-2xl border transition-all animate-in fade-in slide-in-from-top-2 duration-300 ${
              idx === chain.steps.length - 1
                ? 'bg-white/[0.08] border-white/30 shadow-xl'
                : 'bg-[#090B14] border-white/[0.08]'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-white/10 text-white font-mono text-xs font-bold flex items-center justify-center border border-white/20">
                  W{step.level}
                </span>
                <span className="text-xs font-mono font-bold text-white tracking-wide">
                  WHY? {step.question.replace(/^Why (is|are|did|cannot|do) /i, '')}
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-zinc-400 border border-white/10 self-start sm:self-auto">
                {step.type} LAYER
              </span>
            </div>
            <p className="text-xs text-zinc-200 leading-relaxed pl-8">
              ↓ {step.answer}
            </p>
          </div>
        ))}
      </div>

      {/* Action Bar / Step Deeper */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-black/40 border border-white/[0.08] mb-8">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-zinc-400">
            DIAGNOSTIC DEPTH: <strong className="text-white">{revealedLevel} of {chain.steps.length} Levels Uncovered</strong>
          </span>
          {revealedLevel === chain.steps.length && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-black font-bold">
              ROOT CAUSE REACHED
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {revealedLevel < chain.steps.length ? (
            <button
              onClick={advanceWhy}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 font-bold text-xs tracking-wider transition-all shadow-md active:scale-95"
            >
              <span>Ask "Why?" (Level {revealedLevel + 1})</span>
              <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          ) : (
            <button
              onClick={resetWhy}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs transition-all border border-white/20"
            >
              Restart Diagnostic
            </button>
          )}
        </div>
      </div>

      {/* Terminal Root Cause & Leverage Resolution Card */}
      {revealedLevel === chain.steps.length && (
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-transparent border border-white/20 shadow-2xl animate-in zoom-in-95 duration-400">
          <div className="flex items-center gap-2 mb-3">
            <GitBranch className="w-4 h-4 text-white" />
            <span className="text-xs font-mono text-white uppercase tracking-widest font-bold">
              SYSTEMIC ROOT CAUSE ISOLATED
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-white/[0.08]">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {chain.systemicRootCause}
            </h3>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white font-bold border border-white/20 shrink-0">
              {chain.rootCauseCode}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-black/60 border border-white/15">
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-1 font-semibold">
              DIGISYNQ LEVERAGE INTERVENTION OPPORTUNITY:
            </span>
            <p className="text-sm font-semibold text-white">
              {chain.leverageOpportunity}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
