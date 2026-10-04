// ============================================================
// DIGISYNQ3 MASTER SYSTEM ARCHITECTURE DATA
// Pure Systems Logic · Asset-Light Entertainment Coordination
// ============================================================

export type EvidenceStatus = 'Observed' | 'Stakeholder claim' | 'Hypothesis' | 'Inference' | 'Validated';

export type EcosystemLayerId = 'CREATION' | 'PRODUCTION' | 'COMMERCIAL' | 'INFRASTRUCTURE' | 'CONSUMPTION';

// ── 01. ECOSYSTEM 5-LAYER TAXONOMY ────────────────────────────
export interface EcosystemSubNode {
  id: string;
  name: string;
  title: string;
  role: string;
  whatItNeeds: string[];
  whatItProvides: string[];
  dependencies: string[];
  riskIfUncoordinated: string;
  digisynqIntervention: string;
}

export interface EcosystemLayer {
  id: EcosystemLayerId;
  name: string;
  tagline: string;
  description: string;
  subNodes: EcosystemSubNode[];
}

export const ECOSYSTEM_5_LAYERS: EcosystemLayer[] = [
  {
    id: 'CREATION',
    name: 'Creation',
    tagline: 'Origination, narrative conception, direction & aesthetic vision',
    description: 'The creative inception tier where intellectual property, scripts, directorial vision, musical composition, and creative talent originate before any capital or production equipment is committed.',
    subNodes: [
      {
        id: 'creators',
        name: 'Showrunners & Creators',
        title: 'Original IP & Narrative Architects',
        role: 'Develop series bibles, world logic, and long-arc story structures.',
        whatItNeeds: ['Market viability intelligence', 'Writer room availability', 'Development capital'],
        whatItProvides: ['Original IP concepts', 'Character architectures', 'Pilot scripts'],
        dependencies: ['Finance', 'Writers', 'Producers'],
        riskIfUncoordinated: 'Months spent in speculative development without commercial route to greenlight.',
        digisynqIntervention: 'Aggregates audience appetite signals and distributor buyer mandates early.',
      },
      {
        id: 'writers',
        name: 'Screenwriters & Script Dept',
        title: 'Dialogue, Scene Structure & Revision Engine',
        role: 'Write drafts, execute network/studio notes, and provide shooting script polishes.',
        whatItNeeds: ['Clear creative brief', 'Production budget constraints', 'Milestone payment compliance'],
        whatItProvides: ['Production-ready scripts', 'Character dialogue', 'Revision tracking'],
        dependencies: ['Creators', 'Directors', 'Producers'],
        riskIfUncoordinated: 'Writing unproduceable sequences requiring costly emergency set-side rewrites.',
        digisynqIntervention: 'Connects screenplay elements directly to budget and production feasibility parameters.',
      },
      {
        id: 'directors',
        name: 'Directors & Visual Storytellers',
        title: 'Aesthetic Authority & Execution Leads',
        role: 'Translate text into visual language, direct talent, and determine camera choreography.',
        whatItNeeds: ['Cast availability locks', 'Technical crew parity', 'Location access commitments'],
        whatItProvides: ['Visual treatment', 'Shot lists', 'Floor leadership', 'Director’s cut'],
        dependencies: ['Cast', 'Cinematographers', 'Producers', 'Locations'],
        riskIfUncoordinated: 'Shot-list ambition outstrips stage hours, triggering exponential daily overtime.',
        digisynqIntervention: 'Orchestrates real-time setup time benchmarking against shoot days.',
      },
      {
        id: 'artists',
        name: 'Concept Artists & Art Directors',
        title: 'Visual Worldbuilders & Production Designers',
        role: 'Establish color keys, environment sketches, vehicle designs, and physical set blueprints.',
        whatItNeeds: ['Director aesthetic approval', 'Construction lead time', 'Budget limits'],
        whatItProvides: ['Concept art', 'Set schematics', 'Prop designs', 'Costume palettes'],
        dependencies: ['Directors', 'Studios & Soundstages', 'Construction Crew'],
        riskIfUncoordinated: 'Late concept handoffs force double-time stage construction and premium material surcharges.',
        digisynqIntervention: 'Pre-matches concept designs with existing modular stage assets and standing sets.',
      },
      {
        id: 'music',
        name: 'Composers & Music Supervisors',
        title: 'Sonic Branding, Score & Rights Clearing',
        role: 'Compose original thematic scores, source commercial tracks, and clear sync licenses.',
        whatItNeeds: ['Locked picture edit', 'Sync clearance budget', 'Licensee agreements'],
        whatItProvides: ['Original score', 'Master audio deliverables', 'Music rights cue sheets'],
        dependencies: ['Directors', 'Editors', 'Rights Holders', 'Finance'],
        riskIfUncoordinated: 'Unresolved sync clearances stall festival submission or commercial distribution.',
        digisynqIntervention: 'Orchestrates pre-cleared catalog matching and automated sync cue-sheet generation.',
      },
    ],
  },
  {
    id: 'PRODUCTION',
    name: 'Production',
    tagline: 'Execution physical infrastructure, logistics, human crew & technical assets',
    description: 'The capital-intensive execution phase where cameras roll, physical assets mobilize, and every minute of delay multiplies unrecoverable burn rate across dozens of interdependent departments.',
    subNodes: [
      {
        id: 'producers',
        name: 'Producers & Line Management',
        title: 'Fiscal, Operational & Legal Custodians',
        role: 'Package projects, secure completion bonds, manage union covenants, and control cash flow.',
        whatItNeeds: ['Milestone debt/equity draws', 'Reliable crew turnarounds', 'Transparent cost logs'],
        whatItProvides: ['Greenlit schedule', 'Payroll authority', 'Bond compliance', 'Finished negative'],
        dependencies: ['Finance', 'Bond Companies', 'Crew Heads', 'Facilities'],
        riskIfUncoordinated: 'Unbudgeted cascade costs deplete contingency before wrap, risking bond takeover.',
        digisynqIntervention: 'Predictive variance tracking that highlights dependency friction before cost locks.',
      },
      {
        id: 'crew',
        name: 'Technical Crew & Guild Specialists',
        title: 'Department Technicians & Craftspeople',
        role: 'Gaffers, grips, sound recordists, camera operators, costume, makeup, and hair professionals.',
        whatItNeeds: ['Predictable call times', 'Certified safety standards', 'Guild rest compliance'],
        whatItProvides: ['Technical execution', 'High-fidelity audio/visual capture', 'Rapid set turns'],
        dependencies: ['Producers', 'Equipment Packages', 'Locations', 'Studios'],
        riskIfUncoordinated: 'Turnaround breaches lead to union grievance penalties and exhausted crew safety risks.',
        digisynqIntervention: 'Dynamic turnaround monitoring and verified guild credential indexing.',
      },
      {
        id: 'equipment',
        name: 'Camera, Lighting & Grip Packages',
        title: 'Physical Capture Equipment & Dark Capacity',
        role: 'High-end cinema optics, digital sensor bodies, robotic rigs, LED walls, and mobile generators.',
        whatItNeeds: ['Accurate prep days', 'Certified operators', 'Insured transport & maintenance'],
        whatItProvides: ['Capture capability', 'Optical consistency', 'On-set power infrastructure'],
        dependencies: ['Rental Houses', 'Cinematographers', 'Logistics Vendors'],
        riskIfUncoordinated: 'Gear sits idle in warehouse generating storage cost, or arrives on set with missing sub-cables.',
        digisynqIntervention: 'Transforms idle rental house inventory into bookable capacity with verified prep manifests.',
      },
      {
        id: 'locations',
        name: 'Physical Locations & Municipal Backdrops',
        title: 'Real-World Spaces & Municipal Permitting',
        role: 'Historic estates, civic streets, desert plains, industrial warehouses, and private estates.',
        whatItNeeds: ['Noise permits', 'Insurance certificates', 'Community curfew approvals'],
        whatItProvides: ['Authentic visual backdrop', 'Basecamp parking', 'Staging footprint'],
        dependencies: ['Permit Offices', 'Location Managers', 'Transportation Dept'],
        riskIfUncoordinated: 'Revoked municipal permit halts 120-person unit on shoot morning ($80k+ loss).',
        digisynqIntervention: 'Real-time backup location routing with pre-vetted indemnity and municipal clearances.',
      },
      {
        id: 'studios',
        name: 'Soundstages & Production Facilities',
        title: 'Acoustically Controlled Stages & Volume Stages',
        role: 'Soundproofed stages, mill workshops, paint shops, hair/makeup suites, and production offices.',
        whatItNeeds: ['Firm load-in dates', 'Power grid capacity', 'Grid weight rigging engineering'],
        whatItProvides: ['Weather-independent shooting', 'Acoustic isolation', 'Overhead rigging grid'],
        dependencies: ['Stage Operators', 'Electric Dept', 'Rigging Grips'],
        riskIfUncoordinated: 'Unannounced production delay leaves stage dark with non-refundable cancellation fee.',
        digisynqIntervention: 'Asset-light stage marketplace indexing dark slots for quick-turn burst productions.',
      },
    ],
  },
  {
    id: 'COMMERCIAL',
    name: 'Commercial',
    tagline: 'Capital allocation, licensing, monetization, distribution & marketing',
    description: 'The economic engine that funds production, secures territory distribution, values underlying rights, and activates audience discovery to recoup investments and generate profits.',
    subNodes: [
      {
        id: 'finance',
        name: 'Capital & Production Financing',
        title: 'Debt Facilities, Equity Funds & Tax Credit Lenders',
        role: 'Structure senior debt, gap financing, soft money tax credits, and mezzanine capital.',
        whatItNeeds: ['Pre-sales commitments', 'Completion guarantor bond', 'Audited chain of title'],
        whatItProvides: ['Production escrow cashflow', 'Credit facilities', 'Tax rebate monetization'],
        dependencies: ['Producers', 'Distributors', 'Legal & Rights Counsel'],
        riskIfUncoordinated: 'Cashflow milestones misalign with shooting dates, halting payroll and voiding union bonds.',
        digisynqIntervention: 'Milestone-based escrow verification linked directly to production delivery telemetry.',
      },
      {
        id: 'distribution',
        name: 'Distribution & Sales Agents',
        title: 'Territory Licensing, Theatrical Bookings & Streamer Sales',
        role: 'Package theatrical windows, foreign territory rights, AVOD/SVOD licenses, and airline rights.',
        whatItNeeds: ['Delivered master QC files', 'Clearance chain-of-title', 'Marketing key art'],
        whatItProvides: ['Territory minimum guarantees', 'Theatrical screen commitments', 'Platform placement'],
        dependencies: ['Producers', 'Post-Production Facilities', 'Exhibitors'],
        riskIfUncoordinated: 'Missed delivery window voids festival premiere or foreign release commitment.',
        digisynqIntervention: 'Coordinates multi-format delivery workflows directly between post and distributor QC specs.',
      },
      {
        id: 'marketing',
        name: 'Marketing & Brand Campaigners',
        title: 'Audience Acquisition, Trailers & PR Campaigns',
        role: 'Produce teaser trailers, manage social sentiment, organize press junkets, and buy media.',
        whatItNeeds: ['EPK behind-the-scenes assets', 'Talent press availability', 'Key art approvals'],
        whatItProvides: ['Audience awareness', 'Trailer impressions', 'Opening weekend momentum'],
        dependencies: ['Talent Publicists', 'Distributors', 'Media Buyers'],
        riskIfUncoordinated: 'Marketing spend activates months before theatrical release due to unhedged post slip.',
        digisynqIntervention: 'Synchronizes marketing spend ramps with verified post-production delivery milestones.',
      },
      {
        id: 'advertising',
        name: 'Sponsors & Brand Partnerships',
        title: 'Product Placement & Commercial Integration',
        role: 'Facilitate authentic in-content brand integrations, co-promotional marketing, and sponsorship fees.',
        whatItNeeds: ['Script integration approval', 'Clear brand visibility guarantees', 'Release date certainty'],
        whatItProvides: ['Non-dilutive production financing', 'Co-branded marketing reach'],
        dependencies: ['Producers', 'Brand Managers', 'Legal'],
        riskIfUncoordinated: 'Edited scene cuts out sponsor product after fee collected, resulting in legal breach.',
        digisynqIntervention: 'Tracks brand deliverable requirements directly inside the editorial and post pipeline.',
      },
    ],
  },
  {
    id: 'INFRASTRUCTURE',
    name: 'Infrastructure',
    tagline: 'Technical backbone, cloud compute, specialized labs & decision data',
    description: 'The physical and computational backbone that moves terabytes of footage, renders visual effects, standardizes metadata, and preserves institutional intelligence across disparate productions.',
    subNodes: [
      {
        id: 'technology',
        name: 'Cloud Compute, Rendering & DIT',
        title: 'High-Throughput Digital Pipeline & Color Pipelines',
        role: 'On-set DIT checksum offload, cloud GPU rendering, editorial proxy pipelines, and ACES color.',
        whatItNeeds: ['Standardized naming conventions', 'High-bandwidth connectivity', 'Encrypted storage'],
        whatItProvides: ['Data redundancy', 'Rapid daily proxies', 'Distributed VFX render nodes'],
        dependencies: ['Camera Dept', 'Post Supervisors', 'Cloud Providers'],
        riskIfUncoordinated: 'Corrupted offload drive discovered 3 days later after location has been struck.',
        digisynqIntervention: 'Automated cryptographic checksum verification from card reader to cloud archive.',
      },
      {
        id: 'platforms',
        name: 'Workflow Software & Operating Systems',
        title: 'Scheduling, Budgeting & Payroll SaaS Solutions',
        role: 'Host call sheets, digital start paperwork, production accounting, and timecards.',
        whatItNeeds: ['Standardized schema inputs', 'API interoperability', 'Enterprise security'],
        whatItProvides: ['Operational record of truth', 'Audited payroll flows', 'Digital compliance'],
        dependencies: ['Crew Union Rules', 'Accounting Teams', 'Vendors'],
        riskIfUncoordinated: 'Information siloed across 8 separate incompatible software tools requiring manual re-entry.',
        digisynqIntervention: 'Unified synchronization layer bridging legacy software tools into one live graph.',
      },
      {
        id: 'facilities',
        name: 'Sound Mix, Color Grading & Finishing Labs',
        title: 'Post-Production Master Finishing Suites',
        role: 'Dolby Atmos theatrical mix stages, Baselight HDR color mastering suites, and archival QC vaults.',
        whatItNeeds: ['Turnover edit locks', 'Clean VFX plates', 'Standardized audio stems'],
        whatItProvides: ['Theatrical DCPs', 'IMF broadcast packages', 'Dolby Vision master metadata'],
        dependencies: ['Editorial Dept', 'VFX Vendors', 'Sound Designers'],
        riskIfUncoordinated: 'Late VFX plate deliveries bottleneck expensive Dolby Atmos mixing stage bookings.',
        digisynqIntervention: 'Orchestrates modular finishing schedules that flex dynamically around deliverable batches.',
      },
      {
        id: 'data',
        name: 'Market Intelligence & Decision Data',
        title: 'Ecosystem Telemetry, Rate Cards & Availability Indexes',
        role: 'Compile historical crew rates, stage utilization rates, geographic tax incentives, and failure patterns.',
        whatItNeeds: ['Operational telemetry inputs', 'Privacy-compliant anonymization', 'Real-world validation'],
        whatItProvides: ['Benchmarked decision insights', 'Fair market pricing', 'Failure risk scoring'],
        dependencies: ['Historical Productions', 'Guild Catalogs', 'Financial Audits'],
        riskIfUncoordinated: 'Decisions made on anecdotal hearsay resulting in 30% premium payments and poor vendor matching.',
        digisynqIntervention: 'Feeds continuous operational data back into the EERG root-cause engine.',
      },
    ],
  },
  {
    id: 'CONSUMPTION',
    name: 'Consumption',
    tagline: 'Exhibition screens, streaming platforms, interactive games & audiences',
    description: 'The endpoint of value realization where the finished work meets audience attention, generating box office revenues, subscription retention, licensing royalties, and cultural resonance.',
    subNodes: [
      {
        id: 'audiences',
        name: 'Global Audiences & Viewer Communities',
        title: 'Attention Capital, Cultural Taste & Word-of-Mouth',
        role: 'Consume content, rate titles, generate social velocity, and pay ticket/subscription fees.',
        whatItNeeds: ['Discoverable content', 'Seamless viewing experience', 'Compelling cultural relevance'],
        whatItProvides: ['Revenue', 'Viewing telemetry', 'Fan engagement and franchise longevity'],
        dependencies: ['Exhibitors', 'Streaming Platforms', 'Marketing'],
        riskIfUncoordinated: 'Content fails to find its natural audience due to generic or misdirected release windows.',
        digisynqIntervention: 'Feeds real audience affinity signals back to creation and packaging tiers.',
      },
      {
        id: 'theatres',
        name: 'Theatrical Exhibitors & Cinema Circuits',
        title: 'Physical Big-Screen Communal Experience',
        role: 'Operate premium format screens (IMAX, Dolby Cinema), sell concessions, and curate showtimes.',
        whatItNeeds: ['Exclusive theatrical window', 'Marketing support', 'High-profile tentpole IP'],
        whatItProvides: ['Communal cultural event', 'High-margin box office split', 'Per-screen average telemetry'],
        dependencies: ['Distributors', 'Projection Tech Vendors', 'Audiences'],
        riskIfUncoordinated: 'Sudden release date shift leaves exhibitor screens empty or forced into suboptimal counter-programming.',
        digisynqIntervention: 'Coordinates multi-party theatrical release windows with real-time screen occupancy data.',
      },
      {
        id: 'ott',
        name: 'OTT Streaming Platforms & AVOD/FAST Channels',
        title: 'Digital Subscription & Ad-Supported Streaming Services',
        role: 'License catalogs, commission originals, personalize algorithmic home screens, and retain subscribers.',
        whatItNeeds: ['High retention content', 'Strict technical IMF deliveries', 'Predictable cadence of releases'],
        whatItProvides: ['Global instantaneous distribution', 'Subscribed recurring revenue', 'Granular viewing telemetry'],
        dependencies: ['Content Distributors', 'Finishing Facilities', 'CDN Infrastructure'],
        riskIfUncoordinated: 'Subscriber churn spikes when release pipeline suffers production-induced gaps.',
        digisynqIntervention: 'Connects indie and mid-budget productions directly to platform buyer gap requirements.',
      },
      {
        id: 'gaming',
        name: 'Interactive Gaming & Virtual Worlds',
        title: 'Transmedia Adaptations, Engine Assets & Real-Time IP',
        role: 'Adapt film/TV IP into immersive gameplay, utilize Unreal Engine virtual assets, and host live events.',
        whatItNeeds: ['High-fidelity 3D assets', 'Voice actor clearances', 'Narrative canon alignment'],
        whatItProvides: ['Active interactive engagement', 'Microtransaction monetization', 'Youth audience loyalty'],
        dependencies: ['Game Engines', 'Creators', 'Rights Holders'],
        riskIfUncoordinated: 'Game release misaligned with film launch, forfeiting 70% of cross-promotional lift.',
        digisynqIntervention: 'Enables dual-use digital asset pipelines bridging linear production and real-time game engines.',
      },
      {
        id: 'live',
        name: 'Live Experiences & Themed Entertainment',
        title: 'Concerts, Immersive Pop-Ups & Theme Parks',
        role: 'Translate cinematic worlds into real-world physical attractions, tours, and experiential exhibits.',
        whatItNeeds: ['Physical venue infrastructure', 'Brand safety guidelines', 'Touring logistics'],
        whatItProvides: ['High ticket price capture', 'Direct merchandise sales', 'Lifelong brand loyalty'],
        dependencies: ['Venues', 'Performers', 'Rights Holders'],
        riskIfUncoordinated: 'Tour logistics run into venue booking overlaps and customs clearance freight snarls.',
        digisynqIntervention: 'Orchestrates multi-city live tour asset logistics using asset-light localized suppliers.',
      },
    ],
  },
];

