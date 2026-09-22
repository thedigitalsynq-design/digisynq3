import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { MATRIX_FILTERS, PROBLEM_MATRIX_DATA } from '../../data/problemMatrix';
import { audioTelemetry } from '../../utils/audioTelemetry';

export default function ProblemMatrix({ onOpenIntake }) {
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedRowId, setExpandedRowId] = useState('mat-01');

  const filteredData = useMemo(() => {
    return PROBLEM_MATRIX_DATA.filter((item) => {
      const matchesFilter = selectedFilter === 'ALL' || item.category === selectedFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || (
        item.stakeholder.toLowerCase().includes(q) ||
        item.visibleProblem.toLowerCase().includes(q) ||
        item.rootCauseCategory.toLowerCase().includes(q) ||
        item.rootCauseExplanation.toLowerCase().includes(q) ||
        item.contributingCauses.some((c) => c.toLowerCase().includes(q)) ||
        item.affectedStakeholders.some((s) => s.toLowerCase().includes(q))
      );
      return matchesFilter && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    audioTelemetry.playHover();
  };

  const toggleRow = (id) => {
    if (expandedRowId === id) {
      setExpandedRowId(null);
    } else {
      setExpandedRowId(id);
      audioTelemetry.playSelect();
    }
  };

  return (
    <section className="matrix-section section-block" id="matrix">
      <div className="container">
        <div className="section-eyebrow">
          <span>04 — The problem map</span>
        </div>
        <h2 className="section-title">
          Everyone sees a different problem.
        </h2>
        <p className="section-subtitle">
          Behind every visible friction in entertainment is an unaddressed root cause. Search and filter across 12 diagnostic dimensions to see how symptoms reported by one stakeholder trace to systemic causes across the ecosystem.
        </p>

        {/* Search & Category Filter Controls */}
        <div className="matrix-controls diagnostic-panel">
          {/* Real-time Search Input */}
          <div className="search-bar-wrapper">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              className="matrix-search-input"
              placeholder="Search by stakeholder, visible friction, root cause, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
                Clear
              </button>
            )}
          </div>

          {/* 12 Filter Dimension Badges */}
          <div className="filter-pills-row">
            <span className="mono-readout filter-row-label">Filters:</span>
            {MATRIX_FILTERS.map((f) => {
              const isSelected = selectedFilter === f;
              return (
                <button
                  key={f}
                  className={`matrix-filter-pill ${isSelected ? 'active' : ''}`}
                  onClick={() => handleFilterClick(f)}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Matrix Results Table */}
        <div className="matrix-table-container diagnostic-panel">
          <div className="matrix-results-header">
            <span className="mono-readout">
              System matrix // Showing <strong className="text-signal">{filteredData.length}</strong> diagnostic entries
            </span>
            <span className="mono-readout text-dim">Click any row for deep causal trace</span>
          </div>

          <div className="matrix-rows-stack">
            {filteredData.length === 0 ? (
              <div className="matrix-empty-state">
                <p>No systemic entries found matching your query criteria.</p>
                <button className="btn-ghost" onClick={() => { setSelectedFilter('ALL'); setSearchQuery(''); }}>
                  Reset all filters
                </button>
              </div>
            ) : (
              filteredData.map((row) => {
                const isExpanded = expandedRowId === row.id;
                return (
                  <div
                    key={row.id}
                    className={`matrix-entry-card ${isExpanded ? 'expanded' : ''}`}
                  >
                    {/* Collapsed Header Summary */}
                    <div
                      className="matrix-row-summary"
                      onClick={() => toggleRow(row.id)}
                    >
                      <div className="row-stakeholder-col">
                        <span className="telemetry-tag">{row.category}</span>
                        <h4 className="row-stakeholder-name">{row.stakeholder}</h4>
                      </div>

                      <div className="row-problem-col">
                        <span className="row-problem-text">{row.visibleProblem}</span>
                      </div>

                      <div className="row-root-col">
                        <span className="mono-readout text-signal">{row.rootCauseCategory}</span>
                      </div>

                      <div className="row-leverage-col">
                        <span className="mono-readout leverage-badge">Leverage: {row.leverageScore}</span>
                        <div className="expand-chevron">
                          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                      </div>
                    </div>

                    {/* Expanded Detailed Diagnostic View */}
                    {isExpanded && (
                      <div className="matrix-detail-tray">
                        <div className="detail-grid">
                          {/* Contributing Factors */}
                          <div className="detail-col">
                            <div className="mono-readout detail-heading">Contributing factors:</div>
                            <ul className="detail-list">
                              {row.contributingCauses.map((c, i) => (
                                <li key={i} className="detail-list-item">
                                  <span className="detail-bullet"></span>
                                  <span>{c}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Root Cause Explanation */}
                          <div className="detail-col root-box-col">
                            <div className="mono-readout detail-heading text-signal">
                              Structural root cause analysis:
                            </div>
                            <p className="root-explanation-p">{row.rootCauseExplanation}</p>
                          </div>

                          {/* Affected Counterparties */}
                          <div className="detail-col">
                            <div className="mono-readout detail-heading">Affected stakeholders:</div>
                            <div className="affected-badge-wrap">
                              {row.affectedStakeholders.map((stk) => (
                                <span key={stk} className="stk-small-pill">
                                  {stk}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Intervention Points */}
                          <div className="detail-col">
                            <div className="mono-readout detail-heading">Potential intervention points:</div>
                            <div className="intervention-badge-wrap">
                              {row.potentialInterventionPoints.map((tool) => (
                                <span key={tool} className="tool-small-pill">
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Intake Action Bar */}
                        <div className="detail-cta-bar">
                          <span className="mono-readout text-muted">
                            Is your production experiencing this breakdown?
                          </span>
                          <button
                            className="btn-signal btn-sm"
                            onClick={() => {
                              audioTelemetry.playSelect();
                              onOpenIntake(row.stakeholder, row.visibleProblem);
                            }}
                          >
                            <span>Initiate intervention discovery</span>
                            <ArrowRight size={13} />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      <style>{`
        .matrix-section {
          position: relative;
        }

        .matrix-controls {
          margin-bottom: 1.5rem;
          padding: 1.5rem;
        }

        .search-bar-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          color: var(--text-muted);
        }

        .matrix-search-input {
          width: 100%;
          background: rgba(5, 6, 8, 0.85);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 0.85rem 1rem 0.85rem 2.75rem;
          color: var(--text-pure);
          font-family: var(--font-body);
          font-size: 0.95rem;
          transition: border-color var(--transition-fast);
        }

        .matrix-search-input:focus {
          outline: none;
          border-color: var(--signal);
          box-shadow: 0 0 16px var(--signal-glow);
        }

        .clear-search-btn {
          position: absolute;
          right: 1rem;
          background: none;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
        }

        .clear-search-btn:hover {
          color: var(--text-pure);
        }

        .filter-pills-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .filter-row-label {
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 600;
          margin-right: 0.25rem;
        }

        .matrix-filter-pill {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--glass-border);
          color: var(--text-muted);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-pill);
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .matrix-filter-pill:hover {
          border-color: var(--glass-border-hover);
          color: var(--text-pure);
          background: rgba(255, 255, 255, 0.08);
        }

        .matrix-filter-pill.active {
          background: var(--glass-bg-signal);
          border-color: var(--glass-border-signal);
          color: var(--signal-bright);
          box-shadow: 0 0 16px var(--signal-glow);
        }

        /* Table Container */
        .matrix-table-container {
          padding: 0;
          overflow: hidden;
        }

        .matrix-results-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--glass-border);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .matrix-rows-stack {
          display: flex;
          flex-direction: column;
        }

        .matrix-entry-card {
          border-bottom: 1px solid var(--glass-border);
          transition: background var(--transition-fast);
        }

        .matrix-entry-card:last-child {
          border-bottom: none;
        }

        .matrix-entry-card:hover {
          background: rgba(255, 255, 255, 0.035);
        }

        .matrix-entry-card.expanded {
          background: var(--glass-bg-signal);
          border-left: 3px solid var(--signal);
        }

        .matrix-row-summary {
          display: grid;
          grid-template-columns: 200px 1.5fr 1fr 140px;
          gap: 1.5rem;
          align-items: center;
          padding: 1.25rem 1.5rem;
          cursor: pointer;
        }

        .row-stakeholder-col {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .row-stakeholder-name {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-pure);
        }

        .row-problem-text {
          font-size: 0.95rem;
          color: var(--text-main);
          font-weight: 500;
        }

        .row-leverage-col {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
        }

        .leverage-badge {
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--telemetry);
          background: var(--glass-bg-telemetry);
          border: 1px solid var(--border-telemetry);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-pill);
        }

        .expand-chevron {
          color: var(--text-muted);
        }

        /* Expanded Detail Tray */
        .matrix-detail-tray {
          padding: 1.5rem;
          background: rgba(18, 20, 28, 0.5);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px dashed var(--glass-border);
        }

        .detail-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .detail-heading {
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .detail-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .detail-list-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .detail-bullet {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--signal);
          margin-top: 0.4rem;
        }

        .root-box-col {
          background: var(--glass-bg-signal);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--glass-border-signal);
          box-shadow: 0 0 20px rgba(62, 180, 137, 0.18);
          padding: 1rem;
          border-radius: var(--radius-md);
        }

        .root-explanation-p {
          font-size: 0.88rem;
          color: var(--text-main);
          line-height: 1.5;
        }

        .affected-badge-wrap, .intervention-badge-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .stk-small-pill {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 600;
          padding: 0.2rem 0.6rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
          color: var(--text-muted);
          border-radius: var(--radius-pill);
        }

        .tool-small-pill {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 600;
          padding: 0.2rem 0.6rem;
          background: var(--glass-bg-signal);
          backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border-signal);
          color: var(--signal-bright);
          border-radius: var(--radius-pill);
        }

        .detail-cta-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
        }

        .matrix-empty-state {
          padding: 3rem;
          text-align: center;
          color: var(--text-muted);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        @media (max-width: 960px) {
          .matrix-row-summary {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
          .detail-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
