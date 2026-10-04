import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';

// ── Master website components & segregated pages ─────────────
import { SiteNav } from './components/SiteNav';
import { SiteFooter } from './components/SiteFooter';
import { HomePage } from './pages/HomePage';
import { MechanismsPage } from './pages/MechanismsPage';
import { ContinuumPage } from './pages/ContinuumPage';
import { StakeholdersPage } from './pages/StakeholdersPage';
import { EnginesPage } from './pages/EnginesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { WorkshopsPage } from './pages/WorkshopsPage';
import { BlueprintPage } from './pages/BlueprintPage';
import { AboutPage } from './pages/AboutPage';
import { StartSynqPage } from './pages/StartSynqPage';
import { TheSynqPage } from './pages/TheSynqPage';
import { EcosystemPage } from './pages/EcosystemPage';
import { RunbookPage } from './pages/RunbookPage';
import { InsightsPage } from './pages/InsightsPage';

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
        {children}
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
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/the-synq" element={<TheSynqPage />} />
        <Route path="/workshops" element={<WorkshopsPage />} />
        <Route path="/blueprint" element={<BlueprintPage />} />
        <Route path="/runbook" element={<RunbookPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/start" element={<StartSynqPage />} />

        {/* Aliases & legacy route redirects */}
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
