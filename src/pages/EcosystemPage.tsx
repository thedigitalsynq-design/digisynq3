import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, Users, Film, Radio, Shield, Sparkles } from 'lucide-react';
import { EcosystemMap } from '../components/EcosystemMap';

interface Stakeholder {
  id: string;
  category: 'creators' | 'talent' | 'facilities' | 'services' | 'capital' | 'distribution';
  role: string;
  scope: string;
  need: string;
  offer: string;
  synqAction: string;
}

const ALL_STAKEHOLDERS: Stakeholder[] = [
  {
    id: 'producers',
    category: 'creators',
    role: 'Independent Producers & Banners',
    scope: 'Features, Series & Documentaries',
    need: 'Rapid crew assembly, connected stage capacity, transparent budget pacing, and viable distribution pathways.',
    offer: 'Packaged entertainment IP, talent attachments, production management, and active industry demand.',
    synqAction: 'Match verified crew availability, route to partner facilities during turnaround windows, and coordinate milestone tranches.',
  },
  {
    id: 'directors',
    category: 'creators',
    role: 'Directors & Showrunners',
    scope: 'Narrative & Episodic Leadership',
    need: 'Creative alignment with technical department heads, reliable volume/stage technology, and uninterrupted production flow.',
    offer: 'Visual storytelling vision, directing craft, script execution, and cross-department creative leadership.',
    synqAction: 'Discover specialized department heads, align pre-vis assets with virtual stages, and eliminate coordination drag.',
  },
  {
    id: 'writers',
    category: 'creators',
    role: 'Screenwriters & IP Holders',
    scope: 'Original Scripts, Books & Formats',
    need: 'Packaging partners, transparent rights monetization, and realistic technical feasibility modeling.',
    offer: 'High-value narrative IP, worldbuilding concepts, adaptations, and franchise character universes.',
    synqAction: 'Connect scripts to active production demand and pre-vetted packaging capacity without predatory terms.',
  },
  {
    id: 'performers',
    category: 'talent',
    role: 'Actors, Performers & Voice Talent',
    scope: 'Cast & Voice Characterization',
    need: 'Clear scheduling visibility, verified production covenants, and prompt milestone compensation.',
    offer: 'On-screen charisma, performance craft, character voiceover, and audience engagement power.',
    synqAction: 'Coordinate booking schedules with production timetables and ensure milestone-backed compensation security.',
  },
  {
    id: 'cinematography',
    category: 'talent',
    role: 'Cinematographers & Camera Units',
    scope: 'DPs, Camera Operators & DITs',
    need: 'Verified project calendars, rate parity, and access to premium optics and camera packages without delay.',
    offer: 'Master lighting, framing, lens selection, color science, and camera department execution.',
    synqAction: 'Index availability across guild rosters, connecting DPs directly to funded productions without agency commission tolls.',
  },
  {
    id: 'lighting-grip',
    category: 'talent',
    role: 'Grip, Electric & Lighting Units',
    scope: 'Gaffers, Key Grips & Rigging',
    need: 'Continuous booked shoot dates, verified safety standards, and transparent crew packaging.',
    offer: 'Complex on-set rigging, power management, lighting control, and technical safety on set.',
    synqAction: 'Coordinate certified lighting and rigging units to active production schedules, reducing pre-rigging idle days.',
  },
  {
    id: 'art-department',
    category: 'talent',
    role: 'Production Design & Art Direction',
    scope: 'Set Design, Props & Construction',
    need: 'Early access to stage floor dimensions, clear build timelines, and integrated pre-visualization.',
    offer: 'Worldbuilding, practical set construction, prop curation, and visual aesthetic continuity.',
    synqAction: 'Harmonize practical set building with available partner stage slots and digital volume assets.',
  },
  {
    id: 'soundstages',
    category: 'facilities',
    role: 'Soundstages & Studio Lots',
    scope: 'Acoustic Stages & Backlot Facilities',
    need: 'Floor monetization during dark turnaround dates between marquee tenant leases.',
    offer: 'World-class acoustic shooting stages, lighting grids, power plants, and production offices.',
    synqAction: 'Route production demand to available partner floor dates, creating high-occupancy liquidity.',
  },
  {
    id: 'virtual-volumes',
    category: 'facilities',
    role: 'Virtual Production & LED Volumes',
    scope: 'In-Camera VFX Stages & Venues',
    need: 'High volume utilization between major film cycles and standardized pre-shoot asset testing.',
    offer: 'State-of-the-art LED volumes, camera tracking systems, real-time render nodes, and volume technicians.',
    synqAction: 'Connect independent productions to fractional LED volume windows with pre-calibrated virtual asset suites.',
  },
  {
    id: 'equipment-houses',
    category: 'facilities',
    role: 'Equipment Houses & Rentals',
    scope: 'Camera Packages, Grip & Mobile Power',
    need: 'High utilization rates for specialized hardware inventory between major studio bookings.',
    offer: 'State-of-the-art digital cinema cameras, anamorphic lenses, cranes, dollies, and LED lighting fixtures.',
    synqAction: 'Match available equipment inventory to production schedules on fractional, flexible terms.',
  },
  {
    id: 'post-editorial',
    category: 'services',
    role: 'Post-Production & Editorial Labs',
    scope: 'Offline Edit, Conforming & DI Color',
    need: 'Standardized camera-to-cloud dailies turnovers, scope clarity, and milestone-backed payment escrow.',
    offer: 'Master editorial suites, color finishing, calibrated HDR grading theaters, and master delivery pipelines.',
    synqAction: 'Streamline ingest telemetry from set to post and tie milestone releases to approved turnovers.',
  },
  {
    id: 'vfx-animation',
    category: 'services',
    role: 'VFX & Animation Studios',
    scope: '3D CG, Compositing & Pre-Vis',
    need: 'Locked plates, clear turnover deadlines, and protection against uncompensated scope shifts.',
    offer: 'Photoreal CG environments, digital doubles, creature animation, and complex multi-pass compositing.',
    synqAction: 'Enforce structured turnover covenants and milestone escrow to keep VFX delivery strictly on schedule.',
  },
  {
    id: 'music-audio',
    category: 'services',
    role: 'Composers, Sound & Audio Suites',
    scope: 'Original Score, Foley & Dolby Atmos',
    need: 'Synchronized picture locks, prompt cue turnovers, and Dolby Atmos mixing theater access.',
    offer: 'Original orchestral scoring, spatial audio mixing, sound design, Foley, and music licensing.',
    synqAction: 'Coordinate audio post schedules directly with picture editorial, eliminating late-stage delivery scrambles.',
  },
  {
    id: 'financiers',
    category: 'capital',
    role: 'Financiers & Gap Capital',
    scope: 'Mezzanine Debt, Equity & Bonds',
    need: 'Burn-rate transparency, verified deliverable verification, and mitigation of completion risk.',
    offer: 'Production cash flow, finishing debt, bridge financing, tax credit financing, and completion insurance.',
    synqAction: 'Real-time milestone telemetry that unlocks capital tranches systematically upon verified scene and shot delivery.',
  },
  {
    id: 'brands-sponsors',
    category: 'capital',
    role: 'Brands & Commercial Sponsors',
    scope: 'Product Integration & Co-Marketing',
    need: 'Brand-safe narrative environments, seamless product integration, and measurable audience reach.',
    offer: 'Non-dilutive production capital, co-marketing budgets, and promotional distribution reach.',
    synqAction: 'Match brand partners with verified productions in pre-production, aligning storylines before cameras roll.',
  },
  {
    id: 'exhibitors-platforms',
    category: 'distribution',
    role: 'Exhibitors, Streamers & Broadcasters',
    scope: 'Theatrical Circuits, OTT & FAST Channels',
    need: 'High-quality verified content with targeted pre-demand rather than empty screens or underperforming releases.',
    offer: 'DCI-compliant cinema screens, premium formats, global OTT subscriber reach, and broadcast syndication.',
    synqAction: 'Programmatic release windowing and territorial demand density matching to maximize audience return.',
  },
];

