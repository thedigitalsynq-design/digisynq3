import { useState } from 'react';
import { Users, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Heart } from 'lucide-react';
import { VETTED_CREATORS, CreatorTalent } from '../../data/socialAgencyData';
import { playPing, playSynqChime } from '../../utils/audio';

interface CreatorRosterHubProps {
  onOpenAuditModal: (context: string) => void;
}

export function CreatorRosterHub({ onOpenAuditModal }: CreatorRosterHubProps) {
  const [selectedNiche, setSelectedNiche] = useState<string>('All');
  const [selectedCreators, setSelectedCreators] = useState<string[]>([]);

  const niches = ['All', 'Beauty & Skincare', 'Streetwear & Style', 'Tech & Gadgets', 'Gen Z Comedy', 'Fitness & Wellness', 'Food & Flavor'];

  const filtered = selectedNiche === 'All'
    ? VETTED_CREATORS
    : VETTED_CREATORS.filter(c => c.niche === selectedNiche);

  const toggleSelectCreator = (id: string, name: string) => {
    playPing(520, 'sine', 0.05);
    if (selectedCreators.includes(id)) {
      setSelectedCreators(selectedCreators.filter(c => c !== id));
    } else {
      setSelectedCreators([...selectedCreators, id]);
    }
  };

  return (
    <section id="creator-roster" className="py-16 sm:py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-mono text-pink-400 mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>850+ PRE-VETTED CREATORS</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              MEET YOUR NEW <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-amber-300">
                CREATOR FLEET.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-white/60 max-w-md">
            No robotic influencers holding products awkwardly. We partner exclusively with authentic creators who have fanatical comment sections and verified retention rates.
          </p>
        </div>

        {/* Niche Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {niches.map((niche) => {
            const isActive = selectedNiche === niche;
            return (
              <button
                key={niche}
                onClick={() => {
                  playPing(440, 'sine', 0.04);
                  setSelectedNiche(niche);
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-pink-500 text-white font-semibold shadow-lg shadow-pink-500/20'
                    : 'bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10'
                }`}
              >
                {niche}
              </button>
            );
          })}
        </div>

        {/* Selected Creators Floating Dock (If any selected) */}
        {selectedCreators.length > 0 && (
          <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-pink-900/40 to-rose-900/40 border border-pink-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-pink-400 animate-pulse" />
              <span className="text-sm font-semibold text-white">
                {selectedCreators.length} Creator{selectedCreators.length > 1 ? 's' : ''} Staged in Campaign Roster
              </span>
            </div>

            <button
              onClick={() => {
                playSynqChime();
                onOpenAuditModal(`Targeted Creator Shortlist: ${selectedCreators.join(', ')}`);
              }}
              className="px-5 py-2 rounded-full bg-pink-500 hover:bg-pink-400 text-white font-semibold text-xs tracking-wide shadow-lg shadow-pink-500/30 transition-all"
            >
              REQUEST ROSTER CO-OP PROPOSAL →
            </button>
          </div>
        )}

        {/* Creators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((creator) => {
            const isSelected = selectedCreators.includes(creator.id);
            return (
              <div
                key={creator.id}
                className={`rounded-2xl bg-[#0B0D16] border p-6 flex flex-col justify-between transition-all duration-300 shadow-xl ${
                  isSelected
                    ? 'border-pink-500 bg-pink-950/20 shadow-pink-500/10'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  {/* Creator Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={creator.avatar}
                        alt={creator.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
                        loading="lazy"
                      />
                      <div>
                        <div className="flex items-center gap-1">
                          <h3 className="font-display font-bold text-base text-white">
                            {creator.name}
                          </h3>
                          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                        </div>
                        <span className="text-xs font-mono text-pink-400">
                          {creator.handle}
                        </span>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-white/70">
                      {creator.primaryPlatform}
                    </span>
                  </div>

                  {/* Core Creator Stats */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5 mb-4 text-center">
                    <div>
                      <span className="text-[10px] text-white/50 font-mono block">Followers</span>
                      <span className="font-display font-bold text-sm text-white">{creator.followers}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-white/50 font-mono block">Avg Views</span>
                      <span className="font-display font-bold text-sm text-white">{creator.avgViews}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-white/50 font-mono block">Engagement</span>
                      <span className="font-display font-bold text-sm text-emerald-400">{creator.engagementRate}</span>
                    </div>
                  </div>

                  {/* Audience Demographic */}
                  <div className="text-xs text-white/70 mb-3">
                    <span className="text-white/40 font-mono text-[10px] block uppercase">Audience Demographic</span>
                    <span className="font-medium text-white/90">{creator.audienceSplit}</span>
                  </div>

                  {/* Signature Content Style */}
                  <div className="text-xs text-white/70 mb-4">
                    <span className="text-white/40 font-mono text-[10px] block uppercase">Signature Creative Style</span>
                    <p className="mt-0.5 leading-relaxed">{creator.signatureStyle}</p>
                  </div>

                  {/* Brand Fits */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {creator.brandFits.map((fit, i) => (
                      <span key={i} className="px-2 py-0.5 rounded text-[10px] font-mono bg-pink-500/10 text-pink-300 border border-pink-500/20">
                        {fit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Select / Stash Button */}
                <button
                  onClick={() => toggleSelectCreator(creator.id, creator.name)}
                  className={`w-full py-2.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 ${
                    isSelected
                      ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/30'
                      : 'bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${isSelected ? 'fill-white' : ''}`} />
                  <span>{isSelected ? 'SELECTED IN ROSTER' : 'ADD TO CAMPAIGN ROSTER'}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Seeding Package Info */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center max-w-2xl mx-auto">
          <p className="text-xs text-white/60 leading-relaxed">
            Every creator partnership through SYNQ-SQUARE includes full digital advertising whitelisting rights (Meta Advantage+ and TikTok Spark Ads) with zero agency markup fees on creator fees.
          </p>
        </div>

      </div>
    </section>
  );
}
