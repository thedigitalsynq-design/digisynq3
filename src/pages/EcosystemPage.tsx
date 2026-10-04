import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Network, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react';
import { TopographicBackground } from '../components/TopographicBackground';
import { Ecosystem5LayersMap } from '../components/Ecosystem5LayersMap';

export function EcosystemPage() {
  return (
    <div className="relative min-h-screen bg-[#03040A] text-[#ECEEF5] pt-24 sm:pt-28 pb-20 px-4 sm:px-6">
      <TopographicBackground />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Header / Thesis */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 bg-white/[0.05] border border-white/[0.08] px-2.5 py-1">
              02 — ECOSYSTEM ARCHITECTURE
            </span>
            <span className="font-mono text-xs text-zinc-500">•</span>
            <span className="font-mono text-xs text-zinc-400">WHO AND WHAT EXISTS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            The entertainment ecosystem mapped across 5 interdependent layers.
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
            Entertainment is not a linear manufacturing pipeline. It is a multi-dimensional, decentralized network of independent creators, guilds, rental houses, physical soundstages, financial syndicates, and global exhibition platforms. DIGISYNQ does not own these assets — it maps their capabilities, operational requirements, and failure modes.
          </p>
        </div>

        {/* The 5 Layers Summary Bento Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {[
            { step: '01', title: 'Creation', desc: 'IP, screenwriters, directors, concept artists & music composition.' },
            { step: '02', title: 'Production', desc: 'Producers, guild crews, optical packages, locations & soundstages.' },
            { step: '03', title: 'Commercial', desc: 'Financing facilities, distribution licenses, marketing & sponsors.' },
            { step: '04', title: 'Infrastructure', desc: 'Cloud rendering, DIT pipelines, Dolby finishing labs & market telemetry.' },
            { step: '05', title: 'Consumption', desc: 'Audiences, cinema circuits, SVOD/AVOD streamers & interactive games.' },
          ].map((item) => (
            <div key={item.step} className="p-4 bg-[#080B12] border border-white/[0.06] flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">{item.step} LAYER</span>
                <h3 className="text-sm font-extrabold text-white tracking-tight mt-1">{item.title}</h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive 5 Layers Explorer */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              Interactive ecosystem explorer
            </h2>
            <span className="text-xs font-mono text-zinc-500">23 Core Entities Mapped</span>
          </div>
          <Ecosystem5LayersMap />
        </section>

        {/* Narrative Connection into EERG & Problems */}
        <div className="p-8 bg-[#090C15] border border-white/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">NEXT IN THE SYSTEM</span>
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              Now that you see what exists, understand why it breaks.
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              When 23 disparate entity types operate without synchronized telemetry, minor schedule or budget shocks propagate into catastrophic multi-million dollar failures. Explore the Entertainment Ecosystem Root-Cause Graph (EERG).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/eerg"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-zinc-200 px-5 py-3 text-xs font-mono uppercase font-bold tracking-wider transition-colors"
            >
              <span>EXPLORE EERG ROOT-CAUSE GRAPH</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/problems"
              className="inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] px-5 py-3 text-xs font-mono uppercase font-semibold tracking-wider transition-colors"
            >
              <span>VIEW PROBLEM ATLAS</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
