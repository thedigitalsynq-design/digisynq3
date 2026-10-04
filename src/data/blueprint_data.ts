// DIGISYNQ — MASTER UNIFIED BLUEPRINT DATA STORE
// Verbatim data model extracted from DIGISYNQ_COMPLETE_IDEA_BLUEPRINT.md

export const BRAND = {
  name: 'DIGISYNQ',
  tagline: 'Sync in All Stages of Filmmaking.',
  mission: 'Find the gap. SYNQ the system. Create value.',
  philosophy: 'Break the silos. Connect the dots. Simplify the system.',
  category: 'Entertainment Synchronization Infrastructure',
  initialVertical: 'Film & Entertainment Ecosystem',
  operatingModel: 'Asset-Light, Network-Orchestrated, Problem-First',
  executiveDefinition:
    'DIGISYNQ is an asset-light synchronization and problem-solving infrastructure for complex entertainment ecosystems. It identifies gaps between what a project needs and what is actually happening, maps the dependencies behind those gaps, diagnoses root causes, connects the required people, resources and capabilities, coordinates the intervention, measures the outcome, learns from the result, and progressively prevents similar failures.',
  coreQuote:
    'DIGISYNQ does not manage filmmaking. It manages the dependencies between the people, processes, resources and decisions that make filmmaking possible.',
  oneSentenceBusiness:
    'DIGISYNQ finds where an entertainment system is breaking, understands why, connects what is missing, coordinates the fix, measures the value, and learns how to prevent the next failure.',
  oneSentenceCategory: 'DIGISYNQ is Entertainment Synchronization Infrastructure.',
  oneSentencePhilosophy: 'Break the silos. Connect the dots. Simplify the system.',
  oneSentenceMission: 'Find the gap. SYNQ the system. Create value.',
  northStarMetric: 'Verified System Value Created',
};

// ── 03. The DIGISYNQ Philosophy (10 Rules) ─────────────────────
export interface PhilosophyRule {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
}

export const PHILOSOPHY_RULES: PhilosophyRule[] = [
  {
    num: '01',
    title: 'Synchronization over Silos',
    subtitle: 'Connect the spaces between entities',
    desc: 'Fragmentation is the default state of the entertainment ecosystem. DIGISYNQ bridges the spaces between departments, stakeholders, and stages.',
  },
  {
    num: '02',
    title: 'Outcomes over Activity',
    subtitle: 'Measure what improved, not motion',
    desc: 'Coordination that does not create measurable value is noise. We measure days recovered, cost avoided, and dependencies stabilized.',
  },
  {
    num: '03',
    title: 'Collaboration over Ownership',
    subtitle: 'Orchestrate existing capacity',
    desc: 'The ecosystem is far more powerful when existing capacity works together instead of prematurely building or owning balance-sheet debt.',
  },
  {
    num: '04',
    title: 'Transparency over Hype',
    subtitle: 'Operational truth over vanity',
    desc: 'No fabricated claims or inflated dashboards. Honest operational truth creates the defensible trust that makes multi-party synchronization possible.',
  },
  {
    num: '05',
    title: 'Utilization over Idle Capacity',
    subtitle: 'Monetize dark floors and turnaround windows',
    desc: 'Unused soundstages, camera packages, post suites, and crew gaps represent immense economic loss. We activate and synchronize idle capacity.',
  },
  {
    num: '06',
    title: 'Data over Assumption',
    subtitle: 'Evidence, signals, and verified history',
    desc: 'Entertainment operates heavily on intuition and phone trees. We supplement instinct with verified dependency signals and systemic history.',
  },
  {
    num: '07',
    title: 'Continuous Learning over Static Skills',
    subtitle: 'Build cross-functional adaptability',
    desc: 'Filmmaking is accelerating. Technicians and creators who develop across multiple disciplines withstand systemic disruption far better.',
  },
  {
    num: '08',
    title: 'Value Creation over Vanity',
    subtitle: 'Solve economically meaningful problems',
    desc: 'We do not build generic software for its own sake. Every intervention must protect budgets, recover schedules, and safeguard deliverables.',
  },
  {
    num: '09',
    title: 'Prevention over Reaction',
    subtitle: 'Do not wait for predictable failures',
    desc: 'Small schedule slips become catastrophic delivery crunch weeks later. By mapping dependencies early, failures are arrested before they cascade.',
  },
  {
    num: '10',
    title: 'System Thinking over Local Optimization',
    subtitle: 'Optimize the whole ecosystem',
    desc: 'Optimizing production speed at the expense of VFX plate quality creates massive downstream collapse. We optimize the entire continuum.',
  },
];

// ── 04. What DIGISYNQ Is NOT ──────────────────────────────────
export const WHAT_DIGISYNQ_IS_NOT = [
  { item: 'An ERP', reason: 'Not an administrative database recording internal ledgers.' },
  { item: 'A Production House', reason: 'Does not produce films or compete with creators.' },
  { item: 'A Talent Directory', reason: 'Not a static rolodex; we match verified capabilities to exact dependencies.' },
  { item: 'A Generic Marketplace', reason: 'Does not broker shallow gigs; orchestrates multi-tier synchronized interventions.' },
  { item: 'A Project-Management Clone', reason: 'Does not merely check off tasks; tracks dependency cascades across systems.' },
  { item: 'A Marketing Agency', reason: 'Does not make ad copy; aligns audience signals, delivery assets, and creator activations.' },
  { item: 'A Recruitment Agency', reason: 'Does not broker headcount; aligns cross-departmental technical capacity.' },
  { item: 'A Traditional Consultancy', reason: 'Does not write passive slide decks; coordinates live operational execution.' },
  { item: 'A Camera / Equipment Owner', reason: 'Owns zero physical gear; routes demand to partner rental houses.' },
  { item: 'A Soundstage Owner', reason: 'Owns zero real estate; activates underutilized dark days across studio floors.' },
  { item: 'A Post-Production Conglomerate', reason: 'Does not own post suites; synchronizes workflow handoffs between specialized houses.' },
  { item: 'A Generic SaaS Dashboard', reason: 'Dashboards do not solve coordination; the missing layer is intelligence and orchestration.' },
];

// ── 05. The 9-Stage Entertainment Continuum ───────────────────
export interface ContinuumStage {
  step: string;
  name: string;
  shortDesc: string;
  scope: string;
  typicalFailure: string;
  synqIntervention: string;
  icon: string;
  // Phase 8 Complete Architecture Fields
  purpose: string;
  inputs: string[];
  outputs: string[];
  stakeholders: string[];
  commonFailures: string[];
  rootCauses: string[];
  dependencies: string[];
  mechanisms: string[];
  interventions: string[];
}

