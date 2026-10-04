/**
 * ENTERTAINMENT ECOSYSTEM ROOT-CAUSE GRAPH (EERG)
 * Master Consolidated Data Model — Version 1.0
 * 
 * Maps the entertainment ecosystem as a connected system of stakeholders,
 * problems, bottlenecks, root causes, dependencies, impacts, existing solutions,
 * and high-leverage opportunities.
 */

export interface EERGLayer {
  id: string;
  name: string;
  code: string;
  description: string;
  sectors: string[];
}

export interface EERGStakeholderCategory {
  id: string;
  code: string;
  title: string;
  layer: 'CREATION' | 'PRODUCTION' | 'COMMERCIAL' | 'INFRASTRUCTURE' | 'CONSUMPTION';
  description: string;
  stakeholders: string[];
}

export interface EERGRootCause {
  id: string;
  code: string;
  name: string;
  family: string;
  description: string;
  centralityScore: number; // 1-100
  downstreamProblems: number;
  propagationRisk: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  interventions: string[];
}

export interface EERGBottleneck {
  id: string;
  code: string;
  name: string;
  domain: string;
  whereItOccurs: string;
  blockedFlow: string;
  affectedStakeholders: string[];
  primaryRootCauses: string[];
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM';
}

export interface EERGLoop {
  id: string;
  name: string;
  code: string;
  subtitle: string;
  summary: string;
  steps: string[];
  systemicIntervention: string;
}

export interface EERGPathCase {
  id: string;
  stakeholder: string;
  problem: string;
  bottleneck: string;
  immediateCauses: string[];
  rootCauses: string[];
  otherAffected: string[];
  downstreamImpact: string[];
  currentWorkaround: string;
  unsolvedGap: string;
  opportunity: string;
  potentialPayingStakeholders: string[];
}

export interface EERGMatrixRow {
  rootCause: string;
  code: string;
  exposures: {
    actor: number;
    producer: number;
    casting: number;
    vfx: number;
    music: number;
    ott: number;
    audience: number;
  };
}

// ── 1. The 5 Ecosystem Master Layers ─────────────────────────
export const EERG_LAYERS: EERGLayer[] = [
  {
    id: 'layer-creation',
    code: 'A',
    name: 'CREATION',
    description: 'The creative seedbed: actors, writers, composers, showrunners, animators, and digital creators developing intellectual property.',
    sectors: ['Acting', 'Writing', 'Directing', 'Music', 'Dance', 'Comedy', 'Content Creation', 'Influencers', 'Gaming', 'Animation']
  },
  {
    id: 'layer-production',
    code: 'B',
    name: 'PRODUCTION',
    description: 'Physical and virtual assembly: soundstages, camera packages, line production, VFX pipelines, editing suites, and post finishing.',
    sectors: ['Film Production', 'Television Production', 'OTT Production', 'Live Events', 'VFX', 'Post-Production', 'Studios', 'Equipment', 'Production Services']
  },
  {
    id: 'layer-commercial',
    code: 'C',
    name: 'COMMERCIAL',
    description: 'Monetization, distribution, and exhibition: marketing campaigns, screen allocation, licensing deals, brand sponsorship, and syndication.',
    sectors: ['Advertising', 'Marketing', 'Distribution', 'Exhibition', 'Licensing', 'Sponsorship']
  },
  {
    id: 'layer-infrastructure',
    code: 'D',
    name: 'INFRASTRUCTURE',
    description: 'The governing foundation: cloud platforms, completion bonds, entertainment attorneys, regulatory bodies, and industry guilds.',
    sectors: ['Technology', 'Finance', 'Legal / IP', 'Government / Regulation', 'Education', 'Industry Associations']
  },
  {
    id: 'layer-consumption',
    code: 'E',
    name: 'CONSUMPTION',
    description: 'Attention capture and audience retention: theatrical moviegoers, streaming subscribers, fandom communities, concertgoers, and superfans.',
    sectors: ['Audience', 'Fans', 'Communities', 'Subscribers', 'Consumers']
  }
];

// ── 2. The 20 Master Stakeholder Categories (160+ Stakeholders) ─
export const EERG_STAKEHOLDER_CATEGORIES: EERGStakeholderCategory[] = [
  {
    id: 'cat-creative-talent',
    code: '4.1',
    title: 'Creative & Talent',
    layer: 'CREATION',
    description: 'Front-of-camera and primary generative creators across screen, audio, stage, and digital mediums.',
    stakeholders: [
      'Actors', 'Actresses', 'Supporting actors', 'Child artists', 'Background artists / junior artists',
      'Theatre artists', 'Stand-up comedians', 'Hosts', 'Anchors', 'Presenters',
      'Dancers', 'Choreographers', 'Singers', 'Musicians', 'Bands',
      'DJs', 'Composers', 'Music producers', 'Lyricists', 'Songwriters',
      'Screenwriters', 'Story writers', 'Dialogue writers', 'Script consultants', 'Showrunners',
      'Directors', 'Assistant directors', 'Creative directors', 'Art directors', 'Photographers',
      'Illustrators', 'Voice artists', 'Voice-over artists', 'Dubbing artists', 'Influencers',
      'Content creators', 'Streamers', 'YouTubers', 'Podcasters', 'Social-media creators',
      'VFX artists', 'Animators', 'Game designers', 'Comic artists', 'XR creators'
    ]
  },
  {
    id: 'cat-production',
    code: '4.2',
    title: 'Physical Production & Crew',
    layer: 'PRODUCTION',
    description: 'The operational machinery that schedules, staffs, outfits, and executes physical production.',
    stakeholders: [
      'Production houses', 'Film studios', 'Television production companies', 'OTT production companies',
      'Independent producers', 'Executive producers', 'Line producers', 'Co-producers',
      'Production managers', 'Production coordinators', 'Production assistants', 'Production accountants',
      'Casting companies', 'Casting directors', 'Talent agencies', 'Artist managers',
      'Artist management companies', 'Location managers', 'Location agencies', 'Production designers',
      'Costume designers', 'Makeup artists', 'Hair stylists', 'Set designers',
      'Set builders', 'Prop companies', 'Equipment rental companies', 'Camera rental companies',
      'Lighting rental companies', 'Sound equipment companies', 'Studio facilities', 'Recording studios',
      'Rehearsal studios'
    ]
  },
  {
    id: 'cat-film',
    code: '4.3',
    title: 'Film & Feature Systems',
    layer: 'PRODUCTION',
    description: 'The specialized theatrical feature pipeline from greenlight to laboratory release.',
    stakeholders: [
      'Producers', 'Studios', 'Directors', 'Actors', 'Writers',
      'Cinematographers', 'Editors', 'Music directors', 'Lyricists', 'Choreographers',
      'Production designers', 'Costume designers', 'Makeup artists', 'VFX studios', 'Dubbing studios',
      'Color-grading studios', 'Sound designers', 'Foley artists', 'DI studios', 'Film laboratories',
      'Film distributors', 'Sub-distributors', 'Theatre chains', 'Single-screen cinemas', 'Multiplexes',
      'Film festivals', 'Film critics', 'Review platforms', 'Film journalists', 'Film societies',
      'Audience communities'
    ]
  },
  {
    id: 'cat-television',
    code: '4.4',
    title: 'Television & Broadcast',
    layer: 'COMMERCIAL',
    description: 'Linear broadcasting, satellite transmission, and episodic television production ecosystems.',
    stakeholders: [
      'TV networks', 'Broadcasters', 'Television channels', 'Cable operators', 'DTH operators',
      'Satellite operators', 'TV production houses', 'Show producers', 'TV directors', 'Writers',
      'Actors', 'Anchors', 'Reality-show participants', 'Regional broadcasters', 'International broadcasters',
      'Syndication companies', 'Broadcast technology providers', 'Transmission providers', 'Measurement companies', 'TV advertisers'
    ]
  },
  {
    id: 'cat-ott',
    code: '4.5',
    title: 'OTT & Digital Streaming',
    layer: 'COMMERCIAL',
    description: 'Subscription video-on-demand, FAST channels, content delivery networks, and recommendation engines.',
    stakeholders: [
      'OTT platforms', 'Streaming platforms', 'OTT aggregators', 'FAST platforms', 'Connected-TV platforms',
      'OTT content producers', 'OTT commissioners', 'OTT executives', 'OTT distributors', 'Content licensors',
      'Content aggregators', 'Streaming technology companies', 'CDN providers', 'Video-hosting providers', 'DRM providers',
      'Recommendation-engine providers', 'OTT analytics companies', 'Subscription/payment providers', 'OTT advertisers', 'OTT audiences'
    ]
  },
  {
    id: 'cat-music',
    code: '4.6',
    title: 'Music & Audio Rights',
    layer: 'CREATION',
    description: 'Composition, recording, publishing, sync licensing, and performing-rights infrastructure.',
    stakeholders: [
      'Singers', 'Composers', 'Music producers', 'Lyricists', 'Songwriters',
      'Musicians', 'Bands', 'DJs', 'Record labels', 'Music publishers',
      'Music distributors', 'Music aggregators', 'Artist managers', 'Booking agencies', 'Concert promoters',
      'Music venues', 'Recording studios', 'Sound engineers', 'Mixing engineers', 'Mastering engineers',
      'Music supervisors', 'Sync licensing companies', 'Performing-rights organizations', 'Royalty organizations', 'Copyright owners',
      'Streaming platforms', 'Music journalists', 'Music critics', 'Music festivals', 'Fans'
    ]
  },
  {
    id: 'cat-live',
    code: '4.7',
    title: 'Live Entertainment & Events',
    layer: 'PRODUCTION',
    description: 'Arenas, concerts, festivals, crowd management, ticketing engines, and stage logistics.',
    stakeholders: [
      'Event organizers', 'Event management companies', 'Concert promoters', 'Festival organizers', 'Venue owners',
      'Stadiums', 'Arenas', 'Auditoriums', 'Clubs', 'Pubs',
      'Convention centres', 'Exhibition centres', 'Ticketing companies', 'Ticket distributors', 'Artist booking agencies',
      'Artist managers', 'Stage-production companies', 'Sound companies', 'Lighting companies', 'LED/display companies',
      'Rigging companies', 'Security companies', 'Crowd-management companies', 'Hospitality companies', 'Catering companies',
      'Transportation providers', 'Event photographers', 'Event videographers', 'Sponsors', 'Brand partners',
      'Government/event authorities', 'Audience'
    ]
  },
  {
    id: 'cat-advertising',
    code: '4.8',
    title: 'Advertising & Brand Partnerships',
    layer: 'COMMERCIAL',
    description: 'Brand sponsorships, product placement, media planners, programmatic ad exchanges, and influencer agencies.',
    stakeholders: [
      'Advertisers', 'Brands', 'Advertising agencies', 'Creative agencies', 'Media agencies',
      'Digital agencies', 'PR agencies', 'Influencer agencies', 'Brand ambassadors', 'Celebrity endorsers',
      'Sponsorship companies', 'Product-placement agencies', 'Branded-content producers', 'Experiential marketing companies', 'Media buyers',
      'Media planners', 'Marketing consultants', 'Audience researchers', 'Advertising technology companies', 'Ad networks',
      'Programmatic platforms'
    ]
  },
  {
    id: 'cat-distribution',
    code: '4.9',
    title: 'Distribution & Syndication',
    layer: 'COMMERCIAL',
    description: 'Global territorial licensing, theatrical bookers, international sales agents, and content aggregators.',
    stakeholders: [
      'Film distributors', 'Digital distributors', 'Music distributors', 'TV distributors', 'International distributors',
      'Regional distributors', 'Theatrical distributors', 'Sub-distributors', 'Content aggregators', 'Syndication companies',
      'Licensing companies', 'Sales agents', 'International sales agents', 'OTT aggregators', 'YouTube networks',
      'Digital publishing platforms', 'Telecom operators', 'Cable operators', 'DTH operators', 'Streaming platforms',
      'Cinema chains', 'Retail entertainment businesses'
    ]
  },
  {
    id: 'cat-exhibition',
    code: '4.10',
    title: 'Exhibition & Consumer Gateways',
    layer: 'CONSUMPTION',
    description: 'Physical theatres, premium large formats, drive-ins, cultural centres, and connected living-room ecosystems.',
    stakeholders: [
      'Multiplexes', 'Single-screen theatres', 'Premium cinemas', 'Drive-in cinemas', 'Concert venues',
      'Stadiums', 'Arenas', 'Clubs', 'Pubs', 'Theatres',
      'Cultural centres', 'Museums', 'Theme parks', 'OTT platforms', 'YouTube',
      'Social media', 'Music streaming', 'Podcast platforms', 'Gaming platforms', 'Metaverse platforms',
      'Connected TV', 'Smart-TV ecosystems'
    ]
  },
  {
    id: 'cat-gaming',
    code: '4.11',
    title: 'Gaming & Interactive Entertainment',
    layer: 'CREATION',
    description: 'Game engines, esports tournaments, game publishers, streaming communities, and console ecosystems.',
    stakeholders: [
      'Game studios', 'Game developers', 'Game publishers', 'Game designers', 'Game artists',
      'Game programmers', 'Esports organizations', 'Esports teams', 'Esports players', 'Tournament organizers',
      'Gaming influencers', 'Gaming communities', 'Game distributors', 'App stores', 'Console manufacturers',
      'PC gaming platforms', 'Mobile gaming platforms', 'Game investors', 'Sponsors', 'Advertisers'
    ]
  },
  {
    id: 'cat-vfx-anim',
    code: '4.12',
    title: 'Animation, VFX & Creative Tech',
    layer: 'PRODUCTION',
    description: 'Virtual production LED stages, generative AI models, motion capture, and cloud rendering farms.',
    stakeholders: [
      'Animation studios', 'VFX studios', 'CGI studios', 'Motion-capture companies', 'Rotoscopy artists',
      'Compositing artists', '3D artists', '2D artists', 'Character designers', 'Motion designers',
      'Game-art studios', 'Virtual-production studios', 'XR studios', 'AR companies', 'VR companies',
      'MR companies', 'Virtual production technology providers', 'AI-content companies', 'Generative-AI companies', 'Rendering companies',
      'Cloud-rendering providers', 'Post-production technology providers'
    ]
  },
  {
    id: 'cat-tech-infra',
    code: '4.13',
    title: 'Technology & Cloud Infrastructure',
    layer: 'INFRASTRUCTURE',
    description: 'Data centers, DRM security systems, telecom pipes, payment gateways, and project management software.',
    stakeholders: [
      'Cloud providers', 'CDN providers', 'Data centres', 'Telecom operators', 'Internet service providers',
      'Streaming infrastructure providers', 'Video compression companies', 'DRM providers', 'Cybersecurity companies', 'AI companies',
      'Data analytics companies', 'Recommendation engines', 'Search engines', 'Social platforms', 'Payment gateways',
      'Identity providers', 'Authentication providers', 'CRM providers', 'Marketing technology companies', 'Ticketing technology companies',
      'Production-management software', 'Collaboration software'
    ]
  },
  {
    id: 'cat-finance',
    code: '4.14',
    title: 'Finance & Capital Architecture',
    layer: 'INFRASTRUCTURE',
    description: 'Film financiers, completion bonds, private equity, tax incentives, and revenue-sharing audits.',
    stakeholders: [
      'Banks', 'NBFCs', 'Venture capital funds', 'Private equity funds', 'Family offices',
      'Angel investors', 'Film financiers', 'Production financiers', 'Music investors', 'Studio investors',
      'Strategic investors', 'Media conglomerates', 'Insurance companies', 'Completion-bond providers', 'Credit agencies',
      'Financial advisors', 'Investment bankers', 'Accountants', 'Tax advisors', 'Auditors',
      'Revenue-sharing partners'
    ]
  },
  {
    id: 'cat-legal',
    code: '4.15',
    title: 'Legal, IP & Rights Management',
    layer: 'INFRASTRUCTURE',
    description: 'Entertainment bar attorneys, chain-of-title verifiers, anti-piracy units, and royalty collective societies.',
    stakeholders: [
      'Entertainment lawyers', 'IP lawyers', 'Copyright lawyers', 'Trademark lawyers', 'Contract lawyers',
      'Litigation lawyers', 'Talent lawyers', 'Production lawyers', 'Licensing lawyers', 'Legal consultants',
      'Copyright owners', 'Trademark owners', 'IP licensing companies', 'Royalty collection organizations', 'Rights-management companies',
      'Music-rights organizations', 'Performing-rights organizations', 'Anti-piracy organizations', 'Rights-clearance companies', 'Contract-management companies'
    ]
  },
  {
    id: 'cat-government',
    code: '4.16',
    title: 'Government, Regulators & Permissions',
    layer: 'INFRASTRUCTURE',
    description: 'Censor boards, film commissions, municipal permits, taxation authorities, and broadcast tribunals.',
    stakeholders: [
      'Central government', 'State governments', 'Ministry of Information & Broadcasting', 'Ministry of Culture', 'Ministry of Electronics & IT',
      'Ministry of Commerce', 'CBFC', 'TRAI', 'Copyright Office', 'Intellectual Property authorities',
      'Tax authorities', 'GST authorities', 'Local municipal authorities', 'Police', 'Fire departments',
      'Event permissions authorities', 'Tourism departments', 'Film commissions', 'State film development corporations', 'Broadcasting regulators',
      'Competition authorities', 'Courts', 'Local licensing authorities'
    ]
  },
  {
    id: 'cat-media-pr',
    code: '4.17',
    title: 'Media, PR & Cultural Criticism',
    layer: 'COMMERCIAL',
    description: 'Publicists, entertainment trade journalists, critics, red-carpet coverage, and review aggregators.',
    stakeholders: [
      'PR agencies', 'Publicists', 'Film journalists', 'Entertainment journalists', 'Newspaper publishers',
      'Magazine publishers', 'Television journalists', 'Digital media companies', 'Entertainment news websites', 'Reviewers',
      'Critics', 'Paparazzi', 'Photographers', 'Social-media publishers', 'Influencers',
      'Bloggers', 'Podcasters', 'Interviewers', 'Fan-media communities'
    ]
  },
  {
    id: 'cat-education',
    code: '4.18',
    title: 'Education & Talent Incubators',
    layer: 'INFRASTRUCTURE',
    description: 'Film institutes, acting academies, sound engineering schools, and masterclass mentorship networks.',
    stakeholders: [
      'Film schools', 'Acting schools', 'Music schools', 'Dance academies', 'Theatre schools',
      'Animation schools', 'VFX institutes', 'Gaming institutes', 'Media colleges', 'Journalism schools',
      'Design schools', 'Sound-engineering institutes', 'Creative-writing programs', 'Universities', 'Training companies',
      'Online education platforms', 'Mentors', 'Coaches'
    ]
  },
  {
    id: 'cat-associations',
    code: '4.19',
    title: 'Industry Associations & Guilds',
    layer: 'INFRASTRUCTURE',
    description: 'Producers guilds, technicians unions, writers associations, and trade bodies defending worker rights.',
    stakeholders: [
      'Film associations', 'Producers\' associations', 'Actors\' associations', 'Directors\' associations', 'Writers\' associations',
      'Musicians\' associations', 'Artists\' unions', 'Technicians\' unions', 'Broadcasters\' associations', 'Theatre associations',
      'OTT associations', 'Advertising associations', 'Music-industry associations', 'Gaming associations', 'Animation associations',
      'VFX associations', 'Event-industry associations', 'Trade bodies', 'Chambers of commerce', 'Professional networks',
      'Creator communities'
    ]
  },
  {
    id: 'cat-audience',
    code: '4.20',
    title: 'Audience, Fandom & Consumers',
    layer: 'CONSUMPTION',
    description: 'The ultimate engine of revenue: box office patrons, active streamers, fandom communities, and superfan spenders.',
    stakeholders: [
      'Moviegoers', 'TV viewers', 'OTT subscribers', 'Music listeners', 'Concert audiences',
      'Theatre audiences', 'Gaming audiences', 'Esports audiences', 'Social-media users', 'YouTube audiences',
      'Podcast listeners', 'Fans', 'Fan clubs', 'Fandom communities', 'Online communities',
      'Collectors', 'Superfans', 'Reviewers', 'Community moderators', 'User-generated-content creators',
      'Paying subscribers', 'Advertiser-supported users'
    ]
  }
];

