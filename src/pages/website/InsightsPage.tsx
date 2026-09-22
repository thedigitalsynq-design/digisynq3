import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { INSIGHTS_TOPICS } from '../../data/website/core_data';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7 },
};

export function InsightsPage() {
  return (
    <main className="bg-[#05060D] text-[#ECEEF5] pt-24">
      <section className="section-padding bg-[#03040A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-4"><div className="section-label">INSIGHTS</div></motion.div>
          <motion.h1 {...fadeUp} transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl sm:text-5xl font-denton font-black text-white mb-6 leading-[0.95]">
            How we think<br /><span className="text-white/40">about the industry.</span>
          </motion.h1>
          <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base text-white/55 leading-relaxed max-w-2xl">
            Articles, frameworks, and observations on the filmmaking ecosystem. Not advice. Not claims. Thinking.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-[#05060D] border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INSIGHTS_TOPICS.map((topic, i) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="synq-card p-6 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="label-mono text-[9px] text-white/30">{topic.category}</span>
                  <span className="label-mono text-[8px] text-white/20">{topic.reading_time} read</span>
                </div>
                <h3 className="text-base font-denton font-black text-white leading-tight">{topic.title}</h3>
                <div className="pt-3 border-t border-white/[0.04]">
                  <span className="label-mono text-[9px] text-[#5CE1E6]/50">COMING SOON</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 synq-card p-6 text-center space-y-3 border border-[#5CE1E6]/10">
            <p className="text-sm text-white/50">
              New insights are added as we learn more from real problems and real coordination work.
            </p>
            <Link to="/start" className="btn-ghost inline-flex">
              Start a SYNQ — be part of what we learn <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
