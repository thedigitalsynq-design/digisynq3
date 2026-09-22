import { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2, ArrowRight, ShieldCheck, Flame } from 'lucide-react';
import { playPing, playSynqChime } from '../../utils/audio';

interface CreativeAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  context?: string;
}

export function CreativeAuditModal({ isOpen, onClose, context }: CreativeAuditModalProps) {
  const [brandName, setBrandName] = useState<string>('');
  const [socialHandle, setSocialHandle] = useState<string>('');
  const [primaryGoal, setPrimaryGoal] = useState<string>('Viral Organic Views');
  const [targetBudget, setTargetBudget] = useState<string>('$15,000 - $35,000/mo');
  const [workEmail, setWorkEmail] = useState<string>('');
  const [aesthetic, setAesthetic] = useState<string>('Sensory ASMR & Clean Macro');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSynqChime();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl rounded-3xl bg-[#0E101A] border border-white/20 p-6 sm:p-10 text-white shadow-2xl shadow-pink-500/20">
        
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

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-xs font-mono text-pink-400 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FREE CREATIVE SOCIAL AUDIT</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
                GET YOUR VIRAL SCRIPT PITCH.
              </h2>
              <p className="text-white/60 text-xs sm:text-sm mt-1">
                Tell us your brand handle and goals. Our creative directors will audit your accounts and deliver 5 customized viral hook scripts within 24 hours.
              </p>
              {context && (
                <div className="mt-2 text-[11px] font-mono text-pink-400/80">
                  Context: {context}
                </div>
              )}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 font-medium mb-1">Brand Name *</label>
                  <input
                    type="text"
                    required
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="e.g. Aura Beauty"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-pink-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white/70 font-medium mb-1">Instagram or TikTok Handle *</label>
                  <input
                    type="text"
                    required
                    value={socialHandle}
                    onChange={(e) => setSocialHandle(e.target.value)}
                    placeholder="@yourbrand"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-pink-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 font-medium mb-1">Primary Campaign Goal</label>
                  <select
                    value={primaryGoal}
                    onChange={(e) => setPrimaryGoal(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141724] border border-white/10 text-white focus:outline-none focus:border-pink-500 transition-colors"
                  >
                    <option>Viral Organic Views</option>
                    <option>Creator Seeding & UGC Fleet</option>
                    <option>TikTok Shop GMV Launch</option>
                    <option>Paid Social ROAS Scaling</option>
                    <option>Brand Cult & Tone of Voice</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/70 font-medium mb-1">Target Monthly Budget</label>
                  <select
                    value={targetBudget}
                    onChange={(e) => setTargetBudget(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141724] border border-white/10 text-white focus:outline-none focus:border-pink-500 transition-colors"
                  >
                    <option>$8,000 - $15,000/mo</option>
                    <option>$15,000 - $35,000/mo</option>
                    <option>$35,000 - $65,000/mo</option>
                    <option>$65,000+/mo</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white/70 font-medium mb-1">Target Creative Aesthetic</label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    'Sensory ASMR & Clean Macro',
                    'High-Energy Street Interviews',
                    'Lo-Fi Handheld Confessionals',
                    'Cinematic Scarcity Drops'
                  ].map((aes) => (
                    <button
                      key={aes}
                      type="button"
                      onClick={() => setAesthetic(aes)}
                      className={`p-2 rounded-lg border text-left transition-all ${
                        aesthetic === aes
                          ? 'bg-pink-500/20 border-pink-500 text-pink-300 font-semibold'
                          : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                      }`}
                    >
                      {aes}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-white/70 font-medium mb-1">Work Email (for audit delivery) *</label>
                <input
                  type="email"
                  required
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  placeholder="founder@brand.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-pink-500 transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-bold text-sm shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>DISPATCH AUDIT & SCRIPT REQUEST</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-white/40 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Free • No sales pitch lock-in • 24-hour delivery guarantee</span>
              </div>

            </form>
          </div>
        ) : (
          /* Submission Success State */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-display font-black text-2xl text-white mb-2">
              AUDIT REQUEST DISPATCHED!
            </h3>

            <p className="text-sm text-white/70 max-w-md mx-auto mb-6">
              Our creative direction team is analyzing <strong className="text-white">{socialHandle}</strong>. Expect an interactive video breakdown and 5 custom hook scripts sent to <strong className="text-white">{workEmail}</strong> within 24 hours.
            </p>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-left max-w-md mx-auto mb-6 text-xs text-white/80 space-y-1.5">
              <div className="flex justify-between">
                <span className="text-white/40">Brand:</span>
                <span className="font-bold">{brandName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">Selected Aesthetic:</span>
                <span>{aesthetic}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">Target Focus:</span>
                <span className="text-pink-400 font-mono">{primaryGoal}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors"
            >
              CLOSE & RETURN TO AGENCY FEED
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
