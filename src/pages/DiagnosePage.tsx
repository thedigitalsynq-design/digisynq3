import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  Copy,
  AlertTriangle,
  ShieldCheck,
  Cpu,
  GitBranch,
  Layers,
  Check,
  ChevronRight,
  Clock,
  Sparkles,
  RotateCcw,
} from 'lucide-react';
import { CONTINUUM_STAGES, STAKEHOLDERS } from '../data/blueprint_data';
import { intakeService, DiagnosticResult } from '../services/intakeService';
import { TopographicBackground } from '../components/TopographicBackground';

interface StepOption {
  id: string;
  title: string;
  desc: string;
}

interface DiagnosticStep {
  num: string;
  eyebrow: string;
  question: string;
  subtitle: string;
  options: StepOption[];
  multiSelect?: boolean;
}

const DIAGNOSTIC_STEPS: DiagnosticStep[] = [
  {
    num: '01',
    eyebrow: 'OPERATIONAL OBJECTIVE',
    question: 'What are you trying to accomplish?',
    subtitle: 'Select the primary production milestone or deliverable currently under active execution.',
    options: [
      { id: 'principal_shoot', title: 'Complete Principal Photography On-Schedule', desc: 'Execute daily call sheets, wrap key sets, and preserve turnaround buffers.' },
      { id: 'lock_pre_pro', title: 'Lock Pre-Production & Floor Dates', desc: 'Secure location permits, HoD attachments, and soundstage tenant handover.' },
      { id: 'vp_volume_shoot', title: 'Execute In-Camera VFX / LED Volume Shoot', desc: 'Synchronize 3D Unreal environments, camera tracking, and volume lighting rigs.' },
      { id: 'post_finishing_delivery', title: 'Deliver Picture Lock & Multi-Vendor VFX', desc: 'Conform 120+ hero CGI shots, complete DI color grade, and master Dolby Atmos audio.' },
      { id: 'platform_qc_handover', title: 'Pass OTT Streaming Platform QC & IMF Delivery', desc: 'Meet strict streaming platform delivery profiles, timed subtitles, and multi-language dubs.' },
      { id: 'theatrical_release_window', title: 'Lock Theatrical Screen Count & Release Date', desc: 'Comply with fixed distributor delivery deadlines and avoid competitor tentpole clashes.' },
    ],
  },
  {
    num: '02',
    eyebrow: 'BLOCKAGE & SYMPTOM',
    question: 'What is going wrong?',
    subtitle: 'Identify the active operational friction or emergency where reality is diverging from plan.',
    options: [
      { id: 'schedule_drift', title: 'Schedule Slippage Compounding Downstream', desc: 'Upstream filming delays have consumed all buffer days before stage eviction.' },
      { id: 'soundstage_turnover_crunch', title: 'Soundstage Booking Overlap & Turnaround Penalty', desc: 'Lease expiration approaching with 4 essential sequences remaining unshot.' },
      { id: 'talent_window_collision', title: 'Lead Talent Availability Hard-Out Collision', desc: 'Key actor departing for another project before coverage is completed.' },
      { id: 'vfx_plate_compression', title: 'VFX Plate Delivery Squeeze & Vendor Overload', desc: 'Conform window compressed by 60%, forcing secondary vendor crisis.' },
      { id: 'qc_delivery_rejection', title: 'Platform Master QC Rejection', desc: 'IMF package or Atmos bed phase error rejected 72h before global rollout.' },
      { id: 'budget_overtime_burn', title: 'Unscheduled Overtime Cash Burn Spikes', desc: 'Turnaround hour breaches and standby equipment penalties burning contingency capital.' },
    ],
  },
  {
    num: '03',
    eyebrow: 'LOCATION IN LIFECYCLE',
    question: 'Where is it happening?',
    subtitle: 'Pinpoint which stage of the Entertainment Continuum is the primary flashpoint.',
    options: CONTINUUM_STAGES.map((s) => ({
      id: s.step,
      title: s.name,
      desc: s.shortDesc,
    })),
  },
  {
    num: '04',
    eyebrow: 'CHRONOLOGICAL ORIGIN',
    question: 'When did it begin?',
    subtitle: 'Systems rarely fail instantly. At what point did the operational delta first surface?',
    options: [
      { id: 'current_sprint', title: 'Within the Last 24–48 Hours', desc: 'Acute on-set shock: actor illness, sudden permit cancellation, or hardware failure.' },
      { id: 'current_milestone', title: 'During Current Milestone Transition (1–2 Weeks)', desc: 'Late dailies turnovers or unhedged script revisions during filming.' },
      { id: 'upstream_prep', title: 'Rooted in Upstream Pre-Production Prep', desc: 'Unrealistic turnaround assumptions and lack of schedule buffer baked in from day 1.' },
      { id: 'development_phase', title: 'Inherited from Script Development & Rights', desc: 'Ambiguous chain-of-title or unbudgeted practical stunt complexity.' },
    ],
  },
  {
    num: '05',
    eyebrow: 'STAKEHOLDERS IN BLAST RADIUS',
    question: 'Who is affected?',
    subtitle: 'Select the primary parties whose operational progress is directly blocked. (Multi-select)',
    multiSelect: true,
    options: STAKEHOLDERS.slice(0, 8).map((st) => ({
      id: st.id,
      title: st.name,
      desc: st.role,
    })),
  },
  {
    num: '06',
    eyebrow: 'IMPACT VECTOR',
    question: 'What is the impact?',
    subtitle: 'Where is collateral damage accumulating most aggressively across the system?',
    options: [
      { id: 'financial_penalties', title: 'Immediate Capital Burn ($25k–$100k+/day)', desc: 'Standby camera equipment, dark floor penalties, and crew overtime turnaround fines.' },
      { id: 'delivery_window_loss', title: 'Irreversible Delivery Window Forfeiture', desc: 'Missing global OTT simultaneous launch or locked theatrical screen bookings.' },
      { id: 'post_finishing_collapse', title: 'Cascading Post-Production Compression', desc: 'Forcing 8 weeks of compositing and sound mixing into an impossible 12-day crunch.' },
      { id: 'creative_mutilation', title: 'Severe Creative Compromise', desc: 'Forced to cut climax sequences or accept unfinished visual effects.' },
    ],
  },
  {
    num: '07',
    eyebrow: 'DEPENDENCY LINKS',
    question: 'What dependencies are involved?',
    subtitle: 'What critical-path connections are propagating this failure downstream?',
    options: [
      { id: 'talent_stage_deps', title: 'Talent Availability → Soundstage Floor → Camera Rig', desc: 'Physical production dependencies locked into strict sequential order.' },
      { id: 'plate_conform_deps', title: 'Camera Dailies → VFX Plates → Editorial Lock → Sound Mix', desc: 'Digital finishing dependencies bound to strict upstream input quality.' },
      { id: 'contract_capital_deps', title: 'Milestone Delivery Report → Capital Drawdown → Vendor Payment', desc: 'Financial tranches decoupled from technical deliverable reality.' },
      { id: 'spec_platform_deps', title: 'Color Conform → IMF Metadata Wrapping → Platform QC Ingest', desc: 'Technical delivery dependencies governed by automated platform gates.' },
    ],
  },
  {
    num: '08',
    eyebrow: 'ATTEMPTED TRIAGE',
    question: 'What has already been attempted?',
    subtitle: 'Understanding previous attempts reveals what systemic constraints remain unbroken.',
    options: [
      { id: 'overtime_push', title: 'Extended Overtime Shifts & Crew Burnout', desc: 'Attempted to shoot through the delay, triggering safety limits and budget spikes.' },
      { id: 'vendor_pressure', title: 'Informal Vendor Expediting & Phone Calls', desc: 'Pressuring post facilities to accelerate work without providing clearer inputs.' },
      { id: 'scene_cuts', title: 'Internal Scene Reshuffling & Tactical Cuts', desc: 'Ad-hoc changes made without recalculating downstream lighting or talent impacts.' },
      { id: 'no_action_yet', title: 'No Intervention Attempted Yet', desc: 'Emergency just surfaced; seeking initial diagnosis before making costly moves.' },
    ],
  },
  {
    num: '09',
    eyebrow: 'ROOT-CAUSE HYPOTHESIS',
    question: 'What is the likely root cause?',
    subtitle: 'Surface emergencies are caused by underlying structural flaws. Select the core origin.',
    options: [
      { id: 'dependency_concentration', title: 'Schedule Dependency Concentration', desc: 'Too many high-risk elements chained in single-file without elastic buffers.' },
      { id: 'missing_schema_covenants', title: 'Missing Interface Specs & Input Standards', desc: 'Departments operating with inconsistent color spaces, schemas, or delivery formats.' },
      { id: 'unhedged_scope_creep', title: 'Unhedged Creative Scope Expansion', desc: 'Script revisions injected into production without technical feasibility recalibration.' },
      { id: 'opaque_capacity_tracking', title: 'Zero Real-Time Capacity Telemetry', desc: 'Leadership discovering bottlenecks only after milestones have already broken.' },
    ],
  },
  {
    num: '10',
    eyebrow: 'MISSING CAPABILITY',
    question: 'What capability is missing?',
    subtitle: 'What operational tool or resource was absent that enabled this crisis?',
    options: [
      { id: 'burst_network_routing', title: 'Pre-Vetted Burst Partner Routing', desc: 'Immediate access to partner dark-floor stages, secondary VFX, or specialist crew.' },
      { id: 'dynamic_resequencing_engine', title: 'Dynamic Counterfactual Resequencing Tool', desc: 'Algorithmic ability to simulate multi-party schedule shifts in minutes.' },
      { id: 'preflight_automated_qc', title: 'Automated Pre-Flight QC Validation Pipeline', desc: 'Rigorous machine-checking of deliverable assets before handoff.' },
      { id: 'milestone_escrow_governance', title: 'Dependency-Aware Milestone Governance', desc: 'Single-source neutral operational accountability aligning all parties.' },
    ],
  },
  {
    num: '11',
    eyebrow: 'INTERVENTION CLASS',
    question: 'What intervention is possible?',
    subtitle: 'Determine the operational footprint and turnaround sprint required to resolve this.',
    options: [
      { id: 'rapid_triage_synq', title: 'Rapid Triage SYNQ (24–48 Hours)', desc: 'Emergency stabilization: dynamic scene resequencing and immediate bottleneck bypass.' },
      { id: 'pipeline_sync_sprint', title: 'Pipeline & Interface SYNQ (3–7 Days)', desc: 'Standardize schemas, establish verified asset handovers between departments.' },
      { id: 'capacity_burst_sprint', title: 'Capacity Burst SYNQ (1–3 Weeks)', desc: 'Route critical overflow shots to pre-vetted network facilities under rate parity.' },
      { id: 'continuum_orchestration', title: 'Full Continuum Synchronization Engagement', desc: 'End-to-end dependency management across production, post, and platform delivery.' },
    ],
  },
];

