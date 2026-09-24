import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ArrowUpRight, Check, ChevronRight, 
  FlaskConical, Cpu, Layers, Radio, Sparkles, Activity, ShieldCheck 
} from 'lucide-react';
import { WORKSHOP_PROGRAMS } from '../data/core_data';

interface ExperimentTrack {
  code: string;
  title: string;
  domain: string;
  hypothesis: string;
  methodology: string;
  status: 'ACTIVE TRIAL' | 'BENCHMARKING' | 'SANDBOX DEPLOYMENT' | 'PILOT STAGE';
  targetOutcome: string;
}

const ACTIVE_EXPERIMENTS: ExperimentTrack[] = [
  {
    code: 'EXP-01',
    title: 'Virtual Production & Real-Time Volume Calibration',
    domain: 'Virtual Production / Unreal Engine',
    hypothesis: 'Pre-flight virtual asset standardization and multi-camera parallax sync eliminates costly on-set real-time adjustments.',
    methodology: 'Stress-testing photorealistic Unreal Engine 5.4 environments across partner LED volumes and camera tracking rigs.',
    status: 'ACTIVE TRIAL',
    targetOutcome: 'Zero on-set asset adjustments; strict adherence to stage shoot schedules without volume overtime bleed.',
  },
  {
    code: 'EXP-02',
    title: 'Camera-to-Cloud (C2C) Real-Time Ingest Telemetry',
    domain: 'Data & Editorial Pipeline',
    hypothesis: 'Streaming encrypted proxy dailies directly from camera packages to remote editorial suites reduces turnover latency from 72 hours to < 4 hours.',
    methodology: 'Benchmarking cellular bonded and satellite ingest from active field locations directly into finishing color and editorial pipelines.',
    status: 'BENCHMARKING',
    targetOutcome: 'Editorial rough-cuts available on wrap day; rapid cross-department review loops for directors and showrunners.',
  },
  {
    code: 'EXP-03',
    title: 'Fractional Soundstage Burst-Occupancy Protocols',
    domain: 'Facility Economics',
    hypothesis: 'Coordinating dark turnaround windows between long-term tenant bookings unlocks premium soundstage floors for agile productions at accessible rates.',
    methodology: 'Pilot scheduling frameworks with partner studio lots in South Asian production corridors to monetize idle stage floor days.',
    status: 'PILOT STAGE',
    targetOutcome: 'High floor utilization for facility operators; professional acoustic soundstages accessible to independent creators.',
  },
  {
    code: 'EXP-04',
    title: 'Spatial Audio & Multi-Channel Acoustic Pre-Modeling',
    domain: 'Sound Engineering',
    hypothesis: 'Integrating virtual acoustic room impulse response modeling during pre-production prevents phase cancellation and expensive re-mix passes.',
    methodology: 'A/B testing binaural monitoring and Dolby Atmos theatrical mastering setups across live set recording environments.',
    status: 'ACTIVE TRIAL',
    targetOutcome: 'Unified acoustic continuity from set recording directly through final multi-format theatrical/OTT mix.',
  },
  {
    code: 'EXP-05',
    title: 'AI-Assisted Packaging & Technical Feasibility Modeling',
    domain: 'Packaging & Pre-Production',
    hypothesis: 'Generative spatial pre-visualization and budget constraint modeling reduces script-to-greenlight packaging cycles by 60%.',
    methodology: 'Testing algorithmic department dependency mapping and automated line-item feasibility audits against verified guild rate cards.',
    status: 'SANDBOX DEPLOYMENT',
    targetOutcome: 'Fully bonded, feasible production architectures ready for director attachment and milestone capital release.',
  },
  {
    code: 'EXP-06',
    title: 'Pre-Demand Release Clustering & Screen Optimization',
    domain: 'Distribution & Exhibition',
    hypothesis: 'Coordinating regional audience density telemetry prevents premature multiplex screen eviction for independent and mid-budget features.',
    methodology: 'Deploying geo-targeted demand pooling and synchronized weekend event screening clusters across multiplex circuits.',
    status: 'PILOT STAGE',
    targetOutcome: 'Defensible theatrical holdover metrics; extended box office longevity and optimized territorial OTT licensing.',
  },
];

