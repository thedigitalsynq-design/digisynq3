import { PlatformItem, ProductItem, AudienceSegment, UseCaseItem, PrincipleItem } from '../types';

export const PLATFORMS: PlatformItem[] = [
  {
    id: 'intelligence',
    name: 'Synq Intelligence',
    tagline: 'Turn cinema data into decisions.',
    description: 'Transform scattered box office metrics, digital signals, and industry trends into predictive intelligence without requiring proprietary research labs.',
    category: 'Intelligence',
    iconName: 'LineChart',
    ctaText: 'Explore Intelligence',
    products: ['SynqAnalytics', 'SynqIntel', 'SynqSignals', 'SynqPulse', 'SynqPredict', 'SynqTrends', 'SynqScore', 'SynqInsights'],
    highlightMetric: '14.2M+',
    metricsLabel: 'Ecosystem Signals Analyzed Daily'
  },
  {
    id: 'audience',
    name: 'Synq Audience',
    tagline: 'Build stronger relationships with cinema audiences.',
    description: 'Unify fragmented fan communities, ticket buyers, and cultural tastemakers into a direct, measurable relationship engine.',
    category: 'Audience',
    iconName: 'Users',
    ctaText: 'Explore Audience',
    products: ['SynqCircle', 'SynqFans', 'SynqAudience', 'SynqConnect', 'SynqEngage', 'SynqBuzz', 'SynqVoice'],
    highlightMetric: '360°',
    metricsLabel: 'Audience Sentiment & Engagement Graph'
  },
  {
    id: 'reputation',
    name: 'Synq Reputation',
    tagline: 'Understand perception. Respond intelligently.',
    description: 'Real-time perception monitoring, review aggregation, and intelligent response mechanisms across social, press, and audience forums.',
    category: 'Reputation',
    iconName: 'ShieldAlert',
    ctaText: 'Explore Reputation',
    products: ['ReviewSynq', 'SynqReview', 'SynqSentiment', 'SynqRepute', 'SynqRecover', 'SynqResponse', 'SynqTrust'],
    highlightMetric: 'Real-Time',
    metricsLabel: 'Word-of-Mouth Anomaly Detection'
  },
  {
    id: 'talent',
    name: 'Synq Talent',
    tagline: 'Connect cinema professionals with opportunity.',
    description: 'A verified professional network bridging above-the-line directors and writers with below-the-line technicians and emerging crew.',
    category: 'Talent',
    iconName: 'Sparkles',
    ctaText: 'Explore Talent',
    products: ['SynqTalent', 'SynqCrew', 'SynqCast', 'SynqSkills', 'SynqGigs', 'SynqJobs', 'SynqMentor'],
    highlightMetric: '100% Verified',
    metricsLabel: 'Verified Film Credits & Availability'
  },
  {
    id: 'production',
    name: 'Synq Production',
    tagline: 'Coordinate production without owning production infrastructure.',
    description: 'Digital production operating system unifying scheduling, vendor coordination, call sheets, and gear logistics on one coordinated plane.',
    category: 'Production',
    iconName: 'Clapperboard',
    ctaText: 'Explore Production',
    products: ['SynqProduce', 'SynqProject', 'SynqPlan', 'SynqCrewOps', 'SynqVendor', 'SynqLocation', 'SynqGear', 'SynqService'],
    highlightMetric: 'Zero CapEx',
    metricsLabel: 'Asset-Light Physical Coordination'
  },
  {
    id: 'distribution',
    name: 'Synq Distribution',
    tagline: 'Connect content with exhibition opportunity.',
    description: 'Direct matching between rights-holders, sales agents, independent exhibitors, and theatrical circuits to fill vacant screening windows.',
    category: 'Distribution',
    iconName: 'Film',
    ctaText: 'Explore Distribution',
    products: ['SynqScreen', 'SynqDistribute', 'SynqRelease', 'SynqBook', 'SynqShow', 'SynqExhibit', 'SynqReach'],
    highlightMetric: 'Dynamic Booking',
    metricsLabel: 'Program Optimization Across Theaters'
  },
  {
    id: 'marketing',
    name: 'Synq Marketing',
    tagline: 'Turn cinema promotion into a connected system.',
    description: 'Orchestrate theatrical campaigns, creator collaborations, press tours, and audience activations with closed-loop attribution.',
    category: 'Marketing',
    iconName: 'Megaphone',
    ctaText: 'Explore Marketing',
    products: ['SynqPromo', 'SynqCampaign', 'SynqInfluence', 'SynqCreator', 'SynqMedia', 'SynqLaunch', 'SynqBuzz'],
    highlightMetric: 'Closed-Loop',
    metricsLabel: 'Ad & Creator ROI to Ticket Sales'
  },
  {
    id: 'rights',
    name: 'Synq Content & Rights',
    tagline: 'Connect content with commercial opportunity.',
    description: 'Digital rights cataloging, territorial licensing windows, secondary market matching, and transparent deal infrastructure.',
    category: 'Content & Rights',
    iconName: 'FileCheck',
    ctaText: 'Explore Rights',
    products: ['SynqRights', 'SynqContent', 'SynqLicense', 'SynqDeal', 'SynqPartner', 'SynqIP'],
    highlightMetric: 'Smart Contract Ready',
    metricsLabel: 'Global Territorial Rights Ledger'
  },
  {
    id: 'capital',
    name: 'Synq Capital',
    tagline: 'Connect projects with financial opportunity.',
    description: 'Partner-led financial discovery and matching engine connecting vetted film packages with co-financiers, grants, brands, and sponsors.',
    category: 'Capital',
    iconName: 'Coins',
    ctaText: 'Explore Capital',
    products: ['SynqFund', 'SynqInvest', 'SynqFinance', 'SynqRevenue', 'SynqShare', 'SynqSponsor'],
    highlightMetric: 'Pure Matching',
    metricsLabel: 'Zero Balance-Sheet Risk'
  },
  {
    id: 'assets',
    name: 'Synq Assets',
    tagline: 'Unlock underutilized resources.',
    description: 'The asset-light peer marketplace for specialized cameras, soundstages, location permits, props, and mobile production vehicles.',
    category: 'Assets',
    iconName: 'Layers',
    ctaText: 'Explore Marketplace',
    products: ['SynqMarket', 'SynqAssets', 'SynqSpace', 'SynqGear', 'SynqStudio', 'SynqVehicle', 'SynqVendor'],
    highlightMetric: 'Owner Retained',
    metricsLabel: 'Full Custody Remains with Asset Owners'
  },
  {
    id: 'operations',
    name: 'Synq Operations',
    tagline: 'Turn fragmented work into connected workflows.',
    description: 'Enterprise operations suite coordinating cross-company approvals, contract execution, vendor disbursements, and milestone tracking.',
    category: 'Operations',
    iconName: 'Sliders',
    ctaText: 'Explore Operations',
    products: ['SynqOps', 'SynqFlow', 'SynqTask', 'SynqTrack', 'SynqAssist', 'SynqAutomate'],
    highlightMetric: 'Automated SLAs',
    metricsLabel: 'Cross-Entity Milestone Synchronization'
  },
  {
    id: 'network',
    name: 'Synq Network',
    tagline: 'The connectivity layer across the ecosystem.',
    description: 'The core protocol and relationship graph interlinking people, projects, assets, content, screens, and capital across borders.',
    category: 'Network',
    iconName: 'Network',
    ctaText: 'Explore Network',
    products: ['SynqFind', 'SynqMatch', 'SynqConnect', 'SynqNetwork', 'SynqOpportunity', 'SynqLink'],
    highlightMetric: 'Graph Engine',
    metricsLabel: 'High-Density Cinema Graph Nodes'
  }
];

