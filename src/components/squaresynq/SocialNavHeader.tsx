import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Flame, Sparkles, Film, Users, Calculator, BookOpen, ArrowUpRight } from 'lucide-react';
import { getAudioEnabled, setAudioEnabled, playPing } from '../../utils/audio';

interface SocialNavHeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenAuditModal: (context?: string) => void;
}

export function SocialNavHeader({
  currentTab,
  onSelectTab,
  onOpenAuditModal
}: SocialNavHeaderProps) {
  const [soundOn, setSoundOn] = useState<boolean>(getAudioEnabled());
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setAudioEnabled(next);
    if (next) playPing(587.33, 'triangle', 0.08);
  };

  const navItems = [
    { id: 'work', label: 'WORK & REELS', icon: Film, badge: 'HOT' },
    { id: 'disciplines', label: 'SERVICES', icon: Sparkles },
    { id: 'trends', label: 'TREND RADAR', icon: Flame, badge: 'LIVE' },
    { id: 'creators', label: 'CREATOR FLEET', icon: Users },
    { id: 'calculator', label: 'ROI ESTIMATOR', icon: Calculator },
    { id: 'manifesto', label: 'MANIFESTO', icon: BookOpen }
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090C]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60'
          : 'bg-[#08090C]/75 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Studio Live Pulse */}
          <button
            id="brand-social-logo-btn"
            onClick={() => {
              playPing(440, 'triangle', 0.08);
              onSelectTab('work');
            }}
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            {/* Geometric Neon Icon */}
            <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-pink-500 via-rose-600 to-amber-500 p-[1px] shadow-lg shadow-pink-500/20 group-hover:shadow-pink-500/40 transition-all">
              <div className="w-full h-full bg-[#090A0F] rounded-[7px] flex items-center justify-center">
                <span className="font-display font-black text-sm tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-300">
                  SQ
                </span>
              </div>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500"></span>
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-pink-300 transition-colors">
                  SYNQ-SQUARE
                </span>
                <span className="hidden md:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold tracking-wide bg-pink-500/10 text-pink-400 border border-pink-500/30">
                  CREATIVE SOCIAL
                </span>
              </div>
              <p className="text-[10px] font-mono text-white/50 tracking-wider hidden sm:block">
                VIRAL CONTENT // CREATOR FLEETS // 640M+ VIEWS
              </p>
            </div>
          </button>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-2 py-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => {
                    playPing(isActive ? 500 : 440, 'sine', 0.05);
                    onSelectTab(item.id);
                  }}
                  className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold shadow-md shadow-pink-500/20'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-white/60'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-[9px] px-1 py-0.2 rounded font-mono font-bold tracking-tight ${
                        isActive
                          ? 'bg-white/25 text-white'
                          : item.badge === 'LIVE'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-pink-500/20 text-pink-400 border border-pink-500/30'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Toggle */}
            <button
              id="audio-toggle-btn"
              onClick={toggleSound}
              title={soundOn ? 'Mute ambient sound cues' : 'Unmute ambient sound cues'}
              aria-label={soundOn ? 'Mute sound' : 'Enable sound'}
              className={`p-2 rounded-full border transition-all text-xs flex items-center justify-center ${
                soundOn
                  ? 'border-pink-500/40 bg-pink-500/10 text-pink-300 hover:bg-pink-500/20'
                  : 'border-white/10 bg-white/5 text-white/40 hover:text-white/70 hover:bg-white/10'
              }`}
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Primary CTA: Book Creative Audit */}
            <button
              id="header-book-audit-btn"
              onClick={() => {
                playPing(600, 'triangle', 0.1);
                onOpenAuditModal('Header Main CTA');
              }}
              className="group relative inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>GET VIRAL AUDIT</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="lg:hidden flex items-center justify-between overflow-x-auto py-2.5 px-1 border-t border-white/5 no-scrollbar gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  playPing(440, 'sine', 0.05);
                  onSelectTab(item.id);
                }}
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-pink-500 text-white font-semibold'
                    : 'text-white/70 hover:text-white bg-white/5'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
