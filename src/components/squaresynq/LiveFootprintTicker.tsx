import { useState, useEffect } from 'react';
import { FOOTPRINT_FLOW_STEPS } from '../../data/ecosystemData';
import { playPing } from '../../utils/audio';
import { ArrowRight, RefreshCw, Zap } from 'lucide-react';

interface LiveFootprintTickerProps {
  onStepClick?: (stepId: string) => void;
}

export function LiveFootprintTicker({ onStepClick }: LiveFootprintTickerProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStepIndex(prev => (prev + 1) % FOOTPRINT_FLOW_STEPS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full border-t border-white/10 bg-[#07080B]/90 backdrop-blur-md py-3 px-4 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono">
        
        {/* Ticker Title */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
          <span className="font-bold text-white tracking-widest text-[11px]">
            LIVE FOOTPRINT CONDUIT:
          </span>
          <span className="text-white/40 hidden sm:inline">//</span>
          <span className="text-[10px] text-blue-300 hidden sm:inline">
            CONTINUOUS VALUE LOOP
          </span>
        </div>

        {/* The Continuous Steps Flow */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1 scrollbar-none">
          {FOOTPRINT_FLOW_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <div key={step.id} className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => {
                    playPing(500 + idx * 25, 'sine', 0.04);
                    setActiveStepIndex(idx);
                    if (onStepClick) onStepClick(step.id);
                  }}
                  className={`px-2.5 py-1 rounded-xs transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-blue-600 text-white font-bold shadow-sm shadow-blue-500/30'
                      : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-[9px] opacity-70">0{idx + 1}</span>
                  <span className="tracking-wide text-[11px]">{step.label}</span>
                  {isActive && <Zap className="w-2.5 h-2.5 text-white animate-pulse" />}
                </button>

                {idx < FOOTPRINT_FLOW_STEPS.length - 1 && (
                  <span className={`text-[10px] ${isActive ? 'text-blue-400 font-bold' : 'text-white/20'}`}>
                    &rarr;
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Active Step Micro-Detail */}
        <div className="hidden lg:flex items-center gap-2 text-right shrink-0">
          <span className="text-[10px] text-white/40 uppercase">STAGE GOAL:</span>
          <span className="text-[11px] text-emerald-400 font-semibold">
            {FOOTPRINT_FLOW_STEPS[activeStepIndex].detail}
          </span>
        </div>

      </div>
    </div>
  );
}
