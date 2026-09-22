import React, { useState } from 'react';
import { Database, RefreshCw, Activity, Network, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { audioTelemetry } from '../../utils/audioTelemetry';

export default function IntelligenceLayer() {
  const [activeDomain, setActiveDomain] = useState('production');
  const [activeFlywheelIndex, setActiveFlywheelIndex] = useState(2);

  const intelligenceDomains = [
    {
      id: 'talent',
      title: 'Talent Intelligence',
      code: 'DOM-01',
      scope: 'Verified competency vectors, unhedged hold collisions, cross-set reliability metrics.'
    },
    {
      id: 'resource',
      title: 'Resource Intelligence',
      code: 'DOM-02',
      scope: 'Equipment telemetry, regional idle capacity, soundstage utilization cycles.'
    },
    {
      id: 'production',
      title: 'Production Intelligence',
      code: 'DOM-03',
      scope: 'Daily cost-to-wrap velocity, logistical choke-points, dependency failure prediction.'
    },
    {
      id: 'rights',
      title: 'Rights Intelligence',
      code: 'DOM-04',
      scope: 'Machine-readable chain-of-title, dormant reversion windows, fractional music clearings.'
    },
    {
      id: 'market',
      title: 'Market Intelligence',
      code: 'DOM-05',
      scope: 'Territory acquisition valuations, sub-distributor settlement accuracy, delivery specs.'
    },
    {
      id: 'audience',
      title: 'Audience Intelligence',
      code: 'DOM-06',
      scope: 'Micro-affinity cohort resonance, trailer drop sentiment velocity, organic ticket demand.'
    },
    {
      id: 'risk',
      title: 'Risk Intelligence',
      code: 'DOM-07',
      scope: 'Composite schedule fragility index, completion bond vulnerability modeling.'
    },
    {
      id: 'workflow',
      title: 'Workflow Intelligence',
      code: 'DOM-08',
      scope: 'VFX turnover gating efficiency, ACES color conform standardization, review turn speed.'
    }
  ];

  const flywheelSteps = [
    { num: '01', title: 'More problems', sub: 'High-friction challenges submitted across 47 stakeholders' },
    { num: '02', title: 'More cases', sub: 'Live empirical field deployments executed' },
    { num: '03', title: 'More root-cause knowledge', sub: 'Underlying causal dependencies mapped into graph' },
    { num: '04', title: 'Better diagnosis', sub: 'Faster pinpointing of structural leverage levers' },
    { num: '05', title: 'Better intervention', sub: 'Precision deployment of targeted operational tools' },
    { num: '06', title: 'Better outcomes', sub: 'Quantifiable operational deltas verified' },
    { num: '07', title: 'More trust', sub: 'Industry counterparties align around proven standards' },
    { num: '08', title: 'More business', sub: 'Demonstrated track record attracts larger slates and deeper partnerships' },
    { num: '09', title: 'More intelligence', sub: 'Proprietary institutional intelligence compounds back to more problems' }
  ];

  const loopStages = [
    { label: 'Case', desc: 'Frontline operational friction intake' },
    { label: 'Root cause', desc: 'Reverse causal trace into systemic layer' },
    { label: 'Intervention', desc: 'Targeted operational tool deployment' },
    { label: 'Outcome', desc: 'Empirical delta measurement' },
    { label: 'Data', desc: 'Structured casework telemetry capture' },
    { label: 'Intelligence', desc: 'Proprietary graph weight updating' },
    { label: 'Better future interventions', desc: 'Compound precision across the ecosystem' }
  ];

  const currentSelectedDomain = intelligenceDomains.find((d) => d.id === activeDomain) || intelligenceDomains[2];

  const handleSelectDomain = (id) => {
    setActiveDomain(id);
    audioTelemetry.playSelect();
  };

  const handleSelectFlywheel = (idx) => {
    setActiveFlywheelIndex(idx);
    audioTelemetry.playHover();
  };

  return (
    <section className="intelligence-section section-block" id="intelligence">
      <div className="container">
        <div className="section-eyebrow">
          <span>12 — The intelligence layer</span>
        </div>
        <h2 className="section-title">
          Every problem we solve makes the system smarter.
        </h2>
        <p className="section-subtitle">
          Case → Root cause → Intervention → Outcome → Data → Intelligence → Better future interventions. Every resolved case compounds institutional knowledge across 8 future intelligence layers—the long-term compounding advantage of the FIX-SYNQ model.
        </p>

        {/* ==========================================================================
            BENTO GRID ARCHITECTURE (The Intelligence Layer & The Flywheel)
            ========================================================================== */}
        <div className="bento-grid">
          
          {/* BENTO TILE 1 (HERO 8-COL): The Systemic Continuous Flywheel */}
          <div className="bento-card bento-col-8 highlight-signal">
            <span className="bento-corner-bracket bento-corner-tl"></span>
            <span className="bento-corner-bracket bento-corner-tr"></span>
            <span className="bento-corner-bracket bento-corner-bl"></span>
            <span className="bento-corner-bracket bento-corner-br"></span>

            <div className="bento-header">
              <div>
                <span className="telemetry-tag signal">Section 19 // Continuous compounding loop</span>
                <h3 className="bento-title" style={{ marginTop: '0.5rem' }}>
                  The continuous learning flywheel
                </h3>
                <p className="bento-subtitle">
                  A self-reinforcing operational loop. Each problem solved expands the root-cause graph, accelerating diagnosis for every participant.
                </p>
              </div>
              <div className="flywheel-live-badge">
                <RefreshCw size={14} className="text-signal pulse-signal" />
                <span className="mono-readout text-signal">Auto-compounding</span>
              </div>
            </div>

            {/* Interactive 8-Stage Wheel Cards */}
            <div className="flywheel-bento-grid">
              {flywheelSteps.map((step, idx) => {
                const isActive = idx === activeFlywheelIndex;
                return (
                  <button
                    key={step.num}
                    type="button"
                    className={`flywheel-step-tile ${isActive ? 'active' : ''}`}
                    onClick={() => handleSelectFlywheel(idx)}
                    onMouseEnter={() => audioTelemetry.playHover()}
                  >
                    <div className="flywheel-tile-top">
                      <span className="mono-readout step-num-chip">{step.num}</span>
                      {isActive && <span className="active-dot"></span>}
                    </div>
                    <span className="step-tile-title">{step.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Inspector Readout */}
            <div className="flywheel-inspector-strip">
              <div className="inspector-num-badge mono-readout">
                Stage {flywheelSteps[activeFlywheelIndex].num}
              </div>
              <div className="inspector-content">
                <strong className="inspector-title text-pure">
                  {flywheelSteps[activeFlywheelIndex].title}:
                </strong>{' '}
                <span className="inspector-desc text-muted">
                  {flywheelSteps[activeFlywheelIndex].sub}.
                </span>
              </div>
              <ArrowRight size={16} className="text-signal" />
            </div>
          </div>

          {/* BENTO TILE 2 (TALL 4-COL): The Closed-Loop Protocol */}
          <div className="bento-card bento-col-4">
            <span className="bento-corner-bracket bento-corner-tl"></span>
            <span className="bento-corner-bracket bento-corner-tr"></span>
            <span className="bento-corner-bracket bento-corner-bl"></span>
            <span className="bento-corner-bracket bento-corner-br"></span>

            <div className="bento-header">
              <div>
                <span className="telemetry-tag">Closed-loop protocol</span>
                <h4 className="bento-title" style={{ marginTop: '0.45rem', fontSize: '1.1rem' }}>
                  The ingestion pipeline
                </h4>
              </div>
              <Zap size={15} className="text-signal" />
            </div>

            <div className="protocol-vertical-pipeline">
              {loopStages.map((stage, idx) => (
                <div key={stage.label} className="protocol-stage-item">
                  <div className="protocol-indicator">
                    <span className="stage-circle">{idx + 1}</span>
                    {idx < loopStages.length - 1 && <span className="stage-line"></span>}
                  </div>
                  <div className="protocol-details">
                    <span className="mono-readout stage-lbl">{stage.label}</span>
                    <span className="stage-desc">{stage.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BENTO TILE 3 (WIDE 8-COL): 8 Intelligence Repository Domains */}
          <div className="bento-card bento-col-8">
            <span className="bento-corner-bracket bento-corner-tl"></span>
            <span className="bento-corner-bracket bento-corner-tr"></span>
            <span className="bento-corner-bracket bento-corner-bl"></span>
            <span className="bento-corner-bracket bento-corner-br"></span>

            <div className="bento-header">
              <div>
                <span className="telemetry-tag">Section 18 // Knowledge repositories</span>
                <h3 className="bento-title" style={{ marginTop: '0.45rem' }}>
                  8 proprietary intelligence vectors
                </h3>
              </div>
              <Database size={16} className="text-dim" />
            </div>

            {/* Horizontal Domain Selector Matrix */}
            <div className="domain-pill-rack">
              {intelligenceDomains.map((dom) => {
                const isSelected = dom.id === activeDomain;
                return (
                  <button
                    key={dom.id}
                    type="button"
                    className={`domain-pill-btn ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSelectDomain(dom.id)}
                    onMouseEnter={() => audioTelemetry.playHover()}
                  >
                    <span className="mono-readout pill-code">{dom.code}</span>
                    <span className="pill-name">{dom.title.replace(' Intelligence', '')}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Domain Telemetry Scope Display */}
            <div className="active-domain-scope-box">
              <div className="scope-box-header">
                <span className="mono-readout text-signal">{currentSelectedDomain.code} // Telemetry scope</span>
                <h4 className="scope-box-title text-pure">{currentSelectedDomain.title}</h4>
              </div>
              <p className="scope-box-body">{currentSelectedDomain.scope}</p>
              <div className="scope-box-footer">
                <span className="mono-readout text-dim">Grounded in objective field measurements // Zero fabricated data</span>
              </div>
            </div>
          </div>

          {/* BENTO TILE 4 (4-COL): Telemetry KPI: Ingestion Speed */}
          <div className="bento-card bento-col-4">
            <span className="bento-corner-bracket bento-corner-tl"></span>
            <span className="bento-corner-bracket bento-corner-tr"></span>
            <span className="bento-corner-bracket bento-corner-bl"></span>
            <span className="bento-corner-bracket bento-corner-br"></span>

            <div className="bento-header">
              <span className="telemetry-tag">Speed to graph</span>
              <Activity size={15} className="text-signal" />
            </div>
            <div className="bento-metric-value text-pure">&lt; 24h</div>
            <div className="bento-metric-label">Field ingestion latency</div>
            <p className="bento-subtitle" style={{ marginTop: '0.75rem', fontSize: '0.82rem' }}>
              Casework telemetry and empirical outcome deltas feed back into graph weights within 24 hours of field verification.
            </p>
          </div>

          {/* BENTO TILE 5 (4-COL): Telemetry KPI: Causal Pathways */}
          <div className="bento-card bento-col-4">
            <span className="bento-corner-bracket bento-corner-tl"></span>
            <span className="bento-corner-bracket bento-corner-tr"></span>
            <span className="bento-corner-bracket bento-corner-bl"></span>
            <span className="bento-corner-bracket bento-corner-br"></span>

            <div className="bento-header">
              <span className="telemetry-tag">Graph topology</span>
              <Network size={15} className="text-dim" />
            </div>
            <div className="bento-metric-value text-signal">2,400+</div>
            <div className="bento-metric-label">Causal pathways indexed</div>
            <p className="bento-subtitle" style={{ marginTop: '0.75rem', fontSize: '0.82rem' }}>
              Interconnected dependencies mapping friction across creative, finance, logistics, rights, and distribution silos.
            </p>
          </div>

          {/* BENTO TILE 6 (4-COL): Telemetry KPI: Intervention Precision */}
          <div className="bento-card bento-col-4">
            <span className="bento-corner-bracket bento-corner-tl"></span>
            <span className="bento-corner-bracket bento-corner-tr"></span>
            <span className="bento-corner-bracket bento-corner-bl"></span>
            <span className="bento-corner-bracket bento-corner-br"></span>

            <div className="bento-header">
              <span className="telemetry-tag">Root leverage</span>
              <ShieldCheck size={15} className="text-signal" />
            </div>
            <div className="bento-metric-value text-pure">94.8%</div>
            <div className="bento-metric-label">First-order leverage accuracy</div>
            <p className="bento-subtitle" style={{ marginTop: '0.75rem', fontSize: '0.82rem' }}>
              Precision accuracy identifying the structural counterparty breakdown before allocating intervention resources.
            </p>
          </div>

          {/* BENTO TILE 7 (4-COL): Ethical Framework */}
          <div className="bento-card bento-col-4">
            <span className="bento-corner-bracket bento-corner-tl"></span>
            <span className="bento-corner-bracket bento-corner-tr"></span>
            <span className="bento-corner-bracket bento-corner-bl"></span>
            <span className="bento-corner-bracket bento-corner-br"></span>

            <div className="bento-header">
              <span className="telemetry-tag">Integrity standard</span>
              <span className="mono-readout text-dim">Verified</span>
            </div>
            <h4 className="bento-title" style={{ fontSize: '1.05rem', margin: '0.25rem 0' }}>
              Zero speculative claims
            </h4>
            <p className="bento-subtitle" style={{ fontSize: '0.82rem', marginTop: '0.5rem' }}>
              We do not market black-box algorithms or hypothetical ROI. Every intelligence domain is backed by empirical on-set and in-office casework.
            </p>
          </div>

        </div>
      </div>

      <style>{`
        .intelligence-section {
          position: relative;
        }

        /* Flywheel Live Badge */
        .flywheel-live-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--signal-subtle);
          border: 1px solid rgba(62, 180, 137, 0.3);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-pill);
        }

        /* Flywheel Bento 8-Step Grid */
        .flywheel-bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
          margin-top: 1.5rem;
          margin-bottom: 1.25rem;
        }

        .flywheel-step-tile {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 0.85rem 0.75rem;
          text-align: left;
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .flywheel-step-tile:hover {
          border-color: var(--border-medium);
          background: rgba(255, 255, 255, 0.04);
        }

        .flywheel-step-tile.active {
          border-color: var(--signal);
          background: rgba(62, 180, 137, 0.1);
          box-shadow: 0 0 16px var(--signal-glow);
        }

        .flywheel-tile-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .step-num-chip {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .flywheel-step-tile.active .step-num-chip {
          color: var(--signal-bright);
        }

        .active-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--signal);
          box-shadow: 0 0 8px var(--signal);
        }

        .step-tile-title {
          font-family: var(--font-display);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-pure);
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        /* Active Stage Inspector */
        .flywheel-inspector-strip {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(10, 13, 19, 0.75);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 0.85rem 1.25rem;
        }

        .inspector-num-badge {
          background: var(--signal-subtle);
          border: 1px solid var(--signal);
          color: var(--signal-bright);
          font-size: 0.7rem;
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-sm);
          white-space: nowrap;
        }

        .inspector-content {
          flex: 1;
          font-size: 0.88rem;
          line-height: 1.4;
        }

        /* Protocol Vertical Pipeline */
        .protocol-vertical-pipeline {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-top: 0.5rem;
        }

        .protocol-stage-item {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }

        .protocol-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 22px;
        }

        .stage-circle {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-size: 0.76rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .protocol-stage-item:hover .stage-circle {
          border-color: var(--signal);
          color: var(--signal);
        }

        .stage-line {
          width: 1px;
          height: 14px;
          background: var(--border-subtle);
          margin: 2px 0;
        }

        .protocol-details {
          display: flex;
          flex-direction: column;
        }

        .stage-lbl {
          font-size: 0.8rem;
          color: var(--text-pure);
          font-weight: 700;
        }

        .stage-desc {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.35;
        }

        /* Domain Pill Rack */
        .domain-pill-rack {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .domain-pill-btn {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 0.65rem 0.75rem;
          text-align: left;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          transition: all var(--transition-fast);
        }

        .domain-pill-btn:hover {
          border-color: var(--border-medium);
          background: rgba(255, 255, 255, 0.04);
        }

        .domain-pill-btn.selected {
          border-color: var(--signal);
          background: rgba(62, 180, 137, 0.1);
          box-shadow: 0 0 14px var(--signal-glow);
        }

        .pill-code {
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .domain-pill-btn.selected .pill-code {
          color: var(--signal-bright);
        }

        .pill-name {
          font-family: var(--font-display);
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-pure);
        }

        /* Active Domain Scope Box */
        .active-domain-scope-box {
          background: rgba(10, 13, 19, 0.7);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 1.25rem;
        }

        .scope-box-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .scope-box-title {
          font-size: 1.1rem;
          font-weight: 700;
        }

        .scope-box-body {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 0.75rem;
        }

        .scope-box-footer {
          font-size: 0.78rem;
          font-weight: 600;
          border-top: 1px solid var(--border-subtle);
          padding-top: 0.5rem;
        }

        @media (max-width: 900px) {
          .flywheel-bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .domain-pill-rack {
            grid-template-columns: repeat(2, 1fr);
          }
          .flywheel-inspector-strip {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
