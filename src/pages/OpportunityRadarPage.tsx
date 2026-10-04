import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, DollarSign, ArrowRight, ArrowUpRight, 
  ShieldCheck, AlertTriangle, Layers, Building, Users 
} from 'lucide-react';
import { TopographicBackground } from '../components/TopographicBackground';
import { OPPORTUNITY_RADAR_ITEMS, OpportunityRadarItem, EvidenceStatus } from '../data/system_architecture_data';

export function OpportunityRadarPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const filteredOpportunities = OPPORTUNITY_RADAR_ITEMS.filter((opp) => {
    if (selectedFilter === 'ALL') return true;
    return opp.rootCauseName.toLowerCase().includes(selectedFilter.toLowerCase());
  });

  return (
    <div className="relative min-h-screen bg-[#03040A] text-[#ECEEF5] pt-24 sm:pt-28 pb-20 px-4 sm:px-6">
      <TopographicBackground />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 bg-white/[0.05] border border-white/[0.08] px-2.5 py-1">
              06 — OPPORTUNITY RADAR
            </span>
            <span className="font-mono text-xs text-zinc-500">•</span>
            <span className="font-mono text-xs text-zinc-400">WHERE TO INTERVENE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-none">
            Turning Systemic Friction Into High-Yield Commercial Solutions.
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
            DIGISYNQ does not build products based on speculative tech trends. Every commercial opportunity below is anchored to a verified entertainment root cause, maps real economic damage, identifies who currently loses money, and establishes which paying customer has the dedicated budget to fund the solution.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-white/[0.08]">
          <span className="font-mono text-xs text-zinc-500 mr-2 uppercase">Filter by Root Cause:</span>
          {['ALL', 'Information', 'Workflow', 'Trust', 'Dependency'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`text-xs font-mono uppercase tracking-wider px-3 py-1.5 border transition-colors ${
                selectedFilter === filter
                  ? 'bg-white text-black border-white font-bold'
                  : 'bg-[#080B12] text-zinc-400 border-white/[0.08] hover:text-white hover:border-zinc-600'
              }`}
            >
              {filter === 'ALL' ? 'All Root Causes' : filter}
            </button>
          ))}
        </div>

        {/* Opportunity Cards Grid */}
        <div className="space-y-8">
          {filteredOpportunities.map((opp) => (
            <div
              key={opp.id}
              className="p-6 sm:p-8 bg-[#080B12] border border-white/[0.08] hover:border-white/[0.2] transition-all space-y-6"
            >
              {/* Header Strip: ID, Title, Status & Confidence */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="font-mono text-xs font-bold bg-white text-black px-2 py-0.5">
                      {opp.id}
                    </span>
                    <span className="font-mono text-xs text-zinc-400 px-2 py-0.5 bg-white/[0.04] border border-white/[0.08]">
                      ROOT CAUSE: {opp.rootCauseName} ({opp.rootCauseId})
                    </span>
                    <span className="font-mono text-[10px] text-zinc-400 bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 uppercase tracking-wider">
                      Confidence: {opp.confidence}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-white mt-1">
                    {opp.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 self-start md:self-auto font-mono text-xs bg-white/[0.03] border border-white/[0.08] px-3 py-1.5">
                  <span className="text-zinc-500">VALIDATION STATUS:</span>
                  <span className="text-white font-bold uppercase tracking-wider">{opp.evidenceStatus}</span>
                </div>
              </div>

              {/* The Diagnostic Chain: Root Cause -> Problems -> Damage -> Workaround -> Gap */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-black/40 p-4 border border-white/[0.04]">
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">Quantified Economic Damage:</span>
                  <p className="text-xs sm:text-sm text-red-300 font-mono leading-relaxed">{opp.economicDamage}</p>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">Current Fragmented Workaround:</span>
                  <p className="text-xs text-zinc-400 leading-relaxed">{opp.existingWorkaround}</p>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">System Solution Gap:</span>
                  <p className="text-xs text-zinc-300 leading-relaxed">{opp.solutionGap}</p>
                </div>
              </div>

              {/* The Opportunity & Commercial Realization */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#0B0E17] border border-white/[0.06] p-5">
                <div className="lg:col-span-7 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block">
                    Synthesized Solution Mechanism:
                  </span>
                  <p className="text-sm text-zinc-200 leading-relaxed font-sans">
                    {opp.potentialSolution}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
                    <span>AFFECTED:</span>
                    {opp.stakeholdersAffected.map((stk) => (
                      <span key={stk} className="bg-zinc-800 text-zinc-300 px-2 py-0.5 border border-zinc-700">
                        {stk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/[0.06] pt-4 lg:pt-0 lg:pl-6 space-y-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                      Target Paying Customer:
                    </span>
                    <p className="text-xs sm:text-sm text-white font-bold mt-0.5">
                      {opp.potentialPayingCustomer}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                      Dedicated Budget Owner:
                    </span>
                    <p className="text-xs font-mono text-zinc-300 mt-0.5">
                      {opp.customerBudgetOwner}
                    </p>
                  </div>

                  <Link
                    to="/participate"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase font-bold tracking-wider text-black bg-white hover:bg-zinc-200 px-4 py-2 mt-2 transition-colors w-full justify-center"
                  >
                    <span>CO-DEVELOP / DEPLOY THIS OPPORTUNITY</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Narrative Link to Network & Connect */}
        <div className="p-8 bg-[#090C15] border border-white/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">NEXT IN THE SYSTEM</span>
            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
              Executing Opportunities Requires an Asset-Light Network.
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              We do not need to own millions of dollars of camera gear or real estate to solve these problems. See how our asset-light network coordinates existing ecosystem resources.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/network"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-zinc-200 px-5 py-3 text-xs font-mono uppercase font-bold tracking-wider transition-colors"
            >
              <span>SEE ASSET-LIGHT NETWORK</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/connect"
              className="inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] px-5 py-3 text-xs font-mono uppercase font-semibold tracking-wider transition-colors"
            >
              <span>SEE HOW WE CONNECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
