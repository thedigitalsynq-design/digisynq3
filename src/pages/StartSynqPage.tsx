import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ArrowRight, ArrowUpRight, Send, CheckCircle2, 
  Terminal, ShieldCheck, Zap, Activity, Film, ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TopographicBackground } from '../components/TopographicBackground';
import { playClickSound, playHoverSound, playNodeBlip, playSuccessChime } from '../utils/audio';

interface FormState {
  who: string;
  project: string;
  problem: string;
  resources: string;
  missing: string;
  stage: string;
  support_type: string[];
  name: string;
  email: string;
  notes: string;
}

const EMPTY_FORM: FormState = {
  who: '',
  project: '',
  problem: '',
  resources: '',
  missing: '',
  stage: '',
  support_type: [],
  name: '',
  email: '',
  notes: '',
};

const WHO_OPTIONS = [
  'Independent Producer', 'Director / Showrunner', 'Cinematographer / Crew Guild',
  'Soundstage / Volume Studio', 'Financier / Gap Fund', 'Theatrical Exhibitor / Circuit',
  'IP Holder / Screenwriter', 'VFX / Post Facility', 'Other Stakeholder',
];

const STAGE_OPTIONS = [
  'Packaging & Development', 'Pre-Production & Greenlight', 'Principal Photography',
  'Post-Finishing & Sound Mix', 'Theatrical Distribution & Release', 'Catalogue Monetization',
];

const SUPPORT_OPTIONS = [
  'Fractional Soundstage Access', 'Technical Guild Crew Matching', 'Gap / Finishing Capital',
  'Programmatic Screen Allocation', 'Asset-Light Production Model', 'Initial Exploration Brief',
];

