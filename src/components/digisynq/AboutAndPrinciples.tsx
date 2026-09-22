import React from 'react';
import { motion } from 'motion/react';
import { PRINCIPLES } from '../../data/platformsData';
import { ArrowRight, BookOpen, ArrowUpRight, Users } from 'lucide-react';

interface AboutAndPrinciplesProps {
  onOpenRunbook?: (chapterIndex?: number) => void;
  onOpenJoinModal?: (role?: string) => void;
}

export const AboutAndPrinciples: React.FC<AboutAndPrinciplesProps> = ({
  onOpenRunbook,
  onOpenJoinModal,
}) => {
  return (
    <section
      id="about-vision"
      className="py-24 sm:py-32 bg-[#070A12] border-t border-white/[0.08] relative overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* About DigiSynq Narrative */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div data-augmented-ui="tl-clip br-clip" className="aug-hud-chip inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/90 border border-[#5CE1E6]/30 text-[#5CE1E6] font-mono text-[11px] font-bold tracking-[2px] mb-6 backdrop-blur-xl shadow-[0_0_15px_rgba(92,225,230,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] shadow-[0_0_8px_#5CE1E6]" />
            Foundational mission.
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[0.98] font-denton-extrabold">
            Building the connective layer.<br />
            <span className="text-white/75">For cinema.</span>
          </h2>

          <div className="mt-8 space-y-6 text-base sm:text-lg text-white/70 leading-relaxed text-left sm:text-center">
            <p>
              DigiSynq was created around a simple observation: cinema already contains enormous amounts of talent, infrastructure, content, knowledge and opportunity. Much of its value is lost because those resources remain fragmented.
            </p>
            <p className="text-[#5CE1E6] font-semibold text-lg sm:text-xl">
              DigiSynq is building the network between those points.
            </p>
            <p>
              We believe the next generation of cinema infrastructure will not necessarily be defined by who owns the most physical assets, but by who can connect the ecosystem most intelligently.
            </p>
          </div>
        </div>

        {/* ── Co-Founders ─────────────────────────────────────────── */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/90 border border-white/20 text-white font-mono text-[10px] font-bold tracking-[2.5px] mb-4 backdrop-blur-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] shadow-[0_0_8px_#5CE1E6]" />
              Founding leadership.
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-denton-extrabold">
              Architects of the network.
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mt-2 leading-relaxed font-mono tracking-wide">
              The founding partners building the asset-light operating system for cinema.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[6px]">
            {[
              {
                name: 'Yathish',
                role: 'Co-Founder',
                focus: 'Network Architecture & Strategy',
                tag: '01',
                accent: '#5CE1E6',
                border: 'border-[#5CE1E6]/30 hover:border-[#5CE1E6]/60',
              },
              {
                name: 'Varun',
                role: 'Co-Founder',
                focus: 'Platform Engineering & Infrastructure',
                tag: '02',
                accent: '#8B7CFF',
                border: 'border-[#8B7CFF]/30 hover:border-[#8B7CFF]/60',
              },
              {
                name: 'Rakshith',
                role: 'Co-Founder',
                focus: 'Cinema Ecosystem & Industry Partnerships',
                tag: '03',
                accent: '#4D8DFF',
                border: 'border-[#4D8DFF]/30 hover:border-[#4D8DFF]/60',
              },
              {
                name: 'Rubesh',
                role: 'Co-Founder',
                focus: 'Operations & Market Expansion',
                tag: '04',
                accent: '#5EF2B0',
                border: 'border-[#5EF2B0]/30 hover:border-[#5EF2B0]/60',
              },
            ].map((founder) => (
              <motion.div
                key={founder.name}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`bento-card border ${founder.border} transition-all duration-300 relative overflow-hidden group`}
              >

                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-denton-extrabold text-lg text-white border border-white/20 bg-gradient-to-b from-white/15 to-white/5 shadow-inner"
                    style={{ borderTopColor: founder.accent }}
                  >
                    {founder.name.charAt(0)}
                  </div>
                  <span className="text-[10px] font-mono tracking-[2px] font-bold text-white/40">
                    {founder.tag}
                  </span>
                </div>

                <div>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-denton-extrabold mb-1">
                    {founder.name}
                  </h4>
                  <div
                    className="text-[11px] font-mono font-extrabold tracking-[2px] mb-2 uppercase"
                    style={{ color: founder.accent }}
                  >
                    {founder.role}
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans font-medium [word-spacing:0.04em]">
                    {founder.focus}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Founders Action Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {onOpenJoinModal && (
              <button
                onClick={() => onOpenJoinModal('Leadership Contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs font-mono font-bold tracking-[1.5px] transition-all cursor-pointer active:scale-95 shadow-sm"
              >
                <Users className="w-3.5 h-3.5 text-[#5CE1E6]" />
                <span>Contact Leadership Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
            {onOpenRunbook && (
              <button
                onClick={() => onOpenRunbook(7)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8B7CFF]/10 hover:bg-[#8B7CFF]/20 border border-[#8B7CFF]/35 text-[#8B7CFF] hover:text-white text-xs font-mono font-bold tracking-[1.5px] transition-all cursor-pointer active:scale-95 shadow-sm"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read Governance & Execution Roadmap (Chapter 08)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* 8 Company principles */}
        <div className="rounded-3xl bg-[#0D1220]/80 border border-white/[0.14] p-6 sm:p-10 lg:p-12 shadow-2xl relative backdrop-blur-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono tracking-widest text-[#5CE1E6] block mb-1 font-bold">
              Guiding Directives
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-denton-extrabold">
              Where innovation meets aesthetics.
            </h3>
            <p className="text-sm sm:text-base text-white/80 mt-2 leading-relaxed font-sans font-medium">
              The foundational convictions that guide our architecture, partnerships, and product design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[6px]">
            {PRINCIPLES.map((principle, idx) => {
              // Restrained 4-accent palette: Cyan, Violet, Aurora, Mint
              const tints = [
                { border: 'border-[#5CE1E6]/35 hover:border-[#5CE1E6]/70', tag: 'text-[#5CE1E6]', dot: 'bg-[#5CE1E6]' },
                { border: 'border-[#8B7CFF]/35 hover:border-[#8B7CFF]/70', tag: 'text-[#8B7CFF]', dot: 'bg-[#8B7CFF]' },
                { border: 'border-[#4D8DFF]/35 hover:border-[#4D8DFF]/70', tag: 'text-[#4D8DFF]', dot: 'bg-[#4D8DFF]' },
                { border: 'border-[#5EF2B0]/35 hover:border-[#5EF2B0]/70', tag: 'text-[#5EF2B0]', dot: 'bg-[#5EF2B0]' },
              ];
              const tint = tints[idx % tints.length];

              return (
                <motion.div
                  key={principle.name}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className={`bento-card border ${tint.border} transition-all duration-200 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-end mb-3.5">
                      <span className={`w-2 h-2 rounded-full ${tint.dot} shadow-[0_0_8px_currentColor]`} />
                    </div>

                    <h4 className="text-base sm:text-lg font-denton-extrabold font-extrabold text-white mb-1 tracking-tight">
                      {principle.name}
                    </h4>

                    <p className={`text-xs font-bold mb-2.5 font-mono ${tint.tag}`}>
                      {principle.summary}
                    </p>

                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans font-medium [word-spacing:0.04em]">
                      {principle.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Cross-Section Navigation Actions */}
          <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-3">
            <a
              href="#flywheel"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/15 text-white/90 hover:text-white text-xs font-mono font-bold tracking-[1.5px] transition-all cursor-pointer active:scale-95"
            >
              <span>Explore 10-Stage Flywheel</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#5CE1E6]" />
            </a>

            <a
              href="#trust-layer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/15 text-white/90 hover:text-white text-xs font-mono font-bold tracking-[1.5px] transition-all cursor-pointer active:scale-95"
            >
              <span>View Zero-Trust Cryptographic Layer</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#8B7CFF]" />
            </a>

            {onOpenRunbook && (
              <button
                onClick={() => onOpenRunbook(0)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5CE1E6]/10 hover:bg-[#5CE1E6]/20 border border-[#5CE1E6]/35 text-[#5CE1E6] hover:text-white text-xs font-mono font-bold tracking-[1.5px] transition-all cursor-pointer active:scale-95 shadow-sm"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Return to Chapter 01 (Manifesto)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
