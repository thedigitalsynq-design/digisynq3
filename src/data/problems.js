// Hero floating problem nodes & their 6-stage progressive root-cause traces
// Strictly aligned with FIX-SYNQ Root-Cause Intelligence Taxonomy

export const PROBLEM_NODES = [
  {
    id: 'production-delay',
    code: 'PRB-01',
    label: 'PRODUCTION DELAY',
    category: 'PROCESS',
    tagline: 'Principal photography halted by 14 days, compounding daily burn rates.',
    steps: {
      1: {
        title: 'STEP 1: VISIBLE PROBLEM IDENTIFIED',
        badge: 'SURFACE SYMPTOM',
        headline: 'PRODUCTION DELAY',
        description: 'A 24-day principal photography schedule experiences rolling 48-hour delays. The studio instinctively blames on-set logistical friction, crew speed, and weather variances.',
        metric: '+38% Schedule Overrun',
        affectedNode: 'PRODUCTION DELAY'
      },
      2: {
        title: 'STEP 2: TRACING CONTRIBUTING FACTORS',
        badge: 'CONTRIBUTING LAYER',
        headline: 'SCHEDULING & HOLDS COLLISION',
        description: 'Tracing backwards reveals third-tier crew and specialist camera rigs had non-binding second holds overlapping with another delayed tentpole.',
        metric: '7 Broken Dependencies',
        affectedNode: 'SCHEDULING'
      },
      3: {
        title: 'STEP 3: DEEPER ROOT CAUSE EMERGES',
        badge: 'STRUCTURAL ROOT CAUSE',
        headline: 'INFORMATION GAP & ASYMMETRIC VISIBILITY',
        description: 'Casting, line producers, and department heads use siloed offline schedules. Real-time availability changes are never broadcast across the vendor-talent mesh.',
        metric: 'Zero Centralized Truth',
        affectedNode: 'INFORMATION GAP'
      },
      4: {
        title: 'STEP 4: AFFECTED STAKEHOLDERS MAPPED',
        badge: 'SYSTEMIC IMPACT',
        headline: 'CASCADING TO 5 KEY STAKEHOLDERS',
        description: 'The root cause ripples horizontally: Technicians lose booked windows; Equipment Providers absorb idle capital; Studios inflate contingency; Financiers face risk exposure.',
        stakeholders: ['TECHNICIANS', 'PRODUCERS', 'EQUIPMENT PROVIDERS', 'STUDIOS', 'FINANCE'],
        metric: '5 Ecosystem Nodes Impacted'
      },
      5: {
        title: 'STEP 5: INTERVENTION LEVERAGE POINTS LOCATED',
        badge: 'INTERVENTION VECTOR',
        headline: 'COORDINATION PROTOCOL + AVAILABILITY SYNC',
        description: 'Intervention does not mean adding more crew. It requires standardizing dynamic hold release protocols and connecting cross-production scheduling feeds.',
        interventionTypes: ['COORDINATE', 'STANDARDISE', 'CONNECT'],
        metric: 'High Leverage: 82%'
      },
      6: {
        title: 'STEP 6: WHAT COULD BE MEASURED',
        badge: 'EMPIRICAL DELTA',
        headline: 'MEASURABLE OPERATIONAL CHANGE',
        description: 'Rather than subjective relief, FIX-SYNQ audits hard operational deltas: schedule slippage variance arrested, daily unproductive standby burn eliminated, and cross-department visibility extended from 4 hours to 48 hours.',
        dimensions: ['TIME', 'COST', 'EFFICIENCY'],
        measurableMetrics: [
          { label: 'Schedule Variance', before: '+38% Delay', target: '<2% Delta' },
          { label: 'Standby Cost Burn', before: 'High Surcharges', target: 'Zero Fee Recurrence' },
          { label: 'Visibility Horizon', before: '4 Hours (Reactive)', target: '48 Hours (Predictive)' }
        ],
        conclusionAction: 'Deploy Coordination Protocol & Resource Sync',
        callout: 'A delay is not a time problem. It is a communication and dependency failure.'
      }
    },
    traceChain: ['PRODUCTION DELAY', 'SCHEDULING', 'TALENT AVAILABILITY', 'INFORMATION GAP', 'FRAGMENTED NETWORK']
  },
  {
    id: 'high-cost',
    code: 'PRB-02',
    label: 'HIGH COST',
    category: 'MONEY',
    tagline: 'Per-minute production expenditure surges beyond budgeted modeling.',
    steps: {
      1: {
        title: 'STEP 1: VISIBLE PROBLEM IDENTIFIED',
        badge: 'SURFACE SYMPTOM',
        headline: 'HIGH COST',
        description: 'Budget estimates variance spikes by 31% mid-production. Executive reaction is often arbitrary across-the-board line item trimming that damages screen quality.',
        metric: '+31% Budget Variance',
        affectedNode: 'HIGH COST'
      },
      2: {
        title: 'STEP 2: TRACING CONTRIBUTING FACTORS',
        badge: 'CONTRIBUTING LAYER',
        headline: 'RUSH SURCHARGES & LAST-MINUTE PROCUREMENT',
        description: 'High costs are driven by premium overtime rates, expedited air-freight for specialty lenses, and emergency vendor contracts negotiated under pressure.',
        metric: '4.2x Rush Premium',
        affectedNode: 'PROCUREMENT FRICTION'
      },
      3: {
        title: 'STEP 3: DEEPER ROOT CAUSE EMERGES',
        badge: 'STRUCTURAL ROOT CAUSE',
        headline: 'REACTIVE PLANNING & UNVERIFIED SPECIFICATIONS',
        description: 'Creative script revisions were signed off without cross-verifying asset feasibility with VFX supervisors and physical rigging leads.',
        metric: 'Unvalidated Revisions',
        affectedNode: 'UNALIGNED WORKFLOW'
      },
      4: {
        title: 'STEP 4: AFFECTED STAKEHOLDERS MAPPED',
        badge: 'SYSTEMIC IMPACT',
        headline: 'EXPENSES SPILL ACROSS THE PIPELINE',
        description: 'Financiers demand debt servicing; Vendors compress margins; Producers face completion bond audits; Post houses receive unoptimized plates.',
        stakeholders: ['FINANCIERS', 'PRODUCERS', 'VFX / ANIMATION', 'VENDORS', 'LEGAL / FINANCE / INSURANCE'],
        metric: 'Cross-Sector Margin Drain'
      },
      5: {
        title: 'STEP 5: INTERVENTION LEVERAGE POINTS LOCATED',
        badge: 'INTERVENTION VECTOR',
        headline: 'FEASIBILITY GATING + VENDOR AGGREGATION',
        description: 'Establish automated feasibility checkpoints at script sign-off and aggregate cross-department rental procurement windows.',
        interventionTypes: ['ORGANISE', 'REDESIGN', 'MATCH'],
        metric: 'Cost Exposure Reduced ~24%'
      },
      6: {
        title: 'STEP 6: WHAT COULD BE MEASURED',
        badge: 'EMPIRICAL DELTA',
        headline: 'MEASURABLE OPERATIONAL CHANGE',
        description: 'Trimming catering or VFX artist rates does not stop high costs. Fixing upstream feasibility validation stops emergency rush premiums before they start.',
        dimensions: ['COST', 'RISK', 'EFFICIENCY'],
        measurableMetrics: [
          { label: 'Emergency Rush Outlays', before: '31% of Budget', target: '<5% Controlled' },
          { label: 'Completion Bond Reserve', before: '100% Locked', target: '80% Released Early' },
          { label: 'Procurement Window', before: '24-48 Hours', target: '14-Day Advance Sync' }
        ],
        conclusionAction: 'Institutionalize Upstream Feasibility Gating',
        callout: 'Cost inflation is the symptom of decisions made without dependency visibility.'
      }
    },
    traceChain: ['HIGH COST', 'RUSH PROCUREMENT', 'REACTIVE PLANNING', 'SPECIFICATION GAP', 'ISOLATED CREATIVE PIPELINE']
  },
  {
    id: 'idle-resources',
    code: 'PRB-03',
    label: 'IDLE RESOURCES',
    category: 'RESOURCES',
    tagline: 'High-capital soundstages, cinema cameras, and optics sit parked in warehouses.',
    steps: {
      1: {
        title: 'STEP 1: VISIBLE PROBLEM IDENTIFIED',
        badge: 'SURFACE SYMPTOM',
        headline: 'IDLE RESOURCES',
        description: 'High-end cinema optics, robotic crane packages, and multi-million dollar soundstages sit empty for 18 days a month earning zero yield.',
        metric: '32% Capital Utilization',
        affectedNode: 'IDLE RESOURCES'
      },
      2: {
        title: 'STEP 2: TRACING CONTRIBUTING FACTORS',
        badge: 'CONTRIBUTING LAYER',
        headline: 'REGIONAL LIQUIDITY GAPS & UNMATCHED WINDOWS',
        description: 'Rental houses rely on legacy phone calls and personal rolodexes to locate nearby tier-1 shoots seeking interim equipment.',
        metric: 'Unmatched 5-7 Day Gaps',
        affectedNode: 'DISCOVERY FAILURE'
      },
      3: {
        title: 'STEP 3: DEEPER ROOT CAUSE EMERGES',
        badge: 'STRUCTURAL ROOT CAUSE',
        headline: 'ABSENCE OF INTEROPERABLE INVENTORY TELEMETRY',
        description: 'No unified asset registry exists across independent hire houses. Hardware availability remains invisible to active productions 40km away.',
        metric: 'Zero Dynamic Sharing',
        affectedNode: 'OPAQUE INVENTORY'
      },
      4: {
        title: 'STEP 4: AFFECTED STAKEHOLDERS MAPPED',
        badge: 'SYSTEMIC IMPACT',
        headline: 'CAPITAL DEPRECIATION LOCKOUT',
        description: 'Equipment providers absorb interest payments; Stage owners suffer dark days; Technicians lack familiar gear on location; Investors face dead assets.',
        stakeholders: ['EQUIPMENT PROVIDERS', 'STUDIOS', 'PRODUCERS', 'DIRECTORS', 'INVESTORS'],
        metric: 'Dead Capital in Idle State'
      },
      5: {
        title: 'STEP 5: INTERVENTION LEVERAGE POINTS LOCATED',
        badge: 'INTERVENTION VECTOR',
        headline: 'DYNAMIC ASSET POOLING + INTER-HOUSE CLEARING',
        description: 'Connect fragmented rental inventories and dark stage days through a trusted availability protocol without requiring houses to merge.',
        interventionTypes: ['UTILISE', 'CONNECT', 'COMMERCIALISE'],
        metric: 'Utilization Upside +45%'
      },
      6: {
        title: 'STEP 6: WHAT COULD BE MEASURED',
        badge: 'EMPIRICAL DELTA',
        headline: 'MEASURABLE OPERATIONAL CHANGE',
        description: 'The solution is not slashing daily rental rates. It is connecting disparate inventory and facility data into an active availability mesh.',
        dimensions: ['UTILISATION', 'REVENUE', 'COST'],
        measurableMetrics: [
          { label: 'Asset Utilization Rate', before: '32% Active', target: '78% Optimized' },
          { label: 'Unmatched Idle Windows', before: '18 Days/Mo Dark', target: '<4 Days Residual' },
          { label: 'Depreciation Offset', before: 'Zero Return', target: '+34% Asset Yield' }
        ],
        conclusionAction: 'Implement Inter-House Asset Mesh',
        callout: 'An idle resource is an information failure, not an equipment failure.'
      }
    },
    traceChain: ['IDLE RESOURCES', 'DISCOVERY GAPS', 'OPAQUE INVENTORY', 'SILOED HOUSES', 'ABSENCE OF ASSET PROTOCOLS']
  },
  {
    id: 'talent-gap',
    code: 'PRB-04',
    label: 'TALENT GAP',
    category: 'PEOPLE',
    tagline: 'Critical technical and specialized roles cannot be staffed despite thousands seeking industry work.',
    steps: {
      1: {
        title: 'STEP 1: VISIBLE PROBLEM IDENTIFIED',
        badge: 'SURFACE SYMPTOM',
        headline: 'TALENT GAP',
        description: 'Productions stall looking for virtual production operators, senior colorists, stunt coordinators, and post-production supervisors.',
        metric: '6 Weeks Mean Time to Hire',
        affectedNode: 'TALENT GAP'
      },
      2: {
        title: 'STEP 2: TRACING CONTRIBUTING FACTORS',
        badge: 'CONTRIBUTING LAYER',
        headline: 'CREDENTIAL MISTRUST & INSULAR HIRING LOOPS',
        description: 'Department heads hire strictly from immediate acquaintance networks, excluding qualified operators outside the central circle.',
        metric: '88% Closed-Loop Hiring',
        affectedNode: 'CLOSED NETWORKS'
      },
      3: {
        title: 'STEP 3: DEEPER ROOT CAUSE EMERGES',
        badge: 'STRUCTURAL ROOT CAUSE',
        headline: 'LACK OF VERIFIABLE SKILL STANDARDIZATION',
        description: 'Credits on trade websites do not reflect hands-on tool competency or specific pipeline mastery. Studios have no standardized metric to evaluate crew reliability.',
        metric: 'Zero Verified Skills Matrix',
        affectedNode: 'UNSTANDARDIZED CAPABILITIES'
      },
      4: {
        title: 'STEP 4: AFFECTED STAKEHOLDERS MAPPED',
        badge: 'SYSTEMIC IMPACT',
        headline: 'BURNOUT SPREADS TO CORE CREW',
        description: 'Existing senior operators are overworked to exhaustion; New talent is locked out; Producers pay hyper-inflated premiums; Educational bodies lack alignment.',
        stakeholders: ['CREATORS', 'TECHNICIANS', 'PRODUCERS', 'EDUCATION', 'TALENT MANAGEMENT'],
        metric: 'Critical Operator Deficit'
      },
      5: {
        title: 'STEP 5: INTERVENTION LEVERAGE POINTS LOCATED',
        badge: 'INTERVENTION VECTOR',
        headline: 'COMPETENCY VERIFICATION + SHADOW-CREW DEPLOYMENT',
        description: 'Institute standard skill matrices and shadow-crew deployment frameworks that de-risk hiring proven emergent technicians.',
        interventionTypes: ['STANDARDISE', 'TRAIN', 'MATCH'],
        metric: 'Talent Pool Expansion 3.4x'
      },
      6: {
        title: 'STEP 6: WHAT COULD BE MEASURED',
        badge: 'EMPIRICAL DELTA',
        headline: 'MEASURABLE OPERATIONAL CHANGE',
        description: 'Do not just complain of "lack of talent". Build the trust verification infrastructure that turns capable practitioners into qualified crew.',
        dimensions: ['QUALITY', 'TIME', 'EFFICIENCY'],
        measurableMetrics: [
          { label: 'Time-to-Staff Critical Roles', before: '6 Weeks Latency', target: '<72 Hours Verified' },
          { label: 'Hiring Network Aperture', before: '12-Person Circle', target: '250+ Verified Matrix' },
          { label: 'On-Set Tool Onboarding', before: '3 Days Lag', target: 'Zero Ramp Latency' }
        ],
        conclusionAction: 'Establish Verified Capability Protocols',
        callout: 'The bottleneck is not human potential. It is verification and trust transmission.'
      }
    },
    traceChain: ['TALENT GAP', 'INSULAR HIRING', 'CREDENTIAL MISTRUST', 'UNSTANDARDIZED SKILLS', 'DISCONNECTED PIPELINE']
  },
  {
    id: 'rights-underuse',
    code: 'PRB-05',
    label: 'RIGHTS UNDERUSE',
    category: 'RIGHTS',
    tagline: 'Ancillary, remake, gaming, and regional window licensing revenues lapse unmonetized.',
    steps: {
      1: {
        title: 'STEP 1: VISIBLE PROBLEM IDENTIFIED',
        badge: 'SURFACE SYMPTOM',
        headline: 'RIGHTS UNDERUSE',
        description: 'Valuable catalog titles sit dormant on streaming servers while international remake, airline, and gaming adaptations expire unnoticed.',
        metric: '64% Dormant Ancillary IP',
        affectedNode: 'RIGHTS UNDERUSE'
      },
      2: {
        title: 'STEP 2: TRACING CONTRIBUTING FACTORS',
        badge: 'CONTRIBUTING LAYER',
        headline: 'UNINDEXED CONTRACT CHAINS & AMBIGUOUS CARVE-OUTS',
        description: 'Historical distribution agreements exist as scanned PDFs in offline legal filing cabinets with buried reversion clauses.',
        metric: 'Hundreds of Opaque Clauses',
        affectedNode: 'CONTRACT DORMIS'
      },
      3: {
        title: 'STEP 3: DEEPER ROOT CAUSE EMERGES',
        badge: 'STRUCTURAL ROOT CAUSE',
        headline: 'FRAGMENTED CHAIN-OF-TITLE & RIGHTS METADATA',
        description: 'No programmatic bridge connects legal contracts to sales distribution teams. Buyers cannot easily query what territories are legally unencumbered.',
        metric: 'Missing Structured Metadata',
        affectedNode: 'RIGHTS OPACITY'
      },
      4: {
        title: 'STEP 4: AFFECTED STAKEHOLDERS MAPPED',
        badge: 'SYSTEMIC IMPACT',
        headline: 'LEAKAGE ACROSS CREATIVE & FINANCIAL CHAINS',
        description: 'IP Owners forgo royalty streams; Writers miss residual payments; OTT platforms miss catalog opportunities; Financiers write down asset values.',
        stakeholders: ['IP / RIGHTS OWNERS', 'WRITERS', 'FINANCIERS', 'DISTRIBUTION', 'LEGAL / FINANCE / INSURANCE'],
        metric: 'Substantial Untapped Valuation'
      },
      5: {
        title: 'STEP 5: INTERVENTION LEVERAGE POINTS LOCATED',
        badge: 'INTERVENTION VECTOR',
        headline: 'DIGITAL RIGHTS LEDGER + PROACTIVE WINDOW AUDIT',
        description: 'Translate legal covenants into queryable rights parameters, triggering automated notices ahead of reversion windows.',
        interventionTypes: ['ORGANISE', 'COMMERCIALISE', 'STANDARDISE'],
        metric: 'Rights Reactivation Yield +29%'
      },
      6: {
        title: 'STEP 6: WHAT COULD BE MEASURED',
        badge: 'EMPIRICAL DELTA',
        headline: 'MEASURABLE OPERATIONAL CHANGE',
        description: 'Instead of waiting for an opportunistic buyer to call, structure legal rights metadata so assets are perpetually marketable.',
        dimensions: ['REVENUE', 'UTILISATION', 'RISK'],
        measurableMetrics: [
          { label: 'Catalog Commercialization', before: '<4% Backlist Yield', target: '42% Active Licensure' },
          { label: 'Legal Audit Latency', before: '9+ Weeks/Query', target: '<48 Hours Instant Clear' },
          { label: 'Unencumbered Windows Monitored', before: 'Zero Tracking', target: '100% Machine-Readable' }
        ],
        conclusionAction: 'Deploy Machine-Readable Rights Matrix',
        callout: 'Intellectual property is only valuable when its boundaries are clear and actionable.'
      }
    },
    traceChain: ['RIGHTS UNDERUSE', 'UNINDEXED CONTRACTS', 'FRAGMENTED TITLE', 'METADATA VOID', 'PASSIVE EXPLOITATION']
  },
  {
    id: 'audience-discovery',
    code: 'PRB-06',
    label: 'AUDIENCE DISCOVERY',
    category: 'AUDIENCE',
    tagline: 'High-quality completed films collapse at release with negligible theatrical or digital reach.',
    steps: {
      1: {
        title: 'STEP 1: VISIBLE PROBLEM IDENTIFIED',
        badge: 'SURFACE SYMPTOM',
        headline: 'AUDIENCE DISCOVERY',
        description: 'Acclaimed independent and mid-budget features open to empty cinema halls and get buried inside algorithm queues within 48 hours.',
        metric: '82% Drop-off in Week 1',
        affectedNode: 'AUDIENCE DISCOVERY'
      },
      2: {
        title: 'STEP 2: TRACING CONTRIBUTING FACTORS',
        badge: 'CONTRIBUTING LAYER',
        headline: 'BLUNT-FORCE PROMOTION & EXHAUSTED BUDGETS',
        description: 'Producers exhaust capital on physical production, leaving generic billboards and spray-and-pray digital spend for release week.',
        metric: '70% Spend in Wrong Demographics',
        affectedNode: 'MARKETING COMPRESSION'
      },
      3: {
        title: 'STEP 3: DEEPER ROOT CAUSE EMERGES',
        badge: 'STRUCTURAL ROOT CAUSE',
        headline: 'DISCONNECTED COMMUNITY SIGNALS PRIOR TO WRAP',
        description: 'Audience cultivation begins at trailer drop rather than during development. The core passionate niche was never identified, seeded, or engaged.',
        metric: 'Late Audience Integration',
        affectedNode: 'DISCONNECTED SIGNALS'
      },
      4: {
        title: 'STEP 4: AFFECTED STAKEHOLDERS MAPPED',
        badge: 'SYSTEMIC IMPACT',
        headline: 'THE ENTIRE EXHIBITION CHAIN CONTRACTS',
        description: 'Theatres replace screens with Hollywood sequels; Producers lose equity; Audiences miss resonant narratives; PR agencies take the blame.',
        stakeholders: ['THEATRES', 'PRODUCERS', 'AUDIENCE', 'PR / MEDIA', 'DISTRIBUTION'],
        metric: 'Exhibition Window Compression'
      },
      5: {
        title: 'STEP 5: INTERVENTION LEVERAGE POINTS LOCATED',
        badge: 'INTERVENTION VECTOR',
        headline: 'NICHE CLUSTER TARGETING + EARNED COMMUNITY SYNC',
        description: 'Align distribution footprint with verified niche cultural clusters rather than nationwide blanket releases.',
        interventionTypes: ['MATCH', 'COORDINATE', 'REDESIGN'],
        metric: 'Discovery Efficiency 2.8x'
      },
      6: {
        title: 'STEP 6: WHAT COULD BE MEASURED',
        badge: 'EMPIRICAL DELTA',
        headline: 'MEASURABLE OPERATIONAL CHANGE',
        description: 'Do not throw more money at generic social ads post-release. Build targeted audience resonance pathways from production inception.',
        dimensions: ['AUDIENCE', 'REVENUE', 'EFFICIENCY'],
        measurableMetrics: [
          { label: 'Week-2 Box Office Retention', before: '82% Drop-off', target: '<40% Decay Rate' },
          { label: 'Target Demographic Cut-Through', before: '8% Affinity', target: '64% Verified Reach' },
          { label: 'Cost-per-Acquisition (CAC)', before: 'Excessive Ad Spend', target: '52% Reduction' }
        ],
        conclusionAction: 'Activate Targeted Affinity Distribution',
        callout: 'Discovery failure is rarely a marketing problem. It is an alignment problem between content and community.'
      }
    },
    traceChain: ['AUDIENCE DISCOVERY', 'BLUNT PROMOTION', 'EXHAUSTED BUDGET', 'DISCONNECTED SIGNALS', 'ISOLATED DISTRIBUTION']
  },
  {
    id: 'marketing-waste',
    code: 'PRB-07',
    label: 'MARKETING WASTE',
    category: 'MONEY',
    tagline: 'Massive promotional expenditures yield declining box-office and conversion ratios.',
    steps: {
      1: {
        title: 'STEP 1: VISIBLE PROBLEM IDENTIFIED',
        badge: 'SURFACE SYMPTOM',
        headline: 'MARKETING WASTE',
        description: 'Marketing budgets represent 50% of production costs yet audience tracking shows indifference and low trailer retention.',
        metric: '50% Spend / Diminishing Returns',
        affectedNode: 'MARKETING WASTE'
      },
      2: {
        title: 'STEP 2: TRACING CONTRIBUTING FACTORS',
        badge: 'CONTRIBUTING LAYER',
        headline: 'COPY-PASTE CAMPAIGN PLAYBOOKS',
        description: 'Agencies deploy formulaic junket interviews, sponsored reels, and programmatic ads identical to 10 competing releases.',
        metric: 'Homogenized Creatives',
        affectedNode: 'TACTICAL INERTIA'
      },
      3: {
        title: 'STEP 3: DEEPER ROOT CAUSE EMERGES',
        badge: 'STRUCTURAL ROOT CAUSE',
        headline: 'SILOED DATA & DISCONNECT FROM AUDIENCE SENTIMENT',
        description: 'Marketing teams receive the final cut 3 weeks prior to theatrical lock with no qualitative feedback from initial test cohorts.',
        metric: 'Late Pipeline Integration',
        affectedNode: 'SILOED PROMOTION'
      },
      4: {
        title: 'STEP 4: AFFECTED STAKEHOLDERS MAPPED',
        badge: 'SYSTEMIC IMPACT',
        headline: 'INVESTMENT DESTABILIZATION',
        description: 'Financiers see P&A outlays vaporize; Theatrical exhibitors cut show counts; Creators see their core themes misrepresented in promotional cuts.',
        stakeholders: ['FINANCIERS', 'BRANDS', 'ADVERTISING', 'THEATRES', 'AUDIENCE'],
        metric: 'Wasted Capital Allocation'
      },
      5: {
        title: 'STEP 5: INTERVENTION LEVERAGE POINTS LOCATED',
        badge: 'INTERVENTION VECTOR',
        headline: 'SENTIMENT-ALIGNED POSITIONING + EARNED MEDIA MESH',
        description: 'Test authentic creative angles with micro-affinity audiences before committing macro promotional capital.',
        interventionTypes: ['MEASURE', 'REDESIGN', 'COORDINATE'],
        metric: 'CAC Reduced by 41%'
      },
      6: {
        title: 'STEP 6: WHAT COULD BE MEASURED',
        badge: 'EMPIRICAL DELTA',
        headline: 'MEASURABLE OPERATIONAL CHANGE',
        description: 'Fixing promotional return requires ending the insulation between content intent and marketing execution.',
        dimensions: ['EFFICIENCY', 'REVENUE', 'AUDIENCE'],
        measurableMetrics: [
          { label: 'P&A Recovery Ratio', before: 'Negative ROI', target: '2.4x Net Recovery' },
          { label: 'Trailer Engagement Rate', before: '14% Completion', target: '58% Organic Completion' },
          { label: 'Attributed Conversion Rate', before: 'Unattributed', target: 'Verified Ticket Lift' }
        ],
        conclusionAction: 'Synchronize Creative Core with Affinity Data',
        callout: 'Loudness is not connection. Precision targeting beats blunt repetition.'
      }
    },
    traceChain: ['MARKETING WASTE', 'FORMULAIC PROMOTION', 'TACTICAL INERTIA', 'SILOED CREATIVES', 'INSULATED RELEASE']
  },
  {
    id: 'missed-revenue',
    code: 'PRB-08',
    label: 'MISSED REVENUE',
    category: 'MONEY',
    tagline: 'Discrepancies in box-office reporting, OTT stream auditing, and royalty collection drain profits.',
    steps: {
      1: {
        title: 'STEP 1: VISIBLE PROBLEM IDENTIFIED',
        badge: 'SURFACE SYMPTOM',
        headline: 'MISSED REVENUE',
        description: 'Net theatrical and digital receipts settle at 22% below projected thresholds despite strong ticket footfalls and streaming charts.',
        metric: '-22% Net Realization Gap',
        affectedNode: 'MISSED REVENUE'
      },
      2: {
        title: 'STEP 2: TRACING CONTRIBUTING FACTORS',
        badge: 'CONTRIBUTING LAYER',
        headline: 'UNAUDITED SUB-DISTRIBUTOR SETTLEMENTS',
        description: 'Regional sub-distributors report local deductions, variable print fees, and delayed ticketing reconciliations with minimal oversight.',
        metric: '90-Day Audit Latency',
        affectedNode: 'INTERMEDIARY SLACK'
      },
      3: {
        title: 'STEP 3: DEEPER ROOT CAUSE EMERGES',
        badge: 'STRUCTURAL ROOT CAUSE',
        headline: 'ABSENCE OF TELEMETRIC REPORTING PROTOCOLS',
        description: 'Settlement protocols rely on self-reported monthly spreadsheets with zero API verification against ticketing machines or OTT usage counters.',
        metric: 'Zero Real-Time Verification',
        affectedNode: 'OPAQUE SETTLEMENTS'
      },
      4: {
        title: 'STEP 4: AFFECTED STAKEHOLDERS MAPPED',
        badge: 'SYSTEMIC IMPACT',
        headline: 'WATERFALL EROSION FROM CREATOR TO INVESTOR',
        description: 'Profits never reach the lower tiers of the recoupment waterfall. Talent backends fail to trigger; Investors sour on entertainment finance.',
        stakeholders: ['INVESTORS', 'PRODUCERS', 'DIRECTORS', 'ACTORS', 'DISTRIBUTION'],
        metric: 'Recoupment Cascade Failure'
      },
      5: {
        title: 'STEP 5: INTERVENTION LEVERAGE POINTS LOCATED',
        badge: 'INTERVENTION VECTOR',
        headline: 'AUTOMATED RECONCILIATION & TELEMETRIC AUDIT',
        description: 'Standardize digital receipt collection and mandate telemetric waterfall audits directly connected to regional box office feeds.',
        interventionTypes: ['STANDARDISE', 'MEASURE', 'COMMERCIALISE'],
        metric: 'Leakage Recouped ~18%'
      },
      6: {
        title: 'STEP 6: WHAT COULD BE MEASURED',
        badge: 'EMPIRICAL DELTA',
        headline: 'MEASURABLE OPERATIONAL CHANGE',
        description: 'The issue is not malicious theft. It is systemic friction and untracked ledger lag across manual intermediaries.',
        dimensions: ['REVENUE', 'RISK', 'TIME'],
        measurableMetrics: [
          { label: 'Uncollected Revenue Recouped', before: '-22% Gap', target: '+18% Recouped' },
          { label: 'Waterfall Settlement Speed', before: '90-Day Lag', target: '<7-Day Automated Sync' },
          { label: 'Audit Discrepancy Margin', before: '14% Unverified', target: '<1% Reconciled Margin' }
        ],
        conclusionAction: 'Implement Automated Waterfall Auditing',
        callout: 'Money leaks where transparency is absent.'
      }
    },
    traceChain: ['MISSED REVENUE', 'AUDIT LATENCY', 'INTERMEDIARY SLACK', 'OPAQUE SETTLEMENTS', 'DISCONNECTED WATERFALL']
  }
];
