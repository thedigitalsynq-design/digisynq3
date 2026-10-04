import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  Send,
  ShieldCheck,
  Clock,
  Copy,
  AlertTriangle,
  Search,
  Activity,
  Sparkles,
  FileText,
  User,
  Film,
  Building,
  Calendar
} from 'lucide-react';
import {
  intakeService,
  SynqCase,
  CaseStatus,
  generateCaseId
} from '../services/intakeService';
import { TopographicBackground } from '../components/TopographicBackground';

const STAKEHOLDER_ROLES = [
  'Independent Producer / Banner',
  'Studio Executive / Financier',
  'Director / Showrunner',
  'Screenwriter / IP Rights Holder',
  'Cinematographer / Dept Head',
  'Soundstage / Facility Operator',
  'Virtual Production / LED Volume Facility',
  'Equipment Rental House',
  'Post-Production / VFX Facility',
  'Music / Audio Post Team',
  'Distributor / Theatrical Exhibitor',
  'OTT Platform / Broadcaster',
  'Brand Partner / Sponsor',
  'Other Industry Participant'
];

const CONTINUUM_STAGES = [
  '01. Idea / Inception',
  '02. Development & Packaging',
  '03. Pre-Production & Prep',
  '04. Production (Principal Photography)',
  '05. Post-Production & VFX Finishing',
  '06. Marketing & Asset Creation',
  '07. Distribution & Platform Ingest',
  '08. Audience & Exhibition',
  '09. Monetization & Recoupment'
];

const SUPPORT_TYPES = [
  'Emergency Bottleneck Diagnostic',
  'Missing Capability & Crew Matching',
  'Dark-Date Soundstage / Facility Floor Liquidity',
  'Downstream Cascade Simulation & Audit',
  'Multi-Party Coordination Covenant',
  'Pre-Greenlight Schedule Risk Assessment'
];

