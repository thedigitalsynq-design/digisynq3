import React, { useState } from 'react';
import { Split, Network, ArrowUpRight, ArrowRight, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProblemSectionProps {
  onOpenRunbook?: (chapterIndex?: number) => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenRunbook }) => {
  const [activeTab, setActiveTab] = useState<'fragmented' | 'connected'>('fragmented');

  const problemPoints = [
    {
      title: 'Enormous Talent',
      symptom: 'Siloed behind agency gatekeepers, unverified credits, and regional rolodexes.',
      connected: 'Verified global talent graph with instant credit verification and direct casting dispatch.',
      href: '#audience-solutions',
      targetSection: 'Talent & Crew',
    },
    {
      title: 'Underutilized Resources',
      symptom: 'Millions in cameras, lenses, soundstages, and mobile trailers sit dormant between shoots.',
      connected: 'Peer-to-peer liquidity marketplace unlocking idle hardware without owners losing custody.',
      href: '#marketplace',
      targetSection: 'Marketplace',
    },
    {
      title: 'Fragmented Audiences',
      symptom: 'Filmmakers lose direct touch with ticket-buyers once theatrical windows close.',
      connected: 'First-party fan CRM, direct community circles, and closed-loop ticketing attribution.',
      href: '#audience-solutions',
      targetSection: 'Audiences & Fans',
    },
    {
      title: 'Disconnected Businesses',
      symptom: 'Studios, exhibitors, rental houses, and vendors operate on mismatched systems.',
      connected: 'Cross-entity workflow pipeline synchronizing purchase orders, releases, and milestones.',
      href: '#platform-model',
      targetSection: '7-Phase Pipeline',
    },
    {
      title: 'Scattered Information',
      symptom: 'Decisions rely on lagging trade gossip, slow box office calls, and anecdotal guesses.',
      connected: 'Real-time telemetry capturing 14.2M+ box office, social sentiment, and screening signals.',
      href: '#intelligence',
      targetSection: 'Telemetry Engine',
    },
    {
      title: 'Inefficient Workflows',
      symptom: 'Weeks spent chasing call sheets, paper deal memos, and disputed distribution settlements.',
      connected: 'Automated script breakdowns, digital call sheets with GPS receipts, and CAM escrow waterfalls.',
      href: '#platform-model',
      targetSection: 'State Machine',
    },
    {
      title: 'Difficult Discovery',
      symptom: 'Independent films, specialized crew, and vacant screens struggle to find reciprocal demand.',
      connected: 'Bipartite semantic matching engine pairing buyers, spaces, and talent in seconds.',
      href: '#product-directory',
      targetSection: 'Directory',
    },
    {
      title: 'Inconsistent Trust',
      symptom: 'Unverified resumes, damaged rented gear, and counterparty payment defaults plague sets.',
      connected: 'SynqTrust verifiable credentials, union verification, and secure milestone escrow.',
      href: '#trust-layer',
      targetSection: 'SynqTrust',
    },
  ];

  return (
    <section
      id="problem"
      className="py-28 sm:py-36 bg-[#070A12] border-t border-white/10 relative overflow-hidden"
    >
      <div className="cred-hairline absolute top-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header (CRED Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div data-augmented-ui="tl-clip br-clip" className="aug-hud-chip inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/90 border border-[#FFC857]/30 text-[#FFC857] font-mono text-[11px] font-bold tracking-[2px] mb-6 backdrop-blur-xl shadow-[0_0_15px_rgba(255,200,87,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC857] shadow-[0_0_8px_#FFC857]" />
            The core disconnect.
          </div>

          <h2 className="text-[clamp(1.4rem,6.9vw,4.4rem)] font-extrabold text-white tracking-tight leading-[0.98] font-denton-extrabold">
            <span className="block whitespace-nowrap">Relationships connect cinema.</span>
            <span className="block whitespace-nowrap text-white/75 font-denton-extrabold">Systems break it.</span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Cinema doesn't lack talent, resources, content, audiences or opportunities.
            It loses value when they remain fragmented, disconnected, and locked in silos.
          </p>

          {/* Segmented Control (CRED Style) */}
          <div className="mt-10 inline-flex items-center p-1 rounded-full bg-white/[0.05] border border-white/15 backdrop-blur-xl">
            <button
              onClick={() => setActiveTab('fragmented')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono font-bold tracking-[2px] transition-all duration-200 ${
                activeTab === 'fragmented'
                  ? 'bg-[#FFC857]/15 text-[#FFC857] border border-[#FFC857]/40 shadow-[0_0_20px_rgba(255,200,87,0.2)]'
                  : 'text-white/50 hover:text-white'
              }`}
              id="tab-fragmented-industry"
            >
              <Split className="w-3.5 h-3.5" />
              <span>The fragmented reality</span>
            </button>
            <button
              onClick={() => setActiveTab('connected')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono font-bold tracking-[2px] transition-all duration-200 ${
                activeTab === 'connected'
                  ? 'bg-white text-[#070A12] shadow-[0_0_25px_rgba(255,255,255,0.3)] font-bold'
                  : 'text-white/50 hover:text-white'
              }`}
              id="tab-digisynq-connected"
            >
              <Network className="w-3.5 h-3.5" />
              <span>DigiSynq connected</span>
            </button>
          </div>
        </motion.div>

        {/* Apple Bento Grid — 8 cards, 6px zero-gap, stretch fill */}
        <div className="relative">


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[6px] relative z-10">
          {problemPoints.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`bento-card ${
                activeTab === 'connected'
                  ? 'hover:border-[#5CE1E6]/40'
                  : 'hover:border-[#FFC857]/30'
              }`}
            >
              {/* Index + Status dot */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono text-white/40 tracking-[2px] font-bold">
                  0{index + 1}.
                </span>
                {activeTab === 'fragmented' ? (
                  <span className="w-2 h-2 rounded-full bg-[#FFC857] shadow-[0_0_6px_#FFC857]" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-[#5EF2B0] shadow-[0_0_6px_#5EF2B0]" />
                )}
              </div>

              <h3 className="text-base font-bold text-white mb-3 tracking-tight font-display">
                {item.title}
              </h3>

              <div className="text-xs sm:text-sm leading-relaxed min-h-[72px]">
                <AnimatePresence mode="wait">
                  {activeTab === 'fragmented' ? (
                    <motion.p
                      key="symptom"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="text-white/85 font-normal"
                    >
                      {item.symptom}
                    </motion.p>
                  ) : (
                    <motion.p
                      key="connected"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="text-white/90 font-medium"
                    >
                      {item.connected}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <a
                href={item.href}
                className="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono font-bold tracking-[1.5px] group cursor-pointer"
                title={`Explore ${item.targetSection}`}
              >
                <div className="flex items-center gap-2">
                  {activeTab === 'fragmented' ? (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFC857]" />
                      <span className="text-[#FFC857]">Friction &amp; waste</span>
                    </>
                  ) : (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5EF2B0]" />
                      <span className="text-[#5EF2B0]">Synchronized</span>
                    </>
                  )}
                </div>
                <span className="text-white/40 group-hover:text-[#5CE1E6] transition-colors flex items-center gap-1">
                  <span>{item.targetSection}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </a>
            </motion.div>
          ))}
        </div>
        </div>

        {/* Bottom Dual Cross-Links */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
          {onOpenRunbook && (
            <button
              onClick={() => onOpenRunbook(0)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.10] border border-white/20 text-white text-xs font-mono font-bold tracking-[1.5px] transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#FFC857]" />
              <span>Read Friction &amp; Problem Manifesto (Chapter 01)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          <a
            href="#network-flow"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5CE1E6]/10 hover:bg-[#5CE1E6]/20 border border-[#5CE1E6]/35 text-[#5CE1E6] hover:text-white text-xs font-mono font-bold tracking-[1.5px] transition-all shadow-sm active:scale-95"
          >
            <span>Explore 8-Node Synchronization Solution</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
