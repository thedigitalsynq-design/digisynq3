import { EcosystemNode, OutcomeSystem, CaseIntervention, ScorecardDimension, DigitalExtensionTeam } from '../types';

export const ECOSYSTEM_NODES: EcosystemNode[] = [
  {
    id: 'brand',
    label: 'BRAND',
    category: 'IDENTITY CORE',
    angle: 0,
    distance: 210,
    shortDescription: 'The foundational resonance. Encodes visual DNA, strategic voice, and core authority.',
    roleInFootprint: 'Origin node for all downstream digital signals. If inconsistent, fragmentation compounds at every external touchpoint.',
    connectedTo: ['web', 'design', 'social', 'content'],
    subsystemFlow: [
      { name: 'Identity', code: 'BR-01', description: 'Design tokens, optical marks, and mathematical color space.', metrics: '100% token parity', signals: ['SVG vector symbols', 'W3C CSS design tokens'] },
      { name: 'Positioning', code: 'BR-02', description: 'Sharp category definition and defensible cognitive whitespace.', metrics: 'Single clear differentiator', signals: ['Positioning thesis', 'Competitive matrix'] },
      { name: 'Voice & Tone', code: 'BR-03', description: 'Editorial tone, syntactical cadence, and vocabulary guidelines across modalities.', metrics: 'Multi-channel tone match', signals: ['Style syntax guide', 'Vocabulary constraints'] },
      { name: 'Architecture', code: 'BR-04', description: 'Sub-brand relationship hierarchy and unified equity distribution.', metrics: 'Zero equity leakage', signals: ['Namespace hierarchy', 'Domain hierarchy'] },
      { name: 'Asset System', code: 'BR-05', description: 'Centralized typography, iconography, and master visual repository.', metrics: 'Instant asset recall', signals: ['CDN asset catalog', 'Style guide repo'] }
    ],
    diagnosticQuestions: [
      'Do your social headers, ads, and website look designed by three unrelated entities?',
      'Is your value proposition identical across your landing pages and customer touchpoints?',
      'Are design tokens shared automatically between creative teams and engineering?'
    ],
    liveSignalDemo: {
      type: 'brand',
      title: 'BRAND IDENTITY CONGRUENCE GRAPH',
      metrics: [
        { label: 'Token Uniformity', value: '99.4%', status: 'optimal' },
        { label: 'Voice Drift Margin', value: '< 1.8%', status: 'optimal' },
        { label: 'Asset Parity', value: 'Synced', status: 'optimal' }
      ],
      telemetryText: 'Vector geometry synced across all touchpoints. Zero typographical dissonance detected.'
    }
  },
  {
    id: 'web',
    label: 'WEB',
    category: 'TRANSACTION ANCHOR',
    angle: 30,
    distance: 215,
    shortDescription: 'The sovereign digital anchor. Converts intent into verified commercial momentum.',
    roleInFootprint: 'Central clearinghouse for user intent, high-resolution brand expression, and sovereign conversion data.',
    connectedTo: ['brand', 'design', 'search', 'ecommerce', 'technology'],
    subsystemFlow: [
      { name: 'UX & IA', code: 'WB-01', description: 'Cognitive load reduction, frictionless decision trees, and intuitive spatial paths.', metrics: 'Sub-2s time to value', signals: ['Task completion rate', 'Fitts Law audit'] },
      { name: 'Headless Core', code: 'WB-02', description: 'Ultra-lean clean code, edge rendering, and headless modern API architecture.', metrics: '100% build health', signals: ['Edge compute SSR', 'TypeScript strict mode'] },
      { name: 'Performance', code: 'WB-03', description: 'Sub-second Core Web Vitals, zero layout shifts, and asset compression.', metrics: '99+ PageSpeed score', signals: ['LCP < 0.9s', 'CLS < 0.01', 'INP < 80ms'] },
      { name: 'Conversion', code: 'WB-04', description: 'Dynamic intent-routed checkout, progressive form fields, and frictionless hooks.', metrics: '+38% checkout velocity', signals: ['Micro-conversion tracking', 'Cart abandonment lock'] },
      { name: 'Security & Edge', code: 'WB-05', description: 'Zero-trust perimeter, automated SSL renewal, DDoS shield, and global CDN.', metrics: '99.99% uptime', signals: ['Cloudflare edge rules', 'SOC2 type compliance'] }
    ],
    diagnosticQuestions: [
      'Does your website take over 2.5 seconds to load on mid-tier mobile connections?',
      'Does the user journey break down when moving from an ad directly to the landing page?',
      'Is your codebase bloated with unpruned tracking tags that degrade customer trust?'
    ],
    liveSignalDemo: {
      type: 'web',
      title: 'HEADLESS WEB RUNTIME TELEMETRY',
      metrics: [
        { label: 'LCP (Largest Contentful Paint)', value: '0.82s', status: 'optimal' },
        { label: 'CLS (Cumulative Layout Shift)', value: '0.00', status: 'optimal' },
        { label: 'Edge Latency', value: '12ms', status: 'optimal' }
      ],
      telemetryText: 'Global CDN distribution active. SSR cache hit ratio 99.4%. Conversion funnel unobstructed.'
    }
  },
  {
    id: 'social',
    label: 'SOCIAL',
    category: 'CULTURAL MOMENTUM',
    angle: 60,
    distance: 215,
    shortDescription: 'Active cultural footprint. Builds trust, distributes perspectives, and engages communities.',
    roleInFootprint: 'Propels organic brand affinity, feeds algorithm-driven discovery, and humanizes the institution.',
    connectedTo: ['brand', 'content', 'marketing', 'growth'],
    subsystemFlow: [
      { name: 'POV Strategy', code: 'SO-01', description: 'Platform-native editorial positioning and distinctive point of view.', metrics: 'Defensible brand lens', signals: ['Editorial pillar matrix', 'Pacing cadence schedule'] },
      { name: 'Profile Cohesion', code: 'SO-02', description: 'Cohesive multi-platform bio verification, link hubs, and visual banners.', metrics: 'Universal verification', signals: ['Link graph attribution', 'Consistent handle authority'] },
      { name: 'Native Creative', code: 'SO-03', description: 'Native short-form video, thought pieces, visual essays, and carousel frameworks.', metrics: '+4.2x share velocity', signals: ['Native format exports', 'Thumb-stop rate > 62%'] },
      { name: 'Community Loops', code: 'SO-04', description: 'Active dialogue loops, comment moderation, and peer-to-peer discussions.', metrics: '< 15min reply latency', signals: ['Sentiment tracking', 'Brand advocate identification'] },
      { name: 'Attribution Sync', code: 'SO-05', description: 'First-party referral tracking, profile visits, and audience demographic shifts.', metrics: 'True attribution parity', signals: ['Referral UTM telemetry', 'Audience retention trends'] }
    ],
    diagnosticQuestions: [
      'Do your social posts act as a one-way megaphone rather than a community beacon?',
      'Are social audiences cleanly transitioned to owned web and email ecosystems?',
      'Is your social media team working in complete isolation from SEO and Product teams?'
    ],
    liveSignalDemo: {
      type: 'social',
      title: 'OMNI-CHANNEL SOCIAL PULSE',
      metrics: [
        { label: 'Distribution Sync', value: 'Synchronous', status: 'optimal' },
        { label: 'Engagement Velocity', value: '+4.8x avg', status: 'optimal' },
        { label: 'Audience Bleed', value: 'Negligible', status: 'optimal' }
      ],
      telemetryText: 'Cross-platform cadence aligned. Social engagement directly piped to automated CRM nurturing.'
    }
  },
  {
    id: 'search',
    label: 'SEARCH',
    category: 'INTENT DISCOVERY',
    angle: 90,
    distance: 210,
    shortDescription: 'High-intent algorithmic presence. Intercepts buyers at the exact moment of inquiry.',
    roleInFootprint: 'Validates brand authority with search engines and LLM answer systems, securing organic discoverability.',
    connectedTo: ['web', 'content', 'data', 'growth'],
    subsystemFlow: [
      { name: 'Technical SEO', code: 'SC-01', description: 'Crawl budget optimization, semantic JSON-LD graph, canonical integrity.', metrics: 'Zero crawl blockages', signals: ['Schema.org validation', 'Robots/Sitemap sync'] },
      { name: 'Content Architecture', code: 'SC-02', description: 'Intent-matched informational and transactional architecture answering real user need.', metrics: 'Semantic depth score 94', signals: ['Entity coverage', 'Topical authority maps'] },
      { name: 'AI Engine Optimization', code: 'SC-03', description: 'Knowledge base structuring for generative AI engines (SearchGPT, Gemini, Perplexity).', metrics: 'High citation rate', signals: ['Entity knowledge graph', 'Direct citation tags'] },
      { name: 'Local & Maps', code: 'SC-04', description: 'Geo-entity synchronization, local pack dominant signals, and multi-location parity.', metrics: 'Top 3 local map pack', signals: ['Google Business API sync', 'NAP consistency'] },
      { name: 'Search Intelligence', code: 'SC-05', description: 'Real-time query attribution, intent shift tracking, and cannibalization prevention.', metrics: '100% query tracking', signals: ['Search Console telemetry', 'Rank volatility alerts'] }
    ],
    diagnosticQuestions: [
      'Do AI Overviews and Google search know who you are and what problem you solve?',
      'Are multiple pages on your domain competing for and splitting the same keywords?',
      'Is your technical schema updated when you change products or executive bios?'
    ],
    liveSignalDemo: {
      type: 'search',
      title: 'SERP & GENERATIVE ENGINE CRAWL LOG',
      metrics: [
        { label: 'Indexed Nodes', value: '1,420 URLs', status: 'optimal' },
        { label: 'Entity Citations', value: '98.7%', status: 'optimal' },
        { label: 'Crawl Inefficiencies', value: '0.0%', status: 'optimal' }
      ],
      telemetryText: 'Semantic Schema.org knowledge graph verified. Live indexing active across search and LLM crawlers.'
    }
  },
  {
    id: 'content',
    label: 'CONTENT',
    category: 'INTELLECTUAL ASSETS',
    angle: 120,
    distance: 215,
    shortDescription: 'The narrative capital. Creates intellectual property that compounds across all channels.',
    roleInFootprint: 'Translates brand authority into tangible insights, case studies, guides, and dynamic media.',
    connectedTo: ['brand', 'search', 'social', 'marketing'],
    subsystemFlow: [
      { name: 'Editorial POV', code: 'CN-01', description: 'Rigorous thought leadership calendars, research briefs, and opinion essays.', metrics: 'High-conviction POV', signals: ['Original research data', 'Primary source citations'] },
      { name: 'Production Craft', code: 'CN-02', description: 'High-fidelity video, interactive tools, technical teardowns, and visual designs.', metrics: 'Editorial craft quality', signals: ['Production asset pipeline', 'Design system alignment'] },
      { name: 'Syndication Engine', code: 'CN-03', description: 'Synchronized syndication across search, email, LinkedIn, and partner feeds.', metrics: '1:7 repurposing multiplier', signals: ['Syndication API triggers', 'Newsletter automated sync'] },
      { name: 'Modular Formats', code: 'CN-04', description: 'Modular atomized assets: micro-clips, whitepapers, data sheets, and infographics.', metrics: 'Multi-device readiness', signals: ['Responsive SVG graphics', 'Bite-sized visual snippets'] },
      { name: 'Lifecycle Guard', code: 'CN-05', description: 'Evergreen pruning, seasonal updates, and continuous historical refresh audits.', metrics: 'Zero decayed content', signals: ['Content freshness score', 'Pruning automation rules'] }
    ],
    diagnosticQuestions: [
      'Do you publish articles that sit silently with zero cross-channel distribution?',
      'Is your content library a disorganized graveyard of outdated product specs?',
      'Does your content generate measurable downstream pipeline or just vanity traffic?'
    ],
    liveSignalDemo: {
      type: 'content',
      title: 'CONTENT COMPOUNDING VELOCITY MONITOR',
      metrics: [
        { label: 'Syndication Factor', value: '1 to 8', status: 'optimal' },
        { label: 'Decay Prevention', value: 'Active', status: 'optimal' },
        { label: 'Entity Citations', value: '284 links', status: 'optimal' }
      ],
      telemetryText: 'Long-form editorial automatically decomposed into micro-signals for social, search, and newsletters.'
    }
  },
  {
    id: 'marketing',
    label: 'MARKETING',
    category: 'DEMAND VELOCITY',
    angle: 150,
    distance: 215,
    shortDescription: 'Precision amplification. Scales qualified attention through targeted capital deployment.',
    roleInFootprint: 'Accelerates market reach, validates new audience segments, and fuels pipeline predictable growth.',
    connectedTo: ['web', 'data', 'automation', 'growth'],
    subsystemFlow: [
      { name: 'Intent Search Ads', code: 'MK-01', description: 'High-intent query auctions, negative keyword fortifications, exact-match bid tiers.', metrics: 'Quality Score 9/10', signals: ['Search intent isolation', 'ROAS target parity'] },
      { name: 'Creative Paid Social', code: 'MK-02', description: 'Creative-led testing matrices, hook rate optimizations, algorithmic broad targeting.', metrics: '< $18 CAC blended', signals: ['Hook retention test', 'Iterative creative matrix'] },
      { name: 'Narrative Retargeting', code: 'MK-03', description: 'Sequenced narrative re-engagement based on user behavioral stage in the footprint.', metrics: 'No ad fatigue drift', signals: ['Behavioral recency caps', 'Exclusion list integrity'] },
      { name: 'Campaign Orchestration', code: 'MK-04', description: 'Synchronized cross-channel product drops, webinars, and commercial activations.', metrics: 'Unified messaging', signals: ['Multi-channel flight schedule', 'Real-time spend pacing'] },
      { name: 'Attribution Modeling', code: 'MK-05', description: 'Multi-touch algorithmic attribution, incrementality lift experiments, clean room data.', metrics: 'Verified incremental lift', signals: ['Marketing mix model', 'Post-click incrementality'] }
    ],
    diagnosticQuestions: [
      'Are you burning ad spend sending visitors to generic, un-personalized homepages?',
      'Do retargeting ads stalk users who already purchased your product last week?',
      'Can you clearly prove which marketing dollar created which closed contract?'
    ],
    liveSignalDemo: {
      type: 'marketing',
      title: 'PAID CAPITAL ATTRIBUTION EFFICIENCY',
      metrics: [
        { label: 'Attributed Pipeline', value: '94.2%', status: 'optimal' },
        { label: 'Wasted Ad Spend', value: '-37.4%', status: 'optimal' },
        { label: 'Blended CAC Payback', value: '4.2 mo', status: 'optimal' }
      ],
      telemetryText: 'Bid strategy linked directly to real-time warehouse conversions. Zero bot budget bleed.'
    }
  },
  {
    id: 'design',
    label: 'DESIGN',
    category: 'AESTHETIC ARCHITECTURE',
    angle: 180,
    distance: 210,
    shortDescription: 'Optical precision and spatial hierarchy. Translates cognitive intention into visual craft.',
    roleInFootprint: 'Creates instant credibility, eliminates decision fatigue, and crafts memorable brand touchpoints.',
    connectedTo: ['brand', 'web', 'content', 'ecommerce'],
    subsystemFlow: [
      { name: 'Design Systems', code: 'DS-01', description: 'Figma-to-code token synchronization, mathematical component matrices, spacing grids.', metrics: 'Single source of truth', signals: ['Automated Figma sync', 'Strict token taxonomy'] },
      { name: 'Spatial Layout', code: 'DS-02', description: 'Deliberate negative space, mathematical typography ratios, and visual pacing.', metrics: 'Sub-second optical clarity', signals: ['Modular scale scales', 'Contrast ratio AA+'] },
      { name: 'Kinetic & Micro-UI', code: 'DS-03', description: 'Tactile hover feedback, purposeful page transitions, and progressive disclosure.', metrics: 'Fluid 60fps interaction', signals: ['Motion spring physics', 'Zero layout stutter'] },
      { name: 'Commercial Collateral', code: 'DS-04', description: 'Investor pitch decks, product sheets, packaging, and digital presentation design.', metrics: 'Flawless brand hierarchy', signals: ['Export-ready asset kits', 'Vector consistency'] },
      { name: 'Responsive Ergonomics', code: 'DS-05', description: 'Adaptive touch targets, thumb-zone mechanics, and cross-device ergonomics.', metrics: '44px+ touch targets', signals: ['Mobile-first layout rules', 'Fluid typography clamp'] }
    ],
    diagnosticQuestions: [
      'Does your product look visually inconsistent across mobile, desktop, and marketing assets?',
      'Are your designers and developers constantly arguing over spacing and token specs?',
      'Do prospective customers perceive your company as outdated simply due to poor visual craft?'
    ],
    liveSignalDemo: {
      type: 'design',
      title: 'DESIGN SYSTEM & TOKEN CADENCE',
      metrics: [
        { label: 'Token Parity', value: '100%', status: 'optimal' },
        { label: 'Accessibility Contrast', value: 'AAA Compliant', status: 'optimal' },
        { label: 'Component Reusability', value: '94.8%', status: 'optimal' }
      ],
      telemetryText: 'Unified token library deployed to production CSS. Zero unmapped color or typography variables.'
    }
  },
  {
    id: 'technology',
    label: 'TECHNOLOGY',
    category: 'INFRASTRUCTURE CORE',
    angle: 210,
    distance: 215,
    shortDescription: 'Modern computational engine. Powers headless APIs, edge routing, and cloud stability.',
    roleInFootprint: 'Ensures the brand operates without technical debt, slow servers, or brittle legacy integrations.',
    connectedTo: ['web', 'data', 'automation', 'ecommerce'],
    subsystemFlow: [
      { name: 'Edge Infrastructure', code: 'TC-01', description: 'Global distributed serverless functions, low-latency CDN, and multi-region failover.', metrics: '< 20ms response time', signals: ['Edge worker scripts', 'Zero cold-start compute'] },
      { name: 'API Mesh', code: 'TC-02', description: 'Microservices, GraphQL/REST endpoints, and webhook bridges across the footprint.', metrics: '99.99% API reliability', signals: ['Schema type safety', 'Rate limit protection'] },
      { name: 'CI/CD Pipelines', code: 'TC-03', description: 'Automated test suites, preview environments, lint gates, and atomic zero-downtime deploys.', metrics: '< 3min build time', signals: ['GitHub Actions workflows', 'Automated regression tests'] },
      { name: 'Data Pipeline Tech', code: 'TC-04', description: 'Event buses, warehouse ingestion scripts, and real-time streaming sockets.', metrics: 'Zero lost data packets', signals: ['Kafka/PubSub streaming', 'Warehouse connectors'] },
      { name: 'Security Architecture', code: 'TC-05', description: 'Content Security Policies (CSP), sanitization filters, and token rotation.', metrics: 'Zero vulnerability flags', signals: ['Automated Dependabot', 'Penetration audit score'] }
    ],
    diagnosticQuestions: [
      'Are your developers constantly fighting fragile WordPress plugins or slow monolithic backends?',
      'Does your server crash or slow to a crawl whenever an email campaign or viral post goes live?',
      'Are critical integrations between your database and marketing tools held together by duct tape?'
    ],
    liveSignalDemo: {
      type: 'technology',
      title: 'DISTRIBUTED RUNTIME & EDGE MONITOR',
      metrics: [
        { label: 'Edge Availability', value: '100.0%', status: 'optimal' },
        { label: 'API Response P95', value: '18ms', status: 'optimal' },
        { label: 'Vulnerability Index', value: '0 Critical', status: 'optimal' }
      ],
      telemetryText: 'Serverless clusters auto-scaling across 24 edge regions. Continuous health probes verified.'
    }
  },
  {
    id: 'data',
    label: 'DATA',
    category: 'INTELLIGENCE TRUTH',
    angle: 240,
    distance: 215,
    shortDescription: 'Single source of truth. Binds every touchpoint into unified behavioral telemetry.',
    roleInFootprint: 'Eliminates departmental guesswork by feeding verified behavioral data back into creative and technical strategy.',
    connectedTo: ['web', 'marketing', 'automation', 'growth'],
    subsystemFlow: [
      { name: 'First-Party Tracking', code: 'DT-01', description: 'Server-side first-party event collection bypassing ad-blocker drop-offs.', metrics: '99.8% event capture', signals: ['Server-side tagging', 'Zero client telemetry bloat'] },
      { name: 'Attribution Modeling', code: 'DT-02', description: 'Data-driven algorithmic attribution factoring in multi-week evaluation cycles.', metrics: 'Eliminates last-click bias', signals: ['Multi-touch regression', 'Time-decay weighting'] },
      { name: 'Funnel Telemetry', code: 'DT-03', description: 'Session-level heatmaps, micro-dropoff detection, and conversion friction alarms.', metrics: 'Real-time bottleneck alerts', signals: ['Funnel drop-off telemetry', 'Form field abandonment logs'] },
      { name: 'Unified Customer CDP', code: 'DT-04', description: 'Cross-device identity resolution merging anonymous clicks into unified customer records.', metrics: 'Single customer view', signals: ['Deterministic ID graph', 'Consent framework sync'] },
      { name: 'Executive Intelligence', code: 'DT-05', description: 'Predictive churn indicators, high-value cohort modeling, and real-time executive dashboards.', metrics: 'Actionable weekly signals', signals: ['Predictive LTV models', 'Cohort retention analysis'] }
    ],
    diagnosticQuestions: [
      'Do your marketing dashboard and your billing software report two completely different revenue numbers?',
      'Are you still relying on unreliable client-side cookie trackers that lose 35% of visits?',
      'Does your executive team have to wait until month-end to understand channel effectiveness?'
    ],
    liveSignalDemo: {
      type: 'data',
      title: 'FIRST-PARTY TELEMETRY PIPELINE',
      metrics: [
        { label: 'Event Ingestion', value: '4,280/sec', status: 'optimal' },
        { label: 'Signal Loss Margin', value: '< 0.2%', status: 'optimal' },
        { label: 'Attribution Integrity', value: 'Unbiased', status: 'optimal' }
      ],
      telemetryText: 'Server-side data conduit streaming directly to data warehouse. Client tracking latency: 0ms.'
    }
  },
  {
    id: 'automation',
    label: 'AUTOMATION',
    category: 'SYNCHRONOUS VELOCITY',
    angle: 270,
    distance: 205,
    shortDescription: 'The self-driving system. Connects data triggers to immediate commercial action.',
    roleInFootprint: 'Removes human latency between a user signal and the brand’s personalized response.',
    connectedTo: ['web', 'data', 'marketing', 'ecommerce'],
    subsystemFlow: [
      { name: 'CRM & ERP Sync', code: 'AU-01', description: 'Instant two-way data streaming between storefront, web forms, and sales pipelines.', metrics: '< 500ms sync latency', signals: ['Webhook event broker', 'Bidirectional field mapping'] },
      { name: 'Lifecycle Triggers', code: 'AU-02', description: 'Dynamic behavioral emails, SMS alerts, and re-activation sequences triggered by real intent.', metrics: '+52% open rate', signals: ['Behavior-based triggers', 'Dynamic content injection'] },
      { name: 'Intelligent Routing', code: 'AU-03', description: 'Autonomous lead scoring, intelligent meeting routing, and predictive personalized collateral.', metrics: 'Zero lead triage delay', signals: ['Semantic intent scoring', 'Dynamic routing rules'] },
      { name: 'Omni-channel Harmony', code: 'AU-04', description: 'Cross-channel coordination ensuring user receives synchronized message everywhere.', metrics: 'Coherent user journey', signals: ['Channel priority rules', 'Frequency cap protection'] },
      { name: 'Self-Healing Tasks', code: 'AU-05', description: 'Automated A/B deployment, self-healing broken links, and continuous catalog sync.', metrics: '10x operational throughput', signals: ['Automated link testing', 'Catalog inventory sync'] }
    ],
    diagnosticQuestions: [
      'Does it take your team 24+ hours to contact an inbound enterprise demo request?',
      'Are customers receiving onboarding emails for features they set up two weeks ago?',
      'Is your staff manually copying lead spreadsheets between disconnected tools?'
    ],
    liveSignalDemo: {
      type: 'automation',
      title: 'AUTONOMOUS WORKFLOW ORCHESTRATION',
      metrics: [
        { label: 'Lead Response Time', value: '18 seconds', status: 'optimal' },
        { label: 'Workflow Reliability', value: '99.98%', status: 'optimal' },
        { label: 'Manual Steps Removed', value: '82%', status: 'optimal' }
      ],
      telemetryText: 'Event-driven triggers active across 14 integrated tools. Lead enrichment running sub-second.'
    }
  },
  {
    id: 'ecommerce',
    label: 'E-COMMERCE',
    category: 'COMMERCE ENGINE',
    angle: 300,
    distance: 215,
    shortDescription: 'Frictionless commercial checkout. Unlocks seamless transactions and subscription revenue.',
    roleInFootprint: 'Turns qualified interest into completed financial transactions with zero friction or cart drop-off.',
    connectedTo: ['web', 'marketing', 'automation', 'data'],
    subsystemFlow: [
      { name: 'Checkout Velocity', code: 'EC-01', description: 'One-click Apple/Google Pay, accelerated guest checkout, and zero-latency payment gates.', metrics: '+32% checkout completion', signals: ['Express pay gateways', 'Single-page checkout'] },
      { name: 'Inventory Sync', code: 'EC-02', description: 'Real-time stock reservation, back-in-stock alerts, and multi-warehouse coordination.', metrics: 'Zero stock-out ad spend', signals: ['Live inventory API', 'Stock-aware ad scripts'] },
      { name: 'Subscription Engine', code: 'EC-03', description: 'Predictive recurring orders, flexible portal self-service, and churn mitigation prompts.', metrics: '92% subscription retention', signals: ['Customer portal APIs', 'Smart dunning engine'] },
      { name: 'Merchandising Logic', code: 'EC-04', description: 'Dynamic product recommendations, bundle discounts, and cart-drawer upsells.', metrics: '+24% Average Order Value', signals: ['ML recommendation engine', 'Cart threshold rewards'] },
      { name: 'Global Localization', code: 'EC-05', description: 'Multi-currency settlement, automated tax compliance, and translated checkout localized.', metrics: '100% tax compliance', signals: ['GeoIP currency switch', 'Localized customs data'] }
    ],
    diagnosticQuestions: [
      'Are customers abandoning carts due to slow, multi-page checkout forms on mobile devices?',
      'Are you running paid campaigns to products that are already sold out in popular sizes?',
      'Can your customers easily manage, pause, or swap subscriptions without emailing support?'
    ],
    liveSignalDemo: {
      type: 'ecommerce',
      title: 'COMMERCE FUNNEL REAL-TIME CONVERSION',
      metrics: [
        { label: 'Checkout Latency', value: '240ms', status: 'optimal' },
        { label: 'Cart Completion', value: '78.4%', status: 'optimal' },
        { label: 'AOV Expansion', value: '+26.2%', status: 'optimal' }
      ],
      telemetryText: 'Global multi-currency checkout operating with zero cart friction. Dynamic bundle engine engaged.'
    }
  },
  {
    id: 'growth',
    label: 'GROWTH',
    category: 'COMPOUNDING VALUE',
    angle: 330,
    distance: 210,
    shortDescription: 'Compounding network loops. Maximizes customer lifetime value, retention, and referral advocacy.',
    roleInFootprint: 'Transforms individual transactions into enduring multi-year customer relationships and organic referrals.',
    connectedTo: ['data', 'marketing', 'social', 'search'],
    subsystemFlow: [
      { name: 'Retention Loops', code: 'GR-01', description: 'Cohort retention analysis, predictive drop-off alarms, and proactive customer re-engagement.', metrics: '+42% 90-day retention', signals: ['Cohort decay radar', 'Automated touchpoints'] },
      { name: 'Referral Dynamics', code: 'GR-02', description: 'Two-sided customer advocacy programs, shareable referral tokens, and brand ambassador hubs.', metrics: 'Viral K-factor > 1.15', signals: ['Referral tracking links', 'Reward automation'] },
      { name: 'LTV Optimization', code: 'GR-03', description: 'Personalized customer milestone gifts, tier VIP perks, and early-access drop privileges.', metrics: '+58% 12-month LTV', signals: ['Customer tier database', 'Personalized milestone API'] },
      { name: 'Category Dominance', code: 'GR-04', description: 'Defensible brand moats, co-marketing strategic ventures, and industry index ranking.', metrics: 'Category leader rank', signals: ['Share of voice monitor', 'Brand equity scoring'] },
      { name: 'Continuous Experimentation', code: 'GR-05', description: 'Weekly hypothesis testing, statistical significance validation, and iterative sprint deployment.', metrics: '4+ live tests weekly', signals: ['Bayesian testing engine', 'Experiment log archive'] }
    ],
    diagnosticQuestions: [
      'Do you lose 60%+ of customers after their initial purchase with zero repeat engagement?',
      'Is your customer acquisition cost increasing faster than your customer lifetime value?',
      'Are your most loyal customers incentivized and empowered to actively advocate for your brand?'
    ],
    liveSignalDemo: {
      type: 'growth',
      title: 'COMPOUNDING RETENTION & LTV ENGINE',
      metrics: [
        { label: 'Customer Repurchase', value: '41.2%', status: 'optimal' },
        { label: 'Viral Referral Lift', value: '+28.4%', status: 'optimal' },
        { label: 'Net CAC Payback', value: '3.1 months', status: 'optimal' }
      ],
      telemetryText: 'Compounding retention loops active. Second-purchase velocity up 62% via synchronized triggers.'
    }
  }
];

