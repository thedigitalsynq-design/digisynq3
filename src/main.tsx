import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';

// ── Clean DIGISYNQ Client-Side Console Diagnostics ────────────
if (typeof window !== 'undefined') {
  console.log(
    '%c DIGISYNQ %c Entertainment Synchronization Infrastructure %c\n• Sync in All Stages of Filmmaking.\n• Find the gap. SYNQ the system. Create value.\n• 23 Master Mechanisms • 9-Stage Continuum • 12 Industry Archetypes Active',
    'background: #FFFFFF; color: #000000; font-weight: bold; font-size: 13px; padding: 4px 8px; border-radius: 4px;',
    'background: #18181B; color: #E4E4E7; font-size: 12px; padding: 4px 8px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.15);',
    'color: #A1A1AA; font-size: 11px; line-height: 1.6;'
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
