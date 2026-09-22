import { useState } from 'react';
import { motion } from 'framer-motion';
import { GIcon } from './GIcon';
import { useProject } from './ProjectContext';
import { films } from '../data/damage';
import { useToast } from './Toaster';
import { useRoom } from './RoomState';

export type CountermeasureType = 'press_release' | 'piracy_dmca' | 'exhibitor_memo' | 'critic_advisory' | 'review_audit' | 'fan_war';

export function CountermeasureModal({
  isOpen,
  onClose,
  initialType = 'press_release',
}: {
  isOpen: boolean;
  onClose: () => void;
  initialType?: CountermeasureType;
}) {
  const { project } = useProject();
  const toast = useToast();
  const { apply } = useRoom();
  const currentFilm = films.find((f) => f.id === project.id) || films[0];

  const [activeTab, setActiveTab] = useState<CountermeasureType>(initialType);
  const [tone, setTone] = useState<'firm' | 'conciliatory' | 'legal'>('firm');
  const [status, setStatus] = useState<'idle' | 'dispatching' | 'dispatched'>('idle');

  if (!isOpen) return null;

  const handleDispatch = (typeLabel: string) => {
    setStatus('dispatching');
    setTimeout(() => {
      setStatus('dispatched');
      apply('approve');
      toast(`${typeLabel} dispatched to 28 distribution partners & media desks`, 'success');
      setTimeout(() => {
        setStatus('idle');
        onClose();
      }, 1400);
    }, 900);
  };

  const pressStatements = {
    firm: `FOR IMMEDIATE DISTRIBUTION — MUMBAI / BENGALURU

OFFICIAL STUDIO CLARIFICATION: REGARDING UNAUTHORIZED SPECULATION AROUND "${currentFilm.title}"

The production house and creative leadership of "${currentFilm.title}" categorically address false and misleading narratives circulating across unverified social handles over the past 24 hours.

1. FACTUAL CONTINUITY: The film's theatrical edit and artistic integrity remain fully aligned with the certified vision approved by the Central Board of Film Certification (CBFC) with a runtime of 2h 48m. Speculative rumors alleging unauthorized trims or distributor-led cuts are entirely groundless.
2. BOX OFFICE REALITY: The film has demonstrated exceptional theatrical hold across key regional circuits, having already garnered ${currentFilm.revenue.gross}. Theatrical occupancy in evening shows across Karnataka, Maharashtra, and Andhra Pradesh remains robust.
3. LEGAL WARNING: Our legal division is actively monitoring malicious, coordinated smear activities, including defamatory bot campaigns and copyright-infringing pirated clips. Civil and criminal proceedings under the Copyright Act and IT Act are underway against identified accounts.

We extend our heartfelt gratitude to millions of genuine cinema lovers filling auditoriums worldwide.

— Issued by Executive Production Office & Corporate Communications
Contact: press@cinemadamagecontrol.internal | Studio Desk`,

    conciliatory: `OFFICIAL STATEMENT: A MESSAGE FROM THE MAKERS OF "${currentFilm.title}"

To our valued audience, media partners, and film fraternity:

Cinema is an emotional communion between creators and viewers. Over the last 48 hours, we have received passionate feedback, critique, and immense love from every corner of the country.

Every review, heartfelt reaction, and constructive observation is received with deep humility by our director, cast, and crew. We remain devoted to delivering high-octane, unforgettable cinematic spectacles that celebrate the grandeur of the big screen.

We urge all film lovers to experience "${currentFilm.title}" in theatres with state-of-the-art Dolby Atmos and IMAX projection, rejecting low-quality illicit clips. Thank you for your unwavering support.

— The Creative & Production Team of "${currentFilm.title}"`,

    legal: `LEGAL REBUTTAL & CEASE-AND-DESIST ADVISORY

TO: ALL DIGITAL PORTALS, REVIEW AGGREGATORS & SOCIAL MEDIA HANDLERS
RE: DEFAMATORY FABRICATIONS & UNVERIFIED RUMORS CONCERNING "${currentFilm.title}"

NOTICE IS HEREBY GIVEN that our clients, the producers of "${currentFilm.title}", hold exclusive and proprietary theatrical, digital, and intellectual property rights in the motion picture.

Certain entities have knowingly broadcasted distorted video fragments out of context and falsely claimed distributor disputes. TAKE NOTICE that any publishing of unverified rumors causing intentional pecuniary damage to theatrical advance bookings constitutes actionable civil defamation and criminal conspiracy under applicable law.

Immediate compliance requires retraction of fabricated headlines within two (2) hours of this receipt.

— Senior Legal Counsel for Production & Distribution Syndicates`,
  };

  const piracyNotice = `FORMAL NOTICE OF COPYRIGHT INFRINGEMENT (DMCA / SECTION 51 INDIAN COPYRIGHT ACT)

TO: TELEGRAM MESSENGER INC., META PLATFORMS INC., & HOSTING SERVICE PROVIDERS

MOTION PICTURE: "${currentFilm.title}"
COPYRIGHT REGISTRATION: CR-CINEMA-2026-${currentFilm.id.toUpperCase()}-001
RIGHTS HOLDER: Studio Syndicate & Global Theatrical Licensees

We have detected 14 active channels distributing unauthorized high-definition pre-release/cam-rip clips of the climax sequence:
• t.me/CineLeaks_${currentFilm.id}_HQ (58,400 members)
• t.me/MovieLover_${currentFilm.id}_HD (42,100 members)
• Mega.nz folder token #849204_leaks (Active download link)

DEMAND: Immediate removal and termination of access to all listed URLs within one (1) hour of receipt. Continued hosting exposes intermediaries to loss of safe harbor under IT Intermediary Guidelines.`;

  const exhibitorMemo = `CONFIDENTIAL EXHIBITOR ADVISORY BULLETIN
TO: PROGRAMMING HEADS — PVR INOX, CINEPOLIS, MIRAJ, ASIAN CINEMAS & SINGLE SCREEN CIRCUITS

PROJECT: "${currentFilm.title}" // WEEKEND-2 RETENTION & AUDIENCE INCENTIVE SCHEME

Dear Exhibition Partners,

Following discussions with the Producers and All-India Distribution Syndicate, we are pleased to confirm our comprehensive support package for Week 2 screen retention:

1. MARKETING RE-IGNITION: An incremental ₹4.5 Cr co-op digital marketing and television ad blitz launching Thursday evening targeting metro evening and night shows.
2. ATP FLEXIBILITY: Single screens in B & C centers are authorized to apply dynamic Tuesday/Wednesday festive pricing (₹120–₹160 slab) while maintaining weekend premium ATP.
3. TALENT VISITS: Lead star-cast theatre visits scheduled across 6 major metro multiplexes this Friday and Saturday.

We guarantee full print support and protective minimum guarantee clauses. Please lock show allotments before 18:00 IST today.

— National Theatrical Distribution Directorate`;

  const reviewAuditNotice = `FORMAL PETITION FOR ANTI-FRAUD AUDIT & RATING INTEGRITY INTERVENTION
TO: COMPLIANCE & INTEGRITY DESKS — BOOKMYSHOW (BIGTREE ENTERTAINMENT) & IMDB TRUST & SAFETY

FILM: "${currentFilm.title}"
COMMERCIAL RELEASE DATE: ${currentFilm.releaseDate || 'Current 30-Day Window'}

Our telemetry has flagged an acute coordinated rating manipulation attack:
1. BOT CLUSTER RATIO: 44% of 1-star ratings submitted between 07:00–08:30 AM before the first show concluded originated from IP ranges associated with automated server farms.
2. DIVERGENCE METRIC: Verified BMS Ticket Buyers score the film at 8.9/10, while unverified public ratings dropped artificially to 4.1/10.
3. REMEDY REQUESTED: We formally request execution of your Fraud Review Scrub Algorithm to eliminate unverified bot ratings and display verified buyer scores prominently.`;

  const fanWarNotice = `INTERNAL ACTION DIRECTIVE: ALL-INDIA REGISTERED FAN ASSOCIATIONS
CONFIDENTIAL // FOR IMMEDIATE MOBILIZATION BY REGIONAL STATE PRESIDENTS

SUBJECT: COUNTERING COALITION SMEAR CAMPAIGNS & PROTECTING "${currentFilm.title}"

1. DEBUNK VIDEO INJECTION: Official 4K high-occupancy theatre celebration videos from Rohini Silver Screens (Chennai), Sudarshan 35mm (Hyderabad), and PVR Inox (Mumbai) are now uploaded to the asset drive. Distribute these immediately to counter fabricated "empty hall" morning videos.
2. POSITIVE TICKET AMPLIFICATION: Mobilize members to post ticket booking screenshots and genuine exit-poll videos with hashtag #${currentFilm.title.split(' ')[0]}Blockbuster.
3. REPORT SABOTAGE: Forward malicious Telegram/X links spreading doctored clips to legal@cinemadamagecontrol.internal for expedited High Court John Doe injunction processing.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.div
        className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-[24px] border border-white/15 bg-[#0e1017] text-white shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-2xl"
        initial={{ scale: 0.94, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 shadow-md">
              <GIcon name="campaign" size={18} className="text-white" />
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-[0.1em] text-blue-400 uppercase">Emergency Protocol</div>
              <h2 className="text-[17px] font-bold tracking-tight text-white">Crisis Action Dispatcher · {currentFilm.title}</h2>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20 hover:text-white"
          >
            <GIcon name="close" size={16} />
          </button>
        </div>

        {/* Action Type Tabs */}
        <div className="flex border-b border-white/10 bg-black/40 px-6 pt-2 overflow-x-auto">
          {[
            { id: 'piracy_dmca', label: 'Piracy & John Doe DMCA', icon: 'gavel' },
            { id: 'review_audit', label: 'Anti-Review Bombing Audit', icon: 'star' },
            { id: 'press_release', label: 'Boycott & PR Fact-Check', icon: 'newspaper' },
            { id: 'fan_war', label: 'Fan War Sabotage Shield', icon: 'group' },
            { id: 'exhibitor_memo', label: 'Exhibitor Reassurance', icon: 'storefront' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as CountermeasureType)}
              className={`flex items-center gap-2 border-b-2 px-3.5 py-3 text-[12.5px] font-medium transition whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-blue-500 text-white font-semibold'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <GIcon name={tab.icon} size={15} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 space-y-4 overflow-y-auto p-6 text-[13px]">
          {activeTab === 'press_release' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-semibold text-zinc-300 uppercase tracking-wider">Tone Strategy</span>
                <div className="flex rounded-lg bg-white/5 p-1">
                  {(
                    [
                      { id: 'firm', label: 'Measured Authority' },
                      { id: 'conciliatory', label: 'Audience Gratitude' },
                      { id: 'legal', label: 'Aggressive Legal Rebuttal' },
                    ] as const
                  ).map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTone(t.id)}
                      className={`rounded-md px-3 py-1 text-[11px] font-medium transition ${
                        tone === t.id ? 'bg-blue-600 text-white shadow-sm' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/60 p-4 font-mono text-[12px] leading-relaxed text-zinc-200">
                <pre className="whitespace-pre-wrap font-sans">{pressStatements[tone]}</pre>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.03] p-3 text-[12px] text-zinc-400">
                <div className="flex items-center gap-2">
                  <GIcon name="send_and_archive" size={16} className="text-blue-400" />
                  <span>Distribution channels: <strong>ANI, PTI, Pinkvilla, Bollywood Hungama, Variety, X Official Handle</strong></span>
                </div>
                <span className="text-[11px] text-zinc-500">Auto-formatted for AP style</span>
              </div>
            </div>
          )}

          {activeTab === 'piracy_dmca' && (
            <div className="space-y-4">
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-[12.5px] text-red-300">
                <div className="flex items-center gap-2 font-semibold">
                  <GIcon name="warning" size={16} className="text-red-400" />
                  High-Priority Piracy Takedown & John Doe Notice Batch
                </div>
                <p className="mt-1 text-[11.5px] text-red-200/80">
                  Targeting 14 Telegram channels and 3 cyberlockers. Intermediary notices cryptographically signed by Studio Legal Directorate.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/60 p-4 font-mono text-[11.5px] leading-relaxed text-zinc-200">
                <pre className="whitespace-pre-wrap">{piracyNotice}</pre>
              </div>
            </div>
          )}

          {activeTab === 'review_audit' && (
            <div className="space-y-4">
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5 text-[12.5px] text-amber-300">
                <div className="flex items-center gap-2 font-semibold">
                  <GIcon name="security" size={16} className="text-amber-400" />
                  BookMyShow & IMDb Anti-Fraud Appeal
                </div>
                <p className="mt-1 text-[11.5px] text-amber-200/80">
                  Transmitting audit request to isolate bot clusters (&lt;48h accounts) causing artificial 1-star rating depression.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/60 p-4 font-mono text-[11.5px] leading-relaxed text-zinc-200">
                <pre className="whitespace-pre-wrap font-sans">{reviewAuditNotice}</pre>
              </div>
            </div>
          )}

          {activeTab === 'fan_war' && (
            <div className="space-y-4">
              <div className="rounded-xl border border-purple-500/30 bg-purple-500/10 p-3.5 text-[12.5px] text-purple-300">
                <div className="flex items-center gap-2 font-semibold">
                  <GIcon name="group" size={16} className="text-purple-400" />
                  All-India Registered Fan Association Mobilization
                </div>
                <p className="mt-1 text-[11.5px] text-purple-200/80">
                  Transmitting verified occupancy debunks and 4K crowd reaction packs to 42 state fan association leads.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/60 p-4 font-mono text-[11.5px] leading-relaxed text-zinc-200">
                <pre className="whitespace-pre-wrap font-sans">{fanWarNotice}</pre>
              </div>
            </div>
          )}

          {activeTab === 'exhibitor_memo' && (
            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-black/60 p-4 font-mono text-[12px] leading-relaxed text-zinc-200">
                <pre className="whitespace-pre-wrap font-sans">{exhibitorMemo}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.03] px-6 py-4">
          <div className="text-[12px] text-zinc-400">
            Authorized by: <strong className="text-white">Studio Command Desk (Admin)</strong>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                const text =
                  activeTab === 'press_release'
                    ? pressStatements[tone]
                    : activeTab === 'piracy_dmca'
                    ? piracyNotice
                    : activeTab === 'review_audit'
                    ? reviewAuditNotice
                    : activeTab === 'fan_war'
                    ? fanWarNotice
                    : exhibitorMemo;
                navigator.clipboard.writeText(text);
                toast('Action text copied to clipboard', 'info');
              }}
              className="rounded-full bg-white/10 px-4 py-2 text-[13px] font-medium text-white transition hover:bg-white/15 active:scale-95"
            >
              Copy Text
            </button>
            <button
              onClick={() => handleDispatch(activeTab === 'press_release' ? 'Press Release' : activeTab === 'piracy_dmca' ? 'DMCA Notice' : 'Exhibitor Memo')}
              disabled={status !== 'idle'}
              className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-[13px] font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 active:scale-95 disabled:opacity-50"
            >
              <GIcon name={status === 'dispatched' ? 'check' : 'send'} size={15} />
              {status === 'dispatching' ? 'Broadcasting…' : status === 'dispatched' ? 'Dispatched' : 'Deploy Action Now'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
