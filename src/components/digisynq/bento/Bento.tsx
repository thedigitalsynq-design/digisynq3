import type { CSSProperties, FC, ReactNode } from 'react';

export type BentoTone = 'neutral' | 'blue' | 'green' | 'purple';
export type BentoAccent = '#2997ff' | '#64d2ff' | '#ff453a' | '#30d158' | '#bf5af2' | '#f5f5f7';
export type BentoBadgeTone = 'green' | 'blue' | 'purple' | 'cyan';

const toneClass: Record<BentoTone, string> = {
  neutral: 'bento-card-neutral',
  blue: 'bento-card-blue bento-glow-blue',
  green: 'bento-card-green bento-glow-green',
  purple: 'bento-card-purple bento-glow-purple',
};

interface BentoGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
  style?: CSSProperties;
}

/** Zero-gap Apple grid: gap 6px, stretch fill, no align-items:start. */
export const BentoGrid: FC<BentoGridProps> = ({ children, columns = 4, className = '', style }) => (
  <div className={`bento-grid bento-grid-${columns} ${className}`} style={style}>
    {children}
  </div>
);

interface BentoCardProps {
  children: ReactNode;
  tone?: BentoTone;
  className?: string;
  style?: CSSProperties;
  /** designer-skills affordance: when set, card renders as a link target. */
  href?: string;
  title?: string;
  ariaLabel?: string;
  primary?: boolean;
}

export const BentoCard: FC<BentoCardProps> = ({
  children,
  tone = 'neutral',
  className = '',
  style,
  href,
  title,
  ariaLabel,
  primary = false,
}) => {
  const cls = `bento-card ${toneClass[tone]}${primary ? ' bento-card-primary' : ''} ${className}`;
  if (href) {
    return (
      <a
        href={href}
        title={title}
        aria-label={ariaLabel ?? title}
        data-bento-link
        className={cls}
        style={style}
      >
        {children}
      </a>
    );
  }
  return (
    <div className={cls} style={style}>
      {children}
    </div>
  );
};

interface BentoStatProps {
  label: string;
  value: string;
  sub?: string;
  accent?: BentoAccent;
  tone?: BentoTone;
  badge?: string;
  badgeTone?: BentoBadgeTone;
  valueSize?: number;
  href?: string;
  title?: string;
  /** designer-skills von-restorff: one primary emphasis per ledger. */
  primary?: boolean;
}

export const BentoStat: FC<BentoStatProps> = ({
  label,
  value,
  sub,
  accent = '#f5f5f7',
  tone = 'neutral',
  badge,
  badgeTone = 'green',
  valueSize = 48,
  href,
  title,
  primary = false,
}) => (
  <BentoCard tone={tone} href={href} title={title} ariaLabel={`${value} ${label}`} primary={primary}>
    <div>
      <div className="bento-label">{label}</div>
      <div className="bento-num" style={{ color: accent, fontSize: valueSize }}>
        {value}
      </div>
      {sub && <div className="bento-sub" style={{ marginTop: 6 }}>{sub}</div>}
    </div>
    {badge && (
      <div>
        <span className={`bento-badge bento-badge-${badgeTone}`}>{badge}</span>
      </div>
    )}
  </BentoCard>
);

interface BentoCategoryProps {
  name: string;
  focus: string;
  pills: string[];
  accent?: BentoAccent;
  tone?: BentoTone;
}

export const BentoCategory: FC<BentoCategoryProps> = ({
  name,
  focus,
  pills,
  accent = '#2997ff',
  tone = 'neutral',
}) => (
  <BentoCard tone={tone}>
    <div>
      <div className="bento-category-name" style={{ color: accent }}>
        {name}
      </div>
      <div className="bento-category-focus">{focus}</div>
      <div className="bento-pills-wrap">
        {pills.map((pill) => (
          <span key={pill} className="bento-pill">
            {pill}
          </span>
        ))}
      </div>
    </div>
  </BentoCard>
);

interface BentoBarDatum {
  value: string;
  label: string;
  height: number;
  opacity?: number;
}

interface BentoChartProps {
  title: string;
  bars: BentoBarDatum[];
  tone?: BentoTone;
}

export const BentoChart: FC<BentoChartProps> = ({ title, bars, tone = 'neutral' }) => (
  <BentoCard tone={tone}>
    <div className="bento-label" style={{ marginBottom: 0 }}>{title}</div>
    <div className="bento-bar-track">
      {bars.map((bar) => (
        <div key={bar.label} className="bento-bar-group">
          <div className="bento-bar-val">{bar.value}</div>
          <div
            className="bento-bar"
            style={{ height: bar.height, opacity: bar.opacity ?? 1 }}
          />
          <div className="bento-bar-lbl">{bar.label}</div>
        </div>
      ))}
    </div>
  </BentoCard>
);

interface BentoQuoteProps {
  children: ReactNode;
  className?: string;
}

export const BentoQuote: FC<BentoQuoteProps> = ({ children, className = '' }) => (
  <div className={`bento-card bento-quote ${className}`}>
    <div className="bento-quote-text" style={{ fontSize: 24 }}>
      {children}
    </div>
  </div>
);

interface BentoHighlightProps {
  value: string;
  label: string;
  sub?: string;
  gradient?: string;
}

export const BentoHighlight: FC<BentoHighlightProps> = ({
  value,
  label,
  sub,
  gradient = 'linear-gradient(145deg, #059669, #34d399, #6ee7b7)',
}) => (
  <div className="bento-card bento-highlight" style={{ background: gradient }}>
    <div className="bento-num" style={{ fontSize: 72 }}>{value}</div>
    <div className="bento-label">{label}</div>
    {sub && (
      <div className="bento-sub" style={{ color: 'rgba(255,255,255,0.65)' }}>
        {sub}
      </div>
    )}
  </div>
);
