import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, RotateCcw, Crosshair, CheckCircle2, ShieldAlert } from 'lucide-react';
import { PROBLEM_NODES } from '../../data/problems';
import { audioTelemetry } from '../../utils/audioTelemetry';

export default function HeroTracer({ onOpenIntake }) {
  const [selectedProblemId, setSelectedProblemId] = useState('production-delay');
  const [currentStep, setCurrentStep] = useState(1);
  const [isAutoTracing, setIsAutoTracing] = useState(false);

  const activeProblem = PROBLEM_NODES.find((p) => p.id === selectedProblemId) || PROBLEM_NODES[0];
  const stepData = activeProblem.steps[currentStep];

  // Auto-play tracing sequence if enabled
  useEffect(() => {
    let timer;
    if (isAutoTracing) {
      if (currentStep < 6) {
        timer = setTimeout(() => {
          const next = currentStep + 1;
          setCurrentStep(next);
          if (next === 3) audioTelemetry.playRootFound();
          else audioTelemetry.playStep(next);
        }, 2200);
      } else {
        timer = setTimeout(() => {
          setIsAutoTracing(false);
        }, 500);
      }
    }
    return () => clearTimeout(timer);
  }, [isAutoTracing, currentStep]);

  const handleSelectProblem = (id) => {
    setSelectedProblemId(id);
    setCurrentStep(1);
    setIsAutoTracing(false);
    audioTelemetry.playSelect();
  };

  const handleStepClick = (step) => {
    setCurrentStep(step);
    setIsAutoTracing(false);
    if (step === 3) {
      audioTelemetry.playRootFound();
    } else {
      audioTelemetry.playStep(step);
    }
  };

  const startAutoTrace = () => {
    setCurrentStep(1);
    setIsAutoTracing(true);
    audioTelemetry.playStep(1);
  };

  const resetTrace = () => {
    setCurrentStep(1);
    setIsAutoTracing(false);
    audioTelemetry.playHover();
  };

  return (
    <section className="hero-section section-block" id="section-01">
      {/* Background Ambient Radial Lighting */}
      <div className="hero-atmosphere"></div>

      <div className="container hero-container">
        {/* Provocative Opening Statement */}
        <div className="hero-editorial">
          <div className="section-eyebrow">
            <span>01 — The problem</span>
          </div>
          <h1 className="hero-headline">
            The problem isn't always where you see it.
          </h1>
          <p className="hero-support">
            Access the capability you need without carrying everything required to build it. We synchronize existing industry resources, specialized talent, infrastructure and intelligence around the requirement—reducing fixed overhead, coordination friction and economic leakage.
          </p>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.65rem',
            background: 'rgba(62, 180, 137, 0.08)',
            border: '1px solid rgba(62, 180, 137, 0.25)',
            borderRadius: '999px',
            padding: '0.35rem 1rem',
            margin: '0.5rem 0 1.5rem',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-mono)'
          }}>
            <span style={{ color: 'var(--signal-color, #3EB489)', fontWeight: 600 }}>Core principle:</span>
            <span style={{ color: 'var(--text-pure)' }}>“Don't own everything. Connect everything that matters.”</span>
          </div>

          <div className="hero-actions">
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
            <button
              className="btn-ghost"
              onClick={() => {
                audioTelemetry.playSelect();
                startAutoTrace();
                const tracerEl = document.getElementById('tracer-instrument-panel');
                if (tracerEl) tracerEl.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Play size={15} fill="currentColor" />
              <span>Trace a problem</span>
            </button>
          </div>
        </div>

        {/* Signature Interactive Problem Tracer Instrument */}
        <div className="tracer-instrument diagnostic-panel" id="tracer-instrument-panel">
          {/* Diagnostic Console Header */}
          <div className="tracer-header">
            <div className="tracer-title-group">
              <div className="tracer-status-dot"></div>
              <div>
                <span className="mono-readout tracer-heading-code">Diagnostic tracer // Interactive demonstration</span>
                <p className="tracer-instruction">Select a surface problem to trace its underlying causal network</p>
              </div>
            </div>

            <div className="tracer-controls">
              {currentStep < 6 ? (
                <button
                  className="step-nav-btn play-btn"
                  onClick={startAutoTrace}
                  title="Auto trace sequence"
                >
                  <Play size={13} fill="currentColor" />
                  <span>{isAutoTracing ? 'Tracing...' : 'Auto trace'}</span>
                </button>
              ) : (
                <button
                  className="step-nav-btn reset-btn"
                  onClick={resetTrace}
                  title="Reset trace sequence"
                >
                  <RotateCcw size={13} />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Floating Problem Selection Nodes */}
          <div className="problem-node-rack">
            {PROBLEM_NODES.map((problem) => {
              const isSelected = problem.id === selectedProblemId;
              return (
                <button
                  key={problem.id}
                  className={`problem-pill-node ${isSelected ? 'active' : ''}`}
                  onClick={() => handleSelectProblem(problem.id)}
                  onMouseEnter={() => audioTelemetry.playHover()}
                >
                  <span className="node-code">{problem.code}</span>
                  <span className="node-label">{problem.label}</span>
                  {isSelected && <span className="node-active-light"></span>}
                </button>
              );
            })}
          </div>

          {/* 6-Stage Progress Indicator */}
          <div className="step-stepper-bar">
            {[1, 2, 3, 4, 5, 6].map((s) => {
              const isPast = s <= currentStep;
              const isCurrent = s === currentStep;
              return (
                <button
                  key={s}
                  className={`stepper-node ${isCurrent ? 'current' : ''} ${isPast ? 'reached' : ''}`}
                  onClick={() => handleStepClick(s)}
                  title={`Jump to Step ${s}`}
                >
                  <div className="stepper-dot">
                    {s === 6 && isCurrent ? <CheckCircle2 size={12} /> : s}
                  </div>
                  <span className="stepper-label">
                    {s === 1 && 'Problem'}
                    {s === 2 && 'Factors'}
                    {s === 3 && 'Root causes'}
                    {s === 4 && 'Stakeholders'}
                    {s === 5 && 'Intervention'}
                    {s === 6 && 'What to measure'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Diagnostic Step Card */}
          <div className={`step-display-surface step-${currentStep}`}>
            <div className="step-card-header">
              <div className="step-badges">
                <span className="telemetry-tag signal">{stepData.badge}</span>
                <span className="telemetry-tag">{stepData.title}</span>
              </div>
              {stepData.metric && (
                <div className="step-metric-callout">
                  <span className="mono-readout">{stepData.metric}</span>
                </div>
              )}
            </div>

            <h3 className="step-headline">{stepData.headline}</h3>
            <p className="step-description">{stepData.description}</p>

            {/* Step Specific Visual Modules */}
            {currentStep === 1 && (
              <div className="visual-symptom-box">
                <div className="symptom-alert">
                  <ShieldAlert size={18} className="text-signal" />
                  <span>Visible surface symptom recorded:</span>
                </div>
                <div className="symptom-tag-large">{activeProblem.label}</div>
                <div className="symptom-note">
                  Most organizations attempt to resolve the issue at this layer. FIX-SYNQ traces deeper.
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="visual-trace-chain">
                <div className="mono-readout chain-header">Causal back-trace:</div>
                <div className="chain-pills">
                  <span className="chain-pill symptom">{activeProblem.label}</span>
                  <ArrowRight size={14} className="chain-arrow" />
                  <span className="chain-pill factor">{stepData.affectedNode}</span>
                  <ArrowRight size={14} className="chain-arrow" />
                  <span className="chain-pill pending">Tracing root...</span>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="visual-root-box">
                <div className="root-indicator">
                  <Crosshair size={22} className="text-signal pulse-signal" />
                  <span className="mono-readout text-signal">Structural root cause exposed</span>
                </div>
                <div className="root-name">{stepData.affectedNode}</div>
                <p className="root-subtext">
                  This systemic failure generates the surface friction. Fixing the surface without fixing this root guarantees recurrence.
                </p>
              </div>
            )}

            {currentStep === 4 && (
              <div className="visual-stakeholder-spread">
                <div className="mono-readout chain-header">Affected stakeholder mesh:</div>
                <div className="stakeholder-grid-mini">
                  {stepData.stakeholders?.map((stk) => (
                    <div key={stk} className="stk-mini-badge">
                      <span className="stk-dot"></span>
                      <span>{stk}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="visual-intervention-box">
                <div className="mono-readout chain-header">Mobilized intervention tools:</div>
                <div className="intervention-pills">
                  {stepData.interventionTypes?.map((tool) => (
                    <div key={tool} className="tool-pill-mini">
                      <span className="tool-dot"></span>
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 6 && (
              <div className="visual-conclusion-box">
                {/* Measurable Dimensions & Targets */}
                {stepData.measurableMetrics && (
                  <div className="measurable-metrics-rack" style={{ marginBottom: '1.25rem' }}>
                    <div className="mono-readout chain-header" style={{ marginBottom: '0.6rem' }}>
                      Auditable delta specification:
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
                      {stepData.measurableMetrics.map((m, idx) => (
                        <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '0.75rem 1rem' }}>
                          <span className="mono-readout" style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>{m.label}</span>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>{m.before}</span>
                            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--signal-color)' }}>{m.target}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="conclusion-banner">
                  <span className="mono-readout conclusion-callout-tag">Actionable resolution vector</span>
                  <h4 className="conclusion-title">“This is where the problem can be worked on.”</h4>
                  <p className="conclusion-quote">"{stepData.callout}"</p>
                </div>

                <div className="conclusion-actions">
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
                  <a
                    href="#section-05"
                    className="btn-ghost"
                    onClick={() => audioTelemetry.playHover()}
                  >
                    <span>Explore full root graph</span>
                  </a>
                </div>
              </div>
            )}

            {/* Stepper Navigation Buttons */}
            <div className="step-footer-nav">
              {currentStep > 1 && (
                <button
                  className="step-nav-btn prev"
                  onClick={() => handleStepClick(currentStep - 1)}
                >
                  <span>Previous layer</span>
                </button>
              )}
              {currentStep < 6 && (
                <button
                  className="step-nav-btn next"
                  onClick={() => handleStepClick(currentStep + 1)}
                >
                  <span>Proceed to step {currentStep + 1}</span>
                  <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: clamp(8.5rem, 13vw, 11rem);
          padding-bottom: clamp(4rem, 7vw, 6.5rem);
          overflow: hidden;
          position: relative;
        }

        .hero-atmosphere {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          background: radial-gradient(circle at 50% 20%, rgba(62, 180, 137, 0.12) 0%, transparent 65%);
        }

        .hero-editorial {
          max-width: 920px;
          margin-bottom: 3.5rem;
          position: relative;
          z-index: 2;
        }

        .hero-headline {
          font-size: clamp(2.3rem, 5.2vw, 4.4rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1.08;
          margin-bottom: 1.4rem;
        }

        .hero-support {
          font-size: clamp(1.1rem, 1.6vw, 1.4rem);
          color: var(--text-muted);
          line-height: 1.55;
          max-width: 780px;
          margin-bottom: 2rem;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        /* Diagnostic Tracer Instrument */
        .tracer-instrument {
          position: relative;
          z-index: 3;
          border: 1px solid var(--glass-border);
          background: var(--glass-bg);
          backdrop-filter: blur(var(--glass-blur-heavy)) saturate(200%) brightness(105%);
          -webkit-backdrop-filter: blur(var(--glass-blur-heavy)) saturate(200%) brightness(105%);
          box-shadow: var(--glass-specular), var(--glass-shadow);
          border-radius: var(--radius-card);
          padding: 2.25rem;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .tracer-instrument:hover {
          border-color: var(--glass-border-hover);
          box-shadow: var(--glass-specular-hover), var(--glass-shadow-hover);
        }

        .tracer-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 1.75rem;
        }

        .tracer-title-group {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .tracer-status-dot {
          width: 8px;
          height: 8px;
          background: var(--signal);
          border-radius: 50%;
          margin-top: 0.35rem;
          box-shadow: 0 0 10px var(--signal);
          animation: pulseGlow 1.8s infinite;
        }

        .tracer-heading-code {
          color: var(--signal);
          display: block;
          margin-bottom: 0.2rem;
        }

        .tracer-instruction {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .step-nav-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-medium);
          color: var(--text-main);
          padding: 0.5rem 1rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .step-nav-btn:hover {
          border-color: var(--text-pure);
          color: var(--text-pure);
        }

        .step-nav-btn.play-btn {
          background: var(--signal-subtle);
          border-color: var(--signal);
          color: var(--signal-bright);
        }

        .step-nav-btn.next {
          background: var(--signal);
          border-color: var(--signal);
          color: var(--text-pure);
          margin-left: auto;
        }

        .step-nav-btn.next:hover {
          background: var(--signal-bright);
        }

        /* Floating Problem Pill Nodes */
        .problem-node-rack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-bottom: 2rem;
        }

        .problem-pill-node {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.08);
          padding: 0.55rem 1.15rem;
          border-radius: var(--radius-pill);
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.78rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          position: relative;
        }

        .problem-pill-node:hover {
          border-color: rgba(255, 255, 255, 0.22);
          color: var(--text-pure);
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-1px);
        }

        .problem-pill-node.active {
          border-color: rgba(62, 180, 137, 0.5);
          background: var(--signal-subtle);
          color: var(--text-pure);
          box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.2), 0 0 20px var(--signal-glow);
        }

        .node-code {
          font-size: 0.76rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .node-label {
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        .node-active-light {
          width: 6px;
          height: 6px;
          background: var(--signal);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--signal);
        }

        /* 6-Stage Progress Stepper */
        .step-stepper-bar {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 0.5rem;
          margin-bottom: 2rem;
          padding: 0.75rem 0;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        .stepper-node {
          background: none;
          border: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
          color: var(--text-muted);
          transition: color var(--transition-fast);
          text-align: center;
        }

        .stepper-node:hover {
          color: var(--text-muted);
        }

        .stepper-dot {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid var(--border-medium);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-size: 0.76rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }

        .stepper-node.reached .stepper-dot {
          border-color: rgba(62, 180, 137, 0.5);
          color: var(--text-main);
        }

        .stepper-node.current {
          color: var(--signal-bright);
        }

        .stepper-node.current .stepper-dot {
          background: var(--signal);
          border-color: var(--signal);
          color: var(--text-pure);
          box-shadow: 0 0 14px var(--signal);
        }

        .stepper-label {
          font-family: var(--font-mono);
          font-size: 0.76rem;
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        /* Active Diagnostic Surface */
        .step-display-surface {
          background: var(--glass-bg);
          backdrop-filter: blur(var(--glass-blur)) saturate(200%);
          -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(200%);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-card);
          box-shadow: var(--glass-specular), var(--glass-shadow);
          padding: 2.25rem;
          position: relative;
        }

        .step-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .step-badges {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .step-metric-callout {
          background: var(--glass-bg-telemetry);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--border-telemetry);
          color: var(--telemetry);
          padding: 0.3rem 0.85rem;
          border-radius: var(--radius-pill);
          box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.1);
        }

        .step-headline {
          font-size: clamp(1.4rem, 2.5vw, 2rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 0.75rem;
          color: var(--text-pure);
        }

        .step-description {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 820px;
          margin-bottom: 1.75rem;
        }

        /* Visual Module Variants - Frosted Glass */
        .visual-symptom-box {
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-specular);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.75rem;
        }

        .symptom-alert {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
        }

        .symptom-tag-large {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--signal-bright);
          letter-spacing: 0.02em;
          margin-bottom: 0.5rem;
        }

        .symptom-note {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .visual-trace-chain {
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-specular);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.75rem;
        }

        .chain-header {
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .chain-pills {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .chain-pill {
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.04em;
        }

        .chain-pill.symptom {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          color: var(--text-muted);
          backdrop-filter: blur(8px);
        }

        .chain-pill.factor {
          background: var(--glass-bg-signal);
          border: 1px solid var(--glass-border-signal);
          color: var(--signal-bright);
          backdrop-filter: blur(8px);
        }

        .chain-pill.pending {
          background: transparent;
          border: 1px dashed var(--glass-border);
          color: var(--text-muted);
        }

        .chain-arrow {
          color: var(--text-muted);
        }

        .visual-root-box {
          background: var(--glass-bg-signal);
          backdrop-filter: blur(24px) saturate(200%);
          -webkit-backdrop-filter: blur(24px) saturate(200%);
          border: 1px solid var(--glass-border-signal);
          box-shadow: 0 0 35px rgba(62, 180, 137, 0.25), inset 0 1px 1px 0 rgba(86, 227, 159, 0.3);
          padding: 1.75rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.75rem;
        }

        .root-indicator {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.75rem;
        }

        .root-name {
          font-family: var(--font-display);
          font-size: 1.85rem;
          font-weight: 800;
          color: var(--text-pure);
          margin-bottom: 0.5rem;
          letter-spacing: -0.01em;
        }

        .root-subtext {
          font-size: 0.95rem;
          color: var(--text-main);
          line-height: 1.5;
        }

        .visual-stakeholder-spread {
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-specular);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.75rem;
        }

        .stakeholder-grid-mini {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
        }

        .stk-mini-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.45rem 0.85rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-pill);
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--text-main);
        }

        .stk-dot {
          width: 5px;
          height: 5px;
          background: var(--telemetry);
          border-radius: 50%;
        }

        .visual-intervention-box {
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-specular);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.75rem;
        }

        .intervention-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
        }

        .tool-pill-mini {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.45rem 0.9rem;
          background: var(--glass-bg-signal);
          backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border-signal);
          border-radius: var(--radius-pill);
          font-family: var(--font-mono);
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--signal-bright);
        }

        .tool-dot {
          width: 5px;
          height: 5px;
          background: var(--signal);
          border-radius: 50%;
        }

        .visual-conclusion-box {
          background: var(--glass-bg-signal);
          backdrop-filter: blur(28px) saturate(220%);
          -webkit-backdrop-filter: blur(28px) saturate(220%);
          border: 1px solid var(--glass-border-signal);
          box-shadow: 0 0 40px rgba(62, 180, 137, 0.25), var(--glass-specular);
          padding: 2rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.75rem;
        }

        .conclusion-callout-tag {
          color: var(--signal-bright);
          display: block;
          margin-bottom: 0.5rem;
        }

        .conclusion-title {
          font-size: clamp(1.4rem, 2.5vw, 2.2rem);
          font-weight: 800;
          color: var(--text-pure);
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }

        .conclusion-quote {
          font-size: 1.05rem;
          font-style: italic;
          color: var(--text-muted);
          margin-bottom: 1.75rem;
          border-left: 2px solid var(--signal);
          padding-left: 1rem;
        }

        .conclusion-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .step-footer-nav {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 1rem;
        }

        @media (max-width: 860px) {
          .step-stepper-bar {
            grid-template-columns: repeat(3, 1fr);
            row-gap: 0.75rem;
          }
          .tracer-instrument {
            padding: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