export const CONTINUUM_STAGES: ContinuumStage[] = [
  {
    step: '01',
    name: 'IDEA',
    shortDesc: 'Concept origination, narrative thesis, feasibility & initial audience hypothesis',
    scope: 'Premise, genre fit, commercial hypothesis, initial scope boundary',
    typicalFailure: 'Unvalidated scale assumptions that lock unfeasible downstream budgets',
    synqIntervention: 'Early feasibility mapping, audience hypothesis testing, and packaging parameters',
    icon: 'Lightbulb',
    purpose: 'Validate narrative premise and commercial scale before financial and legal commitments solidify.',
    inputs: ['Original premise', 'Book / IP option', 'Director narrative treatment', 'Commercial thesis'],
    outputs: ['Validated story bible', 'Preliminary budget tier bracket', 'Audience density hypothesis'],
    stakeholders: ['Screenwriters & Creators', 'Producers', 'Financiers'],
    commonFailures: ['Scale mismatch', 'Overestimating genre commercial viability', 'Unclear IP chain-of-title'],
    rootCauses: ['Creative isolation', 'Absence of empirical market and production feasibility modeling'],
    dependencies: ['Precedes Development', 'Feeds packaging covenants'],
    mechanisms: ['M01 Observe', 'M03 Decompose', 'M06 Classify'],
    interventions: ['Run script complexity analysis', 'Calibrate budget band against genre benchmarks'],
  },
  {
    step: '02',
    name: 'DEVELOPMENT',
    shortDesc: 'Screenplay, packaging, rights, financing & commercial structure',
    scope: 'Script iterations, chain-of-title, talent attachments, debt/equity covenants',
    typicalFailure: 'Unclear chain-of-title, unrealistic schedule commitments, loose investor terms',
    synqIntervention: 'Rights verification, dependency-aware milestone structuring, packaging intelligence',
    icon: 'FileText',
    purpose: 'Structure legal, financial, and talent architecture into a bankable, de-risked production package.',
    inputs: ['Draft screenplay', 'Talent letters of interest', 'Territory pre-sales estimates', 'Tax incentive quotes'],
    outputs: ['Locked shooting draft', 'Chain-of-title escrow', 'Milestone capital schedule', 'Casting window locks'],
    stakeholders: ['Producers', 'Screenwriters', 'Directors', 'Financiers'],
    commonFailures: ['Prolonged development hell', 'Unhedged actor schedule holds', 'Ambiguous rights reversions'],
    rootCauses: ['Decoupling between creative rewriting and physical production budget realities'],
    dependencies: ['Depends on Stage 01 Idea', 'Enables Stage 03 Pre-Production'],
    mechanisms: ['M02 Detect', 'M04 Map', 'M07 Prioritize', 'M19 Governance'],
    interventions: ['Pre-flight rights audit', 'Contractual milestone synchronization', 'Dynamic budget stress test'],
  },
  {
    step: '03',
    name: 'PRE-PRODUCTION',
    shortDesc: 'Casting, crew assembly, locations, permits, budgeting, technical planning & scheduling',
    scope: 'Department breakdowns, stage bookings, tech scouts, gear locks, vendor bids',
    typicalFailure: 'Unvetted crew assembly, compressed pre-pro schedules, unconfirmed permits',
    synqIntervention: 'Cross-departmental schedule stress-testing, partner stage routing, verified talent matching',
    icon: 'Calendar',
    purpose: 'Lock all operational, spatial, and technical dependencies before daily capital burn begins.',
    inputs: ['Locked script', 'Budget breakdown', 'HOD crew wishlists', 'Director shot list'],
    outputs: ['Master shooting schedule', 'Stage lease agreements', 'Crew deal memos', 'Camera/lighting contracts'],
    stakeholders: ['Producers', 'Directors', 'Technicians & HODs', 'Rental Houses', 'Stages'],
    commonFailures: ['Zero schedule buffer', 'Stage turnover overlaps', 'Permit delays', 'Camera package mismatches'],
    rootCauses: ['Opaque availability networks', 'Unsynchronized vendor bids', 'Fragmented department phone trees'],
    dependencies: ['Depends on Stage 02 Development', 'Dictates Stage 04 Production rhythm'],
    mechanisms: ['M08 Simulate', 'M09 Connect', 'M10 Match', 'M21 Resilience'],
    interventions: ['Route to partner dark-floor stages', 'Standardize turnaround rest covenants', 'Pre-rig buffer modeling'],
  },
  {
    step: '04',
    name: 'PRODUCTION',
    shortDesc: 'Principal photography, daily execution, departments, equipment, logistics & raw capture',
    scope: 'Call sheets, shooting order, daily wrap reports, raw footage ingest, turnaround covenants',
    typicalFailure: 'Actor illness, weather shocks, location loss, and uncoordinated call sheet revisions',
    synqIntervention: 'Live cascade mitigation, dynamic shooting resequencing, standby resource activation',
    icon: 'Film',
    purpose: 'Execute principal photography with zero preventable downtime, safety violations, or cascade overruns.',
    inputs: ['Daily call sheets', 'Soundstage floor availability', 'Talent on-set call', 'Camera raw media'],
    outputs: ['Verified dailies wrap sheets', 'Camera-to-cloud media ingest', 'Sound track stems', 'VFX metadata logs'],
    stakeholders: ['Talent & Cast', 'Technicians & Crew', 'Producers', 'Directors', 'Stages'],
    commonFailures: ['Unannounced call sheet splits', 'Crew fatigue from 16h turns', 'Standby equipment penalties ($18k/day)'],
    rootCauses: ['Single-threaded schedule dependency concentration without dynamic resequencing capability'],
    dependencies: ['Depends on Stage 03 Pre-Pro', 'Feeds Stage 05 Post-Production directly'],
    mechanisms: ['M01 Observe', 'M11 Coordinate', 'M12 Execute', 'M13 Monitor', 'M18 Escalation'],
    interventions: ['Dynamic scene resequencing', 'Partner dark stage activation', 'Standby equipment parity routing'],
  },
  {
    step: '05',
    name: 'POST-PRODUCTION',
    shortDesc: 'Editorial, VFX, sound, music, dubbing, color, mastering & QC compliance',
    scope: 'Turnovers, plate verification, conform, Foley/mix, Atmos, IMF mastering, QC passes',
    typicalFailure: 'Late plates, editorial instability, scope creep, metadata errors triggering platform rejects',
    synqIntervention: 'Input quality standardization, milestone-tied asset turnovers, burst VFX house coordination',
    icon: 'Sliders',
    purpose: 'Assemble, conform, grade, and mix raw footage into verified master deliverable packages.',
    inputs: ['Camera raw dailies', 'Script supervisor logs', 'Editorial rough cuts', 'Sound audio stems'],
    outputs: ['Conformed picture lock', 'Finished VFX shots', 'Dolby Atmos audio master', 'DCI DCP & IMF master packages'],
    stakeholders: ['Post & VFX Houses', 'Music & Audio Professionals', 'Directors', 'Producers'],
    commonFailures: ['6 weeks of VFX compressed into 14 days', 'ACES OCIO color space mismatch', 'Atmos phase cancellation'],
    rootCauses: ['Upstream production delays absorbed entirely by downstream post without date elasticity'],
    dependencies: ['Depends on Stage 04 Production', 'Enables Stage 07 Distribution delivery'],
    mechanisms: ['M03 Decompose', 'M10 Match', 'M14 Verify', 'M20 Version Control'],
    interventions: ['Deploy automated pre-flight QC tests', 'Secondary burst VFX studio routing', 'Lock picture milestones'],
  },
  {
    step: '06',
    name: 'MARKETING',
    shortDesc: 'Positioning, campaign planning, trailers, press, creator activation & audience development',
    scope: 'Key art, trailer cuts, localized promos, influencer activations, PR blitzes',
    typicalFailure: 'Disconnected delivery assets, delayed teaser drops, poor audience-channel alignment',
    synqIntervention: 'Synchronized promotional asset handoffs, creator network matching, pre-demand telemetry',
    icon: 'Megaphone',
    purpose: 'Build concentrated pre-demand and awareness synchronized with talent press windows and master delivery.',
    inputs: ['Master trailer cuts', 'Talent press junket calendar', 'EPK footage', 'Target demographic telemetry'],
    outputs: ['Localized trailer drops', 'Key art billboards', 'Digital creator activations', 'Premiere screening hype'],
    stakeholders: ['Marketing & Media Channels', 'Producers', 'Talent & Cast', 'Distributors'],
    commonFailures: ['Late trailer delivery missing cinema placement', 'Generic mass-market campaign fatigue'],
    rootCauses: ['Marketing treated as an external parallel silo rather than synchronized post turnover stream'],
    dependencies: ['Runs in parallel with Stage 05 Post', 'Feeds Stage 07 Distribution & 08 Audience'],
    mechanisms: ['M06 Classify', 'M11 Coordinate', 'M16 Predict'],
    interventions: ['Synchronize teaser asset pull from color dailies', 'Match narrative hooks to digital creators'],
  },
  {
    step: '07',
    name: 'DISTRIBUTION',
    shortDesc: 'Theatrical, OTT, digital, territory management, delivery & release windows',
    scope: 'Screen allocation, territory localization, platform delivery compliance, window governance',
    typicalFailure: 'QC rejects 72h before release, clashing theatrical dates against tentpole releases',
    synqIntervention: 'Automated delivery spec verification, multi-platform release coordination, screen optimization',
    icon: 'Send',
    purpose: 'Deliver master assets flawlessly across theatrical circuits, OTT platforms, and international territories.',
    inputs: ['DCI-compliant DCPs', 'IMF packages with 35-language timed text', 'KDM security keys', 'Territory rights'],
    outputs: ['Simultaneous multi-territory debut', 'Verified platform ingestion receipts', 'Box office box logs'],
    stakeholders: ['Distributors & Exhibitors', 'OTT & Streaming Platforms', 'Producers'],
    commonFailures: ['Platform QC rejection 48h before release', 'Theatrical screens lost to competitor studio shifts'],
    rootCauses: ['Divergent vendor IMF metadata wrappers and lack of pre-flight platform compliance testing'],
    dependencies: ['Depends on Stage 05 Post & 06 Marketing', 'Enables Stage 08 Audience & 09 Monetization'],
    mechanisms: ['M14 Verify', 'M17 Prevent', 'M21 Resilience'],
    interventions: ['Automate platform profile validation', 'Deploy density-matched regional release clusters'],
  },
  {
    step: '08',
    name: 'AUDIENCE',
    shortDesc: 'Discovery, viewing, reviews, community, fan interaction & cultural response',
    scope: 'Audience density, localized screening attendance, social sentiment, fandom engagement',
    typicalFailure: 'Fragmented discovery, zero retention of theatrical viewers into digital fandoms',
    synqIntervention: 'Audience density mapping, creator-led community engagement, direct viewer connections',
    icon: 'Users',
    purpose: 'Cultivate deep cultural resonance, positive word-of-mouth, and sustained fandom community density.',
    inputs: ['Cinema screenings', 'Streaming availability', 'Creator social channels', 'Community screening hubs'],
    outputs: ['Opening weekend box office density', 'Organic social virality', 'Fan community retention', 'Audience sentiment'],
    stakeholders: ['Audiences & Fan Communities', 'Exhibitors', 'Creators', 'Platforms'],
    commonFailures: ['Theatrical screenings with low room density', 'Disjointed independent film discovery'],
    rootCauses: ['Relying on broad broadcast advertising rather than concentrated regional fan communities'],
    dependencies: ['Depends on Stage 07 Distribution', 'Drives Stage 09 Monetization long-tail'],
    mechanisms: ['M09 Connect', 'M16 Measure', 'M19 Learn'],
    interventions: ['Deploy pre-demand density screening events', 'Creator-narrative direct community engagement'],
  },
  {
    step: '09',
    name: 'MONETIZATION',
    shortDesc: 'Box office, streaming, licensing, music, satellite, merchandising & ancillary IP',
    scope: 'Box office splits, streaming licensing, music publishing, satellite syndication, gaming IP',
    typicalFailure: 'Revenue leakage across intermediaries, stalled recoupment schedules, unexploited music rights',
    synqIntervention: 'Transparent recoupment tracking, synchronized music licensing, ancillary IP coordination',
    icon: 'TrendingUp',
    purpose: 'Maximize lifetime commercial recoupment and intellectual property value across all distribution windows.',
    inputs: ['Box office gross receipts', 'Streaming license tranches', 'Music publishing cue sheets', 'Merchandise sales'],
    outputs: ['Waterfall recoupment disbursement', 'Ancillary IP royalties', 'Compounding project ROI'],
    stakeholders: ['Producers', 'Financiers', 'Platforms', 'Screenwriters & IP Holders'],
    commonFailures: ['Recoupment freezes due to cue sheet disputes', 'Ancillary rights left unexploited'],
    rootCauses: ['Disparate reporting ledgers and complex multi-party revenue waterfall accounting'],
    dependencies: ['Sustained by Stage 08 Audience', 'Re-invests into Stage 01 Idea for new project slates'],
    mechanisms: ['M15 Learn', 'M20 Version Control', 'M23 Value Engine'],
    interventions: ['Transparent milestone recoupment ledgers', 'Synchronized music publishing clearance tracking'],
  },
];

// ── 06. The 12 Primary Stakeholder Archetypes ───────────────────
export interface StakeholderArchetype {
  id: string;
  name: string;
  role: string;
  coreNeed: string;
  typicalFriction: string;
  digisynqValue: string;
  valueProp: string;
  icon: string;
  color: string;
  // Full System Relationship Fields
  whoTheyAre: string;
  whatTheyNeed: string;
  whatTheyProvide: string;
  commonFriction: string;
  rootCauses: string;
  digisynqIntervention: string;
  valueCreated: string;
  relatedMechanisms: string[];
  relatedStages: string[];
}

