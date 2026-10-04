import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Activity,
  ShieldCheck,
  GitBranch,
  RefreshCw,
  Search,
  Sliders,
  TrendingUp,
} from 'lucide-react';
import {
  SYSTEM_RESOLUTION_ENGAGEMENT,
  OPERATING_MODES,
  BRAND,
} from '../data/blueprint_data';
import { SynqFlowDiagram } from '../components/SynqFlowDiagram';
import { TopographicBackground } from '../components/TopographicBackground';

export function HowItWorksPage() {
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  const activeStep = SYSTEM_RESOLUTION_ENGAGEMENT.steps[activeStepIdx];

  return (
    <main className="bg-[#03040A] text-[#ECEEF5] selection:bg-[#23B272] selection:text-[#03040A] min-h-screen pt-36 pb-24 px-6 sm:px-8 max-w-6xl mx-auto relative overflow-hidden">
      <TopographicBackground className="opacity-15 pointer-events-none -z-10 fixed inset-0" />
      {/* ── Header ── */}
      <div className="max-w-4xl mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300 font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-[#52E3A4]" />
          <span>SECTIONS 43, 44 &amp; 45</span>
          <span className="text-zinc-600">//</span>
          <span className="text-[#52E3A4]">SERVICE PRODUCT &amp; RESOLUTION WORKFLOW</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.03] mb-4">
          From Upstream Shock to Verified Harmony.
          <span className="text-zinc-400 font-light block text-2xl sm:text-4xl mt-2">
            The 10-Step Resolution Engagement.
          </span>
        </h1>

        <h2 className="text-base sm:text-xl text-zinc-300 leading-relaxed font-light max-w-3xl mb-8">
          The cleanest commercial product in entertainment: A structured protocol that turns an acute operational emergency into systemic immunity and verified outcome value.
        </h2>

        {/* First Customer Strategy Banner */}
        <div className="p-6 rounded-2xl border border-[#23B272]/30 bg-gradient-to-r from-[#06130E] via-[#090B14] to-[#06130E] backdrop-blur-xl">
          <div className="text-xs font-mono text-[#52E3A4] mb-1 uppercase font-semibold">
            Section 43 — The First Customer Offer
          </div>
          <div className="text-base sm:text-lg font-medium text-white italic">
            "{SYSTEM_RESOLUTION_ENGAGEMENT.tagline}"
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          00 — INTERACTIVE 8-STAGE SYNQ PIPELINE SIMULATION
         ══════════════════════════════════════════════════════ */}
      <section className="mb-20">
        <div className="text-xs font-mono text-[#52E3A4] mb-2 uppercase">
          Continuous Execution Flow // The Synq Cycle
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Interactive Operational Pipeline
        </h2>
        <div className="p-6 sm:p-8 rounded-3xl border border-white/[0.08] bg-[#090B14] shadow-2xl">
          <SynqFlowDiagram />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          01 — THE 10-STEP RESOLUTION WORKFLOW
         ══════════════════════════════════════════════════════ */}
      <section className="mb-20">
        <div className="text-xs font-mono text-[#52E3A4] mb-2 uppercase">
          Section 44 // The 10-Step Resolution Architecture
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          From Chaos to Documented Verification
        </h2>

        {/* 10-Step Timeline Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2 mb-8">
          {SYSTEM_RESOLUTION_ENGAGEMENT.steps.map((st, sIdx) => (
            <button
              key={sIdx}
              onClick={() => setActiveStepIdx(sIdx)}
              className={`p-3 rounded-xl border text-center transition-all ${
                activeStepIdx === sIdx
                  ? 'bg-[#16543D] border-[#52E3A4] text-white shadow-lg scale-105'
                  : 'bg-[#090B14] border-white/[0.06] text-zinc-400 hover:text-white'
              }`}
            >
              <div className="font-mono text-[10px] text-[#52E3A4] mb-1">{st.num}</div>
              <div className="font-bold text-[11px] truncate">{st.name}</div>
            </button>
          ))}
        </div>

        {/* Active Step Showcase */}
        <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.1] bg-[#090B14] shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-[#52E3A4] font-semibold">
              STEP {activeStep.num} OF 10 // OPERATIONAL PHASE
            </span>
            <span className="font-mono text-xs text-zinc-500">DIGISYNQ Core Standard</span>
          </div>

          <h3 className="text-3xl font-bold text-white mb-3">{activeStep.name}</h3>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8 max-w-3xl">
            {activeStep.desc}
          </p>

          <div className="pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-white/[0.06] bg-black/40">
              <div className="text-[11px] font-mono text-zinc-500 uppercase mb-1">Standard Outputs</div>
              <div className="text-xs text-zinc-200">
                Audited action protocols with designated owner, input, output, deadline, and verification gate.
              </div>
            </div>
            <div className="p-4 rounded-xl border border-white/[0.06] bg-black/40">
              <div className="text-[11px] font-mono text-zinc-500 uppercase mb-1">Downstream Telemetry</div>
              <div className="text-xs text-zinc-200">
                Continuous variance monitoring against planned target state to arrest subsequent cascade.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          02 — CASE STUDY: LEAD ACTOR SCHEDULE FAILURE
         ══════════════════════════════════════════════════════ */}
      <section className="mb-20 p-8 sm:p-10 rounded-2xl border border-white/[0.1] bg-gradient-to-br from-[#06080D] via-[#090B14] to-[#06130E]">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16543D]/50 border border-[#23B272]/30 text-[#52E3A4] font-mono text-xs font-semibold mb-3">
            SECTION 45 EMPIRICAL WALKTHROUGH
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Case Breakdown: Production Schedule Failure
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed">
            How DIGISYNQ resolves an emergency where a lead actor becomes unavailable for 6 consecutive days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {[
            { phase: '01. OBSERVE', desc: 'Captures talent schedule, shooting plan, stage bookings, crew commitments, and gear holds.' },
            { phase: '02. DETECT', desc: 'Gap = 6 Days between contracted shooting calendar and actual talent availability.' },
            { phase: '03. MAP', desc: 'Actor → Scenes → Location → Crew → Equipment → Post schedule → Platform Release Window.' },
            { phase: '04. DIAGNOSE', desc: 'Root cause is schedule dependency concentration across sequential linear scenes.' },
            { phase: '05. SIMULATE', desc: 'Evaluates options: wait, reschedule, reorder scenes, substitute stage, compress post-production.' },
            { phase: '06. CONNECT', desc: 'Identifies available alternative soundstage floor and 2nd unit camera package.' },
            { phase: '07. COORDINATE', desc: 'Reconciles affected stakeholders: Director, 1st AD, Cinematographer, Stage Manager, Producer.' },
            { phase: '08. EXECUTE', desc: 'Deploys revised call sheets and shooting order with zero turnaround hour violations.' },
            { phase: '09. VERIFY', desc: 'Measures: 5.5 days saved, $84,000 overtime penalty avoided, release window 100% protected.' },
            { phase: '10. PREVENT', desc: 'Stores case in system memory; future slates with high talent concentration receive early risk alerts.' },
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-white/[0.06] bg-black/40">
              <div className="font-mono text-[#52E3A4] font-bold mb-1">{item.phase}</div>
              <div className="text-zinc-300 leading-snug">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          03 — ASSET-LIGHT OPERATING MODEL & TRUST
         ══════════════════════════════════════════════════════ */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#090B14]">
          <div className="text-xs font-mono text-[#52E3A4] mb-2 uppercase">
            Section 62 // Core Strategic Rule
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Own the Logic, Not the Assets
          </h3>
          <p className="text-zinc-300 text-sm leading-relaxed mb-6">
            DIGISYNQ does not own soundstages, camera trucks, post facilities, or transportation fleets. Owning heavy physical assets creates perverse incentives to push suboptimal internal capacity.
          </p>
          <div className="p-4 rounded-xl border border-white/[0.06] bg-black/40 text-xs text-zinc-300 leading-relaxed font-mono">
            Value comes from knowing: What is needed • When it is needed • Why it is needed • Who can provide it • What it affects • What it costs • What alternatives exist • Whether it worked.
          </div>
        </div>

        <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#090B14]">
          <div className="text-xs font-mono text-[#52E3A4] mb-2 uppercase">
            Section 39 &amp; 40 // Trust Infrastructure
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            The Professional Reliability Graph
          </h3>
          <p className="text-zinc-300 text-sm leading-relaxed mb-6">
            Instead of superficial 5-star ratings or vanity endorsements, DIGISYNQ builds trust around observed operational outcomes and delivery histories.
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono text-zinc-300">
            <span className="p-2 rounded bg-black/30 border border-white/[0.05]">• Schedule Adherence</span>
            <span className="p-2 rounded bg-black/30 border border-white/[0.05]">• On-Time Delivery</span>
            <span className="p-2 rounded bg-black/30 border border-white/[0.05]">• Quality Consistency</span>
            <span className="p-2 rounded bg-black/30 border border-white/[0.05]">• Capacity Accuracy</span>
            <span className="p-2 rounded bg-black/30 border border-white/[0.05]">• Revision Discipline</span>
            <span className="p-2 rounded bg-black/30 border border-white/[0.05]">• Problem Resolution</span>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="text-center pt-8 border-t border-white/[0.08]">
        <Link
          to="/start"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#23B272] text-[#03040A] hover:bg-[#52E3A4] font-bold text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(35,178,114,0.3)]"
        >
          <span>Initiate System Resolution Engagement</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  );
}
