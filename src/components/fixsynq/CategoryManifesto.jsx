import React from 'react';
import { ArrowRight, X, Eye, Compass, GitMerge, Wrench, CheckCircle2 } from 'lucide-react';
import { audioTelemetry } from '../../utils/audioTelemetry';

export default function CategoryManifesto({ onOpenIntake }) {
  const contrastColumns = [
    {
      category: 'Traditional agency',
      whatTheyDo: 'Sells creative campaigns, billable hours, and marketing assets.',
      flaw: 'Treats the symptom with more promotional volume regardless of underlying product or release flaws.',
      colSpan: 'bento-col-3'
    },
    {
      category: 'Management consultancy',
      whatTheyDo: 'Delivers 200-page slide decks, multi-month strategy audits, and high overhead retainers.',
      flaw: 'Stops at theoretical recommendation with zero on-the-ground operational execution.',
      colSpan: 'bento-col-3'
    },
    {
      category: 'Gig marketplace',
      whatTheyDo: 'Hosts unverified listings of freelancers and equipment with basic search bars.',
      flaw: 'Leaves verification, trust transmission, and operational coordination entirely to the user.',
      colSpan: 'bento-col-3'
    },
    {
      category: 'FIX-SYNQ',
      whatTheyDo: 'Maps the network of root causes, designs targeted interventions, coordinates specialists, and measures delta.',
      flaw: null,
      isHighlight: true,
      colSpan: 'bento-col-3'
    }
  ];

  const misdiagnosisPrinciples = [
    {
      num: '01',
      title: 'Symptoms are visible.',
      desc: 'Delays, cost overruns, idle stages, and missed rights are what executives see. They are the alarm bells, not the fire.',
      icon: Eye,
      colSpan: 'bento-col-7',
      highlight: true
    },
    {
      num: '02',
      title: 'Causes are often hidden.',
      desc: 'The real mechanical breakdown sits two to four layers upstream—inside asymmetric information, opaque holds, or unindexed rights.',
      icon: Compass,
      colSpan: 'bento-col-5'
    },
    {
      num: '03',
      title: 'Causes are connected.',
      desc: 'Fixing one department in isolation almost always pushes friction into an adjacent stakeholder. The system is a web.',
      icon: GitMerge,
      colSpan: 'bento-col-4'
    },
    {
      num: '04',
      title: 'The fix depends on the cause.',
      desc: 'If the cause is fragmented information, adding more labor will fail. The operational instrument must match the specific pathology.',
      icon: Wrench,
      colSpan: 'bento-col-4'
    },
    {
      num: '05',
      title: 'A solution is real only when outcomes change.',
      desc: 'We do not measure our work by meetings held or decks delivered. We measure audited changes in Time, Cost, Utilization, Risk, and Revenue.',
      icon: CheckCircle2,
      colSpan: 'bento-col-4'
    }
  ];

  return (
    <section className="category-section section-block" id="section-08">
      <div className="container">
        {/* SECTION 20: CATEGORY DEFINITION */}
        <div className="category-header-block">
          <div className="section-eyebrow">
            <span>13 — A new operating category</span>
          </div>
          <h2 className="section-title">
            A different way to solve entertainment problems.
          </h2>

          {/* Bold Negation Bar */}
          <div className="negation-grid">
            <div className="negation-item">
              <X size={16} className="text-dim" />
              <span>Not another agency.</span>
            </div>
            <div className="negation-item">
              <X size={16} className="text-dim" />
              <span>Not another marketplace.</span>
            </div>
            <div className="negation-item">
              <X size={16} className="text-dim" />
              <span>Not another consultancy.</span>
            </div>
            <div className="negation-item">
              <X size={16} className="text-dim" />
              <span>Not another staffing platform.</span>
            </div>
          </div>

          <div className="category-declaration-box">
            <span className="mono-readout text-signal">Categorical definition:</span>
            <h3 className="declaration-text">
              A root-cause intelligence & intervention business.
            </h3>
            <p className="declaration-sub">
              Building a new category for entertainment-industry problem solving. A new operating layer underneath production, financing, technology, and distribution.
            </p>
          </div>
        </div>

        {/* ==========================================================================
            BENTO GRID: Category Contrast Matrix
            ========================================================================== */}
        <div className="bento-grid" style={{ marginBottom: '5rem' }}>
          {contrastColumns.map((col) => (
            <div
              key={col.category}
              className={`bento-card ${col.colSpan} ${col.isHighlight ? 'highlight-signal' : ''}`}
            >
              <span className="bento-corner-bracket bento-corner-tl"></span>
              <span className="bento-corner-bracket bento-corner-tr"></span>
              <span className="bento-corner-bracket bento-corner-bl"></span>
              <span className="bento-corner-bracket bento-corner-br"></span>

              <div className="bento-header">
                <span className={`telemetry-tag ${col.isHighlight ? 'signal' : ''}`}>
                  {col.isHighlight ? 'New category' : 'Legacy model'}
                </span>
                {col.isHighlight && <span className="mono-readout text-signal">FIX-SYNQ</span>}
              </div>

              <h4 className="bento-title" style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>
                {col.category}
              </h4>

              <div className="contrast-card-content">
                <div className="contrast-sub-row">
                  <span className="mono-readout contrast-lbl">Operational method:</span>
                  <p className="contrast-desc">{col.whatTheyDo}</p>
                </div>

                <div className="contrast-sub-row" style={{ marginTop: '0.9rem' }}>
                  <span className="mono-readout contrast-lbl">
                    {col.isHighlight ? 'Structural advantage:' : 'Structural flaw:'}
                  </span>
                  <p className={`contrast-desc ${col.isHighlight ? 'text-signal' : 'text-muted'}`}>
                    {col.isHighlight
                      ? 'Zero bloated overhead. Precision intervention. Quantifiable delta verification.'
                      : col.flaw}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ==========================================================================
            SECTION 26: ABOUT PHILOSOPHY & 5 MISDIAGNOSIS PRINCIPLES (BENTO GRID)
            ========================================================================== */}
        <div className="philosophy-block">
          <div className="section-eyebrow">
            <span>Core thesis — Five systemic principles</span>
          </div>
          <h3 className="section-title">
            We believe problems are often misdiagnosed.
          </h3>
          <p className="section-subtitle">
            The entertainment industry spends billions annually treating the surface expressions of problems rather than addressing what produces them.
          </p>

          <div className="bento-grid">
            {/* TILE 1 (HERO 7-COL): Principle 01 - Symptoms are visible */}
            <div className="bento-card bento-col-7 highlight-signal">
              <span className="bento-corner-bracket bento-corner-tl"></span>
              <span className="bento-corner-bracket bento-corner-tr"></span>
              <span className="bento-corner-bracket bento-corner-bl"></span>
              <span className="bento-corner-bracket bento-corner-br"></span>

              <div className="bento-header">
                <div className="principle-badge-group">
                  <span className="mono-readout text-signal principle-num-tag">Principle 01</span>
                  <span className="telemetry-tag signal">Surface detection</span>
                </div>
                <Eye size={18} className="text-signal" />
              </div>

              <h4 className="bento-title" style={{ fontSize: '1.4rem', margin: '0.5rem 0' }}>
                {misdiagnosisPrinciples[0].title}
              </h4>
              <p className="bento-subtitle" style={{ fontSize: '0.95rem' }}>
                {misdiagnosisPrinciples[0].desc}
              </p>

              {/* Visual Diagnostic Radar Strata */}
              <div className="symptom-radar-display">
                <div className="radar-layer surface">
                  <span className="mono-readout radar-tag">Surface expressions [the alarm bells]:</span>
                  <div className="radar-chips">
                    <span className="radar-chip">Production delay</span>
                    <span className="radar-chip">Budget overrun</span>
                    <span className="radar-chip">Idle soundstage</span>
                    <span className="radar-chip">Missed rights window</span>
                  </div>
                </div>
                <div className="radar-layer-divider">
                  <span className="mono-readout text-dim">↓ Subterranean systemic bedrock ↓</span>
                </div>
                <div className="radar-layer bedrock">
                  <span className="mono-readout radar-tag text-signal">Actual systemic fire:</span>
                  <span className="radar-bedrock-text">
                    Asymmetric holds, unindexed chain-of-title, and fragmented counterparty communications.
                  </span>
                </div>
              </div>
            </div>

            {/* TILE 2 (5-COL): Principle 02 - Causes are often hidden */}
            <div className="bento-card bento-col-5">
              <span className="bento-corner-bracket bento-corner-tl"></span>
              <span className="bento-corner-bracket bento-corner-tr"></span>
              <span className="bento-corner-bracket bento-corner-bl"></span>
              <span className="bento-corner-bracket bento-corner-br"></span>

              <div className="bento-header">
                <div className="principle-badge-group">
                  <span className="mono-readout text-muted principle-num-tag">Principle 02</span>
                  <span className="telemetry-tag">Strata depth</span>
                </div>
                <Compass size={18} className="text-dim" />
              </div>

              <h4 className="bento-title" style={{ fontSize: '1.25rem', margin: '0.5rem 0' }}>
                {misdiagnosisPrinciples[1].title}
              </h4>
              <p className="bento-subtitle" style={{ fontSize: '0.9rem' }}>
                {misdiagnosisPrinciples[1].desc}
              </p>

              <div className="hidden-depth-sonar">
                <div className="sonar-bar">
                  <span className="sonar-ping"></span>
                  <span className="mono-readout text-muted">Depth sensor: 3 layers upstream</span>
                </div>
                <span className="mono-readout text-muted" style={{ fontSize: '0.78rem', fontWeight: 600, marginTop: '0.4rem', display: 'block' }}>
                  Root failures rarely reside in the failing department
                </span>
              </div>
            </div>

            {/* TILE 3 (4-COL): Principle 03 - Causes are connected */}
            <div className="bento-card bento-col-4">
              <span className="bento-corner-bracket bento-corner-tl"></span>
              <span className="bento-corner-bracket bento-corner-tr"></span>
              <span className="bento-corner-bracket bento-corner-bl"></span>
              <span className="bento-corner-bracket bento-corner-br"></span>

              <div className="bento-header">
                <div className="principle-badge-group">
                  <span className="mono-readout text-muted principle-num-tag">Principle 03</span>
                  <span className="telemetry-tag">Network effect</span>
                </div>
                <GitMerge size={18} className="text-signal" />
              </div>

              <h4 className="bento-title" style={{ fontSize: '1.15rem', margin: '0.4rem 0' }}>
                {misdiagnosisPrinciples[2].title}
              </h4>
              <p className="bento-subtitle" style={{ fontSize: '0.85rem' }}>
                {misdiagnosisPrinciples[2].desc}
              </p>

              <div className="mini-network-callout">
                <span className="mono-readout text-signal">Isolation paradox:</span>
                <span className="callout-body">
                  Fixing department A without mapping counterparties B & C simply exports the delay downstream.
                </span>
              </div>
            </div>

            {/* TILE 4 (4-COL): Principle 04 - The right intervention depends on cause */}
            <div className="bento-card bento-col-4">
              <span className="bento-corner-bracket bento-corner-tl"></span>
              <span className="bento-corner-bracket bento-corner-tr"></span>
              <span className="bento-corner-bracket bento-corner-bl"></span>
              <span className="bento-corner-bracket bento-corner-br"></span>

              <div className="bento-header">
                <div className="principle-badge-group">
                  <span className="mono-readout text-muted principle-num-tag">Principle 04</span>
                  <span className="telemetry-tag">Pathology match</span>
                </div>
                <Wrench size={18} className="text-dim" />
              </div>

              <h4 className="bento-title" style={{ fontSize: '1.15rem', margin: '0.4rem 0' }}>
                {misdiagnosisPrinciples[3].title}
              </h4>
              <p className="bento-subtitle" style={{ fontSize: '0.85rem' }}>
                {misdiagnosisPrinciples[3].desc}
              </p>

              <div className="mini-network-callout">
                <span className="mono-readout text-pure">Instrument specificity:</span>
                <span className="callout-body">
                  Labor cannot cure information opacity. Software cannot cure lack of counterparty coordination.
                </span>
              </div>
            </div>

            {/* TILE 5 (4-COL): Principle 05 - Solutions are meaningful only when outcomes change */}
            <div className="bento-card bento-col-4">
              <span className="bento-corner-bracket bento-corner-tl"></span>
              <span className="bento-corner-bracket bento-corner-tr"></span>
              <span className="bento-corner-bracket bento-corner-bl"></span>
              <span className="bento-corner-bracket bento-corner-br"></span>

              <div className="bento-header">
                <div className="principle-badge-group">
                  <span className="mono-readout text-muted principle-num-tag">Principle 05</span>
                  <span className="telemetry-tag signal">Delta empiricism</span>
                </div>
                <CheckCircle2 size={18} className="text-signal" />
              </div>

              <h4 className="bento-title" style={{ fontSize: '1.15rem', margin: '0.4rem 0' }}>
                {misdiagnosisPrinciples[4].title}
              </h4>
              <p className="bento-subtitle" style={{ fontSize: '0.85rem' }}>
                {misdiagnosisPrinciples[4].desc}
              </p>

              <div className="mini-network-callout">
                <span className="mono-readout text-signal">Verifiable delta:</span>
                <span className="callout-body">
                  We measure audited shifts in Time, Cost, Utilization, Risk, and Delivery Integrity.
                </span>
              </div>
            </div>

          </div>

          {/* Section 09: Root-Cause Diagnostic Framework (12 Categories) */}
          <div className="diagnostic-categories-framework" style={{ marginTop: '4.5rem', marginBottom: '3rem' }}>
            <div className="section-eyebrow">
              <span>The 12 diagnostic vectors</span>
            </div>
            <h3 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>
              Root-cause diagnostic framework
            </h3>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              Every friction point in the entertainment ecosystem originates within one or more of these 12 interconnected systemic domains.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.85rem' }}>
              {[
                { cat: 'People', desc: 'Skills, availability, hiring, trust, utilisation.' },
                { cat: 'Process', desc: 'Workflow, coordination, scheduling, duplication, delays.' },
                { cat: 'Resources', desc: 'Equipment, studios, locations, vendors, infrastructure.' },
                { cat: 'Information', desc: 'Visibility, discovery, communication, verification, documentation.' },
                { cat: 'Money', desc: 'Costs, financing, cash flow, pricing, leakage, monetisation.' },
                { cat: 'Rights', desc: 'Ownership, licensing, royalties, contracts, usage.' },
                { cat: 'Technology', desc: 'Systems, automation, integration, AI, digital infrastructure.' },
                { cat: 'Market', desc: 'Demand, competition, discoverability, distribution.' },
                { cat: 'Audience', desc: 'Discovery, attention, behaviour, engagement, conversion.' },
                { cat: 'Data', desc: 'Measurement, attribution, forecasting, intelligence.' },
                { cat: 'Regulation', desc: 'Permissions, certification, compliance, taxation.' },
                { cat: 'Risk', desc: 'Operational, financial, legal, production, security, technology.' }
              ].map((c) => (
                <div
                  key={c.cat}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.015) 100%)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: 'inset 0 1px 0.5px rgba(255, 255, 255, 0.18), 0 12px 28px -8px rgba(0, 0, 0, 0.45)',
                    borderRadius: '16px',
                    padding: '1.15rem 1.25rem',
                    transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                    <span className="mono-readout text-signal" style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em' }}>{c.cat}</span>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--signal-color)', opacity: 0.6 }}></span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-main)', lineHeight: 1.45 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Primary Action Row */}
          <div className="philosophy-cta-row" style={{ marginTop: '2.5rem' }}>
            <button
              className="btn-signal"
              onClick={() => {
                audioTelemetry.playSelect();
                onOpenIntake();
              }}
            >
              <span>Bring us a problem</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .category-section {
          position: relative;
        }

        .category-header-block {
          margin-bottom: 3.5rem;
        }

        .negation-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .negation-item {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: inset 0 1px 0.5px rgba(255, 255, 255, 0.14);
          padding: 0.85rem 1rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.76rem;
          color: var(--text-muted);
          transition: all var(--transition-fast);
        }

        .negation-item:hover {
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(255, 255, 255, 0.22);
          color: var(--text-pure);
          transform: translateY(-1px);
        }

        .category-declaration-box {
          background: linear-gradient(135deg, rgba(62, 180, 137, 0.16) 0%, rgba(62, 180, 137, 0.03) 50%, rgba(7, 24, 18, 0.78) 100%);
          backdrop-filter: blur(36px) saturate(210%);
          -webkit-backdrop-filter: blur(36px) saturate(210%);
          border: 1px solid rgba(62, 180, 137, 0.45);
          padding: 2.25rem;
          border-radius: var(--radius-card);
          box-shadow: inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.3), 0 0 45px rgba(62, 180, 137, 0.2), 0 24px 56px -12px rgba(0, 0, 0, 0.8);
        }

        .declaration-text {
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 800;
          color: var(--text-pure);
          letter-spacing: -0.02em;
          margin-top: 0.35rem;
          margin-bottom: 0.75rem;
        }

        .declaration-sub {
          font-size: 1.15rem;
          color: var(--text-main);
          max-width: 820px;
          line-height: 1.55;
        }

        /* Contrast Cards Content */
        .contrast-card-content {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .contrast-lbl {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-muted);
          display: block;
          margin-bottom: 0.25rem;
        }

        .contrast-desc {
          font-size: 0.88rem;
          line-height: 1.5;
        }

        /* Philosophy & Bento Principles */
        .philosophy-block {
          border-top: 1px solid var(--border-subtle);
          padding-top: 4.5rem;
        }

        .principle-badge-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .principle-num-tag {
          font-size: 0.8rem;
          font-weight: 700;
        }

        /* Symptom Radar Display */
        .symptom-radar-display {
          background: rgba(10, 13, 19, 0.8);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 1rem;
          margin-top: 1rem;
        }

        .radar-tag {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-muted);
          display: block;
          margin-bottom: 0.5rem;
        }

        .radar-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .radar-chip {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .radar-layer-divider {
          text-align: center;
          padding: 0.5rem 0;
          font-size: 0.78rem;
          font-weight: 600;
        }

        .radar-bedrock-text {
          font-size: 0.88rem;
          color: var(--signal-bright);
          line-height: 1.45;
        }

        /* Sonar */
        .hidden-depth-sonar {
          background: rgba(10, 13, 19, 0.7);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 0.9rem;
          margin-top: 0.75rem;
        }

        .sonar-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .sonar-ping {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--signal);
          box-shadow: 0 0 8px var(--signal);
        }

        /* Mini Network Callout */
        .mini-network-callout {
          background: rgba(10, 13, 19, 0.7);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 0.85rem;
          margin-top: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .mini-network-callout span:first-child {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .callout-body {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.45;
        }

        @media (max-width: 900px) {
          .negation-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .negation-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
