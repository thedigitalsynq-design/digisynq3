import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { OPERATING_PRINCIPLES } from '../../data/website/core_data';

const FOOTER_LINKS = {
  'Navigate': [
    { href: '/', label: 'Home' },
    { href: '/the-synq', label: 'The SYNQ' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/ecosystem', label: 'Ecosystem' },
  ],
  'Explore': [
    { href: '/capabilities', label: 'Capabilities' },
    { href: '/use-cases', label: 'Use Cases' },
    { href: '/workshops', label: 'Workshops' },
    { href: '/about', label: 'About' },
  ],
  'Connect': [
    { href: '/start', label: 'Start a SYNQ' },
    { href: '/insights', label: 'Insights' },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-[#03040A] border-t border-white/[0.05]" role="contentinfo">

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3" aria-label="DigiSynq Home">
              <div className="w-9 h-9 rounded-xl bg-[#0E1120] border border-white/10 flex items-center justify-center overflow-hidden">
                <img
                  src="/digisynq-logo.png"
                  alt=""
                  className="w-6 h-6 object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <span className="text-[#5CE1E6] font-mono font-black text-sm absolute">D</span>
              </div>
              <div>
                <div className="font-mono text-sm font-black tracking-[0.14em] text-white">DIGISYNQ</div>
                <div className="font-mono text-[9px] tracking-[0.14em] text-white/30 uppercase">Cinema Synchronization</div>
              </div>
            </Link>

            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              An asset-light cinema problem-solving company building a synchronization layer across the filmmaking ecosystem.
            </p>

            {/* Brand statement */}
            <div className="font-mono text-xs text-white/25 tracking-[0.1em] uppercase leading-relaxed border-l-2 border-[#5CE1E6]/20 pl-4">
              FIND THE GAP.<br />
              SYNQ THE SYSTEM.<br />
              CREATE VALUE.
            </div>
          </div>

          {/* Navigation columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <div className="label-mono text-white/30 mb-4">{group}</div>
              <nav className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm text-white/50 hover:text-[#5CE1E6] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Principles ticker */}
        <div className="mt-14 pt-8 border-t border-white/[0.05] overflow-hidden">
          <div className="flex items-center gap-3 flex-wrap">
            {OPERATING_PRINCIPLES.map((p, i) => (
              <React.Fragment key={p.id}>
                <span className="label-mono text-white/20 text-[10px]">{p.label}</span>
                {i < OPERATING_PRINCIPLES.length - 1 && (
                  <span className="text-white/10">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[11px] text-white/25 font-mono">
            © {new Date().getFullYear()} DIGISYNQ. All rights reserved.
          </p>
          <p className="text-[11px] text-white/20 font-mono">
            Asset-light. Cinema-native. Problem-first.
          </p>
        </div>
      </div>

      {/* CTA bar */}
      <div className="bg-[#090B14] border-t border-white/[0.05] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60 font-mono tracking-wide">
            Ready to find the gap and synq the system?
          </p>
          <Link to="/start" className="btn-primary text-[11px] px-5 py-2.5" id="footer-start-synq-cta">
            START A SYNQ
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
