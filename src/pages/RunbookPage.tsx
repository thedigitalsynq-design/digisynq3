import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ArrowUpRight, Check, ShieldCheck, 
  Cpu, Compass, Zap, Layers, FileText, Activity, Clock, ChevronRight
} from 'lucide-react';

const RUNBOOK_SECTIONS = [
  { id: 'model', label: '01. Operating Model' },
  { id: 'commercials', label: '02. Commercial Model' },
  { id: 'execution', label: '03. Execution Protocol' },
  { id: 'playbooks', label: '04. Stakeholder Playbooks' },
  { id: 'governance', label: '05. Risk & Governance' },
  { id: 'differentiation', label: '06. Differentiation' },
];

const COMMERCIAL_STREAMS = [
  {
    code: 'REV-01',
    name: 'Problem-Solving Engagements',
    description: 'Clients engage DigiSynq to diagnose, map, and resolve acute structural bottlenecks in production, scheduling, or facility access.',
    structure: 'Fixed scoping and diagnostic fee based on project complexity and turnaround timeline.',
    deliverable: 'Constraint Audit, Resolution Dossier & Multi-Party Covenant.',
  },
  {
    code: 'REV-02',
    name: 'Project Coordination Retainers',
    description: 'Ongoing operational alignment across pre-production, filming, camera-to-cloud dailies telemetry, and post-turnover workflows.',
    structure: 'Milestone-based coordination compensation aligned with key delivery gates.',
    deliverable: 'Live Telemetry Dashboard, Schedule Governance & Inter-Department Alignment.',
  },
  {
    code: 'REV-03',
    name: 'Talent & Capacity Synchronization',
    description: 'Commercial arrangements for discovering, verifying, and routing specialized craft guild department heads and equipment inventory.',
    structure: 'Direct transparent coordination fees without the 20% commission tolls of traditional talent agencies.',
    deliverable: 'Verified Roster Matching, Rate Parity Contracts & Crew Schedules.',
  },
  {
    code: 'REV-04',
    name: 'Guild Capability Workshops',
    description: 'Intensive hands-on technical labs bridging creative professionals and crews into modern virtual production and digital workflows.',
    structure: 'Tuition fees, studio sponsorships, and institutional development contracts.',
    deliverable: 'Practical Soundstage Training, Verified Workflows & Industry Placement.',
  },
  {
    code: 'REV-05',
    name: 'Audience & Release Coordination',
    description: 'Programmatic release windowing across theatrical circuits, OTT streaming platforms, and international territorial syndication.',
    structure: 'Distribution coordination fee tied to release execution and density optimization.',
    deliverable: 'Pre-Demand Density Modeling, DCP Circuit Dispatch & Box Office Audit.',
  },
  {
    code: 'REV-06',
    name: 'Strategic Facility Partnerships',
    description: 'Commercial frameworks with soundstage complexes, LED volume operators, and equipment houses to monetize dark turnaround dates.',
    structure: 'Shared upside from activated floor liquidity that would otherwise sit dark and unbooked.',
    deliverable: 'Burst-Occupancy Calendars, Pre-Rigging Protocols & Facility Agreements.',
  },
];