export const PRODUCTS_CATALOG: ProductItem[] = [
  // Synq Intelligence
  {
    id: 'synqanalytics',
    name: 'SynqAnalytics',
    tagline: 'Unified theatrical and streaming performance analytics',
    category: 'Intelligence',
    targetUsers: ['Producers', 'Distributors', 'Exhibitors'],
    businessModel: 'SaaS',
    description: 'Harmonizes ticket admissions, digital transactions, and audience retention metrics into a single high-fidelity dashboard.',
    problemSolved: 'Disparate reporting across territorial distributors and exhibitors with weeks of lag time.',
    capabilities: ['Real-time box office ingest', 'Territorial comps engine', 'Decay rate modeling', 'Demographic breakdown'],
    workflowSteps: ['Ingest POS & ticketing data', 'Normalize across currencies', 'Generate predictive curves', 'Deliver executive briefs'],
    networkConnections: ['SynqPredict', 'SynqScreen', 'SynqIntel']
  },
  {
    id: 'synqintel',
    name: 'SynqIntel',
    tagline: 'Strategic cinema competitive intelligence',
    category: 'Intelligence',
    targetUsers: ['Producers', 'Investors', 'Distributors'],
    businessModel: 'Intelligence',
    description: 'Deep market intelligence profiling genre trends, production budget benchmarks, and competitive release calendar density.',
    problemSolved: 'Releasing films against unforeseen counter-programming or saturation.',
    capabilities: ['Release date conflict detection', 'Budget-to-box-office benchmarking', 'Genre appetite tracking'],
    workflowSteps: ['Scan global slate announcements', 'Evaluate historical performance cohorts', 'Identify release corridors'],
    networkConnections: ['SynqRelease', 'SynqTrends', 'SynqCapital']
  },
  {
    id: 'synqsignals',
    name: 'SynqSignals',
    tagline: 'Early warning and opportunity telemetry across the film lifecycle',
    category: 'Intelligence',
    targetUsers: ['Producers', 'Brands & Sponsors', 'Distributors'],
    businessModel: 'API',
    description: 'High-frequency signal detection capturing shifts in trailer virality, cast buzz, and regional cultural conversations.',
    problemSolved: 'Missing the pivotal moment to ramp up or reallocate marketing spend before opening weekend.',
    capabilities: ['Trailer velocity tracking', 'Regional interest spikes', 'Social organic inflection alerts'],
    workflowSteps: ['Ingest multi-platform social & search signals', 'Filter noise via AI models', 'Trigger tactical notifications'],
    networkConnections: ['SynqCampaign', 'SynqBuzz', 'SynqResponse']
  },
  {
    id: 'synqpulse',
    name: 'SynqPulse',
    tagline: 'Live sentiment and cultural momentum monitor',
    category: 'Intelligence',
    targetUsers: ['Producers', 'Distributors', 'Creators'],
    businessModel: 'SaaS',
    description: 'Real-time pulse of cultural traction, brand associations, and audience reaction during festivals and early screenings.',
    problemSolved: 'Relying on lagging survey cards when online chatter is setting the narrative.',
    capabilities: ['Live festival pulse tracking', 'Exit poll digital harmonization', 'Meme & discourse mapping'],
    workflowSteps: ['Capture post-screening reactions', 'Measure semantic velocity', 'Summarize key reception themes'],
    networkConnections: ['SynqSentiment', 'SynqFans']
  },
  {
    id: 'synqpredict',
    name: 'SynqPredict',
    tagline: 'Predictive theatrical attendance and lifetime value modeling',
    category: 'Intelligence',
    targetUsers: ['Distributors', 'Exhibitors', 'Investors'],
    businessModel: 'Intelligence',
    description: 'Machine learning algorithms trained on 40+ years of theatrical patterns, holiday calendars, weather, and audience momentum.',
    problemSolved: 'Inaccurate screen allocation and over- or under-printing DCP physical schedules.',
    capabilities: ['Opening weekend range forecasting', 'Screen holdover probability', 'Ancillary window revenue projection'],
    workflowSteps: ['Load project metadata & marketing spend', 'Run Monte Carlo simulations', 'Export screen booking recommendations'],
    networkConnections: ['SynqBook', 'SynqAnalytics', 'SynqScreen']
  },
  {
    id: 'synqtrends',
    name: 'SynqTrends',
    tagline: 'Macro & micro cinema behavioral shifts',
    category: 'Intelligence',
    targetUsers: ['Producers', 'Creators', 'Brands & Sponsors'],
    businessModel: 'Intelligence',
    description: 'Longitudinal analysis of consumer viewing habits, concession preferences, and theatrical premium format (IMAX/4DX) demand.',
    problemSolved: 'Investing in story concepts or formats that the market has moved past.',
    capabilities: ['Format preference shifts', 'Sub-genre heatmaps', 'Demographic demographic cohorts'],
    workflowSteps: ['Aggregate multi-year consumption datasets', 'Cluster emergent patterns', 'Publish actionable trend reports'],
    networkConnections: ['SynqIntel', 'SynqIP']
  },
  {
    id: 'synqscore',
    name: 'SynqScore',
    tagline: 'Holistic commercial and cultural readiness benchmark',
    category: 'Intelligence',
    targetUsers: ['Investors', 'Producers', 'Distributors'],
    businessModel: 'SaaS',
    description: 'A 0–100 standardized rating index evaluating script packaging, cast affinity, director track record, and commercial viability.',
    problemSolved: 'Subjective script reading without quantitative packaging validation.',
    capabilities: ['Talent packaging index', 'Genre market fit calculation', 'Risk-adjusted viability score'],
    workflowSteps: ['Input package elements', 'Benchmark against comparable packages', 'Output SynqScore index report'],
    networkConnections: ['SynqTalent', 'SynqFund', 'SynqDeal']
  },
  {
    id: 'synqinsights',
    name: 'SynqInsights',
    tagline: 'Executive briefings and custom strategic cinema queries',
    category: 'Intelligence',
    targetUsers: ['Producers', 'Distributors', 'Exhibitors'],
    businessModel: 'Enterprise',
    description: 'Tailored research memos, executive decision support, and natural language query answers for cinema leadership.',
    problemSolved: 'Waiting months for traditional management consulting studies.',
    capabilities: ['Natural language data queries', 'Board-ready exportable briefs', 'Scenario impact modeling'],
    workflowSteps: ['User submits strategic inquiry', 'Synthesize intelligence graph', 'Deliver concise decision memo'],
    networkConnections: ['SynqAnalytics', 'SynqPredict']
  },

  // Synq Audience
  {
    id: 'synqcircle',
    name: 'SynqCircle',
    tagline: 'Direct-to-fan cinema micro-communities',
    category: 'Audience',
    targetUsers: ['Producers', 'Creators', 'Audiences'],
    businessModel: 'SaaS',
    description: 'Private, brand-safe digital circles connecting filmmakers and actors with verified super-fans throughout production.',
    problemSolved: 'Losing contact with passionate fans once social media algorithms choke organic reach.',
    capabilities: ['Verified ticket-holder entry', 'Behind-the-scenes exclusives', 'Interactive AMA sessions'],
    workflowSteps: ['Create project circle', 'Verify fan admission ticket/NFT', 'Host exclusive director updates'],
    networkConnections: ['SynqFans', 'SynqVoice']
  },
  {
    id: 'synqfans',
    name: 'SynqFans',
    tagline: 'Fan relationship management for theatrical releases',
    category: 'Audience',
    targetUsers: ['Producers', 'Distributors', 'Creators'],
    businessModel: 'SaaS',
    description: 'Centralized database linking ticketing histories, merch purchases, and screening check-ins into first-party fan profiles.',
    problemSolved: 'Studios and filmmakers having zero first-party data on who actually sits in the theatre.',
    capabilities: ['First-party fan profiles', 'Lifetime fan value tracking', 'Cross-franchise affinity mapping'],
    workflowSteps: ['Capture opted-in fan engagements', 'Segment by genre and geography', 'Activate targeted outreach'],
    networkConnections: ['SynqCampaign', 'SynqCircle']
  },
  {
    id: 'synqaudience',
    name: 'SynqAudience',
    tagline: 'Audience segmentation and micro-targeting intelligence',
    category: 'Audience',
    targetUsers: ['Distributors', 'Brands & Sponsors'],
    businessModel: 'SaaS',
    description: 'Privacy-compliant cohort analysis categorizing cinema-goers by viewing frequency, genre passion, and viewing habits.',
    problemSolved: 'Blunt demographic targeting that wastes ad dollars on uninterested viewers.',
    capabilities: ['Cohort segmentation', 'Lookalike theatrical audiences', 'Geographic density analysis'],
    workflowSteps: ['Aggregate behavioral signals', 'Build high-intent cinema segments', 'Push segments to ad platforms'],
    networkConnections: ['SynqAnalytics', 'SynqPromo']
  },
  {
    id: 'synqconnect',
    name: 'SynqConnect',
    tagline: 'Connecting cinema communities across physical screenings',
    category: 'Audience',
    targetUsers: ['Exhibitors', 'Audiences', 'Creators'],
    businessModel: 'Marketplace',
    description: 'Coordinates specialized midnight screenings, fan-club takeovers, and niche film festivals in local theatres.',
    problemSolved: 'Independent theatres running empty auditoriums on Tuesday nights.',
    capabilities: ['Crowdfunded screening organizer', 'Local film club host dashboard', 'Seat reservation synchronization'],
    workflowSteps: ['Host proposes screening', 'Community pledges ticket threshold', 'Theatre books the auditorium'],
    networkConnections: ['SynqScreen', 'SynqBook']
  },
  {
    id: 'synqengage',
    name: 'SynqEngage',
    tagline: 'In-theatre and digital interactive engagement activations',
    category: 'Audience',
    targetUsers: ['Exhibitors', 'Brands & Sponsors', 'Producers'],
    businessModel: 'SaaS',
    description: 'Pre-show interactive games, synchronized mobile trivia, and live voting for audience choice screenings.',
    problemSolved: 'Boring pre-show rolling slides that audiences tune out on their phones.',
    capabilities: ['Pre-show mobile sync', 'Real-time auditorium trivia', 'Reward redemption at concessions'],
    workflowSteps: ['Audience scans on-screen QR', 'Engages in film-themed experience', 'Receives concession voucher'],
    networkConnections: ['SynqFans', 'SynqPromo']
  },
  {
    id: 'synqbuzz',
    name: 'SynqBuzz',
    tagline: 'Unified social conversation and organic momentum engine',
    category: 'Audience',
    targetUsers: ['Producers', 'Distributors', 'Creators'],
    businessModel: 'SaaS',
    description: 'A shared capability across audience and marketing intelligence that monitors, analyzes, and sparks organic conversations around releases.',
    problemSolved: 'Fragmented view of TikTok, X, Reddit, and Letterboxd cultural conversations.',
    capabilities: ['Cross-platform conversational aggregator', 'Influencer sound tracking', 'Viral clip origin detection'],
    workflowSteps: ['Index multi-network mentions', 'Measure velocity & sentiment polarity', 'Trigger creator amplification'],
    networkConnections: ['SynqSentiment', 'SynqCreator', 'SynqPromo']
  },
  {
    id: 'synqvoice',
    name: 'SynqVoice',
    tagline: 'Direct audience feedback and grassroots exit polling',
    category: 'Audience',
    targetUsers: ['Producers', 'Distributors'],
    businessModel: 'SaaS',
    description: 'Instant digital exit polling captured within 10 minutes of credits rolling, delivering honest audience reaction quotes and scores.',
    problemSolved: 'Slow and costly physical exit-polling clipboards at select major metro theaters.',
    capabilities: ['Geo-fenced mobile polling', 'Verified ticket verification', 'Audio & text sentiment capture'],
    workflowSteps: ['Prompt verified attendees post-screening', 'Incentivize with digital collectible', 'Synthesize qualitative insights'],
    networkConnections: ['SynqPulse', 'SynqReview']
  },

  // Synq Reputation
  {
    id: 'reviewsynq',
    name: 'ReviewSynq',
    tagline: 'Comprehensive critical and audience review aggregator',
    category: 'Reputation',
    targetUsers: ['Distributors', 'Producers', 'Audiences'],
    businessModel: 'SaaS',
    description: 'Combines verified critic reviews, creator video essays, and audience ratings into a clean, unbiased reception summary.',
    problemSolved: 'Review-bombing and distorted aggregated score systems that lack context.',
    capabilities: ['Verified viewer filtering', 'Review sentiment clustering', 'Key phrase extraction'],
    workflowSteps: ['Aggregate incoming reviews', 'Detect bot / review-bomb patterns', 'Generate contextual consensus score'],
    networkConnections: ['SynqSentiment', 'SynqTrust']
  },
  {
    id: 'synqreview',
    name: 'SynqReview',
    tagline: 'Verified screening reviews for festival and trade audiences',
    category: 'Reputation',
    targetUsers: ['Producers', 'Distributors', 'Talent & Crew'],
    businessModel: 'Enterprise',
    description: 'Secure, NDA-compliant trade screening review platform for buyers, festival programmers, and press delegates.',
    problemSolved: 'Uncontrolled leaks and unverified trade rumors that damage distribution bidding wars.',
    capabilities: ['Watermarked digital screener reviews', 'Embargo management', 'Buyer feedback consolidation'],
    workflowSteps: ['Distribute watermarked invite', 'Enforce embargo timers', 'Consolidate acquisition feedback'],
    networkConnections: ['SynqDeal', 'SynqContent']
  },
  {
    id: 'synqsentiment',
    name: 'SynqSentiment',
    tagline: 'Natural language sentiment diagnosis for cinema IP',
    category: 'Reputation',
    targetUsers: ['Producers', 'Distributors', 'Brands & Sponsors'],
    businessModel: 'SaaS',
    description: 'Dissects audience reviews and social discussions into emotional vectors: pacing, casting, ending satisfaction, and music reception.',
    problemSolved: 'Knowing that a film is underperforming without knowing which specific creative element caused the backlash.',
    capabilities: ['Emotional vector analysis', 'Character popularity tracking', 'Ending spoiler sentiment analysis'],
    workflowSteps: ['Parse text & transcript comments', 'Map to creative script elements', 'Output diagnostic report for PR teams'],
    networkConnections: ['SynqBuzz', 'SynqRecover']
  },
  {
    id: 'synqrepute',
    name: 'SynqRepute',
    tagline: 'Corporate and brand reputation intelligence for studios & producers',
    category: 'Reputation',
    targetUsers: ['Producers', 'Brands & Sponsors', 'Investors'],
    businessModel: 'Enterprise',
    description: 'Ongoing reputation tracking of production houses, executives, and talent to safeguard brand alignment and sponsor deals.',
    problemSolved: 'Attaching valuable brands or capital to compromised productions or controversial talent.',
    capabilities: ['Public record monitoring', 'Brand safety risk scoring', 'Historical controversy audit'],
    workflowSteps: ['Scan news, legal, and social registries', 'Calculate brand safety index', 'Alert stakeholders to emerging issues'],
    networkConnections: ['SynqTrust', 'SynqSponsor']
  },
  {
    id: 'synqrecover',
    name: 'SynqRecover',
    tagline: 'Crisis response workflows for box office and PR emergencies',
    category: 'Reputation',
    targetUsers: ['Distributors', 'Producers'],
    businessModel: 'SaaS',
    description: 'Automated playbook generator to pivot marketing messaging, address plot controversies, or highlight positive critical pull-quotes.',
    problemSolved: 'Panicked, uncoordinated marketing shifts after an unexpected negative reaction.',
    capabilities: ['Alternative trailer asset suggestions', 'Counter-narrative messaging templates', 'Crisis PR action tracking'],
    workflowSteps: ['Detect perception crisis', 'Analyze negative sentiment drivers', 'Generate targeted response strategies'],
    networkConnections: ['SynqResponse', 'SynqCampaign']
  },
  {
    id: 'synqresponse',
    name: 'SynqResponse',
    tagline: 'Intelligent multi-channel community response engine',
    category: 'Reputation',
    targetUsers: ['Producers', 'Distributors'],
    businessModel: 'SaaS',
    description: 'Empowers official social media teams to respond with authentic, approved filmmaker-approved commentary and creative clarifications.',
    problemSolved: 'Silent social handles while misinformation about a film spreads unchecked.',
    capabilities: ['Approved talking-point library', 'Multi-channel social publisher', 'Filmmaker quote verification'],
    workflowSteps: ['Ingest high-traction public questions', 'Match to vetted filmmaker responses', 'Publish authoritative answers'],
    networkConnections: ['SynqBuzz', 'SynqTrust']
  },
  {
    id: 'synqtrust',
    name: 'SynqTrust',
    tagline: 'The foundational trust and verification protocol for cinema',
    category: 'Reputation',
    targetUsers: ['Producers', 'Production Teams', 'Talent & Crew', 'Investors', 'Exhibitors'],
    businessModel: 'Enterprise',
    description: 'The core trust infrastructure: verifies film credits, union standing, equipment ownership, insurance certificates, and payment reliability.',
    problemSolved: 'Rampant fraud, inflated resumes, unverified equipment ownership, and defaulting counterparties in film.',
    capabilities: ['Credit verification against guild records', 'Certificate of Insurance validation', 'Counterparty escrow standing rating'],
    workflowSteps: ['User submits credential documentation', 'Cross-check against guild & trade databases', 'Issue verifiable trust badge'],
    networkConnections: ['SynqTalent', 'SynqMarket', 'SynqDeal']
  },

  // Synq Talent
  {
    id: 'synqtalent',
    name: 'SynqTalent',
    tagline: 'Verified representation and discovery for actors and key creatives',
    category: 'Talent',
    targetUsers: ['Talent & Crew', 'Producers'],
    businessModel: 'Marketplace',
    description: 'Direct casting discovery platform connecting verified actors, directors, and writers with open roles and packaging opportunities.',
    problemSolved: 'Gatekept agency rosters making talent discovery slow and non-transparent for indie producers.',
    capabilities: ['Audition reel hosting', 'Role matching algorithms', 'Availability scheduling'],
    workflowSteps: ['Talent publishes verified profile & clips', 'Casting director inputs character specs', 'AI matches candidates by tone & availability'],
    networkConnections: ['SynqCast', 'SynqTrust']
  },
  {
    id: 'synqcrew',
    name: 'SynqCrew',
    tagline: 'On-demand below-the-line crew coordination and dispatch',
    category: 'Talent',
    targetUsers: ['Production Teams', 'Talent & Crew'],
    businessModel: 'Marketplace',
    description: 'Rapid dispatch engine for lighting technicians, sound recordists, boom operators, makeup artists, and grips with verified credits.',
    problemSolved: 'Emergency crew dropouts 12 hours before a 6:00 AM call sheet.',
    capabilities: ['Emergency crew call broadcasts', 'Geographic proximity search', 'Daily rate transparency'],
    workflowSteps: ['Producer creates urgent crew call', 'Nearby verified crew receive push alert', 'Instant booking with contract generation'],
    networkConnections: ['SynqCrewOps', 'SynqGigs']
  },
  {
    id: 'synqcast',
    name: 'SynqCast',
    tagline: 'Digital casting room and table-read orchestration',
    category: 'Talent',
    targetUsers: ['Producers', 'Talent & Crew'],
    businessModel: 'SaaS',
    description: 'Cloud audition workspace for self-tapes, remote chemistry reads, director notes, and side distribution with DRM watermarking.',
    problemSolved: 'Messy Dropbox folders with unsecure scripts and fragmented email feedback from producers.',
    capabilities: ['Watermarked script side reader', 'Synchronized video auditions', 'Collaborative voting matrix'],
    workflowSteps: ['Upload sides with dynamic watermark', 'Review submitted self-tapes', 'Rate and invite to chemistry reads'],
    networkConnections: ['SynqTalent', 'SynqProduce']
  },
  {
    id: 'synqskills',
    name: 'SynqSkills',
    tagline: 'Technical craft and certified specialized skills verification',
    category: 'Talent',
    targetUsers: ['Talent & Crew', 'Production Teams'],
    businessModel: 'SaaS',
    description: 'Certification registry for specialized film skills: underwater camera operation, virtual production LED volume tech, drone pilot license, pyrotechnics.',
    problemSolved: 'Hiring personnel who lack mandatory safety or specialized technology certifications.',
    capabilities: ['Certified license verification', 'Equipment familiarity badges', 'Guild certification records'],
    workflowSteps: ['Crew member uploads safety certification', 'Issuing authority verification', 'Searchable skill index for line producers'],
    networkConnections: ['SynqTrust', 'SynqCrew']
  },
  {
    id: 'synqgigs',
    name: 'SynqGigs',
    tagline: 'Short-duration and pickup shoot crew marketplace',
    category: 'Talent',
    targetUsers: ['Talent & Crew', 'Production Teams'],
    businessModel: 'Marketplace',
    description: 'Specialized marketplace for 1-day to 3-day pickup shoots, second unit work, B-roll capture, and quick interview shoots.',
    problemSolved: 'Lengthy hiring processes for small single-day film requirements.',
    capabilities: ['Instant daily hire contracts', 'Milestone escrow payout', 'Day-rate standardizer'],
    workflowSteps: ['Post day-gig parameters', 'Receive bids from qualified local crew', 'One-click hire and settlement'],
    networkConnections: ['SynqJobs', 'SynqCrewOps']
  },
  {
    id: 'synqjobs',
    name: 'SynqJobs',
    tagline: 'Full-season and feature film production job board',
    category: 'Talent',
    targetUsers: ['Talent & Crew', 'Producers', 'Production Teams'],
    businessModel: 'Marketplace',
    description: 'The definitive verified employment board for long-form feature films, documentary slates, and series productions.',
    problemSolved: 'Word-of-mouth gatekeeping that excludes diverse and qualified talent.',
    capabilities: ['Tiered salary disclosure', 'Union & non-union filtering', 'Automated resume parsing against credits'],
    workflowSteps: ['Production posts long-term roles', 'Qualified applicants apply with verified credits', 'Line producer conducts interviews'],
    networkConnections: ['SynqTalent', 'SynqCrew']
  },
  {
    id: 'synqmentor',
    name: 'SynqMentor',
    tagline: 'Masterclasses and executive mentorship network for cinema craft',
    category: 'Talent',
    targetUsers: ['Talent & Crew', 'Creators'],
    businessModel: 'SaaS',
    description: 'Connects rising cinematographers, editors, and directors with seasoned Oscar and BAFTA-nominated mentors for script and reel consults.',
    problemSolved: 'Lack of structured professional guidance for mid-career filmmakers seeking their breakthrough.',
    capabilities: ['1-on-1 portfolio review', 'Rough-cut feedback rooms', 'Industry career roadmap planning'],
    workflowSteps: ['Filmmaker submits rough cut or script', 'Paired with experienced guild mentor', 'Conduct interactive video critique session'],
    networkConnections: ['SynqSkills', 'SynqTalent']
  },

  // Synq Production
  {
    id: 'synqproduce',
    name: 'SynqProduce',
    tagline: 'Centralized production operating system',
    category: 'Production',
    targetUsers: ['Producers', 'Production Teams'],
    businessModel: 'SaaS',
    description: 'Master operating environment integrating call sheets, stripboards, digital DOOD (Day Out of Days), and daily production logs.',
    problemSolved: 'Scattered spreadsheets, paper call sheets, and communication breakdowns across departments.',
    capabilities: ['Dynamic digital call sheets', 'Automated Day-Out-of-Days matrix', 'Live weather and sunset countdown'],
    workflowSteps: ['Import script breakdown', 'Generate stripboard schedule', 'Publish daily call sheets with delivery receipts'],
    networkConnections: ['SynqProject', 'SynqCrewOps']
  },
  {
    id: 'synqproject',
    name: 'SynqProject',
    tagline: 'Milestone, budget, and deliverable tracker for independent slates',
    category: 'Production',
    targetUsers: ['Producers', 'Investors'],
    businessModel: 'SaaS',
    description: 'Real-time project governance tool allowing line producers and executive financiers to monitor spend vs schedule in real-time.',
    problemSolved: 'Financiers discovering a production is 30% over budget weeks after the shoot wrapped.',
    capabilities: ['Budget variance warnings', 'Completion bond milestone checklists', 'Digital purchase order tracking'],
    workflowSteps: ['Set production budget thresholds', 'Track actual expenses vs estimates', 'Trigger alerts when milestones slip'],
    networkConnections: ['SynqProduce', 'SynqFund']
  },
  {
    id: 'synqplan',
    name: 'SynqPlan',
    tagline: 'Intelligent script breakdown and scheduling assistant',
    category: 'Production',
    targetUsers: ['Producers', 'Production Teams'],
    businessModel: 'SaaS',
    description: 'Parses Final Draft scripts into cast elements, stunt requirements, vehicle needs, and VFX shots in seconds.',
    problemSolved: 'ADs spending 3 tedious weeks manually highlighting physical script pages.',
    capabilities: ['Automated 8ths-of-a-page breakdown', 'Location grouping optimization', 'Cast availability conflict solver'],
    workflowSteps: ['Upload Final Draft script', 'Review extracted element tags', 'Generate initial production schedule'],
    networkConnections: ['SynqProduce', 'SynqLocation']
  },
  {
    id: 'synqcrewops',
    name: 'SynqCrewOps',
    tagline: 'Digital call sheets, travel, hotel, and per diem management',
    category: 'Production',
    targetUsers: ['Production Teams', 'Talent & Crew'],
    businessModel: 'SaaS',
    description: 'Handles the human logistics of film sets: bus manifests, hotel block assignments, digital meal vouchers, and per diem tracking.',
    problemSolved: 'Production coordinators drowning in receipts, lost physical hotel keys, and angry crew per diem queries.',
    capabilities: ['Push call sheet with GPS navigation', 'Digital per diem distribution', 'Hotel rooming list coordinator'],
    workflowSteps: ['Set crew roster & travel details', 'Dispatch digital per diem via secure rails', 'Confirm on-set check-in timestamp'],
    networkConnections: ['SynqCrew', 'SynqOps']
  },
  {
    id: 'synqvendor',
    name: 'SynqVendor',
    tagline: 'Directory and purchase order engine for film production vendors',
    category: 'Production',
    targetUsers: ['Production Teams', 'Producers'],
    businessModel: 'Enterprise',
    description: 'Curated and vetted directory of catering, honeywagons, generator rentals, security, and medical personnel for film sets.',
    problemSolved: 'Shooting in remote jurisdictions without knowing reliable local suppliers.',
    capabilities: ['Local vendor search with verified insurance', 'Standardized master service agreements', 'Consolidated monthly billing'],
    workflowSteps: ['Enter filming zip code', 'Filter certified film-ready vendors', 'Issue digital purchase order'],
    networkConnections: ['SynqAssets', 'SynqOps']
  },
  {
    id: 'synqlocation',
    name: 'SynqLocation',
    tagline: 'Film location discovery, scouting, and permit coordination',
    category: 'Production',
    targetUsers: ['Production Teams', 'Producers'],
    businessModel: 'Marketplace',
    description: 'Connects property owners with location managers; provides 360-degree virtual scouting and integrated municipal permit guidelines.',
    problemSolved: 'Extensive physical scouting trips and unexpected permit rejections on shooting days.',
    capabilities: ['360° virtual scout tours', 'Sun-path lighting simulation', 'Location agreement templates'],
    workflowSteps: ['Search locations by architectural style & power capacity', 'Book virtual or physical scout', 'Execute location agreement with escrow hold'],
    networkConnections: ['SynqSpace', 'SynqProduce']
  },
  {
    id: 'synqgear',
    name: 'SynqGear',
    tagline: 'Camera, lens, lighting, and grip package coordination',
    category: 'Production',
    targetUsers: ['Production Teams', 'Talent & Crew'],
    businessModel: 'Marketplace',
    description: 'Coordinates gear lists directly with rental houses and owner-operators; checks real-time availability and sub-rental matching.',
    problemSolved: 'Calling 12 rental houses to locate an anamorphic lens set during peak shooting season.',
    capabilities: ['Rental house inventory sync', 'Sub-rental matching network', 'Equipment sub-assembly verification'],
    workflowSteps: ['Upload DP gear wishlist', 'Cross-match available inventory across local houses', 'Lock package with single invoice'],
    networkConnections: ['SynqAssets', 'SynqProduce']
  },
  {
    id: 'synqservice',
    name: 'SynqService',
    tagline: 'Post-production, sound design, color grading, and VFX bidding',
    category: 'Production',
    targetUsers: ['Producers', 'Creators'],
    businessModel: 'Marketplace',
    description: 'Transparent marketplace connecting filmmakers with vetted colorists, sound designers, Foley artists, and VFX boutique houses.',
    problemSolved: 'Opaque post-production bidding with massive cost variations and hidden revision fees.',
    capabilities: ['Turnkey post-bidding specs', 'Milestone review approvals', 'Standardized turnover guidelines'],
    workflowSteps: ['Submit locked picture cut specs', 'Receive bids from certified post studios', 'Manage turnovers through delivery QC'],
    networkConnections: ['SynqProduce', 'SynqOps']
  },

  // Synq Distribution
  {
    id: 'synqscreen',
    name: 'SynqScreen',
    tagline: 'Dynamic screen capacity optimization for theatrical exhibition',
    category: 'Distribution',
    targetUsers: ['Exhibitors', 'Distributors'],
    businessModel: 'SaaS',
    description: 'Enables exhibitors to optimize auditorium scheduling based on hourly demand, dynamic ticket pricing, and event screenings.',
    problemSolved: 'Fixed schedules leaving 70% of seats empty on weekday afternoons and evenings.',
    capabilities: ['Demand-based hall sizing recommendations', 'Flash screening scheduler', 'Auditorium revenue yield optimizer'],
    workflowSteps: ['Ingest historical attendance curves', 'Detect undersold auditoriums', 'Program high-yield specialty screenings'],
    networkConnections: ['SynqBook', 'SynqPredict']
  },
  {
    id: 'synqdistribute',
    name: 'SynqDistribute',
    tagline: 'Territorial and platform theatrical distribution management',
    category: 'Distribution',
    targetUsers: ['Distributors', 'Producers'],
    businessModel: 'Enterprise',
    description: 'Multi-territory release management system tracking minimum guarantees (MGs), theatrical splits, and digital release windows.',
    problemSolved: 'Complex international licensing deals managed on paper spreadsheets with disputed cross-collateralization.',
    capabilities: ['Territorial rights availability map', 'Royalty waterfall calculation', 'Delivery asset tracker (DCP & KDM)'],
    workflowSteps: ['Define distribution window strategy', 'Negotiate terms through standard deal memos', 'Track box office settlements across borders'],
    networkConnections: ['SynqDeal', 'SynqRelease']
  },
  {
    id: 'synqrelease',
    name: 'SynqRelease',
    tagline: 'Release date intelligence and corridor optimization',
    category: 'Distribution',
    targetUsers: ['Distributors', 'Producers'],
    businessModel: 'Intelligence',
    description: 'Simulates the optimal release date window across 80+ international territories, factoring in competitive studio tentpoles and local holidays.',
    problemSolved: 'Releasing a mid-budget indie on the exact weekend a $200M Marvel sequel takes over 80% of screens.',
    capabilities: ['Global release calendar simulator', 'Audience overlap prediction', 'Screen cannibalization analysis'],
    workflowSteps: ['Select target release quarter', 'Simulate competing film releases', 'Identify lowest friction release corridor'],
    networkConnections: ['SynqIntel', 'SynqScreen']
  },
  {
    id: 'synqbook',
    name: 'SynqBook',
    tagline: 'Digital theatrical film booking and screen negotiation portal',
    category: 'Distribution',
    targetUsers: ['Exhibitors', 'Distributors'],
    businessModel: 'Marketplace',
    description: 'Direct communication and contract booking platform between film buyers and independent theatrical circuits.',
    problemSolved: 'Endless phone tag and outdated faxed/emailed booking confirmations.',
    capabilities: ['Digital booking confirmations', 'Holdover threshold tracking', 'Direct DCP key authorization'],
    workflowSteps: ['Distributor offers film package', 'Exhibitor reviews trailer and terms', 'Confirm screen booking and lock terms'],
    networkConnections: ['SynqScreen', 'SynqShow']
  },
  {
    id: 'synqshow',
    name: 'SynqShow',
    tagline: 'Event cinema, festival, and premiere coordination suite',
    category: 'Distribution',
    targetUsers: ['Distributors', 'Producers', 'Exhibitors'],
    businessModel: 'SaaS',
    description: 'Coordinates one-night-only special screenings, live Q&As streamed to 500 screens simultaneously, and red carpet premieres.',
    problemSolved: 'Logistical chaos when trying to synchronize multi-theatre live talent broadcasts.',
    capabilities: ['Simultaneous multi-screen satellite/IP feed coordinator', 'VIP guest list manager', 'Red carpet credentialing'],
    workflowSteps: ['Schedule live stream broadcast', 'Distribute test feed to participating theaters', 'Execute synchronized live theatrical event'],
    networkConnections: ['SynqEngage', 'SynqReach']
  },
  {
    id: 'synqexhibit',
    name: 'SynqExhibit',
    tagline: 'Exhibitor fleet management, concession insights, and tech standards',
    category: 'Distribution',
    targetUsers: ['Exhibitors'],
    businessModel: 'Enterprise',
    description: 'Helps independent theatre owners manage projection lamp life, laser upgrades, sound calibration certificates, and concession inventory.',
    problemSolved: 'Theatrical projection failures during weekend shows and poor concession margin visibility.',
    capabilities: ['SMPTE / DCI compliance tracking', 'Projection bulb & laser lifecycle alerts', 'Concession menu profitability analytics'],
    workflowSteps: ['Register auditorium hardware specs', 'Monitor diagnostic logs', 'Schedule preventative maintenance'],
    networkConnections: ['SynqScreen', 'SynqTrust']
  },
  {
    id: 'synqreach',
    name: 'SynqReach',
    tagline: 'Micro-cinemas, pop-up theatres, and alternative exhibition network',
    category: 'Distribution',
    targetUsers: ['Distributors', 'Creators', 'Audiences'],
    businessModel: 'Marketplace',
    description: 'Coordinates non-theatrical and educational screenings across universities, rooftop venues, cultural centers, and film societies.',
    problemSolved: 'Untapped theatrical monetization in college towns and cities without commercial art-house theatres.',
    capabilities: ['Alternative venue certification', 'Non-theatrical licensing clearance', 'Portable screening kit delivery'],
    workflowSteps: ['Host requests campus or rooftop screening', 'License granted with automated viewer caps', 'Provide secure encrypted digital playback'],
    networkConnections: ['SynqDistribute', 'SynqConnect']
  },

  // Synq Marketing
  {
    id: 'synqpromo',
    name: 'SynqPromo',
    tagline: 'Precision theatrical marketing campaign builder',
    category: 'Marketing',
    targetUsers: ['Distributors', 'Producers'],
    businessModel: 'SaaS',
    description: 'Centralizes theatrical digital ad spend, programmatic out-of-home (OOH) billboards, and geo-fenced mobile trailers.',
    problemSolved: 'Fragmented agencies spending marketing dollars without direct attribution to local box office ticketing.',
    capabilities: ['Local cinema radius ad buying', 'Automated trailer variation generator', 'Real-time CAC to ticket sale attribution'],
    workflowSteps: ['Set theatrical marketing budget', 'Deploy geo-targeted trailer ads near booked cinemas', 'Track box office lift by market'],
    networkConnections: ['SynqAudience', 'SynqCampaign']
  },
  {
    id: 'synqcampaign',
    name: 'SynqCampaign',
    tagline: 'Multi-phased release campaign orchestration suite',
    category: 'Marketing',
    targetUsers: ['Distributors', 'Producers'],
    businessModel: 'SaaS',
    description: 'Orchestrates the 12-week release countdown: teaser drop, trailer release, junket dates, advance ticket on-sale, and review embargo.',
    problemSolved: 'Misaligned marketing departments dropping key assets out of sequence and blunting campaign impact.',
    capabilities: ['Milestone marketing timeline', 'Asset distribution portal for press', 'Embargo countdown clock'],
    workflowSteps: ['Build campaign timeline', 'Assign assets to press & media channels', 'Monitor coordinated launch impact'],
    networkConnections: ['SynqPromo', 'SynqMedia']
  },
  {
    id: 'synqinfluence',
    name: 'SynqInfluence',
    tagline: 'Film tastemaker and micro-influencer matching network',
    category: 'Marketing',
    targetUsers: ['Distributors', 'Creators', 'Brands & Sponsors'],
    businessModel: 'Marketplace',
    description: 'Connects film distributors with verified film critics, TikTok creators, and cinephile podcasters for early screening access and coverage.',
    problemSolved: 'Wasting influencer budgets on creators whose followers don’t actually buy cinema tickets.',
    capabilities: ['Film affinity scoring for influencers', 'Screener distribution tracking', 'Earned media value (EMV) calculator'],
    workflowSteps: ['Filter creators by film genre affinity', 'Send watermarked screening invitations', 'Measure review output and social engagement'],
    networkConnections: ['SynqCreator', 'SynqBuzz']
  },
  {
    id: 'synqcreator',
    name: 'SynqCreator',
    tagline: 'Creator collaboration and press junket management',
    category: 'Marketing',
    targetUsers: ['Creators', 'Distributors'],
    businessModel: 'SaaS',
    description: 'Streamlines press junket scheduling, 1-on-1 talent interviews, social media soundbite creation, and content sign-offs.',
    problemSolved: 'Chaos in hotel junket suites with paper clipboards, delayed talent schedules, and lost interview files.',
    capabilities: ['Digital junket scheduling', 'Instant high-res audio/video turnover', 'Talent interview approval portal'],
    workflowSteps: ['Schedule 5-minute creator interview slots', 'Capture audio/video directly to cloud', 'Deliver approved clips to creator instantly'],
    networkConnections: ['SynqInfluence', 'SynqMedia']
  },
  {
    id: 'synqmedia',
    name: 'SynqMedia',
    tagline: 'Digital press kit and high-res media distribution asset hub',
    category: 'Marketing',
    targetUsers: ['Distributors', 'Producers'],
    businessModel: 'SaaS',
    description: 'Secure, high-bandwidth repository for trailers, production stills, key art posters, and production notes for global media outlets.',
    problemSolved: 'Sending expired WeTransfer links and low-res photos to international trade publications.',
    capabilities: ['Lossless 4K ProRes trailer downloads', 'Dynamic layered key-art PSD distribution', 'Usage rights and expiry controls'],
    workflowSteps: ['Upload official campaign assets', 'Issue press download keys with expiring permissions', 'Track media downloads globally'],
    networkConnections: ['SynqCampaign', 'SynqRights']
  },
  {
    id: 'synqlaunch',
    name: 'SynqLaunch',
    tagline: 'Opening weekend activation, midnight previews, and stunt coordinator',
    category: 'Marketing',
    targetUsers: ['Distributors', 'Exhibitors'],
    businessModel: 'Marketplace',
    description: 'Coordinates street teams, experiential pop-ups, cosplay contests, and red-carpet photo booths at marquee theatres.',
    problemSolved: 'Static theatre lobbies that fail to generate viral organic social sharing on opening night.',
    capabilities: ['Experiential vendor roster', 'Photo-booth social amplification loop', 'Giveaway & merch fulfillment'],
    workflowSteps: ['Select flagship exhibition venues', 'Book experiential setup packages', 'Aggregate opening night fan content'],
    networkConnections: ['SynqPromo', 'SynqEngage']
  },

  // Synq Content & Rights
  {
    id: 'synqrights',
    name: 'SynqRights',
    tagline: 'Global intellectual property and territorial rights catalog',
    category: 'Content & Rights',
    targetUsers: ['Producers', 'Distributors', 'Investors'],
    businessModel: 'Enterprise',
    description: 'Unambiguous digital ledger of theatrical, VOD, airline, broadcast, and remake rights across 195 sovereign territories.',
    problemSolved: 'Overlapping sales agents accidentally selling the same territory twice, leading to costly arbitration.',
    capabilities: ['Territory-by-territory rights ledger', 'Window expiration alerts', 'Holdback conflict verifier'],
    workflowSteps: ['Register chain of title & contracts', 'Visualize available territories on interactive globe', 'Flag impending window expirations'],
    networkConnections: ['SynqLicense', 'SynqDeal']
  },
  {
    id: 'synqcontent',
    name: 'SynqContent',
    tagline: 'B2B content marketplace for finished films, docs, and library titles',
    category: 'Content & Rights',
    targetUsers: ['Producers', 'Distributors'],
    businessModel: 'Marketplace',
    description: 'Curated digital film market where sales agents and indie producers showcase finished screeners directly to global acquisitions executives.',
    problemSolved: 'Indie films getting lost after failing to secure a screening slot at Cannes or AFM.',
    capabilities: ['Secure 4K streaming screeners with DRM', 'Buyer watch analytics & drop-off curves', 'Direct acquisition offer submission'],
    workflowSteps: ['Upload finished film screener', 'Set territorial availability & price guidelines', 'Buyers screen film and submit offers'],
    networkConnections: ['SynqRights', 'SynqDeal']
  },
  {
    id: 'synqlicense',
    name: 'SynqLicense',
    tagline: 'Standardized licensing contracts and territorial windowing engine',
    category: 'Content & Rights',
    targetUsers: ['Distributors', 'Producers'],
    businessModel: 'SaaS',
    description: 'Automates international film licensing agreements using standardized IFTA (Independent Film & Television Alliance) frameworks.',
    problemSolved: 'Spending $40,000 in legal fees to draft standard distribution agreements for smaller territories.',
    capabilities: ['Pre-approved IFTA contract templates', 'Currency and tax withholding calculators', 'Digital signature execution'],
    workflowSteps: ['Select licensing terms & territory', 'Generate compliant standard agreement', 'Execute digital signatures and escrow deposit'],
    networkConnections: ['SynqRights', 'SynqDeal']
  },
  {
    id: 'synqdeal',
    name: 'SynqDeal',
    tagline: 'Secure transaction and escrow room for cinema licensing deals',
    category: 'Content & Rights',
    targetUsers: ['Distributors', 'Producers', 'Investors'],
    businessModel: 'Marketplace',
    description: 'Protected deal room for negotiations, LOIs (Letters of Intent), minimum guarantee escrow deposits, and delivery material sign-offs.',
    problemSolved: 'Producers shipping master digital files before receiving guaranteed wire payments.',
    capabilities: ['Milestone escrow fund holding', 'Delivery material acceptance checklist', 'Automated royalty waterfall distribution'],
    workflowSteps: ['Buyer funds escrow with minimum guarantee', 'Seller uploads master delivery materials', 'QC sign-off triggers instant fund release'],
    networkConnections: ['SynqLicense', 'SynqTrust']
  },
  {
    id: 'synqpartner',
    name: 'SynqPartner',
    tagline: 'International co-production and treaty packaging coordinator',
    category: 'Content & Rights',
    targetUsers: ['Producers', 'Investors'],
    businessModel: 'SaaS',
    description: 'Matches producers across bilateral film treaty countries (e.g. UK-Canada, France-Germany) to qualify for state tax rebates and subsidies.',
    problemSolved: 'Navigating Byzantine international treaty regulations without expert local co-production partners.',
    capabilities: ['Bilateral co-production treaty database', 'Points-test eligibility calculator', 'Vetted local service producer matching'],
    workflowSteps: ['Input script locations & key talent nationalities', 'Calculate treaty points eligibility', 'Match with certified overseas co-producer'],
    networkConnections: ['SynqFund', 'SynqProduce']
  },
  {
    id: 'synqip',
    name: 'SynqIP',
    tagline: 'Book adaptations, remake rights, and cinema IP registry',
    category: 'Content & Rights',
    targetUsers: ['Producers', 'Creators', 'Investors'],
    businessModel: 'Marketplace',
    description: 'Marketplace for published novels, video game adaptations, theatrical remake rights, and verified public domain IP packages.',
    problemSolved: 'Producers struggling to find commercially proven source material with clean chain of title.',
    capabilities: ['Option agreement management', 'Chain-of-title verification audit', 'Underlying rights holder contact directory'],
    workflowSteps: ['Browse available book/comic options', 'Review verified chain of title', 'Submit option bid directly to author’s agent'],
    networkConnections: ['SynqRights', 'SynqDeal']
  },

  // Synq Capital
  {
    id: 'synqfund',
    name: 'SynqFund',
    tagline: 'Vetted film project packaging and co-financing discovery',
    category: 'Capital',
    targetUsers: ['Producers', 'Investors'],
    businessModel: 'Marketplace',
    description: 'Curated packaging portal connecting fully packaged, bonded film slates with certified private equity and family office co-financiers.',
    problemSolved: 'Indie filmmakers pitching unprepared packages to investors who lack cinema domain context.',
    capabilities: ['Package audit checklist (script, cast, budget, bond)', 'Data room creation', 'Investor matching by genre appetite'],
    workflowSteps: ['Producer completes package verification', 'System generates standardized financial deck', 'Matched with private capital partners'],
    networkConnections: ['SynqScore', 'SynqInvest']
  },
  {
    id: 'synqinvest',
    name: 'SynqInvest',
    tagline: 'Due diligence and portfolio monitoring for film investors',
    category: 'Capital',
    targetUsers: ['Investors'],
    businessModel: 'Enterprise',
    description: 'Provides family offices, sovereign funds, and high-net-worth investors with objective financial modeling and risk assessment.',
    problemSolved: 'Cinema investments treated as opaque "black boxes" with no standardized financial reporting.',
    capabilities: ['Comparable historical waterfall returns', 'Pre-sale value discounting calculator', 'Production status tracking portal'],
    workflowSteps: ['Investor evaluates vetted project slate', 'Run sensitivity analysis on box office scenarios', 'Monitor quarterly cash flows post-release'],
    networkConnections: ['SynqFund', 'SynqFinance']
  },
  {
    id: 'synqfinance',
    name: 'SynqFinance',
    tagline: 'Tax credit lending, pre-sale discounting, and gap finance coordination',
    category: 'Capital',
    targetUsers: ['Producers', 'Investors'],
    businessModel: 'Marketplace',
    description: 'Coordinates specialized cinema financial partners who lend against state film tax incentives and international pre-sales.',
    problemSolved: 'Months of delays waiting for government tax credit certifications before starting principal photography.',
    capabilities: ['State & global tax incentive calculator', 'Pre-sale paper discount matching', 'Completion guarantor coordination'],
    workflowSteps: ['Upload production spend schedule by jurisdiction', 'Calculate anticipated tax credit yield', 'Connect with specialized finance lenders'],
    networkConnections: ['SynqFund', 'SynqProject']
  },
  {
    id: 'synqrevenue',
    name: 'SynqRevenue',
    tagline: 'Transparent waterfall accounting and CAM (Collection Account Management) coordination',
    category: 'Capital',
    targetUsers: ['Producers', 'Investors', 'Talent & Crew'],
    businessModel: 'Enterprise',
    description: 'Integrates with licensed Collection Account Managers (CAMs) to ensure transparent, automated distribution of net profits and backend points.',
    problemSolved: 'Decades of "Hollywood accounting" disputes where profit participants never see financial statements.',
    capabilities: ['Algorithmic recoupment waterfall tracker', 'Automated stakeholder disbursement reports', 'Audit-trail export for guild residuals'],
    workflowSteps: ['Input legal recoupment priorities', 'Ingest box office and licensing revenues', 'Generate clear stakeholder payout schedules'],
    networkConnections: ['SynqInvest', 'SynqDeal']
  },
  {
    id: 'synqshare',
    name: 'SynqShare',
    tagline: 'Co-investment syndicate and shared slate risk coordination',
    category: 'Capital',
    targetUsers: ['Investors', 'Producers'],
    businessModel: 'Marketplace',
    description: 'Allows multiple institutional co-investors to pool capital across a 5-film slate to diversify single-title theatrical risk.',
    problemSolved: 'All-or-nothing binary risk of investing in a single standalone indie feature.',
    capabilities: ['Multi-project slate pooling structure', 'Syndicate participation agreements', 'Consolidated blended return reporting'],
    workflowSteps: ['Lead producer defines 5-film slate', 'Co-investors commit fractional allocations', 'Distribute pooled revenues across slate lifecycle'],
    networkConnections: ['SynqFund', 'SynqRevenue']
  },
  {
    id: 'synqsponsor',
    name: 'SynqSponsor',
    tagline: 'Cinema brand integrations, product placements, and sponsorships',
    category: 'Capital',
    targetUsers: ['Brands & Sponsors', 'Producers'],
    businessModel: 'Marketplace',
    description: 'Intelligent script matching engine connecting consumer brands with scripted prop placements, wardrobe, and vehicle integrations.',
    problemSolved: 'Shoe-horned product placements that look unnatural and miss the brand’s target demographic.',
    capabilities: ['Script semantic scene scanning for brand moments', 'Audience demographic alignment', 'Post-release screen-time measurement'],
    workflowSteps: ['Scan script for organic placement scenes', 'Match with interested brand categories', 'Execute brand integration agreement with verified screen-time'],
    networkConnections: ['SynqProduce', 'SynqCampaign']
  },

  // Synq Assets
  {
    id: 'synqmarket',
    name: 'SynqMarket',
    tagline: 'The primary asset-light cinema equipment and space marketplace',
    category: 'Assets',
    targetUsers: ['Production Teams', 'Producers', 'Talent & Crew'],
    businessModel: 'Marketplace',
    description: 'Peer-to-peer and rental house marketplace for specialized cinema hardware, soundstages, post suites, and mobile trucks.',
    problemSolved: 'Millions of dollars in high-end cinema equipment sitting idle on shelves between productions.',
    capabilities: ['Verified equipment listings', 'Damage & loss insurance integration', 'Automated sub-rental check-out'],
    workflowSteps: ['Owner lists idle cinema gear', 'Production browses and reserves dates', 'Escrow payment and insured pickup'],
    networkConnections: ['SynqAssets', 'SynqGear']
  },
  {
    id: 'synqassets',
    name: 'SynqAssets',
    tagline: 'Enterprise asset management and utilization tracking for rental houses',
    category: 'Assets',
    targetUsers: ['Production Teams', 'Exhibitors'],
    businessModel: 'SaaS',
    description: 'Software for camera houses and facilities to track barcode asset location, calibration cycles, firmware, and utilization metrics.',
    problemSolved: 'Losing track of high-value optical components across concurrent shoots.',
    capabilities: ['RFID & QR asset tagging', 'Maintenance and optical bench logs', 'Utilization yield dashboard'],
    workflowSteps: ['Tag hardware inventory', 'Monitor real-time rental deployment', 'Identify low-utilization assets to discount or list'],
    networkConnections: ['SynqMarket', 'SynqGear']
  },
  {
    id: 'synqspace',
    name: 'SynqSpace',
    tagline: 'Soundstages, mill spaces, and production office booking network',
    category: 'Assets',
    targetUsers: ['Production Teams', 'Producers'],
    businessModel: 'Marketplace',
    description: 'Connects producers with soundstages, converted warehouses, construction mills, and production office suites by the week or month.',
    problemSolved: 'Rigid multi-year soundstage leases that price out independent features and commercials.',
    capabilities: ['Clear height and acoustic rating filters', 'Power amperage specifications', 'Flexible weekly lease terms'],
    workflowSteps: ['Search stage by square footage and grid height', 'Book inspection walk-through', 'Execute short-term facility license'],
    networkConnections: ['SynqLocation', 'SynqStudio']
  },
  {
    id: 'synqstudio',
    name: 'SynqStudio',
    tagline: 'Virtual production LED volumes and specialized green screen stages',
    category: 'Assets',
    targetUsers: ['Production Teams', 'Producers', 'Creators'],
    businessModel: 'Marketplace',
    description: 'Marketplace dedicated to high-end virtual production volumes, motion capture stages, and camera tracking rigs.',
    problemSolved: 'Finding certified Unreal Engine LED volume stages with proven technical crews.',
    capabilities: ['LED pitch and curve specifications', 'Unreal Engine operator availability', 'Test hour booking blocks'],
    workflowSteps: ['Filter LED volume by pixel pitch & camera tracking', 'Book technical tech-scout block', 'Lock shoot days with engineering support'],
    networkConnections: ['SynqSpace', 'SynqSkills']
  },
  {
    id: 'synqvehicle',
    name: 'SynqVehicle',
    tagline: 'Specialized film production fleet, picture cars, and Honeywagons',
    category: 'Assets',
    targetUsers: ['Production Teams'],
    businessModel: 'Marketplace',
    description: 'Fleet coordination for camera crane trucks, cast trailers, hair & makeup trailers, generator trucks, and vintage picture vehicles.',
    problemSolved: 'Scrambling to find period-accurate picture cars or DOT-certified mobile dressing rooms.',
    capabilities: ['Period car registry with owner-drivers', 'Cast trailer floor plan viewer', 'DOT commercial insurance verification'],
    workflowSteps: ['Browse vehicles by year, make, and cinematic utility', 'Confirm transport schedule to base camp', 'Dispatch with experienced driver'],
    networkConnections: ['SynqVendor', 'SynqAssets']
  },

  // Synq Operations
  {
    id: 'synqops',
    name: 'SynqOps',
    tagline: 'Cross-entity cinema operations and workflow management',
    category: 'Operations',
    targetUsers: ['Producers', 'Production Teams', 'Distributors'],
    businessModel: 'Enterprise',
    description: 'Connects disparate companies—studios, distributors, vendors, and line producers—into unified, permissioned operational pipelines.',
    problemSolved: 'Bottlenecks in multi-company approvals where decisions stall in email inboxes for weeks.',
    capabilities: ['Cross-organization permission matrix', 'Automated approval chains', 'Executive milestone alerts'],
    workflowSteps: ['Establish partner project boundary', 'Assign cross-company approval roles', 'Track operational speed and SLAs'],
    networkConnections: ['SynqFlow', 'SynqTask']
  },
  {
    id: 'synqflow',
    name: 'SynqFlow',
    tagline: 'Intelligent process automation for film administration',
    category: 'Operations',
    targetUsers: ['Production Teams', 'Producers'],
    businessModel: 'SaaS',
    description: 'No-code visual workflow builder automating mundane cinema administrative tasks like call sheet distribution, timesheet approvals, and NDA dispatch.',
    problemSolved: 'Production assistants spending 4 hours a day manually emailing repetitive documents.',
    capabilities: ['Trigger-based document signing', 'Automated crew check-in reminders', 'Custom cinema logic recipes'],
    workflowSteps: ['Build visual trigger (e.g. Call Sheet published)', 'Define downstream actions (Send SMS, alert caterer)', 'Automate repetitive set logistics'],
    networkConnections: ['SynqOps', 'SynqAutomate']
  },
  {
    id: 'synqtask',
    name: 'SynqTask',
    tagline: 'Set-ready task management for department heads',
    category: 'Operations',
    targetUsers: ['Production Teams', 'Talent & Crew'],
    businessModel: 'SaaS',
    description: 'Mobile-first task delegation designed for the noise and chaos of a live set, with offline support and priority radio-call modes.',
    problemSolved: 'Desk-bound project management software like Jira or Asana that doesn’t fit physical film sets.',
    capabilities: ['Offline-first sync for remote sets', 'Voice task dictation', 'Departmental handover checklists'],
    workflowSteps: ['1st AD creates urgent set prep task', 'Department head receives tactile push notification', 'Mark complete with photo confirmation'],
    networkConnections: ['SynqProduce', 'SynqTrack']
  },
  {
    id: 'synqtrack',
    name: 'SynqTrack',
    tagline: 'Physical asset, hard drive, and delivery shipment telemetry',
    category: 'Operations',
    targetUsers: ['Production Teams', 'Distributors'],
    businessModel: 'SaaS',
    description: 'Tracks original camera raw (OCF) shuttle hard drives, camera packages, and physical costumes with GPS and tamper-evident chain of custody.',
    problemSolved: 'Lost production shuttle drives containing million-dollar raw footage during transit to the lab.',
    capabilities: ['GPS drive enclosure tracking', 'Chain of custody digital sign-off', 'Lab ingestion confirmation receipt'],
    workflowSteps: ['DIT loads camera card to encrypted shuttle drive', 'Courier scans digital custody handover', 'Lab confirms checksum match upon ingest'],
    networkConnections: ['SynqOps', 'SynqMedia']
  },
  {
    id: 'synqassist',
    name: 'SynqAssist',
    tagline: 'Contextual on-set AI assistant for film protocols and rules',
    category: 'Operations',
    targetUsers: ['Production Teams', 'Producers'],
    businessModel: 'SaaS',
    description: 'Instant answers to union rulebooks (SAG-AFTRA, IATSE, DGA), turnaround times, meal penalties, and minor work hour regulations.',
    problemSolved: 'Accidental union violations that result in crippling post-shoot penalty fines.',
    capabilities: ['Guild agreement semantic query', 'Meal penalty timer alerts', 'Minor child-actor hour limits guardrails'],
    workflowSteps: ['Ask rule scenario in plain English', 'Receive exact contract clause reference', 'Implement compliant set scheduling'],
    networkConnections: ['SynqProduce', 'SynqAutomate']
  },
  {
    id: 'synqautomate',
    name: 'SynqAutomate',
    tagline: 'Robotic process automation for film accounting and distribution reporting',
    category: 'Operations',
    targetUsers: ['Distributors', 'Production Teams'],
    businessModel: 'Enterprise',
    description: 'RPA bots that extract data from PDF invoices, scrape theatrical box office portals, and reconcile receipt photos automatically.',
    problemSolved: 'Manual data entry errors in film accounting that delay tax credit audits by six months.',
    capabilities: ['OCR invoice and receipt extraction', 'Bank statement automated reconciliation', 'Automated PDF report distribution'],
    workflowSteps: ['Bot monitors accounting inbox', 'Extracts and codes line items to film budget chart of accounts', 'Presents clean reconciliation to controller'],
    networkConnections: ['SynqFlow', 'SynqOps']
  },

  // Synq Network
  {
    id: 'synqfind',
    name: 'SynqFind',
    tagline: 'Universal semantic search across people, assets, projects, and rights',
    category: 'Network',
    targetUsers: ['Producers', 'Talent & Crew', 'Distributors', 'Exhibitors', 'Creators', 'Investors'],
    businessModel: 'API',
    description: 'The search engine for cinema: search by visual tone, camera package availability, credit history, or territorial licensing status.',
    problemSolved: 'Scattered databases and siloed address books across the film industry.',
    capabilities: ['Multi-modal semantic search', 'Cross-catalog discovery', 'Faceted availability filtering'],
    workflowSteps: ['Enter natural query ("Anamorphic lenses and DP in London for October")', 'Search entire interconnected ecosystem', 'Directly connect with matched nodes'],
    networkConnections: ['SynqMatch', 'SynqNetwork']
  },
  {
    id: 'synqmatch',
    name: 'SynqMatch',
    tagline: 'Intelligent bipartite matching for supply and demand in film',
    category: 'Network',
    targetUsers: ['Producers', 'Talent & Crew', 'Distributors', 'Exhibitors'],
    businessModel: 'API',
    description: 'Graph-based matching engine pairing underutilized screen capacity with independent films, or open crew slots with available craftspeople.',
    problemSolved: 'Sub-optimal manually negotiated matches that leave money on the table for both sides.',
    capabilities: ['Multi-variable compatibility scoring', 'Dynamic pricing recommendations', 'Automated mutual introduction'],
    workflowSteps: ['Define requirement parameters', 'Graph algorithm computes match affinity', 'Parties review mutual compatibility score'],
    networkConnections: ['SynqFind', 'SynqLink']
  },
  {
    id: 'synqconnect-net',
    name: 'SynqConnect',
    tagline: 'Ecosystem messaging, verified video rooms, and deal collaboration',
    category: 'Network',
    targetUsers: ['Producers', 'Talent & Crew', 'Distributors', 'Investors'],
    businessModel: 'SaaS',
    description: 'Encrypted, verified communication channels where filmmakers, agents, distributors, and technicians collaborate with verified identities.',
    problemSolved: 'Impersonation scams and fake casting calls circulating on unverified messaging platforms.',
    capabilities: ['Cryptographically verified identity badges', 'Confidential deal chat rooms', 'Integrated document signing'],
    workflowSteps: ['Initiate verified connection request', 'Both parties confirm identity credentials', 'Collaborate securely within project context'],
    networkConnections: ['SynqNetwork', 'SynqTrust']
  },
  {
    id: 'synqnetwork',
    name: 'SynqNetwork',
    tagline: 'The global cinema relationship and graph infrastructure',
    category: 'Network',
    targetUsers: ['Producers', 'Talent & Crew', 'Distributors', 'Exhibitors', 'Brands & Sponsors', 'Creators', 'Investors', 'Audiences'],
    businessModel: 'Enterprise',
    description: 'The foundational graph database mapping the real-world ties, collaborations, transactions, and trust metrics of the cinema industry.',
    problemSolved: 'The cinema ecosystem existing as fragmented, isolated pockets with no collective intelligence.',
    capabilities: ['Global cinema knowledge graph', 'Dynamic node relationship weighting', 'Ecosystem health analytics'],
    workflowSteps: ['Map nodes across the film lifecycle', 'Capture transaction and collaboration edges', 'Deliver compounding network intelligence'],
    networkConnections: ['SynqLink', 'SynqOpportunity']
  },
  {
    id: 'synqopportunity',
    name: 'SynqOpportunity',
    tagline: 'Proactive opportunity discovery and commercial serendipity engine',
    category: 'Network',
    targetUsers: ['Producers', 'Talent & Crew', 'Distributors', 'Exhibitors'],
    businessModel: 'SaaS',
    description: 'Alerts members to emerging opportunities before they hit public boards: open release dates, sudden stage vacancies, or grant deadlines.',
    problemSolved: 'Hearing about a career-defining opportunity three days after the deadline passed.',
    capabilities: ['Personalized opportunity alerts', 'Early-signal cancellation fill matching', 'Relevance ranking based on user graph'],
    workflowSteps: ['Set opportunity preferences', 'Network detects high-value unfulfilled need', 'Receive timely actionable notification'],
    networkConnections: ['SynqFind', 'SynqMatch']
  },
  {
    id: 'synqlink',
    name: 'SynqLink',
    tagline: 'Open developer APIs and third-party cinema tool integrations',
    category: 'Network',
    targetUsers: ['Exhibitors', 'Distributors', 'Producers'],
    businessModel: 'API',
    description: 'REST and GraphQL APIs allowing proprietary software, POS systems, accounting platforms, and studio internal tools to connect with DigiSynq.',
    problemSolved: 'Walled gardens and inability to sync legacy internal tools with modern cinema networks.',
    capabilities: ['Comprehensive API documentation', 'Webhooks for real-time node events', 'Enterprise SSO and token security'],
    workflowSteps: ['Developer provisions API keys', 'Connect existing internal ERP/ticketing software', 'Sync transactions seamlessly with the network'],
    networkConnections: ['SynqNetwork', 'SynqOps']
  }
];

