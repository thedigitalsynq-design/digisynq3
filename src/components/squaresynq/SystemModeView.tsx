import { useState, useEffect } from 'react';
import { playPing, playSynqChime } from '../../utils/audio';
import { Cpu, ArrowRight, Zap, RefreshCw, Terminal, Activity, Database, Radio, Server, Network } from 'lucide-react';
import { TelemetryView } from './TelemetryView';

interface SystemModeViewProps {
  onExitSystemMode: () => void;
  onOpenProjectModal: (context?: string) => void;
  initialSubView?: 'telemetry' | 'pipeline';
}

interface SignalPacket {
  id: number;
  input: string;
  engineModule: string;
  output: string;
  status: 'routing' | 'processed';
}

export function SystemModeView({ onExitSystemMode, onOpenProjectModal, initialSubView = 'telemetry' }: SystemModeViewProps) {
  const [subView, setSubView] = useState<'telemetry' | 'pipeline'>(initialSubView);
  const [selectedInput, setSelectedInput] = useState<string>('Brand Assets');
  const [throughputCounter, setThroughputCounter] = useState(4820);
  const [packets, setPackets] = useState<SignalPacket[]>([
    { id: 1, input: 'Brand Identity Vector', engineModule: 'Design System Compiler', output: 'Headless Web Component', status: 'processed' },
    { id: 2, input: 'Organic Search Query', engineModule: 'Semantic Schema Broker', output: 'Top-1 Knowledge Panel citation', status: 'processed' },
    { id: 3, input: 'Anonymous Ad Click', engineModule: 'Server-side CDP Resolver', output: 'Real-time CRM Lead Record', status: 'routing' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setThroughputCounter(prev => prev + Math.floor(Math.random() * 15 - 7));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const inputs = [
    { name: 'Brand Assets', type: 'Vector / Identity / Voice', desc: 'Raw aesthetic & strategic equity' },
    { name: 'Content IP', type: 'Editorial / Media / Research', desc: 'Compounding knowledge assets' },
    { name: 'Data Signals', type: 'Telemetry / Event Logs / CRM', desc: 'First-party behavioral truth' },
    { name: 'Audience Intent', type: 'Search / Social / Referrals', desc: 'Inbound commercial curiosity' }
  ];

  const engineLayers = [
    { name: 'STRATEGY', code: 'ENG-STRAT', status: 'Active', desc: 'Topological positioning and category whitespace calculation.' },
    { name: 'DESIGN', code: 'ENG-DSGN', status: 'Active', desc: 'Mathematical layout systems, optical typography, responsive tokens.' },
    { name: 'TECHNOLOGY', code: 'ENG-TECH', status: 'Active', desc: 'Headless edge runtimes, schema graphs, automated webhooks.' },
    { name: 'MARKETING', code: 'ENG-MKTG', status: 'Active', desc: 'Intent-targeted auctions, retargeting sequence, conversion rate optimization.' }
  ];

  const outputs = [
    { name: 'Visibility', metric: '+340% Impressions', desc: 'Sovereign algorithmic and social real estate.' },
    { name: 'Engagement', metric: '64% Retention', desc: 'High-affinity relationships without churn.' },
    { name: 'Leads & Pipeline', metric: '3.4x Velocity', desc: 'Sub-minute qualified commercial opportunities.' },
    { name: 'Enterprise Growth', metric: 'Zero Ad Drag', desc: 'Compounding digital equity and LTV expansion.' }
  ];

  const injectSignal = (inputName: string) => {
    playPing(580, 'sine', 0.08);
    setSelectedInput(inputName);
    const newPacket: SignalPacket = {
      id: Date.now(),
      input: inputName,
      engineModule: engineLayers[Math.floor(Math.random() * engineLayers.length)].name,
      output: outputs[Math.floor(Math.random() * outputs.length)].name,
      status: 'routing'
    };
    setPackets(prev => [newPacket, ...prev.slice(0, 4)]);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8 animate-fadeIn bg-grid-tech">
      
      {/* System Status Header */}
      <div className="border-b border-white/15 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-amber-400 bg-amber-950/40 border border-amber-800/40 px-2.5 py-0.5 rounded-xs">
            <Cpu className="w-3.5 h-3.5 animate-spin" />
            <span>TECHNICAL SYSTEM ARCHITECTURE MODE // INFRASTRUCTURE ENGINE</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white">
            SYNQ DIGITAL OPERATING ENVIRONMENT
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-mono">
            {subView === 'telemetry' 
              ? 'REAL-TIME TELEMETRY METRICS // LATENCY, SYNC STATUS & NODE MESH' 
              : 'INPUT → SYNQ ENGINE → OUTPUT // CONTINUOUS OPERATIONAL DATA CONDUIT'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* SubView Mode Switcher */}
          <div className="flex items-center gap-1 p-1 bg-black/60 border border-white/15 rounded-xs font-mono text-xs">
            <button
              id="subview-telemetry-btn"
              onClick={() => {
                playPing(540, 'sine', 0.05);
                setSubView('telemetry');
              }}
              className={`px-3 py-1.5 rounded-xs flex items-center gap-1.5 transition-all ${
                subView === 'telemetry'
                  ? 'bg-cyan-500 text-black font-bold shadow-sm shadow-cyan-500/20'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>01 // TELEMETRY METRICS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </button>

            <button
              id="subview-pipeline-btn"
              onClick={() => {
                playPing(480, 'sine', 0.05);
                setSubView('pipeline');
              }}
              className={`px-3 py-1.5 rounded-xs flex items-center gap-1.5 transition-all ${
                subView === 'pipeline'
                  ? 'bg-amber-500 text-black font-bold shadow-sm shadow-amber-500/20'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Network className="w-3.5 h-3.5" />
              <span>02 // PIPELINE FLOW</span>
            </button>
          </div>

          <button
            id="exit-system-mode-btn"
            onClick={() => {
              playPing(400, 'triangle', 0.08);
              onExitSystemMode();
            }}
            className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 text-white font-mono text-xs rounded-xs border border-white/20 transition-colors"
          >
            RETURN TO MAP
          </button>

          <button
            id="deploy-infra-cta"
            onClick={() => {
              playPing(700, 'sine', 0.08);
              onOpenProjectModal('System Infrastructure Deployment');
            }}
            className="px-4 py-1.5 bg-amber-500 hover:bg-amber-400 text-black font-mono text-xs font-bold rounded-xs transition-colors flex items-center gap-2 shadow-md shadow-amber-500/20"
          >
            <span>DEPLOY INFRASTRUCTURE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Primary Sub-View Switching */}
      {subView === 'telemetry' ? (
        <TelemetryView onOpenProjectModal={onOpenProjectModal} />
      ) : (
        <div className="space-y-8 animate-fadeIn">
          {/* Real-Time Telemetry Bar for Pipeline */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
            <div className="p-3 bg-[#0C0F17] border border-white/10 rounded-xs space-y-1">
              <span className="text-white/40 text-[10px] block">THROUGHPUT CAPACITY</span>
              <div className="font-bold text-white text-base sm:text-lg flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span>{throughputCounter} req/sec</span>
              </div>
            </div>

            <div className="p-3 bg-[#0C0F17] border border-white/10 rounded-xs space-y-1">
              <span className="text-white/40 text-[10px] block">END-TO-END LATENCY</span>
              <div className="font-bold text-white text-base sm:text-lg flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>8.4 ms avg</span>
              </div>
            </div>

            <div className="p-3 bg-[#0C0F17] border border-white/10 rounded-xs space-y-1">
              <span className="text-white/40 text-[10px] block">ATTRIBUTION INTEGRITY</span>
              <div className="font-bold text-emerald-400 text-base sm:text-lg flex items-center gap-2">
                <Server className="w-4 h-4 text-emerald-400" />
                <span>99.98% True</span>
              </div>
            </div>

            <div className="p-3 bg-[#0C0F17] border border-white/10 rounded-xs space-y-1">
              <span className="text-white/40 text-[10px] block">ACTIVE NODE CONDUITS</span>
              <div className="font-bold text-amber-400 text-base sm:text-lg flex items-center gap-2">
                <Radio className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>9 / 9 Synced</span>
              </div>
            </div>
          </div>

          {/* 3 Column Architectural Engine Diagram: INPUT → SYNQ ENGINE → OUTPUT */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
            
            {/* COLUMN 1: INPUT */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="font-mono text-xs font-bold text-white tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 bg-white/40 rounded-xs" />
                  <span>01 // INPUT STREAM</span>
                </div>
                <span className="font-mono text-[10px] text-white/40">4 RAW INGESTS</span>
              </div>

              <div className="space-y-2.5">
                {inputs.map((inp, idx) => {
                  const isSelected = selectedInput === inp.name;
                  return (
                    <button
                      key={idx}
                      onClick={() => injectSignal(inp.name)}
                      className={`w-full text-left p-4 rounded-xs border transition-all ${
                        isSelected
                          ? 'bg-blue-950/40 border-blue-400 text-white shadow-md shadow-blue-500/10'
                          : 'bg-[#0B0D13] border-white/10 text-white/70 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display font-bold text-sm text-white">{inp.name}</span>
                        <span className="font-mono text-[9px] text-blue-400 border border-blue-900 bg-blue-950/50 px-1.5 py-0.5 rounded-xs">
                          INGEST
                        </span>
                      </div>
                      <div className="font-mono text-[10px] text-white/50 mt-1">{inp.type}</div>
                      <p className="text-xs text-white/60 font-sans mt-2">{inp.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* COLUMN 2: SYNQ ENGINE */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-amber-500/30">
                <div className="font-mono text-xs font-bold text-amber-300 tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-400 rounded-xs" />
                  <span>02 // SYNQ ENGINE CORES</span>
                </div>
                <span className="font-mono text-[10px] text-amber-400/80">SYNCHRONIZING</span>
              </div>

              <div className="space-y-2.5">
                {engineLayers.map((eng, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xs bg-[#0F131C] border border-amber-500/20 hover:border-amber-500/40 transition-colors space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-sm text-white tracking-wide">
                        {eng.name}
                      </span>
                      <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/40 px-1.5 py-0.5 rounded-xs border border-emerald-800/40">
                        {eng.code}
                      </span>
                    </div>
                    <p className="text-xs text-white/70 font-sans leading-relaxed">
                      {eng.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMN 3: OUTPUT */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-emerald-500/30">
                <div className="font-mono text-xs font-bold text-emerald-400 tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-xs" />
                  <span>03 // OUTPUT MANIFEST</span>
                </div>
                <span className="font-mono text-[10px] text-emerald-400/80">CONTINUOUS LIFT</span>
              </div>

              <div className="space-y-2.5">
                {outputs.map((out, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xs bg-[#0C1217] border border-emerald-500/20 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-sm text-white">{out.name}</span>
                      <span className="font-mono text-xs font-bold text-emerald-400">
                        {out.metric}
                      </span>
                    </div>
                    <p className="text-xs text-white/60 font-sans">{out.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Packet Stream Console Log */}
          <div className="p-4 rounded-sm bg-black/60 border border-white/10 space-y-2 font-mono text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-white/40 text-[10px]">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3 h-3 text-emerald-400" />
                LIVE TELEMETRY BUS LOGS
              </span>
              <span>CLICK ANY INPUT ABOVE TO TRIGGER NEW INGESTION CONDUIT</span>
            </div>

            <div className="space-y-1 text-[11px]">
              {packets.map((pkt) => (
                <div key={pkt.id} className="flex items-center justify-between gap-2 py-1 text-white/70 border-b border-white/5 last:border-0">
                  <span className="text-blue-400">{pkt.input}</span>
                  <span className="text-white/30">&rarr; [{pkt.engineModule}] &rarr;</span>
                  <span className="text-emerald-400 font-semibold">{pkt.output}</span>
                  <span className="text-white/40 text-[9px] uppercase">[{pkt.status}]</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
