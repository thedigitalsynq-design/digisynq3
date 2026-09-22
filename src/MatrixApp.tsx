/**
 * MatrixApp.tsx — Cinema Nervous System Internal Tool
 * 
 * This wraps the existing cinema operations dashboard (5-hub matrix)
 * and serves it at the /matrix route path.
 * 
 * The public DIGISYNQ website is served at / (root).
 * This internal tool is accessed via /matrix.
 */

import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { UnifiedMasterNav, OperatingLens } from './components/UnifiedMasterNav';
import { UniversalCommandPalette } from './components/UniversalCommandPalette';
import { GlobalTelemetryTicker } from './components/GlobalTelemetryTicker';
import { GlobalGeminiCopilot } from './components/GlobalGeminiCopilot';
import { UnifiedCommandDeck } from './components/UnifiedCommandDeck';
import { WarRoomHub } from './hubs/WarRoomHub';
import { CinemaGarageHub } from './hubs/CinemaGarageHub';
import { SquareSynqHub } from './hubs/SquareSynqHub';
import { DigiSynqPortalHub } from './hubs/DigiSynqPortalHub';
import { setAudioEnabled as setSquareAudio } from './utils/audio';
import { safeFetchJson } from './utils/apiClient';

export default function MatrixApp() {
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
      '/matrix/signals', '/matrix/incidents', '/matrix/narratives', '/matrix/social',
      '/matrix/media', '/matrix/influencers', '/matrix/audience', '/matrix/response',
      '/matrix/recovery', '/matrix/reports', '/matrix/leaks', '/matrix/analyst',
      '/matrix/films', '/matrix/film', '/matrix/markets'
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
    safeFetchJson('/api/stats').then(data => {
      if (data && data.movies) setMoviesCount(data.movies);
    });
  }, []);

  const handleToggleAudio = () => {
    const next = !audioEnabled;
    setAudioEnabled(next);
    setSquareAudio(next);
  };

  const handleNavigateWarRoom = (path: string) => {
    setCurrentLens('risk');
    navigate(path.startsWith('/matrix') ? path : `/matrix${path}`);
  };

  const handleOpenCopilotForFilm = (_filmTitle: string) => {
    setCopilotOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#07080D] text-[#F1F5F9] font-sans selection:bg-cyan-500 selection:text-black">

      {/* Back to website link */}
      <div className="bg-[#07080D] border-b border-white/[0.05] px-4 py-1.5 flex items-center gap-3">
        <a href="/" className="text-[10px] font-mono text-white/30 hover:text-[#5CE1E6] transition-colors">
          ← DIGISYNQ.COM
        </a>
        <span className="text-white/10">|</span>
        <span className="text-[10px] font-mono text-white/20">CINEMA MATRIX — INTERNAL TOOL</span>
      </div>

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

      {/* 4. Global Gemini AI Copilot Drawer */}
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
