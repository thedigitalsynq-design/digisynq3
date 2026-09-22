import { useState, FormEvent } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Terminal, Layers, Sparkles } from 'lucide-react';
import { playPing, playSynqChime } from '../../utils/audio';
import { ECOSYSTEM_NODES, DIGITAL_EXTENSION_TEAMS, SYNQ_PRINCIPLE_MODES } from '../../data/ecosystemData';
import { NodeId, SynqMode } from '../types';

interface ProjectBlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedContext?: string;
}

export function ProjectBlueprintModal({
  isOpen,
  onClose,
  preselectedContext
}: ProjectBlueprintModalProps) {
  const [brandName, setBrandName] = useState('');
  const [email, setEmail] = useState('');
  const [domain, setDomain] = useState('');
  const [selectedMode, setSelectedMode] = useState<SynqMode>('ONE_TEAM');
  const [targetNodes, setTargetNodes] = useState<NodeId[]>(['brand', 'web', 'search', 'content']);
  const [chosenExtension, setChosenExtension] = useState<string>('digital');
  const [primaryFriction, setPrimaryFriction] = useState('Fragmented multi-agency silos leaking ad spend');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

  const toggleNode = (nodeId: NodeId) => {
    playPing(480, 'sine', 0.04);
    setTargetNodes(prev => 
      prev.includes(nodeId) ? prev.filter(n => n !== nodeId) : [...prev, nodeId]
    );
  };

  const handleModeChange = (mode: SynqMode) => {
    setSelectedMode(mode);
    if (mode === 'ONE_SPECIALIST') {
      setTargetNodes(['web']);
    } else if (mode === 'ONE_TEAM') {
      setTargetNodes(['brand', 'web', 'search', 'content', 'marketing']);
    } else {
      setTargetNodes(ECOSYSTEM_NODES.map(n => n.id));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    playSynqChime();
    const generatedId = `SYNQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(generatedId);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        id="project-blueprint-modal-card"
        className="relative w-full max-w-2xl bg-[#0C0F17] border border-white/20 rounded-md shadow-2xl overflow-hidden my-auto"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-xs bg-blue-950/40">
              SYNQ DISPATCH
            </span>
            <span className="font-mono text-xs text-white/50">// DIGITAL FOOTPRINT ENGAGEMENT</span>
          </div>

          <button
            onClick={() => {
              playPing(320, 'triangle', 0.08);
              onClose();
            }}
            className="p-1.5 rounded text-white/50 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  SYNCHRONIZE YOUR FOOTPRINT
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-light mt-1">
                  You don’t need everything. You need what makes sense. Tell us where your brand needs us.
                </p>
                {preselectedContext && (
                  <div className="mt-2 font-mono text-[11px] text-blue-300 bg-blue-950/30 border border-blue-900/50 px-2.5 py-1 rounded-xs inline-block">
                    Active Context: {preselectedContext}
                  </div>
                )}
              </div>

              {/* Engagement Principle Mode */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-white/80 block">
                  HOW SHOULD SYNQ-SQUARE WORK WITH YOU?
                </label>
                <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                  {SYNQ_PRINCIPLE_MODES.map((mode) => (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => handleModeChange(mode.id as SynqMode)}
                      className={`p-2.5 text-left rounded-xs border transition-all ${
                        selectedMode === mode.id
                          ? 'bg-blue-600 border-blue-400 text-white font-semibold'
                          : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                      }`}
                    >
                      <div className="font-bold">{mode.title}</div>
                      <div className="text-[10px] text-white/40">{mode.subtitle}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-white/80 block">BRAND OR COMPANY NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Corp"
                    value={brandName}
                    onChange={e => setBrandName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white/5 border border-white/15 focus:border-blue-400 text-white rounded-xs font-mono text-xs outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-white/80 block">PRIMARY DOMAIN / URL</label>
                  <input
                    type="text"
                    placeholder="e.g. acme.com"
                    value={domain}
                    onChange={e => setDomain(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white/5 border border-white/15 focus:border-blue-400 text-white rounded-xs font-mono text-xs outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-xs text-white/80 block">DIRECT CONTACT (EMAIL)</label>
                <input
                  type="email"
                  required
                  placeholder="founder@acme.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white/5 border border-white/15 focus:border-blue-400 text-white rounded-xs font-mono text-xs outline-none"
                />
              </div>

              {/* 12 Possibilities Multi-Select */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="font-mono text-xs text-white/80">
                    WHICH POSSIBILITIES NEED ATTENTION? ({targetNodes.length} SELECTED)
                  </label>
                  <button
                    type="button"
                    onClick={() => setTargetNodes(ECOSYSTEM_NODES.map(n => n.id))}
                    className="font-mono text-[10px] text-blue-400 hover:underline"
                  >
                    SELECT ALL 12
                  </button>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
                  {ECOSYSTEM_NODES.map((node) => {
                    const isSelected = targetNodes.includes(node.id);
                    return (
                      <button
                        type="button"
                        key={node.id}
                        onClick={() => toggleNode(node.id)}
                        className={`px-2.5 py-2 rounded-xs font-mono text-[11px] uppercase border transition-all text-left flex items-center justify-between ${
                          isSelected
                            ? 'bg-blue-600/80 border-blue-400 text-white font-bold shadow-sm'
                            : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                        }`}
                      >
                        <span>{node.label}</span>
                        <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-white/20'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Digital Extension Team Selection */}
              <div className="space-y-1.5">
                <label className="font-mono text-xs text-white/80 block">DIGITAL EXTENSION ROLE NEEDED</label>
                <select
                  value={chosenExtension}
                  onChange={e => setChosenExtension(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#141822] border border-white/15 focus:border-blue-400 text-white rounded-xs font-mono text-xs outline-none"
                >
                  {DIGITAL_EXTENSION_TEAMS.map((team) => (
                    <option key={team.id} value={team.id}>
                      {team.needPrompt} &rarr; {team.teamTitle}
                    </option>
                  ))}
                </select>
              </div>

              {/* Primary Friction */}
              <div className="space-y-1.5">
                <label className="font-mono text-xs text-white/80 block">PRIMARY BRAND CHALLENGE</label>
                <select
                  value={primaryFriction}
                  onChange={e => setPrimaryFriction(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#141822] border border-white/15 focus:border-blue-400 text-white rounded-xs font-mono text-xs outline-none"
                >
                  <option value="Fragmented multi-agency silos leaking ad spend">Fragmented multi-agency silos leaking ad spend</option>
                  <option value="Need a clean, modern website with immediate conversion">Need a clean, modern website with immediate conversion</option>
                  <option value="Need organic search visibility and AI search indexing">Need organic search visibility and AI search indexing</option>
                  <option value="Need high-volume, coherent social presence">Need high-volume, coherent social presence</option>
                  <option value="Need high-converting marketing campaigns">Need high-converting marketing campaigns</option>
                  <option value="Need full digital footprint synchronization across all channels">Need full digital footprint synchronization across all channels</option>
                </select>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="font-mono text-[10px] text-white/40">
                  NO FORCED PACKAGES // NO ARTIFICIAL COMPLEXITY
                </span>

                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-black font-mono text-xs font-bold tracking-wider hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-lg shadow-white/10"
                >
                  <span>SUBMIT SPECIFICATION</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </form>
          ) : (
            /* Success confirmation screen */
            <div className="space-y-6 py-4 animate-fadeIn text-center sm:text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="font-mono text-xs text-emerald-400">TRANSMISSION CONFIRMED</span>
                  <h3 className="font-display font-bold text-2xl text-white">
                    SYNQ SPECIFICATION LOGGED
                  </h3>
                </div>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-xs space-y-2 font-mono text-xs">
                <div className="flex justify-between text-white/60">
                  <span>DISPATCH REFERENCE:</span>
                  <span className="text-white font-bold">{referenceId}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>TARGET ENTITY:</span>
                  <span className="text-white">{brandName || 'Brand Entity'} ({domain || 'Domain'})</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>OPERATING PRINCIPLE:</span>
                  <span className="text-blue-400 font-bold">{selectedMode.replace('_', ' ')}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>SYNCHRONIZING POSSIBILITIES:</span>
                  <span className="text-emerald-400 uppercase">{targetNodes.join(', ')}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>CONTACT:</span>
                  <span className="text-blue-300">{email}</span>
                </div>
              </div>

              <p className="text-xs text-white/70 font-sans leading-relaxed">
                SYNQ-SQUARE will review your brand's digital world and assemble only what makes sense—no unnecessary services, no artificial complexity. Always connected.
              </p>

              <div className="pt-2">
                <button
                  onClick={handleResetAndClose}
                  className="w-full py-2.5 bg-white text-black font-mono text-xs font-bold rounded-xs hover:bg-neutral-200 transition-colors"
                >
                  RETURN TO DIGITAL ENVIRONMENT
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
