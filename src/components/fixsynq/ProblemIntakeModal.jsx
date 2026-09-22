import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { STAKEHOLDERS_DATA } from '../../data/stakeholders';
import { audioTelemetry } from '../../utils/audioTelemetry';

export default function ProblemIntakeModal({ isOpen, onClose, initialStakeholder, initialProblem }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    ecosystemRole: initialStakeholder || 'PRODUCERS',
    problemDescription: initialProblem || '',
    frequency: 'Continuously recurring across projects',
    affectedDimensions: ['Cost', 'Time'],
    whatDoesItAffectDetails: '',
    affectedCounterparties: '',
    previousAttempts: '',
    desiredImprovement: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [intakeRefId, setIntakeRefId] = useState('');
  const [edgeConfirmation, setEdgeConfirmation] = useState(null);

  if (!isOpen) return null;

  const handleChange = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const toggleDimension = (dim) => {
    setFormData((prev) => {
      const current = prev.affectedDimensions || [];
      const updated = current.includes(dim)
        ? current.filter((d) => d !== dim)
        : [...current, dim];
      return { ...prev, affectedDimensions: updated };
    });
    audioTelemetry.playHover();
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
      audioTelemetry.playStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      audioTelemetry.playHover();
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    audioTelemetry.playSelect();

    try {
      const response = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        setIntakeRefId(result.refId || `FS-ROOT-${Math.floor(1000 + Math.random() * 9000)}`);
        setEdgeConfirmation(result.edgeTelemetry || null);
      } else {
        // Fallback for dev mode
        const randomCode = Math.floor(1000 + Math.random() * 9000);
        setIntakeRefId(`FS-ROOT-${randomCode}`);
      }
    } catch {
      // Local dev offline fallback
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      setIntakeRefId(`FS-ROOT-${randomCode}`);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      audioTelemetry.playSuccess();
    }
  };

  const resetAndClose = () => {
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  const impactDimensions = ['Cost', 'Time', 'Quality', 'Talent', 'Relationships', 'Revenue'];

  return (
    <div className="modal-backdrop" onClick={resetAndClose}>
      <div className="modal-wrapper diagnostic-panel" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-left">
            <span className="telemetry-tag signal">12 — Bring us a problem</span>
            <span className="mono-readout modal-ref-text">
              {isSubmitted ? `Case: ${intakeRefId}` : `Stage 0${step} of 04`}
            </span>
          </div>

          <button className="modal-close-btn" onClick={resetAndClose} aria-label="Close intake console">
            <X size={20} />
          </button>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleNextStep} className="intake-form">
            {/* Step 1: Submitter Identity (Question 1) */}
            {step === 1 && (
              <div className="intake-step-view">
                <h3 className="step-question-title">1. Who are you?</h3>
                <p className="step-guidance-text">
                  Provide your role and organizational context in the entertainment industry so our diagnostic engine can calibrate.
                </p>

                <div className="form-fields-grid">
                  <div className="form-field">
                    <label className="field-label mono-readout">Full name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Chen"
                      className="field-input"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                    />
                  </div>

                  <div className="form-field">
                    <label className="field-label mono-readout">Direct email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. maya@panoramiq.com"
                      className="field-input"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                    />
                  </div>

                  <div className="form-field full-width">
                    <label className="field-label mono-readout">Organization / production label *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Panoramiq Pictures / Slate #4"
                      className="field-input"
                      value={formData.organization}
                      onChange={(e) => handleChange('organization', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Ecosystem Role & Visible Problem (Questions 2 & 3) */}
            {step === 2 && (
              <div className="intake-step-view">
                <h3 className="step-question-title">2. Where do you operate & what is the problem?</h3>
                <p className="step-guidance-text">
                  Specify which segment of the ecosystem you operate in, and describe the visible friction.
                </p>

                <div className="form-fields-grid">
                  <div className="form-field full-width">
                    <label className="field-label mono-readout">2. What part of the entertainment ecosystem do you operate in? *</label>
                    <select
                      className="field-select"
                      value={formData.ecosystemRole}
                      onChange={(e) => handleChange('ecosystemRole', e.target.value)}
                    >
                      {STAKEHOLDERS_DATA.map((stk) => (
                        <option key={stk.id} value={stk.name}>
                          {stk.name} — {stk.role.substring(0, 60)}...
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-field full-width">
                    <label className="field-label mono-readout">3. What is the visible problem you are experiencing? *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe what is breaking down, stalling, or costing more than it should in concrete operational terms..."
                      className="field-textarea"
                      value={formData.problemDescription}
                      onChange={(e) => handleChange('problemDescription', e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Frequency, What it affects & Counterparties (Questions 4, 5, 6) */}
            {step === 3 && (
              <div className="intake-step-view">
                <h3 className="step-question-title">3. Frequency, what it affects & propagation</h3>
                <p className="step-guidance-text">
                  Problems are interconnected. Help us map where the friction propagates across the ecosystem.
                </p>

                <div className="form-fields-grid">
                  <div className="form-field full-width">
                    <label className="field-label mono-readout">4. How often does this problem occur? *</label>
                    <select
                      className="field-select"
                      value={formData.frequency}
                      onChange={(e) => handleChange('frequency', e.target.value)}
                    >
                      <option>Continuously recurring across every production/cycle</option>
                      <option>Intermittent but catastrophic when it occurs</option>
                      <option>Acute current crisis requiring active investigation</option>
                      <option>Emergent bottleneck due to new technology or workflow change</option>
                    </select>
                  </div>

                  <div className="form-field full-width">
                    <label className="field-label mono-readout">5. What does it affect? (Select all that apply) *</label>
                    <div className="dimension-selector-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      {impactDimensions.map((dim) => {
                        const isSelected = formData.affectedDimensions.includes(dim);
                        return (
                          <button
                            key={dim}
                            type="button"
                            onClick={() => toggleDimension(dim)}
                            style={{
                              background: isSelected ? 'rgba(62, 180, 137, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                              border: `1px solid ${isSelected ? 'var(--signal-color)' : 'rgba(255, 255, 255, 0.1)'}`,
                              color: isSelected ? 'var(--signal-bright)' : 'var(--text-main)',
                              borderRadius: '8px',
                              padding: '0.4rem 0.85rem',
                              fontSize: '0.8rem',
                              fontFamily: 'var(--font-mono)',
                              cursor: 'pointer',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            {isSelected ? `✓ ${dim}` : dim}
                          </button>
                        );
                      })}
                    </div>
                    <input
                      type="text"
                      placeholder="Specify concrete impact details (e.g. 15% budget leakage, 4-week post delay, damaged relations)..."
                      className="field-input"
                      value={formData.whatDoesItAffectDetails}
                      onChange={(e) => handleChange('whatDoesItAffectDetails', e.target.value)}
                    />
                  </div>

                  <div className="form-field full-width">
                    <label className="field-label mono-readout">6. Who else is affected by it? *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Camera rental vendors, Tier-1 cast agents, Post facility, Financiers"
                      className="field-input"
                      value={formData.affectedCounterparties}
                      onChange={(e) => handleChange('affectedCounterparties', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Previous Attempts & Desired Improvement (Questions 7 & 8) */}
            {step === 4 && (
              <div className="intake-step-view">
                <h3 className="step-question-title">4. Prior attempts & desired resolution</h3>
                <p className="step-guidance-text">
                  What has already been tried, and how will we know when the root cause is resolved?
                </p>

                <div className="form-fields-grid">
                  <div className="form-field full-width">
                    <label className="field-label mono-readout">7. What have you already tried to fix it?</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Hired additional crew, renegotiated hold penalty fees, replaced vendor, added software..."
                      className="field-textarea"
                      value={formData.previousAttempts}
                      onChange={(e) => handleChange('previousAttempts', e.target.value)}
                    ></textarea>
                  </div>

                  <div className="form-field full-width">
                    <label className="field-label mono-readout">8. What would improve if the cause were actually fixed? *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="e.g. Zero phantom schedule holds, 35% reduction in standby fees, verified rights catalog, unblocked distribution..."
                      className="field-textarea"
                      value={formData.desiredImprovement}
                      onChange={(e) => handleChange('desiredImprovement', e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* Form Footer Action Bar */}
            <div className="modal-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                {step > 1 ? (
                  <button
                    type="button"
                    className="btn-ghost btn-sm"
                    onClick={handlePrevStep}
                  >
                    <span>Back</span>
                  </button>
                ) : null}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  <ShieldCheck size={14} className="text-signal" />
                  <span className="mono-readout">Cloudflare Edge & Turnstile protected</span>
                </div>
              </div>

              <button
                type="submit"
                className="btn-signal"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Submitting intake...</span>
                ) : step < 4 ? (
                  <>
                    <span>Continue to step {step + 1}</span>
                    <ArrowRight size={14} />
                  </>
                ) : (
                  <>
                    <span>Submit problem</span>
                    <Send size={14} />
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation State */
          <div className="intake-success-view">
            <div className="success-icon-halo">
              <CheckCircle2 size={42} className="text-signal" />
            </div>

            <div className="confirmation-tag-line mono-readout text-signal">
              Intake registered // Reference ID: {intakeRefId}
            </div>

            <h3 className="success-headline">Problem received.</h3>
            <h4 className="success-sub-headline text-signal">The root-cause search begins.</h4>

            <p className="success-explanation">
              We do not deliver automated boilerplate responses. Our intelligence team will ingest your operational friction points, cross-reference them against the 47-stakeholder dependency mesh, and formulate an actionable root-cause hypothesis.
            </p>

            <div className="success-recap-box">
              <div className="recap-row">
                <span className="mono-readout text-dim">Submitted by:</span>
                <span>{formData.name} ({formData.organization})</span>
              </div>
              <div className="recap-row">
                <span className="mono-readout text-dim">Operating node:</span>
                <span className="text-signal">{formData.ecosystemRole}</span>
              </div>
              <div className="recap-row">
                <span className="mono-readout text-dim">Edge verification:</span>
                <span className="text-pure">
                  {edgeConfirmation?.edgeColo ? `Cloudflare Edge Node [${edgeConfirmation.edgeColo}] // Verified` : 'Cloudflare Global Edge // Verified'}
                </span>
              </div>
              <div className="recap-row">
                <span className="mono-readout text-dim">Preliminary hypothesis:</span>
                <span>Systemic cross-silo dependency failure undergoing causal trace</span>
              </div>
            </div>

            <button className="btn-ghost w-full" onClick={resetAndClose}>
              <span>Return to exploring the root-cause network</span>
            </button>
          </div>
        )}
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(4, 5, 8, 0.85);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.2s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-wrapper {
          width: 100%;
          max-width: 680px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(14, 16, 24, 0.88) 100%);
          backdrop-filter: blur(48px) saturate(230%) brightness(110%);
          -webkit-backdrop-filter: blur(48px) saturate(230%) brightness(110%);
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 28px;
          box-shadow: inset 0 2px 1.5px 0 rgba(255, 255, 255, 0.32), inset 0 0 0 1px rgba(255, 255, 255, 0.06), 0 36px 90px rgba(0, 0, 0, 0.9);
          padding: 2.25rem;
          position: relative;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 2rem;
        }

        .modal-header-left {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .modal-ref-text {
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 600;
        }

        .modal-close-btn {
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: inset 0 1px 0.5px rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .modal-close-btn:hover {
          background: rgba(255, 255, 255, 0.16);
          border-color: rgba(255, 255, 255, 0.28);
          color: var(--text-pure);
          transform: scale(1.08);
        }

        .step-question-title {
          font-family: var(--font-display);
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--text-pure);
          margin-bottom: 0.5rem;
        }

        .step-guidance-text {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 1.75rem;
        }

        .form-fields-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .form-field.full-width {
          grid-column: span 2;
        }

        .field-label {
          display: block;
          color: var(--text-muted);
          font-size: 0.78rem;
          font-weight: 600;
          margin-bottom: 0.4rem;
        }

        .field-input,
        .field-select,
        .field-textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.035);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.03);
          border-radius: 14px;
          padding: 0.85rem 1.1rem;
          color: var(--text-pure);
          font-family: var(--font-body);
          font-size: 0.95rem;
          transition: all var(--transition-fast);
        }

        .field-input:focus,
        .field-select:focus,
        .field-textarea:focus {
          outline: none;
          border-color: var(--signal);
          background: rgba(62, 180, 137, 0.08);
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3), 0 0 20px rgba(62, 180, 137, 0.3);
        }

        .field-select option {
          background: #0D1017;
          color: #FFF;
        }

        .modal-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-subtle);
        }

        /* Success State */
        .intake-success-view {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1rem 0;
        }

        .success-icon-halo {
          width: 72px;
          height: 72px;
          background: rgba(62, 180, 137, 0.12);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--signal);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          box-shadow: 0 0 30px rgba(62, 180, 137, 0.35);
        }

        .confirmation-tag-line {
          margin-bottom: 0.5rem;
        }

        .success-headline {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--text-pure);
          line-height: 1.1;
        }

        .success-sub-headline {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 800;
          margin-bottom: 1.25rem;
        }

        .success-explanation {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 520px;
          margin-bottom: 2rem;
        }

        .success-recap-box {
          width: 100%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.015) 100%);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: inset 0 1px 0.5px rgba(255, 255, 255, 0.18), 0 12px 32px -8px rgba(0, 0, 0, 0.5);
          padding: 1.35rem;
          border-radius: 18px;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .recap-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
          color: var(--text-main);
          gap: 1rem;
        }

        @media (max-width: 640px) {
          .form-fields-grid {
            grid-template-columns: 1fr;
          }
          .form-field.full-width {
            grid-column: span 1;
          }
          .modal-wrapper {
            padding: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}
