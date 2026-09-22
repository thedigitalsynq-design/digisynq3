import React, { useState } from 'react';
import { Search, GitBranch, Share2, Target, PenTool, Zap, Activity, BookOpen, ArrowRight } from 'lucide-react';
import { audioTelemetry } from '../../utils/audioTelemetry';

export default function MethodologyTimeline({ onOpenIntake }) {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const stages = [
    {
      id: 'find',
      code: 'Stage-01',
      title: 'Find',
      tagline: 'Identify the visible problem.',
      icon: Search,
      description: 'Intake and document the surface crisis without preconceptions. Dissect the reported failure into precise operational friction points.',
      deliverable: 'Initial Friction Log & Telemetric Baseline',
      metric: 'Rapid Intake Assessment'
    },
    {
      id: 'trace',
      code: 'Stage-02',
      title: 'Trace',
      tagline: 'Break it down.',
      icon: GitBranch,
      description: 'Work backwards through the operational sequence. Track schedules, handoffs, contract terms, and dependencies to pinpoint where friction initiated.',
      deliverable: 'Causal Trace Manifest & Dependency Tree',
      metric: 'Unravels 4+ Preceding Dependencies'
    },
    {
      id: 'map',
      code: 'Stage-03',
      title: 'Map',
      tagline: 'Connect causes and stakeholders.',
      icon: Share2,
      description: 'Identify the core systemic breakdown and expose how it connects across other departments, vendors, and outside stakeholders.',
      deliverable: 'Root-Cause Network Map & Counterparty Exposure',
      metric: 'Exposes Hidden Multi-Party Contagion'
    },
    {
      id: 'prioritise',
      code: 'Stage-04',
      title: 'Prioritise',
      tagline: 'Identify high-impact intervention points.',
      icon: Target,
      description: 'Not every cause can or should be fixed simultaneously. We determine the exact high-leverage nodes where intervention yields geometric return.',
      deliverable: 'Intervention Leverage Matrix & Feasibility Gate',
      metric: 'Highest Return-on-Effort Target'
    },
    {
      id: 'design',
      code: 'Stage-05',
      title: 'Design',
      tagline: 'Determine the appropriate fix.',
      icon: PenTool,
      description: 'Engineer the targeted operational remedy—selecting from our 12 diagnostic tools (Connect, Match, Organise, Standardise, etc.).',
      deliverable: 'Custom Intervention Specification & SLA',
      metric: 'Zero Cookie-Cutter Packages'
    },
    {
      id: 'intervene',
      code: 'Stage-06',
      title: 'Intervene',
      tagline: 'Mobilise the right people, resources, technology and partners.',
      icon: Zap,
      description: 'Execute the intervention in the live production environment. Coordinate external specialists and protocol shifts without disrupting ongoing operations.',
      deliverable: 'Active Operational Deployment & Protocol Synchronization',
      metric: 'Asset-Light Tactical Execution'
    },
    {
      id: 'measure',
      code: 'Stage-07',
      title: 'Measure',
      tagline: 'Measure what changed.',
      icon: Activity,
      description: 'Audit the operational delta across Time, Cost, Utilization, Risk, and Efficiency against the pre-intervention baseline. Verify real change.',
      deliverable: 'Empirical Delta Report & Financial Audit',
      metric: 'Empirical Verification, Never Vague PR'
    },
    {
      id: 'learn',
      code: 'Stage-08',
      title: 'Learn',
      tagline: 'Capture the result and improve future interventions.',
      icon: BookOpen,
      description: 'Synthesize the solved case into institutional intelligence, compounding the accuracy and speed of every subsequent diagnosis.',
      deliverable: 'Intelligence Ingestion & Flywheel Model Update',
      metric: 'Perpetual Systemic Self-Improvement'
    }
  ];

  const currentStage = stages[activeStageIndex];
  const IconComponent = currentStage.icon;

  const handleSelectStage = (idx) => {
    setActiveStageIndex(idx);
    audioTelemetry.playStep(idx + 1);
  };

  return (
    <section className="methodology-section section-block" id="section-04">
      <div className="container">
        <div className="section-eyebrow">
          <span>06 — How FIX-SYNQ works</span>
        </div>
        <h2 className="section-title">
          How FIX-SYNQ works
        </h2>
        <div className="methodology-callout-large">
          <span className="text-signal">Find → Trace → Map → Prioritise → Design → Intervene → Measure → Learn</span>
        </div>
        <p className="section-subtitle">
          FIX-SYNQ does not decide the solution before understanding the cause. We execute an 8-stage intervention pipeline that diagnoses root causes, designs targeted fixes, mobilises the required resources, and verifies empirical operational change.
        </p>

        {/* 7-Stage Asset-Light Value-Creation System Bar */}
        <div className="value-creation-flow-bar" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '1rem 1.5rem',
          marginBottom: '2.5rem',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span className="mono-readout text-signal" style={{ fontSize: '0.72rem', fontWeight: 600 }}>The value-creation system:</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['Discover (requirement)', 'Identify (capability)', 'Connect (participants)', 'Coordinate (alignment)', 'Execute (delivery)', 'Optimize (reduce leakage)', 'Scale (network)'].map((step, idx) => (
              <React.Fragment key={step}>
                <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-pure)', background: 'rgba(255,70,30,0.06)', border: '1px solid rgba(255,70,30,0.15)', padding: '0.25rem 0.65rem', borderRadius: '6px' }}>
                  {step}
                </span>
                {idx < 6 && <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 600 }}>→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 8-Stage Interactive Timeline */}
        <div className="methodology-timeline-wrapper diagnostic-panel">
          {/* Timeline Step Selector Strip */}
          <div className="timeline-stepper-strip">
            {stages.map((stage, idx) => {
              const isActive = idx === activeStageIndex;
              const isPast = idx < activeStageIndex;
              const StageIcon = stage.icon;
              return (
                <button
                  key={stage.id}
                  className={`timeline-step-btn ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}
                  onClick={() => handleSelectStage(idx)}
                  onMouseEnter={() => audioTelemetry.playHover()}
                >
                  <div className="step-btn-badge">
                    <StageIcon size={14} />
                    <span className="step-num">{idx + 1}</span>
                  </div>
                  <span className="step-title-mono">{stage.title}</span>
                  {isActive && <div className="step-active-pip"></div>}
                </button>
              );
            })}
          </div>

          {/* Active Stage Deep Inspection Surface */}
          <div className="stage-inspect-surface">
            <div className="stage-inspect-header">
              <div className="stage-meta">
                <span className="telemetry-tag signal">{currentStage.code}</span>
                <span className="mono-readout text-muted">{currentStage.metric}</span>
              </div>
              <div className="stage-nav-indicators">
                <span className="mono-readout">Stage <strong>0{activeStageIndex + 1}</strong> of 08</span>
              </div>
            </div>

            <div className="stage-content-body">
              <div className="stage-hero-row">
                <div className="stage-icon-halo">
                  <IconComponent size={32} className="text-signal" />
                </div>
                <div>
                  <h3 className="stage-hero-title">{currentStage.title}</h3>
                  <p className="stage-hero-tagline">{currentStage.tagline}</p>
                </div>
              </div>

              <p className="stage-detail-desc">{currentStage.description}</p>

              {/* Concrete Output Card */}
              <div className="stage-deliverable-card">
                <span className="mono-readout deliv-label">Concrete operational deliverable:</span>
                <h4 className="deliv-text">{currentStage.deliverable}</h4>
              </div>
            </div>

            {/* Stepper Navigation Footer */}
            <div className="stage-footer-actions">
              {activeStageIndex > 0 ? (
                <button
                  className="btn-ghost btn-sm"
                  onClick={() => handleSelectStage(activeStageIndex - 1)}
                >
                  <span>Previous stage</span>
                </button>
              ) : <div></div>}

              {activeStageIndex < stages.length - 1 ? (
                <button
                  className="btn-signal btn-sm"
                  onClick={() => handleSelectStage(activeStageIndex + 1)}
                >
                  <span>Proceed to {stages[activeStageIndex + 1].title}</span>
                  <ArrowRight size={14} />
                </button>
              ) : (
                <button
                  className="btn-signal btn-sm"
                  onClick={() => {
                    audioTelemetry.playSelect();
                    onOpenIntake();
                  }}
                >
                  <span>Submit your problem now</span>
                  <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .methodology-section {
          position: relative;
        }

        .methodology-callout-large {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 4vw, 3.2rem);
          font-weight: 800;
          letter-spacing: -0.025em;
          margin-top: -0.5rem;
          margin-bottom: 1.5rem;
        }

        .methodology-timeline-wrapper {
          padding: 0;
          overflow: hidden;
        }

        .timeline-stepper-strip {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--glass-border);
        }

        .timeline-step-btn {
          background: none;
          border: none;
          border-right: 1px solid var(--glass-border);
          padding: 1.25rem 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          position: relative;
          transition: all var(--transition-fast);
        }

        .timeline-step-btn:last-child {
          border-right: none;
        }

        .timeline-step-btn:hover {
          background: rgba(255, 255, 255, 0.04);
        }

        .timeline-step-btn.active {
          background: var(--glass-bg-signal);
        }

        .step-btn-badge {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--text-muted);
          transition: color var(--transition-fast);
        }

        .timeline-step-btn.active .step-btn-badge {
          color: var(--signal-bright);
        }

        .step-num {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
        }

        .step-title-mono {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--text-muted);
          transition: color var(--transition-fast);
        }

        .timeline-step-btn.active .step-title-mono {
          color: var(--text-pure);
        }

        .step-active-pip {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--signal);
          box-shadow: 0 0 10px var(--signal);
        }

        /* Inspect Surface */
        .stage-inspect-surface {
          padding: 2.5rem;
        }

        .stage-inspect-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .stage-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .stage-hero-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.25rem;
        }

        .stage-icon-halo {
          width: 64px;
          height: 64px;
          background: var(--glass-bg-signal);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--glass-border-signal);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 25px rgba(62, 180, 137, 0.25), var(--glass-specular);
        }

        .stage-hero-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--text-pure);
          line-height: 1;
          margin-bottom: 0.25rem;
        }

        .stage-hero-tagline {
          font-size: 1.15rem;
          color: var(--signal-bright);
          font-weight: 500;
        }

        .stage-detail-desc {
          font-size: 1.1rem;
          color: var(--text-main);
          line-height: 1.6;
          max-width: 840px;
          margin-bottom: 2rem;
        }

        .stage-deliverable-card {
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          border-left: 3px solid var(--telemetry);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          box-shadow: var(--glass-specular);
          margin-bottom: 2rem;
        }

        .deliv-label {
          color: var(--telemetry);
          display: block;
          margin-bottom: 0.4rem;
        }

        .deliv-text {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-pure);
        }

        .stage-footer-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-subtle);
        }

        @media (max-width: 900px) {
          .timeline-stepper-strip {
            grid-template-columns: repeat(4, 1fr);
          }
          .stage-inspect-surface {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
