import React from 'react';
import { Link } from 'react-router-dom';
import { 
  DollarSign, ArrowRight, ArrowUpRight, ShieldCheck, 
  Layers, CheckCircle2, Building, Cpu, Database 
} from 'lucide-react';
import { TopographicBackground } from '../components/TopographicBackground';
import { MONETIZATION_LAYERS, MonetizationLayer } from '../data/system_architecture_data';

export function MonetizePage() {
  return (
    <div className="relative min-h-screen bg-[#03040A] text-[#ECEEF5] pt-24 sm:pt-28 pb-20 px-4 sm:px-6">
      <TopographicBackground />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 bg-white/[0.05] border border-white/[0.08] px-2.5 py-1">
              11 — MONETIZATION & VALUE CAPTURE
            </span>
            <span className="font-mono text-xs text-zinc-500">•</span>
            <span className="font-mono text-xs text-zinc-400">HOW DIGISYNQ CREATES AND CAPTURES VALUE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-none">
            An Asset-Light Business Model Built on Coordination, Not Markups.
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
            DIGISYNQ does not act like a traditional agency charging 20% markups on talent, nor do we burn capital buying depreciating cameras or soundstages. Our business model aligns strictly with value created: monetizing dark capacity, preventing expensive cascade delays, and providing empirical decision intelligence.
          </p>
        </div>

        {/* 6 Value Capture Layers Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white">
              The 6 Value Capture Layers
            </h2>
            <div className="font-mono text-xs text-zinc-400">
              Clear Pricing Models · Dedicated Budget Holders
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MONETIZATION_LAYERS.map((layer) => (
              <div
                key={layer.tier}
                className="p-6 bg-[#080B12] border border-white/[0.08] hover:border-white/[0.2] transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-3">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 bg-white text-black">
                      LAYER {layer.tier}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-500 uppercase">
                      Commercial Tier
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white uppercase tracking-tight leading-snug">
                    {layer.name}
                  </h3>

                  <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                    {layer.mechanism}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/[0.06] font-mono text-xs">
                  <div>
                    <span className="text-[10px] uppercase text-zinc-500 block">Who Pays:</span>
                    <span className="text-zinc-200">{layer.whoPays}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-zinc-500 block">Pricing Model:</span>
                    <span className="text-emerald-400 font-semibold">{layer.pricingModel}</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-[10px] uppercase text-zinc-500 block">Value Delivered:</span>
                    <p className="text-zinc-400 text-[11px] font-sans leading-relaxed">{layer.valueDelivered}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Link to Philosophy & Participate */}
        <div className="p-8 bg-[#090C15] border border-white/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">READY TO ENGAGE</span>
            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
              Start With a Problem, Your Resources, or Your Data.
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              We do not present a generic contact form. Select your specific entry point to connect directly into the DIGISYNQ operating system.
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
              to="/about"
              className="inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] px-5 py-3 text-xs font-mono uppercase font-semibold tracking-wider transition-colors"
            >
              <span>SYSTEM PHILOSOPHY</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
