import { useState, useEffect, useRef } from 'react';
import type { FormEvent } from 'react';
import { VoiceOrb, VoiceOrbState } from './VoiceOrb';
import { GrokbotMascot } from './GrokbotMascot';
import { playPing, playSynqChime, playNodeBlip } from '../../utils/audio';
import {
  Sparkles,
  Search,
  Terminal,
  Cpu,
  Globe,
  Layers,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Play,
  RotateCcw,
  Clock,
  ExternalLink,
  Code2,
  Database,
  Sliders,
  Send,
  Mic,
  Paperclip,
  Check,
  ChevronRight,
  Shield,
  Smartphone,
  Laptop,
  Maximize2,
  X,
  Volume2,
  VolumeX,
  Radio,
  Zap,
  Bot
} from 'lucide-react';

interface GrokbotStudioProps {
  onOpenProjectModal: (context?: string) => void;
  onNavigateToMap: () => void;
}

interface DemoThread {
  id: string;
  title: string;
  timestamp: string;
  tokens: string;
  preview: string;
  status: 'completed' | 'running' | 'scheduled';
}

export function GrokbotStudio({ onOpenProjectModal, onNavigateToMap }: GrokbotStudioProps) {
  // Navigation & Dropdowns
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [downloadMenuOpen, setDownloadMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Model & Agent controls
  const [selectedModel, setSelectedModel] = useState<'Grok 4.6' | 'Grok 4' | 'SuperGrok Think'>('Grok 4.6');
  const [deepSearchEnabled, setDeepSearchEnabled] = useState(true);
  const [thinkModeEnabled, setThinkModeEnabled] = useState(true);
  const [voiceModalOpen, setVoiceModalOpen] = useState(false);
  const [voiceOrbState, setVoiceOrbState] = useState<VoiceOrbState>('idle');
  const [voiceMuted, setVoiceMuted] = useState(false);

  // Interactive Console Arena
  const [activeThreadId, setActiveThreadId] = useState('thread-1');
  const [promptInput, setPromptInput] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionStep, setExecutionStep] = useState(3);
  const [thinkTraceOpen, setThinkTraceOpen] = useState(true);
  const [consoleTab, setConsoleTab] = useState<'browser' | 'terminal' | 'artifacts' | 'receipts'>('browser');

  // Terminal Sandbox Component State
  const [terminalCommands, setTerminalCommands] = useState<Array<{ cmd: string; output: string }>>([
    { cmd: 'grokbot status --cloud', output: 'INSTANCE: us-central-1a | CPU: 8 vCPU | RAM: 32GB | STATUS: ACTIVE' },
    { cmd: 'agent connect --all-tools', output: 'SUCCESS: Connected 14 tools (Slack, Linear, GitHub, Chromium, Bash)' }
  ]);
  const [terminalInput, setTerminalInput] = useState('');

  // Use Case Phone Simulator
  const [activeUseCase, setActiveUseCase] = useState<'research' | 'code' | 'brand' | 'ops'>('brand');

  // Pricing State
  const [pricingCycle, setPricingCycle] = useState<'monthly' | 'annual'>('annual');

  // Theme Toggle for Grok style
  const [themeMode, setThemeMode] = useState<'dark' | 'light'>('dark');

  // Scroll detection for sticky header hairline border
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Demo Threads list
  const demoThreads: DemoThread[] = [
    {
      id: 'thread-1',
      title: 'Autonomous Digital Footprint Crawl',
      timestamp: 'Just now',
      tokens: '142 tps',
      preview: 'Inspecting 12 channels, running Chromium, syncing live memory...',
      status: 'running'
    },
    {
      id: 'thread-2',
      title: 'Daily Competitor Price & Ad Tracker',
      timestamp: 'Today, 08:00 AM',
      tokens: 'Scheduled',
      preview: 'Scraped 4 competitor domains, posted summary to Slack #intel',
      status: 'completed'
    },
    {
      id: 'thread-3',
      title: 'Full-Stack App Code Refactoring',
      timestamp: 'Yesterday',
      tokens: '185 tps',
      preview: 'Cloned repository, fixed memory leaks, pushed Git branch',
      status: 'completed'
    },
    {
      id: 'thread-4',
      title: 'Zendesk & CRM Auto-Resolution',
      timestamp: 'Sep 15',
      tokens: 'Background',
      preview: 'Resolved 84 tier-1 tickets with verified customer receipts',
      status: 'scheduled'
    }
  ];

  // Handle running a prompt in the interactive console
  const handleExecutePrompt = (customPrompt?: string) => {
    const p = customPrompt || promptInput;
    if (!p.trim()) return;

    playPing(600, 'triangle', 0.08);
    setIsExecuting(true);
    setExecutionStep(1);
    setPromptInput('');

    // Step 1: Thinking
    setTimeout(() => {
      setExecutionStep(2);
      playPing(520, 'sine', 0.05);
    }, 1200);

    // Step 2: Computer Use / Tool Action
    setTimeout(() => {
      setExecutionStep(3);
      playPing(680, 'sine', 0.05);
    }, 2400);

    // Step 3: Finished
    setTimeout(() => {
      setIsExecuting(false);
      playSynqChime();
    }, 3600);
  };

  const handleTerminalSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const cmd = terminalInput.trim().toLowerCase();
    let output = '';

    if (cmd === 'help') {
      output = 'AVAILABLE: status, ls, run --audit, clear, mem --list, tools';
    } else if (cmd === 'status') {
      output = 'GROKBOT CLOUD: 4.6-omni | LATENCY: 18ms | TOOLS: 14/14 HEALTHY';
    } else if (cmd === 'ls') {
      output = 'workspace/  brand_guidelines.md  footprint_telemetry.json  routine.cron';
    } else if (cmd.includes('audit')) {
      output = 'STARTING AUDIT: Crawling 12 channels... Coherence score: 94.2% [SYNQ VERIFIED]';
    } else if (cmd === 'clear') {
      setTerminalCommands([]);
      setTerminalInput('');
      return;
    } else {
      output = `GROKBOT EXEC: Running "${cmd}" in persistent sandbox... complete.`;
    }

    playPing(480, 'sine', 0.03);
    setTerminalCommands(prev => [...prev, { cmd: terminalInput, output }]);
    setTerminalInput('');
  };

  return (
    <div className={`w-full min-h-screen ${themeMode === 'dark' ? 'bg-[#08090C] text-[#E2E8F0]' : 'bg-[#F8FAFC] text-[#0F172A]'} font-sans transition-colors duration-300`}>
      
      {/* 1. STICKY HEADER WITH BLUR BACKDROP & HAIRLINE BORDER */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 backdrop-blur-md ${
          themeMode === 'dark' 
            ? isScrolled ? 'bg-[#08090C]/90 border-b border-white/15 shadow-md shadow-black/40' : 'bg-[#08090C]/60 border-b border-white/5'
            : isScrolled ? 'bg-white/90 border-b border-black/10 shadow-sm' : 'bg-white/60 border-b border-black/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* Left: Brand + Mascot */}
          <div className="flex items-center gap-6">
            <div 
              onClick={() => {
                playPing(620, 'sine', 0.05);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <GrokbotMascot size={32} mood="focused" />
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-black text-lg tracking-tight text-white">
                  GROKBOT
                </span>
                <span className="font-mono text-[10px] text-blue-400 font-semibold px-1.5 py-0.2 bg-blue-500/10 border border-blue-500/20 rounded-xs">
                  SUPERGROK
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links with Morphing Dropdown Triggers */}
            <nav className="hidden md:flex items-center gap-1 font-sans text-xs">
              
              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`px-3 py-1.5 rounded-xs transition-colors flex items-center gap-1 font-medium ${
                    activeDropdown === 'products' ? 'text-white bg-white/10' : 'text-white/70 hover:text-white'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className="w-3.5 h-3.5 text-white/40" />
                </button>

                {activeDropdown === 'products' && (
                  <div className="absolute top-full left-0 mt-1 w-[460px] p-4 bg-[#0C0F17] border border-white/15 rounded-sm shadow-2xl space-y-3 animate-fadeIn">
                    <div className="grid grid-cols-2 gap-3">
                      
                      <div 
                        onClick={() => {
                          playPing(580, 'sine', 0.04);
                          setSelectedModel('Grok 4.6');
                          setActiveDropdown(null);
                        }}
                        className="p-3 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 rounded-xs cursor-pointer transition-all space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-display font-bold text-sm text-white">Grok 4.6 Omni</span>
                          <span className="text-[9px] font-mono px-1.5 py-0.5 bg-blue-500/20 text-blue-300 rounded-xs">FLAGSHIP</span>
                        </div>
                        <p className="text-[11px] text-white/60">
                          Autonomous computer-use agent with high token throughput.
                        </p>
                      </div>

                      <div 
                        onClick={() => {
                          playPing(640, 'triangle', 0.05);
                          setSelectedModel('SuperGrok Think');
                          setActiveDropdown(null);
                        }}
                        className="p-3 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 rounded-xs cursor-pointer transition-all space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-display font-bold text-sm text-white">Think Mode</span>
                          <span className="text-[9px] font-mono px-1.5 py-0.5 bg-purple-500/20 text-purple-300 rounded-xs">REASONING</span>
                        </div>
                        <p className="text-[11px] text-white/60">
                          Multi-stage chain-of-thought with self-correction.
                        </p>
                      </div>

                    </div>

                    {/* Live Voice Orb Preview Card in Dropdown */}
                    <div 
                      onClick={() => {
                        setVoiceModalOpen(true);
                        setActiveDropdown(null);
                      }}
                      className="p-3 bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-transparent border border-blue-500/30 rounded-xs flex items-center justify-between cursor-pointer hover:border-blue-400 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <VoiceOrb size={42} interactive={false} state="speaking" />
                        <div>
                          <div className="font-display font-bold text-xs text-white flex items-center gap-1.5">
                            <span>Grok Voice Orb</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          </div>
                          <p className="text-[10px] text-white/60">
                            Low-latency duplex voice mode with fluid canvas audio rendering.
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-blue-400 shrink-0" />
                    </div>
                  </div>
                )}
              </div>

              {/* Agents Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('agents')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`px-3 py-1.5 rounded-xs transition-colors flex items-center gap-1 font-medium ${
                    activeDropdown === 'agents' ? 'text-white bg-white/10' : 'text-white/70 hover:text-white'
                  }`}
                >
                  <span>Grokbot Agents</span>
                  <ChevronDown className="w-3.5 h-3.5 text-white/40" />
                </button>

                {activeDropdown === 'agents' && (
                  <div className="absolute top-full left-0 mt-1 w-80 p-3 bg-[#0C0F17] border border-white/15 rounded-sm shadow-2xl space-y-2 animate-fadeIn font-mono text-xs">
                    <div className="p-2 bg-white/5 hover:bg-white/10 rounded-xs cursor-pointer flex items-center gap-2.5">
                      <Globe className="w-4 h-4 text-blue-400" />
                      <div>
                        <div className="text-white font-bold text-xs">Browser Use Agent</div>
                        <div className="text-[10px] text-white/50">Full headless Chromium navigation & DOM inspection</div>
                      </div>
                    </div>
                    <div className="p-2 bg-white/5 hover:bg-white/10 rounded-xs cursor-pointer flex items-center gap-2.5">
                      <Terminal className="w-4 h-4 text-emerald-400" />
                      <div>
                        <div className="text-white font-bold text-xs">Cloud Computer & Bash</div>
                        <div className="text-[10px] text-white/50">Execute code, manage files, build pipelines</div>
                      </div>
                    </div>
                    <div className="p-2 bg-white/5 hover:bg-white/10 rounded-xs cursor-pointer flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-purple-400" />
                      <div>
                        <div className="text-white font-bold text-xs">Scheduled Routines</div>
                        <div className="text-[10px] text-white/50">Autonomous cron triggers that work while you sleep</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Pricing Link */}
              <button 
                onClick={() => {
                  const el = document.getElementById('grokbot-pricing-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3 py-1.5 rounded-xs text-white/70 hover:text-white transition-colors"
              >
                Pricing
              </button>

              {/* Sync Map Link */}
              <button 
                onClick={onNavigateToMap}
                className="px-3 py-1.5 rounded-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 font-mono"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>12-Node Map</span>
              </button>
            </nav>
          </div>

          {/* Right: Actions & Split Download CTA */}
          <div className="flex items-center gap-3">
            
            {/* Live Voice Trigger Button */}
            <button
              id="header-voice-orb-btn"
              onClick={() => {
                playPing(640, 'triangle', 0.08);
                setVoiceModalOpen(true);
              }}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xs bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono text-white transition-colors"
              title="Open Grok Voice Orb"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>VOICE ORB</span>
            </button>

            {/* Split Download / Launch Button */}
            <div className="relative">
              <div className="flex items-center rounded-xs overflow-hidden shadow-lg shadow-blue-500/10">
                <button
                  id="header-split-cta-primary"
                  onClick={() => {
                    playSynqChime();
                    onOpenProjectModal('SuperGrok Grokbot Launch');
                  }}
                  className="px-4 py-2 bg-white text-black font-sans text-xs font-bold hover:bg-neutral-200 transition-colors flex items-center gap-1.5"
                >
                  <Bot className="w-3.5 h-3.5 text-black" />
                  <span>Launch Grokbot</span>
                </button>

                <button
                  onClick={() => setDownloadMenuOpen(prev => !prev)}
                  className="px-2 py-2 bg-neutral-200 hover:bg-neutral-300 text-black border-l border-neutral-300 transition-colors"
                  title="Choose Platform"
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Split Dropdown Menu */}
              {downloadMenuOpen && (
                <div className="absolute right-0 top-full mt-1 w-52 p-2 bg-[#0E121B] border border-white/20 rounded-xs shadow-2xl font-mono text-xs space-y-1 z-50 animate-fadeIn">
                  <div className="px-2 py-1 text-[10px] text-white/40 uppercase tracking-widest border-b border-white/10">
                    GET GROKBOT FOR
                  </div>
                  <button 
                    onClick={() => {
                      setDownloadMenuOpen(false);
                      onOpenProjectModal('Download macOS');
                    }}
                    className="w-full text-left p-1.5 rounded hover:bg-white/10 text-white flex items-center justify-between"
                  >
                    <span>macOS (Apple Silicon)</span>
                    <span className="text-[10px] text-white/40">DMG</span>
                  </button>
                  <button 
                    onClick={() => {
                      setDownloadMenuOpen(false);
                      onOpenProjectModal('Download Windows');
                    }}
                    className="w-full text-left p-1.5 rounded hover:bg-white/10 text-white flex items-center justify-between"
                  >
                    <span>Windows 11 (x64)</span>
                    <span className="text-[10px] text-white/40">EXE</span>
                  </button>
                  <button 
                    onClick={() => {
                      setDownloadMenuOpen(false);
                      onOpenProjectModal('Download Linux');
                    }}
                    className="w-full text-left p-1.5 rounded hover:bg-white/10 text-white flex items-center justify-between"
                  >
                    <span>Linux AppImage</span>
                    <span className="text-[10px] text-white/40">v4.6</span>
                  </button>
                  <button 
                    onClick={() => {
                      setDownloadMenuOpen(false);
                      onOpenProjectModal('Web Cloud Instance');
                    }}
                    className="w-full text-left p-1.5 rounded hover:bg-white/10 text-blue-400 font-bold flex items-center justify-between border-t border-white/10 pt-1.5"
                  >
                    <span>Cloud Web Instance</span>
                    <span className="text-[10px] text-emerald-400">ONLINE</span>
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>
      </header>

      {/* 2. HERO SECTION WITH SCRIPTED & INTERACTIVE GROKBOT DEMO ARENA */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-16 space-y-8">
        
        {/* Eyebrow & Status Chips */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 font-mono text-[11px] text-blue-300">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>SUPERGROK // GROKBOT v4.6</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] text-white/70">
            <Cpu className="w-3 h-3 text-emerald-400" />
            <span>PERSISTENT CLOUD COMPUTER READY</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] text-white/70">
            <Sparkles className="w-3 h-3 text-purple-400" />
            <span>GOOGLE SANS FLEX TYPOGRAPHY</span>
          </div>
        </div>

        {/* Hero Title & Subtitle in Google Sans Flex */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.04]">
            Your persistent AI teammate on a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-200 to-white">cloud computer.</span>
          </h1>

          <p className="font-sans text-base sm:text-xl text-white/80 font-normal leading-relaxed max-w-3xl">
            Grokbot uses headless browser automation, bash terminal execution, persistent cross-thread memory, and 40+ tool connectors to carry out continuous, multi-step commercial work autonomously.
          </p>
        </div>

        {/* Quick Runnable Prompt Capsules */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <span className="text-white/40 text-[11px] mr-1">TRY SCRIPTED RUNS:</span>
          {[
            { label: '⚡ Crawl & Audit Digital Footprint', prompt: 'Audit my brand across 12 digital channels and report fragmentation leaks' },
            { label: '⚡ Continuous Competitor Intel', prompt: 'Schedule daily competitor pricing extraction from 4 competitor domains' },
            { label: '⚡ Slack & Linear Sync Routine', prompt: 'Sync unresolved customer issues from Zendesk into prioritized Linear tickets' },
            { label: '⚡ Launch Voice Session', isVoice: true }
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (item.isVoice) {
                  setVoiceModalOpen(true);
                } else {
                  handleExecutePrompt(item.prompt);
                }
              }}
              className="px-3 py-1.5 bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 hover:border-blue-400/60 rounded-xs text-white/80 hover:text-white transition-all"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* 3. INTERACTIVE GROKBOT DEMO ARENA (THE SIGNATURE COMPUTER-USE CONSOLE) */}
        <div className="relative w-full rounded-sm bg-[#0B0E14] border border-white/20 shadow-2xl overflow-hidden">
          
          {/* Top Console Bar */}
          <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-white/20">|</span>
              <div className="font-mono text-xs text-white/70 flex items-center gap-2">
                <span className="text-blue-400 font-semibold">grokbot@cloud-vm:</span>
                <span>~/workspace/routine</span>
              </div>
            </div>

            {/* Model & Runtime Indicator */}
            <div className="flex items-center gap-3 font-mono text-xs">
              <div className="flex items-center gap-1.5 px-2 py-0.5 bg-white/5 rounded-xs border border-white/10">
                <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                <span className="text-white/80">{selectedModel}</span>
              </div>
              <span className="text-white/40 text-[11px] hidden sm:inline">THROUGHPUT: 142 tok/s</span>
            </div>
          </div>

          {/* Console Body: Left Threads Sidebar + Main Work Arena */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px]">
            
            {/* Left Column: Threads Sidebar */}
            <div className="lg:col-span-4 border-r border-white/10 bg-black/30 p-4 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="font-mono text-[11px] text-white/50 tracking-wider">
                  ACTIVE SESSIONS & ROUTINES
                </span>
                <button 
                  onClick={() => {
                    playPing(560, 'sine', 0.04);
                    handleExecutePrompt('New session initialization');
                  }}
                  className="font-mono text-[10px] text-blue-400 hover:underline flex items-center gap-1"
                >
                  <span>+ NEW THREAD</span>
                </button>
              </div>

              <div className="space-y-2">
                {demoThreads.map((thread) => {
                  const isSelected = activeThreadId === thread.id;
                  return (
                    <div
                      key={thread.id}
                      onClick={() => {
                        playPing(500, 'sine', 0.03);
                        setActiveThreadId(thread.id);
                      }}
                      className={`p-3 rounded-xs border transition-all cursor-pointer space-y-1.5 ${
                        isSelected
                          ? 'bg-blue-950/40 border-blue-400 shadow-md text-white ring-1 ring-blue-400/40'
                          : 'bg-white/[0.02] border-white/10 text-white/60 hover:text-white hover:bg-white/[0.05]'
                      }`}
                    >
                      <div className="flex items-center justify-between font-mono text-[10px]">
                        <span className="text-white/40">{thread.timestamp}</span>
                        <span className={`px-1.5 py-0.2 rounded-xs uppercase text-[9px] ${
                          thread.status === 'running' ? 'bg-blue-500/20 text-blue-300' :
                          thread.status === 'completed' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-purple-500/20 text-purple-300'
                        }`}>
                          {thread.status}
                        </span>
                      </div>
                      <div className="font-display font-bold text-xs text-white truncate">
                        {thread.title}
                      </div>
                      <p className="text-[11px] text-white/50 leading-snug line-clamp-2">
                        {thread.preview}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Memory Context Pill */}
              <div className="p-3 bg-white/[0.02] border border-white/10 rounded-xs space-y-1.5 font-mono text-[11px]">
                <div className="flex items-center justify-between text-white/40 text-[10px]">
                  <span>CROSS-THREAD MEMORY</span>
                  <span className="text-emerald-400">42 FACTS ACTIVE</span>
                </div>
                <div className="flex flex-wrap gap-1 text-[10px]">
                  <span className="px-1.5 py-0.5 bg-white/5 rounded text-white/70">Brand Guidelines</span>
                  <span className="px-1.5 py-0.5 bg-white/5 rounded text-white/70">12 Channels</span>
                  <span className="px-1.5 py-0.5 bg-white/5 rounded text-white/70">Slack #ops</span>
                  <span className="px-1.5 py-0.5 bg-white/5 rounded text-white/70">Daily 08:00 AM</span>
                </div>
              </div>
            </div>

            {/* Right Column: Active Live Execution & Computer Use Stage */}
            <div className="lg:col-span-8 flex flex-col justify-between p-4 sm:p-6 space-y-4">
              
              {/* Top Viewport Navigation Tabs */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <button
                    onClick={() => setConsoleTab('browser')}
                    className={`px-3 py-1 rounded-xs transition-colors flex items-center gap-1.5 ${
                      consoleTab === 'browser' ? 'bg-blue-600 text-white font-semibold' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Live Browser Use</span>
                  </button>

                  <button
                    onClick={() => setConsoleTab('terminal')}
                    className={`px-3 py-1 rounded-xs transition-colors flex items-center gap-1.5 ${
                      consoleTab === 'terminal' ? 'bg-blue-600 text-white font-semibold' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Cloud Bash</span>
                  </button>

                  <button
                    onClick={() => setConsoleTab('artifacts')}
                    className={`px-3 py-1 rounded-xs transition-colors flex items-center gap-1.5 ${
                      consoleTab === 'artifacts' ? 'bg-blue-600 text-white font-semibold' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Artifacts</span>
                  </button>

                  <button
                    onClick={() => setConsoleTab('receipts')}
                    className={`px-3 py-1 rounded-xs transition-colors flex items-center gap-1.5 ${
                      consoleTab === 'receipts' ? 'bg-blue-600 text-white font-semibold' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    <Shield className="w-3.5 h-3.5" />
                    <span>Receipts</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setThinkTraceOpen(prev => !prev)}
                    className="font-mono text-[11px] text-purple-300 hover:text-purple-200 flex items-center gap-1 px-2 py-0.5 bg-purple-950/40 border border-purple-800/40 rounded-xs"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>{thinkTraceOpen ? 'Hide Think Trace' : 'Show Think Trace'}</span>
                  </button>
                </div>
              </div>

              {/* Expandable Chain-of-Thought / DeepSearch Reasoning Box */}
              {thinkTraceOpen && (
                <div className="p-3.5 bg-purple-950/20 border border-purple-500/30 rounded-xs space-y-2 font-mono text-xs text-purple-200">
                  <div className="flex items-center justify-between text-[11px] text-purple-400">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 animate-spin" />
                      <span>THINK MODE REASONING // 2.4s ELAPSED</span>
                    </span>
                    <span>18 SOURCES CONSULTED</span>
                  </div>
                  <p className="text-[11px] text-purple-200/90 leading-relaxed font-sans">
                    1. Formulated search query across 12 digital footprint dimensions.<br />
                    2. Detected disconnected telemetry between organic SEO ranking and ad landing UX.<br />
                    3. Launched Chromium headless runner to render real DOM & verify viewport latency.<br />
                    4. Synthesizing unified dispatch receipt.
                  </p>
                </div>
              )}

              {/* Console Main Stage Viewport */}
              <div className="flex-1 bg-black/50 border border-white/10 rounded-xs p-4 overflow-y-auto max-h-72 font-mono text-xs">
                
                {/* 1. Live Browser Stage */}
                {consoleTab === 'browser' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-white/5 rounded-xs border border-white/10 text-white/60 text-[11px]">
                      <div className="flex items-center gap-2">
                        <Globe className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-white">https://brand-footprint-target.com</span>
                      </div>
                      <span className="text-emerald-400 font-bold">STATUS 200 OK</span>
                    </div>

                    <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xs space-y-2">
                      <div className="flex items-center justify-between font-mono text-[10px] text-white/40">
                        <span>DOM EXTRACTION VIEWPORT</span>
                        <span>RES: 1440x900</span>
                      </div>
                      
                      {/* Step Progress Checklist */}
                      <div className="space-y-2 pt-2">
                        <div className="flex items-center gap-2 text-emerald-400">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span>Headless Chromium session initialized in persistent cloud sandbox</span>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-400">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span>Captured complete performance vitals & SEO metadata graph</span>
                        </div>
                        <div className="flex items-center gap-2 text-blue-400 animate-pulse">
                          <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                          <span>Evaluating brand coherence across Brand, Web, Search & Social</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Terminal Stage */}
                {consoleTab === 'terminal' && (
                  <div className="space-y-2">
                    {terminalCommands.map((tc, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="text-blue-400">
                          $ <span className="text-white">{tc.cmd}</span>
                        </div>
                        <div className="text-white/70 pl-3 leading-relaxed">
                          {tc.output}
                        </div>
                      </div>
                    ))}

                    <form onSubmit={handleTerminalSubmit} className="pt-2 flex items-center gap-2">
                      <span className="text-blue-400">$</span>
                      <input
                        type="text"
                        placeholder="Type 'help', 'status', 'audit', or bash command..."
                        value={terminalInput}
                        onChange={e => setTerminalInput(e.target.value)}
                        className="flex-1 bg-transparent text-white outline-none font-mono text-xs border-b border-white/20 focus:border-blue-400 py-1"
                      />
                    </form>
                  </div>
                )}

                {/* 3. Artifacts Stage */}
                {consoleTab === 'artifacts' && (
                  <div className="space-y-3">
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xs space-y-2">
                      <div className="flex items-center justify-between text-white font-bold">
                        <span>footprint_synthesis.json</span>
                        <span className="text-[10px] text-blue-400">GENERATED</span>
                      </div>
                      <pre className="text-[11px] text-emerald-300 overflow-x-auto p-2 bg-black/40 rounded">
{`{
  "brand": "SYNQ-SQUARE Target",
  "coherence_index": 96.4,
  "synchronized_nodes": ["Brand", "Web", "Search", "Social", "Data"],
  "unresolved_friction": "Ad spend redirect loop on mobile checkout",
  "autonomous_action_dispatched": true
}`}
                      </pre>
                    </div>
                  </div>
                )}

                {/* 4. Receipts Stage */}
                {consoleTab === 'receipts' && (
                  <div className="space-y-3">
                    <div className="p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xs space-y-1 text-emerald-200">
                      <div className="font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>CRYPTOGRAPHIC RUN RECEIPT #GROK-89214</span>
                      </div>
                      <p className="text-[11px] text-emerald-300/80">
                        Executed 4 autonomous routines. Validated on persistent cloud container. Zero manual oversight required.
                      </p>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Interactive Prompt Console */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-white/50">
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1.5 cursor-pointer text-white/80">
                      <input
                        type="checkbox"
                        checked={deepSearchEnabled}
                        onChange={e => setDeepSearchEnabled(e.target.checked)}
                        className="rounded accent-blue-500"
                      />
                      <span>DeepSearch (Web Live)</span>
                    </label>

                    <label className="flex items-center gap-1.5 cursor-pointer text-white/80">
                      <input
                        type="checkbox"
                        checked={thinkModeEnabled}
                        onChange={e => setThinkModeEnabled(e.target.checked)}
                        className="rounded accent-purple-500"
                      />
                      <span>Think Mode (CoT)</span>
                    </label>
                  </div>

                  <span className="text-white/40">Press [Enter] to dispatch</span>
                </div>

                {/* Prompt Input Box */}
                <div className="flex items-center gap-2 p-2 bg-white/5 border border-white/15 focus-within:border-blue-400 rounded-xs transition-colors">
                  <button
                    onClick={() => {
                      playPing(540, 'sine', 0.05);
                      setVoiceModalOpen(true);
                    }}
                    className="p-2 text-white/60 hover:text-white transition-colors"
                    title="Speak with Grokbot Voice Orb"
                  >
                    <Mic className="w-4 h-4 text-blue-400" />
                  </button>

                  <input
                    type="text"
                    placeholder="Ask Grokbot to browse, research, code, or schedule an autonomous routine..."
                    value={promptInput}
                    onChange={e => setPromptInput(e.target.value)}
                    onKeyDown={e => {
                      if (e.key === 'Enter') {
                        handleExecutePrompt();
                      }
                    }}
                    className="flex-1 bg-transparent text-white placeholder-white/40 outline-none font-sans text-xs sm:text-sm"
                  />

                  <button
                    onClick={() => handleExecutePrompt()}
                    disabled={isExecuting}
                    className={`px-4 py-2 rounded-xs font-mono text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isExecuting
                        ? 'bg-blue-900 text-blue-300'
                        : 'bg-white text-black hover:bg-neutral-200'
                    }`}
                  >
                    {isExecuting ? (
                      <>
                        <Sparkles className="w-3.5 h-3.5 animate-spin" />
                        <span>RUNNING...</span>
                      </>
                    ) : (
                      <>
                        <span>RUN</span>
                        <Send className="w-3 h-3" />
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 4. FOUR CORE FEATURE CARDS WITH REPLAYING ANIMATION LOOPS */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8 border-t border-white/10">
        <div className="space-y-2">
          <span className="font-mono text-xs text-blue-400 tracking-widest uppercase block">
            CORE CAPABILITIES // SUPERGROK ENGINE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            BUILT FOR WORK, NOT JUST CHAT.
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-2xl">
            Grokbot is backed by persistent computing infrastructure, giving your autonomous AI teammate real computer-use powers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Feature 1: Persistent Cloud Computer */}
          <div className="p-6 rounded-sm bg-[#0B0E14] border border-white/15 space-y-4 flex flex-col justify-between hover:border-blue-400/50 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xs bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                Persistent Cloud Computer
              </h3>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                Each bot lives on its own persistent virtual machine. It can download dependencies, inspect file trees, render headless browsers, and save output.
              </p>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-xs font-mono text-[10px] text-blue-300">
              ● ISOLATED RUNTIME: Linux VM<br />
              ● DISK: Persistent NVMe<br />
              ● NETWORK: Unrestricted egress
            </div>
          </div>

          {/* Feature 2: Deep Cross-Thread Memory */}
          <div className="p-6 rounded-sm bg-[#0B0E14] border border-white/15 space-y-4 flex flex-col justify-between hover:border-purple-400/50 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xs bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                Cross-Thread Memory
              </h3>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                Grokbot remembers prior sessions, brand voice guidelines, user preferences, and project credentials so you never repeat context twice.
              </p>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-xs font-mono text-[10px] text-purple-300">
              ● SEMANTIC RECALL: Vector Graph<br />
              ● RETENTION: Indefinite<br />
              ● PRIVACY: Fully encrypted
            </div>
          </div>

          {/* Feature 3: 40+ Pre-built Tool Connectors */}
          <div className="p-6 rounded-sm bg-[#0B0E14] border border-white/15 space-y-4 flex flex-col justify-between hover:border-emerald-400/50 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xs bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                40+ Tool Connectors
              </h3>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                Connect your workspace in one click: Slack, Linear, GitHub, Google Drive, Zendesk, Salesforce, Stripe, and custom REST webhooks.
              </p>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-xs font-mono text-[10px] text-emerald-300">
              ● OAUTH: Client-side secure<br />
              ● APIS: Multi-directional sync<br />
              ● CUSTOM TOOLS: Custom OpenAPI
            </div>
          </div>

          {/* Feature 4: Autonomous Scheduled Routines */}
          <div className="p-6 rounded-sm bg-[#0B0E14] border border-white/15 space-y-4 flex flex-col justify-between hover:border-amber-400/50 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xs bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                Scheduled Routines
              </h3>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                Configure background daemons that trigger on intervals or webhooks to crawl competitor prices, generate weekly digests, and dispatch notifications.
              </p>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-xs font-mono text-[10px] text-amber-300">
              ● TRIGGERS: Cron & Webhooks<br />
              ● EXECUTION: 24/7 autonomous<br />
              ● LOGS: Audit receipts
            </div>
          </div>

        </div>
      </section>

      {/* 5. USE-CASE PILLS & RESPONSIVE DEVICE/PHONE TRANSCRIPT SIMULATOR */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8 border-t border-white/10">
        <div className="space-y-2 text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs text-blue-400 tracking-widest uppercase block">
            PRACTICAL EXECUTION // FIELD APPLICATIONS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            TAILORED FOR EVERY COMMERCIAL MISSION.
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            Switch between use-cases to inspect how Grokbot handles real commercial operations on mobile and desktop.
          </p>
        </div>

        {/* Use-Case Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs">
          {[
            { id: 'brand', label: 'Continuous Brand Footprint Sync' },
            { id: 'research', label: 'Deep Market & Competitor Intel' },
            { id: 'code', label: 'Engineering & Full-Stack Automation' },
            { id: 'ops', label: 'Autonomous Customer & Helpdesk Ops' }
          ].map((uc) => (
            <button
              key={uc.id}
              onClick={() => {
                playPing(520, 'sine', 0.04);
                setActiveUseCase(uc.id as any);
              }}
              className={`px-4 py-2 rounded-xs border transition-all ${
                activeUseCase === uc.id
                  ? 'bg-blue-600 border-blue-400 text-white font-bold shadow-md shadow-blue-500/20'
                  : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
              }`}
            >
              {uc.label}
            </button>
          ))}
        </div>

        {/* Device Showcase (Phone Frame + Detailed Explainer) */}
        <div className="p-6 sm:p-10 rounded-sm bg-[#0A0D14] border border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Phone Mockup with Transcript */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[320px] rounded-3xl bg-black border-4 border-white/20 p-4 shadow-2xl space-y-3 relative overflow-hidden">
              
              {/* Phone Dynamic Island */}
              <div className="w-24 h-4 bg-white/10 rounded-full mx-auto mb-2" />

              {/* Phone App Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                  <GrokbotMascot size={24} mood="happy" />
                  <span className="font-display font-bold text-xs text-white">Grokbot Mobile</span>
                </div>
                <span className="font-mono text-[9px] text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded-xs">
                  ONLINE
                </span>
              </div>

              {/* Chat bubbles */}
              <div className="space-y-2 text-xs font-sans min-h-[280px]">
                <div className="p-2.5 rounded-2xl bg-white/10 text-white ml-6">
                  {activeUseCase === 'brand' && "Check my brand across Google, Meta, and X. Are our promotions aligned?"}
                  {activeUseCase === 'research' && "Compare pricing changes across our top 3 competitors this week."}
                  {activeUseCase === 'code' && "Refactor the authentication middleware and run regression tests."}
                  {activeUseCase === 'ops' && "Review 12 unresolved tickets in Zendesk and push resolution notes."}
                </div>

                <div className="p-2.5 rounded-2xl bg-blue-950/60 border border-blue-500/30 text-blue-100 mr-4 space-y-1.5 font-mono text-[11px]">
                  <div className="flex items-center gap-1.5 text-blue-300">
                    <Sparkles className="w-3 h-3 text-blue-400" />
                    <span>Grokbot 4.6 (Reasoning...)</span>
                  </div>
                  <p className="text-white/80 font-sans text-xs">
                    {activeUseCase === 'brand' && "I audited all 12 channels. Instagram was promoting an expired offer. I updated the copy, confirmed live inventory, and logged the receipt."}
                    {activeUseCase === 'research' && "Extracted pricing tables from 3 competitors. Competitor B reduced tier 2 pricing by 15%. I compiled a 2-page brief in Notion."}
                    {activeUseCase === 'code' && "Cloned repo, updated JWT verification, ran test suite: 42 passed, 0 failed. Pushed branch `fix/auth-leak`."}
                    {activeUseCase === 'ops' && "Analyzed tickets: 9 were refund inquiries matching policy. Auto-approved refunds and drafted escalation briefs for the remaining 3."}
                  </p>
                </div>
              </div>

              {/* Mobile Input Pill */}
              <div className="p-2 bg-white/10 rounded-full flex items-center justify-between text-xs text-white/50 px-3">
                <span>Message Grokbot...</span>
                <Mic className="w-3.5 h-3.5 text-white/60" />
              </div>

            </div>
          </div>

          {/* Right Column: Deep Explanation */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">
                MISSION SPECIFICATION // {activeUseCase.toUpperCase()}
              </span>
              <h3 className="font-display font-black text-2xl sm:text-4xl text-white">
                {activeUseCase === 'brand' && 'Synchronize Your Complete Footprint'}
                {activeUseCase === 'research' && 'Real-time Autonomous Market Intelligence'}
                {activeUseCase === 'code' && 'Full-Stack Developer on Persistent Sandbox'}
                {activeUseCase === 'ops' && 'Zero-Touch Customer Support Workflows'}
              </h3>
            </div>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-sans">
              Unlike chat-only LLMs that only generate text, Grokbot executes actions directly in the cloud. It signs into systems securely, navigates web interfaces, creates tickets, and alerts you only when human confirmation is needed.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3 bg-white/[0.03] border border-white/10 rounded-xs space-y-1">
                <span className="text-white/40 text-[10px] uppercase">ESTIMATED TIME SAVED</span>
                <span className="text-emerald-400 font-bold text-sm">~18 hours / week</span>
              </div>
              <div className="p-3 bg-white/[0.03] border border-white/10 rounded-xs space-y-1">
                <span className="text-white/40 text-[10px] uppercase">VERIFIED ACCURACY</span>
                <span className="text-blue-300 font-bold text-sm">99.4% with receipts</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  playSynqChime();
                  onOpenProjectModal(`Engage Grokbot for ${activeUseCase}`);
                }}
                className="px-6 py-3 bg-white text-black font-sans text-xs font-bold rounded-xs hover:bg-neutral-200 transition-colors flex items-center gap-2"
              >
                <span>DEPLOY THIS WORKFLOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. ROLLING-DIGIT PRICING CALCULATOR */}
      <section id="grokbot-pricing-section" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-8 border-t border-white/10">
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs text-blue-400 tracking-widest uppercase block">
            TRANSPARENT VALUE // NO SURPRISES
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            SIMPLE, PREDICTABLE PRICING.
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            Start free or upgrade to SuperGrok and Grokbot Enterprise with rolling-digit compute quotas.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="inline-flex items-center gap-2 p-1 bg-white/5 border border-white/15 rounded-xs font-mono text-xs">
            <button
              onClick={() => {
                playPing(480, 'sine', 0.04);
                setPricingCycle('monthly');
              }}
              className={`px-3 py-1.5 rounded-xs transition-colors ${
                pricingCycle === 'monthly' ? 'bg-white text-black font-bold' : 'text-white/60 hover:text-white'
              }`}
            >
              MONTHLY BILLING
            </button>
            <button
              onClick={() => {
                playPing(600, 'sine', 0.04);
                setPricingCycle('annual');
              }}
              className={`px-3 py-1.5 rounded-xs transition-colors flex items-center gap-1.5 ${
                pricingCycle === 'annual' ? 'bg-white text-black font-bold' : 'text-white/60 hover:text-white'
              }`}
            >
              <span>ANNUAL (SAVE 20%)</span>
              <span className="px-1 py-0.2 rounded bg-emerald-500 text-black text-[9px] font-bold">20% OFF</span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Free Tier */}
          <div className="p-8 rounded-sm bg-[#0B0E14] border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs text-white/50 block uppercase">TIER 01 // STARTER</span>
              <h3 className="font-display font-black text-2xl text-white">Free</h3>
              <div className="font-display font-extrabold text-4xl text-white">
                $0 <span className="font-mono text-xs text-white/50 font-normal">/ month</span>
              </div>
              <p className="text-xs text-white/70">
                Standard conversational access to Grok 4 with everyday search and reasoning.
              </p>

              <ul className="space-y-2 text-xs font-mono text-white/80 pt-4 border-t border-white/10">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                  <span>Grok 4 standard model</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                  <span>Standard web search</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                  <span>Community support</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenProjectModal('Free Starter Plan')}
              className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold rounded-xs transition-colors"
            >
              START FREE
            </button>
          </div>

          {/* SuperGrok Tier (Highlighted) */}
          <div className="p-8 rounded-sm bg-gradient-to-b from-blue-950/40 to-[#0A0D15] border-2 border-blue-400 flex flex-col justify-between space-y-6 relative shadow-xl shadow-blue-500/10">
            <div className="absolute -top-3 right-6 px-2.5 py-0.5 bg-blue-500 text-white font-mono text-[10px] font-bold rounded-xs">
              MOST POPULAR
            </div>

            <div className="space-y-4">
              <span className="font-mono text-xs text-blue-300 block uppercase">TIER 02 // SUPERGROK</span>
              <h3 className="font-display font-black text-2xl text-white">SuperGrok</h3>
              
              {/* Rolling-Digit Style Price */}
              <div className="font-display font-extrabold text-5xl text-white flex items-baseline gap-1">
                <span>{pricingCycle === 'annual' ? '$24' : '$30'}</span>
                <span className="font-mono text-xs text-white/60 font-normal">/ seat / mo</span>
              </div>

              <p className="text-xs text-white/80">
                Full power of Grok 4.6, DeepSearch, Think Mode, and real-time Voice Orb access.
              </p>

              <ul className="space-y-2 text-xs font-mono text-white/90 pt-4 border-t border-white/10">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                  <span>Grok 4.6 Omni Flagship model</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                  <span>Unlimited DeepSearch web queries</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                  <span>Think Mode chain-of-thought</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Interactive Voice Orb mode</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                  <span>Persistent cross-thread memory</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => {
                playSynqChime();
                onOpenProjectModal('SuperGrok Plan Subscription');
              }}
              className="w-full py-3 bg-white text-black font-sans text-xs font-bold rounded-xs hover:bg-neutral-200 transition-colors shadow-lg shadow-blue-500/20"
            >
              UPGRADE TO SUPERGROK
            </button>
          </div>

          {/* Grokbot Pro / Enterprise */}
          <div className="p-8 rounded-sm bg-[#0B0E14] border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs text-purple-400 block uppercase">TIER 03 // GROKBOT PRO</span>
              <h3 className="font-display font-black text-2xl text-white">Grokbot Agent</h3>
              
              <div className="font-display font-extrabold text-5xl text-white flex items-baseline gap-1">
                <span>{pricingCycle === 'annual' ? '$80' : '$100'}</span>
                <span className="font-mono text-xs text-white/50 font-normal">/ seat / mo</span>
              </div>

              <p className="text-xs text-white/70">
                Persistent cloud virtual computer, headless browser use, scheduled cron daemons, and 40+ connectors.
              </p>

              <ul className="space-y-2 text-xs font-mono text-white/80 pt-4 border-t border-white/10">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-purple-400" />
                  <span>Everything in SuperGrok</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-purple-400" />
                  <span>Dedicated Cloud VM (Linux sandbox)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-purple-400" />
                  <span>Headless Chromium browser use</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-purple-400" />
                  <span>24/7 background scheduled routines</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-purple-400" />
                  <span>Full Slack, Linear, GitHub connectors</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenProjectModal('Grokbot Agent Enterprise')}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold rounded-xs transition-colors"
            >
              DEPLOY GROKBOT PRO
            </button>
          </div>

        </div>
      </section>

      {/* 7. INTERACTIVE VOICE MODE FULL-SCREEN / MODAL */}
      {voiceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#0C101A] border border-white/20 rounded-md p-8 shadow-2xl flex flex-col items-center space-y-8 text-center">
            
            {/* Close Button */}
            <button
              onClick={() => {
                playPing(340, 'triangle', 0.06);
                setVoiceModalOpen(false);
              }}
              className="absolute top-4 right-4 p-2 text-white/50 hover:text-white rounded-full bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-1">
              <div className="font-mono text-[11px] text-blue-400 uppercase tracking-widest flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>DUPLEX VOICE SESSION // GROK 4.6</span>
              </div>
              <h3 className="font-display font-black text-2xl text-white">
                Speak directly with Grokbot
              </h3>
            </div>

            {/* Main Interactive Voice Orb */}
            <div className="py-4">
              <VoiceOrb
                size={220}
                state={voiceOrbState}
                interactive={true}
                onStateChange={(nextState) => setVoiceOrbState(nextState)}
                showStatusBadge={true}
              />
            </div>

            {/* Transcript preview */}
            <div className="w-full p-3.5 bg-white/5 border border-white/10 rounded-xs font-mono text-xs text-white/70 text-left space-y-1">
              <div className="text-[10px] text-white/40 uppercase">LIVE SIMULATED TRANSCRIPT:</div>
              <p className="text-white/90 font-sans">
                {voiceOrbState === 'speaking' && '"I am currently auditing your 12 footprint channels. The SEO title tags are synchronized, but your mobile ad landing page has a 2.4s latency spike."'}
                {voiceOrbState === 'thinking' && 'Synthesizing voice response using neural speech synthesizer...'}
                {voiceOrbState === 'listening' && 'Listening to user voice input via Web Audio API...'}
                {voiceOrbState === 'idle' && 'Click the Voice Orb or speak to begin real-time duplex interaction.'}
              </p>
            </div>

            {/* Voice Controls */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => {
                  setVoiceMuted(prev => !prev);
                  playPing(440, 'sine', 0.04);
                }}
                className={`p-3 rounded-full border transition-colors ${
                  voiceMuted
                    ? 'bg-red-950/60 border-red-500 text-red-300'
                    : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                }`}
                title={voiceMuted ? 'Unmute' : 'Mute'}
              >
                {voiceMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>

              <button
                onClick={() => {
                  const states: VoiceOrbState[] = ['listening', 'thinking', 'speaking', 'idle'];
                  const next = states[(states.indexOf(voiceOrbState) + 1) % states.length];
                  setVoiceOrbState(next);
                }}
                className="px-6 py-2.5 bg-white text-black font-mono text-xs font-bold rounded-xs hover:bg-neutral-200 transition-colors"
              >
                CYCLE ORB STATE
              </button>

              <button
                onClick={() => setVoiceModalOpen(false)}
                className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-mono text-xs rounded-xs border border-white/20 transition-colors"
              >
                END CALL
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 8. GROK-STYLE OUTLINED FOOTER WITH MASCOT & THEME TOGGLE */}
      <footer className="w-full border-t border-white/10 py-12 px-4 sm:px-6 mt-16 bg-[#06080C] font-mono text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <GrokbotMascot size={28} mood="idle" />
            <div className="space-y-0.5">
              <div className="font-display font-black text-sm text-white">
                GROKBOT // SUPERGROK
              </div>
              <div className="text-[10px] text-white/50">
                Persistent AI Teammates on Cloud Infrastructure
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-white/60">
            <button 
              onClick={onNavigateToMap}
              className="hover:text-white transition-colors"
            >
              12-Node Footprint Map
            </button>
            <button 
              onClick={() => {
                const el = document.getElementById('grokbot-pricing-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => onOpenProjectModal('Footer Contact')}
              className="hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Operational Health Badge */}
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-xs text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/80">ALL SYSTEMS OPERATIONAL</span>
          </div>

        </div>
      </footer>

    </div>
  );
}