export const AUDIENCE_SEGMENTS: AudienceSegment[] = [
  {
    id: 'producers',
    title: 'Producers',
    subtitle: 'From package to premiere without balance-sheet weight',
    description: 'Assemble talent, secure equipment, arrange co-financing, and coordinate physical production without accumulating costly physical assets.',
    painPoint: 'Fragmented vendors, opaque pricing, and bearing crushing overhead across long development cycles.',
    digiSynqSolution: 'Access pre-verified talent, idle gear, stage capacity, and completion-ready packaging on a single asset-light plane.',
    keyProducts: ['SynqProduce', 'SynqMarket', 'SynqScore', 'SynqFund'],
    businessModelNote: 'SaaS & Marketplace transaction fees'
  },
  {
    id: 'production-teams',
    title: 'Production Teams',
    subtitle: 'Streamline on-set logistics and crew coordination',
    description: 'Coordinators, line producers, ADs, and department heads gain real-time digital call sheets, live gear tracking, and instant crew backup.',
    painPoint: '18-hour days spent manually resolving call sheet conflicts, lost receipts, and emergency crew replacements.',
    digiSynqSolution: 'Automate script breakdowns, dispatch call sheets with push receipts, and instantly fill emergency crew vacancies.',
    keyProducts: ['SynqCrewOps', 'SynqPlan', 'SynqVendor', 'SynqTask'],
    businessModelNote: 'Software subscriptions per production'
  },
  {
    id: 'talent',
    title: 'Talent & Crew',
    subtitle: 'Verified credits and steady professional opportunity',
    description: 'Actors, directors, cinematographers, sound mixers, and technicians showcase verified credits and book high-caliber gigs with trusted counterparties.',
    painPoint: 'Gatekept agency rosters, delayed payments, and struggling to prove authentic credit history to new productions.',
    digiSynqSolution: 'Maintain a verified identity badge, receive direct casting inquiries, and enjoy guaranteed escrow disbursements.',
    keyProducts: ['SynqTalent', 'SynqCrew', 'SynqTrust', 'SynqGigs'],
    businessModelNote: 'Free profile tier with verified pro subscription'
  },
  {
    id: 'distributors',
    title: 'Distributors',
    subtitle: 'Intelligent slate acquisition and release optimization',
    description: 'Acquisition executives and sales agents discover finished films, forecast theatrical attendance, and book exhibition windows with high confidence.',
    painPoint: 'Costly film market travel with uncertain acquisition ROI, and guesswork when picking theatrical release dates.',
    digiSynqSolution: 'Screen DRM-protected titles with buyer analytics and leverage multi-market predictive models to pinpoint optimal release corridors.',
    keyProducts: ['SynqContent', 'SynqPredict', 'SynqRelease', 'SynqDeal'],
    businessModelNote: 'Enterprise license & licensing transaction fees'
  },
  {
    id: 'exhibitors',
    title: 'Exhibitors',
    subtitle: 'Maximize screen utilization and revenue yield',
    description: 'Theatrical circuits and independent cinema operators turn vacant auditorium hours into profitable specialty, festival, and event screenings.',
    painPoint: 'Empty seats during off-peak hours and rigid studio booking minimums that bleed theatre margins.',
    digiSynqSolution: 'Dynamic auditorium scheduling, crowdfunded fan screenings, and direct digital booking with film rights-holders.',
    keyProducts: ['SynqScreen', 'SynqBook', 'SynqConnect', 'SynqExhibit'],
    businessModelNote: 'SaaS seat-optimization & booking commission'
  },
  {
    id: 'brands',
    title: 'Brands & Sponsors',
    subtitle: 'Authentic cinema integration with verifiable attribution',
    description: 'Consumer brands, corporate sponsors, and media agencies align with high-affinity film narratives, red carpet events, and in-theatre activations.',
    painPoint: 'Unreliable product placement agencies with zero transparency into actual final cut screen-time or ticket buyer demographics.',
    digiSynqSolution: 'Semantic script scanning for natural product placement, verified screen-time measurement, and closed-loop ticket attribution.',
    keyProducts: ['SynqSponsor', 'SynqInfluence', 'SynqEngage', 'SynqPromo'],
    businessModelNote: 'Matching commission & campaign attribution SaaS'
  },
  {
    id: 'creators',
    title: 'Creators',
    subtitle: 'Direct film fan relationships and junket access',
    description: 'Independent film creators, video essayists, and podcasters get certified access to digital press junkets, screeners, and fan communities.',
    painPoint: 'Treated as second-class citizens by traditional studio PR departments despite driving major viral ticket sales.',
    digiSynqSolution: 'Verified press access, direct filmmaker interview slots, and tools to build their own monetized fan circles.',
    keyProducts: ['SynqCreator', 'SynqInfluence', 'SynqCircle', 'SynqBuzz'],
    businessModelNote: 'Freemium creator tooling & partner revenue shares'
  },
  {
    id: 'investors',
    title: 'Investors & Sponsors',
    subtitle: 'Institutional clarity for film capital',
    description: 'Family offices, equity syndicates, and cultural funds evaluate vetted film packages with objective risk metrics and transparent waterfall reporting.',
    painPoint: 'Opaque "Hollywood accounting", lack of standardized financial due diligence, and binary risk profiles.',
    digiSynqSolution: 'Access packaged slates audited with SynqScore, test sensitivity models, and track transparent CAM automated disbursements.',
    keyProducts: ['SynqFund', 'SynqInvest', 'SynqRevenue', 'SynqShare'],
    businessModelNote: 'Platform diligence SaaS & partner financing fees (non-balance-sheet)'
  },
  {
    id: 'audiences',
    title: 'Audiences',
    subtitle: 'Elevated cinema culture and community discovery',
    description: 'Passionate movie-goers discover unique screenings, join verified director discussions, and participate in cinema culture in their local cities.',
    painPoint: 'Generic theatre experiences, spammy review sites, and missing out on limited theatrical runs.',
    digiSynqSolution: 'Crowdfund screenings with local cinephile clubs, engage in spoiler-free verified conversations, and access exclusive festival previews.',
    keyProducts: ['SynqConnect', 'SynqCircle', 'SynqEngage', 'ReviewSynq'],
    businessModelNote: 'Free community access and ticketing partner integrations'
  }
];

