import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Users,
  Compass,
  Cpu,
  Layers,
  GitBranch,
  TrendingUp,
} from 'lucide-react';
import {
  BRAND,
  PHILOSOPHY_RULES,
  WHAT_DIGISYNQ_IS_NOT,
  COMPETITIVE_MOAT_LAYERS,
  ROADMAP_PHASES,
} from '../data/blueprint_data';
import { OPERATING_PRINCIPLES, REVENUE_STREAMS } from '../data/core_data';
import { TopographicBackground } from '../components/TopographicBackground';

export function AboutPage() {
  const [activePhilosophyTab, setActivePhilosophyTab] = useState(0);

  return (
    <main className="bg-[#03040A] text-[#ECEEF5] selection:bg-[#23B272] selection:text-[#03040A] min-h-screen pt-36 pb-24 px-6 sm:px-8 max-w-6xl mx-auto relative overflow-hidden">
      <TopographicBackground className="opacity-15 pointer-events-none -z-10 fixed inset-0" />
      {/* ── Header ── */}
      <div className="max-w-4xl mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300 font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-[#52E3A4]" />
          <span>SECTIONS 3, 4, 56 &amp; 61</span>
          <span className="text-zinc-600">//</span>
          <span className="text-[#52E3A4]">COMPANY MANIFESTO &amp; ORGANIZATION</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.03] mb-4">
          The Invisible Architecture.
          <span className="text-zinc-400 font-light block text-2xl sm:text-4xl mt-2">
            We don’t own the soundstage. We orchestrate the ecosystem.
          </span>
        </h1>

        <h2 className="text-base sm:text-xl text-zinc-300 leading-relaxed font-light max-w-3xl mb-8">
          Complex industries do not fail because individual participants are incapable. They fail because the relationships between capable participants are poorly synchronized. DIGISYNQ exists to operate inside those relationships.
        </h2>

        {/* 4 One-Sentence Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-5 rounded-2xl border border-white/[0.08] bg-[#090B14] font-mono text-xs">
          <div className="p-3 rounded-xl bg-black/40 border border-white/[0.05]">
            <span className="text-[#52E3A4] block text-[10px] uppercase font-bold">Category</span>
            {BRAND.oneSentenceCategory}
          </div>
          <div className="p-3 rounded-xl bg-black/40 border border-white/[0.05]">
            <span className="text-[#52E3A4] block text-[10px] uppercase font-bold">Philosophy</span>
            {BRAND.oneSentencePhilosophy}
          </div>
          <div className="p-3 rounded-xl bg-black/40 border border-white/[0.05]">
            <span className="text-[#52E3A4] block text-[10px] uppercase font-bold">Mission</span>
            {BRAND.oneSentenceMission}
          </div>
          <div className="p-3 rounded-xl bg-black/40 border border-white/[0.05]">
            <span className="text-[#52E3A4] block text-[10px] uppercase font-bold">Business</span>
            {BRAND.oneSentenceBusiness}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          01 — THE 10 IMMUTABLE PHILOSOPHY RULES (SECTION 3)
         ══════════════════════════════════════════════════════ */}
      <section className="mb-20">
        <div className="text-xs font-mono text-[#52E3A4] mb-2 uppercase">SECTION 3 // THE OPERATING PHILOSOPHY</div>
        <h2 className="text-3xl font-bold text-white mb-8">10 Principles of Synchronization</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PHILOSOPHY_RULES.map((rule, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-white/[0.06] bg-[#090B14]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-[#52E3A4] font-semibold">{rule.num}</span>
                <span className="font-mono text-[10px] text-zinc-500">{rule.subtitle}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{rule.title}</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">{rule.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          02 — WHAT DIGISYNQ IS NOT (SECTION 4)
         ══════════════════════════════════════════════════════ */}
      <section className="mb-20 p-8 sm:p-10 rounded-3xl border border-white/[0.08] bg-[#06080D]">
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-mono text-zinc-500 mb-2 uppercase">SECTION 4 // CATEGORY INTEGRITY</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">What DIGISYNQ is NOT</h2>
          <p className="text-zinc-400 text-xs sm:text-sm">
            We do not compete with the physical network. We orchestrate the dependencies between them.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHAT_DIGISYNQ_IS_NOT.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-white/[0.06] bg-black/40">
              <div className="text-red-400 font-mono text-xs font-bold mb-1">✕ NOT {item.item.toUpperCase()}</div>
              <div className="text-xs text-zinc-400">{item.reason}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          03 — ASSET-LIGHT ORGANIZATIONAL MODEL (SECTION 61)
         ══════════════════════════════════════════════════════ */}
      <section className="mb-20">
        <div className="text-xs font-mono text-[#52E3A4] mb-2 uppercase">SECTION 61 // INTERNAL CAPABILITIES</div>
        <h2 className="text-3xl font-bold text-white mb-8">Asset-Light Organizational Model</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { role: 'System Analysts', desc: 'Deconstruct complex operational crises through 5-Why root cause diagnosis and living graph mapping.' },
            { role: 'Synchronization Managers', desc: 'Coordinate multi-stakeholder interfaces across producers, directors, vendors, and platforms.' },
            { role: 'Domain Specialists', desc: 'Provide deep, specialized technical expertise across camera, virtual production, sound, and rights.' },
            { role: 'Intelligence / Data Team', desc: 'Build the institutional system memory, failure pattern engine, and predictive risk models.' },
            { role: 'Network Team', desc: 'Build trusted, verified relationships with vetted soundstages, rental houses, and craft guilds.' },
            { role: 'Technology Team', desc: 'Develop the neutral synchronization platform, telemetry APIs, and cascade simulation tools.' },
          ].map((org, oIdx) => (
            <div key={oIdx} className="p-5 rounded-2xl border border-white/[0.06] bg-[#090B14]">
              <div className="font-mono text-xs text-[#52E3A4] font-semibold mb-1">CORE FUNCTION</div>
              <div className="font-bold text-base text-white mb-2">{org.role}</div>
              <p className="text-xs text-zinc-400 leading-relaxed">{org.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          03.5 — 8 CORE OPERATING PRINCIPLES
         ══════════════════════════════════════════════════════ */}
      <section className="mb-20">
        <div className="text-xs font-mono text-[#52E3A4] mb-2 uppercase">THE OPERATING CODE // CORE PRINCIPLES</div>
        <h2 className="text-3xl font-bold text-white mb-8">8 Operating Standards</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {OPERATING_PRINCIPLES.map((principle) => (
            <div key={principle.id} className="p-5 rounded-2xl border border-white/[0.06] bg-[#090B14] flex flex-col justify-between">
              <div>
                <div className="w-2 h-2 rounded-full bg-[#52E3A4] mb-3" />
                <h3 className="text-sm font-bold text-white mb-2">{principle.label}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          03.6 — REVENUE STREAMS & COMMERCIAL INFRASTRUCTURE
         ══════════════════════════════════════════════════════ */}
      <section className="mb-20 p-8 sm:p-10 rounded-3xl border border-white/[0.08] bg-[#06080D]">
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-mono text-[#52E3A4] mb-2 uppercase">COMMERCIAL ARCHITECTURE // REVENUE STREAMS</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Sustainable Economic Engine</h2>
          <p className="text-zinc-400 text-xs sm:text-sm">
            How DIGISYNQ monetizes value creation through transparent covenants without holding asset debt.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REVENUE_STREAMS.map((stream) => (
            <div key={stream.id} className="p-5 rounded-2xl border border-white/[0.06] bg-black/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase">{stream.id}</span>
                  <span className={`px-2 py-0.5 rounded text-[9px] font-mono border ${
                    stream.status === 'LIVE' ? 'border-[#52E3A4]/40 text-[#52E3A4] bg-[#52E3A4]/10' :
                    stream.status === 'PILOT' ? 'border-[#23B272]/40 text-[#23B272] bg-[#23B272]/10' :
                    'border-white/10 text-zinc-400 bg-white/[0.02]'
                  }`}>
                    {stream.status}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">{stream.name}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed mb-3">{stream.description}</p>
              </div>
              <div className="pt-3 border-t border-white/[0.04] text-[11px] text-zinc-500">
                {stream.detail}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          04 — ROADMAP: 5 PHASES OF EVOLUTION (SECTION 58)
         ══════════════════════════════════════════════════════ */}
      <section className="mb-20">
        <div className="text-xs font-mono text-[#52E3A4] mb-2 uppercase">SECTION 58 // 5-PHASE ROADMAP</div>
        <h2 className="text-3xl font-bold text-white mb-8">Evolution of Synchronization</h2>

        <div className="space-y-3">
          {ROADMAP_PHASES.map((p, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-white/[0.08] bg-[#090B14] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs text-[#52E3A4] font-bold">{p.phase}</span>
                  <span className="text-white font-bold text-base">— {p.name}</span>
                </div>
                <div className="text-xs text-zinc-300 leading-relaxed">{p.focus}</div>
                <div className="text-[11px] font-mono text-zinc-500 mt-1">Goal: {p.goal}</div>
              </div>
              <span className={`px-3 py-1 rounded-full text-[10px] font-mono shrink-0 border ${
                p.status === 'ACTIVE'
                  ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300 font-bold'
                  : p.status === 'IN PROGRESS'
                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                  : 'bg-white/5 border-white/10 text-zinc-400'
              }`}>
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="p-8 rounded-2xl border border-white/[0.08] bg-black/40 text-center">
        <h3 className="text-2xl font-bold text-white mb-3">Join the Synchronization Network</h3>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto mb-6">
          Whether you are a studio looking to monetize idle stage floor capacity, a technician seeking schedule visibility, or a producer managing a slate.
        </p>
        <Link
          to="/start"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#23B272] text-[#03040A] hover:bg-[#52E3A4] font-bold text-xs tracking-wide transition-all shadow-md"
        >
          <span>Initiate Network Intake</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </main>
  );
}
