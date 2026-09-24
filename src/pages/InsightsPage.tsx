import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, X, Clock, Calendar } from 'lucide-react';

const DETAILED_BRIEFS = [
  {
    id: 'box-office-clashes',
    category: 'Theatrical Yield',
    code: 'Brief 01',
    title: 'The weekend eviction dynamic: Why release date clustering impacts theatrical exposure',
    readTime: '6 min read',
    date: 'Oct 2024',
    summary: 'An analysis of multiplex screen allocation and holdover thresholds. How release calendar clustering impacts theatrical exposure for independent features, and how coordinated regional demand sync creates defensible release windows.',
    takeaways: [
      'Multiplex exhibitors operate on rapid initial holdover thresholds; missing early attendance markers often triggers immediate screen reallocations.',
      'Clustering multiple similar titles within narrow release windows splits core audience attention and shortens theatrical run lengths.',
      'Pre-demand territorial windowing allows independent titles to build regional density and avoid direct clashes with major studio tentpoles.',
    ],
  },
  {
    id: 'stage-dark-time',
    category: 'Spatial Economics',
    code: 'Brief 02',
    title: 'Facility utilization and dark floors: The soundstage scheduling dilemma',
    readTime: '8 min read',
    date: 'Nov 2024',
    summary: 'Evaluating traditional multi-month soundstage leases against flexible burst-occupancy models. How coordinating existing facility capacity helps productions access studio infrastructure while improving floor utilization for facility operators.',
    takeaways: [
      'Studio facilities frequently experience unbooked turnaround gaps between marquee long-term tenant bookings.',
      'Inflexible lease minimums often push independent productions into makeshift spaces that lack acoustic treatment and power infrastructure.',
      'Coordinating fractional access allows productions to utilize professional stage floors during turnaround windows without heavy overhead.',
    ],
  },
  {
    id: 'guild-parity',
    category: 'Craft Labor',
    code: 'Brief 03',
    title: 'Crew assembly and availability: Overcoming informal network friction',
    readTime: '5 min read',
    date: 'Dec 2024',
    summary: 'Why closed phone trees and informal hiring loops create pre-production friction while leaving qualified craftspeople between bookings. The case for verified availability coordination.',
    takeaways: [
      'Productions spend substantial pre-production time attempting to verify crew availability across informal networks.',
      'Specialized technical department heads frequently experience unbooked lulls between feature slates despite active demand in the ecosystem.',
      'Direct availability coordination connects verified craft guild talent with active production requirements on transparent terms.',
    ],
  },
  {
    id: 'asset-light-financing',
    category: 'Capital Flow',
    code: 'Brief 04',
    title: 'Asset-light cinema: The balance sheet evolution in modern filmmaking',
    readTime: '10 min read',
    date: 'Jan 2025',
    summary: 'Why accumulating heavy physical equipment, real estate, and permanent payroll is no longer necessary to produce quality cinema. How coordinating existing capacity creates greater operational agility.',
    takeaways: [
      'Holding heavy physical assets creates depreciation drag and financial pressure to force projects into owned facilities regardless of creative fit.',
      'Asset-light coordination allows productions to assemble optimal talent and partner facilities on demand without fixed overhead.',
      'Milestone-tied covenants provide financial transparency and schedule predictability throughout production and post-finishing.',
    ],
  },
];

const CATEGORIES = ['All Dispatches', 'Theatrical Yield', 'Spatial Economics', 'Craft Labor', 'Capital Flow'] as const;

