import { useState } from 'react';
import { Flame, Music, Sparkles, Volume2, Copy, Check, TrendingUp, AlertCircle, ArrowRight } from 'lucide-react';
import { LIVE_TREND_RADAR, TrendingItem } from '../../data/socialAgencyData';
import { playPing, playSynqChime } from '../../utils/audio';

interface LiveTrendRadarProps {
  onOpenAuditModal: (context: string) => void;
}

export function LiveTrendRadar({ onOpenAuditModal }: LiveTrendRadarProps) {
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'sound' | 'hook_template' | 'visual_format' | 'meme_engine'>('ALL');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeAudioPlaying, setActiveAudioPlaying] = useState<string | null>(null);

  const filteredTrends = selectedFilter === 'ALL'
    ? LIVE_TREND_RADAR
    : LIVE_TREND_RADAR.filter(t => t.type === selectedFilter);

  const handleCopyHook = (id: string, text: string) => {
    playPing(587.33, 'triangle', 0.08);
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePlayAudioSimulation = (id: string) => {
    if (activeAudioPlaying === id) {
      setActiveAudioPlaying(null);
      return;
    }

    setActiveAudioPlaying(id);
    // Play upbeat rhythmic synth pattern
    playPing(330, 'triangle', 0.1);
    setTimeout(() => playPing(440, 'triangle', 0.1), 150);
    setTimeout(() => playPing(554.37, 'sine', 0.12), 300);
    setTimeout(() => playPing(659.25, 'triangle', 0.15), 450);
    setTimeout(() => setActiveAudioPlaying(null), 1800);
  };

  return (
    <section id="live-trend-radar" className="py-16 sm:py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Live Heartbeat Pulse */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE ALGORITHM PULSE // UPDATED HOURLY</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              24/7 TREND LAB & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                CULTURE JACKING RADAR.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-white/60 max-w-md">
            The algorithm rewards speed. We track audio velocity, hook formulas, and meme mechanics before they peak so your brand is always first, never late.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {[
            { id: 'ALL', label: 'All Trends' },
            { id: 'sound', label: 'Trending Audio' },
            { id: 'hook_template', label: 'Viral Hook Models' },
            { id: 'visual_format', label: 'Visual Styles' },
            { id: 'meme_engine', label: 'Meme Engines' }
          ].map((f) => {
            const isActive = selectedFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => {
                  playPing(440, 'sine', 0.04);
                  setSelectedFilter(f.id as any);
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-emerald-500 text-black font-bold shadow-lg shadow-emerald-500/20'
                    : 'bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Trends Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTrends.map((trend) => {
            const isPlaying = activeAudioPlaying === trend.id;
            return (
              <div
                key={trend.id}
                className="rounded-2xl bg-[#0B0D16] border border-white/10 hover:border-emerald-500/40 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl group"
              >
                <div>
                  {/* Top Badge & Velocity Indicator */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/5 border border-white/10 text-white/70 uppercase">
                      {trend.platform} • {trend.type.replace('_', ' ')}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                      trend.velocity.includes('EXPLOSIVE')
                        ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30'
                        : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    }`}>
                      {trend.velocity}
                    </span>
                  </div>

                  {/* Trend Name */}
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-white group-hover:text-emerald-300 transition-colors mb-2">
                    {trend.name}
                  </h3>

                  {/* Vibe / Mood */}
                  <p className="text-xs text-white/60 mb-4 font-mono">
                    Vibe: <span className="text-white/90">{trend.vibe}</span>
                  </p>

                  {/* Sound Preview Player (If Audio) */}
                  {trend.audioDuration && (
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-mono text-white/80">
                        <Music className="w-3.5 h-3.5 text-pink-400" />
                        <span>Duration: {trend.audioDuration}</span>
                      </div>
                      <button
                        onClick={() => handlePlayAudioSimulation(trend.id)}
                        className={`px-3 py-1 rounded-full text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                          isPlaying
                            ? 'bg-emerald-500 text-black animate-pulse'
                            : 'bg-white/10 hover:bg-white/20 text-white'
                        }`}
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>{isPlaying ? 'PLAYING...' : 'PREVIEW BEAT'}</span>
                      </button>
                    </div>
                  )}

                  {/* Viral Hook Example */}
                  <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 mb-4 text-xs text-white/90 italic relative">
                    <span className="text-[9px] font-mono font-bold text-emerald-400 block mb-1 uppercase tracking-wider not-italic">
                      Hook Blueprint:
                    </span>
                    "{trend.viralHookExample}"
                    
                    <button
                      onClick={() => handleCopyHook(trend.id, trend.viralHookExample)}
                      className="mt-2.5 inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 hover:text-emerald-300 transition-colors not-italic"
                    >
                      {copiedId === trend.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>COPIED TO CLIPBOARD!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>COPY HOOK SCRIPT</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Why It Works Algorithmic Logic */}
                  <p className="text-xs text-white/70 leading-relaxed mb-4">
                    <strong className="text-white">Algorithmic Driver:</strong> {trend.whyItWorks}
                  </p>

                  {/* Recommended Niches */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {trend.recommendedNiches.map((niche, i) => (
                      <span key={i} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-white/50 border border-white/5">
                        {niche}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <button
                  onClick={() => {
                    playSynqChime();
                    onOpenAuditModal(`Trend Application: ${trend.name}`);
                  }}
                  className="w-full mt-2 py-2 rounded-xl bg-white/5 hover:bg-emerald-500/20 text-xs font-mono font-semibold text-white/80 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/40 transition-all text-center"
                >
                  JACK THIS TREND FOR MY BRAND →
                </button>
              </div>
            );
          })}
        </div>

        {/* Real-Time Speed Guarantee */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-display">
                The SYNQ 4-Hour Trend SLA Guarantee
              </h4>
              <p className="text-xs text-white/60">
                When a high-velocity sound or meme breaches our radar, your brand gets a fully scripted and formatted response draft within 4 hours.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              playPing(500, 'triangle', 0.08);
              onOpenAuditModal('Trend SLA Ingestion');
            }}
            className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs font-mono transition-colors shrink-0"
          >
            ACTIVATE TREND MONITORING
          </button>
        </div>

      </div>
    </section>
  );
}
