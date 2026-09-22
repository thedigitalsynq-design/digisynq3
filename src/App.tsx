import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';

// ── Public website components ──────────────────────────────
import { SiteNav } from './components/website/SiteNav';
import { SiteFooter } from './components/website/SiteFooter';
import { HomePage } from './pages/website/HomePage';
import { TheSynqPage } from './pages/website/TheSynqPage';
import { HowItWorksPage } from './pages/website/HowItWorksPage';
import { EcosystemPage } from './pages/website/EcosystemPage';
import { StartSynqPage } from './pages/website/StartSynqPage';
import { AboutPage } from './pages/website/AboutPage';
import { WorkshopsPage } from './pages/website/WorkshopsPage';
import { InsightsPage } from './pages/website/InsightsPage';

// ── Cinema Matrix (internal tool — lazy loaded) ────────────
const MatrixApp = lazy(() => import('./MatrixApp'));

// ── Context Providers ─────────────────────────────────────
import { ToastProvider } from './components/Toaster';
import { PhaseProvider } from './components/PhaseContext';
import { ProjectProvider } from './components/ProjectContext';
import { RoomProvider } from './components/RoomState';
import { ThemeProvider } from './components/ThemeContext';
import { AuthProvider } from './components/AuthContext';
import { LiveDataProvider } from './context/LiveDataContext';

// ── Page loading fallback ────────────────────────────────
function PageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05060D]">
      <div className="flex items-center gap-3">
        <div className="w-4 h-4 rounded-full border-2 border-white/15 border-t-[#5CE1E6] animate-spin" />
        <span className="text-sm text-white/40 font-mono">Loading...</span>
      </div>
    </div>
  );
}

// ── Public website layout wrapper ────────────────────────
function WebsiteLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#05060D] text-[#ECEEF5] selection:bg-[#5CE1E6] selection:text-[#03040A]">
      <SiteNav />
      <div className="flex-1">
        {children}
      </div>
      <SiteFooter />
    </div>
  );
}

// ── Route detector ───────────────────────────────────────
function AppRoutes() {
  const location = useLocation();
  const isMatrix = location.pathname.startsWith('/matrix');

  if (isMatrix) {
    return (
      <Suspense fallback={<PageFallback />}>
        <MatrixApp />
      </Suspense>
    );
  }

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
        {/* Legacy routes redirect home */}
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
      <AuthProvider>
        <ThemeProvider>
          <ToastProvider>
            <PhaseProvider>
              <ProjectProvider>
                <LiveDataProvider>
                  <RoomProvider>
                    <AppRoutes />
                  </RoomProvider>
                </LiveDataProvider>
              </ProjectProvider>
            </PhaseProvider>
          </ToastProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
