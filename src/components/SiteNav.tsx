import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ArrowUpRight, ChevronDown, 
  Layers, Network, Cpu, Compass, BookOpen, ShieldCheck 
} from 'lucide-react';
import digisynqLogo from '../assets/digisynq-logo.png';

interface NavGroup {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  items: {
    label: string;
    href: string;
    desc: string;
    badge?: string;
  }[];
}

const NAV_GROUPS: NavGroup[] = [
  {
    id: 'system',
    label: 'How It Works',
    icon: Layers,
    items: [
      { label: 'The SYNQ Model', href: '/the-synq', desc: 'What a SYNQ is and how it resolves a production breakdown' },
      { label: '23 Mechanisms', href: '/mechanisms', desc: 'The 23 codified algorithms behind every intervention' },
      { label: '9-Stage Continuum', href: '/continuum', desc: 'How DigiSynq operates across the full entertainment lifecycle' },
      { label: 'Resolution Architecture', href: '/how-it-works', desc: 'From variance detection to verified outcome — step by step' },
    ]
  },
  {
    id: 'network',
    label: 'Who It Serves',
    icon: Network,
    items: [
      { label: 'EERG — Root-Cause Graph', href: '/eerg', desc: '160+ Stakeholders, 75 Root Causes, Bottlenecks & Failure Loops', badge: 'Intelligence Layer' },
      { label: 'Ecosystem', href: '/ecosystem', desc: 'The network of entities DigiSynq connects and coordinates' },
      { label: '12 Stakeholders', href: '/stakeholders', desc: 'See how DigiSynq serves your specific role' },
    ]
  },
  {
    id: 'intelligence',
    label: 'Simulation Tools',
    icon: Cpu,
    items: [
      { label: 'Cascade Simulator', href: '/engines/cascade', desc: 'Model the blast radius of a production shock in real time' },
      { label: 'Root Map Tree', href: '/engines/root-map', desc: 'Decompose a surface symptom to its structural root cause' },
      { label: 'Risk Engine', href: '/engines/risk', desc: 'Score and prioritize competing intervention requests' },
      { label: 'Problem Taxonomy', href: '/engines/problem-taxonomy', desc: '6-domain classification of operational failure types' },
      { label: 'Field Notes', href: '/insights', desc: 'Empirical research and observed production intelligence' },
    ]
  },
  {
    id: 'engagement',
    label: 'Get Started',
    icon: Compass,
    items: [
      { label: 'Diagnose a Problem', href: '/diagnose', desc: 'Identify the root cause of your active production friction', badge: 'Flagship' },
      { label: 'Start a SYNQ', href: '/start', desc: 'Submit a confidential case and receive a tracked Case ID' },
      { label: 'DigiSynq Labs', href: '/workshops', desc: 'Rehearse crisis interventions and stress-test your pipeline' },
      { label: 'Resolution Runbook', href: '/runbook', desc: '13-step operational SOP for active SYNQ interventions' },
    ]
  },
  {
    id: 'codex',
    label: 'Reference',
    icon: BookOpen,
    items: [
      { label: 'Master Blueprint', href: '/blueprint', desc: 'The complete 70-section architectural specification' },
      { label: 'System Flowchart', href: '/system-flow', desc: 'End-to-end decision logic and triage architecture', badge: 'New' },
      { label: 'System Philosophy', href: '/about', desc: 'Why DigiSynq exists and the 10 principles it operates by' },
    ]
  }
];