// ── 02. FAILURE PROPAGATION CHAIN ──────────────────────────────
export interface FailureChainNode {
  step: number;
  id: string;
  label: string;
  trigger: string;
  cascadeEffect: string;
  stakeholdersHit: string[];
  economicMultiplier: string;
  digisynqMitigation: string;
}

export const FAILURE_PROPAGATION_CHAIN: FailureChainNode[] = [
  {
    step: 1,
    id: 'actor-unavailable',
    label: 'ACTOR UNAVAILABLE',
    trigger: 'A-list lead suffers medical emergency or contractual scheduling conflict on another shoot.',
    cascadeEffect: 'Planned primary dialogue scenes for Days 14–22 cannot be shot as scheduled.',
    stakeholdersHit: ['Lead Talent', 'Director', '1st AD', 'Producers'],
    economicMultiplier: 'Baseline Variance ($15k triage cost)',
    digisynqMitigation: 'Algorithm immediately flags immovable hard-out date and models 2nd unit coverage alternatives.',
  },
  {
    step: 2,
    id: 'production-delay',
    label: 'PRODUCTION DELAY',
    trigger: '1st AD and Line Producer scramble to resequence call sheets without lead actor.',
    cascadeEffect: 'Shooting halts for 36 hours while script supervisor and director reshuffle scenes.',
    stakeholdersHit: ['Producers', '1st AD', 'Line Producer', 'Bond Company'],
    economicMultiplier: '2.5x Cost Multiplier ($60k idle day cost)',
    digisynqMitigation: 'Auto-generates alternative scene-cluster shooting sequences maximizing remaining cast availability.',
  },
  {
    step: 3,
    id: 'location-cancellation',
    label: 'LOCATION CANCELLATION',
    trigger: 'Historic heritage bank location booked for 3 days cannot be used due to date shift.',
    cascadeEffect: 'Location permit expires; owners have another event booked next week. Site forfeited.',
    stakeholdersHit: ['Location Manager', 'Municipal Film Office', 'Security', 'Basecamp Logistics'],
    economicMultiplier: '4.0x Cost Multiplier ($110k lost deposit & repath)',
    digisynqMitigation: 'Asset-light location registry identifies pre-cleared architectural alternatives within 30 miles.',
  },
  {
    step: 4,
    id: 'crew-rescheduling',
    label: 'CREW RESCHEDULING',
    trigger: 'Shoot pushed by 7 calendar days into existing guild commitments of key camera/electric heads.',
    cascadeEffect: 'Key Grip and A-Camera Operator must leave for prior locked gig; replacement crew needed.',
    stakeholdersHit: ['Guild Crew', 'Camera Dept', 'Grip/Electric', 'Payroll Accounting'],
    economicMultiplier: '6.5x Cost Multiplier ($180k replacement & rest penalties)',
    digisynqMitigation: 'Rapidly queries verified guild directory for available lateral craftspeople at identical rate card.',
  },
  {
    step: 5,
    id: 'equipment-rescheduling',
    label: 'EQUIPMENT RESCHEDULING',
    trigger: 'Specialty anamorphic lens package and technocrane must be returned to rental house.',
    cascadeEffect: 'Rental house has rented package to another production starting Monday. Visual continuity risk.',
    stakeholdersHit: ['Rental Houses', 'Cinematographer', 'Logistics Vendors'],
    economicMultiplier: '9.0x Cost Multiplier ($240k re-prep and lens swap fees)',
    digisynqMitigation: 'Dark capacity routing identifies matching optical serials across regional rental network.',
  },
  {
    step: 6,
    id: 'budget-increase',
    label: 'BUDGET INCREASE',
    trigger: 'Accumulated overages consume 85% of contingency budget line with 40% of schedule remaining.',
    cascadeEffect: 'Completion bond guarantor issues conditional notice; lender demands emergency cash injection.',
    stakeholdersHit: ['Equity Investors', 'Senior Lender', 'Completion Guarantor'],
    economicMultiplier: '14.0x Cost Multiplier ($450k emergency loan interest & legal)',
    digisynqMitigation: 'Transparent variance tracking provides bond guarantor with validated mathematical recovery roadmap.',
  },
  {
    step: 7,
    id: 'post-delay',
    label: 'POST DELAY',
    trigger: 'Footage wrap delivered 18 days behind original post-production turnover schedule.',
    cascadeEffect: 'VFX vendor has moved scheduled artist team onto a Marvel feature. Shot turnover bottlenecks.',
    stakeholdersHit: ['VFX Supervisors', 'Editorial Dept', 'Sound Mixers', 'Colorists'],
    economicMultiplier: '20.0x Cost Multiplier ($800k VFX overtime rush fees)',
    digisynqMitigation: 'Dynamic asset handoff balancing routes unrendered plates across distributed burst VFX nodes.',
  },
  {
    step: 8,
    id: 'marketing-compression',
    label: 'MARKETING COMPRESSION',
    trigger: 'Trailer and finished key art pushed from 16 weeks to 6 weeks before theatrical date.',
    cascadeEffect: 'Media buy commitments must be renegotiated at emergency peak spot rates; PR junket truncated.',
    stakeholdersHit: ['Marketing Executives', 'Media Buyers', 'PR Agencies', 'Talent Publicists'],
    economicMultiplier: '35.0x Cost Multiplier ($1.5M compressed ad buying premiums)',
    digisynqMitigation: 'Pre-assembled digital promotional asset kits populated dynamically from approved production dailies.',
  },
  {
    step: 9,
    id: 'release-impact',
    label: 'RELEASE IMPACT',
    trigger: 'Studio forced to delay theatrical release by 2 months or forfeit prime summer holiday window.',
    cascadeEffect: 'Film lands in congested release weekend against competing four-quadrant franchise.',
    stakeholdersHit: ['Distributors', 'Theatrical Exhibitors', 'International Sales Agents'],
    economicMultiplier: '60.0x Cost Multiplier ($4M box-office schedule penalty)',
    digisynqMitigation: 'Predictive screen release modeling evaluates counter-programming sweet spots.',
  },
  {
    step: 10,
    id: 'audience-revenue-impact',
    label: 'AUDIENCE & REVENUE IMPACT',
    trigger: 'Muted opening weekend leads to reduced per-screen average and shortened theatrical run.',
    cascadeEffect: 'Lifetime revenue potential permanently degraded; downstream SVOD and international rights suffer.',
    stakeholdersHit: ['Entire Investor Syndicate', 'Profit Participants', 'Future Franchise Value'],
    economicMultiplier: '100x Cumulative Economic Damage ($12M+ lost enterprise value)',
    digisynqMitigation: 'The entire chain is avoided when DigiSynq halts the variance at Step 1 with intelligent rerouting.',
  },
];

