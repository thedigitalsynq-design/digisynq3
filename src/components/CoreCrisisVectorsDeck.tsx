import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Flame, Users, CheckCircle, Zap, RefreshCw, ExternalLink } from 'lucide-react';
import { soundFx } from '../lib/soundFx';
import { useToast } from './Toaster';
import { TextScramble } from './TextScramble';

interface VectorState {
  id: string;
  title: string;
  category: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  bleedingRateLakhPerHour: number;
  threatSummary: string;
  sourceBreakdown: string;
  evidence: string[];
  recommendedAction: string;
  actionType: string;
  isMitigating?: boolean;
}

export function CoreCrisisVectorsDeck({
  activeFilmTitle = 'THE GREATEST OF ALL TIME (GOAT)',
  onOpenCountermeasure,
}: {
  activeFilmTitle?: string;
  onOpenCountermeasure?: (type: string) => void;
}) {
  const toast = useToast();
  const [dispatchingId, setDispatchingId] = useState<string | null>(null);
  const [activeVectorId, setActiveVectorId] = useState<string>('piracy');

  const [vectors, setVectors] = useState<Record<string, VectorState>>({
    piracy: {
      id: 'piracy',
      title: 'Piracy Leaks & Cam-Rip Injunction',
      category: 'COPYRIGHT & TELEGRAM ENFORCEMENT',
      severity: 'CRITICAL',
      bleedingRateLakhPerHour: 48,
      threatSummary: `Climax 4K sequence & pre-release cam-rip circulating on 14 Telegram channels and Terabox mirrors. Rapid leak velocity detected.`,
      sourceBreakdown: '14 Telegram Channels (88K users) · 3 Cyberlockers · 2 Mirror Portals',
      evidence: [
        't.me/CineLeaks_GOAT_HD (54,200 members) — Active 4K Climax Link',
        'Terabox token #8849204_leaks — 18,400 downloads in 3 hours',
        'Tamilrockers mirror redirecting via Cloudflare orange cloud',
      ],
      recommendedAction: 'Execute John Doe Injunction & Nuke Telegram Feeds',
      actionType: 'piracy_dmca',
    },
    review_bombing: {
      id: 'review_bombing',
      title: 'Anti-Review Bombing Defense',
      category: 'AUDIENCE WOM & RATING INTEGRITY',
      severity: 'HIGH',
      bleedingRateLakhPerHour: 32,
      threatSummary: `Severe rating anomaly detected: BookMyShow Verified Ticket Buyers rate 8.9★ vs Open Public IMDb/Google at 4.1★. 44% of negative reviews originate from bot clusters created <48h ago.`,
      sourceBreakdown: '44% Bot Cluster Ratio · IMDb 4.1★ vs BMS 8.9★ · -16% Evening Walk-ins',
      evidence: [
        '1,240 identical 1-star reviews submitted between 07:45 - 08:30 AM before show concluded',
        'Sentiment anomaly: 82% positive post-show exit polls vs bot-manipulated portals',
        'Audience Advance Booking pacing dampened by 16% in metro multiplexes',
      ],
      recommendedAction: 'Trigger BMS/IMDb Fraud Audit & Deploy Verified Buyer Surge',
      actionType: 'press_release',
    },
    boycott: {
      id: 'boycott',
      title: 'Coordinated Boycott Neutralizer',
      category: 'POLITICAL & REGIONAL CONTROVERSIES',
      severity: 'HIGH',
      bleedingRateLakhPerHour: 22,
      threatSummary: `Distorted 8-second press meet clip circulating with malicious hashtag #BoycottGOAT. AI bot-farm amplification identified in 78% of retweets.`,
      sourceBreakdown: '42,000 Tweets in 6 Hours · 78% Bot-Amplified · North India Theatres',
      evidence: [
        'Hashtag #BoycottCinema amplified by 380 coordinated automated accounts',
        'Context missing: Full 45-minute video shows completely benign statement',
        'Distributor feedback: Single-screen footfalls hesitant in Delhi-NCR circuit',
      ],
      recommendedAction: 'Deploy Fact-Check Advisory & Mobilize Positive Narrative',
      actionType: 'press_release',
    },
    fan_war: {
      id: 'fan_war',
      title: 'Fan War Sabotage Shield',
      category: 'RIVAL STAR BASE SMILING OPERATIONS',
      severity: 'MEDIUM',
      bleedingRateLakhPerHour: 18,
      threatSummary: `Rival superstar fandom circulating doctored videos claiming "empty cinema halls" filmed during 6:00 AM theatre sanitization to induce perceived failure.`,
      sourceBreakdown: 'Doctored Reels & X Spaces · 3,100 Virality Velocity · South Single Screens',
      evidence: [
        'Video claiming "Zero occupancy in Rohini Silver Screens" debunked by BMS 92% housefull proof',
        'X Spaces hosting coordinated audio slander campaigns with 12K listeners',
        'Fan association helpline requesting studio-verified crowd celebration footage',
      ],
      recommendedAction: 'Release 4K Uncut Climax Promo & Mobilize Fan Clubs',
      actionType: 'exhibitor_memo',
    },
  });

  const activeVector = vectors[activeVectorId];

  const totalBleedingRate = Object.values(vectors)
    .filter((v) => !v.isMitigating)
    .reduce((acc, curr) => acc + curr.bleedingRateLakhPerHour, 0);

  const handleDispatchAction = async (vectorId: string) => {
    soundFx.playAlert();
    setDispatchingId(vectorId);

    try {
      const resp = await fetch('/api/damage-control/dispatch-action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          vectorId,
          filmTitle: activeFilmTitle,
          actionType: vectors[vectorId]?.actionType || 'piracy_dmca',
        }),
      });

      if (!resp.ok) throw new Error('Edge dispatch failed');
      const data = await resp.json();

      soundFx.playSuccess();
      toast(
        `SUCCESS: ${vectors[vectorId].title} Countermeasure Dispatched! [${data.dispatchId || 'EDGE-DISPATCH'}]`,
        'success'
      );

      setVectors((prev) => ({
        ...prev,
        [vectorId]: {
          ...prev[vectorId],
          isMitigating: true,
          bleedingRateLakhPerHour: Math.max(4, Math.round(prev[vectorId].bleedingRateLakhPerHour * 0.2)),
        },
      }));
    } catch {
      soundFx.playSuccess();
      toast(`Simulated Edge Countermeasure Deployed for ${vectors[vectorId].title}`, 'info');
      setVectors((prev) => ({
        ...prev,
        [vectorId]: {
          ...prev[vectorId],
          isMitigating: true,
          bleedingRateLakhPerHour: 4,
        },
      }));
    } finally {
      setDispatchingId(null);
    }
  };

  return (
    <section className="bento-card bento-card-danger p-5 sm:p-7">
      {/* Ambient background glow */}
      <div className="bento-glow-ambient -top-12 -right-12 bg-red-600/10" />

      {/* Top Threat Ticker & Headline */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-ping" />
            <span className="bento-badge bg-red-500/15 text-red-400 border border-red-500/30">
              WAR ROOM · 4 CORE CRISIS VECTORS
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white mt-2 flex items-center gap-2">
            <span>Threat Neutralization Console:</span>
            <span className="text-amber-400">
              <TextScramble text={activeFilmTitle} />
            </span>
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5">
            Automated copyright enforcement, rating smear defense, and coordinated boycott suppression.
          </p>
        </div>

        {/* Real-time Bleeding Velocity Metric */}
        <div className="flex items-center gap-3">
          <div className="px-4 py-2.5 rounded-2xl bg-red-950/40 border border-red-500/40 font-mono text-right shadow-inner">
            <span className="text-[10px] text-red-300 block uppercase tracking-wider">Estimated Box Office Bleed</span>
            <span className="text-lg sm:text-xl font-bold text-red-400">
              ₹{totalBleedingRate} Lakh / hr
            </span>
          </div>
          <div className="px-4 py-2.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 font-mono text-right shadow-inner">
            <span className="text-[10px] text-emerald-300 block uppercase tracking-wider">Revenue Protected</span>
            <span className="text-lg sm:text-xl font-bold text-emerald-400">₹4.82 Cr</span>
          </div>
        </div>
      </div>

      {/* Bento Grid Architecture */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 mt-5">
        {/* Main Hero Bento Tile (Active Selected Vector) */}
        <motion.div
          key={activeVector.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="lg:col-span-7 rounded-2xl border border-red-500/40 bg-gradient-to-br from-[#1c0f16]/90 via-[#0e111a]/95 to-[#0b0c12]/95 p-5 sm:p-6 shadow-2xl flex flex-col justify-between"
        >
          <div>
            {/* Header of Active Vector */}
            <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-red-400 font-bold">
                    {activeVector.category}
                  </span>
                  <span
                    className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full ${
                      activeVector.isMitigating
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : activeVector.severity === 'CRITICAL'
                        ? 'bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse'
                        : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                    }`}
                  >
                    {activeVector.isMitigating ? 'MITIGATING ACTIVE' : activeVector.severity}
                  </span>
                </div>
                <h3 className="text-xl font-black text-white font-mono flex items-center gap-2 mt-1">
                  {activeVector.id === 'piracy' && <Shield className="w-5 h-5 text-red-400 shrink-0" />}
                  {activeVector.id === 'review_bombing' && <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />}
                  {activeVector.id === 'boycott' && <Flame className="w-5 h-5 text-orange-400 shrink-0" />}
                  {activeVector.id === 'fan_war' && <Users className="w-5 h-5 text-purple-400 shrink-0" />}
                  <span>{activeVector.title}</span>
                </h3>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">Bleed Pacing</span>
                <span className={`text-base font-bold font-mono ${activeVector.isMitigating ? 'text-emerald-400' : 'text-red-400'}`}>
                  ₹{activeVector.bleedingRateLakhPerHour} Lakh/hr
                </span>
              </div>
            </div>

            {/* Threat Diagnosis & Intelligence */}
            <div className="mt-4 space-y-3.5">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                  Active Intelligence Diagnosis
                </span>
                <p className="text-[13px] text-zinc-200 leading-relaxed font-sans">
                  {activeVector.threatSummary}
                </p>
                <div className="mt-2 text-xs font-mono text-amber-300 flex items-center gap-1.5">
                  <span className="text-zinc-500">Topology:</span>
                  <span>{activeVector.sourceBreakdown}</span>
                </div>
              </div>

              {/* Intercepted Signals & Telemetry Proof */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 font-mono text-xs space-y-2">
                <span className="text-[10px] text-red-400 uppercase tracking-wider block font-bold">
                  Intercepted Signals & Telemetry Proof
                </span>
                <ul className="space-y-1.5">
                  {activeVector.evidence.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-zinc-300 bg-white/[0.02] p-2 rounded-lg border border-white/5">
                      <span className="text-red-400 font-bold shrink-0">[{idx + 1}]</span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Action Bar Footer */}
          <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            {onOpenCountermeasure && (
              <button
                onClick={() => {
                  soundFx.playClick();
                  onOpenCountermeasure(activeVector.actionType);
                }}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-semibold text-zinc-200 transition active:scale-95"
                title="Open Legal & Operational Document Template"
              >
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                <span>View Legal & Press Brief</span>
              </button>
            )}

            <button
              disabled={dispatchingId === activeVector.id || activeVector.isMitigating}
              onClick={() => handleDispatchAction(activeVector.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white shadow-xl transition active:scale-95 ${
                activeVector.isMitigating
                  ? 'bg-emerald-600 cursor-default'
                  : 'bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-red-500/30'
              }`}
            >
              {dispatchingId === activeVector.id ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Deploying Edge Action...</span>
                </>
              ) : activeVector.isMitigating ? (
                <>
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Countermeasure Active</span>
                </>
              ) : (
                <>
                  <Zap className="w-3.5 h-3.5" />
                  <span>{activeVector.recommendedAction}</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Right Side 3 Bento Tiles (Tactical Secondary Grid) */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-3.5">
          {Object.values(vectors)
            .filter((v) => v.id !== activeVectorId)
            .map((vec) => {
              const isCrit = vec.severity === 'CRITICAL';
              const isHigh = vec.severity === 'HIGH';

              return (
                <div
                  key={vec.id}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveVectorId(vec.id);
                  }}
                  className="group relative cursor-pointer rounded-2xl border border-white/10 bg-[#12141e]/90 p-4 transition-all duration-200 hover:border-white/25 hover:bg-[#161926] shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                        {vec.id === 'piracy' ? 'VECTOR 1' : vec.id === 'review_bombing' ? 'VECTOR 2' : vec.id === 'boycott' ? 'VECTOR 3' : 'VECTOR 4'}
                      </span>
                      <span
                        className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full ${
                          vec.isMitigating
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                            : isCrit
                            ? 'bg-red-500/20 text-red-400 border border-red-500/40'
                            : isHigh
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                            : 'bg-purple-500/20 text-purple-400 border border-purple-500/40'
                        }`}
                      >
                        {vec.isMitigating ? 'MITIGATING' : vec.severity}
                      </span>
                    </div>

                    <div className="font-bold text-[14px] text-white flex items-center gap-2">
                      {vec.id === 'piracy' && <Shield className="w-4 h-4 text-red-400 shrink-0" />}
                      {vec.id === 'review_bombing' && <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />}
                      {vec.id === 'boycott' && <Flame className="w-4 h-4 text-orange-400 shrink-0" />}
                      {vec.id === 'fan_war' && <Users className="w-4 h-4 text-purple-400 shrink-0" />}
                      <span className="truncate">{vec.title}</span>
                    </div>

                    <p className="mt-1 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                      {vec.threatSummary}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-400">
                      Bleed: <strong className={vec.isMitigating ? 'text-emerald-400' : 'text-red-400'}>₹{vec.bleedingRateLakhPerHour}L/hr</strong>
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDispatchAction(vec.id);
                      }}
                      disabled={dispatchingId === vec.id || vec.isMitigating}
                      className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] font-semibold text-white transition active:scale-95 flex items-center gap-1"
                    >
                      <Zap className="w-3 h-3 text-amber-400" />
                      <span>{vec.isMitigating ? 'Active' : 'Deploy'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
