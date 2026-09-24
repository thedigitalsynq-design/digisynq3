import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, X, Shield, Zap, Sparkles } from 'lucide-react';
import { OPERATING_PRINCIPLES } from '../data/core_data';

const WHAT_WE_ARE_NOT = [
  {
    title: 'Not a Talent Agency',
    desc: 'We do not lock technicians or artists into exclusive representation or extract 20% commission tolls. We provide transparent access to open market opportunities.',
  },
  {
    title: 'Not an Asset-Heavy Studio',
    desc: 'We do not borrow millions to purchase camera fleets, lighting trucks, or real estate complexes that sit dark between production cycles. We coordinate existing capacity.',
  },
  {
    title: 'Not a Generic Consultancy',
    desc: 'We do not deliver theoretical slide decks and walk away. We embed directly across pre-production logistics, camera-to-cloud dailies telemetry, and theatrical distribution.',
  },
  {
    title: 'Not a Predatory Financier',
    desc: 'We do not demand oppressive backend equity surrenders or high-interest bridge loans. We tie milestone funding tranches directly to verified scene delivery.',
  },
];

export function AboutPage() {
  return (
    <main className="bg-[#07080b] text-[#ECEEF5] selection:bg-white/20 selection:text-white">

      {/* ── 01. Hero Section ── */}
      <section className="pt-40 sm:pt-48 pb-20 sm:pb-28 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-zinc-400 mb-8 tracking-wide">
            <span>Philosophy & Operating Thesis</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] [letter-spacing:-0.035em] mb-8">
            The cinema coordination thesis.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 font-normal leading-relaxed max-w-3xl mb-12">
            The film industry does not suffer from a shortage of stories, craft talent, or private capital. It suffers from systemic entropy. DigiSynq is engineered as the connective nervous tissue that aligns fragmented forces into unified momentum.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/start"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              Start a synq
              <ArrowRight size={15} />
            </Link>
            <Link
              to="/the-synq"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-sm text-zinc-300 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              The Synq codex
            </Link>
          </div>
        </div>
      </section>

      {/* ── 02. Canonical Definition ── */}
      <section className="py-24 sm:py-32 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="rounded-3xl bg-[#090b10] border border-white/[0.06] p-8 sm:p-14 space-y-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block">
              Core Definition
            </span>

            <blockquote className="text-2xl sm:text-4xl font-bold text-white leading-snug tracking-tight">
              “An asset-light cinema problem-solving company building a synchronization layer across the filmmaking ecosystem.”
            </blockquote>

            <p className="text-base text-zinc-300 leading-relaxed max-w-3xl">
              We identify friction points between craft skills, soundstages, technology, IP rights, distribution windows, and audience momentum — then assemble and synchronize the optimal elements to generate value without balance-sheet debt.
            </p>

            <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-6 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>We do not claim to own the ecosystem.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>We synchronize the ecosystem.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. Boundary Definition (What We Are NOT) ── */}
      <section className="py-24 sm:py-32 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
              Clear Boundaries
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              What DigiSynq is deliberately not
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              Discipline requires saying no. We maintain extreme focus by refusing to replicate existing legacy business models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHAT_WE_ARE_NOT.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-white/[0.015] border border-white/[0.06] flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium mb-3">
                    <X size={16} className="text-zinc-500 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-zinc-600 uppercase tracking-wider pt-3 border-t border-white/[0.04]">
                  Non-goal
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 04. The 8 Operating Principles ── */}
      <section className="py-24 sm:py-32 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
              Governance Axioms
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              The eight operating principles
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              Every decision we make — from protocol architecture to fee structure — is governed by these foundational axioms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {OPERATING_PRINCIPLES.map((principle, index) => (
              <div
                key={principle.id}
                className="p-8 rounded-2xl bg-[#090b10] border border-white/[0.06] hover:border-white/15 transition-all flex items-start gap-5"
              >
                <span className="text-xs font-mono text-zinc-500 shrink-0 mt-0.5">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1.5">
                    {principle.label}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 05. Call to Action ── */}
      <section className="py-24 sm:py-32 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Build with the synchronization layer
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed max-w-xl mx-auto mb-10">
            Join the forward-looking producers, directors, facility owners, and technicians redefining how cinema is produced and released.
          </p>
          <Link
            to="/start"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            Start a synq
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  );
}
