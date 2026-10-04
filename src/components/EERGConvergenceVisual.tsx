import React, { useState } from 'react';
import { Sparkles, ArrowDown, GitMerge, DollarSign, CheckCircle2 } from 'lucide-react';
import { EERG_SIGNATURE_CONVERGENCE } from '../data/eerg_data';

interface ConvergenceScenario {
  id: string;
  name: string;
  domain: string;
  surfaceProblems: { role: string; complaint: string }[];
  convergedRootCauses: { code: string; name: string; family: string }[];
  bottleneck: { code: string; name: string; detail: string };
  opportunity: { name: string; impact: string; payingCustomers: string[] };
}

const CONVERGENCE_SCENARIOS: ConvergenceScenario[] = [
  {
    id: 'talent',
    name: 'Talent & Casting',
    domain: 'Creation & Discovery',
    surfaceProblems: EERG_SIGNATURE_CONVERGENCE.surfaceProblems,
    convergedRootCauses: [
      { code: 'R001', name: 'Information Fragmentation', family: 'Data Silos' },
      { code: 'R008', name: 'Trust Uncertainty & Quality Deficit', family: 'Trust Deficit' },
      { code: 'R006', name: 'Poor Standardization of Profiles', family: 'Coordination' },
      { code: 'R017', name: 'Informal Relationship Gatekeeping', family: 'Market Friction' }
    ],
    bottleneck: {
      code: 'B001 / B002',
      name: 'Weak Talent Discovery & Matching Infrastructure',
      detail: 'No verified, real-time registry connecting open roles to verified talent availability.'
    },
    opportunity: {
      name: 'SYNQ.TALENT: Universal Verified Talent Intelligence & Live Availability Exchange',
      impact: 'Reduces casting cycle from 4 weeks to 72 hours; eliminates duplicate agency outreach.',
      payingCustomers: ['Production Houses', 'Casting Agencies', 'Talent Agencies', 'Film Studios', 'OTT Platforms']
    }
  },
  {
    id: 'stages',
    name: 'Physical Soundstages',
    domain: 'Production Logistics',
    surfaceProblems: [
      { role: 'Line Producer', complaint: 'Cannot find certified soundstage floor space within 60 miles.' },
      { role: 'Studio Facility Owner', complaint: 'Dark stages sit empty 28% of the year between tentpole leases.' },
      { role: '1st AD', complaint: 'Weather delay forced stage relocation with 24 hours notice; zero options.' },
      { role: 'Grip & Electric Rental', complaint: 'Gear sitting on standby awaiting stage access clearance.' },
      { role: 'Production Financier', complaint: 'Incurring $32k/day standby penalties during dark stage hunt.' }
    ],
    convergedRootCauses: [
      { code: 'R001', name: 'Information Fragmentation', family: 'Data Silos' },
      { code: 'R048', name: 'Asset Under-Utilization (Dark Floor Capacity)', family: 'Market Friction' },
      { code: 'R021', name: 'Workflow Fragmentation', family: 'Coordination' }
    ],
    bottleneck: {
      code: 'B007 / B008',
      name: 'Soundstage & Physical Facility Scheduling Gridlock',
      detail: 'Opaque calendar reservations and inflexible multi-month lease covenants.'
    },
    opportunity: {
      name: 'SYNQ.STAGE: Secondary Dark-Floor Capacity Marketplace & Live Booking Grid',
      impact: 'Unlocks $4.2B in stranded stage capacity; enables same-week production pivots.',
      payingCustomers: ['Facility Operators', 'Studio Slates', 'Independent Line Producers', 'Insurance Bonders']
    }
  },
  {
    id: 'vfx',
    name: 'Post-Production & VFX',
    domain: 'Post Finishing & Delivery',
    surfaceProblems: [
      { role: 'VFX Supervisor', complaint: 'Plates turned over 12 days late with conformed delivery date fixed.' },
      { role: 'Colorist', complaint: 'ACES OCIO config mismatched between camera raw and conform timeline.' },
      { role: 'VFX Studio Owner', complaint: 'Forced into 24/7 unbilled overtime to hit unyielding air date.' },
      { role: 'Platform QC Lead', complaint: 'Master IMF package fails automated Netflix / Apple delivery spec.' },
      { role: 'Distributor', complaint: 'Day-and-date theatrical marketing spend burned due to delivery slip.' }
    ],
    convergedRootCauses: [
      { code: 'R018', name: 'Incentive Misalignment', family: 'Incentive Structure' },
      { code: 'R021', name: 'Post-Production Compression', family: 'Workflow' },
      { code: 'R002', name: 'Data Incompatibility (Non-Standardized Color/Metadata)', family: 'Data Silos' }
    ],
    bottleneck: {
      code: 'B025 / B026',
      name: 'IMF Plate Delivery Compression & Spec Rejection',
      detail: 'Upstream filming delays are continuously absorbed by post-production vendors.'
    },
    opportunity: {
      name: 'SYNQ.FINISH: Conformed Asset Ledger & Predictive QC Gatekeeper',
      impact: 'Protects post vendor margins; ensures 100% first-pass platform acceptance rate.',
      payingCustomers: ['Post Finishing Houses', 'VFX Vendors', 'Streaming Platforms', 'Completion Bonders']
    }
  },
  {
    id: 'rights',
    name: 'Music & Sync Rights',
    domain: 'IP & Legal Clearance',
    surfaceProblems: [
      { role: 'Independent Filmmaker', complaint: 'Music supervisor cannot determine who owns European sync rights.' },
      { role: 'Catalog Owner', complaint: 'Unclaimed royalty royalties pool in black-box funds overseas.' },
      { role: 'Music Supervisor', complaint: 'Cue sheet approvals stuck between 3 competing PROs for 6 months.' },
      { role: 'International Distributor', complaint: 'Cannot license film into Germany due to unverified master rights.' },
      { role: 'Composer', complaint: 'No royalty statement received 18 months after streaming premiere.' }
    ],
    convergedRootCauses: [
      { code: 'R039', name: 'Rights & Chain-of-Title Fragmentation', family: 'Legal/IP' },
      { code: 'R066', name: 'Legacy Performing Rights Organization Architecture', family: 'Institutional' },
      { code: 'R001', name: 'Information Fragmentation (PDF Cue Sheets)', family: 'Data Silos' }
    ],
    bottleneck: {
      code: 'B013 / B027',
      name: 'Territorial Rights Clearance & Music Sync Gridlock',
      detail: 'Fragmented publishing splits and mutually incompatible regional registries.'
    },
    opportunity: {
      name: 'SYNQ.RIGHTS: Automated Chain-of-Title & Multi-Territory Clearance Engine',
      impact: 'Reduces sync clearance from 180 days to 48 hours; unlocks $1.8B in trapped royalties.',
      payingCustomers: ['Music Publishers', 'Film Distributors', 'Media Investment Funds', 'PROs']
    }
  }
];

