import { useState, useEffect } from 'react';
import type { FC, FormEvent } from 'react';
import { X, Check, Network } from 'lucide-react';
import { motion } from 'motion/react';
import { useModalFocus } from '../../hooks/useModalFocus';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: string;
}

export const JoinModal: FC<JoinModalProps> = ({
  isOpen,
  onClose,
  defaultRole = 'Producer',
}) => {
  const [role, setRole] = useState(defaultRole || 'Producer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [territory, setTerritory] = useState('Global / North America');
  const [submitted, setSubmitted] = useState(false);
  const dialogRef = useModalFocus<HTMLDivElement>(isOpen);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = prevOverflow;
      };
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setOrganization('');
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#070A12]/80 backdrop-blur-2xl"
      id="join-network-modal"
      ref={dialogRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="join-network-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-lg rounded-3xl bg-[#0D1220]/95 border border-white/[0.14] shadow-[0_24px_80px_rgba(0,0,0,0.9),inset_0_1px_1px_0_rgba(255,255,255,0.2)] p-6 sm:p-9 text-white backdrop-blur-2xl"
      >
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] text-white/50 hover:text-white transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#5CE1E6] mb-2 font-semibold">
              <Network className="w-4 h-4 text-[#5CE1E6]" />
              <span>Network Onboarding</span>
            </div>

            <h3 id="join-network-title" className="text-2xl font-bold tracking-tight mb-2 text-white">
              Connect to DigiSynq
            </h3>

            <p className="text-xs sm:text-sm text-white/70 mb-6 leading-relaxed">
              Join the asset-light operating network. Access verified talent, idle capacity, and intelligent matching infrastructure.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono tracking-wider text-white/50 mb-1.5 font-semibold">
                  Your Primary Cinema Role:
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-[#070A12]/80 border border-white/[0.12] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#5CE1E6] focus:ring-1 focus:ring-[#5CE1E6]/30"
                >
                  <option value="Producer" className="bg-[#070A12] text-white">Producer / Production Company</option>
                  <option value="Production Crew" className="bg-[#070A12] text-white">Below-the-Line Crew / Technician</option>
                  <option value="Talent" className="bg-[#070A12] text-white">Actor / Director / Screenwriter</option>
                  <option value="Equipment Owner" className="bg-[#070A12] text-white">Rental House / Equipment Owner</option>
                  <option value="Exhibitor" className="bg-[#070A12] text-white">Theatrical Circuit / Cinema Operator</option>
                  <option value="Distributor" className="bg-[#070A12] text-white">Distributor / Sales Agent</option>
                  <option value="Brand" className="bg-[#070A12] text-white">Brand / Sponsor / Media Agency</option>
                  <option value="Investor" className="bg-[#070A12] text-white">Co-Financier / Private Capital</option>
                  <option value="Partner" className="bg-[#070A12] text-white">Technology / API Integration Partner</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono tracking-wider text-white/50 mb-1.5 font-semibold">
                  Full Name / Representative:
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Elena Rostova"
                  className="w-full bg-[#070A12]/80 border border-white/[0.12] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#5CE1E6] focus:ring-1 focus:ring-[#5CE1E6]/30"
                />
              </div>

              <div>
                <label className="block text-xs font-mono tracking-wider text-white/50 mb-1.5 font-semibold">
                  Work Email:
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@cinema-entity.com"
                  className="w-full bg-[#070A12]/80 border border-white/[0.12] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#5CE1E6] focus:ring-1 focus:ring-[#5CE1E6]/30"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono tracking-wider text-white/50 mb-1.5 font-semibold">
                    Company / Project Slate:
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Apex Pictures"
                    className="w-full bg-[#070A12]/80 border border-white/[0.12] rounded-xl px-3 py-2 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#5CE1E6] focus:ring-1 focus:ring-[#5CE1E6]/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono tracking-wider text-white/50 mb-1.5 font-semibold">
                    Primary Region:
                  </label>
                  <select
                    value={territory}
                    onChange={(e) => setTerritory(e.target.value)}
                    className="w-full bg-[#070A12]/80 border border-white/[0.12] rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#5CE1E6] focus:ring-1 focus:ring-[#5CE1E6]/30"
                  >
                    <option value="North America" className="bg-[#070A12] text-white">North America</option>
                    <option value="Europe / UK" className="bg-[#070A12] text-white">Europe & United Kingdom</option>
                    <option value="Asia Pacific" className="bg-[#070A12] text-white">Asia Pacific</option>
                    <option value="Latin America" className="bg-[#070A12] text-white">Latin America</option>
                    <option value="Middle East & Africa" className="bg-[#070A12] text-white">Middle East & Africa</option>
                    <option value="Global" className="bg-[#070A12] text-white">Global / Multi-Territory</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full text-xs sm:text-sm py-3 font-bold bg-white text-[#070A12] hover:bg-white/90 rounded-2xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                  Submit Network Request
                </button>
              </div>

              <p className="text-[11px] text-white/60 text-center font-mono">
                Reviewed under SynqTrust verification • Zero upfront hardware or CapEx commitment
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#5EF2B0]/15 border border-[#5EF2B0]/30 text-[#5EF2B0] flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(94,242,176,0.2)]">
              <Check className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white tracking-tight">
              Welcome to the Network
            </h3>

            <p className="text-xs sm:text-sm text-white/70 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{name}</strong>. Your onboarding profile for <span className="text-[#5CE1E6] font-medium">{role}</span> has been provisioned. A DigiSynq network coordinator will sync your access credentials.
            </p>

            <div className="p-4 rounded-2xl bg-[#070A12]/80 border border-white/[0.08] text-xs font-mono text-white/70 text-left space-y-1">
              <div>Network Node: {role}</div>
              <div>Territory: {territory}</div>
              <div>Trust Protocol: Pending Guild / COI Verification</div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="mt-4 px-6 py-2.5 text-xs tracking-wider font-bold bg-white text-[#070A12] hover:bg-white/90 rounded-2xl shadow-md transition-all"
            >
              Close & Explore Network
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};
