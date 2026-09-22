import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SynqFlowDiagram } from '../../components/website/SynqFlowDiagram';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7 },
};

export function HowItWorksPage() {
  return (
    <main className="bg-[#05060D] text-[#ECEEF5] pt-24">

      {/* Hero */}
      <section className="section-padding bg-[#03040A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-4">
            <div className="section-label">The operating model</div>
          </motion.div>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-denton font-black text-white mb-6 leading-[0.95]"
          >
            How DIGISYNQ<br />
            <span className="text-white/40">actually works.</span>
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base text-white/55 leading-relaxed max-w-2xl"
          >
            DIGISYNQ does not provide a generic list of services. It operates a specific loop — from identifying a real problem to re-synchronizing the system as the ecosystem changes. Here is the full operating model.
          </motion.p>
        </div>
      </section>

      {/* The core equation */}
      <section className="section-padding bg-[#05060D] border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="section-label">The business equation</div>
            <h2 className="text-2xl sm:text-3xl font-denton font-black text-white mb-4">
              Every SYNQ follows the same logic.
            </h2>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="synq-card p-8 sm:p-12 space-y-6"
          >
            <div className="space-y-4">
              {[
                { label: 'EXISTING RESOURCES', desc: 'What is already in the ecosystem — people, skills, technology, content, infrastructure', color: 'text-white/60' },
                { label: '+', desc: '', color: 'text-[#5CE1E6] text-2xl font-black' },
                { label: 'IDENTIFIED PROBLEM', desc: 'A specific gap, friction, or coordination failure', color: 'text-[#E8B84B]/80' },
                { label: '+', desc: '', color: 'text-[#5CE1E6] text-2xl font-black' },
                { label: 'MISSING CONNECTION', desc: 'The exact link that does not yet exist', color: 'text-white/60' },
                { label: '+', desc: '', color: 'text-[#5CE1E6] text-2xl font-black' },
                { label: 'DIGISYNQ COORDINATION', desc: 'The work of identifying, connecting, and managing the system', color: 'text-[#5CE1E6]' },
                { label: '=', desc: '', color: 'text-[#5CE1E6] text-2xl font-black' },
                { label: 'POTENTIAL VALUE CREATION', desc: 'Better projects, better careers, better use of what already exists', color: 'text-white font-bold' },
              ].map((item) => (
                item.desc ? (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className={`label-mono text-[10px] sm:text-xs w-48 sm:w-64 flex-shrink-0 pt-0.5 leading-tight ${item.color}`}>
                      {item.label}
                    </span>
                    <span className="text-sm text-white/50 leading-relaxed">{item.desc}</span>
                  </div>
                ) : (
                  <div key={item.label} className={`font-mono ${item.color}`}>{item.label}</div>
                )
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The 9-stage loop */}
      <section className="section-padding bg-[#03040A] border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="section-label">The synq loop</div>
            <h2 className="text-2xl sm:text-3xl font-denton font-black text-white mb-4">
              The operating loop, stage by stage.
            </h2>
            <p className="text-sm text-white/45">Click any stage to expand the detail.</p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }}>
            <SynqFlowDiagram compact={false} />
          </motion.div>
        </div>
      </section>

      {/* What DIGISYNQ does NOT do */}
      <section className="section-padding bg-[#05060D] border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="section-label">Important clarity</div>
            <h2 className="text-2xl sm:text-3xl font-denton font-black text-white mb-4">
              What DIGISYNQ does <span className="text-white/40">NOT</span> do.
            </h2>
            <p className="text-sm text-white/45">
              Being clear about this is as important as explaining what we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Own every studio, soundstage, or production facility',
              'Employ every technician in the ecosystem',
              'Replace or compete with existing agencies and production companies',
              'Make creative decisions — that belongs to the filmmakers',
              'Provide legal advice — qualified lawyers are referred for this',
              'Guarantee outcomes or savings — we identify potential and coordinate toward it',
              'Build a generic marketplace where everything goes',
              'Claim network effects before they are real and demonstrated',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 px-4 py-3.5 rounded-xl border border-white/[0.05] bg-[#0E1120]/60">
                <span className="label-mono text-[9px] text-[#EF4444]/50 mt-0.5 flex-shrink-0">NOT</span>
                <span className="text-xs text-white/50">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#03040A] border-t border-white/[0.04] text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-denton font-black text-white">
              Ready to start?
            </h2>
            <p className="text-sm text-white/50">
              Tell us your problem. We'll map the gap and build a SYNQ path.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/start" className="btn-primary">
                Start a synq <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/ecosystem" className="btn-secondary">
                Explore the ecosystem
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