// ── 3. The 75 Systemic Root Causes (R001 - R075) ─────────────
export const EERG_ROOT_CAUSES: EERGRootCause[] = [
  // 1. Information & Data Silos
  { id: 'R001', code: 'R001', name: 'Information fragmentation', family: 'Information & Data', description: 'Critical operational, availability, and financial data is fractured across isolated spreadsheets, email threads, and personal relationships.', centralityScore: 98, downstreamProblems: 42, propagationRisk: 'CRITICAL', interventions: ['Shared ecosystem telemetry', 'Unified ledger', 'Open directory standard'] },
  { id: 'R002', code: 'R002', name: 'Data silos', family: 'Information & Data', description: 'Departments and companies actively guard internal numbers and pipelines, blocking upstream and downstream visibility.', centralityScore: 89, downstreamProblems: 34, propagationRisk: 'HIGH', interventions: ['Cross-entity data contracts', 'Zero-knowledge pipeline sync'] },
  { id: 'R003', code: 'R003', name: 'Poor data quality', family: 'Information & Data', description: 'Inaccurate, duplicate, or unverified metadata causes downstream billing, cast scheduling, and delivery rejections.', centralityScore: 78, downstreamProblems: 26, propagationRisk: 'MEDIUM', interventions: ['Automated schema validation', 'Platform QC checks'] },
  { id: 'R004', code: 'R004', name: 'Outdated information', family: 'Information & Data', description: 'Production call sheets, rights windows, and talent availability rot quickly without real-time state synchronization.', centralityScore: 82, downstreamProblems: 28, propagationRisk: 'HIGH', interventions: ['Real-time push notifications', 'Live availability graph'] },
  { id: 'R005', code: 'R005', name: 'Missing metadata', family: 'Information & Data', description: 'Audio tracks, visual assets, and script versions lack standardized ISRC, ISAN, or creator attribution tags.', centralityScore: 85, downstreamProblems: 31, propagationRisk: 'HIGH', interventions: ['Automated ingest tagging', 'Universal registry sync'] },
  { id: 'R006', code: 'R006', name: 'Lack of standardization', family: 'Information & Data', description: 'Every studio, agency, and vendor uses bespoke naming conventions, rate structures, and contract terms.', centralityScore: 92, downstreamProblems: 38, propagationRisk: 'CRITICAL', interventions: ['Industry-wide schema standards', 'Interoperability protocols'] },
  { id: 'R007', code: 'R007', name: 'Information asymmetry', family: 'Information & Data', description: 'Gatekeepers hoard market pricing, real stream counts, and budget details to exploit weaker counter-parties.', centralityScore: 94, downstreamProblems: 39, propagationRisk: 'CRITICAL', interventions: ['Transparent benchmark indices', 'Audited streaming metrics'] },

  // 2. Trust Deficit & Uncertainty
  { id: 'R008', code: 'R008', name: 'Trust deficit', family: 'Trust & Uncertainty', description: 'Historical non-payments, credit theft, and broken promises foster defensive positioning and friction.', centralityScore: 95, downstreamProblems: 40, propagationRisk: 'CRITICAL', interventions: ['Escrow milestone settlements', 'Verified credentialing'] },
  { id: 'R009', code: 'R009', name: 'Quality uncertainty', family: 'Trust & Uncertainty', description: 'Producers cannot verify if talent or remote vendors can deliver to platform spec until costly shoot days occur.', centralityScore: 83, downstreamProblems: 27, propagationRisk: 'HIGH', interventions: ['Standardized reel verification', 'Verified production credits'] },
  { id: 'R010', code: 'R010', name: 'Payment uncertainty', family: 'Trust & Uncertainty', description: 'Creators and vendors operate under the constant threat of invoice delays, non-clearance, or arbitrary clawbacks.', centralityScore: 91, downstreamProblems: 36, propagationRisk: 'CRITICAL', interventions: ['Smart contract escrows', 'Instant milestone releases'] },
  { id: 'R011', code: 'R011', name: 'Reputation uncertainty', family: 'Trust & Uncertainty', description: 'Informal word-of-mouth creates nepotistic hiring loops and prevents capable outside talent from qualifying.', centralityScore: 84, downstreamProblems: 28, propagationRisk: 'HIGH', interventions: ['Peer-verified credit trails', 'Objective project history'] },
  { id: 'R012', code: 'R012', name: 'Identity uncertainty', family: 'Trust & Uncertainty', description: 'Lack of verified digital artist IDs leads to confusion between representation, fake agencies, and unauthorized casting.', centralityScore: 74, downstreamProblems: 19, propagationRisk: 'MEDIUM', interventions: ['Cryptographic creator IDs', 'Agency authorization registries'] },
  { id: 'R013', code: 'R013', name: 'Ownership uncertainty', family: 'Trust & Uncertainty', description: 'Unclear chain-of-title and verbal understandings derail acquisition deals during late-stage legal diligence.', centralityScore: 88, downstreamProblems: 30, propagationRisk: 'HIGH', interventions: ['Chain-of-title verification graph', 'Immutable rights provenance'] },

  // 3. Talent, Skill & Misalignment
  { id: 'R014', code: 'R014', name: 'Skill mismatch', family: 'Talent & Incentives', description: 'Emerging tech (virtual production, Dolby Atmos, AI workflows) lacks trained crew, while outdated roles sit redundant.', centralityScore: 80, downstreamProblems: 24, propagationRisk: 'MEDIUM', interventions: ['Rapid industry micro-credentials', 'Hands-on tech labs'] },
  { id: 'R015', code: 'R015', name: 'Talent oversupply', family: 'Talent & Incentives', description: 'Hundreds of thousands of creative aspirants compete for a handful of visible roles with zero triage filtering.', centralityScore: 82, downstreamProblems: 25, propagationRisk: 'HIGH', interventions: ['Intelligent skill-matching filters', 'Regional showcase hubs'] },
  { id: 'R016', code: 'R016', name: 'Talent shortage', family: 'Talent & Incentives', description: 'Severe deficit of certified line producers, post coordinators, and technical VFX supervisors who understand systems.', centralityScore: 87, downstreamProblems: 29, propagationRisk: 'HIGH', interventions: ['Executive production bootcamps', 'System orchestration training'] },
  { id: 'R017', code: 'R017', name: 'Relationship dependency', family: 'Talent & Incentives', description: 'Hiring occurs almost exclusively through insider WhatsApp circles rather than merit or operational capability.', centralityScore: 93, downstreamProblems: 37, propagationRisk: 'CRITICAL', interventions: ['Open talent matching protocol', 'Objective skill scoring'] },
  { id: 'R018', code: 'R018', name: 'Incentive misalignment', family: 'Talent & Incentives', description: 'Vendors are incentivized by billable overtime; producers by cutting upfront cost; platforms by rapid subscriber volume.', centralityScore: 96, downstreamProblems: 41, propagationRisk: 'CRITICAL', interventions: ['Shared risk-reward milestones', 'Gainshare contracts'] },
  { id: 'R019', code: 'R019', name: 'Communication failure', family: 'Talent & Incentives', description: 'Director vision is poorly translated to VFX supervisors, who misdirect 3D artists, resulting in costly scrap.', centralityScore: 86, downstreamProblems: 31, propagationRisk: 'HIGH', interventions: ['Visual previsualization briefs', 'Unified creative review portal'] },

  // 4. Workflow & Process Friction
  { id: 'R020', code: 'R020', name: 'Manual workflows', family: 'Workflow & Process', description: 'Call sheets, purchase orders, union sign-offs, and rights clearance handled via physical paper and static PDFs.', centralityScore: 88, downstreamProblems: 32, propagationRisk: 'HIGH', interventions: ['Automated cloud workflows', 'One-click call-sheet generation'] },
  { id: 'R021', code: 'R021', name: 'Workflow fragmentation', family: 'Workflow & Process', description: 'Editorial, color grading, sound design, and VFX operate in disparate software silos with painful conform steps.', centralityScore: 91, downstreamProblems: 35, propagationRisk: 'CRITICAL', interventions: ['Unified IMF/conformed pipelines', 'Cloud sync asset hubs'] },
  { id: 'R022', code: 'R022', name: 'Excessive approvals', family: 'Workflow & Process', description: 'Every script punch-up or camera change requires 5 corporate platform signatures, freezing physical crews on set.', centralityScore: 85, downstreamProblems: 28, propagationRisk: 'HIGH', interventions: ['Delegated authority limits', 'Synchronous review sessions'] },
  { id: 'R023', code: 'R023', name: 'Late decision-making', family: 'Workflow & Process', description: 'Directors delay locking edit or picture until days before festival delivery, triggering catastrophic post overtime.', centralityScore: 94, downstreamProblems: 40, propagationRisk: 'CRITICAL', interventions: ['Hard milestone locks', 'Variance escalation triggers'] },
  { id: 'R024', code: 'R024', name: 'Poor planning', family: 'Workflow & Process', description: 'Production begins shooting before script breakdown, location permits, or technical rehearsals are locked.', centralityScore: 96, downstreamProblems: 43, propagationRisk: 'CRITICAL', interventions: ['Systemic pre-production simulation', 'Readiness scorecards'] },
  { id: 'R025', code: 'R025', name: 'Weak handoffs', family: 'Workflow & Process', description: 'Production wraps without handing color chart references, camera logs, or sound reports cleanly to post-production.', centralityScore: 89, downstreamProblems: 33, propagationRisk: 'HIGH', interventions: ['Mandatory handoff audit checklist', 'Digital asset packaging'] },
  { id: 'R026', code: 'R026', name: 'Lack of standard operating procedures', family: 'Workflow & Process', description: 'Every shoot reinvents protocols from scratch, introducing high human error and variable quality.', centralityScore: 84, downstreamProblems: 27, propagationRisk: 'MEDIUM', interventions: ['Codified DigiSynq runbooks', 'Field SOP templates'] },

  // 5. Cross-Functional Coordination
  { id: 'R027', code: 'R027', name: 'Cross-department coordination failure', family: 'Coordination & Operations', description: 'Wardrobe, lighting, art department, and camera teams work off conflicting schedule revisions.', centralityScore: 93, downstreamProblems: 38, propagationRisk: 'CRITICAL', interventions: ['Centralized live callboard', 'Departmental conflict alerts'] },
  { id: 'R028', code: 'R028', name: 'Vendor coordination failure', family: 'Coordination & Operations', description: 'Equipment trucks arrive before generators are fired; catering fails to coordinate with extended night shoots.', centralityScore: 87, downstreamProblems: 30, propagationRisk: 'HIGH', interventions: ['Vendor telemetry dashboard', 'Geofenced equipment tracking'] },
  { id: 'R029', code: 'R029', name: 'Schedule dependency failure', family: 'Coordination & Operations', description: 'Delaying one actor by 3 hours cascades into losing a sunlit exterior location and invalidates crew turnaround rules.', centralityScore: 97, downstreamProblems: 45, propagationRisk: 'CRITICAL', interventions: ['Real-time critical-path rescheduling', 'Predictive cascade warning'] },
  { id: 'R030', code: 'R030', name: 'Responsibility ambiguity', family: 'Coordination & Operations', description: 'Unclear whether line producer, 1st AD, or VFX on-set supervisor is responsible for tracking green-screen markers.', centralityScore: 82, downstreamProblems: 24, propagationRisk: 'MEDIUM', interventions: ['RACI matrix templates', 'Clear role boundary protocols'] },
  { id: 'R031', code: 'R031', name: 'Change-management failure', family: 'Coordination & Operations', description: 'A script change made on set is never communicated to the sound mixing team or subtitle translators.', centralityScore: 89, downstreamProblems: 33, propagationRisk: 'HIGH', interventions: ['Automated change broadcast', 'Versioned script synchronization'] },

  // 6. Financial & Capital Constraints
  { id: 'R032', code: 'R032', name: 'Cash-flow mismatch', family: 'Financial & Capital', description: 'Producers must pay daily crews immediately, but distributor minimum guarantees pay out 90 days after delivery.', centralityScore: 95, downstreamProblems: 41, propagationRisk: 'CRITICAL', interventions: ['Fintech receivable discounting', 'Production payroll factoring'] },
  { id: 'R033', code: 'R033', name: 'Delayed payments', family: 'Financial & Capital', description: 'Corporate studios withhold final 20% post tranche pending bureaucratic auditing, bankrupting boutique VFX vendors.', centralityScore: 92, downstreamProblems: 37, propagationRisk: 'CRITICAL', interventions: ['Audited escrow triggers', 'Statutory interest penalties'] },
  { id: 'R034', code: 'R034', name: 'High upfront capital requirement', family: 'Financial & Capital', description: 'Massive capital must be locked into high-risk development before a single dollar of market demand is tested.', centralityScore: 90, downstreamProblems: 34, propagationRisk: 'HIGH', interventions: ['Modular pilot staging', 'Audience pre-commitment signals'] },
  { id: 'R035', code: 'R035', name: 'Revenue uncertainty', family: 'Financial & Capital', description: 'Unpredictable box office returns and opaque OTT royalty formulas leave production equity at extreme risk.', centralityScore: 91, downstreamProblems: 36, propagationRisk: 'CRITICAL', interventions: ['Predictive demand models', 'Risk-mitigated co-financing'] },
  { id: 'R036', code: 'R036', name: 'Poor financial visibility', family: 'Financial & Capital', description: 'Cost reports are compiled weekly on static spreadsheets; actual cash burn is discovered days after overruns occur.', centralityScore: 88, downstreamProblems: 31, propagationRisk: 'HIGH', interventions: ['Real-time daily cost telemetry', 'Live contingency burn tracking'] },
  { id: 'R037', code: 'R037', name: 'ROI uncertainty', family: 'Financial & Capital', description: 'Investors cannot forecast if a $10M streaming spend will drive customer acquisition or immediate churn.', centralityScore: 86, downstreamProblems: 28, propagationRisk: 'MEDIUM', interventions: ['Ecosystem ROI benchmarking', 'Cohort retention analytics'] },

  // 7. Legal, IP & Rights Ambiguity
  { id: 'R038', code: 'R038', name: 'Ownership ambiguity', family: 'Legal, IP & Rights', description: 'Multiple co-writers, underlying book authors, and past producers claim conflicting shares in IP.', centralityScore: 91, downstreamProblems: 35, propagationRisk: 'CRITICAL', interventions: ['Immutable chain-of-title ledger', 'Pre-cleared IP split contracts'] },
  { id: 'R039', code: 'R039', name: 'Rights fragmentation', family: 'Legal, IP & Rights', description: 'Music sync rights sold in one territory, theatrical in another, and digital streaming rights reserved by third party.', centralityScore: 94, downstreamProblems: 40, propagationRisk: 'CRITICAL', interventions: ['Universal rights registry', 'Interactive territorial map'] },
  { id: 'R040', code: 'R040', name: 'Contract ambiguity', family: 'Legal, IP & Rights', description: 'Loose contract language regarding "net profits" and "digital exhibition" leads to costly lawsuits and stalled releases.', centralityScore: 87, downstreamProblems: 29, propagationRisk: 'HIGH', interventions: ['Standardized parameter definitions', 'Automated royalty calculation'] },
  { id: 'R041', code: 'R041', name: 'Licensing complexity', family: 'Legal, IP & Rights', description: 'Clearing 30-second archival footage requires tracking 8 disparate heirs and international publishing entities.', centralityScore: 89, downstreamProblems: 32, propagationRisk: 'HIGH', interventions: ['One-stop sync clearance portal', 'Statutory blanket licensing'] },
  { id: 'R042', code: 'R042', name: 'Royalty leakage', family: 'Legal, IP & Rights', description: 'Songwriters and background score composers lose 40%+ of global royalties due to broken cue sheets and missing IDs.', centralityScore: 90, downstreamProblems: 33, propagationRisk: 'HIGH', interventions: ['Automated audio fingerprint cue sheets', 'Direct PRO payout bridges'] },
  { id: 'R043', code: 'R043', name: 'Rights-management failure', family: 'Legal, IP & Rights', description: 'Platforms cannot scale licensing because legacy catalog metadata is locked in non-digitized filing cabinets.', centralityScore: 85, downstreamProblems: 27, propagationRisk: 'MEDIUM', interventions: ['AI contract digitization', 'Structured catalog indexing'] },

  // 8. Technology, Infrastructure & Legacy
  { id: 'R044', code: 'R044', name: 'Legacy systems', family: 'Technology & Architecture', description: 'Television networks and cinema bookers rely on 20-year-old on-premise mainframe software that cannot integrate APIs.', centralityScore: 84, downstreamProblems: 26, propagationRisk: 'MEDIUM', interventions: ['Modern headless API wrappers', 'Cloud middleware adapters'] },
  { id: 'R045', code: 'R045', name: 'Lack of interoperability', family: 'Technology & Architecture', description: 'Casting platforms cannot speak to accounting software, which cannot speak to call-sheet generators.', centralityScore: 92, downstreamProblems: 37, propagationRisk: 'CRITICAL', interventions: ['Universal entertainment data protocol', 'Webhooks integration layer'] },
  { id: 'R046', code: 'R046', name: 'Platform dependency', family: 'Technology & Architecture', description: 'Creators and distributors surrender audience data and pricing power to a duopoly of global tech gatekeepers.', centralityScore: 95, downstreamProblems: 41, propagationRisk: 'CRITICAL', interventions: ['Direct-to-consumer infrastructure', 'Sovereign audience databases'] },
  { id: 'R047', code: 'R047', name: 'Infrastructure limitations', family: 'Technology & Architecture', description: 'Tier-2 and Tier-3 theatrical circuits lack fiber internet, requiring physical hard-drive couriers for DCP delivery.', centralityScore: 79, downstreamProblems: 21, propagationRisk: 'LOW', interventions: ['Satellite broadband mesh', 'Edge caching servers'] },
  { id: 'R048', code: 'R048', name: 'Cybersecurity risk', family: 'Technology & Architecture', description: 'Unfinished master cuts and high-value screeners leaked via unencrypted vendor transfers, crashing theatrical hype.', centralityScore: 88, downstreamProblems: 30, propagationRisk: 'HIGH', interventions: ['Invisible forensic watermarking', 'Zero-trust stream access'] },
  { id: 'R049', code: 'R049', name: 'Technology adoption gap', family: 'Technology & Architecture', description: 'Experienced creative executives reject digital production tools due to poor UX and steep learning curves.', centralityScore: 81, downstreamProblems: 23, propagationRisk: 'MEDIUM', interventions: ['Zero-friction intuitive interfaces', 'Hands-on executive coaching'] },

  // 9. Market, Attention & Hit Economics
  { id: 'R050', code: 'R050', name: 'Market fragmentation', family: 'Market & Attention', description: 'Audience splintered across 15 streaming services, social feeds, gaming worlds, and micro-podcasts.', centralityScore: 93, downstreamProblems: 38, propagationRisk: 'CRITICAL', interventions: ['Cross-platform syndication', 'Unified discovery aggregators'] },
  { id: 'R051', code: 'R051', name: 'Audience fragmentation', family: 'Market & Attention', description: 'Niche fandoms replace monoculture; impossible to reach a mass demographic through single traditional campaigns.', centralityScore: 89, downstreamProblems: 32, propagationRisk: 'HIGH', interventions: ['Micro-community targeting', 'Fandom engagement engines'] },
  { id: 'R052', code: 'R052', name: 'Content oversupply', family: 'Market & Attention', description: 'Over 500 scripted shows and 100,000 songs uploaded daily creates insurmountable discovery noise.', centralityScore: 94, downstreamProblems: 40, propagationRisk: 'CRITICAL', interventions: ['High-signal curated hubs', 'Verified recommendation filters'] },
  { id: 'R053', code: 'R053', name: 'Attention scarcity', family: 'Market & Attention', description: 'Short-form algorithmic video feeds (TikTok/Reels) cannibalize long-form theatrical and television attention spans.', centralityScore: 96, downstreamProblems: 42, propagationRisk: 'CRITICAL', interventions: ['Transmedia story hooks', 'Interactive narrative formats'] },
  { id: 'R054', code: 'R054', name: 'Discovery overload', family: 'Market & Attention', description: 'Viewers spend 18 minutes scrolling OTT menus before abandoning playback due to decision fatigue.', centralityScore: 87, downstreamProblems: 28, propagationRisk: 'HIGH', interventions: ['Context-aware AI curation', 'Social viewing sync'] },
  { id: 'R055', code: 'R055', name: 'Hit-driven economics', family: 'Market & Attention', description: '90% of profits generated by top 2% of releases forces risk-averse studios to recycle formulaic sequel IP.', centralityScore: 97, downstreamProblems: 44, propagationRisk: 'CRITICAL', interventions: ['Portfolio-risk hedging', 'Community-backed micro-budgets'] },

  // 10. Measurement, Attribution & Feedback
  { id: 'R056', code: 'R056', name: 'Poor attribution', family: 'Measurement & Feedback', description: 'Marketers cannot determine whether $2M billboard campaign or viral TikTok trend drove opening weekend ticket sales.', centralityScore: 88, downstreamProblems: 31, propagationRisk: 'HIGH', interventions: ['Multi-touch attribution models', 'Direct ticketing referral links'] },
  { id: 'R057', code: 'R057', name: 'Incomplete metrics', family: 'Measurement & Feedback', description: 'Streaming platforms report proprietary "hours viewed" or "accounts started" without transparent demographic depth.', centralityScore: 91, downstreamProblems: 35, propagationRisk: 'HIGH', interventions: ['Independent third-party verification', 'Audited engagement standards'] },
  { id: 'R058', code: 'R058', name: 'Cross-platform measurement gap', family: 'Measurement & Feedback', description: 'Impossible to compare the true cultural and financial value of 10M YouTube views vs 500K theatrical admissions.', centralityScore: 86, downstreamProblems: 27, propagationRisk: 'MEDIUM', interventions: ['Universal Attention Value index', 'Unified reach metrics'] },
  { id: 'R059', code: 'R059', name: 'Lack of predictive intelligence', family: 'Measurement & Feedback', description: 'Decisions to spend $50M on marketing based on gut instinct rather than early test-audience telemetry.', centralityScore: 90, downstreamProblems: 34, propagationRisk: 'HIGH', interventions: ['Early-stage sentiment forecasting', 'Dynamic scenario modeling'] },
  { id: 'R060', code: 'R060', name: 'Poor feedback loops', family: 'Measurement & Feedback', description: 'Writers and directors receive box-office post-mortems months after release, too late to iterate on creative flaws.', centralityScore: 85, downstreamProblems: 26, propagationRisk: 'MEDIUM', interventions: ['Real-time audience sentiment loops', 'Continuous test-screening data'] },

  // 11. Regulatory, Policy & Compliance
  { id: 'R061', code: 'R061', name: 'Regulatory complexity', family: 'Regulatory & Governance', description: 'Producers navigate contradictory federal broadcasting laws, state labor statutes, and local police permissions.', centralityScore: 86, downstreamProblems: 28, propagationRisk: 'HIGH', interventions: ['Single-window clearance portals', 'Compliance automation engine'] },
  { id: 'R062', code: 'R062', name: 'Permission fragmentation', family: 'Regulatory & Governance', description: 'Filming a 3-block exterior shoot requires 7 separate permits from municipal, traffic, fire, and heritage authorities.', centralityScore: 89, downstreamProblems: 32, propagationRisk: 'HIGH', interventions: ['Unified municipal permit clearinghouse', 'Digital liaison officers'] },
  { id: 'R063', code: 'R063', name: 'Policy uncertainty', family: 'Regulatory & Governance', description: 'Sudden shifts in censorship guidelines, foreign direct investment limits, or tax rebate qualifications.', centralityScore: 87, downstreamProblems: 29, propagationRisk: 'HIGH', interventions: ['Regulatory risk forecasting', 'Policy advocacy taskforces'] },
  { id: 'R064', code: 'R064', name: 'Compliance burden', family: 'Regulatory & Governance', description: 'Small production houses spend 15% of total budget on audit overhead, legal retainers, and filing compliances.', centralityScore: 82, downstreamProblems: 24, propagationRisk: 'MEDIUM', interventions: ['Automated tax filing assistants', 'Standardized compliance templates'] },
  { id: 'R065', code: 'R065', name: 'Weak enforcement', family: 'Regulatory & Governance', description: 'Contract breaches and non-payment cases drag on in civil courts for 7+ years, eliminating deterrents for bad actors.', centralityScore: 90, downstreamProblems: 34, propagationRisk: 'CRITICAL', interventions: ['Binding industry fast-track arbitration', 'Reputational blacklisting'] },

  // 12. Structural & Ecosystem Fragmentation
  { id: 'R066', code: 'R066', name: 'Intermediary dependency', family: 'Ecosystem & Structural', description: 'Producers trapped paying double commissions to talent managers, sub-distributors, and booking agencies.', centralityScore: 91, downstreamProblems: 35, propagationRisk: 'HIGH', interventions: ['Direct digital booking corridors', 'Transparent commission limits'] },
  { id: 'R067', code: 'R067', name: 'Power concentration', family: 'Ecosystem & Structural', description: 'Top 3 theatre chains and top 3 streaming platforms dictate non-negotiable revenue terms to all content suppliers.', centralityScore: 96, downstreamProblems: 43, propagationRisk: 'CRITICAL', interventions: ['Independent exhibition networks', 'Creator-owned syndication'] },
  { id: 'R068', code: 'R068', name: 'Information asymmetry (Structural)', family: 'Ecosystem & Structural', description: 'Big platforms possess minute-by-minute viewer heatmaps while producers are kept entirely blind to audience demographics.', centralityScore: 93, downstreamProblems: 38, propagationRisk: 'CRITICAL', interventions: ['Data-sharing mandates', 'Producer-side audience telemetry'] },
  { id: 'R069', code: 'R069', name: 'Geographic fragmentation', family: 'Ecosystem & Structural', description: 'Regional cinema markets (e.g. South vs North India, European local co-pros) operate in completely distinct silos.', centralityScore: 84, downstreamProblems: 26, propagationRisk: 'MEDIUM', interventions: ['Cross-regional distribution bridge', 'Pan-regional co-production desks'] },
  { id: 'R070', code: 'R070', name: 'Informal-market dependence', family: 'Ecosystem & Structural', description: 'Heavy reliance on cash wages, unregistered crew, and verbal agreements creates legal and operational vulnerability.', centralityScore: 89, downstreamProblems: 33, propagationRisk: 'HIGH', interventions: ['Digital micro-payroll banking', 'Formalized crew registration'] },
  { id: 'R071', code: 'R071', name: 'Fragmented technology ecosystem', family: 'Ecosystem & Structural', description: 'A typical studio runs 27 distinct software tools that cannot share data or trigger automated pipeline events.', centralityScore: 92, downstreamProblems: 37, propagationRisk: 'CRITICAL', interventions: ['Open entertainment API standard', 'Unified production OS'] },
  { id: 'R072', code: 'R072', name: 'Weak industry standards', family: 'Ecosystem & Structural', description: 'No universal definition of "delivery ready" master files or standardized budget cost codes across territories.', centralityScore: 88, downstreamProblems: 30, propagationRisk: 'HIGH', interventions: ['Universal DigiSynq cost code standard', 'Automated QC compliance gates'] },
  { id: 'R073', code: 'R073', name: 'Fragmented representation', family: 'Ecosystem & Structural', description: 'Dozens of small, rival guilds compete rather than presenting a unified collective voice for industry policy.', centralityScore: 83, downstreamProblems: 23, propagationRisk: 'MEDIUM', interventions: ['Unified industry confederation', 'Inter-guild coordination council'] },
  { id: 'R074', code: 'R074', name: 'Low institutional coordination', family: 'Ecosystem & Structural', description: 'Education schools do not speak to production studios; government film commissions do not speak to tech vendors.', centralityScore: 86, downstreamProblems: 28, propagationRisk: 'HIGH', interventions: ['Industry-academic consortia', 'Regular cross-sector roundtables'] },
  { id: 'R075', code: 'R075', name: 'Lack of ecosystem-level visibility', family: 'Ecosystem & Structural', description: 'No single stakeholder possesses a complete map of how failures, costs, and dependencies propagate across the industry.', centralityScore: 99, downstreamProblems: 48, propagationRisk: 'CRITICAL', interventions: ['DigiSynq Master Root-Cause Graph', 'Live systemic health telemetry'] }
];