export function StartSynqPage() {
  const location = useLocation();
  const state = location.state as { problem?: string; category?: string } | null;
  const [form, setForm] = useState<FormState>(() => ({
    ...EMPTY_FORM,
    problem: state?.problem || '',
  }));
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  const updateField = (key: keyof FormState, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const toggleSupportType = (v: string) => {
    playClickSound();
    setForm(prev => ({
      ...prev,
      support_type: prev.support_type.includes(v)
        ? prev.support_type.filter(x => x !== v)
        : [...prev.support_type, v],
    }));
  };

  const canAdvance1 = !!form.who && !!form.stage;
  const canAdvance2 = !!form.problem.trim();
  const canSubmit = !!form.name.trim() && !!form.email.trim() && form.email.includes('@');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSuccessChime();
    const subject = encodeURIComponent(`Start a Synq — ${form.who}: ${form.project || 'Project'}`);
    const body = encodeURIComponent(
      `STAKEHOLDER: ${form.who}\nSTAGE: ${form.stage}\nPROJECT: ${form.project}\nPROBLEM: ${form.problem}\nSUPPORT NEEDED: ${form.support_type.join(', ')}\nRESOURCES AVAILABLE: ${form.resources}\nNAME: ${form.name}\nEMAIL: ${form.email}\nNOTES: ${form.notes}`
    );
    window.location.href = `mailto:hello@digisynq.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main className="bg-[#050608] text-[#ECEEF5] pt-24 pb-20 relative overflow-hidden selection:bg-[#B6F02A]/20 selection:text-[#B6F02A]">
      
      {/* Topographic Isoline Contour Layer */}
      <TopographicBackground intensity="medium" />

      {/* ── 01. Intake Terminal Header (Elevate Labs High-Impact Style) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 relative z-10">
        
        {/* High-Impact Asymmetric Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-8">
            {/* Eyebrow with Lime Accent Bar (Elevate Labs signature) */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#23B272]/15 text-[#D4F838] border border-[#23B272]/30 tracking-widest shrink-0">
                ACT 01
              </span>
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-white">
                Project Diagnostic // Intake Terminal
              </span>
            </div>

            <h1 className="text-[clamp(2.75rem,6.5vw,5.5rem)] font-extrabold tracking-tight text-white leading-[0.92] [letter-spacing:-0.04em] uppercase">
              BEYOND<br />
              <span className="text-[#B6F02A]">CINEMA</span><br />
              LIMITS.
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pl-6 border-l-2 border-[#B6F02A]">
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Tell us your structural friction point. We analyze idle soundstage floors, guild availability, and capital bottlenecks to engineer an asset-light resolution path.
            </p>
          </div>
        </div>
      </section>

      {/* ── 02. The Project Intake Terminal ────────────────── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-6 sm:p-10 rounded-3xl bg-[#08090C] border border-[#B6F02A]/25 shadow-[0_24px_80px_rgba(0,0,0,0.8),0_0_50px_rgba(182,240,42,0.08)] relative">
          
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 space-y-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#0D281E] border border-[#B6F02A] flex items-center justify-center mx-auto text-[#B6F02A] shadow-[0_0_24px_rgba(182,240,42,0.3)]">
                <CheckCircle2 size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight uppercase">
                  Project Protocol Dispatched
                </h2>
                <p className="text-xs text-zinc-400 max-w-md mx-auto mt-2 leading-relaxed">
                  Your project dossier has been pre-configured. If your mail client did not automatically launch, transmit directly to <strong className="text-[#B6F02A]">hello@digisynq.com</strong>.
                </p>
              </div>
              <button
                type="button"
                onClick={() => { setSubmitted(false); setForm(EMPTY_FORM); setStep(1); }}
                className="btn-primary text-xs px-6 py-2.5 mx-auto"
              >
                Intake Another Project
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 font-mono">
              
              {/* Stepper Progress */}
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] text-xs">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold ${step === 1 ? 'bg-[#B6F02A] text-black shadow-[0_0_10px_rgba(182,240,42,0.4)]' : 'bg-white/10 text-white/40'}`}>
                    STEP // 01
                  </span>
                  <span className={step === 1 ? 'text-white font-bold' : 'text-zinc-500'}>
                    ROLE & STAGE
                  </span>
                </div>
                <div className="h-px w-8 bg-white/10" />
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold ${step === 2 ? 'bg-[#B6F02A] text-black shadow-[0_0_10px_rgba(182,240,42,0.4)]' : 'bg-white/10 text-white/40'}`}>
                    STEP // 02
                  </span>
                  <span className={step === 2 ? 'text-white font-bold' : 'text-zinc-500'}>
                    FRICTION POINT
                  </span>
                </div>
                <div className="h-px w-8 bg-white/10" />
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold ${step === 3 ? 'bg-[#B6F02A] text-black shadow-[0_0_10px_rgba(182,240,42,0.4)]' : 'bg-white/10 text-white/40'}`}>
                    STEP // 03
                  </span>
                  <span className={step === 3 ? 'text-white font-bold' : 'text-zinc-500'}>
                    TRANSMIT
                  </span>
                </div>
              </div>

              {/* STEP 1: Identity & Stage */}
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <label className="text-xs font-bold text-[#B6F02A] block mb-2 uppercase tracking-wider">
                      // What Is Your Role in the Cinema Network?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {WHO_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => { updateField('who', opt); playClickSound(); }}
                          className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                            form.who === opt
                              ? 'bg-[#0D281E] border-[#B6F02A] text-white shadow-[0_0_12px_rgba(182,240,42,0.2)] font-bold'
                              : 'bg-black/50 border-white/10 text-zinc-400 hover:border-white/20'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#B6F02A] block mb-2 uppercase tracking-wider">
                      // Current Production Stage
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {STAGE_OPTIONS.map((stg) => (
                        <button
                          key={stg}
                          type="button"
                          onClick={() => { updateField('stage', stg); playClickSound(); }}
                          className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                            form.stage === stg
                              ? 'bg-[#0D281E] border-[#B6F02A] text-white shadow-[0_0_12px_rgba(182,240,42,0.2)] font-bold'
                              : 'bg-black/50 border-white/10 text-zinc-400 hover:border-white/20'
                          }`}
                        >
                          {stg}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      disabled={!canAdvance1}
                      onClick={() => { setStep(2); playClickSound(); }}
                      className={`btn-primary text-xs px-6 py-3 cursor-pointer ${!canAdvance1 ? 'opacity-30 pointer-events-none' : ''}`}
                    >
                      Next: Define Friction <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Friction & Scope */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <label className="text-xs font-bold text-[#B6F02A] block mb-2 uppercase tracking-wider">
                      // Project Title or Working Identifier
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Untitled Feature / Psychological Sci-Fi"
                      value={form.project}
                      onChange={(e) => updateField('project', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-xs text-white placeholder-zinc-600 focus:border-[#B6F02A] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#B6F02A] block mb-2 uppercase tracking-wider">
                      // Primary Bottleneck or Constraint (Required)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe the gap: e.g. Need 4 days of fractional LED volume access, missing sound supervisor, or release clash risk on current distribution window..."
                      value={form.problem}
                      onChange={(e) => updateField('problem', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-xs text-white placeholder-zinc-600 focus:border-[#B6F02A] outline-none resize-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#B6F02A] block mb-2 uppercase tracking-wider">
                      // Support Architecture Required
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {SUPPORT_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => toggleSupportType(opt)}
                          className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                            form.support_type.includes(opt)
                              ? 'bg-[#0D281E] border-[#B6F02A] text-white font-bold'
                              : 'bg-black/50 border-white/10 text-zinc-400 hover:border-white/20'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => { setStep(1); playClickSound(); }}
                      className="text-xs text-zinc-400 hover:text-white"
                    >
                      ← Back to Stage
                    </button>
                    <button
                      type="button"
                      disabled={!canAdvance2}
                      onClick={() => { setStep(3); playClickSound(); }}
                      className={`btn-primary text-xs px-6 py-3 cursor-pointer ${!canAdvance2 ? 'opacity-30 pointer-events-none' : ''}`}
                    >
                      Next: Contact Dossier <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact & Transmit */}
              {step === 3 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[#B6F02A] block mb-2 uppercase tracking-wider">
                        // Your Name / Title
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. James Cameron / Producer"
                        value={form.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-xs text-white placeholder-zinc-600 focus:border-[#B6F02A] outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[#B6F02A] block mb-2 uppercase tracking-wider">
                        // Secure Direct Email
                      </label>
                      <input
                        type="email"
                        placeholder="producer@studio.com"
                        value={form.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-xs text-white placeholder-zinc-600 focus:border-[#B6F02A] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#B6F02A] block mb-2 uppercase tracking-wider">
                      // Confidential Production Notes
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Any specific NDAs, timeline deadlines, or territorial restrictions..."
                      value={form.notes}
                      onChange={(e) => updateField('notes', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-xs text-white placeholder-zinc-600 focus:border-[#B6F02A] outline-none resize-none"
                    />
                  </div>

                  <div className="p-4 rounded-xl bg-[#0D281E]/60 border border-[#B6F02A]/20 text-[11px] text-zinc-300">
                    <span className="text-[#B6F02A] font-bold block mb-1">CONFIDENTIALITY GUARANTEED:</span>
                    DigiSynq operates on strict non-disclosure covenants. Transmitted project information is used exclusively to assess operational feasibility.
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => { setStep(2); playClickSound(); }}
                      className="text-xs text-zinc-400 hover:text-white"
                    >
                      ← Back to Friction
                    </button>
                    <button
                      type="submit"
                      disabled={!canSubmit}
                      className={`btn-primary text-xs px-8 py-3.5 cursor-pointer flex items-center gap-2 ${!canSubmit ? 'opacity-30 pointer-events-none' : ''}`}
                    >
                      <Send size={14} />
                      Transmit Project Synq
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}

        </div>
      </section>

    </main>
  );
}
