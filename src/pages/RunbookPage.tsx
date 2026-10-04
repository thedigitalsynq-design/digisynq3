import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Activity,
  Layers,
  FileText,
  Clock,
  Compass,
  Zap,
  ShieldAlert,
  ShieldCheck,
  Search,
  Filter,
  Sparkles,
  GitBranch,
  Terminal,
  UserCheck,
  Target
} from 'lucide-react';
import { TopographicBackground } from '../components/TopographicBackground';

export interface RunbookStep {
  stepNumber: string;
  name: string;
  codename: string;
  phase: 'SENSING' | 'ANALYSIS' | 'ORCHESTRATION' | 'ASSURANCE';
  summary: string;
  input: string;
  action: string;
  output: string;
  decision: string;
  owner: string;
  successCondition: string;
  riskIfSkipped: string;
}

export const RUNBOOK_13_STEPS: RunbookStep[] = [
  {
    stepNumber: '01',
    name: 'Observe',
    codename: 'OBSERVE',
    phase: 'SENSING',
    summary: 'Continuous ingestion of raw operational telemetry across production departments, call sheets, dailies ingest, and vendor delivery gates.',
    input: 'Daily production reports (DPRs), call sheets, soundstage gate logs, camera-to-cloud metadata, and vendor milestone tracking.',
    action: 'Harvest and timestamp all operational events into the raw telemetry bus without premature filtering or interpretation.',
    output: 'Normalized Operational Event Stream (NOES) indexed by stage, timestamp, and stakeholder node.',
    decision: 'Is the event stream complete and verified against source logs, or are there blind spots requiring manual inquiry?',
    owner: 'Telemetry Systems Engineer / Lead Production Coordinator',
    successCondition: '100% of planned set reports, turnaround timestamps, and vendor delivery pings accounted for within 4 hours of wrap.',
    riskIfSkipped: 'Invisible slippage goes undetected until downstream cash burn explodes.'
  },
  {
    stepNumber: '02',
    name: 'Detect',
    codename: 'DETECT',
    phase: 'SENSING',
    summary: 'Algorithmic variance detection evaluating Expected State vs. Actual State across schedule, budget, and resource metrics.',
    input: 'Normalized Event Stream + Baseline Project Manifest (Schedule, Approved Budget, Technical Deliverable Specs).',
    action: 'Evaluate variance formula: GAP = Expected State − Actual State across all milestone nodes.',
    output: 'Variance Warning Signals (VWS) tagged with delta magnitude, department tag, and confidence interval.',
    decision: 'Does the detected variance exceed tolerance thresholds (>0.5 days schedule or >$10K unbudgeted cost velocity)?',
    owner: 'Diagnostic Algorithm / Lead Analyst',
    successCondition: 'Variance detected and categorized within 60 minutes of event recording.',
    riskIfSkipped: 'Symptom masking: small delays compound exponentially into multi-million dollar cascade collapses.'
  },
  {
    stepNumber: '03',
    name: 'Decompose',
    codename: 'DECOMPOSE',
    phase: 'ANALYSIS',
    summary: 'Break down detected anomalies into discrete atomic units: symptoms, events, conditions, and dependencies.',
    input: 'Variance Warning Signals + Departmental Contextual Notes.',
    action: 'Dissect the anomaly into constituent parts: Surface Symptom, Triggering Event, Background Condition, Structural Dependency.',
    output: 'Decomposed Problem Matrix isolating human error from systemic and infrastructural bottlenecks.',
    decision: 'Is this an isolated human incident or an emergent failure of interconnected dependencies?',
    owner: 'Senior System Architect / Root-Cause Specialist',
    successCondition: 'Every symptom is linked to at least one verified upstream condition and dependency node.',
    riskIfSkipped: 'False diagnosis: punishing personnel for structural and scheduling impossibilities.'
  },
  {
    stepNumber: '04',
    name: 'Map',
    codename: 'MAP',
    phase: 'ANALYSIS',
    summary: 'Construct the live dependency graph connecting the decomposed problem to all adjacent stakeholders, assets, and milestones.',
    input: 'Decomposed Problem Matrix + Master Stakeholder & Asset Directory.',
    action: 'Trace all directional graph edges: Upstream Precedents, Concurrent Constraints, Downstream Dependents.',
    output: 'Interactive Local Dependency Graph highlighting the immediate blast radius and secondary shockwaves.',
    decision: 'Which critical path milestones are directly or indirectly threatened within the next 14 calendar days?',
    owner: 'Network Topology Engineer',
    successCondition: 'Complete topological graph rendered with 100% of affected vendors and departmental milestones flagged.',
    riskIfSkipped: 'Unmapped downstream collapse: fixing one department accidentally causes catastrophic delays in another.'
  },
  {
    stepNumber: '05',
    name: 'Diagnose',
    codename: 'DIAGNOSE',
    phase: 'ANALYSIS',
    summary: 'Execute recursive Five-Whys and causal tree traversal to isolate the true root cause and missing capabilities.',
    input: 'Local Dependency Graph + Stakeholder Depositions + Historic Case Repository.',
    action: 'Traverse the causal chain from surface friction down to structural deficiency using the 13-Step Tree Pipeline.',
    output: 'Certified Root-Cause Finding (CRCF) defining the exact missing capability, asset, or decision authority.',
    decision: 'Has the foundational root cause been isolated with >85% diagnostic confidence, or is further discovery required?',
    owner: 'Lead Product Architect / Principal Diagnostic Arbiter',
    successCondition: 'Root cause validated by consensus or incontrovertible telemetry evidence.',
    riskIfSkipped: 'Treating symptoms repeatedly without ever eliminating the recurring cause.'
  },
  {
    stepNumber: '06',
    name: 'Classify',
    codename: 'CLASSIFY',
    phase: 'ANALYSIS',
    summary: 'Categorize the root cause across 5 systemic dimensions: Origin, Behavior, Scope, Urgency, and Impact.',
    input: 'Certified Root-Cause Finding + Historical Failure Taxonomy.',
    action: 'Map finding into the 6 Structural Domains and 24 Sub-patterns in the DigiSynq Problem Taxonomy.',
    output: 'Multi-Dimensional Problem Classification Dossier with standardized risk and urgency ratings.',
    decision: 'Does this classification mandate an acute emergency SYNQ, a strategic advisory sprint, or routine telemetry monitoring?',
    owner: 'Taxonomy Governance Lead',
    successCondition: 'Unambiguous categorization matching one of the 24 validated failure archetypes.',
    riskIfSkipped: 'Incorrect operational resource allocation; deploying massive interventions for minor friction.'
  },
  {
    stepNumber: '07',
    name: 'Prioritize',
    codename: 'PRIORITIZE',
    phase: 'ANALYSIS',
    summary: 'Compute algorithmic priority score using the M07 Priority Formula to rank competing interventions.',
    input: 'Classification Dossier + Financial Velocity Model + Release Calendar.',
    action: 'Calculate P = (Urgency × Blast Radius × Cost Velocity) / Time to Delivery Window.',
    output: 'Ranked Priority Index (1–100) determining operational queue and executive attention.',
    decision: 'Is priority score >75, triggering immediate same-day intervention design and executive notification?',
    owner: 'Operations Director',
    successCondition: 'Quantitative priority score established with complete formula transparency.',
    riskIfSkipped: 'Subjective political prioritization: solving the loudest stakeholder problem instead of the most dangerous one.'
  },
  {
    stepNumber: '08',
    name: 'Simulate',
    codename: 'SIMULATE',
    phase: 'ORCHESTRATION',
    summary: 'Run multi-scenario simulations across the 13 Intervention Classes before committing budget or rebooking stages.',
    input: 'Ranked Priority Dossier + Network Capacity Feeds + Scenario Engine Parameters.',
    action: 'Generate Scenarios A (Resequence), B (Replace/Burst), and C (Decouple/Buffer); simulate cost velocity and delivery certainty.',
    output: 'Comparative Scenario Simulation Report with predicted blast radius reduction and cost variance.',
    decision: 'Which intervention scenario maximizes schedule recovery while maintaining creative integrity and budget caps?',
    owner: 'Simulation Engineer / Financial Controller',
    successCondition: 'Simulation models 3 viable counter-strategies with quantified recovery confidence and risk metrics.',
    riskIfSkipped: 'Costly real-world trial and error; locking into an intervention that exacerbates downstream bottlenecks.'
  },
  {
    stepNumber: '09',
    name: 'Connect',
    codename: 'CONNECT',
    phase: 'ORCHESTRATION',
    summary: 'Query the DigiSynq Network to match and bridge the specific missing capabilities, facilities, or talent nodes.',
    input: 'Chosen Simulation Scenario + Required Capability Specification.',
    action: 'Execute algorithmic matching across the Professional Reliability Graph: filter by capability, date availability, and technical spec.',
    output: 'Candidate Match Roster with verified reliability scores, rate cards, and clean-room confidentiality clearance.',
    decision: 'Do matched candidate nodes fulfill all technical dependencies without introducing new schedule conflicts?',
    owner: 'Network Matching Director',
    successCondition: 'At least 2 pre-cleared, verified candidate matches delivered within 12 hours of priority certification.',
    riskIfSkipped: 'Emergency procurement of unvetted vendors resulting in technical mismatches and QC rejections.'
  },
  {
    stepNumber: '10',
    name: 'Coordinate',
    codename: 'COORDINATE',
    phase: 'ORCHESTRATION',
    summary: 'Bind all participating stakeholders into a neutral, synchronized DigiSynq Multi-Party Covenant with clear delivery gates.',
    input: 'Candidate Match Selection + Scenario Milestone Manifest.',
    action: 'Draft and execute the DigiSynq Operational Covenant: milestone gates, fractional floor terms, and shared verification criteria.',
    output: 'Executed Multi-Party Covenant with legally binding milestone gates and transparent fee structure.',
    decision: 'Have all affected department heads, facility operators, and financiers signed off on the revised synchronization timeline?',
    owner: 'Lead Engagement Coordinator / Legal Counsel',
    successCondition: '100% stakeholder consensus and covenant execution prior to commencement of field work.',
    riskIfSkipped: 'Misaligned expectations and finger-pointing when subsequent milestones arrive.'
  },
  {
    stepNumber: '11',
    name: 'Measure',
    codename: 'MEASURE',
    phase: 'ASSURANCE',
    summary: 'Continuous telemetry monitoring during intervention execution to verify milestone adherence and measure actual variance reduction.',
    input: 'Live Daily Telemetry + Executed Covenant Gates.',
    action: 'Track real-time variance vs. predicted recovery curve: audit days reclaimed, cost burn avoided, and deliverable compliance.',
    output: 'Intervention Performance Telemetry Report with verified delta calculations and risk score updates.',
    decision: 'Has the intervention stabilized the schedule within expected tolerances, or is an adjustment sprint required?',
    owner: 'Assurance Lead / Completion Auditor',
    successCondition: 'Confirmed milestone turnover on or ahead of covenant delivery date with zero QC failures.',
    riskIfSkipped: 'Assuming a plan worked without verifying actual deliverable quality and turnaround timestamps.'
  },
  {
    stepNumber: '12',
    name: 'Learn',
    codename: 'LEARN',
    phase: 'ASSURANCE',
    summary: 'Deconstruct the completed intervention, harvest performance metrics, and deposit the case signature into System Memory.',
    input: 'Completed Covenant Dossier + Variance Post-Mortem + Stakeholder Reviews.',
    action: 'Structure case data: root cause archetype, intervention class effectiveness, vendor reliability delta, and financial outcome.',
    output: 'System Memory Ingestion Package (SMIP) archived into the compounding global intelligence database.',
    decision: 'Does this case reveal a novel failure signature that requires an update to the DigiSynq Problem Taxonomy or risk models?',
    owner: 'Machine Learning & Knowledge Systems Lead',
    successCondition: 'Case fully indexed and searchable within 48 hours of covenant closure.',
    riskIfSkipped: 'Amnesia: repeating the exact same expensive operational mistakes on the next production.'
  },
  {
    stepNumber: '13',
    name: 'Prevent',
    codename: 'PREVENT',
    phase: 'ASSURANCE',
    summary: 'Synthesize automated predictive guards and pre-production checks to eliminate similar failure modes across future slates.',
    input: 'System Memory Archive + New Production Pre-Production Manifests.',
    action: 'Deploy automated pre-flight dependency audits on incoming productions matching the historic risk signature.',
    output: 'Pre-Production Risk Inoculation Report with proactive covenant templates and early-warning trigger alarms.',
    decision: 'Are preventative tripwires active in the telemetry bus to halt similar cascade collapses before they begin?',
    owner: 'Chief Product Architect',
    successCondition: 'Zero recurrence of the specific failure archetype across all monitored slates for the subsequent 12 months.',
    riskIfSkipped: 'Remaining perpetually reactive; failing to transform hard-won operational experience into enduring structural immunity.'
  }
];

