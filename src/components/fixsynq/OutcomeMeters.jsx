import React, { useState } from 'react';
import { Activity, Clock, DollarSign, BarChart3, Shield, Award, Users, Gauge, Check, Sliders, TrendingDown, TrendingUp } from 'lucide-react';
import { OUTCOME_DIMENSIONS } from '../../data/outcomes';
import { audioTelemetry } from '../../utils/audioTelemetry';

export default function OutcomeMeters() {
  const [selectedDimensionId, setSelectedDimensionId] = useState('time');
  const [simulatedBaseline, setSimulatedBaseline] = useState(100);
  const [simulatedPost, setSimulatedPost] = useState(65);

  const activeDimension = OUTCOME_DIMENSIONS.find((d) => d.id === selectedDimensionId) || OUTCOME_DIMENSIONS[0];

  const getDimensionIcon = (id) => {
    switch (id) {
      case 'time': return Clock;
      case 'cost': return DollarSign;
      case 'revenue': return BarChart3;
      case 'utilisation': return Gauge;
      case 'efficiency': return Activity;
      case 'risk': return Shield;
      case 'quality': return Award;
      case 'audience': return Users;
      default: return Activity;
    }
  };

  const handleSelectDimension = (id) => {
    setSelectedDimensionId(id);
    // Automatically calibrate simulator slider defaults based on dimension type
    if (['time', 'cost', 'risk'].includes(id)) {
      setSimulatedBaseline(100);
      setSimulatedPost(65);
    } else {
      setSimulatedBaseline(60);
      setSimulatedPost(95);
    }
    audioTelemetry.playSelect();
  };

  const calculatedDelta = simulatedBaseline > 0
    ? Math.round(((simulatedPost - simulatedBaseline) / simulatedBaseline) * 100)
    : 0;

  const isImprovement = ['time', 'cost', 'risk'].includes(activeDimension.id)
    ? calculatedDelta < 0
    : calculatedDelta > 0;

  return (
    <section className="outcomes-section section-block" id="outcomes">
      <div className="container">
        <div className="section-eyebrow">
          <span>09 — Outcomes</span>
        </div>
        <h2 className="section-title">
          A fix only matters if something changes.
        </h2>
        <div className="outcomes-highlight-banner">
          <span className="text-signal">Measurable change. Not vague recommendations.</span>
        </div>
        <p className="section-subtitle">
          FIX-SYNQ measures the resulting change rather than stopping at recommendations. Every intervention is defined by its verification formula across 8 empirical dimensions: Time, Cost, Revenue, Utilisation, Efficiency, Risk, Quality, and Audience.
        </p>

        {/* ==========================================================================
            BENTO GRID ARCHITECTURE (Measurable Outcomes)
            ========================================================================== */}
        <div className="bento-grid">

          {/* BENTO TILE 1 (HERO 7-COL): Empirical Delta Calculator & Inspection Bench */}
          <div className="bento-card bento-col-7 highlight-signal">
            <span className="bento-corner-bracket bento-corner-tl"></span>
            <span className="bento-corner-bracket bento-corner-tr"></span>
            <span className="bento-corner-bracket bento-corner-bl"></span>
            <span className="bento-corner-bracket bento-corner-br"></span>

            <div className="bento-header">
              <div>
                <span className="telemetry-tag signal">{activeDimension.code} // Empirical calibration</span>
                <h3 className="bento-title" style={{ marginTop: '0.45rem' }}>
                  {activeDimension.name}: {activeDimension.metricLabel}
                </h3>
              </div>
              <div className="dimension-target-pill">
                <span className="mono-readout text-signal">{activeDimension.targetImprovement}</span>
              </div>
            </div>

            <p className="bento-subtitle" style={{ marginBottom: '1.25rem' }}>
              {activeDimension.howFixSynqMeasures}
            </p>

            {/* Formula Readout Panel */}
            <div className="bento-formula-panel">
              <span className="mono-readout formula-eyebrow">Mathematical delta specification:</span>
              <div className="formula-equation mono-readout">{activeDimension.formula}</div>
            </div>

            {/* Live Interactive Delta Simulator */}
            <div className="interactive-delta-simulator">
              <div className="simulator-header">
                <div className="sim-title-group">
                  <Sliders size={14} className="text-signal" />
                  <span className="mono-readout sim-title">Real-time delta simulator</span>
                </div>
                <div className={`delta-result-chip ${isImprovement ? 'improved' : ''}`}>
                  {calculatedDelta > 0 ? (
                    <TrendingUp size={14} className="text-signal" />
                  ) : (
                    <TrendingDown size={14} className="text-signal" />
                  )}
                  <span className="mono-readout">
                    {calculatedDelta > 0 ? `+${calculatedDelta}%` : `${calculatedDelta}%`} verified delta
                  </span>
                </div>
              </div>

              <div className="slider-controls-grid">
                <div className="slider-group">
                  <div className="slider-label-row">
                    <span className="mono-readout slider-label">Pre-intervention baseline:</span>
                    <span className="mono-readout slider-val">{simulatedBaseline} {activeDimension.units}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="150"
                    value={simulatedBaseline}
                    onChange={(e) => setSimulatedBaseline(Number(e.target.value))}
                    className="telemetry-slider"
                  />
                </div>

                <div className="slider-group">
                  <div className="slider-label-row">
                    <span className="mono-readout slider-label">Post-intervention audit:</span>
                    <span className="mono-readout slider-val text-signal">{simulatedPost} {activeDimension.units}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="150"
                    value={simulatedPost}
                    onChange={(e) => setSimulatedPost(Number(e.target.value))}
                    className="telemetry-slider"
                  />
                </div>
              </div>
            </div>

            {/* Monitored Verification Benchmarks */}
            <div className="benchmarks-container">
              <span className="mono-readout bench-eyebrow">Monitored verification benchmarks:</span>
              <div className="benchmarks-pills-row">
                {activeDimension.benchmarkIndicators.map((bench, idx) => (
                  <div key={idx} className="benchmark-pill">
                    <Check size={12} className="text-signal" />
                    <span>{bench}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BENTO TILE 2 (5-COL): 8-Dimension Telemetry Deck */}
          <div className="bento-card bento-col-5">
            <span className="bento-corner-bracket bento-corner-tl"></span>
            <span className="bento-corner-bracket bento-corner-tr"></span>
            <span className="bento-corner-bracket bento-corner-bl"></span>
            <span className="bento-corner-bracket bento-corner-br"></span>

            <div className="bento-header">
              <div>
                <span className="telemetry-tag">8 outcome domains</span>
                <h4 className="bento-title" style={{ marginTop: '0.45rem', fontSize: '1.1rem' }}>
                  Telemetry selection deck
                </h4>
              </div>
              <Activity size={15} className="text-signal" />
            </div>

            <div className="dimensions-deck-grid">
              {OUTCOME_DIMENSIONS.map((dim) => {
                const isSelected = dim.id === selectedDimensionId;
                const IconComp = getDimensionIcon(dim.id);
                return (
                  <button
                    key={dim.id}
                    type="button"
                    className={`deck-card-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => handleSelectDimension(dim.id)}
                    onMouseEnter={() => audioTelemetry.playHover()}
                  >
                    <div className="deck-card-header">
                      <IconComp size={16} className={isSelected ? 'text-signal' : 'text-muted'} />
                      <span className="mono-readout deck-code">{dim.code}</span>
                    </div>
                    <span className="deck-name">{dim.name}</span>
                    <span className="deck-target">{dim.targetImprovement}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* BENTO TILE 3 (4-COL): Zero Fabricated Claims Standard */}
          <div className="bento-card bento-col-4">
            <span className="bento-corner-bracket bento-corner-tl"></span>
            <span className="bento-corner-bracket bento-corner-tr"></span>
            <span className="bento-corner-bracket bento-corner-bl"></span>
            <span className="bento-corner-bracket bento-corner-br"></span>

            <div className="bento-header">
              <span className="telemetry-tag">Zero fabrication</span>
              <Shield size={15} className="text-dim" />
            </div>
            <div className="bento-metric-value text-pure">100%</div>
            <div className="bento-metric-label">Empirically audited metrics</div>
            <p className="bento-subtitle" style={{ marginTop: '0.75rem', fontSize: '0.82rem' }}>
              No cosmetic declarations or vague "brand uplift." Every delta is calculated between verified pre-intervention logs and post-intervention deliverables.
            </p>
          </div>

          {/* BENTO TILE 4 (4-COL): Cross-Dimensional Ripple Meter */}
          <div className="bento-card bento-col-4">
            <span className="bento-corner-bracket bento-corner-tl"></span>
            <span className="bento-corner-bracket bento-corner-tr"></span>
            <span className="bento-corner-bracket bento-corner-bl"></span>
            <span className="bento-corner-bracket bento-corner-br"></span>

            <div className="bento-header">
              <span className="telemetry-tag">Systemic multiplier</span>
              <BarChart3 size={15} className="text-signal" />
            </div>
            <div className="bento-metric-value text-signal">3.2x</div>
            <div className="bento-metric-label">Cross-silo secondary delta</div>
            <p className="bento-subtitle" style={{ marginTop: '0.75rem', fontSize: '0.82rem' }}>
              Resolving one upstream root bottleneck (e.g. Rights or Scheduling) triggers compounding improvements across stage utilization, talent holds, and cost-to-wrap.
            </p>
          </div>

          {/* BENTO TILE 5 (4-COL): Active Telemetry Sensors HUD */}
          <div className="bento-card bento-col-4">
            <span className="bento-corner-bracket bento-corner-tl"></span>
            <span className="bento-corner-bracket bento-corner-tr"></span>
            <span className="bento-corner-bracket bento-corner-bl"></span>
            <span className="bento-corner-bracket bento-corner-br"></span>

            <div className="bento-header">
              <span className="telemetry-tag">Objective sensors</span>
              <div className="live-status-dot">
                <span className="pulse-signal status-dot-inner"></span>
              </div>
            </div>
            <div className="bento-metric-value text-pure">Live</div>
            <div className="bento-metric-label">Field measurement telemetry</div>
            <p className="bento-subtitle" style={{ marginTop: '0.75rem', fontSize: '0.82rem' }}>
              Active sensors monitoring call-sheet variances, soundstage turnaround intervals, and settlement velocity across 47 industry nodes.
            </p>
          </div>

        </div>
      </div>

      <style>{`
        .outcomes-section {
          position: relative;
        }

        .outcomes-highlight-banner {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 3.2vw, 2.5rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-top: -0.5rem;
          margin-bottom: 1.25rem;
        }

        .dimension-target-pill {
          background: var(--signal-subtle);
          border: 1px solid rgba(62, 180, 137, 0.35);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-pill);
        }

        /* Formula Panel */
        .bento-formula-panel {
          background: var(--glass-bg-signal);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border-signal);
          border-left: 3px solid var(--signal);
          border-radius: var(--radius-md);
          box-shadow: var(--glass-specular);
          padding: 0.9rem 1.25rem;
          margin-bottom: 1.25rem;
        }

        .formula-eyebrow {
          color: var(--text-muted);
          font-size: 0.78rem;
          font-weight: 600;
          display: block;
          margin-bottom: 0.35rem;
        }

        .formula-equation {
          color: var(--signal-bright);
          font-size: 0.85rem;
          letter-spacing: 0.04em;
        }

        /* Interactive Simulator */
        .interactive-delta-simulator {
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-md);
          box-shadow: var(--glass-specular);
          padding: 1.25rem;
          margin-bottom: 1.25rem;
        }

        .simulator-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .sim-title-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .sim-title {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .delta-result-chip {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-pill);
          font-size: 0.75rem;
          color: var(--text-pure);
        }

        .delta-result-chip.improved {
          border-color: var(--glass-border-signal);
          background: var(--glass-bg-signal);
          color: var(--signal-bright);
          box-shadow: 0 0 12px var(--signal-glow);
        }

        .slider-controls-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .slider-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .slider-label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .slider-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .slider-val {
          font-size: 0.85rem;
          font-weight: 700;
        }

        .telemetry-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 5px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-pill);
          outline: none;
        }

        .telemetry-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: var(--signal);
          cursor: pointer;
          box-shadow: 0 0 10px var(--signal);
          transition: transform 0.1s ease;
        }

        .telemetry-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }

        /* Benchmarks */
        .benchmarks-container {
          border-top: 1px solid var(--glass-border);
          padding-top: 0.9rem;
        }

        .bench-eyebrow {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-muted);
          display: block;
          margin-bottom: 0.6rem;
        }

        .benchmarks-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .benchmark-pill {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-pill);
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        /* Telemetry Deck */
        .dimensions-deck-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.65rem;
          margin-top: 0.5rem;
        }

        .deck-card-btn {
          background: var(--glass-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-specular);
          border-radius: var(--radius-card);
          padding: 0.9rem 0.85rem;
          text-align: left;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          transition: all var(--transition-fast);
        }

        .deck-card-btn:hover {
          border-color: var(--glass-border-hover);
          background: var(--glass-bg-hover);
          box-shadow: var(--glass-specular-hover);
          transform: translateY(-2px);
        }

        .deck-card-btn.active {
          border-color: var(--glass-border-signal);
          background: var(--glass-bg-signal);
          box-shadow: 0 0 20px rgba(62, 180, 137, 0.22), var(--glass-specular);
        }

        .deck-card-header svg {
          color: var(--text-muted);
          transition: color var(--transition-fast);
        }

        .deck-card-btn.active .deck-card-header svg {
          color: var(--signal-bright);
        }

        .deck-card-btn:hover .deck-card-header svg {
          color: #FFFFFF;
        }

        .deck-code {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .deck-card-btn.active .deck-code {
          color: var(--signal-bright);
        }

        .deck-name {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 800;
          color: #FFFFFF;
        }

        .deck-target {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-muted);
          line-height: 1.45;
          margin-top: 0.15rem;
          transition: color var(--transition-fast);
        }

        .deck-card-btn.active .deck-target {
          color: var(--signal-bright);
        }

        .deck-card-btn:hover:not(.active) .deck-target {
          color: #FFFFFF;
        }

        .live-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--signal);
          position: relative;
        }

        .status-dot-inner {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: var(--signal);
        }

        @media (max-width: 768px) {
          .slider-controls-grid {
            grid-template-columns: 1fr;
          }
          .dimensions-deck-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
