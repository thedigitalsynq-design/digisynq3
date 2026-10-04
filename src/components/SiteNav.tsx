import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ArrowUpRight, ChevronDown, 
  Layers, Network, Cpu, Compass, BookOpen, ShieldCheck, 
  GitBranch, Sparkles, AlertTriangle 
} from 'lucide-react';
import digisynqLogo from '../assets/digisynq-logo.png';

interface NavItem {
  label: string;
  href: string;
  badge?: string;
  desc?: string;
}

const PRIMARY_NAV_ITEMS: NavItem[] = [
  { label: 'Ecosystem', href: '/ecosystem', desc: '5 Interdependent Layers' },
  { label: 'EERG', href: '/eerg', badge: 'Intelligence', desc: 'Root-Cause Graph' },
  { label: 'Problems', href: '/problems', desc: 'Problem Atlas & Blast Radius' },
  { label: 'Root Causes', href: '/root-causes', desc: 'Many → Fewer Funnels' },
  { label: 'Opportunities', href: '/opportunities', desc: 'Commercial Radar' },
  { label: 'Network', href: '/network', desc: 'Asset-Light Registry' },
  { label: 'Connect', href: '/connect', desc: 'Matching Protocol' },
  { label: 'Orchestrate', href: '/orchestrate', desc: 'Execution Governance' },
  { label: 'Measure', href: '/measure', desc: 'Decision Telemetry' },
  { label: 'Monetize', href: '/monetize', desc: '6-Layer Value Capture' },
];

const CODEX_ITEMS: NavItem[] = [
  { label: 'Cascade Simulator', href: '/engines/cascade', desc: 'Model production shock blast radius' },
  { label: 'Root Map Tree', href: '/engines/root-map', desc: 'Decompose surface symptoms to root causes' },
  { label: 'Master Blueprint', href: '/blueprint', desc: '70-section architectural specification' },
  { label: 'System Philosophy', href: '/about', desc: 'Nothing is waste. Disconnected value is.' },
];

export function SiteNav() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [codexOpen, setCodexOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setCodexOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setCodexOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none" role="banner" ref={navRef}>
      <div className="max-w-7xl mx-auto pointer-events-auto relative">
        <div
          className={`px-4 sm:px-6 py-2.5 rounded-full border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between gap-3 sm:gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] ${
            scrolled 
              ? 'bg-[#000000]/85 border-white/[0.14] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] backdrop-blur-3xl' 
              : 'bg-[#000000]/65 border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-2xl'
          }`}
        >
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center group shrink-0"
            aria-label="DIGISYNQ home"
          >
            <img
              src={digisynqLogo}
              alt="DIGISYNQ"
              className="h-5 sm:h-5.5 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
            />
          </Link>

          {/* Desktop Primary Nav Pill Strip */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="System navigation">
            {PRIMARY_NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 relative flex items-center gap-1.5 ${
                    active
                      ? 'text-white font-bold bg-white/[0.12] border border-white/[0.2] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.05] border border-transparent'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}

            {/* Codex Drawer Dropdown */}
            <div className="relative ml-1">
              <button
                onClick={() => setCodexOpen(!codexOpen)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-1 border ${
                  codexOpen
                    ? 'bg-white text-black border-white'
                    : 'text-zinc-500 hover:text-zinc-300 border-white/[0.06] hover:border-white/[0.15]'
                }`}
              >
                <span>Codex</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${codexOpen ? 'rotate-180' : ''}`} />
              </button>

              {codexOpen && (
                <div className="absolute top-full right-0 mt-2.5 w-72 rounded-2xl bg-[#080A10]/95 border border-white/[0.15] shadow-2xl p-2.5 z-50 backdrop-blur-2xl animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase px-2.5 py-1 border-b border-white/[0.06] mb-1">
                    System Simulation & Philosophy
                  </div>
                  {CODEX_ITEMS.map((c) => (
                    <Link
                      key={c.href}
                      to={c.href}
                      className="block p-2 rounded-xl text-left hover:bg-white/[0.06] transition-colors"
                    >
                      <div className="text-xs font-mono text-white font-bold uppercase">{c.label}</div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">{c.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action: Apple Pill CTA */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <Link
              to="/participate"
              className="bg-white text-black hover:bg-zinc-200 px-5 py-2 rounded-full text-xs font-mono uppercase font-bold tracking-wider transition-all duration-200 flex items-center gap-1.5 shadow-[0_4px_14px_rgba(255,255,255,0.2)]"
            >
              <span>PARTICIPATE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden p-2 text-zinc-400 hover:text-white rounded-full border border-white/[0.08] focus:outline-none"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Full Screen Menu Drawer */}
        {menuOpen && (
          <div className="xl:hidden mt-2 p-6 rounded-3xl bg-[#05070D]/95 border border-white/[0.15] shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto backdrop-blur-2xl">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest pb-2 border-b border-white/[0.08]">
              DIGISYNQ SYSTEM NAVIGATION
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PRIMARY_NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`p-3 rounded-2xl text-left border flex flex-col justify-between transition-all ${
                    isActive(item.href)
                      ? 'bg-white text-black border-white font-bold shadow-md'
                      : 'bg-white/[0.02] text-zinc-300 border-white/[0.06] hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase">{item.label}</span>
                    {item.badge && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-zinc-500 mt-1">{item.desc}</span>
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-white/[0.08] space-y-2">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Codex & Simulation</span>
              {CODEX_ITEMS.map((c) => (
                <Link
                  key={c.href}
                  to={c.href}
                  className="block p-2.5 rounded-xl text-xs font-mono text-zinc-400 hover:text-white bg-white/[0.02] border border-white/[0.04]"
                >
                  {c.label}
                </Link>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/participate"
                className="w-full bg-white text-black hover:bg-zinc-200 py-3.5 rounded-full text-xs font-mono uppercase font-bold tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>START WITH A PROBLEM →</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
