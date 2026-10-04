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
  GitBranch,
  Cpu,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { STAKEHOLDERS, StakeholderArchetype } from '../data/blueprint_data';
import { TopographicBackground } from '../components/TopographicBackground';

export function StakeholdersPage() {
  const [selectedStakeholderIdx, setSelectedStakeholderIdx] = useState(0);
  const activeStakeholder = STAKEHOLDERS[selectedStakeholderIdx];

  const getStakeholderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-zinc-200" />;
      case 'Clapperboard': return <Clapperboard className="w-5 h-5 text-white" />;
      case 'PenTool': return <PenTool className="w-5 h-5 text-white" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-zinc-200" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-white" />;
      case 'Layers': return <Layers className="w-5 h-5 text-zinc-200" />;
      case 'Music': return <Music className="w-5 h-5 text-zinc-200" />;
      case 'Radio': return <Radio className="w-5 h-5 text-white" />;
      case 'MonitorPlay': return <MonitorPlay className="w-5 h-5 text-white" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-zinc-200" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-white" />;
      case 'Heart': return <Heart className="w-5 h-5 text-zinc-200" />;
      default: return <Users className="w-5 h-5 text-white" />;
    }
  };

  return (
    <main className="bg-[#03040A] text-[#ECEEF5] selection:bg-white selection:text-black min-h-screen pt-36 pb-24 px-6 sm:px-8 max-w-6xl mx-auto relative overflow-hidden">
      <TopographicBackground className="opacity-20 pointer-events-none -z-10 fixed inset-0" />

      {/* ── Header ── */}
      <div className="max-w-4xl mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300 font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-white" />
          <span className="text-white">WHO DIGISYNQ SERVES</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.03] mb-4">
          DigiSynq serves every stakeholder in the entertainment system.
          <span className="text-zinc-400 font-light block text-2xl sm:text-4xl mt-2">
            Select your role to see where friction occurs and how DigiSynq intervenes.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-zinc-300 leading-relaxed font-light max-w-3xl mb-8">
          The entertainment ecosystem does not fail from lack of talent. It breaks in the uncoordinated handoffs between independent guilds, departments, and capital providers.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl border border-white/[0.08] bg-[#090B14]">
          <span className="text-xs font-mono text-zinc-400">
            Select your role below to see the specific friction points and DigiSynq interventions relevant to you:
          </span>
          <Link
            to="/ecosystem"
            className="text-xs font-mono text-white hover:text-white font-semibold transition-colors inline-flex items-center gap-1"
          >
            <span>Switch to Connected Network Topology Graph →</span>
          </Link>
        </div>
      </div>

      {/* ── Stakeholders Selector Grid ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
        {STAKEHOLDERS.map((stk, sIdx) => {
          const isSelected = selectedStakeholderIdx === sIdx;
          return (
            <button
              key={stk.id}
              onClick={() => setSelectedStakeholderIdx(sIdx)}
              className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3.5 cursor-pointer ${
                isSelected
                  ? 'bg-[#090B14] border-white/20 text-white shadow-[0_0_25px_rgba(82,227,164,0.25)] scale-[1.02]'
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

      {/* ── Active Stakeholder Complete Dossier ── */}
      <div className="p-8 sm:p-12 rounded-3xl border border-white/[0.1] bg-gradient-to-br from-[#090B14] via-[#06070B] to-[#03040A] shadow-2xl relative overflow-hidden mb-16">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="font-mono text-xs text-white mb-1">
              ARCHETYPE {activeStakeholder.id.toUpperCase()} // SYSTEM INTERFACE DOSSIER
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{activeStakeholder.name}</h2>
            <div className="text-sm font-mono text-zinc-400 mt-1">{activeStakeholder.role}</div>
          </div>

          <div className="p-5 rounded-2xl border border-white/20 bg-white/[0.05] max-w-lg">
            <div className="text-[10px] font-mono text-white uppercase tracking-wider mb-1 font-semibold">
              CORE VALUE PROPOSITION
            </div>
            <div className="text-sm sm:text-base font-medium text-white leading-relaxed">
              "{activeStakeholder.valueProp}"
            </div>
          </div>
        </div>

        {/* WHO THEY ARE */}
        <div className="p-6 rounded-2xl border border-white/[0.06] bg-black/40 mb-8">
          <div className="text-xs font-mono text-white uppercase tracking-wider mb-2 font-semibold">
            WHO THEY ARE
          </div>
          <p className="text-sm text-zinc-200 leading-relaxed">
            {activeStakeholder.whoTheyAre}
          </p>
        </div>

        {/* WHAT THEY NEED vs WHAT THEY PROVIDE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-2xl border border-white/[0.06] bg-[#090B14]">
            <div className="text-xs font-mono text-white uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>WHAT THEY NEED</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {activeStakeholder.whatTheyNeed}
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/[0.06] bg-[#090B14]">
            <div className="text-xs font-mono text-white uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-white" />
              <span>WHAT THEY PROVIDE</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {activeStakeholder.whatTheyProvide}
            </p>
          </div>
        </div>

        {/* COMMON FRICTION vs ROOT CAUSES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5">
            <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>COMMON SILO FRICTION</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {activeStakeholder.commonFriction}
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/5">
            <div className="text-xs font-mono text-red-400 uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
              <GitBranch className="w-4 h-4 text-red-400" />
              <span>ROOT CAUSES</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {activeStakeholder.rootCauses}
            </p>
          </div>
        </div>

        {/* DIGISYNQ INTERVENTION vs VALUE CREATED */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-2xl border border-white/15 bg-white/[0.03]">
            <div className="text-xs font-mono text-white uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>DIGISYNQ INTERVENTION</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {activeStakeholder.digisynqIntervention}
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/15 bg-[#090B14]">
            <div className="text-xs font-mono text-white uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-white" />
              <span>VALUE CREATED</span>
            </div>
            <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
              {activeStakeholder.valueCreated}
            </p>
          </div>
        </div>

        {/* RELATED MECHANISMS & RELATED STAGES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/[0.08] mb-8 text-xs font-mono">
          <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
            <span className="text-zinc-500 uppercase block mb-2">RELATED MECHANISMS</span>
            <div className="flex flex-wrap gap-2">
              {activeStakeholder.relatedMechanisms.map((mech, mIdx) => (
                <Link
                  key={mIdx}
                  to="/mechanisms"
                  className="px-2.5 py-1 rounded bg-white/[0.06] text-white border border-white/15 hover:bg-white/25 transition-colors"
                >
                  {mech}
                </Link>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
            <span className="text-zinc-500 uppercase block mb-2">RELATED CONTINUUM STAGES</span>
            <div className="flex flex-wrap gap-2">
              {activeStakeholder.relatedStages.map((stg, stIdx) => (
                <Link
                  key={stIdx}
                  to="/continuum"
                  className="px-2.5 py-1 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.08] hover:bg-white/[0.08] transition-colors"
                >
                  {stg}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Action Callout */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-xs font-mono text-zinc-500">
            System Relationships • Zero Balance-Sheet Asset Debt
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/diagnose"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-white/20 hover:border-white/20 bg-white/[0.03] text-white font-semibold text-xs tracking-wide transition-all"
            >
              <span>Diagnose {activeStakeholder.name} Issue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to={`/start?stakeholder=${activeStakeholder.id}`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black hover:bg-zinc-200 font-bold text-xs tracking-wide transition-all shadow-md"
            >
              <span>Onboard as {activeStakeholder.name}</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
