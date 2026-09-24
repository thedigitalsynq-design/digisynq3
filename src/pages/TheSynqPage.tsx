import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Cpu, Zap, Activity, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';

const GAPS = [
  {
    id: 'human',
    title: 'Creative Talent & Crew Assembly',
    category: 'Human Layer',
    traditional: 'Productions assemble key department heads through closed personal phone trees. Qualified cinematographers, sound designers, and virtual production leads sit on unbooked lulls, while projects experience multi-week assembly delays.',
    synqSolution: 'DigiSynq indexes verified availability calendars and craft specializations across guilds, matching projects directly to available talent with standardized rate parity and turnkey contracts.',
    metric: '< 48h direct roster locking',
  },
  {
    id: 'spatial',
    title: 'Studios, Stages & LED Volumes',
    category: 'Physical Infrastructure',
    traditional: 'Soundstages, LED virtual production volumes, and scoring stages sit dark between multi-month tenant leases, while incoming productions face rigid long-term booking mandates.',
    synqSolution: 'DigiSynq routes active productions into dark days and turnaround slots at partner facilities, unlocking incremental revenue for stage operators and dynamic access for productions.',
    metric: '100% incremental floor yield',
  },
  {
    id: 'financial',
    title: 'Finishing & Milestone Capital',
    category: 'Capital Flow',
    traditional: 'Post-production stalls during VFX, final color grading, and Dolby Atmos mixing because traditional credit tranches are decoupled from technical deliverables.',
    synqSolution: 'DigiSynq structures finishing capital disbursements strictly against verified delivery milestones and cloud dailies telemetry, protecting investors from speculative budget drift.',
    metric: 'Milestone-anchored security',
  },
  {
    id: 'theatrical',
    title: 'Release Windows & Audience Density',
    category: 'Audience Reach',
    traditional: 'Independent titles and new formats clash blindly against studio tentpoles on identical weekends, leading to compressed screen counts and rapid exhibition decay.',
    synqSolution: 'DigiSynq coordinates targeted screening clusters and regional event windows using pre-demand density telemetry to guarantee defensible audience exposure.',
    metric: '3.4x localized opening efficiency',
  },
];

const ARCHITECTURE_LAYERS = [
  {
    num: '01',
    name: 'The Discovery Engine',
    subtitle: 'Indexing Distributed Capacity',
    desc: 'Continuously monitors verified availability across the global entertainment network: unbooked partner soundstages, certified guild department heads, and certified post-production facilities.',
    icon: Compass,
  },
  {
    num: '02',
    name: 'The Routing Mesh',
    subtitle: 'Asset-Light Synchronization',
    desc: 'Owns zero physical stages or camera trucks. Routes active entertainment demand directly into existing, pre-verified partner capacity at the precise instant of scheduling need.',
    icon: Cpu,
  },
  {
    num: '03',
    name: 'The Governance Protocol',
    subtitle: 'Milestone-Tied Covenants',
    desc: 'Standardizes turnaround covenants, cloud telemetry, and milestone-backed capital release. Eliminates opaque broker markups and keeps complex multi-stakeholder productions on schedule.',
    icon: ShieldCheck,
  },
];

