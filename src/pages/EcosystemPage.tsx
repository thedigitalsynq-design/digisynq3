import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, Users, Film, Radio, Shield, Sparkles } from 'lucide-react';
import { EcosystemMap } from '../components/EcosystemMap';

const STAKEHOLDER_GROUPS = [
  {
    id: 'creative',
    role: 'Creators & Producers',
    need: 'Access to verified talent, connected studio capacity, and packaging support without surrendering creative autonomy or excessive equity.',
    offer: 'Original visionary IP, package attachments, and directing talent ready for streamlined production.',
    synqAction: 'Route project demand to verified talent, partner facilities, and specialized services tailored to project requirements.',
  },
  {
    id: 'technical',
    role: 'Talent & Technical Crews',
    need: 'Continuous booked days, transparent compensation, and elimination of closed-circle hiring bottlenecks.',
    offer: 'Master-level creative craft, technical heads, camera operators, sound supervisors, and production crew expertise.',
    synqAction: 'Roster availability indexing connecting craftspeople and technicians directly to funded entertainment productions.',
  },
  {
    id: 'infrastructure',
    role: 'Studios, Stages & Venues',
    need: 'Better floor utilization and monetization of dark dates across soundstages, LED volumes, and specialized venues.',
    offer: 'World-class physical soundstages, lighting packages, virtual production volumes, and shooting locations.',
    synqAction: 'Route production demand into available turnaround windows, optimizing facility floor utilization without asset debt.',
  },
  {
    id: 'post',
    role: 'Production Services, Post & VFX',
    need: 'Standardized turnovers, clear scope alignment, and milestone-backed payment security.',
    offer: 'Editorial suites, color finishing, Dolby Atmos mixing, animation, and visual effects pipelines.',
    synqAction: 'Turnaround telemetry and milestone-tied covenants to ensure continuous, unhalted post-production workflows.',
  },
  {
    id: 'capital',
    role: 'Capital & Commercial Partners',
    need: 'Milestone certainty, budget transparency, and mitigation of completion risk.',
    offer: 'Production financing, finishing debt, gap equity, completion guarantees, and brand sponsorships.',
    synqAction: 'Milestone governance and scene turnover verification that systematically unlock capital tranches.',
  },
  {
    id: 'distribution',
    role: 'Distribution & Audience Platforms',
    need: 'Compelling content with targeted pre-demand rather than empty screens or underperforming streaming launches.',
    offer: 'Theatrical circuits, OTT/streaming platforms, television networks, digital channels, and event distribution.',
    synqAction: 'Programmatic release windowing and pre-demand density matching across theatrical and digital channels.',
  },
];

const ROLES = [
  { id: 'all', label: 'All Stakeholders' },
  { id: 'creative', label: 'Creators & Producers' },
  { id: 'technical', label: 'Talent & Crew' },
  { id: 'infrastructure', label: 'Studios & Venues' },
  { id: 'post', label: 'Services & Post' },
  { id: 'capital', label: 'Capital & Commercial' },
  { id: 'distribution', label: 'Distribution & Audience' },
];

