import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { audioTelemetry } from '../../utils/audioTelemetry';

export default function Footer({ onOpenIntake }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    audioTelemetry.playHover();
  };

  return (
    <footer className="site-footer">
      {/* SECTION 31: FINAL HOMEPAGE UNDERSTANDING CLIMAX */}
      <div className="footer-climax-block">
        <div className="container">
          <div className="section-eyebrow">
            <span>The final understanding</span>
          </div>

          <div className="final-message-stack">
            <div className="climax-step">
              <span className="climax-num mono-readout">01</span>
              <h2 className="climax-line">The industry has problems.</h2>
            </div>
            <div className="climax-step">
              <span className="climax-num mono-readout text-signal">02</span>
              <h2 className="climax-line text-signal">The problems are connected.</h2>
            </div>
            <div className="climax-step">
              <span className="climax-num mono-readout">03</span>
              <h2 className="climax-line">The causes are deeper than the symptoms.</h2>
            </div>
            <div className="climax-step">
              <span className="climax-num mono-readout text-signal">04</span>
              <h2 className="climax-line text-signal">FIX-SYNQ maps the root-cause network.</h2>
            </div>
            <div className="climax-step">
              <span className="climax-num mono-readout">05</span>
              <h2 className="climax-line">We find where intervention is possible.</h2>
            </div>
            <div className="climax-step">
              <span className="climax-num mono-readout">06</span>
              <h2 className="climax-line">We mobilise the right people, resources and systems.</h2>
            </div>
            <div className="climax-step">
              <span className="climax-num mono-readout text-signal highlight-glow">07</span>
              <h2 className="climax-line text-signal highlight-glow">We measure what changes.</h2>
            </div>
            <div className="climax-step">
              <span className="climax-num mono-readout">08</span>
              <h2 className="climax-line">Every case creates more intelligence.</h2>
            </div>
            <div className="climax-step">
              <span className="climax-num mono-readout text-signal">09</span>
              <h2 className="climax-line text-signal">Bring us a problem.</h2>
            </div>
          </div>

          <div className="final-cta-bar">
            <button
              className="btn-signal btn-large"
              onClick={() => {
                audioTelemetry.playSelect();
                onOpenIntake();
              }}
            >
              <span>Bring us a problem</span>
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 32 & SECTION 26: BRAND LOCKUP & SYSTEM CREDITS */}
      <div className="footer-system-grid">
        <div className="container footer-grid-inner">
          {/* Brand Principle Lockup */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <div className="footer-logo-glyph">
                <span className="glyph-core"></span>
              </div>
              <span className="footer-brand-name">FIX-SYNQ</span>
            </div>

            <div className="footer-lockup-details">
              <span className="mono-readout text-signal" style={{ fontWeight: 600, letterSpacing: '0.02em' }}>
                Root-cause intelligence & intervention for the entertainment industry
              </span>
              <span className="mono-readout text-muted" style={{ fontStyle: 'italic', marginTop: '0.2rem' }}>
                “Don't own everything. Connect everything that matters.”
              </span>
              <span className="mono-readout text-dim" style={{ fontSize: '0.7rem', marginTop: '0.2rem' }}>
                Access over ownership • Connection over accumulation • Intelligence over infrastructure
              </span>
            </div>

            <div className="footer-motto-box">
              <p className="motto-text">
                Find the root.<br />
                Fix the cause.<br />
                Measure the change.
              </p>
            </div>
          </div>

          {/* Conceptual Sitemap */}
          <div className="footer-nav-col">
            <span className="mono-readout nav-col-label">Diagnostic sections</span>
            <ul className="footer-links-list">
              <li><a href="#section-01" onClick={() => audioTelemetry.playHover()}>Problem tracer</a></li>
              <li><a href="#section-02" onClick={() => audioTelemetry.playHover()}>The hidden layer</a></li>
              <li><a href="#section-03" onClick={() => audioTelemetry.playHover()}>47 stakeholders</a></li>
              <li><a href="#section-04" onClick={() => audioTelemetry.playHover()}>Problem matrix</a></li>
              <li><a href="#section-05" onClick={() => audioTelemetry.playHover()}>Root network canvas</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <span className="mono-readout nav-col-label">Asset-light suite</span>
            <ul className="footer-links-list">
              <li><a href="#section-04" onClick={() => audioTelemetry.playHover()}>Value-creation system</a></li>
              <li><a href="#section-05" onClick={() => audioTelemetry.playHover()}>The asset-light network</a></li>
              <li><a href="#section-05" onClick={() => audioTelemetry.playHover()}>Ownership vs access</a></li>
              <li><a href="#section-07" onClick={() => audioTelemetry.playHover()}>Case reconstructions</a></li>
              <li><a href="#section-06" onClick={() => audioTelemetry.playHover()}>Trust, quality & FAQ</a></li>
            </ul>
          </div>

          {/* Telemetry & Keyboard Controls HUD */}
          <div className="footer-system-col">
            <span className="mono-readout nav-col-label">System telemetry</span>
            <div className="system-status-box">
              <div className="status-item">
                <span className="status-indicator-dot"></span>
                <span className="mono-readout">Root engine: v2.4.0 active</span>
              </div>
              <div className="status-item">
                <span className="mono-readout text-dim">Nodes in mesh: 47</span>
              </div>
              <div className="status-item">
                <span className="mono-readout text-dim">Verified paths: 180+</span>
              </div>
            </div>

            <div className="scroll-top-wrap">
              <button className="scroll-top-btn" onClick={scrollToTop}>
                <span>Return to top</span>
                <ArrowUp size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Legal & Anti-Jargon Mandate */}
      <div className="footer-legal-bar">
        <div className="container legal-inner">
          <span className="mono-readout text-dim">
            © {new Date().getFullYear()} FIX-SYNQ. All rights reserved. Not an agency. Not a consultancy.
          </span>
          <span className="mono-readout text-dim">
            Engineered as a category-defining diagnostic system
          </span>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: #040E0A;
          border-top: 1px solid var(--border-medium);
          position: relative;
          z-index: 2;
        }

        .footer-climax-block {
          padding: clamp(4.5rem, 8vw, 7.5rem) 0;
          border-bottom: 1px solid var(--border-subtle);
          background: radial-gradient(circle at 50% 100%, rgba(62, 180, 137, 0.12) 0%, transparent 70%);
        }

        .final-message-stack {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 3.5rem;
        }

        .climax-step {
          display: flex;
          align-items: baseline;
          gap: 1.25rem;
        }

        .climax-num {
          font-size: clamp(0.85rem, 1.6vw, 1.25rem);
          opacity: 0.65;
          min-width: 2.2ch;
        }

        .climax-line {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 3.8vw, 3.2rem);
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 1.15;
          color: var(--text-pure);
        }

        .climax-line.highlight-glow {
          text-shadow: 0 0 35px var(--signal-glow);
        }

        .final-cta-bar {
          display: flex;
          align-items: center;
        }

        .btn-large {
          padding: 1.1rem 2.4rem;
          font-size: 0.95rem;
        }

        /* System Grid */
        .footer-system-grid {
          padding: 4.5rem 0;
        }

        .footer-grid-inner {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 2.5rem;
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .footer-brand-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .footer-logo-glyph {
          width: 20px;
          height: 20px;
          border: 1.5px solid var(--signal);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-logo-glyph .glyph-core {
          width: 6px;
          height: 6px;
          background: var(--signal);
          border-radius: 50%;
        }

        .footer-brand-name {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-pure);
          letter-spacing: 0.04em;
        }

        .footer-lockup-details {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          font-size: 0.82rem;
          font-weight: 500;
        }

        .footer-motto-box {
          border-left: 2px solid var(--signal);
          padding-left: 1rem;
          margin-top: 0.5rem;
        }

        .motto-text {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.1rem;
          line-height: 1.35;
          letter-spacing: 0.02em;
          color: var(--text-pure);
        }

        .nav-col-label {
          color: var(--text-muted);
          font-size: 0.82rem;
          font-weight: 700;
          display: block;
          margin-bottom: 1.25rem;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links-list a {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color var(--transition-fast);
        }

        .footer-links-list a:hover {
          color: var(--signal-bright);
        }

        /* Telemetry Status */
        .system-status-box {
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-specular);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .status-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .status-indicator-dot {
          width: 6px;
          height: 6px;
          background: var(--signal);
          border-radius: 50%;
          box-shadow: 0 0 6px var(--signal);
        }

        .scroll-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
          color: var(--text-muted);
          padding: 0.5rem 1.15rem;
          border-radius: var(--radius-pill);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .scroll-top-btn:hover {
          border-color: var(--glass-border-hover);
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-pure);
          transform: translateY(-2px);
        }

        /* Legal Bar */
        .footer-legal-bar {
          border-top: 1px solid var(--border-subtle);
          padding: 1.25rem 0;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--text-muted);
        }

        .legal-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        @media (max-width: 1024px) {
          .footer-grid-inner {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .footer-grid-inner {
            grid-template-columns: 1fr;
          }
          .legal-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
