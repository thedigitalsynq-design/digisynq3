import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { audioTelemetry } from '../../utils/audioTelemetry';

export default function HiddenLayerScanner() {
  const [activeDepth, setActiveDepth] = useState(2); // 0: Symptom, 1: Contributing, 2: Root, 3: Connected

  const depthLayers = [
    {
      level: 0,
      depthLabel: 'Surface level [0 meters]',
      title: 'Visible symptom',
      headline: 'What the Industry Reacts To',
      indicator: 'Surface friction',
      tagline: 'The problem as reported in crisis meetings, trade headlines, and emergency calls.',
      example: '“We are 4 days behind schedule and running $450K over budget on Location B.”',
      flawedFix: 'Typical Conventional Reaction: Fire the line producer, hire extra crew, demand unpaid weekend overtime.',
      status: 'Mistaken for the whole truth'
    },
    {
      level: 1,
      depthLabel: 'Intermediate strata [-100 meters]',
      title: 'Contributing factor',
      headline: 'The Immediate Friction Points',
      indicator: 'Operational slack',
      tagline: 'The mechanical bottlenecks that directly preceded the surface breakdown.',
      example: 'Second-hold cast commitments collided with camera package shipping delays and unpermitted street closures.',
      flawedFix: 'Typical Conventional Reaction: Blame the equipment vendor or rental house, demand penalty credits.',
      status: 'Misdiagnosed as isolated accidents'
    },
    {
      level: 2,
      depthLabel: 'Structural bedrock [-200 meters]',
      title: 'Structural root cause',
      headline: 'Where FIX-SYNQ Works',
      indicator: 'Systemic cause',
      tagline: 'The underlying absence of protocol, visibility, or verification that made the breakdown inevitable.',
      example: 'Zero interoperable availability telemetry between independent productions, resulting in unverified phantom holds.',
      flawedFix: 'FIX-SYNQ Intervention: Establish verified availability protocols and automated dynamic hold release mechanisms.',
      status: 'The actionable intervention lever'
    },
    {
      level: 3,
      depthLabel: 'Systemic network [-300 meters]',
      title: 'Connected causes & feedback loops',
      headline: 'The Cross-Stakeholder Ripple',
      indicator: 'Macro cascade',
      tagline: 'The realization that this same root cause simultaneously infects multiple other sectors.',
      example: 'The identical information gap that stalled this shoot also drives up equipment depreciation for vendors and inflates insurance premiums across 20 other films.',
      flawedFix: 'Systemic Resolution: Transforming single-point fixes into industry-wide operating standards.',
      status: 'Interconnected ecosystem'
    }
  ];

  const currentLayer = depthLayers[activeDepth];

  const handleSelectDepth = (lvl) => {
    setActiveDepth(lvl);
    if (lvl === 2) audioTelemetry.playRootFound();
    else audioTelemetry.playStep(lvl + 1);
  };

  return (
    <section className="hidden-layer-section section-block" id="section-02">
      <div className="container">
        <div className="section-eyebrow">
          <span>02 — The hidden layer</span>
        </div>
        <h2 className="section-title">
          Visible problems are often symptoms.
        </h2>
        <p className="section-subtitle">
          Visible problems are merely the surface disturbance. Symptoms are visible. Causes are often hidden. Causes are connected. The right intervention depends on the cause.
        </p>

        {/* Interactive Geological Depth Scanner */}
        <div className="scanner-container diagnostic-panel">
          {/* Depth Controls & Scrubber */}
          <div className="depth-scrubber-nav">
            {depthLayers.map((layer) => {
              const isCurrent = layer.level === activeDepth;
              return (
                <button
                  key={layer.level}
                  className={`depth-nav-item ${isCurrent ? 'active' : ''}`}
                  onClick={() => handleSelectDepth(layer.level)}
                  onMouseEnter={() => audioTelemetry.playHover()}
                >
                  <span className="depth-meter-tag">{layer.depthLabel}</span>
                  <span className="depth-nav-title">{layer.title}</span>
                  {isCurrent && <span className="depth-active-notch"></span>}
                </button>
              );
            })}
          </div>

          {/* Active Layer Display Canvas */}
          <div className="layer-inspection-viewport">
            {/* Top Coordinate Bar */}
            <div className="viewport-telemetry-header">
              <div className="viewport-coords">
                <span className="mono-readout text-signal">{currentLayer.depthLabel}</span>
                <span className="telemetry-sep">|</span>
                <span className="mono-readout">{currentLayer.indicator}</span>
              </div>
              <div className="viewport-status">
                <span className="telemetry-tag signal">{currentLayer.status}</span>
              </div>
            </div>

            {/* Geological Strata Cutout Visual */}
            <div className="strata-graphic-indicator">
              <div className={`strata-slice s-0 ${activeDepth >= 0 ? 'lit' : ''}`}>
                <span className="strata-lbl">Surface</span>
              </div>
              <div className={`strata-slice s-1 ${activeDepth >= 1 ? 'lit' : ''}`}>
                <span className="strata-lbl">Factors</span>
              </div>
              <div className={`strata-slice s-2 ${activeDepth >= 2 ? 'lit' : ''}`}>
                <span className="strata-lbl">Root cause</span>
              </div>
              <div className={`strata-slice s-3 ${activeDepth >= 3 ? 'lit' : ''}`}>
                <span className="strata-lbl">Network</span>
              </div>
            </div>

            {/* Core Layer Content */}
            <div className="layer-core-content">
              <h3 className="layer-headline">{currentLayer.headline}</h3>
              <p className="layer-tagline">{currentLayer.tagline}</p>

              {/* Case Observation Card */}
              <div className="layer-observation-card">
                <div className="obs-header">
                  <span className="mono-readout">Empirical observation:</span>
                </div>
                <div className="obs-quote">{currentLayer.example}</div>
              </div>

              {/* Action Vector Card */}
              <div className={`layer-action-card ${activeDepth >= 2 ? 'fixsynq-vector' : 'legacy-vector'}`}>
                <div className="action-header">
                  <span className="mono-readout">
                    {activeDepth >= 2 ? 'FIX-SYNQ leverage approach:' : 'Conventional truncated attempt:'}
                  </span>
                </div>
                <p className="action-text">{currentLayer.flawedFix}</p>
              </div>
            </div>

            {/* Depth Navigation Footer */}
            <div className="viewport-footer">
              <div className="mono-readout depth-guidance">
                {activeDepth < 3 ? 'Scrub deeper to uncover the hidden engine' : 'Deep network topology reached'}
              </div>
              {activeDepth < 3 ? (
                <button
                  className="btn-ghost btn-sm"
                  onClick={() => handleSelectDepth(activeDepth + 1)}
                >
                  <span>Penetrate deeper</span>
                  <ArrowDown size={14} />
                </button>
              ) : (
                <button
                  className="btn-signal btn-sm"
                  onClick={() => handleSelectDepth(0)}
                >
                  <span>Return to surface</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hidden-layer-section {
          position: relative;
        }

        .scanner-container {
          padding: 0;
          overflow: hidden;
          border: 1px solid var(--border-medium);
        }

        .depth-scrubber-nav {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--glass-border);
        }

        .depth-nav-item {
          background: none;
          border: none;
          border-right: 1px solid var(--glass-border);
          padding: 1.25rem 1.5rem;
          text-align: left;
          cursor: pointer;
          position: relative;
          transition: all var(--transition-fast);
        }

        .depth-nav-item:last-child {
          border-right: none;
        }

        .depth-nav-item:hover {
          background: rgba(255, 255, 255, 0.04);
        }

        .depth-nav-item.active {
          background: var(--glass-bg-signal);
        }

        .depth-meter-tag {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-muted);
          letter-spacing: 0.06em;
          margin-bottom: 0.35rem;
        }

        .depth-nav-item.active .depth-meter-tag {
          color: var(--signal);
        }

        .depth-nav-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-muted);
          letter-spacing: -0.01em;
          display: block;
        }

        .depth-nav-item.active .depth-nav-title {
          color: var(--text-pure);
        }

        .depth-active-notch {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--signal);
          box-shadow: 0 0 10px var(--signal);
        }

        .layer-inspection-viewport {
          padding: 2.25rem;
          position: relative;
        }

        .viewport-telemetry-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.75rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .viewport-coords {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        /* Strata Graphic Indicator */
        .strata-graphic-indicator {
          display: flex;
          gap: 4px;
          height: 6px;
          margin-bottom: 2rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: var(--radius-pill);
          overflow: hidden;
        }

        .strata-slice {
          flex: 1;
          height: 100%;
          background: rgba(255, 255, 255, 0.08);
          transition: all var(--transition-normal);
          position: relative;
        }

        .strata-slice.lit {
          background: var(--signal);
          box-shadow: 0 0 12px var(--signal-glow);
        }

        .strata-lbl {
          display: none;
        }

        .layer-core-content {
          margin-bottom: 2rem;
        }

        .layer-headline {
          font-size: clamp(1.6rem, 2.8vw, 2.4rem);
          font-weight: 800;
          letter-spacing: -0.025em;
          color: var(--text-pure);
          margin-bottom: 0.6rem;
        }

        .layer-tagline {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 1.75rem;
          max-width: 800px;
        }

        .layer-observation-card {
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          border-left: 3px solid var(--telemetry);
          box-shadow: var(--glass-specular);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.25rem;
        }

        .obs-header {
          color: var(--telemetry);
          margin-bottom: 0.5rem;
        }

        .obs-quote {
          font-size: 1.1rem;
          color: var(--text-pure);
          font-weight: 500;
          line-height: 1.5;
        }

        .layer-action-card {
          padding: 1.5rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--glass-border);
        }

        .layer-action-card.legacy-vector {
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          border-left: 3px solid var(--text-muted);
          box-shadow: var(--glass-specular);
        }

        .layer-action-card.fixsynq-vector {
          background: var(--glass-bg-signal);
          backdrop-filter: blur(20px) saturate(200%);
          -webkit-backdrop-filter: blur(20px) saturate(200%);
          border: 1px solid var(--glass-border-signal);
          border-left: 3px solid var(--signal);
          box-shadow: 0 0 25px rgba(62, 180, 137, 0.2), var(--glass-specular);
        }

        .action-header {
          margin-bottom: 0.5rem;
        }

        .layer-action-card.fixsynq-vector .action-header {
          color: var(--signal-bright);
        }

        .action-text {
          font-size: 1rem;
          color: var(--text-main);
          line-height: 1.55;
        }

        .viewport-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-subtle);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .depth-guidance {
          color: var(--text-muted);
          font-size: 0.88rem;
          font-weight: 500;
        }

        .btn-sm {
          padding: 0.55rem 1.1rem;
          font-size: 0.82rem;
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .depth-scrubber-nav {
            grid-template-columns: repeat(2, 1fr);
          }
          .layer-inspection-viewport {
            padding: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
