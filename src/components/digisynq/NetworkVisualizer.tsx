import { useState, useEffect, useRef } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, ArrowUpRight, Network, Activity, Radio, BookOpen, ArrowRight } from 'lucide-react';
import digisynqLogo from '../../assets/digisynq-logo.png';

interface NodeData {
  id: string;
  label: string;
  shortRole: string;
  role: string;
  x: number; // 0 to 1 normalized
  y: number; // 0 to 1 normalized
  connections: string[];
  description: string;
  signalMetric: string;
  accentColor: string;
}

// 8 Canonical Ecosystem Nodes directly from the DigiSynq Manifesto
const ECOSYSTEM_NODES: NodeData[] = [
  {
    id: 'producers',
    label: 'Producers',
    shortRole: 'Slates & Production',
    role: 'Studios, Production Houses & Packaging Leads',
    x: 0.50,
    y: 0.12,
    connections: ['talent', 'investors', 'brands', 'distributors', 'exhibitors', 'platforms', 'audiences'],
    description: 'Autonomous packaging of slates, dynamic crew budgeting, vendor orchestration, and zero-leakage milestone execution.',
    signalMetric: 'Zero CapEx Footprint',
    accentColor: '#5CE1E6',
  },
  {
    id: 'talent',
    label: 'Talent & Crew',
    shortRole: 'Cast, Directors & Heads',
    role: 'Actors, Directors, Department Heads & Guilds',
    x: 0.78,
    y: 0.23,
    connections: ['producers', 'investors', 'brands', 'distributors', 'exhibitors', 'platforms', 'audiences'],
    description: 'Verified professional track records, guild credentials, and calendar availability matched directly to vetted productions.',
    signalMetric: '99.4% Verified Identity',
    accentColor: '#8B7CFF',
  },
  {
    id: 'investors',
    label: 'Investors',
    shortRole: 'Capital & Co-Financing',
    role: 'Film Funds, Sovereign Pools, Tax Credits & Syndicates',
    x: 0.89,
    y: 0.50,
    connections: ['producers', 'talent', 'brands', 'distributors', 'exhibitors', 'platforms', 'audiences'],
    description: 'Algorithmic co-financing matching, tax incentive syndication, and automated CAM waterfall accounting without debt drag.',
    signalMetric: 'Pure Matching & Zero Risk',
    accentColor: '#5EF2B0',
  },
  {
    id: 'brands',
    label: 'Brands',
    shortRole: 'Sponsors & Placements',
    role: 'Global Advertisers, Product Integration & Brand Partners',
    x: 0.78,
    y: 0.77,
    connections: ['producers', 'talent', 'investors', 'distributors', 'exhibitors', 'platforms', 'audiences'],
    description: 'Contextual, natural script placements with verified post-release screen-time analytics and escrowed co-marketing.',
    signalMetric: 'Closed-Loop ROI Tracking',
    accentColor: '#FFC857',
  },
  {
    id: 'exhibitors',
    label: 'Exhibitors',
    shortRole: 'Theatres & Screens',
    role: 'Theatrical Circuits, Art Houses & Pop-Up Corridors',
    x: 0.50,
    y: 0.88,
    connections: ['producers', 'talent', 'investors', 'brands', 'distributors', 'platforms', 'audiences'],
    description: 'Dynamic auditorium yield optimization converting off-peak dark hours into profitable event cinema & live broadcasts.',
    signalMetric: '+64% Off-Peak Utilization',
    accentColor: '#4D8DFF',
  },
  {
    id: 'distributors',
    label: 'Distributors',
    shortRole: 'Territorial Rights',
    role: 'Sales Agents, Global Buyers, Territory Syndicates & IFTA',
    x: 0.22,
    y: 0.77,
    connections: ['producers', 'talent', 'investors', 'brands', 'exhibitors', 'platforms', 'audiences'],
    description: 'Transparent territory rights registry, DRM-watermarked screener deal rooms, and automated delivery corridor settlements.',
    signalMetric: '195 Territorial Windows',
    accentColor: '#8B7CFF',
  },
  {
    id: 'platforms',
    label: 'Platforms',
    shortRole: 'Streaming & FAST',
    role: 'SVOD, AVOD, FAST Channels & Connected TV Networks',
    x: 0.11,
    y: 0.50,
    connections: ['producers', 'talent', 'investors', 'brands', 'distributors', 'exhibitors', 'audiences'],
    description: 'Predictive catalog licensing, secondary release windowing, and instant cryptographic asset ingest directly to cloud pipelines.',
    signalMetric: 'Direct-to-Cloud Ingest',
    accentColor: '#5CE1E6',
  },
  {
    id: 'audiences',
    label: 'Audiences',
    shortRole: 'Fandom & Demand',
    role: 'Moviegoers, Fan Collectives, Tastemakers & Communities',
    x: 0.22,
    y: 0.23,
    connections: ['producers', 'talent', 'investors', 'brands', 'distributors', 'exhibitors', 'platforms'],
    description: 'First-party fan affinity telemetry, ticket threshold demand-pooling, and crowdfunded community theatrical premieres.',
    signalMetric: 'Live Sentiment Telemetry',
    accentColor: '#5EF2B0',
  },
];

