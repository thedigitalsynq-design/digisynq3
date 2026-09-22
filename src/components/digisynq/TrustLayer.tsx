import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, UserCheck, Lock, Award, ArrowRight } from 'lucide-react';

interface TrustLayerProps {
  onOpenRunbook?: (chapterIndex?: number) => void;
}

export const TrustLayer: React.FC<TrustLayerProps> = ({ onOpenRunbook }) => {
  const masterTrustPillars = [
    {
      title: 'Biometric & Guild Verification',
      badge: 'Identity Node',
      icon: UserCheck,
      accent: '#5CE1E6',
      description: 'Automated biometric identity attestation cross-checked against SAG-AFTRA, IATSE, and DGA registries to eliminate impersonation scams and credit fraud.'
    },
    {
      title: 'Dual-Key Milestone Escrow',
      badge: 'Treasury Node',
      icon: Lock,
      accent: '#8B7CFF',
      description: 'Production capital is locked in segregated FDIC-insured vaults and disbursed only upon cryptographic milestone sign-offs, protecting both buyers and vendors.'
    },
    {
      title: 'Forensic DRM & Watermarking',
      badge: 'Content Node',
      icon: Award,
      accent: '#4D8DFF',
      description: 'Imperceptible, frame-level steganographic watermarks embedded in scripts and screeners encode viewer identity, instantly tracing leaks to the source.'
    },
    {
      title: '24-Hour Dispute Resolution SLAs',
      badge: 'Governance Node',
      icon: ShieldCheck,
      accent: '#5EF2B0',
      description: 'Industry-veteran arbitration boards enforce binding 24-hour resolutions for gear condition, cancellations, and delivery disputes with predefined indemnities.'
    }
  ];

  return (
    <section
      id="trust-layer"
      className="py-24 sm:py-32 bg-[#070A12] border-t border-white/[0.08] relative overflow-hidden text-left"
    >


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div data-augmented-ui="tl-clip br-clip" className="aug-hud-chip inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/90 border border-[#5CE1E6]/30 text-[#5CE1E6] font-mono text-[11px] font-bold tracking-[2px] mb-6 backdrop-blur-xl shadow-[0_0_15px_rgba(92,225,230,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] shadow-[0_0_8px_#5CE1E6]" />
            SynqTrust protocol.
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[0.98] font-denton-extrabold">
            Trust architecture.<br />
            <span className="text-white/75 font-denton-extrabold">For connected cinema.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto font-sans">
            Cinema has traditionally operated on opaque word-of-mouth. SynqTrust turns trust into an automated, mathematically verifiable guarantee between nodes.
          </p>
        </div>

        {/* 4 Master Pillars — Apple bento zero-gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[6px] mb-12">
          {masterTrustPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bento-card flex flex-col justify-between transition-all duration-300 overflow-hidden group"
              >


                <div>
                  <div className="flex items-center justify-start mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/20 bg-white/[0.05]"
                      style={{ color: pillar.accent }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span
                    className="text-[10px] font-mono font-extrabold tracking-[1.5px] uppercase block mb-1.5"
                    style={{ color: pillar.accent }}
                  >
                    {pillar.badge}
                  </span>

                  <h3 className="text-lg font-denton-extrabold font-extrabold text-white mb-2 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans font-medium [word-spacing:0.04em]">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.10] flex items-center gap-2 text-[10px] font-mono font-bold text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5EF2B0] shadow-[0_0_6px_#5EF2B0]" />
                  <span>Verified Node Guarantee</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Minimal Runbook Callout */}
        {onOpenRunbook && (
          <div className="text-center">
            <button
              onClick={() => onOpenRunbook(6)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5CE1E6]/10 hover:bg-[#5CE1E6]/20 border border-[#5CE1E6]/35 text-[#5CE1E6] hover:text-white text-xs font-mono font-bold tracking-[1.5px] transition-all cursor-pointer shadow-sm"
            >
              <span>Inspect Zero-Trust Cryptographic Protocol (Chapter 07)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
