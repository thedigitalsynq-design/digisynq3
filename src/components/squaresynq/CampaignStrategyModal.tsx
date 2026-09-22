import { X, Sparkles, TrendingUp, CheckCircle, MessageSquare, Volume2, ArrowRight } from 'lucide-react';
import { SocialCampaign } from '../../data/socialAgencyData';
import { playPing, playSynqChime } from '../../utils/audio';

interface CampaignStrategyModalProps {
  campaign: SocialCampaign | null;
  onClose: () => void;
  onOpenAuditModal: (context: string) => void;
}

export function CampaignStrategyModal({
  campaign,
  onClose,
  onOpenAuditModal
}: CampaignStrategyModalProps) {
  if (!campaign) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#0E101A] border border-white/20 p-6 sm:p-10 text-white shadow-2xl shadow-pink-500/20 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => {
            playPing(380, 'sine', 0.05);
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 rounded bg-pink-500/10 text-pink-400 border border-pink-500/30 text-xs font-mono font-bold">
              {campaign.category}
            </span>
            <span className="text-xs text-white/50 font-mono">
              VERIFIED CAMPAIGN BLUEPRINT
            </span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
            {campaign.title}
          </h2>
          <p className="text-white/60 text-sm mt-1">
            Brand: <strong className="text-white">{campaign.client}</strong> — {campaign.tagline}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-8">
          <div>
            <span className="text-xs text-white/50 block">Total Organic Views</span>
            <span className="font-display font-bold text-2xl text-white">{campaign.metrics.views}</span>
          </div>
          <div>
            <span className="text-xs text-white/50 block">Engagement Rate</span>
            <span className="font-display font-bold text-2xl text-emerald-400">{campaign.metrics.engagement}</span>
          </div>
          <div>
            <span className="text-xs text-white/50 block">Blended Paid ROAS</span>
            <span className="font-display font-bold text-2xl text-amber-400">{campaign.metrics.roas}</span>
          </div>
          <div>
            <span className="text-xs text-white/50 block">Net New Followers</span>
            <span className="font-display font-bold text-2xl text-pink-400">{campaign.metrics.followerGrowth}</span>
          </div>
        </div>

        {/* Deep Strategy Sections */}
        <div className="space-y-6 text-sm mb-8">
          
          {/* Challenge & Creative Solution */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
            <h4 className="font-display font-bold text-base text-white mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-500" />
              The Market Friction & Breakthrough
            </h4>
            <div className="space-y-2 text-white/80">
              <p><strong className="text-white">Initial Challenge:</strong> {campaign.strategyDetails.challenge}</p>
              <p><strong className="text-white">Creative Execution:</strong> {campaign.strategyDetails.creativeStrategy}</p>
            </div>
          </div>

          {/* Hook Formula Deconstructed */}
          <div className="p-5 rounded-2xl bg-pink-500/[0.04] border border-pink-500/20">
            <h4 className="font-display font-bold text-base text-pink-300 mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-pink-400" />
              Psychological Hook Formula (0 - 3 Seconds)
            </h4>
            <div className="p-3 rounded-xl bg-black/50 border border-white/10 text-white italic mb-2">
              "{campaign.creativeHook}"
            </div>
            <p className="text-xs text-white/70">
              <strong className="text-white">Why it trapped attention:</strong> {campaign.strategyDetails.hookFormula}
            </p>
          </div>

          {/* Audio & Sound Strategy */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
            <h4 className="font-display font-bold text-base text-white mb-2 flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-amber-400" />
              Audio & Sound Architecture
            </h4>
            <p className="text-white/80 mb-2">
              <strong className="text-white">Soundtrack:</strong> {campaign.soundTrack}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300">
              <span>Status: {campaign.soundTrendStatus}</span>
            </div>
          </div>

          {/* Sample Community Reaction / Comments */}
          <div>
            <h4 className="font-display font-bold text-base text-white mb-3 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              Live Community Reception (Top Comments)
            </h4>
            <div className="space-y-2.5">
              {campaign.sampleComments.map((c, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-xs text-white">{c.user}</span>
                      <span className="text-[11px] font-mono text-white/40">{c.handle}</span>
                      {c.verified && (
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-blue-500/20 text-blue-400">VERIFIED</span>
                      )}
                    </div>
                    <p className="text-xs text-white/80 mt-1">{c.comment}</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-pink-400 shrink-0">
                    ♥ {c.likes}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables Delivered */}
          <div>
            <h4 className="font-display font-bold text-base text-white mb-3">
              Key Campaign Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {campaign.keyDeliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-white/80">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <div className="text-xs text-white/50 text-center sm:text-left">
            Want a custom strategy engineered specifically for your brand’s audience?
          </div>

          <button
            onClick={() => {
              playSynqChime();
              onOpenAuditModal(`Blueprint: ${campaign.client}`);
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-semibold text-sm shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 transition-all"
          >
            <span>ENGINEER THIS FOR MY BRAND</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