export function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All Dispatches');
  const [readingBrief, setReadingBrief] = useState<typeof DETAILED_BRIEFS[0] | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setReadingBrief(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when brief modal is open
  useEffect(() => {
    if (readingBrief) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [readingBrief]);

  const filtered = activeCategory === 'All Dispatches'
    ? DETAILED_BRIEFS
    : DETAILED_BRIEFS.filter(b => b.category === activeCategory);

  return (
    <main className="bg-[#07080b] text-[#ECEEF5] selection:bg-white/20 selection:text-white">

      {/* ── 01. Hero Section ── */}
      <section className="pt-40 sm:pt-48 pb-20 sm:pb-28 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-zinc-400 mb-8 tracking-wide">
            <span>Industry Telemetry & Dispatches</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] [letter-spacing:-0.035em] mb-8">
            Research on entertainment capacity and coordination.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 font-normal leading-relaxed max-w-3xl mb-12">
            Field investigations into release window scheduling, facility floor utilization, craft crew assembly, and asset-light coordination models.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/start"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              Request project telemetry
              <ArrowRight size={15} />
            </Link>
            <a
              href="#dispatches"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-sm text-zinc-300 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Read field dispatches
            </a>
          </div>
        </div>
      </section>

      {/* ── 02. Dispatches Section ── */}
      <section id="dispatches" className="py-24 sm:py-32 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">

          {/* Category Tabs */}
          <div className="flex items-center gap-2 pb-6 mb-12 border-b border-white/[0.06] overflow-x-auto scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-black font-medium'
                      : 'bg-white/[0.03] border border-white/[0.08] text-zinc-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Editorial Articles List */}
          <div className="divide-y divide-white/[0.06]">
            {filtered.map((brief) => (
              <article
                key={brief.id}
                onClick={() => setReadingBrief(brief)}
                className="group py-10 sm:py-12 flex flex-col md:flex-row md:items-start justify-between gap-8 cursor-pointer hover:bg-white/[0.015] -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-2xl transition-all"
              >
                <div className="flex-1 max-w-3xl space-y-3">
                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
                    <span className="text-emerald-400 font-medium">{brief.code}</span>
                    <span>•</span>
                    <span>{brief.category}</span>
                    <span>•</span>
                    <span>{brief.date}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                    {brief.title}
                  </h2>

                  <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
                    {brief.summary}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 group-hover:text-white transition-colors shrink-0 pt-2">
                  <span>{brief.readTime}</span>
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ── 03. Reading Modal ── */}
      {readingBrief && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setReadingBrief(null)}
        >
          <div
            className="max-w-2xl w-full p-8 sm:p-10 rounded-3xl bg-[#090b10] border border-white/10 shadow-2xl relative space-y-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-6 border-b border-white/[0.06] text-xs font-mono">
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="text-emerald-400 font-medium">{readingBrief.code}</span>
                <span>•</span>
                <span>{readingBrief.category}</span>
              </div>
              <button
                type="button"
                onClick={() => setReadingBrief(null)}
                className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
                aria-label="Close modal"
              >
                <X size={14} />
              </button>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                {readingBrief.title}
              </h2>
              <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
                <span className="flex items-center gap-1.5"><Calendar size={13} /> {readingBrief.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1.5"><Clock size={13} /> {readingBrief.readTime}</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {readingBrief.summary}
            </p>

            <div className="space-y-4 pt-6 border-t border-white/[0.06]">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block font-medium">
                Key Structural Observations
              </span>
              <ul className="space-y-3 text-xs sm:text-sm text-zinc-400 leading-relaxed list-disc list-inside">
                {readingBrief.takeaways.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
              <Link
                to="/start"
                onClick={() => setReadingBrief(null)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-xs hover:bg-zinc-200 transition-all shadow-md"
              >
                Apply findings to project
                <ArrowRight size={13} />
              </Link>
              <button
                type="button"
                onClick={() => setReadingBrief(null)}
                className="text-xs text-zinc-500 hover:text-white transition cursor-pointer"
              >
                Close dispatch
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── 04. Call to Action ── */}
      <section className="py-24 sm:py-32 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Need tailored telemetry for an upcoming production?
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed max-w-xl mx-auto mb-10">
            We run pre-production constraint audits and theatrical release window evaluations for independent projects and partner slates.
          </p>
          <Link
            to="/start"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            Commission constraint audit
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  );
}
