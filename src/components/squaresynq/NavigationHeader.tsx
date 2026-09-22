import { Volume2, VolumeX, Cpu, Network, BarChart3, HelpCircle, Layers, Sparkles, Compass, Bot } from 'lucide-react';
import { getAudioEnabled, setAudioEnabled, playPing } from '../../utils/audio';
import { useState } from 'react';
import { GrokbotMascot } from './GrokbotMascot';

interface NavigationHeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  systemMode: boolean;
  onToggleSystemMode: () => void;
  onOpenProjectModal: () => void;
}

export function NavigationHeader({
  currentTab,
  onSelectTab,
  systemMode,
  onToggleSystemMode,
  onOpenProjectModal
}: NavigationHeaderProps) {
  const [audioActive, setAudioActive] = useState(getAudioEnabled());

  const toggleSound = () => {
    const next = !audioActive;
    setAudioEnabled(next);
    setAudioActive(next);
    if (next) playPing(580, 'sine', 0.1, 0.05);
  };

  const navItems = [
    { id: 'grokbot', label: 'GROKBOT', icon: Bot, badge: 'SUPERGROK' },
    { id: 'map', label: 'FOOTPRINT MAP', icon: Network },
    { id: 'outcomes', label: 'WHAT CAN BE SYNQ’D', icon: Layers },
    { id: 'scan', label: 'SCAN FOOTPRINT', icon: Compass, badge: 'INTERACTIVE' },
    { id: 'scorecard', label: 'SCORECARD', icon: BarChart3 },
    { id: 'interventions', label: 'INTERVENTIONS', icon: Sparkles },
    { id: 'why', label: 'WHY SYNQ?', icon: HelpCircle },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#08090C]/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        
        {/* Brand identity */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            id="brand-logo-btn"
            onClick={() => {
              playPing(440, 'triangle', 0.08);
              onSelectTab('grokbot');
            }}
            className="group flex items-center gap-2.5 text-left focus:outline-none"
          >
            <GrokbotMascot size={32} mood="focused" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-base tracking-wider text-white">SYNQ-SQUARE</span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono tracking-widest bg-emerald-950/60 text-emerald-400 border border-emerald-800/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  GROK 4.6
                </span>
              </div>
              <p className="text-[10px] font-mono text-white/50 tracking-wider hidden sm:block">DIGITAL FOOTPRINT // SUPERGROK AGENT</p>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Items */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-mono">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id && !systemMode;
            return (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => {
                  playPing(480, 'sine', 0.05);
                  if (systemMode) onToggleSystemMode();
                  onSelectTab(item.id);
                }}
                className={`relative px-3 py-1.5 rounded-sm transition-all flex items-center gap-1.5 tracking-wider ${
                  isActive
                    ? 'text-white bg-white/10 border border-white/20 shadow-sm shadow-blue-500/10'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-0.5 px-1 py-0.2 text-[8px] bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-xs">
                    {item.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-blue-400" />
                )}
              </button>
            );
          })}
        </nav>

        {/* System Mode & Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Audio Feedback Toggle */}
          <button
            id="audio-toggle-btn"
            onClick={toggleSound}
            title={audioActive ? 'Mute Interface Sound' : 'Enable Subtle Acoustic Feedback'}
            className={`p-2 rounded-sm border transition-colors ${
              audioActive
                ? 'border-blue-500/40 bg-blue-500/10 text-blue-300'
                : 'border-white/10 bg-white/5 text-white/40 hover:text-white/80'
            }`}
          >
            {audioActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* System Mode Switch */}
          <button
            id="system-mode-toggle-btn"
            onClick={() => {
              playPing(systemMode ? 380 : 640, 'triangle', 0.09);
              onToggleSystemMode();
            }}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm border text-xs font-mono tracking-wider transition-all ${
              systemMode
                ? 'bg-amber-500/15 border-amber-500/50 text-amber-300 shadow-sm shadow-amber-500/20'
                : 'bg-white/5 border-white/10 text-white/70 hover:border-white/30 hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">SYSTEM MODE</span>
            <span className={`w-1.5 h-1.5 rounded-full ${systemMode ? 'bg-amber-400' : 'bg-white/30'}`} />
          </button>

          {/* Primary Synchronize Action */}
          <button
            id="header-synchronize-cta"
            onClick={() => {
              playPing(720, 'sine', 0.08);
              onOpenProjectModal();
            }}
            className="px-3 sm:px-4 py-1.5 bg-white text-black font-mono text-xs font-semibold tracking-wider hover:bg-neutral-200 transition-all active:scale-95 flex items-center gap-1.5 shadow-sm"
          >
            <span>SYNCHRONIZE</span>
            <span className="hidden md:inline">FOOTPRINT</span>
          </button>
        </div>
      </div>

      {/* Mobile subnav row */}
      <div className="lg:hidden border-t border-white/5 overflow-x-auto py-2 px-3 flex items-center gap-1 scrollbar-none text-[11px] font-mono">
        {navItems.map((item) => {
          const isActive = currentTab === item.id && !systemMode;
          return (
            <button
              key={item.id}
              onClick={() => {
                playPing(480, 'sine', 0.05);
                if (systemMode) onToggleSystemMode();
                onSelectTab(item.id);
              }}
              className={`whitespace-nowrap px-2.5 py-1 rounded-sm transition-colors ${
                isActive
                  ? 'bg-white/15 text-white font-medium border border-white/20'
                  : 'text-white/60 hover:text-white bg-white/5'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </header>
  );
}
