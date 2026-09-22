import { clsx } from 'clsx';
import { GIcon } from '../components/GIcon';
import { useLiveData } from '../hooks/useLiveData';
import { estimateSentiment } from '../data/apiService';
import { useToast } from '../components/Toaster';
import { useProject } from '../components/ProjectContext';
import { dispatchExportReport } from '../lib/actionDispatcher';

function downloadMarkdown(filename: string, body: string) {
  const blob = new Blob([body], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 2000);
}

function makeReports(projectTitle: string) {
  const now = Date.now();
  const mins = (offset: number) => {
    const d = new Date(now - offset * 60000);
    return d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' });
  };
  return [
    {
      id: 'exec-brief',
      title: 'Executive summary',
      subtitle: 'The 60-second brief',
      description: 'Concise summary for leadership. What happened, why it matters, and what to do.',
      lastGenerated: `Synced at ${mins(2)}`,
      severity: 'CRITICAL',
    },
    {
      id: 'incident-report',
      title: 'Incident report',
      subtitle: `Active incidents · ${projectTitle}`,
      description: 'Full incident analysis with timeline, evidence, and response status.',
      lastGenerated: `Synced at ${mins(8)}`,
      severity: 'CRITICAL',
    },
    {
      id: 'media-report',
      title: 'Media report',
      subtitle: 'Coverage analysis',
      description: 'Media coverage breakdown, sentiment analysis, and narrative flow.',
      lastGenerated: `Synced at ${mins(12)}`,
      severity: 'HIGH',
    },
    {
      id: 'crisis-timeline',
      title: 'Crisis timeline',
      subtitle: 'Full event chronology',
      description: 'Complete timeline of events from first detection to current state.',
      lastGenerated: `Synced at ${mins(5)}`,
      severity: 'HIGH',
    },
  ];
}

const REAL_PROJECT_BRIEFS: Record<string, Omit<Brief, 'live'>> = {
  goat: {
    whatHappened:
      'Thalapathy Vijay-starrer The Greatest of All Time (GOAT, dir. Venkat Prabhu) has grossed ₹455+ crore worldwide across its 3-week theatrical run. While Tamil Nadu and overseas circuits report 84%+ weekend holds, Hindi multiplex conversions in Tier-2 circuits require stabilization.',
    whyItMatters:
      'GOAT is one of the highest-grossing Tamil tentpoles of the year. Metro multiplex audience preference strongly favours the original Tamil audio with English subtitles over dubbed prints, representing an immediate ₹18+ crore revenue protection opportunity.',
    topNarratives: [
      'Dual-role performance and de-aging tech VFX reception — 42% of chatter',
      'Tamil Nadu and overseas box-office supremacy — 34% of coverage',
      'Hindi belt show allocation and competition — 24% of trade discussion',
    ],
    topActions: [
      'Reallocate morning dubbed slots to prime evening Tamil original with subtitles',
      'Deploy VFX and action behind-the-scenes reels to highlight technological ambition',
      'Coordinate with national multiplex chains to retain prime evening showcounts',
    ],
    ifNoAction: 'Premature screen shedding in North circuits reduces theatrical lifetime by ₹15–20 crore before OTT release.',
  },
  singham3: {
    whatHappened:
      'Rohit Shetty\'s Singham Returns: Part 3 (starring Ajay Devgn) has opened to a massive Day 1 start, tracking ₹18-22 crore. The Rohit Shetty cop-universe fanbase is showing up in force at night shows across Mumbai, Delhi NCR, and Pune multiplexes.',
    whyItMatters:
      'As the third instalment of Rohit Shetty\'s highest-grossing franchise, a strong opening weekend is critical to sustain a 4,500-screen release and protect ₹8-10 crore of weekend revenue. Fan sentiment on opening day directly determines Monday drop patterns.',
    topNarratives: [
      'Rohit Shetty cop-universe fanbase mobilization — 48% of social chatter',
      'Action set-piece and climax sequence WOM — 32% of audience discussion',
      'Day 1 box office tracking and weekend projection — 20% of trade coverage',
    ],
    topActions: [
      'Hold prime evening slots in Mumbai and Delhi NCR multiplex chains through the opening weekend',
      'Amplify positive audience reactions from night shows on X and Instagram',
      'Brief exhibitors to add Saturday morning shows in markets with 90%+ occupancy',
    ],
    ifNoAction: 'Failure to protect prime weekend evening slots could cost ₹6-8 crore in opening weekend collections against early holdover pressure.',
  },
  'the-buckingham-murders': {
    whatHappened:
      'Hansal Mehta\'s investigative procedural The Buckingham Murders (starring Kareena Kapoor Khan) collected ₹15.8 crore across 1,100 targeted urban multiplex screens, with critical praise centering on its gritty European procedural tone.',
    whyItMatters:
      'The film is targeted at discerning metro multiplex audiences. Trade telemetry proves that metro patrons strongly prefer the original 80:20 English-Hindi audio cut (64% occupancy) over the full Hindi dub (28% occupancy).',
    topNarratives: [
      'Kareena Kapoor Khan restrained performance acclaim — 52% of review coverage',
      'Original bilingual audio vs dubbed cut debate — 28% of viewer feedback',
      'Word-of-mouth stability in Mumbai and Delhi multiplexes — 20% of trade buzz',
    ],
    topActions: [
      'Instruct exhibitors to schedule 100% original bilingual audio prints in metro chains',
      'Weed out low-occupancy non-metro morning shows to maximize per-show average',
      'Amplify critical reviews from international film festival screenings',
    ],
    ifNoAction: 'Mismatched dubbed show scheduling erodes urban multiplex conversion by up to ₹3.5 crore.',
  },
  tumbbad: {
    whatHappened:
      'Sohum Shah\'s Tumbbad historic theatrical re-release has grossed ₹35.5 crore, smashing all-time Indian re-release box-office records and surpassing its original 2018 lifetime theatrical collections.',
    whyItMatters:
      'A cultural phenomenon demonstrating unprecedented organic theatrical demand. The confirmed Tumbbad 2 end-credits teaser has ignited viral excitement across horror-fantasy fandoms.',
    topNarratives: [
      'Historic re-release box office milestone — 46% of media coverage',
      'Tumbbad 2 official sequel teaser buzz — 36% of social commentary',
      'IMAX and midnight sold-out show demand — 18% of exhibitor reports',
    ],
    topActions: [
      'Expand late-night and IMAX weekend slots to accommodate 96%+ occupancy demand',
      'Maintain official social engagement around the sequel lore and Hastar mythology',
      'Ensure projection calibration in single screens for optimal dark-scene visibility',
    ],
    ifNoAction: 'Exhibitors miss out on ₹5+ crore in incremental re-release gross from capacity constraints.',
  },
};

