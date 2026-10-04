import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Activity,
  AlertTriangle,
  CheckCircle2,
  GitBranch,
  Play,
  RotateCcw,
  Sliders,
  Cpu,
  Layers,
  Flame,
  Search,
  Network,
  Database,
  ShieldCheck,
  Clock,
  Sparkles,
  Calculator,
} from 'lucide-react';
import {
  PROBLEM_TAXONOMY,
  TREE_PIPELINE_STEPS,
  INTERVENTION_CLASSES,
} from '../data/blueprint_data';
import { TopographicBackground } from '../components/TopographicBackground';

export type EngineTab = 'CASCADE' | 'ROOT_MAP' | 'TAXONOMY' | 'RISK_ENGINE' | 'CAPACITY_MATCHING' | 'SYSTEM_MEMORY';

interface EnginesPageProps {
  initialTab?: EngineTab;
}

export function EnginesPage({ initialTab }: EnginesPageProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const getTabFromLocation = (): EngineTab => {
    if (initialTab) return initialTab;
    if (location.pathname.includes('/engines/root-map')) return 'ROOT_MAP';
    if (location.pathname.includes('/engines/cascade')) return 'CASCADE';
    if (location.pathname.includes('/engines/problem-taxonomy')) return 'TAXONOMY';
    if (location.pathname.includes('/engines/risk')) return 'RISK_ENGINE';
    return 'CASCADE';
  };

  const [activeEngineTab, setActiveEngineTab] = useState<EngineTab>(getTabFromLocation);

  useEffect(() => {
    setActiveEngineTab(getTabFromLocation());
  }, [location.pathname, initialTab]);

  const handleTabChange = (tab: EngineTab) => {
    setActiveEngineTab(tab);
    switch (tab) {
      case 'CASCADE':
        navigate('/engines/cascade');
        break;
      case 'ROOT_MAP':
        navigate('/engines/root-map');
        break;
      case 'TAXONOMY':
        navigate('/engines/problem-taxonomy');
        break;
      case 'RISK_ENGINE':
        navigate('/engines/risk');
        break;
      default:
        navigate('/engines');
    }
  };

  // ══════════════════════════════════════════════════════════════
  // 01. CASCADE SIMULATOR STATE
  // ══════════════════════════════════════════════════════════════
  const [selectedShock, setSelectedShock] = useState<'SOUNDSTAGE_DELAY' | 'ACTOR_DELAY' | 'VFX_PLATE_SLIP'>('SOUNDSTAGE_DELAY');
  const [appliedIntervention, setAppliedIntervention] = useState<string | null>(null);

  const cascadeShocks = {
    SOUNDSTAGE_DELAY: {
      title: 'Soundstage Handover Delay (+4 Days)',
      trigger: 'Prior production overruns soundstage lease by 96 hours',
      cascades: [
        { node: '01. Soundstage Delay', effect: 'Incoming production locked out; 14 tons of lighting rigs stranded', severity: 'HIGH' },
        { node: '02. Production Delay', effect: 'First day of shooting cancelled for 90-person cast & crew', severity: 'CRITICAL' },
        { node: '03. Crew Rescheduling', effect: '16h turnaround breaches trigger union penalty fines & fatigue', severity: 'CRITICAL' },
        { node: '04. Post Delay', effect: 'Editorial turnover compressed by 10 days; VFX vendor queue backed up', severity: 'HIGH' },
        { node: '05. Release Impact', effect: 'IMF master delivery misses platform premiere cutoff; marketing spend burned', severity: 'FATAL' },
      ],
      interventions: [
        {
          name: 'REALLOCATE & MATCH (M10)',
          desc: 'Route immediately into partner dark-floor stage slot 4 miles away under rate parity.',
          result: 'MODELLED: 4.0 Days Recovered // Zero Production Days Lost // $68k Penalty Avoided',
        },
        {
          name: 'DYNAMIC RESEQUENCE (M08)',
          desc: 'Move practical exterior dialogue scenes forward 4 days while floor is cleared.',
          result: 'MODELLED: 3.5 Days Recovered // Sets constructed on parallel timeline',
        },
      ],
    },
    ACTOR_DELAY: {
      title: 'Lead Actor Schedule Slip (+6 Days)',
      trigger: 'Actor contracted call shifts forward due to prior production overrun',
      cascades: [
        { node: '01. Shooting Order', effect: 'Linear scenes #12-24 split into disjoint setups', severity: 'HIGH' },
        { node: '02. Soundstage Booking', effect: 'Floor lease window expires before key scene completion', severity: 'CRITICAL' },
        { node: '03. Camera & Lighting Gear', effect: 'Rental package holds incur $18k/day standby penalties', severity: 'HIGH' },
        { node: '04. Crew Turnaround Hours', effect: 'Forced night shoots generate 18-hour turnaround union fines', severity: 'CRITICAL' },
        { node: '05. Editorial Turnover', effect: 'Conform master delayed by 12 days, squeezing VFX', severity: 'CRITICAL' },
        { node: '06. Platform Delivery', effect: 'Misses OTT IMF delivery cutoff; release window cancelled', severity: 'FATAL' },
      ],
      interventions: [
        {
          name: 'DYNAMIC RESEQUENCE (M08)',
          desc: 'Dynamically reorder call sheets to shoot exterior ensemble & B-unit scenes first.',
          result: 'MODELLED: 5.5 Days Recovered. Schedule stabilized with zero stage penalty.',
        },
        {
          name: 'BURST CAPACITY (M10)',
          desc: 'Inject 2nd Unit DP and secondary stage floor to shoot parallel dialogue tracks.',
          result: 'MODELLED: 4.0 Days Recovered. $45,000 cost absorbed but delivery window secured.',
        },
      ],
    },
    VFX_PLATE_SLIP: {
      title: 'Editorial Conform Delayed by 14 Days',
      trigger: 'Director recuts Act 3 dialogue after initial assembly review',
      cascades: [
        { node: '01. VFX Vendor Plates', effect: '140 CGI composite shots delivered 2 weeks behind schedule', severity: 'CRITICAL' },
        { node: '02. Atmos Sound Mix', effect: 'Mix stage booked on un-conformed low-res audio tracks', severity: 'HIGH' },
        { node: '03. QC Compliance', effect: 'Platform automated ingest rejects color grade with clipping bugs', severity: 'FATAL' },
      ],
      interventions: [
        {
          name: 'SPLIT & OUTSOURCE (M11)',
          desc: 'Split 140 shots across 3 specialized VFX burst houses with unified color pipeline.',
          result: 'MODELLED: VFX backlog compressed into 9 days. On-schedule delivery restored.',
        },
        {
          name: 'LOCK COVENANT (M13)',
          desc: 'Institute locked cut protocol with director for VFX shot ranges while dialogue conforms continue.',
          result: 'MODELLED: VFX receives locked background plates immediately without waiting for Act 3 sound.',
        },
      ],
    },
  };

  const activeShockData = cascadeShocks[selectedShock];

  // ══════════════════════════════════════════════════════════════
  // 02. ROOT MAP TREE PIPELINE STATE
  // ══════════════════════════════════════════════════════════════
  const [currentTreeStep, setCurrentTreeStep] = useState(0);
  const [selectedTreeOptions, setSelectedTreeOptions] = useState<{ [step: number]: string }>({});

  const handleSelectTreeOption = (option: string) => {
    setSelectedTreeOptions({ ...selectedTreeOptions, [currentTreeStep]: option });
    if (currentTreeStep < TREE_PIPELINE_STEPS.length - 1) {
      setCurrentTreeStep(currentTreeStep + 1);
    }
  };

  // ══════════════════════════════════════════════════════════════
  // 03. RISK ENGINE STATE
  // ══════════════════════════════════════════════════════════════
  const [riskProbability, setRiskProbability] = useState(7);
  const [riskImpact, setRiskImpact] = useState(8);
  const [riskDependency, setRiskDependency] = useState(9);
  const [riskUrgency, setRiskUrgency] = useState(8);

  const rawRiskScore = riskProbability * riskImpact * riskDependency * riskUrgency; // max 10000
  const normalizedRisk = Math.min(100, Math.round(rawRiskScore / 100));

  // ══════════════════════════════════════════════════════════════
  // 04. PROBLEM TAXONOMY STATE
  // ══════════════════════════════════════════════════════════════
  const [selectedTaxonomyIdx, setSelectedTaxonomyIdx] = useState(0);
  const activeTaxonomy = PROBLEM_TAXONOMY[selectedTaxonomyIdx];

  // ══════════════════════════════════════════════════════════════
  // 05. CAPACITY MATCHING STATE
  // ══════════════════════════════════════════════════════════════
  const [capacityCategory, setCapacityCategory] = useState<'STAGES' | 'POST' | 'CREW'>('STAGES');
  const [selectedFloorSize, setSelectedFloorSize] = useState('15,000 sq ft');
  const [matchStatus, setMatchStatus] = useState<'IDLE' | 'MATCHED'>('IDLE');

  // ══════════════════════════════════════════════════════════════
  // 06. SYSTEM MEMORY STATE
  // ══════════════════════════════════════════════════════════════
  const [selectedMemoryCase, setSelectedMemoryCase] = useState(0);

  const memoryCases = [
    {
      id: 'MEM-2026-081',
      problem: 'Soundstage lease expiration overlap during stunt pickups.',
      resolution: 'Resequenced exterior setups; activated partner Stage 4 dark floor at rate parity.',
      outcome: '5.5 Days Recovered // $84,000 idle penalties avoided.',
      learning: 'Unhedged stunt rewrites require 72h minimum buffer allocation before camera roll.',
      pattern: 'High-risk dependency concentration between script revision and stage turn.',
      prevention: 'Automated early warning covenant triggers when stunts added within 14 days of shoot.',
    },
    {
      id: 'MEM-2026-042',
      problem: 'Streaming IMF master rejected 48 hours prior to global simultaneous debut.',
      resolution: 'Platform-certified IMF remediation sprint deployed; Atmos bed phase realigned.',
      outcome: 'Zero release date slippage // 100% compliant master accepted in 18 hours.',
      learning: 'Downmix phase cancellation bugs remain undetected on stereo preview speakers.',
      pattern: 'Vendor delivery spec mismatch during final mastering hand-off.',
      prevention: 'Mandatory automated machine-checked IMF validation gate prior to final turnover.',
    },
  ];

  return (
    <main className="bg-[#03040A] text-[#ECEEF5] selection:bg-[#23B272] selection:text-[#03040A] min-h-screen pt-36 pb-24 px-6 sm:px-8 max-w-6xl mx-auto relative overflow-hidden">
      <TopographicBackground className="opacity-20 pointer-events-none -z-10 fixed inset-0" />

      {/* ── Header ── */}
      <div className="max-w-4xl mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300 font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-[#52E3A4] animate-pulse" />
          <span>SECTIONS 46, 47, 53 &amp; 34</span>
          <span className="text-zinc-600">//</span>
          <span className="text-[#52E3A4]">SIX INTERACTIVE SIMULATION ENGINES</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.03] mb-4">
          The Simulation War Room.
          <span className="text-zinc-400 font-light block text-2xl sm:text-4xl mt-2">
            Mathematical Models for Entertainment Physics.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-zinc-300 leading-relaxed font-light max-w-3xl mb-8">
          Stress-test production shocks, simulate multi-tier cascade blast radiuses, calculate risk scores, and activate systemic memory before capital is deployed.
        </p>

        {/* 6 Engine Tabs Navigation */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl border border-white/[0.08] bg-[#090B14]">
          {[
            { key: 'CASCADE', label: '01. Cascade Simulator' },
            { key: 'ROOT_MAP', label: '02. Root Map (13-Step)' },
            { key: 'TAXONOMY', label: '03. Problem Taxonomy' },
            { key: 'RISK_ENGINE', label: '04. Risk Engine' },
            { key: 'CAPACITY_MATCHING', label: '05. Capacity Matching' },
            { key: 'SYSTEM_MEMORY', label: '06. System Memory' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key as any)}
              className={`px-4 py-2.5 rounded-xl font-medium text-xs font-mono tracking-wide transition-all cursor-pointer ${
                activeEngineTab === tab.key
                  ? 'bg-[#23B272] text-[#03040A] font-bold shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          01. CASCADE SIMULATOR
         ══════════════════════════════════════════════════════ */}
      {activeEngineTab === 'CASCADE' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#090B14]">
            <div className="flex items-center justify-between mb-3 text-xs font-mono">
              <span className="text-[#52E3A4]">STEP 1: SELECT UPSTREAM SYSTEM SHOCK</span>
              <span className="text-zinc-500 uppercase px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                SIMULATED DATA
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { key: 'SOUNDSTAGE_DELAY', title: 'Soundstage Handover (+4 Days)', icon: Flame },
                { key: 'ACTOR_DELAY', title: 'Lead Actor Slip (+6 Days)', icon: AlertTriangle },
                { key: 'VFX_PLATE_SLIP', title: 'Editorial Conform Slip (+14 Days)', icon: Sliders },
              ].map((s) => (
                <button
                  key={s.key}
                  onClick={() => {
                    setSelectedShock(s.key as any);
                    setAppliedIntervention(null);
                  }}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedShock === s.key
                      ? 'bg-[#16543D] border-[#52E3A4] text-white shadow-lg'
                      : 'bg-black/40 border-white/[0.06] text-zinc-400 hover:text-white hover:border-white/[0.12]'
                  }`}
                >
                  <div className="font-semibold text-xs text-white mb-1">{s.title}</div>
                  <div className="text-[10px] font-mono text-zinc-400">Trigger upstream variance</div>
                </button>
              ))}
            </div>
          </div>

          {/* Blast Radius Visualizer */}
          <div className="p-8 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/[0.08]">
              <div>
                <span className="text-xs font-mono text-amber-400 block mb-1">
                  UPSTREAM EVENT: {activeShockData.title}
                </span>
                <span className="text-xs text-zinc-400 font-mono">{activeShockData.trigger}</span>
              </div>
              <div className="font-mono text-xs text-zinc-500">
                Cascade Sequence // Section 1 &amp; 46
              </div>
            </div>

            {/* Department Cascade Chain */}
            <div className="space-y-2 mb-8">
              <span className="text-xs font-mono text-[#52E3A4] uppercase tracking-wider block mb-2">
                Compound Downstream Blast Radius:
              </span>
              {activeShockData.cascades.map((casc, cIdx) => (
                <div
                  key={cIdx}
                  className={`p-3.5 rounded-xl border flex items-center justify-between text-xs transition-all ${
                    appliedIntervention
                      ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300'
                      : casc.severity === 'FATAL'
                      ? 'bg-red-950/40 border-red-500/50 text-red-200'
                      : 'bg-black/40 border-white/[0.06] text-zinc-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-zinc-500 text-[10px]">0{cIdx + 1}</span>
                    <span className="font-bold text-white">{casc.node}</span>
                    <span className="text-zinc-400 hidden sm:inline">— {casc.effect}</span>
                  </div>
                  <span
                    className={`font-mono text-[10px] px-2 py-0.5 rounded border uppercase shrink-0 ${
                      appliedIntervention
                        ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                        : casc.severity === 'FATAL'
                        ? 'bg-red-500/20 border-red-500/40 text-red-400 animate-pulse'
                        : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
                    }`}
                  >
                    {appliedIntervention ? 'STABILIZED' : casc.severity}
                  </span>
                </div>
              ))}
            </div>

            {/* Simulated Interventions Selection */}
            <div className="pt-6 border-t border-white/[0.08]">
              <div className="text-xs font-mono text-[#52E3A4] mb-3">STEP 2: TEST SYNQ INTERVENTION SCENARIOS</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {activeShockData.interventions.map((intv, iIdx) => (
                  <button
                    key={iIdx}
                    onClick={() => setAppliedIntervention(intv.name)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      appliedIntervention === intv.name
                        ? 'bg-[#16543D]/60 border-[#52E3A4] shadow-md'
                        : 'bg-black/40 border-white/[0.06] hover:border-white/20'
                    }`}
                  >
                    <div className="font-mono text-xs font-bold text-[#52E3A4] mb-1">{intv.name}</div>
                    <div className="text-xs text-zinc-300 mb-2">{intv.desc}</div>
                    <div className="text-[11px] font-mono text-emerald-300 pt-2 border-t border-white/[0.06]">
                      {intv.result}
                    </div>
                  </button>
                ))}
              </div>

              {appliedIntervention && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-200 flex items-center justify-between">
                  <span>⚡ Intervention Active: Downstream cascade arrested. Delivery window secured.</span>
                  <button
                    onClick={() => setAppliedIntervention(null)}
                    className="text-zinc-400 hover:text-white underline ml-4"
                  >
                    Reset Simulation
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          02. ROOT MAP TREE PIPELINE (13 STEPS)
         ══════════════════════════════════════════════════════ */}
      {activeEngineTab === 'ROOT_MAP' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div className="p-8 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
              <div>
                <span className="text-xs font-mono text-[#52E3A4]">
                  STEP {TREE_PIPELINE_STEPS[currentTreeStep].step} OF 13 // ROOT MAP PIPELINE
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {TREE_PIPELINE_STEPS[currentTreeStep].question}
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  {TREE_PIPELINE_STEPS[currentTreeStep].prompt}
                </p>
              </div>
              <span className="text-xs font-mono text-zinc-500 bg-white/[0.04] px-3 py-1 rounded-lg border border-white/[0.08]">
                MODELLED TREE
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {TREE_PIPELINE_STEPS[currentTreeStep].options.map((opt, oIdx) => (
                <button
                  key={oIdx}
                  onClick={() => handleSelectTreeOption(opt)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedTreeOptions[currentTreeStep] === opt
                      ? 'bg-[#16543D] border-[#52E3A4] text-white font-bold'
                      : 'bg-black/40 border-white/[0.06] text-zinc-300 hover:border-white/20'
                  }`}
                >
                  <span className="text-xs font-mono">{opt}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] text-xs font-mono">
              <button
                onClick={() => setCurrentTreeStep(Math.max(0, currentTreeStep - 1))}
                disabled={currentTreeStep === 0}
                className="text-zinc-400 hover:text-white disabled:opacity-30"
              >
                ← Previous Step
              </button>
              <span className="text-zinc-500">Pipeline Step {currentTreeStep + 1} / 13</span>
              <button
                onClick={() => setCurrentTreeStep(Math.min(TREE_PIPELINE_STEPS.length - 1, currentTreeStep + 1))}
                disabled={currentTreeStep === TREE_PIPELINE_STEPS.length - 1}
                className="text-[#52E3A4] hover:underline disabled:opacity-30"
              >
                Skip / Advance →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          03. PROBLEM TAXONOMY (6 DOMAINS)
         ══════════════════════════════════════════════════════ */}
      {activeEngineTab === 'TAXONOMY' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
            {PROBLEM_TAXONOMY.map((tax, idx) => (
              <button
                key={tax.id}
                onClick={() => setSelectedTaxonomyIdx(idx)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedTaxonomyIdx === idx
                    ? 'bg-[#16543D] border-[#52E3A4] text-white font-bold'
                    : 'bg-[#090B14] border-white/[0.06] text-zinc-400 hover:text-white'
                }`}
              >
                <div className="text-[10px] font-mono text-[#52E3A4] mb-1">DOMAIN 0{idx + 1}</div>
                <div className="text-xs truncate">{tax.name.split('.')[1] || tax.name}</div>
              </button>
            ))}
          </div>

          <div className="p-8 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
            <div className="pb-4 mb-6 border-b border-white/[0.08]">
              <span className="text-xs font-mono text-[#52E3A4]">{activeTaxonomy.id.toUpperCase()}</span>
              <h3 className="text-2xl font-bold text-white mt-1">{activeTaxonomy.name}</h3>
              <p className="text-xs text-zinc-400 mt-1">{activeTaxonomy.tagline}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-xs">
              <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06]">
                <strong className="text-red-400 block font-mono mb-2">TYPICAL SURFACE SYMPTOMS:</strong>
                <ul className="space-y-1.5 text-zinc-300">
                  {activeTaxonomy.symptoms.map((sym, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-red-400">⚠️</span> {sym}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06]">
                <strong className="text-amber-400 block font-mono mb-2">SYSTEMIC ROOT CAUSES:</strong>
                <ul className="space-y-1.5 text-zinc-300">
                  {activeTaxonomy.rootCauses.map((rc, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-amber-400">●</span> {rc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#16543D]/25 border border-[#23B272]/30 text-xs">
              <strong className="text-[#52E3A4] block font-mono mb-1">INTERVENTION STRATEGY:</strong>
              <p className="text-emerald-100 leading-relaxed">{activeTaxonomy.interventionStrategy}</p>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          04. RISK ENGINE
         ══════════════════════════════════════════════════════ */}
      {activeEngineTab === 'RISK_ENGINE' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div className="p-8 sm:p-10 rounded-3xl border border-[#23B272]/30 bg-gradient-to-br from-[#06130E] via-[#090B14] to-[#04060C] shadow-2xl">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono text-[#52E3A4] uppercase tracking-wider block mb-2">
                SECTION 47 // MULTI-FACTOR RISK ENGINE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Composite Production Risk Calculator.
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm font-mono">
                Risk Score = Probability × Impact × Dependency Weight × Urgency
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Sliders (8 cols) */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-zinc-400 mb-1">
                    <span>Probability (1-10):</span>
                    <span className="text-[#52E3A4] font-bold">{riskProbability}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={riskProbability}
                    onChange={(e) => setRiskProbability(Number(e.target.value))}
                    className="w-full accent-[#23B272]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-zinc-400 mb-1">
                    <span>Impact Severity (1-10):</span>
                    <span className="text-[#52E3A4] font-bold">{riskImpact}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={riskImpact}
                    onChange={(e) => setRiskImpact(Number(e.target.value))}
                    className="w-full accent-[#23B272]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-zinc-400 mb-1">
                    <span>Dependency Weight (1-10):</span>
                    <span className="text-[#52E3A4] font-bold">{riskDependency}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={riskDependency}
                    onChange={(e) => setRiskDependency(Number(e.target.value))}
                    className="w-full accent-[#23B272]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-zinc-400 mb-1">
                    <span>Urgency Factor (1-10):</span>
                    <span className="text-amber-400 font-bold">{riskUrgency}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={riskUrgency}
                    onChange={(e) => setRiskUrgency(Number(e.target.value))}
                    className="w-full accent-amber-400"
                  />
                </div>
              </div>

              {/* Score Display (4 cols) */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-black/60 border border-white/[0.1] text-center font-mono">
                <span className="text-[10px] text-zinc-500 uppercase block mb-1">COMPOSITE RISK INDEX</span>
                <div className="text-5xl font-black text-[#52E3A4] mb-2">{normalizedRisk} / 100</div>
                <div className="text-xs text-zinc-300 mb-4">
                  {normalizedRisk > 70
                    ? 'CRITICAL EXPOSURE: Immediate Cascade Risk'
                    : normalizedRisk > 40
                    ? 'ELEVATED CONCERN: Deploy Mitigation Plan'
                    : 'CONTROLLED RISK: Normal Variance Tolerated'}
                </div>
                <Link
                  to="/diagnose"
                  className="inline-flex items-center gap-1.5 text-xs text-[#52E3A4] hover:underline font-bold"
                >
                  <span>Launch Diagnostic on this Profile →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          05. CAPACITY MATCHING SIMULATOR
         ══════════════════════════════════════════════════════ */}
      {activeEngineTab === 'CAPACITY_MATCHING' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div className="p-8 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
              <div>
                <span className="text-xs font-mono text-[#52E3A4]">M22 CAPACITY ENGINE // SIMULATOR</span>
                <h3 className="text-2xl font-bold text-white mt-1">Asset-Light Network Capacity Router</h3>
              </div>
              <span className="text-[10px] font-mono text-zinc-500 bg-white/[0.04] px-2.5 py-1 rounded border border-white/[0.08]">
                SIMULATED MATCHING
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                <span className="text-[10px] font-mono text-zinc-500 block mb-2">CATEGORY</span>
                <div className="flex gap-2">
                  {['STAGES', 'POST', 'CREW'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCapacityCategory(cat as any)}
                      className={`px-3 py-1 rounded text-xs font-mono ${
                        capacityCategory === cat ? 'bg-[#23B272] text-[#03040A] font-bold' : 'text-zinc-400 bg-white/[0.03]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                <span className="text-[10px] font-mono text-zinc-500 block mb-2">SPECIFICATION</span>
                <select
                  value={selectedFloorSize}
                  onChange={(e) => setSelectedFloorSize(e.target.value)}
                  className="w-full bg-black/60 border border-white/10 rounded px-2 py-1 text-xs font-mono text-white"
                >
                  <option value="15,000 sq ft">15,000 sq ft Certified Soundstage</option>
                  <option value="25,000 sq ft">25,000 sq ft Virtual Production Volume</option>
                  <option value="Secondary VFX">Secondary VFX Burst Studio (120 shots)</option>
                </select>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 block">AVAILABILITY WINDOW</span>
                  <span className="text-xs font-mono text-[#52E3A4] font-bold">Dark Floor Slot #14B</span>
                </div>
                <button
                  onClick={() => setMatchStatus('MATCHED')}
                  className="px-4 py-2 rounded-xl bg-[#23B272] text-[#03040A] font-bold text-xs font-mono hover:bg-[#52E3A4]"
                >
                  Query Match
                </button>
              </div>
            </div>

            {matchStatus === 'MATCHED' && (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono space-y-2">
                <div className="text-emerald-300 font-bold">MATCH VERIFIED: Partner Stage 3 (Dark Window)</div>
                <div className="text-zinc-300">Rate Parity: Guaranteed 15% discount on unbooked tenant gap.</div>
                <div className="text-zinc-400">Zero fixed debt incurred by DigiSynq. 100% asset-light orchestration.</div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          06. SYSTEM MEMORY
         ══════════════════════════════════════════════════════ */}
      {activeEngineTab === 'SYSTEM_MEMORY' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div className="p-8 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
            <div className="pb-4 mb-6 border-b border-white/[0.08]">
              <span className="text-xs font-mono text-[#52E3A4]">SECTION 55 // INSTITUTIONAL MEMORY</span>
              <h3 className="text-2xl font-bold text-white mt-1">The Compounding Memory Flywheel</h3>
              <p className="text-xs text-zinc-400 mt-1 font-mono">
                Problem → Resolution → Outcome → Learning → Pattern → Prevention
              </p>
            </div>

            <div className="space-y-6">
              {memoryCases.map((c, idx) => (
                <div key={c.id} className="p-6 rounded-2xl bg-black/40 border border-white/[0.06] space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-zinc-500 border-b border-white/[0.06] pb-2">
                    <span className="text-[#52E3A4] font-bold">{c.id}</span>
                    <span className="text-[10px]">CASE MEMORY ARCHIVED</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <strong className="text-red-400 block mb-1">OBSERVED PROBLEM:</strong>
                      <span className="text-zinc-300">{c.problem}</span>
                    </div>
                    <div>
                      <strong className="text-[#52E3A4] block mb-1">INTERVENTION RESOLUTION:</strong>
                      <span className="text-zinc-300">{c.resolution}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-white/[0.04]">
                    <div>
                      <strong className="text-zinc-400 block mb-1">OUTCOME DELTA:</strong>
                      <span className="text-emerald-300 font-bold">{c.outcome}</span>
                    </div>
                    <div>
                      <strong className="text-amber-400 block mb-1">PREVENTIVE RULE DEPOSITED:</strong>
                      <span className="text-zinc-300">{c.prevention}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
