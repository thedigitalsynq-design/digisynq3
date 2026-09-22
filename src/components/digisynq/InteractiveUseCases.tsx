import { useState, useEffect, useRef } from 'react';
import type { FC, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { USE_CASES } from '../../data/platformsData';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const InteractiveUseCases: FC<{ onOpenRunbook?: (chapterIndex?: number) => void }> = ({
  onOpenRunbook,
}) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(USE_CASES[0].id);
  const [customInput, setCustomInput] = useState<string>('');
  const [customResult, setCustomResult] = useState<{
    status: 'idle' | 'simulating' | 'resolved';
    flow: string[];
    summary: string;
  }>({ status: 'idle', flow: [], summary: '' });
  const simulateTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (simulateTimer.current !== null) {
        window.clearTimeout(simulateTimer.current);
      }
    };
  }, []);

  const activeCase = USE_CASES.find((c) => c.id === selectedCaseId) || USE_CASES[0];

  const handleSimulateCustom = (e: FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    setCustomResult({ status: 'simulating', flow: [], summary: '' });
    if (simulateTimer.current !== null) {
      window.clearTimeout(simulateTimer.current);
    }
    const query = customInput;
    simulateTimer.current = window.setTimeout(() => {
      setCustomResult({
        status: 'resolved',
        flow: [
          'Semantic Graph Search (SynqFind): Detected 12 compatible assets and 3 verified counterparties.',
          'Trust & Validation (SynqTrust): Verified insurance certificates, guild credentials, and conflict checks.',
          'Bipartite Matching (SynqMatch): Recommended optimal package structure with zero asset ownership overhead.',
          'Workflow & Settlement (SynqDeal / SynqFlow): Generated standard digital agreement and automated milestone escrow.'
        ],
        summary: `Successfully coordinated requirements for "${query}" across 4 ecosystem nodes without balance-sheet asset ownership.`
      });
    }, 600);
  };

  return (
    <section
      id="use-cases"
      className="py-24 sm:py-32 bg-[#070A12] border-t border-white/[0.08] relative overflow-hidden"
    >


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div data-augmented-ui="tl-clip br-clip" className="aug-hud-chip inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/90 border border-[#5CE1E6]/30 text-[#5CE1E6] font-mono text-[11px] font-bold tracking-[2px] mb-6 backdrop-blur-xl shadow-[0_0_15px_rgba(92,225,230,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] shadow-[0_0_8px_#5CE1E6]" />
            Execution simulation.
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[0.98] font-denton-extrabold">
            How DigiSynq works.<br />
            <span className="text-white/75">In real-world production.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
            Real cinema scenarios showing how fragmented needs are resolved through digital matching and coordination rather than manual friction.
          </p>
        </div>

        {/* 5 Scenario Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin">
          {USE_CASES.map((uc) => {
            const isSelected = selectedCaseId === uc.id;
            return (
              <button
                key={uc.id}
                onClick={() => {
                  setSelectedCaseId(uc.id);
                  setCustomResult({ status: 'idle', flow: [], summary: '' });
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 border backdrop-blur-xl ${
                  isSelected
                    ? 'bg-[#5CE1E6]/15 text-[#5CE1E6] border-[#5CE1E6]/60 shadow-[0_0_15px_rgba(92,225,230,0.15)] font-bold'
                    : 'bg-[#0D1220]/60 border-white/[0.08] text-white/70 hover:text-white hover:border-white/20'
                }`}
                id={`btn-use-case-${uc.id}`}
              >
                "{uc.title}"
              </button>
            );
          })}
        </div>

        {/* Active Scenario Detailed Execution Panel */}
        <div className="rounded-3xl bg-[#0D1220]/75 border border-white/[0.12] p-6 sm:p-10 lg:p-12 shadow-2xl mb-12 overflow-hidden relative backdrop-blur-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div>
                  <span className="text-xs font-mono tracking-wider text-[#5CE1E6] block mb-1 font-semibold">
                    Trigger Requirement • Initiated by {activeCase.persona}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display tracking-tight">
                    "{activeCase.title}"
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-white/50">Interlinked Nodes:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeCase.connectedNodes.map((node) => (
                      <a
                        key={node}
                        href="#audience-solutions"
                        className="px-2.5 py-1 rounded-full bg-[#070A12]/80 text-xs font-mono text-white/80 border border-white/[0.10] hover:border-[#5CE1E6]/50 hover:text-[#5CE1E6] transition-colors"
                        title={`Explore ${node} Solutions`}
                      >
                        {node}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="my-6 p-4 rounded-2xl bg-[#070A12]/80 border border-white/[0.08]">
                <span className="text-[11px] font-mono text-white/50 tracking-widest block mb-1 font-semibold">
                  Natural Language Prompt Ingested
                </span>
                <p className="text-sm sm:text-base text-white/95 font-mono">
                  "{activeCase.query}"
                </p>
              </div>

              {/* 4-Step Resolution Sequence */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[6px] my-6">
                {activeCase.stages.map((stage) => (
                  <div
                    key={stage.stage}
                    className="bento-card hover:border-[#5CE1E6]/40 transition-all duration-200 text-white group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-[#5CE1E6]">
                        {stage.stage}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] shadow-[0_0_8px_#5CE1E6]" />
                    </div>
                    <div className="text-xs font-bold text-white mb-1.5">
                      {stage.action}
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {stage.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Outcome Card */}
              <div className="p-4 rounded-2xl bg-[#5EF2B0]/10 border border-[#5EF2B0]/30 flex items-start sm:items-center gap-3 backdrop-blur-xl">
                <CheckCircle2 className="w-5 h-5 text-[#5EF2B0] shrink-0 mt-0.5 sm:mt-0" />
                <div className="text-xs sm:text-sm text-white/90">
                  <span className="font-semibold text-[#5EF2B0]">Outcome Achieved: </span>
                  {activeCase.outcome}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Live Simulation Sandbox for Custom Query */}
        <div className="rounded-3xl bg-[#0D1220]/75 border border-white/[0.12] p-6 sm:p-9 shadow-2xl backdrop-blur-2xl">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#5CE1E6] mb-2 font-semibold">
            <Sparkles className="w-4 h-4 text-[#5CE1E6]" />
            <span>Interactive Choreography Sandbox</span>
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
            Test how DigiSynq coordinates your cinema requirement.
          </h4>
          <p className="text-xs sm:text-sm text-white/70 mb-6 leading-relaxed">
            Type any real-world production, equipment, screening, or distribution requirement to see the network choreography simulation.
          </p>

          <form onSubmit={handleSimulateCustom} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="e.g. 'I need a 40-foot techno-crane with operator in Atlanta next Tuesday'"
              className="flex-1 bg-[#070A12]/80 border border-white/[0.12] rounded-2xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#5CE1E6] focus:ring-2 focus:ring-[#5CE1E6]/20 font-sans"
              id="sandbox-custom-query-input"
            />
            <button
              type="submit"
              disabled={customResult.status === 'simulating'}
              aria-busy={customResult.status === 'simulating'}
              className="px-6 py-3 rounded-2xl bg-white text-[#070A12] hover:bg-white/90 font-bold text-xs tracking-wider inline-flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] disabled:opacity-60 disabled:cursor-wait"
              id="btn-sandbox-simulate"
            >
              <span>{customResult.status === 'simulating' ? 'Simulating…' : 'Simulate Choreography'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Sandbox Response Output with AnimatePresence */}
          <AnimatePresence mode="wait">
            {customResult.status === 'simulating' && (
              <motion.div
                key="simulating"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="mt-4 p-4 rounded-2xl bg-[#070A12]/80 border border-[#5CE1E6]/30 text-xs font-mono text-[#5CE1E6] animate-pulse shadow-xs"
              >
                Simulating multi-node graph traversal across talent, equipment, and trust layers...
              </motion.div>
            )}

            {customResult.status === 'resolved' && (
              <motion.div
                key="resolved"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 p-5 rounded-2xl bg-[#070A12]/80 border border-[#5CE1E6]/40 space-y-3 shadow-md text-white"
              >
                <div className="text-xs font-mono tracking-wider text-[#5CE1E6] font-bold">
                  Automated Network Coordination Pipeline:
                </div>
                <ul className="space-y-2 text-xs text-white/80 font-mono">
                  {customResult.flow.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#5CE1E6]">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 border-t border-white/[0.08] text-xs text-[#5EF2B0] font-medium">
                  {customResult.summary}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Cross-Section Navigation Actions */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#marketplace"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4D8DFF]/10 hover:bg-[#4D8DFF]/20 border border-[#4D8DFF]/35 text-[#4D8DFF] hover:text-white text-xs font-mono font-bold tracking-[1.5px] transition-all shadow-sm active:scale-95"
          >
            <span>Explore Dormant Capacity Marketplace</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="#intelligence"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5CE1E6]/10 hover:bg-[#5CE1E6]/20 border border-[#5CE1E6]/35 text-[#5CE1E6] hover:text-white text-xs font-mono font-bold tracking-[1.5px] transition-all shadow-sm active:scale-95"
          >
            <span>Inspect Predictive Telemetry Engine</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {onOpenRunbook && (
            <button
              onClick={() => onOpenRunbook(1)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-white/80 hover:text-white text-xs font-mono font-bold tracking-[1.5px] transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <span>Open Coordination Playbook (Chapter 02)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
