import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, RefreshCw, KeyRound, Building, Camera, Film, Wrench, ArrowUpRight, BookOpen } from 'lucide-react';

interface MarketplaceSectionProps {
  onOpenRunbook?: (chapterIndex?: number) => void;
  onOpenJoinModal?: (role?: string) => void;
}

export const MarketplaceSection: React.FC<MarketplaceSectionProps> = ({
  onOpenRunbook,
  onOpenJoinModal,
}) => {
  const [activeMarketType, setActiveMarketType] = useState<number>(0);

  const capacityCategories = [
    {
      title: 'Equipment',
      icon: Camera,
      idleExample: 'Anamorphic lenses, ARRI 35 packages & lighting trucks sitting in vault during 2-week downtime.',
      ownerAdvantage: 'Retain 100% equipment title; earn $8,000–$25,000/mo in insured sub-rental income.',
      demandAdvantage: 'Indie productions access tier-1 optics locally without paying exorbitant cross-border shipping fees.',
      turnaround: 'Instant insured booking with digital COI endorsement.'
    },
    {
      title: 'Studios & Stages',
      icon: Building,
      idleExample: 'LED virtual production volumes & soundstages booked only 18 days out of the month.',
      ownerAdvantage: 'Turn vacant stage dark days into high-margin commercial and test-shoot revenue blocks.',
      demandAdvantage: 'Producers book certified soundstages for 3-day pickup shoots without signing 6-month master leases.',
      turnaround: 'Turnkey facility agreements with power and acoustic specifications.'
    },
    {
      title: 'Screens',
      icon: Film,
      idleExample: '180-seat auditoriums running at 12% occupancy on Monday–Wednesday afternoons and evenings.',
      ownerAdvantage: 'Theatres monetize empty screens with zero risk; ticket thresholds must be met before show locks.',
      demandAdvantage: 'Film clubs, anime fandoms, and documentary makers host theatrical premieres in real cinemas.',
      turnaround: 'Dynamic holdover scheduling & automated KDM digital key delivery.'
    },
    {
      title: 'Locations',
      icon: KeyRound,
      idleExample: 'Architectural estates, vintage diners, and industrial warehouses with sporadic filming permits.',
      ownerAdvantage: 'Property owners earn premium filming location fees protected by $5M escrow damage coverage.',
      demandAdvantage: 'Location managers scout 360° virtual interiors and download municipal permit checklists.',
      turnaround: 'Standardized location agreement with automated damage deposit release.'
    },
    {
      title: 'Services & Post',
      icon: RefreshCw,
      idleExample: 'Boutique color grading suites and Dolby Atmos mix rooms between major studio turnovers.',
      ownerAdvantage: 'Post facilities fill vacant suite hours with indie feature sound mixes and festival finishings.',
      demandAdvantage: 'Filmmakers get world-class audio mixing and color timing at off-peak rates.',
      turnaround: 'Transparent fixed-rate milestones with remote streaming sign-offs.'
    },
    {
      title: 'Specialized Vendors',
      icon: Wrench,
      idleExample: 'Local catering fleets, honeywagons, mobile generator trucks, and craft security teams.',
      ownerAdvantage: 'Consistent pipeline of incoming film shoots without expensive sales reps.',
      demandAdvantage: 'Line producers contract vetted, certified local suppliers across any filming territory.',
      turnaround: 'Consolidated purchase orders with automated net-15 disbursements.'
    }
  ];

  const currentCategory = capacityCategories[activeMarketType];
  const Icon = currentCategory.icon;

  return (
    <section
      id="marketplace"
      className="py-24 sm:py-32 bg-[#070A12] border-t border-white/[0.08] relative overflow-hidden"
    >


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div data-augmented-ui="tl-clip br-clip" className="aug-hud-chip inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/90 border border-[#5CE1E6]/30 text-[#5CE1E6] font-mono text-[11px] font-bold tracking-[2px] mb-6 backdrop-blur-xl shadow-[0_0_15px_rgba(92,225,230,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] shadow-[0_0_8px_#5CE1E6]" />
            Capacity engine.
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[0.98] font-denton-extrabold">
            Unlock what exists.<br />
            <span className="text-white/75">Liquidity for dormant assets.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
            DigiSynq creates liquid markets around underutilized cinema capacity without ever purchasing a single camera or building a single soundstage.
          </p>

          <p className="mt-2 text-xs sm:text-sm font-mono text-[#5CE1E6] font-medium">
            The asset owner keeps ownership. DigiSynq creates the connection and transaction layer.
          </p>
        </div>

        {/* The 3-Tier Core Visual: OWNER -> DIGISYNQ -> DEMAND */}
        <div className="mb-14 rounded-3xl bg-[#0D1220]/75 border border-white/[0.12] p-6 sm:p-10 shadow-2xl relative backdrop-blur-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Step 1: Asset Owner */}
            <div className="p-6 rounded-2xl bg-[#070A12]/70 border border-[#4D8DFF]/25 relative shadow-lg text-white backdrop-blur-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono tracking-wider text-[#4D8DFF] block mb-2 font-semibold">
                  Supply Side
                </span>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  Asset Owner
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Retains 100% legal ownership, physical custody, and operational maintenance of equipment, stages, and screens.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#4D8DFF] font-medium">
                  Zero Loss of Custody
                </span>
                {onOpenJoinModal && (
                  <button
                    onClick={() => onOpenJoinModal('Equipment Owner')}
                    className="text-xs font-mono font-bold text-white hover:text-[#4D8DFF] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>List Gear</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>

            {/* Step 2: DigiSynq Protocol */}
            <div className="p-6 rounded-2xl bg-[#0D1220]/90 border border-[#5CE1E6]/50 relative shadow-[0_0_30px_rgba(92,225,230,0.12)] text-white backdrop-blur-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono tracking-wider text-[#5CE1E6] block mb-2 font-semibold">
                  The Network Layer
                </span>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  DigiSynq
                </h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                  Provides discovery, trust verification, dynamic matching, insurance endorsements, contracts, and milestone escrow.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#5CE1E6]/30 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#5CE1E6] font-bold">
                  Pure Software Margin
                </span>
                <a
                  href="#platform-model"
                  className="text-xs font-mono font-bold text-white hover:text-[#5CE1E6] flex items-center gap-1 transition-colors"
                >
                  <span>Protocol</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Step 3: Demand */}
            <div className="p-6 rounded-2xl bg-[#070A12]/70 border border-[#5EF2B0]/25 relative shadow-lg text-white backdrop-blur-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono tracking-wider text-[#5EF2B0] block mb-2 font-semibold">
                  Demand Side
                </span>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  Productions & Events
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Accesses world-class physical resources at competitive rates with instant booking, insured custody, and verified specs.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#5EF2B0] font-medium">
                  Frictionless Utilization
                </span>
                <a
                  href="#product-directory"
                  className="text-xs font-mono font-bold text-white hover:text-[#5EF2B0] flex items-center gap-1 transition-colors"
                >
                  <span>Directory</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Capacity Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-8">
          {capacityCategories.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveMarketType(idx)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-200 backdrop-blur-xl ${
                activeMarketType === idx
                  ? 'bg-[#5CE1E6]/15 text-[#5CE1E6] border-[#5CE1E6]/60 font-bold shadow-[0_0_15px_rgba(92,225,230,0.15)]'
                  : 'bg-[#0D1220]/60 border-white/[0.08] text-white/70 hover:text-white hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-end mb-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${activeMarketType === idx ? 'bg-[#5CE1E6] shadow-[0_0_6px_#5CE1E6]' : 'bg-transparent'}`} />
              </div>
              <span className="text-xs font-semibold block tracking-tight">
                {cat.title}
              </span>
            </button>
          ))}
        </div>

        {/* Interactive Showcase Panel */}
        <div className="rounded-3xl bg-[#0D1220]/75 border border-white/[0.12] p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#5CE1E6]/10 border border-[#5CE1E6]/30 flex items-center justify-center text-[#5CE1E6]">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono tracking-wider text-white/50 font-semibold">
                    Marketplace Domain
                  </span>
                  <h4 className="text-xl font-bold text-white tracking-tight">
                    Underutilized {currentCategory.title}
                  </h4>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5 border-t border-white/[0.08]">
                <div>
                  <span className="text-xs font-mono tracking-wider text-white/50 block mb-1.5 font-semibold">
                    Typical Idle Capacity:
                  </span>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {currentCategory.idleExample}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono tracking-wider text-[#4D8DFF] block mb-1.5 font-semibold">
                    Value to Asset Owner:
                  </span>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                    {currentCategory.ownerAdvantage}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono tracking-wider text-[#5EF2B0] block mb-1.5 font-semibold">
                    Value to Production:
                  </span>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {currentCategory.demandAdvantage}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Cross-Section Navigation Actions */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#product-directory"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.10] border border-white/20 text-white text-xs font-mono font-bold tracking-[1.5px] transition-all shadow-sm active:scale-95"
          >
            <span>Browse All 82 Capabilities in Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {onOpenRunbook && (
            <button
              onClick={() => onOpenRunbook(4)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5CE1E6]/10 hover:bg-[#5CE1E6]/20 border border-[#5CE1E6]/35 text-[#5CE1E6] hover:text-white text-xs font-mono font-bold tracking-[1.5px] transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Inspect Monetization Architecture (Chapter 05)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