export const STAKEHOLDERS: StakeholderArchetype[] = [
  {
    id: 'producers',
    name: 'Producers',
    role: 'Executive & Line Producers',
    coreNeed: 'Coordinated budgets, reliable teams, synchronized schedules, vendor transparency, financing & distribution visibility.',
    typicalFriction: 'Managing 20 disconnected phone trees, surprise department overages, and cascading delays.',
    digisynqValue: 'Reduces coordination risk, tracks multi-tier dependencies, protects schedule and delivery windows.',
    valueProp: 'Reduce coordination risk and protect time, money and delivery.',
    icon: 'Briefcase',
    color: '#FFFFFF',
    whoTheyAre: 'Lead financial, legal, and operational orchestrators responsible for delivering the project within capital and delivery covenants.',
    whatTheyNeed: 'Reliable department schedules, dark-floor stage access, burn-rate transparency, and delivery window protection.',
    whatTheyProvide: 'Packaged intellectual property, capital allocation, casting attachments, and industry commercial demand.',
    commonFriction: 'Managing 20 disconnected phone trees, unbudgeted on-set overtime spikes, and surprise post-production delivery slips.',
    rootCauses: 'Schedule dependency concentration, absence of multi-party shared telemetry, and opaque vendor contracting.',
    digisynqIntervention: 'Deploy living dependency graph, track milestone covenants in real time, and match burst capacity during schedule crunches.',
    valueCreated: 'Target 5.5 days buffer recovery per sprint and $84k+ avoided standby penalties.',
    relatedMechanisms: ['M01 Observe', 'M04 Map', 'M06 Prioritize', 'M13 Structure', 'M16 Measure'],
    relatedStages: ['02 Development', '03 Pre-Production', '04 Production', '07 Distribution'],
  },
  {
    id: 'directors',
    name: 'Directors',
    role: 'Creative & Visual Visionaries',
    coreNeed: 'Creative alignment across departments and reliable execution without technical breakdown.',
    typicalFriction: 'Art, camera, lighting, and VFX misunderstanding requirements and drifting from creative intent.',
    digisynqValue: 'Maintains creative integrity by ensuring technical and logistical departments execute in complete sync.',
    valueProp: 'Keep creative intent synchronized with technical execution.',
    icon: 'Clapperboard',
    color: '#E4E4E7',
    whoTheyAre: 'Artistic directors responsible for narrative pacing, actor performance, and visual language continuity.',
    whatTheyNeed: 'Uninterrupted shooting momentum, reliable stage/camera rigs, and synchronized visual pre-visualization.',
    whatTheyProvide: 'Cinematic vision, script interpretation, shot design, and cross-department aesthetic direction.',
    commonFriction: 'Key creative choices drifting between camera, art department, and downstream VFX houses.',
    rootCauses: 'Siloed pre-production prep, unvalidated technical feasibility, and lack of unified look management.',
    digisynqIntervention: 'Harmonize pre-vis assets directly with stage volume technicians and post conform leads.',
    valueCreated: 'Zero compromise on creative intent; elimination of duplicate pickup shot days.',
    relatedMechanisms: ['M02 Detect', 'M08 Simulate', 'M14 Verify', 'M18 Stabilize'],
    relatedStages: ['02 Development', '03 Pre-Production', '04 Production', '05 Post-Production'],
  },
  {
    id: 'writers',
    name: 'Screenwriters & Creators',
    role: 'Original IP & Narrative Architects',
    coreNeed: 'Development visibility, rights protection, packaging access, and realistic market intelligence.',
    typicalFriction: 'Scripts stuck in development hell, predatory rights options, disconnected packaging.',
    digisynqValue: 'Connects vetted stories directly to production partners with verified rights frameworks.',
    valueProp: 'Protect IP rights, access verified packaging, and accelerate development.',
    icon: 'PenTool',
    color: '#D4D4D8',
    whoTheyAre: 'Narrative originators, screenwriters, book authors, and franchise worldbuilders.',
    whatTheyNeed: 'Clear market demand signals, transparent option covenants, and early production feasibility parameters.',
    whatTheyProvide: 'Original screenplays, episodic bibles, worldbuilding lore, and character dialogue.',
    commonFriction: 'Scripts stalled in prolonged revision limbo; rights optioned without transparent production momentum.',
    rootCauses: 'Disconnection between literary development and physical production budget reality.',
    digisynqIntervention: 'Pre-flight script feasibility mapping, automated scene complexity breakdowns, and clean chain-of-title verification.',
    valueCreated: 'Accelerated greenlight velocity; rights protection with zero predatory intermediary lockups.',
    relatedMechanisms: ['M03 Decompose', 'M07 Classify', 'M12 Route', 'M17 Arbitrate'],
    relatedStages: ['01 Idea', '02 Development'],
  },
  {
    id: 'technicians',
    name: 'Technicians & HODs',
    role: 'Camera, Lighting, Sound, Art & Grip Leads',
    coreNeed: 'Schedule predictability, clear call orders, capacity utilization, and professional career growth.',
    typicalFriction: 'Unscheduled turnaround crunch, idle unbooked weeks between gigs, opaque hiring networks.',
    digisynqValue: 'Monetizes technician downtime, surfaces verified craft reputations, ensures safe turnaround times.',
    valueProp: 'Increase utilization, reduce downtime, and improve schedule visibility.',
    icon: 'Wrench',
    color: '#FFFFFF',
    whoTheyAre: 'Specialized department heads and craft crew: Cinematographers, Gaffers, Grips, Production Designers, and Sound Mixers.',
    whatTheyNeed: 'Transparent shoot calendars, guaranteed turnaround rest covenants, and rate parity.',
    whatTheyProvide: 'World-class practical craft, lighting setups, sound capture, camera operation, and physical set rigging.',
    commonFriction: '16-hour turnaround days causing burnout and on-set safety hazards; unexpected dark weeks between bookings.',
    rootCauses: 'Opaque guild booking phone trees and last-minute production calendar shifts.',
    digisynqIntervention: 'Dynamic craft availability indexing, standardized turnaround rest covenants, and verified skill matching.',
    valueCreated: 'Target 100% schedule visibility and reduction of uncompensated downtime between projects.',
    relatedMechanisms: ['M01 Observe', 'M10 Match', 'M15 Intervene', 'M21 Shield'],
    relatedStages: ['03 Pre-Production', '04 Production'],
  },
  {
    id: 'talent',
    name: 'Actors & Talent',
    role: 'Cast & Key Performers',
    coreNeed: 'Reliable shooting dates, conflict management, clear production windows, and respectful communication.',
    typicalFriction: 'Overlapping shoot dates, sudden last-minute extensions wrecking subsequent project commitments.',
    digisynqValue: 'Simulates schedule shifts beforehand, isolating talent dates from production volatility.',
    valueProp: 'Eliminate booking conflicts, protect production windows, and ensure seamless communication.',
    icon: 'UserCheck',
    color: '#E4E4E7',
    whoTheyAre: 'Lead actors, supporting cast, stunt doubles, and character voice performers.',
    whatTheyNeed: 'Immovable hard-out window respect, scene preparation buffers, and prompt milestone compensation.',
    whatTheyProvide: 'On-screen dramatic performance, character voiceover, and worldwide audience drawing power.',
    commonFriction: 'Schedule slips forcing emergency release from subsequent international film commitments.',
    rootCauses: 'Single-threaded shoot schedules where talent availability acts as a fragile unhedged bottleneck.',
    digisynqIntervention: 'Dynamic scene clustering and 2nd unit coverage resequencing to compress talent shooting days.',
    valueCreated: 'Guaranteed adherence to actor hard-out dates; zero cast recast emergencies.',
    relatedMechanisms: ['M05 Classify', 'M08 Simulate', 'M11 Route', 'M18 Stabilize'],
    relatedStages: ['03 Pre-Production', '04 Production'],
  },
  {
    id: 'post-vfx',
    name: 'Post, VFX & Finishing Houses',
    role: 'Editorial, Sound Mix, CGI & Color Facilities',
    coreNeed: 'Timely plate inputs, locked cuts, controlled revision scopes, and realistic delivery windows.',
    typicalFriction: 'Receiving late unvetted plates, compressed schedules, scope creep, and unbudgeted crunch.',
    digisynqValue: 'Enforces input quality standards, synchronizes milestone turnovers, coordinates overflow burst capacity.',
    valueProp: 'Improve input quality, predictability and delivery planning.',
    icon: 'Layers',
    color: '#D4D4D8',
    whoTheyAre: 'Post-production supervisors, picture editors, VFX compositors, 3D animators, and DI colorists.',
    whatTheyNeed: 'ACES/OCIO standardized camera color pipelines, verified conform turnovers, and locked edit cuts.',
    whatTheyProvide: 'Conformed master picture, high-fidelity CGI shots, photoreal grading, and finishing deliverables.',
    commonFriction: 'Principal photography running late, leaving 6 weeks of VFX work to be compressed into 14 panic days.',
    rootCauses: 'Upstream schedule slippage absorbed entirely by downstream post-production without date elasticity.',
    digisynqIntervention: 'Inject burst secondary VFX partner capacity; enforce automated conform spec validation.',
    valueCreated: '100% adherence to platform master delivery dates; elimination of unpaid facility overtime.',
    relatedMechanisms: ['M03 Decompose', 'M08 Simulate', 'M10 Match', 'M14 Verify'],
    relatedStages: ['04 Production', '05 Post-Production'],
  },
  {
    id: 'music-audio',
    name: 'Music & Audio Professionals',
    role: 'Composers, Sound Designers & Dubbing Teams',
    coreNeed: 'Synchronized turnover cuts, rights clarity, dubbing schedules, and technical specifications.',
    typicalFriction: 'Scoring against fluctuating rough cuts, last-minute dub revisions, delayed publishing licensing.',
    digisynqValue: 'Locks conform dependencies, standardizes audio specs, synchronizes master rights clearances.',
    valueProp: 'Synchronize musical turnovers and eliminate rights/dubbing bottleneck friction.',
    icon: 'Music',
    color: '#FFFFFF',
    whoTheyAre: 'Film composers, supervising sound editors, Foley artists, ADR leads, and Dolby Atmos mixing engineers.',
    whatTheyNeed: 'Locked conform video cues, timely temp sound turnovers, and pre-cleared music publishing splits.',
    whatTheyProvide: 'Original orchestral score, spatial audio sound design, Foley sound effects, and multi-language dubs.',
    commonFriction: 'Scoring against fluctuating picture edits; music publishing clearance disputes freezing release.',
    rootCauses: 'Audio treated as an afterthought at the tail end of the post schedule rather than an integrated stream.',
    digisynqIntervention: 'Pre-flight audio spec conformity and synchronized music licensing covenants during picture lock.',
    valueCreated: 'Zero phase cancellation or mix QC rejections; clean worldwide publishing chain-of-title.',
    relatedMechanisms: ['M02 Detect', 'M13 Structure', 'M14 Verify', 'M20 Codify'],
    relatedStages: ['05 Post-Production'],
  },
  {
    id: 'distributors',
    name: 'Distributors & Exhibitors',
    role: 'Theatrical Bookers & Territorial Distributors',
    coreNeed: 'Predictable delivery masters, release window coordination, verified promotional support.',
    typicalFriction: 'Post-production slips causing missed delivery windows, box office clashes against tentpoles.',
    digisynqValue: 'Provides milestone telemetry on delivery readiness; optimizes regional release clusters.',
    valueProp: 'Improve delivery readiness and release coordination.',
    icon: 'Radio',
    color: '#E4E4E7',
    whoTheyAre: 'Theatrical sales agents, cinema bookers, independent territorial buyers, and exhibition chains.',
    whatTheyNeed: 'Firm delivery dates, verified DCI-compliant DCP masters, and pre-release audience density data.',
    whatTheyProvide: 'Theatrical screen capacity, marketing spend commitments, and territory-wide ticket monetization.',
    commonFriction: 'Post delays forcing sudden loss of booked theatrical screens to competing studio tentpoles.',
    rootCauses: 'Decoupling between production milestone reality and theatrical booking lead-times.',
    digisynqIntervention: 'Real-time delivery readiness telemetry and density-matched regional screening windows.',
    valueCreated: 'Elimination of dead theatrical windows; optimized screen density and ticket yield.',
    relatedMechanisms: ['M06 Prioritize', 'M09 Model', 'M16 Measure', 'M22 Forecast'],
    relatedStages: ['06 Marketing', '07 Distribution', '08 Audience'],
  },
  {
    id: 'platforms',
    name: 'OTT & Digital Platforms',
    role: 'Global & Regional Streaming Services',
    coreNeed: 'QC-compliant assets, standardized metadata, localization audio, chain-of-title documentation.',
    typicalFriction: 'Delivery rejections 48 hours prior to global premiere due to IMF metadata or subtitle bugs.',
    digisynqValue: 'Pre-flight QC verification, metadata conformity checks, and automated localization coordination.',
    valueProp: 'Reduce downstream delivery friction and eliminate QC rejection cycles.',
    icon: 'MonitorPlay',
    color: '#D4D4D8',
    whoTheyAre: 'Global subscription streaming services, transactional VOD operators, and FAST channel syndicators.',
    whatTheyNeed: 'Flawless IMF masters, timed text subtitle files in 35 languages, Atmos audio, and clean title chain.',
    whatTheyProvide: 'Global streaming distribution, immediate worldwide viewer reach, and licensing revenue.',
    commonFriction: 'Automated platform QC rejecting packages 72 hours before launch, threatening global debut campaigns.',
    rootCauses: 'Disparate post vendors using divergent naming conventions and non-compliant IMF wrapping.',
    digisynqIntervention: 'Automated pre-flight QC testing against exact streaming platform ingestion profiles.',
    valueCreated: '100% first-pass platform acceptance; zero delay on global premiere schedules.',
    relatedMechanisms: ['M14 Verify', 'M17 Stabilize', 'M21 Shield', 'M23 Prevent'],
    relatedStages: ['07 Distribution', '09 Monetization'],
  },
  {
    id: 'marketing-channels',
    name: 'Marketing & Media Channels',
    role: 'PR Agencies, Press, & Digital Creators',
    coreNeed: 'Usable promotional assets on time, creator access, audience signals, synchronized campaign timing.',
    typicalFriction: 'Late delivery of trailer cuts, uncoordinated media drops, zero audience telemetry.',
    digisynqValue: 'Coordinates asset turnovers between post and promotional channels; matches creators to narrative hooks.',
    valueProp: 'Synchronize campaign rollout and creator activation with asset delivery.',
    icon: 'Share2',
    color: '#FFFFFF',
    whoTheyAre: 'Publicity firms, film marketing strategists, trailer editing houses, and digital creator amplifiers.',
    whatTheyNeed: 'Approved trailer assets, actor press junket commitments, and localized audience affinity signals.',
    whatTheyProvide: 'Pre-release audience awareness, digital virality, trailer reach, and premiere ticket hype.',
    commonFriction: 'Marketing campaigns kicking off without final master trailer cuts due to uncoordinated post teams.',
    rootCauses: 'Promotional strategy running in parallel silos with zero technical integration into post dailies.',
    digisynqIntervention: 'Synchronized promotional asset pipeline pulling directly from verified color-graded turnovers.',
    valueCreated: 'Coordinated trailer launches aligned with talent press windows for maximum cultural impact.',
    relatedMechanisms: ['M11 Route', 'M12 Structure', 'M16 Measure'],
    relatedStages: ['06 Marketing', '08 Audience'],
  },
  {
    id: 'students-aspirants',
    name: 'Students & Aspirants',
    role: 'Next-Gen Technicians & Emerging Creators',
    coreNeed: 'Structured learning, practical set exposure, capability development, verified industry entry points.',
    typicalFriction: 'Theoretical film schools disconnected from actual production workflows, nepotistic hiring walls.',
    digisynqValue: '6 Capability Labs tracks, hands-on masterclasses, verified apprenticeship synchronization.',
    valueProp: 'Connect structured learning with real industry capability and verified opportunities.',
    icon: 'GraduationCap',
    color: '#E4E4E7',
    whoTheyAre: 'Emerging cinematographers, assistant directors, post editors, and independent film school graduates.',
    whatTheyNeed: 'Verified practical on-set skills, access to modern virtual volume technology, and fair career pathways.',
    whatTheyProvide: 'Fresh creative energy, deep digital fluency, and next-generation technical labor pool.',
    commonFriction: 'Spending years in theoretical academia without exposure to real production speed, union rules, or DIT pipelines.',
    rootCauses: 'Absence of structured apprenticeships bridging academia with active commercial production sets.',
    digisynqIntervention: 'Deploy 6 Capability Labs tracks and match top performers to active production support roles.',
    valueCreated: 'Direct pathway from capability certification to verified paid on-set apprentice roles.',
    relatedMechanisms: ['M19 Learn', 'M20 Codify'],
    relatedStages: ['03 Pre-Production', '04 Production', '05 Post-Production'],
  },
  {
    id: 'audiences-fans',
    name: 'Audiences & Fan Communities',
    role: 'Viewers, Enthusiasts & Cultural Amplifiers',
    coreNeed: 'Discovery of great cinema, direct access, authentic community engagement, creator connection.',
    typicalFriction: 'Algorithmic fatigue, generic marketing campaigns, lack of meaningful participation.',
    digisynqValue: 'Density-driven community screenings, fan participation platforms, authentic creator connection.',
    valueProp: 'Improve the ecosystem that ultimately produces memorable entertainment.',
    icon: 'Heart',
    color: '#D4D4D8',
    whoTheyAre: 'Passionate cinephiles, genre fandoms, festival goers, and digital streaming subscribers.',
    whatTheyNeed: 'Frictionless discovery of original films, direct dialogue with filmmakers, and curated screening events.',
    whatTheyProvide: 'Box office tickets, streaming watch time, social word-of-mouth, and sustained cultural relevance.',
    commonFriction: 'Great independent films buried beneath generic platform recommendation algorithms.',
    rootCauses: 'Mass marketing optimizing for lowest common denominator rather than concentrated fan affinity.',
    digisynqIntervention: 'Coordinate geographic audience density clusters to guarantee full-room theatrical screenings.',
    valueCreated: 'Higher organic opening weekend word-of-mouth and long-tail cult IP appreciation.',
    relatedMechanisms: ['M09 Model', 'M16 Measure', 'M22 Forecast'],
    relatedStages: ['08 Audience', '09 Monetization'],
  },
];

