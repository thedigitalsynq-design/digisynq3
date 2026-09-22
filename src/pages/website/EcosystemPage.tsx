import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { EcosystemMap } from '../../components/website/EcosystemMap';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7 },
};

export function EcosystemPage() {
  return (
    <main className="bg-[#05060D] text-[#ECEEF5] pt-24">

      <section className="section-padding bg-[#03040A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-4">
            <div className="section-label">The ecosystem</div>
          </motion.div>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl sm:text-5xl font-denton font-black text-white mb-6 leading-[0.95]"
          >
            Every participant.<br />
            <span className="text-white/40">One coordination layer.</span>
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base text-white/55 leading-relaxed max-w-2xl mb-3"
          >
            DIGISYNQ does not own the ecosystem. It connects it. Click any participant node below to see what they need and how DIGISYNQ creates connections.
          </motion.p>
          <p className="text-xs text-white/30 font-mono">← Click any node to explore</p>
        </div>
      </section>

      <section className="section-padding bg-[#05060D] border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EcosystemMap size="full" />
        </div>
      </section>

      {/* The coordination principle */}
      <section className="section-padding bg-[#03040A] border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="section-label">The coordination principle</div>
            <h2 className="text-2xl sm:text-3xl font-denton font-black text-white mb-4">
              DIGISYNQ sits across the ecosystem.
            </h2>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="synq-card p-8 space-y-4"
          >
            <p className="text-sm text-white/60 leading-relaxed">
              Not necessarily above it. Not necessarily owning it. Not replacing it.
            </p>
            <p className="text-base text-white font-semibold">Instead: connecting it.</p>
            <div className="pt-4 border-t border-white/[0.05] space-y-3">
              {[
                'DIGISYNQ connects producers with the technicians they need',
                'It connects studios with projects that need their capacity',
                'It connects creators with distribution pathways',
                'It connects brands with authentic entertainment partnerships',
                'It connects investors with better project intelligence',
                'It connects audiences with content they will care about',
              ].map((line) => (
                <div key={line} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#5CE1E6]/50 mt-2 flex-shrink-0" />
                  <span className="text-sm text-white/60">{line}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#05060D] border-t border-white/[0.04] text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="space-y-4">
            <h2 className="text-2xl font-denton font-black text-white">
              Which participant are you?
            </h2>
            <p className="text-sm text-white/45">
              Start a SYNQ from your perspective.
            </p>
            <Link to="/start" className="btn-primary inline-flex">
              Start a synq <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
