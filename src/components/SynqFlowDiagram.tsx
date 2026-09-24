import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronDown, Play, Pause, RotateCcw, Sparkles, Activity } from 'lucide-react';
import { playNodeBlip, playClickSound, playHoverSound, playSuccessChime } from '../utils/audio';

const SYNQ_STAGES = [
  {
    id: 'problem',
    number: '01',
    label: 'Problem',
    headline: 'Start with a real problem.',
    description: 'Every SYNQ begins with a specific, identifiable problem. Not a vague brief. Not a general need. A concrete gap in the filmmaking ecosystem — a technician that cannot be found, a studio that sits empty, content that has no distribution pathway, a crew that lacks a skill.',
    note: 'The problem is the entry point. Everything else follows from it.',
    icon: '🔍',
    metric: 'Friction Level: HIGH',
  },
  {
    id: 'map',
    number: '02',
    label: 'Map',
    headline: 'Map the ecosystem around it.',
    description: 'Before attempting to solve the problem, we map what already exists. What resources are available? What skills are present? What dependencies does this problem have? What is connected and what is missing? Mapping prevents solutions that ignore context.',
    note: 'An unmapped problem is usually misunderstood.',
    icon: '🗺️',
    metric: 'Cluster Radius: 12 Nodes',
  },
  {
    id: 'gap',
    number: '03',
    label: 'Find the gap',
    headline: 'Identify precisely where value is lost.',
    description: 'The gap is specific. It is the exact place where a connection does not exist, where a resource is underutilized, where information is missing, or where coordination is absent. Finding the gap means understanding what is actually missing, not what seems to be missing.',
    note: 'The gap is where DigiSynq operates.',
    icon: '⬥',
    metric: 'Loss Identified: ₹1.4Cr Waste',
  },
  {
    id: 'synq',
    number: '04',
    label: 'Synq',
    headline: 'Connect the right elements.',
    description: 'With the gap identified, the SYNQ is the act of connecting the right participants, resources, and information to address it. This may mean connecting a producer with a verified technician. A project with available equipment. A creator with a distribution pathway. The connection is intentional and specific.',
    note: 'DigiSynq does not own the resources. It connects them.',
    icon: '⟡',
    metric: 'Direct Bridge: Active',
  },
  {
    id: 'coordinate',
    number: '05',
    label: 'Coordinate',
    headline: 'Keep the system working together.',
    description: 'Connecting is not enough. Coordination ensures that the connected participants work together effectively — timing, communication, accountability, and follow-through. This is often where fragmentation re-emerges if not actively managed.',
    note: 'Coordination is an ongoing process, not a single moment.',
    icon: '⚙️',
    metric: 'Sync Rate: 99.4%',
  },
  {
    id: 'execute',
    number: '06',
    label: 'Execute',
    headline: 'The work gets done.',
    description: 'The participants do their work. The DigiSynq coordination layer supports execution without replacing the people doing it. The goal is not to become the executor of everything. The goal is to make execution less difficult.',
    note: 'DigiSynq supports the team. It does not replace the team.',
    icon: '🎬',
    metric: 'On-Schedule: Verified',
  },
  {
    id: 'measure',
    number: '07',
    label: 'Measure',
    headline: 'Understand what happened.',
    description: 'After execution, measure the outcome against the original problem. Did the gap get addressed? What worked? What did not? What took longer than expected? What cost more? What created unexpected value? Measurement creates the data that improves future coordination.',
    note: 'Without measurement, learning does not happen systematically.',
    icon: '📊',
    metric: 'Box Office ROI: +4.2x',
  },
  {
    id: 'learn',
    number: '08',
    label: 'Learn',
    headline: 'Build better coordination over time.',
    description: 'Every problem solved, every gap found, every SYNQ completed adds to a growing body of knowledge. Over time, this creates pattern recognition — the ability to identify gaps faster, connect the right participants more accurately, and coordinate with less friction.',
    note: 'The long-term asset is knowledge and process.',
    icon: '🧠',
    metric: 'Neural Weights Saved',
  },
  {
    id: 'resilient',
    number: '09',
    label: 'Re-synq',
    headline: 'The ecosystem keeps changing. The loop continues.',
    description: 'Cinema is not static. Projects end and new ones begin. Participants grow, change, and move. Markets shift. Technology evolves. The loop continues — new problems arise, new gaps appear, and the coordination process begins again, informed by everything learned before.',
    note: 'This is the DigiSynq operating loop.',
    icon: '↺',
    metric: 'Continuous Ecosystem Vitality',
  },
];

