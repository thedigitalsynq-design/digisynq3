import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Users, Film, Radio, Shield, 
  Sparkles, CheckCircle2, ChevronRight, Eye, Layers, Compass
} from 'lucide-react';
import { EcosystemMap } from '../components/EcosystemMap';
import { TopographicBackground } from '../components/TopographicBackground';
import { participants, CENTRAL_NODE, type Participant } from '../data/participants';
import { playClickSound, playHoverSound, playNodeBlip } from '../utils/audio';

export function EcosystemPage() {
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [activeParticipant, setActiveParticipant] = useState<Participant>(participants[0]);

  const roles = [
    { id: 'all', label: 'ALL STAKEHOLDERS' },
    { id: 'creative', label: 'CREATORS & DIRECTORS' },
    { id: 'technical', label: 'CREW & CRAFT GUILDS' },
    { id: 'infrastructure', label: 'STUDIOS & STAGES' },
    { id: 'capital', label: 'PRODUCERS & CAPITAL' },
    { id: 'distribution', label: 'EXHIBITORS & SCREENS' },
  ];

  const filteredParticipants = selectedRole === 'all' 
    ? participants 
    : participants.filter(p => {
        const text = `${p.name} ${p.role}`.toLowerCase();
        if (selectedRole === 'creative') return text.includes('director') || text.includes('writer') || text.includes('creator');
        if (selectedRole === 'technical') return text.includes('technician') || text.includes('crew') || text.includes('post');
        if (selectedRole === 'infrastructure') return text.includes('studio') || text.includes('equipment') || text.includes('vfx') || text.includes('stage');
        if (selectedRole === 'capital') return text.includes('producer') || text.includes('investor') || text.includes('finan');
        if (selectedRole === 'distribution') return text.includes('distributor') || text.includes('theatre') || text.includes('audience') || text.includes('screen');
        return true;
      });

  return (
    <main className="bg-[#050608] text-[#ECEEF5] pt-24 pb-20 relative overflow-hidden selection:bg-[#B6F02A]/20 selection:text-[#B6F02A]">
      
      {/* Topographic Isoline Contour Layer */}
      <TopographicBackground intensity="medium" />

      {/* ── 01. Ecosystem Dossier Header (Elevate Labs Poster Style) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative z-10">
        
        {/* Eyebrow: Horizontal Lime Accent Bar */}
        <div className="flex items-center gap-3.5 mb-5">
          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
            ACT 01
          </span>
          <span className="text-xs sm:text-sm font-bold font-mono tracking-widest uppercase text-white/90">
            Node Constellation // 360° Operational Mesh
          </span>
        </div>

        {/* High-Impact Headline & Editorial Block (No Overlap) */}
        <div className="max-w-5xl mb-12">
          <h1 className="text-[clamp(2.75rem,6.5vw,5.25rem)] font-black tracking-tight leading-[0.92] uppercase select-none text-white [letter-spacing:-0.03em] mb-6">
            THE COMPLETE<br />
            <span className="text-[#B6F02A] drop-shadow-[0_0_35px_rgba(182,240,42,0.25)]">CINEMA</span><br />
            CONSTELLATION.
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pt-2">
            {/* Vertical Lime Bar Quote */}
            <div className="border-l-3 sm:border-l-4 border-[#B6F02A] pl-5 sm:pl-6 py-1 max-w-2xl">
              <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed">
                DigiSynq does not replace any industry participant. We provide the neutral, asset-light coordination layer that allows creators, crews, facilities, and screens to interface with zero friction.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a href="#interactive-mesh" className="btn-primary text-xs px-5 py-3 shadow-[0_0_20px_rgba(182,240,42,0.35)]">
                Explore The Constellation <ArrowRight size={14} />
              </a>
              <Link to="/start" className="btn-secondary text-xs px-4 py-3">
                Register Node
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. The Interactive 360° Mesh ─────────────────── */}
      <section id="interactive-mesh" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24 relative z-10">
        <div className="p-6 sm:p-10 rounded-3xl bg-[#090B10] border border-[#23B272]/20 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-white/[0.08] gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
                  ACT 02
                </span>
                <span className="text-xs font-mono text-[#52E3A4] uppercase tracking-wider font-bold">
                  Topological Graph // 12 Nodes
                </span>
              </div>
              <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight uppercase">
                Interactive Participant Network
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center flex-wrap gap-1.5 p-1 rounded-xl bg-black/60 border border-white/10 text-[10px] font-mono">
              {roles.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => { setSelectedRole(r.id); playClickSound(); }}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    selectedRole === r.id
                      ? 'bg-[#B6F02A] text-[#050608] font-bold shadow-[0_0_12px_rgba(182,240,42,0.35)]'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {/* Full Interactive Canvas */}
          <div className="w-full">
            <EcosystemMap size="full" />
          </div>

          {/* Bottom Live Inspector */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#0D281E]/60 border border-[#23B272]/30">
              <span className="text-[10px] font-mono text-[#B6F02A] uppercase font-bold block mb-1">
                COORDINATION PRINCIPLE
              </span>
              <div className="text-xs text-zinc-300 leading-relaxed">
                DigiSynq holds zero balance-sheet risk. When two nodes connect through our protocol, value is generated from eliminated friction rather than inflated broker markups.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0D281E]/60 border border-[#23B272]/30">
              <span className="text-[10px] font-mono text-[#52E3A4] uppercase font-bold block mb-1">
                FRACTIONAL LIQUIDITY
              </span>
              <div className="text-xs text-zinc-300 leading-relaxed">
                Independent films access studio-tier technicians and stages on demand, while major facilities monetize floor time that would otherwise sit dark.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0D281E]/60 border border-[#23B272]/30 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">
                  JOIN THE LIVING NETWORK
                </span>
                <div className="text-xs text-zinc-300">
                  Connect your craft guild, soundstage, capital tranche, or exhibitor circuit.
                </div>
              </div>
              <Link to="/start" className="btn-primary text-xs py-2.5 mt-3 justify-center shadow-[0_0_15px_rgba(182,240,42,0.3)]">
                Plug In Your Node <ArrowRight size={12} />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
