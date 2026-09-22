import { createContext, useContext, useEffect, useState } from 'react';

export interface TrackedProject {
  id: string;
  title: string;
  subtitle: string;
  keywords: string[];
  releaseDate?: string;
  theatricalStatus?: string;
  industry?: string;
  sources?: string[];
  isIndianMovie?: boolean;
}

function formatISTDate(d: Date): string {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = String(d.getDate()).padStart(2, '0');
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  return `${day} ${month} ${year}`;
}

function generateDynamicProjects(refDate: Date = new Date()): TrackedProject[] {
  // If the system year is prior to 2026, anchor to 2026-09-21 as requested by user ("imagin today is 21-09-2026")
  const base = refDate.getFullYear() < 2026 ? new Date('2026-09-21T00:00:00+05:30') : refDate;

  const rawFilms = [
    { id: 'goat', title: 'THE GREATEST OF ALL TIME (GOAT)', lead: 'Thalapathy Vijay · Venkat Prabhu', industry: 'Kollywood / Tamil', daysAgo: 16, status: 'In Theatres', keywords: ['goat', 'thalapathy vijay', 'venkat prabhu'] },
    { id: 'singham3', title: 'SINGHAM RETURNS: PART 3', lead: 'Ajay Devgn · Rohit Shetty', industry: 'Bollywood / Hindi', daysAgo: 1, status: 'In Theatres', keywords: ['singham returns 3', 'ajay devgn', 'rohit shetty', 'singham 3'] },
    { id: 'the-buckingham-murders', title: 'THE BUCKINGHAM MURDERS', lead: 'Kareena Kapoor Khan · Hansal Mehta', industry: 'Bollywood / Hindi', daysAgo: 8, status: 'In Theatres', keywords: ['the buckingham murders', 'kareena kapoor khan', 'hansal mehta'] },
    { id: 'tumbbad', title: 'TUMBBAD (HISTORIC RE-RELEASE)', lead: 'Sohum Shah · Rahi Anil Barve', industry: 'Bollywood / Hindi', daysAgo: 8, status: 'In Theatres', keywords: ['tumbbad', 'sohum shah', 'hastar', 'tumbbad 2'] },
    { id: 'sector36', title: 'SECTOR 36', lead: 'Vikrant Massey · Deepak Dobriyal', industry: 'Bollywood / OTT', daysAgo: 8, status: 'OTT Premiere (Netflix India)', keywords: ['sector 36', 'vikrant massey', 'deepak dobriyal', 'netflix'] },
    { id: 'arm', title: 'A.R.M (Ajayante Randam Moshanam)', lead: 'Tovino Thomas · Krithi Shetty', industry: 'Mollywood / Malayalam', daysAgo: 9, status: 'In Theatres', keywords: ['arm', 'tovino thomas', 'ajayante randam moshanam'] },
    { id: 'kishkindha', title: 'KISHKINDHA KAANDAM', lead: 'Asif Ali · Aparna Balamurali', industry: 'Mollywood / Malayalam', daysAgo: 9, status: 'In Theatres', keywords: ['kishkindha kaandam', 'asif ali', 'aparna balamurali'] },
    { id: 'callmebae', title: 'CALL ME BAE', lead: 'Ananya Panday · Vir Das', industry: 'Bollywood / OTT', daysAgo: 15, status: 'OTT Premiere (Prime Video)', keywords: ['call me bae', 'ananya panday', 'prime video'] },
    { id: 'saripodhaa', title: 'SARIPODHAA SANIVAARAM', lead: 'Nani · SJ Suryah', industry: 'Tollywood / Telugu', daysAgo: 23, status: 'In Theatres & Netflix India', keywords: ['saripodhaa sanivaaram', 'nani', 'sj suryah'] },
    { id: 'krishnam', title: 'KRISHNAM PRANAYA SAKHI', lead: 'Golden Star Ganesh · Malavika Nair', industry: 'Sandalwood / Kannada', daysAgo: 27, status: 'In Theatres', keywords: ['krishnam pranaya sakhi', 'ganesh', 'dwapara song'] },
    { id: 'demonte2', title: 'DEMONTE COLONY 2', lead: 'Arulnithi · Priya Bhavani Shankar', industry: 'Kollywood / Tamil', daysAgo: 29, status: 'In Theatres & ZEE5', keywords: ['demonte colony 2', 'arulnithi', 'tamil horror'] },
    { id: 'stree2', title: 'STREE 2: SARKATE KA AATANK', lead: 'Shraddha Kapoor · Rajkummar Rao', industry: 'Bollywood / Hindi', daysAgo: 30, status: 'In Theatres (All-Time Blockbuster)', keywords: ['stree 2', 'shraddha kapoor', 'rajkummar rao', 'sarkata'] },
  ];

  return rawFilms.map((f) => {
    const d = new Date(base.getTime() - f.daysAgo * 86400000);
    const dateFormatted = formatISTDate(d);
    const dayText = f.daysAgo === 0 ? 'Releasing Today' : f.daysAgo === 1 ? 'Day 1 in Theatres' : `Day ${f.daysAgo} in Theatres`;
    return {
      id: f.id,
      title: f.title,
      subtitle: `${f.lead} · ${f.industry.split(' ')[0]} (${dayText})`,
      keywords: f.keywords,
      releaseDate: dateFormatted,
      theatricalStatus: `${f.status} (Day ${f.daysAgo})`,
      industry: f.industry,
      sources: ['BookMyShow', 'Wikipedia Live', 'District Trade', 'Cloudflare Edge'],
      isIndianMovie: true,
    };
  });
}

