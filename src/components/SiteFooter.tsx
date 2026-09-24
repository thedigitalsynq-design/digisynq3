import React from 'react';
import { Link } from 'react-router-dom';
import digisynqLogo from '../assets/digisynq-logo.png';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon, FacebookIcon, LinkedinIcon } from './SocialIcons';

const FOOTER_COLUMNS = [
  {
    title: 'Model',
    links: [
      { href: '/the-synq', label: 'The Synq' },
      { href: '/how-it-works', label: 'How It Works' },
      { href: '/ecosystem', label: 'Ecosystem' },
      { href: '/the-synq#problem-engine', label: 'Problem Engine' },
    ],
  },
  {
    title: 'Initiatives',
    links: [
      { href: '/workshops', label: 'Workshops & Labs' },
      { href: '/insights', label: 'Industry Insights' },
      { href: '/about', label: 'About DigiSynq' },
    ],
  },
  {
    title: 'Engage',
    links: [
      { href: '/start', label: 'Start a Synq' },
      { href: 'mailto:hello@digisynq.com', label: 'Direct Inquiries', isExternal: true },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#050609] border-t border-white/[0.06] pt-24 pb-16 relative overflow-hidden text-zinc-400" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 pb-16 border-b border-white/[0.06]">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-5">
            <Link to="/" className="inline-block" aria-label="DigiSynq home">
              <img
                src={digisynqLogo}
                alt="DigiSynq"
                className="h-5 w-auto object-contain opacity-90"
              />
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              The coordination layer for entertainment. An asset-light network connecting distributed talent, partner facilities, financing, and audience channels across the entertainment ecosystem.
            </p>
            <div className="text-xs text-zinc-500">
              Asset-light model • Coordinating distributed entertainment capacity
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} DigiSynq. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-zinc-300 transition-colors">Privacy & Principles</Link>
            <Link to="/start" className="hover:text-zinc-300 transition-colors">Client Intake</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