// ── 4. The 50 Major Bottleneck Families (B001 - B050) ─────────
export const EERG_BOTTLENECKS: EERGBottleneck[] = [
  { id: 'B001', code: 'B001', name: 'Talent discovery', domain: 'Talent & Casting', whereItOccurs: 'Pre-production', blockedFlow: 'Aspirants unable to reach legit decision makers', affectedStakeholders: ['Actors', 'Casting Directors', 'Producers'], primaryRootCauses: ['R001', 'R015', 'R017'], severity: 'CRITICAL' },
  { id: 'B002', code: 'B002', name: 'Talent matching', domain: 'Talent & Casting', whereItOccurs: 'Casting & Crewing', blockedFlow: 'Finding optimal role fit within tight project constraints', affectedStakeholders: ['Directors', 'Casting Companies', 'Talent'], primaryRootCauses: ['R006', 'R009', 'R045'], severity: 'HIGH' },
  { id: 'B003', code: 'B003', name: 'Casting turnaround', domain: 'Talent & Casting', whereItOccurs: 'Pre-production', blockedFlow: 'Audition processing and role confirmations delayed weeks', affectedStakeholders: ['Producers', 'Casting Directors', 'Actors'], primaryRootCauses: ['R020', 'R022', 'R023'], severity: 'HIGH' },
  { id: 'B004', code: 'B004', name: 'Project financing', domain: 'Capital & Finance', whereItOccurs: 'Development', blockedFlow: 'Capital commitment gated by lead talent attachment', affectedStakeholders: ['Producers', 'Financiers', 'Studios'], primaryRootCauses: ['R034', 'R035', 'R055'], severity: 'CRITICAL' },
  { id: 'B005', code: 'B005', name: 'Budget planning', domain: 'Planning', whereItOccurs: 'Pre-production', blockedFlow: 'Line-item costing based on outdated guesswork', affectedStakeholders: ['Line Producers', 'Accountants', 'Financiers'], primaryRootCauses: ['R004', 'R024', 'R036'], severity: 'HIGH' },
  { id: 'B006', code: 'B006', name: 'Schedule planning', domain: 'Planning', whereItOccurs: 'Pre-production', blockedFlow: 'Cross-talent availability conflicts freeze shoot dates', affectedStakeholders: ['1st ADs', 'Producers', 'Lead Actors'], primaryRootCauses: ['R001', 'R024', 'R029'], severity: 'CRITICAL' },
  { id: 'B007', code: 'B007', name: 'Location availability', domain: 'Physical Production', whereItOccurs: 'Scouting / Shoot', blockedFlow: 'Heritage / public permits denied days before shoot', affectedStakeholders: ['Location Managers', 'Line Producers', 'Authorities'], primaryRootCauses: ['R061', 'R062'], severity: 'HIGH' },
  { id: 'B008', code: 'B008', name: 'Equipment availability', domain: 'Physical Production', whereItOccurs: 'Prep / Shoot', blockedFlow: 'Specialized anamorphic lenses or cameras locked in customs', affectedStakeholders: ['DPs', 'Rental Houses', 'Producers'], primaryRootCauses: ['R028', 'R047'], severity: 'MEDIUM' },
  { id: 'B009', code: 'B009', name: 'Crew availability', domain: 'Physical Production', whereItOccurs: 'Staffing', blockedFlow: 'Top tier gaffers and sound mixers double-booked', affectedStakeholders: ['Heads of Department', 'Line Producers'], primaryRootCauses: ['R016', 'R017'], severity: 'HIGH' },
  { id: 'B010', code: 'B010', name: 'Vendor selection', domain: 'Procurement', whereItOccurs: 'Prep', blockedFlow: 'Competitive bids opaque; contracts awarded on kickbacks', affectedStakeholders: ['Producers', 'Vendors', 'Studios'], primaryRootCauses: ['R007', 'R008', 'R018'], severity: 'MEDIUM' },
  { id: 'B011', code: 'B011', name: 'Vendor coordination', domain: 'Operations', whereItOccurs: 'Production', blockedFlow: 'Catering, equipment, and generator trucks misaligned on set', affectedStakeholders: ['Production Managers', 'Vendors', 'Crew'], primaryRootCauses: ['R027', 'R028'], severity: 'HIGH' },
  { id: 'B012', code: 'B012', name: 'Production communication', domain: 'Operations', whereItOccurs: 'Set / Stages', blockedFlow: 'Last minute call-sheet revisions lost in chat group noise', affectedStakeholders: ['ADs', 'Crew', 'Talent'], primaryRootCauses: ['R019', 'R031'], severity: 'CRITICAL' },
  { id: 'B013', code: 'B013', name: 'Approval cycles', domain: 'Governance', whereItOccurs: 'Development / Shoot', blockedFlow: 'Corporate executives slow to sign off on casting changes', affectedStakeholders: ['Producers', 'Studio Execs', 'Directors'], primaryRootCauses: ['R022', 'R023'], severity: 'CRITICAL' },
  { id: 'B014', code: 'B014', name: 'Creative decision-making', domain: 'Creative', whereItOccurs: 'All Stages', blockedFlow: 'Director and studio head disagreeing on ending or edit', affectedStakeholders: ['Directors', 'Studios', 'Editors'], primaryRootCauses: ['R018', 'R023'], severity: 'CRITICAL' },
  { id: 'B015', code: 'B015', name: 'Script development', domain: 'Development', whereItOccurs: 'Development', blockedFlow: 'Endless revision notes without clear structural direction', affectedStakeholders: ['Writers', 'Producers', 'Script Consultants'], primaryRootCauses: ['R019', 'R022'], severity: 'HIGH' },
  { id: 'B016', code: 'B016', name: 'Content commissioning', domain: 'Platform', whereItOccurs: 'Greenlight', blockedFlow: 'Platform commissioning slates frozen due to leadership churn', affectedStakeholders: ['Producers', 'Commissioners', 'Platforms'], primaryRootCauses: ['R035', 'R055'], severity: 'CRITICAL' },
  { id: 'B017', code: 'B017', name: 'Post-production handoffs', domain: 'Post & VFX', whereItOccurs: 'Editorial Wrap', blockedFlow: 'Media files missing camera LUTs and synced sound tracks', affectedStakeholders: ['Editors', 'DITs', 'Sound Designers'], primaryRootCauses: ['R003', 'R021', 'R025'], severity: 'CRITICAL' },
  { id: 'B018', code: 'B018', name: 'VFX delivery', domain: 'Post & VFX', whereItOccurs: 'Post Finishing', blockedFlow: '500 complex CGI shots delayed by late plate delivery', affectedStakeholders: ['VFX Studios', 'Post Supervisors', 'Distributors'], primaryRootCauses: ['R023', 'R025', 'R029'], severity: 'CRITICAL' },
  { id: 'B019', code: 'B019', name: 'Sound delivery', domain: 'Post & VFX', whereItOccurs: 'Post Finishing', blockedFlow: 'Dolby Atmos bed downmix phase cancellation rejections', affectedStakeholders: ['Sound Mixers', 'Quality Control', 'Platforms'], primaryRootCauses: ['R006', 'R021'], severity: 'HIGH' },
  { id: 'B020', code: 'B020', name: 'Music delivery', domain: 'Creative Audio', whereItOccurs: 'Post Finishing', blockedFlow: 'Final stems delivered hours before premiere without licenses', affectedStakeholders: ['Composers', 'Music Supervisors', 'Distributors'], primaryRootCauses: ['R029', 'R041'], severity: 'HIGH' },
  { id: 'B021', code: 'B021', name: 'Rights clearance', domain: 'Legal & Rights', whereItOccurs: 'All Stages', blockedFlow: 'Archival footage or song sync stuck in multi-heir probate', affectedStakeholders: ['Legal Teams', 'Producers', 'Distributors'], primaryRootCauses: ['R038', 'R039', 'R041'], severity: 'CRITICAL' },
  { id: 'B022', code: 'B022', name: 'Contract execution', domain: 'Legal & Rights', whereItOccurs: 'Development / Prep', blockedFlow: 'Actors on set shooting before formal contracts are signed', affectedStakeholders: ['Attorneys', 'Producers', 'Talent'], primaryRootCauses: ['R020', 'R040'], severity: 'HIGH' },
  { id: 'B023', code: 'B023', name: 'Royalty tracking', domain: 'Legal & Rights', whereItOccurs: 'Monetization', blockedFlow: 'Global micro-streams uncollected and black-box lost', affectedStakeholders: ['Songwriters', 'Publishers', 'Artists'], primaryRootCauses: ['R005', 'R042'], severity: 'HIGH' },
  { id: 'B024', code: 'B024', name: 'Content licensing', domain: 'Distribution', whereItOccurs: 'Sales / Markets', blockedFlow: 'Territorial distributors cannot verify platform holdbacks', affectedStakeholders: ['Sales Agents', 'Distributors', 'Buyers'], primaryRootCauses: ['R039', 'R043'], severity: 'HIGH' },
  { id: 'B025', code: 'B025', name: 'Theatrical distribution', domain: 'Distribution', whereItOccurs: 'Release', blockedFlow: 'Independent films unable to secure viable release dates', affectedStakeholders: ['Indie Producers', 'Distributors', 'Theatres'], primaryRootCauses: ['R067', 'R055'], severity: 'CRITICAL' },
  { id: 'B026', code: 'B026', name: 'Screen allocation', domain: 'Exhibition', whereItOccurs: 'Release Weekend', blockedFlow: 'Multiplexes allocate 90% of prime shows to 1 tentpole', affectedStakeholders: ['Theatres', 'Smaller Films', 'Moviegoers'], primaryRootCauses: ['R055', 'R067'], severity: 'CRITICAL' },
  { id: 'B027', code: 'B027', name: 'OTT discovery', domain: 'Audience / Platform', whereItOccurs: 'Consumption', blockedFlow: 'Great titles buried beneath generic platform carousels', affectedStakeholders: ['Audiences', 'Content Creators', 'Platforms'], primaryRootCauses: ['R052', 'R054'], severity: 'CRITICAL' },
  { id: 'B028', code: 'B028', name: 'Audience discovery', domain: 'Marketing', whereItOccurs: 'Campaign', blockedFlow: 'Niche indie projects unable to cut through social media noise', affectedStakeholders: ['Marketers', 'Creators', 'Consumers'], primaryRootCauses: ['R050', 'R053'], severity: 'CRITICAL' },
  { id: 'B029', code: 'B029', name: 'Marketing attribution', domain: 'Commercial', whereItOccurs: 'Campaign', blockedFlow: 'Inability to track ad spend conversion to actual box office', affectedStakeholders: ['Advertisers', 'Studios', 'Distributors'], primaryRootCauses: ['R056', 'R058'], severity: 'HIGH' },
  { id: 'B030', code: 'B030', name: 'Ticket inventory', domain: 'Exhibition / Live', whereItOccurs: 'Sales', blockedFlow: 'Scalper bots monopolize concert seats, alienating true fans', affectedStakeholders: ['Ticketing Cos', 'Promoters', 'Fans'], primaryRootCauses: ['R010', 'R048'], severity: 'HIGH' },
  { id: 'B031', code: 'B031', name: 'Event logistics', domain: 'Live Events', whereItOccurs: 'Concerts / Fests', blockedFlow: 'Entry queues, stage rigging, and power grids collapsing', affectedStakeholders: ['Promoters', 'Venues', 'Fans'], primaryRootCauses: ['R028', 'R029'], severity: 'CRITICAL' },
  { id: 'B032', code: 'B032', name: 'Sponsorship matching', domain: 'Commercial', whereItOccurs: 'Financing', blockedFlow: 'Brands unable to verify audience alignment before event', affectedStakeholders: ['Sponsors', 'Event Organizers', 'Creators'], primaryRootCauses: ['R009', 'R056'], severity: 'MEDIUM' },
  { id: 'B033', code: 'B033', name: 'Payment processing', domain: 'Finance', whereItOccurs: 'Operations', blockedFlow: 'Cross-border remittances delayed by banking compliance', affectedStakeholders: ['International Crew', 'Producers'], primaryRootCauses: ['R032', 'R061'], severity: 'HIGH' },
  { id: 'B034', code: 'B034', name: 'Revenue reconciliation', domain: 'Finance', whereItOccurs: 'Settlement', blockedFlow: 'Disputed box office deductions delay net profit splits for years', affectedStakeholders: ['Producers', 'Distributors', 'Auditors'], primaryRootCauses: ['R007', 'R036', 'R040'], severity: 'CRITICAL' },
  { id: 'B035', code: 'B035', name: 'Data integration', domain: 'Technology', whereItOccurs: 'Operations', blockedFlow: 'Fragmented databases require manual copy-pasting of metadata', affectedStakeholders: ['IT Teams', 'Operations', 'Executives'], primaryRootCauses: ['R002', 'R045', 'R071'], severity: 'HIGH' },
  { id: 'B036', code: 'B036', name: 'Audience measurement', domain: 'Measurement', whereItOccurs: 'Commercial', blockedFlow: 'Lack of verified multi-platform viewing telemetry', affectedStakeholders: ['Advertisers', 'Broadcasters', 'Platforms'], primaryRootCauses: ['R057', 'R058'], severity: 'HIGH' },
  { id: 'B037', code: 'B037', name: 'Content recommendation', domain: 'Platform', whereItOccurs: 'Consumption', blockedFlow: 'Algorithms optimize for short-term rage clicks over satisfaction', affectedStakeholders: ['Audiences', 'Platforms', 'Creators'], primaryRootCauses: ['R018', 'R054'], severity: 'HIGH' },
  { id: 'B038', code: 'B038', name: 'Platform dependency', domain: 'Structural', whereItOccurs: 'Monetization', blockedFlow: 'Creators subject to sudden algorithmic demonetization', affectedStakeholders: ['YouTubers', 'Creators', 'Indie Studios'], primaryRootCauses: ['R046', 'R067'], severity: 'CRITICAL' },
  { id: 'B039', code: 'B039', name: 'Compliance approval', domain: 'Regulatory', whereItOccurs: 'Delivery', blockedFlow: 'Platform legal QC flags subtle compliance risks on launch day', affectedStakeholders: ['Producers', 'QC Teams', 'Platforms'], primaryRootCauses: ['R022', 'R064'], severity: 'CRITICAL' },
  { id: 'B040', code: 'B040', name: 'Government permissions', domain: 'Regulatory', whereItOccurs: 'Pre-production', blockedFlow: 'Single drone or night shoot permit held up in bureaucracy', affectedStakeholders: ['Producers', 'Location Teams', 'Authorities'], primaryRootCauses: ['R061', 'R062'], severity: 'HIGH' },
  { id: 'B041', code: 'B041', name: 'Cross-border licensing', domain: 'Distribution', whereItOccurs: 'Sales', blockedFlow: 'Withholding tax and censorship edits stall international premiere', affectedStakeholders: ['Sales Agents', 'Buyers', 'Producers'], primaryRootCauses: ['R039', 'R061'], severity: 'HIGH' },
  { id: 'B042', code: 'B042', name: 'Localization', domain: 'Post / Distribution', whereItOccurs: 'Finishing', blockedFlow: 'Subtitles and audio stems poorly translated or formatted', affectedStakeholders: ['Distributors', 'Localization Cos', 'Viewers'], primaryRootCauses: ['R003', 'R025'], severity: 'MEDIUM' },
  { id: 'B043', code: 'B043', name: 'Dubbing sync', domain: 'Post / Audio', whereItOccurs: 'Finishing', blockedFlow: 'Voice actors unavailable to match platform launch timing', affectedStakeholders: ['Dubbing Studios', 'Platforms', 'Fans'], primaryRootCauses: ['R016', 'R029'], severity: 'MEDIUM' },
  { id: 'B044', code: 'B044', name: 'IP ownership verification', domain: 'Legal & Rights', whereItOccurs: 'Development / Acquisition', blockedFlow: 'Studios pass on hit scripts due to missing writer release forms', affectedStakeholders: ['Writers', 'Acquisition Execs', 'Studios'], primaryRootCauses: ['R013', 'R038'], severity: 'CRITICAL' },
  { id: 'B045', code: 'B045', name: 'Financial risk assessment', domain: 'Finance', whereItOccurs: 'Financing', blockedFlow: 'Banks refuse production loans without completion bond sign-off', affectedStakeholders: ['Banks', 'Financiers', 'Producers'], primaryRootCauses: ['R035', 'R037'], severity: 'HIGH' },
  { id: 'B046', code: 'B046', name: 'Insurance & bond management', domain: 'Risk', whereItOccurs: 'Prep', blockedFlow: 'Excessive bond exclusions force creative compromises', affectedStakeholders: ['Bond Cos', 'Producers', 'Insurers'], primaryRootCauses: ['R024', 'R037'], severity: 'MEDIUM' },
  { id: 'B047', code: 'B047', name: 'Creator monetization', domain: 'Monetization', whereItOccurs: 'Consumption', blockedFlow: 'Intermediaries taking 70%+ of consumer dollar spend', affectedStakeholders: ['Creators', 'Fans', 'Platforms'], primaryRootCauses: ['R066', 'R067'], severity: 'CRITICAL' },
  { id: 'B048', code: 'B048', name: 'Audience monetization', domain: 'Commercial', whereItOccurs: 'Consumption', blockedFlow: 'Casual viewers churn before taking high-tier subscriptions', affectedStakeholders: ['OTT Platforms', 'Advertisers'], primaryRootCauses: ['R051', 'R054'], severity: 'HIGH' },
  { id: 'B049', code: 'B049', name: 'Advertising measurement', domain: 'Commercial', whereItOccurs: 'Broadcast / OTT', blockedFlow: 'Broadcasters cannot prove targeted digital ad viewability', affectedStakeholders: ['Advertisers', 'Broadcasters'], primaryRootCauses: ['R056', 'R057'], severity: 'HIGH' },
  { id: 'B050', code: 'B050', name: 'Industry standardization', domain: 'Governance', whereItOccurs: 'Ecosystem-wide', blockedFlow: 'Lack of shared taxonomy blocks automation and AI tooling', affectedStakeholders: ['All Stakeholders'], primaryRootCauses: ['R006', 'R072', 'R075'], severity: 'CRITICAL' }
];

