import React, { useState } from 'react';
import ProblemMatrix from '../components/fixsynq/ProblemMatrix';
import RootNetworkCanvas from '../components/fixsynq/RootNetworkCanvas';
import HiddenLayerScanner from '../components/fixsynq/HiddenLayerScanner';
import MethodologyTimeline from '../components/fixsynq/MethodologyTimeline';
import InterventionToolkit from '../components/fixsynq/InterventionToolkit';
import CaseSimulator from '../components/fixsynq/CaseSimulator';
import OutcomeMeters from '../components/fixsynq/OutcomeMeters';
import AssetLightNetwork from '../components/fixsynq/AssetLightNetwork';
import TrustAndFaq from '../components/fixsynq/TrustAndFaq';
import IntelligenceLayer from '../components/fixsynq/IntelligenceLayer';
import CategoryManifesto from '../components/fixsynq/CategoryManifesto';
import ProblemIntakeModal from '../components/fixsynq/ProblemIntakeModal';
import { Network, Search, Layers, Cpu, ShieldCheck, HelpCircle, ArrowUpRight } from 'lucide-react';

export function FixSynqHub() {
  const [intakeModalOpen, setIntakeModalOpen] = useState(false);
  const [intakeStakeholder, setIntakeStakeholder] = useState('');
  const [intakeProblem, setIntakeProblem] = useState('');
  const [activeTab, setActiveTab] = useState<'matrix' | 'canvas' | 'scanner' | 'simulator' | 'toolkit' | 'methodology'>('matrix');

  const handleOpenIntake = (stakeholder = '', problem = '') => {
    setIntakeStakeholder(stakeholder);
    setIntakeProblem(problem);
    setIntakeModalOpen(true);
  };

  const tabs = [
    { id: 'matrix', label: 'Problem Matrix', icon: Network },
    { id: 'canvas', label: 'Root Network Graph', icon: Layers },
    { id: 'scanner', label: 'Hidden Layer Scanner', icon: Search },
    { id: 'simulator', label: 'Case Simulator', icon: Cpu },
    { id: 'toolkit', label: 'Interventions', icon: ShieldCheck },
    { id: 'methodology', label: 'Runbook & Timeline', icon: HelpCircle }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#08090C] text-[#E2E8F0] font-sans">
      
      {/* Subnav for Fix-Synq */}
      <div className="sticky top-14 z-40 bg-[#0a0c14]/90 backdrop-blur-md border-b border-white/[0.06] px-4 sm:px-8 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-bold flex items-center gap-1.5">
              <Network className="w-3.5 h-3.5" />
              Fix-Synq Operating Matrix
            </span>
          </div>

          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors shrink-0 cursor-pointer ${
                    isActive 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold' 
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => handleOpenIntake('General', 'Network Friction')}
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-black font-bold text-xs transition-all cursor-pointer shadow-lg shadow-emerald-500/20"
          >
            <span>Log Friction</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-8 space-y-12">
        {activeTab === 'matrix' && (
          <div className="space-y-12">
            <ProblemMatrix onOpenIntake={handleOpenIntake} />
            <OutcomeMeters />
            <AssetLightNetwork />
            <TrustAndFaq />
          </div>
        )}

        {activeTab === 'canvas' && (
          <div className="space-y-8">
            <RootNetworkCanvas onOpenIntake={handleOpenIntake} />
          </div>
        )}

        {activeTab === 'scanner' && (
          <div className="space-y-8">
            <HiddenLayerScanner />
          </div>
        )}

        {activeTab === 'simulator' && (
          <div className="space-y-8">
            <CaseSimulator onOpenIntake={handleOpenIntake} />
          </div>
        )}

        {activeTab === 'toolkit' && (
          <div className="space-y-8">
            <InterventionToolkit onOpenIntake={handleOpenIntake} />
            <CategoryManifesto onOpenIntake={handleOpenIntake} />
          </div>
        )}

        {activeTab === 'methodology' && (
          <div className="space-y-8">
            <MethodologyTimeline onOpenIntake={handleOpenIntake} />
            <IntelligenceLayer />
          </div>
        )}
      </main>

      {/* Problem Intake Modal */}
      <ProblemIntakeModal
        isOpen={intakeModalOpen}
        onClose={() => setIntakeModalOpen(false)}
        initialStakeholder={intakeStakeholder}
        initialProblem={intakeProblem}
      />
    </div>
  );
}
