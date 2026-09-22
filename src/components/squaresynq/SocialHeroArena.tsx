import { useState, useEffect } from 'react';
import { Play, Pause, Heart, MessageCircle, Share2, Music, Sparkles, TrendingUp, ArrowRight, ShieldCheck, Flame, Zap } from 'lucide-react';
import { FEATURED_CAMPAIGNS, AGENCY_STATS, SocialCampaign } from '../../data/socialAgencyData';
import { playPing, playSynqChime } from '../../utils/audio';

interface SocialHeroArenaProps {
  onOpenAuditModal: (context?: string) => void;
  onExploreWork: () => void;
  onOpenCalculator: () => void;
  onSelectCampaign: (campaign: SocialCampaign) => void;
}

export function SocialHeroArena({
  onOpenAuditModal,
  onExploreWork,
  onOpenCalculator,
  onSelectCampaign
}: SocialHeroArenaProps) {
  const [selectedCampaignIndex, setSelectedCampaignIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [likeCount, setLikeCount] = useState<number>(48210);
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; x: number; y: number }[]>([]);
  const [videoProgress, setVideoProgress] = useState<number>(35);

  const activeCampaign = FEATURED_CAMPAIGNS[selectedCampaignIndex];

  // Auto-advance video progress bar for simulation
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setVideoProgress((prev) => (prev >= 100 ? 0 : prev + 4));
    }, 250);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleLikeTap = () => {
    playPing(523.25, 'sine', 0.08);
    setHasLiked(true);
    setLikeCount((prev) => prev + 1);

    const newHeart = {
      id: Date.now(),
      x: 30 + Math.random() * 40,
      y: 40 + Math.random() * 30
    };
    setFloatingHearts((prev) => [...prev.slice(-6), newHeart]);

    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1200);
  };

  const handleCampaignSwitch = (index: number) => {
    playPing(440 + index * 60, 'triangle', 0.06);
    setSelectedCampaignIndex(index);
    setVideoProgress(0);
    setHasLiked(false);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-white/5">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-pink-600/15 via-rose-600/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-48 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Narrative & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Agency Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-white/90 mb-6 backdrop-blur-md shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
              <span className="text-pink-400 font-semibold tracking-wider">CREATIVE SOCIAL AGENCY</span>
              <span className="text-white/30">|</span>
              <span className="text-white/70">TIKTOK // REELS // SHORTS</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight leading-[1.05] text-white mb-6">
              WE DON’T POST CONTENT. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-amber-300">
                WE ENGINEER OBSESSION.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-white/70 max-w-2xl font-normal leading-relaxed mb-8">
              Traditional agencies pitch 40-page PDF decks and post lifeless stock photos. We script, film, 
              sound-design, and scale viral short-form video fleets that hijack culture, spark fandoms, and print millions in trackable revenue.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                id="hero-book-audit-btn"
                onClick={() => {
                  playSynqChime();
                  onOpenAuditModal('Hero Main CTA');
                }}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>BOOK FREE CREATIVE AUDIT</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-explore-work-btn"
                onClick={() => {
                  playPing(480, 'sine', 0.05);
                  onExploreWork();
                }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium tracking-wide bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all hover:border-white/20"
              >
                <Flame className="w-4 h-4 text-pink-400" />
                <span>SEE VIRAL REELS</span>
              </button>

              <button
                id="hero-calc-btn"
                onClick={() => {
                  playPing(520, 'triangle', 0.05);
                  onOpenCalculator();
                }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Calculate Your ROAS</span>
              </button>
            </div>

            {/* High-Impact Proof Stats Strip */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {AGENCY_STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium text-white/80 mt-0.5">
                    {stat.label}
                  </span>
                  <span className="text-[10px] font-mono text-pink-400/90 mt-0.5">
                    {stat.trend}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Hero: Interactive Smartphone Reel Simulator */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Interactive Phone Mockup */}
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[9/17] bg-[#050608] rounded-[44px] p-3 border-[6px] border-[#1C1F2B] shadow-2xl shadow-pink-500/10 overflow-hidden group">
              
              {/* Phone Dynamic Island / Speaker Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-2 w-28 h-6 bg-black rounded-full px-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1A1D27]" />
                <span className="w-10 h-1 bg-[#1A1D27] rounded-full" />
              </div>

              {/* Video Player Canvas Screen */}
              <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-gradient-to-b from-[#10131E] to-[#08090E] flex flex-col justify-between p-4 pt-10">
                
                {/* Simulated Dynamic Video Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${activeCampaign.coverGradient} opacity-40 transition-all duration-700`} />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black/80" />

                {/* Simulated Content Visual Representation */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center px-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono text-pink-300 mb-3 shadow-lg">
                    <Sparkles className="w-3 h-3 text-pink-400" />
                    <span>{activeCampaign.thumbnailBadge}</span>
                  </div>

                  <p className="font-display font-bold text-lg text-white leading-tight mb-2 drop-shadow-md">
                    {activeCampaign.title}
                  </p>

                  <div className="p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs text-white/90 italic max-w-[260px] shadow-lg">
                    {activeCampaign.creativeHook}
                  </div>

                  {/* Play / Pause Toggle Center Button */}
                  <button
                    onClick={() => {
                      playPing(isPlaying ? 380 : 520, 'sine', 0.05);
                      setIsPlaying(!isPlaying);
                    }}
                    className="mt-4 w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all shadow-xl"
                  >
                    {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
                  </button>
                </div>

                {/* Floating Heart Animations */}
                {floatingHearts.map((heart) => (
                  <div
                    key={heart.id}
                    style={{ left: `${heart.x}%`, top: `${heart.y}%` }}
                    className="absolute z-40 pointer-events-none animate-bounce text-pink-500 drop-shadow-lg"
                  >
                    <Heart className="w-8 h-8 fill-pink-500" />
                  </div>
                ))}

                {/* Right Interactive Engagement Icons (TikTok / Reels Style) */}
                <div className="absolute right-3 bottom-20 z-20 flex flex-col items-center gap-4">
                  {/* Like Button */}
                  <button
                    onClick={handleLikeTap}
                    className="flex flex-col items-center gap-1 focus:outline-none group/btn"
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border transition-all ${
                      hasLiked
                        ? 'bg-pink-500/30 border-pink-400 text-pink-400 scale-110'
                        : 'bg-black/50 border-white/20 text-white group-hover/btn:scale-105'
                    }`}>
                      <Heart className={`w-5 h-5 ${hasLiked ? 'fill-pink-500 text-pink-500' : ''}`} />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-white drop-shadow">
                      {(likeCount / 1000).toFixed(1)}k
                    </span>
                  </button>

                  {/* Comment Button */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-white drop-shadow">
                      1.8k
                    </span>
                  </div>

                  {/* Share Button */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <Share2 className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-white drop-shadow">
                      {activeCampaign.metrics.shares}
                    </span>
                  </div>
                </div>

                {/* Bottom Overlay: Client Info, Sound Ticker & Progress Bar */}
                <div className="relative z-20 flex flex-col gap-2 pt-2 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-white font-display">
                          {activeCampaign.client}
                        </span>
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <p className="text-[10px] text-white/60 line-clamp-1">
                        {activeCampaign.category}
                      </p>
                    </div>

                    <button
                      onClick={() => onSelectCampaign(activeCampaign)}
                      className="px-2 py-1 rounded bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/40 text-[10px] font-mono text-pink-300 transition-colors"
                    >
                      STRATEGY
                    </button>
                  </div>

                  {/* Rotating Audio Track Ticker */}
                  <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-white/80 overflow-hidden">
                    <Music className="w-3 h-3 text-pink-400 shrink-0 animate-spin" style={{ animationDuration: '4s' }} />
                    <span className="truncate">{activeCampaign.soundTrack}</span>
                  </div>

                  {/* Video Scrubber Progress Bar */}
                  <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-pink-500 to-amber-400 transition-all duration-300"
                      style={{ width: `${videoProgress}%` }}
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Campaign Selectors (Switch Active Reel Demo) */}
            <div className="w-full max-w-[360px] flex items-center justify-center gap-2 mt-4">
              {FEATURED_CAMPAIGNS.map((camp, idx) => (
                <button
                  key={camp.id}
                  onClick={() => handleCampaignSwitch(idx)}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-mono transition-all text-center truncate ${
                    selectedCampaignIndex === idx
                      ? 'bg-pink-500/20 border border-pink-500/50 text-pink-300 font-bold'
                      : 'bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {camp.client.split(' ')[0]}
                </button>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
