import React, { useState } from 'react';
import { Layers, Network, Zap, ShieldCheck, Scale, Cpu, Share2, Compass, Award, TrendingUp } from 'lucide-react';
import { audioTelemetry } from '../../utils/audioTelemetry';
import { ASSET_LIGHT_TENETS, ASSET_LIGHT_ONE_LINER, ASSET_LIGHT_PHILOSOPHY } from '../../data/assetLightPhilosophy';

export default function AssetLightNetwork() {
  const [activeScenario, setActiveScenario] = useState('vp');

  const scenarios = [
    {
      id: 'vp',
      code: 'Scenario-A',
      title: 'Virtual production stall',
      description: 'LED volume synchronization error during principal photography.',
      activeNodes: ['Experts', 'Technicians', 'Technology', 'Training']
    },
    {
      id: 'rights',
      code: 'Scenario-B',
      title: 'Global rights dispute',
      description: 'Ancillary territory dispute holding up international streaming sale.',
      activeNodes: ['Legal', 'Distribution', 'Data', 'Finance']
    },
    {
      id: 'schedule',
      code: 'Scenario-C',
      title: 'Schedule collision',
      description: 'Tier-1 talent delay causing cascading vendor cancellation fees.',
      activeNodes: ['Equipment', 'Vendors', 'Studios', 'Marketing']
    }
  ];

  const orbitingNodes = [
    { name: 'Experts', angle: 0 },
    { name: 'Technicians', angle: 30 },
    { name: 'Vendors', angle: 60 },
    { name: 'Studios', angle: 90 },
    { name: 'Equipment', angle: 120 },
    { name: 'Technology', angle: 150 },
    { name: 'Training', angle: 180 },
    { name: 'Legal', angle: 210 },
    { name: 'Finance', angle: 240 },
    { name: 'Marketing', angle: 270 },
    { name: 'Distribution', angle: 300 },
    { name: 'Data', angle: 330 }
  ];

  const pillarIcons = {
    '01': Layers,
    '02': Network,
    '03': Compass,
    '04': Zap,
    '05': Share2,
    '06': ShieldCheck,
    '07': Cpu,
    '08': Scale,
    '09': Award,
    '10': TrendingUp
  };

  const currentScenario = scenarios.find((s) => s.id === activeScenario) || scenarios[0];

  const handleSelectScenario = (id) => {
    setActiveScenario(id);
    audioTelemetry.playSelect();
  };

  return (
    <section className="asset-light-section section-block" id="section-05">
      <div className="container">
        {/* Section Eyebrow & Title */}
        <div className="section-eyebrow">
          <span>10 — The asset-light network</span>
        </div>
        <h2 className="section-title">
          We don't need to own everything required to fix something.
        </h2>
        <p className="section-subtitle">
          FIX-SYNQ is not a bloated agency and not a passive marketplace. We operate an asset-light coordination kernel—activating only the specialized network nodes required to execute a root-cause intervention.
        </p>

        {/* ==========================================================================
            NOTHING / CMF-STYLE PHILOSOPHICAL MANIFESTO BANNER
            ========================================================================== */}
        <div className="cmf-manifesto-banner diagnostic-panel">
          <div className="cmf-tenets-grid">
            {ASSET_LIGHT_TENETS.map((tenet, idx) => (
              <div key={idx} className="cmf-tenet-item">
                <span className="cmf-tenet-left">{tenet.left}</span>
                <span className="cmf-tenet-divider">over</span>
                <span className="cmf-tenet-right">{tenet.right}</span>
              </div>
            ))}
          </div>

          <div className="cmf-anchor-quote">
            <span className="cmf-quote-mark">“</span>
            <p className="cmf-quote-text">{ASSET_LIGHT_ONE_LINER}</p>
            <span className="telemetry-tag signal cmf-quote-tag">Core operating mandate</span>
          </div>
        </div>

        {/* ==========================================================================
            OWNERSHIP VS. ACCESS: VISUAL MODEL COMPARISON
            ========================================================================== */}
        <div className="model-comparison-block" style={{ marginBottom: '3.5rem' }}>
          <div className="comparison-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <div className="telemetry-tag signal" style={{ display: 'inline-flex', marginBottom: '0.5rem' }}>
                Paradigm shift // We build networks, not inventories
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 800, color: 'var(--text-pure)', margin: 0 }}>
                Ownership vs. access
              </h3>
            </div>
            <span className="mono-readout text-dim" style={{ fontSize: '0.72rem' }}>
              Reducing economic leakage in entertainment capital
            </span>
          </div>

          <div className="comparison-columns-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {/* Traditional Heavy Model */}
            <div className="comparison-card heavy-model" style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(var(--glass-blur)) saturate(180%)',
              WebkitBackdropFilter: 'blur(var(--glass-blur)) saturate(180%)',
              border: '1px solid var(--glass-border)',
              borderRadius: '24px',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--glass-specular), var(--glass-shadow)'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="mono-readout text-muted" style={{ fontSize: '0.78rem', fontWeight: 600 }}>Conventional enterprise</span>
                  <span className="telemetry-tag" style={{ background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-muted)', fontWeight: 600 }}>Heavy infrastructure</span>
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-pure)', marginBottom: '1rem' }}>
                  The traditional model
                </h4>
                
                {/* Pipeline Steps */}
                <div className="pipeline-flow-steps" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {[
                    { step: '01. Own', desc: 'Buy physical soundstages, cameras, permanent payroll' },
                    { step: '02. Maintain', desc: 'Absorb ongoing maintenance, depreciation, and real estate' },
                    { step: '03. Operate', desc: 'Carry high fixed headcount during project hiatuses' },
                    { step: '04. Recoup', desc: 'Force in-house staff onto mismatched projects to cover overhead' },
                    { step: '05. Scale', desc: 'Scale by accumulating more capital-heavy physical debt' }
                  ].map((s, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', background: 'rgba(0,0,0,0.3)', padding: '0.5rem 0.75rem', borderRadius: '8px' }}>
                      <span className="mono-readout text-muted" style={{ fontSize: '0.78rem', fontWeight: 700, minWidth: '78px' }}>{s.step}</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{s.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.85rem' }}>
                <span className="mono-readout text-muted" style={{ fontSize: '0.78rem', fontWeight: 600 }}>Systemic result:</span>
                <p style={{ margin: '0.25rem 0 0', fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: 1.45 }}>
                  High economic leakage, rigid overhead, and mismatched capabilities forced by balance sheet pressure.
                </p>
              </div>
            </div>

            {/* FIX-SYNQ Asset-Light Network Model */}
            <div className="comparison-card asset-light-model" style={{
              background: 'var(--glass-bg-signal)',
              backdropFilter: 'blur(var(--glass-blur-heavy)) saturate(200%)',
              WebkitBackdropFilter: 'blur(var(--glass-blur-heavy)) saturate(200%)',
              border: '1px solid var(--glass-border-signal)',
              borderRadius: '24px',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 0 35px rgba(62, 180, 137, 0.22), var(--glass-specular)'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="mono-readout text-signal" style={{ fontSize: '0.78rem', fontWeight: 700 }}>FIX-SYNQ paradigm</span>
                  <span className="telemetry-tag signal">Asset-light network</span>
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-pure)', marginBottom: '1rem' }}>
                  The asset-light model
                </h4>

                {/* Pipeline Steps */}
                <div className="pipeline-flow-steps" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {[
                    { step: '01. Identify', desc: 'Diagnose the precise root cause before spending capital' },
                    { step: '02. Access', desc: 'Tap into existing, world-class specialized capabilities' },
                    { step: '03. Connect', desc: 'Assemble independent talent, gear, and partners on demand' },
                    { step: '04. Coordinate', desc: 'Govern cross-departmental handoffs through our operational kernel' },
                    { step: '05. Execute', desc: 'Deliver the intervention and measure audited delta' },
                    { step: '06. Scale', desc: 'Scale the network, intelligence, and utilization—not overhead' }
                  ].map((s, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', background: 'rgba(62, 180, 137, 0.08)', border: '1px solid rgba(62, 180, 137, 0.2)', padding: '0.5rem 0.75rem', borderRadius: '8px' }}>
                      <span className="mono-readout text-signal" style={{ fontSize: '0.78rem', fontWeight: 700, minWidth: '78px' }}>{s.step}</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-pure)' }}>{s.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: '1px solid rgba(62, 180, 137, 0.25)', paddingTop: '0.85rem' }}>
                <span className="mono-readout text-signal" style={{ fontSize: '0.78rem', fontWeight: 700 }}>Systemic result:</span>
                <p style={{ margin: '0.25rem 0 0', fontSize: '0.88rem', color: 'var(--text-pure)', lineHeight: 1.45, fontWeight: 500 }}>
                  Zero idle overhead, perfectly matched specialist teams, and audited operational outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* Resource Utilization Deck */}
          <div className="resource-utilization-strip" style={{
            marginTop: '1.5rem',
            background: 'rgba(11, 14, 20, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <span className="mono-readout text-signal" style={{ fontSize: '0.78rem', fontWeight: 600 }}>Resource utilization mindset:</span>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                Valuable resources already exist across the industry. Our role is to make them accessible, synchronized, and productive.
              </span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['Talent', 'Soundstages', 'Equipment', 'Compute', 'Rights', 'Distribution'].map((item) => (
                <span key={item} style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '6px',
                  padding: '0.25rem 0.65rem',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-pure)'
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ==========================================================================
            INTERACTIVE ORCHESTRATION ENGINE (CORE + 12 ORBITING NODES)
            ========================================================================== */}
        <div className="orchestrator-block-header">
          <div className="orchestrator-scenarios-rack">
            <span className="mono-readout scenario-prompt">Select intervention scenario:</span>
            <div className="scenario-pills">
              {scenarios.map((sc) => {
                const isActive = sc.id === activeScenario;
                return (
                  <button
                    key={sc.id}
                    className={`scenario-btn ${isActive ? 'active' : ''}`}
                    onClick={() => handleSelectScenario(sc.id)}
                  >
                    <span className="mono-readout sc-code">{sc.code}</span>
                    <span className="sc-title">{sc.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="orchestrator-visual-container diagnostic-panel">
          <div className="orchestrator-telemetry-header">
            <div className="telemetry-tag signal">Orchestration engine</div>
            <div className="scenario-status-readout mono-readout">
              Target: <strong className="text-signal">{currentScenario.title}</strong> — {currentScenario.description}
            </div>
          </div>

          <div className="orbit-field">
            {/* Ambient radial glow behind canvas */}
            <div className="orbit-ambient" aria-hidden="true" />

            {/* Orbital guide ring */}
            <div className="orbit-ring-guide" aria-hidden="true" />

            {/* Center FIX-SYNQ Core Node */}
            <div className="center-core-node">
              <div className="core-inner-glyph">
                <span className="core-name">FIX-SYNQ</span>
                <span className="core-sub mono-readout">Operational kernel</span>
              </div>
              <div className="core-radar-halo" />
              <div className="core-radar-halo-outer" />
            </div>

            {/* Orbiting Satellite Nodes */}
            {orbitingNodes.map((node) => {
              const isActivated = currentScenario.activeNodes.includes(node.name);
              const radius = 220;
              const rad = (node.angle * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;

              return (
                <div
                  key={node.name}
                  className={`orbit-satellite-node ${isActivated ? 'activated' : ''}`}
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  {/* Tether line — radiates outward from center */}
                  {isActivated && (
                    <div
                      className="satellite-tether-line"
                      style={{
                        width: `${radius - 80}px`,
                        transform: `rotate(${node.angle + 180}deg)`,
                        transformOrigin: '0 0',
                      }}
                    >
                      <div className="tether-pulse" />
                    </div>
                  )}

                  <div className="satellite-pill">
                    <span className="satellite-dot" />
                    <span className="satellite-label">{node.name}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Capability status strip — replaces crammed center text */}
          <div className="capability-strip">
            <span className="capability-strip-label mono-readout">Kernel functions:</span>
            {['Intelligence', 'Diagnosis', 'Coordination', 'Measurement'].map((cap) => (
              <span key={cap} className="capability-chip">{cap}</span>
            ))}
          </div>

          {/* Bottom Active Mobilization Roster */}
          <div className="orchestrator-roster-footer">
            <span className="mono-readout roster-label">Activated nodes:</span>
            <div className="active-roster-chips">
              {currentScenario.activeNodes.map((n) => (
                <span key={n} className="active-node-chip">
                  <span className="chip-light" />
                  <span>{n}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ==========================================================================
            10-POINT ASSET-LIGHT COMPANY PHILOSOPHY (BENTO GRID)
            ========================================================================== */}
        <div className="philosophy-header-wrap" style={{ marginTop: '5rem', marginBottom: '2rem' }}>
          <div className="section-eyebrow">
            <span>Company philosophy — Ten pillars</span>
          </div>
          <h3 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)', marginBottom: '0.75rem' }}>
            Asset-light company philosophy
          </h3>
          <p className="section-subtitle" style={{ maxWidth: '780px' }}>
            How a category-defining intelligence company creates value without owning heavy physical assets—through coordination, relationships, intelligence, systems, people, and execution.
          </p>
        </div>

        <div className="bento-grid philosophy-bento-grid">
          {ASSET_LIGHT_PHILOSOPHY.map((item) => {
            const IconComponent = pillarIcons[item.num] || Layers;
            return (
              <div
                key={item.num}
                className={`bento-card bento-col-6 philosophy-card ${item.highlight ? 'highlight-signal' : ''}`}
                onMouseEnter={() => audioTelemetry.playHover()}
              >
                <span className="bento-corner-bracket bento-corner-tl"></span>
                <span className="bento-corner-bracket bento-corner-tr"></span>
                <span className="bento-corner-bracket bento-corner-bl"></span>
                <span className="bento-corner-bracket bento-corner-br"></span>

                <div className="bento-header" style={{ marginBottom: '0.85rem' }}>
                  <div className="pillar-index-badge">
                    <span className="mono-readout text-signal" style={{ fontWeight: 700, fontSize: '0.76rem' }}>
                      PILLAR {item.num}
                    </span>
                    <span className="pillar-name mono-readout">{item.pillar.toUpperCase()}</span>
                  </div>
                  <IconComponent size={18} className={item.highlight ? 'text-signal' : 'text-dim'} />
                </div>

                <h4 className="pillar-tagline">
                  {item.pillar} — <span className={item.highlight ? 'text-signal' : 'text-pure'}>{item.tagline}</span>
                </h4>

                <p className="pillar-body">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .asset-light-section {
          position: relative;
        }

        /* Nothing / CMF-Style Manifesto Banner */
        .cmf-manifesto-banner {
          background: rgba(14, 16, 22, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-card);
          padding: 2.25rem 2.5rem;
          margin-bottom: 3.5rem;
          position: relative;
          overflow: hidden;
          box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.15), 0 20px 50px rgba(0, 0, 0, 0.6);
        }

        .cmf-tenets-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.25rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 2rem;
        }

        .cmf-tenet-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0.75rem 0.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          transition: all 0.2s ease;
        }

        .cmf-tenet-item:hover {
          border-color: rgba(62, 180, 137, 0.45);
          background: rgba(62, 180, 137, 0.08);
          transform: translateY(-2px);
        }

        .cmf-tenet-left {
          font-family: var(--font-display);
          font-size: clamp(0.85rem, 1.4vw, 1.05rem);
          font-weight: 800;
          color: var(--signal-bright);
          letter-spacing: 0.02em;
        }

        .cmf-tenet-divider {
          font-family: var(--font-mono);
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--text-muted);
          letter-spacing: 0.1em;
          margin: 0.25rem 0;
        }

        .cmf-tenet-right {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--text-muted);
          letter-spacing: 0.04em;
          text-decoration: line-through;
          opacity: 0.9;
        }

        .cmf-anchor-quote {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
        }

        .cmf-quote-mark {
          font-family: var(--font-display);
          font-size: 3rem;
          color: var(--signal);
          line-height: 0.7;
          opacity: 0.4;
          margin-bottom: 0.5rem;
        }

        .cmf-quote-text {
          font-family: var(--font-display);
          font-size: clamp(1.3rem, 2.8vw, 2.1rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--text-pure);
          line-height: 1.25;
          margin-bottom: 1rem;
          max-width: 820px;
        }

        .cmf-quote-tag {
          letter-spacing: 0.08em;
          font-size: 0.78rem;
          font-weight: 600;
        }

        /* Orchestrator Layout */
        .orchestrator-scenarios-rack {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.75rem;
          flex-wrap: wrap;
        }

        .scenario-prompt {
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 600;
        }

        .scenario-pills {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .scenario-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          padding: 0.55rem 1rem;
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .scenario-btn:hover {
          border-color: var(--border-medium);
          color: var(--text-main);
        }

        .scenario-btn.active {
          border-color: var(--signal);
          background: var(--signal-subtle);
          color: var(--text-pure);
          box-shadow: 0 0 14px var(--signal-glow);
        }

        .sc-code {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--signal);
        }

        .sc-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.85rem;
        }

        .orchestrator-visual-container {
          padding: 0;
          overflow: hidden;
          background: var(--glass-bg);
          backdrop-filter: blur(var(--glass-blur-heavy)) saturate(200%);
          -webkit-backdrop-filter: blur(var(--glass-blur-heavy)) saturate(200%);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-card);
          box-shadow: var(--glass-specular), var(--glass-shadow);
        }

        .orchestrator-telemetry-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--glass-border);
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          flex-wrap: wrap;
          gap: 1rem;
        }

        /* ── Orbit field ────────────────────────────────── */
        .orbit-field {
          position: relative;
          height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* Ambient radial backdrop */
        .orbit-ambient {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 60% 55% at 50% 50%,
            rgba(62, 180, 137, 0.06) 0%,
            transparent 72%
          );
          pointer-events: none;
        }

        /* Faint orbital ring guide at the node radius */
        .orbit-ring-guide {
          position: absolute;
          width: 440px;
          height: 440px;
          border-radius: 50%;
          border: 1px dashed rgba(255, 255, 255, 0.07);
          pointer-events: none;
        }

        /* ── Center node ────────────────────────────────── */
        .center-core-node {
          position: absolute;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: rgba(7, 24, 17, 0.92);
          backdrop-filter: blur(24px) saturate(220%);
          -webkit-backdrop-filter: blur(24px) saturate(220%);
          border: 1.5px solid var(--signal);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          box-shadow:
            0 0 0 8px rgba(62, 180, 137, 0.06),
            0 0 32px rgba(62, 180, 137, 0.28),
            inset 0 0 20px rgba(62, 180, 137, 0.12);
        }

        .core-inner-glyph {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0.5rem;
          gap: 2px;
        }

        .core-name {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.1rem;
          color: #FFFFFF;
          letter-spacing: 0.03em;
          line-height: 1;
        }

        .core-sub {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--signal);
          letter-spacing: 0.08em;
          display: block;
        }

        /* Outer dashed halo */
        .core-radar-halo {
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          border: 1px dashed rgba(62, 180, 137, 0.35);
          pointer-events: none;
          animation: haloPulse 3s ease-in-out infinite;
        }

        /* Second outer ring */
        .core-radar-halo-outer {
          position: absolute;
          inset: -24px;
          border-radius: 50%;
          border: 1px dashed rgba(62, 180, 137, 0.14);
          pointer-events: none;
          animation: haloPulse 3s ease-in-out infinite 1s;
        }

        @keyframes haloPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50%       { opacity: 0.3; transform: scale(1.04); }
        }

        /* ── Satellite nodes ────────────────────────────── */
        .orbit-satellite-node {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 5;
        }

        .satellite-pill {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.38rem 0.8rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
          color: rgba(255, 255, 255, 0.45);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
          transition:
            background 0.25s ease,
            border-color 0.25s ease,
            color 0.25s ease,
            box-shadow 0.25s ease,
            transform 0.25s ease;
        }

        .satellite-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: currentColor;
          flex-shrink: 0;
        }

        .satellite-label {
          letter-spacing: 0.03em;
        }

        .orbit-satellite-node.activated .satellite-pill {
          background: rgba(62, 180, 137, 0.14);
          border-color: rgba(62, 180, 137, 0.6);
          color: var(--signal-bright);
          box-shadow:
            0 0 14px rgba(62, 180, 137, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transform: scale(1.06);
        }

        /* ── Tether lines ───────────────────────────────── */
        /* Line radiates from node inward toward center */
        .satellite-tether-line {
          position: absolute;
          left: 50%;
          top: 50%;
          height: 1px;
          /* Signal at node end → transparent at center */
          background: linear-gradient(
            90deg,
            rgba(62, 180, 137, 0.55) 0%,
            transparent 100%
          );
          transform-origin: left center;
          pointer-events: none;
          z-index: -1;
          margin-top: -0.5px;
        }

        /* Traveling pulse along tether */
        .tether-pulse {
          position: absolute;
          left: 0;
          top: -2px;
          width: 5px;
          height: 5px;
          background: var(--signal);
          border-radius: 50%;
          box-shadow: 0 0 6px var(--signal);
          animation: tetherTravel 2s linear infinite;
        }

        @keyframes tetherTravel {
          from { left: 0%; opacity: 1; }
          to   { left: 100%; opacity: 0; }
        }

        /* ── Capability strip ───────────────────────────── */
        .capability-strip {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          flex-wrap: wrap;
        }

        .capability-strip-label {
          font-size: 0.74rem;
          font-weight: 600;
          color: var(--text-muted);
          margin-right: 0.25rem;
          flex-shrink: 0;
        }

        .capability-chip {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--signal);
          background: rgba(62, 180, 137, 0.08);
          border: 1px solid rgba(62, 180, 137, 0.22);
          border-radius: 9999px;
          padding: 0.18rem 0.6rem;
          letter-spacing: 0.03em;
        }

        /* ── Roster footer ──────────────────────────────── */
        .orchestrator-roster-footer {
          padding: 1.25rem 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .roster-label {
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 600;
        }

        .active-roster-chips {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .active-node-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.65rem;
          background: var(--glass-bg-telemetry);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid var(--border-telemetry);
          border-radius: var(--radius-pill);
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--telemetry);
        }

        .chip-light {
          width: 5px;
          height: 5px;
          background: var(--telemetry);
          border-radius: 50%;
          box-shadow: 0 0 6px var(--telemetry);
        }

        /* 10-Pillar Philosophy Bento Grid */
        .philosophy-bento-grid {
          margin-top: 1rem;
        }

        .philosophy-card {
          padding: 2rem 2.25rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          background: var(--glass-bg);
          backdrop-filter: blur(var(--glass-blur)) saturate(190%);
          -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(190%);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-card);
          box-shadow: var(--glass-specular), var(--glass-shadow);
          transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
        }

        .philosophy-card:hover {
          transform: translateY(-4px);
          border-color: var(--glass-border-hover);
          box-shadow: var(--glass-specular-hover), var(--glass-shadow-hover);
        }

        .pillar-index-badge {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .pillar-name {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-muted);
          letter-spacing: 0.06em;
        }

        .pillar-tagline {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 800;
          line-height: 1.35;
          letter-spacing: -0.01em;
          margin-bottom: 0.75rem;
        }

        .pillar-body {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 900px) {
          .cmf-tenets-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .cmf-manifesto-banner {
            padding: 1.75rem;
          }
        }

        @media (max-width: 768px) {
          .orbit-field {
            height: 480px;
            transform: scale(0.72);
          }
        }

        @media (max-width: 600px) {
          .cmf-tenets-grid {
            grid-template-columns: 1fr;
          }
          .philosophy-card {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .orbit-field {
            height: 380px;
            transform: scale(0.55);
          }
        }
      `}</style>
    </section>
  );
}
