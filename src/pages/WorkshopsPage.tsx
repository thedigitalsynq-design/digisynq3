import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  FlaskConical,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  AlertTriangle,
  Play,
  ShieldCheck,
  Zap,
  Users,
  Compass
} from 'lucide-react';
import { WORKSHOP_TRACKS } from '../data/blueprint_data';

const LAB_SCENARIOS: Record<string, { scenario: string; simulationGoal: string }> = {
  'track-01': {
    scenario: 'Cast date shift triggers immediate 3-department collision between booked LED stage and exterior location permits.',
    simulationGoal: 'Deploy TREE cascade arbitration within 4 hours to preserve shooting days and avoid $40k/day stage penalties.'
  },
  'track-02': {
    scenario: 'Unreal Engine nDisplay cluster drops sync at 24fps with RED V-Raptor camera tracking array during rehearsal.',
    simulationGoal: 'Isolate genlock drift, standardize frustum color space, and verify zero in-camera moiré before first take.'
  },
  'track-03': {
    scenario: 'Editorial conformed cut shifts 24 frames; 80 VFX plates already turned over to lead CGI facility with mismatched handles.',
    simulationGoal: 'Execute automated metadata reconciliation and establish immutable plate turnover covenants.'
  },
  'track-04': {
    scenario: 'Key Lighting HoD and Steadicam operator depart 72 hours before night exterior setup with 40-ton crane.',
    simulationGoal: 'Activate pre-vetted peer craft network with certified equipment familiarity and zero rate friction.'
  },
  'track-05': {
    scenario: 'OTT platform flags IMF packaging failure 36 hours before simultaneous multi-territory 4K Dolby Vision drop.',
    simulationGoal: 'Perform pre-flight automated XML schema conform and subtitle cadence compliance to clear delivery gates.'
  },
  'track-06': {
    scenario: 'Executive producer requests 25% budget compression while maintaining the original release calendar date.',
    simulationGoal: 'Run multi-variable sensitivity models across all 23 mechanisms to isolate non-destructive cost reductions.'
  }
};