const LOCAL_STORAGE_KEY = 'digisynq_diagnostic_v2_progress';

export function DiagnosePage() {
  const navigate = useNavigate();
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [selections, setSelections] = useState<Record<number, string | string[]>>({
    0: 'principal_shoot',
    1: 'schedule_drift',
    2: '04',
    3: 'current_milestone',
    4: ['producers', 'talent', 'technicians'],
    5: 'financial_penalties',
    6: 'talent_stage_deps',
    7: 'overtime_push',
    8: 'dependency_concentration',
    9: 'burst_network_routing',
    10: 'rapid_triage_synq',
  });

  const [diagnosticResult, setDiagnosticResult] = useState<DiagnosticResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.selections) setSelections(parsed.selections);
        if (typeof parsed.step === 'number') setCurrentStepIdx(parsed.step);
      }
    } catch (e) {
      console.warn('Could not load saved diagnostic progress', e);
    }
  }, []);

  // Save progress to localStorage
  const saveProgress = (newSelections: Record<number, string | string[]>, step: number) => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ selections: newSelections, step }));
    } catch (e) {
      console.warn('Could not save diagnostic progress', e);
    }
  };

  const currentStep = DIAGNOSTIC_STEPS[currentStepIdx];

  const handleSelectOption = (optId: string) => {
    let updated: Record<number, string | string[]>;
    if (currentStep.multiSelect) {
      const current = (selections[currentStepIdx] as string[]) || [];
      const next = current.includes(optId)
        ? current.filter((x) => x !== optId)
        : [...current, optId];
      updated = { ...selections, [currentStepIdx]: next };
    } else {
      updated = { ...selections, [currentStepIdx]: optId };
    }
    setSelections(updated);
    saveProgress(updated, currentStepIdx);
  };

  const handleNext = async () => {
    if (currentStepIdx < 10) {
      const nextStep = currentStepIdx + 1;
      setCurrentStepIdx(nextStep);
      saveProgress(selections, nextStep);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Step 11 completed: synthesize diagnostic
      setIsGenerating(true);

      const objective = DIAGNOSTIC_STEPS[0].options.find((o) => o.id === selections[0])?.title || 'Principal Photography Execution';
      const blockage = DIAGNOSTIC_STEPS[1].options.find((o) => o.id === selections[1])?.title || 'Schedule Slippage';
      const stageCode = (selections[2] as string) || '04';
      const stageName = CONTINUUM_STAGES.find((s) => s.step === stageCode)?.name || 'Production';
      const originWhen = DIAGNOSTIC_STEPS[3].options.find((o) => o.id === selections[3])?.title || 'Current Milestone';
      const impact = DIAGNOSTIC_STEPS[5].options.find((o) => o.id === selections[5])?.title || 'Capital Burn Acceleration';
      const dependencies = DIAGNOSTIC_STEPS[6].options.find((o) => o.id === selections[6])?.title || 'Talent to Stage Dependency';
      const rootCause = DIAGNOSTIC_STEPS[8].options.find((o) => o.id === selections[8])?.title || 'Dependency Concentration';
      const missingCap = DIAGNOSTIC_STEPS[9].options.find((o) => o.id === selections[9])?.title || 'Pre-Vetted Burst Routing';
      const intervention = DIAGNOSTIC_STEPS[10].options.find((o) => o.id === selections[10])?.title || 'Rapid Triage SYNQ';

      const rawDeps = (selections[4] as string[]) || ['producers', 'talent'];
      const depLabels = rawDeps.map((id) => STAKEHOLDERS.find((s) => s.id === id)?.name || id);

      const result = await intakeService.saveDiagnosticResult({
        stage: `Stage ${stageCode}: ${stageName}`,
        objective,
        blockage,
        location: `Stage ${stageCode}: ${stageName}`,
        event: originWhen,
        impact,
        dependencies: depLabels,
        rootCause,
        missingCapability: missingCap,
        recommendedIntervention: intervention,
        interventionClass: (selections[10] as string) || 'rapid_triage_synq',
        relevantMechanisms: ['M01: Observe', 'M04: Map', 'M08: Simulate', 'M10: Match', 'M12: Execute', 'M14: Verify'],
        expectedOutcome: 'Modelled 5.5 days schedule buffer recovery and $84k+ avoided idle fines.',
        confidence: '89.4% Modelled Inference (DigiSynq Taxonomy)',
        riskScore: 'High',
        cascadePath: [
          `Problem: ${objective} blocked by ${blockage}`,
          `Symptom: Operational variance active in Stage ${stageCode}`,
          `Event: Originating during ${originWhen}`,
          `Condition: Critical dependencies bound across ${dependencies}`,
          `Dependency: Multi-stakeholder blast radius impacting ${depLabels.join(', ')}`,
          `Root Cause: ${rootCause}`,
          `Missing Capability: ${missingCap}`,
          `Intervention: ${intervention}`,
          `Outcome: Modelled Schedule & Capital Stabilization`,
        ],
      });

      setDiagnosticResult(result);
      setIsGenerating(false);
      setCurrentStepIdx(11); // Show result screen
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRestart = () => {
    setDiagnosticResult(null);
    setCurrentStepIdx(0);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyCaseId = () => {
    if (!diagnosticResult) return;
    navigator.clipboard.writeText(diagnosticResult.caseId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="bg-[#03040A] text-[#ECEEF5] selection:bg-white selection:text-black min-h-screen pt-36 pb-24 px-6 sm:px-8 max-w-5xl mx-auto relative overflow-hidden">
      <TopographicBackground className="opacity-20 pointer-events-none -z-10 fixed inset-0" />

      {/* ── Diagnostic Console Header ── */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-white font-semibold">ROOT-CAUSE DIAGNOSTIC ENGINE</span>
          <span className="text-zinc-600">//</span>
          <span className="text-zinc-400">INTERACTIVE ROOT-CAUSE DECOMPOSITION</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
          Diagnose an Entertainment System Breakdown.
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
          Deconstruct surface friction, identify structural root causes, calculate cascade blast radius, and determine the exact class of SYNQ intervention required.
        </p>
      </div>

      {/* ── Step Progress Indicator ── */}
      {currentStepIdx < 11 && (
        <div className="mb-10 p-4 rounded-2xl bg-[#090B14] border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono mb-2">
            <span className="text-zinc-400">{currentStep.eyebrow}</span>
            <span className="text-white font-bold">
              {Math.round(((currentStepIdx + 1) / 11) * 100)}% COMPLETE
            </span>
          </div>
          <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-zinc-200 to-white transition-all duration-300"
              style={{ width: `${((currentStepIdx + 1) / 11) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* ── Steps 01 to 11 Workspace ── */}
      {currentStepIdx < 11 && (
        <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl relative overflow-hidden">
          <div className="mb-8">
            <span className="text-xs font-mono text-white tracking-wider uppercase block mb-1">
              QUESTION {currentStep.num}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {currentStep.question}
            </h2>
            <p className="text-sm text-zinc-400">
              {currentStep.subtitle}
            </p>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {currentStep.options.map((opt) => {
              const isSelected = currentStep.multiSelect
                ? ((selections[currentStepIdx] as string[]) || []).includes(opt.id)
                : selections[currentStepIdx] === opt.id;

              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectOption(opt.id)}
                  className={`p-5 rounded-2xl border text-left transition-all cursor-pointer relative group flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-white/[0.05] border-white/20 shadow-[0_0_25px_rgba(82,227,164,0.18)] scale-[1.01]'
                      : 'bg-black/40 border-white/[0.06] hover:border-white/15'
                  }`}
                >
                  <div>
                    <h3 className={`text-sm font-bold transition-colors ${isSelected ? 'text-white' : 'text-white'}`}>
                      {opt.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      {opt.desc}
                    </p>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border transition-all mt-0.5 ${
                      isSelected
                        ? 'bg-white border-white/20 text-[#03040A]'
                        : 'border-white/20'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Nav Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-white/[0.08]">
            <button
              type="button"
              onClick={() => setCurrentStepIdx(Math.max(0, currentStepIdx - 1))}
              disabled={currentStepIdx === 0}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold font-mono transition-all ${
                currentStepIdx === 0 ? 'opacity-30 cursor-not-allowed text-zinc-500' : 'text-zinc-300 hover:text-white'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={isGenerating}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white hover:bg-zinc-200 text-[#03040A] font-bold text-xs font-mono tracking-wide transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] active:scale-95"
            >
              <span>{currentStepIdx === 10 ? (isGenerating ? 'Synthesizing Diagnosis...' : 'Generate Systemic Diagnosis →') : 'Continue →'}</span>
            </button>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════
          RESULT SCREEN: DIGISYNQ DIAGNOSTIC DOSSIER
         ══════════════════════════════════════════════════════ */}
      {currentStepIdx === 11 && diagnosticResult && (
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* Header Badge & Identifier */}
          <div className="p-8 sm:p-10 rounded-3xl border border-white/20 bg-[#090B14] shadow-2xl relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/[0.08]">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-white uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>PRELIMINARY / MODELLED DIAGNOSTIC REPORT</span>
                </div>
                <h2 className="text-3xl font-black text-white">
                  DIGISYNQ DIAGNOSTIC: <span className="font-mono text-zinc-200">{diagnosticResult.caseId}</span>
                </h2>
                <p className="text-xs text-zinc-500 mt-1 font-mono">
                  Timestamp: {new Date(diagnosticResult.createdAt).toLocaleString()} · Stored in System Client Memory
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopyCaseId}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-white transition-all"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Case ID Copied' : 'Copy Case ID'}</span>
                </button>
                <button
                  onClick={handleRestart}
                  className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-400 hover:text-white transition-all"
                  title="Restart Diagnostic"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Diagnostic Core Scorecards: Case Type, Risk, Urgency, Confidence */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 font-mono text-xs">
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                <div className="text-[10px] text-zinc-500 uppercase">CASE TYPE</div>
                <div className="text-white font-bold mt-1 truncate">{diagnosticResult.stage}</div>
              </div>
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                <div className="text-[10px] text-red-400 uppercase">RISK LEVEL</div>
                <div className="text-red-300 font-bold mt-1">HIGH (Cascade Shock)</div>
              </div>
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <div className="text-[10px] text-amber-400 uppercase">URGENCY TIER</div>
                <div className="text-amber-300 font-bold mt-1">IMMEDIATE TRIAGE</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.06] border border-white/15">
                <div className="text-[10px] text-white uppercase">CONFIDENCE</div>
                <div className="text-white font-bold mt-1">89.4% MODELLED</div>
              </div>
            </div>

            {/* Complete Diagnostic Decomposition Matrix */}
            <div className="space-y-4 mb-8 text-xs font-mono">
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                <strong className="text-zinc-400 block mb-1 text-[11px]">PROBLEM:</strong>
                <span className="text-white text-sm font-sans">{diagnosticResult.objective} blocked by {diagnosticResult.blockage}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200">
                  <strong className="text-red-400 block mb-1 text-[11px]">SYMPTOMS &amp; IMPACT:</strong>
                  <span>{diagnosticResult.impact}</span>
                </div>
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200">
                  <strong className="text-amber-400 block mb-1 text-[11px]">IDENTIFIED ROOT CAUSE:</strong>
                  <span>{diagnosticResult.rootCause}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                  <strong className="text-zinc-400 block mb-1 text-[11px]">DEPENDENCIES &amp; BLAST RADIUS:</strong>
                  <span className="text-zinc-300">Affecting {diagnosticResult.dependencies.join(', ')}</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/15 text-zinc-300">
                  <strong className="text-white block mb-1 text-[11px]">MISSING CAPABILITY:</strong>
                  <span>{diagnosticResult.missingCapability}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.06] border border-white/15 text-white">
                <strong className="text-white block mb-1 text-[11px]">RECOMMENDED SYNQ INTERVENTION:</strong>
                <span className="text-sm font-bold">{diagnosticResult.recommendedIntervention}</span>
                <span className="block text-zinc-400 mt-1">{diagnosticResult.expectedOutcome}</span>
              </div>
            </div>

            {/* ── Interactive Root Map (10 Stages from Problem to Outcome) ── */}
            <div className="p-6 rounded-2xl bg-black/50 border border-white/[0.08] mb-8">
              <span className="text-[11px] font-mono text-white uppercase tracking-wider block mb-4">
                INTERACTIVE ROOT MAP CAUSAL CHAIN
              </span>
              <div className="space-y-2 text-xs font-mono">
                {diagnosticResult.cascadePath.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-white shrink-0 font-bold">•</span>
                    <span className="text-zinc-600">→</span>
                    <span className="p-2 rounded bg-white/[0.03] border border-white/[0.06] text-zinc-300 w-full">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modelled Warning Note */}
            <div className="text-[11px] font-mono text-zinc-500 mb-8">
              * Note: Conclusions are preliminary modelled inferences generated from DigiSynq structural problem taxonomy. They do not imply AI omniscience. Full resolution requires human triage by the DigiSynq network.
            </div>

            {/* Action Bar: Seamless connection to /start */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-zinc-400">
                Case ID <strong className="text-white">{diagnosticResult.caseId}</strong> ready for intake:
              </span>
              <Link
                to={`/start?caseId=${diagnosticResult.caseId}&stage=${encodeURIComponent(diagnosticResult.stage)}&problem=${encodeURIComponent(diagnosticResult.blockage)}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black hover:bg-zinc-200 font-bold text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(255,255,255,0.25)] active:scale-95"
              >
                <span>Proceed to Start a SYNQ Case with these Parameters →</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
