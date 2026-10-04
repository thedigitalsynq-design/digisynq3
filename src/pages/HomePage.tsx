import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  Layers,
  ShieldCheck,
  Zap,
  Sparkles,
  GitBranch,
  Cpu,
  Compass,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  Sliders,
  Play,
  Share2,
  Terminal,
  HelpCircle,
  RefreshCw,
  Clock,
  DollarSign,
  Users,
  Check,
} from 'lucide-react';
import {
  BRAND,
  PHILOSOPHY_RULES,
  WHAT_DIGISYNQ_IS_NOT,
  CONTINUUM_STAGES,
  STAKEHOLDERS,
  OPERATING_MODES,
  BUSINESS_ARCHITECTURE_LAYERS,
  REVENUE_STREAMS,
  COMPETITIVE_MOAT_LAYERS,
} from '../data/blueprint_data';
import { TopographicBackground } from '../components/TopographicBackground';

export function HomePage() {
  const [heroMode, setHeroMode] = useState<'FRAGMENTED' | 'SYNCHRONIZED'>('SYNCHRONIZED');
  const [selectedOperatingMode, setSelectedOperatingMode] = useState(0);
  const [activePhilosophyTab, setActivePhilosophyTab] = useState(0);

  return (
    <main className="bg-[#03040A] text-[#ECEEF5] selection:bg-[#23B272] selection:text-[#03040A] min-h-screen relative overflow-hidden">
      {/* ── Topographic Background Canvas ── */}
      <TopographicBackground className="opacity-35 pointer-events-none -z-10" />

      {/* ── Ambient Radial Atmosphere ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-[#23B272]/20 via-[#16543D]/10 to-transparent blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[1400px] -left-48 w-[600px] h-[600px] bg-[#52E3A4]/6 blur-[180px] pointer-events-none -z-10" />
      <div className="absolute top-[2800px] -right-48 w-[700px] h-[700px] bg-[#23B272]/6 blur-[180px] pointer-events-none -z-10" />

      {/* ══════════════════════════════════════════════════════
          01 — HERO: MASTER METAPHORIC STATEMENT & DYNAMIC CONSOLE
         ══════════════════════════════════════════════════════ */}
      <section className="relative pt-36 sm:pt-48 pb-20 sm:pb-32 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] text-xs text-zinc-300 mb-8 tracking-wide backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-[#52E3A4] animate-pulse" />
            <span className="font-mono text-[#52E3A4] font-semibold">{BRAND.category.toUpperCase()}</span>
            <span className="text-zinc-600">//</span>
            <span className="text-zinc-400 font-medium">THE ARCHITECTURE OF THE SPACE BETWEEN</span>
          </div>

          {/* Master Metaphoric H1 */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.03] [letter-spacing:-0.035em] mb-6">
            Cinema is made in the silos.
            <span className="text-zinc-400 font-light block text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-2">
              It lives or dies in the spaces between.
            </span>
          </h1>

          {/* Master Metaphoric H2 */}
          <h2 className="text-lg sm:text-2xl text-zinc-300 font-normal leading-relaxed mb-6 max-w-3xl mx-auto">
            The invisible synchronization infrastructure orchestrating the silent dependencies between talent, soundstages, schedules, and screens.
          </h2>

          <div className="text-sm sm:text-base text-[#52E3A4] font-mono tracking-wide mb-10 font-semibold">
            {BRAND.mission} • {BRAND.tagline}
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link
              to="/start"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#23B272] text-[#03040A] hover:bg-[#52E3A4] font-bold text-sm tracking-wide transition-all duration-200 active:scale-95 shadow-[0_0_35px_rgba(35,178,114,0.4)]"
              id="hero-start-cta"
            >
              <span>Initiate System Resolution</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/engines"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/14 hover:border-[#52E3A4]/40 bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-sm transition-all duration-200 backdrop-blur-xl"
            >
              <Activity className="w-4 h-4 text-[#52E3A4]" />
              <span>Launch Simulation Engines</span>
            </Link>

            <Link
              to="/blueprint"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/10 hover:border-white/20 bg-transparent text-zinc-400 hover:text-white font-mono text-xs transition-all duration-200"
            >
              <span>70-Section Codex</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ── Interactive Hero Terminal: Fragmented vs Synchronized ── */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-white/[0.1] bg-[#090B14]/90 backdrop-blur-2xl shadow-2xl p-6 sm:p-8 relative overflow-hidden">
          {/* Console Header & Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="font-mono text-xs text-zinc-400 ml-2">SYSTEM STATE TELEMETRY // SIMULATOR</span>
            </div>

            <div className="inline-flex p-1 rounded-xl border border-white/[0.08] bg-black/60 font-mono text-xs">
              <button
                onClick={() => setHeroMode('FRAGMENTED')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  heroMode === 'FRAGMENTED'
                    ? 'bg-red-500/20 text-red-300 border border-red-500/30 font-semibold'
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                Fragmented Silos (Default)
              </button>
              <button
                onClick={() => setHeroMode('SYNCHRONIZED')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  heroMode === 'SYNCHRONIZED'
                    ? 'bg-[#23B272] text-[#03040A] font-bold shadow-md'
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                DIGISYNQ Infrastructure (Active)
              </button>
            </div>
          </div>

          {/* Dynamic Content Display */}
          {heroMode === 'FRAGMENTED' ? (
            <div className="space-y-6">
              <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-xs sm:text-sm text-red-200 flex items-center justify-between">
                <span>⚠️ Uncoordinated Cascade in Progress: Lead Actor date shifts by 6 days.</span>
                <span className="font-mono font-bold text-red-400 uppercase text-xs">Blast Radius: $450k Overrun</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                  <div className="text-zinc-500 mb-1">STAGE A: PRODUCTION</div>
                  <div className="text-white font-bold">Soundstage Eviction</div>
                  <div className="text-red-400 mt-1">Standby gear penalty: $18k/day</div>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                  <div className="text-zinc-500 mb-1">STAGE B: POST-PRODUCTION</div>
                  <div className="text-white font-bold">VFX Delivery Squeeze</div>
                  <div className="text-red-400 mt-1">Conform cut compressed by 12 days</div>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                  <div className="text-zinc-500 mb-1">STAGE C: DISTRIBUTION</div>
                  <div className="text-white font-bold">Release Window Lost</div>
                  <div className="text-red-400 mt-1">Platform QC rejection 48h before launch</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-4 rounded-xl border border-[#23B272]/40 bg-[#23B272]/10 text-xs sm:text-sm text-emerald-200 flex items-center justify-between">
                <span>⚡ Cascade Arrested: Dynamic scene resequencing + burst partner stage activated.</span>
                <span className="font-mono font-bold text-[#52E3A4] uppercase text-xs">Verified Saved: 5.5 Days &amp; $84k</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/20">
                  <div className="text-zinc-500 mb-1">MECHANISM 08: SIMULATE</div>
                  <div className="text-white font-bold">Resequence Exterior Scenes</div>
                  <div className="text-[#52E3A4] mt-1">Zero soundstage turnaround fines</div>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/20">
                  <div className="text-zinc-500 mb-1">MECHANISM 10: MATCH</div>
                  <div className="text-white font-bold">Partner Dark-Floor Floor Slot</div>
                  <div className="text-[#52E3A4] mt-1">Activated with 15% rate parity</div>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/20">
                  <div className="text-zinc-500 mb-1">MECHANISM 14: VERIFY</div>
                  <div className="text-white font-bold">IMF Master Delivered on Time</div>
                  <div className="text-[#52E3A4] mt-1">100% automated platform compliance</div>
                </div>
              </div>
            </div>
          )}

          {/* Terminal Footer Quote */}
          <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>Section 0 // Fundamental Axiom:</span>
            <span className="text-[#52E3A4] italic">
              "DIGISYNQ does not manage filmmaking. It manages the dependencies that make filmmaking possible."
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          02 — THE CORE PROBLEM: METAPHORIC CASCADE
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-8 border-y border-white/[0.06] bg-[#06080E]/70 relative">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-xs font-medium mb-3">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>SECTION 1 — THE CASCADE FAILURE</span>
            </div>

            {/* Metaphoric H2 */}
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              A single dropped beat echoes through the entire orchestra.
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
              Entertainment is an intricate polyphony of 20 distinct stakeholders. When one upstream date slips, it doesn't stay local — it triggers a compounded seismic wave down the entire critical path.
            </p>
          </div>

          {/* Visual Cascade Chain */}
          <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#090B14] shadow-2xl overflow-x-auto">
            <div className="text-xs font-mono text-[#52E3A4] mb-6 flex items-center justify-between">
              <span>UNSYNCHRONIZED CASCADE BLAST RADIUS</span>
              <span className="text-zinc-500">Without DIGISYNQ Intervention</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 min-w-[760px]">
              {[
                { step: '01', title: 'Actor Schedule Shift', detail: '+6 days unavailable', tag: 'Upstream Shock', color: 'border-amber-500/40 text-amber-400' },
                { step: '02', title: 'Shooting Order Alters', detail: 'Sequential scenes split', tag: 'Direct Effect', color: 'border-amber-500/30 text-zinc-300' },
                { step: '03', title: 'Location Booking Clash', detail: 'Permit & stage lost', tag: 'Spatial Loss', color: 'border-amber-500/30 text-zinc-300' },
                { step: '04', title: 'Crew & Gear Extension', detail: 'Turnaround hour breach', tag: 'Cost Spike', color: 'border-red-500/40 text-red-400' },
                { step: '05', title: 'Post-Pro Compressed', detail: 'VFX receives late plates', tag: 'Bottleneck', color: 'border-red-500/50 text-red-400' },
                { step: '06', title: 'Delivery Window Risk', detail: 'Platform QC rejection', tag: 'Release Loss', color: 'border-red-500/80 text-red-300' },
              ].map((item, idx) => (
                <div key={idx} className={`p-4 rounded-xl border bg-black/40 ${item.color} flex flex-col justify-between`}>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 mb-1">{item.step} // {item.tag}</div>
                    <div className="font-semibold text-sm text-white mb-2">{item.title}</div>
                    <div className="text-xs text-zinc-400">{item.detail}</div>
                  </div>
                  <div className="mt-4 pt-2 border-t border-white/[0.06] text-[10px] font-mono text-zinc-500">
                    Cascades downstream ↓
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="text-sm text-zinc-300 font-mono">
                <span className="text-[#52E3A4]">DIGISYNQ Solution:</span> Treats individual consequences as <strong className="text-white">one connected system</strong>.
              </div>
              <Link
                to="/engines"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#52E3A4] hover:text-white transition-colors"
              >
                <span>Launch Interactive Cascade Simulator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          03 — THE FOUNDATIONAL THESIS: ARCHIPELAGO METAPHOR
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16543D]/50 border border-[#23B272]/30 text-[#52E3A4] font-mono text-xs font-semibold mb-3">
            SECTION 2 — THE FOUNDATIONAL THESIS
          </div>
          {/* Metaphoric H2 */}
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Cinema is an archipelago.
            <span className="text-zinc-400 font-light block text-2xl sm:text-4xl mt-2">
              We build the current that connects the islands.
            </span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            The industry does not lack genius, soundstages, or camera rigs. It lacks the connective tissue between them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#090B14]">
            <div className="font-mono text-xs text-zinc-500 mb-2">THESIS 2.1</div>
            <h3 className="text-xl font-bold text-white mb-3">The industry does not lack assets</h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Underutilized soundstages sit dark between tenant leases; verified cinematographers, editors, and colorists experience unbooked weeks. The resources exist, but they are fragmented.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#090B14]">
            <div className="font-mono text-xs text-zinc-500 mb-2">THESIS 2.2</div>
            <h3 className="text-xl font-bold text-white mb-3">The industry does not only lack software</h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Another standalone project management app or generic database does not solve coordination. The missing layer is <strong>the intelligence and orchestration between systems</strong>.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-[#23B272]/40 bg-gradient-to-br from-[#06130E] to-[#090B14]">
            <div className="font-mono text-xs text-[#52E3A4] mb-2">THESIS 2.3</div>
            <h3 className="text-xl font-bold text-white mb-3">The SYNQ Gap</h3>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              DIGISYNQ operates in the space between Stage A &amp; B, Team A &amp; B, Requirement &amp; Capability, Plan &amp; Reality. That operational space is <strong>THE SYNQ GAP</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          04 — THE 4 OPERATING MODES: FOUR FREQUENCIES
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-8 border-t border-white/[0.06] bg-[#06080D]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <div className="text-xs font-mono text-[#52E3A4] mb-2">SECTION 35 — FOUR OPERATING MODES</div>
              {/* Metaphoric H2 */}
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Four Frequencies of Synchronization.
              </h2>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-md mt-4 md:mt-0 font-mono">
              From emergency triage on set to predictive systemic immunity before cameras ever roll.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {OPERATING_MODES.map((mode, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedOperatingMode(idx)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  selectedOperatingMode === idx
                    ? 'bg-[#16543D]/40 border-[#52E3A4] shadow-[0_0_30px_rgba(82,227,164,0.18)] scale-[1.02]'
                    : 'bg-[#090B14] border-white/[0.06] hover:border-white/[0.15]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#52E3A4] font-semibold">{mode.mode}</span>
                    <span className="text-[10px] font-mono text-zinc-500 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.05]">
                      {mode.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{mode.name}</h3>
                  <div className="text-xs font-mono text-[#D4F838] mb-4">{mode.tagline}</div>
                  <p className="text-xs text-zinc-300 leading-relaxed mb-6">{mode.description}</p>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1">Standard Output</div>
                  <div className="text-xs font-medium text-white">{mode.deliverable}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#090B14] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-zinc-300 font-mono">
              <strong className="text-white">Active Mode:</strong> {OPERATING_MODES[selectedOperatingMode].mode} — {OPERATING_MODES[selectedOperatingMode].name} ({OPERATING_MODES[selectedOperatingMode].tagline})
            </div>
            <Link
              to={`/start?mode=${OPERATING_MODES[selectedOperatingMode].mode.toLowerCase().replace(' ', '-')}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#23B272] text-[#03040A] hover:bg-[#52E3A4] font-semibold text-xs tracking-wide transition-all shrink-0"
            >
              <span>Initiate {OPERATING_MODES[selectedOperatingMode].name} Engagement</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          05 — 3-LAYER ARCHITECTURE: THREE DEPTHS OF VISION
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono text-zinc-500 mb-2">SECTION 36 — 3-LAYER BUSINESS ARCHITECTURE</div>
          {/* Metaphoric H2 */}
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            The Three Depths of Operational Vision.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Map what is real • Orchestrate what is possible • Remember what works.
          </p>
        </div>

        <div className="space-y-4">
          {BUSINESS_ARCHITECTURE_LAYERS.map((layer, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#090B14] hover:border-white/[0.14] transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] text-white">
                    {layer.layer}
                  </span>
                  <span className="font-bold text-xl text-white">{layer.name}</span>
                  <span className="text-zinc-500 font-mono text-xs">// {layer.role}</span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">{layer.desc}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {layer.actions.map((act, aIdx) => (
                  <span
                    key={aIdx}
                    className="px-3 py-1.5 rounded-lg border border-white/[0.08] bg-black/40 font-mono text-xs text-white"
                  >
                    {act}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          06 — DEDICATED PILLARS: THE LIVING NETWORK
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-8 border-t border-white/[0.06] bg-[#06080D]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14">
            <div className="text-xs font-mono text-[#52E3A4] mb-2 uppercase">EXPLORE THE ARCHITECTURE</div>
            {/* Metaphoric H2 */}
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              The Anatomy of the Synchronized Network.
            </h2>
            <p className="text-zinc-400 text-sm">
              Dedicated technical environments mapping every layer of entertainment infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              to="/mechanisms"
              className="p-6 rounded-2xl border border-white/[0.08] bg-[#090B14] hover:border-[#52E3A4]/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono text-[#52E3A4] mb-2">SECTIONS 7 TO 30</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#52E3A4] transition-colors flex items-center justify-between">
                  <span>The 23 Master Mechanisms</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  The continuous system loop from Observe and Detect down to Priority formulas, living Graph mapping, and autonomous Prevention.
                </p>
              </div>
              <div className="font-mono text-[11px] text-zinc-500 pt-3 border-t border-white/[0.06]">
                Includes Priority Formula Calculator →
              </div>
            </Link>

            <Link
              to="/continuum"
              className="p-6 rounded-2xl border border-white/[0.08] bg-[#090B14] hover:border-[#52E3A4]/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono text-[#52E3A4] mb-2">SECTION 5</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#52E3A4] transition-colors flex items-center justify-between">
                  <span>The 9-Stage Continuum</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  The entertainment lifecycle as an unbroken loop: Idea → Development → Pre-Pro → Production → Post → Marketing → Distribution → Audience → Monetization.
                </p>
              </div>
              <div className="font-mono text-[11px] text-zinc-500 pt-3 border-t border-white/[0.06]">
                Failure Modes &amp; Hand-Off Protocols →
              </div>
            </Link>

            <Link
              to="/stakeholders"
              className="p-6 rounded-2xl border border-white/[0.08] bg-[#090B14] hover:border-[#52E3A4]/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono text-[#52E3A4] mb-2">SECTION 6 &amp; 64</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#52E3A4] transition-colors flex items-center justify-between">
                  <span>The 12 Archetypes</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Bespoke dossiers and verified value propositions for Producers, Directors, Writers, Technicians, Talent, Post/VFX, Distributors, and Platforms.
                </p>
              </div>
              <div className="font-mono text-[11px] text-zinc-500 pt-3 border-t border-white/[0.06]">
                Section 64 Value Propositions →
              </div>
            </Link>

            <Link
              to="/engines"
              className="p-6 rounded-2xl border border-white/[0.08] bg-[#090B14] hover:border-[#52E3A4]/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono text-[#52E3A4] mb-2">SECTIONS 46, 47 &amp; 53</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#52E3A4] transition-colors flex items-center justify-between">
                  <span>Simulation Engines</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Interactive tools: The Cascade Simulator, the 13-step Root Map Tree Pipeline, 6-Domain Problem Taxonomy, and Multi-Factor Risk Calculator.
                </p>
              </div>
              <div className="font-mono text-[11px] text-zinc-500 pt-3 border-t border-white/[0.06]">
                Run Live Cascade Simulations →
              </div>
            </Link>

            <Link
              to="/how-it-works"
              className="p-6 rounded-2xl border border-white/[0.08] bg-[#090B14] hover:border-[#52E3A4]/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono text-[#52E3A4] mb-2">SECTIONS 43, 44 &amp; 45</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#52E3A4] transition-colors flex items-center justify-between">
                  <span>Resolution Workflow</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  The 10-step DIGISYNQ System Resolution Engagement, lead actor schedule crisis walkthrough, and asset-light trust architecture.
                </p>
              </div>
              <div className="font-mono text-[11px] text-zinc-500 pt-3 border-t border-white/[0.06]">
                Explore the 10-Step Protocol →
              </div>
            </Link>

            <Link
              to="/blueprint"
              className="p-6 rounded-2xl border border-white/[0.08] bg-[#090B14] hover:border-[#52E3A4]/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono text-[#52E3A4] mb-2">MASTER DOCUMENT</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#52E3A4] transition-colors flex items-center justify-between">
                  <span>70-Section Master Codex</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Complete architectural specification with instant section search, 8 competitive moats, 9 revenue streams, and 5-phase roadmap.
                </p>
              </div>
              <div className="font-mono text-[11px] text-zinc-500 pt-3 border-t border-white/[0.06]">
                Search Entire 70-Section Codex →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          07 — THE FLYWHEEL: COMPOUNDING MEMORY
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-mono text-[#52E3A4] mb-2 uppercase">SECTION 55 // COMPOUNDING ADVANTAGE</div>
            {/* Metaphoric H2 */}
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              The Compounding Memory of Cinema.
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
              Every crisis diagnosed and every dependency stabilized deposits institutional knowledge into systemic memory. Today's resolved breakdown becomes tomorrow's automated prevention.
            </p>
            <div className="p-5 rounded-2xl border border-white/[0.08] bg-black/50 font-mono text-xs text-zinc-300 space-y-2">
              <div className="flex items-center gap-2"><span className="text-[#52E3A4]">MORE PROJECTS</span> → More Problems Observed</div>
              <div className="flex items-center gap-2"><span className="text-[#52E3A4]">MORE SYSTEM MAPS</span> → More Verified Interventions</div>
              <div className="flex items-center gap-2"><span className="text-[#52E3A4]">MORE OUTCOME DATA</span> → Compounding System Memory</div>
              <div className="flex items-center gap-2"><span className="text-[#52E3A4]">BETTER PATTERNS</span> → Predictive Early Warnings</div>
              <div className="flex items-center gap-2 font-bold text-[#D4F838]">HIGHER SYSTEM VALUE → REPEAT EXPANSION ↺</div>
            </div>
          </div>

          {/* Verified North Star KPIs */}
          <div className="p-8 rounded-2xl border border-white/[0.1] bg-[#090B14]">
            <div className="text-xs font-mono text-[#52E3A4] mb-1 uppercase font-semibold">SECTION 60 CORE KPIS</div>
            <h3 className="text-2xl font-bold text-white mb-6">Verified System Value Created</h3>
            <div className="grid grid-cols-2 gap-4 font-mono">
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                <div className="text-2xl sm:text-3xl font-bold text-[#52E3A4]">5.5 Days</div>
                <div className="text-[11px] text-zinc-400 mt-1">Average Schedule Recovered / Emergency</div>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                <div className="text-2xl sm:text-3xl font-bold text-[#52E3A4]">$84,000+</div>
                <div className="text-[11px] text-zinc-400 mt-1">Avoided Idle Penalties / Sprint</div>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
                <div className="text-[11px] text-zinc-400 mt-1">Platform Delivery Spec Compliance</div>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                <div className="text-2xl sm:text-3xl font-bold text-white">Zero Debt</div>
                <div className="text-[11px] text-zinc-400 mt-1">Asset-Light Network Footprint</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          08 — FINAL MASTER CTA: WHERE IS YOUR FRICTION?
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-8 border-t border-white/[0.06] bg-gradient-to-b from-[#06130E] to-[#03040A] text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#23B272]/20 border border-[#23B272]/40 text-[#52E3A4] font-mono text-xs font-semibold mb-6">
            NORTH STAR KPI: {BRAND.northStarMetric.toUpperCase()}
          </div>

          {/* Metaphoric H2 */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Where is your production losing its rhythm?
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Bring us an active schedule slip, post-production crunch, soundstage bottleneck, or talent friction. We diagnose the system, identify the root cause, coordinate the solution, and prove the outcome.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/start"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#23B272] text-[#03040A] hover:bg-[#52E3A4] font-bold text-sm tracking-wide transition-all shadow-[0_0_35px_rgba(35,178,114,0.4)] active:scale-95"
            >
              <span>Submit a Project Challenge</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/blueprint"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/14 hover:border-white/25 bg-white/[0.03] text-white font-medium text-sm transition-all"
            >
              <span>Browse Master Blueprint</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-14 font-mono text-xs text-zinc-500">
            {BRAND.oneSentencePhilosophy} // {BRAND.oneSentenceMission}
          </div>
        </div>
      </section>
    </main>
  );
}
