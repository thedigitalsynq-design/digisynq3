import React, { useState } from 'react';
import { SocialHeroArena } from '../components/squaresynq/SocialHeroArena';
import { SocialCampaignShowcase } from '../components/squaresynq/SocialCampaignShowcase';
import { SocialServicesGrid } from '../components/squaresynq/SocialServicesGrid';
import { LiveTrendRadar } from '../components/squaresynq/LiveTrendRadar';
import { CreatorRosterHub } from '../components/squaresynq/CreatorRosterHub';
import { CampaignRoiCalculator } from '../components/squaresynq/CampaignRoiCalculator';
import { AgencyManifesto } from '../components/squaresynq/AgencyManifesto';
import { CampaignStrategyModal } from '../components/squaresynq/CampaignStrategyModal';
import { CreativeAuditModal } from '../components/squaresynq/CreativeAuditModal';
import { GrokbotStudio } from '../components/squaresynq/GrokbotStudio';
import { SocialCampaign } from '../data/socialAgencyData';
import { playPing, playSynqChime } from '../utils/audio';
import { Sparkles, Activity, Users, Calculator, Bot, Award, ArrowUpRight } from 'lucide-react';

export function SquareSynqHub() {
  const [currentTab, setCurrentTab] = useState<string>('work');
  const [isAuditModalOpen, setIsAuditModalOpen] = useState<boolean>(false);
  const [auditModalContext, setAuditModalContext] = useState<string | undefined>();
  const [selectedStrategyCampaign, setSelectedStrategyCampaign] = useState<SocialCampaign | null>(null);

  const handleOpenAuditModal = (context?: string) => {
    setAuditModalContext(context);
    setIsAuditModalOpen(true);
    playSynqChime();
  };

  const handleSelectTab = (tab: string) => {
    setCurrentTab(tab);
    playPing();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tabs = [
    { id: 'work', label: 'Campaigns & Work', icon: Sparkles },
    { id: 'radar', label: 'Trend Radar', icon: Activity },
    { id: 'creators', label: 'Creator Roster', icon: Users },
    { id: 'calculator', label: 'ROI Engine', icon: Calculator },
    { id: 'grokbot', label: 'Grokbot AI Studio', icon: Bot },
    { id: 'manifesto', label: 'Agency Manifesto', icon: Award }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#07080D] text-[#F1F5F9] font-sans selection:bg-pink-500 selection:text-white">
      
      {/* Background ambient lighting */}
      <div className="fixed inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none z-0" />

      {/* Subnav for SquareSynq */}
      <div className="sticky top-14 z-40 bg-[#0a0c14]/90 backdrop-blur-md border-b border-white/[0.06] px-4 sm:px-8 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono tracking-widest text-pink-400 uppercase font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              SquareSynq Social Engine
            </span>
          </div>

          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleSelectTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors shrink-0 cursor-pointer ${
                    isActive 
                      ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40 font-bold' 
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
            onClick={() => handleOpenAuditModal('Social Hub Call to Action')}
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-bold text-xs transition-all cursor-pointer shadow-lg shadow-pink-500/20"
          >
            <span>Request Audit</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Agency Content View */}
      <main className="flex-1 flex flex-col relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 py-6">
        
        {currentTab === 'work' && (
          <div className="space-y-12">
            <SocialHeroArena
              onOpenAuditModal={handleOpenAuditModal}
              onExploreWork={() => {
                const el = document.getElementById('campaigns-showcase');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenCalculator={() => handleSelectTab('calculator')}
              onSelectCampaign={(camp) => setSelectedStrategyCampaign(camp)}
            />
            <div id="campaigns-showcase">
              <SocialCampaignShowcase
                onSelectCampaign={(camp) => setSelectedStrategyCampaign(camp)}
                onOpenAuditModal={handleOpenAuditModal}
              />
            </div>
            <SocialServicesGrid onOpenAuditModal={handleOpenAuditModal} />
          </div>
        )}

        {currentTab === 'radar' && (
          <div className="py-4">
            <LiveTrendRadar onOpenAuditModal={handleOpenAuditModal} />
          </div>
        )}

        {currentTab === 'creators' && (
          <div className="py-4">
            <CreatorRosterHub onOpenAuditModal={handleOpenAuditModal} />
          </div>
        )}

        {currentTab === 'calculator' && (
          <div className="py-4">
            <CampaignRoiCalculator onOpenAuditModal={handleOpenAuditModal} />
          </div>
        )}

        {currentTab === 'grokbot' && (
          <div className="py-4">
            <GrokbotStudio
              onOpenProjectModal={(ctx) => handleOpenAuditModal(ctx)}
              onNavigateToMap={() => handleSelectTab('radar')}
            />
          </div>
        )}

        {currentTab === 'manifesto' && (
          <div className="py-4">
            <AgencyManifesto onOpenAuditModal={handleOpenAuditModal} />
          </div>
        )}
      </main>

      {/* Campaign Strategy Modal */}
      {selectedStrategyCampaign && (
        <CampaignStrategyModal
          campaign={selectedStrategyCampaign}
          onClose={() => setSelectedStrategyCampaign(null)}
          onOpenAuditModal={(ctx) => {
            setSelectedStrategyCampaign(null);
            handleOpenAuditModal(ctx);
          }}
        />
      )}

      {/* Creative Audit Modal */}
      {isAuditModalOpen && (
        <CreativeAuditModal
          isOpen={isAuditModalOpen}
          context={auditModalContext}
          onClose={() => setIsAuditModalOpen(false)}
        />
      )}
    </div>
  );
}
