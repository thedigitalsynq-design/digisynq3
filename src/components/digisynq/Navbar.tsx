import { useState } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, BookOpen } from 'lucide-react';
import digisynqLogo from '../../assets/digisynq-logo.png';

interface NavbarProps {
  onOpenJoinModal: (role?: string) => void;
  onOpenRunbook?: () => void;
  onSelectProductCategory?: (category: string) => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

export const Navbar: FC<NavbarProps> = ({
  onOpenJoinModal,
  onOpenRunbook,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Platform', href: '#platform-model' },
    { label: 'Products', href: '#product-ecosystem' },
    { label: 'Network', href: '#network-flow' },
    { label: 'Solutions', href: '#audience-solutions' },
    { label: 'Intelligence', href: '#intelligence' },
    { label: 'Marketplace', href: '#marketplace' },
    { label: 'About', href: '#about-vision' },
  ];

  return (
    <header
      id="main-navigation"
      className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto rounded-full bg-[#070A12]/85 backdrop-blur-2xl border border-white/[0.16] shadow-[0_16px_45px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.18)] px-3.5 sm:px-5 py-2 flex items-center justify-between pointer-events-auto">

        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center group focus:outline-none flex-shrink-0 mr-1 sm:mr-3"
          id="brand-logo-link"
        >
          <img
            src={digisynqLogo}
            alt="DigiSynq — asset-light cinema network logo"
            width={132}
            height={32}
            className="h-7 sm:h-8 w-auto object-contain transition-opacity group-hover:opacity-90"
          />
        </a>

        {/* Desktop Nav Links — Refined, Sleek, Cinematic */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[12.5px] font-sans font-medium text-white/75 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.08] transition-all duration-200 tracking-normal whitespace-nowrap"
              id={`nav-link-${link.label.toLowerCase()}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
          {onOpenRunbook && (
            <button
              onClick={onOpenRunbook}
              className="inline-flex items-center gap-1.5 text-[11.5px] font-sans font-semibold tracking-wide text-[#5CE1E6] hover:text-white px-3 py-1.5 rounded-full bg-[#5CE1E6]/10 hover:bg-[#5CE1E6]/20 border border-[#5CE1E6]/30 hover:border-[#5CE1E6]/60 transition-all duration-200 whitespace-nowrap"
              id="cta-open-runbook-nav"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Runbook</span>
            </button>
          )}

          <a
            href="#product-directory"
            className="text-[12.5px] font-sans font-medium text-white/75 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.08] transition-all duration-200 whitespace-nowrap"
            id="cta-explore-directory"
          >
            Explore
          </a>

          <button
            onClick={() => onOpenJoinModal()}
            className="group inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#070A12] bg-white hover:bg-white/90 px-4 py-1.5 rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_rgba(92,225,230,0.35)] active:scale-95 whitespace-nowrap flex-shrink-0"
            id="cta-join-network-nav"
          >
            <span>Join club</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex sm:hidden items-center gap-2">
          {onOpenRunbook && (
            <button
              onClick={onOpenRunbook}
              className="text-[11px] font-sans font-semibold text-[#5CE1E6] bg-[#5CE1E6]/10 border border-[#5CE1E6]/30 px-2.5 py-1.5 rounded-full whitespace-nowrap"
            >
              Docs
            </button>
          )}
          <button
            onClick={() => onOpenJoinModal()}
            className="text-[11px] font-semibold bg-white text-[#070A12] px-3 py-1.5 rounded-full active:scale-95 transition-transform whitespace-nowrap"
          >
            Join
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-white/85 hover:text-white focus-visible:outline-2 focus-visible:outline-[#5CE1E6] rounded-xl bg-white/[0.06] border border-white/[0.10] transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden max-w-6xl mx-auto mt-2 bg-[#070A12]/95 border border-white/[0.14] rounded-3xl px-6 pt-5 pb-6 space-y-1 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9),inset_0_1px_1px_0_rgba(255,255,255,0.2)] overflow-hidden pointer-events-auto"
          >
            {/* Logo in mobile drawer */}
            <div className="pb-4 mb-2 border-b border-white/[0.08]">
              <img
                src={digisynqLogo}
                alt="DigiSynq — asset-light cinema network logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs font-mono font-bold tracking-[0.2em] text-white/80 hover:text-[#5CE1E6] py-2.5 border-b border-white/[0.06] transition-colors last:border-0"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2.5">
              {onOpenRunbook && (
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenRunbook(); }}
                  className="w-full flex items-center justify-center gap-2 text-center text-xs font-mono font-bold tracking-[0.18em] text-[#5CE1E6] bg-[#5CE1E6]/10 border border-[#5CE1E6]/30 py-2.5 rounded-full transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Executive runbook</span>
                </button>
              )}
              <a
                href="#product-directory"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center text-xs font-mono font-bold tracking-[0.2em] text-white/70 py-2.5 rounded-full border border-white/[0.16] hover:bg-white/[0.06] transition-colors"
              >
                Explore directory
              </a>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenJoinModal(); }}
                className="w-full text-center text-xs font-bold tracking-[2.5px] text-[#070A12] bg-white hover:bg-white/90 py-3 rounded-full transition-colors active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.25)]"
              >
                Join the network
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
