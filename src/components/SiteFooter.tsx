import React from 'react';
import { Link } from 'react-router-dom';
import digisynqLogo from '../assets/digisynq-logo.png';
import { ArrowUpRight, ShieldCheck, Activity } from 'lucide-react';

const FOOTER_COLUMNS = [
  {
    title: 'Ecosystem & Root Causes',
    links: [
      { href: '/ecosystem', label: 'Ecosystem (5 Layers)' },
      { href: '/eerg', label: 'EERG Root-Cause Graph' },
      { href: '/problems', label: 'Problem Atlas' },
      { href: '/root-causes', label: 'Many → Fewer Root Causes' },
    ],
  },
  {
    title: 'Mechanism & Coordination',
    links: [
      { href: '/opportunities', label: 'Opportunity Radar' },
      { href: '/network', label: 'Asset-Light Network' },
      { href: '/connect', label: 'Scenario Connect Protocol' },
      { href: '/orchestrate', label: 'Living Orchestration' },
    ],
  },
  {
    title: 'Telemetry & Commercial',
    links: [
      { href: '/measure', label: 'Decision Telemetry' },
      { href: '/monetize', label: '6-Layer Value Capture' },
      { href: '/engines/cascade', label: 'Cascade Simulator' },
      { href: '/engines/root-map', label: 'Root Map Tree' },
    ],
  },
  {
    title: 'Participation',
    links: [
      { href: '/participate', label: 'I Have a Problem' },
      { href: '/participate', label: 'I Have Resources' },
      { href: '/participate', label: 'I Have Data' },
      { href: '/participate', label: 'Explore Opportunity' },
    ],
  },
  {
    title: 'Codex & Philosophy',
    links: [
      { href: '/about', label: 'System Philosophy' },
      { href: '/blueprint', label: 'Master Architecture Codex' },
      { href: '/system-flow', label: 'System Flowchart' },
      { href: 'mailto:operations@digisynq.com', label: 'Operational Dispatch', isExternal: true },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#03040A] border-t border-white/[0.08] pt-16 pb-12 relative overflow-hidden text-zinc-400" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/[0.06]">
          {/* Brand info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block" aria-label="DIGISYNQ home">
              <img
                src={digisynqLogo}
                alt="DIGISYNQ"
                className="h-5.5 w-auto object-contain opacity-90"
              />
            </Link>
            
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/[0.05] border border-white/[0.1] text-white text-[11px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Asset-Light Network Active · Operational</span>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              <strong className="text-white">DIGISYNQ</strong> is an Asset-Light Entertainment Ecosystem Mechanism. It connects people, skills, equipment, studios, locations, production resources, technology, rights, capital, distribution, and market intelligence without needing to own the physical assets.
            </p>

            <div className="p-3 bg-white/[0.02] border border-white/[0.05] text-[11px] text-zinc-400 font-mono">
              <strong className="text-white font-medium">Core Principle:</strong> Nothing is waste. Disconnected value is. DIGISYNQ exists to reduce that disconnection.
            </div>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className="space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-wider text-white font-semibold">
                  {col.title}
                </div>
                <ul className="space-y-2 text-xs font-mono">
                  {col.links.map((link, idx) => (
                    <li key={idx}>
                      {link.isExternal ? (
                        <a
                          href={link.href}
                          className="text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight className="w-3 h-3 opacity-60" />
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-zinc-400 hover:text-white transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600">
          <div>
            DIGISYNQ // ENTERTAINMENT SYNCHRONIZATION INFRASTRUCTURE © {new Date().getFullYear()}
          </div>
          <div className="flex items-center gap-4 text-zinc-500">
            <span>OBSERVE → DIAGNOSE → MAP → CONNECT → ORCHESTRATE → MEASURE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