export const USE_CASES: UseCaseItem[] = [
  {
    id: 'cinematographer',
    title: 'I need a cinematographer',
    query: 'Find an experienced London-based DP available for a 3-week indie drama shooting on anamorphic in October.',
    persona: 'Independent Film Producer',
    stages: [
      { stage: 'FIND', action: 'Semantic Query', detail: 'DigiSynq scans verified European DP profiles with feature credits in naturalistic drama and anamorphic lenses.' },
      { stage: 'MATCH', action: 'Availability & Rate Scoring', detail: 'Filters down to 4 cinematographers with open calendar windows in October within budget tiers.' },
      { stage: 'VERIFY', action: 'SynqTrust Validation', detail: 'Checks verified guild standing, references from 3 recent directors, and authentic showreels.' },
      { stage: 'CONNECT', action: 'Encrypted Deal Room', detail: 'Initiates direct contact, shares the watermarked script, and locks the deal memo with escrow.' }
    ],
    outcome: 'DP contracted within 48 hours without paying costly agency placement surcharges.',
    connectedNodes: ['Talent', 'Projects', 'Assets', 'Capital', 'Trust', 'Transactions']
  },
  {
    id: 'equipment',
    title: 'I have unused equipment',
    query: 'List an idle ARRI Alexa 35 camera package with Cooke Full Frame Plus lenses sitting in our Munich rental vault.',
    persona: 'Boutique Rental House Owner',
    stages: [
      { stage: 'LIST', action: 'Asset Digital Twin', detail: 'Registers camera serial numbers, maintenance history, optical bench certifications, and calendar availability.' },
      { stage: 'DISCOVER', action: 'Regional Demand Routing', detail: 'DigiSynq detects a commercial shoot and an indie feature filming within 150 km requiring Alexa 35 setups.' },
      { stage: 'MATCH', action: 'Sub-Rental Agreement', detail: 'Matches the request, calculates sub-rental discount pricing, and auto-issues standard insurance endorsements.' },
      { stage: 'TRANSACT', action: 'Protected Settlement', detail: 'Secures deposit in escrow, tracks GPS custody, and releases rental payment upon return inspection.' }
    ],
    outcome: '$14,200 in incremental revenue earned from idle hardware without risk of asset damage or loss.',
    connectedNodes: ['Assets', 'Demand', 'Projects', 'Operations', 'Marketplace', 'Trust']
  },
  {
    id: 'sentiment',
    title: "My film's audience sentiment is falling",
    query: 'Detect early negative chatter following Thursday night previews of a psychological thriller.',
    persona: 'Theatrical Marketing Director',
    stages: [
      { stage: 'DETECT', action: 'Real-Time Anomaly Alert', detail: 'SynqSignals flags a 28% drop in sentiment polarity across exit polls and social comments within 4 hours.' },
      { stage: 'DIAGNOSE', action: 'Semantic Root-Cause Vector', detail: 'SynqSentiment isolates the issue: audiences feel the misleading marketing promised an action movie, not an art film.' },
      { stage: 'RESPOND', action: 'SynqRecover Tactical Pivot', detail: 'Automates deployment of a secondary trailer highlighting positive film-critic quotes praising the suspenseful ending.' },
      { stage: 'MEASURE', action: 'Attribution Tracking', detail: 'Tracks weekend holdover recovery and ticket buyer sentiment stabilization in real-time.' }
    ],
    outcome: 'Prevented a projected 62% second-weekend collapse, recovering an estimated $1.8M in theatrical box office.',
    connectedNodes: ['Intelligence', 'Audiences', 'Content', 'Reputation', 'Screens', 'Marketing']
  },
  {
    id: 'distribution',
    title: 'I need distribution',
    query: 'Find theatrical and digital distribution for an award-winning bilingual crime documentary completed with clean chain of title.',
    persona: 'Documentary Director / Producer',
    stages: [
      { stage: 'DISCOVER', action: 'Catalog Ingestion', detail: 'Uploads watermarked 4K master screener and verified territorial rights availability into SynqContent.' },
      { stage: 'MATCH', action: 'Buyer Recommendation Engine', detail: 'Matches film profile with 14 territorial distributors and documentary platforms with open acquisition slots.' },
      { stage: 'COORDINATE', action: 'Private Screener Room', detail: 'Tracks buyer watch time, completion rates, and highlights interest to sales representatives.' },
      { stage: 'MEASURE', action: 'Deal Execution & Waterfall', detail: 'Executes standard IFTA distribution contracts across 5 territories with automated revenue waterfall tracking.' }
    ],
    outcome: 'Secured 3 theatrical territory releases and a global streaming acquisition window without waiting for physical markets.',
    connectedNodes: ['Content', 'Rights', 'Distribution', 'Screens', 'Capital', 'Transactions']
  },
  {
    id: 'screen-capacity',
    title: 'I have unused screen capacity',
    query: 'Fill empty 250-seat auditoriums on Tuesday and Wednesday evenings across our 6-theatre regional circuit.',
    persona: 'Independent Cinema Circuit Operator',
    stages: [
      { stage: 'LIST', action: 'Unused Capacity Sync', detail: 'SynqScreen publishes available off-peak auditorium time slots and technical projection capabilities.' },
      { stage: 'MATCH', action: 'Event & Community Pairing', detail: 'Matches open screens with local anime fan clubs, indie director Q&A tours, and classic 35mm retrospective hosts.' },
      { stage: 'SCHEDULE', action: 'Dynamic Ticketing & Pledges', detail: 'SynqConnect enables fans to pre-pledge tickets; once the 60-ticket threshold is reached, the show is automatically confirmed.' },
      { stage: 'MONETIZE', action: 'Full Concession & Box Office Uplift', detail: 'Generates incremental ticket splits and 4.2x higher Tuesday concession sales per patron.' }
    ],
    outcome: 'Average Tuesday screen occupancy surged from 14% to 78%, generating high-margin ancillary revenue.',
    connectedNodes: ['Screens', 'Audiences', 'Content', 'Assets', 'Brands', 'Marketplace']
  }
];

