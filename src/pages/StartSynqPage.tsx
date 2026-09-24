import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, Check, Send, ShieldCheck, ChevronRight } from 'lucide-react';

interface FormState {
  who: string;
  project: string;
  problem: string;
  resources: string;
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
  stage: '',
  support_type: [],
  name: '',
  email: '',
  notes: '',
};

const WHO_OPTIONS = [
  'Independent Producer / Production Banner',
  'Director / Showrunner',
  'Screenwriter / Story Developer / IP Holder',
  'Actor / Performer / Voice Artist',
  'Cinematographer / Camera Unit Head',
  'Gaffer / Grip / Lighting Unit',
  'Production Designer / Art Director',
  'Soundstage / Studio Lot Operator',
  'Virtual Production / LED Volume Facility',
  'Equipment Rental House',
  'Editorial / Color Finishing Suite',
  'VFX / Animation Studio',
  'Composer / Music Supervisor / Audio Mixer',
  'Financier / Gap Debt / Completion Bonder',
  'Theatrical Exhibitor / Cinema Circuit',
  'OTT Platform / Broadcaster / Distributor',
  'Brand Partner / Commercial Sponsor',
  'Live Event / Festival Organizer',
  'Other Entertainment Stakeholder',
];

const STAGE_OPTIONS = [
  'Packaging & Development',
  'Pre-Production & Resource Assembly',
  'Principal Production / Filming',
  'Post-Finishing, Sound & VFX',
  'Release, Distribution & Launch',
  'Catalog & Rights Monetization',
];

const SUPPORT_OPTIONS = [
  'Connected Stage & Venue Capacity',
  'Verified Creative & Crew Matching',
  'Milestone Finishing Capital',
  'Audience & Release Coordination',
  'Asset-Light Production Architecture',
  'Constraint Feasibility Diagnostic',
];

