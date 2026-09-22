import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, Zap, Film, ShieldAlert, Sparkles, Network, 
  TrendingUp, Radio, AlertTriangle, Bot, Calculator, 
  Activity, ArrowRight, X, Database
} from 'lucide-react';
import { OperatingLens } from './UnifiedMasterNav';

interface UniversalCommandPaletteProps {
  open: boolean;
  onClose: () => void;
  onSelectLens: (lens: OperatingLens) => void;
  onOpenCopilot: () => void;
  onNavigateWarRoom?: (path: string) => void;
  onNavigateSquareSynq?: (tab: string) => void;
}

interface CommandItem {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: any;
  action: () => void;
  badge?: string;
}

export function UniversalCommandPalette({
  open,
  onClose,
  onSelectLens,
  onOpenCopilot,
  onNavigateWarRoom,
  onNavigateSquareSynq
}: UniversalCommandPaletteProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (open) onClose();
      }
      if (e.key === 'Escape' && open) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  const commands: CommandItem[] = useMemo(() => [
    // 5 Operating Lenses
    {
      id: 'lens-overview',
      category: 'Studio Lenses',
      title: 'Mission Control (Executive Pulse)',
      description: 'Unified command deck with live threat index, box office velocity & bottlenecks',
      icon: Zap,
      badge: 'Lens 1',
      action: () => { onSelectLens('overview'); onClose(); }
    },
    {
      id: 'lens-slate',
      category: 'Studio Lenses',
      title: 'Theatrical Slate & Vault',
      description: '360° film intelligence with 82+ SQLite titles, reviews, box office & risk scores',
      icon: Film,
      badge: 'Lens 2',
      action: () => { onSelectLens('slate'); onClose(); }
    },
    {
      id: 'lens-risk',
      category: 'Studio Lenses',
      title: 'Risk & Crisis Operations',
      description: 'War room containment, leak tracking, live RSS stream & incident triage',
      icon: ShieldAlert,
      badge: 'Lens 3',
      action: () => { onSelectLens('risk'); onClose(); }
    },
    {
      id: 'lens-velocity',
      category: 'Studio Lenses',
      title: 'Cultural Velocity (Social Engine)',
      description: 'Live trend radar, 200+ creator roster, viral strategy & ROI calculator',
      icon: Sparkles,
      badge: 'Lens 4',
      action: () => { onSelectLens('velocity'); onClose(); }
    },
    {
      id: 'lens-ecosystem',
      category: 'Studio Lenses',
      title: 'Ecosystem Graph & Suture',
      description: '10 canonical node dossiers, root network canvas & problem matrix',
      icon: Network,
      badge: 'Lens 5',
      action: () => { onSelectLens('ecosystem'); onClose(); }
    },

    // AI & Intelligence
    {
      id: 'act-copilot',
      category: 'Studio Intelligence',
      title: 'Gemini AI War Room Copilot',
      description: 'Launch the persistent AI assistant for real-time strategic synthesis',
      icon: Bot,
      badge: 'AI',
      action: () => { onOpenCopilot(); onClose(); }
    },

    // Tactical Tools
    {
      id: 'tool-roi',
      category: 'Tactical Tools',
      title: 'Campaign ROI Calculator',
      description: 'Calculate audience uplift and conversion metrics for theatrical releases',
      icon: Calculator,
      action: () => { onSelectLens('velocity'); onNavigateSquareSynq?.('calculator'); onClose(); }
    },
    {
      id: 'tool-radar',
      category: 'Tactical Tools',
      title: 'Live Trend Radar',
      description: 'Inspect entertainment hashtag spikes, meme cycles, and polarity',
      icon: Activity,
      action: () => { onSelectLens('velocity'); onNavigateSquareSynq?.('radar'); onClose(); }
    },
    {
      id: 'tool-incidents',
      category: 'Tactical Tools',
      title: 'Incident Registry & Triage',
      description: 'Active crisis vectors, containment actions, and mitigation workflows',
      icon: AlertTriangle,
      action: () => { onSelectLens('risk'); onNavigateWarRoom?.('/incidents'); onClose(); }
    },
    {
      id: 'tool-db',
      category: 'Tactical Tools',
      title: 'SQLite Film Query & Reviews',
      description: 'Access 82+ film database records and community discussions',
      icon: Database,
      action: () => { onSelectLens('slate'); onClose(); }
    }
  ], [onSelectLens, onOpenCopilot, onNavigateWarRoom, onNavigateSquareSynq, onClose]);

  const filtered = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase();
    return commands.filter(c => 
      c.title.toLowerCase().includes(q) || 
      c.description.toLowerCase().includes(q) || 
      c.category.toLowerCase().includes(q)
    );
  }, [commands, query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-[#0f111a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden text-white font-sans flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3 bg-[#131622]">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a lens, movie, incident, or tool... (e.g. Slate, Risk, ROI, Copilot)"
            className="flex-1 bg-transparent border-none outline-none text-white text-[15px] placeholder-white/40"
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-md text-white/50 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 space-y-1 divide-y divide-white/5">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-white/40 text-sm">
              No matching commands or lenses found for "{query}".
            </div>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="w-full text-left flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-cyan-500/20 text-white/70 group-hover:text-cyan-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[14px] font-semibold text-white/90 group-hover:text-white">{item.title}</span>
                        {item.badge && (
                          <span className="px-1.5 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                            {item.badge}
                          </span>
                        )}
                        <span className="text-[11px] text-white/35 font-mono">[{item.category}]</span>
                      </div>
                      <p className="text-[12px] text-white/50 group-hover:text-white/70">{item.description}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-[#0a0c12] border-t border-white/5 flex items-center justify-between text-[11px] text-white/40 font-mono">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1 py-0.5 bg-white/10 rounded text-[10px]">ESC</kbd> to close</span>
            <span><kbd className="px-1 py-0.5 bg-white/10 rounded text-[10px]">Ctrl+K</kbd> to toggle</span>
          </div>
          <span className="text-cyan-400/80">DigiSynq Matrix OS</span>
        </div>
      </div>
    </div>
  );
}