// ── 03. PROBLEM ATLAS DATA ────────────────────────────────────
export interface ProblemAtlasItem {
  id: string;
  title: string;
  stakeholder: string;
  layer: EcosystemLayerId;
  problemType: 'Operational' | 'Financial' | 'Contractual' | 'Technical' | 'Coordination';
  severity: 'Critical' | 'High' | 'Medium';
  frequency: 'Ubiquitous' | 'Frequent' | 'Project-Dependent';
  rootCauseId: string;
  rootCauseName: string;
  economicImpact: string;
  existingWorkaround: string;
  solutionGap: string;
  evidenceStatus: EvidenceStatus;
}

export const PROBLEM_ATLAS_ITEMS: ProblemAtlasItem[] = [
  {
    id: 'P-01',
    title: 'Irregular Work & Talent Discoverability Deficit',
    stakeholder: 'Actors & Performers',
    layer: 'CREATION',
    problemType: 'Coordination',
    severity: 'High',
    frequency: 'Ubiquitous',
    rootCauseId: 'RC-01',
    rootCauseName: 'Information Fragmentation',
    economicImpact: 'Talent spends 65% of productive career waiting/pitching without compensation.',
    existingWorkaround: 'Relying exclusively on personal agent contacts and fragmented casting websites.',
    solutionGap: 'Zero verified, cross-platform talent availability and reputation telemetry.',
    evidenceStatus: 'Validated',
  },
  {
    id: 'P-02',
    title: 'Soundstage Booking Overlap & Dark Capacity Waste',
    stakeholder: 'Soundstage Facilities & Producers',
    layer: 'PRODUCTION',
    problemType: 'Operational',
    severity: 'Critical',
    frequency: 'Frequent',
    rootCauseId: 'RC-04',
    rootCauseName: 'Dependency Visibility Failure',
    economicImpact: '$25,000–$50,000/day stage burn rate while soundstage sits completely empty.',
    existingWorkaround: 'Offline phone calls between studio managers and brokers with 10% commission markup.',
    solutionGap: 'No live visibility into regional stage availability windows or sudden schedule slips.',
    evidenceStatus: 'Validated',
  },
  {
    id: 'P-03',
    title: 'Unhedged Script Rewrites Shattering Production Feasibility',
    stakeholder: 'Writers & Line Producers',
    layer: 'CREATION',
    problemType: 'Coordination',
    severity: 'High',
    frequency: 'Frequent',
    rootCauseId: 'RC-02',
    rootCauseName: 'Workflow Fragmentation',
    economicImpact: 'Emergency location/set construction scrambles costing up to $200k in rush fees.',
    existingWorkaround: 'Line producer manually red-lining script revisions against spreadsheet budget.',
    solutionGap: 'Absence of algorithmic cost & asset tagging during active screenplay revision.',
    evidenceStatus: 'Observed',
  },
  {
    id: 'P-04',
    title: 'Guild Turnaround Rest Covenant Breaches & Safety Penalties',
    stakeholder: 'Technical Crew & Production Management',
    layer: 'PRODUCTION',
    problemType: 'Operational',
    severity: 'Critical',
    frequency: 'Frequent',
    rootCauseId: 'RC-02',
    rootCauseName: 'Workflow Fragmentation',
    economicImpact: '$15k/day union forced-call fines and exhausted crew safety accidents.',
    existingWorkaround: 'AD manually counting clock hours at wrap and calculating manual penalties.',
    solutionGap: 'No predictive scheduling engine calculating turnaround feasibility before call sheets publish.',
    evidenceStatus: 'Validated',
  },
  {
    id: 'P-05',
    title: 'Specialty Cinema Lens & Camera Package Siloed Idle Time',
    stakeholder: 'Equipment Rental Houses',
    layer: 'PRODUCTION',
    problemType: 'Financial',
    severity: 'Medium',
    frequency: 'Ubiquitous',
    rootCauseId: 'RC-01',
    rootCauseName: 'Information Fragmentation',
    economicImpact: 'High-end cinema optics sit on warehouse shelves 42% of calendar year unmonetized.',
    existingWorkaround: 'Discounting rental rates to friendly DPs on quiet weeks via manual emails.',
    solutionGap: 'No asset-light capability exchange routing regional gear demand to idle inventory.',
    evidenceStatus: 'Validated',
  },
  {
    id: 'P-06',
    title: 'Municipal Filming Permit Revocation Due to Late Route Variance',
    stakeholder: 'Location Managers & Cities',
    layer: 'PRODUCTION',
    problemType: 'Coordination',
    severity: 'Critical',
    frequency: 'Project-Dependent',
    rootCauseId: 'RC-04',
    rootCauseName: 'Dependency Visibility Failure',
    economicImpact: '$80,000+ lost shoot day with 120 crew members standing down on street curb.',
    existingWorkaround: 'Emergency negotiations with film liaisons or standing down company for the day.',
    solutionGap: 'Zero dynamic contingency routing linking municipal constraints with live call sheets.',
    evidenceStatus: 'Observed',
  },
  {
    id: 'P-07',
    title: 'Delayed Production Milestone Escrow Draws Freezing Payroll',
    stakeholder: 'Financiers & Line Producers',
    layer: 'COMMERCIAL',
    problemType: 'Financial',
    severity: 'Critical',
    frequency: 'Frequent',
    rootCauseId: 'RC-03',
    rootCauseName: 'Trust Deficit',
    economicImpact: 'Union strike notices issued; completion guarantor threatens immediate takeover.',
    existingWorkaround: 'Producers pleading personal credit lines and manual accountant wire affirmations.',
    solutionGap: 'No verifiable telemetry feed attesting production milestone completion to lenders.',
    evidenceStatus: 'Validated',
  },
  {
    id: 'P-08',
    title: 'Sync Licensing Rights Stalemate Halting Global Distribution',
    stakeholder: 'Music Supervisors & Distributors',
    layer: 'COMMERCIAL',
    problemType: 'Contractual',
    severity: 'High',
    frequency: 'Frequent',
    rootCauseId: 'RC-03',
    rootCauseName: 'Trust Deficit',
    economicImpact: 'Film blocked from streaming distribution or forced into $120k emergency re-scoring.',
    existingWorkaround: 'Replacing iconic song with cheap stock music hours before festival delivery.',
    solutionGap: 'Lack of pre-cleared, automated smart rights verification matching distribution tiers.',
    evidenceStatus: 'Observed',
  },
  {
    id: 'P-09',
    title: 'Incompatible Metadata Schemas Between Set Dailies & Finishing Lab',
    stakeholder: 'DITs, VFX Vendors & Finishing Houses',
    layer: 'INFRASTRUCTURE',
    problemType: 'Technical',
    severity: 'Medium',
    frequency: 'Ubiquitous',
    rootCauseId: 'RC-01',
    rootCauseName: 'Information Fragmentation',
    economicImpact: '300+ man-hours wasted manually renaming files and reconnecting conform edits.',
    existingWorkaround: 'Assistant editors pulling all-nighters to manually align XML and ALE lists.',
    solutionGap: 'Missing universal, asset-agnostic cryptographic checksum & metadata bridge.',
    evidenceStatus: 'Validated',
  },
  {
    id: 'P-10',
    title: 'Post-Production VFX Bottleneck Compressing Theatrical Window',
    stakeholder: 'Post Supervisors & Distributors',
    layer: 'COMMERCIAL',
    problemType: 'Operational',
    severity: 'Critical',
    frequency: 'Frequent',
    rootCauseId: 'RC-04',
    rootCauseName: 'Dependency Visibility Failure',
    economicImpact: '$4M+ box office forfeiture due to lost opening weekend release date.',
    existingWorkaround: 'Paying 300% overtime rush rates to domestic VFX boutique facilities.',
    solutionGap: 'No multi-vendor burst compute orchestrator distributing complex shot batches.',
    evidenceStatus: 'Validated',
  },
];

