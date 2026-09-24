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
    name: 'Crew & Guilds',
    role: 'Human Capital',
    frictionState: 'Unverified availability and closed private networks',
    synqState: 'Direct verified roster matching and transparent parity',
    frictionMetric: '3.2 wks lost in pre-prod',
    synqMetric: 'Instant locking',
  },
  {
    id: 'stages',
    name: 'Soundstages & Volumes',
    role: 'Physical Space',
    frictionState: 'Idle floor dark-time between long-term lease bookings',
    synqState: 'Dynamic fractional stage access and shared setup windows',
    frictionMetric: '41% dark floor time',
    synqMetric: '100% floor liquidity',
  },
  {
    id: 'capital',
    name: 'Finishing Capital',
    role: 'Financial Flow',
    frictionState: 'Predatory equity dilution and delayed tranche releases',
    synqState: 'Milestone-tied algorithmic releases on verified scenes',
    frictionMetric: '35% backend surrendered',
    synqMetric: '0% predatory debt',
  },
  {
    id: 'post',
    name: 'Post & VFX Pipelines',
    role: 'Digital Finishing',
    frictionState: 'Delivery suspensions citing uncompensated scope shifts',
    synqState: 'Turnaround pipeline synchronization and milestone escrow',
    frictionMetric: '4-week delivery stalls',
    synqMetric: 'On-schedule lock',
  },
  {
    id: 'rights',
    name: 'Story & Adaptation IP',
    role: 'Intellectual Property',
    frictionState: 'High-value scripts trapped in multi-year packaging limbo',
    synqState: 'Pre-vetted attachments and turnkey technical modeling',
    frictionMetric: '24-month stagnation',
    synqMetric: '6-week packaging',
  },
  {
    id: 'exhibition',
    name: 'Screens & Release Windows',
    role: 'Audience Reach',
    frictionState: 'Mid-tier cinema evicted blindly after 3-day clashes',
    synqState: 'Pre-demand programmatic release and localized clusters',
    frictionMetric: '3-day screen eviction',
    synqMetric: '2.4x box office density',
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
    category: 'Human Capital',
    symptom: 'Lead cinematographer or gaffer unavailable 3 weeks prior to principal photography.',
    rootCause: 'Opaque availability calendars and reliance on closed personal phone trees.',
    synqPathway: 'Direct mesh match against verified guild availability with turnkey rate parity.',
    outcome: 'Locked key crew within 48 hours without agency markup.',
  },
  {
    id: 'stages',
    title: 'Soundstage Booking Bottleneck',
    category: 'Spatial Infrastructure',
    symptom: 'Production cannot secure 4 weeks of continuous stage space in target territory.',
    rootCause: 'Major studio facilities locked into rigid multi-month tenant leases.',
    synqPathway: 'Activate fractional turnaround window across paired partner lots with shared rigging.',
    outcome: 'Secured shooting floor with 26% lower carrying cost.',
  },
  {
    id: 'capital',
    title: 'Finishing & VFX Cash Deficit',
    category: 'Financial Flow',
    symptom: 'Lead vendor halts final 120 composite shots 6 weeks before theatrical delivery.',
    rootCause: 'Bank debt milestone triggers disconnected from real post turnover stages.',
    synqPathway: 'Deploy clean-room escrow release based on verified shot approvals.',
    outcome: 'Delivered final DCI master on time with zero predatory equity surrender.',
  },
  {
    id: 'screens',
    title: 'Theatrical Cannibalization Risk',
    category: 'Exhibition',
    symptom: 'Independent feature slated blindly against two $150M franchise tentpoles.',
    rootCause: 'Lack of pre-release demand telemetry and rigid traditional distribution windows.',
    synqPathway: 'Programmatic targeted screening clusters and synchronized regional event windows.',
    outcome: 'Average per-screen revenue improved by 2.4x.',
  },
  {
    id: 'rights',
    title: 'Trapped Intellectual Property',
    category: 'Rights & Packaging',
    symptom: 'Acclaimed literary property unable to attach director or finance for 18 months.',
    rootCause: 'Unrealistic budget assumptions and lack of packaged technical feasibility.',
    synqPathway: 'Asset-light packaging sprint aligning director vision with pre-vetted volume stage.',
    outcome: 'Project greenlit with fully bonded production architecture.',
  },
  {
    id: 'workflow',
    title: 'Virtual Production Cost Bleed',
    category: 'Technology',
    symptom: 'LED volume hours ballooning due to on-set asset adjustments.',
    rootCause: 'Unsynced real-time engine pre-visualization between director and stage operators.',
    synqPathway: 'Pre-flight virtual asset standardization sprint before stage load-in.',
    outcome: 'Stage burn reduced by 34% with zero overtime days.',
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
          01 — HERO (Clean, Arresting, Spacious)
         ══════════════════════════════════════════════════════ */}
      <section className="relative pt-40 sm:pt-48 pb-24 sm:pb-32 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          
          {/* Quiet Category Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-zinc-400 mb-8 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Cinema Synchronization</span>
          </div>

          {/* Large, Confident Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] [letter-spacing:-0.035em] mb-8">
            The coordination layer<br />
            for cinema.
          </h1>

          {/* Spacious Editorial Lead */}
          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-2xl font-normal mb-10">
            Cinema is not short of talent, soundstages, or capital. It is short of coordination. DigiSynq connects fragmented filmmaking resources into verified, asset-light production pathways.
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
            <div className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-1">0</div>
            <div className="text-xs text-zinc-400 leading-relaxed">Heavy physical assets owned</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-1">9</div>
            <div className="text-xs text-zinc-400 leading-relaxed">Filmmaking stages synchronized</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-1">&lt; 48h</div>
            <div className="text-xs text-zinc-400 leading-relaxed">Average coordination turnaround</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-1">100%</div>
            <div className="text-xs text-zinc-400 leading-relaxed">Asset-light execution network</div>
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
              Interactive Architecture
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
              {isSynchronized ? 'Zero fixed carrying costs' : 'Economic drag & unbooked time'}
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
          03 — OPERATING PRINCIPLES (4 Spacious Pillars)
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold text-zinc-400 tracking-wider uppercase mb-2 block">
            Operating Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight [letter-spacing:-0.025em] mb-4">
            Built asset-light.<br />
            Focused on outcomes.
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed font-normal">
            We do not own soundstages, trucks, or talent rosters. By eliminating fixed overhead, we align 100% with production outcomes.
          </p>
        </div>

        {/* 2x2 Spacious Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.06] bg-[#090b10] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-zinc-500 mb-6">01 // ARCHITECTURE</div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                Asset-Light Operating Model
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Owning heavy physical infrastructure creates pressure to force projects into specific facilities regardless of fit. DigiSynq owns zero equipment and accesses the entire ecosystem on demand.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs text-zinc-500">
              Infinite operational flexibility
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.06] bg-[#090b10] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-zinc-500 mb-6">02 // ECOSYSTEM</div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                Synchronization Over Silos
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Producers, technicians, studios, and distributors operate in isolation. When one department delays, the entire economic model breaks. We serve as the connective tissue that aligns dependencies.
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
                Problem-First Diagnostic
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                We do not sell software seats or general consulting hours. Every engagement begins with a specific operational constraint — dark floor space, missing key crew, or trapped finishing capital.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs text-zinc-500">
              Surgical problem resolution
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.06] bg-[#090b10] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-zinc-500 mb-6">04 // ECONOMICS</div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                Aligned Economic Return
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Our business model is tied to the measurable value we create. We succeed when stage carrying costs are reduced, budgets are saved, and productions deliver on their theatrical lock dates.
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
            Select a common industry challenge to inspect the root cause and how DigiSynq coordinates a resolution.
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
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
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
              <span className="text-white font-medium">Verified Result: </span>
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
            Every engagement follows a verified, structured progression from problem identification to measurable return.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              name: 'Diagnose',
              desc: 'Investigate the constraint, verify dependencies across departments, and separate symptoms from systemic causes.',
            },
            {
              step: '02',
              name: 'Connect',
              desc: 'Access verified network capabilities — crew guilds, available soundstages, or milestone capital — without agency markup.',
            },
            {
              step: '03',
              name: 'Coordinate',
              desc: 'Govern execution through structured milestone agreements, keeping production on schedule with neutral oversight.',
            },
            {
              step: '04',
              name: 'Measure',
              desc: 'Compare outcomes against the baseline. Quantify capital recovered, schedule days saved, and verified theatrical return.',
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
          Whether you are a producer facing stage shortages, a filmmaker navigating gap capital, or a studio with dark floor capacity.
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
