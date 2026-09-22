import React, { useEffect } from 'react';

/* ============================================================
   FIX-SYNQ — CLEAN DESIGN SYSTEM
   Philosophy: Restraint is the luxury. Every detail earns its place.
   No gimmicks. No noise. Precision over performance.
   ============================================================ */

export default function DesignSystem() {

  // ── Scroll Reveal — subtle, one-time, purpose-driven ────────
  useEffect(() => {
    const targets = document.querySelectorAll(
      '.section-block, .bento-card, .diagnostic-panel, .section-eyebrow, .section-title, .section-subtitle'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Stagger direct bento-card children
            const cards = entry.target.querySelectorAll(':scope > .bento-card, :scope > * > .bento-card');
            cards.forEach((card, i) => {
              card.style.transitionDelay = `${i * 55}ms`;
              card.classList.add('is-visible');
            });
            observer.unobserve(entry.target); // one-shot — clean
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ── Footer climax stagger ────────────────────────────────────
  useEffect(() => {
    const steps = document.querySelectorAll('.climax-step');
    if (!steps.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Array.from(steps).indexOf(entry.target);
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, idx * 90);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    steps.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // ── Subtle 3D tilt — 2° max, barely noticeable but felt ─────
  useEffect(() => {
    const cards = document.querySelectorAll('.bento-card');

    const handleMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      card.style.transform = `perspective(1200px) rotateX(${-dy * 2}deg) rotateY(${dx * 2}deg) translateY(-3px)`;
    };

    const handleLeave = (e) => {
      const card = e.currentTarget;
      card.style.transform = '';
    };

    cards.forEach((c) => {
      c.addEventListener('mousemove', handleMove, { passive: true });
      c.addEventListener('mouseleave', handleLeave);
    });

    return () => cards.forEach((c) => {
      c.removeEventListener('mousemove', handleMove);
      c.removeEventListener('mouseleave', handleLeave);
    });
  }, []);

  // ── Animated counters ────────────────────────────────────────
  useEffect(() => {
    const counters = document.querySelectorAll('[data-count-to]');
    if (!counters.length) return;

    const animateCounter = (el) => {
      const target = parseFloat(el.dataset.countTo);
      const duration = parseInt(el.dataset.countDuration || '1600');
      const decimals = parseInt(el.dataset.countDecimals || '0');
      const suffix = el.dataset.countSuffix || '';
      const prefix = el.dataset.countPrefix || '';
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
        el.textContent = `${prefix}${(target * eased).toFixed(decimals)}${suffix}`;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting && !e.target.dataset.counted) {
          e.target.dataset.counted = 'true';
          animateCounter(e.target);
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.5 }
    );

    counters.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <style>{`
      /* ================================================================
         SCROLL REVEAL — Fade up, once, done.
      ================================================================ */
      .section-block,
      .bento-card,
      .diagnostic-panel,
      .section-eyebrow,
      .section-title,
      .section-subtitle {
        opacity: 0;
        transform: translateY(18px);
        transition:
          opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
          transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      }

      .section-block.is-visible,
      .bento-card.is-visible,
      .diagnostic-panel.is-visible,
      .section-eyebrow.is-visible,
      .section-title.is-visible,
      .section-subtitle.is-visible {
        opacity: 1;
        transform: translateY(0);
      }

      /* ================================================================
         HERO HEADLINE — Single-color precision, no rainbow.
         A clean white-to-mint that feels earned, not performed.
      ================================================================ */
      .hero-headline {
        color: #FFFFFF;
      }

      /* ================================================================
         SECTION TITLE — Pure white. Let spacing & weight do the work.
      ================================================================ */
      .section-title {
        color: #FFFFFF;
        -webkit-text-fill-color: #FFFFFF;
      }

      /* ================================================================
         SECTION EYEBROW DOT — Slow, calm pulse. Not a rave.
      ================================================================ */
      .section-eyebrow::before {
        animation: calmPulse 3s ease-in-out infinite;
      }
      @keyframes calmPulse {
        0%, 100% { opacity: 1;   transform: scale(1); }
        50%       { opacity: 0.4; transform: scale(0.7); }
      }

      /* ================================================================
         BENTO CARD — Specular edge only. No sweep, no shimmer chaos.
         The top hairline catches light on hover. That's it.
      ================================================================ */
      .bento-card {
        overflow: hidden;
        transition:
          transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
          border-color 0.3s ease,
          box-shadow 0.3s ease,
          background 0.3s ease !important;
      }

      .bento-card::before {
        transition: opacity 0.35s ease, background 0.35s ease !important;
      }

      .bento-card:hover::before {
        opacity: 1;
      }

      /* Remove the specular sweep — too showy */
      .bento-card::after {
        display: none;
      }

      /* ================================================================
         DIAGNOSTIC PANEL — Remove radial glow corner. Keep it clean.
      ================================================================ */
      .diagnostic-panel::after {
        display: none;
      }

      /* ================================================================
         SECTION DIVIDER — A single centered jade hairline. Precise.
      ================================================================ */
      .section-block {
        position: relative;
      }
      .section-block::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(62, 180, 137, 0.28), transparent);
        pointer-events: none;
      }

      /* ================================================================
         NAV LINKS — Underline slides from left. Precise, not showy.
      ================================================================ */
      .desktop-nav a {
        position: relative;
      }
      .desktop-nav a::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 1px;
        background: var(--signal);
        border-radius: 2px;
        transition: width 0.28s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .desktop-nav a:hover::after {
        width: 100%;
      }

      /* ================================================================
         LIVE DOT — Soft, organic. Like a heartbeat, not a strobe.
      ================================================================ */
      .live-dot {
        animation: heartbeat 2.8s ease-in-out infinite !important;
      }
      @keyframes heartbeat {
        0%, 100% { opacity: 1;   transform: scale(1); }
        40%       { opacity: 0.3; transform: scale(0.6); }
        55%       { opacity: 0.8; transform: scale(0.9); }
      }

      /* ================================================================
         FOOTER CLIMAX STAGGER — Reveal each line cleanly.
      ================================================================ */
      .climax-step {
        opacity: 0;
        transform: translateY(12px);
        transition:
          opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
          transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .climax-step.is-visible {
        opacity: 1;
        transform: translateY(0);
      }

      /* ================================================================
         BUTTON — Shimmer on primary only. Ghost stays clean.
      ================================================================ */
      .btn-signal {
        position: relative;
        overflow: hidden;
      }
      .btn-signal::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          100deg,
          transparent 30%,
          rgba(255, 255, 255, 0.22) 50%,
          transparent 70%
        );
        transform: translateX(-120%);
        transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .btn-signal:hover::after {
        transform: translateX(120%);
      }

      /* ================================================================
         TEXT SELECTION — Jade tint. Invisible but felt.
      ================================================================ */
      ::selection {
        background: rgba(62, 180, 137, 0.28);
        color: #FFFFFF;
      }
      ::-moz-selection {
        background: rgba(62, 180, 137, 0.28);
        color: #FFFFFF;
      }

      /* ================================================================
         SCROLLBAR — Minimal jade. Thinner. More elegant.
      ================================================================ */
      ::-webkit-scrollbar {
        width: 5px !important;
      }
      ::-webkit-scrollbar-thumb {
        background: rgba(62, 180, 137, 0.25) !important;
        border-radius: 99px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(62, 180, 137, 0.45) !important;
      }

      /* ================================================================
         FOCUS RING — Clean, accessible, on-brand.
      ================================================================ */
      button:focus-visible,
      a:focus-visible {
        outline: 1.5px solid var(--signal);
        outline-offset: 3px;
        border-radius: var(--radius-sm);
      }

      /* ================================================================
         INPUT FOCUS — Signal border, no clutter.
      ================================================================ */
      input:focus,
      textarea:focus,
      select:focus {
        outline: none;
        border-color: var(--signal) !important;
        box-shadow: 0 0 0 2px var(--signal-subtle) !important;
      }

      /* ================================================================
         REDUCE MOTION — Instant states, no animation.
      ================================================================ */
      @media (prefers-reduced-motion: reduce) {
        .section-block, .bento-card, .diagnostic-panel,
        .section-eyebrow, .section-title, .section-subtitle,
        .climax-step {
          opacity: 1 !important;
          transform: none !important;
          transition: none !important;
        }
        .section-eyebrow::before,
        .live-dot {
          animation: none !important;
        }
        .btn-signal::after {
          display: none;
        }
      }
    `}</style>
  );
}
