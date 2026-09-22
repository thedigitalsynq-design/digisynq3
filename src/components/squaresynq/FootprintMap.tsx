import { useState, useEffect } from 'react';
import { ECOSYSTEM_NODES, SYNQ_PRINCIPLE_MODES, DIGITAL_EXTENSION_TEAMS } from '../../data/ecosystemData';
import { EcosystemNode, NodeId, SynqMode } from '../types';
import { playNodeBlip, playPing, playSynqChime } from '../../utils/audio';
import { NodeDetailModal } from './NodeDetailModal';
import { 
  Network, 
  Layers, 
  ArrowUpRight, 
  ShieldAlert, 
  Sparkles,
  Maximize2,
  CheckCircle2,
  Terminal,
  Grid,
  CircleDot
} from 'lucide-react';

interface FootprintMapProps {
  onOpenProjectModal: (preselectedNode?: string) => void;
  onNavigateToScan: () => void;
  onNavigateToOutcomes: () => void;
}

export function FootprintMap({
  onOpenProjectModal,
  onNavigateToScan,
  onNavigateToOutcomes
}: FootprintMapProps) {
  const [selectedNode, setSelectedNode] = useState<EcosystemNode | null>(null);
  const [hoveredNode, setHoveredNode] = useState<EcosystemNode | null>(null);
  const [syncMode, setSyncMode] = useState<SynqMode>('ONE_TEAM');
  const [selectedNodeIds, setSelectedNodeIds] = useState<NodeId[]>(['brand', 'web', 'search', 'content']);
  const [viewFormat, setViewFormat] = useState<'constellation' | 'grid'>('constellation');
  const [activePulseTime, setActivePulseTime] = useState(0);

  // Visual packet animation cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePulseTime(prev => (prev + 1) % 100);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  // When switching modes, adjust selected nodes
  const handleModeChange = (mode: SynqMode) => {
    setSyncMode(mode);
    if (mode === 'ONE_SPECIALIST') {
      playPing(500, 'sine', 0.05);
      setSelectedNodeIds(['web']);
    } else if (mode === 'ONE_TEAM') {
      playPing(600, 'sine', 0.06);
      setSelectedNodeIds(['brand', 'web', 'search', 'content', 'marketing']);
    } else {
      playSynqChime();
      setSelectedNodeIds(ECOSYSTEM_NODES.map(n => n.id));
    }
  };

  const handleNodeClick = (node: EcosystemNode, idx: number) => {
    playNodeBlip(idx);
    if (syncMode === 'ONE_SPECIALIST') {
      setSelectedNodeIds([node.id]);
      setSelectedNode(node);
    } else if (syncMode === 'ONE_TEAM') {
      if (selectedNodeIds.includes(node.id)) {
        if (selectedNodeIds.length > 1) {
          setSelectedNodeIds(prev => prev.filter(id => id !== node.id));
        }
      } else {
        setSelectedNodeIds(prev => [...prev, node.id]);
      }
    } else {
      // Entire system: open modal
      setSelectedNode(node);
    }
  };

  // 12 nodes coordinates around circular perimeter (640x640 viewBox)
  const centerCoord = { x: 320, y: 320 };
  const radius = 236;

  const nodeCoordinates = ECOSYSTEM_NODES.map((node, i) => {
    const totalNodes = ECOSYSTEM_NODES.length;
    // 360 / 12 = 30 degrees per step, starting at -90deg (top)
    const angleInRad = ((i * (360 / totalNodes) - 90) * Math.PI) / 180;

    return {
      node,
      x: centerCoord.x + radius * Math.cos(angleInRad),
      y: centerCoord.y + radius * Math.sin(angleInRad),
      index: i
    };
  });

  const activeSpecialistExtension = syncMode === 'ONE_SPECIALIST' 
    ? DIGITAL_EXTENSION_TEAMS.find(t => t.id === selectedNodeIds[0] || (selectedNodeIds[0] === 'search' && t.id === 'seo')) 
    : null;

  return (
    <div className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col justify-between overflow-hidden bg-grid-tech">
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />

      {/* Top Banner: Manifesto Header & Operational Mode Controls */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 pt-6 pb-2">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-4">
          
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-white/50 tracking-widest uppercase">
              <span className="w-2 h-2 rounded-xs bg-blue-500" />
              <span>SYNQ-SQUARE DIGITAL OPERATING SYSTEM</span>
              <span>/</span>
              <span className="text-blue-400 font-semibold">12 POSSIBILITIES</span>
            </div>

            <h1 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white">
              ONE BRAND. MANY POSSIBILITIES. ONE SYNCHRONIZED SYSTEM.
            </h1>
            
            <p className="text-xs sm:text-sm text-white/70 max-w-3xl font-light leading-relaxed">
              We can step in wherever the brand needs us. <strong className="text-white font-medium">We can build one piece. We can connect several. Or we can build the entire digital footprint.</strong>
            </p>
          </div>

          {/* Principle Modes: ONE SPECIALIST / ONE TEAM / ENTIRE DIGITAL SYSTEM */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            <div className="bg-[#0B0E14] border border-white/15 p-1 rounded-xs flex items-center gap-1 font-mono text-xs">
              <button
                id="principle-mode-specialist"
                onClick={() => handleModeChange('ONE_SPECIALIST')}
                className={`px-3 py-1.5 rounded-xs transition-all flex items-center gap-1.5 ${
                  syncMode === 'ONE_SPECIALIST'
                    ? 'bg-blue-600 text-white font-semibold shadow-sm shadow-blue-500/30'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                <span>ONE SPECIALIST</span>
              </button>

              <button
                id="principle-mode-team"
                onClick={() => handleModeChange('ONE_TEAM')}
                className={`px-3 py-1.5 rounded-xs transition-all flex items-center gap-1.5 ${
                  syncMode === 'ONE_TEAM'
                    ? 'bg-blue-600 text-white font-semibold shadow-sm shadow-blue-500/30'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                <span>ONE TEAM</span>
                <span className="text-[10px] px-1 py-0.2 bg-white/20 rounded-xs">
                  {selectedNodeIds.length} NODES
                </span>
              </button>

              <button
                id="principle-mode-entire"
                onClick={() => handleModeChange('ENTIRE_SYSTEM')}
                className={`px-3 py-1.5 rounded-xs transition-all flex items-center gap-1.5 ${
                  syncMode === 'ENTIRE_SYSTEM'
                    ? 'bg-emerald-600 text-white font-semibold shadow-sm shadow-emerald-500/30'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>ENTIRE SYSTEM</span>
              </button>
            </div>

            {/* View Format Switcher: Constellation vs Grid */}
            <div className="hidden sm:flex items-center gap-1 bg-white/5 p-1 rounded-xs border border-white/10 text-white/60">
              <button
                onClick={() => setViewFormat('constellation')}
                title="Circular Constellation View"
                className={`p-1.5 rounded-xs transition-colors ${viewFormat === 'constellation' ? 'bg-white/15 text-white' : 'hover:text-white'}`}
              >
                <CircleDot className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewFormat('grid')}
                title="Matrix Grid View"
                className={`p-1.5 rounded-xs transition-colors ${viewFormat === 'grid' ? 'bg-white/15 text-white' : 'hover:text-white'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Main Operating Area */}
      <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-4 py-4 flex flex-col lg:flex-row items-center justify-center gap-8">
        
        {/* Left Telemetry & Mode Guidance Column */}
        <div className="w-full lg:w-72 shrink-0 order-2 lg:order-1 flex flex-col gap-3">
          
          <div className="p-4 rounded-sm bg-[#0B0E14] border border-white/10 space-y-3 shadow-lg">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="font-mono text-[10px] text-white/40 tracking-wider flex items-center gap-1.5">
                <Terminal className="w-3 h-3 text-blue-400" />
                OPERATIONAL GUIDANCE
              </span>
              <span className="font-mono text-[9px] text-blue-400 bg-blue-950/40 border border-blue-800/50 px-1.5 py-0.5 rounded-xs">
                {syncMode.replace('_', ' ')}
              </span>
            </div>

            {syncMode === 'ONE_SPECIALIST' && (
              <div className="space-y-2 text-xs font-mono text-white/80">
                <p className="text-white font-sans text-xs">
                  <strong>Pick any 1 node:</strong> We step in as your specialist team (e.g. your web team, SEO team, social team).
                </p>
                <div className="p-2.5 bg-blue-950/30 border border-blue-500/30 rounded-xs text-[11px] text-blue-300">
                  Current: <strong className="text-white">{selectedNodeIds[0].toUpperCase()}</strong> team.
                </div>
                {activeSpecialistExtension && (
                  <p className="text-[11px] text-white/60">
                    "{activeSpecialistExtension.teamTitle}"
                  </p>
                )}
              </div>
            )}

            {syncMode === 'ONE_TEAM' && (
              <div className="space-y-2 text-xs font-mono text-white/80">
                <p className="text-white font-sans text-xs">
                  <strong>Click nodes to build your team pod:</strong> No department silos, no finger pointing between agencies.
                </p>
                <div className="p-2.5 bg-blue-950/30 border border-blue-500/30 rounded-xs text-[11px] text-blue-200">
                  Active Bundle: <strong>{selectedNodeIds.length} of 12</strong> capabilities connected.
                </div>
                <div className="text-[10px] text-emerald-400">
                  Synergy Multiplier: {(1 + selectedNodeIds.length * 0.22).toFixed(1)}x cross-flow
                </div>
              </div>
            )}

            {syncMode === 'ENTIRE_SYSTEM' && (
              <div className="space-y-2 text-xs font-mono text-white/80">
                <p className="text-white font-sans text-xs">
                  <strong>The Entire Digital Footprint:</strong> All 12 possibilities orchestrated into a single synchronized commercial engine.
                </p>
                <div className="p-2.5 bg-emerald-950/30 border border-emerald-500/30 rounded-xs text-[11px] text-emerald-200">
                  Status: 100% Coherent Footprint. Zero departmental friction.
                </div>
              </div>
            )}

            {/* Hovered Node telemetry preview */}
            {hoveredNode && (
              <div className="pt-2 border-t border-white/10 space-y-2 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-blue-400">{hoveredNode.category}</span>
                  <span className="font-mono text-[9px] text-white/40">{hoveredNode.subsystemFlow.length} STEPS</span>
                </div>
                <div className="font-display font-bold text-sm text-white">{hoveredNode.label}</div>
                <p className="text-[11px] text-white/60 leading-relaxed line-clamp-2">{hoveredNode.shortDescription}</p>
              </div>
            )}
          </div>

          {/* Quick Scanner Callout */}
          <div className="p-4 rounded-sm bg-gradient-to-br from-blue-950/40 to-transparent border border-blue-500/20 space-y-2">
            <span className="font-mono text-[10px] text-blue-300 tracking-wider block">
              NOT SURE WHAT MAKES SENSE?
            </span>
            <p className="text-xs text-white/80 font-sans">
              Run our guided footprint scanner to find the exact right combination for your brand.
            </p>
            <button
              id="map-cta-scan-assessment"
              onClick={onNavigateToScan}
              className="w-full mt-2 py-1.5 bg-white text-black font-mono text-xs font-bold rounded-xs hover:bg-neutral-200 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>RUN GUIDED SCAN</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Center: Constellation Graph or Grid Matrix */}
        <div className="relative w-full max-w-[660px] aspect-square order-1 lg:order-2 flex items-center justify-center">
          
          {viewFormat === 'constellation' ? (
            <svg 
              viewBox="0 0 640 640" 
              className="w-full h-full select-none"
            >
              <defs>
                <radialGradient id="centerHubGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#08090C" stopOpacity="0.85" />
                </radialGradient>
              </defs>

              {/* Orbital Rings */}
              <circle 
                cx={centerCoord.x} 
                cy={centerCoord.y} 
                r={radius} 
                fill="none" 
                stroke="rgba(255, 255, 255, 0.08)" 
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <circle 
                cx={centerCoord.x} 
                cy={centerCoord.y} 
                r={radius * 0.6} 
                fill="none" 
                stroke="rgba(255, 255, 255, 0.04)" 
                strokeWidth="1" 
              />

              {/* Lines from Center to Active Nodes */}
              {nodeCoordinates.map((pt, i) => {
                const isActive = selectedNodeIds.includes(pt.node.id);
                const isHovered = hoveredNode?.id === pt.node.id;

                return (
                  <g key={`conduit-${pt.node.id}`}>
                    <line
                      x1={centerCoord.x}
                      y1={centerCoord.y}
                      x2={pt.x}
                      y2={pt.y}
                      stroke={
                        isActive
                          ? isHovered ? '#60A5FA' : 'rgba(59, 130, 246, 0.45)'
                          : 'rgba(255, 255, 255, 0.08)'
                      }
                      strokeWidth={isActive ? (isHovered ? 2.5 : 1.5) : 1}
                      strokeDasharray={isActive ? undefined : '3 4'}
                      className="transition-all duration-300"
                    />

                    {/* Traveling signal packet if node is active */}
                    {isActive && (
                      <circle
                        cx={centerCoord.x + (pt.x - centerCoord.x) * ((activePulseTime + i * 8) % 100) / 100}
                        cy={centerCoord.y + (pt.y - centerCoord.y) * ((activePulseTime + i * 8) % 100) / 100}
                        r={isHovered ? 3.5 : 2}
                        fill="#60A5FA"
                      />
                    )}
                  </g>
                );
              })}

              {/* Peripheral inter-node connections for active nodes */}
              {nodeCoordinates.map((pt, i) => {
                const nextPt = nodeCoordinates[(i + 1) % nodeCoordinates.length];
                const bothActive = selectedNodeIds.includes(pt.node.id) && selectedNodeIds.includes(nextPt.node.id);
                
                return (
                  <line
                    key={`mesh-${i}`}
                    x1={pt.x}
                    y1={pt.y}
                    x2={nextPt.x}
                    y2={nextPt.y}
                    stroke={bothActive ? 'rgba(96, 165, 250, 0.35)' : 'rgba(255, 255, 255, 0.05)'}
                    strokeWidth={bothActive ? 1.5 : 1}
                    strokeDasharray="2 3"
                  />
                );
              })}

              {/* Center Hub: SYNQ-SQUARE Core */}
              <g 
                className="cursor-pointer group"
                onClick={() => {
                  playSynqChime();
                  handleModeChange(syncMode === 'ENTIRE_SYSTEM' ? 'ONE_TEAM' : 'ENTIRE_SYSTEM');
                }}
              >
                <circle
                  cx={centerCoord.x}
                  cy={centerCoord.y}
                  r="62"
                  fill="url(#centerHubGrad)"
                  stroke="#3B82F6"
                  strokeWidth="1.5"
                />
                
                <rect
                  x={centerCoord.x - 36}
                  y={centerCoord.y - 36}
                  width="72"
                  height="72"
                  fill="#0B0D12"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="1"
                  className="transition-all duration-300 group-hover:scale-105 group-hover:stroke-blue-400"
                />

                <text
                  x={centerCoord.x}
                  y={centerCoord.y - 4}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#FFFFFF"
                  className="font-display font-extrabold text-[12px] tracking-wider select-none pointer-events-none"
                >
                  SYNQ-SQUARE
                </text>

                <text
                  x={centerCoord.x}
                  y={centerCoord.y + 12}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#60A5FA"
                  className="font-mono text-[7.5px] tracking-widest select-none pointer-events-none"
                >
                  {syncMode.replace('_', ' ')}
                </text>
              </g>

              {/* 12 Perimeter Nodes */}
              {nodeCoordinates.map((pt, i) => {
                const isActive = selectedNodeIds.includes(pt.node.id);
                const isHovered = hoveredNode?.id === pt.node.id;

                return (
                  <g
                    key={pt.node.id}
                    id={`svg-node-${pt.node.id}`}
                    className="cursor-pointer group transition-transform duration-200"
                    onMouseEnter={() => {
                      playNodeBlip(i);
                      setHoveredNode(pt.node);
                    }}
                    onMouseLeave={() => setHoveredNode(null)}
                    onClick={() => handleNodeClick(pt.node, i)}
                  >
                    {/* Outer Halo */}
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={isHovered ? 30 : 22}
                      fill={isActive ? 'rgba(37, 99, 235, 0.25)' : 'rgba(255, 255, 255, 0.02)'}
                      stroke={
                        isActive
                          ? isHovered ? '#60A5FA' : 'rgba(96, 165, 250, 0.8)'
                          : isHovered ? 'rgba(255,255,255,0.4)' : 'rgba(255, 255, 255, 0.15)'
                      }
                      strokeWidth={isActive ? 1.5 : 1}
                      className="transition-all duration-200"
                    />

                    {/* Center Anchor Box */}
                    <rect
                      x={pt.x - 12}
                      y={pt.y - 12}
                      width="24"
                      height="24"
                      fill={isActive ? '#1E293B' : '#08090C'}
                      stroke={isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.3)'}
                      strokeWidth="1"
                      className="transition-all duration-150"
                    />

                    {/* Node Index Number */}
                    <text
                      x={pt.x}
                      y={pt.y - 1}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={isActive ? '#60A5FA' : '#94A3B8'}
                      className="font-mono font-bold text-[8.5px] select-none pointer-events-none"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </text>

                    {/* Label */}
                    <text
                      x={pt.x}
                      y={pt.y + 28}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={isActive ? '#FFFFFF' : '#94A3B8'}
                      className="font-display font-bold text-[10px] tracking-wider select-none pointer-events-none drop-shadow"
                    >
                      {pt.node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          ) : (
            /* Grid View alternative for dense scannability */
            <div className="w-full h-full p-4 grid grid-cols-3 sm:grid-cols-4 gap-2.5 overflow-y-auto">
              {ECOSYSTEM_NODES.map((node, idx) => {
                const isActive = selectedNodeIds.includes(node.id);
                return (
                  <button
                    key={node.id}
                    onClick={() => handleNodeClick(node, idx)}
                    className={`p-3 rounded-xs border text-left transition-all flex flex-col justify-between ${
                      isActive
                        ? 'bg-blue-950/40 border-blue-400 text-white ring-1 ring-blue-400/40 shadow-sm'
                        : 'bg-white/[0.02] border-white/10 text-white/60 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-mono text-[9px] text-white/40">0{idx + 1}</span>
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-blue-400' : 'bg-white/20'}`} />
                    </div>
                    <div className="font-display font-bold text-xs text-white mt-2">
                      {node.label}
                    </div>
                    <span className="font-mono text-[8px] text-white/40 mt-1 uppercase">
                      {node.category.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Interactive Hint */}
          <div className="absolute bottom-1 font-mono text-[10px] text-white/40 bg-black/60 px-3 py-1 rounded-full border border-white/10 backdrop-blur-xs flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>CLICK NODES TO TOGGLE // SELECT TO ZOOM SUBSYSTEMS</span>
          </div>
        </div>

        {/* Right Action & Outcomes Strip */}
        <div className="w-full lg:w-72 shrink-0 order-3 flex flex-col gap-3">
          
          <div className="p-4 rounded-sm bg-[#0B0E14] border border-white/10 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="font-mono text-[10px] text-white/40 tracking-wider">
                THE DIGITAL FOOTPRINT
              </span>
              <Layers className="w-3.5 h-3.5 text-blue-400" />
            </div>

            <div className="space-y-1">
              <span className="font-display font-bold text-sm text-white block">
                EVERY BRAND LEAVES A FOOTPRINT.
              </span>
              <p className="text-xs text-white/70 leading-relaxed">
                We help shape it through 5 progressive stages:
              </p>
            </div>

            <div className="space-y-1 font-mono text-[11px] text-white/80">
              <div className="p-1.5 bg-white/5 rounded-xs flex items-center justify-between">
                <span>BUILD</span>
                <span className="text-[10px] text-white/40">Brand + Web + Design</span>
              </div>
              <div className="p-1.5 bg-white/5 rounded-xs flex items-center justify-between">
                <span>DISCOVER</span>
                <span className="text-[10px] text-white/40">SEO + Search + Content</span>
              </div>
              <div className="p-1.5 bg-white/5 rounded-xs flex items-center justify-between">
                <span>CONNECT</span>
                <span className="text-[10px] text-white/40">Social + Comm + Media</span>
              </div>
              <div className="p-1.5 bg-white/5 rounded-xs flex items-center justify-between">
                <span>CONVERT</span>
                <span className="text-[10px] text-white/40">Marketing + UX + Auto</span>
              </div>
              <div className="p-1.5 bg-white/5 rounded-xs flex items-center justify-between">
                <span>GROW</span>
                <span className="text-[10px] text-white/40">Data + Opt + Strategy</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="map-explore-outcomes-btn"
                onClick={onNavigateToOutcomes}
                className="w-full py-2 bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold rounded-xs border border-white/20 transition-all flex items-center justify-center gap-1.5"
              >
                <span>EXPLORE THE FOOTPRINT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Action Card: Talk to SYNQ-SQUARE */}
          <div className="p-4 rounded-sm bg-[#0E131F] border border-blue-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-blue-300">ENGAGE SYNQ-SQUARE</span>
              <span className="w-2 h-2 rounded-full bg-blue-400" />
            </div>

            <div className="font-display font-semibold text-sm text-white">
              Deploy your combination.
            </div>

            <p className="text-xs text-white/70 font-sans">
              No forced packages. No unnecessary services. Just what makes sense for your brand.
            </p>

            <button
              id="map-talk-synq-btn"
              onClick={() => {
                playPing(700, 'triangle', 0.08);
                onOpenProjectModal(`Configured ${selectedNodeIds.length} Nodes in ${syncMode}`);
              }}
              className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold rounded-xs transition-all shadow-md shadow-blue-600/30 flex items-center justify-center gap-1.5"
            >
              <span>TALK TO SYNQ-SQUARE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

      {/* Mobile-Friendly Tactile Strip */}
      <div className="lg:hidden relative z-10 max-w-7xl mx-auto w-full px-4 pb-6">
        <div className="border-t border-white/10 pt-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-white/50 tracking-wider">
              TACTILE POSSIBILITIES ({selectedNodeIds.length} ACTIVE)
            </span>
            <span className="font-mono text-[10px] text-blue-400">12 NODES</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {ECOSYSTEM_NODES.map((n, idx) => {
              const isActive = selectedNodeIds.includes(n.id);
              return (
                <button
                  key={n.id}
                  onClick={() => handleNodeClick(n, idx)}
                  className={`p-2 rounded-xs border text-left transition-colors ${
                    isActive ? 'bg-blue-600/20 border-blue-400 text-white' : 'bg-white/5 border-white/10 text-white/60'
                  }`}
                >
                  <div className="flex items-center justify-between text-[8px] font-mono mb-0.5">
                    <span>0{idx + 1}</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-blue-400' : 'bg-white/20'}`} />
                  </div>
                  <div className="font-display font-bold text-xs text-white truncate">
                    {n.label}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Subsystem Detail Modal */}
      <NodeDetailModal
        node={selectedNode}
        onClose={() => setSelectedNode(null)}
        onSelectNode={(id) => {
          const target = ECOSYSTEM_NODES.find(n => n.id === id);
          if (target) setSelectedNode(target);
        }}
        onOpenProjectModal={(nodeLabel) => {
          setSelectedNode(null);
          onOpenProjectModal(nodeLabel);
        }}
      />

    </div>
  );
}
