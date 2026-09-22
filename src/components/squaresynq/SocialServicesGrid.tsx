import { useState } from 'react';
import { Video, Users, Flame, TrendingUp, ShoppingBag, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import { AGENCY_SERVICES, AgencyService } from '../../data/socialAgencyData';
import { playPing, playSynqChime } from '../../utils/audio';

interface SocialServicesGridProps {
  onOpenAuditModal: (context: string) => void;
}

export function SocialServicesGrid({ onOpenAuditModal }: SocialServicesGridProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(AGENCY_SERVICES[0].id);

  const selectedService = AGENCY_SERVICES.find(s => s.id === selectedServiceId) || AGENCY_SERVICES[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Video': return <Video className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="services-disciplines" className="py-16 sm:py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-mono text-pink-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL-STACK CREATIVE SOCIAL</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            DISCIPLINES ENGINEERED FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-amber-300">
              ALGORITHMIC DOMINANCE.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            We don’t do generic social media management. We build end-to-end creative engines: from rapid studio video production to creator fleets and TikTok Shop live broadcasts.
          </p>
        </div>

        {/* Interactive Discipline Switcher Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {AGENCY_SERVICES.map((srv) => {
            const isSelected = srv.id === selectedServiceId;
            return (
              <button
                key={srv.id}
                onClick={() => {
                  playPing(480, 'sine', 0.05);
                  setSelectedServiceId(srv.id);
                }}
                className={`p-4 rounded-2xl flex flex-col items-center text-center transition-all border ${
                  isSelected
                    ? 'bg-gradient-to-b from-pink-500/20 to-pink-500/5 border-pink-500/60 shadow-lg shadow-pink-500/10 text-white'
                    : 'bg-[#0B0D14] border-white/10 hover:border-white/20 text-white/70 hover:text-white'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2.5 transition-colors ${
                  isSelected ? 'bg-pink-500 text-white' : 'bg-white/5 text-white/60'
                }`}>
                  {getIcon(srv.iconName)}
                </div>
                <span className="text-xs font-display font-bold leading-snug line-clamp-2">
                  {srv.title.split(' ')[0]} {srv.title.split(' ')[1]}
                </span>
                <span className="text-[9px] font-mono mt-1 text-pink-400 font-medium">
                  {srv.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Discipline Full Deep Dive Card */}
        <div className="rounded-3xl bg-[#0D0F1A] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
            
            {/* Left: Overview, Tagline & Deliverables */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-pink-500/20 text-pink-300 border border-pink-500/40">
                  {selectedService.badge}
                </span>
                <span className="text-xs font-mono text-white/50">
                  PROPRIETARY SYNQ PLAYBOOK
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight mb-2">
                {selectedService.title}
              </h3>

              <p className="text-sm font-semibold text-pink-300 mb-4">
                "{selectedService.tagline}"
              </p>

              <p className="text-sm text-white/70 leading-relaxed mb-6">
                {selectedService.description}
              </p>

              {/* Verified Result Metric */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-6 flex items-center gap-4">
                <span className="font-display font-black text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-300">
                  {selectedService.metricHighlight}
                </span>
                <div>
                  <span className="text-xs font-bold text-white block">
                    Proven Benchmark
                  </span>
                  <span className="text-xs text-white/60">
                    {selectedService.metricLabel}
                  </span>
                </div>
              </div>

              {/* Core Deliverables Checklist */}
              <div className="space-y-2 mb-6">
                <span className="text-xs font-mono font-bold text-white/50 tracking-wider block">
                  MONTHLY DELIVERABLES INCLUDED
                </span>
                {selectedService.coreDeliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle className="w-4 h-4 text-pink-400 shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  playSynqChime();
                  onOpenAuditModal(`Service Ingestion: ${selectedService.title}`);
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold text-sm shadow-xl shadow-pink-500/20 hover:shadow-pink-500/35 transition-all mt-auto"
              >
                <span>DEPLOY THIS DISCIPLINE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right: The 4-Phase Tactical Roadmap */}
            <div className="lg:col-span-6 bg-[#08090E] rounded-2xl p-6 border border-white/10">
              <span className="text-xs font-mono font-bold tracking-widest text-pink-400 uppercase block mb-4">
                THE 4-PHASE EXECUTION ROADMAP
              </span>

              <div className="space-y-4">
                {selectedService.playbookSteps.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono font-bold text-pink-400">
                        {step.phase}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                    </div>
                    <h4 className="text-sm font-bold text-white font-display mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs text-white/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
