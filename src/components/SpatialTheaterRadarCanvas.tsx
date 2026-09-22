import React, { useRef, useEffect, useState } from 'react';
import { soundFx } from '../lib/soundFx';
import { TextScramble } from './TextScramble';

interface CircuitNode {
  id: string;
  name: string;
  code: string;
  region: string;
  x: number; // normalized 0..1
  y: number; // normalized 0..1
  occupancy: number; // 0..100
  screens: number;
  revenueEst: string;
  sentiment: number; // -100..+100
  weather: string;
  isThreat: boolean;
}

const CIRCUITS: CircuitNode[] = [
  { id: 'del', name: 'Delhi NCR', code: 'DEL', region: 'North', x: 0.46, y: 0.22, occupancy: 78, screens: 840, revenueEst: '₹34.2 Cr', sentiment: 62, weather: 'Clear 29°C', isThreat: false },
  { id: 'bom', name: 'Mumbai MMR', code: 'BOM', region: 'West', x: 0.32, y: 0.52, occupancy: 82, screens: 920, revenueEst: '₹48.6 Cr', sentiment: 74, weather: 'Humid 28°C', isThreat: false },
  { id: 'hyd', name: 'Hyderabad', code: 'HYD', region: 'South / Telugu', x: 0.49, y: 0.62, occupancy: 89, screens: 780, revenueEst: '₹42.1 Cr', sentiment: 82, weather: 'Clear 30°C', isThreat: false },
  { id: 'blr', name: 'Bengaluru', code: 'BLR', region: 'South / Kannada', x: 0.47, y: 0.76, occupancy: 84, screens: 690, revenueEst: '₹31.4 Cr', sentiment: 76, weather: 'Pleasant 24°C', isThreat: false },
  { id: 'maa', name: 'Chennai', code: 'MAA', region: 'South / Tamil', x: 0.56, y: 0.78, occupancy: 91, screens: 810, revenueEst: '₹52.0 Cr', sentiment: 88, weather: 'Breezy 31°C', isThreat: false },
  { id: 'cok', name: 'Kochi', code: 'COK', region: 'South / Kerala', x: 0.42, y: 0.89, occupancy: 94, screens: 420, revenueEst: '₹19.2 Cr', sentiment: 92, weather: 'Light Rain 27°C', isThreat: false },
  { id: 'ccu', name: 'Kolkata', code: 'CCU', region: 'East', x: 0.78, y: 0.44, occupancy: 68, screens: 450, revenueEst: '₹14.8 Cr', sentiment: 58, weather: 'Overcast 30°C', isThreat: true },
];

