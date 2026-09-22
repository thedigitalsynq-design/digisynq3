import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { HeroSection } from '../components/digisynq/HeroSection';
import { ProblemSection } from '../components/digisynq/ProblemSection';
import { ModelPipeline } from '../components/digisynq/ModelPipeline';
import { AssetLightSection } from '../components/digisynq/AssetLightSection';
import { ProductEcosystem } from '../components/digisynq/ProductEcosystem';
import { ProductDirectory } from '../components/digisynq/ProductDirectory';
import { AudienceSolutions } from '../components/digisynq/AudienceSolutions';
import { InteractiveUseCases } from '../components/digisynq/InteractiveUseCases';
import { MarketplaceSection } from '../components/digisynq/MarketplaceSection';
import { IntelligenceSection } from '../components/digisynq/IntelligenceSection';
import { NetworkEffectFlywheel } from '../components/digisynq/NetworkEffectFlywheel';
import { TrustLayer } from '../components/digisynq/TrustLayer';
import { BusinessModelSection } from '../components/digisynq/BusinessModelSection';
import { DigiSynqOS } from '../components/digisynq/DigiSynqOS';
import { AboutAndPrinciples } from '../components/digisynq/AboutAndPrinciples';
import { CtaFooter } from '../components/digisynq/CtaFooter';
import { JoinModal } from '../components/digisynq/JoinModal';
import { RunbookModal } from '../components/digisynq/RunbookModal';
import { ErrorBoundary } from '../components/digisynq/ErrorBoundary';
import { Globe, Layers, BookOpen, Compass, Shield, Zap, Sparkles } from 'lucide-react';

