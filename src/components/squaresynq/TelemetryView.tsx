import { useState, useEffect, useRef } from 'react';
import { 
  AreaChart, Area, LineChart, Line, BarChart, Bar, 
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend 
} from 'recharts';
import { 
  Activity, Zap, Server, Radio, RefreshCw, AlertTriangle, 
  CheckCircle2, Play, Pause, Filter, ShieldCheck, ArrowUpRight,
  TrendingDown, Cpu, Network, ArrowRight
} from 'lucide-react';
import { playPing } from '../../utils/audio';

interface TelemetryViewProps {
  onOpenProjectModal: (context?: string) => void;
}

interface TimePoint {
  time: string;
  webLatency: number;
  dataLatency: number;
  searchLatency: number;
  syncRate: number;
  inboundVolume: number;
  outboundVolume: number;
}

interface NodeMetric {
  node: string;
  name: string;
  syncHealth: number;
  latencyMs: number;
  deliveryRate: number;
  activeSockets: number;
  status: 'OPTIMAL' | 'SYNCING' | 'RE-INDEXING' | 'STREAMING';
  protocol: string;
}

interface TelemetryEvent {
  id: number;
  timestamp: string;
  sourceNode: string;
  targetNode: string;
  action: string;
  latency: string;
  status: 'OK' | 'WARN' | 'ROUTED';
}

const INITIAL_NODES: NodeMetric[] = [
  { node: '01', name: 'BRAND', syncHealth: 99.4, latencyMs: 8.2, deliveryRate: 99.9, activeSockets: 42, status: 'OPTIMAL', protocol: 'HTTP/3 Edge' },
  { node: '02', name: 'WEB', syncHealth: 99.8, latencyMs: 6.4, deliveryRate: 99.98, activeSockets: 184, status: 'OPTIMAL', protocol: 'TLS 1.3 / Edge' },
  { node: '03', name: 'SEARCH', syncHealth: 97.6, latencyMs: 14.8, deliveryRate: 99.2, activeSockets: 64, status: 'STREAMING', protocol: 'Schema gRPC' },
  { node: '04', name: 'SOCIAL', syncHealth: 98.1, latencyMs: 18.2, deliveryRate: 98.7, activeSockets: 112, status: 'STREAMING', protocol: 'OAuth2 Webhook' },
  { node: '05', name: 'CONTENT', syncHealth: 99.2, latencyMs: 11.0, deliveryRate: 99.6, activeSockets: 58, status: 'OPTIMAL', protocol: 'Headless CDN' },
  { node: '06', name: 'MARKETING', syncHealth: 98.8, latencyMs: 13.5, deliveryRate: 99.4, activeSockets: 94, status: 'STREAMING', protocol: 'Conversions API' },
  { node: '07', name: 'REPUTATION', syncHealth: 96.9, latencyMs: 22.4, deliveryRate: 98.1, activeSockets: 32, status: 'RE-INDEXING', protocol: 'Review Stream' },
  { node: '08', name: 'DATA', syncHealth: 99.9, latencyMs: 4.8, deliveryRate: 99.99, activeSockets: 240, status: 'OPTIMAL', protocol: 'Event Bus Kafka' },
  { node: '09', name: 'AUTOMATION', syncHealth: 99.5, latencyMs: 7.6, deliveryRate: 99.8, activeSockets: 128, status: 'OPTIMAL', protocol: 'Pub/Sub Webhooks' },
];

