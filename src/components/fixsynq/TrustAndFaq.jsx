import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, ChevronUp, DollarSign } from 'lucide-react';
import { audioTelemetry } from '../../utils/audioTelemetry';
import { TRUST_PILLARS, COMMERCIAL_MODELS, ASSET_LIGHT_FAQS } from '../../data/trustFaqData';

export default function TrustAndFaq() {
  const [activeFaqCategory, setActiveFaqCategory] = useState('All');
  const [expandedFaqIndex, setExpandedFaqIndex] = useState(0);

  const categories = ['All', 'Model', 'Resources', 'Execution', 'Quality', 'Economics', 'Reliability'];

  const filteredFaqs = activeFaqCategory === 'All'
    ? ASSET_LIGHT_FAQS
    : ASSET_LIGHT_FAQS.filter((f) => f.category.toLowerCase() === activeFaqCategory.toLowerCase());

  const handleToggleFaq = (idx) => {
    setExpandedFaqIndex(expandedFaqIndex === idx ? null : idx);
    audioTelemetry.playHover();
  };

  const handleCategorySelect = (cat) => {
    setActiveFaqCategory(cat);
    setExpandedFaqIndex(0);
    audioTelemetry.playSelect();
  };

  return (
    <section className="section-block trust-faq-section" id="section-06">
      <div className="container">
        {/* ==========================================================================
            TRUST & QUALITY ARCHITECTURE
            ========================================================================== */}
        <div className="trust-header-block">
          <div className="section-eyebrow">
            <span>11 — Trust &amp; transparency</span>
          </div>
          <h2 className="section-title">
            How an asset-light system guarantees world-class quality.
          </h2>
          <p className="section-subtitle">
            Being asset-light does not mean being lightweight. Because we do not rely on ownership of heavy infrastructure, our value depends entirely on the rigor of our selection, coordination, verification, and accountability.
          </p>
        </div>

        {/* 6 Trust Pillars Bento Grid */}
        <div className="bento-grid" style={{ marginBottom: '4.5rem' }}>
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.num}
              className="bento-card bento-col-4"
              onMouseEnter={() => audioTelemetry.playHover()}
            >
              <span className="bento-corner-bracket bento-corner-tl"></span>
              <span className="bento-corner-bracket bento-corner-tr"></span>
              <span className="bento-corner-bracket bento-corner-bl"></span>
              <span className="bento-corner-bracket bento-corner-br"></span>

              <div className="bento-header" style={{ marginBottom: '0.85rem' }}>
                <span className="mono-readout text-signal" style={{ fontWeight: 700, fontSize: '0.74rem' }}>
                  Protocol {pillar.num}
                </span>
                <ShieldCheck size={16} className="text-signal" />
              </div>

              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-pure)', marginBottom: '0.25rem' }}>
                {pillar.title}
              </h4>
              <span className="mono-readout text-muted" style={{ fontSize: '0.78rem', fontWeight: 600, display: 'block', marginBottom: '0.85rem' }}>
                {pillar.subtitle}
              </span>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* ==========================================================================
            COMMERCIAL TRANSPARENCY & BUSINESS MODEL
            ========================================================================== */}
        <div className="commercial-block" style={{ marginBottom: '5rem' }}>
          <div className="section-eyebrow">
            <span>Commercial model</span>
          </div>
          <h3 className="section-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '0.75rem' }}>
            How FIX-SYNQ operates commercially
          </h3>
          <p className="section-subtitle" style={{ maxWidth: '780px', marginBottom: '2rem' }}>
            We do not sell bloated hourly retainers or marked-up agency hours. Our commercial structures align directly with problem complexity, coordination scope, and delivered economic delta.
          </p>

          <div className="bento-grid">
            {COMMERCIAL_MODELS.map((model) => (
              <div key={model.tag} className="bento-card bento-col-4 highlight-signal">
                <span className="bento-corner-bracket bento-corner-tl"></span>
                <span className="bento-corner-bracket bento-corner-tr"></span>
                <span className="bento-corner-bracket bento-corner-bl"></span>
                <span className="bento-corner-bracket bento-corner-br"></span>

                <div className="bento-header" style={{ marginBottom: '0.75rem' }}>
                  <span className="telemetry-tag signal">{model.tag}</span>
                  <DollarSign size={16} className="text-signal" />
                </div>

                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-pure)', marginBottom: '0.75rem' }}>
                  {model.title}
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div>
                    <span className="mono-readout text-muted" style={{ fontSize: '0.78rem', fontWeight: 600 }}>Best suited for:</span>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', margin: '0.2rem 0 0', lineHeight: 1.45 }}>{model.bestFor}</p>
                  </div>
                  <div>
                    <span className="mono-readout text-signal" style={{ fontSize: '0.78rem', fontWeight: 700 }}>Structure:</span>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-pure)', margin: '0.2rem 0 0', lineHeight: 1.45 }}>{model.structure}</p>
                  </div>
                  <div>
                    <span className="mono-readout text-muted" style={{ fontSize: '0.78rem', fontWeight: 600 }}>Commercial alignment:</span>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.2rem 0 0', lineHeight: 1.45 }}>{model.incentive}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================================================
            COMPREHENSIVE ASSET-LIGHT FAQ ACCORDION
            ========================================================================== */}
        <div className="faq-block">
          <div className="section-eyebrow">
            <span>Common questions</span>
          </div>
          <h3 className="section-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '0.75rem' }}>
            Frequently asked questions
          </h3>
          <p className="section-subtitle" style={{ maxWidth: '720px', marginBottom: '1.75rem' }}>
            Clear, honest, and direct answers regarding our asset-light network, delivery mechanics, and partner ecosystem.
          </p>

          {/* Category Filter Pills */}
          <div className="faq-category-pills" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategorySelect(cat)}
                style={{
                  background: activeFaqCategory === cat
                    ? 'linear-gradient(135deg, rgba(62, 180, 137, 0.25) 0%, rgba(62, 180, 137, 0.08) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.015) 100%)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: `1px solid ${activeFaqCategory === cat ? 'rgba(62, 180, 137, 0.45)' : 'rgba(255, 255, 255, 0.11)'}`,
                  boxShadow: activeFaqCategory === cat
                    ? 'inset 0 1px 0.5px rgba(255, 255, 255, 0.3), 0 0 16px rgba(62, 180, 137, 0.25)'
                    : 'inset 0 1px 0.5px rgba(255, 255, 255, 0.12)',
                  color: activeFaqCategory === cat ? 'var(--signal-bright, #56E39F)' : 'var(--text-muted)',
                  borderRadius: '999px',
                  padding: '0.45rem 1.1rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer',
                  transition: 'all 0.18s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="faq-accordion-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {filteredFaqs.map((faq, idx) => {
              const isExpanded = expandedFaqIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: isExpanded
                      ? 'linear-gradient(135deg, rgba(62, 180, 137, 0.1) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(7, 24, 18, 0.78) 100%)'
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.045) 0%, rgba(255, 255, 255, 0.01) 50%, rgba(9, 20, 16, 0.65) 100%)',
                    backdropFilter: 'blur(24px) saturate(200%)',
                    WebkitBackdropFilter: 'blur(24px) saturate(200%)',
                    border: `1px solid ${isExpanded ? 'rgba(62, 180, 137, 0.4)' : 'rgba(255, 255, 255, 0.09)'}`,
                    boxShadow: isExpanded
                      ? 'inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.24), 0 0 24px rgba(62, 180, 137, 0.15), 0 16px 36px -10px rgba(0, 0, 0, 0.6)'
                      : 'inset 0 1px 0.5px 0 rgba(255, 255, 255, 0.12), 0 8px 20px -6px rgba(0, 0, 0, 0.5)',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => handleToggleFaq(idx)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-pure)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      gap: '1rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <span className="mono-readout text-signal" style={{ fontSize: '0.8rem', fontWeight: 700 }}>
                        {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </span>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700 }}>
                        {faq.question}
                      </span>
                    </div>
                    {isExpanded ? <ChevronUp size={18} className="text-signal" /> : <ChevronDown size={18} className="text-muted" />}
                  </button>

                  {isExpanded && (
                    <div style={{
                      padding: '0 1.5rem 1.35rem 3.1rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                      paddingTop: '0.85rem'
                    }}>
                      <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: 1.65 }}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .trust-faq-section {
          position: relative;
        }

        .trust-header-block {
          margin-bottom: 3.5rem;
        }

        @media (max-width: 900px) {
          .faq-accordion-list button {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