interface Brief {
  whatHappened: string;
  whyItMatters: string;
  topNarratives: string[];
  topActions: string[];
  ifNoAction: string;
  live: boolean;
}

function buildBrief(
  project: { id: string; title: string },
  stats: { total: number; negPct: number; posPct: number; velocityPct: number; reachLabel: string; trending: { term: string; mentions: number }[] } | null,
  isLive: boolean
): Brief {
  if (isLive && stats) {
    const terms = stats.trending.slice(0, 3).map((t) => `${t.term} — ${t.mentions} stories`);
    return {
      whatHappened: `${stats.total} stories tracked for ${project.title}: ${stats.negPct}% read negative, ${stats.posPct}% positive, volume ${stats.velocityPct >= 0 ? '+' : ''}${stats.velocityPct}% day-over-day with an estimated ${stats.reachLabel} reach.`,
      whyItMatters: `Narrative momentum for ${project.title} is being set right now — the dominant terms (${terms[0] || 'forming'}) will frame the next 48 hours of coverage.`,
      topNarratives: terms.length > 0 ? terms : ['Coverage too thin to mine narratives yet'],
      topActions: [
        'Amplify the strongest positive story within 24 hours',
        'Prepare a factual clarification for the top negative term',
        'Brief one authorized spokesperson before the next cycle',
      ],
      ifNoAction: 'The leading negative term hardens into the consensus story for this title.',
      live: true,
    };
  }

  const customBrief = REAL_PROJECT_BRIEFS[project.id];
  if (customBrief) {
    return { ...customBrief, live: false };
  }

  return {
    whatHappened: `${project.title} is actively tracked in the rolling 30-day Indian cinema release window. Box-office pace, sentiment shifts, and exhibitor show retention are continuously monitored.`,
    whyItMatters: 'Timely damage control interventions in the 30-day window protect up to 25% of lifetime gross.',
    topNarratives: [
      `${project.title} theatrical and OTT trajectory — 45% of discussion`,
      'Audience word-of-mouth conversion on BookMyShow — 35% of sentiment',
      'Regional exhibitor screen retention — 20% of trade monitoring',
    ],
    topActions: [
      'Calibrate prime evening show allocations across metro multiplexes',
      'Amplify positive talent and audience testimonials on digital channels',
      'Monitor BookMyShow fast-filling indicators for real-time demand surges',
    ],
    ifNoAction: 'Unmonitored narrative drift risks premature show reductions in key distribution circuits.',
    live: false,
  };
}