// ── 07-30. The 23 Master DIGISYNQ Mechanisms ───────────────────
export interface Mechanism {
  num: string;
  name: string;
  tagline: string;
  formulaOrRule?: string;
  description: string;
  details: string[];
}

export const MECHANISMS: Mechanism[] = [
  {
    num: '01',
    name: 'OBSERVE',
    tagline: 'Understand the Current System State',
    formulaOrRule: 'Separate Events from Problems',
    description: 'DIGISYNQ observes people, teams, processes, resources, capacity, time, money, contracts, and dependencies. It asks: "Does this event create a meaningful system gap?"',
    details: [
      'Event: "Actor availability changed by 6 days"',
      'Observation: Captures talent schedule, shooting plan, stage bookings, crew commitments, and gear holds',
      'Neutral, real-time sensing of operational signals without jumping to premature panic',
    ],
  },
  {
    num: '02',
    name: 'DETECT',
    tagline: 'Measure Deviation from the Target',
    formulaOrRule: 'GAP = EXPECTED STATE - ACTUAL STATE',
    description: 'Compares expected state against actual state. Magnitude and consequence determine if an intervention is required.',
    details: [
      'Gap types: Time, Information, Capacity, Skill, Communication, Resource, Financial, Quality, Legal, Market',
      'Quantifies variance early before downstream nodes are blindsided',
    ],
  },
  {
    num: '03',
    name: 'DECOMPOSE',
    tagline: 'Deconstruct Problems into Atomic Root Causes',
    formulaOrRule: 'Problem → Symptoms → Events → Conditions → Dependencies → Causes → Root Causes',
    description: 'A complex problem should never remain a single label. DIGISYNQ breaks "Delivery Delay" down into master editorial, color conform, dubbing re-takes, VFX plate delays, and QC metadata errors.',
    details: [
      'Never treat a symptom as a root cause',
      'Isolates each contributing branch of failure systematically',
    ],
  },
  {
    num: '04',
    name: 'MAP',
    tagline: 'Construct the Living System Graph',
    formulaOrRule: 'Nodes = Entities; Edges = Dependencies',
    description: 'Every meaningful problem becomes an operational graph. Nodes represent people, resources, stages, tasks, contracts, and constraints. Edges represent dependencies (depends on, blocks, causes, enables).',
    details: [
      'Visualizes the entire blast radius of any modification',
      'Transforms fragmented spreadsheets into a unified living topology',
    ],
  },
  {
    num: '05',
    name: 'DIAGNOSE',
    tagline: 'Drill Down to the Systemic Why',
    formulaOrRule: 'Symptom → Why? → Cause → Why? → Systemic Cause',
    description: 'Moves relentlessly past surface excuses. Multiple root causes may coexist (e.g., compressed schedule + unvetted vendor = systemic QC collapse).',
    details: [
      'Root Cause A + Root Cause B = Combined systemic shockwave',
      'Distinguishes between bad luck, poor execution, and flawed system design',
    ],
  },
  {
    num: '06',
    name: 'CLASSIFY',
    tagline: 'Multi-Dimensional Categorization',
    formulaOrRule: 'Origin × Behavior × Scope × Urgency × Impact',
    description: 'Problems are categorized across 5 rigorous dimensions: Origin (Human, Technical, Financial, etc.), Behavior (One-time, Cascading, Structural), Scope (Local to Ecosystem), Urgency (Critical to Low), and Impact (Schedule, Quality, Budget, Rights).',
    details: [
      'Standardizes diagnostic language across all 12 stakeholders',
      'Prevents under-reaction to low-urgency, high-cascade risks',
    ],
  },
  {
    num: '07',
    name: 'PRIORITIZE',
    tagline: 'Algorithmic Intervention Ranking',
    formulaOrRule: 'PRIORITY = (IMPACT × URGENCY × DEPENDENCY × PROBABILITY) / (EFFORT × COST)',
    description: 'Not every issue deserves immediate resources. DIGISYNQ mathematically ranks issues based on downstream cascade potential, release-window sensitivity, and irreversibility.',
    details: [
      'Prioritizes upstream interventions that unlock multiple downstream bottlenecks',
      'Evaluates opportunity cost and availability of alternatives',
    ],
  },
  {
    num: '08',
    name: 'SIMULATE',
    tagline: 'Scenario Testing Before Capital Spend',
    formulaOrRule: 'Compare Scenarios A through I',
    description: 'Evaluates interventions virtually: Do nothing, replace resource, resequence schedule, add burst capacity, remove dependency, move deadline, change scope, or substitute vendor.',
    details: [
      'Compares each path by cost, time, risk, quality, stakeholder friction, and reversibility',
      'Never guesses in live production when you can simulate the cascade',
    ],
  },
  {
    num: '09',
    name: 'CONNECT',
    tagline: 'Identify and Bridge Missing Nodes',
    formulaOrRule: 'Problem → Required Capability → Missing Node → Available Node → Connection',
    description: 'Determines precisely what capability is missing (specialized colorist, LED volume slot, completion bond, alternative camera package) and links it directly into the graph.',
    details: [
      'Asset-light routing into verified network capacity',
      'No friction of cold outreach or blind broker markups',
    ],
  },
  {
    num: '10',
    name: 'MATCH',
    tagline: 'Multi-Factor Algorithmic Matching',
    formulaOrRule: 'Requirement → Capability → Availability → Compatibility → Risk → Value',
    description: 'Matches are based on deep technical compatibility, schedule adherence history, quality tier, location, and previous performance — never a generic directory listing.',
    details: [
      'Evaluates verified performance data and past revision behaviors',
      'Yields the highest probability of friction-free execution',
    ],
  },
  {
    num: '11',
    name: 'COORDINATE',
    tagline: 'Synchronize the Interfaces Between Stakeholders',
    formulaOrRule: 'Synchronize Interfaces, Not Every Micro-Task',
    description: 'DIGISYNQ acts as a neutral coordination layer. It manages deadlines, deliverables, dependencies, handoffs, approvals, and escalations across distinct entities.',
    details: [
      'Does not micromanage directors or cinematographers',
      'Eliminates the friction, misunderstandings, and blame shifting at department handoffs',
    ],
  },
  {
    num: '12',
    name: 'EXECUTE',
    tagline: 'Executable Action Plans with Clear Verification',
    formulaOrRule: 'Intervention → Action → Owner → Deadline → Dependency → Verification',
    description: 'Every intervention converts into an actionable, tracked protocol. Every action must have an owner, input, output, deadline, and explicit verification condition.',
    details: [
      'Zero ambiguity on who delivers what and when',
      'Eliminates passive coordination that fails to deliver',
    ],
  },
  {
    num: '13',
    name: 'MONITOR',
    tagline: 'Continuous Variance Telemetry',
    formulaOrRule: 'Plan → Action → Actual → Variance → Correction',
    description: 'Real-time telemetry tracks planned vs. actual progress across departments. Small variances (e.g. +2 days in editorial rough cut) become instant signals before compounding.',
    details: [
      'Continuous sensing across ingest, turnovers, and wrap sheets',
      'Immediate alert thresholds for cascading paths',
    ],
  },
  {
    num: '14',
    name: 'VERIFY',
    tagline: 'Prove the Outcome with Rigorous Metrics',
    formulaOrRule: 'Did the System Actually Improve?',
    description: 'Interventions are verified against 5 dimensions: Time (days recovered), Money (cost avoided), Quality (error/rework reduced), People (conflict eliminated), and Risk (failure probability removed).',
    details: [
      'Defensible mathematical verification of value created',
      'Builds trust with producers, financiers, and bond companies',
    ],
  },
  {
    num: '15',
    name: 'LEARN',
    tagline: 'Generate Compounding System Memory',
    formulaOrRule: 'Problem → Cause → Intervention → Outcome → Lesson → System Memory',
    description: 'Every completed intervention deposits structured learnings into the DIGISYNQ institutional memory: problem patterns, vendor performance, failure indicators, and recovery recipes.',
    details: [
      'The organization grows smarter with every single shot filmed and delivered',
      'Turns individual pain into collective ecosystem intelligence',
    ],
  },
  {
    num: '16',
    name: 'PREDICT',
    tagline: 'Identify Recurring Cascade Patterns',
    formulaOrRule: 'Late Casting + Compressed Pre-Pro + Heavy VFX = High Cascade Risk',
    description: 'By analyzing thousands of project data points, DIGISYNQ spots early disaster signatures weeks before they trigger production shutdowns.',
    details: [
      'Proactive warnings issued before contracts or schedules freeze',
      'Transforms historical post-mortems into forward-looking radar',
    ],
  },
  {
    num: '17',
    name: 'PREVENT',
    tagline: 'The Highest Maturity of DIGISYNQ',
    formulaOrRule: 'Reactive → Diagnostic → Coordinated → Predictive → Preventive',
    description: 'Moving from "Problem happened" to "Problem is likely" to "Problem can be prevented". Interventions happen before cost, delay, or conflict ever manifest.',
    details: [
      'Reduces production insurance risk and completion stress',
      'The ultimate destination of synchronization infrastructure',
    ],
  },
  {
    num: '18',
    name: 'ESCALATION',
    tagline: 'Disciplined Human-in-the-Loop Triggers',
    formulaOrRule: 'Normal → Monitor → Warning → High Risk → Human Review → Decision',
    description: 'Automation assists with telemetry, math, and alerts, but high-impact decisions (legal, safety, rights, creative choices, major budget amendments) trigger mandatory human review.',
    details: [
      'Protects creative relationships and legal liability',
      'Ensures technology serves human decision-makers rather than overriding them',
    ],
  },
  {
    num: '19',
    name: 'GOVERNANCE',
    tagline: 'Permission-Aware Contextual Visibility',
    formulaOrRule: 'Connect Information Without Exposing Confidentiality',
    description: 'Different participants see tailored views: Producer gets full slate visibility, Director gets creative/logistics, Vendor sees assigned deliverables, Talent sees their schedule, Platform sees delivery specs.',
    details: [
      'Zero risk of sensitive budget or script leaks across the network',
      'High trust through strict role-based access control',
    ],
  },
  {
    num: '20',
    name: 'VERSION CONTROL',
    tagline: 'Full Operational & Schedule Traceability',
    formulaOrRule: 'Schedule v1 → v2 → v3: Who, What, Why, Impact',
    description: 'Complete auditability of operational decisions. The system records who made each change, when, why, what dependencies were impacted, and what financial/schedule outcome resulted.',
    details: [
      'Eliminates finger-pointing during post-production crunches',
      'Creates defensible records for completion guarantors',
    ],
  },
  {
    num: '21',
    name: 'RESILIENCE',
    tagline: 'Automated Redundancy & Alternative Routing',
    formulaOrRule: 'Primary Dependency ──► Backup A, Backup B, Backup C',
    description: 'Every mission-critical dependency (soundstage, key camera package, lead colorist, release date) maintains pre-vetted alternatives ready to activate if primary fails.',
    details: [
      'Builds systemic shock absorption directly into project architecture',
      'A location loss no longer halts a 120-person unit for days',
    ],
  },
  {
    num: '22',
    name: 'CAPACITY ENGINE',
    tagline: 'Real-Time Supply & Demand Orchestration',
    formulaOrRule: 'Demand → Capability → Capacity → Match → Utilization → Value',
    description: 'Continuously maps available supply across soundstages, equipment, edit suites, colorists, sound designers, and VFX teams against incoming industry production demand.',
    details: [
      'Activates unused floor days, turning idle facilities into revenue',
      'Lowers production costs without squeezing creative rates',
    ],
  },
  {
    num: '23',
    name: 'VALUE ENGINE',
    tagline: 'The Commercial Proof of Synchronization',
    formulaOrRule: 'Input → Intervention → Output → Outcome → Value Created',
    description: 'Every intervention quantifies tangible commercial impact: hard dollars saved, shooting days recovered, rework eliminated, release dates protected, and capacity monetized.',
    details: [
      'The foundation of DIGISYNQ pricing and client retention',
      'Proves that coordination is the highest-ROI investment in entertainment',
    ],
  },
];

