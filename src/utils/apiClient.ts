/**
 * Universal API Client with Automatic Fallback
 * Works seamlessly across:
 * 1. Local Express + SQLite server (dynamic live calls)
 * 2. Static GitHub Pages deployments (fallback to static JSON snapshots)
 * 3. Offline or degraded network environments
 */

export async function safeFetchJson<T = any>(endpoint: string, options?: RequestInit): Promise<T | null> {
  const clean = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  const baseName = clean.split('?')[0].replace(/^api\//, '');

  // 1. Try direct API first (for live server)
  try {
    const res = await fetch('/' + clean, options);
    if (res.ok) {
      const contentType = res.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        return (await res.json()) as T;
      }
    }
  } catch (err) {
    // proceed to fallback
  }

  // 2. Try relative static fallback (for GitHub Pages root or subpath)
  const fallbackUrls = [
    `./api/${baseName}.json`,
    `/digisynq3/api/${baseName}.json`,
    `api/${baseName}.json`
  ];

  for (const url of fallbackUrls) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const contentType = res.headers.get('content-type') || '';
        if (contentType.includes('application/json')) {
          return (await res.json()) as T;
        }
      }
    } catch {
      // try next
    }
  }

  return null;
}
