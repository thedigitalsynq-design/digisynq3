import { useState } from 'react';
import { playPing, playSynqChime } from '../../utils/audio';
import { 
  ArrowRight, 
  Layers, 
  Cpu, 
  Unlink, 
  Link2, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  Zap,
  Globe,
  Compass,
  ArrowDown
} from 'lucide-react';
import { ECOSYSTEM_NODES, DIGITAL_EXTENSION_TEAMS, SYNQ_PRINCIPLE_MODES, OUTCOME_SYSTEMS } from '../../data/ecosystemData';
import { SynqMode, NodeId } from '../types';

interface WhySynqManifestoProps {
  onOpenProjectModal: (context?: string) => void;
  onNavigateToMap: () => void;
  onSelectNode?: (nodeId: NodeId) => void;
}

export function WhySynqManifesto({ onOpenProjectModal, onNavigateToMap, onSelectNode }: WhySynqManifestoProps) {
  const [activePrincipleMode, setActivePrincipleMode] = useState<SynqMode>('ONE_TEAM');
  const [activeExtensionId, setActiveExtensionId] = useState<string>('digital');
  const [siloComparisonMode, setSiloComparisonMode] = useState<'silo' | 'synq'>('synq');
  const [selectedPossibility, setSelectedPossibility] = useState<NodeId>('brand');
  const [footprintActiveStage, setFootprintActiveStage] = useState<string>('BUILD');

  const activeExtension = DIGITAL_EXTENSION_TEAMS.find(t => t.id === activeExtensionId) || DIGITAL_EXTENSION_TEAMS[8];
  const activeNodeData = ECOSYSTEM_NODES.find(n => n.id === selectedPossibility) || ECOSYSTEM_NODES[0];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-24">
      
      {/* 1. HERO MANIFESTO OPENING */}
      <section className="space-y-8 text-left border-b border-white/10 pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/15 rounded-xs text-[11px] font-mono tracking-widest text-blue-400 uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SYNQ-SQUARE MANIFESTO // FOUNDATIONAL DOCTRINE</span>
        </div>

        <div className="space-y-4">
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05]">
            WE CAN BE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-white">EVERYTHING.</span>
          </h1>
          <p className="font-display font-medium text-2xl sm:text-3xl lg:text-4xl text-white/90 leading-snug">
            Not because we do everything.
          </p>
          <p className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-blue-400 leading-snug">
            Because your brand’s digital world is everything.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4 font-mono text-xs text-white/70">
          {[
            'A presence.', 'A website.', 'Search.', 'Social.', 'Content.',
            'Design.', 'Marketing.', 'Technology.', 'Data.', 'Growth.'
          ].map((item, idx) => (
            <div key={idx} className="p-3 bg-white/[0.03] border border-white/10 rounded-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="p-6 sm:p-8 rounded-sm bg-gradient-to-r from-blue-950/40 via-blue-900/20 to-transparent border border-blue-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <p className="font-mono text-xs text-blue-300 tracking-wider">
              Sometimes it needs one of them. Sometimes it needs all of them.
            </p>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
              SYNQ-SQUARE connects them.
            </h2>
          </div>
          <button
            onClick={() => {
              playPing(640, 'triangle', 0.08);
              onOpenProjectModal('Hero Manifesto Hook');
            }}
            className="px-6 py-3 bg-white text-black font-mono text-xs font-bold rounded-xs hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-blue-500/10"
          >
            <span>SYNCHRONIZE YOUR BRAND</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 2. ONE BRAND. MANY POSSIBILITIES. ONE SYNCHRONIZED SYSTEM */}
      <section className="space-y-8">
        <div className="space-y-3">
          <span className="font-mono text-xs text-blue-400 tracking-widest block">
            01 // THE 12 CAPABILITIES
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            ONE BRAND. MANY POSSIBILITIES. ONE SYNCHRONIZED SYSTEM.
          </h2>
          <p className="text-base text-white/70 max-w-3xl leading-relaxed">
            We can step in wherever the brand needs us. We can build one piece. We can connect several. Or we can build the entire digital footprint.
          </p>
        </div>

        {/* 12 Possibilities Interactive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
          {ECOSYSTEM_NODES.map((node) => {
            const isSelected = selectedPossibility === node.id;
            return (
              <button
                key={node.id}
                onClick={() => {
                  playPing(520, 'sine', 0.04);
                  setSelectedPossibility(node.id);
                  if (onSelectNode) onSelectNode(node.id);
                }}
                className={`p-3.5 text-left rounded-xs border transition-all flex flex-col justify-between min-h-[96px] ${
                  isSelected
                    ? 'bg-blue-600/20 border-blue-400 text-white shadow-md shadow-blue-500/20 ring-1 ring-blue-400/50'
                    : 'bg-white/[0.02] border-white/10 text-white/70 hover:bg-white/[0.06] hover:border-white/25 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-mono text-[10px] text-white/40 tracking-wider uppercase">
                    {node.category.split(' ')[0]}
                  </span>
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-blue-400 animate-pulse' : 'bg-white/20'}`} />
                </div>
                <span className="font-display font-bold text-sm sm:text-base tracking-wide mt-2">
                  {node.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detail Inspection Card for the Selected Possibility */}
        <div className="p-6 sm:p-8 rounded-sm bg-[#0B0E14] border border-white/15 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 font-mono text-[10px] text-blue-400 uppercase tracking-wider">
                <span>INSPECTING POSSIBILTY</span>
                <span>//</span>
                <span>{activeNodeData.category}</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                {activeNodeData.label}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  playPing(600, 'sine', 0.05);
                  onNavigateToMap();
                }}
                className="px-3.5 py-1.5 rounded-xs border border-white/20 hover:border-white/40 font-mono text-xs text-white/80 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>VIEW IN FOOTPRINT MAP</span>
              </button>
              <button
                onClick={() => {
                  playPing(680, 'sine', 0.06);
                  onOpenProjectModal(`${activeNodeData.label} Possibility Engagement`);
                }}
                className="px-4 py-1.5 bg-blue-500 hover:bg-blue-400 text-white font-mono text-xs font-semibold rounded-xs transition-colors"
              >
                DEPLOY {activeNodeData.label}
              </button>
            </div>
          </div>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            {activeNodeData.shortDescription} {activeNodeData.roleInFootprint}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xs space-y-2">
              <span className="text-[10px] text-white/40 uppercase tracking-widest block">HOW IT STEPS IN</span>
              <p className="text-white/90">
                Can operate as a dedicated standalone team or integrate directly into your existing staff.
              </p>
            </div>
            <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xs space-y-2">
              <span className="text-[10px] text-white/40 uppercase tracking-widest block">DOWNSTREAM SYNQ</span>
              <p className="text-white/90">
                Directly synchronized with {activeNodeData.connectedTo.map(c => c.toUpperCase()).join(', ')}.
              </p>
            </div>
            <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xs space-y-2">
              <span className="text-[10px] text-white/40 uppercase tracking-widest block">TELEMETRY PROOF</span>
              <p className="text-emerald-400 font-semibold">
                {activeNodeData.liveSignalDemo.metrics[0].label}: {activeNodeData.liveSignalDemo.metrics[0].value}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WE DON'T FIT INTO ONE BOX */}
      <section className="space-y-8">
        <div className="space-y-3">
          <span className="font-mono text-xs text-blue-400 tracking-widest block">
            02 // THE DE-DEPARTMENTALIZATION PRINCIPLE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            WE DON’T FIT INTO ONE BOX.
          </h2>
          <p className="text-base text-white/70 max-w-3xl leading-relaxed">
            A brand doesn’t operate in departments. Its customers don’t experience SEO, Website, Social Media, Advertising, or Content separately.
          </p>
        </div>

        <div className="p-6 sm:p-10 rounded-sm bg-[#090C12] border border-white/15 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <span className="font-mono text-xs text-white/50 tracking-wider">
              INTERACTIVE PERSPECTIVE COMPARISON
            </span>
            <div className="flex items-center gap-2 font-mono text-xs bg-white/5 p-1 rounded-xs border border-white/10">
              <button
                onClick={() => {
                  playPing(380, 'sawtooth', 0.08);
                  setSiloComparisonMode('silo');
                }}
                className={`px-3 py-1 rounded-xs transition-colors ${
                  siloComparisonMode === 'silo'
                    ? 'bg-red-500/20 text-red-300 border border-red-500/40 font-semibold'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                FRAGMENTED SILOS
              </button>
              <button
                onClick={() => {
                  playSynqChime();
                  setSiloComparisonMode('synq');
                }}
                className={`px-3 py-1 rounded-xs transition-colors ${
                  siloComparisonMode === 'synq'
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40 font-semibold'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                SYNQ-SQUARE REALITY
              </button>
            </div>
          </div>

          {siloComparisonMode === 'silo' ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 font-mono text-xs">
                {[
                  { title: 'SEO AGENCY', issue: 'Optimizes for clicks that bounce because web UX is slow' },
                  { title: 'WEB STUDIO', issue: 'Builds beautiful pages that Google crawler cannot index' },
                  { title: 'SOCIAL TEAM', issue: 'Posts out-of-stock items with zero live inventory awareness' },
                  { title: 'ADVERTISING AGENCY', issue: 'Burns ad budget sending visitors to un-personalized landing pages' },
                  { title: 'CONTENT WRITERS', issue: 'Write articles locked in Google Drive nobody distributes' }
                ].map((silo, idx) => (
                  <div key={idx} className="p-4 bg-red-950/20 border border-red-500/30 rounded-xs space-y-2 text-red-200">
                    <div className="flex items-center gap-2 font-bold text-red-400">
                      <Unlink className="w-3.5 h-3.5 shrink-0" />
                      <span>{silo.title}</span>
                    </div>
                    <p className="text-[11px] text-red-300/80 leading-relaxed">{silo.issue}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-red-950/30 border border-red-500/40 rounded-xs text-xs font-mono text-red-300 text-center">
                CUSTOMER EXPERIENCE: Disjointed, confusing, and frustrating. Zero unified brand memory.
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-6 sm:p-8 bg-blue-950/20 border border-blue-500/30 rounded-xs space-y-4">
                <div className="flex items-center gap-3">
                  <Link2 className="w-6 h-6 text-blue-400 shrink-0" />
                  <span className="font-display font-extrabold text-xl sm:text-2xl text-white">
                    They experience the brand.
                  </span>
                </div>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  When a customer searches, reads an article, clicks a link, browses the store, and receives an order confirmation, they never say: “That was a great marketing department experience.” They say: <strong className="text-white font-semibold">“That was a great brand.”</strong>
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-2 font-mono text-xs text-blue-300">
                  <span className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-xs">Continuous Voice</span>
                  <span className="text-white/30">→</span>
                  <span className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-xs">Instant Loading</span>
                  <span className="text-white/30">→</span>
                  <span className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-xs">Coherent Checkout</span>
                  <span className="text-white/30">→</span>
                  <span className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-xs">Autonomous Retention</span>
                </div>
              </div>
              <div className="p-4 bg-blue-950/30 border border-blue-500/40 rounded-xs text-xs font-mono text-blue-200 text-center">
                SYNQ-SQUARE WORKS THE SAME WAY. All 12 capabilities share a single unified nervous system.
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 4. THINK OF US AS YOUR DIGITAL EXTENSION */}
      <section className="space-y-8">
        <div className="space-y-3">
          <span className="font-mono text-xs text-blue-400 tracking-widest block">
            03 // THE DIGITAL EXTENSION
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            THINK OF US AS YOUR DIGITAL EXTENSION.
          </h2>
          <p className="text-base text-white/70 max-w-3xl leading-relaxed">
            Plug us in wherever your brand needs bandwidth, specialized craft, or full operational synchronization.
          </p>
        </div>

        {/* Interactive Extension Carousel / Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Prompts List */}
          <div className="lg:col-span-5 space-y-2">
            {DIGITAL_EXTENSION_TEAMS.map((team) => {
              const isSelected = activeExtensionId === team.id;
              return (
                <button
                  key={team.id}
                  onClick={() => {
                    playPing(560, 'sine', 0.04);
                    setActiveExtensionId(team.id);
                  }}
                  className={`w-full text-left p-4 rounded-xs border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-blue-950/40 border-blue-400 text-white shadow-md shadow-blue-500/10'
                      : 'bg-white/[0.02] border-white/10 text-white/60 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="font-mono text-xs text-white/40 block">
                      {team.needPrompt}
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-white">
                      {team.teamTitle}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-blue-400' : 'text-white/20'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Extension Detail Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-sm bg-[#0C0F17] border border-white/15 space-y-6">
            <div className="space-y-2 border-b border-white/10 pb-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-blue-400 uppercase tracking-wider">
                  EXTENSION PROFILE // {activeExtension.id.toUpperCase()}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/80 text-emerald-300 border border-emerald-800/40">
                  READY TO ENGAGE
                </span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                {activeExtension.teamTitle}
              </h3>
              <p className="text-xs font-mono text-white/50">
                {activeExtension.shortRole}
              </p>
            </div>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              {activeExtension.description}
            </p>

            {/* Capabilities and Deliverables */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-white/40 uppercase tracking-wider block">
                  CORE CAPABILITIES
                </span>
                <ul className="space-y-1.5 text-xs text-white/80 font-mono">
                  {activeExtension.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-[10px] text-white/40 uppercase tracking-wider block">
                  DELIVERABLES & ARTIFACTS
                </span>
                <ul className="space-y-1.5 text-xs text-white/80 font-mono">
                  {activeExtension.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Impact Metric & CTA */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-0.5">
                <span className="font-mono text-[10px] text-white/40 uppercase tracking-wider block">
                  BENCHMARK IMPACT
                </span>
                <span className="font-mono text-sm text-emerald-400 font-semibold">
                  {activeExtension.metricImpact}
                </span>
              </div>

              <button
                onClick={() => {
                  playPing(640, 'sine', 0.06);
                  onOpenProjectModal(activeExtension.teamTitle);
                }}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold rounded-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>ACTIVATE THIS EXTENSION</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 5. THE SYNQ-SQUARE PRINCIPLE */}
      <section className="space-y-8">
        <div className="space-y-3">
          <span className="font-mono text-xs text-blue-400 tracking-widest block">
            04 // THE OPERATING PRINCIPLE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            THE SYNQ-SQUARE PRINCIPLE
          </h2>
          <div className="space-y-1">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              YOU DON’T NEED EVERYTHING.
            </h3>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-blue-400">
              YOU NEED WHAT MAKES SENSE.
            </h3>
          </div>
        </div>

        {/* 3 Operational Modes Toggle */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SYNQ_PRINCIPLE_MODES.map((mode) => {
            const isSelected = activePrincipleMode === mode.id;
            return (
              <div
                key={mode.id}
                onClick={() => {
                  playPing(isSelected ? 440 : 600, 'sine', 0.05);
                  setActivePrincipleMode(mode.id as SynqMode);
                }}
                className={`cursor-pointer p-6 rounded-sm border transition-all space-y-4 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-950/30 border-blue-400 shadow-lg shadow-blue-500/10 ring-1 ring-blue-400/40'
                    : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-white/40 tracking-wider">
                      MODE CONFIGURATION
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-blue-400' : 'bg-white/20'}`} />
                  </div>
                  <h4 className="font-display font-black text-xl text-white">
                    {mode.title}
                  </h4>
                  <p className="font-mono text-xs text-blue-300">
                    {mode.subtitle}
                  </p>
                  <p className="text-xs text-white/70 leading-relaxed pt-2">
                    {mode.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/10 font-mono text-[11px] text-white/60">
                  <span className="text-white/40 block text-[10px] uppercase">IDEAL FOR:</span>
                  <p className="text-white/80">{mode.idealFor}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Anti-Agency Guarantees */}
        <div className="p-6 sm:p-8 rounded-sm bg-white/[0.02] border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-xs bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
              ✓
            </div>
            <span className="text-white/90 font-bold">No forced packages.</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-xs bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
              ✓
            </div>
            <span className="text-white/90 font-bold">No unnecessary services.</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-xs bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
              ✓
            </div>
            <span className="text-white/90 font-bold">No artificial complexity.</span>
          </div>
        </div>
        <p className="text-center font-mono text-sm text-blue-300">
          Just the right combination for the brand.
        </p>
      </section>

      {/* 6. THE DIGITAL FOOTPRINT */}
      <section className="space-y-8">
        <div className="space-y-3">
          <span className="font-mono text-xs text-blue-400 tracking-widest block">
            05 // THE DIGITAL FOOTPRINT
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            THE DIGITAL FOOTPRINT
          </h2>
          <p className="text-base text-white/70 max-w-3xl leading-relaxed">
            Every brand leaves a footprint. We help shape it.
          </p>
        </div>

        {/* Progressive 5-Stage Flow: BUILD -> DISCOVER -> CONNECT -> CONVERT -> GROW */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {OUTCOME_SYSTEMS.map((system, idx) => {
              const isSelected = footprintActiveStage === system.id;
              return (
                <button
                  key={system.id}
                  onClick={() => {
                    playPing(480 + idx * 40, 'sine', 0.05);
                    setFootprintActiveStage(system.id);
                  }}
                  className={`p-5 rounded-xs border text-left transition-all flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? 'bg-blue-950/50 border-blue-400 text-white ring-1 ring-blue-400/40 shadow-md shadow-blue-500/10'
                      : 'bg-white/[0.02] border-white/10 text-white/60 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-white/40">STAGE 0{idx + 1}</span>
                    <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-blue-400' : 'bg-white/20'}`} />
                  </div>

                  <div>
                    <h3 className="font-display font-black text-lg text-white">
                      {system.id}
                    </h3>
                    <p className="font-mono text-xs text-blue-300 mt-0.5">
                      {system.headline}
                    </p>
                  </div>

                  <span className="text-[11px] text-white/50 leading-snug">
                    {system.components.length} interconnected subsystems
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Details Card */}
          {(() => {
            const activeSys = OUTCOME_SYSTEMS.find(s => s.id === footprintActiveStage) || OUTCOME_SYSTEMS[0];
            return (
              <div className="p-6 sm:p-8 rounded-sm bg-[#090C12] border border-white/15 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <span className="font-mono text-xs text-blue-400 uppercase tracking-widest block">
                      STAGE DEPLOYMENT // {activeSys.id}
                    </span>
                    <h4 className="font-display font-black text-2xl text-white mt-1">
                      {activeSys.headline}
                    </h4>
                  </div>
                  <p className="text-xs font-mono text-white/50 max-w-md">
                    {activeSys.tagline}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {activeSys.components.map((comp, i) => (
                    <div key={i} className="p-4 bg-white/[0.02] border border-white/10 rounded-xs space-y-2">
                      <span className="font-display font-bold text-sm text-white block">
                        {comp.title}
                      </span>
                      <p className="text-xs text-white/70 leading-relaxed">
                        {comp.description}
                      </p>
                      <div className="pt-2 border-t border-white/5 font-mono text-[10px] text-blue-300">
                        {comp.interconnects}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-blue-950/20 border border-blue-500/30 rounded-xs flex items-center justify-between gap-4 font-mono text-xs">
                  <span className="text-blue-200">
                    <strong>SYNQ VERIFICATION:</strong> {activeSys.synqOutcome}
                  </span>
                </div>
              </div>
            );
          })()}

          {/* THE CLIMAX STATEMENT */}
          <div className="p-8 sm:p-12 text-center rounded-sm bg-gradient-to-b from-blue-950/40 to-[#08090C] border border-blue-500/40 space-y-4">
            <p className="font-mono text-sm sm:text-base text-white/80">
              And when these pieces work together:
            </p>
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-200 to-white tracking-tight animate-pulse">
              THEY SYNQ.
            </h2>
          </div>
        </div>
      </section>

      {/* 7. THE CLOSING CREDO & DISPATCH */}
      <section className="p-8 sm:p-12 rounded-sm bg-[#0A0D14] border border-white/20 space-y-8 text-center max-w-4xl mx-auto">
        <div className="space-y-4">
          <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">
            SYNQ-SQUARE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            WE CAN BE EVERYTHING.
          </h2>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-blue-400 tracking-tight">
            BUT NEVER EVERYTHING AT ONCE.
          </h2>
        </div>

        <div className="space-y-2 font-mono text-base sm:text-lg text-white/80">
          <p>Only what your brand needs.</p>
          <p>Only where we create value.</p>
          <p className="text-white font-bold">Always connected.</p>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              playPing(520, 'sine', 0.05);
              onNavigateToMap();
            }}
            className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-mono text-xs rounded-xs border border-white/20 transition-colors"
          >
            EXPLORE THE 12 POSSIBILITIES MAP
          </button>

          <button
            id="manifesto-bottom-synchronize-cta"
            onClick={() => {
              playSynqChime();
              onOpenProjectModal('Manifesto Closing Credo');
            }}
            className="w-full sm:w-auto px-8 py-3 bg-white text-black font-mono text-xs font-bold rounded-xs hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
          >
            <span>TALK TO SYNQ-SQUARE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
