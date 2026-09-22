import { useState } from 'react';
import { Calculator, Sparkles, TrendingUp, DollarSign, CheckCircle2, ArrowRight, Layers, Target } from 'lucide-react';
import { playPing, playSynqChime } from '../../utils/audio';

interface CampaignRoiCalculatorProps {
  onOpenAuditModal: (context: string) => void;
}

export function CampaignRoiCalculator({ onOpenAuditModal }: CampaignRoiCalculatorProps) {
  const [monthlyBudget, setMonthlyBudget] = useState<number>(18000);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['TikTok', 'Instagram Reels']);
  const [contentCadence, setContentCadence] = useState<'starter' | 'growth' | 'beast'>('growth');
  const [creatorTier, setCreatorTier] = useState<'nano_ugc' | 'micro' | 'hybrid'>('micro');

  const budgetTiers = [
    { label: '$8K/mo', value: 8000 },
    { label: '$18K/mo', value: 18000 },
    { label: '$35K/mo', value: 35000 },
    { label: '$65K/mo', value: 65000 },
    { label: '$120K/mo', value: 120000 }
  ];

  const togglePlatform = (p: string) => {
    playPing(440, 'sine', 0.04);
    if (selectedPlatforms.includes(p)) {
      if (selectedPlatforms.length > 1) {
        setSelectedPlatforms(selectedPlatforms.filter(x => x !== p));
      }
    } else {
      setSelectedPlatforms([...selectedPlatforms, p]);
    }
  };

  // Dynamic calculations based on state
  const videosCount = contentCadence === 'starter' ? 15 : contentCadence === 'growth' ? 30 : 60;
  
  const creatorSeedsCount = creatorTier === 'nano_ugc' 
    ? Math.round((monthlyBudget / 1000) * 2.2) 
    : creatorTier === 'micro' 
    ? Math.round((monthlyBudget / 1000) * 1.4) 
    : Math.round((monthlyBudget / 1000) * 0.9);

  const estimatedMinViews = Math.round((monthlyBudget * 180) / 10000) * 10;
  const estimatedMaxViews = Math.round((monthlyBudget * 420) / 10000) * 10;
  
  const projectedRoas = (3.8 + (monthlyBudget > 30000 ? 1.4 : 0.8)).toFixed(1);
  const estimatedCacDrop = monthlyBudget > 30000 ? '58%' : '42%';

  return (
    <section id="campaign-roi-calculator" className="py-16 sm:py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>ALGORITHMIC IMPACT MODEL</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            ESTIMATE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-pink-500">
              SOCIAL IMPACT & ROAS.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            Simulate your monthly creative volume, creator fleet size, projected video views, and blended return on ad spend.
          </p>
        </div>

        {/* Interactive Calculator Workspace */}
        <div className="rounded-3xl bg-[#0C0E18] border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Config Controls */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* 1. Monthly Budget Tiers */}
              <div>
                <label className="text-xs font-mono font-bold text-white/70 block uppercase tracking-wider mb-3">
                  1. Target Monthly Investment Level
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {budgetTiers.map((b) => {
                    const isSelected = monthlyBudget === b.value;
                    return (
                      <button
                        key={b.value}
                        onClick={() => {
                          playPing(480, 'sine', 0.05);
                          setMonthlyBudget(b.value);
                        }}
                        className={`py-2.5 px-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                          isSelected
                            ? 'bg-pink-500 text-white border-pink-400 shadow-lg shadow-pink-500/20'
                            : 'bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {b.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Platform Multi-Selector */}
              <div>
                <label className="text-xs font-mono font-bold text-white/70 block uppercase tracking-wider mb-3">
                  2. Priority Platforms
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['TikTok', 'Instagram Reels', 'YouTube Shorts', 'TikTok Shop'].map((plat) => {
                    const isSelected = selectedPlatforms.includes(plat);
                    return (
                      <button
                        key={plat}
                        onClick={() => togglePlatform(plat)}
                        className={`py-2 px-2.5 rounded-xl text-xs font-mono transition-all border text-center ${
                          isSelected
                            ? 'bg-white/15 border-pink-500/80 text-pink-300 font-bold'
                            : 'bg-white/5 border-white/10 text-white/50 hover:text-white'
                        }`}
                      >
                        {plat}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Content Velocity Cadence */}
              <div>
                <label className="text-xs font-mono font-bold text-white/70 block uppercase tracking-wider mb-3">
                  3. In-House Studio Video Output
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'starter', label: '15 Videos/mo', desc: 'Core Foundation' },
                    { id: 'growth', label: '30 Videos/mo', desc: 'Daily Omnipresence' },
                    { id: 'beast', label: '60 Videos/mo', desc: 'High-Volume Dominance' }
                  ].map((cad) => {
                    const isSelected = contentCadence === cad.id;
                    return (
                      <button
                        key={cad.id}
                        onClick={() => {
                          playPing(520, 'sine', 0.05);
                          setContentCadence(cad.id as any);
                        }}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'bg-pink-500/20 border-pink-500 text-white'
                            : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                        }`}
                      >
                        <span className="font-display font-bold text-xs block">{cad.label}</span>
                        <span className="text-[10px] text-white/50 font-mono">{cad.desc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. Creator Seeding Strategy */}
              <div>
                <label className="text-xs font-mono font-bold text-white/70 block uppercase tracking-wider mb-3">
                  4. Creator Fleet Strategy
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'nano_ugc', label: 'Pure UGC Volume', desc: '20-60 Nano Seeds' },
                    { id: 'micro', label: 'Micro Cults', desc: 'High-Engagement Seeds' },
                    { id: 'hybrid', label: 'Tier-1 Hybrid', desc: 'Micro + Macro Blitz' }
                  ].map((tier) => {
                    const isSelected = creatorTier === tier.id;
                    return (
                      <button
                        key={tier.id}
                        onClick={() => {
                          playPing(540, 'triangle', 0.05);
                          setCreatorTier(tier.id as any);
                        }}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'bg-amber-500/20 border-amber-500 text-white'
                            : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                        }`}
                      >
                        <span className="font-display font-bold text-xs block">{tier.label}</span>
                        <span className="text-[10px] text-white/50 font-mono">{tier.desc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Dynamic Projected Impact Card */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#121524] to-[#0A0C14] rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden shadow-2xl">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-pink-400 uppercase">
                    PROJECTED 90-DAY FORECAST
                  </span>
                  <h3 className="font-display font-extrabold text-xl text-white">
                    Synchronized Campaign Engine
                  </h3>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-white/50 font-mono block">Monthly Retainer</span>
                  <span className="font-display font-black text-2xl text-white">
                    ${monthlyBudget.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Highlight Metric Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs text-white/50 block font-mono">Estimated Monthly Views</span>
                  <span className="font-display font-black text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-300">
                    {(estimatedMinViews / 1000).toFixed(1)}M - {(estimatedMaxViews / 1000).toFixed(1)}M
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono block mt-1">Based on SYNQ Hook Retention</span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs text-white/50 block font-mono">Projected Blended ROAS</span>
                  <span className="font-display font-black text-2xl sm:text-3xl text-emerald-400">
                    {projectedRoas}x
                  </span>
                  <span className="text-[10px] text-white/50 font-mono block mt-1">Estimated CAC: -{estimatedCacDrop}</span>
                </div>
              </div>

              {/* Exact Monthly Deliverables Breakdown */}
              <div className="space-y-2.5 p-4 rounded-xl bg-black/40 border border-white/5 mb-6 text-xs text-white/80">
                <span className="font-mono font-bold text-white/60 text-[10px] block uppercase tracking-wider mb-1">
                  Scope of Execution
                </span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                  <span><strong>{videosCount} Custom Short-Form Videos</strong> (Scripting, Studio Shoot, Viral Sound, Edits)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                  <span><strong>~{creatorSeedsCount} Creator Seeding Partnerships</strong> with White-Listing Rights</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                  <span><strong>24/7 Trend Jacking Desk</strong> (Sub-4 hr rapid trend drafts)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                  <span><strong>Weekly Spark Ads & Meta Advantage+</strong> Creative Testing Matrix</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => {
                  playSynqChime();
                  onOpenAuditModal(`Calculated Tier: $${monthlyBudget.toLocaleString()}/mo, ${videosCount} vids, ${creatorSeedsCount} creators`);
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-bold text-sm shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 transition-all"
              >
                <span>LOCK IN THIS CAMPAIGN BLUEPRINT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
