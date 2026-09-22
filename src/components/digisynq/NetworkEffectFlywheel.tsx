import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FLYWHEEL_STEPS } from '../../data/platformsData';
import {
  ArrowRight,
  Zap,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Users,
  Layers,
  Film,
  Network,
  ArrowLeftRight,
  Database,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Repeat
} from 'lucide-react';

interface NetworkEffectFlywheelProps {
  onOpenRunbook?: (chapterIndex?: number) => void;
}

const STEP_ICONS = [
  Users,          // 01 Participants
  Layers,         // 02 Resources
  Film,           // 03 Projects
  Network,        // 04 Connections
  ArrowLeftRight, // 05 Transactions
  Database,       // 06 Data
  Sparkles,       // 07 Intelligence
  ShieldCheck,    // 08 Trust
  TrendingUp,     // 09 Better Connections
  Repeat,         // 10 More Participants
];

export const NetworkEffectFlywheel: React.FC<NetworkEffectFlywheelProps> = ({ onOpenRunbook }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isAutoCycling, setIsAutoCycling] = useState(true);

  // Auto-cycle through the 10 flywheel steps every 3.5 seconds unless paused by user interaction
  useEffect(() => {
    if (!isAutoCycling) return;
    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % FLYWHEEL_STEPS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isAutoCycling]);

  const activeStep = FLYWHEEL_STEPS[activeStepIndex];
  const nextStepIndex = (activeStepIndex + 1) % FLYWHEEL_STEPS.length;
  const nextStep = FLYWHEEL_STEPS[nextStepIndex];
  const StepIcon = STEP_ICONS[activeStepIndex] || Zap;

  return (
    <section
      id="network-flow"
      className="py-24 sm:py-32 bg-[#070A12] border-t border-white/[0.08] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div data-augmented-ui="tl-clip br-clip" className="aug-hud-chip inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/90 border border-[#8B7CFF]/30 text-[#8B7CFF] font-mono text-[11px] font-bold tracking-[2px] mb-6 backdrop-blur-xl shadow-[0_0_15px_rgba(139,124,255,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B7CFF] shadow-[0_0_8px_#8B7CFF]" />
            Compounding value loop.
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[0.98] font-denton-extrabold">
            Every connection.<br />
            <span className="text-white/75">Makes the network smarter.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
            Unlike asset-heavy companies that face linear depreciation, DigiSynq benefits from accelerating network effects: each transaction enriches the shared intelligence layer for every participant.
          </p>
        </div>

        {/* Circular / Step Progression Visualizer Slab */}
        <div className="rounded-3xl bg-[#0D1220]/75 border border-white/[0.12] p-6 sm:p-10 shadow-2xl relative backdrop-blur-2xl">
          
          {/* Active Highlight Card - Interactive Command HUD */}
          <div className="mb-8 rounded-2xl bg-[#070A12]/90 border border-white/[0.14] p-5 sm:p-8 relative overflow-hidden viewfinder-box">
            <div className="viewfinder-corner-tl" />
            <div className="viewfinder-corner-tr" />
            <div className="viewfinder-corner-bl" />
            <div className="viewfinder-corner-br" />

            {/* Auto-cycle progress bar across top edge */}
            {isAutoCycling && (
              <motion.div
                key={`progress-${activeStepIndex}`}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 3.5, ease: 'linear' }}
                className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#8B7CFF] via-[#5CE1E6] to-[#8B7CFF] shadow-[0_0_10px_#8B7CFF]"
              />
            )}

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#8B7CFF]/15 border border-[#8B7CFF]/40 text-[#8B7CFF] font-mono text-[10px] font-bold tracking-[2px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7CFF] animate-pulse" />
                  STAGE {String(activeStep.step).padStart(2, '0')} / 10
                </div>
                <span className="text-xs font-mono text-white/50 tracking-wider hidden md:inline">
                  RECURSIVE VALUE LOOP
                </span>
              </div>

              {/* Flywheel Telemetry Controls */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={() => {
                    setActiveStepIndex((prev) => (prev - 1 + FLYWHEEL_STEPS.length) % FLYWHEEL_STEPS.length);
                    setIsAutoCycling(false);
                  }}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.10] border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
                  title="Previous Stage"
                  aria-label="Previous Stage"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsAutoCycling(!isAutoCycling)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.10] border border-white/10 text-white/80 hover:text-white text-xs font-mono transition-all cursor-pointer"
                >
                  {isAutoCycling ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-[#8B7CFF]" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-[#5EF2B0]" />
                      <span>Play</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    setActiveStepIndex((prev) => (prev + 1) % FLYWHEEL_STEPS.length);
                    setIsAutoCycling(false);
                  }}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.10] border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
                  title="Next Stage"
                  aria-label="Next Stage"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                <div className="lg:col-span-3 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#8B7CFF]/10 border border-[#8B7CFF]/30 flex items-center justify-center text-[#8B7CFF] shadow-[0_0_20px_rgba(139,124,255,0.15)] flex-shrink-0">
                    <StepIcon className="w-7 h-7 text-[#8B7CFF]" />
                  </div>
                  <div>
                    <span className="text-3xl sm:text-4xl font-extrabold font-denton-extrabold text-white tracking-tight leading-none">
                      {String(activeStep.step).padStart(2, '0')}
                    </span>
                    <span className="block text-[11px] font-mono text-white/40 tracking-widest mt-1 uppercase font-semibold">
                      Sequence Index
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-denton-extrabold mb-2">
                    {activeStep.name}
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans font-normal">
                    {activeStep.description}
                  </p>
                </div>

                <div className="lg:col-span-3 lg:border-l lg:border-white/10 lg:pl-6 flex flex-col justify-center">
                  <span className="text-[10px] font-mono uppercase tracking-[1.5px] text-white/40 mb-1 font-semibold">
                    Feeds next into
                  </span>
                  <button
                    onClick={() => {
                      setActiveStepIndex(nextStepIndex);
                      setIsAutoCycling(false);
                    }}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#5CE1E6] hover:text-white transition-colors text-left cursor-pointer group"
                  >
                    <span>{String(nextStep.step).padStart(2, '0')}. {nextStep.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 10-Step Interactive Rail Track */}
          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
              {FLYWHEEL_STEPS.map((item, index) => {
                const isCurrent = activeStepIndex === index;
                const IconComponent = STEP_ICONS[index] || Zap;
                const stepNumber = String(item.step).padStart(2, '0');

                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      setActiveStepIndex(index);
                      setIsAutoCycling(false);
                    }}
                    className={`group relative flex flex-col items-center justify-between p-2.5 sm:p-3 min-h-[96px] rounded-xl border transition-all duration-200 cursor-pointer overflow-hidden ${
                      isCurrent
                        ? 'bg-[#0E1324] border-[#8B7CFF]/80 text-white shadow-[0_0_24px_rgba(139,124,255,0.25)] ring-1 ring-[#8B7CFF]/50 z-10'
                        : 'bg-white/[0.02] hover:bg-white/[0.06] border-white/[0.08] hover:border-white/25 text-white/70'
                    }`}
                    id={`flywheel-step-${index}`}
                  >
                    {isCurrent && (
                      <motion.div
                        layoutId="activeFlywheelTrack"
                        className="absolute inset-0 bg-gradient-to-b from-[#8B7CFF]/20 via-[#8B7CFF]/5 to-transparent pointer-events-none rounded-xl"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                      />
                    )}

                    {/* Step Number + Mini Icon Header */}
                    <div className="relative z-10 w-full flex items-center justify-between gap-1 mb-1.5">
                      <span
                        className={`text-[10px] font-mono font-bold tracking-wider ${
                          isCurrent ? 'text-[#8B7CFF]' : 'text-white/40 group-hover:text-white/60'
                        }`}
                      >
                        {stepNumber}
                      </span>
                      <IconComponent
                        className={`w-3.5 h-3.5 transition-colors ${
                          isCurrent ? 'text-[#8B7CFF]' : 'text-white/30 group-hover:text-white/60'
                        }`}
                      />
                    </div>

                    {/* Stage Label with balanced min-height and clear typography */}
                    <span
                      className={`relative z-10 text-[11px] sm:text-[11.5px] font-sans font-semibold tracking-tight text-center leading-[1.25] transition-colors flex items-center justify-center min-h-[30px] ${
                        isCurrent ? 'text-white font-bold' : 'text-white/70 group-hover:text-white'
                      }`}
                    >
                      {item.name}
                    </span>

                    {/* Active bottom highlight bar */}
                    <div
                      className={`relative z-10 w-full h-[2px] mt-2 rounded-full transition-all duration-200 ${
                        isCurrent ? 'bg-[#8B7CFF] shadow-[0_0_8px_#8B7CFF]' : 'bg-transparent'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Continuous Loop Track Indicator */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/50 gap-4">
            <div className="flex items-center gap-2 text-[#5CE1E6] font-medium">
              <Zap className="w-4 h-4 text-[#5CE1E6]" />
              <span>Zero Marginal Asset Cost Per Connection</span>
            </div>
            <div className="text-white/70 text-center sm:text-right font-medium flex items-center gap-1.5 flex-wrap justify-center sm:justify-end">
              <span>More Data</span>
              <span className="text-[#8B7CFF]">→</span>
              <span>Better Matching</span>
              <span className="text-[#8B7CFF]">→</span>
              <span>Better Outcomes</span>
              <span className="text-[#8B7CFF]">→</span>
              <span>More Trust</span>
              <span className="text-[#8B7CFF]">→</span>
              <span className="text-[#5CE1E6] font-bold">Compounding Loop (10 ↩ 01)</span>
            </div>
          </div>
        </div>

        {/* Runbook Callout */}
        {onOpenRunbook && (
          <div className="mt-10 text-center">
            <button
              onClick={() => onOpenRunbook(7)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B7CFF]/10 hover:bg-[#8B7CFF]/20 border border-[#8B7CFF]/35 text-[#8B7CFF] hover:text-white text-xs font-mono font-bold tracking-[1.5px] transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <span>Inspect 10-Stage Compounding Flywheel & Moat (Chapter 08)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
