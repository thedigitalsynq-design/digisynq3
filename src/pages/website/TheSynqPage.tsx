import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ProblemEngine } from '../../components/website/ProblemEngine';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7 },
};

export function TheSynqPage() {
  return (
    <main className="bg-[#05060D] text-[#ECEEF5] pt-24">

      {/* Hero */}
      <section className="section-padding bg-[#03040A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-4">
            <div className="section-label">The synq idea</div>
          </motion.div>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-denton font-black text-white mb-6 leading-[0.95]"
          >
            Filmmaking is a system.<br />
            <span className="text-white/40">The gaps are the problem.</span>
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base text-white/55 leading-relaxed max-w-2xl"
          >
            DIGISYNQ starts with a simple observation: cinema has resources. Enormous talent, impressive infrastructure, vast audiences, significant investment. But those resources are fragmented. The system is not synchronized.
          </motion.p>
        </div>
      </section>

      {/* The fragmentation evidence */}
      <section className="section-padding bg-[#05060D] border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <motion.div {...fadeUp} className="text-center mb-8">
            <div className="section-label">What fragmentation looks like</div>
          </motion.div>

          {[
            {
              opening: 'A technician may exist.',
              consequence: 'A project may need the technician.',
              gap: 'They never find each other.',
            },
            {
              opening: 'A studio may have unused capacity.',
              consequence: 'Another project may need that capacity.',
              gap: 'The capacity goes to waste.',
            },
            {
              opening: 'A creator may have an audience.',
              consequence: 'A project may need that audience.',
              gap: 'The connection never happens.',
            },
            {
              opening: 'Content may exist.',
              consequence: 'Distribution may be missing.',
              gap: 'The content reaches no one.',
            },
            {
              opening: 'Skills may exist.',
              consequence: 'Opportunities may be missing.',
              gap: 'Talented people remain underutilized.',
            },
            {
              opening: 'Information may exist.',
              consequence: 'Decision-makers may not have it at the right time.',
              gap: 'Bad decisions get made on incomplete data.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.opening}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="synq-card p-5 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div>
                <div className="label-mono text-[9px] text-white/25 mb-1.5">Reality</div>
                <p className="text-sm text-white/70">{item.opening}</p>
              </div>
              <div>
                <div className="label-mono text-[9px] text-white/25 mb-1.5">But also</div>
                <p className="text-sm text-white/70">{item.consequence}</p>
              </div>
              <div>
                <div className="label-mono text-[9px] text-[#EF4444]/60 mb-1.5">The gap</div>
                <p className="text-sm text-[#EF4444]/70 font-medium">{item.gap}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The category */}
      <section className="section-padding bg-[#03040A] border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-8">
            <div className="section-label">The category</div>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="synq-card p-8 sm:p-12 text-center space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-denton font-black text-white leading-tight">
              Cinema Synchronization.
            </h2>
            <p className="text-base text-white/60 leading-relaxed max-w-2xl mx-auto">
              A system for identifying, connecting and coordinating fragmented resources across filmmaking. The resources can include people, technicians, skills, studios, equipment, production capabilities, technology, content, media, creators, influencers, brands, distribution, rights, data, audiences, and opportunities.
            </p>
            <div className="inline-block px-6 py-3 rounded-xl border border-[#5CE1E6]/25 bg-[#5CE1E6]/06">
              <p className="text-sm font-denton font-black text-[#5CE1E6]">
                DIGISYNQ does not need to own all of these.
              </p>
              <p className="text-sm text-white/60 mt-1">
                It creates value by intelligently connecting them.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Engine embedded */}
      <section className="section-padding bg-[#05060D] border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-10">
            <div className="section-label">Start with your problem</div>
            <h2 className="text-2xl sm:text-3xl font-denton font-black text-white mb-2">
              What gap are you facing?
            </h2>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="synq-card p-6 sm:p-10">
              <ProblemEngine compact />
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
