import { EcosystemNode, SubsystemStep } from '../types';
import { X, ArrowRight, Activity, CheckCircle2, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';
import { playPing } from '../../utils/audio';
import { useState } from 'react';

interface NodeDetailModalProps {
  node: EcosystemNode | null;
  onClose: () => void;
  onSelectNode: (nodeId: string) => void;
  onOpenProjectModal: (preselectedNode?: string) => void;
}

export function NodeDetailModal({
  node,
  onClose,
  onSelectNode,
  onOpenProjectModal
}: NodeDetailModalProps) {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);
  const [checkedQuestions, setCheckedQuestions] = useState<Record<number, boolean>>({});

  if (!node) return null;

  const currentStep: SubsystemStep = node.subsystemFlow[selectedStepIndex] || node.subsystemFlow[0];

  const toggleQuestion = (idx: number) => {
    playPing(520, 'sine', 0.05);
    setCheckedQuestions(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        id="node-deep-zoom-card"
        className="relative w-full max-w-5xl bg-[#0B0D12] border border-white/20 rounded-md shadow-2xl overflow-hidden my-auto"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-xs bg-blue-950/30">
              NODE SUBSYSTEM ZOOM
            </span>
            <span className="text-white/40 font-mono text-xs">/</span>
            <span className="font-mono text-xs text-white/70 tracking-widest">{node.category}</span>
          </div>

          <button
            id="close-node-zoom-btn"
            onClick={() => {
              playPing(320, 'triangle', 0.08);
              onClose();
            }}
            className="p-1.5 rounded text-white/50 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Node Title & Strategic Role */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-blue-400 animate-ping rounded-full" />
                <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-white">
                  {node.label}
                </h2>
              </div>
              <p className="text-lg text-white/80 max-w-2xl font-light leading-relaxed">
                {node.shortDescription}
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-4 rounded-sm max-w-sm shrink-0">
              <span className="font-mono text-[10px] text-white/40 tracking-wider block mb-1">
                FOOTPRINT FUNCTION
              </span>
              <p className="font-mono text-xs text-white/90 leading-relaxed">
                {node.roleInFootprint}
              </p>
            </div>
          </div>

          {/* Subsystem Sequence: e.g. Strategy → Profile → Content → Community → Campaign → Analytics */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-white/60 tracking-wider">
                DEEP SUBSYSTEM ARCHITECTURE ({node.subsystemFlow.length} SEQUENCED LAYERS)
              </span>
              <span className="font-mono text-[11px] text-blue-400">
                ACTIVE LAYER: {currentStep.code}
              </span>
            </div>

            {/* Stepper Breadcrumb Chain */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              {node.subsystemFlow.map((step, idx) => {
                const isSelected = idx === selectedStepIndex;
                return (
                  <button
                    key={step.code}
                    id={`subsystem-step-${step.code}`}
                    onClick={() => {
                      playPing(420 + idx * 40, 'sine', 0.06);
                      setSelectedStepIndex(idx);
                    }}
                    className={`text-left p-3 rounded-sm border transition-all relative ${
                      isSelected
                        ? 'bg-blue-950/40 border-blue-400/80 shadow-md shadow-blue-500/10'
                        : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.06]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[10px] text-white/40">{step.code}</span>
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
                    </div>
                    <div className="font-display font-semibold text-sm text-white">
                      {step.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Subsystem Detail Card */}
            <div className="mt-4 p-5 rounded-sm bg-white/[0.02] border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-3">
                <span className="font-mono text-xs text-blue-300">
                  {currentStep.code} // EXECUTION SPECIFICATION
                </span>
                <p className="text-sm text-white/90 leading-relaxed">
                  {currentStep.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {currentStep.signals.map((sig, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-2 py-0.5 rounded-xs bg-white/5 border border-white/10 text-[11px] font-mono text-white/70"
                    >
                      # {sig}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-white/40 tracking-wider block mb-1">
                    SYNQ KPI STANDARD
                  </span>
                  <div className="font-mono text-base font-bold text-emerald-400">
                    {currentStep.metrics}
                  </div>
                </div>

                <div className="pt-4">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-white/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    Continuous Verification Active
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Capability Demonstration & Diagnostic */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Live Capability Telemetry */}
            <div className="p-5 rounded-sm bg-black/40 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-xs text-white tracking-wider font-semibold">
                    {node.liveSignalDemo.title}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 border border-emerald-800 bg-emerald-950/40 px-2 py-0.5 rounded-xs">
                  LIVE CONDUIT
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {node.liveSignalDemo.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="bg-white/5 p-2.5 rounded-xs border border-white/5">
                    <span className="font-mono text-[9px] text-white/40 block">{m.label}</span>
                    <span className="font-mono text-sm font-bold text-white mt-0.5 block">{m.value}</span>
                  </div>
                ))}
              </div>

              <p className="font-mono text-xs text-white/60 bg-white/[0.02] p-3 rounded border border-white/5">
                &gt; {node.liveSignalDemo.telemetryText}
              </p>
            </div>

            {/* Diagnostic Self-Check */}
            <div className="p-5 rounded-sm bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-white tracking-wider font-semibold flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  FRAGMENTATION SELF-CHECK
                </span>
                <span className="font-mono text-[10px] text-white/40">
                  3 RAPID SIGNALS
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {node.diagnosticQuestions.map((q, qIdx) => {
                  const isChecked = checkedQuestions[qIdx];
                  return (
                    <button
                      key={qIdx}
                      id={`diag-check-${qIdx}`}
                      onClick={() => toggleQuestion(qIdx)}
                      className={`w-full text-left p-2.5 rounded-xs border transition-colors flex items-start gap-2.5 ${
                        isChecked 
                          ? 'bg-amber-950/20 border-amber-500/40 text-amber-200' 
                          : 'bg-white/5 border-white/5 text-white/70 hover:border-white/20'
                      }`}
                    >
                      <div className={`w-4 h-4 mt-0.5 rounded-xs border flex items-center justify-center shrink-0 ${
                        isChecked ? 'border-amber-400 bg-amber-400 text-black' : 'border-white/30'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <span className="leading-snug">{q}</span>
                    </button>
                  );
                })}
              </div>

              <p className="text-[11px] font-mono text-white/40">
                Checking any of these indicates a critical sync leak at this node.
              </p>
            </div>
          </div>

          {/* Interconnected Nodes in Perimeter */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-white/50">DIRECT DATA ADJACENCIES:</span>
              <div className="flex flex-wrap gap-1.5">
                {node.connectedTo.map((adj) => (
                  <button
                    key={adj}
                    onClick={() => {
                      playPing(520, 'sine', 0.05);
                      onSelectNode(adj);
                    }}
                    className="px-2 py-0.5 rounded-xs bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono text-white/90 transition-colors uppercase"
                  >
                    {adj} &rarr;
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                id="modal-synchronize-node-btn"
                onClick={() => {
                  playPing(640, 'triangle', 0.08);
                  onOpenProjectModal(node.label);
                }}
                className="px-4 py-2 bg-white text-black font-mono text-xs font-bold tracking-wider hover:bg-neutral-200 transition-colors flex items-center gap-2"
              >
                <span>SYNCHRONIZE {node.label}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
