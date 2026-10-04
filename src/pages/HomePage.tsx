import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ArrowUpRight, ShieldCheck, AlertTriangle, 
  GitBranch, Layers, Cpu, Database, CheckCircle2, Sparkles, 
  RefreshCw, Sliders, Users, Film, DollarSign, Activity, 
  Clock, MapPin, Zap, Check, Eye, Network, Building 
} from 'lucide-react';
import { TopographicBackground } from '../components/TopographicBackground';
import { EERGConvergenceVisual } from '../components/EERGConvergenceVisual';
import { EERGFlywheel } from '../components/EERGFlywheel';

export function HomePage() {
  const [fragmentationMode, setFragmentationMode] = useState<'FRAGMENTED' | 'SYNCHRONIZED'>('FRAGMENTED');
  const [activeModelIndex, setActiveModelIndex] = useState<number>(0);
  const [activeChainIndex, setActiveChainIndex] = useState<number>(0);

  // 6 Master Operating Stages (Section 04)
  const operatingStages = [
    {
      step: '01',
      name: 'Discover',
      tagline: 'Index people, dark capacity & technical assets',
      metric: '14,000+ Verified Nodes',
      desc: 'Traverse the entertainment ecosystem without owning physical inventory. Index verified guild credentials, dark soundstage floor availability, optical lens serials, and immediate production needs in real time.',
      inputs: ['Daily production calls', 'Rental house dark inventory manifests', 'Guild availability lists'],
      outcome: 'Zero invisible capacity. Real-time ecosystem visibility.',
    },
    {
      step: '02',
      name: 'Aggregate',
      tagline: 'Structure fragmented signals into living knowledge',
      metric: 'Unified Cryptographic Graph',
      desc: 'Convert informal phone trees, scattered PDFs, and private spreadsheets into unified, machine-readable operational graphs with standardized schemas and automated credential verification.',
      inputs: ['Cross-department call sheets', 'Budget ledgers', 'Municipal permit covenants'],
      outcome: 'Normalized telemetry replacing anecdotal hearsay.',
    },
    {
      step: '03',
      name: 'Connect',
      tagline: 'Algorithmic multi-party compatibility matching',
      metric: '14-Hour Match Velocity',
      desc: 'Execute multi-party compatibility algorithms that simultaneously align guild rate cards, optical prep dates, soundstage acoustic ratings, and location noise permits into a synchronized reservation hold.',
      inputs: ['Technical requirements', 'Schedule buffer tolerances', 'Insurance covenants'],
      outcome: 'Matches executed in 14 hours instead of 3 weeks.',
    },
    {
      step: '04',
      name: 'Orchestrate',
      tagline: 'Living execution governance & variance rerouting',
      metric: '100% Turnaround Compliance',
      desc: 'Active execution governance after the contract is signed. Model schedule shockwaves, monitor mandatory guild rest covenants, and dynamically re-sequence scenes when set-side variances occur.',
      inputs: ['Daily wrap reports', 'Camera card offload checksums', 'Weather variances'],
      outcome: 'A 2-hour set delay is halted before it cascades into a $2M disaster.',
    },
    {
      step: '05',
      name: 'Measure',
      tagline: 'Decision-grade telemetry & cost leakage metrics',
      metric: '8.2% Capital Saved',
      desc: 'Track decision-grade metrics: dark soundstage utilization yield, schedule cascade multipliers, and post-production turnover velocity. Every metric answers: What decision does this improve?',
      inputs: ['Historical schedule burn', 'Vendor rate variance', 'Turnaround overtime fines'],
      outcome: 'Empirical accountability across every dollar and day spent.',
    },
    {
      step: '06',
      name: 'Monetize',
      tagline: 'Convert coordination & intelligence into enterprise value',
      metric: '6 Value Capture Layers',
      desc: 'Transparent value capture: low transaction take-rates on dark capacity, workflow coordination subscriptions for studios, and enterprise EERG intelligence licenses for completion bond guarantors.',
      inputs: ['Booked dark floor revenue', 'Recovered shooting days', 'Syndicated data queries'],
      outcome: 'High-margin asset-light revenue aligned strictly with saved client capital.',
    },
  ];

  // 11-Tier Root-Cause Chain (Section 06)
  const rootCauseChain = [
    { tier: '01', label: 'Stakeholder', role: 'A-List Actor & Line Producer', detail: 'Key performers and fiscal leaders managing immovable production windows.' },
    { tier: '02', label: 'Problem', role: 'Irregular Work & Casting Friction', detail: 'Weeks lost during casting while unbudgeted holding fees accumulate.' },
    { tier: '03', label: 'Bottleneck', role: 'Talent Discovery & Verification Deficit', detail: 'No real-time registry connecting open roles to verified calendar availability.' },
    { tier: '04', label: 'Immediate cause', role: 'Fragmented Databases & Unverified Resumes', detail: 'Casting relies on disparate websites, PDF resumes, and informal agent phone calls.' },
    { tier: '05', label: 'Root cause', role: 'Information Fragmentation & Trust Deficit', detail: 'Systemic market failure: asset availability is invisible across company boundaries.' },
    { tier: '06', label: 'Dependencies', role: 'Shooting Schedule ↔ Soundstage ↔ Location', detail: 'Actor availability locks dictate soundstage load-in and municipal street permits.' },
    { tier: '07', label: 'Other stakeholders', role: 'Director, Crew Guilds, Rental Houses, Bond Co.', detail: 'When actor schedule shifts, 120 technicians and vendors suffer downstream chaos.' },
    { tier: '08', label: 'Economic impact', role: '$2.8B+ Annual Waste in Cascade Delays', detail: 'Unrecoverable burn rate from idle soundstages, overtime, and rush VFX fees.' },
    { tier: '09', label: 'Workaround', role: 'Paying 300% Overtime & Standby Penalties', detail: 'Producers burn contingency budget to patch structural ecosystem disconnection.' },
    { tier: '10', label: 'Solution gap', role: 'Absence of Live Multi-Party Coordination', detail: 'No living graph dynamically reroutes dependencies when a variance occurs.' },
    { tier: '11', label: 'Opportunity', role: 'Verified Talent Intelligence Exchange', detail: 'Enterprise subscription funded by studio physical production & bond guarantors.' },
  ];

  return (
    <div className="relative min-h-screen bg-[#000000] text-[#FFFFFF] selection:bg-white selection:text-black font-sans antialiased overflow-x-hidden">
      <TopographicBackground className="opacity-20 pointer-events-none fixed inset-0" />

      {/* ============================================================ */}
      {/* SECTION 01 — THE QUESTION (APPLE KEYNOTE HERO) */}
      {/* ============================================================ */}
      <section className="relative pt-32 sm:pt-44 pb-20 sm:pb-28 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="space-y-8 max-w-5xl">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] text-xs font-mono tracking-widest text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
            <span className="uppercase">01 — The Foundational Question</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.03]">
            What if the entertainment ecosystem could see itself?
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-2xl text-zinc-400 font-normal leading-relaxed max-w-3xl tracking-tight">
            The people, resources, equipment, soundstages, workflows, distribution markets, and capital already exist. Entertainment does not lack talent or gear. The challenge is connecting them intelligently.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              to="/ecosystem"
              className="inline-flex items-center gap-2.5 bg-white text-black hover:bg-zinc-200 px-7 py-4 rounded-full text-xs font-mono uppercase font-bold tracking-wider shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.25)] transition-all duration-300"
            >
              <span>Explore the System</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/eerg"
              className="inline-flex items-center gap-2.5 bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.12] hover:border-white/[0.25] px-7 py-4 rounded-full text-xs font-mono uppercase font-semibold tracking-wider backdrop-blur-xl transition-all duration-300"
            >
              <span>Trace Root-Cause Graph (EERG)</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400" />
            </Link>
          </div>

          {/* Minimal Keynote Metric Strip */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/[0.08]">
            {[
              { val: '14,000+', lbl: 'Indexed resource nodes' },
              { val: '75', lbl: 'Cataloged root causes' },
              { val: '$2.8B+', lbl: 'Preventable cascade friction' },
              { val: '14 Hours', lbl: 'Average matching velocity' },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-mono">{stat.val}</div>
                <div className="text-xs text-zinc-500 font-mono tracking-wider">{stat.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 02 — THE PROBLEM (APPLE PRO BENTO GRID) */}
      {/* ============================================================ */}
      <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/[0.08] space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
              <span>02 — The Structural Breakdown</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Too much exists. Too little is connected.
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              When resources exist in artificial silos, they generate immense friction. Toggle below to compare the current fragmented reality against the DIGISYNQ synchronized ecosystem.
            </p>
          </div>

          {/* Apple-style Segmented Toggle */}
          <div className="inline-flex p-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] self-start md:self-auto">
            <button
              onClick={() => setFragmentationMode('FRAGMENTED')}
              className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                fragmentationMode === 'FRAGMENTED'
                  ? 'bg-zinc-800 text-white font-bold shadow-md'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              Fragmented Reality
            </button>
            <button
              onClick={() => setFragmentationMode('SYNCHRONIZED')}
              className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                fragmentationMode === 'SYNCHRONIZED'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              Synchronized System
            </button>
          </div>
        </div>

        {/* ── Cupertino Asymmetric Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Bento Card 1: HERO TILE (Spans 8 cols) - Talent & Equipment Engine */}
          <div className="md:col-span-8 p-8 rounded-3xl bg-gradient-to-br from-white/[0.07] via-white/[0.02] to-transparent border border-white/[0.12] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] hover:border-white/[0.25] transition-all duration-500 flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                  CORE CAPACITY COORDINATION
                </span>
              </div>
              <span className="font-mono text-xs text-zinc-500">
                {fragmentationMode === 'FRAGMENTED' ? 'STATUS: UNVERIFIED' : 'STATUS: SYNCHRONIZED'}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Talent & high-end optical equipment
              </h3>
              <p className="text-base text-zinc-300 leading-relaxed font-sans max-w-2xl">
                {fragmentationMode === 'FRAGMENTED'
                  ? 'Over 65% of specialized guild talent and cinema camera packages sit unbooked between productions. Producers make 50+ phone calls to discover basic rate cards and availability.'
                  : 'Dynamic capacity indexing transforms idle down-time into booked revenue. Optics packages, DPs, and gaffers are pre-verified with rate parity and guild covenants.'}
              </p>
            </div>

            {/* Live Interactive Waveform / Telemetry Visual */}
            <div className="p-4 rounded-2xl bg-black/50 border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-end gap-1 h-6">
                  <div className="w-1 bg-white/80 h-3 rounded-full animate-pulse" />
                  <div className="w-1 bg-white/60 h-5 rounded-full animate-pulse delay-75" />
                  <div className="w-1 bg-white/90 h-6 rounded-full animate-pulse delay-150" />
                  <div className="w-1 bg-white/40 h-2 rounded-full animate-pulse delay-100" />
                </div>
                <div className="font-mono text-xs">
                  <span className="text-zinc-500 block text-[10px] uppercase">Telemetry Stream:</span>
                  <span className="text-white font-semibold">
                    {fragmentationMode === 'FRAGMENTED' ? 'Disconnected Silos Detected' : 'Continuous Ecosystem Mesh Active'}
                  </span>
                </div>
              </div>

              <div className="font-mono text-xs text-zinc-400">
                {fragmentationMode === 'FRAGMENTED' ? 'Average Delay: 3 Weeks' : 'Matching Speed: 14 Hours'}
              </div>
            </div>
          </div>

          {/* Bento Card 2: SOUNDSTAGES (Spans 4 cols) */}
          <div className="md:col-span-4 p-8 rounded-3xl bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent border border-white/[0.12] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] hover:border-white/[0.25] transition-all duration-500 flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">FACILITIES</span>
              <Building className="w-4 h-4 text-zinc-400" />
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-extrabold tracking-tight text-white">
                Dark soundstage floors
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {fragmentationMode === 'FRAGMENTED'
                  ? 'Stages sit empty between major leases, burning $30k/day in overhead while indie films scramble for floor space.'
                  : 'Secondary dark capacity clearinghouse matches burst shoots into empty calendar windows without permanent lease locks.'}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] font-mono text-xs flex justify-between items-center text-zinc-500">
              <span>UTILIZATION YIELD:</span>
              <span className="text-white font-bold">{fragmentationMode === 'FRAGMENTED' ? '54% Regional' : '88% Synchronized'}</span>
            </div>
          </div>

          {/* Bento Card 3: CAPITAL & ESCROW (Spans 4 cols) */}
          <div className="md:col-span-4 p-8 rounded-3xl bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent border border-white/[0.12] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] hover:border-white/[0.25] transition-all duration-500 flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">CAPITAL</span>
              <DollarSign className="w-4 h-4 text-zinc-400" />
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-extrabold tracking-tight text-white">
                Milestone telemetry escrow
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {fragmentationMode === 'FRAGMENTED'
                  ? 'Financing milestone draws get frozen in slow manual bank auditing, delaying payroll and risking union strike halts.'
                  : 'Cryptographic shoot wrap telemetry triggers automated escrow releases, keeping capital liquid and payroll certified.'}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] font-mono text-xs flex justify-between items-center text-zinc-500">
              <span>HOLDING COST:</span>
              <span className="text-white font-bold">{fragmentationMode === 'FRAGMENTED' ? 'Up to 30 Days' : 'Instant Verification'}</span>
            </div>
          </div>

          {/* Bento Card 4: RIGHTS & DISTRIBUTION (Spans 4 cols) */}
          <div className="md:col-span-4 p-8 rounded-3xl bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent border border-white/[0.12] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] hover:border-white/[0.25] transition-all duration-500 flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">COMMERCIAL</span>
              <Layers className="w-4 h-4 text-zinc-400" />
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-extrabold tracking-tight text-white">
                Distribution & buyer gaps
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {fragmentationMode === 'FRAGMENTED'
                  ? 'Finished films miss festival deadlines or get buried in generic streaming carousels with misaligned buyer demographics.'
                  : 'Direct matching between finished deliverable metadata and active streaming platform catalog acquisition mandates.'}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] font-mono text-xs flex justify-between items-center text-zinc-500">
              <span>BUYER ALIGNMENT:</span>
              <span className="text-white font-bold">{fragmentationMode === 'FRAGMENTED' ? 'Speculative' : 'Data-Verified'}</span>
            </div>
          </div>

          {/* Bento Card 5: DATA TELEMETRY (Spans 4 cols) */}
          <div className="md:col-span-4 p-8 rounded-3xl bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent border border-white/[0.12] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] hover:border-white/[0.25] transition-all duration-500 flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">DATA LOGIC</span>
              <Database className="w-4 h-4 text-zinc-400" />
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-extrabold tracking-tight text-white">
                EERG knowledge loop
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {fragmentationMode === 'FRAGMENTED'
                  ? 'Every wrapped production deletes its spreadsheets, ensuring the next production repeats identical costly errors.'
                  : 'Operational data feeds the EERG root-cause graph, improving predictability across the global ecosystem.'}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] font-mono text-xs flex justify-between items-center text-zinc-500">
              <span>SYSTEM LEARNING:</span>
              <span className="text-white font-bold">{fragmentationMode === 'FRAGMENTED' ? 'Zero Retention' : 'Continuous Flywheel'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 03 — THE IDEA: NOTHING IS WASTE (BENTO TRANSFORMATION) */}
      {/* ============================================================ */}
      <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/[0.08] space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <span>03 — The Core Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Nothing is waste. Disconnected value is.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            This is not an inspirational slogan. It is an operational mechanism. Value does not disappear; it degrades into waste when the connections between who owns it, who needs it, and where it exists break down.
          </p>
        </div>

        {/* Bento Grid: 4 Asymmetrical Cupertino Transformation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              from: 'Idle talent',
              to: 'Available capacity',
              metric: '48hr Booking',
              desc: 'Performers and craftspeople between bookings become discoverable capability for sudden shoot turns.',
            },
            {
              from: 'Idle equipment',
              to: 'Productive yield',
              metric: '+24% Utilization',
              desc: 'High-end cinema optics generate revenue mid-week instead of warehouse depreciation.',
            },
            {
              from: 'Dark soundstages',
              to: 'Revenue assets',
              metric: 'Zero Empty Days',
              desc: 'Acoustic facilities monetize calendar gap weeks between multi-month tentpole leases.',
            },
            {
              from: 'Workflow failures',
              to: 'Systemic intelligence',
              metric: 'EERG Knowledge',
              desc: 'Every set-side shock reveals a root cause and a paying customer opportunity.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent border border-white/[0.1] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:border-white/[0.25] transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase">TRANSFORMATION 0{idx + 1}</span>
                  <span className="font-mono text-[10px] text-white px-2 py-0.5 rounded-full bg-white/[0.08]">{item.metric}</span>
                </div>

                <div className="space-y-1 mb-3">
                  <div className="text-xs font-mono text-zinc-500 line-through">{item.from}</div>
                  <div className="text-lg font-extrabold text-white tracking-tight">{item.to}</div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>MECHANISM:</span>
                <span className="text-zinc-300">Synchronized Routing</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 04 — THE SYSTEM: DIGISYNQ CONNECTS THE DOTS (SCRUBBER) */}
      {/* ============================================================ */}
      <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/[0.08] space-y-12">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <span>04 — The Operating System</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            DIGISYNQ connects the dots.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            A continuous 6-stage mechanism that converts decentralized resources into synchronized execution: Discover → Aggregate → Connect → Orchestrate → Measure → Monetize.
          </p>
        </div>

        {/* Cupertino Interactive Stage Scrubber Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {operatingStages.map((stg, idx) => {
            const isSelected = idx === activeModelIndex;
            return (
              <button
                key={stg.step}
                onClick={() => setActiveModelIndex(idx)}
                className={`p-4 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white text-black border-white shadow-[0_10px_25px_rgba(255,255,255,0.15)]'
                    : 'bg-white/[0.02] text-zinc-400 border-white/[0.08] hover:border-white/[0.2] hover:text-white'
                }`}
              >
                <div>
                  <span className={`font-mono text-[10px] block mb-1 uppercase ${isSelected ? 'text-zinc-600' : 'text-zinc-500'}`}>
                    STAGE {stg.step}
                  </span>
                  <div className={`font-extrabold text-xs tracking-tight ${isSelected ? 'text-black' : 'text-white'}`}>
                    {stg.name}
                  </div>
                </div>
                <div className={`text-[9px] font-mono mt-3 ${isSelected ? 'text-zinc-800' : 'text-zinc-500'}`}>
                  {stg.metric}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Scrubber Stage Bento Card */}
        {(() => {
          const currentStage = operatingStages[activeModelIndex];
          return (
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent border border-white/[0.12] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                    STAGE {currentStage.step} OF 06: {currentStage.name}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                    {currentStage.tagline}
                  </h3>
                </div>
                <div className="font-mono text-xs text-white bg-white/[0.08] border border-white/[0.15] px-3.5 py-1.5 rounded-full self-start sm:self-auto">
                  {currentStage.outcome}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-base text-zinc-300 leading-relaxed font-sans">
                    {currentStage.desc}
                  </p>
                </div>

                <div className="lg:col-span-5 p-5 rounded-2xl bg-black/40 border border-white/[0.06] space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                    Operational Ingestion Inputs:
                  </span>
                  <ul className="space-y-1.5 font-mono text-xs text-zinc-300">
                    {currentStage.inputs.map((inp, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{inp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* ============================================================ */}
      {/* SECTION 05 — THE INTELLIGENCE (INTRODUCE EERG) */}
      {/* ============================================================ */}
      <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/[0.08] space-y-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent border border-white/[0.12] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
              <span>05 — The Reasoning Engine</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              But first, understand why the system breaks.
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              Before you can connect resources, you must understand why the entertainment ecosystem gets stuck. That is the function of EERG (Entertainment Ecosystem Root-Cause Graph) — the intelligence and reasoning engine of DIGISYNQ.
            </p>
          </div>

          <div className="flex flex-col gap-3 shrink-0">
            <Link
              to="/eerg"
              className="inline-flex items-center gap-2.5 bg-white text-black hover:bg-zinc-200 px-7 py-4 rounded-full text-xs font-mono uppercase font-bold tracking-wider transition-colors justify-center shadow-lg"
            >
              <span>Explore EERG Engine</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="text-xs font-mono text-zinc-500 text-center">
              160+ Stakeholders · 75 Root Causes · 50 Bottlenecks
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 06 — ROOT-CAUSE GRAPH (11-TIER BENTO CAROUSEL) */}
      {/* ============================================================ */}
      <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/[0.08] space-y-10">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <span>06 — Systemic Decomposition</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            The 11-tier root-cause chain
          </h2>
          <p className="text-base text-zinc-400">
            Every operational breakdown follows an exact chain from surface stakeholder complaint down to paying customer opportunity. Select any tier below.
          </p>
        </div>

        {/* Cupertino Horizontal Strip */}
        <div className="overflow-x-auto pb-4 custom-scrollbar">
          <div className="flex items-center gap-2 min-w-[950px]">
            {rootCauseChain.map((tier, idx) => {
              const isSelected = idx === activeChainIndex;
              return (
                <button
                  key={tier.tier}
                  onClick={() => setActiveChainIndex(idx)}
                  className={`p-3.5 rounded-2xl text-left border flex-1 transition-all ${
                    isSelected
                      ? 'bg-white text-black border-white shadow-xl'
                      : 'bg-white/[0.02] text-zinc-400 border-white/[0.08] hover:border-white/[0.2] hover:text-white'
                  }`}
                >
                  <span className={`font-mono text-[9px] block mb-1 uppercase ${isSelected ? 'text-zinc-600' : 'text-zinc-500'}`}>
                    TIER {tier.tier}
                  </span>
                  <div className={`font-extrabold text-[11px] tracking-tight truncate ${isSelected ? 'text-black' : 'text-white'}`}>
                    {tier.label}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Tier Deep Card */}
        {(() => {
          const currentTier = rootCauseChain[activeChainIndex];
          return (
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent border border-white/[0.12] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-5 space-y-2">
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                  TIER {currentTier.tier} OF 11
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {currentTier.label}
                </h3>
                <div className="text-xs font-mono text-emerald-400 pt-1">
                  Example: {currentTier.role}
                </div>
              </div>

              <div className="md:col-span-7 border-t md:border-t-0 md:border-l border-white/[0.08] pt-6 md:pt-0 md:pl-8 flex items-center">
                <p className="text-base text-zinc-300 leading-relaxed font-sans">
                  {currentTier.detail}
                </p>
              </div>
            </div>
          );
        })()}
      </section>

      {/* ============================================================ */}
      {/* SECTION 07 — MANY → FEWER (CONVERGENCE FUNNEL) */}
      {/* ============================================================ */}
      <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/[0.08] space-y-10">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <span>07 — Convergence Principle</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Many problems → fewer root causes
          </h2>
          <p className="text-base text-zinc-400">
            Dozens of different complaints across casting, soundstages, grip gear, and distribution converge mathematically into just 4 systemic root causes.
          </p>
        </div>

        <EERGConvergenceVisual />
      </section>

      {/* ============================================================ */}
      {/* SECTION 08 — OPPORTUNITY (APPLE BENTO CARDS) */}
      {/* ============================================================ */}
      <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/[0.08] space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
              <span>08 — Commercial Value Creation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Systemic problems reveal systemic opportunities.
            </h2>
            <p className="text-base text-zinc-400">
              When a problem affects multiple stakeholders and causes millions in damage, someone is willing to pay to eliminate it.
            </p>
          </div>

          <Link
            to="/opportunities"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white underline self-start md:self-auto"
          >
            <span>View Full Opportunity Radar</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Cupertino Opportunity Bento Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              id: 'OPP-01',
              title: 'Verified talent intelligence',
              cause: 'Information Fragmentation',
              buyer: 'Studio Physical Production & Casting Agencies',
              impact: 'Reduces casting search cycle from 4 weeks to 72 hours.',
              status: 'Validated',
            },
            {
              id: 'OPP-02',
              title: 'Dark capacity soundstage routing',
              cause: 'Asset Under-Utilization',
              buyer: 'Soundstage Facilities & Independent Producers',
              impact: 'Monetizes unbooked gap weeks with zero ownership cost.',
              status: 'Validated',
            },
            {
              id: 'OPP-03',
              title: 'Living dependency cascade sentinel',
              cause: 'Dependency Visibility Failure',
              buyer: 'Completion Bond Companies & Studio Risk Heads',
              impact: 'Halts set-side schedule shockwaves before contingency depletion.',
              status: 'Observed',
            },
          ].map((card) => (
            <div
              key={card.id}
              className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent border border-white/[0.1] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:border-white/[0.25] transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-3">
                  <span className="font-mono text-xs font-bold text-white px-2 py-0.5 rounded bg-white/[0.08]">{card.id}</span>
                  <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider">{card.status}</span>
                </div>
                <div className="font-mono text-[10px] text-zinc-500 uppercase">{card.cause}</div>
                <h3 className="text-xl font-extrabold text-white tracking-tight mt-1">{card.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">{card.impact}</p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-zinc-400">
                <span className="text-zinc-500 block text-[10px] uppercase">Paying Customer:</span>
                <span className="text-white font-semibold">{card.buyer}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 09 — ACTION: UNDERSTAND. CONNECT. ORCHESTRATE. MEASURE. */}
      {/* ============================================================ */}
      <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/[0.08] space-y-10">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <span>09 — The Execution Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Understand. Connect. Orchestrate. Measure.
          </h2>
          <p className="text-base text-zinc-400">
            Four coordinated disciplines that turn fragmented chaos into synchronized entertainment execution.
          </p>
        </div>

        {/* 4 Apple Bento Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              num: '01',
              title: 'Understand',
              desc: 'Trace root causes, bottlenecks, and failure propagation through the EERG knowledge graph.',
              link: '/eerg',
              cta: 'Explore EERG',
            },
            {
              num: '02',
              title: 'Connect',
              desc: 'Algorithmic matching across verified talent, dark soundstages, camera optics, and locations.',
              link: '/connect',
              cta: 'See Connect Protocol',
            },
            {
              num: '03',
              title: 'Orchestrate',
              desc: 'Active execution governance, live schedule shockwave balancing, and variance resolution.',
              link: '/orchestrate',
              cta: 'See Orchestration',
            },
            {
              num: '04',
              title: 'Measure',
              desc: 'Continuous operational telemetry: dark capacity yield, cost leakage, and decision intelligence.',
              link: '/measure',
              cta: 'See Telemetry Metrics',
            },
          ].map((pillar) => (
            <div
              key={pillar.num}
              className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent border border-white/[0.1] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:border-white/[0.25] transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div>
                <span className="font-mono text-xs text-zinc-500 uppercase">{pillar.num} PILLAR</span>
                <h3 className="text-2xl font-extrabold text-white tracking-tight mt-1">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">{pillar.desc}</p>
              </div>
              <Link
                to={pillar.link}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:text-zinc-300 font-semibold pt-4 border-t border-white/[0.06]"
              >
                <span>{pillar.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 10 — FINAL LOOP & KEYNOTE CTA (APPLE LUXURY) */}
      {/* ============================================================ */}
      <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto space-y-16">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <span>10 — The Continuous Flywheel</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Understand → Connect → Orchestrate → Measure → Learn → Improve
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            DIGISYNQ is a self-reinforcing closed-loop system where every production generates telemetry that sharpens the intelligence graph for the entire entertainment industry.
          </p>
        </div>

        {/* EERG Closed Loop Flywheel Component */}
        <EERGFlywheel />

        {/* Apple Master CTA Card */}
        <div className="p-10 sm:p-14 rounded-3xl bg-white text-black flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-[0_20px_60px_rgba(255,255,255,0.15)]">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-600 font-semibold">
              OPERATIONAL ENGAGEMENT
            </span>
            <h3 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-black">
              Explore the system or start with an active problem.
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed font-sans">
              Connect directly into the asset-light mechanism: submit an urgent production breakdown, index idle equipment, or request an enterprise intelligence briefing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <Link
              to="/participate"
              className="bg-black text-white hover:bg-zinc-800 px-8 py-4 rounded-full text-xs font-mono uppercase font-bold tracking-wider transition-colors text-center shadow-lg"
            >
              Start With a Problem →
            </Link>
            <Link
              to="/ecosystem"
              className="bg-transparent text-black border border-black hover:bg-black/5 px-8 py-4 rounded-full text-xs font-mono uppercase font-bold tracking-wider transition-colors text-center"
            >
              Explore Ecosystem →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
