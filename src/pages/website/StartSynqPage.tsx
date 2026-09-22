import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { PROBLEM_CATEGORIES } from '../../data/website/problem_categories';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7 },
};

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
  'Producer', 'Director', 'Technician / Crew', 'Writer',
  'Studio / Production House', 'Brand / Sponsor', 'Creator / Influencer',
  'Distributor / Exhibitor', 'Media Partner', 'Technology Company',
  'Investor / Financier', 'Other',
];

const STAGE_OPTIONS = [
  'Idea / Early Development', 'Pre-production', 'Production', 'Post-production',
  'Marketing / Campaign', 'Distribution / Release', 'Rights / Monetization', 'Ongoing / No specific stage',
];

const SUPPORT_OPTIONS = [
  'Coordination help', 'Talent / crew connection', 'Resource discovery',
  'Workshop / skill development', 'Marketing coordination', 'Rights guidance',
  'Strategic partnership', 'Just an initial conversation',
];

export function StartSynqPage() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
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

  const canAdvance1 = !!form.who;
  const canAdvance2 = !!form.problem.trim();
  const canSubmit = !!form.name.trim() && !!form.email.trim() && form.email.includes('@');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto with form data
    const subject = encodeURIComponent(`Start a synq — ${form.who}: ${form.problem.slice(0, 60)}`);
    const body = encodeURIComponent(
      `WHO: ${form.who}\n\nPROJECT / CONTEXT: ${form.project}\n\nTHE PROBLEM: ${form.problem}\n\nRESOURCES AVAILABLE: ${form.resources}\n\nWHAT IS MISSING: ${form.missing}\n\nPROJECT STAGE: ${form.stage}\n\nSUPPORT NEEDED: ${form.support_type.join(', ')}\n\nADDITIONAL NOTES: ${form.notes}\n\n---\nName: ${form.name}\nEmail: ${form.email}`
    );
    window.location.href = `mailto:hello@digisynq.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main className="bg-[#05060D] text-[#ECEEF5] pt-24">

      {/* Hero */}
      <section className="section-padding bg-[#03040A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp} className="mb-4">
            <div className="section-label">Start a synq</div>
          </motion.div>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl sm:text-5xl font-denton font-black text-white mb-6 leading-[0.95]"
          >
            Tell us your problem.<br />
            <span className="text-[#5CE1E6]">We'll map the SYNQ.</span>
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base text-white/55 leading-relaxed"
          >
            This is not a generic contact form. This is a structured intake to understand your specific situation so we can map the gap and identify a relevant SYNQ path.
          </motion.p>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-[#05060D] border-t border-white/[0.04]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="synq-card p-10 text-center space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-[#5CE1E6]/08 border border-[#5CE1E6]/20 flex items-center justify-center mx-auto text-3xl">
                ✓
              </div>
              <div>
                <h2 className="text-2xl font-denton font-black text-white mb-2">SYNQ request sent.</h2>
                <p className="text-sm text-white/55">
                  Your information has been prepared. If your email client didn't open, please email us directly at <strong className="text-[#5CE1E6]">hello@digisynq.com</strong> with your challenge.
                </p>
              </div>
              <button onClick={() => { setSubmitted(false); setForm(EMPTY_FORM); setStep(1); }} className="btn-ghost">
                Start another SYNQ
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>

              {/* Progress */}
              <div className="flex items-center gap-2 mb-8">
                {[1, 2, 3].map((s) => (
                  <React.Fragment key={s}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all ${
                      step >= s ? 'bg-[#5CE1E6] text-[#03040A]' : 'bg-white/[0.05] text-white/30 border border-white/[0.08]'
                    }`}>
                      {s}
                    </div>
                    {s < 3 && (
                      <div className={`flex-1 h-px transition-all ${step > s ? 'bg-[#5CE1E6]/40' : 'bg-white/[0.06]'}`} />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Step 1: Who are you? */}
              {step === 1 && (
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div>
                    <label className="label-mono text-[10px] text-white/40 block mb-4">
                      Step 01 — Who are you?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {WHO_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => updateField('who', opt)}
                          className={`px-3 py-2.5 rounded-xl border text-sm text-left transition-all ${
                            form.who === opt
                              ? 'border-[#5CE1E6]/50 bg-[#5CE1E6]/08 text-white'
                              : 'border-white/[0.07] bg-[#0E1120]/60 text-white/55 hover:border-white/15 hover:text-white/80'
                          }`}
                          aria-pressed={form.who === opt}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="label-mono text-[10px] text-white/40 block mb-2">
                      Project or context (optional)
                    </label>
                    <textarea
                      value={form.project}
                      onChange={(e) => updateField('project', e.target.value)}
                      rows={3}
                      placeholder="Briefly describe the project or context you're working in..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0E1120] border border-white/[0.08] text-sm text-white/80 placeholder-white/25 focus:border-[#5CE1E6]/40 focus:outline-none resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!canAdvance1}
                    className={`btn-primary w-full justify-center ${!canAdvance1 ? 'opacity-40 cursor-not-allowed' : ''}`}
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}

              {/* Step 2: The Problem */}
              {step === 2 && (
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div>
                    <label className="label-mono text-[10px] text-white/40 block mb-2">
                      Step 02 — What is the problem? *
                    </label>
                    <textarea
                      value={form.problem}
                      onChange={(e) => updateField('problem', e.target.value)}
                      rows={4}
                      required
                      placeholder="Describe the specific challenge you're facing. Be as concrete as you can..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0E1120] border border-white/[0.08] text-sm text-white/80 placeholder-white/25 focus:border-[#5CE1E6]/40 focus:outline-none resize-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="label-mono text-[10px] text-white/40 block mb-2">
                      What resources do you already have?
                    </label>
                    <textarea
                      value={form.resources}
                      onChange={(e) => updateField('resources', e.target.value)}
                      rows={3}
                      placeholder="People, equipment, budget, relationships, content, skills..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0E1120] border border-white/[0.08] text-sm text-white/80 placeholder-white/25 focus:border-[#5CE1E6]/40 focus:outline-none resize-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="label-mono text-[10px] text-white/40 block mb-2">
                      What is currently missing?
                    </label>
                    <textarea
                      value={form.missing}
                      onChange={(e) => updateField('missing', e.target.value)}
                      rows={3}
                      placeholder="The specific gap — what you need but don't have..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0E1120] border border-white/[0.08] text-sm text-white/80 placeholder-white/25 focus:border-[#5CE1E6]/40 focus:outline-none resize-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="label-mono text-[10px] text-white/40 block mb-3">
                      Project stage
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {STAGE_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => updateField('stage', opt)}
                          className={`px-3 py-2.5 rounded-xl border text-xs text-left transition-all ${
                            form.stage === opt
                              ? 'border-[#5CE1E6]/50 bg-[#5CE1E6]/08 text-white'
                              : 'border-white/[0.07] bg-[#0E1120]/60 text-white/45 hover:border-white/15 hover:text-white/70'
                          }`}
                          aria-pressed={form.stage === opt}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="label-mono text-[10px] text-white/40 block mb-3">
                      What type of support are you looking for? (select all that apply)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {SUPPORT_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => toggleSupportType(opt)}
                          className={`px-3 py-2 rounded-lg border text-xs transition-all ${
                            form.support_type.includes(opt)
                              ? 'border-[#5CE1E6]/50 bg-[#5CE1E6]/08 text-[#5CE1E6]'
                              : 'border-white/[0.07] bg-[#0E1120]/60 text-white/45 hover:border-white/15 hover:text-white/70'
                          }`}
                          aria-pressed={form.support_type.includes(opt)}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button type="button" onClick={() => setStep(1)} className="btn-ghost">
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      disabled={!canAdvance2}
                      className={`btn-primary flex-1 justify-center ${!canAdvance2 ? 'opacity-40 cursor-not-allowed' : ''}`}
                    >
                      Continue
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact */}
              {step === 3 && (
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div>
                    <label className="label-mono text-[10px] text-white/40 block mb-2">
                      Step 03 — How do we reach you?
                    </label>
                    <p className="text-xs text-white/35 mb-4 font-mono">
                      We'll review your SYNQ request and come back to you to discuss.
                    </p>

                    <div className="space-y-3">
                      <input
                        type="text"
                        required
                        placeholder="Your name *"
                        value={form.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#0E1120] border border-white/[0.08] text-sm text-white/80 placeholder-white/25 focus:border-[#5CE1E6]/40 focus:outline-none transition-colors"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Your email address *"
                        value={form.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#0E1120] border border-white/[0.08] text-sm text-white/80 placeholder-white/25 focus:border-[#5CE1E6]/40 focus:outline-none transition-colors"
                      />
                      <textarea
                        rows={3}
                        placeholder="Anything else you'd like us to know? (optional)"
                        value={form.notes}
                        onChange={(e) => updateField('notes', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#0E1120] border border-white/[0.08] text-sm text-white/80 placeholder-white/25 focus:border-[#5CE1E6]/40 focus:outline-none resize-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="synq-card p-5 space-y-3">
                    <div className="label-mono text-[9px] text-white/30">Synq summary</div>
                    <div className="space-y-1.5">
                      <div className="flex gap-2 text-xs">
                        <span className="text-white/30 w-20 flex-shrink-0">Who</span>
                        <span className="text-white/70">{form.who}</span>
                      </div>
                      {form.stage && (
                        <div className="flex gap-2 text-xs">
                          <span className="text-white/30 w-20 flex-shrink-0">Stage</span>
                          <span className="text-white/70">{form.stage}</span>
                        </div>
                      )}
                      {form.support_type.length > 0 && (
                        <div className="flex gap-2 text-xs">
                          <span className="text-white/30 w-20 flex-shrink-0">Need</span>
                          <span className="text-white/70">{form.support_type.join(', ')}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-[10px] text-white/25 font-mono">
                    Clicking Submit will open your email client with your SYNQ request pre-filled. You can edit before sending.
                  </p>

                  <div className="flex gap-3">
                    <button type="button" onClick={() => setStep(2)} className="btn-ghost">
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!canSubmit}
                      className={`btn-primary flex-1 justify-center ${!canSubmit ? 'opacity-40 cursor-not-allowed' : ''}`}
                    >
                      Send SYNQ Request
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </form>
          )}
        </div>
      </section>

      {/* Alternative entry */}
      <section className="py-12 bg-[#03040A] border-t border-white/[0.04]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-3">
          <p className="text-xs text-white/30 font-mono">PREFER TO EXPLORE FIRST?</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/how-it-works" className="btn-ghost text-[11px]">How it works</Link>
            <Link to="/ecosystem" className="btn-ghost text-[11px]">Ecosystem map</Link>
            <Link to="/use-cases" className="btn-ghost text-[11px]">Use cases</Link>
            <Link to="/workshops" className="btn-ghost text-[11px]">Workshops</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
