import React, { useState } from 'react';
import { RefreshCw, ArrowRight, Layers, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface CircularPhase {
  id: string;
  name: string;
  angle: number; // in degrees
  desc: string;
  keyOutputs: string;
  chokePoint: string;
  synqIntervention: string;
}

const CIRCULAR_PHASES: CircularPhase[] = [
  {
    id: 'creation',
    name: 'CREATION',
    angle: 0,
    desc: 'Development of intellectual property, original screenplays, musical compositions, and casting attachments.',
    keyOutputs: 'Packageable IP, Locked Scripts, Attached Lead Talent',
    chokePoint: 'Fragmented talent discovery & unverified availability schedules (B001)',
    synqIntervention: 'SYNQ.TALENT live availability registry & IP package verification'
  },
  {
    id: 'production',
    name: 'PRODUCTION',
    angle: 60,
    desc: 'Physical filming on soundstages, location permits, crew coordination, dailies, and VFX turnovers.',
    keyOutputs: 'Raw Negative / ARRIRAW, Audio Stems, Conformed Dailies',
    chokePoint: 'Soundstage schedule slip & plate turnover delays to post (B007 / B025)',
    synqIntervention: 'SYNQ.CASCADE schedule buffer routing & dark floor exchange'
  },
  {
    id: 'distribution',
    name: 'DISTRIBUTION',
    angle: 120,
    desc: 'Theatrical release scheduling, international territorial licensing, streaming platform QC, and day-and-date marketing.',
    keyOutputs: 'Master IMF Delivery Packages, Theatrical DCPs, Localization Audio',
    chokePoint: 'Cross-border rights licensing & master QC specification rejection (B013)',
    synqIntervention: 'SYNQ.FINISH predictive QC gate & automated clearance'
  },
  {
    id: 'consumption',
    name: 'CONSUMPTION',
    angle: 180,
    desc: 'Audience viewing across cinema screens, connected TV apps, mobile feeds, and linear broadcast networks.',
    keyOutputs: 'Box Office Receipts, Stream Hours, Engagement Telemetry',
    chokePoint: 'Opaque streaming viewership metrics & audience discovery fatigue (B031)',
    synqIntervention: 'SYNQ.RADAR holistic demand telemetry & audience sentiment graph'
  },
  {
    id: 'revenue',
    name: 'REVENUE',
    angle: 240,
    desc: 'Collection of theatrical box office, platform licensing fees, music sync royalties, and backend profit points.',
    keyOutputs: 'Disbursed Royalties, CAMA Collections, Producer Net Profits',
    chokePoint: 'Uncollected international royalties & 18-month accounting lags (B039)',
    synqIntervention: 'SYNQ.RIGHTS automated chain-of-title & multi-territory clearance'
  },
  {
    id: 'investment',
    name: 'INVESTMENT',
    angle: 300,
    desc: 'Private equity slate financing, debt facilities, tax incentive monetizations, and completion bond underwriting.',
    keyOutputs: 'Greenlit Production Budgets, Completion Bond Covenants',
    chokePoint: 'Slate underwriting opacity & unpredictable cost cascade exposure (B004)',
    synqIntervention: 'SYNQ.UNDERWRITE deterministic risk scoring & completion warranties'
  }
];

const SURROUNDING_FORCES = [
  'PEOPLE',
  'MONEY',
  'INFORMATION',
  'TECHNOLOGY',
  'RIGHTS',
  'REGULATION',
  'TRUST',
  'COORDINATION',
  'DECISION-MAKING',
  'MARKET FORCES'
];

export function EERGCircularMap() {
  const [activePhaseId, setActivePhaseId] = useState<string>('creation');
  const activePhase = CIRCULAR_PHASES.find((p) => p.id === activePhaseId) || CIRCULAR_PHASES[0];

  return (
    <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl relative overflow-hidden" id="macro-ecosystem-map">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-white/[0.02] blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-white font-mono text-xs font-semibold mb-3">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>MACRO ECOSYSTEM MODEL</span>
            <span className="text-zinc-600">//</span>
            <span>CIRCULAR CONTINUOUS FLYWHEEL</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            The Circular Entertainment Engine
          </h2>
          <p className="text-sm text-zinc-300 mt-2 max-w-2xl leading-relaxed">
            Entertainment is not a linear conveyor belt. It is a continuous circular feedback loop where investment flows into creation, production, distribution, consumption, and back into capital.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-black/60 px-4 py-2 rounded-xl border border-white/[0.08]">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span>6 Core Lifecycle Phases</span>
          <span className="text-zinc-600">/</span>
          <span>10 Surrounding Forces</span>
        </div>
      </div>

      {/* 10 Surrounding Forces Orbiting Header Bar */}
      <div className="mb-8">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2 font-semibold">
          THE 10 SURROUNDING GOVERNING FORCES:
        </span>
        <div className="flex flex-wrap gap-1.5">
          {SURROUNDING_FORCES.map((force, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.04] text-zinc-300 border border-white/[0.08] hover:border-white/20 transition-colors"
            >
              {force}
            </span>
          ))}
        </div>
      </div>

      {/* Circular Grid & Detail Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Interactive Circular Wheel (Lg: 7 cols) */}
        <div className="lg:col-span-7 flex justify-center py-4">
          <div className="relative w-full max-w-md aspect-square rounded-full border border-white/15 bg-black/40 p-6 flex items-center justify-center shadow-2xl">
            {/* Center Core */}
            <div className="w-36 h-36 rounded-full bg-[#090B14] border border-white/20 flex flex-col items-center justify-center text-center p-3 z-10 shadow-2xl">
              <span className="text-[9px] font-mono text-zinc-400 tracking-wider">ECOSYSTEM CORE</span>
              <div className="text-sm font-black text-white mt-0.5">DIGISYNQ</div>
              <span className="text-[9px] text-zinc-500 mt-1 font-mono">Synchronization Infrastructure</span>
            </div>

            {/* Orbit Ring */}
            <div className="absolute inset-8 rounded-full border border-dashed border-white/10 pointer-events-none" />

            {/* 6 Circular Phase Nodes */}
            {CIRCULAR_PHASES.map((p, idx) => {
              const radius = 135; // px from center
              const angleRad = (p.angle - 90) * (Math.PI / 180);
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;
              const isSelected = activePhaseId === p.id;

              return (
                <button
                  key={p.id}
                  onClick={() => setActivePhaseId(p.id)}
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                  className={`absolute w-24 h-16 -ml-12 -mt-8 rounded-xl border flex flex-col items-center justify-center p-1.5 transition-all text-center ${
                    isSelected
                      ? 'bg-white text-black border-white shadow-xl scale-110 z-20 font-bold'
                      : 'bg-[#090B14] border-white/15 text-zinc-300 hover:border-white/40 hover:text-white z-10'
                  }`}
                >
                  <span className={`text-[8px] font-mono tracking-wider ${isSelected ? 'text-zinc-700' : 'text-zinc-500'}`}>
                    0{idx + 1} // PHASE
                  </span>
                  <span className="text-[11px] font-extrabold line-clamp-1">
                    {p.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Phase Detailed Inspector (Lg: 5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-black/60 border border-white/15 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-white font-bold bg-white/10 px-2 py-0.5 rounded border border-white/20">
                ACTIVE PHASE INSPECTOR
              </span>
              <span className="text-[10px] font-mono text-zinc-500">
                Circular Continuum
              </span>
            </div>

            <h3 className="text-2xl font-black text-white mb-2">
              {activePhase.name}
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed mb-6 font-light">
              {activePhase.desc}
            </p>

            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-[#090B14] border border-white/[0.06]">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                  KEY VALUE DELIVERABLES:
                </span>
                <span className="text-xs font-semibold text-zinc-200">
                  {activePhase.keyOutputs}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#090B14] border border-red-500/20">
                <span className="text-[10px] font-mono text-red-400 uppercase tracking-wider block mb-1 font-semibold">
                  PRIMARY BOTTLENECK CHOKE POINT:
                </span>
                <span className="text-xs text-zinc-300">
                  {activePhase.chokePoint}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.06] border border-white/20">
                <span className="text-[10px] font-mono text-white uppercase tracking-wider block mb-1 font-bold">
                  DIGISYNQ INTERVENTION:
                </span>
                <span className="text-xs font-bold text-white">
                  {activePhase.synqIntervention}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-500">
            <span>Loops continuously into next stage</span>
            <span className="text-white">100% Closed Loop →</span>
          </div>
        </div>
      </div>
    </div>
  );
}
