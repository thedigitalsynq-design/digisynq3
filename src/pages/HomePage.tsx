import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  GitBranch,
  Cpu,
  Compass,
  AlertTriangle,
  CheckCircle2,
  Sliders,
  Terminal,
  Clock,
  DollarSign,
  Users,
  Check,
  Network,
  Eye,
  Search,
  FileText,
  XCircle,
  Lightbulb,
  Film,
  Sparkles,
} from 'lucide-react';
import {
  BRAND,
  WHAT_DIGISYNQ_IS_NOT,
  CONTINUUM_STAGES,
  MECHANISMS,
  PROBLEM_TAXONOMY,
} from '../data/blueprint_data';
import { TopographicBackground } from '../components/TopographicBackground';

export function HomePage() {
  const [heroMode, setHeroMode] = useState<'FRAGMENTED' | 'SYNCHRONIZED'>('SYNCHRONIZED');
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [selectedDiagnosticScenario, setSelectedDiagnosticScenario] = useState(0);
  const [selectedContinuumStage, setSelectedContinuumStage] = useState(3); // Stage 4: Production

  // 8-Step Core Process
  const coreProcessSteps = [
    {
      step: '01',
      name: 'OBSERVE',
      tagline: 'Continuous System Telemetry',
      input: 'Daily production reports, schedule shifts, dark-floor stage logs, budget burns',
      action: 'Ingest raw operational signals across all 9 continuum stages without manual friction.',
      output: 'Normalized telemetry timeline highlighting schedule & budget delta anomalies.',
      icon: Eye,
    },
    {
      step: '02',
      name: 'DIAGNOSE',
      tagline: 'Root-Cause Decomposition',
      input: 'Observed surface symptom (e.g. "soundstage handover delay by 48 hours")',
      action: 'Decompose surface symptom through 6 problem domains to isolate actual systemic cause.',
      output: 'Classified root failure: unhedged script rewrite vs permit delay vs crew turn.',
      icon: Search,
    },
    {
      step: '03',
      name: 'MAP',
      tagline: 'Multi-Party Blast Radius',
      input: 'Identified root cause and affected production milestone',
      action: 'Traverse the entertainment dependency graph to calculate cascade blast radius.',
      output: 'Visualized dependency graph linking downstream VFX plates, stages, and talent locks.',
      icon: GitBranch,
    },
    {
      step: '04',
      name: 'SIMULATE',
      tagline: 'Counterfactual Impact Modelling',
      input: 'Dependency graph + 3 potential remediation paths',
      action: 'Run algorithmic cascade simulations to project days recovered and costs prevented.',
      output: 'Comparative scorecards: Option A (overtime) vs Option B (scene resequence) vs Option C (burst stage).',
      icon: Sliders,
    },
    {
      step: '05',
      name: 'CONNECT',
      tagline: 'Asset-Light Capability Routing',
      input: 'Selected intervention requirement (e.g. "pre-lit 15,000 sq ft stage for 3 days")',
      action: 'Query pre-vetted network partners with verified dark capacity and rate parity.',
      output: 'Matched dark floor slot, certified specialty crew, or burst VFX vendor ready to contract.',
      icon: Network,
    },
    {
      step: '06',
      name: 'COORDINATE',
      tagline: 'Structured Intervention Execution',
      input: 'Matched partner resources + single-point decision authority',
      action: 'Orchestrate time-bounded SYNQ sprint with verified legal and technical SLAs.',
      output: 'Active triage sprint executed with zero collateral friction on other departments.',
      icon: Zap,
    },
    {
      step: '07',
      name: 'MEASURE',
      tagline: 'Deterministic Value Verification',
      input: 'Post-intervention timeline, burn rate, and master delivery checkpoints',
      action: 'Audit real outcomes against initial counterfactual baseline.',
      output: 'Verified System Value Created: exact schedule buffer days recovered and dollars saved.',
      icon: CheckCircle2,
    },
    {
      step: '08',
      name: 'LEARN',
      tagline: 'Systemic Memory & Recurrence Prevention',
      input: 'De-identified case anatomy, resolution path, and outcome delta',
      action: 'Deposit resolution template and early-warning signatures into DigiSynq System Memory.',
      output: 'Automated predictive guardrail preventing identical failure on future productions.',
      icon: Cpu,
    },
  ];

  // Interactive Diagnostic Scenarios
  const diagnosticScenarios = [
    {
      id: 'soundstage-delay',
      title: 'Soundstage Turnover Conflict',
      symptom: 'Principal photography running 4 days over scheduled floor lease on Stage 3.',
      rootCause: 'Unscheduled practical stunt adjustments forced split-shift lighting overruns.',
      blastRadius: 'Next tenant eviction notice, $24k/day standby penalties, crew turnaround breach.',
      mechanism: 'M10: Match & M15: Intervene',
      intervention: 'Route overflow pickup shots to pre-vetted dark stage; resequence interior dialogue.',
      valueModel: 'MODELLED: 3.5 Days Recovered // $68k Idle Penalty Avoided',
    },
    {
      id: 'vfx-crunch',
      title: 'Post-Production VFX Plate Squeeze',
      symptom: 'Turnover plates delivered 14 days late with conform delivery date fixed.',
      rootCause: 'Color pipeline color-space mismatch between camera raw and vendor conform OCIO.',
      blastRadius: '120 hero CGI shots compressed from 6 weeks to 18 days; platform release window threatened.',
      mechanism: 'M08: Simulate & M11: Route',
      intervention: 'Inject automated ACES OCIO validation config; spin up burst secondary VFX studio partner.',
      valueModel: 'MODELLED: 100% Platform Delivery Spec Compliance Target',
    },
    {
      id: 'talent-window',
      title: 'Lead Talent Availability Collision',
      symptom: 'A-list lead actor has immovable hard-out for international press tour in 9 days.',
      rootCause: 'Weather-induced location cancellation caused shooting schedule to invert without buffer.',
      blastRadius: 'Unshot climax scenes; $320k insurance deductible triggered; potential cast recast crisis.',
      mechanism: 'M07: Classify & M09: Model',
      intervention: 'Dynamic scene clustering: group all lead coverage with 2-camera simultaneous units.',
      valueModel: 'MODELLED: 6 Climax Scenes Completed Before Hard-Out',
    },
    {
      id: 'platform-qc',
      title: 'Platform QC Delivery Rejection',
      symptom: 'Streaming platform rejects IMF master 72 hours before global simultaneous debut.',
      rootCause: 'Subtle Dolby Atmos 7.1.4 bed downmix phase cancellation and dead subtitle TC sync.',
      blastRadius: 'Global marketing spend burned; platform delayed launch fines; reputation damage.',
      mechanism: 'M14: Verify & M17: Stabilize',
      intervention: 'Deploy 24-hour certified IMF remediation sprint with platform-certified QC engineers.',
      valueModel: 'MODELLED: Zero Window Slip // Platform Accepted in 18 Hours',
    },
  ];

  return (
    <main className="bg-[#03040A] text-[#ECEEF5] selection:bg-[#23B272] selection:text-[#03040A] min-h-screen relative overflow-hidden">
      {/* ── Topographic Background Canvas ── */}
      <TopographicBackground className="opacity-35 pointer-events-none -z-10" />

      {/* ── Ambient Atmosphere ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-[#23B272]/20 via-[#16543D]/10 to-transparent blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[1800px] -left-48 w-[600px] h-[600px] bg-[#52E3A4]/6 blur-[180px] pointer-events-none -z-10" />
      <div className="absolute top-[3600px] -right-48 w-[700px] h-[700px] bg-[#23B272]/6 blur-[180px] pointer-events-none -z-10" />

      {/* ══════════════════════════════════════════════════════
          01 — HERO: MASTER METAPHORIC STATEMENT & DYNAMIC CONSOLE
         ══════════════════════════════════════════════════════ */}
      <section className="relative pt-36 sm:pt-48 pb-20 sm:pb-32 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] text-xs text-zinc-300 mb-8 tracking-wide backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-[#52E3A4] animate-pulse" />
            <span className="font-mono text-[#52E3A4] font-semibold">ENTERTAINMENT SYNCHRONIZATION INFRASTRUCTURE</span>
            <span className="text-zinc-600">//</span>
            <span className="text-zinc-400 font-medium">ROOT-CAUSE ORCHESTRATION</span>
          </div>

          {/* Master Clear H1 */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.03] [letter-spacing:-0.035em] mb-6">
            When the entertainment system breaks,
            <span className="text-[#52E3A4] block text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 font-extrabold">
              DigiSynq finds why.
            </span>
          </h1>

          {/* Master Explanatory H2 */}
          <h2 className="text-base sm:text-xl text-zinc-300 font-normal leading-relaxed mb-6 max-w-3xl mx-auto">
            DigiSynq identifies the root causes behind production, talent, capacity, financing and distribution bottlenecks — then connects the right people, resources and decisions to resolve them.
          </h2>

          <div className="text-xs sm:text-sm text-[#52E3A4] font-mono tracking-wide mb-10 font-semibold">
            {BRAND.mission} • {BRAND.tagline}
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link
              to="/diagnose"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#23B272] text-[#03040A] hover:bg-[#52E3A4] font-bold text-sm tracking-wide transition-all duration-200 active:scale-95 shadow-[0_0_35px_rgba(35,178,114,0.4)]"
              id="hero-diagnose-cta"
            >
              <span>Diagnose a Problem</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>

            <Link
              to="/the-synq"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/14 hover:border-[#52E3A4]/40 bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-sm transition-all duration-200 backdrop-blur-xl"
            >
              <Compass className="w-4 h-4 text-[#52E3A4]" />
              <span>Explore the System</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-70" />
            </Link>

            <Link
              to="/mechanisms"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/10 hover:border-white/20 bg-transparent text-zinc-400 hover:text-white font-mono text-xs transition-all duration-200"
            >
              <span>23 Mechanisms</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ── Interactive Hero Terminal: Fragmented vs Synchronized ── */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-white/[0.1] bg-[#090B14]/90 backdrop-blur-2xl shadow-2xl p-6 sm:p-8 relative overflow-hidden">
          {/* Console Header & Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="font-mono text-xs text-zinc-400 ml-2">SYSTEM STATE TELEMETRY // SIMULATOR</span>
            </div>

            <div className="inline-flex p-1 rounded-xl border border-white/[0.08] bg-black/60 font-mono text-xs">
              <button
                onClick={() => setHeroMode('FRAGMENTED')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  heroMode === 'FRAGMENTED'
                    ? 'bg-red-500/20 text-red-300 border border-red-500/30 font-semibold'
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                Fragmented Silos (Default)
              </button>
              <button
                onClick={() => setHeroMode('SYNCHRONIZED')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  heroMode === 'SYNCHRONIZED'
                    ? 'bg-[#23B272] text-[#03040A] font-bold shadow-md'
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                DIGISYNQ Infrastructure (Active)
              </button>
            </div>
          </div>

          {/* Dynamic Content Display */}
          {heroMode === 'FRAGMENTED' ? (
            <div className="space-y-6">
              <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-xs sm:text-sm text-red-200 flex items-center justify-between">
                <span>⚠️ Uncoordinated Cascade in Progress: Lead Actor date shifts by 6 days.</span>
                <span className="font-mono font-bold text-red-400 uppercase text-xs">Blast Radius: $450k Overrun</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                  <div className="text-zinc-500 mb-1">STAGE A: PRODUCTION</div>
                  <div className="text-white font-bold">Soundstage Eviction</div>
                  <div className="text-red-400 mt-1">Standby gear penalty: $18k/day</div>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                  <div className="text-zinc-500 mb-1">STAGE B: POST-PRODUCTION</div>
                  <div className="text-white font-bold">VFX Delivery Squeeze</div>
                  <div className="text-red-400 mt-1">Conform cut compressed by 12 days</div>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                  <div className="text-zinc-500 mb-1">STAGE C: DISTRIBUTION</div>
                  <div className="text-white font-bold">Release Window Lost</div>
                  <div className="text-red-400 mt-1">Platform QC rejection 48h before launch</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-4 rounded-xl border border-[#23B272]/40 bg-[#23B272]/10 text-xs sm:text-sm text-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span>⚡ Cascade Arrested: Dynamic scene resequencing + burst partner stage activated.</span>
                <span className="font-mono text-[11px] text-[#52E3A4] uppercase bg-black/40 px-2 py-0.5 rounded border border-[#23B272]/30">
                  MODELLED SIMULATION: 5.5 Days &amp; $84k Protected
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/20">
                  <div className="text-zinc-500 mb-1">MECHANISM 08: SIMULATE</div>
                  <div className="text-white font-bold">Resequence Exterior Scenes</div>
                  <div className="text-[#52E3A4] mt-1">Zero soundstage turnaround fines</div>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/20">
                  <div className="text-zinc-500 mb-1">MECHANISM 10: MATCH</div>
                  <div className="text-white font-bold">Partner Dark-Floor Floor Slot</div>
                  <div className="text-[#52E3A4] mt-1">Activated with 15% rate parity</div>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/20">
                  <div className="text-zinc-500 mb-1">MECHANISM 14: VERIFY</div>
                  <div className="text-white font-bold">IMF Master Delivered on Time</div>
                  <div className="text-[#52E3A4] mt-1">100% automated platform compliance</div>
                </div>
              </div>
            </div>
          )}

          {/* Terminal Footer Quote */}
          <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>Fundamental System Axiom:</span>
            <span className="text-[#52E3A4] italic">
              "DIGISYNQ does not manage filmmaking. It manages the dependencies that make filmmaking possible."
            </span>
          </div>
        </div>

        {/* ── Defined What is a SYNQ? ── */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-b from-[#090B14] to-[#04060C] border border-[#23B272]/20 relative overflow-hidden">
          <div className="max-w-3xl mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#23B272]/10 border border-[#23B272]/30 text-[#52E3A4] font-mono text-xs uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>THE OPERATIONAL FOUNDATION</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
              What is a <span className="text-[#52E3A4]">SYNQ</span>?
            </h3>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
              A <strong>SYNQ</strong> is a structured intervention that connects a specific entertainment system problem to the people, resources, capabilities, and decisions required to resolve it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#03040A] border border-white/[0.08]">
              <div className="text-xs font-mono text-[#52E3A4] mb-1">PRINCIPLE 01</div>
              <h4 className="text-sm font-bold text-white mb-1">Root-Cause Centered</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Decomposes surface emergencies into underlying schedule buffers, data schemas, and contract incentives.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#03040A] border border-white/[0.08]">
              <div className="text-xs font-mono text-[#52E3A4] mb-1">PRINCIPLE 02</div>
              <h4 className="text-sm font-bold text-white mb-1">Asset-Light Network</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                DigiSynq owns zero stages or camera trucks. It orchestrates pre-vetted dark floors, burst VFX, and specialist teams.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#03040A] border border-white/[0.08]">
              <div className="text-xs font-mono text-[#52E3A4] mb-1">PRINCIPLE 03</div>
              <h4 className="text-sm font-bold text-white mb-1">Measured Value</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Every SYNQ delivers verifiable outcomes: days of schedule buffer restored, idle penalty avoidance, and delivery compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          02 — SYSTEM PROBLEM: CASCADE BLAST RADIUS
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-8 border-y border-white/[0.06] bg-[#06080E]/70 relative">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-xs font-medium mb-3">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>02 // THE ROOT-CAUSE CASCADE PROBLEM</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              A single dropped beat echoes through the entire orchestra.
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
              Entertainment is an intricate polyphony of 20 distinct stakeholders. When one upstream date slips, it doesn't stay local — it triggers a compounded seismic wave down the entire critical path.
            </p>
          </div>

          {/* Visual Cascade Chain */}
          <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#090B14] shadow-2xl overflow-x-auto">
            <div className="text-xs font-mono text-[#52E3A4] mb-6 flex items-center justify-between">
              <span>UNSYNCHRONIZED CASCADE BLAST RADIUS</span>
              <span className="text-zinc-500">Without DIGISYNQ Intervention</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 min-w-[760px]">
              {[
                { step: '01', title: 'Actor Schedule Shift', detail: '+6 days unavailable', tag: 'Upstream Shock', color: 'border-amber-500/40 text-amber-400' },
                { step: '02', title: 'Shooting Order Alters', detail: 'Sequential scenes split', tag: 'Direct Effect', color: 'border-amber-500/30 text-zinc-300' },
                { step: '03', title: 'Location Booking Clash', detail: 'Permit & stage lost', tag: 'Spatial Loss', color: 'border-amber-500/30 text-zinc-300' },
                { step: '04', title: 'Crew & Gear Extension', detail: 'Turnaround hour breach', tag: 'Cost Spike', color: 'border-red-500/40 text-red-400' },
                { step: '05', title: 'Post-Pro Compressed', detail: 'VFX receives late plates', tag: 'Bottleneck', color: 'border-red-500/50 text-red-400' },
                { step: '06', title: 'Delivery Window Risk', detail: 'Platform QC rejection', tag: 'Release Loss', color: 'border-red-500/80 text-red-300' },
              ].map((item, idx) => (
                <div key={idx} className={`p-4 rounded-xl border bg-black/40 ${item.color} flex flex-col justify-between`}>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 mb-1">{item.step} // {item.tag}</div>
                    <div className="font-semibold text-sm text-white mb-2">{item.title}</div>
                    <div className="text-xs text-zinc-400">{item.detail}</div>
                  </div>
                  <div className="mt-4 pt-2 border-t border-white/[0.06] text-[10px] font-mono text-zinc-500">
                    Cascades downstream ↓
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="text-sm text-zinc-300 font-mono">
                <span className="text-[#52E3A4]">DIGISYNQ Solution:</span> Treats individual consequences as <strong className="text-white">one connected system</strong>.
              </div>
              <Link
                to="/engines/cascade"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#52E3A4] hover:text-white transition-colors"
              >
                <span>Launch Interactive Cascade Simulator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          03 — DIGISYNQ PROCESS: 8-STAGE SYNCHRONIZATION LOOP
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16543D]/50 border border-[#23B272]/30 text-[#52E3A4] font-mono text-xs font-semibold mb-3">
            <span>03 // THE 8-STAGE SYNQ ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            The Continuous Synchronization Loop.
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            DigiSynq operates as an asset-light, closed-loop control system for complex creative infrastructure:
            <span className="text-[#52E3A4] font-mono text-xs block mt-2">
              OBSERVE → DIAGNOSE → MAP → SIMULATE → CONNECT → COORDINATE → MEASURE → LEARN
            </span>
          </p>
        </div>

        {/* Process Step Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
          {coreProcessSteps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeProcessStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveProcessStep(idx)}
                className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#23B272] text-[#03040A] border-[#52E3A4] font-bold shadow-[0_0_20px_rgba(35,178,114,0.3)]'
                    : 'bg-[#090B14] border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs">{step.step}</span>
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#03040A]' : 'text-zinc-500'}`} />
                </div>
                <div className="text-xs font-mono font-bold tracking-tight">{step.name}</div>
              </button>
            );
          })}
        </div>

        {/* Active Process Step Card */}
        {(() => {
          const current = coreProcessSteps[activeProcessStep];
          const StepIcon = current.icon;
          return (
            <div className="p-8 rounded-3xl border border-[#23B272]/30 bg-gradient-to-br from-[#090B14] to-[#04060C] shadow-2xl relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#23B272]/20 border border-[#23B272]/40 flex items-center justify-center text-[#52E3A4]">
                    <StepIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#52E3A4] font-semibold">STAGE {current.step} OF 08</span>
                    <h3 className="text-2xl font-black text-white">{current.name}: {current.tagline}</h3>
                  </div>
                </div>
                <div className="font-mono text-xs text-zinc-500 bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/[0.08]">
                  Closed-Loop Feedback System
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-black/50 border border-white/[0.06]">
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2">INPUT SIGNAL</div>
                  <p className="text-xs text-zinc-300 leading-relaxed">{current.input}</p>
                </div>
                <div className="p-5 rounded-2xl bg-[#16543D]/20 border border-[#23B272]/30">
                  <div className="text-[11px] font-mono text-[#52E3A4] uppercase tracking-wider mb-2">SYSTEM ACTION</div>
                  <p className="text-xs text-emerald-100 leading-relaxed">{current.action}</p>
                </div>
                <div className="p-5 rounded-2xl bg-black/50 border border-white/[0.06]">
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2">DETERMINISTIC OUTPUT</div>
                  <p className="text-xs text-zinc-300 leading-relaxed">{current.output}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500">Sequential Cycle: Stage {current.step} feeds directly into Stage {activeProcessStep === 7 ? '01 (Memory Re-cycle)' : `0${activeProcessStep + 2}`}</span>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center gap-1.5 text-[#52E3A4] hover:text-white font-semibold transition-colors"
                >
                  <span>Explore 10-Step Resolution Runbook →</span>
                </Link>
              </div>
            </div>
          );
        })()}
      </section>

      {/* ══════════════════════════════════════════════════════
          04 — INTERACTIVE DIAGNOSTIC: REAL-TIME PROBLEM TRIAGE
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-8 border-t border-white/[0.06] bg-[#06080D]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <div className="text-xs font-mono text-[#52E3A4] mb-2 uppercase">04 // RAPID SYSTEM TRIAGE</div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Diagnose Your Bottleneck in Real Time.
              </h2>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-md mt-4 md:mt-0 font-mono">
              Select where friction is surfacing in your project to reveal the underlying root cause and intervention mechanism.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Scenario Buttons */}
            <div className="lg:col-span-5 space-y-3">
              {diagnosticScenarios.map((scen, idx) => (
                <div
                  key={scen.id}
                  onClick={() => setSelectedDiagnosticScenario(idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer text-left ${
                    selectedDiagnosticScenario === idx
                      ? 'bg-[#16543D]/40 border-[#52E3A4] shadow-[0_0_25px_rgba(82,227,164,0.15)]'
                      : 'bg-[#090B14] border-white/[0.06] hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs text-[#52E3A4] font-semibold">SCENARIO 0{idx + 1}</span>
                    <span className="font-mono text-[10px] text-zinc-500 uppercase">{scen.mechanism.split('&')[0]}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{scen.title}</h4>
                  <p className="text-xs text-zinc-400 line-clamp-2">{scen.symptom}</p>
                </div>
              ))}
            </div>

            {/* Diagnostic Result Card */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
              {(() => {
                const current = diagnosticScenarios[selectedDiagnosticScenario];
                return (
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                      <div>
                        <span className="font-mono text-xs text-[#52E3A4]">DIGISYNQ ROOT DECOMPOSITION</span>
                        <h3 className="text-xl font-black text-white mt-1">{current.title}</h3>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 bg-white/[0.04] px-2.5 py-1 rounded border border-white/[0.08]">
                        MODELLED SIMULATION
                      </span>
                    </div>

                    <div className="space-y-4 mb-6 text-xs font-mono">
                      <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200">
                        <strong className="text-red-400 block mb-1">SURFACE SYMPTOM:</strong>
                        {current.symptom}
                      </div>

                      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200">
                        <strong className="text-amber-400 block mb-1">IDENTIFIED ROOT CAUSE:</strong>
                        {current.rootCause}
                      </div>

                      <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.08] text-zinc-300">
                        <strong className="text-white block mb-1">CASCADE BLAST RADIUS:</strong>
                        {current.blastRadius}
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#23B272]/15 border border-[#23B272]/30 text-emerald-200">
                        <strong className="text-[#52E3A4] block mb-1">SYNQ INTERVENTION ({current.mechanism}):</strong>
                        {current.intervention}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-black/60 border border-white/[0.06] flex items-center justify-between mb-6">
                      <span className="text-[11px] font-mono text-zinc-500 uppercase">Projected Value:</span>
                      <span className="text-xs font-mono text-[#52E3A4] font-bold">{current.valueModel}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <Link
                        to="/diagnose"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#23B272] text-[#03040A] hover:bg-[#52E3A4] font-bold text-xs tracking-wide transition-all shadow-md"
                      >
                        <span>Run Full 10-Step Root Diagnostic</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        to="/engines/root-map"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.03] text-zinc-300 text-xs font-mono transition-all"
                      >
                        <span>View Tree Pipeline</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          05 — ECOSYSTEM: ARCHIPELAGO TOPOLOGY
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16543D]/50 border border-[#23B272]/30 text-[#52E3A4] font-mono text-xs font-semibold mb-3">
            <span>05 // THE CONNECTIVE TOPOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Cinema is an archipelago.
            <span className="text-zinc-400 font-light block text-2xl sm:text-4xl mt-2">
              We build the current that connects the islands.
            </span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            The entertainment ecosystem does not lack genius, soundstages, or camera packages. It lacks the connective infrastructure between them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#090B14]">
            <div className="font-mono text-xs text-zinc-500 mb-2">THESIS 5.1</div>
            <h3 className="text-xl font-bold text-white mb-3">The industry does not lack assets</h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Underutilized soundstages sit dark between tenant leases; verified cinematographers, editors, and colorists experience unbooked weeks. The resources exist, but they are fragmented.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#090B14]">
            <div className="font-mono text-xs text-zinc-500 mb-2">THESIS 5.2</div>
            <h3 className="text-xl font-bold text-white mb-3">The industry does not only lack software</h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Another standalone project management app or generic database does not solve coordination. The missing layer is <strong>the intelligence and orchestration between systems</strong>.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-[#23B272]/40 bg-gradient-to-br from-[#06130E] to-[#090B14]">
            <div className="font-mono text-xs text-[#52E3A4] mb-2">THESIS 5.3</div>
            <h3 className="text-xl font-bold text-white mb-3">The SYNQ Gap</h3>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              DIGISYNQ operates in the space between Stage A &amp; B, Team A &amp; B, Requirement &amp; Capability, Plan &amp; Reality. That operational space is <strong>THE SYNQ GAP</strong>.
            </p>
          </div>
        </div>

        {/* Ecosystem Entities Connected */}
        <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#090B14] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-xs text-[#52E3A4] block mb-1">CONNECTED ENTITIES IN THE NETWORK</span>
            <h4 className="text-lg font-bold text-white mb-2">12 Core Stakeholder Archetypes &amp; 16 Specialized Disciplines</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Producers, Directors, Screenwriters, Line Producers, Soundstages, Rental Houses, Virtual Production Volumes, Post &amp; VFX Studios, Finishing Houses, Financiers, and Streaming Platforms.
            </p>
          </div>
          <Link
            to="/ecosystem"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#23B272] text-[#03040A] hover:bg-[#52E3A4] font-bold text-xs tracking-wide transition-all shrink-0"
          >
            <span>Explore Ecosystem Network Graph</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          06 — 9-STAGE CONTINUUM: THE UNBROKEN LIFECYCLE
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-8 border-t border-white/[0.06] bg-[#06080D]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono text-[#52E3A4] mb-2 uppercase">06 // THE UNBROKEN LIFECYCLE</div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              The 9-Stage Entertainment Continuum.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Filmmaking is not nine siloed events. It is an unbroken continuum where upstream decisions silently dictate downstream survival.
            </p>
          </div>

          {/* Continuum Horizontal Scroller / Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 mb-8 overflow-x-auto">
            {CONTINUUM_STAGES.map((stg, idx) => {
              const isSelected = selectedContinuumStage === idx;
              return (
                <button
                  key={stg.step}
                  onClick={() => setSelectedContinuumStage(idx)}
                  className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between min-w-[100px] ${
                    isSelected
                      ? 'bg-[#23B272] text-[#03040A] border-[#52E3A4] font-bold shadow-lg'
                      : 'bg-[#090B14] border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-75">{stg.step}</span>
                  <span className="text-xs font-mono font-bold mt-2 truncate">{stg.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Continuum Stage Card */}
          {(() => {
            const current = CONTINUUM_STAGES[selectedContinuumStage];
            return (
              <div className="p-8 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/[0.08]">
                  <div>
                    <span className="font-mono text-xs text-[#52E3A4] font-semibold">STAGE {current.step} OF 09</span>
                    <h3 className="text-2xl font-black text-white mt-1">{current.name}</h3>
                    <p className="text-xs text-zinc-400 mt-1">{current.shortDesc}</p>
                  </div>
                  <Link
                    to="/continuum"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#52E3A4] hover:text-white font-semibold transition-colors shrink-0"
                  >
                    <span>Full Hand-Off Protocol →</span>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06]">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2">SCOPE BOUNDARY</div>
                    <p className="text-xs text-zinc-300 leading-relaxed">{current.scope}</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
                    <div className="text-[10px] font-mono text-red-400 uppercase tracking-wider mb-2">TYPICAL UNCOORDINATED FAILURE</div>
                    <p className="text-xs text-red-200 leading-relaxed">{current.typicalFailure}</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#16543D]/25 border border-[#23B272]/30">
                    <div className="text-[10px] font-mono text-[#52E3A4] uppercase tracking-wider mb-2">DIGISYNQ INTERVENTION</div>
                    <p className="text-xs text-emerald-100 leading-relaxed">{current.synqIntervention}</p>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          07 — 23 MECHANISMS: SYSTEMIC CONTROL ARSENAL
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="text-xs font-mono text-[#52E3A4] mb-2 uppercase">07 // SYSTEMIC CONTROL ARSENAL</div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              The 23 Master Mechanisms.
            </h2>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-md mt-4 md:mt-0 font-mono">
            Codified operational engines that turn chaotic production friction into deterministic, verified resolutions.
          </p>
        </div>

        {/* 4 Mechanism Clusters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              cluster: 'Detection & Mapping',
              range: 'M01 — M06',
              desc: 'Observe, Detect, Decompose, Map, Classify, and Prioritize system signals.',
              color: 'border-blue-500/30 text-blue-400',
            },
            {
              cluster: 'Simulation & Matching',
              range: 'M07 — M12',
              desc: 'Simulate downstream blast radiuses, Model counterfactuals, Match dark capacity, and Route capability.',
              color: 'border-[#52E3A4]/30 text-[#52E3A4]',
            },
            {
              cluster: 'Execution & Verification',
              range: 'M13 — M18',
              desc: 'Structure intervention sprints, Intervene, Verify compliance, Measure value, and Arbitrate covenants.',
              color: 'border-amber-500/30 text-amber-400',
            },
            {
              cluster: 'Memory & Prevention',
              range: 'M19 — M23',
              desc: 'Learn from outcomes, Codify institutional patterns, Forecast risks, Shield dependencies, and Prevent recurrence.',
              color: 'border-purple-500/30 text-purple-400',
            },
          ].map((grp, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-white/[0.08] bg-[#090B14] flex flex-col justify-between">
              <div>
                <div className={`font-mono text-xs mb-1 font-semibold ${grp.color}`}>{grp.range}</div>
                <h3 className="text-lg font-bold text-white mb-2">{grp.cluster}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">{grp.desc}</p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-[10px] font-mono text-zinc-500">
                Operating Formula Codified
              </div>
            </div>
          ))}
        </div>

        {/* Priority Formula Feature Bar */}
        <div className="p-6 sm:p-8 rounded-2xl border border-[#23B272]/30 bg-gradient-to-r from-[#06130E] to-[#090B14] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-xs text-[#52E3A4] block mb-1">M06: SYSTEMIC PRIORITY FORMULA</span>
            <div className="font-mono text-sm text-white font-bold mb-2">
              P = (Urgency × Blast Radius × Cost Velocity) ÷ Time to Delivery Window
            </div>
            <p className="text-xs text-zinc-400">
              Interactive calculator available in the 23 Mechanisms console to objectively prioritize conflicting on-set triage requests.
            </p>
          </div>
          <Link
            to="/mechanisms"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#23B272] text-[#03040A] hover:bg-[#52E3A4] font-bold text-xs tracking-wide transition-all shrink-0"
          >
            <span>Explore All 23 Mechanisms Console</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          08 — DIFFERENTIATION: WHAT DIGISYNQ IS NOT
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-8 border-t border-white/[0.06] bg-[#06080D]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono text-red-400 mb-2 uppercase">08 // STRATEGIC DIFFERENTIATION</div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              What DigiSynq Is NOT.
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Understanding what DigiSynq is not is the fastest way to understand the critical category we invent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {WHAT_DIGISYNQ_IS_NOT.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-white/[0.08] bg-[#090B14] hover:border-white/15 transition-all"
              >
                <div className="flex items-center gap-2 mb-2 text-red-400">
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span className="font-bold text-sm text-white">{item.item}</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.reason}</p>
              </div>
            ))}
          </div>

          {/* Differentiating Axiom */}
          <div className="p-8 rounded-3xl border border-[#23B272]/30 bg-gradient-to-br from-[#06130E] to-[#04060C] text-center max-w-4xl mx-auto">
            <span className="text-xs font-mono text-[#52E3A4] uppercase tracking-wider block mb-3">
              THE DEFINITIVE CATEGORY DEFINITION
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-relaxed mb-4">
              "DigiSynq does not manage filmmaking. It manages the dependencies between the people, processes, resources and decisions that make filmmaking possible."
            </h3>
            <div className="text-xs font-mono text-zinc-400">
              Asset-Light • Network-Orchestrated • Root-Cause First
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          09 — PROOF / EVIDENCE: COMPOUNDING MEMORY & MODELLED KPIS
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-mono text-[#52E3A4] mb-2 uppercase">09 // COMPOUNDING ADVANTAGE</div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              The Compounding Memory of Cinema.
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
              Every crisis diagnosed and every dependency stabilized deposits institutional knowledge into systemic memory. Today's resolved breakdown becomes tomorrow's automated prevention.
            </p>
            <div className="p-5 rounded-2xl border border-white/[0.08] bg-black/50 font-mono text-xs text-zinc-300 space-y-2">
              <div className="flex items-center gap-2"><span className="text-[#52E3A4]">MORE PROJECTS</span> → More Problems Observed</div>
              <div className="flex items-center gap-2"><span className="text-[#52E3A4]">MORE SYSTEM MAPS</span> → More Verified Interventions</div>
              <div className="flex items-center gap-2"><span className="text-[#52E3A4]">MORE OUTCOME DATA</span> → Compounding System Memory</div>
              <div className="flex items-center gap-2"><span className="text-[#52E3A4]">BETTER PATTERNS</span> → Predictive Early Warnings</div>
              <div className="flex items-center gap-2 font-bold text-[#D4F838]">HIGHER SYSTEM VALUE → REPEAT EXPANSION ↺</div>
            </div>
          </div>

          {/* Modelled North Star KPIs */}
          <div className="p-8 rounded-2xl border border-white/[0.1] bg-[#090B14]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-[#52E3A4] uppercase font-semibold">SECTION 60 TARGET BENCHMARKS</span>
              <span className="text-[10px] font-mono text-zinc-500 uppercase px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                Modelled System Metrics
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Target System Value Created</h3>
            <div className="grid grid-cols-2 gap-4 font-mono">
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                <div className="text-2xl sm:text-3xl font-bold text-[#52E3A4]">5.5 Days</div>
                <div className="text-[11px] text-zinc-400 mt-1">Modelled Schedule Buffer Recovery / Triage</div>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                <div className="text-2xl sm:text-3xl font-bold text-[#52E3A4]">$84,000+</div>
                <div className="text-[11px] text-zinc-400 mt-1">Projected Idle Cost Avoidance / Sprint</div>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
                <div className="text-[11px] text-zinc-400 mt-1">Platform Delivery Spec Compliance Target</div>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                <div className="text-2xl sm:text-3xl font-bold text-white">Zero Debt</div>
                <div className="text-[11px] text-zinc-400 mt-1">Asset-Light Network Orchestration</div>
              </div>
            </div>
            <div className="mt-4 text-[10px] font-mono text-zinc-500 italic">
              * Metrics reflect simulated operational models and calibrated scenario benchmarks across production and post-production workflows.
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          10 — FINAL CTA: WHERE IS YOUR FRICTION?
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-8 border-t border-white/[0.06] bg-gradient-to-b from-[#06130E] to-[#03040A] text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#23B272]/20 border border-[#23B272]/40 text-[#52E3A4] font-mono text-xs font-semibold mb-6">
            NORTH STAR KPI: {BRAND.northStarMetric.toUpperCase()}
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Where is your production losing its rhythm?
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Bring us an active schedule slip, post-production crunch, soundstage bottleneck, or talent friction. We diagnose the system, identify the root cause, coordinate the solution, and prove the outcome.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/diagnose"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#23B272] text-[#03040A] hover:bg-[#52E3A4] font-bold text-sm tracking-wide transition-all shadow-[0_0_35px_rgba(35,178,114,0.4)] active:scale-95"
            >
              <span>Diagnose a Problem</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>

            <Link
              to="/start"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/14 hover:border-white/25 bg-white/[0.03] text-white font-medium text-sm transition-all"
            >
              <span>Start a SYNQ Case</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-14 font-mono text-xs text-zinc-500">
            {BRAND.oneSentencePhilosophy} // {BRAND.oneSentenceMission}
          </div>
        </div>
      </section>
    </main>
  );
}
