import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PLATFORMS } from '../../data/platformsData';
import { PlatformItem } from '../types';
import cinemaStageVolume from '../../assets/cinema-stage-volume.jpg';
import {
  LineChart,
  Users,
  ShieldAlert,
  Sparkles,
  Clapperboard,
  Film,
  Megaphone,
  FileCheck,
  Coins,
  Layers,
  Sliders,
  Network,
  ArrowRight,
  ChevronRight,
  BookOpen
} from 'lucide-react';

interface ProductEcosystemProps {
  onSelectPlatform: (platform: PlatformItem) => void;
  onFilterCategoryInDirectory: (categoryName: string) => void;
  onOpenRunbook?: (chapterIndex?: number) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  LineChart,
  Users,
  ShieldAlert,
  Sparkles,
  Clapperboard,
  Film,
  Megaphone,
  FileCheck,
  Coins,
  Layers,
  Sliders,
  Network,
};

export const ProductEcosystem: React.FC<ProductEcosystemProps> = ({
  onFilterCategoryInDirectory,
  onOpenRunbook,
}) => {
  const [activePlatformId, setActivePlatformId] = useState<string>(PLATFORMS[0].id);

  const activePlatform = PLATFORMS.find((p) => p.id === activePlatformId) || PLATFORMS[0];
  const ActiveIcon = ICON_MAP[activePlatform.iconName] || Network;

  return (
    <section
      id="product-ecosystem"
      className="py-28 sm:py-36 bg-[#070A12] border-t border-white/10 relative overflow-hidden"
    >
      <div className="cred-hairline absolute top-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div data-augmented-ui="tl-clip br-clip" className="aug-hud-chip inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/90 border border-[#4D8DFF]/30 text-[#4D8DFF] font-mono text-[11px] font-bold tracking-[2px] mb-6 backdrop-blur-xl shadow-[0_0_15px_rgba(77,141,255,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4D8DFF] shadow-[0_0_8px_#4D8DFF]" />
            Portfolio architecture.
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[0.98] font-denton-extrabold">
            One network.<br />
            <span className="text-white/75 font-denton-extrabold">Twelve platforms.</span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            DigiSynq unites specialized products through shared network intelligence, trust graphs, and transaction liquidity.
          </p>

          <p className="mt-3 text-xs sm:text-sm font-mono tracking-[3px] text-white/75">
            Total universe: 12 platforms • 82 interconnected capabilities.
          </p>
        </div>

        {/* Central Interconnected Hub Visual - CRED Feature Slab */}
        <div className="relative mb-14">


          <div className="p-6 sm:p-10 rounded-[20px] cred-card overflow-hidden relative viewfinder-box z-10">
            <div className="viewfinder-corner-tl" />
            <div className="viewfinder-corner-tr" />
            <div className="viewfinder-corner-bl" />
            <div className="viewfinder-corner-br" />

          {/* Virtual Stage Volume Ambient Cinema Visual */}
          <div className="absolute inset-0 pointer-events-none opacity-15 overflow-hidden mix-blend-screen">
            <img
              src={cinemaStageVolume}
              alt="Cinema Production Stage Volume"
              className="w-full h-full object-cover object-center filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
          </div>

          <div className="relative z-10 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1220]/90 border border-[#5CE1E6]/30 text-[#5CE1E6] font-mono text-[10px] font-bold tracking-[2px] backdrop-blur-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] shadow-[0_0_8px_#5CE1E6]" />
              Active platform focus.
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activePlatform.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                    <ActiveIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono tracking-[2.5px] text-white/50 font-bold">
                      Capability architecture
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                      {activePlatform.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono tracking-[1.5px] text-white/50 hidden sm:inline font-medium">
                    {activePlatform.highlightMetric} {activePlatform.metricsLabel}
                  </span>
                  <button
                    onClick={() => onFilterCategoryInDirectory(activePlatform.category)}
                    className="cred-btn-primary py-3 px-6 text-xs"
                    id="btn-explore-category-directory"
                  >
                    <span>{activePlatform.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="my-8 grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-4 space-y-3">
                  <div className="text-sm font-bold text-white font-mono tracking-wide">
                    {activePlatform.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                    {activePlatform.description}
                  </p>
                </div>

                <div className="md:col-span-8">
                  <div className="text-[11px] font-mono tracking-[2px] text-white/40 mb-4 font-bold">
                    Included capabilities ({activePlatform.products.length})
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {activePlatform.products.map((prodName) => (
                      <div
                        key={prodName}
                        className="p-3.5 rounded-lg bg-[#070A12]/60 border border-white/10 hover:border-[#5CE1E6]/50 transition-colors group/mod"
                      >
                        <span className="text-xs font-bold text-white font-mono block group-hover/mod:text-[#5CE1E6] transition-colors">
                          {prodName}
                        </span>
                        <span className="text-[10px] text-white/60 font-mono mt-0.5 block">
                          Synq module
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        </div>

        {/* 12 Platforms Grid — Apple bento zero-gap showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[6px]">
          {PLATFORMS.map((platform) => {
            const Icon = ICON_MAP[platform.iconName] || Network;
            const isSelected = activePlatformId === platform.id;

            return (
              <motion.div
                key={platform.id}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                onClick={() => setActivePlatformId(platform.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActivePlatformId(platform.id);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                aria-label={`Select ${platform.name} platform`}
                className={`group cursor-pointer bento-card transition-all duration-300 ${
                  isSelected
                    ? 'border-[#4D8DFF]/60 shadow-[0_0_35px_rgba(77,141,255,0.2)] ring-1 ring-[#4D8DFF]/40'
                    : 'hover:border-white/30'
                }`}
                id={`platform-card-${platform.id}`}
              >
                <div className="flex items-center justify-start mb-5">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-[#4D8DFF] text-[#070A12]'
                        : 'bg-white/10 text-white group-hover:bg-[#4D8DFF] group-hover:text-[#070A12]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h4 className="text-lg font-bold tracking-tight text-white mb-1.5 font-display">
                  {platform.name}
                </h4>

                <p className="text-xs text-white/85 font-mono tracking-wide mb-3">
                  {platform.tagline}
                </p>

                <p className="text-xs text-white/50 line-clamp-2 leading-relaxed mb-5">
                  {platform.description}
                </p>

                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                  <span className="text-[11px] text-white/40 tracking-wide">
                    {platform.products.length} Products
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onFilterCategoryInDirectory(platform.category);
                    }}
                    className="text-white font-bold tracking-[1.5px] flex items-center gap-1 group-hover:text-[#4D8DFF] group-hover:translate-x-1 transition-all cursor-pointer"
                  >
                    EXPLORE <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Runbook Callout */}
        {onOpenRunbook && (
          <div className="mt-14 text-center">
            <button
              onClick={() => onOpenRunbook(2)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4D8DFF]/10 hover:bg-[#4D8DFF]/20 border border-[#4D8DFF]/35 text-[#4D8DFF] hover:text-white text-xs font-mono font-bold tracking-[1.5px] transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Inspect 12-Platform Architecture in Executive Runbook (Chapter 03)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
