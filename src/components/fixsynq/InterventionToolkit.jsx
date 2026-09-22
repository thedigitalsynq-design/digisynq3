import React, { useState } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { INTERVENTION_TOOLS } from '../../data/interventions';
import { audioTelemetry } from '../../utils/audioTelemetry';

export default function InterventionToolkit({ onOpenIntake }) {
  const [selectedToolId, setSelectedToolId] = useState('coordinate');

  const activeTool = INTERVENTION_TOOLS.find((t) => t.id === selectedToolId) || INTERVENTION_TOOLS[0];

  const handleSelectTool = (id) => {
    setSelectedToolId(id);
    audioTelemetry.playSelect();
  };

  return (
    <section className="toolkit-section section-block" id="interventions">
      <div className="container">
        <div className="section-eyebrow">
          <span>07 — The intervention layer</span>
        </div>
        <h2 className="section-title">
          The fix depends on the cause.
        </h2>
        <div className="intervention-quote-banner" style={{ margin: '1rem 0 1.25rem', padding: '1rem 1.5rem', background: 'rgba(62, 180, 137, 0.08)', borderLeft: '3px solid var(--signal-color)', borderRadius: '0 16px 16px 0' }}>
          <blockquote style={{ margin: 0, fontSize: '1.05rem', fontStyle: 'italic', color: 'var(--text-main)', fontWeight: 500 }}>
            “FIX-SYNQ does not decide the solution before understanding the cause.”
          </blockquote>
        </div>
        <p className="section-subtitle">
          These are <strong>intervention methods</strong>, not a predetermined service catalogue. We do not sell static consulting packages or billable hours. We deploy 12 purpose-engineered intervention instruments calibrated directly to the specific root causes uncovered during diagnosis.
        </p>

        <div className="toolkit-layout">
          {/* Left: 12 Diagnostic Tool Cards */}
          <div className="tool-rack-grid">
            {INTERVENTION_TOOLS.map((tool) => {
              const isSelected = tool.id === selectedToolId;
              return (
                <button
                  key={tool.id}
                  className={`tool-card-btn ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelectTool(tool.id)}
                  onMouseEnter={() => audioTelemetry.playHover()}
                >
                  <div className="tool-card-top">
                    <span className="mono-readout tool-card-code">{tool.code}</span>
                    <span className="tool-card-status"></span>
                  </div>
                  <h4 className="tool-card-name">{tool.name}</h4>
                  <p className="tool-card-principle">{tool.principle}</p>
                </button>
              );
            })}
          </div>

          {/* Right: Active Tool Bench & Operational Simulator */}
          <div className="tool-bench-display diagnostic-panel">
            <div className="tool-bench-header">
              <div>
                <div className="tool-bench-badge-row">
                  <span className="telemetry-tag signal">{activeTool.code} // Instrument specification</span>
                  <span className="telemetry-tag">Active intervention module</span>
                </div>
                <h3 className="bench-tool-name">{activeTool.name}</h3>
                <p className="bench-tool-principle">{activeTool.principle}</p>
              </div>
            </div>

            {/* Core Tool Mandate */}
            <div className="bench-section">
              <span className="mono-readout bench-section-label">Operational objective:</span>
              <p className="bench-description">{activeTool.description}</p>
            </div>

            {/* Tool Mechanism */}
            <div className="bench-section">
              <span className="mono-readout bench-section-label">Application mechanism:</span>
              <p className="bench-mechanism">{activeTool.mechanism}</p>
            </div>

            {/* Target Root Causes */}
            <div className="bench-section">
              <span className="mono-readout bench-section-label">Neutralizes these root causes:</span>
              <div className="causes-tags-row">
                {activeTool.targetCauses.map((cause, idx) => (
                  <span key={idx} className="cause-tag-pill">
                    {cause}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Interactive Instrument Readout */}
            <div className="bench-preview-terminal">
              <div className="terminal-header">
                <Terminal size={14} className="text-signal" />
                <span className="mono-readout">Live instrument telemetry simulator</span>
              </div>
              <div className="terminal-body">
                <div className="terminal-log-line">
                  <span className="log-prompt">&gt;</span>
                  <span className="log-text">{activeTool.interactivePreview.label}</span>
                </div>
                <div className="terminal-impact-line">
                  <span className="impact-badge">Measurable delta:</span>
                  <span className="impact-text">{activeTool.measurableImpact}</span>
                </div>
              </div>
            </div>

            {/* Deploy CTA */}
            <div className="bench-cta-row">
              <button
                className="btn-signal w-full"
                onClick={() => {
                  audioTelemetry.playSelect();
                  onOpenIntake(undefined, `Intervention Deployment: ${activeTool.name}`);
                }}
              >
                <span>Deploy {activeTool.name} on your production</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .toolkit-section {
          position: relative;
        }

        .toolkit-layout {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 1.75rem;
          align-items: start;
        }

        .tool-rack-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }

        .tool-card-btn {
          background: var(--glass-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-specular);
          padding: 1.25rem 1rem;
          border-radius: var(--radius-card);
          text-align: left;
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .tool-card-btn:hover {
          border-color: var(--glass-border-hover);
          background: var(--glass-bg-hover);
          transform: translateY(-2px);
          box-shadow: var(--glass-specular-hover);
        }

        .tool-card-btn.selected {
          border-color: var(--glass-border-signal);
          background: var(--glass-bg-signal);
          box-shadow: 0 0 20px rgba(62, 180, 137, 0.22), var(--glass-specular);
        }

        .tool-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .tool-card-code {
          color: var(--text-muted);
          font-size: 0.78rem;
          font-weight: 600;
        }

        .tool-card-btn.selected .tool-card-code {
          color: var(--signal);
        }

        .tool-card-status {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--text-muted);
        }

        .tool-card-btn.selected .tool-card-status {
          background: var(--signal);
          box-shadow: 0 0 6px var(--signal);
        }

        .tool-card-name {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-pure);
          letter-spacing: -0.01em;
        }

        .tool-card-principle {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        /* Tool Bench Display */
        .tool-bench-display {
          border: 1px solid var(--glass-border);
          background: var(--glass-bg);
          backdrop-filter: blur(var(--glass-blur-heavy)) saturate(200%);
          -webkit-backdrop-filter: blur(var(--glass-blur-heavy)) saturate(200%);
          box-shadow: var(--glass-specular), var(--glass-shadow);
          border-radius: var(--radius-card);
          padding: 2.25rem;
        }

        .tool-bench-header {
          margin-bottom: 1.75rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .tool-bench-badge-row {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          flex-wrap: wrap;
        }

        .bench-tool-name {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--text-pure);
          margin-bottom: 0.25rem;
        }

        .bench-tool-principle {
          font-size: 1.05rem;
          color: var(--signal-bright);
          font-weight: 500;
        }

        .bench-section {
          margin-bottom: 1.4rem;
        }

        .bench-section-label {
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 600;
          display: block;
          margin-bottom: 0.4rem;
        }

        .bench-description {
          font-size: 1.05rem;
          color: var(--text-main);
          line-height: 1.55;
        }

        .bench-mechanism {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.55;
        }

        .causes-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .cause-tag-pill {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
          color: var(--text-main);
          border-radius: var(--radius-pill);
        }

        /* Terminal Preview */
        .bench-preview-terminal {
          background: rgba(10, 13, 19, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-specular);
          border-radius: var(--radius-md);
          margin-bottom: 1.75rem;
          overflow: hidden;
        }

        .terminal-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.5rem 1rem;
          border-bottom: 1px solid var(--border-subtle);
          color: var(--text-muted);
        }

        .terminal-body {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .terminal-log-line {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--text-pure);
        }

        .log-prompt {
          color: var(--signal);
          font-weight: 700;
        }

        .terminal-impact-line {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-family: var(--font-mono);
          font-size: 0.82rem;
        }

        .impact-badge {
          color: var(--telemetry);
          font-weight: 600;
        }

        .impact-text {
          color: var(--text-main);
        }

        @media (max-width: 1024px) {
          .toolkit-layout {
            grid-template-columns: 1fr;
          }
          .tool-rack-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
