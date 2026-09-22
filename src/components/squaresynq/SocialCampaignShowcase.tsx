import { useState } from 'react';
import { Sparkles, TrendingUp, Eye, Heart, Share2, ArrowUpRight, Play, CheckCircle2, MessageSquare, Flame } from 'lucide-react';
import { FEATURED_CAMPAIGNS, SocialCampaign } from '../../data/socialAgencyData';
import { playPing, playSynqChime } from '../../utils/audio';

interface SocialCampaignShowcaseProps {
  onSelectCampaign: (campaign: SocialCampaign) => void;
  onOpenAuditModal: (context?: string) => void;
}

export function SocialCampaignShowcase({
  onSelectCampaign,
  onOpenAuditModal
}: SocialCampaignShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Beauty & Wellness', 'Beverage & Food', 'Consumer Tech', 'Fashion & Apparel'];

  const filteredCampaigns = activeCategory === 'All'
    ? FEATURED_CAMPAIGNS
    : FEATURED_CAMPAIGNS.filter(c => c.category === activeCategory);

  return (
    <section id="campaigns-showcase" className="py-16 sm:py-24 border-b border-white/5 relative">
      {/* Subtle Grid / Noise */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-mono text-pink-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VIRAL REEL ARCHIVE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              PROVEN CAMPAIGNS. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-300">
                EXPLOSIVE METRICS.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-white/60 max-w-md font-normal">
            Every campaign is engineered from a psychological hook, native audio trend, and aggressive creator seeding cadence. Tap any case to deconstruct the blueprint.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  playPing(460, 'sine', 0.04);
                  setActiveCategory(cat);
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-pink-500 text-white font-semibold shadow-lg shadow-pink-500/20'
                    : 'bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCampaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="group relative rounded-3xl bg-[#0C0E17] border border-white/10 hover:border-pink-500/50 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-pink-500/10"
            >
              {/* Background Ambient Glow */}
              <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${campaign.coverGradient} blur-3xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity`} />

              <div>
                {/* Header Tag and Platforms */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-pink-400 font-semibold">
                      {campaign.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400 font-bold">
                      {campaign.thumbnailBadge}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-white/50">
                    {campaign.platforms.join(' • ')}
                  </div>
                </div>

                {/* Client Name & Campaign Title */}
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight group-hover:text-pink-300 transition-colors mb-2">
                  {campaign.title}
                </h3>
                <p className="text-sm font-medium text-white/50 mb-4">
                  Client: <span className="text-white font-semibold">{campaign.client}</span>
                </p>

                {/* The Hook Highlight Box */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
                  <span className="text-[10px] font-mono tracking-widest text-pink-400 font-bold block mb-1">
                    THE VIRAL HOOK
                  </span>
                  <p className="text-sm text-white/90 italic">
                    {campaign.creativeHook}
                  </p>
                </div>

                {/* Verified Performance Metrics Strip */}
                <div className="grid grid-cols-3 gap-3 py-4 border-y border-white/10 mb-6">
                  <div>
                    <span className="text-xs text-white/50 block">Organic Views</span>
                    <span className="font-display font-bold text-xl text-white">
                      {campaign.metrics.views}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-white/50 block">Engagement</span>
                    <span className="font-display font-bold text-xl text-emerald-400">
                      {campaign.metrics.engagement}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-white/50 block">Blended ROAS</span>
                    <span className="font-display font-bold text-xl text-amber-400">
                      {campaign.metrics.roas}
                    </span>
                  </div>
                </div>

                {/* Strategy Snapshot List */}
                <div className="space-y-2 mb-6 text-xs text-white/70">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                    <span><strong className="text-white">Video Style:</strong> {campaign.videoStyle}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                    <span><strong className="text-white">Audio Status:</strong> {campaign.soundTrendStatus} ({campaign.soundTrack})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                    <span><strong className="text-white">Creator Seeding:</strong> {campaign.strategyDetails.creatorSeedingCount} creators activated</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    playSynqChime();
                    onSelectCampaign(campaign);
                  }}
                  className="inline-flex items-center gap-2 text-xs font-semibold font-mono text-pink-400 hover:text-pink-300 transition-colors"
                >
                  <span>DECONSTRUCT BLUEPRINT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    playPing(500, 'triangle', 0.08);
                    onOpenAuditModal(`Campaign Reference: ${campaign.client}`);
                  }}
                  className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/15 text-xs text-white border border-white/10 transition-colors"
                >
                  Clone This Strategy
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Pitch CTA */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-pink-900/30 via-rose-900/20 to-amber-900/20 border border-pink-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-pink-400 uppercase">
              Ready to out-post and out-rank your competition?
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-1">
              Let’s build your brand’s next 50M view breakout campaign.
            </h3>
          </div>

          <button
            onClick={() => {
              playSynqChime();
              onOpenAuditModal('Showcase Bottom Banner');
            }}
            className="px-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-pink-100 transition-colors shadow-xl shrink-0"
          >
            REQUEST FREE AUDIT & SCRIPT PITCH
          </button>
        </div>

      </div>
    </section>
  );
}
