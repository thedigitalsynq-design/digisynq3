import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, BookOpen, CheckCircle2, ChevronRight, 
  Sparkles, Terminal, Award, Zap, Layers, Users
} from 'lucide-react';
import { WORKSHOP_PROGRAMS } from '../data/core_data';
import { TopographicBackground } from '../components/TopographicBackground';
import { playClickSound, playHoverSound, playNodeBlip } from '../utils/audio';

export function WorkshopsPage() {
  const [activeLabIndex, setActiveLabIndex] = useState(0);
  const activeLab = WORKSHOP_PROGRAMS[activeLabIndex] || WORKSHOP_PROGRAMS[0];

  const DEPLOYMENT_STEPS = [
    { step: '01', name: 'LEARN', desc: 'Modern industry frameworks, optics & digital workflows' },
    { step: '02', name: 'PRACTICE', desc: 'Hands-on soundstage & virtual volume execution' },
    { step: '03', name: 'FINE-TUNE', desc: 'Direct feedback from active guild department heads' },
    { step: '04', name: 'CONNECT', desc: 'Matchmaking into verified production pipelines' },
    { step: '05', name: 'DEPLOY', desc: 'Paid craft placement on active indie & studio sets' },
    { step: '06', name: 'FEEDBACK', desc: 'Continuous career progression & rate transparency' },
  ];

  return (
    <main className="bg-[#050608] text-[#ECEEF5] pt-24 pb-20 relative overflow-hidden selection:bg-[#B6F02A]/20 selection:text-[#B6F02A]">
      
      {/* Topographic Isoline Contour Layer */}
      <TopographicBackground intensity="medium" />

      {/* ── 01. Workshop Header (Elevate Labs Poster Style) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative z-10">
        


        {/* Eyebrow: Horizontal Lime Accent Bar */}
        <div className="flex items-center gap-3.5 mb-5">
          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
            ACT 01
          </span>
          <span className="text-xs sm:text-sm font-bold font-mono tracking-widest uppercase text-white/90">
            Capability Development // Guild Labs
          </span>
        </div>

        {/* High-Impact Headline & Editorial Block (No Overlap) */}
        <div className="max-w-5xl mb-12">
          <h1 className="text-[clamp(2.75rem,6.5vw,5.25rem)] font-black tracking-tight leading-[0.92] uppercase select-none text-white [letter-spacing:-0.03em] mb-6">
            BRIDGING SKILLS<br />
            <span className="text-[#B6F02A] drop-shadow-[0_0_35px_rgba(182,240,42,0.25)]">INTO ACTIVE</span><br />
            PRODUCTION.
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pt-2">
            {/* Vertical Lime Bar Quote */}
            <div className="border-l-3 sm:border-l-4 border-[#B6F02A] pl-5 sm:pl-6 py-1 max-w-2xl">
              <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed">
                DigiSynq workshops are not abstract film school lectures. They are intensive guild bridges engineered to train technicians and creators on modern workflows, then deploy them directly into verified productions.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a href="#masterclasses" className="btn-primary text-xs px-5 py-3 shadow-[0_0_20px_rgba(182,240,42,0.35)]">
                Explore Guild Labs <ArrowRight size={14} />
              </a>
              <Link to="/start" className="btn-secondary text-xs px-4 py-3">
                Request Intake
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. The 6-Step Deployment Loop ────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#090B10] border border-[#23B272]/20 shadow-2xl relative">
          <div className="mb-8">
            <div className="flex items-center gap-3.5 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
                ACT 02
              </span>
              <span className="text-xs font-mono text-[#52E3A4] uppercase tracking-wider font-bold">
                Deployment Protocol // 6-Step Loop
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">
              The 6-Step Industry Placement Loop
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {DEPLOYMENT_STEPS.map((s) => (
              <div 
                key={s.step}
                className="p-4 rounded-2xl bg-[#050608] border border-white/[0.08] flex flex-col justify-between h-40 group hover:border-[#B6F02A] transition"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-white/[0.06] border border-white/10 text-[#D4F838] tracking-wider">
                    STEP // {s.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#B6F02A]" />
                </div>
                <div>
                  <div className="text-sm font-black text-white group-hover:text-[#B6F02A] transition-colors uppercase">
                    {s.name}
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-1 leading-snug">
                    {s.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03. Active Guild Masterclasses Terminal ───────── */}
      <section id="masterclasses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Program Directory Selector */}
          <div className="lg:col-span-5 space-y-3 font-mono">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
                ACT 03
              </span>
              <span className="text-xs text-[#52E3A4] uppercase tracking-wider font-bold">
                Masterclass Syllabi ({WORKSHOP_PROGRAMS.length} Tracks)
              </span>
            </div>
            {WORKSHOP_PROGRAMS.map((prog, i) => {
              const isSelected = i === activeLabIndex;
              return (
                <button
                  key={prog.id}
                  type="button"
                  onClick={() => { setActiveLabIndex(i); playNodeBlip(i); }}
                  className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#0D281E] border-[#B6F02A] text-white shadow-[0_0_20px_rgba(182,240,42,0.25)]'
                      : 'bg-[#090B10] border-white/10 text-zinc-400 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-white/[0.06] border border-white/10 text-[#D4F838]">
                        TRACK // 0{i + 1}
                      </span>
                      <span className="badge-lime text-[9px] px-1.5 py-0.2 rounded font-bold uppercase">
                        {prog.category}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white uppercase">{prog.title}</div>
                    <div className="text-[10px] text-[#52E3A4]/80 mt-0.5">{prog.format}</div>
                  </div>
                  <ChevronRight size={16} className={isSelected ? 'text-[#B6F02A]' : 'opacity-30'} />
                </button>
              );
            })}
          </div>

          {/* Right: Masterclass Deep Dive Slate */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-[#090B10] border border-[#23B272]/30 shadow-2xl relative space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div>
                <span className="badge-lime text-[10px] font-mono px-2 py-0.5 rounded font-bold">
                  {activeLab.category.toUpperCase()} MASTERCLASS
                </span>
                <h3 className="text-2xl font-black text-white tracking-tight mt-2 uppercase">
                  {activeLab.title}
                </h3>
              </div>
              <span className="text-xs font-mono text-zinc-300 bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                {activeLab.format}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-[#52E3A4] uppercase block mb-1">
                  CURRICULUM ARCHITECTURE
                </span>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {activeLab.description}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0D281E]/60 border border-[#23B272]/20">
                <span className="text-xs font-mono text-[#B6F02A] uppercase block mb-1 font-bold">
                  TANGIBLE OUTCOME
                </span>
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-mono">
                  {activeLab.outcome}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs font-mono text-zinc-400">
                  <span className="text-white block font-bold">Next Cohort Activation</span>
                  <span>Applications reviewed on rolling basis</span>
                </div>
                <Link
                  to="/start"
                  className="w-full sm:w-auto btn-primary text-xs px-6 py-3 justify-center shadow-[0_0_20px_rgba(182,240,42,0.3)]"
                >
                  Apply For Guild Lab <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