const FILTER_ROLES = [
  { id: 'all', label: 'All Stakeholders (16)' },
  { id: 'creators', label: 'Creators & Producers' },
  { id: 'talent', label: 'Talent & Crew Guilds' },
  { id: 'facilities', label: 'Studios, Stages & Venues' },
  { id: 'services', label: 'Post, VFX & Audio' },
  { id: 'capital', label: 'Capital & Commercial' },
  { id: 'distribution', label: 'Exhibition & Platforms' },
];

export function EcosystemPage() {
  const [selectedRole, setSelectedRole] = useState<string>('all');

  const filteredGroups = selectedRole === 'all'
    ? ALL_STAKEHOLDERS
    : ALL_STAKEHOLDERS.filter(g => g.category === selectedRole);

  return (
    <main className="bg-[#07080b] text-[#ECEEF5] selection:bg-white/20 selection:text-white min-h-screen">

      {/* ── 01. Hero Section ── */}
      <section className="pt-40 sm:pt-48 pb-20 sm:pb-28 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-zinc-300 mb-8 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono text-zinc-400">ECOSYSTEM</span>
            <span className="text-zinc-600">//</span>
            <span className="text-white font-medium">Multi-Stakeholder Network</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] [letter-spacing:-0.035em] mb-8">
            The Living Constellation.<br />
            <span className="text-zinc-400 font-light">Every node. In resonance.</span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-3xl mb-12">
            Entertainment thrives on distributed genius: premier studio lots, guild craft leaders, independent producers, and global exhibition platforms. DigiSynq connects them into an asset-light operating fabric — generating incremental yield for facility operators and turnkey agility for creators.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/start"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#06080d] hover:bg-zinc-200 font-medium text-sm tracking-wide transition-all duration-200 active:scale-95 shadow-sm"
            >
              <span>Connect Your Node</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#constellation"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] text-zinc-300 font-medium text-sm transition-all duration-200"
            >
              <span>Explore Constellation</span>
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
              The Division of Labor.<br />
              <span className="text-zinc-400 font-light">Assets, craft, orchestration.</span>
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
                The Living Mesh.<br />
                <span className="text-zinc-400 font-light">Sixteen disciplines in lockstep.</span>
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center flex-wrap gap-2">
              {FILTER_ROLES.map((r) => (
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredGroups.map((group) => (
              <div
                key={group.id}
                className="p-8 rounded-2xl bg-white/[0.015] border border-white/[0.06] hover:border-white/15 transition-all flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                      {group.category}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {group.scope}
                    </span>
                  </div>

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

                <div className="pt-4 border-t border-white/[0.06] flex flex-col justify-between gap-3">
                  <div>
                    <span className="text-emerald-400 text-xs font-mono uppercase tracking-wider block mb-1">
                      DigiSynq Coordination
                    </span>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {group.synqAction}
                    </p>
                  </div>
                  <Link
                    to="/start"
                    state={{ role: group.role, category: group.category }}
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white font-medium transition-colors pt-1"
                  >
                    <span>Connect as {group.role.split('&')[0].split('/')[0].trim()}</span>
                    <ArrowUpRight size={13} className="opacity-60" />
                  </Link>
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
              The Frictionless Plane.<br />
              <span className="text-zinc-400 font-light">Velocity through uncompromised neutrality.</span>
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
            Plug In Your Node.<br />
            <span className="text-zinc-400 font-light">Enter the asset-light entertainment stream.</span>
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