export function TheSynqPage() {
  const [activeGapIndex, setActiveGapIndex] = useState(0);
  const activeGap = GAPS[activeGapIndex];

  return (
    <main className="bg-[#07080b] text-[#ECEEF5] selection:bg-white/20 selection:text-white min-h-screen">

      {/* ── 01. Header Hero ── */}
      <section className="pt-40 sm:pt-48 pb-20 sm:pb-28 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-zinc-300 mb-8 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono text-zinc-400">THE SYNQ</span>
            <span className="text-zinc-600">//</span>
            <span className="text-white font-medium">Architecture &amp; Orchestration Codex</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] [letter-spacing:-0.035em] mb-8">
            The operating system<br />
            <span className="text-zinc-400 font-light">for entertainment capacity.</span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-3xl font-normal mb-10">
            Entertainment possesses immense creative genius, cutting-edge facilities, and active capital. DigiSynq is the asset-light coordination layer that aligns existing industry capacity with entertainment demand — without requiring DigiSynq to hold balance-sheet real estate or camera equipment debt.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/start"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#06080d] hover:bg-zinc-200 font-medium text-sm tracking-wide transition-all duration-200 active:scale-95 shadow-sm"
            >
              <span>Initiate a Synq</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#workflow-comparison"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] text-zinc-300 font-medium text-sm transition-all duration-200"
            >
              <span>Compare Operating Models</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 02. Traditional vs. Asset-Light Model Comparison ── */}
      <section id="workflow-comparison" className="py-20 sm:py-28 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 block">
            Comparative Architecture
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white [letter-spacing:-0.025em] mb-4">
            Two distinct operating models.
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            The conventional model relies on fragmented phone trees and unilateral risk. DigiSynq provides an asset-light orchestration layer routing demand to verified capacity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Traditional Workflow Card */}
          <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.06] bg-[#090b10] flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase block mb-2">Conventional Model</span>
              <h3 className="text-xl font-semibold text-white mb-4">Fragmented Individual Sourcing</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                Producers assemble each element through closed phone trees and isolated negotiations. Unbooked stage dark time and department delays cascade across the schedule.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-zinc-400">
                  <span className="w-5 h-5 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center font-mono text-[10px] text-zinc-500 shrink-0">1</span>
                  <span>Demand originates in isolation</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-zinc-400">
                  <span className="w-5 h-5 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center font-mono text-[10px] text-zinc-500 shrink-0">2</span>
                  <span>Siloed sourcing through agency middlemen</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-zinc-400">
                  <span className="w-5 h-5 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center font-mono text-[10px] text-zinc-500 shrink-0">3</span>
                  <span>Dark stage days and turnover schedule drift</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-zinc-300 font-medium">
                  <span className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-mono text-[10px] text-zinc-300 shrink-0">4</span>
                  <span>Budget overruns &amp; predatory bridge debt</span>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-zinc-500">
              High friction • Capital leakage
            </div>
          </div>

          {/* DigiSynq Model Card */}
          <div className="p-8 sm:p-10 rounded-3xl border border-emerald-500/25 bg-[#090b10] flex flex-col justify-between space-y-6 relative">
            <div className="absolute top-6 right-6">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/30">
                Asset-Light
              </span>
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase block mb-2">DigiSynq Model</span>
              <h3 className="text-xl font-semibold text-white mb-4">Orchestrated Capacity Routing</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                DigiSynq dynamically matches production parameters to verified partner infrastructure, guild craft leaders, and milestone covenants.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-zinc-300">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-mono text-[10px] text-emerald-400 shrink-0">1</span>
                  <span>Demand parameters &amp; constraints ingested</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-zinc-300">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-mono text-[10px] text-emerald-400 shrink-0">2</span>
                  <span>Dynamic routing to unbooked partner capacity</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-zinc-300">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-mono text-[10px] text-emerald-400 shrink-0">3</span>
                  <span>Synq Labs sandbox pre-flight &amp; covenant governance</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-emerald-300 font-medium">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center font-mono text-[10px] text-emerald-300 shrink-0">4</span>
                  <span>On-schedule delivery &amp; milestone capital release</span>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-emerald-400 font-medium">
              Zero fixed asset debt • Turnkey agility
            </div>
          </div>
        </div>

        {/* ── 03. The 4 Structural Capacity Gaps ── */}
        <div id="use-cases" className="max-w-2xl mb-10 scroll-mt-24">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 block">
            Systemic Gaps &amp; Use Cases
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white [letter-spacing:-0.025em] mb-4">
            Where entertainment leaks capacity.
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            The resources to produce extraordinary entertainment exist today across the ecosystem. What has been missing is the coordination layer.
          </p>
        </div>

        {/* Gap Selector Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {GAPS.map((gap, i) => (
            <button
              key={gap.id}
              onClick={() => setActiveGapIndex(i)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                i === activeGapIndex
                  ? 'bg-white text-[#06080d] shadow-sm font-semibold'
                  : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]'
              }`}
            >
              {gap.title}
            </button>
          ))}
        </div>

        {/* Gap Deep-Dive Card */}
        <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.08] bg-[#090b10] grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <span className="text-xs font-mono text-zinc-500 uppercase">{activeGap.category} // Conventional</span>
            <h3 className="text-xl font-bold text-white tracking-tight">{activeGap.title}</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{activeGap.traditional}</p>
          </div>

          <div className="space-y-4 md:border-l md:border-white/[0.06] md:pl-8">
            <span className="text-xs font-mono text-emerald-400 uppercase">DigiSynq Resolution</span>
            <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">{activeGap.synqSolution}</p>
            <div className="pt-4 border-t border-white/[0.06] text-xs text-zinc-400 flex items-center justify-between">
              <span className="text-zinc-500 font-mono text-[11px]">Validated Metric:</span>
              <span className="text-emerald-400 font-mono font-medium">{activeGap.metric}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. Architecture Layers ── */}
      <section id="capabilities" className="py-20 sm:py-28 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06] scroll-mt-24">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 block">
            System Topology
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white [letter-spacing:-0.025em] mb-4">
            The three operational layers.
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            How DigiSynq translates distributed entertainment capacity into predictable, scalable production velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARCHITECTURE_LAYERS.map((layer) => {
            const Icon = layer.icon;
            return (
              <div
                key={layer.num}
                className="p-8 rounded-3xl border border-white/[0.06] bg-[#090b10] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-300 mb-6">
                    <Icon size={18} />
                  </div>
                  <span className="text-xs font-mono text-zinc-500 mb-2 block">{layer.num} // LAYER</span>
                  <h3 className="text-lg font-semibold text-white mb-1">{layer.name}</h3>
                  <div className="text-xs text-zinc-400 mb-4">{layer.subtitle}</div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{layer.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 05. Final Invitation ── */}
      <section className="py-28 sm:py-36 px-6 sm:px-8 max-w-4xl mx-auto text-center border-t border-white/[0.06]">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
          Ready to eliminate coordination friction?
        </h2>
        <p className="text-base text-zinc-400 max-w-lg mx-auto leading-relaxed mb-10">
          Have an entertainment project, resource requirement, or capacity opportunity? Start a Synq and tell us what needs to be connected.
        </p>
        <Link
          to="/start"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#06080d] hover:bg-zinc-200 font-medium text-sm tracking-wide transition-all duration-200 active:scale-95 shadow-sm"
        >
          <span>Initiate a Synq</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

    </main>
  );
}
