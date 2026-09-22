import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/the-synq', label: 'The synq' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/ecosystem', label: 'Ecosystem' },
  { href: '/capabilities', label: 'Capabilities' },
  { href: '/use-cases', label: 'Use cases' },
  { href: '/workshops', label: 'Workshops' },
  { href: '/about', label: 'About' },
];

export function SiteNav() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#05060D]/95 backdrop-blur-xl border-b border-white/[0.06]' : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group shrink-0"
            aria-label="DigiSynq — Home"
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-[#0E1120] border border-white/10 flex items-center justify-center">
                <img
                  src="/digisynq-logo.png"
                  alt=""
                  className="w-5 h-5 object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                {/* Fallback: D mark */}
                <span className="text-[#5CE1E6] font-mono font-black text-xs absolute">D</span>
              </div>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#5CE1E6] rounded-full" />
            </div>
            <div>
              <div className="text-[14px] font-bold tracking-tight text-white group-hover:text-[#5CE1E6] transition-colors">
                DigiSynq
              </div>
              <div className="text-[10px] tracking-normal text-white/40">
                Cinema synchronization
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-150 ${
                  isActive(link.href)
                    ? 'text-[#5CE1E6] bg-[#5CE1E6]/08'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                }`}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              to="/start"
              className="hidden sm:flex btn-primary text-[12px] px-5 py-2.5"
              id="nav-start-synq-cta"
            >
              Start a synq
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg border border-white/10 text-white/70 hover:text-white hover:border-white/20 transition-all"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-[#05060D]/98 backdrop-blur-xl border-b border-white/[0.06] px-4 pb-6 pt-2"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive(link.href)
                    ? 'text-[#5CE1E6] bg-[#5CE1E6]/08 border border-[#5CE1E6]/20'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/start"
              className="mt-2 btn-primary justify-center text-sm"
              id="mobile-start-synq-cta"
            >
              Start a synq
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
