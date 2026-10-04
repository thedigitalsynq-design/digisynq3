import React, { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Search,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  FileText,
  Copy,
  Check,
  ExternalLink,
  Layers,
  Sparkles,
  Shield,
  Activity,
  Cpu,
  Share2,
  Tag
} from 'lucide-react';
import { TopographicBackground } from '../components/TopographicBackground';

export interface CodexSection {
  id: string;
  category:
    | 'Category'
    | 'Philosophy'
    | 'Continuum'
    | 'Stakeholders'
    | 'Mechanisms'
    | 'Problem Taxonomy'
    | 'Diagnostics'
    | 'Engines'
    | 'Resolution'
    | 'Network'
    | 'Economics'
    | 'Revenue'
    | 'Moat'
    | 'Roadmap';
  num: number;
  title: string;
  subtitle: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
  relatedRoutes: { label: string; path: string }[];
  relatedSections: string[];
}

export const CODEX_SECTIONS: CodexSection[] = [
  {
    id: 'category-definition',
    category: 'Category',
    num: 1,
    title: 'Category: Entertainment Synchronization Infrastructure',
    subtitle: 'The Definition, Boundary, and Category Creation of DigiSynq',
    summary: 'DigiSynq is not a production house, consultancy, or marketplace. It is the operating infrastructure that synchronizes dependencies across entertainment systems.',
    content: [
      'DIGISYNQ is an asset-light synchronization and problem-solving infrastructure for complex entertainment ecosystems.',
      'It identifies gaps between what a project needs and what is actually happening, maps the dependencies behind those gaps, diagnoses root causes, connects the required people, resources and capabilities, coordinates the intervention, measures the outcome, learns from the result, and progressively prevents similar failures.',
      'DigiSynq does not primarily own physical assets (soundstages, camera packages, post suites). It owns the logic, the dependency graph, the telemetry, and the orchestration protocols that connect fragmented assets into resilient workflows.',
      'What DigiSynq is NOT:',
      '• NOT an ERP: It does not impose heavy enterprise data entry upon creative teams.',
      '• NOT a generic consultancy: It does not deliver slide decks; it coordinates structured operational interventions.',
      '• NOT a talent directory or marketplace: It does not broker bodies for a 20% commission fee; it matches verified capabilities to exact dependency slots.',
      '• NOT a project management clone: It models system-wide causality and downstream blast radiuses, not just linear task checklists.',
      '• NOT an equipment owner: It orchestrates latent, idle capacity already sitting dark across regional facilities.'
    ],
    keyTakeaways: [
      'Category: Entertainment Synchronization Infrastructure',
      'Asset-light model: Own the synchronization logic, not the heavy physical assets',
      'Operates between fragmented silos to eliminate cascading delivery failures'
    ],
    relatedRoutes: [
      { label: 'The Synq', path: '/the-synq' },
      { label: 'How It Works', path: '/how-it-works' }
    ],
    relatedSections: ['philosophy-principles', 'network-topology']
  },
  {
    id: 'philosophy-principles',
    category: 'Philosophy',
    num: 2,
    title: 'The 10 Founding Principles',
    subtitle: 'Operational Axioms Governing All DigiSynq Interventions',
    summary: 'A disciplined philosophy built on root causes, system thinking, transparency, and continuous institutional memory.',
    content: [
      'The entire architecture of DigiSynq is governed by ten non-negotiable operational principles:',
      '01. Synchronization over Silos — The friction in entertainment occurs in the blind spots between isolated departments, not within the craft silos themselves.',
      '02. Root Cause over Symptom — Never medicate the symptom (e.g. throwing overtime labor at a missed camera day) when the root cause was an unapproved script change 3 weeks prior.',
      '03. Outcomes over Activity — Measure what was stabilized, days reclaimed, and costs averted, never the volume of meetings or hours logged.',
      '04. Collaboration over Ownership — Orchestrating existing underutilized assets creates greater enterprise agility than owning depreciating physical plant.',
      '05. Transparency over Hype — Use unvarnished telemetry, verified track records, and clean status indicators over promotional theater.',
      '06. Utilization over Idle Capacity — Millions in soundstage floors, LED volumes, and edit suites sit dark every week; liquidity unlocks immense value.',
      '07. Data over Assumption — Every diagnostic decision is anchored in dependency graphs, historic telemetry, and verified capacity signals.',
      '08. Prevention over Reaction — A mature system detects failure signatures during pre-production rather than managing crises during release week.',
      '09. System Thinking over Local Optimization — Optimizing one department (e.g. cutting 2 days of prep to save $40K) frequently inflicts a $300K post-production explosion.',
      '10. Learning over Repetition — Every solved case deposits its causal signature and resolution covenant into the compounding System Memory.'
    ],
    keyTakeaways: [
      'Focus on the spaces between entities (The Synq Gap)',
      'Never treat a symptom without mapping its root cause',
      'Every case becomes permanent institutional memory to prevent recurrence'
    ],
    relatedRoutes: [
      { label: 'How It Works', path: '/how-it-works' },
      { label: 'Runbook SOP', path: '/runbook' }
    ],
    relatedSections: ['category-definition', 'mechanisms-mastery']
  },
  {
    id: 'continuum-lifecycle',
    category: 'Continuum',
    num: 3,
    title: 'The 9-Stage Entertainment Continuum',
    subtitle: 'The Complete Lifecycle from Ideation to Monetization & Memory',
    summary: 'Entertainment is not a linear waterfall but an unbroken 9-stage continuum where feedback loops inform subsequent projects.',
    content: [
      'DigiSynq models entertainment across nine continuous stages:',
      'Stage 01: IDEA — IP inception, narrative premise, rights clearance boundary, and feasibility boundaries.',
      'Stage 02: DEVELOPMENT — Script breakdown, packaging, financial packaging, and initial dependency modeling.',
      'Stage 03: PRE-PRODUCTION — Location locking, soundstage scheduling, crew rosters, tech scouting, and camera/lighting prep.',
      'Stage 04: PRODUCTION — Principal photography, dailies telemetry, unit logistics, and schedule variance governance.',
      'Stage 05: POST-PRODUCTION — Editorial turnover, VFX turnover, color grading, ADR, Foley, sound mixing, and final conform.',
      'Stage 06: MARKETING — Key art, theatrical trailer cuts, digital assets, press circuits, and audience demand generation.',
      'Stage 07: DISTRIBUTION — Theatrical circuit DCP dispatch, OTT platform ingestion, international syndication, and localization.',
      'Stage 08: AUDIENCE — Box office velocity, streaming completion rates, sentiment analysis, and community engagement.',
      'Stage 09: MONETIZATION — Ancillary rights, digital rental, terrestrial syndication, merchandising, and capital recoupment.',
      'Stage 10 (Implicit): SYSTEM MEMORY — Ingests variance reports and resolution efficacy back into the platform for perpetual machine learning.'
    ],
    keyTakeaways: [
      'Unbroken continuum: Failures in Stage 02 compound exponentially by Stage 05',
      'System Memory closes the loop, turning post-mortems into active predictive guards'
    ],
    relatedRoutes: [
      { label: '9-Stage Continuum', path: '/continuum' },
      { label: 'Cascade Simulator', path: '/engines/cascade' }
    ],
    relatedSections: ['mechanisms-mastery', 'engines-simulation']
  },
  {
    id: 'stakeholders-network',
    category: 'Stakeholders',
    num: 4,
    title: 'Stakeholder Archetypes & Network Topology',
    subtitle: '15 Connected Entities and Multi-Party Coordination Covenants',
    summary: 'Mapping the 15 distinct industry nodes, their divergent economic incentives, and how DigiSynq binds them through neutral covenants.',
    content: [
      'The entertainment industry suffers because its 15 primary stakeholder types operate under conflicting incentives and asymmetric information:',
      '• Producers: Shoulder capital risk, schedule liability, and completion bond exposure.',
      '• Directors & Creators: Fight for creative integrity, coverage, and narrative vision under tightening clocks.',
      '• Screenwriters: Need developmental transparency, revision tracking, and chain-of-title integrity.',
      '• Guild Crew & Dept Heads: Need schedule predictability, reasonable turnarounds, and craft recognition.',
      '• Actors & Talent: Face calendar conflicts, multi-project overlaps, and grueling set turnarounds.',
      '• Soundstages & Facilities: Bear heavy fixed costs and suffer from volatile dark turnaround weeks.',
      '• Equipment Rental Houses: Balance capital depreciation against unpredictable rental extensions.',
      '• Virtual Production & LED Volumes: Require high-fidelity pre-visualization and synchronized camera tracking.',
      '• Post-Production & VFX Houses: Suffer from compressed delivery windows caused by front-end set delays.',
      '• Audio & Music Teams: Trapped at the tail end of the pipeline with immovable premiere dates.',
      '• Financiers & Completion Guarantors: Require strict milestone audit trails before releasing capital tranches.',
      '• Brands & Product Sponsors: Need guaranteed asset placement, contextual alignment, and airdate certainty.',
      '• Distributors & Exhibitors: Rely on rigid theatrical calendars and DCP logistical precision.',
      '• OTT Platforms: Require strict digital delivery specs, IMF packaging, and multi-language localization.',
      '• Audiences & Communities: Seek authentic storytelling, seamless discovery, and transparent release windows.',
      'DigiSynq acts as the neutral orchestrator, establishing transparent covenants and real-time telemetry across all 15 nodes.'
    ],
    keyTakeaways: [
      '15 interconnected stakeholder entities mapped with explicit friction points',
      'Eliminates agency conflicts through neutral multi-party covenants'
    ],
    relatedRoutes: [
      { label: 'Stakeholders Matrix', path: '/stakeholders' },
      { label: 'Ecosystem Graph', path: '/ecosystem' }
    ],
    relatedSections: ['category-definition', 'network-topology']
  },
  {
    id: 'mechanisms-mastery',
    category: 'Mechanisms',
    num: 5,
    title: 'The 23 Master Mechanisms',
    subtitle: 'Algorithmic Protocol Chain Governing System Interventions',
    summary: 'From M01 OBSERVE to M23 VALUE ENGINE: 23 modular functions executing the complete lifecycle of operational synchronization.',
    content: [
      'DigiSynq operates through 23 rigorously defined mechanisms organized into 5 functional tiers:',
      'Tier 1: SENSING & MAPPING (M01 Observe, M02 Detect, M03 Decompose, M04 Map)',
      'Tier 2: DIAGNOSIS & PRIORITIZATION (M05 Diagnose, M06 Classify, M07 Prioritize, M08 Simulate)',
      'Tier 3: ORCHESTRATION & EXECUTION (M09 Connect, M10 Match, M11 Coordinate, M12 Execute)',
      'Tier 4: VERIFICATION & ADAPTATION (M13 Monitor, M14 Verify, M15 Learn, M16 Predict, M17 Prevent)',
      'Tier 5: GOVERNANCE & RESILIENCE (M18 Escalation, M19 Governance, M20 Version Control, M21 Resilience, M22 Capacity Engine, M23 Value Engine)',
      'Highlight — Mechanism M07 (Algorithmic Priority Calculator):',
      'P = (Urgency × Blast Radius × Cost Velocity) / Time to Delivery Window',
      'Highlight — Mechanism M02 (Detection Formula):',
      'GAP = Expected State − Actual State. When GAP > 0, an automated diagnostic trigger is generated.'
    ],
    keyTakeaways: [
      '23 deterministic mechanisms ensure repeatable, auditable operational interventions',
      'Mathematical formulas govern prioritization, risk scoring, and capacity liquidity'
    ],
    relatedRoutes: [
      { label: '23 Mechanisms Console', path: '/mechanisms' },
      { label: 'Operating Runbook', path: '/runbook' }
    ],
    relatedSections: ['philosophy-principles', 'engines-simulation']
  },
  {
    id: 'problem-taxonomy',
    category: 'Problem Taxonomy',
    num: 6,
    title: 'Problem Taxonomy & Failure Modes',
    subtitle: '6 Structural Domains and 24 Recurring Breakdown Archetypes',
    summary: 'A comprehensive taxonomy classifying every entertainment failure into root causes, structural conditions, and blast radiuses.',
    content: [
      'DigiSynq categorizes all operational breakdowns across 6 core structural domains:',
      'Domain 01: PRE-PRODUCTION CHAOS — Unlocked scripts during tech scouts, unverified location permits, unbudgeted specialty rigs, and unrealistic schedules.',
      'Domain 02: PRODUCTION SCHEDULE RUPTURES — Weather interruptions, principal talent illness, equipment failures on set, and unit transit breakdowns.',
      'Domain 03: POST-PRODUCTION BOTTLENECKS — Turnover delays, missing camera metadata, unbudgeted VFX revisions, and conflicting color pipeline standards.',
      'Domain 04: MARKETING & RELEASE DISCONNECTS — Delayed trailer asset cutdowns, uncoordinated premiere windows, and missed festival submission deadlines.',
      'Domain 05: TALENT & CREW FRICTION — Overtime burnouts, guild turnaround violations, department head communication breakdowns, and compensation disputes.',
      'Domain 06: RIGHTS & MONETIZATION LEAKAGE — Unclear chain-of-title, music sync clearance lapses, territory distribution blackouts, and uncollected royalties.',
      'Every problem in this taxonomy maps directly to specific preventative mechanisms and intervention protocols.'
    ],
    keyTakeaways: [
      '6 structural domains encompass 98% of recurring entertainment budget and schedule overruns',
      'Translates vague frustration into precise, modelable causal graphs'
    ],
    relatedRoutes: [
      { label: 'Taxonomy Engine', path: '/engines/problem-taxonomy' },
      { label: 'Root-Cause Diagnostic', path: '/diagnose' }
    ],
    relatedSections: ['diagnostics-pipeline', 'resolution-framework']
  },
  {
    id: 'diagnostics-pipeline',
    category: 'Diagnostics',
    num: 7,
    title: 'The 13-Step Tree Pipeline & Diagnostic Protocol',
    subtitle: 'From Surface Symptom to Verified Resolution Architecture',
    summary: 'A structured 13-step investigative tree that isolates systemic causes without placing personal blame.',
    content: [
      'When an entertainment project breaks down, DigiSynq deploys the 13-Step Diagnostic Tree Pipeline:',
      '01. Surface Observation (What symptom triggered the alarm?)',
      '02. Deviation Measurement (Quantify the delta between schedule/budget baseline and actual state)',
      '03. Timeline Reconstruction (Step-by-step chronology leading to the point of rupture)',
      '04. Actor & Node Identification (Which departments and vendors are currently involved?)',
      '05. Dependency Mapping (Which upstream inputs were delayed, corrupted, or missing?)',
      '06. Root-Cause Five Whys (Drill past human friction to uncover the structural deficit)',
      '07. Missing Capability Definition (What resource, tool, or decision authority is absent?)',
      '08. Blast Radius Projection (If unresolved, which downstream stages collapse next?)',
      '09. Countermeasure Generation (Synthesize 3 viable intervention scenarios: Replace, Resequence, or Reallocate)',
      '10. Risk & Cost Tradeoff Audit (Score each scenario for financial velocity and creative fidelity)',
      '11. Multi-Party Alignment (Secure consensus through a neutral DigiSynq Covenant)',
      '12. Execution Telemetry (Monitor the intervention in real-time)',
      '13. Outcome Verification (Audit actual savings and archive case into System Memory)'
    ],
    keyTakeaways: [
      '13-step pipeline guarantees consistent root-cause diagnosis across any production scale',
      'Connects diagnostic findings directly to the Start a SYNQ intake flow'
    ],
    relatedRoutes: [
      { label: 'Interactive Diagnostic', path: '/diagnose' },
      { label: 'Root Map Engine', path: '/engines/root-map' }
    ],
    relatedSections: ['problem-taxonomy', 'engines-simulation']
  },
  {
    id: 'engines-simulation',
    category: 'Engines',
    num: 8,
    title: 'The Simulation & Intelligence Engines',
    subtitle: 'Root Map, Cascade Simulator, Risk Engine, Capacity Matcher & Memory',
    summary: 'The technical computational core of DigiSynq: predictive modeling before capital is committed.',
    content: [
      'DigiSynq provides five specialized analytical engines:',
      '1. Root Map Engine: Visualizes the complete causal path from Surface Symptom down to Core Structural Deficiency.',
      '2. Cascade Simulator: Models blast radiuses. For example: Soundstage delay (+4 days) → Production unit extension → Crew double-booking rupture → Post-production compression (−12 days) → VFX overtime surge ($180K) → Theatrical release window jeopardy.',
      '3. Multi-Factor Risk Engine: Computes RISK = Probability × Impact × Dependency × Time Sensitivity to rank threats by economic severity.',
      '4. Capacity Matching Engine: Dynamically maps unbooked soundstage dark dates, idle mobile production units, and guild availability to absorb demand shocks.',
      '5. System Memory Flywheel: Indexes historical resolutions, generating predictive risk warnings for newly initiated productions.'
    ],
    keyTakeaways: [
      'Simulate the full downstream blast radius before committing costly interventions',
      'Transforms reactive firefighting into predictive operational stability'
    ],
    relatedRoutes: [
      { label: 'Simulation Engines', path: '/engines' },
      { label: 'Cascade Simulator', path: '/engines/cascade' },
      { label: 'Risk Engine', path: '/engines/risk' }
    ],
    relatedSections: ['diagnostics-pipeline', 'resolution-framework']
  },
  {
    id: 'resolution-framework',
    category: 'Resolution',
    num: 9,
    title: 'The 13 Intervention Classes & SYNQ Design',
    subtitle: 'Systemic Countermeasures for Complex Operational Ruptures',
    summary: 'A taxonomy of 13 precise operational levers deployed to stabilize compromised production timelines.',
    content: [
      'When an operational breakdown occurs, DigiSynq designs a SYNQ using 13 formalized intervention classes:',
      '01. RESEQUENCE — Swap shooting blocks or post-production passes to allow delayed elements to catch up without freezing the unit.',
      '02. REALLOCATE — Shift internal departmental budget or labor capacity from low-velocity to high-velocity bottlenecks.',
      '03. REPLACE — Substitute an unavailable or failed vendor with a pre-vetted network partner.',
      '04. FRACTIONAL BURST — Introduce targeted specialized guild talent for high-density 48-hour sprints.',
      '05. DECOUPLE — Sever interdependent milestones so that sound design, color, and VFX can execute concurrently on locked reels.',
      '06. SUBSTITUTE — Swap an unattainable physical location with an available virtual LED volume or certified alternative backlot.',
      '07. BUFFER EXPANSION — Strategically inject an intentional technical pause to prevent compounding overtime collapse.',
      '08. COVENANT RE-ALIGNMENT — Mediate a neutral renegotiation of milestone delivery dates across conflicting stakeholders.',
      '09. SCOPE ADJUSTMENT — Refactor high-complexity, low-narrative sequences into feasible production methodologies.',
      '10. TELEMETRY INJECTION — Install real-time dailies or edit progress tracking to eliminate guesswork.',
      '11. CAPACITY OFF-LOAD — Route overflow footage to secondary partner post houses operating in complementary time zones.',
      '12. COMPLIANCE STABILIZATION — Resolve guild turnaround, safety, or legal disputes through standardized DigiSynq covenants.',
      '13. ESCALATION RESOLUTION — Provide executive decision-makers with unvarnished scenario comparisons to break decision deadlocks.'
    ],
    keyTakeaways: [
      '13 intervention classes provide a rigorous vocabulary for resolving complex problems',
      'Interventions are bound into enforceable, neutral multi-party covenants'
    ],
    relatedRoutes: [
      { label: 'The Synq Definition', path: '/the-synq' },
      { label: 'Start a SYNQ Intake', path: '/start' }
    ],
    relatedSections: ['diagnostics-pipeline', 'mechanisms-mastery']
  },
  {
    id: 'network-topology',
    category: 'Network',
    num: 10,
    title: 'Asset-Light Network Topology & Reliability Graph',
    subtitle: 'Decentralized Capacity Orchestration Without Heavy Plant Ownership',
    summary: 'How DigiSynq builds liquidity across independent stages, craftspeople, and facilities without capital asset bloat.',
    content: [
      'DigiSynq operates on an asset-light network topology:',
      '• The network is an archipelago of independent, highly capable studios, guild craftspeople, post facilities, and financing partners.',
      '• Traditional companies attempt to buy or build physical stages, creating crushing overhead during industry downturns.',
      '• DigiSynq connects existing, underutilized capacity via real-time telemetry and standardized operational protocols.',
      '• Professional Reliability Graph: DigiSynq evaluates network participants based on verified operational history: on-time turnover rates, adherence to technical specifications, and revision stability — not superficial marketing claims.',
      '• Neutral Covenants: Every transaction through DigiSynq is executed under clear clean-room rules, protecting intellectual property and ensuring rate transparency.'
    ],
    keyTakeaways: [
      'Asset-light network scales without physical real estate or equipment depreciation',
      'The Reliability Graph replaces subjective recommendations with verifiable execution track records'
    ],
    relatedRoutes: [
      { label: 'Ecosystem Network', path: '/ecosystem' },
      { label: 'Stakeholders', path: '/stakeholders' }
    ],
    relatedSections: ['category-definition', 'economics-model']
  },
  {
    id: 'economics-model',
    category: 'Economics',
    num: 11,
    title: 'Asset-Light Economics & Coordination Liquidity',
    subtitle: 'Capturing High-Margin Value by Unlocking Latent Capacity',
    summary: 'The economic logic: why coordinating existing capacity generates superior returns to owning heavy physical infrastructure.',
    content: [
      'The unit economics of traditional entertainment infrastructure are notoriously punishing: capital-intensive soundstages and rental houses struggle with severe cyclical utilization peaks and valleys.',
      'DigiSynq unlocks economic value through three primary levers:',
      '1. Dark-Date Floor Liquidity: Soundstages and LED volumes often sit empty for 5-10 days between major productions. DigiSynq routes secondary commercial shoots, pickups, and music videos into these windows at mutually beneficial rates.',
      '2. Cost Velocity Reduction: A typical mid-budget production loses $35K-$85K per day during an unscheduled set freeze. By resolving root-cause dependencies in 24-48 hours, DigiSynq saves projects multiples of its engagement fee.',
      '3. Zero Broker Markups: Unlike predatory talent agencies or middleman brokers who add 20% markups while creating zero operational value, DigiSynq charges flat, transparent coordination fees aligned with validated outcomes.'
    ],
    keyTakeaways: [
      'Capital-light, high-margin operating profile',
      'Turns waste and idle turnaround capacity into productive industry liquidity'
    ],
    relatedRoutes: [
      { label: 'Runbook Commercials', path: '/runbook' },
      { label: 'About DigiSynq', path: '/about' }
    ],
    relatedSections: ['revenue-streams', 'moat-compounding']
  },
  {
    id: 'revenue-streams',
    category: 'Revenue',
    num: 12,
    title: 'The 9 Diversified Revenue Streams',
    subtitle: 'Sustainable Commercial Model Across the Entertainment Value Chain',
    summary: 'Nine complementary monetization channels spanning direct problem-solving, subscriptions, and platform access.',
    content: [
      'DigiSynq monetizes its infrastructure across nine distinct commercial streams:',
      '01. Acute Problem-Solving Engagements — Fixed diagnostic and coordination fees for resolving urgent production ruptures.',
      '02. Project Slate Retainers — Milestone-based coordination retainers for studios and producers across multi-title production slates.',
      '03. Capacity Matching & Liquidity Routing — Transparent coordination fees for filling soundstage dark dates and equipment downtime.',
      '04. Guild & Craft Workshops — Intensive technical masterclasses and hands-on virtual production training programs.',
      '05. Strategic Production Advisory — Pre-greenlight dependency audits, risk assessments, and schedule feasibility reviews.',
      '06. Enterprise Telemetry Subscriptions — SaaS access to DigiSynq live monitoring dashboards for completion guarantors and financiers.',
      '07. Technology Platform Access — Licensing proprietary scheduling, cascade simulation, and root mapping tools.',
      '08. Developer & Integration APIs — API access for studio software ecosystems to query DigiSynq taxonomy and reliability graphs.',
      '09. Selective Milestone Upside — Performance-based bonuses tied to verified days reclaimed and budget savings.'
    ],
    keyTakeaways: [
      'Nine diversified revenue streams balancing transactional fees with recurring software retainers',
      'Monetization is directly aligned with tangible value creation and cost avoidance'
    ],
    relatedRoutes: [
      { label: 'Workshops & Labs', path: '/workshops' },
      { label: 'Start a SYNQ', path: '/start' }
    ],
    relatedSections: ['economics-model', 'moat-compounding']
  },
  {
    id: 'moat-compounding',
    category: 'Moat',
    num: 13,
    title: 'The 8 Compounding Moats',
    subtitle: 'Self-Reinforcing Flywheels That Protect DigiSynq Leadership',
    summary: 'How proprietary dependency telemetry, network density, and institutional memory create an unassailable competitive advantage.',
    content: [
      'DigiSynq is protected by eight compounding layers of competitive advantage:',
      '1. Proprietary Dependency Graph: Every solved case maps new causal nodes, expanding DigiSynq’s systemic view beyond what any single studio possesses.',
      '2. Institutional System Memory: Resolution covenants and variance datasets create an ever-expanding benchmark repository.',
      '3. Professional Reliability Graph: Objective, performance-backed data on thousands of craftspeople, vendors, and facilities cannot be faked or bought.',
      '4. Multi-Sided Network Effects: As more soundstages and post houses join the network, capacity liquidity increases, attracting more productions.',
      '5. Neutral Trust Position: Because DigiSynq does not take production credits, own physical equipment, or act as an agent, it remains the industry’s trusted clean-room arbiter.',
      '6. Predictive Risk Algorithms: Machine learning models trained on proprietary cascade signatures identify failures weeks before human producers detect them.',
      '7. High Switching Costs: Productions embedding DigiSynq coordination covenants into financing and bond requirements cannot easily switch to ad-hoc methods.',
      '8. Guild & Craft Loyalty: By protecting crew turnarounds and eliminating chaotic unpaid overtime, DigiSynq commands immense grass-roots loyalty.'
    ],
    keyTakeaways: [
      'Each completed SYNQ makes the entire network faster, smarter, and more resilient',
      'Neutral, trusted positioning eliminates the conflict of interest inherent in traditional agencies'
    ],
    relatedRoutes: [
      { label: 'System Memory Engine', path: '/engines' },
      { label: 'Ecosystem Topology', path: '/ecosystem' }
    ],
    relatedSections: ['category-definition', 'roadmap-evolution']
  },
  {
    id: 'roadmap-evolution',
    category: 'Roadmap',
    num: 14,
    title: 'The 5-Phase Strategic Roadmap',
    subtitle: 'From Human-Led Problem Solver to Universal Global Infrastructure',
    summary: 'The deliberate, multi-year progression transforming DigiSynq into the default operating system for entertainment.',
    content: [
      'DigiSynq scales through five structured phases of technological and operational maturity:',
      'Phase 1: Human-Led Problem Resolution — Execute high-touch diagnostic interventions on acute production bottlenecks; manually document causal chains and build the core dataset.',
      'Phase 2: Tool-Assisted System Capture — Deploy internal software tools for dependency mapping, risk calculation, and covenant generation; standardize the 23 mechanisms.',
      'Phase 3: Automated Repetition & Matching — Automate soundstage capacity matching, routine variance telemetry, and multi-party covenant notifications; launch public diagnostic portals.',
      'Phase 4: Predictive Machine Intelligence — Deploy machine learning models on the System Memory corpus to automatically detect cascade signatures during development and pre-production.',
      'Phase 5: Universal Entertainment Infrastructure — Provide the global standard API and coordination protocol connecting studios, guilds, facilities, and financiers across all international production hubs.'
    ],
    keyTakeaways: [
      'Disciplined evolution: Master high-stakes human resolution before fully automating software protocols',
      'Ultimate vision: The default global infrastructure for complex collaborative ecosystems'
    ],
    relatedRoutes: [
      { label: 'About DigiSynq', path: '/about' },
      { label: 'Start a SYNQ Intake', path: '/start' }
    ],
    relatedSections: ['category-definition', 'moat-compounding']
  }
];