export const SpatialTheaterRadarCanvas: React.FC<{ activeFilmTitle?: string }> = ({
  activeFilmTitle = 'Active Theatrical Run',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hoveredNode, setHoveredNode] = useState<CircuitNode | null>(null);
  const [selectedNode, setSelectedNode] = useState<CircuitNode>(CIRCUITS[1]); // BOM default
  const [sweepAngle, setSweepAngle] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let angle = 0;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // 1. Radar Grid & Range Rings
      const centerX = width * 0.5;
      const centerY = height * 0.55;
      const maxRadius = Math.min(width, height) * 0.45;

      ctx.save();

      // Outer boundary glow
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(centerX, centerY, maxRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Concentric range rings
      [0.25, 0.5, 0.75, 1].forEach((fraction) => {
        ctx.strokeStyle = fraction === 1 ? 'rgba(0, 240, 255, 0.25)' : 'rgba(0, 240, 255, 0.08)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.arc(centerX, centerY, maxRadius * fraction, 0, Math.PI * 2);
        ctx.stroke();
      });
      ctx.setLineDash([]);

      // Crosshairs
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.12)';
      ctx.beginPath();
      ctx.moveTo(centerX - maxRadius, centerY);
      ctx.lineTo(centerX + maxRadius, centerY);
      ctx.moveTo(centerX, centerY - maxRadius);
      ctx.lineTo(centerX, centerY + maxRadius);
      ctx.stroke();

      // 2. Rotating Radar Sweep Beam
      angle = (angle + 0.02) % (Math.PI * 2);
      setSweepAngle(angle);

      const sweepGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
      sweepGradient.addColorStop(0, 'rgba(0, 240, 255, 0.25)');
      sweepGradient.addColorStop(1, 'rgba(0, 240, 255, 0)');

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, maxRadius, angle - 0.35, angle);
      ctx.closePath();
      ctx.fillStyle = sweepGradient;
      ctx.fill();

      // 3. Connect circuit nodes with tactical signal vectors
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.1)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      CIRCUITS.forEach((node, idx) => {
        const nx = node.x * width;
        const ny = node.y * height;
        if (idx === 0) ctx.moveTo(nx, ny);
        else ctx.lineTo(nx, ny);
      });
      ctx.stroke();

      // 4. Draw Circuit Telemetry Nodes
      CIRCUITS.forEach((node) => {
        const nx = node.x * width;
        const ny = node.y * height;
        const isSelected = selectedNode?.id === node.id;
        const isHovered = hoveredNode?.id === node.id;

        // Pulsating beacon circle
        const pulseSize = 4 + Math.sin(Date.now() * 0.005 + node.occupancy) * 2;
        ctx.beginPath();
        ctx.arc(nx, ny, pulseSize + (isSelected ? 6 : 3), 0, Math.PI * 2);
        ctx.fillStyle = node.isThreat
          ? 'rgba(255, 69, 58, 0.3)'
          : isSelected
          ? 'rgba(0, 240, 255, 0.4)'
          : 'rgba(48, 209, 88, 0.2)';
        ctx.fill();

        // Core Dot
        ctx.beginPath();
        ctx.arc(nx, ny, isSelected ? 5 : 3.5, 0, Math.PI * 2);
        ctx.fillStyle = node.isThreat ? '#ff453a' : isSelected ? '#00f0ff' : '#30d158';
        ctx.fill();

        // City Code Label
        ctx.font = '10px "SF Mono", monospace';
        ctx.fillStyle = isSelected ? '#00f0ff' : isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.6)';
        ctx.fillText(node.code, nx + 8, ny + 3);
      });

      ctx.restore();

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationId);
  }, [selectedNode, hoveredNode]);

  // Handle canvas mouse move for interactive node detection
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) / rect.width;
    const my = (e.clientY - rect.top) / rect.height;

    let found: CircuitNode | null = null;
    for (const node of CIRCUITS) {
      const dx = node.x - mx;
      const dy = node.y - my;
      if (Math.sqrt(dx * dx + dy * dy) < 0.06) {
        found = node;
        break;
      }
    }
    setHoveredNode(found);
  };

  const handleCanvasClick = () => {
    if (hoveredNode) {
      soundFx.playRadarPing();
      setSelectedNode(hoveredNode);
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row gap-4 p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/20 shadow-2xl backdrop-blur-xl tactical-frame overflow-hidden">
      {/* Canvas Viewport */}
      <div className="relative flex-1 min-h-[300px] flex items-center justify-center bg-radial from-cyan-950/20 via-slate-950 to-slate-950 rounded-xl border border-white/5 overflow-hidden">
        {/* HUD Top Corner Telemetry */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-2 text-[10px] font-mono text-cyan-400/80">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          <span>SPATIAL RADAR MATRIX 7-CIRCUIT INGRESS</span>
        </div>

        <div className="absolute top-3 right-3 z-10 text-[10px] font-mono text-zinc-500">
          SWEEP: {(sweepAngle * (180 / Math.PI)).toFixed(0)}° RAD
        </div>

        <canvas
          ref={canvasRef}
          width={540}
          height={380}
          onMouseMove={handleMouseMove}
          onClick={handleCanvasClick}
          className="w-full h-auto max-h-[380px] cursor-crosshair"
        />

        {/* Floating tooltip on hover */}
        {hoveredNode && (
          <div
            className="absolute z-20 pointer-events-none p-2 rounded-lg bg-slate-900/90 border border-cyan-400 text-[11px] font-mono shadow-xl text-white"
            style={{
              left: `${hoveredNode.x * 80 + 10}%`,
              top: `${hoveredNode.y * 70}%`,
            }}
          >
            <div className="font-bold text-cyan-400">{hoveredNode.name}</div>
            <div className="text-emerald-400">Occupancy: {hoveredNode.occupancy}%</div>
            <div className="text-zinc-400">{hoveredNode.screens} Active Screens</div>
          </div>
        )}
      </div>

      {/* Selected Territory Tactical Telemetry Deck */}
      <div className="w-full md:w-80 flex flex-col justify-between p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-4">
        <div>
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div>
              <span className="text-[10px] uppercase font-mono text-zinc-400 tracking-wider">Active Territory</span>
              <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                <TextScramble text={selectedNode.name} />
                <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  {selectedNode.code}
                </span>
              </h3>
            </div>
            <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full font-bold ${
              selectedNode.isThreat ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
            }`}>
              {selectedNode.isThreat ? 'ATTENTION' : 'HEALTHY'}
            </span>
          </div>

          {/* Core Metrics Grid */}
          <div className="grid grid-cols-2 gap-2.5 mt-3 text-xs font-mono">
            <div className="p-2.5 rounded-lg bg-slate-950/80 border border-white/5">
              <span className="text-zinc-500 block text-[10px]">AVG OCCUPANCY</span>
              <span className="text-base font-bold text-emerald-400">{selectedNode.occupancy}%</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-950/80 border border-white/5">
              <span className="text-zinc-500 block text-[10px]">TERRITORY GROSS</span>
              <span className="text-base font-bold text-white">{selectedNode.revenueEst}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-950/80 border border-white/5">
              <span className="text-zinc-500 block text-[10px]">TRACKED SCREENS</span>
              <span className="text-sm font-semibold text-zinc-300">{selectedNode.screens} Shows/Day</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-950/80 border border-white/5">
              <span className="text-zinc-500 block text-[10px]">CIRCUIT WEATHER</span>
              <span className="text-sm font-semibold text-sky-400">{selectedNode.weather}</span>
            </div>
          </div>

          <div className="mt-3 p-3 rounded-lg bg-cyan-950/20 border border-cyan-500/30 text-[11px] font-mono text-cyan-200 leading-relaxed">
            Targeting <strong>{activeFilmTitle}</strong>: High evening multiplex demand detected. Single screens converting at +14% velocity.
          </div>
        </div>

        {/* Territory Quick Selector Pills */}
        <div>
          <span className="text-[10px] uppercase font-mono text-zinc-400 block mb-1.5">Select Hub</span>
          <div className="flex flex-wrap gap-1.5">
            {CIRCUITS.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedNode(c);
                }}
                className={`px-2 py-1 rounded text-[10px] font-mono font-bold transition-all ${
                  selectedNode.id === c.id
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                    : 'bg-slate-800 text-zinc-300 hover:bg-slate-700'
                }`}
              >
                {c.code}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