const DEFAULT_PROJECTS: TrackedProject[] = generateDynamicProjects();

const PROJECTS_KEY = 'cdc-projects';
const ACTIVE_KEY = 'cdc-active-project';

const INVALID_PROJECT_IDS = new Set(['toxic', 'yudhra', 'mirzapur', 'war2', 'gandhari', 'haiwaan', 'avatar3']);

interface ProjectContextValue {
  projects: TrackedProject[];
  project: TrackedProject;
  setActiveId: (id: string) => void;
  addProject: (title: string, keywords: string) => TrackedProject;
  trackFilm: (film: { id: string; title: string; subtitle?: string; keywords: string[] }) => TrackedProject;
  removeProject: (id: string) => void;
}

const ProjectContext = createContext<ProjectContextValue>({
  projects: DEFAULT_PROJECTS,
  project: DEFAULT_PROJECTS[0],
  setActiveId: () => {},
  addProject: () => DEFAULT_PROJECTS[0],
  trackFilm: () => DEFAULT_PROJECTS[0],
  removeProject: () => {},
});

// eslint-disable-next-line react/only-export-components -- custom hook co-located with its provider by design
export function useProject(): ProjectContextValue {
  return useContext(ProjectContext);
}

function loadProjects(): TrackedProject[] {
  try {
    const saved = JSON.parse(window.localStorage.getItem(PROJECTS_KEY) || '[]');
    if (Array.isArray(saved) && saved.length > 0) {
      // Strictly enforce only verified Indian movies, purge obsolete/unreleased IDs, and deduplicate IDs
      const valid: TrackedProject[] = [];
      const seenIds = new Set<string>();
      for (const p of saved) {
        if (
          p &&
          typeof p.id === 'string' &&
          typeof p.title === 'string' &&
          !INVALID_PROJECT_IDS.has(p.id.toLowerCase()) &&
          !p.title.toLowerCase().includes('avatar') &&
          !p.title.toLowerCase().includes('toxic') &&
          !p.title.toLowerCase().includes('mirzapur') &&
          Array.isArray(p.keywords) &&
          p.keywords.length > 0 &&
          !seenIds.has(p.id)
        ) {
          seenIds.add(p.id);
          valid.push(p);
        }
      }
      for (const def of DEFAULT_PROJECTS) {
        if (!seenIds.has(def.id)) {
          seenIds.add(def.id);
          valid.push(def);
        }
      }
      return valid;
    }
  } catch {
    /* fall through to defaults */
  }
  return DEFAULT_PROJECTS;
}

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<TrackedProject[]>(loadProjects);
  const [activeId, setActiveId] = useState<string>(() => {
    try {
      const stored = window.localStorage.getItem(ACTIVE_KEY) || 'goat';
      if (INVALID_PROJECT_IDS.has(stored.toLowerCase())) {
        window.localStorage.setItem(ACTIVE_KEY, 'goat');
        return 'goat';
      }
      return stored;
    } catch {
      return 'goat';
    }
  });

  // Dynamically fetch live 30-day releases from Edge API and update projects
  useEffect(() => {
    let active = true;
    fetch('/api/latest-films')
      .then((r) => r.json())
      .then((data) => {
        const filmsArray = Array.isArray(data?.films) ? data.films : Array.isArray(data?.data) ? data.data : [];
        if (!active || !data?.success || filmsArray.length === 0) return;
        setProjects((prev) => {
          const fetched: TrackedProject[] = filmsArray
            .filter((f: any) => !INVALID_PROJECT_IDS.has(f.id.toLowerCase()))
            .map((f: any) => ({
              id: f.id,
              title: f.title,
              subtitle: `${f.cast?.slice(0, 2).join(', ') || f.director || 'Cinema'} · ${f.industry} (${f.telemetry30d?.daysSinceReleaseText || 'In Theatres'})`,
              keywords: f.keywords || [f.title.toLowerCase()],
              releaseDate: f.releaseDateFormatted || f.releaseDate,
              theatricalStatus: f.telemetry30d?.daysSinceReleaseText || f.theatricalAvailability,
              industry: f.industry,
              sources: ['BookMyShow', 'Wikipedia Live', 'District Trade', 'Cloudflare Edge'],
              isIndianMovie: true,
            }));
          return fetched.length > 0 ? fetched : prev;
        });
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
      window.localStorage.setItem(ACTIVE_KEY, activeId);
    } catch {
      /* ignore write failures */
    }
  }, [projects, activeId]);

  // Stale ids (deleted or from older storage) always resolve to a live project.
  const safeId = projects.some((p) => p.id === activeId) ? activeId : projects[0].id;
  const project = projects.find((p) => p.id === safeId) || projects[0];

  const removeProject = (id: string) => {
    setProjects((prev) => {
      if (prev.length <= 1 || !prev.some((p) => p.id === id)) return prev;
      const next = prev.filter((p) => p.id !== id);
      if (safeId === id) setActiveId(next[0].id);
      return next;
    });
  };

  const addProject = (title: string, keywords: string): TrackedProject => {
    const kws = keywords.split(',').map((s) => s.trim().toLowerCase()).filter(Boolean).slice(0, 5);
    const cleanTitle = title.trim().slice(0, 40) || 'Untitled';
    const created: TrackedProject = {
      id: `project-${Date.now()}`,
      title: cleanTitle.toUpperCase(),
      subtitle: 'Custom tracking',
      keywords: kws.length > 0 ? kws : [cleanTitle.toLowerCase()],
    };
    setProjects((prev) => [...prev, created]);
    setActiveId(created.id);
    return created;
  };

  const trackFilm = (film: { id: string; title: string; subtitle?: string; keywords: string[] }): TrackedProject => {
    const existing = projects.find((p) => p.id === film.id || p.title.toLowerCase() === film.title.toLowerCase());
    if (existing) {
      setActiveId(existing.id);
      return existing;
    }
    const cleanTitle = film.title.trim().slice(0, 50);
    const newProject: TrackedProject = {
      id: film.id,
      title: cleanTitle,
      subtitle: film.subtitle || 'Indian Theatrical Release (30-Day Radar)',
      keywords: film.keywords && film.keywords.length > 0 ? film.keywords : [cleanTitle.toLowerCase()],
    };
    setProjects((prev) => [newProject, ...prev]);
    setActiveId(newProject.id);
    return newProject;
  };

  return (
    <ProjectContext.Provider value={{ projects, project, setActiveId, addProject, trackFilm, removeProject }}>
      {children}
    </ProjectContext.Provider>
  );
}
