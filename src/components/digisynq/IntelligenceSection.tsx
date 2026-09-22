import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Sparkles, Terminal, ChevronDown } from 'lucide-react';
import cinemaTelemetrySlate from '../../assets/cinema-telemetry-slate.jpg';

export const IntelligenceSection: React.FC<{ onOpenRunbook?: (chapterIndex?: number) => void }> = ({
  onOpenRunbook,
}) => {
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);
  const [telemetryIndex, setTelemetryIndex] = useState(0);
  const [telemetryTimeframe, setTelemetryTimeframe] = useState<'Weekly' | 'Monthly' | 'Quarterly'>('Weekly');

  const telemetryModes = [
    {
      title: 'Conversion',
      subtitle: 'Conversion Rate',
      metric: '250%',
      arrow: '↗',
      path: 'M 20 120 C 80 120, 130 105, 175 105 C 220 105, 250 125, 295 125 C 335 125, 350 28, 390 28 C 430 28, 450 125, 495 125 C 535 125, 575 110, 620 115',
      peakX: 390,
      peakY: 28,
      caption: 'Conversions set to rise this month.',
      cta: 'Explore more +'
    },
    {
      title: 'Screen Yield',
      subtitle: 'Auditorium Fill Rate',
      metric: '+64%',
      arrow: '↗',
      path: 'M 20 125 C 90 125, 135 95, 185 90 C 235 85, 275 120, 320 120 C 350 120, 370 34, 410 34 C 450 34, 475 115, 520 115 C 560 115, 590 105, 620 100',
      peakX: 410,
      peakY: 34,
      caption: 'Off-peak screen capacity successfully monetized.',
      cta: 'Explore screens +'
    },
    {
      title: 'Velocity',
      subtitle: 'Packaging Cycle',
      metric: '3.8x',
      arrow: '↗',
      path: 'M 20 130 C 80 130, 140 105, 190 100 C 240 95, 285 130, 335 130 C 365 130, 385 22, 425 22 C 465 22, 485 125, 535 125 C 575 125, 600 115, 620 110',
      peakX: 425,
      peakY: 22,
      caption: 'Deal memo closing cycle shortened to 72 hours.',
      cta: 'Explore talent +'
    }
  ];

  const currentTelemetry = telemetryModes[telemetryIndex];

  const signalJourney = [
    { label: 'Data', desc: 'Raw box office admissions, equipment barcodes, social chatter, call sheet logs.' },
    { label: 'Signals', desc: 'Normalized telemetry: sentiment polarity shifts, trailer velocity spikes, stage vacancy windows.' },
    { label: 'Intelligence', desc: 'Machine learning synthesis linking audience appetite vectors to commercial feasibility.' },
    { label: 'Decision', desc: 'Strategic recommendations for release timing, casting packages, and equipment booking.' },
    { label: 'Action', desc: 'Automated deal memo dispatch, dynamic ticket pricing adjustment, or PR narrative pivot.' },
    { label: 'Outcome', desc: 'Measurable box office uplift, reduced CapEx waste, and verified stakeholder confidence.' }
  ];

  const aiPrompts = [
    {
      query: 'Find available production resources for an independent film shooting next month in Toronto.',
      response: {
        summary: 'Synthesized 5-department production package matched to indie budget profile without asset ownership.',
        people: '3 verified DPs with CSC guild standing + 8 below-the-line crew available for 22 shooting days.',
        equipment: 'ARRI Alexa Mini LF package + Zeiss Supreme Primes available via sub-rental with certified insurance.',
        locations: '2 verified mill spaces with 24ft grid clearance + historic brick warehouse location.',
        vendors: 'Local certified caterer + eco-friendly generator truck with verified COI.',
        opportunities: 'Eligible for 21.5% Ontario production tax credit; pre-formatted for SynqFinance packaging.'
      }
    },
    {
      query: 'Analyze audience sentiment shifts following festival premiere in London and recommend marketing adjustments.',
      response: {
        summary: 'Detected +91% positive reception for lead actress and suspenseful climax; pacing in act 2 flagged as slow.',
        people: 'Lead actress interview soundbites prioritized for TikTok and Instagram Reels.',
        equipment: 'N/A (Digital intelligence signal pipeline).',
        locations: 'Focus theatrical release corridor across 40 marquee arthouse screens in UK & Ireland.',
        vendors: 'Automated PR asset distribution kit with 5 critical 5-star pull-quotes sent to 120 media outlets.',
        opportunities: 'Recommended releasing 30-second teaser focused entirely on the thriller third-act twist.'
      }
    },
    {
      query: 'Identify optimal theatrical release window for an indie horror film budgeted at $4.5M.',
      response: {
        summary: 'Simulated 18 competitive release corridors across North America and Europe for Q3/Q4.',
        people: 'No talent promotional schedule conflicts detected across target festival circuits.',
        equipment: 'DCP master digital delivery verified SMPTE/DCI compliant for automated KDM release.',
        locations: 'Identified late September corridor: lowest competing genre counter-programming and 72% screen availability.',
        vendors: 'Synced with 180 independent theatrical screens ready for digital booking on SynqBook.',
        opportunities: 'Avoids colliding with studio tentpole sequels, yielding projected 38% higher opening weekend screen retention.'
      }
    }
  ];

  const activePrompt = aiPrompts[selectedPromptIndex];

  return (
    <section
      id="intelligence"
      className="py-24 sm:py-32 bg-[var(--bg-canvas)] border-t border-[var(--border-hairline)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Section 32 Intelligence Layer */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div data-augmented-ui="tl-clip br-clip" className="aug-hud-chip inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/90 border border-[#5CE1E6]/30 text-[#5CE1E6] font-mono text-[11px] font-bold tracking-[2px] mb-6 backdrop-blur-xl shadow-[0_0_15px_rgba(92,225,230,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] shadow-[0_0_8px_#5CE1E6]" />
            TELEMETRY &amp; Predictive engine.
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[0.98] font-denton-extrabold">
            From scattered signals.<br />
            <span className="text-white/75 font-denton-extrabold">To predictive foresight.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            DigiSynq transforms disparate box office receipts, equipment telemetry, social sentiment, and crew availability into predictive foresight.
          </p>
        </div>

        {/* 6-Stage Journey Visual - Apple Step Cards */}
        <div className="mb-16">
          <div className="text-xs font-mono tracking-wider text-[var(--text-tertiary)] text-center mb-6 font-semibold">
            The DigiSynq Intelligence Trajectory
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-[6px]">
            {signalJourney.map((item) => (
              <div
                key={item.label}
                className="bento-card text-left relative group"
              >
                <div className="flex items-center justify-end mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7CFF]" />
                </div>
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1 tracking-tight">
                  {item.label}
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-snug">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Real-Time VisionOS Predictive Telemetry Card (Mockup Style Smoked Glass) */}
        <div className="mb-20 max-w-2xl mx-auto relative">


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="vision-dark-panel rounded-[24px] p-6 sm:p-9 text-[var(--text-primary)] relative z-10 shadow-[0_35px_85px_-15px_rgba(0,0,0,0.95),inset_0_1px_1px_0_rgba(255,255,255,0.30)] overflow-hidden bg-gradient-to-br from-white/[0.065] via-white/[0.015] to-[#0A0E18]/65 border border-white/[0.20] backdrop-blur-2xl"
          >


            {/* Header: Title and Timeframe Selector */}
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-bold tracking-tight text-[var(--text-primary)] font-sans">
                  {currentTelemetry.title}
                </span>
              </div>

              {/* Weekly Dropdown / Switcher Pill */}
              <div className="relative">
                <div
                  onClick={() =>
                    setTelemetryTimeframe((prev) =>
                      prev === 'Weekly' ? 'Monthly' : prev === 'Monthly' ? 'Quarterly' : 'Weekly'
                    )
                  }
                  className="bg-white/[0.05] border border-black/[0.08] rounded-full px-3.5 py-1.5 flex items-center gap-1.5 text-xs text-[var(--text-primary)] font-medium cursor-pointer hover:bg-black/[0.08] transition-colors"
                >
                  <span>{telemetryTimeframe}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
                </div>
              </div>
            </div>

            {/* Metric & Rate */}
            <div className="text-center mb-6 relative z-10">
              <span className="text-xs text-[var(--text-secondary)] font-medium tracking-wide block mb-1">
                {currentTelemetry.subtitle}
              </span>
              <div className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] flex items-center justify-center gap-1">
                <span>{currentTelemetry.metric}</span>
                <span className="text-2xl sm:text-3xl text-[var(--accent-gold)] font-medium ml-0.5">
                  {currentTelemetry.arrow}
                </span>
              </div>
            </div>

            {/* SVG Glowing Telemetry Sine Wave with Illuminated Apex Bead */}
            <div className="relative w-full h-44 sm:h-52 my-2 flex items-center justify-center">
              <svg
                viewBox="0 0 640 180"
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="neonCyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#C98E08" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#C98E08" stopOpacity="1" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="beadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#C98E08" />
                  </linearGradient>
                </defs>

                {/* Subtle baseline shadow curve */}
                <path
                  d={currentTelemetry.path}
                  fill="none"
                  stroke="#C98E08"
                  strokeWidth="8"
                  strokeOpacity="0.12"
                  filter="blur(6px)"
                />

                {/* Main Curve */}
                <path
                  d={currentTelemetry.path}
                  fill="none"
                  stroke="url(#neonCyanGrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Apex Bead */}
                <circle
                  cx={currentTelemetry.peakX}
                  cy={currentTelemetry.peakY}
                  r="18"
                  fill="#C98E08"
                  fillOpacity="0.18"
                  className="animate-pulse"
                />
                <circle
                  cx={currentTelemetry.peakX}
                  cy={currentTelemetry.peakY}
                  r="8"
                  fill="url(#beadGrad)"
                  className="shadow-md"
                />
                <circle
                  cx={currentTelemetry.peakX}
                  cy={currentTelemetry.peakY}
                  r="3.5"
                  fill="#ffffff"
                />
              </svg>
            </div>

            {/* Bottom Action Pill Capsule (Matching reference "Add More" / "Pay Now" style) */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs relative z-10 mt-4">
              <span className="text-[var(--text-secondary)] text-center sm:text-left font-medium">
                {currentTelemetry.caption}
              </span>
              <button
                onClick={() => setTelemetryIndex((prev) => (prev + 1) % telemetryModes.length)}
                className="ds-btn-primary text-xs px-4 py-2 whitespace-nowrap"
              >
                <span>{currentTelemetry.cta}</span>
              </button>
            </div>

            {/* Pagination Dash Track */}
            <div className="flex items-center justify-center gap-2 pt-6">
              {telemetryModes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTelemetryIndex(idx)}
                  className={`relative h-1.5 rounded-full transition-all duration-300 before:absolute before:-inset-3 before:content-[''] ${
                    telemetryIndex === idx ? 'w-8 bg-white' : 'w-4 bg-white/25 hover:bg-white/50'
                  }`}
                  aria-label={`Select telemetry mode ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* SECTION 33: DigiSynq AI (Apple Intelligence Aesthetic) */}
        <div className="rounded-xl cred-card p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden viewfinder-box">
          <div className="viewfinder-corner-tl" />
          <div className="viewfinder-corner-tr" />
          <div className="viewfinder-corner-bl" />
          <div className="viewfinder-corner-br" />

          {/* Telemetry Slate Key Visual Backdrop */}
          <div className="absolute inset-0 pointer-events-none opacity-15 overflow-hidden mix-blend-screen">
            <img
              src={cinemaTelemetrySlate}
              alt="Cinema Telemetry Slate"
              className="w-full h-full object-cover object-right-bottom filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#E5A919] mb-1 font-semibold">
                <Brain className="w-4 h-4" />
                <span>DigiSynq AI Console</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
                Intelligence that understands the cinema ecosystem.
              </h3>
            </div>
            <div className="text-xs font-mono text-[var(--text-secondary)] bg-white/[0.04] border border-white/[0.08] px-3.5 py-1.5 rounded-full font-medium">
              Conceptual Product Experience
            </div>
          </div>

          {/* AI Capability Tags */}
          <div className="my-6 flex flex-wrap gap-2">
            {[
              'Semantic Search',
              'Intelligent Matching',
              'Audience Analysis',
              'Sentiment Diagnostics',
              'Opportunity Discovery',
              'Workflow Automation',
              'Predictive Modeling',
              'Project Packaging',
              'Reputation Intelligence'
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-mono ds-card border border-white/[0.08] shadow-xs text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Interactive Query Switcher */}
          <div className="space-y-4">
            <span className="text-xs font-mono tracking-wider text-[var(--text-tertiary)] block font-semibold">
              Sample Cinema Natural Language Inquiries:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {aiPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPromptIndex(idx)}
                  className={`p-4 rounded-2xl text-left border text-xs transition-all duration-200 backdrop-blur-xl ${
                    selectedPromptIndex === idx
                      ? 'bg-[#5CE1E6]/10 text-white border-[#5CE1E6]/50 font-semibold shadow-[0_0_20px_rgba(92,225,230,0.12)]'
                      : 'bg-[#0D1220]/60 border-white/[0.08] text-white/70 hover:text-white hover:border-white/20'
                  }`}
                >
                  "{p.query}"
                </button>
              ))}
            </div>

            {/* AI Console Studio View - Frosted Deep Navy Glass Aesthetic */}
            <div className="mt-6 rounded-3xl bg-[#0D1220]/80 border border-white/[0.12] p-5 sm:p-8 font-mono text-xs shadow-2xl text-white/90 relative overflow-hidden backdrop-blur-2xl">
              {/* Studio Window Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FFC857]/40 border border-[#FFC857]/60" />
                    <span className="w-3 h-3 rounded-full bg-[#8B7CFF]/40 border border-[#8B7CFF]/60" />
                    <span className="w-3 h-3 rounded-full bg-[#5EF2B0]/40 border border-[#5EF2B0]/60" />
                  </div>
                  <div className="flex items-center gap-1.5 pl-2 text-xs font-mono font-medium text-white/60">
                    <Terminal className="w-3.5 h-3.5 text-[#5CE1E6]" />
                    <span>digisynq-ai-agent</span>
                    <span className="text-white/20">•</span>
                    <span className="text-[#5EF2B0] bg-[#5EF2B0]/10 px-2.5 py-0.5 rounded-full text-[10px] font-semibold border border-[#5EF2B0]/30">ONLINE</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-[#070A12]/80 p-1 rounded-lg border border-white/[0.08]">
                  {['Synthesis', 'Graph', 'Context'].map((tab, tIdx) => (
                    <span
                      key={tab}
                      className={`px-2.5 py-1 rounded-md text-[10px] font-medium transition-colors ${
                        tIdx === 0
                          ? 'bg-white text-[#070A12] font-bold shadow-xs'
                          : 'text-white/50'
                      }`}
                    >
                      {tab}
                    </span>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPromptIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4 font-sans"
                >
                  <div className="p-3.5 rounded-2xl bg-[#070A12]/80 border border-white/[0.08] flex items-center gap-2.5">
                    <span className="text-[11px] font-mono font-bold text-[#5CE1E6] tracking-wider">Inquiry:</span>
                    <span className="text-sm font-medium text-white/95">"{activePrompt.query}"</span>
                  </div>

                  <div className="space-y-3 pt-1">
                    <div className="text-sm font-bold flex items-center gap-2 text-[#8B7CFF]">
                      <Sparkles className="w-4 h-4 text-[#8B7CFF]" />
                      <span>DigiSynq AI synthesis</span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-[#070A12]/70 border border-[#8B7CFF]/30 text-white/90 text-xs sm:text-sm leading-relaxed font-normal shadow-inner">
                      {activePrompt.response.summary}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-4 rounded-2xl bg-[#0D1220]/70 border border-[#8B7CFF]/25 text-white shadow-xs backdrop-blur-xl">
                        <span className="text-[#8B7CFF] font-bold block mb-1 text-[11px] font-mono tracking-wider">
                          ✦ People & Crew
                        </span>
                        <p className="leading-relaxed text-white/70">{activePrompt.response.people}</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-[#0D1220]/70 border border-[#4D8DFF]/25 text-white shadow-xs backdrop-blur-xl">
                        <span className="text-[#4D8DFF] font-bold block mb-1 text-[11px] font-mono tracking-wider">
                          ✦ Equipment & Assets
                        </span>
                        <p className="leading-relaxed text-white/70">{activePrompt.response.equipment}</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-[#0D1220]/70 border border-[#5CE1E6]/25 text-white shadow-xs backdrop-blur-xl">
                        <span className="text-[#5CE1E6] font-bold block mb-1 text-[11px] font-mono tracking-wider">
                          ✦ Locations & Venues
                        </span>
                        <p className="leading-relaxed text-white/70">{activePrompt.response.locations}</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-[#0D1220]/70 border border-[#5EF2B0]/25 text-white shadow-xs backdrop-blur-xl">
                        <span className="text-[#5EF2B0] font-bold block mb-1 text-[11px] font-mono tracking-wider">
                          ✦ Opportunities & Capital
                        </span>
                        <p className="leading-relaxed text-white/70">{activePrompt.response.opportunities}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      {onOpenRunbook && (
        <div className="mt-10 text-center">
          <button
            onClick={() => onOpenRunbook(3)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B7CFF]/10 hover:bg-[#8B7CFF]/20 border border-[#8B7CFF]/35 text-[#8B7CFF] hover:text-white text-xs font-mono font-bold tracking-[1.5px] transition-all cursor-pointer shadow-sm"
          >
            <span>Open Intelligence Architecture (Chapter 04)</span>
          </button>
        </div>
      )}
    </section>
  );
};
