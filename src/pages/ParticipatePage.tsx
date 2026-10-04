import React, { useState } from 'react';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, AlertTriangle, 
  Sparkles, Layers, Send, Check 
} from 'lucide-react';
import { TopographicBackground } from '../components/TopographicBackground';
import { PARTICIPATE_ENTRY_POINTS, ParticipateEntryPoint } from '../data/system_architecture_data';

export function ParticipatePage() {
  const [activeTabId, setActiveTabId] = useState<string>('have-problem');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const activeEntryPoint = PARTICIPATE_ENTRY_POINTS.find((ep) => ep.id === activeTabId) || PARTICIPATE_ENTRY_POINTS[0];

  const handleFieldChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-[#03040A] text-[#ECEEF5] pt-24 sm:pt-28 pb-20 px-4 sm:px-6">
      <TopographicBackground />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 bg-white/[0.05] border border-white/[0.08] px-2.5 py-1">
              13 — PARTICIPATION PROTOCOL
            </span>
            <span className="font-mono text-xs text-zinc-500">•</span>
            <span className="font-mono text-xs text-zinc-400">CONTEXTUAL SYSTEM ENTRY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Enter the DIGISYNQ system through your exact operational context.
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
            We don't use generic contact forms. An asset-light entertainment operating system requires structured, contextual inputs. Choose your active intent below to route directly to our triage, matching, or intelligence coordination team.
          </p>
        </div>

        {/* 6 Contextual Entry Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {PARTICIPATE_ENTRY_POINTS.map((point) => {
            const isSelected = point.id === activeTabId;
            return (
              <button
                key={point.id}
                onClick={() => {
                  setActiveTabId(point.id);
                  setFormSubmitted(false);
                }}
                className={`p-3.5 text-left border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white text-black border-white shadow-xl'
                    : 'bg-[#080B12] text-zinc-400 border-white/[0.06] hover:border-zinc-600 hover:text-white'
                }`}
              >
                <div>
                  <span className={`font-mono text-[9px] block mb-1 uppercase ${isSelected ? 'text-zinc-600' : 'text-zinc-500'}`}>
                    {point.badge}
                  </span>
                  <div className={`font-extrabold text-xs tracking-tight leading-tight ${isSelected ? 'text-black' : 'text-white'}`}>
                    {point.title}
                  </div>
                </div>
                <div className={`text-[10px] font-mono mt-3 ${isSelected ? 'text-zinc-800' : 'text-zinc-500'}`}>
                  Select Entry →
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Context Panel & Form */}
        <div className="bg-[#080B12] border border-white/[0.08] p-6 sm:p-10">
          {formSubmitted ? (
            <div className="py-12 flex flex-col items-center text-center space-y-4 max-w-md mx-auto">
              <div className="w-12 h-12 bg-white text-black rounded-none flex items-center justify-center">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight text-white">
                Submission ingested into DIGISYNQ
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Your structured telemetry has been routed to our active coordination desk. A member of the technical team will verify credentials and initiate next-step matching within 4 business hours.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white underline pt-4"
              >
                Submit another contextual entry →
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Context Summary Left */}
              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                    SELECTED INTENT
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {activeEntryPoint.title}
                  </h3>
                  <p className="text-sm font-mono text-emerald-400">{activeEntryPoint.subtitle}</p>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed bg-black/40 p-4 border border-white/[0.04]">
                  {activeEntryPoint.description}
                </p>

                <div className="p-4 bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Strict Confidentiality Guaranteed</span>
                  </div>
                  <p className="text-[11px] text-zinc-500 leading-relaxed">
                    Unreleased project titles, script attachments, and operational budgets are treated as trade secrets under cryptographic access governance.
                  </p>
                </div>
              </div>

              {/* Dynamic Structured Form Right */}
              <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-8 lg:pt-0 lg:pl-10">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {activeEntryPoint.fields.map((field) => (
                    <div key={field.name} className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                        {field.label}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          required
                          rows={3}
                          placeholder={field.placeholder}
                          value={formData[field.name] || ''}
                          onChange={(e) => handleFieldChange(field.name, e.target.value)}
                          className="w-full bg-[#0D111C] border border-white/[0.08] text-xs font-mono text-white placeholder-zinc-500 p-3 focus:outline-none focus:border-white transition-colors"
                        />
                      ) : field.type === 'select' ? (
                        <select
                          required
                          value={formData[field.name] || ''}
                          onChange={(e) => handleFieldChange(field.name, e.target.value)}
                          className="w-full bg-[#0D111C] border border-white/[0.08] text-xs font-mono text-zinc-200 p-3 focus:outline-none focus:border-white transition-colors"
                        >
                          <option value="">{field.placeholder}</option>
                          {field.options?.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type="text"
                          required
                          placeholder={field.placeholder}
                          value={formData[field.name] || ''}
                          onChange={(e) => handleFieldChange(field.name, e.target.value)}
                          className="w-full bg-[#0D111C] border border-white/[0.08] text-xs font-mono text-white placeholder-zinc-500 p-3 focus:outline-none focus:border-white transition-colors"
                        />
                      )}
                    </div>
                  ))}

                  <button
                    type="submit"
                    className="w-full bg-white text-black hover:bg-zinc-200 px-6 py-3.5 text-xs font-mono uppercase font-bold tracking-widest transition-colors flex items-center justify-center gap-2 mt-4"
                  >
                    <span>{activeEntryPoint.ctaLabel}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
