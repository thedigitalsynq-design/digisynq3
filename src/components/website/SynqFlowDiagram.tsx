import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

const SYNQ_STAGES = [
  {
    id: 'problem',
    number: '01',
    label: 'Problem',
    headline: 'Start with a real problem.',
    description: 'Every SYNQ begins with a specific, identifiable problem. Not a vague brief. Not a general need. A concrete gap in the filmmaking ecosystem — a technician that cannot be found, a studio that sits empty, content that has no distribution pathway, a crew that lacks a skill.',
    note: 'The problem is the entry point. Everything else follows from it.',
    icon: '🔍',
  },
  {
    id: 'map',
    number: '02',
    label: 'Map',
    headline: 'Map the ecosystem around it.',
    description: 'Before attempting to solve the problem, we map what already exists. What resources are available? What skills are present? What dependencies does this problem have? What is connected and what is missing? Mapping prevents solutions that ignore context.',
    note: 'An unmapped problem is usually misunderstood.',
    icon: '🗺️',
  },
  {
    id: 'gap',
    number: '03',
    label: 'Find the gap',
    headline: 'Identify precisely where value is lost.',
    description: 'The gap is specific. It is the exact place where a connection does not exist, where a resource is underutilized, where information is missing, or where coordination is absent. Finding the gap means understanding what is actually missing, not what seems to be missing.',
    note: 'The gap is where DigiSynq operates.',
    icon: '⬥',
  },
  {
    id: 'synq',
    number: '04',
    label: 'Synq',
    headline: 'Connect the right elements.',
    description: 'With the gap identified, the SYNQ is the act of connecting the right participants, resources, and information to address it. This may mean connecting a producer with a verified technician. A project with available equipment. A creator with a distribution pathway. The connection is intentional and specific.',
    note: 'DigiSynq does not own the resources. It connects them.',
    icon: '⟡',
  },
  {
    id: 'coordinate',
    number: '05',
    label: 'Coordinate',
    headline: 'Keep the system working together.',
    description: 'Connecting is not enough. Coordination ensures that the connected participants work together effectively — timing, communication, accountability, and follow-through. This is often where fragmentation re-emerges if not actively managed.',
    note: 'Coordination is an ongoing process, not a single moment.',
    icon: '⚙️',
  },
  {
    id: 'execute',
    number: '06',
    label: 'Execute',
    headline: 'The work gets done.',
    description: 'The participants do their work. The DigiSynq coordination layer supports execution without replacing the people doing it. The goal is not to become the executor of everything. The goal is to make execution less difficult.',
    note: 'DigiSynq supports the team. It does not replace the team.',
    icon: '🎬',
  },
  {
    id: 'measure',
    number: '07',
    label: 'Measure',
    headline: 'Understand what happened.',
    description: 'After execution, measure the outcome against the original problem. Did the gap get addressed? What worked? What did not? What took longer than expected? What cost more? What created unexpected value? Measurement creates the data that improves future coordination.',
    note: 'Without measurement, learning does not happen systematically.',
    icon: '📊',
  },
  {
    id: 'learn',
    number: '08',
    label: 'Learn',
    headline: 'Build better coordination over time.',
    description: 'Every problem solved, every gap found, every SYNQ completed adds to a growing body of knowledge. Over time, this creates pattern recognition — the ability to identify gaps faster, connect the right participants more accurately, and coordinate with less friction.',
    note: 'The long-term asset is knowledge and process.',
    icon: '🧠',
  },
  {
    id: 'resilient',
    number: '09',
    label: 'Re-synq',
    headline: 'The ecosystem keeps changing. The loop continues.',
    description: 'Cinema is not static. Projects end and new ones begin. Participants grow, change, and move. Markets shift. Technology evolves. The loop continues — new problems arise, new gaps appear, and the coordination process begins again, informed by everything learned before.',
    note: 'This is the DigiSynq operating loop.',
    icon: '↺',
  },
];

interface SynqFlowDiagramProps {
  compact?: boolean;
}

