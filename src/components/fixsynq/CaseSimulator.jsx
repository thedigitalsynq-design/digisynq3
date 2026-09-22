import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { SIMULATION_CASES } from '../../data/cases';
import { audioTelemetry } from '../../utils/audioTelemetry';

export default function CaseSimulator({ onOpenIntake }) {
  const [selectedCaseId, setSelectedCaseId] = useState('case-01');
  // State within current case: 'problem' -> 'trace' -> 'intervention' -> 'outcome'
  const [caseStage, setCaseStage] = useState('problem');

  const activeCase = SIMULATION_CASES.find((c) => c.id === selectedCaseId) || SIMULATION_CASES[0];

  const handleSelectCase = (id) => {
    setSelectedCaseId(id);
    setCaseStage('problem');
    audioTelemetry.playSelect();
  };

  const handleAdvanceStage = (nextStage) => {
    setCaseStage(nextStage);
    if (nextStage === 'trace') audioTelemetry.playRootFound();
    else if (nextStage === 'intervention') audioTelemetry.playStep(4);
    else if (nextStage === 'outcome') audioTelemetry.playSuccess();
    else audioTelemetry.playHover();
  };

  return (
    <section className="cases-section section-block" id="section-07">
      <div className="container">
        <div className="section-eyebrow">
          <span>08 — Cases</span>
        </div>
        <h2 className="section-title">
          Every problem becomes a case. Every case becomes intelligence.
        </h2>
        <p className="section-subtitle">
          No invented client logos or fabricated testimonials. Every case is structured to demonstrate the root-cause methodology: from visible symptom to verified operational delta and compounding intelligence.
        </p>

        {/* Case Switcher Tabs */}
        <div className="case-tabs-rack">
          {SIMULATION_CASES.map((cs) => {
            const isSelected = cs.id === selectedCaseId;
            return (
              <button
                key={cs.id}
                className={`case-tab-btn ${isSelected ? 'active' : ''}`}
                onClick={() => handleSelectCase(cs.id)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <span className="mono-readout case-code">{cs.code}</span>
                  <span className="telemetry-tag" style={{ fontSize: '0.76rem', fontWeight: 600, padding: '0.2rem 0.55rem' }}>{cs.caseType}</span>
                </div>
                <span className="case-title">{cs.title}</span>
                <span className="case-sector">{cs.stakeholder}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Case Simulator Console */}
        <div className="case-simulator-console diagnostic-panel">
          {/* Progress Indicator: Problem -> Trace -> Intervention -> Outcome */}
          <div className="case-stage-stepper">
            <button
              className={`case-step-pill ${caseStage === 'problem' ? 'current' : 'visited'}`}
              onClick={() => handleAdvanceStage('problem')}
            >
              <span className="pill-num">1</span>
              <span>Stakeholder &amp; problem</span>
            </button>
            <span className="step-sep">→</span>

            <button
              className={`case-step-pill ${caseStage === 'trace' ? 'current' : (caseStage === 'intervention' || caseStage === 'outcome' ? 'visited' : '')}`}
              onClick={() => handleAdvanceStage('trace')}
            >
              <span className="pill-num">2</span>
              <span>Root cause &amp; counterparties</span>
            </button>
            <span className="step-sep">→</span>

            <button
              className={`case-step-pill ${caseStage === 'intervention' ? 'current' : (caseStage === 'outcome' ? 'visited' : '')}`}
              onClick={() => handleAdvanceStage('intervention')}
            >
              <span className="pill-num">3</span>
              <span>Intervention specification</span>
            </button>
            <span className="step-sep">→</span>

            <button
              className={`case-step-pill ${caseStage === 'outcome' ? 'current' : ''}`}
              onClick={() => handleAdvanceStage('outcome')}
            >
              <span className="pill-num">4</span>
              <span>Outcome &amp; learning</span>
            </button>
          </div>

          {/* Dynamic Stage Canvas */}
          <div className="stage-viewport">
            {/* STAGE 1: STAKEHOLDER & PROBLEM */}
            {caseStage === 'problem' && (
              <div className="case-slide fade-in">
                <div className="slide-meta">
                  <span className="telemetry-tag signal">{activeCase.caseType}</span>
                  <span className="mono-readout text-dim">Case file: {activeCase.code} // Sector: {activeCase.sector}</span>
                </div>
                
                <div style={{ margin: '0.85rem 0 0.5rem' }}>
                  <span className="mono-readout text-dim" style={{ fontSize: '0.72rem' }}>Reporting stakeholder:</span>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--text-pure)', fontWeight: 700, margin: '0.2rem 0 0.75rem' }}>{activeCase.stakeholder}</h4>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '18px', padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
                  <span className="mono-readout text-signal" style={{ fontSize: '0.72rem' }}>Visible problem:</span>
                  <p style={{ fontSize: '1.05rem', color: '#FFF', margin: '0.4rem 0 0', lineHeight: 1.55 }}>{activeCase.problem}</p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <span className="mono-readout text-dim" style={{ fontSize: '0.72rem', display: 'block', marginBottom: '0.5rem' }}>Contributing causes:</span>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.5rem' }}>
                    {activeCase.causes.map((c, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-main)', background: 'rgba(255,255,255,0.02)', padding: '0.65rem 1rem', borderRadius: '12px' }}>
                        <span style={{ color: 'var(--signal-color)', fontWeight: 700 }}>•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="slide-action-bar">
                  <button
                    className="btn-signal"
                    onClick={() => handleAdvanceStage('trace')}
                  >
                    <span>Trace root cause</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            )}

            {/* STAGE 2: ROOT CAUSE & CONNECTED STAKEHOLDERS */}
            {caseStage === 'trace' && (
              <div className="case-slide fade-in">
                <div className="slide-meta">
                  <span className="telemetry-tag signal">{activeCase.caseType}</span>
                  <span className="mono-readout text-signal">Structural diagnosis active</span>
                </div>

                <div style={{ background: 'rgba(62, 180, 137, 0.08)', border: '1px solid rgba(62, 180, 137, 0.25)', borderRadius: '20px', padding: '1.5rem', margin: '1rem 0 1.5rem' }}>
                  <span className="mono-readout text-signal" style={{ fontSize: '0.72rem' }}>Exposed root cause:</span>
                  <h3 style={{ fontSize: '1.25rem', color: '#FFF', fontWeight: 700, margin: '0.4rem 0 0', lineHeight: 1.45 }}>{activeCase.rootCause}</h3>
                </div>

                <div style={{ marginBottom: '1.75rem' }}>
                  <span className="mono-readout text-dim" style={{ fontSize: '0.72rem', display: 'block', marginBottom: '0.6rem' }}>Connected stakeholders in the causal mesh:</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {activeCase.connectedStakeholders.map((stk, idx) => (
                      <span key={idx} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '9999px', padding: '0.35rem 0.85rem', fontSize: '0.78rem', color: '#FFF' }}>
                        {stk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="slide-action-bar">
                  <button
                    className="btn-signal"
                    onClick={() => handleAdvanceStage('intervention')}
                  >
                    <span>See intervention</span>
                    <ArrowRight size={15} />
                  </button>
                  <button
                    className="btn-ghost"
                    onClick={() => handleAdvanceStage('problem')}
                  >
                    <span>Back to problem</span>
                  </button>
                </div>
              </div>
            )}

            {/* STAGE 3: INTERVENTION SPECIFICATION */}
            {caseStage === 'intervention' && (
              <div className="case-slide fade-in">
                <div className="slide-meta">
                  <span className="telemetry-tag" style={{ borderColor: 'rgba(0, 229, 255, 0.4)', color: '#00E5FF' }}>{activeCase.caseType}</span>
                  <span className="mono-readout text-telemetry">Deployed instruments</span>
                </div>

                <div className="tools-applied-strip" style={{ margin: '1rem 0' }}>
                  <span className="mono-readout text-dim">Tools mobilized:</span>
                  {activeCase.intervention.tools.map((t) => (
                    <span key={t} className="tool-badge-pill">
                      {t}
                    </span>
                  ))}
                </div>

                <p style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  {activeCase.intervention.summary}
                </p>

                <div className="actions-sequence-grid">
                  {activeCase.intervention.actions.map((act, i) => (
                    <div key={i} className="action-step-card">
                      <div className="action-step-num">0{i + 1}</div>
                      <h4 className="action-step-title">{act.step}</h4>
                      <p className="action-step-desc">{act.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="slide-action-bar">
                  <button
                    className="btn-signal"
                    onClick={() => handleAdvanceStage('outcome')}
                  >
                    <span>See measured outcome</span>
                    <ArrowRight size={15} />
                  </button>
                  <button
                    className="btn-ghost"
                    onClick={() => handleAdvanceStage('trace')}
                  >
                    <span>Back to trace</span>
                  </button>
                </div>
              </div>
            )}

            {/* STAGE 4: MEASURED OUTCOME & SYSTEMIC LEARNING */}
            {caseStage === 'outcome' && (
              <div className="case-slide fade-in">
                <div className="slide-meta">
                  <span className="telemetry-tag signal">{activeCase.caseType}</span>
                  <span className="mono-readout text-signal">Verified operational delta</span>
                </div>
                <h3 className="slide-headline" style={{ margin: '0.75rem 0 1.25rem' }}>{activeCase.outcome.headline}</h3>

                <div className="outcomes-metrics-grid">
                  {activeCase.outcome.metrics.map((met, i) => (
                    <div key={i} className="outcome-metric-card">
                      <div className="metric-icon-wrap">
                        <CheckCircle2 size={18} className="text-signal" />
                      </div>
                      <div>
                        <span className="mono-readout metric-label">{met.label}</span>
                        <h4 className="metric-value-h">{met.value}</h4>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Section 12 Required Learning Field */}
                <div className="echo-principle-box" style={{ background: 'rgba(255,255,255,0.03)', borderLeft: '3px solid var(--signal-color)', borderRadius: '0 16px 16px 0', padding: '1.25rem 1.5rem', margin: '1.5rem 0' }}>
                  <span className="mono-readout text-signal" style={{ fontSize: '0.72rem' }}>Systemic case learning:</span>
                  <p className="principle-quote" style={{ fontStyle: 'normal', color: 'var(--text-main)', marginTop: '0.4rem', fontSize: '0.98rem', lineHeight: 1.55 }}>
                    "{activeCase.learning}"
                  </p>
                </div>

                <div className="slide-action-bar">
                  <button
                    className="btn-signal"
                    onClick={() => {
                      audioTelemetry.playSelect();
                      onOpenIntake(activeCase.stakeholder, `Case reference: ${activeCase.title}`);
                    }}
                  >
                    <span>Bring us a problem</span>
                    <ArrowRight size={15} />
                  </button>
                  <button
                    className="btn-ghost"
                    onClick={() => handleAdvanceStage('problem')}
                  >
                    <RotateCcw size={14} />
                    <span>Restart case</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .cases-section {
          position: relative;
        }

        .case-tabs-rack {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .case-tab-btn {
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-specular);
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-card);
          text-align: left;
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .case-tab-btn:hover {
          border-color: var(--glass-border-hover);
          background: var(--glass-bg-hover);
          box-shadow: var(--glass-specular-hover), var(--glass-shadow-hover);
          transform: translateY(-2px);
        }

        .case-tab-btn.active {
          border-color: var(--glass-border-signal);
          background: var(--glass-bg-signal);
          box-shadow: 0 0 20px rgba(62, 180, 137, 0.22), var(--glass-specular);
        }

        .case-code {
          color: var(--signal);
          font-size: 0.78rem;
          font-weight: 600;
        }

        .case-title {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-pure);
          letter-spacing: -0.01em;
        }

        .case-sector {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        /* Case Simulator Console */
        .case-simulator-console {
          padding: 2.5rem;
          border: 1px solid var(--glass-border);
          background: var(--glass-bg);
          backdrop-filter: blur(var(--glass-blur-heavy)) saturate(200%);
          -webkit-backdrop-filter: blur(var(--glass-blur-heavy)) saturate(200%);
          box-shadow: var(--glass-specular), var(--glass-shadow);
          border-radius: var(--radius-card);
        }

        .case-stage-stepper {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-bottom: 1.75rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--glass-border);
          flex-wrap: wrap;
        }

        .case-step-pill {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
          color: var(--text-muted);
          padding: 0.45rem 1rem;
          border-radius: var(--radius-pill);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all var(--transition-fast);
        }

        .case-step-pill:hover {
          color: var(--text-pure);
          border-color: var(--glass-border-hover);
          background: rgba(255, 255, 255, 0.08);
        }

        .case-step-pill.visited {
          color: var(--text-main);
          border-color: var(--glass-border-hover);
        }

        .case-step-pill.current {
          background: var(--glass-bg-signal);
          border-color: var(--glass-border-signal);
          color: var(--signal-bright);
          box-shadow: 0 0 16px var(--signal-glow);
        }

        .pill-num {
          font-weight: 700;
        }

        .step-sep {
          color: var(--text-muted);
        }

        .slide-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .slide-headline {
          font-size: clamp(1.6rem, 2.6vw, 2.3rem);
          font-weight: 800;
          color: var(--text-pure);
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .slide-body {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 860px;
          margin-bottom: 2rem;
        }

        .case-indicators-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .case-indicator-card {
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-specular);
          padding: 1.25rem;
          border-radius: var(--radius-md);
        }

        .ind-lbl {
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 600;
          display: block;
          margin-bottom: 0.35rem;
        }

        .ind-val {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 700;
        }

        .slide-action-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-subtle);
          flex-wrap: wrap;
        }

        /* Trace Sequence */
        .trace-chain-visual {
          display: flex;
          flex-direction: column;
          margin-bottom: 2rem;
        }

        .trace-chain-node {
          display: flex;
          gap: 1.25rem;
        }

        .node-marker-col {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .node-circle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-medium);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--text-main);
        }

        .node-circle.root-circle {
          background: var(--signal);
          border-color: var(--signal);
          color: var(--text-pure);
          box-shadow: 0 0 14px var(--signal);
        }

        .node-line {
          width: 2px;
          flex: 1;
          min-height: 28px;
          background: var(--border-medium);
          margin: 4px 0;
        }

        .node-text-col {
          padding-bottom: 1.5rem;
        }

        .node-label-mono {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-pure);
          display: block;
          margin-bottom: 0.2rem;
        }

        .node-note-p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.45;
        }

        .diagnosis-summary-box {
          background: var(--glass-bg-signal);
          backdrop-filter: blur(20px) saturate(200%);
          -webkit-backdrop-filter: blur(20px) saturate(200%);
          border: 1px solid var(--glass-border-signal);
          box-shadow: 0 0 25px rgba(62, 180, 137, 0.2), var(--glass-specular);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          margin-bottom: 2rem;
        }

        .summary-p {
          font-size: 1.05rem;
          color: var(--text-main);
          font-weight: 500;
          margin-top: 0.4rem;
        }

        /* Intervention Grid */
        .tools-applied-strip {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 1.5rem;
        }

        .tool-badge-pill {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          font-weight: 600;
          background: var(--glass-bg-signal);
          backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border-signal);
          color: var(--signal-bright);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-pill);
        }

        .actions-sequence-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .action-step-card {
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-specular);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .action-step-card:hover {
          transform: translateY(-2px);
          border-color: var(--glass-border-hover);
          box-shadow: var(--glass-specular-hover), var(--glass-shadow-hover);
        }

        .action-step-num {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--telemetry);
          margin-bottom: 0.5rem;
        }

        .action-step-title {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-pure);
          margin-bottom: 0.5rem;
        }

        .action-step-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* Outcomes */
        .outcomes-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .outcome-metric-card {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-specular);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .outcome-metric-card:hover {
          transform: translateY(-2px);
          border-color: var(--glass-border-hover);
          box-shadow: var(--glass-specular-hover), var(--glass-shadow-hover);
        }

        .metric-icon-wrap {
          margin-top: 0.2rem;
        }

        .metric-label {
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 600;
          display: block;
          margin-bottom: 0.35rem;
        }

        .metric-value-h {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-pure);
          line-height: 1.4;
        }

        .echo-principle-box {
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          border-left: 3px solid var(--signal);
          box-shadow: var(--glass-specular);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          margin-bottom: 2rem;
        }

        .principle-quote {
          font-size: 1.15rem;
          font-style: italic;
          color: var(--text-main);
          margin-top: 0.4rem;
        }

        @media (max-width: 960px) {
          .case-tabs-rack {
            grid-template-columns: 1fr;
          }
          .case-indicators-grid,
          .actions-sequence-grid,
          .outcomes-metrics-grid {
            grid-template-columns: 1fr;
          }
          .case-simulator-console {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
