import React from 'react';
import { ShieldAlert, RefreshCw } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('FIX-SYNQ Diagnostic Catch:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          background: '#07130E',
          color: '#FFF'
        }}>
          <div style={{
            maxWidth: '560px',
            background: 'rgba(62, 180, 137, 0.08)',
            border: '1px solid var(--signal-color, #3EB489)',
            borderRadius: '20px',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <ShieldAlert size={36} color="#3EB489" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display, sans-serif)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Diagnostic telemetry recovery
            </h3>
            <p style={{ color: '#9BB0A5', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
              A network node experienced an unexpected state exception. The core diagnostic mesh is reconnecting.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(180deg, #56E39F 0%, #3EB489 100%)',
                color: '#051910',
                border: 'none',
                borderRadius: '999px',
                padding: '0.65rem 1.4rem',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              <RefreshCw size={14} />
              <span>Reload diagnostic session</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
