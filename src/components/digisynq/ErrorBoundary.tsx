import { Component } from 'react';
import type { ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * ui-ux-pro-max-skill react.csv #39 (High): catch render errors per
 * section instead of letting them crash the entire app.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown): void {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.error('[DigiSynq] Section render error:', error);
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="rounded-2xl border border-white/10 bg-[#0D1220]/80 p-8 text-center text-white" role="alert">
          <p className="text-sm font-semibold">This section failed to load.</p>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#5CE1E6]/35 bg-[#5CE1E6]/10 px-5 py-2.5 text-xs font-bold text-[#5CE1E6] transition-colors hover:bg-[#5CE1E6]/20"
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