export function EERGConvergenceVisual() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>('talent');
  const scenario = CONVERGENCE_SCENARIOS.find((s) => s.id === activeScenarioId) || CONVERGENCE_SCENARIOS[0];

  return (
    <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/[0.02] blur-[120px] pointer-events-none" />

      {/* Header & Concept */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-white font-mono text-xs font-semibold mb-3">
            <GitMerge className="w-3.5 h-3.5" />
            <span>SIGNATURE EERG ARCHITECTURE</span>
            <span className="text-zinc-600">//</span>
            <span>SYSTEM CONVERGENCE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            MANY PROBLEMS → FEWER ROOT CAUSES
          </h2>
          <p className="text-sm text-zinc-300 mt-2 max-w-2xl leading-relaxed">
            Every visible breakdown in entertainment is the surface symptom of a much smaller cluster of structural root causes. Solving individual complaints treats the symptom; resolving the root cause eliminates the entire cascade.
          </p>
        </div>

        {/* Scenario Selector Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {CONVERGENCE_SCENARIOS.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveScenarioId(s.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono tracking-wider transition-all ${
                activeScenarioId === s.id
                  ? 'bg-white text-black font-bold shadow-md shadow-white/10'
                  : 'bg-black/60 text-zinc-400 hover:text-white border border-white/[0.08]'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      {/* The Visual Convergence Funnel */}
      <div className="space-y-8">
        {/* Tier 1: Many Surface Problems */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
              TIER 1 // 5 DISPARATE SURFACE COMPLAINTS
            </span>
            <span className="text-[11px] font-mono text-zinc-500 bg-white/[0.03] px-2.5 py-1 rounded-full border border-white/[0.06]">
              Surface Symptoms (Fragmented)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {scenario.surfaceProblems.map((prob, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-black/50 border border-white/[0.08] flex flex-col justify-between hover:border-white/20 transition-all soft-card"
              >
                <div>
                  <div className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.08] text-white font-semibold mb-2">
                    {prob.role}
                  </div>
                  <p className="text-xs text-zinc-300 leading-snug">
                    "{prob.complaint}"
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-white/[0.04] text-[10px] font-mono text-zinc-600 flex items-center justify-between">
                  <span>Symptom #{idx + 1}</span>
                  <span className="text-zinc-400">Isolated</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Funnel Transition Arrow 1 */}
        <div className="flex items-center justify-center gap-3 text-zinc-500 py-1">
          <div className="h-px bg-white/10 flex-1 max-w-xs" />
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            <span>CONVERGES DOWNSTREAM INTO FEWER ROOT CAUSES</span>
          </div>
          <div className="h-px bg-white/10 flex-1 max-w-xs" />
        </div>

        {/* Tier 2: Converged Systemic Root Causes */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-white uppercase tracking-wider font-semibold">
              TIER 2 // CONVERGED SYSTEMIC ROOT CAUSES
            </span>
            <span className="text-[11px] font-mono text-zinc-400 bg-white/[0.05] px-2.5 py-1 rounded-full border border-white/15 font-semibold">
              Underlying Drivers
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {scenario.convergedRootCauses.map((rc, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#090B14] border border-white/15 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-white bg-white/10 px-2 py-0.5 rounded border border-white/20">
                      {rc.code}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">{rc.family}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{rc.name}</h4>
                </div>
                <div className="mt-3 pt-2 border-t border-white/[0.06] text-[10px] font-mono text-zinc-400">
                  Affects {scenario.surfaceProblems.length} surface roles
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Funnel Transition Arrow 2 */}
        <div className="flex items-center justify-center gap-3 text-zinc-500 py-1">
          <div className="h-px bg-white/10 flex-1 max-w-xs" />
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300">
            <ArrowDown className="w-3.5 h-3.5" />
            <span>CREATES SYSTEMIC CHOKE POINT</span>
          </div>
          <div className="h-px bg-white/10 flex-1 max-w-xs" />
        </div>

        {/* Tier 3: Underlying Structural Bottleneck */}
        <div className="p-5 rounded-2xl bg-black/70 border border-white/20 shadow-xl max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/10 text-white font-mono text-[11px] font-bold mb-2">
            <span>CHOKE POINT</span>
            <span>//</span>
            <span>{scenario.bottleneck.code}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            {scenario.bottleneck.name}
          </h3>
          <p className="text-xs text-zinc-300 leading-relaxed max-w-xl mx-auto">
            {scenario.bottleneck.detail}
          </p>
        </div>

        {/* Funnel Transition Arrow 3 */}
        <div className="flex items-center justify-center gap-3 text-zinc-500 py-1">
          <div className="h-px bg-white/10 flex-1 max-w-xs" />
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-white font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>UNCOVERS SYSTEMIC BUSINESS OPPORTUNITY</span>
          </div>
          <div className="h-px bg-white/10 flex-1 max-w-xs" />
        </div>

        {/* Tier 4: The Systemic Opportunity & Paying Customers */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/20 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-xs font-mono text-white font-bold tracking-wider uppercase">
                  HIGH-LEVERAGE INTERVENTION OPPORTUNITY
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                {scenario.opportunity.name}
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-light mb-4">
                {scenario.opportunity.impact}
              </p>

              {/* Paying Customers */}
              <div>
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-semibold">
                  <DollarSign className="w-3.5 h-3.5 text-white" />
                  <span>POTENTIAL PAYING CUSTOMERS (ECONOMIC BENEFICIARIES):</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {scenario.opportunity.payingCustomers.map((cust, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-xl bg-white/10 text-white font-semibold border border-white/20"
                    >
                      {cust}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="shrink-0 p-5 rounded-2xl bg-black/60 border border-white/15 text-center min-w-[220px]">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                EERG CONCLUSION
              </span>
              <div className="text-base font-bold text-white mb-1">1 Solution</div>
              <p className="text-xs text-zinc-400">
                Resolves 5 stakeholder problems with 1 systemic intervention.
              </p>
              <div className="mt-3 pt-3 border-t border-white/[0.08] flex items-center justify-center gap-1.5 text-xs text-white font-mono font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Deterministic Leverage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