export function StartSynqPage() {
  const location = useLocation();
  const state = location.state as { problem?: string; category?: string; role?: string } | null;

  const initialWho = () => {
    if (!state?.role) return '';
    const clean = state.role.toLowerCase().split(' ')[0];
    const match = WHO_OPTIONS.find(opt => opt.toLowerCase().includes(clean));
    return match || state.role;
  };

  const [form, setForm] = useState<FormState>(() => ({
    ...EMPTY_FORM,
    problem: state?.problem || '',
    who: initialWho(),
  }));
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  const updateField = (key: keyof FormState, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const toggleSupportType = (v: string) => {
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

  const [copied, setCopied] = useState(false);

  const getDossierText = () => {
    return `DIGISYNQ INTAKE DOSSIER\n═════════════════════════\nSTAKEHOLDER: ${form.who}\nSTAGE: ${form.stage}\nPROJECT: ${form.project || 'Unspecified'}\nREQUIREMENT: ${form.problem}\nSUPPORT NEEDED: ${form.support_type.join(', ')}\nCONTACT NAME: ${form.name}\nEMAIL: ${form.email}\nCONFIDENTIAL NOTES: ${form.notes || 'None'}\nSUBMITTED AT: ${new Date().toISOString()}`;
  };

  const handleCopyDossier = () => {
    navigator.clipboard.writeText(getDossierText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Start a Synq — ${form.who}: ${form.project || 'Project'}`);
    const body = encodeURIComponent(getDossierText());
    
    // Attempt mailto trigger
    try {
      window.location.href = `mailto:hello@digisynq.com?subject=${subject}&body=${body}`;
    } catch (err) {
      console.warn('Mail client trigger bypassed', err);
    }
    setSubmitted(true);
  };

  return (
    <main className="bg-[#07080b] text-[#ECEEF5] selection:bg-white/20 selection:text-white">

      {/* ── 01. Hero Section ── */}
      <section className="pt-40 sm:pt-48 pb-16 sm:pb-20 px-6 sm:px-8 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-zinc-400 mb-8 tracking-wide">
          <span>Project Intake Terminal</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] [letter-spacing:-0.035em] mb-6">
          Start a synq.
        </h1>

        <p className="text-lg sm:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto">
          Have an entertainment project, resource requirement, or capacity opportunity? Start a Synq and tell us what needs to be connected across talent, facilities, financing, and audience channels.
        </p>
      </section>

      {/* ── 02. Intake Console ── */}
      <section className="pb-32 px-6 sm:px-8 max-w-3xl mx-auto">
        <div className="rounded-3xl bg-[#090b10] border border-white/[0.08] p-8 sm:p-12 shadow-2xl">

          {submitted ? (
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                <Check size={28} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Project dossier generated
                </h2>
                <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                  Your project dossier has been formatted for our coordination team. If your default email client did not automatically launch, transmit directly to{' '}
                  <a href="mailto:hello@digisynq.com" className="text-white underline hover:text-emerald-400">
                    hello@digisynq.com
                  </a>.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCopyDossier}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-medium text-xs hover:bg-zinc-200 transition-all cursor-pointer shadow-sm"
                >
                  <Check size={14} className={copied ? 'text-emerald-600' : 'opacity-40'} />
                  <span>{copied ? 'Dossier Copied to Clipboard!' : 'Copy Dossier to Clipboard'}</span>
                </button>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=hello@digisynq.com&su=${encodeURIComponent(`Start a Synq — ${form.who}: ${form.project || 'Project'}`)}&body=${encodeURIComponent(getDossierText())}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] text-xs text-zinc-300 font-medium transition-all"
                >
                  <span>Open in Gmail Web</span>
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs text-zinc-400 max-w-md mx-auto text-left space-y-1.5">
                <div className="text-white font-medium flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  <span>Next Step: 48-Hour Constraint Mapping</span>
                </div>
                <p>
                  A DigiSynq project coordinator will review your parameters against active partner stages, guild availability, and milestone covenants within 48 business hours.
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => { setSubmitted(false); setForm(EMPTY_FORM); setStep(1); }}
                  className="text-xs text-zinc-500 hover:text-white underline transition-all cursor-pointer"
                >
                  Intake another project or update parameters
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">

              {/* Progress Stepper */}
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.06] text-xs">
                <div className="flex items-center gap-2">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono ${step === 1 ? 'bg-white text-black font-bold' : 'bg-white/[0.06] text-zinc-500'}`}>
                    1
                  </span>
                  <span className={step === 1 ? 'text-white font-medium' : 'text-zinc-500'}>
                    Role & Stage
                  </span>
                </div>
                <div className="h-px w-12 bg-white/[0.06]" />
                <div className="flex items-center gap-2">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono ${step === 2 ? 'bg-white text-black font-bold' : 'bg-white/[0.06] text-zinc-500'}`}>
                    2
                  </span>
                  <span className={step === 2 ? 'text-white font-medium' : 'text-zinc-500'}>
                    Requirement
                  </span>
                </div>
                <div className="h-px w-12 bg-white/[0.06]" />
                <div className="flex items-center gap-2">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono ${step === 3 ? 'bg-white text-black font-bold' : 'bg-white/[0.06] text-zinc-500'}`}>
                    3
                  </span>
                  <span className={step === 3 ? 'text-white font-medium' : 'text-zinc-500'}>
                    Transmit
                  </span>
                </div>
              </div>

              {/* STEP 1: Role & Stage */}
              {step === 1 && (
                <div className="space-y-8 animate-in fade-in duration-200">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                      Your Role in the Entertainment Ecosystem
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {WHO_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => updateField('who', opt)}
                          className={`p-3.5 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                            form.who === opt
                              ? 'bg-white text-black font-medium border-white'
                              : 'bg-white/[0.015] border-white/[0.06] text-zinc-400 hover:text-white hover:border-white/20'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                      Current Production Stage
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {STAGE_OPTIONS.map((stg) => (
                        <button
                          key={stg}
                          type="button"
                          onClick={() => updateField('stage', stg)}
                          className={`p-3.5 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                            form.stage === stg
                              ? 'bg-white text-black font-medium border-white'
                              : 'bg-white/[0.015] border-white/[0.06] text-zinc-400 hover:text-white hover:border-white/20'
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
                      onClick={() => setStep(2)}
                      className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-medium text-xs hover:bg-zinc-200 transition-all cursor-pointer ${
                        !canAdvance1 ? 'opacity-30 pointer-events-none' : ''
                      }`}
                    >
                      Continue
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Project & Requirement */}
              {step === 2 && (
                <div className="space-y-8 animate-in fade-in duration-200">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                      Project Title or Working Identifier
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Untitled Drama Series / Live Tour / Feature"
                      value={form.project}
                      onChange={(e) => updateField('project', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] text-sm text-white placeholder-zinc-600 focus:border-white/40 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                      Primary Requirement or Constraint (Required)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe what needs to be connected: e.g. need 6 days of soundstage floor, missing lead technical crew, post-finishing capital, or distribution windowing..."
                      value={form.problem}
                      onChange={(e) => updateField('problem', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] text-sm text-white placeholder-zinc-600 focus:border-white/40 outline-none transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                      Required Support Architecture
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {SUPPORT_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => toggleSupportType(opt)}
                          className={`p-3.5 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                            form.support_type.includes(opt)
                              ? 'bg-white text-black font-medium border-white'
                              : 'bg-white/[0.015] border-white/[0.06] text-zinc-400 hover:text-white hover:border-white/20'
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
                      onClick={() => setStep(1)}
                      className="text-xs text-zinc-400 hover:text-white transition cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      disabled={!canAdvance2}
                      onClick={() => setStep(3)}
                      className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-medium text-xs hover:bg-zinc-200 transition-all cursor-pointer ${
                        !canAdvance2 ? 'opacity-30 pointer-events-none' : ''
                      }`}
                    >
                      Continue
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact & Transmit */}
              {step === 3 && (
                <div className="space-y-8 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                        Your Name / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Elena Rostova / Producer"
                        value={form.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] text-sm text-white placeholder-zinc-600 focus:border-white/40 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                        Direct Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="producer@domain.com"
                        value={form.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] text-sm text-white placeholder-zinc-600 focus:border-white/40 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                      Confidential Project Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Any specific NDAs, calendar deadlines, or territorial restrictions..."
                      value={form.notes}
                      onChange={(e) => updateField('notes', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] text-sm text-white placeholder-zinc-600 focus:border-white/40 outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-zinc-400 leading-relaxed">
                    <span className="text-white font-medium block mb-1">Confidentiality Guarantee</span>
                    DigiSynq operates under strict non-disclosure covenants. All project materials and disclosures are used solely to assess operational feasibility and coordinate capacity across our verified network.
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-xs text-zinc-400 hover:text-white transition cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      disabled={!canSubmit}
                      className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-medium text-xs hover:bg-zinc-200 transition-all cursor-pointer ${
                        !canSubmit ? 'opacity-30 pointer-events-none' : ''
                      }`}
                    >
                      <Send size={13} />
                      Transmit project synq
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 pt-2 border-t border-white/[0.04]">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Non-custodial & confidential. Protected under standard mutual NDA principles.</span>
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
