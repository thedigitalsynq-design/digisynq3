import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ArrowUpRight, ShieldCheck, AlertTriangle, 
  GitBranch, Layers, Cpu, Database, CheckCircle2, Sparkles, 
  RefreshCw, Sliders, Users, Film, DollarSign 
} from 'lucide-react';
import { TopographicBackground } from '../components/TopographicBackground';
import { EERGConvergenceVisual } from '../components/EERGConvergenceVisual';
import { EERGFlywheel } from '../components/EERGFlywheel';
import { FAILURE_PROPAGATION_CHAIN } from '../data/system_architecture_data';

export function HomePage() {
  const [fragmentationState, setFragmentationState] = useState<'FRAGMENTED' | 'SYNCHRONIZED'>('FRAGMENTED');
  const [activeModelStage, setActiveModelStage] = useState<number>(0);
  const [activeChainStep, setActiveChainStep] = useState<number>(0);

  // 10 Key Ecosystem Resources (Section 02)
  const ecosystemResources = [
    { name: 'Talent', fragmented: 'Trapped in agency silos & unverified availability', synchronized: 'Dynamic capacity indexed across guild rosters' },
    { name: 'Equipment', fragmented: 'Sitting on rental shelves unmonetized mid-week', synchronized: 'Real-time dark inventory routing & optical parity' },
    { name: 'Locations', fragmented: 'Lost due to permit friction & calendar overlaps', synchronized: 'Pre-cleared architectural network with municipal locks' },
    { name: 'Capital', fragmented: 'Frozen in bureaucratic milestone holding periods', synchronized: 'Telemetry-attested automated smart milestone escrow' },
    { name: 'Content', fragmented: 'B-roll & unused cuts abandoned in offline drives', synchronized: 'Transmedia adaptation & instant sync monetization' },
    { name: 'Technology', fragmented: 'Incompatible metadata schemas and lost ALE files', synchronized: 'Unified cryptographic checksum & color pipelines' },
    { name: 'Rights', fragmented: 'Stalemates between music supervisors & streamers', synchronized: 'Pre-cleared global multi-territory rights ledger' },
    { name: 'Distribution', fragmented: 'Rigid territorial windowing & missed festival slots', synchronized: 'Algorithmic platform buyer gap matching' },
    { name: 'Audience', fragmented: 'Generic social noise & speculative marketing spend', synchronized: 'Direct cultural affinity & viewing telemetry loop' },
    { name: 'Data', fragmented: 'Vanishes into deleted spreadsheets after project wrap', synchronized: 'Fed into EERG knowledge graph to prevent future waste' },
  ];

  // 6 Operating Model Stages (Section 04)
  const operatingStages = [
    {
      step: '01',
      name: 'DISCOVER',
      tagline: 'Identify People, Assets, Capabilities & Needs',
      desc: 'Traverse the decentralized entertainment landscape without owning physical inventory. Index verified guild credentials, dark stage days, camera optic serials, and production needs in real time.',
      outcome: 'Zero invisible capacity. Real-time ecosystem visibility.',
    },
    {
      step: '02',
      name: 'AGGREGATE',
      tagline: 'Bring Fragmented Information Into Structured Intelligence',
      desc: 'Convert informal phone trees, scattered PDFs, and private spreadsheets into unified, machine-readable graphs with standardized schemas and cryptographic verification.',
      outcome: 'Normalized telemetry replacing anecdotal gossip.',
    },
    {
      step: '03',
      name: 'CONNECT',
      tagline: 'Match Needs With the Right People, Resources & Opportunities',
      desc: 'Execute multi-party compatibility algorithms that align union rates, equipment prep dates, stage acoustic ratings, and location permits into one synchronized reservation lock.',
      outcome: 'Matches executed in 14 hours instead of 3 weeks.',
    },
    {
      step: '04',
      name: 'ORCHESTRATE',
      tagline: 'Coordinate Relationships, Dependencies, Schedules & Workflows',
      desc: 'Active execution governance after the contract is signed. Model schedule shockwaves, monitor mandatory guild rest covenants, and dynamically re-sequence scenes when variances occur.',
      outcome: 'A 2-hour set delay is halted before it cascades into a $2M disaster.',
    },
    {
      step: '05',
      name: 'MEASURE',
      tagline: 'Understand Performance, Utilization, Cost Leakage & Value',
      desc: 'Track decision-grade metrics: dark soundstage utilization yield, schedule cascade multipliers, and post-production turnover velocity. Every metric answers: What decision does this improve?',
      outcome: 'Empirical accountability across every dollar and day spent.',
    },
    {
      step: '06',
      name: 'MONETIZE',
      tagline: 'Turn Coordination, Intelligence & Outcomes Into Economic Value',
      desc: 'Transparent value capture: low transaction take-rates on dark capacity, workflow coordination subscriptions for studios, and enterprise EERG intelligence licenses for lenders.',
      outcome: 'High-margin asset-light revenue aligned strictly with saved client capital.',
    },
  ];

  // 11-Tier Root-Cause Chain (Section 06)
  const rootCauseChain = [
    { tier: '01', label: 'STAKEHOLDER', example: 'Lead Actor & Line Producer', detail: 'Key performers and fiscal leaders managing immovable shooting windows.' },
    { tier: '02', label: 'PROBLEM', example: 'Irregular Work & Delayed Casting', detail: 'Weeks lost during casting while unbudgeted holding fees accumulate.' },
    { tier: '03', label: 'BOTTLENECK', example: 'Talent Discovery & Verification Deficit', detail: 'No real-time registry connecting open roles to verified calendar availability.' },
    { tier: '04', label: 'IMMEDIATE CAUSE', example: 'Fragmented Databases & Unverified Profiles', detail: 'Casting relies on disparate websites, PDF resumes, and informal agent phone calls.' },
    { tier: '05', label: 'ROOT CAUSE', example: 'Information Fragmentation & Trust Deficit', detail: 'Systemic market failure: asset availability is invisible across company boundaries.' },
    { tier: '06', label: 'DEPENDENCIES', example: 'Shooting Schedule ↔ Soundstage ↔ Location Permit', detail: 'Actor availability locks dictate soundstage load-in and municipal street permits.' },
    { tier: '07', label: 'OTHER STAKEHOLDERS', example: 'Director, Crew Guilds, Rental Houses, Bond Co.', detail: 'When actor schedule shifts, 120 technicians and vendors suffer downstream chaos.' },
    { tier: '08', label: 'ECONOMIC IMPACT', example: '$2.8B+ Annual Waste in Cascade Delays', detail: 'Unrecoverable burn rate from idle soundstages, overtime, and rush VFX fees.' },
    { tier: '09', label: 'EXISTING WORKAROUND', example: 'Paying 300% Overtime & Emergency Standby', detail: 'Producers burn contingency budget to patch structural ecosystem disconnection.' },
    { tier: '10', label: 'SOLUTION GAP', example: 'Absence of Live Multi-Party Coordination Engine', detail: 'No living graph dynamically reroutes dependencies when a variance occurs.' },
    { tier: '11', label: 'OPPORTUNITY', example: 'Verified Talent Intelligence & Availability Exchange', detail: 'Enterprise subscription funded by studio physical production & bond guarantors.' },
  ];

  return (
    <div className="relative min-h-screen bg-[#03040A] text-[#ECEEF5] selection:bg-white selection:text-black">
      <TopographicBackground />

      {/* ============================================================ */}
      {/* SECTION 01 — THE QUESTION */}
      {/* ============================================================ */}
      <section className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6 max-w-6xl mx-auto border-b border-white/[0.08]">
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/[0.1] px-3 py-1 font-mono text-xs uppercase tracking-widest text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>01 — THE FOUNDATIONAL QUESTION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-[1.02]">
            What If the Entertainment Ecosystem Could See Itself?
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 font-sans leading-relaxed max-w-3xl">
            The people, resources, equipment, soundstages, workflows, distribution markets, and capital already exist. The industry does not lack talent or gear. The challenge is connecting them intelligently.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              to="/ecosystem"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-zinc-200 px-6 py-3.5 text-xs font-mono uppercase font-bold tracking-wider transition-colors"
            >
              <span>EXPLORE THE SYSTEM</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/eerg"
              className="inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] px-6 py-3.5 text-xs font-mono uppercase font-semibold tracking-wider transition-colors"
            >
              <span>TRACE ROOT-CAUSE GRAPH (EERG)</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 02 — THE PROBLEM: TOO MUCH EXISTS. TOO LITTLE IS CONNECTED. */}
      {/* ============================================================ */}
      <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-b border-white/[0.08] space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">02 — THE PROBLEM</span>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              Too Much Exists. Too Little Is Connected.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              When resources exist in artificial silos, they generate immense friction. Toggle below to compare the current fragmented reality against the DIGISYNQ synchronized ecosystem.
            </p>
          </div>

          <div className="flex items-center bg-[#080B12] border border-white/[0.1] p-1 self-start md:self-auto">
            <button
              onClick={() => setFragmentationState('FRAGMENTED')}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                fragmentationState === 'FRAGMENTED'
                  ? 'bg-red-950/60 text-red-300 border border-red-500/40 font-bold'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              Fragmented Reality
            </button>
            <button
              onClick={() => setFragmentationState('SYNCHRONIZED')}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                fragmentationState === 'SYNCHRONIZED'
                  ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/40 font-bold'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              Synchronized System
            </button>
          </div>
        </div>

        {/* 10 Resource Grid Visualizer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {ecosystemResources.map((res, idx) => (
            <div
              key={res.name}
              className={`p-4 border transition-all duration-300 ${
                fragmentationState === 'FRAGMENTED'
                  ? 'bg-[#0A0707] border-red-900/30 hover:border-red-500/40'
                  : 'bg-[#060D0A] border-emerald-900/30 hover:border-emerald-500/40'
              }`}
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.06]">
                <span className="font-mono text-[10px] text-zinc-500 uppercase">RESOURCE 0{idx + 1}</span>
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    fragmentationState === 'FRAGMENTED' ? 'bg-red-400' : 'bg-emerald-400'
                  }`}
                />
              </div>
              <h3 className="font-bold text-sm text-white uppercase tracking-tight">{res.name}</h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                {fragmentationState === 'FRAGMENTED' ? res.fragmented : res.synchronized}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 03 — THE IDEA: NOTHING IS WASTE. DISCONNECTED VALUE IS. */}
      {/* ============================================================ */}
      <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-b border-white/[0.08] space-y-12">
        <div className="space-y-4 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">03 — THE IDEA</span>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
            Nothing Is Waste. Disconnected Value Is.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            This is not an inspirational marketing slogan. It is an operational law. Value does not disappear; it degrades into waste when the connections between who owns it, who needs it, and where it is available break down.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { waste: 'Idle talent', value: 'Available capacity', desc: 'Performers between bookings become discovered capacity for rapid turnarounds.' },
            { waste: 'Idle equipment', value: 'Productive capacity', desc: 'Optics and lighting generate revenue mid-week instead of shelf depreciation.' },
            { waste: 'Unused locations', value: 'Revenue resources', desc: 'Civic landmarks and private estates unlock high-margin filming fees.' },
            { waste: 'Fragmented data', value: 'Systemic intelligence', desc: 'Isolated spreadsheets coalesce into an empirical root-cause knowledge graph.' },
            { waste: 'Unused content', value: 'Additional value', desc: 'Dailies and cut scenes power marketing campaigns and digital transmedia.' },
            { waste: 'Siloed relationships', value: 'Ecosystem network', desc: 'Independent vendors collaborate without parasitic agency markups.' },
            { waste: 'Unused telemetry', value: 'Decision intelligence', desc: 'Schedule variance history predicts and prevents future delay cascades.' },
            { waste: 'Failed workflows', value: 'Business opportunity', desc: 'Every production shock reveals a gap that a paying customer needs solved.' },
          ].map((pair, i) => (
            <div key={i} className="p-5 bg-[#080B12] border border-white/[0.06] flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">
                  TRANSFORMATION 0{i + 1}
                </div>
                <div className="text-xs font-mono mb-2">
                  <span className="text-red-400 line-through">{pair.waste}</span>
                  <span className="text-zinc-600 mx-1.5">→</span>
                  <span className="text-emerald-400 font-bold">{pair.value}</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed mt-2">{pair.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 04 — THE SYSTEM: DIGISYNQ CONNECTS THE DOTS */}
      {/* ============================================================ */}
      <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-b border-white/[0.08] space-y-10">
        <div className="space-y-3 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">04 — THE OPERATING SYSTEM</span>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
            DIGISYNQ Connects the Dots.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            A continuous 6-stage mechanism that converts decentralized resources into synchronized execution: Discover → Aggregate → Connect → Orchestrate → Measure → Monetize.
          </p>
        </div>

        {/* 6 Stage Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {operatingStages.map((stg, idx) => {
            const isSelected = idx === activeModelStage;
            return (
              <button
                key={stg.step}
                onClick={() => setActiveModelStage(idx)}
                className={`p-3.5 text-left border transition-all ${
                  isSelected
                    ? 'bg-white text-black border-white shadow-xl'
                    : 'bg-[#080B12] text-zinc-400 border-white/[0.06] hover:border-zinc-600 hover:text-white'
                }`}
              >
                <span className={`font-mono text-[10px] block mb-1 uppercase ${isSelected ? 'text-zinc-600' : 'text-zinc-500'}`}>
                  STAGE {stg.step}
                </span>
                <div className={`font-bold text-xs uppercase tracking-tight ${isSelected ? 'text-black' : 'text-white'}`}>
                  {stg.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep Detail */}
        {(() => {
          const currentStage = operatingStages[activeModelStage];
          return (
            <div className="p-6 sm:p-8 bg-[#090C15] border border-white/[0.08] space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.08]">
                <div>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                    STAGE {currentStage.step} OF 06: {currentStage.name}
                  </span>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight mt-1">
                    {currentStage.tagline}
                  </h3>
                </div>
                <div className="font-mono text-xs text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 px-3 py-1.5 self-start sm:self-auto">
                  {currentStage.outcome}
                </div>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed font-sans max-w-4xl">
                {currentStage.desc}
              </p>
            </div>
          );
        })()}
      </section>

      {/* ============================================================ */}
      {/* SECTION 05 — THE INTELLIGENCE: INTRODUCE EERG */}
      {/* ============================================================ */}
      <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-b border-white/[0.08] space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 p-8 bg-[#080B12] border border-white/[0.08]">
          <div className="space-y-4 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">05 — THE REASONING LAYER</span>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white leading-tight">
              But First, Understand Why the System Breaks.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Before you can connect resources, you must understand why the entertainment ecosystem gets stuck. That is the function of EERG (Entertainment Ecosystem Root-Cause Graph) — the intelligence and reasoning engine of DIGISYNQ.
            </p>
          </div>

          <div className="flex flex-col gap-3 shrink-0">
            <Link
              to="/eerg"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-zinc-200 px-6 py-3.5 text-xs font-mono uppercase font-bold tracking-wider transition-colors justify-center"
            >
              <span>EXPLORE EERG ENGINE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="text-[11px] font-mono text-zinc-500 text-center">
              160+ Stakeholders · 75 Root Causes · 50 Bottlenecks
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 06 — ROOT-CAUSE GRAPH: THE 11-TIER CHAIN */}
      {/* ============================================================ */}
      <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-b border-white/[0.08] space-y-8">
        <div className="space-y-3 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">06 — SYSTEMIC DECOMPOSITION</span>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
            The 11-Tier Root-Cause Chain
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Every operational breakdown follows an exact chain from surface stakeholder complaint down to paying customer opportunity. Select any tier to inspect the mechanism.
          </p>
        </div>

        {/* Horizontal Strip of 11 Tiers */}
        <div className="overflow-x-auto pb-4 custom-scrollbar">
          <div className="flex items-center gap-2 min-w-[950px]">
            {rootCauseChain.map((tier, idx) => {
              const isSelected = idx === activeChainStep;
              return (
                <button
                  key={tier.tier}
                  onClick={() => setActiveChainStep(idx)}
                  className={`p-3 text-left border flex-1 transition-all ${
                    isSelected
                      ? 'bg-white text-black border-white shadow-xl'
                      : 'bg-[#080B12] text-zinc-400 border-white/[0.06] hover:border-zinc-600 hover:text-white'
                  }`}
                >
                  <span className={`font-mono text-[9px] block mb-1 uppercase ${isSelected ? 'text-zinc-600' : 'text-zinc-500'}`}>
                    TIER {tier.tier}
                  </span>
                  <div className={`font-bold text-[11px] uppercase tracking-tight truncate ${isSelected ? 'text-black' : 'text-white'}`}>
                    {tier.label}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Tier Detail Panel */}
        {(() => {
          const currentTier = rootCauseChain[activeChainStep];
          return (
            <div className="p-6 sm:p-8 bg-[#090C15] border border-white/[0.08] grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-5 space-y-2">
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                  TIER {currentTier.tier} OF 11
                </span>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                  {currentTier.label}
                </h3>
                <div className="text-xs font-mono text-emerald-400 pt-1">
                  Case Sample: {currentTier.example}
                </div>
              </div>

              <div className="md:col-span-7 border-t md:border-t-0 md:border-l border-white/[0.08] pt-4 md:pt-0 md:pl-6 flex items-center">
                <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                  {currentTier.detail}
                </p>
              </div>
            </div>
          );
        })()}
      </section>

      {/* ============================================================ */}
      {/* SECTION 07 — MANY → FEWER: CONVERGENCE ENGINE */}
      {/* ============================================================ */}
      <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-b border-white/[0.08] space-y-8">
        <div className="space-y-3 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">07 — CONVERGENCE</span>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
            Many Problems → Fewer Root Causes
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Dozens of different complaints across casting, soundstages, grip gear, and distribution converge mathematically into just 4 systemic root causes.
          </p>
        </div>

        <EERGConvergenceVisual />
      </section>

      {/* ============================================================ */}
      {/* SECTION 08 — OPPORTUNITY: SYSTEMIC PROBLEMS REVEAL SYSTEMIC OPPORTUNITIES */}
      {/* ============================================================ */}
      <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-b border-white/[0.08] space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">08 — COMMERCIAL VALUE</span>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              Systemic Problems Reveal Systemic Opportunities.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              When a problem affects multiple stakeholders and causes millions in damage, someone is willing to pay to eliminate it.
            </p>
          </div>

          <Link
            to="/opportunities"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white underline self-start md:self-auto"
          >
            <span>View Opportunity Radar</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              id: 'OPP-01',
              title: 'Verified Talent Intelligence',
              cause: 'Information Fragmentation',
              buyer: 'Studio Physical Production & Casting Agencies',
              impact: 'Reduces casting search cycle from 4 weeks to 72 hours.',
            },
            {
              id: 'OPP-02',
              title: 'Dark Capacity Soundstage Routing',
              cause: 'Asset Under-Utilization',
              buyer: 'Soundstage Facilities & Independent Producers',
              impact: 'Monetizes unbooked gap weeks with zero ownership cost.',
            },
            {
              id: 'OPP-03',
              title: 'Living Dependency Cascade Sentinel',
              cause: 'Dependency Visibility Failure',
              buyer: 'Completion Bond Companies & Studio Risk Heads',
              impact: 'Halts set-side schedule shockwaves before contingency depletion.',
            },
          ].map((card) => (
            <div key={card.id} className="p-6 bg-[#080B12] border border-white/[0.06] flex flex-col justify-between space-y-4">
              <div>
                <span className="font-mono text-[10px] text-zinc-500 uppercase">{card.id} • {card.cause}</span>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight mt-1">{card.title}</h3>
                <p className="text-xs text-zinc-300 mt-2 leading-relaxed">{card.impact}</p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-zinc-400">
                <span className="text-zinc-500 block text-[9px] uppercase">Paying Customer:</span>
                <span className="text-white">{card.buyer}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 09 — ACTION: UNDERSTAND. CONNECT. ORCHESTRATE. MEASURE. */}
      {/* ============================================================ */}
      <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-b border-white/[0.08] space-y-8">
        <div className="space-y-3 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">09 — THE EXECUTION PILLARS</span>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
            Understand. Connect. Orchestrate. Measure.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Four coordinated disciplines that turn fragmented chaos into synchronized entertainment execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              num: '01',
              title: 'UNDERSTAND',
              desc: 'Trace root causes, bottlenecks, and failure propagation through the EERG knowledge graph.',
              link: '/eerg',
              cta: 'Explore EERG',
            },
            {
              num: '02',
              title: 'CONNECT',
              desc: 'Algorithmic matching across verified talent, dark soundstages, camera optics, and locations.',
              link: '/connect',
              cta: 'See Connect Protocol',
            },
            {
              num: '03',
              title: 'ORCHESTRATE',
              desc: 'Active execution governance, live schedule shockwave balancing, and variance resolution.',
              link: '/orchestrate',
              cta: 'See Orchestration',
            },
            {
              num: '04',
              title: 'MEASURE',
              desc: 'Continuous operational telemetry: dark capacity yield, cost leakage, and decision intelligence.',
              link: '/measure',
              cta: 'See Telemetry Metrics',
            },
          ].map((pillar) => (
            <div key={pillar.num} className="p-6 bg-[#080B12] border border-white/[0.06] flex flex-col justify-between space-y-4">
              <div>
                <span className="font-mono text-xs text-zinc-500 uppercase">{pillar.num} PILLAR</span>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight mt-1">{pillar.title}</h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{pillar.desc}</p>
              </div>
              <Link
                to={pillar.link}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white hover:text-zinc-300 font-semibold pt-3 border-t border-white/[0.06]"
              >
                <span>{pillar.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 10 — FINAL LOOP: THE CONTINUOUS FLYWHEEL & CTA */}
      {/* ============================================================ */}
      <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto space-y-12">
        <div className="space-y-3 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">10 — THE MASTER LOOP</span>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
            Understand → Connect → Orchestrate → Measure → Learn → Improve
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            DIGISYNQ is not a static directory or a one-time service. It is a self-reinforcing closed-loop system where every production generates telemetry that sharpens the intelligence graph for the entire entertainment industry.
          </p>
        </div>

        {/* EERG Closed Loop Flywheel Component */}
        <EERGFlywheel />

        {/* Master Final CTA Banner */}
        <div className="p-8 sm:p-12 bg-white text-black flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-700">
              OPERATIONAL ENGAGEMENT
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight leading-none">
              Explore the System or Start With an Active Problem.
            </h3>
            <p className="text-sm text-zinc-800 leading-relaxed font-sans">
              Connect directly into the asset-light mechanism: submit an urgent production breakdown, index idle equipment, or request an enterprise intelligence briefing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <Link
              to="/participate"
              className="bg-black text-white hover:bg-zinc-800 px-6 py-4 text-xs font-mono uppercase font-bold tracking-widest transition-colors text-center"
            >
              START WITH A PROBLEM →
            </Link>
            <Link
              to="/ecosystem"
              className="bg-transparent text-black border border-black hover:bg-black/5 px-6 py-4 text-xs font-mono uppercase font-bold tracking-widest transition-colors text-center"
            >
              EXPLORE ECOSYSTEM →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
