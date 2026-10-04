import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  FileText,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';
import { BRAND } from '../data/blueprint_data';
import { TopographicBackground } from '../components/TopographicBackground';

interface SectionDoc {
  id: string;
  num: number;
  title: string;
  category: string;
  content: string;
}

const BLUEPRINT_SECTIONS: SectionDoc[] = [
  {
    id: 'sec-0',
    num: 0,
    title: 'Executive Definition',
    category: 'Foundations',
    content: `DIGISYNQ is an asset-light synchronization and problem-solving infrastructure for complex entertainment ecosystems.

It identifies gaps between what a project needs and what is actually happening, maps the dependencies behind those gaps, diagnoses root causes, connects the required people, resources and capabilities, coordinates the intervention, measures the outcome, learns from the result, and progressively prevents similar failures.

DIGISYNQ does not primarily own the assets required to make entertainment. It orchestrates the assets, people, information, decisions, processes and capabilities that already exist.

"DIGISYNQ does not manage filmmaking. It manages the dependencies between the people, processes, resources and decisions that make filmmaking possible."

Cinema is the initial proving ground. The underlying mechanism is designed to become reusable across other complex collaborative ecosystems.`,
  },
  {
    id: 'sec-1',
    num: 1,
    title: 'The Core Problem',
    category: 'Foundations',
    content: `Entertainment is highly collaborative but operationally fragmented across 20 distinct stakeholder types (producers, directors, screenwriters, technicians, talent, studios, equipment rental houses, post-production houses, VFX vendors, music teams, legal, financiers, distributors, exhibitors, OTT platforms, marketing agencies, media channels, audiences).

Each participant has a different calendar, workflow, tool, incentive, budget, information set, contract, capacity, priority, and definition of success.

The result is not simply individual problems — it is coordination failure between connected systems:
Lead actor schedule changes → Shooting order changes → Location booking conflict → Crew extension → Equipment extension → Production cost increase → Post-production compression → VFX overtime → QC pressure → Delivery risk → Release-window pressure.

The industry treats each consequence separately; DIGISYNQ treats them as one connected system.`,
  },
  {
    id: 'sec-2',
    num: 2,
    title: 'The Foundational Thesis',
    category: 'Foundations',
    content: `2.1 The industry does not lack assets:
The industry frequently has underutilized people, skills, equipment, studios, post capacity, facilities, knowledge, distribution relationships, and audience communities. The problem is fragmentation.

2.2 The industry does not only lack software:
Another dashboard does not automatically solve coordination. The missing layer is the intelligence and orchestration between systems.

2.3 The real opportunity is the gap:
DIGISYNQ operates in the space between Stage A and B, Team A and B, Requirement and Capability, Plan and Reality, Demand and Capacity, Problem and Root Cause, Production and Distribution. This is THE SYNQ GAP.`,
  },
  {
    id: 'sec-3',
    num: 3,
    title: 'The DIGISYNQ Philosophy (10 Principles)',
    category: 'Foundations',
    content: `01. Synchronization over Silos (Connect the spaces between entities)
02. Outcomes over Activity (Measure what improved, not motion)
03. Collaboration over Ownership (Orchestrate existing capacity)
04. Transparency over Hype (Use operational truth)
05. Utilization over Idle Capacity (Turn unused capacity into productive value)
06. Data over Assumption (Use evidence, signals, and verified history)
07. Continuous Learning over Static Skills (Build cross-functional adaptability)
08. Value Creation over Vanity (Solve economically meaningful problems)
09. Prevention over Reaction (Do not wait for predictable failures)
10. System Thinking over Local Optimization (Optimize the whole system)`,
  },
  {
    id: 'sec-4',
    num: 4,
    title: 'What DIGISYNQ Is NOT',
    category: 'Foundations',
    content: `DIGISYNQ is NOT:
- An ERP
- A production house
- A talent directory
- A generic marketplace
- A project-management clone
- A marketing agency
- A recruitment agency
- A traditional consultancy
- A camera/equipment owner
- A soundstage owner
- A post-production conglomerate
- A generic SaaS dashboard

Core identity: Entertainment Synchronization Infrastructure.`,
  },
  {
    id: 'sec-5',
    num: 5,
    title: 'The 9-Stage Entertainment Continuum',
    category: 'Continuum & Stakeholders',
    content: `01 IDEA → 02 DEVELOPMENT → 03 PRE-PRODUCTION → 04 PRODUCTION → 05 POST-PRODUCTION → 06 MARKETING → 07 DISTRIBUTION → 08 AUDIENCE → 09 MONETIZATION → SYSTEM MEMORY ↺

The lifecycle is treated as an uninterrupted continuum where outcomes and failures feed into systemic memory for cross-project prevention.`,
  },
  {
    id: 'sec-6',
    num: 6,
    title: 'The 12 Primary Stakeholder Archetypes',
    category: 'Continuum & Stakeholders',
    content: `01. Producers (Need coordinated budgets, teams, schedules, vendor transparency, and delivery security)
02. Directors (Need creative alignment across departments and reliable technical execution)
03. Screenwriters & Creators (Need development visibility, rights protection, packaging, and market intelligence)
04. Technicians & Department Heads (Need schedule predictability, craft recognition, and capacity utilization)
05. Actors & Talent (Need reliable production windows, conflict management, and clear communication)
06. Post, VFX & Finishing Houses (Need timely inputs, locked cuts, controlled revisions, and realistic delivery windows)
07. Music & Audio Professionals (Need synchronized delivery, rights clarity, dubbing schedules, and technical specs)
08. Distributors & Exhibitors (Need predictable delivery, release coordination, promotional support, and reliable calendars)
09. OTT & Digital Platforms (Need QC-ready assets, metadata conformity, localization, and rights documentation)
10. Marketing & Media Channels (Need usable promotional assets, creator access, and synchronized timing)
11. Students & Aspirants (Need structured learning, practical set exposure, and professional entry points)
12. Audiences & Fan Communities (Need discovery, access, participation, and authentic creator relationships)`,
  },
  {
    id: 'sec-7-30',
    num: 7,
    title: 'The 23 Master DIGISYNQ Mechanisms',
    category: 'Mechanisms',
    content: `01. OBSERVE (Captures operational state; separates events from problems)
02. DETECT (GAP = EXPECTED STATE - ACTUAL STATE)
03. DECOMPOSE (Breaks problems into symptoms, events, conditions, dependencies, and root causes)
04. MAP (Constructs living system graph: nodes = entities, edges = dependencies)
05. DIAGNOSE (5 Whys drilldown to systemic cause)
06. CLASSIFY (5 dimensions: Origin, Behavior, Scope, Urgency, Impact)
07. PRIORITIZE (PRIORITY = [Impact × Urgency × Dependency × Probability] / [Effort × Cost])
08. SIMULATE (Compares Scenarios A through I before spend)
09. CONNECT (Bridges missing capability nodes into the graph)
10. MATCH (Matches based on verified capability, availability, quality, cost, and reliability)
11. COORDINATE (Synchronizes interfaces between stakeholders)
12. EXECUTE (Executable action plans with owner, deadline, and verification condition)
13. MONITOR (Continuous variance telemetry: planned vs actual)
14. VERIFY (Audits time saved, cost avoided, quality improved, and risk reduced)
15. LEARN (Deposits structured cases into institutional memory)
16. PREDICT (Identifies recurring cascade signatures weeks before crisis)
17. PREVENT (The highest maturity: Reactive → Diagnostic → Coordinated → Predictive → Preventive)
18. ESCALATION (Human-in-the-loop triggers for legal, safety, rights, and creative decisions)
19. GOVERNANCE (Permission-aware contextual visibility preserving confidentiality)
20. VERSION CONTROL (Traceability of decisions: who, what, why, impact)
21. RESILIENCE (Backup options A, B, C for critical dependencies)
22. CAPACITY ENGINE (Maps supply and demand: Demand → Capability → Capacity → Match → Value)
23. VALUE ENGINE (Commercial proof of synchronization)`,
  },
  {
    id: 'sec-31-35',
    num: 31,
    title: 'Data Model, SYNQ Graph & 4 Operating Modes',
    category: 'Architecture',
    content: `Core Data Entities: Stakeholder, Project, Stage, Problem, Event, Cause, Dependency, Resource, Capability, Capacity, Constraint, Decision, Action, Deliverable, Milestone, Risk, Intervention, Outcome, Learning.

Problem Taxonomy (6 Domains):
01. Pre-Production Chaos
02. Production Schedule Ruptures
03. Post-Production Bottlenecks
04. Marketing Disconnects
05. Talent & Crew Friction
06. Rights & Monetization Leakage

Four Operating Modes:
MODE 01 — DIAGNOSE (Client brings problem; find root cause)
MODE 02 — RESOLVE (Diagnose and coordinate intervention)
MODE 03 — MONITOR (Continuous project or slate monitoring)
MODE 04 — PREVENT (Predict likely failures before they occur)`,
  },
  {
    id: 'sec-36-41',
    num: 36,
    title: 'Business Architecture, Trust & 9 Revenue Streams',
    category: 'Economics & Model',
    content: `3-Layer Business Architecture:
- Layer 03: INTELLIGENCE (Predict, Learn, Detect, Prevent)
- Layer 02: ORCHESTRATION (Connect, Match, Coordinate, Execute)
- Layer 01: SYSTEM MAPPING (Observe, Map, Diagnose, Measure)

Asset-Light Rule: Orchestrate. Don't overbuild. The network owns physical assets; DIGISYNQ owns the orchestration layer.

Reputation Model: Professional reliability graph tracking on-time delivery, quality consistency, capacity accuracy, and revision behavior over vanity reviews.

9 Revenue Streams:
01. Problem-Solving Engagements
02. Coordination Retainers
03. Resource & Capacity Matching
04. Workshops & Capability Labs
05. Strategic Advisory
06. Enterprise Monitoring
07. Technology Platform Subscription
08. API / Infrastructure Access
09. Selective Revenue Participation`,
  },
  {
    id: 'sec-42-50',
    num: 42,
    title: 'Workshops, Cascade Engine & Human-in-the-Loop',
    category: 'Execution',
    content: `6 Learning Tracks:
1. Technical Filmmaking Fundamentals
2. Digital Content Creation
3. Marketing & Campaign Synchronization
4. Chain-of-Title & Rights Awareness
5. AI for Filmmaking
6. Creator Economy for Film Professionals

Initial Service Product:
DIGISYNQ System Resolution Engagement (10 Steps: Discover → Map → Diagnose → Prioritize → Design Intervention → Connect → Coordinate → Execute → Verify → Document Learning).

The Cascade Engine: Change → Direct Effects → Secondary Effects → Tertiary Effects → System Impact.
The Risk Engine: RISK = PROBABILITY × IMPACT × DEPENDENCY × TIME SENSITIVITY.
13 Intervention Classes: Replace, Resequence, Reallocate, Add, Remove, Delay, Accelerate, Combine, Split, Outsource, Substitute, Negotiate, Escalate.

Human-in-the-Loop Principle: Automate telemetry, mapping, matching, alerts; humans retain creative, legal, and relational judgment.`,
  },
  {
    id: 'sec-51-70',
    num: 51,
    title: 'Technology, Roadmap, KPIs & Final Definition',
    category: 'Vision & Destination',
    content: `The 13-Step Tree Pipeline: Universal diagnostic progression from "I have a problem" down to "Did it work?".
The Compounding Moat (8 Layers): System Knowledge, Dependency Graph, Outcome History, Trust Network, Capacity Network, Reputation Graph, Workflow Intelligence, Predictive Models.

Roadmap Phases:
Phase 1: Human-Led Problem Resolution
Phase 2: Tool-Assisted System Capture
Phase 3: Automate Repetition
Phase 4: Build Intelligence
Phase 5: Universal Infrastructure

North Star KPI: Verified System Value Created (Days saved, cost avoided, risks prevented, capacity utilized, dependencies stabilized).

Strategic Principle: Own the logic, not the assets.

The Final Definition:
"Complex industries do not fail only because individual participants are incapable. They fail because the relationships between capable participants are poorly synchronized. DIGISYNQ exists to operate inside those relationships."

Tagline: Sync in All Stages of Filmmaking.
Mission: Find the gap. SYNQ the system. Create value.
Philosophy: Break the silos. Connect the dots. Simplify the system.`,
  },
];

