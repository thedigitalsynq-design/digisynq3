import React from 'react';
import { Link } from 'react-router-dom';
import { OPERATING_PRINCIPLES } from '../../data/website/core_data';

const FOOTER_LINKS = {
  'Navigate': [
    { href: '/', label: 'Home' },
    { href: '/the-synq', label: 'The synq' },
    { href: '/how-it-works', label: 'How it works' },
    { href: '/ecosystem', label: 'Ecosystem' },
  ],
  'Explore': [
    { href: '/workshops', label: 'Workshops' },
    { href: '/about', label: 'About' },
    { href: '/insights', label: 'Insights' },
  ],
  'Engage': [
    { href: '/start', label: 'Start a synq' },
    { href: '/matrix', label: 'Cinema matrix' },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-[#03040A] border-t border-white/[0.06] pt-16 pb-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer card */}
        <div className="bento-card bento-card-subtle p-8 sm:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">

            {/* Brand column */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <Link to="/" className="flex items-center gap-3 w-fit" aria-label="DigiSynq home">
                <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden relative">
                  <img
                    src="/digisynq-logo.png"
                    alt=""
                    className="w-5 h-5 object-contain"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <span className="text-[#5CE1E6] font-mono font-bold text-xs absolute">D</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-white tracking-tight">DigiSynq</div>
                  <div className="text-[10px] text-[#86868b]">Cinema synchronization</div>
                </div>
              </Link>

              <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed max-w-sm">
                An asset-light cinema problem-solving company building a synchronization layer across the filmmaking ecosystem.
              </p>

              <div className="text-xs text-white/50 leading-relaxed border-l border-[#5CE1E6]/40 pl-3">
                Find the gap. Synq the system. Create value.
              </div>
            </div>

            {/* Navigation columns */}
            {Object.entries(FOOTER_LINKS).map(([group, links]) => (
              <div key={group} className="flex flex-col gap-3">
                <div className="text-xs font-semibold text-white/70 tracking-wide">{group}</div>
                <nav className="flex flex-col gap-2">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="text-xs text-[#86868b] hover:text-[#5CE1E6] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* Operating principles pills */}
        <div className="mb-10 pb-8 border-b border-white/[0.04]">
          <div className="text-[11px] font-semibold text-white/40 mb-3">Operating principles</div>
          <div className="flex items-center gap-2 flex-wrap">
            {OPERATING_PRINCIPLES.map((p) => (
              <span
                key={p.id}
                className="apple-pill text-[11px] text-[#86868b] hover:text-white"
              >
                {p.label}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#86868b]">
          <p>© {new Date().getFullYear()} DigiSynq. All rights reserved.</p>
          <p className="text-xs text-white/35">
            Not an agency. Not a production house. A synchronization layer.
          </p>
        </div>
      </div>
    </footer>
  );
}
