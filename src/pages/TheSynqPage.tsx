import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, Activity, ShieldAlert, Cpu, 
  Layers, Zap, CheckCircle2, ChevronRight, Eye, Radio, Compass, Film
} from 'lucide-react';
import { motion } from 'motion/react';
import { ProblemEngine } from '../components/ProblemEngine';
import { SynqFlowDiagram } from '../components/SynqFlowDiagram';
import { TopographicBackground } from '../components/TopographicBackground';
import { playClickSound, playHoverSound, playNodeBlip, playSuccessChime } from '../utils/audio';

const GAPS = [
  {
    id: 'human',
    title: 'Technician & Talent Blindspots',
    code: 'GAP.01',
    traditional: 'Producers hire from closed private networks. Elite cinematographers, gaffers, and sound artists sit unbooked while mid-tier projects struggle for technical competency.',
    synqSolution: 'Dynamic Availability Mesh indexes verified skills, union credits, and open dates in real time, matching projects without talent agency margins.',
    impact: '3.2 weeks saved per pre-production cycle',
  },
  {
    id: 'spatial',
    title: 'Idle Soundstages & LED Volumes',
    code: 'GAP.02',
    traditional: '41% of studio floor capacity sits dark between major tentpoles due to inflexible multi-month lease mandates.',
    synqSolution: 'Fractional Stage Liquidity: DigiSynq enables burst rentals and turnaround sharing across independent and mid-tier films.',
    impact: '$180K average reduction in stage spend',
  },
  {
    id: 'financial',
    title: 'Predatory Gap & Finishing Capital',
    code: 'GAP.03',
    traditional: 'Filmmakers surrender 35-50% backend equity or take high-interest mezzanine bridge debt just to complete sound mix, color, and VFX.',
    synqSolution: 'Milestone-Tied Syndication: Capital tranches unlocked instantly upon verified delivery of camera raw, dailies, and color turnovers.',
    impact: '0% predatory equity dilution',
  },
  {
    id: 'theatrical',
    title: 'Release Window Cannibalization',
    code: 'GAP.04',
    traditional: 'Mid-budget cinema clashes blindly on identical release weekends against studio tentpoles, resulting in instant screen eviction after 3 days.',
    synqSolution: 'Programmatic Circuit Sync: Pre-demand signals guide surgical territorial releases, multiplex programming, and premium event screenings.',
    impact: '2.4x higher box office per screen',
  },
];

const ARCHITECTURE_LAYERS = [
  {
    num: '01',
    name: 'The Discovery Engine',
    subtitle: 'Indexing Unseen Capacity',
    desc: 'We continuously map the dark inventory of filmmaking — unbooked stages, verified crew availability, underutilized IP rights, and targeted screen windows.',
    icon: Compass,
    accent: '#23B272',
  },
  {
    num: '02',
    name: 'The Routing Mesh',
    subtitle: 'Asset-Light Synchronization',
    desc: 'DigiSynq does not buy cameras or build soundstages. We serve as the operational nervous system connecting the right puzzle pieces at the precise instant of demand.',
    icon: Cpu,
    accent: '#52E3A4',
  },
  {
    num: '03',
    name: 'Value Capture Protocol',
    subtitle: 'Aligned Economic Return',
    desc: 'We monetize through successful coordination and shared upside — ensuring DigiSynq only profits when budgets are saved and theatrical return is unlocked.',
    icon: Zap,
    accent: '#D4F838',
  },
];