export const OUTCOME_SYSTEMS: OutcomeSystem[] = [
  {
    id: 'BUILD',
    headline: 'Brand + Web + Design',
    tagline: 'Architecting the foundational core that encodes visual authority, intuitive UX, and sovereign conversion.',
    primaryNodes: ['brand', 'web', 'design'],
    components: [
      { title: 'Brand Architecture', description: 'Mathematical design tokens, optical marks, typographical standards, and defensible positioning.', interconnects: 'Supplies raw design tokens directly to Web and Design systems.' },
      { title: 'Sovereign Website', description: 'Headless, ultra-fast web experiences engineered for high-intent conversion and brand immersion.', interconnects: 'Serves as the root destination for Search, Social, and Paid marketing.' },
      { title: 'Design System & Craft', description: 'Deliberate spatial layouts, tactile feedback, and intuitive decision pathways across all viewports.', interconnects: 'Eliminates optical friction and establishes immediate category credibility.' }
    ],
    synqOutcome: 'Transforms fragmented marketing collateral into an unshakeable digital asset that compounds brand equity.'
  },
  {
    id: 'DISCOVER',
    headline: 'SEO + Search + Content',
    tagline: 'Engineering deep discoverability across search engines, generative AI models, and topical authority hubs.',
    primaryNodes: ['search', 'content', 'growth'],
    components: [
      { title: 'Technical SEO Infrastructure', description: 'Semantic JSON-LD schemas, edge-rendered pages, and optimal crawl budget architecture.', interconnects: 'Ensures Web assets are instantly understood by search and AI crawlers.' },
      { title: 'Topical Authority Clusters', description: 'Exhaustive thematic content hubs that establish definitive category leadership.', interconnects: 'Attracts high-intent organic visitors and builds earned backlinks.' },
      { title: 'AI Engine Optimization (GEO)', description: 'Structuring knowledge bases so LLM answers (SearchGPT, Perplexity, Gemini) cite your brand as the answer.', interconnects: 'Captures the next generation of conversational query volume.' }
    ],
    synqOutcome: 'Positions your brand at the exact crossroads of customer inquiry, eliminating complete reliance on paid ads.'
  },
  {
    id: 'CONNECT',
    headline: 'Social + Community + Media',
    tagline: 'Building persistent, high-affinity relationships through synchronized narrative channels and active community dialogue.',
    primaryNodes: ['social', 'content', 'brand'],
    components: [
      { title: 'Native Social Footprint', description: 'Platform-specific POV storytelling across LinkedIn, X, Instagram, and YouTube.', interconnects: 'Transforms cold brand names into living cultural institutions.' },
      { title: 'High-Value Content Machinery', description: 'Original research, visual essays, podcasts, and video teardowns produced at scale.', interconnects: 'Feeds social algorithms and provides conversion proof on the web.' },
      { title: 'Community & Dialogue Engines', description: 'Active comment loops, expert webinars, and peer-to-peer customer ecosystems.', interconnects: 'Generates organic brand advocacy and raw customer feedback.' }
    ],
    synqOutcome: 'Replaces generic agency posting with an authentic narrative momentum that commands attention.'
  },
  {
    id: 'CONVERT',
    headline: 'Marketing + UX + Automation',
    tagline: 'Eliminating the distance between interest and transaction through scientific funnel design and autonomous triggers.',
    primaryNodes: ['marketing', 'web', 'automation'],
    components: [
      { title: 'Intent-Matched Campaigns', description: 'Dynamic, intent-matched advertising tailored to specific customer journey stages.', interconnects: 'Ensures marketing message scent remains unbroken upon arrival.' },
      { title: 'Frictionless UX & E-commerce', description: 'Accelerated checkout, cognitive load reduction, and instant mobile conversion paths.', interconnects: 'Dramatically lowers customer acquisition costs (CAC) across all channels.' },
      { title: 'Automated Pipeline Velocity', description: 'Sub-minute response workflows, smart SMS sequences, and calendar routing.', interconnects: 'Eliminates human delay while customer interest is at peak boiling point.' }
    ],
    synqOutcome: 'Turns casual visitors into verified pipeline and revenue without annoying hard-sell friction.'
  },
  {
    id: 'GROW',
    headline: 'Data + Optimization + Strategy',
    tagline: 'Unifying data streams to unlock exponential lifetime value, retention compounding, and predictable growth loops.',
    primaryNodes: ['data', 'growth', 'technology'],
    components: [
      { title: 'First-Party Data Truth (CDP)', description: 'First-party customer data tracking merged across all digital touchpoints.', interconnects: 'Gives leadership a single, unvarnished view of real customer economics.' },
      { title: 'Predictive Retention & LTV', description: 'Automated retention flows, churn prevention alerts, and tailored cross-sells.', interconnects: 'Maximizes customer LTV and minimizes reliance on new customer acquisition.' },
      { title: 'Strategic Architecture Optimization', description: 'Continuous footprint monitoring, broken link healing, and security perimeter defense.', interconnects: 'Guarantees your digital footprint never decays into technical debt.' }
    ],
    synqOutcome: 'Builds a resilient, self-optimizing commercial engine where every new effort strengthens the whole: THEY SYNQ.'
  }
];

