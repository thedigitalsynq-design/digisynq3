import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, ChevronRight, BookOpen, Layers, Award } from 'lucide-react';
import { WORKSHOP_PROGRAMS } from '../data/core_data';

const DEPLOYMENT_STEPS = [
  { step: '01', name: 'Learn', desc: 'Modern industry frameworks, virtual volumes, optics, audio, and digital workflows.' },
  { step: '02', name: 'Practice', desc: 'Hands-on soundstage, lighting grid, virtual production, and studio execution.' },
  { step: '03', name: 'Fine-Tune', desc: 'Direct review and workflow guidance from active department heads and craftspeople.' },
  { step: '04', name: 'Connect', desc: 'Introduction into verified entertainment and production pipelines across the network.' },
  { step: '05', name: 'Deploy', desc: 'Placement opportunities on active sets and creative projects with transparent terms.' },
  { step: '06', name: 'Feedback', desc: 'Continuous skill verification, career progression, and expanding industry connections.' },
];

export function WorkshopsPage() {
  const [activeLabIndex, setActiveLabIndex] = useState(0);
  const activeLab = WORKSHOP_PROGRAMS[activeLabIndex] || WORKSHOP_PROGRAMS[0];

  return (
    <main className="bg-[#07080b] text-[#ECEEF5] selection:bg-white/20 selection:text-white">

      {/* ── 01. Hero Section ── */}
      <section className="pt-40 sm:pt-48 pb-20 sm:pb-28 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-zinc-400 mb-8 tracking-wide">
            <span>Talent & Capability Development</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] [letter-spacing:-0.035em] mb-8">
            Connecting skills with entertainment opportunities.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 font-normal leading-relaxed max-w-3xl mb-12">
            Talent development is a vital node in the entertainment ecosystem. DigiSynq workshops bridge creative professionals, technicians, and crew to modern workflows, industry connections, and active production opportunities.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/start"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              Apply for intake
              <ArrowRight size={15} />
            </Link>
            <a
              href="#curriculum"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-sm text-zinc-300 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore syllabus
            </a>
          </div>
        </div>
      </section>

      {/* ── 02. The 6-Step Deployment Loop ── */}
      <section className="py-24 sm:py-32 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
              Placement Protocol
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              The six-stage progression loop
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              We connect technical and creative learning directly to verified entertainment production demand.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DEPLOYMENT_STEPS.map((s) => (
              <div
                key={s.step}
                className="p-6 rounded-2xl bg-white/[0.015] border border-white/[0.06] hover:border-white/15 transition-all flex flex-col justify-between h-44"
              >
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>Stage {s.step}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1.5">
                    {s.name}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 03. Active Masterclasses Terminal ── */}
      <section id="curriculum" className="py-24 sm:py-32 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
              Curriculum Tracks
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Guild lab programs
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Program Directory Selector */}
            <div className="lg:col-span-5 space-y-2.5">
              {WORKSHOP_PROGRAMS.map((prog, i) => {
                const isSelected = i === activeLabIndex;
                return (
                  <button
                    key={prog.id}
                    type="button"
                    onClick={() => setActiveLabIndex(i)}
                    className={`w-full p-5 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-white/[0.05] border-white/30 text-white shadow-sm'
                        : 'bg-white/[0.015] border-white/[0.06] text-zinc-400 hover:border-white/15 hover:text-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1 text-[11px] font-mono text-zinc-500">
                        <span>Track 0{i + 1}</span>
                        <span>•</span>
                        <span className="text-emerald-400">{prog.category}</span>
                      </div>
                      <div className="text-sm font-semibold text-white">
                        {prog.title}
                      </div>
                      <div className="text-xs text-zinc-400 mt-0.5">
                        {prog.format}
                      </div>
                    </div>
                    <ChevronRight size={16} className={`shrink-0 transition-opacity ${isSelected ? 'text-white opacity-100' : 'opacity-20'}`} />
                  </button>
                );
              })}
            </div>

            {/* Right: Masterclass Deep Dive Slate */}
            <div className="lg:col-span-7 rounded-3xl bg-[#090b10] border border-white/[0.06] p-8 sm:p-12 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.06] gap-3">
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                    {activeLab.category} Track
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {activeLab.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-zinc-400 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] shrink-0 self-start sm:self-center">
                  {activeLab.format}
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-2">
                    Curriculum Architecture
                  </span>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {activeLab.description}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-2">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block font-medium">
                    Verified Learning Outcome
                  </span>
                  <p className="text-sm text-zinc-200 leading-relaxed">
                    {activeLab.outcome}
                  </p>
                </div>

                {activeLab.flow && (
                  <div>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-3">
                      Learning Progression
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {activeLab.flow.map((fl, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-white/[0.015] border border-white/[0.06] text-center">
                          <span className="text-[10px] font-mono text-zinc-500 block">0{idx + 1}</span>
                          <span className="text-xs font-medium text-white">{fl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-zinc-400">
                    <span className="text-white block font-medium">Cohort Applications</span>
                    <span>Reviewed on a rolling basis</span>
                  </div>
                  <Link
                    to="/start"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-xs hover:bg-zinc-200 transition-all shadow-md"
                  >
                    Apply for this lab
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── 04. Call to Action ── */}
      <section className="py-24 sm:py-32 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Looking to upskill your production unit?
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed max-w-xl mx-auto mb-10">
            We partner with industry guilds, camera houses, and studio facilities to conduct technical and workflow training.
          </p>
          <Link
            to="/start"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            Request custom workshop
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  );
}