export function BlueprintPage() {
  const [search, setSearch] = useState('');
  const [selectedSec, setSelectedSec] = useState<SectionDoc>(BLUEPRINT_SECTIONS[0]);
  const [copied, setCopied] = useState(false);

  const filtered = BLUEPRINT_SECTIONS.filter(
    (s) =>
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.category.toLowerCase().includes(search.toLowerCase()) ||
      s.content.toLowerCase().includes(search.toLowerCase())
  );

  const copySection = () => {
    navigator.clipboard.writeText(selectedSec.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="bg-[#03040A] text-[#ECEEF5] selection:bg-[#23B272] selection:text-[#03040A] min-h-screen pt-36 pb-24 px-6 sm:px-8 max-w-6xl mx-auto relative overflow-hidden">
      <TopographicBackground className="opacity-15 pointer-events-none -z-10 fixed inset-0" />
      {/* ── Header ── */}
      <div className="max-w-4xl mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300 font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-[#52E3A4]" />
          <span>MASTER UNIFIED BLUEPRINT</span>
          <span className="text-zinc-600">//</span>
          <span className="text-[#52E3A4]">70 SECTIONS COMPLETE CODEX</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.03] mb-4">
          The Architecture of Synchronization.
          <span className="text-zinc-400 font-light block text-2xl sm:text-4xl mt-2">
            The Master Unified Codex.
          </span>
        </h1>

        <h2 className="text-base sm:text-xl text-zinc-300 leading-relaxed font-light max-w-3xl mb-8">
          Seventy interconnected sections defining the mathematics, mechanisms, and economics of entertainment synchronization — turning fragmented industries into living, self-healing networks.
        </h2>

        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search across all 70 sections..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/[0.08] bg-[#090B14] text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#52E3A4]"
          />
        </div>
      </div>

      {/* ── 2-Column Codex Explorer ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Section Navigation */}
        <div className="lg:col-span-5 space-y-2 max-h-[750px] overflow-y-auto pr-2 custom-scrollbar">
          {filtered.map((sec) => {
            const isSelected = selectedSec.id === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setSelectedSec(sec)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-[#16543D]/50 border-[#52E3A4] text-white shadow-md'
                    : 'bg-[#090B14] border-white/[0.06] text-zinc-400 hover:text-white hover:border-white/[0.12]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[10px] text-[#52E3A4]">{sec.category.toUpperCase()}</span>
                  <span className="text-[10px] font-mono text-zinc-500">SEC {sec.num}</span>
                </div>
                <div className="font-bold text-sm text-white">{sec.title}</div>
              </button>
            );
          })}
        </div>

        {/* Right Section Reader */}
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl border border-white/[0.1] bg-[#090B14] shadow-2xl relative">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.08]">
            <div>
              <div className="font-mono text-xs text-[#52E3A4] mb-1">
                {selectedSec.category.toUpperCase()} // SECTION {selectedSec.num}
              </div>
              <h2 className="text-2xl font-bold text-white">{selectedSec.title}</h2>
            </div>
            <button
              onClick={copySection}
              className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-all text-xs flex items-center gap-1.5"
              title="Copy Section Content"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#52E3A4]" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="font-mono text-[10px]">{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <div className="prose prose-invert max-w-none text-zinc-300 text-sm leading-relaxed whitespace-pre-line font-normal">
            {selectedSec.content}
          </div>

          <div className="mt-10 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-500">
            <span>Source: DIGISYNQ_COMPLETE_IDEA_BLUEPRINT.md</span>
            <Link to="/start" className="text-[#52E3A4] hover:underline flex items-center gap-1">
              <span>Engage DIGISYNQ</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
