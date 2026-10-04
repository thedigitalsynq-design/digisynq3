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
import { EERGConvergenceVisual } from '../components/EERGConvergenceVisual';
import { EERGNetworkGraph } from '../components/EERGNetworkGraph';
import { EERGWhyDiagnostic } from '../components/EERGWhyDiagnostic';
import { EERGCircularMap } from '../components/EERGCircularMap';
import { EERGFlywheel } from '../components/EERGFlywheel';
import { EERGCustomerRoles } from '../components/EERGCustomerRoles';
import { EERGTopRootCauses } from '../components/EERGTopRootCauses';
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
  | 'GRAPH'
  | 'CONVERGENCE'
  | 'WHY'
  | 'ROOT_CAUSES'
  | 'STAKEHOLDERS'
  | 'BOTTLENECKS'
  | 'CIRCULAR'
  | 'CASCADE'
  | 'MATRIX'
  | 'CUSTOMERS'
  | 'OPPORTUNITIES'
  | 'BUSINESS'
  | 'FLYWHEEL'
  | 'PIPELINE';

export default function RootCauseGraphPage() {
  const [activeTab, setActiveTab] = useState<EERGTab>('OVERVIEW');
  const [stakeholderSearch, setStakeholderSearch] = useState('');
  const [selectedLayer, setSelectedLayer] = useState<string>('ALL');
  const [rootCauseSearch, setRootCauseSearch] = useState('');
  const [selectedRootFamily, setSelectedRootFamily] = useState<string>('ALL');
  const [bottleneckSearch, setBottleneckSearch] = useState('');
  const [selectedBottleneckDomain, setSelectedBottleneckDomain] = useState<string>('ALL');
  const [selectedMatrixCell, setSelectedMatrixCell] = useState<{ rootCause: string; stakeholder: string; score: number } | null>({
    rootCause: 'Information Fragmentation (R001)',
    stakeholder: 'Casting Director',
    score: 3
  });
  const [matrixSearch, setMatrixSearch] = useState('');
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
    { title: 'Actor Unavailable', role: 'Talent Variance', depth: 'Level 01', stakeholders: 'Lead Actor, 1st AD, Casting Director', timeImpact: '+3 Hours', economicImpact: '$2,400 Call-Time Penalty', impact: 'Call time delayed by 3 hours due to overlapping schedule conflict on previous shoot.' },
    { title: 'Production Delay', role: 'Physical Production', depth: 'Level 02', stakeholders: 'Director, Cinematographer, Camera Crew', timeImpact: '+1 Half-Day', economicImpact: '$18,500 Standby Labor', impact: 'Daylight exterior scene missed; crew forced into standby incurring initial downtime cost.' },
    { title: 'Location Cancellation', role: 'Municipal & Logistics', depth: 'Level 03', stakeholders: 'Location Manager, Police Department, City Permits', timeImpact: '+2 Days Rescheduling', economicImpact: '$12,000 Re-Permitting Fees', impact: 'Police and municipal filming permit expires; location manager must renegotiate or reschedule.' },
    { title: 'Crew Rescheduling', role: 'Union & Safety', depth: 'Level 04', stakeholders: 'Grip & Electric, Sound Department, Teamsters', timeImpact: '+12 Hours Turnaround Breach', economicImpact: '$28,000 Overtime Multipliers', impact: 'Mandatory 12-hour turnaround rule pushed back, moving tomorrow call time and disrupting workflow.' },
    { title: 'Equipment Rescheduling', role: 'Vendors & Capital', depth: 'Level 05', stakeholders: 'ARRI Camera Rental, Panavision, Crane Operators', timeImpact: '+4 Days Holdover', economicImpact: '$34,000 Standby Equipment Fines', impact: 'Rental camera packages and specialized crane gear exceed booked rental period.' },
    { title: 'Budget Increase', role: 'Production Finance', depth: 'Level 06', stakeholders: 'Line Producer, Completion Bonder, Production Accountant', timeImpact: '+18% Contingency Burn', economicImpact: '$140,000 Contingency Depletion', impact: 'Contingency buffer burned by 18%; completion bonder requests immediate risk audit.' },
    { title: 'Post-Production Delay', role: 'Editorial & VFX', depth: 'Level 07', stakeholders: 'Lead Editor, Post Supervisor, Sound Conform', timeImpact: '+5 Days Late Dailies', economicImpact: '$45,000 Editorial Overrun', impact: 'Raw footage arrives 5 days late; offline editor and visual effects team window compressed.' },
    { title: 'Marketing Compression', role: 'Creative Tech & PR', depth: 'Level 08', stakeholders: 'VFX Facility, 3D Artists, Trailer House', timeImpact: '-40% VFX Delivery Window', economicImpact: '$180,000 Unpaid Artist Overtime', impact: '500 complex CGI shots rushed into 24/7 overtime; vendor margins wiped out.' },
    { title: 'Release Change', role: 'Commercial Launch', depth: 'Level 09', stakeholders: 'Trailer Finishing, PR Firm, Key Art Agency', timeImpact: '-10 Days Promo Lead Time', economicImpact: '$220,000 Media Buy Re-Booking', impact: 'Promotional media buys shifted without confirmed key art and teaser conform.' },
    { title: 'Distribution Impact', role: 'Distribution QC', depth: 'Level 10', stakeholders: 'Platform QC Lead, Theatrical Booker, Subtitling Vendor', timeImpact: '+7 Days Redelivery Cycle', economicImpact: '$350,000 Platform QC Penalty Risk', impact: 'QC flags non-compliant sound bed and color space due to rushed finish; delivery rejected.' },
    { title: 'Revenue Risk', role: 'Ecosystem Return', depth: 'Level 11', stakeholders: 'Distributor, Theatrical Exhibitors, Sales Agents', timeImpact: '-22% Opening Box-Office', economicImpact: '$2,500,000 Revenue Write-Down', impact: 'Opening weekend box-office / streaming acquisition drop; distributor imposes liquidated damages.' },
    { title: 'Investor Confidence Impact', role: 'Capital Architecture', depth: 'Level 12', stakeholders: 'Private Equity Fund, Completion Bonder, Slate Backers', timeImpact: 'Future Slate Freeze', economicImpact: '$15,000,000 Withdrawn Slate Equity', impact: 'Equity partners pull back future slates, restricting development funding for new creative IP.' }
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
      <header className="text-center max-w-5xl mx-auto mb-14">
        {/* Visual Marker: DIGISYNQ // EERG */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest text-zinc-400">DIGISYNQ</span>
          <span className="text-zinc-600 font-mono">//</span>
          <span className="text-xs font-mono font-bold tracking-widest text-white">EERG</span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white border border-white/20 ml-2">
            ROOT-CAUSE INTELLIGENCE
          </span>
        </div>

        {/* Product Hierarchy Breadcrumb */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-[11px] font-mono text-zinc-400 mb-6 tracking-wide backdrop-blur-xl">
          <span>DIGISYNQ</span>
          <span className="text-zinc-600">→</span>
          <span>Entertainment Ecosystem Intelligence</span>
          <span className="text-zinc-600">→</span>
          <span className="text-white font-bold">EERG</span>
          <span className="text-zinc-600">→</span>
          <span className="text-zinc-300">Root-Cause Graph</span>
        </div>

        {/* Hero Title & Supporting Line */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.08] mb-4">
          ENTERTAINMENT ECOSYSTEM<br />
          ROOT-CAUSE GRAPH
        </h1>

        <div className="text-lg sm:text-2xl font-light text-zinc-200 mb-4 tracking-tight">
          From fragmented problems to systemic opportunities.
        </div>

        <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed mb-8 max-w-3xl mx-auto font-light">
          EERG maps the interconnected problems, bottlenecks, dependencies and root causes that shape the entertainment ecosystem — revealing where intervention can create the greatest leverage.
        </p>

        {/* Primary & Secondary CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab('GRAPH')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black hover:bg-zinc-200 font-bold text-xs tracking-wider transition-all shadow-[0_0_25px_rgba(255,255,255,0.25)] active:scale-95"
          >
            <span>EXPLORE THE GRAPH</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
          <button
            onClick={() => setActiveTab('WHY')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold text-xs tracking-wider transition-all"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>UNDERSTAND EERG</span>
          </button>
        </div>

        {/* Section 1 & 25: Product Relationship & Conceptual Distinction Banner */}
        <div className="p-6 sm:p-8 rounded-3xl border border-white/[0.1] bg-[#090B14]/90 backdrop-blur-xl mb-10 text-left shadow-2xl">
          <div className="text-center mb-6">
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block font-semibold mb-1">
              THE CORE DISTINCTION
            </span>
            <div className="text-base sm:text-xl font-bold text-white">
              DIGISYNQ connects the ecosystem. EERG understands why the ecosystem gets stuck.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-black/60 border border-white/[0.08]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-white">DIGISYNQ CONNECTS:</span>
                <span className="text-[10px] font-mono text-zinc-500">Execution Layer</span>
              </div>
              <div className="flex flex-wrap gap-1.5 text-xs text-zinc-300">
                {['People', 'Resources', 'Capabilities', 'Technology', 'Markets', 'Projects', 'Data', 'Opportunities'].map((t, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">{t}</span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-white">EERG UNDERSTANDS:</span>
                <span className="text-[10px] font-mono text-white font-bold bg-white/10 px-1.5 rounded">Intelligence Layer</span>
              </div>
              <div className="flex flex-wrap gap-1.5 text-xs text-zinc-200 font-medium">
                {['Problems', 'Bottlenecks', 'Causes', 'Root Causes', 'Dependencies', 'Failure Propagation', 'Economic Impact', 'Existing Solutions', 'Solution Gaps', 'Opportunities', 'Paying Customers'].map((t, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-white/10 border border-white/20">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Section 25 Conceptual Flow */}
          <div className="p-4 rounded-xl bg-black/80 border border-white/[0.06] text-center font-mono text-[11px] text-zinc-300 overflow-x-auto">
            <div className="min-w-[700px] flex items-center justify-center gap-2">
              <span className="px-3 py-1 rounded bg-white/10 text-white font-bold border border-white/20">DIGISYNQ: CONNECT</span>
              <span className="text-zinc-600">→</span>
              <span className="px-3 py-1 rounded bg-white/15 text-white font-bold border border-white/30">EERG: UNDERSTAND &amp; DISCOVER</span>
              <span className="text-zinc-600">→</span>
              <span className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/10">FIND LEVERAGE</span>
              <span className="text-zinc-600">→</span>
              <span className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/10">OPPORTUNITY</span>
              <span className="text-zinc-600">→</span>
              <span className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/10">INTERVENTION</span>
              <span className="text-zinc-600">→</span>
              <span className="px-3 py-1 rounded bg-white text-black font-bold">SYSTEM IMPROVEMENT</span>
            </div>
          </div>
        </div>

        {/* Section 9: EERG Dashboard & Research Scale Metrics */}
        <div className="mb-10 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-semibold">
                EERG / ECOSYSTEM INTELLIGENCE
              </div>
              <div className="text-base font-bold text-white">
                Research-Scale Architectural Target Metrics
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono">
              <span className="px-2 py-0.5 rounded bg-white/10 text-zinc-300 border border-white/20">DEMO DATA</span>
              <span className="px-2 py-0.5 rounded bg-white/20 text-white font-semibold border border-white/30">RESEARCH TARGETS</span>
              <span className="px-2 py-0.5 rounded bg-white text-black font-bold">VALIDATED DATA</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="p-4 rounded-2xl border border-white/[0.08] bg-[#090B14] flex flex-col justify-between">
              <span className="text-[10px] font-mono text-zinc-400">STAKEHOLDER TYPES</span>
              <div className="text-2xl sm:text-3xl font-black text-white mt-1">150+</div>
              <span className="text-[9px] text-zinc-500 mt-1 font-mono">20 Categories</span>
            </div>
            <div className="p-4 rounded-2xl border border-white/[0.08] bg-[#090B14] flex flex-col justify-between">
              <span className="text-[10px] font-mono text-zinc-400">MAPPED PROBLEMS</span>
              <div className="text-2xl sm:text-3xl font-black text-white mt-1">500+</div>
              <span className="text-[9px] text-zinc-500 mt-1 font-mono">Operational Failures</span>
            </div>
            <div className="p-4 rounded-2xl border border-white/[0.08] bg-[#090B14] flex flex-col justify-between">
              <span className="text-[10px] font-mono text-zinc-400">BOTTLENECK CHOKES</span>
              <div className="text-2xl sm:text-3xl font-black text-white mt-1">200+</div>
              <span className="text-[9px] text-zinc-500 mt-1 font-mono">Choke Points</span>
            </div>
            <div className="p-4 rounded-2xl border border-white/[0.08] bg-[#090B14] flex flex-col justify-between">
              <span className="text-[10px] font-mono text-zinc-400">SYSTEMIC ROOT CAUSES</span>
              <div className="text-2xl sm:text-3xl font-black text-white mt-1">100+</div>
              <span className="text-[9px] text-zinc-500 mt-1 font-mono">Centrality Indexed</span>
            </div>
            <div className="p-4 rounded-2xl border border-white/[0.08] bg-[#090B14] flex flex-col justify-between">
              <span className="text-[10px] font-mono text-zinc-400">DEPENDENCIES</span>
              <div className="text-2xl sm:text-3xl font-black text-white mt-1">1,500+</div>
              <span className="text-[9px] text-zinc-500 mt-1 font-mono">Relational Edges</span>
            </div>
            <div className="p-4 rounded-2xl border border-white/[0.08] bg-[#090B14] flex flex-col justify-between">
              <span className="text-[10px] font-mono text-zinc-400">EXISTING SOLUTIONS</span>
              <div className="text-2xl sm:text-3xl font-black text-white mt-1">200+</div>
              <span className="text-[9px] text-zinc-500 mt-1 font-mono">Gaps Identified</span>
            </div>
          </div>

          <div className="mt-3 p-3 rounded-xl bg-black/40 border border-white/[0.06] text-[11px] font-mono text-zinc-400 flex items-center justify-between">
            <span>* Research/build targets — not validated final counts. Not presented as actual market statistics.</span>
            <span className="text-white font-semibold">Active Build Pipeline</span>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════
          02 — INTERACTIVE NAVIGATION TABS
         ══════════════════════════════════════════════════════ */}
      <div className="mb-10 sticky top-20 z-40 bg-[#03040A]/95 backdrop-blur-xl p-2 rounded-2xl border border-white/[0.1] shadow-2xl overflow-x-auto">
        <div className="flex items-center gap-1.5 min-w-max">
          {[
            { id: 'OVERVIEW', label: 'Architecture & Inquiry', icon: Layers },
            { id: 'GRAPH', label: '11-Tier Network Graph', icon: Network },
            { id: 'CONVERGENCE', label: 'Signature Convergence', icon: GitBranch },
            { id: 'WHY', label: 'The "Why?" Diagnostic', icon: HelpCircle },
            { id: 'ROOT_CAUSES', label: 'Root Causes (75)', icon: GitBranch },
            { id: 'STAKEHOLDERS', label: 'Stakeholders (160+)', icon: Users },
            { id: 'BOTTLENECKS', label: 'Bottlenecks (50)', icon: AlertTriangle },
            { id: 'CIRCULAR', label: 'Circular Macro Map', icon: RefreshCw },
            { id: 'CASCADE', label: 'Failure Cascade', icon: Activity },
            { id: 'MATRIX', label: 'Exposure Matrix', icon: Grid },
            { id: 'CUSTOMERS', label: 'Paying Customer Logic', icon: DollarSign },
            { id: 'OPPORTUNITIES', label: 'Opportunity Engine', icon: Sparkles },
            { id: 'BUSINESS', label: 'Commercial Business Engine', icon: DollarSign },
            { id: 'FLYWHEEL', label: 'EERG ⇄ DIGISYNQ Flywheel', icon: RefreshCw },
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

          {/* Section 5: The 9 Foundational Questions EERG Answers */}
          <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono text-white uppercase tracking-wider block mb-2 font-semibold">
                SYSTEMIC INQUIRY PROTOCOL // SECTION 5
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                The 9 Questions EERG Answers
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                EERG is not a database, CRM, directory, or generic analytics dashboard. It is an evolving systemic intelligence model answering the 9 critical structural questions of entertainment failure.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { q: 'WHO?', label: 'Who is affected?', detail: '160+ specific stakeholder roles across creation, production, distribution, and consumption.' },
                { q: 'WHAT?', label: 'What is the problem?', detail: '500+ classified operational failure symptoms and friction points across the production lifecycle.' },
                { q: 'WHERE?', label: 'Where does the flow get blocked?', detail: '50 discrete bottleneck choke points across 10 functional entertainment domains.' },
                { q: 'WHY?', label: 'Why does the bottleneck exist?', detail: '75 systemic root causes driving repeated failure rather than isolated bad luck.' },
                { q: 'WHAT NEXT?', label: 'What does the failure affect?', detail: 'Blast-radius propagation tracing across all downstream departments and timelines.' },
                { q: 'HOW MUCH?', label: 'What value, time or money is lost?', detail: 'Quantified schedule drag days, standby fine multipliers, and uncollected royalties.' },
                { q: 'WHAT EXISTS?', label: 'What solutions already exist?', detail: '200+ current workarounds (WhatsApp threads, manual PDF cue sheets, broker markups).' },
                { q: 'WHAT IS MISSING?', label: 'Where is the solution gap?', detail: 'The structural lack of trusted APIs, shared ledgers, and live availability clearinghouses.' },
                { q: 'WHO PAYS?', label: 'Who has the incentive to solve it?', detail: 'The budget owner and economic beneficiary who absorb the catastrophic downside risk.' }
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-white/[0.08] bg-black/40 flex flex-col justify-between soft-card">
                  <div>
                    <div className="w-8 h-8 rounded-xl bg-white/10 text-white font-mono text-xs font-black flex items-center justify-center border border-white/20 mb-3">
                      {item.q}
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5">{item.label}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Connect EERG to DIGISYNQ Philosophy */}
          <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono text-white uppercase tracking-wider block mb-2 font-semibold">
                SYSTEM CONTINUITY // SECTION 6
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Connecting EERG to the DIGISYNQ Philosophy
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                DIGISYNQ operates through 6 core phases. EERG sits underneath this as the empirical intelligence foundation informing every phase:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { stage: 'DISCOVER', digisynq: 'Identify creative partners and assets', eerg: 'Stakeholders + problems mapped', badge: 'Input' },
                { stage: 'AGGREGATE', digisynq: 'Pool fragmented capability telemetry', eerg: 'Evidence + data + relationships verified', badge: 'Synthesis' },
                { stage: 'CONNECT', digisynq: 'Asset-light multi-party coordination', eerg: 'Dependencies + causes + stakeholders aligned', badge: 'Network' },
                { stage: 'ORCHESTRATE', digisynq: 'Time-bounded intervention sprints', eerg: 'Identify bottlenecks + target interventions', badge: 'Action' },
                { stage: 'MEASURE', digisynq: 'Deterministic outcome verification', eerg: 'Impact + centrality + economic exposure scored', badge: 'Audit' },
                { stage: 'MONETIZE', digisynq: 'Scaleable commercial value capture', eerg: 'High-leverage opportunities + paying customers', badge: 'Value' }
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-white/[0.08] bg-black/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-white tracking-widest">{item.stage}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-zinc-400 border border-white/10">{item.badge}</span>
                    </div>
                    <div className="text-xs text-zinc-400 mb-2 font-mono">
                      DIGISYNQ: <strong className="text-zinc-200">{item.digisynq}</strong>
                    </div>
                    <div className="text-xs text-white font-mono bg-white/[0.04] p-2 rounded-lg border border-white/[0.06]">
                      EERG LAYER: {item.eerg}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 22: The Evidence Layer & Visible Badges */}
          <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono text-white uppercase tracking-wider block mb-2 font-semibold">
                EMPIRICAL RIGOR // SECTION 22 & 23
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                The Multi-Tiered Evidence Layer
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                Every relationship in EERG is backed by verified evidence types. DigiSynq strictly separates empirical facts from stakeholder claims, research hypotheses, and inferences:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
              {[
                { badge: 'FACT', desc: 'Observed contract audit or telemetry data', style: 'bg-white text-black font-bold' },
                { badge: 'CLAIM', desc: 'Direct qualitative stakeholder interview', style: 'bg-white/10 text-white border border-white/20' },
                { badge: 'HYPOTHESIS', desc: 'Structural research proposition under test', style: 'bg-white/[0.06] text-zinc-300 border border-white/10' },
                { badge: 'INFERENCE', desc: 'Algorithmic causal graph projection', style: 'bg-white/[0.04] text-zinc-400 border border-white/[0.06]' },
                { badge: 'VALIDATED', desc: 'Confirmed across 3+ independent productions', style: 'bg-white/20 text-white font-bold border border-white/30' },
                { badge: 'CONTRADICTED', desc: 'Refuted by empirical industry field notes', style: 'bg-red-500/10 text-red-300 border border-red-500/20' }
              ].map((ev, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-black/50 border border-white/[0.08] flex flex-col justify-between">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded text-center mb-2 ${ev.style}`}>
                    {ev.badge}
                  </span>
                  <p className="text-[11px] text-zinc-400 leading-tight">
                    {ev.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-white/[0.06] text-xs font-mono text-zinc-400 flex flex-wrap items-center justify-between gap-3">
              <span>SUPPORTED METADATA: Source · Interview Date · Geography · Market Segment · Production Scale · Confidence Index</span>
              <span className="text-white font-semibold">Strict Anti-Hallucination Protocol</span>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          TAB: INTERACTIVE 11-TIER NETWORK GRAPH (SECTION 7)
         ══════════════════════════════════════════════════════ */}
      {activeTab === 'GRAPH' && (
        <section className="space-y-8 animate-in fade-in duration-300">
          <EERGNetworkGraph />
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          TAB: SIGNATURE CONVERGENCE (SECTION 8)
         ══════════════════════════════════════════════════════ */}
      {activeTab === 'CONVERGENCE' && (
        <section className="space-y-8 animate-in fade-in duration-300">
          <EERGConvergenceVisual />
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          TAB: THE "WHY?" DIAGNOSTIC (SECTION 12)
         ══════════════════════════════════════════════════════ */}
      {activeTab === 'WHY' && (
        <section className="space-y-8 animate-in fade-in duration-300">
          <EERGWhyDiagnostic />
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          TAB: CIRCULAR MACRO ECOSYSTEM MAP (SECTION 14)
         ══════════════════════════════════════════════════════ */}
      {activeTab === 'CIRCULAR' && (
        <section className="space-y-8 animate-in fade-in duration-300">
          <EERGCircularMap />
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          TAB: THE 5-PART PAYING CUSTOMER MODEL (SECTION 20)
         ══════════════════════════════════════════════════════ */}
      {activeTab === 'CUSTOMERS' && (
        <section className="space-y-8 animate-in fade-in duration-300">
          <EERGCustomerRoles />
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          TAB: EERG ⇄ DIGISYNQ CONTINUOUS FLYWHEEL (SECTION 35)
         ══════════════════════════════════════════════════════ */}
      {activeTab === 'FLYWHEEL' && (
        <section className="space-y-8 animate-in fade-in duration-300">
          <EERGFlywheel />
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          TAB 2: 160+ STAKEHOLDER DIRECTORY ACROSS 20 CATEGORIES
         ══════════════════════════════════════════════════════ */}
      {activeTab === 'STAKEHOLDERS' && (
        <section className="space-y-8 animate-in fade-in duration-300">
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
        <section className="space-y-8 animate-in fade-in duration-300">
          {/* Section 10 & 11: Top 10 Root Causes Ranking & Detailed Telemetry Panel */}
          <EERGTopRootCauses />

          {/* Section 10: Full 75 Root Causes Directory */}
          <div className="pt-6 border-t border-white/[0.08]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block font-semibold">
                  COMPLETE TAXONOMY // R001 TO R075
                </span>
                <h3 className="text-xl font-bold text-white">
                  The Full 75 Root-Cause System Registry
                </h3>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                Filter by systemic family or search by code
              </span>
            </div>
          </div>

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
          TAB 6: FAILURE PROPAGATION & CASCADE MODEL (SECTION 13)
         ══════════════════════════════════════════════════════ */}
      {activeTab === 'CASCADE' && (
        <section className="space-y-8 animate-in fade-in duration-300">
          <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-white font-mono text-xs font-semibold mb-3">
                <Activity className="w-3.5 h-3.5" />
                <span>TRACE FAILURE</span>
                <span className="text-zinc-600">//</span>
                <span>SECTION 13 SPECIFICATION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                The 12-Stage Failure Propagation Cascade
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                Follow the failure chain step by step. A localized 3-hour actor call time delay propagates across departments into an equity write-down.
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

            {/* Active Stage Detail with Section 13 Metrics */}
            <div className="p-6 sm:p-8 rounded-3xl border border-white/20 bg-white/[0.04] mb-8 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-bold text-base font-mono">
                    {cascadeStep + 1}
                  </span>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                      PROPAGATION DEPTH: {cascadeStages[cascadeStep].depth}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      {cascadeStages[cascadeStep].title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white border border-white/20">
                    {cascadeStages[cascadeStep].role}
                  </span>
                </div>
              </div>

              <p className="text-sm text-zinc-200 leading-relaxed mb-6 font-light">
                {cascadeStages[cascadeStep].impact}
              </p>

              {/* 3 Telemetry Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/[0.06]">
                <div className="p-3.5 rounded-xl bg-black/60 border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                    STAKEHOLDERS AFFECTED:
                  </span>
                  <div className="text-xs font-semibold text-white">
                    {cascadeStages[cascadeStep].stakeholders}
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-black/60 border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                    TIME IMPACT:
                  </span>
                  <div className="text-xs font-bold text-white">
                    {cascadeStages[cascadeStep].timeImpact}
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-black/60 border border-red-500/20">
                  <span className="text-[10px] font-mono text-red-400 uppercase tracking-wider block mb-1 font-semibold">
                    ECONOMIC DAMAGE:
                  </span>
                  <div className="text-xs font-bold text-red-300">
                    {cascadeStages[cascadeStep].economicImpact}
                  </div>
                </div>
              </div>
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
                    <span className="text-[10px] font-mono text-zinc-500">{stage.depth}</span>
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
          TAB 7: ROOT CAUSE X STAKEHOLDER EXPOSURE MATRIX (SECTION 18)
         ══════════════════════════════════════════════════════ */}
      {activeTab === 'MATRIX' && (
        <section className="space-y-8 animate-in fade-in duration-300">
          <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-white font-mono text-xs font-semibold mb-3">
                  <Grid className="w-3.5 h-3.5" />
                  <span>CROSS-DOMAIN HEATMAP MATRIX</span>
                  <span className="text-zinc-600">//</span>
                  <span>SECTION 18 SPECIFICATION</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  Root Cause × Stakeholder Exposure Matrix
                </h2>
                <p className="text-sm text-zinc-300 leading-relaxed font-light max-w-2xl">
                  Quantitative scoring of systemic root causes across key industry archetypes. Click any cell to inspect the structural evidence and relationship rationale behind the vulnerability score.
                </p>
              </div>

              {/* Research Model Disclaimer Badge */}
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/20 text-right">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block font-semibold">
                  STATUS CLASSIFICATION:
                </span>
                <span className="text-xs font-mono text-white font-bold">
                  Research model / requires validation
                </span>
              </div>
            </div>

            {/* Matrix Search & Filter Bar */}
            <div className="p-4 rounded-2xl bg-black/60 border border-white/[0.08] mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter matrix by root cause name or code..."
                  value={matrixSearch}
                  onChange={(e) => setMatrixSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-black/80 border border-white/[0.08] text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30"
                />
              </div>
              <span className="text-xs font-mono text-zinc-400">
                Showing {EERG_MATRIX.filter(r => !matrixSearch || r.rootCause.toLowerCase().includes(matrixSearch.toLowerCase()) || r.code.toLowerCase().includes(matrixSearch.toLowerCase())).length} of {EERG_MATRIX.length} Matrix Rows
              </span>
            </div>

            {/* Matrix Table */}
            <div className="overflow-x-auto rounded-2xl border border-white/[0.1] bg-black/60 mb-6">
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
                  {EERG_MATRIX
                    .filter(r => !matrixSearch || r.rootCause.toLowerCase().includes(matrixSearch.toLowerCase()) || r.code.toLowerCase().includes(matrixSearch.toLowerCase()))
                    .map((row, idx) => {
                      const renderCell = (val: number, stakeholderName: string) => {
                        let bg = 'bg-white/[0.02] text-zinc-500 hover:border-white/20';
                        if (val === 1) bg = 'bg-white/[0.06] text-zinc-300 border border-white/10 hover:border-white/40';
                        if (val === 2) bg = 'bg-white/15 text-white border border-white/20 font-bold hover:bg-white/25';
                        if (val === 3) bg = 'bg-white text-black font-extrabold shadow-sm hover:bg-zinc-200';

                        const isSelected =
                          selectedMatrixCell?.rootCause === `${row.rootCause} (${row.code})` &&
                          selectedMatrixCell?.stakeholder === stakeholderName;

                        return (
                          <td key={stakeholderName} className="p-2.5 text-center">
                            <button
                              onClick={() => setSelectedMatrixCell({
                                rootCause: `${row.rootCause} (${row.code})`,
                                stakeholder: stakeholderName,
                                score: val
                              })}
                              className={`w-7 h-7 rounded-lg text-xs leading-7 cursor-pointer transition-all ${bg} ${isSelected ? 'ring-2 ring-white scale-110' : ''}`}
                              title={`Click to drill down: ${row.rootCause} × ${stakeholderName}`}
                            >
                              {val}
                            </button>
                          </td>
                        );
                      };

                      return (
                        <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                          <td className="p-3.5 pl-5 font-sans font-medium text-white">{row.rootCause}</td>
                          <td className="p-3.5 text-center text-zinc-400">{row.code}</td>
                          {renderCell(row.exposures.actor, 'Actor')}
                          {renderCell(row.exposures.producer, 'Producer')}
                          {renderCell(row.exposures.casting, 'Casting Director')}
                          {renderCell(row.exposures.vfx, 'VFX Facility')}
                          {renderCell(row.exposures.music, 'Music / Composer')}
                          {renderCell(row.exposures.ott, 'OTT Platform')}
                          {renderCell(row.exposures.audience, 'Audience')}
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>

            {/* Matrix Legend */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/[0.06] text-xs font-mono text-zinc-400 mb-6">
              <span className="font-semibold text-white">EXPOSURE LEGEND:</span>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-white/[0.02] text-zinc-500 border border-white/[0.06] inline-flex items-center justify-center font-bold text-[10px]">0</span>
                <span>0 = No meaningful exposure</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-white/[0.06] text-zinc-300 border border-white/10 inline-flex items-center justify-center font-bold text-[10px]">1</span>
                <span>1 = Low</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-white/15 text-white border border-white/20 inline-flex items-center justify-center font-bold text-[10px]">2</span>
                <span>2 = Medium</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-white text-black inline-flex items-center justify-center font-extrabold text-[10px]">3</span>
                <span>3 = High systemic exposure</span>
              </div>
            </div>

            {/* Selected Cell Drill-Down Panel */}
            {selectedMatrixCell && (
              <div className="p-6 rounded-2xl bg-black/70 border border-white/20 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-white/[0.08]">
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block font-semibold">
                      CELL DRILL-DOWN // EVIDENCE &amp; RELATIONSHIP ANALYSIS
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {selectedMatrixCell.rootCause} ⇄ {selectedMatrixCell.stakeholder}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white text-black font-bold">
                      EXPOSURE SCORE: {selectedMatrixCell.score} / 3
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white border border-white/20">
                      Research Model
                    </span>
                  </div>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed font-light mb-4">
                  {selectedMatrixCell.score === 3 && `High systemic exposure: The ${selectedMatrixCell.stakeholder} is in the direct blast radius of ${selectedMatrixCell.rootCause}, absorbing significant schedule distortion, unbilled labor overtime, or catastrophic downside financial liability.`}
                  {selectedMatrixCell.score === 2 && `Medium exposure: The ${selectedMatrixCell.stakeholder} regularly incurs operational friction and delayed milestones due to ${selectedMatrixCell.rootCause}, though partial contractual workarounds currently exist.`}
                  {selectedMatrixCell.score === 1 && `Low exposure: The ${selectedMatrixCell.stakeholder} is buffered from direct impacts of ${selectedMatrixCell.rootCause}, though secondary downstream feedback loops can occasionally cause friction.`}
                  {selectedMatrixCell.score === 0 && `No meaningful direct exposure documented in the current empirical research model.`}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-zinc-500 pt-3 border-t border-white/[0.06]">
                  <span>* Research model score requires validation across diverse budget tiers.</span>
                  <span className="text-zinc-300">Evidence status: Hypothesis under active field test</span>
                </div>
              </div>
            )}
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
