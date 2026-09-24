import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Cpu, Zap, Check } from 'lucide-react';

const GAPS = [
  {
    id: 'human',
    title: 'Technician & Crew Assembly',
    traditional: 'Productions traditionally hire through closed personal networks. Qualified cinematographers, gaffers, and sound artists experience unbooked lulls, while mid-tier productions struggle to identify available technical heads on short timelines.',
    synqSolution: 'DigiSynq indexes verified availability, specialized skillsets, and open dates across craft guilds in real time, matching productions to existing talent without talent agency markups.',
    metric: 'Direct roster locking from verified network availability',
  },
  {
    id: 'spatial',
    title: 'Soundstages & Virtual Volumes',
    traditional: 'Studio soundstages and LED volumes often sit unbooked between long-term tenant leases, while independent productions struggle to access professional stage infrastructure due to rigid multi-month lease mandates.',
    synqSolution: 'DigiSynq routes production demand to available partner facilities during turnaround windows, creating floor utilization for studios and accessible rates for productions.',
    metric: 'Dynamic access to available studio floor capacity',
  },
  {
    id: 'financial',
    title: 'Finishing & Gap Capital',
    traditional: 'Filmmakers often encounter financing bottlenecks during post-production when traditional credit lines are disconnected from real turnaround milestones, risking delivery stalls.',
    synqSolution: 'DigiSynq aligns finishing capital tranches with verified delivery milestones — unlocking funding systematically as camera raw, editorial cuts, and final mix turnovers are completed.',
    metric: 'Capital tranches unlocked upon verified delivery milestones',
  },
  {
    id: 'theatrical',
    title: 'Release Windowing & Exhibition',
    traditional: 'Independent and mid-budget titles frequently clash on identical release weekends against major studio franchise releases, resulting in rapid screen loss and compressed theatrical exposure.',
    synqSolution: 'DigiSynq coordinates release windowing with regional exhibitor circuits using pre-demand signals, securing defensible programming slots and targeted audience density.',
    metric: 'Targeted regional windowing aligned with audience demand',
  },
];

const ARCHITECTURE_LAYERS = [
  {
    num: '01',
    name: 'The Discovery Engine',
    subtitle: 'Indexing Existing Capacity',
    desc: 'We continuously identify available capacity across the filmmaking network — unbooked partner stages, verified crew availability, post-production bandwidth, and targeted screen windows.',
    icon: Compass,
  },
  {
    num: '02',
    name: 'The Routing Mesh',
    subtitle: 'Asset-Light Synchronization',
    desc: 'DigiSynq does not buy cameras or build soundstages. We serve as the operational coordination layer connecting existing industry resources at the precise instant of demand.',
    icon: Cpu,
  },
  {
    num: '03',
    name: 'Value Capture Protocol',
    subtitle: 'Orchestration-Driven Return',
    desc: 'Our economic model is tied to coordination and orchestration value. We generate return by resolving friction and keeping productions on schedule, not by accumulating heavy physical assets.',
    icon: Zap,
  },
];