export const DIGITAL_EXTENSION_TEAMS: DigitalExtensionTeam[] = [
  {
    id: 'web',
    needPrompt: 'Need a website?',
    teamTitle: 'We can be your web team.',
    shortRole: 'Headless Engineering & Modern Web Architecture',
    description: 'From clean code to sub-second load times, we build sovereign web platforms engineered to convert interest into revenue.',
    capabilities: ['Headless React / Next.js architecture', 'Core Web Vitals sub-second tuning', 'Interactive web applications', 'Mobile-first ergonomics'],
    deliverables: ['Production web application', 'Edge CDN configuration', 'Real-time telemetry dashboard', 'Component library'],
    interconnects: ['Brand Tokens', 'Search SEO Schema', 'Data Warehouse', 'E-commerce Checkout'],
    metricImpact: '< 0.9s LCP, 99+ PageSpeed score'
  },
  {
    id: 'seo',
    needPrompt: 'Need visibility?',
    teamTitle: 'We can be your SEO team.',
    shortRole: 'Algorithmic & Generative Search Interception',
    description: 'We position your brand at the exact moment of commercial inquiry across Google search and generative AI answer engines.',
    capabilities: ['Technical crawl optimization', 'Schema.org semantic graphs', 'Generative Engine Optimization (GEO)', 'Topical authority clusters'],
    deliverables: ['Complete SEO architecture audit', 'Semantic JSON-LD implementation', 'AI search citation blueprint', 'Keyword dominance roadmap'],
    interconnects: ['Website CMS', 'Editorial Content Hub', 'Analytics Attribution', 'Brand Knowledge Panel'],
    metricImpact: '100% crawl indexation, +240% organic reach'
  },
  {
    id: 'social',
    needPrompt: 'Need a social presence?',
    teamTitle: 'We can be your social team.',
    shortRole: 'Cultural POV & Platform-Native Distribution',
    description: 'We build an active cultural footprint that earns attention, humanizes the brand, and routes followers into owned digital assets.',
    capabilities: ['Platform-native editorial voice', 'Short-form visual storytelling', 'Community dialogue management', 'Creator & collab activations'],
    deliverables: ['Weekly native creative flights', 'Community engagement protocols', 'Social attribution tracking', 'Visual template frameworks'],
    interconnects: ['Brand Identity Core', 'Content Production Engine', 'Web Landing Experiences', 'CRM Lead Nurturing'],
    metricImpact: '+4.8x engagement velocity, zero audience bleed'
  },
  {
    id: 'content',
    needPrompt: 'Need content?',
    teamTitle: 'We can be your content team.',
    shortRole: 'High-Value Intellectual Capital Machinery',
    description: 'We translate your internal expertise into defensible research, interactive tools, editorial teardowns, and modular media.',
    capabilities: ['Original research & whitepapers', 'Interactive calculators & tools', '1-to-8 multi-channel repurposing', 'Editorial thought leadership'],
    deliverables: ['Monthly flagship asset releases', 'Atomized micro-content packages', 'Executive ghostwriting', 'Search-optimized articles'],
    interconnects: ['SEO Topical Clusters', 'Social Distribution', 'Email Automation', 'Sales Enablement'],
    metricImpact: '1:8 syndication factor, zero decayed content'
  },
  {
    id: 'marketing',
    needPrompt: 'Need campaigns?',
    teamTitle: 'We can be your marketing team.',
    shortRole: 'Precision Demand Generation & Capital Velocity',
    description: 'We deploy targeted capital across paid search, social, and narrative retargeting to predictably scale qualified demand.',
    capabilities: ['Paid search intent capture', 'Creative-led paid social testing', 'Sequenced narrative retargeting', 'Multi-touch attribution analysis'],
    deliverables: ['Live ad campaigns & bidding scripts', 'Dynamic creative testing matrix', 'Weekly ROAS & CAC telemetry', 'Landing page message matching'],
    interconnects: ['Web Conversion Engine', 'First-Party CDP Data', 'CRM Pipelines', 'E-commerce Checkout'],
    metricImpact: '-37% wasted ad spend, sub-4-month CAC payback'
  },
  {
    id: 'design',
    needPrompt: 'Need design?',
    teamTitle: 'We can be your design team.',
    shortRole: 'Mathematical Visual Systems & Spatial Craft',
    description: 'We craft distinctive visual identities, Figma-to-code design systems, and tactile digital experiences that command authority.',
    capabilities: ['Design token systems', 'Optical brand marks & typography', 'Tactile kinetic micro-interactions', 'Commercial deck & collateral design'],
    deliverables: ['Figma design token repo', 'Component library guidelines', 'Vector asset ecosystem', 'Packaging & digital collateral'],
    interconnects: ['Brand Voice', 'Web Application', 'Content Formats', 'Marketing Creative'],
    metricImpact: '100% design token parity, AAA accessibility'
  },
  {
    id: 'technology',
    needPrompt: 'Need technology?',
    teamTitle: 'We can be your technology team.',
    shortRole: 'Serverless APIs, Edge Infrastructure & Cloud Stability',
    description: 'We eliminate technical debt and server bottlenecks with resilient serverless edge runtimes, modern APIs, and automated pipelines.',
    capabilities: ['Serverless edge compute', 'Unified API & webhook mesh', 'Automated CI/CD workflows', 'Zero-trust perimeter security'],
    deliverables: ['Edge infrastructure setup', 'API documentation & bridges', 'Automated deployment pipelines', 'Security audit report'],
    interconnects: ['Web Frontend', 'Data Warehouse', 'Automation Workflows', 'E-commerce Engine'],
    metricImpact: '< 18ms API latency, 99.99% edge uptime'
  },
  {
    id: 'ecommerce',
    needPrompt: 'Need e-commerce?',
    teamTitle: 'We can be your e-commerce team.',
    shortRole: 'Frictionless Transaction & Cart Velocity',
    description: 'We build zero-friction checkout experiences, automated inventory feeds, and recurring subscription portals that drive transactions.',
    capabilities: ['Accelerated express checkout', 'Stock-aware advertising sync', 'Subscription & customer portals', 'Dynamic merchandising rules'],
    deliverables: ['Storefront conversion setup', 'Payment gateway integration', 'Inventory sync webhooks', 'Post-purchase upsell funnel'],
    interconnects: ['Web Storefront', 'Marketing Ad Feeds', 'Automation Lifecycle', 'Data Analytics'],
    metricImpact: '+32% checkout completion, +26% AOV'
  },
  {
    id: 'digital',
    needPrompt: 'Need everything connected?',
    teamTitle: 'We can be your digital team.',
    shortRole: 'The Entire Synchronized System',
    description: 'The full SYNQ-SQUARE operating environment. We orchestrate Brand, Web, Social, Search, Content, Marketing, Design, Tech, Data, Automation, E-commerce, and Growth into one synchronized footprint.',
    capabilities: ['Full digital footprint architecture', 'Cross-functional synchronization', 'Continuous footprint auditing', 'Unified executive telemetry'],
    deliverables: ['Complete 12-node digital ecosystem', 'Single point of strategic contact', 'Autonomous self-healing workflows', 'Real-time telemetry dashboard'],
    interconnects: ['ALL 12 POSSIBILITIES SYNCHRONIZED'],
    metricImpact: 'Zero departmental silos, exponential footprint compounding'
  }
];

