import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Cpu,
  Search,
  CheckCircle2,
  Filter,
  Calculator,
  RefreshCw,
  GitBranch,
  Layers,
  Activity,
  ShieldCheck,
} from 'lucide-react';
import { MECHANISMS, Mechanism } from '../data/blueprint_data';

export function MechanismsPage() {
  const [filterCategory, setFilterCategory] = useState<'ALL' | 'OBSERVE_MAP' | 'ORCHESTRATE' | 'INTELLIGENCE' | 'GOVERNANCE'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMechIndex, setActiveMechIndex] = useState(0);

  // Interactive Priority Calculator state
  const [impact, setImpact] = useState(8);
  const [urgency, setUrgency] = useState(7);
  const [dependency, setDependency] = useState(9);
  const [probability, setProbability] = useState(8);
  const [effort, setEffort] = useState(3);
  const [cost, setCost] = useState(4);

  const calculatedPriority = ((impact * urgency * dependency * probability) / Math.max(effort * cost, 1)).toFixed(1);

  // Filter mechanisms
  const filteredMechanisms = MECHANISMS.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.description.toLowerCase().includes(searchQuery.toLowerCase());

    const num = parseInt(m.num, 10);
    if (filterCategory === 'OBSERVE_MAP') return matchesSearch && num >= 1 && num <= 7;
    if (filterCategory === 'ORCHESTRATE') return matchesSearch && num >= 8 && num <= 14;
    if (filterCategory === 'INTELLIGENCE') return matchesSearch && (num >= 15 && num <= 17 || num >= 22);
    if (filterCategory === 'GOVERNANCE') return matchesSearch && num >= 18 && num <= 21;
    return matchesSearch;
  });

  const activeMech = filteredMechanisms[activeMechIndex] || MECHANISMS[0];

  return (
    <main className="bg-[#03040A] text-[#ECEEF5] selection:bg-[#23B272] selection:text-[#03040A] min-h-screen pt-36 pb-24 px-6 sm:px-8 max-w-6xl mx-auto">
      {/* ── Header ── */}
      <div className="max-w-4xl mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300 font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-[#52E3A4] animate-pulse" />
          <span>SECTIONS 7 TO 30</span>
          <span className="text-zinc-600">//</span>
          <span className="text-[#52E3A4]">THE MASTER DIGISYNQ SYSTEM LOOP</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.03] mb-4">
          The Synaptic Engine.
          <span className="text-zinc-400 font-light block text-2xl sm:text-4xl mt-2">
            The 23 Master Mechanisms of Systemic Order.
          </span>
        </h1>

        <h2 className="text-base sm:text-xl text-zinc-300 leading-relaxed font-light max-w-3xl mb-8">
          From the first subtle tremors of operational drift to permanent algorithmic immunity — how DIGISYNQ diagnoses, orchestrates, and prevents ecosystem collapse across the living network.
        </h2>

        {/* Master ASCII System Loop Visualizer */}
        <div className="p-5 rounded-xl border border-white/[0.08] bg-[#090B14] font-mono text-xs text-zinc-400 overflow-x-auto">
          <div className="text-[11px] text-[#52E3A4] font-semibold mb-2">THE CONTINUOUS SYSTEM LOOP:</div>
          <div className="text-zinc-300 flex flex-wrap gap-2 items-center leading-loose">
            <span className="text-white font-semibold">OBSERVE</span> →
            <span>DETECT</span> →
            <span>DECOMPOSE</span> →
            <span className="text-[#52E3A4]">MAP</span> →
            <span>DIAGNOSE</span> →
            <span>CLASSIFY</span> →
            <span>PRIORITIZE</span> →
            <span className="text-[#D4F838]">SIMULATE</span> →
            <span>CONNECT</span> →
            <span>MATCH</span> →
            <span className="text-white font-semibold">COORDINATE</span> →
            <span>EXECUTE</span> →
            <span>MONITOR</span> →
            <span className="text-[#52E3A4]">VERIFY</span> →
            <span>LEARN</span> →
            <span>PREDICT</span> →
            <span className="text-[#D4F838] font-bold">PREVENT ↺</span>
          </div>
        </div>
      </div>

      {/* ── Interactive Priority Calculator Section ── */}
      <section className="mb-16 p-6 sm:p-8 rounded-2xl border border-[#23B272]/30 bg-gradient-to-br from-[#06130E] via-[#090B14] to-[#0D281E]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-mono text-[#52E3A4] mb-1">MECHANISM 07 EMBEDDED ENGINE</div>
            <h2 className="text-2xl font-bold text-white">Algorithmic Priority Calculator</h2>
            <p className="text-xs text-zinc-400 mt-1 font-mono">
              PRIORITY = (IMPACT × URGENCY × DEPENDENCY × PROBABILITY) / (EFFORT × COST)
            </p>
          </div>
          <div className="p-4 rounded-xl border border-white/[0.08] bg-black/60 text-right shrink-0">
            <div className="text-[10px] font-mono text-zinc-400 uppercase">Calculated Score</div>
            <div className="text-3xl font-mono font-bold text-[#52E3A4]">{calculatedPriority}</div>
            <div className="text-[10px] font-mono text-zinc-500">
              {Number(calculatedPriority) > 200 ? '🚨 IMMEDIATE INTERVENTION' : '⚡ SCHEDULED SYNC'}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: 'Impact (1-10)', val: impact, set: setImpact },
            { label: 'Urgency (1-10)', val: urgency, set: setUrgency },
            { label: 'Dependency (1-10)', val: dependency, set: setDependency },
            { label: 'Probability (1-10)', val: probability, set: setProbability },
            { label: 'Effort (1-10)', val: effort, set: setEffort },
            { label: 'Cost (1-10)', val: cost, set: setCost },
          ].map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl border border-white/[0.06] bg-black/30">
              <div className="text-[11px] font-mono text-zinc-400 mb-2">{item.label}</div>
              <input
                type="range"
                min="1"
                max="10"
                value={item.val}
                onChange={(e) => item.set(Number(e.target.value))}
                className="w-full accent-[#23B272] cursor-pointer"
              />
              <div className="text-right font-mono text-xs font-bold text-white mt-1">{item.val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Filters & Search ── */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl border border-white/[0.08] bg-[#090B14]">
          {[
            { key: 'ALL', label: 'All 23' },
            { key: 'OBSERVE_MAP', label: '01–07: Observe & Map' },
            { key: 'ORCHESTRATE', label: '08–14: Orchestrate & Verify' },
            { key: 'INTELLIGENCE', label: '15–17, 22–23: Intelligence' },
            { key: 'GOVERNANCE', label: '18–21: Governance & Resilience' },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => {
                setFilterCategory(f.key as any);
                setActiveMechIndex(0);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                filterCategory === f.key
                  ? 'bg-[#23B272] text-[#03040A] font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search mechanisms..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setActiveMechIndex(0);
            }}
            className="w-full sm:w-60 pl-9 pr-4 py-2 rounded-xl border border-white/[0.08] bg-[#090B14] text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#52E3A4]"
          />
        </div>
      </div>

      {/* ── Mechanisms Master Grid & Detailed Inspector ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left List of Mechanisms */}
        <div className="lg:col-span-5 space-y-2 max-h-[780px] overflow-y-auto pr-2 custom-scrollbar">
          {filteredMechanisms.map((mech, idx) => {
            const isSelected = (filteredMechanisms[activeMechIndex]?.num === mech.num);
            return (
              <div
                key={mech.num}
                onClick={() => setActiveMechIndex(idx)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#16543D]/40 border-[#52E3A4] shadow-[0_0_24px_rgba(82,227,164,0.18)]'
                    : 'bg-[#090B14] border-white/[0.06] hover:border-white/[0.14]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-xs text-[#52E3A4] font-semibold">MECHANISM {mech.num}</span>
                  {mech.formulaOrRule && (
                    <span className="text-[10px] font-mono text-[#D4F838] truncate max-w-[160px]">
                      {mech.formulaOrRule}
                    </span>
                  )}
                </div>
                <div className="font-bold text-base text-white">{mech.name}</div>
                <div className="text-xs text-zinc-400 mt-1 leading-snug">{mech.tagline}</div>
              </div>
            );
          })}
        </div>

        {/* Right Active Mechanism Deep-Dive Panel */}
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl border border-white/[0.1] bg-[#090B14] relative overflow-hidden">
          <div className="font-mono text-xs text-[#52E3A4] mb-2">
            DETAILED CODEX INSPECTOR // MECHANISM {activeMech.num}
          </div>

          <h2 className="text-3xl font-bold text-white mb-2">{activeMech.name}</h2>
          <div className="text-sm font-mono text-[#D4F838] mb-6">{activeMech.tagline}</div>

          {activeMech.formulaOrRule && (
            <div className="mb-6 p-4 rounded-xl border border-white/[0.08] bg-black/50 font-mono text-xs text-white">
              <span className="text-zinc-500 uppercase text-[10px] block mb-1">Core Formula / Principle:</span>
              <span className="text-[#52E3A4] font-semibold">{activeMech.formulaOrRule}</span>
            </div>
          )}

          <div className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
            {activeMech.description}
          </div>

          <div className="pt-6 border-t border-white/[0.08]">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
              Operational Protocols:
            </div>
            <ul className="space-y-2.5">
              {activeMech.details.map((detail, dIdx) => (
                <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-[#52E3A4] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs font-mono text-zinc-500">Master Blueprint Reference: Section {7 + parseInt(activeMech.num, 10) - 1}</span>
            <div className="flex items-center gap-3">
              <Link
                to="/diagnose"
                className="px-4 py-2 rounded-full bg-[#23B272] text-[#03040A] hover:bg-[#52E3A4] text-xs font-bold transition-all shadow-sm"
              >
                Diagnose with Mechanism {activeMech.num} →
              </Link>
              <Link
                to="/engines"
                className="text-xs font-semibold text-[#52E3A4] hover:underline inline-flex items-center gap-1.5"
              >
                <span>Simulator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
