const { db } = require('./database');

const fs = require('fs');
const path = require('path');

const TMDB_BASE = 'https://api.themoviedb.org/3';
const KEY_FILE = path.join(__dirname, '.tmdb-key');
const KEY_FILE_START = 'TMDB_API_KEY=';

function loadSavedKey() {
  try {
    const content = fs.readFileSync(KEY_FILE, 'utf8');
    const m = content.match(/^TMDB_API_KEY=(.+)$/m);
    if (m) return m[1].trim();
  } catch {}
  return '';
}

let TMDB_KEY = process.env.TMDB_API_KEY || loadSavedKey() || '';
let TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN || '';

function setApiKey(key) {
  TMDB_KEY = key.trim();
  try {
    fs.writeFileSync(KEY_FILE, `${KEY_FILE_START}${TMDB_KEY}\n`);
  } catch (e) {
    console.warn('Could not persist TMDB key:', e.message);
  }
}

function hasApiKey() {
  return TMDB_KEY.length > 0 || TMDB_ACCESS_TOKEN.length > 0;
}

function getHeaders() {
  const headers = { 'Content-Type': 'application/json' };
  if (TMDB_ACCESS_TOKEN) {
    headers.Authorization = `Bearer ${TMDB_ACCESS_TOKEN}`;
  }
  return headers;
}

async function tmdbFetch(endpoint, params = {}) {
  const query = new URLSearchParams(params);
  if (TMDB_KEY) query.set('api_key', TMDB_KEY);
  const url = `${TMDB_BASE}${endpoint}?${query.toString()}`;
  const res = await fetch(url, { headers: getHeaders() });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`TMDB ${endpoint} failed (${res.status}): ${text.slice(0, 200)}`);
  }
  return res.json();
}

function mapMovie(m) {
  return {
    tmdb_id: m.id,
    title: m.title || m.name || 'Unknown',
    overview: m.overview || '',
    poster_path: m.poster_path ? `https://image.tmdb.org/t/p/w500${m.poster_path}` : null,
    backdrop_path: m.backdrop_path ? `https://image.tmdb.org/t/p/w1280${m.backdrop_path}` : null,
    release_date: m.release_date || m.first_air_date || '',
    vote_average: m.vote_average || 0,
    vote_count: m.vote_count || 0,
    genres: Array.isArray(m.genre_ids) ? JSON.stringify(m.genre_ids) : (m.genres ? JSON.stringify(m.genres.map(g => g.name)) : JSON.stringify([])),
    runtime: m.runtime || m.episode_run_time?.[0] || null,
  };
}

function upsertMovie(movie) {
  const mapped = mapMovie(movie);
  if (!mapped.tmdb_id) return null;
  db.prepare(`
    INSERT INTO movies (tmdb_id, title, overview, poster_path, backdrop_path, release_date, vote_average, vote_count, genres, runtime)
    VALUES (@tmdb_id, @title, @overview, @poster_path, @backdrop_path, @release_date, @vote_average, @vote_count, @genres, @runtime)
    ON CONFLICT(tmdb_id) DO UPDATE SET
      title=excluded.title,
      overview=excluded.overview,
      poster_path=excluded.poster_path,
      backdrop_path=excluded.backdrop_path,
      release_date=excluded.release_date,
      vote_average=excluded.vote_average,
      vote_count=excluded.vote_count,
      genres=excluded.genres,
      runtime=excluded.runtime
  `).run(mapped);

  const row = db.prepare('SELECT * FROM movies WHERE tmdb_id = ?').get(mapped.tmdb_id);
  if (m.credits) {
    const director = m.credits.crew?.find(c => c.job === 'Director')?.name || null;
    const cast = m.credits.cast?.slice(0, 8).map(c => c.name).join(', ') || null;
    db.prepare('UPDATE movies SET director = ?, cast_names = ? WHERE id = ?').run(director, cast, row.id);
    row.director = director;
    row.cast_names = cast;
  }
  return row;
}

async function getOrFetchMovie(tmdbId) {
  const existing = db.prepare('SELECT * FROM movies WHERE tmdb_id = ?').get(tmdbId);
  if (existing && existing.director) return existing;

  const m = await tmdbFetch(`/movie/${tmdbId}`, { append_to_response: 'credits' });
  return upsertMovie(m);
}

async function searchAndImport(query, page = 1) {
  const data = await tmdbFetch('/search/movie', { query, page, include_adult: 'false' });
  const imported = [];
  for (const m of data.results.slice(0, 12)) {
    const row = upsertMovie(m);
    if (row) imported.push(row);
  }
  return { results: imported, total_results: data.total_results, page: data.page, total_pages: data.total_pages };
}

async function fetchTrending(page = 1) {
  const data = await tmdbFetch('/trending/movie/week', { page });
  const imported = [];
  for (const m of data.results.slice(0, 20)) {
    const row = upsertMovie(m);
    if (row) imported.push(row);
  }
  return imported;
}

async function fetchPopular(page = 1) {
  const data = await tmdbFetch('/movie/popular', { page });
  const imported = [];
  for (const m of data.results.slice(0, 20)) {
    const row = upsertMovie(m);
    if (row) imported.push(row);
  }
  return imported;
}

async function fetchTopRated(page = 1) {
  const data = await tmdbFetch('/movie/top_rated', { page });
  const imported = [];
  for (const m of data.results.slice(0, 20)) {
    const row = upsertMovie(m);
    if (row) imported.push(row);
  }
  return imported;
}

async function refreshMovie(row) {
  try {
    const m = await tmdbFetch(`/movie/${row.tmdb_id}`, { append_to_response: 'credits,similar' });
    const updated = upsertMovie(m);
    if (m.similar?.results) {
      for (const sim of m.similar.results.slice(0, 6)) upsertMovie(sim);
    }
    return updated;
  } catch (e) {
    console.warn('refreshMovie failed:', e.message);
    return row;
  }
}

module.exports = {
  hasApiKey,
  setApiKey,
  getOrFetchMovie,
  searchAndImport,
  fetchTrending,
  fetchPopular,
  fetchTopRated,
  refreshMovie,
  tmdbFetch,
};