export const SYNQ_PRINCIPLE_MODES = [
  {
    id: 'ONE_SPECIALIST',
    title: 'ONE SPECIALIST',
    subtitle: 'Solve One Critical Piece',
    tagline: 'Targeted surgical intervention for a specific bottleneck.',
    description: 'Need a website? We can be your web team. Need visibility? We can be your SEO team. Step in exactly where you need us with zero overhead.',
    idealFor: 'Brands with existing internal capabilities that need elite execution in one specific domain.',
    characteristics: ['Zero long-term lock-in', 'Rapid time-to-deployment', 'Direct domain specialist access', 'Integrates into existing workflow']
  },
  {
    id: 'ONE_TEAM',
    title: 'ONE TEAM',
    subtitle: 'Connect Several Key Pieces',
    tagline: 'A unified pod working across adjacent disciplines without agency silos.',
    description: 'Customers don’t experience SEO, Website, Social, and Content separately—they experience the brand. We connect your chosen pieces under one cohesive team.',
    idealFor: 'Growing brands tired of mediating between 3 different agencies who point fingers at each other.',
    characteristics: ['Cross-functional synchronization', 'Shared data & creative tokens', 'Single point of contact', 'Shared accountability for revenue']
  },
  {
    id: 'ENTIRE_SYSTEM',
    title: 'AN ENTIRE DIGITAL SYSTEM',
    subtitle: 'The Full Digital Footprint',
    tagline: 'Orchestrating every touchpoint into one self-reinforcing commercial engine.',
    description: 'We build, repair, expand, and synchronize your entire digital footprint from Brand to Web, Search, Social, Content, Tech, Automation, and Growth: THEY SYNQ.',
    idealFor: 'Visionary brands ready to build a category-defining digital presence with maximum compounding power.',
    characteristics: ['100% synchronized digital footprint', 'Autonomous data-driven workflows', 'Unified telemetry & attribution', 'Compounding network effects']
  }
];

