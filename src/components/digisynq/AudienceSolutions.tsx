import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AUDIENCE_SEGMENTS } from '../../data/platformsData';
import { ArrowRight, ArrowUpRight, BookOpen } from 'lucide-react';

interface AudienceSolutionsProps {
  onOpenJoinModal: (role: string) => void;
  onFilterCategoryInDirectory?: (categoryName: string) => void;
  onOpenRunbook?: (chapterIndex?: number) => void;
}

export const AudienceSolutions: React.FC<AudienceSolutionsProps> = ({
  onOpenJoinModal,
  onOpenRunbook,
}) => {
  const [activeSegmentId, setActiveSegmentId] = useState<string>(AUDIENCE_SEGMENTS[0].id);

  const activeSegment =
    AUDIENCE_SEGMENTS.find((s) => s.id === activeSegmentId) || AUDIENCE_SEGMENTS[0];

  return (
    <section
      id="audience-solutions"
      className="py-24 sm:py-32 bg-[#070A12] border-t border-white/[0.08] relative overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div data-augmented-ui="tl-clip br-clip" className="aug-hud-chip inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/90 border border-[#5CE1E6]/30 text-[#5CE1E6] font-mono text-[11px] font-bold tracking-[2px] mb-6 backdrop-blur-xl shadow-[0_0_15px_rgba(92,225,230,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] shadow-[0_0_8px_#5CE1E6]" />
            Every stakeholder is a node.
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[0.98] font-denton-extrabold">
            All stakeholders in our bucket.<br />
            <span className="text-white/75">We sync the space between them.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
            Producers, talent, crew, rental houses, facilities, distributors, exhibitors, and sponsors. DigiSynq is the asset-light operating mechanism: we sync, we coordinate, we collaborate.
          </p>
        </div>

        {/* Stakeholder Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin">
          {AUDIENCE_SEGMENTS.map((segment) => {
            const isSelected = activeSegmentId === segment.id;
            return (
              <button
                key={segment.id}
                onClick={() => setActiveSegmentId(segment.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 border backdrop-blur-xl ${
                  isSelected
                    ? 'bg-white text-[#070A12] border-white shadow-[0_0_20px_rgba(255,255,255,0.25)] font-bold'
                    : 'bg-[#0D1220]/70 text-white/60 border-white/[0.08] hover:border-white/20 hover:text-white'
                }`}
                id={`btn-audience-${segment.id}`}
              >
                {segment.title}
              </button>
            );
          })}
        </div>

        {/* Active Segment Feature Panel */}
        <div className="rounded-3xl bg-[#0D1220]/75 border border-white/[0.12] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl relative backdrop-blur-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSegment.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
            >
              {/* Left Description */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#5CE1E6] font-semibold">
                  <span>Stakeholder Profile: {activeSegment.title}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Tailored solutions for {activeSegment.title.toLowerCase()}.
                </h3>

                <p className="text-base text-white/70 leading-relaxed">
                  {activeSegment.description}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-2xl bg-[#FFC857]/10 border border-[#FFC857]/25 text-xs sm:text-sm text-white/90 backdrop-blur-xl">
                    <span className="font-mono tracking-wider text-[#FFC857] block mb-1 font-semibold">
                      The Friction Today:
                    </span>
                    {activeSegment.painPoint}
                  </div>

                  <div className="p-4 rounded-2xl bg-[#5CE1E6]/10 border border-[#5CE1E6]/25 text-xs sm:text-sm text-white/90 backdrop-blur-xl">
                    <span className="font-mono tracking-wider text-[#5CE1E6] block mb-1 font-semibold">
                      The DigiSynq Network Solution:
                    </span>
                    {activeSegment.digiSynqSolution}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onOpenJoinModal(activeSegment.title)}
                    className="px-6 py-2.5 rounded-2xl bg-white text-[#070A12] hover:bg-white/90 font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                  >
                    <span>Connect as {activeSegment.title}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono text-white/50 font-medium">
                    {activeSegment.businessModelNote}
                  </span>
                </div>
              </div>

              {/* Right Product Pairing Matrix */}
              <div className="lg:col-span-5 bg-[#070A12]/80 border border-white/[0.08] rounded-2xl p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono tracking-wider text-white/50 block font-semibold">
                    Primary Network Hubs for {activeSegment.title}
                  </span>
                  <a
                    href="#product-directory"
                    className="text-[11px] font-mono text-[#5CE1E6] hover:underline flex items-center gap-1"
                  >
                    <span>View All</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

                <div className="space-y-2.5">
                  {activeSegment.keyProducts.map((prod) => (
                    <a
                      key={prod}
                      href="#product-directory"
                      className="p-3.5 rounded-xl bg-[#0D1220]/70 border border-white/[0.08] hover:border-[#5CE1E6]/50 hover:bg-[#5CE1E6]/10 transition-all flex items-center justify-between shadow-xs text-white group cursor-pointer"
                      title={`Inspect ${prod} in Product Directory`}
                    >
                      <div>
                        <div className="text-sm font-bold text-white font-mono group-hover:text-[#5CE1E6] transition-colors flex items-center gap-1.5">
                          <span>{prod}</span>
                          <ArrowRight className="w-3 h-3 text-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="text-[11px] text-white/50">
                          Synchronized Module
                        </div>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-[#5CE1E6] shadow-[0_0_6px_#5CE1E6]" />
                    </a>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/[0.08] text-[11px] text-white/50 font-mono leading-relaxed">
                  All participant actions are secured by SynqTrust cryptographic badges and automated escrow milestones.
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Runbook Callout */}
        {onOpenRunbook && (
          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenRunbook(1)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5CE1E6]/10 hover:bg-[#5CE1E6]/20 border border-[#5CE1E6]/35 text-[#5CE1E6] hover:text-white text-xs font-mono font-bold tracking-[1.5px] transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Inspect 8 Stakeholder Nodes &amp; Bilateral Mesh (Chapter 02)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
