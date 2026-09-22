import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { OPERATING_PRINCIPLES } from '../../data/website/core_data';

const FOOTER_LINKS = {
  'Navigate': [
    { href: '/', label: 'Home' },
    { href: '/the-synq', label: 'The synq' },
    { href: '/how-it-works', label: 'How it works' },
    { href: '/ecosystem', label: 'Ecosystem' },
  ],
  'Explore': [
    { href: '/capabilities', label: 'Capabilities' },
    { href: '/use-cases', label: 'Use cases' },
    { href: '/workshops', label: 'Workshops' },
    { href: '/about', label: 'About' },
  ],
  'Connect': [
    { href: '/start', label: 'Start a synq' },
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
                <div className="text-sm font-bold text-white tracking-tight">DigiSynq</div>
                <div className="text-[10px] text-white/40">Cinema synchronization</div>
              </div>
            </Link>

            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              An asset-light cinema problem-solving company building a synchronization layer across the filmmaking ecosystem.
            </p>

            {/* Brand statement */}
            <div className="text-xs text-white/40 leading-relaxed border-l-2 border-[#5CE1E6]/30 pl-4 italic">
              Find the gap.<br />
              Synq the system.<br />
              Create value.
            </div>
          </div>

          {/* Navigation columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <div className="text-xs font-semibold text-white/40 mb-4">{group}</div>
              <nav className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm text-white/60 hover:text-[#5CE1E6] transition-colors"
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
                <span className="text-white/30 text-xs">{p.label}</span>
                {i < OPERATING_PRINCIPLES.length - 1 && (
                  <span className="text-white/10">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} DigiSynq. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-xs text-white/30">
              Not an agency. Not a production house. A synchronization layer.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
