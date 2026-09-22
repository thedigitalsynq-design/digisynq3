// Section 16: Measurable Outcomes across 8 Core Dimensions
// Emphasizes rigorous telemetry and measurable change, never vague "impact"

export const OUTCOME_DIMENSIONS = [
  {
    id: 'time',
    name: 'TIME',
    code: 'METRIC-T',
    metricLabel: 'Schedule Variance & Transit Latency',
    howFixSynqMeasures: 'Continuous comparison of scheduled call-to-wrap timelines versus actual strike intervals across all shoot units.',
    units: 'Hours / Turnaround Delta',
    targetImprovement: 'Arrests schedule drift within 48 hours of protocol activation',
    formula: 'ΔT = Scheduled Target Time - Observed Operational Completion Time',
    benchmarkIndicators: [
      'Daily turnaround margin compliance',
      'Handoff latency between camera wrap and DIT ingestion',
      'Editorial-to-VFX turn plate lock velocity'
    ]
  },
  {
    id: 'cost',
    name: 'COST',
    code: 'METRIC-C',
    metricLabel: 'Unbudgeted Contingency Depletion & Rush Fees',
    howFixSynqMeasures: 'Real-time telemetry tracking unallocated expense variance and emergency rush surcharges across vendor invoices.',
    units: 'Percentage Variance against Baseline',
    targetImprovement: 'Eliminates uncoordinated emergency surcharge spikes',
    formula: 'ΔC = Planned Line-Item Expenditure - Realized Settlement Total',
    benchmarkIndicators: [
      'Emergency equipment courier fees',
      'Overtime multiplier penalties per department',
      'Change-order revision surcharges'
    ]
  },
  {
    id: 'revenue',
    name: 'REVENUE',
    code: 'METRIC-R',
    metricLabel: 'Waterfall Recoupment & Dormant Rights Extraction',
    howFixSynqMeasures: 'Auditing net realization rates against contractually mandated distributor settlement statements.',
    units: 'Net Realization Realized vs Projected',
    targetImprovement: 'Reclaims unaccounted waterfall slippage and activates dormant windows',
    formula: 'ΔR = Reconciled Net Box-Office/SVOD Receipts - Self-Reported Payouts',
    benchmarkIndicators: [
      'Ancillary territory rights activation yield',
      'Sub-licensing clearance cycle time',
      'Waterfall settlement audit accuracy'
    ]
  },
  {
    id: 'utilisation',
    name: 'UTILISATION',
    code: 'METRIC-U',
    metricLabel: 'Asset, Soundstage & Equipment Duty Cycle',
    howFixSynqMeasures: 'Tracking active billable days versus offline dark days across high-capital physical infrastructure.',
    units: '% of Total Available Calendar Hours',
    targetImprovement: 'Increases productive utilization from ~35% towards ~80%+',
    formula: 'ΔU = (Billable Deployed Days / Total Available Calendar Days) × 100',
    benchmarkIndicators: [
      'Soundstage dark-day conversion rate',
      'Cinema optic packages duty cycle',
      'Post-production facility off-peak utilization'
    ]
  },
  {
    id: 'efficiency',
    name: 'EFFICIENCY',
    code: 'METRIC-E',
    metricLabel: 'Handoff Friction & Redundant Labor Cycles',
    howFixSynqMeasures: 'Measuring the ratio of productive shooting/finishing hours to waiting or idle standby hours on set.',
    units: 'Productive vs Standby Time Ratio',
    targetImprovement: 'Compresses non-productive set standby by over 40%',
    formula: 'ΔE = Productive Camera Execution Hours / Total Set Labor Hours',
    benchmarkIndicators: [
      'Lighting setup turnaround speed between setups',
      'Call sheet distribution and confirmation confirmation velocity',
      'Data asset ingestion checksum completion speed'
    ]
  },
  {
    id: 'risk',
    name: 'RISK',
    code: 'METRIC-K',
    metricLabel: 'Completion Impasse & Contractual Vulnerability',
    howFixSynqMeasures: 'Algorithmic scoring of schedule fragility, dependency clustering, and single-point-of-failure exposure.',
    units: 'Composite Vulnerability Index (0–100)',
    targetImprovement: 'Downgrades high-risk single-point dependencies before production launch',
    formula: 'ΔK = Baseline Vulnerability Score - Post-Intervention De-Risked Index',
    benchmarkIndicators: [
      'Unhedged second-hold overlap exposure',
      'Single-vendor critical path reliance',
      'Insurance claim and force majeure probability rating'
    ]
  },
  {
    id: 'quality',
    name: 'QUALITY',
    code: 'METRIC-Q',
    metricLabel: 'Technical Spec Adherence & Rejection Ratio',
    howFixSynqMeasures: 'Auditing final delivery QC rejections, conform errors, and audio stem clipping incidents against platform specs.',
    units: 'Q.C. Rejection & Reshoot Rate (%)',
    targetImprovement: 'Minimizes technical delivery rejections to near zero',
    formula: 'ΔQ = (Defective / Rejected Delivery Deliverables / Total Submissions) × 100',
    benchmarkIndicators: [
      'Broadcast/OTT platform first-pass QC pass rate',
      'VFX plate re-turnover frequency',
      'Color space and audio loudness compliance'
    ]
  },
  {
    id: 'audience',
    name: 'AUDIENCE',
    code: 'METRIC-A',
    metricLabel: 'Target Resonance & Affinity Conversion Velocity',
    howFixSynqMeasures: 'Evaluating hyper-targeted community engagement depth and ticket conversion versus blunt programmatic spend.',
    units: 'Engagement-to-Attendance Conversion Ratio',
    targetImprovement: 'Maximizes box-office and streaming retention through precise affinity alignment',
    formula: 'ΔA = Verified Core Audience Conversion / Gross Marketing Capital Deployed',
    benchmarkIndicators: [
      'Opening weekend ticket footfall retention beyond Day 3',
      'Niche community advocacy sentiment index',
      'Trailer view-through to ticketing link CTR'
    ]
  }
];