// ── 5. The 5 Cross-Ecosystem Root-Cause Feedback Loops ────────
export const EERG_LOOPS: EERGLoop[] = [
  {
    id: 'loop-a',
    code: 'LOOP A',
    name: 'TALENT DISCOVERY FEEDBACK LOOP',
    subtitle: 'The Insider Monopoly Dynamic',
    summary: 'As barriers to creative production lower, sheer applicant volume explodes. Without verified discovery infrastructure, casting relies more heavily on existing relationships, rendering new talent increasingly invisible.',
    steps: [
      'More aspiring talent enters the industry',
      'Competition for visible roles intensifies',
      'Audition volume overwhelms casting directors',
      'Gatekeepers retreat to personal relationships & insider circles',
      'Unrepresented talent becomes structurally invisible',
      'Market access concentrates in top 2% agency rosters',
      'Industry complains of lack of fresh faces while rejecting newcomers'
    ],
    systemicIntervention: 'Verified digital talent credentialing and blind objective audition parsing.'
  },
  {
    id: 'loop-b',
    code: 'LOOP B',
    name: 'CONTENT ABUNDANCE FEEDBACK LOOP',
    subtitle: 'The Attention Cannibalization Cycle',
    summary: 'Cheaper production tools generate an unprecedented tsunami of content. As audience attention becomes scarce, platforms tune algorithms for outrage and hooks, forcing creators to optimize for metrics rather than depth.',
    steps: [
      'Lower production & distribution barriers',
      'Massive oversupply of video & audio content',
      'Audience attention becomes hyper-scarce',
      'Organic discovery collapses beneath algorithmic noise',
      'Platforms optimize algorithms for raw retention & shock hooks',
      'Creators modify storytelling to serve algorithmic incentives',
      'Homogenized, attention-hacked content floods the ecosystem'
    ],
    systemicIntervention: 'Curated niche discovery aggregators with authentic community-driven signaling.'
  },
  {
    id: 'loop-c',
    code: 'LOOP C',
    name: 'HIT ECONOMICS FEEDBACK LOOP',
    subtitle: 'The Sequel & Franchise Trap',
    summary: 'Unpredictable audience appetite creates extreme project risk. Financiers hedge by exclusively greenlighting established IP, depriving original concepts of resources and perpetuating systemic risk-aversion.',
    steps: [
      'High consumer demand uncertainty',
      'Elevated project failure risk for producers',
      'Financiers demand proven IP, sequels, and star attachments',
      'Original writing and experimental concepts starved of capital',
      'Audience experiences franchise fatigue, increasing volatility',
      'Market uncertainty spikes even higher',
      'Investors double down on risk-averse formulas'
    ],
    systemicIntervention: 'Syndicated audience risk-pooling and modular pre-production testing models.'
  },
  {
    id: 'loop-d',
    code: 'LOOP D',
    name: 'PLATFORM DEPENDENCY FEEDBACK LOOP',
    subtitle: 'The Creator Serfdom Trap',
    summary: 'Creators build audiences on centralized platforms. Once locked in, platforms extract higher take-rates and modify algorithms, increasing revenue volatility for the very talent who built the platform.',
    steps: [
      'Creator relies on centralized platform for audience reach',
      'Audience relationships trapped behind closed platform wall',
      'Platform monetizes creator engagement via algorithmic ads',
      'Platform unilaterally shifts rules, take-rates, or visibility',
      'Creator experiences sudden revenue drops and instability',
      'Creator forced to post higher volume to maintain baseline revenue',
      'Creator burnout rises while platform retains audience ownership'
    ],
    systemicIntervention: 'Sovereign audience relationship ledgers and portable subscriber identities.'
  },
  {
    id: 'loop-e',
    code: 'LOOP E',
    name: 'PRODUCTION CASCADE FEEDBACK LOOP',
    subtitle: 'The Downstream Shock Wave',
    summary: 'A minor delay on a physical film set cascades exponentially through downstream schedule dependencies, inflating budgets and compressing post-production finishing windows.',
    steps: [
      'Single lead talent arrives 3 hours late to set',
      'Daylight exterior shoot missed, forcing night turnaround',
      'Location permits expire, requiring emergency rescheduling',
      'Crew turnaround rules triggered, pushing call time next morning',
      'Shoot wraps 4 days behind schedule, incurring equipment penalties',
      'Post-production editorial window compressed by 40%',
      'VFX vendor rushed into round-the-clock overtime, degrading quality',
      'Platform acceptance delayed, triggering marketing window slip and fine'
    ],
    systemicIntervention: 'Live critical-path dependency telemetry with automated early-warning triggers.'
  }
];

