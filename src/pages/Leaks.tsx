import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { GIcon } from '../components/GIcon';
import { leakLinks as fallbackLeaks } from '../data/mockData';
import { StatusBadge } from '../components/ui/StatusBadge';
import { Stagger, StaggerItem } from '../components/motion';
import { useToast } from '../components/Toaster';
import { useRoom } from '../components/RoomState';
import { useProject } from '../components/ProjectContext';
import { useLiveData } from '../hooks/useLiveData';
import { useLiveDataContext } from '../context/LiveDataContext';
import type { LeakLink, LeakPlatform, LeakStatus } from '../data/types';
import { subscribeLeakStatuses, updateLeakStatusInFirestore } from '../lib/firestoreSync';
import {
  dispatchLeakTakedown,
  dispatchAction,
  onActionDispatched,
} from '../lib/actionDispatcher';
import type { DispatchedAction } from '../lib/actionDispatcher';

const statusTabs: ('ALL' | LeakStatus)[] = ['ALL', 'ACTIVE', 'TAKEDOWN_SENT', 'REMOVED'];

const statusLabels: Record<'ALL' | LeakStatus, string> = {
  ALL: 'All',
  ACTIVE: 'Active',
  TAKEDOWN_SENT: 'Takedown sent',
  REMOVED: 'Removed',
};

const platformLabels: Record<LeakPlatform, string> = {
  STREAMING: 'Streaming',
  TORRENT: 'Torrent',
  TELEGRAM: 'Telegram',
  FILE_HOST: 'File host',
  SOCIAL: 'Social',
};

const qualityTone: Record<LeakLink['quality'], string> = {
  '4K': 'bg-[#ff453a]/15 text-[#ff6961]',
  '1080P': 'bg-[#ff453a]/15 text-[#ff6961]',
  HD: 'bg-[#ff9f0a]/15 text-[#ffb340]',
  HDTS: 'bg-[#ff9f0a]/15 text-[#ffb340]',
  HDTC: 'bg-[#ffd60a]/15 text-[#ffd60a]',
  CAM: 'bg-white/10 text-war-text-secondary',
};

function parseViews(label: string): number {
  const m = label.match(/([\d.]+)\s*([MK]?)/i);
  if (!m) return 0;
  const n = parseFloat(m[1]);
  const unit = (m[2] || '').toUpperCase();
  return unit === 'M' ? n * 1e6 : unit === 'K' ? n * 1e3 : n;
}