// ── 34. The Problem Taxonomy (6 Broad Domains) ─────────────────
export interface ProblemDomain {
  id: string;
  name: string;
  tagline: string;
  symptoms: string[];
  rootCauses: string[];
  caseExample: string;
  interventionStrategy: string;
}

export const PROBLEM_TAXONOMY: ProblemDomain[] = [
  {
    id: 'pre-production',
    name: '01. Pre-Production Chaos',
    tagline: 'Unrealistic schedules, loose budgets, unvetted crew assembly',
    symptoms: [
      'Compressed prep timelines due to late financing or script sign-off',
      'Unvetted department heads hired on personal calls without technical verification',
      'Location permits unconfirmed 72 hours before principal photography',
      'Unrealistic scene-to-day ratios in shooting schedule',
    ],
    rootCauses: [
      'Schedule dependency concentration on unconfirmed dates',
      'Lack of synchronized departmental prep schedules',
      'Disconnection between creative scope and actual budget feasibility',
    ],
    caseExample: 'A period drama locks locations before verifying power grid capacity, causing a 4-day electrical refit on set.',
    interventionStrategy: 'Comprehensive pre-flight schedule stress-testing, partner stage verification, and department milestone covenants.',
  },
  {
    id: 'production-schedule',
    name: '02. Production Schedule Ruptures',
    tagline: 'Actor availability shifts, location loss, weather, logistics collapses',
    symptoms: [
      'Lead actor becomes unavailable for 6 days during principal photography',
      'Weather ruins 3 consecutive exterior shooting days',
      'Soundstage tenant extension forces sudden eviction of incoming unit',
      'Turnaround hour violations generating astronomical union/crew overtime',
    ],
    rootCauses: [
      'Rigid linear shooting order with zero dynamic resequencing contingency',
      'Concentrated talent dependencies across sequential scenes',
      'Lack of pre-negotiated standby locations and partner stages',
    ],
    caseExample: 'Lead actor schedule change creates a 10-step cascade ending in missed OTT delivery and $450k in overtime.',
    interventionStrategy: 'SYNQ Cascade Engine simulation, dynamic shooting resequencing, and standby facility routing.',
  },
  {
    id: 'post-production',
    name: '03. Post-Production Bottlenecks',
    tagline: 'Late plates, scope creep, editorial instability, VFX delays, QC rejects',
    symptoms: [
      'Editorial conforms slip by 4 weeks, squeezing VFX and color grading into 10 frantic days',
      'VFX vendor receives uncalibrated camera raw plates without lens distortion grids',
      'Dolby Atmos mix revisions ordered 48 hours before platform master delivery',
      'QC rejects final master for metadata and luminance clipping errors',
    ],
    rootCauses: [
      'Handoff interfaces between set, editorial, and VFX lack standardized technical specs',
      'Editorial cut unlocked during VFX compositing stage',
      'Financing tranches disconnected from deliverable verification',
    ],
    caseExample: 'Late plate turnovers create 80 hours of VFX overtime, leading to skipped final QC and platform rejection.',
    interventionStrategy: 'Strict input quality covenants, locked milestone turnovers, and multi-vendor burst capacity routing.',
  },
  {
    id: 'marketing-disconnects',
    name: '04. Marketing Disconnects',
    tagline: 'Late promotional assets, weak creator activation, audience data gaps',
    symptoms: [
      'Marketing team receives teaser cuts 2 weeks late, missing high-traffic holiday ad windows',
      'Creator activations feel detached from the film narrative and fail to drive ticket presales',
      'Fragmented PR blitz with zero attribution or localized audience density telemetry',
      'Theatrical release clashes against direct competitor genre tentpoles on the same weekend',
    ],
    rootCauses: [
      'Marketing treated as an afterthought in post-production rather than an ongoing synchronized track',
      'No structured asset pipeline between edit room and digital campaign teams',
      'Lack of audience density and pre-demand intelligence',
    ],
    caseExample: 'A mid-budget thriller releases with zero creator activation, dying on screen count within 4 days.',
    interventionStrategy: 'Parallel marketing turnover protocols, creator-narrative matchmaking, and audience density screening clusters.',
  },
  {
    id: 'talent-crew-friction',
    name: '05. Talent & Crew Friction',
    tagline: 'Overlapping bookings, burnout, communication silos, skill mismatches',
    symptoms: [
      'Cinematographer booked on another shoot 3 days before scheduled wrap',
      'Crew fatigue from successive 16-hour turnaround days causing on-set safety hazards',
      'Department heads clashing over uncoordinated schedule changes made without consent',
      'Hiring technicians whose specific equipment knowledge does not match modern volume/camera rigs',
    ],
    rootCauses: [
      'Opaque booking communications with zero shared calendar visibility',
      'Unbalanced crew scheduling prioritizing local shot gains over human sustainability',
      'Absence of verified technician skill profiling',
    ],
    caseExample: 'Key gaffer walks off set following unannounced 18-hour turnaround shift, delaying lighting setup by 1.5 days.',
    interventionStrategy: 'Transparent calendar synchronization, standardized turnaround covenants, and skill-verified crew rosters.',
  },
  {
    id: 'rights-monetization',
    name: '06. Rights & Monetization Leakage',
    tagline: 'Chain-of-title defects, music sync hurdles, delayed recoupment, metadata chaos',
    symptoms: [
      'Music cue sheet inaccuracies blocking global streaming platform acquisition',
      'Underlying book option rights expire 14 days before delivery of final master',
      'Disputes among co-producers over territory licensing percentages',
      'Ancillary monetization (gaming, merchandising, clip licensing) completely unexploited',
    ],
    rootCauses: [
      'Legal and rights agreements treated as administrative paperwork rather than operational constraints',
      'Unsynchronized music licensing agreements during editorial assembly',
      'Complex multi-party contracts without decision traceability',
    ],
    caseExample: 'A soundtrack sync license dispute freezes international theatrical distribution for 9 months.',
    interventionStrategy: 'Pre-flight rights & cue sheet audit, synchronized music clearance workflows, and transparent recoupment ledgers.',
  },
];

