import React, { useState } from 'react';
import { Search, ShieldCheck, GitFork, SlidersHorizontal, CreditCard, BarChart3, Brain, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ModelPipelineProps {
  onOpenRunbook?: (chapterIndex?: number) => void;
}

export const ModelPipeline: React.FC<ModelPipelineProps> = ({ onOpenRunbook }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(2); // default on MATCH

  const pipelineSteps = [
    {
      name: 'Discover',
      headline: 'Find relevant people, assets, content and opportunities.',
      icon: Search,
      input: 'Requirement query: "4K anamorphic camera package and certified DP in Berlin for 3-week shoot in November"',
      action: 'Semantic graph search indexes availability across verified crew databases and idle rental inventories.',
      output: 'Ranked candidate list with verified dates, rate benchmarks, and insurance standings.',
      products: ['SynqFind', 'SynqTalent', 'SynqMarket', 'SynqContent']
    },
    {
      name: 'Verify',
      headline: 'Establish identity, credibility and availability.',
      icon: ShieldCheck,
      input: 'Candidate identities, guild affiliations, equipment serials, and COI certificates.',
      action: 'SynqTrust verifies guild credits, reviews insurance underwriters, and checks counterparty credit reliability.',
      output: 'Cryptographically verified trust badge and confirmed schedule lock with zero conflict.',
      products: ['SynqTrust', 'SynqSkills', 'SynqReview', 'SynqRepute']
    },
    {
      name: 'Match',
      headline: 'Connect supply with demand intelligently.',
      icon: GitFork,
      input: 'Multi-variable constraints: budget envelope, artistic tone, insurance requirements, and calendar.',
      action: 'Bipartite graph optimization calculates bilateral affinity score and suggests optimal package pricing.',
      output: 'Direct pairing with 96% mutual fit rating and automated mutual introduction.',
      products: ['SynqMatch', 'SynqScore', 'SynqOpportunity', 'SynqBook']
    },
    {
      name: 'Coordinate',
      headline: 'Move projects and workflows forward.',
      icon: SlidersHorizontal,
      input: 'Digital scripts, call sheets, vendor purchase orders, and multi-department timelines.',
      action: 'Automated workflow triggers dispatch GPS call sheets, track equipment custody, and sync catering.',
      output: 'Synchronized cross-entity operational dashboard with real-time milestone confirmations.',
      products: ['SynqProduce', 'SynqCrewOps', 'SynqFlow', 'SynqTask']
    },
    {
      name: 'Transact',
      headline: 'Enable commercial exchange.',
      icon: CreditCard,
      input: 'Agreed day rates, sub-rental fees, minimum guarantees, and territorial delivery milestones.',
      action: 'Protected escrow holds funds, validates delivery material sign-offs, and executes automated payouts.',
      output: 'Instant, dispute-free financial settlement with digital receipts and tax credit audit trails.',
      products: ['SynqDeal', 'SynqLicense', 'SynqRevenue', 'SynqFinance']
    },
    {
      name: 'Measure',
      headline: 'Understand results.',
      icon: BarChart3,
      input: 'Ticket sales, auditorium occupancy, social chatter, exit poll feedback, and budget burn rate.',
      action: 'Real-time telemetry algorithms harmonize multi-market performance into unified analytics.',
      output: 'Live attribution dashboards, audience sentiment polarity index, and box office decay curves.',
      products: ['SynqAnalytics', 'SynqSignals', 'SynqVoice', 'SynqScreen']
    },
    {
      name: 'Learn',
      headline: 'Use intelligence to improve the next decision.',
      icon: Brain,
      input: 'Historical project outcomes, vendor performance scores, and audience reception vectors.',
      action: 'Machine learning models update graph weights, refining future casting, budgeting, and release timing.',
      output: 'High-conviction predictive intelligence feeding directly into the next slate or screening.',
      products: ['SynqPredict', 'SynqIntel', 'SynqTrends', 'SynqInsights']
    }
  ];

  const currentStep = pipelineSteps[activeStepIndex];

  return (
    <section
      id="platform-model"
      className="py-28 sm:py-36 bg-[#070A12] border-t border-white/10 relative overflow-hidden"
    >
      <div className="cred-hairline absolute top-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div data-augmented-ui="tl-clip br-clip" className="aug-hud-chip inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/90 border border-[#8B7CFF]/30 text-[#8B7CFF] font-mono text-[11px] font-bold tracking-[2px] mb-6 backdrop-blur-xl shadow-[0_0_15px_rgba(139,124,255,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B7CFF] shadow-[0_0_8px_#8B7CFF]" />
            Operating architecture.
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[0.98] font-denton-extrabold">
            The DigiSynq pipeline.<br />
            <span className="text-white/75">Seven phases to scale.</span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            A seven-phase operating pipeline that turns scattered cinema resources into a coordinated, measurable, and self-reinforcing engine.
          </p>
        </motion.div>

        {/* CRED Horizontal Step Selector */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar">
          {pipelineSteps.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={step.name}
                onClick={() => setActiveStepIndex(idx)}
                className={`px-5 py-2.5 rounded-sm font-mono text-xs font-bold tracking-[2px] transition-all duration-200 whitespace-nowrap border ${
                  isSelected
                    ? 'bg-white text-[#070A12] border-white shadow-[0_0_25px_rgba(255,255,255,0.25)] font-extrabold'
                    : 'bg-[#0D1220]/60 text-white/50 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {step.name}
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Slab (CRED Card) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl cred-card p-8 sm:p-12 relative"
          >
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/90 border border-[#8B7CFF]/30 text-[#8B7CFF] font-mono text-[11px] font-bold tracking-[2px] backdrop-blur-xl shadow-[0_0_15px_rgba(139,124,255,0.12)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B7CFF] shadow-[0_0_8px_#8B7CFF]" />
                {currentStep.name}
              </div>
            </div>

            <div className="pt-1 max-w-3xl mb-8">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-3">
                {currentStep.headline}
              </h3>
            </div>

            {/* Input -> Action -> Output Ledger */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div className="p-5 rounded-xl bg-[#070A12]/60 border border-white/10">
                <span className="text-[11px] font-mono tracking-[2px] text-white/50 font-bold block mb-2">
                  Input telemetry
                </span>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                  {currentStep.input}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#070A12]/60 border border-[#8B7CFF]/30">
                <span className="text-[11px] font-mono tracking-[2px] text-[#8B7CFF] font-bold block mb-2">
                  Graph action (AI Core)
                </span>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                  {currentStep.action}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#070A12]/60 border border-[#5EF2B0]/30">
                <span className="text-[11px] font-mono tracking-[2px] text-[#5EF2B0] font-bold block mb-2">
                  Settled output (Verified)
                </span>
                <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                  {currentStep.output}
                </p>
              </div>
            </div>

            {/* Associated Products */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono tracking-[2px] text-white/50 font-bold">
                  Synq modules:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentStep.products.map((p) => (
                    <a
                      key={p}
                      href="#product-directory"
                      className="px-3 py-1 rounded bg-white/[0.06] border border-white/10 text-white/90 text-xs font-mono font-bold tracking-wider hover:border-[#5CE1E6]/50 hover:text-[#5CE1E6] hover:bg-[#5CE1E6]/10 transition-all inline-flex items-center gap-1 group"
                      title={`Inspect ${p} in directory`}
                    >
                      <span>{p}</span>
                      <ArrowRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#5CE1E6]" />
                    </a>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActiveStepIndex((activeStepIndex + 1) % pipelineSteps.length)}
                className="inline-flex items-center gap-2 text-xs font-mono tracking-[2px] text-[#5CE1E6] font-bold hover:text-white transition-colors cursor-pointer"
              >
                <span>Next phase</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Runbook Callout */}
        {onOpenRunbook && (
          <div className="mt-10 text-center">
            <button
              onClick={() => onOpenRunbook(3)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B7CFF]/10 hover:bg-[#8B7CFF]/20 border border-[#8B7CFF]/35 text-[#8B7CFF] hover:text-white text-xs font-mono font-bold tracking-[1.5px] transition-all cursor-pointer shadow-sm"
            >
              <span>Inspect Deterministic Execution State Machine (Chapter 04)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