// ── 6. The 6 Deep-Dive Stakeholder Root-Cause Pathways ────────
export const EERG_PATH_CASES: EERGPathCase[] = [
  {
    id: 'path-actor',
    stakeholder: 'Actor',
    problem: 'Cannot consistently find suitable work and maintain career momentum.',
    bottleneck: 'Talent discovery & matching infrastructure',
    immediateCauses: [
      'Fragmented audition opportunities posted in private WhatsApp chats',
      'Relationship-based casting favoring established agency rosters',
      'Incomplete and non-standardized online talent profiles',
      'Poor discoverability for non-celebrity performers'
    ],
    rootCauses: [
      'R001: Information fragmentation',
      'R008: Trust deficit',
      'R006: Lack of standardization',
      'R017: Relationship dependency',
      'R050: Market fragmentation'
    ],
    otherAffected: [
      'Casting directors (spending weeks on manual talent outreach)',
      'Producers (paying higher search and talent agency fees)',
      'Directors (limited to the same recurring faces in indie cinema)'
    ],
    downstreamImpact: [
      'Prolonged pre-production casting delays',
      'Higher project risk due to miscast roles',
      'Massive career attrition of skilled performers',
      'Inflated casting overhead costs'
    ],
    currentWorkaround: 'Scattered PDF portfolios, unsolicited Instagram DMs, manual agency rosters.',
    unsolvedGap: 'No single verified database linking talent credits, availability, skill verifications, and casting tape submissions.',
    opportunity: 'Universal verified talent intelligence & discovery exchange for professional entertainment.',
    potentialPayingStakeholders: [
      'Film & TV Production Houses',
      'Casting Agencies',
      'Talent Management Companies',
      'OTT Content Commissioners'
    ]
  },
  {
    id: 'path-producer',
    stakeholder: 'Producer',
    problem: 'Production exceeds budget and schedule due to cascading friction.',
    bottleneck: 'Cross-functional production coordination & dependency visibility',
    immediateCauses: [
      'Last-minute schedule shifts communicated via out-of-date call sheets',
      'Vendor conflicts and overlapping equipment double-bookings',
      'Unscheduled creative rework on physical sets',
      'Late executive decision-making during shoot'
    ],
    rootCauses: [
      'R001: Information fragmentation',
      'R020: Manual workflows',
      'R024: Poor planning',
      'R027: Cross-department coordination failure',
      'R029: Schedule dependency failure'
    ],
    otherAffected: [
      'Financiers & Completion Bonders (holding capital risk)',
      'Heads of Department (navigating physical crew fatigue)',
      'Post-production studios (receiving rushed, disorganized footage)'
    ],
    downstreamImpact: [
      '15-30% budget overruns',
      'Compressed post-production timeline',
      'Reduced profit margin and equity impairment',
      'Delayed release date triggering platform fines'
    ],
    currentWorkaround: 'Dozens of static Excel spreadsheets, midnight WhatsApp calls, printed paper call sheets.',
    unsolvedGap: 'No real-time single source of truth connecting call sheets, crew turnaround times, vendor telemetry, and budget burn.',
    opportunity: 'Automated live production dependency & cascade intelligence system.',
    potentialPayingStakeholders: [
      'Production Studios',
      'Line Producers',
      'Completion Bond Companies',
      'Streaming Platform Production Teams'
    ]
  },
  {
    id: 'path-vfx',
    stakeholder: 'VFX Studio',
    problem: 'Crushing margin compression and impossible delivery deadlines.',
    bottleneck: 'VFX dependency management & late-stage creative churn',
    immediateCauses: [
      'Late commissioning of VFX pipeline after physical wrap',
      'Frequent changes to picture lock after shot turnover',
      'Incomplete asset readiness and missing camera tracking data',
      'Scope creep without signed change orders'
    ],
    rootCauses: [
      'R021: Workflow fragmentation',
      'R023: Late decision-making',
      'R025: Weak handoffs',
      'R018: Incentive misalignment',
      'R029: Schedule dependency failure'
    ],
    otherAffected: [
      'VFX Artists (unpaid round-the-clock overtime, burnout)',
      'Post Supervisors (missed delivery milestones)',
      'Distributors (compromised visual quality on premiere night)'
    ],
    downstreamImpact: [
      'Severe vendor bankruptcy risks',
      'Sub-standard visual effects in theatrical releases',
      'Missed worldwide release dates',
      'Bitter legal disputes over unpaid change-order tranches'
    ],
    currentWorkaround: 'Absorbing overtime costs, submitting endless email change requests, working weekends.',
    unsolvedGap: 'No automated bridge between editorial conform changes and VFX shot complexity tracking.',
    opportunity: 'Predictive VFX asset dependency & change-management forecasting protocol.',
    potentialPayingStakeholders: [
      'VFX Studios',
      'Post-Production Facilities',
      'Feature Film Producers',
      'Studio Technology Divisions'
    ]
  },
  {
    id: 'path-ott',
    stakeholder: 'OTT / Streaming Platform',
    problem: 'Massive content acquisition spend with uncertain viewer retention and ROI.',
    bottleneck: 'Content-audience demand matching & predictive intelligence',
    immediateCauses: [
      'Greenlighting multi-million dollar series on intuition rather than audience telemetry',
      'Content discovery buried beneath generic UI carousels',
      'Subscriber churn after bingeing flagship releases',
      'Unclear cross-platform attribution for marketing spend'
    ],
    rootCauses: [
      'R050: Market fragmentation',
      'R052: Content oversupply',
      'R053: Attention scarcity',
      'R057: Incomplete metrics',
      'R059: Lack of predictive intelligence'
    ],
    otherAffected: [
      'Showrunners (abrupt show cancellations after season 1)',
      'Advertisers (paying high CPMs with unverified engagement)',
      'Audiences (decision fatigue and abandoned viewing)'
    ],
    downstreamImpact: [
      'Billions in written-down content library assets',
      'Platform consolidation and production budget freezes',
      'Consumer subscription fatigue and churn',
      'Risk-averse commissioning of generic programming'
    ],
    currentWorkaround: 'Copycat commissioning of competitor hits, heavy billboard spending, algorithm tweaks.',
    unsolvedGap: 'No cross-platform cultural demand graph forecasting niche audience appetite prior to production.',
    opportunity: 'Ecosystem-level cultural sentiment & predictive content demand engine.',
    potentialPayingStakeholders: [
      'Global & Regional OTT Platforms',
      'Media Investment Funds',
      'Commissioning Executives',
      'Studio Strategy Teams'
    ]
  },
  {
    id: 'path-rights',
    stakeholder: 'Rights & Licensing Teams',
    problem: 'Rights clearance delays take months, stalling international distribution.',
    bottleneck: 'Chain-of-title verification & rights fragmentation',
    immediateCauses: [
      'Multiple co-writers, estates, and underlying book rights holders',
      'Missing physical paper contracts and illegible scanned agreements',
      'Conflicting territorial and platform exclusivity carve-outs',
      'Manual human review of 50-year-old chain-of-title binders'
    ],
    rootCauses: [
      'R038: Ownership ambiguity',
      'R039: Rights fragmentation',
      'R040: Contract ambiguity',
      'R041: Licensing complexity',
      'R043: Rights-management failure'
    ],
    otherAffected: [
      'Distributors (losing optimal festival or theatrical windows)',
      'Artists & Composers (missing royalty disbursements)',
      'Acquisition Buyers (passing on high-potential catalog titles)'
    ],
    downstreamImpact: [
      'Frozen catalog monetization',
      'Costly copyright infringement injunctions',
      'Millions lost in unallocated royalty black boxes',
      'Delayed international release rollouts'
    ],
    currentWorkaround: 'Retaining expensive entertainment law firms to manually trace chain-of-title for months.',
    unsolvedGap: 'No unified machine-readable rights graph validating territorial, platform, and temporal rights splits.',
    opportunity: 'Automated chain-of-title verification & global rights clearance graph.',
    potentialPayingStakeholders: [
      'Film & TV Distributors',
      'Content Aggregators',
      'Entertainment Law Practices',
      'Catalog Acquisition Funds'
    ]
  },
  {
    id: 'path-live',
    stakeholder: 'Live Events & Promoters',
    problem: 'Catastrophic execution failures, queue collapses, and margin wipeouts.',
    bottleneck: 'Multi-vendor physical coordination & operational visibility',
    immediateCauses: [
      'Last-minute regulatory permit cancellations by local authorities',
      'Uncoordinated sound, lighting, generator, and stage rigging arrivals',
      'Scalper bots hijacking ticket inventory and driving secondary gouging',
      'Security and crowd-control breakdown during entry surges'
    ],
    rootCauses: [
      'R027: Cross-department coordination failure',
      'R028: Vendor coordination failure',
      'R031: Change-management failure',
      'R061: Regulatory complexity',
      'R062: Permission fragmentation'
    ],
    otherAffected: [
      'Fans (dangerous overcrowding, ruined experiences)',
      'Artists (delayed stage times, brand damage)',
      'Sponsors (negative public relations and unfulfilled activations)'
    ],
    downstreamImpact: [
      'Massive cancellation liabilities and insurance disputes',
      'Severe public safety and crowd crush hazards',
      'Loss of municipal venue licenses for future years',
      'Total sponsor withdrawal from future editions'
    ],
    currentWorkaround: 'Walkie-talkie shouting matches, disjointed WhatsApp group updates, manual clipboards.',
    unsolvedGap: 'No integrated operational command console linking venue permits, vendor logistics, security sensors, and ticketing gates.',
    opportunity: 'Real-time live event operations & cross-vendor synchronization platform.',
    potentialPayingStakeholders: [
      'Concert & Festival Promoters',
      'Stadium & Arena Venue Operators',
      'Ticketing Platforms',
      'Event Insurance Underwriters'
    ]
  }
];

// ── 7. Root Cause x Stakeholder Exposure Matrix (Heatmap) ─────
export const EERG_MATRIX: EERGMatrixRow[] = [
  { rootCause: 'Information fragmentation', code: 'R001', exposures: { actor: 3, producer: 3, casting: 3, vfx: 3, music: 3, ott: 3, audience: 3 } },
  { rootCause: 'Trust deficit', code: 'R008', exposures: { actor: 3, producer: 3, casting: 3, vfx: 3, music: 3, ott: 3, audience: 2 } },
  { rootCause: 'Discovery failure', code: 'R015', exposures: { actor: 3, producer: 3, casting: 3, vfx: 2, music: 3, ott: 3, audience: 3 } },
  { rootCause: 'Coordination failure', code: 'R027', exposures: { actor: 2, producer: 3, casting: 3, vfx: 3, music: 2, ott: 3, audience: 1 } },
  { rootCause: 'Cash-flow mismatch', code: 'R032', exposures: { actor: 3, producer: 3, casting: 1, vfx: 3, music: 3, ott: 3, audience: 2 } },
  { rootCause: 'Rights fragmentation', code: 'R039', exposures: { actor: 3, producer: 3, casting: 2, vfx: 3, music: 3, ott: 3, audience: 1 } },
  { rootCause: 'Platform dependency', code: 'R046', exposures: { actor: 3, producer: 2, casting: 2, vfx: 2, music: 3, ott: 3, audience: 3 } },
  { rootCause: 'Measurement gap', code: 'R058', exposures: { actor: 1, producer: 3, casting: 2, vfx: 2, music: 3, ott: 3, audience: 3 } },
  { rootCause: 'Workflow fragmentation', code: 'R021', exposures: { actor: 2, producer: 3, casting: 2, vfx: 3, music: 3, ott: 2, audience: 1 } },
  { rootCause: 'Late decision-making', code: 'R023', exposures: { actor: 3, producer: 3, casting: 2, vfx: 3, music: 2, ott: 2, audience: 1 } },
  { rootCause: 'Schedule dependency failure', code: 'R029', exposures: { actor: 3, producer: 3, casting: 3, vfx: 3, music: 2, ott: 2, audience: 1 } },
  { rootCause: 'Regulatory complexity', code: 'R061', exposures: { actor: 1, producer: 3, casting: 1, vfx: 1, music: 2, ott: 3, audience: 1 } },
  { rootCause: 'Intermediary dependency', code: 'R066', exposures: { actor: 3, producer: 2, casting: 2, vfx: 2, music: 3, ott: 2, audience: 2 } },
  { rootCause: 'Power concentration', code: 'R067', exposures: { actor: 3, producer: 3, casting: 2, vfx: 3, music: 3, ott: 3, audience: 2 } },
  { rootCause: 'Lack of ecosystem visibility', code: 'R075', exposures: { actor: 3, producer: 3, casting: 3, vfx: 3, music: 3, ott: 3, audience: 3 } }
];