export const CASE_INTERVENTIONS: CaseIntervention[] = [
  {
    id: 'dtc-fashion',
    clientArchetype: 'Luxury Footwear & Sustainable Apparel Label',
    sector: 'Luxury Direct-to-Consumer / Global E-commerce',
    timeline: '8-Week Full Footprint Intervention',
    before: {
      existingAssets: 'Shopify storefront with heavy third-party app bloat, fragmented Instagram/TikTok creative, and zero retention email automation.',
      scale: 'Global presence, shipping to 34 countries, 650K social followers with flatline e-commerce conversion.'
    },
    fragmentation: {
      breakagePoints: [
        'Mobile web load speed was 4.9 seconds due to 28 uncoordinated tracking scripts.',
        'Social posts directed users to out-of-stock product pages with no back-in-stock notification system.',
        'First-time buyers never received post-purchase care sequences, creating high one-and-done dropoff.',
        'Customer reviews were trapped in a third-party widget invisible to Google rich search snippets.'
      ],
      inefficiencyDrag: '42% cart abandonment directly attributable to sluggish mobile checkout and message mismatch.'
    },
    intervention: {
      architecture: 'Omnichannel Narrative Synchronization & Performance Edge',
      engineeredLayers: [
        'Migrated to lean headless commerce core with instantaneous mobile micro-interactions.',
        'Synchronized live inventory feeds with social ads to prevent promoting out-of-stock pieces.',
        'Engineered high-touch post-purchase concierge automation with personalized styling recommendations.',
        'Unified 4,200+ verified customer reviews into a structured schema graph indexing in Google Shopping.'
      ]
    },
    synchronization: {
      howTouchpointsUnified: 'Social storytelling now flows directly into real-time stock-aware web showcases, immediately connecting customer purchase history into predictive replenishment triggers.',
      syncPipeline: ['Cultural Social Content', 'Stock-Aware Ad Engine', 'Zero-Latency Checkout', 'Concierge Retention Workflows']
    },
    outcome: {
      metric1: { label: 'Mobile Conversion Rate', value: '+74.6%', shift: 'Increased from 1.34% to 2.34%' },
      metric2: { label: 'Customer Repeat Rate (60-day)', value: '+62%', shift: 'Repeat revenue became 38% of total gross' },
      metric3: { label: 'Mobile PageSpeed', value: '98 / 100', shift: 'Load time dropped from 4.9s to 0.72s' },
      verifiedSummary: 'Verified cross-channel audit: Advertising efficiency hit record highs while brand equity remained pristine.'
    }
  },
  {
    id: 'b2b-intelligence',
    clientArchetype: 'Enterprise Cyber Security & Data Privacy Provider',
    sector: 'Enterprise Cyber / Deep Tech',
    timeline: '12-Week Sovereign Perimeter Deployment',
    before: {
      existingAssets: 'Dense corporate website with impenetrable jargon, disconnected PR agency efforts, and zero measurable inbound pipeline.',
      scale: 'Enterprise vendor serving Fortune 1000, dependent almost entirely on expensive trade shows and outbound cold calling.'
    },
    fragmentation: {
      breakagePoints: [
        'PR agency secured placements that lacked backlinks or clear calls-to-action back to core solutions.',
        'Whitepapers required a 12-field form that turned away 91% of qualified CISO visitors.',
        'G2 and Gartner review profiles were completely unmonitored and outdated.',
        'Content team wrote articles on topics nobody was searching for, producing zero organic discovery.'
      ],
      inefficiencyDrag: 'Enterprise sales cycles dragged past 9 months due to lack of digital credibility during initial buyer vetting.'
    },
    intervention: {
      architecture: 'Topical Authority Knowledge Graph & Frictionless Verification Hub',
      engineeredLayers: [
        'Created interactive Threat Assessment Tool that delivers instant executive value before requesting an email.',
        'Harmonized C-suite personal LinkedIn platforms with published whitepapers, creating credible organic distribution.',
        'Automated customer review generation pipeline triggered immediately upon successful customer deployments.',
        'Deployed server-side first-party attribution tracking every touchpoint across the 6-month enterprise journey.'
      ]
    },
    synchronization: {
      howTouchpointsUnified: 'Third-party media coverage now reinforces the exact same strategic problem addressed by the interactive threat tool, feeding sales reps real-time intel on what threat vectors the client explored.',
      syncPipeline: ['Authoritative PR', 'Interactive Diagnostic Tool', 'Threat Knowledge Graph', 'Executive Social Synergies']
    },
    outcome: {
      metric1: { label: 'Enterprise Inbound Demos', value: '+420%', shift: 'From 4 per quarter to 21 qualified enterprise inquiries' },
      metric2: { label: 'Search Visibility in Category', value: '#1 Ranking', shift: 'Captured 8 of 10 primary security intent keywords' },
      metric3: { label: 'Sales Cycle Compression', value: '-35 Days', shift: 'Prospective buyers arrived pre-educated and pre-sold' },
      verifiedSummary: 'Verified pipeline analysis confirmed enterprise contracts closed with zero cold outbound required.'
    }
  }
];

