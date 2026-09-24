import React from 'react';

interface TopographicBackgroundProps {
  className?: string;
  intensity?: 'subtle' | 'medium' | 'high';
}

/**
 * TopographicBackground
 * Recreates the signature undulating isoline contour elevation aesthetics
 * from the Elevate Labs visual identity reference.
 */
export function TopographicBackground({ className = '', intensity = 'medium' }: TopographicBackgroundProps) {
  const opacityMap = {
    subtle: 'opacity-[0.035]',
    medium: 'opacity-[0.065]',
    high: 'opacity-[0.10]',
  };

  const chosenOpacity = opacityMap[intensity];

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`} aria-hidden="true">
      {/* Deep dark matte vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(182,240,42,0.04)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(35,178,114,0.03)_0%,transparent_50%)]" />

      {/* Organic Isoline Topographic Contours SVG */}
      <svg
        className={`w-full h-full object-cover ${chosenOpacity}`}
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Layer 1: Outer wide contours */}
        <path
          d="M-100 120 C 250 80, 480 320, 800 240 C 1120 160, 1320 380, 1600 320"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-white"
        />
        <path
          d="M-120 220 C 220 180, 440 420, 780 340 C 1100 260, 1280 480, 1620 420"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-[#B6F02A]"
        />
        <path
          d="M-80 320 C 280 260, 520 500, 840 430 C 1140 370, 1350 560, 1600 510"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-white"
        />

        {/* Layer 2: Medium elevation curves */}
        <path
          d="M-140 440 C 200 380, 410 610, 750 530 C 1070 450, 1250 670, 1640 600"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-white"
        />
        <path
          d="M-90 560 C 260 490, 500 710, 810 630 C 1120 560, 1330 750, 1610 700"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-[#B6F02A]"
        />
        <path
          d="M-130 680 C 210 600, 430 800, 760 720 C 1090 650, 1270 850, 1630 790"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-white"
        />

        {/* Layer 3: Concentric topo ripples (top right) */}
        <path
          d="M 950 50 C 1100 40, 1250 120, 1380 220 C 1500 320, 1550 450, 1560 600"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-white"
        />
        <path
          d="M 1020 90 C 1140 90, 1270 160, 1380 250 C 1480 340, 1520 440, 1530 560"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-[#B6F02A]"
        />
        <path
          d="M 1090 140 C 1190 140, 1290 200, 1380 280 C 1460 360, 1490 440, 1500 530"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-white"
        />

        {/* Layer 4: Concentric topo ripples (bottom left) */}
        <path
          d="M -50 480 C 80 470, 220 540, 320 660 C 420 780, 450 880, 440 980"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-white"
        />
        <path
          d="M -20 560 C 90 550, 200 610, 280 710 C 360 800, 390 890, 380 970"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-[#B6F02A]"
        />
        <path
          d="M 10 640 C 100 630, 180 680, 240 760 C 310 830, 330 900, 320 960"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-white"
        />
      </svg>
    </div>
  );
}
