import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { TopographicBackground } from '../components/TopographicBackground';
import { playClickSound, playSuccessChime } from '../utils/audio';

const DETAILED_BRIEFS = [
  {
    id: 'box-office-clashes',
    category: 'Theatrical Yield',
    code: 'BRIEF // 01',
    title: 'The Weekend Eviction Dynamic: Why Mid-Budget Cinema Clashes Die in 72 Hours',
    readTime: '6 min read',
    date: 'OCT 2024',
    summary: 'An empirical analysis of multiplex screen allocation across top 10 metropolitan circuits. How release calendar clustering costs independent producers up to 68% of their gross domestic return, and how algorithmic demand sync creates defensible release windows.',
  },
  {
    id: 'stage-dark-time',
    category: 'Spatial Economics',
    code: 'BRIEF // 02',
    title: 'Dark Floors & Sunk Capital: The 41% Soundstage Utilization Problem',
    readTime: '8 min read',
    date: 'NOV 2024',
    summary: 'Evaluating traditional multi-month soundstage and LED volume leases against fractional burst-occupancy models. How asset-light production scheduling unlocks $4.2M in annual floor liquidity without construction debt.',
  },
  {
    id: 'guild-parity',
    category: 'Craft Labor',
    code: 'BRIEF // 03',
    title: 'The Hidden Network Penalty: De-risking Below-the-Line Crew Assembly',
    readTime: '5 min read',
    date: 'DEC 2024',
    summary: 'Why closed-circle WhatsApp and agency hiring models inflate line-item labor costs while stranding top-tier technical craftspeople in unbooked lulls. The case for dynamic talent meshes.',
  },
  {
    id: 'asset-light-financing',
    category: 'Capital Flow',
    code: 'BRIEF // 04',
    title: 'Zero Heavy Assets: The Balance Sheet Revolution in Modern Film Studios',
    readTime: '10 min read',
    date: 'JAN 2025',
    summary: 'Why the era of legacy studios owning fleets of cameras, real-estate complexes, and exclusive talent rosters is coming to an end. How coordination protocols outperform asset-heavy holding companies.',
  },
];

const CATEGORIES = ['all', 'Theatrical Yield', 'Spatial Economics', 'Craft Labor', 'Capital Flow'] as const;

export function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [readingBrief, setReadingBrief] = useState<typeof DETAILED_BRIEFS[0] | null>(null);

  const filtered = activeCategory === 'all' 
    ? DETAILED_BRIEFS 
    : DETAILED_BRIEFS.filter(b => b.category === activeCategory);

  return (
    <main className="bg-[#050608] text-[#ECEEF5] pt-28 pb-24 relative overflow-hidden selection:bg-[#B6F02A]/20 selection:text-[#B6F02A]">
      
      {/* Topographic Isoline Contour Layer */}
      <TopographicBackground intensity="subtle" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Minimal Editorial Header ── */}
        <header className="mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest">
              ACT 01
            </span>
            <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase">
              Field Telemetry & Observations
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Theatrical Telemetry.
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            Data-backed investigations into cinema fragmentation, soundstage floor utilization, release window economics, and asset-light coordination.
          </p>
        </header>

        {/* ── Minimal Category Navigation ── */}
        <nav aria-label="Filter dispatches by topic" className="flex items-center gap-6 border-b border-white/[0.08] mb-12 pb-3 overflow-x-auto text-xs font-mono scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => { setActiveCategory(cat); playClickSound(); }}
                className={`pb-2 -mb-3 transition-colors cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-[#D4F838] border-b-2 border-[#D4F838] font-bold'
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All Dispatches' : cat}
              </button>
            );
          })}
        </nav>

        {/* ── Minimal Editorial List ── */}
        <section aria-label="Field reports" className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {filtered.map((brief) => (
            <article
              key={brief.id}
              onClick={() => { setReadingBrief(brief); playSuccessChime(); }}
              className="group py-8 sm:py-9 flex flex-col md:flex-row md:items-start justify-between gap-6 cursor-pointer hover:bg-white/[0.015] -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-2xl transition-colors"
            >
              <div className="flex-1 max-w-3xl space-y-2.5">
                <div className="flex items-center gap-3 text-[11px] font-mono">
                  <span className="text-[#D4F838] font-bold">{brief.code}</span>
                  <span className="text-zinc-700">•</span>
                  <span className="text-zinc-400">{brief.category}</span>
                  <span className="text-zinc-700">•</span>
                  <span className="text-zinc-500">{brief.date}</span>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#D4F838] transition-colors leading-snug">
                  {brief.title}
                </h2>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-2">
                  {brief.summary}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 group-hover:text-[#D4F838] transition-colors shrink-0 pt-1">
                <span>{brief.readTime}</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </article>
          ))}
        </section>

        {/* ── Minimal Dossier Reading Modal ── */}
        {readingBrief && (
          <div 
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setReadingBrief(null)}
          >
            <div 
              className="max-w-2xl w-full p-6 sm:p-9 rounded-2xl bg-[#08090C] border border-white/10 shadow-2xl relative space-y-6 max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-[#D4F838] font-bold">{readingBrief.code}</span>
                  <span className="text-zinc-700">•</span>
                  <span className="text-zinc-400">{readingBrief.category}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setReadingBrief(null)}
                  className="text-zinc-500 hover:text-white transition cursor-pointer"
                >
                  [ESC / CLOSE]
                </button>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {readingBrief.title}
                </h2>
                <div className="text-xs font-mono text-zinc-500 mt-2">
                  {readingBrief.date} • {readingBrief.readTime}
                </div>
              </div>

              <div className="text-sm text-zinc-300 leading-relaxed border-l-2 border-[#D4F838] pl-4 py-0.5">
                {readingBrief.summary}
              </div>

              <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4F838]">
                  // Operational Recommendations
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed list-disc list-inside">
                  <li>Eliminate rigid multi-month soundstage bookings in favor of synchronized burst-occupancy windows.</li>
                  <li>Route independent theatrical releases using localized pre-demand velocity rather than simultaneous multi-territory blind saturation.</li>
                  <li>Implement milestone-backed finishing capital covenants to prevent predatory equity surrender during sound mix and final grading.</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <Link
                  to="/start"
                  onClick={() => setReadingBrief(null)}
                  className="btn-primary text-xs px-4 py-2"
                >
                  Apply to Project <ArrowRight size={14} />
                </Link>
                <button
                  type="button"
                  onClick={() => setReadingBrief(null)}
                  className="text-xs font-mono text-zinc-500 hover:text-white transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