export const SCORECARD_DIMENSIONS: ScorecardDimension[] = [
  {
    id: 'VISIBILITY',
    name: 'VISIBILITY',
    weight: 18,
    benchmarkScore: 78,
    definition: 'The total physical real estate your brand controls across search, social, media, and digital directories.',
    measurementCriteria: [
      'Total indexed URLs and knowledge graph presence',
      'Share of voice across target search terms',
      'Follower reach and aggregate weekly brand impressions',
      'Third-party directory completeness and claim status'
    ],
    fragmentedSignal: 'High impressions on one channel (e.g. Instagram) with zero visibility on Google or AI search.',
    synchronizedSignal: 'Harmonious multi-channel reach where every platform amplifies discoverability.'
  },
  {
    id: 'CONSISTENCY',
    name: 'CONSISTENCY',
    weight: 16,
    benchmarkScore: 84,
    definition: 'Typographical, visual, and conceptual alignment across every single external digital touchpoint.',
    measurementCriteria: [
      'Universal design token adoption and color space accuracy',
      'Voice, tone, and positioning uniform across web and ads',
      'Unified NAP (Name, Address, Phone) across 50+ directories',
      'Brand logo, banner, and favicon precision on every platform'
    ],
    fragmentedSignal: 'Creative styles look designed by three separate agencies who never talk to each other.',
    synchronizedSignal: 'Uncompromising design token parity across mobile, web, email, ads, and collateral.'
  },
  {
    id: 'VELOCITY',
    name: 'VELOCITY',
    weight: 16,
    benchmarkScore: 74,
    definition: 'Speed of page load, user journey friction, checkout speed, and response time to inbound buyer intent.',
    measurementCriteria: [
      'Sub-second Core Web Vitals across all viewports',
      'Single-click checkout flow for high-intent buyers',
      'Sub-minute automated response time for inbound demo requests',
      'Rapid deployment pipelines for creative testing'
    ],
    fragmentedSignal: 'Slow mobile load times and manual sales triage that loses hot prospects.',
    synchronizedSignal: 'Edge-rendered interfaces and automated lead routing acting sub-second.'
  },
  {
    id: 'CONNECTIVITY',
    name: 'CONNECTIVITY',
    weight: 18,
    benchmarkScore: 68,
    definition: 'The extent to which data, assets, and workflows communicate seamlessly across channels.',
    measurementCriteria: [
      'Continuous bidirectional data flow between CRM and web forms',
      'Social content dynamically routed to web showcases',
      'Stock and inventory feeds connected to live ad budgets',
      'Event triggers activating tailored re-engagement sequences'
    ],
    fragmentedSignal: 'Siloed departments working in isolation with unshared data spreadsheets.',
    synchronizedSignal: 'A single synchronized digital operating system where all 12 possibilities connect.'
  },
  {
    id: 'AUTHORITY',
    name: 'AUTHORITY',
    weight: 16,
    benchmarkScore: 82,
    definition: 'Defensible category leadership recognized by algorithms, LLM answer engines, and human decision makers.',
    measurementCriteria: [
      'Semantic citations in generative AI search tools',
      'Tier 1 publication backlink portfolio',
      'Executive thought leadership and verified brand entities',
      'High-intent category keyword dominance'
    ],
    fragmentedSignal: 'Weak entity footprint with low trust signals on third-party verification nodes.',
    synchronizedSignal: 'Definitive category authority cited as the default standard in your industry.'
  },
  {
    id: 'COMPOUNDING',
    name: 'COMPOUNDING',
    weight: 16,
    benchmarkScore: 71,
    definition: 'The degree to which digital efforts generate enduring, reusable value rather than one-time spikes.',
    measurementCriteria: [
      'Evergreen content traffic compounding year-over-year',
      'Customer repeat purchase rate and subscription durability',
      'Viral referral coefficients and organic brand search volume',
      'First-party data asset equity multiplying over time'
    ],
    fragmentedSignal: 'Traffic and sales collapse the second paid ad spend is turned off.',
    synchronizedSignal: 'A self-reinforcing digital flywheel where every touchpoint accelerates the whole.'
  }
];

export const FOOTPRINT_FLOW_STEPS = [
  { id: 'brand', label: 'Brand', detail: 'Identity & authority encoded' },
  { id: 'web', label: 'Web', detail: 'Sovereign anchor deployed' },
  { id: 'search', label: 'Search', detail: 'Discovered by algorithms & LLMs' },
  { id: 'social', label: 'Social', detail: 'Cultural momentum unleashed' },
  { id: 'content', label: 'Content', detail: 'Intellectual capital circulating' },
  { id: 'marketing', label: 'Marketing', detail: 'Qualified demand amplified' },
  { id: 'design', label: 'Design', detail: 'Tactile craft & optical clarity' },
  { id: 'technology', label: 'Tech', detail: 'Edge compute & API mesh' },
  { id: 'data', label: 'Data', detail: 'Behavioral truth recorded' },
  { id: 'automation', label: 'Auto', detail: 'Sub-second triggers active' },
  { id: 'ecommerce', label: 'Commerce', detail: 'Transactions unlocked' },
  { id: 'growth', label: 'Growth', detail: 'Compounding network loops' }
];