export function TheSynqPage() {
  const [activeGapIndex, setActiveGapIndex] = useState(0);
  const activeGap = GAPS[activeGapIndex];

  return (
    <main className="bg-[#07080b] text-[#ECEEF5] selection:bg-white/20 selection:text-white">

      {/* ── 01. Header Hero ── */}
      <section className="pt-40 sm:pt-48 pb-20 sm:pb-28 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-zinc-400 mb-8 tracking-wide">
            <span>The Synq Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] [letter-spacing:-0.035em] mb-8">
            The codex of cinema<br />
            synchronization.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-3xl font-normal mb-10">
            Cinema possesses immense talent, cutting-edge facilities, and active capital. But these forces operate in isolated silos. DigiSynq is an asset-light coordination layer that aligns existing industry capacity with production demand — without requiring DigiSynq to own physical infrastructure.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/start"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#06080d] hover:bg-white/90 font-medium text-sm tracking-wide transition-all duration-200 active:scale-95 shadow-sm"
            >
              <span>Start a synq</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#workflow-comparison"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] text-zinc-300 font-medium text-sm transition-all duration-200"
            >
              <span>Compare operating models</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 02. Traditional vs. Asset-Light Model Comparison ── */}
      <section id="workflow-comparison" className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold text-zinc-400 tracking-wider uppercase mb-2 block">
            Structural Difference
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white [letter-spacing:-0.025em] mb-4">
            Two distinct operating approaches.
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            The conventional model relies on fragmented manual sourcing. DigiSynq introduces an asset-light orchestration layer that routes production demand to existing capacity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Traditional Workflow Card */}
          <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.06] bg-[#090b10] flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase block mb-2">Conventional Model</span>
              <h3 className="text-xl font-semibold text-white mb-4">Fragmented Individual Sourcing</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Producers assemble each element through manual phone trees and siloed negotiations. Delays in one department cascade across soundstages and post facilities.
              </p>
              
              {/* Flow Sequence */}
              <div className="space-y-2 text-xs font-mono text-zinc-400 border-l border-white/10 pl-4 py-1">
                <div>Production Demand</div>
                <div className="text-zinc-600">↓ Individually sourced resources</div>
                <div>Fragmented Department Coordination</div>
                <div className="text-zinc-600">↓ Delays & unbooked stage days</div>
                <div className="text-zinc-300">Stalled Delivery & Higher Holding Costs</div>
              </div>
            </div>
            <div className="pt-4 border-t border-white/[0.06] text-xs text-zinc-500">
              High coordination friction • Slower turnaround
            </div>
          </div>

          {/* DigiSynq Model Card */}
          <div className="p-8 sm:p-10 rounded-3xl border border-emerald-500/20 bg-[#090b10] flex flex-col justify-between space-y-6 relative">
            <div className="absolute top-6 right-6">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/30">
                Asset-Light
              </span>
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase block mb-2">DigiSynq Model</span>
              <h3 className="text-xl font-semibold text-white mb-4">Orchestrated Capacity Routing</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                DigiSynq acts as a neutral coordination layer, discovering and matching existing industry capacity with verified production requirements.
              </p>
              
              {/* Flow Sequence */}
              <div className="space-y-2 text-xs font-mono text-zinc-300 border-l border-emerald-500/30 pl-4 py-1">
                <div>Production Demand</div>
                <div className="text-emerald-400">↓ DigiSynq coordination layer</div>
                <div>Existing Ecosystem Capacity (Stages, Crew, Post)</div>
                <div className="text-emerald-400">↓ Structured milestone covenants</div>
                <div className="text-white font-medium">Coordinated Execution & On-Schedule Release</div>
              </div>
            </div>
            <div className="pt-4 border-t border-white/[0.06] text-xs text-emerald-400 font-medium">
              Zero heavy asset ownership • Network flexibility
            </div>
          </div>
        </div>

        {/* ── 03. The 4 Structural Capacity Gaps ── */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-zinc-400 tracking-wider uppercase mb-2 block">
            Systemic Gaps
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white [letter-spacing:-0.025em] mb-4">
            Where cinema leaks capacity.
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            The resources to produce extraordinary cinema exist today across the ecosystem. What has been missing is the coordination layer.
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
        <div className="p-8 sm:p-12 rounded-3xl border border-white/[0.08] bg-[#090b10] grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <span className="text-xs font-mono text-zinc-500 uppercase">Conventional Approach</span>
            <h3 className="text-xl font-bold text-white tracking-tight">{activeGap.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{activeGap.traditional}</p>
          </div>

          <div className="space-y-4 md:border-l md:border-white/[0.06] md:pl-10">
            <span className="text-xs font-mono text-emerald-400 uppercase">DigiSynq Coordinated Solution</span>
            <p className="text-sm text-zinc-200 leading-relaxed">{activeGap.synqSolution}</p>
            <div className="pt-4 border-t border-white/[0.06] text-xs text-zinc-400 flex items-center justify-between">
              <span className="text-zinc-500">Structural Outcome:</span>
              <span className="text-emerald-400 font-medium">{activeGap.metric}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. Architecture Layers ── */}
      <section id="architecture-layers" className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold text-zinc-400 tracking-wider uppercase mb-2 block">
            System Topology
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white [letter-spacing:-0.025em] mb-4">
            The three operational layers.
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            How DigiSynq translates distributed industry capacity into predictable, scalable production velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARCHITECTURE_LAYERS.map((layer) => {
            const Icon = layer.icon;
            return (
              <div
                key={layer.num}
                className="p-8 sm:p-10 rounded-3xl border border-white/[0.06] bg-[#090b10] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-300 mb-8">
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
      <section className="py-32 sm:py-40 px-6 sm:px-8 max-w-4xl mx-auto text-center border-t border-white/[0.06]">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
          Ready to eliminate coordination friction?
        </h2>
        <p className="text-base text-zinc-400 max-w-lg mx-auto leading-relaxed mb-10">
          Whether you are packaging a script, balancing stage capacity, or seeking milestone-tied finishing capital.
        </p>
        <Link
          to="/start"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#06080d] hover:bg-white/90 font-medium text-sm tracking-wide transition-all duration-200 active:scale-95 shadow-sm"
        >
          <span>Start a synq</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

    </main>
  );
}
