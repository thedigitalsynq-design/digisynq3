import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { audioTelemetry } from '../../utils/audioTelemetry';
import { SECTION_ORDER } from '../../data/sectionMap';

export default function Header({ onOpenIntake }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(audioTelemetry.isMuted());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [edgeNode, setEdgeNode] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    fetch('/api/edge-telemetry')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => { if (data?.node) setEdgeNode(data.node); })
      .catch(() => {});
  }, []);

  const handleToggleSound = () => {
    const newMuted = audioTelemetry.toggleMute();
    setIsMuted(newMuted);
    if (!newMuted) audioTelemetry.playSelect();
  };

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    SECTION_ORDER.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navLinks = SECTION_ORDER.map(sec => ({
    label: sec.label,
    href: sec.anchor,
    id: sec.id,
  }));

  const nodeLabel = edgeNode?.colo
    ? `${edgeNode.colo} · 47 nodes`
    : '47 nodes';

  return (
    <header className={`fsq-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="fsq-header-inner">

        {/* ── Brand ─────────────────────────────────────────── */}
        <a href="#" className="fsq-brand" onClick={() => audioTelemetry.playSelect()}>
          {/* Animated node glyph */}
          <div className="fsq-glyph" aria-hidden="true">
            <span className="fsq-glyph-core" />
            <span className="fsq-glyph-ring" />
          </div>

          {/* Word mark */}
          <div className="fsq-wordmark">
            <span className="fsq-name">FIX-SYNQ</span>
            <span className="fsq-tagline">Connect. Don't accumulate.</span>
          </div>

          {/* Live edge status — separated from wordmark visually */}
          <div
            className="fsq-status"
            title={edgeNode
              ? `Edge: ${edgeNode.city || edgeNode.colo}, ${edgeNode.country}`
              : 'Cloudflare Global Edge'}
          >
            <span className="live-dot" />
            <span className="fsq-status-text">{nodeLabel}</span>
          </div>
        </a>

        {/* ── Desktop Nav ───────────────────────────────────── */}
        <nav className="fsq-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`fsq-nav-link${activeSection === link.id ? ' fsq-nav-link--active' : ''}`}
              onClick={() => audioTelemetry.playHover()}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── Right Controls ────────────────────────────────── */}
        <div className="fsq-controls">
          {/* Sound toggle */}
          <button
            className={`fsq-sound-btn ${isMuted ? '' : 'active'}`}
            onClick={handleToggleSound}
            title={isMuted ? 'Unmute audio' : 'Mute audio'}
            aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
          >
            {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="fsq-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ─────────────────────────────────── */}
      {mobileMenuOpen && (
        <div
          className="fsq-drawer-overlay"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="fsq-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="fsq-drawer-brand">
              <span className="fsq-name">FIX-SYNQ</span>
              <span className="fsq-tagline">Connect. Don't accumulate.</span>
            </div>
            <nav className="fsq-drawer-nav">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`fsq-drawer-link${activeSection === link.id ? ' fsq-drawer-link--active' : ''}`}
                  onClick={() => {
                    audioTelemetry.playHover();
                    setMobileMenuOpen(false);
                  }}
                >
                  {link.label}
                  <ArrowUpRight size={13} className="fsq-drawer-arrow" />
                </a>
              ))}
            </nav>
            <button
              className="btn-signal fsq-drawer-cta"
              onClick={() => {
                audioTelemetry.playSelect();
                setMobileMenuOpen(false);
                onOpenIntake();
              }}
            >
              <span>Bring us a problem</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        /* ============================================================
           FSQ HEADER — Clean, precise, breathing room.
           Floating glass pill. Every element earns its position.
        ============================================================ */

        .fsq-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 999;
          display: flex;
          justify-content: center;
          padding: 1rem 1.5rem;
          pointer-events: none;
          transition: padding 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .fsq-header.scrolled {
          padding: 0.65rem 1.5rem;
        }

        /* The pill itself */
        .fsq-header-inner {
          pointer-events: auto;
          width: 100%;
          max-width: 1200px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0;

          /* Glass */
          background: rgba(7, 19, 14, 0.72);
          backdrop-filter: blur(40px) saturate(200%);
          -webkit-backdrop-filter: blur(40px) saturate(200%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            0 4px 24px rgba(0, 0, 0, 0.5),
            0 1px 2px rgba(0, 0, 0, 0.3);
          padding: 0.45rem 0.55rem 0.45rem 1.2rem;
          transition:
            background 0.4s ease,
            border-color 0.4s ease,
            box-shadow 0.4s ease;
        }

        .fsq-header.scrolled .fsq-header-inner {
          background: rgba(7, 19, 14, 0.88);
          border-color: rgba(62, 180, 137, 0.22);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.14),
            0 8px 32px rgba(0, 0, 0, 0.65),
            0 0 0 1px rgba(62, 180, 137, 0.08);
        }

        /* ── Brand ─────────────────────────────────────────── */
        .fsq-brand {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          flex-shrink: 0;
        }

        /* Animated glyph */
        .fsq-glyph {
          position: relative;
          width: 20px; height: 20px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .fsq-glyph-core {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--signal);
          box-shadow: 0 0 6px var(--signal);
          position: relative; z-index: 1;
        }

        .fsq-glyph-ring {
          position: absolute; inset: 0;
          border-radius: 50%;
          border: 1.5px solid transparent;
          border-top-color: rgba(62, 180, 137, 0.55);
          border-right-color: rgba(62, 180, 137, 0.2);
          animation: fsqSpin 7s linear infinite;
        }

        @keyframes fsqSpin {
          to { transform: rotate(360deg); }
        }

        /* Wordmark */
        .fsq-wordmark {
          display: flex;
          flex-direction: column;
          gap: 0;
          line-height: 1;
        }

        .fsq-name {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          color: #FFFFFF;
          line-height: 1.1;
        }

        .fsq-tagline {
          font-family: var(--font-body);
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.01em;
          color: rgba(226, 236, 230, 0.65);
          line-height: 1.2;
          margin-top: 1px;
        }

        /* Live status — clean pill */
        .fsq-status {
          display: flex;
          align-items: center;
          gap: 0.38rem;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
          padding: 0.22rem 0.65rem;
          margin-left: 0.35rem;
          flex-shrink: 0;
        }

        .live-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--signal);
          box-shadow: 0 0 5px var(--signal);
          flex-shrink: 0;
        }

        .fsq-status-text {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: rgba(255, 255, 255, 0.7);
          white-space: nowrap;
        }

        /* ── Desktop Nav ───────────────────────────────────── */
        .fsq-nav {
          display: flex;
          align-items: center;
          gap: 0;
          margin: 0 0.5rem;
          padding: 0 0.75rem;
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }

        .fsq-nav-link {
          font-family: var(--font-body);
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.005em;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          padding: 0.4rem 0.7rem;
          border-radius: 9999px;
          position: relative;
          transition:
            color 0.2s ease,
            background 0.2s ease;
          white-space: nowrap;
        }

        .fsq-nav-link::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 60%;
          height: 1.5px;
          background: var(--signal);
          border-radius: 9999px;
          box-shadow: 0 0 6px var(--signal);
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease;
          opacity: 0;
        }

        .fsq-nav-link:hover {
          color: #FFFFFF;
          background: rgba(255, 255, 255, 0.06);
        }

        .fsq-nav-link:hover::after {
          transform: translateX(-50%) scaleX(1);
          opacity: 1;
        }

        .fsq-nav-link--active {
          color: rgba(255, 255, 255, 0.95);
        }

        .fsq-nav-link--active::after {
          transform: translateX(-50%) scaleX(1);
          opacity: 1;
        }

        /* ── Right controls ────────────────────────────────── */
        .fsq-controls {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-shrink: 0;
        }

        /* Sound icon button — minimal */
        .fsq-sound-btn {
          width: 32px; height: 32px;
          display: flex; align-items: center; justify-content: center;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
          color: rgba(255, 255, 255, 0.55);
          cursor: pointer;
          transition:
            color 0.18s ease,
            border-color 0.18s ease,
            background 0.18s ease;
        }

        .fsq-sound-btn:hover {
          color: #FFFFFF;
          border-color: rgba(255, 255, 255, 0.22);
          background: rgba(255, 255, 255, 0.07);
        }

        .fsq-sound-btn.active {
          color: var(--telemetry);
          border-color: rgba(94, 234, 212, 0.35);
        }

        /* CTA */
        .fsq-cta {
          padding: 0.48rem 1.15rem;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0em;
          gap: 0;
          white-space: nowrap;
        }

        /* Mobile toggle */
        .fsq-mobile-toggle {
          display: none;
          width: 36px; height: 36px;
          align-items: center; justify-content: center;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 9999px;
          color: #FFFFFF;
          cursor: pointer;
          transition: background 0.18s ease;
        }

        .fsq-mobile-toggle:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        /* ── Mobile Drawer ─────────────────────────────────── */
        .fsq-drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(3, 10, 7, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 1000;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 5rem 1.25rem 2rem;
        }

        .fsq-drawer {
          width: 100%;
          max-width: 460px;
          background: rgba(11, 28, 21, 0.96);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.7);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .fsq-drawer-brand {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .fsq-drawer-brand .fsq-name {
          font-size: 1.1rem;
        }

        .fsq-drawer-brand .fsq-tagline {
          color: rgba(226, 236, 230, 0.5);
        }

        .fsq-drawer-nav {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .fsq-drawer-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-body);
          font-size: 0.97rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          padding: 0.65rem 0.85rem;
          border-radius: 12px;
          border-left: 2px solid transparent;
          transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
        }

        .fsq-drawer-link:hover {
          background: rgba(255, 255, 255, 0.06);
          color: #FFFFFF;
        }

        .fsq-drawer-link--active {
          color: var(--signal-bright);
          border-left-color: var(--signal);
          background: rgba(62, 180, 137, 0.06);
        }

        .fsq-drawer-arrow {
          opacity: 0.3;
        }

        .fsq-drawer-cta {
          width: 100%;
          justify-content: center;
          padding: 0.75rem 1.25rem;
          font-size: 0.9rem;
        }

        /* ── Responsive ────────────────────────────────────── */
        @media (max-width: 1060px) {
          .fsq-nav { display: none; }
          .fsq-mobile-toggle { display: flex; }
          .fsq-status { display: none; }
        }

        @media (max-width: 480px) {
          .fsq-header { padding: 0.75rem 1rem; }
          .fsq-tagline { display: none; }
        }
      `}</style>
    </header>
  );
}
