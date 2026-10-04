import React, { useState } from 'react';
import { 
  Layers, Sparkles, Film, DollarSign, Cpu, Monitor, 
  ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, 
  ChevronRight, ExternalLink 
} from 'lucide-react';
import { ECOSYSTEM_5_LAYERS, EcosystemLayer, EcosystemSubNode, EcosystemLayerId } from '../data/system_architecture_data';
import { Link } from 'react-router-dom';

const LAYER_ICONS: Record<EcosystemLayerId, React.ComponentType<{ className?: string }>> = {
  CREATION: Sparkles,
  PRODUCTION: Film,
  COMMERCIAL: DollarSign,
  INFRASTRUCTURE: Cpu,
  CONSUMPTION: Monitor,
};

export function Ecosystem5LayersMap() {
  const [selectedLayerId, setSelectedLayerId] = useState<EcosystemLayerId>('CREATION');
  const [selectedSubNodeId, setSelectedSubNodeId] = useState<string>('creators');

  const activeLayer = ECOSYSTEM_5_LAYERS.find((l) => l.id === selectedLayerId) || ECOSYSTEM_5_LAYERS[0];
  const activeSubNode = activeLayer.subNodes.find((n) => n.id === selectedSubNodeId) || activeLayer.subNodes[0];

  const handleLayerSelect = (layerId: EcosystemLayerId) => {
    setSelectedLayerId(layerId);
    const layer = ECOSYSTEM_5_LAYERS.find((l) => l.id === layerId);
    if (layer && layer.subNodes.length > 0) {
      setSelectedSubNodeId(layer.subNodes[0].id);
    }
  };

  return (
    <div className="bg-[#05070D] border border-white/[0.08] p-6 sm:p-8 rounded-none">
      {/* Layer Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 pb-6 border-b border-white/[0.08]">
        {ECOSYSTEM_5_LAYERS.map((layer, index) => {
          const isSelected = layer.id === selectedLayerId;
          const Icon = LAYER_ICONS[layer.id];

          return (
            <button
              key={layer.id}
              onClick={() => handleLayerSelect(layer.id)}
              className={`text-left p-3.5 border transition-all duration-200 relative group ${
                isSelected
                  ? 'bg-white text-black border-white shadow-lg'
                  : 'bg-[#0A0D16] text-zinc-400 border-white/[0.06] hover:border-zinc-500 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-mono text-[10px] tracking-widest uppercase ${isSelected ? 'text-zinc-600' : 'text-zinc-500'}`}>
                  0{index + 1} LAYER
                </span>
                <Icon className={`w-4 h-4 ${isSelected ? 'text-black' : 'text-zinc-400 group-hover:text-white'}`} />
              </div>
              <div className={`font-bold text-sm tracking-tight uppercase ${isSelected ? 'text-black' : 'text-white'}`}>
                {layer.name}
              </div>
              <div className={`text-[11px] truncate mt-1 ${isSelected ? 'text-zinc-700' : 'text-zinc-500'}`}>
                {layer.subNodes.length} Core Nodes
              </div>
            </button>
          );
        })}
      </div>

      {/* Layer Headline & Description */}
      <div className="py-6 border-b border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
            ECOSYSTEM LAYER: {activeLayer.name}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase mt-0.5">
            {activeLayer.tagline}
          </h3>
          <p className="text-sm text-zinc-400 mt-1 max-w-3xl leading-relaxed">
            {activeLayer.description}
          </p>
        </div>
      </div>

      {/* Interactive Main Body: Node Selector Strip & Deep Relational Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Left Column: SubNodes Selector */}
        <div className="lg:col-span-4 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-2">
            Select Entity Node to Trace Dependencies:
          </span>
          {activeLayer.subNodes.map((node) => {
            const isNodeSelected = node.id === activeSubNode.id;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedSubNodeId(node.id)}
                className={`w-full text-left p-3.5 border transition-all duration-200 flex items-center justify-between ${
                  isNodeSelected
                    ? 'bg-zinc-800 text-white border-white'
                    : 'bg-[#090C15] text-zinc-400 border-white/[0.05] hover:border-zinc-700 hover:text-zinc-200'
                }`}
              >
                <div>
                  <div className={`font-semibold text-sm ${isNodeSelected ? 'text-white' : 'text-zinc-300'}`}>
                    {node.name}
                  </div>
                  <div className="text-xs text-zinc-500 font-mono mt-0.5 truncate max-w-[240px]">
                    {node.title}
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isNodeSelected ? 'text-white translate-x-0.5' : 'text-zinc-600'}`} />
              </button>
            );
          })}
        </div>

        {/* Right Column: Node Relational Card */}
        <div className="lg:col-span-8 bg-[#090C15] border border-white/[0.08] p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">NODE METADATA</span>
              <h4 className="text-2xl font-bold tracking-tight text-white uppercase mt-0.5">
                {activeSubNode.name}
              </h4>
              <p className="text-sm font-mono text-zinc-400 mt-0.5">{activeSubNode.title}</p>
            </div>
            <Link
              to="/participate"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider bg-white/[0.05] hover:bg-white text-zinc-300 hover:text-black border border-white/[0.1] px-3 py-1.5 transition-colors self-start sm:self-auto"
            >
              <span>Connect Role</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="text-sm text-zinc-300 leading-relaxed bg-black/40 p-4 border border-white/[0.04]">
            <span className="text-xs font-mono uppercase text-zinc-500 block mb-1">Ecosystem Function:</span>
            {activeSubNode.role}
          </div>

          {/* Grid of Inputs & Outputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white/[0.02] border border-white/[0.06]">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-2">
                What It Needs To Operate:
              </span>
              <ul className="space-y-1.5">
                {activeSubNode.whatItNeeds.map((need, i) => (
                  <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                    <span className="text-amber-400 font-mono mt-0.5">•</span>
                    <span>{need}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-white/[0.02] border border-white/[0.06]">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block mb-2">
                What It Delivers Into The Network:
              </span>
              <ul className="space-y-1.5">
                {activeSubNode.whatItProvides.map((prov, i) => (
                  <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                    <span className="text-emerald-400 font-mono mt-0.5">•</span>
                    <span>{prov}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Direct Dependencies */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-2">
              Critical Counterparty Dependencies:
            </span>
            <div className="flex flex-wrap gap-2">
              {activeSubNode.dependencies.map((dep, i) => (
                <span key={i} className="text-xs font-mono bg-zinc-800 text-zinc-200 border border-zinc-700 px-2.5 py-1">
                  ↔ {dep}
                </span>
              ))}
            </div>
          </div>

          {/* Risk If Uncoordinated vs DigiSynq Intervention */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-red-950/20 border border-red-500/20">
              <div className="flex items-center gap-1.5 text-xs font-mono text-red-400 uppercase tracking-wider mb-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Risk If Disconnected:</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {activeSubNode.riskIfUncoordinated}
              </p>
            </div>

            <div className="p-4 bg-emerald-950/20 border border-emerald-500/20">
              <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>DigiSynq Mechanism:</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {activeSubNode.digisynqIntervention}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
