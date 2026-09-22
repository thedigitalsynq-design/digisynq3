import { useState, FormEvent } from 'react';
import { playPing, playSynqChime } from '../../utils/audio';
import { 
  Compass, 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  TrendingUp, 
  ArrowRight, 
  RefreshCw,
  Sliders,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';
import { FootprintScanInput, FootprintScanResult } from '../types';

interface FootprintScannerProps {
  onOpenProjectModal: (preselectedNode?: string) => void;
}

const AVAILABLE_CHANNELS = [
  { id: 'web', label: 'Sovereign Website / Store' },
  { id: 'seo', label: 'Google Search & SEO' },
  { id: 'linkedin', label: 'LinkedIn Company & Execs' },
  { id: 'instagram', label: 'Instagram / Visual Social' },
  { id: 'x_twitter', label: 'X (Twitter) Narrative' },
  { id: 'youtube', label: 'YouTube / Long-form Video' },
  { id: 'paid_ads', label: 'Google / Meta Paid Ads' },
  { id: 'crm', label: 'Email Marketing & CRM' },
  { id: 'reviews', label: 'G2 / Trustpilot / Google Reviews' },
  { id: 'tiktok', label: 'TikTok / Short-form Video' },
];

export function FootprintScanner({ onOpenProjectModal }: FootprintScannerProps) {
  const [formData, setFormData] = useState<FootprintScanInput>({
    brandName: '',
    websiteUrl: '',
    industry: 'B2B SaaS / Enterprise Tech',
    activeChannels: ['web', 'seo', 'linkedin', 'paid_ads'],
    managementModel: 'Siloed Agencies & Freelancers'
  });

  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanResult, setScanResult] = useState<FootprintScanResult | null>(null);

  const toggleChannel = (channelId: string) => {
    playPing(440, 'sine', 0.05);
    setFormData(prev => {
      const exists = prev.activeChannels.includes(channelId);
      return {
        ...prev,
        activeChannels: exists
          ? prev.activeChannels.filter(c => c !== channelId)
          : [...prev.activeChannels, channelId]
      };
    });
  };

  const handleRunScan = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.brandName) {
      alert('Please enter your brand name to initiate the footprint scan.');
      return;
    }

    setIsScanning(true);
    setScanProgress(0);
    playPing(520, 'triangle', 0.1);

    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          playSynqChime();
          generateDiagnostic(formData);
          return 100;
        }
        playPing(400 + prev * 5, 'sine', 0.03, 0.02);
        return prev + 20;
      });
    }, 180);
  };

  const generateDiagnostic = (input: FootprintScanInput) => {
    const channelCount = input.activeChannels.length;
    const hasWeb = input.activeChannels.includes('web');
    const hasSEO = input.activeChannels.includes('seo');
    const hasAds = input.activeChannels.includes('paid_ads');
    const hasCRM = input.activeChannels.includes('crm');

    const result: FootprintScanResult = {
      present: {
        title: 'ESTABLISHED PERIMETER ASSETS',
        items: [
          `${input.brandName || 'Brand'} domain identified (${input.websiteUrl || 'active URL'})`,
          `${channelCount} independent external touchpoints active`,
          `Core positioning signals detected in industry: ${input.industry}`
        ],
        healthScore: Math.min(85, channelCount * 12 + 25)
      },
      fragmented: {
        title: 'SYNCHRONIZATION LEAKS & ATTRIBUTION FRICTION',
        items: [
          {
            issue: hasAds && hasWeb 
              ? 'Paid campaigns route to generic landing pages lacking intent match.' 
              : 'Acquisition efforts lack direct synergy with primary web conversion funnels.',
            frictionCost: 'Est. 30–45% of ad budget lost to message bounce',
            severity: 'high'
          },
          {
            issue: input.managementModel.includes('Siloed')
              ? 'Multi-agency operational silos creating asynchronous brand voice & delayed data.'
              : 'In-house workflows lack automated cross-node CRM telemetry.',
            frictionCost: 'Operational drag: 18+ hours delayed response on inbound inquiries',
            severity: 'high'
          },
          {
            issue: hasSEO 
              ? 'Search presence lacks unified Schema.org semantic graph for Generative AI engines.'
              : 'Organic search discovery completely decoupled from social content output.',
            frictionCost: 'Invisible to AI search engines (Perplexity, SearchGPT)',
            severity: 'medium'
          }
        ]
      },
      missing: {
        title: 'HIGH-LEVERAGE UNREALIZED NODES',
        items: [
          {
            node: 'AUTOMATION & EVENT CONDUIT',
            reason: hasCRM ? 'CRM lacks server-side first-party event streaming' : 'Zero automated lifecycle lead nurture loops',
            upside: '+42% pipeline acceleration'
          },
          {
            node: 'AUTHORITY REPUTATION PERIMETER',
            reason: 'Third-party review networks and executive voice operate decoupled from core web domain',
            upside: 'Cuts customer evaluation cycle by 35%'
          }
        ]
      },
      potential: {
        estimatedLift: '+240% to +380%',
        syncMultiplier: '3.4x Cross-Channel Velocity',
        keyRecommendation: 'Unify sovereign web, paid acquisition, and CRM routing into a single synchronized data loop.'
      }
    };

    setScanResult(result);
  };

  const handleReset = () => {
    playPing(320, 'triangle', 0.08);
    setScanResult(null);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="border-b border-white/10 pb-6 space-y-3">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-400">
          <Compass className="w-3.5 h-3.5" />
          <span>DIAGNOSTIC ENGINE // GUIDED FOOTPRINT ASSESSMENT</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              SCAN YOUR DIGITAL FOOTPRINT
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-2xl font-light mt-1">
              Before asking for a consultation, examine your perimeter. Map what exists, identify where synchronization leaks occur, and inspect your unrealized potential.
            </p>
          </div>

          <div className="text-[11px] font-mono text-white/40 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xs shrink-0">
            DEMO & GUIDED DIAGNOSTIC
          </div>
        </div>
      </div>

      {!scanResult ? (
        /* Input Form Screen */
        <form onSubmit={handleRunScan} className="space-y-8 bg-[#0C0F17] p-6 sm:p-8 rounded-sm border border-white/10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Brand Name */}
            <div className="space-y-2">
              <label className="font-mono text-xs text-white/80 tracking-wider block">
                01 // WHAT'S YOUR BRAND NAME?
              </label>
              <input
                id="scan-brand-name-input"
                type="text"
                required
                placeholder="e.g. Apex Quantum Systems"
                value={formData.brandName}
                onChange={e => setFormData({ ...formData, brandName: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/15 focus:border-blue-400 text-white rounded-xs font-mono text-sm outline-none transition-colors"
              />
            </div>

            {/* Website / Domain */}
            <div className="space-y-2">
              <label className="font-mono text-xs text-white/80 tracking-wider block">
                02 // WHAT'S YOUR PRIMARY WEB DOMAIN?
              </label>
              <input
                id="scan-website-url-input"
                type="text"
                placeholder="e.g. apexquantum.io"
                value={formData.websiteUrl}
                onChange={e => setFormData({ ...formData, websiteUrl: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/15 focus:border-blue-400 text-white rounded-xs font-mono text-sm outline-none transition-colors"
              />
            </div>
          </div>

          {/* Industry Selection */}
          <div className="space-y-2">
            <label className="font-mono text-xs text-white/80 tracking-wider block">
              03 // PRIMARY INDUSTRY DOMAIN
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                'B2B SaaS / Enterprise Tech',
                'Luxury & Direct-to-Consumer',
                'FinTech / Web3 / Capital',
                'HealthTech & BioTech',
                'Professional & Advisory',
                'Consumer Brand / Media'
              ].map(ind => (
                <button
                  type="button"
                  key={ind}
                  onClick={() => {
                    playPing(480, 'sine', 0.04);
                    setFormData({ ...formData, industry: ind });
                  }}
                  className={`px-3 py-2 text-left font-mono text-xs rounded-xs border transition-all ${
                    formData.industry === ind
                      ? 'bg-blue-950/60 border-blue-400 text-white font-semibold'
                      : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>

          {/* Active Platforms */}
          <div className="space-y-2">
            <label className="font-mono text-xs text-white/80 tracking-wider block">
              04 // WHICH PLATFORMS / TOUCHPOINTS ARE CURRENTLY ACTIVE? (SELECT ALL)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {AVAILABLE_CHANNELS.map(ch => {
                const isSelected = formData.activeChannels.includes(ch.id);
                return (
                  <button
                    type="button"
                    key={ch.id}
                    id={`scan-channel-${ch.id}`}
                    onClick={() => toggleChannel(ch.id)}
                    className={`p-3 text-left font-mono text-xs rounded-xs border transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-blue-950/40 border-blue-400/80 text-white'
                        : 'bg-white/[0.02] border-white/10 text-white/40 hover:text-white/70'
                    }`}
                  >
                    <span className="font-semibold">{ch.label}</span>
                    <span className={`text-[10px] mt-2 inline-block ${isSelected ? 'text-blue-400' : 'text-white/20'}`}>
                      {isSelected ? '[ACTIVE]' : '[INACTIVE]'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Management Model */}
          <div className="space-y-2">
            <label className="font-mono text-xs text-white/80 tracking-wider block">
              05 // HOW IS THIS FOOTPRINT CURRENTLY GOVERNED?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
              {[
                'Siloed Agencies & Freelancers (Each channel managed separately)',
                'Internal In-House Team (Lacks cross-channel automation data)',
                'Ad-Hoc / Reactive (Updates made irregularly as need arises)',
                'Partially Synchronized (Some tools linked, high manual copying)'
              ].map(model => (
                <button
                  type="button"
                  key={model}
                  onClick={() => {
                    playPing(480, 'sine', 0.04);
                    setFormData({ ...formData, managementModel: model });
                  }}
                  className={`p-3 text-left rounded-xs border transition-all ${
                    formData.managementModel === model
                      ? 'bg-blue-950/50 border-blue-400 text-white'
                      : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                  }`}
                >
                  {model}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-4 flex items-center justify-between">
            <span className="font-mono text-[11px] text-white/40">
              * Assessment constructs simulated diagnostic graph based on channel heuristics.
            </span>

            <button
              id="run-footprint-scan-btn"
              type="submit"
              disabled={isScanning}
              className="px-6 py-3 bg-white text-black font-mono text-xs font-bold tracking-wider hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-lg shadow-white/10 disabled:opacity-50"
            >
              {isScanning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-black" />
                  <span>SYNTHESIZING PERIMETER ({scanProgress}%)...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>SYNTHESIZE DIGITAL FOOTPRINT</span>
                </>
              )}
            </button>
          </div>

        </form>
      ) : (
        /* Results Screen */
        <div className="space-y-8 animate-fadeIn">
          
          {/* Top Result Banner */}
          <div className="p-6 rounded-sm bg-[#0E131F] border border-blue-500/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="font-mono text-xs text-blue-400">
                DIAGNOSTIC REPORT FOR // {formData.brandName.toUpperCase()}
              </span>
              <h3 className="font-display font-bold text-2xl text-white">
                SYNCHRONIZATION DEFICIT DETECTED
              </h3>
              <p className="text-xs sm:text-sm text-white/70">
                Your brand exists across multiple touchpoints, but lacks closed-loop telemetry and message synchronization.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleReset}
                className="px-3 py-2 border border-white/20 hover:bg-white/5 text-white/70 font-mono text-xs rounded-xs transition-colors"
              >
                RE-CONFIGURE SCAN
              </button>

              <button
                id="scan-result-build-cta"
                onClick={() => {
                  playPing(680, 'triangle', 0.08);
                  onOpenProjectModal(`Footprint Scan: ${formData.brandName}`);
                }}
                className="px-5 py-2.5 bg-white text-black font-mono text-xs font-bold tracking-wider hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-md shadow-white/20"
              >
                <span>BUILD MY FOOTPRINT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 4 Quadrants: PRESENT, FRAGMENTED, MISSING, POTENTIAL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 1. PRESENT */}
            <div className="p-6 rounded-sm bg-[#0C0F17] border border-emerald-900/40 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>PRESENT // WHAT ALREADY EXISTS</span>
                </div>
                <span className="font-mono text-[10px] bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 px-2 py-0.5 rounded-xs">
                  HEALTH: {scanResult.present.healthScore}/100
                </span>
              </div>

              <ul className="space-y-2 text-xs font-sans text-white/80">
                {scanResult.present.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-mono font-bold">&check;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. FRAGMENTED */}
            <div className="p-6 rounded-sm bg-[#0C0F17] border border-amber-900/40 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-semibold">
                  <AlertTriangle className="w-4 h-4" />
                  <span>FRAGMENTED // WHERE CHANNELS LEAK</span>
                </div>
                <span className="font-mono text-[10px] bg-amber-950/60 text-amber-400 border border-amber-800/40 px-2 py-0.5 rounded-xs">
                  CRITICAL DRAG
                </span>
              </div>

              <div className="space-y-3">
                {scanResult.fragmented.items.map((item, idx) => (
                  <div key={idx} className="p-3 bg-white/[0.02] border border-white/5 rounded-xs space-y-1">
                    <div className="text-xs text-white/90 font-medium">
                      {item.issue}
                    </div>
                    <div className="font-mono text-[10px] text-amber-300/80">
                      &gt; Cost: {item.frictionCost}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. MISSING */}
            <div className="p-6 rounded-sm bg-[#0C0F17] border border-red-900/40 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-semibold">
                  <HelpCircle className="w-4 h-4" />
                  <span>MISSING // UNREALIZED HIGH-LEVERAGE NODES</span>
                </div>
                <span className="font-mono text-[10px] bg-red-950/60 text-red-400 border border-red-800/40 px-2 py-0.5 rounded-xs">
                  GAP IDENTIFIED
                </span>
              </div>

              <div className="space-y-3">
                {scanResult.missing.items.map((item, idx) => (
                  <div key={idx} className="p-3 bg-white/[0.02] border border-white/5 rounded-xs space-y-1">
                    <div className="font-mono text-xs text-white font-bold">
                      {item.node}
                    </div>
                    <p className="text-xs text-white/70">
                      {item.reason}
                    </p>
                    <div className="font-mono text-[10px] text-blue-300">
                      &gt; Potential Upside: {item.upside}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. POTENTIAL */}
            <div className="p-6 rounded-sm bg-[#0C0F17] border border-blue-900/40 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  <span>POTENTIAL // COMPOUNDING FOOTPRINT MULTIPLIER</span>
                </div>
                <span className="font-mono text-[10px] bg-blue-950/60 text-blue-400 border border-blue-800/40 px-2 py-0.5 rounded-xs">
                  SYNQ ESTIMATE
                </span>
              </div>

              <div className="p-4 bg-blue-950/30 border border-blue-500/20 rounded-xs space-y-2">
                <div className="font-display font-extrabold text-3xl text-white">
                  {scanResult.potential.estimatedLift}
                </div>
                <div className="font-mono text-xs text-blue-300 font-semibold">
                  {scanResult.potential.syncMultiplier}
                </div>
                <p className="text-xs text-white/80 pt-2 border-t border-white/10">
                  {scanResult.potential.keyRecommendation}
                </p>
              </div>

              <button
                id="scan-build-footprint-action"
                onClick={() => {
                  playPing(720, 'sine', 0.08);
                  onOpenProjectModal(`Footprint Plan: ${formData.brandName}`);
                }}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold rounded-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>BUILD MY FOOTPRINT WITH SYNQ-SQUARE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
