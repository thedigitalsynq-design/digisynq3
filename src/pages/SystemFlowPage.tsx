import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Activity,
  CheckCircle2,
  GitBranch,
  RotateCcw,
  Sparkles,
  Layers,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Info,
  ShieldAlert,
  ShieldCheck,
  Compass,
  Cpu,
  FileText,
  Clock,
  ExternalLink,
  ChevronRight,
  Download,
  Share2,
  Check
} from 'lucide-react';
import { TopographicBackground } from '../components/TopographicBackground';

export type FlowPathMode = 'ALL' | 'EMERGENCY' | 'CAPACITY' | 'PREDICTION';

export interface FlowNodeDetail {
  id: string;
  type: 'terminal' | 'decision' | 'process' | 'branch_outcome';
  title: string;
  badge: string;
  summary: string;
  stage: 'SENSING' | 'ANALYSIS' | 'ORCHESTRATION' | 'ASSURANCE';
  mechanisms: string[];
  inputs: string;
  actions: string[];
  decisions?: string;
  outputs: string;
  owner: string;
  riskIfBypassed: string;
  linkToRoute?: { label: string; path: string };
}

const FLOW_NODES: Record<string, FlowNodeDetail> = {
  'start-node': {
    id: 'start-node',
    type: 'terminal',
    title: 'Project Inception or Operational Rupture',
    badge: 'ENTRY GATEWAY',
    summary: 'The initial trigger for DigiSynq system engagement: either an active production crisis on set, an unbooked facility window, or a new slate pre-production manifest.',
    stage: 'SENSING',
    mechanisms: ['M01: Observe'],
    inputs: 'Production call sheets, daily progress reports (DPRs), facility schedules, or script breakdowns.',
    actions: [
      'Ingest operational telemetry across set, facility, and post departments',
      'Assign cryptographic tracking session and timestamp',
      'Establish clean-room confidentiality boundaries'
    ],
    outputs: 'Raw Operational Event Stream',
    owner: 'Line Producer / Facility Operator / DigiSynq Triage Desk',
    riskIfBypassed: 'Unregistered slippage remains invisible until financial burn explodes.',
    linkToRoute: { label: 'Start Intake Terminal', path: '/start' }
  },
  'dec-variance': {
    id: 'dec-variance',
    type: 'decision',
    title: 'Variance Detected? (GAP > 0)',
    badge: 'TELEMETRY GATE',
    summary: 'Algorithmic formula evaluation: GAP = Expected Baseline State − Actual Observed State. Checks whether schedule delay or unbudgeted cash burn exceeds tolerance thresholds.',
    stage: 'SENSING',
    mechanisms: ['M02: Detect'],
    inputs: 'Expected project milestones vs. actual camera wrap times, floor dates, and deliverable handoffs.',
    actions: [
      'Evaluate schedule variance (delta > 0.5 shooting days)',
      'Evaluate financial burn velocity (delta > $10,000/day)',
      'Classify anomaly as benign variance vs. systemic threat'
    ],
    decisions: 'Does the delta breach critical operating tolerances, requiring immediate diagnostic routing?',
    outputs: 'Variance Warning Signal (VWS)',
    owner: 'Automated Telemetry Engine / Production Supervisor',
    riskIfBypassed: 'Small local delays cascade into millions in downstream overtime and release conflicts.',
    linkToRoute: { label: 'Explore 23 Mechanisms', path: '/mechanisms' }
  },
  'process-observe': {
    id: 'process-observe',
    type: 'process',
    title: 'Decompose & Map Dependencies',
    badge: 'SYSTEM GRAPHING',
    summary: 'Dissects the rupture into atomic components (symptoms, events, conditions, dependencies) and plots the living topological graph of adjacent entities.',
    stage: 'ANALYSIS',
    mechanisms: ['M03: Decompose', 'M04: Map'],
    inputs: 'Variance warning signals, departmental logs, vendor contracts.',
    actions: [
      'Separate human frustration symptoms from structural root conditions',
      'Map upstream supply constraints and downstream dependent stages',
      'Compute immediate blast radius across affected vendors'
    ],
    outputs: 'Local Dependency Graph & Decomposed Problem Matrix',
    owner: 'Network Topology Architect',
    riskIfBypassed: 'Treating isolated symptoms causes accidental collapse in adjacent departments.',
    linkToRoute: { label: 'View Ecosystem Graph', path: '/ecosystem' }
  },
  'dec-triage': {
    id: 'dec-triage',
    type: 'decision',
    title: 'Triage Classification Path?',
    badge: 'ROUTING DIAMOND',
    summary: 'Multi-path branching protocol directing the project to the optimal intervention architecture based on urgency, cost velocity, and asset constraints.',
    stage: 'ANALYSIS',
    mechanisms: ['M06: Classify', 'M07: Prioritize'],
    inputs: 'Project classification matrix and urgency score (M07 Algorithmic Priority Calculator).',
    actions: [
      'Route 1: Emergency Set Freeze (<24h turnaround, high daily burn rate)',
      'Route 2: Capacity Liquidity Gap (Dark soundstage floors, idle guild craft)',
      'Route 3: Pre-Flight Inoculation (Script alterations, release clustering)'
    ],
    decisions: 'Which specialized operational resolution track provides maximum stabilization velocity?',
    outputs: 'Certified Triage Priority Dossier',
    owner: 'Chief Diagnostic Arbiter',
    riskIfBypassed: 'Deploying heavy enterprise consulting for acute set emergencies, or ad-hoc firefighting for structural capacity deficits.',
    linkToRoute: { label: 'Open Problem Taxonomy', path: '/engines/problem-taxonomy' }
  },
  'branch-acute': {
    id: 'branch-acute',
    type: 'branch_outcome',
    title: 'Track A: Acute Set Rupture (Emergency)',
    badge: 'PRIORITY: CRITICAL',
    summary: 'High-velocity 24-48 hour intervention targeting frozen filming units, sudden vendor insolvency, or primary location permit loss.',
    stage: 'ORCHESTRATION',
    mechanisms: ['M07: Prioritize', 'M18: Escalation'],
    inputs: 'Frozen unit call sheets, idle crew burn rate ($35k–$85k/day), completion guarantor timeline.',
    actions: [
      'Deploy Rapid Triage SYNQ protocol within 60 minutes',
      'Enact temporary schedule buffer expansion to halt cash burn',
      'Resequence shooting blocks to maintain camera rolling on secondary coverage'
    ],
    outputs: 'Immediate 48-Hour Set Stabilization Plan',
    owner: 'Senior Engagement Coordinator',
    riskIfBypassed: 'Complete production shutdown and completion bond foreclosure.',
    linkToRoute: { label: 'Start Acute SYNQ', path: '/start' }
  },
  'branch-capacity': {
    id: 'branch-capacity',
    type: 'branch_outcome',
    title: 'Track B: Capacity & Floor Matching',
    badge: 'LIQUIDITY ENGINE',
    summary: 'Unlocks underutilized regional infrastructure: matches productions to soundstage dark turnaround dates and verified guild department heads.',
    stage: 'ORCHESTRATION',
    mechanisms: ['M10: Match', 'M22: Capacity Engine'],
    inputs: 'Partner soundstage dark calendars, LED volume turnaround windows, verified guild rosters.',
    actions: [
      'Query regional stage network for unbooked floor liquidity',
      'Index verified craftspeople via Professional Reliability Graph',
      'Structure fractional burst-occupancy agreements with zero broker markups'
    ],
    outputs: 'Matched Capacity Roster & Fractional Access Terms',
    owner: 'Network Capacity Director',
    riskIfBypassed: 'Overpaying 20% broker tolls or forcing productions into substandard warehouse facilities.',
    linkToRoute: { label: 'Capacity Matcher Engine', path: '/engines' }
  },
  'branch-cascade': {
    id: 'branch-cascade',
    type: 'branch_outcome',
    title: 'Track C: Cascade & Release Pre-emption',
    badge: 'PREDICTIVE SHIELD',
    summary: 'Models downstream schedule shockwaves (editorial turnover compression, VFX overtime surge, DCP delivery delays, theatrical holdovers).',
    stage: 'ORCHESTRATION',
    mechanisms: ['M08: Simulate', 'M16: Predict'],
    inputs: 'Editorial turnover dates, VFX shot counts, theatrical circuit calendars, platform delivery specs.',
    actions: [
      'Simulate 5-stage cascade shockwave (Stage Delay → Post Crunch → Release Jeopardy)',
      'Decouple editorial conforms to allow parallel VFX/Color passes',
      'Stagger regional exhibition windows to maximize per-screen attendance holdover'
    ],
    outputs: 'Cascade Simulation Report & Decoupled Workflow Spec',
    owner: 'Simulation Systems Engineer',
    riskIfBypassed: 'Missed theatrical delivery windows or disastrous QC rejections by streaming platforms.',
    linkToRoute: { label: 'Run Cascade Simulator', path: '/engines/cascade' }
  },
  'dec-rootcause': {
    id: 'dec-rootcause',
    type: 'decision',
    title: 'Root Cause Isolated? (5 Whys)',
    badge: 'DIAGNOSTIC GATE',
    summary: 'Recursive diagnostic tree traversal: verifies whether the true systemic deficit has been exposed, or if the team is still addressing superficial symptoms.',
    stage: 'ANALYSIS',
    mechanisms: ['M05: Diagnose'],
    inputs: 'Local dependency graph, stakeholder depositions, historic variance logs.',
    actions: [
      'Apply 5-Whys causal tree progression to drill past interpersonal conflict',
      'Pinpoint missing capability, decision authority, or contractual flaw',
      'If root cause not yet proven: loop back to 13-Step Tree Pipeline'
    ],
    decisions: 'Is diagnostic confidence >85% with verified root cause, or is further discovery required?',
    outputs: 'Certified Root-Cause Finding (CRCF)',
    owner: 'Principal Diagnostic Arbiter',
    riskIfBypassed: 'Repeatedly applying temporary bandages to recurring systemic defects.',
    linkToRoute: { label: 'Run 11-Step Diagnostic', path: '/diagnose' }
  },
  'process-covenant': {
    id: 'process-covenant',
    type: 'process',
    title: 'Multi-Party Covenant Structuring',
    badge: 'BINDING COVENANT',
    summary: 'Translates diagnostic conclusions into a neutral, synchronized multi-party operational agreement with legally enforceable milestone gates.',
    stage: 'ORCHESTRATION',
    mechanisms: ['M11: Coordinate', 'M12: Execute', 'M19: Governance'],
    inputs: 'Root-cause findings, matched capacity candidates, revised timeline milestones.',
    actions: [
      'Draft standardized DigiSynq Operational Covenant',
      'Bind Producer, Director, Facility Operator, Guild Dept Heads, and Financier',
      'Establish clean-room verification triggers for milestone capital tranches',
      'Deploy real-time progress telemetry dashboard'
    ],
    outputs: 'Executed Multi-Party Synchronization Covenant',
    owner: 'Lead Engagement Coordinator / Legal Arbiter',
    riskIfBypassed: 'Conflicting assumptions, unaligned vendor schedules, and mutual finger-pointing.',
    linkToRoute: { label: 'Review Runbook SOP', path: '/runbook' }
  },
  'dec-outcome': {
    id: 'dec-outcome',
    type: 'decision',
    title: 'Milestone Adherence & Quality Verified?',
    badge: 'VERIFICATION GATE',
    summary: 'Rigorous audit gate verifying deliverable conformance, schedule recovery velocity, and budget variance reduction before closing the covenant.',
    stage: 'ASSURANCE',
    mechanisms: ['M13: Monitor', 'M14: Verify'],
    inputs: 'Dailies ingest timestamps, conform turnover checksums, facility gate logs, cost accounting audits.',
    actions: [
      'Audit physical deliverables against technical master specs',
      'Calculate actual schedule days reclaimed and financial burn averted',
      'If milestone missed: trigger automated escalation protocol (M18)'
    ],
    decisions: 'Has the intervention achieved verified stabilization, or is an escalation sprint required?',
    outputs: 'Intervention Performance Telemetry Audit',
    owner: 'Assurance Lead / Completion Auditor',
    riskIfBypassed: 'Assuming an intervention succeeded without validating actual deliverable integrity.',
    linkToRoute: { label: 'Inspect Field Notes', path: '/insights' }
  },
  'process-memory': {
    id: 'process-memory',
    type: 'process',
    title: 'Deposit Case into System Memory',
    badge: 'COMPOUNDING LEARNING',
    summary: 'The compounding flywheel: deconstructs the completed intervention and archives the causal graph and covenant metrics into permanent global memory.',
    stage: 'ASSURANCE',
    mechanisms: ['M15: Learn', 'M17: Prevent', 'M23: Value Engine'],
    inputs: 'Closed covenant dossier, variance post-mortem, verified ROI data.',
    actions: [
      'Deposit structured causal signature into DigiSynq System Memory',
      'Update algorithmic weights in predictive cascade models',
      'Inoculate future slates against recurring failure patterns'
    ],
    outputs: 'System Memory Archive Record & Pre-Production Safeguards',
    owner: 'Machine Learning & Knowledge Systems Lead',
    riskIfBypassed: 'Systemic amnesia: repeating the same expensive operational errors on the next project.',
    linkToRoute: { label: 'The Master Codex', path: '/blueprint' }
  },
  'end-node': {
    id: 'end-node',
    type: 'terminal',
    title: 'System Restored & Inoculated Against Recurrence',
    badge: 'STABILIZED STATE',
    summary: 'The terminal outcome of the DigiSynq system: the production pipeline is stabilized, deliverable gates are secured, and future projects are protected.',
    stage: 'ASSURANCE',
    mechanisms: ['M17: Prevent', 'M23: Value Engine'],
    inputs: 'Verified project delivery, audit sign-off, archived case signature.',
    actions: [
      'Release final completion milestones',
      'Generate Verified Value Report (Days saved, cost burn avoided)',
      'Activate automated predictive alarms on upcoming partner productions'
    ],
    outputs: 'Permanent Operational Resilience',
    owner: 'All Project Stakeholders / DigiSynq Platform',
    riskIfBypassed: 'None (Target state achieved).',
    linkToRoute: { label: 'Diagnose Next Project', path: '/diagnose' }
  }
};

