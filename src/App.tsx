import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';

// ── Master website components & segregated pages ─────────────
import { SiteNav } from './components/SiteNav';
import { SiteFooter } from './components/SiteFooter';
import { RouteSEO } from './components/RouteSEO';
import { HomePage } from './pages/HomePage';

// ── Lazy-loaded Core System Pages ──
const EcosystemPage = React.lazy(() => import('./pages/EcosystemPage').then(m => ({ default: m.EcosystemPage })));
const RootCauseGraphPage = React.lazy(() => import('./pages/RootCauseGraphPage'));
const ProblemAtlasPage = React.lazy(() => import('./pages/ProblemAtlasPage').then(m => ({ default: m.ProblemAtlasPage })));
const RootCausesPage = React.lazy(() => import('./pages/RootCausesPage').then(m => ({ default: m.RootCausesPage })));
const OpportunityRadarPage = React.lazy(() => import('./pages/OpportunityRadarPage').then(m => ({ default: m.OpportunityRadarPage })));
const NetworkPage = React.lazy(() => import('./pages/NetworkPage').then(m => ({ default: m.NetworkPage })));
const ConnectPage = React.lazy(() => import('./pages/ConnectPage').then(m => ({ default: m.ConnectPage })));
const OrchestratePage = React.lazy(() => import('./pages/OrchestratePage').then(m => ({ default: m.OrchestratePage })));
const MeasurePage = React.lazy(() => import('./pages/MeasurePage').then(m => ({ default: m.MeasurePage })));
const MonetizePage = React.lazy(() => import('./pages/MonetizePage').then(m => ({ default: m.MonetizePage })));
const ParticipatePage = React.lazy(() => import('./pages/ParticipatePage').then(m => ({ default: m.ParticipatePage })));
const AboutPage = React.lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));

// ── Simulation & Deep Reference Pages ──
const EnginesPage = React.lazy(() => import('./pages/EnginesPage').then(m => ({ default: m.EnginesPage })));
const BlueprintPage = React.lazy(() => import('./pages/BlueprintPage').then(m => ({ default: m.BlueprintPage })));
const RunbookPage = React.lazy(() => import('./pages/RunbookPage').then(m => ({ default: m.RunbookPage })));
const InsightsPage = React.lazy(() => import('./pages/InsightsPage').then(m => ({ default: m.InsightsPage })));
const SystemFlowPage = React.lazy(() => import('./pages/SystemFlowPage').then(m => ({ default: m.SystemFlowPage })));

// ── Public website layout wrapper ────────────────────────────
function WebsiteLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  // Smooth scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#03040A] text-[#ECEEF5] selection:bg-white selection:text-black">
      <RouteSEO />
      <SiteNav />
      <div key={location.pathname} id="main-content" tabIndex={-1} className="flex-1 animate-page-fade focus:outline-none">
        <React.Suspense fallback={
          <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3">
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span className="text-xs font-mono text-zinc-500">Loading DIGISYNQ system module...</span>
          </div>
        }>
          {children}
        </React.Suspense>
      </div>
      <SiteFooter />
    </div>
  );
}

// ── Master Route Architecture ─────────────────────────────────
function AppRoutes() {
  return (
    <WebsiteLayout>
      <Routes>
        {/* ── 01 to 13 Canonical System Pillars ── */}
        <Route path="/" element={<HomePage />} />
        <Route path="/ecosystem" element={<EcosystemPage />} />
        <Route path="/eerg" element={<RootCauseGraphPage />} />
        <Route path="/problems" element={<ProblemAtlasPage />} />
        <Route path="/root-causes" element={<RootCausesPage />} />
        <Route path="/opportunities" element={<OpportunityRadarPage />} />
        <Route path="/network" element={<NetworkPage />} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/orchestrate" element={<OrchestratePage />} />
        <Route path="/measure" element={<MeasurePage />} />
        <Route path="/monetize" element={<MonetizePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/philosophy" element={<Navigate to="/about" replace />} />
        <Route path="/participate" element={<ParticipatePage />} />

        {/* ── Simulation & Deep Reference (Codex) ── */}
        <Route path="/engines" element={<EnginesPage />} />
        <Route path="/engines/cascade" element={<EnginesPage initialTab="CASCADE" />} />
        <Route path="/engines/root-map" element={<EnginesPage initialTab="ROOT_MAP" />} />
        <Route path="/engines/problem-taxonomy" element={<EnginesPage initialTab="TAXONOMY" />} />
        <Route path="/engines/risk" element={<EnginesPage initialTab="RISK_ENGINE" />} />
        <Route path="/blueprint" element={<BlueprintPage />} />
        <Route path="/runbook" element={<RunbookPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/system-flow" element={<SystemFlowPage />} />

        {/* ── Aliases & Backward Compatibility Redirects ── */}
        <Route path="/the-synq" element={<Navigate to="/connect" replace />} />
        <Route path="/mechanisms" element={<Navigate to="/orchestrate" replace />} />
        <Route path="/continuum" element={<Navigate to="/ecosystem" replace />} />
        <Route path="/stakeholders" element={<Navigate to="/ecosystem" replace />} />
        <Route path="/how-it-works" element={<Navigate to="/orchestrate" replace />} />
        <Route path="/diagnose" element={<Navigate to="/participate" replace />} />
        <Route path="/start" element={<Navigate to="/participate" replace />} />
        <Route path="/root-cause-graph" element={<Navigate to="/eerg" replace />} />
        <Route path="/labs" element={<Navigate to="/engines" replace />} />
        <Route path="/workshops" element={<Navigate to="/participate" replace />} />
        <Route path="/capabilities" element={<Navigate to="/orchestrate" replace />} />
        <Route path="/use-cases" element={<Navigate to="/connect" replace />} />

        {/* Catch-all fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </WebsiteLayout>
  );
}

// ── Root App ─────────────────────────────────────────────────
export default function App() {
  const isGhPages = typeof window !== 'undefined' && window.location.pathname.includes('/digisynq3');
  const basename = isGhPages ? '/digisynq3' : '';

  return (
    <BrowserRouter basename={basename}>
      <AppRoutes />
    </BrowserRouter>
  );
}