// ── 35. The Four Operating Modes ───────────────────────────────
export const OPERATING_MODES = [
  {
    mode: 'MODE 01',
    name: 'DIAGNOSE',
    tagline: 'Identify the Root Cause',
    description: 'Client brings an urgent operational breakdown or bottleneck. DIGISYNQ audits the system graph, decomposes symptoms, identifies true systemic root causes, and delivers an intervention roadmap.',
    deliverable: 'System Root Cause & Intervention Roadmap',
    duration: '24 – 72 Hours',
  },
  {
    mode: 'MODE 02',
    name: 'RESOLVE',
    tagline: 'Coordinate the Live Intervention',
    description: 'DIGISYNQ diagnoses the failure, connects the missing nodes (specialists, facilities, alternatives), coordinates all affected stakeholders, and supervises live execution to resolution.',
    deliverable: 'Executed Resolution & Verified Metric Proof',
    duration: 'Active Project Sprint',
  },
  {
    mode: 'MODE 03',
    name: 'MONITOR',
    tagline: 'Continuous Slate & Project Synchronization',
    description: 'DIGISYNQ monitors an active production, post pipeline, or studio slate. Tracks variances, stress-tests upcoming milestones, and flags emerging bottlenecks before they rupture.',
    deliverable: 'Continuous Telemetry & Early Warning Dispatch',
    duration: 'Project / Slate Retainer',
  },
  {
    mode: 'MODE 04',
    name: 'PREVENT',
    tagline: 'Predictive Cascade Arrest',
    description: 'Using cross-project system memory and pattern models, DIGISYNQ identifies structural failure risks during development and pre-production, designing resilient alternatives that prevent failures entirely.',
    deliverable: 'Resilient Project Architecture & Risk Model',
    duration: 'Pre-Production & Slate Design',
  },
];

// ── 36. 3-Layer Business Architecture ──────────────────────────
export const BUSINESS_ARCHITECTURE_LAYERS = [
  {
    layer: 'Layer 03',
    name: 'INTELLIGENCE',
    role: 'Learn from Reality',
    actions: ['Predict', 'Learn', 'Detect', 'Prevent'],
    desc: 'System memory, failure pattern recognition, predictive risk modeling, and ecosystem intelligence.',
    accent: '#FFFFFF',
  },
  {
    layer: 'Layer 02',
    name: 'ORCHESTRATION',
    role: 'Change Reality',
    actions: ['Connect', 'Match', 'Coordinate', 'Execute'],
    desc: 'Neutral coordination layer, talent/facility matching, multi-stakeholder interface synchronization, and action tracking.',
    accent: '#E4E4E7',
  },
  {
    layer: 'Layer 01',
    name: 'SYSTEM MAPPING',
    role: 'Understand Reality',
    actions: ['Observe', 'Map', 'Diagnose', 'Measure'],
    desc: 'Operational state telemetry, dependency graphs, 5-Why root cause diagnosis, and outcome verification.',
    accent: '#FFFFFF',
  },
];

// ── 41. The 9 Revenue Streams (Built on EERG Root-Cause Architecture) ──
export const REVENUE_STREAMS = [
  {
    id: '01',
    title: '01. Problem-Solving Engagements (BU-02: SYNQ.CASCADE & BU-03: SYNQ.FINISH)',
    tag: 'Direct Service / Sprints',
    description: 'Fixed or milestone-based fees for diagnosing and resolving urgent, high-value production crises, schedule cascades, and post bottlenecks ($25k–$150k).',
    target: 'Producers, Line Producers, Finishing Studios, Completion Bonders',
  },
  {
    id: '02',
    title: '02. Coordination Retainers (BU-02 & BU-06)',
    tag: 'Recurring Retainer',
    description: 'Ongoing synchronization, dependency management, and monitoring for active feature films, series, or multi-day live event operations.',
    target: 'Production Companies, Studios, Streaming Platforms, Festival Promoters',
  },
  {
    id: '03',
    title: '03. Resource & Capacity Matching (BU-01: SYNQ.TALENT)',
    tag: 'Value-Based / Exchange',
    description: 'Value-based fees for successfully connecting verified talent, soundstage dark floors, or post facility turnaround slots ($2,500/mo desk + per-project fees).',
    target: 'Studios, Casting Agencies, Rental Houses, Specialized Vendors',
  },
  {
    id: '04',
    title: '04. Capability Workshops & Labs',
    tag: 'Educational',
    description: 'Professional training programs across 6 specialized industry tracks: camera, digital content, marketing, rights, AI, and creator economy.',
    target: 'Technicians, Directors, Emerging Producers, Aspirants',
  },
  {
    id: '05',
    title: '05. Strategic Operational Advisory',
    tag: 'Advisory',
    description: 'Ecosystem analysis, operational restructuring, and infrastructure design for studios, regional film bodies, and media funds.',
    target: 'Media Groups, Film Commissions, Institutional Funds',
  },
  {
    id: '06',
    title: '06. Enterprise Monitoring (BU-02 & BU-05: SYNQ.RADAR)',
    tag: 'Enterprise Contract',
    description: 'Enterprise-grade predictive audience demand and production monitoring contracts with studios, streamers, completion guarantors, and media funds ($120k–$380k/yr).',
    target: 'Streamers, Completion Bond Companies, Film Lenders, Media PE',
  },
  {
    id: '07',
    title: '07. Technology Platform Subscription (BU-01 to BU-06 SaaS Desks)',
    tag: 'SaaS / Tooling',
    description: 'Software access to proprietary dependency mapping, capacity matching, rights verification, and cascade simulation tooling.',
    target: 'Independent Producers, Department Heads, Post Houses, Rights Holders',
  },
  {
    id: '08',
    title: '08. Rights & Royalty Recovery (BU-04: SYNQ.RIGHTS)',
    tag: 'Audit / Contingency',
    description: 'Catalog chain-of-title verification ($15k/title) and contingency-based international royalty leakage recovery (12% of recaptured black-box royalties).',
    target: 'Catalog Owners, Music Publishers, Private Equity IP Buyout Funds',
  },
  {
    id: '09',
    title: '09. Selective Revenue Participation',
    tag: 'Equity / Backend',
    description: 'Potential equity or backend points in carefully selected productions where DIGISYNQ materially de-risks execution.',
    target: 'Select Independent Features and High-Upside IP',
  },
];

