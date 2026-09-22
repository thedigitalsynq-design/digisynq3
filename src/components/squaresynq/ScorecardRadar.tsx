import { useState } from 'react';
import { SCORECARD_DIMENSIONS } from '../../data/ecosystemData';
import { ScorecardDimension } from '../types';
import { playPing } from '../../utils/audio';
import { BarChart3, ArrowRight, ShieldCheck, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';

interface ScorecardRadarProps {
  onOpenProjectModal: (preselectedTopic?: string) => void;
}

export function ScorecardRadar({ onOpenProjectModal }: ScorecardRadarProps) {
  const [activeDimensionId, setActiveDimensionId] = useState<string>('VISIBILITY');
  const [userScores, setUserScores] = useState<Record<string, number>>({
    VISIBILITY: 65,
    CONSISTENCY: 50,
    DISCOVERABILITY: 40,
    CREDIBILITY: 70,
    CONVERSION: 55,
    CONNECTIVITY: 35
  });

  const activeDim = SCORECARD_DIMENSIONS.find(d => d.id === activeDimensionId) || SCORECARD_DIMENSIONS[0];

  const handleScoreChange = (dimId: string, val: number) => {
    setUserScores(prev => ({
      ...prev,
      [dimId]: val
    }));
  };

  // Radar polygon math for 6 dimensions (center at 200, 200, radius 140)
  const center = { x: 200, y: 200 };
  const maxRadius = 130;
  const numSides = SCORECARD_DIMENSIONS.length;

  const getCoordinates = (index: number, scorePercentage: number) => {
    const angle = (index * (360 / numSides) - 90) * (Math.PI / 180);
    const r = (scorePercentage / 100) * maxRadius;
    return {
      x: center.x + r * Math.cos(angle),
      y: center.y + r * Math.sin(angle)
    };
  };

  // Polygon points for User Estimate
  const userPolygonPoints = SCORECARD_DIMENSIONS.map((dim, i) => {
    const pt = getCoordinates(i, userScores[dim.id] || 50);
    return `${pt.x},${pt.y}`;
  }).join(' ');

  // Polygon points for Synchronized Benchmark
  const benchmarkPolygonPoints = SCORECARD_DIMENSIONS.map((dim, i) => {
    const pt = getCoordinates(i, dim.benchmarkScore);
    return `${pt.x},${pt.y}`;
  }).join(' ');

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="border-b border-white/10 pb-6 space-y-3">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-400">
          <BarChart3 className="w-3.5 h-3.5" />
          <span>EVALUATION FRAMEWORK // 6-DIMENSIONAL INTEGRITY</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              DIGITAL FOOTPRINT SCORECARD
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-2xl font-light mt-1">
              We reject arbitrary vanity scoring. SYNQ-SQUARE measures footprint resilience across six verifiable structural dimensions. Explore each dimension to evaluate your digital footprint.
            </p>
          </div>

          <button
            id="scorecard-understand-cta"
            onClick={() => {
              playPing(620, 'triangle', 0.08);
              onOpenProjectModal(`Scorecard Audit: ${activeDim.name}`);
            }}
            className="px-4 py-2 bg-white text-black font-mono text-xs font-bold tracking-wider hover:bg-neutral-200 transition-colors shrink-0 flex items-center gap-2"
          >
            <span>UNDERSTAND YOUR FOOTPRINT</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Grid: Interactive Radar + Dimension Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: 6-Dimension Radar Canvas & Dimension Selector */}
        <div className="lg:col-span-6 bg-[#0C0F17] p-6 rounded-sm border border-white/10 space-y-6">
          
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-white/60 tracking-wider">
              TOPOLOGICAL FOOTPRINT RADAR
            </span>
            <div className="flex items-center gap-4 text-[10px] font-mono">
              <span className="flex items-center gap-1 text-blue-400">
                <span className="w-2 h-2 bg-blue-500 rounded-xs" />
                SYNQ BENCHMARK
              </span>
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-2 h-2 bg-emerald-400 rounded-xs" />
                YOUR ESTIMATE
              </span>
            </div>
          </div>

          {/* SVG Radar Chart */}
          <div className="relative w-full max-w-[380px] mx-auto aspect-square flex items-center justify-center">
            <svg viewBox="0 0 400 400" className="w-full h-full select-none">
              
              {/* Concentric Guide Hexagons */}
              {[25, 50, 75, 100].map((level) => {
                const ringPts = SCORECARD_DIMENSIONS.map((_, i) => {
                  const pt = getCoordinates(i, level);
                  return `${pt.x},${pt.y}`;
                }).join(' ');
                return (
                  <polygon
                    key={level}
                    points={ringPts}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeWidth="1"
                    strokeDasharray={level === 100 ? undefined : '2 2'}
                  />
                );
              })}

              {/* Axis lines from center */}
              {SCORECARD_DIMENSIONS.map((_, i) => {
                const outer = getCoordinates(i, 100);
                return (
                  <line
                    key={i}
                    x1={center.x}
                    y1={center.y}
                    x2={outer.x}
                    y2={outer.y}
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Synchronized Benchmark Area */}
              <polygon
                points={benchmarkPolygonPoints}
                fill="rgba(59, 130, 246, 0.15)"
                stroke="#3B82F6"
                strokeWidth="1.5"
                strokeDasharray="4 2"
              />

              {/* User Dynamic Estimate Area */}
              <polygon
                points={userPolygonPoints}
                fill="rgba(16, 185, 129, 0.25)"
                stroke="#10B981"
                strokeWidth="2"
              />

              {/* Dimension Vertex Dots & Labels */}
              {SCORECARD_DIMENSIONS.map((dim, i) => {
                const pos = getCoordinates(i, 118);
                const isSelected = dim.id === activeDimensionId;
                return (
                  <g 
                    key={dim.id}
                    className="cursor-pointer"
                    onClick={() => {
                      playPing(460 + i * 30, 'sine', 0.05);
                      setActiveDimensionId(dim.id);
                    }}
                  >
                    <circle
                      cx={getCoordinates(i, userScores[dim.id] || 50).x}
                      cy={getCoordinates(i, userScores[dim.id] || 50).y}
                      r="4"
                      fill="#10B981"
                    />
                    <text
                      x={pos.x}
                      y={pos.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={isSelected ? '#60A5FA' : '#94A3B8'}
                      className={`font-mono text-[9px] font-bold tracking-widest uppercase transition-colors ${
                        isSelected ? 'fill-blue-400' : 'fill-white/60'
                      }`}
                    >
                      {dim.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Quick interactive sliders row */}
          <div className="space-y-3 pt-2 border-t border-white/10">
            <span className="font-mono text-[10px] text-white/40 block">
              ADJUST ESTIMATE SLIDER TO MODEL YOUR CURRENT DEFICIT:
            </span>
            <div className="grid grid-cols-2 gap-3">
              {SCORECARD_DIMENSIONS.map((dim) => (
                <div key={dim.id} className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className={dim.id === activeDimensionId ? 'text-blue-400 font-bold' : 'text-white/60'}>
                      {dim.name}
                    </span>
                    <span className="text-white/80">{userScores[dim.id]}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={userScores[dim.id] || 50}
                    onChange={(e) => handleScoreChange(dim.id, parseInt(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right: Active Dimension Deep Inspector */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="p-6 sm:p-8 rounded-sm bg-[#0C0F17] border border-white/10 space-y-6">
            
            {/* Dimension Title & Definition */}
            <div className="border-b border-white/10 pb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-blue-400 tracking-wider">
                  DIMENSION PROFILE
                </span>
                <span className="font-mono text-xs text-white/40">
                  BENCHMARK: {activeDim.benchmarkScore}%
                </span>
              </div>
              <h3 className="font-display font-bold text-3xl text-white">
                {activeDim.name}
              </h3>
              <p className="text-sm text-white/80 font-light mt-2 leading-relaxed">
                {activeDim.definition}
              </p>
            </div>

            {/* Measurement Criteria */}
            <div className="space-y-3">
              <span className="font-mono text-xs text-white/50 tracking-wider block">
                VERIFICATION CRITERIA (HOW SYNQ MEASURES THIS)
              </span>
              <div className="space-y-2">
                {activeDim.measurementCriteria.map((crit, idx) => (
                  <div 
                    key={idx}
                    className="p-3 bg-white/[0.02] border border-white/5 rounded-xs flex items-start gap-2.5 text-xs text-white/80"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{crit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison: Fragmented Signal vs Synchronized Signal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 bg-amber-950/20 border border-amber-500/30 rounded-xs space-y-2">
                <div className="flex items-center gap-1.5 text-amber-400 font-mono text-xs font-semibold">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>THE FRAGMENTED SIGNAL</span>
                </div>
                <p className="text-xs text-amber-200/80 leading-relaxed">
                  {activeDim.fragmentedSignal}
                </p>
              </div>

              <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xs space-y-2">
                <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>THE SYNCHRONIZED SIGNAL</span>
                </div>
                <p className="text-xs text-emerald-200/80 leading-relaxed">
                  {activeDim.synchronizedSignal}
                </p>
              </div>

            </div>

            {/* CTA action */}
            <div className="pt-2">
              <button
                onClick={() => {
                  playPing(640, 'triangle', 0.08);
                  onOpenProjectModal(`Benchmark: ${activeDim.name}`);
                }}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold rounded-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>EVALUATE {activeDim.name} IN YOUR STACK &rarr;</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
