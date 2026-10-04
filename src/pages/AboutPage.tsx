import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  XCircle,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Zap,
  Activity,
  Layers,
  Search,
} from 'lucide-react';
import {
  BRAND,
  PHILOSOPHY_RULES,
  WHAT_DIGISYNQ_IS_NOT,
  ROADMAP_PHASES,
} from '../data/blueprint_data';
import { TopographicBackground } from '../components/TopographicBackground';

// Group the 10 philosophy rules into 3 tiers
const PHILOSOPHY_TIERS = [
  {
    tier: 'Foundation',
    label: 'What We Believe',
    desc: 'The worldview that defines why DigiSynq exists.',
    range: [0, 1, 2],
    colorClass: 'border-white/15 text-white',
  },
  {
    tier: 'Operating Principles',
    label: 'How We Work',
    desc: 'The principles that govern every SYNQ intervention.',
    range: [3, 4, 5, 6],
    colorClass: 'border-white/15 text-white',
  },
  {
    tier: 'Evidence Standards',
    label: 'How We Measure',
    desc: 'Our commitment to data, transparency, and verified outcomes.',
    range: [7, 8, 9],
    colorClass: 'border-white/15 text-white',
  },
];

export function AboutPage() {
  return (
    <main className="bg-[#03040A] text-[#ECEEF5] selection:bg-white selection:text-black min-h-screen pt-36 pb-24 px-6 sm:px-8 max-w-6xl mx-auto relative overflow-hidden">
      <TopographicBackground className="opacity-15 pointer-events-none -z-10 fixed inset-0" />
      {/* ── Header ── */}
      <div className="max-w-4xl mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300 font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-white" />
          <span>OPERATIONAL ARCHITECTURE</span>
          <span className="text-zinc-600">//</span>
          <span className="text-white">COMPANY MANIFESTO &amp; PRINCIPLES</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.03] mb-4">
          The Invisible Architecture.
          <span className="text-zinc-400 font-light block text-2xl sm:text-4xl mt-2">
            We don’t own the soundstage. We orchestrate the ecosystem.
          </span>
        </h1>

        <h2 className="text-base sm:text-xl text-zinc-300 leading-relaxed font-light max-w-3xl mb-8">
          DigiSynq does not own studios, soundstages, or camera trucks. It orchestrates the dependencies between the people and resources who do. Complex industries do not fail because individual participants are incapable — they fail because the relationships between capable participants are poorly synchronized.
        </h2>

        {/* ── BENTO GRID: 4 Master Brand Foundations (Pure Square Geometry) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
          {/* Bento Card 1: Category (1x1 Square) */}
          <div className="aspect-square p-5 sm:p-6 rounded-3xl border border-white/15 bg-gradient-to-br from-[#090B14] via-[#06070B] to-[#04060C] shadow-xl flex flex-col justify-between overflow-hidden soft-card">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Category</span>
                </span>
                <span className="text-[10px] text-zinc-500 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                  SYNQ
                </span>
              </div>
              <div className="text-sm font-sans font-bold text-white mb-2 leading-snug">
                {BRAND.oneSentenceCategory}
              </div>
              <p className="text-[11px] font-sans text-zinc-400 leading-relaxed font-light line-clamp-3">
                Orchestrating physical, operational, and financial dependencies before friction compounds.
              </p>
            </div>
            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[10px] text-zinc-400">
              <span>Architecture:</span>
              <span className="text-white font-bold">Closed-Loop Control</span>
            </div>
          </div>

          {/* Bento Card 2: Mission (1x1 Square) */}
          <div className="aspect-square p-5 sm:p-6 rounded-3xl border border-white/[0.08] bg-[#090B14] shadow-xl flex flex-col justify-between overflow-hidden soft-card">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Mission</span>
                </span>
                <span className="text-[10px] text-zinc-500 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                  IMPACT
                </span>
              </div>
              <div className="text-xs font-sans text-zinc-200 leading-relaxed font-light mb-3">
                {BRAND.oneSentenceMission}
              </div>
            </div>
            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-zinc-400">
              <span>Intervention:</span>
              <span className="text-white font-bold">Pre-Execution</span>
            </div>
          </div>

          {/* Bento Card 3: Asset-Light Model (1x1 Square) */}
          <div className="aspect-square p-5 sm:p-6 rounded-3xl border border-white/[0.08] bg-[#090B14] shadow-xl flex flex-col justify-between overflow-hidden soft-card">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Asset-Light Model</span>
                </span>
                <span className="text-[10px] text-zinc-500 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                  LEAN
                </span>
              </div>
              <div className="text-xs font-sans text-zinc-200 leading-relaxed font-light mb-3">
                {BRAND.oneSentenceBusiness}
              </div>
            </div>
            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-zinc-300">
              <span>Fixed Asset Debt:</span>
              <strong className="font-bold">Zero ($0)</strong>
            </div>
          </div>

          {/* Bento Card 4: Operating Philosophy (1x1 Square) */}
          <div className="aspect-square p-5 sm:p-6 rounded-3xl border border-white/[0.08] bg-black/40 shadow-xl flex flex-col justify-between overflow-hidden hover:border-white/20 transition-colors soft-card">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Core Philosophy</span>
                </span>
                <span className="text-[10px] text-zinc-500 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                  TRUTH
                </span>
              </div>
              <div className="text-xs font-sans text-zinc-200 leading-relaxed mb-3">
                "{BRAND.oneSentencePhilosophy}"
              </div>
            </div>
            <div className="pt-3 border-t border-white/[0.06]">
              <Link
                to="/the-synq"
                className="text-white hover:text-white font-bold text-[11px] inline-flex items-center justify-between w-full group transition-colors"
              >
                <span>Explore The Synq Model</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          THE IMMUTABLE PHILOSOPHY RULES (3 TIERS)
         ══════════════════════════════════════════════════════ */}
      <section className="mb-20">
        <div className="text-xs font-mono text-white mb-2 uppercase">THE OPERATING PHILOSOPHY</div>
        <h2 className="text-3xl font-bold text-white mb-3">Principles of Synchronization</h2>
        <p className="text-zinc-400 text-sm max-w-2xl mb-10 leading-relaxed">
          These are not aspirational values. They are the operational constraints DigiSynq applies to every engagement, decision, and measurement.
        </p>

        <div className="space-y-10">
          {PHILOSOPHY_TIERS.map((tier) => (
            <div key={tier.tier}>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${tier.colorClass} bg-white/[0.02] font-mono text-xs font-semibold mb-2`}>
                {tier.tier}
              </div>
              <div className="text-zinc-400 text-xs mb-5">{tier.desc}</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tier.range.map((ruleIdx) => {
                  const rule = PHILOSOPHY_RULES[ruleIdx];
                  if (!rule) return null;
                  return (
                    <div key={ruleIdx} className="p-6 rounded-2xl border border-white/[0.06] bg-[#090B14]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[10px] text-white font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.06] border border-white/15">PRINCIPLE</span>
                        <span className="font-mono text-[10px] text-zinc-500">{rule.subtitle}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{rule.title}</h3>
                      <p className="text-xs text-zinc-300 leading-relaxed">{rule.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          WHAT DIGISYNQ IS NOT
         ══════════════════════════════════════════════════════ */}
      <section className="mb-20 p-8 sm:p-10 rounded-3xl border border-white/[0.08] bg-[#06080D]">
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-mono text-zinc-400 mb-2 uppercase">CATEGORY INTEGRITY</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">What DigiSynq Is NOT</h2>
          <p className="text-zinc-400 text-xs sm:text-sm">
            Understanding what DigiSynq is not is the fastest way to understand what it is. DigiSynq does not compete with the physical network — it orchestrates the dependencies between its participants.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHAT_DIGISYNQ_IS_NOT.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-white/[0.06] bg-black/40">
              <div className="flex items-center gap-2 mb-1.5 text-red-400">
                <XCircle className="w-3.5 h-3.5 shrink-0" />
                <span className="font-mono text-xs font-bold">NOT {item.item.toUpperCase()}</span>
              </div>
              <div className="text-xs text-zinc-400 leading-relaxed">{item.reason}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 rounded-2xl border border-white/15 bg-gradient-to-r from-[#090B14] to-[#04060C] text-center">
          <p className="text-sm sm:text-base font-medium text-white leading-relaxed">
            "DigiSynq does not manage filmmaking. It manages the dependencies between the people, processes, resources and decisions that make filmmaking possible."
          </p>
          <div className="text-xs font-mono text-zinc-500 mt-3">Asset-Light · Network-Orchestrated · Root-Cause First</div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ASSET-LIGHT ORGANIZATIONAL MODEL
         ══════════════════════════════════════════════════════ */}
      <section className="mb-20">
        <div className="text-xs font-mono text-white mb-2 uppercase">ORGANIZATIONAL MODEL</div>
        <h2 className="text-3xl font-bold text-white mb-3">Built to Orchestrate, Not to Own</h2>
        <p className="text-zinc-400 text-sm max-w-2xl mb-8 leading-relaxed">DigiSynq carries zero fixed asset debt. Every core function is staffed to coordinate, analyse, and connect — never to own infrastructure that creates conflicts of interest.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { role: 'System Analysts', desc: 'Deconstruct complex operational crises through root-cause diagnosis and living dependency graph mapping.' },
            { role: 'Synchronization Managers', desc: 'Coordinate multi-stakeholder interfaces across producers, directors, vendors, and platforms.' },
            { role: 'Domain Specialists', desc: 'Provide deep technical expertise across camera, virtual production, sound design, and rights.' },
            { role: 'Intelligence & Data Team', desc: 'Build the institutional system memory, failure pattern engine, and predictive risk models.' },
            { role: 'Network Team', desc: 'Build trusted, verified relationships with vetted soundstages, rental houses, and craft guilds.' },
            { role: 'Technology Team', desc: 'Develop the neutral synchronization platform, telemetry APIs, and cascade simulation tools.' },
          ].map((org, oIdx) => (
            <div key={oIdx} className="p-5 rounded-2xl border border-white/[0.06] bg-[#090B14]">
              <div className="font-mono text-xs text-white font-semibold mb-1">CORE FUNCTION</div>
              <div className="font-bold text-base text-white mb-2">{org.role}</div>
              <p className="text-xs text-zinc-400 leading-relaxed">{org.desc}</p>
            </div>
          ))}
        </div>
      </section>





      {/* ══════════════════════════════════════════════════════
          ROADMAP: PHASES OF EVOLUTION
         ══════════════════════════════════════════════════════ */}
      <section className="mb-20">
        <div className="text-xs font-mono text-white mb-2 uppercase">EVOLUTION ROADMAP</div>
        <h2 className="text-3xl font-bold text-white mb-3">Phases of Synchronization</h2>
        <p className="text-zinc-400 text-sm max-w-2xl mb-8 leading-relaxed">DigiSynq scales its operational layer progressively — proving root-cause resolution in single-project interventions before expanding to slate-level and ecosystem-wide coordination.</p>

        <div className="space-y-3">
          {ROADMAP_PHASES.map((p, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-white/[0.08] bg-[#090B14] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs text-white font-bold">MILESTONE</span>
                  <span className="text-white font-bold text-base">— {p.name}</span>
                </div>
                <div className="text-xs text-zinc-300 leading-relaxed">{p.focus}</div>
                <div className="text-[11px] font-mono text-zinc-500 mt-1">Goal: {p.goal}</div>
              </div>
              <span className={`px-3 py-1 rounded-full text-[10px] font-mono shrink-0 border ${
                p.status === 'ACTIVE'
                  ? 'bg-white/[0.08] border-white/20 text-zinc-200 font-bold'
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
      <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-[#090B14] to-[#04060C] text-center">
        <h3 className="text-2xl font-bold text-white mb-3">Ready to synchronize your production?</h3>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto mb-6">
          Bring us an active friction point — a schedule slip, capacity gap, or delivery risk — and DigiSynq will diagnose the root cause and coordinate the resolution.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/diagnose"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black hover:bg-zinc-200 font-bold text-xs tracking-wide transition-all shadow-md"
          >
            <span>Diagnose a Problem</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/start"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/14 hover:border-white/25 bg-white/[0.03] text-white font-medium text-xs transition-all"
          >
            Start a SYNQ Case
          </Link>
        </div>
      </div>
    </main>
  );
}
