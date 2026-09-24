import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// ── Interactive Coordination Canvas Data ───────────────────
interface EcosystemNode {
  id: string;
  name: string;
  role: string;
  frictionState: string;
  synqState: string;
  frictionMetric: string;
  synqMetric: string;
}

const ECOSYSTEM_NODES: EcosystemNode[] = [
  {
    id: 'talent',
    name: 'Creative Talent & Crews',
    role: 'Creative & Technical',
    frictionState: 'Unverified availability and reliance on closed personal networks',
    synqState: 'Direct verified roster matching and transparent rate parity',
    frictionMetric: 'Lengthy assembly delays',
    synqMetric: 'Direct verified locking',
  },
  {
    id: 'stages',
    name: 'Studios, Stages & Venues',
    role: 'Physical Infrastructure',
    frictionState: 'Unused stage days, dark floors, and rigid multi-month lease mandates',
    synqState: 'Dynamic access to available partner facilities and turnaround slots',
    frictionMetric: 'Unbooked dark time',
    synqMetric: 'Optimized facility utilization',
  },
  {
    id: 'capital',
    name: 'Production & Finishing Capital',
    role: 'Financial Flow',
    frictionState: 'Opaque tranches and high-risk bridge financing terms',
    synqState: 'Milestone-tied capital routing released on verified deliverables',
    frictionMetric: 'Financing uncertainty',
    synqMetric: 'Milestone-backed security',
  },
  {
    id: 'post',
    name: 'Post, VFX & Sound',
    role: 'Technical Finishing',
    frictionState: 'Handoff delays, scope misalignment, and stalled turnovers',
    synqState: 'Synchronized pipeline telemetry and clear milestone covenants',
    frictionMetric: 'Turnaround bottlenecks',
    synqMetric: 'On-schedule delivery',
  },
  {
    id: 'rights',
    name: 'Formats, Stories & IP',
    role: 'Intellectual Property',
    frictionState: 'High-value properties trapped in prolonged packaging limbo',
    synqState: 'Pre-vetted attachments and turnkey technical feasibility modeling',
    frictionMetric: 'Prolonged stagnation',
    synqMetric: 'Streamlined packaging',
  },
  {
    id: 'exhibition',
    name: 'Audience Channels & Distribution',
    role: 'Audience Reach',
    frictionState: 'Content clashing blindly across identical theatrical and OTT windows',
    synqState: 'Targeted windowing and audience pre-demand density matching',
    frictionMetric: 'Compressed exposure',
    synqMetric: 'Defensible release density',
  },
];

// ── Interactive Problem Diagnostic Data ─────────────────────
interface ProblemScenario {
  id: string;
  title: string;
  category: string;
  symptom: string;
  rootCause: string;
  synqPathway: string;
  outcome: string;
}

const PROBLEM_SCENARIOS: ProblemScenario[] = [
  {
    id: 'crew',
    title: 'Missing Technical Department Heads',
    category: 'Talent & Crew',
    symptom: 'Lead cinematographer, sound supervisor, or gaffer unavailable weeks prior to shoot.',
    rootCause: 'Opaque availability calendars and reliance on closed personal phone trees.',
    synqPathway: 'Direct matching against verified network availability with turnkey terms.',
    outcome: 'Locked key crew within days without agency middleman markups.',
  },
  {
    id: 'stages',
    title: 'Studio & Stage Booking Bottleneck',
    category: 'Infrastructure',
    symptom: 'Production cannot secure continuous stage or volume space in the target market.',
    rootCause: 'Major studio facilities locked into rigid multi-month tenant leases.',
    synqPathway: 'Route demand to available partner facilities during verified turnaround windows.',
    outcome: 'Secured shooting dates with optimized floor scheduling and zero facility debt.',
  },
  {
    id: 'capital',
    title: 'Finishing & Post Cash Deficit',
    category: 'Financial Flow',
    symptom: 'Post-production halts on final composite shots weeks before delivery lock.',
    rootCause: 'Milestone financing triggers disconnected from real post turnover stages.',
    synqPathway: 'Deploy milestone-tied capital release based on verified turnover approvals.',
    outcome: 'Delivered final master on time with transparent covenant governance.',
  },
  {
    id: 'screens',
    title: 'Release Window Clashes',
    category: 'Distribution',
    symptom: 'Independent release slated blindly against major studio tentpoles.',
    rootCause: 'Lack of pre-release demand telemetry and rigid traditional distribution windows.',
    synqPathway: 'Targeted screening clusters and synchronized regional event windows.',
    outcome: 'Protected opening footprint through defensible regional audience density.',
  },
  {
    id: 'rights',
    title: 'Trapped Intellectual Property',
    category: 'IP & Packaging',
    symptom: 'Acclaimed property unable to attach director or finance for extended periods.',
    rootCause: 'Unrealistic budget assumptions and lack of packaged technical feasibility.',
    synqPathway: 'Asset-light packaging sprint aligning director vision with verified network capacity.',
    outcome: 'Project greenlit with fully bonded production architecture.',
  },
  {
    id: 'workflow',
    title: 'Virtual Production Cost Bleed',
    category: 'Technology',
    symptom: 'LED volume hours ballooning due to on-set real-time asset adjustments.',
    rootCause: 'Unsynchronized virtual asset pre-visualization between director and stage operators.',
    synqPathway: 'Pre-flight virtual asset standardization sprint before stage load-in.',
    outcome: 'Eliminated on-set asset adjustments and held volume shoot strictly to budget.',
  },
];