export function SiteNav() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on route change or click outside
  useEffect(() => {
    setMenuOpen(false);
    setActiveGroup(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveGroup(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isGroupActive = (group: NavGroup) => 
    group.items.some(item => location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href)));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none" role="banner" ref={navRef}>
      <div className="max-w-6xl mx-auto pointer-events-auto relative">
        <div
          className={`px-4 sm:px-6 py-2.5 rounded-full border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between gap-3 ${
            scrolled 
              ? 'bg-[#090b10]/95 border-white/[0.12] shadow-[0_16px_40px_rgba(0,0,0,0.7)] backdrop-blur-2xl' 
              : 'bg-[#090b10]/75 border-white/[0.07] backdrop-blur-xl'
          }`}
        >
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center group shrink-0"
            aria-label="DigiSynq home"
          >
            <img
              src={digisynqLogo}
              alt="DigiSynq"
              className="h-5 sm:h-5.5 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
            />
          </Link>

          {/* Desktop Mega-Menu Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
            {NAV_GROUPS.map((group) => {
              const active = isGroupActive(group);
              const isOpen = activeGroup === group.id;

              return (
                <div key={group.id} className="relative">
                  <button
                    type="button"
                    onClick={() => setActiveGroup(isOpen ? null : group.id)}
                    onMouseEnter={() => setActiveGroup(group.id)}
                    aria-expanded={isOpen}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ease-out ${
                      active || isOpen
                        ? 'text-white bg-white/[0.08] font-semibold'
                        : 'text-white/70 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>{group.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 opacity-60 transition-transform duration-300 ease-out ${isOpen ? 'rotate-180 text-white' : ''}`} />
                  </button>

                  {/* Dropdown Card */}
                  {isOpen && (
                    <div 
                      onMouseLeave={() => setActiveGroup(null)}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80 z-50 animate-soft-fade"
                    >
                      <div className="bg-[#090b12]/98 border border-white/[0.1] rounded-2xl p-2.5 shadow-2xl backdrop-blur-2xl">
                        <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest px-3 py-1.5 border-b border-white/[0.05] mb-1 flex items-center justify-between">
                          <span>{group.label} Architecture</span>
                        </div>
                        <div className="space-y-1">
                          {group.items.map((item) => {
                            const isItemActive = location.pathname === item.href;
                            return (
                              <Link
                                key={item.href}
                                to={item.href}
                                onClick={() => setActiveGroup(null)}
                                className={`block p-2.5 rounded-xl transition-all duration-300 ease-out ${
                                  isItemActive 
                                    ? 'bg-white/[0.08] border border-white/20' 
                                    : 'hover:bg-white/[0.05] border border-transparent'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span className={`text-xs font-bold ${isItemActive ? 'text-white' : 'text-zinc-200'}`}>
                                    {item.label}
                                  </span>
                                  {item.badge && (
                                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white border border-white/20">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-white/50 mt-0.5 line-clamp-1 leading-normal">
                                  {item.desc}
                                </p>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Standalone Quick Link: EERG (Root-Cause Intelligence) */}
            <Link
              to="/eerg"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                location.pathname === '/eerg' || location.pathname === '/root-cause-graph'
                  ? 'text-white bg-white/[0.12] border border-white/20 font-semibold'
                  : 'text-white/80 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <span className="font-bold tracking-wider">EERG</span>
              <span className="text-[9px] font-mono text-zinc-400 bg-white/[0.08] px-1.5 py-0.5 rounded border border-white/10 hidden xl:inline-block">
                Root-Cause Intelligence
              </span>
            </Link>

            {/* Standalone Quick Link: About */}
            <Link
              to="/about"
              className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                location.pathname === '/about'
                  ? 'text-white bg-white/[0.08] font-semibold'
                  : 'text-white/70 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              About
            </Link>
          </nav>

          {/* Primary Action Button — Signature Diagnostic Engine */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              to="/diagnose"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 rounded-full bg-white text-black hover:bg-zinc-200 font-bold text-xs tracking-wide transition-all duration-200 active:scale-95 shadow-md shadow-white/10"
              id="nav-diagnose-cta"
            >
              <span>Diagnose a Problem</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-full text-white/70 hover:text-white hover:bg-white/[0.06] transition-all"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Accordion Drawer */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden mt-2 p-4 rounded-3xl bg-[#090b10]/98 backdrop-blur-2xl border border-white/[0.1] shadow-2xl max-h-[80vh] overflow-y-auto space-y-4 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            {/* Featured EERG Drawer Card */}
            <Link
              to="/eerg"
              onClick={() => setMenuOpen(false)}
              className="block p-3 rounded-2xl bg-white/[0.08] border border-white/20 hover:bg-white/[0.12] transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white tracking-wide">EERG</span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/20 text-white font-semibold">
                    Root-Cause Intelligence
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
              <p className="text-[11px] text-zinc-300">
                Entertainment Ecosystem Root-Cause Graph: 160+ Stakeholders, 75 Root Causes & Systemic Failure Loops.
              </p>
            </Link>
            {NAV_GROUPS.map((group) => (
              <div key={group.id} className="border-b border-white/[0.06] pb-3 last:border-b-0 last:pb-0">
                <div className="text-[11px] font-mono text-white uppercase tracking-wider mb-2 flex items-center gap-2 font-semibold">
                  <group.icon className="w-3.5 h-3.5" />
                  <span>{group.label}</span>
                </div>
                <div className="grid grid-cols-1 gap-1">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all ${
                        location.pathname === item.href
                          ? 'text-white bg-white/[0.08] font-bold'
                          : 'text-white/70 hover:text-white hover:bg-white/[0.03]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span>{item.label}</span>
                          {item.badge && (
                            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white/10 text-white border border-white/20">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <div className="text-[10px] text-white/40">{item.desc}</div>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-40 shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-xs font-semibold text-white/80 hover:text-white hover:bg-white/[0.05]"
              >
                About DigiSynq
              </Link>
              <Link
                to="/start"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.12] text-xs font-bold text-white transition-all"
              >
                Start a SYNQ Case Directly
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
