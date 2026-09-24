import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Sparkles, Terminal, Activity, Layers, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface ExperimentTrack {
  code: string;
  title: string;
  status: 'ACTIVE TRIAL' | 'BENCHMARKING' | 'DEPLOYED';
  domain: string;
  metric: string;
}

const EXPERIMENTS: ExperimentTrack[] = [
  {
    code: 'EXP-01',
    title: 'Virtual Production & Unreal LED Volume Latency Sync',
    status: 'ACTIVE TRIAL',
    domain: 'Real-Time Graphics',
    metric: '< 4.2ms camera tracking delta',
  },
  {
    code: 'EXP-02',
    title: 'Camera-to-Cloud (C2C) Turnaround Telemetry',
    status: 'ACTIVE TRIAL',
    domain: 'Post Pipeline',
    metric: '92% reduction in dailies cycle time',
  },
  {
    code: 'EXP-03',
    title: 'Fractional Soundstage Burst-Occupancy Mesh',
    status: 'BENCHMARKING',
    domain: 'Infrastructure',
    metric: '41% recovery of idle dark-floor days',
  },
  {
    code: 'EXP-04',
    title: 'Pre-Demand Audience Density Clustering',
    status: 'DEPLOYED',
    domain: 'Distribution',
    metric: '3.4x localized opening footprint efficiency',
  },
];