const EXECUTION_STAGES = [
  {
    phase: 'Stage 01',
    name: 'Constraint Diagnostic & Triage',
    timeframe: 'Days 01 – 03',
    desc: 'The project intake is audited for operational bottlenecks, timeline dependencies, stage requirements, and specialized talent gaps. We separate symptoms from root causes.',
    actions: [
      'Analyze script breakdown and department requirements',
      'Identify availability gaps across soundstages, equipment, and key crew',
      'Audit budget pacing against deliverable milestones',
    ],
  },
  {
    phase: 'Stage 02',
    name: 'Distributed Capacity Discovery',
    timeframe: 'Days 04 – 07',
    desc: 'DigiSynq scans its network for unbooked partner studio floor dates, verified guild technicians, and compatible post-production suites with available bandwidth.',
    actions: [
      'Match requirements against regional partner studio dark dates',
      'Index verified guild craft heads available for project dates',
      'Confirm technical compatibility for camera and volume rigs',
    ],
  },
  {
    phase: 'Stage 03',
    name: 'Multi-Party Covenant Structuring',
    timeframe: 'Days 08 – 12',
    desc: 'All participating nodes are bound by clear milestone covenants, standardized rate cards, and transparent delivery dates with zero hidden broker markups.',
    actions: [
      'Execute neutral coordination covenants across all participants',
      'Lock stage floor access on fractional burst-occupancy terms',
      'Establish clean-room milestone triggers for capital releases',
    ],
  },
  {
    phase: 'Stage 04',
    name: 'Production Telemetry & Governance',
    timeframe: 'Principal Photography',
    desc: 'During active production, DigiSynq monitors camera-to-cloud dailies telemetry, schedule adherence, and department dependencies to prevent delivery stalls.',
    actions: [
      'Track dailies telemetry and camera ingest in real time',
      'Coordinate dynamic rescheduling if weather or location shifts occur',
      'Provide neutral progress verification to producers and financiers',
    ],
  },
  {
    phase: 'Stage 05',
    name: 'Milestone-Tied Escrow Disbursement',
    timeframe: 'Post-Production & VFX',
    desc: 'Capital tranches are unlocked systematically upon verified scene wraps and shot turnovers, ensuring vendors are paid promptly and equity is protected.',
    actions: [
      'Verify completed picture and sound turnovers against technical specs',
      'Release milestone funds to editorial, color, and VFX teams',
      'Enforce scope freeze covenants to eliminate uncompensated overruns',
    ],
  },
  {
    phase: 'Stage 06',
    name: 'Release Windowing & Realization',
    timeframe: 'Theatrical & Distribution',
    desc: 'Converting coordinated production capacity into audience reach, box office yield, and long-tail library monetization across screens and platforms.',
    actions: [
      'Coordinate targeted release windows with regional exhibitor circuits',
      'Structure international and digital ancillary delivery packages',
      'Conduct final revenue attribution and archival preservation',
    ],
  },
];

const STAKEHOLDER_PLAYBOOKS = [
  {
    id: 'producers',
    name: 'For Producers & Creators',
    headline: 'Access studio-grade resources without fixed overhead debt.',
    points: [
      'Submit an intake describing your project timeline and constraint bottlenecks.',
      'Access available partner stages, LED volumes, and verified guild crews at fair market rates.',
      'Maintain 100% creative control without taking on oppressive mezzanine debt.',
      'Rely on DigiSynq for neutral milestone tracking and inter-department synchronization.',
    ],
  },
  {
    id: 'talent',
    name: 'For Guild Craftspeople & Crews',
    headline: 'Continuous bookings with guaranteed compensation parity.',
    points: [
      'Index your verified availability, union credits, and technical specializations.',
      'Directly connect to funded entertainment productions in need of your exact craft.',
      'Eliminate the 15–20% commission tolls typical of traditional talent representation.',
      'Receive milestone-backed payment security with zero uncompensated scope creep.',
    ],
  },
  {
    id: 'facilities',
    name: 'For Studio, Stage & Venue Owners',
    headline: 'Monetize dark floors and turnaround lulls with zero friction.',
    points: [
      'List unbooked stage dates, volume windows, and equipment packages with DigiSynq.',
      'Receive pre-vetted, bonded independent productions ready for burst occupancy.',
      'Transform empty floor time into high-margin gross operating revenue.',
      'Benefit from standardized pre-vis assets that eliminate on-set rig delays.',
    ],
  },
  {
    id: 'post',
    name: 'For Post, VFX & Audio Facilities',
    headline: 'Protected turnovers with milestone-guaranteed escrow.',
    points: [
      'Receive standardized camera-to-cloud dailies and clean turnover packages.',
      'Operate under clear milestone-tied escrow agreements that guarantee prompt pay.',
      'Eliminate client payment disputes through neutral third-party verification.',
      'Maintain continuous pipeline occupancy across color, mixing, and visual effects suites.',
    ],
  },
  {
    id: 'financiers',
    name: 'For Financiers & Capital Partners',
    headline: 'Live telemetry that mitigates entertainment completion risk.',
    points: [
      'Deploy capital against real-time operational telemetry rather than opaque verbal updates.',
      'Structure tranches that release only upon verified scene wraps and turnover approvals.',
      'Drastically reduce default probability through disciplined workflow coordination.',
      'Gain clear chain-of-title visibility and structured theatrical delivery compliance.',
    ],
  },
  {
    id: 'distributors',
    name: 'For Exhibitors & Streaming Platforms',
    headline: 'Targeted content with localized pre-demand density.',
    points: [
      'Program high-occupancy theatrical titles routed around studio tentpole clashes.',
      'Receive certified DCI/IMF delivery masters on guaranteed release schedules.',
      'Access pre-demand audience signals that optimize marketing spend and screen density.',
      'Collaborate on event screenings, localized windows, and premium presentation formats.',
    ],
  },
];

