import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Network,
  GitBranch,
  Layers,
  Activity,
  AlertTriangle,
  ArrowRight,
  Search,
  Sliders,
  DollarSign,
  Shield,
  Cpu,
  Sparkles,
  Compass,
  CheckCircle2,
  RefreshCw,
  HelpCircle,
  Eye,
  Workflow,
  ExternalLink,
  Users,
  Grid,
  TrendingUp,
  FileText
} from 'lucide-react';
import { TopographicBackground } from '../components/TopographicBackground';
import {
  EERG_LAYERS,
  EERG_STAKEHOLDER_CATEGORIES,
  EERG_ROOT_CAUSES,
  EERG_BOTTLENECKS,
  EERG_LOOPS,
  EERG_PATH_CASES,
  EERG_MATRIX,
  EERG_HIGH_LEVERAGE_HYPOTHESIS,
  EERG_RELATIONSHIP_TYPES,
  EERG_RESEARCH_PIPELINE,
  EERG_OUTPUT_VIEWS,
  EERG_INQUIRY_PRINCIPLES,
  EERG_BUSINESS_UNITS
} from '../data/eerg_data';

type EERGTab =
  | 'OVERVIEW'
  | 'STAKEHOLDERS'
  | 'ROOT_CAUSES'
  | 'BOTTLENECKS'
  | 'LOOPS'
  | 'CASCADE'
  | 'MATRIX'
  | 'OPPORTUNITIES'
  | 'BUSINESS'
  | 'PIPELINE';