// Pairwise direct inter-node synchronization map (all 28 canonical combinations)
export const NODE_LINKS_MAP: Record<string, Record<string, string>> = {
  producers: {
    talent: 'Cast packaging, guild contracts & milestone escrow',
    investors: 'Slate co-financing & tax credit monetization',
    brands: 'In-script brand integration & co-marketing pools',
    distributors: 'Territorial pre-sales & minimum guarantee deals',
    exhibitors: 'DCI DCP master delivery & theatrical windows',
    platforms: 'Streaming licensing windows & digital rights handoff',
    audiences: 'Test-screening telemetry & audience demand proof',
  },
  talent: {
    producers: 'Cast packaging, guild contracts & milestone escrow',
    investors: 'Talent-backed fund syndicates & residual waterfalls',
    brands: 'Brand ambassador alignments & verified endorsements',
    distributors: 'Territory promotional tours & junket schedules',
    exhibitors: 'Premiere Q&A appearances & red-carpet screenings',
    platforms: 'Creator revenue residuals & attribution tracking',
    audiences: 'Direct fan community memberships & VIP screenings',
  },
  investors: {
    producers: 'Slate co-financing & tax credit monetization',
    talent: 'Talent-backed fund syndicates & residual waterfalls',
    brands: 'Brand equity matching & marketing co-investment',
    distributors: 'IFTA sales collections & automated waterfall payout',
    exhibitors: 'Box-office revenue share splits & smart escrow',
    platforms: 'Downstream licensing yield & SVOD royalties',
    audiences: 'Crowdfunded fan pledges & box office yield share',
  },
  brands: {
    producers: 'In-script brand integration & co-marketing pools',
    talent: 'Brand ambassador alignments & verified endorsements',
    investors: 'Brand equity matching & marketing co-investment',
    distributors: 'Territory promotional campaigns & branded media',
    exhibitors: 'In-theatre brand activations & concession tie-ins',
    platforms: 'Dynamic ad insertion & sponsored streaming tiers',
    audiences: 'Exclusive perks, premiere sweepstakes & rewards',
  },
  exhibitors: {
    producers: 'DCI DCP master delivery & theatrical windows',
    talent: 'Premiere Q&A appearances & red-carpet screenings',
    investors: 'Box-office revenue share splits & smart escrow',
    brands: 'In-theatre brand activations & concession tie-ins',
    distributors: 'KDM security keys, play-dates & ticket splits',
    platforms: 'Simultaneous event cinema & hybrid windows',
    audiences: 'Reserved seating, off-peak screenings & loyalty clubs',
  },
  distributors: {
    producers: 'Territorial pre-sales & minimum guarantee deals',
    talent: 'Territory promotional tours & junket schedules',
    investors: 'IFTA sales collections & automated waterfall payout',
    brands: 'Territory promotional campaigns & branded media',
    exhibitors: 'KDM security keys, play-dates & ticket splits',
    platforms: 'Secondary digital windows & global licensing',
    audiences: 'Localized marketing campaigns & ticket pre-orders',
  },
  platforms: {
    producers: 'Streaming licensing windows & digital rights handoff',
    talent: 'Creator revenue residuals & attribution tracking',
    investors: 'Downstream licensing yield & SVOD royalties',
    brands: 'Dynamic ad insertion & sponsored streaming tiers',
    exhibitors: 'Simultaneous event cinema & hybrid windows',
    distributors: 'Secondary digital windows & global licensing',
    audiences: 'Personalized discovery, watchlists & fan hubs',
  },
  audiences: {
    producers: 'Test-screening telemetry & audience demand proof',
    talent: 'Direct fan community memberships & VIP screenings',
    investors: 'Crowdfunded fan pledges & box office yield share',
    brands: 'Exclusive perks, premiere sweepstakes & rewards',
    exhibitors: 'Reserved seating, off-peak screenings & loyalty clubs',
    distributors: 'Localized marketing campaigns & ticket pre-orders',
    platforms: 'Personalized discovery, watchlists & fan hubs',
  },
};