// ── 8. The 25 High-Leverage Root Causes to Investigate ────────
export const EERG_HIGH_LEVERAGE_HYPOTHESIS = [
  'Information fragmentation (R001)',
  'Data silos (R002)',
  'Trust deficit (R008)',
  'Poor discovery/matching (R015)',
  'Relationship dependency (R017)',
  'Workflow fragmentation (R021)',
  'Coordination failure (R027)',
  'Lack of standardization (R006)',
  'Cash-flow mismatch (R032)',
  'Payment delays (R033)',
  'Rights fragmentation (R039)',
  'Ownership ambiguity (R038)',
  'Contract ambiguity (R040)',
  'Licensing complexity (R041)',
  'Platform dependency (R046)',
  'Audience fragmentation (R051)',
  'Content oversupply (R052)',
  'Attention scarcity (R053)',
  'Measurement gaps (R057)',
  'Poor attribution (R056)',
  'Regulatory complexity (R061)',
  'Permission fragmentation (R062)',
  'Intermediary dependency (R066)',
  'Power concentration (R067)',
  'Weak ecosystem-level visibility (R075)'
];

// ── 9. The 25 Graph Relationship Types ───────────────────────
export const EERG_RELATIONSHIP_TYPES = [
  'CAUSES', 'CONTRIBUTES_TO', 'BLOCKS', 'DEPENDS_ON', 'AMPLIFIES',
  'TRIGGERS', 'RESULTS_IN', 'AFFECTS', 'CONSTRAINS', 'FUNDS',
  'OWNS', 'LICENSES', 'PRODUCES', 'DISTRIBUTES', 'CONSUMES',
  'REGULATES', 'MEASURES', 'MITIGATES', 'REQUIRES', 'APPROVES',
  'DELAYS', 'INCREASES_COST', 'REDUCES_REVENUE', 'REDUCES_QUALITY', 'INCREASES_RISK'
];

// ── 10. The 12 Research Pipeline Phases ──────────────────────
export const EERG_RESEARCH_PIPELINE = [
  { phase: '01', title: 'Map Stakeholders', target: '100-150+ categorized participants across 5 core ecosystem layers.' },
  { phase: '02', title: 'Identify Surface Problems', target: '300-500+ documented operational complaints and friction points.' },
  { phase: '03', title: 'Cluster Bottlenecks', target: '100-200+ functional choke points where physical or digital flow halts.' },
  { phase: '04', title: 'Trace Systemic Root Causes', target: '50-100 foundational causes explaining multiple recurring problems.' },
  { phase: '05', title: 'Map Dependencies', target: '500-1,500+ directional dependency links between stakeholders and stages.' },
  { phase: '06', title: 'Model Failure Propagation', target: 'Map downstream cascade shockwaves triggered by localized variances.' },
  { phase: '07', title: 'Score Centrality & Damage', target: 'Score severity, economic loss, and centrality rankings across all nodes.' },
  { phase: '08', title: 'Map Existing Solutions', target: 'Catalog 200+ current tools, workarounds, and legacy services.' },
  { phase: '09', title: 'Identify Solution Gaps', target: 'Highlight 100+ structural whitespaces where legacy tools fail.' },
  { phase: '10', title: 'Synthesize Opportunities', target: 'Formulate high-leverage architectural intervention theses.' },
  { phase: '11', title: 'Identify Paying Customers', target: 'Pinpoint stakeholders with strongest economic incentive to fund solutions.' },
  { phase: '12', title: 'Empirical Industry Validation', target: 'Validate hypotheses through production interviews and field telemetry.' }
];

// ── 11. The 18 Final Graph Analytical Outputs ─────────────────
export const EERG_OUTPUT_VIEWS = [
  { id: 'view-stakeholder', name: 'Stakeholder Map', desc: 'Interactive taxonomy of 160+ industry entities across all 5 layers.' },
  { id: 'view-problem', name: 'Problem Map', desc: 'Catalog of 300+ operational friction points indexed by role.' },
  { id: 'view-bottleneck', name: 'Bottleneck Map', desc: '50 choke points where information, talent, money, or assets freeze.' },
  { id: 'view-root-cause', name: 'Root-Cause Map', desc: '75 fundamental systemic roots ranked by downstream blast radius.' },
  { id: 'view-dependency', name: 'Dependency Graph', desc: 'Directed acyclic network of inputs, outputs, and prerequisites.' },
  { id: 'view-failure-propagation', name: 'Failure Propagation Map', desc: 'Simulated cascade radius showing how localized shocks spread.' },
  { id: 'view-economic-impact', name: 'Economic-Impact Map', desc: 'Quantified capital losses, margin erosion, and delay costs.' },
  { id: 'view-root-centrality', name: 'Root-Cause Centrality Ranking', desc: 'Network centrality scores identifying highest-leverage intervention targets.' },
  { id: 'view-bottleneck-centrality', name: 'Bottleneck Centrality Ranking', desc: 'Priority indexing of ecosystem highways passing through choke points.' },
  { id: 'view-stakeholder-pain', name: 'Stakeholder Pain Ranking', desc: 'Quantified vulnerability index across each industry segment.' },
  { id: 'view-unsolved-problems', name: 'Unsolved Problem Ranking', desc: 'Critical operational friction points with zero viable current solutions.' },
  { id: 'view-existing-solutions', name: 'Existing Solution Map', desc: 'Catalog of software, agencies, and current industry workarounds.' },
  { id: 'view-market-gap', name: 'Market-Gap Map', desc: 'Structural whitespaces where existing tools fail to resolve the root cause.' },
  { id: 'view-opportunity', name: 'Opportunity Map', desc: 'Synthesized venture and infrastructure theses derived from root causes.' },
  { id: 'view-business', name: 'Potential Business Map', desc: 'Scalable service models addressing systemic friction.' },
  { id: 'view-paying-customer', name: 'Paying-Customer Map', desc: 'Direct mapping of economic incentives and budget owners.' },
  { id: 'view-intervention', name: 'Intervention Map', desc: 'Codified DigiSynq mechanisms resolving multiple problems at once.' },
  { id: 'view-ecosystem-health', name: 'Ecosystem Health Map', desc: 'Live operational telemetry assessing aggregate industry synchronization.' }
];

// ── 12. The 8 Core Inquiry Principles ─────────────────────────
export const EERG_INQUIRY_PRINCIPLES = [
  { question: 'Where does the flow get blocked?', detail: 'Identify the exact physical, digital, or financial bottleneck where momentum stops.' },
  { question: 'Why does the bottleneck repeatedly exist?', detail: 'Look past individual incompetence to find the structural rule or missing system causing it.' },
  { question: 'Which other stakeholders are affected?', detail: 'Trace the second-order and third-order casualties across the wider network.' },
  { question: 'What root cause creates multiple problems?', detail: 'Find the single underlying fault that manifests as 10 different symptoms.' },
  { question: 'Where does failure propagate?', detail: 'Track how an on-set scheduling variance spreads into festival submission rejections.' },
  { question: 'Who pays for the consequence?', detail: 'Identify who absorbs the ultimate financial loss, margin compression, or reputational damage.' },
  { question: 'Who has the incentive and ability to solve it?', detail: 'Locate the counterparty with both the capital budget and strategic urgency to fund a fix.' },
  { question: 'What single intervention unlocks the most value?', detail: 'Design the highest-leverage architectural mechanism rather than band-aid patches.' }
];

// ── 13. The 6 Commercial Business Units Built on EERG ─────────
export interface EERGBusinessUnit {
  id: string;
  name: string;
  code: string;
  tagline: string;
  targetRootCauses: string[];
  targetBottlenecks: string[];
  economicProblemSolved: string;
  annualValueAtStake: string;
  coreProductOffering: string;
  commercialModel: string;
  pricingTiers: {
    tier: string;
    targetBuyer: string;
    price: string;
    deliverables: string[];
  }[];
  payingCustomers: {
    archetype: string;
    budgetSource: string;
    roiJustification: string;
  }[];
  defensibilityMoat: string;
  scaleMetric: string;
}

export const EERG_BUSINESS_UNITS: EERGBusinessUnit[] = [
  {
    id: 'biz-talent',
    name: 'SYNQ.TALENT',
    code: 'BU-01',
    tagline: 'Verified Talent Intelligence & Universal Casting Protocol',
    targetRootCauses: ['R001', 'R006', 'R008', 'R015', 'R017'],
    targetBottlenecks: ['B001', 'B002', 'B003'],
    economicProblemSolved: 'Eliminates 3–6 weeks of pre-production audition churn, reduces talent search overhead by 65%, and stops relationship-only nepotistic hiring barriers.',
    annualValueAtStake: '$4.2B global annual spend on unverified talent scouting, missed roles, and audition overhead.',
    coreProductOffering: 'Universal verified talent ledger with standardized multi-dimensional profiles, cryptographically verified credits, live availability tracking, and automated audition triage.',
    commercialModel: 'Enterprise SaaS Subscription + Per-Project Production License + Tiered Agency Seats',
    pricingTiers: [
      {
        tier: 'Agency Pro Desk',
        targetBuyer: 'Talent Agencies & Artist Managers',
        price: '$2,500 / month / desk',
        deliverables: ['Direct casting submission pipeline', 'Live client availability push', 'Verified credit badges']
      },
      {
        tier: 'Production Slate License',
        targetBuyer: 'Feature Film & Episodic Production Houses',
        price: '$18,500 / project',
        deliverables: ['Automated audition triage', 'Schedule availability matching', 'Cross-project role conflict alerts']
      },
      {
        tier: 'Studio Enterprise Suite',
        targetBuyer: 'Global Studios & Streaming Platforms',
        price: '$120,000 / year',
        deliverables: ['Full catalog talent analytics', 'Diversity & representation metrics', 'Direct talent roster API integrations']
      }
    ],
    payingCustomers: [
      { archetype: 'Production Houses', budgetSource: 'Pre-Production Casting Budget', roiJustification: 'Cuts 18 days off pre-production and eliminates $80k in redundant audition taping expenses.' },
      { archetype: 'Casting Agencies', budgetSource: 'Agency Operations & Software Overhead', roiJustification: 'Triples candidate review throughput while preserving verified audition quality.' },
      { archetype: 'Streaming Platforms', budgetSource: 'Content Operations & In-House Production', roiJustification: 'Eliminates talent double-booking conflicts across overlapping slate greenlights.' }
    ],
    defensibilityMoat: 'Network effects of verified creator credentials and two-sided liquidity between talent agencies and casting directors.',
    scaleMetric: 'Active verified performer profiles & monthly casting matches processed.'
  },
  {
    id: 'biz-cascade',
    name: 'SYNQ.CASCADE',
    code: 'BU-02',
    tagline: 'Live Production Dependency & Critical-Path Telemetry',
    targetRootCauses: ['R001', 'R020', 'R024', 'R027', 'R029', 'R036'],
    targetBottlenecks: ['B005', 'B006', 'B011', 'B012'],
    economicProblemSolved: 'Arrests the $84k/day cost of on-set physical downtime; prevents a single delayed actor or permit denial from blowing out physical production budgets.',
    annualValueAtStake: '$14.8B lost annually to uncoordinated physical set delays, overtime penalties, and schedule cascades.',
    coreProductOffering: 'Real-time production dependency telemetry engine connecting daily digital call sheets, crew turnaround regulations, camera equipment telemetry, and live contingency cash burn.',
    commercialModel: 'Sprint-Based Production Engagement Fee (0.5%–1.0% of physical shoot budget) + Completion Bonder Risk API',
    pricingTiers: [
      {
        tier: 'Indie Feature Sprint',
        targetBuyer: 'Independent Film Producers ($2M–$10M Budget)',
        price: '$35,000 flat engagement',
        deliverables: ['Critical-path schedule model', 'Daily automated variance alerts', '24/7 emergency rescheduling desk']
      },
      {
        tier: 'Studio Slate Module',
        targetBuyer: 'Major Studio Line Production ($25M–$150M Budget)',
        price: '$95,000 / active shoot',
        deliverables: ['Multi-unit set telemetry', 'Vendor truck geofenced tracking', 'Live contingency burn projection']
      },
      {
        tier: 'Completion Bond Underwriter Desk',
        targetBuyer: 'Completion Bond Companies & Financiers',
        price: '$250,000 / year + basis points',
        deliverables: ['Automated risk-scoring telemetry', 'Pre-claim variance warnings', 'Real-time daily cost reports']
      }
    ],
    payingCustomers: [
      { archetype: 'Film & TV Producers', budgetSource: 'Physical Production Line-Item Budget', roiJustification: 'Saves 3–5 shoot days ($250k–$450k minimum) by averting cascading equipment and location resets.' },
      { archetype: 'Completion Bond Providers', budgetSource: 'Risk Mitigation & Underwriting Contingency', roiJustification: 'Reduces catastrophic takeover payouts by catching schedule slippage 72 hours before default.' },
      { archetype: 'Studio Physical Production Execs', budgetSource: 'Studio Executive Operations', roiJustification: 'Provides multi-production live dashboard eliminating spreadsheet blind spots.' }
    ],
    defensibilityMoat: 'Proprietary critical-path scheduling algorithms and live integration with production accounting payroll systems.',
    scaleMetric: 'Active shoot days managed & verified delay days averted.'
  },
  {
    id: 'biz-finish',
    name: 'SYNQ.FINISH',
    code: 'BU-03',
    tagline: 'VFX, Post & Master Delivery Synchronization Desk',
    targetRootCauses: ['R018', 'R021', 'R023', 'R025', 'R029'],
    targetBottlenecks: ['B017', 'B018', 'B019', 'B039'],
    economicProblemSolved: 'Stops crushing post-production overtime margin compression; synchronizes editorial conformed changes with VFX shot tracking and automated platform QC checks.',
    annualValueAtStake: '$6.5B in post-production rework, unbilled VFX overtime, and delayed streaming release penalty fines.',
    coreProductOffering: 'Conformed IMF delivery cloud bridge, automated shot change-order tracker, phase cancellation audio check, and pre-flight platform QC verification gate.',
    commercialModel: 'Per-Title Post Synchronization Contract + Change-Order Escrow Arbitration Fee (1.5% of variance volume)',
    pricingTiers: [
      {
        tier: 'Feature Post Sprint',
        targetBuyer: 'Post-Production Supervisors & Feature Producers',
        price: '$28,000 / feature',
        deliverables: ['Conform & camera LUT tracking', 'VFX shot scope audit', 'Pre-flight IMF QC signoff']
      },
      {
        tier: 'VFX Studio Shield',
        targetBuyer: 'Boutique & Mid-Tier VFX Facilities',
        price: '$4,500 / month / studio',
        deliverables: ['Automated turnover scope verification', 'Change-order audit trails', 'Contractual delivery freeze triggers']
      },
      {
        tier: 'Platform Ingest Pipeline',
        targetBuyer: 'OTT Operations & Global Theatrical Distributors',
        price: '$180,000 / year',
        deliverables: ['Automated delivery specification validation', 'Dolby Atmos & HDR metadata auditing', 'Instant master acceptance']
      }
    ],
    payingCustomers: [
      { archetype: 'VFX Studios', budgetSource: 'Facility Operations & Legal Overhead', roiJustification: 'Protects 25% profit margin by converting unpaid scope creep into validated change-order tranches.' },
      { archetype: 'Post Supervisors', budgetSource: 'Post-Production Finishing Allocation', roiJustification: 'Prevents platform delivery rejection fines ($50k–$200k) on worldwide premiere date.' },
      { archetype: 'Distributors & Platforms', budgetSource: 'Technical Operations & Ingest Budget', roiJustification: 'Compresses master file validation time from 14 days down to 6 hours.' }
    ],
    defensibilityMoat: 'Direct technical compatibility with editorial NLEs, IMF packaging tools, and streaming platform ingestion APIs.',
    scaleMetric: 'VFX shots audited & master IMF packages certified for platform ingestion.'
  },
  {
    id: 'biz-rights',
    name: 'SYNQ.RIGHTS',
    code: 'BU-04',
    tagline: 'Chain-of-Title, Clearance & Royalty Recovery Ledger',
    targetRootCauses: ['R013', 'R038', 'R039', 'R040', 'R041', 'R042', 'R043'],
    targetBottlenecks: ['B021', 'B022', 'B023', 'B024', 'B044'],
    economicProblemSolved: 'Accelerates international licensing clearance from 90 days to 48 hours; reclaims 40%+ in uncollected black-box global music royalties and eliminates copyright injunctions.',
    annualValueAtStake: '$8.9B lost annually in unallocated royalty pools, frozen catalog sales, and copyright litigation settlements.',
    coreProductOffering: 'Automated chain-of-title verification graph, audio fingerprint cue-sheet generation, territorial holdback validation, and multi-party royalty escrow settlement.',
    commercialModel: 'Title Audit Fee ($12k–$45k per catalog acquisition) + 12% Contingency Fee on Recovered Royalty Pools',
    pricingTiers: [
      {
        tier: 'Title Clearance Sprint',
        targetBuyer: 'Acquisition Buyers & Sales Agents',
        price: '$15,000 / title',
        deliverables: ['Chain-of-title verification report', 'Territorial carve-out map', 'Clean warranty certificate']
      },
      {
        tier: 'Catalog Royalty Audit',
        targetBuyer: 'Music Publishers & Master Catalog Owners',
        price: '$45,000 + 12% recovery fee',
        deliverables: ['Global PRO cue sheet audit', 'Streaming micro-royalty reconciliation', 'Direct payment collection bridge']
      },
      {
        tier: 'Institutional Rights OS',
        targetBuyer: 'Private Equity IP Buyout Funds & Major Studios',
        price: '$220,000 / year',
        deliverables: ['Real-time rights window availability', 'AI contract digitization', 'Automated holdback conflict engine']
      }
    ],
    payingCustomers: [
      { archetype: 'Catalog Acquisition Funds', budgetSource: 'Acquisition Due Diligence Budget', roiJustification: 'Shortens acquisition closing time from 4 months to 2 weeks while unearthing hidden royalty revenue.' },
      { archetype: 'Music Publishers & Estates', budgetSource: 'Royalties & Licensing Operations', roiJustification: 'Recaptures hundreds of thousands in uncollected international sync and performance royalties.' },
      { archetype: 'Content Distributors', budgetSource: 'Distribution Legal & Clearance Budget', roiJustification: 'Completely eliminates multi-million dollar territorial copyright infringement risks.' }
    ],
    defensibilityMoat: 'Proprietary graph database of historical territorial distribution agreements and musical composition cue sheets.',
    scaleMetric: 'Catalog titles cleared & cumulative royalty recovery volume.'
  },
  {
    id: 'biz-radar',
    name: 'SYNQ.RADAR',
    code: 'BU-05',
    tagline: 'Cultural Sentiment & Predictive Content Demand Forecasting',
    targetRootCauses: ['R050', 'R052', 'R053', 'R054', 'R055', 'R057', 'R059'],
    targetBottlenecks: ['B004', 'B016', 'B027', 'B028', 'B048'],
    economicProblemSolved: 'Prevents catastrophic $20M–$100M greenlight write-downs by pre-testing audience resonance, micro-fandom demand, and cultural fatigue before capital deployment.',
    annualValueAtStake: '$22.4B in annual content write-downs, canceled streaming series, and marketing spend failures.',
    coreProductOffering: 'Cross-platform audience demand graph tracking micro-fandom velocity, concept fatigue scores, optimal release window modeling, and subscriber acquisition forecasting.',
    commercialModel: 'Institutional Annual Subscription ($150k–$450k/year) + Pre-Greenlight Risk Audit Sprints ($45k/script)',
    pricingTiers: [
      {
        tier: 'Pre-Greenlight Risk Audit',
        targetBuyer: 'Independent Producers & Financiers',
        price: '$45,000 / project',
        deliverables: ['Audience resonance simulation', 'Comparable title performance telemetry', 'Territorial pre-sales value index']
      },
      {
        tier: 'Platform Slate Intelligence',
        targetBuyer: 'Regional & Global OTT Platforms',
        price: '$180,000 / year',
        deliverables: ['Cohort retention forecasting', 'Niche fandom growth curves', 'Commissioning white-space alerts']
      },
      {
        tier: 'Media Private Equity Terminal',
        targetBuyer: 'Sovereign Wealth & Media Investment Funds',
        price: '$380,000 / year',
        deliverables: ['Industry-wide IP valuation index', 'Competitor slate risk exposure', 'Macro attention allocation models']
      }
    ],
    payingCustomers: [
      { archetype: 'OTT Commissioning Executives', budgetSource: 'Content Strategy & Acquisition Capital', roiJustification: 'Avoids greenlighting multi-million dollar series destined for immediate post-launch viewer abandonment.' },
      { archetype: 'Media Private Equity Funds', budgetSource: 'Investment Diligence & Portfolio Risk', roiJustification: 'Provides quantitative risk-adjusted valuation models for film slate financing.' },
      { archetype: 'Studio Greenlight Committees', budgetSource: 'Studio Executive Development Budget', roiJustification: 'Replaces emotional gut-instinct pitches with hard multi-platform demand data.' }
    ],
    defensibilityMoat: 'Multi-year cross-platform cultural telemetry archive and trained predictive audience demand machine learning models.',
    scaleMetric: 'Pre-greenlight scripts audited & predicted vs actual box-office/viewership accuracy.'
  },
  {
    id: 'biz-live',
    name: 'SYNQ.LIVE',
    code: 'BU-06',
    tagline: 'Live Event Multi-Vendor Coordination & Capacity Operating System',
    targetRootCauses: ['R027', 'R028', 'R031', 'R061', 'R062'],
    targetBottlenecks: ['B030', 'B031', 'B032'],
    economicProblemSolved: 'Eliminates catastrophic festival queue collapses, security gate surges, stage generator drops, and municipal permit revocation liabilities.',
    annualValueAtStake: '$5.1B in live event insurance claims, crowd management disasters, ticket scalping losses, and brand sponsor refunds.',
    coreProductOffering: 'Real-time multi-vendor event coordination console uniting municipal police permits, stage rigging load schedules, sound/lighting arrivals, and RFID/ticket entry velocity.',
    commercialModel: 'Per-Event Command License ($25k–$100k per festival/stadium stop) + Secondary Ticket Anti-Scalp Verification Fee',
    pricingTiers: [
      {
        tier: 'Arena Tour Stop',
        targetBuyer: 'Touring Promoters & Artist Production Teams',
        price: '$25,000 / arena date',
        deliverables: ['Load-in schedule synchronization', 'Vendor arrival telemetry', 'Soundcheck readiness check']
      },
      {
        tier: 'Multi-Day Festival OS',
        targetBuyer: 'Major Festival Organizers (30k+ Attendees)',
        price: '$85,000 / festival edition',
        deliverables: ['Unified municipal permit dashboard', 'Live gate entry velocity telemetry', 'Cross-stage power & crew dispatch']
      },
      {
        tier: 'Venue Portfolio Command',
        targetBuyer: 'Stadium & Arena Operators',
        price: '$160,000 / year',
        deliverables: ['Annual venue compliance tracking', 'Multi-promoter turnaround coordination', 'Turnstile throughput optimization']
      }
    ],
    payingCustomers: [
      { archetype: 'Festival Promoters', budgetSource: 'Event Operations & Safety Contingency', roiJustification: 'Eliminates public safety disaster risks and prevents tens of thousands in municipal fines.' },
      { archetype: 'Stadium & Arena Operators', budgetSource: 'Venue Operations & Maintenance Overhead', roiJustification: 'Compresses arena changeover turnaround between sports and touring concerts by 35%.' },
      { archetype: 'Event Insurance Underwriters', budgetSource: 'Risk Mitigation & Loss Prevention', roiJustification: 'Underwrites live event policies with real-time operational risk monitoring.' }
    ],
    defensibilityMoat: 'Direct operational partnerships with venue physical access infrastructure and municipal emergency management protocols.',
    scaleMetric: 'Live event spectator capacity synchronized & zero-incident event operations verified.'
  }
];

