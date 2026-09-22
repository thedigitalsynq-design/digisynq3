// Problem Matrix: Filterable by 12 systemic dimensions
// 47 STAKEHOLDERS. THOUSANDS OF PROBLEMS. ONE CONNECTED SYSTEM.

export const MATRIX_FILTERS = [
  'ALL',
  'PEOPLE',
  'PROCESS',
  'RESOURCES',
  'INFORMATION',
  'MONEY',
  'RIGHTS',
  'TECHNOLOGY',
  'MARKET',
  'AUDIENCE',
  'DATA',
  'REGULATION',
  'RISK'
];

export const PROBLEM_MATRIX_DATA = [
  {
    id: 'mat-01',
    stakeholder: 'PRODUCERS',
    category: 'PROCESS',
    visibleProblem: 'Production schedule slips by 3 weeks mid-shoot',
    contributingCauses: ['Unsynchronized cast holds', 'Delayed location clearance', 'Specialist gear backorders'],
    rootCauseCategory: 'DEPENDENCY OBLIVION',
    rootCauseExplanation: 'Upstream schedule changes are not programmatically propagated to downstream vendors and crew holds.',
    affectedStakeholders: ['TECHNICIANS', 'EQUIPMENT PROVIDERS', 'FINANCIERS', 'STUDIOS'],
    potentialInterventionPoints: ['COORDINATE', 'STANDARDISE', 'CONNECT'],
    leverageScore: '92%'
  },
  {
    id: 'mat-02',
    stakeholder: 'EQUIPMENT PROVIDERS',
    category: 'RESOURCES',
    visibleProblem: 'High-end cinema optics sit idle 18 days/month',
    contributingCauses: ['Regional liquidity gaps', 'Lack of real-time rental mesh', '30-day rigid minimum blocks'],
    rootCauseCategory: 'OPAQUE INVENTORY',
    rootCauseExplanation: 'Independent rental houses operate offline inventory silos with zero interoperable telemetry between adjacent markets.',
    affectedStakeholders: ['CINEMATOGRAPHERS', 'PRODUCTION HOUSES', 'INVESTORS'],
    potentialInterventionPoints: ['UTILISE', 'CONNECT', 'COMMERCIALISE'],
    leverageScore: '88%'
  },
  {
    id: 'mat-03',
    stakeholder: 'VFX / ANIMATION',
    category: 'PEOPLE',
    visibleProblem: 'Artist burnout and massive unbilled shot iterations',
    contributingCauses: ['Subjective non-technical directorial notes', 'Plate delivery delays', 'Fixed-price bid caps'],
    rootCauseCategory: 'ASYMMETRIC REVIEW LOOPS',
    rootCauseExplanation: 'Absence of version-locked parameter tracking allows creative changes without scope impact recalculation.',
    affectedStakeholders: ['DIRECTORS', 'STUDIOS', 'POST SUPERVISORS'],
    potentialInterventionPoints: ['REDESIGN', 'STANDARDISE', 'MEASURE'],
    leverageScore: '94%'
  },
  {
    id: 'mat-04',
    stakeholder: 'IP / RIGHTS OWNERS',
    category: 'RIGHTS',
    visibleProblem: 'Valuable catalog titles expire into public or orphan status unmonetized',
    contributingCauses: ['Scanned PDF contracts in paper files', 'Ambiguous territory carve-outs', 'Lack of reversion alerts'],
    rootCauseCategory: 'METADATA VOID',
    rootCauseExplanation: 'Contractual terms exist in unstructured analog formats without queryable parameterization or automated window triggers.',
    affectedStakeholders: ['WRITERS', 'FINANCIERS', 'OTT', 'DISTRIBUTION'],
    potentialInterventionPoints: ['ORGANISE', 'COMMERCIALISE', 'STANDARDISE'],
    leverageScore: '90%'
  },
  {
    id: 'mat-05',
    stakeholder: 'FINANCIERS',
    category: 'MONEY',
    visibleProblem: 'Recoupment waterfall returns stall below modeled returns',
    contributingCauses: ['Regional sub-distributor deductions', '90-day settlement lag', 'Opaque collection agent deductions'],
    rootCauseCategory: 'INTERMEDIARY SLACK',
    rootCauseExplanation: 'Settlements rely on manual, self-reported spreadsheets across multiple tiers without automated telemetry verification.',
    affectedStakeholders: ['INVESTORS', 'PRODUCERS', 'DIRECTORS', 'ACTORS'],
    potentialInterventionPoints: ['STANDARDISE', 'MEASURE', 'COMMERCIALISE'],
    leverageScore: '89%'
  },
  {
    id: 'mat-06',
    stakeholder: 'THEATRES',
    category: 'AUDIENCE',
    visibleProblem: 'Weekday screens run at 12% average occupancy',
    contributingCauses: ['Inflexible showtime algorithms', 'Uniform nationwide programming', 'High concession margin reliance'],
    rootCauseCategory: 'STATIC CAPACITY ALLOCATION',
    rootCauseExplanation: 'Exhibition slots are booked in rigid weekly blocks detached from micro-demographic neighborhood cultural demand.',
    affectedStakeholders: ['DISTRIBUTION', 'STUDIOS', 'AUDIENCE'],
    potentialInterventionPoints: ['UTILISE', 'MATCH', 'PARTNER'],
    leverageScore: '84%'
  },
  {
    id: 'mat-07',
    stakeholder: 'TECHNICIANS',
    category: 'INFORMATION',
    visibleProblem: 'Dangerous turnarounds & unannounced call-time shifts',
    contributingCauses: ['Paper call-sheets', 'Last-minute director re-blocking', 'No centralized crew dispatch hub'],
    rootCauseCategory: 'SILOED COMMUNICATION',
    rootCauseExplanation: 'On-set adjustments are communicated informally through fragmented WhatsApp groups rather than synchronized digital manifests.',
    affectedStakeholders: ['PRODUCERS', 'PRODUCTION HOUSES', 'EQUIPMENT PROVIDERS'],
    potentialInterventionPoints: ['COORDINATE', 'STANDARDISE', 'MEASURE'],
    leverageScore: '91%'
  },
  {
    id: 'mat-08',
    stakeholder: 'TECHNOLOGY',
    category: 'TECHNOLOGY',
    visibleProblem: 'Cutting-edge virtual production tools rejected by physical crews',
    contributingCauses: ['Tools built without frontline grips/DOPs', 'Proprietary non-interoperable file standards', 'Training deficit'],
    rootCauseCategory: 'FRONT-LINE MISALIGNMENT',
    rootCauseExplanation: 'Tech developers optimize for benchmark demonstrations rather than high-pressure 14-hour set realities.',
    affectedStakeholders: ['CINEMATOGRAPHERS', 'VFX / ANIMATION', 'EDUCATION', 'STUDIOS'],
    potentialInterventionPoints: ['TRAIN', 'CONNECT', 'REDESIGN'],
    leverageScore: '86%'
  },
  {
    id: 'mat-09',
    stakeholder: 'DISTRIBUTION',
    category: 'MARKET',
    visibleProblem: 'Theatrical P&A spends generate negative net yield on non-IP titles',
    contributingCauses: ['Copy-paste campaign playbooks', 'Siloed demographic data', 'Excessive billboard outlays'],
    rootCauseCategory: 'BLUNT-FORCE TARGETING',
    rootCauseExplanation: 'Distribution models treat diverse independent films with the same blanket marketing machinery as billion-dollar franchise IP.',
    affectedStakeholders: ['STUDIOS', 'PRODUCERS', 'THEATRES', 'PR / MEDIA'],
    potentialInterventionPoints: ['REDESIGN', 'MATCH', 'MEASURE'],
    leverageScore: '87%'
  },
  {
    id: 'mat-10',
    stakeholder: 'DATA',
    category: 'DATA',
    visibleProblem: 'High-resolution raw camera footage corrupted or misfiled during wrap',
    contributingCauses: ['Non-standard checksum verification on set', 'Opaque naming conventions', 'Ad-hoc drive transport'],
    rootCauseCategory: 'UNGOVERNED ASSET INGESTION',
    rootCauseExplanation: 'Lack of automated cryptographic verification and unified metadata schemas across disparate camera cards and sound rigs.',
    affectedStakeholders: ['POST SUPERVISORS', 'COLORISTS', 'VFX / ANIMATION', 'PRODUCERS'],
    potentialInterventionPoints: ['STANDARDISE', 'ORGANISE', 'TECHNOLOGISE'],
    leverageScore: '95%'
  },
  {
    id: 'mat-11',
    stakeholder: 'GOVERNMENT',
    category: 'REGULATION',
    visibleProblem: 'Subsidy rebate claims delayed 18+ months in audit queues',
    contributingCauses: ['Physical paper receipt submission', 'Vague local spend classification rules', 'Understaffed state film offices'],
    rootCauseCategory: 'COMPLIANCE FRICTION',
    rootCauseExplanation: 'Public cultural finance bodies rely on legacy bureaucratic verification systems unable to ingest digital production accounts.',
    affectedStakeholders: ['PRODUCERS', 'FINANCIERS', 'LOCATION PROVIDERS'],
    potentialInterventionPoints: ['STANDARDISE', 'TECHNOLOGISE', 'PARTNER'],
    leverageScore: '83%'
  },
  {
    id: 'mat-12',
    stakeholder: 'COMPLETION GUARANTORS',
    category: 'RISK',
    visibleProblem: 'Forced takeover of independent feature productions',
    contributingCauses: ['Hidden director-producer creative impasse', 'Unreported contingency exhaustion', 'Weather vulnerability'],
    rootCauseCategory: 'LATENT RISK BLINDSPOT',
    rootCauseExplanation: 'Guarantors receive lagging weekly cost reports rather than real-time daily burn and velocity telemetry.',
    affectedStakeholders: ['FINANCIERS', 'PRODUCERS', 'STUDIOS', 'DIRECTORS'],
    potentialInterventionPoints: ['MEASURE', 'COORDINATE', 'STANDARDISE'],
    leverageScore: '93%'
  },
  {
    id: 'mat-13',
    stakeholder: 'WRITERS',
    category: 'PEOPLE',
    visibleProblem: 'Exhaustive development rewrites without contractual step compensation',
    contributingCauses: ['Informal executive phone calls', 'Moving goalposts on genre specifications', 'Vague revision milestones'],
    rootCauseCategory: 'DEVELOPMENT CONTRACT AMBIGUITY',
    rootCauseExplanation: 'Agreements lack explicit parameterization of what constitutes a "revision" versus a wholesale "draft reconceptualization."',
    affectedStakeholders: ['CREATORS', 'PRODUCERS', 'LEGAL / FINANCE / INSURANCE'],
    potentialInterventionPoints: ['STANDARDISE', 'ORGANISE', 'MEASURE'],
    leverageScore: '89%'
  },
  {
    id: 'mat-14',
    stakeholder: 'LOCATION PROVIDERS',
    category: 'PROCESS',
    visibleProblem: 'Municipal shoot permits revoked 24 hours prior to call time',
    contributingCauses: ['Resident noise complaints', 'Inadequate neighborhood impact modeling', 'Uncoordinated street closures'],
    rootCauseCategory: 'STAKEHOLDER EXCLUSION',
    rootCauseExplanation: 'Permit applications treat local community impact as a transactional checkmark rather than an active operational negotiation.',
    affectedStakeholders: ['PRODUCERS', 'LOGISTICS', 'GOVERNMENT', 'TECHNICIANS'],
    potentialInterventionPoints: ['COORDINATE', 'STANDARDISE', 'PARTNER'],
    leverageScore: '85%'
  },
  {
    id: 'mat-15',
    stakeholder: 'MUSIC',
    category: 'RIGHTS',
    visibleProblem: 'Commercial release delayed by uncleared sync and publishing samples',
    contributingCauses: ['Late music supervisor onboarding', 'Multi-party fractional songwriting ownership', 'Untracked master rights'],
    rootCauseCategory: 'FRACTIONAL ASSET ENTANGLEMENT',
    rootCauseExplanation: 'Music clearances require unanimous multi-entity consent, yet are deferred to post-production when leverage is lost.',
    affectedStakeholders: ['DIRECTORS', 'POST SUPERVISORS', 'DISTRIBUTION', 'PRODUCERS'],
    potentialInterventionPoints: ['CONNECT', 'STANDARDISE', 'COMMERCIALISE'],
    leverageScore: '91%'
  },
  {
    id: 'mat-16',
    stakeholder: 'EDUCATION',
    category: 'RESOURCES',
    visibleProblem: 'Cinema school graduates lack competencies required on modern sets',
    contributingCauses: ['Outdated curriculum cycles', 'Lack of hands-on virtual production volumes', 'Decoupled faculty tenure'],
    rootCauseCategory: 'ACADEMIC-INDUSTRIAL DISCONNECT',
    rootCauseExplanation: 'Training pipelines operate on 4-year curriculum revision cycles while physical set technologies evolve every two quarters.',
    affectedStakeholders: ['TECHNICIANS', 'STUDIOS', 'TECHNOLOGY'],
    potentialInterventionPoints: ['TRAIN', 'PARTNER', 'CONNECT'],
    leverageScore: '81%'
  }
];
