// 47 Stakeholders across the Entertainment Ecosystem with their problem clusters & root-cause connections

export const ECOSYSTEM_CLUSTERS = [
  { id: 'creative', label: 'CREATIVE & TALENT', color: '#3EB489' },
  { id: 'production', label: 'PRODUCTION & EXECUTION', color: '#D4ED31' },
  { id: 'post_tech', label: 'POST, TECH & ASSETS', color: '#5EEAD4' },
  { id: 'commerce_legal', label: 'FINANCE, RIGHTS & LEGAL', color: '#10B981' },
  { id: 'distribution_media', label: 'DISTRIBUTION, EXHIBITION & MEDIA', color: '#818CF8' },
  { id: 'governance_community', label: 'INSTITUTIONS & AUDIENCE', color: '#FCD34D' }
];

export const STAKEHOLDERS_DATA = [
  // 1. Creative & Talent
  {
    id: 'creators',
    name: 'CREATORS',
    cluster: 'creative',
    role: 'Originators of narrative concepts, worlds, and intellectual property.',
    visibleProblems: ['Creative Compromise', 'Uncompensated Development', 'Loss of Vision in Execution'],
    rootCauses: ['Asymmetric development contracts', 'Early pipeline isolation from physical feasibility', 'Intermediary margin capture'],
    connectedTo: ['WRITERS', 'PRODUCERS', 'STUDIOS', 'IP / RIGHTS OWNERS'],
    interventions: ['STANDARDISE', 'CONNECT', 'COMMERCIALISE']
  },
  {
    id: 'writers',
    name: 'WRITERS',
    cluster: 'creative',
    role: 'Architects of story, dialogue, character, and scene structures.',
    visibleProblems: ['Infinite Unpaid Rewrites', 'Opaque Residuals', 'Credit Disputes'],
    rootCauses: ['Vague development milestones', 'Disjointed digital exploitation tracking', 'Informal sign-off protocols'],
    connectedTo: ['CREATORS', 'DIRECTORS', 'PRODUCERS', 'LEGAL / FINANCE / INSURANCE'],
    interventions: ['STANDARDISE', 'ORGANISE', 'MEASURE']
  },
  {
    id: 'directors',
    name: 'DIRECTORS',
    cluster: 'creative',
    role: 'Leaders of artistic vision and on-set execution.',
    visibleProblems: ['Compressed Shoot Days', 'Post-Production Cut Overrides', 'Technical Incompatibility'],
    rootCauses: ['Unmodeled logistical constraints in prep', 'Divergent stakeholder expectations', 'Unstandardized review loops'],
    connectedTo: ['PRODUCERS', 'ACTORS', 'TECHNICIANS', 'VFX / ANIMATION', 'STUDIOS'],
    interventions: ['COORDINATE', 'REDESIGN', 'CONNECT']
  },
  {
    id: 'actors',
    name: 'ACTORS',
    cluster: 'creative',
    role: 'Performers embodying characters and narrative emotion.',
    visibleProblems: ['Schedule Churn & Idle Holds', 'AI Likeness Exploitation', 'Late Payment Disbursements'],
    rootCauses: ['Unsynchronized second-hold agreements', 'Unchecked digital asset rights clauses', 'Delayed waterfall reconciliations'],
    connectedTo: ['TALENT MANAGEMENT', 'PRODUCERS', 'DIRECTORS', 'LEGAL / FINANCE / INSURANCE'],
    interventions: ['STANDARDISE', 'COORDINATE', 'PROTECT']
  },
  {
    id: 'technicians',
    name: 'TECHNICIANS',
    cluster: 'creative',
    role: 'Lighting, camera, sound, and grip craftspeople on physical sets.',
    visibleProblems: ['Dangerous Turnarounds', 'Late Crew Call Disruption', 'Informal Wage Settlements'],
    rootCauses: ['Lack of digital call-sheet interoperability', 'Absence of transparent industry rate standards', 'Shift drift'],
    connectedTo: ['PRODUCERS', 'PRODUCTION HOUSES', 'EQUIPMENT PROVIDERS', 'EDUCATION'],
    interventions: ['STANDARDISE', 'MEASURE', 'COORDINATE']
  },
  {
    id: 'talent-management',
    name: 'TALENT MANAGEMENT',
    cluster: 'creative',
    role: 'Agencies and managers steering careers and contract negotiations.',
    visibleProblems: ['Overbooking Collisions', 'Slow Commission Collection', 'Fragmented Opportunity Ingestion'],
    rootCauses: ['Siloed calendar systems', 'Unindexed contract payment milestones', 'Informal word-of-mouth casting calls'],
    connectedTo: ['ACTORS', 'PRODUCERS', 'CASTING DIRECTORS', 'BRANDS'],
    interventions: ['ORGANISE', 'CONNECT', 'COMMERCIALISE']
  },
  {
    id: 'cinematographers',
    name: 'CINEMATOGRAPHERS',
    cluster: 'creative',
    role: 'Directors of Photography shaping lighting, framing, and visual mood.',
    visibleProblems: ['Gear Downgrade on Set', 'Color Grading Truncation', 'Unprepped Lighting Packages'],
    rootCauses: ['Disconnect between camera orders and vendor stocks', 'Compressed post DI schedules', 'Spec mismatch'],
    connectedTo: ['DIRECTORS', 'EQUIPMENT PROVIDERS', 'COLORISTS', 'VFX / ANIMATION'],
    interventions: ['MATCH', 'COORDINATE', 'STANDARDISE']
  },
  {
    id: 'sound-designers',
    name: 'SOUND DESIGNERS',
    cluster: 'creative',
    role: 'Audio craftspeople creating atmospheric soundscapes and Foley.',
    visibleProblems: ['Muddled Set Audio', 'Late Picture Lock Handoffs', 'Compressed Mix Windows'],
    rootCauses: ['Noisy location selection without acoustic audits', 'Perpetual editorial re-edits after audio handoff', 'Time compression'],
    connectedTo: ['DIRECTORS', 'LOCATION PROVIDERS', 'TECHNICIANS', 'STUDIOS'],
    interventions: ['REDESIGN', 'STANDARDISE', 'COORDINATE']
  },

  // 2. Production & Execution
  {
    id: 'producers',
    name: 'PRODUCERS',
    cluster: 'production',
    role: 'Orchestrators of packaging, financing, operational execution, and delivery.',
    visibleProblems: ['Budget Bleed', 'Completion Bond Triggers', 'Partner Friction'],
    rootCauses: ['Unverified upstream dependencies', 'Lack of continuous variance tracking', 'Contractual misalignment'],
    connectedTo: ['STUDIOS', 'FINANCIERS', 'DIRECTORS', 'PRODUCTION HOUSES', 'VENDORS'],
    interventions: ['ORGANISE', 'MEASURE', 'COORDINATE', 'REDESIGN']
  },
  {
    id: 'production-houses',
    name: 'PRODUCTION HOUSES',
    cluster: 'production',
    role: 'Operational infrastructure entities managing physical shoots.',
    visibleProblems: ['Cash-Flow Gaps Between Milestone Payments', 'Vendor Default', 'Asset Shrinkage'],
    rootCauses: ['Asymmetric payment terms with networks/agencies', 'Informal vendor vetting', 'Paper inventory logs'],
    connectedTo: ['PRODUCERS', 'STUDIOS', 'VENDORS', 'LOGISTICS', 'EQUIPMENT PROVIDERS'],
    interventions: ['STANDARDISE', 'MATCH', 'ORGANISE']
  },
  {
    id: 'studios',
    name: 'STUDIOS',
    cluster: 'production',
    role: 'Institutional financing, production, and slate management entities.',
    visibleProblems: ['Slate Underperformance', 'Escalating Overhead', 'Asset Cannibalization'],
    rootCauses: ['Legacy development slates disconnected from actual audience shifts', 'Inflexible multi-year overheads', 'Siloed data'],
    connectedTo: ['PRODUCERS', 'DISTRIBUTION', 'OTT', 'FINANCIERS', 'BRANDS'],
    interventions: ['REDESIGN', 'MEASURE', 'UTILISE', 'PARTNER']
  },
  {
    id: 'equipment-providers',
    name: 'EQUIPMENT PROVIDERS',
    cluster: 'production',
    role: 'Owners of cinema cameras, optics, lighting fixtures, and mobile power.',
    visibleProblems: ['Depreciation Lockout', 'Unpaid Wear & Tear', 'Low Asset Utilisation'],
    rootCauses: ['No dynamic inter-house inventory sharing protocol', 'Informal damage waivers', 'Idle off-peak windows'],
    connectedTo: ['TECHNICIANS', 'PRODUCERS', 'CINEMATOGRAPHERS', 'INVESTORS'],
    interventions: ['UTILISE', 'CONNECT', 'COMMERCIALISE']
  },
  {
    id: 'location-providers',
    name: 'LOCATION PROVIDERS',
    cluster: 'production',
    role: 'Private and public owners of filmable properties and landmarks.',
    visibleProblems: ['Community Complaints', 'Property Damage Disputes', 'Permit Revocations'],
    rootCauses: ['Inadequate pre-shoot impact modeling', 'Unclear insurance liability handoffs', 'Inflexible municipal protocols'],
    connectedTo: ['PRODUCERS', 'GOVERNMENT', 'LOGISTICS', 'LEGAL / FINANCE / INSURANCE'],
    interventions: ['STANDARDISE', 'COORDINATE', 'PARTNER']
  },
  {
    id: 'vendors',
    name: 'VENDORS',
    cluster: 'production',
    role: 'Catering, security, transport, construction, and specialized fabrication.',
    visibleProblems: ['Scope Creep', '90-Day Payment Delays', 'Short-Notice Rescheduling'],
    rootCauses: ['Unclear change-order approval pipelines', 'Delayed studio cash release cycles', 'Last-minute call sheet changes'],
    connectedTo: ['PRODUCTION HOUSES', 'PRODUCERS', 'LOGISTICS'],
    interventions: ['STANDARDISE', 'COORDINATE', 'MEASURE']
  },
  {
    id: 'logistics',
    name: 'LOGISTICS',
    cluster: 'production',
    role: 'Movement of cast, crew, mobile units, freight, and international gear customs.',
    visibleProblems: ['Customs Clearance Impasses', 'Transit Damage', 'Deadhead Mileage Waste'],
    rootCauses: ['Unverified carnet documentation', 'Unoptimized multi-unit transit routes', 'Fragmented dispatch channels'],
    connectedTo: ['EQUIPMENT PROVIDERS', 'PRODUCTION HOUSES', 'GOVERNMENT'],
    interventions: ['ORGANISE', 'TECHNOLOGISE', 'COORDINATE']
  },
  {
    id: 'line-producers',
    name: 'LINE PRODUCERS',
    cluster: 'production',
    role: 'Daily on-the-ground budget and operational managers.',
    visibleProblems: ['Endless Spreadsheet Reconciliation', 'Contingency Exhaustion', 'Departmental Overspend'],
    rootCauses: ['Disconnected accounting tools', 'Real-time expense invisibility', 'Reactive fire-fighting'],
    connectedTo: ['PRODUCERS', 'VENDORS', 'TECHNICIANS', 'STUDIOS'],
    interventions: ['TECHNOLOGISE', 'STANDARDISE', 'ORGANISE']
  },
  {
    id: 'costume-wardrobe',
    name: 'COSTUME & WARDROBE',
    cluster: 'production',
    role: 'Designers and costumiers managing hundreds of continuity-sensitive garments.',
    visibleProblems: ['Continuity Breakdown', 'Fitting Schedule Delays', 'Inventory Loss Post-Wrap'],
    rootCauses: ['Paper-based continuity tagging', 'Actor availability shifts without wardrobe padding', 'Unindexed prop storage'],
    connectedTo: ['ACTORS', 'DIRECTORS', 'PRODUCTION HOUSES'],
    interventions: ['ORGANISE', 'STANDARDISE', 'UTILISE']
  },

  // 3. Post, Tech & Creative Services
  {
    id: 'vfx-animation',
    name: 'VFX / ANIMATION',
    cluster: 'post_tech',
    role: 'Visual effects studios, 3D animators, matchmovers, and compositors.',
    visibleProblems: ['Massive Shot Reshoots', 'Crunch Fatigue', 'Fixed-Price Margin Disasters'],
    rootCauses: ['Unversioned script iterations after plate turnover', 'Subjective non-technical notes', 'Missing on-set LiDAR metadata'],
    connectedTo: ['STUDIOS', 'DIRECTORS', 'TECHNOLOGY', 'PRODUCERS'],
    interventions: ['REDESIGN', 'STANDARDISE', 'COORDINATE']
  },
  {
    id: 'technology',
    name: 'TECHNOLOGY',
    cluster: 'post_tech',
    role: 'Developers of virtual production, rendering, camera firmware, and software pipelines.',
    visibleProblems: ['Slow On-Set Adoption', 'Proprietary Walled Gardens', 'Legacy Pipeline Resistance'],
    rootCauses: ['Tools built without frontline crew usability testing', 'Fragmented non-interoperable file standards', 'Training deficit'],
    connectedTo: ['VFX / ANIMATION', 'STUDIOS', 'EQUIPMENT PROVIDERS', 'EDUCATION'],
    interventions: ['CONNECT', 'TRAIN', 'STANDARDISE']
  },
  {
    id: 'data',
    name: 'DATA',
    cluster: 'post_tech',
    role: 'Digital asset managers, DITs, cloud storage operators, and metadata trackers.',
    visibleProblems: ['Drive Loss / Corruption', 'Missing Ingestion Tags', 'Unindexed Archival Assets'],
    rootCauses: ['Non-standard checksum verification on set', 'Opaque naming conventions', 'Lack of unified metadata schemas'],
    connectedTo: ['TECHNICIANS', 'VFX / ANIMATION', 'POST SUPERVISORS', 'DISTRIBUTION'],
    interventions: ['STANDARDISE', 'ORGANISE', 'TECHNOLOGISE']
  },
  {
    id: 'post-supervisors',
    name: 'POST SUPERVISORS',
    cluster: 'post_tech',
    role: 'Traffic managers synchronizing editorial, sound, color, and delivery specs.',
    visibleProblems: ['Missed Delivery Milestones', 'Codec / Color Space Mismatch', 'Q.C. Rejections'],
    rootCauses: ['Unclear network/platform deliverable specs upfront', 'Fragmented vendor schedules', 'Unmanaged version branching'],
    connectedTo: ['DIRECTORS', 'VFX / ANIMATION', 'SOUND DESIGNERS', 'OTT', 'DISTRIBUTION'],
    interventions: ['STANDARDISE', 'COORDINATE', 'ORGANISE']
  },
  {
    id: 'colorists',
    name: 'COLORISTS',
    cluster: 'post_tech',
    role: 'Digital intermediate artists grading look, texture, and HDR deliverables.',
    visibleProblems: ['Uncalibrated Monitor Discrepancies', 'Inadequate Conforming Time', 'Conflicting Creative Notes'],
    rootCauses: ['Client review on uncalibrated consumer screens', 'EDL/XML conform errors from non-standard editorial', 'Rushed finishing'],
    connectedTo: ['CINEMATOGRAPHERS', 'DIRECTORS', 'POST SUPERVISORS'],
    interventions: ['STANDARDISE', 'TECHNOLOGISE', 'COORDINATE']
  },
  {
    id: 'dubbing-localization',
    name: 'DUBBING & LOCALIZATION',
    cluster: 'post_tech',
    role: 'Translators, voice-over talent, and audio engineers adapting slates globally.',
    visibleProblems: ['Cultural Mismatch', 'Lip-Sync Artifacts', 'Compressed Turnaround Windows'],
    rootCauses: ['Late delivery of dialogue stems and M&E tracks', 'Machine translation without cultural idiomatic tuning', 'Zero context guides'],
    connectedTo: ['OTT', 'DISTRIBUTION', 'POST SUPERVISORS'],
    interventions: ['MATCH', 'TRAIN', 'COORDINATE']
  },

  // 4. Finance, Rights & Legal
  {
    id: 'financiers',
    name: 'FINANCIERS',
    cluster: 'commerce_legal',
    role: 'Debt funds, mezzanine lenders, and equity groups structuring production capital.',
    visibleProblems: ['Capital Lockup', 'Recoupment Waterfall Collapse', 'Collateral Devaluation'],
    rootCauses: ['Opaque sub-distributor reporting', 'Inadequate risk scoring of talent packaging', 'Manual escrow reconciliation'],
    connectedTo: ['PRODUCERS', 'STUDIOS', 'INVESTORS', 'LEGAL / FINANCE / INSURANCE'],
    interventions: ['MEASURE', 'COMMERCIALISE', 'STANDARDISE']
  },
  {
    id: 'investors',
    name: 'INVESTORS',
    cluster: 'commerce_legal',
    role: 'High-net-worth individuals and venture capital funding IP slates.',
    visibleProblems: ['Lack of Portfolio Liquidity', 'Zero Data Visibility During Production', 'Vanishing Returns'],
    rootCauses: ['Information asymmetry between producers and outside capital', 'Lack of benchmarked slate performance data', 'Unchecked overheads'],
    connectedTo: ['FINANCIERS', 'PRODUCERS', 'STUDIOS'],
    interventions: ['MEASURE', 'ORGANISE', 'PARTNER']
  },
  {
    id: 'ip-rights-owners',
    name: 'IP / RIGHTS OWNERS',
    cluster: 'commerce_legal',
    role: 'Custodians of underlying books, comics, original scripts, and legacy franchises.',
    visibleProblems: ['Unexploited Reversion Windows', 'Unauthorized Regional Derivations', 'Underreported Royalties'],
    rootCauses: ['Dormant analog contracts in paper archives', 'Absence of automated rights audit engines', 'Opaque sub-licensing'],
    connectedTo: ['CREATORS', 'STUDIOS', 'OTT', 'LEGAL / FINANCE / INSURANCE'],
    interventions: ['COMMERCIALISE', 'STANDARDISE', 'UTILISE']
  },
  {
    id: 'legal-finance-insurance',
    name: 'LEGAL / FINANCE / INSURANCE',
    cluster: 'commerce_legal',
    role: 'Entertainment attorneys, escrow agents, completion bonders, and insurers.',
    visibleProblems: ['Protracted Closing Cycles', 'Ambiguous Force Majeure Triggers', 'High Premium Load'],
    rootCauses: ['Custom non-standardized contract drafting from scratch', 'Lack of historical risk telemetry', 'Paper-driven clearance processes'],
    connectedTo: ['PRODUCERS', 'FINANCIERS', 'LOCATION PROVIDERS', 'ACTORS'],
    interventions: ['STANDARDISE', 'ORGANISE', 'MEASURE']
  },
  {
    id: 'completion-guarantors',
    name: 'COMPLETION GUARANTORS',
    cluster: 'commerce_legal',
    role: 'Entities underwriting that a film will be completed on time and within budget.',
    visibleProblems: ['Takeover Interventions', 'Excess Reserve Deposits', 'Unpredictable Production Reschedules'],
    rootCauses: ['Lagging daily cost reporting', 'Hidden creative disagreements between director and producer', 'Unhedged currency/weather exposure'],
    connectedTo: ['FINANCIERS', 'PRODUCERS', 'DIRECTORS', 'LEGAL / FINANCE / INSURANCE'],
    interventions: ['MEASURE', 'COORDINATE', 'STANDARDISE']
  },
  {
    id: 'music',
    name: 'MUSIC',
    cluster: 'commerce_legal',
    role: 'Composers, music supervisors, record labels, and publishing rights societies.',
    visibleProblems: ['Sync Clearance Impasses', 'Late Cue Sheet Filing', 'Streaming Royalty Shrinkage'],
    rootCauses: ['Multi-party fragmented publishing ownership', 'Unstandardized cue sheet transmission to PROs', 'Untracked micro-licensing'],
    connectedTo: ['DIRECTORS', 'POST SUPERVISORS', 'IP / RIGHTS OWNERS', 'DISTRIBUTION'],
    interventions: ['STANDARDISE', 'CONNECT', 'COMMERCIALISE']
  },
  {
    id: 'brands',
    name: 'BRANDS',
    cluster: 'commerce_legal',
    role: 'Corporate sponsors, product placement partners, and branded entertainment funders.',
    visibleProblems: ['Mismatched Placement Context', 'Unclear Brand ROI', 'Post-Wrap Cancellation'],
    rootCauses: ['Late placement integration into shooting scripts', 'No verified audience engagement metrics', 'Creative resistance on set'],
    connectedTo: ['PRODUCERS', 'ADVERTISING', 'STUDIOS', 'MARKETING'],
    interventions: ['MATCH', 'COORDINATE', 'MEASURE']
  },
  {
    id: 'advertising',
    name: 'ADVERTISING',
    cluster: 'commerce_legal',
    role: 'Commercial production companies, agencies, and brand campaign producers.',
    visibleProblems: ['Hyper-Compressed Turnarounds', 'Client Revision Loops', 'Margin Erosion'],
    rootCauses: ['Unmanaged client expectation cycles', 'Fragmented multi-platform deliverable ratios', 'Over-spec bidding'],
    connectedTo: ['BRANDS', 'PRODUCTION HOUSES', 'VFX / ANIMATION'],
    interventions: ['REDESIGN', 'STANDARDISE', 'MATCH']
  },

  // 5. Distribution, Exhibition & Media
  {
    id: 'distribution',
    name: 'DISTRIBUTION',
    cluster: 'distribution_media',
    role: 'Global and domestic distributors selling theatrical, video, and broadcast rights.',
    visibleProblems: ['High P&A Recovery Risk', 'Regional Sub-Distributor Defaults', 'Territorial Cannibalization'],
    rootCauses: ['Unscientific release windowing', 'Opaque offline reporting channels', 'Fragmented international sales agents'],
    connectedTo: ['STUDIOS', 'THEATRES', 'OTT', 'FINANCIERS'],
    interventions: ['REDESIGN', 'MEASURE', 'COORDINATE']
  },
  {
    id: 'theatres',
    name: 'THEATRES',
    cluster: 'distribution_media',
    role: 'Cinema multiplexes, single screens, and independent theatrical exhibition chains.',
    visibleProblems: ['Empty Weekday Auditoriums', 'Inflexible Virtual Print Fee Legacies', 'Shortened Windows'],
    rootCauses: ['Rigid screening schedules disconnected from hyper-local demand', 'OTT window compression', 'High concession margin reliance'],
    connectedTo: ['DISTRIBUTION', 'STUDIOS', 'AUDIENCE'],
    interventions: ['UTILISE', 'COMMERCIALISE', 'PARTNER']
  },
  {
    id: 'ott',
    name: 'OTT',
    cluster: 'distribution_media',
    role: 'Subscription and ad-supported streaming platforms acquiring slates globally.',
    visibleProblems: ['Subscriber Churn', 'Content Saturation', 'Ballooning Acquisition Costs'],
    rootCauses: ['Recommendation algorithm fatigue', 'Overbidding on celebrity packages rather than narrative stickiness', 'Catalog paralysis'],
    connectedTo: ['STUDIOS', 'PRODUCTION HOUSES', 'AUDIENCE', 'DATA'],
    interventions: ['MEASURE', 'MATCH', 'REDESIGN']
  },
  {
    id: 'television',
    name: 'TELEVISION',
    cluster: 'distribution_media',
    role: 'Linear broadcast networks, cable operators, and syndicated channels.',
    visibleProblems: ['Cord-Cutting Viewership Collapse', 'Ad Revenue Deficit', 'Fixed Broadcast Rigidities'],
    rootCauses: ['Aging demographic retention models', 'Inability to offer dynamic programmatic ads', 'High structural overhead'],
    connectedTo: ['STUDIOS', 'ADVERTISING', 'BRANDS', 'DISTRIBUTION'],
    interventions: ['REDESIGN', 'UTILISE', 'COMMERCIALISE']
  },
  {
    id: 'pr-media',
    name: 'PR / MEDIA',
    cluster: 'distribution_media',
    role: 'Publicity firms, entertainment journalists, junket coordinators, and trade media.',
    visibleProblems: ['Diminishing Editorial Coverage', 'Algorithmic Noise', 'Unauthentic Backlash'],
    rootCauses: ['Formulaic press junkets with low audience cut-through', 'Over-reliance on synthetic clickbait', 'Late activation'],
    connectedTo: ['PRODUCERS', 'ACTORS', 'INFLUENCERS', 'AUDIENCE'],
    interventions: ['REDESIGN', 'MATCH', 'COORDINATE']
  },
  {
    id: 'influencers',
    name: 'INFLUENCERS',
    cluster: 'distribution_media',
    role: 'Content creators, cultural commentators, and digital taste-makers.',
    visibleProblems: ['Unconvincing Sponsorship Readouts', 'Audience Trust Erosion', 'Unclear Attribution'],
    rootCauses: ['Blunt corporate briefing notes without creative latitude', 'Vanity metric evaluation', 'No direct ticket attribution'],
    connectedTo: ['PR / MEDIA', 'BRANDS', 'AUDIENCE', 'MARKETING'],
    interventions: ['MATCH', 'MEASURE', 'CONNECT']
  },
  {
    id: 'live-entertainment',
    name: 'LIVE ENTERTAINMENT',
    cluster: 'distribution_media',
    role: 'Concerts, theatrical tours, immersive IP exhibitions, and arena spectacles.',
    visibleProblems: ['Soaring Venue & Staging Costs', 'Ticket Scalping Distortion', 'Single-City Weather Exposure'],
    rootCauses: ['Fragmented regional labor rules', 'Unchecked bot resale monopolies', 'Rigid touring route logistics'],
    connectedTo: ['LOGISTICS', 'EQUIPMENT PROVIDERS', 'AUDIENCE', 'MUSIC'],
    interventions: ['COORDINATE', 'UTILISE', 'STANDARDISE']
  },
  {
    id: 'gaming',
    name: 'GAMING',
    cluster: 'distribution_media',
    role: 'Video game developers and interactive studios adapting film/TV IP.',
    visibleProblems: ['Narrative Disconnect in Adaptations', 'Delayed Asset Turnover', 'Disappointing Cross-Sales'],
    rootCauses: ['Film visual assets unsuitable for real-time engine geometry', 'Late creative sync with narrative designers', 'Siloed teams'],
    connectedTo: ['IP / RIGHTS OWNERS', 'VFX / ANIMATION', 'TECHNOLOGY', 'AUDIENCE'],
    interventions: ['CONNECT', 'STANDARDISE', 'PARTNER']
  },
  {
    id: 'festivals',
    name: 'FESTIVALS',
    cluster: 'distribution_media',
    role: 'International film and media festivals, markets, and screening showcases.',
    visibleProblems: ['Skyrocketing Submission Overload', 'Depressed Market Sales', 'High Travel Barriers'],
    rootCauses: ['Lack of curated buyer-seller matching protocols', 'Manual curation bottlenecks', 'Siloed offline market meetings'],
    connectedTo: ['CREATORS', 'DISTRIBUTION', 'PRODUCERS', 'GOVERNMENT'],
    interventions: ['MATCH', 'ORGANISE', 'CONNECT']
  },

  // 6. Institutions & Community
  {
    id: 'audience',
    name: 'AUDIENCE',
    cluster: 'governance_community',
    role: 'The ultimate consumer, viewer, subscriber, and cultural participant.',
    visibleProblems: ['Choice Paralysis', 'Derivative Sequels Fatigue', 'Ticket Price Escalation'],
    rootCauses: ['Algorithm monoculture prioritizing safe lookalikes', 'Fragmented subscription paywalls', 'Disconnected development loops'],
    connectedTo: ['THEATRES', 'OTT', 'CREATORS', 'DISTRIBUTION'],
    interventions: ['MATCH', 'MEASURE', 'CONNECT']
  },
  {
    id: 'education',
    name: 'EDUCATION',
    cluster: 'governance_community',
    role: 'Film schools, technical institutes, animation academies, and universities.',
    visibleProblems: ['Curriculum Obsolescence', 'Low Graduate Employment', 'Prohibitive Tuition'],
    rootCauses: ['Academic curricula updated every 4 years while industry changes quarterly', 'Disconnect from working production sets', 'Outdated gear'],
    connectedTo: ['TECHNICIANS', 'TECHNOLOGY', 'STUDIOS', 'GOVERNMENT'],
    interventions: ['TRAIN', 'PARTNER', 'CONNECT']
  },
  {
    id: 'government',
    name: 'GOVERNMENT',
    cluster: 'governance_community',
    role: 'State film commissions, subsidy bodies, censorship boards, and public cultural funds.',
    visibleProblems: ['Subsidy Arbitrage Racing', 'Delayed Rebate Disbursement', 'Bureaucratic Audit Backlogs'],
    rootCauses: ['Manual cross-checking of local spend invoices', 'Inter-state subsidy race to the bottom', 'Siloed compliance portals'],
    connectedTo: ['PRODUCERS', 'LOCATION PROVIDERS', 'FINANCIERS', 'LEGAL / FINANCE / INSURANCE'],
    interventions: ['STANDARDISE', 'MEASURE', 'PARTNER']
  },
  {
    id: 'merchandising',
    name: 'MERCHANDISING',
    cluster: 'governance_community',
    role: 'Physical toy, apparel, collectible, and consumer product licensees.',
    visibleProblems: ['Inventory Overstock', 'Counterfeit Inundation', 'Late Shelf Placement'],
    rootCauses: ['Long manufacturing lead times decoupled from theatrical buzz', 'Unregulated digital commerce listings', 'Opaque trend signals'],
    connectedTo: ['IP / RIGHTS OWNERS', 'BRANDS', 'AUDIENCE'],
    interventions: ['COORDINATE', 'COMMERCIALISE', 'STANDARDISE']
  },
  {
    id: 'archival-preservation',
    name: 'ARCHIVAL / PRESERVATION',
    cluster: 'governance_community',
    role: 'Custodians preserving physical film negatives, magnetic tapes, and master files.',
    visibleProblems: ['Vinegar Syndrome Neglect', 'Digital Bit-Rot', 'Lost Master Separation'],
    rootCauses: ['Underfunded preservation budgets', 'Lack of unified long-term cold cloud migration protocols', 'Dispersed legacy vaults'],
    connectedTo: ['STUDIOS', 'IP / RIGHTS OWNERS', 'GOVERNMENT'],
    interventions: ['ORGANISE', 'STANDARDISE', 'UTILISE']
  },
  {
    id: 'casting-directors',
    name: 'CASTING DIRECTORS',
    cluster: 'creative',
    role: 'Curators matching dramatic script roles with performer archetypes.',
    visibleProblems: ['Submissions Deluge', 'Fragmented Audition Platforms', 'Shortlisted Talent Dropping Out'],
    rootCauses: ['Unindexed self-tape portals', 'Unsynchronized holds across competing projects', 'Lack of standardized talent telemetry'],
    connectedTo: ['DIRECTORS', 'ACTORS', 'TALENT MANAGEMENT', 'PRODUCERS'],
    interventions: ['ORGANISE', 'MATCH', 'COORDINATE']
  },
  {
    id: 'stunt-coordinators',
    name: 'STUNT COORDINATORS',
    cluster: 'creative',
    role: 'Safety architects designing physical action, pyrotechnics, and vehicular stunts.',
    visibleProblems: ['On-Set Injury Hazard', 'Rushed Rigging Windows', 'Ambiguous Rehearsal Mandates'],
    rootCauses: ['Action sequences rewritten overnight without rehearsal recalculation', 'Pressure to meet call times', 'Unstandardized safety checklists'],
    connectedTo: ['DIRECTORS', 'TECHNICIANS', 'PRODUCERS', 'LEGAL / FINANCE / INSURANCE'],
    interventions: ['STANDARDISE', 'REDESIGN', 'COORDINATE']
  }
];