// ── 14. Top 10 Root-Cause Ranking with Telemetry (Sections 10 & 11) ──
export interface EERGRootCauseTelemetry {
  code: string;
  name: string;
  category: string;
  description: string;
  stakeholdersAffected: number;
  problemsCount: number;
  bottlenecksCount: number;
  dependenciesCount: number;
  centralityLevel: 'MAXIMUM' | 'VERY HIGH' | 'HIGH' | 'MEDIUM';
  propagationDepth: number; // in levels
  economicExposure: string;
  evidenceConfidence: '94% EMPIRICAL' | '88% EMPIRICAL' | '82% MODELLED' | '76% HYPOTHESIS';
  flowChain: {
    problems: string[];
    bottlenecks: string[];
    affectedRoles: string[];
    impacts: string[];
    opportunity: string;
  };
}

export const EERG_TOP_ROOT_CAUSES_TELEMETRY: EERGRootCauseTelemetry[] = [
  {
    code: 'R001',
    name: 'Information Fragmentation',
    category: 'Information / Data',
    description: 'Information required for decision-making is distributed across disconnected people, platforms, spreadsheets, documents, informal networks and legacy systems.',
    stakeholdersAffected: 73,
    problemsCount: 142,
    bottlenecksCount: 28,
    dependenciesCount: 317,
    centralityLevel: 'VERY HIGH',
    propagationDepth: 8,
    economicExposure: '$12.4B annual friction across global casting, call sheets, rights, and finance.',
    evidenceConfidence: '94% EMPIRICAL',
    flowChain: {
      problems: ['Actor undiscovered', 'Producer out-of-sync schedule', 'Casting search delay', 'Vendor rate opacity'],
      bottlenecks: ['Talent discovery (B001)', 'Production coordination (B011)', 'Rights verification (B021)'],
      affectedRoles: ['Actors', 'Casting Directors', 'Producers', 'Heads of Dept', 'Financiers'],
      impacts: ['15-30% shoot overtime', 'Prolonged development churn', 'Unverified talent reliance'],
      opportunity: 'Unified entertainment data protocol & live synchronization ledger.'
    }
  },
  {
    code: 'R008',
    name: 'Trust Deficit',
    category: 'Trust & Uncertainty',
    description: 'Historical non-payments, credit omissions, and broken verbal assurances create hyper-defensive counterparties and slow contractual negotiations.',
    stakeholdersAffected: 68,
    problemsCount: 119,
    bottlenecksCount: 24,
    dependenciesCount: 284,
    centralityLevel: 'VERY HIGH',
    propagationDepth: 7,
    economicExposure: '$8.2B locked in defensive holdbacks, legal retainers, and stalled greenlights.',
    evidenceConfidence: '88% EMPIRICAL',
    flowChain: {
      problems: ['Unsigned contracts on set', 'Vendor payment withholding', 'Uncredited creative work'],
      bottlenecks: ['Contract execution (B022)', 'Vendor selection (B010)', 'Payment processing (B033)'],
      affectedRoles: ['Writers', 'VFX Studios', 'Line Producers', 'Independent Talent', 'Financiers'],
      impacts: ['Work stoppages', 'Litigation settlements', 'Exclusive reliance on small insider circles'],
      opportunity: 'Milestone escrow protocols & cryptographic verified project credentials.'
    }
  },
  {
    code: 'R021',
    name: 'Workflow Fragmentation',
    category: 'Workflow & Process',
    description: 'Editorial conform, color-grading suites, audio stem mixing, and visual effects operate in disconnected software silos with high-friction manual exports.',
    stakeholdersAffected: 61,
    problemsCount: 98,
    bottlenecksCount: 22,
    dependenciesCount: 245,
    centralityLevel: 'HIGH',
    propagationDepth: 6,
    economicExposure: '$6.5B in post-production conform re-work and rushed delivery overtime.',
    evidenceConfidence: '94% EMPIRICAL',
    flowChain: {
      problems: ['Editorial desync with VFX', 'Atmos downmix phase cancellation', 'Subtitle timecode drift'],
      bottlenecks: ['Post handoffs (B017)', 'VFX delivery (B018)', 'Platform compliance (B039)'],
      affectedRoles: ['Editors', 'VFX Supervisors', 'Sound Designers', 'Platform QC Teams'],
      impacts: ['Rejected platform deliveries', 'Midnight overtime rushes', 'Festival premiere slips'],
      opportunity: 'Cloud-native unified IMF conform pipeline & automated pre-flight QC gates.'
    }
  },
  {
    code: 'R027',
    name: 'Coordination Failure',
    category: 'Coordination & Operations',
    description: 'Cross-departmental synchronization breakdown between physical sets, soundstages, lighting equipment rentals, and regulatory municipal authorities.',
    stakeholdersAffected: 59,
    problemsCount: 92,
    bottlenecksCount: 21,
    dependenciesCount: 231,
    centralityLevel: 'HIGH',
    propagationDepth: 7,
    economicExposure: '$9.7B in physical set downtime, wasted generator fuel, and emergency rescheduling.',
    evidenceConfidence: '88% EMPIRICAL',
    flowChain: {
      problems: ['Camera truck arrives before permits clear', 'Night shoot turnaround violates safety rules'],
      bottlenecks: ['Schedule planning (B006)', 'Vendor coordination (B011)', 'Production communication (B012)'],
      affectedRoles: ['1st ADs', 'Line Producers', 'Rental Houses', 'Police Authorities'],
      impacts: ['$84k/day idle crew costs', 'Expired location permits', 'Crew exhaustion & safety risks'],
      opportunity: 'Live critical-path dependency telemetry & geofenced equipment dispatch.'
    }
  },
  {
    code: 'R039',
    name: 'Rights Fragmentation',
    category: 'Legal, IP & Rights',
    description: 'Territorial, platform, and temporal rights carved up among multiple historical co-producers, underlying authors, and international distributors with zero centralized tracking.',
    stakeholdersAffected: 54,
    problemsCount: 87,
    bottlenecksCount: 19,
    dependenciesCount: 214,
    centralityLevel: 'HIGH',
    propagationDepth: 6,
    economicExposure: '$7.4B in frozen catalog acquisition deals and territorial copyright lawsuits.',
    evidenceConfidence: '88% EMPIRICAL',
    flowChain: {
      problems: ['Territorial holdback conflicts', 'Song sync stuck in multi-heir probate', 'Missing master release docs'],
      bottlenecks: ['Rights clearance (B021)', 'Content licensing (B024)', 'IP verification (B044)'],
      affectedRoles: ['Distributors', 'Music Supervisors', 'Sales Agents', 'IP Attorneys'],
      impacts: ['Delayed worldwide release dates', 'Millions in unallocated royalty pools', 'Canceled streaming deals'],
      opportunity: 'Automated chain-of-title verification graph & multi-territory clearance engine.'
    }
  },
  {
    code: 'R058',
    name: 'Measurement Gap',
    category: 'Measurement & Feedback',
    description: 'Lack of standardized, independent cross-platform audience metrics comparing theatrical box-office admissions, social short-form engagement, and proprietary streaming hours.',
    stakeholdersAffected: 51,
    problemsCount: 79,
    bottlenecksCount: 18,
    dependenciesCount: 198,
    centralityLevel: 'HIGH',
    propagationDepth: 5,
    economicExposure: '$11.2B in misallocated marketing spend and inaccurate backend royalty participations.',
    evidenceConfidence: '82% MODELLED',
    flowChain: {
      problems: ['Black-box streaming viewer data', 'Unverifiable viral marketing ROI', 'Disputed net profit splits'],
      bottlenecks: ['Marketing attribution (B029)', 'Revenue reconciliation (B034)', 'Audience measurement (B036)'],
      affectedRoles: ['Advertisers', 'Showrunners', 'Talent Agents', 'Platform Commissioners'],
      impacts: ['Premature show cancellations', 'Wasted ad campaigns', 'Damaged creator trust'],
      opportunity: 'Universal Attention Value (UAV) index & third-party verified telemetry.'
    }
  },
  {
    code: 'R046',
    name: 'Platform Dependency',
    category: 'Technology & Architecture',
    description: 'Content creators, independent distributors, and theatrical circuits surrender their pricing power and audience data to global streaming and social algorithmic gatekeepers.',
    stakeholdersAffected: 48,
    problemsCount: 74,
    bottlenecksCount: 16,
    dependenciesCount: 186,
    centralityLevel: 'HIGH',
    propagationDepth: 6,
    economicExposure: '$8.5B in lost direct-to-consumer relationships and creator monetization leakage.',
    evidenceConfidence: '88% EMPIRICAL',
    flowChain: {
      problems: ['Sudden algorithmic demonetization', 'No access to subscriber emails', 'Non-negotiable licensing terms'],
      bottlenecks: ['OTT discovery (B027)', 'Platform dependency (B038)', 'Creator monetization (B047)'],
      affectedRoles: ['YouTubers', 'Indie Producers', 'Songwriters', 'Boutique Studios'],
      impacts: ['Extreme revenue volatility', 'Total platform lock-in', 'Middle-tier production collapse'],
      opportunity: 'Sovereign audience relationship ledgers & decentralized syndication networks.'
    }
  },
  {
    code: 'R050',
    name: 'Market Fragmentation',
    category: 'Market & Attention',
    description: 'Audience splintered into thousands of hyper-niche fandoms across 20+ streaming apps, social video feeds, podcasts, and gaming ecosystems, ending the mass monoculture era.',
    stakeholdersAffected: 46,
    problemsCount: 71,
    bottlenecksCount: 15,
    dependenciesCount: 172,
    centralityLevel: 'HIGH',
    propagationDepth: 5,
    economicExposure: '$14.1B in underperforming releases unable to reach critical discovery mass.',
    evidenceConfidence: '94% EMPIRICAL',
    flowChain: {
      problems: ['Great movies buried on launch', 'Hyper-inflated marketing spend', 'Massive viewer decision fatigue'],
      bottlenecks: ['Audience discovery (B028)', 'OTT discovery (B027)', 'Screen allocation (B026)'],
      affectedRoles: ['Distributors', 'Marketers', 'Independent Filmmakers', 'Audiences'],
      impacts: ['Box-office polarization', '18-minute browsing before abandonment', 'High content churn'],
      opportunity: 'Context-aware micro-community discovery aggregators & fandom prediction tools.'
    }
  },
  {
    code: 'R032',
    name: 'Cash-Flow Mismatch',
    category: 'Financial & Capital',
    description: 'Physical daily crews, equipment rentals, and soundstages must be paid weekly in cash, while streaming tranches and theatrical minimum guarantees disburse 90–180 days post-delivery.',
    stakeholdersAffected: 44,
    problemsCount: 68,
    bottlenecksCount: 14,
    dependenciesCount: 165,
    centralityLevel: 'HIGH',
    propagationDepth: 6,
    economicExposure: '$5.8B in usurious bridge financing interest and vendor insolvency.',
    evidenceConfidence: '88% EMPIRICAL',
    flowChain: {
      problems: ['Delayed crew payroll', 'Emergency hard-money loans at 18%+', 'Vendor liens on master files'],
      bottlenecks: ['Project financing (B004)', 'Payment processing (B033)', 'Revenue reconciliation (B034)'],
      affectedRoles: ['Independent Producers', 'Line Producers', 'Boutique Post Houses', 'Lenders'],
      impacts: ['Mid-shoot shutdowns', 'Personal bankruptcy of producers', 'Frozen asset deliverables'],
      opportunity: 'Fintech production receivable discounting & programmatic payroll factoring.'
    }
  },
  {
    code: 'R075',
    name: 'Lack of Ecosystem-Level Visibility',
    category: 'Ecosystem & Structural',
    description: 'No single stakeholder possesses an end-to-end operational map of how decisions, schedule variances, rights holdbacks, and cost cascades propagate across the industry supply chain.',
    stakeholdersAffected: 82,
    problemsCount: 160,
    bottlenecksCount: 34,
    dependenciesCount: 412,
    centralityLevel: 'MAXIMUM',
    propagationDepth: 12,
    economicExposure: '$61.9B in aggregate systemic friction, avoidable errors, and broken feedback loops.',
    evidenceConfidence: '94% EMPIRICAL',
    flowChain: {
      problems: ['Siloed finger-pointing during delays', 'Repeatedly reinventing broken wheels', 'Inability to isolate root cause'],
      bottlenecks: ['Industry standardization (B050)', 'Data integration (B035)', 'Vendor coordination (B011)'],
      affectedRoles: ['All 160+ Stakeholders across Creation, Production, Commercial, Infra & Consumption'],
      impacts: ['Ecosystem-wide inefficiency', 'Chronic margin compression', 'Systemic risk-aversion'],
      opportunity: 'DigiSynq Master EERG Model — Turning fragmented problems into systemic leverage.'
    }
  }
];

