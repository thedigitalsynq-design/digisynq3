import { BookOpen, Sparkles, Check, X, Quote, ArrowRight } from 'lucide-react';
import { CLIENT_TESTIMONIALS } from '../../data/socialAgencyData';
import { playSynqChime } from '../../utils/audio';

interface AgencyManifestoProps {
  onOpenAuditModal: (context: string) => void;
}

export function AgencyManifesto({ onOpenAuditModal }: AgencyManifestoProps) {
  return (
    <section id="agency-manifesto" className="py-16 sm:py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-mono text-pink-400 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>THE SYNQ MANIFESTO</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            WHY TRADITIONAL SOCIAL AGENCIES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-300">
              ARE HOPELESSLY OBSOLETE.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            The social landscape has changed more in the past 24 months than in the previous 15 years combined. The algorithm doesn't care about your font rules—it cares about retention, watch time, and emotional resonance.
          </p>
        </div>

        {/* Comparison Matrix: Old Way vs. SYNQ Way */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* The Legacy Agency Way */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#090A10] border border-red-500/20 shadow-xl">
            <div className="flex items-center gap-2 text-red-400 mb-4">
              <X className="w-5 h-5" />
              <h3 className="font-display font-bold text-lg text-white">The Traditional Agency Trap</h3>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-white/60">
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>Sends 50-slide PowerPoint presentations explaining "social synergy" while your channels sit dead.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>Takes 3 weeks and 6 rounds of committee approval to publish a single static graphic.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>Spends $10,000 on glossy billboard-style photography that gets 32 likes on Instagram.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>Treats influencer marketing as paying D-list celebrities for awkward, scripted endorsements.</span>
              </li>
            </ul>
          </div>

          {/* The SYNQ Way */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-pink-950/20 to-[#0C0E18] border border-pink-500/40 shadow-xl shadow-pink-500/5">
            <div className="flex items-center gap-2 text-pink-400 mb-4">
              <Check className="w-5 h-5" />
              <h3 className="font-display font-bold text-lg text-white">The SYNQ Creative Machine</h3>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <span>Scripts, shoots, and edits 30-60 native, high-retention short-form videos every single month.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <span>Sub-4 hour turnaround on trending audio and memes before the cultural moment disappears.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <span>Engineered for 1.8-second hook rates, high replay completion, and viral algorithmic reach.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <span>850+ vetted creator network deployed for authentic seeding, TikTok Shop, and Spark Ads.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Client Testimonials Wall */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold tracking-widest text-pink-400 uppercase">
              PROVEN RESULTS FROM REAL FOUNDERS & CMOS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLIENT_TESTIMONIALS.map((test, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0B0D16] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-6 h-6 text-pink-400/40 mb-3" />
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed italic mb-6">
                    "{test.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white">{test.author}</h4>
                    <p className="text-[10px] text-white/50">{test.role}, {test.company}</p>
                  </div>
                  <span className="px-2 py-1 rounded text-[10px] font-mono font-bold bg-pink-500/10 text-pink-300 border border-pink-500/30">
                    {test.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call To Action Strip */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 text-center flex flex-col items-center justify-center shadow-2xl">
          <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight mb-3">
            STOP WASTING BUDGET ON POSTS NO ONE WATCHES.
          </h3>
          <p className="text-sm sm:text-base text-white/90 max-w-xl mb-6">
            Book a complimentary 30-minute Creative Social Audit. We’ll analyze your current accounts, tear down your hooks, and pitch 5 viral video scripts designed for your audience.
          </p>

          <button
            onClick={() => {
              playSynqChime();
              onOpenAuditModal('Manifesto Bottom Banner');
            }}
            className="px-8 py-4 rounded-full bg-white text-black font-extrabold text-sm hover:scale-105 transition-all shadow-2xl flex items-center gap-2"
          >
            <span>CLAIM YOUR FREE CREATIVE AUDIT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
