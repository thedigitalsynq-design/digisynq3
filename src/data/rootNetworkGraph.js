// Graph topology and causal pathways for Section 05 (Root-Cause Network)
// Explicitly incorporates the prompt's signature paths:
// 1. PRODUCTION DELAY -> SCHEDULING -> TALENT -> INFO GAP -> FINANCE -> AUDIENCE
// 2. TECHNICIAN DISCOVERY -> VISIBILITY -> VERIFICATION -> SKILLS -> HIRING NETWORKS -> PRODUCTION -> SCHEDULING -> COST -> FINANCE -> DISTRIBUTION -> MARKETING -> AUDIENCE

export const NETWORK_NODES = [
  // Visible Problems (Top Layer)
  { id: 'node-delay', label: 'PRODUCTION DELAY', type: 'problem', tier: 1, x: 260, y: 110, cluster: 'process', desc: 'Shoot stops, schedule expands, daily burn climbs.' },
  { id: 'node-tech-discovery', label: 'TECHNICIAN DISCOVERY', type: 'problem', tier: 1, x: 440, y: 90, cluster: 'people', desc: 'Critical technical and specialized roles cannot be found or verified.' },
  { id: 'node-cost', label: 'HIGH COST', type: 'problem', tier: 1, x: 620, y: 110, cluster: 'finance', desc: 'Unbudgeted line items surge across production.' },
  { id: 'node-idle', label: 'IDLE RESOURCES', type: 'problem', tier: 1, x: 790, y: 120, cluster: 'resource', desc: 'Soundstages & optics packages sit parked in warehouses.' },
  { id: 'node-rights', label: 'RIGHTS UNDERUSE', type: 'problem', tier: 1, x: 960, y: 140, cluster: 'rights', desc: 'Ancillary and regional windows expire unmonetized.' },

  // Contributing Factors & Intermediate Causal Mesh (Layer 2)
  { id: 'node-visibility', label: 'VISIBILITY', type: 'factor', tier: 2, x: 380, y: 220, cluster: 'info', desc: 'Absence of transparency into real-time crew availability across markets.' },
  { id: 'node-verification', label: 'VERIFICATION', type: 'factor', tier: 2, x: 500, y: 220, cluster: 'info', desc: 'No standardized credential vetting for technical tool proficiency.' },
  { id: 'node-skills', label: 'SKILLS', type: 'factor', tier: 2, x: 320, y: 290, cluster: 'people', desc: 'Rapidly evolving workflows (VP, HDR, DIT) outpacing legacy training.' },
  { id: 'node-geography', label: 'GEOGRAPHY', type: 'factor', tier: 2, x: 450, y: 300, cluster: 'resource', desc: 'Hyper-localized clusters lacking visibility into regional talent liquidity.' },
  { id: 'node-hiring-networks', label: 'HIRING NETWORKS', type: 'factor', tier: 2, x: 580, y: 290, cluster: 'people', desc: 'Insular word-of-mouth circles excluding verified emergent operators.' },

  { id: 'node-scheduling', label: 'SCHEDULING', type: 'factor', tier: 2, x: 220, y: 250, cluster: 'process', desc: 'Overlapping holds, unverified call sheets, shifting calendar blocks.' },
  { id: 'node-availability', label: 'AVAILABILITY', type: 'factor', tier: 2, x: 680, y: 230, cluster: 'resource', desc: 'Equipment and stage inventory locked in phantom second holds.' },
  { id: 'node-procurement', label: 'RUSH PROCUREMENT', type: 'factor', tier: 2, x: 750, y: 310, cluster: 'finance', desc: 'Expedited airfreight, penalty rates, emergency rate hikes.' },

  // Root Causes (Structural Bedrock - Layer 3)
  { id: 'node-production', label: 'PRODUCTION', type: 'root', tier: 3, x: 420, y: 420, cluster: 'root', desc: 'CRITICAL NODE: Physical production execution absorbing all upstream friction.' },
  { id: 'node-info-gap', label: 'INFORMATION GAP', type: 'root', tier: 3, x: 280, y: 440, cluster: 'root', desc: 'CRITICAL ROOT: Asymmetric visibility into cross-production availability and holds.' },
  { id: 'node-frag-net', label: 'FRAGMENTED NETWORK', type: 'root', tier: 3, x: 620, y: 430, cluster: 'root', desc: 'CRITICAL ROOT: Disconnected protocols between independent production entities.' },
  { id: 'node-unstd-contracts', label: 'UNSTANDARDIZED PROTOCOLS', type: 'root', tier: 3, x: 820, y: 430, cluster: 'root', desc: 'CRITICAL ROOT: Manual, non-machine-readable rights and procurement agreements.' },

  // Cascading Impacts & Stakeholders (Layer 4)
  { id: 'node-cost-impact', label: 'COST', type: 'stakeholder', tier: 4, x: 380, y: 550, cluster: 'finance', desc: 'Compounding standby rates and overtime cascades into financing stress.' },
  { id: 'node-finance', label: 'FINANCE', type: 'stakeholder', tier: 4, x: 520, y: 560, cluster: 'stakeholder', desc: 'Debt yields erode and capital recovery timelines extend.' },
  { id: 'node-distribution', label: 'DISTRIBUTION', type: 'stakeholder', tier: 4, x: 680, y: 570, cluster: 'stakeholder', desc: 'Release dates compress, missing peak seasonal theatrical windows.' },
  { id: 'node-marketing', label: 'MARKETING', type: 'stakeholder', tier: 4, x: 820, y: 580, cluster: 'stakeholder', desc: 'Promotional assets forced into premature or misaligned drops.' },
  { id: 'node-audience', label: 'AUDIENCE', type: 'stakeholder', tier: 4, x: 960, y: 640, cluster: 'stakeholder', desc: 'Receives diluted promotional signals or misses theatrical run entirely.' },
  { id: 'node-technicians', label: 'TECHNICIANS', type: 'stakeholder', tier: 4, x: 180, y: 560, cluster: 'stakeholder', desc: 'Crews experience turnaround collapses and lost booking windows.' },

  // Intervention Vector Nodes (Layer 5)
  { id: 'node-intervene-coord', label: 'INTERVENTION: COORDINATE', type: 'intervention', tier: 5, x: 280, y: 760, cluster: 'intervention', desc: 'Synchronize multi-party calendar holds & call sheet telemetry.' },
  { id: 'node-intervene-match', label: 'INTERVENTION: MATCH & VERIFY', type: 'intervention', tier: 5, x: 520, y: 760, cluster: 'intervention', desc: 'Competency verification protocols & dynamic availability mesh.' },
  { id: 'node-intervene-mesh', label: 'INTERVENTION: ASSET MESH', type: 'intervention', tier: 5, x: 740, y: 760, cluster: 'intervention', desc: 'Interoperable inventory pooling between independent equipment houses.' }
];