// ── 15. The "Why?" Interactive 5-Whys Chains (Section 12) ─────
export interface EERGWhyChain {
  id: string;
  title: string;
  symptom: string;
  steps: {
    level: number;
    question: string;
    answer: string;
    type: 'IMMEDIATE' | 'PROCESS' | 'STRUCTURAL' | 'SYSTEMIC' | 'ROOT';
  }[];
  systemicRootCause: string;
  rootCauseCode: string;
  leverageOpportunity: string;
}

export const EERG_WHY_CHAINS: EERGWhyChain[] = [
  {
    id: 'why-payment',
    title: 'Vendor Payment Delay (Physical Production)',
    symptom: 'Boutique VFX studio has not received final 20% milestone payment 90 days after delivery.',
    steps: [
      { level: 1, question: 'Why is the payment delayed?', answer: 'The studio invoice approval has been stalled in the platform accounts department.', type: 'IMMEDIATE' },
      { level: 2, question: 'Why is the invoice approval stalled?', answer: 'There are 5 layers of corporate legal, technical, and accounting sign-offs required.', type: 'PROCESS' },
      { level: 3, question: 'Why are there so many approval layers?', answer: 'Editorial conformed changes resulted in unbilled scope variance that accounting cannot reconcile against the original PO.', type: 'STRUCTURAL' },
      { level: 4, question: 'Why cannot accounting reconcile the variance?', answer: 'The line producer approved shot additions on set via verbal WhatsApp message without formal change orders.', type: 'SYSTEMIC' },
      { level: 5, question: 'Why is there no single source of truth connecting on-set changes to accounting?', answer: 'Information is distributed across isolated spreadsheets, personal messages, and legacy accounting software with zero real-time data interoperability.', type: 'ROOT' }
    ],
    systemicRootCause: 'Information Fragmentation & Data Silos',
    rootCauseCode: 'R001 / R002',
    leverageOpportunity: 'Automated Conformed Change-Order Escrow & Real-Time Production Ledger.'
  },
  {
    id: 'why-schedule',
    title: 'On-Set Schedule Slip Cascading into Budget Overrun',
    symptom: 'Feature film wraps principal photography 6 days late, triggering a $540,000 budget deficit.',
    steps: [
      { level: 1, question: 'Why did the shoot wrap 6 days late?', answer: 'A crucial 3-day exterior night shoot was rained out and had to be remounted next week.', type: 'IMMEDIATE' },
      { level: 2, question: 'Why was the weather contingency unable to absorb the rain?', answer: 'The lead actor had a strict hard-out date for another production, compressing the backup schedule.', type: 'PROCESS' },
      { level: 3, question: 'Why was the lead actor on such a tight overlap?', answer: 'Casting attachments were finalized 4 weeks late during pre-production, pushing start dates.', type: 'STRUCTURAL' },
      { level: 4, question: 'Why did casting take 4 weeks longer than budgeted?', answer: 'Casting directors and agents engaged in prolonged back-and-forth over unverified previous shoot wrap dates.', type: 'SYSTEMIC' },
      { level: 5, question: 'Why is talent availability tracked through fragmented manual agency calls rather than live telemetry?', answer: 'The industry operates on informal relationship gatekeeping without standardized live availability infrastructure.', type: 'ROOT' }
    ],
    systemicRootCause: 'Relationship Dependency & Lack of Standardized Availability',
    rootCauseCode: 'R017 / R006',
    leverageOpportunity: 'Universal Live Talent Availability Graph & Critical-Path Scheduling Engine.'
  },
  {
    id: 'why-vfx',
    title: 'VFX Margin Wipeout & Delivery Rejection',
    symptom: 'VFX facility incurs $180,000 in unpaid artist overtime and platform QC rejects master package on launch week.',
    steps: [
      { level: 1, question: 'Why did the VFX facility incur $180,000 in unpaid overtime?', answer: '500 complex CGI shots were revised 14 times within the final 10 days of post finishing.', type: 'IMMEDIATE' },
      { level: 2, question: 'Why were shots revised 14 times so late in the process?', answer: 'Director and studio executives changed the edit picture lock 3 times after shot turnover.', type: 'PROCESS' },
      { level: 3, question: 'Why was picture lock changed after VFX shots were already in final render?', answer: 'Test-screening audience feedback revealed story confusion in the climax, forcing re-edits.', type: 'STRUCTURAL' },
      { level: 4, question: 'Why was test screening conducted only 3 weeks before international premiere?', answer: 'Late greenlight and rushed physical production compressed the post-production window by 40%.', type: 'SYSTEMIC' },
      { level: 5, question: 'Why do productions consistently start shooting before script breakdowns and post pipelines are locked?', answer: 'Incentives reward rushing to production to trigger studio progress payments rather than verifying readiness.', type: 'ROOT' }
    ],
    systemicRootCause: 'Incentive Misalignment & Workflow Fragmentation',
    rootCauseCode: 'R018 / R021',
    leverageOpportunity: 'Conformed IMF Asset Tracking & Predictive Post Change-Management Desk.'
  },
  {
    id: 'why-rights',
    title: 'International Territorial Rights Clearance Stall',
    symptom: 'Distributor unable to close $2.5M European theatrical sale because music sync rights are contested.',
    steps: [
      { level: 1, question: 'Why are music sync rights contested in Europe?', answer: 'The underlying master recording license was only cleared for North American theatrical exhibition.', type: 'IMMEDIATE' },
      { level: 2, question: 'Why was international digital streaming and theatrical omitted from the original agreement?', answer: 'The independent producer used a standard template contract without understanding territorial holdbacks.', type: 'PROCESS' },
      { level: 3, question: 'Why did the music supervisor not catch the territorial omission during post?', answer: 'Music cue sheets were manually submitted on paper PDFs after production wrapped without digital validation.', type: 'STRUCTURAL' },
      { level: 4, question: 'Why are cue sheets still submitted as manual paper documents across major productions?', answer: 'Performing Rights Organizations (PROs), record labels, and film distributors use mutually incompatible legacy databases.', type: 'SYSTEMIC' },
      { level: 5, question: 'Why is there no interoperable global chain-of-title and sync rights registry?', answer: 'Rights fragmentation and siloed catalog ownership preserve intermediary broker margins at the expense of creators.', type: 'ROOT' }
    ],
    systemicRootCause: 'Rights Fragmentation & Intermediary Dependency',
    rootCauseCode: 'R039 / R066',
    leverageOpportunity: 'Automated Global Rights Graph & Multi-Territory Clearance Ledger.'
  }
];

// ── 16. Signature Convergence Visual Data (Section 8) ────────
export interface EERGConvergenceCase {
  title: string;
  subtitle: string;
  surfaceProblems: { role: string; complaint: string }[];
  convergedRootCauses: { code: string; name: string }[];
  underlyingBottleneck: string;
  singleOpportunity: string;
  payingStakeholders: string[];
}

export const EERG_SIGNATURE_CONVERGENCE: EERGConvergenceCase = {
  title: 'MANY PROBLEMS → FEWER ROOT CAUSES',
  subtitle: 'The Talent Discovery & Matching Convergence',
  surfaceProblems: [
    { role: 'Actor', complaint: 'Cannot find auditions or reach genuine decision-makers.' },
    { role: 'Producer', complaint: 'Cannot find reliable, verified talent within tight production dates.' },
    { role: 'Casting Director', complaint: 'Overwhelmed by thousands of unvetted DMs; casting takes too long.' },
    { role: 'Talent Agency', complaint: 'Cannot efficiently match roster capabilities to incoming production briefs.' },
    { role: 'Production House', complaint: 'Faces 4-week pre-production delays waiting for role confirmations.' }
  ],
  convergedRootCauses: [
    { code: 'R001', name: 'Information Fragmentation' },
    { code: 'R008', name: 'Trust Deficit & Quality Uncertainty' },
    { code: 'R006', name: 'Lack of Standardized Profiles' },
    { code: 'R017', name: 'Relationship Dependency' }
  ],
  underlyingBottleneck: 'B001 / B002: Talent Discovery & Matching Infrastructure',
  singleOpportunity: 'SYNQ.TALENT: Universal Verified Talent Intelligence & Casting Exchange Protocol',
  payingStakeholders: ['Production Houses', 'Casting Agencies', 'Talent Agencies', 'Film Studios', 'OTT Platforms']
};

// ── 17. The 5-Part Paying Customer Framework (Section 20) ─────
export interface EERGCustomerRoleBreakdown {
  domain: string;
  problemOwner: string; // Who experiences the problem?
  economicBeneficiary: string; // Who benefits from solving it?
  budgetOwner: string; // Who controls the budget?
  buyer: string; // Who purchases the solution?
  endUser: string; // Who actually uses it?
  commercialInsight: string;
}

export const EERG_CUSTOMER_ROLES: EERGCustomerRoleBreakdown[] = [
  {
    domain: 'Talent & Casting (SYNQ.TALENT)',
    problemOwner: 'Actor / Performer (Unemployed, undiscovered)',
    economicBeneficiary: 'Producer & Studio (Reduced downtime, optimal cast)',
    budgetOwner: 'Studio Head of Casting / Executive Producer',
    buyer: 'Casting Agency / Production Company',
    endUser: 'Casting Director, Talent Agent, Director',
    commercialInsight: 'Never monetize struggling actors directly. Sell enterprise efficiency to the casting agencies and production companies holding the hiring budgets.'
  },
  {
    domain: 'Physical Production (SYNQ.CASCADE)',
    problemOwner: 'Crew & Heads of Department (Overworked on set)',
    economicBeneficiary: 'Financier & Completion Bonder (Protected equity)',
    budgetOwner: 'Line Producer & Completion Bond Underwriter',
    buyer: 'Production Company / Studio Physical Production Dept',
    endUser: '1st AD, Production Manager, Line Producer',
    commercialInsight: 'The crew suffers the pain, but the completion bonder and equity financier absorb the multi-million dollar catastrophe risk. Monetize the risk mitigators.'
  },
  {
    domain: 'VFX & Post Finishing (SYNQ.FINISH)',
    problemOwner: 'VFX Facility & 3D Artists (Unpaid overtime, burnout)',
    economicBeneficiary: 'Distributor & Streamer (On-time, compliant release)',
    budgetOwner: 'Post-Production Supervisor & Studio VP of Post',
    buyer: 'Feature Film Production / VFX Studio',
    endUser: 'VFX Producer, Lead Colorist, Master QC Engineer',
    commercialInsight: 'Position the software as insurance for post supervisors against platform rejection fines, while helping VFX facilities bill verified change orders.'
  },
  {
    domain: 'Rights & Royalties (SYNQ.RIGHTS)',
    problemOwner: 'Songwriter / Estate (Uncollected black-box royalties)',
    economicBeneficiary: 'Catalog Owner & International Sales Agent (Unlocked deals)',
    budgetOwner: 'Acquisition Fund Managing Partner / Head of Legal Affairs',
    buyer: 'Private Equity Media Fund / International Distributor',
    endUser: 'Entertainment Attorney, Rights Clearance Manager',
    commercialInsight: 'Charge contingency recovery fees (12–15%) on uncollected international royalties where capital has already been written off as lost.'
  },
  {
    domain: 'Audience & Demand (SYNQ.RADAR)',
    problemOwner: 'Audience (Decision fatigue, boring derivative IP)',
    economicBeneficiary: 'Streaming Platform & Studio (Higher retention, hit rate)',
    budgetOwner: 'Head of Content Strategy & Greenlight Committee',
    buyer: 'OTT Platform / Studio Executive Committee',
    endUser: 'Development Executives, Data Analysts, Showrunners',
    commercialInsight: 'Sell institutional decision insurance. If an audit saves a single $30M greenlight mistake, a $250k annual subscription is an effortless 120x ROI.'
  }
];

// ── 18. EERG → DIGISYNQ Continuous Flywheel (Section 35) ──────
export const EERG_DIGISYNQ_FLYWHEEL = [
  {
    step: '01',
    phase: 'UNDERSTAND',
    engine: 'EERG',
    description: 'EERG continuously maps, clusters, and diagnoses the systemic root causes and choke points where the entertainment ecosystem freezes.',
    output: 'Root-Cause Centrality Rankings & Bottleneck Maps'
  },
  {
    step: '02',
    phase: 'CONNECT',
    engine: 'DIGISYNQ',
    description: 'DigiSynq identifies and connects the exact verified participants, facilities, and counter-parties required to bypass the bottleneck.',
    output: 'Verified Stakeholder Network & Multi-Party Covenants'
  },
  {
    step: '03',
    phase: 'ORCHESTRATE',
    engine: 'DIGISYNQ',
    description: 'DigiSynq deploys the 23 codified mechanisms to synchronize schedules, align incentives, and execute real-time interventions.',
    output: 'Active Case Triage & Physical Production Stabilization'
  },
  {
    step: '04',
    phase: 'MEASURE',
    engine: 'DIGISYNQ',
    description: 'Outcome verification engines record recovered schedule days, avoided delay penalties, and verified delivery compliance.',
    output: 'Quantified Economic Value Created ($ Saved)'
  },
  {
    step: '05',
    phase: 'LEARN',
    engine: 'EERG',
    description: 'Empirical outcome data feeds back into EERG, refining dependency weights, failure propagation depth models, and confidence scores.',
    output: 'Evolving Ecosystem Model with High-Confidence Evidence'
  },
  {
    step: '06',
    phase: 'MONETIZE',
    engine: 'DIGISYNQ COMMERCIAL',
    description: 'Discovered solution gaps are productized into high-margin recurring business engines, enterprise SaaS desks, and risk underwriting tools.',
    output: 'Scaleable Commercial Value Capture'
  }
];
