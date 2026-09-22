import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { WORKSHOP_PROGRAMS } from '../../data/website/core_data';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7 },
};

export function WorkshopsPage() {
  return (
    <main className="bg-[#05060D] text-[#ECEEF5] pt-24">
      <section className="section-padding bg-[#03040A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-4"><div className="section-label">WORKSHOPS</div></motion.div>
          <motion.h1 {...fadeUp} transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl sm:text-5xl font-denton font-black text-white mb-6 leading-[0.95]">
            Learning connects<br /><span className="text-white/40">to opportunity.</span>
          </motion.h1>
          <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base text-white/55 leading-relaxed max-w-2xl">
            DIGISYNQ workshops are part of the ecosystem engine — not the core product. They create a bridge between education and real industry requirements. The goal is not to just teach skills. The goal is to make skills more connected to opportunity.
          </motion.p>
        </div>
      </section>

      {/* Workshop flow */}
      <section className="section-padding bg-[#05060D] border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-10">
            <div className="section-label">THE WORKSHOP MODEL</div>
            <h2 className="text-2xl sm:text-3xl font-denton font-black text-white mt-2">
              Every workshop follows a deployment model.
            </h2>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4">
              {[
                { step: 'LEARN', desc: 'Skills, frameworks, industry context' },
                { step: 'PRACTICE', desc: 'Hands-on application in realistic scenarios' },
                { step: 'FINE-TUNE', desc: 'Feedback and refinement' },
                { step: 'CONNECT', desc: 'Introductions to the right ecosystem participants' },
                { step: 'DEPLOY', desc: 'Apply in real projects' },
                { step: 'FEEDBACK', desc: 'Continuous improvement loop' },
              ].map((s, i) => (
                <React.Fragment key={s.step}>
                  <div className="flex flex-col items-center gap-2 min-w-[100px] text-center">
                    <div className="w-12 h-12 rounded-xl bg-[#0E1120] border border-white/[0.07] flex items-center justify-center label-mono text-[9px] text-[#5CE1E6]">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="label-mono text-[9px] text-white">{s.step}</div>
                    <div className="text-[9px] text-white/35 leading-tight">{s.desc}</div>
                  </div>
                  {i < 5 && <div className="text-white/15 font-mono hidden sm:block">→</div>}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workshop catalog */}
      <section className="section-padding bg-[#03040A] border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <div className="section-label">WORKSHOP PROGRAMS</div>
            <h2 className="text-2xl font-denton font-black text-white mt-2">Current catalog.</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WORKSHOP_PROGRAMS.map((w, i) => (
              <motion.div
                key={w.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="synq-card p-6 space-y-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="label-mono text-[9px] text-white/30">{w.category}</span>
                  <span className="label-mono text-[8px] text-[#5CE1E6]/70">{w.format}</span>
                </div>
                <h3 className="text-base font-denton font-black text-white">{w.title}</h3>
                <p className="text-xs text-white/45 leading-relaxed">{w.description}</p>
                <div className="pt-3 border-t border-white/[0.05]">
                  <div className="label-mono text-[8px] text-white/25 mb-2">OUTCOME</div>
                  <p className="text-xs text-white/60 leading-relaxed">{w.outcome}</p>
                </div>
                <div className="flex gap-1.5 flex-wrap">
                  {w.flow.map((step, si) => (
                    <React.Fragment key={step}>
                      <span className="text-[9px] font-mono text-white/35">{step}</span>
                      {si < w.flow.length - 1 && <span className="text-white/15 text-[9px]">→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#05060D] border-t border-white/[0.04] text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="space-y-4">
            <h2 className="text-2xl font-denton font-black text-white">Interested in a workshop?</h2>
            <p className="text-sm text-white/45">Tell us what you're looking to develop and we'll find the right program.</p>
            <Link to="/start" className="btn-primary inline-flex">
              START A SYNQ <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
