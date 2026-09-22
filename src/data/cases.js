// Section 08: FIX-SYNQ Cases
// Demonstrates Problem -> Trace -> Root Cause -> Connection -> Intervention -> Outcome -> Learning
// Strictly labeled ILLUSTRATIVE CASE without fabricated statistics or fake client logos

export const SIMULATION_CASES = [
  {
    id: 'case-01',
    code: 'CASE-01',
    caseType: 'ILLUSTRATIVE CASE',
    title: 'BUDGET ESCALATION & SCHEDULE DRIFT',
    sector: 'Feature Film Production',
    stakeholder: 'PRODUCERS & PRODUCTION HOUSES',
    problem: 'Production repeatedly slips schedule by 8 days, depleting 82% of contingency funds by week 4 of principal photography.',
    causes: [
      'Rolling 24-hr call-sheet shifts forced by overlapping actor availability',
      'Specialist camera and lighting packages booked on unverified secondary holds',
      'Fragmented offline spreadsheets between casting, line production, and camera rental houses'
    ],
    rootCause: 'INFORMATION GAP & COORDINATION VOID: Upstream schedule adjustments never propagated downstream to vendors and crew in real time.',
    connectedStakeholders: ['TECHNICIANS', 'EQUIPMENT PROVIDERS', 'STUDIOS', 'FINANCE', 'INSURANCE'],
    intervention: {
      tools: ['ORGANISE', 'MATCH', 'COORDINATE'],
      summary: 'Converted disparate cast and camera schedules into a unified machine-readable manifest with automated 12-hour look-ahead notification broadcasts across department heads.',
      actions: [
        { step: 'Information Structure', desc: 'Convert disparate cast and camera schedules into a unified machine-readable manifest.' },
        { step: 'Resource Matching', desc: 'Re-align unverified equipment holds with regional partner houses with verified local stock.' },
        { step: 'Coordination Redesign', desc: 'Deploy automated 12-hour look-ahead notification broadcasts across all department heads.' }
      ]
    },
    outcome: {
      headline: 'Measurable Operational Delta',
      metrics: [
        { label: 'Schedule Recovery', value: 'Further slippage arrested; wrapped within 2 days of revised target' },
        { label: 'Standby Penalties', value: 'Eliminated redundant vendor hold fees across remaining weeks' },
        { label: 'Visibility Horizon', value: 'Shifted from reactive 4-hour panics to 48-hour clear operational foresight' }
      ]
    },
    learning: 'A budget overrun is almost never a money problem. It is an uncoordinated dependency failure where one upstream shift triggers seven expensive downstream penalties.'
  },
  {
    id: 'case-02',
    code: 'CASE-02',
    caseType: 'ILLUSTRATIVE CASE',
    title: 'RIGHTS ATTRITION & REVENUE BLACKHOLE',
    sector: 'Independent Library & Catalog IP',
    stakeholder: 'IP / RIGHTS OWNERS & WRITERS',
    problem: 'Valuable 34-title film library generates near-zero backlist revenue while international remake queries stall in months-long legal review.',
    causes: [
      'Distribution agreements stored as unindexed paper files and flat PDF scans',
      'Ambiguous regional carve-outs and unverified airline/SVOD windows',
      'Reversion clauses expired unnoticed without automated exploitation triggers'
    ],
    rootCause: 'METADATA VOID & FRAGMENTED CHAIN-OF-TITLE: No structured, queryable data bridge connects catalog legal rights with active sales opportunities.',
    connectedStakeholders: ['WRITERS', 'DIRECTORS', 'DISTRIBUTION', 'OTT', 'LEGAL / FINANCE / INSURANCE'],
    intervention: {
      tools: ['ORGANISE', 'STANDARDISE', 'COMMERCIALISE'],
      summary: 'Digitized analog agreements into structured grant-of-rights parameters, constructed a real-time territory-by-window matrix, and connected verified windows to international sales networks.',
      actions: [
        { step: 'Contract Digitization & Parsing', desc: 'Ingest analog contracts and extract explicit grant-of-rights parameters into structured data.' },
        { step: 'Standardized Rights Matrix', desc: 'Build an indexed territory-by-window matrix showing unencumbered rights in real time.' },
        { step: 'Commercial Activation Protocol', desc: 'Open verified clean windows to regional aggregators and international sales networks.' }
      ]
    },
    outcome: {
      headline: 'Measurable Operational Delta',
      metrics: [
        { label: 'Title Readiness', value: '100% of catalog parameterized into queryable rights records' },
        { label: 'Inquiry Clearance Speed', value: 'Query clearance reduced from 9 weeks to under 48 hours' },
        { label: 'New Revenue Streams', value: 'Reactivated previously dormant ancillary and airline licensing windows' }
      ]
    },
    learning: 'Intellectual property value is proportional to the machine-readability of its rights metadata. Buyers buy what they can legally verify without latency.'
  },
  {
    id: 'case-03',
    code: 'CASE-03',
    caseType: 'ILLUSTRATIVE CASE',
    title: 'VFX SCOPE CREEP & BURNOUT CYCLE',
    sector: 'Post-Production & Visual Effects',
    stakeholder: 'VFX / ANIMATION & POST SUPERVISORS',
    problem: 'VFX vendor contracted for 320 complex shots hits week 20 with only 38% shot approval, 34 average revisions per shot, and impending artist walkouts.',
    causes: [
      'Creative feedback delivered as emotional adjectives rather than technical notes',
      'Conform plate cuts continuously altered by editorial room after plate turnover',
      'Change orders implemented informally without tracking cumulative budget or schedule impacts'
    ],
    rootCause: 'ASYMMETRIC REVIEW LOOPS & ABSENCE OF VERSION GATING: Creative changes permitted without scope impact recalculation or freeze benchmarks.',
    connectedStakeholders: ['DIRECTORS', 'STUDIOS', 'POST SUPERVISORS', 'TECHNOLOGY', 'PRODUCERS'],
    intervention: {
      tools: ['REDESIGN', 'STANDARDISE', 'MEASURE'],
      summary: 'Established strict plate turnover freeze parameters, enforced 4-tier objective review milestones (Form, Motion, Lighting, Final Comp), and provided real-time revision velocity telemetry to both director and producer.',
      actions: [
        { step: 'Turnover Gating Protocol', desc: 'Establish strict freeze parameters for plates turnover, with structured variance pricing for late edits.' },
        { step: 'Standardized Feedback Schema', desc: 'Enforce specific, actionable technical review milestones (Form, Motion, Lighting, Final Comp).' },
        { step: 'Telemetric Velocity Tracking', desc: 'Provide both director and post supervisor a daily velocity burn chart showing consequence of new revisions.' }
      ]
    },
    outcome: {
      headline: 'Measurable Operational Delta',
      metrics: [
        { label: 'Approval Acceleration', value: 'Shot approval velocity increased by 2.6x within 10 days of protocol deployment' },
        { label: 'Version Inflation', value: 'Average revision count stabilized from v42 down to v6 per final shot' },
        { label: 'Final Delivery', value: 'Achieved clean, on-spec delivery for scheduled theatrical lock without overtime walkouts' }
      ]
    },
    learning: 'Artistic iteration requires explicit technical boundaries. Unmeasured scope flexibility in prep creates exponential financial and human burnout in post.'
  }
];