export function DigiSynqPortalHub() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [runbookOpen, setRunbookOpen] = useState(false);
  const [runbookChapter, setRunbookChapter] = useState(0);
  const [modalRole, setModalRole] = useState('Producer');
  const [selectedDirectoryCategory, setSelectedDirectoryCategory] = useState<string>('All');
  const [activeTab, setActiveTab] = useState<'platform' | 'nodes'>('platform');
  const [selectedNode, setSelectedNode] = useState<number | null>(null);

  const handleOpenJoinModal = (role?: string) => {
    if (role) setModalRole(role);
    setJoinModalOpen(true);
  };

  const handleOpenRunbook = (chapterIndex = 0) => {
    setRunbookChapter(chapterIndex);
    setRunbookOpen(true);
  };

  const handleFilterCategoryInDirectory = (categoryName: string) => {
    setSelectedDirectoryCategory(categoryName);
    const directoryEl = document.getElementById('product-directory');
    if (directoryEl) {
      directoryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const canonicalNodes = [
    {
      id: 1,
      name: 'Node 01: Genesis',
      subtitle: 'The Space Between Nodes',
      description: 'The coordination gap in modern entertainment where 40% of value is lost between siloed players. DigiSynq surfaces latency and establishes connectivity protocols.'
    },
    {
      id: 2,
      name: 'Node 02: Ecosystem',
      subtitle: '12 Canonical Nodes & The Interconnected Network',
      description: 'Mapping production companies, studios, distributors, exhibitors, and tech stacks into a single shared graph of truth.'
    },
    {
      id: 3,
      name: 'Node 03: Flow',
      subtitle: 'The Connective Protocol & Data Exchange',
      description: 'Automated data handoffs between pre-production, set telemetry, sound stages, VFX vendors, and theatrical distribution.'
    },
    {
      id: 4,
      name: 'Node 04: Sector Bridges',
      subtitle: 'Cross-Disciplinary Coordination Engine',
      description: 'Bridging financial capital, creative execution, and exhibitor scheduling through real-time asset-light SLAs.'
    },
    {
      id: 5,
      name: 'Node 05: Damage Control',
      subtitle: 'Operational Continuity & Crisis Mitigation',
      description: 'Rapid threat response, release clash avoidance, leak containment, and real-time box office telemetry (War Room Hub integration).'
    },
    {
      id: 6,
      name: 'Node 06: Intelligence',
      subtitle: 'Surfacing Pipeline Telemetry',
      description: 'Live ingestion of theatrical box office metrics, circuit conditions, sentiment shifts, and multi-market signals.'
    },
    {
      id: 7,
      name: 'Node 07: Idle Capacity',
      subtitle: 'Value Creation Without Asset Ownership',
      description: 'Matching idle stages, post-production gear, cameras, and specialized crew with in-flight productions on-demand.'
    },
    {
      id: 8,
      name: 'Node 08: Economic Model',
      subtitle: 'Sustainable Pipeline Economics',
      description: 'Transparent transaction fees, zero-idle overhead, and high-velocity capital deployment.'
    },
    {
      id: 9,
      name: 'Node 09: Runbook',
      subtitle: 'Standard Operating Procedures & Continuity Protocols',
      description: '24/7 battle-tested response playbooks for delays, production disruptions, talent controversies, and schedule overhauls.'
    },
    {
      id: 10,
      name: 'Node 10: Start a Synq',
      subtitle: 'Direct Pipeline Onboarding & Project Activation',
      description: 'One-click initiation to inject any active slate or film property into the DigiSynq coordination mechanism.'
    }
  ];

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#070A12] text-white font-sans selection:bg-[#5CE1E6] selection:text-[#070A12] antialiased">
        
        {/* Sub-header Bar for DigiSynq Section Navigation */}
        <div className="sticky top-14 z-40 bg-[#0a0c14]/90 backdrop-blur-md border-b border-white/[0.06] px-4 sm:px-8 py-2.5">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-widest text-[#5CE1E6] uppercase font-bold flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                DigiSynq Platform OS
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={() => setActiveTab('platform')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'platform' 
                    ? 'bg-[#5CE1E6]/20 text-[#5CE1E6] border border-[#5CE1E6]/40 font-semibold' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Platform Suite
              </button>
              <button
                onClick={() => setActiveTab('nodes')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'nodes' 
                    ? 'bg-[#5CE1E6]/20 text-[#5CE1E6] border border-[#5CE1E6]/40 font-semibold' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                10 Canonical Nodes
              </button>
              <button
                onClick={() => handleOpenRunbook(0)}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 transition-colors cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                Runbook
              </button>
              <button
                onClick={() => handleOpenJoinModal('Producer')}
                className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold tracking-tight transition-all cursor-pointer shadow-lg shadow-cyan-500/20"
              >
                Join Network
              </button>
            </div>
          </div>
        </div>

        {activeTab === 'platform' ? (
          <main>
            {/* Hero & Value Statement */}
            <HeroSection
              onOpenJoinModal={() => handleOpenJoinModal('Producer')}
              onOpenRunbook={handleOpenRunbook}
            />

            {/* The Problem */}
            <ProblemSection onOpenRunbook={handleOpenRunbook} />

            {/* The Model Pipeline */}
            <ModelPipeline onOpenRunbook={handleOpenRunbook} />

            {/* Asset-Light Model Comparison */}
            <AssetLightSection onOpenRunbook={handleOpenRunbook} />

            {/* Product Ecosystem (12 Platforms, 82 Capabilities) */}
            <ProductEcosystem
              onSelectPlatform={() => {}}
              onFilterCategoryInDirectory={handleFilterCategoryInDirectory}
              onOpenRunbook={handleOpenRunbook}
            />

            {/* Searchable Product Directory */}
            <ProductDirectory
              initialCategory={selectedDirectoryCategory}
              onOpenJoinModal={handleOpenJoinModal}
              onOpenRunbook={handleOpenRunbook}
            />

            {/* Audience / Customer Segments */}
            <AudienceSolutions
              onOpenJoinModal={handleOpenJoinModal}
              onFilterCategoryInDirectory={handleFilterCategoryInDirectory}
              onOpenRunbook={handleOpenRunbook}
            />

            {/* Interactive Use Cases */}
            <InteractiveUseCases onOpenRunbook={handleOpenRunbook} />

            {/* Marketplace of Independent Nodes */}
            <MarketplaceSection onOpenJoinModal={handleOpenJoinModal} />

            {/* Intelligence & Data Moat */}
            <IntelligenceSection onOpenRunbook={handleOpenRunbook} />

            {/* Network Effect Flywheel */}
            <NetworkEffectFlywheel onOpenRunbook={handleOpenRunbook} />

            {/* Trust, Governance & Verification */}
            <TrustLayer onOpenRunbook={handleOpenRunbook} />

            {/* Business Model & Monetization */}
            <BusinessModelSection onOpenJoinModal={handleOpenJoinModal} />

            {/* DigiSynq OS Product Suite */}
            <DigiSynqOS onOpenJoinModal={handleOpenJoinModal} />

            {/* About & Principles */}
            <AboutAndPrinciples />

            {/* Final CTA & Footer */}
            <CtaFooter
              onOpenJoinModal={handleOpenJoinModal}
              onOpenRunbook={handleOpenRunbook}
            />
          </main>
        ) : (
          /* 10 Canonical Nodes Dossier View */
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
            <div className="mb-10 text-center sm:text-left">
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">STRATEGIC ARCHITECTURE</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">10 Canonical Ecosystem Nodes</h2>
              <p className="text-white/60 text-sm mt-2 max-w-2xl">
                The formalized architecture that powers the DigiSynq coordination protocol across entertainment pre-production, filming, post-production, and distribution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {canonicalNodes.map((n) => (
                <div
                  key={n.id}
                  onClick={() => setSelectedNode(selectedNode === n.id ? null : n.id)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    selectedNode === n.id 
                      ? 'bg-cyan-950/30 border-cyan-500/50 shadow-xl shadow-cyan-500/10' 
                      : 'bg-[#111422] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold">
                      {n.name}
                    </span>
                    <span className="text-[11px] text-white/40 font-mono">STATUS: SYNCHRONIZED</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{n.subtitle}</h3>
                  <p className="text-xs text-white/70 leading-relaxed">{n.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Global Modals */}
        <JoinModal
          isOpen={joinModalOpen}
          onClose={() => setJoinModalOpen(false)}
          defaultRole={modalRole}
        />
        <RunbookModal
          isOpen={runbookOpen}
          onClose={() => setRunbookOpen(false)}
          defaultChapter={runbookChapter}
        />
      </div>
    </ErrorBoundary>
  );
}
