import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, Users, Film, Radio, Shield, Sparkles } from 'lucide-react';
import { EcosystemMap } from '../components/EcosystemMap';
import { participants, type Participant } from '../data/participants';

const STAKEHOLDER_GROUPS = [
  {
    id: 'creative',
    role: 'Creators & Directors',
    need: 'Access to top-tier technical heads and fractional studio slots without giving up creative control or equity.',
    offer: 'Original visionary IP, package attachments, and directing talent ready for streamlined execution.',
    synqAction: 'Pair directly with vetted craft guilds and open soundstage windows at fair market rates.',
  },
  {
    id: 'technical',
    role: 'Crew & Craft Guilds',
    need: 'Continuous booked days, transparent compensation, and elimination of closed-circle hiring bottlenecks.',
    offer: 'Master-level cinematography, production sound, gaffer, and colorist craftsmanship.',
    synqAction: 'Roster availability indexing that connects technicians directly to funded productions in need.',
  },
  {
    id: 'infrastructure',
    role: 'Soundstages & Facilities',
    need: 'Monetization of dark floor dates and high-cost LED volumes between major studio leases.',
    offer: 'World-class physical soundstages, lighting packages, and virtual production infrastructure.',
    synqAction: 'Fractional burst-occupancy booking for independent productions during facility turnaround lull periods.',
  },
  {
    id: 'capital',
    role: 'Financiers & Producers',
    need: 'Milestone certainty, burn-rate transparency, and mitigation of predatory completion risk.',
    offer: 'Finishing debt, gap equity, and completion guarantees.',
    synqAction: 'Real-time telemetry and scene delivery escrow that unlocks capital tranches systematically.',
  },
  {
    id: 'distribution',
    role: 'Exhibitors & Theaters',
    need: 'High seat-occupancy films with targeted regional demand rather than empty multiplex screens.',
    offer: 'DCI-compliant cinema screens, premium large formats, and localized audience footprint.',
    synqAction: 'Programmatic release windowing and pre-demand density matching across regional circuits.',
  },
  {
    id: 'post',
    role: 'Post & VFX Houses',
    need: 'Standardized camera-to-cloud dailies turnovers, scope clarity, and milestone-backed payment locks.',
    offer: 'Editorial suites, color finishing, Dolby Atmos mixing, and visual effects pipelines.',
    synqAction: 'Automated ingest telemetry and milestone-tied finishing covenants to ensure zero uncompensated stalls.',
  },
];

const ROLES = [
  { id: 'all', label: 'All Stakeholders' },
  { id: 'creative', label: 'Creators & Directors' },
  { id: 'technical', label: 'Crew & Guilds' },
  { id: 'infrastructure', label: 'Stages & Studios' },
  { id: 'capital', label: 'Capital & Producers' },
  { id: 'distribution', label: 'Exhibitors & Screens' },
];

export function EcosystemPage() {
  const [selectedRole, setSelectedRole] = useState<string>('all');

  const filteredGroups = selectedRole === 'all'
    ? STAKEHOLDER_GROUPS
    : STAKEHOLDER_GROUPS.filter(g => g.id === selectedRole || (selectedRole === 'technical' && g.id === 'post'));

  return (
    <main className="bg-[#07080b] text-[#ECEEF5] selection:bg-white/20 selection:text-white">

      {/* ── 01. Hero Section ── */}
      <section className="pt-40 sm:pt-48 pb-20 sm:pb-28 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-zinc-400 mb-8 tracking-wide">
            <span>Cinema Ecosystem Network</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] [letter-spacing:-0.035em] mb-8">
            The complete cinema constellation.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 font-normal leading-relaxed max-w-3xl mb-12">
            DigiSynq does not replace any industry participant. We provide the neutral, asset-light coordination layer that allows creators, craft guilds, production facilities, capital, and screens to interface without friction.
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

      {/* ── 02. Interactive Topography Map ── */}
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
                        Core Challenge
                      </span>
                      <p className="text-zinc-400 leading-relaxed">
                        {group.need}
                      </p>
                    </div>

                    <div>
                      <span className="text-zinc-500 uppercase tracking-wider font-mono block mb-1">
                        Provided Value
                      </span>
                      <p className="text-zinc-400 leading-relaxed">
                        {group.offer}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <span className="text-emerald-400 text-xs font-mono uppercase tracking-wider block mb-1">
                    DigiSynq Bridge
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

      {/* ── 03. Three Pillars of Neutrality ── */}
      <section className="py-24 sm:py-32 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
              Operating Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Why neutral coordination works
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              Traditional intermediaries extract rents by monopolizing access. DigiSynq generates value solely by removing frictional waste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#090b10] border border-white/[0.06]">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-2">
                01 // Balance-Sheet Neutral
              </span>
              <h3 className="text-lg font-bold text-white mb-3">
                Zero asset carrying debt
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                DigiSynq does not take out loans to purchase physical camera packages or soundstages. Because we have no idle overhead, we never force bad packages onto creators.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#090b10] border border-white/[0.06]">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-2">
                02 // Fractional Liquidity
              </span>
              <h3 className="text-lg font-bold text-white mb-3">
                Unlocking dark capacity
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Independent productions gain access to tier-one studios and technicians during lull periods at fractional rates, turning dead time into active gross revenue for facilities.
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
                Every technician, facility operator, and investor receives transparent terms and milestone verification, ensuring fair compensation and predictable theatrical returns.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 04. Call to Action ── */}
      <section className="py-24 sm:py-32 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Connect your node to DigiSynq
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed max-w-xl mx-auto mb-10">
            Whether you operate a soundstage, represent a craft guild, manage private capital, or direct indie features, register your interest to join the synchronized network.
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
