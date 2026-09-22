import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS_CATALOG } from '../../data/platformsData';
import { ProductItem, ProductCategory, BusinessModel, TargetUser } from '../types';
import { Search, X, ArrowUpRight, ArrowRight } from 'lucide-react';
import { ProductDetailModal } from './ProductDetailModal';

const CATEGORIES: ProductCategory[] = [
  'Intelligence',
  'Audience',
  'Reputation',
  'Talent',
  'Production',
  'Distribution',
  'Marketing',
  'Content & Rights',
  'Capital',
  'Assets',
  'Operations',
  'Network',
];

const BUSINESS_MODELS: BusinessModel[] = [
  'SaaS',
  'Marketplace',
  'Enterprise',
  'Intelligence',
  'API',
];

const TARGET_USERS: TargetUser[] = [
  'Producers',
  'Production Teams',
  'Talent & Crew',
  'Distributors',
  'Exhibitors',
  'Brands & Sponsors',
  'Creators',
  'Investors',
  'Audiences',
];

interface ProductDirectoryProps {
  initialCategory?: string;
  onOpenJoinModal: (role?: string) => void;
  onOpenRunbook?: (chapterIndex?: number) => void;
}

export const ProductDirectory: React.FC<ProductDirectoryProps> = ({
  initialCategory,
  onOpenJoinModal,
  onOpenRunbook,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'All');
  const [selectedModel, setSelectedModel] = useState<string>('All');
  const [selectedUser, setSelectedUser] = useState<string>('All');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);
  const [showAllProducts, setShowAllProducts] = useState(false);

  // Filter logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS_CATALOG.filter((item) => {
      // Search text match
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.capabilities.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category match
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      // Model match
      const matchesModel =
        selectedModel === 'All' || item.businessModel === selectedModel;

      // User match
      const matchesUser =
        selectedUser === 'All' || item.targetUsers.includes(selectedUser as TargetUser);

      return matchesSearch && matchesCategory && matchesModel && matchesUser;
    });
  }, [searchQuery, selectedCategory, selectedModel, selectedUser]);

  const isFiltering = searchQuery.trim() !== '' || selectedCategory !== 'All' || selectedModel !== 'All' || selectedUser !== 'All';
  const displayedProducts = (showAllProducts || isFiltering) ? filteredProducts : filteredProducts.slice(0, 6);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedModel('All');
    setSelectedUser('All');
  };

  return (
    <section
      id="product-directory"
      className="py-24 sm:py-32 bg-[var(--bg-canvas)] relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div data-augmented-ui="tl-clip br-clip" className="aug-hud-chip inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/90 border border-[#4D8DFF]/30 text-[#4D8DFF] font-mono text-[11px] font-bold tracking-[2px] mb-6 backdrop-blur-xl shadow-[0_0_15px_rgba(77,141,255,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4D8DFF] shadow-[0_0_8px_#4D8DFF]" />
            Searchable ecosystem directory.
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[0.98] font-denton-extrabold">
            Explore every capability.<br />
            <span className="text-white/75">Across the network.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Discover the 82 specialized capabilities powering modern cinema production, finance, distribution, and exhibition.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12 apple-card rounded-2xl p-6">
          {/* Main Search Input */}
          <div className="relative mb-6">
            <Search className="w-5 h-5 text-[var(--text-tertiary)] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              aria-label="Search products, capabilities, or keywords"
              placeholder="Search across 82 products, capabilities, or keywords (e.g. 'Virtual Production', 'Escrow', 'DRM')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/[0.12] rounded-xl pl-12 pr-4 py-3.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[#4D8DFF] transition-colors"
              id="input-product-search"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] hover:text-white before:absolute before:-inset-2 before:content-['']"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-wider font-semibold">
                Filter by Functional Category:
              </span>
              {(selectedCategory !== 'All' || selectedModel !== 'All' || selectedUser !== 'All' || searchQuery) && (
                <button
                  onClick={resetFilters}
                  className="text-xs text-[#4D8DFF] hover:underline flex items-center gap-1 font-medium"
                >
                  <X className="w-3 h-3" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 border ${
                      isSelected
                        ? 'bg-white text-black border-transparent shadow-sm font-bold'
                        : 'bg-white/[0.04] border-white/[0.10] text-white/60 hover:text-white hover:bg-white/[0.08]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Secondary Filters: User Type & Business Model */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.06]">
            {/* Target User */}
            <div className="flex items-center gap-2.5">
              <label htmlFor="select-target-user" className="text-xs font-mono text-[var(--text-tertiary)] whitespace-nowrap font-medium">
                Stakeholder:
              </label>
              <select
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/[0.10] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#4D8DFF]"
                id="select-target-user"
              >
                <option value="All" className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">All Cinema Stakeholders</option>
                {TARGET_USERS.map((user) => (
                  <option key={user} value={user} className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">
                    {user}
                  </option>
                ))}
              </select>
            </div>

            {/* Business Model */}
            <div className="flex items-center gap-2.5">
              <label htmlFor="select-business-model" className="text-xs font-mono text-[var(--text-tertiary)] whitespace-nowrap font-medium">
                Model:
              </label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/[0.10] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#4D8DFF]"
                id="select-business-model"
              >
                <option value="All" className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">All Business Models</option>
                {BUSINESS_MODELS.map((model) => (
                  <option key={model} value={model} className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">
                    {model}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-[var(--text-tertiary)] mb-6">
          <span>
            Showing <strong className="text-[var(--text-primary)] font-semibold">{displayedProducts.length}</strong> of {filteredProducts.length} capabilities
          </span>
          {selectedCategory !== 'All' && (
            <span className="text-[#4D8DFF] font-medium">Category: {selectedCategory}</span>
          )}
        </div>

        {/* Product Cards Grid */}
        {displayedProducts.length > 0 ? (
          <div>
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[6px]"
            >
              <AnimatePresence mode="popLayout">
                {displayedProducts.map((item) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -3, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } }}
                    key={item.id}
                    className="bento-card flex flex-col justify-between group"
                    id={`product-card-${item.id}`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full apple-glass text-[#5CE1E6]">
                          {item.category}
                        </span>
                        <span className="text-[11px] font-mono text-[var(--text-tertiary)]">
                          {item.businessModel}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[#5CE1E6] transition-colors mb-1 tracking-tight">
                        {item.name}
                      </h3>

                      <p className="text-xs text-[var(--text-secondary)] font-medium mb-3">
                        {item.tagline}
                      </p>

                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3 mb-4">
                        {item.description}
                      </p>

                      <div className="mb-4">
                        <span className="text-[10px] font-mono tracking-wider text-[var(--text-tertiary)] block mb-1.5 font-semibold">
                          Key Capabilities:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.capabilities.slice(0, 3).map((cap) => (
                            <span
                              key={cap}
                              className="text-[10px] bg-white/[0.06] text-white/60 px-2.5 py-0.5 rounded-full border border-white/[0.08]"
                            >
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[11px] text-[var(--text-tertiary)] font-mono truncate max-w-[170px]">
                        <span>For:</span>
                        <span className="text-[var(--text-primary)] font-medium truncate">
                          {item.targetUsers[0]}
                        </span>
                      </div>

                      <button
                        onClick={() => setActiveModalProduct(item)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#5CE1E6] hover:underline transition-colors"
                      >
                        <span>View Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Crisp Expand / Runbook Callout */}
            {!isFiltering && filteredProducts.length > 6 && (
              <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setShowAllProducts(!showAllProducts)}
                  className="px-6 py-3 rounded-full bg-white text-[#070A12] hover:bg-white/90 text-xs font-bold tracking-[1.5px] transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer active:scale-95"
                >
                  {showAllProducts ? 'Collapse Preview' : `Explore All ${PRODUCTS_CATALOG.length} Capabilities`}
                </button>

                {onOpenRunbook && (
                  <button
                    onClick={() => onOpenRunbook(2)}
                    className="px-6 py-3 rounded-full bg-[#5CE1E6]/10 hover:bg-[#5CE1E6]/20 border border-[#5CE1E6]/30 text-[#5CE1E6] hover:text-white text-xs font-mono font-bold tracking-[1.5px] transition-all duration-200 cursor-pointer flex items-center gap-2"
                  >
                    <span>Read Architectural Runbook (Chapter 03)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 apple-card rounded-3xl"
          >
            <p className="text-base text-[var(--text-secondary)] mb-4">
              No products found matching your current filter criteria.
            </p>
            <button
              onClick={resetFilters}
              className="apple-btn-primary px-5 py-2.5 text-xs tracking-wider font-semibold"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Deep Architecture Modal */}
      <AnimatePresence>
        {activeModalProduct && (
          <ProductDetailModal
            product={activeModalProduct}
            onClose={() => setActiveModalProduct(null)}
            onOpenJoinModal={(role) => {
              setActiveModalProduct(null);
              onOpenJoinModal(role);
            }}
            onOpenRunbook={(chapterIndex) => {
              setActiveModalProduct(null);
              onOpenRunbook?.(chapterIndex);
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
