import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Film, Radio, Activity, Zap, Play, RotateCcw, 
  Sparkles, Shield, Compass, Sliders, Volume2, 
  Maximize2, Eye, Cpu, Flame, CheckCircle2, AlertTriangle
} from 'lucide-react';
import { playClickSound, playHoverSound, playNodeBlip, playSuccessChime, playSynqChime } from '../utils/audio';

// ── Cinematic Ecosystem Nodes ──────────────────────────────
interface SynqNode {
  id: string;
  code: string;
  name: string;
  category: string;
  frictionState: string;
  synqState: string;
  frictionLoss: string;
  synqGain: string;
  coords: { x: number; y: number }; // percentage position around orbit
  color: string;
  description: string;
}

const NODES: SynqNode[] = [
  {
    id: 'talent',
    code: 'ND.01',
    name: 'Technicians & Guilds',
    category: 'Human Capital',
    frictionState: 'Unverified availability & scheduling blackouts',
    synqState: 'Direct roster availability mesh & transparent rate parity',
    frictionLoss: '3.2 wks lost',
    synqGain: 'Instant locking',
    coords: { x: 50, y: 8 },
    color: '#23B272',
    description: 'Cinematographers, sound designers, colorists, and specialized line crews coordinated on flexible demand.',
  },
  {
    id: 'stages',
    code: 'ND.02',
    name: 'Soundstages & Volumes',
    category: 'Spatial Infrastructure',
    frictionState: '41% idle floor dark-time between tentpole bookings',
    synqState: 'Dynamic fractional floor access & shared LED setup time',
    frictionLoss: '41% dark rate',
    synqGain: '100% liquidity',
    coords: { x: 86, y: 28 },
    color: '#52E3A4',
    description: 'Physical stages, acoustic post suites, and virtual production volumes shared without long-term overhead.',
  },
  {
    id: 'capital',
    code: 'ND.03',
    name: 'Finishing & Gap Capital',
    category: 'Financial Flow',
    frictionState: 'Predatory completion bonds & delayed tranche releases',
    synqState: 'Milestone-synced algorithmic cash flows & transparent presales',
    frictionLoss: '18% interest drag',
    synqGain: 'Real-time equity',
    coords: { x: 86, y: 72 },
    color: '#D4F838',
    description: 'Asset-light capital syndication tying funding directly to verified scene completion and telemetry.',
  },
  {
    id: 'theatrical',
    code: 'ND.04',
    name: 'Theatrical Screens',
    category: 'Exhibition Network',
    frictionState: 'Uncoordinated festival & tentpole release clashes',
    synqState: 'Audience-backed programmatic screening clusters & DCI routing',
    frictionLoss: '35% screen drop',
    synqGain: 'Optimized windows',
    coords: { x: 50, y: 92 },
    color: '#23B272',
    description: 'Multiplexes and single-screen circuits synchronized with localized pre-demand signals.',
  },
  {
    id: 'creative',
    code: 'ND.05',
    name: 'Creative IP & Packaging',
    category: 'Story Architecture',
    frictionState: 'Scripts stuck in multi-year packaging limbo',
    synqState: 'Pre-vetted attachments with turnkey technical feasibility',
    frictionLoss: '24 mo. stagnation',
    synqGain: '6 wk packaging',
    coords: { x: 14, y: 72 },
    color: '#52E3A4',
    description: 'Screenplays and verified literary rights packaged with matched directors and budgetary models.',
  },
  {
    id: 'audience',
    code: 'ND.06',
    name: 'Audience & Cultural Pulse',
    category: 'Velocity & Demand',
    frictionState: 'Generic blind marketing spent on uninterested demographics',
    synqState: 'Hyper-targeted cultural catalysts & verified fan momentum',
    frictionLoss: '60% ad waste',
    synqGain: 'Direct conversion',
    coords: { x: 14, y: 28 },
    color: '#D4F838',
    description: 'Direct-to-audience grassroots energy synchronized months before theatrical release.',
  },
];

