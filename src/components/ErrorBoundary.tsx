import { Component, type ReactNode, type ErrorInfo } from 'react';
import { AlertTriangle, RefreshCw, Home, ChevronDown, ChevronUp, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onReset?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  showDetails: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      showDetails: false,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an unhandled page exception:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, showDetails: false });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  handleGoHome = () => {
    this.setState({ hasError: false, error: null, showDetails: false });
    window.location.href = '/';
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex flex-1 flex-col items-center justify-center p-6 text-center">
          <div className="glass-panel max-w-lg w-full border border-white/10 bg-[#090B10] p-6 sm:p-8 rounded-2xl shadow-2xl text-left fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-300">
                <AlertTriangle size={22} />
              </div>
              <div>
                <h2 className="text-[16px] font-semibold text-white leading-tight">
                  View Execution Interrupted
                </h2>
                <p className="text-[12px] text-zinc-400 mt-0.5">
                  An isolated error occurred while rendering this module.
                </p>
              </div>
            </div>

            <div className="my-4 rounded-xl border border-white/10 bg-black/50 p-3.5 text-[13px] text-zinc-300 font-mono leading-relaxed overflow-x-auto">
              <p className="text-zinc-300 font-semibold break-all">
                {this.state.error?.name || 'Error'}: {this.state.error?.message || 'Unknown runtime exception'}
              </p>
            </div>

            {this.state.error?.stack && (
              <div className="mb-4">
                <button
                  type="button"
                  onClick={() => this.setState((prev) => ({ showDetails: !prev.showDetails }))}
                  className="flex items-center gap-1.5 text-[12px] text-zinc-400 hover:text-white transition"
                >
                  {this.state.showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  <span>{this.state.showDetails ? 'Hide Stack Trace' : 'Show Technical Stack Trace'}</span>
                </button>
                {this.state.showDetails && (
                  <pre className="mt-2 max-h-40 overflow-y-auto rounded-lg border border-white/10 bg-black/70 p-3 text-[11px] font-mono text-zinc-400 leading-tight whitespace-pre-wrap break-all">
                    {this.state.error.stack}
                  </pre>
                )}
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={this.handleReset}
                className="bg-[#23B272] px-4 py-2 text-[13px] font-semibold text-black hover:bg-[#52E3A4] transition rounded-lg flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw size={16} />
                <span>Retry View</span>
              </button>

              <button
                type="button"
                onClick={this.handleGoHome}
                className="bg-white/10 px-4 py-2 text-[13px] font-medium text-white hover:bg-white/20 transition rounded-lg flex items-center gap-1.5 cursor-pointer"
              >
                <Home size={16} />
                <span>Return to Home</span>
              </button>

              <button
                type="button"
                onClick={this.handleReload}
                className="bg-transparent px-3 py-2 text-[12px] text-zinc-400 hover:text-white transition rounded-lg flex items-center gap-1 ml-auto cursor-pointer"
              >
                <RefreshCw size={15} />
                <span>Reload App</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
