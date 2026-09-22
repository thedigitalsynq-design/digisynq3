import { useState } from 'react';
import { CASE_INTERVENTIONS } from '../../data/ecosystemData';
import { CaseIntervention } from '../types';
import { playPing } from '../../utils/audio';
import { 
  Sparkles, 
  ArrowRight, 
  AlertOctagon, 
  Wrench, 
  Network, 
  TrendingUp,
  History,
  FileCheck2
} from 'lucide-react';

interface CaseInterventionsProps {
  onOpenProjectModal: (caseTitle?: string) => void;
}

export function CaseInterventions({ onOpenProjectModal }: CaseInterventionsProps) {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CASE_INTERVENTIONS[0].id);

  const activeCase: CaseIntervention = CASE_INTERVENTIONS.find(c => c.id === selectedCaseId) || CASE_INTERVENTIONS[0];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="border-b border-white/10 pb-6 space-y-3">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-400">
          <History className="w-3.5 h-3.5" />
          <span>INTERVENTION ARCHIVES // NO GENERIC CASE LOGOS</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              SYNQ INTERVENTION AUDITS
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-2xl font-light mt-1">
              We do not publish glossy marketing case studies with stock screenshots. We document architectural interventions: what was broken, how we synchronized the nodes, and the verified commercial outcome.
            </p>
          </div>

          <button
            id="interventions-start-project-btn"
            onClick={() => {
              playPing(640, 'triangle', 0.08);
              onOpenProjectModal(`Intervention Case: ${activeCase.clientArchetype}`);
            }}
            className="px-4 py-2 bg-white text-black font-mono text-xs font-bold tracking-wider hover:bg-neutral-200 transition-colors shrink-0 flex items-center gap-2"
          >
            <span>DISCUSS AN INTERVENTION</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Case Selector Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono">
        {CASE_INTERVENTIONS.map((item, idx) => {
          const isActive = item.id === selectedCaseId;
          return (
            <button
              key={item.id}
              id={`case-tab-${item.id}`}
              onClick={() => {
                playPing(480, 'sine', 0.05);
                setSelectedCaseId(item.id);
              }}
              className={`p-4 text-left rounded-sm border transition-all relative ${
                isActive
                  ? 'bg-blue-950/40 border-blue-400 text-white shadow-lg shadow-blue-500/10'
                  : 'bg-white/[0.02] border-white/10 text-white/60 hover:border-white/20 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] text-white/40 mb-1">
                <span>AUDIT 0{idx + 1}</span>
                <span>{item.timeline}</span>
              </div>
              <div className="font-display font-bold text-sm text-white line-clamp-1">
                {item.clientArchetype}
              </div>
              <div className="text-[11px] font-sans text-white/50 mt-1">
                {item.sector}
              </div>
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-400" />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Case Deep Dive: BEFORE → FRAGMENTATION → INTERVENTION → SYNCHRONIZATION → OUTCOME */}
      <div className="space-y-6">
        
        {/* Case Meta Header */}
        <div className="p-6 rounded-sm bg-[#0C0F17] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest block mb-1">
              ARCHITECTURAL DEPLOYMENT DOSSIER
            </span>
            <h3 className="font-display font-bold text-2xl text-white">
              {activeCase.clientArchetype}
            </h3>
            <span className="text-xs font-mono text-white/50 mt-1 block">
              {activeCase.sector} // {activeCase.timeline}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-xs flex items-center gap-1.5">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>VERIFIED AUDIT RECORD</span>
            </span>
          </div>
        </div>

        {/* The 5-Phase Sequence */}
        <div className="grid grid-cols-1 gap-6">
          
          {/* 1. BEFORE */}
          <div className="p-6 rounded-sm bg-[#0B0D13] border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-white/60 font-mono text-xs tracking-wider">
              <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white">
                01
              </span>
              <span className="font-bold text-white">BEFORE // WHAT EXISTED?</span>
            </div>
            <p className="text-sm text-white/80 font-sans leading-relaxed">
              {activeCase.before.existingAssets}
            </p>
            <div className="font-mono text-xs text-white/50 bg-white/5 p-2 rounded-xs border border-white/5">
              &gt; Baseline Scale: {activeCase.before.scale}
            </div>
          </div>

          {/* 2. FRAGMENTATION */}
          <div className="p-6 rounded-sm bg-amber-950/10 border border-amber-500/20 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs tracking-wider">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-[10px] text-amber-400">
                  02
                </span>
                <span className="font-bold">FRAGMENTATION // WHAT WASN'T CONNECTED?</span>
              </div>
              <AlertOctagon className="w-4 h-4 text-amber-400" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeCase.fragmentation.breakagePoints.map((pt, idx) => (
                <div key={idx} className="p-3 bg-white/[0.02] border border-white/5 rounded-xs text-xs text-amber-100/90 leading-relaxed flex items-start gap-2">
                  <span className="text-amber-400 font-mono shrink-0">&times;</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="font-mono text-xs text-amber-300/80 bg-amber-950/30 p-2.5 rounded-xs border border-amber-800/30">
              &gt; Measured Inefficiency Cost: {activeCase.fragmentation.inefficiencyDrag}
            </div>
          </div>

          {/* 3. INTERVENTION */}
          <div className="p-6 rounded-sm bg-[#0C0F17] border border-blue-500/30 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-xs tracking-wider">
                <span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] text-blue-400">
                  03
                </span>
                <span className="font-bold">INTERVENTION // WHAT SYNQ-SQUARE CHANGED</span>
              </div>
              <Wrench className="w-4 h-4 text-blue-400" />
            </div>

            <div className="font-display font-semibold text-lg text-white">
              {activeCase.intervention.architecture}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeCase.intervention.engineeredLayers.map((layer, idx) => (
                <div key={idx} className="p-3 bg-white/[0.02] border border-white/5 rounded-xs text-xs text-white/90 leading-relaxed flex items-start gap-2">
                  <span className="text-blue-400 font-mono shrink-0">&rarr;</span>
                  <span>{layer}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. SYNCHRONIZATION */}
          <div className="p-6 rounded-sm bg-[#0D111A] border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-wider">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px] text-emerald-400">
                  04
                </span>
                <span className="font-bold">SYNCHRONIZATION // HOW TOUCHPOINTS WERE UNIFIED</span>
              </div>
              <Network className="w-4 h-4 text-emerald-400" />
            </div>

            <p className="text-sm text-white/90 font-sans leading-relaxed">
              {activeCase.synchronization.howTouchpointsUnified}
            </p>

            <div className="space-y-1.5 pt-2">
              <span className="font-mono text-[10px] text-white/40 block uppercase">
                UNIFIED REAL-TIME DATA PIPELINE:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {activeCase.synchronization.syncPipeline.map((pipe, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-xs font-mono text-xs text-emerald-400">
                      {pipe}
                    </span>
                    {pIdx < activeCase.synchronization.syncPipeline.length - 1 && (
                      <span className="text-white/30 font-mono text-xs">&rarr;</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5. OUTCOME */}
          <div className="p-6 rounded-sm bg-gradient-to-br from-blue-950/30 to-black border border-blue-500/40 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-mono text-xs tracking-wider">
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] text-white">
                  05
                </span>
                <span className="font-bold">OUTCOME // VERIFIED RESULTS ONLY</span>
              </div>
              <TrendingUp className="w-4 h-4 text-white" />
            </div>

            {/* 3 Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[activeCase.outcome.metric1, activeCase.outcome.metric2, activeCase.outcome.metric3].map((m, mIdx) => (
                <div key={mIdx} className="p-4 bg-white/5 border border-white/10 rounded-xs space-y-1">
                  <span className="font-mono text-[10px] text-white/50 block">{m.label}</span>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                    {m.value}
                  </div>
                  <span className="font-mono text-xs text-emerald-400 block pt-1">{m.shift}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
              <p className="font-mono text-xs text-white/60">
                &gt; {activeCase.outcome.verifiedSummary}
              </p>

              <button
                onClick={() => {
                  playPing(680, 'triangle', 0.08);
                  onOpenProjectModal(`Audit Review: ${activeCase.clientArchetype}`);
                }}
                className="px-4 py-2 bg-white text-black font-mono text-xs font-bold rounded-xs hover:bg-neutral-200 transition-colors shrink-0 flex items-center gap-2"
              >
                <span>REQUEST COMPLETE ARCHITECTURE DOSSIER</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