export function RunbookPage() {
  const [selectedStep, setSelectedStep] = useState<RunbookStep>(RUNBOOK_13_STEPS[0]);
  const [filterPhase, setFilterPhase] = useState<string>('ALL');
  const [search, setSearch] = useState<string>('');

  const filteredSteps = RUNBOOK_13_STEPS.filter((step) => {
    const matchesPhase = filterPhase === 'ALL' || step.phase === filterPhase;
    const q = search.toLowerCase().trim();
    if (!q) return matchesPhase;

    const matchesSearch =
      step.name.toLowerCase().includes(q) ||
      step.summary.toLowerCase().includes(q) ||
      step.action.toLowerCase().includes(q) ||
      step.owner.toLowerCase().includes(q) ||
      step.decision.toLowerCase().includes(q);

    return matchesPhase && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#03040A] text-[#ECEEF5] pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <TopographicBackground className="opacity-15 pointer-events-none -z-10 fixed inset-0" />

      {/* Header */}
      <header className="mb-12 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300 font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span>STANDARD OPERATING PROCEDURE</span>
          <span className="text-zinc-600">//</span>
          <span className="text-white">OPERATIONAL RUNBOOK</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
          The Synchronization Runbook.
          <span className="block text-xl sm:text-2xl lg:text-3xl text-zinc-400 font-normal mt-2">
            The Standard Operating Procedure for System Interventions.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
          A deterministic, repeatable protocol for observing, diagnosing, resolving, and inoculating against operational failure across complex entertainment ecosystems.
        </p>

        {/* Phase Filter & Search Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search steps, actions, decisions, owners..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/10 bg-[#090B14] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/20 transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {['ALL', 'SENSING', 'ANALYSIS', 'ORCHESTRATION', 'ASSURANCE'].map((phase) => (
              <button
                key={phase}
                onClick={() => setFilterPhase(phase)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-colors border ${
                  filterPhase === phase
                    ? 'bg-[#090B14] text-white border-white/20'
                    : 'bg-[#090B14] text-zinc-400 border-white/5 hover:border-white/15 hover:text-white'
                }`}
              >
                {phase}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* 2-Column Runbook Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Step Sequence List */}
        <div className="lg:col-span-4 space-y-2 max-h-[820px] overflow-y-auto pr-2 custom-scrollbar">
          <div className="flex items-center justify-between px-2 py-1 text-xs font-mono text-zinc-500 border-b border-white/5 mb-2">
            <span>SEQUENCE</span>
            <span>PHASE</span>
          </div>

          {filteredSteps.map((step) => {
            const isSelected = step.stepNumber === selectedStep.stepNumber;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setSelectedStep(step)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-white/[0.05] border-white/20 text-white shadow-lg'
                    : 'bg-[#090B14]/80 border-white/[0.06] text-zinc-400 hover:text-white hover:border-white/15'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs font-bold text-white">
                    PROTOCOL
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400">
                    {step.phase}
                  </span>
                </div>
                <div className="font-semibold text-sm text-zinc-200">
                  {step.name}
                </div>
                <div className="text-xs text-zinc-500 line-clamp-1 mt-1 font-light">
                  {step.summary}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Inspector */}
        <article className="lg:col-span-8 p-6 sm:p-10 rounded-2xl border border-white/10 bg-[#090B14] shadow-2xl relative">
          {/* Header */}
          <div className="pb-6 mb-6 border-b border-white/10">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#090B14]/60 border border-white/15 text-white font-mono text-xs font-semibold">
                  RUNBOOK PROTOCOL
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  PHASE: {selectedStep.phase}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                <UserCheck className="w-3.5 h-3.5 text-white" />
                <span>Owner: {selectedStep.owner}</span>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-2">
              {selectedStep.name}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-light">
              {selectedStep.summary}
            </p>
          </div>

          {/* 6 Required SOP Dimensions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* INPUT */}
            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
              <div className="text-[11px] font-mono text-white uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>INPUT</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                {selectedStep.input}
              </p>
            </div>

            {/* ACTION */}
            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
              <div className="text-[11px] font-mono text-white uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                <span>ACTION</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                {selectedStep.action}
              </p>
            </div>

            {/* OUTPUT */}
            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
              <div className="text-[11px] font-mono text-white uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OUTPUT</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                {selectedStep.output}
              </p>
            </div>

            {/* DECISION */}
            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
              <div className="text-[11px] font-mono text-white uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                <span>DECISION GATE</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                {selectedStep.decision}
              </p>
            </div>
          </div>

          {/* SUCCESS CONDITION & RISK IF SKIPPED */}
          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-xl border border-white/15 bg-[#090B14]/15">
              <div className="text-[11px] font-mono text-white uppercase tracking-wider mb-1.5 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>SUCCESS CONDITION</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                {selectedStep.successCondition}
              </p>
            </div>

            <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/[0.06]">
              <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider mb-1.5 font-semibold flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                <span>RISK IF STEP IS SKIPPED</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {selectedStep.riskIfSkipped}
              </p>
            </div>
          </div>

          {/* Footer Actions & Navigation */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                disabled={selectedStep.stepNumber === '01'}
                onClick={() => {
                  const idx = RUNBOOK_13_STEPS.findIndex((s) => s.stepNumber === selectedStep.stepNumber);
                  if (idx > 0) setSelectedStep(RUNBOOK_13_STEPS[idx - 1]);
                }}
                className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 disabled:opacity-40 disabled:pointer-events-none text-xs text-zinc-300 font-mono transition-colors"
              >
                ← Previous Step
              </button>

              <button
                disabled={selectedStep.stepNumber === '13'}
                onClick={() => {
                  const idx = RUNBOOK_13_STEPS.findIndex((s) => s.stepNumber === selectedStep.stepNumber);
                  if (idx < RUNBOOK_13_STEPS.length - 1) setSelectedStep(RUNBOOK_13_STEPS[idx + 1]);
                }}
                className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 disabled:opacity-40 disabled:pointer-events-none text-xs text-zinc-300 font-mono transition-colors"
              >
                Next Step →
              </button>
            </div>

            <Link
              to="/diagnose"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-[#03040A] font-semibold text-xs hover:bg-[#34D399] transition-colors shadow-md"
            >
              <span>Execute Diagnostic Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
