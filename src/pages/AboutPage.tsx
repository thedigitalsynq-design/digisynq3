import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, Zap, Layers, Sparkles, 
  CheckCircle2, XCircle, ChevronRight, Compass, Film
} from 'lucide-react';
import { OPERATING_PRINCIPLES } from '../data/core_data';
import { TopographicBackground } from '../components/TopographicBackground';
import { playClickSound, playHoverSound, playNodeBlip } from '../utils/audio';

export function AboutPage() {
  const [activePrincipleIndex, setActivePrincipleIndex] = useState(0);
  const activePrinciple = OPERATING_PRINCIPLES[activePrincipleIndex];

  const WHAT_WE_ARE_NOT = [
    {
      title: 'Not a Talent Agency',
      desc: 'We do not lock technicians or artists into exclusive commissions. We provide transparent access to open market opportunities without 20% commission tolls.',
    },
    {
      title: 'Not an Asset-Heavy Studio',
      desc: 'We do not borrow millions to purchase camera trucks or real estate that sits idle between cycles. We orchestrate existing infrastructure.',
    },
    {
      title: 'Not a Generic Consultancy',
      desc: 'We do not generate slide decks and walk away. We embed directly in pre-production, filming logistics, dailies telemetry, and distribution execution.',
    },
    {
      title: 'Not a Predatory Financier',
      desc: 'We do not demand oppressive backend equity points or bridge debt extortion. We tie milestone funding tranches to verified scene delivery.',
    },
  ];

  return (
    <main className="bg-[#050608] text-[#ECEEF5] pt-24 pb-20 relative overflow-hidden selection:bg-[#B6F02A]/20 selection:text-[#B6F02A]">
      
      {/* Topographic Isoline Contour Layer */}
      <TopographicBackground intensity="medium" />

      {/* ── 01. Manifesto Header (Elevate Labs Poster Style) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative z-10">
        


        {/* Eyebrow: Horizontal Lime Accent Bar */}
        <div className="flex items-center gap-3.5 mb-5">
          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
            ACT 01
          </span>
          <span className="text-xs sm:text-sm font-bold font-mono tracking-widest uppercase text-white/90">
            Founding Thesis // Why We Exist
          </span>
        </div>

        {/* High-Impact Headline & Editorial Block (No Overlap) */}
        <div className="max-w-5xl mb-12">
          <h1 className="text-[clamp(2.75rem,6.5vw,5.25rem)] font-black tracking-tight leading-[0.92] uppercase select-none text-white [letter-spacing:-0.03em] mb-6">
            THE CINEMA<br />
            <span className="text-[#B6F02A] drop-shadow-[0_0_35px_rgba(182,240,42,0.25)]">MANIFESTO &</span><br />
            ANTI-THESIS.
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pt-2">
            {/* Vertical Lime Bar Quote */}
            <div className="border-l-3 sm:border-l-4 border-[#B6F02A] pl-5 sm:pl-6 py-1 max-w-2xl">
              <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed">
                The film industry does not suffer from a lack of creativity or capital. It suffers from organizational entropy. DigiSynq is engineered to be the connective nervous tissue that aligns chaotic forces into coherent momentum.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link to="/start" className="btn-primary text-xs px-5 py-3 shadow-[0_0_20px_rgba(182,240,42,0.35)]">
                Start a Synq <ArrowRight size={14} />
              </Link>
              <Link to="/the-synq" className="btn-secondary text-xs px-4 py-3">
                The Synq Idea
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. The Working Definition Slate ──────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#090B10] border border-[#23B272]/30 shadow-2xl relative space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
                ACT 02
              </span>
              <span className="badge-lime text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase">
                CANONICAL DEFINITION
              </span>
            </div>
            <span className="text-xs font-mono text-[#52E3A4]">DIGISYNQ CORE DIRECTIVE</span>
          </div>

          <blockquote className="text-2xl sm:text-3xl font-black text-white leading-tight tracking-tight uppercase">
            "An asset-light cinema problem-solving company building a synchronization layer across the filmmaking ecosystem."
          </blockquote>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
            We identify friction points between craft skills, soundstages, technology, IP rights, distribution windows, and audience momentum — then assemble and synchronize the optimal elements to generate value without balance-sheet debt.
          </p>

          <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-6 font-mono text-xs">
            <div className="flex items-center gap-2 text-[#52E3A4]">
              <CheckCircle2 size={16} className="text-[#B6F02A]" />
              <span>We do not claim to own the ecosystem.</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Zap size={16} className="text-[#B6F02A]" />
              <span>We synchronize the ecosystem.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. The Anti-Thesis (What We Are NOT) ─────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="mb-10">
          <div className="flex items-center gap-3.5 mb-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
              ACT 03
            </span>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-bold">
              Boundary Definition // Negative Space
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            What DigiSynq Is Deliberately NOT
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WHAT_WE_ARE_NOT.map((item) => (
            <div
              key={item.title}
              className="p-6 sm:p-7 rounded-2xl bg-[#090B10] border border-white/[0.08] flex flex-col justify-between space-y-4 hover:border-white/30 transition group"
            >
              <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono font-bold">
                <XCircle size={16} className="shrink-0" />
                <span className="line-through decoration-white/40">{item.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
              <div className="text-[10px] font-mono text-white/30 pt-3 border-t border-white/5 uppercase">
                RIGOROUS NON-GOAL
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 04. The 10 Operating Principles Film Slate ────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#090B10] border border-[#23B272]/20 shadow-2xl relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-white/[0.08] gap-4">
            <div>
              <div className="flex items-center gap-3.5 mb-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
                  ACT 04
                </span>
                <span className="text-xs font-mono text-[#52E3A4] uppercase tracking-wider font-bold">
                  Operational Codex // 10 Operating Axioms
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                The 10 Canonical Axioms
              </h2>
            </div>
            <span className="badge-lime text-[10px] font-mono px-2.5 py-1 rounded font-bold uppercase">
              GOVERNANCE PROTOCOL
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {OPERATING_PRINCIPLES.map((principle, index) => (
              <div
                key={principle.id}
                onClick={() => { setActivePrincipleIndex(index); playNodeBlip(index); }}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                  activePrincipleIndex === index
                    ? 'bg-[#0D281E] border-[#B6F02A] shadow-[0_0_24px_rgba(182,240,42,0.2)]'
                    : 'bg-[#050608] border-white/[0.06] hover:border-white/20'
                }`}
              >
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/[0.06] border border-white/10 text-[#D4F838] shrink-0">
                  AXIOM // {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {principle.label}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
