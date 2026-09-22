import { useEffect } from 'react';
import type { FC } from 'react';
import type { ProductItem } from '../types';
import { X, Check, ArrowUpRight, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { useModalFocus } from '../../hooks/useModalFocus';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenJoinModal: (role?: string) => void;
  onOpenRunbook?: (chapterIndex?: number) => void;
}

export const ProductDetailModal: FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenJoinModal,
  onOpenRunbook,
}) => {
  const dialogRef = useModalFocus<HTMLDivElement>(product !== null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (product) {
      window.addEventListener('keydown', handleKeyDown);
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = prevOverflow;
      };
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/40 backdrop-blur-xl overflow-y-auto"
      id="product-detail-modal"
      ref={dialogRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-detail-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl rounded-3xl bg-[#0E0E14] border border-white/[0.12] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col text-white"
      >
        {/* Modal Header / Hero */}
        <div className="p-6 sm:p-9 bg-[#0D1220] border-b border-white/[0.08] relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full apple-glass text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors focus:outline-none"
            aria-label="Close product view"
            id="btn-close-product-modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider bg-[#5CE1E6]/10 text-[#5CE1E6] border border-[#5CE1E6]/30">
              {product.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider apple-glass text-[var(--text-secondary)]">
              Model: {product.businessModel}
            </span>
          </div>

          <h2 id="product-detail-title" className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            {product.name}
          </h2>
          <p className="mt-2 text-base sm:text-lg text-[var(--text-secondary)]">
            {product.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenJoinModal(product.name);
              }}
              className="apple-btn-primary inline-flex items-center gap-2 text-xs sm:text-sm px-6 py-2.5 font-semibold cursor-pointer"
              id="modal-cta-get-started"
            >
              <span>Access {product.name}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenJoinModal('Partner');
              }}
              className="apple-btn-secondary inline-flex items-center gap-2 text-xs sm:text-sm px-5 py-2.5 font-medium cursor-pointer"
            >
              Partner Integration
            </button>
            {onOpenRunbook && (
              <button
                onClick={() => {
                  onClose();
                  onOpenRunbook(2);
                }}
                className="inline-flex items-center gap-2 text-xs sm:text-sm px-5 py-2.5 rounded-full bg-[#5CE1E6]/10 hover:bg-[#5CE1E6]/20 border border-[#5CE1E6]/35 text-[#5CE1E6] hover:text-white font-mono font-bold transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Inspect in Runbook (Chapter 03)</span>
              </button>
            )}
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-9 space-y-8 overflow-y-auto">
          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0D1220]/80 border border-[#FFC857]/30 text-white/90">
              <span className="text-xs font-mono tracking-wider text-[#FFC857] block mb-2 font-semibold">
                The Friction Solved
              </span>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {product.problemSolved}
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl apple-glass">
              <span className="text-xs font-mono tracking-wider text-[#5CE1E6] block mb-2 font-semibold">
                Operational Overview
              </span>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Who It's For */}
          <div>
            <span className="text-xs font-mono tracking-wider text-[var(--text-tertiary)] block mb-3 font-semibold">
              Target Cinema Ecosystem Stakeholders
            </span>
            <div className="flex flex-wrap gap-2">
              {product.targetUsers.map((user) => (
                <span
                  key={user}
                  className="px-3.5 py-1.5 rounded-full apple-glass text-xs font-medium text-[var(--text-primary)]"
                >
                  {user}
                </span>
              ))}
            </div>
          </div>

          {/* Capabilities Grid */}
          <div>
            <span className="text-xs font-mono tracking-wider text-[var(--text-tertiary)] block mb-3 font-semibold">
              Core Technical Capabilities
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.capabilities.map((cap) => (
                <div
                  key={cap}
                  className="flex items-start gap-3 p-4 rounded-2xl apple-glass"
                >
                  <Check className="w-4 h-4 text-[#5EF2B0] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[var(--text-primary)] font-medium leading-normal">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Workflow Steps */}
          <div>
            <span className="text-xs font-mono tracking-wider text-[var(--text-tertiary)] block mb-3 font-semibold">
              Automated Lifecycle Workflow
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {product.workflowSteps.map((step) => (
                <div
                  key={step}
                  className="p-4 rounded-2xl apple-glass text-left"
                >
                  <p className="text-xs text-[var(--text-secondary)] leading-snug">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Network Connections */}
          <div>
            <span className="text-xs font-mono tracking-wider text-[var(--text-tertiary)] block mb-3 font-semibold">
              Interconnected Graph Modules
            </span>
            <p className="text-xs text-[var(--text-secondary)] mb-2.5 leading-relaxed">
              This product is not an isolated point solution; it seamlessly feeds data into and receives signals from:
            </p>
            <div className="flex flex-wrap gap-2">
              {product.networkConnections.map((conn) => (
                <span
                  key={conn}
                  className="px-3.5 py-1 rounded-full text-xs font-mono bg-[#4D8DFF]/10 border border-[#4D8DFF]/25 text-[#4D8DFF]"
                >
                  ⇄ {conn}
                </span>
              ))}
            </div>
          </div>

          {/* Business Model Summary */}
          <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[var(--text-tertiary)] font-mono">
            <div>
              Commercial Framework:{' '}
              <span className="text-[var(--text-primary)] font-bold">{product.businessModel}</span>
            </div>
            <div className="text-[var(--text-tertiary)]">
              DigiSynq Asset-Light Operating Network
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
