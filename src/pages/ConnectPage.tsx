import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Network, ArrowRight, ArrowUpRight, CheckCircle2, 
  ShieldCheck, Cpu, Clock, Layers, Users, Zap 
} from 'lucide-react';
import { TopographicBackground } from '../components/TopographicBackground';
import { CONNECT_REAL_SCENARIO, ConnectScenarioStep } from '../data/system_architecture_data';

export function ConnectPage() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = CONNECT_REAL_SCENARIO[activeStepIndex];

  return (
    <div className="relative min-h-screen bg-[#03040A] text-[#ECEEF5] pt-24 sm:pt-28 pb-20 px-4 sm:px-6">
      <TopographicBackground />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 bg-white/[0.05] border border-white/[0.08] px-2.5 py-1">
              08 — CONNECT PROTOCOL
            </span>
            <span className="font-mono text-xs text-zinc-500">•</span>
            <span className="font-mono text-xs text-zinc-400">HOW THINGS GET CONNECTED</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Algorithmic matching for high-stakes entertainment resources.
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
            Connecting a production is not searching a public classified directory or sending frantic WhatsApp messages. It requires simultaneously aligning union rates, optical lens serials, acoustic soundstage decibel ratings, municipal permit covenants, and insurance indemnity waivers in one synchronized bundle.
          </p>
        </div>

        {/* Real Scenario Banner */}
        <div className="p-6 bg-[#080B12] border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">LIVE CASE WALKTHROUGH</span>
            <h3 className="text-lg font-extrabold text-white tracking-tight">
              Feature production: emergency 18-day Vancouver shoot unit
            </h3>
            <p className="text-xs text-zinc-400">
              Requirements: A-List Cinematographer · Arri Alexa 35 Camera Package · 15,000 sq ft Stage · 3 Heritage Locations · IATSE 669 Crew
            </p>
          </div>
          <div className="font-mono text-xs bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 px-3 py-1.5 shrink-0">
            Resolved in 14 Hours vs 3-Week Industry Standard
          </div>
        </div>

        {/* 6-Stage Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {CONNECT_REAL_SCENARIO.map((step, idx) => {
            const isSelected = idx === activeStepIndex;
            return (
              <button
                key={step.stage}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3.5 text-left border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white text-black border-white shadow-xl'
                    : 'bg-[#080B12] text-zinc-400 border-white/[0.06] hover:border-zinc-600 hover:text-white'
                }`}
              >
                <div>
                  <span className={`font-mono text-[10px] block mb-1 uppercase ${isSelected ? 'text-zinc-600' : 'text-zinc-500'}`}>
                    STAGE {step.stage}
                  </span>
                  <div className={`font-extrabold text-xs tracking-tight leading-tight ${isSelected ? 'text-black' : 'text-white'}`}>
                    {step.name}
                  </div>
                </div>
                <div className={`text-[10px] font-mono mt-3 ${isSelected ? 'text-zinc-800' : 'text-zinc-500'}`}>
                  Step Details →
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep Detail Card */}
        <div className="p-6 sm:p-8 bg-[#090C15] border border-white/[0.08] space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
            <div>
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                STAGE {activeStep.stage} OF 06: {activeStep.name}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                {activeStep.action}
              </h3>
            </div>
            <div className="font-mono text-xs bg-white/[0.05] border border-white/[0.1] text-zinc-300 px-3 py-1.5 self-start md:self-auto">
              Mechanism: {activeStep.digisynqMechanism}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-white/[0.02] border border-white/[0.06] space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block">
                Telemetry Inputs Processed:
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 font-mono leading-relaxed">
                {activeStep.inputData}
              </p>
            </div>

            <div className="p-5 bg-emerald-950/20 border border-emerald-500/20 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block">
                Verified Verification Outcome:
              </span>
              <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-semibold">
                {activeStep.outcome}
              </p>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-white/[0.08]">
            <button
              onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
              disabled={activeStepIndex === 0}
              className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none px-3 py-2 border border-zinc-800 hover:border-zinc-600 transition-colors"
            >
              ← PREVIOUS STEP
            </button>
            <button
              onClick={() => setActiveStepIndex((prev) => Math.min(CONNECT_REAL_SCENARIO.length - 1, prev + 1))}
              disabled={activeStepIndex === CONNECT_REAL_SCENARIO.length - 1}
              className="text-xs font-mono uppercase tracking-wider bg-white text-black hover:bg-zinc-200 disabled:opacity-30 disabled:pointer-events-none px-4 py-2 font-bold transition-colors"
            >
              NEXT STEP →
            </button>
          </div>
        </div>

        {/* Narrative Link to Orchestrate */}
        <div className="p-8 bg-[#090C15] border border-white/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">NEXT IN THE SYSTEM</span>
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              Connection is only step 1. Then comes orchestration.
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              A marketplace stops at booking. DIGISYNQ orchestrates the live shoot: managing dependencies, schedules, crew rest turns, and resolving variances in real time.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/orchestrate"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-zinc-200 px-5 py-3 text-xs font-mono uppercase font-bold tracking-wider transition-colors"
            >
              <span>SEE WORKFLOW ORCHESTRATION</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/measure"
              className="inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] px-5 py-3 text-xs font-mono uppercase font-semibold tracking-wider transition-colors"
            >
              <span>SEE DECISION TELEMETRY</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
