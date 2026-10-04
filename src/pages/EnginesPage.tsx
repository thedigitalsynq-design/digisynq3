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
  ShieldAlert,
  Flame,
  Search,
} from 'lucide-react';
import {
  PROBLEM_TAXONOMY,
  TREE_PIPELINE_STEPS,
  INTERVENTION_CLASSES,
} from '../data/blueprint_data';
import { ProblemEngine } from '../components/ProblemEngine';

export type EngineTab = 'CASCADE' | 'TREE_PIPELINE' | 'TAXONOMY' | 'RISK_ENGINE' | 'PROBLEM_WIZARD';

interface EnginesPageProps {
  initialTab?: EngineTab;
}

export function EnginesPage({ initialTab }: EnginesPageProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const getTabFromLocation = (): EngineTab => {
    if (initialTab) return initialTab;
    if (location.pathname.includes('/engines/root-map')) return 'TREE_PIPELINE';
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
      case 'TREE_PIPELINE':
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

  // ── Cascade Simulator State ────────────────────────────────
  const [selectedShock, setSelectedShock] = useState<'ACTOR_DELAY' | 'STAGE_EVICTION' | 'VFX_PLATE_SLIP'>('ACTOR_DELAY');
  const [appliedIntervention, setAppliedIntervention] = useState<string | null>(null);

  const shocks = {
    ACTOR_DELAY: {
      title: 'Lead Actor Schedule Shift (+6 Days)',
      trigger: 'Actor contracted date shifts forward due to prior production overrun',
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
          name: 'RESEQUENCE',
          desc: 'Dynamically reorder call sheets to shoot exterior ensemble & B-unit scenes first.',
          result: '5.5 Days Recovered. Schedule stabilized with zero stage penalty.',
        },
        {
          name: 'BURST CAPACITY (ADD)',
          desc: 'Inject 2nd Unit DP and secondary stage floor to shoot parallel dialogue tracks.',
          result: '4 Days Recovered. $45,000 cost absorbed but delivery window secured.',
        },
        {
          name: 'SUBSTITUTE',
          desc: 'Relocate indoor penthouse scene to virtual LED volume for instant turnaround.',
          result: '6 Days Recovered. Eliminates night shoot turnaround penalties completely.',
        },
      ],
    },
    STAGE_EVICTION: {
      title: 'Soundstage Eviction Due to Extended Tenant',
      trigger: 'Incoming production locked out 72h before lighting pre-rig',
      cascades: [
        { node: '01. Art Department', effect: 'Set construction halted mid-build with nowhere to erect walls', severity: 'CRITICAL' },
        { node: '02. Lighting Grid', effect: '14 tons of pre-rigged lighting stranded on floor', severity: 'HIGH' },
        { node: '03. Call Sheet #01', effect: 'First day of principal photography cancelled for 90-person crew', severity: 'FATAL' },
        { node: '04. Budget Overrun', effect: '$94,000 lost in idle day crew commitments', severity: 'CRITICAL' },
      ],
      interventions: [
        {
          name: 'REALLOCATE & MATCH',
          desc: 'Route immediately into partner soundstage dark-floor turnaround window 4 miles away.',
          result: 'Zero production days lost. Partner stage activated at 15% rate discount.',
        },
        {
          name: 'RESEQUENCE',
          desc: 'Move practical street exterior scenes forward 4 days while stage is cleared.',
          result: 'Crews redirected to location shoots. Construction resumes on day 5.',
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
          name: 'SPLIT & OUTSOURCE',
          desc: 'Split 140 shots across 3 specialized VFX burst houses with unified color pipeline.',
          result: 'VFX backlog compressed into 9 days. On-schedule delivery restored.',
        },
        {
          name: 'LOCK COVENANT',
          desc: 'Institute locked cut protocol with director for VFX shot ranges while dialogue conforms continue.',
          result: 'VFX receives locked background plates immediately without waiting for Act 3 sound.',
        },
      ],
    },
  };

  const activeShockData = shocks[selectedShock];

  // ── Tree Pipeline State ────────────────────────────────────
  const [currentTreeStep, setCurrentTreeStep] = useState(0);
  const [selectedTreeOptions, setSelectedTreeOptions] = useState<{ [step: number]: string }>({});

  const handleSelectTreeOption = (option: string) => {
    setSelectedTreeOptions({ ...selectedTreeOptions, [currentTreeStep]: option });
    if (currentTreeStep < TREE_PIPELINE_STEPS.length - 1) {
      setCurrentTreeStep(currentTreeStep + 1);
    }
  };

  // ── Risk Engine State ──────────────────────────────────────
  const [riskProb, setRiskProb] = useState(7);
  const [riskImpact, setRiskImpact] = useState(8);
  const [riskDep, setRiskDep] = useState(9);
  const [riskTime, setRiskTime] = useState(8);

  const riskScore = riskProb * riskImpact * riskDep * riskTime; // max 10000

  // ── Taxonomy State ─────────────────────────────────────────
  const [selectedTaxonomyIdx, setSelectedTaxonomyIdx] = useState(0);
  const activeTaxonomy = PROBLEM_TAXONOMY[selectedTaxonomyIdx];

  return (
    <main className="bg-[#03040A] text-[#ECEEF5] selection:bg-[#23B272] selection:text-[#03040A] min-h-screen pt-36 pb-24 px-6 sm:px-8 max-w-6xl mx-auto">
      {/* ── Header ── */}
      <div className="max-w-4xl mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300 font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-[#52E3A4] animate-pulse" />
          <span>SECTIONS 46, 47, 53 &amp; 34</span>
          <span className="text-zinc-600">//</span>
          <span className="text-[#52E3A4]">INTERACTIVE OPERATIONAL ENGINES</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.03] mb-4">
          The Operational War Room.
          <span className="text-zinc-400 font-light block text-2xl sm:text-4xl mt-2">
            Simulation &amp; Diagnostic Engines.
          </span>
        </h1>

        <h2 className="text-base sm:text-xl text-zinc-300 leading-relaxed font-light max-w-3xl mb-8">
          Stress-test production shocks, map root causes, and calculate systemic blast radii before a single dollar of camera budget is lost.
        </h2>

        {/* Engine Switcher */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl border border-white/[0.08] bg-[#090B14]">
          {[
            { key: 'CASCADE', label: 'Cascade Simulator' },
            { key: 'TREE_PIPELINE', label: '13-Step Tree Pipeline' },
            { key: 'TAXONOMY', label: '6-Domain Taxonomy' },
            { key: 'RISK_ENGINE', label: 'Risk Engine Calculator' },
            { key: 'PROBLEM_WIZARD', label: 'Diagnostic Problem Wizard' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key as any)}
              className={`px-4 py-2 rounded-xl font-medium text-xs tracking-wide transition-all ${
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
          01 — CASCADE SIMULATOR (SECTION 1 & 46)
         ══════════════════════════════════════════════════════ */}
      {activeEngineTab === 'CASCADE' && (
        <section className="space-y-8">
          {/* Shock Trigger Selection */}
          <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#090B14]">
            <div className="text-xs font-mono text-[#52E3A4] mb-3">STEP 1: SELECT UPSTREAM SYSTEM SHOCK</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { key: 'ACTOR_DELAY', title: 'Lead Actor Schedule Slip (+6 Days)', icon: AlertTriangle },
                { key: 'STAGE_EVICTION', title: 'Soundstage Lockout / Tenant Overrun', icon: Flame },
                { key: 'VFX_PLATE_SLIP', title: 'Editorial Conform Slip (+14 Days)', icon: Sliders },
              ].map((s) => (
                <button
                  key={s.key}
                  onClick={() => {
                    setSelectedShock(s.key as any);
                    setAppliedIntervention(null);
                  }}
                  className={`p-4 rounded-xl border text-left transition-all ${
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
          <div className="p-8 rounded-2xl border border-white/[0.1] bg-[#090B14] shadow-2xl relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="text-xs font-mono text-amber-400 mb-1">
                  UPSTREAM EVENT: {activeShockData.title}
                </div>
                <div className="text-xs text-zinc-400">{activeShockData.trigger}</div>
              </div>
              <div className="font-mono text-xs text-zinc-500">
                Cascade Engine: Sections 1 &amp; 46
              </div>
            </div>

            {/* Department Cascade Chain */}
            <div className="space-y-2 mb-8">
              <div className="text-xs font-mono text-[#52E3A4] uppercase tracking-wider mb-2">
                Compound Downstream Blast Radius:
              </div>
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
                    <span className="font-mono text-zinc-500 text-[10px]">#{cIdx + 1}</span>
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

            {/* Step 2: Apply DIGISYNQ Intervention */}
            <div className="pt-6 border-t border-white/[0.08]">
              <div className="text-xs font-mono text-[#52E3A4] uppercase tracking-wider mb-3">
                STEP 2: SELECT INTERVENTION STRATEGY (13 INTERVENTION CLASSES)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {activeShockData.interventions.map((interv, iIdx) => (
                  <button
                    key={iIdx}
                    onClick={() => setAppliedIntervention(interv.name)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      appliedIntervention === interv.name
                        ? 'bg-[#23B272] text-[#03040A] font-bold shadow-lg'
                        : 'bg-black/50 border-white/[0.08] text-white hover:border-[#52E3A4]/50'
                    }`}
                  >
                    <div className="text-xs font-bold mb-1">{interv.name}</div>
                    <div className={`text-[11px] leading-snug ${appliedIntervention === interv.name ? 'text-[#03040A]/90' : 'text-zinc-400'}`}>
                      {interv.desc}
                    </div>
                  </button>
                ))}
              </div>

              {/* Verified Resolution Outcome Display */}
              {appliedIntervention && (
                <div className="p-5 rounded-xl border border-[#52E3A4]/40 bg-[#16543D]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#52E3A4] shrink-0" />
                    <div>
                      <div className="font-mono text-xs text-[#52E3A4] font-semibold">
                        CASCADE ARRESTED // INTERVENTION: {appliedIntervention}
                      </div>
                      <div className="text-xs text-white font-medium mt-0.5">
                        {activeShockData.interventions.find((i) => i.name === appliedIntervention)?.result}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setAppliedIntervention(null)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/20 bg-white/10 text-xs font-mono text-zinc-300 hover:text-white"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset Simulation</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          02 — 13-STEP TREE PIPELINE / ROOT MAP (SECTION 53)
         ══════════════════════════════════════════════════════ */}
      {activeEngineTab === 'TREE_PIPELINE' && (
        <section className="space-y-8">
          <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
              <div>
                <div className="text-xs font-mono text-[#52E3A4] mb-1">
                  SECTION 53 // INTERACTIVE ROOT MAP
                </div>
                <h2 className="text-2xl font-bold text-white">The Universal Tree Pipeline</h2>
              </div>
              <div className="font-mono text-xs text-zinc-400">
                Step {currentTreeStep + 1} of {TREE_PIPELINE_STEPS.length}
              </div>
            </div>

            {/* Stepper Progress Bar */}
            <div className="flex items-center gap-1 mb-8 overflow-x-auto pb-2">
              {TREE_PIPELINE_STEPS.map((st, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTreeStep(idx)}
                  className={`h-2 rounded-full transition-all shrink-0 ${
                    idx === currentTreeStep
                      ? 'w-8 bg-[#52E3A4]'
                      : selectedTreeOptions[idx]
                      ? 'w-4 bg-[#23B272]'
                      : 'w-2 bg-white/10'
                  }`}
                  title={st.question}
                />
              ))}
            </div>

            {/* Current Step Question & Options */}
            <div className="max-w-2xl mb-8">
              <div className="font-mono text-xs text-[#D4F838] mb-1">
                {TREE_PIPELINE_STEPS[currentTreeStep].step}. {TREE_PIPELINE_STEPS[currentTreeStep].question}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {TREE_PIPELINE_STEPS[currentTreeStep].prompt}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {TREE_PIPELINE_STEPS[currentTreeStep].options.map((opt, oIdx) => (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectTreeOption(opt)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedTreeOptions[currentTreeStep] === opt
                        ? 'bg-[#16543D] border-[#52E3A4] text-white shadow-md'
                        : 'bg-black/40 border-white/[0.06] text-zinc-300 hover:text-white hover:border-white/[0.15]'
                    }`}
                  >
                    <div className="text-xs font-semibold">{opt}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Accumulated Journey Summary */}
            <div className="pt-6 border-t border-white/[0.08]">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3">
                Current Diagnostic Trace:
              </div>
              <div className="flex flex-wrap gap-2">
                {Object.entries(selectedTreeOptions).map(([stepIdx, val]) => (
                  <span
                    key={stepIdx}
                    className="px-2.5 py-1 rounded-md border border-white/[0.08] bg-black/50 text-[11px] font-mono text-zinc-300"
                  >
                    <strong className="text-[#52E3A4]">Step {Number(stepIdx) + 1}:</strong> {val}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          03 — 6-DOMAIN PROBLEM TAXONOMY (SECTION 34)
         ══════════════════════════════════════════════════════ */}
      {activeEngineTab === 'TAXONOMY' && (
        <section className="space-y-8">
          {/* Domain Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {PROBLEM_TAXONOMY.map((dom, dIdx) => (
              <button
                key={dom.id}
                onClick={() => setSelectedTaxonomyIdx(dIdx)}
                className={`p-3 rounded-xl border text-center transition-all ${
                  selectedTaxonomyIdx === dIdx
                    ? 'bg-[#16543D] border-[#52E3A4] text-white shadow-md'
                    : 'bg-[#090B14] border-white/[0.06] text-zinc-400 hover:text-white'
                }`}
              >
                <div className="font-bold text-xs truncate">{dom.name}</div>
              </button>
            ))}
          </div>

          {/* Active Taxonomy Deep-Dive */}
          <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
            <div className="font-mono text-xs text-[#52E3A4] mb-1">
              PROBLEM TAXONOMY DOMAIN // SECTION 34
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">{activeTaxonomy.name}</h2>
            <div className="text-sm font-mono text-[#D4F838] mb-8">{activeTaxonomy.tagline}</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Symptoms */}
              <div className="p-5 rounded-xl border border-white/[0.06] bg-black/40">
                <div className="text-xs font-mono text-amber-400 font-semibold mb-3">
                  OBSERVED SYMPTOMS
                </div>
                <ul className="space-y-2">
                  {activeTaxonomy.symptoms.map((sym, sIdx) => (
                    <li key={sIdx} className="text-xs text-zinc-300 flex items-start gap-2">
                      <span className="text-amber-400 shrink-0">•</span>
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Root Causes */}
              <div className="p-5 rounded-xl border border-white/[0.06] bg-black/40">
                <div className="text-xs font-mono text-red-400 font-semibold mb-3">
                  UNDERLYING ROOT CAUSES
                </div>
                <ul className="space-y-2">
                  {activeTaxonomy.rootCauses.map((rc, rIdx) => (
                    <li key={rIdx} className="text-xs text-zinc-300 flex items-start gap-2">
                      <span className="text-red-400 shrink-0">•</span>
                      <span>{rc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Case Example & Strategy */}
            <div className="p-5 rounded-xl border border-[#23B272]/30 bg-[#23B272]/5">
              <div className="text-xs font-mono text-[#52E3A4] font-semibold mb-1">
                EMPIRICAL CASE STUDY // SECTION 45 WALKTHROUGH
              </div>
              <p className="text-xs sm:text-sm text-zinc-200 mb-3">{activeTaxonomy.caseExample}</p>
              <div className="text-xs font-mono text-zinc-400">
                <strong className="text-white">Intervention Strategy:</strong> {activeTaxonomy.interventionStrategy}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          04 — RISK ENGINE CALCULATOR (SECTION 47)
         ══════════════════════════════════════════════════════ */}
      {activeEngineTab === 'RISK_ENGINE' && (
        <section className="space-y-8">
          <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <div className="text-xs font-mono text-[#52E3A4] mb-1">
                  SECTION 47 // PROPRIETARY RISK ENGINE
                </div>
                <h2 className="text-3xl font-bold text-white">Systemic Risk Calculator</h2>
                <div className="text-xs font-mono text-zinc-400 mt-1">
                  RISK = PROBABILITY × IMPACT × DEPENDENCY × TIME SENSITIVITY
                </div>
              </div>

              <div className="p-4 rounded-xl border border-white/[0.08] bg-black/60 text-right shrink-0">
                <div className="text-[10px] font-mono text-zinc-400 uppercase">Calculated Risk Index</div>
                <div className={`text-4xl font-mono font-bold ${riskScore > 3500 ? 'text-red-400' : 'text-[#52E3A4]'}`}>
                  {riskScore}
                </div>
                <div className="text-[10px] font-mono text-zinc-500 mt-1">
                  {riskScore > 3500 ? '⚠️ CRITICAL CASCADE RISK' : '✅ CONTROLLED VARIANCE'}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Probability (1-10)', val: riskProb, set: setRiskProb, desc: 'Likelihood of deviation occurring' },
                { label: 'Impact (1-10)', val: riskImpact, set: setRiskImpact, desc: 'Financial & schedule blast magnitude' },
                { label: 'Dependency (1-10)', val: riskDep, set: setRiskDep, desc: 'Number of downstream blocking nodes' },
                { label: 'Time Sensitivity (1-10)', val: riskTime, set: setRiskTime, desc: 'Proximity to irreversible deadlines' },
              ].map((r, rIdx) => (
                <div key={rIdx} className="p-4 rounded-xl border border-white/[0.06] bg-black/30">
                  <div className="text-xs font-mono text-zinc-300 font-semibold mb-1">{r.label}</div>
                  <div className="text-[10px] text-zinc-500 mb-3">{r.desc}</div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={r.val}
                    onChange={(e) => r.set(Number(e.target.value))}
                    className="w-full accent-[#23B272] cursor-pointer"
                  />
                  <div className="text-right font-mono text-xs font-bold text-[#52E3A4] mt-2">{r.val} / 10</div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl border border-white/[0.08] bg-black/40 text-xs font-mono text-zinc-400 flex items-center justify-between">
              <span>Risk Engine is deployed during Pre-Production (Mode 04 Prevent) to redesign brittle workflows.</span>
              <Link to="/start" className="text-[#52E3A4] hover:underline flex items-center gap-1">
                <span>Request Project Risk Audit</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          05 — DIAGNOSTIC PROBLEM WIZARD (PROBLEM ENGINE)
         ══════════════════════════════════════════════════════ */}
      {activeEngineTab === 'PROBLEM_WIZARD' && (
        <section className="space-y-8 animate-in fade-in duration-300">
          <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
            <div className="max-w-2xl mb-8">
              <div className="text-xs font-mono text-[#52E3A4] mb-1">
                INTERACTIVE SYSTEM WIZARD // PROBLEM CATEGORIES &amp; SYNQ PATHS
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Diagnostic Problem Engine</h2>
              <p className="text-zinc-300 text-sm">
                Select your operational domain, answer diagnostic drilldown questions, and generate a customized Synq Path for your production.
              </p>
            </div>

            <ProblemEngine />
          </div>
        </section>
      )}
    </main>
  );
}
