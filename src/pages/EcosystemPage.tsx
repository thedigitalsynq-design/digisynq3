import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Network,
  GitBranch,
  ShieldCheck,
  Zap,
  Cpu,
  Sliders,
  Users,
} from 'lucide-react';
import { TopographicBackground } from '../components/TopographicBackground';

interface EcosystemNode {
  id: string;
  name: string;
  category: 'CREATIVE_HUMAN' | 'PHYSICAL_TECH' | 'POST_FINISHING' | 'COMMERCIAL_AUDIENCE';
  shortDesc: string;
  whatItNeeds: string[];
  whatItProvides: string[];
  connectedNodeIds: string[];
  cascadeRisk: string;
  digisynqIntervention: string;
  activeMechanism: string;
  angle: number; // for SVG circular layout
}

const ECOSYSTEM_ENTITIES: EcosystemNode[] = [
  {
    id: 'talent',
    name: 'Talent',
    category: 'CREATIVE_HUMAN',
    shortDesc: 'Lead cast, supporting performers, voice talent, and stunt coordinators.',
    whatItNeeds: ['Production (shooting schedule)', 'Crew (safety protocols)', 'Stages (soundstage prep)'],
    whatItProvides: ['On-screen performance', 'Brand awareness', 'Global audience draw'],
    connectedNodeIds: ['production', 'crew', 'stages', 'virtual-production', 'audience'],
    cascadeRisk: 'Schedule slip causes actor to hit hard-out date; multi-week shutdown triggers recast crisis.',
    digisynqIntervention: 'Dynamic scene clustering and 2nd unit coverage to protect immovable talent windows.',
    activeMechanism: 'M08: Simulate & M11: Route',
    angle: 0,
  },
  {
    id: 'crew',
    name: 'Crew',
    category: 'CREATIVE_HUMAN',
    shortDesc: 'Department heads, cinematographers, gaffers, grips, sound recordists, and art teams.',
    whatItNeeds: ['Production (call sheets)', 'Equipment (camera/lighting gear)', 'Stages (floor access)'],
    whatItProvides: ['Cinematography', 'Lighting', 'Set construction', 'Live audio recording'],
    connectedNodeIds: ['production', 'talent', 'equipment', 'stages', 'virtual-production', 'post'],
    cascadeRisk: 'Excessive 16h turns breach union rest covenants; unannounced schedule shifts cause walkouts.',
    digisynqIntervention: 'Automated turnaround rest covenants and verified guild availability indexing.',
    activeMechanism: 'M01: Observe & M10: Match',
    angle: 24,
  },
  {
    id: 'production',
    name: 'Production',
    category: 'CREATIVE_HUMAN',
    shortDesc: 'Producers, line producers, production managers, and 1st assistant directors.',
    whatItNeeds: ['Finance (milestone cashflow)', 'Talent (committed dates)', 'Stages (locked bookings)'],
    whatItProvides: ['Packaged IP', 'Daily call sheets', 'Budget allocation', 'Legal contracts'],
    connectedNodeIds: ['finance', 'talent', 'crew', 'stages', 'equipment', 'post', 'distributors'],
    cascadeRisk: 'Managing 20 disconnected phone trees; sudden budget depletion from unhedged department overages.',
    digisynqIntervention: 'Living dependency graph and single-source milestone governance protocol.',
    activeMechanism: 'M04: Map & M06: Prioritize',
    angle: 48,
  },
  {
    id: 'stages',
    name: 'Stages',
    category: 'PHYSICAL_TECH',
    shortDesc: 'Certified soundstages, backlots, acoustic facilities, and dark-floor slots.',
    whatItNeeds: ['Production (floor lease)', 'Crew (rigging and strike schedule)'],
    whatItProvides: ['Controlled acoustic shooting space', 'Lighting grids', 'Stage power plants'],
    connectedNodeIds: ['production', 'crew', 'equipment', 'virtual-production', 'talent'],
    cascadeRisk: 'Previous tenant overruns lease; incoming production locked out with standby gear fines.',
    digisynqIntervention: 'Routing overflow scenes to pre-vetted dark days at partner facilities at rate parity.',
    activeMechanism: 'M10: Match & M15: Intervene',
    angle: 72,
  },
  {
    id: 'equipment',
    name: 'Equipment',
    category: 'PHYSICAL_TECH',
    shortDesc: 'Camera rental houses, specialized anamorphic glass, lighting packages, and grip trucks.',
    whatItNeeds: ['Production (rental agreements)', 'Crew (technical checkout)'],
    whatItProvides: ['Digital cinema cameras', 'Anamorphic optics', 'Mobile power & grip rigs'],
    connectedNodeIds: ['crew', 'stages', 'production', 'post'],
    cascadeRisk: 'Camera package locked on location during shoot extension; downstream shoot loses prep window.',
    digisynqIntervention: 'Fractional equipment matching and multi-house standby equipment parity.',
    activeMechanism: 'M07: Classify & M12: Structure',
    angle: 96,
  },
  {
    id: 'virtual-production',
    name: 'Virtual Production',
    category: 'PHYSICAL_TECH',
    shortDesc: 'In-camera VFX LED volumes, camera tracking systems, and real-time Unreal render nodes.',
    whatItNeeds: ['VFX (pre-calibrated 3D digital environments)', 'Crew (volume lighting sync)'],
    whatItProvides: ['In-camera final pixels', 'Realistic interactive reflections', 'Zero location travel'],
    connectedNodeIds: ['stages', 'crew', 'vfx', 'talent', 'post'],
    cascadeRisk: 'Latency in LED wall camera tracking causing parallax stutter; unvetted 3D assets crashing render nodes.',
    digisynqIntervention: 'Pre-flight virtual asset sandbox certification in Synq Labs before shooting.',
    activeMechanism: 'M14: Verify & M17: Stabilize',
    angle: 120,
  },
  {
    id: 'post',
    name: 'Post-Production',
    category: 'POST_FINISHING',
    shortDesc: 'Editorial labs, offline cutting rooms, conform finishing suites, and DI color grading.',
    whatItNeeds: ['Production (camera-to-cloud dailies)', 'VFX (approved CGI plates)'],
    whatItProvides: ['Conformed picture cut', 'HDR master color grading', 'IMF master packages'],
    connectedNodeIds: ['production', 'crew', 'vfx', 'audio', 'streaming', 'distributors'],
    cascadeRisk: 'Late dailies turnover compresses conform cut from 4 weeks to 6 panic days.',
    digisynqIntervention: 'Automated ACES/OCIO camera-to-cloud color pipeline validation on day 1.',
    activeMechanism: 'M03: Decompose & M14: Verify',
    angle: 144,
  },
  {
    id: 'vfx',
    name: 'VFX',
    category: 'POST_FINISHING',
    shortDesc: 'Visual effects studios, 3D creature animation, background replacement, and burst CGI houses.',
    whatItNeeds: ['Crew (clean shoot plates and HDRI metadata)', 'Post (locked conform cuts)'],
    whatItProvides: ['Photoreal CGI shots', 'Set extensions', 'Complex digital composites'],
    connectedNodeIds: ['virtual-production', 'post', 'production', 'crew'],
    cascadeRisk: 'Unlocked edits force 40 completed CGI shots to be re-rendered at $120k rework expense.',
    digisynqIntervention: 'Strict change-control covenants and secondary burst VFX studio routing.',
    activeMechanism: 'M10: Match & M18: Stabilize',
    angle: 168,
  },
  {
    id: 'audio',
    name: 'Audio',
    category: 'POST_FINISHING',
    shortDesc: 'Film composers, Foley artists, supervising sound editors, and Dolby Atmos mixing stages.',
    whatItNeeds: ['Post (locked picture turnover)', 'Production (cleared music publishing)'],
    whatItProvides: ['Dolby Atmos theatrical/streaming bed mix', 'Original orchestral score', 'Dialogue stems'],
    connectedNodeIds: ['post', 'production', 'streaming', 'distributors'],
    cascadeRisk: 'Subtle phase cancellation in Atmos bed causing streaming platform QC rejection 48h before release.',
    digisynqIntervention: 'Platform-certified automated Atmos spec validation and synchronized music clearances.',
    activeMechanism: 'M14: Verify & M20: Codify',
    angle: 192,
  },
  {
    id: 'finance',
    name: 'Finance',
    category: 'COMMERCIAL_AUDIENCE',
    shortDesc: 'Financiers, gap debt lenders, completion bond companies, and tax credit syndicators.',
    whatItNeeds: ['Production (verified milestone delivery reports)', 'Distributors (pre-sales contracts)'],
    whatItProvides: ['Production capital cashflow', 'Finishing debt tranches', 'Completion guarantees'],
    connectedNodeIds: ['production', 'distributors', 'streaming', 'brands'],
    cascadeRisk: 'Opaque burn-rate reporting hides budget overruns until project hits cash insolvency.',
    digisynqIntervention: 'Milestone-anchored telemetry releasing capital tranches strictly upon verified scene deliveries.',
    activeMechanism: 'M13: Structure & M16: Measure',
    angle: 216,
  },
  {
    id: 'brands',
    name: 'Brands',
    category: 'COMMERCIAL_AUDIENCE',
    shortDesc: 'Commercial sponsors, product integration partners, and co-branded promotional advertisers.',
    whatItNeeds: ['Production (script approval and placement guarantees)', 'Marketing (campaign rollout timing)'],
    whatItProvides: ['Non-dilutive production capital', 'Co-promotional marketing spend'],
    connectedNodeIds: ['production', 'finance', 'audience', 'distributors'],
    cascadeRisk: 'Reshot scene removes featured product; brand pulls $500k co-marketing commitment.',
    digisynqIntervention: 'Placement continuity covenants synchronized into daily call sheets and script supervisor notes.',
    activeMechanism: 'M12: Structure & M21: Shield',
    angle: 240,
  },
  {
    id: 'distributors',
    name: 'Distributors',
    category: 'COMMERCIAL_AUDIENCE',
    shortDesc: 'Theatrical distribution banners, international sales agents, and territory syndicators.',
    whatItNeeds: ['Post (DCI compliant DCP masters)', 'Production (chain-of-title documentation)'],
    whatItProvides: ['Worldwide theatrical booking', 'Promotional P&A budgets', 'Territory licensing'],
    connectedNodeIds: ['production', 'post', 'exhibitors', 'finance', 'streaming', 'audience'],
    cascadeRisk: 'Missed master delivery deadline forfeits locked theatrical window against competitor tentpole.',
    digisynqIntervention: 'Delivery readiness telemetry giving 4-week advance warning on delivery window security.',
    activeMechanism: 'M09: Model & M22: Forecast',
    angle: 264,
  },
  {
    id: 'exhibitors',
    name: 'Exhibitors',
    category: 'COMMERCIAL_AUDIENCE',
    shortDesc: 'Theatrical cinema chains, independent art houses, IMAX/premium venues, and film festivals.',
    whatItNeeds: ['Distributors (KDM decryption keys and DCP drives)', 'Audience (ticket attendance)'],
    whatItProvides: ['Cinema screen capacity', 'High-end projection and sound exhibition', 'Box office tickets'],
    connectedNodeIds: ['distributors', 'audience', 'brands'],
    cascadeRisk: 'KDM key timing mismatch delays Friday evening premiere; empty screens and customer refund demands.',
    digisynqIntervention: 'Automated KDM verification and localized audience density screening clustering.',
    activeMechanism: 'M14: Verify & M16: Measure',
    angle: 288,
  },
  {
    id: 'streaming',
    name: 'Streaming',
    category: 'COMMERCIAL_AUDIENCE',
    shortDesc: 'Global OTT platforms, SVOD buyers, AVOD networks, and transactional digital services.',
    whatItNeeds: ['Post (IMF master packages and 35 language subtitle tracks)', 'Production (clean legal chain)'],
    whatItProvides: ['Global instantaneous distribution', 'Direct subscriber reach', 'Licensing fees'],
    connectedNodeIds: ['post', 'audio', 'production', 'finance', 'audience'],
    cascadeRisk: 'Platform QC rejects package 72h before launch due to subtitle timecode drift, wrecking marketing spend.',
    digisynqIntervention: 'Pre-flight QC verification against exact platform ingestion profiles.',
    activeMechanism: 'M14: Verify & M23: Prevent',
    angle: 312,
  },
  {
    id: 'audience',
    name: 'Audience',
    category: 'COMMERCIAL_AUDIENCE',
    shortDesc: 'Viewers, genre fandoms, cinephiles, and cultural amplification communities.',
    whatItNeeds: ['Exhibitors / Streaming (curated high-fidelity content discovery)', 'Brands (authentic engagement)'],
    whatItProvides: ['Box office ticket revenue', 'Streaming retention', 'Organic social word-of-mouth'],
    connectedNodeIds: ['talent', 'exhibitors', 'streaming', 'brands', 'distributors'],
    cascadeRisk: 'Great original independent film buried under generic mass-market algorithm fatigue.',
    digisynqIntervention: 'Density-driven community screenings and authentic creator-audience engagement channels.',
    activeMechanism: 'M09: Model & M19: Learn',
    angle: 336,
  },
];

