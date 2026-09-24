import React from 'react';
import { Link } from 'react-router-dom';
import { OPERATING_PRINCIPLES } from '../data/core_data';
import digisynqLogo from '../assets/digisynq-logo.png';
import { ArrowUpRight, Film, Radio, Shield, Zap } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/audio';
import { InstagramIcon, FacebookIcon, LinkedinIcon } from './SocialIcons';

const FOOTER_GROUPS = [
  {
    title: 'OPERATIONAL LENSES',
    code: '01',
    links: [
      { href: '/', label: 'Home // Production Deck' },
      { href: '/the-synq', label: 'The Synq // Architecture' },
      { href: '/how-it-works', label: 'How It Works // 4 Phases' },
      { href: '/ecosystem', label: 'Ecosystem // 360° Mesh' },
    ],
  },
  {
    title: 'LABS & DISPATCHES',
    code: '02',
    links: [
      { href: '/workshops', label: 'Workshops // Guild Labs' },
      { href: '/insights', label: 'Insights // Industry Telemetry' },
      { href: '/about', label: 'About // Cinema Codex' },
    ],
  },
  {
    title: 'ENGAGEMENT',
    code: '03',
    links: [
      { href: '/start', label: 'Start a Synq // Intake Portal' },
      { href: '/the-synq#problem-engine', label: 'Problem Engine // Live Diagnostic' },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#040C09] border-t border-[#23B272]/20 pt-16 pb-12 relative overflow-hidden text-zinc-300" role="contentinfo">
      
      {/* 35mm Film Sprockets Top Border */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-black/80 flex items-center justify-between px-4 border-b border-white/5 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div key={i} className="w-2.5 h-1.5 rounded-xs bg-[#23B272]/30 shrink-0 mx-1" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* ── Call Sheet Header Slate ────────────────────────── */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#06130E]/90 border border-white/[0.08] mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <Film size={180} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Brand Presentation */}
            <div className="lg:col-span-5 space-y-4">
              <Link to="/" className="flex items-center gap-3 w-fit group" aria-label="DigiSynq home">
                <div>
                  <img
                    src={digisynqLogo}
                    alt="DigiSynq"
                    className="h-5 sm:h-6 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(35,178,114,0.25)] transition-transform duration-200 group-hover:scale-[1.02]"
                  />
                  <div className="text-[10px] text-[#52E3A4] font-mono tracking-widest uppercase mt-0.5">
                    CINEMA SYNCHRONIZATION ARCHITECTURE
                  </div>
                </div>
              </Link>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md">
                An asset-light cinema problem-solving company. Building a real-time operational layer across creators, crew guilds, soundstages, capital, and screens.
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0D281E] border border-[#23B272]/30 text-xs font-mono text-[#D4F838]">
                <span>CORE DIRECTIVE:</span>
                <span className="text-white">Find the gap. SYNQ the system. Create value.</span>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono">
              {FOOTER_GROUPS.map((group) => (
                <div key={group.title} className="space-y-3">
                  <div className="flex items-center gap-1.5 text-[10px] text-[#52E3A4] font-bold tracking-wider pb-1 border-b border-white/10">
                    <span className="text-white/30">{group.code}</span>
                    <span>{group.title}</span>
                  </div>
                  <ul className="space-y-2 text-xs">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          onMouseEnter={() => playHoverSound()}
                          onClick={() => playClickSound()}
                          className="text-zinc-400 hover:text-[#D4F838] transition-colors flex items-center justify-between group"
                        >
                          <span className="group-hover:translate-x-0.5 transition-transform">{link.label}</span>
                          <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#D4F838]" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Production Specs Callout */}
          <div className="mt-8 pt-4 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4 text-[10px] font-mono text-zinc-400">
            <div>
              <span className="text-white/30 block">FORMAT</span>
              <span className="text-white font-bold">DCI 4K SCOPE</span>
            </div>
            <div>
              <span className="text-white/30 block">FRAME RATE</span>
              <span className="text-[#52E3A4] font-bold">24.000 FPS</span>
            </div>
            <div>
              <span className="text-white/30 block">COLOR SCIENCE</span>
              <span className="text-[#D4F838] font-bold">JADE & MONO</span>
            </div>
            <div>
              <span className="text-white/30 block">SOUNDSTAGE</span>
              <span className="text-white font-bold">WEB SYNTHETICS 48kHz</span>
            </div>
          </div>
        </div>

        {/* Operating Principles Film Slate */}
        <div className="mb-10 pb-8 border-b border-white/[0.06]">
          <div className="flex items-center gap-2 mb-3 text-[11px] font-mono text-[#52E3A4] uppercase tracking-wider">
            <span>OPERATIONAL PRINCIPLES</span>
            <span className="text-white/30">// 10 CANONICAL AXIOMS</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap font-mono text-[11px]">
            {OPERATING_PRINCIPLES.map((p, idx) => (
              <span
                key={p.id}
                className="px-2.5 py-1 rounded-md bg-[#0D281E]/60 border border-[#23B272]/20 text-zinc-300 hover:text-white hover:border-[#23B272] transition"
              >
                <span className="text-[#D4F838] mr-1">#{String(idx + 1).padStart(2, '0')}</span>
                {p.label}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Legal, Social Links & Manifesto line */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-4">
            <p>© {new Date().getFullYear()} DIGISYNQ CINEMA. ALL RIGHTS RESERVED.</p>
            <div className="flex items-center gap-3 text-white/50 border-l border-white/10 pl-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#B6F02A] transition-colors">
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#B6F02A] transition-colors">
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#B6F02A] transition-colors">
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          <p className="text-[11px] text-[#52E3A4]/70">
            NOT AN AGENCY. NOT A PRODUCTION HOUSE. A LIVING SYNCHRONIZATION LAYER.
          </p>
        </div>
      </div>
    </footer>
  );
}
