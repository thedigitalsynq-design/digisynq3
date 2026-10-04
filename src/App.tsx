import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';

// ── Master website components & segregated pages ─────────────
import { SiteNav } from './components/SiteNav';
import { SiteFooter } from './components/SiteFooter';
import { HomePage } from './pages/HomePage';

// ── Lazy-loaded Sub-Routes for Performance & Bundle Splitting ──
const MechanismsPage = React.lazy(() => import('./pages/MechanismsPage').then(m => ({ default: m.MechanismsPage })));
const ContinuumPage = React.lazy(() => import('./pages/ContinuumPage').then(m => ({ default: m.ContinuumPage })));
const StakeholdersPage = React.lazy(() => import('./pages/StakeholdersPage').then(m => ({ default: m.StakeholdersPage })));
const EnginesPage = React.lazy(() => import('./pages/EnginesPage').then(m => ({ default: m.EnginesPage })));
const HowItWorksPage = React.lazy(() => import('./pages/HowItWorksPage').then(m => ({ default: m.HowItWorksPage })));
const WorkshopsPage = React.lazy(() => import('./pages/WorkshopsPage').then(m => ({ default: m.WorkshopsPage })));
const BlueprintPage = React.lazy(() => import('./pages/BlueprintPage').then(m => ({ default: m.BlueprintPage })));
const AboutPage = React.lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const StartSynqPage = React.lazy(() => import('./pages/StartSynqPage').then(m => ({ default: m.StartSynqPage })));
const TheSynqPage = React.lazy(() => import('./pages/TheSynqPage').then(m => ({ default: m.TheSynqPage })));
const EcosystemPage = React.lazy(() => import('./pages/EcosystemPage').then(m => ({ default: m.EcosystemPage })));
const RunbookPage = React.lazy(() => import('./pages/RunbookPage').then(m => ({ default: m.RunbookPage })));
const InsightsPage = React.lazy(() => import('./pages/InsightsPage').then(m => ({ default: m.InsightsPage })));
const DiagnosePage = React.lazy(() => import('./pages/DiagnosePage').then(m => ({ default: m.DiagnosePage })));

// ── Public website layout wrapper ────────────────────────────
function WebsiteLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  // Smooth scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#03040A] text-[#ECEEF5] selection:bg-[#23B272] selection:text-[#03040A]">
      <SiteNav />
      <div key={location.pathname} className="flex-1 animate-page-fade">
        <React.Suspense fallback={
          <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3">
            <div className="w-6 h-6 border-2 border-[#23B272] border-t-transparent rounded-full animate-spin" />
            <span className="text-xs font-mono text-zinc-500">Loading DigiSynq module...</span>
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
        {/* Core Segregated Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/mechanisms" element={<MechanismsPage />} />
        <Route path="/continuum" element={<ContinuumPage />} />
        <Route path="/stakeholders" element={<StakeholdersPage />} />
        <Route path="/ecosystem" element={<EcosystemPage />} />
        <Route path="/engines" element={<EnginesPage />} />
        <Route path="/engines/cascade" element={<EnginesPage initialTab="CASCADE" />} />
        <Route path="/engines/root-map" element={<EnginesPage initialTab="TREE_PIPELINE" />} />
        <Route path="/engines/problem-taxonomy" element={<EnginesPage initialTab="TAXONOMY" />} />
        <Route path="/engines/risk" element={<EnginesPage initialTab="RISK_ENGINE" />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/the-synq" element={<TheSynqPage />} />
        <Route path="/workshops" element={<WorkshopsPage />} />
        <Route path="/blueprint" element={<BlueprintPage />} />
        <Route path="/runbook" element={<RunbookPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/diagnose" element={<DiagnosePage />} />
        <Route path="/start" element={<StartSynqPage />} />

        {/* Aliases & legacy route redirects */}
        <Route path="/labs" element={<Navigate to="/workshops" replace />} />
        <Route path="/capabilities" element={<Navigate to="/mechanisms" replace />} />
        <Route path="/use-cases" element={<Navigate to="/how-it-works" replace />} />
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