// ── 04. ROOT CAUSES & CONVERGENCE ──────────────────────────────
export interface RootCauseCluster {
  id: string;
  name: string;
  thesis: string;
  surfaceProblemsCount: number;
  impactedDomains: string[];
  systemicFailureMechanism: string;
  economicBlastRadius: string;
  digisynqInterventionArchitecture: string;
}

export const ROOT_CAUSE_CLUSTERS: RootCauseCluster[] = [
  {
    id: 'RC-01',
    name: 'Information Fragmentation',
    thesis: 'Vital asset, availability, rate, and credential intelligence is scattered across private email inboxes, informal rolodexes, and siloed spreadsheets.',
    surfaceProblemsCount: 42,
    impactedDomains: ['Talent Discovery', 'Casting', 'Equipment Rental', 'Location Availability', 'Distribution Rights', 'Audience Intelligence'],
    systemicFailureMechanism: 'When resource availability is invisible, productions operate in artificial scarcity, overpaying intermediaries and suffering week-long discovery lag.',
    economicBlastRadius: '$18B+ estimated annual friction across Hollywood, European & Indian production ecosystems.',
    digisynqInterventionArchitecture: 'Standardized ecosystem discovery index unifying asset availability, specs, and certified credentials without owning physical assets.',
  },
  {
    id: 'RC-02',
    name: 'Workflow Fragmentation',
    thesis: 'Departmental tools operate in complete isolation; a script change, schedule revision, or budget reallocation is manually translated across 10 incompatible systems.',
    surfaceProblemsCount: 38,
    impactedDomains: ['Pre-Production', 'Set Execution', 'Approvals', 'Post-Production', 'Finishing', 'Payroll Governance'],
    systemicFailureMechanism: 'Decisions made in one department propagate silent errors down the line until they collide on set as expensive physical surprises.',
    economicBlastRadius: 'Average 14–22% budget overrun on mid-to-large budget episodic and feature productions.',
    digisynqInterventionArchitecture: 'Living dependency coordination engine that maps cross-department workflows into one synchronized operational graph.',
  },
  {
    id: 'RC-03',
    name: 'Trust Deficit & Verification Latency',
    thesis: 'Participants cannot cryptographically or objectively verify counterpart capability, insurance status, union compliance, or available milestone escrow.',
    surfaceProblemsCount: 29,
    impactedDomains: ['Crew Hiring', 'Equipment Insurance', 'Milestone Cashflow', 'Sync Licensing', 'Contract Execution'],
    systemicFailureMechanism: 'Risk is managed by adding lawyers, brokers, and prolonged bureaucratic holding periods, slowing production momentum and freezing cashflow.',
    economicBlastRadius: 'Up to 30 days of frozen capital per project and 10–15% intermediary fee extraction.',
    digisynqInterventionArchitecture: 'Algorithmic verification protocol providing pre-vetted reputation scores, automated escrow triggers, and standardized contracts.',
  },
  {
    id: 'RC-04',
    name: 'Dependency Visibility Failure',
    thesis: 'Production leads can see their immediate tasks, but have zero visibility into second- and third-order dependencies across external vendors and counterparties.',
    surfaceProblemsCount: 51,
    impactedDomains: ['Shooting Schedules', 'Stage Handover', 'Crew Turnaround', 'VFX Pipeline', 'Theatrical Distribution'],
    systemicFailureMechanism: 'A trivial 2-hour delay at Step 1 compounds through rigid, unbuffered dependencies into an irreversible multi-million dollar cascade.',
    economicBlastRadius: 'The primary cause of catastrophic completion bond intervention and canceled releases.',
    digisynqInterventionArchitecture: 'Real-time multi-party cascade simulator that continuously calculates downstream blast radius and recommends counter-measures.',
  },
];

