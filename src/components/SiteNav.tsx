import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Volume2, VolumeX } from 'lucide-react';
import { getAudioEnabled, toggleAudio, playClickSound, playHoverSound } from '../utils/audio';
import digisynqLogo from '../assets/digisynq-logo.png';

const NAV_LINKS = [
  { href: '/', label: 'HOME', index: '01' },
  { href: '/the-synq', label: 'THE SYNQ', index: '02' },
  { href: '/how-it-works', label: 'HOW IT WORKS', index: '03' },
  { href: '/ecosystem', label: 'ECOSYSTEM', index: '04' },
  { href: '/workshops', label: 'WORKSHOPS', index: '05' },
  { href: '/insights', label: 'INSIGHTS', index: '06' },
  { href: '/about', label: 'ABOUT', index: '07' },
];

export function SiteNav() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [audioOn, setAudioOn] = useState(getAudioEnabled());

  useEffect(() => {
    setAudioOn(getAudioEnabled());
  }, []);

  const handleToggleAudio = () => {
    const next = toggleAudio();
    setAudioOn(next);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-2.5 sm:pt-3.5 px-3 sm:px-6 pointer-events-none" role="banner">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <div
          className={`px-3 sm:px-5 py-2 rounded-2xl sm:rounded-full border transition-all duration-300 flex items-center justify-between gap-2 sm:gap-4 ${
            scrolled 
              ? 'bg-[#06130E]/95 border-[#23B272]/30 shadow-[0_16px_40px_rgba(0,0,0,0.8),0_0_24px_rgba(35,178,114,0.15)] backdrop-blur-xl' 
              : 'bg-[#06130E]/80 border-white/10 backdrop-blur-lg'
          }`}
        >
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center group shrink-0"
            aria-label="DigiSynq home"
          >
            <img
              src={digisynqLogo}
              alt="DigiSynq"
              className="h-5 sm:h-5.5 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(35,178,114,0.25)] transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Nav - Slate Film Style */}
          <nav className="hidden lg:flex items-center gap-1 shrink-0" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onMouseEnter={() => playHoverSound()}
                  onClick={() => playClickSound()}
                  className={`px-2 xl:px-2.5 py-1.5 rounded-lg text-[11px] font-mono tracking-wider transition-all duration-150 flex items-center gap-1.5 whitespace-nowrap shrink-0 group ${
                    active
                      ? 'text-[#D4F838] bg-[#0D281E] border border-[#23B272]/40 shadow-[0_0_12px_rgba(35,178,114,0.15)] font-bold'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.04]'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <span
                    className={`text-[8.5px] font-mono font-bold px-1 py-0.2 rounded transition-colors ${
                      active
                        ? 'bg-[#D4F838]/20 text-[#D4F838]'
                        : 'bg-white/[0.06] text-white/40 group-hover:text-[#52E3A4] group-hover:bg-[#23B272]/15'
                    }`}
                  >
                    {link.index}
                  </span>
                  <span className="whitespace-nowrap">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Controls & High-Impact CTA */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Audio Visualizer & Toggle */}
            <button
              onClick={handleToggleAudio}
              className={`px-2 py-1 rounded-lg border transition-all flex items-center gap-1.5 cursor-pointer text-[10px] font-mono ${
                audioOn
                  ? 'border-[#23B272]/50 bg-[#23B272]/10 text-[#52E3A4]'
                  : 'border-white/10 text-white/40 hover:text-white/70 hover:bg-white/5'
              }`}
              title={audioOn ? 'Cinema Sound: Active' : 'Cinema Sound: Muted'}
              aria-label="Toggle tactical audio"
            >
              {audioOn ? (
                <>
                  <div className="flex items-end gap-0.5 h-2.5 w-3">
                    <span className="w-0.5 bg-[#D4F838] h-full animate-[pulse_0.4s_infinite]" />
                    <span className="w-0.5 bg-[#23B272] h-2/3 animate-[pulse_0.6s_infinite]" />
                    <span className="w-0.5 bg-[#52E3A4] h-5/6 animate-[pulse_0.5s_infinite]" />
                  </div>
                  <span className="hidden sm:inline">AUDIO ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3 h-3" />
                  <span className="hidden sm:inline">MUTED</span>
                </>
              )}
            </button>

            {/* Electric Lime Action CTA */}
            <Link
              to="/start"
              onMouseEnter={() => playHoverSound()}
              onClick={() => playClickSound()}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg sm:rounded-full bg-[#D4F838] text-[#06130E] hover:bg-[#52E3A4] font-mono font-bold text-[11px] tracking-wide transition-all shadow-[0_0_16px_rgba(212,248,56,0.3)] active:scale-95 cursor-pointer shrink-0"
              id="nav-start-synq-cta"
            >
              <span>START SYNQ</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-1.5 rounded-lg border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Floating Drawer */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden mt-2 p-4 rounded-2xl bg-[#06130E]/98 backdrop-blur-2xl border border-[#23B272]/30 shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono text-white/40">
              <span>CINEMA SLATE // SCENE DIRECTORY</span>
              <span className="text-[#D4F838]">24 FPS</span>
            </div>
            <nav className="flex flex-col gap-1.5" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => { setMenuOpen(false); playClickSound(); }}
                  className={`px-3 py-2.5 rounded-xl text-xs font-mono tracking-wider flex items-center justify-between transition-all ${
                    isActive(link.href)
                      ? 'text-[#D4F838] bg-[#0D281E] border border-[#23B272]/40 font-bold'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[#52E3A4] font-bold">
                      {link.index}
                    </span>
                    <span className="font-semibold">{link.label}</span>
                  </div>
                  <ArrowUpRight size={14} className="opacity-40" />
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