export function EcosystemPage() {
  const [selectedRole, setSelectedRole] = useState<string>('all');

  const filteredGroups = selectedRole === 'all'
    ? STAKEHOLDER_GROUPS
    : STAKEHOLDER_GROUPS.filter(g => g.id === selectedRole);

  return (
    <main className="bg-[#07080b] text-[#ECEEF5] selection:bg-white/20 selection:text-white">

      {/* ── 01. Hero Section ── */}
      <section className="pt-40 sm:pt-48 pb-20 sm:pb-28 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-zinc-400 mb-8 tracking-wide">
            <span>Entertainment Ecosystem Network</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] [letter-spacing:-0.035em] mb-8">
            The complete entertainment constellation.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 font-normal leading-relaxed max-w-3xl mb-12">
            Entertainment already has immense distributed capacity. DigiSynq does not replace existing industry participants. We provide the neutral, asset-light coordination layer that allows creators, creative talent, partner facilities, production services, commercial partners, and audience distribution channels to interface without friction.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/start"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              Plug in your node
              <ArrowRight size={15} />
            </Link>
            <a
              href="#constellation"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-sm text-zinc-300 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore constellation
            </a>
          </div>
        </div>
      </section>

      {/* ── 02. Asset Owners vs Network Participants vs DigiSynq ── */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
              Network Roles
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
              How the asset-light model divides responsibility
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              DigiSynq creates value by coordinating, discovering, and matching existing capacity rather than competing with asset owners or talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-[#090b10] border border-white/[0.06] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase block mb-3">01 // ASSET OWNERS</span>
                <h3 className="text-lg font-semibold text-white mb-2">Own or Operate Facilities</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  Maintain physical infrastructure, equipment packages, and venues across the industry.
                </p>
                <ul className="space-y-2 text-xs text-zinc-300">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-zinc-500" /> Soundstages, lots & venues</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-zinc-500" /> Virtual production LED volumes</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-zinc-500" /> Specialized camera, grip & lighting inventory</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-zinc-500" /> Post-production editorial & mixing facilities</li>
                </ul>
              </div>
              <div className="pt-6 border-t border-white/[0.06] text-[11px] text-zinc-500">
                Provide physical infrastructure
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#090b10] border border-white/[0.06] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase block mb-3">02 // NETWORK PARTICIPANTS</span>
                <h3 className="text-lg font-semibold text-white mb-2">Provide Craft, Capital & Reach</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  Drive the creative execution, funding, and audience distribution of entertainment.
                </p>
                <ul className="space-y-2 text-xs text-zinc-300">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-zinc-500" /> Creators, directors, showrunners & producers</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-zinc-500" /> Key crew, technicians & creative talent</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-zinc-500" /> Finishing funds, debt & commercial partners</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-zinc-500" /> Theatrical, streaming & digital platforms</li>
                </ul>
              </div>
              <div className="pt-6 border-t border-white/[0.06] text-[11px] text-zinc-500">
                Deliver creative & commercial capacity
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#090b10] border border-emerald-500/20 flex flex-col justify-between relative">
              <div className="absolute top-6 right-6">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/30">
                  DigiSynq
                </span>
              </div>
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase block mb-3">03 // COORDINATION LAYER</span>
                <h3 className="text-lg font-semibold text-white mb-2">Orchestrates & Connects</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  Routes project demand to existing capacity with neutral governance.
                </p>
                <ul className="space-y-2 text-xs text-zinc-200">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Capacity discovery & verification</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Resource matching & routing</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Turnaround scheduling & escrow</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Cross-network milestone governance</li>
                </ul>
              </div>
              <div className="pt-6 border-t border-white/[0.06] text-[11px] text-emerald-400 font-medium">
                Orchestration without asset ownership
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 03. Interactive Topography Map ── */}
      <section id="constellation" className="py-24 sm:py-32 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
                Network Topology
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Interactive participant network
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center flex-wrap gap-2">
              {ROLES.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setSelectedRole(r.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                    selectedRole === r.id
                      ? 'bg-white text-black font-medium'
                      : 'bg-white/[0.03] border border-white/[0.08] text-zinc-400 hover:text-white'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Visualizer Canvas */}
          <div className="rounded-3xl bg-[#090b10] border border-white/[0.06] p-8 sm:p-12 mb-16">
            <EcosystemMap size="full" />
          </div>

          {/* Stakeholder Directory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGroups.map((group) => (
              <div
                key={group.id}
                className="p-8 rounded-2xl bg-white/[0.015] border border-white/[0.06] hover:border-white/15 transition-all flex flex-col justify-between space-y-6"
              >
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">
                    {group.role}
                  </h3>

                  <div className="space-y-4 text-xs">
                    <div>
                      <span className="text-zinc-500 uppercase tracking-wider font-mono block mb-1">
                        Core Requirement
                      </span>
                      <p className="text-zinc-400 leading-relaxed">
                        {group.need}
                      </p>
                    </div>

                    <div>
                      <span className="text-zinc-500 uppercase tracking-wider font-mono block mb-1">
                        Ecosystem Capacity
                      </span>
                      <p className="text-zinc-400 leading-relaxed">
                        {group.offer}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <span className="text-emerald-400 text-xs font-mono uppercase tracking-wider block mb-1">
                    DigiSynq Coordination
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {group.synqAction}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 04. Three Pillars of Neutrality ── */}
      <section className="py-24 sm:py-32 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
              Asset-Light Advantages
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Why neutral coordination works
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              Traditional intermediaries extract rents by monopolizing physical infrastructure. DigiSynq generates value by routing and orchestrating capacity that already exists across the entertainment ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#090b10] border border-white/[0.06]">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-2">
                01 // Lower Fixed Requirements
              </span>
              <h3 className="text-lg font-bold text-white mb-3">
                Zero infrastructure debt
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                DigiSynq does not take out debt to acquire cameras or real estate. Because we have no idle physical assets to amortize, we remain completely objective in recommending the right facility and team for every project.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#090b10] border border-white/[0.06]">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-2">
                02 // Distributed Capacity
              </span>
              <h3 className="text-lg font-bold text-white mb-3">
                Access across the network
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Productions access top-tier soundstages, LED volumes, venues, and specialized talent across the entire network, turning unused facility days into active production windows.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#090b10] border border-white/[0.06]">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-2">
                03 // Fair Value Attribution
              </span>
              <h3 className="text-lg font-bold text-white mb-3">
                Aligned economic incentives
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Every technician, facility operator, and financier receives transparent terms and milestone verification, ensuring fair compensation and predictable delivery schedules.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 05. Call to Action ── */}
      <section className="py-24 sm:py-32 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Connect your node to DigiSynq
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed max-w-xl mx-auto mb-10">
            Whether you operate a studio facility, represent creative talent, manage entertainment capital, or lead production, register your interest to join the synchronized network.
          </p>
          <Link
            to="/start"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            Register your node
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  );
}