// ── 42. Workshop & Capability System (6 Tracks) ─────────────────
export interface WorkshopTrack {
  id: string;
  code: string;
  name: string;
  category: string;
  scope: string;
  outcomes: string[];
  keyTools: string[];
  format: string;
}

export const WORKSHOP_TRACKS: WorkshopTrack[] = [
  {
    id: 'technical-filmmaking',
    code: 'TRK-01',
    name: 'Technical Filmmaking Fundamentals',
    category: 'Camera & Craft',
    scope: 'Optics, lighting rigs, digital camera workflows, color pipelines on set, production design synchronization.',
    outcomes: [
      'Master cross-department communication between camera, grip, and gaffer teams',
      'Standardize on-set look management (LUTs, CDLs) for seamless post handoff',
      'Optimize turnaround setups and eliminate preventable gear delays',
    ],
    keyTools: ['Arri / RED Systems', 'Color Calibrated DIT Rigs', 'Wireless Monitoring'],
    format: '3-Day Intensive Production Floor Lab',
  },
  {
    id: 'digital-content',
    code: 'TRK-02',
    name: 'High-Velocity Digital Content Creation',
    category: 'Digital Production',
    scope: 'Agile production methods, mobile & cinema hybrid setups, rapid turnaround editorial for digital & OTT platforms.',
    outcomes: [
      'Produce broadcast-quality visual narratives at digital speeds',
      'Establish agile asset tagging and cloud dailies workflows',
      'Manage multi-format aspect ratio deliverables (16:9, 9:16, 1:1)',
    ],
    keyTools: ['Blackmagic Cinema Rigs', 'Cloud Dailies Pipelines', 'High-Speed Editorial'],
    format: 'Weekend Intensive + Project Mentorship',
  },
  {
    id: 'marketing-coordination',
    code: 'TRK-03',
    name: 'Film Marketing & Campaign Synchronization',
    category: 'Audience Strategy',
    scope: 'Asset turn-around coordination, trailer pacing, teaser rollouts, creator network activation, pre-demand audience density.',
    outcomes: [
      'Align marketing asset cutovers directly with post-production milestones',
      'Build authentic creator partnerships tailored to story hooks',
      'Execute localized theatrical screening clusters using audience density signals',
    ],
    keyTools: ['Audience Heatmaps', 'Asset Ledger Platforms', 'Creator Match Matrices'],
    format: '2-Day Strategic Campaign Masterclass',
  },
  {
    id: 'rights-licensing',
    code: 'TRK-04',
    name: 'Chain-of-Title & Rights Awareness',
    category: 'Legal & IP',
    scope: 'Understanding content rights, underlying IP licensing, music sync clearance, and recoupment waterfalls.',
    outcomes: [
      'Audit chain-of-title documentation before filming begins',
      'Negotiate sync licensing and master recording clearance agreements',
      'Structure transparent co-production recoupment waterfalls',
    ],
    keyTools: ['Standardized Cue Sheet Templates', 'Option Agreements', 'Rights Ledger'],
    format: '1-Day Intensive + Legal Clinic Sessions',
  },
  {
    id: 'ai-filmmaking',
    code: 'TRK-05',
    name: 'AI for Filmmaking & Previsualization',
    category: 'Emerging Tech',
    scope: 'Practical generative AI in storyboarding, automatic script breakdown, VFX rotoscoping, voice prep, and pre-vis simulations.',
    outcomes: [
      'Generate dynamic 3D shot animatics in hours instead of weeks',
      'Automate scene element breakdowns and preliminary call orders',
      'Evaluate generative tools safely within legal copyright and guild boundaries',
    ],
    keyTools: ['Midjourney / ComfyUI', 'Unreal Engine Previs', 'AI Breakdown Tools'],
    format: '2-Day Hands-on Tech Lab',
  },
  {
    id: 'creator-economy',
    code: 'TRK-06',
    name: 'Creator Economy for Film Professionals',
    category: 'Career & Monetization',
    scope: 'Audience ownership, personal craft branding, independent distribution channels, and sustainable creator monetization.',
    outcomes: [
      'Build an engaged, loyal audience around craft and storytelling',
      'Monetize unreleased material, masterclasses, and community access',
      'Transition from transactional hire to independent creator-producer',
    ],
    keyTools: ['Direct Community Platforms', 'Digital IP Packaging', 'Audience Analytics'],
    format: 'Weekend Workshop + 30-Day Growth Cohort',
  },
];

// ── 44. Initial Service Product: System Resolution Engagement ───
export const SYSTEM_RESOLUTION_ENGAGEMENT = {
  name: 'DIGISYNQ System Resolution Engagement',
  tagline: 'Bring us a difficult coordination problem. We diagnose the system, identify the root cause, coordinate the solution, and prove the outcome.',
  steps: [
    { num: '01', name: 'DISCOVER', desc: 'Rapid intake of the operational emergency, constraints, and affected stakeholders.' },
    { num: '02', name: 'MAP', desc: 'Construct the living dependency graph showing all downstream impacted nodes.' },
    { num: '03', name: 'DIAGNOSE', desc: 'Deconstruct symptoms down through the 5 Whys to identify true root causes.' },
    { num: '04', name: 'PRIORITIZE', desc: 'Mathematically score interventions by cascade mitigation vs. effort and cost.' },
    { num: '05', name: 'DESIGN INTERVENTION', desc: 'Select strategy from 13 intervention classes (resequence, add capacity, reallocate).' },
    { num: '06', name: 'CONNECT', desc: 'Locate and activate missing talent, soundstages, or technical facilities.' },
    { num: '07', name: 'COORDINATE', desc: 'Align stakeholders across new covenants, schedules, and deliverables.' },
    { num: '08', name: 'EXECUTE', desc: 'Supervise live deployment with assigned owners, deadlines, and verification tests.' },
    { num: '09', name: 'VERIFY', desc: 'Measure outcomes: days recovered, cost avoided, rework eliminated, delivery secured.' },
    { num: '10', name: 'DOCUMENT LEARNING', desc: 'Store case in system memory to permanently prevent recurrence on future slates.' },
  ],
  outputs: [
    'Days recovered and schedule stabilized',
    'Unbudgeted overtime and facility penalties avoided',
    'Downstream delivery windows and release dates protected',
    'Institutional learning stored in system memory',
  ],
};

// ── 48. The 13 Intervention Classes ────────────────────────────
export const INTERVENTION_CLASSES = [
  { name: 'REPLACE', desc: 'Swap an unavailable, deficient, or non-performing resource with a vetted alternative.' },
  { name: 'RESEQUENCE', desc: 'Alter the chronological order of scenes, setups, or department turn-overs.' },
  { name: 'REALLOCATE', desc: 'Shift internal budget, floor space, or personnel from low-impact to critical-path nodes.' },
  { name: 'ADD', desc: 'Inject temporary burst capacity (second-unit crew, additional compositing house) to absorb backlog.' },
  { name: 'REMOVE', desc: 'Eliminate a redundant dependency, unnecessary approval loop, or non-critical setup.' },
  { name: 'DELAY', desc: 'Intentionally defer a low-consequence milestone to preserve critical-path focus.' },
  { name: 'ACCELERATE', desc: 'Compress execution time on high-confidence setups using parallel workflows.' },
  { name: 'COMBINE', desc: 'Merge related shoots, turn-overs, or sound/color reviews into unified sessions.' },
  { name: 'SPLIT', desc: 'Divide an unwieldy block (e.g. 200 VFX shots) across multiple specialized vendor houses.' },
  { name: 'OUTSOURCE', desc: 'Offload specialized tasks (cleanup, dubbing localization) to qualified external partners.' },
  { name: 'SUBSTITUTE', desc: 'Use an alternative location, technical rig, or virtual volume to bypass a blocker.' },
  { name: 'NEGOTIATE', desc: 'Reconcile overlapping commitments or platform delivery covenants directly between parties.' },
  { name: 'ESCALATE', desc: 'Trigger high-level human review for critical creative, legal, or financial decisions.' },
];

// ── 53. The Interactive Tree Pipeline / Root Map (13 Steps) ─────
export const TREE_PIPELINE_STEPS = [
  { step: '01', question: 'I HAVE A PROBLEM', prompt: 'What broad breakdown is occurring?', options: ['Schedule Slip', 'Department Bottleneck', 'Budget Overrun', 'Vendor Blocker'] },
  { step: '02', question: 'WHAT KIND?', prompt: 'Select primary taxonomy classification:', options: ['Pre-Production Chaos', 'Production Schedule Rupture', 'Post Bottleneck', 'Marketing Disconnect', 'Talent Friction', 'Rights Leakage'] },
  { step: '03', question: 'WHERE?', prompt: 'Which stage of the continuum is affected?', options: ['Idea', 'Development', 'Pre-Production', 'Production', 'Post-Production', 'Marketing', 'Distribution'] },
  { step: '04', question: 'WHO IS AFFECTED?', prompt: 'Primary stakeholders in the blast radius:', options: ['Producer & Line Producer', 'Director & Cinematographer', 'Post & VFX Vendors', 'Distributor & Platform'] },
  { step: '05', question: 'WHAT DEPENDS ON IT?', prompt: 'Immediate downstream blockers:', options: ['Shooting Schedule', 'Stage Booking', 'Editorial Turnover', 'Platform Delivery Window'] },
  { step: '06', question: 'WHY?', prompt: 'First order cause:', options: ['Resource Unavailable', 'Unrealistic Scope', 'Late Information', 'Technical Failure'] },
  { step: '07', question: 'ROOT CAUSE', prompt: 'Systemic underlying failure:', options: ['Schedule Dependency Concentration', 'Input Quality Defect', 'Unsynchronized Milestones', 'Lack of Redundancy'] },
  { step: '08', question: 'WHAT CAN CHANGE?', prompt: 'Malleable constraints:', options: ['Sequence Order', 'Vendor Assignment', 'Burst Capacity', 'Scene Allocation'] },
  { step: '09', question: 'WHAT OPTIONS EXIST?', prompt: 'Simulated intervention candidates:', options: ['Scenario A (Resequence)', 'Scenario B (Burst Capacity)', 'Scenario C (Substitute Location)'] },
  { step: '10', question: 'WHICH OPTION IS BEST?', prompt: 'Optimal score by (Impact × Urgency) / (Cost):', options: ['Scenario A: Optimal (9.4/10)', 'Scenario B: Expensive (6.2/10)', 'Scenario C: Disruptive (5.1/10)'] },
  { step: '11', question: 'WHO MUST CONNECT?', prompt: 'Required interface bridge:', options: ['Director ↔ 1st AD ↔ Line Producer', 'Editorial ↔ VFX Lead ↔ Colorist', 'Producer ↔ Platform Exec'] },
  { step: '12', question: 'WHAT ACTION IS REQUIRED?', prompt: 'Executable protocol with owner and deadline:', options: ['Deploy Revised Call Sheet #14B', 'Contract Burst VFX House B', 'Execute Conform Spec Revision'] },
  { step: '13', question: 'DID IT WORK?', prompt: 'Verification metrics verified:', options: ['Days Recovered: 5.5', 'Cost Avoided: $84,000', 'QC Passed on First Attempt'] },
];