export function HomePage() {
  const [activeMechanismStep, setActiveMechanismStep] = useState(0);

  const MECHANISM_STEPS = [
    {
      step: '01',
      phase: 'DEMAND INGESTION',
      headline: 'A production specifies its critical constraints.',
      desc: 'Whether an independent feature, episodic series, or immersive live experience — productions submit their timeline, director attachments, volume needs, and capital milestones.',
      metricLabel: 'Intake Velocity',
      metricVal: '< 24 Hours',
      icon: Terminal,
    },
    {
      step: '02',
      phase: 'ASSET-LIGHT ROUTING',
      headline: 'We synchronize with existing partner capacity.',
      desc: 'DigiSynq owns zero physical stages or camera trucks. Instead, our coordination mesh instantly routes demand to dark days at premier studio lots, locked guild rosters, and certified VFX facilities.',
      metricLabel: 'Balance-Sheet Debt',
      metricVal: '$0.00 Fixed Assets',
      icon: Layers,
    },
    {
      step: '03',
      phase: 'SYNQ LABS DE-RISKING',
      headline: 'We are labs. We test and prove workflows before shoot day.',
      desc: 'In Synq Labs, creative and technical department heads run sandbox trials on LED volumes, camera-to-cloud dailies, and spatial pre-vis. We eliminate costly on-set improvisation.',
      metricLabel: 'Workflow Fidelity',
      metricVal: 'Zero On-Set Guesswork',
      icon: Activity,
    },
    {
      step: '04',
      phase: 'VALUE CAPTURE',
      headline: 'Capital clears on verified milestone covenants.',
      desc: 'Financiers disburse tranches only upon verified technical turnovers. Facilities monetize idle floor downtime. DigiSynq captures a milestone orchestration fee and performance upside.',
      metricLabel: 'Cost Compression',
      metricVal: '20–35% Lead-Time Saved',
      icon: ShieldCheck,
    },
  ];

  return (
    <main className="bg-[#07080b] text-[#ECEEF5] selection:bg-white/20 selection:text-white min-h-screen">

      {/* ══════════════════════════════════════════════════════
          01 — HERO: CINEMATIC LAB & ORCHESTRATION NETWORK
         ══════════════════════════════════════════════════════ */}
      <section className="relative pt-40 sm:pt-48 pb-20 sm:pb-28 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-zinc-300 mb-8 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-zinc-400">DIGISYNQ</span>
            <span className="text-zinc-600">//</span>
            <span className="text-white font-medium">Entertainment Lab &amp; Orchestration Network</span>
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] [letter-spacing:-0.035em] mb-8">
            We don’t build studios.<br />
            <span className="text-zinc-400 font-normal">We synchronize them.</span>
          </h1>

          {/* 10-Second Thesis */}
          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-3xl font-normal mb-10">
            DigiSynq is an asset-light coordination layer and experimental laboratory for entertainment. We route production demand to unbooked soundstages, top-tier guild talent, and post pipelines across the ecosystem — paired with active R&amp;D through <span className="text-white font-medium">Synq Labs</span>: <em>We are labs. We experiment.</em>
          </p>

          {/* Clean Restrained CTAs */}
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
              to="/runbook"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] text-zinc-300 font-medium text-sm transition-all duration-200"
            >
              <span>Business Runbook</span>
            </Link>
          </div>
        </div>

        {/* Core Metric Horizon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mt-20 sm:mt-28 pt-10 border-t border-white/[0.06]">
          <div>
            <div className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-1 font-mono">$0.00</div>
            <div className="text-xs text-zinc-400 leading-relaxed">Physical Asset Debt</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-1 font-mono">100%</div>
            <div className="text-xs text-zinc-400 leading-relaxed">Existing Industry Capacity</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-1 font-mono">EXP-06</div>
            <div className="text-xs text-zinc-400 leading-relaxed">Active Lab Trials</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-1 font-mono">&lt; 48h</div>
            <div className="text-xs text-zinc-400 leading-relaxed">Turnaround Telemetry</div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          02 — THE 10-SECOND MECHANISM (Crystal-Clear Commercial Architecture)
         ══════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 block">
            The Business Mechanism
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white [letter-spacing:-0.025em] mb-4">
            How DigiSynq works in four moves.
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Eliminating billions in idle production friction by synchronizing existing infrastructure with active demand.
          </p>
        </div>

        {/* Mechanism Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {MECHANISM_STEPS.map((m, idx) => {
            const Icon = m.icon;
            const isCurrent = idx === activeMechanismStep;
            return (
              <div
                key={m.step}
                onMouseEnter={() => setActiveMechanismStep(idx)}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? 'border-emerald-500/40 bg-white/[0.03] shadow-lg'
                    : 'border-white/[0.06] bg-[#090b10] hover:border-white/15'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-4 font-mono">
                    <span className="text-white font-bold">{m.step}</span>
                    <span className="text-[11px] uppercase tracking-wider text-emerald-400">{m.phase}</span>
                  </div>
                  <Icon className="w-5 h-5 text-emerald-400 mb-4" />
                  <h3 className="text-base font-semibold text-white mb-2 leading-snug">
                    {m.headline}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {m.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-zinc-400 text-[11px] font-mono">{m.metricLabel}</span>
                  <span className="text-white font-mono font-medium">{m.metricVal}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          03 — SYNQ LABS: "WE ARE LABS. WE EXPERIMENT."
         ══════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#080a0f] border border-white/[0.08] relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-mono mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>R&amp;D DIVISION // SYNQ LABS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white [letter-spacing:-0.03em] mb-4">
                We are labs. We experiment.
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
                We don't theorize about entertainment technology. We trial real-time virtual production, camera-to-cloud dailies, and fractional stage usage in empirical sandboxes before deploying them across active productions.
              </p>
            </div>

            <Link
              to="/workshops"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-xs hover:bg-zinc-200 transition-all shrink-0 shadow-md"
            >
              <span>View All 6 Lab Tracks</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Live Experiment Status Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EXPERIMENTS.map((exp) => (
              <div
                key={exp.code}
                className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-mono text-emerald-400 font-medium">{exp.code}</span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[10px] font-mono text-zinc-300">
                      <span className="w-1 h-1 rounded-full bg-emerald-400" />
                      {exp.status}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5 leading-snug">
                    {exp.title}
                  </h3>
                  <span className="text-xs text-zinc-400 font-mono block mb-4">{exp.domain}</span>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-zinc-400 text-[11px] font-mono">Empirical Benchmark</span>
                  <span className="text-emerald-300 font-mono font-medium">{exp.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          04 — THE VALUE EXCHANGE (How Every Stakeholder Wins)
         ══════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 block">
            Commercial Architecture
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white [letter-spacing:-0.025em] mb-4">
            Economic alignment across the ecosystem.
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            DigiSynq generates value through coordination efficiency, not by extracting landlord rents on physical equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-[#090b10] border border-white/[0.06] flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase block mb-3">01 // FOR PRODUCTIONS</span>
              <h3 className="text-lg font-semibold text-white mb-2">Turnkey Agility</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                Lock verified department heads, unbooked LED stages, and bonded finishing pipelines in days instead of months of broker negotiations.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-emerald-400">
              20–35% compressed schedule
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#090b10] border border-white/[0.06] flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase block mb-3">02 // FOR STUDIOS &amp; FACILITIES</span>
              <h3 className="text-lg font-semibold text-white mb-2">100% Incremental Yield</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                Monetize dark floors, turnaround gaps, and unbooked camera packages with pre-vetted, bonded productions without sales overhead.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-emerald-400">
              Recovered dark-day revenue
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#090b10] border border-white/[0.06] flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase block mb-3">03 // FOR CAPITAL &amp; DISTRIBUTORS</span>
              <h3 className="text-lg font-semibold text-white mb-2">Milestone Covenants</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                Disburse tranches against verified technical turnovers and cloud dailies telemetry, shielding investments from speculative budget overruns.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-emerald-400">
              Zero speculative leakage
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          05 — CALL TO ACTION (Minimal, Confident, Direct)
         ══════════════════════════════════════════════════════ */}
      <section className="py-28 sm:py-36 px-6 sm:px-8 max-w-4xl mx-auto text-center border-t border-white/[0.06]">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4 block">
          Initiate Orchestration
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white [letter-spacing:-0.03em] mb-6">
          Bring us your production constraint.
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed mb-10 font-normal">
          Whether you need soundstage turnaround access, guild department heads, or virtual production sandbox validation — we synchronize what entertainment needs.
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
            <span>Read Business Runbook</span>
          </Link>
        </div>
      </section>

    </main>
  );
}