export const PRINCIPLES: PrincipleItem[] = [
  {
    name: 'Asset-Light',
    summary: 'We prefer networks over ownership.',
    detail: 'We do not build studios or buy camera fleets. We create the software layer that makes existing capital resources liquid, visible, and monetizable.'
  },
  {
    name: 'Connected',
    summary: 'We connect fragmented participants.',
    detail: 'Cinema has always been driven by relationships, but trapped in closed silos. We replace phone tag and opaque rolodexes with a unified operating graph.'
  },
  {
    name: 'Intelligent',
    summary: 'We turn information into useful decisions.',
    detail: 'We transform raw box office receipts, crew availability, and audience sentiment into actionable foresight that lowers production and distribution risk.'
  },
  {
    name: 'Open',
    summary: 'We work with existing ecosystem participants.',
    detail: 'We do not seek to displace guilds, rental houses, exhibitors, or sales agents. We give them digital infrastructure to expand their reach and efficiency.'
  },
  {
    name: 'Efficient',
    summary: 'We reduce unnecessary friction.',
    detail: 'Weeks spent chasing call sheets, negotiating standard deal memos, and resolving accounting discrepancies are condensed into automated workflows.'
  },
  {
    name: 'Trustworthy',
    summary: 'We build confidence into transactions and relationships.',
    detail: 'Verified identities, authentic credit histories, transparent escrow deposits, and objective performance metrics establish certainty.'
  },
  {
    name: 'Scalable',
    summary: 'We prioritize software and network leverage.',
    detail: 'Every new participant, project, asset, or screening makes the entire network more valuable for everyone without incurring linear physical costs.'
  },
  {
    name: 'Responsible',
    summary: 'We protect privacy, security and ecosystem integrity.',
    detail: 'We respect artistic confidentiality, enforce rigorous intellectual property watermarks, and never compromise creative dignity.'
  }
];

