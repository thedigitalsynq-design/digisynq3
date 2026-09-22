import React from 'react';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import { audioTelemetry } from '../../utils/audioTelemetry';

export default function NotFoundPage({ onResetHome }) {
  return (
    <div className="not-found-screen">
      <div className="not-found-card diagnostic-panel">
        <div className="not-found-header">
          <ShieldAlert size={28} className="text-signal pulse-signal" />
          <span className="mono-readout text-signal">Diagnostic error // Node 404 not found</span>
        </div>

        <h1 className="not-found-title">Unmapped coordinate path</h1>
        <p className="not-found-desc">
          The requested coordinate or pathway does not exist within the entertainment root-cause network.
          The node may be dormant, deprecated, or disconnected from the active ecosystem mesh.
        </p>

        <div className="not-found-telemetry-box">
          <div className="telemetry-line mono-readout">
            <span className="text-dim">System status:</span>
            <span className="text-signal">Unresolved dependency exception</span>
          </div>
          <div className="telemetry-line mono-readout">
            <span className="text-dim">Recommended action:</span>
            <span>Re-anchor to primary root network</span>
          </div>
        </div>

        <button
          className="btn-signal"
          onClick={() => {
            audioTelemetry.playSelect();
            onResetHome();
          }}
        >
          <ArrowLeft size={16} />
          <span>Return to root network</span>
        </button>
      </div>

      <style>{`
        .not-found-screen {
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: #050608;
        }

        .not-found-card {
          max-width: 620px;
          width: 100%;
          background: rgba(11, 14, 20, 0.95);
          border: 1px solid var(--border-medium);
          padding: 3rem 2.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .not-found-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .not-found-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.8vw, 3rem);
          font-weight: 800;
          color: var(--text-pure);
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .not-found-desc {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .not-found-telemetry-box {
          width: 100%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-left: 3px solid var(--signal);
          padding: 1.25rem;
          margin-bottom: 2.25rem;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .telemetry-line {
          display: flex;
          justify-content: space-between;
          font-size: 0.78rem;
          gap: 1rem;
        }
      `}</style>
    </div>
  );
}
