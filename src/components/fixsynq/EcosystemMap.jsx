import React, { useState } from 'react';
import { ArrowRight, Share2, Crosshair } from 'lucide-react';
import { ECOSYSTEM_CLUSTERS, STAKEHOLDERS_DATA } from '../../data/stakeholders';
import { audioTelemetry } from '../../utils/audioTelemetry';

export default function EcosystemMap({ onOpenIntake }) {
  const [activeClusterId, setActiveClusterId] = useState('all');
  const [selectedStakeholderId, setSelectedStakeholderId] = useState('producers');
  const [inspectedProblem, setInspectedProblem] = useState(null);

  const filteredStakeholders = activeClusterId === 'all'
    ? STAKEHOLDERS_DATA
    : STAKEHOLDERS_DATA.filter((s) => s.cluster === activeClusterId);

  const activeStakeholder = STAKEHOLDERS_DATA.find((s) => s.id === selectedStakeholderId) || STAKEHOLDERS_DATA[0];

  const handleSelectStakeholder = (stk) => {
    setSelectedStakeholderId(stk.id);
    setInspectedProblem(null);
    audioTelemetry.playSelect();
  };

  const handleProblemClick = (problemText) => {
    setInspectedProblem(problemText);
    audioTelemetry.playRootFound();
  };

  return (
    <section className="ecosystem-section section-block" id="section-03">
      <div className="container">
        <div className="section-eyebrow">
          <span>03 — The entertainment ecosystem</span>
        </div>
        <h2 className="section-title">
          The entertainment ecosystem
        </h2>
        <p className="section-subtitle">
          An interconnected network of 35+ stakeholder groups across development, production, post, finance, distribution, and audience. Hover to inspect, click to reveal visible problems, and trace root causes across connected counterparties.
        </p>

        {/* Cluster Filter Buttons */}
        <div className="cluster-filter-rack">
          <button
            className={`cluster-pill ${activeClusterId === 'all' ? 'active' : ''}`}
            onClick={() => {
              setActiveClusterId('all');
              audioTelemetry.playHover();
            }}
          >
            <span>All 47 stakeholders</span>
            <span className="cluster-count">{STAKEHOLDERS_DATA.length}</span>
          </button>
          {ECOSYSTEM_CLUSTERS.map((cluster) => {
            const count = STAKEHOLDERS_DATA.filter((s) => s.cluster === cluster.id).length;
            const isActive = activeClusterId === cluster.id;
            return (
              <button
                key={cluster.id}
                className={`cluster-pill ${isActive ? 'active' : ''}`}
                onClick={() => {
                  setActiveClusterId(cluster.id);
                  audioTelemetry.playHover();
                }}
              >
                <span className="cluster-indicator-dot" style={{ backgroundColor: cluster.color }}></span>
                <span>{cluster.label}</span>
                <span className="cluster-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Galaxy Mesh & Diagnostic Inspector */}
        <div className="ecosystem-layout">
          {/* Left: Interactive Node Galaxy */}
          <div className="galaxy-surface diagnostic-panel">
            <div className="galaxy-header">
              <div className="mono-readout">Ecosystem mesh // Select any node to inspect causal impact</div>
              <div className="galaxy-live-count mono-readout">
                Displaying: <strong className="text-signal">{filteredStakeholders.length}</strong> / 47
              </div>
            </div>

            <div className="stakeholder-node-cloud">
              {filteredStakeholders.map((stk) => {
                const isSelected = stk.id === selectedStakeholderId;
                const isConnected = activeStakeholder.connectedTo?.includes(stk.name);
                return (
                  <button
                    key={stk.id}
                    className={`stk-cloud-node ${isSelected ? 'selected' : ''} ${isConnected ? 'connected' : ''}`}
                    onClick={() => handleSelectStakeholder(stk)}
                    onMouseEnter={() => audioTelemetry.playHover()}
                  >
                    <span className="stk-node-dot"></span>
                    <span className="stk-node-name">{stk.name}</span>
                    {isConnected && !isSelected && (
                      <span className="stk-link-badge" title="Directly connected counterparty">
                        Connected
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="galaxy-footer">
              <span className="mono-readout text-dim">
                Tip: Selecting a node reveals its localized symptoms and maps ripple effects to other stakeholders.
              </span>
            </div>
          </div>

          {/* Right: Detailed Node Diagnostic Inspector */}
          <div className="inspector-panel diagnostic-panel">
            <div className="inspector-header">
              <div className="inspector-badge-row">
                <span className="telemetry-tag signal">Stakeholder diagnostic</span>
                <span className="telemetry-tag">
                  {ECOSYSTEM_CLUSTERS.find((c) => c.id === activeStakeholder.cluster)?.label}
                </span>
              </div>
              <h3 className="inspector-name">{activeStakeholder.name}</h3>
              <p className="inspector-role">{activeStakeholder.role}</p>
            </div>

            {/* Surface Problems Experienced */}
            <div className="inspector-section">
              <div className="mono-readout section-label">
                <span>What this stakeholder experiences:</span>
                <span className="label-sub">(Click any problem to inspect root causes)</span>
              </div>
              <div className="problems-stack">
                {activeStakeholder.visibleProblems?.map((prob) => {
                  const isCurrent = inspectedProblem === prob;
                  return (
                    <button
                      key={prob}
                      className={`problem-trigger-pill ${isCurrent ? 'active' : ''}`}
                      onClick={() => handleProblemClick(prob)}
                    >
                      <span className="prob-bullet"></span>
                      <span className="prob-text">{prob}</span>
                      <ArrowRight size={14} className="prob-arrow" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Root Causes Exposed */}
            <div className="inspector-section root-exposure-box">
              <div className="mono-readout section-label text-signal">
                <Crosshair size={14} />
                <span>Underlying systemic root causes:</span>
              </div>
              <ul className="root-cause-list">
                {activeStakeholder.rootCauses?.map((cause, idx) => (
                  <li key={idx} className="root-cause-item">
                    <span className="root-num">0{idx + 1}</span>
                    <span className="root-text">{cause}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interconnected Counterparties */}
            <div className="inspector-section">
              <div className="mono-readout section-label">
                <Share2 size={14} />
                <span>Directly connected counterparties:</span>
              </div>
              <div className="connected-stk-pills">
                {activeStakeholder.connectedTo?.map((rel) => (
                  <span key={rel} className="conn-pill">
                    {rel}
                  </span>
                ))}
              </div>
            </div>

            {/* Targeted Intervention Suite */}
            <div className="inspector-section">
              <div className="mono-readout section-label">
                <span>Relevant FIX-SYNQ intervention tools:</span>
              </div>
              <div className="tools-mini-rack">
                {activeStakeholder.interventions?.map((tool) => (
                  <span key={tool} className="tool-tag-pill">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Problem Intake CTA */}
            <div className="inspector-cta-box">
              <button
                className="btn-signal w-full"
                onClick={() => {
                  audioTelemetry.playSelect();
                  onOpenIntake(activeStakeholder.name);
                }}
              >
                <span>Bring a problem as {activeStakeholder.name}</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ecosystem-section {
          position: relative;
        }

        .cluster-filter-rack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 2.25rem;
        }

        .cluster-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.74rem;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .cluster-pill:hover {
          border-color: var(--glass-border-hover);
          color: var(--text-pure);
        }

        .cluster-pill.active {
          background: var(--glass-bg-signal);
          border-color: var(--glass-border-signal);
          color: var(--text-pure);
          box-shadow: 0 0 14px var(--signal-glow);
        }

        .cluster-indicator-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .cluster-count {
          font-size: 0.76rem;
          font-weight: 600;
          opacity: 0.95;
          background: rgba(255, 255, 255, 0.08);
          padding: 0.1rem 0.4rem;
          border-radius: var(--radius-pill);
        }

        .ecosystem-layout {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 1.75rem;
          align-items: start;
        }

        .galaxy-surface {
          min-height: 560px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .galaxy-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .stakeholder-node-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          align-content: flex-start;
          flex: 1;
        }

        .stk-cloud-node {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 0.95rem;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-specular);
          border-radius: var(--radius-pill);
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.74rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          position: relative;
        }

        .stk-cloud-node:hover {
          border-color: var(--glass-border-hover);
          color: var(--text-pure);
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-1px);
        }

        .stk-cloud-node.selected {
          border-color: var(--glass-border-signal);
          background: var(--glass-bg-signal);
          color: var(--signal-bright);
          box-shadow: 0 0 16px var(--signal-glow), var(--glass-specular);
        }

        .stk-cloud-node.connected {
          border-color: var(--border-telemetry);
          background: var(--glass-bg-telemetry);
          color: var(--telemetry);
        }

        .stk-node-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: currentColor;
        }

        .stk-node-name {
          font-weight: 500;
        }

        .stk-link-badge {
          font-size: 0.74rem;
          font-weight: 600;
          padding: 0.05rem 0.4rem;
          background: rgba(0, 229, 255, 0.15);
          border-radius: var(--radius-pill);
          margin-left: 0.25rem;
        }

        .galaxy-footer {
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--glass-border);
        }

        /* Inspector Panel */
        .inspector-panel {
          border: 1px solid var(--glass-border);
          background: var(--glass-bg);
          backdrop-filter: blur(var(--glass-blur-heavy)) saturate(200%);
          -webkit-backdrop-filter: blur(var(--glass-blur-heavy)) saturate(200%);
          box-shadow: var(--glass-specular), var(--glass-shadow);
          border-radius: var(--radius-card);
        }

        .inspector-header {
          margin-bottom: 1.75rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .inspector-badge-row {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .inspector-name {
          font-size: 1.85rem;
          font-weight: 800;
          color: var(--text-pure);
          margin-bottom: 0.4rem;
        }

        .inspector-role {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .inspector-section {
          margin-bottom: 1.5rem;
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 0.65rem;
        }

        .label-sub {
          font-size: 0.76rem;
          opacity: 0.95;
          font-weight: 500;
          text-transform: none;
        }

        .problems-stack {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .problem-trigger-pill {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.65rem 0.9rem;
          background: var(--glass-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-specular);
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-family: var(--font-body);
          font-size: 0.88rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
        }

        .problem-trigger-pill:hover {
          border-color: var(--glass-border-hover);
          background: var(--glass-bg-hover);
          box-shadow: var(--glass-specular-hover);
        }

        .problem-trigger-pill.active {
          border-color: var(--glass-border-signal);
          background: var(--glass-bg-signal);
          color: var(--signal-bright);
          box-shadow: 0 0 16px var(--signal-glow), var(--glass-specular);
        }

        .prob-bullet {
          width: 5px;
          height: 5px;
          background: var(--signal);
          border-radius: 50%;
          margin-right: 0.6rem;
        }

        .prob-text {
          flex: 1;
        }

        .prob-arrow {
          color: var(--text-dim);
          transition: transform var(--transition-fast);
        }

        .problem-trigger-pill:hover .prob-arrow {
          transform: translateX(3px);
          color: var(--signal);
        }

        .root-exposure-box {
          background: var(--glass-bg-signal);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border-signal);
          box-shadow: 0 0 25px rgba(62, 180, 137, 0.2), var(--glass-specular);
          padding: 1.25rem;
          border-radius: var(--radius-md);
        }

        .root-cause-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .root-cause-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.9rem;
          color: var(--text-main);
          line-height: 1.45;
        }

        .root-num {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--signal);
          margin-top: 0.15rem;
        }

        .connected-stk-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .conn-pill {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 600;
          padding: 0.25rem 0.65rem;
          background: rgba(0, 229, 255, 0.06);
          border: 1px solid rgba(0, 229, 255, 0.25);
          color: var(--telemetry);
          border-radius: var(--radius-sm);
        }

        .tools-mini-rack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .tool-tag-pill {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 600;
          padding: 0.25rem 0.65rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-medium);
          color: var(--text-pure);
          border-radius: var(--radius-sm);
        }

        .inspector-cta-box {
          margin-top: 1.75rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-subtle);
        }

        @media (max-width: 1024px) {
          .ecosystem-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
