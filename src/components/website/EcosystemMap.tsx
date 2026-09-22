import React, { useState, useRef, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { participants, CENTRAL_NODE, type Participant } from '../../data/website/participants';
import { Link } from 'react-router-dom';

interface EcosystemMapProps {
  onSelectParticipant?: (p: Participant | null) => void;
  size?: 'full' | 'compact';
}

const SVG_SIZE = 560;
const CENTER = SVG_SIZE / 2;
const ORBIT_RADIUS = 200;
const NODE_RADIUS = 30;
const CENTER_RADIUS = 44;

function polarToXY(angleDeg: number, radius: number) {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return {
    x: CENTER + radius * Math.cos(rad),
    y: CENTER + radius * Math.sin(rad),
  };
}

export function EcosystemMap({ onSelectParticipant, size = 'full' }: EcosystemMapProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [animating, setAnimating] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const activeParticipant = participants.find(p => p.id === activeId) || null;

  const handleNodeClick = (id: string) => {
    const newActive = activeId === id ? null : id;
    setActiveId(newActive);
    setAnimating(true);
    setTimeout(() => setAnimating(false), 300);
    onSelectParticipant?.(participants.find(p => p.id === newActive) || null);
  };

  useEffect(() => {
    if (activeId && panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeId]);

  const isActive = (id: string) => activeId === id;
  const isHovered = (id: string) => hoveredId === id;
  const isDimmed = (id: string) => activeId !== null && !isActive(id);

  return (
    <div className={`flex flex-col ${size === 'full' ? 'lg:flex-row' : ''} gap-8 items-start`}>

      {/* SVG Canvas */}
      <div className={`${size === 'full' ? 'lg:w-1/2' : 'w-full'} flex justify-center`}>
        <svg
          viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
          className="w-full max-w-md"
          role="img"
          aria-label="DigiSynq Ecosystem Map — click a participant to learn more"
        >
          <title>DigiSynq Ecosystem Map</title>

          {/* Background glow */}
          <defs>
            <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#5CE1E6" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#5CE1E6" stopOpacity="0" />
            </radialGradient>
            <filter id="node-shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Orbit ring */}
          <circle
            cx={CENTER} cy={CENTER} r={ORBIT_RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />

          {/* Connection lines */}
          {participants.map((p) => {
            const pos = polarToXY(p.angle, ORBIT_RADIUS);
            const active = isActive(p.id) || isHovered(p.id);
            return (
              <line
                key={`line-${p.id}`}
                x1={CENTER} y1={CENTER}
                x2={pos.x} y2={pos.y}
                stroke={active ? p.color : 'rgba(255,255,255,0.04)'}
                strokeWidth={active ? 1.5 : 0.75}
                strokeDasharray={active ? 'none' : '3 5'}
                className="transition-all duration-300"
                opacity={isDimmed(p.id) ? 0.15 : 1}
              />
            );
          })}

          {/* Animated signal dots on active lines */}
          {activeId && (() => {
            const p = participants.find(x => x.id === activeId);
            if (!p) return null;
            const pos = polarToXY(p.angle, ORBIT_RADIUS);
            const dx = pos.x - CENTER;
            const dy = pos.y - CENTER;
            return (
              <g>
                <circle r="3" fill="#5CE1E6" opacity="0.9">
                  <animateMotion
                    dur="1.5s"
                    repeatCount="indefinite"
                    path={`M${CENTER},${CENTER} L${pos.x},${pos.y}`}
                  />
                </circle>
              </g>
            );
          })()}

          {/* Center node — DIGISYNQ */}
          <g
            className="cursor-pointer"
            onClick={() => setActiveId(null)}
            role="button"
            aria-label="DigiSynq — The Coordination Layer"
          >
            <circle
              cx={CENTER} cy={CENTER}
              r={CENTER_RADIUS}
              fill="rgba(92,225,230,0.08)"
              stroke="rgba(92,225,230,0.4)"
              strokeWidth="1.5"
            />
            <circle
              cx={CENTER} cy={CENTER}
              r={CENTER_RADIUS + 8}
              fill="none"
              stroke="rgba(92,225,230,0.1)"
              strokeWidth="1"
            />
            <circle
              cx={CENTER} cy={CENTER}
              r={CENTER_RADIUS - 8}
              fill="rgba(92,225,230,0.06)"
              stroke="rgba(92,225,230,0.2)"
              strokeWidth="0.75"
            />
            <text x={CENTER} y={CENTER - 6} textAnchor="middle" fill="#5CE1E6" fontSize="9" fontFamily="monospace" fontWeight="700" letterSpacing="1.5">DIGISYNQ</text>
            <text x={CENTER} y={CENTER + 7} textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="monospace" letterSpacing="0.5">COORDINATION</text>
            <text x={CENTER} y={CENTER + 17} textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="monospace" letterSpacing="0.5">LAYER</text>
            {/* Pulse ring */}
            <circle cx={CENTER} cy={CENTER} r={CENTER_RADIUS + 16} fill="none" stroke="#5CE1E6" strokeWidth="0.5" opacity="0.3">
              <animate attributeName="r" values={`${CENTER_RADIUS + 8};${CENTER_RADIUS + 24};${CENTER_RADIUS + 8}`} dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Participant nodes */}
          {participants.map((p) => {
            const pos = polarToXY(p.angle, ORBIT_RADIUS);
            const active = isActive(p.id);
            const hovered = isHovered(p.id);
            const dimmed = isDimmed(p.id);

            return (
              <g
                key={p.id}
                className="ecosystem-node cursor-pointer"
                transform={`translate(${pos.x}, ${pos.y})`}
                onClick={() => handleNodeClick(p.id)}
                onMouseEnter={() => setHoveredId(p.id)}
                onMouseLeave={() => setHoveredId(null)}
                role="button"
                aria-label={`${p.name}: ${p.role}`}
                aria-pressed={active}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleNodeClick(p.id)}
              >
                <circle
                  r={NODE_RADIUS}
                  fill={active ? `${p.color}22` : 'rgba(9,11,20,0.9)'}
                  stroke={active || hovered ? p.color : 'rgba(255,255,255,0.1)'}
                  strokeWidth={active ? 2 : 1}
                  className="transition-all duration-200"
                  opacity={dimmed ? 0.3 : 1}
                />
                <text y={-6} textAnchor="middle" fill={dimmed ? 'rgba(255,255,255,0.2)' : 'white'} fontSize="14" className="transition-all">{p.icon}</text>
                <text y={8} textAnchor="middle" fill={active ? p.color : dimmed ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.7)'} fontSize="6.5" fontFamily="monospace" fontWeight="700" letterSpacing="0.5" className="transition-all">
                  {p.name.toUpperCase()}
                </text>
                {(active || hovered) && (
                  <circle r={NODE_RADIUS + 6} fill="none" stroke={p.color} strokeWidth="0.5" opacity="0.5">
                    <animate attributeName="r" values={`${NODE_RADIUS + 4};${NODE_RADIUS + 12};${NODE_RADIUS + 4}`} dur="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0;0.5" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Detail Panel */}
      <div
        ref={panelRef}
        className={`${size === 'full' ? 'lg:w-1/2' : 'w-full'} ${!activeParticipant ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-all duration-300`}
        aria-live="polite"
        aria-label="Selected participant details"
      >
        {activeParticipant ? (
          <div className="synq-card p-6 sm:p-8 space-y-6 border border-white/[0.07]" style={{ borderColor: `${activeParticipant.color}30` }}>
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${activeParticipant.color}15`, border: `1px solid ${activeParticipant.color}30` }}
                >
                  {activeParticipant.icon}
                </div>
                <div>
                  <h3 className="text-lg font-denton font-black text-white">{activeParticipant.name}</h3>
                  <p className="text-xs text-white/40 font-mono">{activeParticipant.role}</p>
                </div>
              </div>
              <button
                onClick={() => setActiveId(null)}
                className="p-1.5 rounded-lg border border-white/10 text-white/40 hover:text-white transition-colors shrink-0"
                aria-label="Close participant details"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm text-white/60 italic leading-relaxed">{activeParticipant.tagline}</p>

            {/* What they need */}
            <div>
              <div className="label-mono text-white/30 mb-3">What They Need</div>
              <ul className="space-y-2">
                {activeParticipant.what_they_need.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                    <span className="w-1 h-1 rounded-full bg-white/20 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What DigiSynq connects */}
            <div>
              <div className="label-mono mb-3" style={{ color: activeParticipant.color }}>How DigiSynq Connects</div>
              <ul className="space-y-2">
                {activeParticipant.what_digisynq_connects.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                    <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: activeParticipant.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* SYNQ path */}
            <div className="bg-[#0E1120] rounded-xl p-4">
              <div className="label-mono text-white/30 mb-2">SYNQ Path</div>
              <p className="text-xs font-mono text-white/50 leading-relaxed">{activeParticipant.synq_path}</p>
            </div>

            <Link
              to="/start"
              className="btn-secondary w-full justify-center text-[11px]"
              style={{ borderColor: `${activeParticipant.color}30`, color: activeParticipant.color }}
            >
              Start a {activeParticipant.name} SYNQ
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ) : (
          <div className="synq-card p-8 border border-white/[0.04] flex flex-col items-center justify-center gap-4 text-center min-h-[300px]">
            <div className="w-12 h-12 rounded-full bg-[#5CE1E6]/08 border border-[#5CE1E6]/20 flex items-center justify-center">
              <span className="text-[#5CE1E6] text-xl">⟡</span>
            </div>
            <div>
              <p className="text-sm text-white/50 mb-1">Click any node to explore</p>
              <p className="text-xs text-white/25 font-mono">Discover how DigiSynq connects each ecosystem participant</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