export default function RootCauseGraphPage() {
  const [activeTab, setActiveTab] = useState<EERGTab>('OVERVIEW');
  const [stakeholderSearch, setStakeholderSearch] = useState('');
  const [selectedLayer, setSelectedLayer] = useState<string>('ALL');
  const [rootCauseSearch, setRootCauseSearch] = useState('');
  const [selectedRootFamily, setSelectedRootFamily] = useState<string>('ALL');
  const [bottleneckSearch, setBottleneckSearch] = useState('');
  const [selectedBottleneckDomain, setSelectedBottleneckDomain] = useState<string>('ALL');
  const [activeLoopIndex, setActiveLoopIndex] = useState(0);
  const [activePathCaseIndex, setActivePathCaseIndex] = useState(0);
  const [selectedBusinessUnitIndex, setSelectedBusinessUnitIndex] = useState(0);
  const [cascadeStep, setCascadeStep] = useState(0);

  // Filtered Stakeholders
  const filteredCategories = useMemo(() => {
    return EERG_STAKEHOLDER_CATEGORIES.filter((cat) => {
      const matchesLayer = selectedLayer === 'ALL' || cat.layer === selectedLayer;
      const matchesSearch =
        !stakeholderSearch ||
        cat.title.toLowerCase().includes(stakeholderSearch.toLowerCase()) ||
        cat.description.toLowerCase().includes(stakeholderSearch.toLowerCase()) ||
        cat.stakeholders.some((s) => s.toLowerCase().includes(stakeholderSearch.toLowerCase()));
      return matchesLayer && matchesSearch;
    });
  }, [selectedLayer, stakeholderSearch]);

  const totalFilteredStakeholders = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.stakeholders.length, 0);
  }, [filteredCategories]);

  // Root Cause Families
  const rootFamilies = useMemo(() => {
    const families = Array.from(new Set(EERG_ROOT_CAUSES.map((r) => r.family)));
    return ['ALL', ...families];
  }, []);

  const filteredRootCauses = useMemo(() => {
    return EERG_ROOT_CAUSES.filter((rc) => {
      const matchesFamily = selectedRootFamily === 'ALL' || rc.family === selectedRootFamily;
      const matchesSearch =
        !rootCauseSearch ||
        rc.name.toLowerCase().includes(rootCauseSearch.toLowerCase()) ||
        rc.code.toLowerCase().includes(rootCauseSearch.toLowerCase()) ||
        rc.description.toLowerCase().includes(rootCauseSearch.toLowerCase());
      return matchesFamily && matchesSearch;
    });
  }, [selectedRootFamily, rootCauseSearch]);

  // Bottleneck Domains
  const bottleneckDomains = useMemo(() => {
    const domains = Array.from(new Set(EERG_BOTTLENECKS.map((b) => b.domain)));
    return ['ALL', ...domains];
  }, []);

  const filteredBottlenecks = useMemo(() => {
    return EERG_BOTTLENECKS.filter((b) => {
      const matchesDomain = selectedBottleneckDomain === 'ALL' || b.domain === selectedBottleneckDomain;
      const matchesSearch =
        !bottleneckSearch ||
        b.name.toLowerCase().includes(bottleneckSearch.toLowerCase()) ||
        b.code.toLowerCase().includes(bottleneckSearch.toLowerCase()) ||
        b.blockedFlow.toLowerCase().includes(bottleneckSearch.toLowerCase());
      return matchesDomain && matchesSearch;
    });
  }, [selectedBottleneckDomain, bottleneckSearch]);

  const activeLoop = EERG_LOOPS[activeLoopIndex] || EERG_LOOPS[0];
  const activePathCase = EERG_PATH_CASES[activePathCaseIndex] || EERG_PATH_CASES[0];
  const activeBusinessUnit = EERG_BUSINESS_UNITS[selectedBusinessUnitIndex] || EERG_BUSINESS_UNITS[0];

  const cascadeStages = [
    { title: 'Actor Unavailable', role: 'Talent Variance', impact: 'Call time delayed by 3 hours due to overlapping schedule conflict on previous shoot.' },
    { title: 'Shoot Delayed', role: 'Physical Production', impact: 'Daylight exterior scene missed; crew forced into standby incurring initial downtime cost.' },
    { title: 'Location Expired', role: 'Municipal & Logistics', impact: 'Police and municipal filming permit expires; location manager must renegotiate or reschedule.' },
    { title: 'Crew Turnaround Violated', role: 'Union & Safety', impact: 'Mandatory 12-hour turnaround rule pushed back, moving tomorrow call time and disrupting workflow.' },
    { title: 'Equipment Incurring Penalties', role: 'Vendors & Capital', impact: 'Rental camera packages and specialized crane gear exceed booked rental period.' },
    { title: 'Budget Overrun Compounded', role: 'Production Finance', impact: 'Contingency buffer burned by 18%; completion bonder requests immediate risk audit.' },
    { title: 'Post-Production Starts Late', role: 'Editorial & VFX', impact: 'Raw footage arrives 5 days late; offline editor and visual effects team window compressed.' },
    { title: 'VFX Crunch & Overtime', role: 'Creative Tech', impact: '500 complex CGI shots rushed into 24/7 overtime; vendor margins wiped out.' },
    { title: 'Platform Acceptance Delayed', role: 'Distribution QC', impact: 'QC flags non-compliant sound bed and color space due to rushed finish; delivery rejected.' },
    { title: 'Marketing Window Slipped', role: 'Commercial Launch', impact: 'Global synchronized promotional campaign lands without confirmed streaming availability.' },
    { title: 'Revenue & Royalties Impaired', role: 'Ecosystem Return', impact: 'Opening weekend box-office / streaming acquisition drop; distributor imposes liquidated damages.' },
    { title: 'Investor Confidence Eroded', role: 'Capital Architecture', impact: 'Equity partners pull back future slates, restricting development funding for new creative IP.' }
  ];

  return (
    <main className="bg-[#03040A] text-[#ECEEF5] selection:bg-white selection:text-black min-h-screen pt-32 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* ── Topographic Background Canvas ── */}
      <TopographicBackground className="opacity-30 pointer-events-none -z-10" />

      {/* ── Ambient Spotlight Atmosphere ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[1600px] -right-48 w-[600px] h-[600px] bg-white/[0.03] blur-[180px] pointer-events-none -z-10" />

      {/* ══════════════════════════════════════════════════════
          01 — HEADER & TELEMETRY DASHBOARD
         ══════════════════════════════════════════════════════ */}
      <header className="text-center max-w-4xl mx-auto mb-14">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] text-xs text-zinc-300 mb-6 tracking-wide backdrop-blur-xl">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="font-mono text-white font-semibold">ENTERTAINMENT ECOSYSTEM ROOT-CAUSE GRAPH</span>
          <span className="text-zinc-600">//</span>
          <span className="text-zinc-400 font-medium">MASTER ARCHITECTURE V1.0</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6">
          The Connected System of Entertainment Breakdown.
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed mb-8 max-w-3xl mx-auto">
          Not just a stakeholder directory. A rigorous graph linking <span className="text-white font-semibold">Stakeholders</span> to <span className="text-white font-semibold">Bottlenecks</span>, <span className="text-white font-semibold">Systemic Root Causes</span>, <span className="text-white font-semibold">Failure Cascades</span>, and <span className="text-white font-semibold">High-Leverage Business Opportunities</span>.
        </p>

        {/* Master One-Line Model Banner */}
        <div className="p-4 sm:p-5 rounded-2xl border border-white/[0.1] bg-[#090B14]/90 backdrop-blur-xl text-left overflow-x-auto mb-8 shadow-xl">
          <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2 font-semibold flex items-center justify-between">
            <span>MASTER ONE-LINE OPERATIONAL CASCADE</span>
            <span className="text-white font-bold">DIGISYNQ CORE PROTOCOL</span>
          </div>
          <div className="text-xs sm:text-sm font-mono text-zinc-300 whitespace-nowrap flex items-center gap-2">
            <span className="text-white font-bold">STAKEHOLDERS</span>
            <span className="text-zinc-600">→</span>
            <span>PROBLEMS</span>
            <span className="text-zinc-600">→</span>
            <span className="text-white font-semibold">BOTTLENECKS</span>
            <span className="text-zinc-600">→</span>
            <span>CAUSES</span>
            <span className="text-zinc-600">→</span>
            <span className="text-white font-bold bg-white/10 px-2 py-0.5 rounded border border-white/20">SYSTEMIC ROOT CAUSES</span>
            <span className="text-zinc-600">→</span>
            <span>DEPENDENCIES</span>
            <span className="text-zinc-600">→</span>
            <span className="text-zinc-200">FAILURE PROPAGATION</span>
            <span className="text-zinc-600">→</span>
            <span>ECONOMIC IMPACT</span>
            <span className="text-zinc-600">→</span>
            <span>EXISTING SOLUTIONS</span>
            <span className="text-zinc-600">→</span>
            <span className="text-zinc-200 font-semibold">SOLUTION GAPS</span>
            <span className="text-zinc-600">→</span>
            <span className="text-white font-bold">OPPORTUNITIES</span>
            <span className="text-zinc-600">→</span>
            <span className="text-white">PAYING CUSTOMERS</span>
            <span className="text-zinc-600">→</span>
            <span className="text-white font-bold">SYSTEM INTERVENTION</span>
          </div>
        </div>

        {/* Scale Metrics Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left">
          <div className="p-4 rounded-2xl border border-white/[0.08] bg-[#090B14] shadow-md flex flex-col justify-between">
            <span className="text-xs font-mono text-zinc-400 font-medium">STAKEHOLDERS</span>
            <div className="text-2xl sm:text-3xl font-black text-white mt-1">160+</div>
            <span className="text-[11px] text-zinc-500 mt-1">20 Functional Categories across 5 Layers</span>
          </div>
          <div className="p-4 rounded-2xl border border-white/[0.08] bg-[#090B14] shadow-md flex flex-col justify-between">
            <span className="text-xs font-mono text-zinc-400 font-medium">SYSTEMIC ROOTS</span>
            <div className="text-2xl sm:text-3xl font-black text-white mt-1">75</div>
            <span className="text-[11px] text-zinc-500 mt-1">Indexed by Centrality & Blast Radius</span>
          </div>
          <div className="p-4 rounded-2xl border border-white/[0.08] bg-[#090B14] shadow-md flex flex-col justify-between">
            <span className="text-xs font-mono text-zinc-400 font-medium">BOTTLENECK FAMILIES</span>
            <div className="text-2xl sm:text-3xl font-black text-white mt-1">50</div>
            <span className="text-[11px] text-zinc-500 mt-1">Choke Points Across 10 Lifecycle Domains</span>
          </div>
          <div className="p-4 rounded-2xl border border-white/[0.08] bg-[#090B14] shadow-md flex flex-col justify-between">
            <span className="text-xs font-mono text-zinc-400 font-medium">FEEDBACK LOOPS</span>
            <div className="text-2xl sm:text-3xl font-black text-white mt-1">5 Master</div>
            <span className="text-[11px] text-zinc-500 mt-1">Talent, Abundance, Hits, Platform, Cascade</span>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════
          02 — INTERACTIVE NAVIGATION TABS
         ══════════════════════════════════════════════════════ */}
      <div className="mb-10 sticky top-20 z-40 bg-[#03040A]/95 backdrop-blur-xl p-2 rounded-2xl border border-white/[0.1] shadow-2xl overflow-x-auto">
        <div className="flex items-center gap-1.5 min-w-max">
          {[
            { id: 'OVERVIEW', label: 'Ecosystem Architecture', icon: Layers },
            { id: 'STAKEHOLDERS', label: '160+ Stakeholders', icon: Users },
            { id: 'ROOT_CAUSES', label: '75 Root Causes', icon: GitBranch },
            { id: 'BOTTLENECKS', label: '50 Bottlenecks', icon: AlertTriangle },
            { id: 'LOOPS', label: '5 Feedback Loops', icon: RefreshCw },
            { id: 'CASCADE', label: 'Failure Cascade', icon: Activity },
            { id: 'MATRIX', label: 'Exposure Matrix', icon: Grid },
            { id: 'OPPORTUNITIES', label: 'Opportunity Engine', icon: Sparkles },
            { id: 'BUSINESS', label: 'Commercial Business Engine', icon: DollarSign },
            { id: 'PIPELINE', label: 'Research Pipeline', icon: Workflow }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as EERGTab)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-white text-black shadow-lg scale-100 font-bold'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          TAB 1: ECOSYSTEM ARCHITECTURE & CORE INQUIRY
         ══════════════════════════════════════════════════════ */}
      {activeTab === 'OVERVIEW' && (
        <section className="space-y-12">
          {/* Master Circular Network Flow */}
          <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono text-white uppercase tracking-wider block mb-2 font-semibold">
                SYSTEMIC FOUNDATION // THE CIRCULAR NETWORK
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                The Ecosystem is Circular, Not Linear.
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Entertainment fails when viewed as independent transactions. A decision in creative writing affects physical soundstage rigging; an on-set schedule delay compresses VFX; a delayed OTT delivery degrades international marketing windows; and impaired revenue destroys the investor confidence needed to greenlight new creation.
              </p>
            </div>

            {/* Circular Network Diagram Visual */}
            <div className="p-6 rounded-2xl border border-white/[0.08] bg-black/60 mb-10 overflow-x-auto">
              <div className="min-w-[680px] flex flex-col items-center gap-6 py-4 text-center font-mono text-xs">
                {/* Stage 1: Attention & Creators */}
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 text-white font-bold">
                  <span>AUDIENCE ATTENTION & CAPITAL</span>
                  <span className="text-zinc-500">⇄</span>
                  <span>CREATORS & INTELLECTUAL PROPERTY</span>
                </div>

                <div className="w-0.5 h-6 bg-white/20" />

                {/* Stage 2: Triad Core */}
                <div className="grid grid-cols-3 gap-4 w-full max-w-xl text-center">
                  <div className="p-3.5 rounded-xl border border-white/[0.1] bg-[#090B14]">
                    <div className="text-white font-bold mb-1">DISCOVERY</div>
                    <div className="text-[11px] text-zinc-400">Talent matching & role attachments</div>
                  </div>
                  <div className="p-3.5 rounded-xl border border-white/[0.1] bg-[#090B14]">
                    <div className="text-white font-bold mb-1">PRODUCTION</div>
                    <div className="text-[11px] text-zinc-400">Physical sets, stages & VFX pipelines</div>
                  </div>
                  <div className="p-3.5 rounded-xl border border-white/[0.1] bg-[#090B14]">
                    <div className="text-white font-bold mb-1">MARKETING</div>
                    <div className="text-[11px] text-zinc-400">Audience capture & theatrical release</div>
                  </div>
                </div>

                <div className="w-0.5 h-6 bg-white/20" />

                {/* Stage 3: Operational Pipeline */}
                <div className="flex items-center justify-center gap-3 text-zinc-300">
                  <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03]">RIGHTS & CONTRACTS</span>
                  <span>→</span>
                  <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03]">CAPITAL FLOW</span>
                  <span>→</span>
                  <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03]">DECISION TELEMETRY</span>
                  <span>→</span>
                  <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03]">EXECUTION</span>
                </div>

                <div className="w-0.5 h-6 bg-white/20" />

                {/* Stage 4: Supporting Bedrock */}
                <div className="p-3 rounded-xl border border-white/15 bg-white/[0.04] text-zinc-300 w-full max-w-2xl">
                  <span className="text-white font-semibold">SUPPORTING BEDROCK:</span> FINANCE + LEGAL/IP + GOVERNMENT PERMISSIONS + CLOUD INFRASTRUCTURE + GUILDS
                </div>
              </div>
            </div>

            {/* The 5 Master Ecosystem Layers */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-2">The 5 Structural Ecosystem Layers</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {EERG_LAYERS.map((layer) => (
                  <div key={layer.id} className="p-5 rounded-2xl border border-white/[0.08] bg-[#090B14] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs text-white font-bold">LAYER {layer.code}</span>
                        <span className="text-[11px] font-mono text-zinc-500">{layer.sectors.length} Sectors</span>
                      </div>
                      <h4 className="text-base font-bold text-white mb-2">{layer.name}</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-4">{layer.description}</p>
                    </div>
                    <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1">
                      {layer.sectors.slice(0, 4).map((s, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-zinc-300 border border-white/[0.08]">
                          {s}
                        </span>
                      ))}
                      {layer.sectors.length > 4 && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.02] text-zinc-500">
                          +{layer.sectors.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 8 Core Systemic Inquiry Principles */}
          <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono text-white uppercase tracking-wider block mb-2 font-semibold">
                DIAGNOSTIC PROTOCOL // FIRST PRINCIPLES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                The 8 Systemic Inquiry Principles
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Do not stop at surface-level complaints. DigiSynq asks the structural questions that expose how problems propagate across the ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {EERG_INQUIRY_PRINCIPLES.map((principle, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-white/[0.08] bg-black/40 flex flex-col justify-between soft-card">
                  <div>
                    <span className="w-7 h-7 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center font-mono text-xs font-bold text-white mb-3">
                      ?
                    </span>
                    <h4 className="text-sm font-bold text-white mb-2">{principle.question}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">{principle.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 25 High-Leverage Hypothesis Set */}
          <div className="p-6 sm:p-8 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono text-white uppercase tracking-wider block mb-1 font-semibold">
                  RESEARCH HYPOTHESES
                </span>
                <h3 className="text-xl font-bold text-white">25 High-Leverage Root Causes Under Investigation</h3>
              </div>
              <span className="text-xs font-mono text-zinc-400">75 Total Mapped in System</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {EERG_HIGH_LEVERAGE_HYPOTHESIS.map((hyp, i) => (
                <div key={i} className="px-3.5 py-1.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-xs font-mono text-zinc-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>{hyp}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          TAB 2: 160+ STAKEHOLDER DIRECTORY ACROSS 20 CATEGORIES
         ══════════════════════════════════════════════════════ */}
      {activeTab === 'STAKEHOLDERS' && (
        <section className="space-y-8">
          {/* Controls Bar */}
          <div className="p-5 rounded-2xl border border-white/[0.1] bg-[#090B14] flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search 160+ stakeholders, roles..."
                value={stakeholderSearch}
                onChange={(e) => setStakeholderSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-black/60 border border-white/[0.08] text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto">
              {['ALL', 'CREATION', 'PRODUCTION', 'COMMERCIAL', 'INFRASTRUCTURE', 'CONSUMPTION'].map((layer) => (
                <button
                  key={layer}
                  onClick={() => setSelectedLayer(layer)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-colors ${
                    selectedLayer === layer
                      ? 'bg-white text-black font-bold'
                      : 'bg-white/[0.04] text-zinc-400 hover:text-white border border-white/[0.06]'
                  }`}
                >
                  {layer}
                </button>
              ))}
            </div>
          </div>

          <div className="text-xs font-mono text-zinc-400 flex items-center justify-between px-1">
            <span>SHOWING {totalFilteredStakeholders} STAKEHOLDERS ACROSS {filteredCategories.length} CATEGORIES</span>
            <span>TOTAL ECOSYSTEM REPOSITORY: 160+ ENTITIES</span>
          </div>

          {/* Categories Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat) => (
              <div key={cat.id} className="p-6 rounded-3xl border border-white/[0.08] bg-[#090B14] flex flex-col justify-between shadow-xl soft-card">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-zinc-400 font-semibold">{cat.code} // {cat.layer}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.08] text-white border border-white/15">
                      {cat.stakeholders.length} Roles
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{cat.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">{cat.description}</p>

                  <div className="pt-4 border-t border-white/[0.06]">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2">PARTICIPATING ENTITIES</div>
                    <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto pr-1">
                      {cat.stakeholders.map((s, idx) => (
                        <span key={idx} className="text-[11px] px-2.5 py-1 rounded-lg bg-white/[0.04] text-zinc-300 border border-white/[0.06] hover:border-white/20 transition-colors">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-zinc-500 font-mono text-[11px]">System Impact</span>
                  <Link to="/diagnose" className="text-white hover:underline flex items-center gap-1 font-semibold text-[11px]">
                    <span>Diagnose Role</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          TAB 3: 75 SYSTEMIC ROOT CAUSES (R001 - R075)
         ══════════════════════════════════════════════════════ */}
      {activeTab === 'ROOT_CAUSES' && (
        <section className="space-y-8">
          {/* Controls Bar */}
          <div className="p-5 rounded-2xl border border-white/[0.1] bg-[#090B14] flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search 75 root causes by name, code..."
                value={rootCauseSearch}
                onChange={(e) => setRootCauseSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-black/60 border border-white/[0.08] text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto">
              {rootFamilies.map((fam) => (
                <button
                  key={fam}
                  onClick={() => setSelectedRootFamily(fam)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-colors whitespace-nowrap ${
                    selectedRootFamily === fam
                      ? 'bg-white text-black font-bold'
                      : 'bg-white/[0.04] text-zinc-400 hover:text-white border border-white/[0.06]'
                  }`}
                >
                  {fam}
                </button>
              ))}
            </div>
          </div>

          <div className="text-xs font-mono text-zinc-400 flex items-center justify-between px-1">
            <span>INDEXED: {filteredRootCauses.length} OF 75 SYSTEMIC ROOT CAUSES</span>
            <span>RANKED BY SYSTEMIC CENTRALITY SCORE</span>
          </div>

          {/* Root Causes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRootCauses.map((rc) => (
              <div key={rc.id} className="p-6 rounded-3xl border border-white/[0.08] bg-[#090B14] flex flex-col justify-between shadow-xl soft-card">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-white font-bold px-2 py-0.5 rounded bg-white/10 border border-white/20">
                      {rc.code}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-zinc-400">Score {rc.centralityScore}/100</span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                          rc.propagationRisk === 'CRITICAL'
                            ? 'bg-white/15 text-white border-white/30 font-bold'
                            : 'bg-white/[0.05] text-zinc-300 border-white/[0.08]'
                        }`}
                      >
                        {rc.propagationRisk}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5">{rc.name}</h3>
                  <div className="text-[11px] font-mono text-zinc-400 mb-3 uppercase tracking-wider">{rc.family}</div>
                  <p className="text-xs text-zinc-300 leading-relaxed mb-4">{rc.description}</p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] space-y-3">
                  <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                    <span>Downstream Problems</span>
                    <span className="text-white font-bold">{rc.downstreamProblems}+ Cascades</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                      DIGISYNQ INTERVENTION:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {rc.interventions.map((intv, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/[0.06] text-zinc-200 border border-white/10 font-mono">
                          {intv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          TAB 4: 50 MAJOR BOTTLENECK FAMILIES (B001 - B050)
         ══════════════════════════════════════════════════════ */}
      {activeTab === 'BOTTLENECKS' && (
        <section className="space-y-8">
          {/* Controls Bar */}
          <div className="p-5 rounded-2xl border border-white/[0.1] bg-[#090B14] flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search 50 bottlenecks, domains..."
                value={bottleneckSearch}
                onChange={(e) => setBottleneckSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-black/60 border border-white/[0.08] text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto">
              {bottleneckDomains.map((dom) => (
                <button
                  key={dom}
                  onClick={() => setSelectedBottleneckDomain(dom)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-colors whitespace-nowrap ${
                    selectedBottleneckDomain === dom
                      ? 'bg-white text-black font-bold'
                      : 'bg-white/[0.04] text-zinc-400 hover:text-white border border-white/[0.06]'
                  }`}
                >
                  {dom}
                </button>
              ))}
            </div>
          </div>

          <div className="text-xs font-mono text-zinc-400 flex items-center justify-between px-1">
            <span>INDEXED: {filteredBottlenecks.length} OF 50 BOTTLENECK CHOKE POINTS</span>
            <span>FILTERED BY LIFECYCLE DOMAIN</span>
          </div>

          {/* Bottlenecks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBottlenecks.map((b) => (
              <div key={b.id} className="p-6 rounded-3xl border border-white/[0.08] bg-[#090B14] flex flex-col justify-between shadow-xl soft-card">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-white font-bold px-2 py-0.5 rounded bg-white/10 border border-white/20">
                      {b.code}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-zinc-400">{b.whereItOccurs}</span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                          b.severity === 'CRITICAL'
                            ? 'bg-white/15 text-white border-white/30 font-bold'
                            : 'bg-white/[0.05] text-zinc-300 border-white/[0.08]'
                        }`}
                      >
                        {b.severity}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5">{b.name}</h3>
                  <div className="text-[11px] font-mono text-zinc-400 mb-3 uppercase tracking-wider">{b.domain}</div>

                  <div className="p-3.5 rounded-xl border border-white/[0.08] bg-black/40 mb-4">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                      BLOCKED FLOW:
                    </span>
                    <p className="text-xs text-zinc-300 leading-relaxed">{b.blockedFlow}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] space-y-3">
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1.5">
                      PRIMARY STAKEHOLDERS AFFECTED:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {b.affectedStakeholders.map((s, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.06]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-2 border-t border-white/[0.04]">
                    <span>Root Cause Traces</span>
                    <div className="flex items-center gap-1">
                      {b.primaryRootCauses.map((rc, i) => (
                        <span key={i} className="text-white font-bold bg-white/10 px-1.5 py-0.5 rounded">
                          {rc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          TAB 5: 5 MASTER FEEDBACK LOOPS
         ══════════════════════════════════════════════════════ */}
      {activeTab === 'LOOPS' && (
        <section className="space-y-8">
          {/* Loop Selector Switcher */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {EERG_LOOPS.map((loop, idx) => (
              <button
                key={loop.id}
                onClick={() => setActiveLoopIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  activeLoopIndex === idx
                    ? 'border-white bg-white/10 text-white shadow-xl'
                    : 'border-white/[0.08] bg-[#090B14] text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                <span className="font-mono text-[11px] block font-bold text-white mb-1">{loop.code}</span>
                <span className="text-xs font-semibold block leading-tight">{loop.name}</span>
              </button>
            ))}
          </div>

          {/* Active Loop Presentation */}
          <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs font-semibold mb-3">
                <span>{activeLoop.code}</span>
                <span>//</span>
                <span>{activeLoop.subtitle}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">{activeLoop.name}</h2>
              <p className="text-sm text-zinc-300 leading-relaxed">{activeLoop.summary}</p>
            </div>

            {/* Step-by-Step Loop Flow */}
            <div className="space-y-3 mb-10">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2 font-semibold">
                CHRONOLOGICAL PROPAGATION STEPS
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeLoop.steps.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-2xl border border-white/[0.08] bg-black/40 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-mono text-xs text-white shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs text-zinc-200 leading-relaxed font-medium">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Systemic Intervention Card */}
            <div className="p-5 sm:p-6 rounded-2xl border border-white/20 bg-white/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-white font-bold block mb-1">
                  DIGISYNQ SYSTEMIC INTERVENTION POINT
                </span>
                <p className="text-sm text-zinc-200">{activeLoop.systemicIntervention}</p>
              </div>
              <Link
                to="/diagnose"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-zinc-200 font-bold text-xs tracking-wide transition-all shadow-md shrink-0"
              >
                <span>Deploy Protocol</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          TAB 6: FAILURE PROPAGATION & CASCADE MODEL
         ══════════════════════════════════════════════════════ */}
      {activeTab === 'CASCADE' && (
        <section className="space-y-8">
          <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono text-white uppercase tracking-wider block mb-2 font-semibold">
                FAILURE PROPAGATION SIMULATOR
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                How a 3-Hour Actor Delay Becomes an Equity Wipeout.
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                The graph does not merely record that a problem exists; it models what the problem causes next. Step through the 12-stage failure cascade below to see how localized scheduling friction propagates into systemic loss.
              </p>
            </div>

            {/* Cascade Slider / Stepper */}
            <div className="p-5 rounded-2xl border border-white/[0.08] bg-black/60 mb-8">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
                <span>SIMULATION STAGE: {cascadeStep + 1} OF {cascadeStages.length}</span>
                <span className="text-white font-bold">{cascadeStages[cascadeStep].role}</span>
              </div>
              <input
                type="range"
                min="0"
                max={cascadeStages.length - 1}
                value={cascadeStep}
                onChange={(e) => setCascadeStep(parseInt(e.target.value))}
                className="w-full accent-white cursor-pointer"
              />
            </div>

            {/* Active Stage Detail */}
            <div className="p-6 sm:p-8 rounded-2xl border border-white/20 bg-white/[0.03] mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-xl bg-white text-black flex items-center justify-center font-bold text-sm font-mono">
                  {cascadeStep + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{cascadeStages[cascadeStep].title}</h3>
                  <span className="text-xs font-mono text-zinc-400">{cascadeStages[cascadeStep].role}</span>
                </div>
              </div>
              <p className="text-sm text-zinc-200 leading-relaxed">{cascadeStages[cascadeStep].impact}</p>
            </div>

            {/* Complete Cascade Pathway View */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {cascadeStages.map((stage, idx) => (
                <div
                  key={idx}
                  onClick={() => setCascadeStep(idx)}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                    cascadeStep === idx
                      ? 'border-white bg-white/10 text-white shadow-lg'
                      : 'border-white/[0.06] bg-black/30 text-zinc-400 hover:border-white/20 hover:text-zinc-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-bold text-white">STAGE {idx + 1}</span>
                    <span className="text-[10px] font-mono text-zinc-500">{stage.role}</span>
                  </div>
                  <h4 className="text-xs font-bold text-white mb-1">{stage.title}</h4>
                  <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">{stage.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          TAB 7: ROOT CAUSE X STAKEHOLDER EXPOSURE MATRIX
         ══════════════════════════════════════════════════════ */}
      {activeTab === 'MATRIX' && (
        <section className="space-y-8">
          <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono text-white uppercase tracking-wider block mb-2 font-semibold">
                CROSS-DOMAIN HEATMAP MATRIX
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Root Cause x Stakeholder Exposure
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Quantitative scoring of systemic root causes across key industry archetypes. Exposure score: 0 = No meaningful exposure, 1 = Low, 2 = Medium, 3 = High systemic vulnerability.
              </p>
            </div>

            {/* Matrix Table */}
            <div className="overflow-x-auto rounded-2xl border border-white/[0.1] bg-black/60">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-white/[0.1] bg-white/[0.04] font-mono text-[11px] text-zinc-400">
                    <th className="p-3.5 pl-5 font-semibold">ROOT CAUSE</th>
                    <th className="p-3.5 text-center">CODE</th>
                    <th className="p-3.5 text-center">ACTOR</th>
                    <th className="p-3.5 text-center">PRODUCER</th>
                    <th className="p-3.5 text-center">CASTING</th>
                    <th className="p-3.5 text-center">VFX</th>
                    <th className="p-3.5 text-center">MUSIC</th>
                    <th className="p-3.5 text-center">OTT</th>
                    <th className="p-3.5 text-center pr-5">AUDIENCE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] font-mono">
                  {EERG_MATRIX.map((row, idx) => {
                    const renderCell = (val: number) => {
                      let bg = 'bg-white/[0.02] text-zinc-500';
                      if (val === 1) bg = 'bg-white/[0.06] text-zinc-300 border border-white/10';
                      if (val === 2) bg = 'bg-white/15 text-white border border-white/20 font-bold';
                      if (val === 3) bg = 'bg-white text-black font-extrabold shadow-sm';
                      return (
                        <td key={Math.random()} className="p-2.5 text-center">
                          <span className={`inline-block w-7 h-7 rounded-lg text-xs leading-7 ${bg}`}>
                            {val}
                          </span>
                        </td>
                      );
                    };

                    return (
                      <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-3.5 pl-5 font-sans font-medium text-white">{row.rootCause}</td>
                        <td className="p-3.5 text-center text-zinc-400">{row.code}</td>
                        {renderCell(row.exposures.actor)}
                        {renderCell(row.exposures.producer)}
                        {renderCell(row.exposures.casting)}
                        {renderCell(row.exposures.vfx)}
                        {renderCell(row.exposures.music)}
                        {renderCell(row.exposures.ott)}
                        {renderCell(row.exposures.audience)}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Matrix Legend */}
            <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-white/[0.06] text-xs font-mono text-zinc-400">
              <span className="font-semibold text-white">EXPOSURE LEGEND:</span>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-white/[0.02] text-zinc-500 border border-white/[0.06] inline-flex items-center justify-center font-bold text-[10px]">0</span>
                <span>No meaningful exposure</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-white/[0.06] text-zinc-300 border border-white/10 inline-flex items-center justify-center font-bold text-[10px]">1</span>
                <span>Low</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-white/15 text-white border border-white/20 inline-flex items-center justify-center font-bold text-[10px]">2</span>
                <span>Medium</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-white text-black inline-flex items-center justify-center font-extrabold text-[10px]">3</span>
                <span>High systemic exposure</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          TAB 8: OPPORTUNITY DISCOVERY ENGINE & 6 WORKED PATHWAYS
         ══════════════════════════════════════════════════════ */}
      {activeTab === 'OPPORTUNITIES' && (
        <section className="space-y-8">
          {/* Path Case Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
            {EERG_PATH_CASES.map((pc, idx) => (
              <button
                key={pc.id}
                onClick={() => setActivePathCaseIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  activePathCaseIndex === idx
                    ? 'border-white bg-white/10 text-white shadow-xl'
                    : 'border-white/[0.08] bg-[#090B14] text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                <span className="text-xs font-bold block text-white mb-1">{pc.stakeholder}</span>
                <span className="text-[11px] text-zinc-400 block line-clamp-1">{pc.bottleneck}</span>
              </button>
            ))}
          </div>

          {/* Active Pathway Detailed Exploration */}
          <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono text-white uppercase tracking-wider block mb-2 font-semibold">
                END-TO-END OPPORTUNITY PATHWAY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {activePathCase.stakeholder}: {activePathCase.problem}
              </h2>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-300">
                <span className="text-zinc-500">PRIMARY BOTTLENECK:</span>
                <span className="text-white font-bold">{activePathCase.bottleneck}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Left Column: Immediate & Root Causes */}
              <div className="space-y-6">
                <div className="p-5 rounded-2xl border border-white/[0.08] bg-black/40">
                  <h4 className="text-xs font-mono text-white font-bold uppercase tracking-wider mb-3">
                    IMMEDIATE CAUSES (SURFACE TRIGGERS)
                  </h4>
                  <ul className="space-y-2">
                    {activePathCase.immediateCauses.map((c, i) => (
                      <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl border border-white/[0.08] bg-black/40">
                  <h4 className="text-xs font-mono text-white font-bold uppercase tracking-wider mb-3">
                    UNDERLYING SYSTEMIC ROOT CAUSES
                  </h4>
                  <div className="space-y-2">
                    {activePathCase.rootCauses.map((rc, i) => (
                      <div key={i} className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-200">
                        {rc}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-white/[0.08] bg-black/40">
                  <h4 className="text-xs font-mono text-white font-bold uppercase tracking-wider mb-3">
                    OTHER STAKEHOLDERS AFFECTED
                  </h4>
                  <ul className="space-y-2">
                    {activePathCase.otherAffected.map((a, i) => (
                      <li key={i} className="text-xs text-zinc-400 flex items-start gap-2">
                        <span className="text-white font-bold">•</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Damage, Workarounds & Opportunity */}
              <div className="space-y-6">
                <div className="p-5 rounded-2xl border border-white/[0.08] bg-black/40">
                  <h4 className="text-xs font-mono text-white font-bold uppercase tracking-wider mb-3">
                    DOWNSTREAM ECONOMIC IMPACT
                  </h4>
                  <ul className="space-y-2">
                    {activePathCase.downstreamImpact.map((imp, i) => (
                      <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl border border-white/[0.08] bg-black/40">
                  <h4 className="text-xs font-mono text-zinc-400 font-bold uppercase tracking-wider mb-1">
                    CURRENT WORKAROUND
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed mb-3">{activePathCase.currentWorkaround}</p>

                  <h4 className="text-xs font-mono text-white font-bold uppercase tracking-wider mb-1">
                    UNSOLVED STRUCTURAL GAP
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed">{activePathCase.unsolvedGap}</p>
                </div>

                {/* The Opportunity & Paying Customers Card */}
                <div className="p-6 rounded-2xl border border-white/20 bg-white/[0.06] shadow-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-white" />
                    <span className="text-xs font-mono text-white font-bold uppercase tracking-wider">
                      HIGH-LEVERAGE OPPORTUNITY
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-4">{activePathCase.opportunity}</h3>

                  <div className="pt-3 border-t border-white/10">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-2 font-semibold">
                      POTENTIAL PAYING CUSTOMERS:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activePathCase.potentialPayingStakeholders.map((payee, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-white/10 text-white font-semibold border border-white/20">
                          {payee}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          TAB: COMMERCIAL BUSINESS ENGINE (BUILT ON ROOT CAUSES)
         ══════════════════════════════════════════════════════ */}
      {activeTab === 'BUSINESS' && (
        <section className="space-y-10">
          {/* Executive Value Header */}
          <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono text-white uppercase tracking-wider block mb-2 font-semibold">
                COMMERCIAL ARCHITECTURE // VALUE CAPTURE ENGINE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
                Building Real Business on Root-Cause Resolution.
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                DigiSynq is not a theoretical whitepaper. Every commercial product, enterprise SaaS desk, and diagnostic retainer we offer is built directly to monetize the elimination of high-leverage bottlenecks and systemic root causes across the global entertainment supply chain.
              </p>
            </div>

            {/* Total Quantified Friction Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/[0.08]">
              <div className="p-4 rounded-2xl border border-white/[0.08] bg-black/40">
                <span className="text-xs font-mono text-zinc-400 block mb-1">ANNUAL INDUSTRY FRICTION TARGETED</span>
                <div className="text-2xl sm:text-3xl font-black text-white">$61.9 Billion</div>
                <span className="text-[11px] text-zinc-500">Across 6 specialized commercial business units</span>
              </div>
              <div className="p-4 rounded-2xl border border-white/[0.08] bg-black/40">
                <span className="text-xs font-mono text-zinc-400 block mb-1">PRIMARY MONETIZATION MODELS</span>
                <div className="text-lg sm:text-xl font-bold text-white mt-1">Enterprise SaaS + Retainers + Recovery</div>
                <span className="text-[11px] text-zinc-500">Value-sharing, milestone escrow & license fees</span>
              </div>
              <div className="p-4 rounded-2xl border border-white/[0.08] bg-black/40">
                <span className="text-xs font-mono text-zinc-400 block mb-1">PAYING CUSTOMER PROFILES</span>
                <div className="text-lg sm:text-xl font-bold text-white mt-1">14 Enterprise Archetypes</div>
                <span className="text-[11px] text-zinc-500">Studios, Streamers, Bonders, Promoters, Funds</span>
              </div>
            </div>
          </div>

          {/* Business Unit Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {EERG_BUSINESS_UNITS.map((bu, idx) => (
              <button
                key={bu.id}
                onClick={() => setSelectedBusinessUnitIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  selectedBusinessUnitIndex === idx
                    ? 'border-white bg-white/10 text-white shadow-xl scale-[1.02]'
                    : 'border-white/[0.08] bg-[#090B14] text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs font-bold text-white px-1.5 py-0.5 rounded bg-white/10 border border-white/20">
                    {bu.code}
                  </span>
                </div>
                <span className="text-xs font-bold block text-white mb-0.5">{bu.name}</span>
                <span className="text-[10px] text-zinc-400 block line-clamp-1">{bu.tagline}</span>
              </button>
            ))}
          </div>

          {/* Active Business Unit Comprehensive Dashboard */}
          <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl space-y-8">
            {/* Header with Title & Tagline */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/[0.08]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs font-semibold mb-3">
                  <span>{activeBusinessUnit.code}</span>
                  <span>//</span>
                  <span>COMMERCIAL REVENUE UNIT</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">{activeBusinessUnit.name}</h3>
                <p className="text-sm font-medium text-zinc-300">{activeBusinessUnit.tagline}</p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Link
                  to={`/start?unit=${activeBusinessUnit.code}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-zinc-200 font-bold text-xs tracking-wide transition-all shadow-md active:scale-95"
                >
                  <span>Deploy {activeBusinessUnit.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </Link>
                <Link
                  to="/diagnose"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 hover:border-white/30 bg-white/[0.04] text-white font-medium text-xs transition-all"
                >
                  <span>Project Diagnostic</span>
                </Link>
              </div>
            </div>

            {/* Target Root Causes & Economic Value Callout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl border border-white/[0.08] bg-black/40 space-y-3">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block font-semibold">
                  TARGET SYSTEMIC ROOT CAUSES & BOTTLENECKS
                </span>
                <div>
                  <span className="text-xs text-zinc-400 block mb-1">Root Causes Solved:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeBusinessUnit.targetRootCauses.map((rc, i) => (
                      <span key={i} className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white/10 text-white border border-white/20">
                        {rc}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-white/[0.06]">
                  <span className="text-xs text-zinc-400 block mb-1">Bottlenecks Unlocked:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeBusinessUnit.targetBottlenecks.map((b, i) => (
                      <span key={i} className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-white/[0.05] text-zinc-300 border border-white/10">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-white/[0.08] bg-black/40 space-y-3">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block font-semibold">
                  QUANTIFIED VALUE AT STAKE
                </span>
                <div className="text-xs text-zinc-200 leading-relaxed font-medium">
                  {activeBusinessUnit.economicProblemSolved}
                </div>
                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">Annual Target Market Friction:</span>
                  <span className="text-white font-black">{activeBusinessUnit.annualValueAtStake}</span>
                </div>
              </div>
            </div>

            {/* Core Product Offering */}
            <div className="p-6 rounded-2xl border border-white/[0.08] bg-black/60">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-2 font-semibold">
                CORE PRODUCT OFFERING & TECHNICAL ARCHITECTURE
              </span>
              <p className="text-sm text-zinc-200 leading-relaxed mb-4">{activeBusinessUnit.coreProductOffering}</p>
              <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
                <span className="text-white font-bold">Commercial Revenue Architecture:</span>
                <span>{activeBusinessUnit.commercialModel}</span>
              </div>
            </div>

            {/* Enterprise Pricing & Monetization Tiers */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-white uppercase tracking-wider font-semibold">
                  ENTERPRISE PRICING & MONETIZATION TIERS
                </span>
                <span className="text-xs font-mono text-zinc-500">Commercial Contract Specifications</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {activeBusinessUnit.pricingTiers.map((tier, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-white/[0.08] bg-black/40 flex flex-col justify-between soft-card">
                    <div>
                      <div className="text-xs font-mono text-zinc-400 mb-1">{tier.targetBuyer}</div>
                      <h4 className="text-base font-bold text-white mb-2">{tier.tier}</h4>
                      <div className="text-lg font-black text-white font-mono mb-4 pb-3 border-b border-white/[0.08]">
                        {tier.price}
                      </div>
                      <ul className="space-y-2 mb-4">
                        {tier.deliverables.map((d, i) => (
                          <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      to={`/start?unit=${activeBusinessUnit.code}&tier=${encodeURIComponent(tier.tier)}`}
                      className="w-full py-2.5 rounded-xl border border-white/15 hover:border-white/40 bg-white/[0.04] hover:bg-white/[0.08] text-white text-xs font-semibold text-center transition-colors block"
                    >
                      Book {tier.tier}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Paying Customer Profiles & ROI Justifications */}
            <div>
              <span className="text-xs font-mono text-white uppercase tracking-wider block mb-4 font-semibold">
                PAYING CUSTOMER PROFILES & BUDGET ALLOCATION
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {activeBusinessUnit.payingCustomers.map((c, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-white/[0.08] bg-black/40 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white">{c.archetype}</h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-zinc-300 border border-white/15">
                        Budget Owner
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400">
                      Line Item: <span className="text-white">{c.budgetSource}</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed pt-2 border-t border-white/[0.06]">
                      {c.roiJustification}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Moat & Scale Telemetry */}
            <div className="p-5 rounded-2xl border border-white/15 bg-white/[0.03] grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                  DEFENSIBILITY MOAT:
                </span>
                <p className="text-xs text-zinc-200 leading-relaxed">{activeBusinessUnit.defensibilityMoat}</p>
              </div>
              <div>
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                  PRIMARY SCALE METRIC:
                </span>
                <p className="text-xs text-white font-mono font-semibold">{activeBusinessUnit.scaleMetric}</p>
              </div>
            </div>
          </div>

          {/* Full Commercial Portfolio Comparison Table */}
          <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-mono text-white uppercase tracking-wider block mb-1 font-semibold">
                PORTFOLIO OVERVIEW
              </span>
              <h3 className="text-xl font-bold text-white mb-2">The 6 DigiSynq Commercial Business Engines</h3>
              <p className="text-xs text-zinc-400">
                A high-margin, scalable enterprise architecture monetizing every critical phase of the entertainment lifecycle.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-black/60">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-white/[0.1] bg-white/[0.04] font-mono text-[11px] text-zinc-400">
                    <th className="p-3.5 pl-5">UNIT</th>
                    <th className="p-3.5">CORE COMMERCIAL OFFERING</th>
                    <th className="p-3.5">TARGET ROOT CAUSES</th>
                    <th className="p-3.5">VALUE AT STAKE</th>
                    <th className="p-3.5">PRIMARY PRICING</th>
                    <th className="p-3.5 pr-5">KEY BUYER</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] font-mono text-[11px]">
                  {EERG_BUSINESS_UNITS.map((u, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3.5 pl-5 font-bold text-white whitespace-nowrap">{u.code} // {u.name}</td>
                      <td className="p-3.5 font-sans text-zinc-300 max-w-xs">{u.tagline}</td>
                      <td className="p-3.5 text-zinc-400">{u.targetRootCauses.join(', ')}</td>
                      <td className="p-3.5 text-white font-bold whitespace-nowrap">{u.annualValueAtStake.split(' ')[0]}</td>
                      <td className="p-3.5 text-zinc-300">{u.pricingTiers[1]?.price || u.pricingTiers[0].price}</td>
                      <td className="p-3.5 pr-5 text-zinc-400 whitespace-nowrap">{u.payingCustomers[0].archetype}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          TAB 9: 12-PHASE RESEARCH PIPELINE & 18 OUTPUT VIEWS
         ══════════════════════════════════════════════════════ */}
      {activeTab === 'PIPELINE' && (
        <section className="space-y-12">
          {/* 12-Phase Research Pipeline */}
          <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono text-white uppercase tracking-wider block mb-2 font-semibold">
                SYSTEM VALIDATION ROADMAP
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                The 12-Phase Empirical Research Pipeline
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                DigiSynq separates observed facts from stakeholder claims, research hypotheses, and inferences. This prevents the graph from degrading into an unverified collection of assumptions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {EERG_RESEARCH_PIPELINE.map((p, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-white/[0.08] bg-black/40 flex flex-col justify-between soft-card">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-white font-bold bg-white/10 px-2 py-0.5 rounded border border-white/20">
                        PHASE {p.phase}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-zinc-500" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">{p.target}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 18 Final Graph Analytical Outputs */}
          <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono text-white uppercase tracking-wider block mb-2 font-semibold">
                ANALYTICAL SYNTHESIS DELIVERABLES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                The 18 Final Graph Analytical Views
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                The completed graph model generates 18 distinct diagnostic lenses for producers, platforms, and technology investors.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {EERG_OUTPUT_VIEWS.map((view) => (
                <div key={view.id} className="p-5 rounded-2xl border border-white/[0.08] bg-black/40 flex flex-col justify-between soft-card">
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1.5">{view.name}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">{view.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          BOTTOM CTA: PARTICIPATE IN THE GRAPH
         ══════════════════════════════════════════════════════ */}
      <footer className="mt-16 p-8 sm:p-12 rounded-3xl border border-white/[0.1] bg-gradient-to-b from-[#090B14] to-[#03040A] text-center relative overflow-hidden shadow-2xl">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs font-semibold mb-6">
            <span>LIVE INTERVENTION ENGINE</span>
            <span>//</span>
            <span>VERIFIED ROOT CAUSE TRIAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Identify the Root Cause in Your Project.
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed mb-8">
            Whether navigating budget cascades, talent availability conflicts, or rights clearance roadblocks, DigiSynq maps the exact bottleneck and connects the resolution protocol.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/diagnose"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black hover:bg-zinc-200 font-bold text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(255,255,255,0.25)] active:scale-95"
            >
              <span>Diagnose a Problem</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>

            <Link
              to="/the-synq"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/15 hover:border-white/30 bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-sm transition-all backdrop-blur-xl"
            >
              <Compass className="w-4 h-4 text-white" />
              <span>Explore The SYNQ Model</span>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