export function WorkshopsPage() {
  const [selectedTrackIdx, setSelectedTrackIdx] = useState(0);
  const activeTrack = WORKSHOP_TRACKS[selectedTrackIdx];
  const activeScenario = LAB_SCENARIOS[activeTrack.id] || {
    scenario: 'Operational variance detected between upstream schedule and downstream technical capability.',
    simulationGoal: 'Stabilize system dependencies and prevent cascade propagation.'
  };

  return (
    <main id="main-content" className="bg-[#03040A] text-[#ECEEF5] selection:bg-white selection:text-black min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* ── Header ── */}
      <div className="max-w-4xl mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/15 bg-white/[0.03] text-xs text-white font-mono mb-4">
          <FlaskConical className="w-3.5 h-3.5" />
          <span>DIGISYNQ LABS</span>
          <span className="text-zinc-600">//</span>
          <span>OPERATIONAL SIMULATION &amp; CAPABILITY LABS</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.05] mb-4">
          Rehearse the Crisis Before It Happens.
          <span className="text-white block text-2xl sm:text-4xl mt-2 font-bold">
            Live Simulation Environments for Production Leaders.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light max-w-3xl mb-8">
          DigiSynq Labs are live simulation environments where producers, department heads, technicians, and studio leads rehearse crisis interventions, standardize technical handshakes, and stress-test production pipelines — before committing capital.
        </p>

        {/* Core Pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 p-3.5 rounded-2xl border border-white/[0.08] bg-[#090B14] font-mono text-xs text-zinc-300">
          <div className="text-center p-2.5 rounded-xl bg-black/40 border border-white/[0.04]">
            <span className="text-white block text-xs font-bold mb-0.5">•</span>
            Crisis Simulation
          </div>
          <div className="text-center p-2.5 rounded-xl bg-black/40 border border-white/[0.04]">
            <span className="text-white block text-xs font-bold mb-0.5">•</span>
            Pipeline Handshakes
          </div>
          <div className="text-center p-2.5 rounded-xl bg-black/40 border border-white/[0.04]">
            <span className="text-white block text-xs font-bold mb-0.5">•</span>
            Capacity Vetting
          </div>
          <div className="text-center p-2.5 rounded-xl bg-black/40 border border-white/[0.04]">
            <span className="text-white block text-xs font-bold mb-0.5">•</span>
            Trust Protocols
          </div>
          <div className="text-center p-2.5 rounded-xl bg-black/40 border border-white/[0.04]">
            <span className="text-white block text-xs font-bold mb-0.5">•</span>
            System Memory
          </div>
        </div>
      </div>

      {/* ── Track Selector Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-10">
        {WORKSHOP_TRACKS.map((trk, tIdx) => {
          const isSelected = selectedTrackIdx === tIdx;
          return (
            <button
              key={trk.id}
              onClick={() => setSelectedTrackIdx(tIdx)}
              className={`p-5 rounded-2xl border text-left transition-all relative group ${
                isSelected
                  ? 'bg-white/[0.06] border-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.12)] ring-1 ring-white'
                  : 'bg-[#090B14] border-white/[0.06] text-zinc-400 hover:text-white hover:border-white/[0.15]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-white font-bold">LAB {trk.code}</span>
                <span className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-black/40 border border-white/[0.05]">
                  {trk.category}
                </span>
              </div>
              <div className="font-bold text-sm text-white mb-1 group-hover:text-white transition-colors">
                {trk.name}
              </div>
              <div className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                {trk.scope}
              </div>
            </button>
          );
        })}
      </div>

      {/* ── Active Lab Deep Dive ── */}
      <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl relative mb-14">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="font-mono text-xs text-white mb-1">
              OPERATIONAL LAB {activeTrack.code} · {activeTrack.category.toUpperCase()}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{activeTrack.name}</h2>
          </div>
          <div className="px-3.5 py-1.5 rounded-xl border border-white/[0.08] bg-black/50 font-mono text-xs text-white shrink-0 self-start md:self-auto">
            Format: {activeTrack.format}
          </div>
        </div>

        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8 max-w-3xl">
          {activeTrack.scope}
        </p>

        {/* ── BENTO GRID: Lab Deep Dive Architecture (Pure Square Geometry) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Bento Tile 1: Simulated Stress-Test Incident (1x1 Square) */}
          <div className="aspect-square p-5 sm:p-6 rounded-3xl border border-white/15 bg-gradient-to-br from-[#090B14] via-[#06070B] to-[#04060C] shadow-lg flex flex-col justify-between overflow-hidden soft-card">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>INCIDENT SIMULATION</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-zinc-400 border border-white/[0.06]">
                  Floor Case
                </span>
              </div>
              <div className="text-xs sm:text-sm text-white font-medium mb-3 leading-relaxed line-clamp-4">
                "{activeScenario.scenario}"
              </div>
            </div>
            <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-1 text-[11px] font-mono text-zinc-300">
              <span className="text-white font-bold text-[10px]">LAB OBJECTIVE:</span>
              <span className="line-clamp-2 leading-tight">{activeScenario.simulationGoal}</span>
            </div>
          </div>

          {/* Bento Tile 2: Intake Specification (1x1 Square) */}
          <div className="aspect-square p-5 sm:p-6 rounded-3xl border border-white/[0.08] bg-[#090B14] shadow-lg flex flex-col justify-between overflow-hidden soft-card">
            <div>
              <div className="font-mono text-xs text-white uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                <span>INTAKE SPEC</span>
              </div>
              <div className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                {activeTrack.format}
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Small operational cohorts structured for immersive hands-on floor simulation with verified industry tooling.
              </p>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-zinc-300 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Certified Capacity</span>
            </div>
          </div>

          {/* Bento Tile 3: Operational Mastery Outcomes (1x1 Square) */}
          <div className="aspect-square p-5 sm:p-6 rounded-3xl border border-white/[0.08] bg-[#090B14] shadow-lg flex flex-col justify-between overflow-hidden soft-card">
            <div>
              <div className="text-xs font-mono text-white uppercase tracking-wider mb-2.5 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>MASTERY OUTCOMES</span>
              </div>
              <ul className="space-y-2">
                {activeTrack.outcomes.map((out, oIdx) => (
                  <li key={oIdx} className="flex items-start gap-2 text-[11px] text-zinc-300 leading-snug">
                    <span className="text-white font-bold font-mono shrink-0">✓</span>
                    <span className="line-clamp-2">{out}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-2.5 border-t border-white/[0.06] text-[10px] font-mono text-zinc-500">
              Scenario arbitration testing
            </div>
          </div>

          {/* Bento Tile 4: Workflow Environments (1x1 Square) */}
          <div className="aspect-square p-5 sm:p-6 rounded-3xl border border-white/[0.08] bg-[#090B14] shadow-lg flex flex-col justify-between overflow-hidden soft-card">
            <div>
              <div className="text-xs font-mono text-white uppercase tracking-wider mb-3 font-semibold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>WORKFLOW TOOLS</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {activeTrack.keyTools.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg border border-white/[0.08] bg-black/40 font-mono text-xs text-white"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-[10px] font-mono text-zinc-500">
              Direct telemetry schema integration
            </div>
          </div>
        </div>

        {/* Enrollment / Session Request */}
        <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-xs font-mono text-zinc-400">
            Intake cadence: Small operational cohorts structured for immersive floor simulation.
          </span>
          <Link
            to={`/start?mode=lab&track=${activeTrack.id}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-zinc-200 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md active:scale-95"
          >
            <span>Request Lab Session / Cohort Intake</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </main>
  );
}