interface SynqFlowDiagramProps {
  compact?: boolean;
}

export function SynqFlowDiagram({ compact = false }: SynqFlowDiagramProps) {
  const [activeStage, setActiveStage] = useState<string | null>('problem');
  const [isSimulating, setIsSimulating] = useState(false);

  // Kinetic Loop Simulation Timer
  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      setActiveStage((prev) => {
        const currentIndex = SYNQ_STAGES.findIndex((s) => s.id === prev);
        const nextIndex = (currentIndex + 1) % SYNQ_STAGES.length;
        playNodeBlip(nextIndex);
        if (nextIndex === SYNQ_STAGES.length - 1) {
          playSuccessChime();
        }
        return SYNQ_STAGES[nextIndex].id;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, [isSimulating]);

  const handleSelectStage = (id: string, index: number) => {
    setIsSimulating(false);
    playClickSound();
    playNodeBlip(index);
    setActiveStage(activeStage === id ? null : id);
  };

  const toggleSimulation = () => {
    playClickSound();
    setIsSimulating((prev) => !prev);
  };

  const active = SYNQ_STAGES.find((s) => s.id === activeStage);
  const activeIndex = SYNQ_STAGES.findIndex((s) => s.id === activeStage);

  return (
    <div className="w-full space-y-4" role="region" aria-label="The SYNQ operating loop">
      {/* Simulation Command Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-[#090C17] border border-white/[0.08] shadow-inner">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isSimulating ? 'bg-[#D4F838]' : 'bg-white/30'} opacity-75`} />
            <span className={`relative inline-flex rounded-full h-2 w-2 ${isSimulating ? 'bg-[#D4F838]' : 'bg-white/40'}`} />
          </span>
          <span className="text-[11px] font-mono text-white/70">
            {isSimulating ? 'Kinetic Loop Simulation Active' : 'Operating Loop Interactive Deck'}
          </span>
          {active && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#23B272]/10 text-[#D4F838] border border-[#23B272]/30">
              Stage {active.number}: {active.label}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleSimulation}
            onMouseEnter={() => playHoverSound()}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
              isSimulating
                ? 'bg-[#0D281E] text-[#D4F838] border border-[#B6F02A]/40'
                : 'bg-[#23B272]/20 text-[#52E3A4] border border-[#23B272]/40 hover:bg-[#23B272]/30'
            }`}
          >
            {isSimulating ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-current" />}
            <span>{isSimulating ? 'Pause Loop' : 'Simulate Loop'}</span>
          </button>

          <button
            onClick={() => {
              setIsSimulating(false);
              setActiveStage('problem');
              playClickSound();
            }}
            onMouseEnter={() => playHoverSound()}
            className="p-1 rounded-lg border border-white/10 text-white/40 hover:text-white hover:bg-white/5 transition-all"
            title="Reset to Stage 01"
            aria-label="Reset loop to stage 1"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>

      {compact ? (
        /* Horizontal flow for compact embedding */
        <div className="w-full overflow-x-auto pb-2">
          <div className="flex items-center gap-1.5 min-w-max p-1">
            {SYNQ_STAGES.map((stage, i) => {
              const isCurrent = activeStage === stage.id;
              return (
                <React.Fragment key={stage.id}>
                  <button
                    onClick={() => handleSelectStage(stage.id, i)}
                    onMouseEnter={() => playHoverSound()}
                    className={`flex flex-col items-center gap-1.5 px-3.5 py-3 rounded-xl border text-center transition-all min-w-[88px] relative ${
                      isCurrent
                        ? 'border-[#B6F02A] bg-[#23B272]/15 text-[#D4F838] shadow-[0_0_15px_rgba(35,178,114,0.25)]'
                        : 'border-white/[0.06] bg-[#0E1120]/60 text-white/50 hover:text-white hover:border-white/20'
                    }`}
                  >
                    <span className="text-lg" role="img" aria-hidden="true">{stage.icon}</span>
                    <span className="label-mono text-[9px] font-bold">{stage.number}</span>
                    <span className="label-mono text-[9px] leading-tight font-medium">{stage.label}</span>
                  </button>
                  {i < SYNQ_STAGES.length - 1 && (
                    <div className="flex items-center text-white/20 px-0.5">
                      <ChevronRight className={`w-3.5 h-3.5 ${activeIndex > i ? 'text-[#D4F838] animate-pulse' : ''}`} />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Expanded detail card */}
          {active && (
            <div className="mt-4 p-5 rounded-2xl border border-[#23B272]/30 bg-gradient-to-r from-[#0D281E]/60 to-transparent backdrop-blur-md space-y-3 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#23B272]/10 border border-[#23B272]/30 flex items-center justify-center text-xl">
                    {active.icon}
                  </div>
                  <div>
                    <span className="label-mono text-[#D4F838] text-[10px] font-bold">
                      PHASE {active.number} // {active.label}
                    </span>
                    <h4 className="text-base font-denton font-black text-white">{active.headline}</h4>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-[#52E3A4] px-3 py-1 rounded-full bg-[#0D281E]/60 border border-[#23B272]/40">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>{active.metric}</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">{active.description}</p>
              <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06]">
                <Sparkles className="w-3 h-3 text-[#D4F838]" />
                <p className="text-[11px] text-[#52E3A4] font-mono italic">{active.note}</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Full detailed vertical layout */
        <div className="space-y-3" role="region" aria-label="The SYNQ operating loop — detailed view">
          {SYNQ_STAGES.map((stage, i) => {
            const isActive = activeStage === stage.id;
            return (
              <div key={stage.id} className="relative">
                {/* Connector line */}
                <div className={`absolute left-[27px] top-[56px] bottom-0 w-px z-0 transition-colors ${
                  activeIndex > i ? 'bg-[#23B272]/50' : 'bg-white/[0.06]'
                }`} />

                <button
                  onClick={() => handleSelectStage(stage.id, i)}
                  onMouseEnter={() => playHoverSound()}
                  className={`relative z-10 w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${
                    isActive
                      ? 'border-[#B6F02A]/50 bg-[#0D281E]/40 shadow-[0_0_20px_rgba(35,178,114,0.1)]'
                      : 'border-white/[0.06] bg-[#0E1120]/60 hover:border-white/15'
                  }`}
                  aria-expanded={isActive}
                >
                  <div className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center gap-0.5 flex-shrink-0 border transition-all ${
                    isActive ? 'border-[#B6F02A]/40 bg-[#23B272]/10' : 'border-white/[0.08] bg-[#06130E]'
                  }`}>
                    <span className="text-lg" role="img" aria-hidden="true">{stage.icon}</span>
                    <span className={`label-mono text-[9px] font-bold ${isActive ? 'text-[#D4F838]' : 'text-white/40'}`}>
                      {stage.number}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`label-mono text-[9px] font-semibold uppercase ${isActive ? 'text-[#D4F838]' : 'text-white/40'}`}>
                        {stage.label}
                      </span>
                      {isActive && (
                        <span className="text-[10px] font-mono px-2 py-0.2 rounded-full bg-[#23B272]/10 text-[#52E3A4] border border-[#23B272]/20">
                          {stage.metric}
                        </span>
                      )}
                    </div>
                    <p className="text-sm sm:text-base font-denton font-black text-white leading-tight">
                      {stage.headline}
                    </p>
                  </div>

                  <ChevronDown className={`w-4 h-4 text-white/30 flex-shrink-0 transition-transform ${isActive ? 'rotate-180 text-[#D4F838]' : ''}`} />
                </button>

                {isActive && (
                  <div className="relative z-10 mt-2 ml-[74px] p-5 rounded-xl bg-[#090B14]/90 border border-[#23B272]/20 backdrop-blur-sm space-y-3">
                    <p className="text-sm text-white/80 leading-relaxed">{stage.description}</p>
                    <div className="flex items-start gap-2 pt-2 border-t border-white/[0.06]">
                      <span className="text-[#D4F838] text-xs mt-0.5">▸</span>
                      <p className="text-xs text-[#52E3A4] font-mono italic">{stage.note}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

