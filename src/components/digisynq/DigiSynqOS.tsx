import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, ArrowRight, BookOpen, ArrowUpRight } from 'lucide-react';

interface DigiSynqOSProps {
  onOpenRunbook?: (chapterIndex?: number) => void;
  onOpenJoinModal?: (role?: string) => void;
}

export const DigiSynqOS: React.FC<DigiSynqOSProps> = ({
  onOpenRunbook,
  onOpenJoinModal,
}) => {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number>(0);

  const osLayers = [
    {
      label: 'Identity',
      desc: 'Sovereign verified credentials for creatives, technicians, and entities.',
      detail: 'Cryptographic proof-of-identity linked with verified guild registries, elimination of fraudulent casting calls, and decentralized reputation persistence.'
    },
    {
      label: 'Network',
      desc: 'Unified cinema graph mapping relationships, credits, and availabilities.',
      detail: 'High-density relational graph connecting 8 ecosystem nodes: cast, crew, production slates, cameras, soundstages, screens, brands, and co-financiers.'
    },
    {
      label: 'Assets',
      desc: 'Digital twins of cameras, lenses, stages, and mobile facilities.',
      detail: 'Live telemetric registers for physical gear, optical bench testing certificates, insurance endorsements, and real-time vault availability.'
    },
    {
      label: 'Projects',
      desc: 'Collaborative development slates, script breakdowns, and live stripboards.',
      detail: 'Multi-party production scheduling, automated scene breakdowns, call sheet distribution, and live milestone deliverables tracking.'
    },
    {
      label: 'Intelligence',
      desc: 'Predictive audience forecasting and cross-territory box office modeling.',
      detail: 'Machine learning synthesis analyzing trailer velocity, sentiment shifts, competitive release corridors, and audience demand vectors.'
    },
    {
      label: 'Matching',
      desc: 'Algorithmic bipartite pairing connecting supply with dynamic demand.',
      detail: 'Optimal resource choreography solving multi-constraint cinema needs in seconds without balance-sheet asset ownership.'
    },
    {
      label: 'Workflows',
      desc: 'Automated milestone execution, call sheet dispatch, and deliverable sign-offs.',
      detail: 'Standardized digital operational pipelines synchronizing department heads, rental vaults, post suites, and laboratory turnarounds.'
    },
    {
      label: 'Transactions',
      desc: 'Protected escrow, smart deal memos, and automated CAM waterfall splits.',
      detail: 'Bilateral digital contracts with milestone-triggered payment disbursements, insurance deposit releases, and transparent accounting.'
    },
    {
      label: 'Trust',
      desc: 'Objective rating protocols, guild validation, and dispute mediation.',
      detail: 'Cross-verified reliability indexes, prompt payment scoring, on-set safety compliance, and dispute resolution mechanisms.'
    },
    {
      label: 'AI Core',
      desc: 'Domain-trained cinematic agents orchestrating resources autonomously.',
      detail: 'Autonomous multimodal agents assisting producers, location managers, and sales agents across natural language inquiries.'
    }
  ];

  const activeLayer = osLayers[selectedLayerIndex];

  return (
    <section
      id="digisynq-os"
      className="py-24 sm:py-32 bg-[#070A12] border-t border-white/[0.08] relative overflow-hidden"
    >
      <span id="future-vision" className="absolute -top-28 pointer-events-none" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div data-augmented-ui="tl-clip br-clip" className="aug-hud-chip inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/90 border border-[#8B7CFF]/30 text-[#8B7CFF] font-mono text-[11px] font-bold tracking-[2px] mb-6 backdrop-blur-xl shadow-[0_0_15px_rgba(139,124,255,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B7CFF] shadow-[0_0_8px_#8B7CFF]" />
            System blueprint.
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[0.98] font-denton-extrabold">
            The operating mechanism.<br />
            <span className="text-white/75">Connecting every node in cinema.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
            Introducing <strong className="text-white">DigiSynq OS</strong>: the asset-light operating mechanism of the whole entertainment ecosystem. All stakeholders are nodes — we connect the space between them: we sync, we coordinate, we collaborate.
          </p>
        </div>

        {/* Unified 10-Layer Stack Diagram */}
        <div className="rounded-3xl bg-[#0D1220]/75 border border-white/[0.12] p-6 sm:p-10 lg:p-12 shadow-2xl relative backdrop-blur-2xl">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.08]">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-[#8B7CFF]/10 border border-[#8B7CFF]/30 flex items-center justify-center text-[#8B7CFF]">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white font-mono tracking-tight">
                  DigiSynq-OS // Core architecture
                </h3>
                <span className="text-xs text-white/50 font-mono">
                  Protocol Version 1.0 (Roadmap Architecture)
                </span>
              </div>
            </div>
            <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-white/[0.05] text-white/70 hidden sm:inline font-medium">
              10 Integrated Layers
            </span>
          </div>

          {/* Active Layer Dynamic Inspection with Smooth Crossfade */}
          <div className="mb-6 rounded-2xl p-5 sm:p-6 bg-[#070A12]/80 border border-white/[0.08] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-[#8B7CFF] font-bold">
                      LAYER 0{selectedLayerIndex + 1}
                    </span>
                    <span className="text-xs text-white/40">•</span>
                    <h4 className="text-base font-bold text-white">
                      {activeLayer.label} Layer Protocol
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-white/70 max-w-3xl leading-relaxed">
                    {activeLayer.detail}
                  </p>
                </div>
                <div className="shrink-0 text-xs font-mono px-3 py-1.5 rounded-xl bg-[#8B7CFF]/15 text-[#8B7CFF] font-semibold border border-[#8B7CFF]/30">
                  Active Stack Node
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 10 Layer Tiles with Hover & Selection Transitions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[6px]">
            {osLayers.map((layer, idx) => {
              const isSelected = selectedLayerIndex === idx;
              return (
                <button
                  key={layer.label}
                  onClick={() => setSelectedLayerIndex(idx)}
                  className={`bento-card text-left transition-all duration-200 border cursor-pointer ${
                    isSelected
                      ? 'border-[#8B7CFF] shadow-[0_0_20px_rgba(139,124,255,0.25)] ring-2 ring-[#8B7CFF]/30 text-white'
                      : 'border-white/[0.08] text-white/70 hover:text-white hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isSelected ? 'text-[#8B7CFF]' : 'text-white/40'
                      }`}
                    >
                      L{idx + 1}
                    </span>
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isSelected ? 'bg-[#8B7CFF] shadow-[0_0_6px_#8B7CFF]' : 'bg-transparent'
                      }`}
                    />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1 tracking-tight">
                    {layer.label}
                  </h4>
                  <p className="text-xs text-white/60 leading-snug">
                    {layer.desc}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.08] text-center text-xs font-mono text-white/50 max-w-2xl mx-auto leading-relaxed">
            DigiSynq OS bridges legacy film infrastructure with next-generation autonomous workflows, creating a unified digital layer across the global motion picture supply chain.
          </div>

          {/* Bottom Cross-Section Navigation Actions */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-center gap-4">
            {onOpenJoinModal && (
              <button
                onClick={() => onOpenJoinModal('Protocol Partner')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#070A12] hover:bg-white/90 text-xs font-mono font-bold tracking-[1.5px] transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer active:scale-95"
              >
                <span>Join Protocol Working Group</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}

            {onOpenRunbook && (
              <button
                onClick={() => onOpenRunbook(3)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B7CFF]/10 hover:bg-[#8B7CFF]/20 border border-[#8B7CFF]/35 text-[#8B7CFF] hover:text-white text-xs font-mono font-bold tracking-[1.5px] transition-all cursor-pointer shadow-sm active:scale-95"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Inspect Deterministic Execution State Machine (Chapter 04)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
