import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, ArrowRight, ArrowUpRight, ShieldCheck, 
  TrendingUp, Clock, DollarSign, Database, Sparkles 
} from 'lucide-react';
import { TopographicBackground } from '../components/TopographicBackground';
import { MEASURE_METRICS, MeasureMetric } from '../data/system_architecture_data';

export function MeasurePage() {
  const [selectedMetricId, setSelectedMetricId] = useState<string>('M-01');
  const activeMetric = MEASURE_METRICS.find((m) => m.id === selectedMetricId) || MEASURE_METRICS[0];

  return (
    <div className="relative min-h-screen bg-[#03040A] text-[#ECEEF5] pt-24 sm:pt-28 pb-20 px-4 sm:px-6">
      <TopographicBackground />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 bg-white/[0.05] border border-white/[0.08] px-2.5 py-1">
              10 — MEASUREMENT & TELEMETRY
            </span>
            <span className="font-mono text-xs text-zinc-500">•</span>
            <span className="font-mono text-xs text-zinc-400">WHAT WE LEARN FROM ACTIVITY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-none">
            Every Metric Must Answer: What Decision Does This Improve?
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
            Entertainment data is often superficial vanity numbers: box-office gross headlines and social media follower counts. DIGISYNQ measures the operational mechanics that actually dictate survival: dark soundstage floor utilization, schedule cascade multipliers, and cost leakage indexes.
          </p>
        </div>

        {/* Core Metrics Strip */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
            <h2 className="text-xl font-bold uppercase tracking-tight text-white">
              Decision-Grade Operational Telemetry
            </h2>
            <span className="text-xs font-mono text-zinc-500">Real-Time Ingestion</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {MEASURE_METRICS.map((metric) => {
              const isSelected = metric.id === activeMetric.id;
              return (
                <button
                  key={metric.id}
                  onClick={() => setSelectedMetricId(metric.id)}
                  className={`p-4 text-left border transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white text-black border-white shadow-xl'
                      : 'bg-[#080B12] text-zinc-400 border-white/[0.06] hover:border-zinc-600 hover:text-white'
                  }`}
                >
                  <div>
                    <span className={`font-mono text-[10px] block mb-2 font-bold uppercase ${isSelected ? 'text-zinc-600' : 'text-zinc-500'}`}>
                      {metric.id}
                    </span>
                    <h3 className={`text-sm font-bold uppercase tracking-tight leading-tight ${isSelected ? 'text-black' : 'text-white'}`}>
                      {metric.metricName}
                    </h3>
                  </div>
                  <div className={`text-[10px] font-mono mt-4 ${isSelected ? 'text-zinc-800' : 'text-zinc-500'}`}>
                    Examine Decision →
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Metric Deep Dive */}
        <div className="p-6 sm:p-8 bg-[#090C15] border border-white/[0.08] space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
            <div>
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                TELEMETRY METRIC {activeMetric.id}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mt-1">
                {activeMetric.metricName}
              </h3>
            </div>
            <div className="font-mono text-xs bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 px-3 py-1.5 self-start md:self-auto">
              Feed Into EERG Knowledge Graph
            </div>
          </div>

          <div className="text-sm text-zinc-300 leading-relaxed bg-black/40 p-4 border border-white/[0.04]">
            <span className="text-xs font-mono uppercase text-zinc-500 block mb-1">Operational Definition:</span>
            {activeMetric.definition}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-white/[0.02] border border-white/[0.06] space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block font-bold">
                WHAT DECISION DOES THIS INFORMATION IMPROVE?
              </span>
              <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                {activeMetric.whatDecisionItImproves}
              </p>
            </div>

            <div className="p-5 bg-white/[0.02] border border-white/[0.06] space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block font-bold">
                EMPIRICAL FIELD INSIGHT / TELEMETRY SAMPLE:
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-mono">
                {activeMetric.sampleInsight}
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-zinc-500 border-t border-white/[0.06]">
            <span>TELEMETRY INGESTION SOURCE: {activeMetric.sourceTelemetry}</span>
            <span className="text-white">Loop: Measure → Generate Data → Improve Intelligence → EERG</span>
          </div>
        </div>

        {/* Narrative Link to Monetize & Participate */}
        <div className="p-8 bg-[#090C15] border border-white/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">NEXT IN THE SYSTEM</span>
            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
              A Transparent, Multi-Layered Commercial Engine.
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Understand how DIGISYNQ captures economic value across network access, transaction liquidity, orchestration fees, and enterprise decision intelligence.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/monetize"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-zinc-200 px-5 py-3 text-xs font-mono uppercase font-bold tracking-wider transition-colors"
            >
              <span>EXPLORE BUSINESS MODEL</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/participate"
              className="inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] px-5 py-3 text-xs font-mono uppercase font-semibold tracking-wider transition-colors"
            >
              <span>PARTICIPATE IN THE SYSTEM</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