export const FLYWHEEL_STEPS = [
  { step: 1, name: 'Participants', description: 'Filmmakers, crew, exhibitors, distributors, and brands join the network.' },
  { step: 2, name: 'Resources', description: 'Underutilized cameras, soundstages, screens, and talent availability are listed.' },
  { step: 3, name: 'Projects', description: 'Productions assemble slates and call sheets on DigiSynq platforms.' },
  { step: 4, name: 'Connections', description: 'Algorithms and search match supply with demand instantly across boundaries.' },
  { step: 5, name: 'Transactions', description: 'Deals, sub-rentals, bookings, and crew dispatch occur with secured escrow.' },
  { step: 6, name: 'Data', description: 'Signals on performance, utilization, and sentiment are captured in real time.' },
  { step: 7, name: 'Intelligence', description: 'Predictive models translate raw signals into actionable industry foresight.' },
  { step: 8, name: 'Trust', description: 'Verified ratings, track records, and automated settlements cement counterparty confidence.' },
  { step: 9, name: 'Better Connections', description: 'Matching precision and operational velocity increase exponentially.' },
  { step: 10, name: 'More Participants', description: 'Compounding network effects draw the broader global cinema ecosystem in.' }
];

export const TRADITIONAL_VS_DIGISYNQ = [
  {
    attribute: 'Physical Assets',
    traditional: 'Heavy balance-sheet ownership: studios, gear, real estate, physical inventory.',
    digisynq: 'Zero physical asset ownership. Pure software, network, and intelligence layer.'
  },
  {
    attribute: 'Discovery Model',
    traditional: 'Manual word-of-mouth, private gatekeepers, fragmented phone calls.',
    digisynq: 'Multi-modal semantic search and AI graph matching across verified global nodes.'
  },
  {
    attribute: 'Resource Utilization',
    traditional: 'High idle capacity (cameras sit in cases, theatres sit empty off-peak).',
    digisynq: 'Dynamic liquidity: underutilized equipment, stages, and screens are unlocked.'
  },
  {
    attribute: 'Workflows & Data',
    traditional: 'Disparate spreadsheets, paper call sheets, conflicting accounting PDFs.',
    digisynq: 'Unified real-time operating pipelines with verified data synchronization.'
  },
  {
    attribute: 'Trust & Verification',
    traditional: 'Opaque references, unverified claims, and frequent counterparty payment defaults.',
    digisynq: 'SynqTrust: verified guild credits, background checks, and milestone escrow security.'
  },
  {
    attribute: 'Capital Scalability',
    traditional: 'Linear: scaling requires building more soundstages and buying more hardware.',
    digisynq: 'Exponential: scaling occurs via network density, software liquidity, and data network effects.'
  }
];
