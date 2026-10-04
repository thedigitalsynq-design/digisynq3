import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GitMerge, ArrowRight, ArrowUpRight, ShieldCheck, 
  AlertTriangle, Layers, Cpu, Database, Network 
} from 'lucide-react';
import { TopographicBackground } from '../components/TopographicBackground';
import { EERGConvergenceVisual } from '../components/EERGConvergenceVisual';
import { ROOT_CAUSE_CLUSTERS, RootCauseCluster } from '../data/system_architecture_data';

export function RootCausesPage() {
  const [selectedClusterId, setSelectedClusterId] = useState<string>('RC-01');
  const activeCluster = ROOT_CAUSE_CLUSTERS.find((c) => c.id === selectedClusterId) || ROOT_CAUSE_CLUSTERS[0];

  return (
    <div className="relative min-h-screen bg-[#03040A] text-[#ECEEF5] pt-24 sm:pt-28 pb-20 px-4 sm:px-6">
      <TopographicBackground />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 bg-white/[0.05] border border-white/[0.08] px-2.5 py-1">
              05 — ROOT CAUSES
            </span>
            <span className="font-mono text-xs text-zinc-500">•</span>
            <span className="font-mono text-xs text-zinc-400">MANY PROBLEMS → FEWER ROOT CAUSES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-none">
            Many Surface Problems Come From One Systemic Failure.
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
            When you look at production complaints across casting, stages, grip trucks, completion bonds, and distribution, they appear like hundreds of disconnected grievances. But mathematical decomposition reveals they converge into just 4 systemic root causes.
          </p>
        </div>

        {/* Core Visual: The Convergence Engine */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase text-zinc-500 tracking-wider">CONVERGENCE PROOF</span>
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                Many Problems → Fewer Root Causes
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-400">4 Domain Funnels</span>
          </div>
          <EERGConvergenceVisual />
        </section>

        {/* 4 Structural Root Cause Clusters */}
        <section className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
            <div>
              <span className="font-mono text-xs uppercase text-zinc-500 tracking-wider">SYSTEMIC BREAKDOWNS</span>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-white">
                The 4 Systemic Root-Cause Clusters
              </h2>
            </div>
            <div className="font-mono text-xs text-zinc-400">
              Responsible for over 85% of preventable industry waste
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {ROOT_CAUSE_CLUSTERS.map((cluster) => {
              const isSelected = cluster.id === activeCluster.id;
              return (
                <button
                  key={cluster.id}
                  onClick={() => setSelectedClusterId(cluster.id)}
                  className={`p-5 text-left border transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white text-black border-white shadow-xl'
                      : 'bg-[#080B12] text-zinc-400 border-white/[0.06] hover:border-zinc-600 hover:text-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`font-mono text-xs font-bold px-2 py-0.5 ${isSelected ? 'bg-black text-white' : 'bg-white/[0.08] text-zinc-300'}`}>
                        {cluster.id}
                      </span>
                      <span className={`font-mono text-[10px] ${isSelected ? 'text-zinc-700' : 'text-zinc-500'}`}>
                        {cluster.surfaceProblemsCount} Problems
                      </span>
                    </div>
                    <h3 className={`text-base font-bold uppercase tracking-tight leading-tight ${isSelected ? 'text-black' : 'text-white'}`}>
                      {cluster.name}
                    </h3>
                  </div>

                  <div className={`text-xs mt-4 pt-3 border-t font-mono line-clamp-2 ${isSelected ? 'border-black/20 text-zinc-800' : 'border-white/[0.06] text-zinc-500'}`}>
                    {cluster.economicBlastRadius}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Cluster Breakdown */}
          <div className="p-6 sm:p-8 bg-[#090C15] border border-white/[0.08] space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                  CLUSTER SPECIFICATION: {activeCluster.id}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mt-1">
                  {activeCluster.name}
                </h3>
              </div>
              <div className="font-mono text-xs bg-red-950/30 border border-red-500/20 text-red-400 px-3 py-1.5 self-start md:self-auto">
                Blast Radius: {activeCluster.economicBlastRadius}
              </div>
            </div>

            <div className="text-sm text-zinc-300 leading-relaxed bg-black/40 p-4 border border-white/[0.04]">
              <span className="text-xs font-mono uppercase text-zinc-500 block mb-1">Theoretical Thesis:</span>
              {activeCluster.thesis}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block">
                  Failure Mechanism Across Counterparties:
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed bg-white/[0.02] border border-white/[0.06] p-4">
                  {activeCluster.systemicFailureMechanism}
                </p>

                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                    Impacted Operational Domains:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeCluster.impactedDomains.map((dom) => (
                      <span key={dom} className="text-xs font-mono bg-zinc-800 border border-zinc-700 text-zinc-200 px-2.5 py-1">
                        {dom}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block">
                  DigiSynq Asset-Light Intervention Architecture:
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed bg-emerald-950/15 border border-emerald-500/20 p-4">
                  {activeCluster.digisynqInterventionArchitecture}
                </p>

                <div className="p-4 bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <div className="text-xs font-mono text-zinc-400 flex items-center justify-between">
                    <span>SURFACE SYMPTOMS CONVERGED:</span>
                    <span className="text-white font-bold">{activeCluster.surfaceProblemsCount} distinct issues</span>
                  </div>
                  <div className="text-xs font-mono text-zinc-400 flex items-center justify-between">
                    <span>CORRESPONDING OPPORTUNITY:</span>
                    <Link to="/opportunities" className="text-emerald-400 hover:underline flex items-center gap-1">
                      View Opportunity Radar <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative Link to Opportunities & Network */}
        <div className="p-8 bg-[#090C15] border border-white/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">NEXT IN THE SYSTEM</span>
            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
              Systemic Problems Reveal Commercial Opportunities.
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Every mapped root cause represents billions of dollars in economic friction — and an immediate commercial opportunity for paying enterprise customers.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/opportunities"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-zinc-200 px-5 py-3 text-xs font-mono uppercase font-bold tracking-wider transition-colors"
            >
              <span>EXPLORE OPPORTUNITY RADAR</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/network"
              className="inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] px-5 py-3 text-xs font-mono uppercase font-semibold tracking-wider transition-colors"
            >
              <span>SEE ASSET-LIGHT NETWORK</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