export function RunbookPage() {
  const [activePlaybookId, setActivePlaybookId] = useState('producers');
  const activePlaybook = STAKEHOLDER_PLAYBOOKS.find(p => p.id === activePlaybookId) || STAKEHOLDER_PLAYBOOKS[0];

  return (
    <main className="bg-[#07080b] text-[#ECEEF5] selection:bg-white/20 selection:text-white">

      {/* ── 01. Hero Section ── */}
      <section className="pt-40 sm:pt-48 pb-20 sm:pb-28 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-zinc-400 mb-8 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>DigiSynq Operational Codex & Runbook</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] [letter-spacing:-0.035em] mb-8">
            The business architecture<br />
            of DigiSynq.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-3xl font-normal mb-10">
            An exhaustive operational runbook detailing how DigiSynq functions as an asset-light coordination and orchestration network across the entertainment ecosystem — our business mechanics, commercial models, governance covenants, and value generation.
          </p>

          {/* Quick Anchor Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {RUNBOOK_SECTIONS.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="px-3 py-1.5 rounded-full text-xs font-mono bg-white/[0.03] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20 transition-all"
              >
                {sec.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02. SECTION 01: THE OPERATING MODEL ── */}
      <section id="model" className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06] scroll-mt-20">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
            01. Core Business Logic
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            How the asset-light model creates value
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Entertainment already possesses immense physical capacity, creative brilliance, and capital. What it lacks is coordination. DigiSynq operates as the neutral connective layer that routes demand to existing resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-8 rounded-3xl bg-[#090b10] border border-white/[0.06] space-y-4">
            <span className="text-xs font-mono text-zinc-500 uppercase block">Principle 01</span>
            <h3 className="text-lg font-bold text-white">Use Existing Capacity</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              We do not build soundstages or purchase equipment fleets. We identify dark dates across existing facilities and connect them directly to active production requirements.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#090b10] border border-white/[0.06] space-y-4">
            <span className="text-xs font-mono text-zinc-500 uppercase block">Principle 02</span>
            <h3 className="text-lg font-bold text-white">Connect the Nodes</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              We don’t need to own every node in the entertainment ecosystem. By maintaining neutral relationships across all participants, we eliminate agency bias and middleman tolls.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#090b10] border border-white/[0.06] space-y-4">
            <span className="text-xs font-mono text-zinc-500 uppercase block">Principle 03</span>
            <h3 className="text-lg font-bold text-white">Milestone Governance</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Value is sustained through structured covenants. We ensure that financing, stage floors, craft talent, and post-turnovers operate on synchronized milestones with transparent accountability.
            </p>
          </div>
        </div>

        {/* Operating Flow Canvas */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#090b10] border border-white/[0.08] text-xs font-mono">
          <span className="text-emerald-400 uppercase tracking-wider block mb-4 font-bold">
            End-to-End Orchestration Architecture
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/[0.06]">
            <div>
              <span className="text-zinc-500 block mb-1">01. DISTRIBUTED CAPACITY</span>
              <p className="text-zinc-300 leading-relaxed font-sans text-xs">
                Unbooked stage days, verified guild availability, underutilized post suites, and regional screen slots.
              </p>
            </div>
            <div>
              <span className="text-emerald-400 block mb-1">02. DIGISYNQ LAYER</span>
              <p className="text-zinc-300 leading-relaxed font-sans text-xs">
                Discovery engine, capacity matching, multi-party covenants, live telemetry, and milestone-tied escrow.
              </p>
            </div>
            <div>
              <span className="text-white block mb-1">03. PRODUCTION DEMAND</span>
              <p className="text-zinc-300 leading-relaxed font-sans text-xs">
                Indie features, streaming series, live events, and commercial campaigns delivering on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. SECTION 02: COMMERCIAL ARCHITECTURE ── */}
      <section id="commercials" className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06] scroll-mt-20">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
            02. Commercial Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Commercial architecture & revenue streams
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            DigiSynq generates economic value through coordination, capacity matching, and workflow orchestration rather than by extracting landlord rents on physical assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMMERCIAL_STREAMS.map((stream) => (
            <div
              key={stream.code}
              className="p-8 rounded-3xl bg-[#090b10] border border-white/[0.06] hover:border-white/15 transition-all flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-emerald-400 font-medium">{stream.code}</span>
                  <span className="text-zinc-500">Commercial Stream</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{stream.name}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">{stream.description}</p>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-zinc-300">
                  <span className="text-zinc-500 font-mono block mb-1 text-[10px] uppercase">Structure</span>
                  {stream.structure}
                </div>
              </div>
              <div className="pt-4 border-t border-white/[0.06] text-xs text-zinc-400 flex items-center justify-between">
                <span className="text-zinc-500">Key Deliverable:</span>
                <span className="text-white font-medium text-right text-[11px]">{stream.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 04. SECTION 03: EXECUTION PROTOCOL ── */}
      <section id="execution" className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06] scroll-mt-20">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
            03. Operational Lifecycle
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            The 6-stage project execution protocol
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Every engagement follows a structured progression from initial constraint diagnosis to final release realization.
          </p>
        </div>

        <div className="space-y-4">
          {EXECUTION_STAGES.map((stg) => (
            <div
              key={stg.phase}
              className="p-8 rounded-3xl bg-[#090b10] border border-white/[0.06] hover:border-white/15 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-white/[0.06] gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    {stg.phase}
                  </span>
                  <h3 className="text-xl font-bold text-white">{stg.name}</h3>
                </div>
                <span className="text-xs font-mono text-zinc-500">{stg.timeframe}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-6">
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{stg.desc}</p>
                </div>
                <div className="md:col-span-6 space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                    Action Protocols Executed:
                  </span>
                  {stg.actions.map((act, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <div className="w-4 h-4 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                        <Check size={10} />
                      </div>
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 05. SECTION 04: STAKEHOLDER PLAYBOOKS ── */}
      <section id="playbooks" className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06] scroll-mt-20">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
            04 // Integration Guides
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Stakeholder operating manuals
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            How each participant category interfaces with the DigiSynq network to coordinate capacity and extract value.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Selector Tabs */}
          <div className="lg:col-span-4 space-y-2">
            {STAKEHOLDER_PLAYBOOKS.map((p) => {
              const isActive = p.id === activePlaybookId;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePlaybookId(p.id)}
                  className={`w-full p-4 rounded-2xl text-left border text-xs transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-white text-black font-medium border-white shadow-sm'
                      : 'bg-white/[0.015] border-white/[0.06] text-zinc-400 hover:text-white hover:border-white/15'
                  }`}
                >
                  <span>{p.name}</span>
                  <ChevronRight size={14} className={isActive ? 'text-black' : 'opacity-30'} />
                </button>
              );
            })}
          </div>

          {/* Active Playbook Slate */}
          <div className="lg:col-span-8 p-8 sm:p-12 rounded-3xl bg-[#090b10] border border-white/[0.08] space-y-6">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-2 font-medium">
                Operating Playbook
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">{activePlaybook.name}</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">{activePlaybook.headline}</p>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/[0.06]">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-2">
                Operational Protocols:
              </span>
              {activePlaybook.points.map((pt, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-400">
                  <div className="w-5 h-5 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                    <Check size={12} />
                  </div>
                  <span className="leading-relaxed">{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
              <Link
                to="/start"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-xs hover:bg-zinc-200 transition-all shadow-md"
              >
                Engage as {activePlaybook.name.replace('For ', '')}
                <ArrowRight size={13} />
              </Link>
              <span className="text-xs font-mono text-zinc-500">
                Confidential onboarding
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06. SECTION 05: RISK GOVERNANCE & COVENANTS ── */}
      <section id="governance" className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06] scroll-mt-20">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
            05. Risk Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Institutional risk covenants
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Coordination across independent entertainment stakeholders requires institutional trust. DigiSynq operates under four non-negotiable governance principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-[#090b10] border border-white/[0.06] space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-emerald-400">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-lg font-bold text-white">01. Non-Disclosure & IP Security</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              DigiSynq does not claim copyright, title, or intellectual property rights over connected projects. All creative scripts, treatments, and footage are protected by strict legal covenants.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#090b10] border border-white/[0.06] space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-emerald-400">
              <Zap size={20} />
            </div>
            <h3 className="text-lg font-bold text-white">02. Anti-Rent-Seeking Neutrality</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              We never inflate facility rates, take undisclosed kickbacks from vendors, or lock creative talent into exclusive agency tolls. Our compensation is transparently defined in coordination agreements.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#090b10] border border-white/[0.06] space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-emerald-400">
              <Activity size={20} />
            </div>
            <h3 className="text-lg font-bold text-white">03. Clean-Room Milestone Escrow</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Capital disbursements are tied directly to verified scene wraps, picture locks, or color turnovers. This prevents premature cash depletion and protects vendors from unpaid work.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#090b10] border border-white/[0.06] space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-emerald-400">
              <Compass size={20} />
            </div>
            <h3 className="text-lg font-bold text-white">04. Zero Balance-Sheet Conflict</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Because DigiSynq does not own camera fleets or studio real estate, we have no incentive to steer productions into suboptimal packages. We match projects purely based on creative fit and schedule.
            </p>
          </div>
        </div>
      </section>

      {/* ── 07. SECTION 06: DIFFERENTIATION ── */}
      <section id="differentiation" className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06] scroll-mt-20">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
            06. Strategic Differentiation
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Why coordination is not a marketplace
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Understanding the distinction between DigiSynq and other traditional industry models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-[#090b10] border border-white/[0.06] flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase block mb-2">Vs. Marketplaces</span>
              <h3 className="text-lg font-bold text-white mb-3">Orchestration, Not Listings</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Marketplaces simply host static profiles and charge transaction fees. DigiSynq actively coordinates workflows, verifies stage compatibility, manages schedules, and governs delivery milestones.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] text-[11px] text-zinc-500">
              Active governance vs. passive listings
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#090b10] border border-white/[0.06] flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase block mb-2">Vs. Legacy Studios</span>
              <h3 className="text-lg font-bold text-white mb-3">Asset-Light, Not Heavy Debt</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Legacy studios carry massive real estate overhead and equipment depreciation that forces high markups. DigiSynq accesses network capacity on demand, keeping capital intensity low.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] text-[11px] text-zinc-500">
              Infinite flexibility vs. fixed asset debt
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#090b10] border border-white/[0.06] flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase block mb-2">Vs. Consultancies</span>
              <h3 className="text-lg font-bold text-white mb-3">Embedded Execution, Not Decks</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Traditional consultants deliver theoretical slide presentations. DigiSynq embeds directly across stage bookings, camera-to-cloud dailies, and distribution release execution.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] text-[11px] text-zinc-500">
              Operational execution vs. advisory slides
            </div>
          </div>
        </div>
      </section>

      {/* ── 08. Closing CTA ── */}
      <section className="py-32 sm:py-44 px-6 sm:px-8 max-w-4xl mx-auto text-center border-t border-white/[0.06]">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
          Initialize a project runbook
        </h2>
        <p className="text-base text-zinc-400 max-w-xl mx-auto leading-relaxed mb-10">
          Have an entertainment project, resource requirement, or capacity opportunity? Start a Synq and tell us what needs to be connected.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/start"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            Start a synq
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/the-synq"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] text-zinc-300 font-medium text-sm transition-all duration-200"
          >
            Read the codex
          </Link>
        </div>
      </section>

    </main>
  );
}
