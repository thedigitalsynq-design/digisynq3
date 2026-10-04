import React, { useState } from 'react';
import { 
  AlertTriangle, ArrowRight, ShieldCheck, DollarSign, 
  Clock, GitBranch, RefreshCw, Layers, CheckCircle2 
} from 'lucide-react';
import { FAILURE_PROPAGATION_CHAIN, FailureChainNode } from '../data/system_architecture_data';

export function FailurePropagationVisual() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeNode = FAILURE_PROPAGATION_CHAIN[activeStepIndex];

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent border border-white/[0.12] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] space-y-8">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2.5 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.8)] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">Interactive Failure Chain</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
            How One Surface Variance Multiplies 100x
          </h3>
          <p className="text-sm sm:text-base text-zinc-400 mt-1 max-w-2xl leading-relaxed">
            Click through each milestone in the failure propagation chain to see how a minor 2-hour actor delay cascades into catastrophic multi-million dollar economic collapse across 10 interdependent stakeholders.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto font-mono text-xs bg-white/[0.04] border border-white/[0.1] px-4 py-2 rounded-full backdrop-blur-xl">
          <span className="text-zinc-500">STAGE:</span>
          <span className="text-white font-bold">{activeStepIndex + 1} / {FAILURE_PROPAGATION_CHAIN.length}</span>
        </div>
      </div>

      {/* Horizontal Interactive Step Strip */}
      <div className="my-6 overflow-x-auto pb-4 custom-scrollbar">
        <div className="flex items-center min-w-[900px] justify-between relative px-2">
          {/* Connector Line behind nodes */}
          <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-zinc-800 -translate-y-1/2 z-0" />
          <div 
            className="absolute top-1/2 left-6 h-0.5 bg-gradient-to-r from-zinc-500 via-amber-400 to-red-500 -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${(activeStepIndex / (FAILURE_PROPAGATION_CHAIN.length - 1)) * 96}%` }}
          />

          {FAILURE_PROPAGATION_CHAIN.map((node, idx) => {
            const isSelected = idx === activeStepIndex;
            const isPassed = idx < activeStepIndex;

            return (
              <button
                key={node.id}
                onClick={() => setActiveStepIndex(idx)}
                className="relative z-10 flex flex-col items-center group focus:outline-none transition-all duration-200"
                title={node.label}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                    isSelected
                      ? 'bg-white text-black ring-4 ring-white/20 scale-110 shadow-[0_4px_15px_rgba(255,255,255,0.3)]'
                      : isPassed
                      ? 'bg-zinc-700 text-zinc-200 border border-zinc-500'
                      : 'bg-black text-zinc-500 border border-zinc-800 group-hover:border-zinc-500'
                  }`}
                >
                  {String(node.step).padStart(2, '0')}
                </div>
                <span
                  className={`text-[10px] font-mono tracking-wider uppercase mt-2.5 max-w-[80px] text-center leading-tight transition-colors ${
                    isSelected
                      ? 'text-white font-semibold'
                      : isPassed
                      ? 'text-zinc-400'
                      : 'text-zinc-600 group-hover:text-zinc-400'
                  }`}
                >
                  {node.label.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Node Cupertino Bento Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-7 rounded-3xl bg-black/50 border border-white/[0.08]">
        {/* Left Column: The Problem & Blast Radius */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-zinc-400 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08]">
              STEP {String(activeNode.step).padStart(2, '0')} OF 10
            </span>
            <span className="font-mono text-xs text-red-400 font-semibold px-3 py-1 rounded-full bg-red-950/40 border border-red-500/20">
              {activeNode.economicMultiplier}
            </span>
          </div>

          <h4 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
            {activeNode.label}
          </h4>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-1">Trigger Event:</span>
            <p className="text-sm text-zinc-200 leading-relaxed bg-white/[0.02] border border-white/[0.05] p-4 rounded-2xl">
              {activeNode.trigger}
            </p>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-1">Cascade Blast Effect:</span>
            <p className="text-sm text-zinc-300 leading-relaxed bg-amber-950/15 border border-amber-500/20 p-4 rounded-2xl">
              {activeNode.cascadeEffect}
            </p>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-2">Stakeholders Impacted:</span>
            <div className="flex flex-wrap gap-2">
              {activeNode.stakeholdersHit.map((stk) => (
                <span key={stk} className="text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-zinc-300 px-3 py-1 rounded-full">
                  {stk}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: The DigiSynq Intervention Mechanism */}
        <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-6 lg:pt-0 lg:pl-8 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-wider uppercase font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>DIGISYNQ INTERVENTION MECHANISM</span>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
              <h5 className="text-sm font-semibold text-white uppercase tracking-tight">
                Halt Cascade at Step {activeNode.step}
              </h5>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                {activeNode.digisynqMitigation}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-2 font-mono text-xs">
              <div className="text-zinc-400 flex items-center justify-between">
                <span>PREVENTED LOSS:</span>
                <span className="text-emerald-400 font-semibold">{activeNode.economicMultiplier}</span>
              </div>
              <div className="text-zinc-400 flex items-center justify-between">
                <span>SYSTEM PRINCIPLE:</span>
                <span className="text-white">Disconnected value becomes waste.</span>
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between gap-3 border-t border-white/[0.06]">
            <button
              onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
              disabled={activeStepIndex === 0}
              className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none px-4 py-2.5 rounded-full border border-zinc-800 hover:border-zinc-600 transition-colors"
            >
              ← PREVIOUS
            </button>
            <button
              onClick={() => setActiveStepIndex((prev) => Math.min(FAILURE_PROPAGATION_CHAIN.length - 1, prev + 1))}
              disabled={activeStepIndex === FAILURE_PROPAGATION_CHAIN.length - 1}
              className="text-xs font-mono uppercase tracking-wider bg-white text-black hover:bg-zinc-200 disabled:opacity-30 disabled:pointer-events-none px-5 py-2.5 rounded-full font-bold transition-colors shadow-md"
            >
              NEXT STEP →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
