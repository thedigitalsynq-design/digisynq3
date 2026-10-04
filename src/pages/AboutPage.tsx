import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ShieldCheck, CheckCircle2, Layers } from 'lucide-react';
import { TopographicBackground } from '../components/TopographicBackground';
import { WHAT_DIGISYNQ_IS_NOT } from '../data/blueprint_data';

export function AboutPage() {
  const mechanismsOfValue = [
    { from: 'Idle talent', to: 'Available capacity', desc: 'Craftspeople and actors between projects become indexed, discoverable capability for sudden shoot turns.' },
    { from: 'Idle equipment', to: 'Productive capacity', desc: 'Optics and lighting sitting on rental shelves mid-week generate revenue instead of warehousing depreciation.' },
    { from: 'Unused locations', to: 'Revenue-generating resources', desc: 'Civic streets and private architectural properties generate high-margin location fees during open calendar windows.' },
    { from: 'Fragmented information', to: 'Systemic intelligence', desc: 'Isolated email threads and anecdotal rolodexes are unified into a transparent ecosystem knowledge graph.' },
    { from: 'Unused content', to: 'Additional economic value', desc: 'Dailies, cut scenes, and unused assets are adapted into transmedia, marketing kits, or archival licenses.' },
    { from: 'Disconnected relationships', to: 'Ecosystem connections', desc: 'Siloed guilds, rental houses, and distributors are coordinated without parasitic broker markups.' },
    { from: 'Unused data', to: 'Decision intelligence', desc: 'Historical schedule variance and budget burn rates are converted into predictive cascade sentinels.' },
    { from: 'Failed workflows', to: 'Business opportunities', desc: 'Every production shock reveals a root cause, a solution gap, and a dedicated paying enterprise customer.' },
  ];

  return (
    <div className="relative min-h-screen bg-[#03040A] text-[#ECEEF5] pt-24 sm:pt-28 pb-20 px-4 sm:px-6">
      <TopographicBackground />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 bg-white/[0.05] border border-white/[0.08] px-2.5 py-1">
              12 — SYSTEM PHILOSOPHY
            </span>
            <span className="font-mono text-xs text-zinc-500">•</span>
            <span className="font-mono text-xs text-zinc-400">WHY DIGISYNQ EXISTS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Nothing is waste. Disconnected value is.
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
            Entertainment does not have a resource shortage. It has a synchronization failure. Billions of dollars in equipment, creative capability, soundstages, and capital already exist. When these resources are isolated, they spoil into waste. DIGISYNQ exists to eliminate that disconnection.
          </p>
        </div>

        {/* The Core Mechanism Grid: Nothing Is Waste */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
            <div>
              <span className="font-mono text-xs uppercase text-zinc-500 tracking-wider">THE CONVERSION MECHANISM</span>
              <h2 className="text-2xl font-extrabold tracking-tight text-white">
                How disconnected value becomes waste — and how DIGISYNQ reconnects it
              </h2>
            </div>
            <div className="font-mono text-xs text-zinc-400">
              8 Foundational Conversions
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mechanismsOfValue.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#080B12] border border-white/[0.06] hover:border-white/[0.15] transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs mb-2">
                    <span className="text-zinc-500">CONVERSION 0{idx + 1}:</span>
                    <span className="text-red-400 line-through">{item.from}</span>
                    <span className="text-zinc-500">→</span>
                    <span className="text-emerald-400 font-bold">{item.to}</span>
                  </div>

                  <h3 className="text-base font-extrabold text-white tracking-tight">
                    {item.from} becomes {item.to}
                  </h3>

                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clear Anti-Agency Manifesto */}
        <div className="p-8 bg-[#090C15] border border-white/[0.08] space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">STRUCTURAL DEFINITION</span>
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              What DIGISYNQ is not
            </h3>
            <p className="text-sm text-zinc-400 max-w-2xl">
              We reject the conventional agency, production house, and rental models. DIGISYNQ is an asset-light ecosystem mechanism.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {WHAT_DIGISYNQ_IS_NOT.map((item, idx) => (
              <div key={idx} className="p-4 bg-black/40 border border-white/[0.04]">
                <div className="text-xs font-mono font-bold text-red-400 uppercase">✕ NOT {item.label}</div>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="p-8 bg-[#080B12] border border-white/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">READY TO SYNCHRONIZE</span>
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              Join the asset-light entertainment network.
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Whether you need resources, have idle equipment, or hold operational data, connect directly with the DIGISYNQ operating mechanism.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/participate"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-zinc-200 px-5 py-3 text-xs font-mono uppercase font-bold tracking-wider transition-colors"
            >
              <span>PARTICIPATE IN DIGISYNQ</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] px-5 py-3 text-xs font-mono uppercase font-semibold tracking-wider transition-colors"
            >
              <span>EXPLORE HOMEPAGE NARRATIVE</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
