import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Terminal, Activity, Layers, ShieldCheck, FlaskConical } from 'lucide-react';

interface ExperimentTrack {
  code: string;
  title: string;
  domain: string;
  metric: string;
  status: string;
}

const FEATURED_EXPERIMENTS: ExperimentTrack[] = [
  {
    code: 'EXP-01',
    title: 'Virtual Production & Unreal LED Volume Sync',
    domain: 'Real-Time Volume Rigs',
    metric: '< 4.2ms tracking delta',
    status: 'ACTIVE TRIAL',
  },
  {
    code: 'EXP-02',
    title: 'Camera-to-Cloud (C2C) Real-Time Ingest',
    domain: 'Editorial & Dailies',
    metric: '92% cycle time reduction',
    status: 'BENCHMARKING',
  },
  {
    code: 'EXP-03',
    title: 'Fractional Soundstage Burst-Occupancy',
    domain: 'Facility Economics',
    metric: '41% dark-floor recovery',
    status: 'PILOT STAGE',
  },
];

const FOUR_PULSES = [
  {
    step: '01',
    name: 'Production Intake',
    desc: 'A production shares its needs — schedule, stage size, crew, and delivery milestones. We map the full picture.',
    icon: Terminal,
  },
  {
    step: '02',
    name: 'Smart Matching',
    desc: 'We connect that demand to available soundstages, qualified crew, and post facilities — no idle capacity wasted.',
    icon: Layers,
  },
  {
    step: '03',
    name: 'Live Testing',
    desc: 'Before cameras roll, we trial the workflows, technology, and rigs in a controlled environment to eliminate risk.',
    icon: Activity,
  },
  {
    step: '04',
    name: 'Verified Settlement',
    desc: 'Payments and escrow release automatically when verified milestones are hit — no chasing, no disputes.',
    icon: ShieldCheck,
  },
];

const ENTRY_STRATA = [
  {
    code: '01',
    name: 'Story & Packaging',
    forWhom: 'Writers & IP Holders',
    link: '/how-it-works#protocol',
  },
  {
    code: '02',
    name: 'Pre-Production & Stages',
    forWhom: 'Directors & Producers',
    link: '/how-it-works#protocol',
  },
  {
    code: '03',
    name: 'On-Set Problem Solving',
    forWhom: 'Line Producers & DPs',
    link: '/how-it-works#protocol',
  },
  {
    code: '04',
    name: 'Post & VFX Delivery',
    forWhom: 'Post Heads & Editors',
    link: '/how-it-works#protocol',
  },
  {
    code: '05',
    name: 'Distribution & Release',
    forWhom: 'Exhibitors & Streamers',
    link: '/how-it-works#protocol',
  },
  {
    code: '06',
    name: 'Facility Revenue Recovery',
    forWhom: 'Studios & Rental Houses',
    link: '/how-it-works#protocol',
  },
];

