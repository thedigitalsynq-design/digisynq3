import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Play, ArrowRight, GitFork } from 'lucide-react';
import { NETWORK_NODES, NETWORK_EDGES, PATH_TECHNICIAN_DISCOVERY, PATH_PRODUCTION_DELAY } from '../../data/rootNetworkGraph';
import { audioTelemetry } from '../../utils/audioTelemetry';

export default function RootNetworkCanvas({ onOpenIntake }) {
  const canvasRef = useRef(null);
  const [selectedPathType, setSelectedPathType] = useState('tech'); // 'tech' or 'delay'
  const activePathArray = selectedPathType === 'tech' ? PATH_TECHNICIAN_DISCOVERY : PATH_PRODUCTION_DELAY;
  
  const [selectedNodeId, setSelectedNodeId] = useState(activePathArray[0]);
  const [hoveredNodeId, setHoveredNodeId] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [activePathMode, setActivePathMode] = useState(true);
  const [pathStepIndex, setPathStepIndex] = useState(0);

  const selectedNode = NETWORK_NODES.find((n) => n.id === selectedNodeId) || NETWORK_NODES[0];

  // Auto-step through selected path if enabled
  useEffect(() => {
    let timer;
    if (activePathMode) {
      timer = setInterval(() => {
        setPathStepIndex((prev) => {
          const next = (prev + 1) % activePathArray.length;
          setSelectedNodeId(activePathArray[next]);
          return next;
        });
      }, 2600);
    }
    return () => clearInterval(timer);
  }, [activePathMode, activePathArray]);

  // Render Canvas Graph Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Handle high-DPI retina rendering
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    let pulseTime = 0;

    const render = () => {
      pulseTime += 0.03;
      ctx.clearRect(0, 0, rect.width, rect.height);

      ctx.save();
      ctx.translate(pan.x + rect.width / 2, pan.y + rect.height / 2);
      ctx.scale(zoom, zoom);
      ctx.translate(-550, -420); // Center network around midpoint coordinates

      // 1. Draw Background Grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < 1200; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 900);
        ctx.stroke();
      }
      for (let y = 0; y < 900; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(1200, y);
        ctx.stroke();
      }

      // 2. Draw Edges
      NETWORK_EDGES.forEach((edge) => {
        const fromNode = NETWORK_NODES.find((n) => n.id === edge.from);
        const toNode = NETWORK_NODES.find((n) => n.id === edge.to);
        if (!fromNode || !toNode) return;

        const isHighlighted = (selectedNodeId === edge.from || selectedNodeId === edge.to) ||
          (activePathMode && activePathArray.includes(edge.from) && activePathArray.includes(edge.to));

        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);

        // Curved organic spline
        const cpX = (fromNode.x + toNode.x) / 2;
        const cpY = (fromNode.y + toNode.y) / 2 + 15;
        ctx.quadraticCurveTo(cpX, cpY, toNode.x, toNode.y);

        if (isHighlighted) {
          ctx.strokeStyle = edge.isIntervention ? '#5EEAD4' : '#3EB489';
          ctx.lineWidth = 2.2;
          ctx.shadowColor = edge.isIntervention ? 'rgba(94, 234, 212, 0.5)' : 'rgba(62, 180, 137, 0.6)';
          ctx.shadowBlur = 10;
        } else {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
          ctx.lineWidth = 1;
          ctx.shadowBlur = 0;
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Animated pulse packet along highlighted edge
        if (isHighlighted) {
          const t = (pulseTime % 1.5) / 1.5;
          const pulseX = Math.pow(1 - t, 2) * fromNode.x + 2 * (1 - t) * t * cpX + Math.pow(t, 2) * toNode.x;
          const pulseY = Math.pow(1 - t, 2) * fromNode.y + 2 * (1 - t) * t * cpY + Math.pow(t, 2) * toNode.y;

          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = edge.isIntervention ? '#5EEAD4' : '#3EB489';
          ctx.fill();
        }
      });

      // 3. Draw Nodes
      NETWORK_NODES.forEach((node) => {
        const isSelected = node.id === selectedNodeId;
        const isHovered = node.id === hoveredNodeId;
        const isInPath = activePathMode && activePathArray.includes(node.id);

        let nodeRadius = 14;
        let nodeFill = '#0B1C15';
        let nodeStroke = 'rgba(255, 255, 255, 0.2)';

        if (node.type === 'problem') {
          nodeRadius = 18;
          nodeStroke = '#56E39F';
        } else if (node.type === 'root') {
          nodeRadius = 22;
          nodeStroke = '#3EB489';
          nodeFill = 'rgba(62, 180, 137, 0.15)';
        } else if (node.type === 'intervention') {
          nodeRadius = 16;
          nodeStroke = '#5EEAD4';
          nodeFill = 'rgba(94, 234, 212, 0.15)';
        }

        // Selected / Hover halo
        if (isSelected || isHovered) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, nodeRadius + 9, 0, Math.PI * 2);
          ctx.fillStyle = isSelected ? 'rgba(62, 180, 137, 0.25)' : 'rgba(255, 255, 255, 0.08)';
          ctx.fill();
        }

        // Main Node Body
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? (node.type === 'intervention' ? '#5EEAD4' : '#3EB489') : nodeFill;
        ctx.fill();

        ctx.lineWidth = isSelected ? 2.5 : 1.5;
        ctx.strokeStyle = isSelected ? '#FFFFFF' : nodeStroke;
        ctx.stroke();

        // Node Inner Dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? '#FFFFFF' : (node.type === 'root' ? '#3EB489' : '#8E98AB');
        ctx.fill();

        // Node Label Typography - Google Sans Flex Variable
        ctx.font = isSelected ? '700 13px "Google Sans Flex Variable", "Google Sans Flex", sans-serif' : '600 12px "Google Sans Flex Variable", "Google Sans Flex", sans-serif';
        ctx.fillStyle = isSelected ? '#FFFFFF' : (isInPath ? '#56E39F' : '#E2ECE6');
        ctx.textAlign = 'center';
        ctx.fillText(node.label, node.x, node.y + nodeRadius + 16);
      });

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const r = canvas.getBoundingClientRect();
      canvas.width = r.width * dpr;
      canvas.height = r.height * dpr;
      ctx.scale(dpr, dpr);
    };
    window.addEventListener('resize', handleResize);

    render();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [selectedNodeId, hoveredNodeId, zoom, pan, activePathMode, activePathArray]);

  // Mouse & Touch Interaction Handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
      return;
    }

    // Node hit testing
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Invert canvas transform
    const worldX = (mouseX - (pan.x + rect.width / 2)) / zoom + 550;
    const worldY = (mouseY - (pan.y + rect.height / 2)) / zoom + 420;

    const hit = NETWORK_NODES.find((node) => {
      const dx = node.x - worldX;
      const dy = node.y - worldY;
      return Math.sqrt(dx * dx + dy * dy) < 25;
    });

    if (hit && hit.id !== hoveredNodeId) {
      setHoveredNodeId(hit.id);
      audioTelemetry.playHover();
    } else if (!hit && hoveredNodeId) {
      setHoveredNodeId(null);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({ x: e.touches[0].clientX - pan.x, y: e.touches[0].clientY - pan.y });
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && e.touches.length === 1) {
      setPan({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleClick = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const worldX = (mouseX - (pan.x + rect.width / 2)) / zoom + 550;
    const worldY = (mouseY - (pan.y + rect.height / 2)) / zoom + 420;

    const hit = NETWORK_NODES.find((node) => {
      const dx = node.x - worldX;
      const dy = node.y - worldY;
      return Math.sqrt(dx * dx + dy * dy) < 25;
    });

    if (hit) {
      setSelectedNodeId(hit.id);
      setActivePathMode(false);
      audioTelemetry.playSelect();
    }
  };

  const handleZoom = (delta) => {
    setZoom((prev) => Math.min(Math.max(0.6, prev + delta), 2));
    audioTelemetry.playHover();
  };

  const resetView = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setSelectedNodeId('node-delay');
    audioTelemetry.playHover();
  };

  return (
    <section className="network-section section-block" id="section-05">
      <div className="container">
        <div className="section-eyebrow">
          <span>05 — The root-cause network</span>
        </div>
        <h2 className="section-title">
          The real problem is usually a network.
        </h2>
        <p className="section-subtitle">
          Behind every visible operational crisis is a network of causes across multiple departments and counterparties.
          The purpose is not decoration: one problem can have many causes, and one root cause can create many problems.
        </p>

        {/* Dual-Reality Core Principles Banner */}
        <div className="network-principles-banner" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', margin: '1.5rem 0 2rem' }}>
          <div style={{ background: 'rgba(62, 180, 137, 0.08)', border: '1px solid rgba(62, 180, 137, 0.25)', borderRadius: '20px', padding: '1.25rem 1.5rem' }}>
            <span className="mono-readout text-signal" style={{ fontSize: '0.72rem', letterSpacing: '0.04em' }}>Systemic principle 01</span>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0.35rem 0 0', color: '#FFF' }}>One problem can have many causes.</h3>
          </div>
          <div style={{ background: 'rgba(94, 234, 212, 0.08)', border: '1px solid rgba(94, 234, 212, 0.25)', borderRadius: '20px', padding: '1.25rem 1.5rem' }}>
            <span className="mono-readout" style={{ color: '#5EEAD4', fontSize: '0.72rem', letterSpacing: '0.04em' }}>Systemic principle 02</span>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0.35rem 0 0', color: '#FFF' }}>One root cause can create many problems.</h3>
          </div>
        </div>

        {/* Network Graph Interactive Canvas Frame */}
        <div className="canvas-frame diagnostic-panel">
          {/* Top Control Bar */}
          <div className="canvas-telemetry-header">
            <div className="canvas-info-pills">
              <span className="telemetry-tag signal">Live network graph</span>
              {/* Path Switcher Tabs */}
              <div style={{ display: 'inline-flex', gap: '0.35rem', background: 'rgba(255,255,255,0.05)', padding: '0.2rem', borderRadius: '9999px' }}>
                <button
                  className={`matrix-filter-pill ${selectedPathType === 'tech' ? 'active' : ''}`}
                  style={{ padding: '0.25rem 0.65rem', fontSize: '0.7rem' }}
                  onClick={() => {
                    setSelectedPathType('tech');
                    setSelectedNodeId(PATH_TECHNICIAN_DISCOVERY[0]);
                    setPathStepIndex(0);
                    audioTelemetry.playSelect();
                  }}
                >
                  <GitFork size={12} style={{ display: 'inline', marginRight: '4px' }} />
                  Technician discovery
                </button>
                <button
                  className={`matrix-filter-pill ${selectedPathType === 'delay' ? 'active' : ''}`}
                  style={{ padding: '0.25rem 0.65rem', fontSize: '0.7rem' }}
                  onClick={() => {
                    setSelectedPathType('delay');
                    setSelectedNodeId(PATH_PRODUCTION_DELAY[0]);
                    setPathStepIndex(0);
                    audioTelemetry.playSelect();
                  }}
                >
                  <GitFork size={12} style={{ display: 'inline', marginRight: '4px' }} />
                  Production delay
                </button>
              </div>

              {activePathMode && (
                <span className="telemetry-tag">Step: 0{pathStepIndex + 1}/0{activePathArray.length}</span>
              )}
              <span className="mono-readout text-muted">
                Active node: <strong className="text-signal">{selectedNode.label}</strong>
              </span>
            </div>

            <div className="canvas-controls-rack">
              <button
                className={`canvas-ctrl-btn ${activePathMode ? 'active' : ''}`}
                onClick={() => {
                  setActivePathMode(!activePathMode);
                  audioTelemetry.playSelect();
                }}
                title="Toggle signature path trace walkthrough"
              >
                <Play size={13} fill={activePathMode ? 'currentColor' : 'none'} />
                <span>{activePathMode ? 'Auto trace active' : 'Run trace'}</span>
              </button>

              <button className="canvas-ctrl-btn" onClick={() => handleZoom(0.15)} title="Zoom in">
                <ZoomIn size={14} />
              </button>
              <button className="canvas-ctrl-btn" onClick={() => handleZoom(-0.15)} title="Zoom out">
                <ZoomOut size={14} />
              </button>
              <button className="canvas-ctrl-btn" onClick={resetView} title="Reset camera view">
                <RotateCcw size={14} />
              </button>
            </div>
          </div>

          {/* HTML5 Canvas Surface */}
          <div className="canvas-viewport-wrapper">
            <canvas
              ref={canvasRef}
              className="network-canvas"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onClick={handleClick}
            />

            {/* Overlaid Floating Node Telemetry Card */}
            <div className="node-overlay-hud diagnostic-panel">
              <div className="hud-badge-row">
                <span className={`telemetry-tag ${selectedNode.type === 'root' ? 'signal' : ''}`}>
                  {selectedNode.type}
                </span>
                <span className="mono-readout text-dim">Cluster: {selectedNode.cluster}</span>
              </div>
              <h4 className="hud-node-title">{selectedNode.label}</h4>
              <p className="hud-node-desc">{selectedNode.desc}</p>

              <div className="hud-actions">
                <button
                  className="btn-signal btn-sm"
                  onClick={() => {
                    audioTelemetry.playSelect();
                    onOpenIntake(selectedNode.label);
                  }}
                >
                  <span>Intervene on this node</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>

          {/* Signature Causal Sequence Step Readout */}
          <div className="canvas-footer-path">
            <div className="mono-readout path-label">
              {selectedPathType === 'tech' ? 'Technician discovery causal path:' : 'Production delay causal path:'}
            </div>
            <div className="path-breadcrumbs">
              {activePathArray.map((nid, idx) => {
                const n = NETWORK_NODES.find((item) => item.id === nid);
                const isCurrent = n?.id === selectedNodeId;
                return (
                  <button
                    key={nid}
                    className={`path-crumb ${isCurrent ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedNodeId(nid);
                      setActivePathMode(false);
                      audioTelemetry.playSelect();
                    }}
                  >
                    <span>{n?.label}</span>
                    {idx < activePathArray.length - 1 && <span className="crumb-arrow">→</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .network-section {
          position: relative;
        }

        .canvas-frame {
          padding: 0;
          overflow: hidden;
          border: 1px solid var(--glass-border);
          background: var(--glass-bg);
          backdrop-filter: blur(var(--glass-blur-heavy)) saturate(200%);
          -webkit-backdrop-filter: blur(var(--glass-blur-heavy)) saturate(200%);
          box-shadow: var(--glass-specular), var(--glass-shadow);
          border-radius: var(--radius-card);
        }

        .canvas-telemetry-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--glass-border);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .canvas-info-pills {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .canvas-controls-rack {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .canvas-ctrl-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
          color: var(--text-muted);
          padding: 0.45rem 0.85rem;
          border-radius: var(--radius-pill);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .canvas-ctrl-btn:hover {
          border-color: var(--glass-border-hover);
          color: var(--text-pure);
          background: rgba(255, 255, 255, 0.08);
        }

        .canvas-ctrl-btn.active {
          background: var(--glass-bg-signal);
          border-color: var(--glass-border-signal);
          color: var(--signal-bright);
          box-shadow: 0 0 16px var(--signal-glow);
        }

        .canvas-viewport-wrapper {
          position: relative;
          height: 600px;
          cursor: grab;
        }

        .canvas-viewport-wrapper:active {
          cursor: grabbing;
        }

        .network-canvas {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* HUD Overlay */
        .node-overlay-hud {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          max-width: 380px;
          background: var(--glass-bg);
          backdrop-filter: blur(28px) saturate(220%);
          -webkit-backdrop-filter: blur(28px) saturate(220%);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-specular), 0 20px 50px rgba(0, 0, 0, 0.7);
          border-radius: var(--radius-card);
          padding: 1.5rem;
        }

        .hud-badge-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.6rem;
        }

        .hud-node-title {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-pure);
          margin-bottom: 0.4rem;
        }

        .hud-node-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.45;
          margin-bottom: 1rem;
        }

        .canvas-footer-path {
          padding: 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          gap: 1rem;
          overflow-x: auto;
        }

        .path-label {
          color: var(--text-muted);
          font-size: 0.82rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .path-breadcrumbs {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          white-space: nowrap;
        }

        .path-crumb {
          background: none;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          transition: color var(--transition-fast);
        }

        .path-crumb:hover {
          color: var(--text-pure);
        }

        .path-crumb.active {
          color: var(--signal-bright);
          font-weight: 700;
        }

        .crumb-arrow {
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .canvas-viewport-wrapper {
            height: 440px;
          }
          .node-overlay-hud {
            left: 0.75rem;
            right: 0.75rem;
            bottom: 0.75rem;
            max-width: none;
          }
        }
      `}</style>
    </section>
  );
}
