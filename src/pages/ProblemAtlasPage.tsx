import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  AlertTriangle, Filter, Search, ArrowRight, ArrowUpRight, 
  ShieldCheck, Layers, GitBranch, Sparkles 
} from 'lucide-react';
import { TopographicBackground } from '../components/TopographicBackground';
import { FailurePropagationVisual } from '../components/FailurePropagationVisual';
import { PROBLEM_ATLAS_ITEMS, ProblemAtlasItem, EcosystemLayerId } from '../data/system_architecture_data';

export function ProblemAtlasPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLayer, setSelectedLayer] = useState<string>('ALL');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('ALL');
  const [selectedProblemType, setSelectedProblemType] = useState<string>('ALL');

  const filteredProblems = useMemo(() => {
    return PROBLEM_ATLAS_ITEMS.filter((item) => {
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.stakeholder.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.rootCauseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.economicImpact.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLayer = selectedLayer === 'ALL' || item.layer === selectedLayer;
      const matchesSeverity = selectedSeverity === 'ALL' || item.severity === selectedSeverity;
      const matchesType = selectedProblemType === 'ALL' || item.problemType === selectedProblemType;

      return matchesSearch && matchesLayer && matchesSeverity && matchesType;
    });
  }, [searchQuery, selectedLayer, selectedSeverity, selectedProblemType]);

  return (
    <div className="relative min-h-screen bg-[#03040A] text-[#ECEEF5] pt-24 sm:pt-28 pb-20 px-4 sm:px-6">
      <TopographicBackground />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 bg-white/[0.05] border border-white/[0.08] px-2.5 py-1">
              04 — PROBLEM ATLAS
            </span>
            <span className="font-mono text-xs text-zinc-500">•</span>
            <span className="font-mono text-xs text-zinc-400">WHAT PROBLEMS EXIST</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-none">
            Empirical Catalog of Entertainment Operational Breakdowns.
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
            Entertainment friction is not random bad luck. Every delayed call sheet, blown budget line, unbooked soundstage, and contested rights release is the direct symptom of structural ecosystem disconnection. Explore the verified failure points below.
          </p>
        </div>

        {/* Section: Interactive Failure Propagation Chain */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase text-zinc-500 tracking-wider">SYSTEM DYNAMICS</span>
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                Failure Propagation Chain
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-400">10-Node Blast Radius</span>
          </div>
          <FailurePropagationVisual />
        </section>

        {/* Section: Filterable Problem Atlas Directory */}
        <section className="space-y-6 pt-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
            <div>
              <span className="font-mono text-xs uppercase text-zinc-500 tracking-wider">TAXONOMIC REPOSITORY</span>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-white">
                Filterable Problem Directory
              </h2>
            </div>
            <div className="font-mono text-xs text-zinc-400">
              Showing <span className="text-white font-bold">{filteredProblems.length}</span> of {PROBLEM_ATLAS_ITEMS.length} Recorded Issues
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-[#080B12] border border-white/[0.08] p-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search problem, stakeholder, root cause..."
                className="w-full bg-[#0D111C] border border-white/[0.08] text-xs font-mono text-white placeholder-zinc-500 pl-9 pr-3 py-2.5 focus:outline-none focus:border-white"
              />
            </div>

            {/* Layer Filter */}
            <div>
              <select
                value={selectedLayer}
                onChange={(e) => setSelectedLayer(e.target.value)}
                className="w-full bg-[#0D111C] border border-white/[0.08] text-xs font-mono text-zinc-300 px-3 py-2.5 focus:outline-none focus:border-white"
              >
                <option value="ALL">All Ecosystem Layers</option>
                <option value="CREATION">Layer: Creation</option>
                <option value="PRODUCTION">Layer: Production</option>
                <option value="COMMERCIAL">Layer: Commercial</option>
                <option value="INFRASTRUCTURE">Layer: Infrastructure</option>
                <option value="CONSUMPTION">Layer: Consumption</option>
              </select>
            </div>

            {/* Severity Filter */}
            <div>
              <select
                value={selectedSeverity}
                onChange={(e) => setSelectedSeverity(e.target.value)}
                className="w-full bg-[#0D111C] border border-white/[0.08] text-xs font-mono text-zinc-300 px-3 py-2.5 focus:outline-none focus:border-white"
              >
                <option value="ALL">All Severities</option>
                <option value="Critical">Severity: Critical</option>
                <option value="High">Severity: High</option>
                <option value="Medium">Severity: Medium</option>
              </select>
            </div>

            {/* Problem Type Filter */}
            <div>
              <select
                value={selectedProblemType}
                onChange={(e) => setSelectedProblemType(e.target.value)}
                className="w-full bg-[#0D111C] border border-white/[0.08] text-xs font-mono text-zinc-300 px-3 py-2.5 focus:outline-none focus:border-white"
              >
                <option value="ALL">All Problem Types</option>
                <option value="Operational">Type: Operational</option>
                <option value="Financial">Type: Financial</option>
                <option value="Contractual">Type: Contractual</option>
                <option value="Technical">Type: Technical</option>
                <option value="Coordination">Type: Coordination</option>
              </select>
            </div>
          </div>

          {/* Problems List */}
          <div className="grid grid-cols-1 gap-4">
            {filteredProblems.map((prob) => (
              <div
                key={prob.id}
                className="p-6 bg-[#080B12] border border-white/[0.06] hover:border-white/[0.15] transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="font-mono text-xs font-bold text-white px-2 py-0.5 bg-white/[0.08]">
                      {prob.id}
                    </span>
                    <span className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border ${
                      prob.severity === 'Critical' 
                        ? 'bg-red-950/40 text-red-400 border-red-500/30' 
                        : prob.severity === 'High'
                        ? 'bg-amber-950/40 text-amber-400 border-amber-500/30'
                        : 'bg-zinc-800 text-zinc-300 border-zinc-700'
                    }`}>
                      {prob.severity} SEVERITY
                    </span>
                    <span className="font-mono text-[10px] text-zinc-400 px-2 py-0.5 bg-white/[0.03] border border-white/[0.06]">
                      {prob.layer}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-500">
                      • {prob.problemType}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-zinc-500">STATUS:</span>
                    <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest bg-emerald-950/30 border border-emerald-500/20 px-2 py-0.5">
                      {prob.evidenceStatus}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                    {prob.title}
                  </h3>
                  <div className="text-xs font-mono text-zinc-400 mt-1">
                    Primary Stakeholder: <span className="text-zinc-200">{prob.stakeholder}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-black/40 p-4 border border-white/[0.03]">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">Economic Damage:</span>
                    <p className="text-xs text-red-300 font-mono leading-relaxed">{prob.economicImpact}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">Existing Inadequate Workaround:</span>
                    <p className="text-xs text-zinc-400 leading-relaxed">{prob.existingWorkaround}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">System Solution Gap:</span>
                    <p className="text-xs text-zinc-300 leading-relaxed">{prob.solutionGap}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-zinc-500">CONVERGES TO ROOT CAUSE:</span>
                    <Link 
                      to="/root-causes"
                      className="text-white hover:text-zinc-300 underline font-semibold flex items-center gap-1"
                    >
                      {prob.rootCauseName} ({prob.rootCauseId})
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <Link
                    to="/participate"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
                  >
                    <span>Triage this problem in your production</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Narrative Link to Root Causes & Opportunities */}
        <div className="p-8 bg-[#090C15] border border-white/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">NEXT IN THE SYSTEM</span>
            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
              Dozens of Surface Breakdowns Trace to Just 4 Systemic Root Causes.
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Stop treating symptoms set by set. Understand the structural failures that create them, or explore commercial opportunities designed to resolve them.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/root-causes"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-zinc-200 px-5 py-3 text-xs font-mono uppercase font-bold tracking-wider transition-colors"
            >
              <span>TRACE ROOT CAUSES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/opportunities"
              className="inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] px-5 py-3 text-xs font-mono uppercase font-semibold tracking-wider transition-colors"
            >
              <span>EXPLORE OPPORTUNITIES</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
