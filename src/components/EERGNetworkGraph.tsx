import React, { useState } from 'react';
import { 
  Network, ArrowRight, Layers, Sparkles, DollarSign, 
  CheckCircle2, Info, ChevronRight, Eye 
} from 'lucide-react';

interface GraphPathway {
  id: string;
  name: string;
  domain: string;
  color: string;
  nodes: {
    tier: string;
    label: string;
    detail: string;
    code?: string;
    badge?: string;
  }[];
}

const GRAPH_PATHWAYS: GraphPathway[] = [
  {
    id: 'pathway-talent',
    name: 'Talent & Casting Discovery',
    domain: 'Creation / Talent',
    color: 'from-zinc-100 to-zinc-400',
    nodes: [
      { tier: '01. STAKEHOLDERS', label: 'Actor & Casting Director', detail: '160+ performers & casting heads in fragmented roster pools', code: 'S001 / S007' },
      { tier: '02. PROBLEMS', label: 'Talent Discovery & Matching Failure', detail: 'Performers undiscovered; productions face 4-week role confirmation drag', badge: 'Problem' },
      { tier: '03. BOTTLENECKS', label: 'Casting & Availability Choke Point', detail: 'No real-time registry connecting open roles to verified calendar availability', code: 'B001' },
      { tier: '04. IMMEDIATE CAUSES', label: 'Unverified Wrap Dates', detail: 'Agency schedules dependent on manual phone calls and unverified previous shoot wraps' },
      { tier: '05. ROOT CAUSES', label: 'Information Fragmentation', detail: 'Decision data distributed across WhatsApp, PDFs, informal gatekeepers and legacy silos', code: 'R001' },
      { tier: '06. DEPENDENCIES', label: 'Exclusive Agency Rosters', detail: 'Guild rules and agency representation covenants restrict open API access to availability', code: 'D014' },
      { tier: '07. IMPACTS', label: '$540k Pre-Production Schedule Delay', detail: 'Pushes physical shoot start dates, burning studio pre-production holding capital' },
      { tier: '08. EXISTING SOLUTIONS', label: 'WhatsApp Groups & Personal Rolodexes', detail: 'Informal text threads, casting email blasts, and manual agent negotiation' },
      { tier: '09. SOLUTION GAPS', label: 'Zero Unified Verified Intelligence Layer', detail: 'No trusted system verifies credentials, current appearance, and hard-out commitments' },
      { tier: '10. OPPORTUNITIES', label: 'SYNQ.TALENT Live Exchange', detail: 'Universal verified talent intelligence & casting availability clearinghouse', code: 'OPP-01' },
      { tier: '11. PAYING CUSTOMERS', label: 'Casting Agencies & Studios', detail: 'Production companies and casting agencies holding enterprise recruiting budgets', badge: 'Buyer' }
    ]
  },
  {
    id: 'pathway-stages',
    name: 'Physical Soundstage Allocation',
    domain: 'Physical Production',
    color: 'from-zinc-200 to-zinc-500',
    nodes: [
      { tier: '01. STAKEHOLDERS', label: 'Line Producer & Stage Operator', detail: 'Physical production heads & studio lot operators managing physical square footage', code: 'S022 / S045' },
      { tier: '02. PROBLEMS', label: 'Soundstage Turnover Conflict', detail: 'Principal photography running 4 days over scheduled floor lease on Stage 3' },
      { tier: '03. BOTTLENECKS', label: 'Stage Availability & Lease Gridlock', detail: 'Multi-month lease covenants create 28% dark floor idle capacity between shoots', code: 'B007' },
      { tier: '04. IMMEDIATE CAUSES', label: 'Practical Stunt Overruns', detail: 'Unscheduled practical stunt adjustments forced split-shift lighting overruns' },
      { tier: '05. ROOT CAUSES', label: 'Workflow Fragmentation & Silos', detail: 'On-set schedule adjustments not communicated to incoming tenant facility managers', code: 'R021' },
      { tier: '06. DEPENDENCIES', label: 'Rigging Crew & Municipal Permits', detail: 'Municipal fire marshal permits tied to specific physical street addresses and dates' },
      { tier: '07. IMPACTS', label: '$32k/Day Standby Idle Penalties', detail: 'Incoming tenant threatens litigation and crew turnaround penalty multipliers trigger' },
      { tier: '08. EXISTING SOLUTIONS', label: 'Emergency Studio Line Calls', detail: 'Production managers cold-calling neighboring stages to find spare dark floors' },
      { tier: '09. SOLUTION GAPS', label: 'No Secondary Dark-Floor Marketplace', detail: 'No real-time dynamic booking platform for verified dark soundstage capacity' },
      { tier: '10. OPPORTUNITIES', label: 'SYNQ.STAGE Dynamic Dark-Floor Grid', detail: 'Asset-light secondary floor routing engine for burst capacity and overflow shots', code: 'OPP-02' },
      { tier: '11. PAYING CUSTOMERS', label: 'Studio Slates & Facility Operators', detail: 'Stage operators monetize dark days; studios eliminate idle standby fines', badge: 'Buyer' }
    ]
  },
  {
    id: 'pathway-vfx',
    name: 'Post-Production VFX Compression',
    domain: 'Post Finishing & Delivery',
    color: 'from-zinc-100 to-zinc-400',
    nodes: [
      { tier: '01. STAKEHOLDERS', label: 'VFX Supervisor & Platform QC Lead', detail: 'Post-production facilities, CGI artists, and streaming platform delivery engineers', code: 'S078 / S112' },
      { tier: '02. PROBLEMS', label: 'VFX Plate Squeeze & QC Rejection', detail: 'Turnover plates delivered 14 days late with conform delivery date fixed' },
      { tier: '03. BOTTLENECKS', label: 'IMF Delivery Window Compression', detail: 'Plate turnovers compressed from 6 weeks to 18 days; platform release window threatened', code: 'B025' },
      { tier: '04. IMMEDIATE CAUSES', label: 'Color Pipeline Mismatch', detail: 'Color-space mismatch between camera raw and vendor conform OCIO configurations' },
      { tier: '05. ROOT CAUSES', label: 'Incentive Misalignment (R018)', detail: 'Upstream shoots rush to wrap; post vendors contractually forced to absorb schedule drag', code: 'R018' },
      { tier: '06. DEPENDENCIES', label: 'Picture Lock & Conformed EDL', detail: 'VFX shot generation blocked until master picture edit conforms are locked' },
      { tier: '07. IMPACTS', label: '$180k Unpaid Artist Overtime', detail: 'Vendor margin destroyed; platform delivery delayed risking international premiere' },
      { tier: '08. EXISTING SOLUTIONS', label: '24/7 Rush Crunch & Subcontracting', detail: 'Unplanned burst subcontracting to overseas boutique vendors without color sync' },
      { tier: '09. SOLUTION GAPS', label: 'No Conformed Change Order Ledger', detail: 'No automated mechanism to link on-set directorial changes to post finishing SLAs' },
      { tier: '10. OPPORTUNITIES', label: 'SYNQ.FINISH Predictive QC Gate', detail: 'Automated ACES OCIO validation config & secondary burst VFX partner network', code: 'OPP-03' },
      { tier: '11. PAYING CUSTOMERS', label: 'Post Finishing Houses & Platforms', detail: 'Streaming platforms pay to protect air dates; post facilities protect margins', badge: 'Buyer' }
    ]
  },
  {
    id: 'pathway-rights',
    name: 'Music Sync & Territorial Rights',
    domain: 'IP & Legal Clearance',
    color: 'from-zinc-200 to-zinc-400',
    nodes: [
      { tier: '01. STAKEHOLDERS', label: 'Songwriter, Estate & Sales Agent', detail: 'Composers, music publishers, record labels, and international sales distributors', code: 'S012 / S134' },
      { tier: '02. PROBLEMS', label: 'Territorial Rights Clearance Stall', detail: 'Distributor unable to close $2.5M European theatrical sale due to unverified sync rights' },
      { tier: '03. BOTTLENECKS', label: 'Cross-Border Rights Licensing Choke', detail: 'Fragmented publishing splits and incompatible regional PRO registration codes', code: 'B013' },
      { tier: '04. IMMEDIATE CAUSES', label: 'Paper PDF Cue Sheet Omissions', detail: 'Master recording license cleared only for domestic North American theatrical windows' },
      { tier: '05. ROOT CAUSES', label: 'Rights & Chain-of-Title Fragmentation', detail: 'Multi-party ownership split across defunct publishers and foreign collection societies', code: 'R039' },
      { tier: '06. DEPENDENCIES', label: 'PRO Registration & Cue Sheets', detail: 'Performing Rights Organizations require manual match confirmation before release' },
      { tier: '07. IMPACTS', label: '$2.5M Deal Lost & Royalties Trapped', detail: 'Catalog revenue trapped in international black-box escrow funds for years' },
      { tier: '08. EXISTING SOLUTIONS', label: 'Specialist Rights Clearance Attorneys', detail: 'Expensive manual legal audits costing $15,000 per song title with 90-day turnaround' },
      { tier: '09. SOLUTION GAPS', label: 'No Interoperable Global Rights Registry', detail: 'No real-time machine-readable chain-of-title database across film, music and games' },
      { tier: '10. OPPORTUNITIES', label: 'SYNQ.RIGHTS Chain-of-Title Ledger', detail: 'Automated multi-territory clearance engine & uncollected royalty recovery protocol', code: 'OPP-04' },
      { tier: '11. PAYING CUSTOMERS', label: 'Media Investment Funds & Distributors', detail: 'Private equity funds and distributors unlocking frozen catalog valuations', badge: 'Buyer' }
    ]
  }
];