function formatCompact(n: number): string {
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`;
  if (n >= 1e3) return `${(n / 1e3).toFixed(1)}K`;
  return `${Math.round(n)}`;
}

function nowIST(): string {
  return new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' });
}

function threatForQuality(q: LeakLink['quality']): LeakLink['threat'] {
  if (q === '4K' || q === '1080P' || q === 'HD') return 'CRITICAL';
  if (q === 'HDTS') return 'HIGH';
  if (q === 'HDTC') return 'MEDIUM';
  return 'LOW';
}

export function Leaks() {
  const { project } = useProject();
  const { liveLeaks, isLive, lastUpdated, refresh, isLoading } = useLiveData(project.keywords.join(','));
  const liveContext = useLiveDataContext();
  const { dispatchCloudflareDMCAAction, cloudflareColo } = liveContext;

  const [links, setLinks] = useState<LeakLink[]>(fallbackLeaks);
  const [filter, setFilter] = useState<'ALL' | LeakStatus>('ALL');
  const [query, setQuery] = useState('');
  const [formOpen, setFormOpen] = useState(false);
  const [newUrl, setNewUrl] = useState('');
  const [newPlatform, setNewPlatform] = useState<LeakPlatform>('STREAMING');
  const [newQuality, setNewQuality] = useState<LeakLink['quality']>('HD');

  // Cloudflare DMCA state
  const [activeDMCALeak, setActiveDMCALeak] = useState<LeakLink | null>(null);
  const [dmcaModalOpen, setDmcaModalOpen] = useState(false);
  const [dmcaSubmitting, setDmcaSubmitting] = useState(false);

  const toast = useToast();
  const { apply } = useRoom();

  useEffect(() => {
    if (liveLeaks && liveLeaks.length > 0) {
      const timer = setTimeout(() => {
        setLinks((prev) => {
          // preserve status of existing user actions, add new live detected leaks
          const prevMap = new Map(prev.map((l) => [l.url, l]));
          const merged = liveLeaks.map((leak) => {
            const existing = prevMap.get(leak.url);
            return existing ? { ...leak, status: existing.status, statusUpdated: existing.statusUpdated } : leak;
          });
          // add any manual user entries not in liveLeaks
          for (const l of prev) {
            if (!merged.some((m) => m.url === l.url || m.id === l.id)) {
              merged.push(l);
            }
          }
          return merged;
        });
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [liveLeaks]);

  // Subscribe to real-time Firestore leak status updates
  useEffect(() => {
    const unsub = subscribeLeakStatuses((statusMap) => {
      if (Object.keys(statusMap).length > 0) {
        setLinks((prev) =>
          prev.map((l) => (statusMap[l.id] ? { ...l, status: statusMap[l.id] } : l))
        );
      }
    });
    return () => unsub();
  }, []);

  // Cross-tab broadcast listener
  useEffect(() => {
    const unsub = onActionDispatched((action: DispatchedAction) => {
      if (action.type === 'TAKEDOWN_LEAK' && action.metadata?.leakId) {
        const id = action.metadata.leakId as string;
        const newStatus = (action.metadata.newStatus as LeakStatus) || 'TAKEDOWN_SENT';
        setLinks((prev) => prev.map((l) => (l.id === id ? { ...l, status: newStatus, statusUpdated: nowIST() } : l)));
      }
    });
    return unsub;
  }, []);

  const active = links.filter((l) => l.status === 'ACTIVE');
  const handled = links.filter((l) => l.status !== 'ACTIVE');
  const removed = links.filter((l) => l.status === 'REMOVED');
  const illegalViews = links.filter((l) => l.status !== 'REMOVED').reduce((sum, l) => sum + parseViews(l.views), 0);
  const removalRate = links.length > 0 ? Math.round((removed.length / links.length) * 100) : 0;

  const visible = links.filter((l) => {
    if (filter !== 'ALL' && l.status !== filter) return false;
    if (query && !`${l.host} ${l.url}`.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  const updateStatus = (id: string, status: LeakStatus, message: string, tone: 'success' | 'warn') => {
    setLinks((prev) => prev.map((l) => (l.id === id ? { ...l, status, statusUpdated: nowIST() } : l)));
    apply(status === 'REMOVED' ? 'removed' : 'takedown');
    updateLeakStatusInFirestore(id, status);
    const targetLeak = links.find((l) => l.id === id);
    dispatchLeakTakedown(id, targetLeak?.url || id, status);
    toast(status === 'REMOVED' ? `${message} · risk −3` : `${message} · velocity −2`, tone);
  };

  const handleCloudflareDMCA = async (link: LeakLink) => {
    setDmcaSubmitting(true);
    try {
      const res = await dispatchCloudflareDMCAAction({
        leakId: link.id,
        url: link.url,
        host: link.host,
        filmTitle: project.title,
      });
      setLinks((prev) =>
        prev.map((l) => (l.id === link.id ? { ...l, status: 'TAKEDOWN_SENT', statusUpdated: nowIST() } : l))
      );
      apply('takedown');
      updateLeakStatusInFirestore(link.id, 'TAKEDOWN_SENT');
      dispatchLeakTakedown(link.id, link.url, 'TAKEDOWN_SENT');
      toast(`Cloudflare DMCA Notice dispatched (${res.reportId}) · Host unmasked`, 'success');
      setDmcaModalOpen(false);
    } catch {
      toast('Cloudflare DMCA filing error', 'warn');
    } finally {
      setDmcaSubmitting(false);
    }
  };

  const reportLink = () => {
    const url = newUrl.trim();
    if (!url) {
      toast('Paste a link URL first', 'warn');
      return;
    }
    let host = url;
    try {
      const withProto = /^https?:\/\//i.test(url) ? url : `https://${url}`;
      host = new URL(withProto).hostname.replace(/^www\./, '') || url;
    } catch {
      host = url.split('/')[0];
    }
    const newLeakItem: LeakLink = {
      id: `leak-${Date.now()}`,
      host,
      url,
      platform: newPlatform,
      quality: newQuality,
      threat: threatForQuality(newQuality),
      detected: nowIST(),
      views: '—',
      status: 'ACTIVE',
      statusUpdated: nowIST(),
    };
    setLinks((prev) => [newLeakItem, ...prev]);
    dispatchAction('REPORT_LEAK', 'LEAK', `New Leak Vector: ${host}`, `URL tracking initiated: ${url}`, {
      leakId: newLeakItem.id,
      url,
      platform: newPlatform,
      quality: newQuality,
    });
    setNewUrl('');
    setFormOpen(false);
    toast(`Now tracking ${host}`, 'success');
  };

  const stats = [
    { label: 'Active leaks', value: `${active.length}`, tone: 'text-[#ff6961]' },
    { label: 'Est. illegal views', value: formatCompact(illegalViews), tone: 'text-white' },
    { label: 'Takedowns sent', value: `${handled.length}`, tone: 'text-[#ffb340]' },
    { label: 'Removal rate', value: `${removalRate}%`, tone: 'text-[#30d158]' },
  ];

  return (
    <div className="flex-1 overflow-y-auto px-6 py-6 lg:px-8">
      <div className="mx-auto max-w-[1400px] space-y-5">
        <div className="flex flex-wrap items-end justify-between gap-3 pb-1">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-[13px] font-medium text-war-text-muted">Cinema Damage Control Room</p>
              {isLive ? (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ff453a]/30 bg-[#ff453a]/10 px-2 py-0.5 text-[11px] font-semibold text-[#ff6961]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff453a] animate-pulse" />
                  LIVE RADAR ACTIVE
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-war-text-muted">
                  SIMULATED
                </span>
              )}
            </div>
            <h1 className="apple-title mt-0.5">Leaks</h1>
            <p className="apple-subhead mt-1">Real-time pirated copies and unauthorized stream crawler for {project.title}.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => refresh()}
              disabled={isLoading}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12px] font-medium text-war-text-secondary transition hover:bg-white/[0.08] hover:text-white disabled:opacity-50"
            >
              <GIcon name="refresh" size={13} className={isLoading ? 'animate-spin' : ''} />
              <span>{isLoading ? 'Scanning...' : 'Scan Now'}</span>
            </button>
            <button
              onClick={() => setFormOpen((o) => !o)}
              aria-expanded={formOpen}
              className="apple-button flex items-center gap-1.5 bg-[#0a84ff] px-4 py-2 text-[14px] text-white hover:bg-[#409cff]"
            >
              {formOpen ? <GIcon name="close" size={15} /> : <GIcon name="add" size={15} />}
              {formOpen ? 'Close' : 'Report link'}
            </button>
          </div>
        </div>

        {lastUpdated && (
          <div className="flex items-center justify-between text-[12px] text-war-text-muted px-1">
            <span>Scanning Telegram piracy channels, cyberlocker indexers, torrent trackers, and video streams</span>
            <span className="tabular-nums">
              Last sweep: {new Date(lastUpdated).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        )}

        {/* Cloudflare Anti-Piracy Edge Shield Banner */}
        <div className="rounded-2xl border border-[#f6821f]/30 bg-gradient-to-r from-[#1a110a] via-[#121622] to-[#0d1117] p-4 shadow-xl backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f6821f]/20 text-[#f6821f] border border-[#f6821f]/40 shadow-[0_0_20px_rgba(246,130,31,0.2)]">
                <GIcon name="shield" size={24} className="text-[#f6821f]" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[13px] font-bold tracking-tight text-white">
                    CLOUDFLARE ANTI-PIRACY & EDGE TAKEDOWN SHIELD
                  </span>
                  <span className="rounded-full bg-[#f6821f]/25 border border-[#f6821f]/40 px-2 py-0.5 text-[10px] font-bold text-[#f6821f] uppercase tracking-wider">
                    Edge Compliance Active
                  </span>
                </div>
                <p className="mt-0.5 text-[12px] text-zinc-400">
                  Automated DMCA compliance filing via Cloudflare Abuse Gateway (<code className="text-[#f6821f] font-mono text-[11px]">abuse.cloudflare.com/dmca</code>) to flush edge cache nodes and compel origin host disclosure.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 text-[11px] text-zinc-300">
                <span className="text-zinc-500">Colo Hub: </span>
                <span className="font-mono font-bold text-[#f6821f]">{cloudflareColo} (Edge)</span>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 text-[11px] text-zinc-300">
                <span className="text-zinc-500">WAF Status: </span>
                <span className="font-mono font-bold text-emerald-400">Bot Fight Active</span>
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {formOpen && (
            <motion.div
              className="glass-panel overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            >
              <div className="grid grid-cols-1 gap-3 p-5 md:grid-cols-[1fr_180px_160px_auto]">
                <label className="flex h-10 items-center gap-2 rounded-full bg-white/[0.07] px-4">
                  <GIcon name="search" size={14} className="shrink-0 text-war-text-muted" />
                  <input
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && reportLink()}
                    placeholder="Paste pirated link URL…"
                    className="w-full bg-transparent text-[14px] text-white placeholder:text-war-text-muted outline-none"
                  />
                </label>
                <select
                  value={newPlatform}
                  onChange={(e) => setNewPlatform(e.target.value as LeakPlatform)}
                  aria-label="Platform"
                  className="h-10 rounded-full border border-white/10 bg-[#1c1c1e] px-4 text-[13px] text-white outline-none"
                >
                  {(Object.keys(platformLabels) as LeakPlatform[]).map((p) => (
                    <option key={p} value={p}>{platformLabels[p]}</option>
                  ))}
                </select>
                <select
                  value={newQuality}
                  onChange={(e) => setNewQuality(e.target.value as LeakLink['quality'])}
                  aria-label="Quality"
                  className="h-10 rounded-full border border-white/10 bg-[#1c1c1e] px-4 text-[13px] text-white outline-none"
                >
                  {(['CAM', 'HDTS', 'HDTC', 'HD', '1080P', '4K'] as const).map((q) => (
                    <option key={q} value={q}>{q}</option>
                  ))}
                </select>
                <button
                  onClick={reportLink}
                  className="apple-button flex h-10 items-center justify-center gap-1.5 bg-[#0a84ff] px-5 text-[14px] text-white hover:bg-[#409cff]"
                >
                  <GIcon name="shield" size={14} /> Track
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats */}
        <Stagger className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StaggerItem key={s.label} index={i} className="glass-panel apple-card-hover p-5">
              <div className="metric-label mb-1">{s.label}</div>
              <div className={`metric-value ${s.tone}`}>{s.value}</div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Filter + search */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex max-w-full gap-1 overflow-x-auto rounded-full bg-white/[0.07] p-1">
            {statusTabs.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={clsx(
                  'whitespace-nowrap rounded-full px-4 py-1.5 text-[13px] font-medium transition-all active:scale-[0.97]',
                  filter === t ? 'bg-white text-black shadow' : 'text-war-text-secondary hover:text-white'
                )}
              >
                {statusLabels[t]}
              </button>
            ))}
          </div>
          <label className="flex h-9 w-full max-w-xs items-center gap-2 rounded-full bg-white/[0.07] px-3.5 sm:w-64">
            <GIcon name="search" size={14} className="shrink-0 text-war-text-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search host or URL…"
              className="w-full bg-transparent text-[13px] text-white placeholder:text-war-text-muted outline-none"
            />
          </label>
        </div>

        {/* Table */}
        <div className="glass-panel overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead>
                <tr className="border-b border-white/[0.08] text-[11px] font-semibold uppercase tracking-[0.06em] text-war-text-muted">
                  {['Threat', 'Link', 'Platform', 'Quality', 'Detected', 'Views', 'Status', 'Action'].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visible.map((link, idx) => (
                  <tr key={`${link.id}-${idx}`} className="border-b border-white/[0.05] transition last:border-0 hover:bg-white/[0.04]">
                    <td className="px-4 py-3">
                      <StatusBadge severity={link.threat} size="xs" />
                    </td>
                    <td className="max-w-[280px] px-4 py-3">
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="truncate text-[14px] font-medium tracking-[-0.006em] text-white" title={link.url}>{link.host}</span>
                        {/stream|tape|dood|drop|file|cloud|share|play|hub|cyber/i.test(link.host) && (
                          <span className="inline-flex items-center gap-0.5 rounded bg-[#f6821f]/15 border border-[#f6821f]/30 px-1.5 py-0.2 text-[9px] font-bold text-[#f6821f] shrink-0">
                            <GIcon name="bolt" size={10} /> CF Edge
                          </span>
                        )}
                      </div>
                      <div className="truncate text-[12px] text-war-text-muted" title={link.url}>{link.url}</div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-[13px] text-war-text-secondary">{platformLabels[link.platform]}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={clsx('rounded-full px-2.5 py-1 text-[11px] font-semibold tabular-nums', qualityTone[link.quality])}>
                        {link.quality}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-mono text-[12px] tabular-nums text-war-text-secondary">{link.detected}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-[13px] font-semibold tabular-nums text-white">{link.views}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="whitespace-nowrap text-[12px] font-medium capitalize text-war-text-secondary">
                        {link.status === 'TAKEDOWN_SENT' ? `takedown · ${link.statusUpdated}` : link.status.toLowerCase()}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {link.status === 'ACTIVE' && (
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => {
                              setActiveDMCALeak(link);
                              setDmcaModalOpen(true);
                            }}
                            className="apple-button flex items-center gap-1 bg-[#f6821f]/20 border border-[#f6821f]/40 px-2.5 py-1.5 text-[12px] font-semibold text-[#f6821f] hover:bg-[#f6821f]/30 transition"
                            title="Automated Cloudflare Abuse Gateway DMCA notice"
                          >
                            <GIcon name="bolt" size={12} /> CF DMCA
                          </button>
                          <button
                            onClick={() => updateStatus(link.id, 'TAKEDOWN_SENT', `Takedown sent for ${link.host}`, 'warn')}
                            className="apple-button flex items-center gap-1 bg-[#0a84ff] px-2.5 py-1.5 text-[12px] text-white hover:bg-[#409cff]"
                          >
                            <GIcon name="send" size={12} /> Notice
                          </button>
                        </div>
                      )}
                      {link.status === 'TAKEDOWN_SENT' && (
                        <button
                          onClick={() => updateStatus(link.id, 'REMOVED', `${link.host} confirmed removed`, 'success')}
                          className="apple-button flex items-center gap-1 bg-[#30d158]/15 px-3.5 py-1.5 text-[13px] text-[#30d158] hover:bg-[#30d158]/25"
                        >
                          <GIcon name="check_circle" size={13} /> Verify removal
                        </button>
                      )}
                      {link.status === 'REMOVED' && (
                        <span className="flex items-center gap-1.5 text-[12px] font-medium text-[#30d158]">
                          <GIcon name="check_circle" size={13} /> Removed
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {visible.length === 0 && (
            <div className="flex flex-col items-center gap-2 p-8 text-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#30d158]/15">
                <GIcon name="shield" size={20} className="text-[#30d158]" />
              </span>
              <p className="text-[14px] text-war-text-muted">No leaks match this filter — the perimeter holds.</p>
            </div>
          )}
          <p className="apple-footnote px-5 py-3">Seed links are illustrative examples — report real ones you find; view counts are approximate.</p>
        </div>

        {/* Cloudflare DMCA Takedown Dispatch Modal */}
        <AnimatePresence>
          {dmcaModalOpen && activeDMCALeak && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="w-full max-w-xl rounded-2xl border border-[#f6821f]/40 bg-[#121620] p-6 shadow-2xl"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f6821f]/20 text-[#f6821f] border border-[#f6821f]/30">
                      <GIcon name="shield" size={20} />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold text-white">Cloudflare Edge DMCA Dispatch</h3>
                      <p className="text-[11px] text-zinc-400">Official Abuse Report under 17 U.S.C. § 512(c) & Indian Copyright Act</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setDmcaModalOpen(false)}
                    className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-zinc-400 hover:text-white"
                  >
                    <GIcon name="close" size={16} />
                  </button>
                </div>

                <div className="mt-4 space-y-3 text-[12px]">
                  <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div>
                        <span className="text-zinc-500">Target Host:</span>
                        <p className="font-mono font-bold text-white">{activeDMCALeak.host}</p>
                      </div>
                      <div>
                        <span className="text-zinc-500">Edge Gateway:</span>
                        <p className="font-mono text-[#f6821f]">Cloudflare Abuse API (abuse.cloudflare.com)</p>
                      </div>
                      <div className="col-span-2 mt-1">
                        <span className="text-zinc-500">Infringing URL:</span>
                        <p className="truncate font-mono text-zinc-300">{activeDMCALeak.url}</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#f6821f]/20 bg-[#f6821f]/5 p-3 text-zinc-300 space-y-1.5">
                    <p className="font-semibold text-white flex items-center gap-1 text-[12px]">
                      <GIcon name="verified" size={14} className="text-[#f6821f]" />
                      Automated Enforcement Protocol
                    </p>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      1. Transmits signed digital infringement notice to Cloudflare Abuse Gateway.
                    </p>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      2. Cloudflare purges edge node caches and serves DMCA notice to upstream hosting provider.
                    </p>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      3. Unmasks origin web host IP address for direct court injunction and registrar escalation.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-end gap-3 border-t border-white/10 pt-4">
                  <button
                    onClick={() => setDmcaModalOpen(false)}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium text-zinc-300 hover:bg-white/10 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleCloudflareDMCA(activeDMCALeak)}
                    disabled={dmcaSubmitting}
                    className="apple-button flex items-center gap-1.5 bg-[#f6821f] px-4 py-2 text-[13px] font-bold text-black hover:bg-[#ffa756] transition disabled:opacity-50"
                  >
                    {dmcaSubmitting ? (
                      <>
                        <GIcon name="refresh" size={14} className="animate-spin" />
                        <span>Filing Notice...</span>
                      </>
                    ) : (
                      <>
                        <GIcon name="bolt" size={14} />
                        <span>Dispatch DMCA Notice</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