// ── 05. OPPORTUNITY RADAR DATA ────────────────────────────────
export interface OpportunityRadarItem {
  id: string;
  title: string;
  rootCauseId: string;
  rootCauseName: string;
  problemsAffected: string[];
  stakeholdersAffected: string[];
  economicDamage: string;
  existingWorkaround: string;
  solutionGap: string;
  potentialSolution: string;
  potentialPayingCustomer: string;
  customerBudgetOwner: string;
  confidence: 'High (85%+)' | 'Medium-High (70–85%)' | 'Experimental (50–70%)';
  evidenceStatus: EvidenceStatus;
}

export const OPPORTUNITY_RADAR_ITEMS: OpportunityRadarItem[] = [
  {
    id: 'OPP-01',
    title: 'Verified Entertainment Talent Intelligence Exchange',
    rootCauseId: 'RC-01',
    rootCauseName: 'Information Fragmentation',
    problemsAffected: ['P-01 (Talent Discoverability)', 'P-04 (Guild Rest Covenant Risk)'],
    stakeholdersAffected: ['Cast', 'Casting Directors', 'Producers', 'Studios'],
    economicDamage: '$350M+ lost annually in delayed casting cycles and agent friction fees.',
    existingWorkaround: 'Incomplete casting directories, PDF resumes, informal phone trees.',
    solutionGap: 'No verified, real-time availability and union compliance registry.',
    potentialSolution: 'Asset-light talent intelligence platform providing verified credit history, calendar openings, and guild standing.',
    potentialPayingCustomer: 'Studios, Independent Producers, Casting Agencies',
    customerBudgetOwner: 'VP of Casting & Head of Physical Production',
    confidence: 'High (85%+)',
    evidenceStatus: 'Validated',
  },
  {
    id: 'OPP-02',
    title: 'Dark Capacity Soundstage & Asset Routing Protocol',
    rootCauseId: 'RC-01',
    rootCauseName: 'Information Fragmentation',
    problemsAffected: ['P-02 (Stage Overlap & Dark Capacity)', 'P-05 (Idle Rental Equipment)'],
    stakeholdersAffected: ['Soundstages', 'Rental Houses', 'Line Producers', 'Commercial Shoots'],
    economicDamage: '$1.2B+ in unutilized soundstage and camera gear capacity globally.',
    existingWorkaround: 'Stage brokers taking 10–15% commission; stages sitting dark between tentpoles.',
    solutionGap: 'Zero dynamic liquidity clearinghouse matching short-notice productions with dark stage slots.',
    potentialSolution: 'Automated dark capacity matching engine that monetizes unbooked days with zero ownership overhead.',
    potentialPayingCustomer: 'Soundstage Owners & Commercial/Indie Production Companies',
    customerBudgetOwner: 'Studio Facilities Manager & Lead Production Supervisor',
    confidence: 'High (85%+)',
    evidenceStatus: 'Validated',
  },
  {
    id: 'OPP-03',
    title: 'Living Dependency Graph & Production Cascade Sentinel',
    rootCauseId: 'RC-04',
    rootCauseName: 'Dependency Visibility Failure',
    problemsAffected: ['P-04 (Turnaround Breaches)', 'P-06 (Permit Revocation)', 'P-10 (Post Bottlenecks)'],
    stakeholdersAffected: ['Producers', '1st ADs', 'Completion Guarantors', 'Lenders'],
    economicDamage: '$2.8B+ wasted in preventable production delay cascades and overtime fines.',
    existingWorkaround: 'Static desktop scheduling software, frantic midnight emails, whiteboard revisions.',
    solutionGap: 'No cross-department dependency graph projecting failure propagation in real time.',
    potentialSolution: 'Real-time multi-department orchestration engine that models schedule shockwaves and auto-routes solutions.',
    potentialPayingCustomer: 'Completion Bond Companies, Production Companies, Studio Risk Divisions',
    customerBudgetOwner: 'Chief Risk Officer & SVP of Production Finance',
    confidence: 'High (85%+)',
    evidenceStatus: 'Observed',
  },
  {
    id: 'OPP-04',
    title: 'Milestone Telemetry Escrow & Smart Production Settlement',
    rootCauseId: 'RC-03',
    rootCauseName: 'Trust Deficit',
    problemsAffected: ['P-07 (Delayed Milestone Escrow)', 'P-08 (Sync Licensing Stalemate)'],
    stakeholdersAffected: ['Debt Lenders', 'Equity Investors', 'Producers', 'Vendors'],
    economicDamage: '$450M in interest, escrow holding costs, and legal friction fees annually.',
    existingWorkaround: 'Manual auditor site visits, notarized paper releases, slow 60-day vendor pay terms.',
    solutionGap: 'Absence of verified operational telemetry triggering instant milestone fund releases.',
    potentialSolution: 'Escrow governance protocol that unlocks capital based on validated shoot wrap and delivery signatures.',
    potentialPayingCustomer: 'Entertainment Banks, Soft-Money Funds, Production Payroll Providers',
    customerBudgetOwner: 'Head of Entertainment Lending & Managing Director of Production Credit',
    confidence: 'Medium-High (70–85%)',
    evidenceStatus: 'Hypothesis',
  },
  {
    id: 'OPP-05',
    title: 'Distributed Burst VFX & Finishing Coordination Network',
    rootCauseId: 'RC-02',
    rootCauseName: 'Workflow Fragmentation',
    problemsAffected: ['P-09 (Metadata Schema Clashes)', 'P-10 (VFX Bottlenecks Compressing Release)'],
    stakeholdersAffected: ['Post Supervisors', 'VFX Studios', 'Distributors', 'Exhibitors'],
    economicDamage: '$1.8B lost in compressed marketing windows and rush VFX vendor overtime.',
    existingWorkaround: 'Paying domestic studios 300% premiums or dumping unfinished shots into release.',
    solutionGap: 'Lack of unified shot container standards and distributed capacity dispatching.',
    potentialSolution: 'Asset-light workflow router matching unassigned shot batches with certified global artist nodes.',
    potentialPayingCustomer: 'Major Film Distributors, SVOD Streaming Platforms, VFX Studios',
    customerBudgetOwner: 'VP of Post-Production & Head of Visual Effects',
    confidence: 'High (85%+)',
    evidenceStatus: 'Validated',
  },
];

// ── 06. ASSET-LIGHT NETWORK REGISTRY DATA ─────────────────────
export interface NetworkCategory {
  id: string;
  name: string;
  headline: string;
  description: string;
  whoOwnsIt: string;
  whereItExists: string;
  whatItCanDo: string;
  whenAvailable: string;
  whoNeedsIt: string;
  valueCreated: string;
  assetCountEstimate: string;
}

