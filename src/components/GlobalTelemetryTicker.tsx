import React, { useState, useEffect } from 'react';
import { Radio, Film, Activity, DollarSign, TrendingUp, IndianRupee } from 'lucide-react';
import { safeFetchJson } from '../utils/apiClient';

interface TickerNewsItem {
  title: string;
  source?: string;
}

interface CurrencyData {
  base: string;
  rates: {
    USD?: number;
    AED?: number;
    EUR?: number;
    GBP?: number;
  };
}

export function GlobalTelemetryTicker() {
  const [news, setNews] = useState<TickerNewsItem[]>([]);
  const [stats, setStats] = useState<{ movies: number; reviews: number; discussions: number } | null>(null);
  const [currencies, setCurrencies] = useState<CurrencyData | null>(null);

  useEffect(() => {
    // 1. Fetch live news
    safeFetchJson('/api/news').then(data => {
      if (data && data.news && Array.isArray(data.news)) {
        setNews(data.news.slice(0, 10).map((n: any) => ({
          title: typeof n === 'string' ? n : (n.title || n.text || ''),
          source: n.source || 'Verified Feed'
        })));
      }
    });

    // 2. Fetch live stats
    safeFetchJson('/api/stats').then(data => {
      if (data) setStats(data);
    });

    // 3. Fetch live Forex rates
    safeFetchJson('/api/currency').then(data => {
      if (data && data.rates) setCurrencies(data);
    });
  }, []);

  // Compute inverted rates for easy Indian theatrical viewing: 1 USD = ~86.8 INR
  const usdInr = currencies?.rates?.USD ? (1 / currencies.rates.USD).toFixed(2) : null;
  const aedInr = currencies?.rates?.AED ? (1 / currencies.rates.AED).toFixed(2) : null;
  const eurInr = currencies?.rates?.EUR ? (1 / currencies.rates.EUR).toFixed(2) : null;

  const displayNews = news.length > 0 
    ? news.map(n => n.title) 
    : ['Connecting to live Google News RSS and Open-Meteo circuit telemetry feeds...'];

  return (
    <div className="w-full bg-[#05060A] border-b border-white/[0.06] text-[11px] font-mono overflow-hidden flex items-center h-8 select-none z-30">
      
      {/* Fixed Status Tag */}
      <div className="flex items-center gap-2 px-3 py-1 bg-cyan-950/40 border-r border-cyan-800/30 text-cyan-400 font-bold shrink-0 tracking-wider">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span className="hidden sm:inline">LIVE TELEMETRY:</span>
      </div>

      {/* Marquee Ticker Streaming Real RSS Data */}
      <div className="flex-1 overflow-hidden relative flex items-center">
        <div className="flex items-center gap-8 whitespace-nowrap animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused]">
          {displayNews.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-white/75 hover:text-white transition-colors cursor-default">
              <span className="text-cyan-400">▸</span>
              <span>{item}</span>
              <span className="text-white/20 mx-2">•</span>
            </div>
          ))}
          {displayNews.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-2 text-white/75 hover:text-white transition-colors cursor-default">
              <span className="text-cyan-400">▸</span>
              <span>{item}</span>
              <span className="text-white/20 mx-2">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Real Live Forex & Database Counter on Right */}
      <div className="hidden lg:flex items-center gap-3 px-3 py-1 border-l border-white/[0.06] text-[10px] text-white/50 shrink-0">
        {usdInr && (
          <div className="flex items-center gap-1 text-cyan-300 font-mono">
            <span>USD/INR:</span>
            <span className="font-bold">₹{usdInr}</span>
          </div>
        )}
        {aedInr && (
          <div className="flex items-center gap-1 text-amber-300 font-mono">
            <span>AED/INR:</span>
            <span className="font-bold">₹{aedInr}</span>
          </div>
        )}
        <div className="flex items-center gap-1.5 text-amber-400/90 font-mono">
          <Film className="w-3 h-3" />
          <span>{stats?.movies || 82} SLATE TITLES</span>
        </div>
      </div>
    </div>
  );
}