interface NetworkVisualizerProps {
  onOpenRunbook?: (chapterIndex?: number) => void;
}

export const NetworkVisualizer: FC<NetworkVisualizerProps> = ({ onOpenRunbook }) => {
  const [activeNode, setActiveNode] = useState<NodeData | null>(ECOSYSTEM_NODES[0]);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [highlightedEdgeKey, setHighlightedEdgeKey] = useState<string | null>(null);
  const [isSynchronized, setIsSynchronized] = useState<boolean>(true);
  const [isCenterSelected, setIsCenterSelected] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Canvas interactive animation for signal flows and central synchronization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      // Cap DPR at 2x: 3x-4x phones cost 9-16x pixels for no visible gain.
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(parent.clientWidth * dpr));
      canvas.height = Math.max(1, Math.floor(parent.clientHeight * dpr));
      // Reset transform before scaling — ctx.scale() accumulates across resizes.
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    // Build unique undirected edges list for 28 total full-mesh edges
    const uniqueEdges: { sourceId: string; targetId: string; key: string }[] = [];
    const seenEdges = new Set<string>();

    ECOSYSTEM_NODES.forEach((source) => {
      source.connections.forEach((targetId) => {
        const edgeKey = [source.id, targetId].sort().join('--');
        if (!seenEdges.has(edgeKey)) {
          seenEdges.add(edgeKey);
          uniqueEdges.push({ sourceId: source.id, targetId, key: edgeKey });
        }
      });
    });

    const render = () => {
      // Pause offscreen / hidden tabs — canvas draws 28 edges every frame.
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        time += 0.002;
      } else {
        time += 0.02;
      }
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.clearRect(0, 0, width, height);

      const centerX = width * 0.50;
      const centerY = height * 0.50;

      // Absolute node positions based on normalized coordinates
      const positions = ECOSYSTEM_NODES.map((node) => ({
        ...node,
        px: node.x * width,
        py: node.y * height,
      }));

      // ── Radar & Blueprint Precision Grid ─────────────────────────────
      // 1. Concentric Range Rings
      [0.16, 0.28, 0.39].forEach((radiusRatio, rIdx) => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(centerX, centerY, width * radiusRatio, 0, Math.PI * 2);
        ctx.strokeStyle = rIdx === 2 ? 'rgba(92, 225, 230, 0.12)' : 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 1;
        if (rIdx === 1) {
          ctx.setLineDash([4, 6]);
        }
        ctx.stroke();
        ctx.restore();
      });

      // 2. Cardinal Crosshairs
      ctx.save();
      ctx.strokeStyle = 'rgba(92, 225, 230, 0.08)';
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 4]);
      // Horizontal crosshair
      ctx.beginPath();
      ctx.moveTo(centerX - width * 0.44, centerY);
      ctx.lineTo(centerX + width * 0.44, centerY);
      ctx.stroke();
      // Vertical crosshair
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - height * 0.44);
      ctx.lineTo(centerX, centerY + height * 0.44);
      ctx.stroke();
      ctx.restore();

      // 3. Blueprint Perimeter linking coordinate zones
      ctx.save();
      ctx.beginPath();
      positions.forEach((p, idx) => {
        if (idx === 0) ctx.moveTo(p.px, p.py);
        else ctx.lineTo(p.px, p.py);
      });
      ctx.closePath();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      const activeTargetId = hoveredNodeId || (activeNode ? activeNode.id : null);

      if (isSynchronized) {
        // ── 1. Central Coordination Rays (DigiSynq to all 8 nodes) ────
        positions.forEach((node, i) => {
          const isNodeActive = node.id === activeTargetId || isCenterSelected;

          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.lineTo(node.px, node.py);

          if (isNodeActive) {
            ctx.strokeStyle = 'rgba(92, 225, 230, 0.85)';
            ctx.lineWidth = 2.2;
            ctx.shadowColor = '#5CE1E6';
            ctx.shadowBlur = 12;
            ctx.stroke();
            ctx.shadowBlur = 0;
          } else {
            ctx.strokeStyle = 'rgba(92, 225, 230, 0.18)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }

          // Central synchronization pulses traveling from center outwards
          const pulseOffset = (time * 0.5 + i * 0.125) % 1;
          const pX = centerX + (node.px - centerX) * pulseOffset;
          const pY = centerY + (node.py - centerY) * pulseOffset;

          ctx.beginPath();
          ctx.arc(pX, pY, isNodeActive ? 3.2 : 2.0, 0, Math.PI * 2);
          ctx.fillStyle = isNodeActive ? '#FFFFFF' : '#5CE1E6';
          if (isNodeActive) {
            ctx.shadowColor = '#5CE1E6';
            ctx.shadowBlur = 10;
          }
          ctx.fill();
          ctx.shadowBlur = 0;
        });

        // ── 2. Full-Mesh 28 Inter-Node Edges ──────────────────────────
        uniqueEdges.forEach((edge, idx) => {
          const source = positions.find((n) => n.id === edge.sourceId);
          const target = positions.find((n) => n.id === edge.targetId);
          if (!source || !target) return;

          const isConnectedToFocused =
            edge.sourceId === activeTargetId || edge.targetId === activeTargetId;
          const isExplicitlyHighlighted = highlightedEdgeKey === edge.key;

          ctx.beginPath();
          ctx.moveTo(source.px, source.py);
          ctx.lineTo(target.px, target.py);

          if (isExplicitlyHighlighted) {
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 3.2;
            ctx.shadowColor = '#5CE1E6';
            ctx.shadowBlur = 16;
            ctx.stroke();
            ctx.shadowBlur = 0;
          } else if (isConnectedToFocused) {
            ctx.strokeStyle = 'rgba(92, 225, 230, 0.70)';
            ctx.lineWidth = 2.0;
            ctx.shadowColor = '#5CE1E6';
            ctx.shadowBlur = 8;
            ctx.stroke();
            ctx.shadowBlur = 0;
          } else {
            ctx.strokeStyle = 'rgba(77, 141, 255, 0.16)';
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }

          // Traveling packets along inter-node mesh edges
          if (isConnectedToFocused || isExplicitlyHighlighted) {
            const pCount = 2;
            for (let p = 0; p < pCount; p++) {
              const offset = (time * 0.45 + p * 0.5 + idx * 0.09) % 1;
              const curX = source.px + (target.px - source.px) * offset;
              const curY = source.py + (target.py - source.py) * offset;

              ctx.beginPath();
              ctx.arc(curX, curY, isExplicitlyHighlighted ? 3.4 : 2.5, 0, Math.PI * 2);
              ctx.fillStyle = isExplicitlyHighlighted ? '#FFFFFF' : '#5CE1E6';
              ctx.shadowColor = '#5CE1E6';
              ctx.shadowBlur = 8;
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          } else {
            // Subtle ambient energy packet
            const offset = (time * 0.18 + idx * 0.14) % 1;
            const curX = source.px + (target.px - source.px) * offset;
            const curY = source.py + (target.py - source.py) * offset;

            ctx.beginPath();
            ctx.arc(curX, curY, 1.4, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(139, 124, 255, 0.35)';
            ctx.fill();
          }
        });

        // ── 3. Central DigiSynq Pulsing Rings ──────────────────────────
        for (let r = 0; r < 2; r++) {
          const ringRad = 46 + ((time * 24 + r * 30) % 60);
          const ringAlpha = Math.max(0, 1 - ringRad / 60) * 0.35;
          ctx.beginPath();
          ctx.arc(centerX, centerY, ringRad, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(92, 225, 230, ${ringAlpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }

        // Active node beacon ripple
        if (activeTargetId) {
          const activePos = positions.find((n) => n.id === activeTargetId);
          if (activePos) {
            const rippleRad = 20 + ((time * 26) % 36);
            const rippleAlpha = Math.max(0, 1 - rippleRad / 36) * 0.45;
            ctx.beginPath();
            ctx.arc(activePos.px, activePos.py, rippleRad, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(92, 225, 230, ${rippleAlpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      } else {
        // ── Fragmented State (Legacy Silos) ───────────────────────────
        const disconnectedSubset = uniqueEdges.slice(0, 4);
        disconnectedSubset.forEach((edge) => {
          const source = positions.find((n) => n.id === edge.sourceId);
          const target = positions.find((n) => n.id === edge.targetId);
          if (!source || !target) return;

          ctx.beginPath();
          ctx.moveTo(source.px, source.py);
          ctx.lineTo(target.px, target.py);
          ctx.setLineDash([4, 8]);
          ctx.strokeStyle = 'rgba(255, 200, 87, 0.20)';
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.setLineDash([]);
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [activeNode, hoveredNodeId, highlightedEdgeKey, isSynchronized, isCenterSelected]);

  return (
    <div
      id="hero-network-visualizer"
      className="relative w-full rounded-3xl bg-[#070A12]/95 border border-white/[0.14] p-5 sm:p-7 lg:p-8 overflow-hidden backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.18)]"
    >
      {/* Top Header & Topology Controls Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08] relative z-10">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#5CE1E6] animate-pulse shadow-[0_0_10px_#5CE1E6]" />
          <span className="text-xs font-mono font-bold tracking-wider text-[#5CE1E6]">
            Cinema Graph Topology
          </span>
          <span className="text-xs text-white/30 font-mono hidden sm:inline">|</span>
          <span className="text-xs text-white/80 font-sans font-medium">
            8 Ecosystem Nodes
          </span>
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#5CE1E6]/10 text-[#5CE1E6] border border-[#5CE1E6]/30 font-bold">
            28 Full-Mesh Links
          </span>
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-white/70 border border-white/10 hidden md:inline">
            Central Coordination Core
          </span>
        </div>

        {/* State Toggle: Synchronized vs Fragmented */}
        <div className="flex items-center p-1 rounded-full bg-white/[0.06] border border-white/[0.12] text-xs">
          <button
            onClick={() => {
              setIsSynchronized(true);
            }}
            className={`px-4 py-1 rounded-full font-sans font-medium transition-all duration-200 cursor-pointer ${
              isSynchronized
                ? 'bg-white text-[#070A12] shadow-sm font-bold'
                : 'text-white/60 hover:text-white'
            }`}
            id="btn-state-synchronized"
          >
            Synchronized (28 Links)
          </button>
          <button
            onClick={() => {
              setIsSynchronized(false);
            }}
            className={`px-4 py-1 rounded-full font-sans font-medium transition-all duration-200 cursor-pointer ${
              !isSynchronized
                ? 'bg-[#FFC857]/20 text-[#FFC857] border border-[#FFC857]/50 font-semibold shadow-[0_0_15px_rgba(255,200,87,0.2)]'
                : 'text-white/60 hover:text-white'
            }`}
            id="btn-state-fragmented"
          >
            Fragmented (Silos)
          </button>
        </div>
      </div>

      {/* Main Canvas Orbit Area */}
      <div className="relative h-[480px] sm:h-[560px] md:h-[620px] w-full my-4">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="Cinema coordination graph: 8 ecosystem nodes connected by 28 full-mesh links around the DigiSynq core"
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        {/* ── Central DigiSynq Coordination Core Nexus ──────────────── */}
        <div
          style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
          className="absolute z-20"
        >
          <button
            onClick={() => {
              setIsCenterSelected(!isCenterSelected);
              setActiveNode(null);
              setHighlightedEdgeKey(null);
            }}
            className={`group relative flex items-center justify-center px-5 sm:px-7 py-3 sm:py-3.5 rounded-2xl border transition-all duration-300 cursor-pointer backdrop-blur-2xl ${
              isCenterSelected || activeNode === null
                ? 'bg-[#0D1220] border-[#5CE1E6] shadow-[0_0_35px_rgba(92,225,230,0.4)] scale-105 ring-2 ring-[#5CE1E6]/40'
                : 'bg-[#070A12]/92 border-white/20 hover:border-[#5CE1E6]/70 shadow-[0_10px_30px_rgba(0,0,0,0.85)] hover:scale-105'
            }`}
            title="DigiSynq: The Coordination Mechanism between nodes"
          >
            {/* Centered Brand Logo Only */}
            <img
              src={digisynqLogo}
              alt="DigiSynq coordination core"
              className="h-7 sm:h-8 w-auto object-contain filter drop-shadow-[0_0_12px_rgba(92,225,230,0.5)]"
            />

            {/* Ambient Aura */}
            <span className="absolute -inset-1.5 rounded-2xl border border-[#5CE1E6]/30 animate-pulse pointer-events-none" />
          </button>
        </div>

        {/* ── 8 Orbiting Ecosystem Nodes ───────────────────────────── */}
        {ECOSYSTEM_NODES.map((node) => {
          const isSelected = activeNode?.id === node.id;
          const isHovered = hoveredNodeId === node.id;

          return (
            <button
              key={node.id}
              onClick={() => {
                setActiveNode(node);
                setIsCenterSelected(false);
                setHighlightedEdgeKey(null);
              }}
              onMouseEnter={() => setHoveredNodeId(node.id)}
              onMouseLeave={() => setHoveredNodeId(null)}
              style={{
                left: `${node.x * 100}%`,
                top: `${node.y * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
              className="absolute z-20 focus:outline-none transition-transform hover:scale-108 cursor-pointer"
              id={`node-btn-${node.id}`}
            >
              <div
                className={`relative flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all duration-200 shadow-md ${
                  isSelected
                    ? 'bg-white border-white text-[#070A12] shadow-[0_0_25px_rgba(255,255,255,0.45)] font-bold scale-105'
                    : isHovered
                    ? 'bg-[#0D1220] border-[#5CE1E6] text-white shadow-[0_0_18px_rgba(92,225,230,0.25)]'
                    : 'bg-[#070A12]/92 border-white/[0.14] text-white hover:border-[#5CE1E6]/60 backdrop-blur-xl'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isSelected
                      ? 'bg-[#5CE1E6] shadow-[0_0_6px_#5CE1E6]'
                      : isSynchronized
                      ? 'bg-[#5EF2B0] shadow-[0_0_6px_#5EF2B0]'
                      : 'bg-[#FFC857]'
                  }`}
                />
                <span className="text-xs sm:text-sm font-sans font-bold tracking-normal whitespace-nowrap">
                  {node.label}
                </span>

                <span
                  className={`text-[9.5px] font-mono px-2 py-0.5 rounded-full font-bold ${
                    isSelected
                      ? 'bg-black/20 text-[#070A12]'
                      : 'bg-white/[0.12] text-white/80'
                  }`}
                >
                  7 links
                </span>

                {/* Outer halo when selected */}
                {isSelected && (
                  <span className="absolute -inset-1 rounded-full border border-[#5CE1E6]/80 animate-ping pointer-events-none" />
                )}
              </div>
            </button>
          );
        })}

        {/* Fragmented State Overlay Banner */}
        <AnimatePresence>
          {!isSynchronized && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
            >
              <div className="bg-[#0D1220]/95 border border-[#FFC857]/50 rounded-2xl p-6 text-center backdrop-blur-2xl max-w-md shadow-2xl">
                <div className="flex items-center justify-center gap-2 text-[#FFC857] text-xs font-mono font-bold tracking-widest mb-2">
                  <Activity className="w-4 h-4" />
                  <span>LEGACY ECOSYSTEM FRICTION</span>
                </div>
                <h4 className="text-base sm:text-lg font-sans font-bold text-white mb-2">
                  65% of Cinema Value Stranded in Silos
                </h4>
                <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
                  Without an asset-light coordination mechanism, producers, talent, capital and exhibitors operate through fragmented phone calls, opaque contracts, and idle hardware drag.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive Detail Inspector */}
      <div className="pt-6 border-t border-white/[0.08] overflow-hidden">
        <AnimatePresence mode="wait">
          {activeNode ? (
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-4">
                  <div className="flex items-center gap-1.5 text-[#5CE1E6] text-xs font-mono tracking-wider mb-1 font-bold">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Active Node Inspection</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-denton-extrabold font-extrabold text-white tracking-tight flex items-center gap-2">
                    {activeNode.label}
                  </h4>
                  <span className="text-xs text-[#5CE1E6] font-mono font-bold block mt-0.5">
                    {activeNode.role}
                  </span>
                </div>

                <div className="md:col-span-5 text-xs sm:text-sm text-white/85 leading-relaxed font-sans font-medium [word-spacing:0.04em]">
                  {activeNode.description}
                </div>

                <div className="md:col-span-3 flex md:justify-end">
                  <div className="rounded-xl bg-white/[0.05] border border-white/15 px-4 py-2.5 w-full md:w-auto text-left md:text-right backdrop-blur-xl">
                    <span className="text-[10px] font-mono tracking-widest text-white/60 block font-bold">
                      Network Telemetry
                    </span>
                    <span className="text-xs font-bold text-[#5EF2B0] font-mono">
                      {activeNode.signalMetric}
                    </span>
                  </div>
                </div>
              </div>

              {/* All 8 Interconnected Network Links (7 Peers + DigiSynq Core Nexus) */}
              <div className="pt-3 border-t border-white/[0.08]">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <Network className="w-3.5 h-3.5 text-[#5CE1E6]" />
                    <span className="text-xs font-sans font-bold text-white/80">
                      Direct Interconnected Mesh for <strong className="text-white font-extrabold">{activeNode.label}</strong> (Full-Mesh Synchronization):
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-white/50 hidden sm:inline font-medium">
                    Hover link to isolate edge • Click to inspect node
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {activeNode.connections.map((targetId) => {
                    const targetNode = ECOSYSTEM_NODES.find((n) => n.id === targetId);
                    if (!targetNode) return null;

                    const edgeKey = [activeNode.id, targetId].sort().join('--');
                    const linkPurpose =
                      NODE_LINKS_MAP[activeNode.id]?.[targetId] || 'Synchronized coordination edge';
                    const isLinkActive = highlightedEdgeKey === edgeKey;

                    return (
                      <button
                        key={targetId}
                        onClick={() => {
                          setActiveNode(targetNode);
                          setIsCenterSelected(false);
                          setHighlightedEdgeKey(null);
                        }}
                        onMouseEnter={() => setHighlightedEdgeKey(edgeKey)}
                        onMouseLeave={() => setHighlightedEdgeKey(null)}
                        className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                          isLinkActive
                            ? 'border-[#5CE1E6] bg-[#5CE1E6]/15 shadow-sm'
                            : 'bg-white/[0.03] border-white/[0.10] hover:border-[#5CE1E6]/60 hover:bg-white/[0.07]'
                        }`}
                        title={`Inspect ${targetNode.label}`}
                      >
                        <div className="flex items-center justify-between w-full mb-1">
                          <span className="text-xs font-sans font-bold text-white flex items-center gap-1.5">
                            <span className="text-[#5CE1E6]">↔</span> {targetNode.label}
                          </span>
                          <ArrowUpRight className="w-3 h-3 text-[#5CE1E6]" />
                        </div>
                        <span className="text-[11px] text-white/70 leading-snug font-sans [word-spacing:0.03em] line-clamp-2">
                          {linkPurpose}
                        </span>
                      </button>
                    );
                  })}

                  {/* 8th Balancing Card: DigiSynq Nexus Core Protocol */}
                  <button
                    onClick={() => {
                      setIsCenterSelected(true);
                      setActiveNode(null);
                      setHighlightedEdgeKey(null);
                    }}
                    className="p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer bg-[#5CE1E6]/[0.08] border-[#5CE1E6]/35 hover:border-[#5CE1E6] hover:bg-[#5CE1E6]/18 group"
                    title="Inspect Central DigiSynq Nexus"
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="text-xs font-sans font-bold text-[#5CE1E6] flex items-center gap-1.5">
                        <span>⚡</span> DigiSynq Nexus
                      </span>
                      <ArrowUpRight className="w-3 h-3 text-[#5CE1E6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <span className="text-[11px] text-white/80 font-medium leading-snug font-sans [word-spacing:0.03em] line-clamp-2">
                      Primary protocol orchestration & consensus link
                    </span>
                  </button>
                </div>

                {/* Direct Cross-Section Navigation Actions */}
                <div className="mt-3 pt-3 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-2.5">
                  <div className="flex items-center gap-3">
                    <a
                      href="#audience-solutions"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#5CE1E6] hover:text-white transition-colors"
                    >
                      <span>Explore {activeNode.label} Solutions</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-white/25 hidden sm:inline">•</span>
                    <a
                      href="#product-directory"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white/70 hover:text-white transition-colors"
                    >
                      <span>Browse Products</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {onOpenRunbook && (
                    <button
                      onClick={() => onOpenRunbook(1)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#8B7CFF] hover:text-white transition-colors cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Deep Dive into 8-Node Topology (Chapter 02)</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            // Central DigiSynq Nexus Inspection State
            <motion.div
              key="center-nexus"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-4">
                  <div className="flex items-center gap-1.5 text-[#5CE1E6] text-xs font-mono tracking-wider mb-1 font-bold">
                    <Radio className="w-3.5 h-3.5" />
                    <span>Central Coordination Core</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-denton-extrabold font-extrabold text-white tracking-tight">
                    DigiSynq Protocol
                  </h4>
                  <span className="text-xs text-[#5CE1E6] font-mono font-bold block mt-0.5">
                    Operating Mechanism of the Entire Ecosystem
                  </span>
                </div>

                <div className="md:col-span-5 text-xs sm:text-sm text-white/80 leading-relaxed font-sans [word-spacing:0.04em]">
                  DigiSynq operates in the space between the ecosystem's nodes — synchronizing information, resources, and outcomes without owning the underlying physical assets.
                </div>

                <div className="md:col-span-3 flex md:justify-end">
                  <div className="rounded-xl bg-white/[0.04] border border-white/10 px-4 py-2.5 w-full md:w-auto text-left md:text-right backdrop-blur-xl">
                    <span className="text-[10px] font-mono tracking-widest text-white/50 block">
                      Coordination SLA
                    </span>
                    <span className="text-xs font-semibold text-[#5EF2B0] font-mono">
                      28/28 Full-Mesh Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Node Switcher Grid */}
              <div className="pt-3 border-t border-white/[0.06]">
                <span className="text-xs font-sans font-medium text-white/60 block mb-2.5">
                  Select any ecosystem node to inspect its specific bilateral links:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
                  {ECOSYSTEM_NODES.map((node) => (
                    <button
                      key={node.id}
                      onClick={() => {
                        setActiveNode(node);
                        setIsCenterSelected(false);
                      }}
                      className="p-2.5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[#5CE1E6]/50 hover:bg-[#5CE1E6]/10 text-center transition-all cursor-pointer"
                    >
                      <span className="text-xs font-sans font-bold text-white block truncate">
                        {node.label}
                      </span>
                      <span className="text-[10px] font-mono text-[#5CE1E6]">
                        {node.shortRole}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Direct Cross-Section Navigation Actions for Center Core */}
                <div className="mt-3 pt-3 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-2.5">
                  <div className="flex items-center gap-3">
                    <a
                      href="#platform-model"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#5CE1E6] hover:text-white transition-colors"
                    >
                      <span>Explore 7-Phase Operating Pipeline</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-white/25 hidden sm:inline">•</span>
                    <a
                      href="#digisynq-os"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white/70 hover:text-white transition-colors"
                    >
                      <span>View 10-Layer DigiSynq OS</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {onOpenRunbook && (
                    <button
                      onClick={() => onOpenRunbook(0)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#8B7CFF] hover:text-white transition-colors cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read Core Protocol Manifesto (Chapter 01)</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
