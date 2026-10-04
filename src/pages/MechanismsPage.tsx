import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Cpu,
  Search,
  CheckCircle2,
  Filter,
  Calculator,
  GitBranch,
  Layers,
  Activity,
  ShieldCheck,
  Zap,
  Sliders,
  AlertTriangle,
  Clock,
  Database,
  Terminal,
} from 'lucide-react';
import { MECHANISMS } from '../data/blueprint_data';
import { TopographicBackground } from '../components/TopographicBackground';

interface EnrichedMechanism {
  num: string;
  name: string;
  purpose: string;
  input: string;
  process: string;
  output: string;
  decision: string;
  relatedProblems: string[];
  relatedStakeholders: string[];
  relatedContinuumStage: string;
  nextMechanism: string;
  functionGroup: 'SENSE_MAP' | 'SIMULATE_MATCH' | 'EXECUTE_VERIFY' | 'MEMORY_PREVENTION';
  formulaOrRule: string;
}

const FULL_MECHANISMS_DATA: EnrichedMechanism[] = [
  {
    num: '01',
    name: 'OBSERVE',
    purpose: 'Continuously ingest operational telemetry across the ecosystem without premature panic.',
    input: 'Daily production reports, cast calls, floor turnover times, budget burn curves, dark days.',
    process: 'Filter noise from true variance signals; ingest cross-department milestone statuses.',
    output: 'Normalized telemetry timeline highlighting unhedged delta events.',
    decision: 'Does this operational event create a meaningful downstream delta? (Yes → M02, No → Monitor)',
    relatedProblems: ['Schedule Drift', 'Opaque Call Sheets', 'Dark Floor Waste'],
    relatedStakeholders: ['Producers', 'Technicians', 'Stages'],
    relatedContinuumStage: '04 Production',
    nextMechanism: '02 DETECT',
    functionGroup: 'SENSE_MAP',
    formulaOrRule: 'Separate Events from Problems',
  },
  {
    num: '02',
    name: 'DETECT',
    purpose: 'Quantify exact operational variance between planned and actual state.',
    input: 'Expected milestone schedule vs actual timestamped execution.',
    process: 'Calculate Gap = Expected State - Actual State across 10 gap dimensions.',
    output: 'Quantified variance metric (e.g. "-6 days talent availability window").',
    decision: 'Is gap magnitude critical enough to threaten downstream delivery? (Yes → M03, No → Log)',
    relatedProblems: ['Schedule Rupture', 'Talent Collision', 'Plate Hand-Off Delay'],
    relatedStakeholders: ['Directors', 'Producers', 'Talent'],
    relatedContinuumStage: '03 Pre-Production',
    nextMechanism: '03 DECOMPOSE',
    functionGroup: 'SENSE_MAP',
    formulaOrRule: 'GAP = EXPECTED STATE - ACTUAL STATE',
  },
  {
    num: '03',
    name: 'DECOMPOSE',
    purpose: 'Deconstruct complex surface emergencies into underlying atomic root causes.',
    input: 'Surface symptom (e.g. "Platform QC failure" or "VFX plate delivery delay").',
    process: 'Traverse 5-Why tree down through Events, Conditions, and Dependencies.',
    output: 'Root-cause decomposition breakdown separating symptom from causal failure.',
    decision: 'Have all compounding structural causes been isolated? (Yes → M04, No → Drill down)',
    relatedProblems: ['Post Conform Crunch', 'VFX Plate Delays', 'QC Metadata Rejection'],
    relatedStakeholders: ['Post/VFX', 'Music/Audio', 'Platforms'],
    relatedContinuumStage: '05 Post-Production',
    nextMechanism: '04 MAP',
    functionGroup: 'SENSE_MAP',
    formulaOrRule: 'Symptom → Event → Condition → Dependency → Root Cause',
  },
  {
    num: '04',
    name: 'MAP',
    purpose: 'Construct the living operational graph linking all affected downstream entities.',
    input: 'Identified root causes + project milestone critical path.',
    process: 'Render node-edge graph showing who depends on whom across stages and vendors.',
    output: 'Living dependency graph with full cascade blast radius visualization.',
    decision: 'Are all cross-department dependencies and collateral nodes identified? (Yes → M05)',
    relatedProblems: ['Unseen Cascade Damage', 'Multi-Party Collision', 'Contract Dependency'],
    relatedStakeholders: ['Producers', 'Line Producers', 'Financiers'],
    relatedContinuumStage: '04 Production',
    nextMechanism: '05 DIAGNOSE',
    functionGroup: 'SENSE_MAP',
    formulaOrRule: 'Nodes = Entities; Edges = Dependencies',
  },
  {
    num: '05',
    name: 'DIAGNOSE',
    purpose: 'Determine the systemic why behind the failure rather than accepting surface excuses.',
    input: 'Dependency graph + historical project performance telemetry.',
    process: 'Analyze structural incentives, contract ambiguities, and workflow bottlenecks.',
    output: 'Definitive diagnosis: systemic flaw vs poor execution vs unhedged external shock.',
    decision: 'Is the root cause internal to project workflow or external ecosystem constraint? (Route accordingly)',
    relatedProblems: ['Recurring Production Slips', 'Contract Incompatibility', 'Scope Creep'],
    relatedStakeholders: ['Producers', 'Screenwriters', 'Directors'],
    relatedContinuumStage: '02 Development',
    nextMechanism: '06 CLASSIFY',
    functionGroup: 'SENSE_MAP',
    formulaOrRule: 'Systemic Root Cause Verification',
  },
  {
    num: '06',
    name: 'CLASSIFY',
    purpose: 'Categorize the problem across 5 standardized structural dimensions.',
    input: 'Diagnosed root cause profile.',
    process: 'Score across Origin, Behavior, Scope, Urgency, and Impact matrices.',
    output: 'Standardized 5D classification vector for automated matching and benchmarking.',
    decision: 'Select primary intervention tier: Emergency Triage vs Structural Restructuring.',
    relatedProblems: ['Multi-Department Friction', 'Unclassified Bottlenecks', 'Hidden Cost Leaks'],
    relatedStakeholders: ['All Stakeholders', 'Producers'],
    relatedContinuumStage: '03 Pre-Production',
    nextMechanism: '07 PRIORITIZE',
    functionGroup: 'SENSE_MAP',
    formulaOrRule: 'Origin × Behavior × Scope × Urgency × Impact',
  },
  {
    num: '07',
    name: 'PRIORITIZE',
    purpose: 'Mathematically score and rank competing triage needs by cascade mitigation impact.',
    input: 'Classified problem vector with cost velocity and delivery proximity.',
    process: 'Execute algorithmic priority formula: P = (Impact × Urgency × Dependency) / (Effort × Cost).',
    output: 'Ranked priority score determining resource allocation queue.',
    decision: 'Does problem score warrant activating immediate emergency network burst? (Score > 15 → M08)',
    relatedProblems: ['Conflicting On-Set Requests', 'Overtime Runaway', 'Resource Contention'],
    relatedStakeholders: ['Producers', '1st ADs', 'Distributors'],
    relatedContinuumStage: '04 Production',
    nextMechanism: '08 SIMULATE',
    functionGroup: 'SIMULATE_MATCH',
    formulaOrRule: 'P = (Impact × Urgency × Dependency × Probability) / (Effort × Cost)',
  },
  {
    num: '08',
    name: 'SIMULATE',
    purpose: 'Model downstream cascade impacts virtually before committing production capital.',
    input: 'Ranked intervention options (Resequence vs Burst Capacity vs Substitute Vendor).',
    process: 'Run counterfactual simulation across schedule, budget, cast availability, and release date.',
    output: 'Comparative impact scorecards comparing Options A, B, and C with cost/time deltas.',
    decision: 'Which simulation scenario achieves maximum buffer recovery at minimum friction? (Optimal → M09)',
    relatedProblems: ['Blind Schedule Changes', 'Expensive Guesswork', 'Collateral Department Shock'],
    relatedStakeholders: ['Directors', 'Producers', 'Financiers'],
    relatedContinuumStage: '04 Production',
    nextMechanism: '09 CONNECT',
    functionGroup: 'SIMULATE_MATCH',
    formulaOrRule: 'Comparative Counterfactual Simulation',
  },
  {
    num: '09',
    name: 'CONNECT',
    purpose: 'Identify precisely what capability, vendor, or asset is missing to resolve the bottleneck.',
    input: 'Selected intervention requirement (e.g. "pre-lit soundstage floor for 3 pickup days").',
    process: 'Query ecosystem index for matching dark capacity and certified craft providers.',
    output: 'Target connection specification bridging the identified capability gap.',
    decision: 'Are candidates available within required geographic and union constraints? (Yes → M10)',
    relatedProblems: ['Missing Gear Package', 'Unfilled Crew Roster', 'Unavailable Stage'],
    relatedStakeholders: ['Stages', 'Rental Houses', 'Technicians'],
    relatedContinuumStage: '03 Pre-Production',
    nextMechanism: '10 MATCH',
    functionGroup: 'SIMULATE_MATCH',
    formulaOrRule: 'Gap Requirement → Capability Node Connection',
  },
  {
    num: '10',
    name: 'MATCH',
    purpose: 'Algorithmic multi-factor pairing based on verified technical compatibility and rate parity.',
    input: 'Connection spec + real-time network availability and reliability scores.',
    process: 'Multi-criteria matching evaluating schedule adherence history, format spec, and budget tier.',
    output: 'Verified partner match ready for contractual lock with zero broker inflation.',
    decision: 'Do contractual and technical SLA terms align with production requirements? (Yes → M11)',
    relatedProblems: ['Opaque Broker Markups', 'Unvetted Vendor Risk', 'Dark Floor Inefficiency'],
    relatedStakeholders: ['Post/VFX', 'Stages', 'Technicians', 'Rental Houses'],
    relatedContinuumStage: '04 Production',
    nextMechanism: '11 COORDINATE',
    functionGroup: 'SIMULATE_MATCH',
    formulaOrRule: 'Capability × Availability × Reliability × Rate Parity',
  },
  {
    num: '11',
    name: 'COORDINATE',
    purpose: 'Synchronize interfaces, handoffs, and covenants between departments rather than micromanaging.',
    input: 'Matched partner agreements + updated production milestone schedules.',
    process: 'Establish unified handoff covenants, conform milestones, and explicit acceptance criteria.',
    output: 'Harmonized inter-department interface protocol with single-source accountability.',
    decision: 'Are all department heads aligned on revised handoff times and technical specs? (Yes → M12)',
    relatedProblems: ['Department Handoff Friction', 'Blame Shifting', 'Unsynchronized Deliveries'],
    relatedStakeholders: ['Producers', 'Directors', 'Department Heads'],
    relatedContinuumStage: '04 Production',
    nextMechanism: '12 EXECUTE',
    functionGroup: 'SIMULATE_MATCH',
    formulaOrRule: 'Synchronize Interfaces, Not Every Micro-Task',
  },
  {
    num: '12',
    name: 'EXECUTE',
    purpose: 'Deploy executable, time-bounded sprint with designated owners and clear verification gates.',
    input: 'Harmonized coordination plan + operational sprint budget.',
    process: 'Supervise live deployment with assigned owners, deadlines, and active turnaround checkpoints.',
    output: 'Executed intervention with zero collateral friction on adjacent departments.',
    decision: 'Has the active intervention sprint completed all critical milestones? (Yes → M13)',
    relatedProblems: ['Passive Coordination', 'Unassigned Responsibilities', 'Deadline Slippage'],
    relatedStakeholders: ['Line Producers', '1st ADs', 'Crew'],
    relatedContinuumStage: '04 Production',
    nextMechanism: '13 MONITOR',
    functionGroup: 'EXECUTE_VERIFY',
    formulaOrRule: 'Intervention → Action → Owner → Deadline → Verification',
  },
  {
    num: '13',
    name: 'MONITOR',
    purpose: 'Continuous variance telemetry tracking actual execution against planned remediation path.',
    input: 'Live dailies logs, conform edit checks, soundstage turnover timestamps.',
    process: 'Continuous automated sensing of progress metrics against planned sprint recovery curve.',
    output: 'Real-time variance alerts if remediation execution deviates by > 2 hours.',
    decision: 'Is execution adhering to target buffer recovery? (Adhering → M14, Drifting → Trigger M18 Escalation)',
    relatedProblems: ['Silent Budget Leaks', 'Unreported On-Set Slips', 'Late Rough Cuts'],
    relatedStakeholders: ['Line Producers', 'Post Supervisors'],
    relatedContinuumStage: '04 Production',
    nextMechanism: '14 VERIFY',
    functionGroup: 'EXECUTE_VERIFY',
    formulaOrRule: 'Plan → Action → Actual → Variance → Check',
  },
  {
    num: '14',
    name: 'VERIFY',
    purpose: 'Prove outcome value with rigorous mathematical measurement across time, cost, and QC.',
    input: 'Post-intervention timeline, actual budget burn, and final QC master inspect reports.',
    process: 'Audit actual metrics against counterfactual "do nothing" baseline.',
    output: 'Verified System Value Created report: days recovered, dollars saved, QC 100% compliant.',
    decision: 'Has the outcome met or exceeded the guaranteed intervention value target? (Verified → M15)',
    relatedProblems: ['Vanity Metrics', 'Unverified Claims', 'Uncertain Cost Benefit'],
    relatedStakeholders: ['Financiers', 'Completion Guarantors', 'Producers'],
    relatedContinuumStage: '07 Distribution',
    nextMechanism: '15 LEARN',
    functionGroup: 'EXECUTE_VERIFY',
    formulaOrRule: 'Verified Value Created = Baseline Loss - Actual Loss',
  },
  {
    num: '15',
    name: 'LEARN',
    purpose: 'Extract institutional learnings and deposit resolution patterns into System Memory.',
    input: 'De-identified case anatomy, resolution path, and outcome verification data.',
    process: 'Codify root failure indicators, vendor performance telemetry, and recovery formulas.',
    output: 'Structured case template added to DigiSynq Compounding System Memory.',
    decision: 'Does this resolution reveal a newly recurring industry failure pattern? (Yes → Update M16)',
    relatedProblems: ['Repeated Mistakes', 'Lost Institutional Knowledge', 'Siloed Post-Mortems'],
    relatedStakeholders: ['All Stakeholders', 'DigiSynq Network'],
    relatedContinuumStage: '09 Monetization',
    nextMechanism: '16 PREDICT',
    functionGroup: 'MEMORY_PREVENTION',
    formulaOrRule: 'Problem → Outcome → Pattern → Institutional Memory',
  },
  {
    num: '16',
    name: 'PREDICT',
    purpose: 'Analyze accumulated network telemetry to spot early disaster signatures weeks in advance.',
    input: 'Early pre-production parameters across active network slate slates.',
    process: 'Cross-reference current project variables against historical failure patterns.',
    output: 'Predictive risk warnings highlighting upstream dependency traps before cameras roll.',
    decision: 'Does incoming project parameter match a high-risk failure profile? (Yes → Issue alert to M17)',
    relatedProblems: ['Late Production Surprises', 'Predictable Cascade Traps', 'Unseen Script Complexity'],
    relatedStakeholders: ['Financiers', 'Producers', 'Bond Companies'],
    relatedContinuumStage: '02 Development',
    nextMechanism: '17 PREVENT',
    functionGroup: 'MEMORY_PREVENTION',
    formulaOrRule: 'Pattern Recognition → Early Warning Radar',
  },
  {
    num: '17',
    name: 'PREVENT',
    purpose: 'Deploy automated guardrails to eliminate systemic failures before they ever manifest.',
    input: 'Predictive risk profile and contractual setup.',
    process: 'Inject proactive buffer covenants, certified QC presets, and secondary backup holds.',
    output: 'Permanent system immunity: the crisis is completely avoided before spending capital.',
    decision: 'Is the critical path insulated against external shock? (Yes → Immunity achieved)',
    relatedProblems: ['Avoidable Production Emergencies', 'Insurance Claims', 'Missed Delivery Windows'],
    relatedStakeholders: ['Producers', 'Platforms', 'Distributors'],
    relatedContinuumStage: '03 Pre-Production',
    nextMechanism: '18 ESCALATION',
    functionGroup: 'MEMORY_PREVENTION',
    formulaOrRule: 'Proactive Covenants → Zero Downstream Shock',
  },
  {
    num: '18',
    name: 'ESCALATION',
    purpose: 'Disciplined human-in-the-loop triggers for high-impact legal, creative, and safety decisions.',
    input: 'Telemetry anomaly exceeding automated variance thresholds.',
    process: 'Route critical decision package to executive decision-makers with quantified trade-offs.',
    output: 'Executive human determination logged with full contextual rationale.',
    decision: 'Is decision approved, modified, or rejected by lead stakeholders? (Log to M20 Version Control)',
    relatedProblems: ['Unchecked Algorithmic Overreach', 'Unapproved Budget Shifts', 'Safety Breaches'],
    relatedStakeholders: ['Executive Producers', 'Directors', 'Legal Counsel'],
    relatedContinuumStage: '04 Production',
    nextMechanism: '19 GOVERNANCE',
    functionGroup: 'EXECUTE_VERIFY',
    formulaOrRule: 'Automated Sensing → Mandatory Human Review',
  },
  {
    num: '19',
    name: 'GOVERNANCE',
    purpose: 'Role-based contextual visibility ensuring transparency without compromising confidentiality.',
    input: 'Multi-party operational telemetry and contractual records.',
    process: 'Partition system graph by role: Producers see slate budgets; Vendors see assigned deliverables.',
    output: 'Secure, permissioned interfaces eliminating leaks while maintaining full synchronization.',
    decision: 'Does stakeholder role have cryptographically signed clearance for this data tier? (Enforce)',
    relatedProblems: ['Script Leaks', 'Budget Secrecy Concerns', 'Opaque Information Silos'],
    relatedStakeholders: ['Producers', 'Studios', 'Platforms'],
    relatedContinuumStage: '02 Development',
    nextMechanism: '20 VERSION CONTROL',
    functionGroup: 'EXECUTE_VERIFY',
    formulaOrRule: 'Strict Role-Based Contextual Transparency',
  },
  {
    num: '20',
    name: 'VERSION CONTROL',
    purpose: 'Immutable auditability of all operational, schedule, and contract amendments.',
    input: 'Call sheet changes, conform revisions, budget line shifts, and delivery waivers.',
    process: 'Record who changed what, when, why, what nodes were affected, and outcome delta.',
    output: 'Cryptographically timestamped operational ledger eliminating finger-pointing.',
    decision: 'Is every operational change linked to an authorized decision-maker? (Yes → Audit valid)',
    relatedProblems: ['Post-Production Finger Pointing', 'Disputed Overtime Invoices', 'Unapproved Cut Changes'],
    relatedStakeholders: ['Line Producers', 'Post Supervisors', 'Completion Bonds'],
    relatedContinuumStage: '05 Post-Production',
    nextMechanism: '21 RESILIENCE',
    functionGroup: 'EXECUTE_VERIFY',
    formulaOrRule: 'Schedule v1 → v2 → v3: Who, What, Why, Impact',
  },
  {
    num: '21',
    name: 'RESILIENCE',
    purpose: 'Automate secondary and tertiary backup routing for all single-point dependencies.',
    input: 'Critical-path node registry (sole camera package, primary soundstage, lead colorist).',
    process: 'Establish standing secondary fallback options with guaranteed standby activation SLAs.',
    output: 'Shock-proof dependency architecture: primary node failure automatically shifts to Backup B.',
    decision: 'Has primary node failed or slipped by > 4 hours? (Activate pre-vetted resilience route)',
    relatedProblems: ['Single-Point Failures', 'Hardware Breakdowns', 'Location Evictions'],
    relatedStakeholders: ['Rental Houses', 'Stages', 'Technicians'],
    relatedContinuumStage: '04 Production',
    nextMechanism: '22 CAPACITY ENGINE',
    functionGroup: 'EXECUTE_VERIFY',
    formulaOrRule: 'Primary Dependency ──► Pre-Vetted Backup A / B / C',
  },
  {
    num: '22',
    name: 'CAPACITY ENGINE',
    purpose: 'Real-time supply and demand orchestration across dark soundstages and idle craft weeks.',
    input: 'Unbooked partner floor calendars, unallocated edit suites, guild open availability.',
    process: 'Continuously match incoming industry production demand into verified idle capacity.',
    output: 'High-occupancy liquidity: facilities earn incremental yield; productions save 15-25% on floor rates.',
    decision: 'Is facility dark period compatible with incoming production prep window? (Lock slot)',
    relatedProblems: ['Dark Soundstage Floors', 'Unbooked Technician Lulls', 'Asset Depreciation'],
    relatedStakeholders: ['Stages', 'Rental Houses', 'Post Facilities'],
    relatedContinuumStage: '04 Production',
    nextMechanism: '23 VALUE ENGINE',
    functionGroup: 'SIMULATE_MATCH',
    formulaOrRule: 'Idle Capacity + Verified Demand = Non-Dilutive Yield',
  },
  {
    num: '23',
    name: 'VALUE ENGINE',
    purpose: 'The definitive commercial proof and accounting of synchronized ecosystem value.',
    input: 'Consolidated outcome ledgers, recovered schedule days, avoided penalties, and box office yield.',
    process: 'Aggregate and benchmark verified value created against historical industry benchmarks.',
    output: 'Audited North Star Value statement for slates, financiers, and enterprise studio partners.',
    decision: 'Has engagement achieved positive ROI multiplier? (Log to Compounding Advantage flywheel)',
    relatedProblems: ['Unquantified Consulting Fees', 'Unmeasured Workflow ROI', 'Speculative Spending'],
    relatedStakeholders: ['Producers', 'Financiers', 'Streaming Platforms'],
    relatedContinuumStage: '09 Monetization',
    nextMechanism: '01 OBSERVE (Cycle Continuous Loop)',
    functionGroup: 'MEMORY_PREVENTION',
    formulaOrRule: 'Verified Value Created = Days Recovered + Capital Saved + Risk Removed',
  },
];

