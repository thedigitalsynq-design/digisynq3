import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Network, ArrowRight, ArrowUpRight, ShieldCheck, 
  Layers, CheckCircle2, Cpu, MapPin, Clock, DollarSign 
} from 'lucide-react';
import { TopographicBackground } from '../components/TopographicBackground';
import { NETWORK_REGISTRY_CATEGORIES, NetworkCategory } from '../data/system_architecture_data';

export function NetworkPage() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('talent-skills');
  const activeCategory = NETWORK_REGISTRY_CATEGORIES.find((c) => c.id === selectedCategoryId) || NETWORK_REGISTRY_CATEGORIES[0];

  return (
    <div className="relative min-h-screen bg-[#03040A] text-[#ECEEF5] pt-24 sm:pt-28 pb-20 px-4 sm:px-6">
      <TopographicBackground />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 bg-white/[0.05] border border-white/[0.08] px-2.5 py-1">
              07 — ASSET-LIGHT NETWORK
            </span>
            <span className="font-mono text-xs text-zinc-500">•</span>
            <span className="font-mono text-xs text-zinc-400">WHAT EXISTS AND WHO/WHERE IS IT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            We don't own everything. We connect what exists.
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
            Entertainment doesn't need another rental house, another production company, or another studio lot. Hundreds of millions of dollars of world-class physical assets, talent, and soundstages already exist — but sit idle, uncoordinated, or inaccessible. DIGISYNQ is the synchronization layer that indexes and mobilizes them.
          </p>
        </div>

        {/* The 6 Questions Framework Strip */}
        <div className="p-6 sm:p-8 bg-[#080B12] border border-white/[0.08] space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 block">
            THE 6-QUESTION ASSET-LIGHT COORDINATION MATRIX
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            {[
              { q: '01', title: 'WHO OWNS IT?', desc: 'Independent facilities, rental houses, artists, property trusts.' },
              { q: '02', title: 'WHERE IS IT?', desc: 'Geographically mapped across 40+ primary global production centers.' },
              { q: '03', title: 'WHAT CAN IT DO?', desc: 'Verified technical specifications, sensor formats, acoustic ratings.' },
              { q: '04', title: 'WHEN IS IT AVAILABLE?', desc: 'Real-time calendar windows, hiatus periods, dark capacity slots.' },
              { q: '05', title: 'WHO NEEDS IT?', desc: 'Productions facing sudden variances, date shifts, or specialized needs.' },
              { q: '06', title: 'WHAT VALUE IS CREATED?', desc: 'Idle cost converted into high-margin revenue; delay costs eliminated.' },
            ].map((col) => (
              <div key={col.q} className="p-3.5 bg-black/40 border border-white/[0.05] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-zinc-500">{col.q} QUESTION</span>
                  <div className="font-bold text-xs text-white uppercase mt-1 leading-tight">{col.title}</div>
                </div>
                <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed">{col.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Category Selector Strip */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
            <h2 className="text-2xl font-extrabold tracking-tight text-white">
              Indexed resource repositories
            </h2>
            <div className="font-mono text-xs text-zinc-400">
              5 Core Asset Classes · Real Capacity
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {NETWORK_REGISTRY_CATEGORIES.map((cat) => {
              const isSelected = cat.id === activeCategory.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className={`p-4 text-left border transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white text-black border-white shadow-xl'
                      : 'bg-[#080B12] text-zinc-400 border-white/[0.06] hover:border-zinc-600 hover:text-white'
                  }`}
                >
                  <div>
                    <span className={`font-mono text-[10px] block mb-2 uppercase ${isSelected ? 'text-zinc-600' : 'text-zinc-500'}`}>
                      {cat.assetCountEstimate}
                    </span>
                    <h3 className={`text-sm font-extrabold tracking-tight leading-tight ${isSelected ? 'text-black' : 'text-white'}`}>
                      {cat.name}
                    </h3>
                  </div>
                  <div className={`text-[11px] font-mono mt-3 ${isSelected ? 'text-zinc-800' : 'text-zinc-500'}`}>
                    View Matrix →
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Category Deep Dive */}
          <div className="p-6 sm:p-8 bg-[#090C15] border border-white/[0.08] space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
              <div>
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                  RESOURCE SPECIFICATION: {activeCategory.name}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                  {activeCategory.headline}
                </h3>
              </div>
              <div className="font-mono text-xs bg-white/[0.05] border border-white/[0.1] text-zinc-300 px-3 py-1.5 self-start md:self-auto">
                {activeCategory.assetCountEstimate}
              </div>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed bg-black/40 p-4 border border-white/[0.04]">
              {activeCategory.description}
            </p>

            {/* 6 Questions Answered for this Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">1. Who Owns It?</span>
                <p className="text-xs text-zinc-200 leading-relaxed">{activeCategory.whoOwnsIt}</p>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">2. Where Does It Exist?</span>
                <p className="text-xs text-zinc-200 leading-relaxed">{activeCategory.whereItExists}</p>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">3. What Can It Do?</span>
                <p className="text-xs text-zinc-200 leading-relaxed">{activeCategory.whatItCanDo}</p>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">4. When Is It Available?</span>
                <p className="text-xs text-zinc-200 leading-relaxed">{activeCategory.whenAvailable}</p>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">5. Who Needs It?</span>
                <p className="text-xs text-zinc-200 leading-relaxed">{activeCategory.whoNeedsIt}</p>
              </div>

              <div className="p-4 bg-emerald-950/20 border border-emerald-500/20">
                <span className="text-[10px] font-mono uppercase text-emerald-400 block mb-1">6. What Value Is Created?</span>
                <p className="text-xs text-zinc-200 leading-relaxed">{activeCategory.valueCreated}</p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/[0.08]">
              <span className="font-mono text-xs text-zinc-400">
                Have idle capacity in this asset category? Index it into the network without exclusivity locks.
              </span>
              <Link
                to="/participate"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase font-bold tracking-wider text-black bg-white hover:bg-zinc-200 px-4 py-2 transition-colors self-start sm:self-auto"
              >
                <span>INDEX YOUR CAPACITY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Narrative Link to Connect & Orchestrate */}
        <div className="p-8 bg-[#090C15] border border-white/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">NEXT IN THE SYSTEM</span>
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              An asset network is worthless without intelligent connection.
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Discover how DIGISYNQ turns a complex, high-stakes production requirement into an algorithmically verified, multi-resource match in hours instead of weeks.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/connect"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-zinc-200 px-5 py-3 text-xs font-mono uppercase font-bold tracking-wider transition-colors"
            >
              <span>SEE HOW WE CONNECT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/orchestrate"
              className="inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] px-5 py-3 text-xs font-mono uppercase font-semibold tracking-wider transition-colors"
            >
              <span>SEE WORKFLOW ORCHESTRATION</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