export function StartSynqPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const paramCaseId = searchParams.get('caseId');
  const paramStage = searchParams.get('stage');
  const paramProblem = searchParams.get('problem');

  // Form State
  const [stakeholder, setStakeholder] = useState('');
  const [project, setProject] = useState('');
  const [stage, setStage] = useState(paramStage || '');
  const [problem, setProblem] = useState(paramProblem || '');
  const [impact, setImpact] = useState('');
  const [resources, setResources] = useState('');
  const [support, setSupport] = useState<string[]>([]);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactRole, setContactRole] = useState('');
  const [notes, setNotes] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Spam mitigation trap

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [receivedCase, setReceivedCase] = useState<SynqCase | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  // Status Lookup State
  const [lookupId, setLookupId] = useState(paramCaseId || '');
  const [searchedCase, setSearchedCase] = useState<SynqCase | null>(null);
  const [lookupAttempted, setLookupAttempted] = useState(false);

  // Check URL params on mount
  useEffect(() => {
    if (paramCaseId) {
      const found = intakeService.getCaseById(paramCaseId);
      if (found) {
        setSearchedCase(found);
        setLookupAttempted(true);
      }
    }
  }, [paramCaseId]);

  const toggleSupport = (item: string) => {
    setSupport((prev) =>
      prev.includes(item) ? prev.filter((s) => s !== item) : [...prev, item]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const res = await intakeService.submitCase({
        stakeholder,
        project,
        stage,
        problem,
        impact,
        resources,
        support,
        contact: {
          name: contactName,
          email: contactEmail,
          phone: contactPhone || undefined,
          role: contactRole || undefined
        },
        notes,
        diagnosticCaseId: paramCaseId || undefined,
        honeypot
      });

      if (res.success && res.caseData) {
        setReceivedCase(res.caseData);
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitError(res.error || 'Unable to register case. Please verify all fields and retry.');
      }
    } catch (err: any) {
      setSubmitError(err?.message || 'An unexpected transmission failure occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setLookupAttempted(true);
    if (!lookupId.trim()) {
      setSearchedCase(null);
      return;
    }
    const found = intakeService.getCaseById(lookupId.trim());
    setSearchedCase(found || null);
  };

  const copyCaseId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#03040A] text-[#ECEEF5] pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <TopographicBackground className="opacity-15 pointer-events-none -z-10 fixed inset-0" />

      {/* Header */}
      <header className="mb-12 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300 font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-[#52E3A4] animate-pulse" />
          <span>PRODUCTION INTAKE GATEWAY</span>
          <span className="text-zinc-600">//</span>
          <span className="text-[#52E3A4]">SYNQ CASE REGISTRATION</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
          Initiate a SYNQ Intervention.
          <span className="block text-xl sm:text-2xl lg:text-3xl text-zinc-400 font-normal mt-2">
            Structured Operational Intake for Compromised Entertainment Pipelines.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
          Submit an acute operational breakdown, schedule rupture, or missing capability requirement. DigiSynq generates a cryptographically tracked Case ID, evaluates root-cause dependencies, and coordinates the intervention.
        </p>
      </header>

      {/* CASE RECEIVED SUCCESS MODAL / BANNER */}
      {receivedCase && (
        <section
          aria-live="polite"
          className="mb-12 p-8 sm:p-10 rounded-2xl border-2 border-[#52E3A4] bg-[#090B14] shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <ShieldCheck className="w-48 h-48 text-[#52E3A4]" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16543D] text-[#52E3A4] font-mono text-xs font-semibold mb-4">
            <Check className="w-3.5 h-3.5" />
            <span>CASE RECEIVED & REGISTERED</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            CASE RECEIVED
          </h2>

          <p className="text-base text-zinc-300 font-light mb-6 max-w-2xl">
            Your operational synchronization request has been accepted by the DigiSynq intake gateway and assigned to our triage desk.
          </p>

          {/* Case ID Box */}
          <div className="p-6 rounded-xl border border-[#52E3A4]/40 bg-[#16543D]/20 mb-8 max-w-xl">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-1">
              Your DigiSynq Case ID is:
            </span>
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-[#52E3A4] tracking-wider">
                {receivedCase.caseId}
              </span>
              <button
                onClick={() => copyCaseId(receivedCase.caseId)}
                className="px-3 py-1.5 rounded-lg border border-[#52E3A4]/40 bg-[#52E3A4]/10 hover:bg-[#52E3A4]/20 text-xs font-mono text-[#52E3A4] flex items-center gap-1.5 transition-colors"
              >
                {copiedId ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedId ? 'Copied' : 'Copy ID'}</span>
              </button>
            </div>
            <div className="mt-3 pt-3 border-t border-[#52E3A4]/20 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>INITIAL STATUS: <strong className="text-white">{receivedCase.status}</strong></span>
              <span>TIMESTAMP: {new Date(receivedCase.createdAt).toLocaleTimeString()}</span>
            </div>
          </div>

          {/* Summary Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-3xl">
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Project</span>
              <span className="text-sm font-semibold text-white">{receivedCase.project}</span>
            </div>
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Continuum Stage</span>
              <span className="text-sm font-semibold text-white">{receivedCase.stage}</span>
            </div>
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Primary Contact</span>
              <span className="text-sm font-semibold text-white">{receivedCase.contact.email}</span>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                setReceivedCase(null);
                setProject('');
                setProblem('');
                setImpact('');
                setResources('');
                setNotes('');
              }}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-white font-mono transition-colors"
            >
              Submit Another Case
            </button>
            <Link
              to={`/engines/cascade?caseId=${receivedCase.caseId}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#52E3A4] text-[#03040A] text-xs font-semibold hover:bg-[#34D399] transition-colors"
            >
              <span>Simulate Downstream Blast Radius</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      )}

      {/* Main Grid: Form + Case Lookup Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Intake Submission Form */}
        <section className="lg:col-span-8 p-6 sm:p-10 rounded-2xl border border-white/10 bg-[#090B14] shadow-xl">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">
                SYNQ Intake Manifest
              </h2>
              <p className="text-xs font-mono text-zinc-400">
                FIELD SPECIFICATIONS // STRICT CONFIDENTIALITY GUARANTEED
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#52E3A4] bg-[#16543D]/40 px-3 py-1 rounded-lg border border-[#52E3A4]/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Clean-Room Protocol</span>
            </div>
          </div>

          {submitError && (
            <div className="mb-8 p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-sm flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold">Transmission Warning</strong>
                <span>{submitError}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot field (hidden from real users to catch spambots) */}
            <input
              type="text"
              name="company_tax_id"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Row 1: Stakeholder Role & Project Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Stakeholder Role <span className="text-[#52E3A4]">*</span>
                </label>
                <select
                  required
                  value={stakeholder}
                  onChange={(e) => setStakeholder(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] text-sm text-white focus:outline-none focus:border-[#52E3A4] transition-colors"
                >
                  <option value="" disabled className="bg-[#090B14] text-zinc-500">
                    Select your primary stakeholder role...
                  </option>
                  {STAKEHOLDER_ROLES.map((role) => (
                    <option key={role} value={role} className="bg-[#090B14] text-white">
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Project Title / Working Name <span className="text-[#52E3A4]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Project Meridian / Untitled Feature"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#52E3A4] transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Continuum Stage */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Current Continuum Stage <span className="text-[#52E3A4]">*</span>
              </label>
              <select
                required
                value={stage}
                onChange={(e) => setStage(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] text-sm text-white focus:outline-none focus:border-[#52E3A4] transition-colors"
              >
                <option value="" disabled className="bg-[#090B14] text-zinc-500">
                  Select the lifecycle stage where the rupture is occurring...
                </option>
                {CONTINUUM_STAGES.map((s) => (
                  <option key={s} value={s} className="bg-[#090B14] text-white">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Row 3: Problem Description */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Operational Problem / System Rupture <span className="text-[#52E3A4]">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Describe what is breaking: timeline delay, vendor insolvency, stage conflict, missing capability, or coordination breakdown..."
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.02] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#52E3A4] transition-colors leading-relaxed"
              />
            </div>

            {/* Row 4: Impact & Financial Velocity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Estimated Schedule / Cost Impact
                </label>
                <input
                  type="text"
                  placeholder="e.g. 5 days behind, $45K/day unit cost burn"
                  value={impact}
                  onChange={(e) => setImpact(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#52E3A4] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Facilities / Resources Involved
                </label>
                <input
                  type="text"
                  placeholder="e.g. Stage 4 soundstage, ARRI Alexa 35 package"
                  value={resources}
                  onChange={(e) => setResources(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#52E3A4] transition-colors"
                />
              </div>
            </div>

            {/* Row 5: Requested Support Modules */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Requested DigiSynq Modules (Select all that apply)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SUPPORT_TYPES.map((type) => {
                  const isChecked = support.includes(type);
                  return (
                    <button
                      type="button"
                      key={type}
                      onClick={() => toggleSupport(type)}
                      className={`p-3 rounded-xl border text-left text-xs font-mono transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-[#16543D]/50 border-[#52E3A4] text-white shadow'
                          : 'bg-white/[0.01] border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      <span>{type}</span>
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center ${
                          isChecked
                            ? 'bg-[#52E3A4] border-[#52E3A4] text-[#03040A]'
                            : 'border-white/20'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Row 6: Contact Information */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-[#52E3A4] uppercase tracking-wider block mb-4">
                Primary Contact Credentials
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Contact Name <span className="text-[#52E3A4]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#52E3A4] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Business Email <span className="text-[#52E3A4]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@production.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#52E3A4] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Direct Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#52E3A4] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Role / Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Line Producer / Post Supervisor"
                    value={contactRole}
                    onChange={(e) => setContactRole(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#52E3A4] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Row 7: Additional Notes */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Confidential Notes / Sensitive Constraints
              </label>
              <textarea
                rows={2}
                placeholder="Special NDAs, time-zone constraints, guild requirements..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#52E3A4] transition-colors"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#52E3A4] text-[#03040A] font-bold text-sm hover:bg-[#34D399] transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:pointer-events-none"
              >
                {isSubmitting ? (
                  <>
                    <Activity className="w-4 h-4 animate-spin" />
                    <span>Transmitting Intake Manifest...</span>
                  </>
                ) : (
                  <>
                    <span>Submit & Generate Case ID</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </section>

        {/* Right Column: Case Status Tracker & Telemetry */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Tracker Card */}
          <div className="p-6 rounded-2xl border border-white/10 bg-[#090B14] shadow-lg">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Search className="w-4 h-4 text-[#52E3A4]" />
              <span>Track Existing Case</span>
            </h3>
            <p className="text-xs text-zinc-400 mb-4 font-light">
              Enter your assigned DigiSynq Case ID to review live triage status and intervention milestones.
            </p>

            <form onSubmit={handleLookup} className="space-y-3">
              <input
                type="text"
                placeholder="e.g. SYNC-2026-AB123"
                value={lookupId}
                onChange={(e) => setLookupId(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-white/10 bg-white/[0.02] text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-[#52E3A4]"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-white transition-colors flex items-center justify-center gap-2"
              >
                <span>Query Gateway</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Lookup Result */}
            {lookupAttempted && (
              <div className="mt-6 pt-6 border-t border-white/10">
                {searchedCase ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#52E3A4] font-bold">
                        {searchedCase.caseId}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#16543D] text-[#52E3A4] border border-[#52E3A4]/30">
                        {searchedCase.status}
                      </span>
                    </div>
                    <div className="text-xs text-zinc-300">
                      <strong>Project:</strong> {searchedCase.project}
                    </div>
                    <div className="text-xs text-zinc-300">
                      <strong>Stage:</strong> {searchedCase.stage}
                    </div>
                    <div className="text-xs text-zinc-400 line-clamp-2">
                      <strong>Problem:</strong> {searchedCase.problem}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-500 pt-2 border-t border-white/5">
                      Created: {new Date(searchedCase.createdAt).toLocaleString()}
                    </div>
                  </div>
                ) : (
                  <div className="text-xs text-zinc-500 text-center py-2">
                    No registered case found matching "{lookupId}".
                  </div>
                )}
              </div>
            )}
          </div>

          {/* SLA & Operating Protocol */}
          <div className="p-6 rounded-2xl border border-white/10 bg-[#090B14] shadow-lg">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#52E3A4] mb-3 font-semibold flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Response Protocol SLA</span>
            </h4>
            <ul className="space-y-3 text-xs text-zinc-400 font-light">
              <li className="flex items-start gap-2">
                <span className="text-[#52E3A4] font-mono font-bold">•</span>
                <span><strong>Emergency Sets:</strong> Triage response within 60 minutes for active principal photography freezes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#52E3A4] font-mono font-bold">•</span>
                <span><strong>Post / VFX Bottlenecks:</strong> Dependency map and candidate matches delivered within 12 hours.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#52E3A4] font-mono font-bold">•</span>
                <span><strong>Neutral Governance:</strong> Standardized clean-room multi-party covenants protect all proprietary IP.</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