export function EERGNetworkGraph() {
  const [activePathwayId, setActivePathwayId] = useState<string>('pathway-talent');
  const [selectedNodeIndex, setSelectedNodeIndex] = useState<number>(0);

  const activePathway = GRAPH_PATHWAYS.find((p) => p.id === activePathwayId) || GRAPH_PATHWAYS[0];
  const activeNode = activePathway.nodes[selectedNodeIndex] || activePathway.nodes[0];

  return (
    <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl relative overflow-hidden" id="interactive-network-graph">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.02] blur-[150px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-white font-mono text-xs font-semibold mb-3">
            <Network className="w-3.5 h-3.5" />
            <span>INTERACTIVE ECOSYSTEM GRAPH</span>
            <span className="text-zinc-600">//</span>
            <span>11-TIER CAUSAL PATHWAY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Tracing Causal Nodes Across the Full Ecosystem
          </h2>
          <p className="text-sm text-zinc-300 mt-2 max-w-2xl leading-relaxed">
            Click any node along the 11-step continuum to explore how micro-decisions propagate into macro-economic bottlenecks and commercial leverage points.
          </p>
        </div>

        {/* Pathway Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {GRAPH_PATHWAYS.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setActivePathwayId(p.id);
                setSelectedNodeIndex(0);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono tracking-wider transition-all ${
                activePathwayId === p.id
                  ? 'bg-white text-black font-bold shadow-lg shadow-white/10'
                  : 'bg-black/60 text-zinc-400 hover:text-white border border-white/[0.08]'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* The 11-Tier Interactive Graph Ribbon */}
      <div className="mb-8">
        <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-3 flex items-center justify-between">
          <span>THE 11-STAGE CAUSAL CHAIN (SELECT ANY NODE TO INSPECT)</span>
          <span className="text-white font-semibold">{activePathway.domain}</span>
        </div>

        {/* Horizontal Scrollable Nodes Ribbon */}
        <div className="p-4 rounded-2xl bg-black/60 border border-white/[0.08] overflow-x-auto">
          <div className="flex items-center gap-2 min-w-[1200px] py-2">
            {activePathway.nodes.map((node, idx) => {
              const isSelected = selectedNodeIndex === idx;
              return (
                <React.Fragment key={idx}>
                  <button
                    onClick={() => setSelectedNodeIndex(idx)}
                    className={`flex-1 p-3 rounded-xl border text-left transition-all relative ${
                      isSelected
                        ? 'bg-white text-black border-white shadow-xl scale-105 z-10'
                        : 'bg-[#090B14] border-white/[0.08] text-zinc-300 hover:border-white/30 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-[9px] font-mono uppercase tracking-wider font-bold ${isSelected ? 'text-zinc-700' : 'text-zinc-500'}`}>
                        {node.tier}
                      </span>
                      {node.code && (
                        <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${isSelected ? 'bg-black/10 text-black font-bold' : 'bg-white/10 text-white'}`}>
                          {node.code}
                        </span>
                      )}
                    </div>
                    <div className={`text-xs font-bold line-clamp-1 ${isSelected ? 'text-black' : 'text-white'}`}>
                      {node.label}
                    </div>
                  </button>

                  {idx < activePathway.nodes.length - 1 && (
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-zinc-700'}`} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Node Detailed Inspector */}
      <div className="p-6 sm:p-8 rounded-2xl bg-black/70 border border-white/15 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 mb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-white font-bold bg-white/10 px-2.5 py-0.5 rounded border border-white/20">
                {activeNode.tier}
              </span>
              {activeNode.code && (
                <span className="text-xs font-mono text-zinc-400">
                  CODE: {activeNode.code}
                </span>
              )}
              {activeNode.badge && (
                <span className="text-xs font-mono text-zinc-300 px-2 py-0.5 rounded bg-white/[0.06] border border-white/10">
                  {activeNode.badge}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {activeNode.label}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedNodeIndex((prev) => Math.max(0, prev - 1))}
              disabled={selectedNodeIndex === 0}
              className="px-3 py-1.5 rounded-lg border border-white/[0.08] text-xs font-mono disabled:opacity-30 hover:bg-white/10 text-zinc-300"
            >
              ← Previous Node
            </button>
            <span className="text-xs font-mono text-zinc-500">
              {selectedNodeIndex + 1} of 11
            </span>
            <button
              onClick={() => setSelectedNodeIndex((prev) => Math.min(activePathway.nodes.length - 1, prev + 1))}
              disabled={selectedNodeIndex === activePathway.nodes.length - 1}
              className="px-3 py-1.5 rounded-lg border border-white/[0.08] text-xs font-mono disabled:opacity-30 hover:bg-white/10 text-zinc-300"
            >
              Next Node →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-[#090B14] border border-white/[0.06] md:col-span-2">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-2 font-semibold">
              NODE TELEMETRY & SYSTEMIC CONTEXT
            </span>
            <p className="text-sm text-zinc-200 leading-relaxed">
              {activeNode.detail}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#090B14] border border-white/[0.06] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1 font-semibold">
                SYSTEM PROPAGATION
              </span>
              <div className="text-xs text-zinc-300 font-mono">
                {selectedNodeIndex < 5 ? 'Upstream Root Driver' : selectedNodeIndex < 8 ? 'Cascading Downstream Damage' : 'High-Leverage Commercial Resolution'}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-white flex items-center gap-1.5 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Live Graph Node Verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