export function SynqFlowDiagram({ compact = false }: SynqFlowDiagramProps) {
  const [activeStage, setActiveStage] = useState<string | null>(null);

  const active = SYNQ_STAGES.find(s => s.id === activeStage);

  if (compact) {
    // Horizontal flow for homepage embedding
    return (
      <div className="w-full overflow-x-auto pb-2" role="region" aria-label="The SYNQ operating loop">
        <div className="flex items-center gap-1 min-w-max">
          {SYNQ_STAGES.map((stage, i) => (
            <React.Fragment key={stage.id}>
              <button
                onClick={() => setActiveStage(activeStage === stage.id ? null : stage.id)}
                className={`flex flex-col items-center gap-1.5 px-3 py-2.5 rounded-xl border text-center transition-all min-w-[80px] ${
                  activeStage === stage.id
                    ? 'border-[#5CE1E6]/40 bg-[#5CE1E6]/08 text-[#5CE1E6]'
                    : 'border-white/[0.06] bg-[#0E1120]/60 text-white/50 hover:text-white hover:border-white/15'
                }`}
                aria-expanded={activeStage === stage.id}
                aria-controls={`stage-detail-${stage.id}`}
              >
                <span className="text-base" role="img" aria-hidden="true">{stage.icon}</span>
                <span className="label-mono text-[9px]">{stage.number}</span>
                <span className="label-mono text-[8px] leading-tight">{stage.label}</span>
              </button>
              {i < SYNQ_STAGES.length - 1 && (
                <ChevronRight className="w-3 h-3 text-white/15 flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Expanded detail */}
        {active && (
          <div
            id={`stage-detail-${active.id}`}
            className="mt-4 p-5 rounded-xl border border-[#5CE1E6]/20 bg-[#5CE1E6]/04 space-y-2"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl" role="img" aria-hidden="true">{active.icon}</span>
              <div>
                <span className="label-mono text-[#5CE1E6] text-[9px]">{active.number} — {active.label}</span>
                <h4 className="text-sm font-denton font-black text-white">{active.headline}</h4>
              </div>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">{active.description}</p>
            <p className="text-[10px] text-[#5CE1E6] font-mono italic">{active.note}</p>
          </div>
        )}
      </div>
    );
  }

  // Full vertical layout for How It Works page
  return (
    <div className="space-y-3" role="region" aria-label="The SYNQ operating loop — detailed view">
      {SYNQ_STAGES.map((stage) => {
        const isActive = activeStage === stage.id;
        return (
          <div key={stage.id} className="relative">
            {/* Connector line */}
            <div className="absolute left-[27px] top-[56px] bottom-0 w-px bg-white/[0.05] z-0" />

            <button
              onClick={() => setActiveStage(isActive ? null : stage.id)}
              className={`relative z-10 w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${
                isActive
                  ? 'border-[#5CE1E6]/30 bg-[#5CE1E6]/06'
                  : 'border-white/[0.06] bg-[#0E1120]/60 hover:border-white/12'
              }`}
              aria-expanded={isActive}
              aria-controls={`stage-full-${stage.id}`}
            >
              <div className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center gap-0.5 flex-shrink-0 border transition-all ${
                isActive ? 'border-[#5CE1E6]/30 bg-[#5CE1E6]/08' : 'border-white/[0.08] bg-[#05060D]'
              }`}>
                <span className="text-lg" role="img" aria-hidden="true">{stage.icon}</span>
                <span className={`label-mono text-[8px] ${isActive ? 'text-[#5CE1E6]' : 'text-white/30'}`}>{stage.number}</span>
              </div>

              <div className="flex-1 min-w-0">
                <div className={`label-mono text-[9px] mb-0.5 ${isActive ? 'text-[#5CE1E6]' : 'text-white/30'}`}>
                  {stage.label}
                </div>
                <p className="text-sm sm:text-base font-denton font-black text-white leading-tight">
                  {stage.headline}
                </p>
              </div>

              <ChevronDown className={`w-4 h-4 text-white/30 flex-shrink-0 transition-transform ${isActive ? 'rotate-180' : ''}`} />
            </button>

            {isActive && (
              <div
                id={`stage-full-${stage.id}`}
                className="relative z-10 mt-2 ml-[74px] p-5 rounded-xl bg-[#090B14] border border-white/[0.06] space-y-3"
              >
                <p className="text-sm text-white/70 leading-relaxed">{stage.description}</p>
                <div className="flex items-start gap-2 pt-1 border-t border-white/[0.05]">
                  <span className="text-[#5CE1E6] text-xs mt-0.5">→</span>
                  <p className="text-[11px] text-[#5CE1E6] font-mono italic">{stage.note}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
