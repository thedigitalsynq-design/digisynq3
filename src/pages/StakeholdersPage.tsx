import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Briefcase,
  Clapperboard,
  PenTool,
  Wrench,
  UserCheck,
  Layers,
  Music,
  Radio,
  MonitorPlay,
  Share2,
  GraduationCap,
  Heart,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { STAKEHOLDERS, StakeholderArchetype } from '../data/blueprint_data';
import { EcosystemMap } from '../components/EcosystemMap';
import { TopographicBackground } from '../components/TopographicBackground';

export function StakeholdersPage() {
  const [selectedStakeholderIdx, setSelectedStakeholderIdx] = useState(0);
  const [viewMode, setViewMode] = useState<'DOSSIER' | 'ORBIT'>('DOSSIER');
  const activeStakeholder = STAKEHOLDERS[selectedStakeholderIdx];

  const getStakeholderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#23B272]" />;
      case 'Clapperboard': return <Clapperboard className="w-5 h-5 text-[#52E3A4]" />;
      case 'PenTool': return <PenTool className="w-5 h-5 text-[#D4F838]" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-[#23B272]" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-[#52E3A4]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#D4F838]" />;
      case 'Music': return <Music className="w-5 h-5 text-[#23B272]" />;
      case 'Radio': return <Radio className="w-5 h-5 text-[#52E3A4]" />;
      case 'MonitorPlay': return <MonitorPlay className="w-5 h-5 text-[#D4F838]" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-[#23B272]" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#52E3A4]" />;
      case 'Heart': return <Heart className="w-5 h-5 text-[#D4F838]" />;
      default: return <Users className="w-5 h-5 text-[#52E3A4]" />;
    }
  };

  return (
    <main className="bg-[#03040A] text-[#ECEEF5] selection:bg-[#23B272] selection:text-[#03040A] min-h-screen pt-36 pb-24 px-6 sm:px-8 max-w-6xl mx-auto relative overflow-hidden">
      <TopographicBackground className="opacity-15 pointer-events-none -z-10 fixed inset-0" />

      {/* ── Header ── */}
      <div className="max-w-4xl mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300 font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-[#52E3A4]" />
          <span>SECTION 6 &amp; SECTION 64</span>
          <span className="text-zinc-600">//</span>
          <span className="text-[#52E3A4]">THE 12 PRIMARY STAKEHOLDER ARCHETYPES</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.03] mb-4">
          Twelve Instruments. One Synchronized Score.
          <span className="text-zinc-400 font-light block text-2xl sm:text-4xl mt-2">
            The 12 Primary Industry Archetypes.
          </span>
        </h1>

        <h2 className="text-base sm:text-xl text-zinc-300 leading-relaxed font-light max-w-3xl mb-8">
          The entertainment industry fails not because individual stakeholders lack skill, but because each operates in a separate acoustic room. DIGISYNQ harmonizes the interfaces between every participant.
        </h2>

        {/* View Switcher and Onboard Link */}
        <div className="p-3 sm:p-4 rounded-2xl border border-white/[0.08] bg-[#090B14] flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex p-1 rounded-xl bg-black/50 border border-white/[0.06] text-xs font-mono">
            <button
              onClick={() => setViewMode('DOSSIER')}
              className={`px-4 py-2 rounded-lg transition-all ${
                viewMode === 'DOSSIER'
                  ? 'bg-[#16543D] text-[#52E3A4] font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Archetype Dossiers (12)
            </button>
            <button
              onClick={() => setViewMode('ORBIT')}
              className={`px-4 py-2 rounded-lg transition-all ${
                viewMode === 'ORBIT'
                  ? 'bg-[#16543D] text-[#52E3A4] font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Interactive Orbit Map
            </button>
          </div>

          <Link to="/start" className="text-[#52E3A4] hover:underline font-mono text-xs font-semibold flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/[0.04]">
            <span>Onboard into Network</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {viewMode === 'ORBIT' ? (
        <div className="mb-16">
          <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.08] bg-[#090B14] shadow-2xl">
            <EcosystemMap />
          </div>
        </div>
      ) : (
        <>
          {/* ── Stakeholders Selector Grid ── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
            {STAKEHOLDERS.map((stk, sIdx) => {
              const isSelected = selectedStakeholderIdx === sIdx;
              return (
                <button
                  key={stk.id}
                  onClick={() => setSelectedStakeholderIdx(sIdx)}
                  className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-[#16543D] border-[#52E3A4] text-white shadow-[0_0_25px_rgba(82,227,164,0.25)] scale-[1.02]'
                      : 'bg-[#090B14] border-white/[0.06] text-zinc-400 hover:text-white hover:border-white/[0.14]'
                  }`}
                >
                  <div className="p-2 rounded-xl bg-black/40 border border-white/[0.06] shrink-0">
                    {getStakeholderIcon(stk.icon)}
                  </div>
                  <div className="truncate">
                    <div className="font-bold text-sm text-white truncate">{stk.name}</div>
                    <div className="text-[11px] text-zinc-400 font-mono truncate">{stk.role}</div>
                  </div>
                </button>
              );
            })}
          </div>

      {/* ── Active Stakeholder Dossier & Protocol ── */}
      <div className="p-8 sm:p-12 rounded-3xl border border-white/[0.1] bg-gradient-to-br from-[#06130E] via-[#090B14] to-[#03040A] shadow-2xl relative overflow-hidden mb-16">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="font-mono text-xs text-[#52E3A4] mb-1">
              ARCHETYPE {activeStakeholder.id.toUpperCase()} // ECOSYSTEM DOSSIER
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{activeStakeholder.name}</h2>
            <div className="text-sm font-mono text-zinc-400 mt-1">{activeStakeholder.role}</div>
          </div>

          {/* Verbatim Section 64 Value Proposition */}
          <div className="p-5 rounded-2xl border border-[#23B272]/40 bg-[#23B272]/10 max-w-lg">
            <div className="text-[10px] font-mono text-[#52E3A4] uppercase tracking-wider mb-1 font-semibold">
              Section 64 // Verified Value Proposition
            </div>
            <div className="text-sm sm:text-base font-medium text-white italic leading-relaxed">
              "{activeStakeholder.valueProp}"
            </div>
          </div>
        </div>

        {/* 3 Core Pillars: Need, Friction, DIGISYNQ Solution */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="p-6 rounded-2xl border border-white/[0.06] bg-black/40">
            <div className="text-xs font-mono text-[#52E3A4] font-semibold mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#52E3A4]" />
              <span>CORE OPERATIONAL NEED</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              {activeStakeholder.coreNeed}
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5">
            <div className="text-xs font-mono text-amber-400 font-semibold mb-2 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>COMMON SILO FRICTION</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              {activeStakeholder.typicalFriction}
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-[#D4F838]/20 bg-[#D4F838]/5">
            <div className="text-xs font-mono text-[#D4F838] font-semibold mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D4F838]" />
              <span>SYNCHRONIZATION INTERVENTION</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              {activeStakeholder.digisynqValue}
            </p>
          </div>
        </div>

        {/* Action Callout */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-xs font-mono text-zinc-500">
            Asset-Light Network Orchestration • Verified Capability Matching
          </span>
          <Link
            to={`/start?stakeholder=${activeStakeholder.id}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#23B272] text-[#03040A] hover:bg-[#52E3A4] font-bold text-xs tracking-wide transition-all shadow-md"
          >
            <span>Onboard as {activeStakeholder.name}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
        </>
      )}
    </main>
  );
}