export const NETWORK_EDGES = [
  // Technician Discovery signature causal branch (from Section 8)
  { from: 'node-tech-discovery', to: 'node-visibility', label: 'Opaque market' },
  { from: 'node-tech-discovery', to: 'node-availability', label: 'Phantom holds' },
  { from: 'node-tech-discovery', to: 'node-verification', label: 'Unverified skills' },
  { from: 'node-visibility', to: 'node-geography', label: 'Local silos' },
  { from: 'node-verification', to: 'node-skills', label: 'Capability gap' },
  { from: 'node-geography', to: 'node-hiring-networks', label: 'Insular loops' },
  { from: 'node-skills', to: 'node-hiring-networks', label: 'Trust barrier' },
  { from: 'node-hiring-networks', to: 'node-production', label: 'Disrupts crew' },

  // Production Delay primary branch
  { from: 'node-delay', to: 'node-scheduling', label: 'Traced to' },
  { from: 'node-delay', to: 'node-availability', label: 'Dependent on' },
  { from: 'node-scheduling', to: 'node-info-gap', label: 'Root failure' },
  { from: 'node-scheduling', to: 'node-production', label: 'Impacts shoot' },

  // Production -> Scheduling -> Cost -> Finance -> Distribution -> Marketing -> Audience
  { from: 'node-production', to: 'node-scheduling', label: 'Causes churn' },
  { from: 'node-production', to: 'node-cost-impact', label: 'Daily burn' },
  { from: 'node-cost-impact', to: 'node-finance', label: 'Financing stress' },
  { from: 'node-finance', to: 'node-distribution', label: 'Window squeeze' },
  { from: 'node-distribution', to: 'node-marketing', label: 'Compresses P&A' },
  { from: 'node-marketing', to: 'node-audience', label: 'Missed reach' },

  // Converging to Root Causes
  { from: 'node-production', to: 'node-frag-net', label: 'Silo friction' },
  { from: 'node-availability', to: 'node-frag-net', label: 'Offline assets' },
  { from: 'node-cost', to: 'node-procurement', label: 'Rush fees' },
  { from: 'node-procurement', to: 'node-cost-impact', label: 'Overtime surges' },
  { from: 'node-idle', to: 'node-availability', label: 'Liquidity void' },
  { from: 'node-rights', to: 'node-unstd-contracts', label: 'Paper opacity' },

  // Roots to Stakeholders
  { from: 'node-info-gap', to: 'node-technicians', label: 'Lost turnarounds' },
  { from: 'node-info-gap', to: 'node-cost-impact', label: 'Variance drain' },

  // Interventions
  { from: 'node-info-gap', to: 'node-intervene-coord', label: 'Targeted Fix', isIntervention: true },
  { from: 'node-hiring-networks', to: 'node-intervene-match', label: 'Targeted Fix', isIntervention: true },
  { from: 'node-frag-net', to: 'node-intervene-mesh', label: 'Targeted Fix', isIntervention: true }
];

// Path 1: Technician Discovery Signature Path (from Section 8)
export const PATH_TECHNICIAN_DISCOVERY = [
  'node-tech-discovery',
  'node-visibility',
  'node-verification',
  'node-skills',
  'node-geography',
  'node-hiring-networks',
  'node-production',
  'node-scheduling',
  'node-cost-impact',
  'node-finance',
  'node-distribution',
  'node-marketing',
  'node-audience',
  'node-intervene-match'
];

// Path 2: Production Delay Signature Path (from Section 4)
export const PATH_PRODUCTION_DELAY = [
  'node-delay',
  'node-scheduling',
  'node-availability',
  'node-info-gap',
  'node-production',
  'node-cost-impact',
  'node-finance',
  'node-distribution',
  'node-marketing',
  'node-audience',
  'node-intervene-coord'
];

export const SIGNATURE_TRACE_PATH = PATH_TECHNICIAN_DISCOVERY;
