import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Cpu, Zap, Check } from 'lucide-react';

const GAPS = [
  {
    id: 'human',
    title: 'Technician & Talent Blindspots',
    traditional: 'Producers hire through closed personal phone trees. Elite cinematographers, gaffers, and sound artists sit unbooked while mid-tier productions struggle for technical competency.',
    synqSolution: 'Dynamic Availability Mesh indexes verified skills, union credits, and open dates in real time, matching projects without talent agency markups.',
    metric: '3.2 weeks saved per pre-production cycle',
  },
  {
    id: 'spatial',
    title: 'Idle Soundstages & LED Volumes',
    traditional: '41% of studio floor capacity sits dark between major tentpoles due to inflexible multi-month lease mandates.',
    synqSolution: 'Fractional Stage Liquidity: DigiSynq coordinates turnaround sharing and burst rentals across independent and mid-tier films.',
    metric: '$180K average reduction in stage carrying spend',
  },
  {
    id: 'financial',
    title: 'Predatory Gap & Finishing Capital',
    traditional: 'Filmmakers surrender 35–50% backend equity or take high-interest mezzanine bridge debt just to complete sound mix, color, and VFX.',
    synqSolution: 'Milestone-Tied Syndication: Capital tranches unlocked upon verified delivery of camera raw, dailies, and color turnovers.',
    metric: '0% predatory equity dilution',
  },
  {
    id: 'theatrical',
    title: 'Release Window Cannibalization',
    traditional: 'Mid-budget cinema clashes blindly on identical release weekends against studio tentpoles, resulting in instant screen eviction after 3 days.',
    synqSolution: 'Programmatic Circuit Sync: Pre-demand signals guide surgical territorial releases, multiplex programming, and premium event screenings.',
    metric: '2.4x higher box office density per screen',
  },
];

const ARCHITECTURE_LAYERS = [
  {
    num: '01',
    name: 'The Discovery Engine',
    subtitle: 'Indexing Unseen Capacity',
    desc: 'We continuously map the dark inventory of filmmaking — unbooked stages, verified crew availability, underutilized IP rights, and targeted screen windows.',
    icon: Compass,
  },
  {
    num: '02',
    name: 'The Routing Mesh',
    subtitle: 'Asset-Light Synchronization',
    desc: 'DigiSynq does not buy cameras or build soundstages. We serve as the operational nervous system connecting the right puzzle pieces at the precise instant of demand.',
    icon: Cpu,
  },
  {
    num: '03',
    name: 'Value Capture Protocol',
    subtitle: 'Aligned Economic Return',
    desc: 'We monetize through successful coordination and shared upside — ensuring DigiSynq only profits when budgets are saved and theatrical return is unlocked.',
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

          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-2xl font-normal mb-10">
            Cinema possesses immense talent, cutting-edge infrastructure, and eager capital. But these forces operate in isolated silos. DigiSynq is the connective tissue that aligns them without physical balance-sheet overhead.
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
              href="#architecture-layers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] text-zinc-300 font-medium text-sm transition-all duration-200"
            >
              <span>Explore the layers</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 02. The 4 Fundamental Gaps ── */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold text-zinc-400 tracking-wider uppercase mb-2 block">
            Systemic Gaps
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white [letter-spacing:-0.025em] mb-4">
            Where cinema leaks value.
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            The resources to produce extraordinary cinema exist today. What is broken is the coordination layer.
          </p>
        </div>

        {/* Gap Selector Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {GAPS.map((gap, i) => (
            <button
              key={gap.id}
              onClick={() => setActiveGapIndex(i)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
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
            <span className="text-xs font-mono text-zinc-500 uppercase">The Traditional Failure</span>
            <h3 className="text-xl font-bold text-white tracking-tight">{activeGap.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{activeGap.traditional}</p>
          </div>

          <div className="space-y-4 md:border-l md:border-white/[0.06] md:pl-10">
            <span className="text-xs font-mono text-emerald-400 uppercase">The DigiSynq Resolution</span>
            <p className="text-sm text-zinc-200 leading-relaxed">{activeGap.synqSolution}</p>
            <div className="pt-4 border-t border-white/[0.06] text-xs text-zinc-400 flex items-center justify-between">
              <span className="text-zinc-500">Measurable Impact:</span>
              <span className="text-emerald-400 font-medium">{activeGap.metric}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. Architecture Layers ── */}
      <section id="architecture-layers" className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold text-zinc-400 tracking-wider uppercase mb-2 block">
            System Topology
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white [letter-spacing:-0.025em] mb-4">
            The three operational layers.
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            How DigiSynq translates industry chaos into predictable, scalable production velocity.
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

      {/* ── 04. Final Invitation ── */}
      <section className="py-32 sm:py-40 px-6 sm:px-8 max-w-4xl mx-auto text-center border-t border-white/[0.06]">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
          Ready to eliminate coordination friction?
        </h2>
        <p className="text-base text-zinc-400 max-w-lg mx-auto leading-relaxed mb-10">
          Whether you are packaging a script, balancing soundstage capacity, or seeking gap financing.
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