export function HomePage() {
  const [isSynchronized, setIsSynchronized] = useState(true);
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(0);
  const [selectedProblemId, setSelectedProblemId] = useState('crew');

  const selectedNode = ECOSYSTEM_NODES[selectedNodeIndex];
  const selectedProblem = PROBLEM_SCENARIOS.find(p => p.id === selectedProblemId) || PROBLEM_SCENARIOS[0];

  return (
    <main className="bg-[#07080b] text-[#ECEEF5] selection:bg-white/20 selection:text-white">

      {/* ══════════════════════════════════════════════════════
          01 — HERO (Broad Entertainment Positioning: Clear, Spacious, Confident)
         ══════════════════════════════════════════════════════ */}
      <section className="relative pt-40 sm:pt-48 pb-24 sm:pb-32 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          
          {/* Quiet Category Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-zinc-400 mb-8 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Asset-Light Entertainment Coordination</span>
          </div>

          {/* Large, Confident Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] [letter-spacing:-0.035em] mb-8">
            The coordination layer<br />
            for entertainment.
          </h1>

          {/* Spacious Editorial Lead: What it is, Who it serves, How it works, Why it matters */}
          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-3xl font-normal mb-10">
            Entertainment already has enormous distributed capacity. DigiSynq is an asset-light coordination network that connects entertainment demand with existing industry capacity — helping productions, creators, and studios access verified talent, partner facilities, post-production, and distribution pathways without requiring DigiSynq to own the underlying physical infrastructure.
          </p>

          {/* Clean, Restrained CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/start"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#06080d] hover:bg-white/90 font-medium text-sm tracking-wide transition-all duration-200 active:scale-95 shadow-sm"
              id="hero-start-synq-cta"
            >
              <span>Start a synq</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] text-zinc-300 font-medium text-sm transition-all duration-200"
            >
              <span>How it works</span>
            </Link>
          </div>
        </div>

        {/* Quiet Metric Horizon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mt-24 sm:mt-32 pt-12 border-t border-white/[0.06]">
          <div>
            <div className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-1">Asset-Light</div>
            <div className="text-xs text-zinc-400 leading-relaxed">Zero physical infrastructure debt</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-1">Ecosystem</div>
            <div className="text-xs text-zinc-400 leading-relaxed">Coordinating distributed entertainment capacity</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-1">&lt; 48h</div>
            <div className="text-xs text-zinc-400 leading-relaxed">Turnaround on constraint mapping</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-1">Lifecycle</div>
            <div className="text-xs text-zinc-400 leading-relaxed">Development through audience distribution</div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          02 — INTERACTIVE COORDINATION DEMONSTRATION
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold text-zinc-400 tracking-wider uppercase mb-2 block">
              Capacity Orchestration
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white [letter-spacing:-0.025em]">
              The synchronization effect.
            </h2>
          </div>

          {/* State Switcher */}
          <div className="flex items-center gap-2 p-1 rounded-full border border-white/10 bg-white/[0.02] w-fit">
            <button
              onClick={() => setIsSynchronized(false)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                !isSynchronized 
                  ? 'bg-white/15 text-white shadow-sm' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Fragmented Silos
            </button>
            <button
              onClick={() => setIsSynchronized(true)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                isSynchronized 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Synchronized System
            </button>
          </div>
        </div>

        {/* Coordination Canvas Card */}
        <div className="p-8 sm:p-12 rounded-3xl border border-white/[0.08] bg-[#090b10] relative overflow-hidden">
          
          {/* Header Status */}
          <div className="flex items-center justify-between pb-8 mb-8 border-b border-white/[0.06] text-xs">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${isSynchronized ? 'bg-emerald-400' : 'bg-zinc-500'}`} />
              <span className="text-zinc-400">System State:</span>
              <span className={isSynchronized ? 'text-emerald-400 font-medium' : 'text-zinc-300 font-medium'}>
                {isSynchronized ? 'Connected & Coordinated' : 'Isolated Resource Silos'}
              </span>
            </div>
            <div className="text-zinc-500">
              {isSynchronized ? 'Routing active entertainment capacity' : 'Unused facility days & scheduling drag'}
            </div>
          </div>

          {/* Node Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {ECOSYSTEM_NODES.map((node, i) => {
              const isSelected = i === selectedNodeIndex;
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNodeIndex(i)}
                  className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'border-white/20 bg-white/[0.04]'
                      : 'border-white/[0.06] bg-white/[0.015] hover:border-white/10 hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3 text-xs text-zinc-500">
                    <span>{node.role}</span>
                    <span className={`font-medium ${isSynchronized ? 'text-emerald-400' : 'text-zinc-400'}`}>
                      {isSynchronized ? '✓ Synced' : '⚠ Siloed'}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-white mb-2">{node.name}</h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-4 min-h-[36px]">
                    {isSynchronized ? node.synqState : node.frictionState}
                  </p>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="text-zinc-500">{isSynchronized ? 'Gain:' : 'Friction:'}</span>
                    <span className={isSynchronized ? 'text-emerald-400 font-medium' : 'text-zinc-300 font-medium'}>
                      {isSynchronized ? node.synqMetric : node.frictionMetric}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Deep Dive Bar */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-400">
            <div>
              <span className="text-white font-medium">{selectedNode.name}: </span>
              <span>{isSynchronized ? selectedNode.synqState : selectedNode.frictionState}</span>
            </div>
            <Link
              to="/the-synq"
              className="text-white hover:text-emerald-400 transition-colors inline-flex items-center gap-1 shrink-0"
            >
              <span>Explore full codex</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          03 — POSITIVE BUSINESS MODEL: "USE THE CAPACITY THAT ALREADY EXISTS"
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold text-zinc-400 tracking-wider uppercase mb-2 block">
            The Positive Business Model
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight [letter-spacing:-0.025em] mb-4">
            Use the capacity that already exists.
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed font-normal">
            Entertainment already has vast distributed infrastructure, talent, and resources. DigiSynq creates value by coordinating, connecting, routing, and orchestrating that existing capacity across the ecosystem.
          </p>
        </div>

        {/* 2x2 Spacious Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.06] bg-[#090b10] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-zinc-500 mb-6">01 // ASSET-LIGHT ARCHITECTURE</div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                Capacity Routing Over Asset Ownership
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Owning heavy physical infrastructure creates commercial pressure to force productions into specific facilities regardless of creative fit. DigiSynq operates without heavy fixed physical assets, allowing us to route projects to the ideal existing capacity across the entire ecosystem.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs text-zinc-500">
              Lower capital intensity • Higher flexibility
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.06] bg-[#090b10] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-zinc-500 mb-6">02 // ECOSYSTEM UTILIZATION</div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                Synchronization Over Silos
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Creators, technical crews, studio spaces, post houses, and audience platforms often operate in isolated silos. When one node encounters delays, the entire timeline risks stalling. We provide the neutral coordination layer that keeps dependencies synchronized.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs text-zinc-500">
              Eliminating coordination friction
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.06] bg-[#090b10] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-zinc-500 mb-6">03 // ENGAGEMENT</div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                Constraint-First Diagnostic
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                We do not sell generic consulting packages. Every engagement begins with a concrete operational requirement — finding unbooked stage windows, matching specialized guild craft heads, or structuring milestone-tied finishing capital.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs text-zinc-500">
              Surgical resource matching
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.06] bg-[#090b10] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-zinc-500 mb-6">04 // ECONOMICS</div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                Orchestration-Driven Value
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                DigiSynq generates economic value from coordination and workflow orchestration rather than by extracting landlord rents on physical assets. We succeed when entertainment projects run smoothly, budgets hold, and productions deliver on schedule.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs text-zinc-500">
              Value creation over activity
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          04 — CLEAN PROBLEM DIAGNOSTIC (Spacious & Direct)
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-zinc-400 tracking-wider uppercase mb-2 block">
            Diagnostic Matrix
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white [letter-spacing:-0.025em] mb-4">
            Where is your production facing friction?
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Select a common production challenge to inspect the root cause and how DigiSynq coordinates an asset-light resolution.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {PROBLEM_SCENARIOS.map((p) => {
            const isSelected = p.id === selectedProblemId;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedProblemId(p.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white text-[#06080d] shadow-sm font-semibold'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]'
                }`}
              >
                {p.title}
              </button>
            );
          })}
        </div>

        {/* Selected Problem Insight Card */}
        <div className="p-8 sm:p-12 rounded-3xl border border-white/[0.08] bg-[#090b10] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-6">
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase">{selectedProblem.category}</span>
              <h3 className="text-2xl font-bold text-white tracking-tight mt-1">{selectedProblem.title}</h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <span className="text-zinc-500 block mb-1">Visible Symptom:</span>
                <p className="text-zinc-300 leading-relaxed">{selectedProblem.symptom}</p>
              </div>

              <div>
                <span className="text-zinc-500 block mb-1">Underlying Root Cause:</span>
                <p className="text-zinc-400 leading-relaxed">{selectedProblem.rootCause}</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-emerald-400 font-medium block mb-1">DigiSynq Coordinated Solution:</span>
                <p className="text-zinc-200 leading-relaxed">{selectedProblem.synqPathway}</p>
              </div>
            </div>

            <div className="text-xs text-zinc-400">
              <span className="text-white font-medium">Outcome: </span>
              <span>{selectedProblem.outcome}</span>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col items-start md:items-end justify-center pt-4 md:pt-0 md:border-l md:border-white/[0.06] md:pl-8">
            <Link
              to="/start"
              state={{ problem: `${selectedProblem.title}: ${selectedProblem.symptom}` }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#06080d] hover:bg-white/90 font-medium text-xs tracking-wide transition-all duration-200 active:scale-95 shadow-sm"
            >
              <span>Engage on this problem</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-[11px] text-zinc-500 mt-3 text-right">
              Confidential intake • &lt; 48h turnaround
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          05 — THE 4-STAGE OPERATIONAL LOOP (Clean Timeline)
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold text-zinc-400 tracking-wider uppercase mb-2 block">
            The Engagement Cycle
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white [letter-spacing:-0.025em] mb-4">
            Four stages. One accountable loop.
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            DigiSynq coordinates capacity rather than requiring ownership of capacity — guiding entertainment productions through a structured progression from diagnosis to realization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              name: 'Diagnose',
              desc: 'Understand the project requirements, creative vision, department dependencies, and operational constraints.',
            },
            {
              step: '02',
              name: 'Connect',
              desc: 'Identify relevant talent, partner facilities, infrastructure, services, capacity, or financing across the network.',
            },
            {
              step: '03',
              name: 'Orchestrate',
              desc: 'Coordinate multiple stakeholders, workflows, and milestones through structured covenants and neutral oversight.',
            },
            {
              step: '04',
              name: 'Realize',
              desc: 'Turn distributed resources into on-schedule production output, final delivery masters, and audience reach.',
            },
          ].map((phase) => (
            <div
              key={phase.step}
              className="p-8 rounded-3xl border border-white/[0.06] bg-[#090b10] flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-zinc-500 mb-6 block">{phase.step}</span>
                <h3 className="text-lg font-semibold text-white mb-2">{phase.name}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{phase.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          06 — CLOSING INVITATION (Spacious, Calm, Direct)
         ══════════════════════════════════════════════════════ */}
      <section className="py-32 sm:py-44 px-6 sm:px-8 max-w-4xl mx-auto text-center border-t border-white/[0.06]">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white [letter-spacing:-0.03em] mb-6">
          Bring us your production constraint.
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed mb-10">
          Have an entertainment project, resource requirement, or capacity opportunity? Start a Synq and tell us what needs to be connected.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/start"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#06080d] hover:bg-white/90 font-medium text-sm tracking-wide transition-all duration-200 active:scale-95 shadow-sm"
          >
            <span>Start a synq</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/the-synq"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] text-zinc-300 font-medium text-sm transition-all duration-200"
          >
            <span>Read the codex</span>
          </Link>
        </div>
      </section>

    </main>
  );
}
