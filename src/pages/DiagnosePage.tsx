import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, ArrowLeft, RefreshCw, 
  Copy, AlertTriangle, ShieldCheck, Cpu, GitFork, 
  Layers, Check, Sparkles, FileText, ChevronRight
} from 'lucide-react';
import { CONTINUUM_STAGES, STAKEHOLDERS, MECHANISMS } from '../data/blueprint_data';
import { intakeService, DiagnosticResult } from '../services/intakeService';

interface StepOption {
  id: string;
  title: string;
  desc: string;
  category?: string;
}

const STEP_DATA: {
  title: string;
  eyebrow: string;
  question: string;
  subtitle: string;
  options: StepOption[];
  multiSelect?: boolean;
}[] = [
  {
    eyebrow: 'STEP 01 / 10 · OBJECTIVE',
    title: 'Operational Goal',
    question: 'What are you trying to accomplish?',
    subtitle: 'Select the primary milestone or deliverable currently under active execution.',
    options: [
      { id: 'pre_pro_lock', title: 'Lock Pre-Production & Budget', desc: 'Secure location permits, department HoD attachments, and finance drawdown schedule.' },
      { id: 'principal_shoot', title: 'Complete Principal Photography', desc: 'Execute shooting schedule within turnaround covenants and avoid daily overruns.' },
      { id: 'vp_stage', title: 'Virtual Production / LED Volume Shoot', desc: 'Synchronize in-camera VFX, Unreal Engine environments, and camera tracking arrays.' },
      { id: 'post_delivery', title: 'Post-Production & VFX Turnover', desc: 'Coordinate multi-vendor VFX plate handoffs, color grading, sound conform, and mastering.' },
      { id: 'theatrical_date', title: 'Meet Fixed Theatrical / Festival Date', desc: 'Comply with strict theater delivery windows and localized cinema DCP distribution.' },
      { id: 'ott_delivery', title: 'OTT Streaming Platform Handover', desc: 'Pass stringent platform QC specs, IMF packages, multilingual dubs, and timed subtitles.' },
      { id: 'music_licensing', title: 'Music Score & Commercial Rights Lock', desc: 'Synchronize master licensing, synchronization rights, and stem turnovers for mix.' },
      { id: 'crew_scale', title: 'Crew & Technical Capacity Scaling', desc: 'Assemble high-demand specialist crew under tight market constraints.' }
    ]
  },
  {
    eyebrow: 'STEP 02 / 10 · BLOCKAGE',
    title: 'Identified Obstacle',
    question: 'What is blocking or threatening this objective?',
    subtitle: 'Identify the friction point where operational reality has diverged from plan.',
    options: [
      { id: 'schedule_slip', title: 'Schedule Slippage & Compounding Delays', desc: 'Upstream delays are eating downstream contingency buffer days.' },
      { id: 'department_silo', title: 'Inter-Departmental Silo Breakdown', desc: 'Art, Camera, and VFX are executing against inconsistent technical assumptions.' },
      { id: 'asset_mismatch', title: 'Asset Handover & Plate Rejections', desc: 'Delivered files fail technical metadata conform, format standards, or color space specs.' },
      { id: 'vendor_capacity', title: 'Vendor Capacity & Burst Bottleneck', desc: 'Lead VFX house or sound facility is overbooked and unable to take critical shots.' },
      { id: 'creative_technical', title: 'Creative vs Technical Misalignment', desc: 'Director intent conflicts with practical budget limits or stage technical tolerances.' },
      { id: 'cost_burn', title: 'Daily Cash Burn Escalation', desc: 'Standby stage costs and idle crew turnaround are burning contingency funds.' },
      { id: 'rights_dispute', title: 'Unresolved Chain of Title / Rights', desc: 'Talent option expiry or music sync clearances threatening final distribution release.' }
    ]
  },
  {
    eyebrow: 'STEP 03 / 10 · LOCATION',
    title: 'Continuum Stage',
    question: 'In which stage of the Continuum is this blockage located?',
    subtitle: 'Pinpoint the exact zone where the breakdown is currently manifesting.',
    options: CONTINUUM_STAGES.map(s => ({
      id: s.name.toLowerCase().replace(/\s+/g, '_'),
      title: `${s.step}. ${s.name}`,
      desc: s.shortDesc
    }))
  },
  {
    eyebrow: 'STEP 04 / 10 · CHANGE EVENT',
    title: 'Triggering Event',
    question: 'What recent change or event catalyzed this breakdown?',
    subtitle: 'Systems rarely fail spontaneously; identify the specific catalyst.',
    options: [
      { id: 'scope_expansion', title: 'Unbudgeted Scope Expansion', desc: 'Script revisions or additional sequences added without extending calendar schedule.' },
      { id: 'key_hod_turnover', title: 'Key HoD or Personnel Change', desc: 'Director of Photography, VFX Supervisor, or Line Producer replaced mid-flight.' },
      { id: 'vendor_milestone_miss', title: 'Vendor Missed Critical Turnaround', desc: 'External facility failed to deliver preliminary temp cut or plate turnover on date.' },
      { id: 'technical_format_switch', title: 'Camera Format or Pipeline Switch', desc: 'Capture resolution, aspect ratio, or color pipeline changed during production.' },
      { id: 'schedule_compression', title: 'Delivery Date Pulled Forward', desc: 'Platform or distributor accelerated delivery deadline by 2–4 weeks.' },
      { id: 'location_loss', title: 'Location or Stage Cancellation', desc: 'Permit revoked, weather shock, or soundstage booking overlap forced emergency halt.' }
    ]
  },
  {
    eyebrow: 'STEP 05 / 10 · IMPACT VECTOR',
    title: 'Impact Magnitude',
    question: 'What is the immediate and downstream impact vector?',
    subtitle: 'Where is the damage accumulating most aggressively?',
    options: [
      { id: 'financial_burn', title: 'Daily Financial Capital Burn ($25k–$100k+/day)', desc: 'Idle crew, booked studio floors, and standby rental packages.' },
      { id: 'cascading_post_delay', title: 'Cascading Post-Production Compression', desc: 'Compressing 16 weeks of VFX and conform into an unfeasible 6-week window.' },
      { id: 'qc_rejection_risk', title: 'Critical Platform QC Rejection Risk', desc: 'Risk of failing delivery specs and missing coordinated worldwide streaming drop.' },
      { id: 'talent_window_loss', title: 'Key Talent Availability Window Loss', desc: 'Leading cast commitment expiring; reshoots become impossible or cost-prohibitive.' },
      { id: 'creative_compromise', title: 'Severe Creative Compromise', desc: 'Forced to cut intended sequences or accept subpar temporary visual effects.' }
    ]
  },
  {
    eyebrow: 'STEP 06 / 10 · DEPENDENCIES',
    title: 'Affected Stakeholders',
    question: 'Which stakeholders and downstream nodes depend on resolving this?',
    subtitle: 'Select all parties whose operational progress is directly blocked. (Multiple selection)',
    multiSelect: true,
    options: STAKEHOLDERS.map(st => ({
      id: st.id,
      title: st.name,
      desc: st.role
    }))
  },
  {
    eyebrow: 'STEP 07 / 10 · ROOT CAUSE',
    title: 'Root Cause Diagnosis',
    question: 'What is the underlying structural root cause?',
    subtitle: 'Surface symptoms are caused by deeper systemic deficiencies. Select the core origin.',
    options: [
      { id: 'silo_contract', title: 'Information Silo & Missing Schema Contract', desc: 'Departments operate in isolation with no shared single source of truth or asset spec.' },
      { id: 'unbuffered_chain', title: 'Unbuffered Dependency Chain', desc: 'Zero buffer days between dependent phases; any upstream delay instantly breaks downstream.' },
      { id: 'unvetted_vendor', title: 'Unverified Vendor / Capability Mismatch', desc: 'Subcontractor contracted for work beyond their true throughput or technical capability.' },
      { id: 'incentive_misalignment', title: 'Misaligned Contractual Incentives', desc: 'Agreements reward speed over input quality, penalizing downstream finishing houses.' },
      { id: 'opaque_telemetry', title: 'Zero Operational Telemetry', desc: 'Leadership only discovers failure after milestones have already lapsed.' }
    ]
  },
  {
    eyebrow: 'STEP 08 / 10 · MISSING CAPABILITY',
    title: 'Missing Capability',
    question: 'What system capability is missing from the current setup?',
    subtitle: 'What mechanism would have absorbed this shock before it became a crisis?',
    options: [
      { id: 'dynamic_telemetry', title: 'Live Dependency Telemetry (TREE Engine)', desc: 'Real-time monitoring of asset turnovers, stage status, and schedule buffer health.' },
      { id: 'burst_network', title: 'Orchestrated Burst Capacity Network', desc: 'Pre-vetted overflow VFX, sound, and editorial partners ready on zero notice.' },
      { id: 'spec_standard', title: 'Unified Technical Specification & Pre-Flight QC', desc: 'Rigorous machine-verified input compliance before any asset enters post.' },
      { id: 'neutral_arbitrator', title: 'Neutral Synchronization Liaison', desc: 'An impartial operational bridge aligning creative intent with technical physics.' },
      { id: 'contract_guardrails', title: 'Dependency-Aware Milestone Governance', desc: 'Financial drawdowns tied strictly to verified dependency handovers.' }
    ]
  },
  {
    eyebrow: 'STEP 09 / 10 · INTERVENTION CLASS',
    title: 'Intervention Class',
    question: 'Which class of SYNQ intervention is required?',
    subtitle: 'Determine the operational footprint and turnaround urgency of the fix.',
    options: [
      { id: 'rapid_triage', title: 'Rapid Triage SYNQ (24–48 Hours)', desc: 'Emergency stabilization: resequence shoot schedule, unlock immediate bottleneck.' },
      { id: 'pipeline_sync', title: 'Pipeline & Handshake SYNQ (3–7 Days)', desc: 'Standardize data schemas, establish verified asset handovers between departments.' },
      { id: 'capacity_burst', title: 'Capacity Burst SYNQ (1–3 Weeks)', desc: 'Route critical overflow shots/conform to pre-vetted network facilities without balance-sheet debt.' },
      { id: 'preflight_audit', title: 'Pre-Flight Risk & Dependency Audit', desc: 'Systemic stress-test of pre-production schedule and vendor contracts before cameras roll.' },
      { id: 'full_continuum', title: 'End-to-End System Synchronization', desc: 'Continuous dependency orchestration across production, post-production, and platform delivery.' }
    ]
  }
];

