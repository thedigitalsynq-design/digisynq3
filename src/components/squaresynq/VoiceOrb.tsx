import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { playPing, playSynqChime } from '../../utils/audio';

export type VoiceOrbState = 'idle' | 'listening' | 'thinking' | 'speaking';

interface VoiceOrbProps {
  size?: number;
  state?: VoiceOrbState;
  interactive?: boolean;
  onStateChange?: (state: VoiceOrbState) => void;
  showStatusBadge?: boolean;
}

export function VoiceOrb({
  size = 180,
  state: externalState,
  interactive = true,
  onStateChange,
  showStatusBadge = false
}: VoiceOrbProps) {
  const [internalState, setInternalState] = useState<VoiceOrbState>('idle');
  const currentState = externalState || internalState;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; isHovered: boolean }>({ x: size / 2, y: size / 2, isHovered: false });
  const animFrameId = useRef<number | null>(null);
  const phaseRef = useRef<number>(0);

  const toggleState = () => {
    if (!interactive) return;
    const states: VoiceOrbState[] = ['idle', 'listening', 'thinking', 'speaking'];
    const currentIndex = states.indexOf(currentState);
    const nextState = states[(currentIndex + 1) % states.length];
    
    if (nextState === 'listening') {
      playPing(520, 'sine', 0.05);
    } else if (nextState === 'thinking') {
      playPing(640, 'triangle', 0.06);
    } else if (nextState === 'speaking') {
      playSynqChime();
    } else {
      playPing(440, 'sine', 0.04);
    }

    if (onStateChange) {
      onStateChange(nextState);
    } else {
      setInternalState(nextState);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationRunning = true;

    const render = () => {
      if (!animationRunning) return;
      phaseRef.current += currentState === 'thinking' ? 0.06 : currentState === 'speaking' ? 0.045 : 0.02;
      const phase = phaseRef.current;

      const width = canvas.width;
      const height = canvas.height;
      const cx = width / 2;
      const cy = height / 2;
      const baseRadius = (width * 0.32);

      ctx.clearRect(0, 0, width, height);

      // Color pallete based on state
      let primaryColor = '#3B82F6';   // blue
      let secondaryColor = '#60A5FA'; // sky
      let accentColor = '#93C5FD';    // soft white-blue
      let glowColor = 'rgba(59, 130, 246, 0.4)';

      if (currentState === 'listening') {
        primaryColor = '#06B6D4'; // cyan
        secondaryColor = '#38BDF8';
        accentColor = '#E0F2FE';
        glowColor = 'rgba(6, 182, 212, 0.5)';
      } else if (currentState === 'thinking') {
        primaryColor = '#8B5CF6'; // purple
        secondaryColor = '#A855F7';
        accentColor = '#DDD6FE';
        glowColor = 'rgba(139, 92, 246, 0.55)';
      } else if (currentState === 'speaking') {
        primaryColor = '#10B981'; // emerald
        secondaryColor = '#34D399';
        accentColor = '#D1FAE5';
        glowColor = 'rgba(16, 185, 129, 0.5)';
      }

      // 1. Ambient Outer Glow
      const glowGrad = ctx.createRadialGradient(cx, cy, baseRadius * 0.4, cx, cy, baseRadius * 1.55);
      glowGrad.addColorStop(0, glowColor);
      glowGrad.addColorStop(0.6, glowColor.replace('0.', '0.15'));
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, baseRadius * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Mouse influence
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const dx = (mx - cx) * 0.12;
      const dy = (my - cy) * 0.12;

      // 2. Harmonic Fluid Waves
      const layers = currentState === 'thinking' ? 4 : 3;
      for (let l = 0; l < layers; l++) {
        ctx.beginPath();
        const layerPhase = phase + (l * Math.PI) / 3;
        const speedMultiplier = l % 2 === 0 ? 1 : -1;
        const pointCount = 64;

        for (let i = 0; i <= pointCount; i++) {
          const angle = (i / pointCount) * Math.PI * 2;
          
          // Wave harmonics
          let wave = Math.sin(angle * 3 + layerPhase * speedMultiplier) * (baseRadius * 0.09);
          wave += Math.cos(angle * 5 - layerPhase * 0.8) * (baseRadius * 0.05);

          if (currentState === 'listening') {
            wave += Math.sin(angle * 8 + phase * 2) * (baseRadius * 0.12);
          } else if (currentState === 'speaking') {
            wave += Math.sin(angle * 6 + phase * 3) * (baseRadius * 0.16) * Math.sin(phase * 2);
          } else if (currentState === 'thinking') {
            wave += Math.cos(angle * 4 + phase * 4) * (baseRadius * 0.14);
          }

          const r = baseRadius + wave;
          const px = cx + dx * (l * 0.3) + Math.cos(angle) * r;
          const py = cy + dy * (l * 0.3) + Math.sin(angle) * r;

          if (i === 0) {
            ctx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.closePath();

        const grad = ctx.createLinearGradient(cx - baseRadius, cy - baseRadius, cx + baseRadius, cy + baseRadius);
        if (l === 0) {
          grad.addColorStop(0, primaryColor + '99');
          grad.addColorStop(1, secondaryColor + '44');
        } else if (l === 1) {
          grad.addColorStop(0, secondaryColor + '88');
          grad.addColorStop(1, accentColor + '33');
        } else {
          grad.addColorStop(0, accentColor + '66');
          grad.addColorStop(1, primaryColor + '22');
        }

        ctx.fillStyle = grad;
        ctx.fill();
      }

      // 3. Inner Luminescent Core
      const coreGrad = ctx.createRadialGradient(cx + dx * 0.5, cy + dy * 0.5, 0, cx + dx * 0.5, cy + dy * 0.5, baseRadius * 0.85);
      coreGrad.addColorStop(0, '#FFFFFF');
      coreGrad.addColorStop(0.3, accentColor);
      coreGrad.addColorStop(0.7, primaryColor);
      coreGrad.addColorStop(1, 'rgba(0,0,0,0.1)');

      ctx.beginPath();
      ctx.arc(cx + dx * 0.5, cy + dy * 0.5, baseRadius * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.fill();

      // 4. Orbital Particles in Thinking / Speaking mode
      if (currentState === 'thinking' || currentState === 'speaking') {
        const particleCount = 14;
        for (let p = 0; p < particleCount; p++) {
          const pAngle = phase * 1.5 + (p * Math.PI * 2) / particleCount;
          const pDist = baseRadius * 1.05 + Math.sin(phase * 2 + p) * 12;
          const px = cx + Math.cos(pAngle) * pDist;
          const py = cy + Math.sin(pAngle) * pDist;

          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = accentColor;
          ctx.shadowColor = accentColor;
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      animationRunning = false;
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [currentState, size]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovered: true
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = {
      x: size / 2,
      y: size / 2,
      isHovered: false
    };
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 select-none">
      <div
        onClick={toggleState}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative flex items-center justify-center rounded-full transition-transform duration-300 ${
          interactive ? 'cursor-pointer hover:scale-105 active:scale-95' : ''
        }`}
        style={{ width: size, height: size }}
        title={interactive ? `Click to cycle Voice Orb state (Current: ${currentState})` : 'Grokbot Voice Orb'}
      >
        <canvas
          ref={canvasRef}
          width={size * 2}
          height={size * 2}
          style={{ width: size, height: size }}
          className="rounded-full"
        />

        {/* Ambient Ring */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none border border-white/15 transition-all duration-500"
          style={{
            boxShadow: currentState === 'speaking'
              ? '0 0 35px rgba(16, 185, 129, 0.4)'
              : currentState === 'thinking'
              ? '0 0 35px rgba(139, 92, 246, 0.4)'
              : currentState === 'listening'
              ? '0 0 35px rgba(6, 182, 212, 0.4)'
              : '0 0 25px rgba(59, 130, 246, 0.25)'
          }}
        />
      </div>

      {showStatusBadge && (
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[11px]">
          <span 
            className={`w-2 h-2 rounded-full animate-pulse ${
              currentState === 'speaking' ? 'bg-emerald-400' :
              currentState === 'thinking' ? 'bg-purple-400' :
              currentState === 'listening' ? 'bg-cyan-400' : 'bg-blue-400'
            }`} 
          />
          <span className="text-white/80 uppercase tracking-wider font-semibold">
            VOICE MODE // {currentState}
          </span>
          {interactive && (
            <span className="text-white/40 text-[9px]">(CLICK TO TEST)</span>
          )}
        </div>
      )}
    </div>
  );
}
