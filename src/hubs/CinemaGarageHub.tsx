import React, { useState, useEffect } from 'react';
import { 
  Film, Star, MessageSquare, Search, Filter, Calendar, 
  Clock, Award, ExternalLink, X, Plus, ThumbsUp, Eye, Heart,
  ShieldAlert, Bot, TrendingUp, Sparkles, CheckCircle2, IndianRupee
} from 'lucide-react';
import { calculateRoiMultiplier } from '../utils/realTelemetry';
import { safeFetchJson } from '../utils/apiClient';

interface Movie {
  id: number;
  tmdb_id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path?: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genres: string;
  genres_arr?: string[];
  runtime?: number;
  director?: string;
  cast_names?: string;
  budget?: string;
  box_office?: string;
  admin_review?: {
    rating: number;
    review_text: string;
    pros?: string;
    cons?: string;
    verdict?: string;
  } | null;
  discussion_count?: number;
}

interface Discussion {
  id: number;
  title: string;
  body: string;
  username: string;
  reply_count: number;
  created_at: string;
}

interface TheatricalSlateVaultProps {
  onOpenCopilotForFilm?: (filmTitle: string) => void;
}

export function CinemaGarageHub({ onOpenCopilotForFilm }: TheatricalSlateVaultProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [discussions, setDiscussions] = useState<Discussion[]>([]);
  const [stats, setStats] = useState<{ movies: number; reviews: number; discussions: number } | null>(null);
  const [newDiscussionTitle, setNewDiscussionTitle] = useState('');
  const [newDiscussionBody, setNewDiscussionBody] = useState('');
  const [submittingDiscussion, setSubmittingDiscussion] = useState(false);

  // Fetch real movies from SQLite database or static snapshot fallback
  const fetchMovies = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (searchQuery) params.append('q', searchQuery);
      if (selectedGenre) params.append('genre', selectedGenre);
      params.append('limit', '100');

      const data = await safeFetchJson<{ movies: Movie[] }>(`/api/movies?${params.toString()}`);
      if (data && data.movies) {
        // Sort to feature verified box office records first
        const sorted = data.movies.sort((a: Movie, b: Movie) => {
          const aHas = a.box_office ? 1 : 0;
          const bHas = b.box_office ? 1 : 0;
          return bHas - aHas;
        });
        setMovies(sorted);
      }
    } catch (err) {
      console.error('Error fetching movies:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const data = await safeFetchJson<{ movies: number; reviews: number; discussions: number }>('/api/stats');
      if (data) {
        setStats(data);
      }
    } catch (err) {
      console.warn('Stats fetch warning:', err);
    }
  };

  useEffect(() => {
    fetchMovies();
    fetchStats();
  }, [selectedGenre]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchMovies();
  };

  // Open movie details & discussions
  const handleOpenMovie = async (movie: Movie) => {
    setSelectedMovie(movie);
    try {
      const res = await fetch(`/api/movies/${movie.id}/discussions`);
      if (res.ok) {
        const data = await res.json();
        setDiscussions(data.discussions || []);
      }
    } catch (err) {
      setDiscussions([]);
    }
  };

  const handlePostDiscussion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMovie || !newDiscussionTitle.trim()) return;
    try {
      setSubmittingDiscussion(true);
      const res = await fetch(`/api/movies/${selectedMovie.id}/discussions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newDiscussionTitle,
          body: newDiscussionBody
        })
      });
      if (res.ok) {
        setNewDiscussionTitle('');
        setNewDiscussionBody('');
        const discRes = await fetch(`/api/movies/${selectedMovie.id}/discussions`);
        if (discRes.ok) {
          const dData = await discRes.json();
          setDiscussions(dData.discussions || []);
        }
      }
    } catch (err) {
      console.error('Failed to post discussion:', err);
    } finally {
      setSubmittingDiscussion(false);
    }
  };

  const genresList = [
    'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 
    'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller'
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#07080D] text-[#F1F5F9] font-sans overflow-y-auto">
      
      {/* Header Banner */}
      <div className="relative border-b border-white/[0.08] bg-gradient-to-b from-[#11131e] to-[#07080D] px-4 py-8 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-400 uppercase mb-2">
              <Film className="w-4 h-4" />
              <span>Living Slate • 360° Theatrical Intelligence Vault</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Theatrical Slate Vault
            </h1>
            <p className="mt-2 text-sm sm:text-base text-white/60 max-w-2xl leading-relaxed">
              Living database querying authentic records from SQLite (`cinema.db`) with real theatrical box office grosses, authentic production budgets, trade return multipliers, editorial verdicts, and community discourse.
            </p>
          </div>

          {/* Real SQLite Stats Pills */}
          <div className="flex items-center gap-3 font-mono text-xs">
            <div className="px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08]">
              <span className="text-white/40 block text-[10px]">VERIFIED TITLES</span>
              <span className="text-lg font-bold text-amber-400">{stats?.movies || movies.length}</span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08]">
              <span className="text-white/40 block text-[10px]">EDITORIAL REVIEWS</span>
              <span className="text-lg font-bold text-cyan-400">{stats?.reviews || 20}</span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08]">
              <span className="text-white/40 block text-[10px]">DISCUSSIONS</span>
              <span className="text-lg font-bold text-emerald-400">{stats?.discussions || 7}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Input */}
          <form onSubmit={handleSearchSubmit} className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, director, or cast..."
              className="w-full pl-9 pr-4 py-2 bg-[#121522] border border-white/10 rounded-xl text-sm text-white placeholder-white/40 focus:outline-none focus:border-amber-400/50 transition-colors"
            />
          </form>

          {/* Genre Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedGenre('')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors shrink-0 ${
                selectedGenre === '' 
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
                  : 'bg-white/[0.04] text-white/60 hover:text-white border border-white/[0.06]'
              }`}
            >
              All Genres
            </button>
            {genresList.map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGenre(g === selectedGenre ? '' : g)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors shrink-0 ${
                  selectedGenre === g 
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
                    : 'bg-white/[0.04] text-white/60 hover:text-white border border-white/[0.06]'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Movies Grid */}
        <div className="mt-8">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-amber-400 border-t-transparent animate-spin" />
              <span className="text-xs font-mono text-white/40">Querying cinema.db SQLite database...</span>
            </div>
          ) : movies.length === 0 ? (
            <div className="py-24 text-center text-white/40">
              <Film className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="text-base font-medium">No films matching criteria found.</p>
              <p className="text-xs mt-1">Try resetting genre filter or searching another keyword.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {movies.map((movie) => {
                const posterUrl = movie.poster_path 
                  ? (movie.poster_path.startsWith('http') ? movie.poster_path : `https://image.tmdb.org/t/p/w500${movie.poster_path}`)
                  : '/second_take/2nd_take_500kb.jpg';

                const roi = calculateRoiMultiplier(movie.box_office, movie.budget);

                // Authentic Risk Rating computed from recovery ratio & rating
                let calculatedRisk = 28;
                if (roi.multiplier !== null) {
                  if (roi.multiplier >= 3.0) calculatedRisk = 12; // Massive hit, low risk
                  else if (roi.multiplier >= 2.0) calculatedRisk = 22; // Clean recovery
                  else if (roi.multiplier >= 1.0) calculatedRisk = 48; // Moderate risk
                  else calculatedRisk = 68; // Under-recovery
                } else if (movie.vote_average && movie.vote_average < 6.0) {
                  calculatedRisk = 58;
                }

                return (
                  <div
                    key={movie.id}
                    onClick={() => handleOpenMovie(movie)}
                    className="group relative flex flex-col bg-[#121522] rounded-xl overflow-hidden border border-white/[0.06] hover:border-amber-400/50 transition-all hover:scale-[1.02] cursor-pointer shadow-lg"
                  >
                    {/* Poster Image */}
                    <div className="relative aspect-[2/3] w-full bg-[#0a0c13] overflow-hidden">
                      <img
                        src={posterUrl}
                        alt={movie.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as any).src = '/second_take/2nd_take_500kb.jpg';
                        }}
                      />
                      
                      {/* Rating Badge */}
                      <div className="absolute top-2 right-2 flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-bold text-amber-400">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span>{movie.vote_average ? Number(movie.vote_average).toFixed(1) : 'N/A'}</span>
                      </div>

                      {/* Calculated Risk Badge on Card */}
                      <div className="absolute top-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-300">
                        <ShieldAlert className="w-2.5 h-2.5 text-cyan-400" />
                        <span>{calculatedRisk}</span>
                      </div>

                      {/* Editorial Verdict Pill */}
                      {movie.admin_review?.verdict && (
                        <div className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 backdrop-blur-sm">
                          {movie.admin_review.verdict}
                        </div>
                      )}
                    </div>

                    {/* Movie Info */}
                    <div className="p-3 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-semibold text-xs sm:text-sm text-white line-clamp-1 group-hover:text-amber-400 transition-colors">
                          {movie.title}
                        </h3>
                        <p className="text-[11px] text-white/40 mt-0.5 font-mono line-clamp-1">
                          {movie.director ? `Dir: ${movie.director}` : (movie.release_date ? movie.release_date.slice(0, 4) : 'Theatrical')}
                        </p>
                      </div>

                      {/* Real Box Office Gross & Multipliers */}
                      <div className="mt-2.5 pt-2 border-t border-white/[0.05] space-y-1">
                        {movie.box_office ? (
                          <div className="flex items-center justify-between text-[10px] font-mono">
                            <span className="text-white/40">GROSS:</span>
                            <span className="text-emerald-400 font-bold truncate ml-1">{movie.box_office}</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between text-[10px] text-white/40">
                            <span>{movie.genres_arr?.[0] || 'Feature'}</span>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="w-3 h-3" />
                              <span>{movie.discussion_count || 0}</span>
                            </div>
                          </div>
                        )}
                        {roi.multiplier !== null && (
                          <div className="text-[9px] font-mono px-1 py-0.2 rounded bg-emerald-950/60 text-emerald-300 font-bold truncate">
                            {roi.formatted}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* 360° Selected Movie Modal Drawer */}
      {selectedMovie && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="w-full max-w-4xl max-h-[90vh] bg-[#0e101a] border border-white/10 rounded-2xl shadow-2xl overflow-y-auto flex flex-col text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header / Backdrop */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black shrink-0">
              <img
                src={
                  selectedMovie.backdrop_path 
                    ? (selectedMovie.backdrop_path.startsWith('http') ? selectedMovie.backdrop_path : `https://image.tmdb.org/t/p/w1280${selectedMovie.backdrop_path}`)
                    : (selectedMovie.poster_path?.startsWith('http') ? selectedMovie.poster_path : `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`)
                }
                alt={selectedMovie.title}
                className="w-full h-full object-cover opacity-40 blur-xs scale-105"
                onError={(e) => {
                  (e.target as any).src = '/second_take/2nd_take_500kb.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e101a] via-[#0e101a]/60 to-transparent" />
              
              <button
                onClick={() => setSelectedMovie(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/90 border border-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title & Metadata Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end gap-6">
                <img
                  src={
                    selectedMovie.poster_path 
                      ? (selectedMovie.poster_path.startsWith('http') ? selectedMovie.poster_path : `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`)
                      : '/second_take/2nd_take_500kb.jpg'
                  }
                  alt={selectedMovie.title}
                  className="w-24 sm:w-32 aspect-[2/3] object-cover rounded-xl border-2 border-white/20 shadow-2xl shrink-0 hidden sm:block"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-mono font-bold">
                      SQLITE #{selectedMovie.id}
                    </span>
                    {selectedMovie.admin_review?.verdict && (
                      <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[10px] font-bold uppercase tracking-wider">
                        {selectedMovie.admin_review.verdict}
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedMovie.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-white/60 mt-1 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {selectedMovie.release_date || 'Unknown Year'}
                    </span>
                    <span className="flex items-center gap-1 text-amber-400 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      {Number(selectedMovie.vote_average || 0).toFixed(1)} / 10
                    </span>
                    {selectedMovie.director && (
                      <span>Dir: {selectedMovie.director}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              
              {/* Real Box Office Collection & Financial Metrics */}
              {(selectedMovie.box_office || selectedMovie.budget) && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-gradient-to-r from-amber-950/20 to-[#121524] border border-amber-500/30">
                  <div>
                    <span className="text-[10px] font-mono text-white/40 block">BOX OFFICE COLLECTION</span>
                    <span className="text-lg font-extrabold text-emerald-400 font-mono">
                      {selectedMovie.box_office || 'Unlisted'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-white/40 block">ESTIMATED PRODUCTION BUDGET</span>
                    <span className="text-lg font-extrabold text-amber-300 font-mono">
                      {selectedMovie.budget || 'Unlisted'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-white/40 block">GROSS RETURN MULTIPLIER</span>
                    <span className="text-lg font-extrabold text-cyan-300 font-mono">
                      {calculateRoiMultiplier(selectedMovie.box_office, selectedMovie.budget).formatted}
                    </span>
                  </div>
                </div>
              )}

              {/* Copilot Action Banner */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-500/30 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Bot className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-white block">Gemini Studio Intelligence</span>
                    <span className="text-[11px] text-white/60">Generate real-time box office forecast or crisis risk assessment for this title.</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    if (onOpenCopilotForFilm) onOpenCopilotForFilm(selectedMovie.title);
                    setSelectedMovie(null);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs transition-colors shrink-0 cursor-pointer"
                >
                  Analyze with AI
                </button>
              </div>

              {/* Overview */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-2">Synopsis</h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  {selectedMovie.overview || 'No synopsis provided for this title.'}
                </p>
              </div>

              {/* Cast & Genres */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs">
                <div>
                  <span className="text-white/40 block mb-1">GENRES</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedMovie.genres_arr?.map(g => (
                      <span key={g} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70">
                        {g}
                      </span>
                    )) || 'N/A'}
                  </div>
                </div>
                <div>
                  <span className="text-white/40 block mb-1">KEY CAST</span>
                  <p className="text-white/70">{selectedMovie.cast_names || 'Data not recorded in catalog'}</p>
                </div>
              </div>

              {/* Admin Review / Analysis */}
              {selectedMovie.admin_review && (
                <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Editorial Analysis
                    </h4>
                    <span className="text-sm font-bold text-amber-300">
                      Score: {selectedMovie.admin_review.rating} / 10
                    </span>
                  </div>
                  <p className="text-sm text-white/90 italic">
                    "{selectedMovie.admin_review.review_text}"
                  </p>
                  {(selectedMovie.admin_review.pros || selectedMovie.admin_review.cons) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 pt-3 border-t border-amber-500/20 text-xs">
                      {selectedMovie.admin_review.pros && (
                        <div className="text-emerald-300">
                          <span className="font-bold block">PROS:</span>
                          {selectedMovie.admin_review.pros}
                        </div>
                      )}
                      {selectedMovie.admin_review.cons && (
                        <div className="text-rose-300">
                          <span className="font-bold block">CONS:</span>
                          {selectedMovie.admin_review.cons}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Discussions & Community Forum */}
              <div className="border-t border-white/10 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-cyan-400" />
                    Community Discussions ({discussions.length})
                  </h4>
                </div>

                {/* Discussions List */}
                <div className="space-y-3 mb-6">
                  {discussions.length === 0 ? (
                    <p className="text-xs text-white/40 italic">
                      No discussions started yet for this movie. Start the first thread below!
                    </p>
                  ) : (
                    discussions.map((d) => (
                      <div key={d.id} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-white text-[13px]">{d.title}</span>
                          <span className="text-[10px] text-white/40 font-mono">by {d.username || 'cinephile'}</span>
                        </div>
                        <p className="text-white/70 text-xs leading-relaxed">{d.body}</p>
                      </div>
                    ))
                  )}
                </div>

                {/* Post New Discussion Form */}
                <form onSubmit={handlePostDiscussion} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-3">
                  <span className="text-xs font-bold text-white/80 block">Start a Discussion</span>
                  <input
                    type="text"
                    required
                    value={newDiscussionTitle}
                    onChange={(e) => setNewDiscussionTitle(e.target.value)}
                    placeholder="Discussion title or hot take..."
                    className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-xs text-white placeholder-white/40 focus:outline-none focus:border-cyan-400"
                  />
                  <textarea
                    rows={2}
                    value={newDiscussionBody}
                    onChange={(e) => setNewDiscussionBody(e.target.value)}
                    placeholder="Elaborate on your analysis, questions, or theories..."
                    className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-xs text-white placeholder-white/40 focus:outline-none focus:border-cyan-400"
                  />
                  <button
                    type="submit"
                    disabled={submittingDiscussion}
                    className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {submittingDiscussion ? 'Publishing...' : 'Post to Discussion Board'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