export const NETWORK_REGISTRY_CATEGORIES: NetworkCategory[] = [
  {
    id: 'talent-skills',
    name: 'Talent & Guild Specialists',
    headline: 'HUMAN CAPABILITY & VERIFIED CREATIVE SPECIALISTS',
    description: 'We do not employ thousands of actors or technicians on permanent payroll. We index verified creative and technical craftspeople, their guild certifications, real availability windows, and specific skill competencies.',
    whoOwnsIt: 'Independent craftspeople, artists, performers, and boutique representation agencies.',
    whereItExists: 'Distributed across primary production hubs (LA, London, Mumbai, Vancouver, Atlanta, Sydney).',
    whatItCanDo: 'Execute specialized creative and technical tasks (cinematography, stunt choreography, sound design).',
    whenAvailable: 'Between project cycles, hiatus windows, or during sudden shoot resequencing.',
    whoNeedsIt: 'Producers, directors, casting directors, and emergency replacement teams.',
    valueCreated: 'Converts unbooked downtime into productive billable days without agent markup delays.',
    assetCountEstimate: '14,000+ Indexed Roles',
  },
  {
    id: 'equipment-optics',
    name: 'High-End Optics & Capture Equipment',
    headline: 'SPECIALIZED CINEMA HARDWARE & SENSOR PACKAGES',
    description: 'We do not maintain capital-intensive equipment warehouses or depreciating camera inventories. We connect top-tier rental houses and owner-operators who possess idle dark inventory.',
    whoOwnsIt: 'Independent rental houses, optical boutiques, and director of photography owner-operators.',
    whereItExists: 'Physical vaults and prep floors across 40+ metropolitan entertainment centers.',
    whatItCanDo: 'Provide anamorphic lenses, large-format cinema bodies, high-speed lighting rigs, and stabilized cranes.',
    whenAvailable: 'Mid-week gaps, production postponements, and seasonal production lulls.',
    whoNeedsIt: 'Feature productions, high-end commercial units, and independent film projects.',
    valueCreated: 'Increases rental house asset utilization by 18–26% with zero capital expenditure.',
    assetCountEstimate: '8,500+ Verified Packages',
  },
  {
    id: 'stages-facilities',
    name: 'Soundstages, Lots & Facilities',
    headline: 'ACOUSTICALLY CONTROLLED FLOORS & PRODUCTION HUBS',
    description: 'We do not buy land, pour concrete, or maintain real estate mortgages. We index soundstages, virtual production LED volumes, construction mills, and dark production facilities.',
    whoOwnsIt: 'Studio facility owners, real estate investment trusts, and municipal industrial parks.',
    whereItExists: 'Suburban studio complexes, converted industrial facilities, and regional backlots.',
    whatItCanDo: 'Host heavy set construction, multi-camera dialogue shoots, virtual production volumes.',
    whenAvailable: 'Gap weeks between major tentpole leases or cancellations.',
    whoNeedsIt: 'Line producers, streaming episodic units, commercial directors.',
    valueCreated: 'Monetizes dark stage floor time, mitigating costly cancellation losses for operators.',
    assetCountEstimate: '420+ Certified Soundstages',
  },
  {
    id: 'locations-spaces',
    name: 'Locations & Architectural Real Estate',
    headline: 'REAL-WORLD BACKDROPS & STANDING SETS',
    description: 'We do not own mansions, decommissioned prisons, bank vaults, or airfields. We catalogue pre-cleared, insured physical locations with municipal filming precedents and noise clearances.',
    whoOwnsIt: 'Private property owners, corporate portfolios, civic municipalities, and historic trusts.',
    whereItExists: 'Urban streets, private estates, architectural landmarks, and rural wilderness.',
    whatItCanDo: 'Provide authentic on-camera visual scope with basecamp and power capabilities.',
    whenAvailable: 'Scheduled non-operational hours, weekends, or dedicated film lease windows.',
    whoNeedsIt: 'Location managers, production designers, line producers seeking immediate shoot sites.',
    valueCreated: 'Unlocks thousands in passive location fees for property owners while accelerating permitting.',
    assetCountEstimate: '1,900+ Pre-Cleared Sites',
  },
  {
    id: 'technology-compute',
    name: 'Cloud Compute, Render Nodes & Labs',
    headline: 'DISTRIBUTED VFX RENDERING & MASTER FINISHING',
    description: 'We do not build multi-million dollar data centers. We route rendering and post-production workloads across certified cloud GPU clusters and accredited finishing suites.',
    whoOwnsIt: 'Hyperscale cloud partners, specialized VFX boutiques with excess night compute, and finishing labs.',
    whereItExists: 'Secure cloud data centers and certified Dolby Atmos/Vision mastering suites.',
    whatItCanDo: 'Execute 8K ray-traced rendering, AI denoising, IMF packaging, and remote real-time color sessions.',
    whenAvailable: 'Nighttime off-peak compute hours and open calendar suite bookings.',
    whoNeedsIt: 'Post-production supervisors, VFX producers, and indie filmmakers facing hard delivery dates.',
    valueCreated: 'Cuts post-production turnaround by 40% while slashing peak hardware capital costs.',
    assetCountEstimate: '95,000+ Compute Cores',
  },
];

// ── 07. CONNECT SCENARIO WALKTHROUGH ──────────────────────────
export interface ConnectScenarioStep {
  stage: string;
  name: string;
  action: string;
  inputData: string;
  digisynqMechanism: string;
  outcome: string;
}

export const CONNECT_REAL_SCENARIO: ConnectScenarioStep[] = [
  {
    stage: '01',
    name: 'REQUIREMENT',
    action: 'Producer enters immediate specification: Feature film shooting in Vancouver requires an A-List Cinematographer, Arri Alexa 35 package, 15,000 sq ft soundstage, and 3 pre-lit heritage locations for an 18-day shoot.',
    inputData: 'Dates: Nov 10–Dec 04 | Budget Tier: Mid ($12M) | Technical Spec: 4K Anamorphic | Guild: IATSE 669',
    digisynqMechanism: 'Requirement Decomposition Engine (M04)',
    outcome: 'Structured capability spec generated with zero ambiguous requirements.',
  },
  {
    stage: '02',
    name: 'DISCOVERY',
    action: 'DigiSynq queries the asset-light network across British Columbia and Pacific Northwest without revealing private project IP or talent identities.',
    inputData: 'Querying 140 DPs, 12 regional rental houses, 18 soundstage lots, and 35 pre-cleared heritage sites',
    digisynqMechanism: 'Multi-Entity Graph Traversal (M01 / M02)',
    outcome: 'Identified 3 qualified DPs on hiatus, 2 matching camera packages, 1 dark stage slot, and 4 locations.',
  },
  {
    stage: '03',
    name: 'MATCHING',
    action: 'Algorithms evaluate rate-card compatibility, guild covenants, insurance compliance, and mutual working history to rank viable candidate bundles.',
    inputData: 'Scoring compatibility across technical spec parity, schedule buffer tolerances, and rate card match',
    digisynqMechanism: 'Algorithmic Resource Matching (M10)',
    outcome: 'Ranked optimal bundle: DP Elena Ramos + Sim Digital Package + Bridge Studios Stage 3.',
  },
  {
    stage: '04',
    name: 'VERIFICATION',
    action: 'DigiSynq verifies optical lens serials, stage acoustic certification, DP guild standing, and municipal permit turnaround windows automatically.',
    inputData: 'Cryptographic credential verification, union standing query, and municipal noise status check',
    digisynqMechanism: 'Trust & Verification Protocol (M07)',
    outcome: '100% verified credentials with zero unhedged legal or insurance exposure.',
  },
  {
    stage: '05',
    name: 'AVAILABILITY LOCK',
    action: 'DigiSynq secures simultaneous 48-hour provisional soft locks across all 4 resource categories, preventing calendar race conditions.',
    inputData: 'Multi-party availability hold synchronized to identical 48-hour expiration trigger',
    digisynqMechanism: 'Synchronized State Lock (M12)',
    outcome: 'Zero risk of booking stage only to discover the camera package was rented elsewhere 10 minutes prior.',
  },
  {
    stage: '06',
    name: 'CONNECTION & EXECUTION',
    action: 'Contracts and standardized escrow agreements execute simultaneously. Project transitions directly into active orchestration.',
    inputData: 'Single multi-party digital master agreement linked to automated milestone escrow',
    digisynqMechanism: 'Asset-Light Coordination Binding (M16)',
    outcome: 'Complete production unit matched, verified, and contracted in 14 hours instead of 3 weeks.',
  },
];

// ── 08. ORCHESTRATE WORKFLOW STAGES ────────────────────────────
export interface OrchestrateStage {
  step: string;
  name: string;
  role: string;
  whatHappens: string;
  dependencyChecked: string;
  frictionPrevented: string;
}