export function SystemFlowPage() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('start-node');
  const [activePathMode, setActivePathMode] = useState<FlowPathMode>('ALL');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [copiedLink, setCopiedLink] = useState(false);

  const selectedNode = FLOW_NODES[selectedNodeId] || FLOW_NODES['start-node'];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  // Determine if a node is active in the selected path
  const isNodeHighlighted = (nodeId: string): boolean => {
    if (activePathMode === 'ALL') return true;
    if (nodeId === 'start-node' || nodeId === 'dec-variance' || nodeId === 'dec-triage' || nodeId === 'dec-rootcause' || nodeId === 'process-covenant' || nodeId === 'dec-outcome' || nodeId === 'process-memory' || nodeId === 'end-node') {
      return true;
    }
    if (activePathMode === 'EMERGENCY') {
      return nodeId === 'branch-acute' || nodeId === 'process-observe';
    }
    if (activePathMode === 'CAPACITY') {
      return nodeId === 'branch-capacity';
    }
    if (activePathMode === 'PREDICTION') {
      return nodeId === 'branch-cascade' || nodeId === 'process-observe';
    }
    return false;
  };

  return (
    <main className="min-h-screen bg-[#03040A] text-[#ECEEF5] pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <TopographicBackground className="opacity-15 pointer-events-none -z-10 fixed inset-0" />

      {/* Header */}
      <header className="mb-10 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300 font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span>SYSTEM ARCHITECTURE DIAGRAM</span>
          <span className="text-zinc-600">//</span>
          <span className="text-white">COMPLETE DIGISYNQ OPERATIONAL FLOWCHART</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
          The DigiSynq System Flowchart.
          <span className="block text-xl sm:text-2xl lg:text-3xl text-zinc-400 font-normal mt-2">
            The Complete Decision Logic, Triage Gates & Resolution Architecture.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
          An end-to-end flowchart illustrating how DigiSynq ingests operational ruptures, evaluates variance signals, decomposes dependencies, isolates root causes, coordinates binding covenants, and deposits outcomes into compounding System Memory.
        </p>

        {/* Path Filter Ribbon & Controls */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-3 rounded-2xl border border-white/10 bg-[#090B14]">
          {/* Path Mode Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto scrollbar-none pb-2 sm:pb-0">
            <span className="text-xs font-mono text-zinc-500 mr-2 shrink-0">FILTER PATH:</span>
            {[
              { id: 'ALL', label: 'All Branches (Master Flow)' },
              { id: 'EMERGENCY', label: 'Track A: Acute Set Freeze' },
              { id: 'CAPACITY', label: 'Track B: Dark Floor Matching' },
              { id: 'PREDICTION', label: 'Track C: Cascade Pre-emption' }
            ].map((mode) => (
              <button
                key={mode.id}
                onClick={() => setActivePathMode(mode.id as FlowPathMode)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all border ${
                  activePathMode === mode.id
                    ? 'bg-[#090B14] text-white border-white/20 shadow-md font-semibold'
                    : 'bg-white/[0.02] text-zinc-400 border-white/5 hover:border-white/15 hover:text-white'
                }`}
              >
                {mode.label}
              </button>
            ))}
          </div>

          {/* Interactive Zoom & Share Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center border border-white/10 rounded-xl bg-white/[0.02] p-1">
              <button
                onClick={() => setZoomLevel((z) => Math.max(0.8, z - 0.1))}
                className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="px-2 font-mono text-[11px] text-zinc-400">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(1.2, z + 0.1))}
                className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-1.5 text-zinc-400 hover:text-white transition-colors border-l border-white/10 ml-1"
                title="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={handleCopyLink}
              className="p-2.5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] text-zinc-300 hover:text-white transition-colors text-xs font-mono flex items-center gap-1.5"
              title="Copy Diagram Link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-white" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main 2-Column Layout: Flowchart Canvas + Selected Node Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Visual Flowchart Canvas */}
        <section className="lg:col-span-8 p-6 sm:p-10 rounded-2xl border border-white/10 bg-[#07080F] shadow-2xl relative overflow-hidden">
          {/* Subtle Canvas Dot Grid */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '24px 24px'
            }}
          />

          <div
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center', transition: 'transform 0.2s ease-out' }}
            className="flex flex-col items-center max-w-2xl mx-auto space-y-2 py-4 relative z-10"
          >
            {/* ── 01. START NODE ────────────────────────────────────────── */}
            <div
              onClick={() => setSelectedNodeId('start-node')}
              className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                selectedNodeId === 'start-node' ? 'ring-2 ring-white shadow-lg shadow-white/20' : ''
              } ${isNodeHighlighted('start-node') ? 'opacity-100' : 'opacity-30'}`}
            >
              <div className="px-8 py-3.5 rounded-full bg-[#1F1435] border-2 border-[#A855F7] text-white shadow-md text-center flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C084FC] animate-ping" />
                <span className="font-bold tracking-wide text-sm">Start: Industry Rupture / Production Inception</span>
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-zinc-600" />
              <div className="w-2 h-2 border-r-2 border-b-2 border-zinc-500 rotate-45 -mt-1" />
            </div>

            {/* ── 02. DECISION 1: VARIANCE DETECTED? ─────────────────────── */}
            <div
              onClick={() => setSelectedNodeId('dec-variance')}
              className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                selectedNodeId === 'dec-variance' ? 'ring-2 ring-[#F43F5E] shadow-lg shadow-[#F43F5E]/20' : ''
              } ${isNodeHighlighted('dec-variance') ? 'opacity-100' : 'opacity-30'}`}
            >
              {/* Diamond Decision Shape */}
              <div className="relative w-48 h-24 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#2D1222] border-2 border-[#F43F5E] rotate-45 rounded-xl shadow-lg" />
                <div className="relative z-10 text-center px-4">
                  <span className="text-[10px] font-mono text-[#FDA4AF] block uppercase font-semibold">M02 Telemetry</span>
                  <span className="font-bold text-xs text-white leading-tight block">Variance Detected?<br />(GAP &gt; 0)</span>
                </div>
              </div>
            </div>

            {/* Branching from Decision 1 */}
            <div className="w-full flex justify-center items-start pt-1">
              <div className="w-3/4 flex justify-between relative">
                {/* Horizontal branch line */}
                <div className="absolute top-0 left-12 right-12 h-0.5 bg-zinc-600" />
                
                {/* Left Branch: Yes */}
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-6 bg-zinc-600" />
                  <span className="text-[10px] font-mono bg-[#090B14] px-1.5 py-0.5 rounded text-zinc-300 border border-white/15 my-1">
                    Yes: Anomaly Flagged
                  </span>
                  <div className="w-0.5 h-6 bg-zinc-600" />
                  <div className="w-2 h-2 border-r-2 border-b-2 border-zinc-500 rotate-45 -mt-1" />
                </div>

                {/* Right Branch: No */}
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-6 bg-zinc-600" />
                  <span className="text-[10px] font-mono bg-[#090B14] px-1.5 py-0.5 rounded text-zinc-400 border border-white/10 my-1">
                    No: Slate Inoculation
                  </span>
                  <div className="w-0.5 h-6 bg-zinc-600" />
                  <div className="w-2 h-2 border-r-2 border-b-2 border-zinc-500 rotate-45 -mt-1" />
                </div>
              </div>
            </div>

            {/* ── 03. PROCESS: DECOMPOSE & MAP ────────────────────────────── */}
            <div
              onClick={() => setSelectedNodeId('process-observe')}
              className={`w-full max-w-md p-4 rounded-xl bg-[#0F172A] border-2 border-[#38BDF8] cursor-pointer transition-all duration-300 transform hover:scale-102 ${
                selectedNodeId === 'process-observe' ? 'ring-2 ring-[#38BDF8] shadow-lg shadow-[#38BDF8]/20' : ''
              } ${isNodeHighlighted('process-observe') ? 'opacity-100' : 'opacity-30'}`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono text-[#38BDF8] font-bold">M03 + M04 // ANALYSIS</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-300">DEPENDENCY GRAPH</span>
              </div>
              <div className="font-bold text-sm text-white mb-1">
                Decompose Rupture & Map Local Blast Radius
              </div>
              <p className="text-xs text-zinc-300 font-light leading-relaxed">
                Dissect surface friction into atomic events; plot upstream supplier dependencies and downstream release exposures.
              </p>
            </div>

            {/* Connecting Arrow */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-zinc-600" />
              <div className="w-2 h-2 border-r-2 border-b-2 border-zinc-500 rotate-45 -mt-1" />
            </div>

            {/* ── 04. DECISION 2: TRIAGE CLASSIFICATION ───────────────────── */}
            <div
              onClick={() => setSelectedNodeId('dec-triage')}
              className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                selectedNodeId === 'dec-triage' ? 'ring-2 ring-[#F43F5E] shadow-lg shadow-[#F43F5E]/20' : ''
              } ${isNodeHighlighted('dec-triage') ? 'opacity-100' : 'opacity-30'}`}
            >
              <div className="relative w-52 h-28 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#2D1222] border-2 border-[#F43F5E] rotate-45 rounded-xl shadow-lg" />
                <div className="relative z-10 text-center px-4">
                  <span className="text-[10px] font-mono text-[#FDA4AF] block uppercase font-semibold">M06 Classify</span>
                  <span className="font-bold text-xs text-white leading-tight block">Triage Route &amp;<br />Priority Class?</span>
                  <span className="text-[9px] font-mono text-zinc-400 block mt-1">M07 Priority Formula</span>
                </div>
              </div>
            </div>

            {/* 3-Way Branching Distribution */}
            <div className="w-full flex flex-col items-center pt-2">
              {/* Connector lines branching out */}
              <div className="w-full relative h-6">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-zinc-600" />
                <div className="absolute top-3 left-10 right-10 h-0.5 bg-zinc-600" />
                {/* 3 drops */}
                <div className="absolute top-3 left-10 w-0.5 h-3 bg-zinc-600" />
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-zinc-600" />
                <div className="absolute top-3 right-10 w-0.5 h-3 bg-zinc-600" />
              </div>

              {/* 3 Specialized Branch Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
                {/* Track A */}
                <div
                  onClick={() => setSelectedNodeId('branch-acute')}
                  className={`p-3.5 rounded-xl bg-[#1C1215] border-2 border-[#F43F5E] cursor-pointer transition-all duration-300 transform hover:scale-102 flex flex-col justify-between ${
                    selectedNodeId === 'branch-acute' ? 'ring-2 ring-[#F43F5E] shadow-lg shadow-[#F43F5E]/30' : ''
                  } ${isNodeHighlighted('branch-acute') ? 'opacity-100' : 'opacity-25'}`}
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#F43F5E] font-bold block mb-1">TRACK A: ACUTE</span>
                    <div className="font-bold text-xs text-white mb-1">Set Rupture &amp; Unit Freeze</div>
                    <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                      Active camera stoppage. Rapid 24-48h Triage SYNQ to halt $40K+/day idle burn.
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-mono text-[#FDA4AF] flex items-center justify-between">
                    <span>M18 ESCALATE</span>
                    <span>24H SPRINT</span>
                  </div>
                </div>

                {/* Track B */}
                <div
                  onClick={() => setSelectedNodeId('branch-capacity')}
                  className={`p-3.5 rounded-xl bg-[#0D241C] border-2 border-[#10B981] cursor-pointer transition-all duration-300 transform hover:scale-102 flex flex-col justify-between ${
                    selectedNodeId === 'branch-capacity' ? 'ring-2 ring-[#10B981] shadow-lg shadow-[#10B981]/30' : ''
                  } ${isNodeHighlighted('branch-capacity') ? 'opacity-100' : 'opacity-25'}`}
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#10B981] font-bold block mb-1">TRACK B: CAPACITY</span>
                    <div className="font-bold text-xs text-white mb-1">Stage &amp; Guild Matching</div>
                    <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                      Dark-date floor liquidity. Verified HoDs &amp; rental packages without 20% tolls.
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-mono text-[#6EE7B7] flex items-center justify-between">
                    <span>M10 MATCH</span>
                    <span>FRACTIONAL</span>
                  </div>
                </div>

                {/* Track C */}
                <div
                  onClick={() => setSelectedNodeId('branch-cascade')}
                  className={`p-3.5 rounded-xl bg-[#0E1B2D] border-2 border-[#3B82F6] cursor-pointer transition-all duration-300 transform hover:scale-102 flex flex-col justify-between ${
                    selectedNodeId === 'branch-cascade' ? 'ring-2 ring-[#3B82F6] shadow-lg shadow-[#3B82F6]/30' : ''
                  } ${isNodeHighlighted('branch-cascade') ? 'opacity-100' : 'opacity-25'}`}
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#3B82F6] font-bold block mb-1">TRACK C: CASCADE</span>
                    <div className="font-bold text-xs text-white mb-1">Release Pre-emption</div>
                    <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                      Post &amp; VFX compression modeling. Decouple reels to protect delivery dates.
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-mono text-[#93C5FD] flex items-center justify-between">
                    <span>M08 SIMULATE</span>
                    <span>DECOUPLING</span>
                  </div>
                </div>
              </div>

              {/* Converging Connector lines from 3 cards */}
              <div className="w-full relative h-6 mt-1">
                <div className="absolute top-0 left-10 w-0.5 h-3 bg-zinc-600" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-zinc-600" />
                <div className="absolute top-0 right-10 w-0.5 h-3 bg-zinc-600" />
                <div className="absolute top-3 left-10 right-10 h-0.5 bg-zinc-600" />
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-zinc-600" />
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 border-r-2 border-b-2 border-zinc-500 rotate-45 -mt-1" />
            </div>

            {/* ── 05. DECISION 3: ROOT CAUSE CONFIRMED? ───────────────────── */}
            <div
              onClick={() => setSelectedNodeId('dec-rootcause')}
              className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                selectedNodeId === 'dec-rootcause' ? 'ring-2 ring-[#F43F5E] shadow-lg shadow-[#F43F5E]/20' : ''
              } ${isNodeHighlighted('dec-rootcause') ? 'opacity-100' : 'opacity-30'}`}
            >
              <div className="relative w-52 h-28 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#2D1222] border-2 border-[#F43F5E] rotate-45 rounded-xl shadow-lg" />
                <div className="relative z-10 text-center px-4">
                  <span className="text-[10px] font-mono text-[#FDA4AF] block uppercase font-semibold">M05 Diagnose</span>
                  <span className="font-bold text-xs text-white leading-tight block">Root Cause Isolated?<br />(5 Whys Drilldown)</span>
                </div>
              </div>
            </div>

            {/* Connecting Arrow (with loopback indicator note) */}
            <div className="flex items-center justify-center gap-6 py-1">
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-mono text-zinc-300 bg-white/[0.05] px-2 py-0.5 rounded border border-white/10 mb-1">
                  Root Cause Certified (Confidence &gt; 85%)
                </span>
                <div className="w-0.5 h-6 bg-zinc-600" />
                <div className="w-2 h-2 border-r-2 border-b-2 border-zinc-500 rotate-45 -mt-1" />
              </div>
            </div>

            {/* ── 06. PROCESS: COVENANT STRUCTURING ───────────────────────── */}
            <div
              onClick={() => setSelectedNodeId('process-covenant')}
              className={`w-full max-w-md p-4 rounded-xl bg-[#092219] border-2 border-[#10B981] cursor-pointer transition-all duration-300 transform hover:scale-102 ${
                selectedNodeId === 'process-covenant' ? 'ring-2 ring-[#10B981] shadow-lg shadow-[#10B981]/20' : ''
              } ${isNodeHighlighted('process-covenant') ? 'opacity-100' : 'opacity-30'}`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono text-white font-bold">M11 + M12 // ORCHESTRATION</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-300">BINDING COVENANT</span>
              </div>
              <div className="font-bold text-sm text-white mb-1">
                Multi-Party Covenant Structuring &amp; Execution
              </div>
              <p className="text-xs text-zinc-300 font-light leading-relaxed">
                Bind Producer, Stage, Crew, and Financier under standardized clean-room milestone delivery gates.
              </p>
            </div>

            {/* Connecting Arrow */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-zinc-600" />
              <div className="w-2 h-2 border-r-2 border-b-2 border-zinc-500 rotate-45 -mt-1" />
            </div>

            {/* ── 07. DECISION 4: OUTCOME VERIFIED? ───────────────────────── */}
            <div
              onClick={() => setSelectedNodeId('dec-outcome')}
              className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                selectedNodeId === 'dec-outcome' ? 'ring-2 ring-[#F43F5E] shadow-lg shadow-[#F43F5E]/20' : ''
              } ${isNodeHighlighted('dec-outcome') ? 'opacity-100' : 'opacity-30'}`}
            >
              <div className="relative w-52 h-28 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#2D1222] border-2 border-[#F43F5E] rotate-45 rounded-xl shadow-lg" />
                <div className="relative z-10 text-center px-4">
                  <span className="text-[10px] font-mono text-[#FDA4AF] block uppercase font-semibold">M14 Verify</span>
                  <span className="font-bold text-xs text-white leading-tight block">Milestone Adherence &amp;<br />Quality Verified?</span>
                </div>
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-zinc-600" />
              <div className="w-2 h-2 border-r-2 border-b-2 border-zinc-500 rotate-45 -mt-1" />
            </div>

            {/* ── 08. PROCESS: SYSTEM MEMORY FLYWHEEL ─────────────────────── */}
            <div
              onClick={() => setSelectedNodeId('process-memory')}
              className={`w-full max-w-md p-4 rounded-xl bg-[#141F36] border-2 border-[#60A5FA] cursor-pointer transition-all duration-300 transform hover:scale-102 ${
                selectedNodeId === 'process-memory' ? 'ring-2 ring-[#60A5FA] shadow-lg shadow-[#60A5FA]/20' : ''
              } ${isNodeHighlighted('process-memory') ? 'opacity-100' : 'opacity-30'}`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono text-[#93C5FD] font-bold">M15 + M17 // ASSURANCE</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-300">SYSTEM MEMORY</span>
              </div>
              <div className="font-bold text-sm text-white mb-1">
                Deposit Case into System Memory Flywheel
              </div>
              <p className="text-xs text-zinc-300 font-light leading-relaxed">
                Index causal signature, vendor reliability scores, and cost avoidance metrics into compounding global memory.
              </p>
            </div>

            {/* Connecting Arrow */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-zinc-600" />
              <div className="w-2 h-2 border-r-2 border-b-2 border-zinc-500 rotate-45 -mt-1" />
            </div>

            {/* ── 09. TERMINAL END NODE ───────────────────────────────────── */}
            <div
              onClick={() => setSelectedNodeId('end-node')}
              className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                selectedNodeId === 'end-node' ? 'ring-2 ring-white shadow-lg shadow-white/20' : ''
              } ${isNodeHighlighted('end-node') ? 'opacity-100' : 'opacity-30'}`}
            >
              <div className="px-8 py-3.5 rounded-full bg-[#090B14] border-2 border-white/20 text-white shadow-md text-center flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span className="font-bold tracking-wide text-sm">End: System Restored &amp; Inoculated Against Recurrence</span>
              </div>
            </div>
          </div>
        </section>

        {/* Right Column: Node Dossier Inspector */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#090B14] shadow-xl sticky top-28">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#090B14] text-white border border-white/15">
                  {selectedNode.badge}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">
                  {selectedNode.stage}
                </span>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                NODE INSPECTOR
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {selectedNode.title}
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
              {selectedNode.summary}
            </p>

            {/* Node Specifications */}
            <div className="space-y-4 mb-6">
              <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02]">
                <div className="text-[10px] font-mono text-white uppercase tracking-wider mb-1 font-semibold flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Primary Inputs</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-light">
                  {selectedNode.inputs}
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02]">
                <div className="text-[10px] font-mono text-[#38BDF8] uppercase tracking-wider mb-1 font-semibold flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Key Actions</span>
                </div>
                <ul className="space-y-1.5">
                  {selectedNode.actions.map((act, idx) => (
                    <li key={idx} className="text-xs text-zinc-300 flex items-start gap-1.5">
                      <span className="text-[#38BDF8] mt-0.5">•</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedNode.decisions && (
                <div className="p-3.5 rounded-xl border border-[#F43F5E]/20 bg-[#2D1222]/30">
                  <div className="text-[10px] font-mono text-[#FDA4AF] uppercase tracking-wider mb-1 font-semibold flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Decision Criteria</span>
                  </div>
                  <p className="text-xs text-zinc-200 leading-relaxed">
                    {selectedNode.decisions}
                  </p>
                </div>
              )}

              <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02]">
                <div className="text-[10px] font-mono text-white uppercase tracking-wider mb-1 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Output Deliverable</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-light">
                  {selectedNode.outputs}
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-amber-500/20 bg-amber-500/[0.03]">
                <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wider mb-1 font-semibold flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Risk if Bypassed</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {selectedNode.riskIfBypassed}
                </p>
              </div>
            </div>

            {/* Node Ownership & Mechanisms */}
            <div className="pt-4 border-t border-white/10 mb-6 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-500 font-mono">Owner:</span>
                <span className="text-zinc-300 font-medium">{selectedNode.owner}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-500 font-mono">Associated Mechanisms:</span>
                <span className="text-white font-mono font-semibold">{selectedNode.mechanisms.join(', ')}</span>
              </div>
            </div>

            {/* Direct Route Action */}
            {selectedNode.linkToRoute && (
              <Link
                to={selectedNode.linkToRoute.path}
                className="w-full py-2.5 px-4 rounded-xl bg-white text-[#03040A] font-bold text-xs hover:bg-[#34D399] transition-colors flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>{selectedNode.linkToRoute.label}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}
