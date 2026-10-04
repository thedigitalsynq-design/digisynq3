import React from 'react';
import { Link } from 'react-router-dom';
import digisynqLogo from '../assets/digisynq-logo.png';
import { ArrowUpRight, ShieldCheck, Activity } from 'lucide-react';
import { BRAND } from '../data/blueprint_data';

const FOOTER_COLUMNS = [
  {
    title: 'System',
    links: [
      { href: '/the-synq', label: 'The Synq Definition' },
      { href: '/mechanisms', label: '23 Master Mechanisms' },
      { href: '/continuum', label: '9-Stage Continuum' },
      { href: '/how-it-works', label: 'Resolution Engine' },
    ],
  },
  {
    title: 'Network',
    links: [
      { href: '/root-cause-graph', label: 'Root-Cause Graph (EERG)' },
      { href: '/ecosystem', label: 'Ecosystem & Capacity Grid' },
      { href: '/stakeholders', label: '12 Stakeholder Archetypes' },
    ],
  },
  {
    title: 'Intelligence',
    links: [
      { href: '/diagnose', label: 'Problem Diagnostic' },
      { href: '/engines/cascade', label: 'Cascade Simulator' },
      { href: '/engines/root-map', label: 'Root Map Tree' },
      { href: '/engines/risk', label: 'Risk Engine' },
      { href: '/insights', label: 'DigiSynq Field Notes' },
    ],
  },
  {
    title: 'Engagement',
    links: [
      { href: '/diagnose', label: 'Diagnose a Problem' },
      { href: '/start', label: 'Start a SYNQ Case' },
      { href: '/workshops', label: 'DigiSynq Labs' },
      { href: '/runbook', label: 'Resolution Runbook' },
    ],
  },
  {
    title: 'Codex & Company',
    links: [
      { href: '/blueprint', label: 'Master Architecture Codex' },
      { href: '/about', label: 'About DigiSynq' },
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
            <Link to="/" className="inline-block" aria-label="DigiSynq home">
              <img
                src={digisynqLogo}
                alt="DigiSynq"
                className="h-5.5 w-auto object-contain opacity-90"
              />
            </Link>
            
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/10 border border-white/20 text-white text-[11px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>Grid Operational · Ready for Triage</span>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              <strong>DIGISYNQ</strong> is Entertainment Synchronization Infrastructure. When the entertainment system breaks, DigiSynq finds why, maps the dependencies, connects missing capabilities, coordinates the intervention, and protects delivery windows.
            </p>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[11px] text-zinc-400">
              <strong className="text-white font-medium">Definition:</strong> A SYNQ is a structured intervention that connects a specific system problem to the people, resources, capabilities and decisions required to resolve it.
            </div>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className="space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-wider text-white font-semibold">
                  {col.title}
                </div>
                <ul className="space-y-2 text-xs">
                  {col.links.map((link) => (
                    <li key={link.label}>
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

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} DIGISYNQ · {BRAND.category}
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link to="/diagnose" className="hover:text-white transition-colors">Diagnostic Engine</Link>
            <Link to="/mechanisms" className="hover:text-white transition-colors">23 Mechanisms</Link>
            <Link to="/runbook" className="hover:text-white transition-colors">Runbook</Link>
            <Link to="/blueprint" className="hover:text-white transition-colors">Master Codex</Link>
            <Link to="/start" className="hover:text-white transition-colors">Start a SYNQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
