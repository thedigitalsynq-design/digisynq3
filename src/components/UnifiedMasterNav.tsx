import React, { useState } from 'react';
import { 
  Zap, Film, ShieldAlert, Sparkles, Network, 
  Search, Volume2, VolumeX, Menu, X, Bot, Activity
} from 'lucide-react';

export type OperatingLens = 'overview' | 'slate' | 'risk' | 'velocity' | 'ecosystem';

interface UnifiedMasterNavProps {
  currentLens: OperatingLens;
  onSelectLens: (lens: OperatingLens) => void;
  onOpenCommandPalette: () => void;
  onOpenCopilot: () => void;
  audioEnabled: boolean;
  onToggleAudio: () => void;
  moviesCount?: number;
}

export function UnifiedMasterNav({
  currentLens,
  onSelectLens,
  onOpenCommandPalette,
  onOpenCopilot,
  audioEnabled,
  onToggleAudio,
  moviesCount = 82
}: UnifiedMasterNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const lenses = [
    {
      id: 'overview' as OperatingLens,
      name: 'Mission Control',
      sub: 'Studio Pulse',
      icon: Zap,
      activeColor: 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10'
    },
    {
      id: 'slate' as OperatingLens,
      name: 'Theatrical Slate',
      sub: `Vault (${moviesCount})`,
      icon: Film,
      activeColor: 'text-amber-400 border-amber-500/40 bg-amber-500/10'
    },
    {
      id: 'risk' as OperatingLens,
      name: 'Risk & Crisis Ops',
      sub: 'War Room',
      icon: ShieldAlert,
      activeColor: 'text-red-400 border-red-500/40 bg-red-500/10'
    },
    {
      id: 'velocity' as OperatingLens,
      name: 'Cultural Velocity',
      sub: 'Social Engine',
      icon: Sparkles,
      activeColor: 'text-pink-400 border-pink-500/40 bg-pink-500/10'
    },
    {
      id: 'ecosystem' as OperatingLens,
      name: 'Ecosystem Graph',
      sub: '10 Nodes OS',
      icon: Network,
      activeColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10'
    }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#07080D]/95 backdrop-blur-xl border-b border-white/[0.08] transition-all">
      <div className="max-w-[1920px] mx-auto px-3 sm:px-6 h-14 flex items-center justify-between gap-3">
        
        {/* Brand & Studio Protocol */}
        <div className="flex items-center gap-3 shrink-0">
          <div 
            onClick={() => onSelectLens('overview')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 via-indigo-600 to-pink-500 p-[1.5px] shadow-lg shadow-cyan-500/10">
              <div className="w-full h-full bg-[#07080D] rounded-[6px] flex items-center justify-center overflow-hidden">
                <img src="/digisynq-logo.png" alt="DigiSynq" className="w-5 h-5 object-contain" onError={(e)=>{ (e.target as any).style.display='none'; }} />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold tracking-tight text-[15px] text-white group-hover:text-cyan-400 transition-colors">
                  DIGISYNQ
                </span>
                <span className="text-[10px] font-mono tracking-widest text-cyan-400/80 bg-cyan-950/60 px-1 py-0.2 rounded border border-cyan-800/40">
                  MATRIX
                </span>
              </div>
              <div className="flex items-center gap-1 text-[9px] font-mono text-white/40">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>CINEMA OPERATING SYSTEM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Operating Lenses (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 bg-[#101322]/80 p-1 rounded-xl border border-white/[0.06]">
          {lenses.map((lens) => {
            const Icon = lens.icon;
            const isActive = currentLens === lens.id;
            return (
              <button
                key={lens.id}
                onClick={() => onSelectLens(lens.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  isActive 
                    ? `${lens.activeColor} border shadow-sm` 
                    : 'text-white/60 hover:text-white hover:bg-white/[0.04] border border-transparent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'scale-110' : 'opacity-70'} transition-transform`} />
                <span>{lens.name}</span>
                <span className={`text-[10px] font-mono opacity-40 hidden xl:inline`}>
                  • {lens.sub}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Global Copilot & Actions */}
        <div className="flex items-center gap-2 shrink-0">
          
          {/* Ask Gemini AI Copilot Trigger */}
          <button
            onClick={onOpenCopilot}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/30 text-cyan-300 font-semibold text-xs transition-all cursor-pointer shadow-sm"
          >
            <Bot className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Copilot AI</span>
          </button>

          {/* Quick Search Ctrl+K Button */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-white/70 hover:text-white text-xs transition-all cursor-pointer"
            title="Search across all films, incidents, and tools"
          >
            <Search className="w-3.5 h-3.5 text-cyan-400" />
            <kbd className="hidden sm:inline px-1 py-0.2 text-[9px] font-mono bg-white/10 rounded text-white/50">
              Ctrl+K
            </kbd>
          </button>

          {/* Audio Telemetry Toggle */}
          <button
            onClick={onToggleAudio}
            className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-white/60 hover:text-white text-xs transition-all cursor-pointer"
            title={audioEnabled ? "Mute ambient audio" : "Enable ambient telemetry audio"}
          >
            {audioEnabled ? (
              <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-white/40" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-white/70"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-3 bg-[#0d0f18] border-b border-white/10 space-y-1">
          {lenses.map((lens) => {
            const Icon = lens.icon;
            const isActive = currentLens === lens.id;
            return (
              <button
                key={lens.id}
                onClick={() => {
                  onSelectLens(lens.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between p-2.5 rounded-lg text-sm transition-all ${
                  isActive ? `${lens.activeColor} border font-semibold` : 'text-white/70 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4" />
                  <span>{lens.name}</span>
                </div>
                <span className="text-xs text-white/40 font-mono">{lens.sub}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
