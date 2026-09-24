import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, X, Shield, Zap, Sparkles } from 'lucide-react';
import { OPERATING_PRINCIPLES } from '../data/core_data';

const WHAT_WE_ARE_NOT = [
  {
    title: 'Not a Talent Agency',
    desc: 'We do not lock creative professionals or crew into exclusive representation or extract commission tolls. We provide transparent access to open market opportunities across verified guilds and talent.',
  },
  {
    title: 'Not an Asset-Heavy Studio or Venue',
    desc: 'We do not accumulate camera fleets, lighting trucks, or physical real estate that sits dark between production cycles. We coordinate existing capacity across partner facilities and venues.',
  },
  {
    title: 'Not a Generic Consultancy',
    desc: 'We do not deliver theoretical slide decks and walk away. We embed directly across pre-production logistics, dailies telemetry, workflow coordination, and distribution execution.',
  },
  {
    title: 'Not a Predatory Financier',
    desc: 'We do not demand oppressive equity surrenders or high-interest bridge debt. We tie milestone funding tranches directly to verified deliverable turnarounds.',
  },
];

const WHO_WE_SERVE = [
  {
    role: 'Creators',
    desc: 'Writers, directors, artists, and showrunners creating entertainment content and experiences.',
  },
  {
    role: 'Producers & Operators',
    desc: 'Individuals and production companies responsible for packaging and executing projects.',
  },
  {
    role: 'Talent & Crew',
    desc: 'Creative heads, technical crews, and specialists providing on-set and digital capabilities.',
  },
  {
    role: 'Asset Owners',
    desc: 'Operators of soundstages, LED volumes, equipment packages, and production venues.',
  },
  {
    role: 'Service Providers',
    desc: 'Post-production, VFX, animation, sound, and specialized technology partners.',
  },
  {
    role: 'Capital & Platforms',
    desc: 'Financiers, brands, exhibitors, OTT platforms, and audience distribution channels.',
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
            The entertainment coordination thesis.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 font-normal leading-relaxed max-w-3xl mb-12">
            DigiSynq is building an asset-light coordination layer across the entertainment ecosystem. We don’t need to own every node. We need to connect the nodes. Value is created by coordinating, routing, and orchestrating existing capacity rather than accumulating heavy physical infrastructure.
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

      {/* ── 02. Canonical Definition & Central Idea ── */}
      <section className="py-24 sm:py-32 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="rounded-3xl bg-[#090b10] border border-white/[0.06] p-8 sm:p-14 space-y-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block">
              Core Definition
            </span>

            <blockquote className="text-2xl sm:text-4xl font-bold text-white leading-snug tracking-tight">
              “An asset-light coordination and problem-solving company building a synchronization layer across the entertainment ecosystem.”
            </blockquote>

            <p className="text-base text-zinc-300 leading-relaxed max-w-3xl">
              Entertainment already has vast distributed infrastructure, talent, and resources. We identify friction points between creative ideas, talent, partner stages, venues, post facilities, and audience channels — then assemble and synchronize the optimal elements to generate value without heavy balance-sheet debt.
            </p>

            <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-6 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-white font-medium">We don't need to own every node. We connect the nodes.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Use the capacity that already exists.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. Who DigiSynq Serves ── */}
      <section className="py-24 sm:py-32 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
              Stakeholder Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Who DigiSynq connects
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              We coordinate relationships and capacity across the full entertainment lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHO_WE_SERVE.map((stakeholder) => (
              <div
                key={stakeholder.role}
                className="p-8 rounded-2xl bg-white/[0.015] border border-white/[0.06] flex flex-col justify-between space-y-4"
              >
                <div>
                  <h3 className="text-base font-semibold text-white mb-2">{stakeholder.role}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{stakeholder.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 04. Boundary Definition (What We Are NOT) ── */}
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
              Discipline requires saying no. We maintain focus by refusing to replicate existing legacy business models.
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

      {/* ── 05. The 8 Operating Principles ── */}
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
              Every decision we make — from protocol architecture to engagement structure — is governed by these foundational axioms.
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

      {/* ── 06. Institutional Governance & Operational Disclosure ── */}
      <section className="py-24 sm:py-32 border-t border-white/[0.06] bg-[#050608]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
              Institutional Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Operational disclosures & covenants
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              DigiSynq operates with institutional discipline. We provide clear operational parameters for studio banners, completion guarantors, and enterprise partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#090b10] border border-white/[0.06] space-y-4">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">01 // Non-Custodial Neutrality</span>
              <h3 className="text-base font-semibold text-white">Zero IP & Asset Encumbrance</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                DigiSynq never takes equity in client intellectual property, screenplays, or masters. We operate strictly as an objective operational coordinator, preserving total creative independence for creators and production banners.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#090b10] border border-white/[0.06] space-y-4">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">02 // Data & Script Security</span>
              <h3 className="text-base font-semibold text-white">Institutional Mutual NDA</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                All intake parameters, project budgets, and technical dossiers are protected under strict confidentiality covenants. Constraint audits are conducted on isolated channels with zero public exposure of sensitive project timelines.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#090b10] border border-white/[0.06] space-y-4">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">03 // Cross-Regional Coordination</span>
              <h3 className="text-base font-semibold text-white">Hubs & Partner Networks</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Coordinating active soundstage, virtual production, and post facilities across India and international entertainment hubs. Strategic partner inquiries and studio facility additions are reviewed directly by our executive network.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-zinc-400 block">Executive & Institutional Correspondence:</span>
              <span className="text-sm font-mono text-white">partners@digisynq.com • hello@digisynq.com</span>
            </div>
            <Link
              to="/runbook"
              className="text-xs text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1.5"
            >
              <span>Review Complete Business Runbook</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 07. Call to Action ── */}
      <section className="py-24 sm:py-32 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Build with the synchronization layer
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed max-w-xl mx-auto mb-10">
            Have an entertainment project, resource requirement, or capacity opportunity? Start a Synq and tell us what needs to be connected.
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
