import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';

// ── Public website components ──────────────────────────────
import { SiteNav } from './components/SiteNav';
import { SiteFooter } from './components/SiteFooter';
import { HomePage } from './pages/HomePage';
import { TheSynqPage } from './pages/TheSynqPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { EcosystemPage } from './pages/EcosystemPage';
import { StartSynqPage } from './pages/StartSynqPage';
import { AboutPage } from './pages/AboutPage';
import { WorkshopsPage } from './pages/WorkshopsPage';
import { InsightsPage } from './pages/InsightsPage';

// ── Public website layout wrapper ────────────────────────
function WebsiteLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  // Smooth scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#06130E] jade-horizon-bg text-[#ECEEF5] selection:bg-[#23B272] selection:text-[#03040A]">
      <SiteNav />
      {/* Keyed fade — every route enters with the shared Apple ease */}
      <div key={location.pathname} className="flex-1 animate-page-fade">
        {children}
      </div>
      <SiteFooter />
    </div>
  );
}

// ── Route detector ───────────────────────────────────────
function AppRoutes() {
  return (
    <WebsiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/the-synq" element={<TheSynqPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/ecosystem" element={<EcosystemPage />} />
        <Route path="/capabilities" element={<Navigate to="/the-synq#capabilities" replace />} />
        <Route path="/use-cases" element={<Navigate to="/the-synq#use-cases" replace />} />
        <Route path="/workshops" element={<WorkshopsPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/start" element={<StartSynqPage />} />
        {/* Legacy & /matrix routes redirect home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </WebsiteLayout>
  );
}

// ── Root App ─────────────────────────────────────────────
export default function App() {
  const isGhPages = typeof window !== 'undefined' && window.location.pathname.includes('/digisynq3');
  const basename = isGhPages ? '/digisynq3' : '';

  return (
    <BrowserRouter basename={basename}>
      <AppRoutes />
    </BrowserRouter>
  );
}
