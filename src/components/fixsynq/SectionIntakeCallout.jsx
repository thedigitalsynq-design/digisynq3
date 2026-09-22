import React from 'react';
import { ArrowUpRight, HelpCircle } from 'lucide-react';
import { audioTelemetry } from '../../utils/audioTelemetry';

export default function SectionIntakeCallout({ onOpenIntake }) {
  const intakeQuestions = [
    { num: '01', title: 'Who are you?', desc: 'Role / segment in the ecosystem (Producer, Studio, Talent, Crew, Financier).' },
    { num: '02', title: 'Ecosystem operating node', desc: 'The exact part of the entertainment ecosystem you operate within.' },
    { num: '03', title: 'Visible problem', desc: 'What is breaking, stalling, or costing more than it should.' },
    { num: '04', title: 'Occurrence frequency', desc: 'Continuous recurrence, intermittent crisis, or emergent friction.' },
    { num: '05', title: 'What does it affect?', desc: 'Cost, time, quality, talent, relationships, or revenue.' },
    { num: '06', title: 'Connected stakeholders', desc: 'Who else across the production or distribution chain is impacted.' },
    { num: '07', title: 'Prior attempts', desc: 'What has already been tried and where conventional fixes failed.' },
    { num: '08', title: 'Desired improvement', desc: 'What concrete metric or outcome improves when the root cause is resolved.' }
  ];

  return (
    <section className="section-block intake-callout-section" id="intake">
      <div className="container">
        {/* Section Header */}
        <div className="section-eyebrow">
          <span>14 — Bring us a problem</span>
        </div>
        <h2 className="section-title">
          Bring us a problem.
        </h2>
        <p className="section-subtitle">
          Tell us what's breaking, stalling, or costing more than it should. We'll map the root causes.
        </p>

        {/* Bento Grid: The 8-Point Diagnostic Intake Protocol */}
        <div className="bento-grid intake-bento-grid">
          {/* Main Action Hub Tile */}
          <div className="bento-card bento-col-12 highlight-signal intake-action-card">
            <span className="bento-corner-bracket bento-corner-tl"></span>
            <span className="bento-corner-bracket bento-corner-tr"></span>
            <span className="bento-corner-bracket bento-corner-bl"></span>
            <span className="bento-corner-bracket bento-corner-br"></span>

            <div className="intake-hub-content">
              <div className="intake-hub-copy">
                <div className="telemetry-tag signal" style={{ display: 'inline-flex', marginBottom: '0.85rem' }}>
                  Diagnostic intake console // Active
                </div>
                <h3 className="intake-hub-headline">
                  No generic contact forms. No sales decks.
                </h3>
                <p className="intake-hub-sub">
                  FIX-SYNQ does not sell generic packages. Every engagement begins with a structured operational inquiry. Submit your operational friction, and our diagnostic intelligence team will trace the root causes across our 47-stakeholder dependency mesh.
                </p>
              </div>

              <div className="intake-hub-cta-area">
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
                <span className="mono-readout text-dim intake-assurance">
                  Confidential protocol // No obligation
                </span>
              </div>
            </div>
          </div>

          {/* 8 Question Blueprint Tiles */}
          {intakeQuestions.map((q) => (
            <div key={q.num} className="bento-card bento-col-3 intake-question-card">
              <span className="bento-corner-bracket bento-corner-tl"></span>
              <span className="bento-corner-bracket bento-corner-tr"></span>
              <span className="bento-corner-bracket bento-corner-bl"></span>
              <span className="bento-corner-bracket bento-corner-br"></span>

              <div className="bento-header" style={{ marginBottom: '0.5rem' }}>
                <span className="mono-readout text-signal" style={{ fontWeight: 700, fontSize: '0.78rem' }}>
                  Question {q.num}
                </span>
                <HelpCircle size={14} className="text-dim" />
              </div>

              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-pure)', marginBottom: '0.4rem' }}>
                {q.title}
              </h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.45, margin: 0 }}>
                {q.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .intake-callout-section {
          position: relative;
        }

        .intake-bento-grid {
          margin-top: 2rem;
        }

        .intake-action-card {
          padding: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .intake-hub-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2.5rem;
          flex-wrap: wrap;
        }

        .intake-hub-copy {
          max-width: 680px;
        }

        .intake-hub-headline {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 2.5vw, 2.1rem);
          font-weight: 800;
          color: var(--text-pure);
          letter-spacing: -0.02em;
          margin-bottom: 0.75rem;
        }

        .intake-hub-sub {
          font-size: 0.96rem;
          color: var(--text-main);
          line-height: 1.6;
        }

        .intake-hub-cta-area {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .intake-assurance {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-muted);
          letter-spacing: 0.04em;
        }

        .intake-question-card {
          padding: 1.25rem 1.35rem;
          min-height: 140px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        @media (max-width: 900px) {
          .intake-hub-content {
            flex-direction: column;
            align-items: flex-start;
          }
          .intake-action-card {
            padding: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
}
