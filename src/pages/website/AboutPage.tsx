import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { OPERATING_PRINCIPLES, INSIGHTS_TOPICS } from '../../data/website/core_data';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7 },
};

export function AboutPage() {
  return (
    <main className="bg-[#05060D] text-[#ECEEF5] pt-24">

      {/* Hero */}
      <section className="section-padding bg-[#03040A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-4">
            <div className="section-label">ABOUT DIGISYNQ</div>
          </motion.div>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl sm:text-5xl font-denton font-black text-white mb-6 leading-[0.95]"
          >
            Built to think differently<br />
            <span className="text-white/40">about filmmaking.</span>
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base text-white/55 leading-relaxed max-w-2xl"
          >
            DIGISYNQ exists because the entertainment ecosystem has enormous resources that remain fragmented, underconnected, and underutilized. The goal is not to own those resources. The goal is to build the coordination layer that connects them.
          </motion.p>
        </div>
      </section>

      {/* The working definition */}
      <section className="section-padding bg-[#05060D] border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <div className="synq-card p-8 sm:p-12 border border-[#5CE1E6]/15">
              <div className="label-mono text-[9px] text-[#5CE1E6] mb-6">WORKING DEFINITION</div>
              <blockquote className="text-xl sm:text-2xl font-denton font-black text-white leading-snug mb-6">
                "An asset-light cinema problem-solving company building a synchronization layer across the filmmaking ecosystem."
              </blockquote>
              <p className="text-sm text-white/60 leading-relaxed">
                It identifies gaps between people, skills, resources, production, technology, media, content, rights, distribution and opportunity — then connects and coordinates the right elements to create better outcomes.
              </p>
              <div className="mt-8 pt-6 border-t border-white/[0.05]">
                <p className="text-base font-denton font-black text-[#5CE1E6]">
                  DIGISYNQ does not claim to own the ecosystem.
                </p>
                <p className="text-base font-denton font-black text-white">
                  DIGISYNQ connects the ecosystem.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why it exists */}
      <section className="section-padding bg-[#03040A] border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <div className="section-label">WHY IT EXISTS</div>
            <h2 className="text-2xl sm:text-3xl font-denton font-black text-white mt-2">
              Do not build to look large. Build to think differently.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { wrong: 'Try to own every asset', right: 'Own the intelligence that connects the assets' },
              { wrong: 'Sell everything', right: 'Solve specific, defined problems' },
              { wrong: 'Build a directory', right: 'Build relationships' },
              { wrong: 'Build a generic marketplace', right: 'Build a coordination layer' },
              { wrong: 'Build a normal agency website', right: 'Build the first visible expression of a new category' },
              { wrong: 'Say "We are innovative"', right: 'Make the experience prove it' },
            ].map((item, i) => (
              <motion.div
                key={item.wrong}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="synq-card p-5 space-y-3"
              >
                <div className="flex items-start gap-2">
                  <span className="label-mono text-[8px] text-[#EF4444]/50 mt-0.5 flex-shrink-0">NOT</span>
                  <span className="text-xs text-white/35 line-through">{item.wrong}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="label-mono text-[8px] text-[#5CE1E6] mt-0.5 flex-shrink-0">BUT</span>
                  <span className="text-xs text-white/70">{item.right}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="section-padding bg-[#05060D] border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <div className="section-label">8 OPERATING PRINCIPLES</div>
            <h2 className="text-2xl sm:text-3xl font-denton font-black text-white mt-2">
              How we choose to operate.
            </h2>
          </motion.div>
          <div className="space-y-4">
            {OPERATING_PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-start gap-5 p-5 rounded-xl border border-white/[0.05] hover:border-[#5CE1E6]/15 transition-all group"
              >
                <span className="label-mono text-[9px] text-white/20 pt-1 w-6 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="label-mono text-[10px] text-[#5CE1E6] mb-2 group-hover:text-white transition-colors">{p.label}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What DigiSynq should eventually own */}
      <section className="section-padding bg-[#03040A] border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-10">
            <div className="section-label">LONG-TERM STRATEGIC ASSETS</div>
            <h2 className="text-2xl sm:text-3xl font-denton font-black text-white mt-2">
              What DIGISYNQ builds toward owning.
            </h2>
            <p className="text-sm text-white/35 mt-2 font-mono italic">
              Not necessarily physical assets — the intelligence layer.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {[
              { asset: 'DATA', desc: 'Problem patterns and ecosystem intelligence' },
              { asset: 'KNOWLEDGE', desc: 'Cinema problem-solving knowledge' },
              { asset: 'IP', desc: 'Processes, frameworks and methodologies' },
              { asset: 'TECHNOLOGY', desc: 'Matching, mapping and coordination tools' },
              { asset: 'NETWORK', desc: 'Trusted ecosystem relationships' },
              { asset: 'BRAND', desc: 'Recognition as a problem-solving layer' },
              { asset: 'TRUST', desc: 'Reliable coordination' },
              { asset: 'PROCESS', desc: 'Repeatable SYNQ workflows' },
            ].map((item) => (
              <div key={item.asset} className="synq-card p-4 space-y-2 text-center">
                <div className="label-mono text-[10px] text-[#5CE1E6]">{item.asset}</div>
                <p className="text-[10px] text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Insights teaser */}
      <section className="section-padding bg-[#05060D] border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-8">
            <div className="section-label">INSIGHTS</div>
            <h2 className="text-2xl font-denton font-black text-white mt-2">
              How we think about the industry.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {INSIGHTS_TOPICS.slice(0, 4).map((topic, i) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="synq-card p-5 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="label-mono text-[9px] text-white/30">{topic.category}</span>
                  <span className="label-mono text-[8px] text-white/20">{topic.reading_time} read</span>
                </div>
                <h3 className="text-sm font-denton font-black text-white">{topic.title}</h3>
              </motion.div>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/insights" className="btn-ghost">
              All insights <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-[#03040A] border-t border-white/[0.04] text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-denton font-black text-white">
              Start a SYNQ with us.
            </h2>
            <p className="text-sm text-white/45">
              Tell us about your problem. We will map it, find the gap, and identify a relevant path.
            </p>
            <Link to="/start" className="btn-primary inline-flex">
              START A SYNQ <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
