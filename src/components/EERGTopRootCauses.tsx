import React, { useState } from 'react';
import { GitBranch, AlertTriangle, ArrowRight, ShieldCheck, Sparkles, ChevronRight, Layers } from 'lucide-react';
import { EERG_TOP_ROOT_CAUSES_TELEMETRY, type EERGTopRootCauseTelemetry } from '../data/eerg_data';

export function EERGTopRootCauses() {
  const [selectedCauseCode, setSelectedCauseCode] = useState<string>('R001');

  const selectedCause =
    EERG_TOP_ROOT_CAUSES_TELEMETRY.find((c) => c.code === selectedCauseCode) ||
    EERG_TOP_ROOT_CAUSES_TELEMETRY[0];

  return (
    <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl relative overflow-hidden" id="top-root-causes">
      {/* Background glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-white/[0.02] blur-[150px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-white font-mono text-xs font-semibold mb-3">
            <GitBranch className="w-3.5 h-3.5" />
            <span>ROOT-CAUSE RANKING & CENTRALITY</span>
            <span className="text-zinc-600">//</span>
            <span>SYSTEMIC PRIORITY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            The 10 Systemic Root Causes
          </h2>
          <p className="text-sm text-zinc-300 mt-2 max-w-2xl leading-relaxed">
            Ranked by ecosystem centrality, failure propagation depth, and total dollar exposure across 160+ stakeholder types.
          </p>
        </div>

        <div className="text-xs font-mono text-zinc-400 bg-black/60 px-4 py-2 rounded-xl border border-white/[0.08] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span>Select any root cause to inspect detailed causal flow</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Top Root Causes Ranking Table/List (Lg: 5 cols) */}
        <div className="lg:col-span-5 space-y-2 max-h-[620px] overflow-y-auto pr-1">
          {EERG_TOP_ROOT_CAUSES_TELEMETRY.map((rc, idx) => {
            const isSelected = selectedCauseCode === rc.code;
            return (
              <button
                key={rc.code}
                onClick={() => setSelectedCauseCode(rc.code)}
                className={`w-full p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-white text-black border-white shadow-xl scale-[1.01]'
                    : 'bg-black/50 border-white/[0.08] text-zinc-300 hover:border-white/30 hover:bg-white/[0.03]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${isSelected ? 'bg-black/10 text-black' : 'bg-white/10 text-white'}`}>
                    {rc.code}
                  </span>
                  <div>
                    <h4 className={`text-xs font-bold ${isSelected ? 'text-black' : 'text-white'}`}>
                      {rc.name}
                    </h4>
                    <span className={`text-[10px] font-mono block ${isSelected ? 'text-zinc-700' : 'text-zinc-500'}`}>
                      {rc.problemsAffected} problems · {rc.stakeholdersAffected} roles · {rc.economicExposure}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full uppercase font-bold ${
                    isSelected ? 'bg-black text-white' : 'bg-white/[0.08] text-white border border-white/20'
                  }`}>
                    {rc.centrality}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-black' : 'text-zinc-600'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Detailed Selected Root Cause Panel (Lg: 7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-black/70 border border-white/15 shadow-2xl flex flex-col justify-between">
          <div>
            {/* Top Badge & Code */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono font-black text-white px-2.5 py-1 rounded-lg bg-white/10 border border-white/20">
                  {selectedCause.code}
                </span>
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                    CATEGORY: {selectedCause.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {selectedCause.name}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/15 text-white border border-white/30 font-bold">
                  CENTRALITY: {selectedCause.centrality}
                </span>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.06] text-zinc-300 border border-white/10">
                  {selectedCause.evidenceConfidence}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 font-light">
              {selectedCause.description}
            </p>

            {/* Scale Telemetry 4-Pill Bento */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
              <div className="p-3 rounded-xl bg-[#090B14] border border-white/[0.06] text-center">
                <span className="text-[9px] font-mono text-zinc-500 uppercase block mb-1">STAKEHOLDERS</span>
                <div className="text-lg font-black text-white">{selectedCause.stakeholdersAffected}</div>
                <span className="text-[9px] text-zinc-500 font-mono">Affected Roles</span>
              </div>
              <div className="p-3 rounded-xl bg-[#090B14] border border-white/[0.06] text-center">
                <span className="text-[9px] font-mono text-zinc-500 uppercase block mb-1">PROBLEMS</span>
                <div className="text-lg font-black text-white">{selectedCause.problemsAffected}</div>
                <span className="text-[9px] text-zinc-500 font-mono">Mapped Cascades</span>
              </div>
              <div className="p-3 rounded-xl bg-[#090B14] border border-white/[0.06] text-center">
                <span className="text-[9px] font-mono text-zinc-500 uppercase block mb-1">BOTTLENECKS</span>
                <div className="text-lg font-black text-white">{selectedCause.bottlenecksAffected}</div>
                <span className="text-[9px] text-zinc-500 font-mono">Active Choke Points</span>
              </div>
              <div className="p-3 rounded-xl bg-[#090B14] border border-white/[0.06] text-center">
                <span className="text-[9px] font-mono text-zinc-500 uppercase block mb-1">DEPENDENCIES</span>
                <div className="text-lg font-black text-white">{selectedCause.dependencyCount}</div>
                <span className="text-[9px] text-zinc-500 font-mono">Relational Edges</span>
              </div>
            </div>

            {/* Section 11 Required Flow: Problems → Bottlenecks → Stakeholders → Impacts → Opportunities */}
            <div className="space-y-3 pt-4 border-t border-white/[0.08]">
              <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                CAUSAL PROPAGATION FLOW (PROBLEMS → BOTTLENECKS → STAKEHOLDERS → IMPACTS → OPPORTUNITIES):
              </div>

              <div className="space-y-2 text-xs">
                {/* Problems */}
                <div className="p-2.5 rounded-xl bg-[#090B14] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-zinc-400 block mb-1">1. SAMPLE PROBLEMS TRIGGERED:</span>
                  <div className="flex flex-wrap gap-1">
                    {selectedCause.flowChain.problems.map((p, i) => (
                      <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.06]">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottlenecks */}
                <div className="p-2.5 rounded-xl bg-[#090B14] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-zinc-400 block mb-1">2. BOTTLENECKS FORMED:</span>
                  <div className="flex flex-wrap gap-1">
                    {selectedCause.flowChain.bottlenecks.map((b, i) => (
                      <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.06]">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impacts */}
                <div className="p-2.5 rounded-xl bg-[#090B14] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-zinc-400 block mb-1">3. DOWNSTREAM ECONOMIC IMPACT:</span>
                  <div className="flex flex-wrap gap-1">
                    {selectedCause.flowChain.impacts.map((imp, i) => (
                      <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-red-500/10 text-red-300 border border-red-500/20">
                        {imp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Opportunity */}
                <div className="p-3 rounded-xl bg-white/[0.06] border border-white/20">
                  <span className="text-[10px] font-mono text-white block mb-1 font-bold">4. HIGH-LEVERAGE OPPORTUNITY:</span>
                  <div className="text-xs font-bold text-white">
                    {selectedCause.flowChain.opportunity}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Economic Exposure: <strong className="text-white">{selectedCause.economicExposure}</strong></span>
            <span>Depth: <strong className="text-white">{selectedCause.propagationDepth}</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