export function Reports() {
  const toast = useToast();
  const { project } = useProject();
  const { news: liveNews, stats: briefStats, isLive: briefLive, lastUpdated: liveUpdated, isLoading: liveLoading, refresh } = useLiveData(project.keywords.join(','));
  const liveOk = briefLive && !!briefStats;
  const brief = buildBrief(project, briefStats, liveOk);
  const reports = makeReports(project.title);

  const exportBrief = () => {
    const stamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const md = [
      `# 60-Second Brief — ${project.title}${brief.live ? '' : ' (simulation)'}`,
      `_Cinema Damage Control Room · generated ${stamp}_`,
      ``,
      `## What happened?`,
      brief.whatHappened,
      ``,
      `## Why it matters`,
      brief.whyItMatters,
      ``,
      `## What is driving it?`,
      ...brief.topNarratives.map((n) => `- ${n}`),
      ``,
      `## What should we do?`,
      ...brief.topActions.map((a, i) => `${i + 1}. ${a}`),
      ``,
      `## What happens if we do nothing?`,
      brief.ifNoAction,
    ].join('\n');
    downloadMarkdown(`${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-60-second-brief.md`, md);
    dispatchExportReport('60-Second Executive Brief', project.title);
    toast('Brief downloaded as Markdown', 'success');
  };

  const exportReport = (id: string, title: string, subtitle: string, description: string) => {
    const stamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const md = [
      `# ${title} — ${project.title}`,
      `_${subtitle} · Cinema Damage Control Room · generated ${stamp}_`,
      ``,
      description,
      ``,
      `## Current situation`,
      brief.whatHappened,
      ``,
      `## Recommended actions`,
      ...brief.topActions.map((a, i) => `${i + 1}. ${a}`),
    ].join('\n');
    downloadMarkdown(`${id}.md`, md);
    dispatchExportReport(title, `${project.title} (${subtitle})`);
    toast(`“${title}” downloaded as Markdown`, 'success');
  };

  return (
    <div className="flex-1 overflow-y-auto px-6 py-6 lg:px-8">
      <div className="mx-auto max-w-[1400px] space-y-5">
        <div className="flex flex-wrap items-end justify-between gap-3 pb-1">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-[13px] font-medium text-war-text-muted">Cinema Damage Control Room</p>
              {liveOk ? (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#30d158]/30 bg-[#30d158]/10 px-2 py-0.5 text-[11px] font-semibold text-[#30d158]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#30d158] animate-pulse" />
                  LIVE BRIEFS
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-war-text-muted">
                  SIMULATED
                </span>
              )}
            </div>
            <h1 className="apple-title mt-0.5">Reports</h1>
            <p className="apple-subhead mt-1">Real-time intelligence dossiers and executive briefs for {project.title}.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => refresh()}
              disabled={liveLoading}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12px] font-medium text-war-text-secondary transition hover:bg-white/[0.08] hover:text-white disabled:opacity-50"
            >
              <GIcon name="refresh" size={13} className={liveLoading ? 'animate-spin' : ''} />
              <span>{liveLoading ? 'Recalculating...' : 'Sync Briefs'}</span>
            </button>
          </div>
        </div>

        {/* Executive Brief Preview */}
        <div className="glass-panel p-6 lg:p-7">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="section-title">The 60-second brief</span>
              <p className="mt-1 text-[12px] tabular-nums text-war-text-muted">
                {liveUpdated ? `Synthesized from live wire at ${new Date(liveUpdated).toLocaleTimeString('en-IN')}` : 'Estimated baseline'}
              </p>
            </div>
            <button
              onClick={exportBrief}
              className="apple-button flex items-center gap-1.5 bg-[#0a84ff] px-4 py-2 text-[14px] text-white hover:bg-[#409cff]"
            >
              <GIcon name="download" size={14} /> Export
            </button>
          </div>

          <div className="space-y-5">
            <div>
              <h3 className="section-title mb-1.5">What happened?</h3>
              <p className="max-w-[900px] text-[14px] leading-relaxed text-war-text-secondary">{brief.whatHappened}</p>
            </div>
            <div>
              <h3 className="section-title mb-1.5">Why it matters</h3>
              <p className="max-w-[900px] text-[14px] leading-relaxed text-war-text-secondary">{brief.whyItMatters}</p>
            </div>
            <div>
              <h3 className="section-title mb-2">What is driving it?</h3>
              <ul className="space-y-1.5">
                {brief.topNarratives.map((n, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-[14px] text-war-text-secondary">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff453a]" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="section-title mb-2">What should we do?</h3>
              <ol className="space-y-2">
                {brief.topActions.map((a, i) => (
                  <li key={i} className="flex max-w-[900px] items-start gap-3 rounded-xl bg-white/[0.03] px-3 py-2.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0a84ff]/20 text-[12px] font-semibold text-[#64a8ff]">
                      {i + 1}
                    </span>
                    <span className="text-[14px] text-war-text-secondary">{a}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl border border-[#ff9f0a]/25 bg-[#ff9f0a]/10 p-4">
              <h3 className="mb-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#ffb340]">What happens if we do nothing?</h3>
              <p className="text-[14px] leading-relaxed text-war-text-secondary">{brief.ifNoAction}</p>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[12px] font-medium text-war-text-muted">Current status</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ff453a]/15 px-3 py-1 text-[12px] font-semibold text-[#ff6961]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff453a]" /> Critical
              </span>
            </div>
          </div>
        </div>

        {/* Available Reports */}
        <div className="glass-panel p-5">
          <div className="mb-4 flex items-baseline justify-between">
            <span className="section-title">Available reports</span>
            <span className="apple-footnote">{reports.length} templates</span>
          </div>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            {reports.map((report) => (
              <div key={report.id} className="flex items-start gap-3.5 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition hover:border-white/[0.14] hover:bg-white/[0.05]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/[0.07]">
                  <GIcon name="description" size={18} className="text-war-text-secondary" />
                </div>
                <div className="flex-1">
                  <div className="mb-0.5 flex flex-wrap items-center gap-2">
                    <span className="text-[14px] font-semibold tracking-[-0.006em] text-white">{report.title}</span>
                    <span className={clsx(
                      'rounded-full px-2 py-0.5 text-[11px] font-semibold',
                      report.severity === 'CRITICAL' ? 'bg-[#ff453a]/15 text-[#ff6961]' : 'bg-[#ff9f0a]/15 text-[#ffb340]'
                    )}>{report.severity.toLowerCase()}</span>
                  </div>
                  <p className="text-[12px] text-war-text-muted">{report.subtitle}</p>
                  <p className="mb-2.5 mt-1 text-[13px] leading-relaxed text-war-text-secondary">{report.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[12px] tabular-nums text-war-text-muted">
                      <GIcon name="schedule" size={12} /> {report.lastGenerated}
                    </span>
                    <button
                      onClick={() => exportReport(report.id, report.title, report.subtitle, report.description)}
                      className="apple-button flex items-center gap-1 bg-white/10 px-3 py-1.5 text-[13px] text-white hover:bg-white/15"
                    >
                      <GIcon name="download" size={12} /> Export
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live News Feed */}
        <ReportsLiveSection news={liveNews} isLive={liveOk} lastUpdated={liveUpdated} isLoading={liveLoading} />
      </div>
    </div>
  );
}

function ReportsLiveSection({ news, isLive, lastUpdated, isLoading }: {
  news: { title: string; link: string; pubDate: string; source: string }[];
  isLive: boolean;
  lastUpdated: string;
  isLoading: boolean;
}) {

  if (isLoading) {
    return (
      <div className="glass-panel p-5">
        <div className="section-title mb-3">Live entertainment news</div>
        <div className="flex items-center justify-center gap-2.5 py-10">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/15 border-t-[#0a84ff]" />
          <span className="text-[13px] text-war-text-muted">Fetching live news…</span>
        </div>
      </div>
    );
  }

  if (news.length === 0) return null;

  return (
    <div className="glass-panel p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="section-title">Live entertainment news</span>
          {isLive && (
            <span className="flex items-center gap-1.5 rounded-full bg-[#30d158]/15 px-2.5 py-1">
              <GIcon name="radio" size={10} className="text-[#30d158] status-pulse" />
              <span className="text-[11px] font-semibold text-[#30d158]">Live</span>
            </span>
          )}
        </div>
        <span className="text-[12px] tabular-nums text-war-text-muted">
          {lastUpdated && `Updated ${new Date(lastUpdated).toLocaleTimeString('en-IN')}`}
        </span>
      </div>
      <div className="max-h-[420px] space-y-2 overflow-y-auto">
        {news.slice(0, 15).map((item, i) => {
          const sentiment = estimateSentiment(item.title);
          return (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3.5 transition hover:border-white/[0.12] hover:bg-white/[0.05]"
            >
              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-medium leading-snug text-white transition-colors group-hover:text-[#64a8ff]">
                  {item.title}
                </p>
                <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-[12px] text-war-text-muted">{item.source || 'News'}</span>
                  {item.pubDate && !isNaN(new Date(item.pubDate).getTime()) && (
                    <span className="text-[12px] tabular-nums text-war-text-muted">
                      {new Date(item.pubDate).toLocaleString('en-IN', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' })}
                    </span>
                  )}
                  <span className={clsx(
                    'text-[12px] font-semibold capitalize',
                    sentiment === 'NEGATIVE' && 'text-[#ff6961]',
                    sentiment === 'POSITIVE' && 'text-[#30d158]',
                    sentiment === 'NEUTRAL' && 'text-war-text-secondary'
                  )}>
                    {sentiment.toLowerCase()}
                  </span>
                </div>
              </div>
              <GIcon name="open_in_new" size={14} className="mt-1 shrink-0 text-war-text-muted opacity-0 transition group-hover:opacity-100" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