export const ORCHESTRATE_STAGES: OrchestrateStage[] = [
  {
    step: '01',
    name: 'PROJECT',
    role: 'Master Project Scope & Milestone Baseline',
    whatHappens: 'Project definition is ingested, establishing target milestones, budget envelopes, and delivery formats.',
    dependencyChecked: 'Investor capital schedule against projected physical shoot spend.',
    frictionPrevented: 'Starting pre-production before financing guarantees are legally bonded.',
  },
  {
    step: '02',
    name: 'PEOPLE',
    role: 'Department Heads, Cast & Crew Roster',
    whatHappens: 'Personnel schedules, guild rest covenant rules, and emergency backup contacts are synchronized.',
    dependencyChecked: 'Actor hard-out dates against required shooting day counts.',
    frictionPrevented: 'Cast member departing mid-schedule, leaving 4 climactic scenes unshot.',
  },
  {
    step: '03',
    name: 'ASSETS',
    role: 'Camera, Stage, Lighting, Transport & Set Assets',
    whatHappens: 'Equipment delivery windows, maintenance windows, and return deadlines are monitored.',
    dependencyChecked: 'Rental prep days aligned with soundstage load-in permissions.',
    frictionPrevented: '120-person crew waiting on set while truck is stranded at rental warehouse.',
  },
  {
    step: '04',
    name: 'SCHEDULE',
    role: 'Dynamic Master Call Sheet & Milestone Timeline',
    whatHappens: 'Day-by-day scene stripboard dynamically balances weather forecasts, actor hours, and stage turns.',
    dependencyChecked: 'Night-shoot to day-shoot transitions complying with mandatory 12-hour guild rest.',
    frictionPrevented: 'Thousands of dollars in union turnaround penalty fines.',
  },
  {
    step: '05',
    name: 'DEPENDENCIES',
    role: 'Living Multi-Party Dependency Graph',
    whatHappens: 'Every task is explicitly mapped to predecessor requirements across departments.',
    dependencyChecked: 'Art department paint drying time before electrical crew rigging call.',
    frictionPrevented: 'Electricians breathing paint fumes on wet floor, halting set operations.',
  },
  {
    step: '06',
    name: 'EXECUTION',
    role: 'Real-Time Daily Production Telemetry',
    whatHappens: 'Camera footage counts, scene wraps, and daily hot costs ingested at wrap.',
    dependencyChecked: 'Page count achieved versus planned hours and overtime run rates.',
    frictionPrevented: 'Unnoticed budget drift accumulating into catastrophic end-of-shoot deficit.',
  },
  {
    step: '07',
    name: 'ISSUES & RESOLUTION',
    role: 'Automated Exception Routing & Intervention',
    whatHappens: 'When a variance occurs (weather, illness, broken crane), DigiSynq triggers pre-computed rerouting.',
    dependencyChecked: 'Alternate scene cluster feasibility without disturbing locked milestones.',
    frictionPrevented: 'A 2-hour delay snowballing into a full production shutdown.',
  },
  {
    step: '08',
    name: 'MEASUREMENT',
    role: 'Post-Milestone Telemetry & Closed-Loop Learning',
    whatHappens: 'Actual performance metrics are compared against baseline, updating network intelligence.',
    dependencyChecked: 'Accuracy of vendor turnaround predictions and real cost variance.',
    frictionPrevented: 'Repeating identical planning assumptions on future productions.',
  },
];

// ── 09. MEASURE TELEMETRY METRICS ─────────────────────────────
export interface MeasureMetric {
  id: string;
  metricName: string;
  definition: string;
  whatDecisionItImproves: string;
  sampleInsight: string;
  sourceTelemetry: string;
}

export const MEASURE_METRICS: MeasureMetric[] = [
  {
    id: 'M-01',
    metricName: 'Asset & Stage Utilization Rate',
    definition: 'Percentage of calendar days a soundstage or camera package produces active revenue vs sitting idle.',
    whatDecisionItImproves: 'Enables stage operators and rental houses to price dark-capacity gap days dynamically to capture marginal revenue without cannibalizing peak rates.',
    sampleInsight: 'Regional soundstages in Vancouver run at 64% annual utilization; offering 4-day burst discounts increases net operating yield by 21%.',
    sourceTelemetry: 'Stage booking manifests and equipment check-in/out telemetry logs.',
  },
  {
    id: 'M-02',
    metricName: 'Schedule Variance & Cascade Blast Radius',
    definition: 'Quantified time and cost delta between planned milestone schedule and real execution.',
    whatDecisionItImproves: 'Allows line producers and completion bond guarantors to intervene at Step 1 rather than after contingency is exhausted.',
    sampleInsight: 'A 4-hour delay on Day 3 increases downstream overtime risk on Day 12 by 340% unless scene sequence is inverted.',
    sourceTelemetry: 'Daily call sheets, wrap reports, and assistant director scene logs.',
  },
  {
    id: 'M-03',
    metricName: 'Cost Leakage Index',
    definition: 'Dollars spent on uncoordinated friction: union penalty fines, idle stage holding fees, rushed air-freight, and redundant broker fees.',
    whatDecisionItImproves: 'Directs production accountants where to renegotiate vendor contracts and where to automate milestone escrow releases.',
    sampleInsight: 'Mid-budget indie features suffer an average of $280,000 in pure coordination leakage (8.2% of total physical production budget).',
    sourceTelemetry: 'Production accounting general ledgers and union grievance notices.',
  },
  {
    id: 'M-04',
    metricName: 'Talent & Crew Capacity Availability Velocity',
    definition: 'Average calendar days required to source, verify, contract, and onboard a replacement department head or actor.',
    whatDecisionItImproves: 'Empowers casting and production managers to hedge against sudden personnel emergencies with verified standby talent.',
    sampleInsight: 'Standard industry replacement takes 11 days via traditional agencies; DigiSynq asset-light discovery executes in 14 hours.',
    sourceTelemetry: 'Network query-to-contract timestamps and guild availability logs.',
  },
  {
    id: 'M-05',
    metricName: 'Distribution & Audience Alignment Score',
    definition: 'Degree of thematic, genre, and demographic alignment between finished film deliverable and active streaming buyer mandates.',
    whatDecisionItImproves: 'Informs sales agents and distributors which international territory buyers have active acquisition deficits for specific genres.',
    sampleInsight: 'Elevated psychological horror has a 42% catalog deficit across European SVOD platforms in Q4, yielding higher minimum guarantees.',
    sourceTelemetry: 'Platform buyer mandates, streaming release telemetry, and box-office returns.',
  },
];

// ── 10. MONETIZATION 6-LAYER VALUE CAPTURE ────────────────────
export interface MonetizationLayer {
  tier: string;
  name: string;
  mechanism: string;
  whoPays: string;
  pricingModel: string;
  valueDelivered: string;
}

export const MONETIZATION_LAYERS: MonetizationLayer[] = [
  {
    tier: '01',
    name: 'Network Access & Resource Indexing',
    mechanism: 'Verified directory access for equipment houses, soundstages, facilities, and certified talent.',
    whoPays: 'Rental houses, soundstage operators, talent agencies, and production service vendors.',
    pricingModel: 'Annual membership / indexing verification fee.',
    valueDelivered: 'Transforms hidden dark capacity into visible, inbound bookable opportunities without private broker cuts.',
  },
  {
    tier: '02',
    name: 'Intelligent Matching & Transaction Liquidity',
    mechanism: 'Transaction success fee on successful resource connections (camera packages, stages, location bookings).',
    whoPays: 'Equipment rental houses, soundstages, and location owners on confirmed booked revenue.',
    pricingModel: 'Transparent low take-rate (3–7% vs traditional agency/broker 15–20%).',
    valueDelivered: 'Provides immediate high-margin revenue on previously idle assets with zero speculative sales overhead.',
  },
  {
    tier: '03',
    name: 'Orchestration & Workflow Coordination',
    mechanism: 'Project-based coordination fee for managing active production dependencies, schedule variance, and resolution.',
    whoPays: 'Independent production companies, studio physical production divisions, and completion bond guarantors.',
    pricingModel: 'Flat per-production coordination subscription or milestone fee tied to shooting weeks.',
    valueDelivered: 'Prevents $200k–$1M+ in downstream cascade delays and union turnaround penalties.',
  },
  {
    tier: '04',
    name: 'Decision Intelligence & EERG Subscriptions',
    mechanism: 'Access to the EERG root-cause graph, cascade simulator, real-time rate card benchmarks, and failure taxonomies.',
    whoPays: 'Studio heads, streaming acquisitions teams, entertainment banks, and private equity syndicates.',
    pricingModel: 'Enterprise annual seat license ($25k–$100k/year based on volume).',
    valueDelivered: 'Replaces guesswork and anecdotal gossip with rigorous empirical decision data before committing capital.',
  },
  {
    tier: '05',
    name: 'Enterprise Platform Contracts',
    mechanism: 'Dedicated multi-project instance embedded directly into a major studio or streamer’s physical production slate.',
    whoPays: 'Major Studios, National Broadcasters, and Global Streaming Platforms (Netflix, Amazon, Disney, Apple).',
    pricingModel: 'Multi-year enterprise master service contract + custom integration support.',
    valueDelivered: 'Unifies siloed production data across 50+ simultaneous global productions in real time.',
  },
  {
    tier: '06',
    name: 'Aggregated Industry Intelligence Products',
    mechanism: 'Anonymized, high-level macroeconomic telemetry reports on industry capacity, utilization rates, and inflation trends.',
    whoPays: 'Industry guilds, governmental film commissions, academic institutes, and financial analysts.',
    pricingModel: 'Quarterly syndicated research reports and API query feeds.',
    valueDelivered: 'Unmatched visibility into the macro operational health and cost trajectories of the global entertainment ecosystem.',
  },
];