export function CinematicSynqDeck() {
  const [synced, setSynced] = useState(true);
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [aspectRatio, setAspectRatio] = useState<'cinemascope' | 'standard'>('cinemascope');
  const [lensGrade, setLensGrade] = useState<'jade' | 'celluloid' | 'anamorphic'>('jade');
  const [timecode, setTimecode] = useState('01:24:08:14');
  const [isHoveringCore, setIsHoveringCore] = useState(false);

  // 24 FPS Timecode generator
  useEffect(() => {
    let frame = 14;
    let sec = 8;
    let min = 24;
    let hour = 1;

    const interval = setInterval(() => {
      frame++;
      if (frame >= 24) {
        frame = 0;
        sec++;
        if (sec >= 60) {
          sec = 0;
          min++;
          if (min >= 60) {
            min = 0;
            hour++;
          }
        }
      }
      const pad = (n: number) => n.toString().padStart(2, '0');
      setTimecode(`${pad(hour)}:${pad(min)}:${pad(sec)}:${pad(frame)}`);
    }, 1000 / 24);

    return () => clearInterval(interval);
  }, []);

  const activeNode = NODES[activeNodeIndex];

  const handleToggleSync = () => {
    const next = !synced;
    setSynced(next);
    if (next) {
      playSuccessChime();
    } else {
      playClickSound();
    }
  };

  const handleSelectNode = (idx: number) => {
    setActiveNodeIndex(idx);
    playNodeBlip(idx);
  };

  return (
    <div className="relative w-full my-12 select-none">
      {/* ── Viewport Letterbox Shell ────────────────────────── */}
      <div 
        className={`relative w-full rounded-2xl sm:rounded-3xl border border-[#23B272]/20 overflow-hidden transition-all duration-700 ${
          aspectRatio === 'cinemascope' ? 'bg-[#040C09]' : 'bg-[#06130E]'
        } shadow-[0_24px_80px_rgba(0,0,0,0.8),0_0_60px_rgba(35,178,114,0.12)]`}
      >
        {/* Film Grade Overlay */}
        {lensGrade === 'celluloid' && (
          <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay bg-[radial-gradient(#52E3A4_1px,transparent_1px)] [background-size:16px_16px] z-30" />
        )}
        {lensGrade === 'anamorphic' && (
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#23B272]/5 via-transparent to-[#D4F838]/5 z-30" />
        )}

        {/* ── Viewfinder HUD Top Bar ────────────────────────── */}
        <div className="relative z-40 px-4 sm:px-6 py-3 border-b border-white/[0.08] bg-black/60 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono">
          <div className="flex items-center gap-3">
            {/* REC indicator */}
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#0D281E]/80 border border-[#23B272]/40 text-[#D4F838]">
              <span className="w-2 h-2 rounded-full bg-[#D4F838] animate-pulse" />
              <span className="font-bold tracking-wider">REC</span>
            </div>
            {/* Timecode */}
            <div className="text-white/90 tracking-widest font-semibold text-xs sm:text-sm">
              TC {timecode}
            </div>
            {/* Scene metadata */}
            <span className="hidden md:inline-block text-[#52E3A4]/60">
              SCN 04 // TK 01 // 24.00 FPS
            </span>
          </div>

          {/* Camera Telemetry / Shutter */}
          <div className="hidden lg:flex items-center gap-4 text-white/40">
            <span>ANAMORPHIC 40mm T2.0</span>
            <span>SHUTTER 180°</span>
            <span>ISO 800</span>
            <span>5600K</span>
          </div>

          {/* Viewport Controls */}
          <div className="flex items-center gap-2">
            {/* Lens Grade Switcher */}
            <div className="flex items-center p-0.5 rounded-lg bg-white/5 border border-white/10 text-[10px]">
              <button
                type="button"
                onClick={() => { setLensGrade('jade'); playClickSound(); }}
                className={`px-2 py-0.5 rounded transition ${lensGrade === 'jade' ? 'bg-[#23B272] text-[#06130E] font-bold' : 'text-white/60 hover:text-white'}`}
              >
                JADE
              </button>
              <button
                type="button"
                onClick={() => { setLensGrade('celluloid'); playClickSound(); }}
                className={`px-2 py-0.5 rounded transition ${lensGrade === 'celluloid' ? 'bg-[#D4F838] text-[#06130E] font-bold' : 'text-white/60 hover:text-white'}`}
              >
                GRAIN
              </button>
              <button
                type="button"
                onClick={() => { setLensGrade('anamorphic'); playClickSound(); }}
                className={`px-2 py-0.5 rounded transition ${lensGrade === 'anamorphic' ? 'bg-[#52E3A4] text-[#06130E] font-bold' : 'text-white/60 hover:text-white'}`}
              >
                FLARE
              </button>
            </div>

            {/* Aspect Ratio Toggle */}
            <button
              type="button"
              onClick={() => {
                setAspectRatio(prev => prev === 'cinemascope' ? 'standard' : 'cinemascope');
                playClickSound();
              }}
              className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-[#23B272] hover:border-[#23B272]/40 transition flex items-center gap-1 cursor-pointer"
              title="Toggle Aspect Ratio"
            >
              <Maximize2 size={12} />
              <span className="hidden sm:inline">{aspectRatio === 'cinemascope' ? '2.39:1' : '16:9'}</span>
            </button>
          </div>
        </div>

        {/* ── Cinemascope Viewport Stage ────────────────────── */}
        <div className={`relative w-full ${aspectRatio === 'cinemascope' ? 'aspect-[2.39/1] min-h-[460px] sm:min-h-[560px]' : 'aspect-[16/9] min-h-[480px] sm:min-h-[620px]'} flex flex-col justify-between p-6 sm:p-10 transition-all duration-700 overflow-hidden`}>
          
          {/* Authentic Crosshairs & Safe Title Grid */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Center crosshair */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none opacity-40">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-2.5 bg-[#23B272]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-2.5 bg-[#23B272]" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-2.5 bg-[#23B272]" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-px w-2.5 bg-[#23B272]" />
              <div className="absolute inset-2 rounded-full border border-[#23B272]/40" />
            </div>

            {/* Corner viewfinder marks */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#23B272]/40" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#23B272]/40" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#23B272]/40" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#23B272]/40" />

            {/* Left & Right 35mm Sprocket film perforations */}
            <div className="hidden md:flex flex-col justify-between absolute top-12 bottom-12 left-2 w-2 opacity-30">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-1.5 h-3.5 rounded-xs bg-[#23B272]/60 border border-white/20" />
              ))}
            </div>
            <div className="hidden md:flex flex-col justify-between absolute top-12 bottom-12 right-2 w-2 opacity-30">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-1.5 h-3.5 rounded-xs bg-[#23B272]/60 border border-white/20" />
              ))}
            </div>
          </div>

          {/* Background Ambient Lighting */}
          <div className="absolute inset-0 pointer-events-none">
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] rounded-full blur-[140px] transition-all duration-1000 ${
              synced ? 'bg-[radial-gradient(circle,#23B272_0%,#16543D_40%,transparent_70%)] opacity-30' : 'bg-[radial-gradient(circle,#27272a_0%,#09090b_50%,transparent_70%)] opacity-30'
            }`} />
          </div>

          {/* ── Central Stage: The Living Orbit & Laser Threads ── */}
          <div className="relative z-20 flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-square max-h-[420px] flex items-center justify-center">

              {/* Orbital Ring Path */}
              <div className={`absolute inset-4 rounded-full border border-dashed transition-all duration-700 ${
                synced ? 'border-[#23B272]/30 animate-[spin_60s_linear_infinite]' : 'border-white/10'
              }`} />
              <div className="absolute inset-16 rounded-full border border-white/5" />

              {/* Connecting Laser Vectors (SVG lines from center to nodes) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100">
                {NODES.map((node, i) => {
                  const isSelected = i === activeNodeIndex;
                  return (
                    <g key={node.id}>
                      {synced ? (
                        <>
                          <line
                            x1="50"
                            y1="50"
                            x2={node.coords.x}
                            y2={node.coords.y}
                            stroke={isSelected ? '#D4F838' : '#23B272'}
                            strokeWidth={isSelected ? '1.2' : '0.6'}
                            strokeOpacity={isSelected ? '0.9' : '0.4'}
                            strokeDasharray={isSelected ? 'none' : '2 2'}
                          />
                          {/* Animated Synq pulse along vector */}
                          <circle r="1" fill="#D4F838">
                            <animateMotion
                              path={`M 50 50 L ${node.coords.x} ${node.coords.y}`}
                              dur={`${2 + i * 0.4}s`}
                              repeatCount="indefinite"
                            />
                          </circle>
                        </>
                      ) : (
                        /* Broken / Fractured Vector */
                        <line
                          x1="50"
                          y1="50"
                          x2={50 + (node.coords.x - 50) * 0.4}
                          y2={50 + (node.coords.y - 50) * 0.4}
                          stroke="#71717A"
                          strokeWidth="0.8"
                          strokeOpacity="0.4"
                          strokeDasharray="1 3"
                        />
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* ── Central Synq Core (Aperture Nexus) ───────── */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => setIsHoveringCore(true)}
                onMouseLeave={() => setIsHoveringCore(false)}
                onClick={handleToggleSync}
                className="relative z-30 w-28 h-28 sm:w-36 sm:h-36 rounded-full flex flex-col items-center justify-center cursor-pointer group"
              >
                {/* Glow rings */}
                <div className={`absolute -inset-3 rounded-full blur-xl transition-all duration-700 ${
                  synced 
                    ? 'bg-[#23B272]/30 group-hover:bg-[#23B272]/50' 
                    : 'bg-white/5 group-hover:bg-white/10'
                }`} />
                
                {/* Core chassis */}
                <div className={`relative w-full h-full rounded-full border-2 flex flex-col items-center justify-center p-3 text-center transition-all duration-500 ${
                  synced 
                    ? 'bg-[#0D281E]/90 border-[#23B272] shadow-[0_0_30px_rgba(35,178,114,0.35)]' 
                    : 'bg-black/90 border-zinc-700 shadow-[0_0_30px_rgba(255,255,255,0.04)]'
                }`}>
                  {/* Rotating aperture blades */}
                  <div className={`absolute inset-1 rounded-full border border-white/10 ${synced ? 'animate-[spin_20s_linear_infinite]' : ''}`} />
                  
                  {synced ? (
                    <>
                      <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4F838] mb-1 animate-pulse" />
                      <span className="text-[10px] sm:text-xs font-mono font-bold text-white tracking-widest uppercase">
                        SYNQ ACTIVE
                      </span>
                      <span className="text-[8px] sm:text-[9px] text-[#52E3A4] font-mono mt-0.5">
                        Zero Heavy Assets
                      </span>
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-zinc-400 mb-1" />
                      <span className="text-[10px] sm:text-xs font-mono font-bold text-zinc-300 tracking-wider uppercase">
                        FRAGMENTED
                      </span>
                      <span className="text-[8px] sm:text-[9px] text-white/50 font-mono mt-0.5">
                        Click to Sync
                      </span>
                    </>
                  )}
                </div>
              </motion.div>

              {/* ── Orbital Nodes (6 Ecosystem Pillars) ──────── */}
              {NODES.map((node, i) => {
                const isSelected = i === activeNodeIndex;
                return (
                  <motion.div
                    key={node.id}
                    onClick={() => handleSelectNode(i)}
                    style={{
                      position: 'absolute',
                      left: `${node.coords.x}%`,
                      top: `${node.coords.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={synced ? { scale: isSelected ? 1.15 : 1, y: 0 } : { y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className="relative z-30 cursor-pointer group"
                  >
                    {/* Node glow */}
                    {isSelected && (
                      <div className="absolute -inset-2 rounded-xl bg-[#23B272]/30 blur-md animate-pulse" />
                    )}

                    {/* Node Card */}
                    <div className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border backdrop-blur-md transition-all duration-300 flex items-center gap-2 ${
                      isSelected
                        ? 'bg-[#0D281E] border-[#D4F838] text-white shadow-[0_0_20px_rgba(212,248,56,0.3)]'
                        : synced
                        ? 'bg-black/80 border-[#23B272]/30 text-white/80 hover:border-[#23B272] hover:text-white'
                        : 'bg-black/90 border-white/10 text-white/60 hover:border-white/30'
                    }`}>
                      {/* Node status dot */}
                      <span 
                        className={`w-2 h-2 rounded-full shrink-0 ${
                          isSelected 
                            ? 'bg-[#D4F838] shadow-[0_0_8px_#D4F838]' 
                            : synced 
                            ? 'bg-[#23B272]' 
                            : 'bg-zinc-500'
                        }`} 
                      />
                      <div>
                        <div className="text-[10px] sm:text-xs font-bold leading-tight flex items-center gap-1.5">
                          <span>{node.name}</span>
                          <span className="text-[8px] font-mono text-white/40">{node.code}</span>
                        </div>
                        <div className="text-[8px] sm:text-[9px] text-[#52E3A4]/70 font-mono">
                          {synced ? node.synqGain : node.frictionLoss}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── Bottom Telemetry Console / Active Inspector ───── */}
          <div className="relative z-30 mt-6 pt-4 border-t border-white/[0.08] bg-black/40 backdrop-blur-sm -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Active Node Deep Dive */}
            <div className="flex-1 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0D281E] border border-[#23B272]/40 flex items-center justify-center text-[#D4F838] shrink-0 font-mono font-bold text-xs">
                {activeNode.code}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-white">{activeNode.name}</h4>
                  <span className="badge-lime text-[9px] px-1.5 py-0.2 rounded font-mono">
                    {activeNode.category}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 max-w-xl line-clamp-1 sm:line-clamp-none mt-0.5">
                  {synced ? (
                    <span className="text-[#52E3A4]">✓ {activeNode.synqState}</span>
                  ) : (
                    <span className="text-zinc-400">⚠ {activeNode.frictionState}</span>
                  )}
                </p>
              </div>
            </div>

            {/* Quick Synchronize Action */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={handleToggleSync}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition flex items-center gap-2 cursor-pointer ${
                  synced 
                    ? 'bg-white/10 hover:bg-white/20 text-white border border-white/15' 
                    : 'bg-[#23B272] hover:bg-[#52E3A4] text-[#06130E] shadow-[0_0_20px_rgba(35,178,114,0.4)]'
                }`}
              >
                <RotateCcw size={13} className={synced ? '' : 'animate-spin'} />
                <span>{synced ? 'INJECT FRICTION' : 'SYNCHRONIZE SYSTEM'}</span>
              </button>

              <div className="text-right font-mono text-[10px]">
                <div className="text-white/40">SYSTEM STATE</div>
                <div className={synced ? 'text-[#D4F838] font-bold' : 'text-zinc-400 font-bold'}>
                  {synced ? 'COHERENT // OPTIMAL' : 'CHAOS // 48% LEAK'}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