export function MechanismsPage() {
  const [selectedNum, setSelectedNum] = useState<string>('01');
  const [searchQuery, setSearchQuery] = useState('');
  const [stageFilter, setStageFilter] = useState('ALL');
  const [stakeholderFilter, setStakeholderFilter] = useState('ALL');
  const [functionFilter, setFunctionFilter] = useState('ALL');

  // Calculator State
  const [urgency, setUrgency] = useState(8);
  const [blastRadius, setBlastRadius] = useState(7);
  const [costVelocity, setCostVelocity] = useState(9);
  const [timeToWindow, setTimeToWindow] = useState(4);

  const priorityScore = ((urgency * blastRadius * costVelocity) / Math.max(timeToWindow, 1)).toFixed(1);

  // Filter mechanisms
  const filteredList = useMemo(() => {
    return FULL_MECHANISMS_DATA.filter((m) => {
      const matchSearch =
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.num.includes(searchQuery);

      const matchStage = stageFilter === 'ALL' || m.relatedContinuumStage.includes(stageFilter);
      const matchStakeholder = stakeholderFilter === 'ALL' || m.relatedStakeholders.some((s) => s.includes(stakeholderFilter));
      const matchFunction = functionFilter === 'ALL' || m.functionGroup === functionFilter;

      return matchSearch && matchStage && matchStakeholder && matchFunction;
    });
  }, [searchQuery, stageFilter, stakeholderFilter, functionFilter]);

  const activeMech = FULL_MECHANISMS_DATA.find((m) => m.num === selectedNum) || FULL_MECHANISMS_DATA[0];
  const activeIdx = FULL_MECHANISMS_DATA.findIndex((m) => m.num === activeMech.num);

  const handlePrev = () => {
    const prevIdx = activeIdx > 0 ? activeIdx - 1 : FULL_MECHANISMS_DATA.length - 1;
    setSelectedNum(FULL_MECHANISMS_DATA[prevIdx].num);
  };

  const handleNext = () => {
    const nextIdx = activeIdx < FULL_MECHANISMS_DATA.length - 1 ? activeIdx + 1 : 0;
    setSelectedNum(FULL_MECHANISMS_DATA[nextIdx].num);
  };

  return (
    <main className="bg-[#03040A] text-[#ECEEF5] selection:bg-[#23B272] selection:text-[#03040A] min-h-screen pt-36 pb-24 px-6 sm:px-8 max-w-6xl mx-auto relative overflow-hidden">
      <TopographicBackground className="opacity-20 pointer-events-none -z-10 fixed inset-0" />

      {/* ── System Header & OS Status ── */}
      <div className="max-w-4xl mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#52E3A4] animate-pulse" />
            <span className="text-[#52E3A4] font-semibold">DIGISYNQ OS v3.2</span>
            <span className="text-zinc-600">//</span>
            <span className="text-zinc-400">23 OPERATIONAL CONTROL MECHANISMS</span>
          </div>
          <span className="text-xs font-mono text-zinc-500 hidden sm:inline">STATE: ALL SYSTEMS SYNCHRONIZED</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.03] mb-4">
          The 23 Master Mechanisms.
          <span className="text-zinc-400 font-light block text-2xl sm:text-4xl mt-2">
            The Algorithmic Engine of Systemic Order.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-zinc-300 leading-relaxed font-light max-w-3xl mb-8">
          The codified operational mechanics that turn acute production friction into deterministic, verified resolutions. Search, filter by stakeholder or stage, and simulate intervention priorities.
        </p>

        {/* ── Command Controls (Search + Filters) ── */}
        <div className="p-4 rounded-2xl border border-white/[0.08] bg-[#090B14] space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search mechanisms by name, number, or keyword..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/10 bg-black/50 text-white placeholder-zinc-500 text-xs font-mono focus:border-[#52E3A4] focus:outline-none"
              />
            </div>

            {/* Function Filter */}
            <select
              value={functionFilter}
              onChange={(e) => setFunctionFilter(e.target.value)}
              className="px-3 py-2 rounded-xl border border-white/10 bg-black/50 text-xs font-mono text-zinc-300 focus:outline-none"
            >
              <option value="ALL">All Functions (4)</option>
              <option value="SENSE_MAP">Sense &amp; Map (M01-M06)</option>
              <option value="SIMULATE_MATCH">Simulate &amp; Match (M07-M11)</option>
              <option value="EXECUTE_VERIFY">Execute &amp; Verify (M12-M14, M18-M21)</option>
              <option value="MEMORY_PREVENTION">Memory &amp; Prevention (M15-M17, M22-M23)</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/[0.06] text-xs font-mono text-zinc-400">
            <span className="text-zinc-500">Quick Filters:</span>
            {['Production', 'Post-Production', 'Producers', 'Talent', 'Stages'].map((flt) => (
              <button
                key={flt}
                onClick={() => {
                  if (flt === 'Production' || flt === 'Post-Production') setStageFilter(flt);
                  else setStakeholderFilter(flt);
                }}
                className="px-2 py-1 rounded bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 border border-white/[0.06]"
              >
                {flt}
              </button>
            ))}
            {(stageFilter !== 'ALL' || stakeholderFilter !== 'ALL' || functionFilter !== 'ALL' || searchQuery) && (
              <button
                onClick={() => {
                  setStageFilter('ALL');
                  setStakeholderFilter('ALL');
                  setFunctionFilter('ALL');
                  setSearchQuery('');
                }}
                className="text-[#52E3A4] hover:underline ml-auto"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Visual Mechanism Sequential Ribbon (M01-M23) ── */}
      <div className="mb-10 overflow-x-auto pb-2">
        <div className="flex gap-2 min-w-max">
          {FULL_MECHANISMS_DATA.map((mech) => {
            const isSelected = mech.num === activeMech.num;
            return (
              <button
                key={mech.num}
                onClick={() => setSelectedNum(mech.num)}
                className={`p-3 rounded-xl border text-center transition-all min-w-[76px] cursor-pointer ${
                  isSelected
                    ? 'bg-[#23B272] text-[#03040A] border-[#52E3A4] font-bold shadow-lg scale-105'
                    : 'bg-[#090B14] border-white/[0.06] text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                <div className="text-[10px] font-mono opacity-75">M{mech.num}</div>
                <div className="text-xs font-mono font-bold truncate mt-1">{mech.name}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Active Mechanism OS Console Inspector ── */}
      <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.1] bg-gradient-to-br from-[#06130E] via-[#090B14] to-[#04060C] shadow-2xl relative overflow-hidden mb-14">
        {/* Console Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/[0.08]">
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 rounded-2xl bg-[#23B272]/20 border border-[#23B272]/40 flex items-center justify-center font-mono font-bold text-lg text-[#52E3A4]">
              {activeMech.num}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#52E3A4] font-semibold">{activeMech.functionGroup}</span>
                <span className="text-zinc-600">//</span>
                <span className="font-mono text-xs text-zinc-400">{activeMech.formulaOrRule}</span>
              </div>
              <h2 className="text-3xl font-black text-white mt-0.5">{activeMech.name}</h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-all"
              title="Previous Mechanism"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs text-zinc-500 px-2">{activeMech.num} / 23</span>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-all"
              title="Next Mechanism"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Purpose Banner */}
        <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06] mb-8">
          <span className="text-[11px] font-mono text-[#52E3A4] uppercase tracking-wider block mb-1">
            MECHANISM PURPOSE
          </span>
          <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-light">
            {activeMech.purpose}
          </p>
        </div>

        {/* 4-Box Operational Pipeline: Input, Process, Output, Decision */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[#090B14] border border-white/[0.06]">
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>INPUT ARTIFACT</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-mono">{activeMech.input}</p>
          </div>

          <div className="p-4 rounded-xl bg-[#090B14] border border-white/[0.06]">
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#52E3A4]" />
              <span>SYSTEM PROCESS</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-mono">{activeMech.process}</p>
          </div>

          <div className="p-4 rounded-xl bg-[#090B14] border border-white/[0.06]">
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>VERIFIED OUTPUT</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-mono">{activeMech.output}</p>
          </div>

          <div className="p-4 rounded-xl bg-[#16543D]/25 border border-[#23B272]/30">
            <div className="text-[10px] font-mono text-[#52E3A4] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#52E3A4]" />
              <span>DECISION CRITERIA</span>
            </div>
            <p className="text-xs text-emerald-100 leading-relaxed font-mono">{activeMech.decision}</p>
          </div>
        </div>

        {/* Relationship Matrix: Problems, Stakeholders, Stage, Next */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-2xl bg-black/40 border border-white/[0.06] mb-8 text-xs font-mono">
          <div>
            <span className="text-zinc-500 uppercase block mb-1.5 text-[10px]">RELATED PROBLEMS</span>
            <div className="space-y-1 text-zinc-300">
              {activeMech.relatedProblems.map((prob, i) => (
                <div key={i} className="truncate">• {prob}</div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-zinc-500 uppercase block mb-1.5 text-[10px]">RELATED STAKEHOLDERS</span>
            <div className="flex flex-wrap gap-1">
              {activeMech.relatedStakeholders.map((stk, i) => (
                <Link
                  key={i}
                  to="/stakeholders"
                  className="px-2 py-0.5 rounded bg-white/[0.04] text-[#52E3A4] hover:underline"
                >
                  {stk}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <span className="text-zinc-500 uppercase block mb-1.5 text-[10px]">CONTINUUM STAGE</span>
            <Link
              to="/continuum"
              className="text-white hover:text-[#52E3A4] underline truncate block mt-1"
            >
              {activeMech.relatedContinuumStage} →
            </Link>
          </div>

          <div>
            <span className="text-zinc-500 uppercase block mb-1.5 text-[10px]">SEQUENTIAL HANDOFF</span>
            <div className="text-[#52E3A4] font-bold truncate mt-1">
              → Next: {activeMech.nextMechanism}
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-zinc-500">
            Mechanism {activeMech.num} of 23 // Operational OS Component
          </span>
          <div className="flex items-center gap-3">
            <Link
              to="/diagnose"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#23B272] text-[#03040A] hover:bg-[#52E3A4] font-bold text-xs tracking-wide transition-all shadow-md"
            >
              <span>Diagnose Issue with M{activeMech.num}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/start"
              className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.03] text-zinc-300 text-xs font-mono transition-all"
            >
              <span>Start SYNQ Case</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          M07 PRIORITY FORMULA CALCULATOR CONSOLE
         ══════════════════════════════════════════════════════ */}
      <section className="p-8 sm:p-10 rounded-3xl border border-[#23B272]/30 bg-gradient-to-br from-[#06130E] via-[#090B14] to-[#04060C] shadow-2xl relative overflow-hidden">
        <div className="max-w-2xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#23B272]/20 border border-[#23B272]/40 text-[#52E3A4] font-mono text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>M07 ALGORITHMIC PRIORITY CALCULATOR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Calculate Systemic Intervention Priority.
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm font-mono">
            P = (Urgency × Blast Radius × Cost Velocity) ÷ Time to Delivery Window
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sliders (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
            <div>
              <div className="flex justify-between text-zinc-400 mb-1">
                <span>Urgency (1-10):</span>
                <span className="text-[#52E3A4] font-bold">{urgency}</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={urgency}
                onChange={(e) => setUrgency(Number(e.target.value))}
                className="w-full accent-[#23B272]"
              />
            </div>

            <div>
              <div className="flex justify-between text-zinc-400 mb-1">
                <span>Blast Radius (1-10):</span>
                <span className="text-[#52E3A4] font-bold">{blastRadius}</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={blastRadius}
                onChange={(e) => setBlastRadius(Number(e.target.value))}
                className="w-full accent-[#23B272]"
              />
            </div>

            <div>
              <div className="flex justify-between text-zinc-400 mb-1">
                <span>Cost Velocity (1-10):</span>
                <span className="text-[#52E3A4] font-bold">{costVelocity}</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={costVelocity}
                onChange={(e) => setCostVelocity(Number(e.target.value))}
                className="w-full accent-[#23B272]"
              />
            </div>

            <div>
              <div className="flex justify-between text-zinc-400 mb-1">
                <span>Days to Delivery Window:</span>
                <span className="text-amber-400 font-bold">{timeToWindow} days</span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={timeToWindow}
                onChange={(e) => setTimeToWindow(Number(e.target.value))}
                className="w-full accent-amber-400"
              />
            </div>
          </div>

          {/* Result Card (4 cols) */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-black/60 border border-white/[0.1] text-center">
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block mb-2">
              CALCULATED PRIORITY SCORE
            </span>
            <div className="text-4xl sm:text-5xl font-black text-[#52E3A4] font-mono mb-2">
              {priorityScore}
            </div>
            <div className="text-xs font-mono text-zinc-400 mb-4">
              {Number(priorityScore) > 100
                ? 'CRITICAL EMERGENCY: Immediate Burst SYNQ Required'
                : Number(priorityScore) > 40
                ? 'HIGH CONCERN: Resequence Critical Path'
                : 'STABLE: Monitor Normal Telemetry'}
            </div>
            <Link
              to="/diagnose"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#52E3A4] hover:underline"
            >
              <span>Transfer to Diagnostic Engine →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