// ── 11. PARTICIPATE CONTEXTUAL ENTRY POINTS ───────────────────
export interface ParticipateEntryPoint {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  fields: { name: string; label: string; placeholder: string; type: 'text' | 'textarea' | 'select'; options?: string[] }[];
  ctaLabel: string;
}

export const PARTICIPATE_ENTRY_POINTS: ParticipateEntryPoint[] = [
  {
    id: 'have-problem',
    title: 'I Have an Active Problem',
    badge: 'Urgent Triage',
    subtitle: 'Resolve an operational shock, schedule slip, or bottleneck before it cascades.',
    description: 'Describe the active variance you are experiencing on set, in prep, or in post. Our EERG root-cause engine analyzes your dependency blast radius and connects mitigation resources.',
    fields: [
      { name: 'role', label: 'Your Role / Department', placeholder: 'e.g. Line Producer, 1st AD, Post Supervisor', type: 'text' },
      { name: 'projectType', label: 'Project Format & Stage', placeholder: 'e.g. Feature Film (In Production), TV Series (In Prep)', type: 'select', options: ['Feature Film (Pre-Production)', 'Feature Film (Active Production)', 'Feature Film (Post-Production)', 'Episodic Series', 'Commercial / Short Form', 'Other'] },
      { name: 'symptom', label: 'Describe the Active Breakdown', placeholder: 'e.g. Lost lead location 4 days before shoot; need pre-cleared industrial site in Vancouver with basecamp space.', type: 'textarea' },
      { name: 'timeHorizon', label: 'Resolution Time Horizon', placeholder: 'Select urgency', type: 'select', options: ['Emergency: Next 24–48 Hours', 'Urgent: This Week', 'Planning: Within 30 Days'] },
      { name: 'contact', label: 'Direct Work Contact / Phone', placeholder: 'name@production.com or phone', type: 'text' },
    ],
    ctaLabel: 'SUBMIT PROBLEM FOR TRIAGE →',
  },
  {
    id: 'have-resources',
    title: 'I Have Idle Resources',
    badge: 'Monetize Capacity',
    subtitle: 'Turn dark soundstage floors, idle camera packages, or open crew windows into revenue.',
    description: 'We do not ask you to sell your equipment or give up autonomy. We index your available dark days and connect verified, insured productions with zero speculative sales effort.',
    fields: [
      { name: 'resourceType', label: 'Resource Category', placeholder: 'Select category', type: 'select', options: ['Soundstage / Studio Lot', 'Camera / Optics Package', 'Lighting & Grip Package', 'Pre-Cleared Location / Property', 'Post / Finishing / Mix Suite', 'Specialty Technical Talent'] },
      { name: 'location', label: 'Geographic Base', placeholder: 'e.g. Los Angeles, London, Mumbai, Vancouver', type: 'text' },
      { name: 'capacityWindow', label: 'Available Time Window', placeholder: 'e.g. Open between Nov 12 and Dec 05', type: 'text' },
      { name: 'specs', label: 'Key Specifications / Gear List', placeholder: 'e.g. 18,000 sq ft, 35ft grid, 2000A power / Arri 35 + Cooke Anamorphic set', type: 'textarea' },
      { name: 'contact', label: 'Business Owner Contact', placeholder: 'name@company.com', type: 'text' },
    ],
    ctaLabel: 'INDEX IDLE CAPACITY →',
  },
  {
    id: 'need-resources',
    title: 'I Need Specific Resources',
    badge: 'Asset-Light Match',
    subtitle: 'Find pre-vetted talent, packages, stages, or facilities without broker markups.',
    description: 'Input your production requirements. DigiSynq traverses the decentralized ecosystem network to surface matching verified inventory with guaranteed availability locks.',
    fields: [
      { name: 'requirement', label: 'What Do You Need?', placeholder: 'e.g. 2nd Unit DP + Anamorphic package + Russian Arm for 3 days', type: 'textarea' },
      { name: 'region', label: 'Shooting Region', placeholder: 'e.g. Atlanta, GA / London UK / Madrid', type: 'text' },
      { name: 'dates', label: 'Target Dates', placeholder: 'e.g. Oct 24–28', type: 'text' },
      { name: 'budgetTier', label: 'Budget Tier / Guild Status', placeholder: 'e.g. IATSE Tier 2 or Non-Union Commercial', type: 'text' },
      { name: 'contact', label: 'Production Manager Contact', placeholder: 'producer@project.com', type: 'text' },
    ],
    ctaLabel: 'FIND VERIFIED RESOURCES →',
  },
  {
    id: 'have-data',
    title: 'I Have Operational Data',
    badge: 'Intelligence Partner',
    subtitle: 'Contribute empirical production telemetry to strengthen ecosystem intelligence.',
    description: 'Join research institutes, guild archives, and production accounting partners who contribute anonymized rate cards, schedule variance records, and failure telemetry to the EERG knowledge graph.',
    fields: [
      { name: 'organization', label: 'Organization / Firm Name', placeholder: 'e.g. Guild Association, Production Lab, Finance Syndicate', type: 'text' },
      { name: 'dataType', label: 'Data Domain', placeholder: 'Select data focus', type: 'select', options: ['Historical Schedule Variance & Delays', 'Crew Rate Card Benchmarks', 'Equipment Utilization Telemetry', 'Municipal Filming Permit Timelines', 'VFX Shot Turnover & Render Costs'] },
      { name: 'datasetNotes', label: 'Overview of Dataset & Format', placeholder: 'Brief summary of volume, geographic scope, and data hygiene.', type: 'textarea' },
      { name: 'contact', label: 'Research Lead Email', placeholder: 'lead@institution.org', type: 'text' },
    ],
    ctaLabel: 'SUBMIT DATA COLLABORATION →',
  },
  {
    id: 'explore-opportunity',
    title: 'I Want to Explore an Opportunity',
    badge: 'Commercial Partner',
    subtitle: 'Partner on building solutions for mapped EERG systemic root causes.',
    description: 'Explore commercial co-development or strategic deployment of mapped opportunities (such as Dark Capacity Clearinghouses, Verified Talent Intelligence, or Milestone Escrow Protocols).',
    fields: [
      { name: 'targetOpportunity', label: 'Target Opportunity ID', placeholder: 'Select from Opportunity Radar', type: 'select', options: ['OPP-01: Verified Talent Intelligence', 'OPP-02: Dark Capacity Stage & Gear Routing', 'OPP-03: Living Dependency Graph & Cascade Sentinel', 'OPP-04: Milestone Telemetry Escrow Settlement', 'OPP-05: Distributed Burst VFX Finishing Network', 'Other Systemic Opportunity'] },
      { name: 'companyType', label: 'Your Entity Type', placeholder: 'e.g. Studio, Tech Platform, Investor, Enterprise Software', type: 'text' },
      { name: 'thesis', label: 'Strategic Alignment & Objectives', placeholder: 'How does this solve your core enterprise operational challenge?', type: 'textarea' },
      { name: 'contact', label: 'Executive Email', placeholder: 'executive@enterprise.com', type: 'text' },
    ],
    ctaLabel: 'REQUEST STRATEGIC BRIEFING →',
  },
  {
    id: 'want-to-partner',
    title: 'I Want to Partner with DigiSynq',
    badge: 'Strategic Alliance',
    subtitle: 'Integrate enterprise APIs, workflow software, or distribution channels.',
    description: 'For workflow software vendors (scheduling, budgeting, payroll), completion bond guarantors, entertainment banks, and studio operating divisions seeking platform integration.',
    fields: [
      { name: 'partnerType', label: 'Partnership Category', placeholder: 'Select type', type: 'select', options: ['Enterprise Studio SLA', 'Workflow Software API Integration', 'Completion Bond / Insurance Alliance', 'Entertainment Banking Syndicate', 'Guild / Union Technology Partner'] },
      { name: 'companyName', label: 'Company / Syndicate Name', placeholder: 'e.g. Global Entertainment Bank', type: 'text' },
      { name: 'scope', label: 'Proposed Integration Scope', placeholder: 'Describe intended technical or commercial integration.', type: 'textarea' },
      { name: 'contact', label: 'Partnership Lead Email', placeholder: 'partner@company.com', type: 'text' },
    ],
    ctaLabel: 'PROPOSE PARTNERSHIP →',
  },
];
