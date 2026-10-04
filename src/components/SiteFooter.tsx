import React from 'react';
import { Link } from 'react-router-dom';
import digisynqLogo from '../assets/digisynq-logo.png';
import { ArrowUpRight } from 'lucide-react';
import { BRAND } from '../data/blueprint_data';
import { LinkedinIcon, InstagramIcon, FacebookIcon } from './SocialIcons';

const FOOTER_COLUMNS = [
  {
    title: 'Infrastructure & System',
    links: [
      { href: '/mechanisms', label: '23 Master Mechanisms' },
      { href: '/continuum', label: '9-Stage Continuum' },
      { href: '/stakeholders', label: '12 Stakeholder Archetypes' },
      { href: '/engines', label: 'Simulation & Diagnostic Engines' },
      { href: '/the-synq', label: 'Cinematic Synq Deck' },
    ],
  },
  {
    title: 'Resolution & Intelligence',
    links: [
      { href: '/how-it-works', label: 'System Resolution Engagement' },
      { href: '/runbook', label: 'Operational Runbook' },
      { href: '/insights', label: 'Industry Research Briefs' },
      { href: '/workshops', label: '6 Capability Labs' },
      { href: '/blueprint', label: '70-Section Master Codex' },
      { href: '/about', label: 'About & Operating Principles' },
    ],
  },
  {
    title: 'Engage',
    links: [
      { href: '/start', label: 'Initiate System Resolution' },
      { href: '/start?mode=audit', label: 'Request Slate Risk Audit' },
      { href: 'mailto:hello@digisynq.com', label: 'Direct Operational Hotline', isExternal: true },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#03040A] border-t border-white/[0.06] pt-20 pb-16 relative overflow-hidden text-zinc-400" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 pb-16 border-b border-white/[0.06]">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-block" aria-label="DigiSynq home">
              <img
                src={digisynqLogo}
                alt="DigiSynq"
                className="h-5 w-auto object-contain opacity-90"
              />
            </Link>
            <div className="text-xs font-mono text-[#52E3A4]">
              {BRAND.tagline}
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              {BRAND.executiveDefinition}
            </p>
            <div className="pt-2 text-[11px] font-mono text-zinc-500 space-y-1">
              <div><strong>Mission:</strong> {BRAND.mission}</div>
              <div><strong>Philosophy:</strong> {BRAND.philosophy}</div>
            </div>

            {/* Social Icons from SocialIcons.tsx */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.08] hover:text-[#52E3A4] transition-all text-zinc-400"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.08] hover:text-[#52E3A4] transition-all text-zinc-400"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.08] hover:text-[#52E3A4] transition-all text-zinc-400"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className="space-y-4">
                <div className="text-xs font-semibold text-white tracking-wide">
                  {col.title}
                </div>
                <ul className="space-y-2.5 text-xs">
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
            &copy; {new Date().getFullYear()} DIGISYNQ. {BRAND.oneSentenceCategory}
          </div>
          <div className="flex items-center gap-6">
            <Link to="/runbook" className="hover:text-[#52E3A4] transition-colors">Runbook</Link>
            <Link to="/insights" className="hover:text-[#52E3A4] transition-colors">Insights</Link>
            <Link to="/blueprint" className="hover:text-[#52E3A4] transition-colors">Master Codex</Link>
            <Link to="/start" className="hover:text-[#52E3A4] transition-colors">Start a Synq</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
