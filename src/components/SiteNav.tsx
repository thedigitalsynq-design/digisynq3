import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import digisynqLogo from '../assets/digisynq-logo.png';

const NAV_LINKS = [
  { href: '/the-synq', label: 'The Synq' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/ecosystem', label: 'Ecosystem' },
  { href: '/runbook', label: 'Runbook' },
  { href: '/workshops', label: 'Workshops' },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'About' },
];

export function SiteNav() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 sm:pt-6 px-4 sm:px-8 pointer-events-none" role="banner">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <div
          className={`px-5 sm:px-6 py-3 rounded-full border transition-all duration-300 flex items-center justify-between gap-6 ${
            scrolled 
              ? 'bg-[#090b10]/90 border-white/[0.1] shadow-[0_16px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl' 
              : 'bg-[#090b10]/60 border-white/[0.06] backdrop-blur-xl'
          }`}
        >
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center group shrink-0"
            aria-label="DigiSynq home"
          >
            <img
              src={digisynqLogo}
              alt="DigiSynq"
              className="h-5 sm:h-5.5 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
            />
          </Link>

          {/* Desktop Nav - Clean & Spacious */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 whitespace-nowrap ${
                    active
                      ? 'text-white bg-white/[0.08] shadow-sm'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.03]'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Primary Action Button */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/start"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-white text-[#06080d] hover:bg-white/90 font-medium text-xs tracking-wide transition-all duration-200 active:scale-95 shadow-sm"
              id="nav-start-synq-cta"
            >
              <span>Start a synq</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

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

        {/* Mobile Minimal Menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden mt-3 p-5 rounded-3xl bg-[#090b10]/95 backdrop-blur-2xl border border-white/[0.08] shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-sm font-medium flex items-center justify-between transition-all ${
                    isActive(link.href)
                      ? 'text-white bg-white/[0.08]'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={14} className="opacity-40" />
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
