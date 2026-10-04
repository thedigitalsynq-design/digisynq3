import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';

// ── Clean DIGISYNQ Client-Side Console Diagnostics ────────────
if (typeof window !== 'undefined') {
  console.log(
    '%c DIGISYNQ %c Entertainment Synchronization Infrastructure %c\n• Sync in All Stages of Filmmaking.\n• Find the gap. SYNQ the system. Create value.\n• 23 Master Mechanisms • 9-Stage Continuum • 12 Industry Archetypes Active',
    'background: #23B272; color: #03040A; font-weight: bold; font-size: 13px; padding: 4px 8px; border-radius: 4px;',
    'background: #16543D; color: #52E3A4; font-size: 12px; padding: 4px 8px; border-radius: 4px;',
    'color: #8E96A4; font-size: 11px; line-height: 1.6;'
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
