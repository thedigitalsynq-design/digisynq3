import { useEffect, useRef, useState } from 'react';
import { playPing } from '../../utils/audio';

interface GrokbotMascotProps {
  size?: number;
  mood?: 'idle' | 'focused' | 'thinking' | 'happy';
  showLabel?: boolean;
}

export function GrokbotMascot({
  size = 40,
  mood = 'idle',
  showLabel = false
}: GrokbotMascotProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pupilOffset, setPupilOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const [bounce, setBounce] = useState(false);

  // Mouse tracking for eyes
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const mascotCenterX = rect.left + rect.width / 2;
      const mascotCenterY = rect.top + rect.height / 2;

      const dx = e.clientX - mascotCenterX;
      const dy = e.clientY - mascotCenterY;
      const angle = Math.atan2(dy, dx);
      const distance = Math.min(Math.sqrt(dx * dx + dy * dy), 400);
      const maxOffset = (size / 40) * 3.5;
      const normalizedDist = (distance / 400) * maxOffset;

      setPupilOffset({
        x: Math.cos(angle) * normalizedDist,
        y: Math.sin(angle) * normalizedDist
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [size]);

  // Periodic blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 140);
    }, 3800 + Math.random() * 2000);

    return () => clearInterval(blinkInterval);
  }, []);

  const handleClick = () => {
    playPing(720, 'triangle', 0.08);
    setBounce(true);
    setTimeout(() => setBounce(false), 400);
  };

  const scale = size / 40;

  return (
    <div 
      ref={containerRef}
      onClick={handleClick}
      title="Grokbot Agent Mascot (gaze follows cursor)"
      className={`inline-flex items-center gap-2 select-none cursor-pointer group ${bounce ? 'scale-110' : ''} transition-transform duration-200`}
    >
      <div 
        className="relative flex items-center justify-center rounded-xl bg-[#0F141F] border border-white/20 shadow-md group-hover:border-blue-400/80 transition-colors"
        style={{ width: size, height: size }}
      >
        {/* Antenna / top glyph */}
        <div 
          className="absolute -top-1 w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-cyan-300 transition-colors"
          style={{ transform: `translateY(-${scale * 2}px)` }}
        />

        {/* Eyes Row */}
        <div className="flex items-center justify-center gap-2" style={{ gap: `${scale * 5}px` }}>
          
          {/* Left Eye */}
          <div 
            className="relative flex items-center justify-center rounded-full bg-black/60 border border-white/25 overflow-hidden transition-all duration-75"
            style={{ 
              width: `${scale * 12}px`, 
              height: isBlinking ? '2px' : `${scale * 12}px` 
            }}
          >
            {!isBlinking && (
              <div 
                className="rounded-full bg-gradient-to-tr from-blue-400 to-white transition-transform duration-75"
                style={{
                  width: `${scale * 6}px`,
                  height: `${scale * 6}px`,
                  transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`
                }}
              />
            )}
          </div>

          {/* Right Eye */}
          <div 
            className="relative flex items-center justify-center rounded-full bg-black/60 border border-white/25 overflow-hidden transition-all duration-75"
            style={{ 
              width: `${scale * 12}px`, 
              height: isBlinking ? '2px' : `${scale * 12}px` 
            }}
          >
            {!isBlinking && (
              <div 
                className="rounded-full bg-gradient-to-tr from-blue-400 to-white transition-transform duration-75"
                style={{
                  width: `${scale * 6}px`,
                  height: `${scale * 6}px`,
                  transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`
                }}
              />
            )}
          </div>

        </div>

        {/* Small subtle mouth / status line */}
        <div 
          className="absolute bottom-1.5 rounded-full bg-white/40 group-hover:bg-blue-300 transition-all duration-150"
          style={{
            width: mood === 'happy' ? `${scale * 10}px` : `${scale * 6}px`,
            height: mood === 'happy' ? `${scale * 2.5}px` : '1.5px',
            borderRadius: mood === 'happy' ? '0 0 10px 10px' : '999px'
          }}
        />
      </div>

      {showLabel && (
        <div className="flex flex-col text-left font-sans">
          <span className="font-display font-extrabold text-xs text-white leading-none tracking-tight">
            GROKBOT
          </span>
          <span className="font-mono text-[9px] text-blue-400 leading-tight">
            PERSISTENT AGENT
          </span>
        </div>
      )}
    </div>
  );
}
