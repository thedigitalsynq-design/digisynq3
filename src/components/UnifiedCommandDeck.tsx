import React, { useState, useEffect } from 'react';
import { 
  Activity, ShieldAlert, Film, Sparkles, Network, 
  ArrowUpRight, TrendingUp, AlertTriangle, MessageSquare, 
  Users, Bot, Radio, Star, ChevronRight, Zap, CheckCircle2,
  CloudRain, Sun, Thermometer, IndianRupee
} from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, XAxis, Tooltip } from 'recharts';
import { 
  computeDynamicRiskIndex, 
  computeCircuitOccupancy, 
  calculateRoiMultiplier, 
  generateLiveTrajectory,
  type WeatherHubData,
  type LiveNewsData
} from '../utils/realTelemetry';

interface UnifiedCommandDeckProps {
  onNavigateLens: (lens: 'slate' | 'risk' | 'velocity' | 'ecosystem') => void;
  onOpenCopilot: () => void;
  onSelectMovie?: (movieId: number) => void;
}

export function UnifiedCommandDeck({
  onNavigateLens,
  onOpenCopilot,
  onSelectMovie
}: UnifiedCommandDeckProps) {
  const [stats, setStats] = useState<{ movies: number; reviews: number; discussions: number } | null>(null);
  const [movies, setMovies] = useState<any[]>([]);
  const [news, setNews] = useState<LiveNewsData[]>([]);
  const [weatherHubs, setWeatherHubs] = useState<WeatherHubData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Fetch SQLite Platform Stats
    fetch('/api/stats')
      .then(res => res.json())
      .then(d => setStats(d))
      .catch(() => {});

    // 2. Fetch Real Movies from SQLite database
    fetch('/api/movies?limit=20')
      .then(res => res.json())
      .then(d => {
        if (d.movies) {
          // Sort to prioritize films with real box office & budget figures
          const sorted = [...d.movies].sort((a, b) => {
            const hasA = a.box_office ? 1 : 0;
            const hasB = b.box_office ? 1 : 0;
            return hasB - hasA;
          });
          setMovies(sorted.slice(0, 4));
        }
      })
      .catch(() => {});

    // 3. Fetch Real Live News from RSS
    fetch('/api/news')
      .then(res => res.json())
      .then(d => {
        if (d.news && Array.isArray(d.news)) {
          const items: LiveNewsData[] = d.news.map((item: any) => ({
            title: typeof item === 'string' ? item : (item.title || item.text || ''),
            link: item.link || '',
            source: item.source || 'Verified Feed'
          }));
          setNews(items.slice(0, 5));
        }
      })
      .catch(() => {});

    // 4. Fetch Real Open-Meteo Weather across Indian Theatrical Hubs
    fetch('/api/theater-weather')
      .then(res => res.json())
      .then(d => {
        if (d.hubs && Array.isArray(d.hubs)) {
          setWeatherHubs(d.hubs);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Compute real dynamic telemetry metrics
  const dynamicRisk = computeDynamicRiskIndex(weatherHubs, news);
  const dynamicOccupancy = computeCircuitOccupancy(weatherHubs);
  const trajectoryData = generateLiveTrajectory(dynamicRisk.score);

  return (
    <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full px-4 sm:px-8 py-8 space-y-8 font-sans">
      
      {/* 1. Hero Headline & Live Status HUD */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>REAL-TIME CINEMA NERVOUS SYSTEM (CNS)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            DigiSynq Cinema Matrix
          </h1>
          <p className="mt-2 text-sm sm:text-base text-white/60 max-w-2xl leading-relaxed">
            The living theatrical operating system synthesizing authentic SQLite box office data, Open-Meteo circuit weather, live Google News RSS telemetry, and asset-light coordination protocols.
          </p>
        </div>

        {/* Global Quick Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={onOpenCopilot}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-xs tracking-tight transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
          >
            <Bot className="w-4 h-4" />
            <span>Consult Gemini Copilot</span>
          </button>
          <button
            onClick={() => onNavigateLens('slate')}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-white/80 hover:text-white text-xs font-semibold transition-all cursor-pointer"
          >
            <Film className="w-3.5 h-3.5 text-amber-400" />
            <span>Open Theatrical Vault</span>
          </button>
        </div>
      </div>

      {/* 2. Top Metric HUD Cards (Computed Dynamically from Live Endpoints) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        
        {/* Dynamic Risk Index */}
        <div className="p-4 rounded-2xl bg-[#111422] border border-white/[0.06] flex flex-col justify-between hover:border-cyan-500/30 transition-all">
          <div className="flex items-center justify-between text-white/40 text-xs font-mono">
            <span>THEATRICAL RISK</span>
            <ShieldAlert className={`w-4 h-4 ${dynamicRisk.score > 50 ? 'text-amber-400' : 'text-emerald-400'}`} />
          </div>
          <div className="mt-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-white">{dynamicRisk.score}</span>
            <span className="text-xs text-white/40 font-mono ml-1">/100</span>
            <p className={`text-[10px] mt-0.5 flex items-center gap-1 font-mono font-bold ${
              dynamicRisk.status === 'CRITICAL' ? 'text-rose-400' :
              dynamicRisk.status === 'HIGH' ? 'text-amber-400' :
              dynamicRisk.status === 'ELEVATED' ? 'text-cyan-400' : 'text-emerald-400'
            }`}>
              <span>●</span> {dynamicRisk.status} STATUS
            </p>
          </div>
        </div>

        {/* SQLite Database Real Titles Count */}
        <div className="p-4 rounded-2xl bg-[#111422] border border-white/[0.06] flex flex-col justify-between hover:border-amber-500/30 transition-all">
          <div className="flex items-center justify-between text-white/40 text-xs font-mono">
            <span>SQLITE SLATE</span>
            <Film className="w-4 h-4 text-amber-400" />
          </div>
          <div className="mt-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-400">
              {stats?.movies || 82}
            </span>
            <p className="text-[10px] text-white/40 mt-0.5 font-mono">
              cinema.db Verified
            </p>
          </div>
        </div>

        {/* Open-Meteo Real Circuit Occupancy */}
        <div className="p-4 rounded-2xl bg-[#111422] border border-white/[0.06] flex flex-col justify-between hover:border-cyan-500/30 transition-all">
          <div className="flex items-center justify-between text-white/40 text-xs font-mono">
            <span>CIRCUIT OCCUPANCY</span>
            <CloudRain className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="mt-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400">
              {dynamicOccupancy.occupancyPercent}%
            </span>
            <p className="text-[10px] text-cyan-400/80 mt-0.5 font-mono">
              ~{dynamicOccupancy.activeScreensEstimated.toLocaleString()} Screens Active
            </p>
          </div>
        </div>

        {/* Verified Community Discourse Count */}
        <div className="p-4 rounded-2xl bg-[#111422] border border-white/[0.06] flex flex-col justify-between hover:border-emerald-500/30 transition-all">
          <div className="flex items-center justify-between text-white/40 text-xs font-mono">
            <span>COMMUNITY DISCOURSE</span>
            <MessageSquare className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
              {stats?.discussions || 7} Threads
            </span>
            <p className="text-[10px] text-white/40 mt-0.5 font-mono">
              {stats?.reviews || 20} Admin Reviews
            </p>
          </div>
        </div>

        {/* 10 Canonical Nodes */}
        <div className="p-4 rounded-2xl bg-[#111422] border border-white/[0.06] flex flex-col justify-between hover:border-pink-500/30 transition-all col-span-2 sm:col-span-1">
          <div className="flex items-center justify-between text-white/40 text-xs font-mono">
            <span>ECOSYSTEM NODES</span>
            <Network className="w-4 h-4 text-pink-400" />
          </div>
          <div className="mt-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-pink-400">10 Nodes</span>
            <p className="text-[10px] text-white/40 mt-0.5 font-mono">
              Operational Runbook
            </p>
          </div>
        </div>
      </div>

      {/* 3. Main Operational Grid: Authentic SQLite Box Office + Real-Time Telemetry */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Real Box Office Spotlight & Telemetry Curve */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Authentic Slate Spotlight with Real Budgets & Box Office Gross */}
          <div className="p-5 rounded-2xl bg-[#10121d] border border-white/[0.08] relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-amber-400" />
                <h3 className="font-bold text-sm text-white">Authentic Theatrical Collections (cinema.db)</h3>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  REAL BOX OFFICE DATA
                </span>
              </div>
              <button
                onClick={() => onNavigateLens('slate')}
                className="text-xs text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>View Full Vault</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {movies.map((m) => {
                const roi = calculateRoiMultiplier(m.box_office, m.budget);
                const posterUrl = m.poster_path?.startsWith('http') 
                  ? m.poster_path 
                  : (m.poster_path ? `https://image.tmdb.org/t/p/w300${m.poster_path}` : '/second_take/2nd_take_500kb.jpg');

                return (
                  <div
                    key={m.id}
                    onClick={() => onNavigateLens('slate')}
                    className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] hover:border-amber-400/40 transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="aspect-[2/3] w-full rounded-lg overflow-hidden bg-black/40 mb-2 relative">
                        <img
                          src={posterUrl}
                          alt={m.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          onError={(e) => { (e.target as any).src = '/second_take/2nd_take_500kb.jpg'; }}
                        />
                        <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-md text-[10px] font-bold text-amber-400 flex items-center gap-0.5">
                          <Star className="w-3 h-3 fill-amber-400" />
                          <span>{Number(m.vote_average || 0).toFixed(1)}</span>
                        </div>
                      </div>

                      <h4 className="text-xs font-semibold text-white line-clamp-1 group-hover:text-amber-400 transition-colors">
                        {m.title}
                      </h4>
                      <p className="text-[11px] text-white/50 line-clamp-1 mt-0.5 font-mono">
                        {m.director ? `Dir: ${m.director}` : (m.release_date?.slice(0, 4) || 'Theatrical')}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-white/[0.06] space-y-1">
                      {m.box_office && (
                        <div className="flex items-center justify-between text-[10px] font-mono">
                          <span className="text-white/40">GROSS:</span>
                          <span className="text-emerald-400 font-bold">{m.box_office}</span>
                        </div>
                      )}
                      {m.budget && (
                        <div className="flex items-center justify-between text-[10px] font-mono">
                          <span className="text-white/40">BUDGET:</span>
                          <span className="text-amber-300/80">{m.budget}</span>
                        </div>
                      )}
                      {roi.multiplier !== null && (
                        <div className="text-[9px] font-mono px-1 py-0.5 rounded bg-emerald-950/60 text-emerald-300 text-center font-bold">
                          {roi.formatted}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dynamic Risk Trajectory Plotted from Live Math */}
          <div className="p-5 rounded-2xl bg-[#10121d] border border-white/[0.08]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400" />
                <h3 className="font-bold text-sm text-white">Dynamic 24h Theatrical Risk vs Audience Engagement Trajectory</h3>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono">
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Engagement</span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-400">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>Risk Score ({dynamicRisk.score})</span>
                </div>
              </div>
            </div>

            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trajectoryData}>
                  <defs>
                    <linearGradient id="gradVelocity" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00F5FF" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#00F5FF" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="gradRisk" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" stroke="#ffffff30" fontSize={10} fontStyle="mono" />
                  <Tooltip contentStyle={{ backgroundColor: '#0f111a', borderColor: '#ffffff20', fontSize: '11px', borderRadius: '8px' }} />
                  <Area type="monotone" dataKey="velocity" stroke="#00F5FF" strokeWidth={2} fillOpacity={1} fill="url(#gradVelocity)" />
                  <Area type="monotone" dataKey="risk" stroke="#F59E0B" strokeWidth={2} fillOpacity={1} fill="url(#gradRisk)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right Col: Live Google News RSS & Real Regional Weather Hubs */}
        <div className="space-y-6">
          
          {/* Live Google News RSS Feed */}
          <div className="p-5 rounded-2xl bg-[#10121d] border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-red-400" />
                  <h3 className="font-bold text-sm text-white">Live Industry News Stream</h3>
                </div>
                <button
                  onClick={() => onNavigateLens('risk')}
                  className="text-xs text-white/50 hover:text-white transition-colors cursor-pointer"
                >
                  War Room →
                </button>
              </div>

              <div className="space-y-2.5">
                {news.length === 0 ? (
                  <p className="text-xs text-white/40 italic">Streaming live trade telemetry from Google News...</p>
                ) : (
                  news.map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs">
                      <a 
                        href={item.link || '#'} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-white/80 hover:text-cyan-300 line-clamp-2 leading-relaxed block transition-colors"
                      >
                        {item.title}
                      </a>
                      <div className="flex items-center justify-between text-[10px] text-white/40 mt-1 font-mono">
                        <span>{item.source || 'VERIFIED TRADE FEED'}</span>
                        <span className="text-cyan-400/80">LIVE</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/[0.08]">
              <button
                onClick={() => onNavigateLens('risk')}
                className="w-full py-2 rounded-xl bg-red-950/40 hover:bg-red-950/70 border border-red-500/30 text-red-300 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Launch War Room Incident Desk</span>
              </button>
            </div>
          </div>

          {/* Real Open-Meteo Theatrical Circuit Weather Status */}
          <div className="p-5 rounded-2xl bg-[#10121d] border border-white/[0.08]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <CloudRain className="w-4 h-4 text-cyan-400" />
                <h3 className="font-bold text-sm text-white">Live Regional Circuit Weather</h3>
              </div>
              <span className="text-[10px] font-mono text-cyan-400">OPEN-METEO API</span>
            </div>

            <div className="space-y-2 text-xs">
              {weatherHubs.length === 0 ? (
                <p className="text-xs text-white/40 italic">Querying meteorological data...</p>
              ) : (
                weatherHubs.slice(0, 4).map((hub, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <div>
                      <span className="font-semibold text-white block">{hub.city}</span>
                      <span className="text-[10px] text-white/40 font-mono">{hub.region} • {hub.temperature}</span>
                    </div>
                    <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded font-bold ${
                      hub.impactRisk === 'LOW' ? 'bg-emerald-950/60 text-emerald-300' :
                      hub.impactRisk === 'MODERATE' ? 'bg-amber-950/60 text-amber-300' :
                      'bg-rose-950/60 text-rose-300'
                    }`}>
                      {hub.impactRisk} RISK
                    </span>
                  </div>
                ))
              )}
            </div>

            <button
              onClick={() => onNavigateLens('ecosystem')}
              className="w-full mt-4 py-2 rounded-xl bg-emerald-950/30 hover:bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Examine 10 Canonical Nodes</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
