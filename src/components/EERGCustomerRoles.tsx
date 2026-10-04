import React, { useState } from 'react';
import { DollarSign, UserCheck, ShieldAlert, Wallet, ShoppingCart, User, Sparkles } from 'lucide-react';
import { EERG_CUSTOMER_ROLES } from '../data/eerg_data';

export function EERGCustomerRoles() {
  const [activeDomainIndex, setActiveDomainIndex] = useState(0);
  const activeRole = EERG_CUSTOMER_ROLES[activeDomainIndex] || EERG_CUSTOMER_ROLES[0];

  return (
    <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#090B14] shadow-2xl relative overflow-hidden" id="customer-roles">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-white/[0.02] blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-white font-mono text-xs font-semibold mb-3">
            <DollarSign className="w-3.5 h-3.5" />
            <span>COMMERCIAL DISCOVERY LOGIC</span>
            <span className="text-zinc-600">//</span>
            <span>SECTION 20 SPECIFICATION</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            The 5-Part Paying Customer Framework
          </h2>
          <p className="text-sm text-zinc-300 mt-2 max-w-2xl leading-relaxed">
            Never assume the problem owner is the buyer. Entertainment deals fail when startups pitch the victim instead of the economic beneficiary who controls the budget and absorbs the financial risk.
          </p>
        </div>

        {/* Domain Selectors */}
        <div className="flex flex-wrap gap-2">
          {EERG_CUSTOMER_ROLES.map((r, idx) => (
            <button
              key={r.domain}
              onClick={() => setActiveDomainIndex(idx)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono tracking-wider transition-all ${
                activeDomainIndex === idx
                  ? 'bg-white text-black font-bold shadow-md shadow-white/10'
                  : 'bg-black/60 text-zinc-400 hover:text-white border border-white/[0.08]'
              }`}
            >
              {r.domain.split('(')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Domain Title */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-semibold">
            COMMERCIAL DOMAIN & REVENUE ENGINE
          </span>
          <h3 className="text-xl font-black text-white">
            {activeRole.domain}
          </h3>
        </div>
        <span className="text-xs font-mono text-zinc-400 bg-black/60 px-3 py-1 rounded-full border border-white/[0.08]">
          5-Point Entity Decomposition
        </span>
      </div>

      {/* The 5 Stakeholder Roles Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
        {/* 1. Problem Owner */}
        <div className="p-4 rounded-2xl bg-black/50 border border-white/[0.08] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-zinc-400 font-mono text-[10px] uppercase font-semibold mb-2">
              <ShieldAlert className="w-3.5 h-3.5 text-zinc-400" />
              <span>01. PROBLEM OWNER</span>
            </div>
            <div className="text-[11px] text-zinc-500 mb-1">Who experiences the pain?</div>
            <div className="text-xs font-bold text-white leading-snug">
              {activeRole.problemOwner}
            </div>
          </div>
          <div className="mt-4 pt-2 border-t border-white/[0.04] text-[10px] font-mono text-zinc-500">
            Experiences friction
          </div>
        </div>

        {/* 2. Economic Beneficiary */}
        <div className="p-4 rounded-2xl bg-black/50 border border-white/[0.08] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-zinc-300 font-mono text-[10px] uppercase font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>02. BENEFICIARY</span>
            </div>
            <div className="text-[11px] text-zinc-500 mb-1">Who benefits from solving it?</div>
            <div className="text-xs font-bold text-white leading-snug">
              {activeRole.economicBeneficiary}
            </div>
          </div>
          <div className="mt-4 pt-2 border-t border-white/[0.04] text-[10px] font-mono text-zinc-400">
            Captures upside
          </div>
        </div>

        {/* 3. Budget Owner */}
        <div className="p-4 rounded-2xl bg-black/50 border border-white/[0.08] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-zinc-300 font-mono text-[10px] uppercase font-semibold mb-2">
              <Wallet className="w-3.5 h-3.5 text-white" />
              <span>03. BUDGET OWNER</span>
            </div>
            <div className="text-[11px] text-zinc-500 mb-1">Who controls the capital?</div>
            <div className="text-xs font-bold text-white leading-snug">
              {activeRole.budgetOwner}
            </div>
          </div>
          <div className="mt-4 pt-2 border-t border-white/[0.04] text-[10px] font-mono text-zinc-400">
            Signs the checks
          </div>
        </div>

        {/* 4. Buyer */}
        <div className="p-4 rounded-2xl bg-white/[0.08] border border-white/20 flex flex-col justify-between shadow-lg">
          <div>
            <div className="flex items-center gap-1.5 text-white font-mono text-[10px] uppercase font-bold mb-2">
              <ShoppingCart className="w-3.5 h-3.5 text-white" />
              <span>04. ACTUAL BUYER</span>
            </div>
            <div className="text-[11px] text-zinc-400 mb-1">Who signs the contract?</div>
            <div className="text-xs font-black text-white leading-snug">
              {activeRole.buyer}
            </div>
          </div>
          <div className="mt-4 pt-2 border-t border-white/10 text-[10px] font-mono text-white font-semibold">
            Enterprise Client
          </div>
        </div>

        {/* 5. End User */}
        <div className="p-4 rounded-2xl bg-black/50 border border-white/[0.08] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-zinc-400 font-mono text-[10px] uppercase font-semibold mb-2">
              <User className="w-3.5 h-3.5 text-zinc-400" />
              <span>05. END USER</span>
            </div>
            <div className="text-[11px] text-zinc-500 mb-1">Who actually operates it?</div>
            <div className="text-xs font-bold text-white leading-snug">
              {activeRole.endUser}
            </div>
          </div>
          <div className="mt-4 pt-2 border-t border-white/[0.04] text-[10px] font-mono text-zinc-500">
            Daily workflow user
          </div>
        </div>
      </div>

      {/* Commercial Strategy Insight */}
      <div className="p-5 rounded-2xl bg-black/60 border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-1 font-semibold">
            STRATEGIC MONETIZATION DIRECTIVE:
          </span>
          <p className="text-xs text-zinc-200 leading-relaxed font-light">
            {activeRole.commercialInsight}
          </p>
        </div>
        <div className="shrink-0 text-right">
          <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 font-bold">
            Zero Misdirected Sales Cycles
          </span>
        </div>
      </div>
    </div>
  );
}