export function HomePage() {
  return (
    <main className="bg-[#07080b] text-[#ECEEF5] selection:bg-white/20 selection:text-white min-h-screen">

      {/* ══════════════════════════════════════════════════════
          01 — HERO: MINIMAL, METAMORPHIC, HIGH-SIGNAL
         ══════════════════════════════════════════════════════ */}
      <section className="relative pt-40 sm:pt-48 pb-20 sm:pb-24 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-zinc-300 mb-8 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-emerald-400 font-medium">FIRST OF ITS KIND</span>
            <span className="text-zinc-600">//</span>
            <span className="text-white font-medium">The Asset-Light Entertainment Pipeline &amp; Labs</span>
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] [letter-spacing:-0.035em] mb-8">
            The Living Pipeline.<br />
            <span className="text-zinc-400 font-light">Entertainment in flow.</span>
          </h1>

          {/* Crisp, Focused Value Statement */}
          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-2xl font-normal mb-10">
            Entertainment projects don’t stall from a lack of vision — they stall when pipelines fracture between soundstages, crew, post, and capital. DigiSynq coordinates existing industry capacity into an unbroken, asset-light stream: <em>We are orchestrators. We are labs. We experiment.</em>
          </p>

          {/* High-Intent CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/start"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#06080d] hover:bg-zinc-200 font-medium text-sm tracking-wide transition-all duration-200 active:scale-95 shadow-sm"
              id="hero-start-synq-cta"
            >
              <span>Initiate a Synq</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/workshops"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-emerald-500/25 hover:border-emerald-500/40 bg-emerald-500/[0.03] hover:bg-emerald-500/[0.08] text-emerald-300 font-medium text-sm transition-all duration-200"
            >
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>Enter Synq Labs</span>
            </Link>
            <Link
              to="/the-synq"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] text-zinc-300 font-medium text-sm transition-all duration-200"
            >
              <span>The Codex</span>
            </Link>
          </div>
        </div>

        {/* Minimal Telemetry Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-20 sm:mt-24 pt-8 border-t border-white/[0.06]">
          <div>
            <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-1 font-mono">$0</div>
            <div className="text-xs text-zinc-400">Infrastructure we own</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-1 font-mono">100%</div>
            <div className="text-xs text-zinc-400">Partner-operated capacity</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-1 font-mono">6</div>
            <div className="text-xs text-zinc-400">Live R&amp;D trials running</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-1 font-mono">&lt; 48h</div>
            <div className="text-xs text-zinc-400">Average first response</div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          02 — THE 4 PULSES: ONE UNBROKEN STREAM
         ══════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 block">
              The Living Mechanism
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white [letter-spacing:-0.025em]">
              Four Pulses.<br />
              <span className="text-zinc-400 font-light">One unbroken stream.</span>
            </h2>
          </div>
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <span>Explore Full 4-Phase Protocol</span>
            <ArrowUpRight size={14} className="text-emerald-400" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FOUR_PULSES.map((pulse) => {
            const Icon = pulse.icon;
            return (
              <div
                key={pulse.step}
                className="p-6 rounded-2xl bg-[#090b10] border border-white/[0.06] hover:border-white/15 transition-all flex flex-col justify-between h-56"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-4 text-zinc-500">
                    <span className="text-emerald-400 font-bold">{pulse.step}</span>
                    <Icon className="w-4 h-4 text-zinc-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {pulse.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {pulse.desc}
                  </p>
                </div>
                <div className="text-[11px] font-mono text-zinc-600">
                  Continuous Flow
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          03 — OPEN ENTRY: ZERO THRESHOLD
         ══════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-zinc-400 font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>OPEN-ENTRY ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white [letter-spacing:-0.025em]">
              Zero Threshold.<br />
              <span className="text-zinc-400 font-light">Enter the stream anywhere.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
            No long onboarding. Any stakeholder — from a writer to a distributor — can join the pipeline at the stage most relevant to them.
          </p>
        </div>

        {/* Minimalist 6-Stage Entry Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {ENTRY_STRATA.map((stratum) => (
            <Link
              key={stratum.code}
              to="/start"
              state={{ role: stratum.forWhom, problem: `Entering at Stage ${stratum.code}: ${stratum.name}` }}
              className="p-4 rounded-2xl bg-white/[0.015] border border-white/[0.06] hover:border-emerald-500/40 hover:bg-white/[0.03] transition-all group flex flex-col justify-between h-36"
            >
              <div>
                <span className="text-[10px] font-mono text-emerald-400 block mb-2">STAGE {stratum.code}</span>
                <h3 className="text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                  {stratum.name}
                </h3>
              </div>
              <div className="pt-2 border-t border-white/[0.04] text-[10px] text-zinc-400 flex items-center justify-between">
                <span className="truncate">{stratum.forWhom}</span>
                <ArrowRight size={10} className="text-emerald-400 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          04 — SYNQ LABS: "WE ARE LABS. WE EXPERIMENT."
         ══════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#080a0f] border border-white/[0.08] relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-mono mb-3">
                <FlaskConical size={12} />
                <span>APPLIED R&amp;D // SYNQ LABS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white [letter-spacing:-0.03em] mb-3">
                We are labs.<br />
                <span className="text-zinc-400 font-light">We experiment.</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
                Before any tool or workflow enters the pipeline, we test it — in controlled trials with real data, real rigs, and measurable outcomes. No guesswork on a live set.
              </p>
            </div>

            <Link
              to="/workshops"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-medium text-xs hover:bg-zinc-200 transition-all shrink-0 shadow-md"
            >
              <span>Explore All 6 Trials</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* 3 Streamlined Benchmark Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {FEATURED_EXPERIMENTS.map((exp) => (
              <div
                key={exp.code}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono text-emerald-400 font-bold">{exp.code}</span>
                    <span className="text-[10px] font-mono text-zinc-400">{exp.status}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1 leading-snug">
                    {exp.title}
                  </h3>
                  <span className="text-xs text-zinc-400 font-mono block mb-3">{exp.domain}</span>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-zinc-400 text-[11px]">Benchmark</span>
                  <span className="text-emerald-300 font-mono font-medium">{exp.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          05 — CLOSING CTA: METAMORPHIC, DIRECT
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-4xl mx-auto text-center border-t border-white/[0.06]">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white [letter-spacing:-0.03em] mb-4">
          Ready to move?<br />
          <span className="text-zinc-400 font-light">Tell us what's stuck.</span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 max-w-md mx-auto leading-relaxed mb-8">
          Whether you need a stage, a crew, a post pipeline, or just a clear plan — share your project and we'll show you where DigiSynq connects.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/start"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#06080d] hover:bg-zinc-200 font-medium text-sm tracking-wide transition-all duration-200 active:scale-95 shadow-sm"
          >
            <span>Start a Synq</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/runbook"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] text-zinc-300 font-medium text-sm transition-all duration-200"
          >
            <span>Business Runbook</span>
          </Link>
        </div>
      </section>

    </main>
  );
}