export function BlueprintPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSectionId = searchParams.get('section') || CODEX_SECTIONS[0].id;
  
  const [selectedId, setSelectedId] = useState<string>(initialSectionId);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [copied, setCopied] = useState(false);

  // Sync selectedId with URL
  useEffect(() => {
    const urlSec = searchParams.get('section');
    if (urlSec && CODEX_SECTIONS.some((s) => s.id === urlSec)) {
      setSelectedId(urlSec);
    }
  }, [searchParams]);

  const handleSelectSection = (id: string) => {
    setSelectedId(id);
    setSearchParams({ section: id });
  };

  const categories = useMemo(() => {
    const cats = Array.from(new Set(CODEX_SECTIONS.map((s) => s.category)));
    return ['ALL', ...cats];
  }, []);

  const filteredSections = useMemo(() => {
    return CODEX_SECTIONS.filter((sec) => {
      const matchesCategory = selectedCategory === 'ALL' || sec.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        sec.title.toLowerCase().includes(q) ||
        sec.subtitle.toLowerCase().includes(q) ||
        sec.summary.toLowerCase().includes(q) ||
        sec.category.toLowerCase().includes(q) ||
        sec.content.some((c) => c.toLowerCase().includes(q)) ||
        sec.keyTakeaways.some((k) => k.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const activeSection = useMemo(() => {
    return CODEX_SECTIONS.find((s) => s.id === selectedId) || CODEX_SECTIONS[0];
  }, [selectedId]);

  const handleCopy = () => {
    const textToCopy = `${activeSection.title}\n${activeSection.subtitle}\n\n${activeSection.content.join('\n\n')}\n\nKey Takeaways:\n${activeSection.keyTakeaways.map(t => '• ' + t).join('\n')}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#03040A] text-[#ECEEF5] pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <TopographicBackground className="opacity-15 pointer-events-none -z-10 fixed inset-0" />

      {/* Header */}
      <header className="mb-10 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300 font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-[#52E3A4] animate-pulse" />
          <span>DIGISYNQ CODEX</span>
          <span className="text-zinc-600">//</span>
          <span className="text-[#52E3A4]">14 CORE ARCHITECTURAL DOMAINS</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
          The Codex of Synchronization.
          <span className="block text-xl sm:text-2xl lg:text-3xl text-zinc-400 font-normal mt-2">
            The Master Unified Blueprint for Entertainment Infrastructure.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
          An open, rigorous operational codex defining the principles, mechanisms, data models, economics, and algorithms that power DigiSynq’s entertainment synchronization platform.
        </p>

        {/* Search & Category Filter */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search across all 14 codex domains..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/10 bg-[#090B14] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#52E3A4] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-colors border ${
                  selectedCategory === cat
                    ? 'bg-[#16543D] text-[#52E3A4] border-[#52E3A4]'
                    : 'bg-[#090B14] text-zinc-400 border-white/5 hover:border-white/15 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main 2-Column Codex Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Table of Contents & Navigation */}
        <div className="lg:col-span-4 space-y-2 max-h-[820px] overflow-y-auto pr-2 custom-scrollbar">
          <div className="flex items-center justify-between px-2 py-1 text-xs font-mono text-zinc-500 border-b border-white/5 mb-2">
            <span>DOMAINS ({filteredSections.length})</span>
            <span>SECTION NO.</span>
          </div>

          {filteredSections.map((sec) => {
            const isSelected = sec.id === activeSection.id;
            return (
              <button
                key={sec.id}
                onClick={() => handleSelectSection(sec.id)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-[#16543D]/40 border-[#52E3A4] text-white shadow-lg'
                    : 'bg-[#090B14]/80 border-white/[0.06] text-zinc-400 hover:text-white hover:border-white/15'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 text-[#52E3A4]">
                    {sec.category}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">
                    SEC {String(sec.num).padStart(2, '0')}
                  </span>
                </div>
                <div className="font-semibold text-sm text-zinc-200 line-clamp-1">
                  {sec.title}
                </div>
                <div className="text-xs text-zinc-500 line-clamp-1 mt-1 font-light">
                  {sec.subtitle}
                </div>
              </button>
            );
          })}

          {filteredSections.length === 0 && (
            <div className="p-8 text-center text-sm text-zinc-500 bg-[#090B14] rounded-xl border border-white/5">
              No matching sections found for "{searchQuery}".
            </div>
          )}
        </div>

        {/* Right Column: Codex Reader */}
        <article className="lg:col-span-8 p-6 sm:p-10 rounded-2xl border border-white/10 bg-[#090B14] shadow-2xl relative">
          {/* Section Header */}
          <div className="pb-6 mb-6 border-b border-white/10">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#16543D]/60 border border-[#52E3A4]/30 text-[#52E3A4] font-mono text-xs font-semibold">
                  {activeSection.category.toUpperCase()}
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  SECTION {String(activeSection.num).padStart(2, '0')} OF 14
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#52E3A4]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Section'}</span>
                </button>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {activeSection.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-light">
              {activeSection.subtitle}
            </p>
          </div>

          {/* Executive Summary Card */}
          <div className="p-4 rounded-xl border border-[#52E3A4]/20 bg-[#16543D]/10 mb-8">
            <div className="text-[11px] font-mono text-[#52E3A4] mb-1 font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Operational Thesis</span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {activeSection.summary}
            </p>
          </div>

          {/* Section Body Content */}
          <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-light mb-8">
            {activeSection.content.map((paragraph, idx) => (
              <p key={idx} className="whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key Takeaways */}
          <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02] mb-8">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white mb-3 flex items-center gap-2 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#52E3A4]" />
              <span>Architectural Takeaways</span>
            </h3>
            <ul className="space-y-2">
              {activeSection.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2">
                  <span className="text-[#52E3A4] mt-1">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Related System Routes & Deep Links */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-2">
                Explore Connected Platforms:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {activeSection.relatedRoutes.map((route) => (
                  <Link
                    key={route.path}
                    to={route.path}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs text-zinc-200 hover:text-[#52E3A4] transition-colors"
                  >
                    <span>{route.label}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="sm:text-right">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-2">
                Ready to Apply This Architecture?
              </span>
              <Link
                to="/diagnose"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#52E3A4] text-[#03040A] font-semibold text-xs hover:bg-[#34D399] transition-colors shadow-md"
              >
                <span>Diagnose a Problem</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
