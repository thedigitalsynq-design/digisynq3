import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, ArrowRight, RotateCcw, Layers } from 'lucide-react';
import { PROBLEM_CATEGORIES, type ProblemCategory } from '../../data/website/problem_categories';
import { Link } from 'react-router-dom';

type EngineStep = 'select_category' | 'sub_questions' | 'synq_path';

interface Answer {
  questionId: string;
  values: string[];
}

interface ProblemEngineProps {
  compact?: boolean; // For embedding in homepage
}

export function ProblemEngine({ compact = false }: ProblemEngineProps) {
  const [step, setStep] = useState<EngineStep>('select_category');
  const [selectedCategory, setSelectedCategory] = useState<ProblemCategory | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const reset = () => {
    setStep('select_category');
    setSelectedCategory(null);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setSelectedOptions([]);
  };

  const handleCategorySelect = (cat: ProblemCategory) => {
    setSelectedCategory(cat);
    setSelectedOptions([]);
    if (cat.sub_questions.length === 0) {
      setStep('synq_path');
    } else {
      setStep('sub_questions');
    }
    setTimeout(() => containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
  };

  const handleOptionToggle = (option: string, type: 'single' | 'multi') => {
    if (type === 'single') {
      setSelectedOptions([option]);
    } else {
      setSelectedOptions(prev =>
        prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]
      );
    }
  };

  const handleNextQuestion = () => {
    if (!selectedCategory || selectedOptions.length === 0) return;

    const question = selectedCategory.sub_questions[currentQuestionIndex];
    const newAnswers = [...answers, { questionId: question.id, values: selectedOptions }];
    setAnswers(newAnswers);
    setSelectedOptions([]);

    if (currentQuestionIndex < selectedCategory.sub_questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setStep('synq_path');
    }
  };

  const synqPath = selectedCategory?.synq_paths[0];

  return (
    <div ref={containerRef} className="w-full" role="region" aria-label="Problem Engine — Start with your challenge">

      {/* ── Step 1: Category Selection ── */}
      {step === 'select_category' && (
        <div className="space-y-6">
          {!compact && (
            <div className="text-center">
              <div className="label-mono text-[#5CE1E6] mb-3">The DigiSynq problem engine</div>
              <h2 className="text-2xl sm:text-3xl font-denton font-black text-white mb-2">
                Start with your problem.
              </h2>
              <p className="text-sm text-white/50">
                Select the area that best describes your current challenge.
              </p>
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3">
            {PROBLEM_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat)}
                className="problem-chip group"
                id={`problem-cat-${cat.id}`}
                aria-label={`Problem category: ${cat.label}`}
              >
                <span className="text-2xl" role="img" aria-hidden="true">{cat.icon}</span>
                <span className="label-mono text-[10px] text-white/70 group-hover:text-[#5CE1E6] transition-colors">
                  {cat.label}
                </span>
              </button>
            ))}
          </div>

          {!compact && (
            <p className="text-center text-xs text-white/25 font-mono mt-4">
              Not sure where to start? Select OTHER — we'll work through it together.
            </p>
          )}
        </div>
      )}

      {/* ── Step 2: Sub-Questions ── */}
      {step === 'sub_questions' && selectedCategory && (
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <div className="label-mono text-[#5CE1E6] mb-1">
                {selectedCategory.icon} {selectedCategory.label}
              </div>
              <div className="text-xs text-white/40 font-mono">
                Question {currentQuestionIndex + 1} of {selectedCategory.sub_questions.length}
              </div>
            </div>
            <button
              onClick={reset}
              className="btn-ghost text-[10px] gap-1.5"
              aria-label="Restart problem selection"
            >
              <RotateCcw className="w-3 h-3" />
              Restart
            </button>
          </div>

          {/* Progress bar */}
          <div className="h-0.5 bg-white/[0.06] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#5CE1E6] transition-all duration-500"
              style={{
                width: `${((currentQuestionIndex + 1) / selectedCategory.sub_questions.length) * 100}%`
              }}
            />
          </div>

          {/* Question */}
          {selectedCategory.sub_questions[currentQuestionIndex] && (() => {
            const q = selectedCategory.sub_questions[currentQuestionIndex];
            return (
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-denton font-black text-white">
                  {q.question}
                </h3>
                {q.type === 'multi' && (
                  <p className="text-xs text-white/40 font-mono">Select all that apply</p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {q.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleOptionToggle(opt, q.type)}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left transition-all text-sm ${
                        selectedOptions.includes(opt)
                          ? 'border-[#5CE1E6]/50 bg-[#5CE1E6]/08 text-white'
                          : 'border-white/[0.07] bg-[#0E1120]/60 text-white/60 hover:border-white/20 hover:text-white/90'
                      }`}
                      aria-pressed={selectedOptions.includes(opt)}
                    >
                      <span className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center transition-all ${
                        q.type === 'multi' ? 'rounded-[4px]' : 'rounded-full'
                      } ${
                        selectedOptions.includes(opt)
                          ? 'border-[#5CE1E6] bg-[#5CE1E6]'
                          : 'border-white/20'
                      }`}>
                        {selectedOptions.includes(opt) && (
                          <div className="w-2 h-2 rounded-sm bg-[#03040A]" />
                        )}
                      </span>
                      {opt}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleNextQuestion}
                  disabled={selectedOptions.length === 0}
                  className={`btn-primary w-full justify-center ${
                    selectedOptions.length === 0 ? 'opacity-40 cursor-not-allowed' : ''
                  }`}
                >
                  {currentQuestionIndex < selectedCategory.sub_questions.length - 1 ? 'Next' : 'Build synq path'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            );
          })()}
        </div>
      )}

      {/* ── Step 3: SYNQ Path ── */}
      {step === 'synq_path' && selectedCategory && synqPath && (
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="label-mono text-[#5CE1E6]">
              {selectedCategory.icon} Synq path identified
            </div>
            <button onClick={reset} className="btn-ghost text-[10px] gap-1.5">
              <RotateCcw className="w-3 h-3" />
              Start over
            </button>
          </div>

          {/* SYNQ Path Card */}
          <div className="synq-card synq-card-active p-6 sm:p-8 space-y-6">
            <div>
              <div className="label-mono text-white/40 mb-2">Recommended approach</div>
              <h3 className="text-xl sm:text-2xl font-denton font-black text-white mb-2">
                {synqPath.label}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {synqPath.description}
              </p>
            </div>

            {/* Answers summary */}
            {answers.length > 0 && (
              <div className="bg-[#0E1120] rounded-xl p-4 space-y-2">
                <div className="label-mono text-white/30 mb-3">Your context</div>
                {answers.map((a) => {
                  const q = selectedCategory.sub_questions.find(sq => sq.id === a.questionId);
                  return q ? (
                    <div key={a.questionId} className="flex flex-col gap-1">
                      <span className="text-[10px] text-white/35 font-mono uppercase tracking-wide">{q.question}</span>
                      <span className="text-sm text-white/70">{a.values.join(', ')}</span>
                    </div>
                  ) : null;
                })}
              </div>
            )}

            {/* SYNQ Steps */}
            <div>
              <div className="label-mono text-white/30 mb-3">The synq process</div>
              <div className="flex flex-wrap items-center gap-2">
                {synqPath.steps.map((s, i) => (
                  <React.Fragment key={s}>
                    <span className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.07] text-xs font-mono text-white/70">
                      {s}
                    </span>
                    {i < synqPath.steps.length - 1 && (
                      <ArrowRight className="w-3 h-3 text-[#5CE1E6]/50" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Relevant capabilities */}
            <div>
              <div className="label-mono text-white/30 mb-3">Relevant capabilities</div>
              <div className="flex flex-wrap gap-2">
                {synqPath.relevant_capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#5CE1E6]/08 text-[#5CE1E6] border border-[#5CE1E6]/20"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                to="/start"
                className="btn-primary justify-center"
                id="problem-engine-start-synq-cta"
              >
                {synqPath.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="btn-secondary justify-center"
              >
                See how it works
              </Link>
            </div>
          </div>

          {/* Note */}
          <p className="text-center text-xs text-white/25 font-mono">
            This is an initial mapping. A DIGISYNQ conversation will help us understand your specific situation in more depth.
          </p>
        </div>
      )}
    </div>
  );
}