export function TelemetryView({ onOpenProjectModal }: TelemetryViewProps) {
  const [isLive, setIsLive] = useState(true);
  const [anomalyActive, setAnomalyActive] = useState(false);
  const [selectedNodeFilter, setSelectedNodeFilter] = useState<string>('ALL');
  const [nodes, setNodes] = useState<NodeMetric[]>(INITIAL_NODES);
  
  // Real-time time series data
  const [history, setHistory] = useState<TimePoint[]>(() => {
    const data: TimePoint[] = [];
    const now = Date.now();
    for (let i = 14; i >= 0; i--) {
      const t = new Date(now - i * 2000);
      const timeStr = `${t.getMinutes().toString().padStart(2, '0')}:${t.getSeconds().toString().padStart(2, '0')}`;
      data.push({
        time: timeStr,
        webLatency: +(6.5 + Math.random() * 2.5).toFixed(1),
        dataLatency: +(4.2 + Math.random() * 2.0).toFixed(1),
        searchLatency: +(12.0 + Math.random() * 4.5).toFixed(1),
        syncRate: +(98.5 + Math.random() * 1.4).toFixed(2),
        inboundVolume: Math.floor(2200 + Math.random() * 500),
        outboundVolume: Math.floor(2150 + Math.random() * 480)
      });
    }
    return data;
  });

  // Event stream
  const [events, setEvents] = useState<TelemetryEvent[]>([
    { id: 1, timestamp: 'T-0.2s', sourceNode: 'NODE::WEB', targetNode: 'EDGE::CACHE', action: 'SSR Edge render cache hit', latency: '4.8ms', status: 'OK' },
    { id: 2, timestamp: 'T-1.1s', sourceNode: 'NODE::DATA', targetNode: 'CORE::SYNQ', action: 'Attribution vector resolved', latency: '3.2ms', status: 'OK' },
    { id: 3, timestamp: 'T-2.4s', sourceNode: 'NODE::SEARCH', targetNode: 'INDEX::GSC', action: 'Schema structured graph revalidated', latency: '14.1ms', status: 'ROUTED' },
    { id: 4, timestamp: 'T-3.8s', sourceNode: 'NODE::MARKETING', targetNode: 'META::CAPI', action: 'Server-side CAPI event dispatched', latency: '12.8ms', status: 'OK' },
    { id: 5, timestamp: 'T-5.0s', sourceNode: 'NODE::AUTOMATION', targetNode: 'CRM::SYNC', action: 'Bi-directional lead webhook verified', latency: '6.9ms', status: 'OK' },
  ]);

  // Aggregate stats
  const avgLatency = +(history.reduce((acc, h) => acc + h.webLatency, 0) / (history.length || 1)).toFixed(1);
  const avgSync = +(history.reduce((acc, h) => acc + h.syncRate, 0) / (history.length || 1)).toFixed(2);
  const currentReqPerSec = history[history.length - 1]?.inboundVolume || 2400;

  // Real-time interval loop
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = `${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
      
      const spikeFactor = anomalyActive ? 2.8 : 1.0;
      const baseWeb = anomalyActive ? 22 : 7.2;
      const baseData = anomalyActive ? 14 : 4.6;
      const baseSearch = anomalyActive ? 28 : 13.8;

      const newPoint: TimePoint = {
        time: timeStr,
        webLatency: +(baseWeb + (Math.random() * 3 - 1.5) * spikeFactor).toFixed(1),
        dataLatency: +(baseData + (Math.random() * 2 - 1) * spikeFactor).toFixed(1),
        searchLatency: +(baseSearch + (Math.random() * 4 - 2) * spikeFactor).toFixed(1),
        syncRate: anomalyActive ? +(95.4 + Math.random() * 2).toFixed(2) : +(98.8 + Math.random() * 1.1).toFixed(2),
        inboundVolume: Math.floor((2300 + Math.random() * 600) * spikeFactor),
        outboundVolume: Math.floor((2240 + Math.random() * 580) * spikeFactor)
      };

      setHistory(prev => [...prev.slice(1), newPoint]);

      // Random event injection
      if (Math.random() > 0.4) {
        const sourceNodes = ['NODE::WEB', 'NODE::SEARCH', 'NODE::DATA', 'NODE::SOCIAL', 'NODE::AUTOMATION', 'NODE::MARKETING'];
        const actions = [
          'Edge token verified with TLS 1.3 session resumption',
          'First-party event log flushed to analytical warehouse',
          'Cross-node synchronization heartbeat acknowledged',
          'Robots schema crawl request handled at edge',
          'Ad pixel attribution signal reconciled with CRM',
          'Dynamic content bundle streamed with 0 cache misses'
        ];
        const sNode = sourceNodes[Math.floor(Math.random() * sourceNodes.length)];
        const act = actions[Math.floor(Math.random() * actions.length)];
        const lat = (Math.random() * 14 + 3).toFixed(1) + 'ms';

        setEvents(prev => [
          {
            id: Date.now(),
            timestamp: `T-${(Math.random() * 0.9 + 0.1).toFixed(1)}s`,
            sourceNode: sNode,
            targetNode: 'CORE::SYNQ',
            action: act,
            latency: lat,
            status: anomalyActive && Math.random() > 0.6 ? 'WARN' : 'OK'
          },
          ...prev.slice(0, 5)
        ]);
      }

      // Micro-jitter node metrics
      setNodes(prev => prev.map(n => ({
        ...n,
        latencyMs: +(Math.max(3, n.latencyMs + (Math.random() * 1.2 - 0.6))).toFixed(1),
        activeSockets: Math.max(20, n.activeSockets + Math.floor(Math.random() * 7 - 3))
      })));

    }, 1600);

    return () => clearInterval(interval);
  }, [isLive, anomalyActive]);

  const toggleAnomaly = () => {
    playPing(350, 'triangle', 0.1);
    setAnomalyActive(prev => !prev);
  };

  const handlePulseOptimization = () => {
    playPing(750, 'sine', 0.1);
    setAnomalyActive(false);
    setNodes(prev => prev.map(n => ({
      ...n,
      syncHealth: 99.9,
      latencyMs: +(n.latencyMs * 0.7).toFixed(1),
      status: 'OPTIMAL'
    })));
  };

  const filteredNodes = selectedNodeFilter === 'ALL' 
    ? nodes 
    : nodes.filter(n => n.name === selectedNodeFilter);

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Telemetry Control Bar */}
      <div className="p-4 rounded-sm bg-[#0C0F17] border border-cyan-500/30 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-cyan-950/40 border border-cyan-500/40 rounded-xs text-cyan-400 font-mono text-xs">
            <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-cyan-400 animate-ping' : 'bg-white/40'}`} />
            <span>{isLive ? 'REAL-TIME TELEMETRY FEED: STREAMING' : 'FEED PAUSED'}</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <button
              onClick={() => {
                playPing(isLive ? 400 : 600, 'sine', 0.05);
                setIsLive(!isLive);
              }}
              className="px-2.5 py-1 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xs text-white flex items-center gap-1.5 transition-colors"
            >
              {isLive ? <Pause className="w-3 h-3 text-amber-400" /> : <Play className="w-3 h-3 text-emerald-400" />}
              <span>{isLive ? 'PAUSE STREAM' : 'RESUME STREAM'}</span>
            </button>

            <button
              onClick={toggleAnomaly}
              className={`px-2.5 py-1 border rounded-xs flex items-center gap-1.5 transition-colors ${
                anomalyActive
                  ? 'bg-red-950/60 border-red-500 text-red-300 font-bold'
                  : 'bg-white/5 border-white/15 text-white/70 hover:text-white'
              }`}
            >
              <AlertTriangle className="w-3 h-3 text-amber-400" />
              <span>{anomalyActive ? 'RECOVER FROM TRAFFIC LOAD' : 'INJECT TRAFFIC SPIKE'}</span>
            </button>

            <button
              onClick={handlePulseOptimization}
              className="px-2.5 py-1 bg-blue-950/50 hover:bg-blue-900/50 border border-blue-500/40 rounded-xs text-blue-300 flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw className="w-3 h-3 text-blue-400" />
              <span>OPTIMIZE EDGE ROUTING</span>
            </button>
          </div>
        </div>

        {/* Global Key Vitals */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <div>
            <span className="text-white/40 text-[10px] block">AVG SYSTEM LATENCY</span>
            <span className="text-cyan-300 font-bold text-sm sm:text-base">{avgLatency} ms</span>
          </div>
          <div className="h-6 w-px bg-white/10" />
          <div>
            <span className="text-white/40 text-[10px] block">SYNC INTEGRITY</span>
            <span className="text-emerald-400 font-bold text-sm sm:text-base">{avgSync}%</span>
          </div>
          <div className="h-6 w-px bg-white/10" />
          <div>
            <span className="text-white/40 text-[10px] block">THROUGHPUT RATE</span>
            <span className="text-white font-bold text-sm sm:text-base">{currentReqPerSec} req/s</span>
          </div>
        </div>

      </div>

      {/* Grid: Charts Row 1 - Latency & Sync Stream */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* CHART 1: Real-Time Latency Time-Series (7 Cols) */}
        <div className="lg:col-span-7 bg-[#0B0E14] p-5 rounded-sm border border-white/10 space-y-4">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-xs font-bold text-white tracking-wider">
                  REAL-TIME NODE LATENCY (MS) OVER ROLLING WINDOW
                </span>
              </div>
              <p className="text-[11px] font-mono text-white/50 mt-0.5">
                Sub-millisecond edge transit times sampled across Web, Search, and Attribution conduits.
              </p>
            </div>

            <div className="flex items-center gap-3 text-[10px] font-mono shrink-0">
              <span className="flex items-center gap-1 text-cyan-400">
                <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                WEB
              </span>
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                DATA
              </span>
              <span className="flex items-center gap-1 text-amber-400">
                <span className="w-2 h-2 bg-amber-400 rounded-full" />
                SEARCH
              </span>
            </div>
          </div>

          {/* Recharts Area / Line */}
          <div className="w-full h-64 select-none">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={history} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorWeb" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22D3EE" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22D3EE" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorData" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorSearch" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.25}/>
                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="2 2" stroke="rgba(255, 255, 255, 0.05)" />
                <XAxis 
                  dataKey="time" 
                  stroke="rgba(255, 255, 255, 0.3)" 
                  tick={{ fontSize: 9, fill: 'rgba(255, 255, 255, 0.4)', fontFamily: 'JetBrains Mono' }} 
                />
                <YAxis 
                  stroke="rgba(255, 255, 255, 0.3)" 
                  tick={{ fontSize: 9, fill: 'rgba(255, 255, 255, 0.4)', fontFamily: 'JetBrains Mono' }}
                  unit="ms" 
                  domain={[0, 'auto']}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0C0F17', 
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                    borderRadius: '2px',
                    fontSize: '11px',
                    fontFamily: 'JetBrains Mono',
                    color: '#FFF'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="webLatency" 
                  name="Web Edge Latency" 
                  stroke="#22D3EE" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorWeb)" 
                  isAnimationActive={false}
                />
                <Area 
                  type="monotone" 
                  dataKey="dataLatency" 
                  name="Attribution Latency" 
                  stroke="#10B981" 
                  strokeWidth={1.5}
                  fillOpacity={1} 
                  fill="url(#colorData)" 
                  isAnimationActive={false}
                />
                <Area 
                  type="monotone" 
                  dataKey="searchLatency" 
                  name="Search Indexer Latency" 
                  stroke="#F59E0B" 
                  strokeWidth={1.5}
                  fillOpacity={1} 
                  fill="url(#colorSearch)" 
                  isAnimationActive={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5 font-mono text-[11px]">
            <div className="p-2 bg-white/[0.02] border border-white/5 rounded-xs">
              <span className="text-white/40 block text-[9px]">P50 LATENCY</span>
              <span className="text-cyan-400 font-bold">5.8 ms</span>
            </div>
            <div className="p-2 bg-white/[0.02] border border-white/5 rounded-xs">
              <span className="text-white/40 block text-[9px]">P95 LATENCY</span>
              <span className="text-white font-bold">14.2 ms</span>
            </div>
            <div className="p-2 bg-white/[0.02] border border-white/5 rounded-xs">
              <span className="text-white/40 block text-[9px]">PACKET LOSS RATE</span>
              <span className="text-emerald-400 font-bold">0.001%</span>
            </div>
          </div>

        </div>

        {/* CHART 2: Sync Coherence & Delivery Rate by Node (5 Cols) */}
        <div className="lg:col-span-5 bg-[#0B0E14] p-5 rounded-sm border border-white/10 space-y-4">
          
          <div className="border-b border-white/10 pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-xs font-bold text-white tracking-wider">
                  SYNC COHERENCE BY NODE (%)
                </span>
              </div>
              <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/40 px-1.5 py-0.5 rounded-xs border border-emerald-800/40">
                ACTIVE
              </span>
            </div>
            <p className="text-[11px] font-mono text-white/50 mt-0.5">
              Live measurement of cross-node data coherence and unified attribution.
            </p>
          </div>

          {/* Recharts Horizontal Bar */}
          <div className="w-full h-64 select-none">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={nodes} 
                layout="vertical"
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="2 2" stroke="rgba(255, 255, 255, 0.05)" horizontal={false} />
                <XAxis 
                  type="number" 
                  domain={[90, 100]} 
                  stroke="rgba(255, 255, 255, 0.3)" 
                  tick={{ fontSize: 9, fill: 'rgba(255, 255, 255, 0.4)', fontFamily: 'JetBrains Mono' }}
                  unit="%" 
                />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  stroke="rgba(255, 255, 255, 0.3)" 
                  tick={{ fontSize: 9, fill: 'rgba(255, 255, 255, 0.7)', fontFamily: 'JetBrains Mono' }}
                  width={65}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0C0F17', 
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                    borderRadius: '2px',
                    fontSize: '11px',
                    fontFamily: 'JetBrains Mono',
                    color: '#FFF'
                  }} 
                  formatter={(val) => [`${val}%`, 'Sync Coherence']}
                />
                <Bar 
                  dataKey="syncHealth" 
                  fill="#10B981" 
                  radius={[0, 2, 2, 0]}
                  isAnimationActive={false}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono pt-1 text-white/60">
            <span>LOWEST NODE: REPUTATION (96.9%)</span>
            <span className="text-emerald-400 font-bold">SYSTEM THRESHOLD: &gt;95%</span>
          </div>

        </div>

      </div>

      {/* Grid: Charts Row 2 - Node Connectivity Mesh & Ingest Volumes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* CHART 3: Inbound vs Outbound Data Volume (5 Cols) */}
        <div className="lg:col-span-5 bg-[#0B0E14] p-5 rounded-sm border border-white/10 space-y-4">
          
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <Network className="w-4 h-4 text-blue-400" />
                <span className="font-mono text-xs font-bold text-white tracking-wider">
                  DATA CONDUIT THROUGHPUT (REQ/S)
                </span>
              </div>
              <p className="text-[11px] font-mono text-white/50 mt-0.5">
                Simulated real-time ingest vs. synchronized outbound distribution.
              </p>
            </div>
            <span className="font-mono text-xs text-blue-400 font-bold">
              {currentReqPerSec} req/s
            </span>
          </div>

          <div className="w-full h-56 select-none">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={history} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
                <CartesianGrid strokeDasharray="2 2" stroke="rgba(255, 255, 255, 0.05)" />
                <XAxis 
                  dataKey="time" 
                  stroke="rgba(255, 255, 255, 0.3)" 
                  tick={{ fontSize: 9, fill: 'rgba(255, 255, 255, 0.4)', fontFamily: 'JetBrains Mono' }} 
                />
                <YAxis 
                  stroke="rgba(255, 255, 255, 0.3)" 
                  tick={{ fontSize: 9, fill: 'rgba(255, 255, 255, 0.4)', fontFamily: 'JetBrains Mono' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0C0F17', 
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                    borderRadius: '2px',
                    fontSize: '11px',
                    fontFamily: 'JetBrains Mono',
                    color: '#FFF'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="inboundVolume" 
                  name="Inbound Ingest" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="outboundVolume" 
                  name="Attribution Outflow" 
                  stroke="#A855F7" 
                  strokeWidth={2}
                  strokeDasharray="3 3"
                  dot={false}
                  isAnimationActive={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-white/50 border-t border-white/5 pt-2">
            <span className="flex items-center gap-1 text-blue-400">
              <span className="w-2 h-0.5 bg-blue-400 inline-block" /> INBOUND INGEST
            </span>
            <span className="flex items-center gap-1 text-purple-400">
              <span className="w-2 h-0.5 bg-purple-400 inline-block border-dashed" /> ATTRIBUTION OUTFLOW
            </span>
            <span className="text-emerald-400">0.00% QUEUE DROP</span>
          </div>

        </div>

        {/* NODE CONNECTIVITY & STATUS MATRIX (7 Cols) */}
        <div className="lg:col-span-7 bg-[#0B0E14] p-5 rounded-sm border border-white/10 space-y-4">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-amber-400" />
                <span className="font-mono text-xs font-bold text-white tracking-wider">
                  NODE CONNECTIVITY STATUS MATRIX
                </span>
              </div>
              <p className="text-[11px] font-mono text-white/50 mt-0.5">
                Verification status, socket density, and transport protocol across all 9 nodes.
              </p>
            </div>

            {/* Filter */}
            <div className="flex items-center gap-1 font-mono text-[10px]">
              <span className="text-white/40">FILTER:</span>
              {['ALL', 'WEB', 'DATA', 'SEARCH'].map(f => (
                <button
                  key={f}
                  onClick={() => setSelectedNodeFilter(f)}
                  className={`px-2 py-0.5 rounded-xs transition-colors ${
                    selectedNodeFilter === f 
                      ? 'bg-blue-600 text-white font-bold' 
                      : 'bg-white/5 text-white/60 hover:text-white'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Dense Interactive Node Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="border-b border-white/10 text-[10px] text-white/40 uppercase">
                  <th className="pb-2">NODE ID</th>
                  <th className="pb-2">NODE NAME</th>
                  <th className="pb-2">LATENCY</th>
                  <th className="pb-2">SYNC HEALTH</th>
                  <th className="pb-2">SOCKETS</th>
                  <th className="pb-2">PROTOCOL</th>
                  <th className="pb-2 text-right">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[11px]">
                {filteredNodes.map((n) => (
                  <tr key={n.node} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-2 text-white/40">{n.node}</td>
                    <td className="py-2 font-bold text-white flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>{n.name}</span>
                    </td>
                    <td className="py-2 text-cyan-300 font-semibold">{n.latencyMs} ms</td>
                    <td className="py-2">
                      <span className="text-emerald-400">{n.syncHealth}%</span>
                    </td>
                    <td className="py-2 text-white/60">{n.activeSockets} live</td>
                    <td className="py-2 text-white/50 text-[10px]">{n.protocol}</td>
                    <td className="py-2 text-right">
                      <span className={`px-2 py-0.5 rounded-xs text-[9px] font-bold ${
                        n.status === 'OPTIMAL' 
                          ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40' 
                          : n.status === 'RE-INDEXING'
                          ? 'bg-amber-950/60 text-amber-300 border border-amber-800/40'
                          : 'bg-blue-950/60 text-blue-300 border border-blue-800/40'
                      }`}>
                        {n.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>

      {/* Real-time Socket Event Log Console */}
      <div className="p-4 rounded-sm bg-[#080B10] border border-white/10 space-y-3 font-mono text-xs">
        
        <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] text-white/40">
          <div className="flex items-center gap-2">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="font-bold text-white/70">DISTRIBUTED CONDUIT EVENT STREAM</span>
            <span>// SOCKET BUS 0x8F4A</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-emerald-400">9/9 CONDUITS SYNCHRONIZED</span>
          </div>
        </div>

        <div className="space-y-1.5">
          {events.map((ev) => (
            <div 
              key={ev.id} 
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2 bg-white/[0.015] border border-white/5 rounded-xs text-[11px] text-white/80"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-white/40 text-[10px] shrink-0">{ev.timestamp}</span>
                <span className="text-cyan-400 font-semibold shrink-0">{ev.sourceNode}</span>
                <span className="text-white/30">&rarr;</span>
                <span className="text-blue-300 shrink-0">{ev.targetNode}</span>
                <span className="text-white/70 truncate">{ev.action}</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-cyan-300">{ev.latency}</span>
                <span className={`px-1.5 py-0.5 rounded-xs text-[9px] font-bold ${
                  ev.status === 'OK' 
                    ? 'bg-emerald-950/60 text-emerald-400' 
                    : ev.status === 'WARN'
                    ? 'bg-amber-950/60 text-amber-300'
                    : 'bg-blue-950/60 text-blue-300'
                }`}>
                  [{ev.status}]
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA in Telemetry */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/5">
          <span className="text-[10px] text-white/40">
            OBSERVABILITY MODEL: SYNQ ENTERPRISE TRACING & ATTRIBUTION
          </span>

          <button
            id="telemetry-audit-cta"
            onClick={() => {
              playPing(680, 'triangle', 0.08);
              onOpenProjectModal('System Telemetry Performance Audit');
            }}
            className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-xs font-bold rounded-xs transition-colors flex items-center justify-center gap-2 shadow-sm shadow-cyan-500/20"
          >
            <span>AUDIT YOUR STACK'S TELEMETRY & LATENCY</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
}