export function EcosystemPage() {
  const [selectedEntityId, setSelectedEntityId] = useState<string>('talent');
  const [filterCategory, setFilterCategory] = useState<string>('ALL');

  const activeEntity = ECOSYSTEM_ENTITIES.find((e) => e.id === selectedEntityId) || ECOSYSTEM_ENTITIES[0];

  const filteredEntities = filterCategory === 'ALL'
    ? ECOSYSTEM_ENTITIES
    : ECOSYSTEM_ENTITIES.filter((e) => e.category === filterCategory);

  // SVG dimensions for circular network graph
  const SVG_SIZE = 580;
  const CENTER = SVG_SIZE / 2;
  const RADIUS = 210;

  const getCoordinates = (angleDeg: number) => {
    const rad = (angleDeg - 90) * (Math.PI / 180);
    return {
      x: CENTER + RADIUS * Math.cos(rad),
      y: CENTER + RADIUS * Math.sin(rad),
    };
  };

  return (
    <main className="bg-[#03040A] text-[#ECEEF5] selection:bg-[#23B272] selection:text-[#03040A] min-h-screen pt-36 pb-24 px-6 sm:px-8 max-w-6xl mx-auto relative overflow-hidden">
      <TopographicBackground className="opacity-20 pointer-events-none -z-10 fixed inset-0" />

      {/* ── Header ── */}
      <div className="max-w-4xl mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300 font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-[#52E3A4]" />
          <span>NETWORK TOPOLOGY</span>
          <span className="text-zinc-600">//</span>
          <span className="text-[#52E3A4] font-semibold">15 CONNECTED ECOSYSTEM NODES</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.03] mb-4">
          The Living Entertainment Network.
          <span className="text-zinc-400 font-light block text-2xl sm:text-4xl mt-2">
            Every Node. Every Relationship. In Resonance.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-zinc-300 leading-relaxed font-light max-w-3xl mb-8">
          Entertainment is not a linear assembly line. It is a dense, multi-party network where a failure at any single node echoes across talent, stages, capital, and global release windows.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 p-2 rounded-2xl bg-[#090B14] border border-white/[0.08]">
          {[
            { id: 'ALL', label: 'All 15 Nodes' },
            { id: 'CREATIVE_HUMAN', label: 'Creative & Talent' },
            { id: 'PHYSICAL_TECH', label: 'Stages & Technology' },
            { id: 'POST_FINISHING', label: 'Post & VFX Finishing' },
            { id: 'COMMERCIAL_AUDIENCE', label: 'Capital & Audience' },
          ].map((flt) => (
            <button
              key={flt.id}
              onClick={() => setFilterCategory(flt.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all cursor-pointer ${
                filterCategory === flt.id
                  ? 'bg-[#23B272] text-[#03040A] shadow-md'
                  : 'text-zinc-400 hover:text-white bg-transparent'
              }`}
            >
              {flt.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Main Connected Graph + Inspector Split ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Interactive SVG Network Map (7 cols) */}
        <div className="lg:col-span-7 p-6 rounded-3xl border border-white/[0.1] bg-[#070912] shadow-2xl relative flex flex-col items-center">
          <div className="w-full flex items-center justify-between pb-4 mb-2 border-b border-white/[0.06] text-xs font-mono">
            <span className="text-zinc-400">INTERACTIVE TOPOLOGY // CLICK NODE TO INSPECT</span>
            <span className="text-[#52E3A4]">{activeEntity.name.toUpperCase()} ACTIVE</span>
          </div>

          <svg
            viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
            className="w-full max-w-[500px] h-auto select-none"
            role="img"
            aria-label="Connected Entertainment Ecosystem Network Graph"
          >
            {/* Background Glow */}
            <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 6" />

            {/* Central Digisynq Synchronization Hub */}
            <circle cx={CENTER} cy={CENTER} r={34} fill="#06130E" stroke="#23B272" strokeWidth="2" />
            <text
              x={CENTER}
              y={CENTER + 4}
              textAnchor="middle"
              fill="#52E3A4"
              fontSize="10"
              fontFamily="JetBrains Mono"
              fontWeight="bold"
            >
              SYNQ HUB
            </text>

            {/* Render Connection Lines between Active Node and Related Nodes */}
            {ECOSYSTEM_ENTITIES.map((ent) => {
              const pos = getCoordinates(ent.angle);
              const isSelected = ent.id === activeEntity.id;
              const isRelated = activeEntity.connectedNodeIds.includes(ent.id);

              return (
                <g key={`lines-${ent.id}`}>
                  {/* Line to central hub */}
                  <line
                    x1={CENTER}
                    y1={CENTER}
                    x2={pos.x}
                    y2={pos.y}
                    stroke={isSelected ? '#52E3A4' : isRelated ? 'rgba(35,178,114,0.4)' : 'rgba(255,255,255,0.04)'}
                    strokeWidth={isSelected ? 2 : isRelated ? 1.5 : 0.75}
                    strokeDasharray={isSelected ? 'none' : '2 4'}
                  />

                  {/* Direct Relationship Lines if related to active */}
                  {isRelated && (
                    <line
                      x1={getCoordinates(activeEntity.angle).x}
                      y1={getCoordinates(activeEntity.angle).y}
                      x2={pos.x}
                      y2={pos.y}
                      stroke="#52E3A4"
                      strokeWidth="1.5"
                      strokeOpacity="0.75"
                    />
                  )}
                </g>
              );
            })}

            {/* Render Entity Nodes */}
            {ECOSYSTEM_ENTITIES.map((ent) => {
              const pos = getCoordinates(ent.angle);
              const isSelected = ent.id === activeEntity.id;
              const isRelated = activeEntity.connectedNodeIds.includes(ent.id);

              return (
                <g
                  key={ent.id}
                  onClick={() => setSelectedEntityId(ent.id)}
                  className="cursor-pointer transition-transform duration-200"
                  style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
                >
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isSelected ? 22 : 16}
                    fill={isSelected ? '#23B272' : isRelated ? '#16543D' : '#090B14'}
                    stroke={isSelected ? '#52E3A4' : isRelated ? '#52E3A4' : 'rgba(255,255,255,0.2)'}
                    strokeWidth={isSelected ? 3 : 1.5}
                    className="transition-all"
                  />
                  <text
                    x={pos.x}
                    y={pos.y + 4}
                    textAnchor="middle"
                    fill={isSelected ? '#03040A' : '#ffffff'}
                    fontSize={isSelected ? '10' : '8'}
                    fontFamily="JetBrains Mono"
                    fontWeight="bold"
                    pointerEvents="none"
                  >
                    {ent.name.substring(0, 3).toUpperCase()}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Quick Node Selector Bar */}
          <div className="flex flex-wrap justify-center gap-1.5 mt-4 pt-4 border-t border-white/[0.06] w-full">
            {filteredEntities.map((ent) => (
              <button
                key={ent.id}
                onClick={() => setSelectedEntityId(ent.id)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all ${
                  ent.id === activeEntity.id
                    ? 'bg-[#23B272] text-[#03040A] font-bold'
                    : 'bg-black/40 text-zinc-400 hover:text-white border border-white/[0.06]'
                }`}
              >
                {ent.name}
              </button>
            ))}
          </div>
        </div>

        {/* Node Inspector Dossier (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <div>
              <span className="font-mono text-xs text-[#52E3A4]">{activeEntity.category}</span>
              <h2 className="text-2xl font-bold text-white mt-1">{activeEntity.name}</h2>
            </div>
            <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#23B272]/20 text-[#52E3A4] border border-[#23B272]/40 font-bold">
              NODE ACTIVE
            </span>
          </div>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {activeEntity.shortDesc}
          </p>

          {/* Ingests vs Emits */}
          <div className="space-y-3 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06]">
              <strong className="text-zinc-400 block mb-1">INGESTS FROM NETWORK:</strong>
              <ul className="space-y-1 text-zinc-300 text-[11px]">
                {activeEntity.whatItNeeds.map((item, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="text-[#52E3A4]">←</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06]">
              <strong className="text-zinc-400 block mb-1">EMITS TO NETWORK:</strong>
              <ul className="space-y-1 text-zinc-300 text-[11px]">
                {activeEntity.whatItProvides.map((item, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="text-[#23B272]">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cascade Vulnerability & DIGISYNQ Intervention */}
          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200">
              <strong className="text-red-400 block font-mono text-[11px] mb-1">CASCADE RISK:</strong>
              {activeEntity.cascadeRisk}
            </div>

            <div className="p-3.5 rounded-xl bg-[#16543D]/25 border border-[#23B272]/30 text-emerald-100">
              <strong className="text-[#52E3A4] block font-mono text-[11px] mb-1">
                DIGISYNQ INTERVENTION ({activeEntity.activeMechanism}):
              </strong>
              {activeEntity.digisynqIntervention}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row gap-3">
            <Link
              to="/diagnose"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#23B272] text-[#03040A] hover:bg-[#52E3A4] font-bold text-xs tracking-wide transition-all shadow-md"
            >
              <span>Diagnose {activeEntity.name} Issue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to={`/start?node=${activeEntity.id}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.03] text-zinc-300 text-xs font-mono transition-all"
            >
              <span>Start SYNQ Case</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
