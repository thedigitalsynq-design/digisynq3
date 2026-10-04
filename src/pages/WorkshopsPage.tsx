import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  GraduationCap,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Video,
  PenTool,
  Wrench,
  Megaphone,
  TrendingUp,
  FileText,
} from 'lucide-react';
import { WORKSHOP_TRACKS, WorkshopTrack } from '../data/blueprint_data';

export function WorkshopsPage() {
  const [selectedTrackIdx, setSelectedTrackIdx] = useState(0);
  const activeTrack = WORKSHOP_TRACKS[selectedTrackIdx];

  return (
    <main className="bg-[#03040A] text-[#ECEEF5] selection:bg-[#23B272] selection:text-[#03040A] min-h-screen pt-36 pb-24 px-6 sm:px-8 max-w-6xl mx-auto">
      {/* ── Header ── */}
      <div className="max-w-4xl mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300 font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-[#52E3A4]" />
          <span>SECTION 42</span>
          <span className="text-zinc-600">//</span>
          <span className="text-[#52E3A4]">CAPABILITY &amp; WORKSHOP SYSTEM</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.03] mb-4">
          Forging the Adaptive Craftsman.
          <span className="text-zinc-400 font-light block text-2xl sm:text-4xl mt-2">
            Six Professional Capability Tracks.
          </span>
        </h1>

        <h2 className="text-base sm:text-xl text-zinc-300 leading-relaxed font-light max-w-3xl mb-8">
          Where practical floor discipline meets systemic agility — building technicians and creators who thrive across the evolving entertainment landscape.
        </h2>

        {/* Strategic Purpose Callout */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4 rounded-xl border border-white/[0.08] bg-[#090B14] font-mono text-xs text-zinc-300">
          <div className="text-center p-2 rounded bg-black/40">
            <span className="text-[#52E3A4] block text-[10px]">PILLAR 1</span>
            Capability Dev
          </div>
          <div className="text-center p-2 rounded bg-black/40">
            <span className="text-[#52E3A4] block text-[10px]">PILLAR 2</span>
            Talent Discovery
          </div>
          <div className="text-center p-2 rounded bg-black/40">
            <span className="text-[#52E3A4] block text-[10px]">PILLAR 3</span>
            Network Expansion
          </div>
          <div className="text-center p-2 rounded bg-black/40">
            <span className="text-[#52E3A4] block text-[10px]">PILLAR 4</span>
            Trust Formation
          </div>
          <div className="text-center p-2 rounded bg-black/40">
            <span className="text-[#52E3A4] block text-[10px]">PILLAR 5</span>
            System Intelligence
          </div>
        </div>
      </div>

      {/* ── Track Selector Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {WORKSHOP_TRACKS.map((trk, tIdx) => (
          <button
            key={trk.id}
            onClick={() => setSelectedTrackIdx(tIdx)}
            className={`p-5 rounded-2xl border text-left transition-all ${
              selectedTrackIdx === tIdx
                ? 'bg-[#16543D] border-[#52E3A4] text-white shadow-[0_0_24px_rgba(82,227,164,0.2)]'
                : 'bg-[#090B14] border-white/[0.06] text-zinc-400 hover:text-white hover:border-white/[0.14]'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-[#52E3A4]">{trk.code}</span>
              <span className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-black/30">
                {trk.category}
              </span>
            </div>
            <div className="font-bold text-sm text-white mb-1">{trk.name}</div>
            <div className="text-xs text-zinc-400 line-clamp-2">{trk.scope}</div>
          </button>
        ))}
      </div>

      {/* ── Active Track Deep-Dive ── */}
      <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.1] bg-[#090B14] shadow-2xl relative mb-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="font-mono text-xs text-[#52E3A4] mb-1">
              LEARNING TRACK {activeTrack.code} // {activeTrack.category.toUpperCase()}
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">{activeTrack.name}</h2>
          </div>
          <div className="px-4 py-2 rounded-xl border border-white/[0.08] bg-black/40 font-mono text-xs text-[#D4F838] shrink-0">
            Format: {activeTrack.format}
          </div>
        </div>

        <p className="text-base text-zinc-300 leading-relaxed mb-8 max-w-3xl">
          {activeTrack.scope}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/[0.08]">
          {/* Key Learning Outcomes */}
          <div>
            <div className="text-xs font-mono text-[#52E3A4] uppercase tracking-wider mb-3">
              Mastery Outcomes:
            </div>
            <ul className="space-y-3">
              {activeTrack.outcomes.map((out, oIdx) => (
                <li key={oIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-[#52E3A4] shrink-0 mt-0.5" />
                  <span>{out}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Workflow Environments */}
          <div>
            <div className="text-xs font-mono text-[#D4F838] uppercase tracking-wider mb-3">
              Production Workflows &amp; Tooling:
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {activeTrack.keyTools.map((tool, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1.5 rounded-lg border border-white/[0.08] bg-black/40 font-mono text-xs text-white"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="p-4 rounded-xl border border-white/[0.06] bg-black/30 text-xs text-zinc-400 font-mono">
              Participants are vetted and onboarded directly into the verified DIGISYNQ technician and creator capacity network upon completion.
            </div>
          </div>
        </div>

        {/* Enrollment CTA */}
        <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono text-zinc-500">
            Track Intake: Limited cohort sizes for maximum on-set hands-on synchronization
          </span>
          <Link
            to={`/start?track=${activeTrack.id}`}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#23B272] text-[#03040A] hover:bg-[#52E3A4] font-semibold text-xs tracking-wide transition-all shadow-md"
          >
            <span>Apply for Track Intake</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
