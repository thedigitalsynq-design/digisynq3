import { useState } from 'react';
import { OUTCOME_SYSTEMS, ECOSYSTEM_NODES } from '../../data/ecosystemData';
import { OutcomeCategory } from '../types';
import { playPing } from '../../utils/audio';
import { Layers, ArrowRight, CheckCircle, Network, Shield, Cpu } from 'lucide-react';

interface OutcomesMatrixProps {
  onOpenProjectModal: (preselectedNode?: string) => void;
  onNavigateToNode: (nodeId: string) => void;
}

export function OutcomesMatrix({ onOpenProjectModal, onNavigateToNode }: OutcomesMatrixProps) {
  const [selectedOutcome, setSelectedOutcome] = useState<OutcomeCategory>('BUILD');

  const currentSystem = OUTCOME_SYSTEMS.find(s => s.id === selectedOutcome) || OUTCOME_SYSTEMS[0];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-10 animate-fadeIn">
      
      {/* Header Definition */}
      <div className="border-b border-white/10 pb-6 space-y-3">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-400">
          <Layers className="w-3.5 h-3.5" />
          <span>OUTCOME ARCHITECTURE // NO DISJOINTED SERVICES</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              WHAT CAN BE SYNCHRONIZED?
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-2xl font-light mt-1">
              Traditional agencies bill for disconnected services. SYNQ-SQUARE engineers unified commercial systems across five compounding outcomes.
            </p>
          </div>

          <button
            id="outcomes-build-presence-cta"
            onClick={() => {
              playPing(600, 'triangle', 0.08);
              onOpenProjectModal(`Outcome: ${currentSystem.id}`);
            }}
            className="px-4 py-2 bg-white text-black font-mono text-xs font-bold tracking-wider hover:bg-neutral-200 transition-colors shrink-0 flex items-center gap-2"
          >
            <span>SYNCHRONIZE {currentSystem.id}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 5 Outcomes Tab Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 font-mono">
        {OUTCOME_SYSTEMS.map((system) => {
          const isActive = system.id === selectedOutcome;
          return (
            <button
              key={system.id}
              id={`outcome-tab-${system.id}`}
              onClick={() => {
                playPing(480, 'sine', 0.06);
                setSelectedOutcome(system.id);
              }}
              className={`p-4 text-left border rounded-sm transition-all relative ${
                isActive
                  ? 'bg-blue-950/40 border-blue-400 text-white shadow-lg shadow-blue-500/10'
                  : 'bg-white/[0.02] border-white/10 text-white/60 hover:border-white/25 hover:text-white'
              }`}
            >
              <div className="text-[10px] text-white/40 mb-1">SYSTEM 0{OUTCOME_SYSTEMS.indexOf(system) + 1}</div>
              <div className="font-display font-extrabold text-lg tracking-wider text-white">
                {system.id}
              </div>
              <p className="text-[11px] font-sans text-white/50 line-clamp-1 mt-1">
                {system.headline}
              </p>
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-400" />
              )}
            </button>
          );
        })}
      </div>

      {/* Active System Overview Panel */}
      <div className="p-6 sm:p-8 rounded-sm bg-[#0C0F17] border border-white/10 space-y-8">
        
        {/* System Headline and Primary Nodes */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs text-blue-400 tracking-wider block mb-1">
              SYSTEM DEFINITION
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              {currentSystem.headline}
            </h3>
            <p className="text-white/80 text-sm sm:text-base font-light mt-2 max-w-2xl">
              {currentSystem.tagline}
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-sm shrink-0 space-y-2">
            <span className="font-mono text-[10px] text-white/40 tracking-wider block">
              PRIMARY FOOTPRINT NODES
            </span>
            <div className="flex flex-wrap gap-1.5">
              {currentSystem.primaryNodes.map((nId) => {
                const nodeObj = ECOSYSTEM_NODES.find(n => n.id === nId);
                return (
                  <button
                    key={nId}
                    onClick={() => onNavigateToNode(nId)}
                    className="px-2.5 py-1 bg-blue-950/60 border border-blue-500/40 text-blue-300 font-mono text-xs rounded-xs hover:bg-blue-900/80 transition-colors uppercase flex items-center gap-1.5"
                  >
                    <Network className="w-3 h-3" />
                    <span>{nodeObj?.label || nId}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4 Architectural Components */}
        <div>
          <div className="font-mono text-xs text-white/50 tracking-wider mb-4">
            ENGINEERED COMPONENTS ({currentSystem.components.length} INTEGRATED MODULES)
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentSystem.components.map((comp, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-sm bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="font-display font-bold text-base text-white">
                    {comp.title}
                  </div>
                  <span className="font-mono text-[10px] text-blue-400 bg-blue-950/30 px-1.5 py-0.5 rounded-xs border border-blue-900/40">
                    MODULE 0{idx + 1}
                  </span>
                </div>

                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  {comp.description}
                </p>

                <div className="pt-2 border-t border-white/5 flex items-start gap-2">
                  <span className="font-mono text-[10px] text-white/40 uppercase shrink-0 mt-0.5">INTERCONNECT:</span>
                  <span className="font-mono text-[11px] text-emerald-400/90 leading-snug">
                    {comp.interconnects}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The SYNQ Outcome Bar */}
        <div className="p-5 rounded-sm bg-blue-950/20 border border-blue-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-blue-300 tracking-wider block">
              SYNQ SYNTHESIS OUTCOME
            </span>
            <p className="font-sans text-sm text-white/90 font-medium">
              {currentSystem.synqOutcome}
            </p>
          </div>

          <button
            onClick={() => {
              playPing(640, 'triangle', 0.08);
              onOpenProjectModal(`Outcome: ${currentSystem.id}`);
            }}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold rounded-xs transition-colors shrink-0 shadow-md shadow-blue-500/20"
          >
            DEPLOY THIS OUTCOME &rarr;
          </button>
        </div>

      </div>

    </div>
  );
}