// ── 56. The 8-Layer Competitive Moat ───────────────────────────
export const COMPETITIVE_MOAT_LAYERS = [
  { num: '01', title: 'System Knowledge', desc: 'Structured taxonomy of recurring entertainment coordination failures.' },
  { num: '02', title: 'Dependency Graph', desc: 'Deep mathematical understanding of how filmmaking stages and stakeholders interact.' },
  { num: '03', title: 'Outcome History', desc: 'Empirical database of which intervention strategies consistently succeed.' },
  { num: '04', title: 'Trust Network', desc: 'Vetted roster of reputable professionals, rental houses, and finishing facilities.' },
  { num: '05', title: 'Capacity Network', desc: 'Real-time knowledge of unbooked soundstage floors and technician availability.' },
  { num: '06', title: 'Reputation Graph', desc: 'Observed reliability and schedule-adherence metrics over superficial ratings.' },
  { num: '07', title: 'Workflow Intelligence', desc: 'Accumulated operational patterns spanning hundreds of independent productions.' },
  { num: '08', title: 'Predictive Models', desc: 'Proprietary early-warning algorithms that identify cascade risks weeks in advance.' },
];

// ── 57 & 58. Roadmap & Business Evolution ──────────────────────
export const ROADMAP_PHASES = [
  {
    phase: 'PHASE 1',
    name: 'Human-Led Problem Resolution',
    focus: 'Problem-solving engagements, high-touch coordination, capability workshops, and ecosystem mapping.',
    goal: 'Prove customers will eagerly pay to resolve high-value, expensive coordination crises.',
    status: 'ACTIVE',
  },
  {
    phase: 'PHASE 2',
    name: 'Tool-Assisted System Capture',
    focus: 'Project mapping software, living dependency graphs, capacity database, and intervention ledgers.',
    goal: 'Transform manual consulting insights into structured system knowledge.',
    status: 'IN PROGRESS',
  },
  {
    phase: 'PHASE 3',
    name: 'Automate Repetition & Matching',
    focus: 'Real-time telemetry alerts, automated schedule reconciliation, algorithmic capacity matching, scenario simulation.',
    goal: 'Reduce manual coordination overhead and accelerate response times.',
    status: 'PLANNED',
  },
  {
    phase: 'PHASE 4',
    name: 'Build Intelligence & Prediction',
    focus: 'Pattern engine, predictive cascade analysis, recommendation algorithms, system memory compounding.',
    goal: 'Predict and arrest bottlenecks before they become expensive emergencies.',
    status: 'PLANNED',
  },
  {
    phase: 'PHASE 5',
    name: 'Universal Entertainment Infrastructure',
    focus: 'Industry APIs, studio enterprise monitoring, cross-platform synchronization, ecosystem interoperability.',
    goal: 'Become the neutral synchronization layer for global entertainment.',
    status: 'VISION',
  },
];

// ── 59. Canonical Operating Model (Core System & Public Explanation) ───────────
export interface CoreChainStage {
  step: string;
  name: string;
  category: 'SURFACE' | 'SYSTEMIC' | 'RESOLUTION' | 'IMMUNITY';
  definition: string;
  example: string;
  interrogation: string;
}

export const CORE_OPERATING_CHAIN: CoreChainStage[] = [
  {
    step: '01',
    name: 'PROBLEM',
    category: 'SURFACE',
    definition: 'The overarching breakdown or schedule disruption threatening production viability.',
    example: 'Principal photography on Stage 3 is 4 days behind with an immovable release window.',
    interrogation: 'What is the immediate crisis threatening the project?',
  },
  {
    step: '02',
    name: 'SYMPTOM',
    category: 'SURFACE',
    definition: 'The observable surface alarm or warning flag visible to department heads.',
    example: 'Standby camera packages idling at $18k/day; soundstage eviction notice issued.',
    interrogation: 'What is visibly failing or sounding an alarm right now?',
  },
  {
    step: '03',
    name: 'EVENT',
    category: 'SURFACE',
    definition: 'The specific chronological rupture or milestone failure that triggered the alarm.',
    example: 'Lead actor call sheet shifted by 6 days due to uncoordinated shooting order revision.',
    interrogation: 'What specific event or milestone slip occurred?',
  },
  {
    step: '04',
    name: 'CONDITION',
    category: 'SYSTEMIC',
    definition: 'The structural environmental vulnerability or lack of elasticity that enabled the shock.',
    example: 'Zero buffer days in stage turnover schedule; rigid back-to-back tenant handover.',
    interrogation: 'What fragile conditions allowed this shock to create systemic chaos?',
  },
  {
    step: '05',
    name: 'DEPENDENCY',
    category: 'SYSTEMIC',
    definition: 'The interconnected critical-path links that propagate the failure downstream.',
    example: 'Stage turn depends on lighting teardown → depends on VFX plate wrap → depends on lead actor.',
    interrogation: 'What downstream departments and milestones are bound to this node?',
  },
  {
    step: '06',
    name: 'ROOT CAUSE',
    category: 'SYSTEMIC',
    definition: 'The underlying structural or behavioral origin — unhedged by local triage.',
    example: 'Script rewrite injected 4 practical stunt setups without recalculating turnaround rest hours.',
    interrogation: 'Why did the condition exist in the first place?',
  },
  {
    step: '07',
    name: 'MISSING CAPABILITY',
    category: 'SYSTEMIC',
    definition: 'The precise operational asset, legal covenant, or capacity absent from the production.',
    example: 'Dynamic scene clustering capability and overflow access to an adjacent dark-floor stage.',
    interrogation: 'What specific capability, tool, or resource was missing to handle this?',
  },
  {
    step: '08',
    name: 'INTERVENTION',
    category: 'RESOLUTION',
    definition: 'The structured, time-bounded SYNQ protocol executed with single-point accountability.',
    example: 'Resequence interior dialogue scenes to Stage 4 dark floor; re-cluster exterior stunt units.',
    interrogation: 'What structured intervention arrests the cascade and restores buffer?',
  },
  {
    step: '09',
    name: 'OUTCOME',
    category: 'RESOLUTION',
    definition: 'The deterministic, verifiable delta produced compared to uncoordinated failure.',
    example: '5.5 schedule buffer days recovered; $84,000 in idle gear and stage penalties avoided.',
    interrogation: 'What verified value, days, or capital were saved?',
  },
  {
    step: '10',
    name: 'LEARNING',
    category: 'IMMUNITY',
    definition: 'The systemic codification of the failure signature and effective remediation path.',
    example: 'Script rewrite impact coefficient logged; turnaround buffer covenants codified.',
    interrogation: 'What institutional insight was extracted from this resolution?',
  },
  {
    step: '11',
    name: 'PREVENTION',
    category: 'IMMUNITY',
    definition: 'The automated guardrail or telemetry rule that prevents identical recurrence.',
    example: 'Algorithmic early-warning flag triggers if stunt rewrite occurs within 14 days of camera roll.',
    interrogation: 'How does the DigiSynq system permanently prevent this failure across the network?',
  },
];

export interface PublicExplanationStage {
  step: string;
  name: string;
  tagline: string;
  input: string;
  action: string;
  output: string;
  next: string;
  iconName: string;
}

export const PUBLIC_EXPLANATION_STAGES: PublicExplanationStage[] = [
  {
    step: '01',
    name: 'SENSE',
    tagline: 'Continuous Ecosystem Telemetry',
    input: 'Daily production reports, dark-floor stage logs, crew call sheets, budget burn curves.',
    action: 'Continuously ingest operational signals across all 9 continuum stages without manual friction.',
    output: 'Normalized telemetry timeline with early anomaly detection and variance flags.',
    next: '02 DIAGNOSE',
    iconName: 'Eye',
  },
  {
    step: '02',
    name: 'DIAGNOSE',
    tagline: 'Root-Cause Decomposition',
    input: 'Anomaly flag or reported operational friction (e.g. stage eviction warning).',
    action: 'Decompose surface symptoms across 6 problem domains to isolate actual structural cause.',
    output: 'Classified root failure: unhedged script rewrite vs permit delay vs crew turn.',
    next: '03 MAP',
    iconName: 'Search',
  },
  {
    step: '03',
    name: 'MAP',
    tagline: 'Multi-Party Blast Radius',
    input: 'Identified root cause and affected production milestones.',
    action: 'Traverse the entertainment dependency graph to calculate cascade blast radius across downstream nodes.',
    output: 'Visualized dependency graph linking downstream VFX plates, stages, and talent locks.',
    next: '04 SYNQ',
    iconName: 'GitBranch',
  },
  {
    step: '04',
    name: 'SYNQ',
    tagline: 'Structured Intervention Execution',
    input: 'Blast radius map, missing capability specification, and network availability constraints.',
    action: 'Match and route demand to verified partner capacity; execute time-bounded sprint under SLA covenants.',
    output: 'Executed operational intervention: partner dark stage activated, burst VFX deployed, scene resequenced.',
    next: '05 CONTROL',
    iconName: 'Zap',
  },
  {
    step: '05',
    name: 'CONTROL',
    tagline: 'Deterministic Value & System Memory',
    input: 'Post-intervention timeline, verified delivery checks, and post-sprint milestones.',
    action: 'Audit real outcomes against counterfactual baseline; deposit resolution pattern into System Memory.',
    output: 'Verified System Value Created (days & dollars saved) + automated prevention guardrail.',
    next: '01 SENSE (Continuous Lifecycle Feedback)',
    iconName: 'ShieldCheck',
  },
];
