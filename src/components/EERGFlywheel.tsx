import React, { useState } from 'react';
import { ArrowDown, RefreshCw, Sparkles, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { EERG_DIGISYNQ_FLYWHEEL } from '../data/eerg_data';

export function EERGFlywheel() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = EERG_DIGISYNQ_FLYWHEEL[activeStepIndex] || EERG_DIGISYNQ_FLYWHEEL[0];

  return (
    <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl relative overflow-hidden" id="continuous-flywheel">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/[0.02] blur-[150px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-white font-mono text-xs font-semibold mb-3">
          <RefreshCw className="w-3.5 h-3.5" />
          <span>CONTINUOUS CLOSED-LOOP FLYWHEEL</span>
          <span className="text-zinc-600">//</span>
          <span>EERG ⇄ DIGISYNQ</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          From Intelligence to Action: The Continuous Learning Loop
        </h2>
        <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
          EERG identifies where the ecosystem gets stuck. DigiSynq connects the resources to fix it. The verified intervention outcomes then generate empirical data that improves the EERG model, discovering new opportunities in perpetuity.
        </p>
      </div>

      {/* Interactive Flywheel Steps Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
        {EERG_DIGISYNQ_FLYWHEEL.map((item, idx) => {
          const isSelected = activeStepIndex === idx;
          return (
            <button
              key={item.step}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-3.5 rounded-2xl border text-left transition-all ${
                isSelected
                  ? 'bg-white text-black border-white shadow-xl scale-100 font-bold'
                  : 'bg-black/50 border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] font-mono tracking-widest ${isSelected ? 'text-zinc-700' : 'text-zinc-500'}`}>
                  STEP {item.step}
                </span>
                <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${isSelected ? 'bg-black/10 text-black font-semibold' : 'bg-white/10 text-white'}`}>
                  {item.engine.split(' ')[0]}
                </span>
              </div>
              <div className={`text-xs font-black ${isSelected ? 'text-black' : 'text-white'}`}>
                {item.phase}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Step Detailed Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-black/60 border border-white/15 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-white/10 text-white font-mono text-sm font-black flex items-center justify-center border border-white/20">
              {activeStep.step}
            </span>
            <div>
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block font-semibold">
                SYSTEM PHASE // {activeStep.engine}
              </span>
              <h3 className="text-xl font-black text-white">
                {activeStep.phase}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-zinc-500">
              {activeStepIndex + 1} of {EERG_DIGISYNQ_FLYWHEEL.length}
            </span>
            <button
              onClick={() => setActiveStepIndex((prev) => (prev + 1) % EERG_DIGISYNQ_FLYWHEEL.length)}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-all flex items-center gap-1"
            >
              <span>Next Loop Phase</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl bg-[#090B14] border border-white/[0.06]">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1 font-semibold">
              EXECUTION ACTION:
            </span>
            <p className="text-xs text-zinc-200 leading-relaxed">
              {activeStep.description}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/15 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-1 font-semibold">
                GENERATED SYSTEM DELIVERABLE:
              </span>
              <div className="text-xs font-bold text-white">
                {activeStep.output}
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-white/[0.08] text-[10px] font-mono text-zinc-400 flex items-center gap-1">
              <Zap className="w-3 h-3 text-white" />
              <span>Direct Closed-Loop Feed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Central Product Conceptual Statement Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent border border-white/20 text-center shadow-xl">
        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-2 font-semibold">
          THE CENTRAL PRODUCT RELATIONSHIP
        </span>
        <blockquote className="text-lg sm:text-2xl font-black text-white max-w-3xl mx-auto leading-snug">
          "DIGISYNQ connects the entertainment ecosystem. EERG maps why that ecosystem gets stuck. Together, they turn fragmented problems into systemic understanding — and systemic understanding into opportunities."
        </blockquote>
      </div>
    </div>
  );
}