const LAB_STAGES = [
  { step: '01', name: 'Formulate', desc: 'Identify critical production bottlenecks, friction points, or emerging technological shifts.' },
  { step: '02', name: 'Hypothesize', desc: 'Design an asset-light operational or technical workflow that resolves the constraint.' },
  { step: '03', name: 'Sandbox Trial', desc: 'Stress-test the protocol on partner soundstages, virtual volumes, or editing bays.' },
  { step: '04', name: 'Benchmark', desc: 'Measure speed, cost, parity, and fidelity against traditional industry standards.' },
  { step: '05', name: 'Deploy', desc: 'Package verified workflows into live production and guild capability programs.' },
  { step: '06', name: 'Open Dispatch', desc: 'Publish telemetry and field insights to elevate the broader entertainment ecosystem.' },
];

export function WorkshopsPage() {
  const [activeExpIndex, setActiveExpIndex] = useState(0);
  const [activeLabIndex, setActiveLabIndex] = useState(0);

  const activeExp = ACTIVE_EXPERIMENTS[activeExpIndex];
  const activeLab = WORKSHOP_PROGRAMS[activeLabIndex] || WORKSHOP_PROGRAMS[0];

  return (
    <main className="bg-[#07080b] text-[#ECEEF5] selection:bg-white/20 selection:text-white">

      {/* ── 01. Hero Section ── */}
      <section className="pt-40 sm:pt-48 pb-20 sm:pb-28 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-zinc-300 mb-8 tracking-wide">
            <FlaskConical size={14} className="text-emerald-400" />
            <span>Synq Labs // Applied R&D & Trials</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] [letter-spacing:-0.035em] mb-8">
            We are labs.<br />
            We experiment.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-3xl mb-12">
            Entertainment transformation does not originate in slide decks. We operate active experimental labs where directors, technical department heads, facility operators, and technologists stress-test new workflows, virtual volumes, camera-to-cloud pipelines, and coordination models before deploying them on live production sets.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/start"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              Initiate a lab experiment
              <ArrowRight size={15} />
            </Link>
            <a
              href="#experiments"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-sm text-zinc-300 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              View active trials
            </a>
          </div>
        </div>
      </section>

      {/* ── 02. The Scientific Progression Loop ── */}
      <section className="py-24 sm:py-32 border-t border-white/[0.06] bg-[#050608]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              How Synq Labs conducts experiments
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              Every workflow and technical standard we deploy is proven through structured, safe-to-fail experimentation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {LAB_STAGES.map((s) => (
              <div
                key={s.step}
                className="p-6 rounded-2xl bg-[#090b10] border border-white/[0.06] hover:border-white/15 transition-all flex flex-col justify-between h-44"
              >
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>Phase {s.step}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1.5">
                    {s.name}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 03. Active Experiments Terminal ── */}
      <section id="experiments" className="py-24 sm:py-32 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
              Active Lab Trials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Current industry experiments
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              Live technical, operational, and commercial prototypes currently running across our partner soundstages, digital suites, and distribution circuits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Experiment Selector */}
            <div className="lg:col-span-5 space-y-2.5">
              {ACTIVE_EXPERIMENTS.map((exp, i) => {
                const isSelected = i === activeExpIndex;
                return (
                  <button
                    key={exp.code}
                    type="button"
                    onClick={() => setActiveExpIndex(i)}
                    className={`w-full p-5 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-white/[0.05] border-emerald-500/40 text-white shadow-sm'
                        : 'bg-white/[0.015] border-white/[0.06] text-zinc-400 hover:border-white/15 hover:text-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1 text-[11px] font-mono text-zinc-500">
                        <span className="text-emerald-400 font-bold">{exp.code}</span>
                        <span>•</span>
                        <span>{exp.domain}</span>
                      </div>
                      <div className="text-sm font-semibold text-white">
                        {exp.title}
                      </div>
                      <div className="text-xs text-zinc-500 mt-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>{exp.status}</span>
                      </div>
                    </div>
                    <ChevronRight size={16} className={`shrink-0 transition-opacity ${isSelected ? 'text-emerald-400 opacity-100' : 'opacity-20'}`} />
                  </button>
                );
              })}
            </div>

            {/* Right: Experiment Detail Slate */}
            <div className="lg:col-span-7 rounded-3xl bg-[#090b10] border border-white/[0.06] p-8 sm:p-12 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.06] gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                    <span>{activeExp.code}</span>
                    <span>//</span>
                    <span>{activeExp.domain}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {activeExp.title}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-emerald-300 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 shrink-0 self-start sm:self-center">
                  {activeExp.status}
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-2">
                    Core Hypothesis
                  </span>
                  <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                    {activeExp.hypothesis}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-2">
                    Methodology & Sandbox Environment
                  </span>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {activeExp.methodology}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-2">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block font-medium">
                    Target Verified Outcome
                  </span>
                  <p className="text-sm text-zinc-200 leading-relaxed">
                    {activeExp.targetOutcome}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-zinc-400">
                    <span className="text-white block font-medium">Have a related project or facility?</span>
                    <span>Collaborate with Synq Labs on this trial</span>
                  </div>
                  <Link
                    to="/start"
                    state={{ problem: `${activeExp.code}: ${activeExp.title}`, role: 'Research & Lab Collaborator' }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-xs hover:bg-zinc-200 transition-all shadow-md"
                  >
                    Participate in this trial
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── 04. Guild Capability Sprints (Applied Masterclasses) ── */}
      <section id="curriculum" className="py-24 sm:py-32 border-t border-white/[0.06] bg-[#050608]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
              Capability Sprints
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Applied workshops & guild labs
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              When an experiment produces a verified breakthrough, we package it into intensive hands-on labs for directors, cinematographers, sound mixers, and technicians.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Program Directory Selector */}
            <div className="lg:col-span-5 space-y-2.5">
              {WORKSHOP_PROGRAMS.map((prog, i) => {
                const isSelected = i === activeLabIndex;
                return (
                  <button
                    key={prog.id}
                    type="button"
                    onClick={() => setActiveLabIndex(i)}
                    className={`w-full p-5 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-white/[0.05] border-white/30 text-white shadow-sm'
                        : 'bg-white/[0.015] border-white/[0.06] text-zinc-400 hover:border-white/15 hover:text-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1 text-[11px] font-mono text-zinc-500">
                        <span>Sprint 0{i + 1}</span>
                        <span>•</span>
                        <span className="text-emerald-400">{prog.category}</span>
                      </div>
                      <div className="text-sm font-semibold text-white">
                        {prog.title}
                      </div>
                      <div className="text-xs text-zinc-400 mt-0.5">
                        {prog.format}
                      </div>
                    </div>
                    <ChevronRight size={16} className={`shrink-0 transition-opacity ${isSelected ? 'text-white opacity-100' : 'opacity-20'}`} />
                  </button>
                );
              })}
            </div>

            {/* Right: Masterclass Deep Dive Slate */}
            <div className="lg:col-span-7 rounded-3xl bg-[#090b10] border border-white/[0.06] p-8 sm:p-12 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.06] gap-3">
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                    {activeLab.category} Sprint
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {activeLab.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-zinc-400 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] shrink-0 self-start sm:self-center">
                  {activeLab.format}
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-2">
                    Curriculum Architecture
                  </span>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {activeLab.description}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-2">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block font-medium">
                    Verified Learning Outcome
                  </span>
                  <p className="text-sm text-zinc-200 leading-relaxed">
                    {activeLab.outcome}
                  </p>
                </div>

                {activeLab.flow && (
                  <div>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-3">
                      Sprint Progression
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {activeLab.flow.map((fl, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-white/[0.015] border border-white/[0.06] text-center">
                          <span className="text-[10px] font-mono text-zinc-500 block">0{idx + 1}</span>
                          <span className="text-xs font-medium text-white">{fl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-zinc-400">
                    <span className="text-white block font-medium">Cohort Applications</span>
                    <span>Reviewed on a rolling basis</span>
                  </div>
                  <Link
                    to="/start"
                    state={{ problem: `Cohort Application: ${activeLab.title}`, role: 'Guild Craft Technician' }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-xs hover:bg-zinc-200 transition-all shadow-md"
                  >
                    Apply for this sprint
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── 05. Call to Action ── */}
      <section className="py-24 sm:py-32 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400 mb-6">
            <FlaskConical size={22} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Have a hypothesis to test in entertainment?
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed max-w-xl mx-auto mb-10">
            Whether you operate a facility, build real-time media software, develop entertainment IP, or engineer camera packages, collaborate with Synq Labs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/start"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              Propose an experiment
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/runbook"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] text-zinc-300 font-medium text-sm transition-all"
            >
              Review business runbook
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
