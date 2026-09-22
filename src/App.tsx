import React, { useState, useEffect } from 'react';
import { BrowserRouter, useNavigate, useLocation } from 'react-router-dom';
import { UnifiedMasterNav, OperatingLens } from './components/UnifiedMasterNav';
import { UniversalCommandPalette } from './components/UniversalCommandPalette';
import { GlobalTelemetryTicker } from './components/GlobalTelemetryTicker';
import { GlobalGeminiCopilot } from './components/GlobalGeminiCopilot';
import { UnifiedCommandDeck } from './components/UnifiedCommandDeck';
import { WarRoomHub } from './hubs/WarRoomHub';
import { CinemaGarageHub } from './hubs/CinemaGarageHub';
import { SquareSynqHub } from './hubs/SquareSynqHub';
import { DigiSynqPortalHub } from './hubs/DigiSynqPortalHub';

// Context Providers
import { ToastProvider } from './components/Toaster';
import { PhaseProvider } from './components/PhaseContext';
import { ProjectProvider } from './components/ProjectContext';
import { RoomProvider } from './components/RoomState';
import { ThemeProvider } from './components/ThemeContext';
import { AuthProvider } from './components/AuthContext';
import { LiveDataProvider } from './context/LiveDataContext';
import { setAudioEnabled as setSquareAudio } from './utils/audio';

function UnifiedAppContent() {
  const [currentLens, setCurrentLens] = useState<OperatingLens>('overview');
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [copilotOpen, setCopilotOpen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [moviesCount, setMoviesCount] = useState(82);

  const navigate = useNavigate();
  const location = useLocation();

  // Synchronize route if user lands directly on a War Room path
  useEffect(() => {
    const p = location.pathname;
    const warRoomRoutes = [
      '/signals', '/incidents', '/narratives', '/social', '/media', 
      '/influencers', '/audience', '/response', '/recovery', '/reports', 
      '/leaks', '/analyst', '/films', '/film', '/markets'
    ];
    if (warRoomRoutes.some(r => p.startsWith(r))) {
      setCurrentLens('risk');
    }
  }, [location.pathname]);

  // Global keyboard shortcuts: Ctrl+K for palette, Ctrl+J for Copilot
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(prev => !prev);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'j') {
        e.preventDefault();
        setCopilotOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Fetch SQLite movie count
  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => {
        if (data.movies) setMoviesCount(data.movies);
      })
      .catch(() => {});
  }, []);

  const handleToggleAudio = () => {
    const next = !audioEnabled;
    setAudioEnabled(next);
    setSquareAudio(next);
  };

  const handleNavigateWarRoom = (path: string) => {
    setCurrentLens('risk');
    navigate(path);
  };

  const handleOpenCopilotForFilm = (filmTitle: string) => {
    setCopilotOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#07080D] text-[#F1F5F9] font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* 1. Global Navigation Bar */}
      <UnifiedMasterNav
        currentLens={currentLens}
        onSelectLens={(l) => setCurrentLens(l)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenCopilot={() => setCopilotOpen(true)}
        audioEnabled={audioEnabled}
        onToggleAudio={handleToggleAudio}
        moviesCount={moviesCount}
      />

      {/* 2. Global Live Telemetry Ticker */}
      <GlobalTelemetryTicker />

      {/* 3. Dynamic Studio Operating Lens View */}
      <div className="flex-1 flex flex-col relative z-10">
        {currentLens === 'overview' && (
          <UnifiedCommandDeck
            onNavigateLens={(lens) => setCurrentLens(lens)}
            onOpenCopilot={() => setCopilotOpen(true)}
          />
        )}
        {currentLens === 'slate' && (
          <CinemaGarageHub onOpenCopilotForFilm={handleOpenCopilotForFilm} />
        )}
        {currentLens === 'risk' && (
          <WarRoomHub onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
        )}
        {currentLens === 'velocity' && (
          <SquareSynqHub />
        )}
        {currentLens === 'ecosystem' && (
          <DigiSynqPortalHub />
        )}
      </div>

      {/* 4. Global Gemini AI War Room Copilot Drawer */}
      <GlobalGeminiCopilot
        isOpen={copilotOpen}
        onClose={() => setCopilotOpen(false)}
        onNavigateLens={(l) => setCurrentLens(l as OperatingLens)}
      />

      {/* 5. Universal Command Palette (Ctrl+K) */}
      <UniversalCommandPalette
        open={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectLens={(l) => setCurrentLens(l)}
        onOpenCopilot={() => setCopilotOpen(true)}
        onNavigateWarRoom={handleNavigateWarRoom}
      />
    </div>
  );
}

export default function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/+$/, '') || '/';

  return (
    <BrowserRouter basename={basename}>
      <AuthProvider>
        <ThemeProvider>
          <ToastProvider>
            <PhaseProvider>
              <ProjectProvider>
                <LiveDataProvider>
                  <RoomProvider>
                    <UnifiedAppContent />
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
