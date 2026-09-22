import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { motion } from 'motion/react';
import { useModalFocus } from '../../hooks/useModalFocus';
import {
  X,
  BookOpen,
  Network,
  Cpu,
  Layers,
  Shield,
  Coins,
  TrendingUp,
  Users,
  Search,
  ChevronRight,
  Printer
} from 'lucide-react';

interface RunbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultChapter?: number;
}

export const RunbookModal: FC<RunbookModalProps> = ({
  isOpen,
  onClose,
  defaultChapter = 0,
}) => {
  const [activeChapter, setActiveChapter] = useState(defaultChapter);
  const [searchQuery, setSearchQuery] = useState('');
  const dialogRef = useModalFocus<HTMLDivElement>(isOpen);

  useEffect(() => {
    if (isOpen) {
      setActiveChapter(defaultChapter);
    }
  }, [defaultChapter, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const chapters: Array<{ id: string; title: string; badge: string; icon: any; content: any }> = [
    {
      id: 'thesis',
      title: 'Executive Thesis & Market Opportunity',
      badge: 'Chapter 01',
      icon: TrendingUp,
      content: {
        headline: 'Asset-Light Coordination Mechanism for Entertainment',
        summary: 'DigiSynq operates in the space between the ecosystem’s nodes — connecting producers, talent, investors, brands, distributors, exhibitors, platforms and audiences. Rather than owning the assets that power entertainment, DigiSynq synchronizes them. The principle is simple: own less, connect more, and make the ecosystem work better together.',
        sections: [
          {
            title: '1.1 The Macroeconomic Crisis in Cinema Production',
            text: 'The global entertainment industry is undergoing the most severe capital contraction in modern history. The post-streaming CapEx hangover, rising interest rates, and soaring insurance rates have rendered the legacy studio model economically untenable. Historically, production houses and studios accumulated tens of millions of dollars in physical balance-sheet assets—sound stages, virtual production LED volumes, anamorphic lens packages, and heavy camera trucks. However, the operational calendar of cinema is inherently episodic. These multi-million-dollar physical assets sit idle for 42% to 58% of the operational year, generating massive balance sheet depreciation, debt service drag, and unrecoverable carrying costs.',
          },
          {
            title: '1.2 The Asset-Light Network Thesis',
            text: 'Rather than owning the assets that power entertainment, DigiSynq synchronizes them. It connects fragmented information, resources, opportunities and participants; coordinates activity across the value chain; and monitors outcomes to reduce friction, leakage and risk while improving the utilization of existing ecosystem capacity. By converting idle physical assets into liquid, software-accessible network capacity, DigiSynq unlocks exponential operating leverage, high gross margins (75%+), and compounding data network effects.',
          },
          {
            title: '1.3 Market Sizing & Total Addressable Market (TAM / SAM / SOM)',
            text: 'Independent market analysis confirms a multi-billion dollar opportunity across fragmented cinema operations:',
            bullets: [
              'Global Entertainment Production & Distribution TAM: $242.8B across film, scripted episodic, unscripted, and high-end commercial advertising.',
              'Physical Equipment & Studio Facility Rental Market: $42.6B currently mediated by fragmented, manual phone/email brokers with 35% markups.',
              'Global Cast, Crew, Logistics & Payroll Administration: $68.4B burdened by manual paper call sheets, union compliance audits, and delayed bank wires.',
              'Territorial Licensing, Clean IP & Screener Distribution: $58.2B subjected to rampant digital piracy and opaque distributor reporting.',
              'Serviceable Addressable Market (SAM): $64.5B focused on mid-budget independent features ($2M–$50M), OTT co-productions, and commercial volume.',
              'Serviceable Obtainable Market (SOM): $4.85B projected 5-year capture across top global production hubs (Los Angeles, London, Mumbai, Vancouver, Sydney, Atlanta).',
            ],
          },
          {
            title: '1.4 Core Value Proposition by Ecosystem Participant',
            bullets: [
              'For Producers: Eliminates up to 34% of upfront CapEx through on-demand asset matching, verified crew rosters, and automated union compliance.',
              'For Equipment Owners & Studios: Monetizes idle inventory and dark soundstage days with verified insurance binders and instant escrow payout.',
              'For Talent & Specialized Crew: Direct verified bookings, guaranteed milestone escrow payments, and verifiable cryptographic reputation credits.',
              'For Distributors & Exhibitors: Anti-piracy forensic screener vaults, live box-office telemetry, and automated theatrical settlement.',
            ],
          },
        ],
      },
    },
    {
      id: 'founders',
      title: 'Co-Founders & Core Leadership',
      badge: 'Chapter 02',
      icon: Users,
      content: {
        headline: 'The Architects & Operating Leadership of DigiSynq',
        summary: 'Meet the four founding partners driving the strategic, technological, ecosystem, and operational execution of the network.',
        sections: [
          {
            title: '2.1 Executive Founding Leadership Matrix',
            text: 'The founding team brings together deep industry domain expertise across cinema production, distributed systems engineering, institutional film partnerships, and multi-territory business scaling.',
            founders: [
              {
                name: 'Yathish',
                role: 'Co-Founder • Network Architecture & Strategy',
                bio: 'Architect of DigiSynq’s economic protocol and asset-light business model. Formulated the 10-stage compounding business flywheel and capital-efficient liquidity routing mechanism. Drives overall vision, corporate finance, and long-term sovereign film fund alliances.',
                focus: ['Systemic Protocol Architecture', 'Economic Game Theory', 'Institutional Strategy', 'Capital Allocation'],
                accent: '#5CE1E6',
              },
              {
                name: 'Varun',
                role: 'Co-Founder • Platform Engineering & Infrastructure',
                bio: 'Pioneered the low-latency distributed microservices and SynqTrust cryptographic engine powering all 12 platforms. Directs real-time hardware telemetry integration with ARRI, RED, and Sony Venice camera systems, along with enterprise zero-trust security.',
                focus: ['Distributed Cloud Infrastructure', 'Real-Time Hardware Telemetry', 'Cryptographic Security', 'API Scalability'],
                accent: '#8B7CFF',
              },
              {
                name: 'Rakshith',
                role: 'Co-Founder • Cinema Ecosystem & Industry Partnerships',
                bio: 'Leads tier-1 studio alliances, rental house network integration (Panavision, ARRI Rental, Cinelease), and guild relationships (SAG-AFTRA, IATSE, DGA). Ensures day-one supply-side liquidity and high-profile pilot production onboarding.',
                focus: ['Studio & Guild Alliances', 'Supply Liquidity Growth', 'Rental House Syndication', 'Territorial Packaging'],
                accent: '#4D8DFF',
              },
              {
                name: 'Rubesh',
                role: 'Co-Founder • Operations & Market Expansion',
                bio: 'Oversees global operational deployment, regional hub rollouts, 24-hour dispute arbitration frameworks, vendor KYC/AML compliance, and customer success. Established the zero-friction SLA protocols across all active filming territories.',
                focus: ['Global Hub Deployment', 'Dispute Arbitration SLAs', 'Regulatory & Union Compliance', 'Operational Excellence'],
                accent: '#5EF2B0',
              },
            ],
          },
          {
            title: '2.2 Operational Charters & Governance Principles',
            bullets: [
              'Founder Alignment: Consensus governance on protocol tokenless economic mechanics and capital allocation.',
              'Domain Autonomy: Dedicated founder oversight over Technology (Varun), Product/Strategy (Yathish), Ecosystem (Rakshith), and Operations (Rubesh).',
              'Long-Term Commitment: Multi-year founder equity vesting tied to network GMV thresholds, verified platform transactions, and zero-defect SLA ratings.',
            ],
          },
        ],
      },
    },
    {
      id: 'ecosystem',
      title: '12 Platforms & 82 Capabilities Architecture',
      badge: 'Chapter 03',
      icon: Layers,
      content: {
        headline: 'Institutional 12-Platform Ecosystem Breakdown',
        summary: 'A fully synchronized suite of 12 specialized platforms organized into 4 strategic operational pillars, comprising 82 modular capabilities.',
        sections: [
          {
            title: '3.1 Strategic Operational Pillars',
            text: 'Rather than disjointed point-solutions, DigiSynq links every facet of the filmmaking lifecycle into four interconnected pillars sharing unified state, identity, and payment clearing rails.',
          },
        ],
        platformsList: [
          { name: 'SynqCast', role: 'Talent & Crew Roster', metrics: '8 Capabilities', desc: 'Real-time verified availability, union registry status (SAG-AFTRA, IATSE, DGA), direct booking escrow, and verifiable cryptographic credit logs.' },
          { name: 'SynqStage', role: 'Stages & Virtual Volumes', metrics: '7 Capabilities', desc: 'Virtual production LED stages, acoustically certified soundstages, backlots, post suites, and power grid telemetry verification.' },
          { name: 'SynqGear', role: 'Cameras, Lenses & Rigs', metrics: '9 Capabilities', desc: 'Peer-to-peer equipment rental mesh with GPS tracking, shock-sensor telemetry, instant equipment insurance binders, and automated check-in/out.' },
          { name: 'SynqSlate', role: 'Packaging & Development', metrics: '8 Capabilities', desc: 'Dynamic script breakdowns, lookbook generation, AI stripboards, budget synthesis, and co-production packaging engines.' },
          { name: 'SynqVault', role: 'Content Rights & Screeners', metrics: '8 Capabilities', desc: 'Territorial licensing vault, anti-piracy forensic invisible watermarking, clean chain-of-title IP exchange, and DRM screener delivery.' },
          { name: 'SynqScreen', role: 'Theatrical & Exhibition', metrics: '6 Capabilities', desc: 'Crowdfunded community screenings, independent cinema venue matching, real-time ticket sales telemetry, and automated box-office split clearing.' },
          { name: 'SynqBrand', role: 'Product Placement & Sponsors', metrics: '6 Capabilities', desc: 'Intelligent script product placement matching, digital brand integration, sponsorship contracting, and brand ROI audience analytics.' },
          { name: 'SynqFinance', role: 'Capital & Tranching Hub', metrics: '7 Capabilities', desc: 'Partner-led debt syndication, state/provincial tax credit monetization, gap financing marketplaces, and completion bond escrow clearing.' },
          { name: 'SynqData', role: 'Audience & Box Office AI', metrics: '6 Capabilities', desc: 'Pre-release demographic sentiment diagnostics, predictive box office modeling, genre demand curves, and competitive theatrical benchmarking.' },
          { name: 'SynqFlow', role: 'Production Operating Workflow', metrics: '7 Capabilities', desc: 'Automated digital call sheets, live set wrap reports, meal penalty tracking, automated SAG/IATSE compliance, and live expense logging.' },
          { name: 'SynqTrust', role: 'Verification & Escrow Clearing', metrics: '5 Capabilities', desc: 'Cryptographic milestone clearing, FDIC-insured escrow vaults, 24-hour dispute arbitration SLAs, and zero-knowledge KYC/AML identity proofs.' },
          { name: 'SynqOS', role: 'Global Cinema Operating Hub', metrics: '5 Capabilities', desc: 'Unified executive dashboard coordinating all 11 sub-platforms through a single synchronized API, audit log, and multi-tenant permission tree.' },
        ],
      },
    },
    {
      id: 'pipeline',
      title: '5-Phase Model Execution Pipeline',
      badge: 'Chapter 04',
      icon: Cpu,
      content: {
        headline: 'Deterministic Workflow Execution & State Machine',
        summary: 'The chronological journey of a cinema project on DigiSynq from development to revenue distribution.',
        sections: [
          {
            title: '4.1 End-to-End Pipeline Overview',
            text: 'Every production flows through a deterministic 5-phase pipeline managed by smart contracts and automated verification checkpoints, removing manual paper friction and payment delays.',
          },
        ],
        phases: [
          {
            phase: '01',
            title: 'Development, Script Breakdown & Verified Packaging',
            input: 'Screenplay PDF, Director Lookbook, Preliminary Budget Assumptions',
            output: 'Cryptographic SynqID, verified script element breakdown, initial cast/crew matching wishlist, and tax credit eligibility matrix.',
            time: '< 15 minutes',
          },
          {
            phase: '02',
            title: 'Capacity Allocation & Escrow Lockup',
            input: 'Shooting schedule, stage location parameters, gear spec sheet, talent bids',
            output: 'Locked calendar reservations across stages and gear packages, multi-party escrow agreement, and insurance binder issuance.',
            time: 'Instant (< 5s)',
          },
          {
            phase: '03',
            title: 'Principal Photography & Live Telemetry',
            input: 'Daily digital call sheets, RFID camera check-outs, GPS location pings, wrap reports',
            output: 'Real-time budget burn tracking, automated union overtime compliance, and automated day-rate milestone authorizations.',
            time: 'Continuous real-time',
          },
          {
            phase: '04',
            title: 'Post-Production & Cryptographic Asset Return',
            input: 'Equipment return diagnostic scan, post-production suite completion, VFX approval',
            output: 'Sub-second release of security deposits, instantaneous split payments via ACH/SEPA/Wire to crew and vendors.',
            time: '< 2.4 seconds',
          },
          {
            phase: '05',
            title: 'Distribution, Theatrical Screenings & Automated Royalties',
            input: 'Theatrical ticket feeds, streaming platform minutes, territorial license executions',
            output: 'Audited waterfall disbursements, residual distributions, and compounding network reputation score increments.',
            time: 'Automated 24/7',
          },
        ],
      },
    },
    {
      id: 'economics',
      title: 'Commercial Economics & Unit Model',
      badge: 'Chapter 05',
      icon: Coins,
      content: {
        headline: 'Defensible Multi-Pronged Monetization Model',
        summary: 'High-margin, recurring software revenues and transaction fees with zero physical balance-sheet depreciation.',
        sections: [
          {
            title: '5.1 Revenue Stream Taxonomy',
            text: 'DigiSynq captures value across the entire cinema transaction chain without taking capital risk or owning physical assets.',
          },
        ],
        vectors: [
          {
            name: 'Marketplace Transaction Commissions',
            rate: '2.5% – 7.5%',
            desc: 'Assessed on completed transactions: 5.0% on gear & soundstage rentals, 3.5% on verified crew bookings, 7.5% on territorial rights licensing deals, and 2.5% on production debt syndication.',
          },
          {
            name: 'SaaS Platform Tiering (Subscription)',
            rate: '$49 – $1,200 / month',
            desc: 'Tiered memberships for creators, production companies, and enterprise studios providing advanced script breakdown AI, private talent pools, custom telemetry, and API integrations.',
          },
          {
            name: 'Fintech Escrow & Treasury Float Clearing',
            rate: '0.75% fee + Treasury Float Yield',
            desc: 'Milestone escrow fee (0.75%) plus short-term yield generated on multi-million dollar production escrow reserves held in partner FDIC-insured banking vaults during active shoots.',
          },
          {
            name: 'Enterprise Infrastructure & API Licensing',
            rate: '$25,000 – $150,000 / year',
            desc: 'Custom enterprise deployments and high-throughput API endpoints for major Hollywood/Bollywood studios, sovereign film funds, and global streaming networks.',
          },
        ],
      },
    },
    {
      id: 'comparison',
      title: 'Asset-Light vs CapEx 10-Year Run Rate',
      badge: 'Chapter 06',
      icon: Network,
      content: {
        headline: 'Institutional Financial Model & 10-Year Pro-Forma',
        summary: 'Comparative financial analysis proving the mathematical superiority of software network orchestration over asset-heavy studio conglomerates.',
        sections: [
          {
            title: '6.1 The 10-Year Balance Sheet Comparison',
            text: 'Traditional production facilities require massive continuous CapEx reinvestment every 3 to 5 years just to keep camera packages, LED volumes, and soundstages competitive. DigiSynq scales with zero hardware depreciation.',
          },
        ],
        tableRows: [
          { vector: 'Balance Sheet CapEx (10-Year)', legacy: '$180M – $250M in hardware, real estate & debt', digisynq: '$0 hardware CapEx; 100% cloud-native software' },
          { vector: 'Annual Depreciation Impact', legacy: '18%–25% annual non-cash write-down eroding net profit', digisynq: '0% depreciation; absorbed entirely by third-party asset owners' },
          { vector: 'Gross Margin Profile', legacy: '14% – 22% (depressed by maintenance, storage, staff)', digisynq: '76% – 84% (characteristic of high-scale enterprise SaaS)' },
          { vector: 'Capital Turnover Velocity', legacy: '0.4x – 0.8x annual turnover on heavy fixed infrastructure', digisynq: '14.5x+ software capital velocity with compounding returns' },
          { vector: 'Downside Agility in Strikes/Downturns', legacy: 'Fixed facility carrying costs lead to distressed asset fire-sales', digisynq: 'Zero fixed physical overhead; variable cost structure adjusts instantly' },
          { vector: 'Return on Invested Capital (ROIC)', legacy: '6.8% – 9.2% ROIC due to massive asset base', digisynq: '54.0% – 72.5% ROIC driven by pure software operating leverage' },
        ],
      },
    },
    {
      id: 'trust',
      title: 'SynqTrust & Cryptographic Protocol',
      badge: 'Chapter 07',
      icon: Shield,
      content: {
        headline: 'Institutional Verification, DRM & Dispute Arbitration',
        summary: 'How DigiSynq eliminates counterparty risk, fraud, piracy, and delayed payments across the entertainment supply chain.',
        sections: [
          {
            title: '7.1 Zero-Trust Architecture Pillars',
            text: 'Cinema is built on trust, but historically governed by informal agreements and opaque paper trails. SynqTrust turns trust into a mathematically verifiable, automated guarantee.',
          },
        ],
        protocols: [
          {
            title: 'Triple-Verification Identity & Credit Protocol',
            text: 'Every member undergoes automated biometric identity verification, union status confirmation (SAG-AFTRA, IATSE, DGA registry checks), and verifiable credit history audits before transacting.',
          },
          {
            title: 'Dual-Key Milestone Escrow Vaults',
            text: 'Production capital is deposited into segregated FDIC-insured vaults. Funds cannot be unilaterally pulled or withheld: release requires programmatic trigger satisfaction (e.g. wrap report sign-off + asset return scan).',
          },
          {
            title: 'Forensic Invisible Watermarking & DRM',
            text: 'All pre-release scripts, visual assets, and screener streams distributed via SynqVault receive imperceptible, frame-level steganographic watermarks encoding viewer identity, preventing and tracing piracy within seconds.',
          },
          {
            title: '24-Hour Cinema Dispute Resolution SLAs',
            text: 'Equipment damage disputes, schedule cancellations, or quality rejections are arbitrated by dedicated industry-veteran panels under binding 24-hour SLAs with pre-negotiated indemnity payout tables.',
          },
        ],
      },
    },
    {
      id: 'flywheel',
      title: '10-Stage Compounding Flywheel & Moat',
      badge: 'Chapter 08',
      icon: BookOpen,
      content: {
        headline: 'Self-Reinforcing Network Effects & Scaled Moat',
        summary: 'How each participant and transaction compounds network density, data intelligence, and defensibility.',
        sections: [
          {
            title: '8.1 The 10-Stage Compounding Mechanism',
            text: 'DigiSynq benefits from classic two-sided and multi-sided network effects where every added lens, soundstage, producer, and crew member increases platform value for all other nodes.',
          },
        ],
        flywheelSteps: [
          'Stage 01: High-end equipment rental houses & soundstage operators list idle inventory to monetize dark calendar days.',
          'Stage 02: Lower equipment overhead and transparent pricing attract independent producers and commercial directors.',
          'Stage 03: Projects onboard verified DPs, department heads, and specialized crew into the SynqCast roster.',
          'Stage 04: Successfully wrapped shoots generate immutable transaction histories and verified credit reputation scores.',
          'Stage 05: Verified project metadata and finished screeners attract international sales agents, buyers, and screening venues.',
          'Stage 06: Data exhaust from box office, rentals, and budgets trains DigiSynq’s predictive box-office and audience AI models.',
          'Stage 07: High predictive accuracy attracts institutional film completion bonders, tax credit syndicators, and equity financiers.',
          'Stage 08: Capital influx directly finances larger slate budgets on DigiSynq, requiring all suppliers to use the network.',
          'Stage 09: Cross-platform density creates insurmountable switching costs against fragmented, single-point SaaS competitors.',
          'Stage 10: DigiSynq becomes the ubiquitous global digital operating standard for cinema commerce and production infrastructure.',
        ],
      },
    },
  ];

  const filteredChapters = chapters.filter(
    (ch) =>
      ch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ch.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ch.content.headline.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const current = chapters[activeChapter];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-3xl overflow-hidden"
      ref={dialogRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label="DigiSynq executive runbook"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-6xl h-[92vh] rounded-[24px] bg-[#070A12]/95 border border-white/20 shadow-[0_40px_100px_rgba(0,0,0,0.98),inset_0_1px_1px_rgba(255,255,255,0.25)] flex flex-col md:flex-row overflow-hidden relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar controls */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            onClick={() => window.print()}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white/80 hover:text-white transition-all text-xs flex items-center gap-1.5 cursor-pointer shadow-sm"
            title="Print Runbook"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline font-mono text-[11px]">Print Runbook</span>
          </button>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white transition-all cursor-pointer shadow-sm"
            aria-label="Close Runbook"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <aside className="w-full md:w-80 bg-[#0A0E18]/90 border-b md:border-b-0 md:border-r border-white/10 p-5 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Header Badge */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-[#5CE1E6]/15 border border-[#5CE1E6]/35 flex items-center justify-center shadow-[0_0_15px_rgba(92,225,230,0.2)]">
                <BookOpen className="w-4 h-4 text-[#5CE1E6]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white font-denton-bold tracking-tight">
                  Executive Runbook
                </h3>
                <span className="text-[10px] font-mono tracking-[1.5px] text-[#5CE1E6] uppercase font-semibold">
                  DigiSynq OS Architecture
                </span>
              </div>
            </div>

            {/* Quick Filter Input */}
            <div className="relative mb-4">
              <Search className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                aria-label="Search runbook chapters"
                placeholder="Search runbook chapters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#5CE1E6]/50 transition-colors font-sans"
              />
            </div>

            {/* Chapter List */}
            <nav className="space-y-1">
              {filteredChapters.map((ch) => {
                const realIdx = chapters.findIndex((c) => c.id === ch.id);
                const Icon = ch.icon;
                const isActive = realIdx === activeChapter;

                return (
                  <button
                    key={ch.id}
                    onClick={() => setActiveChapter(realIdx)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                      isActive
                        ? 'bg-white/10 border border-[#5CE1E6]/40 shadow-lg text-white'
                        : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-[#5CE1E6]' : 'text-white/40 group-hover:text-white/70'}`} />
                      <div>
                        <span className="text-[10px] font-mono tracking-[1px] text-white/40 block leading-tight">
                          {ch.badge}
                        </span>
                        <span className="text-xs font-semibold tracking-tight block truncate max-w-[170px]">
                          {ch.title}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'translate-x-0.5 text-[#5CE1E6]' : 'opacity-0 group-hover:opacity-60'}`} />
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Footer Metadata */}
          <div className="pt-5 mt-5 border-t border-white/10 text-[11px] font-mono text-white/40 space-y-1.5">
            <div className="flex items-center justify-between">
              <span>Audience:</span>
              <span className="text-[#5EF2B0] font-semibold">Institutional & Partners</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Founders:</span>
              <span className="text-white/80 font-semibold">Yathish • Varun • Rakshith • Rubesh</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Edition:</span>
              <span>2026 Institutional v2.4</span>
            </div>
          </div>
        </aside>

        {/* Main Content Viewer */}
        <main className="flex-1 p-6 sm:p-10 md:p-12 overflow-y-auto relative text-left">


          <div className="max-w-3xl relative z-10">
            {/* Chapter Header */}
            <div className="mb-8 pb-6 border-b border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block px-3 py-1 rounded-full bg-[#0D1220]/90 border border-white/20 text-[#5CE1E6] font-mono text-[10px] font-bold tracking-[2px]">
                  {current.badge}
                </span>
                <span className="text-[10px] font-mono text-white/40 tracking-[1.5px] uppercase">
                  DigiSynq Comprehensive Specification
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-denton-extrabold mb-3 leading-[1.1]">
                {current.content.headline}
              </h2>
              <p className="text-sm sm:text-base text-white/75 leading-relaxed font-sans">
                {current.content.summary}
              </p>
            </div>

            {/* General Content Sections */}
            {current.content.sections && current.content.sections.map((sec: any, idx: number) => (
              <div key={idx} className="mb-8">
                <h4 className="text-base sm:text-lg font-bold text-white tracking-tight font-denton-bold mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] shadow-[0_0_8px_#5CE1E6]" />
                  {sec.title}
                </h4>
                {sec.text && (
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans mb-4">
                    {sec.text}
                  </p>
                )}
                {sec.bullets && (
                  <ul className="space-y-2.5 bg-[#0D1220]/70 border border-white/10 rounded-xl p-5 text-xs text-white/85 font-mono leading-relaxed">
                    {sec.bullets.map((b: string, i: number) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-[#5CE1E6] font-bold mt-0.5">›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {sec.founders && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                    {sec.founders.map((f: { name: string; role: string; bio: string; focus: string[]; accent: string }) => (
                      <div
                        key={f.name}
                        className="p-5 rounded-2xl bg-[#0D1220]/85 border border-white/15 hover:border-white/30 transition-all duration-300 relative overflow-hidden group shadow-lg"
                      >


                        <div className="flex items-center justify-between mb-3 relative z-10">
                          <div>
                            <h5 className="text-lg font-bold text-white font-denton-bold">
                              {f.name}
                            </h5>
                            <span
                              className="text-[10px] font-mono font-bold tracking-[1.5px] uppercase block mt-0.5"
                              style={{ color: f.accent }}
                            >
                              Co-Founder
                            </span>
                          </div>
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center font-denton-extrabold text-base text-white border border-white/20 bg-gradient-to-b from-white/15 to-white/5"
                            style={{ borderTopColor: f.accent }}
                          >
                            {f.name.charAt(0)}
                          </div>
                        </div>

                        <div className="text-[11px] font-mono font-bold text-white/80 mb-2 pb-2 border-b border-white/10">
                          {f.role.split('•')[1]?.trim() || f.role}
                        </div>

                        <p className="text-xs text-white/70 leading-relaxed mb-4 font-sans relative z-10">
                          {f.bio}
                        </p>

                        <div className="flex flex-wrap gap-1.5 relative z-10">
                          {f.focus.map((tag: string, ti: number) => (
                            <span
                              key={ti}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/70 border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Platforms List */}
            {current.content.platformsList && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {current.content.platformsList.map((p: any) => (
                  <div
                    key={p.name}
                    className="p-4 rounded-xl bg-[#0D1220]/75 border border-white/10 hover:border-[#5CE1E6]/40 transition-all shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-white font-denton-bold">
                        {p.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#5CE1E6] font-bold px-2 py-0.5 rounded bg-[#5CE1E6]/10 border border-[#5CE1E6]/25">
                        {p.metrics}
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-white/50 mb-2">
                      {p.role}
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed font-sans">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Phases */}
            {current.content.phases && (
              <div className="space-y-4 mb-8">
                {current.content.phases.map((ph: any) => (
                  <div
                    key={ph.phase}
                    className="p-5 rounded-xl bg-[#0D1220]/75 border border-white/15 shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-[#8B7CFF] tracking-[2px]">
                        PHASE {ph.phase}
                      </span>
                      <span className="text-[10px] font-mono text-[#5EF2B0] bg-[#5EF2B0]/10 px-2 py-0.5 rounded border border-[#5EF2B0]/25">
                        Execution: {ph.time}
                      </span>
                    </div>
                    <h5 className="text-sm sm:text-base font-bold text-white mb-2 font-denton-bold">
                      {ph.title}
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-white/70 pt-2 border-t border-white/10">
                      <div>
                        <span className="text-white/40 block text-[10px] uppercase tracking-wider">Input Requirements:</span>
                        <span className="text-white/80">{ph.input}</span>
                      </div>
                      <div>
                        <span className="text-white/40 block text-[10px] uppercase tracking-wider">Deterministic Output:</span>
                        <span className="text-[#5CE1E6]">{ph.output}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Revenue Vectors */}
            {current.content.vectors && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {current.content.vectors.map((vec: any) => (
                  <div
                    key={vec.name}
                    className="p-5 rounded-xl bg-[#0D1220]/75 border border-white/15 shadow-sm"
                  >
                    <div className="text-xs font-mono font-bold text-[#5EF2B0] tracking-[1.5px] mb-1">
                      {vec.rate}
                    </div>
                    <h5 className="text-base font-bold text-white mb-2 font-denton-bold">
                      {vec.name}
                    </h5>
                    <p className="text-xs text-white/70 leading-relaxed font-sans">
                      {vec.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Table Rows */}
            {current.content.tableRows && (
              <div className="rounded-xl border border-white/15 overflow-hidden mb-8 shadow-sm">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/5 border-b border-white/15 font-mono text-[11px] text-white/60">
                    <tr>
                      <th className="p-3.5">Vector</th>
                      <th className="p-3.5 text-[#FFC857]">Traditional Studio Model</th>
                      <th className="p-3.5 text-[#5CE1E6]">DigiSynq Network Model</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80 font-sans">
                    {current.content.tableRows.map((r: any, ri: number) => (
                      <tr key={ri} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-3.5 font-bold font-mono text-white text-xs">{r.vector}</td>
                        <td className="p-3.5 text-white/70">{r.legacy}</td>
                        <td className="p-3.5 text-white font-medium">{r.digisynq}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Protocols */}
            {current.content.protocols && (
              <div className="space-y-4 mb-8">
                {current.content.protocols.map((pr: any, pi: number) => (
                  <div key={pi} className="p-5 rounded-xl bg-[#0D1220]/75 border border-white/15 shadow-sm">
                    <h5 className="text-base font-bold text-white mb-2 font-denton-bold flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#5CE1E6]" />
                      {pr.title}
                    </h5>
                    <p className="text-xs text-white/75 leading-relaxed font-sans">
                      {pr.text}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Flywheel */}
            {current.content.flywheelSteps && (
              <div className="space-y-2 mb-8">
                {current.content.flywheelSteps.map((step: string, si: number) => (
                  <div
                    key={si}
                    className="p-3.5 rounded-lg bg-[#0D1220]/75 border border-white/10 flex items-start gap-3 text-xs text-white/85 shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] flex-shrink-0 mt-1.5" />
                    <span className="leading-relaxed font-sans">{step}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom Chapter Navigation Bar */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs">
              <button
                onClick={() => setActiveChapter(Math.max(0, activeChapter - 1))}
                disabled={activeChapter === 0}
                className={`px-4 py-2 rounded-full border transition-all ${
                  activeChapter === 0
                    ? 'opacity-30 border-white/10 text-white/40 cursor-not-allowed'
                    : 'border-white/20 hover:border-white/40 text-white hover:bg-white/5 cursor-pointer'
                }`}
              >
                ← Previous Chapter
              </button>
              <span className="font-mono text-[11px] text-white/40">
                Chapter {activeChapter + 1} of {chapters.length}
              </span>
              <button
                onClick={() => setActiveChapter(Math.min(chapters.length - 1, activeChapter + 1))}
                disabled={activeChapter === chapters.length - 1}
                className={`px-4 py-2 rounded-full border transition-all ${
                  activeChapter === chapters.length - 1
                    ? 'opacity-30 border-white/10 text-white/40 cursor-not-allowed'
                    : 'border-white/20 hover:border-[#5CE1E6]/50 text-white hover:bg-[#5CE1E6]/10 cursor-pointer'
                }`}
              >
                Next Chapter →
              </button>
            </div>
          </div>
        </main>
      </motion.div>
    </div>
  );
};