export function DiagnosePage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<number, string | string[]>>({
    0: 'post_delivery',
    1: 'schedule_slip',
    2: 'post-production',
    3: 'vendor_milestone_miss',
    4: 'cascading_post_delay',
    5: ['producers', 'post-vfx', 'distributors'],
    6: 'silo_contract',
    7: 'dynamic_telemetry',
    8: 'rapid_triage'
  });

  const [diagnosticResult, setDiagnosticResult] = useState<DiagnosticResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [saving, setSaving] = useState(false);

  const stepMeta = STEP_DATA[currentStep];

  const handleSelectOption = (optionId: string) => {
    if (stepMeta.multiSelect) {
      const current = (selections[currentStep] as string[]) || [];
      if (current.includes(optionId)) {
        setSelections({ ...selections, [currentStep]: current.filter(x => x !== optionId) });
      } else {
        setSelections({ ...selections, [currentStep]: [...current, optionId] });
      }
    } else {
      setSelections({ ...selections, [currentStep]: optionId });
    }
  };

  const isStepComplete = () => {
    const sel = selections[currentStep];
    if (Array.isArray(sel)) return sel.length > 0;
    return Boolean(sel);
  };

  const handleNext = async () => {
    if (currentStep < 8) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Step 10: Generate Diagnostic Report
      setSaving(true);
      
      const stageName = (selections[2] as string) || 'Production';
      const objective = STEP_DATA[0].options.find(o => o.id === selections[0])?.title || 'System Milestone';
      const blockage = STEP_DATA[1].options.find(o => o.id === selections[1])?.title || 'Operational Friction';
      const event = STEP_DATA[3].options.find(o => o.id === selections[3])?.title || 'Schedule Shift';
      const impact = STEP_DATA[4].options.find(o => o.id === selections[4])?.title || 'Cascading Delay';
      const rootCause = STEP_DATA[6].options.find(o => o.id === selections[6])?.title || 'Information Silo';
      const missingCap = STEP_DATA[7].options.find(o => o.id === selections[7])?.title || 'Live Dependency Telemetry';
      const intervention = STEP_DATA[8].options.find(o => o.id === selections[8])?.title || 'Rapid Triage SYNQ';
      
      const rawDeps = (selections[5] as string[]) || ['producers', 'post-vfx'];
      const depLabels = rawDeps.map(id => STAKEHOLDERS.find(s => s.id === id)?.name || id);

      const result = await intakeService.saveDiagnosticResult({
        stage: stageName,
        objective,
        blockage,
        location: stageName,
        event,
        impact,
        dependencies: depLabels,
        rootCause,
        missingCapability: missingCap,
        recommendedIntervention: intervention,
        interventionClass: (selections[8] as string) || 'rapid_triage',
        relevantMechanisms: ['01. OBSERVE', '02. DETECT', '03. DECOMPOSE', '04. MAP', '05. DIAGNOSE', '08. SIMULATE', '11. RESOLVE'],
        expectedOutcome: 'Stabilize schedule buffer within 48h; eliminate downstream dependency cascade.',
        confidence: '96.4% Structural Match',
        riskScore: 'High',
        cascadePath: [
          `Event: ${event}`,
          `Condition: ${blockage}`,
          `Root: ${rootCause}`,
          `Missing: ${missingCap}`,
          `Intervention: ${intervention}`
        ]
      });

      setDiagnosticResult(result);
      setSaving(false);
      setCurrentStep(9);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCopyCaseId = () => {
    if (!diagnosticResult) return;
    navigator.clipboard.writeText(diagnosticResult.caseId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleRestart = () => {
    setDiagnosticResult(null);
    setCurrentStep(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main id="main-content" className="pt-28 pb-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Engine Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#23B272]/30 bg-[#23B272]/5 text-[#52E3A4] text-xs font-mono tracking-wider uppercase mb-4">
          <Cpu className="w-3.5 h-3.5" />
          <span>Interactive Diagnostic Engine · 10-Step Root Cause Analysis</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
          Diagnose an Entertainment Breakdown
        </h1>
        <p className="text-base sm:text-lg text-white/70">
          Deconstruct symptoms, expose hidden dependency cascades, and determine the exact class of SYNQ intervention required to stabilize the system.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-10 bg-[#090B14] border border-white/[0.08] rounded-2xl p-4">
        <div className="flex items-center justify-between text-xs font-mono text-white/50 mb-2">
          <span>PROGRESS</span>
          <span className="text-[#52E3A4] font-bold">
            {currentStep === 9 ? 'DIAGNOSIS COMPLETE' : `STEP ${currentStep + 1} OF 10`}
          </span>
        </div>
        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#23B272] to-[#52E3A4] transition-all duration-300"
            style={{ width: `${((currentStep + 1) / 10) * 100}%` }}
          />
        </div>
      </div>

      {/* Diagnostic Steps 1 through 9 */}
      {currentStep < 9 && (
        <div className="bg-[#090B14] border border-white/[0.08] rounded-3xl p-6 sm:p-10 shadow-2xl animate-in fade-in duration-200">
          <div className="mb-8">
            <span className="text-xs font-mono text-[#52E3A4] tracking-widest uppercase">
              {stepMeta.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 mb-2">
              {stepMeta.question}
            </h2>
            <p className="text-sm sm:text-base text-white/60">
              {stepMeta.subtitle}
            </p>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-10">
            {stepMeta.options.map((opt) => {
              const isSelected = stepMeta.multiSelect
                ? ((selections[currentStep] as string[]) || []).includes(opt.id)
                : selections[currentStep] === opt.id;

              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectOption(opt.id)}
                  className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 relative group ${
                    isSelected
                      ? 'bg-[#23B272]/10 border-[#23B272] shadow-[0_0_20px_rgba(35,178,114,0.15)] ring-1 ring-[#23B272]'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className={`text-sm sm:text-base font-bold transition-colors ${
                        isSelected ? 'text-[#52E3A4]' : 'text-white group-hover:text-[#52E3A4]'
                      }`}>
                        {opt.title}
                      </h3>
                      <p className="text-xs text-white/60 mt-1 leading-relaxed">
                        {opt.desc}
                      </p>
                    </div>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                      isSelected
                        ? 'bg-[#23B272] border-[#23B272] text-[#03040A]'
                        : 'border-white/20 group-hover:border-white/40'
                    }`}>
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between border-t border-white/[0.08] pt-6">
            <button
              type="button"
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                currentStep === 0 
                  ? 'opacity-30 cursor-not-allowed text-white/40' 
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={!isStepComplete() || saving}
              className={`inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all ${
                isStepComplete() && !saving
                  ? 'bg-[#23B272] hover:bg-[#52E3A4] text-[#03040A] shadow-lg active:scale-95'
                  : 'bg-white/10 text-white/40 cursor-not-allowed'
              }`}
            >
              <span>{currentStep === 8 ? (saving ? 'Synthesizing...' : 'Generate Diagnosis →') : 'Continue'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 10: Diagnostic Result Dossier */}
      {currentStep === 9 && diagnosticResult && (
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-300">
          {/* Case Identifier Card */}
          <div className="bg-[#090B14] border border-[#23B272]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_40px_rgba(35,178,114,0.1)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#52E3A4] uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Diagnostic Case Dossier Prepared</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Case ID: <span className="font-mono text-[#23B272]">{diagnosticResult.caseId}</span>
                </h2>
                <p className="text-xs text-white/50 mt-1 font-mono">
                  Generated: {new Date(diagnosticResult.createdAt).toLocaleString()} · Stored locally
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyCaseId}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-white transition-all"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-[#52E3A4]" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied Case ID' : 'Copy Case ID'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleRestart}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-xs text-white/60 hover:text-white transition-all"
                  title="Run another diagnosis"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              </div>
            </div>

            {/* Diagnostic Matrix Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#03040A] p-4 rounded-2xl border border-white/[0.06]">
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider">Continuum Location</div>
                <div className="text-sm font-bold text-white mt-1">{diagnosticResult.location}</div>
              </div>
              <div className="bg-[#03040A] p-4 rounded-2xl border border-white/[0.06]">
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider">Risk Score</div>
                <div className="inline-flex items-center gap-1.5 text-sm font-bold text-[#D4F838] mt-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>{diagnosticResult.riskScore} Cascade Risk</span>
                </div>
              </div>
              <div className="bg-[#03040A] p-4 rounded-2xl border border-white/[0.06]">
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider">Model Confidence</div>
                <div className="text-sm font-bold text-[#52E3A4] mt-1">{diagnosticResult.confidence}</div>
              </div>
            </div>

            {/* Breakdown Cascade Visualizer */}
            <div className="bg-[#03040A] rounded-2xl p-5 border border-white/[0.06] mb-6">
              <div className="text-xs font-mono text-[#52E3A4] uppercase tracking-wider mb-4 flex items-center gap-2">
                <GitFork className="w-3.5 h-3.5" />
                <span>CASCADE FAILURE PATHWAY (ROOT-CAUSE DECOMPOSITION)</span>
              </div>
              <div className="space-y-3 font-mono text-xs">
                {diagnosticResult.cascadePath.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/[0.06] flex items-center justify-center text-white/50 text-[10px] font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-white/80">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Intervention Box */}
            <div className="p-6 rounded-2xl bg-[#23B272]/10 border border-[#23B272]/30 mb-8">
              <div className="text-xs font-mono text-[#52E3A4] uppercase tracking-wider mb-1">
                RECOMMENDED SYNQ INTERVENTION
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                {diagnosticResult.recommendedIntervention}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed mb-4">
                <strong>Structural Root:</strong> {diagnosticResult.rootCause}. DIGISYNQ will coordinate the missing capability ({diagnosticResult.missingCapability}) across {diagnosticResult.dependencies.join(', ')} to protect delivery windows.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {diagnosticResult.relevantMechanisms.map(m => (
                  <span key={m} className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-[11px] font-mono text-white/70">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Next Steps Engagement Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
              <div className="text-xs text-white/50">
                Case prepared in browser. Ready for operational triage and confidential coordination.
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  to={`/start?caseId=${diagnosticResult.caseId}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#23B272] hover:bg-[#52E3A4] text-[#03040A] font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md active:scale-95"
                >
                  <span>Initiate This SYNQ With Case ID</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Guidance Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#090B14] p-5 rounded-2xl border border-white/[0.06]">
              <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#52E3A4]" />
                <span>Explore the 23 Master Mechanisms</span>
              </h4>
              <p className="text-xs text-white/60 mb-3">
                Review how DigiSynq mathematically decomposes issues, prioritizes root causes, and simulates recovery before spend.
              </p>
              <Link to="/mechanisms" className="text-xs font-semibold text-[#52E3A4] hover:underline inline-flex items-center gap-1">
                <span>View all 23 Mechanisms</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-[#090B14] p-5 rounded-2xl border border-white/[0.06]">
              <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#D4F838]" />
                <span>DigiSynq Resolution Runbook</span>
              </h4>
              <p className="text-xs text-white/60 mb-3">
                Examine the battle-tested protocols, escalation ladders, and multi-department handoffs used during live interventions.
              </p>
              <Link to="/runbook" className="text-xs font-semibold text-[#D4F838] hover:underline inline-flex items-center gap-1">
                <span>Read the Resolution Runbook</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