export function TheSynqPage() {
  const [activeGapIndex, setActiveGapIndex] = useState(0);
  const activeGap = GAPS[activeGapIndex];

  return (
    <main className="bg-[#050608] text-[#ECEEF5] pt-24 pb-20 relative overflow-hidden selection:bg-[#B6F02A]/20 selection:text-[#B6F02A]">
      
      {/* Topographic Isoline Contour Elevation Layer */}
      <TopographicBackground intensity="medium" />

      {/* ── 01. Dossier Top Header (Elevate Labs Poster Style) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative z-10">
        


        {/* Eyebrow: Horizontal Lime Accent Bar (Elevate Labs signature) */}
        <div className="flex items-center gap-3.5 mb-5">
          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
            ACT 01
          </span>
          <span className="text-xs sm:text-sm font-bold font-mono tracking-widest uppercase text-white/90">
            System Diagnosis // Architectural Codex
          </span>
        </div>

        {/* High-Impact Headline & Editorial Block (No Overlap) */}
        <div className="max-w-5xl mb-12">
          <h1 className="text-[clamp(2.75rem,6.5vw,5.25rem)] font-black tracking-tight leading-[0.92] uppercase select-none text-white [letter-spacing:-0.03em] mb-6">
            FATAL<br />
            <span className="text-[#B6F02A] drop-shadow-[0_0_35px_rgba(182,240,42,0.25)]">CINEMA</span><br />
            FRAGMENTATION.
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pt-2">
            {/* Vertical Lime Bar Quote (Elevate Labs signature) */}
            <div className="border-l-3 sm:border-l-4 border-[#B6F02A] pl-5 sm:pl-6 py-1 max-w-2xl">
              <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed">
                Cinema possesses immense talent, cutting-edge infrastructure, and eager capital. But these forces operate in isolated silos. DigiSynq is the connective tissue that synchronizes them without physical balance-sheet overhead.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a href="#gap-radar" className="btn-primary text-xs px-5 py-3 shadow-[0_0_20px_rgba(182,240,42,0.35)]">
                Explore The Gaps <ArrowRight size={14} />
              </a>
              <Link to="/start" className="btn-secondary text-xs px-4 py-3">
                Start a Synq
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. Interactive Cinema Gap Radar ───────────────── */}
      <section id="gap-radar" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24 relative z-10">
        <div className="p-6 sm:p-10 rounded-3xl bg-[#090B10] border border-[#23B272]/20 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-white/[0.08] gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
                  ACT 02
                </span>
                <span className="text-xs font-mono text-[#52E3A4] uppercase tracking-wider font-bold">
                  Operational Friction Diagnostician
                </span>
              </div>
              <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight uppercase">
                Where Cinema Leaks Value & How SYNQ Fixes It
              </h2>
            </div>

            {/* Gap Selector Tabs */}
            <div className="flex items-center flex-wrap gap-1.5 p-1 rounded-xl bg-black/60 border border-white/10 text-xs font-mono">
              {GAPS.map((gap, i) => (
                <button
                  key={gap.id}
                  type="button"
                  onClick={() => { setActiveGapIndex(i); playNodeBlip(i); }}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    activeGapIndex === i
                      ? 'bg-[#B6F02A] text-[#050608] font-bold shadow-[0_0_14px_rgba(182,240,42,0.4)]'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  GAP // 0{i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Active Gap Comparison Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Traditional Fragmented State */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#090B10] border border-white/10 relative space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-zinc-500 animate-pulse" />
                  TRADITIONAL FRAGMENTATION
                </span>
                <span>STATUS QUO</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                {activeGap.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {activeGap.traditional}
              </p>
            </div>

            {/* The Synq Connector Pillar */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center gap-2 py-4">
              <div className="w-14 h-14 rounded-full bg-[#0D281E] border border-[#B6F02A] flex items-center justify-center text-[#B6F02A] shadow-[0_0_24px_rgba(182,240,42,0.3)]">
                <Zap size={24} className="animate-pulse" />
              </div>
              <span className="text-[10px] font-mono text-[#52E3A4] font-bold tracking-widest uppercase">
                SYNQ PROTOCOL
              </span>
            </div>

            {/* DigiSynq Synchronized Resolution */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#0D281E]/60 border border-[#23B272]/40 relative space-y-4 shadow-[0_0_30px_rgba(35,178,114,0.15)]">
              <div className="flex items-center justify-between text-xs font-mono text-[#52E3A4]">
                <span className="font-bold flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-[#B6F02A]" />
                  SYNCHRONIZED RESOLUTION
                </span>
                <span className="badge-lime text-[9px] px-2 py-0.5 rounded font-bold">
                  {activeGap.impact}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                Asset-Light Coordination Mesh
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {activeGap.synqSolution}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── 03. The 3 Architectural Layers ────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="mb-12">
          {/* Eyebrow with Lime Bar */}
          <div className="flex items-center gap-3.5 mb-3">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
              ACT 03
            </span>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-white/90">
              The 3-Layer Stack // Coordination Architecture
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
            How The Synchronization Layer Operates
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mt-2">
            By sitting above physical assets, DigiSynq delivers instantaneous coordination without owning the cameras, soundstages, or balance-sheet debt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARCHITECTURE_LAYERS.map((layer) => {
            const Icon = layer.icon;
            return (
              <div 
                key={layer.num}
                className="p-8 rounded-3xl bg-[#090B10] border border-[#23B272]/20 hover:border-[#B6F02A] transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#0D281E] border border-[#23B272]/30 flex items-center justify-center text-[#B6F02A] group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/[0.06] border border-white/10 text-[#D4F838] group-hover:border-[#B6F02A] transition-colors">
                      LAYER // {layer.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
                    {layer.name}
                  </h3>
                  <div className="text-xs font-mono text-[#52E3A4] mb-4">
                    {layer.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {layer.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>ZERO PHYSICAL DEBT</span>
                  <span className="text-[#B6F02A] group-hover:translate-x-1 transition-transform font-bold">
                    → ACTIVE
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 04. SynqFlow Lifecycle Diagram ────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#090B10] border border-white/[0.08]">
          <div className="mb-8">
            <div className="flex items-center gap-3.5 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
                ACT 04
              </span>
              <span className="text-xs font-mono text-[#52E3A4] uppercase tracking-wider font-bold">
                Lifecycle Topology // Closed-Loop Engine
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">
              The 4-Stage Operational Rhythm
            </h2>
          </div>
          <SynqFlowDiagram />
        </div>
      </section>

      {/* ── 05. Live Problem Engine Diagnostic ─────────────── */}
      <section id="problem-engine" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
              ACT 05
            </span>
            <span className="badge-lime text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase">
              LIVE DIAGNOSTIC
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">
            Have a Specific Cinema Roadblock?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Select your real-world production or release bottleneck to generate an immediate synq pathway.
          </p>
        </div>
        <ProblemEngine />
      </section>

    </main>
  );
}
